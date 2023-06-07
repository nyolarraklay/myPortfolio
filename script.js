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

// socialmedia
const instagram = document.querySelector(".instagram");
const facebook = document.querySelector(".facebook");
const linkedin = document.querySelector(".linkedin");

instagram.addEventListener(
  "click",

  function redirect() {
    location.href = "https://www.instagram.com/";
  }
);

facebook.addEventListener(
  "click",

  function redirect() {
    location.href = "https://www.facebook.com/";
  }
);

linkedin.addEventListener(
  "click",

  function redirect() {
    location.href = "https://www.linkedin.com/";
  }
);
