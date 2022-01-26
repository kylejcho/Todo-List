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
    createTask("Exercise", "Workout out for 45 minutes", "today", '');
    createTask("Coffee with friend", "Starbucks", "today", '');
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
            
        }
    })
}

const deleteClick = () => {
    document.querySelector('#contentContainer').addEventListener('click', (e)=> {
        if (e.target.parentNode.className == 'deleteContainer') {
            const taskContainer = e.target.parentNode.parentNode;
            taskContainer.style.opacity = "0";
            taskContainer.style.animation = "taskContainerDelete 0.3s ease";

            const subgroup = taskContainer.parentNode;

            const a = subgroup.querySelectorAll('.taskContainer');
            console.log(a.className)

            for (let i = 0; i < a.length; i++) {
                a[i].style.animation = "taskContainerDelete 0.3s ease";
                setTimeout(()=> {
                    a[i].style.animation = "none";
                },300)
            }

            
            
            setTimeout(()=> {
                taskContainer.remove();
            },300)
            
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNlO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNkNBQUk7QUFDMUI7QUFDQSxJQUFJLHdEQUFtQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxVQUFVLEVBQUM7QUFDMUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEN1QztBQUNGO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0RBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0RBQWE7QUFDN0IsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxnTkFBZ04sWUFBWSxxQkFBcUIsc0JBQXNCO0FBQ3ZRO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsY0FBYztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsZ0JBQWdCLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzNKaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7OztBQzlCbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb01BQW9NLFlBQVkscUJBQXFCLHNCQUFzQjtBQUMzUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb01BQW9NLFlBQVkscUJBQXFCLHNCQUFzQjtBQUMzUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxlQUFlLEVBQUM7Ozs7Ozs7VUM1Sy9CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOMkM7QUFDVDtBQUNtQjtBQUNHO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQWU7QUFDZixrRUFBWTtBQUNaLG1FQUFnQjtBQUNoQjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY3JlYXRlLXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZXZlbnQtaGFuZGxlcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy91aS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xyXG5pbXBvcnQge2NyZWF0ZVRhc2tDb250YWluZXJ9IGZyb20gXCIuL3VpXCI7XHJcblxyXG5sZXQgYWxsVGFza3MgPSBbXTtcclxuXHJcblxyXG5jb25zdCBjcmVhdGVUYXNrID0gKHRhc2ssIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBsaXN0KSA9PiB7XHJcbiAgICBsZXQgbmV3VGFzayA9IG5ldyBUYXNrKHRhc2ssIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBsaXN0KTtcclxuICAgIGFsbFRhc2tzLnB1c2gobmV3VGFzayk7XHJcbiAgICBjcmVhdGVUYXNrQ29udGFpbmVyKHRhc2ssIGRlc2NyaXB0aW9uLCBkdWVEYXRlKTtcclxuICAgIGNvbnNvbGUubG9nKGFsbFRhc2tzKVxyXG4gICAgLy9hZGQgdGFzayB0byBnZW5lcmFsIHRhc2sgbGlzdHMgYXJyYXkgXHJcbiAgICAvL2dldCB1aSB0byBjaGVjayBkYXRlLCBhbmQgbGlzdFxyXG4gICAgLy9EZXRlcm1pbmUgd2hlcmUgdG8gZGlzcGxheSB0aGF0IHRhc2sgKHRvZGF5LCB0b21vcnJvdywgdGhpcyB3ZWVrLCBsaXN0KVxyXG4gICAgLy9ydW4gVUkuanMgZnVuY3Rpb24gdG8gYWRkIHRhc2sgZWxlbWVudHMgdG8gdGhlIGRpc3BsYXkuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZXhhbXBsZVRhc2tzID0gKCkgPT4ge1xyXG4gICAgY3JlYXRlVGFzayhcIkV4ZXJjaXNlXCIsIFwiV29ya291dCBvdXQgZm9yIDQ1IG1pbnV0ZXNcIiwgXCJ0b2RheVwiLCAnJyk7XHJcbiAgICBjcmVhdGVUYXNrKFwiQ29mZmVlIHdpdGggZnJpZW5kXCIsIFwiU3RhcmJ1Y2tzXCIsIFwidG9kYXlcIiwgJycpO1xyXG4gICAgY3JlYXRlVGFzayhcIkV4ZXJjaXNlXCIsIFwiV29ya291dCBvdXQgZm9yIDQ1IG1pbnV0ZXNcIiwgXCJ0b2RheVwiLCAnJyk7XHJcbiAgICBjcmVhdGVUYXNrKFwiQ29mZmVlIHdpdGggZnJpZW5kXCIsIFwiU3RhcmJ1Y2tzXCIsIFwidG9kYXlcIiwgJycpO1xyXG4gICAgY3JlYXRlVGFzayhcIkV4ZXJjaXNlXCIsIFwiV29ya291dCBvdXQgZm9yIDQ1IG1pbnV0ZXNcIiwgXCJ0b2RheVwiLCAnJyk7XHJcbiAgICBjcmVhdGVUYXNrKFwiQ29mZmVlIHdpdGggZnJpZW5kXCIsIFwiU3RhcmJ1Y2tzXCIsIFwidG9kYXlcIiwgJycpO1xyXG4gICAgY3JlYXRlVGFzayhcIlJlYWRcIiwgXCJSZWFkIHR3byBjaGFwdGVyXCIsIFwidG9tb3Jyb3dcIiwgJycpO1xyXG4gICAgY3JlYXRlVGFzayhcIkxlYXJuIHNpZ24gbGFuZ3VhZ2VcIiwgXCJQcmFjdGljZSBlbmdsaXNoIGFscGhhYmV0XCIsIFwidG9tb3Jyb3dcIiwgJycpO1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUYXNrO1xyXG5cclxuIiwiaW1wb3J0IGNyZWF0ZVRhc2sgZnJvbSBcIi4vY3JlYXRlLXRhc2tcIjtcclxuaW1wb3J0IHsgdGFza1NlbGVjdGlvbiB9IGZyb20gXCIuL3VpXCI7XHJcblxyXG5jb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkQnV0dG9uJyk7XHJcbmNvbnN0IGZvcm1BZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0Zvcm1BZGRCdXR0b24nKTtcclxuY29uc3QgaW5wdXRUYXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dFRhc2tOYW1lJyk7XHJcbmNvbnN0IGlucHV0VGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0VGFza0Rlc2NyaXB0aW9uJyk7XHJcbmNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tGb3JtQ29udGFpbmVyXCIpO1xyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrRm9ybVwiKTtcclxuY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza0NvbnRhaW5lclwiKTtcclxuXHJcbmNvbnN0IGJ1dHRvbkNsaWNrZWQgPSAoKSA9PiB7XHJcbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBmb3JtQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgICAgICBmb3JtLnN0eWxlLm9wYWNpdHkgPSBcIjEwMFwiO1xyXG4gICAgICAgIGZvcm0uc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgxKVwiO1xyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgZm9ybUFkZEJ1dHRvbkNsaWNrZWQgPSAoKSA9PiB7XHJcbiAgICBmb3JtQWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKGlucHV0VGFza05hbWUudmFsdWUpIHtcclxuICAgICAgICAgICAgY3JlYXRlVGFzayhpbnB1dFRhc2tOYW1lLnZhbHVlLCBpbnB1dFRhc2tEZXNjcmlwdGlvbi52YWx1ZSwgXCJ0b2RheVwiKTtcclxuICAgICAgICAgICAgZm9ybS5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICAgICAgICAgIGZvcm1Db250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgIGlucHV0VGFza05hbWUudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgaW5wdXRUYXNrRGVzY3JpcHRpb24udmFsdWUgPScnO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBmb3JtQ2FuY2VsID0gKCkgPT4ge1xyXG4gICAgZm9ybUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5pZCA9PSAndGFza0Zvcm1Db250YWluZXInKSB7XHJcbiAgICAgICAgICAgIGZvcm0uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICBmb3JtLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMClcIjtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuY29uc3Qgc2VsZWN0VGFzayA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT4ge1xyXG4gICAgICAgIGNvbnN0IGNsaWNrID0gZS50YXJnZXQ7XHJcbiAgICAgICAgaWYgKGNsaWNrLmNsYXNzTmFtZSA9PSBcInRhc2tDb250YWluZXJcIiB8fCBjbGljay5jbGFzc05hbWUgPT0gXCJuYW1lQ29udGFpbmVyXCIgfHwgY2xpY2suY2xhc3NOYW1lID09IFwiZGVzY3JpcHRpb25Db250YWluZXJcIikge1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrVmlld0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrVmlld0NvbnRhaW5lcicpXHJcbiAgICAgICAgICAgIGlmICghdGFza1ZpZXdDb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIHRhc2tTZWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5jb25zdCBjaGVja0NsaWNrID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NOYW1lID09ICdjaGVja0NvbnRhaW5lcicgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrZWRUYXNrID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGUudGFyZ2V0LnBhcmVudE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICAgICBjb25zdCBkZWxldGVDb250YWluZXIgPSB0YXNrTmFtZS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrQ29udGFpbmVyID0gZS50YXJnZXQucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNoZWNrQ29udGFpbmVyLnN0eWxlLmFuaW1hdGlvbiA9IFwiY2hlY2tDbGljayAwLjNzIGVhc2Utb3V0XCI7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWNoZWNrZWRUYXNrLmNsYXNzTmFtZS5pbmNsdWRlcygnY29tcGxldGVkJykpIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrZWRUYXNrLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgdGFza05hbWUuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcIjEwMCUgMTAwJVwiO1xyXG4gICAgICAgICAgICAgICAgY2hlY2tDb250YWluZXIuaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjx0aXRsZT5pb25pY29ucy12NS1lPC90aXRsZT48cGF0aCBkPVwiTTI1Niw0OEMxNDEuMzEsNDgsNDgsMTQxLjMxLDQ4LDI1NnM5My4zMSwyMDgsMjA4LDIwOCwyMDgtOTMuMzEsMjA4LTIwOFMzNzAuNjksNDgsMjU2LDQ4Wk0zNjQuMjUsMTg2LjI5bC0xMzQuNCwxNjBhMTYsMTYsMCwwLDEtMTIsNS43MWgtLjI3YTE2LDE2LDAsMCwxLTExLjg5LTUuM2wtNTcuNi02NGExNiwxNiwwLDEsMSwyMy43OC0yMS40bDQ1LjI5LDUwLjMyTDMzOS43NSwxNjUuNzFhMTYsMTYsMCwwLDEsMjQuNSwyMC41OFpcIi8+PC9zdmc+J1xyXG4gICAgICAgICAgICAgICAgY2hlY2tDb250YWluZXIuc3R5bGUuZmlsdGVyID0gXCJicmlnaHRuZXNzKDApIHNhdHVyYXRlKDEwMCUpIGludmVydCg3NCUpIHNlcGlhKDEzJSkgc2F0dXJhdGUoMjI3JSkgaHVlLXJvdGF0ZSgxNzdkZWcpIGJyaWdodG5lc3MoMTAzJSkgY29udHJhc3QoOTclKVwiO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlQ29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSBcIjEwMFwiO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hlY2tlZFRhc2suY2xhc3NOYW1lLmluY2x1ZGVzKCdjb21wbGV0ZWQnKSl7XHJcbiAgICAgICAgICAgICAgICBjaGVja2VkVGFzay5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQnKTtcclxuICAgICAgICAgICAgICAgIHRhc2tOYW1lLnN0eWxlLmJhY2tncm91bmRTaXplID0gXCIwJSAxMDAlXCI7XHJcbiAgICAgICAgICAgICAgICBjaGVja0NvbnRhaW5lci5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHRpdGxlPmlvbmljb25zLXY1LXE8L3RpdGxlPjxjaXJjbGUgY3g9XCIyNTZcIiBjeT1cIjI1NlwiIHI9XCIxOTJcIiBzdHlsZT1cImZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjMycHhcIi8+PC9zdmc+J1xyXG4gICAgICAgICAgICAgICAgY2hlY2tDb250YWluZXIuc3R5bGUuZmlsdGVyID0gXCIgYnJpZ2h0bmVzcygwKSBzYXR1cmF0ZSgxMDAlKSBpbnZlcnQoOSUpIHNlcGlhKDQzJSkgc2F0dXJhdGUoMzM4JSkgaHVlLXJvdGF0ZSgxNzdkZWcpIGJyaWdodG5lc3MoMTAwJSkgY29udHJhc3QoOTYlKVwiO1xyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja0NvbnRhaW5lci5zdHlsZS5hbmltYXRpb24gPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIH0sMTApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgZGVsZXRlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudENvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTmFtZSA9PSAnZGVsZXRlQ29udGFpbmVyJykge1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5zdHlsZS5hbmltYXRpb24gPSBcInRhc2tDb250YWluZXJEZWxldGUgMC4zcyBlYXNlXCI7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdWJncm91cCA9IHRhc2tDb250YWluZXIucGFyZW50Tm9kZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSBzdWJncm91cC5xdWVyeVNlbGVjdG9yQWxsKCcudGFza0NvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhLmNsYXNzTmFtZSlcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgYVtpXS5zdHlsZS5hbmltYXRpb24gPSBcInRhc2tDb250YWluZXJEZWxldGUgMC4zcyBlYXNlXCI7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFbaV0uc3R5bGUuYW5pbWF0aW9uID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICB9LDMwMClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICAgICAgICAgdGFza0NvbnRhaW5lci5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfSwzMDApXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgdGFza0NvbnRhaW5lckhvdmVyID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnRDb250YWluZXInKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSk9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSAndGFza0NvbnRhaW5lcicgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgY29uc3QgZGVsZXRlQ29udGFpbmVyID0gdGFza0NvbnRhaW5lci5jaGlsZHJlblsyXTtcclxuICAgICAgICAgICAgZGVsZXRlQ29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSBcIjEwMFwiO1xyXG5cclxuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCk9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRhc2tDb250YWluZXIuY2xhc3NOYW1lLmluY2x1ZGVzKCdjb21wbGV0ZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZUNvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09ICdkZXNjcmlwdGlvbkNvbnRhaW5lcicgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUNvbnRhaW5lciA9IGRlc2NyaXB0aW9uQ29udGFpbmVyLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgICAgIGRlbGV0ZUNvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gXCIxMDBcIjtcclxuICAgICAgICB9IFxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcbmNvbnN0IHJ1bkV2ZW50SGFuZGxlcnMgPSAoKSA9PiB7XHJcbiAgICBjaGVja0NsaWNrKCk7XHJcbiAgICBmb3JtQWRkQnV0dG9uQ2xpY2tlZCgpO1xyXG4gICAgZm9ybUNhbmNlbCgpO1xyXG4gICAgc2VsZWN0VGFzaygpO1xyXG4gICAgdGFza0NvbnRhaW5lckhvdmVyKCk7XHJcbiAgICBkZWxldGVDbGljaygpXHJcbiAgICBidXR0b25DbGlja2VkKClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcnVuRXZlbnRIYW5kbGVycztcclxuIiwiY2xhc3MgVGFzayB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgbGlzdCkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgICAgdGhpcy5saXN0ID0gbGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBnZXROYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TmFtZShuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBzZXREdWVEYXRlKGR1ZURhdGUpIHtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldExpc3QobGlzdCkge1xyXG4gICAgICAgIHRoaXMubGlzdCA9IGxpc3Q7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYXNrOyIsImNvbnN0IGluaXRpYWxQYWdlTG9hZCA9ICgpID0+IHtcclxuICAgIGxvYWRpbmdQYWdlKClcclxuICAgIGNyZWF0ZUFsbFRhc2tzQ29udGFpbmVyKCk7XHJcbn1cclxuXHJcbmNvbnN0IGxvYWRpbmdQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbG9hZGluZ1NjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9hZGluZ1NjcmVlblwiKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcclxuICAgICAgICBib2R5LnN0eWxlLm92ZXJmbG93WT0gXCJoaWRkZW5cIjtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICAgICBsb2FkaW5nU2NyZWVuLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgbG9hZGluZ1NjcmVlbi5yZW1vdmUoKTtcclxuICAgICAgICAgICAgYm9keS5zdHlsZS5vdmVyZmxvd1k9IFwidmlzaWJsZVwiO1xyXG4gICAgICAgIH0sIDMwMClcclxuICAgICAgICB9LCA1MDApXHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbi8vQUxMIFRBU0tTIENPTlRFTlRcclxuY29uc3QgY3JlYXRlQWxsVGFza3NDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhbGxUYXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWxsVGFza3NDb250YWluZXIuaWQgPSBcImFsbFRhc2tzQ29udGFpbmVyXCI7XHJcbiAgICBhbGxUYXNrc0NvbnRhaW5lci5jbGFzc05hbWUgPSBcInRhc2tzQ29udGFpbmVyXCI7XHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBhbGxUYXNrc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhbGxUYXNrc1RpdGxlLmlkID0gJ3RpdGxlQ29udGFpbmVyJztcclxuICAgIGFsbFRhc2tzVGl0bGUuY2xhc3NOYW1lID0gXCJ0YXNrc1RpdGxlXCI7XHJcbiAgICBhbGxUYXNrc1RpdGxlLmlubmVyVGV4dCA9IFwiQWxsIFRhc2tzXCI7XHJcblxyXG4gICAgYWxsVGFza3NDb250YWluZXIuYXBwZW5kKGFsbFRhc2tzVGl0bGUpO1xyXG5cclxuXHJcbiAgICBjcmVhdGVTdWJHcm91cHMoXCJ0b2RheVwiLCBhbGxUYXNrc0NvbnRhaW5lcik7XHJcbiAgICBjcmVhdGVTdWJHcm91cHMoXCJ0b21vcnJvd1wiLCBhbGxUYXNrc0NvbnRhaW5lcik7XHJcbiAgICBjcmVhdGVTdWJHcm91cHMoXCJ1cGNvbWluZ1wiLCBhbGxUYXNrc0NvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Q29udGFpbmVyJyk7XHJcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZChhbGxUYXNrc0NvbnRhaW5lcik7XHJcblxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVTdWJHcm91cHMgPSAoZ3JvdXAsIGFsbFRhc2tzQ29udGFpbmVyKSA9PiB7XHJcblxyXG4gICAgY29uc3QgY2FwaXRhbGl6ZSA9IChzdHIpID0+IHtcclxuICAgICAgICByZXR1cm4gc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdWJHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc3ViR3JvdXAuY2xhc3NOYW1lID0gXCJzdWJHcm91cFwiO1xyXG4gICAgc3ViR3JvdXAuaWQgPSBncm91cDtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHN1Ykdyb3VwVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBzdWJHcm91cFRpdGxlLmNsYXNzTmFtZSA9IFwic3ViR3JvdXBUaXRsZVwiO1xyXG5cclxuXHJcbiAgICBzdWJHcm91cFRpdGxlLmlubmVyVGV4dCA9IGNhcGl0YWxpemUoZ3JvdXApO1xyXG5cclxuXHJcbiAgICBzdWJHcm91cC5hcHBlbmQoc3ViR3JvdXBUaXRsZSlcclxuXHJcbiAgICBhbGxUYXNrc0NvbnRhaW5lci5hcHBlbmQoc3ViR3JvdXApO1xyXG59ICAgXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRhc2tDb250YWluZXIgPSAodGFzaywgZGVzY3JpcHRpb24sIGR1ZURhdGUpID0+IHtcclxuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRhc2tDb250YWluZXIuY2xhc3NOYW1lID0gJ3Rhc2tDb250YWluZXInO1xyXG5cclxuXHJcbiAgICBjb25zdCBjaGVja0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2hlY2tDb250YWluZXIuY2xhc3NOYW1lID0gJ2NoZWNrQ29udGFpbmVyJztcclxuICAgIGNoZWNrQ29udGFpbmVyLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48dGl0bGU+aW9uaWNvbnMtdjUtcTwvdGl0bGU+PGNpcmNsZSBjeD1cIjI1NlwiIGN5PVwiMjU2XCIgcj1cIjE5MlwiIHN0eWxlPVwiZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MzJweFwiLz48L3N2Zz4nXHJcblxyXG4gICAgY29uc3QgbmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBuYW1lQ29udGFpbmVyLmNsYXNzTmFtZSA9J25hbWVDb250YWluZXInO1xyXG4gICAgbmFtZUNvbnRhaW5lci5pbm5lclRleHQgPSB0YXNrO1xyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGVsZXRlQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdkZWxldGVDb250YWluZXInO1xyXG4gICAgZGVsZXRlQ29udGFpbmVyLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48dGl0bGU+aW9uaWNvbnMtdjUtbTwvdGl0bGU+PHBhdGggZD1cIk0yNTYsNDhDMTQxLjMxLDQ4LDQ4LDE0MS4zMSw0OCwyNTZzOTMuMzEsMjA4LDIwOCwyMDgsMjA4LTkzLjMxLDIwOC0yMDhTMzcwLjY5LDQ4LDI1Niw0OFptNzUuMzEsMjYwLjY5YTE2LDE2LDAsMSwxLTIyLjYyLDIyLjYyTDI1NiwyNzguNjNsLTUyLjY5LDUyLjY4YTE2LDE2LDAsMCwxLTIyLjYyLTIyLjYyTDIzMy4zNywyNTZsLTUyLjY4LTUyLjY5YTE2LDE2LDAsMCwxLDIyLjYyLTIyLjYyTDI1NiwyMzMuMzdsNTIuNjktNTIuNjhhMTYsMTYsMCwwLDEsMjIuNjIsMjIuNjJMMjc4LjYzLDI1NlpcIi8+PC9zdmc+JztcclxuXHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdkZXNjcmlwdGlvbkNvbnRhaW5lcic7XHJcbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5pbm5lclRleHQgPSBkZXNjcmlwdGlvbjtcclxuXHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZChjaGVja0NvbnRhaW5lcik7XHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZChuYW1lQ29udGFpbmVyKTtcclxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kKGRlbGV0ZUNvbnRhaW5lcik7XHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZChkZXNjcmlwdGlvbkNvbnRhaW5lcik7XHJcbiAgICBcclxuXHJcbiAgICBsZXQgc3ViR3JvdXA7XHJcbiAgICBpZiAoZHVlRGF0ZSA9PSAndG9kYXknKSB7XHJcbiAgICAgICAgc3ViR3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kYXknKTtcclxuICAgIH0gZWxzZSBpZiAoZHVlRGF0ZSA9PSAndG9tb3Jyb3cnKSB7XHJcbiAgICAgICAgc3ViR3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9tb3Jyb3cnKTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJHcm91cC5hcHBlbmQodGFza0NvbnRhaW5lcik7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0YXNrU2VsZWN0aW9uID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGFza1ZpZXdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRhc2tWaWV3Q29udGFpbmVyLmNsYXNzTmFtZSA9ICd0YXNrVmlld0NvbnRhaW5lcic7XHJcbiAgICBcclxuICAgIGNvbnN0IHRhc2tWaWV3TmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGFza1ZpZXdOYW1lQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwidGFza1ZpZXdOYW1lQ29udGFpbmVyXCI7XHJcbiAgICB0YXNrVmlld0NvbnRhaW5lci5hcHBlbmQodGFza1ZpZXdOYW1lQ29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBjaGVja0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2hlY2tDb250YWluZXIuY2xhc3NOYW1lID0gJ3Rhc2tWaWV3Q2hlY2tDb250YWluZXInO1xyXG4gICAgY2hlY2tDb250YWluZXIuaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjx0aXRsZT5pb25pY29ucy12NS1xPC90aXRsZT48Y2lyY2xlIGN4PVwiMjU2XCIgY3k9XCIyNTZcIiByPVwiMTkyXCIgc3R5bGU9XCJmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDozMnB4XCIvPjwvc3ZnPic7XHJcbiAgICB0YXNrVmlld05hbWVDb250YWluZXIuYXBwZW5kKGNoZWNrQ29udGFpbmVyKVxyXG5cclxuICAgIGNvbnN0IHRhc2tWaWV3TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRhc2tWaWV3TmFtZS5jbGFzc05hbWUgPSBcInRhc2tWaWV3TmFtZVwiO1xyXG4gICAgdGFza1ZpZXdOYW1lLmlubmVyVGV4dCA9IFwiRXhlcmNpc2VcIjtcclxuICAgIHRhc2tWaWV3TmFtZUNvbnRhaW5lci5hcHBlbmQodGFza1ZpZXdOYW1lKTtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHRhc2tWaWV3RGVzY3JpcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRhc2tWaWV3RGVzY3JpcHRpb25Db250YWluZXIuY2xhc3NOYW1lID0gXCJ0YXNrVmlld0Rlc2NyaXB0aW9uQ29udGFpbmVyXCI7XHJcbiAgICB0YXNrVmlld0Rlc2NyaXB0aW9uQ29udGFpbmVyLmlubmVyVGV4dCA9IFwiRGVzY3JpcHRpb25cIjtcclxuICAgIHRhc2tWaWV3Q29udGFpbmVyLmFwcGVuZCh0YXNrVmlld0Rlc2NyaXB0aW9uQ29udGFpbmVyKTtcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IHRhc2tWaWV3RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0YXNrVmlld0Rlc2NyaXB0aW9uLmNsYXNzTmFtZSA9IFwidGFza1ZpZXdEZXNjcmlwdGlvblwiO1xyXG4gICAgdGFza1ZpZXdEZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIldvcmtvdXQgZm9yIDQ1IG1pbnV0ZXNcIlxyXG4gICAgdGFza1ZpZXdEZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmQodGFza1ZpZXdEZXNjcmlwdGlvbilcclxuXHJcbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrc0NvbnRhaW5lcicpO1xyXG4gICAgXHJcblxyXG4gICAgdGFza3NDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKC0zMCUpXCI7XHJcbiAgICB0YXNrc0NvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uID0gXCJhbGwgMC4xNXMgZWFzZVwiO1xyXG5cclxuXHJcblxyXG5cclxuICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgdGFza3NDb250YWluZXIuc3R5bGUudHJhbnNpdGlvbiA9IFwiYWxsIDBzIGxpbmVhclwiO1xyXG4gICAgICAgIHRhc2tzQ29udGFpbmVyLnN0eWxlLm1hcmdpbiA9IFwiMzhweCAwIGF1dG8gMzAlXCI7XHJcbiAgICAgICAgdGFza3NDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKDApXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudENvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kKHRhc2tWaWV3Q29udGFpbmVyKTtcclxuICAgICAgICB0YXNrVmlld0NvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoMjV2dylcIjtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICAgICB0YXNrVmlld0NvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gXCIxMDBcIjtcclxuICAgICAgICAgICAgdGFza1ZpZXdDb250YWluZXIuc3R5bGUud2lkdGggPSBcIjQwMHB4XCJcclxuICAgICAgICAgICAgdGFza1ZpZXdDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IFwiMTAwXCJcclxuICAgICAgICAgICAgdGFza1ZpZXdDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKDApXCI7XHJcbiAgICAgICAgfSwxMClcclxuICAgICAgICBcclxuICAgIH0sMTUwKVxyXG5cclxuICAgIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsUGFnZUxvYWQ7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGluaXRpYWxQYWdlTG9hZCBmcm9tIFwiLi9tb2R1bGVzL3VpXCI7XHJcbmltcG9ydCBUYXNrIGZyb20gXCIuL21vZHVsZXMvdGFza1wiO1xyXG5pbXBvcnQgeyBleGFtcGxlVGFza3MgfSBmcm9tIFwiLi9tb2R1bGVzL2NyZWF0ZS10YXNrXCI7XHJcbmltcG9ydCBydW5FdmVudEhhbmRsZXJzIGZyb20gXCIuL21vZHVsZXMvZXZlbnQtaGFuZGxlcnNcIjtcclxuXHJcblxyXG5cclxuXHJcbmluaXRpYWxQYWdlTG9hZCgpO1xyXG5leGFtcGxlVGFza3MoKTtcclxucnVuRXZlbnRIYW5kbGVycygpO1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==