// banner dan sticky navbar
window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
  });

  document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.zoom-img');

    images.forEach(image => {
        image.addEventListener('mouseenter', function() {
            images.forEach(img => {
                if (img !== this) {
                    img.classList.remove('zoom-in');
                    img.classList.add('zoom-out');
                }
            });
            this.classList.remove('zoom-out');
            this.classList.add('zoom-in');
        });

        image.addEventListener('mouseleave', function() {
            images.forEach(img => {
                img.classList.remove('zoom-in');
                img.classList.remove('zoom-out');
            });
        });
    });
});

// hamburger menu
function toggleMenu() {
    const ulc = document.querySelector('.ulc');
    ulc.classList.toggle('active');
  }
  // hamburger menu end