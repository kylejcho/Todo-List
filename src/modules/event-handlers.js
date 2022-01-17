import createTask from "./create-task";


const addButton = document.querySelector('#addButton');
const formAddButton = document.querySelector('#taskFormAddButton');
const inputTaskName = document.querySelector('#inputTaskName');
const inputTaskDescription = document.querySelector('#inputTaskDescription')

const buttonClicked = () => {
    addButton.addEventListener('click', function() {
        const form = document.querySelector("#taskFormContainer");
        form.style.visibility = "visible"
    })
}

export const formAddButtonClicked = () => {
    formAddButton.addEventListener('click', function() {
        if (inputTaskName.value) {
            createTask(inputTaskName.value, inputTaskDescription.value)
        }
    })
}

export default buttonClicked;
