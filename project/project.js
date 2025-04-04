// This code makes a "Read More" or "Read Less" button work. When you click it, it will show extra hidden text or hide it again. If you see "Read More," you can click to see more, and when it says "Read Less," you can click again to hide it.
  
  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".toggle-btn");

    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const hiddenText = this.previousElementSibling.querySelector(".hidden-text");
        if (hiddenText.style.display === "none" || hiddenText.style.display === "") {
          hiddenText.style.display = "inline";
          this.textContent = "Read Less"; 
        } else {
          hiddenText.style.display = "none";
          this.textContent = "Read More"; 
        }
      });
    });
  });


//   This part gets everything ready for a cool pop-up when you click an image. It grabs the area where the image will show bigger and the button to close the pop-up.
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-image');
const closeBtn = document.getElementById('close-btn');


// When you click on an image, it will make the image pop up in a bigger view on the screen. The image in the pop-up will be the same as the one you clicked.
const images = document.querySelectorAll('.clickable-image');

images.forEach(image => {
  image.addEventListener('click', function() {
    modal.style.display = 'flex'; 
    modalImg.src = this.src; 
  });
});

// If you click the "X" button on the pop-up, it will disappear and go back to the normal screen.
closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

// If you press any key on the keyboard, it will close the pop-up automatically.
document.addEventListener('keydown', function(event) {
  if (event.key) { 
    modal.style.display = 'none'; 
  }
});

// This checks if you’ve already turned on dark mode before, and if you did, it keeps it that way when you come back to the page.
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
  modeToggle.checked = true; 
}

// When you click a switch to turn dark mode on or off, it will change the colors of the page. Dark mode makes the page darker (like night time), and light mode makes it bright (like daytime). It remembers what you chose even if you leave and come back.
modeToggle.addEventListener('change', () => {
  if (modeToggle.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
  }
});

