"use strict";
(self["webpackChunkmppm"] = self["webpackChunkmppm"] || []).push([[4259],{

/***/ 4259:
/*!*******************************************************!*\
  !*** ./src/app/marker-detail/marker-detail.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarkerDetailPageModule": () => (/* binding */ MarkerDetailPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 1048);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1659);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5113);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _marker_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./marker-detail.page */ 8222);
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/common.module */ 9174);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9724);








const routes = [
    {
        path: '',
        component: _marker_detail_page__WEBPACK_IMPORTED_MODULE_0__.MarkerDetailPage
    }
];
class MarkerDetailPageModule {
}
MarkerDetailPageModule.ɵfac = function MarkerDetailPageModule_Factory(t) { return new (t || MarkerDetailPageModule)(); };
MarkerDetailPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MarkerDetailPageModule });
MarkerDetailPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _common_common_module__WEBPACK_IMPORTED_MODULE_1__.MppCommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MarkerDetailPageModule, { declarations: [_marker_detail_page__WEBPACK_IMPORTED_MODULE_0__.MarkerDetailPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _common_common_module__WEBPACK_IMPORTED_MODULE_1__.MppCommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 8222:
/*!*****************************************************!*\
  !*** ./src/app/marker-detail/marker-detail.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarkerDetailPage": () => (/* binding */ MarkerDetailPage)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 9724);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5113);
/* harmony import */ var _service_tracks_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/tracks.service */ 1038);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1659);
/* harmony import */ var _common_xlate_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/xlate.pipe */ 4863);
/* harmony import */ var _common_marker_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/marker.pipe */ 8321);








class MarkerDetailPage {
    constructor(activatedRoute, tracksService, nav) {
        this.activatedRoute = activatedRoute;
        this.tracksService = tracksService;
        this.nav = nav;
    }
    ngOnInit() {
        const { paramMap } = this.activatedRoute.snapshot;
        this.trackIndex = Number(paramMap.get('trackIndex'));
        this.track = this.tracksService.tracks[this.trackIndex];
        const markerIndex = Number(paramMap.get('markerIndex'));
        this.marker = this.track.markers[markerIndex];
        this.title = this.marker.title;
    }
    ngAfterViewInit() {
        setTimeout(() => this.ionInput.setFocus(), 1000);
    }
    save() {
        this.marker.title = this.title;
        this.tracksService.saveTracks();
        this.nav.back();
    }
}
MarkerDetailPage.ɵfac = function MarkerDetailPage_Factory(t) { return new (t || MarkerDetailPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_tracks_service__WEBPACK_IMPORTED_MODULE_0__.TracksService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController)); };
MarkerDetailPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MarkerDetailPage, selectors: [["mppm-marker-detail"]], viewQuery: function MarkerDetailPage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonInput, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.ionInput = _t.first);
    } }, decls: 15, vars: 13, consts: [[1, "marker-detail-content"], ["clear-input", "", 3, "placeholder", "ngModel", "ngModelChange"], [1, "save", 3, "click"]], template: function MarkerDetailPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-back-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "xlate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "marker");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-content")(9, "div", 0)(10, "ion-input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MarkerDetailPage_Template_ion_input_ngModelChange_10_listener($event) { return ctx.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "xlate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ion-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MarkerDetailPage_Template_ion_button_click_12_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "xlate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 5, "C_MARKER"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 7, ctx.marker == null ? null : ctx.marker.value), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 9, "C_DESCRIPTION"))("ngModel", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 11, "C_SAVE"));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButtonDelegate, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton], pipes: [_common_xlate_pipe__WEBPACK_IMPORTED_MODULE_1__.XlatePipe, _common_marker_pipe__WEBPACK_IMPORTED_MODULE_2__.MarkerPipe], styles: [".marker-detail-content[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: grid;\n}\n\n.save[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}"] });


/***/ })

}]);