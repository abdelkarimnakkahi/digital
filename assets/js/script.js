let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;

document.
  getElementById('carousel__button--next')
  .addEventListener("click", function() {
    moveToNextSlide();
  });
document.
  getElementById('carousel__button--prev')
  .addEventListener("click", function() {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('carousel__item--visible');
    slide.classList.add('carousel__item--hidden');
  }

  slides[slidePosition].classList.add('carousel__item--visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}


const currentYear = new Date().getFullYear();
const copyright = document.querySelector('.brand-footer');
copyright.innerHTML+= `<p>© ${currentYear} All Right Reserved</p>`;

const menu = document.querySelector('#menu');

menu.addEventListener('click',() => {
  const ul = document.querySelector('nav .container ul');
  ul.classList.toggle('active');
});

const link = document.querySelectorAll('nav ul a');
const ul = document.querySelector('nav .container ul');

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function(){
        ul.classList.toggle("active");
    });
}