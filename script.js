function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.classList.remove('active');
  });

  const selectedPage = document.getElementById(pageId);
  if (selectedPage) {
    selectedPage.classList.add('active');
  }
}

function openEnvelope() {
  showPage('page2');
  
  // BUULULEER BADAN OO MIDABBO KALA DUWAN LEH (CONFETTI BLAST)
  if (typeof confetti === "function") {
    // Blast-ka koowaad (Salka Dhexe)
    confetti({
      particleCount: 180,
      spread: 100,
      origin: { y: 0.6 }
    });

    // Blast-ka labaad (Midig iyo Bidix)
    setTimeout(() => {
      confetti({
        particleCount: 100,
        angle: 60,
        spread: 70,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 100,
        angle: 120,
        spread: 70,
        origin: { x: 1 }
      });
    }, 350);

    // Blast-ka saddexaad (Ugu dambeeya oo kor ka soo dhacaya)
    setTimeout(() => {
      confetti({
        particleCount: 120,
        spread: 120,
        origin: { y: 0.2 }
      });
    }, 700);
  }
}
