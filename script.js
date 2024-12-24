const header = document.querySelector(".header");
const burger = document.querySelector(".burger");


burger.addEventListener("click", () => {
    header.classList.toggle("mobile-header");
    if (header.classList.contains("mobile-header")) {
        document.body.classList.add("no-scroll");
    } else {
        document.body.classList.remove("no-scroll");
    }
})

const headerTop = document.querySelector(".header-top");
const headerLogo = document.querySelector(".header .logo");

headerTop.style.height = headerLogo.offsetHeight + "px";

