// banner dan sticky navbar
window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});

// carousel
let currentIndex = 0;
let slideInterval;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const indicators = document.querySelectorAll(".indicator");

  if (index >= slides.length) currentIndex = 0;
  if (index < 0) currentIndex = slides.length - 1;

  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${-currentIndex * 100}%)`;
    indicators[i].classList.toggle("active", i === currentIndex);
  });
}

function moveSlide(step) {
  showSlide((currentIndex += step));
  resetInterval();
}

function currentSlide(index) {
  showSlide((currentIndex = index - 1));
  resetInterval();
}

function autoPlay() {
  slideInterval = setInterval(() => {
    moveSlide(1);
  }, 3000); // Ganti 3000 dengan waktu yang diinginkan dalam milidetik
}

function resetInterval() {
  clearInterval(slideInterval);
  autoPlay();
}

showSlide(currentIndex);
autoPlay();
// carousel end
