const slides = document.querySelectorAll('.slide');
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    resetSlides();
    slides[index].classList.add('active');
  });
});

function resetSlides() {
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
}
