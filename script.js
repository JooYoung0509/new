// ── Language Toggle ──
const body = document.body;
const langBtns = document.querySelectorAll('.lang-btn');
langBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    body.className = body.className.replace(/lang-\w+/, '').trim();
    body.classList.add('lang-' + lang);
    langBtns.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  });
});

// ── Category Pills ──
document.querySelectorAll('.cat-pill').forEach(pill => {
  pill.addEventListener('click', () => {
    document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
  });
});

// ── Scroll Reveal ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Shorts progress bar animation (simulated) ──
function animateProgress() {
  document.querySelectorAll('.short-progress').forEach(bar => {
    let w = parseFloat(bar.style.width) || 0;
    w += 0.05;
    if (w > 100) w = 0;
    bar.style.width = w + '%';
  });
}
setInterval(animateProgress, 100);

// ── Navbar scroll effect ──
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (window.scrollY > 60) {
    nav.style.background = 'rgba(250, 247, 242, 0.98)';
  } else {
    nav.style.background = 'rgba(250, 247, 242, 0.92)';
  }
}, { passive: true });

// ── Hero video: unmute on click ──
const heroVideo = document.querySelector('.hero-video');
if (heroVideo) {
  heroVideo.addEventListener('click', () => {
    heroVideo.muted = !heroVideo.muted;
  });
}

// ── Newsletter form feedback ──
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = newsletterForm.querySelector('.newsletter-input');
    if (!input.value) return;
    const btn = newsletterForm.querySelector('.btn-primary');
    const original = btn.innerHTML;
    btn.innerHTML = '✓';
    btn.style.background = '#2A7A42';
    setTimeout(() => {
      btn.innerHTML = original;
      btn.style.background = '';
      input.value = '';
    }, 2500);
  });
}

// ── Short card click feedback ──
document.querySelectorAll('.short-card').forEach(card => {
  card.addEventListener('click', () => {
    const playBtn = card.querySelector('.play-btn');
    if (playBtn) {
      playBtn.style.opacity = '1';
      playBtn.style.transform = 'scale(1.15)';
      setTimeout(() => {
        playBtn.style.transform = 'scale(1)';
      }, 200);
    }
  });
});
