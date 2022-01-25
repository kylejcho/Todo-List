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
        form.style.opacity = "100";
        form.style.transform = "scale(1)";
    })
}

export const formAddButtonClicked = () => {
    formAddButton.addEventListener('click', function() {
        if (inputTaskName.value) {
            createTask(inputTaskName.value, inputTaskDescription.value, "today");
            form.style.opacity = "0";
            formContainer.style.visibility = "hidden";
            inputTaskName.value = '';
            inputTaskDescription.value
        }
    })
}

export const formCancel = () => {
    formContainer.addEventListener('click', (e)=>{
        if (e.target.id == 'taskFormContainer') {
            form.style.opacity = "0";
            formContainer.style.visibility = "hidden";
            form.style.transform = "scale(0)";
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
            const checkedTask = e.target.parentNode.parentNode;
            checkedTask.classList.add('completed');
            
            const taskName = e.target.parentNode.nextElementSibling;
            taskName.style.backgroundSize = "100% 100%";


            const checkContainer = e.target.parentNode;
            checkContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><title>ionicons-v5-e</title><path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM364.25,186.29l-134.4,160a16,16,0,0,1-12,5.71h-.27a16,16,0,0,1-11.89-5.3l-57.6-64a16,16,0,1,1,23.78-21.4l45.29,50.32L339.75,165.71a16,16,0,0,1,24.5,20.58Z"/></svg>'
            checkContainer.style.filter = "brightness(0) saturate(100%) invert(74%) sepia(13%) saturate(227%) hue-rotate(177deg) brightness(103%) contrast(97%)";
        }
    })
}





export default buttonClicked;
