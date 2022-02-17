import Task from "./task";
import {createTaskContainer, createSidebarList} from "./ui";
import { startOfToday,startOfTomorrow } from "date-fns";
import { nextWeek } from "./dates"


export let allTasks = [];
export let allLists = [];

const createTask = (task, description, dueDate, list, status) => {
    let key = generateTaskKey();
    let newTask = new Task(task, description, dueDate, list, status, key);
    allTasks.push(newTask);
    createTaskContainer(task, description, dueDate, status, key);

    if (!allLists.includes(list)) {
        allLists.push(list);
        createSidebarList(list);
    } 

    console.log(allTasks);
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
    createTask("Dinner at Olive Garden", "Pick up sister on the way", startOfToday());
    createTask("PHYS231 homework assignment", "Chapter 14, questions 1-13", startOfToday(),'School');
    createTask("Exercise", "Workout out for 45 minutes", startOfToday());
    createTask("Coffee with friend", "Starbucks", startOfToday());
    createTask("Baking class", "Bring homemade pie", startOfToday(),'School');

    createTask("Read Animal Farm", "Read two chapter", startOfTomorrow());
    createTask("Learn sign language", "Practice english alphabet", startOfTomorrow());

    
    
    createTask("PHYS231 homework assignment", "Chapter 14, questions 1-13", nextWeek(startOfToday()));
    createTask("Exercise", "Workout out for 45 minutes", nextWeek(startOfToday()));
    createTask("Coffee with friend", "Starbucks", nextWeek(startOfToday()));
    createTask("Baking class", "Bring homemade pie", nextWeek(startOfToday()));
    createTask("Dinner at Olive Garden", "Pick up sister on the way", nextWeek(startOfToday()));
    createTask("Make boiled denim", "Magnets and ghouls", nextWeek(startOfToday()));
}


export default createTask;

