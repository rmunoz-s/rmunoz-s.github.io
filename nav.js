window.onscroll = function() { stickyNav() };

function stickyNav() {
  const navContainer = document.querySelector(".nav-container");
  const stickyPoint = 620;

  if (window.pageYOffset >= stickyPoint) {
    navContainer.classList.add("sticky");
  } else {
    navContainer.classList.remove("sticky");
  }
}
