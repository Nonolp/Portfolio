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
}, false);


window.addEventListener('scroll', function() {
    let image = document.querySelector('.animated-image');
    let imagePosition = image.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (imagePosition < screenHeight * 0.75) {
        image.classList.add('show');
    }
});

