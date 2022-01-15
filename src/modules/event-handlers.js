

const addButton = document.querySelector('#addButton');

const buttonClicked = () => {
    addButton.addEventListener('click', function() {
        const form = document.querySelector("#taskFormContainer");
        form.style.visibility = "visible"
    })
}



export default buttonClicked;