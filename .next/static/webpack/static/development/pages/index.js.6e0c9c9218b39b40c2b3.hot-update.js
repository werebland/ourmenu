webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MenuFinder.jsx":
/*!***********************************!*\
  !*** ./components/MenuFinder.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");

var _jsxFileName = "/Users/Chris/ourmenu/components/MenuFinder.jsx";




var menuFinderContainerPose = {
  raised: {
    y: '-50vh'
  },
  lowered: {
    y: '0vh'
  }
};
var MenuFinderContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_pose__WEBPACK_IMPORTED_MODULE_3__["default"].div(menuFinderContainerPose)).withConfig({
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
var CitySelector = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "MenuFinder__CitySelector",
  componentId: "sc-88hg48-1"
})(["width:100%;height:100vh;display:flex;align-items:center;justify-content:center;"]);
var HeroText = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "MenuFinder__HeroText",
  componentId: "sc-88hg48-2"
})(["font-size:3rem;font-weight:700;color:#fff;margin:0;margin-bottom:16px;"]);
var MenuPicker = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "MenuFinder__MenuPicker",
  componentId: "sc-88hg48-3"
})(["width:100%;height:100%;background:#fff;min-height:50vh;"]);
var selectStyles = {
  control: function control(provided) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, provided, {
      borderRadius: 8,
      borderColor: '#fff',
      fontSize: '2.25rem',
      height: 56,
      width: 240,
      fontWeight: 700,
      color: '#000'
    });
  }
};

var MenuFinder = function MenuFinder(_ref) {
  var cities = _ref.cities,
      city = _ref.city,
      handleCitySelect = _ref.handleCitySelect,
      restaurants = _ref.restaurants,
      handleRestaurantSelect = _ref.handleRestaurantSelect,
      menu = _ref.menu;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuFinderContainer, {
    pose: city ? 'raised' : 'lowered',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CitySelector, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeroText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Find restaurant menus in"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: city,
    options: cities,
    styles: selectStyles,
    onChange: function onChange(option) {
      return handleCitySelect(option);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuPicker, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Test"));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuFinder);

/***/ })

})
//# sourceMappingURL=index.js.6e0c9c9218b39b40c2b3.hot-update.js.map