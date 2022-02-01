const taskViewContainer = document.querySelector('.taskViewContainer');
const taskViewCheckContainer = document.querySelector('.taskViewCheckContainer');
const taskViewName = document.querySelector('.taskViewName');

let checkContainer;
let checkedTask;
let taskName;
let deleteContainer;

const selectCheckedTaskElements = (element) => {
    checkContainer = element;
    checkedTask = element.parentNode;
    taskName = element.nextElementSibling;
    deleteContainer = taskName.nextElementSibling;
}

const checkAnimation = (element) => {
    selectCheckedTaskElements(element);

    if (!checkedTask.className.includes('completed')) {
        taskCompletionToggle('task');
        if (taskViewContainer && taskViewContainer.id == 's'+ checkedTask.id) {
            taskCompletionToggle('taskView');
        }
    } else if (checkedTask.className.includes('completed')) {
        taskCompletionToggle('task', 'completed');
        if (taskViewContainer && taskViewContainer.id == 's'+ checkedTask.id) {
            taskCompletionToggle('taskView', 'completed');
        }
    }

    const taskContainer = taskName.parentNode;
    const taskContainerHeight = taskContainer.clientHeight;
    const subGroup = taskContainer.parentNode;
    const spacer = document.createElement('div');

    spacer.style.height = taskContainerHeight + "px";
    spacer.style.marginBottom = "-" + taskContainerHeight + "px";
    spacer.style.transition = "all ease-in-out 0.2s";
    
    if (checkedTask.className.includes('completed') && taskContainer.nextElementSibling) {
        subGroup.append(spacer);
        setTimeout(()=> {
            taskContainer.style.opacity = "0";
            taskContainer.style.marginBottom = "-" + taskContainerHeight + "px";
            spacer.style.marginBottom = 0;
        },300)
        setTimeout(()=> {
            taskContainer.style.marginBottom = 0;
            spacer.remove();
            subGroup.append(taskContainer);
        },500)
        setTimeout(()=>{
            taskContainer.style.opacity = "1";
        },600)
    } else if (!checkedTask.className.includes('completed') && taskContainer != subGroup.children[1]) {
        subGroup.insertBefore(spacer, subGroup.children[1]);
        setTimeout(()=> {
            taskContainer.style.opacity = "0";
            taskContainer.style.marginBottom = "-" + taskContainerHeight + "px";
            spacer.style.marginBottom = 0;
        },300)
        setTimeout(()=> {
            taskContainer.style.marginBottom = 0;
            spacer.remove();
            subGroup.insertBefore(taskContainer, subGroup.children[1]);
        },500)
        setTimeout(()=>{
            taskContainer.style.opacity = "1";
        },600)
    }   
}

const taskCompletionToggle = (type, state) => {
    if (type == 'task') {
        checkedTask.classList.toggle('completed');
        taskName.classList.toggle('completed');
        checkContainer.classList.toggle('completed');
        deleteContainer.classList.toggle('completed');
        if (state == 'completed') {
            checkContainer.innerHTML = checkStyling('completed', 20);
        } else {
            checkContainer.innerHTML = checkStyling('', 20);
        }
    } else if (type == 'taskView') {
        taskViewCheckContainer.classList.toggle('completed');
        taskViewName.classList.toggle('completed');
        if (state == 'completed') {
            taskViewCheckContainer.innerHTML = checkStyling('completed', 25);
        } else {
            taskViewCheckContainer.innerHTML = checkStyling('', 25);
        }
    }
}

const checkStyling = (state, size) => {
    if (state == 'completed') return '<svg xmlns="http://www.w3.org/2000/svg" width="'+size+'" height="'+size+'" viewBox="0 0 512 512"><title>ionicons-v5-q</title><circle cx="256" cy="256" r="192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/></svg>';
    else return '<svg xmlns="http://www.w3.org/2000/svg" width="'+size+'" height="'+size+'" viewBox="0 0 512 512"><title>ionicons-v5-e</title><path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM364.25,186.29l-134.4,160a16,16,0,0,1-12,5.71h-.27a16,16,0,0,1-11.89-5.3l-57.6-64a16,16,0,1,1,23.78-21.4l45.29,50.32L339.75,165.71a16,16,0,0,1,24.5,20.58Z"/></svg>';
 }





export default checkAnimation;