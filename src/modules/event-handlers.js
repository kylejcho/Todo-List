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
const sidebar = document.querySelector('#sidebar');
const sidebarShortcuts = document.querySelector('#sidebarShortcuts');
const sidebarLists = document.querySelector('#sidebarLists')
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
            let list;
            inputDueDate.forEach((e) =>{
                if (e.className.includes('selected')) {
                    if (e.id == 'inputToday') {
                        dueDate = startOfToday();
                    } else if (e.id == 'inputTomorrow') {
                        dueDate = startOfTomorrow();
                    }
                }         
            })
            const inputListItem = document.querySelectorAll('.inputListItem')
            inputListItem.forEach((e) =>{
                if (e.className.includes('selected')) {
                    list = e.id.replace('List', '')
                }         
            })

            createTask(inputTaskName.value, inputTaskDescription.value, dueDate, list);
            formCancel();
            updateCounter();
        }
    })
}

const formListClick = () => {
    const inputListItems = document.querySelectorAll('.inputListItem');
    inputListItems.forEach(list =>{
        list.addEventListener('click', ()=> {
            inputListItems.forEach(element =>{
                element.classList.remove('selected');
            })
            list.classList.toggle('selected')
        })
    })

    const inputListContainer = document.querySelector('#inputListContainer')
    inputListContainer.addEventListener('click', ()=> {
        inputListContainer.classList.toggle('selected');
    })
}

const formDueDateClick = () => {
    formContainer.addEventListener('click', (e)=>{
        inputDueDate.forEach(dueDate =>{
            dueDate.addEventListener('click', ()=> {
                inputDueDate.forEach(element => {
                    element.classList.remove('selected');
                })
                dueDate.classList.toggle('selected');
            })
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
const sidebarTabClick = () => {
    sidebar.addEventListener('click', (e)=> {
        if (!e.target.className.includes('sidebarTab') && e.target.id != 'sidebarHome' || e.target.className.includes('viewing')) {
            return
        }
        shortcutToggle(e);
        clearContent();
        setTimeout(() => {
            if (e.target.id == 'sidebarHome') {
                createTasksContainer('home');
            } else if (e.target.id == 'sidebarShortcutsToday') {
                createTasksContainer('today');
            } else if (e.target.id == 'sidebarShortcutsWeek') {
                createTasksContainer('week');
            } else if (e.target.id == 'sidebarShortcutsAllTasks') {
                createTasksContainer('allTasks');
            } else {
                createTasksContainer(e.target.children[1].innerText);
            }
        }, 350);
    })
}

const shortcutToggle = (e) => {
    const shortcuts = document.querySelectorAll('.sidebarShortcut');
    const sidebarHome = document.querySelector('#sidebarHome');
    const sidebarListContainers = document.querySelectorAll('.sidebarListContainer')
    sidebarHome.classList.remove('viewing');
    for (let i = 0; i < shortcuts.length; i++) {
        shortcuts[i].classList.remove('viewing');
        shortcuts[i].children[0].classList.remove('viewing')
    }
    for (let i = 0; i < sidebarListContainers.length; i++) {
        sidebarListContainers[i].classList.remove('viewing');
        sidebarListContainers[i].children[0].classList.remove('viewing')
    }

    e.target.classList.toggle('viewing');
    e.target.children[0].classList.toggle('viewing');
}


const sidebarArrowClick = () => {
    sidebar.addEventListener('click', (e)=> {
        if (e.target.className.includes('sidebarArrow')) {
            const arrow = e.target
            if (arrow.className.includes('close')) {
                arrow.parentNode.nextElementSibling.style.marginBottom = '0';
            } else {
                if (e.target.id == 'shortcutsArrow') {
                    arrow.parentNode.nextElementSibling.style.marginBottom = `${-sidebarShortcuts.clientHeight}px`;
                } else {
                    arrow.parentNode.nextElementSibling.style.marginBottom = `${-sidebarLists.clientHeight}px`;
                }
             }
            arrow.parentNode.nextElementSibling.classList.toggle('close');
            arrow.classList.toggle('close');
        }
    })
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
                        task.status = "completed";
                    } else {
                        task.status = "";
                    }
                }
            })
            checkTaskAnimation(e,'');
            console.log(allTasks)
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
                        task.status = "completed";
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
    formListClick();
    formCancelClick();
    sidebarTabClick();
    sidebarArrowClick();
    clickTask();
    deselectTask();
    deleteClick();
}

export default runEventHandlers;
