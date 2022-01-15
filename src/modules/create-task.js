import Task from "./task";
import {createTaskContainer} from "./ui";

let allTasks = [];


const createTask = (task, description, dueDate, list) => {
    let newTask = new Task(task, description, dueDate, list);
    allTasks.push(newTask);
    createTaskContainer(task, description, dueDate);
    //add task to general task lists array 
    //get ui to check date, and list
    //Determine where to display that task (today, tomorrow, this week, list)
    //run UI.js function to add task elements to the display.
}


export default createTask;
