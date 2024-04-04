#! /use/bin/env node
import inquirer from "inquirer";
// Define an empty array to store the to-do list tasks
let todolist = [];
// Function to display the to-do list
function displayToDoList() {
    console.log("Your To-Do List:");
    todolist.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
}
// Function to add a task to the to-do list
async function addTask() {
    let addTaskResponse = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter the task you want to add to the to-do list:",
            validate: function (value) {
                if (value.trim().length > 0) {
                    return true;
                }
                return "Please enter a task.";
            }
        }
    ]);
    todolist.push(addTaskResponse.task);
    console.log("Task added successfully!");
}
// Function to delete a task from the to-do list
async function deleteTask() {
    let deleteTaskResponse = await inquirer.prompt([
        {
            name: "taskIndex",
            type: "input",
            message: "Enter the index of the task you want to delete:",
            validate: function (value) {
                let parsedValue = parseInt(value);
                if (!isNaN(parsedValue) && parsedValue > 0 && parsedValue <= todolist.length) {
                    return true;
                }
                return "Please enter a valid task index.";
            }
        }
    ]);
    let taskIndex = parseInt(deleteTaskResponse.taskIndex) - 1;
    todolist.splice(taskIndex, 1);
    console.log("Task deleted successfully!");
}
// Main function to manage the to-do list
async function main() {
    let condition = true;
    while (condition) {
        let userChoice = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "What would you like to do?",
                choices: ["Add a task", "Delete a task", "Display the to-do list", "Exit"]
            }
        ]);
        switch (userChoice.choice) {
            case "Add a task":
                await addTask();
                break;
            case "Delete a task":
                await deleteTask();
                break;
            case "Display the to-do list":
                displayToDoList();
                break;
            case "Exit":
                condition = false;
                break;
        }
    }
    console.log("Thank you for using the to-do list manager!");
}
// Call the main function to start the program
main();
