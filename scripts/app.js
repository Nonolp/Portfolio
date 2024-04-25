document.addEventListener('DOMContentLoaded', function() {
  // Fonction pour animer le défilement jusqu'à une section
  function scrollToSection(id) {
      const section = document.querySelector(id);
      if (section) {
          window.scrollTo({
              top: section.offsetTop,
              behavior: 'smooth'
          });
      }
  }

  // Ajoutez un écouteur d'événements à chaque lien du menu dans l'en-tête
  const headerLinks = document.querySelectorAll('.header-menu a');
  headerLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
          event.preventDefault(); // Empêche le comportement par défaut du lien
          const targetId = link.getAttribute('href');
          scrollToSection(targetId);
      });
  });

  // Ajoutez un écouteur d'événements à la flèche du slider
  const sliderArrow = document.querySelector('.slider .pointer');
  sliderArrow.addEventListener('click', function(event) {
      event.preventDefault(); // Empêche le comportement par défaut du lien
      const targetId = sliderArrow.getAttribute('href');
      scrollToSection(targetId);
  });

  // Gestion du changement de classe pour l'en-tête et l'image animée lors du défilement
  let lastScrollTop = 0;
  window.addEventListener("scroll", function() {
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      let header = document.querySelector("header");

      if (currentScroll > lastScrollTop) {
          header.classList.add("header-hidden");
          header.classList.remove("header-transparent");
      } else {
          if (currentScroll <= 0) {
              header.classList.remove("header-transparent");
          } else {
              header.classList.add("header-transparent");
              header.classList.remove("header-hidden");
          }
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

      // Animation de l'image lorsqu'elle entre dans la vue
      let image = document.querySelector('.animated-image');
      let imagePosition = image.getBoundingClientRect().top;
      let screenHeight = window.innerHeight;

      if (imagePosition < screenHeight * 0.75) {
          image.classList.add('show');
      }
  });
});
