"use strict";
(self["webpackChunkmppm"] = self["webpackChunkmppm"] || []).push([[3056],{

/***/ 3056:
/*!*************************************!*\
  !*** ./src/app/info/info.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoPageModule": () => (/* binding */ InfoPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 1048);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1659);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5113);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _info_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info.page */ 5726);
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/common.module */ 9174);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9724);








const routes = [
    {
        path: '',
        component: _info_page__WEBPACK_IMPORTED_MODULE_0__.InfoPage
    }
];
class InfoPageModule {
}
InfoPageModule.ɵfac = function InfoPageModule_Factory(t) { return new (t || InfoPageModule)(); };
InfoPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: InfoPageModule });
InfoPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _common_common_module__WEBPACK_IMPORTED_MODULE_1__.MppCommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](InfoPageModule, { declarations: [_info_page__WEBPACK_IMPORTED_MODULE_0__.InfoPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _common_common_module__WEBPACK_IMPORTED_MODULE_1__.MppCommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 5726:
/*!***********************************!*\
  !*** ./src/app/info/info.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoPage": () => (/* binding */ InfoPage)
/* harmony export */ });
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../package.json */ 4147);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9724);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 9122);



class InfoPage {
    constructor() {
        this.version = _package_json__WEBPACK_IMPORTED_MODULE_0__.version;
    }
}
InfoPage.ɵfac = function InfoPage_Factory(t) { return new (t || InfoPage)(); };
InfoPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InfoPage, selectors: [["mppm-info"]], decls: 21, vars: 1, consts: [[1, "content"], ["href", "mailto:christian@o3tt3rli.com"], ["src", "assets/icon/favicon.png"]], template: function InfoPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-content")(5, "div", 0)(6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Musician's Practicing Player");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "table")(9, "tr")(10, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Version:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tr")(15, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Author:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td")(18, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "christian@o3tt3rli.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.version);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonBackButtonDelegate, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonContent], styles: [".content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\nimg[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 40px;\n}"] });


/***/ }),

/***/ 4147:
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"mppm","version":"1.1.0","author":"Christian Oetterli","homepage":"http://o3tt3rli.com/mppm","description":"Musician\'s Practicing Player","repository":{"type":"git","url":"https://github.com/krizzdewizz/mppm"},"scripts":{"ng":"ng","start":"ng serve --host=0.0.0.0 --disable-host-check","build":"npm run lint && ng build --base-href /mppm/ --output-path docs","lint":"ng lint","postinstall":"node tools/copy-soundtouch-files"},"private":true,"dependencies":{"@angular/animations":"~13.3.0","@angular/common":"~13.3.0","@angular/compiler":"~13.3.0","@angular/core":"~13.3.0","@angular/forms":"~13.3.0","@angular/platform-browser":"~13.3.0","@angular/platform-browser-dynamic":"~13.3.0","@angular/router":"~13.3.0","@angular/service-worker":"^13.3.3","@ionic-native/core":"5.0.0","@ionic-native/splash-screen":"5.0.0","@ionic-native/status-bar":"5.0.0","@ionic/angular":"6.0.16","@soundtouchjs/audio-worklet":"^0.1.14","he":"1.2.0","rxjs":"~7.5.0","zone.js":"~0.11.4"},"devDependencies":{"@angular-devkit/build-angular":"~13.3.2","@angular-eslint/builder":"13.2.0","@angular-eslint/eslint-plugin":"13.2.0","@angular-eslint/eslint-plugin-template":"13.2.0","@angular-eslint/schematics":"13.2.0","@angular-eslint/template-parser":"13.2.0","@angular/cli":"~13.3.2","@angular/compiler-cli":"~13.3.0","@types/audioworklet":"^0.0.26","@types/node":"^12.11.1","@typescript-eslint/eslint-plugin":"5.17.0","@typescript-eslint/parser":"5.17.0","cpx":"^1.5.0","eslint":"^8.12.0","tslib":"^2.3.1","typescript":"~4.6.2"}}');

/***/ })

}]);