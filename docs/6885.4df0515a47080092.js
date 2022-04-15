"use strict";
(self["webpackChunkmppm"] = self["webpackChunkmppm"] || []).push([[6885],{

/***/ 6885:
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/status-tap-6b3822ba.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startStatusTap": () => (/* binding */ startStatusTap)
/* harmony export */ });
/* harmony import */ var _Users_gigi_mppm_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 8239);
/* harmony import */ var _index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-b3eecb14.js */ 8888);
/* harmony import */ var _helpers_1ec1a6dd_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-1ec1a6dd.js */ 9098);


/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */



const startStatusTap = () => {
  const win = window;
  win.addEventListener('statusTap', () => {
    (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.f)(() => {
      const width = win.innerWidth;
      const height = win.innerHeight;
      const el = document.elementFromPoint(width / 2, height / 2);

      if (!el) {
        return;
      }

      const contentEl = el.closest('ion-content');

      if (contentEl) {
        new Promise(resolve => (0,_helpers_1ec1a6dd_js__WEBPACK_IMPORTED_MODULE_2__.c)(contentEl, resolve)).then(() => {
          (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.c)( /*#__PURE__*/(0,_Users_gigi_mppm_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            /**
             * If scrolling and user taps status bar,
             * only calling scrollToTop is not enough
             * as engines like WebKit will jump the
             * scroll position back down and complete
             * any in-progress momentum scrolling.
             */
            contentEl.style.setProperty('--overflow', 'hidden');
            yield contentEl.scrollToTop(300);
            contentEl.style.removeProperty('--overflow');
          }));
        });
      }
    });
  });
};



/***/ })

}]);