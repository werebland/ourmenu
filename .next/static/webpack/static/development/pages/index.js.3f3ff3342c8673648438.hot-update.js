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
    y: 500,
    opacity: 1,
    delay: function delay(_ref) {
      var i = _ref.i;
      return i * 900;
    }
  },
  exit: {
    y: 0,
    opacity: 0
  }
};
var MenuFinderListItem = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_pose__WEBPACK_IMPORTED_MODULE_2__["default"].div(menuFinderListItemPose)).withConfig({
  displayName: "MenuFinder__MenuFinderListItem",
  componentId: "sc-88hg48-2"
})(["padding:16px;background:#fff;margin-bottom:16px;"]);
var MenuFinderMenu = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "MenuFinder__MenuFinderMenu",
  componentId: "sc-88hg48-3"
})([""]);

var MenuFinder = function MenuFinder(_ref2) {
  var restaurants = _ref2.restaurants,
      handleRestaurantSelect = _ref2.handleRestaurantSelect,
      menu = _ref2.menu;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuFinderContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_pose__WEBPACK_IMPORTED_MODULE_2__["PoseGroup"], {
    animateOnMount: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, restaurants.map(function (restaurant, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuFinderListItem, {
      key: restaurant.username,
      i: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, restaurant.name);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuFinder);

/***/ })

})
//# sourceMappingURL=index.js.3f3ff3342c8673648438.hot-update.js.map