(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat'.");
    }
    root.kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat = factory(typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined' ? {} : kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var toSet = kotlin_kotlin.$_$.m4;
  var THROW_CCE = kotlin_kotlin.$_$.i8;
  var isCharSequence = kotlin_kotlin.$_$.a6;
  var trim = kotlin_kotlin.$_$.x7;
  var toString = kotlin_kotlin.$_$.k6;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.t;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.g;
  var Unit_instance = kotlin_kotlin.$_$.y1;
  var joinToString = kotlin_kotlin.$_$.k3;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.u;
  var charSequenceLength = kotlin_kotlin.$_$.m5;
  var joinTo = kotlin_kotlin.$_$.m3;
  var protoOf = kotlin_kotlin.$_$.i6;
  var classMeta = kotlin_kotlin.$_$.n5;
  var setMetadataFor = kotlin_kotlin.$_$.j6;
  //endregion
  //region block: pre-declaration
  setMetadataFor(EventListenerHandler, 'EventListenerHandler', classMeta);
  //endregion
  function removeClass(_this__u8e3s4, cssClasses) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.any' call
      var inductionVariable = 0;
      var last = cssClasses.length;
      while (inductionVariable < last) {
        var element = cssClasses[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.dom.removeClass.<anonymous>' call
        if (hasClass(_this__u8e3s4, element)) {
          tmp$ret$1 = true;
          break $l$block;
        }
      }
      tmp$ret$1 = false;
    }
    if (tmp$ret$1) {
      var toBeRemoved = toSet(cssClasses);
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.text.split' call
      // Inline function 'kotlin.text.trim' call
      var this_0 = _this__u8e3s4.className;
      var this_1 = toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
      // Inline function 'kotlin.text.toRegex' call
      // Inline function 'kotlin.collections.filterTo' call
      var this_2 = Regex_init_$Create$('\\s+').p8(this_1, 0);
      var destination = ArrayList_init_$Create$();
      var tmp0_iterator = this_2.l();
      while (tmp0_iterator.x()) {
        var element_0 = tmp0_iterator.z();
        // Inline function 'kotlinx.dom.removeClass.<anonymous>' call
        if (!toBeRemoved.o(element_0)) {
          destination.u(element_0);
        }
      }
      _this__u8e3s4.className = joinToString(destination, ' ');
      return true;
    }
    return false;
  }
  function addClass(_this__u8e3s4, cssClasses) {
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.filterNotTo' call
    var destination = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = cssClasses.length;
    while (inductionVariable < last) {
      var element = cssClasses[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlinx.dom.addClass.<anonymous>' call
      if (!hasClass(_this__u8e3s4, element)) {
        destination.u(element);
      }
    }
    var missingClasses = destination;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!missingClasses.q()) {
      // Inline function 'kotlin.text.trim' call
      var this_0 = _this__u8e3s4.className;
      var presentClasses = toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.dom.addClass.<anonymous>' call
      this_1.t5(presentClasses);
      // Inline function 'kotlin.text.isEmpty' call
      if (!(charSequenceLength(presentClasses) === 0)) {
        this_1.t5(' ');
      }
      joinTo(missingClasses, this_1, ' ');
      _this__u8e3s4.className = this_1.toString();
      return true;
    }
    return false;
  }
  function hasClass(_this__u8e3s4, cssClass) {
    // Inline function 'kotlin.text.matches' call
    var this_0 = _this__u8e3s4.className;
    // Inline function 'kotlin.text.toRegex' call
    var this_1 = '(^|.*\\s+)' + cssClass + '($|\\s+.*)';
    return Regex_init_$Create$(this_1).m8(this_0);
  }
  function EventListener(handler) {
    return new EventListenerHandler(handler);
  }
  function EventListenerHandler(handler) {
    this.qf_1 = handler;
  }
  protoOf(EventListenerHandler).rf = function (event) {
    this.qf_1(event);
  };
  protoOf(EventListenerHandler).handleEvent = function (event) {
    return this.rf(event);
  };
  protoOf(EventListenerHandler).toString = function () {
    return 'EventListenerHandler(' + this.qf_1 + ')';
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = addClass;
  _.$_$.b = removeClass;
  _.$_$.c = EventListener;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js.map
