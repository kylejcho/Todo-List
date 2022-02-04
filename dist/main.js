/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/animations/checkTaskAnimation.js":
/*!******************************************************!*\
  !*** ./src/modules/animations/checkTaskAnimation.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
                taskViewName.style.backgroundSize = "0 100%";
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkTaskAnimation);

/***/ }),

/***/ "./src/modules/create-task.js":
/*!************************************!*\
  !*** ./src/modules/create-task.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allTasks": () => (/* binding */ allTasks),
/* harmony export */   "exampleTasks": () => (/* binding */ exampleTasks),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/modules/ui.js");



let allTasks = [];


const createTask = (task, description, dueDate, list) => {
    let key = generateTaskKey();
    let newTask = new _task__WEBPACK_IMPORTED_MODULE_0__["default"](task, description, dueDate, list, key);
    allTasks.push(newTask);
    (0,_ui__WEBPACK_IMPORTED_MODULE_1__.createTaskContainer)(task, description, dueDate, key);
}

const generateTaskKey = () => {
    let key = 0
    if (allTasks.length > 0) {
        for (let i = 0; i < allTasks.length; i++) {
            if (allTasks[i].key == key) {
                key++;
            }
        }
    }
    return key
}


const exampleTasks = () => {
    createTask("Exercise", "Workout out for 45 minutes", "today", '');
    createTask("Coffee with friend", "Starbucks", "today", '');
    createTask("Cooking class", "Bring homemade pie", "today", '');
    createTask("Exercise", "Workout out for 45 minutes", "today", '');
    createTask("Coffee with friend", "Starbucks", "today", '');
    createTask("Cooking class", "Bring homemade pie", "today", '');

    createTask("Read", "Read two chapter", "tomorrow", '');
    createTask("Learn sign language", "Practice english alphabet", "tomorrow", '');
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTask);



/***/ }),

/***/ "./src/modules/event-handlers.js":
/*!***************************************!*\
  !*** ./src/modules/event-handlers.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-task */ "./src/modules/create-task.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/modules/ui.js");
/* harmony import */ var _animations_checkTaskAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations/checkTaskAnimation */ "./src/modules/animations/checkTaskAnimation.js");





const addButton = document.querySelector('#addButton');
const formAddButton = document.querySelector('#taskFormAddButton');
const inputTaskName = document.querySelector('#inputTaskName');
const inputTaskDescription = document.querySelector('#inputTaskDescription');
const inputDueDate = document.querySelectorAll('.inputDueDate');
const formContainer = document.querySelector("#taskFormContainer");
const form = document.querySelector("#taskForm");
const contentContainer = document.querySelector("#contentContainer")

//FORM
const formButtonClicked = () => {
    addButton.addEventListener('click', function() {
        formContainer.style.visibility = "visible";
        form.style.opacity = "1";
        form.style.transform = "scale(1)";
    })
}

const formAddButtonClicked = () => {
    formAddButton.addEventListener('click', function() {
        if (inputTaskName.value) {
            let dueDate;
            inputDueDate.forEach((e) =>{
                if (e.className.includes('selected')) {
                    dueDate = e.id.replace('input', '').toLowerCase();
                }         
            })
            ;(0,_create_task__WEBPACK_IMPORTED_MODULE_0__["default"])(inputTaskName.value, inputTaskDescription.value, dueDate);
            formCancel();
        }
    })
}

const formDueDateClick = () => {
    inputDueDate.forEach(dueDate =>{
        dueDate.addEventListener('click', ()=> {
            inputDueDate.forEach(element => {
                element.classList.remove('selected');
            })
            dueDate.classList.toggle('selected');
        })
    })
}

const formCancelClick = () => {
    formContainer.addEventListener('click', (e)=>{
        if (e.target.id == 'taskFormContainer') {
            formCancel();
        }
    })
}

const formCancel = () => {
    form.style.opacity = "0";
    formContainer.style.visibility = "hidden";
    form.style.transform = "scale(0)";
    inputTaskName.value = '';
    inputTaskDescription.value = '';
    inputDueDate.forEach(element => {
        element.classList.remove('selected')
    })
    inputDueDate[0].classList.toggle('selected');
}


//Tasks
const clickTask = () => {
    contentContainer.addEventListener('click', (e)=> {
        const target = e.target;
        if (target.className == "taskContainer" || target.className == "taskContainer completed") {
            taskSelection(target);
        }
    })
}

const taskSelection = (taskContainer) => {
    const selectedTask = _create_task__WEBPACK_IMPORTED_MODULE_0__.allTasks.find((task)=> {
        if (task.key == taskContainer.id) {
            return true
        }
    })

    const taskView = document.querySelector('.taskViewContainer')

    if (taskView) {
        if (taskView.id == "s" + selectedTask.key) {
            (0,_ui__WEBPACK_IMPORTED_MODULE_1__.removeTaskView)();
            return;
        } else {
            taskView.style.opacity = '0';
            setTimeout(()=> {taskView.remove()},200)  
        }
    } else {
        document.querySelector('.tasksContainer').style.transform = "translateX(-30%)";
    }
    (0,_ui__WEBPACK_IMPORTED_MODULE_1__.createTaskView)(selectedTask, taskContainer);  
}

const deselectTask = () => {
    contentContainer.addEventListener('click', (e)=> {
        if (e.target == document.querySelector('#contentContainer')) {
            (0,_ui__WEBPACK_IMPORTED_MODULE_1__.removeTaskView)();
        }
    })
}




const checkClick = () => {
    document.addEventListener('click', (e)=> {
        if (e.target.parentNode.className == 'checkContainer'|| e.target.parentNode.className == 'checkContainer completed') {
            (0,_animations_checkTaskAnimation__WEBPACK_IMPORTED_MODULE_2__["default"])(e);
        }
    })
}

const deleteClick = () => {
    contentContainer.addEventListener('click', (e)=> {
        if (e.target.parentNode.className == 'deleteContainer' || e.target.parentNode.className == 'deleteContainer completed') {
            (0,_ui__WEBPACK_IMPORTED_MODULE_1__.deleteTask)(e.target.parentNode.parentNode);
        }
    })
}


const runEventHandlers = () => {
    formButtonClicked()
    checkClick();
    formAddButtonClicked();
    formDueDateClick();
    formCancelClick();
    clickTask();
    deselectTask();
    deleteClick();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (runEventHandlers);


/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Task {
    constructor(name, description, dueDate, list, key) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.list = list;
        this.key = key;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    setDescription(description) {
        this.description = description;
    }

    setDueDate(dueDate) {
        this.dueDate = dueDate;
    }

    setList(list) {
        this.list = list;
    }


}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTaskContainer": () => (/* binding */ createTaskContainer),
/* harmony export */   "createTaskView": () => (/* binding */ createTaskView),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "removeTaskView": () => (/* binding */ removeTaskView),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const initialPageLoad = () => {
    loadingPage()
    createAllTasksContainer();
}

const loadingPage = () => {
    const loadingScreen = document.querySelector("#loadingScreen");
    window.addEventListener('load', () => {
        const body = document.querySelector('body')
        body.style.overflowY= "hidden";
        setTimeout(()=> {
            loadingScreen.style.opacity = "0";
            setTimeout(()=> {
            loadingScreen.remove();
            body.style.overflowY= "visible";
            }, 300)
        }, 500)
    });
}


//ALL TASKS CONTENT
const createAllTasksContainer = () => {
    const allTasksContainer = document.createElement('div');
    allTasksContainer.id = "allTasksContainer";
    allTasksContainer.className = "tasksContainer";
    
    const allTasksTitle = document.createElement('div');
    allTasksTitle.id = 'titleContainer';
    allTasksTitle.className = "tasksTitle";
    allTasksTitle.innerText = "All Tasks";
    allTasksContainer.append(allTasksTitle);

    createSubGroups("today", allTasksContainer);
    createSubGroups("tomorrow", allTasksContainer);
    createSubGroups("upcoming", allTasksContainer);

    const contentContainer = document.querySelector('#contentContainer');
    contentContainer.append(allTasksContainer);
}

const createSubGroups = (group, allTasksContainer) => {
    const capitalize = (str) => {
        return str[0].toUpperCase() + str.slice(1)
    }

    const subGroup = document.createElement('div');
    subGroup.className = "subGroup";
    subGroup.id = group;

    const subGroupTitle = document.createElement('p');
    subGroupTitle.className = "subGroupTitle";
    subGroupTitle.innerText = capitalize(group);

    subGroup.append(subGroupTitle)
    allTasksContainer.append(subGroup);
}   


const createTaskContainer = (task, description, dueDate, key) => {
    const taskContainerShadow = document.createElement('div') 
    taskContainerShadow.className = 'taskContainerShadow';

    const taskContainer = document.createElement('div');
    taskContainer.className = 'taskContainer';
    taskContainer.id = key;

    const checkContainer = document.createElement('div');
    checkContainer.className = 'checkContainer';
    checkContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><title>ionicons-v5-q</title><circle cx="256" cy="256" r="192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/></svg>'

    const nameContainer = document.createElement('div')
    nameContainer.className ='nameContainer';
    nameContainer.innerText = task;

    const deleteContainer = document.createElement('div');
    deleteContainer.className = 'deleteContainer';
    deleteContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><title>ionicons-v5-m</title><path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm75.31,260.69a16,16,0,1,1-22.62,22.62L256,278.63l-52.69,52.68a16,16,0,0,1-22.62-22.62L233.37,256l-52.68-52.69a16,16,0,0,1,22.62-22.62L256,233.37l52.69-52.68a16,16,0,0,1,22.62,22.62L278.63,256Z"/></svg>';

    const descriptionContainer = document.createElement('div');
    descriptionContainer.className = 'descriptionContainer';
    descriptionContainer.innerText = description;

    taskContainer.append(checkContainer);
    taskContainer.append(nameContainer);
    taskContainer.append(deleteContainer);
    taskContainer.append(descriptionContainer);
    
    let subGroup;
    if (dueDate == 'today') {
        subGroup = document.querySelector('#today');
    } else if (dueDate == 'tomorrow') {
        subGroup = document.querySelector('#tomorrow');
    }

    subGroup.insertBefore(taskContainer, subGroup.children[1]);
    
    addTask(taskContainer)
}

const createTaskView = (task, taskContainer) => {
    const taskViewContainer = document.createElement('div');
    taskViewContainer.className = 'taskViewContainer';
    taskViewContainer.id = "s" + task.key;

    const taskViewNameContainer = document.createElement('div');
    taskViewNameContainer.className = "taskViewNameContainer";
    taskViewContainer.append(taskViewNameContainer);

    const checkContainer = document.createElement('div');
    checkContainer.className = 'taskViewCheckContainer';
    checkContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><title>ionicons-v5-q</title><circle cx="256" cy="256" r="192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/></svg>';
    taskViewNameContainer.append(checkContainer)

    const taskViewName = document.createElement('p');
    taskViewName.className = "taskViewName";
    taskViewName.innerText = task.name
    taskViewNameContainer.append(taskViewName);

    const taskViewDescriptionContainer = document.createElement('div');
    taskViewDescriptionContainer.className = "taskViewDescriptionContainer";
    taskViewDescriptionContainer.innerText = "Description";
    taskViewContainer.append(taskViewDescriptionContainer);

    const taskViewDescription = document.createElement('p');
    taskViewDescription.className = "taskViewDescription";
    taskViewDescription.innerText = task.description;
    taskViewDescriptionContainer.append(taskViewDescription)

    const tasksContainer = document.querySelector('.tasksContainer');
    tasksContainer.style.transition = "all 0.25s cubic-bezier(0.5, 0, 0.5, 1)";

    if (taskContainer.className.includes('completed')) {
        checkContainer.style.animation = "checkClick 0.3s ease-out";
        checkContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><title>ionicons-v5-e</title><path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM364.25,186.29l-134.4,160a16,16,0,0,1-12,5.71h-.27a16,16,0,0,1-11.89-5.3l-57.6-64a16,16,0,1,1,23.78-21.4l45.29,50.32L339.75,165.71a16,16,0,0,1,24.5,20.58Z"/></svg>';
        checkContainer.style.filter = "brightness(0) saturate(100%) invert(74%) sepia(13%) saturate(227%) hue-rotate(177deg) brightness(103%) contrast(97%)";
    
        taskViewName.style.backgroundSize = "100% 100%";
        taskViewName.style.color = "#697384bd";     
    }                 

    slideInTaskView(tasksContainer, taskViewContainer);
}




//ANIMATIONS

const addTask = (taskContainer) => {
    taskContainer.style.animation = "taskContainerAdd 1.5s cubic-bezier(.5, 0, 0, 1)";
    taskContainer.style.opacity = "1";
}

const deleteTask = (taskContainer) => {
    const taskContainerHeight = taskContainer.clientHeight;
    taskContainer.style.opacity = "0";
    taskContainer.transform = "translateY(-100%)";
    taskContainer.style.marginBottom = "-" + taskContainerHeight + "px";
    setTimeout(()=> {taskContainer.remove()},200)
}

const slideInTaskView = (tasksContainer, taskViewContainer) => {
    setTimeout(()=> {
        tasksContainer.style.transition = "none";
        tasksContainer.style.margin = "38px 0 auto 30%";
        tasksContainer.style.transform = "translateX(0)";

        const contentContainer = document.querySelector('#contentContainer');
        contentContainer.append(taskViewContainer);
        taskViewContainer.style.transform = "translateX(15vw)";
        setTimeout(()=> {
            taskViewContainer.style.transition = "all 0.25s cubic-bezier(0, 0.5, 0.5, 1)"
            taskViewContainer.style.opacity = "1";
            taskViewContainer.style.transform = "translateX(0)";
        },10)
    },250)
}

const removeTaskView = () => {
    const taskViewContainer = document.querySelector('.taskViewContainer'); 
    const tasksContainer = document.querySelector('.tasksContainer');
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
        taskViewContainer.style.transition = "all 0.4s cubic-bezier(0.5, 0, 0, 1)";
        taskViewContainer.style.transform = "translateX(calc("+deltaX +"px + 15vw))";
        taskViewContainer.style.opacity = '0';
        tasksContainer.style.transition = "all 0.25s cubic-bezier(0.5, 0, 0.5, 1)";
        tasksContainer.style.transform = "translateX(0)"; 
    },10)
    setTimeout(()=> {taskViewContainer.remove()},200)   
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialPageLoad);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ui */ "./src/modules/ui.js");
/* harmony import */ var _modules_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/task */ "./src/modules/task.js");
/* harmony import */ var _modules_create_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/create-task */ "./src/modules/create-task.js");
/* harmony import */ var _modules_event_handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/event-handlers */ "./src/modules/event-handlers.js");








(0,_modules_ui__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_modules_create_task__WEBPACK_IMPORTED_MODULE_2__.exampleTasks)();
(0,_modules_event_handlers__WEBPACK_IMPORTED_MODULE_3__["default"])();



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L3NyYy9tb2R1bGVzL2FuaW1hdGlvbnMvY2hlY2tUYXNrQW5pbWF0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NyZWF0ZS10YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2V2ZW50LWhhbmRsZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdWkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNoZWNrVGFza0FuaW1hdGlvbiA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBjaGVja2VkVGFzayA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IHRhc2tOYW1lID0gZS50YXJnZXQucGFyZW50Tm9kZS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICBjb25zdCBjaGVja0NvbnRhaW5lciA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCBkZWxldGVDb250YWluZXIgPSB0YXNrTmFtZS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICBjb25zdCB0YXNrVmlld0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrVmlld0NvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgdGFza1ZpZXdDaGVja0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrVmlld0NoZWNrQ29udGFpbmVyJyk7XHJcbiAgICBjb25zdCB0YXNrVmlld05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1ZpZXdOYW1lJyk7XHJcblxyXG4gICAgY29uc3QgdGFza1RvZ2dsZSA9ICh0eXBlLCBzdGF0ZSkgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlID09ICd0YXNrJykge1xyXG4gICAgICAgICAgICBjaGVja2VkVGFzay5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQnKTtcclxuICAgICAgICAgICAgdGFza05hbWUuY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGVkJyk7XHJcbiAgICAgICAgICAgIGNoZWNrQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlZCcpO1xyXG4gICAgICAgICAgICBkZWxldGVDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGVkJyk7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PSAnY29tcGxldGVkJykge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tDb250YWluZXIuaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjx0aXRsZT5pb25pY29ucy12NS1xPC90aXRsZT48Y2lyY2xlIGN4PVwiMjU2XCIgY3k9XCIyNTZcIiByPVwiMTkyXCIgc3R5bGU9XCJmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDozMnB4XCIvPjwvc3ZnPidcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrQ29udGFpbmVyLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48dGl0bGU+aW9uaWNvbnMtdjUtZTwvdGl0bGU+PHBhdGggZD1cIk0yNTYsNDhDMTQxLjMxLDQ4LDQ4LDE0MS4zMSw0OCwyNTZzOTMuMzEsMjA4LDIwOCwyMDgsMjA4LTkzLjMxLDIwOC0yMDhTMzcwLjY5LDQ4LDI1Niw0OFpNMzY0LjI1LDE4Ni4yOWwtMTM0LjQsMTYwYTE2LDE2LDAsMCwxLTEyLDUuNzFoLS4yN2ExNiwxNiwwLDAsMS0xMS44OS01LjNsLTU3LjYtNjRhMTYsMTYsMCwxLDEsMjMuNzgtMjEuNGw0NS4yOSw1MC4zMkwzMzkuNzUsMTY1LjcxYTE2LDE2LDAsMCwxLDI0LjUsMjAuNThaXCIvPjwvc3ZnPic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gJ3Rhc2tWaWV3Jykge1xyXG4gICAgICAgICAgICB0YXNrVmlld0NoZWNrQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlZCcpO1xyXG4gICAgICAgICAgICB0YXNrVmlld05hbWUuY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGVkJyk7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PSAnY29tcGxldGVkJykge1xyXG4gICAgICAgICAgICAgICAgdGFza1ZpZXdOYW1lLnN0eWxlLmJhY2tncm91bmRTaXplID0gXCIwIDEwMCVcIjtcclxuICAgICAgICAgICAgICAgIHRhc2tWaWV3Q2hlY2tDb250YWluZXIuaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjx0aXRsZT5pb25pY29ucy12NS1xPC90aXRsZT48Y2lyY2xlIGN4PVwiMjU2XCIgY3k9XCIyNTZcIiByPVwiMTkyXCIgc3R5bGU9XCJmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDozMnB4XCIvPjwvc3ZnPidcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRhc2tWaWV3Q2hlY2tDb250YWluZXIuaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjx0aXRsZT5pb25pY29ucy12NS1lPC90aXRsZT48cGF0aCBkPVwiTTI1Niw0OEMxNDEuMzEsNDgsNDgsMTQxLjMxLDQ4LDI1NnM5My4zMSwyMDgsMjA4LDIwOCwyMDgtOTMuMzEsMjA4LTIwOFMzNzAuNjksNDgsMjU2LDQ4Wk0zNjQuMjUsMTg2LjI5bC0xMzQuNCwxNjBhMTYsMTYsMCwwLDEtMTIsNS43MWgtLjI3YTE2LDE2LDAsMCwxLTExLjg5LTUuM2wtNTcuNi02NGExNiwxNiwwLDEsMSwyMy43OC0yMS40bDQ1LjI5LDUwLjMyTDMzOS43NSwxNjUuNzFhMTYsMTYsMCwwLDEsMjQuNSwyMC41OFpcIi8+PC9zdmc+JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWNoZWNrZWRUYXNrLmNsYXNzTmFtZS5pbmNsdWRlcygnY29tcGxldGVkJykpIHtcclxuICAgICAgICB0YXNrVG9nZ2xlKCd0YXNrJyk7XHJcbiAgICAgICAgaWYgKHRhc2tWaWV3Q29udGFpbmVyICYmIHRhc2tWaWV3Q29udGFpbmVyLmlkID09ICdzJysgY2hlY2tlZFRhc2suaWQpIHtcclxuICAgICAgICAgICAgdGFza1RvZ2dsZSgndGFza1ZpZXcnKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGNoZWNrZWRUYXNrLmNsYXNzTmFtZS5pbmNsdWRlcygnY29tcGxldGVkJykpIHtcclxuICAgICAgICB0YXNrVG9nZ2xlKCd0YXNrJywgJ2NvbXBsZXRlZCcpO1xyXG4gICAgICAgIGlmICh0YXNrVmlld0NvbnRhaW5lciAmJiB0YXNrVmlld0NvbnRhaW5lci5pZCA9PSAncycrIGNoZWNrZWRUYXNrLmlkKSB7XHJcbiAgICAgICAgICAgIHRhc2tUb2dnbGUoJ3Rhc2tWaWV3JywgJ2NvbXBsZXRlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gdGFza05hbWUucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IHRhc2tDb250YWluZXJIZWlnaHQgPSB0YXNrQ29udGFpbmVyLmNsaWVudEhlaWdodDtcclxuICAgIFxyXG4gICAgY29uc3Qgc3BhY2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzcGFjZXIuc3R5bGUuaGVpZ2h0ID0gdGFza0NvbnRhaW5lckhlaWdodCArIFwicHhcIjtcclxuICAgIHNwYWNlci5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIi1cIiArIHRhc2tDb250YWluZXJIZWlnaHQgKyBcInB4XCI7XHJcbiAgICBzcGFjZXIuc3R5bGUudHJhbnNpdGlvbiA9IFwiYWxsIGVhc2UtaW4tb3V0IDAuMnNcIjtcclxuICAgIGNvbnN0IHN1Ykdyb3VwID0gdGFza0NvbnRhaW5lci5wYXJlbnROb2RlO1xyXG5cclxuICAgIGlmIChjaGVja2VkVGFzay5jbGFzc05hbWUuaW5jbHVkZXMoJ2NvbXBsZXRlZCcpICYmIHRhc2tDb250YWluZXIubmV4dEVsZW1lbnRTaWJsaW5nKSB7XHJcbiAgICAgICAgdGFza0NvbnRhaW5lci5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHNwYWNlcik7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiLVwiICsgdGFza0NvbnRhaW5lckhlaWdodCArIFwicHhcIjtcclxuICAgICAgICAgICAgc3BhY2VyLnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XHJcbiAgICAgICAgfSwzMDApXHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xyXG4gICAgICAgICAgICBzcGFjZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHN1Ykdyb3VwLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xyXG4gICAgICAgIH0sNTAwKVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcbiAgICAgICAgfSw2MDApXHJcblxyXG4gICAgfSBlbHNlIGlmICghY2hlY2tlZFRhc2suY2xhc3NOYW1lLmluY2x1ZGVzKCdjb21wbGV0ZWQnKSAmJiB0YXNrQ29udGFpbmVyICE9IHN1Ykdyb3VwLmNoaWxkcmVuWzFdKSB7XHJcbiAgICAgICAgY29uc3Qgc3ViR3JvdXAgPSB0YXNrQ29udGFpbmVyLnBhcmVudE5vZGU7XHJcbiAgICAgICAgc3ViR3JvdXAuaW5zZXJ0QmVmb3JlKHNwYWNlciwgc3ViR3JvdXAuY2hpbGRyZW5bMV0pO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIi1cIiArIHRhc2tDb250YWluZXJIZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgICAgIHNwYWNlci5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xyXG4gICAgICAgIH0sMzAwKVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcclxuICAgICAgICAgICAgc3BhY2VyLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBzdWJHcm91cC5pbnNlcnRCZWZvcmUodGFza0NvbnRhaW5lciwgc3ViR3JvdXAuY2hpbGRyZW5bMV0pO1xyXG4gICAgICAgIH0sNTAwKVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gXCIxMDBcIjtcclxuICAgICAgICB9LDYwMClcclxuICAgIH0gICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hlY2tUYXNrQW5pbWF0aW9uIiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xyXG5pbXBvcnQge2NyZWF0ZVRhc2tDb250YWluZXJ9IGZyb20gXCIuL3VpXCI7XHJcblxyXG5leHBvcnQgbGV0IGFsbFRhc2tzID0gW107XHJcblxyXG5cclxuY29uc3QgY3JlYXRlVGFzayA9ICh0YXNrLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgbGlzdCkgPT4ge1xyXG4gICAgbGV0IGtleSA9IGdlbmVyYXRlVGFza0tleSgpO1xyXG4gICAgbGV0IG5ld1Rhc2sgPSBuZXcgVGFzayh0YXNrLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgbGlzdCwga2V5KTtcclxuICAgIGFsbFRhc2tzLnB1c2gobmV3VGFzayk7XHJcbiAgICBjcmVhdGVUYXNrQ29udGFpbmVyKHRhc2ssIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBrZXkpO1xyXG59XHJcblxyXG5jb25zdCBnZW5lcmF0ZVRhc2tLZXkgPSAoKSA9PiB7XHJcbiAgICBsZXQga2V5ID0gMFxyXG4gICAgaWYgKGFsbFRhc2tzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChhbGxUYXNrc1tpXS5rZXkgPT0ga2V5KSB7XHJcbiAgICAgICAgICAgICAgICBrZXkrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBrZXlcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBleGFtcGxlVGFza3MgPSAoKSA9PiB7XHJcbiAgICBjcmVhdGVUYXNrKFwiRXhlcmNpc2VcIiwgXCJXb3Jrb3V0IG91dCBmb3IgNDUgbWludXRlc1wiLCBcInRvZGF5XCIsICcnKTtcclxuICAgIGNyZWF0ZVRhc2soXCJDb2ZmZWUgd2l0aCBmcmllbmRcIiwgXCJTdGFyYnVja3NcIiwgXCJ0b2RheVwiLCAnJyk7XHJcbiAgICBjcmVhdGVUYXNrKFwiQ29va2luZyBjbGFzc1wiLCBcIkJyaW5nIGhvbWVtYWRlIHBpZVwiLCBcInRvZGF5XCIsICcnKTtcclxuICAgIGNyZWF0ZVRhc2soXCJFeGVyY2lzZVwiLCBcIldvcmtvdXQgb3V0IGZvciA0NSBtaW51dGVzXCIsIFwidG9kYXlcIiwgJycpO1xyXG4gICAgY3JlYXRlVGFzayhcIkNvZmZlZSB3aXRoIGZyaWVuZFwiLCBcIlN0YXJidWNrc1wiLCBcInRvZGF5XCIsICcnKTtcclxuICAgIGNyZWF0ZVRhc2soXCJDb29raW5nIGNsYXNzXCIsIFwiQnJpbmcgaG9tZW1hZGUgcGllXCIsIFwidG9kYXlcIiwgJycpO1xyXG5cclxuICAgIGNyZWF0ZVRhc2soXCJSZWFkXCIsIFwiUmVhZCB0d28gY2hhcHRlclwiLCBcInRvbW9ycm93XCIsICcnKTtcclxuICAgIGNyZWF0ZVRhc2soXCJMZWFybiBzaWduIGxhbmd1YWdlXCIsIFwiUHJhY3RpY2UgZW5nbGlzaCBhbHBoYWJldFwiLCBcInRvbW9ycm93XCIsICcnKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhc2s7XHJcblxyXG4iLCJpbXBvcnQgY3JlYXRlVGFzayBmcm9tIFwiLi9jcmVhdGUtdGFza1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVUYXNrVmlldywgZGVsZXRlVGFzaywgcmVtb3ZlVGFza1ZpZXcgfSBmcm9tIFwiLi91aVwiO1xyXG5pbXBvcnQgeyBhbGxUYXNrcyB9IGZyb20gXCIuL2NyZWF0ZS10YXNrXCI7XHJcbmltcG9ydCBjaGVja1Rhc2tBbmltYXRpb24gZnJvbSBcIi4vYW5pbWF0aW9ucy9jaGVja1Rhc2tBbmltYXRpb25cIjtcclxuXHJcbmNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRCdXR0b24nKTtcclxuY29uc3QgZm9ybUFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrRm9ybUFkZEJ1dHRvbicpO1xyXG5jb25zdCBpbnB1dFRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0VGFza05hbWUnKTtcclxuY29uc3QgaW5wdXRUYXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXRUYXNrRGVzY3JpcHRpb24nKTtcclxuY29uc3QgaW5wdXREdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0RHVlRGF0ZScpO1xyXG5jb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrRm9ybUNvbnRhaW5lclwiKTtcclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza0Zvcm1cIik7XHJcbmNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRDb250YWluZXJcIilcclxuXHJcbi8vRk9STVxyXG5jb25zdCBmb3JtQnV0dG9uQ2xpY2tlZCA9ICgpID0+IHtcclxuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGZvcm1Db250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgICAgIGZvcm0uc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgICAgIGZvcm0uc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgxKVwiO1xyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgZm9ybUFkZEJ1dHRvbkNsaWNrZWQgPSAoKSA9PiB7XHJcbiAgICBmb3JtQWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKGlucHV0VGFza05hbWUudmFsdWUpIHtcclxuICAgICAgICAgICAgbGV0IGR1ZURhdGU7XHJcbiAgICAgICAgICAgIGlucHV0RHVlRGF0ZS5mb3JFYWNoKChlKSA9PntcclxuICAgICAgICAgICAgICAgIGlmIChlLmNsYXNzTmFtZS5pbmNsdWRlcygnc2VsZWN0ZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGUgPSBlLmlkLnJlcGxhY2UoJ2lucHV0JywgJycpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNyZWF0ZVRhc2soaW5wdXRUYXNrTmFtZS52YWx1ZSwgaW5wdXRUYXNrRGVzY3JpcHRpb24udmFsdWUsIGR1ZURhdGUpO1xyXG4gICAgICAgICAgICBmb3JtQ2FuY2VsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgZm9ybUR1ZURhdGVDbGljayA9ICgpID0+IHtcclxuICAgIGlucHV0RHVlRGF0ZS5mb3JFYWNoKGR1ZURhdGUgPT57XHJcbiAgICAgICAgZHVlRGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xyXG4gICAgICAgICAgICBpbnB1dER1ZURhdGUuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgZHVlRGF0ZS5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBmb3JtQ2FuY2VsQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBmb3JtQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09ICd0YXNrRm9ybUNvbnRhaW5lcicpIHtcclxuICAgICAgICAgICAgZm9ybUNhbmNlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IGZvcm1DYW5jZWwgPSAoKSA9PiB7XHJcbiAgICBmb3JtLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgIGZvcm1Db250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICBmb3JtLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMClcIjtcclxuICAgIGlucHV0VGFza05hbWUudmFsdWUgPSAnJztcclxuICAgIGlucHV0VGFza0Rlc2NyaXB0aW9uLnZhbHVlID0gJyc7XHJcbiAgICBpbnB1dER1ZURhdGUuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJylcclxuICAgIH0pXHJcbiAgICBpbnB1dER1ZURhdGVbMF0uY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcclxufVxyXG5cclxuXHJcbi8vVGFza3NcclxuY29uc3QgY2xpY2tUYXNrID0gKCkgPT4ge1xyXG4gICAgY29udGVudENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+IHtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTmFtZSA9PSBcInRhc2tDb250YWluZXJcIiB8fCB0YXJnZXQuY2xhc3NOYW1lID09IFwidGFza0NvbnRhaW5lciBjb21wbGV0ZWRcIikge1xyXG4gICAgICAgICAgICB0YXNrU2VsZWN0aW9uKHRhcmdldCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgdGFza1NlbGVjdGlvbiA9ICh0YXNrQ29udGFpbmVyKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZFRhc2sgPSBhbGxUYXNrcy5maW5kKCh0YXNrKT0+IHtcclxuICAgICAgICBpZiAodGFzay5rZXkgPT0gdGFza0NvbnRhaW5lci5pZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgdGFza1ZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1ZpZXdDb250YWluZXInKVxyXG5cclxuICAgIGlmICh0YXNrVmlldykge1xyXG4gICAgICAgIGlmICh0YXNrVmlldy5pZCA9PSBcInNcIiArIHNlbGVjdGVkVGFzay5rZXkpIHtcclxuICAgICAgICAgICAgcmVtb3ZlVGFza1ZpZXcoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhc2tWaWV3LnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7dGFza1ZpZXcucmVtb3ZlKCl9LDIwMCkgIFxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzQ29udGFpbmVyJykuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKC0zMCUpXCI7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVUYXNrVmlldyhzZWxlY3RlZFRhc2ssIHRhc2tDb250YWluZXIpOyAgXHJcbn1cclxuXHJcbmNvbnN0IGRlc2VsZWN0VGFzayA9ICgpID0+IHtcclxuICAgIGNvbnRlbnRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Q29udGFpbmVyJykpIHtcclxuICAgICAgICAgICAgcmVtb3ZlVGFza1ZpZXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBjaGVja0NsaWNrID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NOYW1lID09ICdjaGVja0NvbnRhaW5lcid8fCBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTmFtZSA9PSAnY2hlY2tDb250YWluZXIgY29tcGxldGVkJykge1xyXG4gICAgICAgICAgICBjaGVja1Rhc2tBbmltYXRpb24oZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgZGVsZXRlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBjb250ZW50Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTmFtZSA9PSAnZGVsZXRlQ29udGFpbmVyJyB8fCBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTmFtZSA9PSAnZGVsZXRlQ29udGFpbmVyIGNvbXBsZXRlZCcpIHtcclxuICAgICAgICAgICAgZGVsZXRlVGFzayhlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5jb25zdCBydW5FdmVudEhhbmRsZXJzID0gKCkgPT4ge1xyXG4gICAgZm9ybUJ1dHRvbkNsaWNrZWQoKVxyXG4gICAgY2hlY2tDbGljaygpO1xyXG4gICAgZm9ybUFkZEJ1dHRvbkNsaWNrZWQoKTtcclxuICAgIGZvcm1EdWVEYXRlQ2xpY2soKTtcclxuICAgIGZvcm1DYW5jZWxDbGljaygpO1xyXG4gICAgY2xpY2tUYXNrKCk7XHJcbiAgICBkZXNlbGVjdFRhc2soKTtcclxuICAgIGRlbGV0ZUNsaWNrKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJ1bkV2ZW50SGFuZGxlcnM7XHJcbiIsImNsYXNzIFRhc2sge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGxpc3QsIGtleSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgICAgdGhpcy5saXN0ID0gbGlzdDtcclxuICAgICAgICB0aGlzLmtleSA9IGtleTtcclxuICAgIH1cclxuXHJcbiAgICBnZXROYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TmFtZShuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBzZXREdWVEYXRlKGR1ZURhdGUpIHtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldExpc3QobGlzdCkge1xyXG4gICAgICAgIHRoaXMubGlzdCA9IGxpc3Q7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2s7IiwiY29uc3QgaW5pdGlhbFBhZ2VMb2FkID0gKCkgPT4ge1xyXG4gICAgbG9hZGluZ1BhZ2UoKVxyXG4gICAgY3JlYXRlQWxsVGFza3NDb250YWluZXIoKTtcclxufVxyXG5cclxuY29uc3QgbG9hZGluZ1BhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsb2FkaW5nU2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2FkaW5nU2NyZWVuXCIpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxyXG4gICAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3dZPSBcImhpZGRlblwiO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgICAgIGxvYWRpbmdTY3JlZW4uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICAgICBsb2FkaW5nU2NyZWVuLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBib2R5LnN0eWxlLm92ZXJmbG93WT0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgICAgICAgIH0sIDMwMClcclxuICAgICAgICB9LCA1MDApXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbi8vQUxMIFRBU0tTIENPTlRFTlRcclxuY29uc3QgY3JlYXRlQWxsVGFza3NDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhbGxUYXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWxsVGFza3NDb250YWluZXIuaWQgPSBcImFsbFRhc2tzQ29udGFpbmVyXCI7XHJcbiAgICBhbGxUYXNrc0NvbnRhaW5lci5jbGFzc05hbWUgPSBcInRhc2tzQ29udGFpbmVyXCI7XHJcbiAgICBcclxuICAgIGNvbnN0IGFsbFRhc2tzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFsbFRhc2tzVGl0bGUuaWQgPSAndGl0bGVDb250YWluZXInO1xyXG4gICAgYWxsVGFza3NUaXRsZS5jbGFzc05hbWUgPSBcInRhc2tzVGl0bGVcIjtcclxuICAgIGFsbFRhc2tzVGl0bGUuaW5uZXJUZXh0ID0gXCJBbGwgVGFza3NcIjtcclxuICAgIGFsbFRhc2tzQ29udGFpbmVyLmFwcGVuZChhbGxUYXNrc1RpdGxlKTtcclxuXHJcbiAgICBjcmVhdGVTdWJHcm91cHMoXCJ0b2RheVwiLCBhbGxUYXNrc0NvbnRhaW5lcik7XHJcbiAgICBjcmVhdGVTdWJHcm91cHMoXCJ0b21vcnJvd1wiLCBhbGxUYXNrc0NvbnRhaW5lcik7XHJcbiAgICBjcmVhdGVTdWJHcm91cHMoXCJ1cGNvbWluZ1wiLCBhbGxUYXNrc0NvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Q29udGFpbmVyJyk7XHJcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZChhbGxUYXNrc0NvbnRhaW5lcik7XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZVN1Ykdyb3VwcyA9IChncm91cCwgYWxsVGFza3NDb250YWluZXIpID0+IHtcclxuICAgIGNvbnN0IGNhcGl0YWxpemUgPSAoc3RyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3ViR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHN1Ykdyb3VwLmNsYXNzTmFtZSA9IFwic3ViR3JvdXBcIjtcclxuICAgIHN1Ykdyb3VwLmlkID0gZ3JvdXA7XHJcblxyXG4gICAgY29uc3Qgc3ViR3JvdXBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHN1Ykdyb3VwVGl0bGUuY2xhc3NOYW1lID0gXCJzdWJHcm91cFRpdGxlXCI7XHJcbiAgICBzdWJHcm91cFRpdGxlLmlubmVyVGV4dCA9IGNhcGl0YWxpemUoZ3JvdXApO1xyXG5cclxuICAgIHN1Ykdyb3VwLmFwcGVuZChzdWJHcm91cFRpdGxlKVxyXG4gICAgYWxsVGFza3NDb250YWluZXIuYXBwZW5kKHN1Ykdyb3VwKTtcclxufSAgIFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVUYXNrQ29udGFpbmVyID0gKHRhc2ssIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBrZXkpID0+IHtcclxuICAgIGNvbnN0IHRhc2tDb250YWluZXJTaGFkb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSBcclxuICAgIHRhc2tDb250YWluZXJTaGFkb3cuY2xhc3NOYW1lID0gJ3Rhc2tDb250YWluZXJTaGFkb3cnO1xyXG5cclxuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRhc2tDb250YWluZXIuY2xhc3NOYW1lID0gJ3Rhc2tDb250YWluZXInO1xyXG4gICAgdGFza0NvbnRhaW5lci5pZCA9IGtleTtcclxuXHJcbiAgICBjb25zdCBjaGVja0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2hlY2tDb250YWluZXIuY2xhc3NOYW1lID0gJ2NoZWNrQ29udGFpbmVyJztcclxuICAgIGNoZWNrQ29udGFpbmVyLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48dGl0bGU+aW9uaWNvbnMtdjUtcTwvdGl0bGU+PGNpcmNsZSBjeD1cIjI1NlwiIGN5PVwiMjU2XCIgcj1cIjE5MlwiIHN0eWxlPVwiZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MzJweFwiLz48L3N2Zz4nXHJcblxyXG4gICAgY29uc3QgbmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBuYW1lQ29udGFpbmVyLmNsYXNzTmFtZSA9J25hbWVDb250YWluZXInO1xyXG4gICAgbmFtZUNvbnRhaW5lci5pbm5lclRleHQgPSB0YXNrO1xyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGVsZXRlQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdkZWxldGVDb250YWluZXInO1xyXG4gICAgZGVsZXRlQ29udGFpbmVyLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48dGl0bGU+aW9uaWNvbnMtdjUtbTwvdGl0bGU+PHBhdGggZD1cIk0yNTYsNDhDMTQxLjMxLDQ4LDQ4LDE0MS4zMSw0OCwyNTZzOTMuMzEsMjA4LDIwOCwyMDgsMjA4LTkzLjMxLDIwOC0yMDhTMzcwLjY5LDQ4LDI1Niw0OFptNzUuMzEsMjYwLjY5YTE2LDE2LDAsMSwxLTIyLjYyLDIyLjYyTDI1NiwyNzguNjNsLTUyLjY5LDUyLjY4YTE2LDE2LDAsMCwxLTIyLjYyLTIyLjYyTDIzMy4zNywyNTZsLTUyLjY4LTUyLjY5YTE2LDE2LDAsMCwxLDIyLjYyLTIyLjYyTDI1NiwyMzMuMzdsNTIuNjktNTIuNjhhMTYsMTYsMCwwLDEsMjIuNjIsMjIuNjJMMjc4LjYzLDI1NlpcIi8+PC9zdmc+JztcclxuXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuY2xhc3NOYW1lID0gJ2Rlc2NyaXB0aW9uQ29udGFpbmVyJztcclxuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmlubmVyVGV4dCA9IGRlc2NyaXB0aW9uO1xyXG5cclxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kKGNoZWNrQ29udGFpbmVyKTtcclxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kKG5hbWVDb250YWluZXIpO1xyXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmQoZGVsZXRlQ29udGFpbmVyKTtcclxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kKGRlc2NyaXB0aW9uQ29udGFpbmVyKTtcclxuICAgIFxyXG4gICAgbGV0IHN1Ykdyb3VwO1xyXG4gICAgaWYgKGR1ZURhdGUgPT0gJ3RvZGF5Jykge1xyXG4gICAgICAgIHN1Ykdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZGF5Jyk7XHJcbiAgICB9IGVsc2UgaWYgKGR1ZURhdGUgPT0gJ3RvbW9ycm93Jykge1xyXG4gICAgICAgIHN1Ykdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvbW9ycm93Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3ViR3JvdXAuaW5zZXJ0QmVmb3JlKHRhc2tDb250YWluZXIsIHN1Ykdyb3VwLmNoaWxkcmVuWzFdKTtcclxuICAgIFxyXG4gICAgYWRkVGFzayh0YXNrQ29udGFpbmVyKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlVGFza1ZpZXcgPSAodGFzaywgdGFza0NvbnRhaW5lcikgPT4ge1xyXG4gICAgY29uc3QgdGFza1ZpZXdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRhc2tWaWV3Q29udGFpbmVyLmNsYXNzTmFtZSA9ICd0YXNrVmlld0NvbnRhaW5lcic7XHJcbiAgICB0YXNrVmlld0NvbnRhaW5lci5pZCA9IFwic1wiICsgdGFzay5rZXk7XHJcblxyXG4gICAgY29uc3QgdGFza1ZpZXdOYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YXNrVmlld05hbWVDb250YWluZXIuY2xhc3NOYW1lID0gXCJ0YXNrVmlld05hbWVDb250YWluZXJcIjtcclxuICAgIHRhc2tWaWV3Q29udGFpbmVyLmFwcGVuZCh0YXNrVmlld05hbWVDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IGNoZWNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjaGVja0NvbnRhaW5lci5jbGFzc05hbWUgPSAndGFza1ZpZXdDaGVja0NvbnRhaW5lcic7XHJcbiAgICBjaGVja0NvbnRhaW5lci5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHRpdGxlPmlvbmljb25zLXY1LXE8L3RpdGxlPjxjaXJjbGUgY3g9XCIyNTZcIiBjeT1cIjI1NlwiIHI9XCIxOTJcIiBzdHlsZT1cImZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjMycHhcIi8+PC9zdmc+JztcclxuICAgIHRhc2tWaWV3TmFtZUNvbnRhaW5lci5hcHBlbmQoY2hlY2tDb250YWluZXIpXHJcblxyXG4gICAgY29uc3QgdGFza1ZpZXdOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdGFza1ZpZXdOYW1lLmNsYXNzTmFtZSA9IFwidGFza1ZpZXdOYW1lXCI7XHJcbiAgICB0YXNrVmlld05hbWUuaW5uZXJUZXh0ID0gdGFzay5uYW1lXHJcbiAgICB0YXNrVmlld05hbWVDb250YWluZXIuYXBwZW5kKHRhc2tWaWV3TmFtZSk7XHJcblxyXG4gICAgY29uc3QgdGFza1ZpZXdEZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGFza1ZpZXdEZXNjcmlwdGlvbkNvbnRhaW5lci5jbGFzc05hbWUgPSBcInRhc2tWaWV3RGVzY3JpcHRpb25Db250YWluZXJcIjtcclxuICAgIHRhc2tWaWV3RGVzY3JpcHRpb25Db250YWluZXIuaW5uZXJUZXh0ID0gXCJEZXNjcmlwdGlvblwiO1xyXG4gICAgdGFza1ZpZXdDb250YWluZXIuYXBwZW5kKHRhc2tWaWV3RGVzY3JpcHRpb25Db250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IHRhc2tWaWV3RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0YXNrVmlld0Rlc2NyaXB0aW9uLmNsYXNzTmFtZSA9IFwidGFza1ZpZXdEZXNjcmlwdGlvblwiO1xyXG4gICAgdGFza1ZpZXdEZXNjcmlwdGlvbi5pbm5lclRleHQgPSB0YXNrLmRlc2NyaXB0aW9uO1xyXG4gICAgdGFza1ZpZXdEZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmQodGFza1ZpZXdEZXNjcmlwdGlvbilcclxuXHJcbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrc0NvbnRhaW5lcicpO1xyXG4gICAgdGFza3NDb250YWluZXIuc3R5bGUudHJhbnNpdGlvbiA9IFwiYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjUsIDAsIDAuNSwgMSlcIjtcclxuXHJcbiAgICBpZiAodGFza0NvbnRhaW5lci5jbGFzc05hbWUuaW5jbHVkZXMoJ2NvbXBsZXRlZCcpKSB7XHJcbiAgICAgICAgY2hlY2tDb250YWluZXIuc3R5bGUuYW5pbWF0aW9uID0gXCJjaGVja0NsaWNrIDAuM3MgZWFzZS1vdXRcIjtcclxuICAgICAgICBjaGVja0NvbnRhaW5lci5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHRpdGxlPmlvbmljb25zLXY1LWU8L3RpdGxlPjxwYXRoIGQ9XCJNMjU2LDQ4QzE0MS4zMSw0OCw0OCwxNDEuMzEsNDgsMjU2czkzLjMxLDIwOCwyMDgsMjA4LDIwOC05My4zMSwyMDgtMjA4UzM3MC42OSw0OCwyNTYsNDhaTTM2NC4yNSwxODYuMjlsLTEzNC40LDE2MGExNiwxNiwwLDAsMS0xMiw1LjcxaC0uMjdhMTYsMTYsMCwwLDEtMTEuODktNS4zbC01Ny42LTY0YTE2LDE2LDAsMSwxLDIzLjc4LTIxLjRsNDUuMjksNTAuMzJMMzM5Ljc1LDE2NS43MWExNiwxNiwwLDAsMSwyNC41LDIwLjU4WlwiLz48L3N2Zz4nO1xyXG4gICAgICAgIGNoZWNrQ29udGFpbmVyLnN0eWxlLmZpbHRlciA9IFwiYnJpZ2h0bmVzcygwKSBzYXR1cmF0ZSgxMDAlKSBpbnZlcnQoNzQlKSBzZXBpYSgxMyUpIHNhdHVyYXRlKDIyNyUpIGh1ZS1yb3RhdGUoMTc3ZGVnKSBicmlnaHRuZXNzKDEwMyUpIGNvbnRyYXN0KDk3JSlcIjtcclxuICAgIFxyXG4gICAgICAgIHRhc2tWaWV3TmFtZS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiMTAwJSAxMDAlXCI7XHJcbiAgICAgICAgdGFza1ZpZXdOYW1lLnN0eWxlLmNvbG9yID0gXCIjNjk3Mzg0YmRcIjsgICAgIFxyXG4gICAgfSAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgc2xpZGVJblRhc2tWaWV3KHRhc2tzQ29udGFpbmVyLCB0YXNrVmlld0NvbnRhaW5lcik7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vQU5JTUFUSU9OU1xyXG5cclxuY29uc3QgYWRkVGFzayA9ICh0YXNrQ29udGFpbmVyKSA9PiB7XHJcbiAgICB0YXNrQ29udGFpbmVyLnN0eWxlLmFuaW1hdGlvbiA9IFwidGFza0NvbnRhaW5lckFkZCAxLjVzIGN1YmljLWJlemllciguNSwgMCwgMCwgMSlcIjtcclxuICAgIHRhc2tDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlVGFzayA9ICh0YXNrQ29udGFpbmVyKSA9PiB7XHJcbiAgICBjb25zdCB0YXNrQ29udGFpbmVySGVpZ2h0ID0gdGFza0NvbnRhaW5lci5jbGllbnRIZWlnaHQ7XHJcbiAgICB0YXNrQ29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgIHRhc2tDb250YWluZXIudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKC0xMDAlKVwiO1xyXG4gICAgdGFza0NvbnRhaW5lci5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIi1cIiArIHRhc2tDb250YWluZXJIZWlnaHQgKyBcInB4XCI7XHJcbiAgICBzZXRUaW1lb3V0KCgpPT4ge3Rhc2tDb250YWluZXIucmVtb3ZlKCl9LDIwMClcclxufVxyXG5cclxuY29uc3Qgc2xpZGVJblRhc2tWaWV3ID0gKHRhc2tzQ29udGFpbmVyLCB0YXNrVmlld0NvbnRhaW5lcikgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICB0YXNrc0NvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uID0gXCJub25lXCI7XHJcbiAgICAgICAgdGFza3NDb250YWluZXIuc3R5bGUubWFyZ2luID0gXCIzOHB4IDAgYXV0byAzMCVcIjtcclxuICAgICAgICB0YXNrc0NvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoMClcIjtcclxuXHJcbiAgICAgICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Q29udGFpbmVyJyk7XHJcbiAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmQodGFza1ZpZXdDb250YWluZXIpO1xyXG4gICAgICAgIHRhc2tWaWV3Q29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgxNXZ3KVwiO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgICAgIHRhc2tWaWV3Q29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb24gPSBcImFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMCwgMC41LCAwLjUsIDEpXCJcclxuICAgICAgICAgICAgdGFza1ZpZXdDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgICAgICAgICB0YXNrVmlld0NvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoMClcIjtcclxuICAgICAgICB9LDEwKVxyXG4gICAgfSwyNTApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVUYXNrVmlldyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRhc2tWaWV3Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tWaWV3Q29udGFpbmVyJyk7IFxyXG4gICAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3NDb250YWluZXInKTtcclxuICAgIHRhc2tWaWV3Q29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb24gPSBcIm5vbmVcIlxyXG4gICAgY29uc3QgcG9zaXRpb25BID0gdGFza1ZpZXdDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICB0YXNrVmlld0NvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgIGNvbnN0IHBvc2l0aW9uQiA9IHRhc2tWaWV3Q29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgZGVsdGFYID0gcG9zaXRpb25BLmxlZnQgLSBwb3NpdGlvbkIubGVmdDtcclxuXHJcbiAgICB0YXNrVmlld0NvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoXCIrIGRlbHRhWCArXCJweClcIlxyXG5cclxuICAgIHRhc2tzQ29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb24gPSBcIm5vbmVcIjtcclxuICAgIHRhc2tzQ29udGFpbmVyLnN0eWxlLm1hcmdpbiA9IFwiMzhweCBhdXRvIGF1dG8gYXV0b1wiO1xyXG4gICAgdGFza3NDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKC0zMCUpXCI7XHJcbiAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgIHRhc2tWaWV3Q29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb24gPSBcImFsbCAwLjRzIGN1YmljLWJlemllcigwLjUsIDAsIDAsIDEpXCI7XHJcbiAgICAgICAgdGFza1ZpZXdDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKGNhbGMoXCIrZGVsdGFYICtcInB4ICsgMTV2dykpXCI7XHJcbiAgICAgICAgdGFza1ZpZXdDb250YWluZXIuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgICAgICB0YXNrc0NvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uID0gXCJhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKVwiO1xyXG4gICAgICAgIHRhc2tzQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgwKVwiOyBcclxuICAgIH0sMTApXHJcbiAgICBzZXRUaW1lb3V0KCgpPT4ge3Rhc2tWaWV3Q29udGFpbmVyLnJlbW92ZSgpfSwyMDApICAgXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbFBhZ2VMb2FkOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGluaXRpYWxQYWdlTG9hZCBmcm9tIFwiLi9tb2R1bGVzL3VpXCI7XHJcbmltcG9ydCBUYXNrIGZyb20gXCIuL21vZHVsZXMvdGFza1wiO1xyXG5pbXBvcnQgeyBleGFtcGxlVGFza3MgfSBmcm9tIFwiLi9tb2R1bGVzL2NyZWF0ZS10YXNrXCI7XHJcbmltcG9ydCBydW5FdmVudEhhbmRsZXJzIGZyb20gXCIuL21vZHVsZXMvZXZlbnQtaGFuZGxlcnNcIjtcclxuXHJcblxyXG5cclxuXHJcbmluaXRpYWxQYWdlTG9hZCgpO1xyXG5leGFtcGxlVGFza3MoKTtcclxucnVuRXZlbnRIYW5kbGVycygpO1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==