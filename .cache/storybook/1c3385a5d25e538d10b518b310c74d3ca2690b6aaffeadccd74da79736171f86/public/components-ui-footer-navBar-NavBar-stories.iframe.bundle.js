"use strict";
(globalThis["webpackChunkcook_mate"] = globalThis["webpackChunkcook_mate"] || []).push([["components-ui-footer-navBar-NavBar-stories"],{

/***/ "./src/components/ui/footer/navBar/NavBar.stories.tsx":
/*!************************************************************!*\
  !*** ./src/components/ui/footer/navBar/NavBar.stories.tsx ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainNavbar: () => (/* binding */ MainNavbar),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBar */ "./src/components/ui/footer/navBar/NavBar.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/Users/tserra/Documents/git/cook-mate/src/components/ui/footer/navBar/NavBar.stories.tsx";


const meta = {
  title: 'UI/Footer/Navbar',
  component: _NavBar__WEBPACK_IMPORTED_MODULE_0__["default"],
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    currentPage: {
      control: {
        type: 'number',
        min: 0,
        max: 4
      },
      defaultValue: 0
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const MainNavbar = {
  args: {
    currentPage: 0
  },
  render: args => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    style: {
      width: '500px'
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_NavBar__WEBPACK_IMPORTED_MODULE_0__["default"], {
      ...args
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, undefined)
};
;
const __namedExportsOrder = ["MainNavbar"];
MainNavbar.parameters = {
  ...MainNavbar.parameters,
  docs: {
    ...MainNavbar.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    currentPage: 0\n  },\n  render: args => <div style={{\n    width: '500px'\n  }}>\n      <NavBar {...args} />\n    </div>\n}",
      ...MainNavbar.parameters?.docs?.source
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

/***/ "./src/components/ui/footer/navBar/NavBar.tsx":
/*!****************************************************!*\
  !*** ./src/components/ui/footer/navBar/NavBar.tsx ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavBar)
/* harmony export */ });
/* harmony import */ var _icons_navBar_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../icons/navBar/Home */ "./src/icons/navBar/Home.tsx");
/* harmony import */ var _icons_navBar_Ingredients__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../icons/navBar/Ingredients */ "./src/icons/navBar/Ingredients.tsx");
/* harmony import */ var _icons_navBar_Recipes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../icons/navBar/Recipes */ "./src/icons/navBar/Recipes.tsx");
/* harmony import */ var _icons_navBar_Videos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../icons/navBar/Videos */ "./src/icons/navBar/Videos.tsx");
/* harmony import */ var _TextIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextIcon */ "./src/components/ui/footer/navBar/TextIcon.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/Users/tserra/Documents/git/cook-mate/src/components/ui/footer/navBar/NavBar.tsx";






const navBarItems = [{
  icon: _icons_navBar_Home__WEBPACK_IMPORTED_MODULE_0__["default"],
  name: "Home"
}, {
  icon: _icons_navBar_Ingredients__WEBPACK_IMPORTED_MODULE_1__["default"],
  name: "Ingredients"
}, {
  icon: _icons_navBar_Recipes__WEBPACK_IMPORTED_MODULE_2__["default"],
  name: "Recipes"
}, {
  icon: _icons_navBar_Videos__WEBPACK_IMPORTED_MODULE_3__["default"],
  name: "Videos"
}];
function NavBar({
  currentPage = 0
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("footer", {
    className: "flex gap-2 w-full pb-3 justify-evenly items-center  px-2 shadow-xl overflow-x-hidden ",
    children: navBarItems.map(({
      icon,
      name
    }, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_TextIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      icon: icon,
      name: name,
      selected: currentPage === index
    }, name, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
_c = NavBar;
;
NavBar.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "NavBar",
  "props": {
    "currentPage": {
      "required": false,
      "tsType": {
        "name": "number"
      },
      "description": "",
      "defaultValue": {
        "value": "0",
        "computed": false
      }
    }
  }
};
var _c;
__webpack_require__.$Refresh$.register(_c, "NavBar");

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

/***/ "./src/components/ui/footer/navBar/TextIcon.tsx":
/*!******************************************************!*\
  !*** ./src/components/ui/footer/navBar/TextIcon.tsx ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TextIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/Users/tserra/Documents/git/cook-mate/src/components/ui/footer/navBar/TextIcon.tsx";

function TextIcon({
  icon: Icon,
  name,
  selected
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    className: "flex flex-col gap-1 h-full items-center pt-3 pb-4 justify-evenly w-full",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: `${selected ? "w-16" : "w-8"} h-8 flex justify-evenly`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {
        isFilled: selected
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: `text-small-b ${selected ? "text-primary-500" : "text-neutral-800"}`,
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
_c = TextIcon;
;
TextIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TextIcon",
  "props": {
    "icon": {
      "required": true,
      "tsType": {
        "name": "ReactElementType",
        "raw": "React.ElementType<IconNavBarProps>",
        "elements": [{
          "name": "IconNavBarProps"
        }]
      },
      "description": ""
    },
    "name": {
      "required": true,
      "tsType": {
        "name": "string"
      },
      "description": ""
    },
    "selected": {
      "required": true,
      "tsType": {
        "name": "boolean"
      },
      "description": ""
    }
  }
};
var _c;
__webpack_require__.$Refresh$.register(_c, "TextIcon");

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

/***/ "./src/icons/navBar/Home.tsx":
/*!***********************************!*\
  !*** ./src/icons/navBar/Home.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/Users/tserra/Documents/git/cook-mate/src/icons/navBar/Home.tsx";

function Home({
  isFilled = false
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: isFilled ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 21 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M10.75 12.4932C9.3693 12.4932 8.25 13.6125 8.25 14.9932V19.9932H13.25V14.9932C13.25 13.6125 12.1307 12.4932 10.75 12.4932Z",
        fill: "#17A68E"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M14.9167 14.9934V19.9934H18.25C19.6307 19.9934 20.75 18.8741 20.75 17.4934V9.89259C20.7502 9.45966 20.582 9.04364 20.2808 8.73259L13.1992 1.07673C11.9496 -0.275227 9.84074 -0.358234 8.48879 0.891297C8.42457 0.950672 8.3627 1.01251 8.30336 1.07673L1.23418 8.73009C0.923945 9.04243 0.749883 9.46485 0.75 9.90509V17.4934C0.75 18.8741 1.8693 19.9934 3.25 19.9934H6.58332V14.9934C6.59891 12.7211 8.43355 10.8654 10.6487 10.812C12.9379 10.7568 14.8992 12.644 14.9167 14.9934Z",
        fill: "#17A68E"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M10.75 12.4932C9.3693 12.4932 8.25 13.6125 8.25 14.9932V19.9932H13.25V14.9932C13.25 13.6125 12.1307 12.4932 10.75 12.4932Z",
        fill: "#17A68E"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 21 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
        "clip-path": "url(#clip0_551_1636)",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
          d: "M20.0175 7.55751L13.6967 1.23584C12.9144 0.455835 11.8547 0.0178223 10.75 0.0178223C9.64529 0.0178223 8.58564 0.455835 7.80334 1.23584L1.48251 7.55751C1.24953 7.789 1.06482 8.06443 0.939079 8.36783C0.813339 8.67124 0.749075 8.99658 0.75001 9.32501V17.5058C0.75001 18.1689 1.0134 18.8048 1.48224 19.2736C1.95108 19.7425 2.58697 20.0058 3.25001 20.0058H18.25C18.9131 20.0058 19.5489 19.7425 20.0178 19.2736C20.4866 18.8048 20.75 18.1689 20.75 17.5058V9.32501C20.7509 8.99658 20.6867 8.67124 20.5609 8.36783C20.4352 8.06443 20.2505 7.789 20.0175 7.55751V7.55751ZM13.25 18.3392H8.25001V15.0608C8.25001 14.3978 8.5134 13.7619 8.98224 13.2931C9.45109 12.8242 10.087 12.5608 10.75 12.5608C11.4131 12.5608 12.0489 12.8242 12.5178 13.2931C12.9866 13.7619 13.25 14.3978 13.25 15.0608V18.3392ZM19.0833 17.5058C19.0833 17.7269 18.9955 17.9388 18.8393 18.0951C18.683 18.2514 18.471 18.3392 18.25 18.3392H14.9167V15.0608C14.9167 13.9558 14.4777 12.896 13.6963 12.1146C12.9149 11.3332 11.8551 10.8942 10.75 10.8942C9.64494 10.8942 8.58513 11.3332 7.80373 12.1146C7.02233 12.896 6.58334 13.9558 6.58334 15.0608V18.3392H3.25001C3.029 18.3392 2.81704 18.2514 2.66075 18.0951C2.50447 17.9388 2.41668 17.7269 2.41668 17.5058V9.32501C2.41745 9.10416 2.50517 8.8925 2.66084 8.73584L8.98168 2.41668C9.45143 1.94912 10.0872 1.68663 10.75 1.68663C11.4128 1.68663 12.0486 1.94912 12.5183 2.41668L18.8392 8.73834C18.9942 8.89438 19.0819 9.10503 19.0833 9.32501V17.5058Z",
          fill: "#222425"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("clipPath", {
          id: "clip0_551_1636",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
            width: "20",
            height: "20",
            fill: "white",
            transform: "translate(0.75)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }, this)
  }, void 0, false);
}
_c = Home;
;
Home.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Home",
  "props": {
    "isFilled": {
      "required": false,
      "tsType": {
        "name": "boolean"
      },
      "description": "",
      "defaultValue": {
        "value": "false",
        "computed": false
      }
    }
  }
};
var _c;
__webpack_require__.$Refresh$.register(_c, "Home");

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

/***/ "./src/icons/navBar/Ingredients.tsx":
/*!******************************************!*\
  !*** ./src/icons/navBar/Ingredients.tsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ingredients)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/Users/tserra/Documents/git/cook-mate/src/icons/navBar/Ingredients.tsx";

function Ingredients({
  isFilled = false
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: isFilled ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 21 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
        "clip-path": "url(#clip0_551_1279)",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
          d: "M20.25 7.5C20.25 6.83696 19.9866 6.20107 19.5178 5.73223C19.0489 5.26339 18.413 5 17.75 5H15.25C15.25 3.67392 14.7232 2.40215 13.7855 1.46447C12.8479 0.526784 11.5761 0 10.25 0C8.92392 0 7.65215 0.526784 6.71447 1.46447C5.77678 2.40215 5.25 3.67392 5.25 5H2.75C2.08696 5 1.45107 5.26339 0.982233 5.73223C0.513392 6.20107 0.25 6.83696 0.25 7.5L0.25 15.8333C0.251323 16.938 0.690735 17.997 1.47185 18.7782C2.25296 19.5593 3.312 19.9987 4.41667 20H16.0833C17.188 19.9987 18.247 19.5593 19.0282 18.7782C19.8093 17.997 20.2487 16.938 20.25 15.8333V7.5ZM6.91667 5C6.91667 4.11594 7.26786 3.2681 7.89298 2.64298C8.5181 2.01786 9.36594 1.66667 10.25 1.66667C11.1341 1.66667 11.9819 2.01786 12.607 2.64298C13.2321 3.2681 13.5833 4.11594 13.5833 5H6.91667Z",
          fill: "#17A68E"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("clipPath", {
          id: "clip0_551_1279",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
            width: "20",
            height: "20",
            fill: "white",
            transform: "translate(0.25)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 21 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
        "clip-path": "url(#clip0_551_1565)",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
          d: "M17.75 5H15.25C15.25 3.67392 14.7232 2.40215 13.7855 1.46447C12.8479 0.526784 11.5761 0 10.25 0C8.92392 0 7.65215 0.526784 6.71447 1.46447C5.77678 2.40215 5.25 3.67392 5.25 5H2.75C2.08696 5 1.45107 5.26339 0.982233 5.73223C0.513392 6.20107 0.25 6.83696 0.25 7.5L0.25 15.8333C0.251323 16.938 0.690735 17.997 1.47185 18.7782C2.25296 19.5593 3.312 19.9987 4.41667 20H16.0833C17.188 19.9987 18.247 19.5593 19.0282 18.7782C19.8093 17.997 20.2487 16.938 20.25 15.8333V7.5C20.25 6.83696 19.9866 6.20107 19.5178 5.73223C19.0489 5.26339 18.413 5 17.75 5ZM10.25 1.66667C11.1341 1.66667 11.9819 2.01786 12.607 2.64298C13.2321 3.2681 13.5833 4.11594 13.5833 5H6.91667C6.91667 4.11594 7.26786 3.2681 7.89298 2.64298C8.5181 2.01786 9.36594 1.66667 10.25 1.66667V1.66667ZM18.5833 15.8333C18.5833 16.4964 18.3199 17.1323 17.8511 17.6011C17.3823 18.0699 16.7464 18.3333 16.0833 18.3333H4.41667C3.75363 18.3333 3.11774 18.0699 2.6489 17.6011C2.18006 17.1323 1.91667 16.4964 1.91667 15.8333V7.5C1.91667 7.27899 2.00446 7.06702 2.16074 6.91074C2.31702 6.75446 2.52899 6.66667 2.75 6.66667H5.25V8.33333C5.25 8.55435 5.3378 8.76631 5.49408 8.92259C5.65036 9.07887 5.86232 9.16667 6.08333 9.16667C6.30435 9.16667 6.51631 9.07887 6.67259 8.92259C6.82887 8.76631 6.91667 8.55435 6.91667 8.33333V6.66667H13.5833V8.33333C13.5833 8.55435 13.6711 8.76631 13.8274 8.92259C13.9837 9.07887 14.1957 9.16667 14.4167 9.16667C14.6377 9.16667 14.8496 9.07887 15.0059 8.92259C15.1622 8.76631 15.25 8.55435 15.25 8.33333V6.66667H17.75C17.971 6.66667 18.183 6.75446 18.3393 6.91074C18.4955 7.06702 18.5833 7.27899 18.5833 7.5V15.8333Z",
          fill: "#222425"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("clipPath", {
          id: "clip0_551_1565",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
            width: "20",
            height: "20",
            fill: "white",
            transform: "translate(0.25)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, this)
  }, void 0, false);
}
_c = Ingredients;
;
Ingredients.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Ingredients",
  "props": {
    "isFilled": {
      "required": false,
      "tsType": {
        "name": "boolean"
      },
      "description": "",
      "defaultValue": {
        "value": "false",
        "computed": false
      }
    }
  }
};
var _c;
__webpack_require__.$Refresh$.register(_c, "Ingredients");

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

/***/ "./src/icons/navBar/Recipes.tsx":
/*!**************************************!*\
  !*** ./src/icons/navBar/Recipes.tsx ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Recipes)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/Users/tserra/Documents/git/cook-mate/src/icons/navBar/Recipes.tsx";

function Recipes({
  isFilled = false
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: isFilled ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 21 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
        "clip-path": "url(#clip0_551_1362)",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
          d: "M19.25 1.80239C18.7749 1.40602 18.2176 1.12042 17.6184 0.966335C17.0192 0.812246 16.3932 0.793532 15.7858 0.911552L14.3158 1.27155C13.5487 1.41213 12.8551 1.81725 12.3559 2.4164C11.8566 3.01556 11.5832 3.77081 11.5833 4.55072V17.4399C11.0307 17.5207 10.4693 17.5207 9.91667 17.4399V4.55072C9.91943 3.778 9.65237 3.02856 9.16157 2.43172C8.67078 1.83488 7.98703 1.42809 7.22833 1.28155L5.66667 0.901552C5.06596 0.79163 4.44844 0.815094 3.85781 0.970282C3.26718 1.12547 2.71789 1.40859 2.2488 1.7996C1.77972 2.1906 1.40232 2.67994 1.14332 3.23297C0.884315 3.78601 0.750041 4.38921 0.75 4.99989L0.75 13.9941C0.750048 14.9697 1.09248 15.9144 1.71761 16.6635C2.34274 17.4126 3.21092 17.9186 4.17083 18.0932L9.40917 19.0457C10.2958 19.2068 11.2042 19.2068 12.0908 19.0457L17.3333 18.0932C18.2925 17.9177 19.1597 17.4114 19.784 16.6624C20.4083 15.9134 20.7501 14.9691 20.75 13.9941V4.99989C20.7504 4.38942 20.6162 3.78638 20.3569 3.23371C20.0976 2.68104 19.7197 2.19233 19.25 1.80239V1.80239Z",
          fill: "#17A68E"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("clipPath", {
          id: "clip0_551_1362",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
            width: "20",
            height: "20",
            fill: "white",
            transform: "translate(0.75)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 21 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
        "clip-path": "url(#clip0_551_1509)",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
          d: "M19.25 1.80239C18.7815 1.41066 18.2326 1.12688 17.6421 0.971189C17.0516 0.815501 16.434 0.791726 15.8333 0.901552L12.6483 1.47989C11.913 1.61492 11.2444 1.99324 10.75 2.55405C10.2543 1.99227 9.5838 1.61387 8.84667 1.47989L5.66667 0.901552C5.06596 0.79163 4.44844 0.815094 3.85781 0.970282C3.26718 1.12547 2.71789 1.40859 2.2488 1.7996C1.77972 2.1906 1.40232 2.67994 1.14332 3.23297C0.884315 3.78601 0.750041 4.38921 0.75 4.99989L0.75 13.9941C0.750048 14.9697 1.09248 15.9144 1.71761 16.6635C2.34274 17.4126 3.21092 17.9186 4.17083 18.0932L9.40917 19.0457C10.2958 19.2068 11.2042 19.2068 12.0908 19.0457L17.3333 18.0932C18.2925 17.9177 19.1597 17.4114 19.784 16.6624C20.4083 15.9134 20.7501 14.9691 20.75 13.9941V4.99989C20.7504 4.38942 20.6162 3.78638 20.3569 3.23371C20.0976 2.68104 19.7197 2.19233 19.25 1.80239V1.80239ZM9.91667 17.4399C9.84667 17.4299 9.77667 17.4182 9.70667 17.4057L4.46917 16.4541C3.89314 16.3493 3.37216 16.0456 2.99707 15.596C2.62198 15.1465 2.41658 14.5795 2.41667 13.9941V4.99989C2.41667 4.33684 2.68006 3.70096 3.1489 3.23212C3.61774 2.76328 4.25363 2.49989 4.91667 2.49989C5.06758 2.50025 5.21816 2.51391 5.36667 2.54072L8.55 3.12405C8.93301 3.19414 9.27939 3.39611 9.52904 3.69492C9.77868 3.99373 9.91582 4.37052 9.91667 4.75989V17.4399ZM19.0833 13.9941C19.0834 14.5795 18.878 15.1465 18.5029 15.596C18.1278 16.0456 17.6069 16.3493 17.0308 16.4541L11.7933 17.4057C11.7233 17.4182 11.6533 17.4299 11.5833 17.4399V4.75989C11.5833 4.36956 11.7202 3.9916 11.9703 3.69189C12.2203 3.39219 12.5676 3.18975 12.9517 3.11989L16.1358 2.53655C16.4964 2.47094 16.867 2.48543 17.2214 2.57898C17.5758 2.67253 17.9053 2.84285 18.1865 3.07789C18.4678 3.31293 18.6939 3.60693 18.8488 3.93907C19.0038 4.27121 19.0839 4.63337 19.0833 4.99989V13.9941Z",
          fill: "#222425"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("clipPath", {
          id: "clip0_551_1509",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
            width: "20",
            height: "20",
            fill: "white",
            transform: "translate(0.75)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }, this)
  }, void 0, false);
}
_c = Recipes;
;
Recipes.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Recipes",
  "props": {
    "isFilled": {
      "required": false,
      "tsType": {
        "name": "boolean"
      },
      "description": "",
      "defaultValue": {
        "value": "false",
        "computed": false
      }
    }
  }
};
var _c;
__webpack_require__.$Refresh$.register(_c, "Recipes");

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

/***/ "./src/icons/navBar/Videos.tsx":
/*!*************************************!*\
  !*** ./src/icons/navBar/Videos.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Videos)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/Users/tserra/Documents/git/cook-mate/src/icons/navBar/Videos.tsx";

function Videos({
  isFilled = false
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: isFilled ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 21 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
        "clip-path": "url(#clip0_551_1413)",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
          d: "M12.6025 9.75667C12.646 9.78045 12.6821 9.81572 12.707 9.85863C12.7318 9.90153 12.7444 9.95044 12.7433 10C12.7459 10.0423 12.7381 10.0845 12.7206 10.1232C12.7032 10.1618 12.6767 10.1956 12.6433 10.2217L8.16667 12.4617C8.12403 12.4852 8.076 12.4973 8.02729 12.4967C7.97858 12.4961 7.93087 12.4828 7.88884 12.4582C7.84681 12.4335 7.81192 12.3984 7.78757 12.3562C7.76323 12.314 7.75028 12.2662 7.75 12.2175V7.7825C7.74906 7.73305 7.76159 7.68428 7.78625 7.64142C7.81092 7.59855 7.84678 7.5632 7.89 7.53917C7.92978 7.51622 7.97491 7.50415 8.02083 7.50417C8.08803 7.50614 8.15353 7.52568 8.21083 7.56083L12.6025 9.75667ZM20.25 4.16667V15.8333C20.2487 16.938 19.8093 17.997 19.0282 18.7782C18.247 19.5593 17.188 19.9987 16.0833 20H4.41667C3.312 19.9987 2.25296 19.5593 1.47185 18.7782C0.690735 17.997 0.251323 16.938 0.25 15.8333L0.25 4.16667C0.251323 3.062 0.690735 2.00296 1.47185 1.22185C2.25296 0.440735 3.312 0.00132321 4.41667 0L16.0833 0C17.188 0.00132321 18.247 0.440735 19.0282 1.22185C19.8093 2.00296 20.2487 3.062 20.25 4.16667V4.16667ZM14.41 10C14.4103 9.64888 14.3155 9.30425 14.1356 9.00272C13.9557 8.70118 13.6974 8.45402 13.3883 8.2875L8.99 6.09167C8.69375 5.9217 8.35801 5.83263 8.01646 5.83339C7.67492 5.83416 7.33958 5.92473 7.0441 6.09603C6.74861 6.26733 6.50337 6.51332 6.33298 6.80933C6.1626 7.10534 6.07305 7.44095 6.07333 7.7825V12.2175C6.07133 12.559 6.16009 12.8949 6.33053 13.1908C6.50096 13.4867 6.74695 13.732 7.04333 13.9017C7.34334 14.0768 7.68427 14.1697 8.03167 14.1708C8.35305 14.1723 8.66917 14.0892 8.94833 13.93L13.4283 11.6908C13.7279 11.5221 13.9769 11.2764 14.1495 10.9791C14.3221 10.6818 14.412 10.3438 14.41 10V10Z",
          fill: "#17A68E"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("clipPath", {
          id: "clip0_551_1413",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
            width: "20",
            height: "20",
            fill: "white",
            transform: "translate(0.25)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 21 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
        "clip-path": "url(#clip0_551_1435)",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
          d: "M16.0833 20H4.41667C3.312 19.9987 2.25296 19.5593 1.47185 18.7782C0.690735 17.997 0.251323 16.938 0.25 15.8333L0.25 4.16667C0.251323 3.062 0.690735 2.00296 1.47185 1.22185C2.25296 0.440735 3.312 0.00132321 4.41667 0L16.0833 0C17.188 0.00132321 18.247 0.440735 19.0282 1.22185C19.8093 2.00296 20.2487 3.062 20.25 4.16667V15.8333C20.2487 16.938 19.8093 17.997 19.0282 18.7782C18.247 19.5593 17.188 19.9987 16.0833 20V20ZM4.41667 1.66667C3.75363 1.66667 3.11774 1.93006 2.6489 2.3989C2.18006 2.86774 1.91667 3.50363 1.91667 4.16667V15.8333C1.91667 16.4964 2.18006 17.1323 2.6489 17.6011C3.11774 18.0699 3.75363 18.3333 4.41667 18.3333H16.0833C16.7464 18.3333 17.3823 18.0699 17.8511 17.6011C18.3199 17.1323 18.5833 16.4964 18.5833 15.8333V4.16667C18.5833 3.50363 18.3199 2.86774 17.8511 2.3989C17.3823 1.93006 16.7464 1.66667 16.0833 1.66667H4.41667ZM8.035 14.1708C7.68761 14.1697 7.34668 14.0768 7.04667 13.9017C6.75029 13.732 6.50429 13.4867 6.33386 13.1908C6.16342 12.8949 6.07467 12.559 6.07667 12.2175V7.7825C6.07638 7.44095 6.16593 7.10534 6.33632 6.80933C6.50671 6.51332 6.75195 6.26733 7.04743 6.09603C7.34291 5.92473 7.67825 5.83416 8.0198 5.83339C8.36134 5.83263 8.69708 5.9217 8.99333 6.09167L13.3917 8.2875C13.6972 8.45243 13.953 8.69606 14.1327 8.99315C14.3124 9.29025 14.4093 9.62998 14.4135 9.97715C14.4176 10.3243 14.3289 10.6663 14.1564 10.9676C13.9839 11.2689 13.734 11.5186 13.4325 11.6908L8.9525 13.93C8.67309 14.0894 8.35667 14.1724 8.035 14.1708V14.1708ZM8.01417 7.50417C7.96824 7.50415 7.92312 7.51622 7.88333 7.53917C7.84011 7.5632 7.80425 7.59855 7.77959 7.64142C7.75492 7.68428 7.74239 7.73305 7.74333 7.7825V12.2175C7.74362 12.2662 7.75656 12.314 7.78091 12.3562C7.80525 12.3984 7.84015 12.4335 7.88218 12.4582C7.9242 12.4828 7.97192 12.4961 8.02062 12.4967C8.06933 12.4973 8.11736 12.4852 8.16 12.4617L12.64 10.2217C12.6734 10.1956 12.6999 10.1618 12.7173 10.1232C12.7347 10.0845 12.7425 10.0423 12.74 10C12.741 9.95044 12.7285 9.90153 12.7036 9.85863C12.6788 9.81572 12.6427 9.78045 12.5992 9.75667L8.20417 7.56083C8.14687 7.52568 8.08136 7.50614 8.01417 7.50417V7.50417Z",
          fill: "#222425"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("clipPath", {
          id: "clip0_551_1435",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
            width: "20",
            height: "20",
            fill: "white",
            transform: "translate(0.25)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, this)
  }, void 0, false);
}
_c = Videos;
;
Videos.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Videos",
  "props": {
    "isFilled": {
      "required": false,
      "tsType": {
        "name": "boolean"
      },
      "description": "",
      "defaultValue": {
        "value": "false",
        "computed": false
      }
    }
  }
};
var _c;
__webpack_require__.$Refresh$.register(_c, "Videos");

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
//# sourceMappingURL=components-ui-footer-navBar-NavBar-stories.iframe.bundle.js.map