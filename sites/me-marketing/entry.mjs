const ORIGIN = 'https://3zpa7h-me-marketi-7c79f713-kafutravelae.wix-site-host.com';
const LIVE_HOST = 'www.mesocialmediamarketing.com';

const THANK_YOU_PAGE = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>Thank You | ME Marketing</title>
<meta name="description" content="Thank you for contacting ME Marketing. Your request has been received.">
<meta name="robots" content="noindex,follow">
<link rel="canonical" href="https://www.mesocialmediamarketing.com/thank-you-page">
<style>
:root{--ink:#131522;--muted:#626a82;--line:#e1e4ed;--blue:#526df5;--orange:#ff3b05}
*{box-sizing:border-box}html,body{margin:0;min-height:100%;background:#f7f8fc;color:var(--ink)}body{font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}a{color:inherit;text-decoration:none}
header{height:84px;display:flex;align-items:center;justify-content:space-between;padding:0 clamp(18px,5vw,74px);background:#fff;border-bottom:1px solid var(--line)}
.brand{display:flex;align-items:center;gap:9px;font-size:20px;font-weight:900;letter-spacing:-.04em}.brand b{font-size:27px;font-style:italic;color:var(--blue)}.cta{padding:14px 20px;border-radius:999px;background:var(--blue);color:#fff;font-size:14px;font-weight:800;box-shadow:0 8px 22px #526df53d}
main{min-height:calc(100vh - 144px);display:grid;place-items:center;padding:46px 18px;background:radial-gradient(circle at 88% 10%,#dfe5ff 0,transparent 34rem),linear-gradient(#fbfcff,#f4f6fb)}
.card{width:min(1020px,100%);display:grid;grid-template-columns:.95fr 1.05fr;overflow:hidden;background:#fff;border:1px solid #dde1eb;border-radius:32px;box-shadow:0 30px 90px #303b6e24}.left,.right{padding:clamp(38px,6vw,74px)}.left{background:linear-gradient(145deg,#f6f8ff,#e8edff)}
.check{width:70px;height:70px;display:grid;place-items:center;border-radius:50%;background:var(--orange);font-size:36px;margin-bottom:35px}.eyebrow{font-size:12px;font-weight:850;letter-spacing:.17em;color:#747c93}.right .eyebrow{color:var(--blue)}
h1,h2{font-weight:520;letter-spacing:-.06em;line-height:.98;margin:18px 0 23px}h2{font-size:clamp(48px,6.2vw,76px)}h1{font-size:clamp(42px,5.8vw,68px)}p{margin:0;font-size:18px;line-height:1.66;color:var(--muted)}
.steps{margin:31px 0;border-top:1px solid var(--line)}.step{display:grid;grid-template-columns:42px 1fr;gap:12px;padding:16px 0;border-bottom:1px solid var(--line);color:#3d465f}.step b{font-size:12px;color:#8991a8}.actions{display:flex;gap:12px;flex-wrap:wrap}.button{min-height:52px;display:inline-flex;align-items:center;justify-content:center;padding:0 23px;border-radius:999px;font-weight:800}.primary{background:var(--blue);color:#fff}.secondary{border:1px solid #d8dce7;background:#fff}
footer{height:60px;display:flex;align-items:center;justify-content:space-between;padding:0 clamp(18px,5vw,74px);font-size:12px;color:#747c91;border-top:1px solid var(--line);background:#fff}
@media(max-width:800px){.card{grid-template-columns:1fr}.left,.right{padding:35px 27px}}
@media(max-width:520px){header{height:70px;padding:0 15px}.brand{font-size:16px}.brand b{font-size:22px}.cta{font-size:11px;padding:12px 13px}main{padding:17px 9px}.card{border-radius:22px}.left,.right{padding:30px 22px}.check{width:60px;height:60px;font-size:30px;margin-bottom:26px}h1{font-size:40px}h2{font-size:45px}.actions{flex-direction:column}.button{width:100%}footer{height:auto;padding:18px;gap:7px;flex-direction:column;align-items:flex-start}}
</style>
</head>
<body>
<header><a class="brand" href="/"><b>ME</b><span>MARKETING</span></a><a class="cta" href="/contact.html">Book a Strategy Call</a></header>
<main><article class="card">
<section class="left"><div class="check" aria-hidden="true">✓</div><div class="eyebrow">REQUEST RECEIVED</div><h2>Let’s build<br>what’s next.</h2><p>Thanks for reaching out. The ME Marketing team will contact you shortly to arrange your strategy call.</p></section>
<section class="right"><div class="eyebrow">WHAT HAPPENS NEXT</div><h1>Your request is in.</h1><p>We’ll review your goals, current setup and the constraint slowing progress, then contact you with the clearest next step.</p><div class="steps"><div class="step"><b>01</b><span>We review the information you shared.</span></div><div class="step"><b>02</b><span>We identify the most useful starting point.</span></div><div class="step"><b>03</b><span>A team member contacts you directly.</span></div></div><div class="actions"><a class="button primary" href="/">Back to home</a><a class="button secondary" href="/contact.html">Send another request</a></div></section>
</article></main>
<footer><span>© 2026 ME Marketing.</span><span>Human judgment stays in the loop.</span></footer>
</body></html>`;

const REDIRECT_SCRIPT = `(function(){
let moved=false;
function success(){const text=((document.body&&document.body.innerText)||'').replace(/\\s+/g,' ').toUpperCase();return text.includes('REQUEST RECEIVED')&&(text.includes("LET'S BUILD")||text.includes('LET’S BUILD')||text.includes('THANKS FOR REACHING OUT'));}
function go(){if(!moved&&success()){moved=true;window.location.replace('/thank-you-page');}}
if(new URLSearchParams(window.location.search).get('submitted')==='1'){window.location.replace('/thank-you-page');return;}
new MutationObserver(go).observe(document.documentElement,{subtree:true,childList:true,characterData:true,attributes:true});
document.addEventListener('submit',function(){let tries=0;const timer=setInterval(function(){go();tries+=1;if(moved||tries>80)clearInterval(timer);},250);},true);
go();
})();`;

function cleanPath(pathname){return (pathname.replace(/\/+$/,'')||'/').toLowerCase();}

async function proxy(request,url){
  const target=new URL(url.pathname+url.search,ORIGIN);
  const headers=new Headers(request.headers);
  ['content-length','connection'].forEach(name=>headers.delete(name));
  headers.set('host',LIVE_HOST);
  headers.set('x-forwarded-host',LIVE_HOST);
  const init={method:request.method,headers,redirect:'manual'};
  if(request.method!=='GET'&&request.method!=='HEAD')init.body=await request.arrayBuffer();
  const upstream=await fetch(target,init);
  const outputHeaders=new Headers(upstream.headers);
  ['content-length','content-encoding','transfer-encoding','etag'].forEach(name=>outputHeaders.delete(name));
  const location=outputHeaders.get('location');
  if(location){
    try{
      const next=new URL(location,ORIGIN);
      if(next.origin===new URL(ORIGIN).origin||next.host===LIVE_HOST)outputHeaders.set('location',next.pathname+next.search+next.hash);
    }catch{}
  }
  if(request.method==='GET'&&cleanPath(url.pathname)==='/contact.html'&&(outputHeaders.get('content-type')||'').includes('text/html')){
    let html=await upstream.text();
    if(!html.includes('ME_THANK_YOU_REDIRECT_V9')){
      const injection='<!--ME_THANK_YOU_REDIRECT_V9--><script src="/__me-thank-you-redirect.js" defer></script>';
      html=/<\/body>/i.test(html)?html.replace(/<\/body>/i,injection+'</body>'):html+injection;
    }
    outputHeaders.set('content-type','text/html; charset=utf-8');
    outputHeaders.set('cache-control','no-store, max-age=0');
    outputHeaders.set('x-me-marketing-proxy','contact-v9');
    return new Response(html,{status:upstream.status,headers:outputHeaders});
  }
  return new Response(upstream.body,{status:upstream.status,statusText:upstream.statusText,headers:outputHeaders});
}

export default {
  async fetch(request){
    try{
      const url=new URL(request.url);
      const path=cleanPath(url.pathname);
      if(path==='/thank-you-page'||path==='/thank-you-page.html')return new Response(THANK_YOU_PAGE,{status:200,headers:{'content-type':'text/html; charset=utf-8','cache-control':'no-store, max-age=0','x-me-marketing-route':'thank-you-page-v9'}});
      if(path==='/__me-thank-you-redirect.js')return new Response(REDIRECT_SCRIPT,{status:200,headers:{'content-type':'application/javascript; charset=utf-8','cache-control':'no-store, max-age=0','x-me-marketing-route':'redirect-script-v9'}});
      if(path==='/__me-proxy-health')return new Response(JSON.stringify({ok:true,version:'v9',origin:ORIGIN}),{status:200,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store, max-age=0'}});
      return await proxy(request,url);
    }catch(error){
      return new Response('ME Marketing is temporarily unavailable.',{status:502,headers:{'content-type':'text/plain; charset=utf-8','cache-control':'no-store, max-age=0'}});
    }
  }
};
