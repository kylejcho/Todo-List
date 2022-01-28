import Task from "./task";
import {createTaskContainer} from "./ui";

let allTasks = [];


const createTask = (task, description, dueDate, list) => {
    let key = 0
    if (allTasks.length > 0) {
        key = 0;
        for (let i = 0; i < allTasks.length; i++) {
            if (allTasks[i].key == key) {
                key++
            } else {
                console.log(key);
            }
        }
    }
    let newTask = new Task(task, description, dueDate, list, key);
    newTask.key = key
    allTasks.push(newTask)
    //console.log(allTasks)
    createTaskContainer(task, description, dueDate, key);
    
}



export const exampleTasks = () => {
    createTask("Exercise", "Workout out for 45 minutes", "today", '');
    createTask("Coffee with friend", "Starbucks", "today", '');
    createTask("Cooking class", "Bring homemade pie", "today", '');
    createTask("Read", "Read two chapter", "tomorrow", '');
    createTask("Learn sign language", "Practice english alphabet", "tomorrow", '');

    console.log(allTasks)
}


export default createTask;

