const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const btnLeft = document.querySelector('.carousel-btn.left');
const btnRight = document.querySelector('.carousel-btn.right');

let currentIndex = 0;

// Function to update carousel position
function updateCarousel() {
  const itemWidth = items[0].getBoundingClientRect().width + 32; // 32 = gap
  track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

  // Update active class
  items.forEach((item, index) => {
    item.classList.toggle('active', index === currentIndex);
  });
}

// Button Event Listeners
btnLeft.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

btnRight.addEventListener('click', () => {
  if (currentIndex < items.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

// Initialize first active item
updateCarousel();
