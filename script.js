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
  
  // Abuur Love / Hearts Rain (Buululeer Wadnayaal ah)
  createHeartRain();
}

function createHeartRain() {
  const heartContainer = document.getElementById('page2');
  const hearts = ['❤️', '💖', '💕', '💗', '💓', '✨'];

  for (let i = 0; i < 40; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.classList.add('heart-particle');
      
      // Kala dooro wadnayaal kala duwan
      heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
      
      // Booska bidix/midig ee wadnuhu ka soo dhacayo
      heart.style.left = Math.random() * 100 + 'vw';
      
      // Baaxadda wadnaha (Random size)
      const size = Math.random() * 20 + 18;
      heart.style.fontSize = size + 'px';
      
      // Xawaaraha dhacista (Random speed)
      const duration = Math.random() * 2 + 2.5;
      heart.style.animationDuration = duration + 's';

      heartContainer.appendChild(heart);

      // Bixi wadnaha marka uu dhameysto animation-ka
      setTimeout(() => {
        heart.remove();
      }, duration * 1000);
    }, i * 100);
  }
}
