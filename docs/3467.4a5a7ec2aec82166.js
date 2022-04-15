"use strict";
(self["webpackChunkmppm"] = self["webpackChunkmppm"] || []).push([[3467],{

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 1048);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1659);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5113);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/common.module */ 9174);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9724);








class HomePageModule {
}
HomePageModule.ɵfac = function HomePageModule_Factory(t) { return new (t || HomePageModule)(); };
HomePageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HomePageModule });
HomePageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _common_common_module__WEBPACK_IMPORTED_MODULE_1__.MppCommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
                }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomePageModule, { declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _common_common_module__WEBPACK_IMPORTED_MODULE_1__.MppCommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _Users_gigi_mppm_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 8239);
/* harmony import */ var _service_soundtouch_soundtouch_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/soundtouch/soundtouch-player */ 3336);
/* harmony import */ var _service_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/util */ 9535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 9724);
/* harmony import */ var _service_tracks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/tracks.service */ 1038);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _common_xlate_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/xlate.pipe */ 4863);
/* harmony import */ var _service_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/store.service */ 7627);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 1048);










function HomePage_h3_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Musician's Practicing Player");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function HomePage_ion_item_sliding_7_ion_item_option_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HomePage_ion_item_sliding_7_ion_item_option_5_Template_ion_item_option_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const track_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](1);

      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r6.editTrack(track_r3, _r4);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function HomePage_ion_item_sliding_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item-sliding", null, 12)(2, "ion-item-options", 13)(3, "ion-item-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HomePage_ion_item_sliding_7_Template_ion_item_option_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const track_r3 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r9.deleteTrack(track_r3);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "ion-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, HomePage_ion_item_sliding_7_ion_item_option_5_Template, 2, 0, "ion-item-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HomePage_ion_item_sliding_7_Template_ion_item_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const track_r3 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r11.openTrack(track_r3);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const track_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !track_r3.isFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("file-lost", track_r3.fileLost);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](track_r3.name);
  }
}

function HomePage_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "xlate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "C_ADD_TRACK"));
  }
}

class HomePage {
  constructor(tracksService, nav, actionSheetController, xlate, storeService, toastController, alertController) {
    this.tracksService = tracksService;
    this.nav = nav;
    this.actionSheetController = actionSheetController;
    this.xlate = xlate;
    this.storeService = storeService;
    this.toastController = toastController;
    this.alertController = alertController;
    this.tracks = [];
    this.filter = '';
    this.noTracks = true;

    this.onDragOver = e => e.preventDefault();

    this.onDrop = e => {
      e.preventDefault();
      const dt = e.dataTransfer;

      if (!dt.files) {
        return;
      }

      const file = dt.files[0];
      const {
        track,
        index
      } = this.tracksService.addFileTrack(file);
      this.openTrack(Object.assign(Object.assign({}, track), {
        index,
        fileLost: false
      }));
    };
  }

  ionViewWillEnter() {
    this.updateTracks();
    this.noTracks = this.tracks.length === 0;
    document.body.addEventListener('dragover', this.onDragOver);
    document.body.addEventListener('drop', this.onDrop);
  }

  ionViewWillLeave() {
    document.body.removeEventListener('dragover', this.onDragOver);
    document.body.removeEventListener('drop', this.onDrop);
  }

  updateTracks() {
    const tracks = this.tracksService.tracks.map((track, index) => Object.assign(Object.assign({}, track), {
      index,
      fileLost: this.isFileLost(track)
    }));
    const filterLower = this.filter.toLowerCase().trim();

    if (filterLower) {
      this.tracks = tracks.filter(track => track.name.toLowerCase().includes(filterLower));
    } else {
      this.tracks = tracks;
    }

    this.tracks.sort((a, b) => a.name.localeCompare(b.name));
  }

  onFilterChange(e) {
    this.filter = e.target.value;
    this.updateTracks();
  }

  deleteTrack(track) {
    this.tracksService.deleteTrack(track.index);
    this.updateTracks();
  }

  editTrack(track, item) {
    item.close();
    this.nav.navigateForward(['/add-track', track.index]);
  }

  addTrack() {
    var _this = this;

    return (0,_Users_gigi_mppm_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.nav.navigateForward(['/add-track', -1], {
        animated: false
      });
      yield _this.nav.navigateForward('/yt-search');
    })();
  }

  presentMenu() {
    var _this2 = this;

    return (0,_Users_gigi_mppm_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this2.actionSheetController.create({
        buttons: [_this2.noTracks ? undefined : {
          text: _this2.xlate.transform('C_EXPORT'),
          handler: () => {
            setTimeout(() => _this2.storeService.export());
          }
        }, {
          text: _this2.xlate.transform('C_IMPORT'),
          handler: () => {
            setTimeout( /*#__PURE__*/(0,_Users_gigi_mppm_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              const ok = yield _this2.import();

              if (ok === undefined) {
                return;
              }

              if (ok) {
                _this2.updateTracks();
              } else {
                const toast = yield _this2.toastController.create({
                  message: _this2.xlate.transform('C_IMPORT_ERROR'),
                  duration: 4000
                });
                toast.present();
              }
            }));
          }
        }, _this2.noTracks ? undefined : {
          text: _this2.xlate.transform('C_REMOVE_ALL_TRACKS'),
          handler: () => {
            _this2.tracksService.removeAll();

            _this2.updateTracks();
          }
        }, {
          text: _this2.xlate.transform('C_INFO'),
          handler: () => _this2.presentInfo()
        }].filter(Boolean)
      });
      yield actionSheet.present();
    })();
  }

  import() {
    var _this3 = this;

    return (0,_Users_gigi_mppm_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const replacer = countTracks => new Promise( /*#__PURE__*/function () {
        var _ref2 = (0,_Users_gigi_mppm_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          let replace;
          let alert;

          const doIt = rep => () => {
            replace = rep;
            alert.dismiss();
          };

          alert = yield _this3.alertController.create({
            header: _this3.xlate.transform('C_IMPORT_TRACKS', {
              countTracks
            }),
            buttons: [{
              text: _this3.xlate.transform('C_REPLACE'),
              handler: doIt(true)
            }, {
              text: _this3.xlate.transform('C_APPEND'),
              handler: doIt(false)
            }]
          });
          alert.onDidDismiss().then(() => resolve(replace));
          yield alert.present();
        });

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }());

      return _this3.storeService.import(replacer);
    })();
  }

  openTrack(track) {
    var _this4 = this;

    return (0,_Users_gigi_mppm_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (track.file) {
        yield _service_soundtouch_soundtouch_player__WEBPACK_IMPORTED_MODULE_1__.SoundtouchPlayer.getInstance();
      }

      if (track.fileLost) {
        const files = yield (0,_service_util__WEBPACK_IMPORTED_MODULE_2__.fileDialog)({
          accept: 'audio/*'
        });
        _this4.tracksService.tracks[track.index].file = files[0];
      }

      _this4.nav.navigateForward(['/track', track.index]);
    })();
  }

  presentInfo() {
    this.nav.navigateForward('/info');
  }

  isFileLost({
    isFile,
    file
  }) {
    return isFile && file && typeof file.slice !== 'function';
  }

}

HomePage.ɵfac = function HomePage_Factory(t) {
  return new (t || HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_tracks_service__WEBPACK_IMPORTED_MODULE_3__.TracksService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ActionSheetController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_common_xlate_pipe__WEBPACK_IMPORTED_MODULE_4__.XlatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_store_service__WEBPACK_IMPORTED_MODULE_5__.StoreService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController));
};

HomePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: HomePage,
  selectors: [["mppm-home"]],
  decls: 14,
  vars: 13,
  consts: [[3, "hidden"], [3, "placeholder", "ionInput"], ["scroll-y", "false"], ["class", "title", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["slot", "fixed", 3, "vertical", "horizontal"], [1, "menu-container", 3, "click"], ["name", "menu"], [3, "click"], ["name", "add"], ["class", "add-track-info pulse", 4, "ngIf"], [1, "title"], ["it", ""], ["side", "end"], [1, "danger", 3, "click"], ["name", "trash"], ["class", "edit", 3, "click", 4, "ngIf"], [1, "edit", 3, "click"], ["name", "create"], [1, "add-track-info", "pulse"]],
  template: function HomePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-searchbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ionInput", function HomePage_Template_ion_searchbar_ionInput_2_listener($event) {
        return ctx.onFilterChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "xlate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-content", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, HomePage_h3_5_Template, 2, 0, "h3", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-list");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, HomePage_ion_item_sliding_7_Template, 9, 4, "ion-item-sliding", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "ion-fab", 5)(9, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HomePage_Template_div_click_9_listener() {
        return ctx.presentMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "ion-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "ion-fab-button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HomePage_Template_ion_fab_button_click_11_listener() {
        return ctx.addTrack();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "ion-icon", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, HomePage_div_13_Template, 3, 3, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.noTracks);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 11, "C_SEARCH"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.noTracks);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.tracks);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("with-tracks", !ctx.noTracks);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("vertical", ctx.noTracks ? "center" : "bottom")("horizontal", ctx.noTracks ? "center" : "end");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("pulse", ctx.noTracks);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.noTracks);
    }
  },
  directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonList, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItemSliding, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItemOptions, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItemOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonFabButton],
  pipes: [_common_xlate_pipe__WEBPACK_IMPORTED_MODULE_4__.XlatePipe],
  styles: ["ion-item-option[_ngcontent-%COMP%] {\n  font-size: 15pt;\n}\n\nion-fab[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%] {\n  cursor: pointer;\n  height: 56px;\n  display: flex;\n  position: relative;\n  top: -20px;\n  left: -10px;\n}\n\nion-fab[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%] {\n  position: relative;\n  left: -10px;\n}\n\nion-icon[name=menu][_ngcontent-%COMP%] {\n  background-color: white;\n  font-size: 24pt;\n  flex: 1;\n  position: relative;\n  top: 10px;\n}\n\n@keyframes pulse-animation {\n  0% {\n    opacity: 1;\n  }\n  30% {\n    opacity: 1;\n  }\n  40% {\n    opacity: 0.6;\n  }\n  50% {\n    opacity: 1;\n  }\n  60% {\n    opacity: 1;\n  }\n  70% {\n    opacity: 0.6;\n  }\n  80% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.file-lost[_ngcontent-%COMP%] {\n  color: gray;\n}\n\n.pulse[_ngcontent-%COMP%] {\n  animation-name: pulse-animation;\n  animation-duration: 4000ms;\n  transform-origin: 70% 70%;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n}\n\n.title[_ngcontent-%COMP%] {\n  margin-top: 120px;\n  text-align: center;\n}\n\n.add-track-info[_ngcontent-%COMP%] {\n  margin-left: 60px;\n  margin-top: -35px;\n  position: absolute;\n  white-space: nowrap;\n}\n\n.with-tracks[_ngcontent-%COMP%] {\n  bottom: 50px;\n}\n\n.danger[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: red;\n}\n\n.edit[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #8d1b6e;\n}"]
});

/***/ })

}]);