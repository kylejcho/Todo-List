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

        if (target.className == "taskContainer") {

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
    (0,_ui__WEBPACK_IMPORTED_MODULE_1__.createTaskView)(selectedTask);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9NQUFvTSxZQUFZLHFCQUFxQixzQkFBc0I7QUFDM1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxlQUFlLEVBQUM7Ozs7Ozs7VUNqTC9CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOMkM7QUFDVDtBQUNtQjtBQUNHO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQWU7QUFDZixrRUFBWTtBQUNaLG1FQUFnQjtBQUNoQjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY3JlYXRlLXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZXZlbnQtaGFuZGxlcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy91aS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xyXG5pbXBvcnQge2NyZWF0ZVRhc2tDb250YWluZXJ9IGZyb20gXCIuL3VpXCI7XHJcblxyXG5leHBvcnQgbGV0IGFsbFRhc2tzID0gW107XHJcblxyXG5cclxuY29uc3QgY3JlYXRlVGFzayA9ICh0YXNrLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgbGlzdCkgPT4ge1xyXG4gICAgbGV0IGtleSA9IDBcclxuICAgIGlmIChhbGxUYXNrcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxUYXNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoYWxsVGFza3NbaV0ua2V5ID09IGtleSkge1xyXG4gICAgICAgICAgICAgICAga2V5Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgbmV3VGFzayA9IG5ldyBUYXNrKHRhc2ssIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBsaXN0LCBrZXkpO1xyXG4gICAgYWxsVGFza3MucHVzaChuZXdUYXNrKTtcclxuICAgIGNyZWF0ZVRhc2tDb250YWluZXIodGFzaywgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGtleSk7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGV4YW1wbGVUYXNrcyA9ICgpID0+IHtcclxuICAgIGNyZWF0ZVRhc2soXCJFeGVyY2lzZVwiLCBcIldvcmtvdXQgb3V0IGZvciA0NSBtaW51dGVzXCIsIFwidG9kYXlcIiwgJycpO1xyXG4gICAgY3JlYXRlVGFzayhcIkNvZmZlZSB3aXRoIGZyaWVuZFwiLCBcIlN0YXJidWNrc1wiLCBcInRvZGF5XCIsICcnKTtcclxuICAgIGNyZWF0ZVRhc2soXCJDb29raW5nIGNsYXNzXCIsIFwiQnJpbmcgaG9tZW1hZGUgcGllXCIsIFwidG9kYXlcIiwgJycpO1xyXG4gICAgY3JlYXRlVGFzayhcIlJlYWRcIiwgXCJSZWFkIHR3byBjaGFwdGVyXCIsIFwidG9tb3Jyb3dcIiwgJycpO1xyXG4gICAgY3JlYXRlVGFzayhcIkxlYXJuIHNpZ24gbGFuZ3VhZ2VcIiwgXCJQcmFjdGljZSBlbmdsaXNoIGFscGhhYmV0XCIsIFwidG9tb3Jyb3dcIiwgJycpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGFsbFRhc2tzKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGFzaztcclxuXHJcbiIsImltcG9ydCBjcmVhdGVUYXNrIGZyb20gXCIuL2NyZWF0ZS10YXNrXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRhc2tWaWV3IH0gZnJvbSBcIi4vdWlcIjtcclxuaW1wb3J0IHsgYWxsVGFza3MgfSBmcm9tIFwiLi9jcmVhdGUtdGFza1wiO1xyXG5cclxuY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZEJ1dHRvbicpO1xyXG5jb25zdCBmb3JtQWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tGb3JtQWRkQnV0dG9uJyk7XHJcbmNvbnN0IGlucHV0VGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXRUYXNrTmFtZScpO1xyXG5jb25zdCBpbnB1dFRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dFRhc2tEZXNjcmlwdGlvbicpO1xyXG5jb25zdCBpbnB1dER1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXREdWVEYXRlJyk7XHJcbmNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tGb3JtQ29udGFpbmVyXCIpO1xyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrRm9ybVwiKTtcclxuY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza0NvbnRhaW5lclwiKTtcclxuXHJcbmNvbnN0IGJ1dHRvbkNsaWNrZWQgPSAoKSA9PiB7XHJcbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBmb3JtQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgICAgICBmb3JtLnN0eWxlLm9wYWNpdHkgPSBcIjEwMFwiO1xyXG4gICAgICAgIGZvcm0uc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgxKVwiO1xyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgZm9ybUFkZEJ1dHRvbkNsaWNrZWQgPSAoKSA9PiB7XHJcbiAgICBmb3JtQWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKGlucHV0VGFza05hbWUudmFsdWUpIHtcclxuICAgICAgICAgICAgbGV0IGR1ZURhdGU7XHJcbiAgICAgICAgICAgIGlucHV0RHVlRGF0ZS5mb3JFYWNoKChlKSA9PntcclxuICAgICAgICAgICAgICAgIGlmIChlLmNsYXNzTmFtZS5pbmNsdWRlcygnc2VsZWN0ZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGUgPSBlLmlkLnJlcGxhY2UoJ2lucHV0JywgJycpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNyZWF0ZVRhc2soaW5wdXRUYXNrTmFtZS52YWx1ZSwgaW5wdXRUYXNrRGVzY3JpcHRpb24udmFsdWUsIGR1ZURhdGUpO1xyXG4gICAgICAgICAgICBmb3JtQ2FuY2VsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcbmNvbnN0IGR1ZURhdGVDbGljayA9ICgpID0+IHtcclxuICAgIGlucHV0RHVlRGF0ZS5mb3JFYWNoKGR1ZURhdGUgPT57XHJcbiAgICAgICAgZHVlRGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+IHtcclxuICAgICAgICAgICAgaW5wdXREdWVEYXRlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGR1ZURhdGUuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgZm9ybUNhbmNlbENsaWNrID0gKCkgPT4ge1xyXG4gICAgZm9ybUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5pZCA9PSAndGFza0Zvcm1Db250YWluZXInKSB7XHJcbiAgICAgICAgICAgIGZvcm1DYW5jZWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBmb3JtQ2FuY2VsID0gKCkgPT4ge1xyXG4gICAgZm9ybS5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICBmb3JtQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgZm9ybS5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDApXCI7XHJcbiAgICBpbnB1dFRhc2tOYW1lLnZhbHVlID0gJyc7XHJcbiAgICBpbnB1dFRhc2tEZXNjcmlwdGlvbi52YWx1ZSA9ICcnO1xyXG4gICAgaW5wdXREdWVEYXRlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXHJcbiAgICB9KVxyXG4gICAgaW5wdXREdWVEYXRlWzBdLmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XHJcbn1cclxuXHJcbmNvbnN0IHNlbGVjdFRhc2sgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+IHtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcclxuXHJcbiAgICAgICAgaWYgKHRhcmdldC5jbGFzc05hbWUgPT0gXCJ0YXNrQ29udGFpbmVyXCIpIHtcclxuXHJcbiAgICAgICAgICAgIHRhc2tTZWxlY3Rpb24odGFyZ2V0KTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBkZXNlbGVjdFRhc2sgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+IHtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldFxyXG4gICAgICAgIGlmICh0YXJnZXQgPT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnRDb250YWluZXInKSkge1xyXG4gICAgICAgICAgICByZW1vdmVUYXNrVmlldygpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tWaWV3Q29udGFpbmVyJykpIHtcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrVmlld0NvbnRhaW5lcicpLmlkID09ICdzJyArIHRhcmdldC5pZCkge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlVGFza1ZpZXcoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgcmVtb3ZlVGFza1ZpZXcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0YXNrVmlld0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrVmlld0NvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICBcclxuICAgIHRhc2tWaWV3Q29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3NDb250YWluZXInKTtcclxuICAgIHRhc2tzQ29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb24gPSBcImFsbCAwcyBsaW5lYXJcIjtcclxuICAgIHRhc2tzQ29udGFpbmVyLnN0eWxlLm1hcmdpbiA9IFwiMzhweCBhdXRvIGF1dG8gYXV0b1wiO1xyXG4gICAgdGFza3NDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKC0zMCUpXCI7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICB0YXNrc0NvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uID0gXCJhbGwgMC4xNXMgZWFzZVwiO1xyXG4gICAgICAgIHRhc2tzQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgwKVwiOyBcclxuICAgIH0sMTApXHJcbn1cclxuXHJcbmNvbnN0IHRhc2tTZWxlY3Rpb24gPSAodGFza0NvbnRhaW5lcikgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRUYXNrID0gYWxsVGFza3MuZmluZCgodGFzayk9PiB7XHJcbiAgICAgICAgaWYgKHRhc2sua2V5ID09IHRhc2tDb250YWluZXIuaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHRhc2tWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tWaWV3Q29udGFpbmVyJylcclxuXHJcbiAgICBpZiAodGFza1ZpZXcpIHtcclxuICAgICAgICBpZiAodGFza1ZpZXcuaWQgPT0gXCJzXCIgKyBzZWxlY3RlZFRhc2sua2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhc2tWaWV3LnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzQ29udGFpbmVyJykuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKC0zMCUpXCI7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVUYXNrVmlldyhzZWxlY3RlZFRhc2spO1xyXG59XHJcblxyXG5cclxuY29uc3QgY2hlY2tDbGljayA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTmFtZSA9PSAnY2hlY2tDb250YWluZXInICkge1xyXG4gICAgICAgICAgICBjb25zdCBjaGVja2VkVGFzayA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgY29uc3QgdGFza05hbWUgPSBlLnRhcmdldC5wYXJlbnROb2RlLm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgICAgICAgY29uc3QgZGVsZXRlQ29udGFpbmVyID0gdGFza05hbWUubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICAgICBjb25zdCBjaGVja0NvbnRhaW5lciA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjaGVja0NvbnRhaW5lci5zdHlsZS5hbmltYXRpb24gPSBcImNoZWNrQ2xpY2sgMC4zcyBlYXNlLW91dFwiO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFjaGVja2VkVGFzay5jbGFzc05hbWUuaW5jbHVkZXMoJ2NvbXBsZXRlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICBjaGVja2VkVGFzay5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcclxuICAgICAgICAgICAgICAgIHRhc2tOYW1lLnN0eWxlLmJhY2tncm91bmRTaXplID0gXCIxMDAlIDEwMCVcIjtcclxuICAgICAgICAgICAgICAgIGNoZWNrQ29udGFpbmVyLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48dGl0bGU+aW9uaWNvbnMtdjUtZTwvdGl0bGU+PHBhdGggZD1cIk0yNTYsNDhDMTQxLjMxLDQ4LDQ4LDE0MS4zMSw0OCwyNTZzOTMuMzEsMjA4LDIwOCwyMDgsMjA4LTkzLjMxLDIwOC0yMDhTMzcwLjY5LDQ4LDI1Niw0OFpNMzY0LjI1LDE4Ni4yOWwtMTM0LjQsMTYwYTE2LDE2LDAsMCwxLTEyLDUuNzFoLS4yN2ExNiwxNiwwLDAsMS0xMS44OS01LjNsLTU3LjYtNjRhMTYsMTYsMCwxLDEsMjMuNzgtMjEuNGw0NS4yOSw1MC4zMkwzMzkuNzUsMTY1LjcxYTE2LDE2LDAsMCwxLDI0LjUsMjAuNThaXCIvPjwvc3ZnPidcclxuICAgICAgICAgICAgICAgIGNoZWNrQ29udGFpbmVyLnN0eWxlLmZpbHRlciA9IFwiYnJpZ2h0bmVzcygwKSBzYXR1cmF0ZSgxMDAlKSBpbnZlcnQoNzQlKSBzZXBpYSgxMyUpIHNhdHVyYXRlKDIyNyUpIGh1ZS1yb3RhdGUoMTc3ZGVnKSBicmlnaHRuZXNzKDEwMyUpIGNvbnRyYXN0KDk3JSlcIjtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZUNvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gXCIxMDBcIjtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNoZWNrZWRUYXNrLmNsYXNzTmFtZS5pbmNsdWRlcygnY29tcGxldGVkJykpe1xyXG4gICAgICAgICAgICAgICAgY2hlY2tlZFRhc2suY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkJyk7XHJcbiAgICAgICAgICAgICAgICB0YXNrTmFtZS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiMCUgMTAwJVwiO1xyXG4gICAgICAgICAgICAgICAgY2hlY2tDb250YWluZXIuaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjx0aXRsZT5pb25pY29ucy12NS1xPC90aXRsZT48Y2lyY2xlIGN4PVwiMjU2XCIgY3k9XCIyNTZcIiByPVwiMTkyXCIgc3R5bGU9XCJmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDozMnB4XCIvPjwvc3ZnPidcclxuICAgICAgICAgICAgICAgIGNoZWNrQ29udGFpbmVyLnN0eWxlLmZpbHRlciA9IFwiIGJyaWdodG5lc3MoMCkgc2F0dXJhdGUoMTAwJSkgaW52ZXJ0KDklKSBzZXBpYSg0MyUpIHNhdHVyYXRlKDMzOCUpIGh1ZS1yb3RhdGUoMTc3ZGVnKSBicmlnaHRuZXNzKDEwMCUpIGNvbnRyYXN0KDk2JSlcIjtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja0NvbnRhaW5lci5zdHlsZS5hbmltYXRpb24gPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIH0sMTApXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSB0YXNrTmFtZS5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVySGVpZ2h0ID0gdGFza0NvbnRhaW5lci5jbGllbnRIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzcGFjZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICBzcGFjZXIuc3R5bGUuaGVpZ2h0ID0gdGFza0NvbnRhaW5lckhlaWdodCArIFwicHhcIjtcclxuICAgICAgICAgICAgc3BhY2VyLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiLVwiICsgdGFza0NvbnRhaW5lckhlaWdodCArIFwicHhcIjtcclxuICAgICAgICAgICAgc3BhY2VyLnN0eWxlLnRyYW5zaXRpb24gPSBcImFsbCBlYXNlLWluLW91dCAwLjJzXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1Ykdyb3VwID0gdGFza0NvbnRhaW5lci5wYXJlbnROb2RlO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNoZWNrZWRUYXNrLmNsYXNzTmFtZS5pbmNsdWRlcygnY29tcGxldGVkJykgJiYgdGFza0NvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmcpIHtcclxuICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChzcGFjZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza0NvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza0NvbnRhaW5lci5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIi1cIiArIHRhc2tDb250YWluZXJIZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VyLnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9LDMwMClcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBzcGFjZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ViR3JvdXAuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9LDUwMClcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza0NvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gXCIxMDBcIjtcclxuICAgICAgICAgICAgICAgIH0sNjAwKVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICghY2hlY2tlZFRhc2suY2xhc3NOYW1lLmluY2x1ZGVzKCdjb21wbGV0ZWQnKSAmJiB0YXNrQ29udGFpbmVyICE9IHN1Ykdyb3VwLmNoaWxkcmVuWzFdKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ViR3JvdXAgPSB0YXNrQ29udGFpbmVyLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgICAgICBzdWJHcm91cC5pbnNlcnRCZWZvcmUoc3BhY2VyLCBzdWJHcm91cC5jaGlsZHJlblsxXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiLVwiICsgdGFza0NvbnRhaW5lckhlaWdodCArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgICAgICBzcGFjZXIuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcclxuICAgICAgICAgICAgICAgIH0sMzAwKVxyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza0NvbnRhaW5lci5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlci5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBzdWJHcm91cC5pbnNlcnRCZWZvcmUodGFza0NvbnRhaW5lciwgc3ViR3JvdXAuY2hpbGRyZW5bMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSw1MDApXHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IFwiMTAwXCI7XHJcbiAgICAgICAgICAgICAgICB9LDYwMClcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgZGVsZXRlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudENvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTmFtZSA9PSAnZGVsZXRlQ29udGFpbmVyJykge1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lckhlaWdodCA9IHRhc2tDb250YWluZXIuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgICAgICAgdGFza0NvbnRhaW5lci50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVkoLTEwMCUpXCI7XHJcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuc3R5bGUubWFyZ2luQm90dG9tID0gXCItXCIgKyB0YXNrQ29udGFpbmVySGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH0sMjAwKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IHRhc2tDb250YWluZXJIb3ZlciA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Q29udGFpbmVyJykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gJ3Rhc2tDb250YWluZXInICkge1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUNvbnRhaW5lciA9IHRhc2tDb250YWluZXIuY2hpbGRyZW5bMl07XHJcbiAgICAgICAgICAgIGRlbGV0ZUNvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gXCIxMDBcIjtcclxuXHJcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0YXNrQ29udGFpbmVyLmNsYXNzTmFtZS5pbmNsdWRlcygnY29tcGxldGVkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGVDb250YWluZXIuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSAnZGVzY3JpcHRpb25Db250YWluZXInICkge1xyXG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICBjb25zdCBkZWxldGVDb250YWluZXIgPSBkZXNjcmlwdGlvbkNvbnRhaW5lci5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICAgICBkZWxldGVDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IFwiMTAwXCI7XHJcbiAgICAgICAgfSBcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5jb25zdCBydW5FdmVudEhhbmRsZXJzID0gKCkgPT4ge1xyXG4gICAgY2hlY2tDbGljaygpO1xyXG4gICAgZm9ybUFkZEJ1dHRvbkNsaWNrZWQoKTtcclxuICAgIGR1ZURhdGVDbGljaygpO1xyXG4gICAgZm9ybUNhbmNlbENsaWNrKCk7XHJcbiAgICBzZWxlY3RUYXNrKCk7XHJcbiAgICBkZXNlbGVjdFRhc2soKTtcclxuICAgIHRhc2tDb250YWluZXJIb3ZlcigpO1xyXG4gICAgZGVsZXRlQ2xpY2soKVxyXG4gICAgYnV0dG9uQ2xpY2tlZCgpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJ1bkV2ZW50SGFuZGxlcnM7XHJcbiIsImNsYXNzIFRhc2sge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGxpc3QsIGtleSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgICAgdGhpcy5saXN0ID0gbGlzdDtcclxuICAgICAgICB0aGlzLmtleSA9IGtleTtcclxuICAgIH1cclxuXHJcbiAgICBnZXROYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TmFtZShuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBzZXREdWVEYXRlKGR1ZURhdGUpIHtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldExpc3QobGlzdCkge1xyXG4gICAgICAgIHRoaXMubGlzdCA9IGxpc3Q7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2s7IiwiY29uc3QgaW5pdGlhbFBhZ2VMb2FkID0gKCkgPT4ge1xyXG4gICAgbG9hZGluZ1BhZ2UoKVxyXG4gICAgY3JlYXRlQWxsVGFza3NDb250YWluZXIoKTtcclxufVxyXG5cclxuY29uc3QgbG9hZGluZ1BhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsb2FkaW5nU2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2FkaW5nU2NyZWVuXCIpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxyXG4gICAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3dZPSBcImhpZGRlblwiO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgICAgIGxvYWRpbmdTY3JlZW4uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICAgICBsb2FkaW5nU2NyZWVuLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBib2R5LnN0eWxlLm92ZXJmbG93WT0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgICAgfSwgMzAwKVxyXG4gICAgICAgIH0sIDUwMClcclxuICAgICAgICBcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuLy9BTEwgVEFTS1MgQ09OVEVOVFxyXG5jb25zdCBjcmVhdGVBbGxUYXNrc0NvbnRhaW5lciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGFsbFRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhbGxUYXNrc0NvbnRhaW5lci5pZCA9IFwiYWxsVGFza3NDb250YWluZXJcIjtcclxuICAgIGFsbFRhc2tzQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwidGFza3NDb250YWluZXJcIjtcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IGFsbFRhc2tzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFsbFRhc2tzVGl0bGUuaWQgPSAndGl0bGVDb250YWluZXInO1xyXG4gICAgYWxsVGFza3NUaXRsZS5jbGFzc05hbWUgPSBcInRhc2tzVGl0bGVcIjtcclxuICAgIGFsbFRhc2tzVGl0bGUuaW5uZXJUZXh0ID0gXCJBbGwgVGFza3NcIjtcclxuXHJcbiAgICBhbGxUYXNrc0NvbnRhaW5lci5hcHBlbmQoYWxsVGFza3NUaXRsZSk7XHJcblxyXG5cclxuICAgIGNyZWF0ZVN1Ykdyb3VwcyhcInRvZGF5XCIsIGFsbFRhc2tzQ29udGFpbmVyKTtcclxuICAgIGNyZWF0ZVN1Ykdyb3VwcyhcInRvbW9ycm93XCIsIGFsbFRhc2tzQ29udGFpbmVyKTtcclxuICAgIGNyZWF0ZVN1Ykdyb3VwcyhcInVwY29taW5nXCIsIGFsbFRhc2tzQ29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnRDb250YWluZXInKTtcclxuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kKGFsbFRhc2tzQ29udGFpbmVyKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZVN1Ykdyb3VwcyA9IChncm91cCwgYWxsVGFza3NDb250YWluZXIpID0+IHtcclxuXHJcbiAgICBjb25zdCBjYXBpdGFsaXplID0gKHN0cikgPT4ge1xyXG4gICAgICAgIHJldHVybiBzdHJbMF0udG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1Ykdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzdWJHcm91cC5jbGFzc05hbWUgPSBcInN1Ykdyb3VwXCI7XHJcbiAgICBzdWJHcm91cC5pZCA9IGdyb3VwO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3Qgc3ViR3JvdXBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHN1Ykdyb3VwVGl0bGUuY2xhc3NOYW1lID0gXCJzdWJHcm91cFRpdGxlXCI7XHJcblxyXG5cclxuICAgIHN1Ykdyb3VwVGl0bGUuaW5uZXJUZXh0ID0gY2FwaXRhbGl6ZShncm91cCk7XHJcblxyXG5cclxuICAgIHN1Ykdyb3VwLmFwcGVuZChzdWJHcm91cFRpdGxlKVxyXG5cclxuICAgIGFsbFRhc2tzQ29udGFpbmVyLmFwcGVuZChzdWJHcm91cCk7XHJcbn0gICBcclxuXHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlVGFza0NvbnRhaW5lciA9ICh0YXNrLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwga2V5KSA9PiB7XHJcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTmFtZSA9ICd0YXNrQ29udGFpbmVyJztcclxuICAgIHRhc2tDb250YWluZXIuaWQgPSBrZXk7XHJcblxyXG4gICAgY29uc3QgY2hlY2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNoZWNrQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdjaGVja0NvbnRhaW5lcic7XHJcbiAgICBjaGVja0NvbnRhaW5lci5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHRpdGxlPmlvbmljb25zLXY1LXE8L3RpdGxlPjxjaXJjbGUgY3g9XCIyNTZcIiBjeT1cIjI1NlwiIHI9XCIxOTJcIiBzdHlsZT1cImZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjMycHhcIi8+PC9zdmc+J1xyXG5cclxuICAgIGNvbnN0IG5hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgbmFtZUNvbnRhaW5lci5jbGFzc05hbWUgPSduYW1lQ29udGFpbmVyJztcclxuICAgIG5hbWVDb250YWluZXIuaW5uZXJUZXh0ID0gdGFzaztcclxuXHJcbiAgICBjb25zdCBkZWxldGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRlbGV0ZUNvbnRhaW5lci5jbGFzc05hbWUgPSAnZGVsZXRlQ29udGFpbmVyJztcclxuICAgIGRlbGV0ZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHRpdGxlPmlvbmljb25zLXY1LW08L3RpdGxlPjxwYXRoIGQ9XCJNMjU2LDQ4QzE0MS4zMSw0OCw0OCwxNDEuMzEsNDgsMjU2czkzLjMxLDIwOCwyMDgsMjA4LDIwOC05My4zMSwyMDgtMjA4UzM3MC42OSw0OCwyNTYsNDhabTc1LjMxLDI2MC42OWExNiwxNiwwLDEsMS0yMi42MiwyMi42MkwyNTYsMjc4LjYzbC01Mi42OSw1Mi42OGExNiwxNiwwLDAsMS0yMi42Mi0yMi42MkwyMzMuMzcsMjU2bC01Mi42OC01Mi42OWExNiwxNiwwLDAsMSwyMi42Mi0yMi42MkwyNTYsMjMzLjM3bDUyLjY5LTUyLjY4YTE2LDE2LDAsMCwxLDIyLjYyLDIyLjYyTDI3OC42MywyNTZaXCIvPjwvc3ZnPic7XHJcblxyXG5cclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5jbGFzc05hbWUgPSAnZGVzY3JpcHRpb25Db250YWluZXInO1xyXG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuaW5uZXJUZXh0ID0gZGVzY3JpcHRpb247XHJcblxyXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmQoY2hlY2tDb250YWluZXIpO1xyXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmQobmFtZUNvbnRhaW5lcik7XHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZChkZWxldGVDb250YWluZXIpO1xyXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmQoZGVzY3JpcHRpb25Db250YWluZXIpO1xyXG4gICAgXHJcblxyXG4gICAgbGV0IHN1Ykdyb3VwO1xyXG4gICAgaWYgKGR1ZURhdGUgPT0gJ3RvZGF5Jykge1xyXG4gICAgICAgIHN1Ykdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZGF5Jyk7XHJcbiAgICB9IGVsc2UgaWYgKGR1ZURhdGUgPT0gJ3RvbW9ycm93Jykge1xyXG4gICAgICAgIHN1Ykdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvbW9ycm93Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3ViR3JvdXAuaW5zZXJ0QmVmb3JlKHRhc2tDb250YWluZXIsIHN1Ykdyb3VwLmNoaWxkcmVuWzFdKTtcclxuICAgIFxyXG4gICAgdGFza0NvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgIHRhc2tDb250YWluZXIuc3R5bGUuYW5pbWF0aW9uID0gXCJ0YXNrQ29udGFpbmVyQWRkIDAuNnMgZWFzZS1pbi1vdXRcIjtcclxuICAgICAgICB0YXNrQ29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSBcIjEwMFwiO1xyXG4gICAgfSw1MClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRhc2tWaWV3ID0gKHRhc2spID0+IHtcclxuICAgIGNvbnN0IHRhc2tWaWV3Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YXNrVmlld0NvbnRhaW5lci5jbGFzc05hbWUgPSAndGFza1ZpZXdDb250YWluZXInO1xyXG4gICAgdGFza1ZpZXdDb250YWluZXIuaWQgPSBcInNcIiArIHRhc2sua2V5O1xyXG5cclxuICAgIGNvbnN0IHRhc2tWaWV3TmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGFza1ZpZXdOYW1lQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwidGFza1ZpZXdOYW1lQ29udGFpbmVyXCI7XHJcbiAgICB0YXNrVmlld0NvbnRhaW5lci5hcHBlbmQodGFza1ZpZXdOYW1lQ29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBjaGVja0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2hlY2tDb250YWluZXIuY2xhc3NOYW1lID0gJ3Rhc2tWaWV3Q2hlY2tDb250YWluZXInO1xyXG4gICAgY2hlY2tDb250YWluZXIuaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjx0aXRsZT5pb25pY29ucy12NS1xPC90aXRsZT48Y2lyY2xlIGN4PVwiMjU2XCIgY3k9XCIyNTZcIiByPVwiMTkyXCIgc3R5bGU9XCJmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDozMnB4XCIvPjwvc3ZnPic7XHJcbiAgICB0YXNrVmlld05hbWVDb250YWluZXIuYXBwZW5kKGNoZWNrQ29udGFpbmVyKVxyXG5cclxuICAgIGNvbnN0IHRhc2tWaWV3TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRhc2tWaWV3TmFtZS5jbGFzc05hbWUgPSBcInRhc2tWaWV3TmFtZVwiO1xyXG4gICAgdGFza1ZpZXdOYW1lLmlubmVyVGV4dCA9IHRhc2submFtZVxyXG4gICAgdGFza1ZpZXdOYW1lQ29udGFpbmVyLmFwcGVuZCh0YXNrVmlld05hbWUpO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgdGFza1ZpZXdEZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGFza1ZpZXdEZXNjcmlwdGlvbkNvbnRhaW5lci5jbGFzc05hbWUgPSBcInRhc2tWaWV3RGVzY3JpcHRpb25Db250YWluZXJcIjtcclxuICAgIHRhc2tWaWV3RGVzY3JpcHRpb25Db250YWluZXIuaW5uZXJUZXh0ID0gXCJEZXNjcmlwdGlvblwiO1xyXG4gICAgdGFza1ZpZXdDb250YWluZXIuYXBwZW5kKHRhc2tWaWV3RGVzY3JpcHRpb25Db250YWluZXIpO1xyXG4gICAgXHJcblxyXG4gICAgY29uc3QgdGFza1ZpZXdEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRhc2tWaWV3RGVzY3JpcHRpb24uY2xhc3NOYW1lID0gXCJ0YXNrVmlld0Rlc2NyaXB0aW9uXCI7XHJcbiAgICB0YXNrVmlld0Rlc2NyaXB0aW9uLmlubmVyVGV4dCA9IHRhc2suZGVzY3JpcHRpb247XHJcbiAgICB0YXNrVmlld0Rlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZCh0YXNrVmlld0Rlc2NyaXB0aW9uKVxyXG5cclxuICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzQ29udGFpbmVyJyk7XHJcbiAgICB0YXNrc0NvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uID0gXCJhbGwgMC4xNXMgZWFzZVwiO1xyXG5cclxuXHJcblxyXG5cclxuICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgdGFza3NDb250YWluZXIuc3R5bGUudHJhbnNpdGlvbiA9IFwiYWxsIDBzIGxpbmVhclwiO1xyXG5cclxuICAgICAgICB0YXNrc0NvbnRhaW5lci5zdHlsZS5tYXJnaW4gPSBcIjM4cHggMCBhdXRvIDMwJVwiO1xyXG4gICAgICAgIHRhc2tzQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgwKVwiO1xyXG5cclxuICAgICAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnRDb250YWluZXInKTtcclxuICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZCh0YXNrVmlld0NvbnRhaW5lcik7XHJcbiAgICAgICAgdGFza1ZpZXdDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKDI1dncpXCI7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgdGFza1ZpZXdDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IFwiMTAwXCI7XHJcbiAgICAgICAgICAgIHRhc2tWaWV3Q29udGFpbmVyLnN0eWxlLndpZHRoID0gXCI0MDBweFwiXHJcbiAgICAgICAgICAgIHRhc2tWaWV3Q29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSBcIjEwMFwiXHJcbiAgICAgICAgICAgIHRhc2tWaWV3Q29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgwKVwiO1xyXG4gICAgICAgIH0sMTApXHJcbiAgICAgICAgXHJcbiAgICB9LDE1MClcclxuXHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbFBhZ2VMb2FkO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0aWFsUGFnZUxvYWQgZnJvbSBcIi4vbW9kdWxlcy91aVwiO1xyXG5pbXBvcnQgVGFzayBmcm9tIFwiLi9tb2R1bGVzL3Rhc2tcIjtcclxuaW1wb3J0IHsgZXhhbXBsZVRhc2tzIH0gZnJvbSBcIi4vbW9kdWxlcy9jcmVhdGUtdGFza1wiO1xyXG5pbXBvcnQgcnVuRXZlbnRIYW5kbGVycyBmcm9tIFwiLi9tb2R1bGVzL2V2ZW50LWhhbmRsZXJzXCI7XHJcblxyXG5cclxuXHJcblxyXG5pbml0aWFsUGFnZUxvYWQoKTtcclxuZXhhbXBsZVRhc2tzKCk7XHJcbnJ1bkV2ZW50SGFuZGxlcnMoKTtcclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=