const menuButton = document.querySelector("[data-sandwich]");
const mainNav = document.querySelector("[data-main-nav]");
const logo = document.querySelector("[data-header-logo]");
const menuItems = mainNav.querySelectorAll('[data-nav-item="item"]');

menuButton.addEventListener("click", () => {
  const isActive = menuButton.classList.contains("is-active");

  if (!isActive) {
    document.body.style.overflow = "hidden";
    logo.classList.add("is-menu");
    menuItems.forEach((item, index) => {
      item.style.transform = "translateX(-100%)";
    });
  } else {
    document.body.style.overflow = "";
    logo.classList.remove("is-menu");
  }

  menuButton.classList.toggle("is-active");
  mainNav.classList.toggle("is-active");

  if (!isActive) {
    menuItems.forEach((item, index) => {
      setTimeout(() => {
        item.style.transform = "translateX(0)";
      }, index * 200);
    });
  } else {
    menuItems.forEach((item) => {
      item.style.transform = "translateX(-50%)";
    });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton.classList.contains("is-active")) {
    menuButton.click();
  }
});

document.addEventListener("click", (event) => {
  const isMenuClicked =
    menuButton.contains(event.target) || mainNav.contains(event.target);
  if (!isMenuClicked && menuButton.classList.contains("is-active")) {
    menuButton.click();
  }
});
