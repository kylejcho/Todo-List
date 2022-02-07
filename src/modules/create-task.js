import Task from "./task";
import {createTaskContainer} from "./ui";
import { startOfToday,startOfTomorrow } from "date-fns";
import { formatDate, nextWeek } from "./dates"


export let allTasks = [];

const createTask = (task, description, dueDate, list) => {
    let key = generateTaskKey();
    let newTask = new Task(task, description, dueDate, list, key);
    allTasks.push(newTask);
    createTaskContainer(task, description, dueDate, key);
    console.log(allTasks)
}

const generateTaskKey = () => {
    let key = 0
    if (allTasks.length > 0) {
        for (let i = 0; i < allTasks.length; i++) {
            if (allTasks[i].key == key) {
                key++;
            }
        }
    }
    return key
}


export const exampleTasks = () => {
    createTask("Dinner at Olive Garden", "Pick up sister on the way", startOfToday(), '');
    createTask("PHYS231 homework assignment", "Chapter 14, questions 1-13", startOfToday(), '');
    createTask("Exercise", "Workout out for 45 minutes", startOfToday(), '');
    createTask("Coffee with friend", "Starbucks", startOfToday(), '');
    createTask("Baking class", "Bring homemade pie", startOfToday(), '');

    createTask("Read Animal Farm", "Read two chapter", startOfTomorrow(), '');
    createTask("Learn sign language", "Practice english alphabet", startOfTomorrow(), '');

    createTask("Make boiled denim", "Magnets and ghouls", nextWeek(startOfToday()), '');
}


export default createTask;

