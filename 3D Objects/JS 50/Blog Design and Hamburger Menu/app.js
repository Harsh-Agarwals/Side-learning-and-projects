const menuIcon = document.querySelector(".menuIcon");
const navList = document.querySelector("nav ul");
const closeIcon = document.querySelector(".closeIcon");

menuIcon.addEventListener("click", () => {
    closeIcon.classList.remove("hidden");
    navList.classList.remove("hidden");
});

closeIcon.addEventListener("click", () => {
    closeIcon.classList.add("hidden");
    navList.classList.add("hidden");
});

document.addEventListener("wheel", () => {
    if (!navList.classList.contains("hidden")) {
        setTimeout(() => {
            closeIcon.classList.add("hidden");
            navList.classList.add("hidden");
        }, 300);
    }
});
