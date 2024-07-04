// banner dan sticky navbar
window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
  });

  // animasi carousel
  document.addEventListener('DOMContentLoaded', function() {
    let index = 0;
    const container = document.querySelector('.carousel-container');
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;
    const cardWidth = totalCards > 0 ? cards[0].offsetWidth + 20 : 0;

    function updateCarousel() {
        container.style.transform = `translateX(${-index * cardWidth}px)`;
    }

    function moveLeft() {
        if (index > 0) {
            index--;
            updateCarousel();
        }
    }

    function moveRight() {
        if (index < totalCards - 1) {
            index++;
            updateCarousel();
        }
    }

    document.querySelector('.left-arrow').addEventListener('click', moveLeft);
    document.querySelector('.right-arrow').addEventListener('click', moveRight);

    // animasi kartu pertama
const label1 = document.querySelector('label.card[for="c1"]');

// Daftar foto untuk label pertama
const images = ['img/img1.jpg', 'img/img1-2.jpg', 'img/img1-3.jpg'];
let imageIndex = 0;

// Fungsi untuk mengubah gambar latar belakang label pertama
function changeBackgroundImage() {
    // Setel gambar latar belakang
    label1.style.backgroundImage = `url('${images[imageIndex]}')`;

    // Geser indeks gambar untuk siklus berikutnya
    imageIndex = (imageIndex + 1) % images.length;
}

// Panggil fungsi untuk mengubah gambar latar belakang setiap 1 detik
setInterval(changeBackgroundImage, 1000);
// kartu pertama end
});
