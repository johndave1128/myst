//loading screen
window.addEventListener('load', function() {
    var loadingScreen = document.querySelector('#loading-screen');
    loadingScreen.style.display = 'none'
});

//animation
var scrollOffset = 50;
// Add smooth scroll behavior to navigation links
var navLinks = document.querySelectorAll('nav a');
navLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    var targetId = this.getAttribute('href');
    var targetElement = document.querySelector(targetId);
    var targetPosition = targetElement.offsetTop - scrollOffset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
