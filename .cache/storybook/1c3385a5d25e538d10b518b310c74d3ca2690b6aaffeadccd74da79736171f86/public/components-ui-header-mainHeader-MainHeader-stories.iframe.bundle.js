"use strict";
(globalThis["webpackChunkcook_mate"] = globalThis["webpackChunkcook_mate"] || []).push([["components-ui-header-mainHeader-MainHeader-stories"],{

/***/ "./src/components/ui/header/mainHeader/MainHeader.stories.tsx":
/*!********************************************************************!*\
  !*** ./src/components/ui/header/mainHeader/MainHeader.stories.tsx ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainHeaderDefault: () => (/* binding */ MainHeaderDefault),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MainHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainHeader */ "./src/components/ui/header/mainHeader/MainHeader.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/Users/tserra/Documents/git/cook-mate/src/components/ui/header/mainHeader/MainHeader.stories.tsx";


const meta = {
  title: 'ui/header/mainHeader',
  component: _MainHeader__WEBPACK_IMPORTED_MODULE_0__["default"],
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: {
        type: 'text'
      }
    },
    productsInCart: {
      control: {
        type: 'number'
      }
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const MainHeaderDefault = {
  args: {
    text: 'Title',
    productsInCart: 0
  },
  render: args => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    style: {
      width: '500px'
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MainHeader__WEBPACK_IMPORTED_MODULE_0__["default"], {
      ...args
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 9
  }, undefined)
};
;
const __namedExportsOrder = ["MainHeaderDefault"];
MainHeaderDefault.parameters = {
  ...MainHeaderDefault.parameters,
  docs: {
    ...MainHeaderDefault.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    text: 'Title',\n    productsInCart: 0\n  },\n  render: args => <div style={{\n    width: '500px'\n  }}>\n            <MainHeader {...args} />\n        </div>\n}",
      ...MainHeaderDefault.parameters?.docs?.source
    }
  }
};

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/ui/header/mainHeader/MainHeader.tsx":
/*!************************************************************!*\
  !*** ./src/components/ui/header/mainHeader/MainHeader.tsx ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_header_mainHeader_ProfileIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../icons/header/mainHeader/ProfileIcon */ "./src/icons/header/mainHeader/ProfileIcon.tsx");
/* harmony import */ var _icons_header_mainHeader_CartIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../icons/header/mainHeader/CartIcon */ "./src/icons/header/mainHeader/CartIcon.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/Users/tserra/Documents/git/cook-mate/src/components/ui/header/mainHeader/MainHeader.tsx";




const MainHeader = ({
  text,
  productsInCart
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("header", {
    className: "h-min-[90px] h-[90px] w-full flex items-end justify-center py-[8px] px-[16px] shadow-[0_-1px_4px_0_rgba(0,0,0,0.25)]",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "w-full flex justify-between items-center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_icons_header_mainHeader_ProfileIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h4", {
        className: "text-center",
        children: text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
        className: "w-[40px] h-[40px] flex items-center relative",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_icons_header_mainHeader_CartIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, undefined), productsInCart > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          className: "flex items-center justify-center bg-negative-400 py-[1px] px-[8px] rounded-full absolute top-0 right-0 text-neutral-white text-small",
          children: productsInCart
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 29
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, undefined);
};
_c = MainHeader;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainHeader);
;
MainHeader.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "MainHeader",
  "props": {
    "text": {
      "required": true,
      "tsType": {
        "name": "string"
      },
      "description": ""
    },
    "productsInCart": {
      "required": true,
      "tsType": {
        "name": "number"
      },
      "description": ""
    }
  }
};
var _c;
__webpack_require__.$Refresh$.register(_c, "MainHeader");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/icons/header/mainHeader/CartIcon.tsx":
/*!**************************************************!*\
  !*** ./src/icons/header/mainHeader/CartIcon.tsx ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CartIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/Users/tserra/Documents/git/cook-mate/src/icons/header/mainHeader/CartIcon.tsx";

function CartIcon() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M7.22769 24C6.60661 24 6.07853 23.7884 5.64345 23.3651C5.20837 22.9421 4.99083 22.4286 4.99083 21.8247C4.99083 21.2206 5.20837 20.707 5.64345 20.284C6.07853 19.8609 6.60661 19.6494 7.22769 19.6494C7.84899 19.6494 8.37718 19.8609 8.81226 20.284C9.24734 20.707 9.46487 21.2206 9.46487 21.8247C9.46487 22.4286 9.24734 22.9421 8.81226 23.3651C8.37718 23.7884 7.84899 24 7.22769 24ZM19.6185 24C18.9972 24 18.469 23.7884 18.0339 23.3651C17.5988 22.9421 17.3813 22.4286 17.3813 21.8247C17.3813 21.2206 17.5988 20.707 18.0339 20.284C18.469 19.8609 18.9972 19.6494 19.6185 19.6494C20.2396 19.6494 20.7676 19.8609 21.2027 20.284C21.6378 20.707 21.8553 21.2206 21.8553 21.8247C21.8553 22.4286 21.6378 22.9421 21.2027 23.3651C20.7676 23.7884 20.2396 24 19.6185 24ZM5.77225 4.35058L9.01264 10.9482H17.7277C17.8015 10.9482 17.8671 10.9303 17.9246 10.8945C17.9819 10.8586 18.031 10.8088 18.072 10.745L21.5015 4.68527C21.5508 4.59764 21.5548 4.51995 21.5137 4.4522C21.4728 4.38446 21.4031 4.35058 21.3047 4.35058H5.77225ZM4.85309 2.48605H22.6029C23.1257 2.48605 23.5211 2.70244 23.7889 3.13522C24.0569 3.56779 24.0697 4.00958 23.8273 4.46059L19.7313 11.6748C19.5216 12.0334 19.2443 12.3127 18.8994 12.5126C18.5542 12.7127 18.176 12.8128 17.7648 12.8128H8.43737L6.95731 15.4421C6.89169 15.5378 6.88967 15.6414 6.95124 15.7528C7.0126 15.8645 7.10475 15.9203 7.22769 15.9203H21.8553V17.7849H7.22769C6.37543 17.7849 5.73507 17.4275 5.30659 16.7128C4.87791 15.998 4.86278 15.2844 5.26121 14.572L7.08515 11.3833L2.43405 1.86454H0V0H3.63862L4.85309 2.48605Z",
      fill: "#222425"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }, this);
}
_c = CartIcon;
;
CartIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CartIcon"
};
var _c;
__webpack_require__.$Refresh$.register(_c, "CartIcon");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/icons/header/mainHeader/ProfileIcon.tsx":
/*!*****************************************************!*\
  !*** ./src/icons/header/mainHeader/ProfileIcon.tsx ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProfileIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/Users/tserra/Documents/git/cook-mate/src/icons/header/mainHeader/ProfileIcon.tsx";

function ProfileIcon() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    width: "34",
    height: "34",
    viewBox: "0 0 34 34",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
      width: "34",
      height: "34",
      rx: "17",
      fill: "#74CABB"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M22.1002 13.6C22.1002 16.4167 19.8169 18.7 17.0002 18.7C14.1836 18.7 11.9002 16.4167 11.9002 13.6C11.9002 10.7833 14.1836 8.5 17.0002 8.5C19.8169 8.5 22.1002 10.7833 22.1002 13.6ZM20.4002 13.6C20.4002 15.4778 18.878 17 17.0002 17C15.1224 17 13.6002 15.4778 13.6002 13.6C13.6002 11.7222 15.1224 10.2 17.0002 10.2C18.878 10.2 20.4002 11.7222 20.4002 13.6Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M17.0002 21.25C11.497 21.25 6.80809 24.5041 5.02197 29.0632C5.45708 29.4953 5.91544 29.904 6.395 30.2872C7.72503 26.1015 11.8974 22.95 17.0002 22.95C22.103 22.95 26.2754 26.1015 27.6054 30.2873C28.085 29.904 28.5433 29.4953 28.9785 29.0633C27.1923 24.5042 22.5034 21.25 17.0002 21.25Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }, this);
}
_c = ProfileIcon;
;
ProfileIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ProfileIcon"
};
var _c;
__webpack_require__.$Refresh$.register(_c, "ProfileIcon");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

}]);
//# sourceMappingURL=components-ui-header-mainHeader-MainHeader-stories.iframe.bundle.js.map