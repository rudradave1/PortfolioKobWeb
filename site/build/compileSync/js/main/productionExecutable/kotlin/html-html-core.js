(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-runtime.js', './html-internal-html-core-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-runtime.js'), require('./html-internal-html-core-runtime.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'html-html-core'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'html-html-core'.");
    }
    if (typeof this['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'html-html-core'.");
    }
    root['html-html-core'] = factory(typeof this['html-html-core'] === 'undefined' ? {} : this['html-html-core'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-runtime'], this['html-internal-html-core-runtime']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_internal_html_core_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.y1;
  var protoOf = kotlin_kotlin.$_$.i6;
  var asList = kotlin_kotlin.$_$.s2;
  var interfaceMeta = kotlin_kotlin.$_$.y5;
  var setMetadataFor = kotlin_kotlin.$_$.j6;
  var VOID = kotlin_kotlin.$_$.c;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.m;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.g;
  var addAll = kotlin_kotlin.$_$.p2;
  var classMeta = kotlin_kotlin.$_$.n5;
  var Enum = kotlin_kotlin.$_$.b8;
  var charSequenceLength = kotlin_kotlin.$_$.m5;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.n;
  var ensureNotNull = kotlin_kotlin.$_$.p8;
  var objectMeta = kotlin_kotlin.$_$.h6;
  var toString = kotlin_kotlin.$_$.k6;
  var hashCode = kotlin_kotlin.$_$.w5;
  var THROW_CCE = kotlin_kotlin.$_$.i8;
  var equals = kotlin_kotlin.$_$.q5;
  var getStringHashCode = kotlin_kotlin.$_$.v5;
  var toString_0 = kotlin_kotlin.$_$.y8;
  var numberToDouble = kotlin_kotlin.$_$.e6;
  var getNumberHashCode = kotlin_kotlin.$_$.t5;
  var defineProp = kotlin_kotlin.$_$.p5;
  var isInterface = kotlin_kotlin.$_$.b6;
  var Collection = kotlin_kotlin.$_$.i2;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var listOfNotNull = kotlin_kotlin.$_$.r3;
  var joinToString = kotlin_kotlin.$_$.k3;
  var joinToString_0 = kotlin_kotlin.$_$.l3;
  var contains = kotlin_kotlin.$_$.x6;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var _SkippableUpdater___get_composer__impl__6t7yne = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var DomNodeWrapper = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.b;
  var emptyList = kotlin_kotlin.$_$.b3;
  var copyToArray = kotlin_kotlin.$_$.z2;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.x8;
  var lazy = kotlin_kotlin.$_$.q8;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var DomApplier = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.a;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var DisposableEffect$composable_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h;
  var KProperty1 = kotlin_kotlin.$_$.t6;
  var getPropertyCallableRef = kotlin_kotlin.$_$.u5;
  //endregion
  //region block: pre-declaration
  function onClick(listener) {
    this.t1v(new MouseEventListener('click', listener));
  }
  function onAnimationEnd(listener) {
    this.t1v(new AnimationEventListener('animationend', listener));
  }
  setMetadataFor(EventsListenerScope, 'EventsListenerScope', interfaceMeta);
  function classes(classes) {
    return this.p1v(asList(classes));
  }
  function id(value) {
    return this.n1v('id', value);
  }
  function tabIndex(value) {
    return this.n1v('tabindex', value.toString());
  }
  setMetadataFor(AttrsScope, 'AttrsScope', interfaceMeta, VOID, [EventsListenerScope]);
  setMetadataFor(AttrsScopeBuilder, 'AttrsScopeBuilder', classMeta, VOID, [AttrsScope, EventsListenerScope], AttrsScopeBuilder);
  setMetadataFor(EventsListenerScopeBuilder, 'EventsListenerScopeBuilder', classMeta, VOID, [EventsListenerScope], EventsListenerScopeBuilder);
  setMetadataFor(ButtonType, 'ButtonType', classMeta, Enum);
  setMetadataFor(SyntheticEventListener, 'SyntheticEventListener', classMeta);
  setMetadataFor(MouseEventListener, 'MouseEventListener', classMeta, SyntheticEventListener);
  setMetadataFor(AnimationEventListener, 'AnimationEventListener', classMeta, SyntheticEventListener);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(CSSKeyframe, 'CSSKeyframe', classMeta);
  setMetadataFor(From, 'From', objectMeta, CSSKeyframe);
  setMetadataFor(To, 'To', objectMeta, CSSKeyframe);
  setMetadataFor(Percentage, 'Percentage', classMeta, CSSKeyframe);
  setMetadataFor(CSSStyledRuleDeclaration, 'CSSStyledRuleDeclaration', interfaceMeta);
  setMetadataFor(CSSKeyframeRuleDeclaration, 'CSSKeyframeRuleDeclaration', classMeta, VOID, [CSSStyledRuleDeclaration]);
  setMetadataFor(CSSKeyframesRuleDeclaration, 'CSSKeyframesRuleDeclaration', classMeta);
  setMetadataFor(Raw, 'Raw', classMeta);
  setMetadataFor(MediaFeature, 'MediaFeature', classMeta);
  setMetadataFor(CSSGroupingRuleDeclaration, 'CSSGroupingRuleDeclaration', interfaceMeta);
  setMetadataFor(CSSMediaRuleDeclaration, 'CSSMediaRuleDeclaration', classMeta, VOID, [CSSGroupingRuleDeclaration]);
  setMetadataFor(CSSStyleRuleDeclaration, 'CSSStyleRuleDeclaration', classMeta, VOID, [CSSStyledRuleDeclaration]);
  function property(propertyName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.j1y(propertyName, value);
  }
  function property_0(propertyName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.j1y(propertyName, value);
  }
  function variable(variableName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.l1y(variableName, value);
  }
  setMetadataFor(StyleScope, 'StyleScope', interfaceMeta);
  setMetadataFor(StyleHolder, 'StyleHolder', interfaceMeta);
  setMetadataFor(StyleScopeBuilder, 'StyleScopeBuilder', classMeta, VOID, [StyleScope, StyleHolder], StyleScopeBuilder);
  setMetadataFor(CSSRuleBuilderImpl, 'CSSRuleBuilderImpl', classMeta, StyleScopeBuilder, [StyleScope, StyleScopeBuilder], CSSRuleBuilderImpl);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(CSSUnitValueTyped, 'CSSUnitValueTyped', classMeta);
  setMetadataFor(RGBA, 'RGBA', classMeta);
  setMetadataFor(StylePropertyDeclaration, 'StylePropertyDeclaration', classMeta);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  function add(selector, style) {
    this.q1x(new CSSStyleRuleDeclaration(selector, style));
  }
  setMetadataFor(CSSRulesHolder, 'CSSRulesHolder', interfaceMeta);
  function returnUniversalSelector() {
    return get_Universal();
  }
  function returnHoverSelector() {
    return this.l1z();
  }
  function get_hover() {
    return new PseudoClassInternal('hover');
  }
  setMetadataFor(SelectorsScope, 'SelectorsScope', interfaceMeta);
  function invoke(_this__u8e3s4, cssRule) {
    this.i1z(new RawSelector(_this__u8e3s4), cssRule);
  }
  function style(_this__u8e3s4, cssRule) {
    this.i1z(new RawSelector(_this__u8e3s4), cssRule);
  }
  setMetadataFor(GenericStyleSheetBuilder, 'GenericStyleSheetBuilder', interfaceMeta, VOID, [CSSRulesHolder, SelectorsScope]);
  function style_0(selector, cssRule) {
    this.f1z(selector, buildCSSStyleRule(cssRule));
  }
  setMetadataFor(StyleSheetBuilder, 'StyleSheetBuilder', interfaceMeta, VOID, [CSSRulesHolder, GenericStyleSheetBuilder]);
  setMetadataFor(StyleSheet, 'StyleSheet', classMeta, VOID, [StyleSheetBuilder, CSSRulesHolder], StyleSheet);
  setMetadataFor(CSSRulesHolderState, 'CSSRulesHolderState', classMeta, VOID, [CSSRulesHolder], CSSRulesHolderState);
  setMetadataFor(CSSSelector, 'CSSSelector', classMeta);
  setMetadataFor(RawSelector, 'RawSelector', classMeta, CSSSelector);
  setMetadataFor(PseudoClassInternal, 'PseudoClassInternal', classMeta, CSSSelector);
  setMetadataFor(CSSBorder, 'CSSBorder', classMeta, VOID, VOID, CSSBorder);
  setMetadataFor(sam$org_jetbrains_compose_web_css_FilterFunction$0, 'sam$org_jetbrains_compose_web_css_FilterFunction$0', classMeta);
  setMetadataFor(FilterBuilderImplementation, 'FilterBuilderImplementation', classMeta, VOID, VOID, FilterBuilderImplementation);
  setMetadataFor(DomElementWrapper, 'DomElementWrapper', classMeta, DomNodeWrapper);
  setMetadataFor(ElementScopeBase, 'ElementScopeBase', classMeta);
  setMetadataFor(ElementScopeImpl, 'ElementScopeImpl', classMeta, ElementScopeBase, VOID, ElementScopeImpl);
  setMetadataFor(ElementBuilder, 'ElementBuilder', interfaceMeta);
  setMetadataFor(ElementBuilderImplementation, 'ElementBuilderImplementation', classMeta, VOID, [ElementBuilder]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(SyntheticEvent, 'SyntheticEvent', classMeta);
  setMetadataFor(SyntheticAnimationEvent, 'SyntheticAnimationEvent', classMeta, SyntheticEvent);
  setMetadataFor(SyntheticMouseEvent, 'SyntheticMouseEvent', classMeta, SyntheticEvent);
  //endregion
  var setInputValue;
  var setTextAreaDefaultValue;
  var setCheckedValue;
  function type(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.n1v('type', value.m1v_1);
  }
  function alt(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.n1v('alt', value);
  }
  function src(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.n1v('src', value);
  }
  function href(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.n1v('href', value);
  }
  function setInputValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    if (!(v === e.value)) {
      e.value = v;
    }
    saveControlledInputState(e, v);
    return Unit_instance;
  }
  function setTextAreaDefaultValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    e.innerText = v;
    return Unit_instance;
  }
  function setCheckedValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    e.checked = v;
    saveControlledInputState(e, v);
    return Unit_instance;
  }
  var properties_initialized_Attrs_kt_uypsku;
  function _init_properties_Attrs_kt__w5qjhs() {
    if (!properties_initialized_Attrs_kt_uypsku) {
      properties_initialized_Attrs_kt_uypsku = true;
      setInputValue = setInputValue$lambda;
      setTextAreaDefaultValue = setTextAreaDefaultValue$lambda;
      setCheckedValue = setCheckedValue$lambda;
    }
  }
  function AttrsScope() {
  }
  function AttrsScopeBuilder(eventsListenerScopeBuilder) {
    eventsListenerScopeBuilder = eventsListenerScopeBuilder === VOID ? new EventsListenerScopeBuilder() : eventsListenerScopeBuilder;
    this.w1v_1 = eventsListenerScopeBuilder;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.x1v_1 = LinkedHashMap_init_$Create$();
    this.y1v_1 = new StyleScopeBuilder();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.z1v_1 = ArrayList_init_$Create$();
    this.a1w_1 = null;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.b1w_1 = ArrayList_init_$Create$();
    this.c1w_1 = 8;
  }
  protoOf(AttrsScopeBuilder).v1v = function (listener) {
    this.w1v_1.v1v(listener);
  };
  protoOf(AttrsScopeBuilder).u1v = function (listener) {
    this.w1v_1.u1v(listener);
  };
  protoOf(AttrsScopeBuilder).t1v = function (listener) {
    this.w1v_1.t1v(listener);
  };
  protoOf(AttrsScopeBuilder).p1v = function (classes) {
    this.b1w_1.a1(classes);
  };
  protoOf(AttrsScopeBuilder).q1v = function (classes) {
    addAll(this.b1w_1, classes);
  };
  protoOf(AttrsScopeBuilder).o1v = function (builder) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    builder(this.y1v_1);
  };
  protoOf(AttrsScopeBuilder).n1v = function (attr, value) {
    // Inline function 'kotlin.collections.set' call
    this.x1v_1.j2(attr, value);
    return this;
  };
  protoOf(AttrsScopeBuilder).f1w = function () {
    return this.x1v_1;
  };
  function EventsListenerScope() {
  }
  function EventsListenerScopeBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.d1w_1 = ArrayList_init_$Create$();
    this.e1w_1 = 8;
  }
  protoOf(EventsListenerScopeBuilder).t1v = function (listener) {
    this.d1w_1.u(listener);
  };
  protoOf(EventsListenerScopeBuilder).g1w = function () {
    return this.d1w_1;
  };
  var ButtonType_Button_instance;
  var ButtonType_Reset_instance;
  var ButtonType_Submit_instance;
  var ButtonType_entriesInitialized;
  function ButtonType_initEntries() {
    if (ButtonType_entriesInitialized)
      return Unit_instance;
    ButtonType_entriesInitialized = true;
    ButtonType_Button_instance = new ButtonType('Button', 0, 'button');
    ButtonType_Reset_instance = new ButtonType('Reset', 1, 'reset');
    ButtonType_Submit_instance = new ButtonType('Submit', 2, 'submit');
  }
  function ButtonType(name, ordinal, str) {
    Enum.call(this, name, ordinal);
    this.m1v_1 = str;
  }
  function ButtonType_Button_getInstance() {
    ButtonType_initEntries();
    return ButtonType_Button_instance;
  }
  function SyntheticEventListener(event, listener) {
    this.h1w_1 = event;
    this.i1w_1 = listener;
    this.j1w_1 = this.h1w_1;
    this.k1w_1 = 0;
  }
  protoOf(SyntheticEventListener).l1w = function () {
    return this.j1w_1;
  };
  protoOf(SyntheticEventListener).rf = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new SyntheticEvent(event);
    this.i1w_1(tmp$ret$1);
  };
  protoOf(SyntheticEventListener).handleEvent = function (event) {
    return this.rf(event);
  };
  function MouseEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
  }
  protoOf(MouseEventListener).rf = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.i1w_1(new SyntheticMouseEvent(event));
  };
  protoOf(MouseEventListener).handleEvent = function (event) {
    return this.rf(event);
  };
  function AnimationEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
  }
  protoOf(AnimationEventListener).rf = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.i1w_1(new SyntheticAnimationEvent(event, event));
  };
  protoOf(AnimationEventListener).handleEvent = function (event) {
    return this.rf(event);
  };
  function get_controlledInputsValuesWeakMap() {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    return controlledInputsValuesWeakMap;
  }
  var controlledInputsValuesWeakMap;
  function get_controlledRadioGroups() {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    return controlledRadioGroups;
  }
  var controlledRadioGroups;
  function saveControlledInputState(element, value) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    get_controlledInputsValuesWeakMap().set(element, value);
    if (element instanceof HTMLInputElement) {
      updateRadioGroupIfNeeded(element);
    }
  }
  function updateRadioGroupIfNeeded(element) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    var tmp;
    if (element.type === 'radio') {
      // Inline function 'kotlin.text.isNotEmpty' call
      var this_0 = element.name;
      tmp = charSequenceLength(this_0) > 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      if (!get_controlledRadioGroups().q2(element.name)) {
        // Inline function 'kotlin.collections.set' call
        var this_1 = get_controlledRadioGroups();
        var key = element.name;
        // Inline function 'kotlin.collections.mutableSetOf' call
        var value = LinkedHashSet_init_$Create$();
        this_1.j2(key, value);
      }
      ensureNotNull(get_controlledRadioGroups().t2(element.name)).u(element);
    }
  }
  var properties_initialized_InternalControlledInputUtils_kt_dwq2r0;
  function _init_properties_InternalControlledInputUtils_kt__h0qaxa() {
    if (!properties_initialized_InternalControlledInputUtils_kt_dwq2r0) {
      properties_initialized_InternalControlledInputUtils_kt_dwq2r0 = true;
      // Inline function 'kotlin.js.unsafeCast' call
      controlledInputsValuesWeakMap = new WeakMap();
      // Inline function 'kotlin.collections.mutableMapOf' call
      controlledRadioGroups = LinkedHashMap_init_$Create$();
    }
  }
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance_0() {
    return Companion_instance;
  }
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    return Companion_instance_0;
  }
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_2() {
    return Companion_instance_1;
  }
  function Companion_2() {
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    return Companion_instance_2;
  }
  function Companion_3() {
  }
  var Companion_instance_3;
  function Companion_getInstance_4() {
    return Companion_instance_3;
  }
  function Companion_4() {
  }
  var Companion_instance_4;
  function Companion_getInstance_5() {
    return Companion_instance_4;
  }
  function Companion_5() {
  }
  var Companion_instance_5;
  function Companion_getInstance_6() {
    return Companion_instance_5;
  }
  function Companion_6() {
  }
  var Companion_instance_6;
  function Companion_getInstance_7() {
    return Companion_instance_6;
  }
  function Companion_7() {
  }
  var Companion_instance_7;
  function Companion_getInstance_8() {
    return Companion_instance_7;
  }
  function Companion_8() {
  }
  var Companion_instance_8;
  function Companion_getInstance_9() {
    return Companion_instance_8;
  }
  function From() {
    From_instance = this;
    CSSKeyframe.call(this);
    this.v1w_1 = 0;
  }
  protoOf(From).toString = function () {
    return 'from';
  };
  var From_instance;
  function From_getInstance() {
    if (From_instance == null)
      new From();
    return From_instance;
  }
  function To() {
    To_instance = this;
    CSSKeyframe.call(this);
    this.x1w_1 = 0;
  }
  protoOf(To).toString = function () {
    return 'to';
  };
  var To_instance;
  function To_getInstance() {
    if (To_instance == null)
      new To();
    return To_instance;
  }
  function Percentage(value) {
    CSSKeyframe.call(this);
    this.z1w_1 = value;
    this.a1x_1 = 8;
  }
  protoOf(Percentage).toString = function () {
    return toString(this.z1w_1);
  };
  protoOf(Percentage).hashCode = function () {
    return hashCode(this.z1w_1);
  };
  protoOf(Percentage).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Percentage))
      return false;
    var tmp0_other_with_cast = other instanceof Percentage ? other : THROW_CCE();
    if (!equals(this.z1w_1, tmp0_other_with_cast.z1w_1))
      return false;
    return true;
  };
  function CSSKeyframe() {
    this.b1x_1 = 0;
  }
  function CSSKeyframeRuleDeclaration(keyframe, style) {
    this.c1x_1 = keyframe;
    this.d1x_1 = style;
    this.e1x_1 = 8;
  }
  protoOf(CSSKeyframeRuleDeclaration).f1x = function () {
    return this.d1x_1;
  };
  protoOf(CSSKeyframeRuleDeclaration).g1x = function () {
    return this.c1x_1.toString();
  };
  protoOf(CSSKeyframeRuleDeclaration).toString = function () {
    return 'CSSKeyframeRuleDeclaration(keyframe=' + this.c1x_1 + ', style=' + this.d1x_1 + ')';
  };
  protoOf(CSSKeyframeRuleDeclaration).hashCode = function () {
    var result = hashCode(this.c1x_1);
    result = imul(result, 31) + hashCode(this.d1x_1) | 0;
    return result;
  };
  protoOf(CSSKeyframeRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSKeyframeRuleDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof CSSKeyframeRuleDeclaration ? other : THROW_CCE();
    if (!equals(this.c1x_1, tmp0_other_with_cast.c1x_1))
      return false;
    if (!equals(this.d1x_1, tmp0_other_with_cast.d1x_1))
      return false;
    return true;
  };
  function CSSKeyframesRuleDeclaration(name, keys) {
    this.h1x_1 = name;
    this.i1x_1 = keys;
    this.j1x_1 = 8;
  }
  protoOf(CSSKeyframesRuleDeclaration).g1x = function () {
    return '@keyframes ' + this.h1x_1;
  };
  protoOf(CSSKeyframesRuleDeclaration).toString = function () {
    return 'CSSKeyframesRuleDeclaration(name=' + this.h1x_1 + ', keys=' + this.i1x_1 + ')';
  };
  protoOf(CSSKeyframesRuleDeclaration).hashCode = function () {
    var result = getStringHashCode(this.h1x_1);
    result = imul(result, 31) + hashCode(this.i1x_1) | 0;
    return result;
  };
  protoOf(CSSKeyframesRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSKeyframesRuleDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof CSSKeyframesRuleDeclaration ? other : THROW_CCE();
    if (!(this.h1x_1 === tmp0_other_with_cast.h1x_1))
      return false;
    if (!equals(this.i1x_1, tmp0_other_with_cast.i1x_1))
      return false;
    return true;
  };
  function Raw(string) {
    this.k1x_1 = string;
    this.l1x_1 = 0;
  }
  protoOf(Raw).toString = function () {
    return this.k1x_1;
  };
  protoOf(Raw).hashCode = function () {
    return getStringHashCode(this.k1x_1);
  };
  protoOf(Raw).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Raw))
      return false;
    var tmp0_other_with_cast = other instanceof Raw ? other : THROW_CCE();
    if (!(this.k1x_1 === tmp0_other_with_cast.k1x_1))
      return false;
    return true;
  };
  function MediaFeature(name, value) {
    value = value === VOID ? null : value;
    this.m1x_1 = name;
    this.n1x_1 = value;
    this.o1x_1 = 8;
  }
  protoOf(MediaFeature).equals = function (other) {
    var tmp;
    if (other instanceof MediaFeature) {
      tmp = this.m1x_1 === other.m1x_1 ? toString_0(this.n1x_1) === toString_0(other.n1x_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MediaFeature).toString = function () {
    var tmp;
    if (this.n1x_1 == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.web.css.MediaFeature.toString.<anonymous>' call
      tmp = ': ' + this.n1x_1 + ')';
    }
    var tmp1_elvis_lhs = tmp;
    return '(' + this.m1x_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  };
  function media(_this__u8e3s4, query, rulesBuild) {
    media_0(_this__u8e3s4, new Raw(query), rulesBuild);
  }
  function media_0(_this__u8e3s4, query, rulesBuild) {
    var rules = _this__u8e3s4.p1x(rulesBuild);
    _this__u8e3s4.q1x(new CSSMediaRuleDeclaration(query, rules));
  }
  function CSSMediaRuleDeclaration(query, rules) {
    this.r1x_1 = query;
    this.s1x_1 = rules;
    this.t1x_1 = 0;
  }
  protoOf(CSSMediaRuleDeclaration).u1x = function () {
    return this.s1x_1;
  };
  protoOf(CSSMediaRuleDeclaration).g1x = function () {
    return '@media ' + this.r1x_1;
  };
  protoOf(CSSMediaRuleDeclaration).equals = function (other) {
    var tmp;
    if (other instanceof CSSMediaRuleDeclaration) {
      tmp = equals(this.s1x_1, other.s1x_1) ? equals(this.r1x_1, other.r1x_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  function unaryMinus(_this__u8e3s4) {
    return new CSSUnitValueTyped(-_this__u8e3s4.value, _this__u8e3s4.unit);
  }
  function CSSGroupingRuleDeclaration() {
  }
  function CSSStyleRuleDeclaration(selector, style) {
    this.v1x_1 = selector;
    this.w1x_1 = style;
    this.x1x_1 = 8;
  }
  protoOf(CSSStyleRuleDeclaration).f1x = function () {
    return this.w1x_1;
  };
  protoOf(CSSStyleRuleDeclaration).g1x = function () {
    return this.v1x_1.z1x();
  };
  protoOf(CSSStyleRuleDeclaration).toString = function () {
    return 'CSSStyleRuleDeclaration(selector=' + this.v1x_1 + ', style=' + this.w1x_1 + ')';
  };
  protoOf(CSSStyleRuleDeclaration).hashCode = function () {
    var result = hashCode(this.v1x_1);
    result = imul(result, 31) + hashCode(this.w1x_1) | 0;
    return result;
  };
  protoOf(CSSStyleRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSStyleRuleDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof CSSStyleRuleDeclaration ? other : THROW_CCE();
    if (!equals(this.v1x_1, tmp0_other_with_cast.v1x_1))
      return false;
    if (!equals(this.w1x_1, tmp0_other_with_cast.w1x_1))
      return false;
    return true;
  };
  function CSSStyledRuleDeclaration() {
  }
  function buildCSSStyleRule(cssRule) {
    var builder = new CSSRuleBuilderImpl();
    cssRule(builder);
    return builder;
  }
  function CSSRuleBuilderImpl() {
    StyleScopeBuilder.call(this);
    this.d1y_1 = 0;
  }
  function Companion_9() {
  }
  var Companion_instance_9;
  function Companion_getInstance_10() {
    return Companion_instance_9;
  }
  function get_cssRem(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.rem' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'rem');
  }
  function get_px(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'px');
  }
  function get_percent(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.percent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, '%');
  }
  function get_fr(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.fr' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'fr');
  }
  function get_ms(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.ms' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'ms');
  }
  function get_vh(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.vh' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'vh');
  }
  function get_vw(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.vw' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'vw');
  }
  function get_s(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.s' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 's');
  }
  function get_em(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.em' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'em');
  }
  function CSSUnitValueTyped(value, unit) {
    this.o1y_1 = value;
    this.p1y_1 = unit;
    this.q1y_1 = 0;
  }
  protoOf(CSSUnitValueTyped).m2 = function () {
    return this.o1y_1;
  };
  protoOf(CSSUnitValueTyped).r1y = function () {
    return this.p1y_1;
  };
  protoOf(CSSUnitValueTyped).toString = function () {
    return '' + this.o1y_1 + this.p1y_1;
  };
  protoOf(CSSUnitValueTyped).hashCode = function () {
    var result = getNumberHashCode(this.o1y_1);
    result = imul(result, 31) + hashCode(this.p1y_1) | 0;
    return result;
  };
  protoOf(CSSUnitValueTyped).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSUnitValueTyped))
      return false;
    var tmp0_other_with_cast = other instanceof CSSUnitValueTyped ? other : THROW_CCE();
    if (!equals(this.o1y_1, tmp0_other_with_cast.o1y_1))
      return false;
    if (!equals(this.p1y_1, tmp0_other_with_cast.p1y_1))
      return false;
    return true;
  };
  function rgba(r, g, b, a) {
    return new RGBA(r, g, b, a);
  }
  function RGBA(r, g, b, a) {
    this.s1y_1 = r;
    this.t1y_1 = g;
    this.u1y_1 = b;
    this.v1y_1 = a;
  }
  protoOf(RGBA).toString = function () {
    return 'rgba(' + toString(this.s1y_1) + ', ' + toString(this.t1y_1) + ', ' + toString(this.u1y_1) + ', ' + toString(this.v1y_1) + ')';
  };
  function StyleScope() {
  }
  function StyleScopeBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.g1y_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.h1y_1 = ArrayList_init_$Create$();
    this.i1y_1 = 0;
  }
  protoOf(StyleScopeBuilder).m1y = function () {
    return this.g1y_1;
  };
  protoOf(StyleScopeBuilder).n1y = function () {
    return this.h1y_1;
  };
  protoOf(StyleScopeBuilder).j1y = function (propertyName, value) {
    this.m1y().u(new StylePropertyDeclaration(propertyName, value));
  };
  protoOf(StyleScopeBuilder).l1y = function (variableName, value) {
    this.n1y().u(new StylePropertyDeclaration(variableName, value));
  };
  protoOf(StyleScopeBuilder).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, StyleHolder) : false) {
      tmp = nativeEquals(this.m1y(), other.m1y()) ? nativeEquals(this.n1y(), other.n1y()) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  function StyleHolder() {
  }
  function StylePropertyDeclaration(name, value) {
    this.w1y_1 = name;
    this.x1y_1 = value;
    this.y1y_1 = 8;
  }
  protoOf(StylePropertyDeclaration).kd = function () {
    return this.w1y_1;
  };
  protoOf(StylePropertyDeclaration).ld = function () {
    return this.x1y_1;
  };
  protoOf(StylePropertyDeclaration).toString = function () {
    return 'StylePropertyDeclaration(name=' + this.w1y_1 + ', value=' + this.x1y_1 + ')';
  };
  protoOf(StylePropertyDeclaration).hashCode = function () {
    var result = getStringHashCode(this.w1y_1);
    result = imul(result, 31) + hashCode(this.x1y_1) | 0;
    return result;
  };
  protoOf(StylePropertyDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StylePropertyDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof StylePropertyDeclaration ? other : THROW_CCE();
    if (!(this.w1y_1 === tmp0_other_with_cast.w1y_1))
      return false;
    if (!equals(this.x1y_1, tmp0_other_with_cast.x1y_1))
      return false;
    return true;
  };
  function nativeEquals(_this__u8e3s4, properties) {
    if (!(_this__u8e3s4.j() === properties.j()))
      return false;
    var index = 0;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(_this__u8e3s4, Collection)) {
        tmp = _this__u8e3s4.q();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = _this__u8e3s4.l();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'org.jetbrains.compose.web.css.nativeEquals.<anonymous>' call
        var tmp0 = index;
        index = tmp0 + 1 | 0;
        var otherProp = properties.k(tmp0);
        if (!(element.w1y_1 === otherProp.w1y_1 ? toString(element.x1y_1) === toString(otherProp.x1y_1) : false)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  }
  function Companion_10() {
    this.z1y_1 = 0;
  }
  var Companion_instance_10;
  function Companion_getInstance_11() {
    return Companion_instance_10;
  }
  function StyleSheet(rulesHolder, usePrefix) {
    rulesHolder = rulesHolder === VOID ? new CSSRulesHolderState() : rulesHolder;
    usePrefix = usePrefix === VOID ? true : usePrefix;
    this.a1z_1 = rulesHolder;
    this.b1z_1 = usePrefix;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.c1z_1 = LinkedHashMap_init_$Create$();
    this.d1z_1 = 0;
  }
  protoOf(StyleSheet).e1z = function () {
    return this.a1z_1.e1z();
  };
  protoOf(StyleSheet).q1x = function (cssRule) {
    this.a1z_1.q1x(cssRule);
  };
  protoOf(StyleSheet).f1z = function (selector, style) {
    this.a1z_1.f1z(selector, style);
  };
  protoOf(StyleSheet).g1z = function (rulesBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new StyleSheet();
    // Inline function 'kotlin.contracts.contract' call
    rulesBuild(this_0);
    return this_0.e1z();
  };
  protoOf(StyleSheet).p1x = function (rulesBuild) {
    return this.g1z(rulesBuild);
  };
  protoOf(StyleSheet).i1z = function (selector, cssRule) {
    return this.h1z(selector, cssRule);
  };
  function CSSRulesHolderState() {
    this.m1z_1 = mutableStateListOf();
    this.n1z_1 = 0;
  }
  protoOf(CSSRulesHolderState).e1z = function () {
    return this.m1z_1;
  };
  protoOf(CSSRulesHolderState).q1x = function (cssRule) {
    this.m1z_1.p13(cssRule);
  };
  function get_Universal() {
    _init_properties_StyleSheetBuilder_kt__ftybdn();
    return Universal;
  }
  var Universal;
  function RawSelector(selector) {
    CSSSelector.call(this);
    this.p1z_1 = selector;
  }
  protoOf(RawSelector).toString = function () {
    return this.p1z_1;
  };
  protoOf(RawSelector).hashCode = function () {
    return getStringHashCode(this.p1z_1);
  };
  protoOf(RawSelector).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RawSelector))
      return false;
    var tmp0_other_with_cast = other instanceof RawSelector ? other : THROW_CCE();
    if (!(this.p1z_1 === tmp0_other_with_cast.p1z_1))
      return false;
    return true;
  };
  function SelectorsScope() {
  }
  function PseudoClassInternal(name) {
    CSSSelector.call(this);
    this.r1z_1 = name;
  }
  protoOf(PseudoClassInternal).equals = function (other) {
    var tmp;
    if (other instanceof PseudoClassInternal) {
      tmp = this.r1z_1 === other.r1z_1 ? this.s1z() == other.s1z() : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(PseudoClassInternal).s1z = function () {
    return null;
  };
  protoOf(PseudoClassInternal).toString = function () {
    var tmp0_safe_receiver = this.s1z();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.web.css.PseudoClassInternal.toString.<anonymous>' call
      tmp = '(' + tmp0_safe_receiver + ')';
    }
    var tmp1_elvis_lhs = tmp;
    return ':' + this.r1z_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  };
  function GenericStyleSheetBuilder() {
  }
  function CSSRulesHolder() {
  }
  function StyleSheetBuilder() {
  }
  var properties_initialized_StyleSheetBuilder_kt_uqx9b1;
  function _init_properties_StyleSheetBuilder_kt__ftybdn() {
    if (!properties_initialized_StyleSheetBuilder_kt_uqx9b1) {
      properties_initialized_StyleSheetBuilder_kt_uqx9b1 = true;
      Universal = new RawSelector('*');
    }
  }
  function backgroundColor(_this__u8e3s4, value) {
    _this__u8e3s4.j1y('background-color', value);
  }
  function backgroundImage(_this__u8e3s4, value) {
    _this__u8e3s4.e1y('background-image', value);
  }
  function borderRadius(_this__u8e3s4, r) {
    _this__u8e3s4.j1y('border-radius', r);
  }
  function border(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    border_0(_this__u8e3s4, border$lambda(width, style, color));
  }
  function borderRadius_0(_this__u8e3s4, topLeft, topRightAndBottomLeft, bottomRight) {
    _this__u8e3s4.e1y('border-radius', '' + topLeft + ' ' + topRightAndBottomLeft + ' ' + bottomRight);
  }
  function border_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(this_0);
    _this__u8e3s4.j1y('border', this_0);
  }
  function CSSBorder() {
    this.t1z_1 = null;
    this.u1z_1 = null;
    this.v1z_1 = null;
    this.w1z_1 = 8;
  }
  protoOf(CSSBorder).equals = function (other) {
    var tmp;
    if (other instanceof CSSBorder) {
      tmp = (equals(this.t1z_1, other.t1z_1) ? equals(this.u1z_1, other.u1z_1) : false) ? equals(this.v1z_1, other.v1z_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CSSBorder).toString = function () {
    var values = listOfNotNull([this.t1z_1, this.u1z_1, this.v1z_1]);
    return joinToString(values, ' ');
  };
  function width(_this__u8e3s4, size) {
    _this__u8e3s4.t1z_1 = size;
  }
  function style_1(_this__u8e3s4, style) {
    _this__u8e3s4.u1z_1 = style;
  }
  function color(_this__u8e3s4, color) {
    _this__u8e3s4.v1z_1 = color;
  }
  function border$lambda($width, $style, $color) {
    return function ($this$border) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        width($this$border, tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        style_1($this$border, tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        color($this$border, tmp2_safe_receiver);
      }
      return Unit_instance;
    };
  }
  function width_0(_this__u8e3s4, value) {
    _this__u8e3s4.j1y('width', value);
  }
  function minWidth(_this__u8e3s4, value) {
    _this__u8e3s4.j1y('min-width', value);
  }
  function height(_this__u8e3s4, value) {
    _this__u8e3s4.j1y('height', value);
  }
  function minHeight(_this__u8e3s4, value) {
    _this__u8e3s4.j1y('min-height', value);
  }
  function maxWidth(_this__u8e3s4, value) {
    _this__u8e3s4.j1y('max-width', value);
  }
  function boxSizing(_this__u8e3s4, value) {
    _this__u8e3s4.e1y('box-sizing', value);
  }
  function color_0(_this__u8e3s4, value) {
    _this__u8e3s4.j1y('color', value);
  }
  function filter(_this__u8e3s4, filterContext) {
    var builder = new FilterBuilderImplementation();
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    filterContext(builder);
    _this__u8e3s4.e1y('filter', builder.toString());
  }
  function sam$org_jetbrains_compose_web_css_FilterFunction$0(function_0) {
    this.x1z_1 = function_0;
  }
  protoOf(sam$org_jetbrains_compose_web_css_FilterFunction$0).q1e = function () {
    return this.x1z_1();
  };
  function FilterBuilderImplementation$toString$lambda(it) {
    return it.q1e();
  }
  function FilterBuilderImplementation$invert$lambda($amount) {
    return function () {
      return 'invert(' + toString($amount) + ')';
    };
  }
  function FilterBuilderImplementation() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.y1z_1 = ArrayList_init_$Create$();
  }
  protoOf(FilterBuilderImplementation).toString = function () {
    return joinToString(this.y1z_1, ' ', VOID, VOID, VOID, VOID, FilterBuilderImplementation$toString$lambda);
  };
  protoOf(FilterBuilderImplementation).z1z = function (amount) {
    var tmp = FilterBuilderImplementation$invert$lambda(amount);
    this.y1z_1.u(new sam$org_jetbrains_compose_web_css_FilterFunction$0(tmp));
  };
  function flexGrow(_this__u8e3s4, value) {
    _this__u8e3s4.f1y('flex-grow', value);
  }
  function alignItems(_this__u8e3s4, alignItems) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.e1y('align-items', alignItems);
  }
  function alignSelf(_this__u8e3s4, alignSelf) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.e1y('align-self', alignSelf);
  }
  function flexDirection(_this__u8e3s4, flexDirection) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.e1y('flex-direction', flexDirection);
  }
  function justifyContent(_this__u8e3s4, justifyContent) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.e1y('justify-content', justifyContent);
  }
  function gap(_this__u8e3s4, value) {
    _this__u8e3s4.j1y('gap', value);
  }
  function gridRow(_this__u8e3s4, start, end) {
    _this__u8e3s4.e1y('grid-row', '' + start + ' / ' + end);
  }
  function gridTemplateColumns(_this__u8e3s4, value) {
    _this__u8e3s4.e1y('grid-template-columns', value);
  }
  function gridTemplateRows(_this__u8e3s4, value) {
    _this__u8e3s4.e1y('grid-template-rows', value);
  }
  function gridArea(_this__u8e3s4, rowStart, columnStart) {
    _this__u8e3s4.e1y('grid-area', rowStart + ' / ' + columnStart);
  }
  function gridAutoColumns(_this__u8e3s4, value) {
    _this__u8e3s4.e1y('grid-auto-columns', value);
  }
  function gridAutoRows(_this__u8e3s4, value) {
    _this__u8e3s4.e1y('grid-auto-rows', value);
  }
  function margin(_this__u8e3s4, value) {
    _this__u8e3s4.e1y('margin', joinToString_0(value, ' '));
  }
  function padding(_this__u8e3s4, value) {
    _this__u8e3s4.e1y('padding', joinToString_0(value, ' '));
  }
  function position(_this__u8e3s4, position) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.e1y('position', position);
  }
  function top(_this__u8e3s4, value) {
    _this__u8e3s4.j1y('top', value);
  }
  function left(_this__u8e3s4, value) {
    _this__u8e3s4.j1y('left', value);
  }
  function right(_this__u8e3s4, value) {
    _this__u8e3s4.j1y('right', value);
  }
  function bottom(_this__u8e3s4, value) {
    _this__u8e3s4.j1y('bottom', value);
  }
  function display(_this__u8e3s4, displayStyle) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.e1y('display', displayStyle);
  }
  function opacity(_this__u8e3s4, value) {
    _this__u8e3s4.f1y('opacity', value);
  }
  function lineHeight(_this__u8e3s4, value) {
    _this__u8e3s4.e1y('line-height', value);
  }
  function fontSize(_this__u8e3s4, value) {
    _this__u8e3s4.j1y('font-size', value);
  }
  function fontFamily(_this__u8e3s4, value) {
    _this__u8e3s4.e1y('font-family', joinToString_0(value, ', ', VOID, VOID, VOID, VOID, fontFamily$lambda));
  }
  function fontWeight(_this__u8e3s4, value) {
    _this__u8e3s4.f1y('font-weight', value);
  }
  function fontFamily$lambda(it) {
    return contains(it, ' ') ? '"' + it + '"' : it;
  }
  function CSSSelector() {
    this.y1x_1 = 0;
  }
  protoOf(CSSSelector).z1x = function () {
    return toString(this);
  };
  function TagElement$composable(elementBuilder, applyAttrs, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(-1594897193);
    sourceInformation($composer_0, 'C(TagElement$composable)P(2)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv(elementBuilder) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.iv(applyAttrs) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.iv(content) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.ju()) {
      if (isTraceInProgress()) {
        traceEventStart(-1594897193, $dirty, -1, 'org.jetbrains.compose.web.dom.TagElement$composable (Base.kt:106)');
      }
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.mu(547886695);
      sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.dv();
      var tmp;
      if (false ? true : it === Companion_getInstance().gu_1) {
        // Inline function 'org.jetbrains.compose.web.dom.TagElement$composable.<anonymous>' call
        var value = new ElementScopeImpl();
        $composer_1.ev(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.nu();
      var scope = tmp0;
      var refEffect = null;
      // Inline function 'org.jetbrains.compose.web.dom.ComposeDomNode$composable' call
      var $composer_2 = $composer_0;
      $composer_2.yu();
      if ($composer_2.iu()) {
        var tmp_1 = $composer_2;
        tmp_1.zu(TagElement$composable$lambda(elementBuilder, scope));
      } else {
        $composer_2.av();
      }
      // Inline function 'org.jetbrains.compose.web.dom.TagElement$composable.<anonymous>' call
      var $this$ComposeDomNode = _SkippableUpdater___init__impl__4ft0t9($composer_2);
      var $composer_3 = $composer_2;
      var attrsScope = new AttrsScopeBuilder();
      if (applyAttrs == null)
        null;
      else
        applyAttrs(attrsScope);
      refEffect = attrsScope.a1w_1;
      // Inline function 'androidx.compose.runtime.SkippableUpdater.update' call
      _SkippableUpdater___get_composer__impl__6t7yne($this$ComposeDomNode).mu(509942095);
      // Inline function 'org.jetbrains.compose.web.dom.TagElement$composable.<anonymous>.<anonymous>' call
      var $this$update = _Updater___init__impl__rbfxm8(_SkippableUpdater___get_composer__impl__6t7yne($this$ComposeDomNode));
      Updater__set_impl_v7kwss($this$update, attrsScope.b1w_1, DomElementWrapper$updateClasses$ref());
      Updater__set_impl_v7kwss($this$update, attrsScope.y1v_1, DomElementWrapper$updateStyleDeclarations$ref());
      var tmp_2 = attrsScope.f1w();
      Updater__set_impl_v7kwss($this$update, tmp_2, DomElementWrapper$updateAttrs$ref());
      var tmp_3 = attrsScope.w1v_1.g1w();
      Updater__set_impl_v7kwss($this$update, tmp_3, DomElementWrapper$updateEventListeners$ref());
      Updater__set_impl_v7kwss($this$update, attrsScope.z1v_1, DomElementWrapper$updateProperties$ref());
      _SkippableUpdater___get_composer__impl__6t7yne($this$ComposeDomNode).nu();
      $composer_2.mu(2058660585);
      // Inline function 'org.jetbrains.compose.web.dom.TagElement$composable.<anonymous>' call
      var $changed_0 = 8 & 64 >> 3 | 14 & 64 >> 3 | 112 & 64 >> 6;
      var $composer_4 = $composer_2;
      $composer_4.mu(-1128047990);
      content == null || content(scope, $composer_4, 14 & $changed_0 | 112 & $dirty >> 3);
      $composer_4.nu();
      $composer_2.nu();
      $composer_2.bv();
      var tmp0_safe_receiver = refEffect;
      var tmp_4;
      if (tmp0_safe_receiver == null) {
        tmp_4 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        DisposableEffect$composable(null, TagElement$composable$lambda_0(tmp0_safe_receiver, scope), $composer_0, 6);
        tmp_4 = Unit_instance;
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    var tmp1_safe_receiver = $composer_0.tu();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.s19(TagElement$composable$lambda_1(elementBuilder, applyAttrs, content, $changed));
    }
  }
  function DomElementWrapper(node) {
    DomNodeWrapper.call(this, node);
    this.c20_1 = node;
    this.d20_1 = emptyList();
  }
  protoOf(DomElementWrapper).w1t = function () {
    return this.c20_1;
  };
  protoOf(DomElementWrapper).e20 = function (list) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.d20_1.l();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateEventListeners.<anonymous>' call
      this.c20_1.removeEventListener(element.l1w(), element);
    }
    this.d20_1 = list;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = this.d20_1.l();
    while (tmp0_iterator_0.x()) {
      var element_0 = tmp0_iterator_0.z();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateEventListeners.<anonymous>' call
      this.c20_1.addEventListener(element_0.l1w(), element_0);
    }
  };
  protoOf(DomElementWrapper).f20 = function (applicators) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = applicators.l();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateProperties.<anonymous>' call
      var applicator = element.kd();
      var item = element.ld();
      applicator(this.c20_1, item);
    }
  };
  protoOf(DomElementWrapper).g20 = function (styleApplier) {
    var tmp0_subject = this.c20_1;
    var tmp;
    if (tmp0_subject instanceof HTMLElement) {
      tmp = true;
    } else {
      tmp = tmp0_subject instanceof SVGElement;
    }
    if (tmp) {
      this.c20_1.removeAttribute('style');
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var style = this.c20_1.style;
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = styleApplier.m1y().l();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateStyleDeclarations.<anonymous>' call
        var name = element.kd();
        var value = element.ld();
        style.setProperty(name, toString(value));
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = styleApplier.n1y().l();
      while (tmp0_iterator_0.x()) {
        var element_0 = tmp0_iterator_0.z();
        // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateStyleDeclarations.<anonymous>' call
        var name_0 = element_0.kd();
        var value_0 = element_0.ld();
        style.setProperty(name_0, toString(value_0));
      }
    }
  };
  protoOf(DomElementWrapper).h20 = function (attrs) {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.c20_1.getAttributeNames();
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateAttrs.<anonymous>' call
      switch (element) {
        case 'style':
        case 'class':
          break;
        default:
          this.c20_1.removeAttribute(element);
          break;
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = attrs.i2().l();
    while (tmp0_iterator.x()) {
      var element_0 = tmp0_iterator.z();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateAttrs.<anonymous>' call
      this.c20_1.setAttribute(element_0.l2(), element_0.m2());
    }
  };
  protoOf(DomElementWrapper).i20 = function (classes) {
    this.c20_1.removeAttribute('class');
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!classes.q()) {
      var tmp = this.c20_1.classList;
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp$ret$1 = copyToArray(classes);
      (function () {
        var $externalVarargReceiverTmp = tmp;
        return $externalVarargReceiverTmp.add.apply($externalVarargReceiverTmp, [].slice.call(tmp$ret$1.slice()));
      }.call(this));
    }
  };
  function TagElement$composable$lambda($elementBuilder, $scope) {
    return function () {
      // Inline function 'org.jetbrains.compose.web.dom.TagElement$composable.<anonymous>' call
      var node = $elementBuilder.e1h();
      $scope.m20(node);
      return new DomElementWrapper(node);
    };
  }
  function DomElementWrapper$updateClasses$ref() {
    var l = function (p0, p1) {
      p0.i20(p1);
      return Unit_instance;
    };
    l.callableName = 'updateClasses';
    return l;
  }
  function DomElementWrapper$updateStyleDeclarations$ref() {
    var l = function (p0, p1) {
      p0.g20(p1);
      return Unit_instance;
    };
    l.callableName = 'updateStyleDeclarations';
    return l;
  }
  function DomElementWrapper$updateAttrs$ref() {
    var l = function (p0, p1) {
      p0.h20(p1);
      return Unit_instance;
    };
    l.callableName = 'updateAttrs';
    return l;
  }
  function DomElementWrapper$updateEventListeners$ref() {
    var l = function (p0, p1) {
      p0.e20(p1);
      return Unit_instance;
    };
    l.callableName = 'updateEventListeners';
    return l;
  }
  function DomElementWrapper$updateProperties$ref() {
    var l = function (p0, p1) {
      p0.f20(p1);
      return Unit_instance;
    };
    l.callableName = 'updateProperties';
    return l;
  }
  function TagElement$composable$lambda_0($this, $scope) {
    return function ($this$DisposableEffect) {
      return $this($this$DisposableEffect, $scope.n20());
    };
  }
  function TagElement$composable$lambda_1($elementBuilder, $applyAttrs, $content, $$changed) {
    return function ($composer, $force) {
      TagElement$composable($elementBuilder, $applyAttrs, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ElementScopeImpl() {
    ElementScopeBase.call(this);
  }
  protoOf(ElementScopeImpl).m20 = function (_set____db54di) {
    this.l20_1 = _set____db54di;
  };
  protoOf(ElementScopeImpl).n20 = function () {
    var tmp = this.l20_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('element');
    }
  };
  protoOf(ElementScopeImpl).o20 = function (_this__u8e3s4) {
    return this.n20();
  };
  function ElementScopeBase() {
    this.p20_1 = 0;
    this.q20_1 = 8;
  }
  var Address;
  var Article;
  var Aside;
  var Header;
  var Area;
  var Audio;
  var Map;
  var Track;
  var Video;
  var Datalist;
  var Fieldset;
  var Legend;
  var Meter;
  var Output;
  var Progress;
  var Embed;
  var Iframe;
  var Object_0;
  var Param;
  var Picture;
  var Source;
  var Canvas;
  var DList;
  var DTerm;
  var DDescription;
  function get_Div() {
    _init_properties_Elements_kt__eyv5nt();
    return Div;
  }
  var Div;
  function get_A() {
    _init_properties_Elements_kt__eyv5nt();
    return A;
  }
  var A;
  var Input;
  function get_Button() {
    _init_properties_Elements_kt__eyv5nt();
    return Button;
  }
  var Button;
  function get_H1() {
    _init_properties_Elements_kt__eyv5nt();
    return H1;
  }
  var H1;
  function get_H2() {
    _init_properties_Elements_kt__eyv5nt();
    return H2;
  }
  var H2;
  function get_H3() {
    _init_properties_Elements_kt__eyv5nt();
    return H3;
  }
  var H3;
  function get_H4() {
    _init_properties_Elements_kt__eyv5nt();
    return H4;
  }
  var H4;
  var H5;
  var H6;
  function get_P() {
    _init_properties_Elements_kt__eyv5nt();
    return P;
  }
  var P;
  function get_Em() {
    _init_properties_Elements_kt__eyv5nt();
    return Em;
  }
  var Em;
  var I;
  var B;
  var Small;
  function get_Span() {
    _init_properties_Elements_kt__eyv5nt();
    return Span;
  }
  var Span;
  var Br;
  function get_Ul() {
    _init_properties_Elements_kt__eyv5nt();
    return Ul;
  }
  var Ul;
  var Ol;
  function get_Li() {
    _init_properties_Elements_kt__eyv5nt();
    return Li;
  }
  var Li;
  function get_Img() {
    _init_properties_Elements_kt__eyv5nt();
    return Img;
  }
  var Img;
  var Form;
  var Select;
  var Option;
  var OptGroup;
  var Section;
  var TextArea;
  var Nav;
  function get_Pre() {
    _init_properties_Elements_kt__eyv5nt();
    return Pre;
  }
  var Pre;
  function get_Code() {
    _init_properties_Elements_kt__eyv5nt();
    return Code;
  }
  var Code;
  var Main;
  var Footer;
  function get_Hr() {
    _init_properties_Elements_kt__eyv5nt();
    return Hr;
  }
  var Hr;
  var Label;
  var Table;
  var Caption;
  var Col;
  var Colgroup;
  var Tr;
  var Thead;
  var Th;
  var Td;
  var Tbody;
  var Tfoot;
  function get_Style() {
    _init_properties_Elements_kt__eyv5nt();
    return Style;
  }
  var Style;
  function ElementBuilder() {
  }
  function _get_el__ndc0ck($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.s20_1;
    el$factory();
    return this_0.m2();
  }
  function ElementBuilderImplementation$el$delegate$lambda(this$0) {
    return function () {
      return document.createElement(this$0.r20_1);
    };
  }
  function ElementBuilderImplementation(tagName) {
    this.r20_1 = tagName;
    var tmp = this;
    tmp.s20_1 = lazy(ElementBuilderImplementation$el$delegate$lambda(this));
  }
  protoOf(ElementBuilderImplementation).e1h = function () {
    var tmp = _get_el__ndc0ck(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function Div$composable(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(1021009996);
    sourceInformation($composer_0, 'C(Div$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.iv(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.iv(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1021009996, $dirty, -1, 'org.jetbrains.compose.web.dom.Div$composable (Elements.kt:489)');
      }
      TagElement$composable(get_Div(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    var tmp0_safe_receiver = $composer_0.tu();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.s19(Div$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Text$composable(value, $composer, $changed) {
    _init_properties_Elements_kt__eyv5nt();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(-363526853);
    sourceInformation($composer_0, 'C(Text$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv(value) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.ju()) {
      if (isTraceInProgress()) {
        traceEventStart(-363526853, $changed, -1, 'org.jetbrains.compose.web.dom.Text$composable (Elements.kt:479)');
      }
      // Inline function 'androidx.compose.runtime.ComposeNode$composable' call
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.mu(547886695);
      sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.dv();
      var tmp;
      if (false ? true : it === Companion_getInstance().gu_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Text$composable.<anonymous>' call
        var value_0 = Text$composable$lambda;
        $composer_1.ev(value_0);
        tmp = value_0;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.nu();
      var $composer_2 = $composer_0;
      $composer_2.mu(-1846754774);
      sourceInformation($composer_2, 'CC(ComposeNode$composable):Composables.kt#9igjgp');
      var tmp_1 = $composer_2.hu();
      if (!(tmp_1 instanceof DomApplier)) {
        invalidApplier();
      }
      $composer_2.yu();
      if ($composer_2.iu()) {
        var tmp_2 = $composer_2;
        tmp_2.zu(Text$composable$lambda_0(tmp0));
      } else {
        $composer_2.av();
      }
      // Inline function 'org.jetbrains.compose.web.dom.Text$composable.<anonymous>' call
      var $this$ComposeNode = _Updater___init__impl__rbfxm8($composer_2);
      Updater__set_impl_v7kwss($this$ComposeNode, value, Text$composable$lambda_1);
      $composer_2.bv();
      $composer_2.nu();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    var tmp0_safe_receiver = $composer_0.tu();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.s19(Text$composable$lambda_2(value, $changed));
    }
  }
  function Code$composable(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(-800239960);
    sourceInformation($composer_0, 'C(Code$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.iv(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.iv(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-800239960, $dirty, -1, 'org.jetbrains.compose.web.dom.Code$composable (Elements.kt:786)');
      }
      TagElement$composable(get_Code(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    var tmp0_safe_receiver = $composer_0.tu();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.s19(Code$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Li$composable(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(-456299496);
    sourceInformation($composer_0, 'C(Li$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.iv(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.iv(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-456299496, $dirty, -1, 'org.jetbrains.compose.web.dom.Li$composable (Elements.kt:615)');
      }
      TagElement$composable(get_Li(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    var tmp0_safe_receiver = $composer_0.tu();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.s19(Li$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Em$composable(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(-1537027315);
    sourceInformation($composer_0, 'C(Em$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.iv(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.iv(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1537027315, $dirty, -1, 'org.jetbrains.compose.web.dom.Em$composable (Elements.kt:569)');
      }
      TagElement$composable(get_Em(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    var tmp0_safe_receiver = $composer_0.tu();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.s19(Em$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function H1$composable(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(-583188148);
    sourceInformation($composer_0, 'C(H1$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.iv(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.iv(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-583188148, $dirty, -1, 'org.jetbrains.compose.web.dom.H1$composable (Elements.kt:527)');
      }
      TagElement$composable(get_H1(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    var tmp0_safe_receiver = $composer_0.tu();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.s19(H1$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function P$composable(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(-100692211);
    sourceInformation($composer_0, 'C(P$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.iv(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.iv(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-100692211, $dirty, -1, 'org.jetbrains.compose.web.dom.P$composable (Elements.kt:563)');
      }
      TagElement$composable(get_P(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    var tmp0_safe_receiver = $composer_0.tu();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.s19(P$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function H2$composable(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(1397973931);
    sourceInformation($composer_0, 'C(H2$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.iv(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.iv(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1397973931, $dirty, -1, 'org.jetbrains.compose.web.dom.H2$composable (Elements.kt:533)');
      }
      TagElement$composable(get_H2(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    var tmp0_safe_receiver = $composer_0.tu();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.s19(H2$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function H3$composable(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(-915831286);
    sourceInformation($composer_0, 'C(H3$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.iv(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.iv(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-915831286, $dirty, -1, 'org.jetbrains.compose.web.dom.H3$composable (Elements.kt:539)');
      }
      TagElement$composable(get_H3(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    var tmp0_safe_receiver = $composer_0.tu();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.s19(H3$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function H4$composable(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(1065330793);
    sourceInformation($composer_0, 'C(H4$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.iv(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.iv(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1065330793, $dirty, -1, 'org.jetbrains.compose.web.dom.H4$composable (Elements.kt:545)');
      }
      TagElement$composable(get_H4(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    var tmp0_safe_receiver = $composer_0.tu();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.s19(H4$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Ul$composable(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(-114341698);
    sourceInformation($composer_0, 'C(Ul$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.iv(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.iv(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-114341698, $dirty, -1, 'org.jetbrains.compose.web.dom.Ul$composable (Elements.kt:603)');
      }
      TagElement$composable(get_Ul(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    var tmp0_safe_receiver = $composer_0.tu();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.s19(Ul$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Pre$composable(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(-2070487814);
    sourceInformation($composer_0, 'C(Pre$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.iv(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.iv(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-2070487814, $dirty, -1, 'org.jetbrains.compose.web.dom.Pre$composable (Elements.kt:774)');
      }
      TagElement$composable(get_Pre(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    var tmp0_safe_receiver = $composer_0.tu();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.s19(Pre$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Span$composable(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(-155327957);
    sourceInformation($composer_0, 'C(Span$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.iv(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.iv(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-155327957, $dirty, -1, 'org.jetbrains.compose.web.dom.Span$composable (Elements.kt:593)');
      }
      TagElement$composable(get_Span(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    var tmp0_safe_receiver = $composer_0.tu();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.s19(Span$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Hr$composable(attrs, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(-1833971857);
    sourceInformation($composer_0, 'C(Hr$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.iv(attrs_0._v) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.ju()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1833971857, $dirty, -1, 'org.jetbrains.compose.web.dom.Hr$composable (Elements.kt:822)');
      }
      TagElement$composable(get_Hr(), attrs_0._v, null, $composer_0, 384 | 112 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    var tmp0_safe_receiver = $composer_0.tu();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.s19(Hr$composable$lambda(attrs_0, $changed, $default));
    }
  }
  function Button$composable(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(-767970749);
    sourceInformation($composer_0, 'C(Button$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.iv(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.iv(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-767970749, $dirty, -1, 'org.jetbrains.compose.web.dom.Button$composable (Elements.kt:521)');
      }
      TagElement$composable(get_Button(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    var tmp0_safe_receiver = $composer_0.tu();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.s19(Button$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Img$composable(src, alt, attrs, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var alt_0 = {_v: alt};
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(-878444342);
    sourceInformation($composer_0, 'C(Img$composable)P(2)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv(src) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.fv(alt_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.iv(attrs_0._v) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.ju()) {
      if (!(($default & 2) === 0)) {
        alt_0._v = '';
      }
      if (!(($default & 4) === 0)) {
        attrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-878444342, $dirty, -1, 'org.jetbrains.compose.web.dom.Img$composable (Elements.kt:621)');
      }
      var tmp = get_Img();
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var key2 = alt_0._v;
      var key3 = attrs_0._v;
      var $composer_1 = $composer_0;
      $composer_1.mu(-1058148781);
      sourceInformation($composer_1, 'CC(remember$composable)P(1,2,3):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!($composer_1.fv(src) | $composer_1.fv(key2)) | $composer_1.fv(key3));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.dv();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance().gu_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Img$composable.<anonymous>' call
        var value = Img$composable$lambda(src, alt_0, attrs_0);
        $composer_1.ev(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.nu();
      TagElement$composable(tmp, tmp0, null, $composer_0, 384);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    var tmp0_safe_receiver = $composer_0.tu();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.s19(Img$composable$lambda_0(src, alt_0, attrs_0, $changed, $default));
    }
  }
  function A$composable(href, attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var href_0 = {_v: href};
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(294823474);
    sourceInformation($composer_0, 'C(A$composable)P(2)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv(href_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.iv(attrs_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.iv(content_0._v) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.ju()) {
      if (!(($default & 1) === 0)) {
        href_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(294823474, $dirty, -1, 'org.jetbrains.compose.web.dom.A$composable (Elements.kt:501)');
      }
      var tmp = get_A();
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var key1 = href_0._v;
      var key2 = attrs_0._v;
      var $composer_1 = $composer_0;
      $composer_1.mu(-1124426577);
      sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_1.fv(key1) | $composer_1.fv(key2));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.dv();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance().gu_1) {
        // Inline function 'org.jetbrains.compose.web.dom.A$composable.<anonymous>' call
        var value = A$composable$lambda(href_0, attrs_0);
        $composer_1.ev(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.nu();
      TagElement$composable(tmp, tmp0, content_0._v, $composer_0, 896 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    var tmp0_safe_receiver = $composer_0.tu();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.s19(A$composable$lambda_0(href_0, attrs_0, content_0, $changed, $default));
    }
  }
  function Style$composable(applyAttrs, cssRules, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var applyAttrs_0 = {_v: applyAttrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(-1688263201);
    sourceInformation($composer_0, 'C(Style$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.iv(applyAttrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.fv(cssRules) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
      if (!(($default & 1) === 0)) {
        applyAttrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1688263201, $dirty, -1, 'org.jetbrains.compose.web.dom.Style$composable (Elements.kt:978)');
      }
      var tmp = get_Style();
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var key1 = applyAttrs_0._v;
      var $composer_1 = $composer_0;
      $composer_1.mu(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.fv(key1);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.dv();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance().gu_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Style$composable.<anonymous>' call
        var value = Style$composable$lambda(applyAttrs_0);
        $composer_1.ev(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.nu();
      var tmp_2 = tmp0;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.web.dom.Style$composable.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, 962227798, true, Style$composable$lambda_0(cssRules, $dirty));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.mu(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.fv(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_2.dv();
      var tmp_4;
      if (invalid_0 ? true : it_0 === Companion_getInstance().gu_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Style$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_2.ev(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it_0;
      }
      var tmp_5 = tmp_4;
      var tmp0_0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_2.nu();
      TagElement$composable(tmp, tmp_2, tmp0_0, $composer_0, 384);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    var tmp0_safe_receiver = $composer_0.tu();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.s19(Style$composable$lambda_1(applyAttrs_0, cssRules, $changed, $default));
    }
  }
  function clearCSSRules(_this__u8e3s4) {
    _init_properties_Elements_kt__eyv5nt();
    // Inline function 'kotlin.repeat' call
    var times = _this__u8e3s4.cssRules.length;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.jetbrains.compose.web.dom.clearCSSRules.<anonymous>' call
        _this__u8e3s4.deleteRule(0);
      }
       while (inductionVariable < times);
  }
  function Div$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Div$composable($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Text$composable$lambda() {
    _init_properties_Elements_kt__eyv5nt();
    return new DomNodeWrapper(document.createTextNode(''));
  }
  function Text$composable$lambda_0($factory) {
    return function () {
      return $factory();
    };
  }
  function Text$composable$lambda_1($this$set, value) {
    _init_properties_Elements_kt__eyv5nt();
    var tmp = $this$set.w1t();
    (tmp instanceof Text ? tmp : THROW_CCE()).data = value;
    return Unit_instance;
  }
  function Text$composable$lambda_2($value, $$changed) {
    return function ($composer, $force) {
      Text$composable($value, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Code$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Code$composable($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Li$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Li$composable($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Em$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Em$composable($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function H1$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      H1$composable($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function P$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      P$composable($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function H2$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      H2$composable($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function H3$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      H3$composable($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function H4$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      H4$composable($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Ul$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Ul$composable($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Pre$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Pre$composable($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Span$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Span$composable($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Hr$composable$lambda($attrs, $$changed, $$default) {
    return function ($composer, $force) {
      Hr$composable($attrs._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Button$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Button$composable($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Img$composable$lambda($src, $alt, $attrs) {
    return function ($this$TagElement) {
      alt(src($this$TagElement, $src), $alt._v);
      var tmp;
      if (!($attrs._v == null)) {
        tmp = $attrs._v($this$TagElement);
      }
      return Unit_instance;
    };
  }
  function Img$composable$lambda_0($src, $alt, $attrs, $$changed, $$default) {
    return function ($composer, $force) {
      Img$composable($src, $alt._v, $attrs._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function A$composable$lambda($href, $attrs) {
    return function ($this$TagElement) {
      var tmp;
      if (!($href._v == null)) {
        href($this$TagElement, $href._v);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!($attrs._v == null)) {
        tmp_0 = $attrs._v($this$TagElement);
      }
      return Unit_instance;
    };
  }
  function A$composable$lambda_0($href, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      A$composable($href._v, $attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Style$composable$lambda($applyAttrs) {
    return function ($this$TagElement) {
      var tmp;
      if (!($applyAttrs._v == null)) {
        tmp = $applyAttrs._v($this$TagElement);
      }
      return Unit_instance;
    };
  }
  function _no_name_provided__qut3iv($cssStylesheet) {
    this.t20_1 = $cssStylesheet;
  }
  protoOf(_no_name_provided__qut3iv).nj = function () {
    // Inline function 'org.jetbrains.compose.web.dom.Style$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    var tmp0_safe_receiver = this.t20_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      clearCSSRules(tmp0_safe_receiver);
    }
  };
  function Style$composable$lambda$lambda($this_TagElement, $cssRules) {
    return function ($this$DisposableEffect) {
      var tmp = $this_TagElement.o20($this$DisposableEffect).sheet;
      var cssStylesheet = tmp instanceof CSSStyleSheet ? tmp : null;
      if (cssStylesheet == null)
        null;
      else {
        setCSSRules(cssStylesheet, $cssRules);
      }
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv(cssStylesheet);
    };
  }
  function Style$composable$lambda_0($cssRules, $$dirty) {
    return function ($this$TagElement, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.fv($this$TagElement) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
        if (isTraceInProgress()) {
          traceEventStart(962227798, $changed, -1, 'org.jetbrains.compose.web.dom.Style$composable.<anonymous> (Elements.kt:989)');
        }
        var tmp_1 = $cssRules.j();
        DisposableEffect$composable_0($cssRules, tmp_1, Style$composable$lambda$lambda($this$TagElement, $cssRules), $composer_0, 14 & $$dirty >> 3);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp_0 = tmp_2;
      } else {
        $composer_0.xu();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.t1t(p0, p1, p2);
    };
  }
  function Style$composable$lambda_1($applyAttrs, $cssRules, $$changed, $$default) {
    return function ($composer, $force) {
      Style$composable($applyAttrs._v, $cssRules, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function el$factory() {
    return getPropertyCallableRef('el', 1, KProperty1, function (receiver) {
      return _get_el__ndc0ck(receiver);
    }, null);
  }
  var properties_initialized_Elements_kt_gtqiqv;
  function _init_properties_Elements_kt__eyv5nt() {
    if (!properties_initialized_Elements_kt_gtqiqv) {
      properties_initialized_Elements_kt_gtqiqv = true;
      Address = new ElementBuilderImplementation('address');
      Article = new ElementBuilderImplementation('article');
      Aside = new ElementBuilderImplementation('aside');
      Header = new ElementBuilderImplementation('header');
      Area = new ElementBuilderImplementation('area');
      Audio = new ElementBuilderImplementation('audio');
      Map = new ElementBuilderImplementation('map');
      Track = new ElementBuilderImplementation('track');
      Video = new ElementBuilderImplementation('video');
      Datalist = new ElementBuilderImplementation('datalist');
      Fieldset = new ElementBuilderImplementation('fieldset');
      Legend = new ElementBuilderImplementation('legend');
      Meter = new ElementBuilderImplementation('meter');
      Output = new ElementBuilderImplementation('output');
      Progress = new ElementBuilderImplementation('progress');
      Embed = new ElementBuilderImplementation('embed');
      Iframe = new ElementBuilderImplementation('iframe');
      Object_0 = new ElementBuilderImplementation('object');
      Param = new ElementBuilderImplementation('param');
      Picture = new ElementBuilderImplementation('picture');
      Source = new ElementBuilderImplementation('source');
      Canvas = new ElementBuilderImplementation('canvas');
      DList = new ElementBuilderImplementation('dl');
      DTerm = new ElementBuilderImplementation('dt');
      DDescription = new ElementBuilderImplementation('dd');
      Div = new ElementBuilderImplementation('div');
      A = new ElementBuilderImplementation('a');
      Input = new ElementBuilderImplementation('input');
      Button = new ElementBuilderImplementation('button');
      H1 = new ElementBuilderImplementation('h1');
      H2 = new ElementBuilderImplementation('h2');
      H3 = new ElementBuilderImplementation('h3');
      H4 = new ElementBuilderImplementation('h4');
      H5 = new ElementBuilderImplementation('h5');
      H6 = new ElementBuilderImplementation('h6');
      P = new ElementBuilderImplementation('p');
      Em = new ElementBuilderImplementation('em');
      I = new ElementBuilderImplementation('i');
      B = new ElementBuilderImplementation('b');
      Small = new ElementBuilderImplementation('small');
      Span = new ElementBuilderImplementation('span');
      Br = new ElementBuilderImplementation('br');
      Ul = new ElementBuilderImplementation('ul');
      Ol = new ElementBuilderImplementation('ol');
      Li = new ElementBuilderImplementation('li');
      Img = new ElementBuilderImplementation('img');
      Form = new ElementBuilderImplementation('form');
      Select = new ElementBuilderImplementation('select');
      Option = new ElementBuilderImplementation('option');
      OptGroup = new ElementBuilderImplementation('optgroup');
      Section = new ElementBuilderImplementation('section');
      TextArea = new ElementBuilderImplementation('textarea');
      Nav = new ElementBuilderImplementation('nav');
      Pre = new ElementBuilderImplementation('pre');
      Code = new ElementBuilderImplementation('code');
      Main = new ElementBuilderImplementation('main');
      Footer = new ElementBuilderImplementation('footer');
      Hr = new ElementBuilderImplementation('hr');
      Label = new ElementBuilderImplementation('label');
      Table = new ElementBuilderImplementation('table');
      Caption = new ElementBuilderImplementation('caption');
      Col = new ElementBuilderImplementation('col');
      Colgroup = new ElementBuilderImplementation('colgroup');
      Tr = new ElementBuilderImplementation('tr');
      Thead = new ElementBuilderImplementation('thead');
      Th = new ElementBuilderImplementation('th');
      Td = new ElementBuilderImplementation('td');
      Tbody = new ElementBuilderImplementation('tbody');
      Tfoot = new ElementBuilderImplementation('tfoot');
      Style = new ElementBuilderImplementation('style');
    }
  }
  function setCSSRules(_this__u8e3s4, cssRules) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = cssRules.l();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'org.jetbrains.compose.web.dom.setCSSRules.<anonymous>' call
      addRule(_this__u8e3s4, element);
    }
  }
  function addRule(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_0(_this__u8e3s4, cssRuleDeclaration.g1x() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_0(_this__u8e3s4, cssRule) {
    var cssRuleIndex = _this__u8e3s4.insertRule(cssRule, _this__u8e3s4.cssRules.length);
    return _this__u8e3s4.cssRules.item(cssRuleIndex);
  }
  function fillRule(cssRuleDeclaration, cssRule) {
    if (isInterface(cssRuleDeclaration, CSSStyledRuleDeclaration)) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var cssStyleRule = cssRule;
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = cssRuleDeclaration.f1x().m1y().l();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
        var name = element.kd();
        var value = element.ld();
        setProperty(cssStyleRule.style, name, value);
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = cssRuleDeclaration.f1x().n1y().l();
      while (tmp0_iterator_0.x()) {
        var element_0 = tmp0_iterator_0.z();
        // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
        var name_0 = element_0.kd();
        var value_0 = element_0.ld();
        setVariable(cssStyleRule.style, name_0, value_0);
      }
    } else {
      if (isInterface(cssRuleDeclaration, CSSGroupingRuleDeclaration)) {
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var cssGroupingRule = cssRule;
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator_1 = cssRuleDeclaration.u1x().l();
        while (tmp0_iterator_1.x()) {
          var element_1 = tmp0_iterator_1.z();
          // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
          addRule_1(cssGroupingRule, element_1);
        }
      } else {
        if (cssRuleDeclaration instanceof CSSKeyframesRuleDeclaration) {
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var cssGroupingRule_0 = cssRule;
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator_2 = cssRuleDeclaration.i1x_1.l();
          while (tmp0_iterator_2.x()) {
            var element_2 = tmp0_iterator_2.z();
            // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
            addRule_2(cssGroupingRule_0, element_2);
          }
        }
      }
    }
  }
  function setProperty(style, name, value) {
    style.setProperty(name, toString(value));
  }
  function setVariable(style, name, value) {
    style.setProperty('--' + name, toString(value));
  }
  function addRule_1(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_3(_this__u8e3s4, cssRuleDeclaration.g1x() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_2(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_4(_this__u8e3s4, cssRuleDeclaration.g1x() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_3(_this__u8e3s4, cssRule) {
    var cssRuleIndex = _this__u8e3s4.insertRule(cssRule, _this__u8e3s4.cssRules.length);
    return _this__u8e3s4.cssRules.item(cssRuleIndex);
  }
  function addRule_4(_this__u8e3s4, cssRule) {
    // Inline function 'org.jetbrains.compose.web.css.appendRule' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.appendRule(cssRule);
    return _this__u8e3s4.cssRules.item(_this__u8e3s4.cssRules.length - 1 | 0);
  }
  function SyntheticAnimationEvent(nativeEvent, animationEventDetails) {
    SyntheticEvent.call(this, nativeEvent);
    this.g21_1 = animationEventDetails.animationName;
    this.h21_1 = animationEventDetails.elapsedTime;
    this.i21_1 = animationEventDetails.pseudoElement;
    this.j21_1 = 0;
  }
  function SyntheticEvent(nativeEvent) {
    this.k21_1 = nativeEvent;
    var tmp = this;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.l21_1 = this.k21_1.target;
    this.m21_1 = this.k21_1.bubbles;
    this.n21_1 = this.k21_1.cancelable;
    this.o21_1 = this.k21_1.composed;
    this.p21_1 = this.k21_1.currentTarget;
    this.q21_1 = this.k21_1.eventPhase;
    this.r21_1 = this.k21_1.defaultPrevented;
    this.s21_1 = this.k21_1.timeStamp;
    this.t21_1 = this.k21_1.type;
    this.u21_1 = this.k21_1.isTrusted;
    this.v21_1 = 0;
  }
  protoOf(SyntheticEvent).w21 = function () {
    return this.k21_1.preventDefault();
  };
  protoOf(SyntheticEvent).x21 = function () {
    return this.k21_1.stopPropagation();
  };
  function SyntheticMouseEvent(nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.k22_1 = nativeEvent;
    this.l22_1 = nativeEvent.altKey;
    this.m22_1 = nativeEvent.button;
    this.n22_1 = nativeEvent.buttons;
    this.o22_1 = nativeEvent.clientX;
    this.p22_1 = nativeEvent.clientY;
    this.q22_1 = nativeEvent.ctrlKey;
    this.r22_1 = nativeEvent.metaKey;
    var tmp = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = nativeEvent.movementX;
    var tmp0_elvis_lhs = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : null;
    tmp.s22_1 = tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
    var tmp_1 = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = nativeEvent.movementY;
    var tmp0_elvis_lhs_0 = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : null;
    tmp_1.t22_1 = tmp0_elvis_lhs_0 == null ? 0 : tmp0_elvis_lhs_0;
    this.u22_1 = nativeEvent.offsetX;
    this.v22_1 = nativeEvent.offsetY;
    this.w22_1 = nativeEvent.pageX;
    this.x22_1 = nativeEvent.pageY;
    this.y22_1 = nativeEvent.region;
    this.z22_1 = nativeEvent.relatedTarget;
    this.a23_1 = nativeEvent.screenX;
    this.b23_1 = nativeEvent.screenY;
    this.c23_1 = nativeEvent.shiftKey;
    this.d23_1 = nativeEvent.x;
    this.e23_1 = nativeEvent.y;
    this.f23_1 = 0;
  }
  //region block: post-declaration
  protoOf(AttrsScopeBuilder).r1v = id;
  protoOf(AttrsScopeBuilder).s1v = tabIndex;
  protoOf(EventsListenerScopeBuilder).u1v = onClick;
  protoOf(EventsListenerScopeBuilder).v1v = onAnimationEnd;
  protoOf(StyleScopeBuilder).e1y = property;
  protoOf(StyleScopeBuilder).f1y = property_0;
  protoOf(StyleScopeBuilder).k1y = variable;
  defineProp(protoOf(CSSUnitValueTyped), 'value', function () {
    return this.m2();
  });
  defineProp(protoOf(CSSUnitValueTyped), 'unit', function () {
    return this.r1y();
  });
  protoOf(StyleSheet).h1z = style_0;
  protoOf(StyleSheet).j1z = style;
  protoOf(StyleSheet).k1z = invoke;
  protoOf(StyleSheet).returnUniversalSelector = returnUniversalSelector;
  protoOf(StyleSheet).returnHoverSelector = returnHoverSelector;
  protoOf(StyleSheet).l1z = get_hover;
  protoOf(CSSRulesHolderState).f1z = add;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Companion_instance_3 = new Companion_3();
  Companion_instance_4 = new Companion_4();
  Companion_instance_5 = new Companion_5();
  Companion_instance_6 = new Companion_6();
  Companion_instance_7 = new Companion_7();
  Companion_instance_8 = new Companion_8();
  Companion_instance_9 = new Companion_9();
  Companion_instance_10 = new Companion_10();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ButtonType_Button_getInstance;
  _.$_$.b = Companion_instance_5;
  _.$_$.c = Companion_instance_6;
  _.$_$.d = Companion_instance_3;
  _.$_$.e = Companion_instance_4;
  _.$_$.f = Companion_instance_2;
  _.$_$.g = From_getInstance;
  _.$_$.h = To_getInstance;
  _.$_$.i = Companion_instance;
  _.$_$.j = Companion_instance_7;
  _.$_$.k = Companion_instance_8;
  _.$_$.l = Companion_instance_0;
  _.$_$.m = Companion_instance_1;
  _.$_$.n = classes;
  _.$_$.o = id;
  _.$_$.p = tabIndex;
  _.$_$.q = AttrsScope;
  _.$_$.r = onAnimationEnd;
  _.$_$.s = onClick;
  _.$_$.t = type;
  _.$_$.u = CSSBorder;
  _.$_$.v = Percentage;
  _.$_$.w = CSSKeyframeRuleDeclaration;
  _.$_$.x = CSSKeyframesRuleDeclaration;
  _.$_$.y = MediaFeature;
  _.$_$.z = Raw;
  _.$_$.a1 = property;
  _.$_$.b1 = property_0;
  _.$_$.c1 = variable;
  _.$_$.d1 = StyleScopeBuilder;
  _.$_$.e1 = StyleScope;
  _.$_$.f1 = StyleSheet;
  _.$_$.g1 = alignItems;
  _.$_$.h1 = alignSelf;
  _.$_$.i1 = backgroundColor;
  _.$_$.j1 = backgroundImage;
  _.$_$.k1 = borderRadius_0;
  _.$_$.l1 = borderRadius;
  _.$_$.m1 = border;
  _.$_$.n1 = bottom;
  _.$_$.o1 = boxSizing;
  _.$_$.p1 = color;
  _.$_$.q1 = color_0;
  _.$_$.r1 = get_cssRem;
  _.$_$.s1 = display;
  _.$_$.t1 = get_em;
  _.$_$.u1 = filter;
  _.$_$.v1 = flexDirection;
  _.$_$.w1 = flexGrow;
  _.$_$.x1 = fontFamily;
  _.$_$.y1 = fontSize;
  _.$_$.z1 = fontWeight;
  _.$_$.a2 = get_fr;
  _.$_$.b2 = gap;
  _.$_$.c2 = gridArea;
  _.$_$.d2 = gridAutoColumns;
  _.$_$.e2 = gridAutoRows;
  _.$_$.f2 = gridRow;
  _.$_$.g2 = gridTemplateColumns;
  _.$_$.h2 = gridTemplateRows;
  _.$_$.i2 = height;
  _.$_$.j2 = justifyContent;
  _.$_$.k2 = left;
  _.$_$.l2 = lineHeight;
  _.$_$.m2 = margin;
  _.$_$.n2 = maxWidth;
  _.$_$.o2 = media;
  _.$_$.p2 = minHeight;
  _.$_$.q2 = minWidth;
  _.$_$.r2 = get_ms;
  _.$_$.s2 = opacity;
  _.$_$.t2 = padding;
  _.$_$.u2 = get_percent;
  _.$_$.v2 = position;
  _.$_$.w2 = get_px;
  _.$_$.x2 = rgba;
  _.$_$.y2 = right;
  _.$_$.z2 = get_s;
  _.$_$.a3 = style_1;
  _.$_$.b3 = top;
  _.$_$.c3 = unaryMinus;
  _.$_$.d3 = get_vh;
  _.$_$.e3 = get_vw;
  _.$_$.f3 = width_0;
  _.$_$.g3 = width;
  _.$_$.h3 = A$composable;
  _.$_$.i3 = Button$composable;
  _.$_$.j3 = Code$composable;
  _.$_$.k3 = Div$composable;
  _.$_$.l3 = ElementBuilder;
  _.$_$.m3 = Em$composable;
  _.$_$.n3 = H1$composable;
  _.$_$.o3 = H2$composable;
  _.$_$.p3 = H3$composable;
  _.$_$.q3 = H4$composable;
  _.$_$.r3 = Hr$composable;
  _.$_$.s3 = Img$composable;
  _.$_$.t3 = Li$composable;
  _.$_$.u3 = P$composable;
  _.$_$.v3 = Pre$composable;
  _.$_$.w3 = Span$composable;
  _.$_$.x3 = Style$composable;
  _.$_$.y3 = TagElement$composable;
  _.$_$.z3 = Text$composable;
  _.$_$.a4 = Ul$composable;
  //endregion
  return _;
}));

//# sourceMappingURL=html-html-core.js.map
