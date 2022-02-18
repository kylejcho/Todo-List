import Task from "./task";
import {createTaskContainer, createSidebarList, createInputListItem} from "./ui";
import { startOfToday,startOfTomorrow } from "date-fns";
import { nextWeek } from "./dates"


export let allTasks = [];
export let allLists = [];

const createTask = (task, description, dueDate, list, status) => {
    let key = generateTaskKey();
    let newTask = new Task(task, description, dueDate, list, status, key);
    allTasks.push(newTask);
    createTaskContainer(task, description, dueDate, status, key);

    if (!allLists.includes(list) && list != undefined) {
        allLists.push(list);
        console.log(allLists)
        createSidebarList(list);
        createInputListItem(list);
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
    createTask("Exercise", "Workout out for 45 minutes", startOfToday(),);
    createTask("Coffee with friend", "Starbucks", startOfToday());
    createTask("Baking class", "Bring homemade pie", startOfToday(),'School');

    createTask("Read Animal Farm", "Read two chapter", startOfTomorrow(),'Reading');
    createTask("Learn sign language", "Practice english alphabet", startOfTomorrow(), 'Personal');

    
    
    createTask("BIO231 homework assignment", "Chapter 12, questions 1-8", nextWeek(startOfToday()), 'School');
    createTask("Exercise", "Workout out for 45 minutes", nextWeek(startOfToday()));
    createTask("Coffee with friend", "Starbucks", nextWeek(startOfToday()));
    createTask("PSYC100 module assignment", "Chapters 1 - 3", nextWeek(startOfToday()), 'School');
    createTask("Bird watching", "Bring sliced breed", nextWeek(startOfToday()), 'Personal');
}


export default createTask;

