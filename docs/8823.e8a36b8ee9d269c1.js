"use strict";
(self["webpackChunkmppm"] = self["webpackChunkmppm"] || []).push([[8823],{

/***/ 8823:
/*!***************************************!*\
  !*** ./src/app/track/track.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrackPageModule": () => (/* binding */ TrackPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 1048);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1659);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5113);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _track_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./track.page */ 9140);
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/common.module */ 9174);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9724);








const routes = [
    {
        path: '',
        component: _track_page__WEBPACK_IMPORTED_MODULE_0__.TrackPage
    }
];
class TrackPageModule {
}
TrackPageModule.ɵfac = function TrackPageModule_Factory(t) { return new (t || TrackPageModule)(); };
TrackPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TrackPageModule });
TrackPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _common_common_module__WEBPACK_IMPORTED_MODULE_1__.MppCommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TrackPageModule, { declarations: [_track_page__WEBPACK_IMPORTED_MODULE_0__.TrackPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _common_common_module__WEBPACK_IMPORTED_MODULE_1__.MppCommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 9140:
/*!*************************************!*\
  !*** ./src/app/track/track.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrackPage": () => (/* binding */ TrackPage)
/* harmony export */ });
/* harmony import */ var _Users_gigi_mppm_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 8239);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 9724);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 2948);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 8960);
/* harmony import */ var _common_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/events */ 8920);
/* harmony import */ var _service_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/player.service */ 8633);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 5113);
/* harmony import */ var _service_tracks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/tracks.service */ 1038);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _common_xlate_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/xlate.pipe */ 4863);
/* harmony import */ var _common_marker_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/marker.pipe */ 8321);
/* harmony import */ var _common_long_click_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/long-click.directive */ 429);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 1048);
/* harmony import */ var _audio_audio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../audio/audio.component */ 2651);















const _c0 = ["ytplayer"];
const _c1 = ["contentElement"];
const _c2 = ["settingsElement"];

function TrackPage_ion_button_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("mppmClickLong", function TrackPage_ion_button_75_Template_ion_button_mppmClickLong_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);
      const markerIndex_r7 = restoredCtx.index;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r8.presentActionSheet(markerIndex_r7);
    })("mppmClick", function TrackPage_ion_button_75_Template_ion_button_mppmClick_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);
      const markerIndex_r7 = restoredCtx.index;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r10.setActiveMarker(markerIndex_r7);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "marker");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const marker_r6 = ctx.$implicit;
    const markerIndex_r7 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("marker-active", ctx_r1.activeMarker === markerIndex_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 5, marker_r6.value), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](marker_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](markerIndex_r7 + 1);
  }
}

function TrackPage_div_100_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 34)(1, "label", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TrackPage_div_100_Template_label_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r11.resetPitch();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Pitch");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ion-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("mppmClickLong", function TrackPage_div_100_Template_ion_button_mppmClickLong_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r13.onPitchLong(true);
    })("mppmClick", function TrackPage_div_100_Template_ion_button_mppmClick_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r14.onPitch(true);
    })("mppmClickEnd", function TrackPage_div_100_Template_ion_button_mppmClickEnd_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r15.longClickEnd();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "ion-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "ion-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("mppmClickLong", function TrackPage_div_100_Template_ion_button_mppmClickLong_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r16.onPitchLong(false);
    })("mppmClick", function TrackPage_div_100_Template_ion_button_mppmClick_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r17.onPitch(false);
    })("mppmClickEnd", function TrackPage_div_100_Template_ion_button_mppmClickEnd_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r18.longClickEnd();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "ion-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](5, 1, ctx_r4.pitch, "1.2-2"));
  }
}

function TrackPage_div_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 34)(1, "label", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TrackPage_div_101_Template_label_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r19.resetTempo();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Tempo");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ion-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("mppmClickLong", function TrackPage_div_101_Template_ion_button_mppmClickLong_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r21.onTempoLong(true);
    })("mppmClick", function TrackPage_div_101_Template_ion_button_mppmClick_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r20);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r22.onTempo(true);
    })("mppmClickEnd", function TrackPage_div_101_Template_ion_button_mppmClickEnd_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r20);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r23.longClickEnd();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "ion-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "ion-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("mppmClickLong", function TrackPage_div_101_Template_ion_button_mppmClickLong_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r20);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r24.onTempoLong(false);
    })("mppmClick", function TrackPage_div_101_Template_ion_button_mppmClick_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r20);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r25.onTempo(false);
    })("mppmClickEnd", function TrackPage_div_101_Template_ion_button_mppmClickEnd_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r20);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r26.longClickEnd();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "ion-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](5, 1, ctx_r5.tempo, "1.2-2"));
  }
}

const LONG_CLICK_SEEK_INTERVAL = 200;
const LONG_CLICK_SEEK_SECONDS = 5;
class TrackPage {
  constructor(activatedRoute, tracksService, playerService, actionSheetController, nav, xlate, markerPipe) {
    this.activatedRoute = activatedRoute;
    this.tracksService = tracksService;
    this.playerService = playerService;
    this.actionSheetController = actionSheetController;
    this.nav = nav;
    this.xlate = xlate;
    this.markerPipe = markerPipe;
    this.showHelp = false;
    this.showSettings = false;
    this.actionSheetVisible = false;
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription();
  }

  ngOnInit() {
    this.trackIndex = Number(this.activatedRoute.snapshot.paramMap.get('index'));
    this.track = this.tracksService.tracks[this.trackIndex];
    this.setPlayerPropsFromTrack();
    this.subscription.add(this.playerService.playerReady.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.delay)(300) // for offsetWidth
    ).subscribe(() => {
      if (this.track.file) {
        this.playerService.openFile(this.track.file);
        this.setPlayerPropsFromTrack();
      } else {
        this.playerService.open(this.track.videoUrl, this.ytplayer, this.contentEl.nativeElement.offsetWidth);
      }
    }));
    this.subscription.add(this.playerService.volumeChange.subscribe(volume => {
      this.track.volume = volume;
      this.save();
    }));
    this.subscription.add(_common_events__WEBPACK_IMPORTED_MODULE_1__.Events.marker.subscribe(e => {
      switch (e.type) {
        case 'ADD':
          this.addMarker();
          break;

        case 'MOVE_ACTIVE':
          this.moveMarker(e.back);
          break;

        case 'SET_ACTIVE':
          this.setActiveMarker(e.index);
          break;

        case 'SEEK_TO_ACTIVE':
          this.seekToActiveMarker();
          break;

        case 'TOGGLE_HELP':
          this.showHelp = !this.showHelp;
          break;
      }
    }));
    this.playPositionTimer = setInterval(() => {
      if (!this.playPosition && !this.playerService.isPlaying) {
        return;
      }

      this.playPositionNumber = this.playerService.getCurrentTime();
      this.playPosition = this.markerPipe.transform(this.playPositionNumber);
    }, 500);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.playerService.destroy();
    clearInterval(this.playPositionTimer);
  }

  get playPauseIcon() {
    return this.playerService.isPlaying ? 'pause' : 'play';
  }

  get markers() {
    return this.track.markers;
  }

  playPause() {
    this.playerService.playPause();
  }

  seekToStart() {
    this.playerService.seekToStart();
  }

  seekTo(seconds) {
    this.playerService.seekTo(seconds);
  }

  backwardForward(back, amount = 1) {
    this.playerService.backwardForward(back, amount);
  }

  backwardForwardLong(back) {
    this.longClickInterval = setInterval(() => this.backwardForward(back, LONG_CLICK_SEEK_SECONDS), LONG_CLICK_SEEK_INTERVAL);
  }

  longClickEnd() {
    clearInterval(this.longClickInterval);
  }

  moveMarkerLong(back) {
    this.longClickInterval = setInterval(() => this.moveMarker(back, LONG_CLICK_SEEK_SECONDS), LONG_CLICK_SEEK_INTERVAL);
  }

  seekToActiveMarker() {
    if (this.noActiveMarker) {
      return;
    }

    this.playerService.seekTo(this.track.markers[this.activeMarker].value);
  }

  get noActiveMarker() {
    return this.activeMarker === undefined;
  }

  get isAtStart() {
    return this.playerService.getCurrentTime() === 0;
  }

  addMarker() {
    const currentTime = this.playerService.getCurrentTime();

    if (currentTime) {
      this.track.markers.push({
        value: currentTime
      });
      this.sortMarkers();
      this.activeMarker = this.track.markers.findIndex(m => m.value === currentTime);
      this.tracksService.saveTracks();
    }
  }

  deleteMarker(markerIndex) {
    this.track.markers = this.track.markers.filter((it, i) => i !== markerIndex);
    delete this.activeMarker;
    this.tracksService.saveTracks();
  }

  setActiveMarker(index) {
    if (index >= 0 && index < this.track.markers.length) {
      this.activeMarker = index;
      this.seekToActiveMarker();
    }
  }

  moveMarker(back, amount = 1) {
    const {
      activeMarker,
      track
    } = this;
    const {
      markers
    } = track;
    const newMarker = (0,_service_player_service__WEBPACK_IMPORTED_MODULE_2__.incrValue)(markers[activeMarker].value, back, amount);
    markers[activeMarker].value = newMarker;
    this.sortMarkers();
    this.activeMarker = markers.findIndex(m => m.value === newMarker);
    this.seekToActiveMarker();
    this.tracksService.saveTracks();
  }

  sortMarkers() {
    this.track.markers.sort((a, b) => a.value < b.value ? -1 : a.value > b.value ? 1 : 0);
  }

  presentActionSheet(markerIndex) {
    var _this = this;

    return (0,_Users_gigi_mppm_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.actionSheetVisible = true;
      const actionSheet = yield _this.actionSheetController.create({
        header: `${_this.xlate.transform('C_MARKER')} ${_this.track.markers[markerIndex].title || ''}`,
        buttons: [{
          text: _this.xlate.transform('C_DESCRIPTION'),
          icon: 'create',
          handler: () => _this.nav.navigateForward(['/marker-detail', _this.trackIndex, markerIndex])
        }, {
          text: _this.xlate.transform('C_DELETE'),
          icon: 'trash',
          handler: () => _this.deleteMarker(markerIndex)
        }]
      });
      actionSheet.onDidDismiss().then(() => _this.actionSheetVisible = false);
      yield actionSheet.present();
    })();
  }

  get volume() {
    return this.playerService.getVolume();
  }

  get pitch() {
    return this.playerService.getPitch();
  }

  get tempo() {
    return this.playerService.getTempo();
  }

  get duration() {
    return this.playerService.getDuration();
  }

  resetVolume() {
    this.playerService.setVolume(1, {
      emitChangeEvent: false
    });
    this.track.volume = 1;
    this.save();
  }

  resetPitch() {
    this.playerService.setPitch(this.track.pitch = 1);
    this.save();
  }

  resetTempo() {
    this.playerService.setTempo(this.track.tempo = 1);
    this.save();
  }

  onVolume(decr, amount = 0.05) {
    const vol = (0,_service_player_service__WEBPACK_IMPORTED_MODULE_2__.incrValue)(this.volume || 1, decr, amount);
    this.playerService.setVolume(vol, {
      emitChangeEvent: false
    });
    this.track.volume = this.playerService.getVolume();
    this.save();
  }

  onVolumeLong(decr) {
    this.longClickInterval = setInterval(() => this.onVolume(decr, 0.1), LONG_CLICK_SEEK_INTERVAL);
  }

  onPitch(decr, amount = 0.01) {
    this.playerService.setPitch(this.track.pitch = (0,_service_player_service__WEBPACK_IMPORTED_MODULE_2__.incrValue)(this.pitch || 1, decr, amount));
    this.save();
  }

  onPitchLong(decr) {
    this.longClickInterval = setInterval(() => this.onPitch(decr, 0.05), LONG_CLICK_SEEK_INTERVAL);
  }

  onTempo(decr, amount = 0.01) {
    this.playerService.setTempo(this.track.tempo = (0,_service_player_service__WEBPACK_IMPORTED_MODULE_2__.incrValue)(this.tempo || 1, decr, amount));
    this.save();
  }

  onTempoLong(decr) {
    this.longClickInterval = setInterval(() => this.onTempo(decr, 0.05), LONG_CLICK_SEEK_INTERVAL);
  }

  get playerNotReady() {
    return !this.playerService.isReady();
  }

  save() {
    clearTimeout(this.saveTimer);
    this.saveTimer = setTimeout(() => this.tracksService.saveTracks(), 1000);
  }

  setPlayerPropsFromTrack() {
    this.playerService.setVolume(this.track.volume || 1, {
      emitChangeEvent: false
    });
    this.playerService.setPitch(this.track.pitch || 1);
    this.playerService.setTempo(this.track.tempo || 1);
  }

}

TrackPage.ɵfac = function TrackPage_Factory(t) {
  return new (t || TrackPage)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_service_tracks_service__WEBPACK_IMPORTED_MODULE_3__.TracksService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_service_player_service__WEBPACK_IMPORTED_MODULE_2__.PlayerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ActionSheetController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_common_xlate_pipe__WEBPACK_IMPORTED_MODULE_4__.XlatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_common_marker_pipe__WEBPACK_IMPORTED_MODULE_5__.MarkerPipe));
};

TrackPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: TrackPage,
  selectors: [["mppm-track"]],
  viewQuery: function TrackPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c1, 7, _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c2, 7, _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.ytplayer = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.contentEl = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.settingsEl = _t.first);
    }
  },
  decls: 102,
  vars: 63,
  consts: [["slot", "end"], [3, "click"], ["name", "settings"], ["name", "help"], ["scroll-y", "false"], ["contentElement", ""], [1, "main-content"], [1, "tools"], [1, "play-pause", "player-btn", 3, "disabled", "click"], [3, "name"], [1, "key"], [1, "help"], [1, "play-position"], [1, "seek-to-start", "player-btn", 3, "disabled", "click"], ["name", "play-skip-back"], ["mppmLongClick", "", 1, "backward", "player-btn", 3, "disabled", "mppmClick", "mppmClickLong", "mppmClickEnd"], ["name", "play-back"], ["mppmLongClick", "", 1, "forward", "player-btn", 3, "disabled", "mppmClick", "mppmClickLong", "mppmClickEnd"], ["name", "play-forward"], [1, "marker-tools"], [1, "marker-btn", 3, "disabled", "click"], ["mppmLongClick", "", 1, "marker-btn", 3, "disabled", "mppmClick", "mppmClickLong", "mppmClickEnd"], [3, "disabled", "click"], ["name", "add"], [1, "markers"], ["mppmLongClick", "", 3, "marker-active", "mppmClickLong", "mppmClick", 4, "ngFor", "ngForOf"], [1, "spacer"], [1, "audio-player", 3, "hidden"], [3, "position", "duration", "seek"], [3, "hidden"], ["ytplayer", ""], [1, "settings-backdrop", 3, "hidden", "click"], [1, "settings", 3, "hidden"], ["settingsElement", ""], [1, "card"], ["mppmLongClick", "", 3, "mppmClickLong", "mppmClick", "mppmClickEnd"], ["name", "remove"], ["class", "card", 4, "ngIf"], ["mppmLongClick", "", 3, "mppmClickLong", "mppmClick"], [1, "marker-title"]],
  template: function TrackPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "ion-back-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ion-buttons", 0)(7, "ion-button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TrackPage_Template_ion_button_click_7_listener($event) {
        ctx.showSettings = !ctx.showSettings;
        return $event.cancelBubble = true;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "ion-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "ion-button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TrackPage_Template_ion_button_click_9_listener() {
        return ctx.showHelp = !ctx.showHelp;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "ion-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "ion-content", 4, 5)(13, "div", 6)(14, "div", 7)(15, "ion-button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TrackPage_Template_ion_button_click_15_listener() {
        return ctx.playPause();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "ion-icon", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "space");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](21, "xlate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "ion-button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TrackPage_Template_ion_button_click_24_listener() {
        return ctx.seekToStart();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "ion-icon", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "return");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](30, "xlate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "ion-button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("mppmClick", function TrackPage_Template_ion_button_mppmClick_31_listener() {
        return ctx.backwardForward(true);
      })("mppmClickLong", function TrackPage_Template_ion_button_mppmClickLong_31_listener() {
        return ctx.backwardForwardLong(true);
      })("mppmClickEnd", function TrackPage_Template_ion_button_mppmClickEnd_31_listener() {
        return ctx.longClickEnd();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](32, "ion-icon", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "left");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](37, "xlate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "ion-button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("mppmClick", function TrackPage_Template_ion_button_mppmClick_38_listener() {
        return ctx.backwardForward(false);
      })("mppmClickLong", function TrackPage_Template_ion_button_mppmClickLong_38_listener() {
        return ctx.backwardForwardLong(false);
      })("mppmClickEnd", function TrackPage_Template_ion_button_mppmClickEnd_38_listener() {
        return ctx.longClickEnd();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](39, "ion-icon", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "right");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](44, "xlate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "div", 19)(46, "ion-button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TrackPage_Template_ion_button_click_46_listener() {
        return ctx.seekToActiveMarker();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](47, "ion-icon", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, "backspace");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](52, "xlate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "ion-button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("mppmClick", function TrackPage_Template_ion_button_mppmClick_53_listener() {
        return ctx.moveMarker(true);
      })("mppmClickLong", function TrackPage_Template_ion_button_mppmClickLong_53_listener() {
        return ctx.moveMarkerLong(true);
      })("mppmClickEnd", function TrackPage_Template_ion_button_mppmClickEnd_53_listener() {
        return ctx.longClickEnd();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](54, "ion-icon", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](56, "up");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](58);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](59, "xlate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "ion-button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("mppmClick", function TrackPage_Template_ion_button_mppmClick_60_listener() {
        return ctx.moveMarker(false);
      })("mppmClickLong", function TrackPage_Template_ion_button_mppmClickLong_60_listener() {
        return ctx.moveMarkerLong(false);
      })("mppmClickEnd", function TrackPage_Template_ion_button_mppmClickEnd_60_listener() {
        return ctx.longClickEnd();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](61, "ion-icon", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](63, "down");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](65);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](66, "xlate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "ion-button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TrackPage_Template_ion_button_click_67_listener() {
        return ctx.addMarker();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](68, "ion-icon", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](70, "a");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](72);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](73, "xlate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](75, TrackPage_ion_button_75_Template, 7, 7, "ion-button", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](76, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "div", 27)(78, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](79);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](80, "marker");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](81, "marker");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](82, "mppm-audio", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("seek", function TrackPage_Template_mppm_audio_seek_82_listener($event) {
        return ctx.seekTo($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](84, "div", null, 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](86, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TrackPage_Template_div_click_86_listener() {
        return ctx.showSettings = false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](87, "div", 32, 33)(89, "div", 34)(90, "label", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TrackPage_Template_label_click_90_listener() {
        return ctx.resetVolume();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](91);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](92, "xlate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](93, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](94);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](95, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](96, "ion-button", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("mppmClickLong", function TrackPage_Template_ion_button_mppmClickLong_96_listener() {
        return ctx.onVolumeLong(true);
      })("mppmClick", function TrackPage_Template_ion_button_mppmClick_96_listener() {
        return ctx.onVolume(true);
      })("mppmClickEnd", function TrackPage_Template_ion_button_mppmClickEnd_96_listener() {
        return ctx.longClickEnd();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](97, "ion-icon", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](98, "ion-button", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("mppmClickLong", function TrackPage_Template_ion_button_mppmClickLong_98_listener() {
        return ctx.onVolumeLong(false);
      })("mppmClick", function TrackPage_Template_ion_button_mppmClick_98_listener() {
        return ctx.onVolume(false);
      })("mppmClickEnd", function TrackPage_Template_ion_button_mppmClickEnd_98_listener() {
        return ctx.longClickEnd();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](99, "ion-icon", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](100, TrackPage_div_100_Template, 10, 4, "div", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](101, TrackPage_div_101_Template, 10, 4, "div", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.track == null ? null : ctx.track.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("settings-visible", ctx.showSettings);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("help-visible", ctx.showHelp);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("show-help", ctx.showHelp);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.playerNotReady);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("name", ctx.playPauseIcon);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](21, 38, "C_HELP_PLAY_PAUSE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.playPosition);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.playerNotReady);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](30, 40, "C_HELP_TO_START"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.playerNotReady);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](37, 42, "C_HELP_BACKWARD"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.playerNotReady);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](44, 44, "C_HELP_FORWARD"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.noActiveMarker || ctx.playerNotReady);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](52, 46, "C_HELP_TO_MARKER"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.noActiveMarker || ctx.playerNotReady);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](59, 48, "C_HELP_PLAY_MARKER_BACKWARD"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.noActiveMarker || ctx.playerNotReady);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](66, 50, "C_HELP_MARKER_FORWARD"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.isAtStart || ctx.playerNotReady);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](73, 52, "C_HELP_ADD_MARKER"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.markers);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", !ctx.track.isFile);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](80, 54, ctx.playPositionNumber || 0), " / ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](81, 56, ctx.duration), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("position", ctx.playPositionNumber)("duration", ctx.duration);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", ctx.track.isFile || ctx.actionSheetVisible);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", !ctx.showSettings);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", !ctx.showSettings);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](92, 58, "C_VOLUME"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](95, 60, ctx.volume, "1.2-2"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.track.isFile);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.track.isFile);
    }
  },
  directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonBackButtonDelegate, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonContent, _common_long_click_directive__WEBPACK_IMPORTED_MODULE_6__.LongClickDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _audio_audio_component__WEBPACK_IMPORTED_MODULE_7__.AudioComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf],
  pipes: [_common_xlate_pipe__WEBPACK_IMPORTED_MODULE_4__.XlatePipe, _common_marker_pipe__WEBPACK_IMPORTED_MODULE_5__.MarkerPipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DecimalPipe],
  styles: ["ion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  width: calc(100% - 120px);\n}\nion-header[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 25px;\n  margin: 10px;\n}\nion-header[_ngcontent-%COMP%]   .settings-visible[_ngcontent-%COMP%], ion-header[_ngcontent-%COMP%]   .help-visible[_ngcontent-%COMP%] {\n  color: #c2309b;\n}\n.player-btn[_ngcontent-%COMP%] {\n  --background: #3880ff;\n}\n.tools[_ngcontent-%COMP%] {\n  height: 40%;\n  display: grid;\n  grid-row-gap: 3px;\n  margin: 2px;\n  margin-top: 0;\n}\n.tools[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.play-pause[_ngcontent-%COMP%] {\n  grid-column: 1/4;\n  text-align: center;\n}\n.seek-to-start[_ngcontent-%COMP%], .backward[_ngcontent-%COMP%], .forward[_ngcontent-%COMP%] {\n  grid-row: 2;\n}\n.marker-tools[_ngcontent-%COMP%] {\n  grid-row: 3;\n  grid-column: 1/4;\n  display: flex;\n  padding-top: 1px;\n}\n.marker-tools[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  height: 100%;\n  flex: 1;\n  --background: darkcyan;\n}\n.marker-tools[_ngcontent-%COMP%]   .marker-btn[_ngcontent-%COMP%] {\n  --background: #8d1b6e;\n}\n.markers[_ngcontent-%COMP%] {\n  margin: 2px;\n}\n.markers[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  height: 70px;\n  width: 80px;\n  margin: 2px;\n  --background: darkcyan;\n}\n.markers[_ngcontent-%COMP%]   ion-button.marker-active[_ngcontent-%COMP%] {\n  --background: #8d1b6e;\n}\n.marker-title[_ngcontent-%COMP%] {\n  font-size: 9pt;\n  position: absolute;\n  left: 2px;\n  top: 2px;\n  text-transform: initial;\n}\n.main-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\nion-button[_ngcontent-%COMP%] {\n  --padding-start: 5px;\n  --padding-end: 5px;\n  font-size: 14pt;\n  margin: 2px;\n}\n.key[_ngcontent-%COMP%], .help[_ngcontent-%COMP%] {\n  font-size: 10pt;\n  position: absolute;\n  text-transform: initial;\n  visibility: hidden;\n}\n.key[_ngcontent-%COMP%] {\n  right: 5px;\n  bottom: 5px;\n}\n.help[_ngcontent-%COMP%] {\n  left: 5px;\n  top: 5px;\n  white-space: initial;\n  text-align: left;\n}\n.show-help[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.show-help[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.play-position[_ngcontent-%COMP%] {\n  font-size: 12pt;\n  position: absolute;\n  bottom: 5px;\n  left: 10px;\n}\n.audio-player[_ngcontent-%COMP%] {\n  margin-bottom: 60px;\n  width: 100%;\n  padding: 5px;\n}\n.audio-player[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  letter-spacing: 1.2px;\n  font-size: smaller;\n}\n.settings-backdrop[_ngcontent-%COMP%] {\n  background-color: black;\n  opacity: 0.4;\n  top: 30px;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n.settings[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  opacity: 0.95;\n  pointer-events: none;\n}\n.settings[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  width: 70%;\n  background-color: white;\n  padding: 10px;\n  display: grid;\n  grid-template-columns: 40% auto 50px 50px;\n  align-items: center;\n  pointer-events: auto;\n}\n.settings[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  position: relative;\n  width: 180px;\n}\n.settings[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:last-child {\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n.settings[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  width: 100%;\n  align-self: center;\n}\n.settings[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  flex: 1;\n  --background: darkcyan;\n}"]
});

/***/ })

}]);