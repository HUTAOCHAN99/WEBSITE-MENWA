// banner dan sticky navbar
window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
  });
// hamburger menu
function toggleMenu() {
    const ulc = document.querySelector('.ulc');
    ulc.classList.toggle('active');
  }
  // hamburger menu end


