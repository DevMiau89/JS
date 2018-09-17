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
eval("\n\nvar _Cart = __webpack_require__(/*! ./modules/Cart.js */ \"./app/modules/Cart.js\");\n\nvar _Item = __webpack_require__(/*! ./modules/Item.js */ \"./app/modules/Item.js\");\n\nvar item = new _Item.Item(1, 'bike', '60', 'red');\nvar item2 = new _Item.Item(2, 'bike', '20', 'blue');\n\n_Cart.Cart.addItem(item);\n_Cart.Cart.addItem(item2);\n\n_Cart.Cart.deleteItem(item2);\nconsole.log(_Cart.Cart.isInCart(item));\nconsole.log(_Cart.Cart.isInCart(item2));\nconsole.log(_Cart.Cart);\n\n//# sourceURL=webpack:///./app/index.js?");

/***/ }),

/***/ "./app/modules/Cart.js":
/*!*****************************!*\
  !*** ./app/modules/Cart.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar cartModule = function () {\n    function Cart() {}\n\n    var products = [];\n\n    Cart.prototype.addItem = function (item) {\n        products.push(item);\n    };\n\n    Cart.prototype.deleteItem = function (item) {\n        var index = products.indexOf(item);\n        products.splice(index, 1);\n    };\n\n    Cart.prototype.isInCart = function (item) {\n        return products.includes(item);\n    };\n\n    var initCart = function initCart() {\n        var cart = new Cart();\n        return cart;\n    };\n    return {\n        initCart: initCart,\n        products: products\n    };\n}();\n\nmodule.exports = {\n    Cart: cartModule.initCart(),\n    products: cartModule.products\n};\n\n//# sourceURL=webpack:///./app/modules/Cart.js?");

/***/ }),

/***/ "./app/modules/Item.js":
/*!*****************************!*\
  !*** ./app/modules/Item.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar itemModule = function () {\n    function Item() {\n        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n            args[_key] = arguments[_key];\n        }\n\n        this.args = args;\n    }\n\n    Item.prototype.setArg = function (arg) {\n        this.arg = arg;\n    };\n\n    Item.prototype.getArg = function () {\n        return this.arg;\n    };\n\n    return {\n        Item: Item\n    };\n}();\n\nmodule.exports = {\n    Item: itemModule.Item\n};\n\n//# sourceURL=webpack:///./app/modules/Item.js?");

/***/ })

/******/ });