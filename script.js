const movieCards = document.querySelectorAll('.movie-card');
movieCards.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.toggle('selected');
  });
});

const toggle = document.getElementById('toggle');
const body = document.body;

// JavaScript code
document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll(".transition-image");
  let currentIndex = 0;

  function showNextImage() {
    // Hide the current image
    images[currentIndex].style.opacity = 0;

    // Update the index for the next image
    currentIndex = (currentIndex + 1) % images.length;

    // Show the next image
    images[currentIndex].style.opacity = 1;
  }

  // Call the showNextImage function every 3 seconds
  setInterval(showNextImage, 3000);
});

