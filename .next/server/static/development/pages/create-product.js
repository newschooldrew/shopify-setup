module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/create-product.js":
/*!*********************************!*\
  !*** ./pages/create-product.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store-js */ \"store-js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ \"react-apollo\");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nconst CREATE_PRODUCT = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`\nmutation exampleProductCreate($input: ProductInput!) {\n  productCreate(input: $input) {\n    userErrors {\n      field\n      message\n    }\n    product {\n      id\n      title\n      productType\n    }\n  }\n}\n`;\n\nclass EditProduct extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      title: '',\n      type: ''\n    });\n\n    _defineProperty(this, \"handleChange\", field => {\n      return value => this.setState({\n        [field]: value\n      });\n    });\n  }\n\n  render() {\n    const {\n      title,\n      type\n    } = this.state;\n    return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_4__[\"Mutation\"], {\n      mutation: CREATE_PRODUCT\n    }, (handleSubmit, {\n      error,\n      data\n    }) => {\n      const showError = error && __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Banner\"], {\n        status: \"critical\"\n      }, error.message);\n\n      const showToast = data && __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Toast\"], {\n        content: \"Sucessfully created\"\n      });\n\n      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Frame\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Page\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"], null, showToast, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].Section, null, showError), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n        sectioned: true\n      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"FormLayout\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"FormLayout\"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n        value: title,\n        label: \"Title\",\n        onChange: this.handleChange('title'),\n        type: \"text\"\n      }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n        value: type,\n        label: \"Product Type\",\n        onChange: this.handleChange('type'),\n        type: \"text\"\n      })))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"PageActions\"], {\n        primaryAction: [{\n          content: 'Save',\n          onAction: () => {\n            const productVariableInput = {\n              title: title,\n              productType: type\n            };\n            handleSubmit({\n              variables: {\n                input: productVariableInput\n              }\n            });\n          }\n        }]\n      }))))));\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditProduct);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jcmVhdGUtcHJvZHVjdC5qcz82YzFmIl0sIm5hbWVzIjpbIkNSRUFURV9QUk9EVUNUIiwiZ3FsIiwiRWRpdFByb2R1Y3QiLCJSZWFjdCIsIkNvbXBvbmVudCIsInRpdGxlIiwidHlwZSIsImZpZWxkIiwidmFsdWUiLCJzZXRTdGF0ZSIsInJlbmRlciIsInN0YXRlIiwiaGFuZGxlU3VibWl0IiwiZXJyb3IiLCJkYXRhIiwic2hvd0Vycm9yIiwibWVzc2FnZSIsInNob3dUb2FzdCIsImhhbmRsZUNoYW5nZSIsImNvbnRlbnQiLCJvbkFjdGlvbiIsInByb2R1Y3RWYXJpYWJsZUlucHV0IiwicHJvZHVjdFR5cGUiLCJ2YXJpYWJsZXMiLCJpbnB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBYUE7QUFDQTtBQUNBO0FBRUEsTUFBTUEsY0FBYyxHQUFHQyxrREFBSTs7Ozs7Ozs7Ozs7Ozs7Q0FBM0I7O0FBZ0JBLE1BQU1DLFdBQU4sU0FBMEJDLDRDQUFLLENBQUNDLFNBQWhDLENBQTBDO0FBQUE7QUFBQTs7QUFBQSxtQ0FDaEM7QUFDTkMsV0FBSyxFQUFFLEVBREQ7QUFFTkMsVUFBSSxFQUFDO0FBRkMsS0FEZ0M7O0FBQUEsMENBNkV4QkMsS0FBRCxJQUFXO0FBQ3hCLGFBQVFDLEtBQUQsSUFBVyxLQUFLQyxRQUFMLENBQWM7QUFBRSxTQUFDRixLQUFELEdBQVNDO0FBQVgsT0FBZCxDQUFsQjtBQUNELEtBL0V1QztBQUFBOztBQU94Q0UsUUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFFTCxXQUFGO0FBQVFDO0FBQVIsUUFBaUIsS0FBS0ssS0FBNUI7QUFDQSxXQUNFLE1BQUMscURBQUQ7QUFDRSxjQUFRLEVBQUVYO0FBRFosT0FHRyxDQUFDWSxZQUFELEVBQWU7QUFBQ0MsV0FBRDtBQUFRQztBQUFSLEtBQWYsS0FBaUM7QUFDcEIsWUFBTUMsU0FBUyxHQUFHRixLQUFLLElBQ25CLE1BQUMsdURBQUQ7QUFBUSxjQUFNLEVBQUM7QUFBZixTQUEyQkEsS0FBSyxDQUFDRyxPQUFqQyxDQURKOztBQUdFLFlBQU1DLFNBQVMsR0FBR0gsSUFBSSxJQUNwQixNQUFDLHNEQUFEO0FBQ0UsZUFBTyxFQUFDO0FBRFYsUUFERjs7QUFLcEIsYUFDRixNQUFDLHNEQUFELFFBQ0ksTUFBQyxxREFBRCxRQUNFLE1BQUMsdURBQUQsUUFDQ0csU0FERCxFQUVNLE1BQUMsdURBQUQsQ0FBUSxPQUFSLFFBQ0tGLFNBREwsQ0FGTixFQUtFLE1BQUMsdURBQUQsQ0FBUSxPQUFSLFFBQ0UsTUFBQyxxREFBRCxRQUNFLE1BQUMscURBQUQ7QUFBTSxpQkFBUztBQUFmLFNBQ0UsTUFBQywyREFBRCxRQUNFLE1BQUMsMkRBQUQsQ0FBWSxLQUFaLFFBQ0UsTUFBQywwREFBRDtBQUNFLGFBQUssRUFBRVYsS0FEVDtBQUVFLGFBQUssRUFBQyxPQUZSO0FBR0UsZ0JBQVEsRUFBRSxLQUFLYSxZQUFMLENBQWtCLE9BQWxCLENBSFo7QUFJRSxZQUFJLEVBQUM7QUFKUCxRQURGLEVBT0UsTUFBQywwREFBRDtBQUNFLGFBQUssRUFBRVosSUFEVDtBQUVFLGFBQUssRUFBQyxjQUZSO0FBR0UsZ0JBQVEsRUFBRSxLQUFLWSxZQUFMLENBQWtCLE1BQWxCLENBSFo7QUFJRSxZQUFJLEVBQUM7QUFKUCxRQVBGLENBREYsQ0FERixDQURGLEVBbUJFLE1BQUMsNERBQUQ7QUFDRSxxQkFBYSxFQUFFLENBQ2I7QUFDRUMsaUJBQU8sRUFBRSxNQURYO0FBRUVDLGtCQUFRLEVBQUUsTUFBTTtBQUNkLGtCQUFNQyxvQkFBb0IsR0FBRztBQUMzQmhCLG1CQUFLLEVBQUVBLEtBRG9CO0FBRTNCaUIseUJBQVcsRUFBRWhCO0FBRmMsYUFBN0I7QUFJRU0sd0JBQVksQ0FBQztBQUNYVyx1QkFBUyxFQUFFO0FBQUVDLHFCQUFLLEVBQUVIO0FBQVQ7QUFEQSxhQUFELENBQVo7QUFHSDtBQVZILFNBRGE7QUFEakIsUUFuQkYsQ0FERixDQUxGLENBREYsQ0FESixDQURFO0FBa0RHLEtBOURELENBREY7QUFrRUg7O0FBM0V5Qzs7QUFtRjNCbkIsMEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9jcmVhdGUtcHJvZHVjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJhbm5lcixcbiAgQ2FyZCxcbiAgRGlzcGxheVRleHQsXG4gIEZvcm0sXG4gIEZvcm1MYXlvdXQsXG4gIEZyYW1lLFxuICBMYXlvdXQsXG4gIFBhZ2UsXG4gIFBhZ2VBY3Rpb25zLFxuICBUZXh0RmllbGQsXG4gIFRvYXN0XG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJ3N0b3JlLWpzJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgTXV0YXRpb24gfSBmcm9tICdyZWFjdC1hcG9sbG8nOyAgXG5cbmNvbnN0IENSRUFURV9QUk9EVUNUID0gZ3FsYFxubXV0YXRpb24gZXhhbXBsZVByb2R1Y3RDcmVhdGUoJGlucHV0OiBQcm9kdWN0SW5wdXQhKSB7XG4gIHByb2R1Y3RDcmVhdGUoaW5wdXQ6ICRpbnB1dCkge1xuICAgIHVzZXJFcnJvcnMge1xuICAgICAgZmllbGRcbiAgICAgIG1lc3NhZ2VcbiAgICB9XG4gICAgcHJvZHVjdCB7XG4gICAgICBpZFxuICAgICAgdGl0bGVcbiAgICAgIHByb2R1Y3RUeXBlXG4gICAgfVxuICB9XG59XG5gO1xuXG5jbGFzcyBFZGl0UHJvZHVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHRpdGxlOiAnJyxcbiAgICB0eXBlOicnXG4gIH07XG5cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aXRsZSx0eXBlIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8TXV0YXRpb25cbiAgICAgICAgbXV0YXRpb249e0NSRUFURV9QUk9EVUNUfVxuICAgICAgPlxuICAgICAgICB7KGhhbmRsZVN1Ym1pdCwge2Vycm9yLCBkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNob3dFcnJvciA9IGVycm9yICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhbm5lciBzdGF0dXM9XCJjcml0aWNhbFwiPntlcnJvci5tZXNzYWdlfTwvQmFubmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNob3dUb2FzdCA9IGRhdGEgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9hc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiU3VjZXNzZnVsbHkgY3JlYXRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgIHJldHVybiAoXG4gIDxGcmFtZT5cbiAgICAgIDxQYWdlPlxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICB7c2hvd1RvYXN0fVxuICAgICAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICB7c2hvd0Vycm9yfVxuICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxuICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cbiAgICAgICAgICAgIDxGb3JtPlxuICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XG4gICAgICAgICAgICAgICAgPEZvcm1MYXlvdXQ+XG4gICAgICAgICAgICAgICAgICA8Rm9ybUxheW91dC5Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ3RpdGxlJyl9XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3R5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQcm9kdWN0IFR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgndHlwZScpfVxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybUxheW91dC5Hcm91cD5cbiAgICAgICAgICAgICAgICA8L0Zvcm1MYXlvdXQ+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgPFBhZ2VBY3Rpb25zXG4gICAgICAgICAgICAgICAgcHJpbWFyeUFjdGlvbj17W1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnU2F2ZScsXG4gICAgICAgICAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdFZhcmlhYmxlSW5wdXQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0VHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHsgaW5wdXQ6IHByb2R1Y3RWYXJpYWJsZUlucHV0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgPC9QYWdlPlxuICA8L0ZyYW1lPlxuICAgICAgICAgICk7XG4gICAgICB9fVxuICAgICAgPC9NdXRhdGlvbj5cbiAgKTtcbn1cblxuICBoYW5kbGVDaGFuZ2UgPSAoZmllbGQpID0+IHtcbiAgICByZXR1cm4gKHZhbHVlKSA9PiB0aGlzLnNldFN0YXRlKHsgW2ZpZWxkXTogdmFsdWUgfSk7XG4gIH07XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdFByb2R1Y3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/create-product.js\n");

/***/ }),

/***/ 5:
/*!***************************************!*\
  !*** multi ./pages/create-product.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/andrewperez/Documents/projects/shopify-apps/shopify-setup/pages/create-product.js */"./pages/create-product.js");


/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/polaris\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCI/YTYyMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9wb2xhcmlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/polaris\n");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tag\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiP2Y4YjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JhcGhxbC10YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql-tag\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-apollo\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hcG9sbG9cIj8yMGU2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWFwb2xsby5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFwb2xsb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-apollo\n");

/***/ }),

/***/ "store-js":
/*!***************************!*\
  !*** external "store-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"store-js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdG9yZS1qc1wiP2QxYWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3RvcmUtanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdG9yZS1qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///store-js\n");

/***/ })

/******/ });