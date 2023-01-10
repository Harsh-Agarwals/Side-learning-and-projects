const user_select = document.querySelector(".weather");
const x = document.createElement("p");
x.textContent = "";

const tempLabel = document.createElement("label");
tempLabel.setAttribute("for", "temp");
tempLabel.textContent = "\nEnter the temperature:";

const temp = document.createElement("input");
temp.setAttribute("type", "number");
temp.setAttribute("id", "temp");
temp.setAttribute("maxLength", "2");
temp.setAttribute("max", 60);
temp.setAttribute(
    "oninput",
    "javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
);
// The above line is put so that maxlength would work on input[type:number] on which this property do not work

const submit = document.createElement("input");
submit.setAttribute("type", "button");
submit.setAttribute("value", "Submit");

function displayControl(display1, display2) {
    tempLabel.style.display = String(display2);
    submit.style.display = String(display1);
}

user_select.addEventListener("change", () => {
    x.textContent = "";
    if (user_select.value == 1) {
        document.body.appendChild(tempLabel);
        tempLabel.appendChild(temp);
        document.body.appendChild(submit);
        displayControl("inline", "inline");

        submit.addEventListener("click", () => {
            if (temp.value <= 38) {
                x.textContent =
                    "Ohh no! Summers again... But temperature looks okay!!!";
            } else {
                x.textContent = "Ohh no! Summers again... I hate it!!!";
            }
            temp.focus();
        });
    } else if (user_select.value == 2) {
        displayControl("none", "none");
        x.textContent =
            "Rainy Season is the most lovely of all, may greenary and love flourish!!";
    } else if (user_select.value == 3) {
        displayControl("none", "none");
        x.textContent = "I am disappointed by winters, once it was my favvvv!";
    } else if (user_select.value == 4) {
        displayControl("none", "none");
        x.textContent =
            "Spring is the most motivational season, the rejunevation one! It inspires the most!!";
    } else {
        displayControl("none", "none");
        x.textContent = "";
    }
    document.body.appendChild(x);
});
