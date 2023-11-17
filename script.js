let slideIndex = 1;
showSlides(slideIndex);

// Llama a la función showSlides automáticamente cada 2000 milisegundos (2 segundos)
let slideInterval = setInterval(function() {
  plusSlides(1);
}, 6000);

// Detiene la presentación automática al pasar el mouse sobre la presentación de diapositivas
document.getElementById('slideshow-container').addEventListener('mouseenter', function() {
  clearInterval(slideInterval);
});

// Reanuda la presentación automática cuando se retira el mouse de la presentación de diapositivas
document.getElementById('slideshow-container').addEventListener('mouseleave', function() {
  slideInterval = setInterval(function() {
    plusSlides(1);
  }, 2000);
});

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
