const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const fs=require('fs'); const snip=fs.readFileSync('hero-snippet.html','utf8');
(async()=>{
 const b=await chromium.launch({proxy:{server:process.env.HTTPS_PROXY}});
 for (const [n,w,h,m] of [['desktop',1366,800,false],['mobile',390,844,true]]) {
  const c=await b.newContext({viewport:{width:w,height:h},isMobile:m,ignoreHTTPSErrors:true});
  
  const p=await c.newPage();
  await p.goto('https://norraoffice.com/',{waitUntil:'load',timeout:90000});
  await p.evaluate(s=>{const main=document.querySelector('main');['p.eyebrow','h1','p.home-intro'].forEach(q=>main.querySelector(':scope > '+q)?.remove());
    main.insertAdjacentHTML('afterbegin',s);
    document.querySelectorAll('img[loading=lazy]').forEach(i=>i.loading='eager');
    [...document.querySelectorAll('div,section,aside')].filter(e=>/Google Analytics/.test(e.textContent)&&e.textContent.length<300).forEach(e=>e.remove());},snip);
  await p.waitForTimeout(2500);
  await p.screenshot({path:`mockup-${n}.png`});
 }
 await b.close();
})();
