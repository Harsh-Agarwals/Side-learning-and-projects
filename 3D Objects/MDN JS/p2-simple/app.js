const btn = document.querySelectorAll("button");

for (const button of btn) {
    button.addEventListener("click", () => {
        const btnText = button.textContent;
        const text = "You clicked the " + btnText + " button";
        const para = document.createElement("p");
        para.textContent = text;
        document.body.appendChild(para);
    });
}
