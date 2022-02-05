export const addTask = (taskContainer, shadow) => {
    setTimeout(()=> {
        if (shadow == 'no shadow') {
            taskContainer.style.transition = 'none';
        } else {
            taskContainer.style.animation = "taskContainerAdd 0.8s ease-in-out";
            
        }
        taskContainer.style.opacity = "1";
    },10) 
    setTimeout(() => {
            taskContainer.style.transition = 'all ease-in-out 0.2s'
    }, 300);
}

export const deleteTask = (taskContainer) => {
    const taskContainerHeight = taskContainer.clientHeight;
    taskContainer.style.opacity = "0";
    taskContainer.transform = "translateY(-100%)";
    taskContainer.style.marginBottom = "-" + taskContainerHeight + "px";
    setTimeout(()=> {taskContainer.remove();},200)
}

export const slideInTaskView = (tasksContainer, taskViewContainer) => {
    setTimeout(()=> {
        tasksContainer.style.transition = "none";
        tasksContainer.style.margin = "38px 0 auto 30%";
        tasksContainer.style.transform = "translateX(0)";

        const contentContainer = document.querySelector('#contentContainer');
        contentContainer.append(taskViewContainer);
        taskViewContainer.style.transform = "translateX(15vw)";
        setTimeout(()=> {
            taskViewContainer.style.opacity = "1";
            taskViewContainer.style.transform = "translateX(0)";
        },10)
    },250)
}

export const removeTaskView = () => {
    const taskViewContainer = document.querySelector('.taskViewContainer'); 
    const tasksContainer = document.querySelector('.tasksContainer');


    if(taskViewContainer) {
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
            taskViewContainer.style.transition = "all 0.4s cubic-bezier(.5, 0, 0, 1)";
            taskViewContainer.style.transform = "translateX(calc("+deltaX +"px + 15vw))";
            taskViewContainer.style.opacity = '0';
            tasksContainer.style.transition = "all 0.3s cubic-bezier(0.5, 0, 0.5, 1)";
            tasksContainer.style.transform = "translateX(0)"; 
        },10)
        setTimeout(()=> {taskViewContainer.remove()},300)  
    }
 
}



const checkTaskAnimation = (e) => {
    const checkedTask = e.target.parentNode.parentNode;
    const taskName = e.target.parentNode.nextElementSibling;
    const checkContainer = e.target.parentNode;
    const deleteContainer = taskName.nextElementSibling;
    const taskViewContainer = document.querySelector('.taskViewContainer');
    const taskViewCheckContainer = document.querySelector('.taskViewCheckContainer');
    const taskViewName = document.querySelector('.taskViewName');

    const taskToggle = (type, state) => {
        if (type == 'task') {
            checkedTask.classList.toggle('completed');
            taskName.classList.toggle('completed');
            checkContainer.classList.toggle('completed');
            deleteContainer.classList.toggle('completed');
            if (state == 'completed') {
                checkContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><title>ionicons-v5-q</title><circle cx="256" cy="256" r="192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/></svg>'
            } else {
                checkContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><title>ionicons-v5-e</title><path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM364.25,186.29l-134.4,160a16,16,0,0,1-12,5.71h-.27a16,16,0,0,1-11.89-5.3l-57.6-64a16,16,0,1,1,23.78-21.4l45.29,50.32L339.75,165.71a16,16,0,0,1,24.5,20.58Z"/></svg>';
            }
        } else if (type == 'taskView') {
            taskViewCheckContainer.classList.toggle('completed');
            taskViewName.classList.toggle('completed');
            if (state == 'completed') {
                taskViewCheckContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><title>ionicons-v5-q</title><circle cx="256" cy="256" r="192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/></svg>'
            } else {
                taskViewCheckContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><title>ionicons-v5-e</title><path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM364.25,186.29l-134.4,160a16,16,0,0,1-12,5.71h-.27a16,16,0,0,1-11.89-5.3l-57.6-64a16,16,0,1,1,23.78-21.4l45.29,50.32L339.75,165.71a16,16,0,0,1,24.5,20.58Z"/></svg>';
            }
        }
    }

    if (!checkedTask.className.includes('completed')) {
        taskToggle('task');
        if (taskViewContainer && taskViewContainer.id == 's'+ checkedTask.id) {
            taskToggle('taskView');
        }
    } else if (checkedTask.className.includes('completed')) {
        taskToggle('task', 'completed');
        if (taskViewContainer && taskViewContainer.id == 's'+ checkedTask.id) {
            taskToggle('taskView', 'completed');
        }
    }

    const taskContainer = taskName.parentNode;
    const taskContainerHeight = taskContainer.clientHeight;
    
    const spacer = document.createElement('div');
    spacer.style.height = taskContainerHeight + "px";
    spacer.style.marginBottom = "-" + taskContainerHeight + "px";
    spacer.style.transition = "all ease-in-out 0.2s";
    const subGroup = taskContainer.parentNode;

    if (checkedTask.className.includes('completed') && taskContainer.nextElementSibling) {
        taskContainer.parentNode.appendChild(spacer);

        setTimeout(()=> {
            taskContainer.style.opacity = "0";
            taskContainer.style.marginBottom = "-" + taskContainerHeight + "px";
            spacer.style.marginBottom = 0;
        },300)
        setTimeout(()=> {
            taskContainer.style.marginBottom = 0;
            spacer.remove();
            subGroup.appendChild(taskContainer);
        },500)
        setTimeout(()=>{
            taskContainer.style.opacity = "1";
        },600)

    } else if (!checkedTask.className.includes('completed') && taskContainer != subGroup.children[1]) {
        const subGroup = taskContainer.parentNode;
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
            taskContainer.style.opacity = "100";
        },600)
    }   
}

export default checkTaskAnimation