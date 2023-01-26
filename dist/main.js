/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_taskClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/taskClass.js */ \"./src/modules/taskClass.js\");\n/* harmony import */ var _modules_taskStatus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/taskStatus.js */ \"./src/modules/taskStatus.js\");\n/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/functions.js */ \"./src/modules/functions.js\");\n\n\n\n\nvar form = document.querySelector('.list__add');\nvar clearAllBtn = document.querySelector('.list__clear-btn');\nform.addEventListener('submit', function (e) {\n  e.preventDefault();\n  var description = document.querySelector('.list__add-input');\n  var tasksArr = (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_3__.getTasks)();\n  var newTask = new _modules_taskClass_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](tasksArr, description.value);\n  description.value = '';\n  (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_3__.addTask)(tasksArr, newTask);\n  (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_3__.storeTask)(tasksArr);\n  (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_3__.render)(tasksArr);\n});\n\n// Remove a task\n_modules_functions_js__WEBPACK_IMPORTED_MODULE_3__.taskContainer.addEventListener('click', function (e) {\n  var tasksArr = (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_3__.getTasks)();\n  (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_3__.removeTask)(tasksArr, e.target);\n  (0,_modules_taskStatus_js__WEBPACK_IMPORTED_MODULE_2__.checkOutTask)(e.target, tasksArr);\n  (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_3__.storeTask)(tasksArr);\n  (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_3__.render)(tasksArr);\n});\n\n// Edit a task\n_modules_functions_js__WEBPACK_IMPORTED_MODULE_3__.taskContainer.addEventListener('change', function (e) {\n  var tasksArr = (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_3__.getTasks)();\n  (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_3__.editTask)(tasksArr, e.target, _modules_functions_js__WEBPACK_IMPORTED_MODULE_3__.taskContainer);\n});\n\n// Clear all completed tasks\nclearAllBtn.addEventListener('click', function () {\n  var tasksArr = (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_3__.getTasks)();\n  (0,_modules_taskStatus_js__WEBPACK_IMPORTED_MODULE_2__.clearAllCompleted)(tasksArr, _modules_functions_js__WEBPACK_IMPORTED_MODULE_3__.taskContainer);\n});\n(0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_3__.render)((0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_3__.getTasks)());\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/functions.js":
/*!**********************************!*\
  !*** ./src/modules/functions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"editTask\": () => (/* binding */ editTask),\n/* harmony export */   \"getTasks\": () => (/* binding */ getTasks),\n/* harmony export */   \"removeTask\": () => (/* binding */ removeTask),\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"storeTask\": () => (/* binding */ storeTask),\n/* harmony export */   \"taskContainer\": () => (/* binding */ taskContainer)\n/* harmony export */ });\nvar taskContainer = document.querySelector('.list__tasks');\n\n// Get the tasks from local storage\nvar getTasks = function getTasks() {\n  var tasks;\n  if (localStorage.getItem('tasks')) {\n    tasks = JSON.parse(localStorage.getItem('tasks'));\n  } else {\n    tasks = [];\n  }\n  return tasks;\n};\n\n// Add a task to local storage\nvar storeTask = function storeTask(tasks) {\n  localStorage.setItem('tasks', JSON.stringify(tasks));\n};\nvar render = function render(tasks) {\n  taskContainer.innerHTML = '';\n  tasks.forEach(function (task) {\n    var todoTask = document.createElement('li');\n    todoTask.className = \"list__task padding-x flex  flex-ai-c \".concat(task.checked);\n    todoTask.id = task.index;\n    var checkbox = document.createElement('span');\n    checkbox.className = 'checkbox';\n    var taskEditWrap = document.createElement('div');\n    taskEditWrap.className = 'list__task-edit-wrap';\n    taskEditWrap.style.setProperty('--width', \"\".concat(task.description.length, \"ch\"));\n    var taskEdit = document.createElement('input');\n    taskEdit.className = 'list__task-edit';\n    taskEdit.type = 'text';\n    taskEdit.value = task.description;\n    taskEdit.maxLength = 40;\n    taskEditWrap.appendChild(taskEdit);\n    var deleteBtn = document.createElement('button');\n    deleteBtn.className = 'delete';\n    deleteBtn.innerHTML = '<i class=\"fa-regular fa-trash-can\"></i>';\n    var moveBtn = document.createElement('button');\n    moveBtn.className = 'list__task-move btn';\n    moveBtn.innerHTML = '<i class=\"fa-solid fa-ellipsis-vertical\"></i>';\n    todoTask.appendChild(checkbox);\n    todoTask.appendChild(taskEditWrap);\n    todoTask.appendChild(deleteBtn);\n    todoTask.appendChild(moveBtn);\n    taskContainer.appendChild(todoTask);\n  });\n};\nvar addTask = function addTask(tasks, task) {\n  tasks.push(task);\n  return tasks;\n};\n\n// Remove a task from the user interface list\nvar removeTask = function removeTask(tasks, target) {\n  if (target.parentElement.classList.contains('delete')) {\n    var targetInput = target.parentElement.previousElementSibling.firstChild;\n    var taskIndex = tasks.findIndex(function (task) {\n      return task.description === targetInput.value;\n    });\n    tasks.splice(taskIndex, 1);\n    tasks.forEach(function (task, i) {\n      task.index = i + 1;\n    });\n  }\n};\nvar editTask = function editTask(tasks, target) {\n  if (target.classList.contains('list__task-edit')) {\n    var taskIndex = tasks.findIndex(function (task) {\n      return task.index.toString() === target.closest('.list__task').id;\n    });\n    tasks[taskIndex].description = target.value;\n    storeTask(tasks);\n    render(tasks);\n  }\n};\n\n//# sourceURL=webpack://to-do-list/./src/modules/functions.js?");

/***/ }),

/***/ "./src/modules/taskClass.js":
/*!**********************************!*\
  !*** ./src/modules/taskClass.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nvar Task = /*#__PURE__*/_createClass(function Task(arr, description) {\n  _classCallCheck(this, Task);\n  this.description = description;\n  this.complete = false;\n  this.index = arr.length + 1;\n  this.checked = '';\n});\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/taskClass.js?");

/***/ }),

/***/ "./src/modules/taskStatus.js":
/*!***********************************!*\
  !*** ./src/modules/taskStatus.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkOutTask\": () => (/* binding */ checkOutTask),\n/* harmony export */   \"clearAllCompleted\": () => (/* binding */ clearAllCompleted)\n/* harmony export */ });\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.js */ \"./src/modules/functions.js\");\n\nvar checkOutTask = function checkOutTask(target, tasks) {\n  if (target.classList.contains('list__task') || target.classList.contains('checkbox')) {\n    var targetInput;\n    if (target.classList.contains('list__task')) {\n      targetInput = target.firstChild.nextElementSibling.firstChild;\n    } else {\n      targetInput = target.nextElementSibling.firstChild;\n    }\n    var taskIndex = tasks.findIndex(function (task) {\n      return task.description === targetInput.value;\n    });\n    tasks[taskIndex].complete = !tasks[taskIndex].complete;\n    if (tasks[taskIndex].complete) {\n      tasks[taskIndex].checked = 'checked';\n    } else {\n      tasks[taskIndex].checked = '';\n    }\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.storeTask)(tasks);\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.render)(tasks);\n  }\n};\nvar clearAllCompleted = function clearAllCompleted(tasks, container) {\n  tasks = tasks.filter(function (task) {\n    return !task.complete;\n  });\n  tasks.forEach(function (task, i) {\n    task.index = i + 1;\n  });\n  (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.storeTask)(tasks);\n  (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.render)(tasks);\n};\n\n//# sourceURL=webpack://to-do-list/./src/modules/taskStatus.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\n  box-sizing: border-box;\\n  font-size: 100%;\\n}\\n\\n*,\\n*::before,\\n*::after {\\n  box-sizing: inherit;\\n}\\n\\nbody {\\n  --color-primary: rgb(255, 99, 71);\\n  --color-primary-light: rgb(255, 226, 221);\\n  --color-highlight: rgb(49, 45, 44);\\n  --color-text: rgb(70, 66, 65);\\n  --color-grey: rgba(0, 0, 0, 0.438);\\n  --color-light-grey: rgb(231, 228, 227);\\n  --color-light: rgb(251, 248, 247);\\n  --color-white: rgb(255, 255, 255);\\n\\n  margin: 0;\\n  padding: 0;\\n  font-family: 'Ubuntu', sans-serif;\\n  font-weight: 300;\\n  color: var(--color-text);\\n  background-color: var(--color-light);\\n}\\n\\nbutton {\\n  border: 0;\\n  color: var(--color-grey);\\n  background-color: transparent;\\n  cursor: pointer;\\n}\\n\\n.btn {\\n  transition: color 150ms ease-in-out;\\n}\\n\\n.btn:hover {\\n  color: var(--color-highlight);\\n}\\n\\nul {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n}\\n\\n.padding {\\n  padding: 1rem;\\n}\\n\\n.padding-x {\\n  padding-left: 1rem;\\n  padding-right: 1rem;\\n}\\n\\n.padding-y {\\n  padding-top: 1rem;\\n  padding-bottom: 1rem;\\n}\\n\\n.flex {\\n  display: flex;\\n}\\n\\n.flex-jc-sb {\\n  justify-content: space-between;\\n}\\n\\n.flex-ai-c {\\n  align-items: center;\\n}\\n\\n.title {\\n  grid-area: title;\\n  margin: 4rem 0;\\n  font-size: 4rem;\\n  font-weight: 700;\\n  text-align: center;\\n  opacity: 0.05;\\n}\\n\\n.list {\\n  grid-area: list;\\n  margin: 0 auto;\\n  min-width: 300px;\\n  max-width: 550px;\\n}\\n\\n.list__header {\\n  gap: 0.5rem;\\n  flex-wrap: wrap;\\n  margin-bottom: 0.75rem;\\n  border-radius: 0.5rem 0.5rem 0 0;\\n  background-color: var(--color-primary);\\n  box-shadow: 0.25rem 0.25rem 1rem rgba(0, 0, 0, 0.15);\\n}\\n\\n.list__title {\\n  margin: 0;\\n  font-weight: 300;\\n  color: var(--color-highlight);\\n}\\n\\n.list__body {\\n  margin-bottom: 2rem;\\n  background-color: var(--color-white);\\n  border-radius: 0 0 0.5rem 0.5rem;\\n  overflow: hidden;\\n  box-shadow: 0.25rem 0.25rem 1rem rgba(0, 0, 0, 0.15);\\n}\\n\\n.list__add {\\n  border-bottom: solid 2px var(--color-light-grey);\\n}\\n\\n.list__add-input {\\n  display: block;\\n  font-family: inherit;\\n  font-size: inherit;\\n  font-style: italic;\\n  width: 100%;\\n  border: 0;\\n  outline: 0;\\n}\\n\\n.list__add-input:focus::placeholder {\\n  opacity: 0.35;\\n}\\n\\n.list__add-btn .fa-solid {\\n  font-size: 0.65rem;\\n  rotate: 90deg;\\n}\\n\\n.list__task {\\n  gap: 0.5rem;\\n  line-height: 3.25;\\n  border-bottom: solid 2px var(--color-light-grey);\\n  cursor: pointer;\\n  transition: background-color 100ms ease-in-out;\\n}\\n\\n.checkbox {\\n  position: relative;\\n  display: inline-block;\\n  width: 1rem;\\n  height: 1rem;\\n  border: solid 0.1rem currentColor;\\n  transition: border 150ms ease-in-out;\\n}\\n\\n.checkbox::before,\\n.checkbox::after {\\n  content: '';\\n  position: absolute;\\n  top: 50%;\\n  left: 0;\\n  display: none;\\n  height: 3px;\\n  background-color: grey;\\n  transition: width 200ms ease-in-out;\\n}\\n\\n.checkbox::before {\\n  rotate: 45deg;\\n  width: 50%;\\n  border-radius: 2rem 0 0 2rem;\\n}\\n\\n.checkbox::after {\\n  rotate: -45deg;\\n  translate: 3px -1px;\\n  border-radius: 0 2rem 2rem 0;\\n  width: 80%;\\n}\\n\\n.checked .checkbox {\\n  border: solid 0.1rem transparent;\\n}\\n\\n.checked .checkbox::before,\\n.checked .checkbox::after {\\n  display: block;\\n}\\n\\n.list__task:hover .checkbox {\\n  border: solid 0.1rem var(--color-primary);\\n}\\n\\n.checked:hover .checkbox {\\n  border: solid 0.1rem transparent;\\n}\\n\\n.list__task-edit-wrap {\\n  --width: auto;\\n\\n  position: relative;\\n  width: var(--width);\\n}\\n\\n.checked .list__task-edit-wrap {\\n  opacity: 0.4;\\n}\\n\\n.list__task-edit-wrap::before {\\n  content: '';\\n  position: absolute;\\n  top: 50%;\\n  left: 0;\\n  width: 0;\\n  max-width: 19rem;\\n  height: 1px;\\n  background-color: var(--color-text);\\n  transition: width 300ms ease-in-out;\\n}\\n\\n.checked .list__task-edit-wrap::before {\\n  width: 100%;\\n}\\n\\n.list__task:has(.list__task-edit:focus) .list__task-edit-wrap::before {\\n  width: 0;\\n}\\n\\n.list__task-edit {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  outline: 0;\\n  width: 100%;\\n  font-size: inherit;\\n  line-height: inherit;\\n  background-color: transparent;\\n}\\n\\n.list__task-edit:disabled {\\n  color: var(--color-text);\\n}\\n\\n.list__task:has(.list__task-edit:focus) {\\n  background-color: var(--color-primary-light);\\n}\\n\\n.delete {\\n  padding: 0;\\n  margin-left: auto;\\n}\\n\\n.list__task:focus-within .delete {\\n  display: inline-block;\\n}\\n\\n.list__task-move {\\n  margin-left: auto;\\n  font-size: 1.25rem;\\n  cursor: move;\\n  display: none;\\n}\\n\\n.list__task:focus-within .list__task-move {\\n  display: none;\\n}\\n\\n.list__clear {\\n  text-align: center;\\n  background-color: var(--color-light-grey);\\n}\\n\\n.list__clear-btn {\\n  transition: color 150ms ease-in-out;\\n}\\n\\n.list__clear-btn:hover {\\n  color: var(--color-highlight);\\n  text-decoration: underline;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;