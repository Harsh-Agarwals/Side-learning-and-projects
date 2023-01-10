const btn = document.querySelector("button");
let list = [];

btn.addEventListener("click", () => {
    let userChoice = prompt("Enter your choice");

    while (userChoice !== "quit") {
        if (userChoice.toLowerCase() === "new") {
            let newTask = prompt("Add a new member to your list:");
            list = list.concat(newTask);
            console.log("New task " + newTask + " added to your To-do List");
            userChoice = prompt("Enter your choice");
        } else if (userChoice.toLowerCase() === "list") {
            console.log("HERE IS YOUR TO-DO LIST\n**************");
            for (let i = 0; i < list.length; i++) {
                console.log(i, list[i]);
            }
            console.log("**************");
            userChoice = prompt("Enter your choice");
        } else if (userChoice.toLowerCase() === "delete") {
            let deleteElement = prompt("Enter the task to be deleted");
            while (!list.includes(deleteElement)) {
                deleteElement = prompt("Enter the task to be deleted");
            }
            list.splice(list.indexOf(deleteElement), 1);
            console.log("Deleted the element");
            userChoice = prompt("Enter your choice");
        } else {
            userChoice = prompt("Enter your choice again");
        }
    }
    console.log("Thanks");
});
