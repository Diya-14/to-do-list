import inquirer from "inquirer";
let todolist = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todolist",
            type: "input",
            message: "what do you want to add in todolist?"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more?",
            default: "false"
        }
    ]);
    todolist.push(addTask.todolist);
    condition = addTask.addMore;
    console.log(todolist);
}
