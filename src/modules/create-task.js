import Task from "./task";
import {createTaskContainer, createSidebarList, createInputListItem, createTaskView} from "./ui";
import { startOfToday,startOfTomorrow, parseJSON} from "date-fns";
import { nextWeek } from "./dates"

export let allTasks = [];
export let allLists = [];


export const getLocalData = () => {
    if (localStorage.getItem('allTasks') == null) {
        localStorage.setItem('allTasks', '[]');
    }
    allTasks = JSON.parse(localStorage.getItem('allTasks'));
    allTasks.forEach(task=>{
        task.dueDate = parseJSON(task.dueDate)
    })
    loadLocalData();
}

export const loadLocalData = () => {
    console.log(allTasks)
    if (allTasks.length > 0) {
        allTasks.forEach(task=>{
            createTaskContainer(task.name, task.description, parseJSON(task.dueDate), task.list, task.status, task.key);
        })
    } else {
        exampleTasks()
    }
    LoadLists();
}

export const updateLocalData = (data) => {
    localStorage.setItem('allTasks', JSON.stringify(data))
}




export const createTask = (task, description, dueDate, list, status) => {
    let key = generateTaskKey();
    let newTask = new Task(task, description, dueDate, list, status, key);
    allTasks.push(newTask);
    updateLocalData(allTasks)
    
    checkListExists(list)

    const tasksContainer = document.querySelector('.tasksContainer')
    if (list != undefined && tasksContainer.id.includes('ListContainer') && tasksContainer.id != list + 'ListContainer') {
        return
    } else if (list == undefined && tasksContainer.id.includes('ListContainer')) {
        return
    }

    createTaskContainer(task, description, dueDate, list, status, key);
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
    return key;
}


const LoadLists = () => {
    allTasks.forEach(task => {
        if (!allLists.includes(task.list) && task.list != undefined) {
            allLists.push(task.list)
            createSidebarList(task.list);
            createInputListItem(task.list);
        }
    })
}

const checkListExists = (item) => {
    if (!allLists.includes(item) && item != undefined) {
        allLists.push(item)
        createSidebarList(item);
        createInputListItem(item);
    }
}





export const exampleTasks = () => {
    createTask("Dinner at Olive Garden", "Pick up sister on the way", startOfToday());
    createTask("PHYS231 homework assignment", "Chapter 14, questions 1-13", startOfToday(),'School');
    createTask("Exercise", "Workout out for 45 minutes", startOfToday(),);
    //createTask("Coffee with friend", "Starbucks", startOfToday());
    createTask("Baking class", "Bring homemade pie", startOfToday(),'School');

    createTask("Read Animal Farm", "Read two chapter", startOfTomorrow(),'Reading');
    createTask("Learn sign language", "Practice english alphabet", startOfTomorrow(), 'Personal');

    //createTask("BIO231 homework assignment", "Chapter 12, questions 1-8", nextWeek(startOfToday()), 'School');
    //createTask("Exercise", "Workout out for 45 minutes", nextWeek(startOfToday()));
    createTask("Coffee with friend", "Starbucks", nextWeek(startOfToday()));
    //createTask("PSYC100 module assignment", "Chapters 1 - 3", nextWeek(startOfToday()), 'School');
    createTask("Bird watching", "Bring sliced breed", nextWeek(startOfToday()), 'Personal');
}
