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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");


let allTasks = [];


const createTask = (task, description, dueDate, list) => {
    //add task to general task lists array 
    //get ui to check date, and list
    //Determine where to display that task (today, tomorrow, this week, list)
    //run UI.js function to add task elements to the display.
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTask);


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
    constructor(name, notes, dueDate, list) {
        this.name = name;
        this.notes = notes;
        this.dueDate = dueDate;
        this.list = list;
    }

    getName(name) {
        return this.name
    }

    setName(name) {
        this.name = name;
    }

    setNotes(notes) {
        this.notes = notes;
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const initialPageLoad = () => {
    createAllTasksContainer();
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
    createSubGroups("week", allTasksContainer);
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

    if (group == 'today' || group == 'upcoming') {
        subGroupTitle.innerText = capitalize(group);
    } else {
        subGroupTitle.innerText = "This " + capitalize(group);
    } 

    subGroup.append(subGroupTitle)

    allTasksContainer.append(subGroup);


    if (group == 'today') {
        createTasksContainer('Exercise', 'Workout out for 45 minutes', subGroup);
        createTasksContainer('Work on project', 'Find more resources for topic', subGroup);
    }

    if (group == 'week') {
        createTasksContainer('Read', 'Read two more chapters of book', subGroup);
        createTasksContainer('Bike up mountain', 'Bike for 45 minutes', subGroup);
        createTasksContainer('Learn Chinese', 'Practice vocabulary', subGroup);
    }

    
}   


const createTasksContainer = (task, description, dueDate) => {
    const taskContainer = document.createElement('div');
    taskContainer.className = 'taskContainer'


    const checkContainer = document.createElement('div');
    checkContainer.className = 'checkContainer';
    checkContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><title>ionicons-v5-q</title><circle cx="256" cy="256" r="192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/></svg>'

    const nameContainer = document.createElement('div')
    nameContainer.className ='nameContainer';
    nameContainer.innerText = task;

    const descriptionContainer = document.createElement('div');
    descriptionContainer.className = 'descriptionContainer';
    descriptionContainer.innerText = description;

    taskContainer.append(checkContainer);
    taskContainer.append(nameContainer);
    taskContainer.append(descriptionContainer);


    dueDate.append(taskContainer)
}










const createShortcutsTasksContainer = (type) => {
    const shortcutsTasksContainer = document.createElement('div');
    shortcutsTasksContainer.className = "shortcutsTasksContainer";

    const shortcutsTitle = document.createElement('div');
    shortcutsTitle.innerText = type;
    shortcutsTitle.className = "shortcutsTasksTitle";
    shortcutsTasksContainer.append(shortcutsTitle);

    const contentContainer = document.querySelector('#contentContainer');
    contentContainer.append(shortcutsTasksContainer);
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




(0,_modules_ui__WEBPACK_IMPORTED_MODULE_0__["default"])();



const newTask = new _modules_task__WEBPACK_IMPORTED_MODULE_1__["default"]("Exercise", "You gotta do it", "1/6/22")

;(0,_modules_create_task__WEBPACK_IMPORTED_MODULE_2__["default"])(newTask);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNiMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7QUM5Qm5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvTUFBb00sWUFBWSxxQkFBcUIsc0JBQXNCO0FBQzNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZTs7Ozs7O1VDdEhmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ04yQztBQUNUO0FBQ1k7QUFDOUM7QUFDQSx1REFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxREFBSTtBQUN4QjtBQUNBLGlFQUFVLFUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jcmVhdGUtdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3VpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XHJcblxyXG5sZXQgYWxsVGFza3MgPSBbXTtcclxuXHJcblxyXG5jb25zdCBjcmVhdGVUYXNrID0gKHRhc2ssIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBsaXN0KSA9PiB7XHJcbiAgICAvL2FkZCB0YXNrIHRvIGdlbmVyYWwgdGFzayBsaXN0cyBhcnJheSBcclxuICAgIC8vZ2V0IHVpIHRvIGNoZWNrIGRhdGUsIGFuZCBsaXN0XHJcbiAgICAvL0RldGVybWluZSB3aGVyZSB0byBkaXNwbGF5IHRoYXQgdGFzayAodG9kYXksIHRvbW9ycm93LCB0aGlzIHdlZWssIGxpc3QpXHJcbiAgICAvL3J1biBVSS5qcyBmdW5jdGlvbiB0byBhZGQgdGFzayBlbGVtZW50cyB0byB0aGUgZGlzcGxheS5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhc2s7XHJcbiIsImNsYXNzIFRhc2sge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgbm90ZXMsIGR1ZURhdGUsIGxpc3QpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMubm90ZXMgPSBub3RlcztcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMubGlzdCA9IGxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TmFtZShuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZVxyXG4gICAgfVxyXG5cclxuICAgIHNldE5hbWUobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Tm90ZXMobm90ZXMpIHtcclxuICAgICAgICB0aGlzLm5vdGVzID0gbm90ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RHVlRGF0ZShkdWVEYXRlKSB7XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRMaXN0KGxpc3QpIHtcclxuICAgICAgICB0aGlzLmxpc3QgPSBsaXN0O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFzazsiLCJjb25zdCBpbml0aWFsUGFnZUxvYWQgPSAoKSA9PiB7XHJcbiAgICBjcmVhdGVBbGxUYXNrc0NvbnRhaW5lcigpO1xyXG59XHJcblxyXG5cclxuLy9BTEwgVEFTS1MgQ09OVEVOVFxyXG5jb25zdCBjcmVhdGVBbGxUYXNrc0NvbnRhaW5lciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGFsbFRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhbGxUYXNrc0NvbnRhaW5lci5pZCA9IFwiYWxsVGFza3NDb250YWluZXJcIjtcclxuICAgIGFsbFRhc2tzQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwidGFza3NDb250YWluZXJcIjtcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IGFsbFRhc2tzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFsbFRhc2tzVGl0bGUuaWQgPSAndGl0bGVDb250YWluZXInO1xyXG4gICAgYWxsVGFza3NUaXRsZS5jbGFzc05hbWUgPSBcInRhc2tzVGl0bGVcIjtcclxuICAgIGFsbFRhc2tzVGl0bGUuaW5uZXJUZXh0ID0gXCJBbGwgVGFza3NcIjtcclxuXHJcbiAgICBhbGxUYXNrc0NvbnRhaW5lci5hcHBlbmQoYWxsVGFza3NUaXRsZSk7XHJcblxyXG5cclxuICAgIGNyZWF0ZVN1Ykdyb3VwcyhcInRvZGF5XCIsIGFsbFRhc2tzQ29udGFpbmVyKTtcclxuICAgIGNyZWF0ZVN1Ykdyb3VwcyhcIndlZWtcIiwgYWxsVGFza3NDb250YWluZXIpO1xyXG4gICAgY3JlYXRlU3ViR3JvdXBzKFwidXBjb21pbmdcIiwgYWxsVGFza3NDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudENvbnRhaW5lcicpO1xyXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmQoYWxsVGFza3NDb250YWluZXIpO1xyXG59XHJcblxyXG5jb25zdCBjcmVhdGVTdWJHcm91cHMgPSAoZ3JvdXAsIGFsbFRhc2tzQ29udGFpbmVyKSA9PiB7XHJcblxyXG4gICAgY29uc3QgY2FwaXRhbGl6ZSA9IChzdHIpID0+IHtcclxuICAgICAgICByZXR1cm4gc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdWJHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc3ViR3JvdXAuY2xhc3NOYW1lID0gXCJzdWJHcm91cFwiO1xyXG4gICAgc3ViR3JvdXAuaWQgPSBncm91cDtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHN1Ykdyb3VwVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBzdWJHcm91cFRpdGxlLmNsYXNzTmFtZSA9IFwic3ViR3JvdXBUaXRsZVwiO1xyXG5cclxuICAgIGlmIChncm91cCA9PSAndG9kYXknIHx8IGdyb3VwID09ICd1cGNvbWluZycpIHtcclxuICAgICAgICBzdWJHcm91cFRpdGxlLmlubmVyVGV4dCA9IGNhcGl0YWxpemUoZ3JvdXApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzdWJHcm91cFRpdGxlLmlubmVyVGV4dCA9IFwiVGhpcyBcIiArIGNhcGl0YWxpemUoZ3JvdXApO1xyXG4gICAgfSBcclxuXHJcbiAgICBzdWJHcm91cC5hcHBlbmQoc3ViR3JvdXBUaXRsZSlcclxuXHJcbiAgICBhbGxUYXNrc0NvbnRhaW5lci5hcHBlbmQoc3ViR3JvdXApO1xyXG5cclxuXHJcbiAgICBpZiAoZ3JvdXAgPT0gJ3RvZGF5Jykge1xyXG4gICAgICAgIGNyZWF0ZVRhc2tzQ29udGFpbmVyKCdFeGVyY2lzZScsICdXb3Jrb3V0IG91dCBmb3IgNDUgbWludXRlcycsIHN1Ykdyb3VwKTtcclxuICAgICAgICBjcmVhdGVUYXNrc0NvbnRhaW5lcignV29yayBvbiBwcm9qZWN0JywgJ0ZpbmQgbW9yZSByZXNvdXJjZXMgZm9yIHRvcGljJywgc3ViR3JvdXApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChncm91cCA9PSAnd2VlaycpIHtcclxuICAgICAgICBjcmVhdGVUYXNrc0NvbnRhaW5lcignUmVhZCcsICdSZWFkIHR3byBtb3JlIGNoYXB0ZXJzIG9mIGJvb2snLCBzdWJHcm91cCk7XHJcbiAgICAgICAgY3JlYXRlVGFza3NDb250YWluZXIoJ0Jpa2UgdXAgbW91bnRhaW4nLCAnQmlrZSBmb3IgNDUgbWludXRlcycsIHN1Ykdyb3VwKTtcclxuICAgICAgICBjcmVhdGVUYXNrc0NvbnRhaW5lcignTGVhcm4gQ2hpbmVzZScsICdQcmFjdGljZSB2b2NhYnVsYXJ5Jywgc3ViR3JvdXApO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG59ICAgXHJcblxyXG5cclxuY29uc3QgY3JlYXRlVGFza3NDb250YWluZXIgPSAodGFzaywgZGVzY3JpcHRpb24sIGR1ZURhdGUpID0+IHtcclxuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRhc2tDb250YWluZXIuY2xhc3NOYW1lID0gJ3Rhc2tDb250YWluZXInXHJcblxyXG5cclxuICAgIGNvbnN0IGNoZWNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjaGVja0NvbnRhaW5lci5jbGFzc05hbWUgPSAnY2hlY2tDb250YWluZXInO1xyXG4gICAgY2hlY2tDb250YWluZXIuaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjx0aXRsZT5pb25pY29ucy12NS1xPC90aXRsZT48Y2lyY2xlIGN4PVwiMjU2XCIgY3k9XCIyNTZcIiByPVwiMTkyXCIgc3R5bGU9XCJmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDozMnB4XCIvPjwvc3ZnPidcclxuXHJcbiAgICBjb25zdCBuYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIG5hbWVDb250YWluZXIuY2xhc3NOYW1lID0nbmFtZUNvbnRhaW5lcic7XHJcbiAgICBuYW1lQ29udGFpbmVyLmlubmVyVGV4dCA9IHRhc2s7XHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdkZXNjcmlwdGlvbkNvbnRhaW5lcic7XHJcbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5pbm5lclRleHQgPSBkZXNjcmlwdGlvbjtcclxuXHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZChjaGVja0NvbnRhaW5lcik7XHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZChuYW1lQ29udGFpbmVyKTtcclxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kKGRlc2NyaXB0aW9uQ29udGFpbmVyKTtcclxuXHJcblxyXG4gICAgZHVlRGF0ZS5hcHBlbmQodGFza0NvbnRhaW5lcilcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgY3JlYXRlU2hvcnRjdXRzVGFza3NDb250YWluZXIgPSAodHlwZSkgPT4ge1xyXG4gICAgY29uc3Qgc2hvcnRjdXRzVGFza3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNob3J0Y3V0c1Rhc2tzQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwic2hvcnRjdXRzVGFza3NDb250YWluZXJcIjtcclxuXHJcbiAgICBjb25zdCBzaG9ydGN1dHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2hvcnRjdXRzVGl0bGUuaW5uZXJUZXh0ID0gdHlwZTtcclxuICAgIHNob3J0Y3V0c1RpdGxlLmNsYXNzTmFtZSA9IFwic2hvcnRjdXRzVGFza3NUaXRsZVwiO1xyXG4gICAgc2hvcnRjdXRzVGFza3NDb250YWluZXIuYXBwZW5kKHNob3J0Y3V0c1RpdGxlKTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnRDb250YWluZXInKTtcclxuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kKHNob3J0Y3V0c1Rhc2tzQ29udGFpbmVyKTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsUGFnZUxvYWQiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0aWFsUGFnZUxvYWQgZnJvbSBcIi4vbW9kdWxlcy91aVwiO1xyXG5pbXBvcnQgVGFzayBmcm9tIFwiLi9tb2R1bGVzL3Rhc2tcIjtcclxuaW1wb3J0IGNyZWF0ZVRhc2sgZnJvbSBcIi4vbW9kdWxlcy9jcmVhdGUtdGFza1wiXHJcblxyXG5pbml0aWFsUGFnZUxvYWQoKTtcclxuXHJcblxyXG5cclxuY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKFwiRXhlcmNpc2VcIiwgXCJZb3UgZ290dGEgZG8gaXRcIiwgXCIxLzYvMjJcIilcclxuXHJcbmNyZWF0ZVRhc2sobmV3VGFzayk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9