const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    window.location.href =
        window.location.href.slice(
            0,
            window.location.href.lastIndexOf(".") - 7
        ) + "index.html";
});
