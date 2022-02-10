import createTask from "./create-task";
import { createTaskView, createTasksContainer, clearContent, updateCounter} from "./ui";
import { allTasks } from "./create-task";
import checkTaskAnimation from "./animations";
import { deleteTask, removeTaskView } from "./animations";
import { isToday, startOfToday,startOfTomorrow } from "date-fns";

const addButton = document.querySelector('#addButton');
const formAddButton = document.querySelector('#taskFormAddButton');
const inputTaskName = document.querySelector('#inputTaskName');
const inputTaskDescription = document.querySelector('#inputTaskDescription');
const inputDueDate = document.querySelectorAll('.inputDueDate');
const formContainer = document.querySelector("#taskFormContainer");
const form = document.querySelector("#taskForm");
const contentContainer = document.querySelector("#contentContainer")


//FORM
const formButtonClicked = () => {
    addButton.addEventListener('click', function() {
        formContainer.style.visibility = "visible";
        form.style.opacity = "1";
        form.style.transform = "scale(1)";
    })
}

const formAddButtonClicked = () => {
    formAddButton.addEventListener('click', function() {
        if (inputTaskName.value) {
            let dueDate;
            inputDueDate.forEach((e) =>{
                if (e.className.includes('selected')) {
                    if (e.id == 'inputToday') {
                        dueDate = startOfToday();
                    } else if (e.id == 'inputTomorrow') {
                        dueDate = startOfTomorrow();
                    }
                }         
            })
            createTask(inputTaskName.value, inputTaskDescription.value, dueDate);
            formCancel();
            updateCounter();
        }
    })
}

const formDueDateClick = () => {
    inputDueDate.forEach(dueDate =>{
        dueDate.addEventListener('click', ()=> {
            inputDueDate.forEach(element => {
                element.classList.remove('selected');
            })
            dueDate.classList.toggle('selected');
        })
    })
}

const formCancelClick = () => {
    formContainer.addEventListener('click', (e)=>{
        if (e.target.id == 'taskFormContainer') {
            formCancel();
        }
    })
}

const formCancel = () => {
    form.style.opacity = "0";
    formContainer.style.visibility = "hidden";
    form.style.transform = "scale(0)";
    inputTaskName.value = '';
    inputTaskDescription.value = '';
    inputDueDate.forEach(element => {
        element.classList.remove('selected')
    })
    inputDueDate[0].classList.toggle('selected');
}


//Sidebar
const homeClick = () => {
    const sideBarHome = document.querySelector('#sideBarHome');
    sideBarHome.addEventListener('click', (e) => {
        const shortcuts = document.querySelectorAll('.sideBarShortcut');
        sideBarHome.classList.remove('viewing');
        for (let i = 0; i < shortcuts.length; i++) {
            shortcuts[i].classList.remove('viewing');
            shortcuts[i].children[0].classList.remove('viewing')
        }
        clearContent();
        sideBarHome.classList.add('viewing');
        setTimeout(() => {
            createTasksContainer('home');
        }, 350);
    })
}

const shortCutsClick = () => {
    const shortcutsContainer = document.querySelector('#sideBarShortcuts');
    shortcutsContainer.addEventListener('click', (e)=> {
        if (e.target.className != 'sideBarShortcut') {
            return
        }
        shortcutToggle(e);
        clearContent();
        setTimeout(() => {
            if (e.target.id == 'sideBarShortcutsToday') {
                createTasksContainer('today');
            } else if (e.target.id == 'sideBarShortcutsWeek') {
                createTasksContainer('week');
            } else {
                createTasksContainer();
            }
        }, 350);
    })
}

const shortcutToggle = (e) => {
    const shortcuts = document.querySelectorAll('.sideBarShortcut');
    const sideBarHome = document.querySelector('#sideBarHome');
    sideBarHome.classList.remove('viewing');
    for (let i = 0; i < shortcuts.length; i++) {
        shortcuts[i].classList.remove('viewing');
        shortcuts[i].children[0].classList.remove('viewing')
    }
    e.target.classList.toggle('viewing');
    e.target.children[0].classList.toggle('viewing');
}


//Tasks
const clickTask = () => {
    contentContainer.addEventListener('click', (e)=> {
        const target = e.target;
        if (target.className == "taskContainer" || target.className == "taskContainer completed") {
            taskSelection(target);
        } 
    })
}

const taskSelection = (taskContainer) => {
    const selectedTask = allTasks.find((task)=> {
        if (task.key == taskContainer.id) {
            return true
        }
    })

    const taskView = document.querySelector('.taskViewContainer')

    if (taskView) {
        if (taskView.id == "s" + selectedTask.key) {
            removeTaskView();
            return;
        } else {
            taskView.style.opacity = '0';
            setTimeout(()=> {taskView.remove()},200)  
        }
    } else {
        document.querySelector('.tasksContainer').style.transform = "translateX(-30%)";
    }
    createTaskView(selectedTask, taskContainer);  
}

const deselectTask = () => {
    contentContainer.addEventListener('click', (e)=> {
        if (e.target == document.querySelector('#contentContainer')) {
            removeTaskView();
        }
    })
}




const checkClick = () => {
    document.addEventListener('click', (e)=> {
        if (e.target.parentNode.className.includes('checkContainer')) {
            const taskContainer = e.target.parentNode.parentNode;
            allTasks.forEach(task => {
                if (task.key == taskContainer.id) {
                    if (e.target.parentNode.className == 'checkContainer') {
                        task.status = "complete";
                    } else {
                        task.status = "";
                    }
                }
            })
            checkTaskAnimation(e,'');
        }

        else if (e.target.parentNode.className.includes("taskViewCheckContainer")) {
            const taskViewContainer = e.target.parentNode.parentNode.parentNode;
            const key = taskViewContainer.id[1].toString();

            let taskContainer;
            const tasks = document.querySelectorAll('.taskContainer');
            tasks.forEach(task => {
                if (task.id == key) {
                    taskContainer = task;
                }
            })

            allTasks.forEach(task => {
                if (task.key == taskContainer.id) {
                    if (e.target.parentNode.className == "taskViewCheckContainer") {
                        task.status = "complete";
                    } else {
                        task.status = "";
                    }
                }
            })
            checkTaskAnimation('', taskContainer.children[0]);
        } 
    })
}

const deleteClick = () => {
    contentContainer.addEventListener('click', (e)=> {
        if (e.target.parentNode.className == 'deleteContainer' || e.target.parentNode.className == 'deleteContainer completed') {
            const taskContainer = e.target.parentNode.parentNode;
            deleteTask(taskContainer);
            allTasks.forEach(task=> {
                if (taskContainer.id == task.key) {
                    allTasks.splice(allTasks.indexOf(task), 1)
                }
            })
            updateCounter();
        }
    })
}

const runEventHandlers = () => {
    formButtonClicked()
    checkClick();
    formAddButtonClicked();
    formDueDateClick();
    formCancelClick();
    homeClick();
    shortCutsClick();
    clickTask();
    deselectTask();
    deleteClick();

}

export default runEventHandlers;
