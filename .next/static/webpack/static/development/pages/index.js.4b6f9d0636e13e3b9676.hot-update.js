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




var MenuFinderContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
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
var citySelectorPose = {
  collapsed: {
    height: 'calc(100vh - 421px)'
  },
  expanded: {
    height: '100vh'
  }
};
var CitySelector = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_pose__WEBPACK_IMPORTED_MODULE_3__["default"].div(citySelectorPose)).withConfig({
  displayName: "MenuFinder__CitySelector",
  componentId: "sc-88hg48-1"
})(["width:100%;height:100vh;display:flex;flex-flow:column nowrap;align-items:center;justify-content:center;& .dimension-div{display:inline-flex;flex-flow:column nowrap;align-items:center;justify-content:center;}"]);
var HeroText = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "MenuFinder__HeroText",
  componentId: "sc-88hg48-2"
})(["font-size:3rem;font-weight:700;color:#fff;margin:0;margin-bottom:16px;"]);
var MenuPicker = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.withConfig({
  displayName: "MenuFinder__MenuPicker",
  componentId: "sc-88hg48-3"
})(["width:100%;height:100%;background:#fff;min-height:449px;padding:16px;box-sizing:border-box;display:flex;flex-flow:column nowrap;align-items:center;justify-content:flex-start;"]);
var MenuList = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "MenuFinder__MenuList",
  componentId: "sc-88hg48-4"
})(["display:inline-flex;flex-flow:column nowrap;"]);
var MenuListItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].article.withConfig({
  displayName: "MenuFinder__MenuListItem",
  componentId: "sc-88hg48-5"
})(["width:100%;max-width:420px;padding:16px;box-sizing:border-box;border:1px solid #fff;border-radius:8px;background:#fff;display:flex;flex-flow:column nowrap;cursor:pointer;transition:padding-left 200ms cubic-bezier(0.0,0,0.2,1) 0ms,border-color 200ms cubic-bezier(0.0,0,0.2,1) 0ms,border-width 200ms cubic-bezier(0.0,0,0.2,1) 0ms;margin-bottom:16px;&:hover{border-color:#000;}"]);
var MenuListItemTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h3.withConfig({
  displayName: "MenuFinder__MenuListItemTitle",
  componentId: "sc-88hg48-6"
})(["font-size:1.5rem;font-weight:700;color:rgba(0,0,0,1);margin:0;"]);
var MenuListItemSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "MenuFinder__MenuListItemSubtitle",
  componentId: "sc-88hg48-7"
})(["font-size:1rem;font-weight:500;color:rgba(0,0,0,.64);"]);
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

function MenuFinder(_ref) {
  var cities = _ref.cities,
      city = _ref.city,
      handleCitySelect = _ref.handleCitySelect,
      restaurants = _ref.restaurants,
      handleRestaurantSelect = _ref.handleRestaurantSelect,
      menu = _ref.menu;
  var containerInput = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
  console.log(containerInput);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuFinderContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CitySelector, {
    pose: city ? 'collapsed' : 'expanded',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "dimension-div",
    ref: containerInput,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeroText, {
    onClick: function onClick() {
      return console.log(containerInput);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "Menus for restaurants in"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: cities.find(function (option) {
      return option.value == city;
    }),
    options: cities,
    styles: selectStyles,
    isClearable: true,
    onChange: function onChange(option) {
      return handleCitySelect(option);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuPicker, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, restaurants.map(function (restaurant) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuListItem, {
      onClick: function onClick() {
        return handleRestaurantSelect(restaurant.username);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuListItemTitle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, restaurant.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuListItemSubtitle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, "Southern \xB7 $$ - $$$ \xB7 1669 Barrington St."));
  }))));
}

;
/* harmony default export */ __webpack_exports__["default"] = (MenuFinder);

/***/ })

})
//# sourceMappingURL=index.js.4b6f9d0636e13e3b9676.hot-update.js.map