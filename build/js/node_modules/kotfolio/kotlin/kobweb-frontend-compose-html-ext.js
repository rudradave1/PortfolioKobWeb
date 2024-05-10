(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './html-html-core.js', './compose-multiplatform-core-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./html-html-core.js'), require('./compose-multiplatform-core-runtime.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    root['kobweb-frontend-compose-html-ext'] = factory(typeof this['kobweb-frontend-compose-html-ext'] === 'undefined' ? {} : this['kobweb-frontend-compose-html-ext'], this['kotlin-kotlin-stdlib'], this['html-html-core'], this['compose-multiplatform-core-runtime']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_html_html_core, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.i6;
  var objectCreate = kotlin_kotlin.$_$.g6;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.m;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.n;
  var Unit_instance = kotlin_kotlin.$_$.y1;
  var equals = kotlin_kotlin.$_$.q5;
  var hashCode = kotlin_kotlin.$_$.w5;
  var classes = kotlin_org_jetbrains_compose_html_html_core.$_$.n;
  var id = kotlin_org_jetbrains_compose_html_html_core.$_$.o;
  var tabIndex = kotlin_org_jetbrains_compose_html_html_core.$_$.p;
  var onClick = kotlin_org_jetbrains_compose_html_html_core.$_$.s;
  var onAnimationEnd = kotlin_org_jetbrains_compose_html_html_core.$_$.r;
  var AttrsScope = kotlin_org_jetbrains_compose_html_html_core.$_$.q;
  var classMeta = kotlin_kotlin.$_$.n5;
  var setMetadataFor = kotlin_kotlin.$_$.j6;
  var VOID = kotlin_kotlin.$_$.c;
  var objectMeta = kotlin_kotlin.$_$.h6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.g;
  var toString = kotlin_kotlin.$_$.k6;
  var joinToString = kotlin_kotlin.$_$.k3;
  var getStringHashCode = kotlin_kotlin.$_$.v5;
  var THROW_CCE = kotlin_kotlin.$_$.i8;
  var joinToString_0 = kotlin_kotlin.$_$.l3;
  var reversed = kotlin_kotlin.$_$.d4;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.u;
  var charSequenceLength = kotlin_kotlin.$_$.m5;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.n1;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.v2;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.f;
  var Collection = kotlin_kotlin.$_$.i2;
  var isInterface = kotlin_kotlin.$_$.b6;
  var backgroundImage = kotlin_org_jetbrains_compose_html_html_core.$_$.j1;
  var CSSBorder = kotlin_org_jetbrains_compose_html_html_core.$_$.u;
  var width = kotlin_org_jetbrains_compose_html_html_core.$_$.g3;
  var style = kotlin_org_jetbrains_compose_html_html_core.$_$.a3;
  var color = kotlin_org_jetbrains_compose_html_html_core.$_$.p1;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.w2;
  var boxSizing = kotlin_org_jetbrains_compose_html_html_core.$_$.o1;
  var property = kotlin_org_jetbrains_compose_html_html_core.$_$.a1;
  var property_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.b1;
  var variable = kotlin_org_jetbrains_compose_html_html_core.$_$.c1;
  var StyleScope = kotlin_org_jetbrains_compose_html_html_core.$_$.e1;
  var copyToArray = kotlin_kotlin.$_$.z2;
  var lastOrNull = kotlin_kotlin.$_$.p3;
  var get_lastIndex = kotlin_kotlin.$_$.n3;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.r8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var listOf = kotlin_kotlin.$_$.s3;
  var emptyList = kotlin_kotlin.$_$.b3;
  var addAll = kotlin_kotlin.$_$.q2;
  var gridTemplateColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.g2;
  var gridTemplateRows = kotlin_org_jetbrains_compose_html_html_core.$_$.h2;
  var Companion_instance = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var display = kotlin_org_jetbrains_compose_html_html_core.$_$.s1;
  var gridAutoColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.d2;
  var gridAutoRows = kotlin_org_jetbrains_compose_html_html_core.$_$.e2;
  var listOfNotNull = kotlin_kotlin.$_$.r3;
  var isNumber = kotlin_kotlin.$_$.c6;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var ensureNotNull = kotlin_kotlin.$_$.p8;
  var removeSuffix = kotlin_kotlin.$_$.k7;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.u2;
  var charSequenceGet = kotlin_kotlin.$_$.l5;
  var isWhitespace = kotlin_kotlin.$_$.h7;
  var interfaceMeta = kotlin_kotlin.$_$.y5;
  var Enum = kotlin_kotlin.$_$.b8;
  var checkCountOverflow = kotlin_kotlin.$_$.t2;
  var checkIndexOverflow = kotlin_kotlin.$_$.u2;
  var getOrNull = kotlin_kotlin.$_$.h3;
  var toList = kotlin_kotlin.$_$.i4;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i;
  var ElementBuilder = kotlin_org_jetbrains_compose_html_html_core.$_$.l3;
  var TagElement$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.y3;
  var to = kotlin_kotlin.$_$.z8;
  var lazy = kotlin_kotlin.$_$.q8;
  var charArrayOf = kotlin_kotlin.$_$.k5;
  var split = kotlin_kotlin.$_$.m7;
  var removeSurrounding = kotlin_kotlin.$_$.l7;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var KProperty1 = kotlin_kotlin.$_$.t6;
  var getPropertyCallableRef = kotlin_kotlin.$_$.u5;
  var toString_0 = kotlin_kotlin.$_$.o1;
  var isBlank = kotlin_kotlin.$_$.e7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.z;
  var split_0 = kotlin_kotlin.$_$.n7;
  var isUpperCase = kotlin_kotlin.$_$.g7;
  var isLowerCase = kotlin_kotlin.$_$.f7;
  var get_lastIndex_0 = kotlin_kotlin.$_$.i7;
  var capitalize = kotlin_kotlin.$_$.w6;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.v1;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.d;
  var toDuration = kotlin_kotlin.$_$.z7;
  var _Duration___get_inWholeMilliseconds__impl__msfiry = kotlin_kotlin.$_$.l1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ComparableAttrsScope, 'ComparableAttrsScope', classMeta, VOID, [AttrsScope], ComparableAttrsScope_init_$Create$);
  setMetadataFor(DummyAttrsScope, 'DummyAttrsScope', classMeta, VOID, [AttrsScope], DummyAttrsScope);
  setMetadataFor(JustifyItems, 'JustifyItems', classMeta);
  setMetadataFor(JustifyItemsPosition, 'JustifyItemsPosition', classMeta, JustifyItems);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(JustifySelf, 'JustifySelf', classMeta);
  setMetadataFor(JustifySelfPosition, 'JustifySelfPosition', classMeta, JustifySelf);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(CSSAnimation, 'CSSAnimation', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(BoxSizing, 'BoxSizing', classMeta);
  setMetadataFor(ComparableStyleScope, 'ComparableStyleScope', classMeta, VOID, [StyleScope], ComparableStyleScope);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Cursor, 'Cursor', classMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(FontWeight, 'FontWeight', classMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(FontSize, 'FontSize', classMeta);
  setMetadataFor(GridTrackBuilderInRepeat, 'GridTrackBuilderInRepeat', classMeta);
  setMetadataFor(GridTrackBuilder, 'GridTrackBuilder', classMeta, GridTrackBuilderInRepeat, VOID, GridTrackBuilder);
  setMetadataFor(GridEntry, 'GridEntry', classMeta);
  setMetadataFor(TrackSize, 'TrackSize', classMeta, GridEntry);
  setMetadataFor(FitContent, 'FitContent', classMeta, TrackSize);
  setMetadataFor(MinMax, 'MinMax', classMeta, TrackSize);
  setMetadataFor(Flex, 'Flex', classMeta, TrackSize);
  setMetadataFor(Inflexible, 'Inflexible', classMeta, TrackSize);
  setMetadataFor(Keyword, 'Keyword', classMeta, Inflexible);
  setMetadataFor(Fixed, 'Fixed', classMeta, Inflexible);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(Repeat, 'Repeat', classMeta, GridEntry);
  setMetadataFor(Track, 'Track', classMeta, Repeat);
  setMetadataFor(Auto, 'Auto', classMeta, Repeat);
  setMetadataFor(LineNames, 'LineNames', classMeta, GridEntry);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(GridBuilderInAuto, 'GridBuilderInAuto', classMeta);
  setMetadataFor(GridBuilder, 'GridBuilder', classMeta, GridBuilderInAuto, VOID, GridBuilder);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(VerticalAlign, 'VerticalAlign', classMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(ListStyleType, 'ListStyleType', classMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(ObjectFit, 'ObjectFit', classMeta);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(MixBlendMode, 'MixBlendMode', classMeta);
  setMetadataFor(CSSOutline, 'CSSOutline', classMeta);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(Overflow, 'Overflow', classMeta);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(OverflowWrap, 'OverflowWrap', classMeta);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(PointerEvents, 'PointerEvents', classMeta);
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor(ScrollBehavior, 'ScrollBehavior', classMeta);
  setMetadataFor(StyleVariable, 'StyleVariable', classMeta);
  setMetadataFor(PropertyValue, 'PropertyValue', classMeta, StyleVariable);
  setMetadataFor(NumberValue, 'NumberValue', classMeta, StyleVariable);
  setMetadataFor(StyleVariablePropertyProvider, 'StyleVariablePropertyProvider', classMeta);
  setMetadataFor(StyleVariableNumberProvider, 'StyleVariableNumberProvider', classMeta);
  setMetadataFor(Companion_15, 'Companion', objectMeta);
  setMetadataFor(UserSelect, 'UserSelect', classMeta);
  setMetadataFor(Companion_16, 'Companion', objectMeta);
  setMetadataFor(WhiteSpace, 'WhiteSpace', classMeta);
  setMetadataFor(Companion_17, 'Companion', objectMeta);
  setMetadataFor(TextAlign, 'TextAlign', classMeta);
  setMetadataFor(Companion_18, 'Companion', objectMeta);
  setMetadataFor(TextDecorationLine, 'TextDecorationLine', classMeta);
  setMetadataFor(Companion_19, 'Companion', objectMeta);
  setMetadataFor(CSSTransition, 'CSSTransition', classMeta);
  setMetadataFor(Companion_20, 'Companion', objectMeta);
  setMetadataFor(TransitionProperty, 'TransitionProperty', classMeta);
  setMetadataFor(Companion_21, 'Companion', objectMeta);
  setMetadataFor(Visibility, 'Visibility', classMeta);
  setMetadataFor(CSSImage, 'CSSImage', classMeta);
  setMetadataFor(Gradient, 'Gradient', classMeta, CSSImage);
  setMetadataFor(Companion_22, 'Companion', objectMeta);
  function unaryMinus(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'calc(-1 * ' + _this__u8e3s4 + ')';
  }
  setMetadataFor(CalcScope, 'CalcScope', interfaceMeta);
  setMetadataFor(CalcScopeInstance, 'CalcScopeInstance', objectMeta, VOID, [CalcScope]);
  setMetadataFor(CSSFilter, 'CSSFilter', classMeta);
  setMetadataFor(Direction, 'Direction', classMeta, Enum);
  setMetadataFor(LinearGradient, 'LinearGradient', classMeta);
  setMetadataFor(ByDirection, 'ByDirection', classMeta, LinearGradient);
  setMetadataFor(Entry, 'Entry', classMeta);
  setMetadataFor(Color, 'Color', classMeta, Entry);
  setMetadataFor(Simple, 'Simple', classMeta, Color);
  setMetadataFor(Hint, 'Hint', classMeta, Entry);
  setMetadataFor(ColorStopsBuilder, 'ColorStopsBuilder', classMeta, VOID, VOID, ColorStopsBuilder);
  setMetadataFor(CSSClamp, 'CSSClamp', classMeta);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(RefCallback, 'RefCallback', classMeta);
  setMetadataFor(Simple_0, 'Simple', classMeta, RefCallback);
  setMetadataFor(KeysToEffect, 'KeysToEffect', classMeta);
  setMetadataFor(Builder, 'Builder', classMeta, VOID, VOID, Builder);
  setMetadataFor(ElementRefScope, 'ElementRefScope', classMeta);
  setMetadataFor(Companion_23, 'Companion', objectMeta);
  setMetadataFor(GenericNamespacedElementBuilder, 'GenericNamespacedElementBuilder', classMeta, VOID, [ElementBuilder]);
  setMetadataFor(Companion_24, 'Companion', objectMeta);
  setMetadataFor(GenericElementBuilder, 'GenericElementBuilder', classMeta, VOID, [ElementBuilder]);
  setMetadataFor(Companion_25, 'Companion', objectMeta);
  setMetadataFor(SVGElementAttrsScope, 'SVGElementAttrsScope', classMeta, VOID, [AttrsScope]);
  function stroke(value) {
    return this.n1v('stroke', value.toString());
  }
  function strokeLineCap(value) {
    return this.n1v('stroke-linecap', value.toString());
  }
  function strokeLineJoin(value) {
    return this.n1v('stroke-linejoin', value.toString());
  }
  function strokeWidth(value) {
    return this.n1v('stroke-width', toString(value));
  }
  function fill(value) {
    return this.n1v('fill', value.toString());
  }
  setMetadataFor(PresentationAttrs, 'PresentationAttrs', interfaceMeta, VOID, [AttrsScope]);
  setMetadataFor(SVGGraphicalElementAttrsScope, 'SVGGraphicalElementAttrsScope', classMeta, SVGElementAttrsScope, [SVGElementAttrsScope, PresentationAttrs]);
  setMetadataFor(SVGContainerElementAttrsScope, 'SVGContainerElementAttrsScope', classMeta, SVGGraphicalElementAttrsScope);
  function x(value) {
    this.n1v('x', toString(value));
  }
  function y(value) {
    this.n1v('y', toString(value));
  }
  setMetadataFor(CoordinateAttrs, 'CoordinateAttrs', interfaceMeta, VOID, [AttrsScope]);
  function height(value) {
    this.n1v('height', toString(value));
  }
  function width_0(value) {
    this.n1v('width', toString(value));
  }
  function width_1(value) {
    this.n1v('width', toString(value));
  }
  setMetadataFor(LengthAttrs, 'LengthAttrs', interfaceMeta, VOID, [AttrsScope]);
  function viewBox(x, y, width, height) {
    this.n1v('viewBox', toString(x) + ' ' + toString(y) + ' ' + toString(width) + ' ' + toString(height));
  }
  setMetadataFor(ViewBoxAttrs, 'ViewBoxAttrs', interfaceMeta, VOID, [AttrsScope]);
  setMetadataFor(SVGSvgAttrsScope, 'SVGSvgAttrsScope', classMeta, SVGContainerElementAttrsScope, [SVGContainerElementAttrsScope, CoordinateAttrs, LengthAttrs, ViewBoxAttrs]);
  setMetadataFor(Companion_26, 'Companion', objectMeta);
  setMetadataFor(ViewBox, 'ViewBox', classMeta);
  setMetadataFor(SVGStrokeType, 'SVGStrokeType', classMeta, Enum);
  setMetadataFor(SVGStrokeLineCap, 'SVGStrokeLineCap', classMeta, Enum);
  setMetadataFor(SVGStrokeLineJoin, 'SVGStrokeLineJoin', classMeta, Enum);
  setMetadataFor(SVGFillType, 'SVGFillType', classMeta, Enum);
  setMetadataFor(Companion_27, 'Companion', objectMeta);
  setMetadataFor(SVGPathAttrsScope, 'SVGPathAttrsScope', classMeta, SVGGraphicalElementAttrsScope);
  setMetadataFor(SVGPathDataScope, 'SVGPathDataScope', classMeta);
  setMetadataFor(Companion_28, 'Companion', objectMeta);
  function points(pairs) {
    var pointString = joinToString_0(pairs, ' ', VOID, VOID, VOID, VOID, PointsAttrs$points$lambda);
    this.n1v('points', pointString);
  }
  setMetadataFor(PointsAttrs, 'PointsAttrs', interfaceMeta, VOID, [AttrsScope]);
  setMetadataFor(SVGPolylineAttrsScope, 'SVGPolylineAttrsScope', classMeta, SVGGraphicalElementAttrsScope, [SVGGraphicalElementAttrsScope, PointsAttrs]);
  setMetadataFor(Companion_29, 'Companion', objectMeta);
  function cx(value) {
    this.n1v('cx', toString(value));
  }
  function cy(value) {
    this.n1v('cy', toString(value));
  }
  setMetadataFor(CenterCoordinateAttrs, 'CenterCoordinateAttrs', interfaceMeta, VOID, [AttrsScope]);
  setMetadataFor(SVGCircleAttrsScope, 'SVGCircleAttrsScope', classMeta, SVGGraphicalElementAttrsScope, [SVGGraphicalElementAttrsScope, CenterCoordinateAttrs]);
  setMetadataFor(Companion_30, 'Companion', objectMeta);
  setMetadataFor(SVGLineAttrsScope, 'SVGLineAttrsScope', classMeta, SVGGraphicalElementAttrsScope);
  setMetadataFor(Companion_31, 'Companion', objectMeta);
  setMetadataFor(SVGRectAttrsScope, 'SVGRectAttrsScope', classMeta, SVGGraphicalElementAttrsScope, [SVGGraphicalElementAttrsScope, CoordinateAttrs, LengthAttrs]);
  setMetadataFor(Companion_32, 'Companion', objectMeta);
  setMetadataFor(SVGGroupAttrsScope, 'SVGGroupAttrsScope', classMeta, SVGContainerElementAttrsScope);
  setMetadataFor(CancellableActionHandle, 'CancellableActionHandle', classMeta);
  //endregion
  function ComparableAttrsScope_init_$Init$($this) {
    ComparableAttrsScope.call($this, new DummyAttrsScope());
    return $this;
  }
  function ComparableAttrsScope_init_$Create$() {
    return ComparableAttrsScope_init_$Init$(objectCreate(protoOf(ComparableAttrsScope)));
  }
  function ComparableAttrsScope(wrapped) {
    this.g23_1 = wrapped;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.h23_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.i23_1 = LinkedHashSet_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_1.j23_1 = LinkedHashSet_init_$Create$();
    this.k23_1 = null;
    this.l23_1 = 8;
  }
  protoOf(ComparableAttrsScope).n1v = function (attr, value) {
    // Inline function 'kotlin.collections.set' call
    this.h23_1.j2(attr, value);
    this.g23_1.n1v(attr, value);
    return this;
  };
  protoOf(ComparableAttrsScope).p1v = function (classes) {
    this.i23_1.a1(classes);
  };
  protoOf(ComparableAttrsScope).t1v = function (listener) {
    this.j23_1.u(listener);
    this.g23_1.t1v(listener);
  };
  protoOf(ComparableAttrsScope).o1v = function (builder) {
    var tmp0_elvis_lhs = this.k23_1;
    var style = tmp0_elvis_lhs == null ? new ComparableStyleScope() : tmp0_elvis_lhs;
    builder(style);
    this.k23_1 = style;
    this.g23_1.o1v(builder);
  };
  protoOf(ComparableAttrsScope).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof ComparableAttrsScope) {
      tmp_2 = equals(other.h23_1, this.h23_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = equals(other.i23_1, this.i23_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(other.j23_1, this.j23_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(other.k23_1, this.k23_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableAttrsScope).hashCode = function () {
    var result = hashCode(this.h23_1);
    result = imul(31, result) + hashCode(this.i23_1) | 0;
    result = imul(31, result) + hashCode(this.j23_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.k23_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  function DummyAttrsScope() {
  }
  protoOf(DummyAttrsScope).n1v = function (attr, value) {
    return this;
  };
  protoOf(DummyAttrsScope).p1v = function (classes) {
    return Unit_instance;
  };
  protoOf(DummyAttrsScope).t1v = function (listener) {
    return Unit_instance;
  };
  protoOf(DummyAttrsScope).o1v = function (builder) {
    return Unit_instance;
  };
  function ariaHidden(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    _this__u8e3s4.n1v('aria-hidden', value.toString());
  }
  function ariaDisabled(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    _this__u8e3s4.n1v('aria-disabled', value.toString());
  }
  function justifyItems(_this__u8e3s4, justifyItems) {
    _this__u8e3s4.j1y('justify-items', justifyItems);
  }
  function JustifyItemsPosition(value) {
    JustifyItems.call(this, value);
    this.o23_1 = 0;
  }
  function Companion() {
  }
  protoOf(Companion).p23 = function () {
    return new JustifyItemsPosition('center');
  };
  protoOf(Companion).q23 = function () {
    return new JustifyItemsPosition('start');
  };
  protoOf(Companion).r23 = function () {
    return new JustifyItemsPosition('end');
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    return Companion_instance_0;
  }
  function JustifyItems(value) {
    this.s23_1 = value;
    this.t23_1 = 0;
  }
  protoOf(JustifyItems).toString = function () {
    return this.s23_1;
  };
  function justifySelf(_this__u8e3s4, justifySelf) {
    _this__u8e3s4.j1y('justify-self', justifySelf);
  }
  function JustifySelfPosition(value) {
    JustifySelf.call(this, value);
    this.w23_1 = 0;
  }
  function Companion_0() {
  }
  protoOf(Companion_0).p23 = function () {
    return new JustifySelfPosition('center');
  };
  protoOf(Companion_0).q23 = function () {
    return new JustifySelfPosition('start');
  };
  protoOf(Companion_0).r23 = function () {
    return new JustifySelfPosition('end');
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    return Companion_instance_1;
  }
  function JustifySelf(value) {
    this.x23_1 = value;
    this.y23_1 = 0;
  }
  protoOf(JustifySelf).toString = function () {
    return this.x23_1;
  };
  function CSSAnimation(name, duration, timingFunction, delay, iterationCount, direction, fillMode, playState) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    iterationCount = iterationCount === VOID ? null : iterationCount;
    direction = direction === VOID ? null : direction;
    fillMode = fillMode === VOID ? null : fillMode;
    playState = playState === VOID ? null : playState;
    this.z23_1 = name;
    this.a24_1 = duration;
    this.b24_1 = timingFunction;
    this.c24_1 = delay;
    this.d24_1 = iterationCount;
    this.e24_1 = direction;
    this.f24_1 = fillMode;
    this.g24_1 = playState;
    this.h24_1 = 0;
  }
  protoOf(CSSAnimation).toString = function () {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>' call
    var tmp0_safe_receiver = this.a24_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>.<anonymous>' call
      this_0.u(toString(tmp0_safe_receiver));
    }
    var tmp1_safe_receiver = this.b24_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>.<anonymous>' call
      this_0.u(toString(tmp1_safe_receiver));
    }
    if (!(this.c24_1 == null)) {
      if (this.a24_1 == null) {
        this_0.u('0s');
      }
      this_0.u(toString(this.c24_1));
    }
    var tmp2_safe_receiver = this.d24_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>.<anonymous>' call
      var it = tmp2_safe_receiver.i24_1;
      this_0.u(AnimationIterationCount__toString_impl_5t3trp(it));
    }
    var tmp3_safe_receiver = this.e24_1;
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>.<anonymous>' call
      this_0.u(toString(tmp3_safe_receiver));
    }
    var tmp4_safe_receiver = this.f24_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>.<anonymous>' call
      this_0.u(toString(tmp4_safe_receiver));
    }
    var tmp5_safe_receiver = this.g24_1;
    if (tmp5_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>.<anonymous>' call
      this_0.u(toString(tmp5_safe_receiver));
    }
    this_0.u(this.z23_1);
    var tmp$ret$14 = this_0.a3();
    return joinToString(tmp$ret$14, ' ');
  };
  protoOf(CSSAnimation).hashCode = function () {
    var result = getStringHashCode(this.z23_1);
    result = imul(result, 31) + (this.a24_1 == null ? 0 : hashCode(this.a24_1)) | 0;
    result = imul(result, 31) + (this.b24_1 == null ? 0 : hashCode(this.b24_1)) | 0;
    result = imul(result, 31) + (this.c24_1 == null ? 0 : hashCode(this.c24_1)) | 0;
    result = imul(result, 31) + (this.d24_1 == null ? 0 : AnimationIterationCount__hashCode_impl_rk9qkk(this.d24_1.i24_1)) | 0;
    result = imul(result, 31) + (this.e24_1 == null ? 0 : hashCode(this.e24_1)) | 0;
    result = imul(result, 31) + (this.f24_1 == null ? 0 : hashCode(this.f24_1)) | 0;
    result = imul(result, 31) + (this.g24_1 == null ? 0 : hashCode(this.g24_1)) | 0;
    return result;
  };
  protoOf(CSSAnimation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSAnimation))
      return false;
    var tmp0_other_with_cast = other instanceof CSSAnimation ? other : THROW_CCE();
    if (!(this.z23_1 === tmp0_other_with_cast.z23_1))
      return false;
    if (!equals(this.a24_1, tmp0_other_with_cast.a24_1))
      return false;
    if (!equals(this.b24_1, tmp0_other_with_cast.b24_1))
      return false;
    if (!equals(this.c24_1, tmp0_other_with_cast.c24_1))
      return false;
    if (!equals(this.d24_1, tmp0_other_with_cast.d24_1))
      return false;
    if (!equals(this.e24_1, tmp0_other_with_cast.e24_1))
      return false;
    if (!equals(this.f24_1, tmp0_other_with_cast.f24_1))
      return false;
    if (!equals(this.g24_1, tmp0_other_with_cast.g24_1))
      return false;
    return true;
  };
  function _get_count__iw3m8u($this) {
    return $this;
  }
  function AnimationIterationCount__toString_impl_5t3trp($this) {
    var tmp0_safe_receiver = _get_count__iw3m8u($this);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toString(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 'infinite' : tmp1_elvis_lhs;
  }
  function AnimationIterationCount__hashCode_impl_rk9qkk($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function animation(_this__u8e3s4, animations) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(animations.length === 0)) {
      _this__u8e3s4.e1y('animation', joinToString_0(animations, ', '));
    }
  }
  function background(_this__u8e3s4, color, backgrounds) {
    var backgrounds_0 = reversed(backgrounds);
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.background.<anonymous>' call
    this_0.t5(joinToString(backgrounds_0, ', '));
    if (!(color == null)) {
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(this_0) > 0) {
        this_0.u5(_Char___init__impl__6a9atx(32));
      }
      this_0.s5(color);
    }
    var tmp$ret$2 = this_0.toString();
    _this__u8e3s4.e1y('background', tmp$ret$2);
    var defaultBlendMode = Companion_instance_11.j24();
    // Inline function 'kotlin.takeIf' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(backgrounds_0, 10));
    var tmp0_iterator = backgrounds_0.l();
    while (tmp0_iterator.x()) {
      var item = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.compose.css.background.<anonymous>' call
      var tmp0_elvis_lhs = item.o24_1;
      var tmp$ret$3 = tmp0_elvis_lhs == null ? defaultBlendMode : tmp0_elvis_lhs;
      destination.u(tmp$ret$3);
    }
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'com.varabyte.kobweb.compose.css.background.<anonymous>' call
    var tmp$ret$6;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_0;
      if (isInterface(destination, Collection)) {
        tmp_0 = destination.q();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$6 = false;
        break $l$block_0;
      }
      var tmp0_iterator_0 = destination.l();
      while (tmp0_iterator_0.x()) {
        var element = tmp0_iterator_0.z();
        // Inline function 'com.varabyte.kobweb.compose.css.background.<anonymous>.<anonymous>' call
        if (!(element.toString() === defaultBlendMode.toString())) {
          tmp$ret$6 = true;
          break $l$block_0;
        }
      }
      tmp$ret$6 = false;
    }
    if (tmp$ret$6) {
      tmp = destination;
    } else {
      tmp = null;
    }
    var blendModes = tmp;
    if (!(blendModes == null)) {
      _this__u8e3s4.e1y('background-blend-mode', joinToString(blendModes));
    }
  }
  function backgroundImage_0(_this__u8e3s4, gradient) {
    return backgroundImage_1(_this__u8e3s4, Companion_instance_23.t24(gradient));
  }
  function backgroundImage_1(_this__u8e3s4, backgroundImage_0) {
    backgroundImage(_this__u8e3s4, backgroundImage_0.toString());
  }
  function borderBottom(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    borderBottom_0(_this__u8e3s4, borderBottom$lambda(width, style, color));
  }
  function borderColor(_this__u8e3s4, color) {
    _this__u8e3s4.j1y('border-color', color);
  }
  function borderStyle(_this__u8e3s4, lineStyle) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.e1y('border-style', lineStyle);
  }
  function borderWidth(_this__u8e3s4, width) {
    _this__u8e3s4.j1y('border-width', width);
  }
  function borderTop(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    borderTop_0(_this__u8e3s4, borderTop$lambda(width, style, color));
  }
  function borderLeft(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    borderLeft_0(_this__u8e3s4, borderLeft$lambda(width, style, color));
  }
  function borderBottom_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(this_0);
    _this__u8e3s4.j1y('border-bottom', this_0);
  }
  function borderTop_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(this_0);
    _this__u8e3s4.j1y('border-top', this_0);
  }
  function borderLeft_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(this_0);
    _this__u8e3s4.j1y('border-left', this_0);
  }
  function borderBottom$lambda($width, $style, $color) {
    return function ($this$borderBottom) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        width($this$borderBottom, tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        style($this$borderBottom, tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        color($this$borderBottom, tmp2_safe_receiver);
      }
      return Unit_instance;
    };
  }
  function borderTop$lambda($width, $style, $color) {
    return function ($this$borderTop) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        width($this$borderTop, tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        style($this$borderTop, tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        color($this$borderTop, tmp2_safe_receiver);
      }
      return Unit_instance;
    };
  }
  function borderLeft$lambda($width, $style, $color) {
    return function ($this$borderLeft) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        width($this$borderLeft, tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        style($this$borderLeft, tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        color($this$borderLeft, tmp2_safe_receiver);
      }
      return Unit_instance;
    };
  }
  function Companion_1() {
  }
  protoOf(Companion_1).u24 = function () {
    return new BoxSizing('content-box');
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    return Companion_instance_2;
  }
  function BoxSizing(value) {
    this.v24_1 = value;
    this.w24_1 = 0;
  }
  protoOf(BoxSizing).toString = function () {
    return this.v24_1;
  };
  function boxShadow(_this__u8e3s4, offsetX, offsetY, blurRadius, spreadRadius, color, inset) {
    offsetX = offsetX === VOID ? get_px(0) : offsetX;
    offsetY = offsetY === VOID ? get_px(0) : offsetY;
    blurRadius = blurRadius === VOID ? null : blurRadius;
    spreadRadius = spreadRadius === VOID ? null : spreadRadius;
    color = color === VOID ? null : color;
    inset = inset === VOID ? false : inset;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.boxShadow.<anonymous>' call
    if (inset) {
      this_0.t5('inset');
      this_0.u5(_Char___init__impl__6a9atx(32));
    }
    this_0.s5(offsetX);
    this_0.u5(_Char___init__impl__6a9atx(32));
    this_0.s5(offsetY);
    if (!(blurRadius == null)) {
      this_0.u5(_Char___init__impl__6a9atx(32));
      this_0.s5(blurRadius);
    }
    if (!(spreadRadius == null)) {
      if (blurRadius == null) {
        this_0.u5(_Char___init__impl__6a9atx(32));
        this_0.u5(_Char___init__impl__6a9atx(48));
      }
      this_0.u5(_Char___init__impl__6a9atx(32));
      this_0.s5(spreadRadius);
    }
    if (!(color == null)) {
      this_0.u5(_Char___init__impl__6a9atx(32));
      this_0.s5(color);
    }
    var tmp$ret$1 = this_0.toString();
    boxShadow_0(_this__u8e3s4, tmp$ret$1);
  }
  function boxSizing_0(_this__u8e3s4, boxSizing_0) {
    boxSizing(_this__u8e3s4, boxSizing_0.toString());
  }
  function boxShadow_0(_this__u8e3s4, value) {
    _this__u8e3s4.e1y('box-shadow', value);
  }
  function ComparableStyleScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.x24_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.y24_1 = LinkedHashMap_init_$Create$();
    this.z24_1 = 0;
  }
  protoOf(ComparableStyleScope).j1y = function (propertyName, value) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.x24_1;
    var value_0 = toString(value);
    this_0.j2(propertyName, value_0);
  };
  protoOf(ComparableStyleScope).l1y = function (variableName, value) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.y24_1;
    var value_0 = toString(value);
    this_0.j2(variableName, value_0);
  };
  protoOf(ComparableStyleScope).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof ComparableStyleScope) {
      tmp_0 = equals(this.x24_1, other.x24_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.y24_1, other.y24_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableStyleScope).hashCode = function () {
    var result = hashCode(this.x24_1);
    result = imul(31, result) + hashCode(this.y24_1) | 0;
    return result;
  };
  function isNotEmpty(_this__u8e3s4) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!_this__u8e3s4.x24_1.q()) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp = !_this__u8e3s4.y24_1.q();
    }
    return tmp;
  }
  function Companion_2() {
  }
  protoOf(Companion_2).a25 = function () {
    return new Cursor('pointer');
  };
  protoOf(Companion_2).b25 = function () {
    return new Cursor('not-allowed');
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    return Companion_instance_3;
  }
  function Cursor(value) {
    this.c25_1 = value;
    this.d25_1 = 0;
  }
  protoOf(Cursor).toString = function () {
    return this.c25_1;
  };
  function cursor(_this__u8e3s4, cursor) {
    _this__u8e3s4.j1y('cursor', cursor);
  }
  function Companion_3() {
  }
  protoOf(Companion_3).e25 = function () {
    return new FontWeight('300');
  };
  protoOf(Companion_3).f25 = function () {
    return new FontWeight('600');
  };
  protoOf(Companion_3).g25 = function () {
    return new FontWeight('bold');
  };
  protoOf(Companion_3).h25 = function () {
    return new FontWeight('bolder');
  };
  var Companion_instance_4;
  function Companion_getInstance_5() {
    return Companion_instance_4;
  }
  function FontWeight(value) {
    this.i25_1 = value;
    this.j25_1 = 0;
  }
  protoOf(FontWeight).toString = function () {
    return this.i25_1;
  };
  function Companion_4() {
  }
  protoOf(Companion_4).k25 = function () {
    return new FontSize('xx-small');
  };
  protoOf(Companion_4).l25 = function () {
    return new FontSize('x-small');
  };
  protoOf(Companion_4).m25 = function () {
    return new FontSize('small');
  };
  protoOf(Companion_4).n25 = function () {
    return new FontSize('medium');
  };
  protoOf(Companion_4).o25 = function () {
    return new FontSize('large');
  };
  protoOf(Companion_4).p25 = function () {
    return new FontSize('x-large');
  };
  protoOf(Companion_4).q25 = function () {
    return new FontSize('xx-large');
  };
  protoOf(Companion_4).r25 = function () {
    return new FontSize('larger');
  };
  var Companion_instance_5;
  function Companion_getInstance_6() {
    return Companion_instance_5;
  }
  function FontSize(value) {
    this.s25_1 = value;
    this.t25_1 = 0;
  }
  protoOf(FontSize).toString = function () {
    return this.s25_1;
  };
  function fontWeight(_this__u8e3s4, weight) {
    _this__u8e3s4.j1y('font-weight', weight);
  }
  function fontSize(_this__u8e3s4, size) {
    _this__u8e3s4.j1y('font-size', size);
  }
  function GridTrackBuilder() {
    GridTrackBuilderInRepeat.call(this);
    this.w25_1 = 0;
  }
  protoOf(GridTrackBuilder).x25 = function (count, block) {
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    var this_1 = this_0.y25_1;
    var repeatTracks = copyToArray(this_1);
    this.y25_1.u(Companion_instance_7.a26(count, repeatTracks.slice()));
  };
  function GridTrackBuilderInRepeat() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.y25_1 = ArrayList_init_$Create$();
    this.z25_1 = 8;
  }
  protoOf(GridTrackBuilderInRepeat).b26 = function () {
    return Companion_instance_6.g26();
  };
  protoOf(GridTrackBuilderInRepeat).c26 = function (track) {
    this.y25_1.u(track);
  };
  protoOf(GridTrackBuilderInRepeat).d26 = function (value) {
    return this.c26(Companion_instance_6.h26(value));
  };
  protoOf(GridTrackBuilderInRepeat).e26 = function (min, max) {
    return this.c26(Companion_instance_6.i26(min, max));
  };
  protoOf(GridTrackBuilderInRepeat).f26 = function (min, max) {
    return this.e26(Companion_instance_6.j26(min), Companion_instance_6.h26(max));
  };
  function FitContent() {
  }
  function MinMax(min, max) {
    TrackSize.call(this, 'minmax(' + min + ', ' + max + ')');
    this.n26_1 = min;
    this.o26_1 = max;
    this.p26_1 = 0;
  }
  function Flex(value) {
    TrackSize.call(this, toString(value));
    this.t26_1 = 0;
  }
  function Inflexible(value) {
    TrackSize.call(this, value);
    this.x26_1 = 0;
  }
  function Keyword(value) {
    Inflexible.call(this, value);
    this.c27_1 = 0;
  }
  function Fixed(value) {
    Inflexible.call(this, toString(value));
    this.h27_1 = 0;
  }
  function Companion_5() {
  }
  protoOf(Companion_5).g26 = function () {
    return new Keyword('min-content');
  };
  protoOf(Companion_5).j26 = function (value) {
    return new Fixed(value);
  };
  protoOf(Companion_5).h26 = function (value) {
    return new Flex(value);
  };
  protoOf(Companion_5).i26 = function (min, max) {
    return new MinMax(min, max);
  };
  var Companion_instance_6;
  function Companion_getInstance_7() {
    return Companion_instance_6;
  }
  function Track(count, entries) {
    Repeat.call(this, count, entries);
    this.m27_1 = 0;
  }
  function Auto() {
  }
  function TrackSize(value) {
    GridEntry.call(this, value);
    this.p27_1 = 0;
  }
  function Repeat(value, entries) {
    GridEntry.call(this, 'repeat(' + toString(value) + ', ' + toTrackListString(entries) + ')');
    this.s27_1 = entries;
    this.t27_1 = 0;
  }
  function LineNames(names) {
    GridEntry.call(this, joinToString_0(names, ' ', '[', ']'));
    this.w27_1 = names;
    this.x27_1 = 0;
  }
  function Companion_6() {
  }
  protoOf(Companion_6).a26 = function (count, entries) {
    return new Track(count, entries.slice());
  };
  var Companion_instance_7;
  function Companion_getInstance_8() {
    return Companion_instance_7;
  }
  function GridEntry(value) {
    this.y27_1 = value;
    this.z27_1 = 0;
  }
  protoOf(GridEntry).toString = function () {
    return this.y27_1;
  };
  function toTrackListString(_this__u8e3s4) {
    validate(_this__u8e3s4);
    // Inline function 'kotlin.collections.fold' call
    // Inline function 'kotlin.collections.mutableListOf' call
    var accumulator = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var element = _this__u8e3s4[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.compose.css.toTrackListString.<anonymous>' call
      var acc = accumulator;
      var prev = lastOrNull(acc);
      var tmp;
      if (prev instanceof LineNames) {
        tmp = element instanceof LineNames;
      } else {
        tmp = false;
      }
      if (tmp) {
        var tmp_0 = get_lastIndex(acc);
        // Inline function 'kotlin.collections.plus' call
        var this_0 = prev.w27_1;
        var elements = element.w27_1;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$2 = this_0.concat(elements);
        acc.t(tmp_0, new LineNames(tmp$ret$2.slice()));
      } else {
        acc.u(element);
      }
      accumulator = acc;
    }
    var tmp$ret$4 = accumulator;
    return joinToString(tmp$ret$4, ' ');
  }
  function validate(_this__u8e3s4) {
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var element = _this__u8e3s4[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      var tmp;
      if (element instanceof LineNames) {
        tmp = emptyList();
      } else {
        if (element instanceof TrackSize) {
          tmp = listOf(element);
        } else {
          if (element instanceof Repeat) {
            // Inline function 'kotlin.collections.ifEmpty' call
            // Inline function 'kotlin.collections.filterIsInstance' call
            // Inline function 'kotlin.collections.filterIsInstanceTo' call
            var this_0 = element.s27_1;
            var destination_0 = ArrayList_init_$Create$();
            var inductionVariable_0 = 0;
            var last_0 = this_0.length;
            while (inductionVariable_0 < last_0) {
              var element_0 = this_0[inductionVariable_0];
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              if (element_0 instanceof TrackSize) {
                destination_0.u(element_0);
              }
            }
            var tmp_0;
            if (destination_0.q()) {
              // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>.<anonymous>' call
              var message = 'repeat() must contain at least one track size';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              tmp_0 = destination_0;
            }
            tmp = tmp_0;
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      var list = tmp;
      addAll(destination, list);
    }
    var trackSizes = destination;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!trackSizes.q()) {
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      var message_0 = 'You must specify at least one track size';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.collections.count' call
    var count = 0;
    var inductionVariable_1 = 0;
    var last_1 = _this__u8e3s4.length;
    while (inductionVariable_1 < last_1) {
      var element_1 = _this__u8e3s4[inductionVariable_1];
      inductionVariable_1 = inductionVariable_1 + 1 | 0;
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      if (element_1 instanceof Auto) {
        count = count + 1 | 0;
      }
    }
    var autoRepeatCount = count;
    if (autoRepeatCount === 0)
      return Unit_instance;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(autoRepeatCount === 1)) {
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      var message_1 = 'Only one auto-repeat call is allowed per track list';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = trackSizes.l();
    while (tmp0_iterator.x()) {
      var element_2 = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      if (!(element_2 instanceof Fixed)) {
        if (element_2 instanceof Flex) {
          // Inline function 'kotlin.error' call
          var message_2 = 'Cannot use flex values with auto-repeat';
          throw IllegalStateException_init_$Create$(toString(message_2));
        } else {
          if (element_2 instanceof Keyword) {
            // Inline function 'kotlin.error' call
            var message_3 = 'Cannot use keywords with auto-repeat';
            throw IllegalStateException_init_$Create$(toString(message_3));
          } else {
            if (element_2 instanceof FitContent) {
              // Inline function 'kotlin.error' call
              var message_4 = 'Cannot use fit-content with auto-repeat';
              throw IllegalStateException_init_$Create$(toString(message_4));
            } else {
              if (element_2 instanceof MinMax) {
                // Inline function 'kotlin.check' call
                var tmp_1;
                var tmp_2 = element_2.n26_1;
                if (tmp_2 instanceof Fixed) {
                  tmp_1 = true;
                } else {
                  var tmp_3 = element_2.o26_1;
                  tmp_1 = tmp_3 instanceof Fixed;
                }
                // Inline function 'kotlin.contracts.contract' call
                if (!tmp_1) {
                  // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>.<anonymous>' call
                  var message_5 = 'Cannot use minmax with auto-repeat unless at least one of the values is a fixed value (a length or percentage)';
                  throw IllegalStateException_init_$Create$(toString(message_5));
                }
              }
            }
          }
        }
      }
    }
  }
  function gridTemplateColumns_0(_this__u8e3s4, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    gridTemplateColumns(_this__u8e3s4, toTrackListString_0(this_0.y25_1));
  }
  function gridTemplateRows_0(_this__u8e3s4, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    gridTemplateRows(_this__u8e3s4, toTrackListString_0(this_0.y25_1));
  }
  function toTrackListString_0(_this__u8e3s4) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(_this__u8e3s4);
    return toTrackListString(tmp$ret$0);
  }
  function grid(_this__u8e3s4, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new GridBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    this_0.e28(_this__u8e3s4);
  }
  function GridBuilder() {
    GridBuilderInAuto.call(this);
    this.j28_1 = 0;
  }
  function GridBuilderInAuto() {
    this.a28_1 = null;
    this.b28_1 = null;
    this.c28_1 = null;
    this.d28_1 = 8;
  }
  protoOf(GridBuilderInAuto).k28 = function (block) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    tmp.a28_1 = this_0.y25_1;
  };
  protoOf(GridBuilderInAuto).l28 = function (block) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    tmp.b28_1 = this_0.y25_1;
  };
  protoOf(GridBuilderInAuto).e28 = function (scope) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display(scope, 'grid');
    var tmp0_safe_receiver = this.a28_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      gridTemplateColumns(scope, toTrackListString_0(tmp0_safe_receiver));
    }
    var tmp1_safe_receiver = this.b28_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      gridTemplateRows(scope, toTrackListString_0(tmp1_safe_receiver));
    }
    var tmp2_safe_receiver = this.c28_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.GridBuilderInAuto.buildInto.<anonymous>' call
      var tmp0_safe_receiver_0 = tmp2_safe_receiver.a28_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        gridAutoColumns(scope, toTrackListString_0(tmp0_safe_receiver_0));
      }
      var tmp1_safe_receiver_0 = tmp2_safe_receiver.b28_1;
      var tmp;
      if (tmp1_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        gridAutoRows(scope, toTrackListString_0(tmp1_safe_receiver_0));
        tmp = Unit_instance;
      }
    }
  };
  function Companion_7() {
  }
  protoOf(Companion_7).m28 = function () {
    return new VerticalAlign('middle');
  };
  var Companion_instance_8;
  function Companion_getInstance_9() {
    return Companion_instance_8;
  }
  function VerticalAlign(value) {
    this.n28_1 = value;
    this.o28_1 = 0;
  }
  protoOf(VerticalAlign).toString = function () {
    return this.n28_1;
  };
  function verticalAlign(_this__u8e3s4, verticalAlign) {
    _this__u8e3s4.j1y('vertical-align', verticalAlign);
  }
  function paddingInline(_this__u8e3s4, value) {
    _this__u8e3s4.e1y('padding-inline', joinToString_0(value, ' '));
  }
  function zIndex(_this__u8e3s4, value) {
    _this__u8e3s4.f1y('z-index', value);
  }
  function Companion_8() {
  }
  protoOf(Companion_8).p28 = function () {
    return new ListStyleType('none');
  };
  var Companion_instance_9;
  function Companion_getInstance_10() {
    return Companion_instance_9;
  }
  function ListStyleType(value) {
    this.q28_1 = value;
    this.r28_1 = 0;
  }
  protoOf(ListStyleType).toString = function () {
    return this.q28_1;
  };
  function listStyle(_this__u8e3s4, type, position, image) {
    type = type === VOID ? null : type;
    position = position === VOID ? null : position;
    image = image === VOID ? null : image;
    if (type == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.j1y('list-style-type', type);
    }
    if (position == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.j1y('list-style-position', position);
    }
    if (image == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.j1y('list-style-image', image);
    }
  }
  function Companion_9() {
  }
  protoOf(Companion_9).s28 = function () {
    return new ObjectFit('scale-down');
  };
  var Companion_instance_10;
  function Companion_getInstance_11() {
    return Companion_instance_10;
  }
  function ObjectFit(value) {
    this.t28_1 = value;
    this.u28_1 = 0;
  }
  protoOf(ObjectFit).toString = function () {
    return this.t28_1;
  };
  function mixBlendMode(_this__u8e3s4, blendMode) {
    _this__u8e3s4.j1y('mix-blend-mode', blendMode);
  }
  function Companion_10() {
  }
  protoOf(Companion_10).j24 = function () {
    return new MixBlendMode('normal');
  };
  var Companion_instance_11;
  function Companion_getInstance_12() {
    return Companion_instance_11;
  }
  function MixBlendMode(value) {
    this.v28_1 = value;
    this.w28_1 = 0;
  }
  protoOf(MixBlendMode).toString = function () {
    return this.v28_1;
  };
  function objectFit(_this__u8e3s4, objectFit) {
    _this__u8e3s4.j1y('object-fit', objectFit);
  }
  function outline(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    outline_0(_this__u8e3s4, outline$lambda(width, style, color));
  }
  function outline_0(_this__u8e3s4, outlineBuilder) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSOutline();
    // Inline function 'kotlin.contracts.contract' call
    outlineBuilder(this_0);
    _this__u8e3s4.j1y('outline', this_0);
  }
  function CSSOutline() {
    this.x28_1 = null;
    this.y28_1 = null;
    this.z28_1 = null;
    this.a29_1 = 8;
  }
  protoOf(CSSOutline).equals = function (other) {
    var tmp;
    if (other instanceof CSSOutline) {
      tmp = (equals(this.x28_1, other.x28_1) ? equals(this.y28_1, other.y28_1) : false) ? equals(this.z28_1, other.z28_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CSSOutline).toString = function () {
    var values = listOfNotNull([this.z28_1, this.y28_1, this.x28_1]);
    return joinToString(values, ' ');
  };
  function outline$lambda($width, $style, $color) {
    return function ($this$outline) {
      $this$outline.x28_1 = $width;
      $this$outline.y28_1 = $style;
      $this$outline.z28_1 = $color;
      return Unit_instance;
    };
  }
  function Companion_11() {
  }
  protoOf(Companion_11).b29 = function () {
    return new Overflow('hidden');
  };
  protoOf(Companion_11).c29 = function () {
    return new Overflow('auto');
  };
  var Companion_instance_12;
  function Companion_getInstance_13() {
    return Companion_instance_12;
  }
  function Overflow(value) {
    this.d29_1 = value;
    this.e29_1 = 0;
  }
  protoOf(Overflow).toString = function () {
    return this.d29_1;
  };
  function Companion_12() {
  }
  protoOf(Companion_12).f29 = function () {
    return new OverflowWrap('break-word');
  };
  var Companion_instance_13;
  function Companion_getInstance_14() {
    return Companion_instance_13;
  }
  function OverflowWrap(value) {
    this.g29_1 = value;
    this.h29_1 = 0;
  }
  protoOf(OverflowWrap).toString = function () {
    return this.g29_1;
  };
  function overflowX(_this__u8e3s4, overflowX) {
    _this__u8e3s4.j1y('overflow-x', overflowX);
  }
  function overflowY(_this__u8e3s4, overflowY) {
    _this__u8e3s4.j1y('overflow-y', overflowY);
  }
  function overflow(_this__u8e3s4, overflow) {
    _this__u8e3s4.j1y('overflow', overflow);
  }
  function overflowWrap(_this__u8e3s4, overflowWrap) {
    _this__u8e3s4.j1y('overflow-wrap', overflowWrap);
  }
  function Companion_13() {
  }
  protoOf(Companion_13).p28 = function () {
    return new PointerEvents('none');
  };
  var Companion_instance_14;
  function Companion_getInstance_15() {
    return Companion_instance_14;
  }
  function PointerEvents(value) {
    this.i29_1 = value;
    this.j29_1 = 0;
  }
  protoOf(PointerEvents).toString = function () {
    return this.i29_1;
  };
  function pointerEvents(_this__u8e3s4, pointerEvents) {
    _this__u8e3s4.j1y('pointer-events', pointerEvents);
  }
  function Companion_14() {
  }
  protoOf(Companion_14).k29 = function () {
    return new ScrollBehavior('smooth');
  };
  var Companion_instance_15;
  function Companion_getInstance_16() {
    return Companion_instance_15;
  }
  function ScrollBehavior(value) {
    this.l29_1 = value;
    this.m29_1 = 0;
  }
  protoOf(ScrollBehavior).toString = function () {
    return this.l29_1;
  };
  function scrollBehavior(_this__u8e3s4, scrollBehavior) {
    _this__u8e3s4.j1y('scroll-behavior', scrollBehavior);
  }
  function PropertyValue(name, defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    StyleVariable.call(this, name, defaultFallback, prefix);
    this.q29_1 = 0;
  }
  protoOf(PropertyValue).r29 = function (fallback) {
    return this.v29(fallback);
  };
  protoOf(PropertyValue).w29 = function (fallback) {
    return this.r29((fallback == null ? true : !(fallback == null)) ? fallback : THROW_CCE());
  };
  function NumberValue(name, defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    var tmp;
    if (defaultFallback == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.NumberValue.<init>.<anonymous>' call
      // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = defaultFallback;
    }
    StyleVariable.call(this, name, tmp, prefix);
    this.b2a_1 = 0;
  }
  protoOf(NumberValue).c2a = function (fallback) {
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp;
    if (fallback == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.NumberValue.value.<anonymous>' call
      // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = fallback;
    }
    // Inline function 'kotlin.js.asDynamic' call
    return this.v29(tmp);
  };
  protoOf(NumberValue).w29 = function (fallback) {
    return this.c2a((fallback == null ? true : isNumber(fallback)) ? fallback : THROW_CCE());
  };
  function StyleVariable(name, defaultFallback, prefix) {
    this.s29_1 = defaultFallback;
    var tmp = this;
    var tmp_0;
    if (prefix == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.StyleVariable.name.<anonymous>' call
      tmp_0 = prefix + '-' + name;
    }
    var tmp1_elvis_lhs = tmp_0;
    tmp.t29_1 = tmp1_elvis_lhs == null ? name : tmp1_elvis_lhs;
    this.u29_1 = 0;
  }
  protoOf(StyleVariable).x29 = function (fallback, $super) {
    fallback = fallback === VOID ? null : fallback;
    return $super === VOID ? this.w29(fallback) : $super.w29.call(this, fallback);
  };
  protoOf(StyleVariable).v29 = function (fallback) {
    // Inline function 'org.jetbrains.compose.web.css.CSSVariableValue' call
    var tmp1_safe_receiver = fallback == null ? this.s29_1 : fallback;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.StyleVariable.variableValue.<anonymous>' call
      tmp = ', ' + tmp1_safe_receiver;
    }
    var tmp2_elvis_lhs = tmp;
    // Inline function 'org.jetbrains.compose.web.css.CSSVariableValue' call
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'var(--' + this.t29_1 + (tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs) + ')';
  };
  function StyleVariablePropertyProvider(defaultFallback, prefix) {
    this.d2a_1 = defaultFallback;
    this.e2a_1 = prefix;
    this.f2a_1 = 0;
  }
  protoOf(StyleVariablePropertyProvider).g2a = function (thisRef, property) {
    return new PropertyValue(provideVariableName(thisRef, property), this.d2a_1, this.e2a_1);
  };
  function StyleVariable_0(prefix) {
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariablePropertyProvider(null, prefix);
  }
  function StyleVariable_1(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariablePropertyProvider(defaultFallback, prefix);
  }
  function StyleVariable_2(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariablePropertyProvider(defaultFallback, prefix);
  }
  function StyleVariableNumberProvider(defaultFallback, prefix) {
    this.h2a_1 = defaultFallback;
    this.i2a_1 = prefix;
    this.j2a_1 = 0;
  }
  protoOf(StyleVariableNumberProvider).g2a = function (thisRef, property) {
    return new NumberValue(provideVariableName(thisRef, property), this.h2a_1, this.i2a_1);
  };
  function StyleVariable_3(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariableNumberProvider(defaultFallback, prefix);
  }
  function provideVariableName(groupObject, property) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.provideVariableName.<anonymous>' call
    if (!(groupObject == null)) {
      this_0.t5(removeSuffix(removeSuffix(titleCamelCaseToKebabCase(ensureNotNull(getKClassFromExpression(groupObject).x6())), '-vars'), '-variables'));
      this_0.u5(_Char___init__impl__6a9atx(45));
    }
    this_0.t5(removeSuffix(removeSuffix(titleCamelCaseToKebabCase(property.callableName), '-var'), '-variable'));
    return this_0.toString();
  }
  function setVariable(_this__u8e3s4, variable, value) {
    _this__u8e3s4.j1y('--' + variable.t29_1, value);
  }
  function setVariable_0(_this__u8e3s4, variable, value) {
    _this__u8e3s4.f1y('--' + variable.t29_1, value);
  }
  function Companion_15() {
  }
  protoOf(Companion_15).p28 = function () {
    return new UserSelect('none');
  };
  var Companion_instance_16;
  function Companion_getInstance_17() {
    return Companion_instance_16;
  }
  function UserSelect(value) {
    this.k2a_1 = value;
    this.l2a_1 = 0;
  }
  protoOf(UserSelect).toString = function () {
    return this.k2a_1;
  };
  function Companion_16() {
  }
  protoOf(Companion_16).m2a = function () {
    return new WhiteSpace('nowrap');
  };
  protoOf(Companion_16).n2a = function () {
    return new WhiteSpace('pre-wrap');
  };
  var Companion_instance_17;
  function Companion_getInstance_18() {
    return Companion_instance_17;
  }
  function WhiteSpace(value) {
    this.o2a_1 = value;
    this.p2a_1 = 0;
  }
  protoOf(WhiteSpace).toString = function () {
    return this.o2a_1;
  };
  function Companion_17() {
  }
  protoOf(Companion_17).p23 = function () {
    return new TextAlign('center');
  };
  protoOf(Companion_17).q23 = function () {
    return new TextAlign('start');
  };
  var Companion_instance_18;
  function Companion_getInstance_19() {
    return Companion_instance_18;
  }
  function TextAlign(value) {
    this.q2a_1 = value;
    this.r2a_1 = 0;
  }
  protoOf(TextAlign).toString = function () {
    return this.q2a_1;
  };
  function Companion_18() {
  }
  protoOf(Companion_18).s2a = function () {
    return new TextDecorationLine('underline');
  };
  protoOf(Companion_18).p28 = function () {
    return new TextDecorationLine('none');
  };
  var Companion_instance_19;
  function Companion_getInstance_20() {
    return Companion_instance_19;
  }
  function TextDecorationLine(value) {
    this.t2a_1 = value;
    this.u2a_1 = 0;
  }
  protoOf(TextDecorationLine).toString = function () {
    return this.t2a_1;
  };
  function userSelect(_this__u8e3s4, userSelect) {
    _this__u8e3s4.j1y('user-select', userSelect);
  }
  function whiteSpace(_this__u8e3s4, whiteSpace) {
    _this__u8e3s4.j1y('white-space', whiteSpace);
  }
  function textAlign(_this__u8e3s4, textAlign) {
    _this__u8e3s4.j1y('text-align', textAlign);
  }
  function textDecorationLine(_this__u8e3s4, textDecorationLines) {
    _this__u8e3s4.e1y('text-decoration-line', joinToString_0(textDecorationLines, ' '));
  }
  function translateX(_this__u8e3s4, tx) {
    translate(_this__u8e3s4, tx);
  }
  function scale(_this__u8e3s4, s) {
    _this__u8e3s4.j1y('scale', s);
  }
  function translateY(_this__u8e3s4, ty) {
    translate_0(_this__u8e3s4, get_percent(0), ty);
  }
  function scale_0(_this__u8e3s4, s) {
    _this__u8e3s4.f1y('scale', s);
  }
  function translate(_this__u8e3s4, tx) {
    _this__u8e3s4.j1y('translate', tx);
  }
  function translate_0(_this__u8e3s4, tx, ty) {
    _this__u8e3s4.e1y('translate', '' + tx + ' ' + ty);
  }
  function Companion_19() {
  }
  protoOf(Companion_19).v2a = function (properties, duration, timingFunction, delay) {
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(properties, 10));
    var tmp0_iterator = properties.l();
    while (tmp0_iterator.x()) {
      var item = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.compose.css.Companion.group.<anonymous>' call
      var tmp$ret$0 = CSSTransition_init_$Create$(item, duration, timingFunction, delay);
      destination.u(tmp$ret$0);
    }
    return copyToArray(destination);
  };
  protoOf(Companion_19).w2a = function (properties, duration, timingFunction, delay, $super) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    return $super === VOID ? this.v2a(properties, duration, timingFunction, delay) : $super.v2a.call(this, properties, duration, timingFunction, delay);
  };
  var Companion_instance_20;
  function Companion_getInstance_21() {
    return Companion_instance_20;
  }
  function CSSTransition_init_$Init$(property, duration, timingFunction, delay, $this) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    CSSTransition.call($this, Companion_instance_21.x2a(property), duration, timingFunction, delay);
    return $this;
  }
  function CSSTransition_init_$Create$(property, duration, timingFunction, delay) {
    return CSSTransition_init_$Init$(property, duration, timingFunction, delay, objectCreate(protoOf(CSSTransition)));
  }
  function CSSTransition(property, duration, timingFunction, delay) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    this.y2a_1 = property;
    this.z2a_1 = duration;
    this.a2b_1 = timingFunction;
    this.b2b_1 = delay;
    this.c2b_1 = 0;
  }
  protoOf(CSSTransition).toString = function () {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>' call
    this_0.u(this.y2a_1.toString());
    var tmp0_safe_receiver = this.z2a_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>.<anonymous>' call
      this_0.u(toString(tmp0_safe_receiver));
    }
    var tmp1_safe_receiver = this.a2b_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>.<anonymous>' call
      this_0.u(toString(tmp1_safe_receiver));
    }
    if (!(this.b2b_1 == null)) {
      if (this.z2a_1 == null) {
        this_0.u('0s');
      }
      this_0.u(toString(this.b2b_1));
    }
    var tmp$ret$6 = this_0.a3();
    return joinToString(tmp$ret$6, ' ');
  };
  protoOf(CSSTransition).hashCode = function () {
    var result = hashCode(this.y2a_1);
    result = imul(result, 31) + (this.z2a_1 == null ? 0 : hashCode(this.z2a_1)) | 0;
    result = imul(result, 31) + (this.a2b_1 == null ? 0 : hashCode(this.a2b_1)) | 0;
    result = imul(result, 31) + (this.b2b_1 == null ? 0 : hashCode(this.b2b_1)) | 0;
    return result;
  };
  protoOf(CSSTransition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSTransition))
      return false;
    var tmp0_other_with_cast = other instanceof CSSTransition ? other : THROW_CCE();
    if (!equals(this.y2a_1, tmp0_other_with_cast.y2a_1))
      return false;
    if (!equals(this.z2a_1, tmp0_other_with_cast.z2a_1))
      return false;
    if (!equals(this.a2b_1, tmp0_other_with_cast.a2b_1))
      return false;
    if (!equals(this.b2b_1, tmp0_other_with_cast.b2b_1))
      return false;
    return true;
  };
  function Companion_20() {
  }
  protoOf(Companion_20).x2a = function (customValue) {
    // Inline function 'kotlin.check' call
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(customValue) > 0) {
      var tmp$ret$2;
      $l$block: {
        // Inline function 'kotlin.text.none' call
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(customValue)) {
          var element = charSequenceGet(customValue, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'com.varabyte.kobweb.compose.css.Companion.of.<anonymous>' call
          if (isWhitespace(element)) {
            tmp$ret$2 = false;
            break $l$block;
          }
        }
        tmp$ret$2 = true;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'com.varabyte.kobweb.compose.css.Companion.of.<anonymous>' call
      var message = 'Invalid transition property name. A property shouldn\'t contain any spaces, but got "' + customValue + '".';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return new TransitionProperty(customValue);
  };
  protoOf(Companion_20).d2b = function () {
    return new TransitionProperty('all');
  };
  var Companion_instance_21;
  function Companion_getInstance_22() {
    return Companion_instance_21;
  }
  function TransitionProperty(value) {
    this.e2b_1 = value;
    this.f2b_1 = 0;
  }
  protoOf(TransitionProperty).toString = function () {
    return this.e2b_1;
  };
  function transition(_this__u8e3s4, transitions) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(transitions.length === 0)) {
      _this__u8e3s4.e1y('transition', joinToString_0(transitions));
    }
  }
  function Companion_21() {
  }
  protoOf(Companion_21).g2b = function () {
    return new Visibility('visible');
  };
  protoOf(Companion_21).b29 = function () {
    return new Visibility('hidden');
  };
  var Companion_instance_22;
  function Companion_getInstance_23() {
    return Companion_instance_22;
  }
  function Visibility(value) {
    this.h2b_1 = value;
    this.i2b_1 = 0;
  }
  protoOf(Visibility).toString = function () {
    return this.h2b_1;
  };
  function visibility(_this__u8e3s4, visibility) {
    _this__u8e3s4.j1y('visibility', visibility);
  }
  function Gradient(gradient) {
    CSSImage.call(this, gradient.toString());
  }
  function Companion_22() {
  }
  protoOf(Companion_22).t24 = function (gradient) {
    return new Gradient(gradient);
  };
  var Companion_instance_23;
  function Companion_getInstance_24() {
    return Companion_instance_23;
  }
  function CSSImage(value) {
    this.j2b_1 = value;
    this.k2b_1 = 0;
  }
  protoOf(CSSImage).toString = function () {
    return this.j2b_1;
  };
  function calc(action) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    return action(CalcScopeInstance_instance);
  }
  function CalcScope() {
  }
  function CalcScopeInstance() {
    this.m2b_1 = 0;
  }
  var CalcScopeInstance_instance;
  function CalcScopeInstance_getInstance() {
    return CalcScopeInstance_instance;
  }
  function CSSFilter(value) {
    this.n2b_1 = value;
    this.o2b_1 = 0;
  }
  protoOf(CSSFilter).toString = function () {
    return this.n2b_1;
  };
  function blur(radius) {
    return new CSSFilter('blur(' + radius + ')');
  }
  var Direction_ToTop_instance;
  var Direction_ToTopRight_instance;
  var Direction_ToRight_instance;
  var Direction_ToBottomRight_instance;
  var Direction_ToBottom_instance;
  var Direction_ToBottomLeft_instance;
  var Direction_ToLeft_instance;
  var Direction_ToTopLeft_instance;
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_instance;
    Direction_entriesInitialized = true;
    Direction_ToTop_instance = new Direction('ToTop', 0);
    Direction_ToTopRight_instance = new Direction('ToTopRight', 1);
    Direction_ToRight_instance = new Direction('ToRight', 2);
    Direction_ToBottomRight_instance = new Direction('ToBottomRight', 3);
    Direction_ToBottom_instance = new Direction('ToBottom', 4);
    Direction_ToBottomLeft_instance = new Direction('ToBottomLeft', 5);
    Direction_ToLeft_instance = new Direction('ToLeft', 6);
    Direction_ToTopLeft_instance = new Direction('ToTopLeft', 7);
  }
  function Direction(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(Direction).toString = function () {
    var tmp;
    switch (this.s9_1) {
      case 0:
        tmp = 'to top';
        break;
      case 1:
        tmp = 'to top right';
        break;
      case 2:
        tmp = 'to right';
        break;
      case 3:
        tmp = 'to bottom right';
        break;
      case 4:
        tmp = 'to bottom';
        break;
      case 5:
        tmp = 'to bottom left';
        break;
      case 6:
        tmp = 'to left';
        break;
      case 7:
        tmp = 'to top left';
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  function ByDirection(dir, entries) {
    LinearGradient.call(this, '' + dir + ', ' + joinToString_0(entries));
    this.r2b_1 = 0;
  }
  function Direction_ToBottomRight_getInstance() {
    Direction_initEntries();
    return Direction_ToBottomRight_instance;
  }
  function LinearGradient(gradientStr) {
    this.s2b_1 = gradientStr;
    this.t2b_1 = 0;
  }
  protoOf(LinearGradient).toString = function () {
    return 'linear-gradient(' + this.s2b_1 + ')';
  };
  function linearGradient(dir, from, to) {
    return linearGradient_0(dir, linearGradient$lambda(from, to));
  }
  function Simple(value) {
    Color.call(this, '' + value);
    this.y2b_1 = 0;
  }
  function Color(value) {
    Entry.call(this, value);
    this.b2c_1 = value;
    this.c2c_1 = 0;
  }
  function Hint() {
  }
  function Entry(entryStr) {
    this.d2c_1 = entryStr;
    this.e2c_1 = 0;
  }
  protoOf(Entry).toString = function () {
    return this.d2c_1;
  };
  function ColorStopsBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.f2c_1 = ArrayList_init_$Create$();
    this.g2c_1 = 8;
  }
  protoOf(ColorStopsBuilder).h2c = function () {
    // Inline function 'kotlin.check' call
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.count' call
      var this_0 = this.f2c_1;
      var tmp;
      if (isInterface(this_0, Collection)) {
        tmp = this_0.q();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var count = 0;
      var tmp0_iterator = this_0.l();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'com.varabyte.kobweb.compose.css.functions.ColorStopsBuilder.verifiedEntries.<anonymous>' call
        if (element instanceof Color) {
          count = count + 1 | 0;
          checkCountOverflow(count);
        }
      }
      tmp$ret$0 = count;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!(tmp$ret$0 >= 2)) {
      // Inline function 'com.varabyte.kobweb.compose.css.functions.ColorStopsBuilder.verifiedEntries.<anonymous>' call
      var message = 'A gradient should consistent of at least two color entries (an initial color and an end color)';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var tmp0_iterator_0 = this.f2c_1.l();
    while (tmp0_iterator_0.x()) {
      var item = tmp0_iterator_0.z();
      // Inline function 'com.varabyte.kobweb.compose.css.functions.ColorStopsBuilder.verifiedEntries.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var i = checkIndexOverflow(tmp1);
      if (item instanceof Hint) {
        // Inline function 'kotlin.check' call
        var tmp_0;
        var tmp_1 = getOrNull(this.f2c_1, i - 1 | 0);
        if (tmp_1 instanceof Color) {
          var tmp_2 = getOrNull(this.f2c_1, i + 1 | 0);
          tmp_0 = tmp_2 instanceof Color;
        } else {
          tmp_0 = false;
        }
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp_0) {
          // Inline function 'com.varabyte.kobweb.compose.css.functions.ColorStopsBuilder.verifiedEntries.<anonymous>.<anonymous>' call
          var message_0 = 'A gradient color midpoint must only be added between two colors';
          throw IllegalStateException_init_$Create$(toString(message_0));
        }
      }
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = this.f2c_1;
    return copyToArray(this_1);
  };
  protoOf(ColorStopsBuilder).i2c = function (color) {
    return this.f2c_1.u(new Simple(color));
  };
  function linearGradient_0(dir, init) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.apply' call
    var this_0 = new ColorStopsBuilder();
    // Inline function 'kotlin.contracts.contract' call
    init(this_0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.functions.linearGradient.<anonymous>' call
    return new ByDirection(dir, this_0.h2c().slice());
  }
  function linearGradient$lambda($from, $to) {
    return function ($this$linearGradient) {
      $this$linearGradient.i2c($from);
      $this$linearGradient.i2c($to);
      return Unit_instance;
    };
  }
  function CSSClamp(min, value, max) {
    this.j2c_1 = min;
    this.k2c_1 = value;
    this.l2c_1 = max;
    this.m2c_1 = 0;
  }
  protoOf(CSSClamp).toString = function () {
    return 'clamp(' + this.j2c_1 + ', ' + this.k2c_1 + ', ' + this.l2c_1 + ')';
  };
  protoOf(CSSClamp).hashCode = function () {
    var result = hashCode(this.j2c_1);
    result = imul(result, 31) + hashCode(this.k2c_1) | 0;
    result = imul(result, 31) + hashCode(this.l2c_1) | 0;
    return result;
  };
  protoOf(CSSClamp).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSClamp))
      return false;
    var tmp0_other_with_cast = other instanceof CSSClamp ? other : THROW_CCE();
    if (!equals(this.j2c_1, tmp0_other_with_cast.j2c_1))
      return false;
    if (!equals(this.k2c_1, tmp0_other_with_cast.k2c_1))
      return false;
    if (!equals(this.l2c_1, tmp0_other_with_cast.l2c_1))
      return false;
    return true;
  };
  function clamp(min, value, max) {
    return new CSSClamp(min, value, max);
  }
  function _no_name_provided__qut3iv() {
  }
  protoOf(_no_name_provided__qut3iv).nj = function () {
    // Inline function 'com.varabyte.kobweb.compose.dom.Simple.invoke.<anonymous>' call
  };
  function Simple_0(handle) {
    RefCallback.call(this);
    this.o2c_1 = handle;
    this.p2c_1 = 0;
  }
  protoOf(Simple_0).q2c = function (scope, element) {
    this.o2c_1(element);
    // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
    return new _no_name_provided__qut3iv();
  };
  function RefCallback() {
    this.r2c_1 = 0;
  }
  function KeysToEffect(keys, refCallback) {
    this.s2c_1 = keys;
    this.t2c_1 = refCallback;
    this.u2c_1 = 8;
  }
  protoOf(KeysToEffect).toString = function () {
    return 'KeysToEffect(keys=' + this.s2c_1 + ', refCallback=' + this.t2c_1 + ')';
  };
  protoOf(KeysToEffect).hashCode = function () {
    var result = hashCode(this.s2c_1);
    result = imul(result, 31) + hashCode(this.t2c_1) | 0;
    return result;
  };
  protoOf(KeysToEffect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KeysToEffect))
      return false;
    var tmp0_other_with_cast = other instanceof KeysToEffect ? other : THROW_CCE();
    if (!equals(this.s2c_1, tmp0_other_with_cast.s2c_1))
      return false;
    if (!equals(this.t2c_1, tmp0_other_with_cast.t2c_1))
      return false;
    return true;
  };
  function Builder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.v2c_1 = ArrayList_init_$Create$();
    this.w2c_1 = 8;
  }
  protoOf(Builder).x2c = function (keys, handle) {
    this.v2c_1.u(new KeysToEffect(toList(keys), new Simple_0(handle)));
  };
  protoOf(Builder).y2c = function (other) {
    if (!(other == null)) {
      this.v2c_1.a1(other.z2c_1);
    }
  };
  protoOf(Builder).a3 = function () {
    return new ElementRefScope(this.v2c_1);
  };
  function ElementRefScope(keyedCallbacks) {
    this.z2c_1 = keyedCallbacks;
    this.a2d_1 = 8;
  }
  protoOf(ElementRefScope).toString = function () {
    return 'ElementRefScope(keyedCallbacks=' + this.z2c_1 + ')';
  };
  protoOf(ElementRefScope).hashCode = function () {
    return hashCode(this.z2c_1);
  };
  protoOf(ElementRefScope).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementRefScope))
      return false;
    var tmp0_other_with_cast = other instanceof ElementRefScope ? other : THROW_CCE();
    if (!equals(this.z2c_1, tmp0_other_with_cast.z2c_1))
      return false;
    return true;
  };
  function registerRefScope$composable(_this__u8e3s4, scope, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.mu(1682539725);
    if (isTraceInProgress()) {
      traceEventStart(1682539725, $changed, -1, 'com.varabyte.kobweb.compose.dom.registerRefScope$composable (ElementRefScope.kt:91)');
    }
    $composer_0.mu(-76299331);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.dv();
    var tmp;
    if (false ? true : it === Companion_getInstance().gu_1) {
      // Inline function 'com.varabyte.kobweb.compose.dom.registerRefScope$composable.<anonymous>' call
      var value = registerRefScope$composable$lambda;
      $composer_0.ev(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.nu();
    registerRefScope$composable_0(_this__u8e3s4, scope, tmpCache, $composer_0, 14 & $changed | 112 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.nu();
  }
  function refScope(init) {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.dom.refScope.<anonymous>' call
    // Inline function 'kotlin.apply' call
    var this_0 = new Builder();
    // Inline function 'kotlin.contracts.contract' call
    init(this_0);
    return this_0.a3();
  }
  function registerRefScope$composable_0(_this__u8e3s4, scope, transform, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.mu(886891411);
    if (isTraceInProgress()) {
      traceEventStart(886891411, $changed, -1, 'com.varabyte.kobweb.compose.dom.registerRefScope$composable (ElementRefScope.kt:107)');
    }
    if (scope == null) {
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.nu();
      return Unit_instance;
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = scope.z2c_1.l();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.compose.dom.registerRefScope$composable.<anonymous>' call
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_0 = element.s2c_1;
      var tmp = copyToArray(this_0).slice();
      DisposableEffect$composable(tmp, registerRefScope$composable$lambda_0(element, transform, _this__u8e3s4), $composer_0, 0);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.nu();
  }
  function registerRefScope$composable$lambda(it) {
    return it;
  }
  function registerRefScope$composable$lambda_0($keyedCallback, $transform, $this_registerRefScope$composable) {
    return function ($this$DisposableEffect) {
      return $keyedCallback.t2c_1.q2c($this$DisposableEffect, $transform($this_registerRefScope$composable.o20($this$DisposableEffect)));
    };
  }
  function GenericTag$composable(name, attrsStr, content, $composer, $changed, $default) {
    var attrsStr_0 = {_v: attrsStr};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(745789767);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv(name) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.fv(attrsStr_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.iv(content_0._v) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.ju()) {
      if (!(($default & 2) === 0)) {
        attrsStr_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(745789767, $dirty, -1, 'com.varabyte.kobweb.compose.dom.GenericTag$composable (GenericTag.kt:62)');
      }
      var tmp;
      if (attrsStr_0._v == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.compose.dom.GenericTag$composable.<anonymous>' call
        $composer_0.mu(276590469);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        var invalid = $composer_0.fv(attrsStr_0._v);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = this_0.dv();
        var tmp_0;
        if (invalid ? true : it === Companion_getInstance().gu_1) {
          // Inline function 'com.varabyte.kobweb.compose.dom.GenericTag$composable.<anonymous>.<anonymous>' call
          var value = GenericTag$composable$lambda(attrsStr_0);
          this_0.ev(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.nu();
        tmp = tmpCache;
      }
      var attrs = tmp;
      GenericTag$composable_0(name, null, attrs, content_0._v, $composer_0, 48 | 14 & $dirty | 7168 & $dirty << 3, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    var tmp0_safe_receiver = $composer_0.tu();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.s19(GenericTag$composable$lambda_0(name, attrsStr_0, content_0, $changed, $default));
    }
  }
  function GenericTag$composable_0(name, namespace, attrs, content, $composer, $changed, $default) {
    var namespace_0 = {_v: namespace};
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(-1742022847);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv(name) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.fv(namespace_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.iv(attrs_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.iv(content_0._v) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.ju()) {
      if (!(($default & 2) === 0)) {
        namespace_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1742022847, $dirty, -1, 'com.varabyte.kobweb.compose.dom.GenericTag$composable (GenericTag.kt:125)');
      }
      var tmp0_safe_receiver = namespace_0._v;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.compose.dom.GenericTag$composable.<anonymous>' call
        tmp = Companion_getInstance_25().c2d(tmp0_safe_receiver, name);
      }
      var tmp1_elvis_lhs = tmp;
      var tmp_0 = tmp1_elvis_lhs == null ? Companion_getInstance_26().e2d(name) : tmp1_elvis_lhs;
      TagElement$composable(isInterface(tmp_0, ElementBuilder) ? tmp_0 : THROW_CCE(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty >> 3 | 896 & $dirty >> 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    var tmp0_safe_receiver_0 = $composer_0.tu();
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      tmp0_safe_receiver_0.s19(GenericTag$composable$lambda_1(name, namespace_0, attrs_0, content_0, $changed, $default));
    }
  }
  function Companion_23() {
    Companion_instance_24 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.b2d_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(Companion_23).c2d = function (namespace, qualifiedName) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.b2d_1;
    var key = to(namespace, qualifiedName);
    var value = this_0.t2(key);
    var tmp;
    if (value == null) {
      // Inline function 'com.varabyte.kobweb.compose.dom.Companion.create.<anonymous>' call
      var answer = new GenericNamespacedElementBuilder(namespace, qualifiedName);
      this_0.j2(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp;
  };
  var Companion_instance_24;
  function Companion_getInstance_25() {
    if (Companion_instance_24 == null)
      new Companion_23();
    return Companion_instance_24;
  }
  function _get_element__z0t21h($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.h2d_1;
    element$factory();
    return this_0.m2();
  }
  function GenericNamespacedElementBuilder$element$delegate$lambda(this$0) {
    return function () {
      return document.createElementNS(this$0.f2d_1, this$0.g2d_1);
    };
  }
  function GenericNamespacedElementBuilder(namespace, qualifiedName) {
    Companion_getInstance_25();
    this.f2d_1 = namespace;
    this.g2d_1 = qualifiedName;
    var tmp = this;
    tmp.h2d_1 = lazy(GenericNamespacedElementBuilder$element$delegate$lambda(this));
    this.i2d_1 = 8;
  }
  protoOf(GenericNamespacedElementBuilder).e1h = function () {
    var tmp = _get_element__z0t21h(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function Companion_24() {
    Companion_instance_25 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.d2d_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(Companion_24).e2d = function (name) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.d2d_1;
    var value = this_0.t2(name);
    var tmp;
    if (value == null) {
      // Inline function 'com.varabyte.kobweb.compose.dom.Companion.create.<anonymous>' call
      var answer = new GenericElementBuilder(name);
      this_0.j2(name, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp;
  };
  var Companion_instance_25;
  function Companion_getInstance_26() {
    if (Companion_instance_25 == null)
      new Companion_24();
    return Companion_instance_25;
  }
  function _get_element__z0t21h_0($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.k2d_1;
    element$factory_0();
    return this_0.m2();
  }
  function GenericElementBuilder$element$delegate$lambda(this$0) {
    return function () {
      return document.createElement(this$0.j2d_1);
    };
  }
  function GenericElementBuilder(name) {
    Companion_getInstance_26();
    this.j2d_1 = name;
    var tmp = this;
    tmp.k2d_1 = lazy(GenericElementBuilder$element$delegate$lambda(this));
    this.l2d_1 = 8;
  }
  protoOf(GenericElementBuilder).e1h = function () {
    var tmp = _get_element__z0t21h_0(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function GenericTag$composable$_anonymous_$_anonymous_$_anonymous_$parseAttrAssignment_raia22($this_null, attrAssignment) {
    var parts = split(attrAssignment, charArrayOf([_Char___init__impl__6a9atx(61)]), VOID, 2);
    var attr = parts.k(0);
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp;
    if (1 >= 0 ? 1 <= get_lastIndex(parts) : false) {
      tmp = parts.k(1);
    } else {
      // Inline function 'com.varabyte.kobweb.compose.dom.GenericTag$composable.<anonymous>$<anonymous>$<anonymous>$parseAttrAssignment.<anonymous>' call
      tmp = '';
    }
    var value = tmp;
    $this_null.n1v(attr, removeSurrounding(value, '"'));
  }
  function GenericTag$composable$lambda($attrsStr) {
    return function ($this$null) {
      var sb = StringBuilder_init_$Create$();
      var insideQuotes = false;
      var indexedObject = $attrsStr._v;
      var inductionVariable = 0;
      while (inductionVariable < charSequenceLength(indexedObject)) {
        var c = charSequenceGet(indexedObject, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        if (c === _Char___init__impl__6a9atx(34)) {
          insideQuotes = !insideQuotes;
          sb.u5(c);
        } else if (c === _Char___init__impl__6a9atx(32)) {
          if (insideQuotes) {
            sb.u5(c);
          } else {
            GenericTag$composable$_anonymous_$_anonymous_$_anonymous_$parseAttrAssignment_raia22($this$null, sb.toString());
            sb.c8();
          }
        } else {
          sb.u5(c);
        }
      }
      var tmp;
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(sb) > 0) {
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!!insideQuotes) {
          // Inline function 'com.varabyte.kobweb.compose.dom.GenericTag$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var message = 'Got invalid attributes with unclosed string: ' + $attrsStr._v;
          throw IllegalStateException_init_$Create$(toString(message));
        }
        GenericTag$composable$_anonymous_$_anonymous_$_anonymous_$parseAttrAssignment_raia22($this$null, sb.toString());
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function GenericTag$composable$lambda_0($name, $attrsStr, $content, $$changed, $$default) {
    return function ($composer, $force) {
      GenericTag$composable($name, $attrsStr._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function GenericTag$composable$lambda_1($name, $namespace, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      GenericTag$composable_0($name, $namespace._v, $attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function element$factory() {
    return getPropertyCallableRef('element', 1, KProperty1, function (receiver) {
      return _get_element__z0t21h(receiver);
    }, null);
  }
  function element$factory_0() {
    return getPropertyCallableRef('element', 1, KProperty1, function (receiver) {
      return _get_element__z0t21h_0(receiver);
    }, null);
  }
  function Svg$composable(attrs, content, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(-27346688);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.iv(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.iv(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-27346688, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Svg$composable (Svg.kt:433)');
      }
      GenericTag$composable_0('svg', 'http://www.w3.org/2000/svg', Companion_instance_26.m2d(attrs_0._v), content, $composer_0, 54 | 7168 & $dirty << 6, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    var tmp0_safe_receiver = $composer_0.tu();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.s19(Svg$composable$lambda(attrs_0, content, $changed, $default));
    }
  }
  function SVGSvgAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      if (!($attrs == null))
        $attrs(new SVGSvgAttrsScope($this$null));
      return Unit_instance;
    };
  }
  function Companion_25() {
  }
  protoOf(Companion_25).m2d = function (attrs) {
    return SVGSvgAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_26;
  function Companion_getInstance_27() {
    return Companion_instance_26;
  }
  function SVGSvgAttrsScope(attrs) {
    SVGContainerElementAttrsScope.call(this, attrs);
    this.r2d_1 = 0;
  }
  function SVGContainerElementAttrsScope(attrs) {
    SVGGraphicalElementAttrsScope.call(this, attrs);
    this.c2e_1 = 0;
  }
  function CoordinateAttrs() {
  }
  function LengthAttrs() {
  }
  function ViewBoxAttrs() {
  }
  function SVGGraphicalElementAttrsScope(attrs) {
    SVGElementAttrsScope.call(this, attrs);
    this.l2e_1 = 0;
  }
  function Companion_26() {
  }
  protoOf(Companion_26).m2e = function (width, height) {
    return new ViewBox(0, 0, width, height);
  };
  protoOf(Companion_26).n2e = function (width, height, $super) {
    height = height === VOID ? width : height;
    return $super === VOID ? this.m2e(width, height) : $super.m2e.call(this, width, height);
  };
  var Companion_instance_27;
  function Companion_getInstance_28() {
    return Companion_instance_27;
  }
  function ViewBox(x, y, width, height) {
    this.o2e_1 = x;
    this.p2e_1 = y;
    this.q2e_1 = width;
    this.r2e_1 = height;
    this.s2e_1 = 0;
  }
  function SVGElementAttrsScope(attrs) {
    this.s2d_1 = attrs;
    this.t2d_1 = 8;
  }
  protoOf(SVGElementAttrsScope).n1v = function (attr, value) {
    return this.s2d_1.n1v(attr, value);
  };
  protoOf(SVGElementAttrsScope).q1v = function (classes) {
    this.s2d_1.q1v(classes);
  };
  protoOf(SVGElementAttrsScope).p1v = function (classes) {
    this.s2d_1.p1v(classes);
  };
  protoOf(SVGElementAttrsScope).r1v = function (value) {
    return this.s2d_1.r1v(value);
  };
  protoOf(SVGElementAttrsScope).v1v = function (listener) {
    this.s2d_1.v1v(listener);
  };
  protoOf(SVGElementAttrsScope).u1v = function (listener) {
    this.s2d_1.u1v(listener);
  };
  protoOf(SVGElementAttrsScope).t1v = function (listener) {
    this.s2d_1.t1v(listener);
  };
  protoOf(SVGElementAttrsScope).o1v = function (builder) {
    this.s2d_1.o1v(builder);
  };
  protoOf(SVGElementAttrsScope).s1v = function (value) {
    return this.s2d_1.s1v(value);
  };
  function PresentationAttrs() {
  }
  function toSvgValue(_this__u8e3s4) {
    // Inline function 'kotlin.text.replaceFirstChar' call
    var this_0 = _this__u8e3s4.r9_1;
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_0) > 0) {
      // Inline function 'com.varabyte.kobweb.compose.dom.svg.toSvgValue.<anonymous>' call
      // Inline function 'kotlin.text.lowercase' call
      var this_1 = charSequenceGet(this_0, 0);
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$4 = toString_0(this_1).toLowerCase();
      var tmp_0 = toString(tmp$ret$4);
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp_0 + this_0.substring(1);
    } else {
      tmp = this_0;
    }
    return tmp;
  }
  var SVGStrokeType_None_instance;
  var SVGStrokeType_CurrentColor_instance;
  var SVGStrokeType_entriesInitialized;
  function SVGStrokeType_initEntries() {
    if (SVGStrokeType_entriesInitialized)
      return Unit_instance;
    SVGStrokeType_entriesInitialized = true;
    SVGStrokeType_None_instance = new SVGStrokeType('None', 0);
    SVGStrokeType_CurrentColor_instance = new SVGStrokeType('CurrentColor', 1);
  }
  function SVGStrokeType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGStrokeType).toString = function () {
    return toSvgValue(this);
  };
  var SVGStrokeLineCap_Butt_instance;
  var SVGStrokeLineCap_Round_instance;
  var SVGStrokeLineCap_Square_instance;
  var SVGStrokeLineCap_entriesInitialized;
  function SVGStrokeLineCap_initEntries() {
    if (SVGStrokeLineCap_entriesInitialized)
      return Unit_instance;
    SVGStrokeLineCap_entriesInitialized = true;
    SVGStrokeLineCap_Butt_instance = new SVGStrokeLineCap('Butt', 0);
    SVGStrokeLineCap_Round_instance = new SVGStrokeLineCap('Round', 1);
    SVGStrokeLineCap_Square_instance = new SVGStrokeLineCap('Square', 2);
  }
  function SVGStrokeLineCap(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGStrokeLineCap).toString = function () {
    return toSvgValue(this);
  };
  var SVGStrokeLineJoin_Miter_instance;
  var SVGStrokeLineJoin_Round_instance;
  var SVGStrokeLineJoin_Bevel_instance;
  var SVGStrokeLineJoin_entriesInitialized;
  function SVGStrokeLineJoin_initEntries() {
    if (SVGStrokeLineJoin_entriesInitialized)
      return Unit_instance;
    SVGStrokeLineJoin_entriesInitialized = true;
    SVGStrokeLineJoin_Miter_instance = new SVGStrokeLineJoin('Miter', 0);
    SVGStrokeLineJoin_Round_instance = new SVGStrokeLineJoin('Round', 1);
    SVGStrokeLineJoin_Bevel_instance = new SVGStrokeLineJoin('Bevel', 2);
  }
  function SVGStrokeLineJoin(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGStrokeLineJoin).toString = function () {
    return toSvgValue(this);
  };
  var SVGFillType_None_instance;
  var SVGFillType_CurrentColor_instance;
  var SVGFillType_entriesInitialized;
  function SVGFillType_initEntries() {
    if (SVGFillType_entriesInitialized)
      return Unit_instance;
    SVGFillType_entriesInitialized = true;
    SVGFillType_None_instance = new SVGFillType('None', 0);
    SVGFillType_CurrentColor_instance = new SVGFillType('CurrentColor', 1);
  }
  function SVGFillType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGFillType).toString = function () {
    return toSvgValue(this);
  };
  function Path$composable(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(-1759929020);
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.iv(attrs) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.ju()) {
      if (isTraceInProgress()) {
        traceEventStart(-1759929020, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Path$composable (Svg.kt:1098)');
      }
      var tmp = Companion_instance_28.t2e(attrs);
      GenericTag$composable_0('path', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    var tmp0_safe_receiver = $composer_0.tu();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.s19(Path$composable$lambda(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGPathAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      $attrs(new SVGPathAttrsScope($this$null));
      return Unit_instance;
    };
  }
  function Companion_27() {
  }
  protoOf(Companion_27).t2e = function (attrs) {
    return SVGPathAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_28;
  function Companion_getInstance_29() {
    return Companion_instance_28;
  }
  function SVGPathAttrsScope(attrs) {
    SVGGraphicalElementAttrsScope.call(this, attrs);
    this.x2e_1 = 0;
  }
  protoOf(SVGPathAttrsScope).y2e = function (pathDataScope) {
    // Inline function 'kotlin.apply' call
    var this_0 = new SVGPathDataScope();
    // Inline function 'kotlin.contracts.contract' call
    pathDataScope(this_0);
    this.n1v('d', joinToString(this_0.z2e_1, ' '));
  };
  function SVGPathDataScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.z2e_1 = ArrayList_init_$Create$();
    this.a2f_1 = 8;
  }
  protoOf(SVGPathDataScope).b2f = function (x, y) {
    this.z2e_1.u('M ' + toString(x) + ' ' + toString(y));
  };
  protoOf(SVGPathDataScope).c2f = function (x, y, isRelative) {
    var command = isRelative ? 'l' : 'L';
    this.z2e_1.u(command + ' ' + toString(x) + ' ' + toString(y));
  };
  protoOf(SVGPathDataScope).d2f = function (x, y, isRelative, $super) {
    isRelative = isRelative === VOID ? false : isRelative;
    var tmp;
    if ($super === VOID) {
      this.c2f(x, y, isRelative);
      tmp = Unit_instance;
    } else {
      tmp = $super.c2f.call(this, x, y, isRelative);
    }
    return tmp;
  };
  protoOf(SVGPathDataScope).e2f = function (x, isRelative) {
    var command = isRelative ? 'v' : 'V';
    this.z2e_1.u(command + ' ' + toString(x));
  };
  protoOf(SVGPathDataScope).f2f = function (x, isRelative, $super) {
    isRelative = isRelative === VOID ? false : isRelative;
    var tmp;
    if ($super === VOID) {
      this.e2f(x, isRelative);
      tmp = Unit_instance;
    } else {
      tmp = $super.e2f.call(this, x, isRelative);
    }
    return tmp;
  };
  protoOf(SVGPathDataScope).g2f = function (x, isRelative) {
    var command = isRelative ? 'h' : 'H';
    this.z2e_1.u(command + ' ' + toString(x));
  };
  protoOf(SVGPathDataScope).h2f = function (x, isRelative, $super) {
    isRelative = isRelative === VOID ? false : isRelative;
    var tmp;
    if ($super === VOID) {
      this.g2f(x, isRelative);
      tmp = Unit_instance;
    } else {
      tmp = $super.g2f.call(this, x, isRelative);
    }
    return tmp;
  };
  protoOf(SVGPathDataScope).i2f = function (rx, ry, rotate, largeArcFlag, sweepFlag, x, y, isRelative) {
    var command = isRelative ? 'a' : 'A';
    this.z2e_1.u(command + ' ' + toString(rx) + ' ' + toString(ry) + ' ' + toString(rotate) + ' ' + toString(largeArcFlag) + ' ' + toString(sweepFlag) + ' ' + toString(x) + ' ' + toString(y));
  };
  protoOf(SVGPathDataScope).j2f = function (rx, ry, rotate, largeArcFlag, sweepFlag, x, y, isRelative, $super) {
    isRelative = isRelative === VOID ? false : isRelative;
    var tmp;
    if ($super === VOID) {
      this.i2f(rx, ry, rotate, largeArcFlag, sweepFlag, x, y, isRelative);
      tmp = Unit_instance;
    } else {
      tmp = $super.i2f.call(this, rx, ry, rotate, largeArcFlag, sweepFlag, x, y, isRelative);
    }
    return tmp;
  };
  protoOf(SVGPathDataScope).k2f = function () {
    this.z2e_1.u('Z');
  };
  function Polyline$composable(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(1369602079);
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.iv(attrs) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.ju()) {
      if (isTraceInProgress()) {
        traceEventStart(1369602079, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Polyline$composable (Svg.kt:1161)');
      }
      var tmp = Companion_instance_29.l2f(attrs);
      GenericTag$composable_0('polyline', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    var tmp0_safe_receiver = $composer_0.tu();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.s19(Polyline$composable$lambda(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGPolylineAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      $attrs(new SVGPolylineAttrsScope($this$null));
      return Unit_instance;
    };
  }
  function Companion_28() {
  }
  protoOf(Companion_28).l2f = function (attrs) {
    return SVGPolylineAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_29;
  function Companion_getInstance_30() {
    return Companion_instance_29;
  }
  function SVGPolylineAttrsScope(attrs) {
    SVGGraphicalElementAttrsScope.call(this, attrs);
    this.p2f_1 = 0;
  }
  function Circle$composable(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(160071151);
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.iv(attrs) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.ju()) {
      if (isTraceInProgress()) {
        traceEventStart(160071151, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Circle$composable (Svg.kt:804)');
      }
      var tmp = Companion_instance_30.r2f(attrs);
      GenericTag$composable_0('circle', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    var tmp0_safe_receiver = $composer_0.tu();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.s19(Circle$composable$lambda(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGCircleAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      $attrs(new SVGCircleAttrsScope($this$null));
      return Unit_instance;
    };
  }
  function Companion_29() {
  }
  protoOf(Companion_29).r2f = function (attrs) {
    return SVGCircleAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_30;
  function Companion_getInstance_31() {
    return Companion_instance_30;
  }
  function SVGCircleAttrsScope(attrs) {
    SVGGraphicalElementAttrsScope.call(this, attrs);
    this.v2f_1 = 0;
  }
  protoOf(SVGCircleAttrsScope).w2f = function (value) {
    this.n1v('r', toString(value));
  };
  function Line$composable(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(1946067155);
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.iv(attrs) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.ju()) {
      if (isTraceInProgress()) {
        traceEventStart(1946067155, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Line$composable (Svg.kt:979)');
      }
      var tmp = Companion_instance_31.z2f(attrs);
      GenericTag$composable_0('line', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    var tmp0_safe_receiver = $composer_0.tu();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.s19(Line$composable$lambda(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGLineAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      $attrs(new SVGLineAttrsScope($this$null));
      return Unit_instance;
    };
  }
  function Companion_30() {
  }
  protoOf(Companion_30).z2f = function (attrs) {
    return SVGLineAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_31;
  function Companion_getInstance_32() {
    return Companion_instance_31;
  }
  function SVGLineAttrsScope(attrs) {
    SVGGraphicalElementAttrsScope.call(this, attrs);
    this.d2g_1 = 0;
  }
  protoOf(SVGLineAttrsScope).e2g = function (value) {
    this.n1v('x1', toString(value));
  };
  protoOf(SVGLineAttrsScope).f2g = function (value) {
    this.n1v('x2', toString(value));
  };
  protoOf(SVGLineAttrsScope).g2g = function (value) {
    this.n1v('y1', toString(value));
  };
  protoOf(SVGLineAttrsScope).h2g = function (value) {
    this.n1v('y2', toString(value));
  };
  function Rect$composable(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(-617347389);
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.iv(attrs) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.ju()) {
      if (isTraceInProgress()) {
        traceEventStart(-617347389, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Rect$composable (Svg.kt:1223)');
      }
      var tmp = Companion_instance_32.i2g(attrs);
      GenericTag$composable_0('rect', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    var tmp0_safe_receiver = $composer_0.tu();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.s19(Rect$composable$lambda(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGRectAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      $attrs(new SVGRectAttrsScope($this$null));
      return Unit_instance;
    };
  }
  function Companion_31() {
  }
  protoOf(Companion_31).i2g = function (attrs) {
    return SVGRectAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_32;
  function Companion_getInstance_33() {
    return Companion_instance_32;
  }
  function SVGRectAttrsScope(attrs) {
    SVGGraphicalElementAttrsScope.call(this, attrs);
    this.m2g_1 = 0;
  }
  protoOf(SVGRectAttrsScope).n2g = function (value) {
    this.n1v('rx', toString(value));
  };
  function Group$composable(_this__u8e3s4, attrs, content, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(-375607913);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.iv(attrs_0._v) ? 32 : 16);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.iv(content) ? 256 : 128);
    if (!(($dirty & 721) === 144) ? true : !$composer_0.ju()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-375607913, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Group$composable (Svg.kt:874)');
      }
      var tmp0_safe_receiver = attrs_0._v;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.compose.dom.svg.Group$composable.<anonymous>' call
        tmp = Companion_instance_33.o2g(tmp0_safe_receiver);
      }
      GenericTag$composable_0('g', 'http://www.w3.org/2000/svg', tmp, content, $composer_0, 54 | 7168 & $dirty << 3, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    var tmp0_safe_receiver_0 = $composer_0.tu();
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      tmp0_safe_receiver_0.s19(Group$composable$lambda(_this__u8e3s4, attrs_0, content, $changed, $default));
    }
  }
  function SVGGroupAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      $attrs(new SVGGroupAttrsScope($this$null));
      return Unit_instance;
    };
  }
  function Companion_32() {
  }
  protoOf(Companion_32).o2g = function (attrs) {
    return SVGGroupAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_33;
  function Companion_getInstance_34() {
    return Companion_instance_33;
  }
  function SVGGroupAttrsScope(attrs) {
    SVGContainerElementAttrsScope.call(this, attrs);
    this.t2g_1 = 0;
  }
  function PointsAttrs$points$lambda(it) {
    return toString(it.id_1) + ',' + toString(it.jd_1);
  }
  function PointsAttrs() {
  }
  function CenterCoordinateAttrs() {
  }
  function Svg$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Svg$composable($attrs._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Path$composable$lambda($this_Path$composable, $attrs, $$changed) {
    return function ($composer, $force) {
      Path$composable($this_Path$composable, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Polyline$composable$lambda($this_Polyline$composable, $attrs, $$changed) {
    return function ($composer, $force) {
      Polyline$composable($this_Polyline$composable, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Circle$composable$lambda($this_Circle$composable, $attrs, $$changed) {
    return function ($composer, $force) {
      Circle$composable($this_Circle$composable, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Line$composable$lambda($this_Line$composable, $attrs, $$changed) {
    return function ($composer, $force) {
      Line$composable($this_Line$composable, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Rect$composable$lambda($this_Rect$composable, $attrs, $$changed) {
    return function ($composer, $force) {
      Rect$composable($this_Rect$composable, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Group$composable$lambda($this_Group$composable, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Group$composable($this_Group$composable, $attrs._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SVGStrokeType_None_getInstance() {
    SVGStrokeType_initEntries();
    return SVGStrokeType_None_instance;
  }
  function SVGStrokeType_CurrentColor_getInstance() {
    SVGStrokeType_initEntries();
    return SVGStrokeType_CurrentColor_instance;
  }
  function SVGStrokeLineCap_Round_getInstance() {
    SVGStrokeLineCap_initEntries();
    return SVGStrokeLineCap_Round_instance;
  }
  function SVGStrokeLineJoin_Round_getInstance() {
    SVGStrokeLineJoin_initEntries();
    return SVGStrokeLineJoin_Round_instance;
  }
  function SVGFillType_None_getInstance() {
    SVGFillType_initEntries();
    return SVGFillType_None_instance;
  }
  function SVGFillType_CurrentColor_getInstance() {
    SVGFillType_initEntries();
    return SVGFillType_CurrentColor_instance;
  }
  function kebabCaseToTitleCamelCase(_this__u8e3s4) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(_this__u8e3s4)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp = split_0(_this__u8e3s4, ['-']);
    return joinToString(tmp, '', VOID, VOID, VOID, VOID, kebabCaseToTitleCamelCase$lambda);
  }
  function titleCamelCaseToKebabCase(_this__u8e3s4) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(_this__u8e3s4)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var lastIsUpper = false;
    var str = _this__u8e3s4;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.util.titleCamelCaseToKebabCase.<anonymous>' call
    // Inline function 'kotlin.text.forEachIndexed' call
    var index = 0;
    var inductionVariable = 0;
    while (inductionVariable < charSequenceLength(str)) {
      var item = charSequenceGet(str, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.compose.util.titleCamelCaseToKebabCase.<anonymous>.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var isUpper = isUpperCase(item);
      var tmp;
      if (isUpper) {
        // Inline function 'kotlin.text.isNotEmpty' call
        tmp = charSequenceLength(this_0) > 0;
      } else {
        tmp = false;
      }
      if (tmp) {
        if (!lastIsUpper ? true : tmp1 < get_lastIndex_0(str) ? isLowerCase(charSequenceGet(str, tmp1 + 1 | 0)) : false) {
          this_0.t5('-');
        }
      }
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$5 = toString_0(item).toLowerCase();
      this_0.t5(tmp$ret$5);
      lastIsUpper = isUpper;
    }
    return this_0.toString();
  }
  function kebabCaseToTitleCamelCase$lambda(it) {
    return capitalize(it);
  }
  function CancellableActionHandle(id, isInterval) {
    isInterval = isInterval === VOID ? false : isInterval;
    this.u2g_1 = id;
    this.v2g_1 = isInterval;
    this.w2g_1 = 8;
  }
  function invokeLater(_this__u8e3s4, block) {
    // Inline function 'kotlin.time.Companion.milliseconds' call
    Companion_getInstance_0();
    var tmp$ret$0 = toDuration(0, DurationUnit_MILLISECONDS_getInstance());
    return setTimeout(_this__u8e3s4, tmp$ret$0, block);
  }
  function setTimeout(_this__u8e3s4, timeout, block) {
    var id = _this__u8e3s4.window.setTimeout(block, _Duration___get_inWholeMilliseconds__impl__msfiry(timeout).ib());
    return new CancellableActionHandle(id);
  }
  //region block: post-declaration
  protoOf(ComparableAttrsScope).q1v = classes;
  protoOf(ComparableAttrsScope).r1v = id;
  protoOf(ComparableAttrsScope).s1v = tabIndex;
  protoOf(ComparableAttrsScope).u1v = onClick;
  protoOf(ComparableAttrsScope).v1v = onAnimationEnd;
  protoOf(DummyAttrsScope).q1v = classes;
  protoOf(DummyAttrsScope).r1v = id;
  protoOf(DummyAttrsScope).s1v = tabIndex;
  protoOf(DummyAttrsScope).u1v = onClick;
  protoOf(DummyAttrsScope).v1v = onAnimationEnd;
  protoOf(ComparableStyleScope).e1y = property;
  protoOf(ComparableStyleScope).f1y = property_0;
  protoOf(ComparableStyleScope).k1y = variable;
  protoOf(CalcScopeInstance).l2b = unaryMinus;
  protoOf(SVGGraphicalElementAttrsScope).u2d = stroke;
  protoOf(SVGGraphicalElementAttrsScope).d2e = strokeLineCap;
  protoOf(SVGGraphicalElementAttrsScope).e2e = strokeLineJoin;
  protoOf(SVGGraphicalElementAttrsScope).v2d = strokeWidth;
  protoOf(SVGGraphicalElementAttrsScope).w2d = fill;
  protoOf(SVGSvgAttrsScope).x2d = width_1;
  protoOf(SVGSvgAttrsScope).y2d = viewBox;
  protoOf(SVGPolylineAttrsScope).q2f = points;
  protoOf(SVGCircleAttrsScope).x2f = cx;
  protoOf(SVGCircleAttrsScope).y2f = cy;
  protoOf(SVGRectAttrsScope).f2e = x;
  protoOf(SVGRectAttrsScope).g2e = y;
  protoOf(SVGRectAttrsScope).h2e = height;
  protoOf(SVGRectAttrsScope).i2e = width_0;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
  Companion_instance_1 = new Companion_0();
  Companion_instance_2 = new Companion_1();
  Companion_instance_3 = new Companion_2();
  Companion_instance_4 = new Companion_3();
  Companion_instance_5 = new Companion_4();
  Companion_instance_6 = new Companion_5();
  Companion_instance_7 = new Companion_6();
  Companion_instance_8 = new Companion_7();
  Companion_instance_9 = new Companion_8();
  Companion_instance_10 = new Companion_9();
  Companion_instance_11 = new Companion_10();
  Companion_instance_12 = new Companion_11();
  Companion_instance_13 = new Companion_12();
  Companion_instance_14 = new Companion_13();
  Companion_instance_15 = new Companion_14();
  Companion_instance_16 = new Companion_15();
  Companion_instance_17 = new Companion_16();
  Companion_instance_18 = new Companion_17();
  Companion_instance_19 = new Companion_18();
  Companion_instance_20 = new Companion_19();
  Companion_instance_21 = new Companion_20();
  Companion_instance_22 = new Companion_21();
  Companion_instance_23 = new Companion_22();
  CalcScopeInstance_instance = new CalcScopeInstance();
  Companion_instance_26 = new Companion_25();
  Companion_instance_27 = new Companion_26();
  Companion_instance_28 = new Companion_27();
  Companion_instance_29 = new Companion_28();
  Companion_instance_30 = new Companion_29();
  Companion_instance_31 = new Companion_30();
  Companion_instance_32 = new Companion_31();
  Companion_instance_33 = new Companion_32();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = blur;
  _.$_$.b = calc;
  _.$_$.c = clamp;
  _.$_$.d = linearGradient;
  _.$_$.e = CSSAnimation;
  _.$_$.f = CSSTransition;
  _.$_$.g = ComparableStyleScope;
  _.$_$.h = NumberValue;
  _.$_$.i = StyleVariable_3;
  _.$_$.j = StyleVariable_2;
  _.$_$.k = StyleVariable_0;
  _.$_$.l = StyleVariable_1;
  _.$_$.m = animation;
  _.$_$.n = ariaDisabled;
  _.$_$.o = ariaHidden;
  _.$_$.p = backgroundImage_0;
  _.$_$.q = background;
  _.$_$.r = borderBottom;
  _.$_$.s = borderColor;
  _.$_$.t = borderLeft;
  _.$_$.u = borderStyle;
  _.$_$.v = borderTop;
  _.$_$.w = borderWidth;
  _.$_$.x = boxShadow;
  _.$_$.y = boxSizing_0;
  _.$_$.z = cursor;
  _.$_$.a1 = fontSize;
  _.$_$.b1 = fontWeight;
  _.$_$.c1 = gridTemplateColumns_0;
  _.$_$.d1 = gridTemplateRows_0;
  _.$_$.e1 = grid;
  _.$_$.f1 = isNotEmpty;
  _.$_$.g1 = justifyItems;
  _.$_$.h1 = justifySelf;
  _.$_$.i1 = listStyle;
  _.$_$.j1 = mixBlendMode;
  _.$_$.k1 = objectFit;
  _.$_$.l1 = outline;
  _.$_$.m1 = overflowWrap;
  _.$_$.n1 = overflowX;
  _.$_$.o1 = overflowY;
  _.$_$.p1 = overflow;
  _.$_$.q1 = paddingInline;
  _.$_$.r1 = pointerEvents;
  _.$_$.s1 = scale_0;
  _.$_$.t1 = scale;
  _.$_$.u1 = scrollBehavior;
  _.$_$.v1 = setVariable;
  _.$_$.w1 = setVariable_0;
  _.$_$.x1 = textAlign;
  _.$_$.y1 = textDecorationLine;
  _.$_$.z1 = transition;
  _.$_$.a2 = translateX;
  _.$_$.b2 = translateY;
  _.$_$.c2 = userSelect;
  _.$_$.d2 = verticalAlign;
  _.$_$.e2 = visibility;
  _.$_$.f2 = whiteSpace;
  _.$_$.g2 = zIndex;
  _.$_$.h2 = Circle$composable;
  _.$_$.i2 = Group$composable;
  _.$_$.j2 = Line$composable;
  _.$_$.k2 = Path$composable;
  _.$_$.l2 = Polyline$composable;
  _.$_$.m2 = Rect$composable;
  _.$_$.n2 = Svg$composable;
  _.$_$.o2 = GenericTag$composable;
  _.$_$.p2 = refScope;
  _.$_$.q2 = registerRefScope$composable;
  _.$_$.r2 = registerRefScope$composable_0;
  _.$_$.s2 = invokeLater;
  _.$_$.t2 = kebabCaseToTitleCamelCase;
  _.$_$.u2 = titleCamelCaseToKebabCase;
  _.$_$.v2 = Direction_ToBottomRight_getInstance;
  _.$_$.w2 = SVGFillType_CurrentColor_getInstance;
  _.$_$.x2 = SVGFillType_None_getInstance;
  _.$_$.y2 = SVGStrokeLineCap_Round_getInstance;
  _.$_$.z2 = SVGStrokeLineJoin_Round_getInstance;
  _.$_$.a3 = SVGStrokeType_CurrentColor_getInstance;
  _.$_$.b3 = SVGStrokeType_None_getInstance;
  _.$_$.c3 = ComparableAttrsScope_init_$Create$;
  _.$_$.d3 = CSSTransition_init_$Create$;
  _.$_$.e3 = Companion_instance_2;
  _.$_$.f3 = Companion_instance_20;
  _.$_$.g3 = Companion_instance_3;
  _.$_$.h3 = Companion_instance_5;
  _.$_$.i3 = Companion_instance_4;
  _.$_$.j3 = Companion_instance_0;
  _.$_$.k3 = Companion_instance_1;
  _.$_$.l3 = Companion_instance_9;
  _.$_$.m3 = Companion_instance_11;
  _.$_$.n3 = Companion_instance_10;
  _.$_$.o3 = Companion_instance_12;
  _.$_$.p3 = Companion_instance_13;
  _.$_$.q3 = Companion_instance_14;
  _.$_$.r3 = Companion_instance_15;
  _.$_$.s3 = Companion_instance_18;
  _.$_$.t3 = Companion_instance_19;
  _.$_$.u3 = Companion_instance_21;
  _.$_$.v3 = Companion_instance_16;
  _.$_$.w3 = Companion_instance_8;
  _.$_$.x3 = Companion_instance_22;
  _.$_$.y3 = Companion_instance_17;
  _.$_$.z3 = Companion_instance_27;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-compose-html-ext.js.map
