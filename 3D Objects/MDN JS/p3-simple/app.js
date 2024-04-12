const h1 = document.querySelector("h1");
const btn = document.querySelector("button");
document.body.style.textAlign = "center";

const randomNumber = () => Math.floor(Math.random() * 256);

btn.addEventListener("click", () => {
    const randomColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
    document.body.style.backgroundColor = randomColor;
    h1.textContent = randomColor;
});
