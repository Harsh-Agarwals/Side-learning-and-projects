const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    btn.innerHTML = "Click me!";
    const username = window.prompt("Tell me your name:");
    btn.innerHTML += " " + username;
});
