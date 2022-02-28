export const addTask = (taskContainer, shadow) => {
    setTimeout(()=> {
        if (shadow == 'no shadow') {
            taskContainer.style.transition = 'none';
        } 
        taskContainer.style.opacity = "1";
    },10) 
    setTimeout(() => {
            taskContainer.style.transition = 'all ease-in-out 0.2s'
    }, 300);
}

export const deleteTask = (taskContainer) => {
    taskContainer.parentNode.childNodes.forEach((task)=>{
        task.style.pointerEvents = 'none';
    })
    const subGroup = taskContainer.parentNode;
    let startingPoint;
    for (let i = 1; i < subGroup.children.length; i++) {
        if (taskContainer == subGroup.children[i]) {
            startingPoint = i;
        }
    }
    taskContainer.style.opacity = 0;
    let distance;
    if (startingPoint == 1) {
        distance = 0;
    } else {
        distance = startingPoint * 60 - 60;
    }
    for (let i = startingPoint+1; i < subGroup.children.length; i++) {
        subGroup.children[i].style.transform = `translateY(${distance}px)`;
        distance += 60;
    }    
    
    subGroup.style.height = `${subGroup.children.length * 60 - 60}px `
    setTimeout(()=> {
        taskContainer.parentNode.childNodes.forEach((task)=>{
            task.style.pointerEvents = 'auto';
        })
        taskContainer.remove();
    },200)

}

export const slideInTaskView = (tasksContainer, taskViewContainer) => {
    setTimeout(()=> {
        tasksContainer.style.transition = "none";
        tasksContainer.style.margin = "48px 0 auto 30%";
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
    const taskContainers = document.querySelectorAll('.taskContainer');
    taskContainers.forEach((tasks)=> {
        tasks.classList.remove('viewing')
    })

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
        tasksContainer.style.margin = "48px auto auto auto";
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



const checkTaskAnimation = (e,a) => {
    let checkedTask
    let taskName 
    let checkContainer
    if (e != '') {
        checkedTask = e.target.parentNode.parentNode;
        taskName = e.target.parentNode.nextElementSibling;
        checkContainer = e.target.parentNode;
    } else {
        checkedTask = a.parentNode;
        taskName = a.nextElementSibling;
        checkContainer = a;
    }

    
    const deleteContainer = taskName.nextElementSibling;
    const taskViewContainer = document.querySelector('.taskViewContainer');
    const taskViewCheckContainer = document.querySelector('.taskViewCheckContainer');
    const taskViewName = document.querySelector('.taskViewName');

    const taskContainer = taskName.parentNode;
    const subGroup = taskContainer.parentNode;
    const subGroupHeight = subGroup.children.length * 60

    let startingPoint;
    for (let i = 1; i < subGroup.children.length; i++) {
        if (taskContainer == subGroup.children[i]) {
            startingPoint = i;
        }
    }
    
    subGroup.appendChild(taskContainer)

    setTimeout(() => {
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
    }, 10);
    

    taskContainer.style.transition = 'all 0.4s ease-in-out';
    if (!checkedTask.className.includes('completed')) {
        console.log('hola')
        setTimeout(()=> {
            taskContainer.style.transform = `translateY(${subGroupHeight - 120}px)`
            let distance;
            if (startingPoint == 1) {
                distance = 0;
            } else {
                distance = startingPoint * 60 - 60;
            }
            for (let i = startingPoint; i < subGroup.children.length; i++) {
                subGroup.children[i].style.transform = `translateY(${distance}px)`;
                distance += 60;
            }    
        },300)
    } 

    else if (checkedTask.className.includes('completed')) {
        console.log('hi')
        subGroup.insertBefore(taskContainer, subGroup.children[1]);
        setTimeout(()=> {
            taskContainer.style.transform = `translateY(0px)`
            let distance2 = 60;
            for (let i = 2 ; i < startingPoint+1; i++) {
                subGroup.children[i].style.transform = `translateY(${distance2}px)`;
                distance2 += 60;
            }    
        },300)
    }   
}

export default checkTaskAnimation