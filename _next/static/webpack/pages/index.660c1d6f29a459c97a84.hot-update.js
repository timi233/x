webpackHotUpdate_N_E("pages/index",{

/***/ "./components/System/Icon.tsx":
/*!************************************!*\
  !*** ./components/System/Icon.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime.js */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_icons_games_doom_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/public/icons/games/doom.png */ \"./public/icons/games/doom.png\");\n/* harmony import */ var _public_icons_games_doom_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_icons_games_doom_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_icons_programs_dos_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/public/icons/programs/dos.png */ \"./public/icons/programs/dos.png\");\n/* harmony import */ var _public_icons_programs_dos_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_icons_programs_dos_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_icons_programs_explorer_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/public/icons/programs/explorer.png */ \"./public/icons/programs/explorer.png\");\n/* harmony import */ var _public_icons_programs_explorer_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_icons_programs_explorer_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_icons_files_js_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/public/icons/files/js.svg */ \"./public/icons/files/js.svg\");\n/* harmony import */ var _public_icons_files_js_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_icons_files_js_svg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_icons_games_keen_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/public/icons/games/keen.png */ \"./public/icons/games/keen.png\");\n/* harmony import */ var _public_icons_games_keen_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_icons_games_keen_png__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public_icons_files_unknown_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/public/icons/files/unknown.svg */ \"./public/icons/files/unknown.svg\");\n/* harmony import */ var _public_icons_files_unknown_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_icons_files_unknown_svg__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_icons_programs_winamp_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/public/icons/programs/winamp.png */ \"./public/icons/programs/winamp.png\");\n/* harmony import */ var _public_icons_programs_winamp_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_icons_programs_winamp_png__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_optimized_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-optimized-image */ \"./node_modules/react-optimized-image/lib/index.js\");\n/* harmony import */ var react_optimized_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_optimized_image__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! path */ \"./node_modules/node-libs-browser/node_modules/path-browserify/index.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n\n\nvar _jsxFileName = \"/Users/dustin/Git/x/components/System/Icon.tsx\",\n    _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\nvar iconDirectory = {\n  '/icons/files/js.svg': {\n    alt: 'JavaScript',\n    img: _public_icons_files_js_svg__WEBPACK_IMPORTED_MODULE_4___default.a\n  },\n  '/icons/files/unknown.svg': {\n    alt: 'Unknown',\n    img: _public_icons_files_unknown_svg__WEBPACK_IMPORTED_MODULE_6___default.a\n  },\n  '/icons/games/doom.png': {\n    alt: 'Doom',\n    img: _public_icons_games_doom_png__WEBPACK_IMPORTED_MODULE_1___default.a\n  },\n  '/icons/games/keen.png': {\n    alt: 'Commander Keen',\n    img: _public_icons_games_keen_png__WEBPACK_IMPORTED_MODULE_5___default.a\n  },\n  '/icons/programs/dos.png': {\n    alt: 'DOS',\n    img: _public_icons_programs_dos_png__WEBPACK_IMPORTED_MODULE_2___default.a\n  },\n  '/icons/programs/explorer.png': {\n    alt: 'Explorer',\n    img: _public_icons_programs_explorer_png__WEBPACK_IMPORTED_MODULE_3___default.a\n  },\n  '/icons/programs/winamp.png': {\n    alt: 'Winamp',\n    img: _public_icons_programs_winamp_png__WEBPACK_IMPORTED_MODULE_7___default.a\n  }\n}; // const Icon: React.FC<IconProps> = ({ height, src, width }) => {\n//   const { alt, img } = iconDirectory[src];\n//   console.log(alt, img);\n//   return <Img\n//     alt={alt || basename(src)}\n//     height={height}\n//     src={img || src}\n//     width={width}\n//   />;\n// };\n\nvar Icon = function Icon(_ref) {\n  var src = _ref.src,\n      width = _ref.width,\n      height = _ref.height;\n\n  switch (src) {\n    case '/icons/files/js.svg':\n      return /*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_optimized_image__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        src: __webpack_require__(/*! @/public/icons/files/js.svg?url */ \"./public/icons/files/js.svg?url\"),\n        alt: \"JavaScript\",\n        url: true,\n        rawSrc: {\n          fallback: {\n            original: {\n              1: __webpack_require__(/*! @/public/icons/files/js.svg?url */ \"./public/icons/files/js.svg?url\")\n            }\n          }\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 14\n      }, _this);\n\n    case '/icons/files/unknown.svg':\n      return /*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_optimized_image__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        src: __webpack_require__(/*! @/public/icons/files/unknown.svg?url */ \"./public/icons/files/unknown.svg?url\"),\n        alt: \"Unknown\",\n        url: true,\n        rawSrc: {\n          fallback: {\n            original: {\n              1: __webpack_require__(/*! @/public/icons/files/unknown.svg?url */ \"./public/icons/files/unknown.svg?url\")\n            }\n          }\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 14\n      }, _this);\n\n    case '/icons/games/doom.png':\n      return /*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_optimized_image__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        src: _public_icons_games_doom_png__WEBPACK_IMPORTED_MODULE_1___default.a,\n        alt: \"Doom\",\n        type: \"icon\",\n        webp: true,\n        sizes: [16, 42, 126],\n        rawSrc: {\n          fallback: {\n            16: {\n              1: __webpack_require__(/*! @/public/icons/games/doom.png?url&width=16 */ \"./public/icons/games/doom.png?url&width=16\")\n            },\n            42: {\n              1: __webpack_require__(/*! @/public/icons/games/doom.png?url&width=42 */ \"./public/icons/games/doom.png?url&width=42\")\n            },\n            126: {\n              1: __webpack_require__(/*! @/public/icons/games/doom.png?url&width=126 */ \"./public/icons/games/doom.png?url&width=126\")\n            }\n          },\n          webp: {\n            16: {\n              1: __webpack_require__(/*! @/public/icons/games/doom.png?webp&url&width=16 */ \"./public/icons/games/doom.png?webp&url&width=16\")\n            },\n            42: {\n              1: __webpack_require__(/*! @/public/icons/games/doom.png?webp&url&width=42 */ \"./public/icons/games/doom.png?webp&url&width=42\")\n            },\n            126: {\n              1: __webpack_require__(/*! @/public/icons/games/doom.png?webp&url&width=126 */ \"./public/icons/games/doom.png?webp&url&width=126\")\n            }\n          }\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 14\n      }, _this);\n\n    case '/icons/games/keen.png':\n      return /*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_optimized_image__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        src: _public_icons_games_keen_png__WEBPACK_IMPORTED_MODULE_5___default.a,\n        alt: \"Commander Keen\",\n        type: \"icon\",\n        webp: true,\n        sizes: [16, 42, 126],\n        rawSrc: {\n          fallback: {\n            16: {\n              1: __webpack_require__(/*! @/public/icons/games/keen.png?url&width=16 */ \"./public/icons/games/keen.png?url&width=16\")\n            },\n            42: {\n              1: __webpack_require__(/*! @/public/icons/games/keen.png?url&width=42 */ \"./public/icons/games/keen.png?url&width=42\")\n            },\n            126: {\n              1: __webpack_require__(/*! @/public/icons/games/keen.png?url&width=126 */ \"./public/icons/games/keen.png?url&width=126\")\n            }\n          },\n          webp: {\n            16: {\n              1: __webpack_require__(/*! @/public/icons/games/keen.png?webp&url&width=16 */ \"./public/icons/games/keen.png?webp&url&width=16\")\n            },\n            42: {\n              1: __webpack_require__(/*! @/public/icons/games/keen.png?webp&url&width=42 */ \"./public/icons/games/keen.png?webp&url&width=42\")\n            },\n            126: {\n              1: __webpack_require__(/*! @/public/icons/games/keen.png?webp&url&width=126 */ \"./public/icons/games/keen.png?webp&url&width=126\")\n            }\n          }\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 14\n      }, _this);\n\n    case '/icons/programs/dos.png':\n      return /*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_optimized_image__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        src: __webpack_require__(/*! @/public/icons/programs/dos.png?url */ \"./public/icons/programs/dos.png?url\"),\n        alt: \"DOS\",\n        url: true,\n        rawSrc: {\n          fallback: {\n            original: {\n              1: __webpack_require__(/*! @/public/icons/programs/dos.png?url */ \"./public/icons/programs/dos.png?url\")\n            }\n          }\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 14\n      }, _this);\n\n    case '/icons/programs/explorer.png':\n      return /*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_optimized_image__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        src: _public_icons_programs_explorer_png__WEBPACK_IMPORTED_MODULE_3___default.a,\n        alt: \"Explorer\",\n        type: \"icon\",\n        webp: true,\n        sizes: [16, 42, 126],\n        rawSrc: {\n          fallback: {\n            16: {\n              1: __webpack_require__(/*! @/public/icons/programs/explorer.png?url&width=16 */ \"./public/icons/programs/explorer.png?url&width=16\")\n            },\n            42: {\n              1: __webpack_require__(/*! @/public/icons/programs/explorer.png?url&width=42 */ \"./public/icons/programs/explorer.png?url&width=42\")\n            },\n            126: {\n              1: __webpack_require__(/*! @/public/icons/programs/explorer.png?url&width=126 */ \"./public/icons/programs/explorer.png?url&width=126\")\n            }\n          },\n          webp: {\n            16: {\n              1: __webpack_require__(/*! @/public/icons/programs/explorer.png?webp&url&width=16 */ \"./public/icons/programs/explorer.png?webp&url&width=16\")\n            },\n            42: {\n              1: __webpack_require__(/*! @/public/icons/programs/explorer.png?webp&url&width=42 */ \"./public/icons/programs/explorer.png?webp&url&width=42\")\n            },\n            126: {\n              1: __webpack_require__(/*! @/public/icons/programs/explorer.png?webp&url&width=126 */ \"./public/icons/programs/explorer.png?webp&url&width=126\")\n            }\n          }\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 14\n      }, _this);\n\n    case '/icons/programs/winamp.png':\n      return /*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_optimized_image__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        src: _public_icons_programs_winamp_png__WEBPACK_IMPORTED_MODULE_7___default.a,\n        alt: \"Winamp\",\n        type: \"icon\",\n        webp: true,\n        sizes: [16, 42, 126],\n        rawSrc: {\n          fallback: {\n            16: {\n              1: __webpack_require__(/*! @/public/icons/programs/winamp.png?url&width=16 */ \"./public/icons/programs/winamp.png?url&width=16\")\n            },\n            42: {\n              1: __webpack_require__(/*! @/public/icons/programs/winamp.png?url&width=42 */ \"./public/icons/programs/winamp.png?url&width=42\")\n            },\n            126: {\n              1: __webpack_require__(/*! @/public/icons/programs/winamp.png?url&width=126 */ \"./public/icons/programs/winamp.png?url&width=126\")\n            }\n          },\n          webp: {\n            16: {\n              1: __webpack_require__(/*! @/public/icons/programs/winamp.png?webp&url&width=16 */ \"./public/icons/programs/winamp.png?webp&url&width=16\")\n            },\n            42: {\n              1: __webpack_require__(/*! @/public/icons/programs/winamp.png?webp&url&width=42 */ \"./public/icons/programs/winamp.png?webp&url&width=42\")\n            },\n            126: {\n              1: __webpack_require__(/*! @/public/icons/programs/winamp.png?webp&url&width=126 */ \"./public/icons/programs/winamp.png?webp&url&width=126\")\n            }\n          }\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 14\n      }, _this);\n\n    default:\n      return /*#__PURE__*/Object(react_jsx_dev_runtime_js__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        alt: Object(path__WEBPACK_IMPORTED_MODULE_9__[\"basename\"])(src),\n        src: src\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 14\n      }, _this);\n  }\n};\n\n_c = Icon;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_10__[\"memo\"])(Icon));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Icon\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vSWNvbi50c3g/NzM5YSJdLCJuYW1lcyI6WyJpY29uRGlyZWN0b3J5IiwiYWx0IiwiaW1nIiwiSnNGaWxlSW1hZ2UiLCJVbmtub3duRmlsZUltYWdlIiwiRG9vbUltYWdlIiwiS2VlbkltYWdlIiwiRG9zSW1hZ2UiLCJFeHBsb3JlckltYWdlIiwiV2luYW1wSW1hZ2UiLCJJY29uIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJiYXNlbmFtZSIsIm1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBLElBQU1BLGFBQThELEdBQUc7QUFDckUseUJBQXVCO0FBQ3JCQyxPQUFHLEVBQUUsWUFEZ0I7QUFFckJDLE9BQUcsRUFBRUMsaUVBQVdBO0FBRkssR0FEOEM7QUFLckUsOEJBQTRCO0FBQzFCRixPQUFHLEVBQUUsU0FEcUI7QUFFMUJDLE9BQUcsRUFBRUUsc0VBQWdCQTtBQUZLLEdBTHlDO0FBU3JFLDJCQUF5QjtBQUN2QkgsT0FBRyxFQUFFLE1BRGtCO0FBRXZCQyxPQUFHLEVBQUVHLG1FQUFTQTtBQUZTLEdBVDRDO0FBYXJFLDJCQUF5QjtBQUN2QkosT0FBRyxFQUFFLGdCQURrQjtBQUV2QkMsT0FBRyxFQUFFSSxtRUFBU0E7QUFGUyxHQWI0QztBQWlCckUsNkJBQTJCO0FBQ3pCTCxPQUFHLEVBQUUsS0FEb0I7QUFFekJDLE9BQUcsRUFBRUsscUVBQVFBO0FBRlksR0FqQjBDO0FBcUJyRSxrQ0FBZ0M7QUFDOUJOLE9BQUcsRUFBRSxVQUR5QjtBQUU5QkMsT0FBRyxFQUFFTSwwRUFBYUE7QUFGWSxHQXJCcUM7QUF5QnJFLGdDQUE4QjtBQUM1QlAsT0FBRyxFQUFFLFFBRHVCO0FBRTVCQyxPQUFHLEVBQUVPLHdFQUFXQTtBQUZZO0FBekJ1QyxDQUF2RSxDLENBK0JBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1DLElBQW1CLEdBQUcsU0FBdEJBLElBQXNCLE9BQTRCO0FBQUEsTUFBekJDLEdBQXlCLFFBQXpCQSxHQUF5QjtBQUFBLE1BQXBCQyxLQUFvQixRQUFwQkEsS0FBb0I7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQ3RELFVBQVFGLEdBQVI7QUFDRSxTQUFLLHFCQUFMO0FBQ0UsMEJBQU8sd0VBQUMsNERBQUQ7QUFBSyxXQUFHLCtGQUFSO0FBQXVCLFdBQUcsRUFBQyxZQUEzQjtBQUF3QyxXQUFHLE1BQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7O0FBQ0YsU0FBSywwQkFBTDtBQUNFLDBCQUFPLHdFQUFDLDREQUFEO0FBQUssV0FBRyx5R0FBUjtBQUE0QixXQUFHLEVBQUMsU0FBaEM7QUFBMEMsV0FBRyxNQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQOztBQUNGLFNBQUssdUJBQUw7QUFDRSwwQkFBTyx3RUFBQyw0REFBRDtBQUFLLFdBQUcsRUFBRU4sbUVBQVY7QUFBcUIsV0FBRyxFQUFDLE1BQXpCO0FBQWdDLFlBQUksRUFBQyxNQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7O0FBQ0YsU0FBSyx1QkFBTDtBQUNFLDBCQUFPLHdFQUFDLDREQUFEO0FBQUssV0FBRyxFQUFFQyxtRUFBVjtBQUFxQixXQUFHLEVBQUMsZ0JBQXpCO0FBQTBDLFlBQUksRUFBQyxNQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7O0FBQ0YsU0FBSyx5QkFBTDtBQUNFLDBCQUFPLHdFQUFDLDREQUFEO0FBQUssV0FBRyx1R0FBUjtBQUFvQixXQUFHLEVBQUMsS0FBeEI7QUFBOEIsV0FBRyxNQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQOztBQUNGLFNBQUssOEJBQUw7QUFDRSwwQkFBTyx3RUFBQyw0REFBRDtBQUFLLFdBQUcsRUFBRUUsMEVBQVY7QUFBeUIsV0FBRyxFQUFDLFVBQTdCO0FBQXdDLFlBQUksRUFBQyxNQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7O0FBQ0YsU0FBSyw0QkFBTDtBQUNFLDBCQUFPLHdFQUFDLDREQUFEO0FBQUssV0FBRyxFQUFFQyx3RUFBVjtBQUF1QixXQUFHLEVBQUMsUUFBM0I7QUFBb0MsWUFBSSxFQUFDLE1BQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDs7QUFDRjtBQUNFLDBCQUFPO0FBQUssV0FBRyxFQUFFSyxxREFBUSxDQUFDSCxHQUFELENBQWxCO0FBQXlCLFdBQUcsRUFBRUE7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBaEJKO0FBa0JELENBbkJEOztLQUFNRCxJO0FBcUJTLGtGQUFBSyxtREFBSSxDQUFDTCxJQUFELENBQW5CIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TeXN0ZW0vSWNvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRG9vbUltYWdlIGZyb20gJ0AvcHVibGljL2ljb25zL2dhbWVzL2Rvb20ucG5nJztcbmltcG9ydCBEb3NJbWFnZSBmcm9tICdAL3B1YmxpYy9pY29ucy9wcm9ncmFtcy9kb3MucG5nJztcbmltcG9ydCBFeHBsb3JlckltYWdlIGZyb20gJ0AvcHVibGljL2ljb25zL3Byb2dyYW1zL2V4cGxvcmVyLnBuZyc7XG5pbXBvcnQgSnNGaWxlSW1hZ2UgZnJvbSAnQC9wdWJsaWMvaWNvbnMvZmlsZXMvanMuc3ZnJztcbmltcG9ydCBLZWVuSW1hZ2UgZnJvbSAnQC9wdWJsaWMvaWNvbnMvZ2FtZXMva2Vlbi5wbmcnO1xuaW1wb3J0IFVua25vd25GaWxlSW1hZ2UgZnJvbSAnQC9wdWJsaWMvaWNvbnMvZmlsZXMvdW5rbm93bi5zdmcnO1xuaW1wb3J0IFdpbmFtcEltYWdlIGZyb20gJ0AvcHVibGljL2ljb25zL3Byb2dyYW1zL3dpbmFtcC5wbmcnO1xuXG5pbXBvcnQgSW1nIGZyb20gJ3JlYWN0LW9wdGltaXplZC1pbWFnZSc7XG5pbXBvcnQgeyBiYXNlbmFtZSB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgbWVtbyB9IGZyb20gJ3JlYWN0JztcblxudHlwZSBJY29uUHJvcHMgPSB7IGhlaWdodDogbnVtYmVyLCBzcmM6IHN0cmluZywgd2lkdGg6IG51bWJlciB9O1xuXG5jb25zdCBpY29uRGlyZWN0b3J5OiB7IFtrZXk6IHN0cmluZ106IHsgYWx0OiBzdHJpbmcsIGltZzogSW1nU3JjIH0gfSA9IHtcbiAgJy9pY29ucy9maWxlcy9qcy5zdmcnOiB7XG4gICAgYWx0OiAnSmF2YVNjcmlwdCcsXG4gICAgaW1nOiBKc0ZpbGVJbWFnZVxuICB9LFxuICAnL2ljb25zL2ZpbGVzL3Vua25vd24uc3ZnJzoge1xuICAgIGFsdDogJ1Vua25vd24nLFxuICAgIGltZzogVW5rbm93bkZpbGVJbWFnZVxuICB9LFxuICAnL2ljb25zL2dhbWVzL2Rvb20ucG5nJzoge1xuICAgIGFsdDogJ0Rvb20nLFxuICAgIGltZzogRG9vbUltYWdlXG4gIH0sXG4gICcvaWNvbnMvZ2FtZXMva2Vlbi5wbmcnOiB7XG4gICAgYWx0OiAnQ29tbWFuZGVyIEtlZW4nLFxuICAgIGltZzogS2VlbkltYWdlXG4gIH0sXG4gICcvaWNvbnMvcHJvZ3JhbXMvZG9zLnBuZyc6IHtcbiAgICBhbHQ6ICdET1MnLFxuICAgIGltZzogRG9zSW1hZ2VcbiAgfSxcbiAgJy9pY29ucy9wcm9ncmFtcy9leHBsb3Jlci5wbmcnOiB7XG4gICAgYWx0OiAnRXhwbG9yZXInLFxuICAgIGltZzogRXhwbG9yZXJJbWFnZVxuICB9LFxuICAnL2ljb25zL3Byb2dyYW1zL3dpbmFtcC5wbmcnOiB7XG4gICAgYWx0OiAnV2luYW1wJyxcbiAgICBpbWc6IFdpbmFtcEltYWdlXG4gIH1cbn07XG5cbi8vIGNvbnN0IEljb246IFJlYWN0LkZDPEljb25Qcm9wcz4gPSAoeyBoZWlnaHQsIHNyYywgd2lkdGggfSkgPT4ge1xuLy8gICBjb25zdCB7IGFsdCwgaW1nIH0gPSBpY29uRGlyZWN0b3J5W3NyY107XG5cbi8vICAgY29uc29sZS5sb2coYWx0LCBpbWcpO1xuXG4vLyAgIHJldHVybiA8SW1nXG4vLyAgICAgYWx0PXthbHQgfHwgYmFzZW5hbWUoc3JjKX1cbi8vICAgICBoZWlnaHQ9e2hlaWdodH1cbi8vICAgICBzcmM9e2ltZyB8fCBzcmN9XG4vLyAgICAgd2lkdGg9e3dpZHRofVxuLy8gICAvPjtcbi8vIH07XG5cbmNvbnN0IEljb246IFJlYWN0LkZDPGFueT4gPSAoeyBzcmMsIHdpZHRoLCBoZWlnaHQgfSkgPT4ge1xuICBzd2l0Y2ggKHNyYykge1xuICAgIGNhc2UgJy9pY29ucy9maWxlcy9qcy5zdmcnOlxuICAgICAgcmV0dXJuIDxJbWcgc3JjPXtKc0ZpbGVJbWFnZX0gYWx0PVwiSmF2YVNjcmlwdFwiIHVybCAvPjtcbiAgICBjYXNlICcvaWNvbnMvZmlsZXMvdW5rbm93bi5zdmcnOlxuICAgICAgcmV0dXJuIDxJbWcgc3JjPXtVbmtub3duRmlsZUltYWdlfSBhbHQ9XCJVbmtub3duXCIgdXJsIC8+O1xuICAgIGNhc2UgJy9pY29ucy9nYW1lcy9kb29tLnBuZyc6XG4gICAgICByZXR1cm4gPEltZyBzcmM9e0Rvb21JbWFnZX0gYWx0PVwiRG9vbVwiIHR5cGU9XCJpY29uXCIgLz47XG4gICAgY2FzZSAnL2ljb25zL2dhbWVzL2tlZW4ucG5nJzpcbiAgICAgIHJldHVybiA8SW1nIHNyYz17S2VlbkltYWdlfSBhbHQ9XCJDb21tYW5kZXIgS2VlblwiIHR5cGU9XCJpY29uXCIgLz47XG4gICAgY2FzZSAnL2ljb25zL3Byb2dyYW1zL2Rvcy5wbmcnOlxuICAgICAgcmV0dXJuIDxJbWcgc3JjPXtEb3NJbWFnZX0gYWx0PVwiRE9TXCIgdXJsIC8+O1xuICAgIGNhc2UgJy9pY29ucy9wcm9ncmFtcy9leHBsb3Jlci5wbmcnOlxuICAgICAgcmV0dXJuIDxJbWcgc3JjPXtFeHBsb3JlckltYWdlfSBhbHQ9XCJFeHBsb3JlclwiIHR5cGU9XCJpY29uXCIgLz47XG4gICAgY2FzZSAnL2ljb25zL3Byb2dyYW1zL3dpbmFtcC5wbmcnOlxuICAgICAgcmV0dXJuIDxJbWcgc3JjPXtXaW5hbXBJbWFnZX0gYWx0PVwiV2luYW1wXCIgdHlwZT1cImljb25cIiAvPjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIDxpbWcgYWx0PXtiYXNlbmFtZShzcmMpfSBzcmM9e3NyY30gLz47XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oSWNvbik7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/System/Icon.tsx\n");

/***/ }),

/***/ "./public/icons/files/js.svg?url":
/*!***************************************!*\
  !*** ./public/icons/files/js.svg?url ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var src = \"/_next/static/chunks/images/js-96b35695336b7768cd8cfff47bc5179f.svg\";module.exports={src:src,width:56,height:56,format:\"svg\",toString:function(){return src;}};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2ljb25zL2ZpbGVzL2pzLnN2Zz9hYzJhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdGQUFnRixnQkFBZ0IsNERBQTREIiwiZmlsZSI6Ii4vcHVibGljL2ljb25zL2ZpbGVzL2pzLnN2Zz91cmwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgc3JjID0gXCIvX25leHQvc3RhdGljL2NodW5rcy9pbWFnZXMvanMtOTZiMzU2OTUzMzZiNzc2OGNkOGNmZmY0N2JjNTE3OWYuc3ZnXCI7bW9kdWxlLmV4cG9ydHM9e3NyYzpzcmMsd2lkdGg6NTYsaGVpZ2h0OjU2LGZvcm1hdDpcInN2Z1wiLHRvU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIHNyYzt9fTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/icons/files/js.svg?url\n");

/***/ }),

/***/ "./public/icons/files/unknown.svg?url":
/*!********************************************!*\
  !*** ./public/icons/files/unknown.svg?url ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var src = \"/_next/static/chunks/images/unknown-84d4d39afb1efa7e0f3247d0df1c9269.svg\";module.exports={src:src,width:56,height:56,format:\"svg\",toString:function(){return src;}};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2ljb25zL2ZpbGVzL3Vua25vd24uc3ZnPzhkNDMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUZBQXFGLGdCQUFnQiw0REFBNEQiLCJmaWxlIjoiLi9wdWJsaWMvaWNvbnMvZmlsZXMvdW5rbm93bi5zdmc/dXJsLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHNyYyA9IFwiL19uZXh0L3N0YXRpYy9jaHVua3MvaW1hZ2VzL3Vua25vd24tODRkNGQzOWFmYjFlZmE3ZTBmMzI0N2QwZGYxYzkyNjkuc3ZnXCI7bW9kdWxlLmV4cG9ydHM9e3NyYzpzcmMsd2lkdGg6NTYsaGVpZ2h0OjU2LGZvcm1hdDpcInN2Z1wiLHRvU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIHNyYzt9fTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/icons/files/unknown.svg?url\n");

/***/ }),

/***/ "./public/icons/games/doom.png?url&width=126":
/*!***************************************************!*\
  !*** ./public/icons/games/doom.png?url&width=126 ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var src = \"/_next/static/chunks/images/doom-10214c4c8d058b8cac6a37303dcbc4fa.png\";module.exports={src:src,width:126,height:126,format:\"png\",toString:function(){return src;}};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2ljb25zL2dhbWVzL2Rvb20ucG5nPzM3NTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0ZBQWtGLGdCQUFnQiw4REFBOEQiLCJmaWxlIjoiLi9wdWJsaWMvaWNvbnMvZ2FtZXMvZG9vbS5wbmc/dXJsJndpZHRoPTEyNi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBzcmMgPSBcIi9fbmV4dC9zdGF0aWMvY2h1bmtzL2ltYWdlcy9kb29tLTEwMjE0YzRjOGQwNThiOGNhYzZhMzczMDNkY2JjNGZhLnBuZ1wiO21vZHVsZS5leHBvcnRzPXtzcmM6c3JjLHdpZHRoOjEyNixoZWlnaHQ6MTI2LGZvcm1hdDpcInBuZ1wiLHRvU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIHNyYzt9fTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/icons/games/doom.png?url&width=126\n");

/***/ }),

/***/ "./public/icons/games/doom.png?url&width=16":
/*!**************************************************!*\
  !*** ./public/icons/games/doom.png?url&width=16 ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var src = \"/_next/static/chunks/images/doom-8f70437d9e2e2d7f2d6477618e9bc5b4.png\";module.exports={src:src,width:16,height:16,format:\"png\",toString:function(){return src;}};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2ljb25zL2dhbWVzL2Rvb20ucG5nP2Y4MmUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0ZBQWtGLGdCQUFnQiw0REFBNEQiLCJmaWxlIjoiLi9wdWJsaWMvaWNvbnMvZ2FtZXMvZG9vbS5wbmc/dXJsJndpZHRoPTE2LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHNyYyA9IFwiL19uZXh0L3N0YXRpYy9jaHVua3MvaW1hZ2VzL2Rvb20tOGY3MDQzN2Q5ZTJlMmQ3ZjJkNjQ3NzYxOGU5YmM1YjQucG5nXCI7bW9kdWxlLmV4cG9ydHM9e3NyYzpzcmMsd2lkdGg6MTYsaGVpZ2h0OjE2LGZvcm1hdDpcInBuZ1wiLHRvU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIHNyYzt9fTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/icons/games/doom.png?url&width=16\n");

/***/ }),

/***/ "./public/icons/games/doom.png?url&width=42":
/*!**************************************************!*\
  !*** ./public/icons/games/doom.png?url&width=42 ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var src = \"/_next/static/chunks/images/doom-515c788065b4af109eea0f36b8c35b0d.png\";module.exports={src:src,width:42,height:42,format:\"png\",toString:function(){return src;}};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2ljb25zL2dhbWVzL2Rvb20ucG5nP2JhYTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0ZBQWtGLGdCQUFnQiw0REFBNEQiLCJmaWxlIjoiLi9wdWJsaWMvaWNvbnMvZ2FtZXMvZG9vbS5wbmc/dXJsJndpZHRoPTQyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHNyYyA9IFwiL19uZXh0L3N0YXRpYy9jaHVua3MvaW1hZ2VzL2Rvb20tNTE1Yzc4ODA2NWI0YWYxMDllZWEwZjM2YjhjMzViMGQucG5nXCI7bW9kdWxlLmV4cG9ydHM9e3NyYzpzcmMsd2lkdGg6NDIsaGVpZ2h0OjQyLGZvcm1hdDpcInBuZ1wiLHRvU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIHNyYzt9fTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/icons/games/doom.png?url&width=42\n");

/***/ }),

/***/ "./public/icons/games/doom.png?webp&url&width=126":
/*!********************************************************!*\
  !*** ./public/icons/games/doom.png?webp&url&width=126 ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var src = \"/_next/static/chunks/images/doom-ee47becf3635bc17d7dd27893158a48a.webp\";module.exports={src:src,width:126,height:126,format:\"webp\",toString:function(){return src;}};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2ljb25zL2dhbWVzL2Rvb20ucG5nP2JmYTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUZBQW1GLGdCQUFnQiwrREFBK0QiLCJmaWxlIjoiLi9wdWJsaWMvaWNvbnMvZ2FtZXMvZG9vbS5wbmc/d2VicCZ1cmwmd2lkdGg9MTI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHNyYyA9IFwiL19uZXh0L3N0YXRpYy9jaHVua3MvaW1hZ2VzL2Rvb20tZWU0N2JlY2YzNjM1YmMxN2Q3ZGQyNzg5MzE1OGE0OGEud2VicFwiO21vZHVsZS5leHBvcnRzPXtzcmM6c3JjLHdpZHRoOjEyNixoZWlnaHQ6MTI2LGZvcm1hdDpcIndlYnBcIix0b1N0cmluZzpmdW5jdGlvbigpe3JldHVybiBzcmM7fX07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/icons/games/doom.png?webp&url&width=126\n");

/***/ }),

/***/ "./public/icons/games/doom.png?webp&url&width=16":
/*!*******************************************************!*\
  !*** ./public/icons/games/doom.png?webp&url&width=16 ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var src = \"/_next/static/chunks/images/doom-9ec1d2b99d5061061606f85cba43fc9b.webp\";module.exports={src:src,width:16,height:16,format:\"webp\",toString:function(){return src;}};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2ljb25zL2dhbWVzL2Rvb20ucG5nPzNlNDYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUZBQW1GLGdCQUFnQiw2REFBNkQiLCJmaWxlIjoiLi9wdWJsaWMvaWNvbnMvZ2FtZXMvZG9vbS5wbmc/d2VicCZ1cmwmd2lkdGg9MTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgc3JjID0gXCIvX25leHQvc3RhdGljL2NodW5rcy9pbWFnZXMvZG9vbS05ZWMxZDJiOTlkNTA2MTA2MTYwNmY4NWNiYTQzZmM5Yi53ZWJwXCI7bW9kdWxlLmV4cG9ydHM9e3NyYzpzcmMsd2lkdGg6MTYsaGVpZ2h0OjE2LGZvcm1hdDpcIndlYnBcIix0b1N0cmluZzpmdW5jdGlvbigpe3JldHVybiBzcmM7fX07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/icons/games/doom.png?webp&url&width=16\n");

/***/ }),

/***/ "./public/icons/games/doom.png?webp&url&width=42":
/*!*******************************************************!*\
  !*** ./public/icons/games/doom.png?webp&url&width=42 ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var src = \"/_next/static/chunks/images/doom-c9dbd079f3494178c9a8f63aaab7fc2d.webp\";module.exports={src:src,width:42,height:42,format:\"webp\",toString:function(){return src;}};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2ljb25zL2dhbWVzL2Rvb20ucG5nPzBhM2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUZBQW1GLGdCQUFnQiw2REFBNkQiLCJmaWxlIjoiLi9wdWJsaWMvaWNvbnMvZ2FtZXMvZG9vbS5wbmc/d2VicCZ1cmwmd2lkdGg9NDIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgc3JjID0gXCIvX25leHQvc3RhdGljL2NodW5rcy9pbWFnZXMvZG9vbS1jOWRiZDA3OWYzNDk0MTc4YzlhOGY2M2FhYWI3ZmMyZC53ZWJwXCI7bW9kdWxlLmV4cG9ydHM9e3NyYzpzcmMsd2lkdGg6NDIsaGVpZ2h0OjQyLGZvcm1hdDpcIndlYnBcIix0b1N0cmluZzpmdW5jdGlvbigpe3JldHVybiBzcmM7fX07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/icons/games/doom.png?webp&url&width=42\n");

/***/ }),

/***/ "./public/icons/games/keen.png?url&width=126":
/*!***************************************************!*\
  !*** ./public/icons/games/keen.png?url&width=126 ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var src = \"/_next/static/chunks/images/keen-a9501fb082ec39f7cb71c6b7d5d9d8e9.png\";module.exports={src:src,width:126,height:126,format:\"png\",toString:function(){return src;}};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2ljb25zL2dhbWVzL2tlZW4ucG5nPzg2MjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0ZBQWtGLGdCQUFnQiw4REFBOEQiLCJmaWxlIjoiLi9wdWJsaWMvaWNvbnMvZ2FtZXMva2Vlbi5wbmc/dXJsJndpZHRoPTEyNi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBzcmMgPSBcIi9fbmV4dC9zdGF0aWMvY2h1bmtzL2ltYWdlcy9rZWVuLWE5NTAxZmIwODJlYzM5ZjdjYjcxYzZiN2Q1ZDlkOGU5LnBuZ1wiO21vZHVsZS5leHBvcnRzPXtzcmM6c3JjLHdpZHRoOjEyNixoZWlnaHQ6MTI2LGZvcm1hdDpcInBuZ1wiLHRvU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIHNyYzt9fTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/icons/games/keen.png?url&width=126\n");

/***/ }),

/***/ "./public/icons/games/keen.png?url&width=16":
/*!**************************************************!*\
  !*** ./public/icons/games/keen.png?url&width=16 ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var src = \"/_next/static/chunks/images/keen-40721294bdec31af379a5767733a552b.png\";module.exports={src:src,width:16,height:16,format:\"png\",toString:function(){return src;}};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2ljb25zL2dhbWVzL2tlZW4ucG5nPzU0OTQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0ZBQWtGLGdCQUFnQiw0REFBNEQiLCJmaWxlIjoiLi9wdWJsaWMvaWNvbnMvZ2FtZXMva2Vlbi5wbmc/dXJsJndpZHRoPTE2LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHNyYyA9IFwiL19uZXh0L3N0YXRpYy9jaHVua3MvaW1hZ2VzL2tlZW4tNDA3MjEyOTRiZGVjMzFhZjM3OWE1NzY3NzMzYTU1MmIucG5nXCI7bW9kdWxlLmV4cG9ydHM9e3NyYzpzcmMsd2lkdGg6MTYsaGVpZ2h0OjE2LGZvcm1hdDpcInBuZ1wiLHRvU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIHNyYzt9fTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/icons/games/keen.png?url&width=16\n");

/***/ }),

/***/ "./public/icons/games/keen.png?url&width=42":
/*!**************************************************!*\
  !*** ./public/icons/games/keen.png?url&width=42 ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var src = \"/_next/static/chunks/images/keen-10b4d1d30857e58188c405f3b241f272.png\";module.exports={src:src,width:42,height:42,format:\"png\",toString:function(){return src;}};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2ljb25zL2dhbWVzL2tlZW4ucG5nPzE5ODYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0ZBQWtGLGdCQUFnQiw0REFBNEQiLCJmaWxlIjoiLi9wdWJsaWMvaWNvbnMvZ2FtZXMva2Vlbi5wbmc/dXJsJndpZHRoPTQyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHNyYyA9IFwiL19uZXh0L3N0YXRpYy9jaHVua3MvaW1hZ2VzL2tlZW4tMTBiNGQxZDMwODU3ZTU4MTg4YzQwNWYzYjI0MWYyNzIucG5nXCI7bW9kdWxlLmV4cG9ydHM9e3NyYzpzcmMsd2lkdGg6NDIsaGVpZ2h0OjQyLGZvcm1hdDpcInBuZ1wiLHRvU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIHNyYzt9fTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/icons/games/keen.png?url&width=42\n");

/***/ }),

/***/ "./public/icons/games/keen.png?webp&url&width=126":
/*!********************************************************!*\
  !*** ./public/icons/games/keen.png?webp&url&width=126 ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var src = \"/_next/static/chunks/images/keen-5f00f1dc6f249c60bae36d0e64f1326c.webp\";module.exports={src:src,width:126,height:126,format:\"webp\",toString:function(){return src;}};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2ljb25zL2dhbWVzL2tlZW4ucG5nPzI3NTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUZBQW1GLGdCQUFnQiwrREFBK0QiLCJmaWxlIjoiLi9wdWJsaWMvaWNvbnMvZ2FtZXMva2Vlbi5wbmc/d2VicCZ1cmwmd2lkdGg9MTI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHNyYyA9IFwiL19uZXh0L3N0YXRpYy9jaHVua3MvaW1hZ2VzL2tlZW4tNWYwMGYxZGM2ZjI0OWM2MGJhZTM2ZDBlNjRmMTMyNmMud2VicFwiO21vZHVsZS5leHBvcnRzPXtzcmM6c3JjLHdpZHRoOjEyNixoZWlnaHQ6MTI2LGZvcm1hdDpcIndlYnBcIix0b1N0cmluZzpmdW5jdGlvbigpe3JldHVybiBzcmM7fX07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/icons/games/keen.png?webp&url&width=126\n");

/***/ }),

/***/ "./public/icons/games/keen.png?webp&url&width=16":
/*!*******************************************************!*\
  !*** ./public/icons/games/keen.png?webp&url&width=16 ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var src = \"/_next/static/chunks/images/keen-a9974f978e3cecc77b9fd8b5be00ace2.webp\";module.exports={src:src,width:16,height:16,format:\"webp\",toString:function(){return src;}};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2ljb25zL2dhbWVzL2tlZW4ucG5nPzdjOTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUZBQW1GLGdCQUFnQiw2REFBNkQiLCJmaWxlIjoiLi9wdWJsaWMvaWNvbnMvZ2FtZXMva2Vlbi5wbmc/d2VicCZ1cmwmd2lkdGg9MTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgc3JjID0gXCIvX25leHQvc3RhdGljL2NodW5rcy9pbWFnZXMva2Vlbi1hOTk3NGY5NzhlM2NlY2M3N2I5ZmQ4YjViZTAwYWNlMi53ZWJwXCI7bW9kdWxlLmV4cG9ydHM9e3NyYzpzcmMsd2lkdGg6MTYsaGVpZ2h0OjE2LGZvcm1hdDpcIndlYnBcIix0b1N0cmluZzpmdW5jdGlvbigpe3JldHVybiBzcmM7fX07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/icons/games/keen.png?webp&url&width=16\n");

/***/ }),

/***/ "./public/icons/games/keen.png?webp&url&width=42":
/*!*******************************************************!*\
  !*** ./public/icons/games/keen.png?webp&url&width=42 ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var src = \"/_next/static/chunks/images/keen-bf6a1803a53a13dff99b24554166804d.webp\";module.exports={src:src,width:42,height:42,format:\"webp\",toString:function(){return src;}};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2ljb25zL2dhbWVzL2tlZW4ucG5nPzc1NjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUZBQW1GLGdCQUFnQiw2REFBNkQiLCJmaWxlIjoiLi9wdWJsaWMvaWNvbnMvZ2FtZXMva2Vlbi5wbmc/d2VicCZ1cmwmd2lkdGg9NDIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgc3JjID0gXCIvX25leHQvc3RhdGljL2NodW5rcy9pbWFnZXMva2Vlbi1iZjZhMTgwM2E1M2ExM2RmZjk5YjI0NTU0MTY2ODA0ZC53ZWJwXCI7bW9kdWxlLmV4cG9ydHM9e3NyYzpzcmMsd2lkdGg6NDIsaGVpZ2h0OjQyLGZvcm1hdDpcIndlYnBcIix0b1N0cmluZzpmdW5jdGlvbigpe3JldHVybiBzcmM7fX07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/icons/games/keen.png?webp&url&width=42\n");

/***/ }),

/***/ "./public/icons/programs/dos.png?url":
/*!*******************************************!*\
  !*** ./public/icons/programs/dos.png?url ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var src = \"/_next/static/chunks/images/dos-372d8e1ffb11a8c37c160a7398d44e2c.png\";module.exports={src:src,width:600,height:600,format:\"png\",toString:function(){return src;}};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2ljb25zL3Byb2dyYW1zL2Rvcy5wbmc/ZWVkNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpRkFBaUYsZ0JBQWdCLDhEQUE4RCIsImZpbGUiOiIuL3B1YmxpYy9pY29ucy9wcm9ncmFtcy9kb3MucG5nP3VybC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBzcmMgPSBcIi9fbmV4dC9zdGF0aWMvY2h1bmtzL2ltYWdlcy9kb3MtMzcyZDhlMWZmYjExYThjMzdjMTYwYTczOThkNDRlMmMucG5nXCI7bW9kdWxlLmV4cG9ydHM9e3NyYzpzcmMsd2lkdGg6NjAwLGhlaWdodDo2MDAsZm9ybWF0OlwicG5nXCIsdG9TdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gc3JjO319OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/icons/programs/dos.png?url\n");

/***/ }),

/***/ "./public/icons/programs/explorer.png?url&width=126":
/*!**********************************************************!*\
  !*** ./public/icons/programs/explorer.png?url&width=126 ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var src = \"/_next/static/chunks/images/explorer-d48cac0b081ad0d92ab614243fc5ac88.png\";module.exports={src:src,width:126,height:126,format:\"png\",toString:function(){return src;}};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2ljb25zL3Byb2dyYW1zL2V4cGxvcmVyLnBuZz9mOGIxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNGQUFzRixnQkFBZ0IsOERBQThEIiwiZmlsZSI6Ii4vcHVibGljL2ljb25zL3Byb2dyYW1zL2V4cGxvcmVyLnBuZz91cmwmd2lkdGg9MTI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHNyYyA9IFwiL19uZXh0L3N0YXRpYy9jaHVua3MvaW1hZ2VzL2V4cGxvcmVyLWQ0OGNhYzBiMDgxYWQwZDkyYWI2MTQyNDNmYzVhYzg4LnBuZ1wiO21vZHVsZS5leHBvcnRzPXtzcmM6c3JjLHdpZHRoOjEyNixoZWlnaHQ6MTI2LGZvcm1hdDpcInBuZ1wiLHRvU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIHNyYzt9fTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/icons/programs/explorer.png?url&width=126\n");

/***/ }),

/***/ "./public/icons/programs/explorer.png?url&width=16":
/*!*********************************************************!*\
  !*** ./public/icons/programs/explorer.png?url&width=16 ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var src = \"/_next/static/chunks/images/explorer-a738ef08bc1ec8a72c4ffca89320ae62.png\";module.exports={src:src,width:16,height:16,format:\"png\",toString:function(){return src;}};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2ljb25zL3Byb2dyYW1zL2V4cGxvcmVyLnBuZz9iNjRiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNGQUFzRixnQkFBZ0IsNERBQTREIiwiZmlsZSI6Ii4vcHVibGljL2ljb25zL3Byb2dyYW1zL2V4cGxvcmVyLnBuZz91cmwmd2lkdGg9MTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgc3JjID0gXCIvX25leHQvc3RhdGljL2NodW5rcy9pbWFnZXMvZXhwbG9yZXItYTczOGVmMDhiYzFlYzhhNzJjNGZmY2E4OTMyMGFlNjIucG5nXCI7bW9kdWxlLmV4cG9ydHM9e3NyYzpzcmMsd2lkdGg6MTYsaGVpZ2h0OjE2LGZvcm1hdDpcInBuZ1wiLHRvU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIHNyYzt9fTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/icons/programs/explorer.png?url&width=16\n");

/***/ }),

/***/ "./public/icons/programs/explorer.png?url&width=42":
/*!*********************************************************!*\
  !*** ./public/icons/programs/explorer.png?url&width=42 ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var src = \"/_next/static/chunks/images/explorer-3148222f7e8644842a18c947f8e6ada5.png\";module.exports={src:src,width:42,height:42,format:\"png\",toString:function(){return src;}};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2ljb25zL3Byb2dyYW1zL2V4cGxvcmVyLnBuZz83YjA2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNGQUFzRixnQkFBZ0IsNERBQTREIiwiZmlsZSI6Ii4vcHVibGljL2ljb25zL3Byb2dyYW1zL2V4cGxvcmVyLnBuZz91cmwmd2lkdGg9NDIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgc3JjID0gXCIvX25leHQvc3RhdGljL2NodW5rcy9pbWFnZXMvZXhwbG9yZXItMzE0ODIyMmY3ZTg2NDQ4NDJhMThjOTQ3ZjhlNmFkYTUucG5nXCI7bW9kdWxlLmV4cG9ydHM9e3NyYzpzcmMsd2lkdGg6NDIsaGVpZ2h0OjQyLGZvcm1hdDpcInBuZ1wiLHRvU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIHNyYzt9fTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/icons/programs/explorer.png?url&width=42\n");

/***/ }),

/***/ "./public/icons/programs/explorer.png?webp&url&width=126":
/*!***************************************************************!*\
  !*** ./public/icons/programs/explorer.png?webp&url&width=126 ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var src = \"/_next/static/chunks/images/explorer-279387d19af49e5cdab2fd94b23df260.webp\";module.exports={src:src,width:126,height:126,format:\"webp\",toString:function(){return src;}};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2ljb25zL3Byb2dyYW1zL2V4cGxvcmVyLnBuZz82NGY2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVGQUF1RixnQkFBZ0IsK0RBQStEIiwiZmlsZSI6Ii4vcHVibGljL2ljb25zL3Byb2dyYW1zL2V4cGxvcmVyLnBuZz93ZWJwJnVybCZ3aWR0aD0xMjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgc3JjID0gXCIvX25leHQvc3RhdGljL2NodW5rcy9pbWFnZXMvZXhwbG9yZXItMjc5Mzg3ZDE5YWY0OWU1Y2RhYjJmZDk0YjIzZGYyNjAud2VicFwiO21vZHVsZS5leHBvcnRzPXtzcmM6c3JjLHdpZHRoOjEyNixoZWlnaHQ6MTI2LGZvcm1hdDpcIndlYnBcIix0b1N0cmluZzpmdW5jdGlvbigpe3JldHVybiBzcmM7fX07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/icons/programs/explorer.png?webp&url&width=126\n");

/***/ }),

/***/ "./public/icons/programs/explorer.png?webp&url&width=16":
/*!**************************************************************!*\
  !*** ./public/icons/programs/explorer.png?webp&url&width=16 ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var src = \"/_next/static/chunks/images/explorer-7a2d4b286303654d712fb435e211b3e7.webp\";module.exports={src:src,width:16,height:16,format:\"webp\",toString:function(){return src;}};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2ljb25zL3Byb2dyYW1zL2V4cGxvcmVyLnBuZz9lOWE1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVGQUF1RixnQkFBZ0IsNkRBQTZEIiwiZmlsZSI6Ii4vcHVibGljL2ljb25zL3Byb2dyYW1zL2V4cGxvcmVyLnBuZz93ZWJwJnVybCZ3aWR0aD0xNi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBzcmMgPSBcIi9fbmV4dC9zdGF0aWMvY2h1bmtzL2ltYWdlcy9leHBsb3Jlci03YTJkNGIyODYzMDM2NTRkNzEyZmI0MzVlMjExYjNlNy53ZWJwXCI7bW9kdWxlLmV4cG9ydHM9e3NyYzpzcmMsd2lkdGg6MTYsaGVpZ2h0OjE2LGZvcm1hdDpcIndlYnBcIix0b1N0cmluZzpmdW5jdGlvbigpe3JldHVybiBzcmM7fX07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/icons/programs/explorer.png?webp&url&width=16\n");

/***/ }),

/***/ "./public/icons/programs/explorer.png?webp&url&width=42":
/*!**************************************************************!*\
  !*** ./public/icons/programs/explorer.png?webp&url&width=42 ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var src = \"/_next/static/chunks/images/explorer-e17dc7767dc3f16f6fe347552d4050ec.webp\";module.exports={src:src,width:42,height:42,format:\"webp\",toString:function(){return src;}};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2ljb25zL3Byb2dyYW1zL2V4cGxvcmVyLnBuZz9lOTQ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVGQUF1RixnQkFBZ0IsNkRBQTZEIiwiZmlsZSI6Ii4vcHVibGljL2ljb25zL3Byb2dyYW1zL2V4cGxvcmVyLnBuZz93ZWJwJnVybCZ3aWR0aD00Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBzcmMgPSBcIi9fbmV4dC9zdGF0aWMvY2h1bmtzL2ltYWdlcy9leHBsb3Jlci1lMTdkYzc3NjdkYzNmMTZmNmZlMzQ3NTUyZDQwNTBlYy53ZWJwXCI7bW9kdWxlLmV4cG9ydHM9e3NyYzpzcmMsd2lkdGg6NDIsaGVpZ2h0OjQyLGZvcm1hdDpcIndlYnBcIix0b1N0cmluZzpmdW5jdGlvbigpe3JldHVybiBzcmM7fX07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/icons/programs/explorer.png?webp&url&width=42\n");

/***/ }),

/***/ "./public/icons/programs/winamp.png?url&width=126":
/*!********************************************************!*\
  !*** ./public/icons/programs/winamp.png?url&width=126 ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var src = \"/_next/static/chunks/images/winamp-74acce432d29e127c16b58e3365e53e1.png\";module.exports={src:src,width:126,height:126,format:\"png\",toString:function(){return src;}};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2ljb25zL3Byb2dyYW1zL3dpbmFtcC5wbmc/Yjk4NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvRkFBb0YsZ0JBQWdCLDhEQUE4RCIsImZpbGUiOiIuL3B1YmxpYy9pY29ucy9wcm9ncmFtcy93aW5hbXAucG5nP3VybCZ3aWR0aD0xMjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgc3JjID0gXCIvX25leHQvc3RhdGljL2NodW5rcy9pbWFnZXMvd2luYW1wLTc0YWNjZTQzMmQyOWUxMjdjMTZiNThlMzM2NWU1M2UxLnBuZ1wiO21vZHVsZS5leHBvcnRzPXtzcmM6c3JjLHdpZHRoOjEyNixoZWlnaHQ6MTI2LGZvcm1hdDpcInBuZ1wiLHRvU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIHNyYzt9fTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/icons/programs/winamp.png?url&width=126\n");

/***/ }),

/***/ "./public/icons/programs/winamp.png?url&width=16":
/*!*******************************************************!*\
  !*** ./public/icons/programs/winamp.png?url&width=16 ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var src = \"/_next/static/chunks/images/winamp-a7fd992fc44b403b0f9321c421e02b9c.png\";module.exports={src:src,width:16,height:16,format:\"png\",toString:function(){return src;}};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2ljb25zL3Byb2dyYW1zL3dpbmFtcC5wbmc/NTUxOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvRkFBb0YsZ0JBQWdCLDREQUE0RCIsImZpbGUiOiIuL3B1YmxpYy9pY29ucy9wcm9ncmFtcy93aW5hbXAucG5nP3VybCZ3aWR0aD0xNi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBzcmMgPSBcIi9fbmV4dC9zdGF0aWMvY2h1bmtzL2ltYWdlcy93aW5hbXAtYTdmZDk5MmZjNDRiNDAzYjBmOTMyMWM0MjFlMDJiOWMucG5nXCI7bW9kdWxlLmV4cG9ydHM9e3NyYzpzcmMsd2lkdGg6MTYsaGVpZ2h0OjE2LGZvcm1hdDpcInBuZ1wiLHRvU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIHNyYzt9fTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/icons/programs/winamp.png?url&width=16\n");

/***/ }),

/***/ "./public/icons/programs/winamp.png?url&width=42":
/*!*******************************************************!*\
  !*** ./public/icons/programs/winamp.png?url&width=42 ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var src = \"/_next/static/chunks/images/winamp-6e6876c8a782a8a23ccee2795b903232.png\";module.exports={src:src,width:42,height:42,format:\"png\",toString:function(){return src;}};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2ljb25zL3Byb2dyYW1zL3dpbmFtcC5wbmc/ZTA4YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvRkFBb0YsZ0JBQWdCLDREQUE0RCIsImZpbGUiOiIuL3B1YmxpYy9pY29ucy9wcm9ncmFtcy93aW5hbXAucG5nP3VybCZ3aWR0aD00Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBzcmMgPSBcIi9fbmV4dC9zdGF0aWMvY2h1bmtzL2ltYWdlcy93aW5hbXAtNmU2ODc2YzhhNzgyYThhMjNjY2VlMjc5NWI5MDMyMzIucG5nXCI7bW9kdWxlLmV4cG9ydHM9e3NyYzpzcmMsd2lkdGg6NDIsaGVpZ2h0OjQyLGZvcm1hdDpcInBuZ1wiLHRvU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIHNyYzt9fTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/icons/programs/winamp.png?url&width=42\n");

/***/ }),

/***/ "./public/icons/programs/winamp.png?webp&url&width=126":
/*!*************************************************************!*\
  !*** ./public/icons/programs/winamp.png?webp&url&width=126 ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var src = \"/_next/static/chunks/images/winamp-e1a355b1f9ce1aff87cd4747828e6d8a.webp\";module.exports={src:src,width:126,height:126,format:\"webp\",toString:function(){return src;}};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2ljb25zL3Byb2dyYW1zL3dpbmFtcC5wbmc/ZjkwOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxRkFBcUYsZ0JBQWdCLCtEQUErRCIsImZpbGUiOiIuL3B1YmxpYy9pY29ucy9wcm9ncmFtcy93aW5hbXAucG5nP3dlYnAmdXJsJndpZHRoPTEyNi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBzcmMgPSBcIi9fbmV4dC9zdGF0aWMvY2h1bmtzL2ltYWdlcy93aW5hbXAtZTFhMzU1YjFmOWNlMWFmZjg3Y2Q0NzQ3ODI4ZTZkOGEud2VicFwiO21vZHVsZS5leHBvcnRzPXtzcmM6c3JjLHdpZHRoOjEyNixoZWlnaHQ6MTI2LGZvcm1hdDpcIndlYnBcIix0b1N0cmluZzpmdW5jdGlvbigpe3JldHVybiBzcmM7fX07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/icons/programs/winamp.png?webp&url&width=126\n");

/***/ }),

/***/ "./public/icons/programs/winamp.png?webp&url&width=16":
/*!************************************************************!*\
  !*** ./public/icons/programs/winamp.png?webp&url&width=16 ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var src = \"/_next/static/chunks/images/winamp-99d1ca459eb2abd9b9ddb9399c120511.webp\";module.exports={src:src,width:16,height:16,format:\"webp\",toString:function(){return src;}};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2ljb25zL3Byb2dyYW1zL3dpbmFtcC5wbmc/ZjlhNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxRkFBcUYsZ0JBQWdCLDZEQUE2RCIsImZpbGUiOiIuL3B1YmxpYy9pY29ucy9wcm9ncmFtcy93aW5hbXAucG5nP3dlYnAmdXJsJndpZHRoPTE2LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHNyYyA9IFwiL19uZXh0L3N0YXRpYy9jaHVua3MvaW1hZ2VzL3dpbmFtcC05OWQxY2E0NTllYjJhYmQ5YjlkZGI5Mzk5YzEyMDUxMS53ZWJwXCI7bW9kdWxlLmV4cG9ydHM9e3NyYzpzcmMsd2lkdGg6MTYsaGVpZ2h0OjE2LGZvcm1hdDpcIndlYnBcIix0b1N0cmluZzpmdW5jdGlvbigpe3JldHVybiBzcmM7fX07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/icons/programs/winamp.png?webp&url&width=16\n");

/***/ }),

/***/ "./public/icons/programs/winamp.png?webp&url&width=42":
/*!************************************************************!*\
  !*** ./public/icons/programs/winamp.png?webp&url&width=42 ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var src = \"/_next/static/chunks/images/winamp-fcb399667736badfa0a9b839c5e15b0f.webp\";module.exports={src:src,width:42,height:42,format:\"webp\",toString:function(){return src;}};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2ljb25zL3Byb2dyYW1zL3dpbmFtcC5wbmc/MDEwZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxRkFBcUYsZ0JBQWdCLDZEQUE2RCIsImZpbGUiOiIuL3B1YmxpYy9pY29ucy9wcm9ncmFtcy93aW5hbXAucG5nP3dlYnAmdXJsJndpZHRoPTQyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHNyYyA9IFwiL19uZXh0L3N0YXRpYy9jaHVua3MvaW1hZ2VzL3dpbmFtcC1mY2IzOTk2Njc3MzZiYWRmYTBhOWI4MzljNWUxNWIwZi53ZWJwXCI7bW9kdWxlLmV4cG9ydHM9e3NyYzpzcmMsd2lkdGg6NDIsaGVpZ2h0OjQyLGZvcm1hdDpcIndlYnBcIix0b1N0cmluZzpmdW5jdGlvbigpe3JldHVybiBzcmM7fX07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/icons/programs/winamp.png?webp&url&width=42\n");

/***/ })

})