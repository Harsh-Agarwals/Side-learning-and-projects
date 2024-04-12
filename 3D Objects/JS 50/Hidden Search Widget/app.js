const icon = document.querySelector(".icon");
const search = document.querySelector(".search");
const input = document.querySelector('input[type="text"]');
const notSearch = document.querySelector("div.search");

search.addEventListener("click", (e) => {
    e.stopPropagation();
    search.classList.add("expand");
    input.classList.remove("hidden");
    input.focus();
});

document.addEventListener("mouseup", () => {
    search.classList.remove("expand");
    input.classList.add("hidden");
});
