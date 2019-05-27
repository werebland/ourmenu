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



var MenuFinderContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "MenuFinder__MenuFinderContainer",
  componentId: "sc-88hg48-0"
})([""]);
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
var MenuFinderList = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_pose__WEBPACK_IMPORTED_MODULE_2__["default"].div(menuFinderListPose)).withConfig({
  displayName: "MenuFinder__MenuFinderList",
  componentId: "sc-88hg48-1"
})(["opacity:0;"]);
var menuFinderListItemPose = {
  enter: {
    y: 0,
    opacity: 1
  },
  exit: {
    y: -240,
    opacity: 0
  }
};
var MenuFinderListItem = react_pose__WEBPACK_IMPORTED_MODULE_2__["default"].div(menuFinderListItemPose);
var MenuFinderMenu = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "MenuFinder__MenuFinderMenu",
  componentId: "sc-88hg48-2"
})([""]);

var MenuFinder = function MenuFinder(_ref) {
  var restaurants = _ref.restaurants,
      handleRestaurantSelect = _ref.handleRestaurantSelect,
      menu = _ref.menu;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuFinderContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_pose__WEBPACK_IMPORTED_MODULE_2__["PoseGroup"], {
    animateOnMount: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, restaurants.map(function (restaurant) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuFinderListItem, {
      key: "username",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, restaurant.name);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuFinder);

/***/ })

})
//# sourceMappingURL=index.js.cd4c77dc9731326fa061.hot-update.js.map