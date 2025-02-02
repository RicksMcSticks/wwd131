// Select the menu button and the navigation menu
const menuButton = document.getElementById("menuButton");
const navMenu = document.querySelector("nav ul");

// Toggle menu visibility when clicking the "Menu" button
menuButton.addEventListener("click", function() {
  navMenu.classList.toggle("show");
});

// Function to ensure the menu is visible on large screens
function handleResize() {
  if (window.innerWidth > 1000) {
    navMenu.classList.add("show"); // Always show menu on large screens
  } else {
    navMenu.classList.remove("show"); // Hide menu initially on small screens
  }
}

// Run handleResize on window resize and on page load
window.addEventListener("resize", handleResize);
handleResize();

// Create the viewer template for the modal
function viewerTemplate(pic, alt) {
    return `
      <div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
      </div>`;
  }
  
  
// Function to handle image click and display the modal with the full image
function viewHandler(event) {
    const imgElement = event.target;  // Get the clicked image element
    // Replace "-sm" with "-full" to get the full-size image path
    const picSrc = imgElement.src.replace("-sm", "-full");
  
    // Find the modal and the image inside it
    const modal = document.querySelector(".viewer");
    const modalImage = modal.querySelector("img");
  
    // Set the image src to the full-size image
    modalImage.src = picSrc;
  
    // Show the modal by adding the 'show' class
    modal.classList.add("show");
  
    // Add event listener to close the modal
    const closeButton = document.querySelector(".close-viewer");
    closeButton.addEventListener("click", closeViewer);
  }
  
  // Function to close the modal
  function closeViewer() {
    const modal = document.querySelector(".viewer");
    modal.classList.remove("show");  // Hide the modal
    modal.querySelector("img").src = "";  // Clear the image src
  }
  
  // Attach event listeners to all images in the gallery
  const galleryImages = document.querySelectorAll(".gallery img");
  galleryImages.forEach(img => {
    img.addEventListener("click", viewHandler);
  });
  
  
  