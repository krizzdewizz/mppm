"use strict";
(self["webpackChunkmppm"] = self["webpackChunkmppm"] || []).push([[1855],{

/***/ 1855:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-modal.entry.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ion_modal": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var _Users_gigi_mppm_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 8239);
/* harmony import */ var _index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-b3eecb14.js */ 8888);
/* harmony import */ var _ionic_global_f1ce4d2d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ionic-global-f1ce4d2d.js */ 3995);
/* harmony import */ var _framework_delegate_0d4f56b1_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./framework-delegate-0d4f56b1.js */ 9974);
/* harmony import */ var _helpers_1ec1a6dd_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers-1ec1a6dd.js */ 9098);
/* harmony import */ var _keyboard_4d5544a0_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./keyboard-4d5544a0.js */ 1893);
/* harmony import */ var _overlays_1159a357_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./overlays-1159a357.js */ 7434);
/* harmony import */ var _theme_7670341c_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme-7670341c.js */ 2187);
/* harmony import */ var _index_4913fd63_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index-4913fd63.js */ 5196);
/* harmony import */ var _animation_437b04e8_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./animation-437b04e8.js */ 3580);
/* harmony import */ var _cubic_bezier_c313947a_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cubic-bezier-c313947a.js */ 6590);
/* harmony import */ var _index_3f1a7d95_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index-3f1a7d95.js */ 2503);
/* harmony import */ var _hardware_back_button_490df115_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hardware-back-button-490df115.js */ 8657);
/* harmony import */ var _gesture_controller_17e82006_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./gesture-controller-17e82006.js */ 9398);


/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */












 // Defaults for the card swipe animation

const SwipeToCloseDefaults = {
  MIN_PRESENTING_SCALE: 0.93
};

const createSwipeToCloseGesture = (el, animation, onDismiss) => {
  const height = el.offsetHeight;
  let isOpen = false;

  const canStart = detail => {
    const target = detail.event.target;

    if (target === null || !target.closest) {
      return true;
    }

    const contentOrFooter = target.closest('ion-content, ion-footer');

    if (contentOrFooter === null) {
      return true;
    } // Target is in the content or the footer so do not start the gesture.
    // We could be more nuanced here and allow it for content that
    // does not need to scroll.


    return false;
  };

  const onStart = () => {
    animation.progressStart(true, isOpen ? 1 : 0);
  };

  const onMove = detail => {
    const step = (0,_helpers_1ec1a6dd_js__WEBPACK_IMPORTED_MODULE_4__.k)(0.0001, detail.deltaY / height, 0.9999);
    animation.progressStep(step);
  };

  const onEnd = detail => {
    const velocity = detail.velocityY;
    const step = (0,_helpers_1ec1a6dd_js__WEBPACK_IMPORTED_MODULE_4__.k)(0.0001, detail.deltaY / height, 0.9999);
    const threshold = (detail.deltaY + velocity * 1000) / height;
    const shouldComplete = threshold >= 0.5;
    let newStepValue = shouldComplete ? -0.001 : 0.001;

    if (!shouldComplete) {
      animation.easing('cubic-bezier(1, 0, 0.68, 0.28)');
      newStepValue += (0,_cubic_bezier_c313947a_js__WEBPACK_IMPORTED_MODULE_10__.g)([0, 0], [1, 0], [0.68, 0.28], [1, 1], step)[0];
    } else {
      animation.easing('cubic-bezier(0.32, 0.72, 0, 1)');
      newStepValue += (0,_cubic_bezier_c313947a_js__WEBPACK_IMPORTED_MODULE_10__.g)([0, 0], [0.32, 0.72], [0, 1], [1, 1], step)[0];
    }

    const duration = shouldComplete ? computeDuration(step * height, velocity) : computeDuration((1 - step) * height, velocity);
    isOpen = shouldComplete;
    gesture.enable(false);
    animation.onFinish(() => {
      if (!shouldComplete) {
        gesture.enable(true);
      }
    }).progressEnd(shouldComplete ? 1 : 0, newStepValue, duration);

    if (shouldComplete) {
      onDismiss();
    }
  };

  const gesture = (0,_index_3f1a7d95_js__WEBPACK_IMPORTED_MODULE_11__.createGesture)({
    el,
    gestureName: 'modalSwipeToClose',
    gesturePriority: 40,
    direction: 'y',
    threshold: 10,
    canStart,
    onStart,
    onMove,
    onEnd
  });
  return gesture;
};

const computeDuration = (remaining, velocity) => {
  return (0,_helpers_1ec1a6dd_js__WEBPACK_IMPORTED_MODULE_4__.k)(400, remaining / Math.abs(velocity * 1.1), 500);
};
/**
 * Use y = mx + b to
 * figure out the backdrop value
 * at a particular x coordinate. This
 * is useful when the backdrop does
 * not begin to fade in until after
 * the 0 breakpoint.
 */


const getBackdropValueForSheet = (x, backdropBreakpoint) => {
  /**
   * We will use these points:
   * (backdropBreakpoint, 0)
   * (maxBreakpoint, 1)
   * We know that at the beginning breakpoint,
   * the backdrop will be hidden. We also
   * know that at the maxBreakpoint, the backdrop
   * must be fully visible. maxBreakpoint should
   * always be 1 even if the maximum value
   * of the breakpoints array is not 1 since
   * the animation runs from a progress of 0
   * to a progress of 1.
   * m = (y2 - y1) / (x2 - x1)
   *
   * This is simplified from:
   * m = (1 - 0) / (maxBreakpoint - backdropBreakpoint)
   */
  const slope = 1 / (1 - backdropBreakpoint);
  /**
   * From here, compute b which is
   * the backdrop opacity if the offset
   * is 0. If the backdrop does not
   * begin to fade in until after the
   * 0 breakpoint, this b value will be
   * negative. This is fine as we never pass
   * b directly into the animation keyframes.
   * b = y - mx
   * Use a known point: (backdropBreakpoint, 0)
   * This is simplified from:
   * b = 0 - (backdropBreakpoint * slope)
   */

  const b = -(backdropBreakpoint * slope);
  /**
   * Finally, we can now determine the
   * backdrop offset given an arbitrary
   * gesture offset.
   */

  return x * slope + b;
};

const createSheetEnterAnimation = opts => {
  const {
    currentBreakpoint,
    backdropBreakpoint
  } = opts;
  /**
   * If the backdropBreakpoint is undefined, then the backdrop
   * should always fade in. If the backdropBreakpoint came before the
   * current breakpoint, then the backdrop should be fading in.
   */

  const shouldShowBackdrop = backdropBreakpoint === undefined || backdropBreakpoint < currentBreakpoint;
  const initialBackdrop = shouldShowBackdrop ? `calc(var(--backdrop-opacity) * ${currentBreakpoint})` : '0';
  const backdropAnimation = (0,_animation_437b04e8_js__WEBPACK_IMPORTED_MODULE_9__.c)('backdropAnimation').fromTo('opacity', 0, initialBackdrop);

  if (shouldShowBackdrop) {
    backdropAnimation.beforeStyles({
      'pointer-events': 'none'
    }).afterClearStyles(['pointer-events']);
  }

  const wrapperAnimation = (0,_animation_437b04e8_js__WEBPACK_IMPORTED_MODULE_9__.c)('wrapperAnimation').keyframes([{
    offset: 0,
    opacity: 1,
    transform: 'translateY(100%)'
  }, {
    offset: 1,
    opacity: 1,
    transform: `translateY(${100 - currentBreakpoint * 100}%)`
  }]);
  return {
    wrapperAnimation,
    backdropAnimation
  };
};

const createSheetLeaveAnimation = opts => {
  const {
    currentBreakpoint,
    backdropBreakpoint
  } = opts;
  /**
   * Backdrop does not always fade in from 0 to 1 if backdropBreakpoint
   * is defined, so we need to account for that offset by figuring out
   * what the current backdrop value should be.
   */

  const backdropValue = `calc(var(--backdrop-opacity) * ${getBackdropValueForSheet(currentBreakpoint, backdropBreakpoint)})`;
  const defaultBackdrop = [{
    offset: 0,
    opacity: backdropValue
  }, {
    offset: 1,
    opacity: 0
  }];
  const customBackdrop = [{
    offset: 0,
    opacity: backdropValue
  }, {
    offset: backdropBreakpoint,
    opacity: 0
  }, {
    offset: 1,
    opacity: 0
  }];
  const backdropAnimation = (0,_animation_437b04e8_js__WEBPACK_IMPORTED_MODULE_9__.c)('backdropAnimation').keyframes(backdropBreakpoint !== 0 ? customBackdrop : defaultBackdrop);
  const wrapperAnimation = (0,_animation_437b04e8_js__WEBPACK_IMPORTED_MODULE_9__.c)('wrapperAnimation').keyframes([{
    offset: 0,
    opacity: 1,
    transform: `translateY(${100 - currentBreakpoint * 100}%)`
  }, {
    offset: 1,
    opacity: 1,
    transform: `translateY(100%)`
  }]);
  return {
    wrapperAnimation,
    backdropAnimation
  };
};

const createEnterAnimation$1 = () => {
  const backdropAnimation = (0,_animation_437b04e8_js__WEBPACK_IMPORTED_MODULE_9__.c)().fromTo('opacity', 0.01, 'var(--backdrop-opacity)').beforeStyles({
    'pointer-events': 'none'
  }).afterClearStyles(['pointer-events']);
  const wrapperAnimation = (0,_animation_437b04e8_js__WEBPACK_IMPORTED_MODULE_9__.c)().fromTo('transform', 'translateY(100vh)', 'translateY(0vh)');
  return {
    backdropAnimation,
    wrapperAnimation
  };
};
/**
 * iOS Modal Enter Animation for the Card presentation style
 */


const iosEnterAnimation = (baseEl, opts) => {
  const {
    presentingEl,
    currentBreakpoint
  } = opts;
  const root = (0,_helpers_1ec1a6dd_js__WEBPACK_IMPORTED_MODULE_4__.g)(baseEl);
  const {
    wrapperAnimation,
    backdropAnimation
  } = currentBreakpoint !== undefined ? createSheetEnterAnimation(opts) : createEnterAnimation$1();
  backdropAnimation.addElement(root.querySelector('ion-backdrop'));
  wrapperAnimation.addElement(root.querySelectorAll('.modal-wrapper, .modal-shadow')).beforeStyles({
    opacity: 1
  });
  const baseAnimation = (0,_animation_437b04e8_js__WEBPACK_IMPORTED_MODULE_9__.c)('entering-base').addElement(baseEl).easing('cubic-bezier(0.32,0.72,0,1)').duration(500).addAnimation(wrapperAnimation);

  if (presentingEl) {
    const isMobile = window.innerWidth < 768;
    const hasCardModal = presentingEl.tagName === 'ION-MODAL' && presentingEl.presentingElement !== undefined;
    const presentingElRoot = (0,_helpers_1ec1a6dd_js__WEBPACK_IMPORTED_MODULE_4__.g)(presentingEl);
    const presentingAnimation = (0,_animation_437b04e8_js__WEBPACK_IMPORTED_MODULE_9__.c)().beforeStyles({
      transform: 'translateY(0)',
      'transform-origin': 'top center',
      overflow: 'hidden'
    });
    const bodyEl = document.body;

    if (isMobile) {
      /**
       * Fallback for browsers that does not support `max()` (ex: Firefox)
       * No need to worry about statusbar padding since engines like Gecko
       * are not used as the engine for standalone Cordova/Capacitor apps
       */
      const transformOffset = !CSS.supports('width', 'max(0px, 1px)') ? '30px' : 'max(30px, var(--ion-safe-area-top))';
      const modalTransform = hasCardModal ? '-10px' : transformOffset;
      const toPresentingScale = SwipeToCloseDefaults.MIN_PRESENTING_SCALE;
      const finalTransform = `translateY(${modalTransform}) scale(${toPresentingScale})`;
      presentingAnimation.afterStyles({
        transform: finalTransform
      }).beforeAddWrite(() => bodyEl.style.setProperty('background-color', 'black')).addElement(presentingEl).keyframes([{
        offset: 0,
        filter: 'contrast(1)',
        transform: 'translateY(0px) scale(1)',
        borderRadius: '0px'
      }, {
        offset: 1,
        filter: 'contrast(0.85)',
        transform: finalTransform,
        borderRadius: '10px 10px 0 0'
      }]);
      baseAnimation.addAnimation(presentingAnimation);
    } else {
      baseAnimation.addAnimation(backdropAnimation);

      if (!hasCardModal) {
        wrapperAnimation.fromTo('opacity', '0', '1');
      } else {
        const toPresentingScale = hasCardModal ? SwipeToCloseDefaults.MIN_PRESENTING_SCALE : 1;
        const finalTransform = `translateY(-10px) scale(${toPresentingScale})`;
        presentingAnimation.afterStyles({
          transform: finalTransform
        }).addElement(presentingElRoot.querySelector('.modal-wrapper')).keyframes([{
          offset: 0,
          filter: 'contrast(1)',
          transform: 'translateY(0) scale(1)'
        }, {
          offset: 1,
          filter: 'contrast(0.85)',
          transform: finalTransform
        }]);
        const shadowAnimation = (0,_animation_437b04e8_js__WEBPACK_IMPORTED_MODULE_9__.c)().afterStyles({
          transform: finalTransform
        }).addElement(presentingElRoot.querySelector('.modal-shadow')).keyframes([{
          offset: 0,
          opacity: '1',
          transform: 'translateY(0) scale(1)'
        }, {
          offset: 1,
          opacity: '0',
          transform: finalTransform
        }]);
        baseAnimation.addAnimation([presentingAnimation, shadowAnimation]);
      }
    }
  } else {
    baseAnimation.addAnimation(backdropAnimation);
  }

  return baseAnimation;
};

const createLeaveAnimation$1 = () => {
  const backdropAnimation = (0,_animation_437b04e8_js__WEBPACK_IMPORTED_MODULE_9__.c)().fromTo('opacity', 'var(--backdrop-opacity)', 0);
  const wrapperAnimation = (0,_animation_437b04e8_js__WEBPACK_IMPORTED_MODULE_9__.c)().fromTo('transform', 'translateY(0vh)', 'translateY(100vh)');
  return {
    backdropAnimation,
    wrapperAnimation
  };
};
/**
 * iOS Modal Leave Animation
 */


const iosLeaveAnimation = (baseEl, opts, duration = 500) => {
  const {
    presentingEl,
    currentBreakpoint
  } = opts;
  const root = (0,_helpers_1ec1a6dd_js__WEBPACK_IMPORTED_MODULE_4__.g)(baseEl);
  const {
    wrapperAnimation,
    backdropAnimation
  } = currentBreakpoint !== undefined ? createSheetLeaveAnimation(opts) : createLeaveAnimation$1();
  backdropAnimation.addElement(root.querySelector('ion-backdrop'));
  wrapperAnimation.addElement(root.querySelectorAll('.modal-wrapper, .modal-shadow')).beforeStyles({
    opacity: 1
  });
  const baseAnimation = (0,_animation_437b04e8_js__WEBPACK_IMPORTED_MODULE_9__.c)('leaving-base').addElement(baseEl).easing('cubic-bezier(0.32,0.72,0,1)').duration(duration).addAnimation(wrapperAnimation);

  if (presentingEl) {
    const isMobile = window.innerWidth < 768;
    const hasCardModal = presentingEl.tagName === 'ION-MODAL' && presentingEl.presentingElement !== undefined;
    const presentingElRoot = (0,_helpers_1ec1a6dd_js__WEBPACK_IMPORTED_MODULE_4__.g)(presentingEl);
    const presentingAnimation = (0,_animation_437b04e8_js__WEBPACK_IMPORTED_MODULE_9__.c)().beforeClearStyles(['transform']).afterClearStyles(['transform']).onFinish(currentStep => {
      // only reset background color if this is the last card-style modal
      if (currentStep !== 1) {
        return;
      }

      presentingEl.style.setProperty('overflow', '');
      const numModals = Array.from(bodyEl.querySelectorAll('ion-modal')).filter(m => m.presentingElement !== undefined).length;

      if (numModals <= 1) {
        bodyEl.style.setProperty('background-color', '');
      }
    });
    const bodyEl = document.body;

    if (isMobile) {
      const transformOffset = !CSS.supports('width', 'max(0px, 1px)') ? '30px' : 'max(30px, var(--ion-safe-area-top))';
      const modalTransform = hasCardModal ? '-10px' : transformOffset;
      const toPresentingScale = SwipeToCloseDefaults.MIN_PRESENTING_SCALE;
      const finalTransform = `translateY(${modalTransform}) scale(${toPresentingScale})`;
      presentingAnimation.addElement(presentingEl).keyframes([{
        offset: 0,
        filter: 'contrast(0.85)',
        transform: finalTransform,
        borderRadius: '10px 10px 0 0'
      }, {
        offset: 1,
        filter: 'contrast(1)',
        transform: 'translateY(0px) scale(1)',
        borderRadius: '0px'
      }]);
      baseAnimation.addAnimation(presentingAnimation);
    } else {
      baseAnimation.addAnimation(backdropAnimation);

      if (!hasCardModal) {
        wrapperAnimation.fromTo('opacity', '1', '0');
      } else {
        const toPresentingScale = hasCardModal ? SwipeToCloseDefaults.MIN_PRESENTING_SCALE : 1;
        const finalTransform = `translateY(-10px) scale(${toPresentingScale})`;
        presentingAnimation.addElement(presentingElRoot.querySelector('.modal-wrapper')).afterStyles({
          transform: 'translate3d(0, 0, 0)'
        }).keyframes([{
          offset: 0,
          filter: 'contrast(0.85)',
          transform: finalTransform
        }, {
          offset: 1,
          filter: 'contrast(1)',
          transform: 'translateY(0) scale(1)'
        }]);
        const shadowAnimation = (0,_animation_437b04e8_js__WEBPACK_IMPORTED_MODULE_9__.c)().addElement(presentingElRoot.querySelector('.modal-shadow')).afterStyles({
          transform: 'translateY(0) scale(1)'
        }).keyframes([{
          offset: 0,
          opacity: '0',
          transform: finalTransform
        }, {
          offset: 1,
          opacity: '1',
          transform: 'translateY(0) scale(1)'
        }]);
        baseAnimation.addAnimation([presentingAnimation, shadowAnimation]);
      }
    }
  } else {
    baseAnimation.addAnimation(backdropAnimation);
  }

  return baseAnimation;
};

const createEnterAnimation = () => {
  const backdropAnimation = (0,_animation_437b04e8_js__WEBPACK_IMPORTED_MODULE_9__.c)().fromTo('opacity', 0.01, 'var(--backdrop-opacity)').beforeStyles({
    'pointer-events': 'none'
  }).afterClearStyles(['pointer-events']);
  const wrapperAnimation = (0,_animation_437b04e8_js__WEBPACK_IMPORTED_MODULE_9__.c)().keyframes([{
    offset: 0,
    opacity: 0.01,
    transform: 'translateY(40px)'
  }, {
    offset: 1,
    opacity: 1,
    transform: `translateY(0px)`
  }]);
  return {
    backdropAnimation,
    wrapperAnimation
  };
};
/**
 * Md Modal Enter Animation
 */


const mdEnterAnimation = (baseEl, opts) => {
  const {
    currentBreakpoint
  } = opts;
  const root = (0,_helpers_1ec1a6dd_js__WEBPACK_IMPORTED_MODULE_4__.g)(baseEl);
  const {
    wrapperAnimation,
    backdropAnimation
  } = currentBreakpoint !== undefined ? createSheetEnterAnimation(opts) : createEnterAnimation();
  backdropAnimation.addElement(root.querySelector('ion-backdrop'));
  wrapperAnimation.addElement(root.querySelector('.modal-wrapper'));
  return (0,_animation_437b04e8_js__WEBPACK_IMPORTED_MODULE_9__.c)().addElement(baseEl).easing('cubic-bezier(0.36,0.66,0.04,1)').duration(280).addAnimation([backdropAnimation, wrapperAnimation]);
};

const createLeaveAnimation = () => {
  const backdropAnimation = (0,_animation_437b04e8_js__WEBPACK_IMPORTED_MODULE_9__.c)().fromTo('opacity', 'var(--backdrop-opacity)', 0);
  const wrapperAnimation = (0,_animation_437b04e8_js__WEBPACK_IMPORTED_MODULE_9__.c)().keyframes([{
    offset: 0,
    opacity: 0.99,
    transform: `translateY(0px)`
  }, {
    offset: 1,
    opacity: 0,
    transform: 'translateY(40px)'
  }]);
  return {
    backdropAnimation,
    wrapperAnimation
  };
};
/**
 * Md Modal Leave Animation
 */


const mdLeaveAnimation = (baseEl, opts) => {
  const {
    currentBreakpoint
  } = opts;
  const root = (0,_helpers_1ec1a6dd_js__WEBPACK_IMPORTED_MODULE_4__.g)(baseEl);
  const {
    wrapperAnimation,
    backdropAnimation
  } = currentBreakpoint !== undefined ? createSheetLeaveAnimation(opts) : createLeaveAnimation();
  backdropAnimation.addElement(root.querySelector('ion-backdrop'));
  wrapperAnimation.addElement(root.querySelector('.modal-wrapper'));
  return (0,_animation_437b04e8_js__WEBPACK_IMPORTED_MODULE_9__.c)().easing('cubic-bezier(0.47,0,0.745,0.715)').duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
};

const createSheetGesture = (baseEl, backdropEl, wrapperEl, initialBreakpoint, backdropBreakpoint, animation, breakpoints = [], onDismiss, onBreakpointChange) => {
  // Defaults for the sheet swipe animation
  const defaultBackdrop = [{
    offset: 0,
    opacity: 'var(--backdrop-opacity)'
  }, {
    offset: 1,
    opacity: 0.01
  }];
  const customBackdrop = [{
    offset: 0,
    opacity: 'var(--backdrop-opacity)'
  }, {
    offset: 1 - backdropBreakpoint,
    opacity: 0
  }, {
    offset: 1,
    opacity: 0
  }];
  const SheetDefaults = {
    WRAPPER_KEYFRAMES: [{
      offset: 0,
      transform: 'translateY(0%)'
    }, {
      offset: 1,
      transform: 'translateY(100%)'
    }],
    BACKDROP_KEYFRAMES: backdropBreakpoint !== 0 ? customBackdrop : defaultBackdrop
  };
  const contentEl = baseEl.querySelector('ion-content');
  const height = wrapperEl.clientHeight;
  let currentBreakpoint = initialBreakpoint;
  let offset = 0;
  const wrapperAnimation = animation.childAnimations.find(ani => ani.id === 'wrapperAnimation');
  const backdropAnimation = animation.childAnimations.find(ani => ani.id === 'backdropAnimation');
  const maxBreakpoint = breakpoints[breakpoints.length - 1];

  const enableBackdrop = () => {
    baseEl.style.setProperty('pointer-events', 'auto');
    backdropEl.style.setProperty('pointer-events', 'auto');
    /**
     * When the backdrop is enabled, elements such
     * as inputs should not be focusable outside
     * the sheet.
     */

    baseEl.classList.remove('ion-disable-focus-trap');
  };

  const disableBackdrop = () => {
    baseEl.style.setProperty('pointer-events', 'none');
    backdropEl.style.setProperty('pointer-events', 'none');
    /**
     * When the backdrop is enabled, elements such
     * as inputs should not be focusable outside
     * the sheet.
     * Adding this class disables focus trapping
     * for the sheet temporarily.
     */

    baseEl.classList.add('ion-disable-focus-trap');
  };
  /**
   * After the entering animation completes,
   * we need to set the animation to go from
   * offset 0 to offset 1 so that users can
   * swipe in any direction. We then set the
   * animation offset to the current breakpoint
   * so there is no flickering.
   */


  if (wrapperAnimation && backdropAnimation) {
    wrapperAnimation.keyframes([...SheetDefaults.WRAPPER_KEYFRAMES]);
    backdropAnimation.keyframes([...SheetDefaults.BACKDROP_KEYFRAMES]);
    animation.progressStart(true, 1 - currentBreakpoint);
    /**
     * If backdrop is not enabled, then content
     * behind modal should be clickable. To do this, we need
     * to remove pointer-events from ion-modal as a whole.
     * ion-backdrop and .modal-wrapper always have pointer-events: auto
     * applied, so the modal content can still be interacted with.
     */

    const shouldEnableBackdrop = currentBreakpoint > backdropBreakpoint;

    if (shouldEnableBackdrop) {
      enableBackdrop();
    } else {
      disableBackdrop();
    }
  }

  if (contentEl && currentBreakpoint !== maxBreakpoint) {
    contentEl.scrollY = false;
  }

  const canStart = detail => {
    /**
     * If the sheet is fully expanded and
     * the user is swiping on the content,
     * the gesture should not start to
     * allow for scrolling on the content.
     */
    const content = detail.event.target.closest('ion-content');

    if (currentBreakpoint === 1 && content) {
      return false;
    }

    return true;
  };

  const onStart = () => {
    /**
     * If swiping on the content
     * we should disable scrolling otherwise
     * the sheet will expand and the content will scroll.
     */
    if (contentEl) {
      contentEl.scrollY = false;
    }

    (0,_helpers_1ec1a6dd_js__WEBPACK_IMPORTED_MODULE_4__.r)(() => {
      /**
       * Dismisses the open keyboard when the sheet drag gesture is started.
       * Sets the focus onto the modal element.
       */
      baseEl.focus();
    });
    animation.progressStart(true, 1 - currentBreakpoint);
  };

  const onMove = detail => {
    /**
     * Given the change in gesture position on the Y axis,
     * compute where the offset of the animation should be
     * relative to where the user dragged.
     */
    const initialStep = 1 - currentBreakpoint;
    offset = (0,_helpers_1ec1a6dd_js__WEBPACK_IMPORTED_MODULE_4__.k)(0.0001, initialStep + detail.deltaY / height, 0.9999);
    animation.progressStep(offset);
  };

  const onEnd = detail => {
    /**
     * When the gesture releases, we need to determine
     * the closest breakpoint to snap to.
     */
    const velocity = detail.velocityY;
    const threshold = (detail.deltaY + velocity * 100) / height;
    const diff = currentBreakpoint - threshold;
    const closest = breakpoints.reduce((a, b) => {
      return Math.abs(b - diff) < Math.abs(a - diff) ? b : a;
    });
    const shouldRemainOpen = closest !== 0;
    currentBreakpoint = 0;
    /**
     * Update the animation so that it plays from
     * the last offset to the closest snap point.
     */

    if (wrapperAnimation && backdropAnimation) {
      wrapperAnimation.keyframes([{
        offset: 0,
        transform: `translateY(${offset * 100}%)`
      }, {
        offset: 1,
        transform: `translateY(${(1 - closest) * 100}%)`
      }]);
      backdropAnimation.keyframes([{
        offset: 0,
        opacity: `calc(var(--backdrop-opacity) * ${getBackdropValueForSheet(1 - offset, backdropBreakpoint)})`
      }, {
        offset: 1,
        opacity: `calc(var(--backdrop-opacity) * ${getBackdropValueForSheet(closest, backdropBreakpoint)})`
      }]);
      animation.progressStep(0);
    }
    /**
     * Gesture should remain disabled until the
     * snapping animation completes.
     */


    gesture.enable(false);
    animation.onFinish(() => {
      if (shouldRemainOpen) {
        /**
         * Once the snapping animation completes,
         * we need to reset the animation to go
         * from 0 to 1 so users can swipe in any direction.
         * We then set the animation offset to the current
         * breakpoint so that it starts at the snapped position.
         */
        if (wrapperAnimation && backdropAnimation) {
          (0,_helpers_1ec1a6dd_js__WEBPACK_IMPORTED_MODULE_4__.r)(() => {
            wrapperAnimation.keyframes([...SheetDefaults.WRAPPER_KEYFRAMES]);
            backdropAnimation.keyframes([...SheetDefaults.BACKDROP_KEYFRAMES]);
            animation.progressStart(true, 1 - closest);
            currentBreakpoint = closest;
            onBreakpointChange(currentBreakpoint);
            /**
             * If the sheet is fully expanded, we can safely
             * enable scrolling again.
             */

            if (contentEl && currentBreakpoint === breakpoints[breakpoints.length - 1]) {
              contentEl.scrollY = true;
            }
            /**
             * Backdrop should become enabled
             * after the backdropBreakpoint value
             */


            const shouldEnableBackdrop = currentBreakpoint > backdropBreakpoint;

            if (shouldEnableBackdrop) {
              enableBackdrop();
            } else {
              disableBackdrop();
            }

            gesture.enable(true);
          });
        } else {
          gesture.enable(true);
        }
      }
      /**
       * This must be a one time callback
       * otherwise a new callback will
       * be added every time onEnd runs.
       */

    }, {
      oneTimeCallback: true
    }).progressEnd(1, 0, 500);

    if (!shouldRemainOpen) {
      onDismiss();
    }
  };

  const gesture = (0,_index_3f1a7d95_js__WEBPACK_IMPORTED_MODULE_11__.createGesture)({
    el: wrapperEl,
    gestureName: 'modalSheet',
    gesturePriority: 40,
    direction: 'y',
    threshold: 10,
    canStart,
    onStart,
    onMove,
    onEnd
  });
  return gesture;
};

const modalIosCss = ":host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;margin-left:auto;margin-right:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);background:var(--ion-color-step-350, #c0c0be);z-index:11}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-card) .modal-wrapper,:host-context([dir=rtl]).modal-card .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-sheet) .modal-wrapper,:host-context([dir=rtl]).modal-sheet .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}";
const modalMdCss = ":host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;margin-left:auto;margin-right:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);background:var(--ion-color-step-350, #c0c0be);z-index:11}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}";
const Modal = class {
  constructor(hostRef) {
    (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.didPresent = (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionModalDidPresent", 7);
    this.willPresent = (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionModalWillPresent", 7);
    this.willDismiss = (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionModalWillDismiss", 7);
    this.didDismiss = (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionModalDidDismiss", 7);
    this.didPresentShorthand = (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "didPresent", 7);
    this.willPresentShorthand = (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "willPresent", 7);
    this.willDismissShorthand = (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "willDismiss", 7);
    this.didDismissShorthand = (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "didDismiss", 7);
    this.modalIndex = modalIds++;
    this.coreDelegate = (0,_framework_delegate_0d4f56b1_js__WEBPACK_IMPORTED_MODULE_3__.C)();
    this.isSheetModal = false;
    this.inline = false; // Whether or not modal is being dismissed via gesture

    this.gestureAnimationDismissing = false;
    this.presented = false;
    /** @internal */

    this.hasController = false;
    /**
     * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
     */

    this.keyboardClose = true;
    /**
     * A decimal value between 0 and 1 that indicates the
     * point after which the backdrop will begin to fade in
     * when using a sheet modal. Prior to this point, the
     * backdrop will be hidden and the content underneath
     * the sheet can be interacted with. This value is exclusive
     * meaning the backdrop will become active after the value
     * specified.
     */

    this.backdropBreakpoint = 0;
    /**
     * If `true`, the modal will be dismissed when the backdrop is clicked.
     */

    this.backdropDismiss = true;
    /**
     * If `true`, a backdrop will be displayed behind the modal.
     */

    this.showBackdrop = true;
    /**
     * If `true`, the modal will animate.
     */

    this.animated = true;
    /**
     * If `true`, the modal can be swiped to dismiss. Only applies in iOS mode.
     */

    this.swipeToClose = false;
    /**
     * If `true`, the modal will open. If `false`, the modal will close.
     * Use this if you need finer grained control over presentation, otherwise
     * just use the modalController or the `trigger` property.
     * Note: `isOpen` will not automatically be set back to `false` when
     * the modal dismisses. You will need to do that in your code.
     */

    this.isOpen = false;

    this.configureTriggerInteraction = () => {
      const {
        trigger,
        el,
        destroyTriggerInteraction
      } = this;

      if (destroyTriggerInteraction) {
        destroyTriggerInteraction();
      }

      const triggerEl = trigger !== undefined ? document.getElementById(trigger) : null;

      if (!triggerEl) {
        return;
      }

      const configureTriggerInteraction = (trigEl, modalEl) => {
        const openModal = () => {
          modalEl.present();
        };

        trigEl.addEventListener('click', openModal);
        return () => {
          trigEl.removeEventListener('click', openModal);
        };
      };

      this.destroyTriggerInteraction = configureTriggerInteraction(triggerEl, el);
    };

    this.onBackdropTap = () => {
      this.dismiss(undefined, _overlays_1159a357_js__WEBPACK_IMPORTED_MODULE_6__.B);
    };

    this.onDismiss = ev => {
      ev.stopPropagation();
      ev.preventDefault();
      this.dismiss();
    };

    this.onLifecycle = modalEvent => {
      const el = this.usersElement;
      const name = LIFECYCLE_MAP[modalEvent.type];

      if (el && name) {
        const ev = new CustomEvent(name, {
          bubbles: false,
          cancelable: false,
          detail: modalEvent.detail
        });
        el.dispatchEvent(ev);
      }
    };
  }

  onIsOpenChange(newValue, oldValue) {
    if (newValue === true && oldValue === false) {
      this.present();
    } else if (newValue === false && oldValue === true) {
      this.dismiss();
    }
  }

  onTriggerChange() {
    this.configureTriggerInteraction();
  }

  swipeToCloseChanged(enable) {
    if (this.gesture) {
      this.gesture.enable(enable);
    } else if (enable) {
      this.initSwipeToClose();
    }
  }

  connectedCallback() {
    (0,_overlays_1159a357_js__WEBPACK_IMPORTED_MODULE_6__.e)(this.el);
  }

  componentWillLoad() {
    const {
      breakpoints,
      initialBreakpoint
    } = this;
    /**
     * If user has custom ID set then we should
     * not assign the default incrementing ID.
     */

    this.modalId = this.el.hasAttribute('id') ? this.el.getAttribute('id') : `ion-modal-${this.modalIndex}`;
    this.isSheetModal = breakpoints !== undefined && initialBreakpoint !== undefined;

    if (breakpoints !== undefined && initialBreakpoint !== undefined && !breakpoints.includes(initialBreakpoint)) {
      console.warn('[Ionic Warning]: Your breakpoints array must include the initialBreakpoint value.');
    }
  }

  componentDidLoad() {
    /**
     * If modal was rendered with isOpen="true"
     * then we should open modal immediately.
     */
    if (this.isOpen === true) {
      (0,_helpers_1ec1a6dd_js__WEBPACK_IMPORTED_MODULE_4__.r)(() => this.present());
    }

    this.configureTriggerInteraction();
  }
  /**
   * Determines whether or not an overlay
   * is being used inline or via a controller/JS
   * and returns the correct delegate.
   * By default, subsequent calls to getDelegate
   * will use a cached version of the delegate.
   * This is useful for calling dismiss after
   * present so that the correct delegate is given.
   */


  getDelegate(force = false) {
    if (this.workingDelegate && !force) {
      return {
        delegate: this.workingDelegate,
        inline: this.inline
      };
    }
    /**
     * If using overlay inline
     * we potentially need to use the coreDelegate
     * so that this works in vanilla JS apps.
     * If a developer has presented this component
     * via a controller, then we can assume
     * the component is already in the
     * correct place.
     */


    const parentEl = this.el.parentNode;
    const inline = this.inline = parentEl !== null && !this.hasController;
    const delegate = this.workingDelegate = inline ? this.delegate || this.coreDelegate : this.delegate;
    return {
      inline,
      delegate
    };
  }
  /**
   * Present the modal overlay after it has been created.
   */


  present() {
    var _this = this;

    return (0,_Users_gigi_mppm_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.presented) {
        return;
      }
      /**
       * When using an inline modal
       * and dismissing a modal it is possible to
       * quickly present the modal while it is
       * dismissing. We need to await any current
       * transition to allow the dismiss to finish
       * before presenting again.
       */


      if (_this.currentTransition !== undefined) {
        yield _this.currentTransition;
      }

      const data = Object.assign(Object.assign({}, _this.componentProps), {
        modal: _this.el
      });

      const {
        inline,
        delegate
      } = _this.getDelegate(true);

      _this.usersElement = yield (0,_framework_delegate_0d4f56b1_js__WEBPACK_IMPORTED_MODULE_3__.a)(delegate, _this.el, _this.component, ['ion-page'], data, inline);
      yield (0,_index_4913fd63_js__WEBPACK_IMPORTED_MODULE_8__.e)(_this.usersElement);
      (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.c)(() => _this.el.classList.add('show-modal'));
      _this.currentTransition = (0,_overlays_1159a357_js__WEBPACK_IMPORTED_MODULE_6__.d)(_this, 'modalEnter', iosEnterAnimation, mdEnterAnimation, {
        presentingEl: _this.presentingElement,
        currentBreakpoint: _this.initialBreakpoint,
        backdropBreakpoint: _this.backdropBreakpoint
      });
      yield _this.currentTransition;

      if (_this.isSheetModal) {
        _this.initSheetGesture();
      } else if (_this.swipeToClose) {
        _this.initSwipeToClose();
      }

      if (typeof window !== 'undefined') {
        _this.keyboardOpenCallback = () => {
          if (_this.gesture) {
            /**
             * When the native keyboard is opened and the webview
             * is resized, the gesture implementation will become unresponsive
             * and enter a free-scroll mode.
             *
             * When the keyboard is opened, we disable the gesture for
             * a single frame and re-enable once the contents have repositioned
             * from the keyboard placement.
             */
            _this.gesture.enable(false);

            (0,_helpers_1ec1a6dd_js__WEBPACK_IMPORTED_MODULE_4__.r)(() => {
              if (_this.gesture) {
                _this.gesture.enable(true);
              }
            });
          }
        };

        window.addEventListener(_keyboard_4d5544a0_js__WEBPACK_IMPORTED_MODULE_5__.KEYBOARD_DID_OPEN, _this.keyboardOpenCallback);
      }

      _this.currentTransition = undefined;
    })();
  }

  initSwipeToClose() {
    var _this2 = this;

    if ((0,_ionic_global_f1ce4d2d_js__WEBPACK_IMPORTED_MODULE_2__.b)(this) !== 'ios') {
      return;
    } // All of the elements needed for the swipe gesture
    // should be in the DOM and referenced by now, except
    // for the presenting el


    const animationBuilder = this.leaveAnimation || _ionic_global_f1ce4d2d_js__WEBPACK_IMPORTED_MODULE_2__.c.get('modalLeave', iosLeaveAnimation);
    const ani = this.animation = animationBuilder(this.el, {
      presentingEl: this.presentingElement
    });
    this.gesture = createSwipeToCloseGesture(this.el, ani, () => {
      /**
       * While the gesture animation is finishing
       * it is possible for a user to tap the backdrop.
       * This would result in the dismiss animation
       * being played again. Typically this is avoided
       * by setting `presented = false` on the overlay
       * component; however, we cannot do that here as
       * that would prevent the element from being
       * removed from the DOM.
       */
      this.gestureAnimationDismissing = true;
      this.animation.onFinish( /*#__PURE__*/(0,_Users_gigi_mppm_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _this2.dismiss(undefined, 'gesture');
        _this2.gestureAnimationDismissing = false;
      }));
    });
    this.gesture.enable(true);
  }

  initSheetGesture() {
    var _this3 = this;

    var _a;

    const {
      wrapperEl,
      initialBreakpoint,
      backdropBreakpoint
    } = this;

    if (!wrapperEl || initialBreakpoint === undefined) {
      return;
    }

    const animationBuilder = this.enterAnimation || _ionic_global_f1ce4d2d_js__WEBPACK_IMPORTED_MODULE_2__.c.get('modalEnter', iosEnterAnimation);
    const ani = this.animation = animationBuilder(this.el, {
      presentingEl: this.presentingElement,
      currentBreakpoint: initialBreakpoint,
      backdropBreakpoint
    });
    ani.progressStart(true, 1);
    const sortedBreakpoints = ((_a = this.breakpoints) === null || _a === void 0 ? void 0 : _a.sort((a, b) => a - b)) || [];
    this.gesture = createSheetGesture(this.el, this.backdropEl, wrapperEl, initialBreakpoint, backdropBreakpoint, ani, sortedBreakpoints, () => {
      /**
       * While the gesture animation is finishing
       * it is possible for a user to tap the backdrop.
       * This would result in the dismiss animation
       * being played again. Typically this is avoided
       * by setting `presented = false` on the overlay
       * component; however, we cannot do that here as
       * that would prevent the element from being
       * removed from the DOM.
       */
      this.gestureAnimationDismissing = true;
      this.animation.onFinish( /*#__PURE__*/(0,_Users_gigi_mppm_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _this3.dismiss(undefined, 'gesture');
        _this3.gestureAnimationDismissing = false;
      }));
    }, breakpoint => {
      this.currentBreakpoint = breakpoint;
    });
    this.gesture.enable(true);
  }
  /**
   * Dismiss the modal overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the modal. For example, 'cancel' or 'backdrop'.
   */


  dismiss(data, role) {
    var _this4 = this;

    return (0,_Users_gigi_mppm_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.gestureAnimationDismissing && role !== 'gesture') {
        return false;
      }

      if (typeof window !== 'undefined' && _this4.keyboardOpenCallback) {
        window.removeEventListener(_keyboard_4d5544a0_js__WEBPACK_IMPORTED_MODULE_5__.KEYBOARD_DID_OPEN, _this4.keyboardOpenCallback);
      }
      /**
       * When using an inline modal
       * and presenting a modal it is possible to
       * quickly dismiss the modal while it is
       * presenting. We need to await any current
       * transition to allow the present to finish
       * before dismissing again.
       */


      if (_this4.currentTransition !== undefined) {
        yield _this4.currentTransition;
      }

      const enteringAnimation = _overlays_1159a357_js__WEBPACK_IMPORTED_MODULE_6__.h.get(_this4) || [];
      _this4.currentTransition = (0,_overlays_1159a357_js__WEBPACK_IMPORTED_MODULE_6__.f)(_this4, data, role, 'modalLeave', iosLeaveAnimation, mdLeaveAnimation, {
        presentingEl: _this4.presentingElement,
        currentBreakpoint: _this4.currentBreakpoint || _this4.initialBreakpoint,
        backdropBreakpoint: _this4.backdropBreakpoint
      });
      const dismissed = yield _this4.currentTransition;

      if (dismissed) {
        const {
          delegate
        } = _this4.getDelegate();

        yield (0,_framework_delegate_0d4f56b1_js__WEBPACK_IMPORTED_MODULE_3__.d)(delegate, _this4.usersElement);
        (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.c)(() => _this4.el.classList.remove('show-modal'));

        if (_this4.animation) {
          _this4.animation.destroy();
        }

        if (_this4.gesture) {
          _this4.gesture.destroy();
        }

        enteringAnimation.forEach(ani => ani.destroy());
      }

      _this4.currentTransition = undefined;
      _this4.animation = undefined;
      return dismissed;
    })();
  }
  /**
   * Returns a promise that resolves when the modal did dismiss.
   */


  onDidDismiss() {
    return (0,_overlays_1159a357_js__WEBPACK_IMPORTED_MODULE_6__.g)(this.el, 'ionModalDidDismiss');
  }
  /**
   * Returns a promise that resolves when the modal will dismiss.
   */


  onWillDismiss() {
    return (0,_overlays_1159a357_js__WEBPACK_IMPORTED_MODULE_6__.g)(this.el, 'ionModalWillDismiss');
  }

  render() {
    const {
      handle,
      isSheetModal,
      presentingElement,
      htmlAttributes
    } = this;
    const showHandle = handle !== false && isSheetModal;
    const mode = (0,_ionic_global_f1ce4d2d_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);
    const {
      modalId
    } = this;
    const isCardModal = presentingElement !== undefined && mode === 'ios';
    return (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.H, Object.assign({
      "no-router": true,
      "aria-modal": "true",
      tabindex: "-1"
    }, htmlAttributes, {
      style: {
        zIndex: `${20000 + this.overlayIndex}`
      },
      class: Object.assign({
        [mode]: true,
        ['modal-default']: !isCardModal && !isSheetModal,
        [`modal-card`]: isCardModal,
        [`modal-sheet`]: isSheetModal,
        'overlay-hidden': true
      }, (0,_theme_7670341c_js__WEBPACK_IMPORTED_MODULE_7__.g)(this.cssClass)),
      id: modalId,
      onIonBackdropTap: this.onBackdropTap,
      onIonDismiss: this.onDismiss,
      onIonModalDidPresent: this.onLifecycle,
      onIonModalWillPresent: this.onLifecycle,
      onIonModalWillDismiss: this.onLifecycle,
      onIonModalDidDismiss: this.onLifecycle
    }), (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-backdrop", {
      ref: el => this.backdropEl = el,
      visible: this.showBackdrop,
      tappable: this.backdropDismiss,
      part: "backdrop"
    }), mode === 'ios' && (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "modal-shadow"
    }), (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      role: "dialog",
      class: "modal-wrapper ion-overlay-wrapper",
      part: "content",
      ref: el => this.wrapperEl = el
    }, showHandle && (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "modal-handle",
      part: "handle"
    }), (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", null)));
  }

  get el() {
    return (0,_index_b3eecb14_js__WEBPACK_IMPORTED_MODULE_1__.i)(this);
  }

  static get watchers() {
    return {
      "isOpen": ["onIsOpenChange"],
      "trigger": ["onTriggerChange"],
      "swipeToClose": ["swipeToCloseChanged"]
    };
  }

};
const LIFECYCLE_MAP = {
  ionModalDidPresent: 'ionViewDidEnter',
  ionModalWillPresent: 'ionViewWillEnter',
  ionModalWillDismiss: 'ionViewWillLeave',
  ionModalDidDismiss: 'ionViewDidLeave'
};
let modalIds = 0;
Modal.style = {
  ios: modalIosCss,
  md: modalMdCss
};


/***/ })

}]);