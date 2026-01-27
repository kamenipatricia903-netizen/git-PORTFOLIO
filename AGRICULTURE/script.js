document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Merci ! Votre message a bien été envoyé.");
  });
  const text = "Bienvenue sur cap-terre";
  const typeTarget = document.getElementById("typewriter");
  let typing = false;
  
  function typeWriter() {
    if (typing) return; // empêcher d'écrire si déjà en cours
    typing = true;
    typeTarget.innerHTML = ""; // reset le texte
    let i = 0;
  
    function writeChar() {
      if (i < text.length) {
        typeTarget.innerHTML += text.charAt(i);
        i++;
        setTimeout(writeChar, 100);
      } else {
        typing = false; // fin de l'effet
      }
    }
  
    writeChar();
  }
  
  // Détecte quand #accueil entre dans la vue
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          typeWriter();
        }
      });
    },
    {
      threshold: 0.6, // déclenche quand 60% de la section est visible
    }
  );
  
  const accueilSection = document.getElementById("accueil");
  observer.observe(accueilSection);
 