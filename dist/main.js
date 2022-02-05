/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/animations.js":
/*!***********************************!*\
  !*** ./src/modules/animations.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "slideInTaskView": () => (/* binding */ slideInTaskView),
/* harmony export */   "removeTaskView": () => (/* binding */ removeTaskView),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const addTask = (taskContainer) => {
    setTimeout(()=> {
        taskContainer.style.animation = "taskContainerAdd 0.8s ease-in-out";
        taskContainer.style.opacity = "1";
    },50)
}

const deleteTask = (taskContainer) => {
    const taskContainerHeight = taskContainer.clientHeight;
    taskContainer.style.opacity = "0";
    taskContainer.transform = "translateY(-100%)";
    taskContainer.style.marginBottom = "-" + taskContainerHeight + "px";
    setTimeout(()=> {taskContainer.remove();},200)
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
            taskViewContainer.style.opacity = "1";
            taskViewContainer.style.transform = "translateX(0)";
        },10)
    },250)
}

const removeTaskView = () => {
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
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations */ "./src/modules/animations.js");






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
            (0,_animations__WEBPACK_IMPORTED_MODULE_2__.removeTaskView)();
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
            (0,_animations__WEBPACK_IMPORTED_MODULE_2__.removeTaskView)();
        }
    })
}




const checkClick = () => {
    document.addEventListener('click', (e)=> {
        if (e.target.parentNode.className == 'checkContainer'|| e.target.parentNode.className == 'checkContainer completed') {
            (0,_animations__WEBPACK_IMPORTED_MODULE_2__["default"])(e);
        }
    })
}

const deleteClick = () => {
    contentContainer.addEventListener('click', (e)=> {
        if (e.target.parentNode.className == 'deleteContainer' || e.target.parentNode.className == 'deleteContainer completed') {
            (0,_animations__WEBPACK_IMPORTED_MODULE_2__.deleteTask)(e.target.parentNode.parentNode);
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animations */ "./src/modules/animations.js");


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
    
    (0,_animations__WEBPACK_IMPORTED_MODULE_0__.addTask)(taskContainer)
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
    taskViewDescriptionContainer.innerText = "Description:";
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
        taskViewName.classList.toggle('completed');
        checkContainer.classList.toggle('completed');
    }                 

    (0,_animations__WEBPACK_IMPORTED_MODULE_0__.slideInTaskView)(tasksContainer, taskViewContainer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Olsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2FuaW1hdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY3JlYXRlLXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZXZlbnQtaGFuZGxlcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy91aS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGFkZFRhc2sgPSAodGFza0NvbnRhaW5lcikgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICB0YXNrQ29udGFpbmVyLnN0eWxlLmFuaW1hdGlvbiA9IFwidGFza0NvbnRhaW5lckFkZCAwLjhzIGVhc2UtaW4tb3V0XCI7XHJcbiAgICAgICAgdGFza0NvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcbiAgICB9LDUwKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlVGFzayA9ICh0YXNrQ29udGFpbmVyKSA9PiB7XHJcbiAgICBjb25zdCB0YXNrQ29udGFpbmVySGVpZ2h0ID0gdGFza0NvbnRhaW5lci5jbGllbnRIZWlnaHQ7XHJcbiAgICB0YXNrQ29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgIHRhc2tDb250YWluZXIudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKC0xMDAlKVwiO1xyXG4gICAgdGFza0NvbnRhaW5lci5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIi1cIiArIHRhc2tDb250YWluZXJIZWlnaHQgKyBcInB4XCI7XHJcbiAgICBzZXRUaW1lb3V0KCgpPT4ge3Rhc2tDb250YWluZXIucmVtb3ZlKCk7fSwyMDApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzbGlkZUluVGFza1ZpZXcgPSAodGFza3NDb250YWluZXIsIHRhc2tWaWV3Q29udGFpbmVyKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgIHRhc2tzQ29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb24gPSBcIm5vbmVcIjtcclxuICAgICAgICB0YXNrc0NvbnRhaW5lci5zdHlsZS5tYXJnaW4gPSBcIjM4cHggMCBhdXRvIDMwJVwiO1xyXG4gICAgICAgIHRhc2tzQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgwKVwiO1xyXG5cclxuICAgICAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnRDb250YWluZXInKTtcclxuICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZCh0YXNrVmlld0NvbnRhaW5lcik7XHJcbiAgICAgICAgdGFza1ZpZXdDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKDE1dncpXCI7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgdGFza1ZpZXdDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgICAgICAgICB0YXNrVmlld0NvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoMClcIjtcclxuICAgICAgICB9LDEwKVxyXG4gICAgfSwyNTApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVUYXNrVmlldyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRhc2tWaWV3Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tWaWV3Q29udGFpbmVyJyk7IFxyXG4gICAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3NDb250YWluZXInKTtcclxuXHJcblxyXG4gICAgaWYodGFza1ZpZXdDb250YWluZXIpIHtcclxuICAgICAgICB0YXNrVmlld0NvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uID0gXCJub25lXCJcclxuICAgICAgICBjb25zdCBwb3NpdGlvbkEgPSB0YXNrVmlld0NvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICB0YXNrVmlld0NvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbkIgPSB0YXNrVmlld0NvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBjb25zdCBkZWx0YVggPSBwb3NpdGlvbkEubGVmdCAtIHBvc2l0aW9uQi5sZWZ0O1xyXG5cclxuICAgICAgICB0YXNrVmlld0NvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoXCIrIGRlbHRhWCArXCJweClcIlxyXG4gICAgICAgIHRhc2tzQ29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb24gPSBcIm5vbmVcIjtcclxuICAgICAgICB0YXNrc0NvbnRhaW5lci5zdHlsZS5tYXJnaW4gPSBcIjM4cHggYXV0byBhdXRvIGF1dG9cIjtcclxuICAgICAgICB0YXNrc0NvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoLTMwJSlcIjtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICAgICB0YXNrVmlld0NvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uID0gXCJhbGwgMC40cyBjdWJpYy1iZXppZXIoLjUsIDAsIDAsIDEpXCI7XHJcbiAgICAgICAgICAgIHRhc2tWaWV3Q29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWChjYWxjKFwiK2RlbHRhWCArXCJweCArIDE1dncpKVwiO1xyXG4gICAgICAgICAgICB0YXNrVmlld0NvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgICAgICAgICB0YXNrc0NvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uID0gXCJhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjUsIDEpXCI7XHJcbiAgICAgICAgICAgIHRhc2tzQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgwKVwiOyBcclxuICAgICAgICB9LDEwKVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PiB7dGFza1ZpZXdDb250YWluZXIucmVtb3ZlKCl9LDMwMCkgIFxyXG4gICAgfVxyXG4gXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgY2hlY2tUYXNrQW5pbWF0aW9uID0gKGUpID0+IHtcclxuICAgIGNvbnN0IGNoZWNrZWRUYXNrID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG4gICAgY29uc3QgdGFza05hbWUgPSBlLnRhcmdldC5wYXJlbnROb2RlLm5leHRFbGVtZW50U2libGluZztcclxuICAgIGNvbnN0IGNoZWNrQ29udGFpbmVyID0gZS50YXJnZXQucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IGRlbGV0ZUNvbnRhaW5lciA9IHRhc2tOYW1lLm5leHRFbGVtZW50U2libGluZztcclxuICAgIGNvbnN0IHRhc2tWaWV3Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tWaWV3Q29udGFpbmVyJyk7XHJcbiAgICBjb25zdCB0YXNrVmlld0NoZWNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tWaWV3Q2hlY2tDb250YWluZXInKTtcclxuICAgIGNvbnN0IHRhc2tWaWV3TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrVmlld05hbWUnKTtcclxuXHJcbiAgICBjb25zdCB0YXNrVG9nZ2xlID0gKHR5cGUsIHN0YXRlKSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGUgPT0gJ3Rhc2snKSB7XHJcbiAgICAgICAgICAgIGNoZWNrZWRUYXNrLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlZCcpO1xyXG4gICAgICAgICAgICB0YXNrTmFtZS5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQnKTtcclxuICAgICAgICAgICAgY2hlY2tDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGVkJyk7XHJcbiAgICAgICAgICAgIGRlbGV0ZUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQnKTtcclxuICAgICAgICAgICAgaWYgKHN0YXRlID09ICdjb21wbGV0ZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBjaGVja0NvbnRhaW5lci5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHRpdGxlPmlvbmljb25zLXY1LXE8L3RpdGxlPjxjaXJjbGUgY3g9XCIyNTZcIiBjeT1cIjI1NlwiIHI9XCIxOTJcIiBzdHlsZT1cImZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjMycHhcIi8+PC9zdmc+J1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tDb250YWluZXIuaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjx0aXRsZT5pb25pY29ucy12NS1lPC90aXRsZT48cGF0aCBkPVwiTTI1Niw0OEMxNDEuMzEsNDgsNDgsMTQxLjMxLDQ4LDI1NnM5My4zMSwyMDgsMjA4LDIwOCwyMDgtOTMuMzEsMjA4LTIwOFMzNzAuNjksNDgsMjU2LDQ4Wk0zNjQuMjUsMTg2LjI5bC0xMzQuNCwxNjBhMTYsMTYsMCwwLDEtMTIsNS43MWgtLjI3YTE2LDE2LDAsMCwxLTExLjg5LTUuM2wtNTcuNi02NGExNiwxNiwwLDEsMSwyMy43OC0yMS40bDQ1LjI5LDUwLjMyTDMzOS43NSwxNjUuNzFhMTYsMTYsMCwwLDEsMjQuNSwyMC41OFpcIi8+PC9zdmc+JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSAndGFza1ZpZXcnKSB7XHJcbiAgICAgICAgICAgIHRhc2tWaWV3Q2hlY2tDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGVkJyk7XHJcbiAgICAgICAgICAgIHRhc2tWaWV3TmFtZS5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQnKTtcclxuICAgICAgICAgICAgaWYgKHN0YXRlID09ICdjb21wbGV0ZWQnKSB7XHJcbiAgICAgICAgICAgICAgICB0YXNrVmlld0NoZWNrQ29udGFpbmVyLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48dGl0bGU+aW9uaWNvbnMtdjUtcTwvdGl0bGU+PGNpcmNsZSBjeD1cIjI1NlwiIGN5PVwiMjU2XCIgcj1cIjE5MlwiIHN0eWxlPVwiZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MzJweFwiLz48L3N2Zz4nXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0YXNrVmlld0NoZWNrQ29udGFpbmVyLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48dGl0bGU+aW9uaWNvbnMtdjUtZTwvdGl0bGU+PHBhdGggZD1cIk0yNTYsNDhDMTQxLjMxLDQ4LDQ4LDE0MS4zMSw0OCwyNTZzOTMuMzEsMjA4LDIwOCwyMDgsMjA4LTkzLjMxLDIwOC0yMDhTMzcwLjY5LDQ4LDI1Niw0OFpNMzY0LjI1LDE4Ni4yOWwtMTM0LjQsMTYwYTE2LDE2LDAsMCwxLTEyLDUuNzFoLS4yN2ExNiwxNiwwLDAsMS0xMS44OS01LjNsLTU3LjYtNjRhMTYsMTYsMCwxLDEsMjMuNzgtMjEuNGw0NS4yOSw1MC4zMkwzMzkuNzUsMTY1LjcxYTE2LDE2LDAsMCwxLDI0LjUsMjAuNThaXCIvPjwvc3ZnPic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFjaGVja2VkVGFzay5jbGFzc05hbWUuaW5jbHVkZXMoJ2NvbXBsZXRlZCcpKSB7XHJcbiAgICAgICAgdGFza1RvZ2dsZSgndGFzaycpO1xyXG4gICAgICAgIGlmICh0YXNrVmlld0NvbnRhaW5lciAmJiB0YXNrVmlld0NvbnRhaW5lci5pZCA9PSAncycrIGNoZWNrZWRUYXNrLmlkKSB7XHJcbiAgICAgICAgICAgIHRhc2tUb2dnbGUoJ3Rhc2tWaWV3Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChjaGVja2VkVGFzay5jbGFzc05hbWUuaW5jbHVkZXMoJ2NvbXBsZXRlZCcpKSB7XHJcbiAgICAgICAgdGFza1RvZ2dsZSgndGFzaycsICdjb21wbGV0ZWQnKTtcclxuICAgICAgICBpZiAodGFza1ZpZXdDb250YWluZXIgJiYgdGFza1ZpZXdDb250YWluZXIuaWQgPT0gJ3MnKyBjaGVja2VkVGFzay5pZCkge1xyXG4gICAgICAgICAgICB0YXNrVG9nZ2xlKCd0YXNrVmlldycsICdjb21wbGV0ZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IHRhc2tOYW1lLnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCB0YXNrQ29udGFpbmVySGVpZ2h0ID0gdGFza0NvbnRhaW5lci5jbGllbnRIZWlnaHQ7XHJcbiAgICBcclxuICAgIGNvbnN0IHNwYWNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc3BhY2VyLnN0eWxlLmhlaWdodCA9IHRhc2tDb250YWluZXJIZWlnaHQgKyBcInB4XCI7XHJcbiAgICBzcGFjZXIuc3R5bGUubWFyZ2luQm90dG9tID0gXCItXCIgKyB0YXNrQ29udGFpbmVySGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgc3BhY2VyLnN0eWxlLnRyYW5zaXRpb24gPSBcImFsbCBlYXNlLWluLW91dCAwLjJzXCI7XHJcbiAgICBjb25zdCBzdWJHcm91cCA9IHRhc2tDb250YWluZXIucGFyZW50Tm9kZTtcclxuXHJcbiAgICBpZiAoY2hlY2tlZFRhc2suY2xhc3NOYW1lLmluY2x1ZGVzKCdjb21wbGV0ZWQnKSAmJiB0YXNrQ29udGFpbmVyLm5leHRFbGVtZW50U2libGluZykge1xyXG4gICAgICAgIHRhc2tDb250YWluZXIucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChzcGFjZXIpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIi1cIiArIHRhc2tDb250YWluZXJIZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgICAgIHNwYWNlci5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xyXG4gICAgICAgIH0sMzAwKVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcclxuICAgICAgICAgICAgc3BhY2VyLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBzdWJHcm91cC5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcclxuICAgICAgICB9LDUwMClcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgICAgIH0sNjAwKVxyXG5cclxuICAgIH0gZWxzZSBpZiAoIWNoZWNrZWRUYXNrLmNsYXNzTmFtZS5pbmNsdWRlcygnY29tcGxldGVkJykgJiYgdGFza0NvbnRhaW5lciAhPSBzdWJHcm91cC5jaGlsZHJlblsxXSkge1xyXG4gICAgICAgIGNvbnN0IHN1Ykdyb3VwID0gdGFza0NvbnRhaW5lci5wYXJlbnROb2RlO1xyXG4gICAgICAgIHN1Ykdyb3VwLmluc2VydEJlZm9yZShzcGFjZXIsIHN1Ykdyb3VwLmNoaWxkcmVuWzFdKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuc3R5bGUubWFyZ2luQm90dG9tID0gXCItXCIgKyB0YXNrQ29udGFpbmVySGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICAgICAgICBzcGFjZXIuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcclxuICAgICAgICB9LDMwMClcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XHJcbiAgICAgICAgICAgIHNwYWNlci5yZW1vdmUoKTtcclxuICAgICAgICAgICAgc3ViR3JvdXAuaW5zZXJ0QmVmb3JlKHRhc2tDb250YWluZXIsIHN1Ykdyb3VwLmNoaWxkcmVuWzFdKTtcclxuICAgICAgICB9LDUwMClcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IFwiMTAwXCI7XHJcbiAgICAgICAgfSw2MDApXHJcbiAgICB9ICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoZWNrVGFza0FuaW1hdGlvbiIsImltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcclxuaW1wb3J0IHtjcmVhdGVUYXNrQ29udGFpbmVyfSBmcm9tIFwiLi91aVwiO1xyXG5cclxuZXhwb3J0IGxldCBhbGxUYXNrcyA9IFtdO1xyXG5cclxuXHJcbmNvbnN0IGNyZWF0ZVRhc2sgPSAodGFzaywgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGxpc3QpID0+IHtcclxuICAgIGxldCBrZXkgPSBnZW5lcmF0ZVRhc2tLZXkoKTtcclxuICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2sodGFzaywgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGxpc3QsIGtleSk7XHJcbiAgICBhbGxUYXNrcy5wdXNoKG5ld1Rhc2spO1xyXG4gICAgY3JlYXRlVGFza0NvbnRhaW5lcih0YXNrLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwga2V5KTtcclxufVxyXG5cclxuY29uc3QgZ2VuZXJhdGVUYXNrS2V5ID0gKCkgPT4ge1xyXG4gICAgbGV0IGtleSA9IDBcclxuICAgIGlmIChhbGxUYXNrcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxUYXNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoYWxsVGFza3NbaV0ua2V5ID09IGtleSkge1xyXG4gICAgICAgICAgICAgICAga2V5Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4ga2V5XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZXhhbXBsZVRhc2tzID0gKCkgPT4ge1xyXG4gICAgY3JlYXRlVGFzayhcIkV4ZXJjaXNlXCIsIFwiV29ya291dCBvdXQgZm9yIDQ1IG1pbnV0ZXNcIiwgXCJ0b2RheVwiLCAnJyk7XHJcbiAgICBjcmVhdGVUYXNrKFwiQ29mZmVlIHdpdGggZnJpZW5kXCIsIFwiU3RhcmJ1Y2tzXCIsIFwidG9kYXlcIiwgJycpO1xyXG4gICAgY3JlYXRlVGFzayhcIkNvb2tpbmcgY2xhc3NcIiwgXCJCcmluZyBob21lbWFkZSBwaWVcIiwgXCJ0b2RheVwiLCAnJyk7XHJcbiAgICBjcmVhdGVUYXNrKFwiRXhlcmNpc2VcIiwgXCJXb3Jrb3V0IG91dCBmb3IgNDUgbWludXRlc1wiLCBcInRvZGF5XCIsICcnKTtcclxuICAgIGNyZWF0ZVRhc2soXCJDb2ZmZWUgd2l0aCBmcmllbmRcIiwgXCJTdGFyYnVja3NcIiwgXCJ0b2RheVwiLCAnJyk7XHJcbiAgICBjcmVhdGVUYXNrKFwiQ29va2luZyBjbGFzc1wiLCBcIkJyaW5nIGhvbWVtYWRlIHBpZVwiLCBcInRvZGF5XCIsICcnKTtcclxuXHJcbiAgICBjcmVhdGVUYXNrKFwiUmVhZFwiLCBcIlJlYWQgdHdvIGNoYXB0ZXJcIiwgXCJ0b21vcnJvd1wiLCAnJyk7XHJcbiAgICBjcmVhdGVUYXNrKFwiTGVhcm4gc2lnbiBsYW5ndWFnZVwiLCBcIlByYWN0aWNlIGVuZ2xpc2ggYWxwaGFiZXRcIiwgXCJ0b21vcnJvd1wiLCAnJyk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUYXNrO1xyXG5cclxuIiwiaW1wb3J0IGNyZWF0ZVRhc2sgZnJvbSBcIi4vY3JlYXRlLXRhc2tcIjtcclxuaW1wb3J0IHsgY3JlYXRlVGFza1ZpZXd9IGZyb20gXCIuL3VpXCI7XHJcbmltcG9ydCB7IGFsbFRhc2tzIH0gZnJvbSBcIi4vY3JlYXRlLXRhc2tcIjtcclxuaW1wb3J0IGNoZWNrVGFza0FuaW1hdGlvbiBmcm9tIFwiLi9hbmltYXRpb25zXCI7XHJcbmltcG9ydCB7IGRlbGV0ZVRhc2ssIHJlbW92ZVRhc2tWaWV3IH0gZnJvbSBcIi4vYW5pbWF0aW9uc1wiO1xyXG5cclxuY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZEJ1dHRvbicpO1xyXG5jb25zdCBmb3JtQWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tGb3JtQWRkQnV0dG9uJyk7XHJcbmNvbnN0IGlucHV0VGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXRUYXNrTmFtZScpO1xyXG5jb25zdCBpbnB1dFRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dFRhc2tEZXNjcmlwdGlvbicpO1xyXG5jb25zdCBpbnB1dER1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXREdWVEYXRlJyk7XHJcbmNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tGb3JtQ29udGFpbmVyXCIpO1xyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrRm9ybVwiKTtcclxuY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudENvbnRhaW5lclwiKVxyXG5cclxuLy9GT1JNXHJcbmNvbnN0IGZvcm1CdXR0b25DbGlja2VkID0gKCkgPT4ge1xyXG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZm9ybUNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgICAgZm9ybS5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcbiAgICAgICAgZm9ybS5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEpXCI7XHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBmb3JtQWRkQnV0dG9uQ2xpY2tlZCA9ICgpID0+IHtcclxuICAgIGZvcm1BZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoaW5wdXRUYXNrTmFtZS52YWx1ZSkge1xyXG4gICAgICAgICAgICBsZXQgZHVlRGF0ZTtcclxuICAgICAgICAgICAgaW5wdXREdWVEYXRlLmZvckVhY2goKGUpID0+e1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuY2xhc3NOYW1lLmluY2x1ZGVzKCdzZWxlY3RlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZSA9IGUuaWQucmVwbGFjZSgnaW5wdXQnLCAnJykudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY3JlYXRlVGFzayhpbnB1dFRhc2tOYW1lLnZhbHVlLCBpbnB1dFRhc2tEZXNjcmlwdGlvbi52YWx1ZSwgZHVlRGF0ZSk7XHJcbiAgICAgICAgICAgIGZvcm1DYW5jZWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBmb3JtRHVlRGF0ZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgaW5wdXREdWVEYXRlLmZvckVhY2goZHVlRGF0ZSA9PntcclxuICAgICAgICBkdWVEYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XHJcbiAgICAgICAgICAgIGlucHV0RHVlRGF0ZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBkdWVEYXRlLmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IGZvcm1DYW5jZWxDbGljayA9ICgpID0+IHtcclxuICAgIGZvcm1Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcclxuICAgICAgICBpZiAoZS50YXJnZXQuaWQgPT0gJ3Rhc2tGb3JtQ29udGFpbmVyJykge1xyXG4gICAgICAgICAgICBmb3JtQ2FuY2VsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgZm9ybUNhbmNlbCA9ICgpID0+IHtcclxuICAgIGZvcm0uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgZm9ybUNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgIGZvcm0uc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgwKVwiO1xyXG4gICAgaW5wdXRUYXNrTmFtZS52YWx1ZSA9ICcnO1xyXG4gICAgaW5wdXRUYXNrRGVzY3JpcHRpb24udmFsdWUgPSAnJztcclxuICAgIGlucHV0RHVlRGF0ZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKVxyXG4gICAgfSlcclxuICAgIGlucHV0RHVlRGF0ZVswXS5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZCcpO1xyXG59XHJcblxyXG5cclxuLy9UYXNrc1xyXG5jb25zdCBjbGlja1Rhc2sgPSAoKSA9PiB7XHJcbiAgICBjb250ZW50Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NOYW1lID09IFwidGFza0NvbnRhaW5lclwiIHx8IHRhcmdldC5jbGFzc05hbWUgPT0gXCJ0YXNrQ29udGFpbmVyIGNvbXBsZXRlZFwiKSB7XHJcbiAgICAgICAgICAgIHRhc2tTZWxlY3Rpb24odGFyZ2V0KTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCB0YXNrU2VsZWN0aW9uID0gKHRhc2tDb250YWluZXIpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkVGFzayA9IGFsbFRhc2tzLmZpbmQoKHRhc2spPT4ge1xyXG4gICAgICAgIGlmICh0YXNrLmtleSA9PSB0YXNrQ29udGFpbmVyLmlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB0YXNrVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrVmlld0NvbnRhaW5lcicpXHJcblxyXG4gICAgaWYgKHRhc2tWaWV3KSB7XHJcbiAgICAgICAgaWYgKHRhc2tWaWV3LmlkID09IFwic1wiICsgc2VsZWN0ZWRUYXNrLmtleSkge1xyXG4gICAgICAgICAgICByZW1vdmVUYXNrVmlldygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGFza1ZpZXcuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+IHt0YXNrVmlldy5yZW1vdmUoKX0sMjAwKSAgXHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3NDb250YWluZXInKS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoLTMwJSlcIjtcclxuICAgIH1cclxuICAgIGNyZWF0ZVRhc2tWaWV3KHNlbGVjdGVkVGFzaywgdGFza0NvbnRhaW5lcik7ICBcclxufVxyXG5cclxuY29uc3QgZGVzZWxlY3RUYXNrID0gKCkgPT4ge1xyXG4gICAgY29udGVudENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQgPT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnRDb250YWluZXInKSkge1xyXG4gICAgICAgICAgICByZW1vdmVUYXNrVmlldygpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IGNoZWNrQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc05hbWUgPT0gJ2NoZWNrQ29udGFpbmVyJ3x8IGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NOYW1lID09ICdjaGVja0NvbnRhaW5lciBjb21wbGV0ZWQnKSB7XHJcbiAgICAgICAgICAgIGNoZWNrVGFza0FuaW1hdGlvbihlKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBkZWxldGVDbGljayA9ICgpID0+IHtcclxuICAgIGNvbnRlbnRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NOYW1lID09ICdkZWxldGVDb250YWluZXInIHx8IGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NOYW1lID09ICdkZWxldGVDb250YWluZXIgY29tcGxldGVkJykge1xyXG4gICAgICAgICAgICBkZWxldGVUYXNrKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcbmNvbnN0IHJ1bkV2ZW50SGFuZGxlcnMgPSAoKSA9PiB7XHJcbiAgICBmb3JtQnV0dG9uQ2xpY2tlZCgpXHJcbiAgICBjaGVja0NsaWNrKCk7XHJcbiAgICBmb3JtQWRkQnV0dG9uQ2xpY2tlZCgpO1xyXG4gICAgZm9ybUR1ZURhdGVDbGljaygpO1xyXG4gICAgZm9ybUNhbmNlbENsaWNrKCk7XHJcbiAgICBjbGlja1Rhc2soKTtcclxuICAgIGRlc2VsZWN0VGFzaygpO1xyXG4gICAgZGVsZXRlQ2xpY2soKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcnVuRXZlbnRIYW5kbGVycztcclxuIiwiY2xhc3MgVGFzayB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgbGlzdCwga2V5KSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgICB0aGlzLmxpc3QgPSBsaXN0O1xyXG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXROYW1lKG5hbWUpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHNldER1ZURhdGUoZHVlRGF0ZSkge1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TGlzdChsaXN0KSB7XHJcbiAgICAgICAgdGhpcy5saXN0ID0gbGlzdDtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFzazsiLCJpbXBvcnQgeyBhZGRUYXNrLCBzbGlkZUluVGFza1ZpZXcgfSBmcm9tIFwiLi9hbmltYXRpb25zXCI7XHJcblxyXG5jb25zdCBpbml0aWFsUGFnZUxvYWQgPSAoKSA9PiB7XHJcbiAgICBsb2FkaW5nUGFnZSgpXHJcbiAgICBjcmVhdGVBbGxUYXNrc0NvbnRhaW5lcigpO1xyXG59XHJcblxyXG5jb25zdCBsb2FkaW5nUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGxvYWRpbmdTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvYWRpbmdTY3JlZW5cIik7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXHJcbiAgICAgICAgYm9keS5zdHlsZS5vdmVyZmxvd1k9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgbG9hZGluZ1NjcmVlbi5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgICAgIGxvYWRpbmdTY3JlZW4ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3dZPSBcInZpc2libGVcIjtcclxuICAgICAgICAgICAgfSwgMzAwKVxyXG4gICAgICAgIH0sIDUwMClcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuLy9BTEwgVEFTS1MgQ09OVEVOVFxyXG5jb25zdCBjcmVhdGVBbGxUYXNrc0NvbnRhaW5lciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGFsbFRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhbGxUYXNrc0NvbnRhaW5lci5pZCA9IFwiYWxsVGFza3NDb250YWluZXJcIjtcclxuICAgIGFsbFRhc2tzQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwidGFza3NDb250YWluZXJcIjtcclxuICAgIFxyXG4gICAgY29uc3QgYWxsVGFza3NUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWxsVGFza3NUaXRsZS5pZCA9ICd0aXRsZUNvbnRhaW5lcic7XHJcbiAgICBhbGxUYXNrc1RpdGxlLmNsYXNzTmFtZSA9IFwidGFza3NUaXRsZVwiO1xyXG4gICAgYWxsVGFza3NUaXRsZS5pbm5lclRleHQgPSBcIkFsbCBUYXNrc1wiO1xyXG4gICAgYWxsVGFza3NDb250YWluZXIuYXBwZW5kKGFsbFRhc2tzVGl0bGUpO1xyXG5cclxuICAgIGNyZWF0ZVN1Ykdyb3VwcyhcInRvZGF5XCIsIGFsbFRhc2tzQ29udGFpbmVyKTtcclxuICAgIGNyZWF0ZVN1Ykdyb3VwcyhcInRvbW9ycm93XCIsIGFsbFRhc2tzQ29udGFpbmVyKTtcclxuICAgIGNyZWF0ZVN1Ykdyb3VwcyhcInVwY29taW5nXCIsIGFsbFRhc2tzQ29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnRDb250YWluZXInKTtcclxuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kKGFsbFRhc2tzQ29udGFpbmVyKTtcclxufVxyXG5cclxuY29uc3QgY3JlYXRlU3ViR3JvdXBzID0gKGdyb3VwLCBhbGxUYXNrc0NvbnRhaW5lcikgPT4ge1xyXG4gICAgY29uc3QgY2FwaXRhbGl6ZSA9IChzdHIpID0+IHtcclxuICAgICAgICByZXR1cm4gc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdWJHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc3ViR3JvdXAuY2xhc3NOYW1lID0gXCJzdWJHcm91cFwiO1xyXG4gICAgc3ViR3JvdXAuaWQgPSBncm91cDtcclxuXHJcbiAgICBjb25zdCBzdWJHcm91cFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgc3ViR3JvdXBUaXRsZS5jbGFzc05hbWUgPSBcInN1Ykdyb3VwVGl0bGVcIjtcclxuICAgIHN1Ykdyb3VwVGl0bGUuaW5uZXJUZXh0ID0gY2FwaXRhbGl6ZShncm91cCk7XHJcblxyXG4gICAgc3ViR3JvdXAuYXBwZW5kKHN1Ykdyb3VwVGl0bGUpXHJcbiAgICBhbGxUYXNrc0NvbnRhaW5lci5hcHBlbmQoc3ViR3JvdXApO1xyXG59ICAgXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRhc2tDb250YWluZXIgPSAodGFzaywgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGtleSkgPT4ge1xyXG4gICAgY29uc3QgdGFza0NvbnRhaW5lclNoYWRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIFxyXG4gICAgdGFza0NvbnRhaW5lclNoYWRvdy5jbGFzc05hbWUgPSAndGFza0NvbnRhaW5lclNoYWRvdyc7XHJcblxyXG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGFza0NvbnRhaW5lci5jbGFzc05hbWUgPSAndGFza0NvbnRhaW5lcic7XHJcbiAgICB0YXNrQ29udGFpbmVyLmlkID0ga2V5O1xyXG5cclxuICAgIGNvbnN0IGNoZWNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjaGVja0NvbnRhaW5lci5jbGFzc05hbWUgPSAnY2hlY2tDb250YWluZXInO1xyXG4gICAgY2hlY2tDb250YWluZXIuaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjx0aXRsZT5pb25pY29ucy12NS1xPC90aXRsZT48Y2lyY2xlIGN4PVwiMjU2XCIgY3k9XCIyNTZcIiByPVwiMTkyXCIgc3R5bGU9XCJmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDozMnB4XCIvPjwvc3ZnPidcclxuXHJcbiAgICBjb25zdCBuYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIG5hbWVDb250YWluZXIuY2xhc3NOYW1lID0nbmFtZUNvbnRhaW5lcic7XHJcbiAgICBuYW1lQ29udGFpbmVyLmlubmVyVGV4dCA9IHRhc2s7XHJcblxyXG4gICAgY29uc3QgZGVsZXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkZWxldGVDb250YWluZXIuY2xhc3NOYW1lID0gJ2RlbGV0ZUNvbnRhaW5lcic7XHJcbiAgICBkZWxldGVDb250YWluZXIuaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjx0aXRsZT5pb25pY29ucy12NS1tPC90aXRsZT48cGF0aCBkPVwiTTI1Niw0OEMxNDEuMzEsNDgsNDgsMTQxLjMxLDQ4LDI1NnM5My4zMSwyMDgsMjA4LDIwOCwyMDgtOTMuMzEsMjA4LTIwOFMzNzAuNjksNDgsMjU2LDQ4Wm03NS4zMSwyNjAuNjlhMTYsMTYsMCwxLDEtMjIuNjIsMjIuNjJMMjU2LDI3OC42M2wtNTIuNjksNTIuNjhhMTYsMTYsMCwwLDEtMjIuNjItMjIuNjJMMjMzLjM3LDI1NmwtNTIuNjgtNTIuNjlhMTYsMTYsMCwwLDEsMjIuNjItMjIuNjJMMjU2LDIzMy4zN2w1Mi42OS01Mi42OGExNiwxNiwwLDAsMSwyMi42MiwyMi42MkwyNzguNjMsMjU2WlwiLz48L3N2Zz4nO1xyXG5cclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5jbGFzc05hbWUgPSAnZGVzY3JpcHRpb25Db250YWluZXInO1xyXG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuaW5uZXJUZXh0ID0gZGVzY3JpcHRpb247XHJcblxyXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmQoY2hlY2tDb250YWluZXIpO1xyXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmQobmFtZUNvbnRhaW5lcik7XHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZChkZWxldGVDb250YWluZXIpO1xyXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmQoZGVzY3JpcHRpb25Db250YWluZXIpO1xyXG4gICAgXHJcbiAgICBsZXQgc3ViR3JvdXA7XHJcbiAgICBpZiAoZHVlRGF0ZSA9PSAndG9kYXknKSB7XHJcbiAgICAgICAgc3ViR3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kYXknKTtcclxuICAgIH0gZWxzZSBpZiAoZHVlRGF0ZSA9PSAndG9tb3Jyb3cnKSB7XHJcbiAgICAgICAgc3ViR3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9tb3Jyb3cnKTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJHcm91cC5pbnNlcnRCZWZvcmUodGFza0NvbnRhaW5lciwgc3ViR3JvdXAuY2hpbGRyZW5bMV0pO1xyXG4gICAgXHJcbiAgICBhZGRUYXNrKHRhc2tDb250YWluZXIpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVUYXNrVmlldyA9ICh0YXNrLCB0YXNrQ29udGFpbmVyKSA9PiB7XHJcbiAgICBjb25zdCB0YXNrVmlld0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGFza1ZpZXdDb250YWluZXIuY2xhc3NOYW1lID0gJ3Rhc2tWaWV3Q29udGFpbmVyJztcclxuICAgIHRhc2tWaWV3Q29udGFpbmVyLmlkID0gXCJzXCIgKyB0YXNrLmtleTtcclxuXHJcbiAgICBjb25zdCB0YXNrVmlld05hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRhc2tWaWV3TmFtZUNvbnRhaW5lci5jbGFzc05hbWUgPSBcInRhc2tWaWV3TmFtZUNvbnRhaW5lclwiO1xyXG4gICAgdGFza1ZpZXdDb250YWluZXIuYXBwZW5kKHRhc2tWaWV3TmFtZUNvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3QgY2hlY2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNoZWNrQ29udGFpbmVyLmNsYXNzTmFtZSA9ICd0YXNrVmlld0NoZWNrQ29udGFpbmVyJztcclxuICAgIGNoZWNrQ29udGFpbmVyLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48dGl0bGU+aW9uaWNvbnMtdjUtcTwvdGl0bGU+PGNpcmNsZSBjeD1cIjI1NlwiIGN5PVwiMjU2XCIgcj1cIjE5MlwiIHN0eWxlPVwiZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MzJweFwiLz48L3N2Zz4nO1xyXG4gICAgdGFza1ZpZXdOYW1lQ29udGFpbmVyLmFwcGVuZChjaGVja0NvbnRhaW5lcilcclxuXHJcbiAgICBjb25zdCB0YXNrVmlld05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0YXNrVmlld05hbWUuY2xhc3NOYW1lID0gXCJ0YXNrVmlld05hbWVcIjtcclxuICAgIHRhc2tWaWV3TmFtZS5pbm5lclRleHQgPSB0YXNrLm5hbWVcclxuICAgIHRhc2tWaWV3TmFtZUNvbnRhaW5lci5hcHBlbmQodGFza1ZpZXdOYW1lKTtcclxuXHJcbiAgICBjb25zdCB0YXNrVmlld0Rlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YXNrVmlld0Rlc2NyaXB0aW9uQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwidGFza1ZpZXdEZXNjcmlwdGlvbkNvbnRhaW5lclwiO1xyXG4gICAgdGFza1ZpZXdEZXNjcmlwdGlvbkNvbnRhaW5lci5pbm5lclRleHQgPSBcIkRlc2NyaXB0aW9uOlwiO1xyXG4gICAgdGFza1ZpZXdDb250YWluZXIuYXBwZW5kKHRhc2tWaWV3RGVzY3JpcHRpb25Db250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IHRhc2tWaWV3RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0YXNrVmlld0Rlc2NyaXB0aW9uLmNsYXNzTmFtZSA9IFwidGFza1ZpZXdEZXNjcmlwdGlvblwiO1xyXG4gICAgdGFza1ZpZXdEZXNjcmlwdGlvbi5pbm5lclRleHQgPSB0YXNrLmRlc2NyaXB0aW9uO1xyXG4gICAgdGFza1ZpZXdEZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmQodGFza1ZpZXdEZXNjcmlwdGlvbilcclxuXHJcbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrc0NvbnRhaW5lcicpO1xyXG4gICAgdGFza3NDb250YWluZXIuc3R5bGUudHJhbnNpdGlvbiA9IFwiYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjUsIDAsIDAuNSwgMSlcIjtcclxuXHJcbiAgICBpZiAodGFza0NvbnRhaW5lci5jbGFzc05hbWUuaW5jbHVkZXMoJ2NvbXBsZXRlZCcpKSB7XHJcbiAgICAgICAgY2hlY2tDb250YWluZXIuc3R5bGUuYW5pbWF0aW9uID0gXCJjaGVja0NsaWNrIDAuM3MgZWFzZS1vdXRcIjtcclxuICAgICAgICBjaGVja0NvbnRhaW5lci5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHRpdGxlPmlvbmljb25zLXY1LWU8L3RpdGxlPjxwYXRoIGQ9XCJNMjU2LDQ4QzE0MS4zMSw0OCw0OCwxNDEuMzEsNDgsMjU2czkzLjMxLDIwOCwyMDgsMjA4LDIwOC05My4zMSwyMDgtMjA4UzM3MC42OSw0OCwyNTYsNDhaTTM2NC4yNSwxODYuMjlsLTEzNC40LDE2MGExNiwxNiwwLDAsMS0xMiw1LjcxaC0uMjdhMTYsMTYsMCwwLDEtMTEuODktNS4zbC01Ny42LTY0YTE2LDE2LDAsMSwxLDIzLjc4LTIxLjRsNDUuMjksNTAuMzJMMzM5Ljc1LDE2NS43MWExNiwxNiwwLDAsMSwyNC41LDIwLjU4WlwiLz48L3N2Zz4nO1xyXG4gICAgICAgIHRhc2tWaWV3TmFtZS5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQnKTtcclxuICAgICAgICBjaGVja0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQnKTtcclxuICAgIH0gICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIHNsaWRlSW5UYXNrVmlldyh0YXNrc0NvbnRhaW5lciwgdGFza1ZpZXdDb250YWluZXIpO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxQYWdlTG9hZDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0aWFsUGFnZUxvYWQgZnJvbSBcIi4vbW9kdWxlcy91aVwiO1xyXG5pbXBvcnQgVGFzayBmcm9tIFwiLi9tb2R1bGVzL3Rhc2tcIjtcclxuaW1wb3J0IHsgZXhhbXBsZVRhc2tzIH0gZnJvbSBcIi4vbW9kdWxlcy9jcmVhdGUtdGFza1wiO1xyXG5pbXBvcnQgcnVuRXZlbnRIYW5kbGVycyBmcm9tIFwiLi9tb2R1bGVzL2V2ZW50LWhhbmRsZXJzXCI7XHJcblxyXG5pbml0aWFsUGFnZUxvYWQoKTtcclxuZXhhbXBsZVRhc2tzKCk7XHJcbnJ1bkV2ZW50SGFuZGxlcnMoKTtcclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=