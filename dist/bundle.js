/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@glidejs/glide/dist/glide.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/@glidejs/glide/dist/glide.esm.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Glide)
/* harmony export */ });
/*!
 * Glide.js v3.5.2
 * (c) 2013-2021 Jędrzej Chałubek (https://github.com/jedrzejchalubek/)
 * Released under the MIT License.
 */

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }

      return desc.value;
    };
  }

  return _get.apply(this, arguments);
}

var defaults = {
  /**
   * Type of the movement.
   *
   * Available types:
   * `slider` - Rewinds slider to the start/end when it reaches the first or last slide.
   * `carousel` - Changes slides without starting over when it reaches the first or last slide.
   *
   * @type {String}
   */
  type: 'slider',

  /**
   * Start at specific slide number defined with zero-based index.
   *
   * @type {Number}
   */
  startAt: 0,

  /**
   * A number of slides visible on the single viewport.
   *
   * @type {Number}
   */
  perView: 1,

  /**
   * Focus currently active slide at a specified position in the track.
   *
   * Available inputs:
   * `center` - Current slide will be always focused at the center of a track.
   * `0,1,2,3...` - Current slide will be focused on the specified zero-based index.
   *
   * @type {String|Number}
   */
  focusAt: 0,

  /**
   * A size of the gap added between slides.
   *
   * @type {Number}
   */
  gap: 10,

  /**
   * Change slides after a specified interval. Use `false` for turning off autoplay.
   *
   * @type {Number|Boolean}
   */
  autoplay: false,

  /**
   * Stop autoplay on mouseover event.
   *
   * @type {Boolean}
   */
  hoverpause: true,

  /**
   * Allow for changing slides with left and right keyboard arrows.
   *
   * @type {Boolean}
   */
  keyboard: true,

  /**
   * Stop running `perView` number of slides from the end. Use this
   * option if you don't want to have an empty space after
   * a slider. Works only with `slider` type and a
   * non-centered `focusAt` setting.
   *
   * @type {Boolean}
   */
  bound: false,

  /**
   * Minimal swipe distance needed to change the slide. Use `false` for turning off a swiping.
   *
   * @type {Number|Boolean}
   */
  swipeThreshold: 80,

  /**
   * Minimal mouse drag distance needed to change the slide. Use `false` for turning off a dragging.
   *
   * @type {Number|Boolean}
   */
  dragThreshold: 120,

  /**
   * A number of slides moved on single swipe.
   *
   * Available types:
   * `` - Moves slider by one slide per swipe
   * `|` - Moves slider between views per swipe (number of slides defined in `perView` options)
   *
   * @type {String}
   */
  perSwipe: '',

  /**
   * Moving distance ratio of the slides on a swiping and dragging.
   *
   * @type {Number}
   */
  touchRatio: 0.5,

  /**
   * Angle required to activate slides moving on swiping or dragging.
   *
   * @type {Number}
   */
  touchAngle: 45,

  /**
   * Duration of the animation in milliseconds.
   *
   * @type {Number}
   */
  animationDuration: 400,

  /**
   * Allows looping the `slider` type. Slider will rewind to the first/last slide when it's at the start/end.
   *
   * @type {Boolean}
   */
  rewind: true,

  /**
   * Duration of the rewinding animation of the `slider` type in milliseconds.
   *
   * @type {Number}
   */
  rewindDuration: 800,

  /**
   * Easing function for the animation.
   *
   * @type {String}
   */
  animationTimingFunc: 'cubic-bezier(.165, .840, .440, 1)',

  /**
   * Wait for the animation to finish until the next user input can be processed
   *
   * @type {boolean}
   */
  waitForTransition: true,

  /**
   * Throttle costly events at most once per every wait milliseconds.
   *
   * @type {Number}
   */
  throttle: 10,

  /**
   * Moving direction mode.
   *
   * Available inputs:
   * - 'ltr' - left to right movement,
   * - 'rtl' - right to left movement.
   *
   * @type {String}
   */
  direction: 'ltr',

  /**
   * The distance value of the next and previous viewports which
   * have to peek in the current view. Accepts number and
   * pixels as a string. Left and right peeking can be
   * set up separately with a directions object.
   *
   * For example:
   * `100` - Peek 100px on the both sides.
   * { before: 100, after: 50 }` - Peek 100px on the left side and 50px on the right side.
   *
   * @type {Number|String|Object}
   */
  peek: 0,

  /**
   * Defines how many clones of current viewport will be generated.
   *
   * @type {Number}
   */
  cloningRatio: 1,

  /**
   * Collection of options applied at specified media breakpoints.
   * For example: display two slides per view under 800px.
   * `{
   *   '800px': {
   *     perView: 2
   *   }
   * }`
   */
  breakpoints: {},

  /**
   * Collection of internally used HTML classes.
   *
   * @todo Refactor `slider` and `carousel` properties to single `type: { slider: '', carousel: '' }` object
   * @type {Object}
   */
  classes: {
    swipeable: 'glide--swipeable',
    dragging: 'glide--dragging',
    direction: {
      ltr: 'glide--ltr',
      rtl: 'glide--rtl'
    },
    type: {
      slider: 'glide--slider',
      carousel: 'glide--carousel'
    },
    slide: {
      clone: 'glide__slide--clone',
      active: 'glide__slide--active'
    },
    arrow: {
      disabled: 'glide__arrow--disabled'
    },
    nav: {
      active: 'glide__bullet--active'
    }
  }
};

/**
 * Outputs warning message to the bowser console.
 *
 * @param  {String} msg
 * @return {Void}
 */
function warn(msg) {
  console.error("[Glide warn]: ".concat(msg));
}

/**
 * Converts value entered as number
 * or string to integer value.
 *
 * @param {String} value
 * @returns {Number}
 */
function toInt(value) {
  return parseInt(value);
}
/**
 * Converts value entered as number
 * or string to flat value.
 *
 * @param {String} value
 * @returns {Number}
 */

function toFloat(value) {
  return parseFloat(value);
}
/**
 * Indicates whether the specified value is a string.
 *
 * @param  {*}   value
 * @return {Boolean}
 */

function isString(value) {
  return typeof value === 'string';
}
/**
 * Indicates whether the specified value is an object.
 *
 * @param  {*} value
 * @return {Boolean}
 *
 * @see https://github.com/jashkenas/underscore
 */

function isObject(value) {
  var type = _typeof(value);

  return type === 'function' || type === 'object' && !!value; // eslint-disable-line no-mixed-operators
}
/**
 * Indicates whether the specified value is a function.
 *
 * @param  {*} value
 * @return {Boolean}
 */

function isFunction(value) {
  return typeof value === 'function';
}
/**
 * Indicates whether the specified value is undefined.
 *
 * @param  {*} value
 * @return {Boolean}
 */

function isUndefined(value) {
  return typeof value === 'undefined';
}
/**
 * Indicates whether the specified value is an array.
 *
 * @param  {*} value
 * @return {Boolean}
 */

function isArray(value) {
  return value.constructor === Array;
}

/**
 * Creates and initializes specified collection of extensions.
 * Each extension receives access to instance of glide and rest of components.
 *
 * @param {Object} glide
 * @param {Object} extensions
 *
 * @returns {Object}
 */

function mount(glide, extensions, events) {
  var components = {};

  for (var name in extensions) {
    if (isFunction(extensions[name])) {
      components[name] = extensions[name](glide, components, events);
    } else {
      warn('Extension must be a function');
    }
  }

  for (var _name in components) {
    if (isFunction(components[_name].mount)) {
      components[_name].mount();
    }
  }

  return components;
}

/**
 * Defines getter and setter property on the specified object.
 *
 * @param  {Object} obj         Object where property has to be defined.
 * @param  {String} prop        Name of the defined property.
 * @param  {Object} definition  Get and set definitions for the property.
 * @return {Void}
 */
function define(obj, prop, definition) {
  Object.defineProperty(obj, prop, definition);
}
/**
 * Sorts aphabetically object keys.
 *
 * @param  {Object} obj
 * @return {Object}
 */

function sortKeys(obj) {
  return Object.keys(obj).sort().reduce(function (r, k) {
    r[k] = obj[k];
    return r[k], r;
  }, {});
}
/**
 * Merges passed settings object with default options.
 *
 * @param  {Object} defaults
 * @param  {Object} settings
 * @return {Object}
 */

function mergeOptions(defaults, settings) {
  var options = Object.assign({}, defaults, settings); // `Object.assign` do not deeply merge objects, so we
  // have to do it manually for every nested object
  // in options. Although it does not look smart,
  // it's smaller and faster than some fancy
  // merging deep-merge algorithm script.

  if (settings.hasOwnProperty('classes')) {
    options.classes = Object.assign({}, defaults.classes, settings.classes);

    if (settings.classes.hasOwnProperty('direction')) {
      options.classes.direction = Object.assign({}, defaults.classes.direction, settings.classes.direction);
    }

    if (settings.classes.hasOwnProperty('type')) {
      options.classes.type = Object.assign({}, defaults.classes.type, settings.classes.type);
    }

    if (settings.classes.hasOwnProperty('slide')) {
      options.classes.slide = Object.assign({}, defaults.classes.slide, settings.classes.slide);
    }

    if (settings.classes.hasOwnProperty('arrow')) {
      options.classes.arrow = Object.assign({}, defaults.classes.arrow, settings.classes.arrow);
    }

    if (settings.classes.hasOwnProperty('nav')) {
      options.classes.nav = Object.assign({}, defaults.classes.nav, settings.classes.nav);
    }
  }

  if (settings.hasOwnProperty('breakpoints')) {
    options.breakpoints = Object.assign({}, defaults.breakpoints, settings.breakpoints);
  }

  return options;
}

var EventsBus = /*#__PURE__*/function () {
  /**
   * Construct a EventBus instance.
   *
   * @param {Object} events
   */
  function EventsBus() {
    var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, EventsBus);

    this.events = events;
    this.hop = events.hasOwnProperty;
  }
  /**
   * Adds listener to the specifed event.
   *
   * @param {String|Array} event
   * @param {Function} handler
   */


  _createClass(EventsBus, [{
    key: "on",
    value: function on(event, handler) {
      if (isArray(event)) {
        for (var i = 0; i < event.length; i++) {
          this.on(event[i], handler);
        }

        return;
      } // Create the event's object if not yet created


      if (!this.hop.call(this.events, event)) {
        this.events[event] = [];
      } // Add the handler to queue


      var index = this.events[event].push(handler) - 1; // Provide handle back for removal of event

      return {
        remove: function remove() {
          delete this.events[event][index];
        }
      };
    }
    /**
     * Runs registered handlers for specified event.
     *
     * @param {String|Array} event
     * @param {Object=} context
     */

  }, {
    key: "emit",
    value: function emit(event, context) {
      if (isArray(event)) {
        for (var i = 0; i < event.length; i++) {
          this.emit(event[i], context);
        }

        return;
      } // If the event doesn't exist, or there's no handlers in queue, just leave


      if (!this.hop.call(this.events, event)) {
        return;
      } // Cycle through events queue, fire!


      this.events[event].forEach(function (item) {
        item(context || {});
      });
    }
  }]);

  return EventsBus;
}();

var Glide$1 = /*#__PURE__*/function () {
  /**
   * Construct glide.
   *
   * @param  {String} selector
   * @param  {Object} options
   */
  function Glide(selector) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Glide);

    this._c = {};
    this._t = [];
    this._e = new EventsBus();
    this.disabled = false;
    this.selector = selector;
    this.settings = mergeOptions(defaults, options);
    this.index = this.settings.startAt;
  }
  /**
   * Initializes glide.
   *
   * @param {Object} extensions Collection of extensions to initialize.
   * @return {Glide}
   */


  _createClass(Glide, [{
    key: "mount",
    value: function mount$1() {
      var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this._e.emit('mount.before');

      if (isObject(extensions)) {
        this._c = mount(this, extensions, this._e);
      } else {
        warn('You need to provide a object on `mount()`');
      }

      this._e.emit('mount.after');

      return this;
    }
    /**
     * Collects an instance `translate` transformers.
     *
     * @param  {Array} transformers Collection of transformers.
     * @return {Void}
     */

  }, {
    key: "mutate",
    value: function mutate() {
      var transformers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (isArray(transformers)) {
        this._t = transformers;
      } else {
        warn('You need to provide a array on `mutate()`');
      }

      return this;
    }
    /**
     * Updates glide with specified settings.
     *
     * @param {Object} settings
     * @return {Glide}
     */

  }, {
    key: "update",
    value: function update() {
      var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.settings = mergeOptions(this.settings, settings);

      if (settings.hasOwnProperty('startAt')) {
        this.index = settings.startAt;
      }

      this._e.emit('update');

      return this;
    }
    /**
     * Change slide with specified pattern. A pattern must be in the special format:
     * `>` - Move one forward
     * `<` - Move one backward
     * `={i}` - Go to {i} zero-based slide (eq. '=1', will go to second slide)
     * `>>` - Rewinds to end (last slide)
     * `<<` - Rewinds to start (first slide)
     * `|>` - Move one viewport forward
     * `|<` - Move one viewport backward
     *
     * @param {String} pattern
     * @return {Glide}
     */

  }, {
    key: "go",
    value: function go(pattern) {
      this._c.Run.make(pattern);

      return this;
    }
    /**
     * Move track by specified distance.
     *
     * @param {String} distance
     * @return {Glide}
     */

  }, {
    key: "move",
    value: function move(distance) {
      this._c.Transition.disable();

      this._c.Move.make(distance);

      return this;
    }
    /**
     * Destroy instance and revert all changes done by this._c.
     *
     * @return {Glide}
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this._e.emit('destroy');

      return this;
    }
    /**
     * Start instance autoplaying.
     *
     * @param {Boolean|Number} interval Run autoplaying with passed interval regardless of `autoplay` settings
     * @return {Glide}
     */

  }, {
    key: "play",
    value: function play() {
      var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (interval) {
        this.settings.autoplay = interval;
      }

      this._e.emit('play');

      return this;
    }
    /**
     * Stop instance autoplaying.
     *
     * @return {Glide}
     */

  }, {
    key: "pause",
    value: function pause() {
      this._e.emit('pause');

      return this;
    }
    /**
     * Sets glide into a idle status.
     *
     * @return {Glide}
     */

  }, {
    key: "disable",
    value: function disable() {
      this.disabled = true;
      return this;
    }
    /**
     * Sets glide into a active status.
     *
     * @return {Glide}
     */

  }, {
    key: "enable",
    value: function enable() {
      this.disabled = false;
      return this;
    }
    /**
     * Adds cuutom event listener with handler.
     *
     * @param  {String|Array} event
     * @param  {Function} handler
     * @return {Glide}
     */

  }, {
    key: "on",
    value: function on(event, handler) {
      this._e.on(event, handler);

      return this;
    }
    /**
     * Checks if glide is a precised type.
     *
     * @param  {String} name
     * @return {Boolean}
     */

  }, {
    key: "isType",
    value: function isType(name) {
      return this.settings.type === name;
    }
    /**
     * Gets value of the core options.
     *
     * @return {Object}
     */

  }, {
    key: "settings",
    get: function get() {
      return this._o;
    }
    /**
     * Sets value of the core options.
     *
     * @param  {Object} o
     * @return {Void}
     */
    ,
    set: function set(o) {
      if (isObject(o)) {
        this._o = o;
      } else {
        warn('Options must be an `object` instance.');
      }
    }
    /**
     * Gets current index of the slider.
     *
     * @return {Object}
     */

  }, {
    key: "index",
    get: function get() {
      return this._i;
    }
    /**
     * Sets current index a slider.
     *
     * @return {Object}
     */
    ,
    set: function set(i) {
      this._i = toInt(i);
    }
    /**
     * Gets type name of the slider.
     *
     * @return {String}
     */

  }, {
    key: "type",
    get: function get() {
      return this.settings.type;
    }
    /**
     * Gets value of the idle status.
     *
     * @return {Boolean}
     */

  }, {
    key: "disabled",
    get: function get() {
      return this._d;
    }
    /**
     * Sets value of the idle status.
     *
     * @return {Boolean}
     */
    ,
    set: function set(status) {
      this._d = !!status;
    }
  }]);

  return Glide;
}();

function Run (Glide, Components, Events) {
  var Run = {
    /**
     * Initializes autorunning of the glide.
     *
     * @return {Void}
     */
    mount: function mount() {
      this._o = false;
    },

    /**
     * Makes glides running based on the passed moving schema.
     *
     * @param {String} move
     */
    make: function make(move) {
      var _this = this;

      if (!Glide.disabled) {
        !Glide.settings.waitForTransition || Glide.disable();
        this.move = move;
        Events.emit('run.before', this.move);
        this.calculate();
        Events.emit('run', this.move);
        Components.Transition.after(function () {
          if (_this.isStart()) {
            Events.emit('run.start', _this.move);
          }

          if (_this.isEnd()) {
            Events.emit('run.end', _this.move);
          }

          if (_this.isOffset()) {
            _this._o = false;
            Events.emit('run.offset', _this.move);
          }

          Events.emit('run.after', _this.move);
          Glide.enable();
        });
      }
    },

    /**
     * Calculates current index based on defined move.
     *
     * @return {Number|Undefined}
     */
    calculate: function calculate() {
      var move = this.move,
          length = this.length;
      var steps = move.steps,
          direction = move.direction; // By default assume that size of view is equal to one slide

      var viewSize = 1; // While direction is `=` we want jump to
      // a specified index described in steps.

      if (direction === '=') {
        // Check if bound is true, 
        // as we want to avoid whitespaces.
        if (Glide.settings.bound && toInt(steps) > length) {
          Glide.index = length;
          return;
        }

        Glide.index = steps;
        return;
      } // When pattern is equal to `>>` we want
      // fast forward to the last slide.


      if (direction === '>' && steps === '>') {
        Glide.index = length;
        return;
      } // When pattern is equal to `<<` we want
      // fast forward to the first slide.


      if (direction === '<' && steps === '<') {
        Glide.index = 0;
        return;
      } // pagination movement


      if (direction === '|') {
        viewSize = Glide.settings.perView || 1;
      } // we are moving forward


      if (direction === '>' || direction === '|' && steps === '>') {
        var index = calculateForwardIndex(viewSize);

        if (index > length) {
          this._o = true;
        }

        Glide.index = normalizeForwardIndex(index, viewSize);
        return;
      } // we are moving backward


      if (direction === '<' || direction === '|' && steps === '<') {
        var _index = calculateBackwardIndex(viewSize);

        if (_index < 0) {
          this._o = true;
        }

        Glide.index = normalizeBackwardIndex(_index, viewSize);
        return;
      }

      warn("Invalid direction pattern [".concat(direction).concat(steps, "] has been used"));
    },

    /**
     * Checks if we are on the first slide.
     *
     * @return {Boolean}
     */
    isStart: function isStart() {
      return Glide.index <= 0;
    },

    /**
     * Checks if we are on the last slide.
     *
     * @return {Boolean}
     */
    isEnd: function isEnd() {
      return Glide.index >= this.length;
    },

    /**
     * Checks if we are making a offset run.
     *
     * @param {String} direction
     * @return {Boolean}
     */
    isOffset: function isOffset() {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

      if (!direction) {
        return this._o;
      }

      if (!this._o) {
        return false;
      } // did we view to the right?


      if (direction === '|>') {
        return this.move.direction === '|' && this.move.steps === '>';
      } // did we view to the left?


      if (direction === '|<') {
        return this.move.direction === '|' && this.move.steps === '<';
      }

      return this.move.direction === direction;
    },

    /**
     * Checks if bound mode is active
     *
     * @return {Boolean}
     */
    isBound: function isBound() {
      return Glide.isType('slider') && Glide.settings.focusAt !== 'center' && Glide.settings.bound;
    }
  };
  /**
   * Returns index value to move forward/to the right
   *
   * @param viewSize
   * @returns {Number}
   */

  function calculateForwardIndex(viewSize) {
    var index = Glide.index;

    if (Glide.isType('carousel')) {
      return index + viewSize;
    }

    return index + (viewSize - index % viewSize);
  }
  /**
   * Normalizes the given forward index based on glide settings, preventing it to exceed certain boundaries
   *
   * @param index
   * @param length
   * @param viewSize
   * @returns {Number}
   */


  function normalizeForwardIndex(index, viewSize) {
    var length = Run.length;

    if (index <= length) {
      return index;
    }

    if (Glide.isType('carousel')) {
      return index - (length + 1);
    }

    if (Glide.settings.rewind) {
      // bound does funny things with the length, therefor we have to be certain
      // that we are on the last possible index value given by bound
      if (Run.isBound() && !Run.isEnd()) {
        return length;
      }

      return 0;
    }

    if (Run.isBound()) {
      return length;
    }

    return Math.floor(length / viewSize) * viewSize;
  }
  /**
   * Calculates index value to move backward/to the left
   *
   * @param viewSize
   * @returns {Number}
   */


  function calculateBackwardIndex(viewSize) {
    var index = Glide.index;

    if (Glide.isType('carousel')) {
      return index - viewSize;
    } // ensure our back navigation results in the same index as a forward navigation
    // to experience a homogeneous paging


    var view = Math.ceil(index / viewSize);
    return (view - 1) * viewSize;
  }
  /**
   * Normalizes the given backward index based on glide settings, preventing it to exceed certain boundaries
   *
   * @param index
   * @param length
   * @param viewSize
   * @returns {*}
   */


  function normalizeBackwardIndex(index, viewSize) {
    var length = Run.length;

    if (index >= 0) {
      return index;
    }

    if (Glide.isType('carousel')) {
      return index + (length + 1);
    }

    if (Glide.settings.rewind) {
      // bound does funny things with the length, therefor we have to be certain
      // that we are on first possible index value before we to rewind to the length given by bound
      if (Run.isBound() && Run.isStart()) {
        return length;
      }

      return Math.floor(length / viewSize) * viewSize;
    }

    return 0;
  }

  define(Run, 'move', {
    /**
     * Gets value of the move schema.
     *
     * @returns {Object}
     */
    get: function get() {
      return this._m;
    },

    /**
     * Sets value of the move schema.
     *
     * @returns {Object}
     */
    set: function set(value) {
      var step = value.substr(1);
      this._m = {
        direction: value.substr(0, 1),
        steps: step ? toInt(step) ? toInt(step) : step : 0
      };
    }
  });
  define(Run, 'length', {
    /**
     * Gets value of the running distance based
     * on zero-indexing number of slides.
     *
     * @return {Number}
     */
    get: function get() {
      var settings = Glide.settings;
      var length = Components.Html.slides.length; // If the `bound` option is active, a maximum running distance should be
      // reduced by `perView` and `focusAt` settings. Running distance
      // should end before creating an empty space after instance.

      if (this.isBound()) {
        return length - 1 - (toInt(settings.perView) - 1) + toInt(settings.focusAt);
      }

      return length - 1;
    }
  });
  define(Run, 'offset', {
    /**
     * Gets status of the offsetting flag.
     *
     * @return {Boolean}
     */
    get: function get() {
      return this._o;
    }
  });
  return Run;
}

/**
 * Returns a current time.
 *
 * @return {Number}
 */
function now() {
  return new Date().getTime();
}

/**
 * Returns a function, that, when invoked, will only be triggered
 * at most once during a given window of time.
 *
 * @param {Function} func
 * @param {Number} wait
 * @param {Object=} options
 * @return {Function}
 *
 * @see https://github.com/jashkenas/underscore
 */

function throttle(func, wait, options) {
  var timeout, context, args, result;
  var previous = 0;
  if (!options) options = {};

  var later = function later() {
    previous = options.leading === false ? 0 : now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  var throttled = function throttled() {
    var at = now();
    if (!previous && options.leading === false) previous = at;
    var remaining = wait - (at - previous);
    context = this;
    args = arguments;

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }

      previous = at;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }

    return result;
  };

  throttled.cancel = function () {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  return throttled;
}

var MARGIN_TYPE = {
  ltr: ['marginLeft', 'marginRight'],
  rtl: ['marginRight', 'marginLeft']
};
function Gaps (Glide, Components, Events) {
  var Gaps = {
    /**
     * Applies gaps between slides. First and last
     * slides do not receive it's edge margins.
     *
     * @param {HTMLCollection} slides
     * @return {Void}
     */
    apply: function apply(slides) {
      for (var i = 0, len = slides.length; i < len; i++) {
        var style = slides[i].style;
        var direction = Components.Direction.value;

        if (i !== 0) {
          style[MARGIN_TYPE[direction][0]] = "".concat(this.value / 2, "px");
        } else {
          style[MARGIN_TYPE[direction][0]] = '';
        }

        if (i !== slides.length - 1) {
          style[MARGIN_TYPE[direction][1]] = "".concat(this.value / 2, "px");
        } else {
          style[MARGIN_TYPE[direction][1]] = '';
        }
      }
    },

    /**
     * Removes gaps from the slides.
     *
     * @param {HTMLCollection} slides
     * @returns {Void}
    */
    remove: function remove(slides) {
      for (var i = 0, len = slides.length; i < len; i++) {
        var style = slides[i].style;
        style.marginLeft = '';
        style.marginRight = '';
      }
    }
  };
  define(Gaps, 'value', {
    /**
     * Gets value of the gap.
     *
     * @returns {Number}
     */
    get: function get() {
      return toInt(Glide.settings.gap);
    }
  });
  define(Gaps, 'grow', {
    /**
     * Gets additional dimensions value caused by gaps.
     * Used to increase width of the slides wrapper.
     *
     * @returns {Number}
     */
    get: function get() {
      return Gaps.value * Components.Sizes.length;
    }
  });
  define(Gaps, 'reductor', {
    /**
     * Gets reduction value caused by gaps.
     * Used to subtract width of the slides.
     *
     * @returns {Number}
     */
    get: function get() {
      var perView = Glide.settings.perView;
      return Gaps.value * (perView - 1) / perView;
    }
  });
  /**
   * Apply calculated gaps:
   * - after building, so slides (including clones) will receive proper margins
   * - on updating via API, to recalculate gaps with new options
   */

  Events.on(['build.after', 'update'], throttle(function () {
    Gaps.apply(Components.Html.wrapper.children);
  }, 30));
  /**
   * Remove gaps:
   * - on destroying to bring markup to its inital state
   */

  Events.on('destroy', function () {
    Gaps.remove(Components.Html.wrapper.children);
  });
  return Gaps;
}

/**
 * Finds siblings nodes of the passed node.
 *
 * @param  {Element} node
 * @return {Array}
 */
function siblings(node) {
  if (node && node.parentNode) {
    var n = node.parentNode.firstChild;
    var matched = [];

    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== node) {
        matched.push(n);
      }
    }

    return matched;
  }

  return [];
}
/**
 * Checks if passed node exist and is a valid element.
 *
 * @param  {Element} node
 * @return {Boolean}
 */

function exist(node) {
  if (node && node instanceof window.HTMLElement) {
    return true;
  }

  return false;
}

var TRACK_SELECTOR = '[data-glide-el="track"]';
function Html (Glide, Components, Events) {
  var Html = {
    /**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */
    mount: function mount() {
      this.root = Glide.selector;
      this.track = this.root.querySelector(TRACK_SELECTOR);
      this.collectSlides();
    },

    /**
     * Collect slides
     */
    collectSlides: function collectSlides() {
      this.slides = Array.prototype.slice.call(this.wrapper.children).filter(function (slide) {
        return !slide.classList.contains(Glide.settings.classes.slide.clone);
      });
    }
  };
  define(Html, 'root', {
    /**
     * Gets node of the glide main element.
     *
     * @return {Object}
     */
    get: function get() {
      return Html._r;
    },

    /**
     * Sets node of the glide main element.
     *
     * @return {Object}
     */
    set: function set(r) {
      if (isString(r)) {
        r = document.querySelector(r);
      }

      if (exist(r)) {
        Html._r = r;
      } else {
        warn('Root element must be a existing Html node');
      }
    }
  });
  define(Html, 'track', {
    /**
     * Gets node of the glide track with slides.
     *
     * @return {Object}
     */
    get: function get() {
      return Html._t;
    },

    /**
     * Sets node of the glide track with slides.
     *
     * @return {Object}
     */
    set: function set(t) {
      if (exist(t)) {
        Html._t = t;
      } else {
        warn("Could not find track element. Please use ".concat(TRACK_SELECTOR, " attribute."));
      }
    }
  });
  define(Html, 'wrapper', {
    /**
     * Gets node of the slides wrapper.
     *
     * @return {Object}
     */
    get: function get() {
      return Html.track.children[0];
    }
  });
  /**
   * Add/remove/reorder dynamic slides
   */

  Events.on('update', function () {
    Html.collectSlides();
  });
  return Html;
}

function Peek (Glide, Components, Events) {
  var Peek = {
    /**
     * Setups how much to peek based on settings.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.value = Glide.settings.peek;
    }
  };
  define(Peek, 'value', {
    /**
     * Gets value of the peek.
     *
     * @returns {Number|Object}
     */
    get: function get() {
      return Peek._v;
    },

    /**
     * Sets value of the peek.
     *
     * @param {Number|Object} value
     * @return {Void}
     */
    set: function set(value) {
      if (isObject(value)) {
        value.before = toInt(value.before);
        value.after = toInt(value.after);
      } else {
        value = toInt(value);
      }

      Peek._v = value;
    }
  });
  define(Peek, 'reductor', {
    /**
     * Gets reduction value caused by peek.
     *
     * @returns {Number}
     */
    get: function get() {
      var value = Peek.value;
      var perView = Glide.settings.perView;

      if (isObject(value)) {
        return value.before / perView + value.after / perView;
      }

      return value * 2 / perView;
    }
  });
  /**
   * Recalculate peeking sizes on:
   * - when resizing window to update to proper percents
   */

  Events.on(['resize', 'update'], function () {
    Peek.mount();
  });
  return Peek;
}

function Move (Glide, Components, Events) {
  var Move = {
    /**
     * Constructs move component.
     *
     * @returns {Void}
     */
    mount: function mount() {
      this._o = 0;
    },

    /**
     * Calculates a movement value based on passed offset and currently active index.
     *
     * @param  {Number} offset
     * @return {Void}
     */
    make: function make() {
      var _this = this;

      var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      this.offset = offset;
      Events.emit('move', {
        movement: this.value
      });
      Components.Transition.after(function () {
        Events.emit('move.after', {
          movement: _this.value
        });
      });
    }
  };
  define(Move, 'offset', {
    /**
     * Gets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    get: function get() {
      return Move._o;
    },

    /**
     * Sets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    set: function set(value) {
      Move._o = !isUndefined(value) ? toInt(value) : 0;
    }
  });
  define(Move, 'translate', {
    /**
     * Gets a raw movement value.
     *
     * @return {Number}
     */
    get: function get() {
      return Components.Sizes.slideWidth * Glide.index;
    }
  });
  define(Move, 'value', {
    /**
     * Gets an actual movement value corrected by offset.
     *
     * @return {Number}
     */
    get: function get() {
      var offset = this.offset;
      var translate = this.translate;

      if (Components.Direction.is('rtl')) {
        return translate + offset;
      }

      return translate - offset;
    }
  });
  /**
   * Make movement to proper slide on:
   * - before build, so glide will start at `startAt` index
   * - on each standard run to move to newly calculated index
   */

  Events.on(['build.before', 'run'], function () {
    Move.make();
  });
  return Move;
}

function Sizes (Glide, Components, Events) {
  var Sizes = {
    /**
     * Setups dimensions of slides.
     *
     * @return {Void}
     */
    setupSlides: function setupSlides() {
      var width = "".concat(this.slideWidth, "px");
      var slides = Components.Html.slides;

      for (var i = 0; i < slides.length; i++) {
        slides[i].style.width = width;
      }
    },

    /**
     * Setups dimensions of slides wrapper.
     *
     * @return {Void}
     */
    setupWrapper: function setupWrapper() {
      Components.Html.wrapper.style.width = "".concat(this.wrapperSize, "px");
    },

    /**
     * Removes applied styles from HTML elements.
     *
     * @returns {Void}
     */
    remove: function remove() {
      var slides = Components.Html.slides;

      for (var i = 0; i < slides.length; i++) {
        slides[i].style.width = '';
      }

      Components.Html.wrapper.style.width = '';
    }
  };
  define(Sizes, 'length', {
    /**
     * Gets count number of the slides.
     *
     * @return {Number}
     */
    get: function get() {
      return Components.Html.slides.length;
    }
  });
  define(Sizes, 'width', {
    /**
     * Gets width value of the slider (visible area).
     *
     * @return {Number}
     */
    get: function get() {
      return Components.Html.track.offsetWidth;
    }
  });
  define(Sizes, 'wrapperSize', {
    /**
     * Gets size of the slides wrapper.
     *
     * @return {Number}
     */
    get: function get() {
      return Sizes.slideWidth * Sizes.length + Components.Gaps.grow + Components.Clones.grow;
    }
  });
  define(Sizes, 'slideWidth', {
    /**
     * Gets width value of a single slide.
     *
     * @return {Number}
     */
    get: function get() {
      return Sizes.width / Glide.settings.perView - Components.Peek.reductor - Components.Gaps.reductor;
    }
  });
  /**
   * Apply calculated glide's dimensions:
   * - before building, so other dimensions (e.g. translate) will be calculated propertly
   * - when resizing window to recalculate sildes dimensions
   * - on updating via API, to calculate dimensions based on new options
   */

  Events.on(['build.before', 'resize', 'update'], function () {
    Sizes.setupSlides();
    Sizes.setupWrapper();
  });
  /**
   * Remove calculated glide's dimensions:
   * - on destoting to bring markup to its inital state
   */

  Events.on('destroy', function () {
    Sizes.remove();
  });
  return Sizes;
}

function Build (Glide, Components, Events) {
  var Build = {
    /**
     * Init glide building. Adds classes, sets
     * dimensions and setups initial state.
     *
     * @return {Void}
     */
    mount: function mount() {
      Events.emit('build.before');
      this.typeClass();
      this.activeClass();
      Events.emit('build.after');
    },

    /**
     * Adds `type` class to the glide element.
     *
     * @return {Void}
     */
    typeClass: function typeClass() {
      Components.Html.root.classList.add(Glide.settings.classes.type[Glide.settings.type]);
    },

    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    activeClass: function activeClass() {
      var classes = Glide.settings.classes;
      var slide = Components.Html.slides[Glide.index];

      if (slide) {
        slide.classList.add(classes.slide.active);
        siblings(slide).forEach(function (sibling) {
          sibling.classList.remove(classes.slide.active);
        });
      }
    },

    /**
     * Removes HTML classes applied at building.
     *
     * @return {Void}
     */
    removeClasses: function removeClasses() {
      var _Glide$settings$class = Glide.settings.classes,
          type = _Glide$settings$class.type,
          slide = _Glide$settings$class.slide;
      Components.Html.root.classList.remove(type[Glide.settings.type]);
      Components.Html.slides.forEach(function (sibling) {
        sibling.classList.remove(slide.active);
      });
    }
  };
  /**
   * Clear building classes:
   * - on destroying to bring HTML to its initial state
   * - on updating to remove classes before remounting component
   */

  Events.on(['destroy', 'update'], function () {
    Build.removeClasses();
  });
  /**
   * Remount component:
   * - on resizing of the window to calculate new dimensions
   * - on updating settings via API
   */

  Events.on(['resize', 'update'], function () {
    Build.mount();
  });
  /**
   * Swap active class of current slide:
   * - after each move to the new index
   */

  Events.on('move.after', function () {
    Build.activeClass();
  });
  return Build;
}

function Clones (Glide, Components, Events) {
  var Clones = {
    /**
     * Create pattern map and collect slides to be cloned.
     */
    mount: function mount() {
      this.items = [];

      if (Glide.isType('carousel')) {
        this.items = this.collect();
      }
    },

    /**
     * Collect clones with pattern.
     *
     * @return {[]}
     */
    collect: function collect() {
      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var slides = Components.Html.slides;
      var _Glide$settings = Glide.settings,
          perView = _Glide$settings.perView,
          classes = _Glide$settings.classes,
          cloningRatio = _Glide$settings.cloningRatio;

      if (slides.length !== 0) {
        var peekIncrementer = +!!Glide.settings.peek;
        var cloneCount = perView + peekIncrementer + Math.round(perView / 2);
        var append = slides.slice(0, cloneCount).reverse();
        var prepend = slides.slice(cloneCount * -1);

        for (var r = 0; r < Math.max(cloningRatio, Math.floor(perView / slides.length)); r++) {
          for (var i = 0; i < append.length; i++) {
            var clone = append[i].cloneNode(true);
            clone.classList.add(classes.slide.clone);
            items.push(clone);
          }

          for (var _i = 0; _i < prepend.length; _i++) {
            var _clone = prepend[_i].cloneNode(true);

            _clone.classList.add(classes.slide.clone);

            items.unshift(_clone);
          }
        }
      }

      return items;
    },

    /**
     * Append cloned slides with generated pattern.
     *
     * @return {Void}
     */
    append: function append() {
      var items = this.items;
      var _Components$Html = Components.Html,
          wrapper = _Components$Html.wrapper,
          slides = _Components$Html.slides;
      var half = Math.floor(items.length / 2);
      var prepend = items.slice(0, half).reverse();
      var append = items.slice(half * -1).reverse();
      var width = "".concat(Components.Sizes.slideWidth, "px");

      for (var i = 0; i < append.length; i++) {
        wrapper.appendChild(append[i]);
      }

      for (var _i2 = 0; _i2 < prepend.length; _i2++) {
        wrapper.insertBefore(prepend[_i2], slides[0]);
      }

      for (var _i3 = 0; _i3 < items.length; _i3++) {
        items[_i3].style.width = width;
      }
    },

    /**
     * Remove all cloned slides.
     *
     * @return {Void}
     */
    remove: function remove() {
      var items = this.items;

      for (var i = 0; i < items.length; i++) {
        Components.Html.wrapper.removeChild(items[i]);
      }
    }
  };
  define(Clones, 'grow', {
    /**
     * Gets additional dimensions value caused by clones.
     *
     * @return {Number}
     */
    get: function get() {
      return (Components.Sizes.slideWidth + Components.Gaps.value) * Clones.items.length;
    }
  });
  /**
   * Append additional slide's clones:
   * - while glide's type is `carousel`
   */

  Events.on('update', function () {
    Clones.remove();
    Clones.mount();
    Clones.append();
  });
  /**
   * Append additional slide's clones:
   * - while glide's type is `carousel`
   */

  Events.on('build.before', function () {
    if (Glide.isType('carousel')) {
      Clones.append();
    }
  });
  /**
   * Remove clones HTMLElements:
   * - on destroying, to bring HTML to its initial state
   */

  Events.on('destroy', function () {
    Clones.remove();
  });
  return Clones;
}

var EventsBinder = /*#__PURE__*/function () {
  /**
   * Construct a EventsBinder instance.
   */
  function EventsBinder() {
    var listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, EventsBinder);

    this.listeners = listeners;
  }
  /**
   * Adds events listeners to arrows HTML elements.
   *
   * @param  {String|Array} events
   * @param  {Element|Window|Document} el
   * @param  {Function} closure
   * @param  {Boolean|Object} capture
   * @return {Void}
   */


  _createClass(EventsBinder, [{
    key: "on",
    value: function on(events, el, closure) {
      var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (isString(events)) {
        events = [events];
      }

      for (var i = 0; i < events.length; i++) {
        this.listeners[events[i]] = closure;
        el.addEventListener(events[i], this.listeners[events[i]], capture);
      }
    }
    /**
     * Removes event listeners from arrows HTML elements.
     *
     * @param  {String|Array} events
     * @param  {Element|Window|Document} el
     * @param  {Boolean|Object} capture
     * @return {Void}
     */

  }, {
    key: "off",
    value: function off(events, el) {
      var capture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (isString(events)) {
        events = [events];
      }

      for (var i = 0; i < events.length; i++) {
        el.removeEventListener(events[i], this.listeners[events[i]], capture);
      }
    }
    /**
     * Destroy collected listeners.
     *
     * @returns {Void}
     */

  }, {
    key: "destroy",
    value: function destroy() {
      delete this.listeners;
    }
  }]);

  return EventsBinder;
}();

function Resize (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();
  var Resize = {
    /**
     * Initializes window bindings.
     */
    mount: function mount() {
      this.bind();
    },

    /**
     * Binds `rezsize` listener to the window.
     * It's a costly event, so we are debouncing it.
     *
     * @return {Void}
     */
    bind: function bind() {
      Binder.on('resize', window, throttle(function () {
        Events.emit('resize');
      }, Glide.settings.throttle));
    },

    /**
     * Unbinds listeners from the window.
     *
     * @return {Void}
     */
    unbind: function unbind() {
      Binder.off('resize', window);
    }
  };
  /**
   * Remove bindings from window:
   * - on destroying, to remove added EventListener
   */

  Events.on('destroy', function () {
    Resize.unbind();
    Binder.destroy();
  });
  return Resize;
}

var VALID_DIRECTIONS = ['ltr', 'rtl'];
var FLIPED_MOVEMENTS = {
  '>': '<',
  '<': '>',
  '=': '='
};
function Direction (Glide, Components, Events) {
  var Direction = {
    /**
     * Setups gap value based on settings.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.value = Glide.settings.direction;
    },

    /**
     * Resolves pattern based on direction value
     *
     * @param {String} pattern
     * @returns {String}
     */
    resolve: function resolve(pattern) {
      var token = pattern.slice(0, 1);

      if (this.is('rtl')) {
        return pattern.split(token).join(FLIPED_MOVEMENTS[token]);
      }

      return pattern;
    },

    /**
     * Checks value of direction mode.
     *
     * @param {String} direction
     * @returns {Boolean}
     */
    is: function is(direction) {
      return this.value === direction;
    },

    /**
     * Applies direction class to the root HTML element.
     *
     * @return {Void}
     */
    addClass: function addClass() {
      Components.Html.root.classList.add(Glide.settings.classes.direction[this.value]);
    },

    /**
     * Removes direction class from the root HTML element.
     *
     * @return {Void}
     */
    removeClass: function removeClass() {
      Components.Html.root.classList.remove(Glide.settings.classes.direction[this.value]);
    }
  };
  define(Direction, 'value', {
    /**
     * Gets value of the direction.
     *
     * @returns {Number}
     */
    get: function get() {
      return Direction._v;
    },

    /**
     * Sets value of the direction.
     *
     * @param {String} value
     * @return {Void}
     */
    set: function set(value) {
      if (VALID_DIRECTIONS.indexOf(value) > -1) {
        Direction._v = value;
      } else {
        warn('Direction value must be `ltr` or `rtl`');
      }
    }
  });
  /**
   * Clear direction class:
   * - on destroy to bring HTML to its initial state
   * - on update to remove class before reappling bellow
   */

  Events.on(['destroy', 'update'], function () {
    Direction.removeClass();
  });
  /**
   * Remount component:
   * - on update to reflect changes in direction value
   */

  Events.on('update', function () {
    Direction.mount();
  });
  /**
   * Apply direction class:
   * - before building to apply class for the first time
   * - on updating to reapply direction class that may changed
   */

  Events.on(['build.before', 'update'], function () {
    Direction.addClass();
  });
  return Direction;
}

/**
 * Reflects value of glide movement.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Rtl (Glide, Components) {
  return {
    /**
     * Negates the passed translate if glide is in RTL option.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      if (Components.Direction.is('rtl')) {
        return -translate;
      }

      return translate;
    }
  };
}

/**
 * Updates glide movement with a `gap` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Gap (Glide, Components) {
  return {
    /**
     * Modifies passed translate value with number in the `gap` settings.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      var multiplier = Math.floor(translate / Components.Sizes.slideWidth);
      return translate + Components.Gaps.value * multiplier;
    }
  };
}

/**
 * Updates glide movement with width of additional clones width.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Grow (Glide, Components) {
  return {
    /**
     * Adds to the passed translate width of the half of clones.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      return translate + Components.Clones.grow / 2;
    }
  };
}

/**
 * Updates glide movement with a `peek` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */

function Peeking (Glide, Components) {
  return {
    /**
     * Modifies passed translate value with a `peek` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      if (Glide.settings.focusAt >= 0) {
        var peek = Components.Peek.value;

        if (isObject(peek)) {
          return translate - peek.before;
        }

        return translate - peek;
      }

      return translate;
    }
  };
}

/**
 * Updates glide movement with a `focusAt` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Focusing (Glide, Components) {
  return {
    /**
     * Modifies passed translate value with index in the `focusAt` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      var gap = Components.Gaps.value;
      var width = Components.Sizes.width;
      var focusAt = Glide.settings.focusAt;
      var slideWidth = Components.Sizes.slideWidth;

      if (focusAt === 'center') {
        return translate - (width / 2 - slideWidth / 2);
      }

      return translate - slideWidth * focusAt - gap * focusAt;
    }
  };
}

/**
 * Applies diffrent transformers on translate value.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */

function mutator (Glide, Components, Events) {
  /**
   * Merge instance transformers with collection of default transformers.
   * It's important that the Rtl component be last on the list,
   * so it reflects all previous transformations.
   *
   * @type {Array}
   */
  var TRANSFORMERS = [Gap, Grow, Peeking, Focusing].concat(Glide._t, [Rtl]);
  return {
    /**
     * Piplines translate value with registered transformers.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    mutate: function mutate(translate) {
      for (var i = 0; i < TRANSFORMERS.length; i++) {
        var transformer = TRANSFORMERS[i];

        if (isFunction(transformer) && isFunction(transformer().modify)) {
          translate = transformer(Glide, Components, Events).modify(translate);
        } else {
          warn('Transformer should be a function that returns an object with `modify()` method');
        }
      }

      return translate;
    }
  };
}

function Translate (Glide, Components, Events) {
  var Translate = {
    /**
     * Sets value of translate on HTML element.
     *
     * @param {Number} value
     * @return {Void}
     */
    set: function set(value) {
      var transform = mutator(Glide, Components).mutate(value);
      var translate3d = "translate3d(".concat(-1 * transform, "px, 0px, 0px)");
      Components.Html.wrapper.style.mozTransform = translate3d; // needed for supported Firefox 10-15

      Components.Html.wrapper.style.webkitTransform = translate3d; // needed for supported Chrome 10-35, Safari 5.1-8, and Opera 15-22

      Components.Html.wrapper.style.transform = translate3d;
    },

    /**
     * Removes value of translate from HTML element.
     *
     * @return {Void}
     */
    remove: function remove() {
      Components.Html.wrapper.style.transform = '';
    },

    /**
     * @return {number}
     */
    getStartIndex: function getStartIndex() {
      var length = Components.Sizes.length;
      var index = Glide.index;
      var perView = Glide.settings.perView;

      if (Components.Run.isOffset('>') || Components.Run.isOffset('|>')) {
        return length + (index - perView);
      } // "modulo length" converts an index that equals length to zero


      return (index + perView) % length;
    },

    /**
     * @return {number}
     */
    getTravelDistance: function getTravelDistance() {
      var travelDistance = Components.Sizes.slideWidth * Glide.settings.perView;

      if (Components.Run.isOffset('>') || Components.Run.isOffset('|>')) {
        // reverse travel distance so that we don't have to change subtract operations
        return travelDistance * -1;
      }

      return travelDistance;
    }
  };
  /**
   * Set new translate value:
   * - on move to reflect index change
   * - on updating via API to reflect possible changes in options
   */

  Events.on('move', function (context) {
    if (!Glide.isType('carousel') || !Components.Run.isOffset()) {
      return Translate.set(context.movement);
    }

    Components.Transition.after(function () {
      Events.emit('translate.jump');
      Translate.set(Components.Sizes.slideWidth * Glide.index);
    });
    var startWidth = Components.Sizes.slideWidth * Components.Translate.getStartIndex();
    return Translate.set(startWidth - Components.Translate.getTravelDistance());
  });
  /**
   * Remove translate:
   * - on destroying to bring markup to its inital state
   */

  Events.on('destroy', function () {
    Translate.remove();
  });
  return Translate;
}

function Transition (Glide, Components, Events) {
  /**
   * Holds inactivity status of transition.
   * When true transition is not applied.
   *
   * @type {Boolean}
   */
  var disabled = false;
  var Transition = {
    /**
     * Composes string of the CSS transition.
     *
     * @param {String} property
     * @return {String}
     */
    compose: function compose(property) {
      var settings = Glide.settings;

      if (!disabled) {
        return "".concat(property, " ").concat(this.duration, "ms ").concat(settings.animationTimingFunc);
      }

      return "".concat(property, " 0ms ").concat(settings.animationTimingFunc);
    },

    /**
     * Sets value of transition on HTML element.
     *
     * @param {String=} property
     * @return {Void}
     */
    set: function set() {
      var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';
      Components.Html.wrapper.style.transition = this.compose(property);
    },

    /**
     * Removes value of transition from HTML element.
     *
     * @return {Void}
     */
    remove: function remove() {
      Components.Html.wrapper.style.transition = '';
    },

    /**
     * Runs callback after animation.
     *
     * @param  {Function} callback
     * @return {Void}
     */
    after: function after(callback) {
      setTimeout(function () {
        callback();
      }, this.duration);
    },

    /**
     * Enable transition.
     *
     * @return {Void}
     */
    enable: function enable() {
      disabled = false;
      this.set();
    },

    /**
     * Disable transition.
     *
     * @return {Void}
     */
    disable: function disable() {
      disabled = true;
      this.set();
    }
  };
  define(Transition, 'duration', {
    /**
     * Gets duration of the transition based
     * on currently running animation type.
     *
     * @return {Number}
     */
    get: function get() {
      var settings = Glide.settings;

      if (Glide.isType('slider') && Components.Run.offset) {
        return settings.rewindDuration;
      }

      return settings.animationDuration;
    }
  });
  /**
   * Set transition `style` value:
   * - on each moving, because it may be cleared by offset move
   */

  Events.on('move', function () {
    Transition.set();
  });
  /**
   * Disable transition:
   * - before initial build to avoid transitioning from `0` to `startAt` index
   * - while resizing window and recalculating dimensions
   * - on jumping from offset transition at start and end edges in `carousel` type
   */

  Events.on(['build.before', 'resize', 'translate.jump'], function () {
    Transition.disable();
  });
  /**
   * Enable transition:
   * - on each running, because it may be disabled by offset move
   */

  Events.on('run', function () {
    Transition.enable();
  });
  /**
   * Remove transition:
   * - on destroying to bring markup to its inital state
   */

  Events.on('destroy', function () {
    Transition.remove();
  });
  return Transition;
}

/**
 * Test via a getter in the options object to see
 * if the passive property is accessed.
 *
 * @see https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
 */
var supportsPassive = false;

try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function get() {
      supportsPassive = true;
    }
  });
  window.addEventListener('testPassive', null, opts);
  window.removeEventListener('testPassive', null, opts);
} catch (e) {}

var supportsPassive$1 = supportsPassive;

var START_EVENTS = ['touchstart', 'mousedown'];
var MOVE_EVENTS = ['touchmove', 'mousemove'];
var END_EVENTS = ['touchend', 'touchcancel', 'mouseup', 'mouseleave'];
var MOUSE_EVENTS = ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];
function Swipe (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();
  var swipeSin = 0;
  var swipeStartX = 0;
  var swipeStartY = 0;
  var disabled = false;
  var capture = supportsPassive$1 ? {
    passive: true
  } : false;
  var Swipe = {
    /**
     * Initializes swipe bindings.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.bindSwipeStart();
    },

    /**
     * Handler for `swipestart` event. Calculates entry points of the user's tap.
     *
     * @param {Object} event
     * @return {Void}
     */
    start: function start(event) {
      if (!disabled && !Glide.disabled) {
        this.disable();
        var swipe = this.touches(event);
        swipeSin = null;
        swipeStartX = toInt(swipe.pageX);
        swipeStartY = toInt(swipe.pageY);
        this.bindSwipeMove();
        this.bindSwipeEnd();
        Events.emit('swipe.start');
      }
    },

    /**
     * Handler for `swipemove` event. Calculates user's tap angle and distance.
     *
     * @param {Object} event
     */
    move: function move(event) {
      if (!Glide.disabled) {
        var _Glide$settings = Glide.settings,
            touchAngle = _Glide$settings.touchAngle,
            touchRatio = _Glide$settings.touchRatio,
            classes = _Glide$settings.classes;
        var swipe = this.touches(event);
        var subExSx = toInt(swipe.pageX) - swipeStartX;
        var subEySy = toInt(swipe.pageY) - swipeStartY;
        var powEX = Math.abs(subExSx << 2);
        var powEY = Math.abs(subEySy << 2);
        var swipeHypotenuse = Math.sqrt(powEX + powEY);
        var swipeCathetus = Math.sqrt(powEY);
        swipeSin = Math.asin(swipeCathetus / swipeHypotenuse);

        if (swipeSin * 180 / Math.PI < touchAngle) {
          event.stopPropagation();
          Components.Move.make(subExSx * toFloat(touchRatio));
          Components.Html.root.classList.add(classes.dragging);
          Events.emit('swipe.move');
        } else {
          return false;
        }
      }
    },

    /**
     * Handler for `swipeend` event. Finitializes user's tap and decides about glide move.
     *
     * @param {Object} event
     * @return {Void}
     */
    end: function end(event) {
      if (!Glide.disabled) {
        var _Glide$settings2 = Glide.settings,
            perSwipe = _Glide$settings2.perSwipe,
            touchAngle = _Glide$settings2.touchAngle,
            classes = _Glide$settings2.classes;
        var swipe = this.touches(event);
        var threshold = this.threshold(event);
        var swipeDistance = swipe.pageX - swipeStartX;
        var swipeDeg = swipeSin * 180 / Math.PI;
        this.enable();

        if (swipeDistance > threshold && swipeDeg < touchAngle) {
          Components.Run.make(Components.Direction.resolve("".concat(perSwipe, "<")));
        } else if (swipeDistance < -threshold && swipeDeg < touchAngle) {
          Components.Run.make(Components.Direction.resolve("".concat(perSwipe, ">")));
        } else {
          // While swipe don't reach distance apply previous transform.
          Components.Move.make();
        }

        Components.Html.root.classList.remove(classes.dragging);
        this.unbindSwipeMove();
        this.unbindSwipeEnd();
        Events.emit('swipe.end');
      }
    },

    /**
     * Binds swipe's starting event.
     *
     * @return {Void}
     */
    bindSwipeStart: function bindSwipeStart() {
      var _this = this;

      var _Glide$settings3 = Glide.settings,
          swipeThreshold = _Glide$settings3.swipeThreshold,
          dragThreshold = _Glide$settings3.dragThreshold;

      if (swipeThreshold) {
        Binder.on(START_EVENTS[0], Components.Html.wrapper, function (event) {
          _this.start(event);
        }, capture);
      }

      if (dragThreshold) {
        Binder.on(START_EVENTS[1], Components.Html.wrapper, function (event) {
          _this.start(event);
        }, capture);
      }
    },

    /**
     * Unbinds swipe's starting event.
     *
     * @return {Void}
     */
    unbindSwipeStart: function unbindSwipeStart() {
      Binder.off(START_EVENTS[0], Components.Html.wrapper, capture);
      Binder.off(START_EVENTS[1], Components.Html.wrapper, capture);
    },

    /**
     * Binds swipe's moving event.
     *
     * @return {Void}
     */
    bindSwipeMove: function bindSwipeMove() {
      var _this2 = this;

      Binder.on(MOVE_EVENTS, Components.Html.wrapper, throttle(function (event) {
        _this2.move(event);
      }, Glide.settings.throttle), capture);
    },

    /**
     * Unbinds swipe's moving event.
     *
     * @return {Void}
     */
    unbindSwipeMove: function unbindSwipeMove() {
      Binder.off(MOVE_EVENTS, Components.Html.wrapper, capture);
    },

    /**
     * Binds swipe's ending event.
     *
     * @return {Void}
     */
    bindSwipeEnd: function bindSwipeEnd() {
      var _this3 = this;

      Binder.on(END_EVENTS, Components.Html.wrapper, function (event) {
        _this3.end(event);
      });
    },

    /**
     * Unbinds swipe's ending event.
     *
     * @return {Void}
     */
    unbindSwipeEnd: function unbindSwipeEnd() {
      Binder.off(END_EVENTS, Components.Html.wrapper);
    },

    /**
     * Normalizes event touches points accorting to different types.
     *
     * @param {Object} event
     */
    touches: function touches(event) {
      if (MOUSE_EVENTS.indexOf(event.type) > -1) {
        return event;
      }

      return event.touches[0] || event.changedTouches[0];
    },

    /**
     * Gets value of minimum swipe distance settings based on event type.
     *
     * @return {Number}
     */
    threshold: function threshold(event) {
      var settings = Glide.settings;

      if (MOUSE_EVENTS.indexOf(event.type) > -1) {
        return settings.dragThreshold;
      }

      return settings.swipeThreshold;
    },

    /**
     * Enables swipe event.
     *
     * @return {self}
     */
    enable: function enable() {
      disabled = false;
      Components.Transition.enable();
      return this;
    },

    /**
     * Disables swipe event.
     *
     * @return {self}
     */
    disable: function disable() {
      disabled = true;
      Components.Transition.disable();
      return this;
    }
  };
  /**
   * Add component class:
   * - after initial building
   */

  Events.on('build.after', function () {
    Components.Html.root.classList.add(Glide.settings.classes.swipeable);
  });
  /**
   * Remove swiping bindings:
   * - on destroying, to remove added EventListeners
   */

  Events.on('destroy', function () {
    Swipe.unbindSwipeStart();
    Swipe.unbindSwipeMove();
    Swipe.unbindSwipeEnd();
    Binder.destroy();
  });
  return Swipe;
}

function Images (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();
  var Images = {
    /**
     * Binds listener to glide wrapper.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.bind();
    },

    /**
     * Binds `dragstart` event on wrapper to prevent dragging images.
     *
     * @return {Void}
     */
    bind: function bind() {
      Binder.on('dragstart', Components.Html.wrapper, this.dragstart);
    },

    /**
     * Unbinds `dragstart` event on wrapper.
     *
     * @return {Void}
     */
    unbind: function unbind() {
      Binder.off('dragstart', Components.Html.wrapper);
    },

    /**
     * Event handler. Prevents dragging.
     *
     * @return {Void}
     */
    dragstart: function dragstart(event) {
      event.preventDefault();
    }
  };
  /**
   * Remove bindings from images:
   * - on destroying, to remove added EventListeners
   */

  Events.on('destroy', function () {
    Images.unbind();
    Binder.destroy();
  });
  return Images;
}

function Anchors (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();
  /**
   * Holds detaching status of anchors.
   * Prevents detaching of already detached anchors.
   *
   * @private
   * @type {Boolean}
   */

  var detached = false;
  /**
   * Holds preventing status of anchors.
   * If `true` redirection after click will be disabled.
   *
   * @private
   * @type {Boolean}
   */

  var prevented = false;
  var Anchors = {
    /**
     * Setups a initial state of anchors component.
     *
     * @returns {Void}
     */
    mount: function mount() {
      /**
       * Holds collection of anchors elements.
       *
       * @private
       * @type {HTMLCollection}
       */
      this._a = Components.Html.wrapper.querySelectorAll('a');
      this.bind();
    },

    /**
     * Binds events to anchors inside a track.
     *
     * @return {Void}
     */
    bind: function bind() {
      Binder.on('click', Components.Html.wrapper, this.click);
    },

    /**
     * Unbinds events attached to anchors inside a track.
     *
     * @return {Void}
     */
    unbind: function unbind() {
      Binder.off('click', Components.Html.wrapper);
    },

    /**
     * Handler for click event. Prevents clicks when glide is in `prevent` status.
     *
     * @param  {Object} event
     * @return {Void}
     */
    click: function click(event) {
      if (prevented) {
        event.stopPropagation();
        event.preventDefault();
      }
    },

    /**
     * Detaches anchors click event inside glide.
     *
     * @return {self}
     */
    detach: function detach() {
      prevented = true;

      if (!detached) {
        for (var i = 0; i < this.items.length; i++) {
          this.items[i].draggable = false;
        }

        detached = true;
      }

      return this;
    },

    /**
     * Attaches anchors click events inside glide.
     *
     * @return {self}
     */
    attach: function attach() {
      prevented = false;

      if (detached) {
        for (var i = 0; i < this.items.length; i++) {
          this.items[i].draggable = true;
        }

        detached = false;
      }

      return this;
    }
  };
  define(Anchors, 'items', {
    /**
     * Gets collection of the arrows HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function get() {
      return Anchors._a;
    }
  });
  /**
   * Detach anchors inside slides:
   * - on swiping, so they won't redirect to its `href` attributes
   */

  Events.on('swipe.move', function () {
    Anchors.detach();
  });
  /**
   * Attach anchors inside slides:
   * - after swiping and transitions ends, so they can redirect after click again
   */

  Events.on('swipe.end', function () {
    Components.Transition.after(function () {
      Anchors.attach();
    });
  });
  /**
   * Unbind anchors inside slides:
   * - on destroying, to bring anchors to its initial state
   */

  Events.on('destroy', function () {
    Anchors.attach();
    Anchors.unbind();
    Binder.destroy();
  });
  return Anchors;
}

var NAV_SELECTOR = '[data-glide-el="controls[nav]"]';
var CONTROLS_SELECTOR = '[data-glide-el^="controls"]';
var PREVIOUS_CONTROLS_SELECTOR = "".concat(CONTROLS_SELECTOR, " [data-glide-dir*=\"<\"]");
var NEXT_CONTROLS_SELECTOR = "".concat(CONTROLS_SELECTOR, " [data-glide-dir*=\">\"]");
function Controls (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();
  var capture = supportsPassive$1 ? {
    passive: true
  } : false;
  var Controls = {
    /**
     * Inits arrows. Binds events listeners
     * to the arrows HTML elements.
     *
     * @return {Void}
     */
    mount: function mount() {
      /**
       * Collection of navigation HTML elements.
       *
       * @private
       * @type {HTMLCollection}
       */
      this._n = Components.Html.root.querySelectorAll(NAV_SELECTOR);
      /**
       * Collection of controls HTML elements.
       *
       * @private
       * @type {HTMLCollection}
       */

      this._c = Components.Html.root.querySelectorAll(CONTROLS_SELECTOR);
      /**
       * Collection of arrow control HTML elements.
       *
       * @private
       * @type {Object}
       */

      this._arrowControls = {
        previous: Components.Html.root.querySelectorAll(PREVIOUS_CONTROLS_SELECTOR),
        next: Components.Html.root.querySelectorAll(NEXT_CONTROLS_SELECTOR)
      };
      this.addBindings();
    },

    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    setActive: function setActive() {
      for (var i = 0; i < this._n.length; i++) {
        this.addClass(this._n[i].children);
      }
    },

    /**
     * Removes active class to current slide.
     *
     * @return {Void}
     */
    removeActive: function removeActive() {
      for (var i = 0; i < this._n.length; i++) {
        this.removeClass(this._n[i].children);
      }
    },

    /**
     * Toggles active class on items inside navigation.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    addClass: function addClass(controls) {
      var settings = Glide.settings;
      var item = controls[Glide.index];

      if (!item) {
        return;
      }

      if (item) {
        item.classList.add(settings.classes.nav.active);
        siblings(item).forEach(function (sibling) {
          sibling.classList.remove(settings.classes.nav.active);
        });
      }
    },

    /**
     * Removes active class from active control.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    removeClass: function removeClass(controls) {
      var item = controls[Glide.index];

      if (item) {
        item.classList.remove(Glide.settings.classes.nav.active);
      }
    },

    /**
     * Calculates, removes or adds `Glide.settings.classes.disabledArrow` class on the control arrows
     */
    setArrowState: function setArrowState() {
      if (Glide.settings.rewind) {
        return;
      }

      var next = Controls._arrowControls.next;
      var previous = Controls._arrowControls.previous;
      this.resetArrowState(next, previous);

      if (Glide.index === 0) {
        this.disableArrow(previous);
      }

      if (Glide.index === Components.Run.length) {
        this.disableArrow(next);
      }
    },

    /**
     * Removes `Glide.settings.classes.disabledArrow` from given NodeList elements
     *
     * @param {NodeList[]} lists
     */
    resetArrowState: function resetArrowState() {
      var settings = Glide.settings;

      for (var _len = arguments.length, lists = new Array(_len), _key = 0; _key < _len; _key++) {
        lists[_key] = arguments[_key];
      }

      lists.forEach(function (list) {
        list.forEach(function (element) {
          element.classList.remove(settings.classes.arrow.disabled);
        });
      });
    },

    /**
     * Adds `Glide.settings.classes.disabledArrow` to given NodeList elements
     *
     * @param {NodeList[]} lists
     */
    disableArrow: function disableArrow() {
      var settings = Glide.settings;

      for (var _len2 = arguments.length, lists = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        lists[_key2] = arguments[_key2];
      }

      lists.forEach(function (list) {
        list.forEach(function (element) {
          element.classList.add(settings.classes.arrow.disabled);
        });
      });
    },

    /**
     * Adds handles to the each group of controls.
     *
     * @return {Void}
     */
    addBindings: function addBindings() {
      for (var i = 0; i < this._c.length; i++) {
        this.bind(this._c[i].children);
      }
    },

    /**
     * Removes handles from the each group of controls.
     *
     * @return {Void}
     */
    removeBindings: function removeBindings() {
      for (var i = 0; i < this._c.length; i++) {
        this.unbind(this._c[i].children);
      }
    },

    /**
     * Binds events to arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    bind: function bind(elements) {
      for (var i = 0; i < elements.length; i++) {
        Binder.on('click', elements[i], this.click);
        Binder.on('touchstart', elements[i], this.click, capture);
      }
    },

    /**
     * Unbinds events binded to the arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    unbind: function unbind(elements) {
      for (var i = 0; i < elements.length; i++) {
        Binder.off(['click', 'touchstart'], elements[i]);
      }
    },

    /**
     * Handles `click` event on the arrows HTML elements.
     * Moves slider in direction given via the
     * `data-glide-dir` attribute.
     *
     * @param {Object} event
     * @return {void}
     */
    click: function click(event) {
      if (!supportsPassive$1 && event.type === 'touchstart') {
        event.preventDefault();
      }

      var direction = event.currentTarget.getAttribute('data-glide-dir');
      Components.Run.make(Components.Direction.resolve(direction));
    }
  };
  define(Controls, 'items', {
    /**
     * Gets collection of the controls HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function get() {
      return Controls._c;
    }
  });
  /**
   * Swap active class of current navigation item:
   * - after mounting to set it to initial index
   * - after each move to the new index
   */

  Events.on(['mount.after', 'move.after'], function () {
    Controls.setActive();
  });
  /**
   * Add or remove disabled class of arrow elements
   */

  Events.on(['mount.after', 'run'], function () {
    Controls.setArrowState();
  });
  /**
   * Remove bindings and HTML Classes:
   * - on destroying, to bring markup to its initial state
   */

  Events.on('destroy', function () {
    Controls.removeBindings();
    Controls.removeActive();
    Binder.destroy();
  });
  return Controls;
}

function Keyboard (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();
  var Keyboard = {
    /**
     * Binds keyboard events on component mount.
     *
     * @return {Void}
     */
    mount: function mount() {
      if (Glide.settings.keyboard) {
        this.bind();
      }
    },

    /**
     * Adds keyboard press events.
     *
     * @return {Void}
     */
    bind: function bind() {
      Binder.on('keyup', document, this.press);
    },

    /**
     * Removes keyboard press events.
     *
     * @return {Void}
     */
    unbind: function unbind() {
      Binder.off('keyup', document);
    },

    /**
     * Handles keyboard's arrows press and moving glide foward and backward.
     *
     * @param  {Object} event
     * @return {Void}
     */
    press: function press(event) {
      var perSwipe = Glide.settings.perSwipe;

      if (event.keyCode === 39) {
        Components.Run.make(Components.Direction.resolve("".concat(perSwipe, ">")));
      }

      if (event.keyCode === 37) {
        Components.Run.make(Components.Direction.resolve("".concat(perSwipe, "<")));
      }
    }
  };
  /**
   * Remove bindings from keyboard:
   * - on destroying to remove added events
   * - on updating to remove events before remounting
   */

  Events.on(['destroy', 'update'], function () {
    Keyboard.unbind();
  });
  /**
   * Remount component
   * - on updating to reflect potential changes in settings
   */

  Events.on('update', function () {
    Keyboard.mount();
  });
  /**
   * Destroy binder:
   * - on destroying to remove listeners
   */

  Events.on('destroy', function () {
    Binder.destroy();
  });
  return Keyboard;
}

function Autoplay (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();
  var Autoplay = {
    /**
     * Initializes autoplaying and events.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.enable();
      this.start();

      if (Glide.settings.hoverpause) {
        this.bind();
      }
    },

    /**
     * Enables autoplaying
     *
     * @returns {Void}
     */
    enable: function enable() {
      this._e = true;
    },

    /**
     * Disables autoplaying.
     *
     * @returns {Void}
     */
    disable: function disable() {
      this._e = false;
    },

    /**
     * Starts autoplaying in configured interval.
     *
     * @param {Boolean|Number} force Run autoplaying with passed interval regardless of `autoplay` settings
     * @return {Void}
     */
    start: function start() {
      var _this = this;

      if (!this._e) {
        return;
      }

      this.enable();

      if (Glide.settings.autoplay) {
        if (isUndefined(this._i)) {
          this._i = setInterval(function () {
            _this.stop();

            Components.Run.make('>');

            _this.start();

            Events.emit('autoplay');
          }, this.time);
        }
      }
    },

    /**
     * Stops autorunning of the glide.
     *
     * @return {Void}
     */
    stop: function stop() {
      this._i = clearInterval(this._i);
    },

    /**
     * Stops autoplaying while mouse is over glide's area.
     *
     * @return {Void}
     */
    bind: function bind() {
      var _this2 = this;

      Binder.on('mouseover', Components.Html.root, function () {
        if (_this2._e) {
          _this2.stop();
        }
      });
      Binder.on('mouseout', Components.Html.root, function () {
        if (_this2._e) {
          _this2.start();
        }
      });
    },

    /**
     * Unbind mouseover events.
     *
     * @returns {Void}
     */
    unbind: function unbind() {
      Binder.off(['mouseover', 'mouseout'], Components.Html.root);
    }
  };
  define(Autoplay, 'time', {
    /**
     * Gets time period value for the autoplay interval. Prioritizes
     * times in `data-glide-autoplay` attrubutes over options.
     *
     * @return {Number}
     */
    get: function get() {
      var autoplay = Components.Html.slides[Glide.index].getAttribute('data-glide-autoplay');

      if (autoplay) {
        return toInt(autoplay);
      }

      return toInt(Glide.settings.autoplay);
    }
  });
  /**
   * Stop autoplaying and unbind events:
   * - on destroying, to clear defined interval
   * - on updating via API to reset interval that may changed
   */

  Events.on(['destroy', 'update'], function () {
    Autoplay.unbind();
  });
  /**
   * Stop autoplaying:
   * - before each run, to restart autoplaying
   * - on pausing via API
   * - on destroying, to clear defined interval
   * - while starting a swipe
   * - on updating via API to reset interval that may changed
   */

  Events.on(['run.before', 'swipe.start', 'update'], function () {
    Autoplay.stop();
  });
  Events.on(['pause', 'destroy'], function () {
    Autoplay.disable();
    Autoplay.stop();
  });
  /**
   * Start autoplaying:
   * - after each run, to restart autoplaying
   * - on playing via API
   * - while ending a swipe
   */

  Events.on(['run.after', 'swipe.end'], function () {
    Autoplay.start();
  });
  /**
   * Start autoplaying:
   * - after each run, to restart autoplaying
   * - on playing via API
   * - while ending a swipe
   */

  Events.on(['play'], function () {
    Autoplay.enable();
    Autoplay.start();
  });
  /**
   * Remount autoplaying:
   * - on updating via API to reset interval that may changed
   */

  Events.on('update', function () {
    Autoplay.mount();
  });
  /**
   * Destroy a binder:
   * - on destroying glide instance to clearup listeners
   */

  Events.on('destroy', function () {
    Binder.destroy();
  });
  return Autoplay;
}

/**
 * Sorts keys of breakpoint object so they will be ordered from lower to bigger.
 *
 * @param {Object} points
 * @returns {Object}
 */

function sortBreakpoints(points) {
  if (isObject(points)) {
    return sortKeys(points);
  } else {
    warn("Breakpoints option must be an object");
  }

  return {};
}

function Breakpoints (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();
  /**
   * Holds reference to settings.
   *
   * @type {Object}
   */

  var settings = Glide.settings;
  /**
   * Holds reference to breakpoints object in settings. Sorts breakpoints
   * from smaller to larger. It is required in order to proper
   * matching currently active breakpoint settings.
   *
   * @type {Object}
   */

  var points = sortBreakpoints(settings.breakpoints);
  /**
   * Cache initial settings before overwritting.
   *
   * @type {Object}
   */

  var defaults = Object.assign({}, settings);
  var Breakpoints = {
    /**
     * Matches settings for currectly matching media breakpoint.
     *
     * @param {Object} points
     * @returns {Object}
     */
    match: function match(points) {
      if (typeof window.matchMedia !== 'undefined') {
        for (var point in points) {
          if (points.hasOwnProperty(point)) {
            if (window.matchMedia("(max-width: ".concat(point, "px)")).matches) {
              return points[point];
            }
          }
        }
      }

      return defaults;
    }
  };
  /**
   * Overwrite instance settings with currently matching breakpoint settings.
   * This happens right after component initialization.
   */

  Object.assign(settings, Breakpoints.match(points));
  /**
   * Update glide with settings of matched brekpoint:
   * - window resize to update slider
   */

  Binder.on('resize', window, throttle(function () {
    Glide.settings = mergeOptions(settings, Breakpoints.match(points));
  }, Glide.settings.throttle));
  /**
   * Resort and update default settings:
   * - on reinit via API, so breakpoint matching will be performed with options
   */

  Events.on('update', function () {
    points = sortBreakpoints(points);
    defaults = Object.assign({}, settings);
  });
  /**
   * Unbind resize listener:
   * - on destroying, to bring markup to its initial state
   */

  Events.on('destroy', function () {
    Binder.off('resize', window);
  });
  return Breakpoints;
}

var COMPONENTS = {
  // Required
  Html: Html,
  Translate: Translate,
  Transition: Transition,
  Direction: Direction,
  Peek: Peek,
  Sizes: Sizes,
  Gaps: Gaps,
  Move: Move,
  Clones: Clones,
  Resize: Resize,
  Build: Build,
  Run: Run,
  // Optional
  Swipe: Swipe,
  Images: Images,
  Anchors: Anchors,
  Controls: Controls,
  Keyboard: Keyboard,
  Autoplay: Autoplay,
  Breakpoints: Breakpoints
};

var Glide = /*#__PURE__*/function (_Core) {
  _inherits(Glide, _Core);

  var _super = _createSuper(Glide);

  function Glide() {
    _classCallCheck(this, Glide);

    return _super.apply(this, arguments);
  }

  _createClass(Glide, [{
    key: "mount",
    value: function mount() {
      var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return _get(_getPrototypeOf(Glide.prototype), "mount", this).call(this, Object.assign({}, COMPONENTS, extensions));
    }
  }]);

  return Glide;
}(Glide$1);




/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



const base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
const ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
const customInspectSymbol =
  (typeof Symbol === 'function' && typeof Symbol['for'] === 'function') // eslint-disable-line dot-notation
    ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
    : null

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

const K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    const arr = new Uint8Array(1)
    const proto = { foo: function () { return 42 } }
    Object.setPrototypeOf(proto, Uint8Array.prototype)
    Object.setPrototypeOf(arr, proto)
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  const buf = new Uint8Array(length)
  Object.setPrototypeOf(buf, Buffer.prototype)
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayView(value)
  }

  if (value == null) {
    throw new TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof SharedArrayBuffer !== 'undefined' &&
      (isInstance(value, SharedArrayBuffer) ||
      (value && isInstance(value.buffer, SharedArrayBuffer)))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  const valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  const b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length)
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype)
Object.setPrototypeOf(Buffer, Uint8Array)

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  const length = byteLength(string, encoding) | 0
  let buf = createBuffer(length)

  const actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  const length = array.length < 0 ? 0 : checked(array.length) | 0
  const buf = createBuffer(length)
  for (let i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayView (arrayView) {
  if (isInstance(arrayView, Uint8Array)) {
    const copy = new Uint8Array(arrayView)
    return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength)
  }
  return fromArrayLike(arrayView)
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  let buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(buf, Buffer.prototype)

  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    const len = checked(obj.length) | 0
    const buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  let x = a.length
  let y = b.length

  for (let i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  let i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  const buffer = Buffer.allocUnsafe(length)
  let pos = 0
  for (i = 0; i < list.length; ++i) {
    let buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      if (pos + buf.length > buffer.length) {
        if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf)
        buf.copy(buffer, pos)
      } else {
        Uint8Array.prototype.set.call(
          buffer,
          buf,
          pos
        )
      }
    } else if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    } else {
      buf.copy(buffer, pos)
    }
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  const len = string.length
  const mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  let loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  let loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  const i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  const len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (let i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  const len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (let i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  const len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (let i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  const length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  let str = ''
  const max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}
if (customInspectSymbol) {
  Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  let x = thisEnd - thisStart
  let y = end - start
  const len = Math.min(x, y)

  const thisCopy = this.slice(thisStart, thisEnd)
  const targetCopy = target.slice(start, end)

  for (let i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  let indexSize = 1
  let arrLength = arr.length
  let valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  let i
  if (dir) {
    let foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      let found = true
      for (let j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  const remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  const strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  let i
  for (i = 0; i < length; ++i) {
    const parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  const remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  let loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
      case 'latin1':
      case 'binary':
        return asciiWrite(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  const res = []

  let i = start
  while (i < end) {
    const firstByte = buf[i]
    let codePoint = null
    let bytesPerSequence = (firstByte > 0xEF)
      ? 4
      : (firstByte > 0xDF)
          ? 3
          : (firstByte > 0xBF)
              ? 2
              : 1

    if (i + bytesPerSequence <= end) {
      let secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  const len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  let res = ''
  let i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  let ret = ''
  end = Math.min(buf.length, end)

  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  let ret = ''
  end = Math.min(buf.length, end)

  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  const len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  let out = ''
  for (let i = start; i < end; ++i) {
    out += hexSliceLookupTable[buf[i]]
  }
  return out
}

function utf16leSlice (buf, start, end) {
  const bytes = buf.slice(start, end)
  let res = ''
  // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
  for (let i = 0; i < bytes.length - 1; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  const len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  const newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(newBuf, Buffer.prototype)

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUintLE =
Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let val = this[offset]
  let mul = 1
  let i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUintBE =
Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  let val = this[offset + --byteLength]
  let mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUint8 =
Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUint16LE =
Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUint16BE =
Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUint32LE =
Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUint32BE =
Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const lo = first +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 24

  const hi = this[++offset] +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    last * 2 ** 24

  return BigInt(lo) + (BigInt(hi) << BigInt(32))
})

Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const hi = first * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    this[++offset]

  const lo = this[++offset] * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    last

  return (BigInt(hi) << BigInt(32)) + BigInt(lo)
})

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let val = this[offset]
  let mul = 1
  let i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let i = byteLength
  let mul = 1
  let val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  const val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  const val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const val = this[offset + 4] +
    this[offset + 5] * 2 ** 8 +
    this[offset + 6] * 2 ** 16 +
    (last << 24) // Overflow

  return (BigInt(val) << BigInt(32)) +
    BigInt(first +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 24)
})

Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    this[++offset]

  return (BigInt(val) << BigInt(32)) +
    BigInt(this[++offset] * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    last)
})

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUintLE =
Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    const maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  let mul = 1
  let i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUintBE =
Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    const maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  let i = byteLength - 1
  let mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUint8 =
Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUint16LE =
Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUint16BE =
Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUint32LE =
Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUint32BE =
Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function wrtBigUInt64LE (buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7)

  let lo = Number(value & BigInt(0xffffffff))
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff))
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  return offset
}

function wrtBigUInt64BE (buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7)

  let lo = Number(value & BigInt(0xffffffff))
  buf[offset + 7] = lo
  lo = lo >> 8
  buf[offset + 6] = lo
  lo = lo >> 8
  buf[offset + 5] = lo
  lo = lo >> 8
  buf[offset + 4] = lo
  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff))
  buf[offset + 3] = hi
  hi = hi >> 8
  buf[offset + 2] = hi
  hi = hi >> 8
  buf[offset + 1] = hi
  hi = hi >> 8
  buf[offset] = hi
  return offset + 8
}

Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE (value, offset = 0) {
  return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
})

Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE (value, offset = 0) {
  return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
})

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    const limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  let i = 0
  let mul = 1
  let sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    const limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  let i = byteLength - 1
  let mul = 1
  let sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE (value, offset = 0) {
  return wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
})

Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE (value, offset = 0) {
  return wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
})

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  const len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      const code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  } else if (typeof val === 'boolean') {
    val = Number(val)
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  let i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    const bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    const len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// CUSTOM ERRORS
// =============

// Simplified versions from Node, changed for Buffer-only usage
const errors = {}
function E (sym, getMessage, Base) {
  errors[sym] = class NodeError extends Base {
    constructor () {
      super()

      Object.defineProperty(this, 'message', {
        value: getMessage.apply(this, arguments),
        writable: true,
        configurable: true
      })

      // Add the error code to the name to include it in the stack trace.
      this.name = `${this.name} [${sym}]`
      // Access the stack to generate the error message including the error code
      // from the name.
      this.stack // eslint-disable-line no-unused-expressions
      // Reset the name to the actual name.
      delete this.name
    }

    get code () {
      return sym
    }

    set code (value) {
      Object.defineProperty(this, 'code', {
        configurable: true,
        enumerable: true,
        value,
        writable: true
      })
    }

    toString () {
      return `${this.name} [${sym}]: ${this.message}`
    }
  }
}

E('ERR_BUFFER_OUT_OF_BOUNDS',
  function (name) {
    if (name) {
      return `${name} is outside of buffer bounds`
    }

    return 'Attempt to access memory outside buffer bounds'
  }, RangeError)
E('ERR_INVALID_ARG_TYPE',
  function (name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`
  }, TypeError)
E('ERR_OUT_OF_RANGE',
  function (str, range, input) {
    let msg = `The value of "${str}" is out of range.`
    let received = input
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
      received = addNumericalSeparator(String(input))
    } else if (typeof input === 'bigint') {
      received = String(input)
      if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
        received = addNumericalSeparator(received)
      }
      received += 'n'
    }
    msg += ` It must be ${range}. Received ${received}`
    return msg
  }, RangeError)

function addNumericalSeparator (val) {
  let res = ''
  let i = val.length
  const start = val[0] === '-' ? 1 : 0
  for (; i >= start + 4; i -= 3) {
    res = `_${val.slice(i - 3, i)}${res}`
  }
  return `${val.slice(0, i)}${res}`
}

// CHECK FUNCTIONS
// ===============

function checkBounds (buf, offset, byteLength) {
  validateNumber(offset, 'offset')
  if (buf[offset] === undefined || buf[offset + byteLength] === undefined) {
    boundsError(offset, buf.length - (byteLength + 1))
  }
}

function checkIntBI (value, min, max, buf, offset, byteLength) {
  if (value > max || value < min) {
    const n = typeof min === 'bigint' ? 'n' : ''
    let range
    if (byteLength > 3) {
      if (min === 0 || min === BigInt(0)) {
        range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`
      } else {
        range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` +
                `${(byteLength + 1) * 8 - 1}${n}`
      }
    } else {
      range = `>= ${min}${n} and <= ${max}${n}`
    }
    throw new errors.ERR_OUT_OF_RANGE('value', range, value)
  }
  checkBounds(buf, offset, byteLength)
}

function validateNumber (value, name) {
  if (typeof value !== 'number') {
    throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value)
  }
}

function boundsError (value, length, type) {
  if (Math.floor(value) !== value) {
    validateNumber(value, type)
    throw new errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value)
  }

  if (length < 0) {
    throw new errors.ERR_BUFFER_OUT_OF_BOUNDS()
  }

  throw new errors.ERR_OUT_OF_RANGE(type || 'offset',
                                    `>= ${type ? 1 : 0} and <= ${length}`,
                                    value)
}

// HELPER FUNCTIONS
// ================

const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  let codePoint
  const length = string.length
  let leadSurrogate = null
  const bytes = []

  for (let i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  const byteArray = []
  for (let i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  let c, hi, lo
  const byteArray = []
  for (let i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  let i
  for (i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = (function () {
  const alphabet = '0123456789abcdef'
  const table = new Array(256)
  for (let i = 0; i < 16; ++i) {
    const i16 = i * 16
    for (let j = 0; j < 16; ++j) {
      table[i16 + j] = alphabet[i] + alphabet[j]
    }
  }
  return table
})()

// Return not function with Error if BigInt not supported
function defineBigIntMethod (fn) {
  return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn
}

function BufferBigIntNotDefined () {
  throw new Error('BigInt not supported')
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/glide.core.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/glide.core.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".glide {\n  position: relative;\n  width: 100%;\n  box-sizing: border-box;\n}\n.glide * {\n  box-sizing: inherit;\n}\n.glide__track {\n  overflow: hidden;\n}\n.glide__slides {\n  position: relative;\n  width: 100%;\n  list-style: none;\n  backface-visibility: hidden;\n  transform-style: preserve-3d;\n  touch-action: pan-Y;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n  white-space: nowrap;\n  display: flex;\n  flex-wrap: nowrap;\n  will-change: transform;\n}\n.glide__slides--dragging {\n  user-select: none;\n}\n.glide__slide {\n  width: 100%;\n  height: 100%;\n  flex-shrink: 0;\n  white-space: normal;\n  user-select: none;\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: transparent;\n}\n.glide__slide a {\n  user-select: none;\n  -webkit-user-drag: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n.glide__arrows {\n  -webkit-touch-callout: none;\n  user-select: none;\n}\n.glide__bullets {\n  -webkit-touch-callout: none;\n  user-select: none;\n}\n.glide--rtl {\n  direction: rtl;\n}\n\n/*# sourceMappingURL=glide.core.css.map */\n", "",{"version":3,"sources":["webpack://./src/css/glide.core.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,WAAW;EACX,sBAAsB;AACxB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,gBAAgB;EAChB,2BAA2B;EAC3B,4BAA4B;EAC5B,mBAAmB;EACnB,gBAAgB;EAChB,SAAS;EACT,UAAU;EACV,mBAAmB;EACnB,aAAa;EACb,iBAAiB;EACjB,sBAAsB;AACxB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,WAAW;EACX,YAAY;EACZ,cAAc;EACd,mBAAmB;EACnB,iBAAiB;EACjB,2BAA2B;EAC3B,wCAAwC;AAC1C;AACA;EACE,iBAAiB;EACjB,uBAAuB;EACvB,sBAAsB;EACtB,qBAAqB;AACvB;AACA;EACE,2BAA2B;EAC3B,iBAAiB;AACnB;AACA;EACE,2BAA2B;EAC3B,iBAAiB;AACnB;AACA;EACE,cAAc;AAChB;;AAEA,yCAAyC","sourcesContent":[".glide {\n  position: relative;\n  width: 100%;\n  box-sizing: border-box;\n}\n.glide * {\n  box-sizing: inherit;\n}\n.glide__track {\n  overflow: hidden;\n}\n.glide__slides {\n  position: relative;\n  width: 100%;\n  list-style: none;\n  backface-visibility: hidden;\n  transform-style: preserve-3d;\n  touch-action: pan-Y;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n  white-space: nowrap;\n  display: flex;\n  flex-wrap: nowrap;\n  will-change: transform;\n}\n.glide__slides--dragging {\n  user-select: none;\n}\n.glide__slide {\n  width: 100%;\n  height: 100%;\n  flex-shrink: 0;\n  white-space: normal;\n  user-select: none;\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: transparent;\n}\n.glide__slide a {\n  user-select: none;\n  -webkit-user-drag: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n.glide__arrows {\n  -webkit-touch-callout: none;\n  user-select: none;\n}\n.glide__bullets {\n  -webkit-touch-callout: none;\n  user-select: none;\n}\n.glide--rtl {\n  direction: rtl;\n}\n\n/*# sourceMappingURL=glide.core.css.map */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/glide.theme.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/glide.theme.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".glide__arrow {\n  position: absolute;\n  display: block;\n  top: 50%;\n  z-index: 2;\n  color: white;\n  text-transform: uppercase;\n  padding: 9px 12px;\n  background-color: transparent;\n  border: 2px solid rgba(255, 255, 255, 0.5);\n  border-radius: 4px;\n  box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.1);\n  text-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.1);\n  opacity: 1;\n  cursor: pointer;\n  transition: opacity 150ms ease, border 300ms ease-in-out;\n  transform: translateY(-50%);\n  line-height: 1;\n}\n.glide__arrow:focus {\n  outline: none;\n}\n.glide__arrow:hover {\n  border-color: white;\n}\n.glide__arrow--left {\n  left: 2em;\n}\n.glide__arrow--right {\n  right: 2em;\n}\n.glide__arrow--disabled {\n  opacity: 0.33;\n}\n.glide__bullets {\n  position: absolute;\n  z-index: 2;\n  bottom: 2em;\n  left: 50%;\n  display: inline-flex;\n  list-style: none;\n  transform: translateX(-50%);\n}\n.glide__bullet {\n  background-color: rgba(255, 255, 255, 0.5);\n  width: 9px;\n  height: 9px;\n  padding: 0;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  transition: all 300ms ease-in-out;\n  cursor: pointer;\n  line-height: 0;\n  box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.1);\n  margin: 0 0.25em;\n}\n.glide__bullet:focus {\n  outline: none;\n}\n.glide__bullet:hover, .glide__bullet:focus {\n  border: 2px solid white;\n  background-color: rgba(255, 255, 255, 0.5);\n}\n.glide__bullet--active {\n  background-color: white;\n}\n.glide--swipeable {\n  cursor: grab;\n  cursor: -moz-grab;\n  cursor: -webkit-grab;\n}\n.glide--dragging {\n  cursor: grabbing;\n  cursor: -moz-grabbing;\n  cursor: -webkit-grabbing;\n}\n\n/*# sourceMappingURL=glide.theme.css.map */\n", "",{"version":3,"sources":["webpack://./src/css/glide.theme.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,cAAc;EACd,QAAQ;EACR,UAAU;EACV,YAAY;EACZ,yBAAyB;EACzB,iBAAiB;EACjB,6BAA6B;EAC7B,0CAA0C;EAC1C,kBAAkB;EAClB,+CAA+C;EAC/C,8CAA8C;EAC9C,UAAU;EACV,eAAe;EACf,wDAAwD;EACxD,2BAA2B;EAC3B,cAAc;AAChB;AACA;EACE,aAAa;AACf;AACA;EACE,mBAAmB;AACrB;AACA;EACE,SAAS;AACX;AACA;EACE,UAAU;AACZ;AACA;EACE,aAAa;AACf;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,SAAS;EACT,oBAAoB;EACpB,gBAAgB;EAChB,2BAA2B;AAC7B;AACA;EACE,0CAA0C;EAC1C,UAAU;EACV,WAAW;EACX,UAAU;EACV,kBAAkB;EAClB,6BAA6B;EAC7B,iCAAiC;EACjC,eAAe;EACf,cAAc;EACd,+CAA+C;EAC/C,gBAAgB;AAClB;AACA;EACE,aAAa;AACf;AACA;EACE,uBAAuB;EACvB,0CAA0C;AAC5C;AACA;EACE,uBAAuB;AACzB;AACA;EACE,YAAY;EACZ,iBAAiB;EACjB,oBAAoB;AACtB;AACA;EACE,gBAAgB;EAChB,qBAAqB;EACrB,wBAAwB;AAC1B;;AAEA,0CAA0C","sourcesContent":[".glide__arrow {\n  position: absolute;\n  display: block;\n  top: 50%;\n  z-index: 2;\n  color: white;\n  text-transform: uppercase;\n  padding: 9px 12px;\n  background-color: transparent;\n  border: 2px solid rgba(255, 255, 255, 0.5);\n  border-radius: 4px;\n  box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.1);\n  text-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.1);\n  opacity: 1;\n  cursor: pointer;\n  transition: opacity 150ms ease, border 300ms ease-in-out;\n  transform: translateY(-50%);\n  line-height: 1;\n}\n.glide__arrow:focus {\n  outline: none;\n}\n.glide__arrow:hover {\n  border-color: white;\n}\n.glide__arrow--left {\n  left: 2em;\n}\n.glide__arrow--right {\n  right: 2em;\n}\n.glide__arrow--disabled {\n  opacity: 0.33;\n}\n.glide__bullets {\n  position: absolute;\n  z-index: 2;\n  bottom: 2em;\n  left: 50%;\n  display: inline-flex;\n  list-style: none;\n  transform: translateX(-50%);\n}\n.glide__bullet {\n  background-color: rgba(255, 255, 255, 0.5);\n  width: 9px;\n  height: 9px;\n  padding: 0;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  transition: all 300ms ease-in-out;\n  cursor: pointer;\n  line-height: 0;\n  box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.1);\n  margin: 0 0.25em;\n}\n.glide__bullet:focus {\n  outline: none;\n}\n.glide__bullet:hover, .glide__bullet:focus {\n  border: 2px solid white;\n  background-color: rgba(255, 255, 255, 0.5);\n}\n.glide__bullet--active {\n  background-color: white;\n}\n.glide--swipeable {\n  cursor: grab;\n  cursor: -moz-grab;\n  cursor: -webkit-grab;\n}\n.glide--dragging {\n  cursor: grabbing;\n  cursor: -moz-grabbing;\n  cursor: -webkit-grabbing;\n}\n\n/*# sourceMappingURL=glide.theme.css.map */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_glide_core_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./glide.core.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/glide.core.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_glide_theme_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./glide.theme.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/glide.theme.css");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_glide_core_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_glide_theme_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".active-menu {\r\n    position: absolute;\r\n    z-index: 9999;\r\n    top: 80%;\r\n    left: 0;\r\n    right: 0;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 60%;\r\n    height: 20%;\r\n}\r\n\r\n.inactive-menu {\r\n    position: absolute;\r\n    z-index: 9999;\r\n    top: 80%;\r\n    left: 0;\r\n    right: 0;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 60%;\r\n    height: 20%;\r\n}\r\n\r\n.capture-preview {\r\n    z-index: 9999;\r\n}\r\n\r\n.timer {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n#camera-timer {\r\n    font-size: xx-large;\r\n    color: white;\r\n}\r\n\r\n.glide {\r\n    background-color: aqua;\r\n    height: 5%;\r\n}\r\n\r\nli {\r\n    text-align: center;\r\n    background-color: red;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.scene-item {\r\n    background-color: green;\r\n    height: 120px;\r\n    width: 120px;\r\n    border-radius: 50%;\r\n    transition: all .2s;\r\n}\r\n\r\n.glide__slide--active div {\r\n    background-color: blue;\r\n    height: 145px;\r\n    width: 145px;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAIA;IACI,kBAAkB;IAClB,aAAa;IACb,QAAQ;IACR,OAAO;IACP,QAAQ;IACR,iBAAiB;IACjB,kBAAkB;IAClB,UAAU;IACV,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,QAAQ;IACR,OAAO;IACP,QAAQ;IACR,iBAAiB;IACjB,kBAAkB;IAClB,UAAU;IACV,WAAW;AACf;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;IACrB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,YAAY;AAChB","sourcesContent":["@import './glide.core.css';\r\n@import './glide.theme.css';\r\n\r\n\r\n.active-menu {\r\n    position: absolute;\r\n    z-index: 9999;\r\n    top: 80%;\r\n    left: 0;\r\n    right: 0;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 60%;\r\n    height: 20%;\r\n}\r\n\r\n.inactive-menu {\r\n    position: absolute;\r\n    z-index: 9999;\r\n    top: 80%;\r\n    left: 0;\r\n    right: 0;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 60%;\r\n    height: 20%;\r\n}\r\n\r\n.capture-preview {\r\n    z-index: 9999;\r\n}\r\n\r\n.timer {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n#camera-timer {\r\n    font-size: xx-large;\r\n    color: white;\r\n}\r\n\r\n.glide {\r\n    background-color: aqua;\r\n    height: 5%;\r\n}\r\n\r\nli {\r\n    text-align: center;\r\n    background-color: red;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.scene-item {\r\n    background-color: green;\r\n    height: 120px;\r\n    width: 120px;\r\n    border-radius: 50%;\r\n    transition: all .2s;\r\n}\r\n\r\n.glide__slide--active div {\r\n    background-color: blue;\r\n    height: 145px;\r\n    width: 145px;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/debug/src/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/debug/src/browser.js ***!
  \*******************************************/
/***/ ((module, exports, __webpack_require__) => {

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __webpack_require__(/*! ./common */ "./node_modules/debug/src/common.js")(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};


/***/ }),

/***/ "./node_modules/debug/src/common.js":
/*!******************************************!*\
  !*** ./node_modules/debug/src/common.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;
		let namespacesCache;
		let enabledCache;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => {
				if (enableOverride !== null) {
					return enableOverride;
				}
				if (namespacesCache !== createDebug.namespaces) {
					namespacesCache = createDebug.namespaces;
					enabledCache = createDebug.enabled(namespace);
				}

				return enabledCache;
			},
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);
		createDebug.namespaces = namespaces;

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.slice(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/***/ ((module) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/inherits/inherits_browser.js":
/*!***************************************************!*\
  !*** ./node_modules/inherits/inherits_browser.js ***!
  \***************************************************/
/***/ ((module) => {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }
}


/***/ }),

/***/ "./node_modules/isomorphic-ws/browser.js":
/*!***********************************************!*\
  !*** ./node_modules/isomorphic-ws/browser.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/maxogden/websocket-stream/blob/48dc3ddf943e5ada668c31ccd94e9186f02fafbd/ws-fallback.js

var ws = null

if (typeof WebSocket !== 'undefined') {
  ws = WebSocket
} else if (typeof MozWebSocket !== 'undefined') {
  ws = MozWebSocket
} else if (typeof __webpack_require__.g !== 'undefined') {
  ws = __webpack_require__.g.WebSocket || __webpack_require__.g.MozWebSocket
} else if (typeof window !== 'undefined') {
  ws = window.WebSocket || window.MozWebSocket
} else if (typeof self !== 'undefined') {
  ws = self.WebSocket || self.MozWebSocket
}

module.exports = ws


/***/ }),

/***/ "./node_modules/ms/index.js":
/*!**********************************!*\
  !*** ./node_modules/ms/index.js ***!
  \**********************************/
/***/ ((module) => {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ "./node_modules/obs-websocket-js/lib/OBSWebSocket.js":
/*!***********************************************************!*\
  !*** ./node_modules/obs-websocket-js/lib/OBSWebSocket.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Socket = __webpack_require__(/*! ./Socket */ "./node_modules/obs-websocket-js/lib/Socket.js");
const Status = __webpack_require__(/*! ./Status */ "./node_modules/obs-websocket-js/lib/Status.js");
const debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")('obs-websocket-js:Core');

let requestCounter = 0;

function generateMessageId() {
  return String(requestCounter++);
}

class OBSWebSocket extends Socket {
  /**
   * Generic Socket request method. Returns a promise.
   * Generates a messageId internally and will override any passed in the args.
   * Note that the requestType here is pre-marshaling and currently must match exactly what the websocket plugin is expecting.
   *
   * @param  {String}   requestType obs-websocket plugin expected request type.
   * @param  {Object}   [args={}]   request arguments.
   * @return {Promise}              Promise, passes the plugin response object.
   */
  send(requestType, args = {}) {
    args = args || {};

    return new Promise((resolve, reject) => {
      const messageId = generateMessageId();
      let rejectReason;

      if (!requestType) {
        rejectReason = Status.REQUEST_TYPE_NOT_SPECIFIED;
      }

      if (args && (typeof args !== 'object' || args === null || Array.isArray(args))) {
        rejectReason = Status.ARGS_NOT_OBJECT;
      }

      if (!this._connected) {
        rejectReason = Status.NOT_CONNECTED;
      }

      // Assign a temporary event listener for this particular messageId to uniquely identify the response.
      this.once(`obs:internal:message:id-${messageId}`, (err, data) => {
        if (err) {
          debug('[send:reject] %o', err);
          reject(err);
        } else {
          debug('[send:resolve] %o', data);
          resolve(data);
        }
      });

      // If we don't have a reason to fail fast, send the request to the socket.
      if (!rejectReason) {
        args['request-type'] = requestType;
        args['message-id'] = messageId;

        // Submit the request to the websocket.
        debug('[send] %s %s %o', messageId, requestType, args);
        try {
          this._socket.send(JSON.stringify(args));
        } catch (_) {
          // TODO: Consider inspecting the exception thrown to gleam some relevant info and pass that on.
          rejectReason = Status.SOCKET_EXCEPTION;
        }
      }

      // If the socket call was unsuccessful or bypassed, simulate its resolution.
      if (rejectReason) {
        this.emit(`obs:internal:message:id-${messageId}`, rejectReason);
      }
    });
  }

  /**
   * Generic Socket request method. Handles callbacks.
   * Internally calls `send` (which is promise-based). See `send`'s docs for more details.
   *
   * @param  {String}   requestType obs-websocket plugin expected request type.
   * @param  {Object}   [args={}]   request arguments.
   * @param  {Function} callback    Optional. callback(err, data)
   */
  sendCallback(requestType, args = {}, callback) { // eslint-disable-line default-param-last
    // Allow the `args` argument to be omitted.
    if (callback === undefined && typeof args === 'function') {
      callback = args;
      args = {};
    }

    // Perform the actual request, using `send`.
    this.send(requestType, args).then((...response) => {
      callback(null, ...response);
    }).catch(error => {
      callback(error);
    });
  }
}

module.exports = OBSWebSocket;


/***/ }),

/***/ "./node_modules/obs-websocket-js/lib/Socket.js":
/*!*****************************************************!*\
  !*** ./node_modules/obs-websocket-js/lib/Socket.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const WebSocket = __webpack_require__(/*! isomorphic-ws */ "./node_modules/isomorphic-ws/browser.js");
const EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js");
const hash = __webpack_require__(/*! ./util/authenticationHashing */ "./node_modules/obs-websocket-js/lib/util/authenticationHashing.js");
const Status = __webpack_require__(/*! ./Status */ "./node_modules/obs-websocket-js/lib/Status.js");
const debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")('obs-websocket-js:Socket');
const logAmbiguousError = __webpack_require__(/*! ./util/logAmbiguousError */ "./node_modules/obs-websocket-js/lib/util/logAmbiguousError.js");
const camelCaseKeys = __webpack_require__(/*! ./util/camelCaseKeys */ "./node_modules/obs-websocket-js/lib/util/camelCaseKeys.js");

class Socket extends EventEmitter {
  constructor() {
    super();
    this._connected = false;
    this._socket = undefined;

    const originalEmit = this.emit;
    this.emit = function (...args) {
      debug('[emit] %s err: %o data: %o', ...args);
      originalEmit.apply(this, args);
    };
  }

  async connect(args = {}) {
    args = args || {};
    const address = args.address || 'localhost:4444';

    if (this._socket) {
      try {
        // Blindly try to close the socket.
        // Don't care if its already closed.
        // We just don't want any sockets to leak.
        this._socket.close();
      } catch (error) {
        // These errors are probably safe to ignore, but debug log them just in case.
        debug('Failed to close previous WebSocket:', error.message);
      }
    }

    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        await this._connect(address, Boolean(args.secure));
        await this._authenticate(args.password);
        resolve();
      } catch (err) {
        this._socket.close();
        this._connected = false;
        logAmbiguousError(debug, 'Connection failed:', err);
        reject(err);
      }
    });
  }

  /**
   * Opens a WebSocket connection to an obs-websocket server, but does not attempt any authentication.
   *
   * @param {String} address url without ws:// or wss:// prefix.
   * @param {Boolean} secure whether to us ws:// or wss://
   * @returns {Promise}
   * @private
   * @return {Promise} on attempted creation of WebSocket connection.
   */
  async _connect(address, secure) {
    return new Promise((resolve, reject) => {
      let settled = false;

      debug('Attempting to connect to: %s (secure: %s)', address, secure);
      this._socket = new WebSocket((secure ? 'wss://' : 'ws://') + address);

      // We only handle the initial connection error.
      // Beyond that, the consumer is responsible for adding their own generic `error` event listener.
      // FIXME: Unsure how best to expose additional information about the WebSocket error.
      this._socket.onerror = err => {
        if (settled) {
          logAmbiguousError(debug, 'Unknown Socket Error', err);
          this.emit('error', err);
          return;
        }

        settled = true;
        logAmbiguousError(debug, 'Websocket Connection failed:', err);
        reject(Status.CONNECTION_ERROR);
      };

      this._socket.onopen = () => {
        if (settled) {
          return;
        }

        this._connected = true;
        settled = true;

        debug('Connection opened: %s', address);
        this.emit('ConnectionOpened');
        resolve();
      };

      // Looks like this should be bound. We don't technically cancel the connection when the authentication fails.
      this._socket.onclose = () => {
        this._connected = false;
        debug('Connection closed: %s', address);
        this.emit('ConnectionClosed');
      };

      // This handler must be present before we can call _authenticate.
      this._socket.onmessage = msg => {
        debug('[OnMessage]: %o', msg);
        const message = camelCaseKeys(JSON.parse(msg.data));
        let err;
        let data;

        if (message.status === 'error') {
          err = message;
        } else {
          data = message;
        }

        // Emit the message with ID if available, otherwise try to find a non-messageId driven event.
        if (message.messageId) {
          this.emit(`obs:internal:message:id-${message.messageId}`, err, data);
        } else if (message.updateType) {
          this.emit(message.updateType, data);
        } else {
          logAmbiguousError(debug, 'Unrecognized Socket Message:', message);
          this.emit('message', message);
        }
      };
    });
  }

  /**
   * Authenticates to an obs-websocket server. Must already have an active connection before calling this method.
   *
   * @param {String} [password=''] authentication string.
   * @private
   * @return {Promise} on resolution of authentication call.
   */
  async _authenticate(password = '') {
    if (!this._connected) {
      throw Status.NOT_CONNECTED;
    }

    const auth = await this.send('GetAuthRequired');

    if (!auth.authRequired) {
      debug('Authentication not Required');
      this.emit('AuthenticationSuccess');
      return Status.AUTH_NOT_REQUIRED;
    }

    try {
      await this.send('Authenticate', {
        auth: hash(auth.salt, auth.challenge, password)
      });
    } catch (e) {
      debug('Authentication Failure %o', e);
      this.emit('AuthenticationFailure');
      throw e;
    }

    debug('Authentication Success');
    this.emit('AuthenticationSuccess');
  }

  /**
   * Close and disconnect the WebSocket connection.
   * FIXME: this should support a callback and return a Promise to match the connect method.
   *
   * @function
   * @category request
   */
  disconnect() {
    debug('Disconnect requested.');
    if (this._socket) {
      this._socket.close();
    }
  }
}

module.exports = Socket;


/***/ }),

/***/ "./node_modules/obs-websocket-js/lib/Status.js":
/*!*****************************************************!*\
  !*** ./node_modules/obs-websocket-js/lib/Status.js ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = {
  NOT_CONNECTED: {
    status: 'error',
    description: 'There is no Socket connection available.'
  },
  CONNECTION_ERROR: {
    status: 'error',
    description: 'Connection error.'
  },
  SOCKET_EXCEPTION: {
    status: 'error',
    description: 'An exception occurred from the underlying WebSocket.'
  },
  AUTH_NOT_REQUIRED: {
    status: 'ok',
    description: 'Authentication is not required.'
  },
  REQUEST_TYPE_NOT_SPECIFIED: {
    status: 'error',
    description: 'A Request Type was not specified.'
  },
  ARGS_NOT_OBJECT: {
    status: 'error',
    description: 'The supplied argments parameter is not an object.'
  },

  init() {
    for (const key in this) {
      if ({}.hasOwnProperty.call(this, key)) {
        // Assign a value to 'code' identified by the status' key.
        this[key].code = key;

        // Assign a value to 'error' if one is not already defined.
        if (this[key].status === 'error' && !this[key].error) {
          this[key].error = this[key].description;
        }
      }
    }

    delete this.init;
    return this;
  }
}.init();


/***/ }),

/***/ "./node_modules/obs-websocket-js/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/obs-websocket-js/lib/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./OBSWebSocket.js */ "./node_modules/obs-websocket-js/lib/OBSWebSocket.js");


/***/ }),

/***/ "./node_modules/obs-websocket-js/lib/util/authenticationHashing.js":
/*!*************************************************************************!*\
  !*** ./node_modules/obs-websocket-js/lib/util/authenticationHashing.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SHA256 = __webpack_require__(/*! sha.js/sha256 */ "./node_modules/sha.js/sha256.js");

/**
 * SHA256 Hashing.
 *
 * @param  {String} [salt=''] salt.
 * @param  {String} [challenge=''] challenge.
 * @param  {String} msg Message to encode.
 * @return {String} sha256 encoded string.
 */
// eslint-disable-next-line default-param-last
module.exports = function (salt = '', challenge = '', msg) {
  const hash = new SHA256()
    .update(msg)
    .update(salt)
    .digest('base64');

  const resp = new SHA256()
    .update(hash)
    .update(challenge)
    .digest('base64');

  return resp;
};


/***/ }),

/***/ "./node_modules/obs-websocket-js/lib/util/camelCaseKeys.js":
/*!*****************************************************************!*\
  !*** ./node_modules/obs-websocket-js/lib/util/camelCaseKeys.js ***!
  \*****************************************************************/
/***/ ((module) => {

/**
 * Converts kebab-case to camelCase.
 * Retains the original kebab-case entries.
 *
 * @param {Object} [obj={}] Keyed object.
 * @return {Object} Keyed object with added camelCased keys.
 */
module.exports = function (obj) {
  obj = obj || {};
  for (const key in obj) {
    if (!{}.hasOwnProperty.call(obj, key)) {
      continue;
    }

    const camelCasedKey = key.replace(/-([a-z])/gi, ($0, $1) => {
      return $1.toUpperCase();
    });
    obj[camelCasedKey] = obj[key];
  }

  return obj;
};


/***/ }),

/***/ "./node_modules/obs-websocket-js/lib/util/logAmbiguousError.js":
/*!*********************************************************************!*\
  !*** ./node_modules/obs-websocket-js/lib/util/logAmbiguousError.js ***!
  \*********************************************************************/
/***/ ((module) => {

/**
 * Disambiguates an "error" and formats it nicely for `debug` output.
 * Particularly useful when dealing with error response objects from obs-websocket,
 * which are not actual Error-type errors, but simply Objects.
 *
 * @param {Object} debug A `debug` instance.
 * @param {String} prefix A string to print in front of the formatted error.
 * @param {Object|Error} error An error of ambiguous type that you wish to log to `debug`. Can be an Error, Object, or String.
 */
module.exports = function (debug, prefix, error) {
  if (error && error.stack) {
    debug(`${prefix}\n %O`, error.stack);
  } else if (typeof error === 'object') {
    debug(`${prefix} %o`, error);
  } else {
    debug(`${prefix} %s`, error);
  }
};


/***/ }),

/***/ "./node_modules/safe-buffer/index.js":
/*!*******************************************!*\
  !*** ./node_modules/safe-buffer/index.js ***!
  \*******************************************/
/***/ ((module, exports, __webpack_require__) => {

/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
/* eslint-disable node/no-deprecated-api */
var buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js")
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.prototype = Object.create(Buffer.prototype)

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}


/***/ }),

/***/ "./node_modules/sha.js/hash.js":
/*!*************************************!*\
  !*** ./node_modules/sha.js/hash.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Buffer = (__webpack_require__(/*! safe-buffer */ "./node_modules/safe-buffer/index.js").Buffer)

// prototype class for hash functions
function Hash (blockSize, finalSize) {
  this._block = Buffer.alloc(blockSize)
  this._finalSize = finalSize
  this._blockSize = blockSize
  this._len = 0
}

Hash.prototype.update = function (data, enc) {
  if (typeof data === 'string') {
    enc = enc || 'utf8'
    data = Buffer.from(data, enc)
  }

  var block = this._block
  var blockSize = this._blockSize
  var length = data.length
  var accum = this._len

  for (var offset = 0; offset < length;) {
    var assigned = accum % blockSize
    var remainder = Math.min(length - offset, blockSize - assigned)

    for (var i = 0; i < remainder; i++) {
      block[assigned + i] = data[offset + i]
    }

    accum += remainder
    offset += remainder

    if ((accum % blockSize) === 0) {
      this._update(block)
    }
  }

  this._len += length
  return this
}

Hash.prototype.digest = function (enc) {
  var rem = this._len % this._blockSize

  this._block[rem] = 0x80

  // zero (rem + 1) trailing bits, where (rem + 1) is the smallest
  // non-negative solution to the equation (length + 1 + (rem + 1)) === finalSize mod blockSize
  this._block.fill(0, rem + 1)

  if (rem >= this._finalSize) {
    this._update(this._block)
    this._block.fill(0)
  }

  var bits = this._len * 8

  // uint32
  if (bits <= 0xffffffff) {
    this._block.writeUInt32BE(bits, this._blockSize - 4)

  // uint64
  } else {
    var lowBits = (bits & 0xffffffff) >>> 0
    var highBits = (bits - lowBits) / 0x100000000

    this._block.writeUInt32BE(highBits, this._blockSize - 8)
    this._block.writeUInt32BE(lowBits, this._blockSize - 4)
  }

  this._update(this._block)
  var hash = this._hash()

  return enc ? hash.toString(enc) : hash
}

Hash.prototype._update = function () {
  throw new Error('_update must be implemented by subclass')
}

module.exports = Hash


/***/ }),

/***/ "./node_modules/sha.js/sha256.js":
/*!***************************************!*\
  !*** ./node_modules/sha.js/sha256.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
 * in FIPS 180-2
 * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 *
 */

var inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js")
var Hash = __webpack_require__(/*! ./hash */ "./node_modules/sha.js/hash.js")
var Buffer = (__webpack_require__(/*! safe-buffer */ "./node_modules/safe-buffer/index.js").Buffer)

var K = [
  0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5,
  0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5,
  0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3,
  0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174,
  0xE49B69C1, 0xEFBE4786, 0x0FC19DC6, 0x240CA1CC,
  0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA,
  0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7,
  0xC6E00BF3, 0xD5A79147, 0x06CA6351, 0x14292967,
  0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13,
  0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85,
  0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3,
  0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070,
  0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5,
  0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3,
  0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208,
  0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2
]

var W = new Array(64)

function Sha256 () {
  this.init()

  this._w = W // new Array(64)

  Hash.call(this, 64, 56)
}

inherits(Sha256, Hash)

Sha256.prototype.init = function () {
  this._a = 0x6a09e667
  this._b = 0xbb67ae85
  this._c = 0x3c6ef372
  this._d = 0xa54ff53a
  this._e = 0x510e527f
  this._f = 0x9b05688c
  this._g = 0x1f83d9ab
  this._h = 0x5be0cd19

  return this
}

function ch (x, y, z) {
  return z ^ (x & (y ^ z))
}

function maj (x, y, z) {
  return (x & y) | (z & (x | y))
}

function sigma0 (x) {
  return (x >>> 2 | x << 30) ^ (x >>> 13 | x << 19) ^ (x >>> 22 | x << 10)
}

function sigma1 (x) {
  return (x >>> 6 | x << 26) ^ (x >>> 11 | x << 21) ^ (x >>> 25 | x << 7)
}

function gamma0 (x) {
  return (x >>> 7 | x << 25) ^ (x >>> 18 | x << 14) ^ (x >>> 3)
}

function gamma1 (x) {
  return (x >>> 17 | x << 15) ^ (x >>> 19 | x << 13) ^ (x >>> 10)
}

Sha256.prototype._update = function (M) {
  var W = this._w

  var a = this._a | 0
  var b = this._b | 0
  var c = this._c | 0
  var d = this._d | 0
  var e = this._e | 0
  var f = this._f | 0
  var g = this._g | 0
  var h = this._h | 0

  for (var i = 0; i < 16; ++i) W[i] = M.readInt32BE(i * 4)
  for (; i < 64; ++i) W[i] = (gamma1(W[i - 2]) + W[i - 7] + gamma0(W[i - 15]) + W[i - 16]) | 0

  for (var j = 0; j < 64; ++j) {
    var T1 = (h + sigma1(e) + ch(e, f, g) + K[j] + W[j]) | 0
    var T2 = (sigma0(a) + maj(a, b, c)) | 0

    h = g
    g = f
    f = e
    e = (d + T1) | 0
    d = c
    c = b
    b = a
    a = (T1 + T2) | 0
  }

  this._a = (a + this._a) | 0
  this._b = (b + this._b) | 0
  this._c = (c + this._c) | 0
  this._d = (d + this._d) | 0
  this._e = (e + this._e) | 0
  this._f = (f + this._f) | 0
  this._g = (g + this._g) | 0
  this._h = (h + this._h) | 0
}

Sha256.prototype._hash = function () {
  var H = Buffer.allocUnsafe(32)

  H.writeInt32BE(this._a, 0)
  H.writeInt32BE(this._b, 4)
  H.writeInt32BE(this._c, 8)
  H.writeInt32BE(this._d, 12)
  H.writeInt32BE(this._e, 16)
  H.writeInt32BE(this._f, 20)
  H.writeInt32BE(this._g, 24)
  H.writeInt32BE(this._h, 28)

  return H
}

module.exports = Sha256


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/lib/menu.js":
/*!*************************!*\
  !*** ./src/lib/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");
/* harmony import */ var css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css/style.css */ "./src/css/style.css");



let observer = new MutationObserver( (evt) => {
    console.log(evt);
})

let carousel = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__["default"]('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 5,
    focusAt: 2,
    gap: 50,
});

carousel.on(['mount.after', 'run.after'], () => {
    buttonInactive();
    buttonActive(carousel.index);
    // resizeInactive();
});

carousel.mount();



function buttonActive(i) {
    let active = document.querySelector('.glide__slide--active');
    active.addEventListener('click', handleClick);
};

function buttonInactive() {
    let inactive = document.getElementsByClassName('glide__slide');
    for (let el of inactive) {
        el.removeEventListener('click', handleClick);
    }
}

function handleClick(evt) {
    console.log(evt)
}


/***/ }),

/***/ "./src/lib/obs-websocket.js":
/*!**********************************!*\
  !*** ./src/lib/obs-websocket.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var obs_websocket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! obs-websocket-js */ "./node_modules/obs-websocket-js/lib/index.js");
/* harmony import */ var obs_websocket_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(obs_websocket_js__WEBPACK_IMPORTED_MODULE_0__);


const obs = new (obs_websocket_js__WEBPACK_IMPORTED_MODULE_0___default())();
 
    //    document.getElementById('address_button').addEventListener('click', e => {
    //      const address = document.getElementById('address').value;
    //     console.log("connect button");
    // });
    
        obs.connect({
        address: 'localhost:4444/'
        });


       obs.on('ConnectionOpened', () => {

        obs.send('GetSceneList').then(data => {
           const sceneListDiv = document.getElementById('scene_list');
 
           data.scenes.forEach(scene => {
             const sceneElement = document.createElement('button');
             sceneElement.textContent = scene.name;
             sceneElement.onclick = function() {
               obs.send('SetCurrentScene', {
                 'scene-name': scene.name
               });
             };
 
             sceneListDiv.appendChild(sceneElement);
           });
         })
       });

/***/ }),

/***/ "./src/lib/screen-capture.js":
/*!***********************************!*\
  !*** ./src/lib/screen-capture.js ***!
  \***********************************/
/***/ (() => {

let snapButton = document.querySelector('#snap-button');
let clearButton = document.querySelector('#clear-button');
let captureStream = document.querySelector('#capture-stream');
let captureCanvas = document.querySelector('#capture-canvas')
let capturePhoto = document.querySelector('#capture-photo');
let cameraMenu = document.querySelector('.active-menu');
let snapMenu = document.querySelector('.inactive-menu');
let cameraTimer = document.querySelector('#camera-timer');
let width = 0;
let height = 0;

const displayMediaOptions = { video: true, audio: false };

async function getStream() {
    try {
        stream = await navigator.mediaDevices.getDisplayMedia();
    } catch (err) {
        console.error(err);
    }

    captureStream.srcObject = stream;
    captureStream.onloadedmetadata = (evt) => { 
        captureStream.play();
        width = captureStream.videoWidth;
        height = captureStream.videoHeight;
    };

    captureCanvas.hidden = true;
    snapMenu.hidden = true;
    cameraTimer.hidden = true;
};

function takeSnap() {
    let context = captureCanvas.getContext('2d');
    captureCanvas.width = width;
    captureCanvas.height = height;

    context.drawImage(captureStream, 0, 0);

    let data = captureCanvas.toDataURL('capture/jpg');
    capturePhoto.src = data;

    captureCanvas.hidden = false;
    snapMenu.hidden = false;
    
    console.log('snapped')
};

function clearSnap() {
    cameraMenu.hidden = false;
    snapButton.hidden = false;
    captureCanvas.hidden = true;
    snapMenu.hidden = true;
}

function countdown() {
    let timer = 3;
    cameraTimer.innerHTML = timer;
    cameraMenu.hidden = true;
    cameraTimer.hidden = false;

    let countdown = setInterval(() => {
        if (timer <= 0) {
            clearInterval(countdown);
            takeSnap();
        } else if (timer <= 0.5) {
            cameraTimer.hidden = true;
            snapButton.hidden = true;
            cameraTimer.hidden = true;
        } else {
            cameraTimer.innerHTML = timer;
        }

        timer -= 0.5;
    }, 500);
}

snapButton.addEventListener('click', countdown);

clearButton.addEventListener('click', clearSnap);

getStream();



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_obs_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/obs-websocket */ "./src/lib/obs-websocket.js");
/* harmony import */ var _lib_screen_capture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/screen-capture */ "./src/lib/screen-capture.js");
/* harmony import */ var _lib_screen_capture__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_screen_capture__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/menu.js */ "./src/lib/menu.js");
// function importAll(r) {
//     r.keys().forEach(r);
//   }

// importAll(require.context('./components', false, /\.js$/));




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0ZBQWdGO0FBQ2hGO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHdCQUF3QjtBQUMvQjtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsaUJB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O0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hC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RUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxpQkFBaUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsU0FBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsU0FBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsRUFBRTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixlQUFlO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLHlCQUF5QixRQUFRO0FBQ2pDO0FBQ0Esc0JBQXNCLGVBQWU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsWUFBWTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLFNBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHNCQUFzQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUEsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDRDQUE0Qzs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElB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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQSxrQ0FBa0MsUUFBUTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLHVDQUF1QyxRQUFRO0FBQy9DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLHlCQUF5QjtBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixnQkFBZ0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4REFBOEQsWUFBWTtBQUMxRTtBQUNBLDhEQUE4RCxZQUFZO0FBQzFFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsWUFBWTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDaGZBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUyxXQUFXOztBQUVwQjtBQUNBO0FBQ0E7QUFDQSxTQUFTLFdBQVc7O0FBRXBCO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVMsV0FBVzs7QUFFcEI7QUFDQTtBQUNBLFNBQVMsVUFBVTs7QUFFbkI7QUFDQTs7Ozs7Ozs7Ozs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMxQkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUUsZ0JBQWdCLHFCQUFNO0FBQ3hCLE9BQU8scUJBQU0sY0FBYyxxQkFBTTtBQUNqQyxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQixXQUFXLFFBQVE7QUFDbkIsWUFBWSxPQUFPO0FBQ25CLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDaktBLGVBQWUsbUJBQU8sQ0FBQywrREFBVTtBQUNqQyxlQUFlLG1CQUFPLENBQUMsK0RBQVU7QUFDakMsY0FBYyxtQkFBTyxDQUFDLGtEQUFPOztBQUU3Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxVQUFVO0FBQ3hCLGNBQWMsVUFBVSxRQUFRO0FBQ2hDLGNBQWMsc0JBQXNCO0FBQ3BDO0FBQ0EsNkJBQTZCO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJDQUEyQyxVQUFVO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkMsVUFBVTtBQUN2RDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsVUFBVTtBQUN4QixjQUFjLFVBQVUsUUFBUTtBQUNoQyxjQUFjLFVBQVU7QUFDeEI7QUFDQSxxQ0FBcUMsY0FBYztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ2hHQSxrQkFBa0IsbUJBQU8sQ0FBQyw4REFBZTtBQUN6QyxxQkFBcUIsbUJBQU8sQ0FBQywrQ0FBUTtBQUNyQyxhQUFhLG1CQUFPLENBQUMsdUdBQThCO0FBQ25ELGVBQWUsbUJBQU8sQ0FBQywrREFBVTtBQUNqQyxjQUFjLG1CQUFPLENBQUMsa0RBQU87QUFDN0IsMEJBQTBCLG1CQUFPLENBQUMsK0ZBQTBCO0FBQzVELHNCQUFzQixtQkFBTyxDQUFDLHVGQUFzQjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFNBQVM7QUFDdEIsZUFBZTtBQUNmO0FBQ0EsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtDQUErQyxrQkFBa0I7QUFDakUsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBLGNBQWMsU0FBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNsTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQzFDRCxvSEFBNkM7Ozs7Ozs7Ozs7O0FDQTdDLGVBQWUsbUJBQU8sQ0FBQyxzREFBZTs7QUFFdEM7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCLFlBQVksUUFBUTtBQUNwQixZQUFZLFFBQVE7QUFDcEIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRLE9BQU87QUFDMUIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsY0FBYztBQUN6QjtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsSUFBSTtBQUNKLGFBQWEsUUFBUTtBQUNyQixJQUFJO0FBQ0osYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQSxhQUFhLG1CQUFPLENBQUMsOENBQVE7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRSxjQUFjO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNoRUEsYUFBYSxzRkFBNkI7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLGdCQUFnQjtBQUN2QztBQUNBOztBQUVBLG9CQUFvQixlQUFlO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsbUJBQU8sQ0FBQyw2REFBVTtBQUNqQyxXQUFXLG1CQUFPLENBQUMsNkNBQVE7QUFDM0IsYUFBYSxzRkFBNkI7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixRQUFRO0FBQzFCLFNBQVMsUUFBUTs7QUFFakIsa0JBQWtCLFFBQVE7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySUEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0c7QUFDdEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDZm1DO0FBQ1o7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsbUJBQW1CLHNEQUFLO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN2QzRDO0FBQzVDO0FBQ0EsZ0JBQWdCLHlEQUFZO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osVUFBVTtBQUNWLFFBQVE7Ozs7Ozs7Ozs7QUMvQlI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNsRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNkI7QUFDQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FmcmFtZS13ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL0BnbGlkZWpzL2dsaWRlL2Rpc3QvZ2xpZGUuZXNtLmpzIiwid2VicGFjazovL2FmcmFtZS13ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hZnJhbWUtd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYWZyYW1lLXdlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvY3NzL2dsaWRlLmNvcmUuY3NzIiwid2VicGFjazovL2FmcmFtZS13ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2Nzcy9nbGlkZS50aGVtZS5jc3MiLCJ3ZWJwYWNrOi8vYWZyYW1lLXdlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9hZnJhbWUtd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYWZyYW1lLXdlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9hZnJhbWUtd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9hZnJhbWUtd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvY29tbW9uLmpzIiwid2VicGFjazovL2FmcmFtZS13ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vYWZyYW1lLXdlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hZnJhbWUtd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIiwid2VicGFjazovL2FmcmFtZS13ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtd3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9hZnJhbWUtd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9tcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hZnJhbWUtd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9vYnMtd2Vic29ja2V0LWpzL2xpYi9PQlNXZWJTb2NrZXQuanMiLCJ3ZWJwYWNrOi8vYWZyYW1lLXdlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvb2JzLXdlYnNvY2tldC1qcy9saWIvU29ja2V0LmpzIiwid2VicGFjazovL2FmcmFtZS13ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL29icy13ZWJzb2NrZXQtanMvbGliL1N0YXR1cy5qcyIsIndlYnBhY2s6Ly9hZnJhbWUtd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9vYnMtd2Vic29ja2V0LWpzL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9hZnJhbWUtd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9vYnMtd2Vic29ja2V0LWpzL2xpYi91dGlsL2F1dGhlbnRpY2F0aW9uSGFzaGluZy5qcyIsIndlYnBhY2s6Ly9hZnJhbWUtd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9vYnMtd2Vic29ja2V0LWpzL2xpYi91dGlsL2NhbWVsQ2FzZUtleXMuanMiLCJ3ZWJwYWNrOi8vYWZyYW1lLXdlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvb2JzLXdlYnNvY2tldC1qcy9saWIvdXRpbC9sb2dBbWJpZ3VvdXNFcnJvci5qcyIsIndlYnBhY2s6Ly9hZnJhbWUtd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zYWZlLWJ1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9hZnJhbWUtd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zaGEuanMvaGFzaC5qcyIsIndlYnBhY2s6Ly9hZnJhbWUtd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zaGEuanMvc2hhMjU2LmpzIiwid2VicGFjazovL2FmcmFtZS13ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly9hZnJhbWUtd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9hZnJhbWUtd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYWZyYW1lLXdlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYWZyYW1lLXdlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYWZyYW1lLXdlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9hZnJhbWUtd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2FmcmFtZS13ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2xpYi9tZW51LmpzIiwid2VicGFjazovL2FmcmFtZS13ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2xpYi9vYnMtd2Vic29ja2V0LmpzIiwid2VicGFjazovL2FmcmFtZS13ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2xpYi9zY3JlZW4tY2FwdHVyZS5qcyIsIndlYnBhY2s6Ly9hZnJhbWUtd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hZnJhbWUtd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9hZnJhbWUtd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYWZyYW1lLXdlYnBhY2stYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9hZnJhbWUtd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FmcmFtZS13ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYWZyYW1lLXdlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEdsaWRlLmpzIHYzLjUuMlxuICogKGMpIDIwMTMtMjAyMSBKxJlkcnplaiBDaGHFgnViZWsgKGh0dHBzOi8vZ2l0aHViLmNvbS9qZWRyemVqY2hhbHViZWsvKVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlO1xuICBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlO1xuXG4gIHRyeSB7XG4gICAgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7XG4gIHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpO1xuXG4gIHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHtcbiAgICB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksXG4gICAgICAgIHJlc3VsdDtcblxuICAgIGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7XG4gICAgICB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yO1xuXG4gICAgICByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gX2dldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5mdW5jdGlvbiBfZ2V0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBfZ2V0ID0gUmVmbGVjdC5nZXQ7XG4gIH0gZWxzZSB7XG4gICAgX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gX3N1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmICghYmFzZSkgcmV0dXJuO1xuICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcblxuICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdGFyZ2V0IDogcmVjZWl2ZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICAvKipcbiAgICogVHlwZSBvZiB0aGUgbW92ZW1lbnQuXG4gICAqXG4gICAqIEF2YWlsYWJsZSB0eXBlczpcbiAgICogYHNsaWRlcmAgLSBSZXdpbmRzIHNsaWRlciB0byB0aGUgc3RhcnQvZW5kIHdoZW4gaXQgcmVhY2hlcyB0aGUgZmlyc3Qgb3IgbGFzdCBzbGlkZS5cbiAgICogYGNhcm91c2VsYCAtIENoYW5nZXMgc2xpZGVzIHdpdGhvdXQgc3RhcnRpbmcgb3ZlciB3aGVuIGl0IHJlYWNoZXMgdGhlIGZpcnN0IG9yIGxhc3Qgc2xpZGUuXG4gICAqXG4gICAqIEB0eXBlIHtTdHJpbmd9XG4gICAqL1xuICB0eXBlOiAnc2xpZGVyJyxcblxuICAvKipcbiAgICogU3RhcnQgYXQgc3BlY2lmaWMgc2xpZGUgbnVtYmVyIGRlZmluZWQgd2l0aCB6ZXJvLWJhc2VkIGluZGV4LlxuICAgKlxuICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgKi9cbiAgc3RhcnRBdDogMCxcblxuICAvKipcbiAgICogQSBudW1iZXIgb2Ygc2xpZGVzIHZpc2libGUgb24gdGhlIHNpbmdsZSB2aWV3cG9ydC5cbiAgICpcbiAgICogQHR5cGUge051bWJlcn1cbiAgICovXG4gIHBlclZpZXc6IDEsXG5cbiAgLyoqXG4gICAqIEZvY3VzIGN1cnJlbnRseSBhY3RpdmUgc2xpZGUgYXQgYSBzcGVjaWZpZWQgcG9zaXRpb24gaW4gdGhlIHRyYWNrLlxuICAgKlxuICAgKiBBdmFpbGFibGUgaW5wdXRzOlxuICAgKiBgY2VudGVyYCAtIEN1cnJlbnQgc2xpZGUgd2lsbCBiZSBhbHdheXMgZm9jdXNlZCBhdCB0aGUgY2VudGVyIG9mIGEgdHJhY2suXG4gICAqIGAwLDEsMiwzLi4uYCAtIEN1cnJlbnQgc2xpZGUgd2lsbCBiZSBmb2N1c2VkIG9uIHRoZSBzcGVjaWZpZWQgemVyby1iYXNlZCBpbmRleC5cbiAgICpcbiAgICogQHR5cGUge1N0cmluZ3xOdW1iZXJ9XG4gICAqL1xuICBmb2N1c0F0OiAwLFxuXG4gIC8qKlxuICAgKiBBIHNpemUgb2YgdGhlIGdhcCBhZGRlZCBiZXR3ZWVuIHNsaWRlcy5cbiAgICpcbiAgICogQHR5cGUge051bWJlcn1cbiAgICovXG4gIGdhcDogMTAsXG5cbiAgLyoqXG4gICAqIENoYW5nZSBzbGlkZXMgYWZ0ZXIgYSBzcGVjaWZpZWQgaW50ZXJ2YWwuIFVzZSBgZmFsc2VgIGZvciB0dXJuaW5nIG9mZiBhdXRvcGxheS5cbiAgICpcbiAgICogQHR5cGUge051bWJlcnxCb29sZWFufVxuICAgKi9cbiAgYXV0b3BsYXk6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBTdG9wIGF1dG9wbGF5IG9uIG1vdXNlb3ZlciBldmVudC5cbiAgICpcbiAgICogQHR5cGUge0Jvb2xlYW59XG4gICAqL1xuICBob3ZlcnBhdXNlOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBBbGxvdyBmb3IgY2hhbmdpbmcgc2xpZGVzIHdpdGggbGVmdCBhbmQgcmlnaHQga2V5Ym9hcmQgYXJyb3dzLlxuICAgKlxuICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICovXG4gIGtleWJvYXJkOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBTdG9wIHJ1bm5pbmcgYHBlclZpZXdgIG51bWJlciBvZiBzbGlkZXMgZnJvbSB0aGUgZW5kLiBVc2UgdGhpc1xuICAgKiBvcHRpb24gaWYgeW91IGRvbid0IHdhbnQgdG8gaGF2ZSBhbiBlbXB0eSBzcGFjZSBhZnRlclxuICAgKiBhIHNsaWRlci4gV29ya3Mgb25seSB3aXRoIGBzbGlkZXJgIHR5cGUgYW5kIGFcbiAgICogbm9uLWNlbnRlcmVkIGBmb2N1c0F0YCBzZXR0aW5nLlxuICAgKlxuICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICovXG4gIGJvdW5kOiBmYWxzZSxcblxuICAvKipcbiAgICogTWluaW1hbCBzd2lwZSBkaXN0YW5jZSBuZWVkZWQgdG8gY2hhbmdlIHRoZSBzbGlkZS4gVXNlIGBmYWxzZWAgZm9yIHR1cm5pbmcgb2ZmIGEgc3dpcGluZy5cbiAgICpcbiAgICogQHR5cGUge051bWJlcnxCb29sZWFufVxuICAgKi9cbiAgc3dpcGVUaHJlc2hvbGQ6IDgwLFxuXG4gIC8qKlxuICAgKiBNaW5pbWFsIG1vdXNlIGRyYWcgZGlzdGFuY2UgbmVlZGVkIHRvIGNoYW5nZSB0aGUgc2xpZGUuIFVzZSBgZmFsc2VgIGZvciB0dXJuaW5nIG9mZiBhIGRyYWdnaW5nLlxuICAgKlxuICAgKiBAdHlwZSB7TnVtYmVyfEJvb2xlYW59XG4gICAqL1xuICBkcmFnVGhyZXNob2xkOiAxMjAsXG5cbiAgLyoqXG4gICAqIEEgbnVtYmVyIG9mIHNsaWRlcyBtb3ZlZCBvbiBzaW5nbGUgc3dpcGUuXG4gICAqXG4gICAqIEF2YWlsYWJsZSB0eXBlczpcbiAgICogYGAgLSBNb3ZlcyBzbGlkZXIgYnkgb25lIHNsaWRlIHBlciBzd2lwZVxuICAgKiBgfGAgLSBNb3ZlcyBzbGlkZXIgYmV0d2VlbiB2aWV3cyBwZXIgc3dpcGUgKG51bWJlciBvZiBzbGlkZXMgZGVmaW5lZCBpbiBgcGVyVmlld2Agb3B0aW9ucylcbiAgICpcbiAgICogQHR5cGUge1N0cmluZ31cbiAgICovXG4gIHBlclN3aXBlOiAnJyxcblxuICAvKipcbiAgICogTW92aW5nIGRpc3RhbmNlIHJhdGlvIG9mIHRoZSBzbGlkZXMgb24gYSBzd2lwaW5nIGFuZCBkcmFnZ2luZy5cbiAgICpcbiAgICogQHR5cGUge051bWJlcn1cbiAgICovXG4gIHRvdWNoUmF0aW86IDAuNSxcblxuICAvKipcbiAgICogQW5nbGUgcmVxdWlyZWQgdG8gYWN0aXZhdGUgc2xpZGVzIG1vdmluZyBvbiBzd2lwaW5nIG9yIGRyYWdnaW5nLlxuICAgKlxuICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgKi9cbiAgdG91Y2hBbmdsZTogNDUsXG5cbiAgLyoqXG4gICAqIER1cmF0aW9uIG9mIHRoZSBhbmltYXRpb24gaW4gbWlsbGlzZWNvbmRzLlxuICAgKlxuICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgKi9cbiAgYW5pbWF0aW9uRHVyYXRpb246IDQwMCxcblxuICAvKipcbiAgICogQWxsb3dzIGxvb3BpbmcgdGhlIGBzbGlkZXJgIHR5cGUuIFNsaWRlciB3aWxsIHJld2luZCB0byB0aGUgZmlyc3QvbGFzdCBzbGlkZSB3aGVuIGl0J3MgYXQgdGhlIHN0YXJ0L2VuZC5cbiAgICpcbiAgICogQHR5cGUge0Jvb2xlYW59XG4gICAqL1xuICByZXdpbmQ6IHRydWUsXG5cbiAgLyoqXG4gICAqIER1cmF0aW9uIG9mIHRoZSByZXdpbmRpbmcgYW5pbWF0aW9uIG9mIHRoZSBgc2xpZGVyYCB0eXBlIGluIG1pbGxpc2Vjb25kcy5cbiAgICpcbiAgICogQHR5cGUge051bWJlcn1cbiAgICovXG4gIHJld2luZER1cmF0aW9uOiA4MDAsXG5cbiAgLyoqXG4gICAqIEVhc2luZyBmdW5jdGlvbiBmb3IgdGhlIGFuaW1hdGlvbi5cbiAgICpcbiAgICogQHR5cGUge1N0cmluZ31cbiAgICovXG4gIGFuaW1hdGlvblRpbWluZ0Z1bmM6ICdjdWJpYy1iZXppZXIoLjE2NSwgLjg0MCwgLjQ0MCwgMSknLFxuXG4gIC8qKlxuICAgKiBXYWl0IGZvciB0aGUgYW5pbWF0aW9uIHRvIGZpbmlzaCB1bnRpbCB0aGUgbmV4dCB1c2VyIGlucHV0IGNhbiBiZSBwcm9jZXNzZWRcbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICB3YWl0Rm9yVHJhbnNpdGlvbjogdHJ1ZSxcblxuICAvKipcbiAgICogVGhyb3R0bGUgY29zdGx5IGV2ZW50cyBhdCBtb3N0IG9uY2UgcGVyIGV2ZXJ5IHdhaXQgbWlsbGlzZWNvbmRzLlxuICAgKlxuICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgKi9cbiAgdGhyb3R0bGU6IDEwLFxuXG4gIC8qKlxuICAgKiBNb3ZpbmcgZGlyZWN0aW9uIG1vZGUuXG4gICAqXG4gICAqIEF2YWlsYWJsZSBpbnB1dHM6XG4gICAqIC0gJ2x0cicgLSBsZWZ0IHRvIHJpZ2h0IG1vdmVtZW50LFxuICAgKiAtICdydGwnIC0gcmlnaHQgdG8gbGVmdCBtb3ZlbWVudC5cbiAgICpcbiAgICogQHR5cGUge1N0cmluZ31cbiAgICovXG4gIGRpcmVjdGlvbjogJ2x0cicsXG5cbiAgLyoqXG4gICAqIFRoZSBkaXN0YW5jZSB2YWx1ZSBvZiB0aGUgbmV4dCBhbmQgcHJldmlvdXMgdmlld3BvcnRzIHdoaWNoXG4gICAqIGhhdmUgdG8gcGVlayBpbiB0aGUgY3VycmVudCB2aWV3LiBBY2NlcHRzIG51bWJlciBhbmRcbiAgICogcGl4ZWxzIGFzIGEgc3RyaW5nLiBMZWZ0IGFuZCByaWdodCBwZWVraW5nIGNhbiBiZVxuICAgKiBzZXQgdXAgc2VwYXJhdGVseSB3aXRoIGEgZGlyZWN0aW9ucyBvYmplY3QuXG4gICAqXG4gICAqIEZvciBleGFtcGxlOlxuICAgKiBgMTAwYCAtIFBlZWsgMTAwcHggb24gdGhlIGJvdGggc2lkZXMuXG4gICAqIHsgYmVmb3JlOiAxMDAsIGFmdGVyOiA1MCB9YCAtIFBlZWsgMTAwcHggb24gdGhlIGxlZnQgc2lkZSBhbmQgNTBweCBvbiB0aGUgcmlnaHQgc2lkZS5cbiAgICpcbiAgICogQHR5cGUge051bWJlcnxTdHJpbmd8T2JqZWN0fVxuICAgKi9cbiAgcGVlazogMCxcblxuICAvKipcbiAgICogRGVmaW5lcyBob3cgbWFueSBjbG9uZXMgb2YgY3VycmVudCB2aWV3cG9ydCB3aWxsIGJlIGdlbmVyYXRlZC5cbiAgICpcbiAgICogQHR5cGUge051bWJlcn1cbiAgICovXG4gIGNsb25pbmdSYXRpbzogMSxcblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBvcHRpb25zIGFwcGxpZWQgYXQgc3BlY2lmaWVkIG1lZGlhIGJyZWFrcG9pbnRzLlxuICAgKiBGb3IgZXhhbXBsZTogZGlzcGxheSB0d28gc2xpZGVzIHBlciB2aWV3IHVuZGVyIDgwMHB4LlxuICAgKiBge1xuICAgKiAgICc4MDBweCc6IHtcbiAgICogICAgIHBlclZpZXc6IDJcbiAgICogICB9XG4gICAqIH1gXG4gICAqL1xuICBicmVha3BvaW50czoge30sXG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgaW50ZXJuYWxseSB1c2VkIEhUTUwgY2xhc3Nlcy5cbiAgICpcbiAgICogQHRvZG8gUmVmYWN0b3IgYHNsaWRlcmAgYW5kIGBjYXJvdXNlbGAgcHJvcGVydGllcyB0byBzaW5nbGUgYHR5cGU6IHsgc2xpZGVyOiAnJywgY2Fyb3VzZWw6ICcnIH1gIG9iamVjdFxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgY2xhc3Nlczoge1xuICAgIHN3aXBlYWJsZTogJ2dsaWRlLS1zd2lwZWFibGUnLFxuICAgIGRyYWdnaW5nOiAnZ2xpZGUtLWRyYWdnaW5nJyxcbiAgICBkaXJlY3Rpb246IHtcbiAgICAgIGx0cjogJ2dsaWRlLS1sdHInLFxuICAgICAgcnRsOiAnZ2xpZGUtLXJ0bCdcbiAgICB9LFxuICAgIHR5cGU6IHtcbiAgICAgIHNsaWRlcjogJ2dsaWRlLS1zbGlkZXInLFxuICAgICAgY2Fyb3VzZWw6ICdnbGlkZS0tY2Fyb3VzZWwnXG4gICAgfSxcbiAgICBzbGlkZToge1xuICAgICAgY2xvbmU6ICdnbGlkZV9fc2xpZGUtLWNsb25lJyxcbiAgICAgIGFjdGl2ZTogJ2dsaWRlX19zbGlkZS0tYWN0aXZlJ1xuICAgIH0sXG4gICAgYXJyb3c6IHtcbiAgICAgIGRpc2FibGVkOiAnZ2xpZGVfX2Fycm93LS1kaXNhYmxlZCdcbiAgICB9LFxuICAgIG5hdjoge1xuICAgICAgYWN0aXZlOiAnZ2xpZGVfX2J1bGxldC0tYWN0aXZlJ1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBPdXRwdXRzIHdhcm5pbmcgbWVzc2FnZSB0byB0aGUgYm93c2VyIGNvbnNvbGUuXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBtc2dcbiAqIEByZXR1cm4ge1ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHdhcm4obXNnKSB7XG4gIGNvbnNvbGUuZXJyb3IoXCJbR2xpZGUgd2Fybl06IFwiLmNvbmNhdChtc2cpKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyB2YWx1ZSBlbnRlcmVkIGFzIG51bWJlclxuICogb3Igc3RyaW5nIHRvIGludGVnZXIgdmFsdWUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5mdW5jdGlvbiB0b0ludCh2YWx1ZSkge1xuICByZXR1cm4gcGFyc2VJbnQodmFsdWUpO1xufVxuLyoqXG4gKiBDb252ZXJ0cyB2YWx1ZSBlbnRlcmVkIGFzIG51bWJlclxuICogb3Igc3RyaW5nIHRvIGZsYXQgdmFsdWUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5cbmZ1bmN0aW9uIHRvRmxvYXQodmFsdWUpIHtcbiAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpO1xufVxuLyoqXG4gKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIHZhbHVlIGlzIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSAgeyp9ICAgdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG59XG4vKipcbiAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgdmFsdWUgaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSAgeyp9IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2phc2hrZW5hcy91bmRlcnNjb3JlXG4gKi9cblxuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSBfdHlwZW9mKHZhbHVlKTtcblxuICByZXR1cm4gdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlID09PSAnb2JqZWN0JyAmJiAhIXZhbHVlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW1peGVkLW9wZXJhdG9yc1xufVxuLyoqXG4gKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIHZhbHVlIGlzIGEgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtICB7Kn0gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufVxuLyoqXG4gKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIHZhbHVlIGlzIHVuZGVmaW5lZC5cbiAqXG4gKiBAcGFyYW0gIHsqfSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJztcbn1cbi8qKlxuICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyBhbiBhcnJheS5cbiAqXG4gKiBAcGFyYW0gIHsqfSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5mdW5jdGlvbiBpc0FycmF5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gQXJyYXk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbmQgaW5pdGlhbGl6ZXMgc3BlY2lmaWVkIGNvbGxlY3Rpb24gb2YgZXh0ZW5zaW9ucy5cbiAqIEVhY2ggZXh0ZW5zaW9uIHJlY2VpdmVzIGFjY2VzcyB0byBpbnN0YW5jZSBvZiBnbGlkZSBhbmQgcmVzdCBvZiBjb21wb25lbnRzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBnbGlkZVxuICogQHBhcmFtIHtPYmplY3R9IGV4dGVuc2lvbnNcbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5cbmZ1bmN0aW9uIG1vdW50KGdsaWRlLCBleHRlbnNpb25zLCBldmVudHMpIHtcbiAgdmFyIGNvbXBvbmVudHMgPSB7fTtcblxuICBmb3IgKHZhciBuYW1lIGluIGV4dGVuc2lvbnMpIHtcbiAgICBpZiAoaXNGdW5jdGlvbihleHRlbnNpb25zW25hbWVdKSkge1xuICAgICAgY29tcG9uZW50c1tuYW1lXSA9IGV4dGVuc2lvbnNbbmFtZV0oZ2xpZGUsIGNvbXBvbmVudHMsIGV2ZW50cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdhcm4oJ0V4dGVuc2lvbiBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBfbmFtZSBpbiBjb21wb25lbnRzKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24oY29tcG9uZW50c1tfbmFtZV0ubW91bnQpKSB7XG4gICAgICBjb21wb25lbnRzW19uYW1lXS5tb3VudCgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb21wb25lbnRzO1xufVxuXG4vKipcbiAqIERlZmluZXMgZ2V0dGVyIGFuZCBzZXR0ZXIgcHJvcGVydHkgb24gdGhlIHNwZWNpZmllZCBvYmplY3QuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBvYmogICAgICAgICBPYmplY3Qgd2hlcmUgcHJvcGVydHkgaGFzIHRvIGJlIGRlZmluZWQuXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHByb3AgICAgICAgIE5hbWUgb2YgdGhlIGRlZmluZWQgcHJvcGVydHkuXG4gKiBAcGFyYW0gIHtPYmplY3R9IGRlZmluaXRpb24gIEdldCBhbmQgc2V0IGRlZmluaXRpb25zIGZvciB0aGUgcHJvcGVydHkuXG4gKiBAcmV0dXJuIHtWb2lkfVxuICovXG5mdW5jdGlvbiBkZWZpbmUob2JqLCBwcm9wLCBkZWZpbml0aW9uKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIGRlZmluaXRpb24pO1xufVxuLyoqXG4gKiBTb3J0cyBhcGhhYmV0aWNhbGx5IG9iamVjdCBrZXlzLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblxuZnVuY3Rpb24gc29ydEtleXMob2JqKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnNvcnQoKS5yZWR1Y2UoZnVuY3Rpb24gKHIsIGspIHtcbiAgICByW2tdID0gb2JqW2tdO1xuICAgIHJldHVybiByW2tdLCByO1xuICB9LCB7fSk7XG59XG4vKipcbiAqIE1lcmdlcyBwYXNzZWQgc2V0dGluZ3Mgb2JqZWN0IHdpdGggZGVmYXVsdCBvcHRpb25zLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gZGVmYXVsdHNcbiAqIEBwYXJhbSAge09iamVjdH0gc2V0dGluZ3NcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuXG5mdW5jdGlvbiBtZXJnZU9wdGlvbnMoZGVmYXVsdHMsIHNldHRpbmdzKSB7XG4gIHZhciBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdHMsIHNldHRpbmdzKTsgLy8gYE9iamVjdC5hc3NpZ25gIGRvIG5vdCBkZWVwbHkgbWVyZ2Ugb2JqZWN0cywgc28gd2VcbiAgLy8gaGF2ZSB0byBkbyBpdCBtYW51YWxseSBmb3IgZXZlcnkgbmVzdGVkIG9iamVjdFxuICAvLyBpbiBvcHRpb25zLiBBbHRob3VnaCBpdCBkb2VzIG5vdCBsb29rIHNtYXJ0LFxuICAvLyBpdCdzIHNtYWxsZXIgYW5kIGZhc3RlciB0aGFuIHNvbWUgZmFuY3lcbiAgLy8gbWVyZ2luZyBkZWVwLW1lcmdlIGFsZ29yaXRobSBzY3JpcHQuXG5cbiAgaWYgKHNldHRpbmdzLmhhc093blByb3BlcnR5KCdjbGFzc2VzJykpIHtcbiAgICBvcHRpb25zLmNsYXNzZXMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0cy5jbGFzc2VzLCBzZXR0aW5ncy5jbGFzc2VzKTtcblxuICAgIGlmIChzZXR0aW5ncy5jbGFzc2VzLmhhc093blByb3BlcnR5KCdkaXJlY3Rpb24nKSkge1xuICAgICAgb3B0aW9ucy5jbGFzc2VzLmRpcmVjdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRzLmNsYXNzZXMuZGlyZWN0aW9uLCBzZXR0aW5ncy5jbGFzc2VzLmRpcmVjdGlvbik7XG4gICAgfVxuXG4gICAgaWYgKHNldHRpbmdzLmNsYXNzZXMuaGFzT3duUHJvcGVydHkoJ3R5cGUnKSkge1xuICAgICAgb3B0aW9ucy5jbGFzc2VzLnR5cGUgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0cy5jbGFzc2VzLnR5cGUsIHNldHRpbmdzLmNsYXNzZXMudHlwZSk7XG4gICAgfVxuXG4gICAgaWYgKHNldHRpbmdzLmNsYXNzZXMuaGFzT3duUHJvcGVydHkoJ3NsaWRlJykpIHtcbiAgICAgIG9wdGlvbnMuY2xhc3Nlcy5zbGlkZSA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRzLmNsYXNzZXMuc2xpZGUsIHNldHRpbmdzLmNsYXNzZXMuc2xpZGUpO1xuICAgIH1cblxuICAgIGlmIChzZXR0aW5ncy5jbGFzc2VzLmhhc093blByb3BlcnR5KCdhcnJvdycpKSB7XG4gICAgICBvcHRpb25zLmNsYXNzZXMuYXJyb3cgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0cy5jbGFzc2VzLmFycm93LCBzZXR0aW5ncy5jbGFzc2VzLmFycm93KTtcbiAgICB9XG5cbiAgICBpZiAoc2V0dGluZ3MuY2xhc3Nlcy5oYXNPd25Qcm9wZXJ0eSgnbmF2JykpIHtcbiAgICAgIG9wdGlvbnMuY2xhc3Nlcy5uYXYgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0cy5jbGFzc2VzLm5hdiwgc2V0dGluZ3MuY2xhc3Nlcy5uYXYpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eSgnYnJlYWtwb2ludHMnKSkge1xuICAgIG9wdGlvbnMuYnJlYWtwb2ludHMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0cy5icmVha3BvaW50cywgc2V0dGluZ3MuYnJlYWtwb2ludHMpO1xuICB9XG5cbiAgcmV0dXJuIG9wdGlvbnM7XG59XG5cbnZhciBFdmVudHNCdXMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQ29uc3RydWN0IGEgRXZlbnRCdXMgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudHNcbiAgICovXG4gIGZ1bmN0aW9uIEV2ZW50c0J1cygpIHtcbiAgICB2YXIgZXZlbnRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFdmVudHNCdXMpO1xuXG4gICAgdGhpcy5ldmVudHMgPSBldmVudHM7XG4gICAgdGhpcy5ob3AgPSBldmVudHMuaGFzT3duUHJvcGVydHk7XG4gIH1cbiAgLyoqXG4gICAqIEFkZHMgbGlzdGVuZXIgdG8gdGhlIHNwZWNpZmVkIGV2ZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gZXZlbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhFdmVudHNCdXMsIFt7XG4gICAga2V5OiBcIm9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uKGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgICBpZiAoaXNBcnJheShldmVudCkpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMub24oZXZlbnRbaV0sIGhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBDcmVhdGUgdGhlIGV2ZW50J3Mgb2JqZWN0IGlmIG5vdCB5ZXQgY3JlYXRlZFxuXG5cbiAgICAgIGlmICghdGhpcy5ob3AuY2FsbCh0aGlzLmV2ZW50cywgZXZlbnQpKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XSA9IFtdO1xuICAgICAgfSAvLyBBZGQgdGhlIGhhbmRsZXIgdG8gcXVldWVcblxuXG4gICAgICB2YXIgaW5kZXggPSB0aGlzLmV2ZW50c1tldmVudF0ucHVzaChoYW5kbGVyKSAtIDE7IC8vIFByb3ZpZGUgaGFuZGxlIGJhY2sgZm9yIHJlbW92YWwgb2YgZXZlbnRcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuZXZlbnRzW2V2ZW50XVtpbmRleF07XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJ1bnMgcmVnaXN0ZXJlZCBoYW5kbGVycyBmb3Igc3BlY2lmaWVkIGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IGV2ZW50XG4gICAgICogQHBhcmFtIHtPYmplY3Q9fSBjb250ZXh0XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJlbWl0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVtaXQoZXZlbnQsIGNvbnRleHQpIHtcbiAgICAgIGlmIChpc0FycmF5KGV2ZW50KSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5lbWl0KGV2ZW50W2ldLCBjb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gSWYgdGhlIGV2ZW50IGRvZXNuJ3QgZXhpc3QsIG9yIHRoZXJlJ3Mgbm8gaGFuZGxlcnMgaW4gcXVldWUsIGp1c3QgbGVhdmVcblxuXG4gICAgICBpZiAoIXRoaXMuaG9wLmNhbGwodGhpcy5ldmVudHMsIGV2ZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIEN5Y2xlIHRocm91Z2ggZXZlbnRzIHF1ZXVlLCBmaXJlIVxuXG5cbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGl0ZW0oY29udGV4dCB8fCB7fSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRXZlbnRzQnVzO1xufSgpO1xuXG52YXIgR2xpZGUkMSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKlxyXG4gICAqIENvbnN0cnVjdCBnbGlkZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSAge1N0cmluZ30gc2VsZWN0b3JcclxuICAgKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcclxuICAgKi9cbiAgZnVuY3Rpb24gR2xpZGUoc2VsZWN0b3IpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR2xpZGUpO1xuXG4gICAgdGhpcy5fYyA9IHt9O1xuICAgIHRoaXMuX3QgPSBbXTtcbiAgICB0aGlzLl9lID0gbmV3IEV2ZW50c0J1cygpO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLnNlbGVjdG9yID0gc2VsZWN0b3I7XG4gICAgdGhpcy5zZXR0aW5ncyA9IG1lcmdlT3B0aW9ucyhkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgdGhpcy5pbmRleCA9IHRoaXMuc2V0dGluZ3Muc3RhcnRBdDtcbiAgfVxuICAvKipcclxuICAgKiBJbml0aWFsaXplcyBnbGlkZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBleHRlbnNpb25zIENvbGxlY3Rpb24gb2YgZXh0ZW5zaW9ucyB0byBpbml0aWFsaXplLlxyXG4gICAqIEByZXR1cm4ge0dsaWRlfVxyXG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKEdsaWRlLCBbe1xuICAgIGtleTogXCJtb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtb3VudCQxKCkge1xuICAgICAgdmFyIGV4dGVuc2lvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgICB0aGlzLl9lLmVtaXQoJ21vdW50LmJlZm9yZScpO1xuXG4gICAgICBpZiAoaXNPYmplY3QoZXh0ZW5zaW9ucykpIHtcbiAgICAgICAgdGhpcy5fYyA9IG1vdW50KHRoaXMsIGV4dGVuc2lvbnMsIHRoaXMuX2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FybignWW91IG5lZWQgdG8gcHJvdmlkZSBhIG9iamVjdCBvbiBgbW91bnQoKWAnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZS5lbWl0KCdtb3VudC5hZnRlcicpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBDb2xsZWN0cyBhbiBpbnN0YW5jZSBgdHJhbnNsYXRlYCB0cmFuc2Zvcm1lcnMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICB7QXJyYXl9IHRyYW5zZm9ybWVycyBDb2xsZWN0aW9uIG9mIHRyYW5zZm9ybWVycy5cclxuICAgICAqIEByZXR1cm4ge1ZvaWR9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm11dGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtdXRhdGUoKSB7XG4gICAgICB2YXIgdHJhbnNmb3JtZXJzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbXTtcblxuICAgICAgaWYgKGlzQXJyYXkodHJhbnNmb3JtZXJzKSkge1xuICAgICAgICB0aGlzLl90ID0gdHJhbnNmb3JtZXJzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FybignWW91IG5lZWQgdG8gcHJvdmlkZSBhIGFycmF5IG9uIGBtdXRhdGUoKWAnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyBnbGlkZSB3aXRoIHNwZWNpZmllZCBzZXR0aW5ncy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc2V0dGluZ3NcclxuICAgICAqIEByZXR1cm4ge0dsaWRlfVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1cGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgICAgdmFyIHNldHRpbmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAgIHRoaXMuc2V0dGluZ3MgPSBtZXJnZU9wdGlvbnModGhpcy5zZXR0aW5ncywgc2V0dGluZ3MpO1xuXG4gICAgICBpZiAoc2V0dGluZ3MuaGFzT3duUHJvcGVydHkoJ3N0YXJ0QXQnKSkge1xuICAgICAgICB0aGlzLmluZGV4ID0gc2V0dGluZ3Muc3RhcnRBdDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZS5lbWl0KCd1cGRhdGUnKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogQ2hhbmdlIHNsaWRlIHdpdGggc3BlY2lmaWVkIHBhdHRlcm4uIEEgcGF0dGVybiBtdXN0IGJlIGluIHRoZSBzcGVjaWFsIGZvcm1hdDpcclxuICAgICAqIGA+YCAtIE1vdmUgb25lIGZvcndhcmRcclxuICAgICAqIGA8YCAtIE1vdmUgb25lIGJhY2t3YXJkXHJcbiAgICAgKiBgPXtpfWAgLSBHbyB0byB7aX0gemVyby1iYXNlZCBzbGlkZSAoZXEuICc9MScsIHdpbGwgZ28gdG8gc2Vjb25kIHNsaWRlKVxyXG4gICAgICogYD4+YCAtIFJld2luZHMgdG8gZW5kIChsYXN0IHNsaWRlKVxyXG4gICAgICogYDw8YCAtIFJld2luZHMgdG8gc3RhcnQgKGZpcnN0IHNsaWRlKVxyXG4gICAgICogYHw+YCAtIE1vdmUgb25lIHZpZXdwb3J0IGZvcndhcmRcclxuICAgICAqIGB8PGAgLSBNb3ZlIG9uZSB2aWV3cG9ydCBiYWNrd2FyZFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwYXR0ZXJuXHJcbiAgICAgKiBAcmV0dXJuIHtHbGlkZX1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ29cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ28ocGF0dGVybikge1xuICAgICAgdGhpcy5fYy5SdW4ubWFrZShwYXR0ZXJuKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogTW92ZSB0cmFjayBieSBzcGVjaWZpZWQgZGlzdGFuY2UuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRpc3RhbmNlXHJcbiAgICAgKiBAcmV0dXJuIHtHbGlkZX1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtb3ZlKGRpc3RhbmNlKSB7XG4gICAgICB0aGlzLl9jLlRyYW5zaXRpb24uZGlzYWJsZSgpO1xuXG4gICAgICB0aGlzLl9jLk1vdmUubWFrZShkaXN0YW5jZSk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIERlc3Ryb3kgaW5zdGFuY2UgYW5kIHJldmVydCBhbGwgY2hhbmdlcyBkb25lIGJ5IHRoaXMuX2MuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7R2xpZGV9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRlc3Ryb3lcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIHRoaXMuX2UuZW1pdCgnZGVzdHJveScpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBTdGFydCBpbnN0YW5jZSBhdXRvcGxheWluZy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW58TnVtYmVyfSBpbnRlcnZhbCBSdW4gYXV0b3BsYXlpbmcgd2l0aCBwYXNzZWQgaW50ZXJ2YWwgcmVnYXJkbGVzcyBvZiBgYXV0b3BsYXlgIHNldHRpbmdzXHJcbiAgICAgKiBAcmV0dXJuIHtHbGlkZX1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicGxheVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KCkge1xuICAgICAgdmFyIGludGVydmFsID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBmYWxzZTtcblxuICAgICAgaWYgKGludGVydmFsKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYXV0b3BsYXkgPSBpbnRlcnZhbDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZS5lbWl0KCdwbGF5Jyk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIFN0b3AgaW5zdGFuY2UgYXV0b3BsYXlpbmcuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7R2xpZGV9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInBhdXNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgdGhpcy5fZS5lbWl0KCdwYXVzZScpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIGdsaWRlIGludG8gYSBpZGxlIHN0YXR1cy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtHbGlkZX1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGlzYWJsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIGdsaWRlIGludG8gYSBhY3RpdmUgc3RhdHVzLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge0dsaWRlfVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJlbmFibGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogQWRkcyBjdXV0b20gZXZlbnQgbGlzdGVuZXIgd2l0aCBoYW5kbGVyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge1N0cmluZ3xBcnJheX0gZXZlbnRcclxuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBoYW5kbGVyXHJcbiAgICAgKiBAcmV0dXJuIHtHbGlkZX1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb24oZXZlbnQsIGhhbmRsZXIpIHtcbiAgICAgIHRoaXMuX2Uub24oZXZlbnQsIGhhbmRsZXIpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3MgaWYgZ2xpZGUgaXMgYSBwcmVjaXNlZCB0eXBlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gbmFtZVxyXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaXNUeXBlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzVHlwZShuYW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy50eXBlID09PSBuYW1lO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEdldHMgdmFsdWUgb2YgdGhlIGNvcmUgb3B0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNldHRpbmdzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHZhbHVlIG9mIHRoZSBjb3JlIG9wdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBvXHJcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxyXG4gICAgICovXG4gICAgLFxuICAgIHNldDogZnVuY3Rpb24gc2V0KG8pIHtcbiAgICAgIGlmIChpc09iamVjdChvKSkge1xuICAgICAgICB0aGlzLl9vID0gbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm4oJ09wdGlvbnMgbXVzdCBiZSBhbiBgb2JqZWN0YCBpbnN0YW5jZS4nKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGN1cnJlbnQgaW5kZXggb2YgdGhlIHNsaWRlci5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImluZGV4XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5faTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIGN1cnJlbnQgaW5kZXggYSBzbGlkZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxyXG4gICAgICovXG4gICAgLFxuICAgIHNldDogZnVuY3Rpb24gc2V0KGkpIHtcbiAgICAgIHRoaXMuX2kgPSB0b0ludChpKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHR5cGUgbmFtZSBvZiB0aGUgc2xpZGVyLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge1N0cmluZ31cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidHlwZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MudHlwZTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHZhbHVlIG9mIHRoZSBpZGxlIHN0YXR1cy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkaXNhYmxlZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2Q7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogU2V0cyB2YWx1ZSBvZiB0aGUgaWRsZSBzdGF0dXMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cclxuICAgICAqL1xuICAgICxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdGF0dXMpIHtcbiAgICAgIHRoaXMuX2QgPSAhIXN0YXR1cztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gR2xpZGU7XG59KCk7XG5cbmZ1bmN0aW9uIFJ1biAoR2xpZGUsIENvbXBvbmVudHMsIEV2ZW50cykge1xuICB2YXIgUnVuID0ge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIGF1dG9ydW5uaW5nIG9mIHRoZSBnbGlkZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgdGhpcy5fbyA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBNYWtlcyBnbGlkZXMgcnVubmluZyBiYXNlZCBvbiB0aGUgcGFzc2VkIG1vdmluZyBzY2hlbWEuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbW92ZVxuICAgICAqL1xuICAgIG1ha2U6IGZ1bmN0aW9uIG1ha2UobW92ZSkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKCFHbGlkZS5kaXNhYmxlZCkge1xuICAgICAgICAhR2xpZGUuc2V0dGluZ3Mud2FpdEZvclRyYW5zaXRpb24gfHwgR2xpZGUuZGlzYWJsZSgpO1xuICAgICAgICB0aGlzLm1vdmUgPSBtb3ZlO1xuICAgICAgICBFdmVudHMuZW1pdCgncnVuLmJlZm9yZScsIHRoaXMubW92ZSk7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlKCk7XG4gICAgICAgIEV2ZW50cy5lbWl0KCdydW4nLCB0aGlzLm1vdmUpO1xuICAgICAgICBDb21wb25lbnRzLlRyYW5zaXRpb24uYWZ0ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChfdGhpcy5pc1N0YXJ0KCkpIHtcbiAgICAgICAgICAgIEV2ZW50cy5lbWl0KCdydW4uc3RhcnQnLCBfdGhpcy5tb3ZlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoX3RoaXMuaXNFbmQoKSkge1xuICAgICAgICAgICAgRXZlbnRzLmVtaXQoJ3J1bi5lbmQnLCBfdGhpcy5tb3ZlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoX3RoaXMuaXNPZmZzZXQoKSkge1xuICAgICAgICAgICAgX3RoaXMuX28gPSBmYWxzZTtcbiAgICAgICAgICAgIEV2ZW50cy5lbWl0KCdydW4ub2Zmc2V0JywgX3RoaXMubW92ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgRXZlbnRzLmVtaXQoJ3J1bi5hZnRlcicsIF90aGlzLm1vdmUpO1xuICAgICAgICAgIEdsaWRlLmVuYWJsZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyBjdXJyZW50IGluZGV4IGJhc2VkIG9uIGRlZmluZWQgbW92ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge051bWJlcnxVbmRlZmluZWR9XG4gICAgICovXG4gICAgY2FsY3VsYXRlOiBmdW5jdGlvbiBjYWxjdWxhdGUoKSB7XG4gICAgICB2YXIgbW92ZSA9IHRoaXMubW92ZSxcbiAgICAgICAgICBsZW5ndGggPSB0aGlzLmxlbmd0aDtcbiAgICAgIHZhciBzdGVwcyA9IG1vdmUuc3RlcHMsXG4gICAgICAgICAgZGlyZWN0aW9uID0gbW92ZS5kaXJlY3Rpb247IC8vIEJ5IGRlZmF1bHQgYXNzdW1lIHRoYXQgc2l6ZSBvZiB2aWV3IGlzIGVxdWFsIHRvIG9uZSBzbGlkZVxuXG4gICAgICB2YXIgdmlld1NpemUgPSAxOyAvLyBXaGlsZSBkaXJlY3Rpb24gaXMgYD1gIHdlIHdhbnQganVtcCB0b1xuICAgICAgLy8gYSBzcGVjaWZpZWQgaW5kZXggZGVzY3JpYmVkIGluIHN0ZXBzLlxuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAnPScpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgYm91bmQgaXMgdHJ1ZSwgXG4gICAgICAgIC8vIGFzIHdlIHdhbnQgdG8gYXZvaWQgd2hpdGVzcGFjZXMuXG4gICAgICAgIGlmIChHbGlkZS5zZXR0aW5ncy5ib3VuZCAmJiB0b0ludChzdGVwcykgPiBsZW5ndGgpIHtcbiAgICAgICAgICBHbGlkZS5pbmRleCA9IGxlbmd0aDtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBHbGlkZS5pbmRleCA9IHN0ZXBzO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIFdoZW4gcGF0dGVybiBpcyBlcXVhbCB0byBgPj5gIHdlIHdhbnRcbiAgICAgIC8vIGZhc3QgZm9yd2FyZCB0byB0aGUgbGFzdCBzbGlkZS5cblxuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAnPicgJiYgc3RlcHMgPT09ICc+Jykge1xuICAgICAgICBHbGlkZS5pbmRleCA9IGxlbmd0aDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBXaGVuIHBhdHRlcm4gaXMgZXF1YWwgdG8gYDw8YCB3ZSB3YW50XG4gICAgICAvLyBmYXN0IGZvcndhcmQgdG8gdGhlIGZpcnN0IHNsaWRlLlxuXG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICc8JyAmJiBzdGVwcyA9PT0gJzwnKSB7XG4gICAgICAgIEdsaWRlLmluZGV4ID0gMDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBwYWdpbmF0aW9uIG1vdmVtZW50XG5cblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3wnKSB7XG4gICAgICAgIHZpZXdTaXplID0gR2xpZGUuc2V0dGluZ3MucGVyVmlldyB8fCAxO1xuICAgICAgfSAvLyB3ZSBhcmUgbW92aW5nIGZvcndhcmRcblxuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAnPicgfHwgZGlyZWN0aW9uID09PSAnfCcgJiYgc3RlcHMgPT09ICc+Jykge1xuICAgICAgICB2YXIgaW5kZXggPSBjYWxjdWxhdGVGb3J3YXJkSW5kZXgodmlld1NpemUpO1xuXG4gICAgICAgIGlmIChpbmRleCA+IGxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuX28gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgR2xpZGUuaW5kZXggPSBub3JtYWxpemVGb3J3YXJkSW5kZXgoaW5kZXgsIHZpZXdTaXplKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyB3ZSBhcmUgbW92aW5nIGJhY2t3YXJkXG5cblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJzwnIHx8IGRpcmVjdGlvbiA9PT0gJ3wnICYmIHN0ZXBzID09PSAnPCcpIHtcbiAgICAgICAgdmFyIF9pbmRleCA9IGNhbGN1bGF0ZUJhY2t3YXJkSW5kZXgodmlld1NpemUpO1xuXG4gICAgICAgIGlmIChfaW5kZXggPCAwKSB7XG4gICAgICAgICAgdGhpcy5fbyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBHbGlkZS5pbmRleCA9IG5vcm1hbGl6ZUJhY2t3YXJkSW5kZXgoX2luZGV4LCB2aWV3U2l6ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2FybihcIkludmFsaWQgZGlyZWN0aW9uIHBhdHRlcm4gW1wiLmNvbmNhdChkaXJlY3Rpb24pLmNvbmNhdChzdGVwcywgXCJdIGhhcyBiZWVuIHVzZWRcIikpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgd2UgYXJlIG9uIHRoZSBmaXJzdCBzbGlkZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICovXG4gICAgaXNTdGFydDogZnVuY3Rpb24gaXNTdGFydCgpIHtcbiAgICAgIHJldHVybiBHbGlkZS5pbmRleCA8PSAwO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgd2UgYXJlIG9uIHRoZSBsYXN0IHNsaWRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0VuZDogZnVuY3Rpb24gaXNFbmQoKSB7XG4gICAgICByZXR1cm4gR2xpZGUuaW5kZXggPj0gdGhpcy5sZW5ndGg7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB3ZSBhcmUgbWFraW5nIGEgb2Zmc2V0IHJ1bi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkaXJlY3Rpb25cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAqL1xuICAgIGlzT2Zmc2V0OiBmdW5jdGlvbiBpc09mZnNldCgpIHtcbiAgICAgIHZhciBkaXJlY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZDtcblxuICAgICAgaWYgKCFkaXJlY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX287XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5fbykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IC8vIGRpZCB3ZSB2aWV3IHRvIHRoZSByaWdodD9cblxuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAnfD4nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vdmUuZGlyZWN0aW9uID09PSAnfCcgJiYgdGhpcy5tb3ZlLnN0ZXBzID09PSAnPic7XG4gICAgICB9IC8vIGRpZCB3ZSB2aWV3IHRvIHRoZSBsZWZ0P1xuXG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICd8PCcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW92ZS5kaXJlY3Rpb24gPT09ICd8JyAmJiB0aGlzLm1vdmUuc3RlcHMgPT09ICc8JztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMubW92ZS5kaXJlY3Rpb24gPT09IGRpcmVjdGlvbjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIGJvdW5kIG1vZGUgaXMgYWN0aXZlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAqL1xuICAgIGlzQm91bmQ6IGZ1bmN0aW9uIGlzQm91bmQoKSB7XG4gICAgICByZXR1cm4gR2xpZGUuaXNUeXBlKCdzbGlkZXInKSAmJiBHbGlkZS5zZXR0aW5ncy5mb2N1c0F0ICE9PSAnY2VudGVyJyAmJiBHbGlkZS5zZXR0aW5ncy5ib3VuZDtcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBSZXR1cm5zIGluZGV4IHZhbHVlIHRvIG1vdmUgZm9yd2FyZC90byB0aGUgcmlnaHRcbiAgICpcbiAgICogQHBhcmFtIHZpZXdTaXplXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAqL1xuXG4gIGZ1bmN0aW9uIGNhbGN1bGF0ZUZvcndhcmRJbmRleCh2aWV3U2l6ZSkge1xuICAgIHZhciBpbmRleCA9IEdsaWRlLmluZGV4O1xuXG4gICAgaWYgKEdsaWRlLmlzVHlwZSgnY2Fyb3VzZWwnKSkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgdmlld1NpemU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGV4ICsgKHZpZXdTaXplIC0gaW5kZXggJSB2aWV3U2l6ZSk7XG4gIH1cbiAgLyoqXG4gICAqIE5vcm1hbGl6ZXMgdGhlIGdpdmVuIGZvcndhcmQgaW5kZXggYmFzZWQgb24gZ2xpZGUgc2V0dGluZ3MsIHByZXZlbnRpbmcgaXQgdG8gZXhjZWVkIGNlcnRhaW4gYm91bmRhcmllc1xuICAgKlxuICAgKiBAcGFyYW0gaW5kZXhcbiAgICogQHBhcmFtIGxlbmd0aFxuICAgKiBAcGFyYW0gdmlld1NpemVcbiAgICogQHJldHVybnMge051bWJlcn1cbiAgICovXG5cblxuICBmdW5jdGlvbiBub3JtYWxpemVGb3J3YXJkSW5kZXgoaW5kZXgsIHZpZXdTaXplKSB7XG4gICAgdmFyIGxlbmd0aCA9IFJ1bi5sZW5ndGg7XG5cbiAgICBpZiAoaW5kZXggPD0gbGVuZ3RoKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuXG4gICAgaWYgKEdsaWRlLmlzVHlwZSgnY2Fyb3VzZWwnKSkge1xuICAgICAgcmV0dXJuIGluZGV4IC0gKGxlbmd0aCArIDEpO1xuICAgIH1cblxuICAgIGlmIChHbGlkZS5zZXR0aW5ncy5yZXdpbmQpIHtcbiAgICAgIC8vIGJvdW5kIGRvZXMgZnVubnkgdGhpbmdzIHdpdGggdGhlIGxlbmd0aCwgdGhlcmVmb3Igd2UgaGF2ZSB0byBiZSBjZXJ0YWluXG4gICAgICAvLyB0aGF0IHdlIGFyZSBvbiB0aGUgbGFzdCBwb3NzaWJsZSBpbmRleCB2YWx1ZSBnaXZlbiBieSBib3VuZFxuICAgICAgaWYgKFJ1bi5pc0JvdW5kKCkgJiYgIVJ1bi5pc0VuZCgpKSB7XG4gICAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGlmIChSdW4uaXNCb3VuZCgpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cblxuICAgIHJldHVybiBNYXRoLmZsb29yKGxlbmd0aCAvIHZpZXdTaXplKSAqIHZpZXdTaXplO1xuICB9XG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIGluZGV4IHZhbHVlIHRvIG1vdmUgYmFja3dhcmQvdG8gdGhlIGxlZnRcbiAgICpcbiAgICogQHBhcmFtIHZpZXdTaXplXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gY2FsY3VsYXRlQmFja3dhcmRJbmRleCh2aWV3U2l6ZSkge1xuICAgIHZhciBpbmRleCA9IEdsaWRlLmluZGV4O1xuXG4gICAgaWYgKEdsaWRlLmlzVHlwZSgnY2Fyb3VzZWwnKSkge1xuICAgICAgcmV0dXJuIGluZGV4IC0gdmlld1NpemU7XG4gICAgfSAvLyBlbnN1cmUgb3VyIGJhY2sgbmF2aWdhdGlvbiByZXN1bHRzIGluIHRoZSBzYW1lIGluZGV4IGFzIGEgZm9yd2FyZCBuYXZpZ2F0aW9uXG4gICAgLy8gdG8gZXhwZXJpZW5jZSBhIGhvbW9nZW5lb3VzIHBhZ2luZ1xuXG5cbiAgICB2YXIgdmlldyA9IE1hdGguY2VpbChpbmRleCAvIHZpZXdTaXplKTtcbiAgICByZXR1cm4gKHZpZXcgLSAxKSAqIHZpZXdTaXplO1xuICB9XG4gIC8qKlxuICAgKiBOb3JtYWxpemVzIHRoZSBnaXZlbiBiYWNrd2FyZCBpbmRleCBiYXNlZCBvbiBnbGlkZSBzZXR0aW5ncywgcHJldmVudGluZyBpdCB0byBleGNlZWQgY2VydGFpbiBib3VuZGFyaWVzXG4gICAqXG4gICAqIEBwYXJhbSBpbmRleFxuICAgKiBAcGFyYW0gbGVuZ3RoXG4gICAqIEBwYXJhbSB2aWV3U2l6ZVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG5cblxuICBmdW5jdGlvbiBub3JtYWxpemVCYWNrd2FyZEluZGV4KGluZGV4LCB2aWV3U2l6ZSkge1xuICAgIHZhciBsZW5ndGggPSBSdW4ubGVuZ3RoO1xuXG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG5cbiAgICBpZiAoR2xpZGUuaXNUeXBlKCdjYXJvdXNlbCcpKSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAobGVuZ3RoICsgMSk7XG4gICAgfVxuXG4gICAgaWYgKEdsaWRlLnNldHRpbmdzLnJld2luZCkge1xuICAgICAgLy8gYm91bmQgZG9lcyBmdW5ueSB0aGluZ3Mgd2l0aCB0aGUgbGVuZ3RoLCB0aGVyZWZvciB3ZSBoYXZlIHRvIGJlIGNlcnRhaW5cbiAgICAgIC8vIHRoYXQgd2UgYXJlIG9uIGZpcnN0IHBvc3NpYmxlIGluZGV4IHZhbHVlIGJlZm9yZSB3ZSB0byByZXdpbmQgdG8gdGhlIGxlbmd0aCBnaXZlbiBieSBib3VuZFxuICAgICAgaWYgKFJ1bi5pc0JvdW5kKCkgJiYgUnVuLmlzU3RhcnQoKSkge1xuICAgICAgICByZXR1cm4gbGVuZ3RoO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihsZW5ndGggLyB2aWV3U2l6ZSkgKiB2aWV3U2l6ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGRlZmluZShSdW4sICdtb3ZlJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgdmFsdWUgb2YgdGhlIG1vdmUgc2NoZW1hLlxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHZhbHVlIG9mIHRoZSBtb3ZlIHNjaGVtYS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHZhciBzdGVwID0gdmFsdWUuc3Vic3RyKDEpO1xuICAgICAgdGhpcy5fbSA9IHtcbiAgICAgICAgZGlyZWN0aW9uOiB2YWx1ZS5zdWJzdHIoMCwgMSksXG4gICAgICAgIHN0ZXBzOiBzdGVwID8gdG9JbnQoc3RlcCkgPyB0b0ludChzdGVwKSA6IHN0ZXAgOiAwXG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG4gIGRlZmluZShSdW4sICdsZW5ndGgnLCB7XG4gICAgLyoqXG4gICAgICogR2V0cyB2YWx1ZSBvZiB0aGUgcnVubmluZyBkaXN0YW5jZSBiYXNlZFxuICAgICAqIG9uIHplcm8taW5kZXhpbmcgbnVtYmVyIG9mIHNsaWRlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBzZXR0aW5ncyA9IEdsaWRlLnNldHRpbmdzO1xuICAgICAgdmFyIGxlbmd0aCA9IENvbXBvbmVudHMuSHRtbC5zbGlkZXMubGVuZ3RoOyAvLyBJZiB0aGUgYGJvdW5kYCBvcHRpb24gaXMgYWN0aXZlLCBhIG1heGltdW0gcnVubmluZyBkaXN0YW5jZSBzaG91bGQgYmVcbiAgICAgIC8vIHJlZHVjZWQgYnkgYHBlclZpZXdgIGFuZCBgZm9jdXNBdGAgc2V0dGluZ3MuIFJ1bm5pbmcgZGlzdGFuY2VcbiAgICAgIC8vIHNob3VsZCBlbmQgYmVmb3JlIGNyZWF0aW5nIGFuIGVtcHR5IHNwYWNlIGFmdGVyIGluc3RhbmNlLlxuXG4gICAgICBpZiAodGhpcy5pc0JvdW5kKCkpIHtcbiAgICAgICAgcmV0dXJuIGxlbmd0aCAtIDEgLSAodG9JbnQoc2V0dGluZ3MucGVyVmlldykgLSAxKSArIHRvSW50KHNldHRpbmdzLmZvY3VzQXQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGVuZ3RoIC0gMTtcbiAgICB9XG4gIH0pO1xuICBkZWZpbmUoUnVuLCAnb2Zmc2V0Jywge1xuICAgIC8qKlxuICAgICAqIEdldHMgc3RhdHVzIG9mIHRoZSBvZmZzZXR0aW5nIGZsYWcuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX287XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIFJ1bjtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgY3VycmVudCB0aW1lLlxuICpcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuZnVuY3Rpb24gbm93KCkge1xuICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCB3aGVuIGludm9rZWQsIHdpbGwgb25seSBiZSB0cmlnZ2VyZWRcbiAqIGF0IG1vc3Qgb25jZSBkdXJpbmcgYSBnaXZlbiB3aW5kb3cgb2YgdGltZS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jXG4gKiBAcGFyYW0ge051bWJlcn0gd2FpdFxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNoa2VuYXMvdW5kZXJzY29yZVxuICovXG5cbmZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIHRpbWVvdXQsIGNvbnRleHQsIGFyZ3MsIHJlc3VsdDtcbiAgdmFyIHByZXZpb3VzID0gMDtcbiAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XG5cbiAgdmFyIGxhdGVyID0gZnVuY3Rpb24gbGF0ZXIoKSB7XG4gICAgcHJldmlvdXMgPSBvcHRpb25zLmxlYWRpbmcgPT09IGZhbHNlID8gMCA6IG5vdygpO1xuICAgIHRpbWVvdXQgPSBudWxsO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgaWYgKCF0aW1lb3V0KSBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gIH07XG5cbiAgdmFyIHRocm90dGxlZCA9IGZ1bmN0aW9uIHRocm90dGxlZCgpIHtcbiAgICB2YXIgYXQgPSBub3coKTtcbiAgICBpZiAoIXByZXZpb3VzICYmIG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UpIHByZXZpb3VzID0gYXQ7XG4gICAgdmFyIHJlbWFpbmluZyA9IHdhaXQgLSAoYXQgLSBwcmV2aW91cyk7XG4gICAgY29udGV4dCA9IHRoaXM7XG4gICAgYXJncyA9IGFyZ3VtZW50cztcblxuICAgIGlmIChyZW1haW5pbmcgPD0gMCB8fCByZW1haW5pbmcgPiB3YWl0KSB7XG4gICAgICBpZiAodGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBwcmV2aW91cyA9IGF0O1xuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIGlmICghdGltZW91dCkgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAoIXRpbWVvdXQgJiYgb3B0aW9ucy50cmFpbGluZyAhPT0gZmFsc2UpIHtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCByZW1haW5pbmcpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgdGhyb3R0bGVkLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgcHJldmlvdXMgPSAwO1xuICAgIHRpbWVvdXQgPSBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIHRocm90dGxlZDtcbn1cblxudmFyIE1BUkdJTl9UWVBFID0ge1xuICBsdHI6IFsnbWFyZ2luTGVmdCcsICdtYXJnaW5SaWdodCddLFxuICBydGw6IFsnbWFyZ2luUmlnaHQnLCAnbWFyZ2luTGVmdCddXG59O1xuZnVuY3Rpb24gR2FwcyAoR2xpZGUsIENvbXBvbmVudHMsIEV2ZW50cykge1xuICB2YXIgR2FwcyA9IHtcbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIGdhcHMgYmV0d2VlbiBzbGlkZXMuIEZpcnN0IGFuZCBsYXN0XG4gICAgICogc2xpZGVzIGRvIG5vdCByZWNlaXZlIGl0J3MgZWRnZSBtYXJnaW5zLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MQ29sbGVjdGlvbn0gc2xpZGVzXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBhcHBseTogZnVuY3Rpb24gYXBwbHkoc2xpZGVzKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc2xpZGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBzdHlsZSA9IHNsaWRlc1tpXS5zdHlsZTtcbiAgICAgICAgdmFyIGRpcmVjdGlvbiA9IENvbXBvbmVudHMuRGlyZWN0aW9uLnZhbHVlO1xuXG4gICAgICAgIGlmIChpICE9PSAwKSB7XG4gICAgICAgICAgc3R5bGVbTUFSR0lOX1RZUEVbZGlyZWN0aW9uXVswXV0gPSBcIlwiLmNvbmNhdCh0aGlzLnZhbHVlIC8gMiwgXCJweFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHlsZVtNQVJHSU5fVFlQRVtkaXJlY3Rpb25dWzBdXSA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGkgIT09IHNsaWRlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgc3R5bGVbTUFSR0lOX1RZUEVbZGlyZWN0aW9uXVsxXV0gPSBcIlwiLmNvbmNhdCh0aGlzLnZhbHVlIC8gMiwgXCJweFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHlsZVtNQVJHSU5fVFlQRVtkaXJlY3Rpb25dWzFdXSA9ICcnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgZ2FwcyBmcm9tIHRoZSBzbGlkZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxDb2xsZWN0aW9ufSBzbGlkZXNcbiAgICAgKiBAcmV0dXJucyB7Vm9pZH1cbiAgICAqL1xuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKHNsaWRlcykge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHNsaWRlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgc3R5bGUgPSBzbGlkZXNbaV0uc3R5bGU7XG4gICAgICAgIHN0eWxlLm1hcmdpbkxlZnQgPSAnJztcbiAgICAgICAgc3R5bGUubWFyZ2luUmlnaHQgPSAnJztcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGRlZmluZShHYXBzLCAndmFsdWUnLCB7XG4gICAgLyoqXG4gICAgICogR2V0cyB2YWx1ZSBvZiB0aGUgZ2FwLlxuICAgICAqXG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0b0ludChHbGlkZS5zZXR0aW5ncy5nYXApO1xuICAgIH1cbiAgfSk7XG4gIGRlZmluZShHYXBzLCAnZ3JvdycsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIGFkZGl0aW9uYWwgZGltZW5zaW9ucyB2YWx1ZSBjYXVzZWQgYnkgZ2Fwcy5cbiAgICAgKiBVc2VkIHRvIGluY3JlYXNlIHdpZHRoIG9mIHRoZSBzbGlkZXMgd3JhcHBlci5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gR2Fwcy52YWx1ZSAqIENvbXBvbmVudHMuU2l6ZXMubGVuZ3RoO1xuICAgIH1cbiAgfSk7XG4gIGRlZmluZShHYXBzLCAncmVkdWN0b3InLCB7XG4gICAgLyoqXG4gICAgICogR2V0cyByZWR1Y3Rpb24gdmFsdWUgY2F1c2VkIGJ5IGdhcHMuXG4gICAgICogVXNlZCB0byBzdWJ0cmFjdCB3aWR0aCBvZiB0aGUgc2xpZGVzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBwZXJWaWV3ID0gR2xpZGUuc2V0dGluZ3MucGVyVmlldztcbiAgICAgIHJldHVybiBHYXBzLnZhbHVlICogKHBlclZpZXcgLSAxKSAvIHBlclZpZXc7XG4gICAgfVxuICB9KTtcbiAgLyoqXG4gICAqIEFwcGx5IGNhbGN1bGF0ZWQgZ2FwczpcbiAgICogLSBhZnRlciBidWlsZGluZywgc28gc2xpZGVzIChpbmNsdWRpbmcgY2xvbmVzKSB3aWxsIHJlY2VpdmUgcHJvcGVyIG1hcmdpbnNcbiAgICogLSBvbiB1cGRhdGluZyB2aWEgQVBJLCB0byByZWNhbGN1bGF0ZSBnYXBzIHdpdGggbmV3IG9wdGlvbnNcbiAgICovXG5cbiAgRXZlbnRzLm9uKFsnYnVpbGQuYWZ0ZXInLCAndXBkYXRlJ10sIHRocm90dGxlKGZ1bmN0aW9uICgpIHtcbiAgICBHYXBzLmFwcGx5KENvbXBvbmVudHMuSHRtbC53cmFwcGVyLmNoaWxkcmVuKTtcbiAgfSwgMzApKTtcbiAgLyoqXG4gICAqIFJlbW92ZSBnYXBzOlxuICAgKiAtIG9uIGRlc3Ryb3lpbmcgdG8gYnJpbmcgbWFya3VwIHRvIGl0cyBpbml0YWwgc3RhdGVcbiAgICovXG5cbiAgRXZlbnRzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgIEdhcHMucmVtb3ZlKENvbXBvbmVudHMuSHRtbC53cmFwcGVyLmNoaWxkcmVuKTtcbiAgfSk7XG4gIHJldHVybiBHYXBzO1xufVxuXG4vKipcbiAqIEZpbmRzIHNpYmxpbmdzIG5vZGVzIG9mIHRoZSBwYXNzZWQgbm9kZS5cbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBub2RlXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZnVuY3Rpb24gc2libGluZ3Mobm9kZSkge1xuICBpZiAobm9kZSAmJiBub2RlLnBhcmVudE5vZGUpIHtcbiAgICB2YXIgbiA9IG5vZGUucGFyZW50Tm9kZS5maXJzdENoaWxkO1xuICAgIHZhciBtYXRjaGVkID0gW107XG5cbiAgICBmb3IgKDsgbjsgbiA9IG4ubmV4dFNpYmxpbmcpIHtcbiAgICAgIGlmIChuLm5vZGVUeXBlID09PSAxICYmIG4gIT09IG5vZGUpIHtcbiAgICAgICAgbWF0Y2hlZC5wdXNoKG4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVkO1xuICB9XG5cbiAgcmV0dXJuIFtdO1xufVxuLyoqXG4gKiBDaGVja3MgaWYgcGFzc2VkIG5vZGUgZXhpc3QgYW5kIGlzIGEgdmFsaWQgZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBub2RlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmZ1bmN0aW9uIGV4aXN0KG5vZGUpIHtcbiAgaWYgKG5vZGUgJiYgbm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG52YXIgVFJBQ0tfU0VMRUNUT1IgPSAnW2RhdGEtZ2xpZGUtZWw9XCJ0cmFja1wiXSc7XG5mdW5jdGlvbiBIdG1sIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIHZhciBIdG1sID0ge1xuICAgIC8qKlxuICAgICAqIFNldHVwIHNsaWRlciBIVE1MIG5vZGVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtHbGlkZX0gZ2xpZGVcbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB0aGlzLnJvb3QgPSBHbGlkZS5zZWxlY3RvcjtcbiAgICAgIHRoaXMudHJhY2sgPSB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcihUUkFDS19TRUxFQ1RPUik7XG4gICAgICB0aGlzLmNvbGxlY3RTbGlkZXMoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29sbGVjdCBzbGlkZXNcbiAgICAgKi9cbiAgICBjb2xsZWN0U2xpZGVzOiBmdW5jdGlvbiBjb2xsZWN0U2xpZGVzKCkge1xuICAgICAgdGhpcy5zbGlkZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLndyYXBwZXIuY2hpbGRyZW4pLmZpbHRlcihmdW5jdGlvbiAoc2xpZGUpIHtcbiAgICAgICAgcmV0dXJuICFzbGlkZS5jbGFzc0xpc3QuY29udGFpbnMoR2xpZGUuc2V0dGluZ3MuY2xhc3Nlcy5zbGlkZS5jbG9uZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIGRlZmluZShIdG1sLCAncm9vdCcsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIG5vZGUgb2YgdGhlIGdsaWRlIG1haW4gZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBIdG1sLl9yO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIG5vZGUgb2YgdGhlIGdsaWRlIG1haW4gZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChyKSB7XG4gICAgICBpZiAoaXNTdHJpbmcocikpIHtcbiAgICAgICAgciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iocik7XG4gICAgICB9XG5cbiAgICAgIGlmIChleGlzdChyKSkge1xuICAgICAgICBIdG1sLl9yID0gcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm4oJ1Jvb3QgZWxlbWVudCBtdXN0IGJlIGEgZXhpc3RpbmcgSHRtbCBub2RlJyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgZGVmaW5lKEh0bWwsICd0cmFjaycsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIG5vZGUgb2YgdGhlIGdsaWRlIHRyYWNrIHdpdGggc2xpZGVzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIEh0bWwuX3Q7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgbm9kZSBvZiB0aGUgZ2xpZGUgdHJhY2sgd2l0aCBzbGlkZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodCkge1xuICAgICAgaWYgKGV4aXN0KHQpKSB7XG4gICAgICAgIEh0bWwuX3QgPSB0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FybihcIkNvdWxkIG5vdCBmaW5kIHRyYWNrIGVsZW1lbnQuIFBsZWFzZSB1c2UgXCIuY29uY2F0KFRSQUNLX1NFTEVDVE9SLCBcIiBhdHRyaWJ1dGUuXCIpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBkZWZpbmUoSHRtbCwgJ3dyYXBwZXInLCB7XG4gICAgLyoqXG4gICAgICogR2V0cyBub2RlIG9mIHRoZSBzbGlkZXMgd3JhcHBlci5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBIdG1sLnRyYWNrLmNoaWxkcmVuWzBdO1xuICAgIH1cbiAgfSk7XG4gIC8qKlxuICAgKiBBZGQvcmVtb3ZlL3Jlb3JkZXIgZHluYW1pYyBzbGlkZXNcbiAgICovXG5cbiAgRXZlbnRzLm9uKCd1cGRhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgSHRtbC5jb2xsZWN0U2xpZGVzKCk7XG4gIH0pO1xuICByZXR1cm4gSHRtbDtcbn1cblxuZnVuY3Rpb24gUGVlayAoR2xpZGUsIENvbXBvbmVudHMsIEV2ZW50cykge1xuICB2YXIgUGVlayA9IHtcbiAgICAvKipcbiAgICAgKiBTZXR1cHMgaG93IG11Y2ggdG8gcGVlayBiYXNlZCBvbiBzZXR0aW5ncy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgdGhpcy52YWx1ZSA9IEdsaWRlLnNldHRpbmdzLnBlZWs7XG4gICAgfVxuICB9O1xuICBkZWZpbmUoUGVlaywgJ3ZhbHVlJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgdmFsdWUgb2YgdGhlIHBlZWsuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfE9iamVjdH1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBQZWVrLl92O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHZhbHVlIG9mIHRoZSBwZWVrLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8T2JqZWN0fSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUuYmVmb3JlID0gdG9JbnQodmFsdWUuYmVmb3JlKTtcbiAgICAgICAgdmFsdWUuYWZ0ZXIgPSB0b0ludCh2YWx1ZS5hZnRlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IHRvSW50KHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgUGVlay5fdiA9IHZhbHVlO1xuICAgIH1cbiAgfSk7XG4gIGRlZmluZShQZWVrLCAncmVkdWN0b3InLCB7XG4gICAgLyoqXG4gICAgICogR2V0cyByZWR1Y3Rpb24gdmFsdWUgY2F1c2VkIGJ5IHBlZWsuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIHZhbHVlID0gUGVlay52YWx1ZTtcbiAgICAgIHZhciBwZXJWaWV3ID0gR2xpZGUuc2V0dGluZ3MucGVyVmlldztcblxuICAgICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWUuYmVmb3JlIC8gcGVyVmlldyArIHZhbHVlLmFmdGVyIC8gcGVyVmlldztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlICogMiAvIHBlclZpZXc7XG4gICAgfVxuICB9KTtcbiAgLyoqXG4gICAqIFJlY2FsY3VsYXRlIHBlZWtpbmcgc2l6ZXMgb246XG4gICAqIC0gd2hlbiByZXNpemluZyB3aW5kb3cgdG8gdXBkYXRlIHRvIHByb3BlciBwZXJjZW50c1xuICAgKi9cblxuICBFdmVudHMub24oWydyZXNpemUnLCAndXBkYXRlJ10sIGZ1bmN0aW9uICgpIHtcbiAgICBQZWVrLm1vdW50KCk7XG4gIH0pO1xuICByZXR1cm4gUGVlaztcbn1cblxuZnVuY3Rpb24gTW92ZSAoR2xpZGUsIENvbXBvbmVudHMsIEV2ZW50cykge1xuICB2YXIgTW92ZSA9IHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RzIG1vdmUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHJldHVybnMge1ZvaWR9XG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgdGhpcy5fbyA9IDA7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgYSBtb3ZlbWVudCB2YWx1ZSBiYXNlZCBvbiBwYXNzZWQgb2Zmc2V0IGFuZCBjdXJyZW50bHkgYWN0aXZlIGluZGV4LlxuICAgICAqXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBvZmZzZXRcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIG1ha2U6IGZ1bmN0aW9uIG1ha2UoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgb2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG4gICAgICBFdmVudHMuZW1pdCgnbW92ZScsIHtcbiAgICAgICAgbW92ZW1lbnQ6IHRoaXMudmFsdWVcbiAgICAgIH0pO1xuICAgICAgQ29tcG9uZW50cy5UcmFuc2l0aW9uLmFmdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgRXZlbnRzLmVtaXQoJ21vdmUuYWZ0ZXInLCB7XG4gICAgICAgICAgbW92ZW1lbnQ6IF90aGlzLnZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBkZWZpbmUoTW92ZSwgJ29mZnNldCcsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIGFuIG9mZnNldCB2YWx1ZSB1c2VkIHRvIG1vZGlmeSBjdXJyZW50IHRyYW5zbGF0ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBNb3ZlLl9vO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGFuIG9mZnNldCB2YWx1ZSB1c2VkIHRvIG1vZGlmeSBjdXJyZW50IHRyYW5zbGF0ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgTW92ZS5fbyA9ICFpc1VuZGVmaW5lZCh2YWx1ZSkgPyB0b0ludCh2YWx1ZSkgOiAwO1xuICAgIH1cbiAgfSk7XG4gIGRlZmluZShNb3ZlLCAndHJhbnNsYXRlJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgYSByYXcgbW92ZW1lbnQgdmFsdWUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gQ29tcG9uZW50cy5TaXplcy5zbGlkZVdpZHRoICogR2xpZGUuaW5kZXg7XG4gICAgfVxuICB9KTtcbiAgZGVmaW5lKE1vdmUsICd2YWx1ZScsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIGFuIGFjdHVhbCBtb3ZlbWVudCB2YWx1ZSBjb3JyZWN0ZWQgYnkgb2Zmc2V0LlxuICAgICAqXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIG9mZnNldCA9IHRoaXMub2Zmc2V0O1xuICAgICAgdmFyIHRyYW5zbGF0ZSA9IHRoaXMudHJhbnNsYXRlO1xuXG4gICAgICBpZiAoQ29tcG9uZW50cy5EaXJlY3Rpb24uaXMoJ3J0bCcpKSB7XG4gICAgICAgIHJldHVybiB0cmFuc2xhdGUgKyBvZmZzZXQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cmFuc2xhdGUgLSBvZmZzZXQ7XG4gICAgfVxuICB9KTtcbiAgLyoqXG4gICAqIE1ha2UgbW92ZW1lbnQgdG8gcHJvcGVyIHNsaWRlIG9uOlxuICAgKiAtIGJlZm9yZSBidWlsZCwgc28gZ2xpZGUgd2lsbCBzdGFydCBhdCBgc3RhcnRBdGAgaW5kZXhcbiAgICogLSBvbiBlYWNoIHN0YW5kYXJkIHJ1biB0byBtb3ZlIHRvIG5ld2x5IGNhbGN1bGF0ZWQgaW5kZXhcbiAgICovXG5cbiAgRXZlbnRzLm9uKFsnYnVpbGQuYmVmb3JlJywgJ3J1biddLCBmdW5jdGlvbiAoKSB7XG4gICAgTW92ZS5tYWtlKCk7XG4gIH0pO1xuICByZXR1cm4gTW92ZTtcbn1cblxuZnVuY3Rpb24gU2l6ZXMgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgdmFyIFNpemVzID0ge1xuICAgIC8qKlxuICAgICAqIFNldHVwcyBkaW1lbnNpb25zIG9mIHNsaWRlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgc2V0dXBTbGlkZXM6IGZ1bmN0aW9uIHNldHVwU2xpZGVzKCkge1xuICAgICAgdmFyIHdpZHRoID0gXCJcIi5jb25jYXQodGhpcy5zbGlkZVdpZHRoLCBcInB4XCIpO1xuICAgICAgdmFyIHNsaWRlcyA9IENvbXBvbmVudHMuSHRtbC5zbGlkZXM7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNsaWRlc1tpXS5zdHlsZS53aWR0aCA9IHdpZHRoO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXR1cHMgZGltZW5zaW9ucyBvZiBzbGlkZXMgd3JhcHBlci5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgc2V0dXBXcmFwcGVyOiBmdW5jdGlvbiBzZXR1cFdyYXBwZXIoKSB7XG4gICAgICBDb21wb25lbnRzLkh0bWwud3JhcHBlci5zdHlsZS53aWR0aCA9IFwiXCIuY29uY2F0KHRoaXMud3JhcHBlclNpemUsIFwicHhcIik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYXBwbGllZCBzdHlsZXMgZnJvbSBIVE1MIGVsZW1lbnRzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1ZvaWR9XG4gICAgICovXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICB2YXIgc2xpZGVzID0gQ29tcG9uZW50cy5IdG1sLnNsaWRlcztcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc2xpZGVzW2ldLnN0eWxlLndpZHRoID0gJyc7XG4gICAgICB9XG5cbiAgICAgIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLnN0eWxlLndpZHRoID0gJyc7XG4gICAgfVxuICB9O1xuICBkZWZpbmUoU2l6ZXMsICdsZW5ndGgnLCB7XG4gICAgLyoqXG4gICAgICogR2V0cyBjb3VudCBudW1iZXIgb2YgdGhlIHNsaWRlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBDb21wb25lbnRzLkh0bWwuc2xpZGVzLmxlbmd0aDtcbiAgICB9XG4gIH0pO1xuICBkZWZpbmUoU2l6ZXMsICd3aWR0aCcsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIHdpZHRoIHZhbHVlIG9mIHRoZSBzbGlkZXIgKHZpc2libGUgYXJlYSkuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gQ29tcG9uZW50cy5IdG1sLnRyYWNrLm9mZnNldFdpZHRoO1xuICAgIH1cbiAgfSk7XG4gIGRlZmluZShTaXplcywgJ3dyYXBwZXJTaXplJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgc2l6ZSBvZiB0aGUgc2xpZGVzIHdyYXBwZXIuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gU2l6ZXMuc2xpZGVXaWR0aCAqIFNpemVzLmxlbmd0aCArIENvbXBvbmVudHMuR2Fwcy5ncm93ICsgQ29tcG9uZW50cy5DbG9uZXMuZ3JvdztcbiAgICB9XG4gIH0pO1xuICBkZWZpbmUoU2l6ZXMsICdzbGlkZVdpZHRoJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgd2lkdGggdmFsdWUgb2YgYSBzaW5nbGUgc2xpZGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gU2l6ZXMud2lkdGggLyBHbGlkZS5zZXR0aW5ncy5wZXJWaWV3IC0gQ29tcG9uZW50cy5QZWVrLnJlZHVjdG9yIC0gQ29tcG9uZW50cy5HYXBzLnJlZHVjdG9yO1xuICAgIH1cbiAgfSk7XG4gIC8qKlxuICAgKiBBcHBseSBjYWxjdWxhdGVkIGdsaWRlJ3MgZGltZW5zaW9uczpcbiAgICogLSBiZWZvcmUgYnVpbGRpbmcsIHNvIG90aGVyIGRpbWVuc2lvbnMgKGUuZy4gdHJhbnNsYXRlKSB3aWxsIGJlIGNhbGN1bGF0ZWQgcHJvcGVydGx5XG4gICAqIC0gd2hlbiByZXNpemluZyB3aW5kb3cgdG8gcmVjYWxjdWxhdGUgc2lsZGVzIGRpbWVuc2lvbnNcbiAgICogLSBvbiB1cGRhdGluZyB2aWEgQVBJLCB0byBjYWxjdWxhdGUgZGltZW5zaW9ucyBiYXNlZCBvbiBuZXcgb3B0aW9uc1xuICAgKi9cblxuICBFdmVudHMub24oWydidWlsZC5iZWZvcmUnLCAncmVzaXplJywgJ3VwZGF0ZSddLCBmdW5jdGlvbiAoKSB7XG4gICAgU2l6ZXMuc2V0dXBTbGlkZXMoKTtcbiAgICBTaXplcy5zZXR1cFdyYXBwZXIoKTtcbiAgfSk7XG4gIC8qKlxuICAgKiBSZW1vdmUgY2FsY3VsYXRlZCBnbGlkZSdzIGRpbWVuc2lvbnM6XG4gICAqIC0gb24gZGVzdG90aW5nIHRvIGJyaW5nIG1hcmt1cCB0byBpdHMgaW5pdGFsIHN0YXRlXG4gICAqL1xuXG4gIEV2ZW50cy5vbignZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICBTaXplcy5yZW1vdmUoKTtcbiAgfSk7XG4gIHJldHVybiBTaXplcztcbn1cblxuZnVuY3Rpb24gQnVpbGQgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgdmFyIEJ1aWxkID0ge1xuICAgIC8qKlxuICAgICAqIEluaXQgZ2xpZGUgYnVpbGRpbmcuIEFkZHMgY2xhc3Nlcywgc2V0c1xuICAgICAqIGRpbWVuc2lvbnMgYW5kIHNldHVwcyBpbml0aWFsIHN0YXRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICBFdmVudHMuZW1pdCgnYnVpbGQuYmVmb3JlJyk7XG4gICAgICB0aGlzLnR5cGVDbGFzcygpO1xuICAgICAgdGhpcy5hY3RpdmVDbGFzcygpO1xuICAgICAgRXZlbnRzLmVtaXQoJ2J1aWxkLmFmdGVyJyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFkZHMgYHR5cGVgIGNsYXNzIHRvIHRoZSBnbGlkZSBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICB0eXBlQ2xhc3M6IGZ1bmN0aW9uIHR5cGVDbGFzcygpIHtcbiAgICAgIENvbXBvbmVudHMuSHRtbC5yb290LmNsYXNzTGlzdC5hZGQoR2xpZGUuc2V0dGluZ3MuY2xhc3Nlcy50eXBlW0dsaWRlLnNldHRpbmdzLnR5cGVdKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyBhY3RpdmUgY2xhc3MgdG8gY3VycmVudCBzbGlkZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgYWN0aXZlQ2xhc3M6IGZ1bmN0aW9uIGFjdGl2ZUNsYXNzKCkge1xuICAgICAgdmFyIGNsYXNzZXMgPSBHbGlkZS5zZXR0aW5ncy5jbGFzc2VzO1xuICAgICAgdmFyIHNsaWRlID0gQ29tcG9uZW50cy5IdG1sLnNsaWRlc1tHbGlkZS5pbmRleF07XG5cbiAgICAgIGlmIChzbGlkZSkge1xuICAgICAgICBzbGlkZS5jbGFzc0xpc3QuYWRkKGNsYXNzZXMuc2xpZGUuYWN0aXZlKTtcbiAgICAgICAgc2libGluZ3Moc2xpZGUpLmZvckVhY2goZnVuY3Rpb24gKHNpYmxpbmcpIHtcbiAgICAgICAgICBzaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3Nlcy5zbGlkZS5hY3RpdmUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBIVE1MIGNsYXNzZXMgYXBwbGllZCBhdCBidWlsZGluZy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgcmVtb3ZlQ2xhc3NlczogZnVuY3Rpb24gcmVtb3ZlQ2xhc3NlcygpIHtcbiAgICAgIHZhciBfR2xpZGUkc2V0dGluZ3MkY2xhc3MgPSBHbGlkZS5zZXR0aW5ncy5jbGFzc2VzLFxuICAgICAgICAgIHR5cGUgPSBfR2xpZGUkc2V0dGluZ3MkY2xhc3MudHlwZSxcbiAgICAgICAgICBzbGlkZSA9IF9HbGlkZSRzZXR0aW5ncyRjbGFzcy5zbGlkZTtcbiAgICAgIENvbXBvbmVudHMuSHRtbC5yb290LmNsYXNzTGlzdC5yZW1vdmUodHlwZVtHbGlkZS5zZXR0aW5ncy50eXBlXSk7XG4gICAgICBDb21wb25lbnRzLkh0bWwuc2xpZGVzLmZvckVhY2goZnVuY3Rpb24gKHNpYmxpbmcpIHtcbiAgICAgICAgc2libGluZy5jbGFzc0xpc3QucmVtb3ZlKHNsaWRlLmFjdGl2ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBDbGVhciBidWlsZGluZyBjbGFzc2VzOlxuICAgKiAtIG9uIGRlc3Ryb3lpbmcgdG8gYnJpbmcgSFRNTCB0byBpdHMgaW5pdGlhbCBzdGF0ZVxuICAgKiAtIG9uIHVwZGF0aW5nIHRvIHJlbW92ZSBjbGFzc2VzIGJlZm9yZSByZW1vdW50aW5nIGNvbXBvbmVudFxuICAgKi9cblxuICBFdmVudHMub24oWydkZXN0cm95JywgJ3VwZGF0ZSddLCBmdW5jdGlvbiAoKSB7XG4gICAgQnVpbGQucmVtb3ZlQ2xhc3NlcygpO1xuICB9KTtcbiAgLyoqXG4gICAqIFJlbW91bnQgY29tcG9uZW50OlxuICAgKiAtIG9uIHJlc2l6aW5nIG9mIHRoZSB3aW5kb3cgdG8gY2FsY3VsYXRlIG5ldyBkaW1lbnNpb25zXG4gICAqIC0gb24gdXBkYXRpbmcgc2V0dGluZ3MgdmlhIEFQSVxuICAgKi9cblxuICBFdmVudHMub24oWydyZXNpemUnLCAndXBkYXRlJ10sIGZ1bmN0aW9uICgpIHtcbiAgICBCdWlsZC5tb3VudCgpO1xuICB9KTtcbiAgLyoqXG4gICAqIFN3YXAgYWN0aXZlIGNsYXNzIG9mIGN1cnJlbnQgc2xpZGU6XG4gICAqIC0gYWZ0ZXIgZWFjaCBtb3ZlIHRvIHRoZSBuZXcgaW5kZXhcbiAgICovXG5cbiAgRXZlbnRzLm9uKCdtb3ZlLmFmdGVyJywgZnVuY3Rpb24gKCkge1xuICAgIEJ1aWxkLmFjdGl2ZUNsYXNzKCk7XG4gIH0pO1xuICByZXR1cm4gQnVpbGQ7XG59XG5cbmZ1bmN0aW9uIENsb25lcyAoR2xpZGUsIENvbXBvbmVudHMsIEV2ZW50cykge1xuICB2YXIgQ2xvbmVzID0ge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBwYXR0ZXJuIG1hcCBhbmQgY29sbGVjdCBzbGlkZXMgdG8gYmUgY2xvbmVkLlxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIHRoaXMuaXRlbXMgPSBbXTtcblxuICAgICAgaWYgKEdsaWRlLmlzVHlwZSgnY2Fyb3VzZWwnKSkge1xuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5jb2xsZWN0KCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvbGxlY3QgY2xvbmVzIHdpdGggcGF0dGVybi5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1tdfVxuICAgICAqL1xuICAgIGNvbGxlY3Q6IGZ1bmN0aW9uIGNvbGxlY3QoKSB7XG4gICAgICB2YXIgaXRlbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFtdO1xuICAgICAgdmFyIHNsaWRlcyA9IENvbXBvbmVudHMuSHRtbC5zbGlkZXM7XG4gICAgICB2YXIgX0dsaWRlJHNldHRpbmdzID0gR2xpZGUuc2V0dGluZ3MsXG4gICAgICAgICAgcGVyVmlldyA9IF9HbGlkZSRzZXR0aW5ncy5wZXJWaWV3LFxuICAgICAgICAgIGNsYXNzZXMgPSBfR2xpZGUkc2V0dGluZ3MuY2xhc3NlcyxcbiAgICAgICAgICBjbG9uaW5nUmF0aW8gPSBfR2xpZGUkc2V0dGluZ3MuY2xvbmluZ1JhdGlvO1xuXG4gICAgICBpZiAoc2xpZGVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICB2YXIgcGVla0luY3JlbWVudGVyID0gKyEhR2xpZGUuc2V0dGluZ3MucGVlaztcbiAgICAgICAgdmFyIGNsb25lQ291bnQgPSBwZXJWaWV3ICsgcGVla0luY3JlbWVudGVyICsgTWF0aC5yb3VuZChwZXJWaWV3IC8gMik7XG4gICAgICAgIHZhciBhcHBlbmQgPSBzbGlkZXMuc2xpY2UoMCwgY2xvbmVDb3VudCkucmV2ZXJzZSgpO1xuICAgICAgICB2YXIgcHJlcGVuZCA9IHNsaWRlcy5zbGljZShjbG9uZUNvdW50ICogLTEpO1xuXG4gICAgICAgIGZvciAodmFyIHIgPSAwOyByIDwgTWF0aC5tYXgoY2xvbmluZ1JhdGlvLCBNYXRoLmZsb29yKHBlclZpZXcgLyBzbGlkZXMubGVuZ3RoKSk7IHIrKykge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXBwZW5kLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY2xvbmUgPSBhcHBlbmRbaV0uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgY2xvbmUuY2xhc3NMaXN0LmFkZChjbGFzc2VzLnNsaWRlLmNsb25lKTtcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goY2xvbmUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBwcmVwZW5kLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIF9jbG9uZSA9IHByZXBlbmRbX2ldLmNsb25lTm9kZSh0cnVlKTtcblxuICAgICAgICAgICAgX2Nsb25lLmNsYXNzTGlzdC5hZGQoY2xhc3Nlcy5zbGlkZS5jbG9uZSk7XG5cbiAgICAgICAgICAgIGl0ZW1zLnVuc2hpZnQoX2Nsb25lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBcHBlbmQgY2xvbmVkIHNsaWRlcyB3aXRoIGdlbmVyYXRlZCBwYXR0ZXJuLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBhcHBlbmQ6IGZ1bmN0aW9uIGFwcGVuZCgpIHtcbiAgICAgIHZhciBpdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgICB2YXIgX0NvbXBvbmVudHMkSHRtbCA9IENvbXBvbmVudHMuSHRtbCxcbiAgICAgICAgICB3cmFwcGVyID0gX0NvbXBvbmVudHMkSHRtbC53cmFwcGVyLFxuICAgICAgICAgIHNsaWRlcyA9IF9Db21wb25lbnRzJEh0bWwuc2xpZGVzO1xuICAgICAgdmFyIGhhbGYgPSBNYXRoLmZsb29yKGl0ZW1zLmxlbmd0aCAvIDIpO1xuICAgICAgdmFyIHByZXBlbmQgPSBpdGVtcy5zbGljZSgwLCBoYWxmKS5yZXZlcnNlKCk7XG4gICAgICB2YXIgYXBwZW5kID0gaXRlbXMuc2xpY2UoaGFsZiAqIC0xKS5yZXZlcnNlKCk7XG4gICAgICB2YXIgd2lkdGggPSBcIlwiLmNvbmNhdChDb21wb25lbnRzLlNpemVzLnNsaWRlV2lkdGgsIFwicHhcIik7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXBwZW5kLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoYXBwZW5kW2ldKTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgcHJlcGVuZC5sZW5ndGg7IF9pMisrKSB7XG4gICAgICAgIHdyYXBwZXIuaW5zZXJ0QmVmb3JlKHByZXBlbmRbX2kyXSwgc2xpZGVzWzBdKTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgX2kzID0gMDsgX2kzIDwgaXRlbXMubGVuZ3RoOyBfaTMrKykge1xuICAgICAgICBpdGVtc1tfaTNdLnN0eWxlLndpZHRoID0gd2lkdGg7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhbGwgY2xvbmVkIHNsaWRlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICB2YXIgaXRlbXMgPSB0aGlzLml0ZW1zO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLnJlbW92ZUNoaWxkKGl0ZW1zW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGRlZmluZShDbG9uZXMsICdncm93Jywge1xuICAgIC8qKlxuICAgICAqIEdldHMgYWRkaXRpb25hbCBkaW1lbnNpb25zIHZhbHVlIGNhdXNlZCBieSBjbG9uZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gKENvbXBvbmVudHMuU2l6ZXMuc2xpZGVXaWR0aCArIENvbXBvbmVudHMuR2Fwcy52YWx1ZSkgKiBDbG9uZXMuaXRlbXMubGVuZ3RoO1xuICAgIH1cbiAgfSk7XG4gIC8qKlxuICAgKiBBcHBlbmQgYWRkaXRpb25hbCBzbGlkZSdzIGNsb25lczpcbiAgICogLSB3aGlsZSBnbGlkZSdzIHR5cGUgaXMgYGNhcm91c2VsYFxuICAgKi9cblxuICBFdmVudHMub24oJ3VwZGF0ZScsIGZ1bmN0aW9uICgpIHtcbiAgICBDbG9uZXMucmVtb3ZlKCk7XG4gICAgQ2xvbmVzLm1vdW50KCk7XG4gICAgQ2xvbmVzLmFwcGVuZCgpO1xuICB9KTtcbiAgLyoqXG4gICAqIEFwcGVuZCBhZGRpdGlvbmFsIHNsaWRlJ3MgY2xvbmVzOlxuICAgKiAtIHdoaWxlIGdsaWRlJ3MgdHlwZSBpcyBgY2Fyb3VzZWxgXG4gICAqL1xuXG4gIEV2ZW50cy5vbignYnVpbGQuYmVmb3JlJywgZnVuY3Rpb24gKCkge1xuICAgIGlmIChHbGlkZS5pc1R5cGUoJ2Nhcm91c2VsJykpIHtcbiAgICAgIENsb25lcy5hcHBlbmQoKTtcbiAgICB9XG4gIH0pO1xuICAvKipcbiAgICogUmVtb3ZlIGNsb25lcyBIVE1MRWxlbWVudHM6XG4gICAqIC0gb24gZGVzdHJveWluZywgdG8gYnJpbmcgSFRNTCB0byBpdHMgaW5pdGlhbCBzdGF0ZVxuICAgKi9cblxuICBFdmVudHMub24oJ2Rlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgQ2xvbmVzLnJlbW92ZSgpO1xuICB9KTtcbiAgcmV0dXJuIENsb25lcztcbn1cblxudmFyIEV2ZW50c0JpbmRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3QgYSBFdmVudHNCaW5kZXIgaW5zdGFuY2UuXG4gICAqL1xuICBmdW5jdGlvbiBFdmVudHNCaW5kZXIoKSB7XG4gICAgdmFyIGxpc3RlbmVycyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRXZlbnRzQmluZGVyKTtcblxuICAgIHRoaXMubGlzdGVuZXJzID0gbGlzdGVuZXJzO1xuICB9XG4gIC8qKlxuICAgKiBBZGRzIGV2ZW50cyBsaXN0ZW5lcnMgdG8gYXJyb3dzIEhUTUwgZWxlbWVudHMuXG4gICAqXG4gICAqIEBwYXJhbSAge1N0cmluZ3xBcnJheX0gZXZlbnRzXG4gICAqIEBwYXJhbSAge0VsZW1lbnR8V2luZG93fERvY3VtZW50fSBlbFxuICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2xvc3VyZVxuICAgKiBAcGFyYW0gIHtCb29sZWFufE9iamVjdH0gY2FwdHVyZVxuICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhFdmVudHNCaW5kZXIsIFt7XG4gICAga2V5OiBcIm9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uKGV2ZW50cywgZWwsIGNsb3N1cmUpIHtcbiAgICAgIHZhciBjYXB0dXJlID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiBmYWxzZTtcblxuICAgICAgaWYgKGlzU3RyaW5nKGV2ZW50cykpIHtcbiAgICAgICAgZXZlbnRzID0gW2V2ZW50c107XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50c1tpXV0gPSBjbG9zdXJlO1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50c1tpXSwgdGhpcy5saXN0ZW5lcnNbZXZlbnRzW2ldXSwgY2FwdHVyZSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgZXZlbnQgbGlzdGVuZXJzIGZyb20gYXJyb3dzIEhUTUwgZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd8QXJyYXl9IGV2ZW50c1xuICAgICAqIEBwYXJhbSAge0VsZW1lbnR8V2luZG93fERvY3VtZW50fSBlbFxuICAgICAqIEBwYXJhbSAge0Jvb2xlYW58T2JqZWN0fSBjYXB0dXJlXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9mZlwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvZmYoZXZlbnRzLCBlbCkge1xuICAgICAgdmFyIGNhcHR1cmUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuXG4gICAgICBpZiAoaXNTdHJpbmcoZXZlbnRzKSkge1xuICAgICAgICBldmVudHMgPSBbZXZlbnRzXTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudHNbaV0sIHRoaXMubGlzdGVuZXJzW2V2ZW50c1tpXV0sIGNhcHR1cmUpO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZXN0cm95IGNvbGxlY3RlZCBsaXN0ZW5lcnMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Vm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRlc3Ryb3lcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmxpc3RlbmVycztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRXZlbnRzQmluZGVyO1xufSgpO1xuXG5mdW5jdGlvbiBSZXNpemUgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgLyoqXG4gICAqIEluc3RhbmNlIG9mIHRoZSBiaW5kZXIgZm9yIERPTSBFdmVudHMuXG4gICAqXG4gICAqIEB0eXBlIHtFdmVudHNCaW5kZXJ9XG4gICAqL1xuICB2YXIgQmluZGVyID0gbmV3IEV2ZW50c0JpbmRlcigpO1xuICB2YXIgUmVzaXplID0ge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIHdpbmRvdyBiaW5kaW5ncy5cbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB0aGlzLmJpbmQoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQmluZHMgYHJlenNpemVgIGxpc3RlbmVyIHRvIHRoZSB3aW5kb3cuXG4gICAgICogSXQncyBhIGNvc3RseSBldmVudCwgc28gd2UgYXJlIGRlYm91bmNpbmcgaXQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIGJpbmQ6IGZ1bmN0aW9uIGJpbmQoKSB7XG4gICAgICBCaW5kZXIub24oJ3Jlc2l6ZScsIHdpbmRvdywgdGhyb3R0bGUoZnVuY3Rpb24gKCkge1xuICAgICAgICBFdmVudHMuZW1pdCgncmVzaXplJyk7XG4gICAgICB9LCBHbGlkZS5zZXR0aW5ncy50aHJvdHRsZSkpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBVbmJpbmRzIGxpc3RlbmVycyBmcm9tIHRoZSB3aW5kb3cuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHVuYmluZDogZnVuY3Rpb24gdW5iaW5kKCkge1xuICAgICAgQmluZGVyLm9mZigncmVzaXplJywgd2luZG93KTtcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBSZW1vdmUgYmluZGluZ3MgZnJvbSB3aW5kb3c6XG4gICAqIC0gb24gZGVzdHJveWluZywgdG8gcmVtb3ZlIGFkZGVkIEV2ZW50TGlzdGVuZXJcbiAgICovXG5cbiAgRXZlbnRzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgIFJlc2l6ZS51bmJpbmQoKTtcbiAgICBCaW5kZXIuZGVzdHJveSgpO1xuICB9KTtcbiAgcmV0dXJuIFJlc2l6ZTtcbn1cblxudmFyIFZBTElEX0RJUkVDVElPTlMgPSBbJ2x0cicsICdydGwnXTtcbnZhciBGTElQRURfTU9WRU1FTlRTID0ge1xuICAnPic6ICc8JyxcbiAgJzwnOiAnPicsXG4gICc9JzogJz0nXG59O1xuZnVuY3Rpb24gRGlyZWN0aW9uIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIHZhciBEaXJlY3Rpb24gPSB7XG4gICAgLyoqXG4gICAgICogU2V0dXBzIGdhcCB2YWx1ZSBiYXNlZCBvbiBzZXR0aW5ncy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgdGhpcy52YWx1ZSA9IEdsaWRlLnNldHRpbmdzLmRpcmVjdGlvbjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVzb2x2ZXMgcGF0dGVybiBiYXNlZCBvbiBkaXJlY3Rpb24gdmFsdWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwYXR0ZXJuXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHBhdHRlcm4pIHtcbiAgICAgIHZhciB0b2tlbiA9IHBhdHRlcm4uc2xpY2UoMCwgMSk7XG5cbiAgICAgIGlmICh0aGlzLmlzKCdydGwnKSkge1xuICAgICAgICByZXR1cm4gcGF0dGVybi5zcGxpdCh0b2tlbikuam9pbihGTElQRURfTU9WRU1FTlRTW3Rva2VuXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgdmFsdWUgb2YgZGlyZWN0aW9uIG1vZGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGlyZWN0aW9uXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgaXM6IGZ1bmN0aW9uIGlzKGRpcmVjdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPT09IGRpcmVjdGlvbjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQXBwbGllcyBkaXJlY3Rpb24gY2xhc3MgdG8gdGhlIHJvb3QgSFRNTCBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBhZGRDbGFzczogZnVuY3Rpb24gYWRkQ2xhc3MoKSB7XG4gICAgICBDb21wb25lbnRzLkh0bWwucm9vdC5jbGFzc0xpc3QuYWRkKEdsaWRlLnNldHRpbmdzLmNsYXNzZXMuZGlyZWN0aW9uW3RoaXMudmFsdWVdKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBkaXJlY3Rpb24gY2xhc3MgZnJvbSB0aGUgcm9vdCBIVE1MIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiByZW1vdmVDbGFzcygpIHtcbiAgICAgIENvbXBvbmVudHMuSHRtbC5yb290LmNsYXNzTGlzdC5yZW1vdmUoR2xpZGUuc2V0dGluZ3MuY2xhc3Nlcy5kaXJlY3Rpb25bdGhpcy52YWx1ZV0pO1xuICAgIH1cbiAgfTtcbiAgZGVmaW5lKERpcmVjdGlvbiwgJ3ZhbHVlJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgdmFsdWUgb2YgdGhlIGRpcmVjdGlvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gRGlyZWN0aW9uLl92O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHZhbHVlIG9mIHRoZSBkaXJlY3Rpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICBpZiAoVkFMSURfRElSRUNUSU9OUy5pbmRleE9mKHZhbHVlKSA+IC0xKSB7XG4gICAgICAgIERpcmVjdGlvbi5fdiA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FybignRGlyZWN0aW9uIHZhbHVlIG11c3QgYmUgYGx0cmAgb3IgYHJ0bGAnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICAvKipcbiAgICogQ2xlYXIgZGlyZWN0aW9uIGNsYXNzOlxuICAgKiAtIG9uIGRlc3Ryb3kgdG8gYnJpbmcgSFRNTCB0byBpdHMgaW5pdGlhbCBzdGF0ZVxuICAgKiAtIG9uIHVwZGF0ZSB0byByZW1vdmUgY2xhc3MgYmVmb3JlIHJlYXBwbGluZyBiZWxsb3dcbiAgICovXG5cbiAgRXZlbnRzLm9uKFsnZGVzdHJveScsICd1cGRhdGUnXSwgZnVuY3Rpb24gKCkge1xuICAgIERpcmVjdGlvbi5yZW1vdmVDbGFzcygpO1xuICB9KTtcbiAgLyoqXG4gICAqIFJlbW91bnQgY29tcG9uZW50OlxuICAgKiAtIG9uIHVwZGF0ZSB0byByZWZsZWN0IGNoYW5nZXMgaW4gZGlyZWN0aW9uIHZhbHVlXG4gICAqL1xuXG4gIEV2ZW50cy5vbigndXBkYXRlJywgZnVuY3Rpb24gKCkge1xuICAgIERpcmVjdGlvbi5tb3VudCgpO1xuICB9KTtcbiAgLyoqXG4gICAqIEFwcGx5IGRpcmVjdGlvbiBjbGFzczpcbiAgICogLSBiZWZvcmUgYnVpbGRpbmcgdG8gYXBwbHkgY2xhc3MgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAqIC0gb24gdXBkYXRpbmcgdG8gcmVhcHBseSBkaXJlY3Rpb24gY2xhc3MgdGhhdCBtYXkgY2hhbmdlZFxuICAgKi9cblxuICBFdmVudHMub24oWydidWlsZC5iZWZvcmUnLCAndXBkYXRlJ10sIGZ1bmN0aW9uICgpIHtcbiAgICBEaXJlY3Rpb24uYWRkQ2xhc3MoKTtcbiAgfSk7XG4gIHJldHVybiBEaXJlY3Rpb247XG59XG5cbi8qKlxuICogUmVmbGVjdHMgdmFsdWUgb2YgZ2xpZGUgbW92ZW1lbnQuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBHbGlkZVxuICogQHBhcmFtICB7T2JqZWN0fSBDb21wb25lbnRzXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIFJ0bCAoR2xpZGUsIENvbXBvbmVudHMpIHtcbiAgcmV0dXJuIHtcbiAgICAvKipcbiAgICAgKiBOZWdhdGVzIHRoZSBwYXNzZWQgdHJhbnNsYXRlIGlmIGdsaWRlIGlzIGluIFJUTCBvcHRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHRyYW5zbGF0ZVxuICAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAgKi9cbiAgICBtb2RpZnk6IGZ1bmN0aW9uIG1vZGlmeSh0cmFuc2xhdGUpIHtcbiAgICAgIGlmIChDb21wb25lbnRzLkRpcmVjdGlvbi5pcygncnRsJykpIHtcbiAgICAgICAgcmV0dXJuIC10cmFuc2xhdGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cmFuc2xhdGU7XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIFVwZGF0ZXMgZ2xpZGUgbW92ZW1lbnQgd2l0aCBhIGBnYXBgIHNldHRpbmdzLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gR2xpZGVcbiAqIEBwYXJhbSAge09iamVjdH0gQ29tcG9uZW50c1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBHYXAgKEdsaWRlLCBDb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgLyoqXG4gICAgICogTW9kaWZpZXMgcGFzc2VkIHRyYW5zbGF0ZSB2YWx1ZSB3aXRoIG51bWJlciBpbiB0aGUgYGdhcGAgc2V0dGluZ3MuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHRyYW5zbGF0ZVxuICAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAgKi9cbiAgICBtb2RpZnk6IGZ1bmN0aW9uIG1vZGlmeSh0cmFuc2xhdGUpIHtcbiAgICAgIHZhciBtdWx0aXBsaWVyID0gTWF0aC5mbG9vcih0cmFuc2xhdGUgLyBDb21wb25lbnRzLlNpemVzLnNsaWRlV2lkdGgpO1xuICAgICAgcmV0dXJuIHRyYW5zbGF0ZSArIENvbXBvbmVudHMuR2Fwcy52YWx1ZSAqIG11bHRpcGxpZXI7XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIFVwZGF0ZXMgZ2xpZGUgbW92ZW1lbnQgd2l0aCB3aWR0aCBvZiBhZGRpdGlvbmFsIGNsb25lcyB3aWR0aC5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IEdsaWRlXG4gKiBAcGFyYW0gIHtPYmplY3R9IENvbXBvbmVudHNcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gR3JvdyAoR2xpZGUsIENvbXBvbmVudHMpIHtcbiAgcmV0dXJuIHtcbiAgICAvKipcbiAgICAgKiBBZGRzIHRvIHRoZSBwYXNzZWQgdHJhbnNsYXRlIHdpZHRoIG9mIHRoZSBoYWxmIG9mIGNsb25lcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gdHJhbnNsYXRlXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIG1vZGlmeTogZnVuY3Rpb24gbW9kaWZ5KHRyYW5zbGF0ZSkge1xuICAgICAgcmV0dXJuIHRyYW5zbGF0ZSArIENvbXBvbmVudHMuQ2xvbmVzLmdyb3cgLyAyO1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBVcGRhdGVzIGdsaWRlIG1vdmVtZW50IHdpdGggYSBgcGVla2Agc2V0dGluZ3MuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBHbGlkZVxuICogQHBhcmFtICB7T2JqZWN0fSBDb21wb25lbnRzXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblxuZnVuY3Rpb24gUGVla2luZyAoR2xpZGUsIENvbXBvbmVudHMpIHtcbiAgcmV0dXJuIHtcbiAgICAvKipcbiAgICAgKiBNb2RpZmllcyBwYXNzZWQgdHJhbnNsYXRlIHZhbHVlIHdpdGggYSBgcGVla2Agc2V0dGluZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gdHJhbnNsYXRlXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIG1vZGlmeTogZnVuY3Rpb24gbW9kaWZ5KHRyYW5zbGF0ZSkge1xuICAgICAgaWYgKEdsaWRlLnNldHRpbmdzLmZvY3VzQXQgPj0gMCkge1xuICAgICAgICB2YXIgcGVlayA9IENvbXBvbmVudHMuUGVlay52YWx1ZTtcblxuICAgICAgICBpZiAoaXNPYmplY3QocGVlaykpIHtcbiAgICAgICAgICByZXR1cm4gdHJhbnNsYXRlIC0gcGVlay5iZWZvcmU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJhbnNsYXRlIC0gcGVlaztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRyYW5zbGF0ZTtcbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogVXBkYXRlcyBnbGlkZSBtb3ZlbWVudCB3aXRoIGEgYGZvY3VzQXRgIHNldHRpbmdzLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gR2xpZGVcbiAqIEBwYXJhbSAge09iamVjdH0gQ29tcG9uZW50c1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBGb2N1c2luZyAoR2xpZGUsIENvbXBvbmVudHMpIHtcbiAgcmV0dXJuIHtcbiAgICAvKipcbiAgICAgKiBNb2RpZmllcyBwYXNzZWQgdHJhbnNsYXRlIHZhbHVlIHdpdGggaW5kZXggaW4gdGhlIGBmb2N1c0F0YCBzZXR0aW5nLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB0cmFuc2xhdGVcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgbW9kaWZ5OiBmdW5jdGlvbiBtb2RpZnkodHJhbnNsYXRlKSB7XG4gICAgICB2YXIgZ2FwID0gQ29tcG9uZW50cy5HYXBzLnZhbHVlO1xuICAgICAgdmFyIHdpZHRoID0gQ29tcG9uZW50cy5TaXplcy53aWR0aDtcbiAgICAgIHZhciBmb2N1c0F0ID0gR2xpZGUuc2V0dGluZ3MuZm9jdXNBdDtcbiAgICAgIHZhciBzbGlkZVdpZHRoID0gQ29tcG9uZW50cy5TaXplcy5zbGlkZVdpZHRoO1xuXG4gICAgICBpZiAoZm9jdXNBdCA9PT0gJ2NlbnRlcicpIHtcbiAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZSAtICh3aWR0aCAvIDIgLSBzbGlkZVdpZHRoIC8gMik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cmFuc2xhdGUgLSBzbGlkZVdpZHRoICogZm9jdXNBdCAtIGdhcCAqIGZvY3VzQXQ7XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIEFwcGxpZXMgZGlmZnJlbnQgdHJhbnNmb3JtZXJzIG9uIHRyYW5zbGF0ZSB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IEdsaWRlXG4gKiBAcGFyYW0gIHtPYmplY3R9IENvbXBvbmVudHNcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuXG5mdW5jdGlvbiBtdXRhdG9yIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIC8qKlxuICAgKiBNZXJnZSBpbnN0YW5jZSB0cmFuc2Zvcm1lcnMgd2l0aCBjb2xsZWN0aW9uIG9mIGRlZmF1bHQgdHJhbnNmb3JtZXJzLlxuICAgKiBJdCdzIGltcG9ydGFudCB0aGF0IHRoZSBSdGwgY29tcG9uZW50IGJlIGxhc3Qgb24gdGhlIGxpc3QsXG4gICAqIHNvIGl0IHJlZmxlY3RzIGFsbCBwcmV2aW91cyB0cmFuc2Zvcm1hdGlvbnMuXG4gICAqXG4gICAqIEB0eXBlIHtBcnJheX1cbiAgICovXG4gIHZhciBUUkFOU0ZPUk1FUlMgPSBbR2FwLCBHcm93LCBQZWVraW5nLCBGb2N1c2luZ10uY29uY2F0KEdsaWRlLl90LCBbUnRsXSk7XG4gIHJldHVybiB7XG4gICAgLyoqXG4gICAgICogUGlwbGluZXMgdHJhbnNsYXRlIHZhbHVlIHdpdGggcmVnaXN0ZXJlZCB0cmFuc2Zvcm1lcnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHRyYW5zbGF0ZVxuICAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAgKi9cbiAgICBtdXRhdGU6IGZ1bmN0aW9uIG11dGF0ZSh0cmFuc2xhdGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgVFJBTlNGT1JNRVJTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciB0cmFuc2Zvcm1lciA9IFRSQU5TRk9STUVSU1tpXTtcblxuICAgICAgICBpZiAoaXNGdW5jdGlvbih0cmFuc2Zvcm1lcikgJiYgaXNGdW5jdGlvbih0cmFuc2Zvcm1lcigpLm1vZGlmeSkpIHtcbiAgICAgICAgICB0cmFuc2xhdGUgPSB0cmFuc2Zvcm1lcihHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKS5tb2RpZnkodHJhbnNsYXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3YXJuKCdUcmFuc2Zvcm1lciBzaG91bGQgYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gb2JqZWN0IHdpdGggYG1vZGlmeSgpYCBtZXRob2QnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJhbnNsYXRlO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gVHJhbnNsYXRlIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIHZhciBUcmFuc2xhdGUgPSB7XG4gICAgLyoqXG4gICAgICogU2V0cyB2YWx1ZSBvZiB0cmFuc2xhdGUgb24gSFRNTCBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdmFyIHRyYW5zZm9ybSA9IG11dGF0b3IoR2xpZGUsIENvbXBvbmVudHMpLm11dGF0ZSh2YWx1ZSk7XG4gICAgICB2YXIgdHJhbnNsYXRlM2QgPSBcInRyYW5zbGF0ZTNkKFwiLmNvbmNhdCgtMSAqIHRyYW5zZm9ybSwgXCJweCwgMHB4LCAwcHgpXCIpO1xuICAgICAgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIuc3R5bGUubW96VHJhbnNmb3JtID0gdHJhbnNsYXRlM2Q7IC8vIG5lZWRlZCBmb3Igc3VwcG9ydGVkIEZpcmVmb3ggMTAtMTVcblxuICAgICAgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gdHJhbnNsYXRlM2Q7IC8vIG5lZWRlZCBmb3Igc3VwcG9ydGVkIENocm9tZSAxMC0zNSwgU2FmYXJpIDUuMS04LCBhbmQgT3BlcmEgMTUtMjJcblxuICAgICAgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNsYXRlM2Q7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdmFsdWUgb2YgdHJhbnNsYXRlIGZyb20gSFRNTCBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0U3RhcnRJbmRleDogZnVuY3Rpb24gZ2V0U3RhcnRJbmRleCgpIHtcbiAgICAgIHZhciBsZW5ndGggPSBDb21wb25lbnRzLlNpemVzLmxlbmd0aDtcbiAgICAgIHZhciBpbmRleCA9IEdsaWRlLmluZGV4O1xuICAgICAgdmFyIHBlclZpZXcgPSBHbGlkZS5zZXR0aW5ncy5wZXJWaWV3O1xuXG4gICAgICBpZiAoQ29tcG9uZW50cy5SdW4uaXNPZmZzZXQoJz4nKSB8fCBDb21wb25lbnRzLlJ1bi5pc09mZnNldCgnfD4nKSkge1xuICAgICAgICByZXR1cm4gbGVuZ3RoICsgKGluZGV4IC0gcGVyVmlldyk7XG4gICAgICB9IC8vIFwibW9kdWxvIGxlbmd0aFwiIGNvbnZlcnRzIGFuIGluZGV4IHRoYXQgZXF1YWxzIGxlbmd0aCB0byB6ZXJvXG5cblxuICAgICAgcmV0dXJuIChpbmRleCArIHBlclZpZXcpICUgbGVuZ3RoO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0VHJhdmVsRGlzdGFuY2U6IGZ1bmN0aW9uIGdldFRyYXZlbERpc3RhbmNlKCkge1xuICAgICAgdmFyIHRyYXZlbERpc3RhbmNlID0gQ29tcG9uZW50cy5TaXplcy5zbGlkZVdpZHRoICogR2xpZGUuc2V0dGluZ3MucGVyVmlldztcblxuICAgICAgaWYgKENvbXBvbmVudHMuUnVuLmlzT2Zmc2V0KCc+JykgfHwgQ29tcG9uZW50cy5SdW4uaXNPZmZzZXQoJ3w+JykpIHtcbiAgICAgICAgLy8gcmV2ZXJzZSB0cmF2ZWwgZGlzdGFuY2Ugc28gdGhhdCB3ZSBkb24ndCBoYXZlIHRvIGNoYW5nZSBzdWJ0cmFjdCBvcGVyYXRpb25zXG4gICAgICAgIHJldHVybiB0cmF2ZWxEaXN0YW5jZSAqIC0xO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJhdmVsRGlzdGFuY2U7XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogU2V0IG5ldyB0cmFuc2xhdGUgdmFsdWU6XG4gICAqIC0gb24gbW92ZSB0byByZWZsZWN0IGluZGV4IGNoYW5nZVxuICAgKiAtIG9uIHVwZGF0aW5nIHZpYSBBUEkgdG8gcmVmbGVjdCBwb3NzaWJsZSBjaGFuZ2VzIGluIG9wdGlvbnNcbiAgICovXG5cbiAgRXZlbnRzLm9uKCdtb3ZlJywgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICBpZiAoIUdsaWRlLmlzVHlwZSgnY2Fyb3VzZWwnKSB8fCAhQ29tcG9uZW50cy5SdW4uaXNPZmZzZXQoKSkge1xuICAgICAgcmV0dXJuIFRyYW5zbGF0ZS5zZXQoY29udGV4dC5tb3ZlbWVudCk7XG4gICAgfVxuXG4gICAgQ29tcG9uZW50cy5UcmFuc2l0aW9uLmFmdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgIEV2ZW50cy5lbWl0KCd0cmFuc2xhdGUuanVtcCcpO1xuICAgICAgVHJhbnNsYXRlLnNldChDb21wb25lbnRzLlNpemVzLnNsaWRlV2lkdGggKiBHbGlkZS5pbmRleCk7XG4gICAgfSk7XG4gICAgdmFyIHN0YXJ0V2lkdGggPSBDb21wb25lbnRzLlNpemVzLnNsaWRlV2lkdGggKiBDb21wb25lbnRzLlRyYW5zbGF0ZS5nZXRTdGFydEluZGV4KCk7XG4gICAgcmV0dXJuIFRyYW5zbGF0ZS5zZXQoc3RhcnRXaWR0aCAtIENvbXBvbmVudHMuVHJhbnNsYXRlLmdldFRyYXZlbERpc3RhbmNlKCkpO1xuICB9KTtcbiAgLyoqXG4gICAqIFJlbW92ZSB0cmFuc2xhdGU6XG4gICAqIC0gb24gZGVzdHJveWluZyB0byBicmluZyBtYXJrdXAgdG8gaXRzIGluaXRhbCBzdGF0ZVxuICAgKi9cblxuICBFdmVudHMub24oJ2Rlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgVHJhbnNsYXRlLnJlbW92ZSgpO1xuICB9KTtcbiAgcmV0dXJuIFRyYW5zbGF0ZTtcbn1cblxuZnVuY3Rpb24gVHJhbnNpdGlvbiAoR2xpZGUsIENvbXBvbmVudHMsIEV2ZW50cykge1xuICAvKipcbiAgICogSG9sZHMgaW5hY3Rpdml0eSBzdGF0dXMgb2YgdHJhbnNpdGlvbi5cbiAgICogV2hlbiB0cnVlIHRyYW5zaXRpb24gaXMgbm90IGFwcGxpZWQuXG4gICAqXG4gICAqIEB0eXBlIHtCb29sZWFufVxuICAgKi9cbiAgdmFyIGRpc2FibGVkID0gZmFsc2U7XG4gIHZhciBUcmFuc2l0aW9uID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHN0cmluZyBvZiB0aGUgQ1NTIHRyYW5zaXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICovXG4gICAgY29tcG9zZTogZnVuY3Rpb24gY29tcG9zZShwcm9wZXJ0eSkge1xuICAgICAgdmFyIHNldHRpbmdzID0gR2xpZGUuc2V0dGluZ3M7XG5cbiAgICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHByb3BlcnR5LCBcIiBcIikuY29uY2F0KHRoaXMuZHVyYXRpb24sIFwibXMgXCIpLmNvbmNhdChzZXR0aW5ncy5hbmltYXRpb25UaW1pbmdGdW5jKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHByb3BlcnR5LCBcIiAwbXMgXCIpLmNvbmNhdChzZXR0aW5ncy5hbmltYXRpb25UaW1pbmdGdW5jKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB2YWx1ZSBvZiB0cmFuc2l0aW9uIG9uIEhUTUwgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nPX0gcHJvcGVydHlcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHNldDogZnVuY3Rpb24gc2V0KCkge1xuICAgICAgdmFyIHByb3BlcnR5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAndHJhbnNmb3JtJztcbiAgICAgIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLnN0eWxlLnRyYW5zaXRpb24gPSB0aGlzLmNvbXBvc2UocHJvcGVydHkpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHZhbHVlIG9mIHRyYW5zaXRpb24gZnJvbSBIVE1MIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIuc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSdW5zIGNhbGxiYWNrIGFmdGVyIGFuaW1hdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgYWZ0ZXI6IGZ1bmN0aW9uIGFmdGVyKGNhbGxiYWNrKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH0sIHRoaXMuZHVyYXRpb24pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBFbmFibGUgdHJhbnNpdGlvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgZW5hYmxlOiBmdW5jdGlvbiBlbmFibGUoKSB7XG4gICAgICBkaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5zZXQoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZSB0cmFuc2l0aW9uLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBkaXNhYmxlOiBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgICAgZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5zZXQoKTtcbiAgICB9XG4gIH07XG4gIGRlZmluZShUcmFuc2l0aW9uLCAnZHVyYXRpb24nLCB7XG4gICAgLyoqXG4gICAgICogR2V0cyBkdXJhdGlvbiBvZiB0aGUgdHJhbnNpdGlvbiBiYXNlZFxuICAgICAqIG9uIGN1cnJlbnRseSBydW5uaW5nIGFuaW1hdGlvbiB0eXBlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIHNldHRpbmdzID0gR2xpZGUuc2V0dGluZ3M7XG5cbiAgICAgIGlmIChHbGlkZS5pc1R5cGUoJ3NsaWRlcicpICYmIENvbXBvbmVudHMuUnVuLm9mZnNldCkge1xuICAgICAgICByZXR1cm4gc2V0dGluZ3MucmV3aW5kRHVyYXRpb247XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZXR0aW5ncy5hbmltYXRpb25EdXJhdGlvbjtcbiAgICB9XG4gIH0pO1xuICAvKipcbiAgICogU2V0IHRyYW5zaXRpb24gYHN0eWxlYCB2YWx1ZTpcbiAgICogLSBvbiBlYWNoIG1vdmluZywgYmVjYXVzZSBpdCBtYXkgYmUgY2xlYXJlZCBieSBvZmZzZXQgbW92ZVxuICAgKi9cblxuICBFdmVudHMub24oJ21vdmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgVHJhbnNpdGlvbi5zZXQoKTtcbiAgfSk7XG4gIC8qKlxuICAgKiBEaXNhYmxlIHRyYW5zaXRpb246XG4gICAqIC0gYmVmb3JlIGluaXRpYWwgYnVpbGQgdG8gYXZvaWQgdHJhbnNpdGlvbmluZyBmcm9tIGAwYCB0byBgc3RhcnRBdGAgaW5kZXhcbiAgICogLSB3aGlsZSByZXNpemluZyB3aW5kb3cgYW5kIHJlY2FsY3VsYXRpbmcgZGltZW5zaW9uc1xuICAgKiAtIG9uIGp1bXBpbmcgZnJvbSBvZmZzZXQgdHJhbnNpdGlvbiBhdCBzdGFydCBhbmQgZW5kIGVkZ2VzIGluIGBjYXJvdXNlbGAgdHlwZVxuICAgKi9cblxuICBFdmVudHMub24oWydidWlsZC5iZWZvcmUnLCAncmVzaXplJywgJ3RyYW5zbGF0ZS5qdW1wJ10sIGZ1bmN0aW9uICgpIHtcbiAgICBUcmFuc2l0aW9uLmRpc2FibGUoKTtcbiAgfSk7XG4gIC8qKlxuICAgKiBFbmFibGUgdHJhbnNpdGlvbjpcbiAgICogLSBvbiBlYWNoIHJ1bm5pbmcsIGJlY2F1c2UgaXQgbWF5IGJlIGRpc2FibGVkIGJ5IG9mZnNldCBtb3ZlXG4gICAqL1xuXG4gIEV2ZW50cy5vbigncnVuJywgZnVuY3Rpb24gKCkge1xuICAgIFRyYW5zaXRpb24uZW5hYmxlKCk7XG4gIH0pO1xuICAvKipcbiAgICogUmVtb3ZlIHRyYW5zaXRpb246XG4gICAqIC0gb24gZGVzdHJveWluZyB0byBicmluZyBtYXJrdXAgdG8gaXRzIGluaXRhbCBzdGF0ZVxuICAgKi9cblxuICBFdmVudHMub24oJ2Rlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgVHJhbnNpdGlvbi5yZW1vdmUoKTtcbiAgfSk7XG4gIHJldHVybiBUcmFuc2l0aW9uO1xufVxuXG4vKipcbiAqIFRlc3QgdmlhIGEgZ2V0dGVyIGluIHRoZSBvcHRpb25zIG9iamVjdCB0byBzZWVcbiAqIGlmIHRoZSBwYXNzaXZlIHByb3BlcnR5IGlzIGFjY2Vzc2VkLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvRXZlbnRMaXN0ZW5lck9wdGlvbnMvYmxvYi9naC1wYWdlcy9leHBsYWluZXIubWQjZmVhdHVyZS1kZXRlY3Rpb25cbiAqL1xudmFyIHN1cHBvcnRzUGFzc2l2ZSA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgb3B0cyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBzdXBwb3J0c1Bhc3NpdmUgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0UGFzc2l2ZScsIG51bGwsIG9wdHMpO1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdFBhc3NpdmUnLCBudWxsLCBvcHRzKTtcbn0gY2F0Y2ggKGUpIHt9XG5cbnZhciBzdXBwb3J0c1Bhc3NpdmUkMSA9IHN1cHBvcnRzUGFzc2l2ZTtcblxudmFyIFNUQVJUX0VWRU5UUyA9IFsndG91Y2hzdGFydCcsICdtb3VzZWRvd24nXTtcbnZhciBNT1ZFX0VWRU5UUyA9IFsndG91Y2htb3ZlJywgJ21vdXNlbW92ZSddO1xudmFyIEVORF9FVkVOVFMgPSBbJ3RvdWNoZW5kJywgJ3RvdWNoY2FuY2VsJywgJ21vdXNldXAnLCAnbW91c2VsZWF2ZSddO1xudmFyIE1PVVNFX0VWRU5UUyA9IFsnbW91c2Vkb3duJywgJ21vdXNlbW92ZScsICdtb3VzZXVwJywgJ21vdXNlbGVhdmUnXTtcbmZ1bmN0aW9uIFN3aXBlIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIC8qKlxuICAgKiBJbnN0YW5jZSBvZiB0aGUgYmluZGVyIGZvciBET00gRXZlbnRzLlxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRzQmluZGVyfVxuICAgKi9cbiAgdmFyIEJpbmRlciA9IG5ldyBFdmVudHNCaW5kZXIoKTtcbiAgdmFyIHN3aXBlU2luID0gMDtcbiAgdmFyIHN3aXBlU3RhcnRYID0gMDtcbiAgdmFyIHN3aXBlU3RhcnRZID0gMDtcbiAgdmFyIGRpc2FibGVkID0gZmFsc2U7XG4gIHZhciBjYXB0dXJlID0gc3VwcG9ydHNQYXNzaXZlJDEgPyB7XG4gICAgcGFzc2l2ZTogdHJ1ZVxuICB9IDogZmFsc2U7XG4gIHZhciBTd2lwZSA9IHtcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyBzd2lwZSBiaW5kaW5ncy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgdGhpcy5iaW5kU3dpcGVTdGFydCgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVyIGZvciBgc3dpcGVzdGFydGAgZXZlbnQuIENhbGN1bGF0ZXMgZW50cnkgcG9pbnRzIG9mIHRoZSB1c2VyJ3MgdGFwLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBzdGFydDogZnVuY3Rpb24gc3RhcnQoZXZlbnQpIHtcbiAgICAgIGlmICghZGlzYWJsZWQgJiYgIUdsaWRlLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgICAgICB2YXIgc3dpcGUgPSB0aGlzLnRvdWNoZXMoZXZlbnQpO1xuICAgICAgICBzd2lwZVNpbiA9IG51bGw7XG4gICAgICAgIHN3aXBlU3RhcnRYID0gdG9JbnQoc3dpcGUucGFnZVgpO1xuICAgICAgICBzd2lwZVN0YXJ0WSA9IHRvSW50KHN3aXBlLnBhZ2VZKTtcbiAgICAgICAgdGhpcy5iaW5kU3dpcGVNb3ZlKCk7XG4gICAgICAgIHRoaXMuYmluZFN3aXBlRW5kKCk7XG4gICAgICAgIEV2ZW50cy5lbWl0KCdzd2lwZS5zdGFydCcpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVyIGZvciBgc3dpcGVtb3ZlYCBldmVudC4gQ2FsY3VsYXRlcyB1c2VyJ3MgdGFwIGFuZ2xlIGFuZCBkaXN0YW5jZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIG1vdmU6IGZ1bmN0aW9uIG1vdmUoZXZlbnQpIHtcbiAgICAgIGlmICghR2xpZGUuZGlzYWJsZWQpIHtcbiAgICAgICAgdmFyIF9HbGlkZSRzZXR0aW5ncyA9IEdsaWRlLnNldHRpbmdzLFxuICAgICAgICAgICAgdG91Y2hBbmdsZSA9IF9HbGlkZSRzZXR0aW5ncy50b3VjaEFuZ2xlLFxuICAgICAgICAgICAgdG91Y2hSYXRpbyA9IF9HbGlkZSRzZXR0aW5ncy50b3VjaFJhdGlvLFxuICAgICAgICAgICAgY2xhc3NlcyA9IF9HbGlkZSRzZXR0aW5ncy5jbGFzc2VzO1xuICAgICAgICB2YXIgc3dpcGUgPSB0aGlzLnRvdWNoZXMoZXZlbnQpO1xuICAgICAgICB2YXIgc3ViRXhTeCA9IHRvSW50KHN3aXBlLnBhZ2VYKSAtIHN3aXBlU3RhcnRYO1xuICAgICAgICB2YXIgc3ViRXlTeSA9IHRvSW50KHN3aXBlLnBhZ2VZKSAtIHN3aXBlU3RhcnRZO1xuICAgICAgICB2YXIgcG93RVggPSBNYXRoLmFicyhzdWJFeFN4IDw8IDIpO1xuICAgICAgICB2YXIgcG93RVkgPSBNYXRoLmFicyhzdWJFeVN5IDw8IDIpO1xuICAgICAgICB2YXIgc3dpcGVIeXBvdGVudXNlID0gTWF0aC5zcXJ0KHBvd0VYICsgcG93RVkpO1xuICAgICAgICB2YXIgc3dpcGVDYXRoZXR1cyA9IE1hdGguc3FydChwb3dFWSk7XG4gICAgICAgIHN3aXBlU2luID0gTWF0aC5hc2luKHN3aXBlQ2F0aGV0dXMgLyBzd2lwZUh5cG90ZW51c2UpO1xuXG4gICAgICAgIGlmIChzd2lwZVNpbiAqIDE4MCAvIE1hdGguUEkgPCB0b3VjaEFuZ2xlKSB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgQ29tcG9uZW50cy5Nb3ZlLm1ha2Uoc3ViRXhTeCAqIHRvRmxvYXQodG91Y2hSYXRpbykpO1xuICAgICAgICAgIENvbXBvbmVudHMuSHRtbC5yb290LmNsYXNzTGlzdC5hZGQoY2xhc3Nlcy5kcmFnZ2luZyk7XG4gICAgICAgICAgRXZlbnRzLmVtaXQoJ3N3aXBlLm1vdmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlciBmb3IgYHN3aXBlZW5kYCBldmVudC4gRmluaXRpYWxpemVzIHVzZXIncyB0YXAgYW5kIGRlY2lkZXMgYWJvdXQgZ2xpZGUgbW92ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgZW5kOiBmdW5jdGlvbiBlbmQoZXZlbnQpIHtcbiAgICAgIGlmICghR2xpZGUuZGlzYWJsZWQpIHtcbiAgICAgICAgdmFyIF9HbGlkZSRzZXR0aW5nczIgPSBHbGlkZS5zZXR0aW5ncyxcbiAgICAgICAgICAgIHBlclN3aXBlID0gX0dsaWRlJHNldHRpbmdzMi5wZXJTd2lwZSxcbiAgICAgICAgICAgIHRvdWNoQW5nbGUgPSBfR2xpZGUkc2V0dGluZ3MyLnRvdWNoQW5nbGUsXG4gICAgICAgICAgICBjbGFzc2VzID0gX0dsaWRlJHNldHRpbmdzMi5jbGFzc2VzO1xuICAgICAgICB2YXIgc3dpcGUgPSB0aGlzLnRvdWNoZXMoZXZlbnQpO1xuICAgICAgICB2YXIgdGhyZXNob2xkID0gdGhpcy50aHJlc2hvbGQoZXZlbnQpO1xuICAgICAgICB2YXIgc3dpcGVEaXN0YW5jZSA9IHN3aXBlLnBhZ2VYIC0gc3dpcGVTdGFydFg7XG4gICAgICAgIHZhciBzd2lwZURlZyA9IHN3aXBlU2luICogMTgwIC8gTWF0aC5QSTtcbiAgICAgICAgdGhpcy5lbmFibGUoKTtcblxuICAgICAgICBpZiAoc3dpcGVEaXN0YW5jZSA+IHRocmVzaG9sZCAmJiBzd2lwZURlZyA8IHRvdWNoQW5nbGUpIHtcbiAgICAgICAgICBDb21wb25lbnRzLlJ1bi5tYWtlKENvbXBvbmVudHMuRGlyZWN0aW9uLnJlc29sdmUoXCJcIi5jb25jYXQocGVyU3dpcGUsIFwiPFwiKSkpO1xuICAgICAgICB9IGVsc2UgaWYgKHN3aXBlRGlzdGFuY2UgPCAtdGhyZXNob2xkICYmIHN3aXBlRGVnIDwgdG91Y2hBbmdsZSkge1xuICAgICAgICAgIENvbXBvbmVudHMuUnVuLm1ha2UoQ29tcG9uZW50cy5EaXJlY3Rpb24ucmVzb2x2ZShcIlwiLmNvbmNhdChwZXJTd2lwZSwgXCI+XCIpKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gV2hpbGUgc3dpcGUgZG9uJ3QgcmVhY2ggZGlzdGFuY2UgYXBwbHkgcHJldmlvdXMgdHJhbnNmb3JtLlxuICAgICAgICAgIENvbXBvbmVudHMuTW92ZS5tYWtlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBDb21wb25lbnRzLkh0bWwucm9vdC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzZXMuZHJhZ2dpbmcpO1xuICAgICAgICB0aGlzLnVuYmluZFN3aXBlTW92ZSgpO1xuICAgICAgICB0aGlzLnVuYmluZFN3aXBlRW5kKCk7XG4gICAgICAgIEV2ZW50cy5lbWl0KCdzd2lwZS5lbmQnKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQmluZHMgc3dpcGUncyBzdGFydGluZyBldmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgYmluZFN3aXBlU3RhcnQ6IGZ1bmN0aW9uIGJpbmRTd2lwZVN0YXJ0KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIF9HbGlkZSRzZXR0aW5nczMgPSBHbGlkZS5zZXR0aW5ncyxcbiAgICAgICAgICBzd2lwZVRocmVzaG9sZCA9IF9HbGlkZSRzZXR0aW5nczMuc3dpcGVUaHJlc2hvbGQsXG4gICAgICAgICAgZHJhZ1RocmVzaG9sZCA9IF9HbGlkZSRzZXR0aW5nczMuZHJhZ1RocmVzaG9sZDtcblxuICAgICAgaWYgKHN3aXBlVGhyZXNob2xkKSB7XG4gICAgICAgIEJpbmRlci5vbihTVEFSVF9FVkVOVFNbMF0sIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBfdGhpcy5zdGFydChldmVudCk7XG4gICAgICAgIH0sIGNhcHR1cmUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZHJhZ1RocmVzaG9sZCkge1xuICAgICAgICBCaW5kZXIub24oU1RBUlRfRVZFTlRTWzFdLCBDb21wb25lbnRzLkh0bWwud3JhcHBlciwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgX3RoaXMuc3RhcnQoZXZlbnQpO1xuICAgICAgICB9LCBjYXB0dXJlKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVW5iaW5kcyBzd2lwZSdzIHN0YXJ0aW5nIGV2ZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICB1bmJpbmRTd2lwZVN0YXJ0OiBmdW5jdGlvbiB1bmJpbmRTd2lwZVN0YXJ0KCkge1xuICAgICAgQmluZGVyLm9mZihTVEFSVF9FVkVOVFNbMF0sIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLCBjYXB0dXJlKTtcbiAgICAgIEJpbmRlci5vZmYoU1RBUlRfRVZFTlRTWzFdLCBDb21wb25lbnRzLkh0bWwud3JhcHBlciwgY2FwdHVyZSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEJpbmRzIHN3aXBlJ3MgbW92aW5nIGV2ZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBiaW5kU3dpcGVNb3ZlOiBmdW5jdGlvbiBiaW5kU3dpcGVNb3ZlKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIEJpbmRlci5vbihNT1ZFX0VWRU5UUywgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIsIHRocm90dGxlKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBfdGhpczIubW92ZShldmVudCk7XG4gICAgICB9LCBHbGlkZS5zZXR0aW5ncy50aHJvdHRsZSksIGNhcHR1cmUpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBVbmJpbmRzIHN3aXBlJ3MgbW92aW5nIGV2ZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICB1bmJpbmRTd2lwZU1vdmU6IGZ1bmN0aW9uIHVuYmluZFN3aXBlTW92ZSgpIHtcbiAgICAgIEJpbmRlci5vZmYoTU9WRV9FVkVOVFMsIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLCBjYXB0dXJlKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQmluZHMgc3dpcGUncyBlbmRpbmcgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIGJpbmRTd2lwZUVuZDogZnVuY3Rpb24gYmluZFN3aXBlRW5kKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIEJpbmRlci5vbihFTkRfRVZFTlRTLCBDb21wb25lbnRzLkh0bWwud3JhcHBlciwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIF90aGlzMy5lbmQoZXZlbnQpO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVuYmluZHMgc3dpcGUncyBlbmRpbmcgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHVuYmluZFN3aXBlRW5kOiBmdW5jdGlvbiB1bmJpbmRTd2lwZUVuZCgpIHtcbiAgICAgIEJpbmRlci5vZmYoRU5EX0VWRU5UUywgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBOb3JtYWxpemVzIGV2ZW50IHRvdWNoZXMgcG9pbnRzIGFjY29ydGluZyB0byBkaWZmZXJlbnQgdHlwZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICB0b3VjaGVzOiBmdW5jdGlvbiB0b3VjaGVzKGV2ZW50KSB7XG4gICAgICBpZiAoTU9VU0VfRVZFTlRTLmluZGV4T2YoZXZlbnQudHlwZSkgPiAtMSkge1xuICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBldmVudC50b3VjaGVzWzBdIHx8IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHZhbHVlIG9mIG1pbmltdW0gc3dpcGUgZGlzdGFuY2Ugc2V0dGluZ3MgYmFzZWQgb24gZXZlbnQgdHlwZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAgKi9cbiAgICB0aHJlc2hvbGQ6IGZ1bmN0aW9uIHRocmVzaG9sZChldmVudCkge1xuICAgICAgdmFyIHNldHRpbmdzID0gR2xpZGUuc2V0dGluZ3M7XG5cbiAgICAgIGlmIChNT1VTRV9FVkVOVFMuaW5kZXhPZihldmVudC50eXBlKSA+IC0xKSB7XG4gICAgICAgIHJldHVybiBzZXR0aW5ncy5kcmFnVGhyZXNob2xkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2V0dGluZ3Muc3dpcGVUaHJlc2hvbGQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEVuYWJsZXMgc3dpcGUgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtzZWxmfVxuICAgICAqL1xuICAgIGVuYWJsZTogZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgICAgZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIENvbXBvbmVudHMuVHJhbnNpdGlvbi5lbmFibGUoKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEaXNhYmxlcyBzd2lwZSBldmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3NlbGZ9XG4gICAgICovXG4gICAgZGlzYWJsZTogZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgICAgIGRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIENvbXBvbmVudHMuVHJhbnNpdGlvbi5kaXNhYmxlKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBBZGQgY29tcG9uZW50IGNsYXNzOlxuICAgKiAtIGFmdGVyIGluaXRpYWwgYnVpbGRpbmdcbiAgICovXG5cbiAgRXZlbnRzLm9uKCdidWlsZC5hZnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICBDb21wb25lbnRzLkh0bWwucm9vdC5jbGFzc0xpc3QuYWRkKEdsaWRlLnNldHRpbmdzLmNsYXNzZXMuc3dpcGVhYmxlKTtcbiAgfSk7XG4gIC8qKlxuICAgKiBSZW1vdmUgc3dpcGluZyBiaW5kaW5nczpcbiAgICogLSBvbiBkZXN0cm95aW5nLCB0byByZW1vdmUgYWRkZWQgRXZlbnRMaXN0ZW5lcnNcbiAgICovXG5cbiAgRXZlbnRzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgIFN3aXBlLnVuYmluZFN3aXBlU3RhcnQoKTtcbiAgICBTd2lwZS51bmJpbmRTd2lwZU1vdmUoKTtcbiAgICBTd2lwZS51bmJpbmRTd2lwZUVuZCgpO1xuICAgIEJpbmRlci5kZXN0cm95KCk7XG4gIH0pO1xuICByZXR1cm4gU3dpcGU7XG59XG5cbmZ1bmN0aW9uIEltYWdlcyAoR2xpZGUsIENvbXBvbmVudHMsIEV2ZW50cykge1xuICAvKipcbiAgICogSW5zdGFuY2Ugb2YgdGhlIGJpbmRlciBmb3IgRE9NIEV2ZW50cy5cbiAgICpcbiAgICogQHR5cGUge0V2ZW50c0JpbmRlcn1cbiAgICovXG4gIHZhciBCaW5kZXIgPSBuZXcgRXZlbnRzQmluZGVyKCk7XG4gIHZhciBJbWFnZXMgPSB7XG4gICAgLyoqXG4gICAgICogQmluZHMgbGlzdGVuZXIgdG8gZ2xpZGUgd3JhcHBlci5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgdGhpcy5iaW5kKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEJpbmRzIGBkcmFnc3RhcnRgIGV2ZW50IG9uIHdyYXBwZXIgdG8gcHJldmVudCBkcmFnZ2luZyBpbWFnZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIGJpbmQ6IGZ1bmN0aW9uIGJpbmQoKSB7XG4gICAgICBCaW5kZXIub24oJ2RyYWdzdGFydCcsIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLCB0aGlzLmRyYWdzdGFydCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVuYmluZHMgYGRyYWdzdGFydGAgZXZlbnQgb24gd3JhcHBlci5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgdW5iaW5kOiBmdW5jdGlvbiB1bmJpbmQoKSB7XG4gICAgICBCaW5kZXIub2ZmKCdkcmFnc3RhcnQnLCBDb21wb25lbnRzLkh0bWwud3JhcHBlcik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIuIFByZXZlbnRzIGRyYWdnaW5nLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBkcmFnc3RhcnQ6IGZ1bmN0aW9uIGRyYWdzdGFydChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBSZW1vdmUgYmluZGluZ3MgZnJvbSBpbWFnZXM6XG4gICAqIC0gb24gZGVzdHJveWluZywgdG8gcmVtb3ZlIGFkZGVkIEV2ZW50TGlzdGVuZXJzXG4gICAqL1xuXG4gIEV2ZW50cy5vbignZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICBJbWFnZXMudW5iaW5kKCk7XG4gICAgQmluZGVyLmRlc3Ryb3koKTtcbiAgfSk7XG4gIHJldHVybiBJbWFnZXM7XG59XG5cbmZ1bmN0aW9uIEFuY2hvcnMgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgLyoqXG4gICAqIEluc3RhbmNlIG9mIHRoZSBiaW5kZXIgZm9yIERPTSBFdmVudHMuXG4gICAqXG4gICAqIEB0eXBlIHtFdmVudHNCaW5kZXJ9XG4gICAqL1xuICB2YXIgQmluZGVyID0gbmV3IEV2ZW50c0JpbmRlcigpO1xuICAvKipcbiAgICogSG9sZHMgZGV0YWNoaW5nIHN0YXR1cyBvZiBhbmNob3JzLlxuICAgKiBQcmV2ZW50cyBkZXRhY2hpbmcgb2YgYWxyZWFkeSBkZXRhY2hlZCBhbmNob3JzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICovXG5cbiAgdmFyIGRldGFjaGVkID0gZmFsc2U7XG4gIC8qKlxuICAgKiBIb2xkcyBwcmV2ZW50aW5nIHN0YXR1cyBvZiBhbmNob3JzLlxuICAgKiBJZiBgdHJ1ZWAgcmVkaXJlY3Rpb24gYWZ0ZXIgY2xpY2sgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge0Jvb2xlYW59XG4gICAqL1xuXG4gIHZhciBwcmV2ZW50ZWQgPSBmYWxzZTtcbiAgdmFyIEFuY2hvcnMgPSB7XG4gICAgLyoqXG4gICAgICogU2V0dXBzIGEgaW5pdGlhbCBzdGF0ZSBvZiBhbmNob3JzIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtWb2lkfVxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIC8qKlxuICAgICAgICogSG9sZHMgY29sbGVjdGlvbiBvZiBhbmNob3JzIGVsZW1lbnRzLlxuICAgICAgICpcbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKiBAdHlwZSB7SFRNTENvbGxlY3Rpb259XG4gICAgICAgKi9cbiAgICAgIHRoaXMuX2EgPSBDb21wb25lbnRzLkh0bWwud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCdhJyk7XG4gICAgICB0aGlzLmJpbmQoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQmluZHMgZXZlbnRzIHRvIGFuY2hvcnMgaW5zaWRlIGEgdHJhY2suXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIGJpbmQ6IGZ1bmN0aW9uIGJpbmQoKSB7XG4gICAgICBCaW5kZXIub24oJ2NsaWNrJywgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIsIHRoaXMuY2xpY2spO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBVbmJpbmRzIGV2ZW50cyBhdHRhY2hlZCB0byBhbmNob3JzIGluc2lkZSBhIHRyYWNrLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICB1bmJpbmQ6IGZ1bmN0aW9uIHVuYmluZCgpIHtcbiAgICAgIEJpbmRlci5vZmYoJ2NsaWNrJywgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVyIGZvciBjbGljayBldmVudC4gUHJldmVudHMgY2xpY2tzIHdoZW4gZ2xpZGUgaXMgaW4gYHByZXZlbnRgIHN0YXR1cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge09iamVjdH0gZXZlbnRcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIGNsaWNrOiBmdW5jdGlvbiBjbGljayhldmVudCkge1xuICAgICAgaWYgKHByZXZlbnRlZCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGV0YWNoZXMgYW5jaG9ycyBjbGljayBldmVudCBpbnNpZGUgZ2xpZGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtzZWxmfVxuICAgICAqL1xuICAgIGRldGFjaDogZnVuY3Rpb24gZGV0YWNoKCkge1xuICAgICAgcHJldmVudGVkID0gdHJ1ZTtcblxuICAgICAgaWYgKCFkZXRhY2hlZCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLml0ZW1zW2ldLmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZGV0YWNoZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQXR0YWNoZXMgYW5jaG9ycyBjbGljayBldmVudHMgaW5zaWRlIGdsaWRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7c2VsZn1cbiAgICAgKi9cbiAgICBhdHRhY2g6IGZ1bmN0aW9uIGF0dGFjaCgpIHtcbiAgICAgIHByZXZlbnRlZCA9IGZhbHNlO1xuXG4gICAgICBpZiAoZGV0YWNoZWQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5pdGVtc1tpXS5kcmFnZ2FibGUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZGV0YWNoZWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9O1xuICBkZWZpbmUoQW5jaG9ycywgJ2l0ZW1zJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgY29sbGVjdGlvbiBvZiB0aGUgYXJyb3dzIEhUTUwgZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIEFuY2hvcnMuX2E7XG4gICAgfVxuICB9KTtcbiAgLyoqXG4gICAqIERldGFjaCBhbmNob3JzIGluc2lkZSBzbGlkZXM6XG4gICAqIC0gb24gc3dpcGluZywgc28gdGhleSB3b24ndCByZWRpcmVjdCB0byBpdHMgYGhyZWZgIGF0dHJpYnV0ZXNcbiAgICovXG5cbiAgRXZlbnRzLm9uKCdzd2lwZS5tb3ZlJywgZnVuY3Rpb24gKCkge1xuICAgIEFuY2hvcnMuZGV0YWNoKCk7XG4gIH0pO1xuICAvKipcbiAgICogQXR0YWNoIGFuY2hvcnMgaW5zaWRlIHNsaWRlczpcbiAgICogLSBhZnRlciBzd2lwaW5nIGFuZCB0cmFuc2l0aW9ucyBlbmRzLCBzbyB0aGV5IGNhbiByZWRpcmVjdCBhZnRlciBjbGljayBhZ2FpblxuICAgKi9cblxuICBFdmVudHMub24oJ3N3aXBlLmVuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBDb21wb25lbnRzLlRyYW5zaXRpb24uYWZ0ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgQW5jaG9ycy5hdHRhY2goKTtcbiAgICB9KTtcbiAgfSk7XG4gIC8qKlxuICAgKiBVbmJpbmQgYW5jaG9ycyBpbnNpZGUgc2xpZGVzOlxuICAgKiAtIG9uIGRlc3Ryb3lpbmcsIHRvIGJyaW5nIGFuY2hvcnMgdG8gaXRzIGluaXRpYWwgc3RhdGVcbiAgICovXG5cbiAgRXZlbnRzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgIEFuY2hvcnMuYXR0YWNoKCk7XG4gICAgQW5jaG9ycy51bmJpbmQoKTtcbiAgICBCaW5kZXIuZGVzdHJveSgpO1xuICB9KTtcbiAgcmV0dXJuIEFuY2hvcnM7XG59XG5cbnZhciBOQVZfU0VMRUNUT1IgPSAnW2RhdGEtZ2xpZGUtZWw9XCJjb250cm9sc1tuYXZdXCJdJztcbnZhciBDT05UUk9MU19TRUxFQ1RPUiA9ICdbZGF0YS1nbGlkZS1lbF49XCJjb250cm9sc1wiXSc7XG52YXIgUFJFVklPVVNfQ09OVFJPTFNfU0VMRUNUT1IgPSBcIlwiLmNvbmNhdChDT05UUk9MU19TRUxFQ1RPUiwgXCIgW2RhdGEtZ2xpZGUtZGlyKj1cXFwiPFxcXCJdXCIpO1xudmFyIE5FWFRfQ09OVFJPTFNfU0VMRUNUT1IgPSBcIlwiLmNvbmNhdChDT05UUk9MU19TRUxFQ1RPUiwgXCIgW2RhdGEtZ2xpZGUtZGlyKj1cXFwiPlxcXCJdXCIpO1xuZnVuY3Rpb24gQ29udHJvbHMgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgLyoqXG4gICAqIEluc3RhbmNlIG9mIHRoZSBiaW5kZXIgZm9yIERPTSBFdmVudHMuXG4gICAqXG4gICAqIEB0eXBlIHtFdmVudHNCaW5kZXJ9XG4gICAqL1xuICB2YXIgQmluZGVyID0gbmV3IEV2ZW50c0JpbmRlcigpO1xuICB2YXIgY2FwdHVyZSA9IHN1cHBvcnRzUGFzc2l2ZSQxID8ge1xuICAgIHBhc3NpdmU6IHRydWVcbiAgfSA6IGZhbHNlO1xuICB2YXIgQ29udHJvbHMgPSB7XG4gICAgLyoqXG4gICAgICogSW5pdHMgYXJyb3dzLiBCaW5kcyBldmVudHMgbGlzdGVuZXJzXG4gICAgICogdG8gdGhlIGFycm93cyBIVE1MIGVsZW1lbnRzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICAvKipcbiAgICAgICAqIENvbGxlY3Rpb24gb2YgbmF2aWdhdGlvbiBIVE1MIGVsZW1lbnRzLlxuICAgICAgICpcbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKiBAdHlwZSB7SFRNTENvbGxlY3Rpb259XG4gICAgICAgKi9cbiAgICAgIHRoaXMuX24gPSBDb21wb25lbnRzLkh0bWwucm9vdC5xdWVyeVNlbGVjdG9yQWxsKE5BVl9TRUxFQ1RPUik7XG4gICAgICAvKipcbiAgICAgICAqIENvbGxlY3Rpb24gb2YgY29udHJvbHMgSFRNTCBlbGVtZW50cy5cbiAgICAgICAqXG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICogQHR5cGUge0hUTUxDb2xsZWN0aW9ufVxuICAgICAgICovXG5cbiAgICAgIHRoaXMuX2MgPSBDb21wb25lbnRzLkh0bWwucm9vdC5xdWVyeVNlbGVjdG9yQWxsKENPTlRST0xTX1NFTEVDVE9SKTtcbiAgICAgIC8qKlxuICAgICAgICogQ29sbGVjdGlvbiBvZiBhcnJvdyBjb250cm9sIEhUTUwgZWxlbWVudHMuXG4gICAgICAgKlxuICAgICAgICogQHByaXZhdGVcbiAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgKi9cblxuICAgICAgdGhpcy5fYXJyb3dDb250cm9scyA9IHtcbiAgICAgICAgcHJldmlvdXM6IENvbXBvbmVudHMuSHRtbC5yb290LnF1ZXJ5U2VsZWN0b3JBbGwoUFJFVklPVVNfQ09OVFJPTFNfU0VMRUNUT1IpLFxuICAgICAgICBuZXh0OiBDb21wb25lbnRzLkh0bWwucm9vdC5xdWVyeVNlbGVjdG9yQWxsKE5FWFRfQ09OVFJPTFNfU0VMRUNUT1IpXG4gICAgICB9O1xuICAgICAgdGhpcy5hZGRCaW5kaW5ncygpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGFjdGl2ZSBjbGFzcyB0byBjdXJyZW50IHNsaWRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBzZXRBY3RpdmU6IGZ1bmN0aW9uIHNldEFjdGl2ZSgpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLmFkZENsYXNzKHRoaXMuX25baV0uY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFjdGl2ZSBjbGFzcyB0byBjdXJyZW50IHNsaWRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmVBY3RpdmU6IGZ1bmN0aW9uIHJlbW92ZUFjdGl2ZSgpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnJlbW92ZUNsYXNzKHRoaXMuX25baV0uY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGVzIGFjdGl2ZSBjbGFzcyBvbiBpdGVtcyBpbnNpZGUgbmF2aWdhdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBjb250cm9sc1xuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgYWRkQ2xhc3M6IGZ1bmN0aW9uIGFkZENsYXNzKGNvbnRyb2xzKSB7XG4gICAgICB2YXIgc2V0dGluZ3MgPSBHbGlkZS5zZXR0aW5ncztcbiAgICAgIHZhciBpdGVtID0gY29udHJvbHNbR2xpZGUuaW5kZXhdO1xuXG4gICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoc2V0dGluZ3MuY2xhc3Nlcy5uYXYuYWN0aXZlKTtcbiAgICAgICAgc2libGluZ3MoaXRlbSkuZm9yRWFjaChmdW5jdGlvbiAoc2libGluZykge1xuICAgICAgICAgIHNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZShzZXR0aW5ncy5jbGFzc2VzLm5hdi5hY3RpdmUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhY3RpdmUgY2xhc3MgZnJvbSBhY3RpdmUgY29udHJvbC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBjb250cm9sc1xuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGNvbnRyb2xzKSB7XG4gICAgICB2YXIgaXRlbSA9IGNvbnRyb2xzW0dsaWRlLmluZGV4XTtcblxuICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKEdsaWRlLnNldHRpbmdzLmNsYXNzZXMubmF2LmFjdGl2ZSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMsIHJlbW92ZXMgb3IgYWRkcyBgR2xpZGUuc2V0dGluZ3MuY2xhc3Nlcy5kaXNhYmxlZEFycm93YCBjbGFzcyBvbiB0aGUgY29udHJvbCBhcnJvd3NcbiAgICAgKi9cbiAgICBzZXRBcnJvd1N0YXRlOiBmdW5jdGlvbiBzZXRBcnJvd1N0YXRlKCkge1xuICAgICAgaWYgKEdsaWRlLnNldHRpbmdzLnJld2luZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBuZXh0ID0gQ29udHJvbHMuX2Fycm93Q29udHJvbHMubmV4dDtcbiAgICAgIHZhciBwcmV2aW91cyA9IENvbnRyb2xzLl9hcnJvd0NvbnRyb2xzLnByZXZpb3VzO1xuICAgICAgdGhpcy5yZXNldEFycm93U3RhdGUobmV4dCwgcHJldmlvdXMpO1xuXG4gICAgICBpZiAoR2xpZGUuaW5kZXggPT09IDApIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlQXJyb3cocHJldmlvdXMpO1xuICAgICAgfVxuXG4gICAgICBpZiAoR2xpZGUuaW5kZXggPT09IENvbXBvbmVudHMuUnVuLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmRpc2FibGVBcnJvdyhuZXh0KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBgR2xpZGUuc2V0dGluZ3MuY2xhc3Nlcy5kaXNhYmxlZEFycm93YCBmcm9tIGdpdmVuIE5vZGVMaXN0IGVsZW1lbnRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05vZGVMaXN0W119IGxpc3RzXG4gICAgICovXG4gICAgcmVzZXRBcnJvd1N0YXRlOiBmdW5jdGlvbiByZXNldEFycm93U3RhdGUoKSB7XG4gICAgICB2YXIgc2V0dGluZ3MgPSBHbGlkZS5zZXR0aW5ncztcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGxpc3RzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBsaXN0c1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgbGlzdHMuZm9yRWFjaChmdW5jdGlvbiAobGlzdCkge1xuICAgICAgICBsaXN0LmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoc2V0dGluZ3MuY2xhc3Nlcy5hcnJvdy5kaXNhYmxlZCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFkZHMgYEdsaWRlLnNldHRpbmdzLmNsYXNzZXMuZGlzYWJsZWRBcnJvd2AgdG8gZ2l2ZW4gTm9kZUxpc3QgZWxlbWVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Tm9kZUxpc3RbXX0gbGlzdHNcbiAgICAgKi9cbiAgICBkaXNhYmxlQXJyb3c6IGZ1bmN0aW9uIGRpc2FibGVBcnJvdygpIHtcbiAgICAgIHZhciBzZXR0aW5ncyA9IEdsaWRlLnNldHRpbmdzO1xuXG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGxpc3RzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGxpc3RzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIGxpc3RzLmZvckVhY2goZnVuY3Rpb24gKGxpc3QpIHtcbiAgICAgICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHNldHRpbmdzLmNsYXNzZXMuYXJyb3cuZGlzYWJsZWQpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGhhbmRsZXMgdG8gdGhlIGVhY2ggZ3JvdXAgb2YgY29udHJvbHMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIGFkZEJpbmRpbmdzOiBmdW5jdGlvbiBhZGRCaW5kaW5ncygpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fYy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLmJpbmQodGhpcy5fY1tpXS5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgaGFuZGxlcyBmcm9tIHRoZSBlYWNoIGdyb3VwIG9mIGNvbnRyb2xzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmVCaW5kaW5nczogZnVuY3Rpb24gcmVtb3ZlQmluZGluZ3MoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy51bmJpbmQodGhpcy5fY1tpXS5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEJpbmRzIGV2ZW50cyB0byBhcnJvd3MgSFRNTCBlbGVtZW50cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTENvbGxlY3Rpb259IGVsZW1lbnRzXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBiaW5kOiBmdW5jdGlvbiBiaW5kKGVsZW1lbnRzKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIEJpbmRlci5vbignY2xpY2snLCBlbGVtZW50c1tpXSwgdGhpcy5jbGljayk7XG4gICAgICAgIEJpbmRlci5vbigndG91Y2hzdGFydCcsIGVsZW1lbnRzW2ldLCB0aGlzLmNsaWNrLCBjYXB0dXJlKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVW5iaW5kcyBldmVudHMgYmluZGVkIHRvIHRoZSBhcnJvd3MgSFRNTCBlbGVtZW50cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTENvbGxlY3Rpb259IGVsZW1lbnRzXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICB1bmJpbmQ6IGZ1bmN0aW9uIHVuYmluZChlbGVtZW50cykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBCaW5kZXIub2ZmKFsnY2xpY2snLCAndG91Y2hzdGFydCddLCBlbGVtZW50c1tpXSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgYGNsaWNrYCBldmVudCBvbiB0aGUgYXJyb3dzIEhUTUwgZWxlbWVudHMuXG4gICAgICogTW92ZXMgc2xpZGVyIGluIGRpcmVjdGlvbiBnaXZlbiB2aWEgdGhlXG4gICAgICogYGRhdGEtZ2xpZGUtZGlyYCBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIGNsaWNrOiBmdW5jdGlvbiBjbGljayhldmVudCkge1xuICAgICAgaWYgKCFzdXBwb3J0c1Bhc3NpdmUkMSAmJiBldmVudC50eXBlID09PSAndG91Y2hzdGFydCcpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGRpcmVjdGlvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWdsaWRlLWRpcicpO1xuICAgICAgQ29tcG9uZW50cy5SdW4ubWFrZShDb21wb25lbnRzLkRpcmVjdGlvbi5yZXNvbHZlKGRpcmVjdGlvbikpO1xuICAgIH1cbiAgfTtcbiAgZGVmaW5lKENvbnRyb2xzLCAnaXRlbXMnLCB7XG4gICAgLyoqXG4gICAgICogR2V0cyBjb2xsZWN0aW9uIG9mIHRoZSBjb250cm9scyBIVE1MIGVsZW1lbnRzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnRbXX1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBDb250cm9scy5fYztcbiAgICB9XG4gIH0pO1xuICAvKipcbiAgICogU3dhcCBhY3RpdmUgY2xhc3Mgb2YgY3VycmVudCBuYXZpZ2F0aW9uIGl0ZW06XG4gICAqIC0gYWZ0ZXIgbW91bnRpbmcgdG8gc2V0IGl0IHRvIGluaXRpYWwgaW5kZXhcbiAgICogLSBhZnRlciBlYWNoIG1vdmUgdG8gdGhlIG5ldyBpbmRleFxuICAgKi9cblxuICBFdmVudHMub24oWydtb3VudC5hZnRlcicsICdtb3ZlLmFmdGVyJ10sIGZ1bmN0aW9uICgpIHtcbiAgICBDb250cm9scy5zZXRBY3RpdmUoKTtcbiAgfSk7XG4gIC8qKlxuICAgKiBBZGQgb3IgcmVtb3ZlIGRpc2FibGVkIGNsYXNzIG9mIGFycm93IGVsZW1lbnRzXG4gICAqL1xuXG4gIEV2ZW50cy5vbihbJ21vdW50LmFmdGVyJywgJ3J1biddLCBmdW5jdGlvbiAoKSB7XG4gICAgQ29udHJvbHMuc2V0QXJyb3dTdGF0ZSgpO1xuICB9KTtcbiAgLyoqXG4gICAqIFJlbW92ZSBiaW5kaW5ncyBhbmQgSFRNTCBDbGFzc2VzOlxuICAgKiAtIG9uIGRlc3Ryb3lpbmcsIHRvIGJyaW5nIG1hcmt1cCB0byBpdHMgaW5pdGlhbCBzdGF0ZVxuICAgKi9cblxuICBFdmVudHMub24oJ2Rlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgQ29udHJvbHMucmVtb3ZlQmluZGluZ3MoKTtcbiAgICBDb250cm9scy5yZW1vdmVBY3RpdmUoKTtcbiAgICBCaW5kZXIuZGVzdHJveSgpO1xuICB9KTtcbiAgcmV0dXJuIENvbnRyb2xzO1xufVxuXG5mdW5jdGlvbiBLZXlib2FyZCAoR2xpZGUsIENvbXBvbmVudHMsIEV2ZW50cykge1xuICAvKipcbiAgICogSW5zdGFuY2Ugb2YgdGhlIGJpbmRlciBmb3IgRE9NIEV2ZW50cy5cbiAgICpcbiAgICogQHR5cGUge0V2ZW50c0JpbmRlcn1cbiAgICovXG4gIHZhciBCaW5kZXIgPSBuZXcgRXZlbnRzQmluZGVyKCk7XG4gIHZhciBLZXlib2FyZCA9IHtcbiAgICAvKipcbiAgICAgKiBCaW5kcyBrZXlib2FyZCBldmVudHMgb24gY29tcG9uZW50IG1vdW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICBpZiAoR2xpZGUuc2V0dGluZ3Mua2V5Ym9hcmQpIHtcbiAgICAgICAgdGhpcy5iaW5kKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFkZHMga2V5Ym9hcmQgcHJlc3MgZXZlbnRzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBiaW5kOiBmdW5jdGlvbiBiaW5kKCkge1xuICAgICAgQmluZGVyLm9uKCdrZXl1cCcsIGRvY3VtZW50LCB0aGlzLnByZXNzKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBrZXlib2FyZCBwcmVzcyBldmVudHMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHVuYmluZDogZnVuY3Rpb24gdW5iaW5kKCkge1xuICAgICAgQmluZGVyLm9mZigna2V5dXAnLCBkb2N1bWVudCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMga2V5Ym9hcmQncyBhcnJvd3MgcHJlc3MgYW5kIG1vdmluZyBnbGlkZSBmb3dhcmQgYW5kIGJhY2t3YXJkLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBldmVudFxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgcHJlc3M6IGZ1bmN0aW9uIHByZXNzKGV2ZW50KSB7XG4gICAgICB2YXIgcGVyU3dpcGUgPSBHbGlkZS5zZXR0aW5ncy5wZXJTd2lwZTtcblxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5KSB7XG4gICAgICAgIENvbXBvbmVudHMuUnVuLm1ha2UoQ29tcG9uZW50cy5EaXJlY3Rpb24ucmVzb2x2ZShcIlwiLmNvbmNhdChwZXJTd2lwZSwgXCI+XCIpKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNykge1xuICAgICAgICBDb21wb25lbnRzLlJ1bi5tYWtlKENvbXBvbmVudHMuRGlyZWN0aW9uLnJlc29sdmUoXCJcIi5jb25jYXQocGVyU3dpcGUsIFwiPFwiKSkpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIFJlbW92ZSBiaW5kaW5ncyBmcm9tIGtleWJvYXJkOlxuICAgKiAtIG9uIGRlc3Ryb3lpbmcgdG8gcmVtb3ZlIGFkZGVkIGV2ZW50c1xuICAgKiAtIG9uIHVwZGF0aW5nIHRvIHJlbW92ZSBldmVudHMgYmVmb3JlIHJlbW91bnRpbmdcbiAgICovXG5cbiAgRXZlbnRzLm9uKFsnZGVzdHJveScsICd1cGRhdGUnXSwgZnVuY3Rpb24gKCkge1xuICAgIEtleWJvYXJkLnVuYmluZCgpO1xuICB9KTtcbiAgLyoqXG4gICAqIFJlbW91bnQgY29tcG9uZW50XG4gICAqIC0gb24gdXBkYXRpbmcgdG8gcmVmbGVjdCBwb3RlbnRpYWwgY2hhbmdlcyBpbiBzZXR0aW5nc1xuICAgKi9cblxuICBFdmVudHMub24oJ3VwZGF0ZScsIGZ1bmN0aW9uICgpIHtcbiAgICBLZXlib2FyZC5tb3VudCgpO1xuICB9KTtcbiAgLyoqXG4gICAqIERlc3Ryb3kgYmluZGVyOlxuICAgKiAtIG9uIGRlc3Ryb3lpbmcgdG8gcmVtb3ZlIGxpc3RlbmVyc1xuICAgKi9cblxuICBFdmVudHMub24oJ2Rlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgQmluZGVyLmRlc3Ryb3koKTtcbiAgfSk7XG4gIHJldHVybiBLZXlib2FyZDtcbn1cblxuZnVuY3Rpb24gQXV0b3BsYXkgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgLyoqXG4gICAqIEluc3RhbmNlIG9mIHRoZSBiaW5kZXIgZm9yIERPTSBFdmVudHMuXG4gICAqXG4gICAqIEB0eXBlIHtFdmVudHNCaW5kZXJ9XG4gICAqL1xuICB2YXIgQmluZGVyID0gbmV3IEV2ZW50c0JpbmRlcigpO1xuICB2YXIgQXV0b3BsYXkgPSB7XG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgYXV0b3BsYXlpbmcgYW5kIGV2ZW50cy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgdGhpcy5lbmFibGUoKTtcbiAgICAgIHRoaXMuc3RhcnQoKTtcblxuICAgICAgaWYgKEdsaWRlLnNldHRpbmdzLmhvdmVycGF1c2UpIHtcbiAgICAgICAgdGhpcy5iaW5kKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEVuYWJsZXMgYXV0b3BsYXlpbmdcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtWb2lkfVxuICAgICAqL1xuICAgIGVuYWJsZTogZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgICAgdGhpcy5fZSA9IHRydWU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERpc2FibGVzIGF1dG9wbGF5aW5nLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1ZvaWR9XG4gICAgICovXG4gICAgZGlzYWJsZTogZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgICAgIHRoaXMuX2UgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU3RhcnRzIGF1dG9wbGF5aW5nIGluIGNvbmZpZ3VyZWQgaW50ZXJ2YWwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW58TnVtYmVyfSBmb3JjZSBSdW4gYXV0b3BsYXlpbmcgd2l0aCBwYXNzZWQgaW50ZXJ2YWwgcmVnYXJkbGVzcyBvZiBgYXV0b3BsYXlgIHNldHRpbmdzXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBzdGFydDogZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAoIXRoaXMuX2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVuYWJsZSgpO1xuXG4gICAgICBpZiAoR2xpZGUuc2V0dGluZ3MuYXV0b3BsYXkpIHtcbiAgICAgICAgaWYgKGlzVW5kZWZpbmVkKHRoaXMuX2kpKSB7XG4gICAgICAgICAgdGhpcy5faSA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnN0b3AoKTtcblxuICAgICAgICAgICAgQ29tcG9uZW50cy5SdW4ubWFrZSgnPicpO1xuXG4gICAgICAgICAgICBfdGhpcy5zdGFydCgpO1xuXG4gICAgICAgICAgICBFdmVudHMuZW1pdCgnYXV0b3BsYXknKTtcbiAgICAgICAgICB9LCB0aGlzLnRpbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFN0b3BzIGF1dG9ydW5uaW5nIG9mIHRoZSBnbGlkZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgc3RvcDogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIHRoaXMuX2kgPSBjbGVhckludGVydmFsKHRoaXMuX2kpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTdG9wcyBhdXRvcGxheWluZyB3aGlsZSBtb3VzZSBpcyBvdmVyIGdsaWRlJ3MgYXJlYS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgYmluZDogZnVuY3Rpb24gYmluZCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBCaW5kZXIub24oJ21vdXNlb3ZlcicsIENvbXBvbmVudHMuSHRtbC5yb290LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfdGhpczIuX2UpIHtcbiAgICAgICAgICBfdGhpczIuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIEJpbmRlci5vbignbW91c2VvdXQnLCBDb21wb25lbnRzLkh0bWwucm9vdCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXMyLl9lKSB7XG4gICAgICAgICAgX3RoaXMyLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBVbmJpbmQgbW91c2VvdmVyIGV2ZW50cy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtWb2lkfVxuICAgICAqL1xuICAgIHVuYmluZDogZnVuY3Rpb24gdW5iaW5kKCkge1xuICAgICAgQmluZGVyLm9mZihbJ21vdXNlb3ZlcicsICdtb3VzZW91dCddLCBDb21wb25lbnRzLkh0bWwucm9vdCk7XG4gICAgfVxuICB9O1xuICBkZWZpbmUoQXV0b3BsYXksICd0aW1lJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgdGltZSBwZXJpb2QgdmFsdWUgZm9yIHRoZSBhdXRvcGxheSBpbnRlcnZhbC4gUHJpb3JpdGl6ZXNcbiAgICAgKiB0aW1lcyBpbiBgZGF0YS1nbGlkZS1hdXRvcGxheWAgYXR0cnVidXRlcyBvdmVyIG9wdGlvbnMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgYXV0b3BsYXkgPSBDb21wb25lbnRzLkh0bWwuc2xpZGVzW0dsaWRlLmluZGV4XS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZ2xpZGUtYXV0b3BsYXknKTtcblxuICAgICAgaWYgKGF1dG9wbGF5KSB7XG4gICAgICAgIHJldHVybiB0b0ludChhdXRvcGxheSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0b0ludChHbGlkZS5zZXR0aW5ncy5hdXRvcGxheSk7XG4gICAgfVxuICB9KTtcbiAgLyoqXG4gICAqIFN0b3AgYXV0b3BsYXlpbmcgYW5kIHVuYmluZCBldmVudHM6XG4gICAqIC0gb24gZGVzdHJveWluZywgdG8gY2xlYXIgZGVmaW5lZCBpbnRlcnZhbFxuICAgKiAtIG9uIHVwZGF0aW5nIHZpYSBBUEkgdG8gcmVzZXQgaW50ZXJ2YWwgdGhhdCBtYXkgY2hhbmdlZFxuICAgKi9cblxuICBFdmVudHMub24oWydkZXN0cm95JywgJ3VwZGF0ZSddLCBmdW5jdGlvbiAoKSB7XG4gICAgQXV0b3BsYXkudW5iaW5kKCk7XG4gIH0pO1xuICAvKipcbiAgICogU3RvcCBhdXRvcGxheWluZzpcbiAgICogLSBiZWZvcmUgZWFjaCBydW4sIHRvIHJlc3RhcnQgYXV0b3BsYXlpbmdcbiAgICogLSBvbiBwYXVzaW5nIHZpYSBBUElcbiAgICogLSBvbiBkZXN0cm95aW5nLCB0byBjbGVhciBkZWZpbmVkIGludGVydmFsXG4gICAqIC0gd2hpbGUgc3RhcnRpbmcgYSBzd2lwZVxuICAgKiAtIG9uIHVwZGF0aW5nIHZpYSBBUEkgdG8gcmVzZXQgaW50ZXJ2YWwgdGhhdCBtYXkgY2hhbmdlZFxuICAgKi9cblxuICBFdmVudHMub24oWydydW4uYmVmb3JlJywgJ3N3aXBlLnN0YXJ0JywgJ3VwZGF0ZSddLCBmdW5jdGlvbiAoKSB7XG4gICAgQXV0b3BsYXkuc3RvcCgpO1xuICB9KTtcbiAgRXZlbnRzLm9uKFsncGF1c2UnLCAnZGVzdHJveSddLCBmdW5jdGlvbiAoKSB7XG4gICAgQXV0b3BsYXkuZGlzYWJsZSgpO1xuICAgIEF1dG9wbGF5LnN0b3AoKTtcbiAgfSk7XG4gIC8qKlxuICAgKiBTdGFydCBhdXRvcGxheWluZzpcbiAgICogLSBhZnRlciBlYWNoIHJ1biwgdG8gcmVzdGFydCBhdXRvcGxheWluZ1xuICAgKiAtIG9uIHBsYXlpbmcgdmlhIEFQSVxuICAgKiAtIHdoaWxlIGVuZGluZyBhIHN3aXBlXG4gICAqL1xuXG4gIEV2ZW50cy5vbihbJ3J1bi5hZnRlcicsICdzd2lwZS5lbmQnXSwgZnVuY3Rpb24gKCkge1xuICAgIEF1dG9wbGF5LnN0YXJ0KCk7XG4gIH0pO1xuICAvKipcbiAgICogU3RhcnQgYXV0b3BsYXlpbmc6XG4gICAqIC0gYWZ0ZXIgZWFjaCBydW4sIHRvIHJlc3RhcnQgYXV0b3BsYXlpbmdcbiAgICogLSBvbiBwbGF5aW5nIHZpYSBBUElcbiAgICogLSB3aGlsZSBlbmRpbmcgYSBzd2lwZVxuICAgKi9cblxuICBFdmVudHMub24oWydwbGF5J10sIGZ1bmN0aW9uICgpIHtcbiAgICBBdXRvcGxheS5lbmFibGUoKTtcbiAgICBBdXRvcGxheS5zdGFydCgpO1xuICB9KTtcbiAgLyoqXG4gICAqIFJlbW91bnQgYXV0b3BsYXlpbmc6XG4gICAqIC0gb24gdXBkYXRpbmcgdmlhIEFQSSB0byByZXNldCBpbnRlcnZhbCB0aGF0IG1heSBjaGFuZ2VkXG4gICAqL1xuXG4gIEV2ZW50cy5vbigndXBkYXRlJywgZnVuY3Rpb24gKCkge1xuICAgIEF1dG9wbGF5Lm1vdW50KCk7XG4gIH0pO1xuICAvKipcbiAgICogRGVzdHJveSBhIGJpbmRlcjpcbiAgICogLSBvbiBkZXN0cm95aW5nIGdsaWRlIGluc3RhbmNlIHRvIGNsZWFydXAgbGlzdGVuZXJzXG4gICAqL1xuXG4gIEV2ZW50cy5vbignZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICBCaW5kZXIuZGVzdHJveSgpO1xuICB9KTtcbiAgcmV0dXJuIEF1dG9wbGF5O1xufVxuXG4vKipcbiAqIFNvcnRzIGtleXMgb2YgYnJlYWtwb2ludCBvYmplY3Qgc28gdGhleSB3aWxsIGJlIG9yZGVyZWQgZnJvbSBsb3dlciB0byBiaWdnZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBvaW50c1xuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuXG5mdW5jdGlvbiBzb3J0QnJlYWtwb2ludHMocG9pbnRzKSB7XG4gIGlmIChpc09iamVjdChwb2ludHMpKSB7XG4gICAgcmV0dXJuIHNvcnRLZXlzKHBvaW50cyk7XG4gIH0gZWxzZSB7XG4gICAgd2FybihcIkJyZWFrcG9pbnRzIG9wdGlvbiBtdXN0IGJlIGFuIG9iamVjdFwiKTtcbiAgfVxuXG4gIHJldHVybiB7fTtcbn1cblxuZnVuY3Rpb24gQnJlYWtwb2ludHMgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgLyoqXG4gICAqIEluc3RhbmNlIG9mIHRoZSBiaW5kZXIgZm9yIERPTSBFdmVudHMuXG4gICAqXG4gICAqIEB0eXBlIHtFdmVudHNCaW5kZXJ9XG4gICAqL1xuICB2YXIgQmluZGVyID0gbmV3IEV2ZW50c0JpbmRlcigpO1xuICAvKipcbiAgICogSG9sZHMgcmVmZXJlbmNlIHRvIHNldHRpbmdzLlxuICAgKlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cblxuICB2YXIgc2V0dGluZ3MgPSBHbGlkZS5zZXR0aW5ncztcbiAgLyoqXG4gICAqIEhvbGRzIHJlZmVyZW5jZSB0byBicmVha3BvaW50cyBvYmplY3QgaW4gc2V0dGluZ3MuIFNvcnRzIGJyZWFrcG9pbnRzXG4gICAqIGZyb20gc21hbGxlciB0byBsYXJnZXIuIEl0IGlzIHJlcXVpcmVkIGluIG9yZGVyIHRvIHByb3BlclxuICAgKiBtYXRjaGluZyBjdXJyZW50bHkgYWN0aXZlIGJyZWFrcG9pbnQgc2V0dGluZ3MuXG4gICAqXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuXG4gIHZhciBwb2ludHMgPSBzb3J0QnJlYWtwb2ludHMoc2V0dGluZ3MuYnJlYWtwb2ludHMpO1xuICAvKipcbiAgICogQ2FjaGUgaW5pdGlhbCBzZXR0aW5ncyBiZWZvcmUgb3ZlcndyaXR0aW5nLlxuICAgKlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cblxuICB2YXIgZGVmYXVsdHMgPSBPYmplY3QuYXNzaWduKHt9LCBzZXR0aW5ncyk7XG4gIHZhciBCcmVha3BvaW50cyA9IHtcbiAgICAvKipcbiAgICAgKiBNYXRjaGVzIHNldHRpbmdzIGZvciBjdXJyZWN0bHkgbWF0Y2hpbmcgbWVkaWEgYnJlYWtwb2ludC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwb2ludHNcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIG1hdGNoOiBmdW5jdGlvbiBtYXRjaChwb2ludHMpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lm1hdGNoTWVkaWEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGZvciAodmFyIHBvaW50IGluIHBvaW50cykge1xuICAgICAgICAgIGlmIChwb2ludHMuaGFzT3duUHJvcGVydHkocG9pbnQpKSB7XG4gICAgICAgICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiBcIi5jb25jYXQocG9pbnQsIFwicHgpXCIpKS5tYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwb2ludHNbcG9pbnRdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogT3ZlcndyaXRlIGluc3RhbmNlIHNldHRpbmdzIHdpdGggY3VycmVudGx5IG1hdGNoaW5nIGJyZWFrcG9pbnQgc2V0dGluZ3MuXG4gICAqIFRoaXMgaGFwcGVucyByaWdodCBhZnRlciBjb21wb25lbnQgaW5pdGlhbGl6YXRpb24uXG4gICAqL1xuXG4gIE9iamVjdC5hc3NpZ24oc2V0dGluZ3MsIEJyZWFrcG9pbnRzLm1hdGNoKHBvaW50cykpO1xuICAvKipcbiAgICogVXBkYXRlIGdsaWRlIHdpdGggc2V0dGluZ3Mgb2YgbWF0Y2hlZCBicmVrcG9pbnQ6XG4gICAqIC0gd2luZG93IHJlc2l6ZSB0byB1cGRhdGUgc2xpZGVyXG4gICAqL1xuXG4gIEJpbmRlci5vbigncmVzaXplJywgd2luZG93LCB0aHJvdHRsZShmdW5jdGlvbiAoKSB7XG4gICAgR2xpZGUuc2V0dGluZ3MgPSBtZXJnZU9wdGlvbnMoc2V0dGluZ3MsIEJyZWFrcG9pbnRzLm1hdGNoKHBvaW50cykpO1xuICB9LCBHbGlkZS5zZXR0aW5ncy50aHJvdHRsZSkpO1xuICAvKipcbiAgICogUmVzb3J0IGFuZCB1cGRhdGUgZGVmYXVsdCBzZXR0aW5nczpcbiAgICogLSBvbiByZWluaXQgdmlhIEFQSSwgc28gYnJlYWtwb2ludCBtYXRjaGluZyB3aWxsIGJlIHBlcmZvcm1lZCB3aXRoIG9wdGlvbnNcbiAgICovXG5cbiAgRXZlbnRzLm9uKCd1cGRhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgcG9pbnRzID0gc29ydEJyZWFrcG9pbnRzKHBvaW50cyk7XG4gICAgZGVmYXVsdHMgPSBPYmplY3QuYXNzaWduKHt9LCBzZXR0aW5ncyk7XG4gIH0pO1xuICAvKipcbiAgICogVW5iaW5kIHJlc2l6ZSBsaXN0ZW5lcjpcbiAgICogLSBvbiBkZXN0cm95aW5nLCB0byBicmluZyBtYXJrdXAgdG8gaXRzIGluaXRpYWwgc3RhdGVcbiAgICovXG5cbiAgRXZlbnRzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgIEJpbmRlci5vZmYoJ3Jlc2l6ZScsIHdpbmRvdyk7XG4gIH0pO1xuICByZXR1cm4gQnJlYWtwb2ludHM7XG59XG5cbnZhciBDT01QT05FTlRTID0ge1xuICAvLyBSZXF1aXJlZFxuICBIdG1sOiBIdG1sLFxuICBUcmFuc2xhdGU6IFRyYW5zbGF0ZSxcbiAgVHJhbnNpdGlvbjogVHJhbnNpdGlvbixcbiAgRGlyZWN0aW9uOiBEaXJlY3Rpb24sXG4gIFBlZWs6IFBlZWssXG4gIFNpemVzOiBTaXplcyxcbiAgR2FwczogR2FwcyxcbiAgTW92ZTogTW92ZSxcbiAgQ2xvbmVzOiBDbG9uZXMsXG4gIFJlc2l6ZTogUmVzaXplLFxuICBCdWlsZDogQnVpbGQsXG4gIFJ1bjogUnVuLFxuICAvLyBPcHRpb25hbFxuICBTd2lwZTogU3dpcGUsXG4gIEltYWdlczogSW1hZ2VzLFxuICBBbmNob3JzOiBBbmNob3JzLFxuICBDb250cm9sczogQ29udHJvbHMsXG4gIEtleWJvYXJkOiBLZXlib2FyZCxcbiAgQXV0b3BsYXk6IEF1dG9wbGF5LFxuICBCcmVha3BvaW50czogQnJlYWtwb2ludHNcbn07XG5cbnZhciBHbGlkZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvcmUpIHtcbiAgX2luaGVyaXRzKEdsaWRlLCBfQ29yZSk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihHbGlkZSk7XG5cbiAgZnVuY3Rpb24gR2xpZGUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdsaWRlKTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhHbGlkZSwgW3tcbiAgICBrZXk6IFwibW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB2YXIgZXh0ZW5zaW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgICByZXR1cm4gX2dldChfZ2V0UHJvdG90eXBlT2YoR2xpZGUucHJvdG90eXBlKSwgXCJtb3VudFwiLCB0aGlzKS5jYWxsKHRoaXMsIE9iamVjdC5hc3NpZ24oe30sIENPTVBPTkVOVFMsIGV4dGVuc2lvbnMpKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gR2xpZGU7XG59KEdsaWRlJDEpO1xuXG5leHBvcnQgeyBHbGlkZSBhcyBkZWZhdWx0IH07XG4iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuZXhwb3J0cy50b0J5dGVBcnJheSA9IHRvQnl0ZUFycmF5XG5leHBvcnRzLmZyb21CeXRlQXJyYXkgPSBmcm9tQnl0ZUFycmF5XG5cbnZhciBsb29rdXAgPSBbXVxudmFyIHJldkxvb2t1cCA9IFtdXG52YXIgQXJyID0gdHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnID8gVWludDhBcnJheSA6IEFycmF5XG5cbnZhciBjb2RlID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nXG5mb3IgKHZhciBpID0gMCwgbGVuID0gY29kZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICBsb29rdXBbaV0gPSBjb2RlW2ldXG4gIHJldkxvb2t1cFtjb2RlLmNoYXJDb2RlQXQoaSldID0gaVxufVxuXG4vLyBTdXBwb3J0IGRlY29kaW5nIFVSTC1zYWZlIGJhc2U2NCBzdHJpbmdzLCBhcyBOb2RlLmpzIGRvZXMuXG4vLyBTZWU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Jhc2U2NCNVUkxfYXBwbGljYXRpb25zXG5yZXZMb29rdXBbJy0nLmNoYXJDb2RlQXQoMCldID0gNjJcbnJldkxvb2t1cFsnXycuY2hhckNvZGVBdCgwKV0gPSA2M1xuXG5mdW5jdGlvbiBnZXRMZW5zIChiNjQpIHtcbiAgdmFyIGxlbiA9IGI2NC5sZW5ndGhcblxuICBpZiAobGVuICUgNCA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuICB9XG5cbiAgLy8gVHJpbSBvZmYgZXh0cmEgYnl0ZXMgYWZ0ZXIgcGxhY2Vob2xkZXIgYnl0ZXMgYXJlIGZvdW5kXG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2JlYXRnYW1taXQvYmFzZTY0LWpzL2lzc3Vlcy80MlxuICB2YXIgdmFsaWRMZW4gPSBiNjQuaW5kZXhPZignPScpXG4gIGlmICh2YWxpZExlbiA9PT0gLTEpIHZhbGlkTGVuID0gbGVuXG5cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IHZhbGlkTGVuID09PSBsZW5cbiAgICA/IDBcbiAgICA6IDQgLSAodmFsaWRMZW4gJSA0KVxuXG4gIHJldHVybiBbdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbl1cbn1cblxuLy8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChiNjQpIHtcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gX2J5dGVMZW5ndGggKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikge1xuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gdG9CeXRlQXJyYXkgKGI2NCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cblxuICB2YXIgYXJyID0gbmV3IEFycihfYnl0ZUxlbmd0aChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pKVxuXG4gIHZhciBjdXJCeXRlID0gMFxuXG4gIC8vIGlmIHRoZXJlIGFyZSBwbGFjZWhvbGRlcnMsIG9ubHkgZ2V0IHVwIHRvIHRoZSBsYXN0IGNvbXBsZXRlIDQgY2hhcnNcbiAgdmFyIGxlbiA9IHBsYWNlSG9sZGVyc0xlbiA+IDBcbiAgICA/IHZhbGlkTGVuIC0gNFxuICAgIDogdmFsaWRMZW5cblxuICB2YXIgaVxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTgpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCAxMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildIDw8IDYpIHxcbiAgICAgIHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMyldXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDE2KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAyKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA+PiA0KVxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMSkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxMCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDQpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA+PiAyKVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcbiAgcmV0dXJuIGxvb2t1cFtudW0gPj4gMTggJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiAxMiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDYgJiAweDNGXSArXG4gICAgbG9va3VwW251bSAmIDB4M0ZdXG59XG5cbmZ1bmN0aW9uIGVuY29kZUNodW5rICh1aW50OCwgc3RhcnQsIGVuZCkge1xuICB2YXIgdG1wXG4gIHZhciBvdXRwdXQgPSBbXVxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gMykge1xuICAgIHRtcCA9XG4gICAgICAoKHVpbnQ4W2ldIDw8IDE2KSAmIDB4RkYwMDAwKSArXG4gICAgICAoKHVpbnQ4W2kgKyAxXSA8PCA4KSAmIDB4RkYwMCkgK1xuICAgICAgKHVpbnQ4W2kgKyAyXSAmIDB4RkYpXG4gICAgb3V0cHV0LnB1c2godHJpcGxldFRvQmFzZTY0KHRtcCkpXG4gIH1cbiAgcmV0dXJuIG91dHB1dC5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBmcm9tQnl0ZUFycmF5ICh1aW50OCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW4gPSB1aW50OC5sZW5ndGhcbiAgdmFyIGV4dHJhQnl0ZXMgPSBsZW4gJSAzIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG4gIHZhciBwYXJ0cyA9IFtdXG4gIHZhciBtYXhDaHVua0xlbmd0aCA9IDE2MzgzIC8vIG11c3QgYmUgbXVsdGlwbGUgb2YgM1xuXG4gIC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbjIgPSBsZW4gLSBleHRyYUJ5dGVzOyBpIDwgbGVuMjsgaSArPSBtYXhDaHVua0xlbmd0aCkge1xuICAgIHBhcnRzLnB1c2goZW5jb2RlQ2h1bmsodWludDgsIGksIChpICsgbWF4Q2h1bmtMZW5ndGgpID4gbGVuMiA/IGxlbjIgOiAoaSArIG1heENodW5rTGVuZ3RoKSkpXG4gIH1cblxuICAvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG4gIGlmIChleHRyYUJ5dGVzID09PSAxKSB7XG4gICAgdG1wID0gdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAyXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCA0KSAmIDB4M0ZdICtcbiAgICAgICc9PSdcbiAgICApXG4gIH0gZWxzZSBpZiAoZXh0cmFCeXRlcyA9PT0gMikge1xuICAgIHRtcCA9ICh1aW50OFtsZW4gLSAyXSA8PCA4KSArIHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMTBdICtcbiAgICAgIGxvb2t1cFsodG1wID4+IDQpICYgMHgzRl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgMikgJiAweDNGXSArXG4gICAgICAnPSdcbiAgICApXG4gIH1cblxuICByZXR1cm4gcGFydHMuam9pbignJylcbn1cbiIsIi8qIVxuICogVGhlIGJ1ZmZlciBtb2R1bGUgZnJvbSBub2RlLmpzLCBmb3IgdGhlIGJyb3dzZXIuXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGJhc2U2NCA9IHJlcXVpcmUoJ2Jhc2U2NC1qcycpXG5jb25zdCBpZWVlNzU0ID0gcmVxdWlyZSgnaWVlZTc1NCcpXG5jb25zdCBjdXN0b21JbnNwZWN0U3ltYm9sID1cbiAgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbFsnZm9yJ10gPT09ICdmdW5jdGlvbicpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgPyBTeW1ib2xbJ2ZvciddKCdub2RlanMudXRpbC5pbnNwZWN0LmN1c3RvbScpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgOiBudWxsXG5cbmV4cG9ydHMuQnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLlNsb3dCdWZmZXIgPSBTbG93QnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcblxuY29uc3QgS19NQVhfTEVOR1RIID0gMHg3ZmZmZmZmZlxuZXhwb3J0cy5rTWF4TGVuZ3RoID0gS19NQVhfTEVOR1RIXG5cbi8qKlxuICogSWYgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYDpcbiAqICAgPT09IHRydWUgICAgVXNlIFVpbnQ4QXJyYXkgaW1wbGVtZW50YXRpb24gKGZhc3Rlc3QpXG4gKiAgID09PSBmYWxzZSAgIFByaW50IHdhcm5pbmcgYW5kIHJlY29tbWVuZCB1c2luZyBgYnVmZmVyYCB2NC54IHdoaWNoIGhhcyBhbiBPYmplY3RcbiAqICAgICAgICAgICAgICAgaW1wbGVtZW50YXRpb24gKG1vc3QgY29tcGF0aWJsZSwgZXZlbiBJRTYpXG4gKlxuICogQnJvd3NlcnMgdGhhdCBzdXBwb3J0IHR5cGVkIGFycmF5cyBhcmUgSUUgMTArLCBGaXJlZm94IDQrLCBDaHJvbWUgNyssIFNhZmFyaSA1LjErLFxuICogT3BlcmEgMTEuNissIGlPUyA0LjIrLlxuICpcbiAqIFdlIHJlcG9ydCB0aGF0IHRoZSBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGlmIHRoZSBhcmUgbm90IHN1YmNsYXNzYWJsZVxuICogdXNpbmcgX19wcm90b19fLiBGaXJlZm94IDQtMjkgbGFja3Mgc3VwcG9ydCBmb3IgYWRkaW5nIG5ldyBwcm9wZXJ0aWVzIHRvIGBVaW50OEFycmF5YFxuICogKFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njk1NDM4KS4gSUUgMTAgbGFja3Mgc3VwcG9ydFxuICogZm9yIF9fcHJvdG9fXyBhbmQgaGFzIGEgYnVnZ3kgdHlwZWQgYXJyYXkgaW1wbGVtZW50YXRpb24uXG4gKi9cbkJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUID0gdHlwZWRBcnJheVN1cHBvcnQoKVxuXG5pZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gIGNvbnNvbGUuZXJyb3IoXG4gICAgJ1RoaXMgYnJvd3NlciBsYWNrcyB0eXBlZCBhcnJheSAoVWludDhBcnJheSkgc3VwcG9ydCB3aGljaCBpcyByZXF1aXJlZCBieSAnICtcbiAgICAnYGJ1ZmZlcmAgdjUueC4gVXNlIGBidWZmZXJgIHY0LnggaWYgeW91IHJlcXVpcmUgb2xkIGJyb3dzZXIgc3VwcG9ydC4nXG4gIClcbn1cblxuZnVuY3Rpb24gdHlwZWRBcnJheVN1cHBvcnQgKCkge1xuICAvLyBDYW4gdHlwZWQgYXJyYXkgaW5zdGFuY2VzIGNhbiBiZSBhdWdtZW50ZWQ/XG4gIHRyeSB7XG4gICAgY29uc3QgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMSlcbiAgICBjb25zdCBwcm90byA9IHsgZm9vOiBmdW5jdGlvbiAoKSB7IHJldHVybiA0MiB9IH1cbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YocHJvdG8sIFVpbnQ4QXJyYXkucHJvdG90eXBlKVxuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihhcnIsIHByb3RvKVxuICAgIHJldHVybiBhcnIuZm9vKCkgPT09IDQyXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQnVmZmVyLnByb3RvdHlwZSwgJ3BhcmVudCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGhpcykpIHJldHVybiB1bmRlZmluZWRcbiAgICByZXR1cm4gdGhpcy5idWZmZXJcbiAgfVxufSlcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1ZmZlci5wcm90b3R5cGUsICdvZmZzZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIGlmICghQnVmZmVyLmlzQnVmZmVyKHRoaXMpKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgcmV0dXJuIHRoaXMuYnl0ZU9mZnNldFxuICB9XG59KVxuXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXIgKGxlbmd0aCkge1xuICBpZiAobGVuZ3RoID4gS19NQVhfTEVOR1RIKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBcIicgKyBsZW5ndGggKyAnXCIgaXMgaW52YWxpZCBmb3Igb3B0aW9uIFwic2l6ZVwiJylcbiAgfVxuICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZVxuICBjb25zdCBidWYgPSBuZXcgVWludDhBcnJheShsZW5ndGgpXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihidWYsIEJ1ZmZlci5wcm90b3R5cGUpXG4gIHJldHVybiBidWZcbn1cblxuLyoqXG4gKiBUaGUgQnVmZmVyIGNvbnN0cnVjdG9yIHJldHVybnMgaW5zdGFuY2VzIG9mIGBVaW50OEFycmF5YCB0aGF0IGhhdmUgdGhlaXJcbiAqIHByb3RvdHlwZSBjaGFuZ2VkIHRvIGBCdWZmZXIucHJvdG90eXBlYC4gRnVydGhlcm1vcmUsIGBCdWZmZXJgIGlzIGEgc3ViY2xhc3Mgb2ZcbiAqIGBVaW50OEFycmF5YCwgc28gdGhlIHJldHVybmVkIGluc3RhbmNlcyB3aWxsIGhhdmUgYWxsIHRoZSBub2RlIGBCdWZmZXJgIG1ldGhvZHNcbiAqIGFuZCB0aGUgYFVpbnQ4QXJyYXlgIG1ldGhvZHMuIFNxdWFyZSBicmFja2V0IG5vdGF0aW9uIHdvcmtzIGFzIGV4cGVjdGVkIC0tIGl0XG4gKiByZXR1cm5zIGEgc2luZ2xlIG9jdGV0LlxuICpcbiAqIFRoZSBgVWludDhBcnJheWAgcHJvdG90eXBlIHJlbWFpbnMgdW5tb2RpZmllZC5cbiAqL1xuXG5mdW5jdGlvbiBCdWZmZXIgKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIC8vIENvbW1vbiBjYXNlLlxuICBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIHtcbiAgICBpZiAodHlwZW9mIGVuY29kaW5nT3JPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAnVGhlIFwic3RyaW5nXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIHN0cmluZy4gUmVjZWl2ZWQgdHlwZSBudW1iZXInXG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiBhbGxvY1Vuc2FmZShhcmcpXG4gIH1cbiAgcmV0dXJuIGZyb20oYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wb29sU2l6ZSA9IDgxOTIgLy8gbm90IHVzZWQgYnkgdGhpcyBpbXBsZW1lbnRhdGlvblxuXG5mdW5jdGlvbiBmcm9tICh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZyb21TdHJpbmcodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQpXG4gIH1cblxuICBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KHZhbHVlKSkge1xuICAgIHJldHVybiBmcm9tQXJyYXlWaWV3KHZhbHVlKVxuICB9XG5cbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgJ1RoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIG9uZSBvZiB0eXBlIHN0cmluZywgQnVmZmVyLCBBcnJheUJ1ZmZlciwgQXJyYXksICcgK1xuICAgICAgJ29yIEFycmF5LWxpa2UgT2JqZWN0LiBSZWNlaXZlZCB0eXBlICcgKyAodHlwZW9mIHZhbHVlKVxuICAgIClcbiAgfVxuXG4gIGlmIChpc0luc3RhbmNlKHZhbHVlLCBBcnJheUJ1ZmZlcikgfHxcbiAgICAgICh2YWx1ZSAmJiBpc0luc3RhbmNlKHZhbHVlLmJ1ZmZlciwgQXJyYXlCdWZmZXIpKSkge1xuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmICh0eXBlb2YgU2hhcmVkQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAoaXNJbnN0YW5jZSh2YWx1ZSwgU2hhcmVkQXJyYXlCdWZmZXIpIHx8XG4gICAgICAodmFsdWUgJiYgaXNJbnN0YW5jZSh2YWx1ZS5idWZmZXIsIFNoYXJlZEFycmF5QnVmZmVyKSkpKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcih2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgJ1RoZSBcInZhbHVlXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgb2YgdHlwZSBudW1iZXIuIFJlY2VpdmVkIHR5cGUgbnVtYmVyJ1xuICAgIClcbiAgfVxuXG4gIGNvbnN0IHZhbHVlT2YgPSB2YWx1ZS52YWx1ZU9mICYmIHZhbHVlLnZhbHVlT2YoKVxuICBpZiAodmFsdWVPZiAhPSBudWxsICYmIHZhbHVlT2YgIT09IHZhbHVlKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5mcm9tKHZhbHVlT2YsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGNvbnN0IGIgPSBmcm9tT2JqZWN0KHZhbHVlKVxuICBpZiAoYikgcmV0dXJuIGJcblxuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvUHJpbWl0aXZlICE9IG51bGwgJiZcbiAgICAgIHR5cGVvZiB2YWx1ZVtTeW1ib2wudG9QcmltaXRpdmVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5mcm9tKHZhbHVlW1N5bWJvbC50b1ByaW1pdGl2ZV0oJ3N0cmluZycpLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICdUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBvbmUgb2YgdHlwZSBzdHJpbmcsIEJ1ZmZlciwgQXJyYXlCdWZmZXIsIEFycmF5LCAnICtcbiAgICAnb3IgQXJyYXktbGlrZSBPYmplY3QuIFJlY2VpdmVkIHR5cGUgJyArICh0eXBlb2YgdmFsdWUpXG4gIClcbn1cblxuLyoqXG4gKiBGdW5jdGlvbmFsbHkgZXF1aXZhbGVudCB0byBCdWZmZXIoYXJnLCBlbmNvZGluZykgYnV0IHRocm93cyBhIFR5cGVFcnJvclxuICogaWYgdmFsdWUgaXMgYSBudW1iZXIuXG4gKiBCdWZmZXIuZnJvbShzdHJbLCBlbmNvZGluZ10pXG4gKiBCdWZmZXIuZnJvbShhcnJheSlcbiAqIEJ1ZmZlci5mcm9tKGJ1ZmZlcilcbiAqIEJ1ZmZlci5mcm9tKGFycmF5QnVmZmVyWywgYnl0ZU9mZnNldFssIGxlbmd0aF1dKVxuICoqL1xuQnVmZmVyLmZyb20gPSBmdW5jdGlvbiAodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gZnJvbSh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG4vLyBOb3RlOiBDaGFuZ2UgcHJvdG90eXBlICphZnRlciogQnVmZmVyLmZyb20gaXMgZGVmaW5lZCB0byB3b3JrYXJvdW5kIENocm9tZSBidWc6XG4vLyBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9wdWxsLzE0OFxuT2JqZWN0LnNldFByb3RvdHlwZU9mKEJ1ZmZlci5wcm90b3R5cGUsIFVpbnQ4QXJyYXkucHJvdG90eXBlKVxuT2JqZWN0LnNldFByb3RvdHlwZU9mKEJ1ZmZlciwgVWludDhBcnJheSlcblxuZnVuY3Rpb24gYXNzZXJ0U2l6ZSAoc2l6ZSkge1xuICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJzaXplXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIG51bWJlcicpXG4gIH0gZWxzZSBpZiAoc2l6ZSA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIFwiJyArIHNpemUgKyAnXCIgaXMgaW52YWxpZCBmb3Igb3B0aW9uIFwic2l6ZVwiJylcbiAgfVxufVxuXG5mdW5jdGlvbiBhbGxvYyAoc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKVxuICBpZiAoc2l6ZSA8PSAwKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcihzaXplKVxuICB9XG4gIGlmIChmaWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPbmx5IHBheSBhdHRlbnRpb24gdG8gZW5jb2RpbmcgaWYgaXQncyBhIHN0cmluZy4gVGhpc1xuICAgIC8vIHByZXZlbnRzIGFjY2lkZW50YWxseSBzZW5kaW5nIGluIGEgbnVtYmVyIHRoYXQgd291bGRcbiAgICAvLyBiZSBpbnRlcnByZXRlZCBhcyBhIHN0YXJ0IG9mZnNldC5cbiAgICByZXR1cm4gdHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJ1xuICAgICAgPyBjcmVhdGVCdWZmZXIoc2l6ZSkuZmlsbChmaWxsLCBlbmNvZGluZylcbiAgICAgIDogY3JlYXRlQnVmZmVyKHNpemUpLmZpbGwoZmlsbClcbiAgfVxuICByZXR1cm4gY3JlYXRlQnVmZmVyKHNpemUpXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBmaWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogYWxsb2Moc2l6ZVssIGZpbGxbLCBlbmNvZGluZ11dKVxuICoqL1xuQnVmZmVyLmFsbG9jID0gZnVuY3Rpb24gKHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIHJldHVybiBhbGxvYyhzaXplLCBmaWxsLCBlbmNvZGluZylcbn1cblxuZnVuY3Rpb24gYWxsb2NVbnNhZmUgKHNpemUpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKVxuICByZXR1cm4gY3JlYXRlQnVmZmVyKHNpemUgPCAwID8gMCA6IGNoZWNrZWQoc2l6ZSkgfCAwKVxufVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gQnVmZmVyKG51bSksIGJ5IGRlZmF1bHQgY3JlYXRlcyBhIG5vbi16ZXJvLWZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKHNpemUpXG59XG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gU2xvd0J1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICovXG5CdWZmZXIuYWxsb2NVbnNhZmVTbG93ID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKHNpemUpXG59XG5cbmZ1bmN0aW9uIGZyb21TdHJpbmcgKHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycgfHwgZW5jb2RpbmcgPT09ICcnKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgfVxuXG4gIGlmICghQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICB9XG5cbiAgY29uc3QgbGVuZ3RoID0gYnl0ZUxlbmd0aChzdHJpbmcsIGVuY29kaW5nKSB8IDBcbiAgbGV0IGJ1ZiA9IGNyZWF0ZUJ1ZmZlcihsZW5ndGgpXG5cbiAgY29uc3QgYWN0dWFsID0gYnVmLndyaXRlKHN0cmluZywgZW5jb2RpbmcpXG5cbiAgaWYgKGFjdHVhbCAhPT0gbGVuZ3RoKSB7XG4gICAgLy8gV3JpdGluZyBhIGhleCBzdHJpbmcsIGZvciBleGFtcGxlLCB0aGF0IGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVycyB3aWxsXG4gICAgLy8gY2F1c2UgZXZlcnl0aGluZyBhZnRlciB0aGUgZmlyc3QgaW52YWxpZCBjaGFyYWN0ZXIgdG8gYmUgaWdub3JlZC4gKGUuZy5cbiAgICAvLyAnYWJ4eGNkJyB3aWxsIGJlIHRyZWF0ZWQgYXMgJ2FiJylcbiAgICBidWYgPSBidWYuc2xpY2UoMCwgYWN0dWFsKVxuICB9XG5cbiAgcmV0dXJuIGJ1ZlxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlMaWtlIChhcnJheSkge1xuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGggPCAwID8gMCA6IGNoZWNrZWQoYXJyYXkubGVuZ3RoKSB8IDBcbiAgY29uc3QgYnVmID0gY3JlYXRlQnVmZmVyKGxlbmd0aClcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIGJ1ZltpXSA9IGFycmF5W2ldICYgMjU1XG4gIH1cbiAgcmV0dXJuIGJ1ZlxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlWaWV3IChhcnJheVZpZXcpIHtcbiAgaWYgKGlzSW5zdGFuY2UoYXJyYXlWaWV3LCBVaW50OEFycmF5KSkge1xuICAgIGNvbnN0IGNvcHkgPSBuZXcgVWludDhBcnJheShhcnJheVZpZXcpXG4gICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcihjb3B5LmJ1ZmZlciwgY29weS5ieXRlT2Zmc2V0LCBjb3B5LmJ5dGVMZW5ndGgpXG4gIH1cbiAgcmV0dXJuIGZyb21BcnJheUxpa2UoYXJyYXlWaWV3KVxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlCdWZmZXIgKGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKGJ5dGVPZmZzZXQgPCAwIHx8IGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0KSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1wib2Zmc2V0XCIgaXMgb3V0c2lkZSBvZiBidWZmZXIgYm91bmRzJylcbiAgfVxuXG4gIGlmIChhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCArIChsZW5ndGggfHwgMCkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJsZW5ndGhcIiBpcyBvdXRzaWRlIG9mIGJ1ZmZlciBib3VuZHMnKVxuICB9XG5cbiAgbGV0IGJ1ZlxuICBpZiAoYnl0ZU9mZnNldCA9PT0gdW5kZWZpbmVkICYmIGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYnVmID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXkpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBidWYgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldClcbiAgfSBlbHNlIHtcbiAgICBidWYgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2VcbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGJ1ZiwgQnVmZmVyLnByb3RvdHlwZSlcblxuICByZXR1cm4gYnVmXG59XG5cbmZ1bmN0aW9uIGZyb21PYmplY3QgKG9iaikge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKG9iaikpIHtcbiAgICBjb25zdCBsZW4gPSBjaGVja2VkKG9iai5sZW5ndGgpIHwgMFxuICAgIGNvbnN0IGJ1ZiA9IGNyZWF0ZUJ1ZmZlcihsZW4pXG5cbiAgICBpZiAoYnVmLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGJ1ZlxuICAgIH1cblxuICAgIG9iai5jb3B5KGJ1ZiwgMCwgMCwgbGVuKVxuICAgIHJldHVybiBidWZcbiAgfVxuXG4gIGlmIChvYmoubGVuZ3RoICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAodHlwZW9mIG9iai5sZW5ndGggIT09ICdudW1iZXInIHx8IG51bWJlcklzTmFOKG9iai5sZW5ndGgpKSB7XG4gICAgICByZXR1cm4gY3JlYXRlQnVmZmVyKDApXG4gICAgfVxuICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKG9iailcbiAgfVxuXG4gIGlmIChvYmoudHlwZSA9PT0gJ0J1ZmZlcicgJiYgQXJyYXkuaXNBcnJheShvYmouZGF0YSkpIHtcbiAgICByZXR1cm4gZnJvbUFycmF5TGlrZShvYmouZGF0YSlcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja2VkIChsZW5ndGgpIHtcbiAgLy8gTm90ZTogY2Fubm90IHVzZSBgbGVuZ3RoIDwgS19NQVhfTEVOR1RIYCBoZXJlIGJlY2F1c2UgdGhhdCBmYWlscyB3aGVuXG4gIC8vIGxlbmd0aCBpcyBOYU4gKHdoaWNoIGlzIG90aGVyd2lzZSBjb2VyY2VkIHRvIHplcm8uKVxuICBpZiAobGVuZ3RoID49IEtfTUFYX0xFTkdUSCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIGFsbG9jYXRlIEJ1ZmZlciBsYXJnZXIgdGhhbiBtYXhpbXVtICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICdzaXplOiAweCcgKyBLX01BWF9MRU5HVEgudG9TdHJpbmcoMTYpICsgJyBieXRlcycpXG4gIH1cbiAgcmV0dXJuIGxlbmd0aCB8IDBcbn1cblxuZnVuY3Rpb24gU2xvd0J1ZmZlciAobGVuZ3RoKSB7XG4gIGlmICgrbGVuZ3RoICE9IGxlbmd0aCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcVxuICAgIGxlbmd0aCA9IDBcbiAgfVxuICByZXR1cm4gQnVmZmVyLmFsbG9jKCtsZW5ndGgpXG59XG5cbkJ1ZmZlci5pc0J1ZmZlciA9IGZ1bmN0aW9uIGlzQnVmZmVyIChiKSB7XG4gIHJldHVybiBiICE9IG51bGwgJiYgYi5faXNCdWZmZXIgPT09IHRydWUgJiZcbiAgICBiICE9PSBCdWZmZXIucHJvdG90eXBlIC8vIHNvIEJ1ZmZlci5pc0J1ZmZlcihCdWZmZXIucHJvdG90eXBlKSB3aWxsIGJlIGZhbHNlXG59XG5cbkJ1ZmZlci5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAoYSwgYikge1xuICBpZiAoaXNJbnN0YW5jZShhLCBVaW50OEFycmF5KSkgYSA9IEJ1ZmZlci5mcm9tKGEsIGEub2Zmc2V0LCBhLmJ5dGVMZW5ndGgpXG4gIGlmIChpc0luc3RhbmNlKGIsIFVpbnQ4QXJyYXkpKSBiID0gQnVmZmVyLmZyb20oYiwgYi5vZmZzZXQsIGIuYnl0ZUxlbmd0aClcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYSkgfHwgIUJ1ZmZlci5pc0J1ZmZlcihiKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAnVGhlIFwiYnVmMVwiLCBcImJ1ZjJcIiBhcmd1bWVudHMgbXVzdCBiZSBvbmUgb2YgdHlwZSBCdWZmZXIgb3IgVWludDhBcnJheSdcbiAgICApXG4gIH1cblxuICBpZiAoYSA9PT0gYikgcmV0dXJuIDBcblxuICBsZXQgeCA9IGEubGVuZ3RoXG4gIGxldCB5ID0gYi5sZW5ndGhcblxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gTWF0aC5taW4oeCwgeSk7IGkgPCBsZW47ICsraSkge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICB4ID0gYVtpXVxuICAgICAgeSA9IGJbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIGlzRW5jb2RpbmcgKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gY29uY2F0IChsaXN0LCBsZW5ndGgpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGxpc3QpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBCdWZmZXIuYWxsb2MoMClcbiAgfVxuXG4gIGxldCBpXG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGxlbmd0aCA9IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgbGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmFsbG9jVW5zYWZlKGxlbmd0aClcbiAgbGV0IHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICBsZXQgYnVmID0gbGlzdFtpXVxuICAgIGlmIChpc0luc3RhbmNlKGJ1ZiwgVWludDhBcnJheSkpIHtcbiAgICAgIGlmIChwb3MgKyBidWYubGVuZ3RoID4gYnVmZmVyLmxlbmd0aCkge1xuICAgICAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSBidWYgPSBCdWZmZXIuZnJvbShidWYpXG4gICAgICAgIGJ1Zi5jb3B5KGJ1ZmZlciwgcG9zKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgVWludDhBcnJheS5wcm90b3R5cGUuc2V0LmNhbGwoXG4gICAgICAgICAgYnVmZmVyLFxuICAgICAgICAgIGJ1ZixcbiAgICAgICAgICBwb3NcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICAgIH0gZWxzZSB7XG4gICAgICBidWYuY29weShidWZmZXIsIHBvcylcbiAgICB9XG4gICAgcG9zICs9IGJ1Zi5sZW5ndGhcbiAgfVxuICByZXR1cm4gYnVmZmVyXG59XG5cbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihzdHJpbmcpKSB7XG4gICAgcmV0dXJuIHN0cmluZy5sZW5ndGhcbiAgfVxuICBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KHN0cmluZykgfHwgaXNJbnN0YW5jZShzdHJpbmcsIEFycmF5QnVmZmVyKSkge1xuICAgIHJldHVybiBzdHJpbmcuYnl0ZUxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAnVGhlIFwic3RyaW5nXCIgYXJndW1lbnQgbXVzdCBiZSBvbmUgb2YgdHlwZSBzdHJpbmcsIEJ1ZmZlciwgb3IgQXJyYXlCdWZmZXIuICcgK1xuICAgICAgJ1JlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBzdHJpbmdcbiAgICApXG4gIH1cblxuICBjb25zdCBsZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGNvbnN0IG11c3RNYXRjaCA9IChhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gPT09IHRydWUpXG4gIGlmICghbXVzdE1hdGNoICYmIGxlbiA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBVc2UgYSBmb3IgbG9vcCB0byBhdm9pZCByZWN1cnNpb25cbiAgbGV0IGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGVuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gbGVuICogMlxuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGxlbiA+Pj4gMVxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkge1xuICAgICAgICAgIHJldHVybiBtdXN0TWF0Y2ggPyAtMSA6IHV0ZjhUb0J5dGVzKHN0cmluZykubGVuZ3RoIC8vIGFzc3VtZSB1dGY4XG4gICAgICAgIH1cbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuXG5mdW5jdGlvbiBzbG93VG9TdHJpbmcgKGVuY29kaW5nLCBzdGFydCwgZW5kKSB7XG4gIGxldCBsb3dlcmVkQ2FzZSA9IGZhbHNlXG5cbiAgLy8gTm8gbmVlZCB0byB2ZXJpZnkgdGhhdCBcInRoaXMubGVuZ3RoIDw9IE1BWF9VSU5UMzJcIiBzaW5jZSBpdCdzIGEgcmVhZC1vbmx5XG4gIC8vIHByb3BlcnR5IG9mIGEgdHlwZWQgYXJyYXkuXG5cbiAgLy8gVGhpcyBiZWhhdmVzIG5laXRoZXIgbGlrZSBTdHJpbmcgbm9yIFVpbnQ4QXJyYXkgaW4gdGhhdCB3ZSBzZXQgc3RhcnQvZW5kXG4gIC8vIHRvIHRoZWlyIHVwcGVyL2xvd2VyIGJvdW5kcyBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIG91dCBvZiByYW5nZS5cbiAgLy8gdW5kZWZpbmVkIGlzIGhhbmRsZWQgc3BlY2lhbGx5IGFzIHBlciBFQ01BLTI2MiA2dGggRWRpdGlvbixcbiAgLy8gU2VjdGlvbiAxMy4zLjMuNyBSdW50aW1lIFNlbWFudGljczogS2V5ZWRCaW5kaW5nSW5pdGlhbGl6YXRpb24uXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkIHx8IHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIC8vIFJldHVybiBlYXJseSBpZiBzdGFydCA+IHRoaXMubGVuZ3RoLiBEb25lIGhlcmUgdG8gcHJldmVudCBwb3RlbnRpYWwgdWludDMyXG4gIC8vIGNvZXJjaW9uIGZhaWwgYmVsb3cuXG4gIGlmIChzdGFydCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoZW5kID09PSB1bmRlZmluZWQgfHwgZW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKGVuZCA8PSAwKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICAvLyBGb3JjZSBjb2VyY2lvbiB0byB1aW50MzIuIFRoaXMgd2lsbCBhbHNvIGNvZXJjZSBmYWxzZXkvTmFOIHZhbHVlcyB0byAwLlxuICBlbmQgPj4+PSAwXG4gIHN0YXJ0ID4+Pj0gMFxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdXRmMTZsZVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9IChlbmNvZGluZyArICcnKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG4vLyBUaGlzIHByb3BlcnR5IGlzIHVzZWQgYnkgYEJ1ZmZlci5pc0J1ZmZlcmAgKGFuZCB0aGUgYGlzLWJ1ZmZlcmAgbnBtIHBhY2thZ2UpXG4vLyB0byBkZXRlY3QgYSBCdWZmZXIgaW5zdGFuY2UuIEl0J3Mgbm90IHBvc3NpYmxlIHRvIHVzZSBgaW5zdGFuY2VvZiBCdWZmZXJgXG4vLyByZWxpYWJseSBpbiBhIGJyb3dzZXJpZnkgY29udGV4dCBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG11bHRpcGxlIGRpZmZlcmVudFxuLy8gY29waWVzIG9mIHRoZSAnYnVmZmVyJyBwYWNrYWdlIGluIHVzZS4gVGhpcyBtZXRob2Qgd29ya3MgZXZlbiBmb3IgQnVmZmVyXG4vLyBpbnN0YW5jZXMgdGhhdCB3ZXJlIGNyZWF0ZWQgZnJvbSBhbm90aGVyIGNvcHkgb2YgdGhlIGBidWZmZXJgIHBhY2thZ2UuXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvYnVmZmVyL2lzc3Vlcy8xNTRcbkJ1ZmZlci5wcm90b3R5cGUuX2lzQnVmZmVyID0gdHJ1ZVxuXG5mdW5jdGlvbiBzd2FwIChiLCBuLCBtKSB7XG4gIGNvbnN0IGkgPSBiW25dXG4gIGJbbl0gPSBiW21dXG4gIGJbbV0gPSBpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDE2ID0gZnVuY3Rpb24gc3dhcDE2ICgpIHtcbiAgY29uc3QgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDIgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDE2LWJpdHMnKVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDIpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAxKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDMyID0gZnVuY3Rpb24gc3dhcDMyICgpIHtcbiAgY29uc3QgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDQgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDMyLWJpdHMnKVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAzKVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyAyKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDY0ID0gZnVuY3Rpb24gc3dhcDY0ICgpIHtcbiAgY29uc3QgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDggIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDY0LWJpdHMnKVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDgpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyA3KVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyA2KVxuICAgIHN3YXAodGhpcywgaSArIDIsIGkgKyA1KVxuICAgIHN3YXAodGhpcywgaSArIDMsIGkgKyA0KVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gIGNvbnN0IGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW5ndGggPT09IDApIHJldHVybiAnJ1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCAwLCBsZW5ndGgpXG4gIHJldHVybiBzbG93VG9TdHJpbmcuYXBwbHkodGhpcywgYXJndW1lbnRzKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvTG9jYWxlU3RyaW5nID0gQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZ1xuXG5CdWZmZXIucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyAoYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIGlmICh0aGlzID09PSBiKSByZXR1cm4gdHJ1ZVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYikgPT09IDBcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gaW5zcGVjdCAoKSB7XG4gIGxldCBzdHIgPSAnJ1xuICBjb25zdCBtYXggPSBleHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTXG4gIHN0ciA9IHRoaXMudG9TdHJpbmcoJ2hleCcsIDAsIG1heCkucmVwbGFjZSgvKC57Mn0pL2csICckMSAnKS50cmltKClcbiAgaWYgKHRoaXMubGVuZ3RoID4gbWF4KSBzdHIgKz0gJyAuLi4gJ1xuICByZXR1cm4gJzxCdWZmZXIgJyArIHN0ciArICc+J1xufVxuaWYgKGN1c3RvbUluc3BlY3RTeW1ib2wpIHtcbiAgQnVmZmVyLnByb3RvdHlwZVtjdXN0b21JbnNwZWN0U3ltYm9sXSA9IEJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdFxufVxuXG5CdWZmZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlICh0YXJnZXQsIHN0YXJ0LCBlbmQsIHRoaXNTdGFydCwgdGhpc0VuZCkge1xuICBpZiAoaXNJbnN0YW5jZSh0YXJnZXQsIFVpbnQ4QXJyYXkpKSB7XG4gICAgdGFyZ2V0ID0gQnVmZmVyLmZyb20odGFyZ2V0LCB0YXJnZXQub2Zmc2V0LCB0YXJnZXQuYnl0ZUxlbmd0aClcbiAgfVxuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih0YXJnZXQpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICdUaGUgXCJ0YXJnZXRcIiBhcmd1bWVudCBtdXN0IGJlIG9uZSBvZiB0eXBlIEJ1ZmZlciBvciBVaW50OEFycmF5LiAnICtcbiAgICAgICdSZWNlaXZlZCB0eXBlICcgKyAodHlwZW9mIHRhcmdldClcbiAgICApXG4gIH1cblxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuZCA9IHRhcmdldCA/IHRhcmdldC5sZW5ndGggOiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc1N0YXJ0ID0gMFxuICB9XG4gIGlmICh0aGlzRW5kID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzRW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChzdGFydCA8IDAgfHwgZW5kID4gdGFyZ2V0Lmxlbmd0aCB8fCB0aGlzU3RhcnQgPCAwIHx8IHRoaXNFbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdvdXQgb2YgcmFuZ2UgaW5kZXgnKVxuICB9XG5cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kICYmIHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgaWYgKHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAxXG4gIH1cblxuICBzdGFydCA+Pj49IDBcbiAgZW5kID4+Pj0gMFxuICB0aGlzU3RhcnQgPj4+PSAwXG4gIHRoaXNFbmQgPj4+PSAwXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCkgcmV0dXJuIDBcblxuICBsZXQgeCA9IHRoaXNFbmQgLSB0aGlzU3RhcnRcbiAgbGV0IHkgPSBlbmQgLSBzdGFydFxuICBjb25zdCBsZW4gPSBNYXRoLm1pbih4LCB5KVxuXG4gIGNvbnN0IHRoaXNDb3B5ID0gdGhpcy5zbGljZSh0aGlzU3RhcnQsIHRoaXNFbmQpXG4gIGNvbnN0IHRhcmdldENvcHkgPSB0YXJnZXQuc2xpY2Uoc3RhcnQsIGVuZClcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKHRoaXNDb3B5W2ldICE9PSB0YXJnZXRDb3B5W2ldKSB7XG4gICAgICB4ID0gdGhpc0NvcHlbaV1cbiAgICAgIHkgPSB0YXJnZXRDb3B5W2ldXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuLy8gRmluZHMgZWl0aGVyIHRoZSBmaXJzdCBpbmRleCBvZiBgdmFsYCBpbiBgYnVmZmVyYCBhdCBvZmZzZXQgPj0gYGJ5dGVPZmZzZXRgLFxuLy8gT1IgdGhlIGxhc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0IDw9IGBieXRlT2Zmc2V0YC5cbi8vXG4vLyBBcmd1bWVudHM6XG4vLyAtIGJ1ZmZlciAtIGEgQnVmZmVyIHRvIHNlYXJjaFxuLy8gLSB2YWwgLSBhIHN0cmluZywgQnVmZmVyLCBvciBudW1iZXJcbi8vIC0gYnl0ZU9mZnNldCAtIGFuIGluZGV4IGludG8gYGJ1ZmZlcmA7IHdpbGwgYmUgY2xhbXBlZCB0byBhbiBpbnQzMlxuLy8gLSBlbmNvZGluZyAtIGFuIG9wdGlvbmFsIGVuY29kaW5nLCByZWxldmFudCBpcyB2YWwgaXMgYSBzdHJpbmdcbi8vIC0gZGlyIC0gdHJ1ZSBmb3IgaW5kZXhPZiwgZmFsc2UgZm9yIGxhc3RJbmRleE9mXG5mdW5jdGlvbiBiaWRpcmVjdGlvbmFsSW5kZXhPZiAoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgLy8gRW1wdHkgYnVmZmVyIG1lYW5zIG5vIG1hdGNoXG4gIGlmIChidWZmZXIubGVuZ3RoID09PSAwKSByZXR1cm4gLTFcblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldFxuICBpZiAodHlwZW9mIGJ5dGVPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBieXRlT2Zmc2V0XG4gICAgYnl0ZU9mZnNldCA9IDBcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0ID4gMHg3ZmZmZmZmZikge1xuICAgIGJ5dGVPZmZzZXQgPSAweDdmZmZmZmZmXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA8IC0weDgwMDAwMDAwKSB7XG4gICAgYnl0ZU9mZnNldCA9IC0weDgwMDAwMDAwXG4gIH1cbiAgYnl0ZU9mZnNldCA9ICtieXRlT2Zmc2V0IC8vIENvZXJjZSB0byBOdW1iZXIuXG4gIGlmIChudW1iZXJJc05hTihieXRlT2Zmc2V0KSkge1xuICAgIC8vIGJ5dGVPZmZzZXQ6IGl0IGl0J3MgdW5kZWZpbmVkLCBudWxsLCBOYU4sIFwiZm9vXCIsIGV0Yywgc2VhcmNoIHdob2xlIGJ1ZmZlclxuICAgIGJ5dGVPZmZzZXQgPSBkaXIgPyAwIDogKGJ1ZmZlci5sZW5ndGggLSAxKVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXQ6IG5lZ2F0aXZlIG9mZnNldHMgc3RhcnQgZnJvbSB0aGUgZW5kIG9mIHRoZSBidWZmZXJcbiAgaWYgKGJ5dGVPZmZzZXQgPCAwKSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCArIGJ5dGVPZmZzZXRcbiAgaWYgKGJ5dGVPZmZzZXQgPj0gYnVmZmVyLmxlbmd0aCkge1xuICAgIGlmIChkaXIpIHJldHVybiAtMVxuICAgIGVsc2UgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggLSAxXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA8IDApIHtcbiAgICBpZiAoZGlyKSBieXRlT2Zmc2V0ID0gMFxuICAgIGVsc2UgcmV0dXJuIC0xXG4gIH1cblxuICAvLyBOb3JtYWxpemUgdmFsXG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIHZhbCA9IEJ1ZmZlci5mcm9tKHZhbCwgZW5jb2RpbmcpXG4gIH1cblxuICAvLyBGaW5hbGx5LCBzZWFyY2ggZWl0aGVyIGluZGV4T2YgKGlmIGRpciBpcyB0cnVlKSBvciBsYXN0SW5kZXhPZlxuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHZhbCkpIHtcbiAgICAvLyBTcGVjaWFsIGNhc2U6IGxvb2tpbmcgZm9yIGVtcHR5IHN0cmluZy9idWZmZXIgYWx3YXlzIGZhaWxzXG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMHhGRiAvLyBTZWFyY2ggZm9yIGEgYnl0ZSB2YWx1ZSBbMC0yNTVdXG4gICAgaWYgKHR5cGVvZiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAoZGlyKSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUubGFzdEluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIFt2YWxdLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcigndmFsIG11c3QgYmUgc3RyaW5nLCBudW1iZXIgb3IgQnVmZmVyJylcbn1cblxuZnVuY3Rpb24gYXJyYXlJbmRleE9mIChhcnIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcikge1xuICBsZXQgaW5kZXhTaXplID0gMVxuICBsZXQgYXJyTGVuZ3RoID0gYXJyLmxlbmd0aFxuICBsZXQgdmFsTGVuZ3RoID0gdmFsLmxlbmd0aFxuXG4gIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICBpZiAoZW5jb2RpbmcgPT09ICd1Y3MyJyB8fCBlbmNvZGluZyA9PT0gJ3Vjcy0yJyB8fFxuICAgICAgICBlbmNvZGluZyA9PT0gJ3V0ZjE2bGUnIHx8IGVuY29kaW5nID09PSAndXRmLTE2bGUnKSB7XG4gICAgICBpZiAoYXJyLmxlbmd0aCA8IDIgfHwgdmFsLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgICB9XG4gICAgICBpbmRleFNpemUgPSAyXG4gICAgICBhcnJMZW5ndGggLz0gMlxuICAgICAgdmFsTGVuZ3RoIC89IDJcbiAgICAgIGJ5dGVPZmZzZXQgLz0gMlxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWQgKGJ1ZiwgaSkge1xuICAgIGlmIChpbmRleFNpemUgPT09IDEpIHtcbiAgICAgIHJldHVybiBidWZbaV1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGJ1Zi5yZWFkVUludDE2QkUoaSAqIGluZGV4U2l6ZSlcbiAgICB9XG4gIH1cblxuICBsZXQgaVxuICBpZiAoZGlyKSB7XG4gICAgbGV0IGZvdW5kSW5kZXggPSAtMVxuICAgIGZvciAoaSA9IGJ5dGVPZmZzZXQ7IGkgPCBhcnJMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHJlYWQoYXJyLCBpKSA9PT0gcmVhZCh2YWwsIGZvdW5kSW5kZXggPT09IC0xID8gMCA6IGkgLSBmb3VuZEluZGV4KSkge1xuICAgICAgICBpZiAoZm91bmRJbmRleCA9PT0gLTEpIGZvdW5kSW5kZXggPSBpXG4gICAgICAgIGlmIChpIC0gZm91bmRJbmRleCArIDEgPT09IHZhbExlbmd0aCkgcmV0dXJuIGZvdW5kSW5kZXggKiBpbmRleFNpemVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ICE9PSAtMSkgaSAtPSBpIC0gZm91bmRJbmRleFxuICAgICAgICBmb3VuZEluZGV4ID0gLTFcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGJ5dGVPZmZzZXQgKyB2YWxMZW5ndGggPiBhcnJMZW5ndGgpIGJ5dGVPZmZzZXQgPSBhcnJMZW5ndGggLSB2YWxMZW5ndGhcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IGZvdW5kID0gdHJ1ZVxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB2YWxMZW5ndGg7IGorKykge1xuICAgICAgICBpZiAocmVhZChhcnIsIGkgKyBqKSAhPT0gcmVhZCh2YWwsIGopKSB7XG4gICAgICAgICAgZm91bmQgPSBmYWxzZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChmb3VuZCkgcmV0dXJuIGlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmNsdWRlcyA9IGZ1bmN0aW9uIGluY2x1ZGVzICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiB0aGlzLmluZGV4T2YodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykgIT09IC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIGluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIHRydWUpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUubGFzdEluZGV4T2YgPSBmdW5jdGlvbiBsYXN0SW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gYmlkaXJlY3Rpb25hbEluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZmFsc2UpXG59XG5cbmZ1bmN0aW9uIGhleFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICBjb25zdCByZW1haW5pbmcgPSBidWYubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cblxuICBjb25zdCBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG5cbiAgaWYgKGxlbmd0aCA+IHN0ckxlbiAvIDIpIHtcbiAgICBsZW5ndGggPSBzdHJMZW4gLyAyXG4gIH1cbiAgbGV0IGlcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgY29uc3QgcGFyc2VkID0gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihpICogMiwgMiksIDE2KVxuICAgIGlmIChudW1iZXJJc05hTihwYXJzZWQpKSByZXR1cm4gaVxuICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHBhcnNlZFxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIHV0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGFzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihhc2NpaVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYmFzZTY0V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihiYXNlNjRUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIHVjczJXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjE2bGVUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiB3cml0ZSAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZylcbiAgaWYgKG9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IG9mZnNldFxuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBvZmZzZXRbLCBsZW5ndGhdWywgZW5jb2RpbmddKVxuICB9IGVsc2UgaWYgKGlzRmluaXRlKG9mZnNldCkpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgICBpZiAoaXNGaW5pdGUobGVuZ3RoKSkge1xuICAgICAgbGVuZ3RoID0gbGVuZ3RoID4+PiAwXG4gICAgICBpZiAoZW5jb2RpbmcgPT09IHVuZGVmaW5lZCkgZW5jb2RpbmcgPSAndXRmOCdcbiAgICB9IGVsc2Uge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnQnVmZmVyLndyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldFssIGxlbmd0aF0pIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQnXG4gICAgKVxuICB9XG5cbiAgY29uc3QgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkIHx8IGxlbmd0aCA+IHJlbWFpbmluZykgbGVuZ3RoID0gcmVtYWluaW5nXG5cbiAgaWYgKChzdHJpbmcubGVuZ3RoID4gMCAmJiAobGVuZ3RoIDwgMCB8fCBvZmZzZXQgPCAwKSkgfHwgb2Zmc2V0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byB3cml0ZSBvdXRzaWRlIGJ1ZmZlciBib3VuZHMnKVxuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICBsZXQgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gYXNjaWlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICAvLyBXYXJuaW5nOiBtYXhMZW5ndGggbm90IHRha2VuIGludG8gYWNjb3VudCBpbiBiYXNlNjRXcml0ZVxuICAgICAgICByZXR1cm4gYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHVjczJXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiB1dGY4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG4gIGNvbnN0IHJlcyA9IFtdXG5cbiAgbGV0IGkgPSBzdGFydFxuICB3aGlsZSAoaSA8IGVuZCkge1xuICAgIGNvbnN0IGZpcnN0Qnl0ZSA9IGJ1ZltpXVxuICAgIGxldCBjb2RlUG9pbnQgPSBudWxsXG4gICAgbGV0IGJ5dGVzUGVyU2VxdWVuY2UgPSAoZmlyc3RCeXRlID4gMHhFRilcbiAgICAgID8gNFxuICAgICAgOiAoZmlyc3RCeXRlID4gMHhERilcbiAgICAgICAgICA/IDNcbiAgICAgICAgICA6IChmaXJzdEJ5dGUgPiAweEJGKVxuICAgICAgICAgICAgICA/IDJcbiAgICAgICAgICAgICAgOiAxXG5cbiAgICBpZiAoaSArIGJ5dGVzUGVyU2VxdWVuY2UgPD0gZW5kKSB7XG4gICAgICBsZXQgc2Vjb25kQnl0ZSwgdGhpcmRCeXRlLCBmb3VydGhCeXRlLCB0ZW1wQ29kZVBvaW50XG5cbiAgICAgIHN3aXRjaCAoYnl0ZXNQZXJTZXF1ZW5jZSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaWYgKGZpcnN0Qnl0ZSA8IDB4ODApIHtcbiAgICAgICAgICAgIGNvZGVQb2ludCA9IGZpcnN0Qnl0ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweDFGKSA8PCAweDYgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0YpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHhDIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAodGhpcmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3RkYgJiYgKHRlbXBDb2RlUG9pbnQgPCAweEQ4MDAgfHwgdGVtcENvZGVQb2ludCA+IDB4REZGRikpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgZm91cnRoQnl0ZSA9IGJ1ZltpICsgM11cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKGZvdXJ0aEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4MTIgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4QyB8ICh0aGlyZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAoZm91cnRoQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4RkZGRiAmJiB0ZW1wQ29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29kZVBvaW50ID09PSBudWxsKSB7XG4gICAgICAvLyB3ZSBkaWQgbm90IGdlbmVyYXRlIGEgdmFsaWQgY29kZVBvaW50IHNvIGluc2VydCBhXG4gICAgICAvLyByZXBsYWNlbWVudCBjaGFyIChVK0ZGRkQpIGFuZCBhZHZhbmNlIG9ubHkgMSBieXRlXG4gICAgICBjb2RlUG9pbnQgPSAweEZGRkRcbiAgICAgIGJ5dGVzUGVyU2VxdWVuY2UgPSAxXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPiAweEZGRkYpIHtcbiAgICAgIC8vIGVuY29kZSB0byB1dGYxNiAoc3Vycm9nYXRlIHBhaXIgZGFuY2UpXG4gICAgICBjb2RlUG9pbnQgLT0gMHgxMDAwMFxuICAgICAgcmVzLnB1c2goY29kZVBvaW50ID4+PiAxMCAmIDB4M0ZGIHwgMHhEODAwKVxuICAgICAgY29kZVBvaW50ID0gMHhEQzAwIHwgY29kZVBvaW50ICYgMHgzRkZcbiAgICB9XG5cbiAgICByZXMucHVzaChjb2RlUG9pbnQpXG4gICAgaSArPSBieXRlc1BlclNlcXVlbmNlXG4gIH1cblxuICByZXR1cm4gZGVjb2RlQ29kZVBvaW50c0FycmF5KHJlcylcbn1cblxuLy8gQmFzZWQgb24gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjI3NDcyNzIvNjgwNzQyLCB0aGUgYnJvd3NlciB3aXRoXG4vLyB0aGUgbG93ZXN0IGxpbWl0IGlzIENocm9tZSwgd2l0aCAweDEwMDAwIGFyZ3MuXG4vLyBXZSBnbyAxIG1hZ25pdHVkZSBsZXNzLCBmb3Igc2FmZXR5XG5jb25zdCBNQVhfQVJHVU1FTlRTX0xFTkdUSCA9IDB4MTAwMFxuXG5mdW5jdGlvbiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkgKGNvZGVQb2ludHMpIHtcbiAgY29uc3QgbGVuID0gY29kZVBvaW50cy5sZW5ndGhcbiAgaWYgKGxlbiA8PSBNQVhfQVJHVU1FTlRTX0xFTkdUSCkge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgY29kZVBvaW50cykgLy8gYXZvaWQgZXh0cmEgc2xpY2UoKVxuICB9XG5cbiAgLy8gRGVjb2RlIGluIGNodW5rcyB0byBhdm9pZCBcImNhbGwgc3RhY2sgc2l6ZSBleGNlZWRlZFwiLlxuICBsZXQgcmVzID0gJydcbiAgbGV0IGkgPSAwXG4gIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoXG4gICAgICBTdHJpbmcsXG4gICAgICBjb2RlUG9pbnRzLnNsaWNlKGksIGkgKz0gTUFYX0FSR1VNRU5UU19MRU5HVEgpXG4gICAgKVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGxldCByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0gJiAweDdGKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gbGF0aW4xU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBsZXQgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gaGV4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBjb25zdCBsZW4gPSBidWYubGVuZ3RoXG5cbiAgaWYgKCFzdGFydCB8fCBzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCB8fCBlbmQgPCAwIHx8IGVuZCA+IGxlbikgZW5kID0gbGVuXG5cbiAgbGV0IG91dCA9ICcnXG4gIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgb3V0ICs9IGhleFNsaWNlTG9va3VwVGFibGVbYnVmW2ldXVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgY29uc3QgYnl0ZXMgPSBidWYuc2xpY2Uoc3RhcnQsIGVuZClcbiAgbGV0IHJlcyA9ICcnXG4gIC8vIElmIGJ5dGVzLmxlbmd0aCBpcyBvZGQsIHRoZSBsYXN0IDggYml0cyBtdXN0IGJlIGlnbm9yZWQgKHNhbWUgYXMgbm9kZS5qcylcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGggLSAxOyBpICs9IDIpIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSArIChieXRlc1tpICsgMV0gKiAyNTYpKVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIHNsaWNlIChzdGFydCwgZW5kKSB7XG4gIGNvbnN0IGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gfn5zdGFydFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IH5+ZW5kXG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ICs9IGxlblxuICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gMFxuICB9IGVsc2UgaWYgKHN0YXJ0ID4gbGVuKSB7XG4gICAgc3RhcnQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlblxuICAgIGlmIChlbmQgPCAwKSBlbmQgPSAwXG4gIH0gZWxzZSBpZiAoZW5kID4gbGVuKSB7XG4gICAgZW5kID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgY29uc3QgbmV3QnVmID0gdGhpcy5zdWJhcnJheShzdGFydCwgZW5kKVxuICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZVxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YobmV3QnVmLCBCdWZmZXIucHJvdG90eXBlKVxuXG4gIHJldHVybiBuZXdCdWZcbn1cblxuLypcbiAqIE5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgYnVmZmVyIGlzbid0IHRyeWluZyB0byB3cml0ZSBvdXQgb2YgYm91bmRzLlxuICovXG5mdW5jdGlvbiBjaGVja09mZnNldCAob2Zmc2V0LCBleHQsIGxlbmd0aCkge1xuICBpZiAoKG9mZnNldCAlIDEpICE9PSAwIHx8IG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdvZmZzZXQgaXMgbm90IHVpbnQnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gbGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVpbnRMRSA9XG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50TEUgPSBmdW5jdGlvbiByZWFkVUludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIGxldCB2YWwgPSB0aGlzW29mZnNldF1cbiAgbGV0IG11bCA9IDFcbiAgbGV0IGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVWludEJFID1cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRCRSA9IGZ1bmN0aW9uIHJlYWRVSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuICB9XG5cbiAgbGV0IHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXVxuICBsZXQgbXVsID0gMVxuICB3aGlsZSAoYnl0ZUxlbmd0aCA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVpbnQ4ID1cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQ4ID0gZnVuY3Rpb24gcmVhZFVJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVpbnQxNkxFID1cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkxFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVWludDE2QkUgPVxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2QkUgPSBmdW5jdGlvbiByZWFkVUludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDgpIHwgdGhpc1tvZmZzZXQgKyAxXVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVaW50MzJMRSA9XG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKCh0aGlzW29mZnNldF0pIHxcbiAgICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSkgK1xuICAgICAgKHRoaXNbb2Zmc2V0ICsgM10gKiAweDEwMDAwMDApXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVpbnQzMkJFID1cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkJFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdICogMHgxMDAwMDAwKSArXG4gICAgKCh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgIHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEJpZ1VJbnQ2NExFID0gZGVmaW5lQmlnSW50TWV0aG9kKGZ1bmN0aW9uIHJlYWRCaWdVSW50NjRMRSAob2Zmc2V0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICB2YWxpZGF0ZU51bWJlcihvZmZzZXQsICdvZmZzZXQnKVxuICBjb25zdCBmaXJzdCA9IHRoaXNbb2Zmc2V0XVxuICBjb25zdCBsYXN0ID0gdGhpc1tvZmZzZXQgKyA3XVxuICBpZiAoZmlyc3QgPT09IHVuZGVmaW5lZCB8fCBsYXN0ID09PSB1bmRlZmluZWQpIHtcbiAgICBib3VuZHNFcnJvcihvZmZzZXQsIHRoaXMubGVuZ3RoIC0gOClcbiAgfVxuXG4gIGNvbnN0IGxvID0gZmlyc3QgK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiA4ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogMTYgK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiAyNFxuXG4gIGNvbnN0IGhpID0gdGhpc1srK29mZnNldF0gK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiA4ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogMTYgK1xuICAgIGxhc3QgKiAyICoqIDI0XG5cbiAgcmV0dXJuIEJpZ0ludChsbykgKyAoQmlnSW50KGhpKSA8PCBCaWdJbnQoMzIpKVxufSlcblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkQmlnVUludDY0QkUgPSBkZWZpbmVCaWdJbnRNZXRob2QoZnVuY3Rpb24gcmVhZEJpZ1VJbnQ2NEJFIChvZmZzZXQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIHZhbGlkYXRlTnVtYmVyKG9mZnNldCwgJ29mZnNldCcpXG4gIGNvbnN0IGZpcnN0ID0gdGhpc1tvZmZzZXRdXG4gIGNvbnN0IGxhc3QgPSB0aGlzW29mZnNldCArIDddXG4gIGlmIChmaXJzdCA9PT0gdW5kZWZpbmVkIHx8IGxhc3QgPT09IHVuZGVmaW5lZCkge1xuICAgIGJvdW5kc0Vycm9yKG9mZnNldCwgdGhpcy5sZW5ndGggLSA4KVxuICB9XG5cbiAgY29uc3QgaGkgPSBmaXJzdCAqIDIgKiogMjQgK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiAxNiArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDggK1xuICAgIHRoaXNbKytvZmZzZXRdXG5cbiAgY29uc3QgbG8gPSB0aGlzWysrb2Zmc2V0XSAqIDIgKiogMjQgK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiAxNiArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDggK1xuICAgIGxhc3RcblxuICByZXR1cm4gKEJpZ0ludChoaSkgPDwgQmlnSW50KDMyKSkgKyBCaWdJbnQobG8pXG59KVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRMRSA9IGZ1bmN0aW9uIHJlYWRJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICBsZXQgdmFsID0gdGhpc1tvZmZzZXRdXG4gIGxldCBtdWwgPSAxXG4gIGxldCBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50QkUgPSBmdW5jdGlvbiByZWFkSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgbGV0IGkgPSBieXRlTGVuZ3RoXG4gIGxldCBtdWwgPSAxXG4gIGxldCB2YWwgPSB0aGlzW29mZnNldCArIC0taV1cbiAgd2hpbGUgKGkgPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1pXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbiByZWFkSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgaWYgKCEodGhpc1tvZmZzZXRdICYgMHg4MCkpIHJldHVybiAodGhpc1tvZmZzZXRdKVxuICByZXR1cm4gKCgweGZmIC0gdGhpc1tvZmZzZXRdICsgMSkgKiAtMSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICBjb25zdCB2YWwgPSB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2QkUgPSBmdW5jdGlvbiByZWFkSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgY29uc3QgdmFsID0gdGhpc1tvZmZzZXQgKyAxXSB8ICh0aGlzW29mZnNldF0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkxFID0gZnVuY3Rpb24gcmVhZEludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0pIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSA8PCAyNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDI0KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEJpZ0ludDY0TEUgPSBkZWZpbmVCaWdJbnRNZXRob2QoZnVuY3Rpb24gcmVhZEJpZ0ludDY0TEUgKG9mZnNldCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgdmFsaWRhdGVOdW1iZXIob2Zmc2V0LCAnb2Zmc2V0JylcbiAgY29uc3QgZmlyc3QgPSB0aGlzW29mZnNldF1cbiAgY29uc3QgbGFzdCA9IHRoaXNbb2Zmc2V0ICsgN11cbiAgaWYgKGZpcnN0ID09PSB1bmRlZmluZWQgfHwgbGFzdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYm91bmRzRXJyb3Iob2Zmc2V0LCB0aGlzLmxlbmd0aCAtIDgpXG4gIH1cblxuICBjb25zdCB2YWwgPSB0aGlzW29mZnNldCArIDRdICtcbiAgICB0aGlzW29mZnNldCArIDVdICogMiAqKiA4ICtcbiAgICB0aGlzW29mZnNldCArIDZdICogMiAqKiAxNiArXG4gICAgKGxhc3QgPDwgMjQpIC8vIE92ZXJmbG93XG5cbiAgcmV0dXJuIChCaWdJbnQodmFsKSA8PCBCaWdJbnQoMzIpKSArXG4gICAgQmlnSW50KGZpcnN0ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogOCArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDE2ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogMjQpXG59KVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRCaWdJbnQ2NEJFID0gZGVmaW5lQmlnSW50TWV0aG9kKGZ1bmN0aW9uIHJlYWRCaWdJbnQ2NEJFIChvZmZzZXQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIHZhbGlkYXRlTnVtYmVyKG9mZnNldCwgJ29mZnNldCcpXG4gIGNvbnN0IGZpcnN0ID0gdGhpc1tvZmZzZXRdXG4gIGNvbnN0IGxhc3QgPSB0aGlzW29mZnNldCArIDddXG4gIGlmIChmaXJzdCA9PT0gdW5kZWZpbmVkIHx8IGxhc3QgPT09IHVuZGVmaW5lZCkge1xuICAgIGJvdW5kc0Vycm9yKG9mZnNldCwgdGhpcy5sZW5ndGggLSA4KVxuICB9XG5cbiAgY29uc3QgdmFsID0gKGZpcnN0IDw8IDI0KSArIC8vIE92ZXJmbG93XG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDE2ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogOCArXG4gICAgdGhpc1srK29mZnNldF1cblxuICByZXR1cm4gKEJpZ0ludCh2YWwpIDw8IEJpZ0ludCgzMikpICtcbiAgICBCaWdJbnQodGhpc1srK29mZnNldF0gKiAyICoqIDI0ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogMTYgK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiA4ICtcbiAgICBsYXN0KVxufSlcblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRMRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdExFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiByZWFkRmxvYXRCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlTEUgPSBmdW5jdGlvbiByZWFkRG91YmxlTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlQkUgPSBmdW5jdGlvbiByZWFkRG91YmxlQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgNTIsIDgpXG59XG5cbmZ1bmN0aW9uIGNoZWNrSW50IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJidWZmZXJcIiBhcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyIGluc3RhbmNlJylcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IGlzIG91dCBvZiBib3VuZHMnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVaW50TEUgPVxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlVUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNvbnN0IG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgbGV0IG11bCA9IDFcbiAgbGV0IGkgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVpbnRCRSA9XG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludEJFID0gZnVuY3Rpb24gd3JpdGVVSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY29uc3QgbWF4Qnl0ZXMgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCkgLSAxXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbWF4Qnl0ZXMsIDApXG4gIH1cblxuICBsZXQgaSA9IGJ5dGVMZW5ndGggLSAxXG4gIGxldCBtdWwgPSAxXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVWludDggPVxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVVSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4ZmYsIDApXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVaW50MTZMRSA9XG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVWludDE2QkUgPVxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVpbnQzMkxFID1cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVaW50MzJCRSA9XG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5mdW5jdGlvbiB3cnRCaWdVSW50NjRMRSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBtaW4sIG1heCkge1xuICBjaGVja0ludEJJKHZhbHVlLCBtaW4sIG1heCwgYnVmLCBvZmZzZXQsIDcpXG5cbiAgbGV0IGxvID0gTnVtYmVyKHZhbHVlICYgQmlnSW50KDB4ZmZmZmZmZmYpKVxuICBidWZbb2Zmc2V0KytdID0gbG9cbiAgbG8gPSBsbyA+PiA4XG4gIGJ1ZltvZmZzZXQrK10gPSBsb1xuICBsbyA9IGxvID4+IDhcbiAgYnVmW29mZnNldCsrXSA9IGxvXG4gIGxvID0gbG8gPj4gOFxuICBidWZbb2Zmc2V0KytdID0gbG9cbiAgbGV0IGhpID0gTnVtYmVyKHZhbHVlID4+IEJpZ0ludCgzMikgJiBCaWdJbnQoMHhmZmZmZmZmZikpXG4gIGJ1ZltvZmZzZXQrK10gPSBoaVxuICBoaSA9IGhpID4+IDhcbiAgYnVmW29mZnNldCsrXSA9IGhpXG4gIGhpID0gaGkgPj4gOFxuICBidWZbb2Zmc2V0KytdID0gaGlcbiAgaGkgPSBoaSA+PiA4XG4gIGJ1ZltvZmZzZXQrK10gPSBoaVxuICByZXR1cm4gb2Zmc2V0XG59XG5cbmZ1bmN0aW9uIHdydEJpZ1VJbnQ2NEJFIChidWYsIHZhbHVlLCBvZmZzZXQsIG1pbiwgbWF4KSB7XG4gIGNoZWNrSW50QkkodmFsdWUsIG1pbiwgbWF4LCBidWYsIG9mZnNldCwgNylcblxuICBsZXQgbG8gPSBOdW1iZXIodmFsdWUgJiBCaWdJbnQoMHhmZmZmZmZmZikpXG4gIGJ1ZltvZmZzZXQgKyA3XSA9IGxvXG4gIGxvID0gbG8gPj4gOFxuICBidWZbb2Zmc2V0ICsgNl0gPSBsb1xuICBsbyA9IGxvID4+IDhcbiAgYnVmW29mZnNldCArIDVdID0gbG9cbiAgbG8gPSBsbyA+PiA4XG4gIGJ1ZltvZmZzZXQgKyA0XSA9IGxvXG4gIGxldCBoaSA9IE51bWJlcih2YWx1ZSA+PiBCaWdJbnQoMzIpICYgQmlnSW50KDB4ZmZmZmZmZmYpKVxuICBidWZbb2Zmc2V0ICsgM10gPSBoaVxuICBoaSA9IGhpID4+IDhcbiAgYnVmW29mZnNldCArIDJdID0gaGlcbiAgaGkgPSBoaSA+PiA4XG4gIGJ1ZltvZmZzZXQgKyAxXSA9IGhpXG4gIGhpID0gaGkgPj4gOFxuICBidWZbb2Zmc2V0XSA9IGhpXG4gIHJldHVybiBvZmZzZXQgKyA4XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVCaWdVSW50NjRMRSA9IGRlZmluZUJpZ0ludE1ldGhvZChmdW5jdGlvbiB3cml0ZUJpZ1VJbnQ2NExFICh2YWx1ZSwgb2Zmc2V0ID0gMCkge1xuICByZXR1cm4gd3J0QmlnVUludDY0TEUodGhpcywgdmFsdWUsIG9mZnNldCwgQmlnSW50KDApLCBCaWdJbnQoJzB4ZmZmZmZmZmZmZmZmZmZmZicpKVxufSlcblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUJpZ1VJbnQ2NEJFID0gZGVmaW5lQmlnSW50TWV0aG9kKGZ1bmN0aW9uIHdyaXRlQmlnVUludDY0QkUgKHZhbHVlLCBvZmZzZXQgPSAwKSB7XG4gIHJldHVybiB3cnRCaWdVSW50NjRCRSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBCaWdJbnQoMCksIEJpZ0ludCgnMHhmZmZmZmZmZmZmZmZmZmZmJykpXG59KVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50TEUgPSBmdW5jdGlvbiB3cml0ZUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNvbnN0IGxpbWl0ID0gTWF0aC5wb3coMiwgKDggKiBieXRlTGVuZ3RoKSAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIGxldCBpID0gMFxuICBsZXQgbXVsID0gMVxuICBsZXQgc3ViID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgLSAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50QkUgPSBmdW5jdGlvbiB3cml0ZUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNvbnN0IGxpbWl0ID0gTWF0aC5wb3coMiwgKDggKiBieXRlTGVuZ3RoKSAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIGxldCBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgbGV0IG11bCA9IDFcbiAgbGV0IHN1YiA9IDBcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgKyAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uIHdyaXRlSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4N2YsIC0weDgwKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmYgKyB2YWx1ZSArIDFcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkJFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVCaWdJbnQ2NExFID0gZGVmaW5lQmlnSW50TWV0aG9kKGZ1bmN0aW9uIHdyaXRlQmlnSW50NjRMRSAodmFsdWUsIG9mZnNldCA9IDApIHtcbiAgcmV0dXJuIHdydEJpZ1VJbnQ2NExFKHRoaXMsIHZhbHVlLCBvZmZzZXQsIC1CaWdJbnQoJzB4ODAwMDAwMDAwMDAwMDAwMCcpLCBCaWdJbnQoJzB4N2ZmZmZmZmZmZmZmZmZmZicpKVxufSlcblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUJpZ0ludDY0QkUgPSBkZWZpbmVCaWdJbnRNZXRob2QoZnVuY3Rpb24gd3JpdGVCaWdJbnQ2NEJFICh2YWx1ZSwgb2Zmc2V0ID0gMCkge1xuICByZXR1cm4gd3J0QmlnVUludDY0QkUodGhpcywgdmFsdWUsIG9mZnNldCwgLUJpZ0ludCgnMHg4MDAwMDAwMDAwMDAwMDAwJyksIEJpZ0ludCgnMHg3ZmZmZmZmZmZmZmZmZmZmJykpXG59KVxuXG5mdW5jdGlvbiBjaGVja0lFRUU3NTQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG4gIGlmIChvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuZnVuY3Rpb24gd3JpdGVGbG9hdCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgNCwgMy40MDI4MjM0NjYzODUyODg2ZSszOCwgLTMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gd3JpdGVGbG9hdExFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDgsIDEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4LCAtMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG4gIHJldHVybiBvZmZzZXQgKyA4XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVMRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUJFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuLy8gY29weSh0YXJnZXRCdWZmZXIsIHRhcmdldFN0YXJ0PTAsIHNvdXJjZVN0YXJ0PTAsIHNvdXJjZUVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gY29weSAodGFyZ2V0LCB0YXJnZXRTdGFydCwgc3RhcnQsIGVuZCkge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih0YXJnZXQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCBzaG91bGQgYmUgYSBCdWZmZXInKVxuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgJiYgZW5kICE9PSAwKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0U3RhcnQgPj0gdGFyZ2V0Lmxlbmd0aCkgdGFyZ2V0U3RhcnQgPSB0YXJnZXQubGVuZ3RoXG4gIGlmICghdGFyZ2V0U3RhcnQpIHRhcmdldFN0YXJ0ID0gMFxuICBpZiAoZW5kID4gMCAmJiBlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICAvLyBDb3B5IDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVybiAwXG4gIGlmICh0YXJnZXQubGVuZ3RoID09PSAwIHx8IHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIEZhdGFsIGVycm9yIGNvbmRpdGlvbnNcbiAgaWYgKHRhcmdldFN0YXJ0IDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd0YXJnZXRTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgfVxuICBpZiAoc3RhcnQgPCAwIHx8IHN0YXJ0ID49IHRoaXMubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbiAgaWYgKGVuZCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0IDwgZW5kIC0gc3RhcnQpIHtcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgKyBzdGFydFxuICB9XG5cbiAgY29uc3QgbGVuID0gZW5kIC0gc3RhcnRcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0ICYmIHR5cGVvZiBVaW50OEFycmF5LnByb3RvdHlwZS5jb3B5V2l0aGluID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gVXNlIGJ1aWx0LWluIHdoZW4gYXZhaWxhYmxlLCBtaXNzaW5nIGZyb20gSUUxMVxuICAgIHRoaXMuY29weVdpdGhpbih0YXJnZXRTdGFydCwgc3RhcnQsIGVuZClcbiAgfSBlbHNlIHtcbiAgICBVaW50OEFycmF5LnByb3RvdHlwZS5zZXQuY2FsbChcbiAgICAgIHRhcmdldCxcbiAgICAgIHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZCksXG4gICAgICB0YXJnZXRTdGFydFxuICAgIClcbiAgfVxuXG4gIHJldHVybiBsZW5cbn1cblxuLy8gVXNhZ2U6XG4vLyAgICBidWZmZXIuZmlsbChudW1iZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKGJ1ZmZlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoc3RyaW5nWywgb2Zmc2V0WywgZW5kXV1bLCBlbmNvZGluZ10pXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiBmaWxsICh2YWwsIHN0YXJ0LCBlbmQsIGVuY29kaW5nKSB7XG4gIC8vIEhhbmRsZSBzdHJpbmcgY2FzZXM6XG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIGlmICh0eXBlb2Ygc3RhcnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IHN0YXJ0XG4gICAgICBzdGFydCA9IDBcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZW5kID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBlbmRcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfVxuICAgIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2VuY29kaW5nIG11c3QgYmUgYSBzdHJpbmcnKVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJyAmJiAhQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgfVxuICAgIGlmICh2YWwubGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBjb2RlID0gdmFsLmNoYXJDb2RlQXQoMClcbiAgICAgIGlmICgoZW5jb2RpbmcgPT09ICd1dGY4JyAmJiBjb2RlIDwgMTI4KSB8fFxuICAgICAgICAgIGVuY29kaW5nID09PSAnbGF0aW4xJykge1xuICAgICAgICAvLyBGYXN0IHBhdGg6IElmIGB2YWxgIGZpdHMgaW50byBhIHNpbmdsZSBieXRlLCB1c2UgdGhhdCBudW1lcmljIHZhbHVlLlxuICAgICAgICB2YWwgPSBjb2RlXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMjU1XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgdmFsID0gTnVtYmVyKHZhbClcbiAgfVxuXG4gIC8vIEludmFsaWQgcmFuZ2VzIGFyZSBub3Qgc2V0IHRvIGEgZGVmYXVsdCwgc28gY2FuIHJhbmdlIGNoZWNrIGVhcmx5LlxuICBpZiAoc3RhcnQgPCAwIHx8IHRoaXMubGVuZ3RoIDwgc3RhcnQgfHwgdGhpcy5sZW5ndGggPCBlbmQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignT3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgc3RhcnQgPSBzdGFydCA+Pj4gMFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IHRoaXMubGVuZ3RoIDogZW5kID4+PiAwXG5cbiAgaWYgKCF2YWwpIHZhbCA9IDBcblxuICBsZXQgaVxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgICB0aGlzW2ldID0gdmFsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IGJ5dGVzID0gQnVmZmVyLmlzQnVmZmVyKHZhbClcbiAgICAgID8gdmFsXG4gICAgICA6IEJ1ZmZlci5mcm9tKHZhbCwgZW5jb2RpbmcpXG4gICAgY29uc3QgbGVuID0gYnl0ZXMubGVuZ3RoXG4gICAgaWYgKGxlbiA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIHZhbHVlIFwiJyArIHZhbCArXG4gICAgICAgICdcIiBpcyBpbnZhbGlkIGZvciBhcmd1bWVudCBcInZhbHVlXCInKVxuICAgIH1cbiAgICBmb3IgKGkgPSAwOyBpIDwgZW5kIC0gc3RhcnQ7ICsraSkge1xuICAgICAgdGhpc1tpICsgc3RhcnRdID0gYnl0ZXNbaSAlIGxlbl1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG4vLyBDVVNUT00gRVJST1JTXG4vLyA9PT09PT09PT09PT09XG5cbi8vIFNpbXBsaWZpZWQgdmVyc2lvbnMgZnJvbSBOb2RlLCBjaGFuZ2VkIGZvciBCdWZmZXItb25seSB1c2FnZVxuY29uc3QgZXJyb3JzID0ge31cbmZ1bmN0aW9uIEUgKHN5bSwgZ2V0TWVzc2FnZSwgQmFzZSkge1xuICBlcnJvcnNbc3ltXSA9IGNsYXNzIE5vZGVFcnJvciBleHRlbmRzIEJhc2Uge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgIHN1cGVyKClcblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdtZXNzYWdlJywge1xuICAgICAgICB2YWx1ZTogZ2V0TWVzc2FnZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9KVxuXG4gICAgICAvLyBBZGQgdGhlIGVycm9yIGNvZGUgdG8gdGhlIG5hbWUgdG8gaW5jbHVkZSBpdCBpbiB0aGUgc3RhY2sgdHJhY2UuXG4gICAgICB0aGlzLm5hbWUgPSBgJHt0aGlzLm5hbWV9IFske3N5bX1dYFxuICAgICAgLy8gQWNjZXNzIHRoZSBzdGFjayB0byBnZW5lcmF0ZSB0aGUgZXJyb3IgbWVzc2FnZSBpbmNsdWRpbmcgdGhlIGVycm9yIGNvZGVcbiAgICAgIC8vIGZyb20gdGhlIG5hbWUuXG4gICAgICB0aGlzLnN0YWNrIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG4gICAgICAvLyBSZXNldCB0aGUgbmFtZSB0byB0aGUgYWN0dWFsIG5hbWUuXG4gICAgICBkZWxldGUgdGhpcy5uYW1lXG4gICAgfVxuXG4gICAgZ2V0IGNvZGUgKCkge1xuICAgICAgcmV0dXJuIHN5bVxuICAgIH1cblxuICAgIHNldCBjb2RlICh2YWx1ZSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdjb2RlJywge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0b1N0cmluZyAoKSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5uYW1lfSBbJHtzeW19XTogJHt0aGlzLm1lc3NhZ2V9YFxuICAgIH1cbiAgfVxufVxuXG5FKCdFUlJfQlVGRkVSX09VVF9PRl9CT1VORFMnLFxuICBmdW5jdGlvbiAobmFtZSkge1xuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gYCR7bmFtZX0gaXMgb3V0c2lkZSBvZiBidWZmZXIgYm91bmRzYFxuICAgIH1cblxuICAgIHJldHVybiAnQXR0ZW1wdCB0byBhY2Nlc3MgbWVtb3J5IG91dHNpZGUgYnVmZmVyIGJvdW5kcydcbiAgfSwgUmFuZ2VFcnJvcilcbkUoJ0VSUl9JTlZBTElEX0FSR19UWVBFJyxcbiAgZnVuY3Rpb24gKG5hbWUsIGFjdHVhbCkge1xuICAgIHJldHVybiBgVGhlIFwiJHtuYW1lfVwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBudW1iZXIuIFJlY2VpdmVkIHR5cGUgJHt0eXBlb2YgYWN0dWFsfWBcbiAgfSwgVHlwZUVycm9yKVxuRSgnRVJSX09VVF9PRl9SQU5HRScsXG4gIGZ1bmN0aW9uIChzdHIsIHJhbmdlLCBpbnB1dCkge1xuICAgIGxldCBtc2cgPSBgVGhlIHZhbHVlIG9mIFwiJHtzdHJ9XCIgaXMgb3V0IG9mIHJhbmdlLmBcbiAgICBsZXQgcmVjZWl2ZWQgPSBpbnB1dFxuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGlucHV0KSAmJiBNYXRoLmFicyhpbnB1dCkgPiAyICoqIDMyKSB7XG4gICAgICByZWNlaXZlZCA9IGFkZE51bWVyaWNhbFNlcGFyYXRvcihTdHJpbmcoaW5wdXQpKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGlucHV0ID09PSAnYmlnaW50Jykge1xuICAgICAgcmVjZWl2ZWQgPSBTdHJpbmcoaW5wdXQpXG4gICAgICBpZiAoaW5wdXQgPiBCaWdJbnQoMikgKiogQmlnSW50KDMyKSB8fCBpbnB1dCA8IC0oQmlnSW50KDIpICoqIEJpZ0ludCgzMikpKSB7XG4gICAgICAgIHJlY2VpdmVkID0gYWRkTnVtZXJpY2FsU2VwYXJhdG9yKHJlY2VpdmVkKVxuICAgICAgfVxuICAgICAgcmVjZWl2ZWQgKz0gJ24nXG4gICAgfVxuICAgIG1zZyArPSBgIEl0IG11c3QgYmUgJHtyYW5nZX0uIFJlY2VpdmVkICR7cmVjZWl2ZWR9YFxuICAgIHJldHVybiBtc2dcbiAgfSwgUmFuZ2VFcnJvcilcblxuZnVuY3Rpb24gYWRkTnVtZXJpY2FsU2VwYXJhdG9yICh2YWwpIHtcbiAgbGV0IHJlcyA9ICcnXG4gIGxldCBpID0gdmFsLmxlbmd0aFxuICBjb25zdCBzdGFydCA9IHZhbFswXSA9PT0gJy0nID8gMSA6IDBcbiAgZm9yICg7IGkgPj0gc3RhcnQgKyA0OyBpIC09IDMpIHtcbiAgICByZXMgPSBgXyR7dmFsLnNsaWNlKGkgLSAzLCBpKX0ke3Jlc31gXG4gIH1cbiAgcmV0dXJuIGAke3ZhbC5zbGljZSgwLCBpKX0ke3Jlc31gXG59XG5cbi8vIENIRUNLIEZVTkNUSU9OU1xuLy8gPT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIGNoZWNrQm91bmRzIChidWYsIG9mZnNldCwgYnl0ZUxlbmd0aCkge1xuICB2YWxpZGF0ZU51bWJlcihvZmZzZXQsICdvZmZzZXQnKVxuICBpZiAoYnVmW29mZnNldF0gPT09IHVuZGVmaW5lZCB8fCBidWZbb2Zmc2V0ICsgYnl0ZUxlbmd0aF0gPT09IHVuZGVmaW5lZCkge1xuICAgIGJvdW5kc0Vycm9yKG9mZnNldCwgYnVmLmxlbmd0aCAtIChieXRlTGVuZ3RoICsgMSkpXG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tJbnRCSSAodmFsdWUsIG1pbiwgbWF4LCBidWYsIG9mZnNldCwgYnl0ZUxlbmd0aCkge1xuICBpZiAodmFsdWUgPiBtYXggfHwgdmFsdWUgPCBtaW4pIHtcbiAgICBjb25zdCBuID0gdHlwZW9mIG1pbiA9PT0gJ2JpZ2ludCcgPyAnbicgOiAnJ1xuICAgIGxldCByYW5nZVxuICAgIGlmIChieXRlTGVuZ3RoID4gMykge1xuICAgICAgaWYgKG1pbiA9PT0gMCB8fCBtaW4gPT09IEJpZ0ludCgwKSkge1xuICAgICAgICByYW5nZSA9IGA+PSAwJHtufSBhbmQgPCAyJHtufSAqKiAkeyhieXRlTGVuZ3RoICsgMSkgKiA4fSR7bn1gXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByYW5nZSA9IGA+PSAtKDIke259ICoqICR7KGJ5dGVMZW5ndGggKyAxKSAqIDggLSAxfSR7bn0pIGFuZCA8IDIgKiogYCArXG4gICAgICAgICAgICAgICAgYCR7KGJ5dGVMZW5ndGggKyAxKSAqIDggLSAxfSR7bn1gXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJhbmdlID0gYD49ICR7bWlufSR7bn0gYW5kIDw9ICR7bWF4fSR7bn1gXG4gICAgfVxuICAgIHRocm93IG5ldyBlcnJvcnMuRVJSX09VVF9PRl9SQU5HRSgndmFsdWUnLCByYW5nZSwgdmFsdWUpXG4gIH1cbiAgY2hlY2tCb3VuZHMoYnVmLCBvZmZzZXQsIGJ5dGVMZW5ndGgpXG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlTnVtYmVyICh2YWx1ZSwgbmFtZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBlcnJvcnMuRVJSX0lOVkFMSURfQVJHX1RZUEUobmFtZSwgJ251bWJlcicsIHZhbHVlKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJvdW5kc0Vycm9yICh2YWx1ZSwgbGVuZ3RoLCB0eXBlKSB7XG4gIGlmIChNYXRoLmZsb29yKHZhbHVlKSAhPT0gdmFsdWUpIHtcbiAgICB2YWxpZGF0ZU51bWJlcih2YWx1ZSwgdHlwZSlcbiAgICB0aHJvdyBuZXcgZXJyb3JzLkVSUl9PVVRfT0ZfUkFOR0UodHlwZSB8fCAnb2Zmc2V0JywgJ2FuIGludGVnZXInLCB2YWx1ZSlcbiAgfVxuXG4gIGlmIChsZW5ndGggPCAwKSB7XG4gICAgdGhyb3cgbmV3IGVycm9ycy5FUlJfQlVGRkVSX09VVF9PRl9CT1VORFMoKVxuICB9XG5cbiAgdGhyb3cgbmV3IGVycm9ycy5FUlJfT1VUX09GX1JBTkdFKHR5cGUgfHwgJ29mZnNldCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgPj0gJHt0eXBlID8gMSA6IDB9IGFuZCA8PSAke2xlbmd0aH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUpXG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxuY29uc3QgSU5WQUxJRF9CQVNFNjRfUkUgPSAvW14rLzAtOUEtWmEtei1fXS9nXG5cbmZ1bmN0aW9uIGJhc2U2NGNsZWFuIChzdHIpIHtcbiAgLy8gTm9kZSB0YWtlcyBlcXVhbCBzaWducyBhcyBlbmQgb2YgdGhlIEJhc2U2NCBlbmNvZGluZ1xuICBzdHIgPSBzdHIuc3BsaXQoJz0nKVswXVxuICAvLyBOb2RlIHN0cmlwcyBvdXQgaW52YWxpZCBjaGFyYWN0ZXJzIGxpa2UgXFxuIGFuZCBcXHQgZnJvbSB0aGUgc3RyaW5nLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgc3RyID0gc3RyLnRyaW0oKS5yZXBsYWNlKElOVkFMSURfQkFTRTY0X1JFLCAnJylcbiAgLy8gTm9kZSBjb252ZXJ0cyBzdHJpbmdzIHdpdGggbGVuZ3RoIDwgMiB0byAnJ1xuICBpZiAoc3RyLmxlbmd0aCA8IDIpIHJldHVybiAnJ1xuICAvLyBOb2RlIGFsbG93cyBmb3Igbm9uLXBhZGRlZCBiYXNlNjQgc3RyaW5ncyAobWlzc2luZyB0cmFpbGluZyA9PT0pLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgd2hpbGUgKHN0ci5sZW5ndGggJSA0ICE9PSAwKSB7XG4gICAgc3RyID0gc3RyICsgJz0nXG4gIH1cbiAgcmV0dXJuIHN0clxufVxuXG5mdW5jdGlvbiB1dGY4VG9CeXRlcyAoc3RyaW5nLCB1bml0cykge1xuICB1bml0cyA9IHVuaXRzIHx8IEluZmluaXR5XG4gIGxldCBjb2RlUG9pbnRcbiAgY29uc3QgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aFxuICBsZXQgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcbiAgY29uc3QgYnl0ZXMgPSBbXVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBjb2RlUG9pbnQgPSBzdHJpbmcuY2hhckNvZGVBdChpKVxuXG4gICAgLy8gaXMgc3Vycm9nYXRlIGNvbXBvbmVudFxuICAgIGlmIChjb2RlUG9pbnQgPiAweEQ3RkYgJiYgY29kZVBvaW50IDwgMHhFMDAwKSB7XG4gICAgICAvLyBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCFsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAgIC8vIG5vIGxlYWQgeWV0XG4gICAgICAgIGlmIChjb2RlUG9pbnQgPiAweERCRkYpIHtcbiAgICAgICAgICAvLyB1bmV4cGVjdGVkIHRyYWlsXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfSBlbHNlIGlmIChpICsgMSA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgLy8gdW5wYWlyZWQgbGVhZFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyB2YWxpZCBsZWFkXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyAyIGxlYWRzIGluIGEgcm93XG4gICAgICBpZiAoY29kZVBvaW50IDwgMHhEQzAwKSB7XG4gICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIHZhbGlkIHN1cnJvZ2F0ZSBwYWlyXG4gICAgICBjb2RlUG9pbnQgPSAobGVhZFN1cnJvZ2F0ZSAtIDB4RDgwMCA8PCAxMCB8IGNvZGVQb2ludCAtIDB4REMwMCkgKyAweDEwMDAwXG4gICAgfSBlbHNlIGlmIChsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAvLyB2YWxpZCBibXAgY2hhciwgYnV0IGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICB9XG5cbiAgICBsZWFkU3Vycm9nYXRlID0gbnVsbFxuXG4gICAgLy8gZW5jb2RlIHV0ZjhcbiAgICBpZiAoY29kZVBvaW50IDwgMHg4MCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAxKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKGNvZGVQb2ludClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4ODAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgfCAweEMwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAzKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDIHwgMHhFMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gNCkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4MTIgfCAweEYwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNvZGUgcG9pbnQnKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBieXRlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVRvQnl0ZXMgKHN0cikge1xuICBjb25zdCBieXRlQXJyYXkgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIsIHVuaXRzKSB7XG4gIGxldCBjLCBoaSwgbG9cbiAgY29uc3QgYnl0ZUFycmF5ID0gW11cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcblxuICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhpID0gYyA+PiA4XG4gICAgbG8gPSBjICUgMjU2XG4gICAgYnl0ZUFycmF5LnB1c2gobG8pXG4gICAgYnl0ZUFycmF5LnB1c2goaGkpXG4gIH1cblxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFRvQnl0ZXMgKHN0cikge1xuICByZXR1cm4gYmFzZTY0LnRvQnl0ZUFycmF5KGJhc2U2NGNsZWFuKHN0cikpXG59XG5cbmZ1bmN0aW9uIGJsaXRCdWZmZXIgKHNyYywgZHN0LCBvZmZzZXQsIGxlbmd0aCkge1xuICBsZXQgaVxuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKGkgKyBvZmZzZXQgPj0gZHN0Lmxlbmd0aCkgfHwgKGkgPj0gc3JjLmxlbmd0aCkpIGJyZWFrXG4gICAgZHN0W2kgKyBvZmZzZXRdID0gc3JjW2ldXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuLy8gQXJyYXlCdWZmZXIgb3IgVWludDhBcnJheSBvYmplY3RzIGZyb20gb3RoZXIgY29udGV4dHMgKGkuZS4gaWZyYW1lcykgZG8gbm90IHBhc3Ncbi8vIHRoZSBgaW5zdGFuY2VvZmAgY2hlY2sgYnV0IHRoZXkgc2hvdWxkIGJlIHRyZWF0ZWQgYXMgb2YgdGhhdCB0eXBlLlxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9pc3N1ZXMvMTY2XG5mdW5jdGlvbiBpc0luc3RhbmNlIChvYmosIHR5cGUpIHtcbiAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIHR5cGUgfHxcbiAgICAob2JqICE9IG51bGwgJiYgb2JqLmNvbnN0cnVjdG9yICE9IG51bGwgJiYgb2JqLmNvbnN0cnVjdG9yLm5hbWUgIT0gbnVsbCAmJlxuICAgICAgb2JqLmNvbnN0cnVjdG9yLm5hbWUgPT09IHR5cGUubmFtZSlcbn1cbmZ1bmN0aW9uIG51bWJlcklzTmFOIChvYmopIHtcbiAgLy8gRm9yIElFMTEgc3VwcG9ydFxuICByZXR1cm4gb2JqICE9PSBvYmogLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zZWxmLWNvbXBhcmVcbn1cblxuLy8gQ3JlYXRlIGxvb2t1cCB0YWJsZSBmb3IgYHRvU3RyaW5nKCdoZXgnKWBcbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvaXNzdWVzLzIxOVxuY29uc3QgaGV4U2xpY2VMb29rdXBUYWJsZSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGFscGhhYmV0ID0gJzAxMjM0NTY3ODlhYmNkZWYnXG4gIGNvbnN0IHRhYmxlID0gbmV3IEFycmF5KDI1NilcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgY29uc3QgaTE2ID0gaSAqIDE2XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxNjsgKytqKSB7XG4gICAgICB0YWJsZVtpMTYgKyBqXSA9IGFscGhhYmV0W2ldICsgYWxwaGFiZXRbal1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRhYmxlXG59KSgpXG5cbi8vIFJldHVybiBub3QgZnVuY3Rpb24gd2l0aCBFcnJvciBpZiBCaWdJbnQgbm90IHN1cHBvcnRlZFxuZnVuY3Rpb24gZGVmaW5lQmlnSW50TWV0aG9kIChmbikge1xuICByZXR1cm4gdHlwZW9mIEJpZ0ludCA9PT0gJ3VuZGVmaW5lZCcgPyBCdWZmZXJCaWdJbnROb3REZWZpbmVkIDogZm5cbn1cblxuZnVuY3Rpb24gQnVmZmVyQmlnSW50Tm90RGVmaW5lZCAoKSB7XG4gIHRocm93IG5ldyBFcnJvcignQmlnSW50IG5vdCBzdXBwb3J0ZWQnKVxufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZ2xpZGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4uZ2xpZGUgKiB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG4uZ2xpZGVfX3RyYWNrIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5nbGlkZV9fc2xpZGVzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICB0b3VjaC1hY3Rpb246IHBhbi1ZO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcXG59XFxuLmdsaWRlX19zbGlkZXMtLWRyYWdnaW5nIHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4uZ2xpZGVfX3NsaWRlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4uZ2xpZGVfX3NsaWRlIGEge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5nbGlkZV9fYXJyb3dzIHtcXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4uZ2xpZGVfX2J1bGxldHMge1xcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5nbGlkZS0tcnRsIHtcXG4gIGRpcmVjdGlvbjogcnRsO1xcbn1cXG5cXG4vKiMgc291cmNlTWFwcGluZ1VSTD1nbGlkZS5jb3JlLmNzcy5tYXAgKi9cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2dsaWRlLmNvcmUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFDM0Isd0NBQXdDO0FBQzFDO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUEseUNBQXlDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5nbGlkZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5nbGlkZSAqIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcbi5nbGlkZV9fdHJhY2sge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmdsaWRlX19zbGlkZXMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gIHRvdWNoLWFjdGlvbjogcGFuLVk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xcbn1cXG4uZ2xpZGVfX3NsaWRlcy0tZHJhZ2dpbmcge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5nbGlkZV9fc2xpZGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmbGV4LXNocmluazogMDtcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5nbGlkZV9fc2xpZGUgYSB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLmdsaWRlX19hcnJvd3Mge1xcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5nbGlkZV9fYnVsbGV0cyB7XFxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLmdsaWRlLS1ydGwge1xcbiAgZGlyZWN0aW9uOiBydGw7XFxufVxcblxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWdsaWRlLmNvcmUuY3NzLm1hcCAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5nbGlkZV9fYXJyb3cge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0b3A6IDUwJTtcXG4gIHotaW5kZXg6IDI7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgcGFkZGluZzogOXB4IDEycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJveC1zaGFkb3c6IDAgMC4yNWVtIDAuNWVtIDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgdGV4dC1zaGFkb3c6IDAgMC4yNWVtIDAuNWVtIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIG9wYWNpdHk6IDE7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGVhc2UsIGJvcmRlciAzMDBtcyBlYXNlLWluLW91dDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG4uZ2xpZGVfX2Fycm93OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5nbGlkZV9fYXJyb3c6aG92ZXIge1xcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG59XFxuLmdsaWRlX19hcnJvdy0tbGVmdCB7XFxuICBsZWZ0OiAyZW07XFxufVxcbi5nbGlkZV9fYXJyb3ctLXJpZ2h0IHtcXG4gIHJpZ2h0OiAyZW07XFxufVxcbi5nbGlkZV9fYXJyb3ctLWRpc2FibGVkIHtcXG4gIG9wYWNpdHk6IDAuMzM7XFxufVxcbi5nbGlkZV9fYnVsbGV0cyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAyO1xcbiAgYm90dG9tOiAyZW07XFxuICBsZWZ0OiA1MCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxufVxcbi5nbGlkZV9fYnVsbGV0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIHdpZHRoOiA5cHg7XFxuICBoZWlnaHQ6IDlweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgYm94LXNoYWRvdzogMCAwLjI1ZW0gMC41ZW0gMCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBtYXJnaW46IDAgMC4yNWVtO1xcbn1cXG4uZ2xpZGVfX2J1bGxldDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4uZ2xpZGVfX2J1bGxldDpob3ZlciwgLmdsaWRlX19idWxsZXQ6Zm9jdXMge1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcbi5nbGlkZV9fYnVsbGV0LS1hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5nbGlkZS0tc3dpcGVhYmxlIHtcXG4gIGN1cnNvcjogZ3JhYjtcXG4gIGN1cnNvcjogLW1vei1ncmFiO1xcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XFxufVxcbi5nbGlkZS0tZHJhZ2dpbmcge1xcbiAgY3Vyc29yOiBncmFiYmluZztcXG4gIGN1cnNvcjogLW1vei1ncmFiYmluZztcXG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcXG59XFxuXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9Z2xpZGUudGhlbWUuY3NzLm1hcCAqL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvZ2xpZGUudGhlbWUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxRQUFRO0VBQ1IsVUFBVTtFQUNWLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QiwwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLCtDQUErQztFQUMvQyw4Q0FBOEM7RUFDOUMsVUFBVTtFQUNWLGVBQWU7RUFDZix3REFBd0Q7RUFDeEQsMkJBQTJCO0VBQzNCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLDBDQUEwQztFQUMxQyxVQUFVO0VBQ1YsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsY0FBYztFQUNkLCtDQUErQztFQUMvQyxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDBDQUEwQztBQUM1QztBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQix3QkFBd0I7QUFDMUI7O0FBRUEsMENBQTBDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5nbGlkZV9fYXJyb3cge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0b3A6IDUwJTtcXG4gIHotaW5kZXg6IDI7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgcGFkZGluZzogOXB4IDEycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJveC1zaGFkb3c6IDAgMC4yNWVtIDAuNWVtIDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgdGV4dC1zaGFkb3c6IDAgMC4yNWVtIDAuNWVtIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIG9wYWNpdHk6IDE7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGVhc2UsIGJvcmRlciAzMDBtcyBlYXNlLWluLW91dDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG4uZ2xpZGVfX2Fycm93OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5nbGlkZV9fYXJyb3c6aG92ZXIge1xcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG59XFxuLmdsaWRlX19hcnJvdy0tbGVmdCB7XFxuICBsZWZ0OiAyZW07XFxufVxcbi5nbGlkZV9fYXJyb3ctLXJpZ2h0IHtcXG4gIHJpZ2h0OiAyZW07XFxufVxcbi5nbGlkZV9fYXJyb3ctLWRpc2FibGVkIHtcXG4gIG9wYWNpdHk6IDAuMzM7XFxufVxcbi5nbGlkZV9fYnVsbGV0cyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAyO1xcbiAgYm90dG9tOiAyZW07XFxuICBsZWZ0OiA1MCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxufVxcbi5nbGlkZV9fYnVsbGV0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIHdpZHRoOiA5cHg7XFxuICBoZWlnaHQ6IDlweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgYm94LXNoYWRvdzogMCAwLjI1ZW0gMC41ZW0gMCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBtYXJnaW46IDAgMC4yNWVtO1xcbn1cXG4uZ2xpZGVfX2J1bGxldDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4uZ2xpZGVfX2J1bGxldDpob3ZlciwgLmdsaWRlX19idWxsZXQ6Zm9jdXMge1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcbi5nbGlkZV9fYnVsbGV0LS1hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5nbGlkZS0tc3dpcGVhYmxlIHtcXG4gIGN1cnNvcjogZ3JhYjtcXG4gIGN1cnNvcjogLW1vei1ncmFiO1xcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XFxufVxcbi5nbGlkZS0tZHJhZ2dpbmcge1xcbiAgY3Vyc29yOiBncmFiYmluZztcXG4gIGN1cnNvcjogLW1vei1ncmFiYmluZztcXG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcXG59XFxuXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9Z2xpZGUudGhlbWUuY3NzLm1hcCAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbGlkZS5jb3JlLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsaWRlLnRoZW1lLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmFjdGl2ZS1tZW51IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiA5OTk5O1xcclxcbiAgICB0b3A6IDgwJTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIGhlaWdodDogMjAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5hY3RpdmUtbWVudSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgei1pbmRleDogOTk5OTtcXHJcXG4gICAgdG9wOiA4MCU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICBoZWlnaHQ6IDIwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcHR1cmUtcHJldmlldyB7XFxyXFxuICAgIHotaW5kZXg6IDk5OTk7XFxyXFxufVxcclxcblxcclxcbi50aW1lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNjYW1lcmEtdGltZXIge1xcclxcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5nbGlkZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxyXFxuICAgIGhlaWdodDogNSU7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NlbmUtaXRlbSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgICBoZWlnaHQ6IDEyMHB4O1xcclxcbiAgICB3aWR0aDogMTIwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLmdsaWRlX19zbGlkZS0tYWN0aXZlIGRpdiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxuICAgIGhlaWdodDogMTQ1cHg7XFxyXFxuICAgIHdpZHRoOiAxNDVweDtcXHJcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFFBQVE7SUFDUixPQUFPO0lBQ1AsUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsUUFBUTtJQUNSLE9BQU87SUFDUCxRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4vZ2xpZGUuY29yZS5jc3MnO1xcclxcbkBpbXBvcnQgJy4vZ2xpZGUudGhlbWUuY3NzJztcXHJcXG5cXHJcXG5cXHJcXG4uYWN0aXZlLW1lbnUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDk5OTk7XFxyXFxuICAgIHRvcDogODAlO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgaGVpZ2h0OiAyMCU7XFxyXFxufVxcclxcblxcclxcbi5pbmFjdGl2ZS1tZW51IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiA5OTk5O1xcclxcbiAgICB0b3A6IDgwJTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIGhlaWdodDogMjAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FwdHVyZS1wcmV2aWV3IHtcXHJcXG4gICAgei1pbmRleDogOTk5OTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2NhbWVyYS10aW1lciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmdsaWRlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXHJcXG4gICAgaGVpZ2h0OiA1JTtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zY2VuZS1pdGVtIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuICAgIGhlaWdodDogMTIwcHg7XFxyXFxuICAgIHdpZHRoOiAxMjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2xpZGVfX3NsaWRlLS1hY3RpdmUgZGl2IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG4gICAgaGVpZ2h0OiAxNDVweDtcXHJcXG4gICAgd2lkdGg6IDE0NXB4O1xcclxcbn1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbi8qKlxuICogVGhpcyBpcyB0aGUgd2ViIGJyb3dzZXIgaW1wbGVtZW50YXRpb24gb2YgYGRlYnVnKClgLlxuICovXG5cbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuZXhwb3J0cy5zdG9yYWdlID0gbG9jYWxzdG9yYWdlKCk7XG5leHBvcnRzLmRlc3Ryb3kgPSAoKCkgPT4ge1xuXHRsZXQgd2FybmVkID0gZmFsc2U7XG5cblx0cmV0dXJuICgpID0+IHtcblx0XHRpZiAoIXdhcm5lZCkge1xuXHRcdFx0d2FybmVkID0gdHJ1ZTtcblx0XHRcdGNvbnNvbGUud2FybignSW5zdGFuY2UgbWV0aG9kIGBkZWJ1Zy5kZXN0cm95KClgIGlzIGRlcHJlY2F0ZWQgYW5kIG5vIGxvbmdlciBkb2VzIGFueXRoaW5nLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbiBvZiBgZGVidWdgLicpO1xuXHRcdH1cblx0fTtcbn0pKCk7XG5cbi8qKlxuICogQ29sb3JzLlxuICovXG5cbmV4cG9ydHMuY29sb3JzID0gW1xuXHQnIzAwMDBDQycsXG5cdCcjMDAwMEZGJyxcblx0JyMwMDMzQ0MnLFxuXHQnIzAwMzNGRicsXG5cdCcjMDA2NkNDJyxcblx0JyMwMDY2RkYnLFxuXHQnIzAwOTlDQycsXG5cdCcjMDA5OUZGJyxcblx0JyMwMENDMDAnLFxuXHQnIzAwQ0MzMycsXG5cdCcjMDBDQzY2Jyxcblx0JyMwMENDOTknLFxuXHQnIzAwQ0NDQycsXG5cdCcjMDBDQ0ZGJyxcblx0JyMzMzAwQ0MnLFxuXHQnIzMzMDBGRicsXG5cdCcjMzMzM0NDJyxcblx0JyMzMzMzRkYnLFxuXHQnIzMzNjZDQycsXG5cdCcjMzM2NkZGJyxcblx0JyMzMzk5Q0MnLFxuXHQnIzMzOTlGRicsXG5cdCcjMzNDQzAwJyxcblx0JyMzM0NDMzMnLFxuXHQnIzMzQ0M2NicsXG5cdCcjMzNDQzk5Jyxcblx0JyMzM0NDQ0MnLFxuXHQnIzMzQ0NGRicsXG5cdCcjNjYwMENDJyxcblx0JyM2NjAwRkYnLFxuXHQnIzY2MzNDQycsXG5cdCcjNjYzM0ZGJyxcblx0JyM2NkNDMDAnLFxuXHQnIzY2Q0MzMycsXG5cdCcjOTkwMENDJyxcblx0JyM5OTAwRkYnLFxuXHQnIzk5MzNDQycsXG5cdCcjOTkzM0ZGJyxcblx0JyM5OUNDMDAnLFxuXHQnIzk5Q0MzMycsXG5cdCcjQ0MwMDAwJyxcblx0JyNDQzAwMzMnLFxuXHQnI0NDMDA2NicsXG5cdCcjQ0MwMDk5Jyxcblx0JyNDQzAwQ0MnLFxuXHQnI0NDMDBGRicsXG5cdCcjQ0MzMzAwJyxcblx0JyNDQzMzMzMnLFxuXHQnI0NDMzM2NicsXG5cdCcjQ0MzMzk5Jyxcblx0JyNDQzMzQ0MnLFxuXHQnI0NDMzNGRicsXG5cdCcjQ0M2NjAwJyxcblx0JyNDQzY2MzMnLFxuXHQnI0NDOTkwMCcsXG5cdCcjQ0M5OTMzJyxcblx0JyNDQ0NDMDAnLFxuXHQnI0NDQ0MzMycsXG5cdCcjRkYwMDAwJyxcblx0JyNGRjAwMzMnLFxuXHQnI0ZGMDA2NicsXG5cdCcjRkYwMDk5Jyxcblx0JyNGRjAwQ0MnLFxuXHQnI0ZGMDBGRicsXG5cdCcjRkYzMzAwJyxcblx0JyNGRjMzMzMnLFxuXHQnI0ZGMzM2NicsXG5cdCcjRkYzMzk5Jyxcblx0JyNGRjMzQ0MnLFxuXHQnI0ZGMzNGRicsXG5cdCcjRkY2NjAwJyxcblx0JyNGRjY2MzMnLFxuXHQnI0ZGOTkwMCcsXG5cdCcjRkY5OTMzJyxcblx0JyNGRkNDMDAnLFxuXHQnI0ZGQ0MzMydcbl07XG5cbi8qKlxuICogQ3VycmVudGx5IG9ubHkgV2ViS2l0LWJhc2VkIFdlYiBJbnNwZWN0b3JzLCBGaXJlZm94ID49IHYzMSxcbiAqIGFuZCB0aGUgRmlyZWJ1ZyBleHRlbnNpb24gKGFueSBGaXJlZm94IHZlcnNpb24pIGFyZSBrbm93blxuICogdG8gc3VwcG9ydCBcIiVjXCIgQ1NTIGN1c3RvbWl6YXRpb25zLlxuICpcbiAqIFRPRE86IGFkZCBhIGBsb2NhbFN0b3JhZ2VgIHZhcmlhYmxlIHRvIGV4cGxpY2l0bHkgZW5hYmxlL2Rpc2FibGUgY29sb3JzXG4gKi9cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbmZ1bmN0aW9uIHVzZUNvbG9ycygpIHtcblx0Ly8gTkI6IEluIGFuIEVsZWN0cm9uIHByZWxvYWQgc2NyaXB0LCBkb2N1bWVudCB3aWxsIGJlIGRlZmluZWQgYnV0IG5vdCBmdWxseVxuXHQvLyBpbml0aWFsaXplZC4gU2luY2Ugd2Uga25vdyB3ZSdyZSBpbiBDaHJvbWUsIHdlJ2xsIGp1c3QgZGV0ZWN0IHRoaXMgY2FzZVxuXHQvLyBleHBsaWNpdGx5XG5cdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucHJvY2VzcyAmJiAod2luZG93LnByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJyB8fCB3aW5kb3cucHJvY2Vzcy5fX253anMpKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvLyBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSBkbyBub3Qgc3VwcG9ydCBjb2xvcnMuXG5cdGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvKGVkZ2V8dHJpZGVudClcXC8oXFxkKykvKSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIElzIHdlYmtpdD8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTY0NTk2MDYvMzc2NzczXG5cdC8vIGRvY3VtZW50IGlzIHVuZGVmaW5lZCBpbiByZWFjdC1uYXRpdmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvcHVsbC8xNjMyXG5cdHJldHVybiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5XZWJraXRBcHBlYXJhbmNlKSB8fFxuXHRcdC8vIElzIGZpcmVidWc/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM5ODEyMC8zNzY3NzNcblx0XHQodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmNvbnNvbGUgJiYgKHdpbmRvdy5jb25zb2xlLmZpcmVidWcgfHwgKHdpbmRvdy5jb25zb2xlLmV4Y2VwdGlvbiAmJiB3aW5kb3cuY29uc29sZS50YWJsZSkpKSB8fFxuXHRcdC8vIElzIGZpcmVmb3ggPj0gdjMxP1xuXHRcdC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvVG9vbHMvV2ViX0NvbnNvbGUjU3R5bGluZ19tZXNzYWdlc1xuXHRcdCh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvZmlyZWZveFxcLyhcXGQrKS8pICYmIHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApID49IDMxKSB8fFxuXHRcdC8vIERvdWJsZSBjaGVjayB3ZWJraXQgaW4gdXNlckFnZW50IGp1c3QgaW4gY2FzZSB3ZSBhcmUgaW4gYSB3b3JrZXJcblx0XHQodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2FwcGxld2Via2l0XFwvKFxcZCspLykpO1xufVxuXG4vKipcbiAqIENvbG9yaXplIGxvZyBhcmd1bWVudHMgaWYgZW5hYmxlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuXHRhcmdzWzBdID0gKHRoaXMudXNlQ29sb3JzID8gJyVjJyA6ICcnKSArXG5cdFx0dGhpcy5uYW1lc3BhY2UgK1xuXHRcdCh0aGlzLnVzZUNvbG9ycyA/ICcgJWMnIDogJyAnKSArXG5cdFx0YXJnc1swXSArXG5cdFx0KHRoaXMudXNlQ29sb3JzID8gJyVjICcgOiAnICcpICtcblx0XHQnKycgKyBtb2R1bGUuZXhwb3J0cy5odW1hbml6ZSh0aGlzLmRpZmYpO1xuXG5cdGlmICghdGhpcy51c2VDb2xvcnMpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjID0gJ2NvbG9yOiAnICsgdGhpcy5jb2xvcjtcblx0YXJncy5zcGxpY2UoMSwgMCwgYywgJ2NvbG9yOiBpbmhlcml0Jyk7XG5cblx0Ly8gVGhlIGZpbmFsIFwiJWNcIiBpcyBzb21ld2hhdCB0cmlja3ksIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgb3RoZXJcblx0Ly8gYXJndW1lbnRzIHBhc3NlZCBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSAlYywgc28gd2UgbmVlZCB0b1xuXHQvLyBmaWd1cmUgb3V0IHRoZSBjb3JyZWN0IGluZGV4IHRvIGluc2VydCB0aGUgQ1NTIGludG9cblx0bGV0IGluZGV4ID0gMDtcblx0bGV0IGxhc3RDID0gMDtcblx0YXJnc1swXS5yZXBsYWNlKC8lW2EtekEtWiVdL2csIG1hdGNoID0+IHtcblx0XHRpZiAobWF0Y2ggPT09ICclJScpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aW5kZXgrKztcblx0XHRpZiAobWF0Y2ggPT09ICclYycpIHtcblx0XHRcdC8vIFdlIG9ubHkgYXJlIGludGVyZXN0ZWQgaW4gdGhlICpsYXN0KiAlY1xuXHRcdFx0Ly8gKHRoZSB1c2VyIG1heSBoYXZlIHByb3ZpZGVkIHRoZWlyIG93bilcblx0XHRcdGxhc3RDID0gaW5kZXg7XG5cdFx0fVxuXHR9KTtcblxuXHRhcmdzLnNwbGljZShsYXN0QywgMCwgYyk7XG59XG5cbi8qKlxuICogSW52b2tlcyBgY29uc29sZS5kZWJ1ZygpYCB3aGVuIGF2YWlsYWJsZS5cbiAqIE5vLW9wIHdoZW4gYGNvbnNvbGUuZGVidWdgIGlzIG5vdCBhIFwiZnVuY3Rpb25cIi5cbiAqIElmIGBjb25zb2xlLmRlYnVnYCBpcyBub3QgYXZhaWxhYmxlLCBmYWxscyBiYWNrXG4gKiB0byBgY29uc29sZS5sb2dgLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cbmV4cG9ydHMubG9nID0gY29uc29sZS5kZWJ1ZyB8fCBjb25zb2xlLmxvZyB8fCAoKCkgPT4ge30pO1xuXG4vKipcbiAqIFNhdmUgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2F2ZShuYW1lc3BhY2VzKSB7XG5cdHRyeSB7XG5cdFx0aWYgKG5hbWVzcGFjZXMpIHtcblx0XHRcdGV4cG9ydHMuc3RvcmFnZS5zZXRJdGVtKCdkZWJ1ZycsIG5hbWVzcGFjZXMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRleHBvcnRzLnN0b3JhZ2UucmVtb3ZlSXRlbSgnZGVidWcnKTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG59XG5cbi8qKlxuICogTG9hZCBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIHRoZSBwcmV2aW91c2x5IHBlcnNpc3RlZCBkZWJ1ZyBtb2Rlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGxvYWQoKSB7XG5cdGxldCByO1xuXHR0cnkge1xuXHRcdHIgPSBleHBvcnRzLnN0b3JhZ2UuZ2V0SXRlbSgnZGVidWcnKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cblxuXHQvLyBJZiBkZWJ1ZyBpc24ndCBzZXQgaW4gTFMsIGFuZCB3ZSdyZSBpbiBFbGVjdHJvbiwgdHJ5IHRvIGxvYWQgJERFQlVHXG5cdGlmICghciAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2VudicgaW4gcHJvY2Vzcykge1xuXHRcdHIgPSBwcm9jZXNzLmVudi5ERUJVRztcblx0fVxuXG5cdHJldHVybiByO1xufVxuXG4vKipcbiAqIExvY2Fsc3RvcmFnZSBhdHRlbXB0cyB0byByZXR1cm4gdGhlIGxvY2Fsc3RvcmFnZS5cbiAqXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHNhZmFyaSB0aHJvd3NcbiAqIHdoZW4gYSB1c2VyIGRpc2FibGVzIGNvb2tpZXMvbG9jYWxzdG9yYWdlXG4gKiBhbmQgeW91IGF0dGVtcHQgdG8gYWNjZXNzIGl0LlxuICpcbiAqIEByZXR1cm4ge0xvY2FsU3RvcmFnZX1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvY2Fsc3RvcmFnZSgpIHtcblx0dHJ5IHtcblx0XHQvLyBUVk1MS2l0IChBcHBsZSBUViBKUyBSdW50aW1lKSBkb2VzIG5vdCBoYXZlIGEgd2luZG93IG9iamVjdCwganVzdCBsb2NhbFN0b3JhZ2UgaW4gdGhlIGdsb2JhbCBjb250ZXh0XG5cdFx0Ly8gVGhlIEJyb3dzZXIgYWxzbyBoYXMgbG9jYWxTdG9yYWdlIGluIHRoZSBnbG9iYWwgY29udGV4dC5cblx0XHRyZXR1cm4gbG9jYWxTdG9yYWdlO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY29tbW9uJykoZXhwb3J0cyk7XG5cbmNvbnN0IHtmb3JtYXR0ZXJzfSA9IG1vZHVsZS5leHBvcnRzO1xuXG4vKipcbiAqIE1hcCAlaiB0byBgSlNPTi5zdHJpbmdpZnkoKWAsIHNpbmNlIG5vIFdlYiBJbnNwZWN0b3JzIGRvIHRoYXQgYnkgZGVmYXVsdC5cbiAqL1xuXG5mb3JtYXR0ZXJzLmogPSBmdW5jdGlvbiAodikge1xuXHR0cnkge1xuXHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSh2KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXR1cm4gJ1tVbmV4cGVjdGVkSlNPTlBhcnNlRXJyb3JdOiAnICsgZXJyb3IubWVzc2FnZTtcblx0fVxufTtcbiIsIlxuLyoqXG4gKiBUaGlzIGlzIHRoZSBjb21tb24gbG9naWMgZm9yIGJvdGggdGhlIE5vZGUuanMgYW5kIHdlYiBicm93c2VyXG4gKiBpbXBsZW1lbnRhdGlvbnMgb2YgYGRlYnVnKClgLlxuICovXG5cbmZ1bmN0aW9uIHNldHVwKGVudikge1xuXHRjcmVhdGVEZWJ1Zy5kZWJ1ZyA9IGNyZWF0ZURlYnVnO1xuXHRjcmVhdGVEZWJ1Zy5kZWZhdWx0ID0gY3JlYXRlRGVidWc7XG5cdGNyZWF0ZURlYnVnLmNvZXJjZSA9IGNvZXJjZTtcblx0Y3JlYXRlRGVidWcuZGlzYWJsZSA9IGRpc2FibGU7XG5cdGNyZWF0ZURlYnVnLmVuYWJsZSA9IGVuYWJsZTtcblx0Y3JlYXRlRGVidWcuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdGNyZWF0ZURlYnVnLmh1bWFuaXplID0gcmVxdWlyZSgnbXMnKTtcblx0Y3JlYXRlRGVidWcuZGVzdHJveSA9IGRlc3Ryb3k7XG5cblx0T2JqZWN0LmtleXMoZW52KS5mb3JFYWNoKGtleSA9PiB7XG5cdFx0Y3JlYXRlRGVidWdba2V5XSA9IGVudltrZXldO1xuXHR9KTtcblxuXHQvKipcblx0KiBUaGUgY3VycmVudGx5IGFjdGl2ZSBkZWJ1ZyBtb2RlIG5hbWVzLCBhbmQgbmFtZXMgdG8gc2tpcC5cblx0Ki9cblxuXHRjcmVhdGVEZWJ1Zy5uYW1lcyA9IFtdO1xuXHRjcmVhdGVEZWJ1Zy5za2lwcyA9IFtdO1xuXG5cdC8qKlxuXHQqIE1hcCBvZiBzcGVjaWFsIFwiJW5cIiBoYW5kbGluZyBmdW5jdGlvbnMsIGZvciB0aGUgZGVidWcgXCJmb3JtYXRcIiBhcmd1bWVudC5cblx0KlxuXHQqIFZhbGlkIGtleSBuYW1lcyBhcmUgYSBzaW5nbGUsIGxvd2VyIG9yIHVwcGVyLWNhc2UgbGV0dGVyLCBpLmUuIFwiblwiIGFuZCBcIk5cIi5cblx0Ki9cblx0Y3JlYXRlRGVidWcuZm9ybWF0dGVycyA9IHt9O1xuXG5cdC8qKlxuXHQqIFNlbGVjdHMgYSBjb2xvciBmb3IgYSBkZWJ1ZyBuYW1lc3BhY2Vcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlIFRoZSBuYW1lc3BhY2Ugc3RyaW5nIGZvciB0aGUgZGVidWcgaW5zdGFuY2UgdG8gYmUgY29sb3JlZFxuXHQqIEByZXR1cm4ge051bWJlcnxTdHJpbmd9IEFuIEFOU0kgY29sb3IgY29kZSBmb3IgdGhlIGdpdmVuIG5hbWVzcGFjZVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiBzZWxlY3RDb2xvcihuYW1lc3BhY2UpIHtcblx0XHRsZXQgaGFzaCA9IDA7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzcGFjZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgbmFtZXNwYWNlLmNoYXJDb2RlQXQoaSk7XG5cdFx0XHRoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuXHRcdH1cblxuXHRcdHJldHVybiBjcmVhdGVEZWJ1Zy5jb2xvcnNbTWF0aC5hYnMoaGFzaCkgJSBjcmVhdGVEZWJ1Zy5jb2xvcnMubGVuZ3RoXTtcblx0fVxuXHRjcmVhdGVEZWJ1Zy5zZWxlY3RDb2xvciA9IHNlbGVjdENvbG9yO1xuXG5cdC8qKlxuXHQqIENyZWF0ZSBhIGRlYnVnZ2VyIHdpdGggdGhlIGdpdmVuIGBuYW1lc3BhY2VgLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuXHQqIEByZXR1cm4ge0Z1bmN0aW9ufVxuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGNyZWF0ZURlYnVnKG5hbWVzcGFjZSkge1xuXHRcdGxldCBwcmV2VGltZTtcblx0XHRsZXQgZW5hYmxlT3ZlcnJpZGUgPSBudWxsO1xuXHRcdGxldCBuYW1lc3BhY2VzQ2FjaGU7XG5cdFx0bGV0IGVuYWJsZWRDYWNoZTtcblxuXHRcdGZ1bmN0aW9uIGRlYnVnKC4uLmFyZ3MpIHtcblx0XHRcdC8vIERpc2FibGVkP1xuXHRcdFx0aWYgKCFkZWJ1Zy5lbmFibGVkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgc2VsZiA9IGRlYnVnO1xuXG5cdFx0XHQvLyBTZXQgYGRpZmZgIHRpbWVzdGFtcFxuXHRcdFx0Y29uc3QgY3VyciA9IE51bWJlcihuZXcgRGF0ZSgpKTtcblx0XHRcdGNvbnN0IG1zID0gY3VyciAtIChwcmV2VGltZSB8fCBjdXJyKTtcblx0XHRcdHNlbGYuZGlmZiA9IG1zO1xuXHRcdFx0c2VsZi5wcmV2ID0gcHJldlRpbWU7XG5cdFx0XHRzZWxmLmN1cnIgPSBjdXJyO1xuXHRcdFx0cHJldlRpbWUgPSBjdXJyO1xuXG5cdFx0XHRhcmdzWzBdID0gY3JlYXRlRGVidWcuY29lcmNlKGFyZ3NbMF0pO1xuXG5cdFx0XHRpZiAodHlwZW9mIGFyZ3NbMF0gIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdC8vIEFueXRoaW5nIGVsc2UgbGV0J3MgaW5zcGVjdCB3aXRoICVPXG5cdFx0XHRcdGFyZ3MudW5zaGlmdCgnJU8nKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQXBwbHkgYW55IGBmb3JtYXR0ZXJzYCB0cmFuc2Zvcm1hdGlvbnNcblx0XHRcdGxldCBpbmRleCA9IDA7XG5cdFx0XHRhcmdzWzBdID0gYXJnc1swXS5yZXBsYWNlKC8lKFthLXpBLVolXSkvZywgKG1hdGNoLCBmb3JtYXQpID0+IHtcblx0XHRcdFx0Ly8gSWYgd2UgZW5jb3VudGVyIGFuIGVzY2FwZWQgJSB0aGVuIGRvbid0IGluY3JlYXNlIHRoZSBhcnJheSBpbmRleFxuXHRcdFx0XHRpZiAobWF0Y2ggPT09ICclJScpIHtcblx0XHRcdFx0XHRyZXR1cm4gJyUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGluZGV4Kys7XG5cdFx0XHRcdGNvbnN0IGZvcm1hdHRlciA9IGNyZWF0ZURlYnVnLmZvcm1hdHRlcnNbZm9ybWF0XTtcblx0XHRcdFx0aWYgKHR5cGVvZiBmb3JtYXR0ZXIgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRjb25zdCB2YWwgPSBhcmdzW2luZGV4XTtcblx0XHRcdFx0XHRtYXRjaCA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIHZhbCk7XG5cblx0XHRcdFx0XHQvLyBOb3cgd2UgbmVlZCB0byByZW1vdmUgYGFyZ3NbaW5kZXhdYCBzaW5jZSBpdCdzIGlubGluZWQgaW4gdGhlIGBmb3JtYXRgXG5cdFx0XHRcdFx0YXJncy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0XHRcdGluZGV4LS07XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG1hdGNoO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIEFwcGx5IGVudi1zcGVjaWZpYyBmb3JtYXR0aW5nIChjb2xvcnMsIGV0Yy4pXG5cdFx0XHRjcmVhdGVEZWJ1Zy5mb3JtYXRBcmdzLmNhbGwoc2VsZiwgYXJncyk7XG5cblx0XHRcdGNvbnN0IGxvZ0ZuID0gc2VsZi5sb2cgfHwgY3JlYXRlRGVidWcubG9nO1xuXHRcdFx0bG9nRm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cdFx0fVxuXG5cdFx0ZGVidWcubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuXHRcdGRlYnVnLnVzZUNvbG9ycyA9IGNyZWF0ZURlYnVnLnVzZUNvbG9ycygpO1xuXHRcdGRlYnVnLmNvbG9yID0gY3JlYXRlRGVidWcuc2VsZWN0Q29sb3IobmFtZXNwYWNlKTtcblx0XHRkZWJ1Zy5leHRlbmQgPSBleHRlbmQ7XG5cdFx0ZGVidWcuZGVzdHJveSA9IGNyZWF0ZURlYnVnLmRlc3Ryb3k7IC8vIFhYWCBUZW1wb3JhcnkuIFdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlLlxuXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGRlYnVnLCAnZW5hYmxlZCcsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuXHRcdFx0Z2V0OiAoKSA9PiB7XG5cdFx0XHRcdGlmIChlbmFibGVPdmVycmlkZSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdHJldHVybiBlbmFibGVPdmVycmlkZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobmFtZXNwYWNlc0NhY2hlICE9PSBjcmVhdGVEZWJ1Zy5uYW1lc3BhY2VzKSB7XG5cdFx0XHRcdFx0bmFtZXNwYWNlc0NhY2hlID0gY3JlYXRlRGVidWcubmFtZXNwYWNlcztcblx0XHRcdFx0XHRlbmFibGVkQ2FjaGUgPSBjcmVhdGVEZWJ1Zy5lbmFibGVkKG5hbWVzcGFjZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gZW5hYmxlZENhY2hlO1xuXHRcdFx0fSxcblx0XHRcdHNldDogdiA9PiB7XG5cdFx0XHRcdGVuYWJsZU92ZXJyaWRlID0gdjtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vIEVudi1zcGVjaWZpYyBpbml0aWFsaXphdGlvbiBsb2dpYyBmb3IgZGVidWcgaW5zdGFuY2VzXG5cdFx0aWYgKHR5cGVvZiBjcmVhdGVEZWJ1Zy5pbml0ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRjcmVhdGVEZWJ1Zy5pbml0KGRlYnVnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZGVidWc7XG5cdH1cblxuXHRmdW5jdGlvbiBleHRlbmQobmFtZXNwYWNlLCBkZWxpbWl0ZXIpIHtcblx0XHRjb25zdCBuZXdEZWJ1ZyA9IGNyZWF0ZURlYnVnKHRoaXMubmFtZXNwYWNlICsgKHR5cGVvZiBkZWxpbWl0ZXIgPT09ICd1bmRlZmluZWQnID8gJzonIDogZGVsaW1pdGVyKSArIG5hbWVzcGFjZSk7XG5cdFx0bmV3RGVidWcubG9nID0gdGhpcy5sb2c7XG5cdFx0cmV0dXJuIG5ld0RlYnVnO1xuXHR9XG5cblx0LyoqXG5cdCogRW5hYmxlcyBhIGRlYnVnIG1vZGUgYnkgbmFtZXNwYWNlcy4gVGhpcyBjYW4gaW5jbHVkZSBtb2Rlc1xuXHQqIHNlcGFyYXRlZCBieSBhIGNvbG9uIGFuZCB3aWxkY2FyZHMuXG5cdCpcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGVuYWJsZShuYW1lc3BhY2VzKSB7XG5cdFx0Y3JlYXRlRGVidWcuc2F2ZShuYW1lc3BhY2VzKTtcblx0XHRjcmVhdGVEZWJ1Zy5uYW1lc3BhY2VzID0gbmFtZXNwYWNlcztcblxuXHRcdGNyZWF0ZURlYnVnLm5hbWVzID0gW107XG5cdFx0Y3JlYXRlRGVidWcuc2tpcHMgPSBbXTtcblxuXHRcdGxldCBpO1xuXHRcdGNvbnN0IHNwbGl0ID0gKHR5cGVvZiBuYW1lc3BhY2VzID09PSAnc3RyaW5nJyA/IG5hbWVzcGFjZXMgOiAnJykuc3BsaXQoL1tcXHMsXSsvKTtcblx0XHRjb25zdCBsZW4gPSBzcGxpdC5sZW5ndGg7XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmICghc3BsaXRbaV0pIHtcblx0XHRcdFx0Ly8gaWdub3JlIGVtcHR5IHN0cmluZ3Ncblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdG5hbWVzcGFjZXMgPSBzcGxpdFtpXS5yZXBsYWNlKC9cXCovZywgJy4qPycpO1xuXG5cdFx0XHRpZiAobmFtZXNwYWNlc1swXSA9PT0gJy0nKSB7XG5cdFx0XHRcdGNyZWF0ZURlYnVnLnNraXBzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzLnNsaWNlKDEpICsgJyQnKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjcmVhdGVEZWJ1Zy5uYW1lcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcyArICckJykpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQqIERpc2FibGUgZGVidWcgb3V0cHV0LlxuXHQqXG5cdCogQHJldHVybiB7U3RyaW5nfSBuYW1lc3BhY2VzXG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZGlzYWJsZSgpIHtcblx0XHRjb25zdCBuYW1lc3BhY2VzID0gW1xuXHRcdFx0Li4uY3JlYXRlRGVidWcubmFtZXMubWFwKHRvTmFtZXNwYWNlKSxcblx0XHRcdC4uLmNyZWF0ZURlYnVnLnNraXBzLm1hcCh0b05hbWVzcGFjZSkubWFwKG5hbWVzcGFjZSA9PiAnLScgKyBuYW1lc3BhY2UpXG5cdFx0XS5qb2luKCcsJyk7XG5cdFx0Y3JlYXRlRGVidWcuZW5hYmxlKCcnKTtcblx0XHRyZXR1cm4gbmFtZXNwYWNlcztcblx0fVxuXG5cdC8qKlxuXHQqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbW9kZSBuYW1lIGlzIGVuYWJsZWQsIGZhbHNlIG90aGVyd2lzZS5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG5cdCogQHJldHVybiB7Qm9vbGVhbn1cblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBlbmFibGVkKG5hbWUpIHtcblx0XHRpZiAobmFtZVtuYW1lLmxlbmd0aCAtIDFdID09PSAnKicpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGxldCBpO1xuXHRcdGxldCBsZW47XG5cblx0XHRmb3IgKGkgPSAwLCBsZW4gPSBjcmVhdGVEZWJ1Zy5za2lwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKGNyZWF0ZURlYnVnLnNraXBzW2ldLnRlc3QobmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoaSA9IDAsIGxlbiA9IGNyZWF0ZURlYnVnLm5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoY3JlYXRlRGVidWcubmFtZXNbaV0udGVzdChuYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKipcblx0KiBDb252ZXJ0IHJlZ2V4cCB0byBuYW1lc3BhY2Vcblx0KlxuXHQqIEBwYXJhbSB7UmVnRXhwfSByZWd4ZXBcblx0KiBAcmV0dXJuIHtTdHJpbmd9IG5hbWVzcGFjZVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiB0b05hbWVzcGFjZShyZWdleHApIHtcblx0XHRyZXR1cm4gcmVnZXhwLnRvU3RyaW5nKClcblx0XHRcdC5zdWJzdHJpbmcoMiwgcmVnZXhwLnRvU3RyaW5nKCkubGVuZ3RoIC0gMilcblx0XHRcdC5yZXBsYWNlKC9cXC5cXCpcXD8kLywgJyonKTtcblx0fVxuXG5cdC8qKlxuXHQqIENvZXJjZSBgdmFsYC5cblx0KlxuXHQqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuXHQqIEByZXR1cm4ge01peGVkfVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiBjb2VyY2UodmFsKSB7XG5cdFx0aWYgKHZhbCBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdFx0XHRyZXR1cm4gdmFsLnN0YWNrIHx8IHZhbC5tZXNzYWdlO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsO1xuXHR9XG5cblx0LyoqXG5cdCogWFhYIERPIE5PVCBVU0UuIFRoaXMgaXMgYSB0ZW1wb3Jhcnkgc3R1YiBmdW5jdGlvbi5cblx0KiBYWFggSXQgV0lMTCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHJlbGVhc2UuXG5cdCovXG5cdGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cdFx0Y29uc29sZS53YXJuKCdJbnN0YW5jZSBtZXRob2QgYGRlYnVnLmRlc3Ryb3koKWAgaXMgZGVwcmVjYXRlZCBhbmQgbm8gbG9uZ2VyIGRvZXMgYW55dGhpbmcuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uIG9mIGBkZWJ1Z2AuJyk7XG5cdH1cblxuXHRjcmVhdGVEZWJ1Zy5lbmFibGUoY3JlYXRlRGVidWcubG9hZCgpKTtcblxuXHRyZXR1cm4gY3JlYXRlRGVidWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0dXA7XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUiA9IHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyA/IFJlZmxlY3QgOiBudWxsXG52YXIgUmVmbGVjdEFwcGx5ID0gUiAmJiB0eXBlb2YgUi5hcHBseSA9PT0gJ2Z1bmN0aW9uJ1xuICA/IFIuYXBwbHlcbiAgOiBmdW5jdGlvbiBSZWZsZWN0QXBwbHkodGFyZ2V0LCByZWNlaXZlciwgYXJncykge1xuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbCh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKTtcbiAgfVxuXG52YXIgUmVmbGVjdE93bktleXNcbmlmIChSICYmIHR5cGVvZiBSLm93bktleXMgPT09ICdmdW5jdGlvbicpIHtcbiAgUmVmbGVjdE93bktleXMgPSBSLm93bktleXNcbn0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpXG4gICAgICAuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KSk7XG4gIH07XG59IGVsc2Uge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBQcm9jZXNzRW1pdFdhcm5pbmcod2FybmluZykge1xuICBpZiAoY29uc29sZSAmJiBjb25zb2xlLndhcm4pIGNvbnNvbGUud2Fybih3YXJuaW5nKTtcbn1cblxudmFyIE51bWJlcklzTmFOID0gTnVtYmVyLmlzTmFOIHx8IGZ1bmN0aW9uIE51bWJlcklzTmFOKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgRXZlbnRFbWl0dGVyLmluaXQuY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xubW9kdWxlLmV4cG9ydHMub25jZSA9IG9uY2U7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzQ291bnQgPSAwO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG52YXIgZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG5mdW5jdGlvbiBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKSB7XG4gIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgfVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRXZlbnRFbWl0dGVyLCAnZGVmYXVsdE1heExpc3RlbmVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZGVmYXVsdE1heExpc3RlbmVycztcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbihhcmcpIHtcbiAgICBpZiAodHlwZW9mIGFyZyAhPT0gJ251bWJlcicgfHwgYXJnIDwgMCB8fCBOdW1iZXJJc05hTihhcmcpKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiZGVmYXVsdE1heExpc3RlbmVyc1wiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBhcmcgKyAnLicpO1xuICAgIH1cbiAgICBkZWZhdWx0TWF4TGlzdGVuZXJzID0gYXJnO1xuICB9XG59KTtcblxuRXZlbnRFbWl0dGVyLmluaXQgPSBmdW5jdGlvbigpIHtcblxuICBpZiAodGhpcy5fZXZlbnRzID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHRoaXMuX2V2ZW50cyA9PT0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLl9ldmVudHMpIHtcbiAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgfVxuXG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59O1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBzZXRNYXhMaXN0ZW5lcnMobikge1xuICBpZiAodHlwZW9mIG4gIT09ICdudW1iZXInIHx8IG4gPCAwIHx8IE51bWJlcklzTmFOKG4pKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcIm5cIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgbiArICcuJyk7XG4gIH1cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5mdW5jdGlvbiBfZ2V0TWF4TGlzdGVuZXJzKHRoYXQpIHtcbiAgaWYgKHRoYXQuX21heExpc3RlbmVycyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgcmV0dXJuIHRoYXQuX21heExpc3RlbmVycztcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5nZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBnZXRNYXhMaXN0ZW5lcnMoKSB7XG4gIHJldHVybiBfZ2V0TWF4TGlzdGVuZXJzKHRoaXMpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdCh0eXBlKSB7XG4gIHZhciBhcmdzID0gW107XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgdmFyIGRvRXJyb3IgPSAodHlwZSA9PT0gJ2Vycm9yJyk7XG5cbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKVxuICAgIGRvRXJyb3IgPSAoZG9FcnJvciAmJiBldmVudHMuZXJyb3IgPT09IHVuZGVmaW5lZCk7XG4gIGVsc2UgaWYgKCFkb0Vycm9yKVxuICAgIHJldHVybiBmYWxzZTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmIChkb0Vycm9yKSB7XG4gICAgdmFyIGVyO1xuICAgIGlmIChhcmdzLmxlbmd0aCA+IDApXG4gICAgICBlciA9IGFyZ3NbMF07XG4gICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIC8vIE5vdGU6IFRoZSBjb21tZW50cyBvbiB0aGUgYHRocm93YCBsaW5lcyBhcmUgaW50ZW50aW9uYWwsIHRoZXkgc2hvd1xuICAgICAgLy8gdXAgaW4gTm9kZSdzIG91dHB1dCBpZiB0aGlzIHJlc3VsdHMgaW4gYW4gdW5oYW5kbGVkIGV4Y2VwdGlvbi5cbiAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgIH1cbiAgICAvLyBBdCBsZWFzdCBnaXZlIHNvbWUga2luZCBvZiBjb250ZXh0IHRvIHRoZSB1c2VyXG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcignVW5oYW5kbGVkIGVycm9yLicgKyAoZXIgPyAnICgnICsgZXIubWVzc2FnZSArICcpJyA6ICcnKSk7XG4gICAgZXJyLmNvbnRleHQgPSBlcjtcbiAgICB0aHJvdyBlcnI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gIH1cblxuICB2YXIgaGFuZGxlciA9IGV2ZW50c1t0eXBlXTtcblxuICBpZiAoaGFuZGxlciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICBSZWZsZWN0QXBwbHkoaGFuZGxlciwgdGhpcywgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGxlbiA9IGhhbmRsZXIubGVuZ3RoO1xuICAgIHZhciBsaXN0ZW5lcnMgPSBhcnJheUNsb25lKGhhbmRsZXIsIGxlbik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSlcbiAgICAgIFJlZmxlY3RBcHBseShsaXN0ZW5lcnNbaV0sIHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5mdW5jdGlvbiBfYWRkTGlzdGVuZXIodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgcHJlcGVuZCkge1xuICB2YXIgbTtcbiAgdmFyIGV2ZW50cztcbiAgdmFyIGV4aXN0aW5nO1xuXG4gIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuXG4gIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpIHtcbiAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGFyZ2V0Ll9ldmVudHNDb3VudCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gICAgaWYgKGV2ZW50cy5uZXdMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgPyBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICAgICAgLy8gUmUtYXNzaWduIGBldmVudHNgIGJlY2F1c2UgYSBuZXdMaXN0ZW5lciBoYW5kbGVyIGNvdWxkIGhhdmUgY2F1c2VkIHRoZVxuICAgICAgLy8gdGhpcy5fZXZlbnRzIHRvIGJlIGFzc2lnbmVkIHRvIGEgbmV3IG9iamVjdFxuICAgICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gICAgfVxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdO1xuICB9XG5cbiAgaWYgKGV4aXN0aW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICAgICsrdGFyZ2V0Ll9ldmVudHNDb3VudDtcbiAgfSBlbHNlIHtcbiAgICBpZiAodHlwZW9mIGV4aXN0aW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID1cbiAgICAgICAgcHJlcGVuZCA/IFtsaXN0ZW5lciwgZXhpc3RpbmddIDogW2V4aXN0aW5nLCBsaXN0ZW5lcl07XG4gICAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgfSBlbHNlIGlmIChwcmVwZW5kKSB7XG4gICAgICBleGlzdGluZy51bnNoaWZ0KGxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhpc3RpbmcucHVzaChsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgICBtID0gX2dldE1heExpc3RlbmVycyh0YXJnZXQpO1xuICAgIGlmIChtID4gMCAmJiBleGlzdGluZy5sZW5ndGggPiBtICYmICFleGlzdGluZy53YXJuZWQpIHtcbiAgICAgIGV4aXN0aW5nLndhcm5lZCA9IHRydWU7XG4gICAgICAvLyBObyBlcnJvciBjb2RlIGZvciB0aGlzIHNpbmNlIGl0IGlzIGEgV2FybmluZ1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICB2YXIgdyA9IG5ldyBFcnJvcignUG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSBsZWFrIGRldGVjdGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcubGVuZ3RoICsgJyAnICsgU3RyaW5nKHR5cGUpICsgJyBsaXN0ZW5lcnMgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdhZGRlZC4gVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdpbmNyZWFzZSBsaW1pdCcpO1xuICAgICAgdy5uYW1lID0gJ01heExpc3RlbmVyc0V4Y2VlZGVkV2FybmluZyc7XG4gICAgICB3LmVtaXR0ZXIgPSB0YXJnZXQ7XG4gICAgICB3LnR5cGUgPSB0eXBlO1xuICAgICAgdy5jb3VudCA9IGV4aXN0aW5nLmxlbmd0aDtcbiAgICAgIFByb2Nlc3NFbWl0V2FybmluZyh3KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZExpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIHRydWUpO1xuICAgIH07XG5cbmZ1bmN0aW9uIG9uY2VXcmFwcGVyKCkge1xuICBpZiAoIXRoaXMuZmlyZWQpIHtcbiAgICB0aGlzLnRhcmdldC5yZW1vdmVMaXN0ZW5lcih0aGlzLnR5cGUsIHRoaXMud3JhcEZuKTtcbiAgICB0aGlzLmZpcmVkID0gdHJ1ZTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHJldHVybiB0aGlzLmxpc3RlbmVyLmNhbGwodGhpcy50YXJnZXQpO1xuICAgIHJldHVybiB0aGlzLmxpc3RlbmVyLmFwcGx5KHRoaXMudGFyZ2V0LCBhcmd1bWVudHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9vbmNlV3JhcCh0YXJnZXQsIHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBzdGF0ZSA9IHsgZmlyZWQ6IGZhbHNlLCB3cmFwRm46IHVuZGVmaW5lZCwgdGFyZ2V0OiB0YXJnZXQsIHR5cGU6IHR5cGUsIGxpc3RlbmVyOiBsaXN0ZW5lciB9O1xuICB2YXIgd3JhcHBlZCA9IG9uY2VXcmFwcGVyLmJpbmQoc3RhdGUpO1xuICB3cmFwcGVkLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHN0YXRlLndyYXBGbiA9IHdyYXBwZWQ7XG4gIHJldHVybiB3cmFwcGVkO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuICB0aGlzLm9uKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZE9uY2VMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZE9uY2VMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICB0aGlzLnByZXBlbmRMaXN0ZW5lcih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbi8vIEVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZiBhbmQgb25seSBpZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgdmFyIGxpc3QsIGV2ZW50cywgcG9zaXRpb24sIGksIG9yaWdpbmFsTGlzdGVuZXI7XG5cbiAgICAgIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBsaXN0ID0gZXZlbnRzW3R5cGVdO1xuICAgICAgaWYgKGxpc3QgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fCBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdC5saXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGxpc3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcG9zaXRpb24gPSAtMTtcblxuICAgICAgICBmb3IgKGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8IGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBvcmlnaW5hbExpc3RlbmVyID0gbGlzdFtpXS5saXN0ZW5lcjtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSAwKVxuICAgICAgICAgIGxpc3Quc2hpZnQoKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc3BsaWNlT25lKGxpc3QsIHBvc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICBldmVudHNbdHlwZV0gPSBsaXN0WzBdO1xuXG4gICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgb3JpZ2luYWxMaXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyh0eXBlKSB7XG4gICAgICB2YXIgbGlzdGVuZXJzLCBldmVudHMsIGk7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50c1t0eXBlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhldmVudHMpO1xuICAgICAgICB2YXIga2V5O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgbGlzdGVuZXJzID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gICAgICB9IGVsc2UgaWYgKGxpc3RlbmVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIExJRk8gb3JkZXJcbiAgICAgICAgZm9yIChpID0gbGlzdGVuZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbmZ1bmN0aW9uIF9saXN0ZW5lcnModGFyZ2V0LCB0eXBlLCB1bndyYXApIHtcbiAgdmFyIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG4gIGlmIChldmxpc3RlbmVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJylcbiAgICByZXR1cm4gdW53cmFwID8gW2V2bGlzdGVuZXIubGlzdGVuZXIgfHwgZXZsaXN0ZW5lcl0gOiBbZXZsaXN0ZW5lcl07XG5cbiAgcmV0dXJuIHVud3JhcCA/XG4gICAgdW53cmFwTGlzdGVuZXJzKGV2bGlzdGVuZXIpIDogYXJyYXlDbG9uZShldmxpc3RlbmVyLCBldmxpc3RlbmVyLmxlbmd0aCk7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24gbGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgdHJ1ZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJhd0xpc3RlbmVycyA9IGZ1bmN0aW9uIHJhd0xpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIubGlzdGVuZXJDb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBlbWl0dGVyLmxpc3RlbmVyQ291bnQodHlwZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxpc3RlbmVyQ291bnQuY2FsbChlbWl0dGVyLCB0eXBlKTtcbiAgfVxufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gbGlzdGVuZXJDb3VudDtcbmZ1bmN0aW9uIGxpc3RlbmVyQ291bnQodHlwZSkge1xuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKGV2bGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGV2bGlzdGVuZXIubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAwO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmV2ZW50TmFtZXMgPSBmdW5jdGlvbiBldmVudE5hbWVzKCkge1xuICByZXR1cm4gdGhpcy5fZXZlbnRzQ291bnQgPiAwID8gUmVmbGVjdE93bktleXModGhpcy5fZXZlbnRzKSA6IFtdO1xufTtcblxuZnVuY3Rpb24gYXJyYXlDbG9uZShhcnIsIG4pIHtcbiAgdmFyIGNvcHkgPSBuZXcgQXJyYXkobik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgKytpKVxuICAgIGNvcHlbaV0gPSBhcnJbaV07XG4gIHJldHVybiBjb3B5O1xufVxuXG5mdW5jdGlvbiBzcGxpY2VPbmUobGlzdCwgaW5kZXgpIHtcbiAgZm9yICg7IGluZGV4ICsgMSA8IGxpc3QubGVuZ3RoOyBpbmRleCsrKVxuICAgIGxpc3RbaW5kZXhdID0gbGlzdFtpbmRleCArIDFdO1xuICBsaXN0LnBvcCgpO1xufVxuXG5mdW5jdGlvbiB1bndyYXBMaXN0ZW5lcnMoYXJyKSB7XG4gIHZhciByZXQgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmV0Lmxlbmd0aDsgKytpKSB7XG4gICAgcmV0W2ldID0gYXJyW2ldLmxpc3RlbmVyIHx8IGFycltpXTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBvbmNlKGVtaXR0ZXIsIG5hbWUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBmdW5jdGlvbiBlcnJvckxpc3RlbmVyKGVycikge1xuICAgICAgZW1pdHRlci5yZW1vdmVMaXN0ZW5lcihuYW1lLCByZXNvbHZlcik7XG4gICAgICByZWplY3QoZXJyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNvbHZlcigpIHtcbiAgICAgIGlmICh0eXBlb2YgZW1pdHRlci5yZW1vdmVMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIGVycm9yTGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgcmVzb2x2ZShbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIH07XG5cbiAgICBldmVudFRhcmdldEFnbm9zdGljQWRkTGlzdGVuZXIoZW1pdHRlciwgbmFtZSwgcmVzb2x2ZXIsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICBpZiAobmFtZSAhPT0gJ2Vycm9yJykge1xuICAgICAgYWRkRXJyb3JIYW5kbGVySWZFdmVudEVtaXR0ZXIoZW1pdHRlciwgZXJyb3JMaXN0ZW5lciwgeyBvbmNlOiB0cnVlIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEVycm9ySGFuZGxlcklmRXZlbnRFbWl0dGVyKGVtaXR0ZXIsIGhhbmRsZXIsIGZsYWdzKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5vbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lcihlbWl0dGVyLCAnZXJyb3InLCBoYW5kbGVyLCBmbGFncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZXZlbnRUYXJnZXRBZ25vc3RpY0FkZExpc3RlbmVyKGVtaXR0ZXIsIG5hbWUsIGxpc3RlbmVyLCBmbGFncykge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIub24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAoZmxhZ3Mub25jZSkge1xuICAgICAgZW1pdHRlci5vbmNlKG5hbWUsIGxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW1pdHRlci5vbihuYW1lLCBsaXN0ZW5lcik7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiBlbWl0dGVyLmFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBFdmVudFRhcmdldCBkb2VzIG5vdCBoYXZlIGBlcnJvcmAgZXZlbnQgc2VtYW50aWNzIGxpa2UgTm9kZVxuICAgIC8vIEV2ZW50RW1pdHRlcnMsIHdlIGRvIG5vdCBsaXN0ZW4gZm9yIGBlcnJvcmAgZXZlbnRzIGhlcmUuXG4gICAgZW1pdHRlci5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGZ1bmN0aW9uIHdyYXBMaXN0ZW5lcihhcmcpIHtcbiAgICAgIC8vIElFIGRvZXMgbm90IGhhdmUgYnVpbHRpbiBgeyBvbmNlOiB0cnVlIH1gIHN1cHBvcnQgc28gd2VcbiAgICAgIC8vIGhhdmUgdG8gZG8gaXQgbWFudWFsbHkuXG4gICAgICBpZiAoZmxhZ3Mub25jZSkge1xuICAgICAgICBlbWl0dGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgd3JhcExpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIGxpc3RlbmVyKGFyZyk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwiZW1pdHRlclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBFdmVudEVtaXR0ZXIuIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBlbWl0dGVyKTtcbiAgfVxufVxuIiwiLyohIGllZWU3NTQuIEJTRC0zLUNsYXVzZSBMaWNlbnNlLiBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmcvb3BlbnNvdXJjZT4gKi9cbmV4cG9ydHMucmVhZCA9IGZ1bmN0aW9uIChidWZmZXIsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtXG4gIHZhciBlTGVuID0gKG5CeXRlcyAqIDgpIC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBuQml0cyA9IC03XG4gIHZhciBpID0gaXNMRSA/IChuQnl0ZXMgLSAxKSA6IDBcbiAgdmFyIGQgPSBpc0xFID8gLTEgOiAxXG4gIHZhciBzID0gYnVmZmVyW29mZnNldCArIGldXG5cbiAgaSArPSBkXG5cbiAgZSA9IHMgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgcyA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gZUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBlID0gKGUgKiAyNTYpICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgZSA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gbUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gKG0gKiAyNTYpICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzXG4gIH0gZWxzZSBpZiAoZSA9PT0gZU1heCkge1xuICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KVxuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgTWF0aC5wb3coMiwgbUxlbilcbiAgICBlID0gZSAtIGVCaWFzXG4gIH1cbiAgcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBNYXRoLnBvdygyLCBlIC0gbUxlbilcbn1cblxuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uIChidWZmZXIsIHZhbHVlLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSwgY1xuICB2YXIgZUxlbiA9IChuQnl0ZXMgKiA4KSAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApXG4gIHZhciBpID0gaXNMRSA/IDAgOiAobkJ5dGVzIC0gMSlcbiAgdmFyIGQgPSBpc0xFID8gMSA6IC0xXG4gIHZhciBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwXG5cbiAgdmFsdWUgPSBNYXRoLmFicyh2YWx1ZSlcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMFxuICAgIGUgPSBlTWF4XG4gIH0gZWxzZSB7XG4gICAgZSA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjIpXG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tXG4gICAgICBjICo9IDJcbiAgICB9XG4gICAgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICB2YWx1ZSArPSBydCAvIGNcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpXG4gICAgfVxuICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgZSsrXG4gICAgICBjIC89IDJcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwXG4gICAgICBlID0gZU1heFxuICAgIH0gZWxzZSBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIG0gPSAoKHZhbHVlICogYykgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gZSArIGVCaWFzXG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIE1hdGgucG93KDIsIGVCaWFzIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IDBcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KSB7fVxuXG4gIGUgPSAoZSA8PCBtTGVuKSB8IG1cbiAgZUxlbiArPSBtTGVuXG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCkge31cblxuICBidWZmZXJbb2Zmc2V0ICsgaSAtIGRdIHw9IHMgKiAxMjhcbn1cbiIsImlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIHN0YW5kYXJkIG5vZGUuanMgJ3V0aWwnIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGlmIChzdXBlckN0b3IpIHtcbiAgICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgICBjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDdG9yLnByb3RvdHlwZSwge1xuICAgICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfTtcbn0gZWxzZSB7XG4gIC8vIG9sZCBzY2hvb2wgc2hpbSBmb3Igb2xkIGJyb3dzZXJzXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgaWYgKHN1cGVyQ3Rvcikge1xuICAgICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgICBUZW1wQ3Rvci5wcm90b3R5cGUgPSBzdXBlckN0b3IucHJvdG90eXBlXG4gICAgICBjdG9yLnByb3RvdHlwZSA9IG5ldyBUZW1wQ3RvcigpXG4gICAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JcbiAgICB9XG4gIH1cbn1cbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXhvZ2Rlbi93ZWJzb2NrZXQtc3RyZWFtL2Jsb2IvNDhkYzNkZGY5NDNlNWFkYTY2OGMzMWNjZDk0ZTkxODZmMDJmYWZiZC93cy1mYWxsYmFjay5qc1xuXG52YXIgd3MgPSBudWxsXG5cbmlmICh0eXBlb2YgV2ViU29ja2V0ICE9PSAndW5kZWZpbmVkJykge1xuICB3cyA9IFdlYlNvY2tldFxufSBlbHNlIGlmICh0eXBlb2YgTW96V2ViU29ja2V0ICE9PSAndW5kZWZpbmVkJykge1xuICB3cyA9IE1veldlYlNvY2tldFxufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICB3cyA9IGdsb2JhbC5XZWJTb2NrZXQgfHwgZ2xvYmFsLk1veldlYlNvY2tldFxufSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICB3cyA9IHdpbmRvdy5XZWJTb2NrZXQgfHwgd2luZG93Lk1veldlYlNvY2tldFxufSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgd3MgPSBzZWxmLldlYlNvY2tldCB8fCBzZWxmLk1veldlYlNvY2tldFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdzXG4iLCIvKipcbiAqIEhlbHBlcnMuXG4gKi9cblxudmFyIHMgPSAxMDAwO1xudmFyIG0gPSBzICogNjA7XG52YXIgaCA9IG0gKiA2MDtcbnZhciBkID0gaCAqIDI0O1xudmFyIHcgPSBkICogNztcbnZhciB5ID0gZCAqIDM2NS4yNTtcblxuLyoqXG4gKiBQYXJzZSBvciBmb3JtYXQgdGhlIGdpdmVuIGB2YWxgLlxuICpcbiAqIE9wdGlvbnM6XG4gKlxuICogIC0gYGxvbmdgIHZlcmJvc2UgZm9ybWF0dGluZyBbZmFsc2VdXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEB0aHJvd3Mge0Vycm9yfSB0aHJvdyBhbiBlcnJvciBpZiB2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIG51bWJlclxuICogQHJldHVybiB7U3RyaW5nfE51bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKHR5cGUgPT09ICdzdHJpbmcnICYmIHZhbC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlKHZhbCk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUodmFsKSkge1xuICAgIHJldHVybiBvcHRpb25zLmxvbmcgPyBmbXRMb25nKHZhbCkgOiBmbXRTaG9ydCh2YWwpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAndmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSB2YWxpZCBudW1iZXIuIHZhbD0nICtcbiAgICAgIEpTT04uc3RyaW5naWZ5KHZhbClcbiAgKTtcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGBzdHJgIGFuZCByZXR1cm4gbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHN0cikge1xuICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgaWYgKHN0ci5sZW5ndGggPiAxMDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG1hdGNoID0gL14oLT8oPzpcXGQrKT9cXC4/XFxkKykgKihtaWxsaXNlY29uZHM/fG1zZWNzP3xtc3xzZWNvbmRzP3xzZWNzP3xzfG1pbnV0ZXM/fG1pbnM/fG18aG91cnM/fGhycz98aHxkYXlzP3xkfHdlZWtzP3x3fHllYXJzP3x5cnM/fHkpPyQvaS5leGVjKFxuICAgIHN0clxuICApO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuID0gcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gIHZhciB0eXBlID0gKG1hdGNoWzJdIHx8ICdtcycpLnRvTG93ZXJDYXNlKCk7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3llYXJzJzpcbiAgICBjYXNlICd5ZWFyJzpcbiAgICBjYXNlICd5cnMnOlxuICAgIGNhc2UgJ3lyJzpcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiBuICogeTtcbiAgICBjYXNlICd3ZWVrcyc6XG4gICAgY2FzZSAnd2Vlayc6XG4gICAgY2FzZSAndyc6XG4gICAgICByZXR1cm4gbiAqIHc7XG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiBuICogZDtcbiAgICBjYXNlICdob3Vycyc6XG4gICAgY2FzZSAnaG91cic6XG4gICAgY2FzZSAnaHJzJzpcbiAgICBjYXNlICdocic6XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gbiAqIGg7XG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdtaW5zJzpcbiAgICBjYXNlICdtaW4nOlxuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIG4gKiBtO1xuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgY2FzZSAnc2Vjcyc6XG4gICAgY2FzZSAnc2VjJzpcbiAgICBjYXNlICdzJzpcbiAgICAgIHJldHVybiBuICogcztcbiAgICBjYXNlICdtaWxsaXNlY29uZHMnOlxuICAgIGNhc2UgJ21pbGxpc2Vjb25kJzpcbiAgICBjYXNlICdtc2Vjcyc6XG4gICAgY2FzZSAnbXNlYyc6XG4gICAgY2FzZSAnbXMnOlxuICAgICAgcmV0dXJuIG47XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydCBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRTaG9ydChtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBkKSArICdkJztcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gaCkgKyAnaCc7XG4gIH1cbiAgaWYgKG1zQWJzID49IG0pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG0pICsgJ20nO1xuICB9XG4gIGlmIChtc0FicyA+PSBzKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBzKSArICdzJztcbiAgfVxuICByZXR1cm4gbXMgKyAnbXMnO1xufVxuXG4vKipcbiAqIExvbmcgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10TG9uZyhtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIGQsICdkYXknKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBoLCAnaG91cicpO1xuICB9XG4gIGlmIChtc0FicyA+PSBtKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIG0sICdtaW51dGUnKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gcykge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBzLCAnc2Vjb25kJyk7XG4gIH1cbiAgcmV0dXJuIG1zICsgJyBtcyc7XG59XG5cbi8qKlxuICogUGx1cmFsaXphdGlvbiBoZWxwZXIuXG4gKi9cblxuZnVuY3Rpb24gcGx1cmFsKG1zLCBtc0FicywgbiwgbmFtZSkge1xuICB2YXIgaXNQbHVyYWwgPSBtc0FicyA+PSBuICogMS41O1xuICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG4pICsgJyAnICsgbmFtZSArIChpc1BsdXJhbCA/ICdzJyA6ICcnKTtcbn1cbiIsImNvbnN0IFNvY2tldCA9IHJlcXVpcmUoJy4vU29ja2V0Jyk7XG5jb25zdCBTdGF0dXMgPSByZXF1aXJlKCcuL1N0YXR1cycpO1xuY29uc3QgZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpKCdvYnMtd2Vic29ja2V0LWpzOkNvcmUnKTtcblxubGV0IHJlcXVlc3RDb3VudGVyID0gMDtcblxuZnVuY3Rpb24gZ2VuZXJhdGVNZXNzYWdlSWQoKSB7XG4gIHJldHVybiBTdHJpbmcocmVxdWVzdENvdW50ZXIrKyk7XG59XG5cbmNsYXNzIE9CU1dlYlNvY2tldCBleHRlbmRzIFNvY2tldCB7XG4gIC8qKlxuICAgKiBHZW5lcmljIFNvY2tldCByZXF1ZXN0IG1ldGhvZC4gUmV0dXJucyBhIHByb21pc2UuXG4gICAqIEdlbmVyYXRlcyBhIG1lc3NhZ2VJZCBpbnRlcm5hbGx5IGFuZCB3aWxsIG92ZXJyaWRlIGFueSBwYXNzZWQgaW4gdGhlIGFyZ3MuXG4gICAqIE5vdGUgdGhhdCB0aGUgcmVxdWVzdFR5cGUgaGVyZSBpcyBwcmUtbWFyc2hhbGluZyBhbmQgY3VycmVudGx5IG11c3QgbWF0Y2ggZXhhY3RseSB3aGF0IHRoZSB3ZWJzb2NrZXQgcGx1Z2luIGlzIGV4cGVjdGluZy5cbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSAgIHJlcXVlc3RUeXBlIG9icy13ZWJzb2NrZXQgcGx1Z2luIGV4cGVjdGVkIHJlcXVlc3QgdHlwZS5cbiAgICogQHBhcmFtICB7T2JqZWN0fSAgIFthcmdzPXt9XSAgIHJlcXVlc3QgYXJndW1lbnRzLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSAgICAgICAgICAgICAgUHJvbWlzZSwgcGFzc2VzIHRoZSBwbHVnaW4gcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgc2VuZChyZXF1ZXN0VHlwZSwgYXJncyA9IHt9KSB7XG4gICAgYXJncyA9IGFyZ3MgfHwge307XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgbWVzc2FnZUlkID0gZ2VuZXJhdGVNZXNzYWdlSWQoKTtcbiAgICAgIGxldCByZWplY3RSZWFzb247XG5cbiAgICAgIGlmICghcmVxdWVzdFR5cGUpIHtcbiAgICAgICAgcmVqZWN0UmVhc29uID0gU3RhdHVzLlJFUVVFU1RfVFlQRV9OT1RfU1BFQ0lGSUVEO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXJncyAmJiAodHlwZW9mIGFyZ3MgIT09ICdvYmplY3QnIHx8IGFyZ3MgPT09IG51bGwgfHwgQXJyYXkuaXNBcnJheShhcmdzKSkpIHtcbiAgICAgICAgcmVqZWN0UmVhc29uID0gU3RhdHVzLkFSR1NfTk9UX09CSkVDVDtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLl9jb25uZWN0ZWQpIHtcbiAgICAgICAgcmVqZWN0UmVhc29uID0gU3RhdHVzLk5PVF9DT05ORUNURUQ7XG4gICAgICB9XG5cbiAgICAgIC8vIEFzc2lnbiBhIHRlbXBvcmFyeSBldmVudCBsaXN0ZW5lciBmb3IgdGhpcyBwYXJ0aWN1bGFyIG1lc3NhZ2VJZCB0byB1bmlxdWVseSBpZGVudGlmeSB0aGUgcmVzcG9uc2UuXG4gICAgICB0aGlzLm9uY2UoYG9iczppbnRlcm5hbDptZXNzYWdlOmlkLSR7bWVzc2FnZUlkfWAsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIGRlYnVnKCdbc2VuZDpyZWplY3RdICVvJywgZXJyKTtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWJ1ZygnW3NlbmQ6cmVzb2x2ZV0gJW8nLCBkYXRhKTtcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhIHJlYXNvbiB0byBmYWlsIGZhc3QsIHNlbmQgdGhlIHJlcXVlc3QgdG8gdGhlIHNvY2tldC5cbiAgICAgIGlmICghcmVqZWN0UmVhc29uKSB7XG4gICAgICAgIGFyZ3NbJ3JlcXVlc3QtdHlwZSddID0gcmVxdWVzdFR5cGU7XG4gICAgICAgIGFyZ3NbJ21lc3NhZ2UtaWQnXSA9IG1lc3NhZ2VJZDtcblxuICAgICAgICAvLyBTdWJtaXQgdGhlIHJlcXVlc3QgdG8gdGhlIHdlYnNvY2tldC5cbiAgICAgICAgZGVidWcoJ1tzZW5kXSAlcyAlcyAlbycsIG1lc3NhZ2VJZCwgcmVxdWVzdFR5cGUsIGFyZ3MpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMuX3NvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KGFyZ3MpKTtcbiAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgIC8vIFRPRE86IENvbnNpZGVyIGluc3BlY3RpbmcgdGhlIGV4Y2VwdGlvbiB0aHJvd24gdG8gZ2xlYW0gc29tZSByZWxldmFudCBpbmZvIGFuZCBwYXNzIHRoYXQgb24uXG4gICAgICAgICAgcmVqZWN0UmVhc29uID0gU3RhdHVzLlNPQ0tFVF9FWENFUFRJT047XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhlIHNvY2tldCBjYWxsIHdhcyB1bnN1Y2Nlc3NmdWwgb3IgYnlwYXNzZWQsIHNpbXVsYXRlIGl0cyByZXNvbHV0aW9uLlxuICAgICAgaWYgKHJlamVjdFJlYXNvbikge1xuICAgICAgICB0aGlzLmVtaXQoYG9iczppbnRlcm5hbDptZXNzYWdlOmlkLSR7bWVzc2FnZUlkfWAsIHJlamVjdFJlYXNvbik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJpYyBTb2NrZXQgcmVxdWVzdCBtZXRob2QuIEhhbmRsZXMgY2FsbGJhY2tzLlxuICAgKiBJbnRlcm5hbGx5IGNhbGxzIGBzZW5kYCAod2hpY2ggaXMgcHJvbWlzZS1iYXNlZCkuIFNlZSBgc2VuZGAncyBkb2NzIGZvciBtb3JlIGRldGFpbHMuXG4gICAqXG4gICAqIEBwYXJhbSAge1N0cmluZ30gICByZXF1ZXN0VHlwZSBvYnMtd2Vic29ja2V0IHBsdWdpbiBleHBlY3RlZCByZXF1ZXN0IHR5cGUuXG4gICAqIEBwYXJhbSAge09iamVjdH0gICBbYXJncz17fV0gICByZXF1ZXN0IGFyZ3VtZW50cy5cbiAgICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrICAgIE9wdGlvbmFsLiBjYWxsYmFjayhlcnIsIGRhdGEpXG4gICAqL1xuICBzZW5kQ2FsbGJhY2socmVxdWVzdFR5cGUsIGFyZ3MgPSB7fSwgY2FsbGJhY2spIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkZWZhdWx0LXBhcmFtLWxhc3RcbiAgICAvLyBBbGxvdyB0aGUgYGFyZ3NgIGFyZ3VtZW50IHRvIGJlIG9taXR0ZWQuXG4gICAgaWYgKGNhbGxiYWNrID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIGFyZ3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhbGxiYWNrID0gYXJncztcbiAgICAgIGFyZ3MgPSB7fTtcbiAgICB9XG5cbiAgICAvLyBQZXJmb3JtIHRoZSBhY3R1YWwgcmVxdWVzdCwgdXNpbmcgYHNlbmRgLlxuICAgIHRoaXMuc2VuZChyZXF1ZXN0VHlwZSwgYXJncykudGhlbigoLi4ucmVzcG9uc2UpID0+IHtcbiAgICAgIGNhbGxiYWNrKG51bGwsIC4uLnJlc3BvbnNlKTtcbiAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPQlNXZWJTb2NrZXQ7XG4iLCJjb25zdCBXZWJTb2NrZXQgPSByZXF1aXJlKCdpc29tb3JwaGljLXdzJyk7XG5jb25zdCBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKTtcbmNvbnN0IGhhc2ggPSByZXF1aXJlKCcuL3V0aWwvYXV0aGVudGljYXRpb25IYXNoaW5nJyk7XG5jb25zdCBTdGF0dXMgPSByZXF1aXJlKCcuL1N0YXR1cycpO1xuY29uc3QgZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpKCdvYnMtd2Vic29ja2V0LWpzOlNvY2tldCcpO1xuY29uc3QgbG9nQW1iaWd1b3VzRXJyb3IgPSByZXF1aXJlKCcuL3V0aWwvbG9nQW1iaWd1b3VzRXJyb3InKTtcbmNvbnN0IGNhbWVsQ2FzZUtleXMgPSByZXF1aXJlKCcuL3V0aWwvY2FtZWxDYXNlS2V5cycpO1xuXG5jbGFzcyBTb2NrZXQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX2Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3NvY2tldCA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0IG9yaWdpbmFsRW1pdCA9IHRoaXMuZW1pdDtcbiAgICB0aGlzLmVtaXQgPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgZGVidWcoJ1tlbWl0XSAlcyBlcnI6ICVvIGRhdGE6ICVvJywgLi4uYXJncyk7XG4gICAgICBvcmlnaW5hbEVtaXQuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIGNvbm5lY3QoYXJncyA9IHt9KSB7XG4gICAgYXJncyA9IGFyZ3MgfHwge307XG4gICAgY29uc3QgYWRkcmVzcyA9IGFyZ3MuYWRkcmVzcyB8fCAnbG9jYWxob3N0OjQ0NDQnO1xuXG4gICAgaWYgKHRoaXMuX3NvY2tldCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gQmxpbmRseSB0cnkgdG8gY2xvc2UgdGhlIHNvY2tldC5cbiAgICAgICAgLy8gRG9uJ3QgY2FyZSBpZiBpdHMgYWxyZWFkeSBjbG9zZWQuXG4gICAgICAgIC8vIFdlIGp1c3QgZG9uJ3Qgd2FudCBhbnkgc29ja2V0cyB0byBsZWFrLlxuICAgICAgICB0aGlzLl9zb2NrZXQuY2xvc2UoKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIFRoZXNlIGVycm9ycyBhcmUgcHJvYmFibHkgc2FmZSB0byBpZ25vcmUsIGJ1dCBkZWJ1ZyBsb2cgdGhlbSBqdXN0IGluIGNhc2UuXG4gICAgICAgIGRlYnVnKCdGYWlsZWQgdG8gY2xvc2UgcHJldmlvdXMgV2ViU29ja2V0OicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hc3luYy1wcm9taXNlLWV4ZWN1dG9yXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRoaXMuX2Nvbm5lY3QoYWRkcmVzcywgQm9vbGVhbihhcmdzLnNlY3VyZSkpO1xuICAgICAgICBhd2FpdCB0aGlzLl9hdXRoZW50aWNhdGUoYXJncy5wYXNzd29yZCk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aGlzLl9zb2NrZXQuY2xvc2UoKTtcbiAgICAgICAgdGhpcy5fY29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgIGxvZ0FtYmlndW91c0Vycm9yKGRlYnVnLCAnQ29ubmVjdGlvbiBmYWlsZWQ6JywgZXJyKTtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgYSBXZWJTb2NrZXQgY29ubmVjdGlvbiB0byBhbiBvYnMtd2Vic29ja2V0IHNlcnZlciwgYnV0IGRvZXMgbm90IGF0dGVtcHQgYW55IGF1dGhlbnRpY2F0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gYWRkcmVzcyB1cmwgd2l0aG91dCB3czovLyBvciB3c3M6Ly8gcHJlZml4LlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHNlY3VyZSB3aGV0aGVyIHRvIHVzIHdzOi8vIG9yIHdzczovL1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICogQHByaXZhdGVcbiAgICogQHJldHVybiB7UHJvbWlzZX0gb24gYXR0ZW1wdGVkIGNyZWF0aW9uIG9mIFdlYlNvY2tldCBjb25uZWN0aW9uLlxuICAgKi9cbiAgYXN5bmMgX2Nvbm5lY3QoYWRkcmVzcywgc2VjdXJlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBzZXR0bGVkID0gZmFsc2U7XG5cbiAgICAgIGRlYnVnKCdBdHRlbXB0aW5nIHRvIGNvbm5lY3QgdG86ICVzIChzZWN1cmU6ICVzKScsIGFkZHJlc3MsIHNlY3VyZSk7XG4gICAgICB0aGlzLl9zb2NrZXQgPSBuZXcgV2ViU29ja2V0KChzZWN1cmUgPyAnd3NzOi8vJyA6ICd3czovLycpICsgYWRkcmVzcyk7XG5cbiAgICAgIC8vIFdlIG9ubHkgaGFuZGxlIHRoZSBpbml0aWFsIGNvbm5lY3Rpb24gZXJyb3IuXG4gICAgICAvLyBCZXlvbmQgdGhhdCwgdGhlIGNvbnN1bWVyIGlzIHJlc3BvbnNpYmxlIGZvciBhZGRpbmcgdGhlaXIgb3duIGdlbmVyaWMgYGVycm9yYCBldmVudCBsaXN0ZW5lci5cbiAgICAgIC8vIEZJWE1FOiBVbnN1cmUgaG93IGJlc3QgdG8gZXhwb3NlIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgdGhlIFdlYlNvY2tldCBlcnJvci5cbiAgICAgIHRoaXMuX3NvY2tldC5vbmVycm9yID0gZXJyID0+IHtcbiAgICAgICAgaWYgKHNldHRsZWQpIHtcbiAgICAgICAgICBsb2dBbWJpZ3VvdXNFcnJvcihkZWJ1ZywgJ1Vua25vd24gU29ja2V0IEVycm9yJywgZXJyKTtcbiAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzZXR0bGVkID0gdHJ1ZTtcbiAgICAgICAgbG9nQW1iaWd1b3VzRXJyb3IoZGVidWcsICdXZWJzb2NrZXQgQ29ubmVjdGlvbiBmYWlsZWQ6JywgZXJyKTtcbiAgICAgICAgcmVqZWN0KFN0YXR1cy5DT05ORUNUSU9OX0VSUk9SKTtcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuX3NvY2tldC5vbm9wZW4gPSAoKSA9PiB7XG4gICAgICAgIGlmIChzZXR0bGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgc2V0dGxlZCA9IHRydWU7XG5cbiAgICAgICAgZGVidWcoJ0Nvbm5lY3Rpb24gb3BlbmVkOiAlcycsIGFkZHJlc3MpO1xuICAgICAgICB0aGlzLmVtaXQoJ0Nvbm5lY3Rpb25PcGVuZWQnKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfTtcblxuICAgICAgLy8gTG9va3MgbGlrZSB0aGlzIHNob3VsZCBiZSBib3VuZC4gV2UgZG9uJ3QgdGVjaG5pY2FsbHkgY2FuY2VsIHRoZSBjb25uZWN0aW9uIHdoZW4gdGhlIGF1dGhlbnRpY2F0aW9uIGZhaWxzLlxuICAgICAgdGhpcy5fc29ja2V0Lm9uY2xvc2UgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICBkZWJ1ZygnQ29ubmVjdGlvbiBjbG9zZWQ6ICVzJywgYWRkcmVzcyk7XG4gICAgICAgIHRoaXMuZW1pdCgnQ29ubmVjdGlvbkNsb3NlZCcpO1xuICAgICAgfTtcblxuICAgICAgLy8gVGhpcyBoYW5kbGVyIG11c3QgYmUgcHJlc2VudCBiZWZvcmUgd2UgY2FuIGNhbGwgX2F1dGhlbnRpY2F0ZS5cbiAgICAgIHRoaXMuX3NvY2tldC5vbm1lc3NhZ2UgPSBtc2cgPT4ge1xuICAgICAgICBkZWJ1ZygnW09uTWVzc2FnZV06ICVvJywgbXNnKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGNhbWVsQ2FzZUtleXMoSlNPTi5wYXJzZShtc2cuZGF0YSkpO1xuICAgICAgICBsZXQgZXJyO1xuICAgICAgICBsZXQgZGF0YTtcblxuICAgICAgICBpZiAobWVzc2FnZS5zdGF0dXMgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICBlcnIgPSBtZXNzYWdlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRhdGEgPSBtZXNzYWdlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRW1pdCB0aGUgbWVzc2FnZSB3aXRoIElEIGlmIGF2YWlsYWJsZSwgb3RoZXJ3aXNlIHRyeSB0byBmaW5kIGEgbm9uLW1lc3NhZ2VJZCBkcml2ZW4gZXZlbnQuXG4gICAgICAgIGlmIChtZXNzYWdlLm1lc3NhZ2VJZCkge1xuICAgICAgICAgIHRoaXMuZW1pdChgb2JzOmludGVybmFsOm1lc3NhZ2U6aWQtJHttZXNzYWdlLm1lc3NhZ2VJZH1gLCBlcnIsIGRhdGEpO1xuICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UudXBkYXRlVHlwZSkge1xuICAgICAgICAgIHRoaXMuZW1pdChtZXNzYWdlLnVwZGF0ZVR5cGUsIGRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxvZ0FtYmlndW91c0Vycm9yKGRlYnVnLCAnVW5yZWNvZ25pemVkIFNvY2tldCBNZXNzYWdlOicsIG1lc3NhZ2UpO1xuICAgICAgICAgIHRoaXMuZW1pdCgnbWVzc2FnZScsIG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEF1dGhlbnRpY2F0ZXMgdG8gYW4gb2JzLXdlYnNvY2tldCBzZXJ2ZXIuIE11c3QgYWxyZWFkeSBoYXZlIGFuIGFjdGl2ZSBjb25uZWN0aW9uIGJlZm9yZSBjYWxsaW5nIHRoaXMgbWV0aG9kLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gW3Bhc3N3b3JkPScnXSBhdXRoZW50aWNhdGlvbiBzdHJpbmcuXG4gICAqIEBwcml2YXRlXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IG9uIHJlc29sdXRpb24gb2YgYXV0aGVudGljYXRpb24gY2FsbC5cbiAgICovXG4gIGFzeW5jIF9hdXRoZW50aWNhdGUocGFzc3dvcmQgPSAnJykge1xuICAgIGlmICghdGhpcy5fY29ubmVjdGVkKSB7XG4gICAgICB0aHJvdyBTdGF0dXMuTk9UX0NPTk5FQ1RFRDtcbiAgICB9XG5cbiAgICBjb25zdCBhdXRoID0gYXdhaXQgdGhpcy5zZW5kKCdHZXRBdXRoUmVxdWlyZWQnKTtcblxuICAgIGlmICghYXV0aC5hdXRoUmVxdWlyZWQpIHtcbiAgICAgIGRlYnVnKCdBdXRoZW50aWNhdGlvbiBub3QgUmVxdWlyZWQnKTtcbiAgICAgIHRoaXMuZW1pdCgnQXV0aGVudGljYXRpb25TdWNjZXNzJyk7XG4gICAgICByZXR1cm4gU3RhdHVzLkFVVEhfTk9UX1JFUVVJUkVEO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLnNlbmQoJ0F1dGhlbnRpY2F0ZScsIHtcbiAgICAgICAgYXV0aDogaGFzaChhdXRoLnNhbHQsIGF1dGguY2hhbGxlbmdlLCBwYXNzd29yZClcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGRlYnVnKCdBdXRoZW50aWNhdGlvbiBGYWlsdXJlICVvJywgZSk7XG4gICAgICB0aGlzLmVtaXQoJ0F1dGhlbnRpY2F0aW9uRmFpbHVyZScpO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG5cbiAgICBkZWJ1ZygnQXV0aGVudGljYXRpb24gU3VjY2VzcycpO1xuICAgIHRoaXMuZW1pdCgnQXV0aGVudGljYXRpb25TdWNjZXNzJyk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2UgYW5kIGRpc2Nvbm5lY3QgdGhlIFdlYlNvY2tldCBjb25uZWN0aW9uLlxuICAgKiBGSVhNRTogdGhpcyBzaG91bGQgc3VwcG9ydCBhIGNhbGxiYWNrIGFuZCByZXR1cm4gYSBQcm9taXNlIHRvIG1hdGNoIHRoZSBjb25uZWN0IG1ldGhvZC5cbiAgICpcbiAgICogQGZ1bmN0aW9uXG4gICAqIEBjYXRlZ29yeSByZXF1ZXN0XG4gICAqL1xuICBkaXNjb25uZWN0KCkge1xuICAgIGRlYnVnKCdEaXNjb25uZWN0IHJlcXVlc3RlZC4nKTtcbiAgICBpZiAodGhpcy5fc29ja2V0KSB7XG4gICAgICB0aGlzLl9zb2NrZXQuY2xvc2UoKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTb2NrZXQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgTk9UX0NPTk5FQ1RFRDoge1xuICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZXJlIGlzIG5vIFNvY2tldCBjb25uZWN0aW9uIGF2YWlsYWJsZS4nXG4gIH0sXG4gIENPTk5FQ1RJT05fRVJST1I6IHtcbiAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgZGVzY3JpcHRpb246ICdDb25uZWN0aW9uIGVycm9yLidcbiAgfSxcbiAgU09DS0VUX0VYQ0VQVElPTjoge1xuICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICBkZXNjcmlwdGlvbjogJ0FuIGV4Y2VwdGlvbiBvY2N1cnJlZCBmcm9tIHRoZSB1bmRlcmx5aW5nIFdlYlNvY2tldC4nXG4gIH0sXG4gIEFVVEhfTk9UX1JFUVVJUkVEOiB7XG4gICAgc3RhdHVzOiAnb2snLFxuICAgIGRlc2NyaXB0aW9uOiAnQXV0aGVudGljYXRpb24gaXMgbm90IHJlcXVpcmVkLidcbiAgfSxcbiAgUkVRVUVTVF9UWVBFX05PVF9TUEVDSUZJRUQ6IHtcbiAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgZGVzY3JpcHRpb246ICdBIFJlcXVlc3QgVHlwZSB3YXMgbm90IHNwZWNpZmllZC4nXG4gIH0sXG4gIEFSR1NfTk9UX09CSkVDVDoge1xuICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSBzdXBwbGllZCBhcmdtZW50cyBwYXJhbWV0ZXIgaXMgbm90IGFuIG9iamVjdC4nXG4gIH0sXG5cbiAgaW5pdCgpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzKSB7XG4gICAgICBpZiAoe30uaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLCBrZXkpKSB7XG4gICAgICAgIC8vIEFzc2lnbiBhIHZhbHVlIHRvICdjb2RlJyBpZGVudGlmaWVkIGJ5IHRoZSBzdGF0dXMnIGtleS5cbiAgICAgICAgdGhpc1trZXldLmNvZGUgPSBrZXk7XG5cbiAgICAgICAgLy8gQXNzaWduIGEgdmFsdWUgdG8gJ2Vycm9yJyBpZiBvbmUgaXMgbm90IGFscmVhZHkgZGVmaW5lZC5cbiAgICAgICAgaWYgKHRoaXNba2V5XS5zdGF0dXMgPT09ICdlcnJvcicgJiYgIXRoaXNba2V5XS5lcnJvcikge1xuICAgICAgICAgIHRoaXNba2V5XS5lcnJvciA9IHRoaXNba2V5XS5kZXNjcmlwdGlvbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGRlbGV0ZSB0aGlzLmluaXQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn0uaW5pdCgpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL09CU1dlYlNvY2tldC5qcycpO1xuIiwiY29uc3QgU0hBMjU2ID0gcmVxdWlyZSgnc2hhLmpzL3NoYTI1NicpO1xuXG4vKipcbiAqIFNIQTI1NiBIYXNoaW5nLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gW3NhbHQ9JyddIHNhbHQuXG4gKiBAcGFyYW0gIHtTdHJpbmd9IFtjaGFsbGVuZ2U9JyddIGNoYWxsZW5nZS5cbiAqIEBwYXJhbSAge1N0cmluZ30gbXNnIE1lc3NhZ2UgdG8gZW5jb2RlLlxuICogQHJldHVybiB7U3RyaW5nfSBzaGEyNTYgZW5jb2RlZCBzdHJpbmcuXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWZhdWx0LXBhcmFtLWxhc3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNhbHQgPSAnJywgY2hhbGxlbmdlID0gJycsIG1zZykge1xuICBjb25zdCBoYXNoID0gbmV3IFNIQTI1NigpXG4gICAgLnVwZGF0ZShtc2cpXG4gICAgLnVwZGF0ZShzYWx0KVxuICAgIC5kaWdlc3QoJ2Jhc2U2NCcpO1xuXG4gIGNvbnN0IHJlc3AgPSBuZXcgU0hBMjU2KClcbiAgICAudXBkYXRlKGhhc2gpXG4gICAgLnVwZGF0ZShjaGFsbGVuZ2UpXG4gICAgLmRpZ2VzdCgnYmFzZTY0Jyk7XG5cbiAgcmV0dXJuIHJlc3A7XG59O1xuIiwiLyoqXG4gKiBDb252ZXJ0cyBrZWJhYi1jYXNlIHRvIGNhbWVsQ2FzZS5cbiAqIFJldGFpbnMgdGhlIG9yaWdpbmFsIGtlYmFiLWNhc2UgZW50cmllcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gW29iaj17fV0gS2V5ZWQgb2JqZWN0LlxuICogQHJldHVybiB7T2JqZWN0fSBLZXllZCBvYmplY3Qgd2l0aCBhZGRlZCBjYW1lbENhc2VkIGtleXMuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICBvYmogPSBvYmogfHwge307XG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgIGlmICghe30uaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbWVsQ2FzZWRLZXkgPSBrZXkucmVwbGFjZSgvLShbYS16XSkvZ2ksICgkMCwgJDEpID0+IHtcbiAgICAgIHJldHVybiAkMS50b1VwcGVyQ2FzZSgpO1xuICAgIH0pO1xuICAgIG9ialtjYW1lbENhc2VkS2V5XSA9IG9ialtrZXldO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG4iLCIvKipcbiAqIERpc2FtYmlndWF0ZXMgYW4gXCJlcnJvclwiIGFuZCBmb3JtYXRzIGl0IG5pY2VseSBmb3IgYGRlYnVnYCBvdXRwdXQuXG4gKiBQYXJ0aWN1bGFybHkgdXNlZnVsIHdoZW4gZGVhbGluZyB3aXRoIGVycm9yIHJlc3BvbnNlIG9iamVjdHMgZnJvbSBvYnMtd2Vic29ja2V0LFxuICogd2hpY2ggYXJlIG5vdCBhY3R1YWwgRXJyb3ItdHlwZSBlcnJvcnMsIGJ1dCBzaW1wbHkgT2JqZWN0cy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVidWcgQSBgZGVidWdgIGluc3RhbmNlLlxuICogQHBhcmFtIHtTdHJpbmd9IHByZWZpeCBBIHN0cmluZyB0byBwcmludCBpbiBmcm9udCBvZiB0aGUgZm9ybWF0dGVkIGVycm9yLlxuICogQHBhcmFtIHtPYmplY3R8RXJyb3J9IGVycm9yIEFuIGVycm9yIG9mIGFtYmlndW91cyB0eXBlIHRoYXQgeW91IHdpc2ggdG8gbG9nIHRvIGBkZWJ1Z2AuIENhbiBiZSBhbiBFcnJvciwgT2JqZWN0LCBvciBTdHJpbmcuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRlYnVnLCBwcmVmaXgsIGVycm9yKSB7XG4gIGlmIChlcnJvciAmJiBlcnJvci5zdGFjaykge1xuICAgIGRlYnVnKGAke3ByZWZpeH1cXG4gJU9gLCBlcnJvci5zdGFjayk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGVycm9yID09PSAnb2JqZWN0Jykge1xuICAgIGRlYnVnKGAke3ByZWZpeH0gJW9gLCBlcnJvcik7XG4gIH0gZWxzZSB7XG4gICAgZGVidWcoYCR7cHJlZml4fSAlc2AsIGVycm9yKTtcbiAgfVxufTtcbiIsIi8qISBzYWZlLWJ1ZmZlci4gTUlUIExpY2Vuc2UuIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZy9vcGVuc291cmNlPiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm9kZS9uby1kZXByZWNhdGVkLWFwaSAqL1xudmFyIGJ1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlcicpXG52YXIgQnVmZmVyID0gYnVmZmVyLkJ1ZmZlclxuXG4vLyBhbHRlcm5hdGl2ZSB0byB1c2luZyBPYmplY3Qua2V5cyBmb3Igb2xkIGJyb3dzZXJzXG5mdW5jdGlvbiBjb3B5UHJvcHMgKHNyYywgZHN0KSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHtcbiAgICBkc3Rba2V5XSA9IHNyY1trZXldXG4gIH1cbn1cbmlmIChCdWZmZXIuZnJvbSAmJiBCdWZmZXIuYWxsb2MgJiYgQnVmZmVyLmFsbG9jVW5zYWZlICYmIEJ1ZmZlci5hbGxvY1Vuc2FmZVNsb3cpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBidWZmZXJcbn0gZWxzZSB7XG4gIC8vIENvcHkgcHJvcGVydGllcyBmcm9tIHJlcXVpcmUoJ2J1ZmZlcicpXG4gIGNvcHlQcm9wcyhidWZmZXIsIGV4cG9ydHMpXG4gIGV4cG9ydHMuQnVmZmVyID0gU2FmZUJ1ZmZlclxufVxuXG5mdW5jdGlvbiBTYWZlQnVmZmVyIChhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gQnVmZmVyKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5TYWZlQnVmZmVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQnVmZmVyLnByb3RvdHlwZSlcblxuLy8gQ29weSBzdGF0aWMgbWV0aG9kcyBmcm9tIEJ1ZmZlclxuY29weVByb3BzKEJ1ZmZlciwgU2FmZUJ1ZmZlcilcblxuU2FmZUJ1ZmZlci5mcm9tID0gZnVuY3Rpb24gKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3Qgbm90IGJlIGEgbnVtYmVyJylcbiAgfVxuICByZXR1cm4gQnVmZmVyKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5TYWZlQnVmZmVyLmFsbG9jID0gZnVuY3Rpb24gKHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgbnVtYmVyJylcbiAgfVxuICB2YXIgYnVmID0gQnVmZmVyKHNpemUpXG4gIGlmIChmaWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJykge1xuICAgICAgYnVmLmZpbGwoZmlsbCwgZW5jb2RpbmcpXG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1Zi5maWxsKGZpbGwpXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGJ1Zi5maWxsKDApXG4gIH1cbiAgcmV0dXJuIGJ1ZlxufVxuXG5TYWZlQnVmZmVyLmFsbG9jVW5zYWZlID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBudW1iZXInKVxuICB9XG4gIHJldHVybiBCdWZmZXIoc2l6ZSlcbn1cblxuU2FmZUJ1ZmZlci5hbGxvY1Vuc2FmZVNsb3cgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIG51bWJlcicpXG4gIH1cbiAgcmV0dXJuIGJ1ZmZlci5TbG93QnVmZmVyKHNpemUpXG59XG4iLCJ2YXIgQnVmZmVyID0gcmVxdWlyZSgnc2FmZS1idWZmZXInKS5CdWZmZXJcblxuLy8gcHJvdG90eXBlIGNsYXNzIGZvciBoYXNoIGZ1bmN0aW9uc1xuZnVuY3Rpb24gSGFzaCAoYmxvY2tTaXplLCBmaW5hbFNpemUpIHtcbiAgdGhpcy5fYmxvY2sgPSBCdWZmZXIuYWxsb2MoYmxvY2tTaXplKVxuICB0aGlzLl9maW5hbFNpemUgPSBmaW5hbFNpemVcbiAgdGhpcy5fYmxvY2tTaXplID0gYmxvY2tTaXplXG4gIHRoaXMuX2xlbiA9IDBcbn1cblxuSGFzaC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGRhdGEsIGVuYykge1xuICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jID0gZW5jIHx8ICd1dGY4J1xuICAgIGRhdGEgPSBCdWZmZXIuZnJvbShkYXRhLCBlbmMpXG4gIH1cblxuICB2YXIgYmxvY2sgPSB0aGlzLl9ibG9ja1xuICB2YXIgYmxvY2tTaXplID0gdGhpcy5fYmxvY2tTaXplXG4gIHZhciBsZW5ndGggPSBkYXRhLmxlbmd0aFxuICB2YXIgYWNjdW0gPSB0aGlzLl9sZW5cblxuICBmb3IgKHZhciBvZmZzZXQgPSAwOyBvZmZzZXQgPCBsZW5ndGg7KSB7XG4gICAgdmFyIGFzc2lnbmVkID0gYWNjdW0gJSBibG9ja1NpemVcbiAgICB2YXIgcmVtYWluZGVyID0gTWF0aC5taW4obGVuZ3RoIC0gb2Zmc2V0LCBibG9ja1NpemUgLSBhc3NpZ25lZClcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVtYWluZGVyOyBpKyspIHtcbiAgICAgIGJsb2NrW2Fzc2lnbmVkICsgaV0gPSBkYXRhW29mZnNldCArIGldXG4gICAgfVxuXG4gICAgYWNjdW0gKz0gcmVtYWluZGVyXG4gICAgb2Zmc2V0ICs9IHJlbWFpbmRlclxuXG4gICAgaWYgKChhY2N1bSAlIGJsb2NrU2l6ZSkgPT09IDApIHtcbiAgICAgIHRoaXMuX3VwZGF0ZShibG9jaylcbiAgICB9XG4gIH1cblxuICB0aGlzLl9sZW4gKz0gbGVuZ3RoXG4gIHJldHVybiB0aGlzXG59XG5cbkhhc2gucHJvdG90eXBlLmRpZ2VzdCA9IGZ1bmN0aW9uIChlbmMpIHtcbiAgdmFyIHJlbSA9IHRoaXMuX2xlbiAlIHRoaXMuX2Jsb2NrU2l6ZVxuXG4gIHRoaXMuX2Jsb2NrW3JlbV0gPSAweDgwXG5cbiAgLy8gemVybyAocmVtICsgMSkgdHJhaWxpbmcgYml0cywgd2hlcmUgKHJlbSArIDEpIGlzIHRoZSBzbWFsbGVzdFxuICAvLyBub24tbmVnYXRpdmUgc29sdXRpb24gdG8gdGhlIGVxdWF0aW9uIChsZW5ndGggKyAxICsgKHJlbSArIDEpKSA9PT0gZmluYWxTaXplIG1vZCBibG9ja1NpemVcbiAgdGhpcy5fYmxvY2suZmlsbCgwLCByZW0gKyAxKVxuXG4gIGlmIChyZW0gPj0gdGhpcy5fZmluYWxTaXplKSB7XG4gICAgdGhpcy5fdXBkYXRlKHRoaXMuX2Jsb2NrKVxuICAgIHRoaXMuX2Jsb2NrLmZpbGwoMClcbiAgfVxuXG4gIHZhciBiaXRzID0gdGhpcy5fbGVuICogOFxuXG4gIC8vIHVpbnQzMlxuICBpZiAoYml0cyA8PSAweGZmZmZmZmZmKSB7XG4gICAgdGhpcy5fYmxvY2sud3JpdGVVSW50MzJCRShiaXRzLCB0aGlzLl9ibG9ja1NpemUgLSA0KVxuXG4gIC8vIHVpbnQ2NFxuICB9IGVsc2Uge1xuICAgIHZhciBsb3dCaXRzID0gKGJpdHMgJiAweGZmZmZmZmZmKSA+Pj4gMFxuICAgIHZhciBoaWdoQml0cyA9IChiaXRzIC0gbG93Qml0cykgLyAweDEwMDAwMDAwMFxuXG4gICAgdGhpcy5fYmxvY2sud3JpdGVVSW50MzJCRShoaWdoQml0cywgdGhpcy5fYmxvY2tTaXplIC0gOClcbiAgICB0aGlzLl9ibG9jay53cml0ZVVJbnQzMkJFKGxvd0JpdHMsIHRoaXMuX2Jsb2NrU2l6ZSAtIDQpXG4gIH1cblxuICB0aGlzLl91cGRhdGUodGhpcy5fYmxvY2spXG4gIHZhciBoYXNoID0gdGhpcy5faGFzaCgpXG5cbiAgcmV0dXJuIGVuYyA/IGhhc2gudG9TdHJpbmcoZW5jKSA6IGhhc2hcbn1cblxuSGFzaC5wcm90b3R5cGUuX3VwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdfdXBkYXRlIG11c3QgYmUgaW1wbGVtZW50ZWQgYnkgc3ViY2xhc3MnKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2hcbiIsIi8qKlxuICogQSBKYXZhU2NyaXB0IGltcGxlbWVudGF0aW9uIG9mIHRoZSBTZWN1cmUgSGFzaCBBbGdvcml0aG0sIFNIQS0yNTYsIGFzIGRlZmluZWRcbiAqIGluIEZJUFMgMTgwLTJcbiAqIFZlcnNpb24gMi4yLWJldGEgQ29weXJpZ2h0IEFuZ2VsIE1hcmluLCBQYXVsIEpvaG5zdG9uIDIwMDAgLSAyMDA5LlxuICogT3RoZXIgY29udHJpYnV0b3JzOiBHcmVnIEhvbHQsIEFuZHJldyBLZXBlcnQsIFlkbmFyLCBMb3N0aW5ldFxuICpcbiAqL1xuXG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpXG52YXIgSGFzaCA9IHJlcXVpcmUoJy4vaGFzaCcpXG52YXIgQnVmZmVyID0gcmVxdWlyZSgnc2FmZS1idWZmZXInKS5CdWZmZXJcblxudmFyIEsgPSBbXG4gIDB4NDI4QTJGOTgsIDB4NzEzNzQ0OTEsIDB4QjVDMEZCQ0YsIDB4RTlCNURCQTUsXG4gIDB4Mzk1NkMyNUIsIDB4NTlGMTExRjEsIDB4OTIzRjgyQTQsIDB4QUIxQzVFRDUsXG4gIDB4RDgwN0FBOTgsIDB4MTI4MzVCMDEsIDB4MjQzMTg1QkUsIDB4NTUwQzdEQzMsXG4gIDB4NzJCRTVENzQsIDB4ODBERUIxRkUsIDB4OUJEQzA2QTcsIDB4QzE5QkYxNzQsXG4gIDB4RTQ5QjY5QzEsIDB4RUZCRTQ3ODYsIDB4MEZDMTlEQzYsIDB4MjQwQ0ExQ0MsXG4gIDB4MkRFOTJDNkYsIDB4NEE3NDg0QUEsIDB4NUNCMEE5REMsIDB4NzZGOTg4REEsXG4gIDB4OTgzRTUxNTIsIDB4QTgzMUM2NkQsIDB4QjAwMzI3QzgsIDB4QkY1OTdGQzcsXG4gIDB4QzZFMDBCRjMsIDB4RDVBNzkxNDcsIDB4MDZDQTYzNTEsIDB4MTQyOTI5NjcsXG4gIDB4MjdCNzBBODUsIDB4MkUxQjIxMzgsIDB4NEQyQzZERkMsIDB4NTMzODBEMTMsXG4gIDB4NjUwQTczNTQsIDB4NzY2QTBBQkIsIDB4ODFDMkM5MkUsIDB4OTI3MjJDODUsXG4gIDB4QTJCRkU4QTEsIDB4QTgxQTY2NEIsIDB4QzI0QjhCNzAsIDB4Qzc2QzUxQTMsXG4gIDB4RDE5MkU4MTksIDB4RDY5OTA2MjQsIDB4RjQwRTM1ODUsIDB4MTA2QUEwNzAsXG4gIDB4MTlBNEMxMTYsIDB4MUUzNzZDMDgsIDB4Mjc0ODc3NEMsIDB4MzRCMEJDQjUsXG4gIDB4MzkxQzBDQjMsIDB4NEVEOEFBNEEsIDB4NUI5Q0NBNEYsIDB4NjgyRTZGRjMsXG4gIDB4NzQ4RjgyRUUsIDB4NzhBNTYzNkYsIDB4ODRDODc4MTQsIDB4OENDNzAyMDgsXG4gIDB4OTBCRUZGRkEsIDB4QTQ1MDZDRUIsIDB4QkVGOUEzRjcsIDB4QzY3MTc4RjJcbl1cblxudmFyIFcgPSBuZXcgQXJyYXkoNjQpXG5cbmZ1bmN0aW9uIFNoYTI1NiAoKSB7XG4gIHRoaXMuaW5pdCgpXG5cbiAgdGhpcy5fdyA9IFcgLy8gbmV3IEFycmF5KDY0KVxuXG4gIEhhc2guY2FsbCh0aGlzLCA2NCwgNTYpXG59XG5cbmluaGVyaXRzKFNoYTI1NiwgSGFzaClcblxuU2hhMjU2LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9hID0gMHg2YTA5ZTY2N1xuICB0aGlzLl9iID0gMHhiYjY3YWU4NVxuICB0aGlzLl9jID0gMHgzYzZlZjM3MlxuICB0aGlzLl9kID0gMHhhNTRmZjUzYVxuICB0aGlzLl9lID0gMHg1MTBlNTI3ZlxuICB0aGlzLl9mID0gMHg5YjA1Njg4Y1xuICB0aGlzLl9nID0gMHgxZjgzZDlhYlxuICB0aGlzLl9oID0gMHg1YmUwY2QxOVxuXG4gIHJldHVybiB0aGlzXG59XG5cbmZ1bmN0aW9uIGNoICh4LCB5LCB6KSB7XG4gIHJldHVybiB6IF4gKHggJiAoeSBeIHopKVxufVxuXG5mdW5jdGlvbiBtYWogKHgsIHksIHopIHtcbiAgcmV0dXJuICh4ICYgeSkgfCAoeiAmICh4IHwgeSkpXG59XG5cbmZ1bmN0aW9uIHNpZ21hMCAoeCkge1xuICByZXR1cm4gKHggPj4+IDIgfCB4IDw8IDMwKSBeICh4ID4+PiAxMyB8IHggPDwgMTkpIF4gKHggPj4+IDIyIHwgeCA8PCAxMClcbn1cblxuZnVuY3Rpb24gc2lnbWExICh4KSB7XG4gIHJldHVybiAoeCA+Pj4gNiB8IHggPDwgMjYpIF4gKHggPj4+IDExIHwgeCA8PCAyMSkgXiAoeCA+Pj4gMjUgfCB4IDw8IDcpXG59XG5cbmZ1bmN0aW9uIGdhbW1hMCAoeCkge1xuICByZXR1cm4gKHggPj4+IDcgfCB4IDw8IDI1KSBeICh4ID4+PiAxOCB8IHggPDwgMTQpIF4gKHggPj4+IDMpXG59XG5cbmZ1bmN0aW9uIGdhbW1hMSAoeCkge1xuICByZXR1cm4gKHggPj4+IDE3IHwgeCA8PCAxNSkgXiAoeCA+Pj4gMTkgfCB4IDw8IDEzKSBeICh4ID4+PiAxMClcbn1cblxuU2hhMjU2LnByb3RvdHlwZS5fdXBkYXRlID0gZnVuY3Rpb24gKE0pIHtcbiAgdmFyIFcgPSB0aGlzLl93XG5cbiAgdmFyIGEgPSB0aGlzLl9hIHwgMFxuICB2YXIgYiA9IHRoaXMuX2IgfCAwXG4gIHZhciBjID0gdGhpcy5fYyB8IDBcbiAgdmFyIGQgPSB0aGlzLl9kIHwgMFxuICB2YXIgZSA9IHRoaXMuX2UgfCAwXG4gIHZhciBmID0gdGhpcy5fZiB8IDBcbiAgdmFyIGcgPSB0aGlzLl9nIHwgMFxuICB2YXIgaCA9IHRoaXMuX2ggfCAwXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSBXW2ldID0gTS5yZWFkSW50MzJCRShpICogNClcbiAgZm9yICg7IGkgPCA2NDsgKytpKSBXW2ldID0gKGdhbW1hMShXW2kgLSAyXSkgKyBXW2kgLSA3XSArIGdhbW1hMChXW2kgLSAxNV0pICsgV1tpIC0gMTZdKSB8IDBcblxuICBmb3IgKHZhciBqID0gMDsgaiA8IDY0OyArK2opIHtcbiAgICB2YXIgVDEgPSAoaCArIHNpZ21hMShlKSArIGNoKGUsIGYsIGcpICsgS1tqXSArIFdbal0pIHwgMFxuICAgIHZhciBUMiA9IChzaWdtYTAoYSkgKyBtYWooYSwgYiwgYykpIHwgMFxuXG4gICAgaCA9IGdcbiAgICBnID0gZlxuICAgIGYgPSBlXG4gICAgZSA9IChkICsgVDEpIHwgMFxuICAgIGQgPSBjXG4gICAgYyA9IGJcbiAgICBiID0gYVxuICAgIGEgPSAoVDEgKyBUMikgfCAwXG4gIH1cblxuICB0aGlzLl9hID0gKGEgKyB0aGlzLl9hKSB8IDBcbiAgdGhpcy5fYiA9IChiICsgdGhpcy5fYikgfCAwXG4gIHRoaXMuX2MgPSAoYyArIHRoaXMuX2MpIHwgMFxuICB0aGlzLl9kID0gKGQgKyB0aGlzLl9kKSB8IDBcbiAgdGhpcy5fZSA9IChlICsgdGhpcy5fZSkgfCAwXG4gIHRoaXMuX2YgPSAoZiArIHRoaXMuX2YpIHwgMFxuICB0aGlzLl9nID0gKGcgKyB0aGlzLl9nKSB8IDBcbiAgdGhpcy5faCA9IChoICsgdGhpcy5faCkgfCAwXG59XG5cblNoYTI1Ni5wcm90b3R5cGUuX2hhc2ggPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBIID0gQnVmZmVyLmFsbG9jVW5zYWZlKDMyKVxuXG4gIEgud3JpdGVJbnQzMkJFKHRoaXMuX2EsIDApXG4gIEgud3JpdGVJbnQzMkJFKHRoaXMuX2IsIDQpXG4gIEgud3JpdGVJbnQzMkJFKHRoaXMuX2MsIDgpXG4gIEgud3JpdGVJbnQzMkJFKHRoaXMuX2QsIDEyKVxuICBILndyaXRlSW50MzJCRSh0aGlzLl9lLCAxNilcbiAgSC53cml0ZUludDMyQkUodGhpcy5fZiwgMjApXG4gIEgud3JpdGVJbnQzMkJFKHRoaXMuX2csIDI0KVxuICBILndyaXRlSW50MzJCRSh0aGlzLl9oLCAyOClcblxuICByZXR1cm4gSFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNoYTI1NlxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBHbGlkZSBmcm9tICdAZ2xpZGVqcy9nbGlkZSc7XHJcbmltcG9ydCAnY3NzL3N0eWxlLmNzcyc7XHJcblxyXG5sZXQgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlciggKGV2dCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXZ0KTtcclxufSlcclxuXHJcbmxldCBjYXJvdXNlbCA9IG5ldyBHbGlkZSgnLmdsaWRlJywge1xyXG4gICAgdHlwZTogJ2Nhcm91c2VsJyxcclxuICAgIHN0YXJ0QXQ6IDAsXHJcbiAgICBwZXJWaWV3OiA1LFxyXG4gICAgZm9jdXNBdDogMixcclxuICAgIGdhcDogNTAsXHJcbn0pO1xyXG5cclxuY2Fyb3VzZWwub24oWydtb3VudC5hZnRlcicsICdydW4uYWZ0ZXInXSwgKCkgPT4ge1xyXG4gICAgYnV0dG9uSW5hY3RpdmUoKTtcclxuICAgIGJ1dHRvbkFjdGl2ZShjYXJvdXNlbC5pbmRleCk7XHJcbiAgICAvLyByZXNpemVJbmFjdGl2ZSgpO1xyXG59KTtcclxuXHJcbmNhcm91c2VsLm1vdW50KCk7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGJ1dHRvbkFjdGl2ZShpKSB7XHJcbiAgICBsZXQgYWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdsaWRlX19zbGlkZS0tYWN0aXZlJyk7XHJcbiAgICBhY3RpdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljayk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBidXR0b25JbmFjdGl2ZSgpIHtcclxuICAgIGxldCBpbmFjdGl2ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2dsaWRlX19zbGlkZScpO1xyXG4gICAgZm9yIChsZXQgZWwgb2YgaW5hY3RpdmUpIHtcclxuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZ0KSB7XHJcbiAgICBjb25zb2xlLmxvZyhldnQpXHJcbn1cclxuIiwiaW1wb3J0IE9CU1dlYlNvY2tldCBmcm9tICdvYnMtd2Vic29ja2V0LWpzJztcclxuXHJcbmNvbnN0IG9icyA9IG5ldyBPQlNXZWJTb2NrZXQoKTtcclxuIFxyXG4gICAgLy8gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZHJlc3NfYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgIC8vICAgICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRyZXNzJykudmFsdWU7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJjb25uZWN0IGJ1dHRvblwiKTtcclxuICAgIC8vIH0pO1xyXG4gICAgXHJcbiAgICAgICAgb2JzLmNvbm5lY3Qoe1xyXG4gICAgICAgIGFkZHJlc3M6ICdsb2NhbGhvc3Q6NDQ0NC8nXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgIG9icy5vbignQ29ubmVjdGlvbk9wZW5lZCcsICgpID0+IHtcclxuXHJcbiAgICAgICAgb2JzLnNlbmQoJ0dldFNjZW5lTGlzdCcpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgY29uc3Qgc2NlbmVMaXN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjZW5lX2xpc3QnKTtcclxuIFxyXG4gICAgICAgICAgIGRhdGEuc2NlbmVzLmZvckVhY2goc2NlbmUgPT4ge1xyXG4gICAgICAgICAgICAgY29uc3Qgc2NlbmVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgICBzY2VuZUVsZW1lbnQudGV4dENvbnRlbnQgPSBzY2VuZS5uYW1lO1xyXG4gICAgICAgICAgICAgc2NlbmVFbGVtZW50Lm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgb2JzLnNlbmQoJ1NldEN1cnJlbnRTY2VuZScsIHtcclxuICAgICAgICAgICAgICAgICAnc2NlbmUtbmFtZSc6IHNjZW5lLm5hbWVcclxuICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICB9O1xyXG4gXHJcbiAgICAgICAgICAgICBzY2VuZUxpc3REaXYuYXBwZW5kQ2hpbGQoc2NlbmVFbGVtZW50KTtcclxuICAgICAgICAgICB9KTtcclxuICAgICAgICAgfSlcclxuICAgICAgIH0pOyIsImxldCBzbmFwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NuYXAtYnV0dG9uJyk7XHJcbmxldCBjbGVhckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbGVhci1idXR0b24nKTtcclxubGV0IGNhcHR1cmVTdHJlYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FwdHVyZS1zdHJlYW0nKTtcclxubGV0IGNhcHR1cmVDYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FwdHVyZS1jYW52YXMnKVxyXG5sZXQgY2FwdHVyZVBob3RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhcHR1cmUtcGhvdG8nKTtcclxubGV0IGNhbWVyYU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlLW1lbnUnKTtcclxubGV0IHNuYXBNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYWN0aXZlLW1lbnUnKTtcclxubGV0IGNhbWVyYVRpbWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbWVyYS10aW1lcicpO1xyXG5sZXQgd2lkdGggPSAwO1xyXG5sZXQgaGVpZ2h0ID0gMDtcclxuXHJcbmNvbnN0IGRpc3BsYXlNZWRpYU9wdGlvbnMgPSB7IHZpZGVvOiB0cnVlLCBhdWRpbzogZmFsc2UgfTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFN0cmVhbSgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgc3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXREaXNwbGF5TWVkaWEoKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIH1cclxuXHJcbiAgICBjYXB0dXJlU3RyZWFtLnNyY09iamVjdCA9IHN0cmVhbTtcclxuICAgIGNhcHR1cmVTdHJlYW0ub25sb2FkZWRtZXRhZGF0YSA9IChldnQpID0+IHsgXHJcbiAgICAgICAgY2FwdHVyZVN0cmVhbS5wbGF5KCk7XHJcbiAgICAgICAgd2lkdGggPSBjYXB0dXJlU3RyZWFtLnZpZGVvV2lkdGg7XHJcbiAgICAgICAgaGVpZ2h0ID0gY2FwdHVyZVN0cmVhbS52aWRlb0hlaWdodDtcclxuICAgIH07XHJcblxyXG4gICAgY2FwdHVyZUNhbnZhcy5oaWRkZW4gPSB0cnVlO1xyXG4gICAgc25hcE1lbnUuaGlkZGVuID0gdHJ1ZTtcclxuICAgIGNhbWVyYVRpbWVyLmhpZGRlbiA9IHRydWU7XHJcbn07XHJcblxyXG5mdW5jdGlvbiB0YWtlU25hcCgpIHtcclxuICAgIGxldCBjb250ZXh0ID0gY2FwdHVyZUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgY2FwdHVyZUNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgY2FwdHVyZUNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgY29udGV4dC5kcmF3SW1hZ2UoY2FwdHVyZVN0cmVhbSwgMCwgMCk7XHJcblxyXG4gICAgbGV0IGRhdGEgPSBjYXB0dXJlQ2FudmFzLnRvRGF0YVVSTCgnY2FwdHVyZS9qcGcnKTtcclxuICAgIGNhcHR1cmVQaG90by5zcmMgPSBkYXRhO1xyXG5cclxuICAgIGNhcHR1cmVDYW52YXMuaGlkZGVuID0gZmFsc2U7XHJcbiAgICBzbmFwTWVudS5oaWRkZW4gPSBmYWxzZTtcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coJ3NuYXBwZWQnKVxyXG59O1xyXG5cclxuZnVuY3Rpb24gY2xlYXJTbmFwKCkge1xyXG4gICAgY2FtZXJhTWVudS5oaWRkZW4gPSBmYWxzZTtcclxuICAgIHNuYXBCdXR0b24uaGlkZGVuID0gZmFsc2U7XHJcbiAgICBjYXB0dXJlQ2FudmFzLmhpZGRlbiA9IHRydWU7XHJcbiAgICBzbmFwTWVudS5oaWRkZW4gPSB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb3VudGRvd24oKSB7XHJcbiAgICBsZXQgdGltZXIgPSAzO1xyXG4gICAgY2FtZXJhVGltZXIuaW5uZXJIVE1MID0gdGltZXI7XHJcbiAgICBjYW1lcmFNZW51LmhpZGRlbiA9IHRydWU7XHJcbiAgICBjYW1lcmFUaW1lci5oaWRkZW4gPSBmYWxzZTtcclxuXHJcbiAgICBsZXQgY291bnRkb3duID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aW1lciA8PSAwKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY291bnRkb3duKTtcclxuICAgICAgICAgICAgdGFrZVNuYXAoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRpbWVyIDw9IDAuNSkge1xyXG4gICAgICAgICAgICBjYW1lcmFUaW1lci5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICBzbmFwQnV0dG9uLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgICAgIGNhbWVyYVRpbWVyLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2FtZXJhVGltZXIuaW5uZXJIVE1MID0gdGltZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aW1lciAtPSAwLjU7XHJcbiAgICB9LCA1MDApO1xyXG59XHJcblxyXG5zbmFwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY291bnRkb3duKTtcclxuXHJcbmNsZWFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xlYXJTbmFwKTtcclxuXHJcbmdldFN0cmVhbSgpO1xyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gZnVuY3Rpb24gaW1wb3J0QWxsKHIpIHtcclxuLy8gICAgIHIua2V5cygpLmZvckVhY2gocik7XHJcbi8vICAgfVxyXG5cclxuLy8gaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnLi9jb21wb25lbnRzJywgZmFsc2UsIC9cXC5qcyQvKSk7XHJcblxyXG5pbXBvcnQgJy4vbGliL29icy13ZWJzb2NrZXQnO1xyXG5pbXBvcnQgJy4vbGliL3NjcmVlbi1jYXB0dXJlJztcclxuaW1wb3J0ICcuL2xpYi9tZW51LmpzJzsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=