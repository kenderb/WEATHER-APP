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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _api_personal_key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-personal-key */ \"./src/api-personal-key.js\");\n\n\nclass ApiData {\n  constructor(city = 'Cartagena') {\n    this.apiKey = _api_personal_key__WEBPACK_IMPORTED_MODULE_0__.default;\n    this.city = city;\n  }\n\n  static convertKtoC(temp) {\n    return {\n      temp: `${Math.floor(temp - 273.15)} °`,\n      type: 'C',\n    };\n  }\n\n  convertDatatoObj(data) {\n    return {\n      type: ApiData.convertKtoC(data.main.temp).type,\n      city: this.city,\n      temperature: ApiData.convertKtoC(data.main.temp).temp,\n      feels_like: ApiData.convertKtoC(data.main.feels_like).temp,\n      humidity: data.main.humidity,\n      climate: data.weather[0].description,\n      icon: data.weather[0].icon,\n    };\n  }\n\n  async getApiData() {\n    try {\n      const res = await fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${this.city}`, {\n        method: 'GET',\n        headers: {\n          'x-rapidapi-key': this.apiKey,\n          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',\n        },\n        mode: 'cors',\n      });\n      const data = await res.json();\n      return this.convertDatatoObj(data);\n    } catch (e) {\n      return e;\n    }\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApiData);\n\n\n//# sourceURL=webpack://WEATHER-APP/./src/api-data.js?");

/***/ }),

/***/ "./src/api-personal-key.js":
/*!*********************************!*\
  !*** ./src/api-personal-key.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst WEATHER_APP_API_KEY = '90af330fafmshd5f583a87d147cep1d345cjsnde0647fbef02';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WEATHER_APP_API_KEY);\n\n//# sourceURL=webpack://WEATHER-APP/./src/api-personal-key.js?");

/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _api_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-data */ \"./src/api-data.js\");\n/* harmony import */ var _render_weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-weather */ \"./src/render-weather.js\");\n\n\n\nclass Form {\n  constructor() {\n    this.container = document.getElementById('container');\n    this.defaultCity = 'Cartagena';\n  }\n\n  static renderCall(value) {\n    const render = new _render_weather__WEBPACK_IMPORTED_MODULE_1__.default(value);\n    render.renderType();\n    render.renderTemp();\n    render.renderHumidity();\n    render.renderclimate();\n  }\n\n  static weatherCall(cityInput) {\n    const wheather = new _api_data__WEBPACK_IMPORTED_MODULE_0__.default(cityInput.value);\n    wheather.getApiData().then((value) => { Form.renderCall(value); });\n  }\n\n  createForm() {\n    Form.weatherCall(this.defaultCity);\n    const form = document.createElement('form');\n    const input = document.createElement('input');\n    const button = document.createElement('button');\n    form.action = '/home';\n    form.id = 'from-city';\n    input.type = 'text';\n    input.name = 'city';\n    input.placeholder = 'Type a city';\n    button.innerHTML = 'Submit';\n    button.type = 'submit';\n    form.append(input);\n    form.append(button);\n\n    this.container.append(form);\n    return form;\n  }\n\n  inputValidation(value) {\n    if (!value) {\n      const p = document.createElement('p');\n      if (document.getElementById('blank-error')) {\n        p.innerHTML = '';\n        p.innerHTML = \"City can't be blank\";\n      } else {\n        p.id = 'blank-error';\n        p.innerHTML = \"City can't be blank\";\n        this.container.append(p);\n      }\n      return false;\n    }\n    return true;\n  }\n\n  sumitInfo() {\n    const form = document.getElementById('from-city');\n    form.addEventListener('submit', (e) => {\n      e.preventDefault();\n      const degrees = document.getElementById('degrees');\n      if (degrees) degrees.remove();\n      const cityInput = form.elements.city;\n      if (this.inputValidation(cityInput.value)) {\n        Form.weatherCall(cityInput);\n        cityInput.value = '';\n      }\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);\n\n//# sourceURL=webpack://WEATHER-APP/./src/form.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ \"./src/form.js\");\n\n\n\nconst form = new _form__WEBPACK_IMPORTED_MODULE_0__.default();\n\nform.createForm();\nform.sumitInfo();\n\n//# sourceURL=webpack://WEATHER-APP/./src/index.js?");

/***/ }),

/***/ "./src/render-weather.js":
/*!*******************************!*\
  !*** ./src/render-weather.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass Render {\n  constructor(data) {\n    this.data = data;\n    this.content = document.getElementById('conten');\n  }\n\n  renderTemp() {\n    this.content.innerHTML = '';\n    const h1 = document.createElement('h1');\n    const p = document.createElement('p');\n    const p2 = document.createElement('p');\n    h1.innerHTML = this.data.city;\n    p.innerHTML = `Temp: ${this.data.temperature}`;\n    p.id = 'main-temp';\n    p2.innerHTML = `Fells like: ${this.data.feels_like}`;\n    p2.id = 'feels-temp';\n    this.content.append(h1);\n    this.content.append(p);\n    this.content.append(p2);\n  }\n\n  static fFormula(temp) {\n    return `${Math.round((Number(temp) * (9 / 5)) + 32)} °`;\n  }\n\n  static cFormula(temp) {\n    return `${Math.round((Number(temp) - 32) * (5 / 9))} °`;\n  }\n\n  static callTemps(formula) {\n    const temp1 = document.getElementById('main-temp');\n    const feels = document.getElementById('feels-temp');\n    const feelsTem = feels.innerHTML.split(' ')[2];\n    const mainTem = temp1.innerHTML.split(' ')[1];\n    temp1.innerHTML = `Temp: ${formula(mainTem)}`;\n    feels.innerHTML = `Fells like: ${formula(feelsTem)}`;\n    return temp1;\n  }\n\n  static convertToF() {\n    return Render.callTemps(Render.fFormula);\n  }\n\n  static convertToC() {\n    return Render.callTemps(Render.cFormula);\n  }\n\n  static checkDegrees() {\n    if (this.innerHTML === 'C') {\n      Render.convertToF();\n      this.innerHTML = 'F';\n    } else {\n      Render.convertToC();\n      this.innerHTML = 'C';\n    }\n  }\n\n  renderType() {\n    const container = document.getElementById('type');\n    const h2 = document.createElement('h2');\n    h2.id = 'degrees';\n\n    h2.innerHTML = this.data.type;\n    h2.addEventListener('click', Render.checkDegrees);\n    container.append(h2);\n  }\n\n  renderHumidity() {\n    const p = document.createElement('p');\n    p.innerHTML = `Humidity: ${this.data.humidity}`;\n    this.content.append(p);\n  }\n\n  renderclimate() {\n    const p = document.createElement('p');\n    p.innerHTML = `Climate: ${this.data.climate}`;\n    const image = document.createElement('img');\n    image.src = `http://openweathermap.org/img/wn/${this.data.icon}@2x.png`;\n    this.content.append(p);\n    this.content.append(image);\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Render);\n\n//# sourceURL=webpack://WEATHER-APP/./src/render-weather.js?");

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