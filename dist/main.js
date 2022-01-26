/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/create-task.js":
/*!************************************!*\
  !*** ./src/modules/create-task.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "exampleTasks": () => (/* binding */ exampleTasks),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/modules/ui.js");



let allTasks = [];


const createTask = (task, description, dueDate, list) => {
    let newTask = new _task__WEBPACK_IMPORTED_MODULE_0__["default"](task, description, dueDate, list);
    allTasks.push(newTask);
    (0,_ui__WEBPACK_IMPORTED_MODULE_1__.createTaskContainer)(task, description, dueDate);
    console.log(allTasks)
    //add task to general task lists array 
    //get ui to check date, and list
    //Determine where to display that task (today, tomorrow, this week, list)
    //run UI.js function to add task elements to the display.
}


const exampleTasks = () => {
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



const addButton = document.querySelector('#addButton');
const formAddButton = document.querySelector('#taskFormAddButton');
const inputTaskName = document.querySelector('#inputTaskName');
const inputTaskDescription = document.querySelector('#inputTaskDescription');
const formContainer = document.querySelector("#taskFormContainer");
const form = document.querySelector("#taskForm");
const taskContainer = document.querySelector(".taskContainer");

const buttonClicked = () => {
    addButton.addEventListener('click', function() {
        formContainer.style.visibility = "visible";
        form.style.opacity = "100";
        form.style.transform = "scale(1)";
    })
}

const formAddButtonClicked = () => {
    formAddButton.addEventListener('click', function() {
        if (inputTaskName.value) {
            (0,_create_task__WEBPACK_IMPORTED_MODULE_0__["default"])(inputTaskName.value, inputTaskDescription.value, "today");
            form.style.opacity = "0";
            formContainer.style.visibility = "hidden";
            inputTaskName.value = '';
            inputTaskDescription.value ='';

        }
    })
}

const formCancel = () => {
    formContainer.addEventListener('click', (e)=>{
        if (e.target.id == 'taskFormContainer') {
            form.style.opacity = "0";
            formContainer.style.visibility = "hidden";
            form.style.transform = "scale(0)";
        }
    })
}


const selectTask = () => {
    document.addEventListener('click', (e)=> {
        const click = e.target;
        if (click.className == "taskContainer" || click.className == "nameContainer" || click.className == "descriptionContainer") {
            const taskViewContainer = document.querySelector('.taskViewContainer')
            if (!taskViewContainer) {
                (0,_ui__WEBPACK_IMPORTED_MODULE_1__.taskSelection)();
            } else {
                return;
            }
        }
    })
}


const checkClick = () => {
    document.addEventListener('click', (e)=> {
        if (e.target.parentNode.className == 'checkContainer' ) {
            const checkedTask = e.target.parentNode.parentNode;
            const taskName = e.target.parentNode.nextElementSibling;
            const deleteContainer = taskName.nextElementSibling;
            const checkContainer = e.target.parentNode;
            
            checkContainer.style.animation = "checkClick 0.3s ease-out";

            if (!checkedTask.className.includes('completed')) {
                checkedTask.classList.add('completed');
                taskName.style.backgroundSize = "100% 100%";
                checkContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><title>ionicons-v5-e</title><path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM364.25,186.29l-134.4,160a16,16,0,0,1-12,5.71h-.27a16,16,0,0,1-11.89-5.3l-57.6-64a16,16,0,1,1,23.78-21.4l45.29,50.32L339.75,165.71a16,16,0,0,1,24.5,20.58Z"/></svg>'
                checkContainer.style.filter = "brightness(0) saturate(100%) invert(74%) sepia(13%) saturate(227%) hue-rotate(177deg) brightness(103%) contrast(97%)";
                deleteContainer.style.opacity = "100";
                
            } else if (checkedTask.className.includes('completed')){
                checkedTask.classList.remove('completed');
                taskName.style.backgroundSize = "0% 100%";
                checkContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><title>ionicons-v5-q</title><circle cx="256" cy="256" r="192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/></svg>'
                checkContainer.style.filter = " brightness(0) saturate(100%) invert(9%) sepia(43%) saturate(338%) hue-rotate(177deg) brightness(100%) contrast(96%)";
                

                setTimeout(()=> {
                    checkContainer.style.animation = "none";
                },10)

                

            }
            const taskContainer = taskName.parentNode;
            const taskContainerHeight = taskContainer.clientHeight;


            setTimeout(()=> {
                taskContainer.style.marginBottom = "-" + taskContainerHeight + "px";
                taskContainer.style.opacity = "0";
                taskContainer.style.marginBottom = "0";
                taskContainer.parentNode.appendChild(taskContainer);
            },300)

            setTimeout(()=> {
                taskContainer.style.opacity = "100";
            },350)
            
        }
    })
}

const deleteClick = () => {
    document.querySelector('#contentContainer').addEventListener('click', (e)=> {
        if (e.target.parentNode.className == 'deleteContainer') {
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
    document.querySelector('#contentContainer').addEventListener('mouseover', (e)=> {
        if (e.target.className == 'taskContainer' ) {
            const taskContainer = e.target;
            const deleteContainer = taskContainer.children[2];
            deleteContainer.style.opacity = "100";

            taskContainer.addEventListener('mouseleave', ()=> {
                if (!taskContainer.className.includes('completed')) {
                    deleteContainer.style.opacity = '0';
                }
                
            })
        } 
        if (e.target.className == 'descriptionContainer' ) {
            const descriptionContainer = e.target;
            const deleteContainer = descriptionContainer.previousElementSibling;
            deleteContainer.style.opacity = "100";
        } 
    })
}


const runEventHandlers = () => {
    checkClick();
    formAddButtonClicked();
    formCancel();
    selectTask();
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
    constructor(name, description, dueDate, list) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.list = list;
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
/* harmony export */   "taskSelection": () => (/* binding */ taskSelection),
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


const createTaskContainer = (task, description, dueDate) => {
    const taskContainer = document.createElement('div');
    taskContainer.className = 'taskContainer';


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

    subGroup.append(taskContainer);
}

const taskSelection = () => {
    const taskViewContainer = document.createElement('div');
    taskViewContainer.className = 'taskViewContainer';
    
    const taskViewNameContainer = document.createElement('div');
    taskViewNameContainer.className = "taskViewNameContainer";
    taskViewContainer.append(taskViewNameContainer);

    const checkContainer = document.createElement('div');
    checkContainer.className = 'taskViewCheckContainer';
    checkContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><title>ionicons-v5-q</title><circle cx="256" cy="256" r="192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/></svg>';
    taskViewNameContainer.append(checkContainer)

    const taskViewName = document.createElement('p');
    taskViewName.className = "taskViewName";
    taskViewName.innerText = "Exercise";
    taskViewNameContainer.append(taskViewName);



    const taskViewDescriptionContainer = document.createElement('div');
    taskViewDescriptionContainer.className = "taskViewDescriptionContainer";
    taskViewDescriptionContainer.innerText = "Description";
    taskViewContainer.append(taskViewDescriptionContainer);
    

    const taskViewDescription = document.createElement('p');
    taskViewDescription.className = "taskViewDescription";
    taskViewDescription.innerText = "Workout for 45 minutes"
    taskViewDescriptionContainer.append(taskViewDescription)

    const tasksContainer = document.querySelector('.tasksContainer');
    

    tasksContainer.style.transform = "translateX(-30%)";
    tasksContainer.style.transition = "all 0.15s ease";




    setTimeout(()=> {
        tasksContainer.style.transition = "all 0s linear";
        tasksContainer.style.margin = "38px 0 auto 30%";
        tasksContainer.style.transform = "translateX(0)";

        const contentContainer = document.querySelector('#contentContainer');
        contentContainer.append(taskViewContainer);
        taskViewContainer.style.transform = "translateX(25vw)";
        setTimeout(()=> {
            taskViewContainer.style.opacity = "100";
            taskViewContainer.style.width = "400px"
            taskViewContainer.style.opacity = "100"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNlO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNkNBQUk7QUFDMUI7QUFDQSxJQUFJLHdEQUFtQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFVBQVUsRUFBQztBQUMxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QnVDO0FBQ0Y7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx3REFBVTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixrREFBYTtBQUM3QixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGdOQUFnTixZQUFZLHFCQUFxQixzQkFBc0I7QUFDdlE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxnQkFBZ0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDbEtoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUJuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvTUFBb00sWUFBWSxxQkFBcUIsc0JBQXNCO0FBQzNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvTUFBb00sWUFBWSxxQkFBcUIsc0JBQXNCO0FBQzNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGVBQWUsRUFBQzs7Ozs7OztVQzVLL0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ04yQztBQUNUO0FBQ21CO0FBQ0c7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBZTtBQUNmLGtFQUFZO0FBQ1osbUVBQWdCO0FBQ2hCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jcmVhdGUtdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9ldmVudC1oYW5kbGVycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3VpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XHJcbmltcG9ydCB7Y3JlYXRlVGFza0NvbnRhaW5lcn0gZnJvbSBcIi4vdWlcIjtcclxuXHJcbmxldCBhbGxUYXNrcyA9IFtdO1xyXG5cclxuXHJcbmNvbnN0IGNyZWF0ZVRhc2sgPSAodGFzaywgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGxpc3QpID0+IHtcclxuICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2sodGFzaywgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGxpc3QpO1xyXG4gICAgYWxsVGFza3MucHVzaChuZXdUYXNrKTtcclxuICAgIGNyZWF0ZVRhc2tDb250YWluZXIodGFzaywgZGVzY3JpcHRpb24sIGR1ZURhdGUpO1xyXG4gICAgY29uc29sZS5sb2coYWxsVGFza3MpXHJcbiAgICAvL2FkZCB0YXNrIHRvIGdlbmVyYWwgdGFzayBsaXN0cyBhcnJheSBcclxuICAgIC8vZ2V0IHVpIHRvIGNoZWNrIGRhdGUsIGFuZCBsaXN0XHJcbiAgICAvL0RldGVybWluZSB3aGVyZSB0byBkaXNwbGF5IHRoYXQgdGFzayAodG9kYXksIHRvbW9ycm93LCB0aGlzIHdlZWssIGxpc3QpXHJcbiAgICAvL3J1biBVSS5qcyBmdW5jdGlvbiB0byBhZGQgdGFzayBlbGVtZW50cyB0byB0aGUgZGlzcGxheS5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBleGFtcGxlVGFza3MgPSAoKSA9PiB7XHJcbiAgICBjcmVhdGVUYXNrKFwiRXhlcmNpc2VcIiwgXCJXb3Jrb3V0IG91dCBmb3IgNDUgbWludXRlc1wiLCBcInRvZGF5XCIsICcnKTtcclxuICAgIGNyZWF0ZVRhc2soXCJDb2ZmZWUgd2l0aCBmcmllbmRcIiwgXCJTdGFyYnVja3NcIiwgXCJ0b2RheVwiLCAnJyk7XHJcbiAgICBjcmVhdGVUYXNrKFwiQ29va2luZyBjbGFzc1wiLCBcIkJyaW5nIGhvbWVtYWRlIHBpZVwiLCBcInRvZGF5XCIsICcnKTtcclxuXHJcbiAgICBjcmVhdGVUYXNrKFwiUmVhZFwiLCBcIlJlYWQgdHdvIGNoYXB0ZXJcIiwgXCJ0b21vcnJvd1wiLCAnJyk7XHJcbiAgICBjcmVhdGVUYXNrKFwiTGVhcm4gc2lnbiBsYW5ndWFnZVwiLCBcIlByYWN0aWNlIGVuZ2xpc2ggYWxwaGFiZXRcIiwgXCJ0b21vcnJvd1wiLCAnJyk7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhc2s7XHJcblxyXG4iLCJpbXBvcnQgY3JlYXRlVGFzayBmcm9tIFwiLi9jcmVhdGUtdGFza1wiO1xyXG5pbXBvcnQgeyB0YXNrU2VsZWN0aW9uIH0gZnJvbSBcIi4vdWlcIjtcclxuXHJcbmNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRCdXR0b24nKTtcclxuY29uc3QgZm9ybUFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrRm9ybUFkZEJ1dHRvbicpO1xyXG5jb25zdCBpbnB1dFRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0VGFza05hbWUnKTtcclxuY29uc3QgaW5wdXRUYXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXRUYXNrRGVzY3JpcHRpb24nKTtcclxuY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza0Zvcm1Db250YWluZXJcIik7XHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tGb3JtXCIpO1xyXG5jb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrQ29udGFpbmVyXCIpO1xyXG5cclxuY29uc3QgYnV0dG9uQ2xpY2tlZCA9ICgpID0+IHtcclxuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGZvcm1Db250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgICAgIGZvcm0uc3R5bGUub3BhY2l0eSA9IFwiMTAwXCI7XHJcbiAgICAgICAgZm9ybS5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEpXCI7XHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBmb3JtQWRkQnV0dG9uQ2xpY2tlZCA9ICgpID0+IHtcclxuICAgIGZvcm1BZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoaW5wdXRUYXNrTmFtZS52YWx1ZSkge1xyXG4gICAgICAgICAgICBjcmVhdGVUYXNrKGlucHV0VGFza05hbWUudmFsdWUsIGlucHV0VGFza0Rlc2NyaXB0aW9uLnZhbHVlLCBcInRvZGF5XCIpO1xyXG4gICAgICAgICAgICBmb3JtLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgaW5wdXRUYXNrTmFtZS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBpbnB1dFRhc2tEZXNjcmlwdGlvbi52YWx1ZSA9Jyc7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IGZvcm1DYW5jZWwgPSAoKSA9PiB7XHJcbiAgICBmb3JtQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09ICd0YXNrRm9ybUNvbnRhaW5lcicpIHtcclxuICAgICAgICAgICAgZm9ybS5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICAgICAgICAgIGZvcm1Db250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgIGZvcm0uc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgwKVwiO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5jb25zdCBzZWxlY3RUYXNrID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PiB7XHJcbiAgICAgICAgY29uc3QgY2xpY2sgPSBlLnRhcmdldDtcclxuICAgICAgICBpZiAoY2xpY2suY2xhc3NOYW1lID09IFwidGFza0NvbnRhaW5lclwiIHx8IGNsaWNrLmNsYXNzTmFtZSA9PSBcIm5hbWVDb250YWluZXJcIiB8fCBjbGljay5jbGFzc05hbWUgPT0gXCJkZXNjcmlwdGlvbkNvbnRhaW5lclwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tWaWV3Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tWaWV3Q29udGFpbmVyJylcclxuICAgICAgICAgICAgaWYgKCF0YXNrVmlld0NvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgdGFza1NlbGVjdGlvbigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcbmNvbnN0IGNoZWNrQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc05hbWUgPT0gJ2NoZWNrQ29udGFpbmVyJyApIHtcclxuICAgICAgICAgICAgY29uc3QgY2hlY2tlZFRhc2sgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZS50YXJnZXQucGFyZW50Tm9kZS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUNvbnRhaW5lciA9IHRhc2tOYW1lLm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgICAgICAgY29uc3QgY2hlY2tDb250YWluZXIgPSBlLnRhcmdldC5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2hlY2tDb250YWluZXIuc3R5bGUuYW5pbWF0aW9uID0gXCJjaGVja0NsaWNrIDAuM3MgZWFzZS1vdXRcIjtcclxuXHJcbiAgICAgICAgICAgIGlmICghY2hlY2tlZFRhc2suY2xhc3NOYW1lLmluY2x1ZGVzKCdjb21wbGV0ZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tlZFRhc2suY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XHJcbiAgICAgICAgICAgICAgICB0YXNrTmFtZS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiMTAwJSAxMDAlXCI7XHJcbiAgICAgICAgICAgICAgICBjaGVja0NvbnRhaW5lci5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHRpdGxlPmlvbmljb25zLXY1LWU8L3RpdGxlPjxwYXRoIGQ9XCJNMjU2LDQ4QzE0MS4zMSw0OCw0OCwxNDEuMzEsNDgsMjU2czkzLjMxLDIwOCwyMDgsMjA4LDIwOC05My4zMSwyMDgtMjA4UzM3MC42OSw0OCwyNTYsNDhaTTM2NC4yNSwxODYuMjlsLTEzNC40LDE2MGExNiwxNiwwLDAsMS0xMiw1LjcxaC0uMjdhMTYsMTYsMCwwLDEtMTEuODktNS4zbC01Ny42LTY0YTE2LDE2LDAsMSwxLDIzLjc4LTIxLjRsNDUuMjksNTAuMzJMMzM5Ljc1LDE2NS43MWExNiwxNiwwLDAsMSwyNC41LDIwLjU4WlwiLz48L3N2Zz4nXHJcbiAgICAgICAgICAgICAgICBjaGVja0NvbnRhaW5lci5zdHlsZS5maWx0ZXIgPSBcImJyaWdodG5lc3MoMCkgc2F0dXJhdGUoMTAwJSkgaW52ZXJ0KDc0JSkgc2VwaWEoMTMlKSBzYXR1cmF0ZSgyMjclKSBodWUtcm90YXRlKDE3N2RlZykgYnJpZ2h0bmVzcygxMDMlKSBjb250cmFzdCg5NyUpXCI7XHJcbiAgICAgICAgICAgICAgICBkZWxldGVDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IFwiMTAwXCI7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjaGVja2VkVGFzay5jbGFzc05hbWUuaW5jbHVkZXMoJ2NvbXBsZXRlZCcpKXtcclxuICAgICAgICAgICAgICAgIGNoZWNrZWRUYXNrLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgdGFza05hbWUuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcIjAlIDEwMCVcIjtcclxuICAgICAgICAgICAgICAgIGNoZWNrQ29udGFpbmVyLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48dGl0bGU+aW9uaWNvbnMtdjUtcTwvdGl0bGU+PGNpcmNsZSBjeD1cIjI1NlwiIGN5PVwiMjU2XCIgcj1cIjE5MlwiIHN0eWxlPVwiZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MzJweFwiLz48L3N2Zz4nXHJcbiAgICAgICAgICAgICAgICBjaGVja0NvbnRhaW5lci5zdHlsZS5maWx0ZXIgPSBcIiBicmlnaHRuZXNzKDApIHNhdHVyYXRlKDEwMCUpIGludmVydCg5JSkgc2VwaWEoNDMlKSBzYXR1cmF0ZSgzMzglKSBodWUtcm90YXRlKDE3N2RlZykgYnJpZ2h0bmVzcygxMDAlKSBjb250cmFzdCg5NiUpXCI7XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrQ29udGFpbmVyLnN0eWxlLmFuaW1hdGlvbiA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgfSwxMClcclxuXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IHRhc2tOYW1lLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tDb250YWluZXJIZWlnaHQgPSB0YXNrQ29udGFpbmVyLmNsaWVudEhlaWdodDtcclxuXHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICAgICAgICAgdGFza0NvbnRhaW5lci5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIi1cIiArIHRhc2tDb250YWluZXJIZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuc3R5bGUubWFyZ2luQm90dG9tID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIH0sMzAwKVxyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IFwiMTAwXCI7XHJcbiAgICAgICAgICAgIH0sMzUwKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBkZWxldGVDbGljayA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Q29udGFpbmVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NOYW1lID09ICdkZWxldGVDb250YWluZXInKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVySGVpZ2h0ID0gdGFza0NvbnRhaW5lci5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWSgtMTAwJSlcIjtcclxuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIi1cIiArIHRhc2tDb250YWluZXJIZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICAgICAgICAgdGFza0NvbnRhaW5lci5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfSwyMDApXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IHRhc2tDb250YWluZXJIb3ZlciA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Q29udGFpbmVyJykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gJ3Rhc2tDb250YWluZXInICkge1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUNvbnRhaW5lciA9IHRhc2tDb250YWluZXIuY2hpbGRyZW5bMl07XHJcbiAgICAgICAgICAgIGRlbGV0ZUNvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gXCIxMDBcIjtcclxuXHJcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0YXNrQ29udGFpbmVyLmNsYXNzTmFtZS5pbmNsdWRlcygnY29tcGxldGVkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGVDb250YWluZXIuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSAnZGVzY3JpcHRpb25Db250YWluZXInICkge1xyXG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICBjb25zdCBkZWxldGVDb250YWluZXIgPSBkZXNjcmlwdGlvbkNvbnRhaW5lci5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICAgICBkZWxldGVDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IFwiMTAwXCI7XHJcbiAgICAgICAgfSBcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5jb25zdCBydW5FdmVudEhhbmRsZXJzID0gKCkgPT4ge1xyXG4gICAgY2hlY2tDbGljaygpO1xyXG4gICAgZm9ybUFkZEJ1dHRvbkNsaWNrZWQoKTtcclxuICAgIGZvcm1DYW5jZWwoKTtcclxuICAgIHNlbGVjdFRhc2soKTtcclxuICAgIHRhc2tDb250YWluZXJIb3ZlcigpO1xyXG4gICAgZGVsZXRlQ2xpY2soKVxyXG4gICAgYnV0dG9uQ2xpY2tlZCgpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJ1bkV2ZW50SGFuZGxlcnM7XHJcbiIsImNsYXNzIFRhc2sge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGxpc3QpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMubGlzdCA9IGxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE5hbWUobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RHVlRGF0ZShkdWVEYXRlKSB7XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRMaXN0KGxpc3QpIHtcclxuICAgICAgICB0aGlzLmxpc3QgPSBsaXN0O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFzazsiLCJjb25zdCBpbml0aWFsUGFnZUxvYWQgPSAoKSA9PiB7XHJcbiAgICBsb2FkaW5nUGFnZSgpXHJcbiAgICBjcmVhdGVBbGxUYXNrc0NvbnRhaW5lcigpO1xyXG59XHJcblxyXG5jb25zdCBsb2FkaW5nUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGxvYWRpbmdTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvYWRpbmdTY3JlZW5cIik7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXHJcbiAgICAgICAgYm9keS5zdHlsZS5vdmVyZmxvd1k9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgbG9hZGluZ1NjcmVlbi5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgICAgIGxvYWRpbmdTY3JlZW4ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3dZPSBcInZpc2libGVcIjtcclxuICAgICAgICB9LCAzMDApXHJcbiAgICAgICAgfSwgNTAwKVxyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG4vL0FMTCBUQVNLUyBDT05URU5UXHJcbmNvbnN0IGNyZWF0ZUFsbFRhc2tzQ29udGFpbmVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYWxsVGFza3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFsbFRhc2tzQ29udGFpbmVyLmlkID0gXCJhbGxUYXNrc0NvbnRhaW5lclwiO1xyXG4gICAgYWxsVGFza3NDb250YWluZXIuY2xhc3NOYW1lID0gXCJ0YXNrc0NvbnRhaW5lclwiO1xyXG5cclxuICAgIFxyXG4gICAgY29uc3QgYWxsVGFza3NUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWxsVGFza3NUaXRsZS5pZCA9ICd0aXRsZUNvbnRhaW5lcic7XHJcbiAgICBhbGxUYXNrc1RpdGxlLmNsYXNzTmFtZSA9IFwidGFza3NUaXRsZVwiO1xyXG4gICAgYWxsVGFza3NUaXRsZS5pbm5lclRleHQgPSBcIkFsbCBUYXNrc1wiO1xyXG5cclxuICAgIGFsbFRhc2tzQ29udGFpbmVyLmFwcGVuZChhbGxUYXNrc1RpdGxlKTtcclxuXHJcblxyXG4gICAgY3JlYXRlU3ViR3JvdXBzKFwidG9kYXlcIiwgYWxsVGFza3NDb250YWluZXIpO1xyXG4gICAgY3JlYXRlU3ViR3JvdXBzKFwidG9tb3Jyb3dcIiwgYWxsVGFza3NDb250YWluZXIpO1xyXG4gICAgY3JlYXRlU3ViR3JvdXBzKFwidXBjb21pbmdcIiwgYWxsVGFza3NDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudENvbnRhaW5lcicpO1xyXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmQoYWxsVGFza3NDb250YWluZXIpO1xyXG5cclxufVxyXG5cclxuY29uc3QgY3JlYXRlU3ViR3JvdXBzID0gKGdyb3VwLCBhbGxUYXNrc0NvbnRhaW5lcikgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNhcGl0YWxpemUgPSAoc3RyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3ViR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHN1Ykdyb3VwLmNsYXNzTmFtZSA9IFwic3ViR3JvdXBcIjtcclxuICAgIHN1Ykdyb3VwLmlkID0gZ3JvdXA7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBzdWJHcm91cFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgc3ViR3JvdXBUaXRsZS5jbGFzc05hbWUgPSBcInN1Ykdyb3VwVGl0bGVcIjtcclxuXHJcblxyXG4gICAgc3ViR3JvdXBUaXRsZS5pbm5lclRleHQgPSBjYXBpdGFsaXplKGdyb3VwKTtcclxuXHJcblxyXG4gICAgc3ViR3JvdXAuYXBwZW5kKHN1Ykdyb3VwVGl0bGUpXHJcblxyXG4gICAgYWxsVGFza3NDb250YWluZXIuYXBwZW5kKHN1Ykdyb3VwKTtcclxufSAgIFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVUYXNrQ29udGFpbmVyID0gKHRhc2ssIGRlc2NyaXB0aW9uLCBkdWVEYXRlKSA9PiB7XHJcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTmFtZSA9ICd0YXNrQ29udGFpbmVyJztcclxuXHJcblxyXG4gICAgY29uc3QgY2hlY2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNoZWNrQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdjaGVja0NvbnRhaW5lcic7XHJcbiAgICBjaGVja0NvbnRhaW5lci5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHRpdGxlPmlvbmljb25zLXY1LXE8L3RpdGxlPjxjaXJjbGUgY3g9XCIyNTZcIiBjeT1cIjI1NlwiIHI9XCIxOTJcIiBzdHlsZT1cImZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjMycHhcIi8+PC9zdmc+J1xyXG5cclxuICAgIGNvbnN0IG5hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgbmFtZUNvbnRhaW5lci5jbGFzc05hbWUgPSduYW1lQ29udGFpbmVyJztcclxuICAgIG5hbWVDb250YWluZXIuaW5uZXJUZXh0ID0gdGFzaztcclxuXHJcbiAgICBjb25zdCBkZWxldGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRlbGV0ZUNvbnRhaW5lci5jbGFzc05hbWUgPSAnZGVsZXRlQ29udGFpbmVyJztcclxuICAgIGRlbGV0ZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHRpdGxlPmlvbmljb25zLXY1LW08L3RpdGxlPjxwYXRoIGQ9XCJNMjU2LDQ4QzE0MS4zMSw0OCw0OCwxNDEuMzEsNDgsMjU2czkzLjMxLDIwOCwyMDgsMjA4LDIwOC05My4zMSwyMDgtMjA4UzM3MC42OSw0OCwyNTYsNDhabTc1LjMxLDI2MC42OWExNiwxNiwwLDEsMS0yMi42MiwyMi42MkwyNTYsMjc4LjYzbC01Mi42OSw1Mi42OGExNiwxNiwwLDAsMS0yMi42Mi0yMi42MkwyMzMuMzcsMjU2bC01Mi42OC01Mi42OWExNiwxNiwwLDAsMSwyMi42Mi0yMi42MkwyNTYsMjMzLjM3bDUyLjY5LTUyLjY4YTE2LDE2LDAsMCwxLDIyLjYyLDIyLjYyTDI3OC42MywyNTZaXCIvPjwvc3ZnPic7XHJcblxyXG5cclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5jbGFzc05hbWUgPSAnZGVzY3JpcHRpb25Db250YWluZXInO1xyXG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuaW5uZXJUZXh0ID0gZGVzY3JpcHRpb247XHJcblxyXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmQoY2hlY2tDb250YWluZXIpO1xyXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmQobmFtZUNvbnRhaW5lcik7XHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZChkZWxldGVDb250YWluZXIpO1xyXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmQoZGVzY3JpcHRpb25Db250YWluZXIpO1xyXG4gICAgXHJcblxyXG4gICAgbGV0IHN1Ykdyb3VwO1xyXG4gICAgaWYgKGR1ZURhdGUgPT0gJ3RvZGF5Jykge1xyXG4gICAgICAgIHN1Ykdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZGF5Jyk7XHJcbiAgICB9IGVsc2UgaWYgKGR1ZURhdGUgPT0gJ3RvbW9ycm93Jykge1xyXG4gICAgICAgIHN1Ykdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvbW9ycm93Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3ViR3JvdXAuYXBwZW5kKHRhc2tDb250YWluZXIpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdGFza1NlbGVjdGlvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRhc2tWaWV3Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YXNrVmlld0NvbnRhaW5lci5jbGFzc05hbWUgPSAndGFza1ZpZXdDb250YWluZXInO1xyXG4gICAgXHJcbiAgICBjb25zdCB0YXNrVmlld05hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRhc2tWaWV3TmFtZUNvbnRhaW5lci5jbGFzc05hbWUgPSBcInRhc2tWaWV3TmFtZUNvbnRhaW5lclwiO1xyXG4gICAgdGFza1ZpZXdDb250YWluZXIuYXBwZW5kKHRhc2tWaWV3TmFtZUNvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3QgY2hlY2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNoZWNrQ29udGFpbmVyLmNsYXNzTmFtZSA9ICd0YXNrVmlld0NoZWNrQ29udGFpbmVyJztcclxuICAgIGNoZWNrQ29udGFpbmVyLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48dGl0bGU+aW9uaWNvbnMtdjUtcTwvdGl0bGU+PGNpcmNsZSBjeD1cIjI1NlwiIGN5PVwiMjU2XCIgcj1cIjE5MlwiIHN0eWxlPVwiZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MzJweFwiLz48L3N2Zz4nO1xyXG4gICAgdGFza1ZpZXdOYW1lQ29udGFpbmVyLmFwcGVuZChjaGVja0NvbnRhaW5lcilcclxuXHJcbiAgICBjb25zdCB0YXNrVmlld05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0YXNrVmlld05hbWUuY2xhc3NOYW1lID0gXCJ0YXNrVmlld05hbWVcIjtcclxuICAgIHRhc2tWaWV3TmFtZS5pbm5lclRleHQgPSBcIkV4ZXJjaXNlXCI7XHJcbiAgICB0YXNrVmlld05hbWVDb250YWluZXIuYXBwZW5kKHRhc2tWaWV3TmFtZSk7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCB0YXNrVmlld0Rlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YXNrVmlld0Rlc2NyaXB0aW9uQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwidGFza1ZpZXdEZXNjcmlwdGlvbkNvbnRhaW5lclwiO1xyXG4gICAgdGFza1ZpZXdEZXNjcmlwdGlvbkNvbnRhaW5lci5pbm5lclRleHQgPSBcIkRlc2NyaXB0aW9uXCI7XHJcbiAgICB0YXNrVmlld0NvbnRhaW5lci5hcHBlbmQodGFza1ZpZXdEZXNjcmlwdGlvbkNvbnRhaW5lcik7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCB0YXNrVmlld0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdGFza1ZpZXdEZXNjcmlwdGlvbi5jbGFzc05hbWUgPSBcInRhc2tWaWV3RGVzY3JpcHRpb25cIjtcclxuICAgIHRhc2tWaWV3RGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJXb3Jrb3V0IGZvciA0NSBtaW51dGVzXCJcclxuICAgIHRhc2tWaWV3RGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kKHRhc2tWaWV3RGVzY3JpcHRpb24pXHJcblxyXG4gICAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3NDb250YWluZXInKTtcclxuICAgIFxyXG5cclxuICAgIHRhc2tzQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgtMzAlKVwiO1xyXG4gICAgdGFza3NDb250YWluZXIuc3R5bGUudHJhbnNpdGlvbiA9IFwiYWxsIDAuMTVzIGVhc2VcIjtcclxuXHJcblxyXG5cclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgIHRhc2tzQ29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb24gPSBcImFsbCAwcyBsaW5lYXJcIjtcclxuICAgICAgICB0YXNrc0NvbnRhaW5lci5zdHlsZS5tYXJnaW4gPSBcIjM4cHggMCBhdXRvIDMwJVwiO1xyXG4gICAgICAgIHRhc2tzQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgwKVwiO1xyXG5cclxuICAgICAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnRDb250YWluZXInKTtcclxuICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZCh0YXNrVmlld0NvbnRhaW5lcik7XHJcbiAgICAgICAgdGFza1ZpZXdDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKDI1dncpXCI7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgdGFza1ZpZXdDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IFwiMTAwXCI7XHJcbiAgICAgICAgICAgIHRhc2tWaWV3Q29udGFpbmVyLnN0eWxlLndpZHRoID0gXCI0MDBweFwiXHJcbiAgICAgICAgICAgIHRhc2tWaWV3Q29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSBcIjEwMFwiXHJcbiAgICAgICAgICAgIHRhc2tWaWV3Q29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgwKVwiO1xyXG4gICAgICAgIH0sMTApXHJcbiAgICAgICAgXHJcbiAgICB9LDE1MClcclxuXHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbFBhZ2VMb2FkO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0aWFsUGFnZUxvYWQgZnJvbSBcIi4vbW9kdWxlcy91aVwiO1xyXG5pbXBvcnQgVGFzayBmcm9tIFwiLi9tb2R1bGVzL3Rhc2tcIjtcclxuaW1wb3J0IHsgZXhhbXBsZVRhc2tzIH0gZnJvbSBcIi4vbW9kdWxlcy9jcmVhdGUtdGFza1wiO1xyXG5pbXBvcnQgcnVuRXZlbnRIYW5kbGVycyBmcm9tIFwiLi9tb2R1bGVzL2V2ZW50LWhhbmRsZXJzXCI7XHJcblxyXG5cclxuXHJcblxyXG5pbml0aWFsUGFnZUxvYWQoKTtcclxuZXhhbXBsZVRhc2tzKCk7XHJcbnJ1bkV2ZW50SGFuZGxlcnMoKTtcclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=