// Navbar JS
/*
function toggleMenu() {
  var menuToggle = document.querySelector(".toggle");
  var menu = document.querySelector(".menu");
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
}*/

let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

//scroll Animation

const sr = ScrollReveal({
  origin: "top",
  distance: "85px",
  duration: 2000,
  reset: true,
});

sr.reveal(".home-text", {});
sr.reveal(".home-img", { delay: 200 });

sr.reveal(".about-text", {});
sr.reveal(".heading", {});
sr.reveal(".about-img", { delay: 200 });

sr.reveal(".footer-widget", {});
sr.reveal(".copyright-wrapper", {});

sr.reveal(".Fcontainer", {});
