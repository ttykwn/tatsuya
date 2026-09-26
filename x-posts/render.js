const { chromium } = require('/opt/node22/lib/node_modules/playwright');
(async()=>{
 const b=await chromium.launch({proxy:{server:process.env.HTTPS_PROXY}});
 const p=await (await b.newContext({viewport:{width:1200,height:1200},ignoreHTTPSErrors:true})).newPage();
 await p.goto('file://'+process.cwd()+'/charger-chart.html');
 await p.evaluate(()=>document.fonts.ready); await p.waitForTimeout(1500);
 await p.screenshot({path:'charger-chart.png'});
 await b.close();
})();
