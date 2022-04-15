"use strict";
(self["webpackChunkmppm"] = self["webpackChunkmppm"] || []).push([[7896],{

/***/ 7896:
/*!*******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ion_split_pane": () => (/* binding */ SplitPane)
/* harmony export */ });
/* harmony import */ var _Users_gigi_mppm_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 8239);
/* harmony import */ var _index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-b3eecb14.js */ 8888);
/* harmony import */ var _ionic_global_f1ce4d2d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ionic-global-f1ce4d2d.js */ 3995);


/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


const splitPaneIosCss = ":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}::slotted(ion-menu.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width);min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.split-pane-visible) ::slotted(.split-pane-side),:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none !important;box-shadow:none !important;z-index:0}:host(.split-pane-visible) ::slotted(.split-pane-main){-ms-flex:1;flex:1}:host(.split-pane-visible) ::slotted(.split-pane-side:not(ion-menu)),:host(.split-pane-visible) ::slotted(ion-menu.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host(.split-pane-visible) ::slotted(.split-pane-side){-ms-flex-order:-1;order:-1}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host{--border:0.55px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));--side-min-width:270px;--side-max-width:28%}:host(.split-pane-visible) ::slotted(.split-pane-side){border-left:0;border-right:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.split-pane-visible) ::slotted(.split-pane-side){border-left:unset;border-right:unset;-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border)}}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){border-left:var(--border);border-right:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){border-left:unset;border-right:unset;-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0}}";
const splitPaneMdCss = ":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}::slotted(ion-menu.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width);min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.split-pane-visible) ::slotted(.split-pane-side),:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none !important;box-shadow:none !important;z-index:0}:host(.split-pane-visible) ::slotted(.split-pane-main){-ms-flex:1;flex:1}:host(.split-pane-visible) ::slotted(.split-pane-side:not(ion-menu)),:host(.split-pane-visible) ::slotted(ion-menu.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host(.split-pane-visible) ::slotted(.split-pane-side){-ms-flex-order:-1;order:-1}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host{--border:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));--side-min-width:270px;--side-max-width:28%}:host(.split-pane-visible) ::slotted(.split-pane-side){border-left:0;border-right:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.split-pane-visible) ::slotted(.split-pane-side){border-left:unset;border-right:unset;-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border)}}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){border-left:var(--border);border-right:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){border-left:unset;border-right:unset;-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0}}";
const SPLIT_PANE_MAIN = 'split-pane-main';
const SPLIT_PANE_SIDE = 'split-pane-side';
const QUERY = {
  xs: '(min-width: 0px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  never: ''
};
const SplitPane = class {
  constructor(hostRef) {
    (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.ionSplitPaneVisible = (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionSplitPaneVisible", 7);
    this.visible = false;
    /**
     * If `true`, the split pane will be hidden.
     */

    this.disabled = false;
    /**
     * When the split-pane should be shown.
     * Can be a CSS media query expression, or a shortcut expression.
     * Can also be a boolean expression.
     */

    this.when = QUERY['lg'];
  }

  visibleChanged(visible) {
    const detail = {
      visible,
      isPane: this.isPane.bind(this)
    };
    this.ionSplitPaneVisible.emit(detail);
  }

  connectedCallback() {
    var _this = this;

    return (0,_Users_gigi_mppm_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // TODO: connectedCallback is fired in CE build
      // before WC is defined. This needs to be fixed in Stencil.
      if (typeof customElements !== 'undefined') {
        yield customElements.whenDefined('ion-split-pane');
      }

      _this.styleChildren();

      _this.updateState();
    })();
  }

  disconnectedCallback() {
    if (this.rmL) {
      this.rmL();
      this.rmL = undefined;
    }
  }

  updateState() {
    if (this.rmL) {
      this.rmL();
      this.rmL = undefined;
    } // Check if the split-pane is disabled


    if (this.disabled) {
      this.visible = false;
      return;
    } // When query is a boolean


    const query = this.when;

    if (typeof query === 'boolean') {
      this.visible = query;
      return;
    } // When query is a string, let's find first if it is a shortcut


    const mediaQuery = QUERY[query] || query; // Media query is empty or null, we hide it

    if (mediaQuery.length === 0) {
      this.visible = false;
      return;
    }

    if (window.matchMedia) {
      // Listen on media query
      const callback = q => {
        this.visible = q.matches;
      };

      const mediaList = window.matchMedia(mediaQuery);
      mediaList.addListener(callback);

      this.rmL = () => mediaList.removeListener(callback);

      this.visible = mediaList.matches;
    }
  }

  isPane(element) {
    if (!this.visible) {
      return false;
    }

    return element.parentElement === this.el && element.classList.contains(SPLIT_PANE_SIDE);
  }

  styleChildren() {
    const contentId = this.contentId;
    const children = this.el.children;
    const nu = this.el.childElementCount;
    let foundMain = false;

    for (let i = 0; i < nu; i++) {
      const child = children[i];
      const isMain = contentId !== undefined && child.id === contentId;

      if (isMain) {
        if (foundMain) {
          console.warn('split pane cannot have more than one main node');
          return;
        }

        foundMain = true;
      }

      setPaneClass(child, isMain);
    }

    if (!foundMain) {
      console.warn('split pane does not have a specified main node');
    }
  }

  render() {
    const mode = (0,_ionic_global_f1ce4d2d_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);
    return (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.H, {
      class: {
        [mode]: true,
        // Used internally for styling
        [`split-pane-${mode}`]: true,
        'split-pane-visible': this.visible
      }
    }, (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", null));
  }

  get el() {
    return (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.i)(this);
  }

  static get watchers() {
    return {
      "visible": ["visibleChanged"],
      "disabled": ["updateState"],
      "when": ["updateState"]
    };
  }

};

const setPaneClass = (el, isMain) => {
  let toAdd;
  let toRemove;

  if (isMain) {
    toAdd = SPLIT_PANE_MAIN;
    toRemove = SPLIT_PANE_SIDE;
  } else {
    toAdd = SPLIT_PANE_SIDE;
    toRemove = SPLIT_PANE_MAIN;
  }

  const classList = el.classList;
  classList.add(toAdd);
  classList.remove(toRemove);
};

SplitPane.style = {
  ios: splitPaneIosCss,
  md: splitPaneMdCss
};


/***/ })

}]);