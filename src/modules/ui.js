import { addTask, slideInTaskView } from "./animations";
import { allTasks,} from "./create-task";


const initialPageLoad = () => {
    loadingPage()
    createTasksContainer();
}

const loadingPage = () => {
    const loadingScreen = document.querySelector("#loadingScreen");
    window.addEventListener('load', () => {
        const body = document.querySelector('body')
        body.style.overflowY= "hidden";
        setTimeout(()=> {
            loadingScreen.style.opacity = "0";
        }, 500)
        setTimeout(()=> {
            loadingScreen.remove();
            body.style.overflowY= "visible";
        }, 1000)
    });
}


export const clearContent = () => {
    document.querySelector('.tasksContainer').style.transition = 'all 0.3s cubic-bezier(0.5, 0, 0.5, 1)';
    document.querySelector('.tasksContainer').style.opacity = 0;
    if (document.querySelector('.taskViewContainer')) {
        document.querySelector('.taskViewContainer').style.opacity = 0;
    }
    setTimeout(() => {
        if (document.querySelector('.tasksContainer')) {
            document.querySelector('.tasksContainer').remove();
            if (document.querySelector('.taskViewContainer')) {
                document.querySelector('.taskViewContainer').remove();
            }
        }
    }, 300);
    
}

//ALL TASKS CONTENT
export const createTasksContainer = (type) => {
    const tasksContainer = document.createElement('div');
    tasksContainer.id = "allTasksContainer";
    tasksContainer.className = "tasksContainer";
    

    const tasksContainerTitle = document.createElement('div');
    tasksContainerTitle.id = 'titleContainer';
    tasksContainerTitle.className = "tasksTitle";
    tasksContainer.append(tasksContainerTitle);

    if (type == 'today') {
        tasksContainerTitle.innerText = "Today";
        createSubGroups('today', tasksContainer);
        allTasks.forEach((task)=> {
            if (task.dueDate == 'today') {
                setTimeout(() => {
                    createTaskContainer(task.name, task.description, task.dueDate, task.key, 'no shadow');
                }, 10);
            }
        })
    } else if (type == 'week') {
        tasksContainerTitle.innerText = "This Week";
        createSubGroups("today", tasksContainer);
        createSubGroups("tomorrow", tasksContainer);
        allTasks.forEach((task)=> {
            if (task.dueDate == 'today' || task.dueDate == 'tomorrow') {
                setTimeout(() => {
                    createTaskContainer(task.name, task.description, task.dueDate, task.key, 'no shadow');
                }, 10);
            }
        })
    } else {
        tasksContainerTitle.innerText = "All Tasks";
        createSubGroups("today", tasksContainer);
        createSubGroups("tomorrow", tasksContainer);
        createSubGroups("upcoming", tasksContainer);
        allTasks.forEach((task)=> {
            setTimeout(() => {
                createTaskContainer(task.name, task.description, task.dueDate, task.key, 'no shadow');
            }, 10);
        })
    }

    const contentContainer = document.querySelector('#contentContainer');
    contentContainer.append(tasksContainer);
    
    tasksContainer.style.pointerEvents = "none";
    setTimeout(() => {  
        tasksContainer.style.pointerEvents = "unset";
    }, 500);
}

const createSubGroups = (group, tasksContainer) => {
    const capitalize = (str) => {
        return str[0].toUpperCase() + str.slice(1)
    }

    const subGroup = document.createElement('div');
    subGroup.className = "subGroup";
    subGroup.id = group;

    const subGroupTitle = document.createElement('p');
    subGroupTitle.className = "subGroupTitle";
    subGroupTitle.innerText = capitalize(group);

    subGroup.append(subGroupTitle);
    tasksContainer.append(subGroup);
}   


export const createTaskContainer = (task, description, dueDate, key, shadow) => {
    const taskContainer = document.createElement('div');
    taskContainer.className = 'taskContainer';
    taskContainer.id = key;

    const checkContainer = document.createElement('div');
    checkContainer.className = 'checkContainer';
    checkContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><title>ionicons-v5-q</title><circle cx="256" cy="256" r="192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/></svg>'

    const nameContainer = document.createElement('div')
    nameContainer.className ='nameContainer';
    nameContainer.innerText = task;

    const deleteContainer = document.createElement('div');
    deleteContainer.className = 'deleteContainer';
    deleteContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><title>ionicons-v5-m</title><path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm75.31,260.69a16,16,0,1,1-22.62,22.62L256,278.63l-52.69,52.68a16,16,0,0,1-22.62-22.62L233.37,256l-52.68-52.69a16,16,0,0,1,22.62-22.62L256,233.37l52.69-52.68a16,16,0,0,1,22.62,22.62L278.63,256Z"/></svg>';

    const descriptionContainer = document.createElement('div');
    descriptionContainer.className = 'descriptionContainer';
    descriptionContainer.innerText = description;

    taskContainer.append(checkContainer);
    taskContainer.append(nameContainer);
    taskContainer.append(deleteContainer);
    taskContainer.append(descriptionContainer);
    
    
    let subGroup;

    if (dueDate == 'today') {
        subGroup = document.querySelector('#today');
    } else if (dueDate == 'tomorrow') {
        subGroup = document.querySelector('#tomorrow');
    }


    subGroup.insertBefore(taskContainer, subGroup.children[1]);

    addTask(taskContainer, shadow);
}

export const createTaskView = (task, taskContainer) => {
    const taskViewContainer = document.createElement('div');
    taskViewContainer.className = 'taskViewContainer';
    taskViewContainer.id = "s" + task.key;

    const taskViewNameContainer = document.createElement('div');
    taskViewNameContainer.className = "taskViewNameContainer";
    taskViewContainer.append(taskViewNameContainer);

    const checkContainer = document.createElement('div');
    checkContainer.className = 'taskViewCheckContainer';
    checkContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><title>ionicons-v5-q</title><circle cx="256" cy="256" r="192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/></svg>';
    taskViewNameContainer.append(checkContainer)

    const taskViewName = document.createElement('p');
    taskViewName.className = "taskViewName";
    taskViewName.innerText = task.name
    taskViewNameContainer.append(taskViewName);

    const taskViewDescriptionContainer = document.createElement('div');
    taskViewDescriptionContainer.className = "taskViewDescriptionContainer";
    taskViewDescriptionContainer.innerText = "Description:";
    taskViewContainer.append(taskViewDescriptionContainer);

    const taskViewDescription = document.createElement('p');
    taskViewDescription.className = "taskViewDescription";
    taskViewDescription.innerText = task.description;
    taskViewDescriptionContainer.append(taskViewDescription)

    const tasksContainer = document.querySelector('.tasksContainer');
    tasksContainer.style.transition = "all 0.25s cubic-bezier(0.5, 0, 0.5, 1)";

    if (taskContainer.className.includes('completed')) {
        checkContainer.style.animation = "checkClick 0.3s ease-out";
        checkContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><title>ionicons-v5-e</title><path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM364.25,186.29l-134.4,160a16,16,0,0,1-12,5.71h-.27a16,16,0,0,1-11.89-5.3l-57.6-64a16,16,0,1,1,23.78-21.4l45.29,50.32L339.75,165.71a16,16,0,0,1,24.5,20.58Z"/></svg>';
        taskViewName.classList.toggle('completed');
        checkContainer.classList.toggle('completed');
    }                 

    slideInTaskView(tasksContainer, taskViewContainer);
}



export default initialPageLoad;