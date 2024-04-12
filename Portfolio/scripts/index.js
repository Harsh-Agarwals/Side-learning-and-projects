const dots = document.querySelectorAll(".big-dot");
const baseCss = document.querySelector("#base-css");
const themeCss = document.querySelector("#theme-css");

const startString = baseCss.href.slice(0, baseCss.href.lastIndexOf("/") + 1);
const map = {
    "big-dot-1": "default",
    "big-dot-2": "blue",
    "big-dot-3": "green",
    "big-dot-4": "purple",
};

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", () => {
        const theme = dots[i];
        const color = map[theme.classList[0]];
        themeCss.href = startString + color + ".css";
    });
}
