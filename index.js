//navigation settings

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

//closes hamburger
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open'); 
    })
})

//Automatic Slideshow with Buttons
//Source: https://stackoverflow.com/questions/43961189/automatic-slideshow-with-button
var slideIndex = 0;
showSlides();
var slides,dots;

function plusSlides(position) {
    slideIndex += position;
    if (slideIndex > slides.length) {slideIndex = 1}
    else if(slideIndex < 1){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");

      }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
    }

function currentSlide(index) {
    if (index > slides.length) {index = 1}
    else if(index < 1){index = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
        slides[index-1].style.display = "block";  
        dots[index-1].className += " active";
    }

function showSlides() {
    var i;
    slides = document.getElementsByClassName("mySlides");
    dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}


//Scrolled Activated Animation
//JQuery: https://www.youtube.com/watch?v=RY5ZAUtrlaM

// (function() {
  
//   var aboutEl = $('section.home'),
//       aboutElOffset = aboutEl.offset().top,
//       documentEl = $(document);
  
//   documentEl.on('ready', function() {
//       if ( documentEl.scrollTop() > aboutElOffset && aboutEl.hasClass('hidden') ) aboutEl.removeClass('hidden'); 
//   });
  
// })();

(function() {
  
  var aboutEl = $('section.about-me'),
      aboutElOffset = aboutEl.offset().top/2,
      documentEl = $(document);
  
  documentEl.on('scroll', function() {
      if ( documentEl.scrollTop() > aboutElOffset && aboutEl.hasClass('hidden') ) aboutEl.removeClass('hidden'); 
  });
  
})();

(function() {
  
  var aboutEl = $('section.my-services'),
      aboutElOffset = aboutEl.offset().top/1.4,
      documentEl = $(document);
  
  documentEl.on('scroll', function() {
      if ( documentEl.scrollTop() > aboutElOffset && aboutEl.hasClass('hidden') ) aboutEl.removeClass('hidden'); 
  });
  
})();

(function() {
  
  var aboutEl = $('section.work'),
      aboutElOffset = aboutEl.offset().top/1.3,
      documentEl = $(document);
  
  documentEl.on('scroll', function() {
      if ( documentEl.scrollTop() > aboutElOffset && aboutEl.hasClass('hidden') ) aboutEl.removeClass('hidden'); 
  });
  
})();

(function() {
  
  var aboutEl = $('section.pictures'),
      aboutElOffset = aboutEl.offset().top/1.12,
      documentEl = $(document);
  
  documentEl.on('scroll', function() {
      if ( documentEl.scrollTop() > aboutElOffset && aboutEl.hasClass('hidden') ) aboutEl.removeClass('hidden'); 
  });
  
})();