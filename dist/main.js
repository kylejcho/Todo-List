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
            inputTaskDescription.value = '';
            
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
        const target = e.target;
        if (target.className == "taskContainer" || target.className == "nameContainer" || target.className == "descriptionContainer") {
            taskSelection(target);
        }
    })
}

const deselectTask = () => {
    const contentContainer = document.querySelector('#contentContainer')
    document.addEventListener('click', (e)=> {
        const target = e.target
        if (target == document.querySelector('#contentContainer')) {
            const taskViewContainer = document.querySelector('.taskViewContainer');
            taskViewContainer.remove();
            const tasksContainer = document.querySelector('.tasksContainer');
            tasksContainer.style.transition = "all 0s linear";
            tasksContainer.style.margin = "38px auto auto auto";
            tasksContainer.style.transform = "translateX(-30%)";

            setTimeout(()=> {
                tasksContainer.style.transition = "all 0.15s ease";
                tasksContainer.style.transform = "translateX(0)";
            },10)
        }
    })
}

const taskSelection = (taskContainer) => {
    if (taskContainer.className != "taskContainer") {
        taskContainer = taskContainer.parentNode;
    } 

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
    (0,_ui__WEBPACK_IMPORTED_MODULE_1__.createTaskView)(selectedTask);
    console.log(selectedTask)
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

            const spacer = document.createElement('div')
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
                    taskContainer.style.opacity = "100";
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
        taskContainer.style.opacity = "100";
    },50)
}

const createTaskView = (task) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsZUFBZSxFQUFDOzs7Ozs7O1VDakwvQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjJDO0FBQ1Q7QUFDbUI7QUFDRztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUFlO0FBQ2Ysa0VBQVk7QUFDWixtRUFBZ0I7QUFDaEI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NyZWF0ZS10YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2V2ZW50LWhhbmRsZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdWkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcclxuaW1wb3J0IHtjcmVhdGVUYXNrQ29udGFpbmVyfSBmcm9tIFwiLi91aVwiO1xyXG5cclxuZXhwb3J0IGxldCBhbGxUYXNrcyA9IFtdO1xyXG5cclxuXHJcbmNvbnN0IGNyZWF0ZVRhc2sgPSAodGFzaywgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGxpc3QpID0+IHtcclxuICAgIGxldCBrZXkgPSAwXHJcbiAgICBpZiAoYWxsVGFza3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsVGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGFsbFRhc2tzW2ldLmtleSA9PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgIGtleSsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IG5ld1Rhc2sgPSBuZXcgVGFzayh0YXNrLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgbGlzdCwga2V5KTtcclxuICAgIGFsbFRhc2tzLnB1c2gobmV3VGFzayk7XHJcbiAgICBjcmVhdGVUYXNrQ29udGFpbmVyKHRhc2ssIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBrZXkpO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBleGFtcGxlVGFza3MgPSAoKSA9PiB7XHJcbiAgICBjcmVhdGVUYXNrKFwiRXhlcmNpc2VcIiwgXCJXb3Jrb3V0IG91dCBmb3IgNDUgbWludXRlc1wiLCBcInRvZGF5XCIsICcnKTtcclxuICAgIGNyZWF0ZVRhc2soXCJDb2ZmZWUgd2l0aCBmcmllbmRcIiwgXCJTdGFyYnVja3NcIiwgXCJ0b2RheVwiLCAnJyk7XHJcbiAgICBjcmVhdGVUYXNrKFwiQ29va2luZyBjbGFzc1wiLCBcIkJyaW5nIGhvbWVtYWRlIHBpZVwiLCBcInRvZGF5XCIsICcnKTtcclxuICAgIGNyZWF0ZVRhc2soXCJSZWFkXCIsIFwiUmVhZCB0d28gY2hhcHRlclwiLCBcInRvbW9ycm93XCIsICcnKTtcclxuICAgIGNyZWF0ZVRhc2soXCJMZWFybiBzaWduIGxhbmd1YWdlXCIsIFwiUHJhY3RpY2UgZW5nbGlzaCBhbHBoYWJldFwiLCBcInRvbW9ycm93XCIsICcnKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhhbGxUYXNrcylcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhc2s7XHJcblxyXG4iLCJpbXBvcnQgY3JlYXRlVGFzayBmcm9tIFwiLi9jcmVhdGUtdGFza1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVUYXNrVmlldyB9IGZyb20gXCIuL3VpXCI7XHJcbmltcG9ydCB7IGFsbFRhc2tzIH0gZnJvbSBcIi4vY3JlYXRlLXRhc2tcIjtcclxuXHJcbmNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRCdXR0b24nKTtcclxuY29uc3QgZm9ybUFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrRm9ybUFkZEJ1dHRvbicpO1xyXG5jb25zdCBpbnB1dFRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0VGFza05hbWUnKTtcclxuY29uc3QgaW5wdXRUYXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXRUYXNrRGVzY3JpcHRpb24nKTtcclxuY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza0Zvcm1Db250YWluZXJcIik7XHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tGb3JtXCIpO1xyXG5jb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrQ29udGFpbmVyXCIpO1xyXG5cclxuY29uc3QgYnV0dG9uQ2xpY2tlZCA9ICgpID0+IHtcclxuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGZvcm1Db250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgICAgIGZvcm0uc3R5bGUub3BhY2l0eSA9IFwiMTAwXCI7XHJcbiAgICAgICAgZm9ybS5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEpXCI7XHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBmb3JtQWRkQnV0dG9uQ2xpY2tlZCA9ICgpID0+IHtcclxuICAgIGZvcm1BZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoaW5wdXRUYXNrTmFtZS52YWx1ZSkge1xyXG4gICAgICAgICAgICBjcmVhdGVUYXNrKGlucHV0VGFza05hbWUudmFsdWUsIGlucHV0VGFza0Rlc2NyaXB0aW9uLnZhbHVlLCBcInRvZGF5XCIpO1xyXG4gICAgICAgICAgICBmb3JtLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgaW5wdXRUYXNrTmFtZS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBpbnB1dFRhc2tEZXNjcmlwdGlvbi52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuY29uc3QgZm9ybUNhbmNlbCA9ICgpID0+IHtcclxuICAgIGZvcm1Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcclxuICAgICAgICBpZiAoZS50YXJnZXQuaWQgPT0gJ3Rhc2tGb3JtQ29udGFpbmVyJykge1xyXG4gICAgICAgICAgICBmb3JtLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgZm9ybS5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDApXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcbmNvbnN0IHNlbGVjdFRhc2sgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+IHtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTmFtZSA9PSBcInRhc2tDb250YWluZXJcIiB8fCB0YXJnZXQuY2xhc3NOYW1lID09IFwibmFtZUNvbnRhaW5lclwiIHx8IHRhcmdldC5jbGFzc05hbWUgPT0gXCJkZXNjcmlwdGlvbkNvbnRhaW5lclwiKSB7XHJcbiAgICAgICAgICAgIHRhc2tTZWxlY3Rpb24odGFyZ2V0KTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBkZXNlbGVjdFRhc2sgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnRDb250YWluZXInKVxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PiB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXRcclxuICAgICAgICBpZiAodGFyZ2V0ID09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Q29udGFpbmVyJykpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFza1ZpZXdDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1ZpZXdDb250YWluZXInKTtcclxuICAgICAgICAgICAgdGFza1ZpZXdDb250YWluZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzQ29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgIHRhc2tzQ29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb24gPSBcImFsbCAwcyBsaW5lYXJcIjtcclxuICAgICAgICAgICAgdGFza3NDb250YWluZXIuc3R5bGUubWFyZ2luID0gXCIzOHB4IGF1dG8gYXV0byBhdXRvXCI7XHJcbiAgICAgICAgICAgIHRhc2tzQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgtMzAlKVwiO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgICAgIHRhc2tzQ29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb24gPSBcImFsbCAwLjE1cyBlYXNlXCI7XHJcbiAgICAgICAgICAgICAgICB0YXNrc0NvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoMClcIjtcclxuICAgICAgICAgICAgfSwxMClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCB0YXNrU2VsZWN0aW9uID0gKHRhc2tDb250YWluZXIpID0+IHtcclxuICAgIGlmICh0YXNrQ29udGFpbmVyLmNsYXNzTmFtZSAhPSBcInRhc2tDb250YWluZXJcIikge1xyXG4gICAgICAgIHRhc2tDb250YWluZXIgPSB0YXNrQ29udGFpbmVyLnBhcmVudE5vZGU7XHJcbiAgICB9IFxyXG5cclxuICAgIGNvbnN0IHNlbGVjdGVkVGFzayA9IGFsbFRhc2tzLmZpbmQoKHRhc2spPT4ge1xyXG4gICAgICAgIGlmICh0YXNrLmtleSA9PSB0YXNrQ29udGFpbmVyLmlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB0YXNrVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrVmlld0NvbnRhaW5lcicpXHJcblxyXG4gICAgaWYgKHRhc2tWaWV3KSB7XHJcbiAgICAgICAgaWYgKHRhc2tWaWV3LmlkID09IFwic1wiICsgc2VsZWN0ZWRUYXNrLmtleSkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0YXNrVmlldy5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrc0NvbnRhaW5lcicpLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgtMzAlKVwiO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlVGFza1ZpZXcoc2VsZWN0ZWRUYXNrKTtcclxuICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkVGFzaylcclxufVxyXG5cclxuXHJcbmNvbnN0IGNoZWNrQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc05hbWUgPT0gJ2NoZWNrQ29udGFpbmVyJyApIHtcclxuICAgICAgICAgICAgY29uc3QgY2hlY2tlZFRhc2sgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZS50YXJnZXQucGFyZW50Tm9kZS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUNvbnRhaW5lciA9IHRhc2tOYW1lLm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgICAgICAgY29uc3QgY2hlY2tDb250YWluZXIgPSBlLnRhcmdldC5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2hlY2tDb250YWluZXIuc3R5bGUuYW5pbWF0aW9uID0gXCJjaGVja0NsaWNrIDAuM3MgZWFzZS1vdXRcIjtcclxuXHJcbiAgICAgICAgICAgIGlmICghY2hlY2tlZFRhc2suY2xhc3NOYW1lLmluY2x1ZGVzKCdjb21wbGV0ZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tlZFRhc2suY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XHJcbiAgICAgICAgICAgICAgICB0YXNrTmFtZS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiMTAwJSAxMDAlXCI7XHJcbiAgICAgICAgICAgICAgICBjaGVja0NvbnRhaW5lci5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHRpdGxlPmlvbmljb25zLXY1LWU8L3RpdGxlPjxwYXRoIGQ9XCJNMjU2LDQ4QzE0MS4zMSw0OCw0OCwxNDEuMzEsNDgsMjU2czkzLjMxLDIwOCwyMDgsMjA4LDIwOC05My4zMSwyMDgtMjA4UzM3MC42OSw0OCwyNTYsNDhaTTM2NC4yNSwxODYuMjlsLTEzNC40LDE2MGExNiwxNiwwLDAsMS0xMiw1LjcxaC0uMjdhMTYsMTYsMCwwLDEtMTEuODktNS4zbC01Ny42LTY0YTE2LDE2LDAsMSwxLDIzLjc4LTIxLjRsNDUuMjksNTAuMzJMMzM5Ljc1LDE2NS43MWExNiwxNiwwLDAsMSwyNC41LDIwLjU4WlwiLz48L3N2Zz4nXHJcbiAgICAgICAgICAgICAgICBjaGVja0NvbnRhaW5lci5zdHlsZS5maWx0ZXIgPSBcImJyaWdodG5lc3MoMCkgc2F0dXJhdGUoMTAwJSkgaW52ZXJ0KDc0JSkgc2VwaWEoMTMlKSBzYXR1cmF0ZSgyMjclKSBodWUtcm90YXRlKDE3N2RlZykgYnJpZ2h0bmVzcygxMDMlKSBjb250cmFzdCg5NyUpXCI7XHJcbiAgICAgICAgICAgICAgICBkZWxldGVDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IFwiMTAwXCI7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjaGVja2VkVGFzay5jbGFzc05hbWUuaW5jbHVkZXMoJ2NvbXBsZXRlZCcpKXtcclxuICAgICAgICAgICAgICAgIGNoZWNrZWRUYXNrLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgdGFza05hbWUuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcIjAlIDEwMCVcIjtcclxuICAgICAgICAgICAgICAgIGNoZWNrQ29udGFpbmVyLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48dGl0bGU+aW9uaWNvbnMtdjUtcTwvdGl0bGU+PGNpcmNsZSBjeD1cIjI1NlwiIGN5PVwiMjU2XCIgcj1cIjE5MlwiIHN0eWxlPVwiZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MzJweFwiLz48L3N2Zz4nXHJcbiAgICAgICAgICAgICAgICBjaGVja0NvbnRhaW5lci5zdHlsZS5maWx0ZXIgPSBcIiBicmlnaHRuZXNzKDApIHNhdHVyYXRlKDEwMCUpIGludmVydCg5JSkgc2VwaWEoNDMlKSBzYXR1cmF0ZSgzMzglKSBodWUtcm90YXRlKDE3N2RlZykgYnJpZ2h0bmVzcygxMDAlKSBjb250cmFzdCg5NiUpXCI7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tDb250YWluZXIuc3R5bGUuYW5pbWF0aW9uID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICB9LDEwKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gdGFza05hbWUucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lckhlaWdodCA9IHRhc2tDb250YWluZXIuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3BhY2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgc3BhY2VyLnN0eWxlLmhlaWdodCA9IHRhc2tDb250YWluZXJIZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgICAgIHNwYWNlci5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIi1cIiArIHRhc2tDb250YWluZXJIZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgICAgIHNwYWNlci5zdHlsZS50cmFuc2l0aW9uID0gXCJhbGwgZWFzZS1pbi1vdXQgMC4yc1wiO1xyXG4gICAgICAgICAgICBjb25zdCBzdWJHcm91cCA9IHRhc2tDb250YWluZXIucGFyZW50Tm9kZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjaGVja2VkVGFzay5jbGFzc05hbWUuaW5jbHVkZXMoJ2NvbXBsZXRlZCcpICYmIHRhc2tDb250YWluZXIubmV4dEVsZW1lbnRTaWJsaW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoc3BhY2VyKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuc3R5bGUubWFyZ2luQm90dG9tID0gXCItXCIgKyB0YXNrQ29udGFpbmVySGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlci5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xyXG4gICAgICAgICAgICAgICAgfSwzMDApXHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VyLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Ykdyb3VwLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSw1MDApXHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IFwiMTAwXCI7XHJcbiAgICAgICAgICAgICAgICB9LDYwMClcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWNoZWNrZWRUYXNrLmNsYXNzTmFtZS5pbmNsdWRlcygnY29tcGxldGVkJykgJiYgdGFza0NvbnRhaW5lciAhPSBzdWJHcm91cC5jaGlsZHJlblsxXSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHN1Ykdyb3VwID0gdGFza0NvbnRhaW5lci5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICAgICAgc3ViR3JvdXAuaW5zZXJ0QmVmb3JlKHNwYWNlciwgc3ViR3JvdXAuY2hpbGRyZW5bMV0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza0NvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza0NvbnRhaW5lci5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIi1cIiArIHRhc2tDb250YWluZXJIZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VyLnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9LDMwMClcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBzcGFjZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ViR3JvdXAuaW5zZXJ0QmVmb3JlKHRhc2tDb250YWluZXIsIHN1Ykdyb3VwLmNoaWxkcmVuWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0sNTAwKVxyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSBcIjEwMFwiO1xyXG4gICAgICAgICAgICAgICAgfSw2MDApXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IGRlbGV0ZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnRDb250YWluZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc05hbWUgPT0gJ2RlbGV0ZUNvbnRhaW5lcicpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tDb250YWluZXJIZWlnaHQgPSB0YXNrQ29udGFpbmVyLmNsaWVudEhlaWdodDtcclxuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKC0xMDAlKVwiO1xyXG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiLVwiICsgdGFza0NvbnRhaW5lckhlaWdodCArIFwicHhcIjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9LDIwMClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgdGFza0NvbnRhaW5lckhvdmVyID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnRDb250YWluZXInKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSk9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSAndGFza0NvbnRhaW5lcicgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgY29uc3QgZGVsZXRlQ29udGFpbmVyID0gdGFza0NvbnRhaW5lci5jaGlsZHJlblsyXTtcclxuICAgICAgICAgICAgZGVsZXRlQ29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSBcIjEwMFwiO1xyXG5cclxuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCk9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRhc2tDb250YWluZXIuY2xhc3NOYW1lLmluY2x1ZGVzKCdjb21wbGV0ZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZUNvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09ICdkZXNjcmlwdGlvbkNvbnRhaW5lcicgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUNvbnRhaW5lciA9IGRlc2NyaXB0aW9uQ29udGFpbmVyLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgICAgIGRlbGV0ZUNvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gXCIxMDBcIjtcclxuICAgICAgICB9IFxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcbmNvbnN0IHJ1bkV2ZW50SGFuZGxlcnMgPSAoKSA9PiB7XHJcbiAgICBjaGVja0NsaWNrKCk7XHJcbiAgICBmb3JtQWRkQnV0dG9uQ2xpY2tlZCgpO1xyXG4gICAgZm9ybUNhbmNlbCgpO1xyXG4gICAgc2VsZWN0VGFzaygpO1xyXG4gICAgZGVzZWxlY3RUYXNrKCk7XHJcbiAgICB0YXNrQ29udGFpbmVySG92ZXIoKTtcclxuICAgIGRlbGV0ZUNsaWNrKClcclxuICAgIGJ1dHRvbkNsaWNrZWQoKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBydW5FdmVudEhhbmRsZXJzO1xyXG4iLCJjbGFzcyBUYXNrIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBsaXN0LCBrZXkpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMubGlzdCA9IGxpc3Q7XHJcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE5hbWUobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RHVlRGF0ZShkdWVEYXRlKSB7XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRMaXN0KGxpc3QpIHtcclxuICAgICAgICB0aGlzLmxpc3QgPSBsaXN0O1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYXNrOyIsImNvbnN0IGluaXRpYWxQYWdlTG9hZCA9ICgpID0+IHtcclxuICAgIGxvYWRpbmdQYWdlKClcclxuICAgIGNyZWF0ZUFsbFRhc2tzQ29udGFpbmVyKCk7XHJcbn1cclxuXHJcbmNvbnN0IGxvYWRpbmdQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbG9hZGluZ1NjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9hZGluZ1NjcmVlblwiKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcclxuICAgICAgICBib2R5LnN0eWxlLm92ZXJmbG93WT0gXCJoaWRkZW5cIjtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICAgICBsb2FkaW5nU2NyZWVuLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgbG9hZGluZ1NjcmVlbi5yZW1vdmUoKTtcclxuICAgICAgICAgICAgYm9keS5zdHlsZS5vdmVyZmxvd1k9IFwidmlzaWJsZVwiO1xyXG4gICAgICAgIH0sIDMwMClcclxuICAgICAgICB9LCA1MDApXHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbi8vQUxMIFRBU0tTIENPTlRFTlRcclxuY29uc3QgY3JlYXRlQWxsVGFza3NDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhbGxUYXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWxsVGFza3NDb250YWluZXIuaWQgPSBcImFsbFRhc2tzQ29udGFpbmVyXCI7XHJcbiAgICBhbGxUYXNrc0NvbnRhaW5lci5jbGFzc05hbWUgPSBcInRhc2tzQ29udGFpbmVyXCI7XHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBhbGxUYXNrc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhbGxUYXNrc1RpdGxlLmlkID0gJ3RpdGxlQ29udGFpbmVyJztcclxuICAgIGFsbFRhc2tzVGl0bGUuY2xhc3NOYW1lID0gXCJ0YXNrc1RpdGxlXCI7XHJcbiAgICBhbGxUYXNrc1RpdGxlLmlubmVyVGV4dCA9IFwiQWxsIFRhc2tzXCI7XHJcblxyXG4gICAgYWxsVGFza3NDb250YWluZXIuYXBwZW5kKGFsbFRhc2tzVGl0bGUpO1xyXG5cclxuXHJcbiAgICBjcmVhdGVTdWJHcm91cHMoXCJ0b2RheVwiLCBhbGxUYXNrc0NvbnRhaW5lcik7XHJcbiAgICBjcmVhdGVTdWJHcm91cHMoXCJ0b21vcnJvd1wiLCBhbGxUYXNrc0NvbnRhaW5lcik7XHJcbiAgICBjcmVhdGVTdWJHcm91cHMoXCJ1cGNvbWluZ1wiLCBhbGxUYXNrc0NvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Q29udGFpbmVyJyk7XHJcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZChhbGxUYXNrc0NvbnRhaW5lcik7XHJcblxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVTdWJHcm91cHMgPSAoZ3JvdXAsIGFsbFRhc2tzQ29udGFpbmVyKSA9PiB7XHJcblxyXG4gICAgY29uc3QgY2FwaXRhbGl6ZSA9IChzdHIpID0+IHtcclxuICAgICAgICByZXR1cm4gc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdWJHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc3ViR3JvdXAuY2xhc3NOYW1lID0gXCJzdWJHcm91cFwiO1xyXG4gICAgc3ViR3JvdXAuaWQgPSBncm91cDtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHN1Ykdyb3VwVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBzdWJHcm91cFRpdGxlLmNsYXNzTmFtZSA9IFwic3ViR3JvdXBUaXRsZVwiO1xyXG5cclxuXHJcbiAgICBzdWJHcm91cFRpdGxlLmlubmVyVGV4dCA9IGNhcGl0YWxpemUoZ3JvdXApO1xyXG5cclxuXHJcbiAgICBzdWJHcm91cC5hcHBlbmQoc3ViR3JvdXBUaXRsZSlcclxuXHJcbiAgICBhbGxUYXNrc0NvbnRhaW5lci5hcHBlbmQoc3ViR3JvdXApO1xyXG59ICAgXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRhc2tDb250YWluZXIgPSAodGFzaywgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGtleSkgPT4ge1xyXG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGFza0NvbnRhaW5lci5jbGFzc05hbWUgPSAndGFza0NvbnRhaW5lcic7XHJcbiAgICB0YXNrQ29udGFpbmVyLmlkID0ga2V5O1xyXG5cclxuICAgIGNvbnN0IGNoZWNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjaGVja0NvbnRhaW5lci5jbGFzc05hbWUgPSAnY2hlY2tDb250YWluZXInO1xyXG4gICAgY2hlY2tDb250YWluZXIuaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjx0aXRsZT5pb25pY29ucy12NS1xPC90aXRsZT48Y2lyY2xlIGN4PVwiMjU2XCIgY3k9XCIyNTZcIiByPVwiMTkyXCIgc3R5bGU9XCJmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDozMnB4XCIvPjwvc3ZnPidcclxuXHJcbiAgICBjb25zdCBuYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIG5hbWVDb250YWluZXIuY2xhc3NOYW1lID0nbmFtZUNvbnRhaW5lcic7XHJcbiAgICBuYW1lQ29udGFpbmVyLmlubmVyVGV4dCA9IHRhc2s7XHJcblxyXG4gICAgY29uc3QgZGVsZXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkZWxldGVDb250YWluZXIuY2xhc3NOYW1lID0gJ2RlbGV0ZUNvbnRhaW5lcic7XHJcbiAgICBkZWxldGVDb250YWluZXIuaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjx0aXRsZT5pb25pY29ucy12NS1tPC90aXRsZT48cGF0aCBkPVwiTTI1Niw0OEMxNDEuMzEsNDgsNDgsMTQxLjMxLDQ4LDI1NnM5My4zMSwyMDgsMjA4LDIwOCwyMDgtOTMuMzEsMjA4LTIwOFMzNzAuNjksNDgsMjU2LDQ4Wm03NS4zMSwyNjAuNjlhMTYsMTYsMCwxLDEtMjIuNjIsMjIuNjJMMjU2LDI3OC42M2wtNTIuNjksNTIuNjhhMTYsMTYsMCwwLDEtMjIuNjItMjIuNjJMMjMzLjM3LDI1NmwtNTIuNjgtNTIuNjlhMTYsMTYsMCwwLDEsMjIuNjItMjIuNjJMMjU2LDIzMy4zN2w1Mi42OS01Mi42OGExNiwxNiwwLDAsMSwyMi42MiwyMi42MkwyNzguNjMsMjU2WlwiLz48L3N2Zz4nO1xyXG5cclxuXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuY2xhc3NOYW1lID0gJ2Rlc2NyaXB0aW9uQ29udGFpbmVyJztcclxuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmlubmVyVGV4dCA9IGRlc2NyaXB0aW9uO1xyXG5cclxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kKGNoZWNrQ29udGFpbmVyKTtcclxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kKG5hbWVDb250YWluZXIpO1xyXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmQoZGVsZXRlQ29udGFpbmVyKTtcclxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kKGRlc2NyaXB0aW9uQ29udGFpbmVyKTtcclxuICAgIFxyXG5cclxuICAgIGxldCBzdWJHcm91cDtcclxuICAgIGlmIChkdWVEYXRlID09ICd0b2RheScpIHtcclxuICAgICAgICBzdWJHcm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheScpO1xyXG4gICAgfSBlbHNlIGlmIChkdWVEYXRlID09ICd0b21vcnJvdycpIHtcclxuICAgICAgICBzdWJHcm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b21vcnJvdycpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Ykdyb3VwLmluc2VydEJlZm9yZSh0YXNrQ29udGFpbmVyLCBzdWJHcm91cC5jaGlsZHJlblsxXSk7XHJcbiAgICBcclxuICAgIHRhc2tDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICB0YXNrQ29udGFpbmVyLnN0eWxlLmFuaW1hdGlvbiA9IFwidGFza0NvbnRhaW5lckFkZCAwLjZzIGVhc2UtaW4tb3V0XCI7XHJcbiAgICAgICAgdGFza0NvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gXCIxMDBcIjtcclxuICAgIH0sNTApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVUYXNrVmlldyA9ICh0YXNrKSA9PiB7XHJcbiAgICBjb25zdCB0YXNrVmlld0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGFza1ZpZXdDb250YWluZXIuY2xhc3NOYW1lID0gJ3Rhc2tWaWV3Q29udGFpbmVyJztcclxuICAgIHRhc2tWaWV3Q29udGFpbmVyLmlkID0gXCJzXCIgKyB0YXNrLmtleTtcclxuXHJcbiAgICBjb25zdCB0YXNrVmlld05hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRhc2tWaWV3TmFtZUNvbnRhaW5lci5jbGFzc05hbWUgPSBcInRhc2tWaWV3TmFtZUNvbnRhaW5lclwiO1xyXG4gICAgdGFza1ZpZXdDb250YWluZXIuYXBwZW5kKHRhc2tWaWV3TmFtZUNvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3QgY2hlY2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNoZWNrQ29udGFpbmVyLmNsYXNzTmFtZSA9ICd0YXNrVmlld0NoZWNrQ29udGFpbmVyJztcclxuICAgIGNoZWNrQ29udGFpbmVyLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48dGl0bGU+aW9uaWNvbnMtdjUtcTwvdGl0bGU+PGNpcmNsZSBjeD1cIjI1NlwiIGN5PVwiMjU2XCIgcj1cIjE5MlwiIHN0eWxlPVwiZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MzJweFwiLz48L3N2Zz4nO1xyXG4gICAgdGFza1ZpZXdOYW1lQ29udGFpbmVyLmFwcGVuZChjaGVja0NvbnRhaW5lcilcclxuXHJcbiAgICBjb25zdCB0YXNrVmlld05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0YXNrVmlld05hbWUuY2xhc3NOYW1lID0gXCJ0YXNrVmlld05hbWVcIjtcclxuICAgIHRhc2tWaWV3TmFtZS5pbm5lclRleHQgPSB0YXNrLm5hbWVcclxuICAgIHRhc2tWaWV3TmFtZUNvbnRhaW5lci5hcHBlbmQodGFza1ZpZXdOYW1lKTtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHRhc2tWaWV3RGVzY3JpcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRhc2tWaWV3RGVzY3JpcHRpb25Db250YWluZXIuY2xhc3NOYW1lID0gXCJ0YXNrVmlld0Rlc2NyaXB0aW9uQ29udGFpbmVyXCI7XHJcbiAgICB0YXNrVmlld0Rlc2NyaXB0aW9uQ29udGFpbmVyLmlubmVyVGV4dCA9IFwiRGVzY3JpcHRpb25cIjtcclxuICAgIHRhc2tWaWV3Q29udGFpbmVyLmFwcGVuZCh0YXNrVmlld0Rlc2NyaXB0aW9uQ29udGFpbmVyKTtcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IHRhc2tWaWV3RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0YXNrVmlld0Rlc2NyaXB0aW9uLmNsYXNzTmFtZSA9IFwidGFza1ZpZXdEZXNjcmlwdGlvblwiO1xyXG4gICAgdGFza1ZpZXdEZXNjcmlwdGlvbi5pbm5lclRleHQgPSB0YXNrLmRlc2NyaXB0aW9uO1xyXG4gICAgdGFza1ZpZXdEZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmQodGFza1ZpZXdEZXNjcmlwdGlvbilcclxuXHJcbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrc0NvbnRhaW5lcicpO1xyXG4gICAgdGFza3NDb250YWluZXIuc3R5bGUudHJhbnNpdGlvbiA9IFwiYWxsIDAuMTVzIGVhc2VcIjtcclxuXHJcblxyXG5cclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgIHRhc2tzQ29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb24gPSBcImFsbCAwcyBsaW5lYXJcIjtcclxuXHJcbiAgICAgICAgdGFza3NDb250YWluZXIuc3R5bGUubWFyZ2luID0gXCIzOHB4IDAgYXV0byAzMCVcIjtcclxuICAgICAgICB0YXNrc0NvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoMClcIjtcclxuXHJcbiAgICAgICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Q29udGFpbmVyJyk7XHJcbiAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmQodGFza1ZpZXdDb250YWluZXIpO1xyXG4gICAgICAgIHRhc2tWaWV3Q29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgyNXZ3KVwiO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgICAgIHRhc2tWaWV3Q29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSBcIjEwMFwiO1xyXG4gICAgICAgICAgICB0YXNrVmlld0NvbnRhaW5lci5zdHlsZS53aWR0aCA9IFwiNDAwcHhcIlxyXG4gICAgICAgICAgICB0YXNrVmlld0NvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gXCIxMDBcIlxyXG4gICAgICAgICAgICB0YXNrVmlld0NvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoMClcIjtcclxuICAgICAgICB9LDEwKVxyXG4gICAgICAgIFxyXG4gICAgfSwxNTApXHJcblxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxQYWdlTG9hZDtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaW5pdGlhbFBhZ2VMb2FkIGZyb20gXCIuL21vZHVsZXMvdWlcIjtcclxuaW1wb3J0IFRhc2sgZnJvbSBcIi4vbW9kdWxlcy90YXNrXCI7XHJcbmltcG9ydCB7IGV4YW1wbGVUYXNrcyB9IGZyb20gXCIuL21vZHVsZXMvY3JlYXRlLXRhc2tcIjtcclxuaW1wb3J0IHJ1bkV2ZW50SGFuZGxlcnMgZnJvbSBcIi4vbW9kdWxlcy9ldmVudC1oYW5kbGVyc1wiO1xyXG5cclxuXHJcblxyXG5cclxuaW5pdGlhbFBhZ2VMb2FkKCk7XHJcbmV4YW1wbGVUYXNrcygpO1xyXG5ydW5FdmVudEhhbmRsZXJzKCk7XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9