const galleryBtn = document.querySelector(".img-design");
const displayImg = document.querySelector(".display-img");

const imageButtons = document.querySelectorAll(".img-btn");

galleryBtn.addEventListener("click", () => {
    if (galleryBtn.textContent === "Darken") {
        galleryBtn.textContent = "Lighten";
        displayImg.style.opacity = 0.4;
    } else {
        displayImg.style.opacity = 0.8;
        galleryBtn.textContent = "Darken";
    }
});

for (const img of imageButtons) {
    img.addEventListener("click", () => {
        const imgSrc = img.innerHTML.slice(27, 44);
        displayImg.setAttribute("src", imgSrc);
    });
}
