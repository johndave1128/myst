//loading screen
window.addEventListener('load', function() {
  var loadingScreen = document.getElementById('loading-screen');
  var content = document.getElementById('content');
  loadingScreen.style.display = 'none';
  content.style.display = 'block';
});
// Add smooth scroll behavior to navigation links
var scrollOffset = 50;
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
// top button
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if ((document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) && window.innerWidth > 1000)
  {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}

// topnav and bottom-nav
let topNav = document.getElementById("top-nav");
let bottomNav = document.getElementById("bottom-nav");

if (window.innerWidth < 1000) {
  topNav.style.display = "none";  
} else {
  bottomNav.style.display = "none";
}
function redirectToStore() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
  
  if (/android/i.test(userAgent)) {
    window.location.href = 'https://play.google.com/store/apps/details?id=com.kog.grandchaseglobal&hl=en&gl=US&pli=1';
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    window.location.href = 'https://apps.apple.com/us/app/grandchase/id1385904294'; 
  } else {
    alert('Unsupported device. Please visit the appropriate store manually.');
  }
}


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) =>{
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }else{
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));