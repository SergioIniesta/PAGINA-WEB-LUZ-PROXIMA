// Browser checks against the local preview. Never opens WhatsApp or sends data.
const { chromium } = require(process.env.PLAYWRIGHT_PATH || 'playwright');
const fs = require('node:fs');
const assert = require('node:assert/strict');
(async () => {
  const browser = await chromium.launch({headless:true, ...(process.env.CHROME_PATH ? {executablePath:process.env.CHROME_PATH} : {})});
  const errors = [];
  const results = [];
  try {
    const page = await browser.newPage();
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => {if(message.type() === 'error') errors.push(message.text());});
    for (const width of [320,390,768,1024,1440]) {
      await page.setViewportSize({width,height:900});
      for (const language of ['es','en']) {
        await page.goto(`http://127.0.0.1:4173/?lang=${language}`);
        await page.evaluate(() => document.fonts.ready);
        assert.equal(await page.locator('html').getAttribute('lang'),language);
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth),false,`Overflow at ${width}/${language}`);
        assert.equal(await page.locator('h1').count(),1);
        assert.equal(await page.locator('.faq details').count(),7);
        assert.deepEqual(await page.evaluate(() => [...document.querySelectorAll('a[href^="#"]')].filter(a=>!document.querySelector(a.getAttribute('href'))).map(a=>a.hash)),[]);
        if ([390,1440].includes(width)) await page.screenshot({path:`artifacts/despues-${width}-${language}.png`,fullPage:true});
        results.push(`Layout ${width}px / ${language}: OK`);
      }
    }
    await page.goto('http://127.0.0.1:4173/');
    await page.locator('.faq summary').first().click();
    assert.equal(await page.locator('.faq details').first().getAttribute('open'),'');
    await page.locator('.faq summary').first().focus();
    await page.keyboard.press('Enter');
    assert.equal(await page.locator('.faq details').first().getAttribute('open'),null);
    await page.locator('.services a').first().click();
    const description = page.locator('[name="descripcion"]');
    assert.equal(await description.inputValue(),'Quiero revisar mi tarifa de luz.');
    await page.locator('.interest-picker button').nth(1).click();
    assert.equal(await description.inputValue(),'Quiero revisar mi tarifa de gas.');
    await description.fill('Consulta de prueba: revisar consumo de mi oficina.');
    await page.locator('.interest-picker button').nth(2).click();
    assert.equal(await description.inputValue(),'Consulta de prueba: revisar consumo de mi oficina.');
    await page.locator('[name="nombre"]').fill('Prueba');
    await page.locator('[name="telefono"]').fill('6       1');
    await page.locator('button[type="submit"]').click();
    assert.equal(await page.locator('#send-query').isVisible(),false);
    await page.locator('[name="telefono"]').fill('600 000 000');
    await page.locator('button[type="submit"]').click();
    assert.equal(await page.locator('#send-query').isVisible(),true);
    const target = new URL(await page.locator('#send-query').getAttribute('href'));
    assert.equal(target.origin,'https://wa.me');
    assert.equal(target.pathname,'/34661114453');
    assert.ok(target.searchParams.get('text').includes('Consulta de prueba'));
    await page.locator('#language').selectOption('en');
    assert.equal(await description.inputValue(),'Consulta de prueba: revisar consumo de mi oficina.');
    assert.equal(await page.locator('#send-query').isVisible(),false);
    await page.locator('button[type="submit"]').click();
    assert.ok((await page.locator('#form-status').innerText()).startsWith('Your enquiry is ready.'));
    await description.fill('Updated enquiry for testing only.');
    assert.equal(await page.locator('#send-query').isVisible(),false);
    await page.reload();
    assert.equal(await page.locator('html').getAttribute('lang'),'en');
    results.push('FAQ mouse/keyboard; suggestions; user text preserved; phone validation; WhatsApp destination; language switching; stale message invalidation: OK');
    // Every original editorial Spanish node should be covered in the English map.
    await page.goto('http://127.0.0.1:4173/');
    const uncovered = await page.evaluate(() => {
      const walker = document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
      const missing=[];
      while(walker.nextNode()) {
        const text=walker.currentNode.textContent.trim();
        if(/[a-záéíóúñ]/i.test(text) && !Object.hasOwn(english,text) && !/^(LUZ|PRÓXIMA|Luz Próxima|Español|English|info@luzproxima.com)$/.test(text)) missing.push(text);
      }
      return missing;
    });
    assert.deepEqual(uncovered,[],'Untranslated text');
    const noScript = await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:900}});
    const fallback = await noScript.newPage();
    await fallback.goto('http://127.0.0.1:4173/');
    await fallback.locator('.faq summary').first().click();
    assert.equal(await fallback.locator('.faq details').first().getAttribute('open'),'');
    assert.equal(await fallback.locator('a[href="tel:+34661114453"]').count()>0,true);
    await noScript.close();
    assert.deepEqual(errors,[],'Browser errors');
    results.push('Translation coverage; no-JavaScript FAQ/contact fallback; browser console: OK');
    fs.writeFileSync('artifacts/verificacion-web.txt',results.join('\n')+'\n');
    console.log(results.join('\n'));
  } finally { await browser.close(); }
})().catch(error=>{console.error(error);process.exitCode=1;});
