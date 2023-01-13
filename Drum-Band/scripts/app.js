const container = document.querySelector(".container");
const base = ["crash", "kick-bass", "snare", "tom1", "tom2", "tom3", "tom4"];
const keys = ["a", "s", "d", "w", "j", "k", "l"];

for (let i = 0; i < 7; i++) {
    const btn = document.createElement("button");
    btn.textContent = keys[i];
    btn.style.backgroundImage = `url('./images/${base[i]}.png')`;
    btn.classList.add("button-design");
    container.append(btn);
}

buttons = document.querySelectorAll("button");
let audio = new Audio();

const playSound = (key, hover) => {
    hover.classList.add("afterPlay");
    audio.setAttribute(
        "src",
        `./sounds/${base[keys.indexOf(key.toLowerCase())]}.mp3`
    );
    audio.play();
    setTimeout(() => {
        hover.classList.remove("afterPlay");
    }, 100);
};

for (let btns of buttons) {
    btns.addEventListener("click", (event) => {
        const key = btns.innerText;
        playSound(key, btns);
    });
}

document.addEventListener("keydown", (event) => {
    if (keys.includes(event.key.toLowerCase())) {
        const keyPressed = buttons[keys.indexOf(event.key.toLowerCase())];
        playSound(event.key, keyPressed);
    }
});
