"use strict";
(self["webpackChunkmppm"] = self["webpackChunkmppm"] || []).push([[9222],{

/***/ 9222:
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ion_radio": () => (/* binding */ Radio),
/* harmony export */   "ion_radio_group": () => (/* binding */ RadioGroup)
/* harmony export */ });
/* harmony import */ var _Users_gigi_mppm_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 8239);
/* harmony import */ var _index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-b3eecb14.js */ 8888);
/* harmony import */ var _ionic_global_f1ce4d2d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ionic-global-f1ce4d2d.js */ 3995);
/* harmony import */ var _helpers_1ec1a6dd_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-1ec1a6dd.js */ 9098);
/* harmony import */ var _theme_7670341c_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-7670341c.js */ 2187);


/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */




const radioIosCss = ":host{--inner-border-radius:50%;display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;contain:layout size style}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host(:focus){outline:none}:host{--color-checked:var(--ion-color-primary, #3880ff);width:15px;height:24px}:host(.ion-color.radio-checked) .radio-inner{border-color:var(--ion-color-base)}.item-radio.item-ios ion-label{margin-left:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-radio.item-ios ion-label{margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}.radio-inner{width:33%;height:50%}:host(.radio-checked) .radio-inner{-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--color-checked)}:host(.radio-disabled){opacity:0.3}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);left:-9px;top:-8px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #4c8dff);content:\"\";opacity:0.2}:host-context([dir=rtl]):host(.ion-focused) .radio-icon::after,:host-context([dir=rtl]).ion-focused .radio-icon::after{left:unset;right:unset;right:-9px}:host(.in-item){margin-left:10px;margin-right:11px;margin-top:8px;margin-bottom:8px;display:block;position:static}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:11px;margin-inline-end:11px}}:host(.in-item[slot=start]){margin-left:3px;margin-right:21px;margin-top:8px;margin-bottom:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:3px;margin-inline-start:3px;-webkit-margin-end:21px;margin-inline-end:21px}}";
const radioMdCss = ":host{--inner-border-radius:50%;display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;contain:layout size style}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host(:focus){outline:none}:host{--color:var(--ion-color-step-400, #999999);--color-checked:var(--ion-color-primary, #3880ff);--border-width:2px;--border-style:solid;--border-radius:50%;width:20px;height:20px}:host(.ion-color) .radio-inner{background:var(--ion-color-base)}:host(.ion-color.radio-checked) .radio-icon{border-color:var(--ion-color-base)}.radio-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:var(--border-radius);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--color)}.radio-inner{border-radius:var(--inner-border-radius);width:calc(50% + var(--border-width));height:calc(50% + var(--border-width));-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0);-webkit-transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);background:var(--color-checked)}:host(.radio-checked) .radio-icon{border-color:var(--color-checked)}:host(.radio-checked) .radio-inner{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}:host(.radio-disabled){opacity:0.3}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);left:-12px;top:-12px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #4c8dff);content:\"\";opacity:0.2}:host-context([dir=rtl]):host(.ion-focused) .radio-icon::after,:host-context([dir=rtl]).ion-focused .radio-icon::after{left:unset;right:unset;right:-12px}:host(.in-item){margin-left:0;margin-right:0;margin-top:9px;margin-bottom:9px;display:block;position:static}:host(.in-item[slot=start]){margin-left:4px;margin-right:36px;margin-top:11px;margin-bottom:10px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px}}";
const Radio = class {
  constructor(hostRef) {
    (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.ionStyle = (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionStyle", 7);
    this.ionFocus = (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionFocus", 7);
    this.ionBlur = (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionBlur", 7);
    this.inputId = `ion-rb-${radioButtonIds++}`;
    this.radioGroup = null;
    /**
     * If `true`, the radio is selected.
     */

    this.checked = false;
    /**
     * The tabindex of the radio button.
     * @internal
     */

    this.buttonTabindex = -1;
    /**
     * The name of the control, which is submitted with the form data.
     */

    this.name = this.inputId;
    /**
     * If `true`, the user cannot interact with the radio.
     */

    this.disabled = false;

    this.updateState = () => {
      if (this.radioGroup) {
        this.checked = this.radioGroup.value === this.value;
      }
    };

    this.onClick = () => {
      this.checked = this.nativeInput.checked;
    };

    this.onFocus = () => {
      this.ionFocus.emit();
    };

    this.onBlur = () => {
      this.ionBlur.emit();
    };
  }
  /** @internal */


  setFocus(ev) {
    var _this = this;

    return (0,_Users_gigi_mppm_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      ev.stopPropagation();
      ev.preventDefault();

      _this.el.focus();
    })();
  }
  /** @internal */


  setButtonTabindex(value) {
    var _this2 = this;

    return (0,_Users_gigi_mppm_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.buttonTabindex = value;
    })();
  }

  connectedCallback() {
    if (this.value === undefined) {
      this.value = this.inputId;
    }

    const radioGroup = this.radioGroup = this.el.closest('ion-radio-group');

    if (radioGroup) {
      this.updateState();
      (0,_helpers_1ec1a6dd_js__WEBPACK_IMPORTED_MODULE_3__.a)(radioGroup, 'ionChange', this.updateState);
    }
  }

  disconnectedCallback() {
    const radioGroup = this.radioGroup;

    if (radioGroup) {
      (0,_helpers_1ec1a6dd_js__WEBPACK_IMPORTED_MODULE_3__.b)(radioGroup, 'ionChange', this.updateState);
      this.radioGroup = null;
    }
  }

  componentWillLoad() {
    this.emitStyle();
  }

  emitStyle() {
    this.ionStyle.emit({
      'radio-checked': this.checked,
      'interactive-disabled': this.disabled
    });
  }

  render() {
    const {
      inputId,
      disabled,
      checked,
      color,
      el,
      buttonTabindex
    } = this;
    const mode = (0,_ionic_global_f1ce4d2d_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);
    const {
      label,
      labelId,
      labelText
    } = (0,_helpers_1ec1a6dd_js__WEBPACK_IMPORTED_MODULE_3__.d)(el, inputId);
    return (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.H, {
      "aria-checked": `${checked}`,
      "aria-hidden": disabled ? 'true' : null,
      "aria-labelledby": label ? labelId : null,
      role: "radio",
      tabindex: buttonTabindex,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onClick: this.onClick,
      class: (0,_theme_7670341c_js__WEBPACK_IMPORTED_MODULE_4__.c)(color, {
        [mode]: true,
        'in-item': (0,_theme_7670341c_js__WEBPACK_IMPORTED_MODULE_4__.h)('ion-item', el),
        interactive: true,
        'radio-checked': checked,
        'radio-disabled': disabled
      })
    }, (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "radio-icon",
      part: "container"
    }, (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "radio-inner",
      part: "mark"
    }), (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "radio-ripple"
    })), (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.h)("label", {
      htmlFor: inputId
    }, labelText), (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.h)("input", {
      type: "radio",
      checked: checked,
      disabled: disabled,
      tabindex: "-1",
      id: inputId,
      ref: nativeEl => this.nativeInput = nativeEl
    }));
  }

  get el() {
    return (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.i)(this);
  }

  static get watchers() {
    return {
      "color": ["emitStyle"],
      "checked": ["emitStyle"],
      "disabled": ["emitStyle"]
    };
  }

};
let radioButtonIds = 0;
Radio.style = {
  ios: radioIosCss,
  md: radioMdCss
};
const RadioGroup = class {
  constructor(hostRef) {
    (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.ionChange = (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionChange", 7);
    this.inputId = `ion-rg-${radioGroupIds++}`;
    this.labelId = `${this.inputId}-lbl`;
    /**
     * If `true`, the radios can be deselected.
     */

    this.allowEmptySelection = false;
    /**
     * The name of the control, which is submitted with the form data.
     */

    this.name = this.inputId;

    this.setRadioTabindex = value => {
      const radios = this.getRadios(); // Get the first radio that is not disabled and the checked one

      const first = radios.find(radio => !radio.disabled);
      const checked = radios.find(radio => radio.value === value && !radio.disabled);

      if (!first && !checked) {
        return;
      } // If an enabled checked radio exists, set it to be the focusable radio
      // otherwise we default to focus the first radio


      const focusable = checked || first;

      for (const radio of radios) {
        const tabindex = radio === focusable ? 0 : -1;
        radio.setButtonTabindex(tabindex);
      }
    };

    this.onClick = ev => {
      ev.preventDefault();
      const selectedRadio = ev.target && ev.target.closest('ion-radio');

      if (selectedRadio) {
        const currentValue = this.value;
        const newValue = selectedRadio.value;

        if (newValue !== currentValue) {
          this.value = newValue;
        } else if (this.allowEmptySelection) {
          this.value = undefined;
        }
      }
    };
  }

  valueChanged(value) {
    this.setRadioTabindex(value);
    this.ionChange.emit({
      value
    });
  }

  componentDidLoad() {
    this.setRadioTabindex(this.value);
  }

  connectedCallback() {
    var _this3 = this;

    return (0,_Users_gigi_mppm_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Get the list header if it exists and set the id
      // this is used to set aria-labelledby
      const header = _this3.el.querySelector('ion-list-header') || _this3.el.querySelector('ion-item-divider');

      if (header) {
        const label = _this3.label = header.querySelector('ion-label');

        if (label) {
          _this3.labelId = label.id = _this3.name + '-lbl';
        }
      }
    })();
  }

  getRadios() {
    return Array.from(this.el.querySelectorAll('ion-radio'));
  }

  onKeydown(ev) {
    const inSelectPopover = !!this.el.closest('ion-select-popover');

    if (ev.target && !this.el.contains(ev.target)) {
      return;
    } // Get all radios inside of the radio group and then
    // filter out disabled radios since we need to skip those


    const radios = this.getRadios().filter(radio => !radio.disabled); // Only move the radio if the current focus is in the radio group

    if (ev.target && radios.includes(ev.target)) {
      const index = radios.findIndex(radio => radio === ev.target);
      const current = radios[index];
      let next; // If hitting arrow down or arrow right, move to the next radio
      // If we're on the last radio, move to the first radio

      if (['ArrowDown', 'ArrowRight'].includes(ev.code)) {
        next = index === radios.length - 1 ? radios[0] : radios[index + 1];
      } // If hitting arrow up or arrow left, move to the previous radio
      // If we're on the first radio, move to the last radio


      if (['ArrowUp', 'ArrowLeft'].includes(ev.code)) {
        next = index === 0 ? radios[radios.length - 1] : radios[index - 1];
      }

      if (next && radios.includes(next)) {
        next.setFocus(ev);

        if (!inSelectPopover) {
          this.value = next.value;
        }
      } // Update the radio group value when a user presses the
      // space bar on top of a selected radio


      if (['Space'].includes(ev.code)) {
        this.value = this.allowEmptySelection && this.value !== undefined ? undefined : current.value; // Prevent browsers from jumping
        // to the bottom of the screen

        ev.preventDefault();
      }
    }
  }

  render() {
    const {
      label,
      labelId
    } = this;
    const mode = (0,_ionic_global_f1ce4d2d_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);
    return (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.H, {
      role: "radiogroup",
      "aria-labelledby": label ? labelId : null,
      onClick: this.onClick,
      class: mode
    });
  }

  get el() {
    return (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.i)(this);
  }

  static get watchers() {
    return {
      "value": ["valueChanged"]
    };
  }

};
let radioGroupIds = 0;


/***/ })

}]);