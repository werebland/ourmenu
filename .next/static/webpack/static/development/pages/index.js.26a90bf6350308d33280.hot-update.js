webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MenuFinder.jsx":
/*!***********************************!*\
  !*** ./components/MenuFinder.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
var _jsxFileName = "/Users/Chris/ourmenu/components/MenuFinder.jsx";



var menuFinderContainerPose = {
  raised: {
    y: '-50vh'
  },
  lowered: {
    y: '0vh'
  }
};
var MenuFinderContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_pose__WEBPACK_IMPORTED_MODULE_2__["default"].div(menuFinderContainerPose)).withConfig({
  displayName: "MenuFinder__MenuFinderContainer",
  componentId: "sc-88hg48-0"
})(["position:relative;"]);
var menuFinderListPose = {
  enter: {
    opacity: 1,
    delayChildren: 200,
    staggerChildren: 50,
    delay: 300
  },
  exit: {
    opacity: 0
  }
};
var CitySelector = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "MenuFinder__CitySelector",
  componentId: "sc-88hg48-1"
})(["width:100%;height:100vh;display:flex;align-items:center;justify-content:center;"]);
var MenuPicker = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "MenuFinder__MenuPicker",
  componentId: "sc-88hg48-2"
})(["width:100%;height:100%;background:#fff;min-height:50vh;"]);

var MenuFinder = function MenuFinder(_ref) {
  var city = _ref.city,
      restaurants = _ref.restaurants,
      handleRestaurantSelect = _ref.handleRestaurantSelect,
      menu = _ref.menu;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuFinderContainer, {
    pose: city ? 'raised' : 'lowered',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CitySelector, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Find restaurant menus in"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuPicker, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Test"));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuFinder);

/***/ })

})
//# sourceMappingURL=index.js.26a90bf6350308d33280.hot-update.js.map