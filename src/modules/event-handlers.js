import createTask from "./create-task";
import { createTaskView } from "./ui";
import { allTasks } from "./create-task";
import checkTaskAnimation from "./animations/checkTaskAnimation";

const addButton = document.querySelector('#addButton');
const formAddButton = document.querySelector('#taskFormAddButton');
const inputTaskName = document.querySelector('#inputTaskName');
const inputTaskDescription = document.querySelector('#inputTaskDescription');
const inputDueDate = document.querySelectorAll('.inputDueDate');
const formContainer = document.querySelector("#taskFormContainer");
const form = document.querySelector("#taskForm");
const taskContainer = document.querySelector(".taskContainer");
const contentContainer = document.querySelector("#contentContainer")

const buttonClicked = () => {
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

const dueDateClick = () => {
    inputDueDate.forEach(dueDate =>{
        dueDate.addEventListener('click', (e)=> {
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

const selectTask = () => {
    contentContainer.addEventListener('click', (e)=> {
        const target = e.target;
        if (target.className == "taskContainer" || target.className == "taskContainer completed") {
            taskSelection(target);
        }
    })
}

const deselectTask = () => {
    contentContainer.addEventListener('click', (e)=> {
        if (e.target == document.querySelector('#contentContainer')) {
            removeTaskView();
        }
    })
}

const removeTaskView = () => {
    const taskViewContainer = document.querySelector('.taskViewContainer'); 
    if (taskViewContainer) {   
        const tasksContainer = document.querySelector('.tasksContainer');
        taskViewContainer.style.transition = "none"
        const positionA = taskViewContainer.getBoundingClientRect();
        taskViewContainer.style.position = "absolute";
        const positionB = taskViewContainer.getBoundingClientRect();
        const deltaX = positionA.left - positionB.left;

        taskViewContainer.style.transform = "translateX("+ deltaX +"px)"

        tasksContainer.style.transition = "none";
        tasksContainer.style.margin = "38px auto auto auto";
        tasksContainer.style.transform = "translateX(-30%)";
        setTimeout(()=> {
            taskViewContainer.style.transition = "all 0.4s cubic-bezier(0.5, 0, 0, 1)";
            taskViewContainer.style.transform = "translateX(calc("+deltaX +"px + 15vw))";
            taskViewContainer.style.opacity = '0';
            tasksContainer.style.transition = "all 0.25s cubic-bezier(0.5, 0, 0.5, 1)";
            tasksContainer.style.transform = "translateX(0)"; 
        },10)
        setTimeout(()=> {
            taskViewContainer.remove();
        },200)
    } else {
        return
    }
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
            setTimeout(()=> {
                taskView.remove();
            },200)  
        }
    } else {
        document.querySelector('.tasksContainer').style.transform = "translateX(-30%)";
    }
    createTaskView(selectedTask, taskContainer);  
    
}


const checkClick = () => {
    document.addEventListener('click', (e)=> {
        if (e.target.parentNode.className == 'checkContainer'|| e.target.parentNode.className == 'checkContainer completed') {
            checkTaskAnimation(e);
        }
    })
}

const deleteClick = () => {
    document.querySelector('#contentContainer').addEventListener('click', (e)=> {
        if (e.target.parentNode.className == 'deleteContainer' || e.target.parentNode.className == 'deleteContainer completed') {
            const taskContainer = e.target.parentNode.parentNode;

            const taskContainerHeight = taskContainer.clientHeight;
            taskContainer.style.opacity = "0";
            taskContainer.transform = "translateY(-100%)";
            taskContainer.style.marginBottom = "-" + taskContainerHeight + "px";
            
            setTimeout(()=> {
                taskContainer.remove();
            },200)
            
        }
    })
}


const runEventHandlers = () => {
    checkClick();
    formAddButtonClicked();
    dueDateClick();
    formCancelClick();
    selectTask();
    deselectTask();
    deleteClick()
    buttonClicked()
}

export default runEventHandlers;
