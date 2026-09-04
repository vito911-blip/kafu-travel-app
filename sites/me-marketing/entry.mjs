const ORIGIN = 'https://3zpa7h-me-marketi-7c79f713-kafutravelae.wix-site-host.com';

const THANK_YOU_HTML = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>Thank You | ME Marketing</title>
  <meta name="description" content="Thank you for contacting ME Marketing. Your request has been received.">
  <meta name="robots" content="noindex,follow">
  <link rel="canonical" href="https://www.mesocialmediamarketing.com/thank-you-page">
  <style>
    :root{--ink:#151622;--muted:#606983;--line:#e1e4ed;--blue:#526df5;--soft:#eef1ff;--orange:#ff3b05}
    *{box-sizing:border-box}
    html,body{margin:0;min-height:100%;background:#f8f9fd;color:var(--ink)}
    body{font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
    a{color:inherit}
    .top{height:86px;display:flex;align-items:center;justify-content:space-between;padding:0 clamp(18px,5vw,76px);background:#fff;border-bottom:1px solid var(--line)}
    .brand{display:flex;align-items:center;gap:9px;text-decoration:none;font-size:20px;font-weight:900;letter-spacing:-.04em}
    .brand-mark{font-size:27px;font-style:italic;color:var(--blue)}
    .nav{display:flex;align-items:center;gap:25px;font-size:14px;font-weight:750}
    .nav a{text-decoration:none}
    .nav .cta{padding:14px 20px;border-radius:999px;background:var(--blue);color:#fff;box-shadow:0 8px 22px rgba(82,109,245,.24)}
    main{min-height:calc(100vh - 146px);display:grid;place-items:center;padding:48px 18px;background:radial-gradient(circle at 88% 10%,#dfe5ff 0,transparent 34rem),linear-gradient(180deg,#fbfcff,#f5f7fc)}
    .card{width:min(1040px,100%);display:grid;grid-template-columns:.95fr 1.05fr;overflow:hidden;background:#fff;border:1px solid #dde1eb;border-radius:32px;box-shadow:0 30px 90px rgba(48,59,110,.14)}
    .left,.right{padding:clamp(38px,6vw,76px)}
    .left{background:linear-gradient(145deg,#f6f8ff,#e8edff)}
    .check{width:72px;height:72px;display:grid;place-items:center;border-radius:50%;background:var(--orange);color:#111;font-size:37px;margin-bottom:36px}
    .eyebrow{font-size:12px;font-weight:850;letter-spacing:.17em;color:#747c93}
    .right .eyebrow{color:var(--blue)}
    h1,h2{font-weight:520;letter-spacing:-.06em;line-height:.98;margin:18px 0 24px}
    h2{font-size:clamp(49px,6.2vw,78px)}
    h1{font-size:clamp(43px,5.8vw,70px)}
    p{margin:0;font-size:18px;line-height:1.67;color:var(--muted)}
    .steps{margin:32px 0;border-top:1px solid var(--line)}
    .step{display:grid;grid-template-columns:42px 1fr;gap:12px;padding:16px 0;border-bottom:1px solid var(--line);color:#3d465f}
    .step b{font-size:12px;color:#8991a8}
    .actions{display:flex;gap:12px;flex-wrap:wrap}
    .button{min-height:52px;display:inline-flex;align-items:center;justify-content:center;padding:0 23px;border-radius:999px;text-decoration:none;font-weight:800}
    .primary{background:var(--blue);color:#fff}
    .secondary{border:1px solid #d8dce7;background:#fff}
    .foot{height:60px;display:flex;align-items:center;justify-content:space-between;padding:0 clamp(18px,5vw,76px);font-size:12px;color:#747c91;border-top:1px solid var(--line);background:#fff}
    @media(max-width:820px){.nav a:not(.cta){display:none}.card{grid-template-columns:1fr}.left,.right{padding:36px 28px}.left h2{font-size:56px}}
    @media(max-width:520px){.top{height:72px;padding:0 16px}.brand{font-size:17px}.brand-mark{font-size:23px}.nav .cta{font-size:11px;padding:12px 14px}main{padding:18px 10px}.card{border-radius:22px}.left,.right{padding:32px 23px}.check{width:62px;height:62px;font-size:31px;margin-bottom:27px}h1{font-size:42px}h2{font-size:47px}.actions{flex-direction:column}.button{width:100%}.foot{height:auto;padding:20px;gap:7px;flex-direction:column;align-items:flex-start}}
  </style>
</head>
<body>
  <header class="top">
    <a class="brand" href="/"><span class="brand-mark">ME</span><span>MARKETING</span></a>
    <nav class="nav" aria-label="Primary">
      <a href="/#services">Services</a>
      <a href="/#automation">Automation + AI</a>
      <a href="/about.html">About</a>
      <a class="cta" href="/contact.html">Book a Strategy Call</a>
    </nav>
  </header>
  <main>
    <article class="card">
      <section class="left">
        <div class="check" aria-hidden="true">✓</div>
        <div class="eyebrow">REQUEST RECEIVED</div>
        <h2>Let’s build<br>what’s next.</h2>
        <p>Thanks for reaching out. The ME Marketing team will contact you shortly to arrange your strategy call.</p>
      </section>
      <section class="right">
        <div class="eyebrow">WHAT HAPPENS NEXT</div>
        <h1>Your request is in.</h1>
        <p>We’ll review your goals, current setup and the constraint slowing progress, then contact you with the clearest next step.</p>
        <div class="steps">
          <div class="step"><b>01</b><span>We review the information you shared.</span></div>
          <div class="step"><b>02</b><span>We identify the most useful starting point.</span></div>
          <div class="step"><b>03</b><span>A team member contacts you directly.</span></div>
        </div>
        <div class="actions">
          <a class="button primary" href="/">Back to home</a>
          <a class="button secondary" href="/contact.html">Send another request</a>
        </div>
      </section>
    </article>
  </main>
  <footer class="foot"><span>© 2026 ME Marketing.</span><span>Human judgment stays in the loop.</span></footer>
</body>
</html>`;

const SUCCESS_REDIRECT_JS = `(function(){
  var redirected=false;
  function isSuccess(){
    var text=((document.body&&document.body.innerText)||'').replace(/\\s+/g,' ').toUpperCase();
    return text.indexOf('REQUEST RECEIVED')>=0 && (text.indexOf("LET'S BUILD")>=0 || text.indexOf('LET’S BUILD')>=0 || text.indexOf('THANKS FOR REACHING OUT')>=0);
  }
  function redirectIfSuccessful(){
    if(!redirected && isSuccess()){
      redirected=true;
      window.location.replace('/thank-you-page');
    }
  }
  if(new URLSearchParams(window.location.search).get('submitted')==='1'){
    window.location.replace('/thank-you-page');
    return;
  }
  new MutationObserver(redirectIfSuccessful).observe(document.documentElement,{subtree:true,childList:true,characterData:true,attributes:true});
  document.addEventListener('submit',function(){
    var attempts=0;
    var timer=setInterval(function(){
      redirectIfSuccessful();
      attempts+=1;
      if(redirected||attempts>80)clearInterval(timer);
    },250);
  },true);
  redirectIfSuccessful();
})();`;

function normalizePath(pathname){
  return (pathname.replace(/\/+$/,'')||'/').toLowerCase();
}

async function proxyToCurrentSite(request,url){
  var target=new URL(url.pathname+url.search,ORIGIN);
  var headers=new Headers(request.headers);
  ['content-length','connection'].forEach(function(name){headers.delete(name)});
  headers.set('host','www.mesocialmediamarketing.com');
  var init={method:request.method,headers:headers,redirect:'manual'};
  if(request.method!=='GET'&&request.method!=='HEAD')init.body=await request.arrayBuffer();
  var upstream=await fetch(target,init);
  var outHeaders=new Headers(upstream.headers);
  ['content-length','content-encoding','transfer-encoding','etag'].forEach(function(name){outHeaders.delete(name)});
  var locationHeader=outHeaders.get('location');
  if(locationHeader){
    try{
      var locationUrl=new URL(locationHeader,ORIGIN);
      if(locationUrl.origin===new URL(ORIGIN).origin){
        outHeaders.set('location',locationUrl.pathname+locationUrl.search+locationUrl.hash);
      }
    }catch(error){}
  }
  if(request.method==='GET'&&normalizePath(url.pathname)==='/contact.html'&&(outHeaders.get('content-type')||'').indexOf('text/html')>=0){
    var html=await upstream.text();
    if(html.indexOf('ME_THANK_YOU_REDIRECT_V8')<0){
      var injection='<!--ME_THANK_YOU_REDIRECT_V8--><script src="/__me-thank-you-redirect.js" defer></script>';
      html=/<\/body>/i.test(html)?html.replace(/<\/body>/i,injection+'</body>'):html+injection;
    }
    outHeaders.set('content-type','text/html; charset=utf-8');
    outHeaders.set('cache-control','no-store, max-age=0');
    outHeaders.set('x-me-marketing-proxy','contact-v8');
    return new Response(html,{status:upstream.status,headers:outHeaders});
  }
  return new Response(upstream.body,{status:upstream.status,statusText:upstream.statusText,headers:outHeaders});
}

export default {
  async fetch(request){
    try{
      var url=new URL(request.url);
      var path=normalizePath(url.pathname);
      if(path==='/thank-you-page'||path==='/thank-you-page.html'){
        return new Response(THANK_YOU_HTML,{status:200,headers:{
          'content-type':'text/html; charset=utf-8',
          'cache-control':'no-store, max-age=0',
          'x-me-marketing-route':'thank-you-page-v8'
        }});
      }
      if(path==='/__me-thank-you-redirect.js'){
        return new Response(SUCCESS_REDIRECT_JS,{status:200,headers:{
          'content-type':'application/javascript; charset=utf-8',
          'cache-control':'no-store, max-age=0',
          'x-me-marketing-route':'redirect-script-v8'
        }});
      }
      if(path==='/__me-proxy-health'){
        return new Response(JSON.stringify({ok:true,version:'v8',origin:ORIGIN}),{status:200,headers:{
          'content-type':'application/json; charset=utf-8',
          'cache-control':'no-store, max-age=0'
        }});
      }
      return await proxyToCurrentSite(request,url);
    }catch(error){
      return new Response('ME Marketing is temporarily unavailable.',{status:502,headers:{
        'content-type':'text/plain; charset=utf-8',
        'cache-control':'no-store, max-age=0'
      }});
    }
  }
};
