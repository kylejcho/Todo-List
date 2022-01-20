import createTask from "./create-task";


const addButton = document.querySelector('#addButton');
const formAddButton = document.querySelector('#taskFormAddButton');
const inputTaskName = document.querySelector('#inputTaskName');
const inputTaskDescription = document.querySelector('#inputTaskDescription');
const formContainer = document.querySelector("#taskFormContainer");
const form = document.querySelector("#taskForm");

const buttonClicked = () => {
    addButton.addEventListener('click', function() {
        formContainer.style.visibility = "visible";
        form.style.visibility = "visible";
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
    formContainer.addEventListener('click', function(e){
        if (e.target.id !== "taskForm" && e.target.id !== "inputTaskName" && e.target.id !== "inputTaskDescription") {
            formContainer.style.visibility = "hidden";
            form.style.visibility = "hidden";
        }
    })
}

export default buttonClicked;
