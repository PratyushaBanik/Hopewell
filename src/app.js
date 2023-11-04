let options = {
  threshold: 0.9,
};
let nav = document.querySelector("nav");
let observer = new IntersectionObserver(navChange, options); 
let navLogo = document.querySelector('.logo-img')
function navChange(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      nav.classList.remove("active");
      navLogo.src="./img/logo-white.png"
    } else {
      nav.classList.add("active");
      navLogo.src="./img/logo.png"
    }
  });
}
const header = document.querySelector("header");
observer.observe(header);

// nav toggler
const toggler = document.querySelector(".toggler");
const menu = document.querySelector(".menu");
toggler.addEventListener("click", (e) => {
  console.log(e.target);
  toggler.classList.toggle("active");
  menu.classList.toggle("active");
});

const distBtn = document.querySelector("#dist_btn_popup");
const distPopup = document.querySelector("#popup_dist");
const overlay = document.querySelector("#overlay");
const contactBtn = document.querySelector("#contact_btn");
const contactPopup = document.querySelector("#popup_contact");
const overlay2 = document.querySelector("#overlay2");
distBtn.addEventListener("click", (e) => {
  e.preventDefault();
  distPopup.classList.add("active");
  overlay.classList.add("active");
});
overlay.addEventListener("click",() => {
  distPopup.classList.remove("active");
  overlay.classList.remove("active");
})
overlay2.addEventListener("click",() => {
  contactPopup.classList.remove("active");
  overlay2.classList.remove("active");
})
contactBtn.addEventListener("click",(e) => {
  e.preventDefault();
  contactPopup.classList.add("active");
  overlay2.classList.add("active");
})