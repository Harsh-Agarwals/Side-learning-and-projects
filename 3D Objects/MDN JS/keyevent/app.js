const btn = document.querySelector("button");
const inp = document.querySelector("input");
btn.addEventListener("click", (event) => {
    console.log(event);
});

inp.addEventListener("keydown", (eve) => {
    console.log(eve.key);
    console.log(`You pressed ${eve.key} key`);
    if (eve.key == "a") {
        console.log("YAAAY!!");
    }
});
// inp.addEventListener("keyup", (eve) => console.log(eve.key));

window.addEventListener("keydown", (e) => {
    // console.log(e.key);
    switch (e.key) {
        case "ArrowUp":
            console.log("UP!");
            break;
        case "ArrowDown":
            console.log("DOWN");
            break;
        case "ArrowLeft":
            console.log("LEFT");
            break;
        case "ArrowRight":
            console.log("RIGHT");
            break;
    }
});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("SUBMITTED");
});
