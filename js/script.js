document.addEventListener("DOMContentLoaded", () => {
  console.log("Real Estate Website Loaded");

  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
      dots[i].classList.toggle('active', i === index);
    });
    currentIndex = index;
  }

  document.querySelector('.prev').addEventListener('click', () => {
    let newIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(newIndex);
  });

  document.querySelector('.next').addEventListener('click', () => {
    let newIndex = (currentIndex + 1) % slides.length;
    showSlide(newIndex);
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      showSlide(parseInt(dot.getAttribute('data-index')));
    });
  });

  // ✅ Initialize
  showSlide(currentIndex);
});


