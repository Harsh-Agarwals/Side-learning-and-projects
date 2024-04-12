const form = document.querySelector("#alarm_form");
const h2 = document.querySelector("#alarm_msg");
const userName = document.querySelector("#user_name");
const delay = document.querySelector("#wait_for");

const alarmNotify = async (username, delay) => {
    return new Promise((resolve, reject) => {
        if (delay < 0) {
            throw new Error("Age must be less than 0");
        }
        setTimeout(() => {
            resolve(`Hello ${username}, its time to wake up!`);
        }, delay);
    });
};

// form.addEventListener("submit", (event) => {
//     h2.textContent = "";
//     event.preventDefault();
//     const otp = alarmNotify(userName.value, delay.value);
//     console.log(otp);
//     otp.then((data) => (h2.textContent = data)).catch(
//         (err) => (h2.textContent = `Error: ${err}`)
//     );
//     userName.value = "";
//     delay.value = "";
// });

// with try...catch
form.addEventListener("submit", async (event) => {
    try {
        h2.textContent = "";
        event.preventDefault();
        const otp = await alarmNotify(userName.value, delay.value);
        console.log(otp);
        h2.textContent = otp;
        userName.value = "";
        delay.value = "";
    } catch (e) {
        h2.textContent = `Error: ${e}`;
    }
});
