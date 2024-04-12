const colorOption = document.querySelector(".color");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const colors = [
    "red",
    "pink",
    "purple",
    "yellow",
    "lime",
    "green",
    "blue",
    "darkblue",
    "orange",
    "magenta",
    "cyan",
    "brown",
    "white",
];
const modes = ["red", "green", "blue", "random"];

// The code below prevents from blurry circles https://stackoverflow.com/questions/48961797/canvas-circle-looks-blurry
const size = 1200;

var scale = window.devicePixelRatio; // <--- Change to 1 on retina screens to see blurry canvas.
canvas.width = size * scale;
canvas.height = size * scale;

// Normalize coordinate system to use css pixels.
ctx.scale(scale, scale);

// General code starts here
function getRandom(number) {
    return Math.ceil(Math.random() * Math.round(number));
}

let intervalId = null;
const maxRunTime = 10;
let runTime = 0;
function draw() {
    if (runTime <= maxRunTime) {
        let mode = modes[Math.floor(Math.random() * modes.length)];
        // const color = colorOption.value;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 150; i++) {
            ctx.beginPath();
            ctx.arc(
                getRandom(canvas.width),
                getRandom(canvas.height),
                getRandom(50),
                0,
                2 * Math.PI
            );
            // switch (color) {
            switch (mode) {
                case "red":
                    ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
                    break;
                case "green":
                    ctx.fillStyle = "rgba(0, 255, 0, 0.5)";
                    break;
                case "blue":
                    ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
                    break;
                case "random":
                    ctx.fillStyle =
                        colors[Math.floor(Math.random() * colors.length)];
                    break;
                default:
                    ctx.fillStyle = "transparent";
            }
            ctx.fill();
        }
        runTime++;
    } else {
        clearInterval(intervalId);
    }
}

// colorOption.addEventListener("change", draw);

intervalId = setInterval(draw, 2000);
