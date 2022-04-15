"use strict";
(self["webpackChunkmppm"] = self["webpackChunkmppm"] || []).push([[8553],{

/***/ 8553:
/*!***********************************************!*\
  !*** ./src/app/add-track/add-track.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTrackPageModule": () => (/* binding */ AddTrackPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 1048);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1659);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5113);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _add_track_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-track.page */ 4942);
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/common.module */ 9174);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9724);








const routes = [
    {
        path: '',
        component: _add_track_page__WEBPACK_IMPORTED_MODULE_0__.AddTrackPage
    }
];
class AddTrackPageModule {
}
AddTrackPageModule.ɵfac = function AddTrackPageModule_Factory(t) { return new (t || AddTrackPageModule)(); };
AddTrackPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AddTrackPageModule });
AddTrackPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _common_common_module__WEBPACK_IMPORTED_MODULE_1__.MppCommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AddTrackPageModule, { declarations: [_add_track_page__WEBPACK_IMPORTED_MODULE_0__.AddTrackPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _common_common_module__WEBPACK_IMPORTED_MODULE_1__.MppCommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 4942:
/*!*********************************************!*\
  !*** ./src/app/add-track/add-track.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTrackPage": () => (/* binding */ AddTrackPage)
/* harmony export */ });
/* harmony import */ var _Users_gigi_mppm_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 8239);
/* harmony import */ var _yt_search_yt_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../yt-search/yt-search */ 9481);
/* harmony import */ var _service_url_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/url-parser */ 9077);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 9724);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5113);
/* harmony import */ var _service_tracks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/tracks.service */ 1038);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _common_xlate_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/xlate.pipe */ 4863);
/* harmony import */ var _service_yt_download_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/yt-download.service */ 8322);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1659);










const _c0 = ["nameInput"];
class AddTrackPage {
  constructor(activatedRoute, tracksService, nav, toastController, xlate, ytDownloadService) {
    this.activatedRoute = activatedRoute;
    this.tracksService = tracksService;
    this.nav = nav;
    this.toastController = toastController;
    this.xlate = xlate;
    this.ytDownloadService = ytDownloadService;
  }

  ngOnInit() {
    this.trackIndex = Number(this.activatedRoute.snapshot.paramMap.get('index'));
    this.track = {
      name: '',
      videoUrl: '',
      markers: []
    };

    if (this.trackIndex !== -1) {
      const existing = this.tracksService.tracks[this.trackIndex];
      this.track.name = existing.name;
      this.track.videoUrl = existing.videoUrl;
    }
  }

  ionViewWillEnter() {
    const selectedVideo = (0,_yt_search_yt_search__WEBPACK_IMPORTED_MODULE_1__.getSelectedVideo)();

    if (selectedVideo) {
      this.track.videoUrl = selectedVideo.id.videoId;

      if (!this.track.name) {
        this.track.name = selectedVideo.snippet.title;
      }

      (0,_yt_search_yt_search__WEBPACK_IMPORTED_MODULE_1__.setSelectedVideo)(undefined);
    }

    setTimeout(() => {
      var _a, _b;

      if (((_b = (_a = this.track) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.length) === 0) {
        this.ionInput.setFocus();
      }
    }, 1000);
  }

  addTrack() {
    let openTrack = false;

    if (this.file) {
      this.tracksService.addFileTrack(this.file, this.track.name);
      openTrack = true;
    } else {
      if (this.trackIndex !== -1) {
        const existing = this.tracksService.tracks[this.trackIndex];
        existing.name = this.track.name;
        existing.videoUrl = this.track.videoUrl;
      } else {
        openTrack = true;
        this.tracksService.tracks.push(Object.assign({}, this.track));
      }

      this.tracksService.saveTracks();
    }

    setTimeout(() => {
      const newNav = this.nav.pop();

      if (openTrack) {
        newNav.then(() => this.nav.navigateRoot([`/home`], {
          animated: false
        })).then(() => this.nav.navigateForward([`/track`, this.tracksService.tracks.length - 1], {
          animated: false
        }));
      }
    });
  }

  ytSearch() {
    this.nav.navigateForward('/yt-search');
  }

  onFileChanged($event) {
    this.file = $event.target.files[0];
    this.track.name = this.file.name;
  }

  ytDownload(videoUrl) {
    var _this = this;

    return (0,_Users_gigi_mppm_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.downloading) {
        return;
      }

      _this.downloading = true;
      const ok = yield _this.ytDownloadService.initiateDownload((0,_service_url_parser__WEBPACK_IMPORTED_MODULE_2__.getIdFromURL)(videoUrl), _this.track.name);

      if (!ok) {
        const toast = yield _this.toastController.create({
          message: _this.xlate.transform('C_YT_DOWNLOAD_ERROR'),
          duration: 4000
        });
        toast.present();
      }

      _this.downloading = false;
    })();
  }

}

AddTrackPage.ɵfac = function AddTrackPage_Factory(t) {
  return new (t || AddTrackPage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_tracks_service__WEBPACK_IMPORTED_MODULE_3__.TracksService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_common_xlate_pipe__WEBPACK_IMPORTED_MODULE_4__.XlatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_yt_download_service__WEBPACK_IMPORTED_MODULE_5__.YtDownloadService));
};

AddTrackPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: AddTrackPage,
  selectors: [["mppm-add-track"]],
  viewQuery: function AddTrackPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.ionInput = _t.first);
    }
  },
  decls: 25,
  vars: 22,
  consts: [["scroll-y", "false"], [1, "add-track-content"], ["clear-input", "", 3, "placeholder", "ngModel", "ngModelChange"], ["nameInput", ""], ["name", "search", 3, "click"], ["name", "download", 3, "click"], ["type", "indeterminate", 1, "progress"], [1, "add", 3, "disabled", "click"], [1, "local-audio-file"], ["type", "file", "accept", "audio/*", 3, "change"]],
  template: function AddTrackPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "ion-back-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "xlate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-content", 0)(8, "div", 1)(9, "ion-input", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AddTrackPage_Template_ion_input_ngModelChange_9_listener($event) {
        return ctx.track.name = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "xlate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "ion-input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AddTrackPage_Template_ion_input_ngModelChange_12_listener($event) {
        return ctx.track.videoUrl = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "xlate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "ion-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddTrackPage_Template_ion_icon_click_14_listener() {
        return ctx.ytSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "ion-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddTrackPage_Template_ion_icon_click_15_listener() {
        return ctx.ytDownload(ctx.track.videoUrl);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "ion-progress-bar", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "ion-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddTrackPage_Template_ion_button_click_17_listener() {
        return ctx.addTrack();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](19, "xlate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 8)(21, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](23, "xlate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function AddTrackPage_Template_input_change_24_listener($event) {
        return ctx.onFileChanged($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 12, ctx.trackIndex < 0 ? "C_ADD_TRACK" : "C_EDIT_TRACK"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 14, "C_NAME"))("ngModel", ctx.track.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 16, "C_YT_OR_VIDEO_ID"))("ngModel", ctx.track.videoUrl);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("hidden", !ctx.track.videoUrl);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("hidden", !ctx.downloading);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.track.name || !ctx.track.videoUrl && !ctx.file);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](19, 18, ctx.trackIndex < 0 ? "C_ADD" : "C_SAVE"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](23, 20, "C_LOCAL_AUDIO_FILE"));
    }
  },
  directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonBackButtonDelegate, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonProgressBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButton],
  pipes: [_common_xlate_pipe__WEBPACK_IMPORTED_MODULE_4__.XlatePipe],
  styles: [".add-track-content[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: grid;\n  grid-template-columns: auto 35px;\n}\n.add-track-content[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  grid-column: 1;\n}\n.add-track-content[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]:nth-child(2) {\n  color: #aaaaaa;\n}\n.add-track-content[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  grid-column: 2;\n  justify-self: end;\n  font-size: 25pt;\n  position: relative;\n  top: -35px;\n  cursor: pointer;\n}\n.add-track-content[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  grid-column: 2;\n  justify-self: end;\n  position: relative;\n  top: -35px;\n}\n.add-track-content[_ngcontent-%COMP%]   .progress.hidden[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.add-track-content[_ngcontent-%COMP%]   ion-icon[name=search][_ngcontent-%COMP%] {\n  color: #aaaaaa;\n}\n.add-track-content[_ngcontent-%COMP%]   ion-icon[name=download][_ngcontent-%COMP%] {\n  position: relative;\n  top: -37px;\n  color: var(--ion-color-primary);\n  cursor: pointer;\n}\n.add-track-content[_ngcontent-%COMP%]   ion-icon[name=download].hidden[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.add-track-content[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n}\n.add[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.local-audio-file[_ngcontent-%COMP%] {\n  margin-top: 35px;\n}\n.local-audio-file[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 18px;\n  display: block;\n  padding-bottom: 4px;\n}"]
});

/***/ })

}]);