// METHOD-1
colors = ["red", "orange", "yellow", "lime", "lightblue", "violet", "indigo"];

// time = 1000;
// for (let color of colors.reverse()) {
//     setTimeout(() => {
//         document.body.style.backgroundColor = color;
//     }, time);
//     time += 1000;
// }

// METHOD-2
// const colorUpdate = (color, time) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = color;
//     }, time);
// };

// time = 1000;
// for (let color of colors) {
//     colorUpdate(color, time);
//     time += 1000;
// }

// METHOD-3
// setTimeout(() => {
//     document.body.style.backgroundColor = "red";
//     setTimeout(() => {
//         document.body.style.backgroundColor = "orange";
//         setTimeout(() => {
//             document.body.style.backgroundColor = "yellow";
//             setTimeout(() => {
//                 document.body.style.backgroundColor = "lime";
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = "lightblue";
//                     setTimeout(() => {
//                         document.body.style.backgroundColor = "violet";
//                         setTimeout(() => {
//                             document.body.style.backgroundColor = "indigo";
//                         }, 1000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// METHOD-4
// const colorUpdate = (color, time, callBack) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = color;
//         if (callBack) {
//             callBack();
//         }
//     }, time);
// };

// colorUpdate("indigo", 1000, () => {
//     colorUpdate("violet", 1000, () => {
//         colorUpdate("lightblue", 1000, () => {
//             colorUpdate("lime", 1000, () => {
//                 colorUpdate("yellow", 1000, () => {
//                     colorUpdate("orange", 1000, () => {
//                         colorUpdate("red", 1000);
//                     });
//                 });
//             });
//         });
//     });
// });

// METHOD-5 with PROMISES

const updateColor = (color) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, 1000);
    });
};

// updateColor("red")
//     .then(() => updateColor("orange"))
//     .then(() => updateColor("yellow"))
//     .then(() => updateColor("lime"))
//     .then(() => updateColor("lightblue"))
//     .then(() => updateColor("violet"))
//     .then(() => updateColor("indigo"));

// METHOD-6 with async-await

async function colorChange() {
    await updateColor("red");
    await updateColor("orange");
    await updateColor("yellow");
    await updateColor("lime");
    await updateColor("lightblue");
    await updateColor("violet");
    await updateColor("indigo");
    console.log("u");
    return "All done!!!";
}

colorChange().then((done) => console.log(done));
//
//  ||
//  \\
//  ||
//  \\
//  \/
//

async function afterRainbow() {
    await colorChange();
    console.log("DDDoonnee!");
}

afterRainbow();
