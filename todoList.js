const todoList = []

let input = prompt("What would you like to do?");
while  (input !== "quit") {
    if (input === "new") {
        const add = prompt ("Please enter your task");
        todoList.push(add)
        console.log(`${add} added to the list`)
    } else if (input === "list") {
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i}: ${todoList[i]}`)
        }
    } else if (input === "delete") {
        const del = parseInt(prompt("What have you accomplished?"));
        if (!Number.isNaN(del)) {
            const accomplished  = todoList.splice(del,1);
            console.log(`You deleted: ${accomplished[0]}`);
        } else {
            console.log("Please enter a valid number")
        }
    }
    input = prompt("What would you like to do?");
}
console.log("OK Quit the App")
