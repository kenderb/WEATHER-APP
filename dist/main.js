/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api-data.js":
/*!*************************!*\
  !*** ./src/api-data.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _api_personal_key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-personal-key */ \"./src/api-personal-key.js\");\n\r\nclass ApiData {\r\n  constructor(city= 'Cartagena') {\r\n    this.apiKey = _api_personal_key__WEBPACK_IMPORTED_MODULE_0__.default;\r\n    this.city =  city;\r\n  }\r\n  \r\n  convertKtoC(temp) {\r\n    return temp - 273.15\r\n  }\r\n  \r\n  convertDatatoObj(data) {\r\n    return {\r\n      tempetature: this.convertKtoC(data.main.temp),\r\n      feels_like: this.convertKtoC(data.main.feels_like),\r\n      humidity: data.main.humidity,\r\n      climate: data.weather[0].description,\r\n      icon: data.weather[0].icon,\r\n    }\r\n  }\r\n  \r\n  async getApiData() {\r\n    try {\r\n      const res = await fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${this.city}`, {\r\n        \"method\": \"GET\",\r\n        \"headers\": {\r\n          \"x-rapidapi-key\": this.apiKey,\r\n          \"x-rapidapi-host\": \"community-open-weather-map.p.rapidapi.com\"\r\n        },\r\n        \"mode\": \"cors\"\r\n      });\r\n      const data = await res.json();\r\n      return this.convertDatatoObj(data);\r\n    } catch (e) {\r\n      return e;\r\n    }\r\n  }\r\n  showApiKey() {\r\n    return this.apiKey;\r\n  }\r\n  \r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApiData);\r\n\r\n\n\n//# sourceURL=webpack://WEATHER-APP/./src/api-data.js?");

/***/ }),

/***/ "./src/api-personal-key.js":
/*!*********************************!*\
  !*** ./src/api-personal-key.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst WEATHER_APP_API_KEY = \"90af330fafmshd5f583a87d147cep1d345cjsnde0647fbef02\";\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WEATHER_APP_API_KEY);\n\n//# sourceURL=webpack://WEATHER-APP/./src/api-personal-key.js?");

/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _api_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-data */ \"./src/api-data.js\");\n\r\nclass From {\r\n  constructor() {\r\n    this.container = document.getElementById('container');\r\n  }\r\n  createForm() {\r\n    const form = document.createElement('form');\r\n    const input = document.createElement('input');\r\n    const button = document.createElement('button');\r\n    form.action = '/home';\r\n    form.id = 'from-city';\r\n    input.type = 'text';\r\n    input.name = 'city';\r\n    input.placeholder = 'Type a city';\r\n    button.innerHTML = 'Submit';\r\n    button.type = 'submit';\r\n    form.append(input);\r\n    form.append(button);\r\n    \r\n    this.container.append(form);\r\n    return form;\r\n  }\r\n  \r\n  inputValidation(value) {\r\n    if (!value) {\r\n      const p = document.createElement('p');\r\n      if(document.getElementById('blank-error')) {\r\n        p.innerHTML =''\r\n        p.innerHTML = \"City can't be blank\" \r\n      } else {\r\n        p.id = 'blank-error';\r\n        p.innerHTML = \"City can't be blank\"\r\n        this.container.append(p);\r\n      }\r\n      return false\r\n    }\r\n    return true;\r\n  }\r\n  \r\n  sumitInfo() {\r\n    const form = document.getElementById('from-city');\r\n    form.addEventListener('submit', (e) => {\r\n      e.preventDefault();\r\n      const cityInput = form.elements.city;\r\n      if (this.inputValidation(cityInput.value)) {\r\n          const wheather = new _api_data__WEBPACK_IMPORTED_MODULE_0__.default(cityInput.value);\r\n          wheather.getApiData().then((value)=> {\r\n            console.log(value);\r\n          });\r\n        cityInput.value = '';\r\n      }\r\n    });\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (From);\n\n//# sourceURL=webpack://WEATHER-APP/./src/form.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ \"./src/form.js\");\n\r\n\r\nconst form = new _form__WEBPACK_IMPORTED_MODULE_0__.default();\r\n\r\nform.createForm();\r\nform.sumitInfo();\n\n//# sourceURL=webpack://WEATHER-APP/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;