/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderContactPage\": () => (/* binding */ renderContactPage)\n/* harmony export */ });\nconst renderContactPage = (() => {\r\n  //container\r\n  const contentContainer = document.querySelector(\"#content\");\r\n  const contact = document.createElement(\"div\");\r\n  contact.setAttribute(\"id\", \"contact\");\r\n  contact.setAttribute(\"data-tab-content\", \"\");\r\n  contact.innerHTML = `\r\n    <div class=\"hero\">\r\n    <h1>Contact us</h1>\r\n  </div>\r\n  <div class=\"contact-container\">\r\n    <div class=\"info\">\r\n      <div class=\"address\">\r\n        <p>\r\n          <i class=\"fi-xnsuxl-map-marker-solid\"></i>1783 Meriden-WatTup<br/>\r\n          Southington, CT 06489\r\n        </p>\r\n      </div>\r\n      <div class=\"hours\">\r\n        <p>\r\n          <i class=\"fi-cnsuhl-clock-solid\"></i>\r\n          <span>Monday: closed! <br />\r\n          <span>Tue-Thurs: </span> 11am-9pm<br /><span>Fri-Sun: </span> 11am-10pm\r\n        </p>\r\n      </div>\r\n      <div class=\"phone\">\r\n        <p><i class=\"fi-xnsrxl-phone-solid\"></i>(860) 426-9925</p>\r\n      </div>\r\n      <div class=\"contact-form\">\r\n        <form onsubmit=\"return false\">\r\n          <h3><i class=\"fi-xwsuxl-envelope-solid\"></i>Message us</h3>\r\n          <div class=\"input-box\">\r\n            <input type=\"text\" required />\r\n            <span>Full Name</span>\r\n          </div>\r\n          <div class=\"input-box\">\r\n            <input type=\"text\" required />\r\n            <span>Email</span>\r\n          </div>\r\n          <div class=\"input-box\">\r\n            <textarea required></textarea>\r\n            <span>Type your message...</span>\r\n          </div>\r\n          <input type=\"submit\" value=\"Send\" />\r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n    <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2985.229313772934!2d-72.90865988470445!3d41.56428137924837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7b7fcfe6b4637%3A0x517f2818fd9933d1!2sAngela&#39;s%20Pizza%20%26%20Deli!5e0!3m2!1sen!2sus!4v1652292791214!5m2!1sen!2sus\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"\r\n\r\n  </div>`;\r\n\r\n  contentContainer.appendChild(contact);\r\n})();\r\n\r\n\r\n\n\n//# sourceURL=webpack://resturant/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderHomePage\": () => (/* binding */ renderHomePage)\n/* harmony export */ });\nconst renderHomePage = (() =>{\r\n\r\n  const contentContainer = document.querySelector('#content');\r\n\r\n  const home = document.createElement(\"div\");\r\n  home.classList.add(\"tab-content\")\r\n  home.innerHTML =  `<div id=\"home\" class=\"active\" data-tab-content>\r\n  <div class=\"hero\">\r\n    <h1>The Best Pizza in Town</h1>\r\n    <p>Tasty and Delicious!</p>\r\n    <div class=\"btn-container\">\r\n      <a data-tab-target=\"#menu\" class=\"order-now\">Order Now</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"info\">\r\n    <div class=\"address\">\r\n      <span><i class=\"fi-xnsuxl-map-marker-solid\"></i></span>\r\n      <p>1783 Meriden-Waterbury Turnpike<br />Southington, CT 06489</p>\r\n    </div>\r\n    <div class=\"hours\">\r\n      <span><i class=\"fi-cnsuhl-clock-solid\"></i></span>\r\n      <p>\r\n        <span>Monday: closed!</span><br>\r\n        <span>Tue-Thurs:</span>11am-9pm<br /><span>Fri-Sun:</span\r\n        >11am-10pm\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>`;\r\n\r\n  contentContainer.appendChild(home);\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://resturant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ \"./src/pageload.js\");\n/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pageload__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\nconst tabs = document.querySelectorAll(\"[data-tab-target]\");\r\nconst tabContents = document.querySelectorAll(\"[data-tab-content]\");\r\nconst burger = document.querySelector(\".hamburger\");\r\n\r\n//Hamburger menu\r\nburger.addEventListener(\"click\", () => {\r\n  document.querySelector(\"ul\").classList.toggle(\"active\");\r\n  burger.classList.toggle(\"toggle\");\r\n});\r\n\r\n// Navigation tabs\r\ntabs.forEach((tab) =>\r\n  tab.addEventListener(\"click\", () => {\r\n    const target = document.querySelector(tab.dataset.tabTarget);\r\n    tabContents.forEach((tabContent) => {\r\n      tabContent.classList.remove(\"active\");\r\n    });\r\n    tabs.forEach((tab) => {\r\n      tab.classList.remove(\"red\");\r\n    });\r\n    tab.classList.add(\"red\");\r\n    target.classList.add(\"active\");\r\n  })\r\n);\r\n\r\n//Makes sure that menu navigation tab is colored after clicking button\r\ndocument.querySelector(\".order-now\").addEventListener(\"click\", () => {\r\n  document.querySelector(`[data-tab-target=\"#menu\"]`).classList.add(\"red\");\r\n});\r\n\r\n//Make sure page doesn't refresh on form submit\r\ndocument.querySelector(`[type=\"submit\"]`).addEventListener(\"click\", () => {\r\n  document.querySelector(\"form\").reset();\r\n});\r\n\r\nconsole.log(`Today is ${new Date().toUTCString()}. Awesome.`);\r\n\r\nfunction loader(){\r\n  document.querySelector('.loader-container').classList.add('fade-out');\r\n}\r\n\r\nfunction fadeOut(){\r\n  setInterval(loader, 3000);\r\n}\r\n\r\nwindow.onload = fadeOut;\n\n//# sourceURL=webpack://resturant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderMenuPage\": () => (/* binding */ renderMenuPage)\n/* harmony export */ });\nconst renderMenuPage = (() => {\r\n  //container\r\n  const contentContainer = document.querySelector(\"#content\");\r\n  const menu = document.createElement(\"div\");\r\n  menu.setAttribute(\"id\", \"menu\");\r\n  menu.setAttribute(\"data-tab-content\", \"\");\r\n  menu.innerHTML = `\r\n  <div class=\"hero\">\r\n  <h1>Menu</h1>\r\n  <img src=\"./images/chef.png\" alt=\"\" width=\"50\" height=\"50\" />\r\n</div>\r\n<div class=\"menu-container\">\r\n  <div class=\"menu-item\">\r\n    <img src=\"./images/cheese-burger.png\" alt=\"\" />\r\n    <div class=\"item-content\">\r\n      <h4>Cheeseburger: <span>$12.49</span></h4>\r\n      <p>\r\n        Our traditional hamburger with onions, lettuce, tomatoes and cheese on top.\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"menu-item\">\r\n    <img src=\"./images/jalapeno.png\" alt=\"\" />\r\n    <div class=\"item-content\">\r\n      <h4>Jalapeno Poppers: <span>$6.99</span></h4>\r\n      <p>Stuffed with a mixture of cheese, spices and breadcrumbs.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"menu-item\">\r\n    <img src=\"./images/pizza.png\" alt=\"\" />\r\n    <div class=\"item-content\">\r\n      <h4>The Works Pizza: <span>$20.95</span></h4>\r\n      <p>Homemade Napolitan pizza dough with onions, peppers, mushrooms, meatballs, sausage, bacon, pepperoni, & olives.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"menu-item\">\r\n    <img src=\"./images/pasta.png\" alt=\"\" />\r\n    <div class=\"item-content\">\r\n      <h4>Spaghetti di Fierentina: <span>$15.95</span></h4>\r\n      <p>Spaghetti pasta over homemade marinara sauce with fresh basel and fetta cheese on top. </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"menu-item\">\r\n    <img src=\"./images/ravioli.png\" alt=\"\" />\r\n    <div class=\"item-content\">\r\n      <h4>Cheese Ravioli: <span>$12.99</span></h4>\r\n      <p>Combination of ricotta, mozzarella and parmesan cheese for the filling, and a combination of all purpose and semolina flour for the pasta dough.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"menu-item\">\r\n    <img src=\"./images/caesar-salad.png\" alt=\"\" />\r\n    <div class=\"item-content\">\r\n      <h4>Caesar salad: <span>$8.99</span></h4>\r\n      <p>\r\n      Green salad of romaine lettuce and croutons dressed with lemon juice, olive oil and caesar dressing.\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"menu-item\">\r\n    <img src=\"./images/grilled-cheese.png\" alt=\"\" />\r\n    <div class=\"item-content\">\r\n      <h4>Grilled cheese: <span>$7.99</span></h4>\r\n      <p>\r\n      Toasted slices of cheese between slices of white bread .\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"menu-item\">\r\n    <img src=\"./images/french-fries.png\" alt=\"\" />\r\n    <div class=\"item-content\">\r\n      <h4>French Fries: <span>$6.95</span></h4>\r\n      <p>\r\n      Long, thin pieces of potato fried in oil.\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>`;\r\n\r\n  contentContainer.appendChild(menu);\r\n})();\r\n\r\n\r\n\n\n//# sourceURL=webpack://resturant/./src/menu.js?");

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ (() => {

eval("const pageLoad = (() => {\r\n  //container\r\n  const contentContainer = document.querySelector(\"#content\");\r\n\r\n  const header = document.createElement(\"header\");\r\n  header.innerHTML = `\r\n  <nav>\r\n  <h2>Angela's Pizza</h2>\r\n  <a href=\"#\" class=\"hamburger\">\r\n    <span class=\"line line1\"></span>\r\n    <span class=\"line line2\"></span>\r\n    <span class=\"line line3\"></span>\r\n  </a>\r\n  <ul class=\"links\">\r\n    <li data-tab-target=\"#home\" class=\"tab red\">Home</li>\r\n    <li data-tab-target=\"#menu\" class=\"tab\">Menu</li>\r\n    <li data-tab-target=\"#contact\" class=\"tab\">Contact us</li>\r\n  </ul>\r\n</nav>`;\r\n\r\n    contentContainer.appendChild(header)\r\n})();\n\n//# sourceURL=webpack://resturant/./src/pageload.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;