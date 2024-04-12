const btn = document.querySelector("button");
const div = document.querySelector("div");
const video = document.querySelector("video");

btn.addEventListener("click", () => {
    div.classList.remove("hidden");
});

video.addEventListener("click", (event) => {
    event.stopPropagation();
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

div.addEventListener("click", () => {
    div.classList.add("hidden");
    video.pause();
    video.currentTime = 0;
});
