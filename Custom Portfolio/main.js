// main.js
document.addEventListener('DOMContentLoaded', () => {
  // Hide loading screen after a short delay
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.style.opacity = '0';
      loadingScreen.style.transition = 'opacity 0.5s ease-out';
      setTimeout(() => loadingScreen.remove(), 600);
    }, 1500); // 1.5 seconds
  }

  // Optional: Add smooth scroll for anchor links (already via CSS, but ensure fallback)
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
