const container = document.getElementById("container");

function randomNumber() {
    return Math.floor(Math.random() * 256);
}

container.addEventListener("click", (event) => {
    color = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
    console.log(color);
    event.target.style.backgroundColor = color;
});
