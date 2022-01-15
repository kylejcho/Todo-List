

const addButton = document.querySelector('#addButton');

const buttonClicked = () => {
    addButton.addEventListener('click', function() {
        alert('clicked')
    })
}



export default buttonClicked;