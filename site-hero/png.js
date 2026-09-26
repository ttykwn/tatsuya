const { chromium } = require('/opt/node22/lib/node_modules/playwright');
(async()=>{
 const b=await chromium.launch();
 const p=await (await b.newContext({viewport:{width:1030,height:340},deviceScaleFactor:2})).newPage();
 await p.goto('file://'+process.cwd()+'/hero-desk.svg');
 await p.screenshot({path:'hero-desk.png',omitBackground:true});
 await b.close();
})();
