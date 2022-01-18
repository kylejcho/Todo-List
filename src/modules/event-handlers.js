import createTask from "./create-task";


const addButton = document.querySelector('#addButton');
const formAddButton = document.querySelector('#taskFormAddButton');
const inputTaskName = document.querySelector('#inputTaskName');
const inputTaskDescription = document.querySelector('#inputTaskDescription');
const form = document.querySelector("#taskFormContainer");

const buttonClicked = () => {
    addButton.addEventListener('click', function() {
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
    form.addEventListener('click', function(e){
        console.log(e.target.id)
        if (e.target.id !== "taskForm" && e.target.id !== "inputTaskName" && e.target.id !== "inputTaskDescription") {
            form.style.visibility = "hidden";
        }
    })
}

export default buttonClicked;
