let prev = document.querySelector('[data-slider-btn-prev]');
let next = document.querySelector('[data-slider-btn-next]');
let dots = document.querySelectorAll('.slider__indicate');
let slides = document.querySelectorAll('.slider__item');

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides() {
  showSlides(slideIndex += 1);
}
function minusSlides() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' slider__indicate_current', '');
  }
  slides[slideIndex-1].style.display = 'block'; 
  dots[slideIndex-1].className += ' slider__indicate_current';
}


prev.addEventListener('click', minusSlides, false);
next.addEventListener('click', plusSlides, false);

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', function () {
        showSlides(slideIndex = i + 1);
    })
}
