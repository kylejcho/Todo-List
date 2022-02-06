import createTask from "./create-task";
import { createTaskView, createTasksContainer, clearContent} from "./ui";
import { allTasks } from "./create-task";
import checkTaskAnimation from "./animations";
import { deleteTask, removeTaskView } from "./animations";

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
                    dueDate = e.id.replace('input', '').toLowerCase();
                }         
            })
            createTask(inputTaskName.value, inputTaskDescription.value, dueDate);
            formCancel();
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
const shortCutsClick = () => {
    const shortcutsContainer = document.querySelector('#sideBarShortcuts');
    shortcutsContainer.addEventListener('click', (e)=> {
        clearContent();
        setTimeout(() => {
            if (e.target.id == 'sideBarShortcutsToday') {
                createTasksContainer('today');
            } else if (e.target.id == 'sideBarShortcutsWeek') {
                createTasksContainer('week')
            } else {
                createTasksContainer();
            }
        }, 350);
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
        if (e.target.parentNode.className == 'checkContainer'|| e.target.parentNode.className == 'checkContainer completed') {
            checkTaskAnimation(e,'');
        } else if (e.target.parentNode.className == "taskViewCheckContainer" || e.target.parentNode.className == "taskViewCheckContainer completed") {
            const taskViewContainer = e.target.parentNode.parentNode.parentNode;
            const key = taskViewContainer.id[1].toString();

            let taskContainer;
            const tasks = document.querySelectorAll('.taskContainer');
            tasks.forEach(task => {
                if (task.id == key) {
                    taskContainer = task;
                }
            })
            console.log(taskContainer)

            const a = taskContainer.children[0];
            checkTaskAnimation('',a);
        }
    })
}

const deleteClick = () => {
    contentContainer.addEventListener('click', (e)=> {
        if (e.target.parentNode.className == 'deleteContainer' || e.target.parentNode.className == 'deleteContainer completed') {
            deleteTask(e.target.parentNode.parentNode);
        }
    })
}


const runEventHandlers = () => {
    formButtonClicked()
    checkClick();
    formAddButtonClicked();
    formDueDateClick();
    formCancelClick();
    shortCutsClick();
    clickTask();
    deselectTask();
    deleteClick();
}

export default runEventHandlers;
