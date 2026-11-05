var hb=document.querySelectorAll('.hobby-item input');
hb.forEach(function(i){i.addEventListener('change',function(){if(this.checked)hb.forEach(function(o){if(o!==i)o.checked=false})})});
var its=document.querySelectorAll('.item'),tl=document.getElementById('tl'),fl=document.getElementById('fill');
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)e.target.classList.add('in')})},{threshold:.3});
its.forEach(function(i){io.observe(i)});
function upd(){var r=tl.getBoundingClientRect(),p=(innerHeight*.6-r.top)/r.height;fl.style.height=Math.max(0,Math.min(1,p))*100+'%'}
addEventListener('scroll',function(){requestAnimationFrame(upd)},{passive:true});addEventListener('resize',upd);upd();

var R=document.documentElement,sv=null;try{sv=localStorage.getItem('th')}catch(e){}
if(sv)R.setAttribute('data-theme',sv);
document.getElementById('th').onclick=function(){var t=R.getAttribute('data-theme')==='light'?'dark':'light';R.setAttribute('data-theme',t);try{localStorage.setItem('th',t)}catch(e){}};
var fr=['criar interfaces','resolver problemas','aprender sempre','conectar pessoas','transformar ideias'],fi=0,ci=0,del=false,ty=document.getElementById('typed');
(function tp(){var w=fr[fi];ty.textContent=w.slice(0,ci);if(!del&&ci===w.length){del=true;return setTimeout(tp,1600)}
if(del&&ci===0){del=false;fi=(fi+1)%fr.length}ci+=del?-1:1;setTimeout(tp,del?35:75)})();
var bar=document.getElementById('bar'),lk=[].slice.call(document.querySelectorAll('.links a')),secs=lk.map(function(a){return document.querySelector(a.getAttribute('href'))});
function sc(){var d=document.documentElement;bar.style.width=(scrollY/(d.scrollHeight-innerHeight||1))*100+'%';var cur=0;secs.forEach(function(s,i){if(s.getBoundingClientRect().top<innerHeight*.4)cur=i});lk.forEach(function(a,i){a.classList.toggle('on',i===cur)})}
addEventListener('scroll',sc,{passive:true});sc();
document.querySelectorAll('.meter b').forEach(function(b){new IntersectionObserver(function(es,o){if(es[0].isIntersecting){b.style.width=b.dataset.v+'%';o.disconnect()}},{threshold:.5}).observe(b)});
document.querySelectorAll('[data-n]').forEach(function(n){new IntersectionObserver(function(es,o){if(!es[0].isIntersecting)return;o.disconnect();var t=+n.dataset.n,s=performance.now();(function f(now){var p=Math.min(1,(now-s)/1400);n.textContent=Math.round(t*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(s)},{threshold:.6}).observe(n)});
var rvo=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');rvo.unobserve(e.target)}})},{threshold:.15});
document.querySelectorAll('.cards .card,.trio .card,.demo,.stats,section>.lead,section>h2,.ded blockquote,.ded .sig').forEach(function(x){x.classList.add('rv');rvo.observe(x)});
var sw=document.querySelectorAll('#sw button');sw.forEach(function(b){b.onclick=function(){var c=b.style.getPropertyValue('--c');R.style.setProperty('--acc',c);R.style.setProperty('--acc2',c);sw.forEach(function(o){o.classList.remove('on')});b.classList.add('on')}});
document.getElementById('cp').onclick=function(){var b=this;try{navigator.clipboard.writeText('lidia.bonim@hotmail.com').then(function(){b.textContent='Copiado ✓'})}catch(e){b.textContent='lidia.bonim@hotmail.com'}setTimeout(function(){b.textContent='Copiar e-mail'},2000)};
document.querySelectorAll('.cards .card,.trio .card').forEach(function(c){c.addEventListener('mousemove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform='perspective(700px) rotateY('+x*6+'deg) rotateX('+-y*6+'deg) translateY(-4px)'});c.addEventListener('mouseleave',function(){c.style.transform=''})});
var cv=document.getElementById('bg'),cx=cv.getContext('2d'),ps=[],mx=-999,my=-999;
function rs(){cv.width=cv.offsetWidth;cv.height=cv.offsetHeight;ps=[];for(var i=0;i<Math.min(70,cv.width/18);i++)ps.push({x:Math.random()*cv.width,y:Math.random()*cv.height,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35})}
rs();addEventListener('resize',rs);cv.parentNode.addEventListener('mousemove',function(e){var r=cv.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top});
if(!matchMedia('(prefers-reduced-motion:reduce)').matches)(function dr(){cx.clearRect(0,0,cv.width,cv.height);var c=getComputedStyle(R).getPropertyValue('--acc').trim()||'#D4AE8B';cx.fillStyle=c;cx.strokeStyle=c;
ps.forEach(function(a,i){a.x+=a.vx;a.y+=a.vy;if(a.x<0||a.x>cv.width)a.vx*=-1;if(a.y<0||a.y>cv.height)a.vy*=-1;cx.globalAlpha=.7;cx.beginPath();cx.arc(a.x,a.y,1.6,0,6.3);cx.fill();
for(var j=i+1;j<ps.length;j++){var b=ps[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<120){cx.globalAlpha=(1-d/120)*.25;cx.beginPath();cx.moveTo(a.x,a.y);cx.lineTo(b.x,b.y);cx.stroke()}}
var m=Math.hypot(a.x-mx,a.y-my);if(m<160){cx.globalAlpha=(1-m/160)*.5;cx.beginPath();cx.moveTo(a.x,a.y);cx.lineTo(mx,my);cx.stroke()}});requestAnimationFrame(dr)})();
