// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
if (hamburger && menu){
  const setMenuByWidth = () => {
    if (window.innerWidth <= 720) { menu.classList.add('hide'); menu.style.display = 'none'; }
    else { menu.classList.remove('hide'); menu.style.display = 'flex'; }
  };
  hamburger.addEventListener('click', ()=>{
    menu.classList.toggle('hide');
    menu.style.display = menu.classList.contains('hide') ? 'none' : 'flex';
  });
  setMenuByWidth();
  window.addEventListener('resize', setMenuByWidth);
}

// Smooth scroll
for (const a of document.querySelectorAll('a[href^="#"]')){
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length>1 && document.querySelector(id)){
      e.preventDefault();
      document.querySelector(id).scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
}

// Year
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Counter animation
const counters = document.querySelectorAll('.count');
if (counters.length){
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
      if (entry.isIntersecting){
        const el = entry.target; const target = +el.dataset.target; let current = 0;
        const step = Math.ceil(target/60);
        const tick = () => { current += step; if (current >= target) current = target; el.textContent = current.toLocaleString('bn-BD'); if (current < target) requestAnimationFrame(tick); };
        tick(); observer.unobserve(el);
      }
    });
  }, {threshold:.5});
  counters.forEach(c => observer.observe(c));
}

// Copy bKash number on click
const bkash = document.getElementById('bkashNumber');
if (bkash){
  bkash.title = 'Click to copy';
  bkash.addEventListener('click', async () => {
    try{ await navigator.clipboard.writeText(bkash.textContent.trim()); bkash.textContent = 'Copied ✓ 01XXXXXXXXX'; setTimeout(()=> bkash.textContent = '01XXXXXXXXX', 1400);}catch(e){}
  });
}
