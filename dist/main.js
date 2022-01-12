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



const createTask = (task) => {
    
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
    //let today = "melon";
    //createShortcutsTasksContainer(today);
    createAllTasksContainer();
}

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

    const contentContainer = document.querySelector('#contentContainer');
    contentContainer.append(allTasksContainer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1IxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7OztBQzlCbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1TEFBdUwsWUFBWSxxQkFBcUIsc0JBQXNCO0FBQzlPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZTs7Ozs7O1VDakRmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ04yQztBQUNUO0FBQ1k7QUFDOUM7QUFDQSx1REFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxREFBSTtBQUN4QjtBQUNBLGlFQUFVLFUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jcmVhdGUtdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3VpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XHJcblxyXG5cclxuY29uc3QgY3JlYXRlVGFzayA9ICh0YXNrKSA9PiB7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhc2s7XHJcbiIsImNsYXNzIFRhc2sge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgbm90ZXMsIGR1ZURhdGUsIGxpc3QpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMubm90ZXMgPSBub3RlcztcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMubGlzdCA9IGxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TmFtZShuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZVxyXG4gICAgfVxyXG5cclxuICAgIHNldE5hbWUobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Tm90ZXMobm90ZXMpIHtcclxuICAgICAgICB0aGlzLm5vdGVzID0gbm90ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RHVlRGF0ZShkdWVEYXRlKSB7XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRMaXN0KGxpc3QpIHtcclxuICAgICAgICB0aGlzLmxpc3QgPSBsaXN0O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFzazsiLCJjb25zdCBpbml0aWFsUGFnZUxvYWQgPSAoKSA9PiB7XHJcbiAgICAvL2xldCB0b2RheSA9IFwibWVsb25cIjtcclxuICAgIC8vY3JlYXRlU2hvcnRjdXRzVGFza3NDb250YWluZXIodG9kYXkpO1xyXG4gICAgY3JlYXRlQWxsVGFza3NDb250YWluZXIoKTtcclxufVxyXG5cclxuY29uc3QgY3JlYXRlQWxsVGFza3NDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhbGxUYXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWxsVGFza3NDb250YWluZXIuaWQgPSBcImFsbFRhc2tzQ29udGFpbmVyXCI7XHJcbiAgICBhbGxUYXNrc0NvbnRhaW5lci5jbGFzc05hbWUgPSBcInRhc2tzQ29udGFpbmVyXCI7XHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBhbGxUYXNrc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhbGxUYXNrc1RpdGxlLmlkID0gJ3RpdGxlQ29udGFpbmVyJztcclxuICAgIGFsbFRhc2tzVGl0bGUuY2xhc3NOYW1lID0gXCJ0YXNrc1RpdGxlXCI7XHJcbiAgICBhbGxUYXNrc1RpdGxlLmlubmVyVGV4dCA9IFwiQWxsIFRhc2tzXCI7XHJcblxyXG4gICAgYWxsVGFza3NDb250YWluZXIuYXBwZW5kKGFsbFRhc2tzVGl0bGUpO1xyXG5cclxuICAgIFxyXG4gICAgICAgIFxyXG4gICAgYWxsVGFza3NDb250YWluZXIuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcclxuICAgIFxyXG5cclxuICAgIHZhciBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGkuaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjx0aXRsZT5pb25pY29ucy12NS1xPC90aXRsZT48Y2lyY2xlIGN4PVwiMjU2XCIgY3k9XCIyNTZcIiByPVwiMTkyXCIgc3R5bGU9XCJmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDozMnB4XCIvPjwvc3ZnPidcclxuICAgIGFsbFRhc2tzQ29udGFpbmVyLmFwcGVuZChpKTtcclxuXHJcbiAgICBhbGxUYXNrc0NvbnRhaW5lci5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudENvbnRhaW5lcicpO1xyXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmQoYWxsVGFza3NDb250YWluZXIpO1xyXG59XHJcblxyXG5jb25zdCBjcmVhdGVTaG9ydGN1dHNUYXNrc0NvbnRhaW5lciA9ICh0eXBlKSA9PiB7XHJcbiAgICBjb25zdCBzaG9ydGN1dHNUYXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2hvcnRjdXRzVGFza3NDb250YWluZXIuY2xhc3NOYW1lID0gXCJzaG9ydGN1dHNUYXNrc0NvbnRhaW5lclwiO1xyXG5cclxuICAgIGNvbnN0IHNob3J0Y3V0c1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzaG9ydGN1dHNUaXRsZS5pbm5lclRleHQgPSB0eXBlO1xyXG4gICAgc2hvcnRjdXRzVGl0bGUuY2xhc3NOYW1lID0gXCJzaG9ydGN1dHNUYXNrc1RpdGxlXCI7XHJcbiAgICBzaG9ydGN1dHNUYXNrc0NvbnRhaW5lci5hcHBlbmQoc2hvcnRjdXRzVGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudENvbnRhaW5lcicpO1xyXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmQoc2hvcnRjdXRzVGFza3NDb250YWluZXIpO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxQYWdlTG9hZCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGluaXRpYWxQYWdlTG9hZCBmcm9tIFwiLi9tb2R1bGVzL3VpXCI7XHJcbmltcG9ydCBUYXNrIGZyb20gXCIuL21vZHVsZXMvdGFza1wiO1xyXG5pbXBvcnQgY3JlYXRlVGFzayBmcm9tIFwiLi9tb2R1bGVzL2NyZWF0ZS10YXNrXCJcclxuXHJcbmluaXRpYWxQYWdlTG9hZCgpO1xyXG5cclxuXHJcblxyXG5jb25zdCBuZXdUYXNrID0gbmV3IFRhc2soXCJFeGVyY2lzZVwiLCBcIllvdSBnb3R0YSBkbyBpdFwiLCBcIjEvNi8yMlwiKVxyXG5cclxuY3JlYXRlVGFzayhuZXdUYXNrKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=