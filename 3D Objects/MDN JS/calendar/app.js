const monthSelect = document.querySelector(".month");

const colors = [
    "red",
    "yellow",
    "green",
    "pink",
    "lightcyan",
    "magenta",
    "lime",
    "cyan",
    "orange",
    "purple",
    "brown",
    "lightpink",
];

const numDates = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const monthHeading = document.querySelector(".monthHeading");

const datesUl = document.createElement("ul");
datesUl.style.listStyleType = "none";
datesUl.textContent = "";

function designCanvas(date, color) {
    datesUl.textContent = "";
    for (let i = 1; i <= date; i++) {
        document.body.appendChild(datesUl);
        const dateLi = document.createElement("li");
        dateLi.style.backgroundColor = color;
        dateLi.textContent = i;
        datesUl.appendChild(dateLi);
    }
}

monthSelect.addEventListener("change", () => {
    let dates = numDates[Number(monthSelect.value - 1)];
    let color = colors[Number(monthSelect.value - 1)];
    designCanvas(dates, color);
    // switch (monthSelect.value) {
    //   case '1':
    //   case '2':
    //   case '3':
    //   case '4':
    //   case '5':
    //   case '6':
    //   case '7':
    //   case '8':
    //   case '9':
    //   case '10':
    //   case '11':
    //   case '12':
    //     designCanvas(dates, color);
    //     break;
    //   default:
    //     datesUl.textContent = '';
    // }
});
