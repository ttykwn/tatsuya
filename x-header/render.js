const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const fs=require('fs');
(async()=>{
 const b=await chromium.launch({proxy:{server:process.env.HTTPS_PROXY}});
 const c=await b.newContext({viewport:{width:1500,height:500},ignoreHTTPSErrors:true,deviceScaleFactor:1});
 const p=await c.newPage();
 const src=fs.readFileSync('header.html','utf8');
 for (const [v,cls] of [['light',''],['dark','v-dark']]) {
   await p.goto('file://'+process.cwd()+'/header.html');
   await p.evaluate(c=>{const h=document.querySelector('.hdr'); h.className='hdr '+c;},cls);
   await p.evaluate(()=>document.fonts.ready); await p.waitForTimeout(1500);
   await p.screenshot({path:`x-header-${v}.png`});
   // preview with simulated X avatar + mobile crop guide
   await p.evaluate(()=>{const d=document.createElement('div');d.id='sim';d.style.cssText='position:absolute;left:40px;top:330px;width:335px;height:335px;border-radius:50%;background:#bbb;border:12px solid #fff;opacity:.85';document.querySelector('.hdr').appendChild(d);
     for(const y of [60,440]){const l=document.createElement('div');l.style.cssText=`position:absolute;left:0;right:0;top:${y}px;border-top:2px dashed red`;document.querySelector('.hdr').appendChild(l);}});
   await p.screenshot({path:`preview-${v}.png`});
 }
 await b.close();
})();
