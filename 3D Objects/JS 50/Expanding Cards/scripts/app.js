// VERSION I
const cards = document.querySelectorAll(".card");

for (let card of cards) {
    let cardClass = card.classList[1];
    let tagToChange = document.querySelector("." + cardClass);
    // on mouse-out
    card.addEventListener("mouseout", () => {
        tagToChange.classList.remove("ontouch");
    });

    // on mouseover
    card.addEventListener("mouseover", () => {
        tagToChange.classList.add("ontouch");
    });

    // on mouse-click
    card.addEventListener("click", () => {
        if (tagToChange.classList.contains("ontouch")) {
            tagToChange.classList.remove("ontouch");
        } else {
            tagToChange.classList.add("ontouch");
        }
    });
}

// VERSION-II
const colors = ["red", "green", "magenta", "cyan", "purple"];
const tuts = document.querySelectorAll(".tut");

i = 0;
for (let tut of tuts) {
    tut.style.backgroundColor = colors[i];
    tut.classList.add("card-style");
    i++;
    tut.addEventListener("click", () => {
        for (let t of tuts) {
            if (t.classList.contains("on-tut-touch")) {
                t.classList.remove("on-tut-touch");
            }
        }
        tut.classList.add("on-tut-touch");
    });
}
