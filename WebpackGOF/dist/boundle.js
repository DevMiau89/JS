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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _characters = __webpack_require__(/*! ./modules/characters.js */ \"./app/modules/characters.js\");\n\nvar _characters2 = _interopRequireDefault(_characters);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar characters = new _characters2.default();\n\ncharacters.fetch();\n\n//# sourceURL=webpack:///./app/index.js?");

/***/ }),

/***/ "./app/modules/characters.js":
/*!***********************************!*\
  !*** ./app/modules/characters.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Characters = function () {\n    function Characters() {\n        _classCallCheck(this, Characters);\n    }\n\n    _createClass(Characters, [{\n        key: 'fetch',\n        value: function (_fetch) {\n            function fetch() {\n                return _fetch.apply(this, arguments);\n            }\n\n            fetch.toString = function () {\n                return _fetch.toString();\n            };\n\n            return fetch;\n        }(function () {\n            var _this = this;\n\n            fetch('https://api.github.com/users').then(function (response) {\n                return response.json();\n            }).then(function (response) {\n                _this.draw(response);\n            }).catch(function (err) {\n                return console.log(err);\n            });\n        })\n    }, {\n        key: 'draw',\n        value: function draw(result) {\n            var _this2 = this;\n\n            var div = document.querySelector('#container');\n            var tpl = \"<ul>\";\n\n            result.forEach(function (el) {\n                tpl += '<li id =' + el.id + '>';tpl += el.login;tpl += \"</li>\";\n            });\n\n            tpl += \"</ul>\";\n\n            div.insertAdjacentHTML('afterbegin', tpl);\n\n            document.querySelectorAll('li').forEach(function (el) {\n                return el.addEventListener('click', function (e) {\n                    _this2.getDetails(e.target.id);\n                });\n            });\n        }\n    }, {\n        key: 'getDetails',\n        value: function getDetails(element) {\n            fetch('https://api.github.com/users/' + element).then(function (response) {\n                return response.json();\n            }).then(function (response) {\n                var div = document.querySelector('.characters');\n                div.innerHTML = \"\";\n                var tpl = '\\n                    <p>' + response.name + '</p><p>' + response.public_repos + '    \\n                ';\n                tpl += '</p>';\n                div.insertAdjacentHTML('afterbegin', tpl);\n            }).catch(function (err) {\n                return console.log(err);\n            });\n        }\n    }]);\n\n    return Characters;\n}();\n\nmodule.exports = Characters;\n\n//# sourceURL=webpack:///./app/modules/characters.js?");

/***/ })

/******/ });