/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/animations/checkedTaskAnimation.js":
/*!********************************************************!*\
  !*** ./src/modules/animations/checkedTaskAnimation.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkAnimation);

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
    let key = 0
    if (allTasks.length > 0) {
        for (let i = 0; i < allTasks.length; i++) {
            if (allTasks[i].key == key) {
                key++;
            }
        }
    }
    let newTask = new _task__WEBPACK_IMPORTED_MODULE_0__["default"](task, description, dueDate, list, key);
    allTasks.push(newTask);
    (0,_ui__WEBPACK_IMPORTED_MODULE_1__.createTaskContainer)(task, description, dueDate, key);
}



const exampleTasks = () => {
    createTask("Exercise", "Workout out for 45 minutes", "today", '');
    createTask("Coffee with friend", "Starbucks", "today", '');
    createTask("Cooking class", "Bring homemade pie", "today", '');
    createTask("Exercise", "Workout out for 45 minutes", "today", '');
    createTask("Coffee with friend", "Starbucks", "today", '');
    createTask("Cooking class", "Bring homemade pie", "today", '');
    createTask("Exercise", "Workout out for 45 minutes", "today", '');
    createTask("Coffee with friend", "Starbucks", "today", '');
    createTask("Cooking class", "Bring homemade pie", "today", '');
    createTask("Exercise", "Workout out for 45 minutes", "today", '');




    createTask("Read", "Read two chapter", "tomorrow", '');
    createTask("Learn sign language", "Practice english alphabet", "tomorrow", '');
    
    console.log(allTasks)
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
/* harmony import */ var _animations_checkedTaskAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations/checkedTaskAnimation */ "./src/modules/animations/checkedTaskAnimation.js");





const addButton = document.querySelector('#addButton');
const formAddButton = document.querySelector('#taskFormAddButton');
const inputTaskName = document.querySelector('#inputTaskName');
const inputTaskDescription = document.querySelector('#inputTaskDescription');
const inputDueDate = document.querySelectorAll('.inputDueDate');
const formContainer = document.querySelector("#taskFormContainer");
const form = document.querySelector("#taskForm");
const taskContainer = document.querySelector(".taskContainer");
const contentContainer = document.querySelector("#contentContainer")

const buttonClicked = () => {
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

const dueDateClick = () => {
    inputDueDate.forEach(dueDate =>{
        dueDate.addEventListener('click', (e)=> {
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

const selectTask = () => {
    contentContainer.addEventListener('click', (e)=> {
        const target = e.target;
        if (target.className == "taskContainer" || target.className == "taskContainer completed") {
            taskSelection(target);
        }
    })
}

const deselectTask = () => {
    contentContainer.addEventListener('click', (e)=> {
        const target = e.target
        if (target == document.querySelector('#contentContainer')) {
            removeTaskView();
        } else if (document.querySelector('.taskViewContainer')) {
            if (document.querySelector('.taskViewContainer').id == 's' + target.id) {
                removeTaskView()
            }
        }
    })
}

const removeTaskView = () => {
    const taskViewContainer = document.querySelector('.taskViewContainer'); 
    if (taskViewContainer) {   
        const tasksContainer = document.querySelector('.tasksContainer');
        taskViewContainer.remove();
        tasksContainer.style.transition = "none";
        tasksContainer.style.margin = "38px auto auto auto";
        tasksContainer.style.transform = "translateX(-30%)";
        setTimeout(()=> {
            tasksContainer.style.transition = "transform 0.15s ease";
            tasksContainer.style.transform = "translateX(0)"; 
        },10)
    } else {
        return
    }
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
            return
        } else {
            taskView.remove();
        }
    } else {
        document.querySelector('.tasksContainer').style.transform = "translateX(-30%)";
    }
    (0,_ui__WEBPACK_IMPORTED_MODULE_1__.createTaskView)(selectedTask, taskContainer);  
}


const checkClick = () => {
    document.addEventListener('click', (e)=> {
        if (e.target.parentNode.className == 'checkContainer'|| e.target.parentNode.className == 'checkContainer completed') {
            const element = e.target.parentNode;
            (0,_animations_checkedTaskAnimation__WEBPACK_IMPORTED_MODULE_2__["default"])(element);
        }
    })
}

const deleteClick = () => {
    document.querySelector('#contentContainer').addEventListener('click', (e)=> {
        if (e.target.parentNode.className == 'deleteContainer' || e.target.parentNode.className == 'deleteContainer completed') {
            const taskContainer = e.target.parentNode.parentNode;

            const taskContainerHeight = taskContainer.clientHeight;
            taskContainer.style.opacity = "0";
            taskContainer.transform = "translateY(-100%)";
            taskContainer.style.marginBottom = "-" + taskContainerHeight + "px";
            
            setTimeout(()=> {
                taskContainer.remove();
            },200)
            
        }
    })
}

const taskContainerHover = () => {
    document.querySelector('.tasksContainer').addEventListener('mouseover', (e)=> {
        if (e.target.className == 'taskContainer') {
            const taskContainer = e.target;
            const deleteContainer = taskContainer.children[2];
            deleteContainer.style.opacity = "1";

            taskContainer.addEventListener('mouseleave', ()=> {
                if (!taskContainer.className.includes('completed')) {
                    deleteContainer.style.opacity = '0';
                }
            })
        } 
    })
}


const runEventHandlers = () => {
    checkClick();
    formAddButtonClicked();
    dueDateClick();
    formCancelClick();
    selectTask();
    deselectTask();
    taskContainerHover();
    deleteClick()
    buttonClicked()
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
    
    taskContainer.style.opacity = "0";
    setTimeout(()=> {
        taskContainer.style.animation = "taskContainerAdd 0.6s ease-in-out";
        taskContainer.style.opacity = "1";
    },50)
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
    tasksContainer.style.transition = "all 0.15s ease";


    if (taskContainer.className.includes('completed')) {
        checkContainer.style.animation = "checkClick 0.3s ease-out";
        checkContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><title>ionicons-v5-e</title><path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM364.25,186.29l-134.4,160a16,16,0,0,1-12,5.71h-.27a16,16,0,0,1-11.89-5.3l-57.6-64a16,16,0,1,1,23.78-21.4l45.29,50.32L339.75,165.71a16,16,0,0,1,24.5,20.58Z"/></svg>';
        checkContainer.style.filter = "brightness(0) saturate(100%) invert(74%) sepia(13%) saturate(227%) hue-rotate(177deg) brightness(103%) contrast(97%)";
    
        taskViewName.style.backgroundSize = "100% 100%";
        taskViewName.style.color = "#697384bd";     
    }                 



    setTimeout(()=> {
        tasksContainer.style.transition = "all 0s linear";

        tasksContainer.style.margin = "38px 0 auto 30%";
        tasksContainer.style.transform = "translateX(0)";

        const contentContainer = document.querySelector('#contentContainer');
        contentContainer.append(taskViewContainer);
        taskViewContainer.style.transform = "translateX(25vw)";
        setTimeout(()=> {
            taskViewContainer.style.opacity = "1";
            taskViewContainer.style.width = "400px"
            taskViewContainer.style.opacity = "1"
            taskViewContainer.style.transform = "translateX(0)";
        },10)
        
    },150)

    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzTkFBc04sWUFBWSxxQkFBcUIsc0JBQXNCO0FBQzdRO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEdIO0FBQ2U7QUFDekM7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNkNBQUk7QUFDMUI7QUFDQSxJQUFJLHdEQUFtQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsVUFBVSxFQUFDO0FBQzFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q3VDO0FBQ0Q7QUFDRztBQUNzQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixZQUFZLHlEQUFVO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix1REFBYTtBQUN0QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLElBQUksbURBQWM7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDRFQUFjO0FBQzFCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxnQkFBZ0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDMUxoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7O0FDakNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvTUFBb00sWUFBWSxxQkFBcUIsc0JBQXNCO0FBQzNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb01BQW9NLFlBQVkscUJBQXFCLHNCQUFzQjtBQUMzUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGVBQWUsRUFBQzs7Ozs7OztVQzFML0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ04yQztBQUNUO0FBQ21CO0FBQ0c7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBZTtBQUNmLGtFQUFZO0FBQ1osbUVBQWdCO0FBQ2hCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9hbmltYXRpb25zL2NoZWNrZWRUYXNrQW5pbWF0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NyZWF0ZS10YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2V2ZW50LWhhbmRsZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdWkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRhc2tWaWV3Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tWaWV3Q29udGFpbmVyJyk7XHJcbmNvbnN0IHRhc2tWaWV3Q2hlY2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1ZpZXdDaGVja0NvbnRhaW5lcicpO1xyXG5jb25zdCB0YXNrVmlld05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1ZpZXdOYW1lJyk7XHJcblxyXG5sZXQgY2hlY2tDb250YWluZXI7XHJcbmxldCBjaGVja2VkVGFzaztcclxubGV0IHRhc2tOYW1lO1xyXG5sZXQgZGVsZXRlQ29udGFpbmVyO1xyXG5cclxuY29uc3Qgc2VsZWN0Q2hlY2tlZFRhc2tFbGVtZW50cyA9IChlbGVtZW50KSA9PiB7XHJcbiAgICBjaGVja0NvbnRhaW5lciA9IGVsZW1lbnQ7XHJcbiAgICBjaGVja2VkVGFzayA9IGVsZW1lbnQucGFyZW50Tm9kZTtcclxuICAgIHRhc2tOYW1lID0gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICBkZWxldGVDb250YWluZXIgPSB0YXNrTmFtZS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbn1cclxuXHJcbmNvbnN0IGNoZWNrQW5pbWF0aW9uID0gKGVsZW1lbnQpID0+IHtcclxuICAgIHNlbGVjdENoZWNrZWRUYXNrRWxlbWVudHMoZWxlbWVudCk7XHJcblxyXG4gICAgaWYgKCFjaGVja2VkVGFzay5jbGFzc05hbWUuaW5jbHVkZXMoJ2NvbXBsZXRlZCcpKSB7XHJcbiAgICAgICAgdGFza0NvbXBsZXRpb25Ub2dnbGUoJ3Rhc2snKTtcclxuICAgICAgICBpZiAodGFza1ZpZXdDb250YWluZXIgJiYgdGFza1ZpZXdDb250YWluZXIuaWQgPT0gJ3MnKyBjaGVja2VkVGFzay5pZCkge1xyXG4gICAgICAgICAgICB0YXNrQ29tcGxldGlvblRvZ2dsZSgndGFza1ZpZXcnKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGNoZWNrZWRUYXNrLmNsYXNzTmFtZS5pbmNsdWRlcygnY29tcGxldGVkJykpIHtcclxuICAgICAgICB0YXNrQ29tcGxldGlvblRvZ2dsZSgndGFzaycsICdjb21wbGV0ZWQnKTtcclxuICAgICAgICBpZiAodGFza1ZpZXdDb250YWluZXIgJiYgdGFza1ZpZXdDb250YWluZXIuaWQgPT0gJ3MnKyBjaGVja2VkVGFzay5pZCkge1xyXG4gICAgICAgICAgICB0YXNrQ29tcGxldGlvblRvZ2dsZSgndGFza1ZpZXcnLCAnY29tcGxldGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSB0YXNrTmFtZS5wYXJlbnROb2RlO1xyXG4gICAgY29uc3QgdGFza0NvbnRhaW5lckhlaWdodCA9IHRhc2tDb250YWluZXIuY2xpZW50SGVpZ2h0O1xyXG4gICAgY29uc3Qgc3ViR3JvdXAgPSB0YXNrQ29udGFpbmVyLnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCBzcGFjZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBzcGFjZXIuc3R5bGUuaGVpZ2h0ID0gdGFza0NvbnRhaW5lckhlaWdodCArIFwicHhcIjtcclxuICAgIHNwYWNlci5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIi1cIiArIHRhc2tDb250YWluZXJIZWlnaHQgKyBcInB4XCI7XHJcbiAgICBzcGFjZXIuc3R5bGUudHJhbnNpdGlvbiA9IFwiYWxsIGVhc2UtaW4tb3V0IDAuMnNcIjtcclxuICAgIFxyXG4gICAgaWYgKGNoZWNrZWRUYXNrLmNsYXNzTmFtZS5pbmNsdWRlcygnY29tcGxldGVkJykgJiYgdGFza0NvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmcpIHtcclxuICAgICAgICBzdWJHcm91cC5hcHBlbmQoc3BhY2VyKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIi1cIiArIHRhc2tDb250YWluZXJIZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgICAgIHNwYWNlci5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xyXG4gICAgICAgIH0sMzAwKVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcclxuICAgICAgICAgICAgc3BhY2VyLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBzdWJHcm91cC5hcHBlbmQodGFza0NvbnRhaW5lcik7XHJcbiAgICAgICAgfSw1MDApXHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgICAgICB9LDYwMClcclxuICAgIH0gZWxzZSBpZiAoIWNoZWNrZWRUYXNrLmNsYXNzTmFtZS5pbmNsdWRlcygnY29tcGxldGVkJykgJiYgdGFza0NvbnRhaW5lciAhPSBzdWJHcm91cC5jaGlsZHJlblsxXSkge1xyXG4gICAgICAgIHN1Ykdyb3VwLmluc2VydEJlZm9yZShzcGFjZXIsIHN1Ykdyb3VwLmNoaWxkcmVuWzFdKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIi1cIiArIHRhc2tDb250YWluZXJIZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgICAgIHNwYWNlci5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xyXG4gICAgICAgIH0sMzAwKVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcclxuICAgICAgICAgICAgc3BhY2VyLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBzdWJHcm91cC5pbnNlcnRCZWZvcmUodGFza0NvbnRhaW5lciwgc3ViR3JvdXAuY2hpbGRyZW5bMV0pO1xyXG4gICAgICAgIH0sNTAwKVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcbiAgICAgICAgfSw2MDApXHJcbiAgICB9ICAgXHJcbn1cclxuXHJcbmNvbnN0IHRhc2tDb21wbGV0aW9uVG9nZ2xlID0gKHR5cGUsIHN0YXRlKSA9PiB7XHJcbiAgICBpZiAodHlwZSA9PSAndGFzaycpIHtcclxuICAgICAgICBjaGVja2VkVGFzay5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQnKTtcclxuICAgICAgICB0YXNrTmFtZS5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQnKTtcclxuICAgICAgICBjaGVja0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQnKTtcclxuICAgICAgICBkZWxldGVDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGVkJyk7XHJcbiAgICAgICAgaWYgKHN0YXRlID09ICdjb21wbGV0ZWQnKSB7XHJcbiAgICAgICAgICAgIGNoZWNrQ29udGFpbmVyLmlubmVySFRNTCA9IGNoZWNrU3R5bGluZygnY29tcGxldGVkJywgMjApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNoZWNrQ29udGFpbmVyLmlubmVySFRNTCA9IGNoZWNrU3R5bGluZygnJywgMjApO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PSAndGFza1ZpZXcnKSB7XHJcbiAgICAgICAgdGFza1ZpZXdDaGVja0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQnKTtcclxuICAgICAgICB0YXNrVmlld05hbWUuY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGVkJyk7XHJcbiAgICAgICAgaWYgKHN0YXRlID09ICdjb21wbGV0ZWQnKSB7XHJcbiAgICAgICAgICAgIHRhc2tWaWV3Q2hlY2tDb250YWluZXIuaW5uZXJIVE1MID0gY2hlY2tTdHlsaW5nKCdjb21wbGV0ZWQnLCAyNSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGFza1ZpZXdDaGVja0NvbnRhaW5lci5pbm5lckhUTUwgPSBjaGVja1N0eWxpbmcoJycsIDI1KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGNoZWNrU3R5bGluZyA9IChzdGF0ZSwgc2l6ZSkgPT4ge1xyXG4gICAgaWYgKHN0YXRlID09ICdjb21wbGV0ZWQnKSByZXR1cm4gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiJytzaXplKydcIiBoZWlnaHQ9XCInK3NpemUrJ1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjx0aXRsZT5pb25pY29ucy12NS1xPC90aXRsZT48Y2lyY2xlIGN4PVwiMjU2XCIgY3k9XCIyNTZcIiByPVwiMTkyXCIgc3R5bGU9XCJmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDozMnB4XCIvPjwvc3ZnPic7XHJcbiAgICBlbHNlIHJldHVybiAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCInK3NpemUrJ1wiIGhlaWdodD1cIicrc2l6ZSsnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHRpdGxlPmlvbmljb25zLXY1LWU8L3RpdGxlPjxwYXRoIGQ9XCJNMjU2LDQ4QzE0MS4zMSw0OCw0OCwxNDEuMzEsNDgsMjU2czkzLjMxLDIwOCwyMDgsMjA4LDIwOC05My4zMSwyMDgtMjA4UzM3MC42OSw0OCwyNTYsNDhaTTM2NC4yNSwxODYuMjlsLTEzNC40LDE2MGExNiwxNiwwLDAsMS0xMiw1LjcxaC0uMjdhMTYsMTYsMCwwLDEtMTEuODktNS4zbC01Ny42LTY0YTE2LDE2LDAsMSwxLDIzLjc4LTIxLjRsNDUuMjksNTAuMzJMMzM5Ljc1LDE2NS43MWExNiwxNiwwLDAsMSwyNC41LDIwLjU4WlwiLz48L3N2Zz4nO1xyXG4gfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoZWNrQW5pbWF0aW9uOyIsImltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcclxuaW1wb3J0IHtjcmVhdGVUYXNrQ29udGFpbmVyfSBmcm9tIFwiLi91aVwiO1xyXG5cclxuZXhwb3J0IGxldCBhbGxUYXNrcyA9IFtdO1xyXG5cclxuXHJcbmNvbnN0IGNyZWF0ZVRhc2sgPSAodGFzaywgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGxpc3QpID0+IHtcclxuICAgIGxldCBrZXkgPSAwXHJcbiAgICBpZiAoYWxsVGFza3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsVGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGFsbFRhc2tzW2ldLmtleSA9PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgIGtleSsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IG5ld1Rhc2sgPSBuZXcgVGFzayh0YXNrLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgbGlzdCwga2V5KTtcclxuICAgIGFsbFRhc2tzLnB1c2gobmV3VGFzayk7XHJcbiAgICBjcmVhdGVUYXNrQ29udGFpbmVyKHRhc2ssIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBrZXkpO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBleGFtcGxlVGFza3MgPSAoKSA9PiB7XHJcbiAgICBjcmVhdGVUYXNrKFwiRXhlcmNpc2VcIiwgXCJXb3Jrb3V0IG91dCBmb3IgNDUgbWludXRlc1wiLCBcInRvZGF5XCIsICcnKTtcclxuICAgIGNyZWF0ZVRhc2soXCJDb2ZmZWUgd2l0aCBmcmllbmRcIiwgXCJTdGFyYnVja3NcIiwgXCJ0b2RheVwiLCAnJyk7XHJcbiAgICBjcmVhdGVUYXNrKFwiQ29va2luZyBjbGFzc1wiLCBcIkJyaW5nIGhvbWVtYWRlIHBpZVwiLCBcInRvZGF5XCIsICcnKTtcclxuICAgIGNyZWF0ZVRhc2soXCJFeGVyY2lzZVwiLCBcIldvcmtvdXQgb3V0IGZvciA0NSBtaW51dGVzXCIsIFwidG9kYXlcIiwgJycpO1xyXG4gICAgY3JlYXRlVGFzayhcIkNvZmZlZSB3aXRoIGZyaWVuZFwiLCBcIlN0YXJidWNrc1wiLCBcInRvZGF5XCIsICcnKTtcclxuICAgIGNyZWF0ZVRhc2soXCJDb29raW5nIGNsYXNzXCIsIFwiQnJpbmcgaG9tZW1hZGUgcGllXCIsIFwidG9kYXlcIiwgJycpO1xyXG4gICAgY3JlYXRlVGFzayhcIkV4ZXJjaXNlXCIsIFwiV29ya291dCBvdXQgZm9yIDQ1IG1pbnV0ZXNcIiwgXCJ0b2RheVwiLCAnJyk7XHJcbiAgICBjcmVhdGVUYXNrKFwiQ29mZmVlIHdpdGggZnJpZW5kXCIsIFwiU3RhcmJ1Y2tzXCIsIFwidG9kYXlcIiwgJycpO1xyXG4gICAgY3JlYXRlVGFzayhcIkNvb2tpbmcgY2xhc3NcIiwgXCJCcmluZyBob21lbWFkZSBwaWVcIiwgXCJ0b2RheVwiLCAnJyk7XHJcbiAgICBjcmVhdGVUYXNrKFwiRXhlcmNpc2VcIiwgXCJXb3Jrb3V0IG91dCBmb3IgNDUgbWludXRlc1wiLCBcInRvZGF5XCIsICcnKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICBjcmVhdGVUYXNrKFwiUmVhZFwiLCBcIlJlYWQgdHdvIGNoYXB0ZXJcIiwgXCJ0b21vcnJvd1wiLCAnJyk7XHJcbiAgICBjcmVhdGVUYXNrKFwiTGVhcm4gc2lnbiBsYW5ndWFnZVwiLCBcIlByYWN0aWNlIGVuZ2xpc2ggYWxwaGFiZXRcIiwgXCJ0b21vcnJvd1wiLCAnJyk7XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKGFsbFRhc2tzKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGFzaztcclxuXHJcbiIsImltcG9ydCBjcmVhdGVUYXNrIGZyb20gXCIuL2NyZWF0ZS10YXNrXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRhc2tWaWV3IH0gZnJvbSBcIi4vdWlcIjtcclxuaW1wb3J0IHsgYWxsVGFza3MgfSBmcm9tIFwiLi9jcmVhdGUtdGFza1wiO1xyXG5pbXBvcnQgY2hlY2tBbmltYXRpb24gZnJvbSBcIi4vYW5pbWF0aW9ucy9jaGVja2VkVGFza0FuaW1hdGlvblwiO1xyXG5cclxuY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZEJ1dHRvbicpO1xyXG5jb25zdCBmb3JtQWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tGb3JtQWRkQnV0dG9uJyk7XHJcbmNvbnN0IGlucHV0VGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXRUYXNrTmFtZScpO1xyXG5jb25zdCBpbnB1dFRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dFRhc2tEZXNjcmlwdGlvbicpO1xyXG5jb25zdCBpbnB1dER1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXREdWVEYXRlJyk7XHJcbmNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tGb3JtQ29udGFpbmVyXCIpO1xyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrRm9ybVwiKTtcclxuY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza0NvbnRhaW5lclwiKTtcclxuY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudENvbnRhaW5lclwiKVxyXG5cclxuY29uc3QgYnV0dG9uQ2xpY2tlZCA9ICgpID0+IHtcclxuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGZvcm1Db250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgICAgIGZvcm0uc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgICAgIGZvcm0uc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgxKVwiO1xyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgZm9ybUFkZEJ1dHRvbkNsaWNrZWQgPSAoKSA9PiB7XHJcbiAgICBmb3JtQWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKGlucHV0VGFza05hbWUudmFsdWUpIHtcclxuICAgICAgICAgICAgbGV0IGR1ZURhdGU7XHJcbiAgICAgICAgICAgIGlucHV0RHVlRGF0ZS5mb3JFYWNoKChlKSA9PntcclxuICAgICAgICAgICAgICAgIGlmIChlLmNsYXNzTmFtZS5pbmNsdWRlcygnc2VsZWN0ZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGUgPSBlLmlkLnJlcGxhY2UoJ2lucHV0JywgJycpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNyZWF0ZVRhc2soaW5wdXRUYXNrTmFtZS52YWx1ZSwgaW5wdXRUYXNrRGVzY3JpcHRpb24udmFsdWUsIGR1ZURhdGUpO1xyXG4gICAgICAgICAgICBmb3JtQ2FuY2VsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgZHVlRGF0ZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgaW5wdXREdWVEYXRlLmZvckVhY2goZHVlRGF0ZSA9PntcclxuICAgICAgICBkdWVEYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT4ge1xyXG4gICAgICAgICAgICBpbnB1dER1ZURhdGUuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgZHVlRGF0ZS5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBmb3JtQ2FuY2VsQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBmb3JtQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09ICd0YXNrRm9ybUNvbnRhaW5lcicpIHtcclxuICAgICAgICAgICAgZm9ybUNhbmNlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IGZvcm1DYW5jZWwgPSAoKSA9PiB7XHJcbiAgICBmb3JtLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgIGZvcm1Db250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICBmb3JtLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMClcIjtcclxuICAgIGlucHV0VGFza05hbWUudmFsdWUgPSAnJztcclxuICAgIGlucHV0VGFza0Rlc2NyaXB0aW9uLnZhbHVlID0gJyc7XHJcbiAgICBpbnB1dER1ZURhdGUuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJylcclxuICAgIH0pXHJcbiAgICBpbnB1dER1ZURhdGVbMF0uY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcclxufVxyXG5cclxuY29uc3Qgc2VsZWN0VGFzayA9ICgpID0+IHtcclxuICAgIGNvbnRlbnRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PiB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgaWYgKHRhcmdldC5jbGFzc05hbWUgPT0gXCJ0YXNrQ29udGFpbmVyXCIgfHwgdGFyZ2V0LmNsYXNzTmFtZSA9PSBcInRhc2tDb250YWluZXIgY29tcGxldGVkXCIpIHtcclxuICAgICAgICAgICAgdGFza1NlbGVjdGlvbih0YXJnZXQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IGRlc2VsZWN0VGFzayA9ICgpID0+IHtcclxuICAgIGNvbnRlbnRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PiB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXRcclxuICAgICAgICBpZiAodGFyZ2V0ID09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Q29udGFpbmVyJykpIHtcclxuICAgICAgICAgICAgcmVtb3ZlVGFza1ZpZXcoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrVmlld0NvbnRhaW5lcicpKSB7XHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1ZpZXdDb250YWluZXInKS5pZCA9PSAncycgKyB0YXJnZXQuaWQpIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZVRhc2tWaWV3KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IHJlbW92ZVRhc2tWaWV3ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGFza1ZpZXdDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1ZpZXdDb250YWluZXInKTsgXHJcbiAgICBpZiAodGFza1ZpZXdDb250YWluZXIpIHsgICBcclxuICAgICAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrc0NvbnRhaW5lcicpO1xyXG4gICAgICAgIHRhc2tWaWV3Q29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgICAgIHRhc2tzQ29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb24gPSBcIm5vbmVcIjtcclxuICAgICAgICB0YXNrc0NvbnRhaW5lci5zdHlsZS5tYXJnaW4gPSBcIjM4cHggYXV0byBhdXRvIGF1dG9cIjtcclxuICAgICAgICB0YXNrc0NvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoLTMwJSlcIjtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICAgICB0YXNrc0NvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uID0gXCJ0cmFuc2Zvcm0gMC4xNXMgZWFzZVwiO1xyXG4gICAgICAgICAgICB0YXNrc0NvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoMClcIjsgXHJcbiAgICAgICAgfSwxMClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHRhc2tTZWxlY3Rpb24gPSAodGFza0NvbnRhaW5lcikgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRUYXNrID0gYWxsVGFza3MuZmluZCgodGFzayk9PiB7XHJcbiAgICAgICAgaWYgKHRhc2sua2V5ID09IHRhc2tDb250YWluZXIuaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHRhc2tWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tWaWV3Q29udGFpbmVyJylcclxuXHJcbiAgICBpZiAodGFza1ZpZXcpIHtcclxuICAgICAgICBpZiAodGFza1ZpZXcuaWQgPT0gXCJzXCIgKyBzZWxlY3RlZFRhc2sua2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhc2tWaWV3LnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzQ29udGFpbmVyJykuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKC0zMCUpXCI7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVUYXNrVmlldyhzZWxlY3RlZFRhc2ssIHRhc2tDb250YWluZXIpOyAgXHJcbn1cclxuXHJcblxyXG5jb25zdCBjaGVja0NsaWNrID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NOYW1lID09ICdjaGVja0NvbnRhaW5lcid8fCBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTmFtZSA9PSAnY2hlY2tDb250YWluZXIgY29tcGxldGVkJykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZS50YXJnZXQucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgY2hlY2tBbmltYXRpb24oZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgZGVsZXRlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudENvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTmFtZSA9PSAnZGVsZXRlQ29udGFpbmVyJyB8fCBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTmFtZSA9PSAnZGVsZXRlQ29udGFpbmVyIGNvbXBsZXRlZCcpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tDb250YWluZXJIZWlnaHQgPSB0YXNrQ29udGFpbmVyLmNsaWVudEhlaWdodDtcclxuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKC0xMDAlKVwiO1xyXG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiLVwiICsgdGFza0NvbnRhaW5lckhlaWdodCArIFwicHhcIjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9LDIwMClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgdGFza0NvbnRhaW5lckhvdmVyID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzQ29udGFpbmVyJykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gJ3Rhc2tDb250YWluZXInKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgY29uc3QgZGVsZXRlQ29udGFpbmVyID0gdGFza0NvbnRhaW5lci5jaGlsZHJlblsyXTtcclxuICAgICAgICAgICAgZGVsZXRlQ29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuXHJcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0YXNrQ29udGFpbmVyLmNsYXNzTmFtZS5pbmNsdWRlcygnY29tcGxldGVkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGVDb250YWluZXIuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IFxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcbmNvbnN0IHJ1bkV2ZW50SGFuZGxlcnMgPSAoKSA9PiB7XHJcbiAgICBjaGVja0NsaWNrKCk7XHJcbiAgICBmb3JtQWRkQnV0dG9uQ2xpY2tlZCgpO1xyXG4gICAgZHVlRGF0ZUNsaWNrKCk7XHJcbiAgICBmb3JtQ2FuY2VsQ2xpY2soKTtcclxuICAgIHNlbGVjdFRhc2soKTtcclxuICAgIGRlc2VsZWN0VGFzaygpO1xyXG4gICAgdGFza0NvbnRhaW5lckhvdmVyKCk7XHJcbiAgICBkZWxldGVDbGljaygpXHJcbiAgICBidXR0b25DbGlja2VkKClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcnVuRXZlbnRIYW5kbGVycztcclxuIiwiY2xhc3MgVGFzayB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgbGlzdCwga2V5KSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgICB0aGlzLmxpc3QgPSBsaXN0O1xyXG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXROYW1lKG5hbWUpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHNldER1ZURhdGUoZHVlRGF0ZSkge1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TGlzdChsaXN0KSB7XHJcbiAgICAgICAgdGhpcy5saXN0ID0gbGlzdDtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFzazsiLCJjb25zdCBpbml0aWFsUGFnZUxvYWQgPSAoKSA9PiB7XHJcbiAgICBsb2FkaW5nUGFnZSgpXHJcbiAgICBjcmVhdGVBbGxUYXNrc0NvbnRhaW5lcigpO1xyXG59XHJcblxyXG5jb25zdCBsb2FkaW5nUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGxvYWRpbmdTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvYWRpbmdTY3JlZW5cIik7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXHJcbiAgICAgICAgYm9keS5zdHlsZS5vdmVyZmxvd1k9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgbG9hZGluZ1NjcmVlbi5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgICAgIGxvYWRpbmdTY3JlZW4ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3dZPSBcInZpc2libGVcIjtcclxuICAgICAgICB9LCAzMDApXHJcbiAgICAgICAgfSwgNTAwKVxyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG4vL0FMTCBUQVNLUyBDT05URU5UXHJcbmNvbnN0IGNyZWF0ZUFsbFRhc2tzQ29udGFpbmVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYWxsVGFza3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFsbFRhc2tzQ29udGFpbmVyLmlkID0gXCJhbGxUYXNrc0NvbnRhaW5lclwiO1xyXG4gICAgYWxsVGFza3NDb250YWluZXIuY2xhc3NOYW1lID0gXCJ0YXNrc0NvbnRhaW5lclwiO1xyXG5cclxuICAgIFxyXG4gICAgY29uc3QgYWxsVGFza3NUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWxsVGFza3NUaXRsZS5pZCA9ICd0aXRsZUNvbnRhaW5lcic7XHJcbiAgICBhbGxUYXNrc1RpdGxlLmNsYXNzTmFtZSA9IFwidGFza3NUaXRsZVwiO1xyXG4gICAgYWxsVGFza3NUaXRsZS5pbm5lclRleHQgPSBcIkFsbCBUYXNrc1wiO1xyXG5cclxuICAgIGFsbFRhc2tzQ29udGFpbmVyLmFwcGVuZChhbGxUYXNrc1RpdGxlKTtcclxuXHJcblxyXG4gICAgY3JlYXRlU3ViR3JvdXBzKFwidG9kYXlcIiwgYWxsVGFza3NDb250YWluZXIpO1xyXG4gICAgY3JlYXRlU3ViR3JvdXBzKFwidG9tb3Jyb3dcIiwgYWxsVGFza3NDb250YWluZXIpO1xyXG4gICAgY3JlYXRlU3ViR3JvdXBzKFwidXBjb21pbmdcIiwgYWxsVGFza3NDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudENvbnRhaW5lcicpO1xyXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmQoYWxsVGFza3NDb250YWluZXIpO1xyXG5cclxufVxyXG5cclxuY29uc3QgY3JlYXRlU3ViR3JvdXBzID0gKGdyb3VwLCBhbGxUYXNrc0NvbnRhaW5lcikgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNhcGl0YWxpemUgPSAoc3RyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3ViR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHN1Ykdyb3VwLmNsYXNzTmFtZSA9IFwic3ViR3JvdXBcIjtcclxuICAgIHN1Ykdyb3VwLmlkID0gZ3JvdXA7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBzdWJHcm91cFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgc3ViR3JvdXBUaXRsZS5jbGFzc05hbWUgPSBcInN1Ykdyb3VwVGl0bGVcIjtcclxuXHJcblxyXG4gICAgc3ViR3JvdXBUaXRsZS5pbm5lclRleHQgPSBjYXBpdGFsaXplKGdyb3VwKTtcclxuXHJcblxyXG4gICAgc3ViR3JvdXAuYXBwZW5kKHN1Ykdyb3VwVGl0bGUpXHJcblxyXG4gICAgYWxsVGFza3NDb250YWluZXIuYXBwZW5kKHN1Ykdyb3VwKTtcclxufSAgIFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVUYXNrQ29udGFpbmVyID0gKHRhc2ssIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBrZXkpID0+IHtcclxuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRhc2tDb250YWluZXIuY2xhc3NOYW1lID0gJ3Rhc2tDb250YWluZXInO1xyXG4gICAgdGFza0NvbnRhaW5lci5pZCA9IGtleTtcclxuXHJcbiAgICBjb25zdCBjaGVja0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2hlY2tDb250YWluZXIuY2xhc3NOYW1lID0gJ2NoZWNrQ29udGFpbmVyJztcclxuICAgIGNoZWNrQ29udGFpbmVyLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48dGl0bGU+aW9uaWNvbnMtdjUtcTwvdGl0bGU+PGNpcmNsZSBjeD1cIjI1NlwiIGN5PVwiMjU2XCIgcj1cIjE5MlwiIHN0eWxlPVwiZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MzJweFwiLz48L3N2Zz4nXHJcblxyXG4gICAgY29uc3QgbmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBuYW1lQ29udGFpbmVyLmNsYXNzTmFtZSA9J25hbWVDb250YWluZXInO1xyXG4gICAgbmFtZUNvbnRhaW5lci5pbm5lclRleHQgPSB0YXNrO1xyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGVsZXRlQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdkZWxldGVDb250YWluZXInO1xyXG4gICAgZGVsZXRlQ29udGFpbmVyLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48dGl0bGU+aW9uaWNvbnMtdjUtbTwvdGl0bGU+PHBhdGggZD1cIk0yNTYsNDhDMTQxLjMxLDQ4LDQ4LDE0MS4zMSw0OCwyNTZzOTMuMzEsMjA4LDIwOCwyMDgsMjA4LTkzLjMxLDIwOC0yMDhTMzcwLjY5LDQ4LDI1Niw0OFptNzUuMzEsMjYwLjY5YTE2LDE2LDAsMSwxLTIyLjYyLDIyLjYyTDI1NiwyNzguNjNsLTUyLjY5LDUyLjY4YTE2LDE2LDAsMCwxLTIyLjYyLTIyLjYyTDIzMy4zNywyNTZsLTUyLjY4LTUyLjY5YTE2LDE2LDAsMCwxLDIyLjYyLTIyLjYyTDI1NiwyMzMuMzdsNTIuNjktNTIuNjhhMTYsMTYsMCwwLDEsMjIuNjIsMjIuNjJMMjc4LjYzLDI1NlpcIi8+PC9zdmc+JztcclxuXHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdkZXNjcmlwdGlvbkNvbnRhaW5lcic7XHJcbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5pbm5lclRleHQgPSBkZXNjcmlwdGlvbjtcclxuXHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZChjaGVja0NvbnRhaW5lcik7XHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZChuYW1lQ29udGFpbmVyKTtcclxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kKGRlbGV0ZUNvbnRhaW5lcik7XHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZChkZXNjcmlwdGlvbkNvbnRhaW5lcik7XHJcbiAgICBcclxuXHJcbiAgICBsZXQgc3ViR3JvdXA7XHJcbiAgICBpZiAoZHVlRGF0ZSA9PSAndG9kYXknKSB7XHJcbiAgICAgICAgc3ViR3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kYXknKTtcclxuICAgIH0gZWxzZSBpZiAoZHVlRGF0ZSA9PSAndG9tb3Jyb3cnKSB7XHJcbiAgICAgICAgc3ViR3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9tb3Jyb3cnKTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJHcm91cC5pbnNlcnRCZWZvcmUodGFza0NvbnRhaW5lciwgc3ViR3JvdXAuY2hpbGRyZW5bMV0pO1xyXG4gICAgXHJcbiAgICB0YXNrQ29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgdGFza0NvbnRhaW5lci5zdHlsZS5hbmltYXRpb24gPSBcInRhc2tDb250YWluZXJBZGQgMC42cyBlYXNlLWluLW91dFwiO1xyXG4gICAgICAgIHRhc2tDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgfSw1MClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRhc2tWaWV3ID0gKHRhc2ssIHRhc2tDb250YWluZXIpID0+IHtcclxuICAgIGNvbnN0IHRhc2tWaWV3Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YXNrVmlld0NvbnRhaW5lci5jbGFzc05hbWUgPSAndGFza1ZpZXdDb250YWluZXInO1xyXG4gICAgdGFza1ZpZXdDb250YWluZXIuaWQgPSBcInNcIiArIHRhc2sua2V5O1xyXG5cclxuICAgIGNvbnN0IHRhc2tWaWV3TmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGFza1ZpZXdOYW1lQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwidGFza1ZpZXdOYW1lQ29udGFpbmVyXCI7XHJcbiAgICB0YXNrVmlld0NvbnRhaW5lci5hcHBlbmQodGFza1ZpZXdOYW1lQ29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBjaGVja0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2hlY2tDb250YWluZXIuY2xhc3NOYW1lID0gJ3Rhc2tWaWV3Q2hlY2tDb250YWluZXInO1xyXG4gICAgY2hlY2tDb250YWluZXIuaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjx0aXRsZT5pb25pY29ucy12NS1xPC90aXRsZT48Y2lyY2xlIGN4PVwiMjU2XCIgY3k9XCIyNTZcIiByPVwiMTkyXCIgc3R5bGU9XCJmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDozMnB4XCIvPjwvc3ZnPic7XHJcbiAgICB0YXNrVmlld05hbWVDb250YWluZXIuYXBwZW5kKGNoZWNrQ29udGFpbmVyKVxyXG5cclxuICAgIGNvbnN0IHRhc2tWaWV3TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRhc2tWaWV3TmFtZS5jbGFzc05hbWUgPSBcInRhc2tWaWV3TmFtZVwiO1xyXG4gICAgdGFza1ZpZXdOYW1lLmlubmVyVGV4dCA9IHRhc2submFtZVxyXG4gICAgdGFza1ZpZXdOYW1lQ29udGFpbmVyLmFwcGVuZCh0YXNrVmlld05hbWUpO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgdGFza1ZpZXdEZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGFza1ZpZXdEZXNjcmlwdGlvbkNvbnRhaW5lci5jbGFzc05hbWUgPSBcInRhc2tWaWV3RGVzY3JpcHRpb25Db250YWluZXJcIjtcclxuICAgIHRhc2tWaWV3RGVzY3JpcHRpb25Db250YWluZXIuaW5uZXJUZXh0ID0gXCJEZXNjcmlwdGlvblwiO1xyXG4gICAgdGFza1ZpZXdDb250YWluZXIuYXBwZW5kKHRhc2tWaWV3RGVzY3JpcHRpb25Db250YWluZXIpO1xyXG4gICAgXHJcblxyXG4gICAgY29uc3QgdGFza1ZpZXdEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRhc2tWaWV3RGVzY3JpcHRpb24uY2xhc3NOYW1lID0gXCJ0YXNrVmlld0Rlc2NyaXB0aW9uXCI7XHJcbiAgICB0YXNrVmlld0Rlc2NyaXB0aW9uLmlubmVyVGV4dCA9IHRhc2suZGVzY3JpcHRpb247XHJcbiAgICB0YXNrVmlld0Rlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZCh0YXNrVmlld0Rlc2NyaXB0aW9uKVxyXG5cclxuICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzQ29udGFpbmVyJyk7XHJcbiAgICB0YXNrc0NvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uID0gXCJhbGwgMC4xNXMgZWFzZVwiO1xyXG5cclxuXHJcbiAgICBpZiAodGFza0NvbnRhaW5lci5jbGFzc05hbWUuaW5jbHVkZXMoJ2NvbXBsZXRlZCcpKSB7XHJcbiAgICAgICAgY2hlY2tDb250YWluZXIuc3R5bGUuYW5pbWF0aW9uID0gXCJjaGVja0NsaWNrIDAuM3MgZWFzZS1vdXRcIjtcclxuICAgICAgICBjaGVja0NvbnRhaW5lci5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHRpdGxlPmlvbmljb25zLXY1LWU8L3RpdGxlPjxwYXRoIGQ9XCJNMjU2LDQ4QzE0MS4zMSw0OCw0OCwxNDEuMzEsNDgsMjU2czkzLjMxLDIwOCwyMDgsMjA4LDIwOC05My4zMSwyMDgtMjA4UzM3MC42OSw0OCwyNTYsNDhaTTM2NC4yNSwxODYuMjlsLTEzNC40LDE2MGExNiwxNiwwLDAsMS0xMiw1LjcxaC0uMjdhMTYsMTYsMCwwLDEtMTEuODktNS4zbC01Ny42LTY0YTE2LDE2LDAsMSwxLDIzLjc4LTIxLjRsNDUuMjksNTAuMzJMMzM5Ljc1LDE2NS43MWExNiwxNiwwLDAsMSwyNC41LDIwLjU4WlwiLz48L3N2Zz4nO1xyXG4gICAgICAgIGNoZWNrQ29udGFpbmVyLnN0eWxlLmZpbHRlciA9IFwiYnJpZ2h0bmVzcygwKSBzYXR1cmF0ZSgxMDAlKSBpbnZlcnQoNzQlKSBzZXBpYSgxMyUpIHNhdHVyYXRlKDIyNyUpIGh1ZS1yb3RhdGUoMTc3ZGVnKSBicmlnaHRuZXNzKDEwMyUpIGNvbnRyYXN0KDk3JSlcIjtcclxuICAgIFxyXG4gICAgICAgIHRhc2tWaWV3TmFtZS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiMTAwJSAxMDAlXCI7XHJcbiAgICAgICAgdGFza1ZpZXdOYW1lLnN0eWxlLmNvbG9yID0gXCIjNjk3Mzg0YmRcIjsgICAgIFxyXG4gICAgfSAgICAgICAgICAgICAgICAgXHJcblxyXG5cclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgIHRhc2tzQ29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb24gPSBcImFsbCAwcyBsaW5lYXJcIjtcclxuXHJcbiAgICAgICAgdGFza3NDb250YWluZXIuc3R5bGUubWFyZ2luID0gXCIzOHB4IDAgYXV0byAzMCVcIjtcclxuICAgICAgICB0YXNrc0NvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoMClcIjtcclxuXHJcbiAgICAgICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Q29udGFpbmVyJyk7XHJcbiAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmQodGFza1ZpZXdDb250YWluZXIpO1xyXG4gICAgICAgIHRhc2tWaWV3Q29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgyNXZ3KVwiO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgICAgIHRhc2tWaWV3Q29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgICAgICAgICAgdGFza1ZpZXdDb250YWluZXIuc3R5bGUud2lkdGggPSBcIjQwMHB4XCJcclxuICAgICAgICAgICAgdGFza1ZpZXdDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IFwiMVwiXHJcbiAgICAgICAgICAgIHRhc2tWaWV3Q29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgwKVwiO1xyXG4gICAgICAgIH0sMTApXHJcbiAgICAgICAgXHJcbiAgICB9LDE1MClcclxuXHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbFBhZ2VMb2FkO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0aWFsUGFnZUxvYWQgZnJvbSBcIi4vbW9kdWxlcy91aVwiO1xyXG5pbXBvcnQgVGFzayBmcm9tIFwiLi9tb2R1bGVzL3Rhc2tcIjtcclxuaW1wb3J0IHsgZXhhbXBsZVRhc2tzIH0gZnJvbSBcIi4vbW9kdWxlcy9jcmVhdGUtdGFza1wiO1xyXG5pbXBvcnQgcnVuRXZlbnRIYW5kbGVycyBmcm9tIFwiLi9tb2R1bGVzL2V2ZW50LWhhbmRsZXJzXCI7XHJcblxyXG5cclxuXHJcblxyXG5pbml0aWFsUGFnZUxvYWQoKTtcclxuZXhhbXBsZVRhc2tzKCk7XHJcbnJ1bkV2ZW50SGFuZGxlcnMoKTtcclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=