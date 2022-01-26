import Task from "./task";
import {createTaskContainer} from "./ui";

let allTasks = [];


const createTask = (task, description, dueDate, list) => {
    let newTask = new Task(task, description, dueDate, list);
    allTasks.push(newTask);
    createTaskContainer(task, description, dueDate);
    console.log(allTasks)
    //add task to general task lists array 
    //get ui to check date, and list
    //Determine where to display that task (today, tomorrow, this week, list)
    //run UI.js function to add task elements to the display.
}


export const exampleTasks = () => {
    createTask("Exercise", "Workout out for 45 minutes", "today", '');
    createTask("Coffee with friend", "Starbucks", "today", '');
    createTask("Cooking class", "Bring homemade pie", "today", '');

    createTask("Read", "Read two chapter", "tomorrow", '');
    createTask("Learn sign language", "Practice english alphabet", "tomorrow", '');
    
}


export default createTask;

