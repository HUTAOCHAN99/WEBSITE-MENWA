// banner dan sticky navbar
window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Animasi Carousel
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
    // Animasi Carousel End

    // Animasi Kartu Pertama (c1)
    const label1 = document.querySelector('label.card[for="c1"]');
    const images1 = ['img/diksar1.JPG', 'img/diksar2.JPG', 'img/diksar3.JPG', 'img/diksar41.JPG', 'img/diksar5.JPG','img/diksar42.JPG'];
    let imageIndex1 = 0;

    function changeBackgroundImage1() {
        label1.style.backgroundImage = `url('${images1[imageIndex1]}')`;
        imageIndex1 = (imageIndex1 + 1) % images1.length;
    }

    setInterval(changeBackgroundImage1, 1000);
    // Animasi Kartu Pertama (c1) End

    // Animasi Kartu Kedua (c2)
    const label2 = document.querySelector('label.card[for="c2"]');
    const images2 = ['img/pradik(1).jpg', 'img/pradik(2)jpg', 'img/pradik(3).jpg', 'img/pradik(4)jpg'];
    let imageIndex2 = 0;

    function changeBackgroundImage2() {
        label2.style.backgroundImage = `url('${images2[imageIndex2]}')`;
        imageIndex2 = (imageIndex2 + 1) % images2.length;
    }

    setInterval(changeBackgroundImage2, 1000);
    // Animasi Kartu Kedua (c2) End

    // Animasi Kartu Ketiga (c3)
    const label3 = document.querySelector('label.card[for="c3"]');
    const images3 = ['img/pembaretan (1).JPG', 'img/pembaretan (2).JPG', 'img/pembaretan (3).JPG'];
    let imageIndex3 = 0;

    function changeBackgroundImage3() {
        label3.style.backgroundImage = `url('${images3[imageIndex3]}')`;
        imageIndex3 = (imageIndex3 + 1) % images3.length;
    }

    setInterval(changeBackgroundImage3, 1000);
    // Animasi Kartu Ketiga (c3) End

    // Animasi Kartu Keempat (c4)
    const label4 = document.querySelector('label.card[for="c4"]');
    const images4 = ['img/diksar16.JPG', 'img/diksar17.JPG', 'img/diksar18.JPG', 'img/diksar19.JPG', 'img/diksar20.JPG'];
    let imageIndex4 = 0;

    function changeBackgroundImage4() {
        label4.style.backgroundImage = `url('${images4[imageIndex4]}')`;
        imageIndex4 = (imageIndex4 + 1) % images4.length;
    }

    setInterval(changeBackgroundImage4, 1000);
    // Animasi Kartu Keempat (c4) End

    // Animasi Kartu Kelima (c5)
    const label5 = document.querySelector('label.card[for="c5"]');
    const images5 = ['img/diksar21.JPG', 'img/diksar22.JPG', 'img/diksar23.JPG', 'img/diksar24.JPG', 'img/diksar25.JPG'];
    let imageIndex5 = 0;

    function changeBackgroundImage5() {
        label5.style.backgroundImage = `url('${images5[imageIndex5]}')`;
        imageIndex5 = (imageIndex5 + 1) % images5.length;
    }

    setInterval(changeBackgroundImage5, 1000);
    // Animasi Kartu Kelima (c5) End

    // Animasi Kartu Keenam (c6)
    const label6 = document.querySelector('label.card[for="c6"]');
    const images6 = ['img/diksar26.JPG', 'img/diksar27.JPG', 'img/diksar28.JPG', 'img/diksar29.JPG', 'img/diksar30.JPG'];
    let imageIndex6 = 0;

    function changeBackgroundImage6() {
        label6.style.backgroundImage = `url('${images6[imageIndex6]}')`;
        imageIndex6 = (imageIndex6 + 1) % images6.length;
    }

    setInterval(changeBackgroundImage6, 1000);
    // Animasi Kartu Keenam (c6) End

    // Animasi Kartu Ketujuh (c7)
    const label7 = document.querySelector('label.card[for="c7"]');
    const images7 = ['img/diksar31.JPG', 'img/diksar32.JPG', 'img/diksar33.JPG', 'img/diksar34.JPG', 'img/diksar35.JPG'];
    let imageIndex7 = 0;

    function changeBackgroundImage7() {
        label7.style.backgroundImage = `url('${images7[imageIndex7]}')`;
        imageIndex7 = (imageIndex7 + 1) % images7.length;
    }

    setInterval(changeBackgroundImage7, 1000);
    // Animasi Kartu Ketujuh (c7) End

    // Animasi Kartu Kedelapan (c8)
    const label8 = document.querySelector('label.card[for="c8"]');
    const images8 = ['img/diksar36.JPG', 'img/diksar37.JPG', 'img/diksar38.JPG', 'img/diksar39.JPG', 'img/diksar40.JPG'];
    let imageIndex8 = 0;

    function changeBackgroundImage8() {
        label8.style.backgroundImage = `url('${images8[imageIndex8]}')`;
        imageIndex8 = (imageIndex8 + 1) % images8.length;
    }

    setInterval(changeBackgroundImage8, 1000);
    // Animasi Kartu Kedelapan (c8) End

    // Animasi Kartu Kesembilan (c9)
    const label9 = document.querySelector('label.card[for="c9"]');
    const images9 = ['img/diksar41.JPG', 'img/diksar42.JPG', 'img/diksar43.JPG', 'img/diksar44.JPG', 'img/diksar45.JPG'];
    let imageIndex9 = 0;

    function changeBackgroundImage9() {
        label9.style.backgroundImage = `url('${images9[imageIndex9]}')`;
        imageIndex9 = (imageIndex9 + 1) % images9.length;
    }

    setInterval(changeBackgroundImage9, 1000);
    // Animasi Kartu Kesembilan (c9) End

    // Animasi Kartu Kesepuluh (c10)
    const label10 = document.querySelector('label.card[for="c10"]');
    const images10 = ['img/diksar46.JPG', 'img/diksar47.JPG', 'img/diksar48.JPG', 'img/diksar49.JPG', 'img/diksar50.JPG'];
    let imageIndex10 = 0;

    function changeBackgroundImage10() {
        label10.style.backgroundImage = `url('${images10[imageIndex10]}')`;
        imageIndex10 = (imageIndex10 + 1) % images10.length;
    }

    setInterval(changeBackgroundImage10, 1000);
    // Animasi Kartu Kesepuluh (c10) End

    // Animasi Kartu Kesebelas (c11)
    const label11 = document.querySelector('label.card[for="c11"]');
    const images11 = ['img/diksar51.JPG', 'img/diksar52.JPG', 'img/diksar53.JPG', 'img/diksar54.JPG', 'img/diksar55.JPG'];
    let imageIndex11 = 0;

    function changeBackgroundImage11() {
        label11.style.backgroundImage = `url('${images11[imageIndex11]}')`;
        imageIndex11 = (imageIndex11 + 1) % images11.length;
    }

    setInterval(changeBackgroundImage11, 1000);
    // Animasi Kartu Kesebelas (c11) End
});

