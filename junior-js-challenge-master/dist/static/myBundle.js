/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/modules/colors.js":
/*!*******************************!*\
  !*** ./src/modules/colors.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nfunction getRandomColor() {\n  var letters = '0123456789ABCDEF';\n  var color = '#';\n  for (var i = 0; i < 6; i++) {\n    color += letters[Math.floor(Math.random() * 16)];\n  }\n  return color;\n}\n\nexports.getRandomColor = getRandomColor;\n\n//# sourceURL=webpack:///./src/modules/colors.js?");

/***/ }),

/***/ "./src/modules/fetchWithTimeout.js":
/*!*****************************************!*\
  !*** ./src/modules/fetchWithTimeout.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function (url, timeout) {\n    return Promise.race([fetch(url), new Promise(function (_, reject) {\n        return setTimeout(function () {\n            return reject(new Error('timeout'));\n        }, timeout);\n    })]);\n};\n\n//# sourceURL=webpack:///./src/modules/fetchWithTimeout.js?");

/***/ }),

/***/ "./src/modules/timeConverter.js":
/*!**************************************!*\
  !*** ./src/modules/timeConverter.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nfunction leadingZero(i) {\n  return i < 10 ? '0' + i : i;\n}\n\nfunction timeConverter(UNIX_timestamp) {\n  var a = new Date(UNIX_timestamp);\n  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];\n  var year = a.getFullYear();\n  var month = leadingZero(a.getMonth() + 1);\n  var date = leadingZero(a.getDate());\n  var hour = leadingZero(a.getHours());\n  var min = leadingZero(a.getMinutes());\n  var sec = leadingZero(a.getSeconds());\n  var time = date + '.' + month + '.' + year + ' ' + hour + ':' + min + ':' + sec;\n  return time;\n}\n\nexports.timeConverter = timeConverter;\n\n//# sourceURL=webpack:///./src/modules/timeConverter.js?");

/***/ }),

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _colors = __webpack_require__(/*! ./modules/colors.js */ \"./src/modules/colors.js\");\n\nvar _timeConverter = __webpack_require__(/*! ./modules/timeConverter.js */ \"./src/modules/timeConverter.js\");\n\nvar _fetchWithTimeout = __webpack_require__(/*! ./modules/fetchWithTimeout */ \"./src/modules/fetchWithTimeout.js\");\n\nvar _fetchWithTimeout2 = _interopRequireDefault(_fetchWithTimeout);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar canvas = document.getElementById('chart');\nvar ctx = canvas.getContext('2d');\n\nvar btn = document.querySelector('#btn');\n\nvar FETCH_TIMEOUT = 5000;\nvar didTimeOut = false;\n\nvar stockName = void 0;\nvar arrayOfStocks = [];\n\nvar chart = new Chart(canvas, {\n  type: 'line',\n  data: {\n    labels: [],\n    datasets: []\n  },\n  options: {\n    title: {\n      display: true,\n      text: 'Stocks'\n    },\n    scales: {\n      yAxes: [{\n        scaleLabel: {\n          display: true,\n          labelString: \"Value\",\n          fontColor: \"#800000\"\n        }\n      }],\n      xAxes: [{\n        scaleLabel: {\n          display: true,\n          labelString: \"Timestamp\",\n          fontColor: \"#800000\"\n        }\n      }]\n    }\n  }\n});\n\n(0, _fetchWithTimeout2.default)('./stocks', 5000).then(function (resp) {\n  return resp.json();\n}).then(function (resp) {\n  Array.from(resp.stockSymbols).forEach(function (el) {\n    var divWithStocks = document.querySelector('#Stocks');\n    var pWithoutText = document.createElement('p');\n    pWithoutText.textContent = el;\n    divWithStocks.appendChild(pWithoutText);\n    stockName = el;\n    pWithoutText.setAttribute('id', \"\" + el);\n    arrayOfStocks.push(el);\n    (0, _fetchWithTimeout2.default)(\"./stocks/\" + el, 5000).then(function (resp) {\n      return resp.json();\n    }).then(function (resp) {\n      var dataSet = {\n        label: el,\n        data: resp.map(function (x) {\n          return x.value;\n        }),\n        borderColor: (0, _colors.getRandomColor)(),\n        fill: false\n      };chart.data.datasets.push(dataSet);chart.data.labels = resp.map(function (y) {\n        return (0, _timeConverter.timeConverter)(y.timestamp);\n      });chart.update();\n    }).catch(function (err) {\n      var x = document.getElementById(el);x.textContent += ' - Sorry, Stock ' + err.message;x.style.color = 'red';\n    });\n  });\n}).catch(function (err) {\n  return alert('Sorry something went wrong. The data could not be retrieved from the database');\n});\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var spinner = document.querySelector('span.spinner');\n  spinner.style.display = 'none';\n});\n\n//# sourceURL=webpack:///./src/scripts.js?");

/***/ })

/******/ });