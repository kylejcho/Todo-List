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
const inputDueDate = document.querySelectorAll('.inputDueDate');
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
    document.addEventListener('click', (e)=> {
        const target = e.target;
        if (target.className == "taskContainer" || target.className == "taskContainer completed") {
            taskSelection(target);
        }
    })
}

const deselectTask = () => {
    document.addEventListener('click', (e)=> {
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
        tasksContainer.style.transition = "all 0s linear";
        tasksContainer.style.margin = "38px auto auto auto";
        tasksContainer.style.transform = "translateX(-30%)";
        setTimeout(()=> {
            tasksContainer.style.transition = "all 0.15s ease";
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

                const taskViewContainer = document.querySelector('.taskViewContainer');
                if (taskViewContainer) {
                    if (taskViewContainer.id == 's'+ checkedTask.id) {
                        const taskViewCheckContainer = document.querySelector('.taskViewCheckContainer');
                        const taskViewName = document.querySelector('.taskViewName');
                        taskViewCheckContainer.style.animation = "checkClick 0.3s ease-out";
                        taskViewCheckContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><title>ionicons-v5-e</title><path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM364.25,186.29l-134.4,160a16,16,0,0,1-12,5.71h-.27a16,16,0,0,1-11.89-5.3l-57.6-64a16,16,0,1,1,23.78-21.4l45.29,50.32L339.75,165.71a16,16,0,0,1,24.5,20.58Z"/></svg>';
                        taskViewCheckContainer.style.filter = "brightness(0) saturate(100%) invert(74%) sepia(13%) saturate(227%) hue-rotate(177deg) brightness(103%) contrast(97%)";
                        
                        taskViewName.style.backgroundSize = "100% 100%";
                        taskViewName.style.color = "#697384bd";
                    }
                }

            } else if (checkedTask.className.includes('completed')) {
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
        taskContainer.style.opacity = "100";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2V2ZW50LWhhbmRsZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdWkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcclxuaW1wb3J0IHtjcmVhdGVUYXNrQ29udGFpbmVyfSBmcm9tIFwiLi91aVwiO1xyXG5cclxuZXhwb3J0IGxldCBhbGxUYXNrcyA9IFtdO1xyXG5cclxuXHJcbmNvbnN0IGNyZWF0ZVRhc2sgPSAodGFzaywgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGxpc3QpID0+IHtcclxuICAgIGxldCBrZXkgPSAwXHJcbiAgICBpZiAoYWxsVGFza3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsVGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGFsbFRhc2tzW2ldLmtleSA9PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgIGtleSsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IG5ld1Rhc2sgPSBuZXcgVGFzayh0YXNrLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgbGlzdCwga2V5KTtcclxuICAgIGFsbFRhc2tzLnB1c2gobmV3VGFzayk7XHJcbiAgICBjcmVhdGVUYXNrQ29udGFpbmVyKHRhc2ssIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBrZXkpO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBleGFtcGxlVGFza3MgPSAoKSA9PiB7XHJcbiAgICBjcmVhdGVUYXNrKFwiRXhlcmNpc2VcIiwgXCJXb3Jrb3V0IG91dCBmb3IgNDUgbWludXRlc1wiLCBcInRvZGF5XCIsICcnKTtcclxuICAgIGNyZWF0ZVRhc2soXCJDb2ZmZWUgd2l0aCBmcmllbmRcIiwgXCJTdGFyYnVja3NcIiwgXCJ0b2RheVwiLCAnJyk7XHJcbiAgICBjcmVhdGVUYXNrKFwiQ29va2luZyBjbGFzc1wiLCBcIkJyaW5nIGhvbWVtYWRlIHBpZVwiLCBcInRvZGF5XCIsICcnKTtcclxuICAgIGNyZWF0ZVRhc2soXCJSZWFkXCIsIFwiUmVhZCB0d28gY2hhcHRlclwiLCBcInRvbW9ycm93XCIsICcnKTtcclxuICAgIGNyZWF0ZVRhc2soXCJMZWFybiBzaWduIGxhbmd1YWdlXCIsIFwiUHJhY3RpY2UgZW5nbGlzaCBhbHBoYWJldFwiLCBcInRvbW9ycm93XCIsICcnKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhhbGxUYXNrcylcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhc2s7XHJcblxyXG4iLCJpbXBvcnQgY3JlYXRlVGFzayBmcm9tIFwiLi9jcmVhdGUtdGFza1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVUYXNrVmlldyB9IGZyb20gXCIuL3VpXCI7XHJcbmltcG9ydCB7IGFsbFRhc2tzIH0gZnJvbSBcIi4vY3JlYXRlLXRhc2tcIjtcclxuXHJcbmNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRCdXR0b24nKTtcclxuY29uc3QgZm9ybUFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrRm9ybUFkZEJ1dHRvbicpO1xyXG5jb25zdCBpbnB1dFRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0VGFza05hbWUnKTtcclxuY29uc3QgaW5wdXRUYXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXRUYXNrRGVzY3JpcHRpb24nKTtcclxuY29uc3QgaW5wdXREdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0RHVlRGF0ZScpO1xyXG5jb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrRm9ybUNvbnRhaW5lclwiKTtcclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza0Zvcm1cIik7XHJcbmNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tDb250YWluZXJcIik7XHJcblxyXG5jb25zdCBidXR0b25DbGlja2VkID0gKCkgPT4ge1xyXG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZm9ybUNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgICAgZm9ybS5zdHlsZS5vcGFjaXR5ID0gXCIxMDBcIjtcclxuICAgICAgICBmb3JtLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMSlcIjtcclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IGZvcm1BZGRCdXR0b25DbGlja2VkID0gKCkgPT4ge1xyXG4gICAgZm9ybUFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmIChpbnB1dFRhc2tOYW1lLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGxldCBkdWVEYXRlO1xyXG4gICAgICAgICAgICBpbnB1dER1ZURhdGUuZm9yRWFjaCgoZSkgPT57XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5jbGFzc05hbWUuaW5jbHVkZXMoJ3NlbGVjdGVkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlID0gZS5pZC5yZXBsYWNlKCdpbnB1dCcsICcnKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjcmVhdGVUYXNrKGlucHV0VGFza05hbWUudmFsdWUsIGlucHV0VGFza0Rlc2NyaXB0aW9uLnZhbHVlLCBkdWVEYXRlKTtcclxuICAgICAgICAgICAgZm9ybUNhbmNlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IGR1ZURhdGVDbGljayA9ICgpID0+IHtcclxuICAgIGlucHV0RHVlRGF0ZS5mb3JFYWNoKGR1ZURhdGUgPT57XHJcbiAgICAgICAgZHVlRGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+IHtcclxuICAgICAgICAgICAgaW5wdXREdWVEYXRlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGR1ZURhdGUuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgZm9ybUNhbmNlbENsaWNrID0gKCkgPT4ge1xyXG4gICAgZm9ybUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5pZCA9PSAndGFza0Zvcm1Db250YWluZXInKSB7XHJcbiAgICAgICAgICAgIGZvcm1DYW5jZWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBmb3JtQ2FuY2VsID0gKCkgPT4ge1xyXG4gICAgZm9ybS5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICBmb3JtQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgZm9ybS5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDApXCI7XHJcbiAgICBpbnB1dFRhc2tOYW1lLnZhbHVlID0gJyc7XHJcbiAgICBpbnB1dFRhc2tEZXNjcmlwdGlvbi52YWx1ZSA9ICcnO1xyXG4gICAgaW5wdXREdWVEYXRlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXHJcbiAgICB9KVxyXG4gICAgaW5wdXREdWVEYXRlWzBdLmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XHJcbn1cclxuXHJcbmNvbnN0IHNlbGVjdFRhc2sgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+IHtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTmFtZSA9PSBcInRhc2tDb250YWluZXJcIiB8fCB0YXJnZXQuY2xhc3NOYW1lID09IFwidGFza0NvbnRhaW5lciBjb21wbGV0ZWRcIikge1xyXG4gICAgICAgICAgICB0YXNrU2VsZWN0aW9uKHRhcmdldCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgZGVzZWxlY3RUYXNrID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PiB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXRcclxuICAgICAgICBpZiAodGFyZ2V0ID09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Q29udGFpbmVyJykpIHtcclxuICAgICAgICAgICAgcmVtb3ZlVGFza1ZpZXcoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrVmlld0NvbnRhaW5lcicpKSB7XHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1ZpZXdDb250YWluZXInKS5pZCA9PSAncycgKyB0YXJnZXQuaWQpIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZVRhc2tWaWV3KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IHJlbW92ZVRhc2tWaWV3ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGFza1ZpZXdDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1ZpZXdDb250YWluZXInKTsgXHJcbiAgICBpZiAodGFza1ZpZXdDb250YWluZXIpIHsgICBcclxuICAgICAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrc0NvbnRhaW5lcicpO1xyXG4gICAgICAgIHRhc2tWaWV3Q29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgICAgIHRhc2tzQ29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb24gPSBcImFsbCAwcyBsaW5lYXJcIjtcclxuICAgICAgICB0YXNrc0NvbnRhaW5lci5zdHlsZS5tYXJnaW4gPSBcIjM4cHggYXV0byBhdXRvIGF1dG9cIjtcclxuICAgICAgICB0YXNrc0NvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoLTMwJSlcIjtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICAgICB0YXNrc0NvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uID0gXCJhbGwgMC4xNXMgZWFzZVwiO1xyXG4gICAgICAgICAgICB0YXNrc0NvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoMClcIjsgXHJcbiAgICAgICAgfSwxMClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHRhc2tTZWxlY3Rpb24gPSAodGFza0NvbnRhaW5lcikgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRUYXNrID0gYWxsVGFza3MuZmluZCgodGFzayk9PiB7XHJcbiAgICAgICAgaWYgKHRhc2sua2V5ID09IHRhc2tDb250YWluZXIuaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHRhc2tWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tWaWV3Q29udGFpbmVyJylcclxuXHJcbiAgICBpZiAodGFza1ZpZXcpIHtcclxuICAgICAgICBpZiAodGFza1ZpZXcuaWQgPT0gXCJzXCIgKyBzZWxlY3RlZFRhc2sua2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhc2tWaWV3LnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzQ29udGFpbmVyJykuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKC0zMCUpXCI7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVUYXNrVmlldyhzZWxlY3RlZFRhc2ssIHRhc2tDb250YWluZXIpOyAgXHJcbn1cclxuXHJcblxyXG5jb25zdCBjaGVja0NsaWNrID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NOYW1lID09ICdjaGVja0NvbnRhaW5lcicgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrZWRUYXNrID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGUudGFyZ2V0LnBhcmVudE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICAgICBjb25zdCBkZWxldGVDb250YWluZXIgPSB0YXNrTmFtZS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrQ29udGFpbmVyID0gZS50YXJnZXQucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNoZWNrQ29udGFpbmVyLnN0eWxlLmFuaW1hdGlvbiA9IFwiY2hlY2tDbGljayAwLjNzIGVhc2Utb3V0XCI7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWNoZWNrZWRUYXNrLmNsYXNzTmFtZS5pbmNsdWRlcygnY29tcGxldGVkJykpIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrZWRUYXNrLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgdGFza05hbWUuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcIjEwMCUgMTAwJVwiO1xyXG4gICAgICAgICAgICAgICAgY2hlY2tDb250YWluZXIuaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjx0aXRsZT5pb25pY29ucy12NS1lPC90aXRsZT48cGF0aCBkPVwiTTI1Niw0OEMxNDEuMzEsNDgsNDgsMTQxLjMxLDQ4LDI1NnM5My4zMSwyMDgsMjA4LDIwOCwyMDgtOTMuMzEsMjA4LTIwOFMzNzAuNjksNDgsMjU2LDQ4Wk0zNjQuMjUsMTg2LjI5bC0xMzQuNCwxNjBhMTYsMTYsMCwwLDEtMTIsNS43MWgtLjI3YTE2LDE2LDAsMCwxLTExLjg5LTUuM2wtNTcuNi02NGExNiwxNiwwLDEsMSwyMy43OC0yMS40bDQ1LjI5LDUwLjMyTDMzOS43NSwxNjUuNzFhMTYsMTYsMCwwLDEsMjQuNSwyMC41OFpcIi8+PC9zdmc+J1xyXG4gICAgICAgICAgICAgICAgY2hlY2tDb250YWluZXIuc3R5bGUuZmlsdGVyID0gXCJicmlnaHRuZXNzKDApIHNhdHVyYXRlKDEwMCUpIGludmVydCg3NCUpIHNlcGlhKDEzJSkgc2F0dXJhdGUoMjI3JSkgaHVlLXJvdGF0ZSgxNzdkZWcpIGJyaWdodG5lc3MoMTAzJSkgY29udHJhc3QoOTclKVwiO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlQ29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSBcIjEwMFwiO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tWaWV3Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tWaWV3Q29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFza1ZpZXdDb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFza1ZpZXdDb250YWluZXIuaWQgPT0gJ3MnKyBjaGVja2VkVGFzay5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrVmlld0NoZWNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tWaWV3Q2hlY2tDb250YWluZXInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza1ZpZXdOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tWaWV3TmFtZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrVmlld0NoZWNrQ29udGFpbmVyLnN0eWxlLmFuaW1hdGlvbiA9IFwiY2hlY2tDbGljayAwLjNzIGVhc2Utb3V0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tWaWV3Q2hlY2tDb250YWluZXIuaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjx0aXRsZT5pb25pY29ucy12NS1lPC90aXRsZT48cGF0aCBkPVwiTTI1Niw0OEMxNDEuMzEsNDgsNDgsMTQxLjMxLDQ4LDI1NnM5My4zMSwyMDgsMjA4LDIwOCwyMDgtOTMuMzEsMjA4LTIwOFMzNzAuNjksNDgsMjU2LDQ4Wk0zNjQuMjUsMTg2LjI5bC0xMzQuNCwxNjBhMTYsMTYsMCwwLDEtMTIsNS43MWgtLjI3YTE2LDE2LDAsMCwxLTExLjg5LTUuM2wtNTcuNi02NGExNiwxNiwwLDEsMSwyMy43OC0yMS40bDQ1LjI5LDUwLjMyTDMzOS43NSwxNjUuNzFhMTYsMTYsMCwwLDEsMjQuNSwyMC41OFpcIi8+PC9zdmc+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza1ZpZXdDaGVja0NvbnRhaW5lci5zdHlsZS5maWx0ZXIgPSBcImJyaWdodG5lc3MoMCkgc2F0dXJhdGUoMTAwJSkgaW52ZXJ0KDc0JSkgc2VwaWEoMTMlKSBzYXR1cmF0ZSgyMjclKSBodWUtcm90YXRlKDE3N2RlZykgYnJpZ2h0bmVzcygxMDMlKSBjb250cmFzdCg5NyUpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrVmlld05hbWUuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcIjEwMCUgMTAwJVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrVmlld05hbWUuc3R5bGUuY29sb3IgPSBcIiM2OTczODRiZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hlY2tlZFRhc2suY2xhc3NOYW1lLmluY2x1ZGVzKCdjb21wbGV0ZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tlZFRhc2suY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkJyk7XHJcbiAgICAgICAgICAgICAgICB0YXNrTmFtZS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiMCUgMTAwJVwiO1xyXG4gICAgICAgICAgICAgICAgY2hlY2tDb250YWluZXIuaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjx0aXRsZT5pb25pY29ucy12NS1xPC90aXRsZT48Y2lyY2xlIGN4PVwiMjU2XCIgY3k9XCIyNTZcIiByPVwiMTkyXCIgc3R5bGU9XCJmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDozMnB4XCIvPjwvc3ZnPidcclxuICAgICAgICAgICAgICAgIGNoZWNrQ29udGFpbmVyLnN0eWxlLmZpbHRlciA9IFwiIGJyaWdodG5lc3MoMCkgc2F0dXJhdGUoMTAwJSkgaW52ZXJ0KDklKSBzZXBpYSg0MyUpIHNhdHVyYXRlKDMzOCUpIGh1ZS1yb3RhdGUoMTc3ZGVnKSBicmlnaHRuZXNzKDEwMCUpIGNvbnRyYXN0KDk2JSlcIjtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja0NvbnRhaW5lci5zdHlsZS5hbmltYXRpb24gPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIH0sMTApXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSB0YXNrTmFtZS5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVySGVpZ2h0ID0gdGFza0NvbnRhaW5lci5jbGllbnRIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzcGFjZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICBzcGFjZXIuc3R5bGUuaGVpZ2h0ID0gdGFza0NvbnRhaW5lckhlaWdodCArIFwicHhcIjtcclxuICAgICAgICAgICAgc3BhY2VyLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiLVwiICsgdGFza0NvbnRhaW5lckhlaWdodCArIFwicHhcIjtcclxuICAgICAgICAgICAgc3BhY2VyLnN0eWxlLnRyYW5zaXRpb24gPSBcImFsbCBlYXNlLWluLW91dCAwLjJzXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1Ykdyb3VwID0gdGFza0NvbnRhaW5lci5wYXJlbnROb2RlO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNoZWNrZWRUYXNrLmNsYXNzTmFtZS5pbmNsdWRlcygnY29tcGxldGVkJykgJiYgdGFza0NvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmcpIHtcclxuICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChzcGFjZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza0NvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza0NvbnRhaW5lci5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIi1cIiArIHRhc2tDb250YWluZXJIZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VyLnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9LDMwMClcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza0NvbnRhaW5lci5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlci5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBzdWJHcm91cC5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIH0sNTAwKVxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IFwiMTAwXCI7XHJcbiAgICAgICAgICAgICAgICB9LDYwMClcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWNoZWNrZWRUYXNrLmNsYXNzTmFtZS5pbmNsdWRlcygnY29tcGxldGVkJykgJiYgdGFza0NvbnRhaW5lciAhPSBzdWJHcm91cC5jaGlsZHJlblsxXSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ViR3JvdXAgPSB0YXNrQ29udGFpbmVyLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgICAgICBzdWJHcm91cC5pbnNlcnRCZWZvcmUoc3BhY2VyLCBzdWJHcm91cC5jaGlsZHJlblsxXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiLVwiICsgdGFza0NvbnRhaW5lckhlaWdodCArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgICAgICBzcGFjZXIuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcclxuICAgICAgICAgICAgICAgIH0sMzAwKVxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VyLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Ykdyb3VwLmluc2VydEJlZm9yZSh0YXNrQ29udGFpbmVyLCBzdWJHcm91cC5jaGlsZHJlblsxXSk7XHJcbiAgICAgICAgICAgICAgICB9LDUwMClcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSBcIjEwMFwiO1xyXG4gICAgICAgICAgICAgICAgfSw2MDApXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IGRlbGV0ZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnRDb250YWluZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc05hbWUgPT0gJ2RlbGV0ZUNvbnRhaW5lcicpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tDb250YWluZXJIZWlnaHQgPSB0YXNrQ29udGFpbmVyLmNsaWVudEhlaWdodDtcclxuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKC0xMDAlKVwiO1xyXG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiLVwiICsgdGFza0NvbnRhaW5lckhlaWdodCArIFwicHhcIjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9LDIwMClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgdGFza0NvbnRhaW5lckhvdmVyID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnRDb250YWluZXInKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSk9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSAndGFza0NvbnRhaW5lcicgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgY29uc3QgZGVsZXRlQ29udGFpbmVyID0gdGFza0NvbnRhaW5lci5jaGlsZHJlblsyXTtcclxuICAgICAgICAgICAgZGVsZXRlQ29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSBcIjEwMFwiO1xyXG5cclxuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCk9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRhc2tDb250YWluZXIuY2xhc3NOYW1lLmluY2x1ZGVzKCdjb21wbGV0ZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZUNvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09ICdkZXNjcmlwdGlvbkNvbnRhaW5lcicgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUNvbnRhaW5lciA9IGRlc2NyaXB0aW9uQ29udGFpbmVyLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgICAgIGRlbGV0ZUNvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gXCIxMDBcIjtcclxuICAgICAgICB9IFxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcbmNvbnN0IHJ1bkV2ZW50SGFuZGxlcnMgPSAoKSA9PiB7XHJcbiAgICBjaGVja0NsaWNrKCk7XHJcbiAgICBmb3JtQWRkQnV0dG9uQ2xpY2tlZCgpO1xyXG4gICAgZHVlRGF0ZUNsaWNrKCk7XHJcbiAgICBmb3JtQ2FuY2VsQ2xpY2soKTtcclxuICAgIHNlbGVjdFRhc2soKTtcclxuICAgIGRlc2VsZWN0VGFzaygpO1xyXG4gICAgdGFza0NvbnRhaW5lckhvdmVyKCk7XHJcbiAgICBkZWxldGVDbGljaygpXHJcbiAgICBidXR0b25DbGlja2VkKClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcnVuRXZlbnRIYW5kbGVycztcclxuIiwiY2xhc3MgVGFzayB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgbGlzdCwga2V5KSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgICB0aGlzLmxpc3QgPSBsaXN0O1xyXG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXROYW1lKG5hbWUpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHNldER1ZURhdGUoZHVlRGF0ZSkge1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TGlzdChsaXN0KSB7XHJcbiAgICAgICAgdGhpcy5saXN0ID0gbGlzdDtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFzazsiLCJjb25zdCBpbml0aWFsUGFnZUxvYWQgPSAoKSA9PiB7XHJcbiAgICBsb2FkaW5nUGFnZSgpXHJcbiAgICBjcmVhdGVBbGxUYXNrc0NvbnRhaW5lcigpO1xyXG59XHJcblxyXG5jb25zdCBsb2FkaW5nUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGxvYWRpbmdTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvYWRpbmdTY3JlZW5cIik7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXHJcbiAgICAgICAgYm9keS5zdHlsZS5vdmVyZmxvd1k9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgbG9hZGluZ1NjcmVlbi5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgICAgIGxvYWRpbmdTY3JlZW4ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3dZPSBcInZpc2libGVcIjtcclxuICAgICAgICB9LCAzMDApXHJcbiAgICAgICAgfSwgNTAwKVxyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG4vL0FMTCBUQVNLUyBDT05URU5UXHJcbmNvbnN0IGNyZWF0ZUFsbFRhc2tzQ29udGFpbmVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYWxsVGFza3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFsbFRhc2tzQ29udGFpbmVyLmlkID0gXCJhbGxUYXNrc0NvbnRhaW5lclwiO1xyXG4gICAgYWxsVGFza3NDb250YWluZXIuY2xhc3NOYW1lID0gXCJ0YXNrc0NvbnRhaW5lclwiO1xyXG5cclxuICAgIFxyXG4gICAgY29uc3QgYWxsVGFza3NUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWxsVGFza3NUaXRsZS5pZCA9ICd0aXRsZUNvbnRhaW5lcic7XHJcbiAgICBhbGxUYXNrc1RpdGxlLmNsYXNzTmFtZSA9IFwidGFza3NUaXRsZVwiO1xyXG4gICAgYWxsVGFza3NUaXRsZS5pbm5lclRleHQgPSBcIkFsbCBUYXNrc1wiO1xyXG5cclxuICAgIGFsbFRhc2tzQ29udGFpbmVyLmFwcGVuZChhbGxUYXNrc1RpdGxlKTtcclxuXHJcblxyXG4gICAgY3JlYXRlU3ViR3JvdXBzKFwidG9kYXlcIiwgYWxsVGFza3NDb250YWluZXIpO1xyXG4gICAgY3JlYXRlU3ViR3JvdXBzKFwidG9tb3Jyb3dcIiwgYWxsVGFza3NDb250YWluZXIpO1xyXG4gICAgY3JlYXRlU3ViR3JvdXBzKFwidXBjb21pbmdcIiwgYWxsVGFza3NDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudENvbnRhaW5lcicpO1xyXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmQoYWxsVGFza3NDb250YWluZXIpO1xyXG5cclxufVxyXG5cclxuY29uc3QgY3JlYXRlU3ViR3JvdXBzID0gKGdyb3VwLCBhbGxUYXNrc0NvbnRhaW5lcikgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNhcGl0YWxpemUgPSAoc3RyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3ViR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHN1Ykdyb3VwLmNsYXNzTmFtZSA9IFwic3ViR3JvdXBcIjtcclxuICAgIHN1Ykdyb3VwLmlkID0gZ3JvdXA7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBzdWJHcm91cFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgc3ViR3JvdXBUaXRsZS5jbGFzc05hbWUgPSBcInN1Ykdyb3VwVGl0bGVcIjtcclxuXHJcblxyXG4gICAgc3ViR3JvdXBUaXRsZS5pbm5lclRleHQgPSBjYXBpdGFsaXplKGdyb3VwKTtcclxuXHJcblxyXG4gICAgc3ViR3JvdXAuYXBwZW5kKHN1Ykdyb3VwVGl0bGUpXHJcblxyXG4gICAgYWxsVGFza3NDb250YWluZXIuYXBwZW5kKHN1Ykdyb3VwKTtcclxufSAgIFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVUYXNrQ29udGFpbmVyID0gKHRhc2ssIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBrZXkpID0+IHtcclxuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRhc2tDb250YWluZXIuY2xhc3NOYW1lID0gJ3Rhc2tDb250YWluZXInO1xyXG4gICAgdGFza0NvbnRhaW5lci5pZCA9IGtleTtcclxuXHJcbiAgICBjb25zdCBjaGVja0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2hlY2tDb250YWluZXIuY2xhc3NOYW1lID0gJ2NoZWNrQ29udGFpbmVyJztcclxuICAgIGNoZWNrQ29udGFpbmVyLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48dGl0bGU+aW9uaWNvbnMtdjUtcTwvdGl0bGU+PGNpcmNsZSBjeD1cIjI1NlwiIGN5PVwiMjU2XCIgcj1cIjE5MlwiIHN0eWxlPVwiZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MzJweFwiLz48L3N2Zz4nXHJcblxyXG4gICAgY29uc3QgbmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBuYW1lQ29udGFpbmVyLmNsYXNzTmFtZSA9J25hbWVDb250YWluZXInO1xyXG4gICAgbmFtZUNvbnRhaW5lci5pbm5lclRleHQgPSB0YXNrO1xyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGVsZXRlQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdkZWxldGVDb250YWluZXInO1xyXG4gICAgZGVsZXRlQ29udGFpbmVyLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48dGl0bGU+aW9uaWNvbnMtdjUtbTwvdGl0bGU+PHBhdGggZD1cIk0yNTYsNDhDMTQxLjMxLDQ4LDQ4LDE0MS4zMSw0OCwyNTZzOTMuMzEsMjA4LDIwOCwyMDgsMjA4LTkzLjMxLDIwOC0yMDhTMzcwLjY5LDQ4LDI1Niw0OFptNzUuMzEsMjYwLjY5YTE2LDE2LDAsMSwxLTIyLjYyLDIyLjYyTDI1NiwyNzguNjNsLTUyLjY5LDUyLjY4YTE2LDE2LDAsMCwxLTIyLjYyLTIyLjYyTDIzMy4zNywyNTZsLTUyLjY4LTUyLjY5YTE2LDE2LDAsMCwxLDIyLjYyLTIyLjYyTDI1NiwyMzMuMzdsNTIuNjktNTIuNjhhMTYsMTYsMCwwLDEsMjIuNjIsMjIuNjJMMjc4LjYzLDI1NlpcIi8+PC9zdmc+JztcclxuXHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdkZXNjcmlwdGlvbkNvbnRhaW5lcic7XHJcbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5pbm5lclRleHQgPSBkZXNjcmlwdGlvbjtcclxuXHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZChjaGVja0NvbnRhaW5lcik7XHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZChuYW1lQ29udGFpbmVyKTtcclxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kKGRlbGV0ZUNvbnRhaW5lcik7XHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZChkZXNjcmlwdGlvbkNvbnRhaW5lcik7XHJcbiAgICBcclxuXHJcbiAgICBsZXQgc3ViR3JvdXA7XHJcbiAgICBpZiAoZHVlRGF0ZSA9PSAndG9kYXknKSB7XHJcbiAgICAgICAgc3ViR3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kYXknKTtcclxuICAgIH0gZWxzZSBpZiAoZHVlRGF0ZSA9PSAndG9tb3Jyb3cnKSB7XHJcbiAgICAgICAgc3ViR3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9tb3Jyb3cnKTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJHcm91cC5pbnNlcnRCZWZvcmUodGFza0NvbnRhaW5lciwgc3ViR3JvdXAuY2hpbGRyZW5bMV0pO1xyXG4gICAgXHJcbiAgICB0YXNrQ29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgdGFza0NvbnRhaW5lci5zdHlsZS5hbmltYXRpb24gPSBcInRhc2tDb250YWluZXJBZGQgMC42cyBlYXNlLWluLW91dFwiO1xyXG4gICAgICAgIHRhc2tDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IFwiMTAwXCI7XHJcbiAgICB9LDUwKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlVGFza1ZpZXcgPSAodGFzaywgdGFza0NvbnRhaW5lcikgPT4ge1xyXG4gICAgY29uc3QgdGFza1ZpZXdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRhc2tWaWV3Q29udGFpbmVyLmNsYXNzTmFtZSA9ICd0YXNrVmlld0NvbnRhaW5lcic7XHJcbiAgICB0YXNrVmlld0NvbnRhaW5lci5pZCA9IFwic1wiICsgdGFzay5rZXk7XHJcblxyXG4gICAgY29uc3QgdGFza1ZpZXdOYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YXNrVmlld05hbWVDb250YWluZXIuY2xhc3NOYW1lID0gXCJ0YXNrVmlld05hbWVDb250YWluZXJcIjtcclxuICAgIHRhc2tWaWV3Q29udGFpbmVyLmFwcGVuZCh0YXNrVmlld05hbWVDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IGNoZWNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjaGVja0NvbnRhaW5lci5jbGFzc05hbWUgPSAndGFza1ZpZXdDaGVja0NvbnRhaW5lcic7XHJcbiAgICBjaGVja0NvbnRhaW5lci5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHRpdGxlPmlvbmljb25zLXY1LXE8L3RpdGxlPjxjaXJjbGUgY3g9XCIyNTZcIiBjeT1cIjI1NlwiIHI9XCIxOTJcIiBzdHlsZT1cImZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjMycHhcIi8+PC9zdmc+JztcclxuICAgIHRhc2tWaWV3TmFtZUNvbnRhaW5lci5hcHBlbmQoY2hlY2tDb250YWluZXIpXHJcblxyXG4gICAgY29uc3QgdGFza1ZpZXdOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdGFza1ZpZXdOYW1lLmNsYXNzTmFtZSA9IFwidGFza1ZpZXdOYW1lXCI7XHJcbiAgICB0YXNrVmlld05hbWUuaW5uZXJUZXh0ID0gdGFzay5uYW1lXHJcbiAgICB0YXNrVmlld05hbWVDb250YWluZXIuYXBwZW5kKHRhc2tWaWV3TmFtZSk7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCB0YXNrVmlld0Rlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YXNrVmlld0Rlc2NyaXB0aW9uQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwidGFza1ZpZXdEZXNjcmlwdGlvbkNvbnRhaW5lclwiO1xyXG4gICAgdGFza1ZpZXdEZXNjcmlwdGlvbkNvbnRhaW5lci5pbm5lclRleHQgPSBcIkRlc2NyaXB0aW9uXCI7XHJcbiAgICB0YXNrVmlld0NvbnRhaW5lci5hcHBlbmQodGFza1ZpZXdEZXNjcmlwdGlvbkNvbnRhaW5lcik7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCB0YXNrVmlld0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdGFza1ZpZXdEZXNjcmlwdGlvbi5jbGFzc05hbWUgPSBcInRhc2tWaWV3RGVzY3JpcHRpb25cIjtcclxuICAgIHRhc2tWaWV3RGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gdGFzay5kZXNjcmlwdGlvbjtcclxuICAgIHRhc2tWaWV3RGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kKHRhc2tWaWV3RGVzY3JpcHRpb24pXHJcblxyXG4gICAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3NDb250YWluZXInKTtcclxuICAgIHRhc2tzQ29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb24gPSBcImFsbCAwLjE1cyBlYXNlXCI7XHJcblxyXG5cclxuICAgIGlmICh0YXNrQ29udGFpbmVyLmNsYXNzTmFtZS5pbmNsdWRlcygnY29tcGxldGVkJykpIHtcclxuICAgICAgICBjaGVja0NvbnRhaW5lci5zdHlsZS5hbmltYXRpb24gPSBcImNoZWNrQ2xpY2sgMC4zcyBlYXNlLW91dFwiO1xyXG4gICAgICAgIGNoZWNrQ29udGFpbmVyLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48dGl0bGU+aW9uaWNvbnMtdjUtZTwvdGl0bGU+PHBhdGggZD1cIk0yNTYsNDhDMTQxLjMxLDQ4LDQ4LDE0MS4zMSw0OCwyNTZzOTMuMzEsMjA4LDIwOCwyMDgsMjA4LTkzLjMxLDIwOC0yMDhTMzcwLjY5LDQ4LDI1Niw0OFpNMzY0LjI1LDE4Ni4yOWwtMTM0LjQsMTYwYTE2LDE2LDAsMCwxLTEyLDUuNzFoLS4yN2ExNiwxNiwwLDAsMS0xMS44OS01LjNsLTU3LjYtNjRhMTYsMTYsMCwxLDEsMjMuNzgtMjEuNGw0NS4yOSw1MC4zMkwzMzkuNzUsMTY1LjcxYTE2LDE2LDAsMCwxLDI0LjUsMjAuNThaXCIvPjwvc3ZnPic7XHJcbiAgICAgICAgY2hlY2tDb250YWluZXIuc3R5bGUuZmlsdGVyID0gXCJicmlnaHRuZXNzKDApIHNhdHVyYXRlKDEwMCUpIGludmVydCg3NCUpIHNlcGlhKDEzJSkgc2F0dXJhdGUoMjI3JSkgaHVlLXJvdGF0ZSgxNzdkZWcpIGJyaWdodG5lc3MoMTAzJSkgY29udHJhc3QoOTclKVwiO1xyXG4gICAgXHJcbiAgICAgICAgdGFza1ZpZXdOYW1lLnN0eWxlLmJhY2tncm91bmRTaXplID0gXCIxMDAlIDEwMCVcIjtcclxuICAgICAgICB0YXNrVmlld05hbWUuc3R5bGUuY29sb3IgPSBcIiM2OTczODRiZFwiOyAgICAgXHJcbiAgICB9ICAgICAgICAgICAgICAgICBcclxuXHJcblxyXG5cclxuICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgdGFza3NDb250YWluZXIuc3R5bGUudHJhbnNpdGlvbiA9IFwiYWxsIDBzIGxpbmVhclwiO1xyXG5cclxuICAgICAgICB0YXNrc0NvbnRhaW5lci5zdHlsZS5tYXJnaW4gPSBcIjM4cHggMCBhdXRvIDMwJVwiO1xyXG4gICAgICAgIHRhc2tzQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgwKVwiO1xyXG5cclxuICAgICAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnRDb250YWluZXInKTtcclxuICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZCh0YXNrVmlld0NvbnRhaW5lcik7XHJcbiAgICAgICAgdGFza1ZpZXdDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKDI1dncpXCI7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgdGFza1ZpZXdDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IFwiMTAwXCI7XHJcbiAgICAgICAgICAgIHRhc2tWaWV3Q29udGFpbmVyLnN0eWxlLndpZHRoID0gXCI0MDBweFwiXHJcbiAgICAgICAgICAgIHRhc2tWaWV3Q29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSBcIjEwMFwiXHJcbiAgICAgICAgICAgIHRhc2tWaWV3Q29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgwKVwiO1xyXG4gICAgICAgIH0sMTApXHJcbiAgICAgICAgXHJcbiAgICB9LDE1MClcclxuXHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbFBhZ2VMb2FkO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0aWFsUGFnZUxvYWQgZnJvbSBcIi4vbW9kdWxlcy91aVwiO1xyXG5pbXBvcnQgVGFzayBmcm9tIFwiLi9tb2R1bGVzL3Rhc2tcIjtcclxuaW1wb3J0IHsgZXhhbXBsZVRhc2tzIH0gZnJvbSBcIi4vbW9kdWxlcy9jcmVhdGUtdGFza1wiO1xyXG5pbXBvcnQgcnVuRXZlbnRIYW5kbGVycyBmcm9tIFwiLi9tb2R1bGVzL2V2ZW50LWhhbmRsZXJzXCI7XHJcblxyXG5cclxuXHJcblxyXG5pbml0aWFsUGFnZUxvYWQoKTtcclxuZXhhbXBsZVRhc2tzKCk7XHJcbnJ1bkV2ZW50SGFuZGxlcnMoKTtcclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=