// const sayHello = async (name) => {
//     throw "Oh no, problem";
//     return "Hello " + name;
// };

// sayHello("Harsh")
//     .then((data) => {
//         console.log("Resolved: => " + data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// example-2 => login system

const login = async (userName, password) => {
    if (userName.toLowerCase() === password.toLowerCase()) {
        throw new Error("Wrong password");
    }
    return `Validate password for ${userName}: ${password}`;
};

login("Harsh", "Harsh")
    .then((data) => {
        console.log("Validated the password");
        console.log(data);
    })
    .catch((err) => {
        console.error(err);
    });
