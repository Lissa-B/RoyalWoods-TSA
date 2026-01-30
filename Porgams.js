const track = document.querySelector(".carousel-track");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let position = 0;
const cardWidth = 215; 
const visibleCards = 3;
const totalCards = track.children.length;
const maxOffset = -((totalCards - visibleCards) * cardWidth);

next.addEventListener("click", () => {
  if (position > maxOffset) {
    position -= cardWidth;
  } else {
    position = 0; 
  }
  track.style.transform = `translateX(${position}px)`;
});

prev.addEventListener("click", () => {
  if (position < 0) {
    position += cardWidth;
  } else {
    position = maxOffset; 
  }
  track.style.transform = `translateX(${position}px)`;
});