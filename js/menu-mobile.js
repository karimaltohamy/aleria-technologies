const btnMenu = document.querySelector(".btn_menu");
const menuMobile = document.querySelector(".menu_mobile");
const overflow = document.querySelector(".overflow");
const btnCloseMenu = document.querySelector(".btn_close_menu");

btnMenu.addEventListener("click", () => {
  menuMobile.classList.add("active");
  overflow.classList.add("active");
});

btnCloseMenu.addEventListener("click", () => {
  menuMobile.classList.remove("active");
  overflow.classList.remove("active");
});
