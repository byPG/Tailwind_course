const menuBtn = document.getElementById("menu-btn");

const menu = document.getElementById("menu");

const navToggle = function () {
  menuBtn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
};

menuBtn.addEventListener("click", navToggle);
