const container = document.querySelector(".container");

for (let i = 0; i < 20; i++) {
    const btn = document.createElement("button");
    btn.textContent = "CLICK";
    container.append(btn);
}

const randomNumber = () => Math.floor(Math.random() * 256);

const generateRandomColor = () =>
    `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;

// container.addEventListener("click", (event) => {
//     event.target.style.backgroundColor = generateRandomColor();
// });

// const changeColor = (tag) =>
//     (tag.style.backgroundColor = generateRandomColor());

const buttons = document.querySelectorAll("button");

const changeColor = () => {
    console.log(this);
    this.style.backgroundColor = generateRandomColor();
};

for (let btns of buttons) {
    btns.addEventListener(
        "click",
        () => (btns.style.backgroundColor = generateRandomColor())
        // changeColor
    );
}

const as = document.querySelectorAll("p");

for (let p of as) {
    p.addEventListener(
        "click",
        () => (p.style.backgroundColor = generateRandomColor())
        // changeColor
    );
}
