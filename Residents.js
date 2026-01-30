const tabs = document.querySelectorAll(".tab");
const sections = document.querySelectorAll(".content-section");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    sections.forEach(sec => sec.classList.remove("active"));

    tab.classList.add("active");
    const targetId = tab.dataset.section;
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
      targetSection.classList.add("active");
    }
  });
});

function moveSlide(direction, button) {
    const carousel = button.closest('.carousel');
    const inner = carousel.querySelector('.carousel-inner');
    const slides = carousel.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    let currentIndex = parseInt(carousel.getAttribute('data-current-slide') || 0);

    currentIndex += direction;

    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    carousel.setAttribute('data-current-slide', currentIndex);

    const offset = -currentIndex * 100;
    inner.style.transform = `translateX(${offset}%)`;
}