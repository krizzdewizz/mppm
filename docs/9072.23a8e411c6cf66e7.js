"use strict";
(self["webpackChunkmppm"] = self["webpackChunkmppm"] || []).push([[9072],{

/***/ 9072:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-text.entry.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ion_text": () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var _index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-b3eecb14.js */ 8888);
/* harmony import */ var _ionic_global_f1ce4d2d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-global-f1ce4d2d.js */ 3995);
/* harmony import */ var _theme_7670341c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-7670341c.js */ 2187);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */




const textCss = ":host(.ion-color){color:var(--ion-color-base)}";

const Text = class {
  constructor(hostRef) {
    (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
  }
  render() {
    const mode = (0,_ionic_global_f1ce4d2d_js__WEBPACK_IMPORTED_MODULE_1__.b)(this);
    return ((0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_0__.H, { class: (0,_theme_7670341c_js__WEBPACK_IMPORTED_MODULE_2__.c)(this.color, {
        [mode]: true,
      }) }, (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)));
  }
};
Text.style = textCss;




/***/ })

}]);