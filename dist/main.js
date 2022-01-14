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

    allTasksContainer.append(document.createElement('div'));


    var i = document.createElement("div");
    i.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><title>ionicons-v5-q</title><circle cx="256" cy="256" r="192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/></svg>'
    allTasksContainer.append(i);

    allTasksContainer.append(document.createElement('div'));

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


    if (group == 'today' || group == 'upcoming') {
        subGroup.innerText = capitalize(group);
    } else {
        subGroup.innerText = "This " + capitalize(group);
    } 

    allTasksContainer.append(subGroup);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNiMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7QUM5Qm5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1TEFBdUwsWUFBWSxxQkFBcUIsc0JBQXNCO0FBQzlPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWU7Ozs7OztVQ3hFZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOMkM7QUFDVDtBQUNZO0FBQzlDO0FBQ0EsdURBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscURBQUk7QUFDeEI7QUFDQSxpRUFBVSxVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY3JlYXRlLXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy91aS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xyXG5cclxubGV0IGFsbFRhc2tzID0gW107XHJcblxyXG5cclxuY29uc3QgY3JlYXRlVGFzayA9ICh0YXNrLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgbGlzdCkgPT4ge1xyXG4gICAgLy9hZGQgdGFzayB0byBnZW5lcmFsIHRhc2sgbGlzdHMgYXJyYXkgXHJcbiAgICAvL2dldCB1aSB0byBjaGVjayBkYXRlLCBhbmQgbGlzdFxyXG4gICAgLy9EZXRlcm1pbmUgd2hlcmUgdG8gZGlzcGxheSB0aGF0IHRhc2sgKHRvZGF5LCB0b21vcnJvdywgdGhpcyB3ZWVrLCBsaXN0KVxyXG4gICAgLy9ydW4gVUkuanMgZnVuY3Rpb24gdG8gYWRkIHRhc2sgZWxlbWVudHMgdG8gdGhlIGRpc3BsYXkuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUYXNrO1xyXG4iLCJjbGFzcyBUYXNrIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIG5vdGVzLCBkdWVEYXRlLCBsaXN0KSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLm5vdGVzID0gbm90ZXM7XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgICB0aGlzLmxpc3QgPSBsaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5hbWUobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWVcclxuICAgIH1cclxuXHJcbiAgICBzZXROYW1lKG5hbWUpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE5vdGVzKG5vdGVzKSB7XHJcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldER1ZURhdGUoZHVlRGF0ZSkge1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TGlzdChsaXN0KSB7XHJcbiAgICAgICAgdGhpcy5saXN0ID0gbGlzdDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2s7IiwiY29uc3QgaW5pdGlhbFBhZ2VMb2FkID0gKCkgPT4ge1xyXG4gICAgY3JlYXRlQWxsVGFza3NDb250YWluZXIoKTtcclxufVxyXG5cclxuXHJcbi8vQUxMIFRBU0tTIENPTlRFTlRcclxuY29uc3QgY3JlYXRlQWxsVGFza3NDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhbGxUYXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWxsVGFza3NDb250YWluZXIuaWQgPSBcImFsbFRhc2tzQ29udGFpbmVyXCI7XHJcbiAgICBhbGxUYXNrc0NvbnRhaW5lci5jbGFzc05hbWUgPSBcInRhc2tzQ29udGFpbmVyXCI7XHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBhbGxUYXNrc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhbGxUYXNrc1RpdGxlLmlkID0gJ3RpdGxlQ29udGFpbmVyJztcclxuICAgIGFsbFRhc2tzVGl0bGUuY2xhc3NOYW1lID0gXCJ0YXNrc1RpdGxlXCI7XHJcbiAgICBhbGxUYXNrc1RpdGxlLmlubmVyVGV4dCA9IFwiQWxsIFRhc2tzXCI7XHJcblxyXG4gICAgYWxsVGFza3NDb250YWluZXIuYXBwZW5kKGFsbFRhc2tzVGl0bGUpO1xyXG5cclxuICAgIGFsbFRhc2tzQ29udGFpbmVyLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XHJcblxyXG5cclxuICAgIHZhciBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGkuaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjx0aXRsZT5pb25pY29ucy12NS1xPC90aXRsZT48Y2lyY2xlIGN4PVwiMjU2XCIgY3k9XCIyNTZcIiByPVwiMTkyXCIgc3R5bGU9XCJmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDozMnB4XCIvPjwvc3ZnPidcclxuICAgIGFsbFRhc2tzQ29udGFpbmVyLmFwcGVuZChpKTtcclxuXHJcbiAgICBhbGxUYXNrc0NvbnRhaW5lci5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xyXG5cclxuICAgIGNyZWF0ZVN1Ykdyb3VwcyhcIndlZWtcIiwgYWxsVGFza3NDb250YWluZXIpO1xyXG4gICAgY3JlYXRlU3ViR3JvdXBzKFwidXBjb21pbmdcIiwgYWxsVGFza3NDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudENvbnRhaW5lcicpO1xyXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmQoYWxsVGFza3NDb250YWluZXIpO1xyXG59XHJcblxyXG5jb25zdCBjcmVhdGVTdWJHcm91cHMgPSAoZ3JvdXAsIGFsbFRhc2tzQ29udGFpbmVyKSA9PiB7XHJcblxyXG4gICAgY29uc3QgY2FwaXRhbGl6ZSA9IChzdHIpID0+IHtcclxuICAgICAgICByZXR1cm4gc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdWJHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc3ViR3JvdXAuY2xhc3NOYW1lID0gXCJzdWJHcm91cFwiO1xyXG4gICAgc3ViR3JvdXAuaWQgPSBncm91cDtcclxuXHJcblxyXG4gICAgaWYgKGdyb3VwID09ICd0b2RheScgfHwgZ3JvdXAgPT0gJ3VwY29taW5nJykge1xyXG4gICAgICAgIHN1Ykdyb3VwLmlubmVyVGV4dCA9IGNhcGl0YWxpemUoZ3JvdXApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzdWJHcm91cC5pbm5lclRleHQgPSBcIlRoaXMgXCIgKyBjYXBpdGFsaXplKGdyb3VwKTtcclxuICAgIH0gXHJcblxyXG4gICAgYWxsVGFza3NDb250YWluZXIuYXBwZW5kKHN1Ykdyb3VwKTtcclxuXHJcbn0gICBcclxuXHJcblxyXG5jb25zdCBjcmVhdGVTaG9ydGN1dHNUYXNrc0NvbnRhaW5lciA9ICh0eXBlKSA9PiB7XHJcbiAgICBjb25zdCBzaG9ydGN1dHNUYXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2hvcnRjdXRzVGFza3NDb250YWluZXIuY2xhc3NOYW1lID0gXCJzaG9ydGN1dHNUYXNrc0NvbnRhaW5lclwiO1xyXG5cclxuICAgIGNvbnN0IHNob3J0Y3V0c1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzaG9ydGN1dHNUaXRsZS5pbm5lclRleHQgPSB0eXBlO1xyXG4gICAgc2hvcnRjdXRzVGl0bGUuY2xhc3NOYW1lID0gXCJzaG9ydGN1dHNUYXNrc1RpdGxlXCI7XHJcbiAgICBzaG9ydGN1dHNUYXNrc0NvbnRhaW5lci5hcHBlbmQoc2hvcnRjdXRzVGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudENvbnRhaW5lcicpO1xyXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmQoc2hvcnRjdXRzVGFza3NDb250YWluZXIpO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxQYWdlTG9hZCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGluaXRpYWxQYWdlTG9hZCBmcm9tIFwiLi9tb2R1bGVzL3VpXCI7XHJcbmltcG9ydCBUYXNrIGZyb20gXCIuL21vZHVsZXMvdGFza1wiO1xyXG5pbXBvcnQgY3JlYXRlVGFzayBmcm9tIFwiLi9tb2R1bGVzL2NyZWF0ZS10YXNrXCJcclxuXHJcbmluaXRpYWxQYWdlTG9hZCgpO1xyXG5cclxuXHJcblxyXG5jb25zdCBuZXdUYXNrID0gbmV3IFRhc2soXCJFeGVyY2lzZVwiLCBcIllvdSBnb3R0YSBkbyBpdFwiLCBcIjEvNi8yMlwiKVxyXG5cclxuY3JlYXRlVGFzayhuZXdUYXNrKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=