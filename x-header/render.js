const { chromium } = require('/opt/node22/lib/node_modules/playwright');
(async()=>{
 const b=await chromium.launch({proxy:{server:process.env.HTTPS_PROXY}});
 const p=await (await b.newContext({viewport:{width:1500,height:500},ignoreHTTPSErrors:true})).newPage();
 await p.goto('file://'+process.cwd()+'/header.html');
 await p.evaluate(()=>document.fonts.ready); await p.waitForTimeout(1500);
 await p.screenshot({path:'x-header.png'});
 if (process.argv[2]==='preview') {
   await p.evaluate(()=>{const s=document.createElement('div');s.style.cssText='position:absolute;left:40px;top:330px;width:335px;height:335px;border-radius:50%;background:#aca7a1;border:12px solid #fff';document.body.style.position='relative';document.body.appendChild(s);
     for(const y of [60,440]){const l=document.createElement('div');l.style.cssText=`position:absolute;left:0;right:0;top:${y}px;border-top:2px dashed red`;document.body.appendChild(l);}});
   await p.screenshot({path:'/tmp/claude-0/-home-user-tatsuya/a3e08e2f-b25d-52e6-ae74-5825e9884bf2/scratchpad/preview.png'});
 }
 await b.close();
})();
