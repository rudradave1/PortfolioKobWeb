(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './html-html-core.js', './compose-multiplatform-core-runtime.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./html-html-core.js'), require('./compose-multiplatform-core-runtime.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
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
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    root['kobweb-frontend-compose-html-ext'] = factory(typeof this['kobweb-frontend-compose-html-ext'] === 'undefined' ? {} : this['kobweb-frontend-compose-html-ext'], this['kotlin-kotlin-stdlib'], this['html-html-core'], this['compose-multiplatform-core-runtime'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_html_html_core, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.bb;
  var objectCreate = kotlin_kotlin.$_$.za;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.u;
  var equals = kotlin_kotlin.$_$.v9;
  var hashCode = kotlin_kotlin.$_$.ca;
  var classes = kotlin_org_jetbrains_compose_html_html_core.$_$.n;
  var id = kotlin_org_jetbrains_compose_html_html_core.$_$.s;
  var hidden = kotlin_org_jetbrains_compose_html_html_core.$_$.r;
  var title = kotlin_org_jetbrains_compose_html_html_core.$_$.y;
  var dir = kotlin_org_jetbrains_compose_html_html_core.$_$.p;
  var draggable = kotlin_org_jetbrains_compose_html_html_core.$_$.q;
  var contentEditable = kotlin_org_jetbrains_compose_html_html_core.$_$.o;
  var lang = kotlin_org_jetbrains_compose_html_html_core.$_$.v;
  var tabIndex = kotlin_org_jetbrains_compose_html_html_core.$_$.x;
  var spellCheck = kotlin_org_jetbrains_compose_html_html_core.$_$.w;
  var inputMode = kotlin_org_jetbrains_compose_html_html_core.$_$.u;
  var inputMode_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.t;
  var onContextMenu = kotlin_org_jetbrains_compose_html_html_core.$_$.h1;
  var onClick = kotlin_org_jetbrains_compose_html_html_core.$_$.g1;
  var onDoubleClick = kotlin_org_jetbrains_compose_html_html_core.$_$.k1;
  var onMouseDown = kotlin_org_jetbrains_compose_html_html_core.$_$.x1;
  var onMouseUp = kotlin_org_jetbrains_compose_html_html_core.$_$.d2;
  var onMouseEnter = kotlin_org_jetbrains_compose_html_html_core.$_$.y1;
  var onMouseLeave = kotlin_org_jetbrains_compose_html_html_core.$_$.z1;
  var onMouseMove = kotlin_org_jetbrains_compose_html_html_core.$_$.a2;
  var onMouseOut = kotlin_org_jetbrains_compose_html_html_core.$_$.b2;
  var onMouseOver = kotlin_org_jetbrains_compose_html_html_core.$_$.c2;
  var onWheel = kotlin_org_jetbrains_compose_html_html_core.$_$.k2;
  var onDrag = kotlin_org_jetbrains_compose_html_html_core.$_$.q1;
  var onDrop = kotlin_org_jetbrains_compose_html_html_core.$_$.r1;
  var onDragStart = kotlin_org_jetbrains_compose_html_html_core.$_$.p1;
  var onDragEnd = kotlin_org_jetbrains_compose_html_html_core.$_$.l1;
  var onDragOver = kotlin_org_jetbrains_compose_html_html_core.$_$.o1;
  var onDragEnter = kotlin_org_jetbrains_compose_html_html_core.$_$.m1;
  var onDragLeave = kotlin_org_jetbrains_compose_html_html_core.$_$.n1;
  var onCopy = kotlin_org_jetbrains_compose_html_html_core.$_$.i1;
  var onCut = kotlin_org_jetbrains_compose_html_html_core.$_$.j1;
  var onPaste = kotlin_org_jetbrains_compose_html_html_core.$_$.e2;
  var onKeyDown = kotlin_org_jetbrains_compose_html_html_core.$_$.v1;
  var onKeyUp = kotlin_org_jetbrains_compose_html_html_core.$_$.w1;
  var onFocus = kotlin_org_jetbrains_compose_html_html_core.$_$.u1;
  var onBlur = kotlin_org_jetbrains_compose_html_html_core.$_$.f1;
  var onFocusIn = kotlin_org_jetbrains_compose_html_html_core.$_$.s1;
  var onFocusOut = kotlin_org_jetbrains_compose_html_html_core.$_$.t1;
  var onTouchCancel = kotlin_org_jetbrains_compose_html_html_core.$_$.g2;
  var onTouchMove = kotlin_org_jetbrains_compose_html_html_core.$_$.i2;
  var onTouchEnd = kotlin_org_jetbrains_compose_html_html_core.$_$.h2;
  var onTouchStart = kotlin_org_jetbrains_compose_html_html_core.$_$.j2;
  var onAnimationEnd = kotlin_org_jetbrains_compose_html_html_core.$_$.c1;
  var onAnimationIteration = kotlin_org_jetbrains_compose_html_html_core.$_$.d1;
  var onAnimationStart = kotlin_org_jetbrains_compose_html_html_core.$_$.e1;
  var onScroll = kotlin_org_jetbrains_compose_html_html_core.$_$.f2;
  var addEventListener = kotlin_org_jetbrains_compose_html_html_core.$_$.b1;
  var addEventListener_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.a1;
  var AttrsScope = kotlin_org_jetbrains_compose_html_html_core.$_$.z;
  var classMeta = kotlin_kotlin.$_$.s9;
  var setMetadataFor = kotlin_kotlin.$_$.cb;
  var VOID = kotlin_kotlin.$_$.e;
  var Unit_getInstance = kotlin_kotlin.$_$.j4;
  var objectMeta = kotlin_kotlin.$_$.ab;
  var THROW_IAE = kotlin_kotlin.$_$.zd;
  var enumEntries = kotlin_kotlin.$_$.i9;
  var Enum = kotlin_kotlin.$_$.nd;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.c1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.d2;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var toString = kotlin_kotlin.$_$.eb;
  var joinToString = kotlin_kotlin.$_$.w6;
  var getStringHashCode = kotlin_kotlin.$_$.ba;
  var THROW_CCE = kotlin_kotlin.$_$.yd;
  var joinToString_0 = kotlin_kotlin.$_$.x6;
  var reversed = kotlin_kotlin.$_$.t7;
  var charSequenceLength = kotlin_kotlin.$_$.r9;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.t5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var Collection = kotlin_kotlin.$_$.t4;
  var isInterface = kotlin_kotlin.$_$.na;
  var backgroundImage = kotlin_org_jetbrains_compose_html_html_core.$_$.h3;
  var CSSBorder = kotlin_org_jetbrains_compose_html_html_core.$_$.m2;
  var width = kotlin_org_jetbrains_compose_html_html_core.$_$.h5;
  var style = kotlin_org_jetbrains_compose_html_html_core.$_$.b5;
  var color = kotlin_org_jetbrains_compose_html_html_core.$_$.q3;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.x4;
  var boxSizing = kotlin_org_jetbrains_compose_html_html_core.$_$.p3;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.v4;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.te;
  var get_PI = kotlin_kotlin.$_$.fb;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var property = kotlin_org_jetbrains_compose_html_html_core.$_$.x2;
  var property_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.y2;
  var variable = kotlin_org_jetbrains_compose_html_html_core.$_$.a3;
  var variable_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.z2;
  var invoke = kotlin_org_jetbrains_compose_html_html_core.$_$.w2;
  var invoke_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.v2;
  var invoke_1 = kotlin_org_jetbrains_compose_html_html_core.$_$.u2;
  var StyleScope = kotlin_org_jetbrains_compose_html_html_core.$_$.c3;
  var copyToArray = kotlin_kotlin.$_$.h6;
  var Companion_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var display = kotlin_org_jetbrains_compose_html_html_core.$_$.t3;
  var gridTemplateColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.h4;
  var gridTemplateRows = kotlin_org_jetbrains_compose_html_html_core.$_$.i4;
  var gridAutoColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.e4;
  var gridAutoRows = kotlin_org_jetbrains_compose_html_html_core.$_$.f4;
  var Annotation = kotlin_kotlin.$_$.kd;
  var lastOrNull = kotlin_kotlin.$_$.b7;
  var get_lastIndex = kotlin_kotlin.$_$.z6;
  var listOf = kotlin_kotlin.$_$.e7;
  var emptyList = kotlin_kotlin.$_$.j6;
  var addAll = kotlin_kotlin.$_$.o5;
  var listOfNotNull = kotlin_kotlin.$_$.d7;
  var isNumber = kotlin_kotlin.$_$.pa;
  var CSSVariable = kotlin_org_jetbrains_compose_html_html_core.$_$.t2;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var ensureNotNull = kotlin_kotlin.$_$.qe;
  var removeSuffix = kotlin_kotlin.$_$.mc;
  var charSequenceGet = kotlin_kotlin.$_$.q9;
  var isWhitespace = kotlin_kotlin.$_$.ic;
  var Number_0 = kotlin_kotlin.$_$.ud;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.y1;
  var interfaceMeta = kotlin_kotlin.$_$.ea;
  var checkCountOverflow = kotlin_kotlin.$_$.r5;
  var checkIndexOverflow = kotlin_kotlin.$_$.s5;
  var getOrNull = kotlin_kotlin.$_$.r6;
  var DisposableEffectResult = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var toList = kotlin_kotlin.$_$.d8;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i;
  var Char__rangeTo_impl_tkncvp = kotlin_kotlin.$_$.e2;
  var plus = kotlin_kotlin.$_$.n7;
  var plus_0 = kotlin_kotlin.$_$.o7;
  var ElementBuilder = kotlin_org_jetbrains_compose_html_html_core.$_$.m5;
  var TagElement$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.z5;
  var to = kotlin_kotlin.$_$.bf;
  var lazy = kotlin_kotlin.$_$.se;
  var charArrayOf = kotlin_kotlin.$_$.o9;
  var split = kotlin_kotlin.$_$.qc;
  var removeSurrounding = kotlin_kotlin.$_$.nc;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var KProperty1 = kotlin_kotlin.$_$.sb;
  var getPropertyCallableRef = kotlin_kotlin.$_$.aa;
  var toString_0 = kotlin_kotlin.$_$.g2;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var json = kotlin_kotlin.$_$.ta;
  var asCoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var Exception = kotlin_kotlin.$_$.pd;
  var decodeToString = kotlin_kotlin.$_$.zb;
  var isCharSequence = kotlin_kotlin.$_$.ja;
  var trim = kotlin_kotlin.$_$.gd;
  var isBlank = kotlin_kotlin.$_$.fc;
  var split_0 = kotlin_kotlin.$_$.rc;
  var compareTo = kotlin_kotlin.$_$.t9;
  var repeat = kotlin_kotlin.$_$.oc;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.h1;
  var captureStack = kotlin_kotlin.$_$.n9;
  var CoroutineImpl = kotlin_kotlin.$_$.d9;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.n8;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.e4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.h2;
  var intercepted = kotlin_kotlin.$_$.q8;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.a1;
  var returnIfSuspended = kotlin_kotlin.$_$.h;
  var SuspendFunction1 = kotlin_kotlin.$_$.e9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.l1;
  var isUpperCase = kotlin_kotlin.$_$.hc;
  var isLowerCase = kotlin_kotlin.$_$.gc;
  var get_lastIndex_0 = kotlin_kotlin.$_$.jc;
  var replace = kotlin_kotlin.$_$.pc;
  var last = kotlin_kotlin.$_$.kc;
  var first = kotlin_kotlin.$_$.ec;
  var capitalize = kotlin_kotlin.$_$.wb;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.b4;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.f;
  var toDuration = kotlin_kotlin.$_$.jd;
  var _Duration___get_inWholeMilliseconds__impl__msfiry = kotlin_kotlin.$_$.a2;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ComparableAttrsScope, 'ComparableAttrsScope', classMeta, VOID, [AttrsScope], ComparableAttrsScope_init_$Create$);
  setMetadataFor(DummyAttrsScope, 'DummyAttrsScope', classMeta, VOID, [AttrsScope], DummyAttrsScope);
  setMetadataFor(JustifyItems, 'JustifyItems', classMeta);
  setMetadataFor(JustifyItemsKeyword, 'JustifyItemsKeyword', classMeta, JustifyItems);
  setMetadataFor(JustifyItemsPosition, 'JustifyItemsPosition', classMeta, JustifyItems);
  setMetadataFor(BaselineAlignment, 'BaselineAlignment', classMeta, JustifyItems);
  setMetadataFor(OverflowAlignment, 'OverflowAlignment', classMeta, JustifyItems);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(JustifySelf, 'JustifySelf', classMeta);
  setMetadataFor(JustifySelfKeyword, 'JustifySelfKeyword', classMeta, JustifySelf);
  setMetadataFor(JustifySelfPosition, 'JustifySelfPosition', classMeta, JustifySelf);
  setMetadataFor(BaselineAlignment_0, 'BaselineAlignment', classMeta, JustifySelf);
  setMetadataFor(OverflowAlignment_0, 'OverflowAlignment', classMeta, JustifySelf);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(BaselineSet, 'BaselineSet', classMeta, Enum);
  setMetadataFor(OverflowStrategy, 'OverflowStrategy', classMeta, Enum);
  setMetadataFor(CSSAnimation, 'CSSAnimation', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(AnimationIterationCount, 'AnimationIterationCount', classMeta);
  setMetadataFor(CSSBackground, 'CSSBackground', classMeta, VOID, VOID, CSSBackground);
  setMetadataFor(BackgroundRepeat, 'BackgroundRepeat', classMeta);
  setMetadataFor(Keyword, 'Keyword', classMeta, BackgroundRepeat);
  setMetadataFor(RepeatStyle, 'RepeatStyle', classMeta, BackgroundRepeat);
  setMetadataFor(TwoValue, 'TwoValue', classMeta, BackgroundRepeat);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(BackgroundSize, 'BackgroundSize', classMeta);
  setMetadataFor(Keyword_0, 'Keyword', classMeta, BackgroundSize);
  setMetadataFor(Size, 'Size', classMeta, BackgroundSize);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(BackgroundPosition, 'BackgroundPosition', classMeta);
  setMetadataFor(Keyword_1, 'Keyword', classMeta, BackgroundPosition);
  setMetadataFor(Position, 'Position', classMeta, BackgroundPosition);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(BackgroundOrigin, 'BackgroundOrigin', classMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(BackgroundClip, 'BackgroundClip', classMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(BackgroundAttachment, 'BackgroundAttachment', classMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(BoxSizing, 'BoxSizing', classMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(CSSPosition, 'CSSPosition', classMeta, VOID, VOID, CSSPosition_init_$Create$);
  setMetadataFor(Edge, 'Edge', classMeta);
  setMetadataFor(EdgeXOrCenter, 'EdgeXOrCenter', classMeta, Edge);
  setMetadataFor(EdgeYOrCenter, 'EdgeYOrCenter', classMeta, Edge);
  setMetadataFor(EdgeXOffset, 'EdgeXOffset', classMeta);
  setMetadataFor(CenterX, 'CenterX', classMeta, EdgeXOrCenter);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(EdgeYOffset, 'EdgeYOffset', classMeta);
  setMetadataFor(EdgeX, 'EdgeX', classMeta, EdgeXOrCenter);
  setMetadataFor(CenterY, 'CenterY', classMeta, EdgeYOrCenter);
  setMetadataFor(EdgeY, 'EdgeY', classMeta, EdgeYOrCenter);
  setMetadataFor(ComparableStyleScope, 'ComparableStyleScope', classMeta, VOID, [StyleScope], ComparableStyleScope);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(Cursor, 'Cursor', classMeta);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(FontWeight, 'FontWeight', classMeta);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(FontSize, 'FontSize', classMeta);
  setMetadataFor(GridBuilderInAuto, 'GridBuilderInAuto', classMeta);
  setMetadataFor(GridBuilder, 'GridBuilder', classMeta, GridBuilderInAuto, VOID, GridBuilder);
  setMetadataFor(GridTrackBuilderInRepeat, 'GridTrackBuilderInRepeat', classMeta);
  setMetadataFor(GridTrackBuilder, 'GridTrackBuilder', classMeta, GridTrackBuilderInRepeat, VOID, GridTrackBuilder);
  setMetadataFor(GridEntry, 'GridEntry', classMeta);
  setMetadataFor(TrackSize, 'TrackSize', classMeta, GridEntry);
  setMetadataFor(FitContent, 'FitContent', classMeta, TrackSize);
  setMetadataFor(MinMax, 'MinMax', classMeta, TrackSize);
  setMetadataFor(Flex, 'Flex', classMeta, TrackSize);
  setMetadataFor(Inflexible, 'Inflexible', classMeta, TrackSize);
  setMetadataFor(Keyword_2, 'Keyword', classMeta, Inflexible);
  setMetadataFor(Fixed, 'Fixed', classMeta, Inflexible);
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor(Type, 'Type', classMeta, Enum);
  setMetadataFor(Repeat, 'Repeat', classMeta, GridEntry);
  setMetadataFor(Track, 'Track', classMeta, Repeat);
  setMetadataFor(Auto, 'Auto', classMeta, Repeat);
  setMetadataFor(LineNames, 'LineNames', classMeta, GridEntry);
  setMetadataFor(Companion_15, 'Companion', objectMeta);
  setMetadataFor(GridDslMarker, 'GridDslMarker', classMeta, VOID, [Annotation]);
  setMetadataFor(Companion_16, 'Companion', objectMeta);
  setMetadataFor(VerticalAlign, 'VerticalAlign', classMeta);
  setMetadataFor(Companion_17, 'Companion', objectMeta);
  setMetadataFor(ListStyleType, 'ListStyleType', classMeta);
  setMetadataFor(Companion_18, 'Companion', objectMeta);
  setMetadataFor(ListStylePosition, 'ListStylePosition', classMeta);
  setMetadataFor(Companion_19, 'Companion', objectMeta);
  setMetadataFor(MixBlendMode, 'MixBlendMode', classMeta);
  setMetadataFor(Companion_20, 'Companion', objectMeta);
  setMetadataFor(ObjectFit, 'ObjectFit', classMeta);
  setMetadataFor(CSSOutline, 'CSSOutline', classMeta);
  setMetadataFor(Companion_21, 'Companion', objectMeta);
  setMetadataFor(Overflow, 'Overflow', classMeta);
  setMetadataFor(Companion_22, 'Companion', objectMeta);
  setMetadataFor(OverflowWrap, 'OverflowWrap', classMeta);
  setMetadataFor(Companion_23, 'Companion', objectMeta);
  setMetadataFor(PointerEvents, 'PointerEvents', classMeta);
  setMetadataFor(Companion_24, 'Companion', objectMeta);
  setMetadataFor(ScrollBehavior, 'ScrollBehavior', classMeta);
  setMetadataFor(StyleVariableNumberProvider, 'StyleVariableNumberProvider', classMeta);
  setMetadataFor(StyleVariable_1, 'StyleVariable', classMeta, VOID, [CSSVariable]);
  setMetadataFor(PropertyValue, 'PropertyValue', classMeta, StyleVariable_1);
  setMetadataFor(NumberValue, 'NumberValue', classMeta, StyleVariable_1);
  setMetadataFor(StringValue, 'StringValue', classMeta, StyleVariable_1);
  setMetadataFor(StyleVariablePropertyProvider, 'StyleVariablePropertyProvider', classMeta);
  setMetadataFor(Companion_25, 'Companion', objectMeta);
  setMetadataFor(TextAlign, 'TextAlign', classMeta);
  setMetadataFor(Companion_26, 'Companion', objectMeta);
  setMetadataFor(UserSelect, 'UserSelect', classMeta);
  setMetadataFor(Companion_27, 'Companion', objectMeta);
  setMetadataFor(WhiteSpace, 'WhiteSpace', classMeta);
  setMetadataFor(Companion_28, 'Companion', objectMeta);
  setMetadataFor(TextDecorationLine, 'TextDecorationLine', classMeta);
  setMetadataFor(Companion_29, 'Companion', objectMeta);
  setMetadataFor(CSSTransition, 'CSSTransition', classMeta);
  setMetadataFor(Companion_30, 'Companion', objectMeta);
  setMetadataFor(TransitionProperty, 'TransitionProperty', classMeta);
  setMetadataFor(Companion_31, 'Companion', objectMeta);
  setMetadataFor(Visibility, 'Visibility', classMeta);
  setMetadataFor(CSSImage, 'CSSImage', classMeta);
  setMetadataFor(Keyword_3, 'Keyword', classMeta, CSSImage);
  setMetadataFor(Url, 'Url', classMeta, CSSImage);
  setMetadataFor(Gradient, 'Gradient', classMeta, CSSImage);
  setMetadataFor(Companion_32, 'Companion', objectMeta);
  setMetadataFor(CalcNum, 'CalcNum', classMeta, Number_0);
  function times(_this__u8e3s4, b) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'calc(' + _this__u8e3s4 + ' * ' + toString(b) + ')';
  }
  function times_0(_this__u8e3s4, unit) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'calc(' + toString(_this__u8e3s4) + ' * ' + unit + ')';
  }
  function div(_this__u8e3s4, num) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'calc(' + _this__u8e3s4 + ' / ' + toString(num) + ')';
  }
  function plus_1(_this__u8e3s4, b) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'calc(' + _this__u8e3s4 + ' + ' + b + ')';
  }
  function minus(_this__u8e3s4, b) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'calc(' + _this__u8e3s4 + ' - ' + b + ')';
  }
  function unaryMinus(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'calc(-1 * ' + _this__u8e3s4 + ')';
  }
  function unaryPlus(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'calc(1 * ' + _this__u8e3s4 + ')';
  }
  function num(num) {
    return new CalcNum(toString(num));
  }
  setMetadataFor(CalcScope, 'CalcScope', interfaceMeta);
  setMetadataFor(CalcScopeInstance, 'CalcScopeInstance', objectMeta, VOID, [CalcScope]);
  setMetadataFor(CSSFilter, 'CSSFilter', classMeta);
  setMetadataFor(Entry, 'Entry', classMeta);
  setMetadataFor(Color, 'Color', classMeta, Entry);
  setMetadataFor(Simple, 'Simple', classMeta, Color);
  setMetadataFor(Stop, 'Stop', classMeta, Color);
  setMetadataFor(StopRange, 'StopRange', classMeta, Color);
  setMetadataFor(Hint, 'Hint', classMeta, Entry);
  setMetadataFor(ColorStopsBuilder, 'ColorStopsBuilder', classMeta, VOID, VOID, ColorStopsBuilder);
  setMetadataFor(Gradient_0, 'Gradient', interfaceMeta);
  setMetadataFor(Direction, 'Direction', classMeta, Enum);
  setMetadataFor(LinearGradient, 'LinearGradient', classMeta, VOID, [Gradient_0]);
  setMetadataFor(Default, 'Default', classMeta, LinearGradient);
  setMetadataFor(ByDirection, 'ByDirection', classMeta, LinearGradient);
  setMetadataFor(ByAngle, 'ByAngle', classMeta, LinearGradient);
  setMetadataFor(CSSClamp, 'CSSClamp', classMeta);
  setMetadataFor(CSSUrl, 'CSSUrl', classMeta);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, VOID, [DisposableEffectResult]);
  setMetadataFor(RefCallback, 'RefCallback', classMeta);
  setMetadataFor(Simple_0, 'Simple', classMeta, RefCallback);
  setMetadataFor(Disposable, 'Disposable', classMeta, RefCallback);
  setMetadataFor(KeysToEffect, 'KeysToEffect', classMeta);
  setMetadataFor(Builder, 'Builder', classMeta, VOID, VOID, Builder);
  setMetadataFor(ElementRefScope, 'ElementRefScope', classMeta);
  setMetadataFor(Companion_33, 'Companion', objectMeta);
  setMetadataFor(GenericNamespacedElementBuilder, 'GenericNamespacedElementBuilder', classMeta, VOID, [ElementBuilder]);
  setMetadataFor(Companion_34, 'Companion', objectMeta);
  setMetadataFor(GenericElementBuilder, 'GenericElementBuilder', classMeta, VOID, [ElementBuilder]);
  setMetadataFor(Companion_35, 'Companion', objectMeta);
  setMetadataFor(SVGElementAttrsScope, 'SVGElementAttrsScope', classMeta, VOID, [AttrsScope]);
  function stroke(value) {
    return this.attr_w68641_k$('stroke', toString(value));
  }
  function stroke_0(value) {
    return this.attr_w68641_k$('stroke', value.toString());
  }
  function stroke_1(id) {
    return this.attr_w68641_k$('stroke', _SvgId___get_urlReference__impl__ehpa8t(id));
  }
  function strokeDashArray(values) {
    this.attr_w68641_k$('stroke-dasharray', joinToString_0(values, ',', VOID, VOID, VOID, VOID, PresentationAttrs$strokeDashArray$lambda));
  }
  function strokeDashArray_0(values) {
    this.attr_w68641_k$('stroke-dasharray', joinToString_0(values, ',', VOID, VOID, VOID, VOID, PresentationAttrs$strokeDashArray$lambda_0));
  }
  function strokeDashOffset(value) {
    return this.attr_w68641_k$('stroke-dashoffset', toString(value));
  }
  function strokeDashOffset_0(value) {
    return this.attr_w68641_k$('stroke-dashoffset', toString(value));
  }
  function strokeLineCap(value) {
    return this.attr_w68641_k$('stroke-linecap', value.toString());
  }
  function strokeLineJoin(value) {
    return this.attr_w68641_k$('stroke-linejoin', value.toString());
  }
  function strokeMiterLimit(value) {
    return this.attr_w68641_k$('stroke-miterlimit', toString(value));
  }
  function strokeOpacity(value) {
    return this.attr_w68641_k$('stroke-opacity', toString(value));
  }
  function strokeWidth(value) {
    return this.attr_w68641_k$('stroke-width', toString(value));
  }
  function strokeWidth_0(value) {
    return this.attr_w68641_k$('stroke-width', toString(value));
  }
  function fill(value) {
    return this.attr_w68641_k$('fill', toString(value));
  }
  function fill_0(value) {
    return this.attr_w68641_k$('fill', value.toString());
  }
  function fill_1(id) {
    return this.attr_w68641_k$('fill', _SvgId___get_urlReference__impl__ehpa8t(id));
  }
  function fillRule(value) {
    return this.attr_w68641_k$('fill-rule', value.toString());
  }
  function fillOpacity(value) {
    return this.attr_w68641_k$('fill-opacity', toString(value));
  }
  function filter(id) {
    return this.attr_w68641_k$('filter', _SvgId___get_urlReference__impl__ehpa8t(id));
  }
  function floodColor(color) {
    return this.attr_w68641_k$('flood-color', toString(color));
  }
  function floodOpacity(value) {
    return this.attr_w68641_k$('flood-opacity', toString(value));
  }
  function lightingColor(color) {
    return this.attr_w68641_k$('lighting-color', toString(color));
  }
  setMetadataFor(PresentationAttrs, 'PresentationAttrs', interfaceMeta, VOID, [AttrsScope]);
  setMetadataFor(SVGGraphicalElementAttrsScope, 'SVGGraphicalElementAttrsScope', classMeta, SVGElementAttrsScope, [SVGElementAttrsScope, PresentationAttrs]);
  setMetadataFor(SVGContainerElementAttrsScope, 'SVGContainerElementAttrsScope', classMeta, SVGGraphicalElementAttrsScope);
  function x(value) {
    this.attr_w68641_k$('x', toString(value));
  }
  function x_0(value) {
    this.attr_w68641_k$('x', toString(value));
  }
  function y(value) {
    this.attr_w68641_k$('y', toString(value));
  }
  function y_0(value) {
    this.attr_w68641_k$('y', toString(value));
  }
  setMetadataFor(CoordinateAttrs, 'CoordinateAttrs', interfaceMeta, VOID, [AttrsScope]);
  function height(value) {
    this.attr_w68641_k$('height', toString(value));
  }
  function height_0(value) {
    this.attr_w68641_k$('height', toString(value));
  }
  function width_0(value) {
    this.attr_w68641_k$('width', toString(value));
  }
  function width_1(value) {
    this.attr_w68641_k$('width', toString(value));
  }
  setMetadataFor(LengthAttrs, 'LengthAttrs', interfaceMeta, VOID, [AttrsScope]);
  function viewBox(x, y, width, height) {
    this.attr_w68641_k$('viewBox', toString(x) + ' ' + toString(y) + ' ' + toString(width) + ' ' + toString(height));
  }
  function viewBox_0(viewBox) {
    this.viewBox_s5pn86_k$(viewBox.x_1, viewBox.y_1, viewBox.width_1, viewBox.height_1);
  }
  setMetadataFor(ViewBoxAttrs, 'ViewBoxAttrs', interfaceMeta, VOID, [AttrsScope]);
  setMetadataFor(SVGSvgAttrsScope, 'SVGSvgAttrsScope', classMeta, SVGContainerElementAttrsScope, [SVGContainerElementAttrsScope, CoordinateAttrs, LengthAttrs, ViewBoxAttrs]);
  setMetadataFor(SvgId, 'SvgId', classMeta);
  setMetadataFor(Companion_36, 'Companion', objectMeta);
  setMetadataFor(SVGGradientAttrsScope, 'SVGGradientAttrsScope', classMeta, SVGElementAttrsScope);
  setMetadataFor(SVGRadialGradientAttrsScope, 'SVGRadialGradientAttrsScope', classMeta, SVGGradientAttrsScope);
  setMetadataFor(Companion_37, 'Companion', objectMeta);
  setMetadataFor(SVGDefsAttrsScope, 'SVGDefsAttrsScope', classMeta, SVGElementAttrsScope);
  setMetadataFor(Companion_38, 'Companion', objectMeta);
  setMetadataFor(SVGStopAttrsScope, 'SVGStopAttrsScope', classMeta, SVGElementAttrsScope);
  setMetadataFor(Companion_39, 'Companion', objectMeta);
  setMetadataFor(ViewBox, 'ViewBox', classMeta);
  setMetadataFor(SVGGradientUnits, 'SVGGradientUnits', classMeta, Enum);
  setMetadataFor(SVGGradientSpreadMethod, 'SVGGradientSpreadMethod', classMeta, Enum);
  setMetadataFor(SVGStopColorType, 'SVGStopColorType', classMeta, Enum);
  setMetadataFor(SVGTransformScope, 'SVGTransformScope', classMeta);
  setMetadataFor(SVGStrokeType, 'SVGStrokeType', classMeta, Enum);
  setMetadataFor(SVGStrokeLineCap, 'SVGStrokeLineCap', classMeta, Enum);
  setMetadataFor(SVGStrokeLineJoin, 'SVGStrokeLineJoin', classMeta, Enum);
  setMetadataFor(SVGFillType, 'SVGFillType', classMeta, Enum);
  setMetadataFor(SVGFillRule, 'SVGFillRule', classMeta, Enum);
  setMetadataFor(Companion_40, 'Companion', objectMeta);
  setMetadataFor(SVGPathAttrsScope, 'SVGPathAttrsScope', classMeta, SVGGraphicalElementAttrsScope);
  setMetadataFor(SVGPathDataScope, 'SVGPathDataScope', classMeta);
  setMetadataFor(Companion_41, 'Companion', objectMeta);
  function points(pairs) {
    var pointString = joinToString_0(pairs, ' ', VOID, VOID, VOID, VOID, PointsAttrs$points$lambda);
    this.attr_w68641_k$('points', pointString);
  }
  setMetadataFor(PointsAttrs, 'PointsAttrs', interfaceMeta, VOID, [AttrsScope]);
  setMetadataFor(SVGPolylineAttrsScope, 'SVGPolylineAttrsScope', classMeta, SVGGraphicalElementAttrsScope, [SVGGraphicalElementAttrsScope, PointsAttrs]);
  setMetadataFor(Companion_42, 'Companion', objectMeta);
  function cx(value) {
    this.attr_w68641_k$('cx', toString(value));
  }
  function cx_0(value) {
    this.attr_w68641_k$('cx', toString(value));
  }
  function cy(value) {
    this.attr_w68641_k$('cy', toString(value));
  }
  function cy_0(value) {
    this.attr_w68641_k$('cy', toString(value));
  }
  setMetadataFor(CenterCoordinateAttrs, 'CenterCoordinateAttrs', interfaceMeta, VOID, [AttrsScope]);
  setMetadataFor(SVGCircleAttrsScope, 'SVGCircleAttrsScope', classMeta, SVGGraphicalElementAttrsScope, [SVGGraphicalElementAttrsScope, CenterCoordinateAttrs]);
  setMetadataFor(Companion_43, 'Companion', objectMeta);
  setMetadataFor(SVGLineAttrsScope, 'SVGLineAttrsScope', classMeta, SVGGraphicalElementAttrsScope);
  setMetadataFor(Companion_44, 'Companion', objectMeta);
  setMetadataFor(SVGRectAttrsScope, 'SVGRectAttrsScope', classMeta, SVGGraphicalElementAttrsScope, [SVGGraphicalElementAttrsScope, CoordinateAttrs, LengthAttrs]);
  setMetadataFor(Companion_45, 'Companion', objectMeta);
  setMetadataFor(SVGGroupAttrsScope, 'SVGGroupAttrsScope', classMeta, SVGContainerElementAttrsScope);
  setMetadataFor(HttpMethod, 'HttpMethod', classMeta, Enum);
  setMetadataFor(ResponseException, 'ResponseException', classMeta, Exception);
  setMetadataFor(getBodyBytesAsync$slambda, 'getBodyBytesAsync$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor($tryFetchCOROUTINE$0, '$tryFetchCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($getBodyBytesCOROUTINE$1, '$getBodyBytesCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(HttpFetcher, 'HttpFetcher', classMeta, VOID, VOID, VOID, VOID, VOID, [3, 4]);
  setMetadataFor(AbortController_0, 'AbortController', classMeta, VOID, VOID, AbortController_0);
  setMetadataFor(CancellableActionHandle, 'CancellableActionHandle', classMeta);
  //endregion
  function _get_wrapped__s2ip8($this) {
    return $this.wrapped_1;
  }
  function ComparableAttrsScope_init_$Init$($this) {
    ComparableAttrsScope.call($this, new DummyAttrsScope());
    return $this;
  }
  function ComparableAttrsScope_init_$Create$() {
    return ComparableAttrsScope_init_$Init$(objectCreate(protoOf(ComparableAttrsScope)));
  }
  function get_$stableprop() {
    return 8;
  }
  function ComparableAttrsScope(wrapped) {
    this.wrapped_1 = wrapped;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.attributes_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.classes_1 = LinkedHashSet_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_1.listeners_1 = LinkedHashSet_init_$Create$();
    this.style_1 = null;
    this.$stable_1 = 8;
  }
  protoOf(ComparableAttrsScope).get_attributes_dgqof4_k$ = function () {
    return this.attributes_1;
  };
  protoOf(ComparableAttrsScope).get_classes_fds01p_k$ = function () {
    return this.classes_1;
  };
  protoOf(ComparableAttrsScope).get_listeners_bn2kiy_k$ = function () {
    return this.listeners_1;
  };
  protoOf(ComparableAttrsScope).set_style_x1cred_k$ = function (_set____db54di) {
    this.style_1 = _set____db54di;
  };
  protoOf(ComparableAttrsScope).get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  protoOf(ComparableAttrsScope).attr_w68641_k$ = function (attr, value) {
    // Inline function 'kotlin.collections.set' call
    this.attributes_1.put_4fpzoq_k$(attr, value);
    this.wrapped_1.attr_w68641_k$(attr, value);
    return this;
  };
  protoOf(ComparableAttrsScope).classes_ephr7k_k$ = function (classes) {
    this.classes_1.addAll_4lagoh_k$(classes);
  };
  protoOf(ComparableAttrsScope).prop_cha5mt_k$ = function (update, value) {
    this.wrapped_1.prop_cha5mt_k$(update, value);
  };
  protoOf(ComparableAttrsScope).registerEventListener_oiyxlj_k$ = function (listener) {
    this.listeners_1.add_utx5q5_k$(listener);
    this.wrapped_1.registerEventListener_oiyxlj_k$(listener);
  };
  protoOf(ComparableAttrsScope).style_xwwy6r_k$ = function (builder) {
    var tmp0_elvis_lhs = this.style_1;
    var style = tmp0_elvis_lhs == null ? new ComparableStyleScope() : tmp0_elvis_lhs;
    builder(style);
    this.style_1 = style;
    this.wrapped_1.style_xwwy6r_k$(builder);
  };
  protoOf(ComparableAttrsScope).ref_wkg4fv_k$ = function (effect) {
    this.wrapped_1.ref_o4g25g_k$(effect);
  };
  protoOf(ComparableAttrsScope).ref_o4g25g_k$ = function (effect) {
    return this.ref_wkg4fv_k$(effect);
  };
  protoOf(ComparableAttrsScope).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof ComparableAttrsScope) {
      tmp_2 = equals(other.attributes_1, this.attributes_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = equals(other.classes_1, this.classes_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(other.listeners_1, this.listeners_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(other.style_1, this.style_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableAttrsScope).hashCode = function () {
    var result = hashCode(this.attributes_1);
    result = imul(31, result) + hashCode(this.classes_1) | 0;
    result = imul(31, result) + hashCode(this.listeners_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.style_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  function DummyAttrsScope() {
  }
  protoOf(DummyAttrsScope).attr_w68641_k$ = function (attr, value) {
    return this;
  };
  protoOf(DummyAttrsScope).classes_ephr7k_k$ = function (classes) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).prop_cha5mt_k$ = function (update, value) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).registerEventListener_oiyxlj_k$ = function (listener) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).style_xwwy6r_k$ = function (builder) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).ref_wkg4fv_k$ = function (effect) {
    return Unit_getInstance();
  };
  protoOf(DummyAttrsScope).ref_o4g25g_k$ = function (effect) {
    return this.ref_wkg4fv_k$(effect);
  };
  function ariaHidden(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    _this__u8e3s4.attr_w68641_k$('aria-hidden', value.toString());
  }
  function ariaDisabled(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    _this__u8e3s4.attr_w68641_k$('aria-disabled', value.toString());
  }
  function justifyItems(_this__u8e3s4, justifyItems) {
    _this__u8e3s4.property_npxg1h_k$('justify-items', justifyItems);
  }
  function get_$stableprop_0() {
    return 0;
  }
  function get_$stableprop_1() {
    return 0;
  }
  function get_$stableprop_2() {
    return 0;
  }
  function get_$stableprop_3() {
    return 0;
  }
  function _get_value__a43j40($this) {
    return $this.value_1;
  }
  function JustifyItemsKeyword(value) {
    JustifyItems.call(this, value);
    this.$stable_2 = 0;
  }
  function JustifyItemsPosition(value) {
    JustifyItems.call(this, value);
    this.$stable_2 = 0;
  }
  function BaselineAlignment(baselineSet) {
    JustifyItems.call(this, toValue(baselineSet));
    this.$stable_2 = 0;
  }
  function OverflowAlignment(strategy, position) {
    JustifyItems.call(this, toValue_0(strategy, position));
    this.$stable_2 = 0;
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).get_Normal_22avww_k$ = function () {
    return new JustifyItemsKeyword('normal');
  };
  protoOf(Companion).get_Stretch_2brthg_k$ = function () {
    return new JustifyItemsKeyword('stretch');
  };
  protoOf(Companion).get_Center_3arb0i_k$ = function () {
    return new JustifyItemsPosition('center');
  };
  protoOf(Companion).get_Start_ih4i6x_k$ = function () {
    return new JustifyItemsPosition('start');
  };
  protoOf(Companion).get_End_18ju7i_k$ = function () {
    return new JustifyItemsPosition('end');
  };
  protoOf(Companion).get_FlexStart_cfavq8_k$ = function () {
    return new JustifyItemsPosition('flex-start');
  };
  protoOf(Companion).get_FlexEnd_fz7iu1_k$ = function () {
    return new JustifyItemsPosition('flex-end');
  };
  protoOf(Companion).get_SelfStart_di8gbx_k$ = function () {
    return new JustifyItemsPosition('self-start');
  };
  protoOf(Companion).get_SelfEnd_9ir8ka_k$ = function () {
    return new JustifyItemsPosition('self-end');
  };
  protoOf(Companion).get_Left_wo5bw0_k$ = function () {
    return new JustifyItemsPosition('left');
  };
  protoOf(Companion).get_Right_igdsyb_k$ = function () {
    return new JustifyItemsPosition('right');
  };
  protoOf(Companion).get_Baseline_bu5gku_k$ = function () {
    return new BaselineAlignment(null);
  };
  protoOf(Companion).get_FirstBaseline_dztmto_k$ = function () {
    return new BaselineAlignment(BaselineSet_FIRST_getInstance());
  };
  protoOf(Companion).get_LastBaseline_ldoo6c_k$ = function () {
    return new BaselineAlignment(BaselineSet_LAST_getInstance());
  };
  protoOf(Companion).Safe_n4n8gl_k$ = function (position) {
    return new OverflowAlignment(OverflowStrategy_SAFE_getInstance(), position);
  };
  protoOf(Companion).Unsafe_kggy3o_k$ = function (position) {
    return new OverflowAlignment(OverflowStrategy_UNSAFE_getInstance(), position);
  };
  protoOf(Companion).get_Inherit_a1a9e6_k$ = function () {
    return new JustifyItemsKeyword('inherit');
  };
  protoOf(Companion).get_Initial_a0h2v9_k$ = function () {
    return new JustifyItemsKeyword('initial');
  };
  protoOf(Companion).get_Revert_3t1tzh_k$ = function () {
    return new JustifyItemsKeyword('revert');
  };
  protoOf(Companion).get_Unset_ii4mhs_k$ = function () {
    return new JustifyItemsKeyword('unset');
  };
  var Companion_instance;
  function Companion_getInstance_3() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function get_$stableprop_4() {
    return 0;
  }
  function JustifyItems(value) {
    Companion_getInstance_3();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(JustifyItems).toString = function () {
    return this.value_1;
  };
  function justifySelf(_this__u8e3s4, justifySelf) {
    _this__u8e3s4.property_npxg1h_k$('justify-self', justifySelf);
  }
  function get_$stableprop_5() {
    return 0;
  }
  function get_$stableprop_6() {
    return 0;
  }
  function get_$stableprop_7() {
    return 0;
  }
  function get_$stableprop_8() {
    return 0;
  }
  function _get_value__a43j40_0($this) {
    return $this.value_1;
  }
  function JustifySelfKeyword(value) {
    JustifySelf.call(this, value);
    this.$stable_2 = 0;
  }
  function JustifySelfPosition(value) {
    JustifySelf.call(this, value);
    this.$stable_2 = 0;
  }
  function BaselineAlignment_0(baselineSet) {
    JustifySelf.call(this, toValue(baselineSet));
    this.$stable_2 = 0;
  }
  function OverflowAlignment_0(strategy, position) {
    JustifySelf.call(this, toValue_0(strategy, position));
    this.$stable_2 = 0;
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).get_Auto_wnyn88_k$ = function () {
    return new JustifySelfKeyword('auto');
  };
  protoOf(Companion_0).get_Normal_22avww_k$ = function () {
    return new JustifySelfKeyword('normal');
  };
  protoOf(Companion_0).get_Stretch_2brthg_k$ = function () {
    return new JustifySelfKeyword('stretch');
  };
  protoOf(Companion_0).get_Center_3arb0i_k$ = function () {
    return new JustifySelfPosition('center');
  };
  protoOf(Companion_0).get_Start_ih4i6x_k$ = function () {
    return new JustifySelfPosition('start');
  };
  protoOf(Companion_0).get_End_18ju7i_k$ = function () {
    return new JustifySelfPosition('end');
  };
  protoOf(Companion_0).get_SelfStart_di8gbx_k$ = function () {
    return new JustifySelfPosition('self-start');
  };
  protoOf(Companion_0).get_SelfEnd_9ir8ka_k$ = function () {
    return new JustifySelfPosition('self-end');
  };
  protoOf(Companion_0).get_FlexStart_cfavq8_k$ = function () {
    return new JustifySelfPosition('flex-start');
  };
  protoOf(Companion_0).get_FlexEnd_fz7iu1_k$ = function () {
    return new JustifySelfPosition('flex-end');
  };
  protoOf(Companion_0).get_Left_wo5bw0_k$ = function () {
    return new JustifySelfPosition('left');
  };
  protoOf(Companion_0).get_Right_igdsyb_k$ = function () {
    return new JustifySelfPosition('right');
  };
  protoOf(Companion_0).get_Baseline_bu5gku_k$ = function () {
    return new BaselineAlignment_0(null);
  };
  protoOf(Companion_0).get_FirstBaseline_dztmto_k$ = function () {
    return new BaselineAlignment_0(BaselineSet_FIRST_getInstance());
  };
  protoOf(Companion_0).get_LastBaseline_ldoo6c_k$ = function () {
    return new BaselineAlignment_0(BaselineSet_LAST_getInstance());
  };
  protoOf(Companion_0).Safe_wxt3v1_k$ = function (position) {
    return new OverflowAlignment_0(OverflowStrategy_SAFE_getInstance(), position);
  };
  protoOf(Companion_0).Unsafe_jz6bzo_k$ = function (position) {
    return new OverflowAlignment_0(OverflowStrategy_UNSAFE_getInstance(), position);
  };
  protoOf(Companion_0).get_Inherit_a1a9e6_k$ = function () {
    return new JustifySelfKeyword('inherit');
  };
  protoOf(Companion_0).get_Initial_a0h2v9_k$ = function () {
    return new JustifySelfKeyword('initial');
  };
  protoOf(Companion_0).get_Revert_3t1tzh_k$ = function () {
    return new JustifySelfKeyword('revert');
  };
  protoOf(Companion_0).get_Unset_ii4mhs_k$ = function () {
    return new JustifySelfKeyword('unset');
  };
  var Companion_instance_0;
  function Companion_getInstance_4() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function get_$stableprop_9() {
    return 0;
  }
  function JustifySelf(value) {
    Companion_getInstance_4();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(JustifySelf).toString = function () {
    return this.value_1;
  };
  var BaselineSet_FIRST_instance;
  var BaselineSet_LAST_instance;
  function values() {
    return [BaselineSet_FIRST_getInstance(), BaselineSet_LAST_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'FIRST':
        return BaselineSet_FIRST_getInstance();
      case 'LAST':
        return BaselineSet_LAST_getInstance();
      default:
        BaselineSet_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var BaselineSet_entriesInitialized;
  function BaselineSet_initEntries() {
    if (BaselineSet_entriesInitialized)
      return Unit_getInstance();
    BaselineSet_entriesInitialized = true;
    BaselineSet_FIRST_instance = new BaselineSet('FIRST', 0);
    BaselineSet_LAST_instance = new BaselineSet('LAST', 1);
  }
  var $ENTRIES;
  function BaselineSet(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function toValue(_this__u8e3s4) {
    var self_0 = _this__u8e3s4;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.toValue.<anonymous>' call
    if (!(self_0 == null)) {
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = self_0.get_name_woqyms_k$().toLowerCase();
      this_0.append_22ad7x_k$(tmp$ret$1);
      this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(32));
    }
    this_0.append_22ad7x_k$('baseline');
    return this_0.toString();
  }
  var OverflowStrategy_SAFE_instance;
  var OverflowStrategy_UNSAFE_instance;
  function values_0() {
    return [OverflowStrategy_SAFE_getInstance(), OverflowStrategy_UNSAFE_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'SAFE':
        return OverflowStrategy_SAFE_getInstance();
      case 'UNSAFE':
        return OverflowStrategy_UNSAFE_getInstance();
      default:
        OverflowStrategy_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var OverflowStrategy_entriesInitialized;
  function OverflowStrategy_initEntries() {
    if (OverflowStrategy_entriesInitialized)
      return Unit_getInstance();
    OverflowStrategy_entriesInitialized = true;
    OverflowStrategy_SAFE_instance = new OverflowStrategy('SAFE', 0);
    OverflowStrategy_UNSAFE_instance = new OverflowStrategy('UNSAFE', 1);
  }
  var $ENTRIES_0;
  function OverflowStrategy(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function toValue_0(_this__u8e3s4, position) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.get_name_woqyms_k$().toLowerCase() + ' ' + position;
  }
  function BaselineSet_FIRST_getInstance() {
    BaselineSet_initEntries();
    return BaselineSet_FIRST_instance;
  }
  function BaselineSet_LAST_getInstance() {
    BaselineSet_initEntries();
    return BaselineSet_LAST_instance;
  }
  function OverflowStrategy_SAFE_getInstance() {
    OverflowStrategy_initEntries();
    return OverflowStrategy_SAFE_instance;
  }
  function OverflowStrategy_UNSAFE_getInstance() {
    OverflowStrategy_initEntries();
    return OverflowStrategy_UNSAFE_instance;
  }
  function get_$stableprop_10() {
    return 0;
  }
  function CSSAnimation(name, duration, timingFunction, delay, iterationCount, direction, fillMode, playState) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    iterationCount = iterationCount === VOID ? null : iterationCount;
    direction = direction === VOID ? null : direction;
    fillMode = fillMode === VOID ? null : fillMode;
    playState = playState === VOID ? null : playState;
    this.name_1 = name;
    this.duration_1 = duration;
    this.timingFunction_1 = timingFunction;
    this.delay_1 = delay;
    this.iterationCount_1 = iterationCount;
    this.direction_1 = direction;
    this.fillMode_1 = fillMode;
    this.playState_1 = playState;
    this.$stable_1 = 0;
  }
  protoOf(CSSAnimation).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(CSSAnimation).get_duration_6a6kpp_k$ = function () {
    return this.duration_1;
  };
  protoOf(CSSAnimation).get_timingFunction_3u6rat_k$ = function () {
    return this.timingFunction_1;
  };
  protoOf(CSSAnimation).get_delay_iq7n8a_k$ = function () {
    return this.delay_1;
  };
  protoOf(CSSAnimation).get_iterationCount_v1jcn9_k$ = function () {
    return this.iterationCount_1;
  };
  protoOf(CSSAnimation).get_direction_7ekune_k$ = function () {
    return this.direction_1;
  };
  protoOf(CSSAnimation).get_fillMode_r5zfyn_k$ = function () {
    return this.fillMode_1;
  };
  protoOf(CSSAnimation).get_playState_mpwkbw_k$ = function () {
    return this.playState_1;
  };
  protoOf(CSSAnimation).toString = function () {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>' call
    var tmp0_safe_receiver = this.duration_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>.<anonymous>' call
      this_0.add_utx5q5_k$(toString(tmp0_safe_receiver));
    }
    var tmp1_safe_receiver = this.timingFunction_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>.<anonymous>' call
      this_0.add_utx5q5_k$(toString(tmp1_safe_receiver));
    }
    if (!(this.delay_1 == null)) {
      if (this.duration_1 == null) {
        this_0.add_utx5q5_k$('0s');
      }
      this_0.add_utx5q5_k$(toString(this.delay_1));
    }
    var tmp2_safe_receiver = this.iterationCount_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>.<anonymous>' call
      var it = tmp2_safe_receiver.count_1;
      this_0.add_utx5q5_k$(AnimationIterationCount__toString_impl_5t3trp(it));
    }
    var tmp3_safe_receiver = this.direction_1;
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>.<anonymous>' call
      this_0.add_utx5q5_k$(toString(tmp3_safe_receiver));
    }
    var tmp4_safe_receiver = this.fillMode_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>.<anonymous>' call
      this_0.add_utx5q5_k$(toString(tmp4_safe_receiver));
    }
    var tmp5_safe_receiver = this.playState_1;
    if (tmp5_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSAnimation.toString.<anonymous>.<anonymous>' call
      this_0.add_utx5q5_k$(toString(tmp5_safe_receiver));
    }
    this_0.add_utx5q5_k$(this.name_1);
    var tmp$ret$14 = this_0.build_1k0s4u_k$();
    return joinToString(tmp$ret$14, ' ');
  };
  protoOf(CSSAnimation).component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  protoOf(CSSAnimation).component2_7eebsb_k$ = function () {
    return this.duration_1;
  };
  protoOf(CSSAnimation).component3_7eebsa_k$ = function () {
    return this.timingFunction_1;
  };
  protoOf(CSSAnimation).component4_7eebs9_k$ = function () {
    return this.delay_1;
  };
  protoOf(CSSAnimation).component5_7eebs8_k$ = function () {
    return this.iterationCount_1;
  };
  protoOf(CSSAnimation).component6_7eebs7_k$ = function () {
    return this.direction_1;
  };
  protoOf(CSSAnimation).component7_7eebs6_k$ = function () {
    return this.fillMode_1;
  };
  protoOf(CSSAnimation).component8_7eebs5_k$ = function () {
    return this.playState_1;
  };
  protoOf(CSSAnimation).copy_84w5es_k$ = function (name, duration, timingFunction, delay, iterationCount, direction, fillMode, playState) {
    return new CSSAnimation(name, duration, timingFunction, delay, iterationCount, direction, fillMode, playState);
  };
  protoOf(CSSAnimation).copy$default_mv7ex9_k$ = function (name, duration, timingFunction, delay, iterationCount, direction, fillMode, playState, $super) {
    name = name === VOID ? this.name_1 : name;
    duration = duration === VOID ? this.duration_1 : duration;
    timingFunction = timingFunction === VOID ? this.timingFunction_1 : timingFunction;
    delay = delay === VOID ? this.delay_1 : delay;
    iterationCount = iterationCount === VOID ? this.iterationCount_1 : iterationCount;
    direction = direction === VOID ? this.direction_1 : direction;
    fillMode = fillMode === VOID ? this.fillMode_1 : fillMode;
    playState = playState === VOID ? this.playState_1 : playState;
    return $super === VOID ? this.copy_84w5es_k$(name, duration, timingFunction, delay, iterationCount, direction, fillMode, playState) : $super.copy_84w5es_k$.call(this, name, duration, timingFunction, delay, iterationCount, direction, fillMode, playState);
  };
  protoOf(CSSAnimation).hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + (this.duration_1 == null ? 0 : hashCode(this.duration_1)) | 0;
    result = imul(result, 31) + (this.timingFunction_1 == null ? 0 : hashCode(this.timingFunction_1)) | 0;
    result = imul(result, 31) + (this.delay_1 == null ? 0 : hashCode(this.delay_1)) | 0;
    result = imul(result, 31) + (this.iterationCount_1 == null ? 0 : AnimationIterationCount__hashCode_impl_rk9qkk(this.iterationCount_1.count_1)) | 0;
    result = imul(result, 31) + (this.direction_1 == null ? 0 : hashCode(this.direction_1)) | 0;
    result = imul(result, 31) + (this.fillMode_1 == null ? 0 : hashCode(this.fillMode_1)) | 0;
    result = imul(result, 31) + (this.playState_1 == null ? 0 : hashCode(this.playState_1)) | 0;
    return result;
  };
  protoOf(CSSAnimation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSAnimation))
      return false;
    var tmp0_other_with_cast = other instanceof CSSAnimation ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!equals(this.duration_1, tmp0_other_with_cast.duration_1))
      return false;
    if (!equals(this.timingFunction_1, tmp0_other_with_cast.timingFunction_1))
      return false;
    if (!equals(this.delay_1, tmp0_other_with_cast.delay_1))
      return false;
    if (!equals(this.iterationCount_1, tmp0_other_with_cast.iterationCount_1))
      return false;
    if (!equals(this.direction_1, tmp0_other_with_cast.direction_1))
      return false;
    if (!equals(this.fillMode_1, tmp0_other_with_cast.fillMode_1))
      return false;
    if (!equals(this.playState_1, tmp0_other_with_cast.playState_1))
      return false;
    return true;
  };
  function _AnimationIterationCount___init__impl__ggrejh(count) {
    return count;
  }
  function _get_count__iw3m8u($this) {
    return $this;
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).of_87f8vv_k$ = function (count) {
    return _AnimationIterationCount___init__impl__ggrejh(count);
  };
  protoOf(Companion_1).get_Infinite_crqs2a_k$ = function () {
    return _AnimationIterationCount___init__impl__ggrejh(null);
  };
  var Companion_instance_1;
  function Companion_getInstance_5() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function AnimationIterationCount__toString_impl_5t3trp($this) {
    var tmp0_safe_receiver = _get_count__iw3m8u($this);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toString(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 'infinite' : tmp1_elvis_lhs;
  }
  function AnimationIterationCount__hashCode_impl_rk9qkk($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function AnimationIterationCount__equals_impl_n1qe1k($this, other) {
    if (!(other instanceof AnimationIterationCount))
      return false;
    var tmp0_other_with_cast = other instanceof AnimationIterationCount ? other.count_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function AnimationIterationCount(count) {
    Companion_getInstance_5();
    this.count_1 = count;
  }
  protoOf(AnimationIterationCount).toString = function () {
    return AnimationIterationCount__toString_impl_5t3trp(this.count_1);
  };
  protoOf(AnimationIterationCount).hashCode = function () {
    return AnimationIterationCount__hashCode_impl_rk9qkk(this.count_1);
  };
  protoOf(AnimationIterationCount).equals = function (other) {
    return AnimationIterationCount__equals_impl_n1qe1k(this.count_1, other);
  };
  function animation(_this__u8e3s4, animations) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(animations.length === 0)) {
      _this__u8e3s4.property_wcrait_k$('animation', joinToString_0(animations, ', '));
    }
  }
  function get_$stableprop_11() {
    return 0;
  }
  function CSSBackground(image, repeat, size, position, blend, origin, clip, attachment) {
    image = image === VOID ? null : image;
    repeat = repeat === VOID ? null : repeat;
    size = size === VOID ? null : size;
    position = position === VOID ? null : position;
    blend = blend === VOID ? null : blend;
    origin = origin === VOID ? null : origin;
    clip = clip === VOID ? null : clip;
    attachment = attachment === VOID ? null : attachment;
    this.image_1 = image;
    this.repeat_1 = repeat;
    this.size_1 = size;
    this.position_1 = position;
    this.blend_1 = blend;
    this.origin_1 = origin;
    this.clip_1 = clip;
    this.attachment_1 = attachment;
    this.$stable_1 = 0;
  }
  protoOf(CSSBackground).get_image_it3i2a_k$ = function () {
    return this.image_1;
  };
  protoOf(CSSBackground).get_repeat_iydw9w_k$ = function () {
    return this.repeat_1;
  };
  protoOf(CSSBackground).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(CSSBackground).get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  protoOf(CSSBackground).get_blend_ip8e20_k$ = function () {
    return this.blend_1;
  };
  protoOf(CSSBackground).get_origin_hq9xkf_k$ = function () {
    return this.origin_1;
  };
  protoOf(CSSBackground).get_clip_wok5uh_k$ = function () {
    return this.clip_1;
  };
  protoOf(CSSBackground).get_attachment_iduc30_k$ = function () {
    return this.attachment_1;
  };
  protoOf(CSSBackground).toString = function () {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.CSSBackground.toString.<anonymous>' call
    var tmp0_safe_receiver = this.image_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSBackground.toString.<anonymous>.<anonymous>' call
      this_0.add_utx5q5_k$(tmp0_safe_receiver.toString());
    }
    var tmp1_safe_receiver = this.repeat_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSBackground.toString.<anonymous>.<anonymous>' call
      this_0.add_utx5q5_k$(tmp1_safe_receiver);
    }
    var tmp2_safe_receiver = this.position_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSBackground.toString.<anonymous>.<anonymous>' call
      this_0.add_utx5q5_k$(tmp2_safe_receiver.toString());
    }
    var tmp3_safe_receiver = this.size_1;
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSBackground.toString.<anonymous>.<anonymous>' call
      if (this.position_1 == null) {
        this_0.add_utx5q5_k$(Companion_getInstance_8().of_ke4f5d_k$(Companion_getInstance_13().get_TopLeft_9xuhv7_k$()));
      }
      this_0.add_utx5q5_k$('/');
      this_0.add_utx5q5_k$(tmp3_safe_receiver.toString());
    }
    var tmp4_safe_receiver = this.origin_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this_0.add_utx5q5_k$(tmp4_safe_receiver);
      var tmp;
      if (this.clip_1 == null) {
        this_0.add_utx5q5_k$(Companion_getInstance_10().get_BorderBox_q3yb4a_k$().toString());
        tmp = Unit_getInstance();
      }
    }
    var tmp5_safe_receiver = this.clip_1;
    if (tmp5_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSBackground.toString.<anonymous>.<anonymous>' call
      if (this.origin_1 == null) {
        this_0.add_utx5q5_k$(Companion_getInstance_9().get_PaddingBox_ea98df_k$().toString());
      }
      this_0.add_utx5q5_k$(tmp5_safe_receiver);
    }
    var tmp6_safe_receiver = this.attachment_1;
    if (tmp6_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this_0.add_utx5q5_k$(tmp6_safe_receiver);
    }
    var tmp$ret$14 = this_0.build_1k0s4u_k$();
    return joinToString(tmp$ret$14, ' ');
  };
  protoOf(CSSBackground).component1_7eebsc_k$ = function () {
    return this.image_1;
  };
  protoOf(CSSBackground).component2_7eebsb_k$ = function () {
    return this.repeat_1;
  };
  protoOf(CSSBackground).component3_7eebsa_k$ = function () {
    return this.size_1;
  };
  protoOf(CSSBackground).component4_7eebs9_k$ = function () {
    return this.position_1;
  };
  protoOf(CSSBackground).component5_7eebs8_k$ = function () {
    return this.blend_1;
  };
  protoOf(CSSBackground).component6_7eebs7_k$ = function () {
    return this.origin_1;
  };
  protoOf(CSSBackground).component7_7eebs6_k$ = function () {
    return this.clip_1;
  };
  protoOf(CSSBackground).component8_7eebs5_k$ = function () {
    return this.attachment_1;
  };
  protoOf(CSSBackground).copy_5ihszb_k$ = function (image, repeat, size, position, blend, origin, clip, attachment) {
    return new CSSBackground(image, repeat, size, position, blend, origin, clip, attachment);
  };
  protoOf(CSSBackground).copy$default_jrt400_k$ = function (image, repeat, size, position, blend, origin, clip, attachment, $super) {
    image = image === VOID ? this.image_1 : image;
    repeat = repeat === VOID ? this.repeat_1 : repeat;
    size = size === VOID ? this.size_1 : size;
    position = position === VOID ? this.position_1 : position;
    blend = blend === VOID ? this.blend_1 : blend;
    origin = origin === VOID ? this.origin_1 : origin;
    clip = clip === VOID ? this.clip_1 : clip;
    attachment = attachment === VOID ? this.attachment_1 : attachment;
    return $super === VOID ? this.copy_5ihszb_k$(image, repeat, size, position, blend, origin, clip, attachment) : $super.copy_5ihszb_k$.call(this, image, repeat, size, position, blend, origin, clip, attachment);
  };
  protoOf(CSSBackground).hashCode = function () {
    var result = this.image_1 == null ? 0 : hashCode(this.image_1);
    result = imul(result, 31) + (this.repeat_1 == null ? 0 : hashCode(this.repeat_1)) | 0;
    result = imul(result, 31) + (this.size_1 == null ? 0 : hashCode(this.size_1)) | 0;
    result = imul(result, 31) + (this.position_1 == null ? 0 : hashCode(this.position_1)) | 0;
    result = imul(result, 31) + (this.blend_1 == null ? 0 : hashCode(this.blend_1)) | 0;
    result = imul(result, 31) + (this.origin_1 == null ? 0 : hashCode(this.origin_1)) | 0;
    result = imul(result, 31) + (this.clip_1 == null ? 0 : hashCode(this.clip_1)) | 0;
    result = imul(result, 31) + (this.attachment_1 == null ? 0 : hashCode(this.attachment_1)) | 0;
    return result;
  };
  protoOf(CSSBackground).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSBackground))
      return false;
    var tmp0_other_with_cast = other instanceof CSSBackground ? other : THROW_CCE();
    if (!equals(this.image_1, tmp0_other_with_cast.image_1))
      return false;
    if (!equals(this.repeat_1, tmp0_other_with_cast.repeat_1))
      return false;
    if (!equals(this.size_1, tmp0_other_with_cast.size_1))
      return false;
    if (!equals(this.position_1, tmp0_other_with_cast.position_1))
      return false;
    if (!equals(this.blend_1, tmp0_other_with_cast.blend_1))
      return false;
    if (!equals(this.origin_1, tmp0_other_with_cast.origin_1))
      return false;
    if (!equals(this.clip_1, tmp0_other_with_cast.clip_1))
      return false;
    if (!equals(this.attachment_1, tmp0_other_with_cast.attachment_1))
      return false;
    return true;
  };
  function background(_this__u8e3s4, color, backgrounds) {
    var backgrounds_0 = reversed(backgrounds);
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.background.<anonymous>' call
    this_0.append_22ad7x_k$(joinToString(backgrounds_0, ', '));
    if (!(color == null)) {
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(this_0) > 0) {
        this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(32));
      }
      this_0.append_t8pm91_k$(color);
    }
    var tmp$ret$2 = this_0.toString();
    _this__u8e3s4.property_wcrait_k$('background', tmp$ret$2);
    var defaultBlendMode = Companion_getInstance_23().get_Normal_22avww_k$();
    // Inline function 'kotlin.takeIf' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(backgrounds_0, 10));
    var tmp0_iterator = backgrounds_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.compose.css.background.<anonymous>' call
      var tmp0_elvis_lhs = item.blend_1;
      var tmp$ret$3 = tmp0_elvis_lhs == null ? defaultBlendMode : tmp0_elvis_lhs;
      destination.add_utx5q5_k$(tmp$ret$3);
    }
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'com.varabyte.kobweb.compose.css.background.<anonymous>' call
    var tmp$ret$6;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_0;
      if (isInterface(destination, Collection)) {
        tmp_0 = destination.isEmpty_y1axqb_k$();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$6 = false;
        break $l$block_0;
      }
      var tmp0_iterator_0 = destination.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator_0.next_20eer_k$();
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
      _this__u8e3s4.property_wcrait_k$('background-blend-mode', joinToString(blendModes));
    }
  }
  function backgroundImage_0(_this__u8e3s4, gradient) {
    return backgroundImage_1(_this__u8e3s4, Companion_getInstance_36().of_jjeryt_k$(gradient));
  }
  function get_$stableprop_12() {
    return 0;
  }
  function _get_value__a43j40_1($this) {
    return $this.value_1;
  }
  function Keyword(value) {
    BackgroundRepeat.call(this, value);
  }
  function RepeatStyle(value) {
    BackgroundRepeat.call(this, value);
    this.$stable_2 = 0;
  }
  function TwoValue(horizontal, vertical) {
    BackgroundRepeat.call(this, '' + horizontal + ' ' + vertical);
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).of_uj79nz_k$ = function (horizontal, vertical) {
    return new TwoValue(horizontal, vertical);
  };
  protoOf(Companion_2).get_RepeatX_o4yei4_k$ = function () {
    return new Keyword('repeat-x');
  };
  protoOf(Companion_2).get_RepeatY_o4yei3_k$ = function () {
    return new Keyword('repeat-y');
  };
  protoOf(Companion_2).get_Repeat_3sxzno_k$ = function () {
    return new RepeatStyle('repeat');
  };
  protoOf(Companion_2).get_Space_ih1xvh_k$ = function () {
    return new RepeatStyle('space');
  };
  protoOf(Companion_2).get_Round_ighxdx_k$ = function () {
    return new RepeatStyle('round');
  };
  protoOf(Companion_2).get_NoRepeat_ko4dp7_k$ = function () {
    return new RepeatStyle('no-repeat');
  };
  protoOf(Companion_2).get_Inherit_a1a9e6_k$ = function () {
    return new Keyword('inherit');
  };
  protoOf(Companion_2).get_Initial_a0h2v9_k$ = function () {
    return new Keyword('initial');
  };
  protoOf(Companion_2).get_Revert_3t1tzh_k$ = function () {
    return new Keyword('revert');
  };
  protoOf(Companion_2).get_Unset_ii4mhs_k$ = function () {
    return new Keyword('unset');
  };
  var Companion_instance_2;
  function Companion_getInstance_6() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function get_$stableprop_13() {
    return 0;
  }
  function BackgroundRepeat(value) {
    Companion_getInstance_6();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(BackgroundRepeat).toString = function () {
    return this.value_1;
  };
  function _get_value__a43j40_2($this) {
    return $this.value_1;
  }
  function Keyword_0(value) {
    BackgroundSize.call(this, value);
  }
  function Size(value) {
    BackgroundSize.call(this, value);
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  protoOf(Companion_3).of_bnlfbt_k$ = function (width) {
    return new Size('' + width);
  };
  protoOf(Companion_3).of_5s0ir0_k$ = function (width) {
    return new Size('' + width);
  };
  protoOf(Companion_3).of_7ht9sn_k$ = function (width, height) {
    return new Size('' + width + ' ' + height);
  };
  protoOf(Companion_3).of_89wy16_k$ = function (width, height) {
    return new Size('' + width + ' ' + height);
  };
  protoOf(Companion_3).of_1gkwv8_k$ = function (width, height) {
    return new Size('' + width + ' ' + height);
  };
  protoOf(Companion_3).get_Cover_i8910u_k$ = function () {
    return new Keyword_0('cover');
  };
  protoOf(Companion_3).get_Contain_qhyalx_k$ = function () {
    return new Keyword_0('contain');
  };
  protoOf(Companion_3).get_Inherit_a1a9e6_k$ = function () {
    return new Keyword_0('inherit');
  };
  protoOf(Companion_3).get_Initial_a0h2v9_k$ = function () {
    return new Keyword_0('initial');
  };
  protoOf(Companion_3).get_Revert_3t1tzh_k$ = function () {
    return new Keyword_0('revert');
  };
  protoOf(Companion_3).get_Unset_ii4mhs_k$ = function () {
    return new Keyword_0('unset');
  };
  var Companion_instance_3;
  function Companion_getInstance_7() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function get_$stableprop_14() {
    return 0;
  }
  function BackgroundSize(value) {
    Companion_getInstance_7();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(BackgroundSize).toString = function () {
    return this.value_1;
  };
  function _get_value__a43j40_3($this) {
    return $this.value_1;
  }
  function Keyword_1(value) {
    BackgroundPosition.call(this, value);
  }
  function Position(position) {
    BackgroundPosition.call(this, '' + position);
  }
  function Companion_4() {
    Companion_instance_4 = this;
  }
  protoOf(Companion_4).of_ke4f5d_k$ = function (position) {
    return new Position(position);
  };
  protoOf(Companion_4).get_Inherit_a1a9e6_k$ = function () {
    return new Keyword_1('inherit');
  };
  protoOf(Companion_4).get_Initial_a0h2v9_k$ = function () {
    return new Keyword_1('initial');
  };
  protoOf(Companion_4).get_Revert_3t1tzh_k$ = function () {
    return new Keyword_1('revert');
  };
  protoOf(Companion_4).get_Unset_ii4mhs_k$ = function () {
    return new Keyword_1('unset');
  };
  var Companion_instance_4;
  function Companion_getInstance_8() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function get_$stableprop_15() {
    return 0;
  }
  function BackgroundPosition(value) {
    Companion_getInstance_8();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(BackgroundPosition).toString = function () {
    return this.value_1;
  };
  function _get_value__a43j40_4($this) {
    return $this.value_1;
  }
  function Companion_5() {
    Companion_instance_5 = this;
  }
  protoOf(Companion_5).get_BorderBox_q3yb4a_k$ = function () {
    return new BackgroundOrigin('border-box');
  };
  protoOf(Companion_5).get_PaddingBox_ea98df_k$ = function () {
    return new BackgroundOrigin('padding-box');
  };
  protoOf(Companion_5).get_ContentBox_h63h2z_k$ = function () {
    return new BackgroundOrigin('content-box');
  };
  protoOf(Companion_5).get_Inherit_a1a9e6_k$ = function () {
    return new BackgroundOrigin('inherit');
  };
  protoOf(Companion_5).get_Initial_a0h2v9_k$ = function () {
    return new BackgroundOrigin('initial');
  };
  protoOf(Companion_5).get_Revert_3t1tzh_k$ = function () {
    return new BackgroundOrigin('revert');
  };
  protoOf(Companion_5).get_Unset_ii4mhs_k$ = function () {
    return new BackgroundOrigin('unset');
  };
  var Companion_instance_5;
  function Companion_getInstance_9() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function get_$stableprop_16() {
    return 0;
  }
  function BackgroundOrigin(value) {
    Companion_getInstance_9();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(BackgroundOrigin).toString = function () {
    return this.value_1;
  };
  function _get_value__a43j40_5($this) {
    return $this.value_1;
  }
  function Companion_6() {
    Companion_instance_6 = this;
  }
  protoOf(Companion_6).get_BorderBox_q3yb4a_k$ = function () {
    return new BackgroundClip('border-box');
  };
  protoOf(Companion_6).get_PaddingBox_ea98df_k$ = function () {
    return new BackgroundClip('padding-box');
  };
  protoOf(Companion_6).get_ContentBox_h63h2z_k$ = function () {
    return new BackgroundClip('content-box');
  };
  protoOf(Companion_6).get_Text_woag7q_k$ = function () {
    return new BackgroundClip('text');
  };
  protoOf(Companion_6).get_Inherit_a1a9e6_k$ = function () {
    return new BackgroundClip('inherit');
  };
  protoOf(Companion_6).get_Initial_a0h2v9_k$ = function () {
    return new BackgroundClip('initial');
  };
  protoOf(Companion_6).get_Revert_3t1tzh_k$ = function () {
    return new BackgroundClip('revert');
  };
  protoOf(Companion_6).get_Unset_ii4mhs_k$ = function () {
    return new BackgroundClip('unset');
  };
  var Companion_instance_6;
  function Companion_getInstance_10() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function get_$stableprop_17() {
    return 0;
  }
  function BackgroundClip(value) {
    Companion_getInstance_10();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(BackgroundClip).toString = function () {
    return this.value_1;
  };
  function _get_value__a43j40_6($this) {
    return $this.value_1;
  }
  function Companion_7() {
    Companion_instance_7 = this;
  }
  protoOf(Companion_7).get_Scroll_48xiie_k$ = function () {
    return new BackgroundAttachment('scroll');
  };
  protoOf(Companion_7).get_Fixed_i9smcr_k$ = function () {
    return new BackgroundAttachment('fixed');
  };
  protoOf(Companion_7).get_Local_id6s6a_k$ = function () {
    return new BackgroundAttachment('local');
  };
  protoOf(Companion_7).get_Inherit_a1a9e6_k$ = function () {
    return new BackgroundAttachment('inherit');
  };
  protoOf(Companion_7).get_Initial_a0h2v9_k$ = function () {
    return new BackgroundAttachment('initial');
  };
  protoOf(Companion_7).get_Revert_3t1tzh_k$ = function () {
    return new BackgroundAttachment('revert');
  };
  protoOf(Companion_7).get_Unset_ii4mhs_k$ = function () {
    return new BackgroundAttachment('unset');
  };
  var Companion_instance_7;
  function Companion_getInstance_11() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function get_$stableprop_18() {
    return 0;
  }
  function BackgroundAttachment(value) {
    Companion_getInstance_11();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(BackgroundAttachment).toString = function () {
    return this.value_1;
  };
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
    _this__u8e3s4.property_npxg1h_k$('border-color', color);
  }
  function borderStyle(_this__u8e3s4, lineStyle) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.property_wcrait_k$('border-style', lineStyle);
  }
  function borderWidth(_this__u8e3s4, width) {
    _this__u8e3s4.property_npxg1h_k$('border-width', width);
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
    _this__u8e3s4.property_npxg1h_k$('border-bottom', this_0);
  }
  function borderTop_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(this_0);
    _this__u8e3s4.property_npxg1h_k$('border-top', this_0);
  }
  function borderLeft_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(this_0);
    _this__u8e3s4.property_npxg1h_k$('border-left', this_0);
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
      return Unit_getInstance();
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
      return Unit_getInstance();
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
      return Unit_getInstance();
    };
  }
  function _get_value__a43j40_7($this) {
    return $this.value_1;
  }
  function Companion_8() {
    Companion_instance_8 = this;
  }
  protoOf(Companion_8).get_BorderBox_q3yb4a_k$ = function () {
    return new BoxSizing('border-box');
  };
  protoOf(Companion_8).get_ContentBox_h63h2z_k$ = function () {
    return new BoxSizing('content-box');
  };
  protoOf(Companion_8).get_Inherit_a1a9e6_k$ = function () {
    return new BoxSizing('inherit');
  };
  protoOf(Companion_8).get_Initial_a0h2v9_k$ = function () {
    return new BoxSizing('initial');
  };
  protoOf(Companion_8).get_Revert_3t1tzh_k$ = function () {
    return new BoxSizing('revert');
  };
  protoOf(Companion_8).get_Unset_ii4mhs_k$ = function () {
    return new BoxSizing('unset');
  };
  var Companion_instance_8;
  function Companion_getInstance_12() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function get_$stableprop_19() {
    return 0;
  }
  function BoxSizing(value) {
    Companion_getInstance_12();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(BoxSizing).toString = function () {
    return this.value_1;
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
      this_0.append_22ad7x_k$('inset');
      this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(32));
    }
    this_0.append_t8pm91_k$(offsetX);
    this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(32));
    this_0.append_t8pm91_k$(offsetY);
    if (!(blurRadius == null)) {
      this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(32));
      this_0.append_t8pm91_k$(blurRadius);
    }
    if (!(spreadRadius == null)) {
      if (blurRadius == null) {
        this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(32));
        this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(48));
      }
      this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(32));
      this_0.append_t8pm91_k$(spreadRadius);
    }
    if (!(color == null)) {
      this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(32));
      this_0.append_t8pm91_k$(color);
    }
    var tmp$ret$1 = this_0.toString();
    boxShadow_0(_this__u8e3s4, tmp$ret$1);
  }
  function boxSizing_0(_this__u8e3s4, boxSizing_0) {
    boxSizing(_this__u8e3s4, boxSizing_0.toString());
  }
  function boxShadow_0(_this__u8e3s4, value) {
    _this__u8e3s4.property_wcrait_k$('box-shadow', value);
  }
  function _get_value__a43j40_8($this) {
    return $this.value_1;
  }
  function CSSPosition_init_$Init$(x, y, $this) {
    x = x === VOID ? get_percent(50) : x;
    y = y === VOID ? get_percent(50) : y;
    CSSPosition.call($this, '' + x + ' ' + y);
    return $this;
  }
  function CSSPosition_init_$Create$(x, y) {
    return CSSPosition_init_$Init$(x, y, objectCreate(protoOf(CSSPosition)));
  }
  function CSSPosition_init_$Init$_0(xAnchor, $this) {
    CSSPosition.call($this, '' + xAnchor);
    return $this;
  }
  function CSSPosition_init_$Create$_0(xAnchor) {
    return CSSPosition_init_$Init$_0(xAnchor, objectCreate(protoOf(CSSPosition)));
  }
  function CSSPosition_init_$Init$_1(yAnchor, $this) {
    CSSPosition.call($this, '' + toOffset(Companion_getInstance_14().get_CenterX_v8efdy_k$()) + ' ' + toOffset_0(yAnchor));
    return $this;
  }
  function CSSPosition_init_$Create$_1(yAnchor) {
    return CSSPosition_init_$Init$_1(yAnchor, objectCreate(protoOf(CSSPosition)));
  }
  function CSSPosition_init_$Init$_2(xAnchor, yAnchor, $this) {
    CSSPosition_init_$Init$_14(toOffset(xAnchor), toOffset_0(yAnchor), $this);
    return $this;
  }
  function CSSPosition_init_$Create$_2(xAnchor, yAnchor) {
    return CSSPosition_init_$Init$_2(xAnchor, yAnchor, objectCreate(protoOf(CSSPosition)));
  }
  function CSSPosition_init_$Init$_3(xAnchor, xOffset, $this) {
    CSSPosition_init_$Init$_4(xAnchor.invoke_wfll5y_k$(xOffset), $this);
    return $this;
  }
  function CSSPosition_init_$Create$_3(xAnchor, xOffset) {
    return CSSPosition_init_$Init$_3(xAnchor, xOffset, objectCreate(protoOf(CSSPosition)));
  }
  function CSSPosition_init_$Init$_4(xOffset, $this) {
    CSSPosition_init_$Init$_14(xOffset, toOffset_0(Companion_getInstance_14().get_CenterY_v8efdx_k$()), $this);
    return $this;
  }
  function CSSPosition_init_$Create$_4(xOffset) {
    return CSSPosition_init_$Init$_4(xOffset, objectCreate(protoOf(CSSPosition)));
  }
  function CSSPosition_init_$Init$_5(yAnchor, yOffset, $this) {
    CSSPosition_init_$Init$_6(yAnchor.invoke_wfll5y_k$(yOffset), $this);
    return $this;
  }
  function CSSPosition_init_$Create$_5(yAnchor, yOffset) {
    return CSSPosition_init_$Init$_5(yAnchor, yOffset, objectCreate(protoOf(CSSPosition)));
  }
  function CSSPosition_init_$Init$_6(yOffset, $this) {
    CSSPosition_init_$Init$_14(toOffset(Companion_getInstance_14().get_CenterX_v8efdy_k$()), yOffset, $this);
    return $this;
  }
  function CSSPosition_init_$Create$_6(yOffset) {
    return CSSPosition_init_$Init$_6(yOffset, objectCreate(protoOf(CSSPosition)));
  }
  function CSSPosition_init_$Init$_7(xCenter, y, $this) {
    CSSPosition.call($this, '' + xCenter + ' ' + y);
    return $this;
  }
  function CSSPosition_init_$Create$_7(xCenter, y) {
    return CSSPosition_init_$Init$_7(xCenter, y, objectCreate(protoOf(CSSPosition)));
  }
  function CSSPosition_init_$Init$_8(x, yCenter, $this) {
    CSSPosition.call($this, '' + x + ' ' + yCenter);
    return $this;
  }
  function CSSPosition_init_$Create$_8(x, yCenter) {
    return CSSPosition_init_$Init$_8(x, yCenter, objectCreate(protoOf(CSSPosition)));
  }
  function CSSPosition_init_$Init$_9(xAnchor, xOffset, yAnchor, $this) {
    CSSPosition_init_$Init$_10(xAnchor.invoke_wfll5y_k$(xOffset), yAnchor, $this);
    return $this;
  }
  function CSSPosition_init_$Create$_9(xAnchor, xOffset, yAnchor) {
    return CSSPosition_init_$Init$_9(xAnchor, xOffset, yAnchor, objectCreate(protoOf(CSSPosition)));
  }
  function CSSPosition_init_$Init$_10(xOffset, yAnchor, $this) {
    CSSPosition_init_$Init$_14(xOffset, toOffset_0(yAnchor), $this);
    return $this;
  }
  function CSSPosition_init_$Create$_10(xOffset, yAnchor) {
    return CSSPosition_init_$Init$_10(xOffset, yAnchor, objectCreate(protoOf(CSSPosition)));
  }
  function CSSPosition_init_$Init$_11(xAnchor, yAnchor, yOffset, $this) {
    CSSPosition_init_$Init$_12(xAnchor, yAnchor.invoke_wfll5y_k$(yOffset), $this);
    return $this;
  }
  function CSSPosition_init_$Create$_11(xAnchor, yAnchor, yOffset) {
    return CSSPosition_init_$Init$_11(xAnchor, yAnchor, yOffset, objectCreate(protoOf(CSSPosition)));
  }
  function CSSPosition_init_$Init$_12(xAnchor, yOffset, $this) {
    CSSPosition_init_$Init$_14(toOffset(xAnchor), yOffset, $this);
    return $this;
  }
  function CSSPosition_init_$Create$_12(xAnchor, yOffset) {
    return CSSPosition_init_$Init$_12(xAnchor, yOffset, objectCreate(protoOf(CSSPosition)));
  }
  function CSSPosition_init_$Init$_13(xAnchor, xOffset, yAnchor, yOffset, $this) {
    CSSPosition_init_$Init$_14(xAnchor.invoke_wfll5y_k$(xOffset), yAnchor.invoke_wfll5y_k$(yOffset), $this);
    return $this;
  }
  function CSSPosition_init_$Create$_13(xAnchor, xOffset, yAnchor, yOffset) {
    return CSSPosition_init_$Init$_13(xAnchor, xOffset, yAnchor, yOffset, objectCreate(protoOf(CSSPosition)));
  }
  function CSSPosition_init_$Init$_14(xAnchor, yAnchor, $this) {
    CSSPosition.call($this, '' + xAnchor + ' ' + yAnchor);
    return $this;
  }
  function CSSPosition_init_$Create$_14(xAnchor, yAnchor) {
    return CSSPosition_init_$Init$_14(xAnchor, yAnchor, objectCreate(protoOf(CSSPosition)));
  }
  function Companion_9() {
    Companion_instance_9 = this;
  }
  protoOf(Companion_9).get_Top_18jj1w_k$ = function () {
    return CSSPosition_init_$Create$_1(Companion_getInstance_14().get_Top_18jj1w_k$());
  };
  protoOf(Companion_9).get_TopRight_o46i0g_k$ = function () {
    return CSSPosition_init_$Create$_2(Companion_getInstance_14().get_Right_igdsyb_k$(), Companion_getInstance_14().get_Top_18jj1w_k$());
  };
  protoOf(Companion_9).get_Right_igdsyb_k$ = function () {
    return CSSPosition_init_$Create$_0(Companion_getInstance_14().get_Right_igdsyb_k$());
  };
  protoOf(Companion_9).get_BottomRight_v7b1go_k$ = function () {
    return CSSPosition_init_$Create$_2(Companion_getInstance_14().get_Right_igdsyb_k$(), Companion_getInstance_14().get_Bottom_3m75bg_k$());
  };
  protoOf(Companion_9).get_Bottom_3m75bg_k$ = function () {
    return CSSPosition_init_$Create$_1(Companion_getInstance_14().get_Bottom_3m75bg_k$());
  };
  protoOf(Companion_9).get_BottomLeft_f1aa2t_k$ = function () {
    return CSSPosition_init_$Create$_2(Companion_getInstance_14().get_Left_wo5bw0_k$(), Companion_getInstance_14().get_Bottom_3m75bg_k$());
  };
  protoOf(Companion_9).get_Left_wo5bw0_k$ = function () {
    return CSSPosition_init_$Create$_0(Companion_getInstance_14().get_Left_wo5bw0_k$());
  };
  protoOf(Companion_9).get_TopLeft_9xuhv7_k$ = function () {
    return CSSPosition_init_$Create$_2(Companion_getInstance_14().get_Left_wo5bw0_k$(), Companion_getInstance_14().get_Top_18jj1w_k$());
  };
  protoOf(Companion_9).get_Center_3arb0i_k$ = function () {
    return CSSPosition_init_$Create$_2(Companion_getInstance_14().get_CenterX_v8efdy_k$(), Companion_getInstance_14().get_CenterY_v8efdx_k$());
  };
  var Companion_instance_9;
  function Companion_getInstance_13() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function get_$stableprop_20() {
    return 0;
  }
  function CSSPosition(value) {
    Companion_getInstance_13();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(CSSPosition).toString = function () {
    return this.value_1;
  };
  function get_$stableprop_21() {
    return 0;
  }
  function EdgeXOrCenter(value) {
    Edge.call(this, value);
    this.$stable_2 = 0;
  }
  function get_$stableprop_22() {
    return 0;
  }
  function EdgeYOrCenter(value) {
    Edge.call(this, value);
    this.$stable_2 = 0;
  }
  function get_$stableprop_23() {
    return 8;
  }
  function EdgeXOffset(edgeX, offset) {
    this.edgeX_1 = edgeX;
    this.offset_1 = offset;
    this.$stable_1 = 8;
  }
  protoOf(EdgeXOffset).get_edgeX_iqqp76_k$ = function () {
    return this.edgeX_1;
  };
  protoOf(EdgeXOffset).get_offset_hjmqak_k$ = function () {
    return this.offset_1;
  };
  protoOf(EdgeXOffset).toString = function () {
    return '' + this.edgeX_1 + ' ' + this.offset_1;
  };
  function toOffset(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof EdgeX) {
      tmp = _this__u8e3s4.invoke_wfll5y_k$(get_percent(0));
    } else {
      if (_this__u8e3s4 instanceof CenterX) {
        tmp = Companion_getInstance_14().get_Left_wo5bw0_k$().invoke_wfll5y_k$(get_percent(50));
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  function get_$stableprop_24() {
    return 0;
  }
  function CenterX() {
    EdgeXOrCenter.call(this, 'center');
    this.$stable_3 = 0;
  }
  function _get_value__a43j40_9($this) {
    return $this.value_1;
  }
  function Companion_10() {
    Companion_instance_10 = this;
  }
  protoOf(Companion_10).get_Top_18jj1w_k$ = function () {
    return new EdgeY('top');
  };
  protoOf(Companion_10).get_Bottom_3m75bg_k$ = function () {
    return new EdgeY('bottom');
  };
  protoOf(Companion_10).get_Left_wo5bw0_k$ = function () {
    return new EdgeX('left');
  };
  protoOf(Companion_10).get_Right_igdsyb_k$ = function () {
    return new EdgeX('right');
  };
  protoOf(Companion_10).get_CenterX_v8efdy_k$ = function () {
    return new CenterX();
  };
  protoOf(Companion_10).get_CenterY_v8efdx_k$ = function () {
    return new CenterY();
  };
  var Companion_instance_10;
  function Companion_getInstance_14() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function get_$stableprop_25() {
    return 0;
  }
  function Edge(value) {
    Companion_getInstance_14();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(Edge).toString = function () {
    return this.value_1;
  };
  function get_$stableprop_26() {
    return 8;
  }
  function EdgeYOffset(edgeY, offset) {
    this.edgeY_1 = edgeY;
    this.offset_1 = offset;
    this.$stable_1 = 8;
  }
  protoOf(EdgeYOffset).get_edgeY_iqqp77_k$ = function () {
    return this.edgeY_1;
  };
  protoOf(EdgeYOffset).get_offset_hjmqak_k$ = function () {
    return this.offset_1;
  };
  protoOf(EdgeYOffset).toString = function () {
    return '' + this.edgeY_1 + ' ' + this.offset_1;
  };
  function toOffset_0(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof EdgeY) {
      tmp = _this__u8e3s4.invoke_wfll5y_k$(get_percent(0));
    } else {
      if (_this__u8e3s4 instanceof CenterY) {
        tmp = Companion_getInstance_14().get_Top_18jj1w_k$().invoke_wfll5y_k$(get_percent(50));
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  function get_$stableprop_27() {
    return 0;
  }
  function EdgeX(value) {
    EdgeXOrCenter.call(this, value);
    this.$stable_3 = 0;
  }
  protoOf(EdgeX).invoke_wfll5y_k$ = function (offset) {
    return new EdgeXOffset(this, offset);
  };
  function get_$stableprop_28() {
    return 0;
  }
  function CenterY() {
    EdgeYOrCenter.call(this, 'center');
    this.$stable_3 = 0;
  }
  function get_$stableprop_29() {
    return 0;
  }
  function EdgeY(value) {
    EdgeYOrCenter.call(this, value);
    this.$stable_3 = 0;
  }
  protoOf(EdgeY).invoke_wfll5y_k$ = function (offset) {
    return new EdgeYOffset(this, offset);
  };
  function toDegrees(_this__u8e3s4) {
    var tmp;
    switch (toString(_this__u8e3s4.unit)) {
      case 'deg':
        tmp = _this__u8e3s4.value;
        break;
      case 'grad':
        tmp = _this__u8e3s4.value * 0.9;
        break;
      case 'rad':
        tmp = _this__u8e3s4.value * 180.0 / get_PI();
        break;
      case 'turn':
        tmp = _this__u8e3s4.value * 360.0;
        break;
      default:
        var message = 'Unexpected unit type ' + _this__u8e3s4.unit;
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp % 360.0;
  }
  function get_$stableprop_30() {
    return 0;
  }
  function ComparableStyleScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.properties_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.variables_1 = LinkedHashMap_init_$Create$();
    this.$stable_1 = 0;
  }
  protoOf(ComparableStyleScope).get_properties_zhllqc_k$ = function () {
    return this.properties_1;
  };
  protoOf(ComparableStyleScope).get_variables_75f0zy_k$ = function () {
    return this.variables_1;
  };
  protoOf(ComparableStyleScope).property_npxg1h_k$ = function (propertyName, value) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.properties_1;
    var value_0 = toString(value);
    this_0.put_4fpzoq_k$(propertyName, value_0);
  };
  protoOf(ComparableStyleScope).variable_px6kuc_k$ = function (variableName, value) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.variables_1;
    var value_0 = toString(value);
    this_0.put_4fpzoq_k$(variableName, value_0);
  };
  protoOf(ComparableStyleScope).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof ComparableStyleScope) {
      tmp_0 = equals(this.properties_1, other.properties_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.variables_1, other.variables_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableStyleScope).hashCode = function () {
    var result = hashCode(this.properties_1);
    result = imul(31, result) + hashCode(this.variables_1) | 0;
    return result;
  };
  function isNotEmpty(_this__u8e3s4) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!_this__u8e3s4.properties_1.isEmpty_y1axqb_k$()) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp = !_this__u8e3s4.variables_1.isEmpty_y1axqb_k$();
    }
    return tmp;
  }
  function _get_value__a43j40_10($this) {
    return $this.value_1;
  }
  function Companion_11() {
    Companion_instance_11 = this;
  }
  protoOf(Companion_11).get_Auto_wnyn88_k$ = function () {
    return new Cursor('auto');
  };
  protoOf(Companion_11).get_Default_goqax4_k$ = function () {
    return new Cursor('default');
  };
  protoOf(Companion_11).get_None_wo6tgh_k$ = function () {
    return new Cursor('none');
  };
  protoOf(Companion_11).get_ContextMenu_v99p0b_k$ = function () {
    return new Cursor('context-menu');
  };
  protoOf(Companion_11).get_Help_wo2s2y_k$ = function () {
    return new Cursor('help');
  };
  protoOf(Companion_11).get_Pointer_m64vg4_k$ = function () {
    return new Cursor('pointer');
  };
  protoOf(Companion_11).get_Progress_nqna52_k$ = function () {
    return new Cursor('progress');
  };
  protoOf(Companion_11).get_Wait_woc9um_k$ = function () {
    return new Cursor('wait');
  };
  protoOf(Companion_11).get_Cell_wnzl57_k$ = function () {
    return new Cursor('cell');
  };
  protoOf(Companion_11).get_Crosshair_69627b_k$ = function () {
    return new Cursor('crosshair');
  };
  protoOf(Companion_11).get_Text_woag7q_k$ = function () {
    return new Cursor('text');
  };
  protoOf(Companion_11).get_VerticalText_6nu4a4_k$ = function () {
    return new Cursor('vertical-text');
  };
  protoOf(Companion_11).get_Alias_i73953_k$ = function () {
    return new Cursor('alias');
  };
  protoOf(Companion_11).get_Copy_wnzsny_k$ = function () {
    return new Cursor('copy');
  };
  protoOf(Companion_11).get_Move_wo66nu_k$ = function () {
    return new Cursor('move');
  };
  protoOf(Companion_11).get_NoDrop_21hmk9_k$ = function () {
    return new Cursor('no-drop');
  };
  protoOf(Companion_11).get_NotAllowed_mobp4y_k$ = function () {
    return new Cursor('not-allowed');
  };
  protoOf(Companion_11).get_Grab_wo2egl_k$ = function () {
    return new Cursor('grab');
  };
  protoOf(Companion_11).get_Grabbing_taamx7_k$ = function () {
    return new Cursor('grabbing');
  };
  protoOf(Companion_11).get_AllScroll_y9eih1_k$ = function () {
    return new Cursor('all-scroll');
  };
  protoOf(Companion_11).get_ColumnResize_w27e5_k$ = function () {
    return new Cursor('col-resize');
  };
  protoOf(Companion_11).get_RowResize_dbunq3_k$ = function () {
    return new Cursor('row-resize');
  };
  protoOf(Companion_11).get_NResize_kz2xjb_k$ = function () {
    return new Cursor('n-resize');
  };
  protoOf(Companion_11).get_NeResize_pdt3gs_k$ = function () {
    return new Cursor('ne-resize');
  };
  protoOf(Companion_11).get_EResize_b0fdlc_k$ = function () {
    return new Cursor('e-resize');
  };
  protoOf(Companion_11).get_SeResize_nbwu41_k$ = function () {
    return new Cursor('se-resize');
  };
  protoOf(Companion_11).get_SResize_im7kea_k$ = function () {
    return new Cursor('s-resize');
  };
  protoOf(Companion_11).get_SwResize_rrw3z5_k$ = function () {
    return new Cursor('sw-resize');
  };
  protoOf(Companion_11).get_WResize_uxqhha_k$ = function () {
    return new Cursor('w-resize');
  };
  protoOf(Companion_11).get_NwResize_ppzume_k$ = function () {
    return new Cursor('nw-resize');
  };
  protoOf(Companion_11).get_EwResize_kla901_k$ = function () {
    return new Cursor('ew-resize');
  };
  protoOf(Companion_11).get_NsResize_wzla9q_k$ = function () {
    return new Cursor('ns-resize');
  };
  protoOf(Companion_11).get_NeswResize_x625qw_k$ = function () {
    return new Cursor('nesw-resize');
  };
  protoOf(Companion_11).get_NwseResize_c95994_k$ = function () {
    return new Cursor('nwse-resize');
  };
  protoOf(Companion_11).get_ZoomIn_7qsf41_k$ = function () {
    return new Cursor('zoom-in');
  };
  protoOf(Companion_11).get_ZoomOut_qz4z8y_k$ = function () {
    return new Cursor('zoom-out');
  };
  var Companion_instance_11;
  function Companion_getInstance_15() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function get_$stableprop_31() {
    return 0;
  }
  function Cursor(value) {
    Companion_getInstance_15();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(Cursor).toString = function () {
    return this.value_1;
  };
  function cursor(_this__u8e3s4, cursor) {
    _this__u8e3s4.property_npxg1h_k$('cursor', cursor);
  }
  function _get_value__a43j40_11($this) {
    return $this.value_1;
  }
  function Companion_12() {
    Companion_instance_12 = this;
  }
  protoOf(Companion_12).get_Thin_woai2q_k$ = function () {
    return new FontWeight('100');
  };
  protoOf(Companion_12).get_ExtraLight_ov7yxb_k$ = function () {
    return new FontWeight('200');
  };
  protoOf(Companion_12).get_Light_id31e5_k$ = function () {
    return new FontWeight('300');
  };
  protoOf(Companion_12).get_Medium_1fiba6_k$ = function () {
    return new FontWeight('500');
  };
  protoOf(Companion_12).get_SemiBold_aid1c4_k$ = function () {
    return new FontWeight('600');
  };
  protoOf(Companion_12).get_ExtraBold_xklwd0_k$ = function () {
    return new FontWeight('800');
  };
  protoOf(Companion_12).get_Black_i7mvue_k$ = function () {
    return new FontWeight('900');
  };
  protoOf(Companion_12).get_ExtraBlack_oprtdk_k$ = function () {
    return new FontWeight('950');
  };
  protoOf(Companion_12).get_Normal_22avww_k$ = function () {
    return new FontWeight('normal');
  };
  protoOf(Companion_12).get_Bold_wnz5ke_k$ = function () {
    return new FontWeight('bold');
  };
  protoOf(Companion_12).get_Lighter_vm6n22_k$ = function () {
    return new FontWeight('lighter');
  };
  protoOf(Companion_12).get_Bolder_3mclb9_k$ = function () {
    return new FontWeight('bolder');
  };
  protoOf(Companion_12).get_Inherit_a1a9e6_k$ = function () {
    return new FontWeight('inherit');
  };
  protoOf(Companion_12).get_Initial_a0h2v9_k$ = function () {
    return new FontWeight('initial');
  };
  protoOf(Companion_12).get_Revert_3t1tzh_k$ = function () {
    return new FontWeight('revert');
  };
  protoOf(Companion_12).get_Unset_ii4mhs_k$ = function () {
    return new FontWeight('unset');
  };
  var Companion_instance_12;
  function Companion_getInstance_16() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function get_$stableprop_32() {
    return 0;
  }
  function FontWeight(value) {
    Companion_getInstance_16();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(FontWeight).toString = function () {
    return this.value_1;
  };
  function _get_value__a43j40_12($this) {
    return $this.value_1;
  }
  function Companion_13() {
    Companion_instance_13 = this;
  }
  protoOf(Companion_13).get_XXSmall_dp2rr6_k$ = function () {
    return new FontSize('xx-small');
  };
  protoOf(Companion_13).get_XSmall_6d9fo8_k$ = function () {
    return new FontSize('x-small');
  };
  protoOf(Companion_13).get_Small_ih014u_k$ = function () {
    return new FontSize('small');
  };
  protoOf(Companion_13).get_Medium_1fiba6_k$ = function () {
    return new FontSize('medium');
  };
  protoOf(Companion_13).get_Large_icy5ma_k$ = function () {
    return new FontSize('large');
  };
  protoOf(Companion_13).get_XLarge_697k5o_k$ = function () {
    return new FontSize('x-large');
  };
  protoOf(Companion_13).get_XXLarge_dt4n9q_k$ = function () {
    return new FontSize('xx-large');
  };
  protoOf(Companion_13).get_Smaller_5wbdat_k$ = function () {
    return new FontSize('smaller');
  };
  protoOf(Companion_13).get_Larger_wiegw_k$ = function () {
    return new FontSize('larger');
  };
  protoOf(Companion_13).get_Inherit_a1a9e6_k$ = function () {
    return new FontSize('inherit');
  };
  protoOf(Companion_13).get_Initial_a0h2v9_k$ = function () {
    return new FontSize('initial');
  };
  protoOf(Companion_13).get_Revert_3t1tzh_k$ = function () {
    return new FontSize('revert');
  };
  protoOf(Companion_13).get_Unset_ii4mhs_k$ = function () {
    return new FontSize('unset');
  };
  var Companion_instance_13;
  function Companion_getInstance_17() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function get_$stableprop_33() {
    return 0;
  }
  function FontSize(value) {
    Companion_getInstance_17();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(FontSize).toString = function () {
    return this.value_1;
  };
  function fontWeight(_this__u8e3s4, weight) {
    _this__u8e3s4.property_npxg1h_k$('font-weight', weight);
  }
  function fontSize(_this__u8e3s4, size) {
    _this__u8e3s4.property_npxg1h_k$('font-size', size);
  }
  function grid(_this__u8e3s4, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new GridBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    this_0.buildInto_bd9p49_k$(_this__u8e3s4);
  }
  function get_$stableprop_34() {
    return 0;
  }
  function GridBuilder() {
    GridBuilderInAuto.call(this);
    this.$stable_2 = 0;
  }
  protoOf(GridBuilder).auto_9oitg_k$ = function (block) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new GridBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    tmp.autoBuilder_1 = this_0;
  };
  function get_$stableprop_35() {
    return 0;
  }
  function GridTrackBuilder() {
    GridTrackBuilderInRepeat.call(this);
    this.$stable_2 = 0;
  }
  protoOf(GridTrackBuilder).repeat_n9ti1_k$ = function (count, block) {
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    var this_1 = this_0.tracks_1;
    var repeatTracks = copyToArray(this_1);
    this.tracks_1.add_utx5q5_k$(Companion_getInstance_19().repeat_1fs2oe_k$(count, repeatTracks.slice()));
  };
  protoOf(GridTrackBuilder).repeat_x8tdgb_k$ = function (type, block) {
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    var this_1 = this_0.tracks_1;
    var repeatTracks = copyToArray(this_1);
    this.tracks_1.add_utx5q5_k$(Companion_getInstance_19().repeat_lz16g6_k$(type, repeatTracks.slice()));
  };
  function get_$stableprop_36() {
    return 8;
  }
  function GridBuilderInAuto$col$lambda($value) {
    return function ($this$columns) {
      $this$columns.size_n8bj0z_k$($value);
      return Unit_getInstance();
    };
  }
  function GridBuilderInAuto$col$lambda_0($value) {
    return function ($this$columns) {
      $this$columns.size_q03g6h_k$($value);
      return Unit_getInstance();
    };
  }
  function GridBuilderInAuto$column$lambda($value) {
    return function ($this$columns) {
      $this$columns.size_n8bj0z_k$($value);
      return Unit_getInstance();
    };
  }
  function GridBuilderInAuto$column$lambda_0($value) {
    return function ($this$columns) {
      $this$columns.size_q03g6h_k$($value);
      return Unit_getInstance();
    };
  }
  function GridBuilderInAuto$row$lambda($value) {
    return function ($this$rows) {
      $this$rows.size_n8bj0z_k$($value);
      return Unit_getInstance();
    };
  }
  function GridBuilderInAuto$row$lambda_0($value) {
    return function ($this$rows) {
      $this$rows.size_q03g6h_k$($value);
      return Unit_getInstance();
    };
  }
  function GridBuilderInAuto() {
    this.columns_1 = null;
    this.rows_1 = null;
    this.autoBuilder_1 = null;
    this.$stable_1 = 8;
  }
  protoOf(GridBuilderInAuto).set_columns_gc9ooa_k$ = function (_set____db54di) {
    this.columns_1 = _set____db54di;
  };
  protoOf(GridBuilderInAuto).get_columns_gyzrhw_k$ = function () {
    return this.columns_1;
  };
  protoOf(GridBuilderInAuto).set_rows_8edm7g_k$ = function (_set____db54di) {
    this.rows_1 = _set____db54di;
  };
  protoOf(GridBuilderInAuto).get_rows_wott7m_k$ = function () {
    return this.rows_1;
  };
  protoOf(GridBuilderInAuto).set_autoBuilder_13371t_k$ = function (_set____db54di) {
    this.autoBuilder_1 = _set____db54di;
  };
  protoOf(GridBuilderInAuto).get_autoBuilder_5aiikd_k$ = function () {
    return this.autoBuilder_1;
  };
  protoOf(GridBuilderInAuto).col_vl108i_k$ = function (value) {
    this.columns_o4h109_k$(GridBuilderInAuto$col$lambda(value));
  };
  protoOf(GridBuilderInAuto).col_xvqr0o_k$ = function (value) {
    this.columns_o4h109_k$(GridBuilderInAuto$col$lambda_0(value));
  };
  protoOf(GridBuilderInAuto).column_wtsgso_k$ = function (value) {
    this.columns_o4h109_k$(GridBuilderInAuto$column$lambda(value));
  };
  protoOf(GridBuilderInAuto).column_c3spy6_k$ = function (value) {
    this.columns_o4h109_k$(GridBuilderInAuto$column$lambda_0(value));
  };
  protoOf(GridBuilderInAuto).row_ijva4s_k$ = function (value) {
    this.rows_c0wtyb_k$(GridBuilderInAuto$row$lambda(value));
  };
  protoOf(GridBuilderInAuto).row_6g6lpe_k$ = function (value) {
    this.rows_c0wtyb_k$(GridBuilderInAuto$row$lambda_0(value));
  };
  protoOf(GridBuilderInAuto).cols_db26rn_k$ = function (block) {
    this.columns_o4h109_k$(block);
  };
  protoOf(GridBuilderInAuto).columns_o4h109_k$ = function (block) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    tmp.columns_1 = this_0.tracks_1;
  };
  protoOf(GridBuilderInAuto).rows_c0wtyb_k$ = function (block) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    tmp.rows_1 = this_0.tracks_1;
  };
  protoOf(GridBuilderInAuto).buildInto_bd9p49_k$ = function (scope) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    Companion_getInstance();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display(scope, 'grid');
    var tmp0_safe_receiver = this.columns_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      gridTemplateColumns(scope, toTrackListString(tmp0_safe_receiver));
    }
    var tmp1_safe_receiver = this.rows_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      gridTemplateRows(scope, toTrackListString(tmp1_safe_receiver));
    }
    var tmp2_safe_receiver = this.autoBuilder_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.GridBuilderInAuto.buildInto.<anonymous>' call
      var tmp0_safe_receiver_0 = tmp2_safe_receiver.columns_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        gridAutoColumns(scope, toTrackListString(tmp0_safe_receiver_0));
      }
      var tmp1_safe_receiver_0 = tmp2_safe_receiver.rows_1;
      var tmp;
      if (tmp1_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        gridAutoRows(scope, toTrackListString(tmp1_safe_receiver_0));
        tmp = Unit_getInstance();
      }
    }
  };
  function get_$stableprop_37() {
    return 8;
  }
  function GridTrackBuilderInRepeat() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.tracks_1 = ArrayList_init_$Create$();
    this.$stable_1 = 8;
  }
  protoOf(GridTrackBuilderInRepeat).get_auto_woj2t4_k$ = function () {
    return Companion_getInstance_18().get_Auto_wnyn88_k$();
  };
  protoOf(GridTrackBuilderInRepeat).get_minContent_f65gog_k$ = function () {
    return Companion_getInstance_18().get_MinContent_hspenk_k$();
  };
  protoOf(GridTrackBuilderInRepeat).get_maxContent_ez72f2_k$ = function () {
    return Companion_getInstance_18().get_MaxContent_n32482_k$();
  };
  protoOf(GridTrackBuilderInRepeat).get_autoFit_9f9csn_k$ = function () {
    return Type_AutoFit_getInstance();
  };
  protoOf(GridTrackBuilderInRepeat).get_autoFill_80lsv9_k$ = function () {
    return Type_AutoFill_getInstance();
  };
  protoOf(GridTrackBuilderInRepeat).get_tracks_k3cuq9_k$ = function () {
    return this.tracks_1;
  };
  protoOf(GridTrackBuilderInRepeat).size_azcpvi_k$ = function (track) {
    this.tracks_1.add_utx5q5_k$(track);
  };
  protoOf(GridTrackBuilderInRepeat).size_n8bj0z_k$ = function (value) {
    return this.size_azcpvi_k$(Companion_getInstance_18().invoke_wfll5y_k$(value));
  };
  protoOf(GridTrackBuilderInRepeat).size_q03g6h_k$ = function (value) {
    return this.size_azcpvi_k$(Companion_getInstance_18().invoke_3uf9u8_k$(value));
  };
  protoOf(GridTrackBuilderInRepeat).fitContent_8jd78m_k$ = function (value) {
    return this.size_azcpvi_k$(Companion_getInstance_18().fitContent_vrn1yu_k$(value));
  };
  protoOf(GridTrackBuilderInRepeat).minmax_msesvw_k$ = function (min, max) {
    return this.size_azcpvi_k$(Companion_getInstance_18().minmax_mdatpo_k$(min, max));
  };
  protoOf(GridTrackBuilderInRepeat).minmax_el7xbs_k$ = function (min, max) {
    return this.size_azcpvi_k$(Companion_getInstance_18().minmax_mdatpo_k$(min, max));
  };
  protoOf(GridTrackBuilderInRepeat).minmax_9paic1_k$ = function (min, max) {
    return this.minmax_msesvw_k$(min, Companion_getInstance_18().invoke_3uf9u8_k$(max));
  };
  protoOf(GridTrackBuilderInRepeat).minmax_labs7t_k$ = function (min, max) {
    return this.minmax_msesvw_k$(min, Companion_getInstance_18().invoke_wfll5y_k$(max));
  };
  protoOf(GridTrackBuilderInRepeat).minmax_npodc9_k$ = function (min, max) {
    return this.minmax_el7xbs_k$(Companion_getInstance_18().invoke_wfll5y_k$(min), max);
  };
  protoOf(GridTrackBuilderInRepeat).minmax_fxpgw2_k$ = function (min, max) {
    return this.minmax_el7xbs_k$(Companion_getInstance_18().invoke_wfll5y_k$(min), Companion_getInstance_18().invoke_wfll5y_k$(max));
  };
  protoOf(GridTrackBuilderInRepeat).minmax_1ha38s_k$ = function (min, max) {
    return this.minmax_el7xbs_k$(Companion_getInstance_18().invoke_wfll5y_k$(min), Companion_getInstance_18().invoke_3uf9u8_k$(max));
  };
  protoOf(GridTrackBuilderInRepeat).lineNames_ii8gtg_k$ = function (names) {
    this.tracks_1.add_utx5q5_k$(Companion_getInstance_19().lineNames_npjmfo_k$(names.slice()));
  };
  function get_$stableprop_38() {
    return 0;
  }
  function get_$stableprop_39() {
    return 0;
  }
  function get_$stableprop_40() {
    return 0;
  }
  function get_$stableprop_41() {
    return 0;
  }
  function get_$stableprop_42() {
    return 0;
  }
  function get_$stableprop_43() {
    return 0;
  }
  function FitContent(value) {
    TrackSize.call(this, 'fit-content(' + value + ')');
    this.$stable_3 = 0;
  }
  function MinMax(min, max) {
    TrackSize.call(this, 'minmax(' + min + ', ' + max + ')');
    this.min_1 = min;
    this.max_1 = max;
    this.$stable_3 = 0;
  }
  protoOf(MinMax).get_min_18j0nr_k$ = function () {
    return this.min_1;
  };
  protoOf(MinMax).get_max_18j0ud_k$ = function () {
    return this.max_1;
  };
  function Flex(value) {
    TrackSize.call(this, toString(value));
    this.$stable_3 = 0;
  }
  function Inflexible(value) {
    TrackSize.call(this, value);
    this.$stable_3 = 0;
  }
  function Keyword_2(value) {
    Inflexible.call(this, value);
    this.$stable_4 = 0;
  }
  function Fixed(value) {
    Inflexible.call(this, toString(value));
    this.$stable_4 = 0;
  }
  function Companion_14() {
    Companion_instance_14 = this;
  }
  protoOf(Companion_14).get_Auto_wnyn88_k$ = function () {
    return new Keyword_2('auto');
  };
  protoOf(Companion_14).get_MinContent_hspenk_k$ = function () {
    return new Keyword_2('min-content');
  };
  protoOf(Companion_14).get_MaxContent_n32482_k$ = function () {
    return new Keyword_2('max-content');
  };
  protoOf(Companion_14).invoke_wfll5y_k$ = function (value) {
    return new Fixed(value);
  };
  protoOf(Companion_14).invoke_3uf9u8_k$ = function (value) {
    return new Flex(value);
  };
  protoOf(Companion_14).minmax_mdatpo_k$ = function (min, max) {
    return new MinMax(min, max);
  };
  protoOf(Companion_14).fitContent_vrn1yu_k$ = function (value) {
    return new FitContent(value);
  };
  var Companion_instance_14;
  function Companion_getInstance_18() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function get_$stableprop_44() {
    return 0;
  }
  function get_$stableprop_45() {
    return 0;
  }
  function _get_value__a43j40_13($this) {
    return $this.value_1;
  }
  var Type_AutoFill_instance;
  var Type_AutoFit_instance;
  function values_1() {
    return [Type_AutoFill_getInstance(), Type_AutoFit_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'AutoFill':
        return Type_AutoFill_getInstance();
      case 'AutoFit':
        return Type_AutoFit_getInstance();
      default:
        Type_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var Type_entriesInitialized;
  function Type_initEntries() {
    if (Type_entriesInitialized)
      return Unit_getInstance();
    Type_entriesInitialized = true;
    Type_AutoFill_instance = new Type('AutoFill', 0, 'auto-fill');
    Type_AutoFit_instance = new Type('AutoFit', 1, 'auto-fit');
  }
  var $ENTRIES_1;
  function Type(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.value_1 = value;
  }
  protoOf(Type).toString = function () {
    return this.value_1;
  };
  function get_$stableprop_46() {
    return 0;
  }
  function Type_AutoFill_getInstance() {
    Type_initEntries();
    return Type_AutoFill_instance;
  }
  function Type_AutoFit_getInstance() {
    Type_initEntries();
    return Type_AutoFit_instance;
  }
  function Track(count, entries) {
    Repeat.call(this, count, entries);
    this.$stable_3 = 0;
  }
  function Auto(type, entries) {
    Repeat.call(this, type, entries);
    this.$stable_3 = 0;
  }
  function get_$stableprop_47() {
    return 0;
  }
  function get_$stableprop_48() {
    return 0;
  }
  function _get_value__a43j40_14($this) {
    return $this.value_1;
  }
  function TrackSize(value) {
    Companion_getInstance_18();
    GridEntry.call(this, value);
    this.$stable_2 = 0;
  }
  function Repeat(value, entries) {
    GridEntry.call(this, 'repeat(' + toString(value) + ', ' + toTrackListString_0(entries) + ')');
    this.entries_1 = entries;
    this.$stable_2 = 0;
  }
  protoOf(Repeat).get_entries_p20ztl_k$ = function () {
    return this.entries_1;
  };
  function LineNames(names) {
    GridEntry.call(this, joinToString_0(names, ' ', '[', ']'));
    this.names_1 = names;
    this.$stable_2 = 0;
  }
  protoOf(LineNames).get_names_ivn21r_k$ = function () {
    return this.names_1;
  };
  function Companion_15() {
    Companion_instance_15 = this;
  }
  protoOf(Companion_15).repeat_1fs2oe_k$ = function (count, entries) {
    return new Track(count, entries.slice());
  };
  protoOf(Companion_15).repeat_lz16g6_k$ = function (type, entries) {
    return new Auto(type, entries.slice());
  };
  protoOf(Companion_15).lineNames_npjmfo_k$ = function (names) {
    return new LineNames(names.slice());
  };
  var Companion_instance_15;
  function Companion_getInstance_19() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function get_$stableprop_49() {
    return 0;
  }
  function GridEntry(value) {
    Companion_getInstance_19();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(GridEntry).toString = function () {
    return this.value_1;
  };
  function toTrackListString(_this__u8e3s4) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(_this__u8e3s4);
    return toTrackListString_0(tmp$ret$0);
  }
  function GridDslMarker() {
  }
  protoOf(GridDslMarker).equals = function (other) {
    if (!(other instanceof GridDslMarker))
      return false;
    other instanceof GridDslMarker || THROW_CCE();
    return true;
  };
  protoOf(GridDslMarker).hashCode = function () {
    return 0;
  };
  protoOf(GridDslMarker).toString = function () {
    return '@com.varabyte.kobweb.compose.css.GridDslMarker()';
  };
  function toTrackListString_0(_this__u8e3s4) {
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
        var this_0 = prev.names_1;
        var elements = element.names_1;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$2 = this_0.concat(elements);
        acc.set_82063s_k$(tmp_0, new LineNames(tmp$ret$2.slice()));
      } else {
        acc.add_utx5q5_k$(element);
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
            var this_0 = element.entries_1;
            var destination_0 = ArrayList_init_$Create$();
            var inductionVariable_0 = 0;
            var last_0 = this_0.length;
            while (inductionVariable_0 < last_0) {
              var element_0 = this_0[inductionVariable_0];
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              if (element_0 instanceof TrackSize) {
                destination_0.add_utx5q5_k$(element_0);
              }
            }
            var tmp_0;
            if (destination_0.isEmpty_y1axqb_k$()) {
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
    if (!!trackSizes.isEmpty_y1axqb_k$()) {
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
      return Unit_getInstance();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(autoRepeatCount === 1)) {
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      var message_1 = 'Only one auto-repeat call is allowed per track list';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = trackSizes.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element_2 = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.compose.css.validate.<anonymous>' call
      if (!(element_2 instanceof Fixed)) {
        if (element_2 instanceof Flex) {
          // Inline function 'kotlin.error' call
          var message_2 = 'Cannot use flex values with auto-repeat';
          throw IllegalStateException_init_$Create$(toString(message_2));
        } else {
          if (element_2 instanceof Keyword_2) {
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
                var tmp_2 = element_2.min_1;
                if (tmp_2 instanceof Fixed) {
                  tmp_1 = true;
                } else {
                  var tmp_3 = element_2.max_1;
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
    gridTemplateColumns(_this__u8e3s4, toTrackListString(this_0.tracks_1));
  }
  function gridTemplateRows_0(_this__u8e3s4, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    gridTemplateRows(_this__u8e3s4, toTrackListString(this_0.tracks_1));
  }
  function _get_value__a43j40_15($this) {
    return $this.value_1;
  }
  function Companion_16() {
    Companion_instance_16 = this;
  }
  protoOf(Companion_16).get_Baseline_bu5gku_k$ = function () {
    return new VerticalAlign('baseline');
  };
  protoOf(Companion_16).get_Sub_18jjnt_k$ = function () {
    return new VerticalAlign('sub');
  };
  protoOf(Companion_16).get_Super_ih5fzm_k$ = function () {
    return new VerticalAlign('super');
  };
  protoOf(Companion_16).get_TextTop_5chtr3_k$ = function () {
    return new VerticalAlign('text-top');
  };
  protoOf(Companion_16).get_TextBottom_zaoo69_k$ = function () {
    return new VerticalAlign('text-bottom');
  };
  protoOf(Companion_16).get_Middle_1hpdq6_k$ = function () {
    return new VerticalAlign('middle');
  };
  protoOf(Companion_16).get_Top_18jj1w_k$ = function () {
    return new VerticalAlign('top');
  };
  protoOf(Companion_16).get_Bottom_3m75bg_k$ = function () {
    return new VerticalAlign('bottom');
  };
  protoOf(Companion_16).get_Inherit_a1a9e6_k$ = function () {
    return new VerticalAlign('inherit');
  };
  protoOf(Companion_16).get_Initial_a0h2v9_k$ = function () {
    return new VerticalAlign('initial');
  };
  protoOf(Companion_16).get_Revert_3t1tzh_k$ = function () {
    return new VerticalAlign('revert');
  };
  protoOf(Companion_16).get_Unset_ii4mhs_k$ = function () {
    return new VerticalAlign('unset');
  };
  var Companion_instance_16;
  function Companion_getInstance_20() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function get_$stableprop_50() {
    return 0;
  }
  function VerticalAlign(value) {
    Companion_getInstance_20();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(VerticalAlign).toString = function () {
    return this.value_1;
  };
  function verticalAlign(_this__u8e3s4, verticalAlign) {
    _this__u8e3s4.property_npxg1h_k$('vertical-align', verticalAlign);
  }
  function paddingInline(_this__u8e3s4, value) {
    _this__u8e3s4.property_wcrait_k$('padding-inline', joinToString_0(value, ' '));
  }
  function zIndex(_this__u8e3s4, value) {
    _this__u8e3s4.property_jk9dw6_k$('z-index', value);
  }
  function _get_value__a43j40_16($this) {
    return $this.value_1;
  }
  function Companion_17() {
    Companion_instance_17 = this;
  }
  protoOf(Companion_17).of_5gnbr7_k$ = function (text) {
    return new ListStyleType(wrapQuotesIfNecessary(text));
  };
  protoOf(Companion_17).get_ArabicIndic_7dczms_k$ = function () {
    return new ListStyleType('arabic-indic');
  };
  protoOf(Companion_17).get_Armenian_glp6oq_k$ = function () {
    return new ListStyleType('armenian');
  };
  protoOf(Companion_17).get_Bengali_p42yft_k$ = function () {
    return new ListStyleType('bengali');
  };
  protoOf(Companion_17).get_Cambodian_yjaltx_k$ = function () {
    return new ListStyleType('cambodian');
  };
  protoOf(Companion_17).get_Circle_38hx53_k$ = function () {
    return new ListStyleType('circle');
  };
  protoOf(Companion_17).get_CjkDecimal_eqj52u_k$ = function () {
    return new ListStyleType('cjk-decimal');
  };
  protoOf(Companion_17).get_CjkEarthlyBranch_kcpnsy_k$ = function () {
    return new ListStyleType('cjk-earthly-branch');
  };
  protoOf(Companion_17).get_CjkHeavenlyStem_v60yes_k$ = function () {
    return new ListStyleType('cjk-heavenly-stem');
  };
  protoOf(Companion_17).get_CjkIdeographic_325ofc_k$ = function () {
    return new ListStyleType('cjk-ideographic');
  };
  protoOf(Companion_17).get_Decimal_gq8r08_k$ = function () {
    return new ListStyleType('decimal');
  };
  protoOf(Companion_17).get_DecimalLeadingZero_5q6aue_k$ = function () {
    return new ListStyleType('decimal-leading-zero');
  };
  protoOf(Companion_17).get_Devanagari_fiqhev_k$ = function () {
    return new ListStyleType('devanagari');
  };
  protoOf(Companion_17).get_Disc_wo0b9a_k$ = function () {
    return new ListStyleType('disc');
  };
  protoOf(Companion_17).get_DisclosureClosed_juf1pa_k$ = function () {
    return new ListStyleType('disclosure-closed');
  };
  protoOf(Companion_17).get_DisclosureOpen_l759fk_k$ = function () {
    return new ListStyleType('disclosure-open');
  };
  protoOf(Companion_17).get_Georgian_4lk93_k$ = function () {
    return new ListStyleType('georgian');
  };
  protoOf(Companion_17).get_Gujarati_j012pe_k$ = function () {
    return new ListStyleType('gujarati');
  };
  protoOf(Companion_17).get_Gurumukhi_5jh3xm_k$ = function () {
    return new ListStyleType('gurumukhi');
  };
  protoOf(Companion_17).get_Hebrew_xqwd4_k$ = function () {
    return new ListStyleType('hebrew');
  };
  protoOf(Companion_17).get_Hiragana_hja76u_k$ = function () {
    return new ListStyleType('hiragana');
  };
  protoOf(Companion_17).get_HiraganaIroha_z3xrq1_k$ = function () {
    return new ListStyleType('hiragana-iroha');
  };
  protoOf(Companion_17).get_JapaneseFormal_srlfzd_k$ = function () {
    return new ListStyleType('japanese-formal');
  };
  protoOf(Companion_17).get_JapaneseInformal_8qufwu_k$ = function () {
    return new ListStyleType('japanese-informal');
  };
  protoOf(Companion_17).get_Kannada_d9ddmn_k$ = function () {
    return new ListStyleType('kannada');
  };
  protoOf(Companion_17).get_Katakana_cguuob_k$ = function () {
    return new ListStyleType('katakana');
  };
  protoOf(Companion_17).get_KatakanaIroha_xgvh3q_k$ = function () {
    return new ListStyleType('katakana-iroha');
  };
  protoOf(Companion_17).get_Khmer_iciq6s_k$ = function () {
    return new ListStyleType('khmer');
  };
  protoOf(Companion_17).get_KoreanHangulFormal_rvp4md_k$ = function () {
    return new ListStyleType('korean-hangul-formal');
  };
  protoOf(Companion_17).get_KoreanHanjaFormal_xdca1e_k$ = function () {
    return new ListStyleType('korean-hanja-formal');
  };
  protoOf(Companion_17).get_KoreanHanjaInformal_vycz4j_k$ = function () {
    return new ListStyleType('korean-hanja-informal');
  };
  protoOf(Companion_17).get_Lao_18jpbj_k$ = function () {
    return new ListStyleType('lao');
  };
  protoOf(Companion_17).get_LowerAlpha_wmhyme_k$ = function () {
    return new ListStyleType('lower-alpha');
  };
  protoOf(Companion_17).get_LowerArmenian_u6eqrt_k$ = function () {
    return new ListStyleType('lower-armenian');
  };
  protoOf(Companion_17).get_LowerGreek_wpwbvs_k$ = function () {
    return new ListStyleType('lower-greek');
  };
  protoOf(Companion_17).get_LowerLatin_wscrak_k$ = function () {
    return new ListStyleType('lower-latin');
  };
  protoOf(Companion_17).get_LowerRoman_wvwbad_k$ = function () {
    return new ListStyleType('lower-roman');
  };
  protoOf(Companion_17).get_Malayalam_4qmsf2_k$ = function () {
    return new ListStyleType('malayalam');
  };
  protoOf(Companion_17).get_Mongolian_e4gexh_k$ = function () {
    return new ListStyleType('mongolian');
  };
  protoOf(Companion_17).get_Myanmar_h909b8_k$ = function () {
    return new ListStyleType('myanmar');
  };
  protoOf(Companion_17).get_Oriya_iew7xh_k$ = function () {
    return new ListStyleType('oriya');
  };
  protoOf(Companion_17).get_Persian_hkpriv_k$ = function () {
    return new ListStyleType('persian');
  };
  protoOf(Companion_17).get_SimpChineseFormal_vtcj22_k$ = function () {
    return new ListStyleType('simp-chinese-formal');
  };
  protoOf(Companion_17).get_SimpChineseInformal_q999un_k$ = function () {
    return new ListStyleType('simp-chinese-informal');
  };
  protoOf(Companion_17).get_Square_4go9ja_k$ = function () {
    return new ListStyleType('square');
  };
  protoOf(Companion_17).get_Tamil_ihcepm_k$ = function () {
    return new ListStyleType('tamil');
  };
  protoOf(Companion_17).get_Telugu_4qz0i9_k$ = function () {
    return new ListStyleType('telugu');
  };
  protoOf(Companion_17).get_Thai_woahvp_k$ = function () {
    return new ListStyleType('thai');
  };
  protoOf(Companion_17).get_TradChineseFormal_7jy5gu_k$ = function () {
    return new ListStyleType('trad-chinese-formal');
  };
  protoOf(Companion_17).get_TradChineseInformal_j8y7ih_k$ = function () {
    return new ListStyleType('trad-chinese-informal');
  };
  protoOf(Companion_17).get_UpperAlpha_f6mwsb_k$ = function () {
    return new ListStyleType('upper-alpha');
  };
  protoOf(Companion_17).get_UpperArmenian_gf87di_k$ = function () {
    return new ListStyleType('upper-armenian');
  };
  protoOf(Companion_17).get_UpperGreek_f38jix_k$ = function () {
    return new ListStyleType('upper-greek');
  };
  protoOf(Companion_17).get_UpperLatin_f0s445_k$ = function () {
    return new ListStyleType('upper-latin');
  };
  protoOf(Companion_17).get_UpperRoman_ex8k4c_k$ = function () {
    return new ListStyleType('upper-roman');
  };
  protoOf(Companion_17).get_None_wo6tgh_k$ = function () {
    return new ListStyleType('none');
  };
  protoOf(Companion_17).get_Inherit_a1a9e6_k$ = function () {
    return new ListStyleType('inherit');
  };
  protoOf(Companion_17).get_Initial_a0h2v9_k$ = function () {
    return new ListStyleType('initial');
  };
  protoOf(Companion_17).get_Revert_3t1tzh_k$ = function () {
    return new ListStyleType('revert');
  };
  protoOf(Companion_17).get_Unset_ii4mhs_k$ = function () {
    return new ListStyleType('unset');
  };
  var Companion_instance_17;
  function Companion_getInstance_21() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function get_$stableprop_51() {
    return 0;
  }
  function ListStyleType(value) {
    Companion_getInstance_21();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(ListStyleType).toString = function () {
    return this.value_1;
  };
  function _get_value__a43j40_17($this) {
    return $this.value_1;
  }
  function Companion_18() {
    Companion_instance_18 = this;
  }
  protoOf(Companion_18).get_Inside_bggkb_k$ = function () {
    return new ListStylePosition('inside');
  };
  protoOf(Companion_18).get_Outside_ai50v0_k$ = function () {
    return new ListStylePosition('outside');
  };
  protoOf(Companion_18).get_Inherit_a1a9e6_k$ = function () {
    return new ListStylePosition('inherit');
  };
  protoOf(Companion_18).get_Initial_a0h2v9_k$ = function () {
    return new ListStylePosition('initial');
  };
  protoOf(Companion_18).get_Revert_3t1tzh_k$ = function () {
    return new ListStylePosition('revert');
  };
  protoOf(Companion_18).get_Unset_ii4mhs_k$ = function () {
    return new ListStylePosition('unset');
  };
  var Companion_instance_18;
  function Companion_getInstance_22() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function get_$stableprop_52() {
    return 0;
  }
  function ListStylePosition(value) {
    Companion_getInstance_22();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(ListStylePosition).toString = function () {
    return this.value_1;
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
      _this__u8e3s4.property_npxg1h_k$('list-style-type', type);
    }
    if (position == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.property_npxg1h_k$('list-style-position', position);
    }
    if (image == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.property_npxg1h_k$('list-style-image', image);
    }
  }
  function objectFit(_this__u8e3s4, objectFit) {
    _this__u8e3s4.property_npxg1h_k$('object-fit', objectFit);
  }
  function _get_value__a43j40_18($this) {
    return $this.value_1;
  }
  function Companion_19() {
    Companion_instance_19 = this;
  }
  protoOf(Companion_19).get_Normal_22avww_k$ = function () {
    return new MixBlendMode('normal');
  };
  protoOf(Companion_19).get_Multiply_jx6cqb_k$ = function () {
    return new MixBlendMode('multiply');
  };
  protoOf(Companion_19).get_Screen_48xaxh_k$ = function () {
    return new MixBlendMode('screen');
  };
  protoOf(Companion_19).get_Overlay_aqx5jb_k$ = function () {
    return new MixBlendMode('overlay');
  };
  protoOf(Companion_19).get_Darken_2vuhq0_k$ = function () {
    return new MixBlendMode('darken');
  };
  protoOf(Companion_19).get_Lighten_vm6n1y_k$ = function () {
    return new MixBlendMode('lighten');
  };
  protoOf(Companion_19).get_ColorDodge_xpig2l_k$ = function () {
    return new MixBlendMode('color-dodge');
  };
  protoOf(Companion_19).get_ColorBurn_3dln9l_k$ = function () {
    return new MixBlendMode('color-burn');
  };
  protoOf(Companion_19).get_HardLight_twrkma_k$ = function () {
    return new MixBlendMode('hard-light');
  };
  protoOf(Companion_19).get_SoftLight_73ckeb_k$ = function () {
    return new MixBlendMode('soft-light');
  };
  protoOf(Companion_19).get_Difference_tnhgre_k$ = function () {
    return new MixBlendMode('difference');
  };
  protoOf(Companion_19).get_Exclusion_1hb6rf_k$ = function () {
    return new MixBlendMode('exclusion');
  };
  protoOf(Companion_19).get_Hue_18jrtd_k$ = function () {
    return new MixBlendMode('hue');
  };
  protoOf(Companion_19).get_Saturation_8zdkl7_k$ = function () {
    return new MixBlendMode('saturation');
  };
  protoOf(Companion_19).get_Color_i88tui_k$ = function () {
    return new MixBlendMode('color');
  };
  protoOf(Companion_19).get_Luminosity_ma147q_k$ = function () {
    return new MixBlendMode('luminosity');
  };
  protoOf(Companion_19).get_Inherit_a1a9e6_k$ = function () {
    return new MixBlendMode('inherit');
  };
  protoOf(Companion_19).get_Initial_a0h2v9_k$ = function () {
    return new MixBlendMode('initial');
  };
  protoOf(Companion_19).get_Revert_3t1tzh_k$ = function () {
    return new MixBlendMode('revert');
  };
  protoOf(Companion_19).get_Unset_ii4mhs_k$ = function () {
    return new MixBlendMode('unset');
  };
  var Companion_instance_19;
  function Companion_getInstance_23() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function get_$stableprop_53() {
    return 0;
  }
  function MixBlendMode(value) {
    Companion_getInstance_23();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(MixBlendMode).toString = function () {
    return this.value_1;
  };
  function _get_value__a43j40_19($this) {
    return $this.value_1;
  }
  function Companion_20() {
    Companion_instance_20 = this;
  }
  protoOf(Companion_20).get_Contain_qhyalx_k$ = function () {
    return new ObjectFit('contain');
  };
  protoOf(Companion_20).get_Cover_i8910u_k$ = function () {
    return new ObjectFit('cover');
  };
  protoOf(Companion_20).get_Fill_wo1l2k_k$ = function () {
    return new ObjectFit('fill');
  };
  protoOf(Companion_20).get_None_wo6tgh_k$ = function () {
    return new ObjectFit('none');
  };
  protoOf(Companion_20).get_ScaleDown_ala7ur_k$ = function () {
    return new ObjectFit('scale-down');
  };
  protoOf(Companion_20).get_Inherit_a1a9e6_k$ = function () {
    return new ObjectFit('inherit');
  };
  protoOf(Companion_20).get_Initial_a0h2v9_k$ = function () {
    return new ObjectFit('initial');
  };
  protoOf(Companion_20).get_Revert_3t1tzh_k$ = function () {
    return new ObjectFit('revert');
  };
  protoOf(Companion_20).get_Unset_ii4mhs_k$ = function () {
    return new ObjectFit('unset');
  };
  var Companion_instance_20;
  function Companion_getInstance_24() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function get_$stableprop_54() {
    return 0;
  }
  function ObjectFit(value) {
    Companion_getInstance_24();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(ObjectFit).toString = function () {
    return this.value_1;
  };
  function mixBlendMode(_this__u8e3s4, blendMode) {
    _this__u8e3s4.property_npxg1h_k$('mix-blend-mode', blendMode);
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
    _this__u8e3s4.property_npxg1h_k$('outline', this_0);
  }
  function get_$stableprop_55() {
    return 8;
  }
  function CSSOutline() {
    this.width_1 = null;
    this.style_1 = null;
    this.color_1 = null;
    this.$stable_1 = 8;
  }
  protoOf(CSSOutline).set_width_9utmsf_k$ = function (_set____db54di) {
    this.width_1 = _set____db54di;
  };
  protoOf(CSSOutline).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(CSSOutline).set_style_27eag0_k$ = function (_set____db54di) {
    this.style_1 = _set____db54di;
  };
  protoOf(CSSOutline).get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  protoOf(CSSOutline).set_color_q6gjw9_k$ = function (_set____db54di) {
    this.color_1 = _set____db54di;
  };
  protoOf(CSSOutline).get_color_ipu8u2_k$ = function () {
    return this.color_1;
  };
  protoOf(CSSOutline).equals = function (other) {
    var tmp;
    if (other instanceof CSSOutline) {
      tmp = (equals(this.width_1, other.width_1) ? equals(this.style_1, other.style_1) : false) ? equals(this.color_1, other.color_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CSSOutline).toString = function () {
    var values = listOfNotNull([this.color_1, this.style_1, this.width_1]);
    return joinToString(values, ' ');
  };
  function outline$lambda($width, $style, $color) {
    return function ($this$outline) {
      $this$outline.width_1 = $width;
      $this$outline.style_1 = $style;
      $this$outline.color_1 = $color;
      return Unit_getInstance();
    };
  }
  function _get_value__a43j40_20($this) {
    return $this.value_1;
  }
  function Companion_21() {
    Companion_instance_21 = this;
  }
  protoOf(Companion_21).get_Visible_yikvpz_k$ = function () {
    return new Overflow('visible');
  };
  protoOf(Companion_21).get_Hidden_viqel_k$ = function () {
    return new Overflow('hidden');
  };
  protoOf(Companion_21).get_Clip_wnzq9l_k$ = function () {
    return new Overflow('clip');
  };
  protoOf(Companion_21).get_Scroll_48xiie_k$ = function () {
    return new Overflow('scroll');
  };
  protoOf(Companion_21).get_Auto_wnyn88_k$ = function () {
    return new Overflow('auto');
  };
  protoOf(Companion_21).get_Inherit_a1a9e6_k$ = function () {
    return new Overflow('inherit');
  };
  protoOf(Companion_21).get_Initial_a0h2v9_k$ = function () {
    return new Overflow('initial');
  };
  protoOf(Companion_21).get_Revert_3t1tzh_k$ = function () {
    return new Overflow('revert');
  };
  protoOf(Companion_21).get_Unset_ii4mhs_k$ = function () {
    return new Overflow('unset');
  };
  var Companion_instance_21;
  function Companion_getInstance_25() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function get_$stableprop_56() {
    return 0;
  }
  function Overflow(value) {
    Companion_getInstance_25();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(Overflow).toString = function () {
    return this.value_1;
  };
  function overflowX(_this__u8e3s4, overflowX) {
    _this__u8e3s4.property_npxg1h_k$('overflow-x', overflowX);
  }
  function overflowY(_this__u8e3s4, overflowY) {
    _this__u8e3s4.property_npxg1h_k$('overflow-y', overflowY);
  }
  function overflow(_this__u8e3s4, overflow) {
    _this__u8e3s4.property_npxg1h_k$('overflow', overflow);
  }
  function _get_value__a43j40_21($this) {
    return $this.value_1;
  }
  function Companion_22() {
    Companion_instance_22 = this;
  }
  protoOf(Companion_22).get_Normal_22avww_k$ = function () {
    return new OverflowWrap('normal');
  };
  protoOf(Companion_22).get_BreakWord_a9p49s_k$ = function () {
    return new OverflowWrap('break-word');
  };
  protoOf(Companion_22).get_Anywhere_yvjyp0_k$ = function () {
    return new OverflowWrap('anywhere');
  };
  protoOf(Companion_22).get_Inherit_a1a9e6_k$ = function () {
    return new OverflowWrap('inherit');
  };
  protoOf(Companion_22).get_Initial_a0h2v9_k$ = function () {
    return new OverflowWrap('initial');
  };
  protoOf(Companion_22).get_Revert_3t1tzh_k$ = function () {
    return new OverflowWrap('revert');
  };
  protoOf(Companion_22).get_Unset_ii4mhs_k$ = function () {
    return new OverflowWrap('unset');
  };
  var Companion_instance_22;
  function Companion_getInstance_26() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function get_$stableprop_57() {
    return 0;
  }
  function OverflowWrap(value) {
    Companion_getInstance_26();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(OverflowWrap).toString = function () {
    return this.value_1;
  };
  function overflowWrap(_this__u8e3s4, overflowWrap) {
    _this__u8e3s4.property_npxg1h_k$('overflow-wrap', overflowWrap);
  }
  function _get_value__a43j40_22($this) {
    return $this.value_1;
  }
  function Companion_23() {
    Companion_instance_23 = this;
  }
  protoOf(Companion_23).get_Auto_wnyn88_k$ = function () {
    return new PointerEvents('auto');
  };
  protoOf(Companion_23).get_None_wo6tgh_k$ = function () {
    return new PointerEvents('none');
  };
  protoOf(Companion_23).get_Inherit_a1a9e6_k$ = function () {
    return new PointerEvents('inherit');
  };
  protoOf(Companion_23).get_Initial_a0h2v9_k$ = function () {
    return new PointerEvents('initial');
  };
  protoOf(Companion_23).get_Revert_3t1tzh_k$ = function () {
    return new PointerEvents('revert');
  };
  protoOf(Companion_23).get_Unset_ii4mhs_k$ = function () {
    return new PointerEvents('unset');
  };
  var Companion_instance_23;
  function Companion_getInstance_27() {
    if (Companion_instance_23 == null)
      new Companion_23();
    return Companion_instance_23;
  }
  function get_$stableprop_58() {
    return 0;
  }
  function PointerEvents(value) {
    Companion_getInstance_27();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(PointerEvents).toString = function () {
    return this.value_1;
  };
  function pointerEvents(_this__u8e3s4, pointerEvents) {
    _this__u8e3s4.property_npxg1h_k$('pointer-events', pointerEvents);
  }
  function _get_value__a43j40_23($this) {
    return $this.value_1;
  }
  function Companion_24() {
    Companion_instance_24 = this;
  }
  protoOf(Companion_24).get_Auto_wnyn88_k$ = function () {
    return new ScrollBehavior('auto');
  };
  protoOf(Companion_24).get_Smooth_4edjo7_k$ = function () {
    return new ScrollBehavior('smooth');
  };
  protoOf(Companion_24).get_Inherit_a1a9e6_k$ = function () {
    return new ScrollBehavior('inherit');
  };
  protoOf(Companion_24).get_Initial_a0h2v9_k$ = function () {
    return new ScrollBehavior('initial');
  };
  protoOf(Companion_24).get_Revert_3t1tzh_k$ = function () {
    return new ScrollBehavior('revert');
  };
  protoOf(Companion_24).get_Unset_ii4mhs_k$ = function () {
    return new ScrollBehavior('unset');
  };
  var Companion_instance_24;
  function Companion_getInstance_28() {
    if (Companion_instance_24 == null)
      new Companion_24();
    return Companion_instance_24;
  }
  function get_$stableprop_59() {
    return 0;
  }
  function ScrollBehavior(value) {
    Companion_getInstance_28();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(ScrollBehavior).toString = function () {
    return this.value_1;
  };
  function scrollBehavior(_this__u8e3s4, scrollBehavior) {
    _this__u8e3s4.property_npxg1h_k$('scroll-behavior', scrollBehavior);
  }
  function StyleVariable(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariablePropertyProvider(defaultFallback, prefix);
  }
  function StyleVariable_0(prefix) {
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariablePropertyProvider(null, prefix);
  }
  function _get_defaultFallback__wdjuwe($this) {
    return $this.defaultFallback_1;
  }
  function _get_prefix__wiwq7t($this) {
    return $this.prefix_1;
  }
  function get_$stableprop_60() {
    return 0;
  }
  function StyleVariableNumberProvider(defaultFallback, prefix) {
    this.defaultFallback_1 = defaultFallback;
    this.prefix_1 = prefix;
    this.$stable_1 = 0;
  }
  protoOf(StyleVariableNumberProvider).getValue_fbnwi2_k$ = function (thisRef, property) {
    return new NumberValue(provideVariableName(thisRef, property), this.defaultFallback_1, this.prefix_1);
  };
  function get_$stableprop_61() {
    return 0;
  }
  function get_$stableprop_62() {
    return 0;
  }
  function get_$stableprop_63() {
    return 0;
  }
  function _get_defaultFallback__wdjuwe_0($this) {
    return $this.defaultFallback_1;
  }
  function PropertyValue(name, defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    StyleVariable_1.call(this, name, defaultFallback, prefix);
    this.$stable_2 = 0;
  }
  protoOf(PropertyValue).value_wk9s6x_k$ = function (fallback) {
    return this.variableValue_ovgee5_k$(fallback);
  };
  protoOf(PropertyValue).value_66g3ir_k$ = function (fallback) {
    return this.value_wk9s6x_k$((fallback == null ? true : !(fallback == null)) ? fallback : THROW_CCE());
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
    StyleVariable_1.call(this, name, tmp, prefix);
    this.$stable_2 = 0;
  }
  protoOf(NumberValue).value_9bth3g_k$ = function (fallback) {
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
    return this.variableValue_ovgee5_k$(tmp);
  };
  protoOf(NumberValue).value_66g3ir_k$ = function (fallback) {
    return this.value_9bth3g_k$((fallback == null ? true : isNumber(fallback)) ? fallback : THROW_CCE());
  };
  function StringValue(name, defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    var tmp;
    if (defaultFallback == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.StringValue.<init>.<anonymous>' call
      // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = defaultFallback;
    }
    StyleVariable_1.call(this, name, tmp, prefix);
    this.$stable_2 = 0;
  }
  protoOf(StringValue).value_lu1i8m_k$ = function (fallback) {
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp;
    if (fallback == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.StringValue.value.<anonymous>' call
      // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = fallback;
    }
    // Inline function 'kotlin.js.asDynamic' call
    return this.variableValue_ovgee5_k$(tmp);
  };
  protoOf(StringValue).value_66g3ir_k$ = function (fallback) {
    return this.value_lu1i8m_k$((fallback == null ? true : typeof fallback === 'string') ? fallback : THROW_CCE());
  };
  function get_$stableprop_64() {
    return 0;
  }
  function StyleVariable_1(name, defaultFallback, prefix) {
    this.defaultFallback_1 = defaultFallback;
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
    tmp.name_1 = tmp1_elvis_lhs == null ? name : tmp1_elvis_lhs;
    this.$stable_1 = 0;
  }
  protoOf(StyleVariable_1).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(StyleVariable_1).value$default_36t2hw_k$ = function (fallback, $super) {
    fallback = fallback === VOID ? null : fallback;
    return $super === VOID ? this.value_66g3ir_k$(fallback) : $super.value_66g3ir_k$.call(this, fallback);
  };
  protoOf(StyleVariable_1).variableValue_ovgee5_k$ = function (fallback) {
    // Inline function 'org.jetbrains.compose.web.css.CSSVariableValue' call
    var tmp1_safe_receiver = fallback == null ? this.defaultFallback_1 : fallback;
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
    return 'var(--' + this.name_1 + (tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs) + ')';
  };
  function StyleVariable_2(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariableNumberProvider(defaultFallback, prefix);
  }
  function _get_defaultFallback__wdjuwe_1($this) {
    return $this.defaultFallback_1;
  }
  function _get_prefix__wiwq7t_0($this) {
    return $this.prefix_1;
  }
  function get_$stableprop_65() {
    return 0;
  }
  function StyleVariablePropertyProvider(defaultFallback, prefix) {
    this.defaultFallback_1 = defaultFallback;
    this.prefix_1 = prefix;
    this.$stable_1 = 0;
  }
  protoOf(StyleVariablePropertyProvider).getValue_fbnwi2_k$ = function (thisRef, property) {
    return new PropertyValue(provideVariableName(thisRef, property), this.defaultFallback_1, this.prefix_1);
  };
  function StyleVariable_3(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariablePropertyProvider(defaultFallback, prefix);
  }
  function provideVariableName(groupObject, property) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.provideVariableName.<anonymous>' call
    if (!(groupObject == null)) {
      this_0.append_22ad7x_k$(removeSuffix(removeSuffix(titleCamelCaseToKebabCase(ensureNotNull(getKClassFromExpression(groupObject).get_simpleName_r6f8py_k$())), '-vars'), '-variables'));
      this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(45));
    }
    this_0.append_22ad7x_k$(removeSuffix(removeSuffix(titleCamelCaseToKebabCase(property.callableName), '-var'), '-variable'));
    return this_0.toString();
  }
  function setVariable(_this__u8e3s4, variable, value) {
    _this__u8e3s4.property_npxg1h_k$('--' + variable.name_1, value);
  }
  function setVariable_0(_this__u8e3s4, variable, value) {
    _this__u8e3s4.property_jk9dw6_k$('--' + variable.name_1, value);
  }
  function _get_value__a43j40_24($this) {
    return $this.value_1;
  }
  function Companion_25() {
    Companion_instance_25 = this;
  }
  protoOf(Companion_25).get_Left_wo5bw0_k$ = function () {
    return new TextAlign('left');
  };
  protoOf(Companion_25).get_Right_igdsyb_k$ = function () {
    return new TextAlign('right');
  };
  protoOf(Companion_25).get_Center_3arb0i_k$ = function () {
    return new TextAlign('center');
  };
  protoOf(Companion_25).get_Justify_84qi6f_k$ = function () {
    return new TextAlign('justify');
  };
  protoOf(Companion_25).get_JustifyAll_vzjb16_k$ = function () {
    return new TextAlign('justify-all');
  };
  protoOf(Companion_25).get_Start_ih4i6x_k$ = function () {
    return new TextAlign('start');
  };
  protoOf(Companion_25).get_End_18ju7i_k$ = function () {
    return new TextAlign('end');
  };
  protoOf(Companion_25).get_MatchParent_4236be_k$ = function () {
    return new TextAlign('match-parent');
  };
  var Companion_instance_25;
  function Companion_getInstance_29() {
    if (Companion_instance_25 == null)
      new Companion_25();
    return Companion_instance_25;
  }
  function get_$stableprop_66() {
    return 0;
  }
  function TextAlign(value) {
    Companion_getInstance_29();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(TextAlign).toString = function () {
    return this.value_1;
  };
  function _get_value__a43j40_25($this) {
    return $this.value_1;
  }
  function Companion_26() {
    Companion_instance_26 = this;
  }
  protoOf(Companion_26).get_None_wo6tgh_k$ = function () {
    return new UserSelect('none');
  };
  protoOf(Companion_26).get_Auto_wnyn88_k$ = function () {
    return new UserSelect('auto');
  };
  protoOf(Companion_26).get_Text_woag7q_k$ = function () {
    return new UserSelect('text');
  };
  protoOf(Companion_26).get_Contain_qhyalx_k$ = function () {
    return new UserSelect('contain');
  };
  protoOf(Companion_26).get_All_18jx7s_k$ = function () {
    return new UserSelect('all');
  };
  protoOf(Companion_26).get_Inherit_a1a9e6_k$ = function () {
    return new UserSelect('inherit');
  };
  protoOf(Companion_26).get_Initial_a0h2v9_k$ = function () {
    return new UserSelect('initial');
  };
  protoOf(Companion_26).get_Revert_3t1tzh_k$ = function () {
    return new UserSelect('revert');
  };
  protoOf(Companion_26).get_Unset_ii4mhs_k$ = function () {
    return new UserSelect('unset');
  };
  var Companion_instance_26;
  function Companion_getInstance_30() {
    if (Companion_instance_26 == null)
      new Companion_26();
    return Companion_instance_26;
  }
  function get_$stableprop_67() {
    return 0;
  }
  function UserSelect(value) {
    Companion_getInstance_30();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(UserSelect).toString = function () {
    return this.value_1;
  };
  function _get_value__a43j40_26($this) {
    return $this.value_1;
  }
  function Companion_27() {
    Companion_instance_27 = this;
  }
  protoOf(Companion_27).get_Normal_22avww_k$ = function () {
    return new WhiteSpace('normal');
  };
  protoOf(Companion_27).get_NoWrap_21tqz8_k$ = function () {
    return new WhiteSpace('nowrap');
  };
  protoOf(Companion_27).get_Pre_18jlye_k$ = function () {
    return new WhiteSpace('pre');
  };
  protoOf(Companion_27).get_PreWrap_nintz8_k$ = function () {
    return new WhiteSpace('pre-wrap');
  };
  protoOf(Companion_27).get_PreLine_nigmr2_k$ = function () {
    return new WhiteSpace('pre-line');
  };
  protoOf(Companion_27).get_BreakSpaces_6b23jx_k$ = function () {
    return new WhiteSpace('break-spaces');
  };
  protoOf(Companion_27).get_Inherit_a1a9e6_k$ = function () {
    return new WhiteSpace('inherit');
  };
  protoOf(Companion_27).get_Initial_a0h2v9_k$ = function () {
    return new WhiteSpace('initial');
  };
  protoOf(Companion_27).get_Revert_3t1tzh_k$ = function () {
    return new WhiteSpace('revert');
  };
  protoOf(Companion_27).get_Unset_ii4mhs_k$ = function () {
    return new WhiteSpace('unset');
  };
  var Companion_instance_27;
  function Companion_getInstance_31() {
    if (Companion_instance_27 == null)
      new Companion_27();
    return Companion_instance_27;
  }
  function get_$stableprop_68() {
    return 0;
  }
  function WhiteSpace(value) {
    Companion_getInstance_31();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(WhiteSpace).toString = function () {
    return this.value_1;
  };
  function userSelect(_this__u8e3s4, userSelect) {
    _this__u8e3s4.property_npxg1h_k$('user-select', userSelect);
  }
  function whiteSpace(_this__u8e3s4, whiteSpace) {
    _this__u8e3s4.property_npxg1h_k$('white-space', whiteSpace);
  }
  function textAlign(_this__u8e3s4, textAlign) {
    _this__u8e3s4.property_npxg1h_k$('text-align', textAlign);
  }
  function _get_value__a43j40_27($this) {
    return $this.value_1;
  }
  function Companion_28() {
    Companion_instance_28 = this;
  }
  protoOf(Companion_28).get_Underline_oo7egz_k$ = function () {
    return new TextDecorationLine('underline');
  };
  protoOf(Companion_28).get_Overline_lz0ci7_k$ = function () {
    return new TextDecorationLine('overline');
  };
  protoOf(Companion_28).get_LineThrough_pr9ajs_k$ = function () {
    return new TextDecorationLine('line-through');
  };
  protoOf(Companion_28).get_None_wo6tgh_k$ = function () {
    return new TextDecorationLine('none');
  };
  protoOf(Companion_28).get_Inherit_a1a9e6_k$ = function () {
    return new TextDecorationLine('inherit');
  };
  protoOf(Companion_28).get_Initial_a0h2v9_k$ = function () {
    return new TextDecorationLine('initial');
  };
  protoOf(Companion_28).get_Revert_3t1tzh_k$ = function () {
    return new TextDecorationLine('revert');
  };
  protoOf(Companion_28).get_Unset_ii4mhs_k$ = function () {
    return new TextDecorationLine('unset');
  };
  var Companion_instance_28;
  function Companion_getInstance_32() {
    if (Companion_instance_28 == null)
      new Companion_28();
    return Companion_instance_28;
  }
  function get_$stableprop_69() {
    return 0;
  }
  function TextDecorationLine(value) {
    Companion_getInstance_32();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(TextDecorationLine).toString = function () {
    return this.value_1;
  };
  function textDecorationLine(_this__u8e3s4, textDecorationLines) {
    _this__u8e3s4.property_wcrait_k$('text-decoration-line', joinToString_0(textDecorationLines, ' '));
  }
  function translateX(_this__u8e3s4, tx) {
    translate(_this__u8e3s4, tx);
  }
  function scale(_this__u8e3s4, s) {
    _this__u8e3s4.property_npxg1h_k$('scale', s);
  }
  function translateY(_this__u8e3s4, ty) {
    translate_0(_this__u8e3s4, get_percent(0), ty);
  }
  function scale_0(_this__u8e3s4, s) {
    _this__u8e3s4.property_jk9dw6_k$('scale', s);
  }
  function translate(_this__u8e3s4, tx) {
    _this__u8e3s4.property_npxg1h_k$('translate', tx);
  }
  function translate_0(_this__u8e3s4, tx, ty) {
    _this__u8e3s4.property_wcrait_k$('translate', '' + tx + ' ' + ty);
  }
  function Companion_29() {
    Companion_instance_29 = this;
  }
  protoOf(Companion_29).group_t9r796_k$ = function (properties, duration, timingFunction, delay) {
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(properties, 10));
    var tmp0_iterator = properties.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.compose.css.Companion.group.<anonymous>' call
      var tmp$ret$0 = CSSTransition_init_$Create$(item, duration, timingFunction, delay);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return copyToArray(destination);
  };
  protoOf(Companion_29).group$default_5lgzta_k$ = function (properties, duration, timingFunction, delay, $super) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    return $super === VOID ? this.group_t9r796_k$(properties, duration, timingFunction, delay) : $super.group_t9r796_k$.call(this, properties, duration, timingFunction, delay);
  };
  protoOf(Companion_29).group_9h9urd_k$ = function (properties, duration, timingFunction, delay) {
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(properties, 10));
    var tmp0_iterator = properties.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.compose.css.Companion.group.<anonymous>' call
      var tmp$ret$0 = new CSSTransition(item, duration, timingFunction, delay);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return copyToArray(destination);
  };
  protoOf(Companion_29).group$default_8rh311_k$ = function (properties, duration, timingFunction, delay, $super) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    return $super === VOID ? this.group_9h9urd_k$(properties, duration, timingFunction, delay) : $super.group_9h9urd_k$.call(this, properties, duration, timingFunction, delay);
  };
  var Companion_instance_29;
  function Companion_getInstance_33() {
    if (Companion_instance_29 == null)
      new Companion_29();
    return Companion_instance_29;
  }
  function CSSTransition_init_$Init$(property, duration, timingFunction, delay, $this) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    CSSTransition.call($this, Companion_getInstance_34().of_5gnbr7_k$(property), duration, timingFunction, delay);
    return $this;
  }
  function CSSTransition_init_$Create$(property, duration, timingFunction, delay) {
    return CSSTransition_init_$Init$(property, duration, timingFunction, delay, objectCreate(protoOf(CSSTransition)));
  }
  function get_$stableprop_70() {
    return 0;
  }
  function CSSTransition(property, duration, timingFunction, delay) {
    Companion_getInstance_33();
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    this.property_1 = property;
    this.duration_1 = duration;
    this.timingFunction_1 = timingFunction;
    this.delay_1 = delay;
    this.$stable_1 = 0;
  }
  protoOf(CSSTransition).get_property_msvula_k$ = function () {
    return this.property_1;
  };
  protoOf(CSSTransition).get_duration_6a6kpp_k$ = function () {
    return this.duration_1;
  };
  protoOf(CSSTransition).get_timingFunction_3u6rat_k$ = function () {
    return this.timingFunction_1;
  };
  protoOf(CSSTransition).get_delay_iq7n8a_k$ = function () {
    return this.delay_1;
  };
  protoOf(CSSTransition).toString = function () {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>' call
    this_0.add_utx5q5_k$(this.property_1.toString());
    var tmp0_safe_receiver = this.duration_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>.<anonymous>' call
      this_0.add_utx5q5_k$(toString(tmp0_safe_receiver));
    }
    var tmp1_safe_receiver = this.timingFunction_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.css.CSSTransition.toString.<anonymous>.<anonymous>' call
      this_0.add_utx5q5_k$(toString(tmp1_safe_receiver));
    }
    if (!(this.delay_1 == null)) {
      if (this.duration_1 == null) {
        this_0.add_utx5q5_k$('0s');
      }
      this_0.add_utx5q5_k$(toString(this.delay_1));
    }
    var tmp$ret$6 = this_0.build_1k0s4u_k$();
    return joinToString(tmp$ret$6, ' ');
  };
  protoOf(CSSTransition).component1_7eebsc_k$ = function () {
    return this.property_1;
  };
  protoOf(CSSTransition).component2_7eebsb_k$ = function () {
    return this.duration_1;
  };
  protoOf(CSSTransition).component3_7eebsa_k$ = function () {
    return this.timingFunction_1;
  };
  protoOf(CSSTransition).component4_7eebs9_k$ = function () {
    return this.delay_1;
  };
  protoOf(CSSTransition).copy_9p7glc_k$ = function (property, duration, timingFunction, delay) {
    return new CSSTransition(property, duration, timingFunction, delay);
  };
  protoOf(CSSTransition).copy$default_69riea_k$ = function (property, duration, timingFunction, delay, $super) {
    property = property === VOID ? this.property_1 : property;
    duration = duration === VOID ? this.duration_1 : duration;
    timingFunction = timingFunction === VOID ? this.timingFunction_1 : timingFunction;
    delay = delay === VOID ? this.delay_1 : delay;
    return $super === VOID ? this.copy_9p7glc_k$(property, duration, timingFunction, delay) : $super.copy_9p7glc_k$.call(this, property, duration, timingFunction, delay);
  };
  protoOf(CSSTransition).hashCode = function () {
    var result = hashCode(this.property_1);
    result = imul(result, 31) + (this.duration_1 == null ? 0 : hashCode(this.duration_1)) | 0;
    result = imul(result, 31) + (this.timingFunction_1 == null ? 0 : hashCode(this.timingFunction_1)) | 0;
    result = imul(result, 31) + (this.delay_1 == null ? 0 : hashCode(this.delay_1)) | 0;
    return result;
  };
  protoOf(CSSTransition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSTransition))
      return false;
    var tmp0_other_with_cast = other instanceof CSSTransition ? other : THROW_CCE();
    if (!equals(this.property_1, tmp0_other_with_cast.property_1))
      return false;
    if (!equals(this.duration_1, tmp0_other_with_cast.duration_1))
      return false;
    if (!equals(this.timingFunction_1, tmp0_other_with_cast.timingFunction_1))
      return false;
    if (!equals(this.delay_1, tmp0_other_with_cast.delay_1))
      return false;
    return true;
  };
  function _get_value__a43j40_28($this) {
    return $this.value_1;
  }
  function Companion_30() {
    Companion_instance_30 = this;
  }
  protoOf(Companion_30).of_5gnbr7_k$ = function (customValue) {
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
  protoOf(Companion_30).get_None_wo6tgh_k$ = function () {
    return new TransitionProperty('none');
  };
  protoOf(Companion_30).get_All_18jx7s_k$ = function () {
    return new TransitionProperty('all');
  };
  protoOf(Companion_30).get_Inherit_a1a9e6_k$ = function () {
    return new TransitionProperty('inherit');
  };
  protoOf(Companion_30).get_Initial_a0h2v9_k$ = function () {
    return new TransitionProperty('initial');
  };
  protoOf(Companion_30).get_Revert_3t1tzh_k$ = function () {
    return new TransitionProperty('revert');
  };
  protoOf(Companion_30).get_Unset_ii4mhs_k$ = function () {
    return new TransitionProperty('unset');
  };
  var Companion_instance_30;
  function Companion_getInstance_34() {
    if (Companion_instance_30 == null)
      new Companion_30();
    return Companion_instance_30;
  }
  function get_$stableprop_71() {
    return 0;
  }
  function TransitionProperty(value) {
    Companion_getInstance_34();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(TransitionProperty).toString = function () {
    return this.value_1;
  };
  function transition(_this__u8e3s4, transitions) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(transitions.length === 0)) {
      _this__u8e3s4.property_wcrait_k$('transition', joinToString_0(transitions));
    }
  }
  function _get_value__a43j40_29($this) {
    return $this.value_1;
  }
  function Companion_31() {
    Companion_instance_31 = this;
  }
  protoOf(Companion_31).get_Visible_yikvpz_k$ = function () {
    return new Visibility('visible');
  };
  protoOf(Companion_31).get_Hidden_viqel_k$ = function () {
    return new Visibility('hidden');
  };
  protoOf(Companion_31).get_Collapse_tuc2om_k$ = function () {
    return new Visibility('collapse');
  };
  protoOf(Companion_31).get_Inherit_a1a9e6_k$ = function () {
    return new Visibility('inherit');
  };
  protoOf(Companion_31).get_Initial_a0h2v9_k$ = function () {
    return new Visibility('initial');
  };
  protoOf(Companion_31).get_Revert_3t1tzh_k$ = function () {
    return new Visibility('revert');
  };
  protoOf(Companion_31).get_Unset_ii4mhs_k$ = function () {
    return new Visibility('unset');
  };
  var Companion_instance_31;
  function Companion_getInstance_35() {
    if (Companion_instance_31 == null)
      new Companion_31();
    return Companion_instance_31;
  }
  function get_$stableprop_72() {
    return 0;
  }
  function Visibility(value) {
    Companion_getInstance_35();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(Visibility).toString = function () {
    return this.value_1;
  };
  function visibility(_this__u8e3s4, visibility) {
    _this__u8e3s4.property_npxg1h_k$('visibility', visibility);
  }
  function _get_value__a43j40_30($this) {
    return $this.value_1;
  }
  function Keyword_3(value) {
    CSSImage.call(this, value);
  }
  function Url(url) {
    CSSImage.call(this, url.toString());
  }
  function Gradient(gradient) {
    CSSImage.call(this, gradient.toString());
  }
  function Companion_32() {
    Companion_instance_32 = this;
  }
  protoOf(Companion_32).of_dq0j3b_k$ = function (url) {
    return new Url(url);
  };
  protoOf(Companion_32).of_jjeryt_k$ = function (gradient) {
    return new Gradient(gradient);
  };
  protoOf(Companion_32).get_None_wo6tgh_k$ = function () {
    return new Keyword_3('none');
  };
  protoOf(Companion_32).get_Inherit_a1a9e6_k$ = function () {
    return new Keyword_3('inherit');
  };
  protoOf(Companion_32).get_Initial_a0h2v9_k$ = function () {
    return new Keyword_3('initial');
  };
  protoOf(Companion_32).get_Revert_3t1tzh_k$ = function () {
    return new Keyword_3('revert');
  };
  protoOf(Companion_32).get_Unset_ii4mhs_k$ = function () {
    return new Keyword_3('unset');
  };
  var Companion_instance_32;
  function Companion_getInstance_36() {
    if (Companion_instance_32 == null)
      new Companion_32();
    return Companion_instance_32;
  }
  function get_$stableprop_73() {
    return 0;
  }
  function CSSImage(value) {
    Companion_getInstance_36();
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(CSSImage).toString = function () {
    return this.value_1;
  };
  function calc(action) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    return action(CalcScopeInstance_getInstance());
  }
  function _get_value__a43j40_31($this) {
    return $this.value_1;
  }
  function get_$stableprop_74() {
    return 0;
  }
  function CalcNum(value) {
    Number_0.call(this);
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(CalcNum).toString = function () {
    return this.value_1;
  };
  protoOf(CalcNum).toInt_1tsl84_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.value_1;
  };
  protoOf(CalcNum).toLong_edfucp_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.value_1;
  };
  protoOf(CalcNum).toFloat_jhbgwv_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.value_1;
  };
  protoOf(CalcNum).toDouble_ygsx0s_k$ = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.value_1;
  };
  protoOf(CalcNum).toByte_edm0nx_k$ = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(CalcNum).toShort_ja8oqn_k$ = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(CalcNum).plus_4ppioj_k$ = function (b) {
    return new CalcNum('calc(' + this + ' + ' + b + ')');
  };
  protoOf(CalcNum).minus_wfjn7n_k$ = function (b) {
    return new CalcNum('calc(' + this + ' - ' + b + ')');
  };
  protoOf(CalcNum).times_z3zgpl_k$ = function (b) {
    return new CalcNum('calc(' + this + ' * ' + b + ')');
  };
  protoOf(CalcNum).div_8ho5ac_k$ = function (b) {
    return new CalcNum('calc(' + this + ' / ' + b + ')');
  };
  protoOf(CalcNum).unaryMinus_6uz0qp_k$ = function () {
    return new CalcNum('calc(-1 * ' + this + ')');
  };
  protoOf(CalcNum).unaryPlus_g9fn1l_k$ = function () {
    return new CalcNum('calc(1 * ' + this + ')');
  };
  protoOf(CalcNum).plus_46f1vh_k$ = function (b) {
    return new CalcNum('calc(' + this + ' + ' + b + ')');
  };
  protoOf(CalcNum).minus_wyu40p_k$ = function (b) {
    return new CalcNum('calc(' + this + ' - ' + b + ')');
  };
  protoOf(CalcNum).times_zdu4gh_k$ = function (b) {
    return new CalcNum('calc(' + this + ' * ' + b + ')');
  };
  protoOf(CalcNum).div_90ym3e_k$ = function (b) {
    return new CalcNum('calc(' + this + ' / ' + b + ')');
  };
  function CalcScope() {
  }
  function get_$stableprop_75() {
    return 0;
  }
  function CalcScopeInstance() {
    CalcScopeInstance_instance = this;
    this.$stable_1 = 0;
  }
  var CalcScopeInstance_instance;
  function CalcScopeInstance_getInstance() {
    if (CalcScopeInstance_instance == null)
      new CalcScopeInstance();
    return CalcScopeInstance_instance;
  }
  function _get_value__a43j40_32($this) {
    return $this.value_1;
  }
  function get_$stableprop_76() {
    return 0;
  }
  function CSSFilter(value) {
    this.value_1 = value;
    this.$stable_1 = 0;
  }
  protoOf(CSSFilter).toString = function () {
    return this.value_1;
  };
  function blur(radius) {
    return new CSSFilter('blur(' + radius + ')');
  }
  function get_$stableprop_77() {
    return 0;
  }
  function get_$stableprop_78() {
    return 0;
  }
  function get_$stableprop_79() {
    return 0;
  }
  function Simple(value) {
    Color.call(this, '' + value);
    this.$stable_3 = 0;
  }
  function Stop(color, stop) {
    Color.call(this, '' + color + ' ' + stop);
    this.$stable_3 = 0;
  }
  function StopRange(color, from, to) {
    Color.call(this, '' + color + ' ' + from + ' ' + to);
    this.$stable_3 = 0;
  }
  function get_$stableprop_80() {
    return 0;
  }
  function get_$stableprop_81() {
    return 0;
  }
  function _get_entryStr__gktpos($this) {
    return $this.entryStr_1;
  }
  function Color(value) {
    Entry.call(this, value);
    this.value_1 = value;
    this.$stable_2 = 0;
  }
  protoOf(Color).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  function Hint(value) {
    Entry.call(this, '' + value);
    this.value_1 = value;
    this.$stable_2 = 0;
  }
  protoOf(Hint).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  function get_$stableprop_82() {
    return 0;
  }
  function Entry(entryStr) {
    this.entryStr_1 = entryStr;
    this.$stable_1 = 0;
  }
  protoOf(Entry).toString = function () {
    return this.entryStr_1;
  };
  function _get_entries__iz8n5($this) {
    return $this.entries_1;
  }
  function get_$stableprop_83() {
    return 8;
  }
  function ColorStopsBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.entries_1 = ArrayList_init_$Create$();
    this.$stable_1 = 8;
  }
  protoOf(ColorStopsBuilder).verifiedEntries_yuic0o_k$ = function () {
    // Inline function 'kotlin.check' call
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.count' call
      var this_0 = this.entries_1;
      var tmp;
      if (isInterface(this_0, Collection)) {
        tmp = this_0.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var count = 0;
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
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
    var tmp0_iterator_0 = this.entries_1.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.compose.css.functions.ColorStopsBuilder.verifiedEntries.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var i = checkIndexOverflow(tmp1);
      if (item instanceof Hint) {
        // Inline function 'kotlin.check' call
        var tmp_0;
        var tmp_1 = getOrNull(this.entries_1, i - 1 | 0);
        if (tmp_1 instanceof Color) {
          var tmp_2 = getOrNull(this.entries_1, i + 1 | 0);
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
    var this_1 = this.entries_1;
    return copyToArray(this_1);
  };
  protoOf(ColorStopsBuilder).add_ad4gbn_k$ = function (color) {
    return this.entries_1.add_utx5q5_k$(new Simple(color));
  };
  protoOf(ColorStopsBuilder).add_hkfvmd_k$ = function (color, stop) {
    return this.entries_1.add_utx5q5_k$(new Stop(color, stop));
  };
  protoOf(ColorStopsBuilder).add_8cat99_k$ = function (color, from, to) {
    return this.entries_1.add_utx5q5_k$(new StopRange(color, from, to));
  };
  protoOf(ColorStopsBuilder).setMidpoint_jac6ry_k$ = function (hint) {
    return this.entries_1.add_utx5q5_k$(new Hint(hint));
  };
  function Gradient_0() {
  }
  var Direction_ToTop_instance;
  var Direction_ToTopRight_instance;
  var Direction_ToRight_instance;
  var Direction_ToBottomRight_instance;
  var Direction_ToBottom_instance;
  var Direction_ToBottomLeft_instance;
  var Direction_ToLeft_instance;
  var Direction_ToTopLeft_instance;
  function values_2() {
    return [Direction_ToTop_getInstance(), Direction_ToTopRight_getInstance(), Direction_ToRight_getInstance(), Direction_ToBottomRight_getInstance(), Direction_ToBottom_getInstance(), Direction_ToBottomLeft_getInstance(), Direction_ToLeft_getInstance(), Direction_ToTopLeft_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'ToTop':
        return Direction_ToTop_getInstance();
      case 'ToTopRight':
        return Direction_ToTopRight_getInstance();
      case 'ToRight':
        return Direction_ToRight_getInstance();
      case 'ToBottomRight':
        return Direction_ToBottomRight_getInstance();
      case 'ToBottom':
        return Direction_ToBottom_getInstance();
      case 'ToBottomLeft':
        return Direction_ToBottomLeft_getInstance();
      case 'ToLeft':
        return Direction_ToLeft_getInstance();
      case 'ToTopLeft':
        return Direction_ToTopLeft_getInstance();
      default:
        Direction_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_2() {
    if ($ENTRIES_2 == null)
      $ENTRIES_2 = enumEntries(values_2());
    return $ENTRIES_2;
  }
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_getInstance();
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
  var $ENTRIES_2;
  function get_$stableprop_84() {
    return 0;
  }
  function get_$stableprop_85() {
    return 0;
  }
  function get_$stableprop_86() {
    return 0;
  }
  function _get_gradientStr__zhnu1c($this) {
    return $this.gradientStr_1;
  }
  function Direction(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(Direction).toString = function () {
    var tmp;
    switch (this.get_ordinal_ip24qg_k$()) {
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
  function Default(entries) {
    LinearGradient.call(this, joinToString_0(entries));
    this.$stable_2 = 0;
  }
  function ByDirection(dir, entries) {
    LinearGradient.call(this, '' + dir + ', ' + joinToString_0(entries));
    this.$stable_2 = 0;
  }
  function ByAngle(angle, entries) {
    LinearGradient.call(this, '' + angle + ', ' + joinToString_0(entries));
    this.$stable_2 = 0;
  }
  function get_$stableprop_87() {
    return 0;
  }
  function Direction_ToTop_getInstance() {
    Direction_initEntries();
    return Direction_ToTop_instance;
  }
  function Direction_ToTopRight_getInstance() {
    Direction_initEntries();
    return Direction_ToTopRight_instance;
  }
  function Direction_ToRight_getInstance() {
    Direction_initEntries();
    return Direction_ToRight_instance;
  }
  function Direction_ToBottomRight_getInstance() {
    Direction_initEntries();
    return Direction_ToBottomRight_instance;
  }
  function Direction_ToBottom_getInstance() {
    Direction_initEntries();
    return Direction_ToBottom_instance;
  }
  function Direction_ToBottomLeft_getInstance() {
    Direction_initEntries();
    return Direction_ToBottomLeft_instance;
  }
  function Direction_ToLeft_getInstance() {
    Direction_initEntries();
    return Direction_ToLeft_instance;
  }
  function Direction_ToTopLeft_getInstance() {
    Direction_initEntries();
    return Direction_ToTopLeft_instance;
  }
  function LinearGradient(gradientStr) {
    this.gradientStr_1 = gradientStr;
    this.$stable_1 = 0;
  }
  protoOf(LinearGradient).toString = function () {
    return 'linear-gradient(' + this.gradientStr_1 + ')';
  };
  function linearGradient(dir, from, to) {
    return linearGradient_0(dir, linearGradient$lambda(from, to));
  }
  function linearGradient_0(dir, init) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.apply' call
    var this_0 = new ColorStopsBuilder();
    // Inline function 'kotlin.contracts.contract' call
    init(this_0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.css.functions.linearGradient.<anonymous>' call
    return new ByDirection(dir, this_0.verifiedEntries_yuic0o_k$().slice());
  }
  function linearGradient$lambda($from, $to) {
    return function ($this$linearGradient) {
      $this$linearGradient.add_ad4gbn_k$($from);
      $this$linearGradient.add_ad4gbn_k$($to);
      return Unit_getInstance();
    };
  }
  function get_$stableprop_88() {
    return 0;
  }
  function CSSClamp(min, value, max) {
    this.min_1 = min;
    this.value_1 = value;
    this.max_1 = max;
    this.$stable_1 = 0;
  }
  protoOf(CSSClamp).get_min_18j0nr_k$ = function () {
    return this.min_1;
  };
  protoOf(CSSClamp).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(CSSClamp).get_max_18j0ud_k$ = function () {
    return this.max_1;
  };
  protoOf(CSSClamp).toString = function () {
    return 'clamp(' + this.min_1 + ', ' + this.value_1 + ', ' + this.max_1 + ')';
  };
  protoOf(CSSClamp).component1_7eebsc_k$ = function () {
    return this.min_1;
  };
  protoOf(CSSClamp).component2_7eebsb_k$ = function () {
    return this.value_1;
  };
  protoOf(CSSClamp).component3_7eebsa_k$ = function () {
    return this.max_1;
  };
  protoOf(CSSClamp).copy_qnqf6x_k$ = function (min, value, max) {
    return new CSSClamp(min, value, max);
  };
  protoOf(CSSClamp).copy$default_pbeh18_k$ = function (min, value, max, $super) {
    min = min === VOID ? this.min_1 : min;
    value = value === VOID ? this.value_1 : value;
    max = max === VOID ? this.max_1 : max;
    return $super === VOID ? this.copy_qnqf6x_k$(min, value, max) : $super.copy_qnqf6x_k$.call(this, min, value, max);
  };
  protoOf(CSSClamp).hashCode = function () {
    var result = hashCode(this.min_1);
    result = imul(result, 31) + hashCode(this.value_1) | 0;
    result = imul(result, 31) + hashCode(this.max_1) | 0;
    return result;
  };
  protoOf(CSSClamp).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSClamp))
      return false;
    var tmp0_other_with_cast = other instanceof CSSClamp ? other : THROW_CCE();
    if (!equals(this.min_1, tmp0_other_with_cast.min_1))
      return false;
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    if (!equals(this.max_1, tmp0_other_with_cast.max_1))
      return false;
    return true;
  };
  function clamp(min, value, max) {
    return new CSSClamp(min, value, max);
  }
  function _get_url__e6i4g2($this) {
    return $this.url_1;
  }
  function get_$stableprop_89() {
    return 0;
  }
  function CSSUrl(url) {
    this.url_1 = url;
    this.$stable_1 = 0;
  }
  protoOf(CSSUrl).toString = function () {
    return 'url("' + this.url_1 + '")';
  };
  function get_$stableprop_90() {
    return 0;
  }
  function _no_name_provided__qut3iv() {
  }
  protoOf(_no_name_provided__qut3iv).dispose_3nnxhr_k$ = function () {
    // Inline function 'com.varabyte.kobweb.compose.dom.Simple.invoke.<anonymous>' call
  };
  function get_$stableprop_91() {
    return 0;
  }
  function Simple_0(handle) {
    RefCallback.call(this);
    this.handle_1 = handle;
    this.$stable_2 = 0;
  }
  protoOf(Simple_0).get_handle_e5p7ht_k$ = function () {
    return this.handle_1;
  };
  protoOf(Simple_0).invoke_64dhf5_k$ = function (scope, element) {
    this.handle_1(element);
    // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
    return new _no_name_provided__qut3iv();
  };
  function Disposable(effect) {
    RefCallback.call(this);
    this.effect_1 = effect;
    this.$stable_2 = 0;
  }
  protoOf(Disposable).get_effect_ct67x6_k$ = function () {
    return this.effect_1;
  };
  protoOf(Disposable).invoke_64dhf5_k$ = function (scope, element) {
    return this.effect_1(scope, element);
  };
  function get_$stableprop_92() {
    return 0;
  }
  function get_$stableprop_93() {
    return 8;
  }
  function _get_keyedCallbacks__mth523($this) {
    return $this.keyedCallbacks_1;
  }
  function get_$stableprop_94() {
    return 8;
  }
  function RefCallback() {
    this.$stable_1 = 0;
  }
  function KeysToEffect(keys, refCallback) {
    this.keys_1 = keys;
    this.refCallback_1 = refCallback;
    this.$stable_1 = 8;
  }
  protoOf(KeysToEffect).get_keys_wop4xp_k$ = function () {
    return this.keys_1;
  };
  protoOf(KeysToEffect).get_refCallback_52b629_k$ = function () {
    return this.refCallback_1;
  };
  protoOf(KeysToEffect).component1_7eebsc_k$ = function () {
    return this.keys_1;
  };
  protoOf(KeysToEffect).component2_7eebsb_k$ = function () {
    return this.refCallback_1;
  };
  protoOf(KeysToEffect).copy_36kynk_k$ = function (keys, refCallback) {
    return new KeysToEffect(keys, refCallback);
  };
  protoOf(KeysToEffect).copy$default_2gjwzt_k$ = function (keys, refCallback, $super) {
    keys = keys === VOID ? this.keys_1 : keys;
    refCallback = refCallback === VOID ? this.refCallback_1 : refCallback;
    return $super === VOID ? this.copy_36kynk_k$(keys, refCallback) : $super.copy_36kynk_k$.call(this, keys, refCallback);
  };
  protoOf(KeysToEffect).toString = function () {
    return 'KeysToEffect(keys=' + this.keys_1 + ', refCallback=' + this.refCallback_1 + ')';
  };
  protoOf(KeysToEffect).hashCode = function () {
    var result = hashCode(this.keys_1);
    result = imul(result, 31) + hashCode(this.refCallback_1) | 0;
    return result;
  };
  protoOf(KeysToEffect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KeysToEffect))
      return false;
    var tmp0_other_with_cast = other instanceof KeysToEffect ? other : THROW_CCE();
    if (!equals(this.keys_1, tmp0_other_with_cast.keys_1))
      return false;
    if (!equals(this.refCallback_1, tmp0_other_with_cast.refCallback_1))
      return false;
    return true;
  };
  function Builder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.keyedCallbacks_1 = ArrayList_init_$Create$();
    this.$stable_1 = 8;
  }
  protoOf(Builder).ref_ilxxe0_k$ = function (keys, handle) {
    this.keyedCallbacks_1.add_utx5q5_k$(new KeysToEffect(toList(keys), new Simple_0(handle)));
  };
  protoOf(Builder).disposableRef_sdjxhc_k$ = function (keys, effect) {
    this.keyedCallbacks_1.add_utx5q5_k$(new KeysToEffect(toList(keys), new Disposable(effect)));
  };
  protoOf(Builder).add_uaq22z_k$ = function (other) {
    if (!(other == null)) {
      this.keyedCallbacks_1.addAll_4lagoh_k$(other.keyedCallbacks_1);
    }
  };
  protoOf(Builder).build_1k0s4u_k$ = function () {
    return new ElementRefScope(this.keyedCallbacks_1);
  };
  function get_$stableprop_95() {
    return 8;
  }
  function ElementRefScope(keyedCallbacks) {
    this.keyedCallbacks_1 = keyedCallbacks;
    this.$stable_1 = 8;
  }
  protoOf(ElementRefScope).get_keyedCallbacks_7cgu1_k$ = function () {
    return this.keyedCallbacks_1;
  };
  protoOf(ElementRefScope).component1_7eebsc_k$ = function () {
    return this.keyedCallbacks_1;
  };
  protoOf(ElementRefScope).copy_veh9cs_k$ = function (keyedCallbacks) {
    return new ElementRefScope(keyedCallbacks);
  };
  protoOf(ElementRefScope).copy$default_dzqv18_k$ = function (keyedCallbacks, $super) {
    keyedCallbacks = keyedCallbacks === VOID ? this.keyedCallbacks_1 : keyedCallbacks;
    return $super === VOID ? this.copy_veh9cs_k$(keyedCallbacks) : $super.copy_veh9cs_k$.call(this, keyedCallbacks);
  };
  protoOf(ElementRefScope).toString = function () {
    return 'ElementRefScope(keyedCallbacks=' + this.keyedCallbacks_1 + ')';
  };
  protoOf(ElementRefScope).hashCode = function () {
    return hashCode(this.keyedCallbacks_1);
  };
  protoOf(ElementRefScope).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementRefScope))
      return false;
    var tmp0_other_with_cast = other instanceof ElementRefScope ? other : THROW_CCE();
    if (!equals(this.keyedCallbacks_1, tmp0_other_with_cast.keyedCallbacks_1))
      return false;
    return true;
  };
  function registerRefScope$composable(_this__u8e3s4, scope, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(1682539725);
    if (isTraceInProgress()) {
      traceEventStart(1682539725, $changed, -1, 'com.varabyte.kobweb.compose.dom.registerRefScope$composable (ElementRefScope.kt:91)');
    }
    $composer_0.startReplaceableGroup_ip860b_k$(-76299331);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'com.varabyte.kobweb.compose.dom.registerRefScope$composable.<anonymous>' call
      var value = registerRefScope$composable$lambda;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    registerRefScope$composable_0(_this__u8e3s4, scope, tmpCache, $composer_0, 14 & $changed | 112 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
  }
  function refScope(init) {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.dom.refScope.<anonymous>' call
    // Inline function 'kotlin.apply' call
    var this_0 = new Builder();
    // Inline function 'kotlin.contracts.contract' call
    init(this_0);
    return this_0.build_1k0s4u_k$();
  }
  function registerRefScope$composable_0(_this__u8e3s4, scope, transform, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(886891411);
    if (isTraceInProgress()) {
      traceEventStart(886891411, $changed, -1, 'com.varabyte.kobweb.compose.dom.registerRefScope$composable (ElementRefScope.kt:107)');
    }
    if (scope == null) {
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.endReplaceableGroup_ern0ak_k$();
      return Unit_getInstance();
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = scope.keyedCallbacks_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.compose.dom.registerRefScope$composable.<anonymous>' call
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_0 = element.keys_1;
      var tmp = copyToArray(this_0).slice();
      DisposableEffect$composable(tmp, registerRefScope$composable$lambda_0(element, transform, _this__u8e3s4), $composer_0, 0);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
  }
  function registerRefScope$composable$lambda(it) {
    return it;
  }
  function registerRefScope$composable$lambda_0($keyedCallback, $transform, $this_registerRefScope$composable) {
    return function ($this$DisposableEffect) {
      return $keyedCallback.refCallback_1.invoke_64dhf5_k$($this$DisposableEffect, $transform($this_registerRefScope$composable.get_scopeElement_61kop2_k$($this$DisposableEffect)));
    };
  }
  function get_ALPHANUMERICS() {
    _init_properties_ElementUtils_kt__9yjtit();
    return ALPHANUMERICS;
  }
  var ALPHANUMERICS;
  var properties_initialized_ElementUtils_kt_gopq0n;
  function _init_properties_ElementUtils_kt__9yjtit() {
    if (!properties_initialized_ElementUtils_kt_gopq0n) {
      properties_initialized_ElementUtils_kt_gopq0n = true;
      ALPHANUMERICS = plus_0(plus(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(122)), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(90))), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57)));
    }
  }
  function GenericTag$composable(name, attrsStr, content, $composer, $changed, $default) {
    var attrsStr_0 = {_v: attrsStr};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(745789767);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(name) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(attrsStr_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content_0._v) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
        $composer_0.startReplaceableGroup_ip860b_k$(276590469);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        var invalid = $composer_0.changed_ga7h3f_k$(attrsStr_0._v);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = this_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.varabyte.kobweb.compose.dom.GenericTag$composable.<anonymous>.<anonymous>' call
          var value = GenericTag$composable$lambda(attrsStr_0);
          this_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        tmp = tmpCache;
      }
      var attrs = tmp;
      GenericTag$composable_0(name, null, attrs, content_0._v, $composer_0, 48 | 14 & $dirty | 7168 & $dirty << 3, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(GenericTag$composable$lambda_0(name, attrsStr_0, content_0, $changed, $default));
    }
  }
  function GenericTag$composable_0(name, namespace, attrs, content, $composer, $changed, $default) {
    var namespace_0 = {_v: namespace};
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1742022847);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(name) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(namespace_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content_0._v) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
        tmp = Companion_getInstance_37().create_dmzjy4_k$(tmp0_safe_receiver, name);
      }
      var tmp1_elvis_lhs = tmp;
      var tmp_0 = tmp1_elvis_lhs == null ? Companion_getInstance_38().create_oysagu_k$(name) : tmp1_elvis_lhs;
      TagElement$composable(isInterface(tmp_0, ElementBuilder) ? tmp_0 : THROW_CCE(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty >> 3 | 896 & $dirty >> 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver_0 = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      tmp0_safe_receiver_0.updateScope_t8jcf_k$(GenericTag$composable$lambda_1(name, namespace_0, attrs_0, content_0, $changed, $default));
    }
  }
  function _get_cachedBuilders__emr31r($this) {
    return $this.cachedBuilders_1;
  }
  function _get_namespace__iwxsq2($this) {
    return $this.namespace_1;
  }
  function _get_qualifiedName__o5yty($this) {
    return $this.qualifiedName_1;
  }
  function Companion_33() {
    Companion_instance_33 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.cachedBuilders_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(Companion_33).create_dmzjy4_k$ = function (namespace, qualifiedName) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.cachedBuilders_1;
    var key = to(namespace, qualifiedName);
    var value = this_0.get_wei43m_k$(key);
    var tmp;
    if (value == null) {
      // Inline function 'com.varabyte.kobweb.compose.dom.Companion.create.<anonymous>' call
      var answer = new GenericNamespacedElementBuilder(namespace, qualifiedName);
      this_0.put_4fpzoq_k$(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp;
  };
  var Companion_instance_33;
  function Companion_getInstance_37() {
    if (Companion_instance_33 == null)
      new Companion_33();
    return Companion_instance_33;
  }
  function _get_element__z0t21h($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.element$delegate_1;
    element$factory();
    return this_0.get_value_j01efc_k$();
  }
  function get_$stableprop_96() {
    return 8;
  }
  function GenericNamespacedElementBuilder$element$delegate$lambda(this$0) {
    return function () {
      return document.createElementNS(this$0.namespace_1, this$0.qualifiedName_1);
    };
  }
  function GenericNamespacedElementBuilder(namespace, qualifiedName) {
    Companion_getInstance_37();
    this.namespace_1 = namespace;
    this.qualifiedName_1 = qualifiedName;
    var tmp = this;
    tmp.element$delegate_1 = lazy(GenericNamespacedElementBuilder$element$delegate$lambda(this));
    this.$stable_1 = 8;
  }
  protoOf(GenericNamespacedElementBuilder).create_md4cuc_k$ = function () {
    var tmp = _get_element__z0t21h(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function _get_cachedBuilders__emr31r_0($this) {
    return $this.cachedBuilders_1;
  }
  function _get_name__das4rk($this) {
    return $this.name_1;
  }
  function Companion_34() {
    Companion_instance_34 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.cachedBuilders_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(Companion_34).create_oysagu_k$ = function (name) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.cachedBuilders_1;
    var value = this_0.get_wei43m_k$(name);
    var tmp;
    if (value == null) {
      // Inline function 'com.varabyte.kobweb.compose.dom.Companion.create.<anonymous>' call
      var answer = new GenericElementBuilder(name);
      this_0.put_4fpzoq_k$(name, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp;
  };
  var Companion_instance_34;
  function Companion_getInstance_38() {
    if (Companion_instance_34 == null)
      new Companion_34();
    return Companion_instance_34;
  }
  function _get_element__z0t21h_0($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.element$delegate_1;
    element$factory_0();
    return this_0.get_value_j01efc_k$();
  }
  function get_$stableprop_97() {
    return 8;
  }
  function GenericElementBuilder$element$delegate$lambda(this$0) {
    return function () {
      return document.createElement(this$0.name_1);
    };
  }
  function GenericElementBuilder(name) {
    Companion_getInstance_38();
    this.name_1 = name;
    var tmp = this;
    tmp.element$delegate_1 = lazy(GenericElementBuilder$element$delegate$lambda(this));
    this.$stable_1 = 8;
  }
  protoOf(GenericElementBuilder).create_md4cuc_k$ = function () {
    var tmp = _get_element__z0t21h_0(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function GenericTag$composable$_anonymous_$_anonymous_$_anonymous_$parseAttrAssignment_raia22($this_null, attrAssignment) {
    var parts = split(attrAssignment, charArrayOf([_Char___init__impl__6a9atx(61)]), VOID, 2);
    var attr = parts.get_c1px32_k$(0);
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp;
    if (1 >= 0 ? 1 <= get_lastIndex(parts) : false) {
      tmp = parts.get_c1px32_k$(1);
    } else {
      // Inline function 'com.varabyte.kobweb.compose.dom.GenericTag$composable.<anonymous>$<anonymous>$<anonymous>$parseAttrAssignment.<anonymous>' call
      tmp = '';
    }
    var value = tmp;
    $this_null.attr_w68641_k$(attr, removeSurrounding(value, '"'));
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
          sb.append_am5a4z_k$(c);
        } else if (c === _Char___init__impl__6a9atx(32)) {
          if (insideQuotes) {
            sb.append_am5a4z_k$(c);
          } else {
            GenericTag$composable$_anonymous_$_anonymous_$_anonymous_$parseAttrAssignment_raia22($this$null, sb.toString());
            sb.clear_1keqml_k$();
          }
        } else {
          sb.append_am5a4z_k$(c);
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
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function GenericTag$composable$lambda_0($name, $attrsStr, $content, $$changed, $$default) {
    return function ($composer, $force) {
      GenericTag$composable($name, $attrsStr._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function GenericTag$composable$lambda_1($name, $namespace, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      GenericTag$composable_0($name, $namespace._v, $attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
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
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-27346688);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-27346688, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Svg$composable (Svg.kt:433)');
      }
      GenericTag$composable_0('svg', 'http://www.w3.org/2000/svg', Companion_getInstance_39().invoke_uvzfhd_k$(attrs_0._v), content, $composer_0, 54 | 7168 & $dirty << 6, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Svg$composable$lambda(attrs_0, content, $changed, $default));
    }
  }
  function SVGSvgAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      if (!($attrs == null))
        $attrs(new SVGSvgAttrsScope($this$null));
      return Unit_getInstance();
    };
  }
  function Companion_35() {
    Companion_instance_35 = this;
  }
  protoOf(Companion_35).invoke_uvzfhd_k$ = function (attrs) {
    return SVGSvgAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_35;
  function Companion_getInstance_39() {
    if (Companion_instance_35 == null)
      new Companion_35();
    return Companion_instance_35;
  }
  function get_$stableprop_98() {
    return 0;
  }
  function SVGSvgAttrsScope(attrs) {
    Companion_getInstance_39();
    SVGContainerElementAttrsScope.call(this, attrs);
    this.$stable_4 = 0;
  }
  function _SvgId___init__impl__pmt7ru(value) {
    return value;
  }
  function _SvgId___get_value__impl__pof1ma($this) {
    return $this;
  }
  function SvgId__toString_impl_l4ivdq($this) {
    return _SvgId___get_value__impl__pof1ma($this);
  }
  function _SvgId___get_urlReference__impl__ehpa8t($this) {
    return 'url(#' + _SvgId___get_value__impl__pof1ma($this) + ')';
  }
  function _SvgId___get_hashReference__impl__naeswu($this) {
    return '#' + _SvgId___get_value__impl__pof1ma($this);
  }
  function SvgId__hashCode_impl_s5f9sj($this) {
    return getStringHashCode($this);
  }
  function SvgId__equals_impl_mxwuq9($this, other) {
    if (!(other instanceof SvgId))
      return false;
    if (!($this === (other instanceof SvgId ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function SvgId(value) {
    this.value_1 = value;
  }
  protoOf(SvgId).toString = function () {
    return SvgId__toString_impl_l4ivdq(this.value_1);
  };
  protoOf(SvgId).hashCode = function () {
    return SvgId__hashCode_impl_s5f9sj(this.value_1);
  };
  protoOf(SvgId).equals = function (other) {
    return SvgId__equals_impl_mxwuq9(this.value_1, other);
  };
  function Defs$composable(_this__u8e3s4, attrs, content, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1851947982);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 32 : 16);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 256 : 128);
    if (!(($dirty & 721) === 144) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1851947982, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Defs$composable (Svg.kt:452)');
      }
      var tmp0_safe_receiver = attrs_0._v;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.compose.dom.svg.Defs$composable.<anonymous>' call
        tmp = Companion_getInstance_41().invoke_iq2c5i_k$(tmp0_safe_receiver);
      }
      GenericTag$composable_0('defs', 'http://www.w3.org/2000/svg', tmp, content, $composer_0, 54 | 7168 & $dirty << 3, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver_0 = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      tmp0_safe_receiver_0.updateScope_t8jcf_k$(Defs$composable$lambda(_this__u8e3s4, attrs_0, content, $changed, $default));
    }
  }
  function RadialGradient$composable(_this__u8e3s4, id, attrs, content, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(2017447911);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(_SvgId___get_value__impl__pof1ma(id)) ? 32 : 16);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 256 : 128);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 2048 : 1024);
    if (!(($dirty & 5841) === 1168) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 2) === 0)) {
        attrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(2017447911, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.RadialGradient$composable (Svg.kt:595)');
      }
      GenericTag$composable_0('radialGradient', 'http://www.w3.org/2000/svg', Companion_getInstance_40().invoke_8xfanc_k$(id, attrs_0._v), content, $composer_0, 54 | 7168 & $dirty, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(RadialGradient$composable$lambda(_this__u8e3s4, id, attrs_0, content, $changed, $default));
    }
  }
  function SVGRadialGradientAttrsScope$Companion$invoke$lambda($attrs, $id) {
    return function ($this$null) {
      var tmp;
      if (!($attrs == null)) {
        tmp = $attrs(new SVGRadialGradientAttrsScope($id, $this$null));
      } else {
        $this$null.id_e4l56n_k$(SvgId__toString_impl_l4ivdq($id));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Companion_36() {
    Companion_instance_36 = this;
  }
  protoOf(Companion_36).invoke_8xfanc_k$ = function (id, attrs) {
    return SVGRadialGradientAttrsScope$Companion$invoke$lambda(attrs, id);
  };
  var Companion_instance_36;
  function Companion_getInstance_40() {
    if (Companion_instance_36 == null)
      new Companion_36();
    return Companion_instance_36;
  }
  function get_$stableprop_99() {
    return 0;
  }
  function SVGRadialGradientAttrsScope(id, attrs) {
    Companion_getInstance_40();
    SVGGradientAttrsScope.call(this, id, attrs);
    this.$stable_3 = 0;
  }
  protoOf(SVGRadialGradientAttrsScope).cx_7c4b4q_k$ = function (value) {
    this.attr_w68641_k$('cx', toString(value));
  };
  protoOf(SVGRadialGradientAttrsScope).cy_5a8zln_k$ = function (value) {
    this.attr_w68641_k$('cy', toString(value));
  };
  protoOf(SVGRadialGradientAttrsScope).r_4ompmx_k$ = function (value) {
    this.attr_w68641_k$('r', toString(value));
  };
  protoOf(SVGRadialGradientAttrsScope).cx_pmhp9i_k$ = function (value) {
    this.attr_w68641_k$('cx', toString(value));
  };
  protoOf(SVGRadialGradientAttrsScope).cy_d71e85_k$ = function (value) {
    this.attr_w68641_k$('cy', toString(value));
  };
  protoOf(SVGRadialGradientAttrsScope).r_uxqzt5_k$ = function (value) {
    this.attr_w68641_k$('r', toString(value));
  };
  function Stop$composable(_this__u8e3s4, offset, stopColor, stopOpacity, $composer, $changed, $default) {
    var offset_0 = {_v: offset};
    var stopColor_0 = {_v: stopColor};
    var stopOpacity_0 = {_v: stopOpacity};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-55285706);
    var $dirty = $changed;
    if (!(($default & -2147483648) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(_this__u8e3s4) ? 4 : 2);
    if (!(($default & 1) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(offset_0._v) ? 32 : 16);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(stopColor_0._v) ? 256 : 128);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(stopOpacity_0._v) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        offset_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        stopColor_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        stopOpacity_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-55285706, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Stop$composable (Svg.kt:642)');
      }
      Stop$composable_0(_this__u8e3s4, Stop$composable$lambda(offset_0, stopColor_0, stopOpacity_0), $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Stop$composable$lambda_0(_this__u8e3s4, offset_0, stopColor_0, stopOpacity_0, $changed, $default));
    }
  }
  function get_$stableprop_100() {
    return 0;
  }
  function SVGContainerElementAttrsScope(attrs) {
    SVGGraphicalElementAttrsScope.call(this, attrs);
    this.$stable_3 = 0;
  }
  function CoordinateAttrs() {
  }
  function LengthAttrs() {
  }
  function ViewBoxAttrs() {
  }
  function SVGDefsAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      $attrs(new SVGDefsAttrsScope($this$null));
      return Unit_getInstance();
    };
  }
  function Companion_37() {
    Companion_instance_37 = this;
  }
  protoOf(Companion_37).invoke_iq2c5i_k$ = function (attrs) {
    return SVGDefsAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_37;
  function Companion_getInstance_41() {
    if (Companion_instance_37 == null)
      new Companion_37();
    return Companion_instance_37;
  }
  function get_$stableprop_101() {
    return 0;
  }
  function SVGDefsAttrsScope(attrs) {
    Companion_getInstance_41();
    SVGElementAttrsScope.call(this, attrs);
    this.$stable_2 = 0;
  }
  function get_$stableprop_102() {
    return 0;
  }
  function SVGGradientAttrsScope(id, attrs) {
    SVGElementAttrsScope.call(this, attrs.id_e4l56n_k$(SvgId__toString_impl_l4ivdq(id)));
    this.$stable_2 = 0;
  }
  protoOf(SVGGradientAttrsScope).gradientUnits_thxk4d_k$ = function (value) {
    this.attr_w68641_k$('gradientUnits', value.toString());
  };
  protoOf(SVGGradientAttrsScope).spreadMethod_8vpc5k_k$ = function (value) {
    this.attr_w68641_k$('spreadMethod', value.toString());
  };
  function Stop$composable_0(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(707642465);
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(707642465, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Stop$composable (Svg.kt:632)');
      }
      var tmp = Companion_getInstance_42().invoke_c2n6du_k$(attrs);
      GenericTag$composable_0('stop', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Stop$composable$lambda_1(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGStopAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      $attrs(new SVGStopAttrsScope($this$null));
      return Unit_getInstance();
    };
  }
  function Companion_38() {
    Companion_instance_38 = this;
  }
  protoOf(Companion_38).invoke_c2n6du_k$ = function (attrs) {
    return SVGStopAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_38;
  function Companion_getInstance_42() {
    if (Companion_instance_38 == null)
      new Companion_38();
    return Companion_instance_38;
  }
  function get_$stableprop_103() {
    return 0;
  }
  function SVGStopAttrsScope(attrs) {
    Companion_getInstance_42();
    SVGElementAttrsScope.call(this, attrs);
    this.$stable_2 = 0;
  }
  protoOf(SVGStopAttrsScope).offset_yc808x_k$ = function (value) {
    this.attr_w68641_k$('offset', toString(value));
  };
  protoOf(SVGStopAttrsScope).stopColor_c8neur_k$ = function (value) {
    this.attr_w68641_k$('stop-color', toString(value));
  };
  protoOf(SVGStopAttrsScope).stopColor_4gy1ad_k$ = function (value) {
    this.attr_w68641_k$('stop-color', value.toString());
  };
  protoOf(SVGStopAttrsScope).stopOpacity_czhyia_k$ = function (value) {
    this.attr_w68641_k$('stop-opacity', toString(value));
  };
  function get_$stableprop_104() {
    return 0;
  }
  function SVGGraphicalElementAttrsScope(attrs) {
    SVGElementAttrsScope.call(this, attrs);
    this.$stable_2 = 0;
  }
  function Companion_39() {
    Companion_instance_39 = this;
  }
  protoOf(Companion_39).sized_aiz6wt_k$ = function (width, height) {
    return new ViewBox(0, 0, width, height);
  };
  protoOf(Companion_39).sized$default_id0xg9_k$ = function (width, height, $super) {
    height = height === VOID ? width : height;
    return $super === VOID ? this.sized_aiz6wt_k$(width, height) : $super.sized_aiz6wt_k$.call(this, width, height);
  };
  var Companion_instance_39;
  function Companion_getInstance_43() {
    if (Companion_instance_39 == null)
      new Companion_39();
    return Companion_instance_39;
  }
  function get_$stableprop_105() {
    return 0;
  }
  function ViewBox(x, y, width, height) {
    Companion_getInstance_43();
    this.x_1 = x;
    this.y_1 = y;
    this.width_1 = width;
    this.height_1 = height;
    this.$stable_1 = 0;
  }
  protoOf(ViewBox).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(ViewBox).get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  protoOf(ViewBox).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(ViewBox).get_height_e7t92o_k$ = function () {
    return this.height_1;
  };
  function get_$stableprop_106() {
    return 8;
  }
  function SVGElementAttrsScope(attrs) {
    this.$$delegate_0__1 = attrs;
    this.$stable_1 = 8;
  }
  protoOf(SVGElementAttrsScope).addEventListener_pu8o1q_k$ = function (eventName, listener) {
    this.$$delegate_0__1.addEventListener_pu8o1q_k$(eventName, listener);
  };
  protoOf(SVGElementAttrsScope).addEventListener_xhf81m_k$ = function (eventName, listener) {
    this.$$delegate_0__1.addEventListener_xhf81m_k$(eventName, listener);
  };
  protoOf(SVGElementAttrsScope).attr_w68641_k$ = function (attr, value) {
    return this.$$delegate_0__1.attr_w68641_k$(attr, value);
  };
  protoOf(SVGElementAttrsScope).classes_ayghm2_k$ = function (classes) {
    this.$$delegate_0__1.classes_ayghm2_k$(classes);
  };
  protoOf(SVGElementAttrsScope).classes_ephr7k_k$ = function (classes) {
    this.$$delegate_0__1.classes_ephr7k_k$(classes);
  };
  protoOf(SVGElementAttrsScope).contentEditable_hbi188_k$ = function (value) {
    return this.$$delegate_0__1.contentEditable_hbi188_k$(value);
  };
  protoOf(SVGElementAttrsScope).dir_uokp4q_k$ = function (value) {
    return this.$$delegate_0__1.dir_uokp4q_k$(value);
  };
  protoOf(SVGElementAttrsScope).draggable_cxyxb5_k$ = function (value) {
    return this.$$delegate_0__1.draggable_cxyxb5_k$(value);
  };
  protoOf(SVGElementAttrsScope).hidden_k4uzbq_k$ = function () {
    return this.$$delegate_0__1.hidden_k4uzbq_k$();
  };
  protoOf(SVGElementAttrsScope).id_e4l56n_k$ = function (value) {
    return this.$$delegate_0__1.id_e4l56n_k$(value);
  };
  protoOf(SVGElementAttrsScope).inputMode_1lh0s3_k$ = function (value) {
    return this.$$delegate_0__1.inputMode_1lh0s3_k$(value);
  };
  protoOf(SVGElementAttrsScope).inputMode_7krh0f_k$ = function (value) {
    return this.$$delegate_0__1.inputMode_7krh0f_k$(value);
  };
  protoOf(SVGElementAttrsScope).lang_9i4u6k_k$ = function (value) {
    return this.$$delegate_0__1.lang_9i4u6k_k$(value);
  };
  protoOf(SVGElementAttrsScope).onAnimationEnd_l576ug_k$ = function (listener) {
    this.$$delegate_0__1.onAnimationEnd_l576ug_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onAnimationIteration_o79r9y_k$ = function (listener) {
    this.$$delegate_0__1.onAnimationIteration_o79r9y_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onAnimationStart_ir5kdr_k$ = function (listener) {
    this.$$delegate_0__1.onAnimationStart_ir5kdr_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onBlur_yy3d4s_k$ = function (listener) {
    this.$$delegate_0__1.onBlur_yy3d4s_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onClick_q9cds6_k$ = function (listener) {
    this.$$delegate_0__1.onClick_q9cds6_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onContextMenu_uus4bk_k$ = function (listener) {
    this.$$delegate_0__1.onContextMenu_uus4bk_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onCopy_4jq33g_k$ = function (listener) {
    this.$$delegate_0__1.onCopy_4jq33g_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onCut_wod3pf_k$ = function (listener) {
    this.$$delegate_0__1.onCut_wod3pf_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onDoubleClick_gh82mh_k$ = function (listener) {
    this.$$delegate_0__1.onDoubleClick_gh82mh_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onDrag_xkse65_k$ = function (listener) {
    this.$$delegate_0__1.onDrag_xkse65_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onDragEnd_4or1o2_k$ = function (listener) {
    this.$$delegate_0__1.onDragEnd_4or1o2_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onDragEnter_9tqs4v_k$ = function (listener) {
    this.$$delegate_0__1.onDragEnter_9tqs4v_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onDragLeave_nsncqa_k$ = function (listener) {
    this.$$delegate_0__1.onDragLeave_nsncqa_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onDragOver_tkxwb3_k$ = function (listener) {
    this.$$delegate_0__1.onDragOver_tkxwb3_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onDragStart_ispt2x_k$ = function (listener) {
    this.$$delegate_0__1.onDragStart_ispt2x_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onDrop_373vqw_k$ = function (listener) {
    this.$$delegate_0__1.onDrop_373vqw_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onFocus_ozgn2v_k$ = function (listener) {
    this.$$delegate_0__1.onFocus_ozgn2v_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onFocusIn_vryg4c_k$ = function (listener) {
    this.$$delegate_0__1.onFocusIn_vryg4c_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onFocusOut_jw1zh_k$ = function (listener) {
    this.$$delegate_0__1.onFocusOut_jw1zh_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onKeyDown_2pa1il_k$ = function (listener) {
    this.$$delegate_0__1.onKeyDown_2pa1il_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onKeyUp_g6q8ee_k$ = function (listener) {
    this.$$delegate_0__1.onKeyUp_g6q8ee_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onMouseDown_hebxzb_k$ = function (listener) {
    this.$$delegate_0__1.onMouseDown_hebxzb_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onMouseEnter_smfckd_k$ = function (listener) {
    this.$$delegate_0__1.onMouseEnter_smfckd_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onMouseLeave_j862le_k$ = function (listener) {
    this.$$delegate_0__1.onMouseLeave_j862le_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onMouseMove_r2z3wo_k$ = function (listener) {
    this.$$delegate_0__1.onMouseMove_r2z3wo_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onMouseOut_nootgn_k$ = function (listener) {
    this.$$delegate_0__1.onMouseOut_nootgn_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onMouseOver_o893qj_k$ = function (listener) {
    this.$$delegate_0__1.onMouseOver_o893qj_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onMouseUp_at21zm_k$ = function (listener) {
    this.$$delegate_0__1.onMouseUp_at21zm_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onPaste_8ucd2k_k$ = function (listener) {
    this.$$delegate_0__1.onPaste_8ucd2k_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onScroll_ur92mf_k$ = function (listener) {
    this.$$delegate_0__1.onScroll_ur92mf_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onTouchCancel_rg0d1t_k$ = function (listener) {
    this.$$delegate_0__1.onTouchCancel_rg0d1t_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onTouchEnd_ugz1se_k$ = function (listener) {
    this.$$delegate_0__1.onTouchEnd_ugz1se_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onTouchMove_wm6qxk_k$ = function (listener) {
    this.$$delegate_0__1.onTouchMove_wm6qxk_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onTouchStart_4yr0c9_k$ = function (listener) {
    this.$$delegate_0__1.onTouchStart_4yr0c9_k$(listener);
  };
  protoOf(SVGElementAttrsScope).onWheel_59frrx_k$ = function (listener) {
    this.$$delegate_0__1.onWheel_59frrx_k$(listener);
  };
  protoOf(SVGElementAttrsScope).prop_cha5mt_k$ = function (update, value) {
    this.$$delegate_0__1.prop_cha5mt_k$(update, value);
  };
  protoOf(SVGElementAttrsScope).ref_wkg4fv_k$ = function (effect) {
    this.$$delegate_0__1.ref_o4g25g_k$(effect);
  };
  protoOf(SVGElementAttrsScope).ref_o4g25g_k$ = function (effect) {
    return this.ref_wkg4fv_k$(effect);
  };
  protoOf(SVGElementAttrsScope).registerEventListener_oiyxlj_k$ = function (listener) {
    this.$$delegate_0__1.registerEventListener_oiyxlj_k$(listener);
  };
  protoOf(SVGElementAttrsScope).spellCheck_hp5v6j_k$ = function (value) {
    return this.$$delegate_0__1.spellCheck_hp5v6j_k$(value);
  };
  protoOf(SVGElementAttrsScope).style_xwwy6r_k$ = function (builder) {
    this.$$delegate_0__1.style_xwwy6r_k$(builder);
  };
  protoOf(SVGElementAttrsScope).tabIndex_fn4aj_k$ = function (value) {
    return this.$$delegate_0__1.tabIndex_fn4aj_k$(value);
  };
  protoOf(SVGElementAttrsScope).title_qpfo4e_k$ = function (value) {
    return this.$$delegate_0__1.title_qpfo4e_k$(value);
  };
  protoOf(SVGElementAttrsScope).transform_smv5a6_k$ = function (transformScope) {
    var scope = new SVGTransformScope();
    transformScope(scope);
    this.attr_w68641_k$('transform', joinToString(scope.transformCommands_1, ' '));
  };
  var SVGGradientUnits_UserSpaceOnUse_instance;
  var SVGGradientUnits_UserSpace_instance;
  var SVGGradientUnits_ObjectBoundingBox_instance;
  function values_3() {
    return [SVGGradientUnits_UserSpaceOnUse_getInstance(), SVGGradientUnits_UserSpace_getInstance(), SVGGradientUnits_ObjectBoundingBox_getInstance()];
  }
  function valueOf_3(value) {
    switch (value) {
      case 'UserSpaceOnUse':
        return SVGGradientUnits_UserSpaceOnUse_getInstance();
      case 'UserSpace':
        return SVGGradientUnits_UserSpace_getInstance();
      case 'ObjectBoundingBox':
        return SVGGradientUnits_ObjectBoundingBox_getInstance();
      default:
        SVGGradientUnits_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_3() {
    if ($ENTRIES_3 == null)
      $ENTRIES_3 = enumEntries(values_3());
    return $ENTRIES_3;
  }
  var SVGGradientUnits_entriesInitialized;
  function SVGGradientUnits_initEntries() {
    if (SVGGradientUnits_entriesInitialized)
      return Unit_getInstance();
    SVGGradientUnits_entriesInitialized = true;
    SVGGradientUnits_UserSpaceOnUse_instance = new SVGGradientUnits('UserSpaceOnUse', 0);
    SVGGradientUnits_UserSpace_instance = new SVGGradientUnits('UserSpace', 1);
    SVGGradientUnits_ObjectBoundingBox_instance = new SVGGradientUnits('ObjectBoundingBox', 2);
  }
  var $ENTRIES_3;
  function SVGGradientUnits(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGGradientUnits).toString = function () {
    return toSvgValue(this);
  };
  var SVGGradientSpreadMethod_Pad_instance;
  var SVGGradientSpreadMethod_Reflect_instance;
  var SVGGradientSpreadMethod_Repeat_instance;
  function values_4() {
    return [SVGGradientSpreadMethod_Pad_getInstance(), SVGGradientSpreadMethod_Reflect_getInstance(), SVGGradientSpreadMethod_Repeat_getInstance()];
  }
  function valueOf_4(value) {
    switch (value) {
      case 'Pad':
        return SVGGradientSpreadMethod_Pad_getInstance();
      case 'Reflect':
        return SVGGradientSpreadMethod_Reflect_getInstance();
      case 'Repeat':
        return SVGGradientSpreadMethod_Repeat_getInstance();
      default:
        SVGGradientSpreadMethod_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_4() {
    if ($ENTRIES_4 == null)
      $ENTRIES_4 = enumEntries(values_4());
    return $ENTRIES_4;
  }
  var SVGGradientSpreadMethod_entriesInitialized;
  function SVGGradientSpreadMethod_initEntries() {
    if (SVGGradientSpreadMethod_entriesInitialized)
      return Unit_getInstance();
    SVGGradientSpreadMethod_entriesInitialized = true;
    SVGGradientSpreadMethod_Pad_instance = new SVGGradientSpreadMethod('Pad', 0);
    SVGGradientSpreadMethod_Reflect_instance = new SVGGradientSpreadMethod('Reflect', 1);
    SVGGradientSpreadMethod_Repeat_instance = new SVGGradientSpreadMethod('Repeat', 2);
  }
  var $ENTRIES_4;
  function SVGGradientSpreadMethod(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGGradientSpreadMethod).toString = function () {
    return toSvgValue(this);
  };
  var SVGStopColorType_CurrentColor_instance;
  function values_5() {
    return [SVGStopColorType_CurrentColor_getInstance()];
  }
  function valueOf_5(value) {
    if (value === 'CurrentColor')
      return SVGStopColorType_CurrentColor_getInstance();
    else {
      SVGStopColorType_initEntries();
      THROW_IAE('No enum constant value.');
    }
  }
  function get_entries_5() {
    if ($ENTRIES_5 == null)
      $ENTRIES_5 = enumEntries(values_5());
    return $ENTRIES_5;
  }
  var SVGStopColorType_entriesInitialized;
  function SVGStopColorType_initEntries() {
    if (SVGStopColorType_entriesInitialized)
      return Unit_getInstance();
    SVGStopColorType_entriesInitialized = true;
    SVGStopColorType_CurrentColor_instance = new SVGStopColorType('CurrentColor', 0);
  }
  var $ENTRIES_5;
  function SVGStopColorType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGStopColorType).toString = function () {
    return toSvgValue(this);
  };
  function PresentationAttrs$strokeDashArray$lambda(it) {
    return toString(it);
  }
  function PresentationAttrs$strokeDashArray$lambda_0(it) {
    return toString(it);
  }
  function PresentationAttrs() {
  }
  function get_$stableprop_107() {
    return 8;
  }
  function SVGTransformScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.transformCommands_1 = ArrayList_init_$Create$();
    this.$stable_1 = 8;
  }
  protoOf(SVGTransformScope).get_transformCommands_ho3623_k$ = function () {
    return this.transformCommands_1;
  };
  protoOf(SVGTransformScope).matrix_4qaz4h_k$ = function (a, b, c, d, e, f) {
    this.transformCommands_1.add_utx5q5_k$('matrix(' + toString(a) + ' ' + toString(b) + ' ' + toString(c) + ' ' + toString(d) + ' ' + toString(e) + ' ' + toString(f) + ')');
  };
  protoOf(SVGTransformScope).translate_es2bih_k$ = function (x, y) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.dom.svg.SVGTransformScope.translate.<anonymous>' call
    this_0.append_22ad7x_k$('translate(' + toString(x));
    if (y == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.dom.svg.SVGTransformScope.translate.<anonymous>.<anonymous>' call
      this_0.append_22ad7x_k$(' ' + toString(y));
    }
    this_0.append_22ad7x_k$(')');
    var tmp$ret$3 = this_0.toString();
    this.transformCommands_1.add_utx5q5_k$(tmp$ret$3);
  };
  protoOf(SVGTransformScope).translate$default_8lzvt7_k$ = function (x, y, $super) {
    y = y === VOID ? null : y;
    var tmp;
    if ($super === VOID) {
      this.translate_es2bih_k$(x, y);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.translate_es2bih_k$.call(this, x, y);
    }
    return tmp;
  };
  protoOf(SVGTransformScope).translateX_ud826n_k$ = function (value) {
    this.translate$default_8lzvt7_k$(value);
  };
  protoOf(SVGTransformScope).translateY_sbcqnk_k$ = function (value) {
    this.translate_es2bih_k$(0, value);
  };
  protoOf(SVGTransformScope).scale_c9i1jh_k$ = function (x, y) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.dom.svg.SVGTransformScope.scale.<anonymous>' call
    this_0.append_22ad7x_k$('scale(' + toString(x));
    if (y == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.dom.svg.SVGTransformScope.scale.<anonymous>.<anonymous>' call
      this_0.append_22ad7x_k$(' ' + toString(y));
    }
    this_0.append_22ad7x_k$(')');
    var tmp$ret$3 = this_0.toString();
    this.transformCommands_1.add_utx5q5_k$(tmp$ret$3);
  };
  protoOf(SVGTransformScope).scale$default_les05r_k$ = function (x, y, $super) {
    y = y === VOID ? null : y;
    var tmp;
    if ($super === VOID) {
      this.scale_c9i1jh_k$(x, y);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.scale_c9i1jh_k$.call(this, x, y);
    }
    return tmp;
  };
  protoOf(SVGTransformScope).scaleX_5vhlnx_k$ = function (value) {
    this.scale$default_les05r_k$(value);
  };
  protoOf(SVGTransformScope).scaleY_7xcx70_k$ = function (value) {
    this.scale_c9i1jh_k$(1, value);
  };
  protoOf(SVGTransformScope).rotate_lnsw20_k$ = function (angle, x, y) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.dom.svg.SVGTransformScope.rotate.<anonymous>' call
    this_0.append_22ad7x_k$('rotate(' + toString(angle));
    if (x == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.dom.svg.SVGTransformScope.rotate.<anonymous>.<anonymous>' call
      this_0.append_22ad7x_k$(' ' + toString(x));
    }
    if (y == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.dom.svg.SVGTransformScope.rotate.<anonymous>.<anonymous>' call
      this_0.append_22ad7x_k$(' ' + toString(y));
    }
    this_0.append_22ad7x_k$(')');
    var tmp$ret$5 = this_0.toString();
    this.transformCommands_1.add_utx5q5_k$(tmp$ret$5);
  };
  protoOf(SVGTransformScope).rotate$default_an1ocb_k$ = function (angle, x, y, $super) {
    x = x === VOID ? null : x;
    y = y === VOID ? null : y;
    var tmp;
    if ($super === VOID) {
      this.rotate_lnsw20_k$(angle, x, y);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.rotate_lnsw20_k$.call(this, angle, x, y);
    }
    return tmp;
  };
  protoOf(SVGTransformScope).rotate_t30zjy_k$ = function (angle, x, y) {
    this.rotate_lnsw20_k$(toDegrees(angle), x, y);
  };
  protoOf(SVGTransformScope).rotate$default_6p7g9n_k$ = function (angle, x, y, $super) {
    x = x === VOID ? null : x;
    y = y === VOID ? null : y;
    var tmp;
    if ($super === VOID) {
      this.rotate_t30zjy_k$(angle, x, y);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.rotate_t30zjy_k$.call(this, angle, x, y);
    }
    return tmp;
  };
  protoOf(SVGTransformScope).skewX_j3bzv7_k$ = function (angle) {
    this.transformCommands_1.add_utx5q5_k$('skewX(' + toString(angle) + ')');
  };
  protoOf(SVGTransformScope).skewX_vhgz95_k$ = function (angle) {
    this.skewX_j3bzv7_k$(toDegrees(angle));
  };
  protoOf(SVGTransformScope).skewY_h1goc4_k$ = function (angle) {
    this.transformCommands_1.add_utx5q5_k$('skewY(' + toString(angle) + ')');
  };
  protoOf(SVGTransformScope).skewY_yc4et6_k$ = function (angle) {
    this.skewY_h1goc4_k$(toDegrees(angle));
  };
  function toSvgValue(_this__u8e3s4) {
    // Inline function 'kotlin.text.replaceFirstChar' call
    var this_0 = _this__u8e3s4.get_name_woqyms_k$();
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
  function values_6() {
    return [SVGStrokeType_None_getInstance(), SVGStrokeType_CurrentColor_getInstance()];
  }
  function valueOf_6(value) {
    switch (value) {
      case 'None':
        return SVGStrokeType_None_getInstance();
      case 'CurrentColor':
        return SVGStrokeType_CurrentColor_getInstance();
      default:
        SVGStrokeType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_6() {
    if ($ENTRIES_6 == null)
      $ENTRIES_6 = enumEntries(values_6());
    return $ENTRIES_6;
  }
  var SVGStrokeType_entriesInitialized;
  function SVGStrokeType_initEntries() {
    if (SVGStrokeType_entriesInitialized)
      return Unit_getInstance();
    SVGStrokeType_entriesInitialized = true;
    SVGStrokeType_None_instance = new SVGStrokeType('None', 0);
    SVGStrokeType_CurrentColor_instance = new SVGStrokeType('CurrentColor', 1);
  }
  var $ENTRIES_6;
  function SVGStrokeType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGStrokeType).toString = function () {
    return toSvgValue(this);
  };
  var SVGStrokeLineCap_Butt_instance;
  var SVGStrokeLineCap_Round_instance;
  var SVGStrokeLineCap_Square_instance;
  function values_7() {
    return [SVGStrokeLineCap_Butt_getInstance(), SVGStrokeLineCap_Round_getInstance(), SVGStrokeLineCap_Square_getInstance()];
  }
  function valueOf_7(value) {
    switch (value) {
      case 'Butt':
        return SVGStrokeLineCap_Butt_getInstance();
      case 'Round':
        return SVGStrokeLineCap_Round_getInstance();
      case 'Square':
        return SVGStrokeLineCap_Square_getInstance();
      default:
        SVGStrokeLineCap_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_7() {
    if ($ENTRIES_7 == null)
      $ENTRIES_7 = enumEntries(values_7());
    return $ENTRIES_7;
  }
  var SVGStrokeLineCap_entriesInitialized;
  function SVGStrokeLineCap_initEntries() {
    if (SVGStrokeLineCap_entriesInitialized)
      return Unit_getInstance();
    SVGStrokeLineCap_entriesInitialized = true;
    SVGStrokeLineCap_Butt_instance = new SVGStrokeLineCap('Butt', 0);
    SVGStrokeLineCap_Round_instance = new SVGStrokeLineCap('Round', 1);
    SVGStrokeLineCap_Square_instance = new SVGStrokeLineCap('Square', 2);
  }
  var $ENTRIES_7;
  function SVGStrokeLineCap(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGStrokeLineCap).toString = function () {
    return toSvgValue(this);
  };
  var SVGStrokeLineJoin_Miter_instance;
  var SVGStrokeLineJoin_Round_instance;
  var SVGStrokeLineJoin_Bevel_instance;
  function values_8() {
    return [SVGStrokeLineJoin_Miter_getInstance(), SVGStrokeLineJoin_Round_getInstance(), SVGStrokeLineJoin_Bevel_getInstance()];
  }
  function valueOf_8(value) {
    switch (value) {
      case 'Miter':
        return SVGStrokeLineJoin_Miter_getInstance();
      case 'Round':
        return SVGStrokeLineJoin_Round_getInstance();
      case 'Bevel':
        return SVGStrokeLineJoin_Bevel_getInstance();
      default:
        SVGStrokeLineJoin_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_8() {
    if ($ENTRIES_8 == null)
      $ENTRIES_8 = enumEntries(values_8());
    return $ENTRIES_8;
  }
  var SVGStrokeLineJoin_entriesInitialized;
  function SVGStrokeLineJoin_initEntries() {
    if (SVGStrokeLineJoin_entriesInitialized)
      return Unit_getInstance();
    SVGStrokeLineJoin_entriesInitialized = true;
    SVGStrokeLineJoin_Miter_instance = new SVGStrokeLineJoin('Miter', 0);
    SVGStrokeLineJoin_Round_instance = new SVGStrokeLineJoin('Round', 1);
    SVGStrokeLineJoin_Bevel_instance = new SVGStrokeLineJoin('Bevel', 2);
  }
  var $ENTRIES_8;
  function SVGStrokeLineJoin(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGStrokeLineJoin).toString = function () {
    return toSvgValue(this);
  };
  var SVGFillType_None_instance;
  var SVGFillType_CurrentColor_instance;
  function values_9() {
    return [SVGFillType_None_getInstance(), SVGFillType_CurrentColor_getInstance()];
  }
  function valueOf_9(value) {
    switch (value) {
      case 'None':
        return SVGFillType_None_getInstance();
      case 'CurrentColor':
        return SVGFillType_CurrentColor_getInstance();
      default:
        SVGFillType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_9() {
    if ($ENTRIES_9 == null)
      $ENTRIES_9 = enumEntries(values_9());
    return $ENTRIES_9;
  }
  var SVGFillType_entriesInitialized;
  function SVGFillType_initEntries() {
    if (SVGFillType_entriesInitialized)
      return Unit_getInstance();
    SVGFillType_entriesInitialized = true;
    SVGFillType_None_instance = new SVGFillType('None', 0);
    SVGFillType_CurrentColor_instance = new SVGFillType('CurrentColor', 1);
  }
  var $ENTRIES_9;
  function SVGFillType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGFillType).toString = function () {
    return toSvgValue(this);
  };
  var SVGFillRule_NonZero_instance;
  var SVGFillRule_EvenOdd_instance;
  function values_10() {
    return [SVGFillRule_NonZero_getInstance(), SVGFillRule_EvenOdd_getInstance()];
  }
  function valueOf_10(value) {
    switch (value) {
      case 'NonZero':
        return SVGFillRule_NonZero_getInstance();
      case 'EvenOdd':
        return SVGFillRule_EvenOdd_getInstance();
      default:
        SVGFillRule_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_10() {
    if ($ENTRIES_10 == null)
      $ENTRIES_10 = enumEntries(values_10());
    return $ENTRIES_10;
  }
  var SVGFillRule_entriesInitialized;
  function SVGFillRule_initEntries() {
    if (SVGFillRule_entriesInitialized)
      return Unit_getInstance();
    SVGFillRule_entriesInitialized = true;
    SVGFillRule_NonZero_instance = new SVGFillRule('NonZero', 0);
    SVGFillRule_EvenOdd_instance = new SVGFillRule('EvenOdd', 1);
  }
  var $ENTRIES_10;
  function SVGFillRule(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGFillRule).toString = function () {
    return toSvgValue(this);
  };
  function Path$composable(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1759929020);
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1759929020, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Path$composable (Svg.kt:1098)');
      }
      var tmp = Companion_getInstance_44().invoke_ck7z5b_k$(attrs);
      GenericTag$composable_0('path', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Path$composable$lambda(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGPathAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      $attrs(new SVGPathAttrsScope($this$null));
      return Unit_getInstance();
    };
  }
  function Companion_40() {
    Companion_instance_40 = this;
  }
  protoOf(Companion_40).invoke_ck7z5b_k$ = function (attrs) {
    return SVGPathAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_40;
  function Companion_getInstance_44() {
    if (Companion_instance_40 == null)
      new Companion_40();
    return Companion_instance_40;
  }
  function get_$stableprop_108() {
    return 0;
  }
  function SVGPathAttrsScope(attrs) {
    Companion_getInstance_44();
    SVGGraphicalElementAttrsScope.call(this, attrs);
    this.$stable_3 = 0;
  }
  protoOf(SVGPathAttrsScope).d_tonr5x_k$ = function (pathDataScope) {
    // Inline function 'kotlin.apply' call
    var this_0 = new SVGPathDataScope();
    // Inline function 'kotlin.contracts.contract' call
    pathDataScope(this_0);
    this.attr_w68641_k$('d', joinToString(this_0.pathCommands_1, ' '));
  };
  protoOf(SVGPathAttrsScope).d_e5qqiu_k$ = function (value) {
    this.attr_w68641_k$('d', value);
  };
  function get_$stableprop_109() {
    return 8;
  }
  function SVGPathDataScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.pathCommands_1 = ArrayList_init_$Create$();
    this.$stable_1 = 8;
  }
  protoOf(SVGPathDataScope).get_pathCommands_p1akmi_k$ = function () {
    return this.pathCommands_1;
  };
  protoOf(SVGPathDataScope).moveTo_3kg6ro_k$ = function (x, y) {
    this.pathCommands_1.add_utx5q5_k$('M ' + toString(x) + ' ' + toString(y));
  };
  protoOf(SVGPathDataScope).lineTo_wo5zt2_k$ = function (x, y, isRelative) {
    var command = isRelative ? 'l' : 'L';
    this.pathCommands_1.add_utx5q5_k$(command + ' ' + toString(x) + ' ' + toString(y));
  };
  protoOf(SVGPathDataScope).lineTo$default_92g2t9_k$ = function (x, y, isRelative, $super) {
    isRelative = isRelative === VOID ? false : isRelative;
    var tmp;
    if ($super === VOID) {
      this.lineTo_wo5zt2_k$(x, y, isRelative);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.lineTo_wo5zt2_k$.call(this, x, y, isRelative);
    }
    return tmp;
  };
  protoOf(SVGPathDataScope).verticalLineTo_1jzv3_k$ = function (x, isRelative) {
    var command = isRelative ? 'v' : 'V';
    this.pathCommands_1.add_utx5q5_k$(command + ' ' + toString(x));
  };
  protoOf(SVGPathDataScope).verticalLineTo$default_w5grj4_k$ = function (x, isRelative, $super) {
    isRelative = isRelative === VOID ? false : isRelative;
    var tmp;
    if ($super === VOID) {
      this.verticalLineTo_1jzv3_k$(x, isRelative);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.verticalLineTo_1jzv3_k$.call(this, x, isRelative);
    }
    return tmp;
  };
  protoOf(SVGPathDataScope).horizontalLineTo_vd3o5f_k$ = function (x, isRelative) {
    var command = isRelative ? 'h' : 'H';
    this.pathCommands_1.add_utx5q5_k$(command + ' ' + toString(x));
  };
  protoOf(SVGPathDataScope).horizontalLineTo$default_sdjoge_k$ = function (x, isRelative, $super) {
    isRelative = isRelative === VOID ? false : isRelative;
    var tmp;
    if ($super === VOID) {
      this.horizontalLineTo_vd3o5f_k$(x, isRelative);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.horizontalLineTo_vd3o5f_k$.call(this, x, isRelative);
    }
    return tmp;
  };
  protoOf(SVGPathDataScope).curveTo_dux3mz_k$ = function (x1, y1, x2, y2, x, y, isRelative) {
    var command = isRelative ? 'c' : 'C';
    this.pathCommands_1.add_utx5q5_k$(command + ' ' + toString(x1) + ' ' + toString(y1) + ' ' + toString(x2) + ' ' + toString(y2) + ' ' + toString(x) + ' ' + toString(y));
  };
  protoOf(SVGPathDataScope).curveTo$default_10zpsu_k$ = function (x1, y1, x2, y2, x, y, isRelative, $super) {
    isRelative = isRelative === VOID ? false : isRelative;
    var tmp;
    if ($super === VOID) {
      this.curveTo_dux3mz_k$(x1, y1, x2, y2, x, y, isRelative);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.curveTo_dux3mz_k$.call(this, x1, y1, x2, y2, x, y, isRelative);
    }
    return tmp;
  };
  protoOf(SVGPathDataScope).smoothCurveTo_m2p9yf_k$ = function (x2, y2, x, y, isRelative) {
    var command = isRelative ? 's' : 'S';
    this.pathCommands_1.add_utx5q5_k$(command + ' ' + toString(x2) + ' ' + toString(y2) + ' ' + toString(x) + ' ' + toString(y));
  };
  protoOf(SVGPathDataScope).smoothCurveTo$default_an6pv4_k$ = function (x2, y2, x, y, isRelative, $super) {
    isRelative = isRelative === VOID ? false : isRelative;
    var tmp;
    if ($super === VOID) {
      this.smoothCurveTo_m2p9yf_k$(x2, y2, x, y, isRelative);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.smoothCurveTo_m2p9yf_k$.call(this, x2, y2, x, y, isRelative);
    }
    return tmp;
  };
  protoOf(SVGPathDataScope).quadraticBezierCurve_4zqqkj_k$ = function (x1, y1, x, y, isRelative) {
    var command = isRelative ? 'q' : 'Q';
    this.pathCommands_1.add_utx5q5_k$(command + ' ' + toString(x1) + ' ' + toString(y1) + ' ' + toString(x) + ' ' + toString(y));
  };
  protoOf(SVGPathDataScope).smoothQuadraticBezierCurve_qx2ddd_k$ = function (x, y, isRelative) {
    var command = isRelative ? 't' : 'T';
    this.pathCommands_1.add_utx5q5_k$(command + ' ' + toString(x) + ' ' + toString(y));
  };
  protoOf(SVGPathDataScope).ellipticalArc_dlakgh_k$ = function (rx, ry, rotate, largeArcFlag, sweepFlag, x, y, isRelative) {
    var command = isRelative ? 'a' : 'A';
    this.pathCommands_1.add_utx5q5_k$(command + ' ' + toString(rx) + ' ' + toString(ry) + ' ' + toString(rotate) + ' ' + toString(largeArcFlag) + ' ' + toString(sweepFlag) + ' ' + toString(x) + ' ' + toString(y));
  };
  protoOf(SVGPathDataScope).ellipticalArc$default_j89yrk_k$ = function (rx, ry, rotate, largeArcFlag, sweepFlag, x, y, isRelative, $super) {
    isRelative = isRelative === VOID ? false : isRelative;
    var tmp;
    if ($super === VOID) {
      this.ellipticalArc_dlakgh_k$(rx, ry, rotate, largeArcFlag, sweepFlag, x, y, isRelative);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.ellipticalArc_dlakgh_k$.call(this, rx, ry, rotate, largeArcFlag, sweepFlag, x, y, isRelative);
    }
    return tmp;
  };
  protoOf(SVGPathDataScope).closePath_hm2tg3_k$ = function () {
    this.pathCommands_1.add_utx5q5_k$('Z');
  };
  function Polyline$composable(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1369602079);
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1369602079, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Polyline$composable (Svg.kt:1161)');
      }
      var tmp = Companion_getInstance_45().invoke_cy68no_k$(attrs);
      GenericTag$composable_0('polyline', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Polyline$composable$lambda(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGPolylineAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      $attrs(new SVGPolylineAttrsScope($this$null));
      return Unit_getInstance();
    };
  }
  function Companion_41() {
    Companion_instance_41 = this;
  }
  protoOf(Companion_41).invoke_cy68no_k$ = function (attrs) {
    return SVGPolylineAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_41;
  function Companion_getInstance_45() {
    if (Companion_instance_41 == null)
      new Companion_41();
    return Companion_instance_41;
  }
  function get_$stableprop_110() {
    return 0;
  }
  function SVGPolylineAttrsScope(attrs) {
    Companion_getInstance_45();
    SVGGraphicalElementAttrsScope.call(this, attrs);
    this.$stable_3 = 0;
  }
  function Circle$composable(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(160071151);
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(160071151, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Circle$composable (Svg.kt:804)');
      }
      var tmp = Companion_getInstance_46().invoke_f9pwg4_k$(attrs);
      GenericTag$composable_0('circle', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Circle$composable$lambda(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGCircleAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      $attrs(new SVGCircleAttrsScope($this$null));
      return Unit_getInstance();
    };
  }
  function Companion_42() {
    Companion_instance_42 = this;
  }
  protoOf(Companion_42).invoke_f9pwg4_k$ = function (attrs) {
    return SVGCircleAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_42;
  function Companion_getInstance_46() {
    if (Companion_instance_42 == null)
      new Companion_42();
    return Companion_instance_42;
  }
  function get_$stableprop_111() {
    return 0;
  }
  function SVGCircleAttrsScope(attrs) {
    Companion_getInstance_46();
    SVGGraphicalElementAttrsScope.call(this, attrs);
    this.$stable_3 = 0;
  }
  protoOf(SVGCircleAttrsScope).r_4ompmx_k$ = function (value) {
    this.attr_w68641_k$('r', toString(value));
  };
  protoOf(SVGCircleAttrsScope).r_uxqzt5_k$ = function (value) {
    this.attr_w68641_k$('r', toString(value));
  };
  function Line$composable(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1946067155);
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1946067155, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Line$composable (Svg.kt:979)');
      }
      var tmp = Companion_getInstance_47().invoke_zctbq8_k$(attrs);
      GenericTag$composable_0('line', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Line$composable$lambda(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGLineAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      $attrs(new SVGLineAttrsScope($this$null));
      return Unit_getInstance();
    };
  }
  function Companion_43() {
    Companion_instance_43 = this;
  }
  protoOf(Companion_43).invoke_zctbq8_k$ = function (attrs) {
    return SVGLineAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_43;
  function Companion_getInstance_47() {
    if (Companion_instance_43 == null)
      new Companion_43();
    return Companion_instance_43;
  }
  function get_$stableprop_112() {
    return 0;
  }
  function SVGLineAttrsScope(attrs) {
    Companion_getInstance_47();
    SVGGraphicalElementAttrsScope.call(this, attrs);
    this.$stable_3 = 0;
  }
  protoOf(SVGLineAttrsScope).x1_oqfh9a_k$ = function (value) {
    this.attr_w68641_k$('x1', toString(value));
  };
  protoOf(SVGLineAttrsScope).x2_mok5q7_k$ = function (value) {
    this.attr_w68641_k$('x2', toString(value));
  };
  protoOf(SVGLineAttrsScope).y1_w5klst_k$ = function (value) {
    this.attr_w68641_k$('y1', toString(value));
  };
  protoOf(SVGLineAttrsScope).y2_u3pa9q_k$ = function (value) {
    this.attr_w68641_k$('y2', toString(value));
  };
  protoOf(SVGLineAttrsScope).x1_97ul5q_k$ = function (value) {
    this.attr_w68641_k$('x1', toString(value));
  };
  protoOf(SVGLineAttrsScope).x2_lnaw73_k$ = function (value) {
    this.attr_w68641_k$('x2', toString(value));
  };
  protoOf(SVGLineAttrsScope).y1_vns8ir_k$ = function (value) {
    this.attr_w68641_k$('y1', toString(value));
  };
  protoOf(SVGLineAttrsScope).y2_j8bxhe_k$ = function (value) {
    this.attr_w68641_k$('y2', toString(value));
  };
  function Rect$composable(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-617347389);
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-617347389, $dirty, -1, 'com.varabyte.kobweb.compose.dom.svg.Rect$composable (Svg.kt:1223)');
      }
      var tmp = Companion_getInstance_48().invoke_ytzn80_k$(attrs);
      GenericTag$composable_0('rect', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Rect$composable$lambda(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGRectAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      $attrs(new SVGRectAttrsScope($this$null));
      return Unit_getInstance();
    };
  }
  function Companion_44() {
    Companion_instance_44 = this;
  }
  protoOf(Companion_44).invoke_ytzn80_k$ = function (attrs) {
    return SVGRectAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_44;
  function Companion_getInstance_48() {
    if (Companion_instance_44 == null)
      new Companion_44();
    return Companion_instance_44;
  }
  function get_$stableprop_113() {
    return 0;
  }
  function SVGRectAttrsScope(attrs) {
    Companion_getInstance_48();
    SVGGraphicalElementAttrsScope.call(this, attrs);
    this.$stable_3 = 0;
  }
  protoOf(SVGRectAttrsScope).rx_neywol_k$ = function (value) {
    this.attr_w68641_k$('rx', toString(value));
  };
  protoOf(SVGRectAttrsScope).ry_pgu87o_k$ = function (value) {
    this.attr_w68641_k$('ry', toString(value));
  };
  protoOf(SVGRectAttrsScope).rx_h0fbf_k$ = function (value) {
    this.attr_w68641_k$('rx', toString(value));
  };
  protoOf(SVGRectAttrsScope).ry_cwgqcs_k$ = function (value) {
    this.attr_w68641_k$('ry', toString(value));
  };
  function Group$composable(_this__u8e3s4, attrs, content, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-375607913);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 32 : 16);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 256 : 128);
    if (!(($dirty & 721) === 144) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
        tmp = Companion_getInstance_49().invoke_cn7v_k$(tmp0_safe_receiver);
      }
      GenericTag$composable_0('g', 'http://www.w3.org/2000/svg', tmp, content, $composer_0, 54 | 7168 & $dirty << 3, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver_0 = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      tmp0_safe_receiver_0.updateScope_t8jcf_k$(Group$composable$lambda(_this__u8e3s4, attrs_0, content, $changed, $default));
    }
  }
  function SVGGroupAttrsScope$Companion$invoke$lambda($attrs) {
    return function ($this$null) {
      $attrs(new SVGGroupAttrsScope($this$null));
      return Unit_getInstance();
    };
  }
  function Companion_45() {
    Companion_instance_45 = this;
  }
  protoOf(Companion_45).invoke_cn7v_k$ = function (attrs) {
    return SVGGroupAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_45;
  function Companion_getInstance_49() {
    if (Companion_instance_45 == null)
      new Companion_45();
    return Companion_instance_45;
  }
  function get_$stableprop_114() {
    return 0;
  }
  function SVGGroupAttrsScope(attrs) {
    Companion_getInstance_49();
    SVGContainerElementAttrsScope.call(this, attrs);
    this.$stable_4 = 0;
  }
  function PointsAttrs$points$lambda(it) {
    return toString(it.get_first_irdx8n_k$()) + ',' + toString(it.get_second_jf7fjx_k$());
  }
  function PointsAttrs() {
  }
  function CenterCoordinateAttrs() {
  }
  function Svg$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Svg$composable($attrs._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Defs$composable$lambda($this_Defs$composable, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Defs$composable($this_Defs$composable, $attrs._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function RadialGradient$composable$lambda($this_RadialGradient$composable, $id, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      RadialGradient$composable($this_RadialGradient$composable, $id, $attrs._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Stop$composable$lambda($offset, $stopColor, $stopOpacity) {
    return function ($this$Stop) {
      var tmp0_safe_receiver = $offset._v;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        $this$Stop.offset_yc808x_k$(tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $stopColor._v;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        $this$Stop.stopColor_c8neur_k$(tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $stopOpacity._v;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        $this$Stop.stopOpacity_czhyia_k$(tmp2_safe_receiver);
      }
      return Unit_getInstance();
    };
  }
  function Stop$composable$lambda_0($this_Stop$composable, $offset, $stopColor, $stopOpacity, $$changed, $$default) {
    return function ($composer, $force) {
      Stop$composable($this_Stop$composable, $offset._v, $stopColor._v, $stopOpacity._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Stop$composable$lambda_1($this_Stop$composable, $attrs, $$changed) {
    return function ($composer, $force) {
      Stop$composable_0($this_Stop$composable, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Path$composable$lambda($this_Path$composable, $attrs, $$changed) {
    return function ($composer, $force) {
      Path$composable($this_Path$composable, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Polyline$composable$lambda($this_Polyline$composable, $attrs, $$changed) {
    return function ($composer, $force) {
      Polyline$composable($this_Polyline$composable, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Circle$composable$lambda($this_Circle$composable, $attrs, $$changed) {
    return function ($composer, $force) {
      Circle$composable($this_Circle$composable, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Line$composable$lambda($this_Line$composable, $attrs, $$changed) {
    return function ($composer, $force) {
      Line$composable($this_Line$composable, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Rect$composable$lambda($this_Rect$composable, $attrs, $$changed) {
    return function ($composer, $force) {
      Rect$composable($this_Rect$composable, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Group$composable$lambda($this_Group$composable, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Group$composable($this_Group$composable, $attrs._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function SVGGradientUnits_UserSpaceOnUse_getInstance() {
    SVGGradientUnits_initEntries();
    return SVGGradientUnits_UserSpaceOnUse_instance;
  }
  function SVGGradientUnits_UserSpace_getInstance() {
    SVGGradientUnits_initEntries();
    return SVGGradientUnits_UserSpace_instance;
  }
  function SVGGradientUnits_ObjectBoundingBox_getInstance() {
    SVGGradientUnits_initEntries();
    return SVGGradientUnits_ObjectBoundingBox_instance;
  }
  function SVGGradientSpreadMethod_Pad_getInstance() {
    SVGGradientSpreadMethod_initEntries();
    return SVGGradientSpreadMethod_Pad_instance;
  }
  function SVGGradientSpreadMethod_Reflect_getInstance() {
    SVGGradientSpreadMethod_initEntries();
    return SVGGradientSpreadMethod_Reflect_instance;
  }
  function SVGGradientSpreadMethod_Repeat_getInstance() {
    SVGGradientSpreadMethod_initEntries();
    return SVGGradientSpreadMethod_Repeat_instance;
  }
  function SVGStopColorType_CurrentColor_getInstance() {
    SVGStopColorType_initEntries();
    return SVGStopColorType_CurrentColor_instance;
  }
  function SVGStrokeType_None_getInstance() {
    SVGStrokeType_initEntries();
    return SVGStrokeType_None_instance;
  }
  function SVGStrokeType_CurrentColor_getInstance() {
    SVGStrokeType_initEntries();
    return SVGStrokeType_CurrentColor_instance;
  }
  function SVGStrokeLineCap_Butt_getInstance() {
    SVGStrokeLineCap_initEntries();
    return SVGStrokeLineCap_Butt_instance;
  }
  function SVGStrokeLineCap_Round_getInstance() {
    SVGStrokeLineCap_initEntries();
    return SVGStrokeLineCap_Round_instance;
  }
  function SVGStrokeLineCap_Square_getInstance() {
    SVGStrokeLineCap_initEntries();
    return SVGStrokeLineCap_Square_instance;
  }
  function SVGStrokeLineJoin_Miter_getInstance() {
    SVGStrokeLineJoin_initEntries();
    return SVGStrokeLineJoin_Miter_instance;
  }
  function SVGStrokeLineJoin_Round_getInstance() {
    SVGStrokeLineJoin_initEntries();
    return SVGStrokeLineJoin_Round_instance;
  }
  function SVGStrokeLineJoin_Bevel_getInstance() {
    SVGStrokeLineJoin_initEntries();
    return SVGStrokeLineJoin_Bevel_instance;
  }
  function SVGFillType_None_getInstance() {
    SVGFillType_initEntries();
    return SVGFillType_None_instance;
  }
  function SVGFillType_CurrentColor_getInstance() {
    SVGFillType_initEntries();
    return SVGFillType_CurrentColor_instance;
  }
  function SVGFillRule_NonZero_getInstance() {
    SVGFillRule_initEntries();
    return SVGFillRule_NonZero_instance;
  }
  function SVGFillRule_EvenOdd_getInstance() {
    SVGFillRule_initEntries();
    return SVGFillRule_EvenOdd_instance;
  }
  function fetch(_this__u8e3s4, method, resource, headers, body, abortController, $completion) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    var responseBytesDeferred = CompletableDeferred();
    var tmp;
    var tmp_0;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(headers == null ? true : headers.isEmpty_y1axqb_k$())) {
      tmp_0 = true;
    } else {
      tmp_0 = !(body == null);
    }
    if (tmp_0) {
      // Inline function 'kotlin.apply' call
      var this_0 = json([]);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.http.fetch.<anonymous>' call
      if (!(body == null)) {
        this_0['Content-Length'] = body.length;
        this_0['Content-Type'] = 'application/octet-stream';
      }
      if (headers == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.collections.iterator' call
        var tmp0_iterator = headers.get_entries_p20ztl_k$().iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var tmp1_loop_parameter = tmp0_iterator.next_20eer_k$();
          // Inline function 'kotlin.collections.component1' call
          var key = tmp1_loop_parameter.get_key_18j28a_k$();
          // Inline function 'kotlin.collections.component2' call
          var value = tmp1_loop_parameter.get_value_j01efc_k$();
          this_0[key] = value;
        }
      }
      tmp = this_0;
    } else {
      tmp = null;
    }
    var headersJson = tmp;
    // Inline function 'org.w3c.fetch.RequestInit' call
    var method_0 = method.get_name_woqyms_k$();
    var headers_0 = headersJson == null ? undefined : headersJson;
    var body_0 = body == null ? undefined : body;
    var referrer = undefined;
    var referrerPolicy = undefined;
    var mode = undefined;
    var credentials = undefined;
    var cache = undefined;
    var redirect = undefined;
    var integrity = undefined;
    var keepalive = undefined;
    var window_0 = undefined;
    var o = {};
    o['method'] = method_0;
    o['headers'] = headers_0;
    o['body'] = body_0;
    o['referrer'] = referrer;
    o['referrerPolicy'] = referrerPolicy;
    o['mode'] = mode;
    o['credentials'] = credentials;
    o['cache'] = cache;
    o['redirect'] = redirect;
    o['integrity'] = integrity;
    o['keepalive'] = keepalive;
    o['window'] = window_0;
    var requestInit = o;
    if (!(abortController == null)) {
      var requestInitDynamic = requestInit;
      requestInitDynamic['signal'] = abortController.get_signal_jhh4tt_k$();
    }
    var tmp_1 = _this__u8e3s4.window.fetch(resource, requestInit);
    var tmp_2 = fetch$lambda(responseBytesDeferred);
    tmp_1.then(tmp_2, fetch$lambda_0(responseBytesDeferred));
    return responseBytesDeferred.await_4rdzbx_k$($completion);
  }
  var HttpMethod_DELETE_instance;
  var HttpMethod_GET_instance;
  var HttpMethod_HEAD_instance;
  var HttpMethod_OPTIONS_instance;
  var HttpMethod_PATCH_instance;
  var HttpMethod_POST_instance;
  var HttpMethod_PUT_instance;
  function values_11() {
    return [HttpMethod_DELETE_getInstance(), HttpMethod_GET_getInstance(), HttpMethod_HEAD_getInstance(), HttpMethod_OPTIONS_getInstance(), HttpMethod_PATCH_getInstance(), HttpMethod_POST_getInstance(), HttpMethod_PUT_getInstance()];
  }
  function valueOf_11(value) {
    switch (value) {
      case 'DELETE':
        return HttpMethod_DELETE_getInstance();
      case 'GET':
        return HttpMethod_GET_getInstance();
      case 'HEAD':
        return HttpMethod_HEAD_getInstance();
      case 'OPTIONS':
        return HttpMethod_OPTIONS_getInstance();
      case 'PATCH':
        return HttpMethod_PATCH_getInstance();
      case 'POST':
        return HttpMethod_POST_getInstance();
      case 'PUT':
        return HttpMethod_PUT_getInstance();
      default:
        HttpMethod_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_11() {
    if ($ENTRIES_11 == null)
      $ENTRIES_11 = enumEntries(values_11());
    return $ENTRIES_11;
  }
  var HttpMethod_entriesInitialized;
  function HttpMethod_initEntries() {
    if (HttpMethod_entriesInitialized)
      return Unit_getInstance();
    HttpMethod_entriesInitialized = true;
    HttpMethod_DELETE_instance = new HttpMethod('DELETE', 0);
    HttpMethod_GET_instance = new HttpMethod('GET', 1);
    HttpMethod_HEAD_instance = new HttpMethod('HEAD', 2);
    HttpMethod_OPTIONS_instance = new HttpMethod('OPTIONS', 3);
    HttpMethod_PATCH_instance = new HttpMethod('PATCH', 4);
    HttpMethod_POST_instance = new HttpMethod('POST', 5);
    HttpMethod_PUT_instance = new HttpMethod('PUT', 6);
  }
  var $ENTRIES_11;
  function HttpMethod(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function tryFetch(_this__u8e3s4, method, resource, headers, body, logOnError, abortController, $completion) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    logOnError = logOnError === VOID ? false : logOnError;
    abortController = abortController === VOID ? null : abortController;
    var tmp = new $tryFetchCOROUTINE$0(_this__u8e3s4, method, resource, headers, body, logOnError, abortController, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function getBodyBytesAsync(_this__u8e3s4, result) {
    var tmp = CoroutineScope(asCoroutineDispatcher(window));
    launch(tmp, VOID, VOID, getBodyBytesAsync$slambda_0(result, _this__u8e3s4, null));
  }
  function get_$stableprop_115() {
    return 0;
  }
  function ResponseException(response, bodyBytes) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.http.ResponseException.<init>.<anonymous>' call
    this_0.append_22ad7x_k$('URL = ' + response.url + ', Status = ' + response.status + ', Status Text = ' + response.statusText);
    var tmp1_safe_receiver = bodyBytes == null ? null : decodeToString(bodyBytes);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.text.trim' call
      tmp = toString(trim(isCharSequence(tmp1_safe_receiver) ? tmp1_safe_receiver : THROW_CCE()));
    }
    var tmp2_safe_receiver = tmp;
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_1;
      // Inline function 'com.varabyte.kobweb.compose.http.ResponseException.<init>.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(tmp2_safe_receiver)) {
        tmp_1 = tmp2_safe_receiver;
      } else {
        tmp_1 = null;
      }
      tmp_0 = tmp_1;
    }
    var bodyString = tmp_0;
    if (!(bodyString == null)) {
      // Inline function 'kotlin.text.appendLine' call
      this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(10));
      var lines = split_0(bodyString, ['\n']);
      var tmp$ret$5;
      $l$block: {
        // Inline function 'kotlin.collections.maxOfOrNull' call
        var iterator = lines.iterator_jk1svi_k$();
        if (!iterator.hasNext_bitz1p_k$()) {
          tmp$ret$5 = null;
          break $l$block;
        }
        // Inline function 'com.varabyte.kobweb.compose.http.ResponseException.<init>.<anonymous>.<anonymous>' call
        var maxValue = iterator.next_20eer_k$().length;
        while (iterator.hasNext_bitz1p_k$()) {
          // Inline function 'com.varabyte.kobweb.compose.http.ResponseException.<init>.<anonymous>.<anonymous>' call
          var v = iterator.next_20eer_k$().length;
          if (compareTo(maxValue, v) < 0) {
            maxValue = v;
          }
        }
        tmp$ret$5 = maxValue;
      }
      var tmp3_elvis_lhs = tmp$ret$5;
      var longestLineLength = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
      var indent = '  ';
      var boundary = indent + repeat('-', longestLineLength);
      // Inline function 'kotlin.text.appendLine' call
      // Inline function 'kotlin.text.appendLine' call
      this_0.append_22ad7x_k$(boundary).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = lines.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.varabyte.kobweb.compose.http.ResponseException.<init>.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.text.appendLine' call
        var value = indent + element;
        // Inline function 'kotlin.text.appendLine' call
        this_0.append_22ad7x_k$(value).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
      }
      // Inline function 'kotlin.text.appendLine' call
      // Inline function 'kotlin.text.appendLine' call
      this_0.append_22ad7x_k$(boundary).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
    }
    var tmp$ret$15 = this_0.toString();
    Exception_init_$Init$(tmp$ret$15, this);
    captureStack(this, ResponseException);
    this.response_1 = response;
    this.bodyBytes_1 = bodyBytes;
    this.$stable_1 = 0;
  }
  protoOf(ResponseException).get_response_xlk07e_k$ = function () {
    return this.response_1;
  };
  protoOf(ResponseException).get_bodyBytes_ssopc0_k$ = function () {
    return this.bodyBytes_1;
  };
  function getBodyBytes(_this__u8e3s4, $completion) {
    var tmp = new $getBodyBytesCOROUTINE$1(_this__u8e3s4, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function fetch$lambda$lambda($responseBytesDeferred) {
    return function (bodyBytes) {
      $responseBytesDeferred.complete_ixf84q_k$(bodyBytes);
      return Unit_getInstance();
    };
  }
  function fetch$lambda$lambda_0($responseBytesDeferred, $res) {
    return function (bodyBytes) {
      $responseBytesDeferred.completeExceptionally_xyzekf_k$(new ResponseException($res, bodyBytes));
      return Unit_getInstance();
    };
  }
  function fetch$lambda($responseBytesDeferred) {
    return function (res) {
      var tmp;
      if (res.ok) {
        getBodyBytesAsync(res, fetch$lambda$lambda($responseBytesDeferred));
        tmp = Unit_getInstance();
      } else {
        getBodyBytesAsync(res, fetch$lambda$lambda_0($responseBytesDeferred, res));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function fetch$lambda_0($responseBytesDeferred) {
    return function (t) {
      return $responseBytesDeferred.completeExceptionally_xyzekf_k$(t);
    };
  }
  function getBodyBytesAsync$slambda($result, $this_getBodyBytesAsync, resultContinuation) {
    this.$result_1 = $result;
    this.$this_getBodyBytesAsync_1 = $this_getBodyBytesAsync;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(getBodyBytesAsync$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(getBodyBytesAsync$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(getBodyBytesAsync$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = getBodyBytes(this.$this_getBodyBytesAsync_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.$result_1(ARGUMENT);
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(getBodyBytesAsync$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new getBodyBytesAsync$slambda(this.$result_1, this.$this_getBodyBytesAsync_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(getBodyBytesAsync$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope_0) : false) ? value : THROW_CCE(), completion);
  };
  function getBodyBytesAsync$slambda_0($result, $this_getBodyBytesAsync, resultContinuation) {
    var i = new getBodyBytesAsync$slambda($result, $this_getBodyBytesAsync, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function getBodyBytes$lambda($cont) {
    return function (responseBuffer) {
      var int8Array = new Int8Array(responseBuffer);
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $cont;
      var tmp = 0;
      var tmp_0 = int8Array.length;
      var tmp_1 = new Int8Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_1[tmp_2] = int8Array[tmp_2];
        tmp = tmp + 1 | 0;
      }
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance_1();
      var tmp$ret$3 = _Result___init__impl__xyqfz8(tmp_1);
      this_0.resumeWith_dtxwbr_k$(tmp$ret$3);
      return Unit_getInstance();
    };
  }
  function getBodyBytes$lambda_0($cont) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $cont;
      var value = new Int8Array(0);
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance_1();
      var tmp$ret$0 = _Result___init__impl__xyqfz8(value);
      this_0.resumeWith_dtxwbr_k$(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function HttpMethod_DELETE_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_DELETE_instance;
  }
  function HttpMethod_GET_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_GET_instance;
  }
  function HttpMethod_HEAD_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_HEAD_instance;
  }
  function HttpMethod_OPTIONS_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_OPTIONS_instance;
  }
  function HttpMethod_PATCH_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_PATCH_instance;
  }
  function HttpMethod_POST_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_POST_instance;
  }
  function HttpMethod_PUT_getInstance() {
    HttpMethod_initEntries();
    return HttpMethod_PUT_instance;
  }
  function $tryFetchCOROUTINE$0(_this__u8e3s4, method, resource, headers, body, logOnError, abortController, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.method_1 = method;
    this.resource_1 = resource;
    this.headers_1 = headers;
    this.body_1 = body;
    this.logOnError_1 = logOnError;
    this.abortController_1 = abortController;
  }
  protoOf($tryFetchCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = fetch(this._this__u8e3s4__1, this.method_1, this.resource_1, this.headers_1, this.body_1, this.abortController_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.TRY_RESULT0__1 = suspendResult;
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Error) {
              var t = this.get_exception_x0n6w6_k$();
              var tmp_1 = this;
              if (this.logOnError_1) {
                console.log('Error fetching resource "' + this.resource_1 + '"\n\n' + t);
              }
              tmp_1.TRY_RESULT0__1 = null;
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return this.TRY_RESULT0__1;
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $getBodyBytesCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($getBodyBytesCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var safe = SafeContinuation_init_$Create$(intercepted(this));
            var tmp_0 = this._this__u8e3s4__1.arrayBuffer();
            var tmp_1 = tmp_0.then(getBodyBytes$lambda(safe));
            tmp_1.catch(getBodyBytes$lambda_0(safe));
            suspendResult = returnIfSuspended(safe.getOrThrow_323tdf_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function get_http(_this__u8e3s4) {
    _init_properties_HttpFetcher_kt__6mmkul();
    // Inline function 'kotlin.getValue' call
    var this_0 = http$delegate;
    http$factory();
    return this_0.get_value_j01efc_k$();
  }
  var http$delegate;
  function _get_window__ax0zxh($this) {
    return $this.window_1;
  }
  function get_$stableprop_116() {
    return 8;
  }
  function HttpFetcher(window_0) {
    this.window_1 = window_0;
    this.logOnError_1 = false;
    this.$stable_1 = 8;
  }
  protoOf(HttpFetcher).set_logOnError_wi584t_k$ = function (_set____db54di) {
    this.logOnError_1 = _set____db54di;
  };
  protoOf(HttpFetcher).get_logOnError_4wpkhe_k$ = function () {
    return this.logOnError_1;
  };
  protoOf(HttpFetcher).delete_wslas5_k$ = function (resource, headers, abortController, $completion) {
    return fetch(this.window_1, HttpMethod_DELETE_getInstance(), resource, headers, null, abortController, $completion);
  };
  protoOf(HttpFetcher).delete$default_nray4m_k$ = function (resource, headers, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.delete_wslas5_k$(resource, headers, abortController, $completion) : $super.delete_wslas5_k$.call(this, resource, headers, abortController, $completion);
  };
  protoOf(HttpFetcher).tryDelete_m2u9f5_k$ = function (resource, headers, abortController, $completion) {
    return tryFetch(this.window_1, HttpMethod_DELETE_getInstance(), resource, headers, null, this.logOnError_1, abortController, $completion);
  };
  protoOf(HttpFetcher).tryDelete$default_9ufome_k$ = function (resource, headers, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryDelete_m2u9f5_k$(resource, headers, abortController, $completion) : $super.tryDelete_m2u9f5_k$.call(this, resource, headers, abortController, $completion);
  };
  protoOf(HttpFetcher).get_xhyvli_k$ = function (resource, headers, abortController, $completion) {
    return fetch(this.window_1, HttpMethod_GET_getInstance(), resource, headers, null, abortController, $completion);
  };
  protoOf(HttpFetcher).get$default_cr32zp_k$ = function (resource, headers, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.get_xhyvli_k$(resource, headers, abortController, $completion) : $super.get_xhyvli_k$.call(this, resource, headers, abortController, $completion);
  };
  protoOf(HttpFetcher).tryGet_45t258_k$ = function (resource, headers, abortController, $completion) {
    return tryFetch(this.window_1, HttpMethod_GET_getInstance(), resource, headers, null, this.logOnError_1, abortController, $completion);
  };
  protoOf(HttpFetcher).tryGet$default_qaic3z_k$ = function (resource, headers, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryGet_45t258_k$(resource, headers, abortController, $completion) : $super.tryGet_45t258_k$.call(this, resource, headers, abortController, $completion);
  };
  protoOf(HttpFetcher).head_k8zolc_k$ = function (resource, headers, abortController, $completion) {
    return fetch(this.window_1, HttpMethod_HEAD_getInstance(), resource, headers, null, abortController, $completion);
  };
  protoOf(HttpFetcher).head$default_7lq8vj_k$ = function (resource, headers, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.head_k8zolc_k$(resource, headers, abortController, $completion) : $super.head_k8zolc_k$.call(this, resource, headers, abortController, $completion);
  };
  protoOf(HttpFetcher).tryHead_mqreyk_k$ = function (resource, headers, abortController, $completion) {
    return tryFetch(this.window_1, HttpMethod_HEAD_getInstance(), resource, headers, null, this.logOnError_1, abortController, $completion);
  };
  protoOf(HttpFetcher).tryHead$default_lmwj1r_k$ = function (resource, headers, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryHead_mqreyk_k$(resource, headers, abortController, $completion) : $super.tryHead_mqreyk_k$.call(this, resource, headers, abortController, $completion);
  };
  protoOf(HttpFetcher).options_lpliv2_k$ = function (resource, headers, abortController, $completion) {
    return fetch(this.window_1, HttpMethod_OPTIONS_getInstance(), resource, headers, null, abortController, $completion);
  };
  protoOf(HttpFetcher).options$default_40b3u5_k$ = function (resource, headers, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.options_lpliv2_k$(resource, headers, abortController, $completion) : $super.options_lpliv2_k$.call(this, resource, headers, abortController, $completion);
  };
  protoOf(HttpFetcher).tryOptions_pcpqhg_k$ = function (resource, headers, abortController, $completion) {
    return tryFetch(this.window_1, HttpMethod_OPTIONS_getInstance(), resource, headers, null, this.logOnError_1, abortController, $completion);
  };
  protoOf(HttpFetcher).tryOptions$default_9mb82f_k$ = function (resource, headers, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryOptions_pcpqhg_k$(resource, headers, abortController, $completion) : $super.tryOptions_pcpqhg_k$.call(this, resource, headers, abortController, $completion);
  };
  protoOf(HttpFetcher).patch_xcksz5_k$ = function (resource, headers, body, abortController, $completion) {
    return fetch(this.window_1, HttpMethod_PATCH_getInstance(), resource, headers, body, abortController, $completion);
  };
  protoOf(HttpFetcher).patch$default_j9csrl_k$ = function (resource, headers, body, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.patch_xcksz5_k$(resource, headers, body, abortController, $completion) : $super.patch_xcksz5_k$.call(this, resource, headers, body, abortController, $completion);
  };
  protoOf(HttpFetcher).tryPatch_e3fj7x_k$ = function (resource, headers, body, abortController, $completion) {
    return tryFetch(this.window_1, HttpMethod_PATCH_getInstance(), resource, headers, body, this.logOnError_1, abortController, $completion);
  };
  protoOf(HttpFetcher).tryPatch$default_577bp3_k$ = function (resource, headers, body, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryPatch_e3fj7x_k$(resource, headers, body, abortController, $completion) : $super.tryPatch_e3fj7x_k$.call(this, resource, headers, body, abortController, $completion);
  };
  protoOf(HttpFetcher).post_8r1r07_k$ = function (resource, headers, body, abortController, $completion) {
    return fetch(this.window_1, HttpMethod_POST_getInstance(), resource, headers, body, abortController, $completion);
  };
  protoOf(HttpFetcher).post$default_m8zovr_k$ = function (resource, headers, body, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.post_8r1r07_k$(resource, headers, body, abortController, $completion) : $super.post_8r1r07_k$.call(this, resource, headers, body, abortController, $completion);
  };
  protoOf(HttpFetcher).tryPost_3n7omz_k$ = function (resource, headers, body, abortController, $completion) {
    return tryFetch(this.window_1, HttpMethod_POST_getInstance(), resource, headers, body, this.logOnError_1, abortController, $completion);
  };
  protoOf(HttpFetcher).tryPost$default_75e64p_k$ = function (resource, headers, body, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryPost_3n7omz_k$(resource, headers, body, abortController, $completion) : $super.tryPost_3n7omz_k$.call(this, resource, headers, body, abortController, $completion);
  };
  protoOf(HttpFetcher).put_hgmsaw_k$ = function (resource, headers, body, abortController, $completion) {
    return fetch(this.window_1, HttpMethod_PUT_getInstance(), resource, headers, body, abortController, $completion);
  };
  protoOf(HttpFetcher).put$default_k48l96_k$ = function (resource, headers, body, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.put_hgmsaw_k$(resource, headers, body, abortController, $completion) : $super.put_hgmsaw_k$.call(this, resource, headers, body, abortController, $completion);
  };
  protoOf(HttpFetcher).tryPut_p0ou0k_k$ = function (resource, headers, body, abortController, $completion) {
    return tryFetch(this.window_1, HttpMethod_PUT_getInstance(), resource, headers, body, this.logOnError_1, abortController, $completion);
  };
  protoOf(HttpFetcher).tryPut$default_u6i73k_k$ = function (resource, headers, body, abortController, $completion, $super) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    return $super === VOID ? this.tryPut_p0ou0k_k$(resource, headers, body, abortController, $completion) : $super.tryPut_p0ou0k_k$.call(this, resource, headers, body, abortController, $completion);
  };
  function _get_controller__bh9bov($this) {
    return $this.controller_1;
  }
  function get_$stableprop_117() {
    return 8;
  }
  function AbortController_0() {
    this.controller_1 = new AbortController();
    this.signal_1 = this.controller_1.signal;
    this.$stable_1 = 8;
  }
  protoOf(AbortController_0).get_signal_jhh4tt_k$ = function () {
    return this.signal_1;
  };
  protoOf(AbortController_0).abort_lahfmo_k$ = function () {
    this.controller_1.abort();
  };
  function http$delegate$lambda() {
    _init_properties_HttpFetcher_kt__6mmkul();
    return new HttpFetcher(window);
  }
  function http$factory() {
    return getPropertyCallableRef('http', 1, KProperty1, function (receiver) {
      return get_http(receiver);
    }, null);
  }
  var properties_initialized_HttpFetcher_kt_uxns7j;
  function _init_properties_HttpFetcher_kt__6mmkul() {
    if (!properties_initialized_HttpFetcher_kt_uxns7j) {
      properties_initialized_HttpFetcher_kt_uxns7j = true;
      http$delegate = lazy(http$delegate$lambda);
    }
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
          this_0.append_22ad7x_k$('-');
        }
      }
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$5 = toString_0(item).toLowerCase();
      this_0.append_22ad7x_k$(tmp$ret$5);
      lastIsUpper = isUpper;
    }
    return this_0.toString();
  }
  function wrapQuotesIfNecessary(_this__u8e3s4) {
    var tmp;
    if ((_this__u8e3s4.length >= 2 ? first(_this__u8e3s4) === _Char___init__impl__6a9atx(34) : false) ? last(_this__u8e3s4) === _Char___init__impl__6a9atx(34) : false) {
      tmp = _this__u8e3s4;
    } else {
      tmp = '"' + replace(_this__u8e3s4, '"', '\\"') + '"';
    }
    return tmp;
  }
  function kebabCaseToTitleCamelCase$lambda(it) {
    return capitalize(it);
  }
  function _set_id__dl8o4k($this, _set____db54di) {
    $this.id_1 = _set____db54di;
  }
  function _set_isInterval__bobeco($this, _set____db54di) {
    $this.isInterval_1 = _set____db54di;
  }
  function get_$stableprop_118() {
    return 8;
  }
  function CancellableActionHandle(id, isInterval) {
    isInterval = isInterval === VOID ? false : isInterval;
    this.id_1 = id;
    this.isInterval_1 = isInterval;
    this.$stable_1 = 8;
  }
  protoOf(CancellableActionHandle).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(CancellableActionHandle).get_isInterval_nuxkdk_k$ = function () {
    return this.isInterval_1;
  };
  protoOf(CancellableActionHandle).cancel_2l89ey_k$ = function () {
    if (this.isInterval_1) {
      window.clearInterval(this.id_1);
    } else {
      window.clearTimeout(this.id_1);
    }
    this.id_1 = 0;
  };
  protoOf(CancellableActionHandle).setTo_cykg65_k$ = function (other) {
    this.id_1 = other.id_1;
    this.isInterval_1 = other.isInterval_1;
  };
  function invokeLater(_this__u8e3s4, block) {
    // Inline function 'kotlin.time.Companion.milliseconds' call
    Companion_getInstance_2();
    var tmp$ret$0 = toDuration(0, DurationUnit_MILLISECONDS_getInstance());
    return setTimeout(_this__u8e3s4, tmp$ret$0, block);
  }
  function setTimeout(_this__u8e3s4, timeout, block) {
    var id = _this__u8e3s4.window.setTimeout(block, _Duration___get_inWholeMilliseconds__impl__msfiry(timeout).toInt_1tsl84_k$());
    return new CancellableActionHandle(id);
  }
  //region block: post-declaration
  protoOf(ComparableAttrsScope).classes_ayghm2_k$ = classes;
  protoOf(ComparableAttrsScope).id_e4l56n_k$ = id;
  protoOf(ComparableAttrsScope).hidden_k4uzbq_k$ = hidden;
  protoOf(ComparableAttrsScope).title_qpfo4e_k$ = title;
  protoOf(ComparableAttrsScope).dir_uokp4q_k$ = dir;
  protoOf(ComparableAttrsScope).draggable_cxyxb5_k$ = draggable;
  protoOf(ComparableAttrsScope).contentEditable_hbi188_k$ = contentEditable;
  protoOf(ComparableAttrsScope).lang_9i4u6k_k$ = lang;
  protoOf(ComparableAttrsScope).tabIndex_fn4aj_k$ = tabIndex;
  protoOf(ComparableAttrsScope).spellCheck_hp5v6j_k$ = spellCheck;
  protoOf(ComparableAttrsScope).inputMode_1lh0s3_k$ = inputMode;
  protoOf(ComparableAttrsScope).inputMode_7krh0f_k$ = inputMode_0;
  protoOf(ComparableAttrsScope).onContextMenu_uus4bk_k$ = onContextMenu;
  protoOf(ComparableAttrsScope).onClick_q9cds6_k$ = onClick;
  protoOf(ComparableAttrsScope).onDoubleClick_gh82mh_k$ = onDoubleClick;
  protoOf(ComparableAttrsScope).onMouseDown_hebxzb_k$ = onMouseDown;
  protoOf(ComparableAttrsScope).onMouseUp_at21zm_k$ = onMouseUp;
  protoOf(ComparableAttrsScope).onMouseEnter_smfckd_k$ = onMouseEnter;
  protoOf(ComparableAttrsScope).onMouseLeave_j862le_k$ = onMouseLeave;
  protoOf(ComparableAttrsScope).onMouseMove_r2z3wo_k$ = onMouseMove;
  protoOf(ComparableAttrsScope).onMouseOut_nootgn_k$ = onMouseOut;
  protoOf(ComparableAttrsScope).onMouseOver_o893qj_k$ = onMouseOver;
  protoOf(ComparableAttrsScope).onWheel_59frrx_k$ = onWheel;
  protoOf(ComparableAttrsScope).onDrag_xkse65_k$ = onDrag;
  protoOf(ComparableAttrsScope).onDrop_373vqw_k$ = onDrop;
  protoOf(ComparableAttrsScope).onDragStart_ispt2x_k$ = onDragStart;
  protoOf(ComparableAttrsScope).onDragEnd_4or1o2_k$ = onDragEnd;
  protoOf(ComparableAttrsScope).onDragOver_tkxwb3_k$ = onDragOver;
  protoOf(ComparableAttrsScope).onDragEnter_9tqs4v_k$ = onDragEnter;
  protoOf(ComparableAttrsScope).onDragLeave_nsncqa_k$ = onDragLeave;
  protoOf(ComparableAttrsScope).onCopy_4jq33g_k$ = onCopy;
  protoOf(ComparableAttrsScope).onCut_wod3pf_k$ = onCut;
  protoOf(ComparableAttrsScope).onPaste_8ucd2k_k$ = onPaste;
  protoOf(ComparableAttrsScope).onKeyDown_2pa1il_k$ = onKeyDown;
  protoOf(ComparableAttrsScope).onKeyUp_g6q8ee_k$ = onKeyUp;
  protoOf(ComparableAttrsScope).onFocus_ozgn2v_k$ = onFocus;
  protoOf(ComparableAttrsScope).onBlur_yy3d4s_k$ = onBlur;
  protoOf(ComparableAttrsScope).onFocusIn_vryg4c_k$ = onFocusIn;
  protoOf(ComparableAttrsScope).onFocusOut_jw1zh_k$ = onFocusOut;
  protoOf(ComparableAttrsScope).onTouchCancel_rg0d1t_k$ = onTouchCancel;
  protoOf(ComparableAttrsScope).onTouchMove_wm6qxk_k$ = onTouchMove;
  protoOf(ComparableAttrsScope).onTouchEnd_ugz1se_k$ = onTouchEnd;
  protoOf(ComparableAttrsScope).onTouchStart_4yr0c9_k$ = onTouchStart;
  protoOf(ComparableAttrsScope).onAnimationEnd_l576ug_k$ = onAnimationEnd;
  protoOf(ComparableAttrsScope).onAnimationIteration_o79r9y_k$ = onAnimationIteration;
  protoOf(ComparableAttrsScope).onAnimationStart_ir5kdr_k$ = onAnimationStart;
  protoOf(ComparableAttrsScope).onScroll_ur92mf_k$ = onScroll;
  protoOf(ComparableAttrsScope).addEventListener_pu8o1q_k$ = addEventListener;
  protoOf(ComparableAttrsScope).addEventListener_xhf81m_k$ = addEventListener_0;
  protoOf(DummyAttrsScope).classes_ayghm2_k$ = classes;
  protoOf(DummyAttrsScope).id_e4l56n_k$ = id;
  protoOf(DummyAttrsScope).hidden_k4uzbq_k$ = hidden;
  protoOf(DummyAttrsScope).title_qpfo4e_k$ = title;
  protoOf(DummyAttrsScope).dir_uokp4q_k$ = dir;
  protoOf(DummyAttrsScope).draggable_cxyxb5_k$ = draggable;
  protoOf(DummyAttrsScope).contentEditable_hbi188_k$ = contentEditable;
  protoOf(DummyAttrsScope).lang_9i4u6k_k$ = lang;
  protoOf(DummyAttrsScope).tabIndex_fn4aj_k$ = tabIndex;
  protoOf(DummyAttrsScope).spellCheck_hp5v6j_k$ = spellCheck;
  protoOf(DummyAttrsScope).inputMode_1lh0s3_k$ = inputMode;
  protoOf(DummyAttrsScope).inputMode_7krh0f_k$ = inputMode_0;
  protoOf(DummyAttrsScope).onContextMenu_uus4bk_k$ = onContextMenu;
  protoOf(DummyAttrsScope).onClick_q9cds6_k$ = onClick;
  protoOf(DummyAttrsScope).onDoubleClick_gh82mh_k$ = onDoubleClick;
  protoOf(DummyAttrsScope).onMouseDown_hebxzb_k$ = onMouseDown;
  protoOf(DummyAttrsScope).onMouseUp_at21zm_k$ = onMouseUp;
  protoOf(DummyAttrsScope).onMouseEnter_smfckd_k$ = onMouseEnter;
  protoOf(DummyAttrsScope).onMouseLeave_j862le_k$ = onMouseLeave;
  protoOf(DummyAttrsScope).onMouseMove_r2z3wo_k$ = onMouseMove;
  protoOf(DummyAttrsScope).onMouseOut_nootgn_k$ = onMouseOut;
  protoOf(DummyAttrsScope).onMouseOver_o893qj_k$ = onMouseOver;
  protoOf(DummyAttrsScope).onWheel_59frrx_k$ = onWheel;
  protoOf(DummyAttrsScope).onDrag_xkse65_k$ = onDrag;
  protoOf(DummyAttrsScope).onDrop_373vqw_k$ = onDrop;
  protoOf(DummyAttrsScope).onDragStart_ispt2x_k$ = onDragStart;
  protoOf(DummyAttrsScope).onDragEnd_4or1o2_k$ = onDragEnd;
  protoOf(DummyAttrsScope).onDragOver_tkxwb3_k$ = onDragOver;
  protoOf(DummyAttrsScope).onDragEnter_9tqs4v_k$ = onDragEnter;
  protoOf(DummyAttrsScope).onDragLeave_nsncqa_k$ = onDragLeave;
  protoOf(DummyAttrsScope).onCopy_4jq33g_k$ = onCopy;
  protoOf(DummyAttrsScope).onCut_wod3pf_k$ = onCut;
  protoOf(DummyAttrsScope).onPaste_8ucd2k_k$ = onPaste;
  protoOf(DummyAttrsScope).onKeyDown_2pa1il_k$ = onKeyDown;
  protoOf(DummyAttrsScope).onKeyUp_g6q8ee_k$ = onKeyUp;
  protoOf(DummyAttrsScope).onFocus_ozgn2v_k$ = onFocus;
  protoOf(DummyAttrsScope).onBlur_yy3d4s_k$ = onBlur;
  protoOf(DummyAttrsScope).onFocusIn_vryg4c_k$ = onFocusIn;
  protoOf(DummyAttrsScope).onFocusOut_jw1zh_k$ = onFocusOut;
  protoOf(DummyAttrsScope).onTouchCancel_rg0d1t_k$ = onTouchCancel;
  protoOf(DummyAttrsScope).onTouchMove_wm6qxk_k$ = onTouchMove;
  protoOf(DummyAttrsScope).onTouchEnd_ugz1se_k$ = onTouchEnd;
  protoOf(DummyAttrsScope).onTouchStart_4yr0c9_k$ = onTouchStart;
  protoOf(DummyAttrsScope).onAnimationEnd_l576ug_k$ = onAnimationEnd;
  protoOf(DummyAttrsScope).onAnimationIteration_o79r9y_k$ = onAnimationIteration;
  protoOf(DummyAttrsScope).onAnimationStart_ir5kdr_k$ = onAnimationStart;
  protoOf(DummyAttrsScope).onScroll_ur92mf_k$ = onScroll;
  protoOf(DummyAttrsScope).addEventListener_pu8o1q_k$ = addEventListener;
  protoOf(DummyAttrsScope).addEventListener_xhf81m_k$ = addEventListener_0;
  protoOf(ComparableStyleScope).property_wcrait_k$ = property;
  protoOf(ComparableStyleScope).property_jk9dw6_k$ = property_0;
  protoOf(ComparableStyleScope).variable_kvosx8_k$ = variable;
  protoOf(ComparableStyleScope).variable_j4rwe5_k$ = variable_0;
  protoOf(ComparableStyleScope).invoke_77zbl8_k$ = invoke;
  protoOf(ComparableStyleScope).invoke_rxx4vw_k$ = invoke_0;
  protoOf(ComparableStyleScope).invoke_jsk60r_k$ = invoke_1;
  protoOf(CalcScopeInstance).times_cubebc_k$ = times;
  protoOf(CalcScopeInstance).times_6xg5ti_k$ = times_0;
  protoOf(CalcScopeInstance).div_wucann_k$ = div;
  protoOf(CalcScopeInstance).plus_g6zkc3_k$ = plus_1;
  protoOf(CalcScopeInstance).minus_29zpb7_k$ = minus;
  protoOf(CalcScopeInstance).unaryMinus_d2gf0y_k$ = unaryMinus;
  protoOf(CalcScopeInstance).unaryPlus_9h1xw6_k$ = unaryPlus;
  protoOf(CalcScopeInstance).num_5kpq4n_k$ = num;
  protoOf(SVGGraphicalElementAttrsScope).stroke_gwdh04_k$ = stroke;
  protoOf(SVGGraphicalElementAttrsScope).stroke_m42ljs_k$ = stroke_0;
  protoOf(SVGGraphicalElementAttrsScope).stroke_yaq6g6_k$ = stroke_1;
  protoOf(SVGGraphicalElementAttrsScope).strokeDashArray_61cnbu_k$ = strokeDashArray;
  protoOf(SVGGraphicalElementAttrsScope).strokeDashArray_w05e8t_k$ = strokeDashArray_0;
  protoOf(SVGGraphicalElementAttrsScope).strokeDashOffset_gmplu6_k$ = strokeDashOffset;
  protoOf(SVGGraphicalElementAttrsScope).strokeDashOffset_4g6nv2_k$ = strokeDashOffset_0;
  protoOf(SVGGraphicalElementAttrsScope).strokeLineCap_j27fru_k$ = strokeLineCap;
  protoOf(SVGGraphicalElementAttrsScope).strokeLineJoin_i3mwce_k$ = strokeLineJoin;
  protoOf(SVGGraphicalElementAttrsScope).strokeMiterLimit_cvov7h_k$ = strokeMiterLimit;
  protoOf(SVGGraphicalElementAttrsScope).strokeOpacity_9z0e14_k$ = strokeOpacity;
  protoOf(SVGGraphicalElementAttrsScope).strokeWidth_s6idgd_k$ = strokeWidth;
  protoOf(SVGGraphicalElementAttrsScope).strokeWidth_qi05wj_k$ = strokeWidth_0;
  protoOf(SVGGraphicalElementAttrsScope).fill_m6m1z3_k$ = fill;
  protoOf(SVGGraphicalElementAttrsScope).fill_wlycpl_k$ = fill_0;
  protoOf(SVGGraphicalElementAttrsScope).fill_gyvskv_k$ = fill_1;
  protoOf(SVGGraphicalElementAttrsScope).fillRule_uv8r2f_k$ = fillRule;
  protoOf(SVGGraphicalElementAttrsScope).fillOpacity_3uni2r_k$ = fillOpacity;
  protoOf(SVGGraphicalElementAttrsScope).filter_81gu56_k$ = filter;
  protoOf(SVGGraphicalElementAttrsScope).floodColor_c7kev5_k$ = floodColor;
  protoOf(SVGGraphicalElementAttrsScope).floodOpacity_dw0q4i_k$ = floodOpacity;
  protoOf(SVGGraphicalElementAttrsScope).lightingColor_3dqaer_k$ = lightingColor;
  protoOf(SVGSvgAttrsScope).x_gzumtf_k$ = x;
  protoOf(SVGSvgAttrsScope).x_re57k3_k$ = x_0;
  protoOf(SVGSvgAttrsScope).y_j1pyci_k$ = y;
  protoOf(SVGSvgAttrsScope).y_eyowiq_k$ = y_0;
  protoOf(SVGSvgAttrsScope).height_azv3o_k$ = height;
  protoOf(SVGSvgAttrsScope).height_vnwjw4_k$ = height_0;
  protoOf(SVGSvgAttrsScope).width_ux3u5x_k$ = width_0;
  protoOf(SVGSvgAttrsScope).width_3dri8b_k$ = width_1;
  protoOf(SVGSvgAttrsScope).viewBox_s5pn86_k$ = viewBox;
  protoOf(SVGSvgAttrsScope).viewBox_cjnss5_k$ = viewBox_0;
  protoOf(SVGPolylineAttrsScope).points_buxj0r_k$ = points;
  protoOf(SVGCircleAttrsScope).cx_7c4b4q_k$ = cx;
  protoOf(SVGCircleAttrsScope).cx_pmhp9i_k$ = cx_0;
  protoOf(SVGCircleAttrsScope).cy_5a8zln_k$ = cy;
  protoOf(SVGCircleAttrsScope).cy_d71e85_k$ = cy_0;
  protoOf(SVGRectAttrsScope).x_gzumtf_k$ = x;
  protoOf(SVGRectAttrsScope).x_re57k3_k$ = x_0;
  protoOf(SVGRectAttrsScope).y_j1pyci_k$ = y;
  protoOf(SVGRectAttrsScope).y_eyowiq_k$ = y_0;
  protoOf(SVGRectAttrsScope).height_azv3o_k$ = height;
  protoOf(SVGRectAttrsScope).height_vnwjw4_k$ = height_0;
  protoOf(SVGRectAttrsScope).width_ux3u5x_k$ = width_0;
  protoOf(SVGRectAttrsScope).width_3dri8b_k$ = width_1;
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
  _.$_$.i = StyleVariable_2;
  _.$_$.j = StyleVariable;
  _.$_$.k = StyleVariable_0;
  _.$_$.l = StyleVariable_3;
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
  _.$_$.z1 = toDegrees;
  _.$_$.a2 = transition;
  _.$_$.b2 = translateX;
  _.$_$.c2 = translateY;
  _.$_$.d2 = userSelect;
  _.$_$.e2 = verticalAlign;
  _.$_$.f2 = visibility;
  _.$_$.g2 = whiteSpace;
  _.$_$.h2 = zIndex;
  _.$_$.i2 = Circle$composable;
  _.$_$.j2 = Defs$composable;
  _.$_$.k2 = Group$composable;
  _.$_$.l2 = Line$composable;
  _.$_$.m2 = Path$composable;
  _.$_$.n2 = Polyline$composable;
  _.$_$.o2 = RadialGradient$composable;
  _.$_$.p2 = Rect$composable;
  _.$_$.q2 = Stop$composable;
  _.$_$.r2 = Svg$composable;
  _.$_$.s2 = GenericTag$composable;
  _.$_$.t2 = refScope;
  _.$_$.u2 = registerRefScope$composable;
  _.$_$.v2 = registerRefScope$composable_0;
  _.$_$.w2 = get_http;
  _.$_$.x2 = invokeLater;
  _.$_$.y2 = kebabCaseToTitleCamelCase;
  _.$_$.z2 = titleCamelCaseToKebabCase;
  _.$_$.a3 = Direction_ToBottomRight_getInstance;
  _.$_$.b3 = SVGFillType_CurrentColor_getInstance;
  _.$_$.c3 = SVGFillType_None_getInstance;
  _.$_$.d3 = SVGStrokeLineCap_Round_getInstance;
  _.$_$.e3 = SVGStrokeLineJoin_Round_getInstance;
  _.$_$.f3 = SVGStrokeType_CurrentColor_getInstance;
  _.$_$.g3 = SVGStrokeType_None_getInstance;
  _.$_$.h3 = ComparableAttrsScope_init_$Create$;
  _.$_$.i3 = CSSTransition_init_$Create$;
  _.$_$.j3 = _SvgId___init__impl__pmt7ru;
  _.$_$.k3 = Companion_getInstance_12;
  _.$_$.l3 = Companion_getInstance_33;
  _.$_$.m3 = Companion_getInstance_15;
  _.$_$.n3 = Companion_getInstance_17;
  _.$_$.o3 = Companion_getInstance_16;
  _.$_$.p3 = Companion_getInstance_3;
  _.$_$.q3 = Companion_getInstance_4;
  _.$_$.r3 = Companion_getInstance_21;
  _.$_$.s3 = Companion_getInstance_23;
  _.$_$.t3 = Companion_getInstance_24;
  _.$_$.u3 = Companion_getInstance_25;
  _.$_$.v3 = Companion_getInstance_26;
  _.$_$.w3 = Companion_getInstance_27;
  _.$_$.x3 = Companion_getInstance_28;
  _.$_$.y3 = Companion_getInstance_29;
  _.$_$.z3 = Companion_getInstance_32;
  _.$_$.a4 = Companion_getInstance_34;
  _.$_$.b4 = Companion_getInstance_30;
  _.$_$.c4 = Companion_getInstance_20;
  _.$_$.d4 = Companion_getInstance_35;
  _.$_$.e4 = Companion_getInstance_31;
  _.$_$.f4 = Companion_getInstance_43;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-compose-html-ext.js.map
