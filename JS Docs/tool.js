const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownContent = document.getElementById("dropdownContent");

// Toggle the dropdown menu when the button is clicked
dropdownBtn.addEventListener("click", function(event) {
  dropdownContent.classList.toggle("show");
  // Prevent the click from immediately registering on the window
  event.stopPropagation(); 
});

// Close the dropdown if the user clicks outside of it
window.addEventListener("click", function(event) {
  if (!event.target.matches('.dropbtn')) {
    if (dropdownContent.classList.contains('show')) {
      dropdownContent.classList.remove('show');
    }
  }
});
