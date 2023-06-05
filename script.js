// icon navbar

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// buttons
const hireMe = document.querySelector(".btn-box .hire");
function redirectButtons() {
  location.href = "portfolio.html";
}
const contactMe = document.querySelector(".btn-box .contactMe");
function redirectButtonstoContact() {
  location.href = "contact.html";
}
contactMe.addEventListener("click", redirectButtonstoContact);
hireMe.addEventListener("click", redirectButtons);
