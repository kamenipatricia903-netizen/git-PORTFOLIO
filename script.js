// Scroll fluide
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Confirmation du formulaire
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Merci pour votre message !");
    this.reset();
  });
  // Texte long à animer
const text = `Je suis Caprice, étudiante passionnée par le monde du numérique. Depuis mes débuts dans l’informatique, je me suis orienté vers le développement web et la création de solutions interactives.

J’aime transformer des idées en projets concrets. 
Rigoureuse, créative et toujours en quête d’apprentissage, je m’investis pleinement dans ce que je fais. Mon objectif est de contribuer à la création d’un web plus beau, plus fonctionnel, et plus accessible.`;
window.addEventListener("DOMContentLoaded", () => {
    //const text = `Je suis Caprice, étudiant passionné par le monde du numérique. Depuis mes débuts dans l’informatique, je me suis orienté vers le développement web et la création de solutions interactives.
  
  //J’aime transformer des idées en projets concrets.
 // Rigoureuse, créative et toujours en quête d’apprentissage, je m’investis pleinement dans ce que je fais. Mon objectif est de contribuer à la création d’un web plus beau, plus fonctionnel, et plus accessible.`;
  
    let index = 0;
    const speed = 25;
    const target = document.getElementById("typewriter");
  
    function typeWriter() {
      if (index < text.length) {
        target.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
      }
    }
  
    typeWriter(); // Lance l’effet
  });
  
// Écriture progressive dans l'élément
let index = 0;
const speed = 25; // Vitesse d’écriture
function typeWriter() {
  const target = document.getElementById("typewriter");
  if (index < text.length) {
    target.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

// Lancer l'effet après chargement
window.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("settings-toggle");
    const panel = document.getElementById("settings-panel");
  
    toggle.addEventListener("click", () => {
      panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
  });
  
// Ouvrir/Fermer le panneau des paramètres
document.getElementById("settings-toggle").addEventListener("click", () => {
    const panel = document.getElementById("settings-panel");
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
  
  // Basculer thème clair/sombre
  function toggleTheme() {
    document.body.classList.toggle("dark");
  }
  
  // Changer couleur de fond aléatoire
  function changeBackground() {
    const colors = ["#f9f9f9", "#ffe4e1", "#e0f7fa", "#f3e5f5", "#fff3cd"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  }
  
  // Réduire ou réinitialiser le contraste
  let lowContrast = false;
  function adjustContrast() {
    if (!lowContrast) {
      document.body.style.filter = "contrast(0.8)";
    } else {
      document.body.style.filter = "none";
    }
    lowContrast = !lowContrast;
  }
  