if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let o={};const c=e=>s(e,n),f={module:{uri:n},exports:o,require:c};a[n]=Promise.all(i.map((e=>f[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-9a84fccb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/ambulanza_hr-DiDNUUyX.jpg",revision:"bea705f7cacb4688da0cf41379e59c95"},{url:"assets/carceri_italia-Drs0xk5k.jpg",revision:"1948ba16db1e7ff5995797c486716591"},{url:"assets/depistaggio-BMGPKmgB.jpg",revision:"79e5ac0cefe305083807a6d14d8e6c28"},{url:"assets/emancipazione-Bavf6lrU.jpg",revision:"6807a5fa43a249aef6926111a3aabbbc"},{url:"assets/Framework7Icons-Regular-Db9RwDq_.woff2",revision:"4a39aba9fb8a2f831fa437780e1a058a"},{url:"assets/Framework7Icons-Regular-DocpuGSF.woff",revision:"d03b787b6492fa2b0141c43fb7e56689"},{url:"assets/index-BN5uJvpy.css",revision:"ee533fe0df4a28672670c94ac68d8d1d"},{url:"assets/index-C0Z47LSX.js",revision:"3b54aa57191fd10686d1c2e4124c0eb7"},{url:"assets/material-icons-Dr0goTwe.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/material-icons-kAwBdRge.woff2",revision:"53436aca8627a49f4deaaa44dc9e3c05"},{url:"assets/maxi-CKilaBz9.jpg",revision:"c601d4a4c2540e100f6f9c1126f5dc6f"},{url:"assets/merini-imLFws2R.jpg",revision:"a32aada430a6978b0b013ecfe400a184"},{url:"assets/noi-donne-DvBrR_sQ.jpg",revision:"957ac1b9fa2b92a884edba967d4e77ab"},{url:"assets/pena_di_mortee-gY0qwW7W.jpg",revision:"f2139bf0c495405a6b0a336920a4028d"},{url:"assets/stragi-TlYu7Fqf.jpg",revision:"931def495c7eb61b85638656957e9e9a"},{url:"assets/telefoni-B3NQM__m.jpg",revision:"e1d309d187ac5e24a307fd4228cd1436"},{url:"icons/128x128.png",revision:"2b31a62b6a9a54181d4b142e4abaeeee"},{url:"icons/144x144.png",revision:"6d159b26e34cc90d2f0e1e76b228ea25"},{url:"icons/152x152.png",revision:"ffa546562ea28fbadbaf7fa76eea464e"},{url:"icons/192x192.png",revision:"18aedf027762f8f8523cfe687710a7f6"},{url:"icons/256x256.png",revision:"fa5669a1b956293ec26f17a2f9ed27ce"},{url:"icons/512x512.png",revision:"fcaca6648df6daf62ab4bf8aa42dbee9"},{url:"icons/apple-touch-icon.png",revision:"fa5669a1b956293ec26f17a2f9ed27ce"},{url:"icons/favicon.png",revision:"2b31a62b6a9a54181d4b142e4abaeeee"},{url:"index.html",revision:"d8e046bc76f1722a120eb83d6311aaae"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=service-worker.js.map