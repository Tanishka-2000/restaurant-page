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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createContactPage)\n/* harmony export */ });\nfunction createContactPage(content){\r\n    let contact = document.createElement('div');\r\n    contact.classList.add('contact');\r\n\r\n    let details = document.createElement('div');\r\n    details.classList.add('details');\r\n\r\n    let heading = document.createElement('h1');\r\n    heading.appendChild(document.createTextNode('Wanna book us for reception...'));\r\n    details.appendChild(heading);\r\n\r\n    let form = document.createElement('form');\r\n    let type = ['text', 'tel', 'text'];\r\n    let ids = ['name', 'contact', 'occassion']\r\n    let labelContent = ['Name','Contact no.','Occassion'];\r\n\r\n    for (let i = 0; i < 3; i++) {\r\n\r\n        let div = document.createElement('div');\r\n\r\n        let input = document.createElement('input');\r\n        input.setAttribute('type', type[i]);\r\n        input.setAttribute('placeholder', ' ');\r\n        input.setAttribute('id', ids[i]);\r\n        div.appendChild(input);\r\n\r\n        let label = document.createElement('label');\r\n        label.setAttribute('for', ids[i]);\r\n        label.appendChild(document.createTextNode(labelContent[i]));\r\n        div.appendChild(label);\r\n\r\n        form.appendChild(div);\r\n    }\r\n    let sendBtn = document.createElement('button');\r\n    sendBtn.textContent = 'Send';\r\n    form.appendChild(sendBtn);\r\n\r\n    details.appendChild(form);\r\n\r\n    let para = document.createElement('p');\r\n    para.appendChild(document.createTextNode('Or contact us at '));\r\n\r\n    const iconArray = ['ri-facebook-fill','ri-instagram-fill','ri-twitter-fill'];\r\n    for (let i = 0; i < 3; i++) {\r\n        let icon = document.createElement('i');\r\n        icon.classList.add(iconArray[i]);\r\n        para.appendChild(icon);\r\n    }\r\n    details.appendChild(para);\r\n\r\n    contact.appendChild(details);\r\n    content.appendChild(contact);\r\n\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createHomePage)\n/* harmony export */ });\nfunction createHomePage(content){\r\n\r\nlet container = document.createElement('div');\r\ncontainer.classList.add('home-container');\r\n\r\nlet details = document.createElement('div');\r\ndetails.classList.add('home-details');\r\n\r\nlet heading = document.createElement('h1');\r\nheading.appendChild(document.createTextNode('\"Glorious Food\"'));\r\ndetails.appendChild(heading);\r\n\r\nlet description = document.createElement('p');\r\ndescription.appendChild(document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti omnis, recusandae voluptatem in repudiandae. Mollitia deserunt nemo pariatur nisi quos ducimus repudiandae repellat, provident at est eveniet eligendi'));\r\ndetails.appendChild(description);\r\n\r\ncontainer.appendChild(details);\r\ncontent.appendChild(container);\r\n\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\nconst content = document.querySelector('.content');\r\n// createHomePage(content);\r\n//createMenuPage(content);\r\n//\r\n\r\n// functon to render Page\r\nfunction respondToClick(e){\r\n    if(e.target.textContent === 'home'){\r\n        content.innerHTML = '';\r\n        (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(content);\r\n    }else if(e.target.textContent === 'menu'){\r\n        content.innerHTML = '';\r\n        (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(content);\r\n    }else if(e.target.textContent === 'contact'){\r\n        content.innerHTML = '';\r\n        (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(content);\r\n    }\r\n}\r\n\r\n// adding event listeners to links\r\nconst nav = document.querySelector('nav');\r\nnav.addEventListener('click', respondToClick);\r\n\r\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(content);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createMenuPage)\n/* harmony export */ });\nfunction createMenuPage(content){\r\n    const menuArray = ['Drinks','Breakfast','Lunch','Dinner','Dessert'];\r\n\r\n    let menuTab = document.createElement('div');\r\n    menuTab.classList.add('menu-tab');\r\n\r\n    for (let i = 0; i < 5; i++) {\r\n        let heading = document.createElement('h1');\r\n        heading.appendChild(document.createTextNode(menuArray[i]));\r\n        menuTab.appendChild(heading);\r\n\r\n        let temp = document.createElement('div');\r\n        temp.classList.add(menuArray[i].toLowerCase());\r\n\r\n        for (let j = 0; j < 6; j++) {\r\n            let div = document.createElement('div');\r\n\r\n            let image = document.createElement('img');\r\n            image.setAttribute('src', `./images/${menuArray[i].toLowerCase()}/image${j+1}.jpg`);\r\n            div.appendChild(image);\r\n\r\n            let btnGroup = document.createElement('div');\r\n            btnGroup.classList.add('btn-group');\r\n\r\n            let price = document.createElement('p');\r\n            price.appendChild(document.createTextNode('Price: 5$'));\r\n            btnGroup.appendChild(price);\r\n\r\n            let button = document.createElement('button');\r\n            button.textContent = 'Order 5$';\r\n            btnGroup.appendChild(button);\r\n\r\n            div.appendChild(btnGroup);\r\n            temp.appendChild(div);\r\n        }\r\n        menuTab.appendChild(temp);\r\n    }\r\n     content.appendChild(menuTab);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;