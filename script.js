function showPage(pageId) {
  // Qari dhammaan bogyada
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.classList.remove('active');
  });

  // Soo saar bogga la doortay
  const selectedPage = document.getElementById(pageId);
  if (selectedPage) {
    selectedPage.classList.add('active');
  }
}

// Shaqada marka Envelope-ka la taabto
function openEnvelope() {
  showPage('page2');
  
  // Rida Buululeerka (Confetti Blast)
  confetti({
    particleCount: 120,
    spread: 80,
    origin: { y: 0.6 }
  });

  // Buululeer kii labaad oo dib uga soo dhacaya
  setTimeout(() => {
    confetti({
      particleCount: 80,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 80,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });
  }, 400);
}
