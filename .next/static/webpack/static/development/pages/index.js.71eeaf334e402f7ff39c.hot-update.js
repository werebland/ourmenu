webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MenuFinder.jsx":
/*!***********************************!*\
  !*** ./components/MenuFinder.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");


var _jsxFileName = "/Users/Chris/ourmenu/components/MenuFinder.jsx";




var MenuFinderContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "MenuFinder__MenuFinderContainer",
  componentId: "sc-88hg48-0"
})(["position:relative;"]);
var citySelectorPose = {
  collapsed: {
    height: function height(_ref) {
      var offsetHeight = _ref.offsetHeight;
      return "calc(".concat(offsetHeight, "px + 96px + 96px)");
    }
  },
  expanded: {
    height: '100vh'
  }
};
var CitySelector = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(react_pose__WEBPACK_IMPORTED_MODULE_4__["default"].div(citySelectorPose)).withConfig({
  displayName: "MenuFinder__CitySelector",
  componentId: "sc-88hg48-1"
})(["width:100%;height:100vh;display:flex;flex-flow:column nowrap;align-items:center;justify-content:center;& .dimension-div{display:inline-flex;flex-flow:column nowrap;align-items:center;justify-content:center;}"]);
var HeroText = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h1.withConfig({
  displayName: "MenuFinder__HeroText",
  componentId: "sc-88hg48-2"
})(["font-size:3rem;font-weight:700;color:#fff;margin:0;margin-bottom:16px;"]);
var MenuPicker = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].section.withConfig({
  displayName: "MenuFinder__MenuPicker",
  componentId: "sc-88hg48-3"
})(["width:100%;height:100%;background:#fff;min-height:", ";padding:16px;box-sizing:border-box;display:flex;flex-flow:column nowrap;align-items:center;justify-content:flex-start;"], function (props) {
  return "calc(100vh - ".concat(props.offsetHeight, "px)");
});
var MenuList = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "MenuFinder__MenuList",
  componentId: "sc-88hg48-4"
})(["display:inline-flex;flex-flow:column nowrap;"]);
var MenuListItem = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].article.withConfig({
  displayName: "MenuFinder__MenuListItem",
  componentId: "sc-88hg48-5"
})(["width:100%;max-width:560px;padding:16px;box-sizing:border-box;border:1px solid #fff;border-radius:8px;background:#fff;display:flex;flex-flow:column nowrap;cursor:pointer;transition:padding-left 200ms cubic-bezier(0.0,0,0.2,1) 0ms,border-color 200ms cubic-bezier(0.0,0,0.2,1) 0ms,border-width 200ms cubic-bezier(0.0,0,0.2,1) 0ms;margin-bottom:16px;&:hover{border-color:#000;}"]);
var MenuListItemTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h3.withConfig({
  displayName: "MenuFinder__MenuListItemTitle",
  componentId: "sc-88hg48-6"
})(["font-size:2rem;font-weight:700;color:rgba(0,0,0,1);margin:0;"]);
var MenuListItemSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span.withConfig({
  displayName: "MenuFinder__MenuListItemSubtitle",
  componentId: "sc-88hg48-7"
})(["font-size:1.5rem;font-weight:500;color:rgba(0,0,0,.64);"]);
var selectStyles = {
  container: function container(provided, state) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, provided, {
      width: '100%'
    });
  },
  control: function control(provided, state) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, provided, {
      borderRadius: 8,
      borderColor: state.isFocused ? 'rgba(0,0,0,1)' : '#fff',
      boxShadow: state.isFocused ? '0 0 0 1px rgba(0,0,0,1)' : null,
      fontSize: '2.25rem',
      height: 56,
      width: '100%',
      fontWeight: 700,
      color: '#000',
      ':focus': {
        borderColor: 'rgba(0,0,0,1)'
      },
      ':active': {
        borderColor: 'rgba(0,0,0,1)'
      },
      ':hover': {
        borderColor: 'rgba(0,0,0,1)'
      }
    });
  },
  option: function option(provided, state) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, provided, {
      color: state.isSelected ? '#fff' : 'rgba(0,0,0,1)',
      fontSize: '2.25rem',
      fontWeight: 700,
      background: state.isSelected ? 'rgba(0,0,0,1)' : state.isFocused ? 'rgba(0,0,0,.24)' : null
    });
  },
  singleValue: function singleValue(provided, state) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, provided, {
      color: 'rgba(0,0,0,1)'
    });
  },
  input: function input(provided) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, provided, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      color: 'rgba(0,0,0,1)',
      fontWeight: 700
    }, "color", '#000'));
  }
};

function MenuFinder(_ref2) {
  var offsetHeight = _ref2.offsetHeight,
      options = _ref2.options,
      cities = _ref2.cities,
      city = _ref2.city,
      handleCitySelect = _ref2.handleCitySelect,
      restaurants = _ref2.restaurants,
      handleRestaurantSelect = _ref2.handleRestaurantSelect,
      menu = _ref2.menu;
  var containerRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef();
  console.log(containerRef);
  console.log(cities.reduce(function (r, e) {
    return r.length < e.length ? e : r;
  }, "").length);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MenuFinderContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CitySelector, {
    pose: city ? 'collapsed' : 'expanded',
    offsetHeight: offsetHeight,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "dimension-div",
    ref: containerRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(HeroText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "Menus for restaurants in"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      width: "".concat(cities.reduce(function (r, e) {
        return r.length < e.length ? e : r;
      }, "").length * 12 + 110, "px"),
      display: 'inline-flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: options.find(function (option) {
      return option.value == city;
    }),
    options: options,
    styles: selectStyles,
    isClearable: true,
    onChange: function onChange(option) {
      return handleCitySelect(option, containerRef.current.offsetHeight);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MenuPicker, {
    offsetHeight: offsetHeight,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MenuList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, restaurants.map(function (restaurant) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MenuListItem, {
      onClick: function onClick() {
        return handleRestaurantSelect(restaurant.username);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MenuListItemTitle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, restaurant.name), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MenuListItemSubtitle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, "Southern \xB7 $$ - $$$ \xB7 1669 Barrington St."));
  }))));
}

;
/* harmony default export */ __webpack_exports__["default"] = (MenuFinder);

/***/ })

})
//# sourceMappingURL=index.js.71eeaf334e402f7ff39c.hot-update.js.map