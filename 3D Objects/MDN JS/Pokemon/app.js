const container = document.querySelector(".container");

function padLeft(num) {
    if (num < 10) {
        return "00" + num;
    } else if (num < 100) {
        return "0" + num;
    } else {
        return num;
    }
}

for (let i = 1; i <= 100; i++) {
    const content = document.createElement("div");
    const imgLink =
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" +
        padLeft(i) +
        ".png";
    content.innerHTML = `<img src=${imgLink} alt=${padLeft(i)}>
                        <p># ${padLeft(i)}</p>`;
    content.classList.add("content");
    container.append(content);
}

// container.addEventListener("mouseover", (event) => {
//     event.target.classList.add("mouseover");
// });

// container.addEventListener("mouseout", (event) => {
//     event.target.classList.remove("mouseover");
// });
