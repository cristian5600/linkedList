/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/linkedList.js":
/*!***********************************!*\
  !*** ./src/scripts/linkedList.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "linkedList": () => (/* binding */ linkedList)
/* harmony export */ });
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node.js */ "./src/scripts/node.js");

class linkedList {
  #head;
  #size = 0;
  constructor(array) {
    if (!Array.isArray(array)) {
      this.#head = null;
      this.#size = 0;
    }
  }
  length() {
    return this.#size;
  }
  append(value) {
    let aux = this.#head;
    if (this.#head === null) {
      this.#head = new _node_js__WEBPACK_IMPORTED_MODULE_0__.node(value);
      this.#size++;
    } else {
      while (aux.next != null) {
        aux = aux.next;
      }
      aux.next = new _node_js__WEBPACK_IMPORTED_MODULE_0__.node(value);
      this.#size++;
    }
  }
  prepend(value) {
    let aux = this.#head;
    this.#head = new _node_js__WEBPACK_IMPORTED_MODULE_0__.node(value);
    this.#head.next = aux;
    this.#size++;
  }
  show() {
    let aux = this.#head;
    let string = "";
    while (aux != null) {
      string = string + `( ${aux.value()} )-->`;
      aux = aux.next;
    }
    string = string + `(null)`;
    console.log(string);
  }
  head() {
    return this.#head;
  }
  tail() {
    if (this.#head === null) return null;

    let aux = this.#head;
    while (aux.next != null) {
      aux = aux.next;
    }
    return aux;
  }
  at(index) {
    try {
      if (index < 0 || index > this.#size) throw new RangeError(`OUT OF SCOPE`);
    } catch (err) {
      return err;
    }
    let aux = this.#head;
    if (index === 0) return aux;
    for (let i = 0; i <= index - 1; i++) {
      aux = aux.next;
    }
    return aux;
  }
}


/***/ }),

/***/ "./src/scripts/node.js":
/*!*****************************!*\
  !*** ./src/scripts/node.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "node": () => (/* binding */ node)
/* harmony export */ });
class node {
  // dataPrivate = 0;
  #data;
  next;
  constructor(data = null) {
    this.#data = data;
    this.next = null;
  }
  value() {
    return this.#data;
  }
}


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
/* harmony import */ var _scripts_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/node.js */ "./src/scripts/node.js");
/* harmony import */ var _scripts_linkedList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/linkedList.js */ "./src/scripts/linkedList.js");


window.linkedList = _scripts_linkedList_js__WEBPACK_IMPORTED_MODULE_1__.linkedList;
window.node = _scripts_node_js__WEBPACK_IMPORTED_MODULE_0__.node;

const list = new _scripts_linkedList_js__WEBPACK_IMPORTED_MODULE_1__.linkedList();
list.append(2);
list.append(43);
list.append(54);
list.append(`string`);
list.append(43);
list.prepend([123, 12, 33]);
list.prepend(111);
list.show();
console.log(list.length());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFpQztBQUMxQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMENBQUk7QUFDM0I7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQUk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsYUFBYTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ25FTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNYQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ055QztBQUNZO0FBQ3JELG9CQUFvQiw4REFBVTtBQUM5QixjQUFjLGtEQUFJOztBQUVsQixpQkFBaUIsOERBQVU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlua2VkbGlzdC8uL3NyYy9zY3JpcHRzL2xpbmtlZExpc3QuanMiLCJ3ZWJwYWNrOi8vbGlua2VkbGlzdC8uL3NyYy9zY3JpcHRzL25vZGUuanMiLCJ3ZWJwYWNrOi8vbGlua2VkbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9saW5rZWRsaXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9saW5rZWRsaXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGlua2VkbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xpbmtlZGxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbm9kZSB9IGZyb20gXCIuL25vZGUuanNcIjtcbmV4cG9ydCBjbGFzcyBsaW5rZWRMaXN0IHtcbiAgI2hlYWQ7XG4gICNzaXplID0gMDtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XG4gICAgICB0aGlzLiNoZWFkID0gbnVsbDtcbiAgICAgIHRoaXMuI3NpemUgPSAwO1xuICAgIH1cbiAgfVxuICBsZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3NpemU7XG4gIH1cbiAgYXBwZW5kKHZhbHVlKSB7XG4gICAgbGV0IGF1eCA9IHRoaXMuI2hlYWQ7XG4gICAgaWYgKHRoaXMuI2hlYWQgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuI2hlYWQgPSBuZXcgbm9kZSh2YWx1ZSk7XG4gICAgICB0aGlzLiNzaXplKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlIChhdXgubmV4dCAhPSBudWxsKSB7XG4gICAgICAgIGF1eCA9IGF1eC5uZXh0O1xuICAgICAgfVxuICAgICAgYXV4Lm5leHQgPSBuZXcgbm9kZSh2YWx1ZSk7XG4gICAgICB0aGlzLiNzaXplKys7XG4gICAgfVxuICB9XG4gIHByZXBlbmQodmFsdWUpIHtcbiAgICBsZXQgYXV4ID0gdGhpcy4jaGVhZDtcbiAgICB0aGlzLiNoZWFkID0gbmV3IG5vZGUodmFsdWUpO1xuICAgIHRoaXMuI2hlYWQubmV4dCA9IGF1eDtcbiAgICB0aGlzLiNzaXplKys7XG4gIH1cbiAgc2hvdygpIHtcbiAgICBsZXQgYXV4ID0gdGhpcy4jaGVhZDtcbiAgICBsZXQgc3RyaW5nID0gXCJcIjtcbiAgICB3aGlsZSAoYXV4ICE9IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHN0cmluZyArIGAoICR7YXV4LnZhbHVlKCl9ICktLT5gO1xuICAgICAgYXV4ID0gYXV4Lm5leHQ7XG4gICAgfVxuICAgIHN0cmluZyA9IHN0cmluZyArIGAobnVsbClgO1xuICAgIGNvbnNvbGUubG9nKHN0cmluZyk7XG4gIH1cbiAgaGVhZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jaGVhZDtcbiAgfVxuICB0YWlsKCkge1xuICAgIGlmICh0aGlzLiNoZWFkID09PSBudWxsKSByZXR1cm4gbnVsbDtcblxuICAgIGxldCBhdXggPSB0aGlzLiNoZWFkO1xuICAgIHdoaWxlIChhdXgubmV4dCAhPSBudWxsKSB7XG4gICAgICBhdXggPSBhdXgubmV4dDtcbiAgICB9XG4gICAgcmV0dXJuIGF1eDtcbiAgfVxuICBhdChpbmRleCkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID4gdGhpcy4jc2l6ZSkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoYE9VVCBPRiBTQ09QRWApO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIGVycjtcbiAgICB9XG4gICAgbGV0IGF1eCA9IHRoaXMuI2hlYWQ7XG4gICAgaWYgKGluZGV4ID09PSAwKSByZXR1cm4gYXV4O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGluZGV4IC0gMTsgaSsrKSB7XG4gICAgICBhdXggPSBhdXgubmV4dDtcbiAgICB9XG4gICAgcmV0dXJuIGF1eDtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIG5vZGUge1xuICAvLyBkYXRhUHJpdmF0ZSA9IDA7XG4gICNkYXRhO1xuICBuZXh0O1xuICBjb25zdHJ1Y3RvcihkYXRhID0gbnVsbCkge1xuICAgIHRoaXMuI2RhdGEgPSBkYXRhO1xuICAgIHRoaXMubmV4dCA9IG51bGw7XG4gIH1cbiAgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2RhdGE7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbm9kZSB9IGZyb20gXCIuL3NjcmlwdHMvbm9kZS5qc1wiO1xuaW1wb3J0IHsgbGlua2VkTGlzdCB9IGZyb20gXCIuL3NjcmlwdHMvbGlua2VkTGlzdC5qc1wiO1xud2luZG93LmxpbmtlZExpc3QgPSBsaW5rZWRMaXN0O1xud2luZG93Lm5vZGUgPSBub2RlO1xuXG5jb25zdCBsaXN0ID0gbmV3IGxpbmtlZExpc3QoKTtcbmxpc3QuYXBwZW5kKDIpO1xubGlzdC5hcHBlbmQoNDMpO1xubGlzdC5hcHBlbmQoNTQpO1xubGlzdC5hcHBlbmQoYHN0cmluZ2ApO1xubGlzdC5hcHBlbmQoNDMpO1xubGlzdC5wcmVwZW5kKFsxMjMsIDEyLCAzM10pO1xubGlzdC5wcmVwZW5kKDExMSk7XG5saXN0LnNob3coKTtcbmNvbnNvbGUubG9nKGxpc3QubGVuZ3RoKCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9