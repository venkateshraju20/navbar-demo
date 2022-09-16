var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var noButton = document.querySelector(".modal__action-negative");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var mainButton = document.querySelector(".main-button");

function closeButton() {
  backdrop.classList.remove("open");
  if (modal) modal.classList.remove("open");
}

toggleButton.addEventListener("click", function () {
  //   backdrop.style.display = "block";
  //   mobileNav.style.display = "block";
  backdrop.classList.add("open");
  mobileNav.classList.add("open");
});

backdrop.addEventListener("click", function () {
  //   backdrop.style.display = "none";
  //   mobileNav.style.display = "none";
  mobileNav.classList.remove("open");
  closeButton();
});

mainButton.addEventListener("click", function () {
  backdrop.classList.add("open");
  modal.classList.add("open");
});

if (noButton) noButton.addEventListener("click", closeButton);
