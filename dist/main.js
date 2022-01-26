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
/* harmony export */   "formAddButtonClicked": () => (/* binding */ formAddButtonClicked),
/* harmony export */   "formCancel": () => (/* binding */ formCancel),
/* harmony export */   "selectTask": () => (/* binding */ selectTask),
/* harmony export */   "checkClick": () => (/* binding */ checkClick),
/* harmony export */   "deleteHover": () => (/* binding */ deleteHover),
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
        console.log(e.target)
        const check = document.querySelector('checkContainer' )
        if (e.target.parentNode.className == 'checkContainer' ) {
            const checkedTask = e.target.parentNode.parentNode;
            const taskName = e.target.parentNode.nextElementSibling;
            const checkContainer = e.target.parentNode;
            
            if (!checkedTask.className.includes('completed')) {
                checkedTask.classList.add('completed');
                taskName.style.backgroundSize = "100% 100%";
                checkContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><title>ionicons-v5-e</title><path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM364.25,186.29l-134.4,160a16,16,0,0,1-12,5.71h-.27a16,16,0,0,1-11.89-5.3l-57.6-64a16,16,0,1,1,23.78-21.4l45.29,50.32L339.75,165.71a16,16,0,0,1,24.5,20.58Z"/></svg>'
                checkContainer.style.filter = "brightness(0) saturate(100%) invert(74%) sepia(13%) saturate(227%) hue-rotate(177deg) brightness(103%) contrast(97%)";
            } else if (checkedTask.className.includes('completed')){
                checkedTask.classList.remove('completed');
                taskName.style.backgroundSize = "0% 100%";
                checkContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><title>ionicons-v5-q</title><circle cx="256" cy="256" r="192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/></svg>'
                checkContainer.style.filter = " brightness(0) saturate(100%) invert(9%) sepia(43%) saturate(338%) hue-rotate(177deg) brightness(100%) contrast(96%)";
            }
        }
    })
}


const deleteHover = () => {
    
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buttonClicked);


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
(0,_modules_event_handlers__WEBPACK_IMPORTED_MODULE_3__.formAddButtonClicked)();
(0,_modules_event_handlers__WEBPACK_IMPORTED_MODULE_3__.formCancel)();
(0,_modules_event_handlers__WEBPACK_IMPORTED_MODULE_3__.selectTask)();
(0,_modules_event_handlers__WEBPACK_IMPORTED_MODULE_3__.checkClick)();




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNlO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNkNBQUk7QUFDMUI7QUFDQSxJQUFJLHdEQUFtQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsVUFBVSxFQUFDO0FBQzFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJ1QztBQUNGO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLFlBQVksd0RBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0RBQWE7QUFDN0IsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxnTkFBZ04sWUFBWSxxQkFBcUIsc0JBQXNCO0FBQ3ZRO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN4RjdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Qm5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9NQUFvTSxZQUFZLHFCQUFxQixzQkFBc0I7QUFDM1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9NQUFvTSxZQUFZLHFCQUFxQixzQkFBc0I7QUFDM1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsZUFBZSxFQUFDOzs7Ozs7O1VDNUsvQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjJDO0FBQ1Q7QUFDbUI7QUFDK0M7QUFDL0M7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsdURBQWU7QUFDZixrRUFBWTtBQUNaLG1FQUFhO0FBQ2IsNkVBQW9CO0FBQ3BCLG1FQUFVO0FBQ1YsbUVBQVU7QUFDVixtRUFBVTtBQUNWO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NyZWF0ZS10YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2V2ZW50LWhhbmRsZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdWkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcclxuaW1wb3J0IHtjcmVhdGVUYXNrQ29udGFpbmVyfSBmcm9tIFwiLi91aVwiO1xyXG5cclxubGV0IGFsbFRhc2tzID0gW107XHJcblxyXG5cclxuY29uc3QgY3JlYXRlVGFzayA9ICh0YXNrLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgbGlzdCkgPT4ge1xyXG4gICAgbGV0IG5ld1Rhc2sgPSBuZXcgVGFzayh0YXNrLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgbGlzdCk7XHJcbiAgICBhbGxUYXNrcy5wdXNoKG5ld1Rhc2spO1xyXG4gICAgY3JlYXRlVGFza0NvbnRhaW5lcih0YXNrLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhhbGxUYXNrcylcclxuICAgIC8vYWRkIHRhc2sgdG8gZ2VuZXJhbCB0YXNrIGxpc3RzIGFycmF5IFxyXG4gICAgLy9nZXQgdWkgdG8gY2hlY2sgZGF0ZSwgYW5kIGxpc3RcclxuICAgIC8vRGV0ZXJtaW5lIHdoZXJlIHRvIGRpc3BsYXkgdGhhdCB0YXNrICh0b2RheSwgdG9tb3Jyb3csIHRoaXMgd2VlaywgbGlzdClcclxuICAgIC8vcnVuIFVJLmpzIGZ1bmN0aW9uIHRvIGFkZCB0YXNrIGVsZW1lbnRzIHRvIHRoZSBkaXNwbGF5LlxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGV4YW1wbGVUYXNrcyA9ICgpID0+IHtcclxuICAgIGNyZWF0ZVRhc2soXCJFeGVyY2lzZVwiLCBcIldvcmtvdXQgb3V0IGZvciA0NSBtaW51dGVzXCIsIFwidG9kYXlcIiwgJycpO1xyXG4gICAgY3JlYXRlVGFzayhcIkNvZmZlZSB3aXRoIGZyaWVuZFwiLCBcIlN0YXJidWNrc1wiLCBcInRvZGF5XCIsICcnKTtcclxuICAgIGNyZWF0ZVRhc2soXCJSZWFkXCIsIFwiUmVhZCB0d28gY2hhcHRlclwiLCBcInRvbW9ycm93XCIsICcnKTtcclxuICAgIGNyZWF0ZVRhc2soXCJMZWFybiBzaWduIGxhbmd1YWdlXCIsIFwiUHJhY3RpY2UgZW5nbGlzaCBhbHBoYWJldFwiLCBcInRvbW9ycm93XCIsICcnKTtcclxuICAgIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGFzaztcclxuXHJcbiIsImltcG9ydCBjcmVhdGVUYXNrIGZyb20gXCIuL2NyZWF0ZS10YXNrXCI7XHJcbmltcG9ydCB7IHRhc2tTZWxlY3Rpb24gfSBmcm9tIFwiLi91aVwiO1xyXG5cclxuY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZEJ1dHRvbicpO1xyXG5jb25zdCBmb3JtQWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tGb3JtQWRkQnV0dG9uJyk7XHJcbmNvbnN0IGlucHV0VGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXRUYXNrTmFtZScpO1xyXG5jb25zdCBpbnB1dFRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dFRhc2tEZXNjcmlwdGlvbicpO1xyXG5jb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrRm9ybUNvbnRhaW5lclwiKTtcclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza0Zvcm1cIik7XHJcbmNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tDb250YWluZXJcIik7XHJcblxyXG5jb25zdCBidXR0b25DbGlja2VkID0gKCkgPT4ge1xyXG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZm9ybUNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgICAgZm9ybS5zdHlsZS5vcGFjaXR5ID0gXCIxMDBcIjtcclxuICAgICAgICBmb3JtLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMSlcIjtcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtQWRkQnV0dG9uQ2xpY2tlZCA9ICgpID0+IHtcclxuICAgIGZvcm1BZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoaW5wdXRUYXNrTmFtZS52YWx1ZSkge1xyXG4gICAgICAgICAgICBjcmVhdGVUYXNrKGlucHV0VGFza05hbWUudmFsdWUsIGlucHV0VGFza0Rlc2NyaXB0aW9uLnZhbHVlLCBcInRvZGF5XCIpO1xyXG4gICAgICAgICAgICBmb3JtLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgaW5wdXRUYXNrTmFtZS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBpbnB1dFRhc2tEZXNjcmlwdGlvbi52YWx1ZSA9Jyc7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtQ2FuY2VsID0gKCkgPT4ge1xyXG4gICAgZm9ybUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5pZCA9PSAndGFza0Zvcm1Db250YWluZXInKSB7XHJcbiAgICAgICAgICAgIGZvcm0uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICBmb3JtLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMClcIjtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdFRhc2sgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+IHtcclxuICAgICAgICBjb25zdCBjbGljayA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGlmIChjbGljay5jbGFzc05hbWUgPT0gXCJ0YXNrQ29udGFpbmVyXCIgfHwgY2xpY2suY2xhc3NOYW1lID09IFwibmFtZUNvbnRhaW5lclwiIHx8IGNsaWNrLmNsYXNzTmFtZSA9PSBcImRlc2NyaXB0aW9uQ29udGFpbmVyXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFza1ZpZXdDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1ZpZXdDb250YWluZXInKVxyXG4gICAgICAgICAgICBpZiAoIXRhc2tWaWV3Q29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICB0YXNrU2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGNoZWNrQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcclxuICAgICAgICBjb25zdCBjaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NoZWNrQ29udGFpbmVyJyApXHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NOYW1lID09ICdjaGVja0NvbnRhaW5lcicgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrZWRUYXNrID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGUudGFyZ2V0LnBhcmVudE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICAgICBjb25zdCBjaGVja0NvbnRhaW5lciA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoIWNoZWNrZWRUYXNrLmNsYXNzTmFtZS5pbmNsdWRlcygnY29tcGxldGVkJykpIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrZWRUYXNrLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgdGFza05hbWUuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcIjEwMCUgMTAwJVwiO1xyXG4gICAgICAgICAgICAgICAgY2hlY2tDb250YWluZXIuaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjx0aXRsZT5pb25pY29ucy12NS1lPC90aXRsZT48cGF0aCBkPVwiTTI1Niw0OEMxNDEuMzEsNDgsNDgsMTQxLjMxLDQ4LDI1NnM5My4zMSwyMDgsMjA4LDIwOCwyMDgtOTMuMzEsMjA4LTIwOFMzNzAuNjksNDgsMjU2LDQ4Wk0zNjQuMjUsMTg2LjI5bC0xMzQuNCwxNjBhMTYsMTYsMCwwLDEtMTIsNS43MWgtLjI3YTE2LDE2LDAsMCwxLTExLjg5LTUuM2wtNTcuNi02NGExNiwxNiwwLDEsMSwyMy43OC0yMS40bDQ1LjI5LDUwLjMyTDMzOS43NSwxNjUuNzFhMTYsMTYsMCwwLDEsMjQuNSwyMC41OFpcIi8+PC9zdmc+J1xyXG4gICAgICAgICAgICAgICAgY2hlY2tDb250YWluZXIuc3R5bGUuZmlsdGVyID0gXCJicmlnaHRuZXNzKDApIHNhdHVyYXRlKDEwMCUpIGludmVydCg3NCUpIHNlcGlhKDEzJSkgc2F0dXJhdGUoMjI3JSkgaHVlLXJvdGF0ZSgxNzdkZWcpIGJyaWdodG5lc3MoMTAzJSkgY29udHJhc3QoOTclKVwiO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNoZWNrZWRUYXNrLmNsYXNzTmFtZS5pbmNsdWRlcygnY29tcGxldGVkJykpe1xyXG4gICAgICAgICAgICAgICAgY2hlY2tlZFRhc2suY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkJyk7XHJcbiAgICAgICAgICAgICAgICB0YXNrTmFtZS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiMCUgMTAwJVwiO1xyXG4gICAgICAgICAgICAgICAgY2hlY2tDb250YWluZXIuaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjx0aXRsZT5pb25pY29ucy12NS1xPC90aXRsZT48Y2lyY2xlIGN4PVwiMjU2XCIgY3k9XCIyNTZcIiByPVwiMTkyXCIgc3R5bGU9XCJmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDozMnB4XCIvPjwvc3ZnPidcclxuICAgICAgICAgICAgICAgIGNoZWNrQ29udGFpbmVyLnN0eWxlLmZpbHRlciA9IFwiIGJyaWdodG5lc3MoMCkgc2F0dXJhdGUoMTAwJSkgaW52ZXJ0KDklKSBzZXBpYSg0MyUpIHNhdHVyYXRlKDMzOCUpIGh1ZS1yb3RhdGUoMTc3ZGVnKSBicmlnaHRuZXNzKDEwMCUpIGNvbnRyYXN0KDk2JSlcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlSG92ZXIgPSAoKSA9PiB7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJ1dHRvbkNsaWNrZWQ7XHJcbiIsImNsYXNzIFRhc2sge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGxpc3QpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMubGlzdCA9IGxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE5hbWUobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RHVlRGF0ZShkdWVEYXRlKSB7XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRMaXN0KGxpc3QpIHtcclxuICAgICAgICB0aGlzLmxpc3QgPSBsaXN0O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFzazsiLCJjb25zdCBpbml0aWFsUGFnZUxvYWQgPSAoKSA9PiB7XHJcbiAgICBsb2FkaW5nUGFnZSgpXHJcbiAgICBjcmVhdGVBbGxUYXNrc0NvbnRhaW5lcigpO1xyXG59XHJcblxyXG5jb25zdCBsb2FkaW5nUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGxvYWRpbmdTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvYWRpbmdTY3JlZW5cIik7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXHJcbiAgICAgICAgYm9keS5zdHlsZS5vdmVyZmxvd1k9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgbG9hZGluZ1NjcmVlbi5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgICAgIGxvYWRpbmdTY3JlZW4ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3dZPSBcInZpc2libGVcIjtcclxuICAgICAgICB9LCAzMDApXHJcbiAgICAgICAgfSwgNTAwKVxyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG4vL0FMTCBUQVNLUyBDT05URU5UXHJcbmNvbnN0IGNyZWF0ZUFsbFRhc2tzQ29udGFpbmVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYWxsVGFza3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFsbFRhc2tzQ29udGFpbmVyLmlkID0gXCJhbGxUYXNrc0NvbnRhaW5lclwiO1xyXG4gICAgYWxsVGFza3NDb250YWluZXIuY2xhc3NOYW1lID0gXCJ0YXNrc0NvbnRhaW5lclwiO1xyXG5cclxuICAgIFxyXG4gICAgY29uc3QgYWxsVGFza3NUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWxsVGFza3NUaXRsZS5pZCA9ICd0aXRsZUNvbnRhaW5lcic7XHJcbiAgICBhbGxUYXNrc1RpdGxlLmNsYXNzTmFtZSA9IFwidGFza3NUaXRsZVwiO1xyXG4gICAgYWxsVGFza3NUaXRsZS5pbm5lclRleHQgPSBcIkFsbCBUYXNrc1wiO1xyXG5cclxuICAgIGFsbFRhc2tzQ29udGFpbmVyLmFwcGVuZChhbGxUYXNrc1RpdGxlKTtcclxuXHJcblxyXG4gICAgY3JlYXRlU3ViR3JvdXBzKFwidG9kYXlcIiwgYWxsVGFza3NDb250YWluZXIpO1xyXG4gICAgY3JlYXRlU3ViR3JvdXBzKFwidG9tb3Jyb3dcIiwgYWxsVGFza3NDb250YWluZXIpO1xyXG4gICAgY3JlYXRlU3ViR3JvdXBzKFwidXBjb21pbmdcIiwgYWxsVGFza3NDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudENvbnRhaW5lcicpO1xyXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmQoYWxsVGFza3NDb250YWluZXIpO1xyXG5cclxufVxyXG5cclxuY29uc3QgY3JlYXRlU3ViR3JvdXBzID0gKGdyb3VwLCBhbGxUYXNrc0NvbnRhaW5lcikgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNhcGl0YWxpemUgPSAoc3RyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3ViR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHN1Ykdyb3VwLmNsYXNzTmFtZSA9IFwic3ViR3JvdXBcIjtcclxuICAgIHN1Ykdyb3VwLmlkID0gZ3JvdXA7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBzdWJHcm91cFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgc3ViR3JvdXBUaXRsZS5jbGFzc05hbWUgPSBcInN1Ykdyb3VwVGl0bGVcIjtcclxuXHJcblxyXG4gICAgc3ViR3JvdXBUaXRsZS5pbm5lclRleHQgPSBjYXBpdGFsaXplKGdyb3VwKTtcclxuXHJcblxyXG4gICAgc3ViR3JvdXAuYXBwZW5kKHN1Ykdyb3VwVGl0bGUpXHJcblxyXG4gICAgYWxsVGFza3NDb250YWluZXIuYXBwZW5kKHN1Ykdyb3VwKTtcclxufSAgIFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVUYXNrQ29udGFpbmVyID0gKHRhc2ssIGRlc2NyaXB0aW9uLCBkdWVEYXRlKSA9PiB7XHJcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTmFtZSA9ICd0YXNrQ29udGFpbmVyJztcclxuXHJcblxyXG4gICAgY29uc3QgY2hlY2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNoZWNrQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdjaGVja0NvbnRhaW5lcic7XHJcbiAgICBjaGVja0NvbnRhaW5lci5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHRpdGxlPmlvbmljb25zLXY1LXE8L3RpdGxlPjxjaXJjbGUgY3g9XCIyNTZcIiBjeT1cIjI1NlwiIHI9XCIxOTJcIiBzdHlsZT1cImZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjMycHhcIi8+PC9zdmc+J1xyXG5cclxuICAgIGNvbnN0IG5hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgbmFtZUNvbnRhaW5lci5jbGFzc05hbWUgPSduYW1lQ29udGFpbmVyJztcclxuICAgIG5hbWVDb250YWluZXIuaW5uZXJUZXh0ID0gdGFzaztcclxuXHJcbiAgICBjb25zdCBkZWxldGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRlbGV0ZUNvbnRhaW5lci5jbGFzc05hbWUgPSAnZGVsZXRlQ29udGFpbmVyJztcclxuICAgIGRlbGV0ZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHRpdGxlPmlvbmljb25zLXY1LW08L3RpdGxlPjxwYXRoIGQ9XCJNMjU2LDQ4QzE0MS4zMSw0OCw0OCwxNDEuMzEsNDgsMjU2czkzLjMxLDIwOCwyMDgsMjA4LDIwOC05My4zMSwyMDgtMjA4UzM3MC42OSw0OCwyNTYsNDhabTc1LjMxLDI2MC42OWExNiwxNiwwLDEsMS0yMi42MiwyMi42MkwyNTYsMjc4LjYzbC01Mi42OSw1Mi42OGExNiwxNiwwLDAsMS0yMi42Mi0yMi42MkwyMzMuMzcsMjU2bC01Mi42OC01Mi42OWExNiwxNiwwLDAsMSwyMi42Mi0yMi42MkwyNTYsMjMzLjM3bDUyLjY5LTUyLjY4YTE2LDE2LDAsMCwxLDIyLjYyLDIyLjYyTDI3OC42MywyNTZaXCIvPjwvc3ZnPic7XHJcblxyXG5cclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5jbGFzc05hbWUgPSAnZGVzY3JpcHRpb25Db250YWluZXInO1xyXG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuaW5uZXJUZXh0ID0gZGVzY3JpcHRpb247XHJcblxyXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmQoY2hlY2tDb250YWluZXIpO1xyXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmQobmFtZUNvbnRhaW5lcik7XHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZChkZWxldGVDb250YWluZXIpO1xyXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmQoZGVzY3JpcHRpb25Db250YWluZXIpO1xyXG4gICAgXHJcblxyXG4gICAgbGV0IHN1Ykdyb3VwO1xyXG4gICAgaWYgKGR1ZURhdGUgPT0gJ3RvZGF5Jykge1xyXG4gICAgICAgIHN1Ykdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZGF5Jyk7XHJcbiAgICB9IGVsc2UgaWYgKGR1ZURhdGUgPT0gJ3RvbW9ycm93Jykge1xyXG4gICAgICAgIHN1Ykdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvbW9ycm93Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3ViR3JvdXAuYXBwZW5kKHRhc2tDb250YWluZXIpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdGFza1NlbGVjdGlvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRhc2tWaWV3Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YXNrVmlld0NvbnRhaW5lci5jbGFzc05hbWUgPSAndGFza1ZpZXdDb250YWluZXInO1xyXG4gICAgXHJcbiAgICBjb25zdCB0YXNrVmlld05hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRhc2tWaWV3TmFtZUNvbnRhaW5lci5jbGFzc05hbWUgPSBcInRhc2tWaWV3TmFtZUNvbnRhaW5lclwiO1xyXG4gICAgdGFza1ZpZXdDb250YWluZXIuYXBwZW5kKHRhc2tWaWV3TmFtZUNvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3QgY2hlY2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNoZWNrQ29udGFpbmVyLmNsYXNzTmFtZSA9ICd0YXNrVmlld0NoZWNrQ29udGFpbmVyJztcclxuICAgIGNoZWNrQ29udGFpbmVyLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48dGl0bGU+aW9uaWNvbnMtdjUtcTwvdGl0bGU+PGNpcmNsZSBjeD1cIjI1NlwiIGN5PVwiMjU2XCIgcj1cIjE5MlwiIHN0eWxlPVwiZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MzJweFwiLz48L3N2Zz4nO1xyXG4gICAgdGFza1ZpZXdOYW1lQ29udGFpbmVyLmFwcGVuZChjaGVja0NvbnRhaW5lcilcclxuXHJcbiAgICBjb25zdCB0YXNrVmlld05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0YXNrVmlld05hbWUuY2xhc3NOYW1lID0gXCJ0YXNrVmlld05hbWVcIjtcclxuICAgIHRhc2tWaWV3TmFtZS5pbm5lclRleHQgPSBcIkV4ZXJjaXNlXCI7XHJcbiAgICB0YXNrVmlld05hbWVDb250YWluZXIuYXBwZW5kKHRhc2tWaWV3TmFtZSk7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCB0YXNrVmlld0Rlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YXNrVmlld0Rlc2NyaXB0aW9uQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwidGFza1ZpZXdEZXNjcmlwdGlvbkNvbnRhaW5lclwiO1xyXG4gICAgdGFza1ZpZXdEZXNjcmlwdGlvbkNvbnRhaW5lci5pbm5lclRleHQgPSBcIkRlc2NyaXB0aW9uXCI7XHJcbiAgICB0YXNrVmlld0NvbnRhaW5lci5hcHBlbmQodGFza1ZpZXdEZXNjcmlwdGlvbkNvbnRhaW5lcik7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCB0YXNrVmlld0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdGFza1ZpZXdEZXNjcmlwdGlvbi5jbGFzc05hbWUgPSBcInRhc2tWaWV3RGVzY3JpcHRpb25cIjtcclxuICAgIHRhc2tWaWV3RGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJXb3Jrb3V0IGZvciA0NSBtaW51dGVzXCJcclxuICAgIHRhc2tWaWV3RGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kKHRhc2tWaWV3RGVzY3JpcHRpb24pXHJcblxyXG4gICAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3NDb250YWluZXInKTtcclxuICAgIFxyXG5cclxuICAgIHRhc2tzQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgtMzAlKVwiO1xyXG4gICAgdGFza3NDb250YWluZXIuc3R5bGUudHJhbnNpdGlvbiA9IFwiYWxsIDAuMTVzIGVhc2VcIjtcclxuXHJcblxyXG5cclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgIHRhc2tzQ29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb24gPSBcImFsbCAwcyBsaW5lYXJcIjtcclxuICAgICAgICB0YXNrc0NvbnRhaW5lci5zdHlsZS5tYXJnaW4gPSBcIjM4cHggMCBhdXRvIDMwJVwiO1xyXG4gICAgICAgIHRhc2tzQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgwKVwiO1xyXG5cclxuICAgICAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnRDb250YWluZXInKTtcclxuICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZCh0YXNrVmlld0NvbnRhaW5lcik7XHJcbiAgICAgICAgdGFza1ZpZXdDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKDI1dncpXCI7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgdGFza1ZpZXdDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IFwiMTAwXCI7XHJcbiAgICAgICAgICAgIHRhc2tWaWV3Q29udGFpbmVyLnN0eWxlLndpZHRoID0gXCI0MDBweFwiXHJcbiAgICAgICAgICAgIHRhc2tWaWV3Q29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSBcIjEwMFwiXHJcbiAgICAgICAgICAgIHRhc2tWaWV3Q29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgwKVwiO1xyXG4gICAgICAgIH0sMTApXHJcbiAgICAgICAgXHJcbiAgICB9LDE1MClcclxuXHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbFBhZ2VMb2FkO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0aWFsUGFnZUxvYWQgZnJvbSBcIi4vbW9kdWxlcy91aVwiO1xyXG5pbXBvcnQgVGFzayBmcm9tIFwiLi9tb2R1bGVzL3Rhc2tcIjtcclxuaW1wb3J0IHsgZXhhbXBsZVRhc2tzIH0gZnJvbSBcIi4vbW9kdWxlcy9jcmVhdGUtdGFza1wiO1xyXG5pbXBvcnQgeyBjaGVja0NsaWNrLCBmb3JtQWRkQnV0dG9uQ2xpY2tlZCwgZm9ybUNhbmNlbCwgc2VsZWN0VGFzayB9IGZyb20gXCIuL21vZHVsZXMvZXZlbnQtaGFuZGxlcnNcIjtcclxuaW1wb3J0IGJ1dHRvbkNsaWNrZWQgZnJvbSBcIi4vbW9kdWxlcy9ldmVudC1oYW5kbGVyc1wiO1xyXG5cclxuXHJcblxyXG5pbml0aWFsUGFnZUxvYWQoKTtcclxuZXhhbXBsZVRhc2tzKCk7XHJcbmJ1dHRvbkNsaWNrZWQoKTtcclxuZm9ybUFkZEJ1dHRvbkNsaWNrZWQoKTtcclxuZm9ybUNhbmNlbCgpO1xyXG5zZWxlY3RUYXNrKCk7XHJcbmNoZWNrQ2xpY2soKTtcclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9