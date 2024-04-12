const img = document.querySelector("img");
const degree = document.querySelector("h1");
let rem = 16;
let value = 0;
let count = 1;

// function timeDelay(i, count) {
//     setInterval(() => {
//         value = "blur(" + `${(rem - i).toFixed(2)}px` + ")";
//         img.style.filter = value;
//         degree.innerHTML = count;
//         console.log(value, i, count);
//     }, 1000);
// }

// function fff(count) {
//     setInterval(() => {
//         console.log("abc", count);
//         count++;
//         if (count === 5) {
//             clearInterval();
//         }
//     }, 1000);
// }

window.addEventListener("load", () => {
    // for (let i = 0; i <= 16; i += 0.16) {
    //     timeDelay(i, count);
    //     count++;
    // }
    // if (count === 10) {
    //     clearInterval(timeDelay);
    // }
    // fff(count);
    for (let i = 0; i <= 20; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000);
        // console.log("count" + count);
        // count++;
    }
    // setTimeout(() => {
    //     while(count<20) {
    //         console.log(count);
    //     }
    // }, 1000);
});
