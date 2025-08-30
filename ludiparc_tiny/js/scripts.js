// Preloader: hide when page fully loaded
(function() {
  // Ensure class toggling even if JS loads late
  document.body && document.body.classList && document.body.classList.add('no-scroll');

  function hidePreloader() {
    try {
      document.body.classList.add('loaded');
      document.body.classList.remove('no-scroll');
    } catch (e) {}
  }

  // Prefer full load (images/css) for a smoother feel
  if (document.readyState === 'complete') {
    setTimeout(hidePreloader, 300);
  } else {
    window.addEventListener('load', function() {
      setTimeout(hidePreloader, 300);
    });
  }
  // Mobile menu toggle
  function setupMenu() {
    var btn = document.querySelector('.menu-toggle');
    var nav = document.getElementById('primary-nav');
    if (!btn || !nav) return;
    btn.addEventListener('click', function() {
      var open = document.body.classList.toggle('nav-open');
      btn.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
        document.body.classList.remove('nav-open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
    window.addEventListener('resize', function(){
      if (window.innerWidth > 768) {
        document.body.classList.remove('nav-open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupMenu);
  } else {
    setupMenu();
  }
})();
