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

//Picture slideshow
//Source: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_lightbox
function openModal() {
    document.getElementById("myModal").style.display = "block";
}
  
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndexPic = 0;

function plusSlidesPic(n) {
    showSlidesPic(slideIndexPic += n);
}
  
function currentSlidePic(n) {
    showSlidesPic(slideIndexPic = n);
}

function showSlidesPic(n) {
    var i;
    var slides = document.getElementsByClassName("myPictures");
    if (n > slides.length) {slideIndexPic = 1}
    if (n < 1) {slideIndexPic = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexPic-1].style.display = "block";
    dots[slideIndexPic-1].className += " active";
    captionText.innerHTML = dots[slideIndexPic-1].alt;
}


//Scrolled Activated Animation
//JQuery: https://www.youtube.com/watch?v=RY5ZAUtrlaM

(function() {
  
  var aboutEl = $('section.home'),
      aboutElOffset = aboutEl.offset().top,
      documentEl = $(document);
  
    //change scroll function to start when ready 
  documentEl.on('ready', function() {
      if (aboutEl.hasClass('hidden') ) aboutEl.removeClass('hidden'); 
  });
  
})();

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

(function() {
  
    var aboutEl = $('section.video'),
        aboutElOffset = aboutEl.offset().top/1.1,
        documentEl = $(document);
    
    documentEl.on('scroll', function() {
        if ( documentEl.scrollTop() > aboutElOffset && aboutEl.hasClass('hidden') ) aboutEl.removeClass('hidden'); 
    });
    
  })();

//Video

;(function() {
    
    function setClickHandler(id, fn) {
        document.getElementById(id).onclick = fn
    }

    setClickHandler('video', function(e) {
        var className = e.target.className.indexOf('vimeo')
        BigPicture({
            el: e.target,
            vimeoSrc: e.target.getAttribute('vimeoSrc'),
        })
    })
})()