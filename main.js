const navMenuButton = document.getElementById("nav-menu");
const navMenuIcon = document.getElementById("nav-menu-icon");
const menuPanel = document.getElementById("menu-panel");
const overlay = document.getElementById("overlay");
const hero = document.querySelector(".hero");

navMenuButton.addEventListener("click", function () {
  const isOpen = navMenuButton.getAttribute("aria-expanded") === "true";

  if (!isOpen && window.innerWidth < 1024) {
    const targetHeight = Math.max(hero.offsetHeight, menuPanel.scrollHeight);
    menuPanel.style.height = `${targetHeight}px`;
  } else if (isOpen) {
    menuPanel.style.height = "";
  }

  navMenuButton.setAttribute("aria-expanded", !isOpen);
  menuPanel.setAttribute("aria-hidden", isOpen);
  menuPanel.classList.toggle("is-open");
  overlay.setAttribute("aria-hidden", isOpen);
  overlay.classList.toggle("is-open");

  if (isOpen) {
    navMenuIcon.src = "./assets/images/icon-menu.svg";
    navMenuButton.setAttribute("aria-label", "Open menu");
  } else {
    navMenuIcon.src = "./assets/images/icon-close.svg";
    navMenuButton.setAttribute("aria-label", "Close menu");
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth >= 1024) {
    menuPanel.style.height = "";
  }
});