const color = document.querySelector(".color");

function colorsHtml(color1, color2) {
    document.body.style.backgroundColor = color1;
    document.body.style.color = color2;
}

color.addEventListener("change", () => {
    const colorValue = color.value;
    switch (colorValue) {
        case "dark":
            colorsHtml("black", "white");
            break;
        case "light":
            colorsHtml("lightcyan", "black");
            break;
        case "purple":
            colorsHtml("purple", "white");
            break;
        case "lime":
            colorsHtml("lime", "darkgreen");
            break;
        default:
            colorsHtml("white", "black");
    }
});
