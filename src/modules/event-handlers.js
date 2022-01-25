import createTask from "./create-task";
import { taskSelection } from "./ui";

const addButton = document.querySelector('#addButton');
const formAddButton = document.querySelector('#taskFormAddButton');
const inputTaskName = document.querySelector('#inputTaskName');
const inputTaskDescription = document.querySelector('#inputTaskDescription');
const formContainer = document.querySelector("#taskFormContainer");
const form = document.querySelector("#taskForm");
const taskContainer = document.querySelector(".taskContainer");

const buttonClicked = () => {
    addButton.addEventListener('click', function() {
        formContainer.style.visibility = "visible";
        formContainer.style.opacity = "100";
        form.style.opacity = "100";
    })
}

export const formAddButtonClicked = () => {
    formAddButton.addEventListener('click', function() {
        if (inputTaskName.value) {
            createTask(inputTaskName.value, inputTaskDescription.value, "today")
        }
    })
}

export const formCancel = () => {
    formContainer.addEventListener('click', (e)=>{
        if (e.target.id !== "taskForm" && e.target.id !== "inputTaskName" && e.target.id !== "inputTaskDescription" && e.target.id !== "inputDueDateContainer") {
            formContainer.style.opacity = "0";
            formContainer.style.visibility = "hidden";
            
        }
    })
}


export const selectTask = () => {
    document.addEventListener('click', (e)=> {
        const click = e.target;
        if (click.className == "taskContainer" || click.className == "nameContainer" || click.className == "descriptionContainer") {
            taskSelection();
        }
    })
}


export const checkClick = () => {
    document.addEventListener('click', (e)=> {
        if (e.target.parentNode.className == 'checkContainer') {

            const checkedTask = e.target.parentNode.nextElementSibling;
            alert(checkedTask.className)
        }
    })
}



export default buttonClicked;
