const buttons = document.querySelectorAll(".btn");
const box = document.querySelector(".box-content");
const cross = document.querySelector(".cross");
const otherDivs = document.querySelectorAll("body>div:not(.box-content)");

const buttonDisable = (Boolean) => {
    if (Boolean === true) {
        for (let div of otherDivs) {
            div.style.opacity = 1;
        }
        for (let button of buttons) {
            button.disabled = false;
            button.style.opacity = 1;
            button.style.cursor = "pointer";
        }
    } else {
        for (let div of otherDivs) {
            div.style.opacity = 0.5;
        }
        for (let button of buttons) {
            button.disabled = true;
            button.style.opacity = 0.5;
            button.style.cursor = "default";
        }
    }
};

for (let button of buttons) {
    button.addEventListener("click", (e) => {
        e.stopPropagation();
        box.classList.remove("hidden");
        buttonDisable(box.classList.contains("hidden"));
    });
}

function timeOutSet() {
    box.style.opacity = 0.1;
    setTimeout(() => {
        box.classList.add("hidden");
        box.style.opacity = 1;
        buttonDisable(box.classList.contains("hidden"));
    }, 500);
}

cross.addEventListener("click", () => timeOutSet());

document.addEventListener("keyup", (e) => {
    if (!box.classList.contains("hidden") && e.key === "Escape") {
        timeOutSet();
    }
});

for (let div of otherDivs) {
    div.addEventListener("click", () => {
        setTimeout(() => {
            if (!box.classList.contains("hidden")) {
                timeOutSet();
            }
        }, 0);
    });
}
