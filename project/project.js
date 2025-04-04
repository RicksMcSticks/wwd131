  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".toggle-btn");

    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const hiddenText = this.previousElementSibling.querySelector(".hidden-text");
        if (hiddenText.style.display === "none" || hiddenText.style.display === "") {
          hiddenText.style.display = "inline";
          this.textContent = "Read Less"; // Change button text
        } else {
          hiddenText.style.display = "none";
          this.textContent = "Read More"; // Change button text
        }
      });
    });
  });

// Get modal and elements
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-image');
const closeBtn = document.getElementById('close-btn');

// Get all clickable images
const images = document.querySelectorAll('.clickable-image');

// When any image is clicked
images.forEach(image => {
  image.addEventListener('click', function() {
    modal.style.display = 'flex'; // Show modal
    modalImg.src = this.src; // Set the modal image source to the clicked image's source
  });
});

// When the close button (X) is clicked
closeBtn.addEventListener('click', function() {
  modal.style.display = 'none'; // Hide the modal
});

// Close modal when any key is pressed
document.addEventListener('keydown', function(event) {
  if (event.key) { // Any key
    modal.style.display = 'none'; // Hide the modal
  }
});


const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

// Load saved mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
  modeToggle.checked = true; // Set switch position
}

// Toggle mode on switch click
modeToggle.addEventListener('change', () => {
  if (modeToggle.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
  }
});

