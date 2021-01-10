const hamburger = document.querySelector(".hamburger"),
    nav = document.querySelector(".nav"),
    linkItem = document.querySelectorAll(".nav__link"),
    closeElem = document.querySelector(".nav__close");
hamburger.addEventListener("click", () => {
    nav.classList.add("active");
});
closeElem.addEventListener("click", () => {
    nav.classList.remove("active");
});
linkItem.forEach((item) => {
    item.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});
=----------------------------------------
o90p