(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kobweb-frontend-compose-html-ext.js', './html-html-core.js', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-compose.js', './compose-multiplatform-core-runtime.js', './kobweb-frontend-silk-foundation.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kobweb-frontend-compose-html-ext.js'), require('./html-html-core.js'), require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./compose-multiplatform-core-runtime.js'), require('./kobweb-frontend-silk-foundation.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'));
  else {
    if (typeof this['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    root['kobweb-frontend-silk-widgets'] = factory(typeof this['kobweb-frontend-silk-widgets'] === 'undefined' ? {} : this['kobweb-frontend-silk-widgets'], this['kobweb-frontend-compose-html-ext'], this['html-html-core'], this['kotlin-kotlin-stdlib'], this['kobweb-frontend-kobweb-compose'], this['compose-multiplatform-core-runtime'], this['kobweb-frontend-silk-foundation'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat);
  }
}(this, function (_, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_org_jetbrains_compose_html_html_core, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat) {
  'use strict';
  //region block: imports
  var StyleVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k;
  var StyleVariable_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.w2;
  var StyleVariable_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j;
  var protoOf = kotlin_kotlin.$_$.i6;
  var objectMeta = kotlin_kotlin.$_$.h6;
  var setMetadataFor = kotlin_kotlin.$_$.j6;
  var Unit_instance = kotlin_kotlin.$_$.y1;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j4;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e1;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var borderBottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var tabIndex = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x2;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var get_ariaDisabled = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u;
  var not = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w;
  var get_active = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k;
  var Companion_instance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g3;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a1;
  var Companion_instance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f3;
  var listOf = kotlin_kotlin.$_$.t3;
  var transition = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b3;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var Companion_instance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v3;
  var userSelect = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f3;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.r1;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l2;
  var calc = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b;
  var VOID = kotlin_kotlin.$_$.c;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x1;
  var flexGrow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f1;
  var overflow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h2;
  var Companion_instance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o3;
  var KProperty0 = kotlin_kotlin.$_$.s6;
  var getPropertyCallableRef = kotlin_kotlin.$_$.u5;
  var KProperty1 = kotlin_kotlin.$_$.t6;
  var ComponentStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j;
  var Companion_instance_5 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x1;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q;
  var ComponentStyle$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i;
  var ButtonType_Button_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.a;
  var toModifier$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z;
  var thenIf = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m3;
  var ensureNotNull = kotlin_kotlin.$_$.p8;
  var Companion_instance_6 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.y1;
  var get_isBright = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f;
  var ColorMode_DARK_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u1;
  var ColorMode_LIGHT_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.v1;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j1;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var THROW_CCE = kotlin_kotlin.$_$.i8;
  var onClick = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d2;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n3;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var Button$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.i3;
  var get_focusVisible = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s1;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p1;
  var minWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a2;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i1;
  var Companion_instance_7 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i3;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j1;
  var Companion_instance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y3;
  var whiteSpace = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i3;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var Companion_instance_9 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w3;
  var verticalAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g3;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u;
  var CSSTransition_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d3;
  var Colors_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v3;
  var outline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f2;
  var boxShadow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w;
  var type = kotlin_org_jetbrains_compose_html_html_core.$_$.t;
  var registerRefScope$composable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q2;
  var Center_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q3;
  var CenterVertically_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b4;
  var Row$composable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var gap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var opacity = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e2;
  var size = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w2;
  var border_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t;
  var transition_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c3;
  var rowClasses = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e;
  var Keyframes = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l;
  var addVariant = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m;
  var StyleVariable_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i;
  var paddingInline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j2;
  var get_placeholder = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l3;
  var get_ariaInvalid = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o;
  var get_disabled = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v1;
  var RectF_init_$Create$ = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w1;
  var clip = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m1;
  var overflow_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i2;
  var Companion_instance_10 = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var position = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p2;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j3;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z1;
  var Companion_instance_11 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e3;
  var boxSizing = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x;
  var translateX = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d3;
  var ariaHidden = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j;
  var Companion_instance_12 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z3;
  var get_em = kotlin_org_jetbrains_compose_html_html_core.$_$.t1;
  var Svg$composable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n2;
  var classMeta = kotlin_kotlin.$_$.n5;
  var Path$composable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k2;
  var Polyline$composable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l2;
  var to = kotlin_kotlin.$_$.z8;
  var Circle$composable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h2;
  var Line$composable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j2;
  var Rect$composable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m2;
  var Group$composable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i2;
  var SVGStrokeLineJoin_Round_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z2;
  var SVGStrokeLineCap_Round_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y2;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.r8;
  var SVGStrokeType_CurrentColor_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a3;
  var SVGFillType_None_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x2;
  var SVGFillType_CurrentColor_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w2;
  var SVGStrokeType_None_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b3;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.u2;
  var Hr$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.r3;
  var borderTop = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s;
  var borderLeft = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p;
  var Breakpoint_ZERO_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t1;
  var getValue = kotlin_kotlin.$_$.i3;
  var setVariable_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u2;
  var Breakpoint_SM_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r1;
  var Breakpoint_MD_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q1;
  var Breakpoint_LG_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p1;
  var Breakpoint_XL_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s1;
  var Div$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.k3;
  var ResponsiveValues = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h;
  var Companion_instance_13 = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b1;
  var get_fr = kotlin_org_jetbrains_compose_html_html_core.$_$.a2;
  var gridTemplateColumns = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n1;
  var get_entries = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.v2;
  var mapCapacity = kotlin_kotlin.$_$.u3;
  var coerceAtLeast = kotlin_kotlin.$_$.l6;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  var NumberValue = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h;
  var TopStart_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h4;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var refScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p2;
  var Box$composable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var KMutableProperty0 = kotlin_kotlin.$_$.q6;
  var THROW_ISE = kotlin_kotlin.$_$.k8;
  var getLocalDelegateReference = kotlin_kotlin.$_$.s5;
  var CoroutineImpl = kotlin_kotlin.$_$.d5;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var isInterface = kotlin_kotlin.$_$.b6;
  var LaunchedEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e;
  var TopCenter_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f4;
  var deferRender$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c1;
  var top = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a3;
  var bottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v;
  var left = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r1;
  var right = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var unaryMinus = kotlin_org_jetbrains_compose_html_html_core.$_$.c3;
  var margin_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u1;
  var base_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r;
  var ariaDisabled = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i;
  var base$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.r2;
  var ColorSchemes_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z1;
  var lightened = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g;
  var registerKeyframes = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b;
  var suffixedWith = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l1;
  var removeClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.b;
  var addClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.a;
  var ColorGroup = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h1;
  var MutablePalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i1;
  var KMutableProperty1 = kotlin_kotlin.$_$.r6;
  //endregion
  //region block: pre-declaration
  setMetadataFor(TabVars, 'TabVars', objectMeta);
  setMetadataFor(ButtonVars, 'ButtonVars', objectMeta);
  setMetadataFor(MD, 'MD', objectMeta);
  setMetadataFor(CheckboxVars, 'CheckboxVars', objectMeta);
  setMetadataFor(InputVars, 'InputVars', objectMeta);
  setMetadataFor(SwitchVars, 'SwitchVars', objectMeta);
  setMetadataFor(Fill, 'Fill', classMeta);
  setMetadataFor(Stroke, 'Stroke', classMeta, VOID, VOID, Stroke);
  setMetadataFor(ComposableSingletons$IconsKt, 'ComposableSingletons$IconsKt', objectMeta);
  setMetadataFor(DividerVars, 'DividerVars', objectMeta);
  setMetadataFor(SurfaceVars, 'SurfaceVars', objectMeta);
  setMetadataFor(Surface$composable$lambda$lambda$slambda, 'Surface$composable$lambda$lambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(OverlayVars, 'OverlayVars', objectMeta);
  setMetadataFor(ComposableSingletons$OverlayKt, 'ComposableSingletons$OverlayKt', objectMeta);
  setMetadataFor(PopupVars, 'PopupVars', objectMeta);
  setMetadataFor(TooltipVars, 'TooltipVars', objectMeta);
  setMetadataFor(TransitionDurationVars, 'TransitionDurationVars', objectMeta);
  setMetadataFor(FontSizeVars, 'FontSizeVars', objectMeta);
  setMetadataFor(MutableButton, 'MutableButton', classMeta, ColorGroup);
  setMetadataFor(MutableCheckbox, 'MutableCheckbox', classMeta, ColorGroup);
  setMetadataFor(MutableInput, 'MutableInput', classMeta, ColorGroup);
  setMetadataFor(MutableSwitch, 'MutableSwitch', classMeta, ColorGroup);
  setMetadataFor(MutableTab, 'MutableTab', classMeta, ColorGroup);
  setMetadataFor(MutableTooltip, 'MutableTooltip', classMeta, ColorGroup);
  //endregion
  function get_TabsStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsStyle$delegate.g2a(null, TabsStyle$factory());
  }
  var TabsStyle$delegate;
  function get_TabsTabRowStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsTabRowStyle$delegate.g2a(null, TabsTabRowStyle$factory());
  }
  var TabsTabRowStyle$delegate;
  function get_TabsTabStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsTabStyle$delegate.g2a(null, TabsTabStyle$factory());
  }
  var TabsTabStyle$delegate;
  function get_TabsPanelStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsPanelStyle$delegate.g2a(null, TabsPanelStyle$factory());
  }
  var TabsPanelStyle$delegate;
  function TabVars() {
    TabVars_instance = this;
    this.x38_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().x29();
    tmp.y38_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.z38_1 = StyleVariable('silk');
    this.a39_1 = StyleVariable('silk');
    this.b39_1 = StyleVariable('silk');
    this.c39_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_px(2);
    tmp_0.d39_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().j24().x29();
    tmp_1.e39_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    this.f39_1 = 0;
  }
  protoOf(TabVars).p39 = function () {
    return this.x38_1.g2a(this, Color$factory());
  };
  protoOf(TabVars).q39 = function () {
    return this.y38_1.g2a(this, BorderColor$factory());
  };
  protoOf(TabVars).r39 = function () {
    return this.z38_1.g2a(this, BackgroundColor$factory());
  };
  protoOf(TabVars).s39 = function () {
    return this.a39_1.g2a(this, DisabledBackgroundColor$factory());
  };
  protoOf(TabVars).t39 = function () {
    return this.b39_1.g2a(this, HoverBackgroundColor$factory());
  };
  protoOf(TabVars).u39 = function () {
    return this.c39_1.g2a(this, PressedBackgroundColor$factory());
  };
  protoOf(TabVars).v39 = function () {
    return this.d39_1.g2a(this, BorderThickness$factory());
  };
  protoOf(TabVars).w39 = function () {
    return this.e39_1.g2a(this, ColorTransitionDuration$factory());
  };
  var TabVars_instance;
  function TabVars_getInstance() {
    if (TabVars_instance == null)
      new TabVars();
    return TabVars_instance;
  }
  function TabsStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Tabs_kt__myintq();
    return Unit_instance;
  }
  function TabsTabRowStyle$delegate$lambda($this$base) {
    _init_properties_Tabs_kt__myintq();
    var tmp = fillMaxWidth(Companion_instance);
    var tmp_0 = TabVars_getInstance().v39().x29();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp, tmp_0, 'solid', TabVars_getInstance().q39().x29());
  }
  function TabsTabStyle$delegate$lambda($composer, $changed) {
    _init_properties_Tabs_kt__myintq();
    var $composer_0 = $composer;
    $composer_0.mu(-900500012);
    if (isTraceInProgress()) {
      traceEventStart(-900500012, $changed, -1, 'com.varabyte.kobweb.silk.components.disclosure.TabsTabStyle$delegate.<anonymous> (Tabs.kt:52)');
    }
    var tmp0 = tabIndex(Companion_instance, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.nu();
    return tmp0;
  }
  function TabsTabStyle$delegate$lambda_0($this$ComponentStyle) {
    _init_properties_Tabs_kt__myintq();
    $this$ComponentStyle.o2r(TabsTabStyle$delegate$lambda$lambda);
    var tmp = get_ariaDisabled($this$ComponentStyle);
    tmp.f2t(TabsTabStyle$delegate$lambda$lambda_0);
    var tmp_0 = get_hover($this$ComponentStyle).u2t(not($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp_0.f2t(TabsTabStyle$delegate$lambda$lambda_1);
    var tmp_1 = get_active($this$ComponentStyle).u2t(not($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp_1.f2t(TabsTabStyle$delegate$lambda$lambda_2);
    return Unit_instance;
  }
  function TabsTabStyle$delegate$lambda$lambda() {
    _init_properties_Tabs_kt__myintq();
    var tmp = padding(userSelect(color(backgroundColor(transition(cursor(Companion_instance, Companion_instance_1.a25()), Companion_instance_2.w2a(listOf(['background-color', 'color', 'border-color']), TabVars_getInstance().w39().x29()).slice()), TabVars_getInstance().r39().x29()), TabVars_getInstance().p39().x29()), Companion_instance_3.p28()), get_cssRem(0.5));
    var tmp_0 = margin(tmp, VOID, VOID, calc(TabsTabStyle$delegate$lambda$lambda$lambda));
    var tmp_1 = TabVars_getInstance().v39().x29();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp_0, tmp_1, 'solid', TabVars_getInstance().q39().x29());
  }
  function TabsTabStyle$delegate$lambda$lambda$lambda($this$calc) {
    _init_properties_Tabs_kt__myintq();
    return $this$calc.l2b(TabVars_getInstance().v39().x29());
  }
  function TabsTabStyle$delegate$lambda$lambda_0() {
    _init_properties_Tabs_kt__myintq();
    return cursor(backgroundColor(Companion_instance, TabVars_getInstance().s39().x29()), Companion_instance_1.b25());
  }
  function TabsTabStyle$delegate$lambda$lambda_1() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_instance, TabVars_getInstance().t39().x29());
  }
  function TabsTabStyle$delegate$lambda$lambda_2() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_instance, TabVars_getInstance().u39().x29());
  }
  function TabsPanelStyle$delegate$lambda($this$base) {
    _init_properties_Tabs_kt__myintq();
    var tmp = flexGrow(fillMaxWidth(padding(Companion_instance, get_cssRem(1))), 1);
    return overflow(tmp, TabsPanelStyle$delegate$lambda$lambda);
  }
  function TabsPanelStyle$delegate$lambda$lambda($this$overflow) {
    _init_properties_Tabs_kt__myintq();
    $this$overflow.s2o(Companion_instance_4.c29());
    return Unit_instance;
  }
  function TabsStyle$factory() {
    return getPropertyCallableRef('TabsStyle', 0, KProperty0, function () {
      return get_TabsStyle();
    }, null);
  }
  function TabsTabRowStyle$factory() {
    return getPropertyCallableRef('TabsTabRowStyle', 0, KProperty0, function () {
      return get_TabsTabRowStyle();
    }, null);
  }
  function TabsTabStyle$factory() {
    return getPropertyCallableRef('TabsTabStyle', 0, KProperty0, function () {
      return get_TabsTabStyle();
    }, null);
  }
  function TabsPanelStyle$factory() {
    return getPropertyCallableRef('TabsPanelStyle', 0, KProperty0, function () {
      return get_TabsPanelStyle();
    }, null);
  }
  function Color$factory() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.p39();
    }, null);
  }
  function BorderColor$factory() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.q39();
    }, null);
  }
  function BackgroundColor$factory() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.r39();
    }, null);
  }
  function DisabledBackgroundColor$factory() {
    return getPropertyCallableRef('DisabledBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.s39();
    }, null);
  }
  function HoverBackgroundColor$factory() {
    return getPropertyCallableRef('HoverBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.t39();
    }, null);
  }
  function PressedBackgroundColor$factory() {
    return getPropertyCallableRef('PressedBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.u39();
    }, null);
  }
  function BorderThickness$factory() {
    return getPropertyCallableRef('BorderThickness', 1, KProperty1, function (receiver) {
      return receiver.v39();
    }, null);
  }
  function ColorTransitionDuration$factory() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.w39();
    }, null);
  }
  var properties_initialized_Tabs_kt_moodfk;
  function _init_properties_Tabs_kt__myintq() {
    if (!properties_initialized_Tabs_kt_moodfk) {
      properties_initialized_Tabs_kt_moodfk = true;
      TabsStyle$delegate = ComponentStyle(VOID, 'silk', TabsStyle$delegate$lambda);
      var tmp = Companion_instance_5;
      TabsTabRowStyle$delegate = base(tmp, VOID, 'silk', TabsTabRowStyle$delegate$lambda);
      var tmp_0 = TabsTabStyle$delegate$lambda;
      TabsTabStyle$delegate = ComponentStyle$composable(tmp_0, 'silk', TabsTabStyle$delegate$lambda_0);
      var tmp_1 = Companion_instance_5;
      TabsPanelStyle$delegate = base(tmp_1, VOID, 'silk', TabsPanelStyle$delegate$lambda);
    }
  }
  function get_ButtonStyle() {
    _init_properties_Button_kt__2845m6();
    return ButtonStyle$delegate.g2a(null, ButtonStyle$factory());
  }
  var ButtonStyle$delegate;
  function ButtonVars() {
    ButtonVars_instance = this;
    this.x39_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_FocusOutlineColorVar().x29();
    tmp.y39_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.z39_1 = StyleVariable('silk');
    this.a3a_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ColorVar().x29();
    tmp_0.b3a_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().j24().x29();
    tmp_1.c3a_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    this.d3a_1 = StyleVariable('silk');
    this.e3a_1 = StyleVariable('silk');
    this.f3a_1 = StyleVariable('silk');
    this.g3a_1 = 0;
  }
  protoOf(ButtonVars).h3a = function () {
    return this.x39_1.g2a(this, BackgroundDefaultColor$factory());
  };
  protoOf(ButtonVars).i3a = function () {
    return this.y39_1.g2a(this, BackgroundFocusColor$factory());
  };
  protoOf(ButtonVars).j3a = function () {
    return this.z39_1.g2a(this, BackgroundHoverColor$factory());
  };
  protoOf(ButtonVars).k3a = function () {
    return this.a3a_1.g2a(this, BackgroundPressedColor$factory());
  };
  protoOf(ButtonVars).p39 = function () {
    return this.b3a_1.g2a(this, Color$factory_0());
  };
  protoOf(ButtonVars).w39 = function () {
    return this.c3a_1.g2a(this, ColorTransitionDuration$factory_0());
  };
  protoOf(ButtonVars).l3a = function () {
    return this.d3a_1.g2a(this, FontSize$factory());
  };
  protoOf(ButtonVars).m3a = function () {
    return this.e3a_1.g2a(this, Height$factory());
  };
  protoOf(ButtonVars).n3a = function () {
    return this.f3a_1.g2a(this, PaddingHorizontal$factory());
  };
  var ButtonVars_instance;
  function ButtonVars_getInstance() {
    if (ButtonVars_instance == null)
      new ButtonVars();
    return ButtonVars_instance;
  }
  function MD() {
    MD_instance = this;
    this.o3a_1 = FontSizeVars_getInstance().x3a().x29();
    this.p3a_1 = get_cssRem(2.5);
    this.q3a_1 = get_cssRem(1);
    this.r3a_1 = 0;
  }
  protoOf(MD).y3a = function () {
    return this.o3a_1;
  };
  protoOf(MD).z3a = function () {
    return this.p3a_1;
  };
  protoOf(MD).a3b = function () {
    return this.q3a_1;
  };
  var MD_instance;
  function MD_getInstance() {
    if (MD_instance == null)
      new MD();
    return MD_instance;
  }
  function Button$composable_0(onClick_0, modifier, variant, type, enabled, size, colorScheme, focusBorderColor, ref, content, $composer, $changed, $default) {
    _init_properties_Button_kt__2845m6();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var type_0 = {_v: type};
    var enabled_0 = {_v: enabled};
    var size_0 = {_v: size};
    var colorScheme_0 = {_v: colorScheme};
    var focusBorderColor_0 = {_v: focusBorderColor};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(1964405122);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.iv(onClick_0) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.fv(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.fv(variant_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.fv(type_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.gv(enabled_0._v) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ((($default & 32) === 0 ? $composer_0.fv(size_0._v) : false) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.fv(colorScheme_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.fv(focusBorderColor_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.fv(ref_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 1879048192) === 0)
      $dirty = $dirty | ($composer_0.iv(content) ? 536870912 : 268435456);
    if (!(($dirty & 1533916891) === 306783378) ? true : !$composer_0.ju()) {
      $composer_0.qu();
      if (($changed & 1) === 0 ? true : $composer_0.ku()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 4) === 0)) {
          variant_0._v = null;
        }
        if (!(($default & 8) === 0)) {
          type_0._v = ButtonType_Button_getInstance();
        }
        if (!(($default & 16) === 0)) {
          enabled_0._v = true;
        }
        if (!(($default & 32) === 0)) {
          size_0._v = MD_getInstance();
          $dirty = $dirty & -458753;
        }
        if (!(($default & 64) === 0)) {
          colorScheme_0._v = null;
        }
        if (!(($default & 128) === 0)) {
          focusBorderColor_0._v = null;
        }
        if (!(($default & 256) === 0)) {
          ref_0._v = null;
        }
      } else {
        $composer_0.xu();
        if (!(($default & 32) === 0))
          $dirty = $dirty & -458753;
      }
      $composer_0.ru();
      if (isTraceInProgress()) {
        traceEventStart(1964405122, $dirty, -1, 'com.varabyte.kobweb.silk.components.forms.Button$composable (Button.kt:147)');
      }
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var this_0 = thenIf(toModifier$composable(get_ButtonStyle(), [variant_0._v], $composer_0, 0), !enabled_0._v, toModifier$composable(get_DisabledStyle(), [], $composer_0, 64)).s2m(toModifier(size_0._v));
      var tmp;
      if (!(colorScheme_0._v == null)) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms.Button$composable.<anonymous>' call
        var colorScheme_1 = ensureNotNull(colorScheme_0._v);
        var isDark = Companion_instance_6.t2p($composer_0, 6).z2w();
        var isBrightColor = get_isBright(isDark ? colorScheme_1.l2x() : colorScheme_1.o2x());
        tmp = setVariable(setVariable(setVariable(setVariable(Companion_instance, ButtonVars_getInstance().p39(), get_color(toPalette(isBrightColor ? ColorMode_LIGHT_getInstance() : ColorMode_DARK_getInstance()))), ButtonVars_getInstance().h3a(), isDark ? colorScheme_1.l2x() : colorScheme_1.o2x()), ButtonVars_getInstance().j3a(), isDark ? colorScheme_1.m2x() : colorScheme_1.p2x()), ButtonVars_getInstance().k3a(), isDark ? colorScheme_1.n2x() : colorScheme_1.q2x());
      } else {
        tmp = Companion_instance;
      }
      var tmp0_group = this_0.s2m(tmp);
      var this_1 = setVariable(tmp0_group, ButtonVars_getInstance().i3a(), focusBorderColor_0._v).s2m(modifier_0._v);
      var tmp_0;
      if (enabled_0._v) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms.Button$composable.<anonymous>' call
        var tmp_1 = Companion_instance;
        $composer_0.mu(395462072);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_2 = $composer_0;
        var invalid = $composer_0.iv(onClick_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = this_2.dv();
        var tmp_2;
        if (invalid ? true : it === Companion_getInstance().gu_1) {
          // Inline function 'com.varabyte.kobweb.silk.components.forms.Button$composable.<anonymous>.<anonymous>' call
          var value = Button$composable$lambda(onClick_0);
          this_2.ev(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmpCache = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_0.nu();
        tmp_0 = onClick(tmp_1, tmpCache);
      } else {
        tmp_0 = Companion_instance;
      }
      var tmp_4 = this_1.s2m(tmp_0);
      $composer_0.mu(395462221);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_3 = $composer_0;
      var invalid_0 = $composer_0.fv(type_0._v);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_3.dv();
      var tmp_5;
      if (invalid_0 ? true : it_0 === Companion_getInstance().gu_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms.Button$composable.<anonymous>' call
        var value_0 = Button$composable$lambda_0(type_0);
        this_3.ev(value_0);
        tmp_5 = value_0;
      } else {
        tmp_5 = it_0;
      }
      var tmp_6 = tmp_5;
      var tmpCache_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_0.nu();
      var tmp_7 = toAttrs(tmp_4, tmpCache_0);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.forms.Button$composable.<anonymous>' call
      var tmp_8 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_8, 580157781, true, Button$composable$lambda_1(ref_0, content));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.mu(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_1.fv(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.dv();
      var tmp_9;
      if (invalid_1 ? true : it_1 === Companion_getInstance().gu_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms.Button$composable.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.ev(value_1);
        tmp_9 = value_1;
      } else {
        tmp_9 = it_1;
      }
      var tmp_10 = tmp_9;
      var tmp0 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      $composer_1.nu();
      Button$composable(tmp_7, tmp0, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    var tmp1_safe_receiver = $composer_0.tu();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.s19(Button$composable$lambda_2(onClick_0, modifier_0, variant_0, type_0, enabled_0, size_0, colorScheme_0, focusBorderColor_0, ref_0, content, $changed, $default));
    }
  }
  function toModifier(_this__u8e3s4) {
    _init_properties_Button_kt__2845m6();
    return setVariable(setVariable(setVariable(Companion_instance, ButtonVars_getInstance().l3a(), _this__u8e3s4.y3a()), ButtonVars_getInstance().m3a(), _this__u8e3s4.z3a()), ButtonVars_getInstance().n3a(), _this__u8e3s4.a3b());
  }
  function ButtonStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Button_kt__2845m6();
    $this$ComponentStyle.o2r(ButtonStyle$delegate$lambda$lambda);
    var tmp = get_hover($this$ComponentStyle).u2t(not($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp.f2t(ButtonStyle$delegate$lambda$lambda_0);
    var tmp_0 = get_focusVisible($this$ComponentStyle).u2t(not($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp_0.f2t(ButtonStyle$delegate$lambda$lambda_1);
    var tmp_1 = get_active($this$ComponentStyle).u2t(not($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp_1.f2t(ButtonStyle$delegate$lambda$lambda_2);
    return Unit_instance;
  }
  function ButtonStyle$delegate$lambda$lambda() {
    _init_properties_Button_kt__2845m6();
    var tmp = borderRadius(verticalAlign(padding_0(whiteSpace(fontWeight(fontSize(minWidth(height(lineHeight(backgroundColor(color(Companion_instance, ButtonVars_getInstance().p39().x29()), ButtonVars_getInstance().h3a().x29()), 1.2), ButtonVars_getInstance().m3a().x29()), ButtonVars_getInstance().m3a().x29()), ButtonVars_getInstance().l3a().x29()), Companion_instance_7.f25()), Companion_instance_8.m2a()), VOID, ButtonVars_getInstance().n3a().x29()), Companion_instance_9.m28()), get_cssRem(0.375));
    return transition(userSelect(border(tmp, ButtonStyle$delegate$lambda$lambda$lambda), Companion_instance_3.p28()), [CSSTransition_init_$Create$('background-color', ButtonVars_getInstance().w39().x29())]);
  }
  function ButtonStyle$delegate$lambda$lambda$lambda($this$border) {
    _init_properties_Button_kt__2845m6();
    $this$border.o2o(get_px(0));
    return Unit_instance;
  }
  function ButtonStyle$delegate$lambda$lambda_0() {
    _init_properties_Button_kt__2845m6();
    return cursor(backgroundColor(Companion_instance, ButtonVars_getInstance().j3a().x29()), Companion_instance_1.a25());
  }
  function ButtonStyle$delegate$lambda$lambda_1() {
    _init_properties_Button_kt__2845m6();
    var tmp = Companion_instance;
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow(outline(tmp, tmp_0, 'solid', Colors_instance.u2n()), VOID, VOID, VOID, get_cssRem(0.1875), ButtonVars_getInstance().i3a().x29());
  }
  function ButtonStyle$delegate$lambda$lambda_2() {
    _init_properties_Button_kt__2845m6();
    return backgroundColor(Companion_instance, ButtonVars_getInstance().k3a().x29());
  }
  function Button$composable$lambda($onClick) {
    return function (evt) {
      $onClick(evt);
      evt.x21();
      return Unit_instance;
    };
  }
  function Button$composable$lambda_0($type) {
    return function ($this$toAttrs) {
      type($this$toAttrs, $type._v);
      return Unit_instance;
    };
  }
  function Button$composable$lambda_1($ref, $content) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.fv($this$Button) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
        if (isTraceInProgress()) {
          traceEventStart(580157781, $dirty, -1, 'com.varabyte.kobweb.silk.components.forms.Button$composable.<anonymous> (Button.kt:176)');
        }
        registerRefScope$composable($this$Button, $ref._v, $composer_0, 14 & $dirty);
        var tmp_1 = Center_instance;
        var tmp_2 = CenterVertically_instance;
        Row$composable(null, tmp_1, tmp_2, null, $content, $composer_0, 432, 9);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_instance;
        }
        tmp_0 = tmp_3;
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
  function Button$composable$lambda_2($onClick, $modifier, $variant, $type, $enabled, $size, $colorScheme, $focusBorderColor, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Button$composable_0($onClick, $modifier._v, $variant._v, $type._v, $enabled._v, $size._v, $colorScheme._v, $focusBorderColor._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function ButtonStyle$factory() {
    return getPropertyCallableRef('ButtonStyle', 0, KProperty0, function () {
      return get_ButtonStyle();
    }, null);
  }
  function BackgroundDefaultColor$factory() {
    return getPropertyCallableRef('BackgroundDefaultColor', 1, KProperty1, function (receiver) {
      return receiver.h3a();
    }, null);
  }
  function BackgroundFocusColor$factory() {
    return getPropertyCallableRef('BackgroundFocusColor', 1, KProperty1, function (receiver) {
      return receiver.i3a();
    }, null);
  }
  function BackgroundHoverColor$factory() {
    return getPropertyCallableRef('BackgroundHoverColor', 1, KProperty1, function (receiver) {
      return receiver.j3a();
    }, null);
  }
  function BackgroundPressedColor$factory() {
    return getPropertyCallableRef('BackgroundPressedColor', 1, KProperty1, function (receiver) {
      return receiver.k3a();
    }, null);
  }
  function Color$factory_0() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.p39();
    }, null);
  }
  function ColorTransitionDuration$factory_0() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.w39();
    }, null);
  }
  function FontSize$factory() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.l3a();
    }, null);
  }
  function Height$factory() {
    return getPropertyCallableRef('Height', 1, KProperty1, function (receiver) {
      return receiver.m3a();
    }, null);
  }
  function PaddingHorizontal$factory() {
    return getPropertyCallableRef('PaddingHorizontal', 1, KProperty1, function (receiver) {
      return receiver.n3a();
    }, null);
  }
  var properties_initialized_Button_kt_yov184;
  function _init_properties_Button_kt__2845m6() {
    if (!properties_initialized_Button_kt_yov184) {
      properties_initialized_Button_kt_yov184 = true;
      ButtonStyle$delegate = ComponentStyle(VOID, 'silk', ButtonStyle$delegate$lambda);
    }
  }
  function get_CheckboxStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxStyle$delegate.g2a(null, CheckboxStyle$factory());
  }
  var CheckboxStyle$delegate;
  function get_CheckboxEnabledAnim() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxEnabledAnim$delegate.g2a(null, CheckboxEnabledAnim$factory());
  }
  var CheckboxEnabledAnim$delegate;
  function get_CheckboxIconContainerStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxIconContainerStyle$delegate.g2a(null, CheckboxIconContainerStyle$factory());
  }
  var CheckboxIconContainerStyle$delegate;
  function get_UncheckedCheckboxIconContainerVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return UncheckedCheckboxIconContainerVariant$delegate.g2a(null, UncheckedCheckboxIconContainerVariant$factory());
  }
  var UncheckedCheckboxIconContainerVariant$delegate;
  function get_CheckedCheckboxIconContainerVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckedCheckboxIconContainerVariant$delegate.g2a(null, CheckedCheckboxIconContainerVariant$factory());
  }
  var CheckedCheckboxIconContainerVariant$delegate;
  function get_CheckboxIconStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxIconStyle$delegate.g2a(null, CheckboxIconStyle$factory());
  }
  var CheckboxIconStyle$delegate;
  function get_CheckboxInputVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxInputVariant$delegate.g2a(null, CheckboxInputVariant$factory());
  }
  var CheckboxInputVariant$delegate;
  function CheckboxVars() {
    CheckboxVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().x29();
    tmp.b3b_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.125);
    tmp_0.c3b_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(0.125);
    tmp_1.d3b_1 = StyleVariable_0(tmp0_defaultFallback_1, 'silk');
    this.e3b_1 = StyleVariable('silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(0.5);
    tmp_2.f3b_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
    this.g3b_1 = StyleVariable('silk');
    this.h3b_1 = StyleVariable('silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_FocusOutlineColorVar().x29();
    tmp_3.i3b_1 = StyleVariable_0(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_cssRem(0.1875);
    tmp_4.j3b_1 = StyleVariable_0(tmp0_defaultFallback_4, 'silk');
    this.k3b_1 = StyleVariable('silk');
    this.l3b_1 = StyleVariable('silk');
    this.m3b_1 = StyleVariable('silk');
    this.n3b_1 = StyleVariable('silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = TransitionDurationVars_getInstance().q3b().x29();
    tmp_5.o3b_1 = StyleVariable_1(tmp0_defaultFallback_5, 'silk');
    this.p3b_1 = 0;
  }
  protoOf(CheckboxVars).q39 = function () {
    return this.b3b_1.g2a(this, BorderColor$factory_0());
  };
  protoOf(CheckboxVars).r3b = function () {
    return this.c3b_1.g2a(this, BorderRadius$factory());
  };
  protoOf(CheckboxVars).s3b = function () {
    return this.d3b_1.g2a(this, BorderWidth$factory());
  };
  protoOf(CheckboxVars).t3b = function () {
    return this.e3b_1.g2a(this, Size$factory());
  };
  protoOf(CheckboxVars).u3b = function () {
    return this.f3b_1.g2a(this, Spacing$factory());
  };
  protoOf(CheckboxVars).l3a = function () {
    return this.g3b_1.g2a(this, FontSize$factory_0());
  };
  protoOf(CheckboxVars).v3b = function () {
    return this.h3b_1.g2a(this, IconSize$factory());
  };
  protoOf(CheckboxVars).w3b = function () {
    return this.i3b_1.g2a(this, FocusOutlineColor$factory());
  };
  protoOf(CheckboxVars).x3b = function () {
    return this.j3b_1.g2a(this, FocusOutlineSpread$factory());
  };
  protoOf(CheckboxVars).y3b = function () {
    return this.k3b_1.g2a(this, UncheckedBackgroundColor$factory());
  };
  protoOf(CheckboxVars).z3b = function () {
    return this.l3b_1.g2a(this, IconColor$factory());
  };
  protoOf(CheckboxVars).a3c = function () {
    return this.m3b_1.g2a(this, IconBackgroundColor$factory());
  };
  protoOf(CheckboxVars).b3c = function () {
    return this.n3b_1.g2a(this, IconBackgroundHoverColor$factory());
  };
  protoOf(CheckboxVars).c3c = function () {
    return this.o3b_1.g2a(this, TransitionDuration$factory());
  };
  var CheckboxVars_instance;
  function CheckboxVars_getInstance() {
    if (CheckboxVars_instance == null)
      new CheckboxVars();
    return CheckboxVars_instance;
  }
  function CheckboxStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$ComponentStyle.o2r(CheckboxStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function CheckboxStyle$delegate$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return cursor(fontSize(userSelect(gap(Companion_instance, CheckboxVars_getInstance().u3b().x29()), Companion_instance_3.p28()), CheckboxVars_getInstance().l3a().x29()), Companion_instance_1.a25());
  }
  function CheckboxEnabledAnim$delegate$lambda($this$Keyframes) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$Keyframes.b2p(CheckboxEnabledAnim$delegate$lambda$lambda);
    $this$Keyframes.c2p(CheckboxEnabledAnim$delegate$lambda$lambda_0);
    return Unit_instance;
  }
  function CheckboxEnabledAnim$delegate$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return opacity(Companion_instance, 0);
  }
  function CheckboxEnabledAnim$delegate$lambda$lambda_0() {
    _init_properties_Checkbox_kt__x46qhp();
    return opacity(Companion_instance, 1);
  }
  function CheckboxIconContainerStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$ComponentStyle.o2r(CheckboxIconContainerStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function CheckboxIconContainerStyle$delegate$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = size(fontSize(Companion_instance, CheckboxVars_getInstance().v3b().x29()), CheckboxVars_getInstance().t3b().x29());
    var tmp_0 = CheckboxVars_getInstance().s3b().x29();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition_0(borderRadius(border_0(tmp, tmp_0, 'solid', CheckboxVars_getInstance().q39().x29()), CheckboxVars_getInstance().r3b().x29()), Companion_instance_2.w2a(listOf(['background-color', 'border-color']), CheckboxVars_getInstance().c3c().x29()));
  }
  function UncheckedCheckboxIconContainerVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Checkbox_kt__x46qhp();
    return backgroundColor(Companion_instance, CheckboxVars_getInstance().y3b().x29());
  }
  function CheckedCheckboxIconContainerVariant$delegate$lambda($this$addVariant) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$addVariant.o2r(CheckedCheckboxIconContainerVariant$delegate$lambda$lambda);
    return Unit_instance;
  }
  function CheckedCheckboxIconContainerVariant$delegate$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = backgroundColor(Companion_instance, CheckboxVars_getInstance().a3c().x29());
    return border(tmp, CheckedCheckboxIconContainerVariant$delegate$lambda$lambda$lambda);
  }
  function CheckedCheckboxIconContainerVariant$delegate$lambda$lambda$lambda($this$border) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$border.m2o(CheckboxVars_getInstance().a3c().x29());
    return Unit_instance;
  }
  function CheckboxIconStyle$delegate$lambda($this$base) {
    _init_properties_Checkbox_kt__x46qhp();
    return color(size(Companion_instance, CheckboxVars_getInstance().t3b().x29()), CheckboxVars_getInstance().z3b().x29());
  }
  function CheckboxInputVariant$delegate$lambda($this$addVariant) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$addVariant.o2r(CheckboxInputVariant$delegate$lambda$lambda);
    $this$addVariant.q2r(':focus-visible + *', CheckboxInputVariant$delegate$lambda$lambda_0);
    $this$addVariant.q2r(':not([aria-disabled]):hover + *', CheckboxInputVariant$delegate$lambda$lambda_1);
    return Unit_instance;
  }
  function CheckboxInputVariant$delegate$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return get_HiddenInputModifier();
  }
  function CheckboxInputVariant$delegate$lambda$lambda_0() {
    _init_properties_Checkbox_kt__x46qhp();
    return boxShadow(Companion_instance, VOID, VOID, VOID, CheckboxVars_getInstance().x3b().x29(), CheckboxVars_getInstance().w3b().x29());
  }
  function CheckboxInputVariant$delegate$lambda$lambda_1() {
    _init_properties_Checkbox_kt__x46qhp();
    return setVariable(Companion_instance, CheckboxVars_getInstance().a3c(), CheckboxVars_getInstance().b3c().x29());
  }
  function CheckboxStyle$factory() {
    return getPropertyCallableRef('CheckboxStyle', 0, KProperty0, function () {
      return get_CheckboxStyle();
    }, null);
  }
  function CheckboxEnabledAnim$factory() {
    return getPropertyCallableRef('CheckboxEnabledAnim', 0, KProperty0, function () {
      return get_CheckboxEnabledAnim();
    }, null);
  }
  function CheckboxIconContainerStyle$factory() {
    return getPropertyCallableRef('CheckboxIconContainerStyle', 0, KProperty0, function () {
      return get_CheckboxIconContainerStyle();
    }, null);
  }
  function UncheckedCheckboxIconContainerVariant$factory() {
    return getPropertyCallableRef('UncheckedCheckboxIconContainerVariant', 0, KProperty0, function () {
      return get_UncheckedCheckboxIconContainerVariant();
    }, null);
  }
  function CheckedCheckboxIconContainerVariant$factory() {
    return getPropertyCallableRef('CheckedCheckboxIconContainerVariant', 0, KProperty0, function () {
      return get_CheckedCheckboxIconContainerVariant();
    }, null);
  }
  function CheckboxIconStyle$factory() {
    return getPropertyCallableRef('CheckboxIconStyle', 0, KProperty0, function () {
      return get_CheckboxIconStyle();
    }, null);
  }
  function CheckboxInputVariant$factory() {
    return getPropertyCallableRef('CheckboxInputVariant', 0, KProperty0, function () {
      return get_CheckboxInputVariant();
    }, null);
  }
  function BorderColor$factory_0() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.q39();
    }, null);
  }
  function BorderRadius$factory() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.r3b();
    }, null);
  }
  function BorderWidth$factory() {
    return getPropertyCallableRef('BorderWidth', 1, KProperty1, function (receiver) {
      return receiver.s3b();
    }, null);
  }
  function Size$factory() {
    return getPropertyCallableRef('Size', 1, KProperty1, function (receiver) {
      return receiver.t3b();
    }, null);
  }
  function Spacing$factory() {
    return getPropertyCallableRef('Spacing', 1, KProperty1, function (receiver) {
      return receiver.u3b();
    }, null);
  }
  function FontSize$factory_0() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.l3a();
    }, null);
  }
  function IconSize$factory() {
    return getPropertyCallableRef('IconSize', 1, KProperty1, function (receiver) {
      return receiver.v3b();
    }, null);
  }
  function FocusOutlineColor$factory() {
    return getPropertyCallableRef('FocusOutlineColor', 1, KProperty1, function (receiver) {
      return receiver.w3b();
    }, null);
  }
  function FocusOutlineSpread$factory() {
    return getPropertyCallableRef('FocusOutlineSpread', 1, KProperty1, function (receiver) {
      return receiver.x3b();
    }, null);
  }
  function UncheckedBackgroundColor$factory() {
    return getPropertyCallableRef('UncheckedBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.y3b();
    }, null);
  }
  function IconColor$factory() {
    return getPropertyCallableRef('IconColor', 1, KProperty1, function (receiver) {
      return receiver.z3b();
    }, null);
  }
  function IconBackgroundColor$factory() {
    return getPropertyCallableRef('IconBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.a3c();
    }, null);
  }
  function IconBackgroundHoverColor$factory() {
    return getPropertyCallableRef('IconBackgroundHoverColor', 1, KProperty1, function (receiver) {
      return receiver.b3c();
    }, null);
  }
  function TransitionDuration$factory() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.c3c();
    }, null);
  }
  var properties_initialized_Checkbox_kt_pem0wr;
  function _init_properties_Checkbox_kt__x46qhp() {
    if (!properties_initialized_Checkbox_kt_pem0wr) {
      properties_initialized_Checkbox_kt_pem0wr = true;
      var tmp0_extraModifiers = rowClasses(Companion_instance, VOID, CenterVertically_instance);
      CheckboxStyle$delegate = ComponentStyle(tmp0_extraModifiers, 'silk', CheckboxStyle$delegate$lambda);
      CheckboxEnabledAnim$delegate = Keyframes('silk', CheckboxEnabledAnim$delegate$lambda);
      CheckboxIconContainerStyle$delegate = ComponentStyle(VOID, 'silk', CheckboxIconContainerStyle$delegate$lambda);
      var tmp = get_CheckboxIconContainerStyle();
      UncheckedCheckboxIconContainerVariant$delegate = addVariantBase(tmp, VOID, UncheckedCheckboxIconContainerVariant$delegate$lambda);
      var tmp_0 = get_CheckboxIconContainerStyle();
      CheckedCheckboxIconContainerVariant$delegate = addVariant(tmp_0, VOID, CheckedCheckboxIconContainerVariant$delegate$lambda);
      var tmp_1 = Companion_instance_5;
      CheckboxIconStyle$delegate = base(tmp_1, VOID, 'silk', CheckboxIconStyle$delegate$lambda);
      var tmp_2 = get_InputStyle();
      CheckboxInputVariant$delegate = addVariant(tmp_2, VOID, CheckboxInputVariant$delegate$lambda);
    }
  }
  function get_HiddenInputModifier() {
    _init_properties_Input_kt__b04mg8();
    return HiddenInputModifier;
  }
  var HiddenInputModifier;
  function get_InputGroupStyle() {
    _init_properties_Input_kt__b04mg8();
    return InputGroupStyle$delegate.g2a(null, InputGroupStyle$factory());
  }
  var InputGroupStyle$delegate;
  function get_InputStyle() {
    _init_properties_Input_kt__b04mg8();
    return InputStyle$delegate.g2a(null, InputStyle$factory());
  }
  var InputStyle$delegate;
  function get_OutlinedInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return OutlinedInputVariant$delegate.g2a(null, OutlinedInputVariant$factory());
  }
  var OutlinedInputVariant$delegate;
  function get_FilledInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return FilledInputVariant$delegate.g2a(null, FilledInputVariant$factory());
  }
  var FilledInputVariant$delegate;
  function get_FlushedInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return FlushedInputVariant$delegate.g2a(null, FlushedInputVariant$factory());
  }
  var FlushedInputVariant$delegate;
  function get_UnstyledInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return UnstyledInputVariant$delegate.g2a(null, UnstyledInputVariant$factory());
  }
  var UnstyledInputVariant$delegate;
  function InputVars() {
    InputVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().x29();
    tmp.d3c_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.e3c_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_FocusOutlineColorVar().x29();
    tmp_0.f3c_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    this.g3c_1 = StyleVariable('silk');
    this.h3c_1 = StyleVariable('silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().j24().x29();
    tmp_1.i3c_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    this.j3c_1 = StyleVariable('silk');
    this.k3c_1 = StyleVariable('silk');
    this.l3c_1 = StyleVariable('silk');
    this.m3c_1 = StyleVariable('silk');
    this.n3c_1 = StyleVariable('silk');
    this.o3c_1 = StyleVariable('silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_PlaceholderOpacityVar().x29();
    tmp_2.p3c_1 = StyleVariable_2(tmp0_defaultFallback_2, 'silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_PlaceholderColorVar().x29();
    tmp_3.q3c_1 = StyleVariable_0(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_cssRem(2.25);
    tmp_4.r3c_1 = StyleVariable_0(tmp0_defaultFallback_4, 'silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = get_cssRem(2.25);
    tmp_5.s3c_1 = StyleVariable_0(tmp0_defaultFallback_5, 'silk');
    this.t3c_1 = 0;
  }
  protoOf(InputVars).q39 = function () {
    return this.d3c_1.g2a(this, BorderColor$factory_1());
  };
  protoOf(InputVars).r3b = function () {
    return this.e3c_1.g2a(this, BorderRadius$factory_0());
  };
  protoOf(InputVars).u3c = function () {
    return this.f3c_1.g2a(this, BorderFocusColor$factory());
  };
  protoOf(InputVars).v3c = function () {
    return this.g3c_1.g2a(this, BorderHoverColor$factory());
  };
  protoOf(InputVars).w3c = function () {
    return this.h3c_1.g2a(this, BorderInvalidColor$factory());
  };
  protoOf(InputVars).w39 = function () {
    return this.i3c_1.g2a(this, ColorTransitionDuration$factory_1());
  };
  protoOf(InputVars).x3c = function () {
    return this.j3c_1.g2a(this, FilledColor$factory());
  };
  protoOf(InputVars).y3c = function () {
    return this.k3c_1.g2a(this, FilledHoverColor$factory());
  };
  protoOf(InputVars).z3c = function () {
    return this.l3c_1.g2a(this, FilledFocusColor$factory());
  };
  protoOf(InputVars).l3a = function () {
    return this.m3c_1.g2a(this, FontSize$factory_1());
  };
  protoOf(InputVars).m3a = function () {
    return this.n3c_1.g2a(this, Height$factory_0());
  };
  protoOf(InputVars).a3d = function () {
    return this.o3c_1.g2a(this, Padding$factory());
  };
  protoOf(InputVars).b3d = function () {
    return this.p3c_1.g2a(this, PlaceholderOpacity$factory());
  };
  protoOf(InputVars).c3d = function () {
    return this.q3c_1.g2a(this, PlaceholderColor$factory());
  };
  var InputVars_instance;
  function InputVars_getInstance() {
    if (InputVars_instance == null)
      new InputVars();
    return InputVars_instance;
  }
  function inputPadding(_this__u8e3s4) {
    _init_properties_Input_kt__b04mg8();
    var padding = InputVars_getInstance().a3d().x29();
    return paddingInline(_this__u8e3s4, padding, padding);
  }
  function InputGroupStyle$delegate$lambda($this$base) {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    var tmp_0 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = outline(tmp, tmp_0, 'solid', Colors_instance.u2n());
    var tmp_2 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return fontSize(borderRadius(border_0(tmp_1, tmp_2, 'solid', Colors_instance.u2n()), InputVars_getInstance().r3b().x29()), InputVars_getInstance().l3a().x29());
  }
  function InputStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Input_kt__b04mg8();
    $this$ComponentStyle.o2r(InputStyle$delegate$lambda$lambda);
    var tmp = get_placeholder($this$ComponentStyle);
    tmp.f2t(InputStyle$delegate$lambda$lambda_0);
    return Unit_instance;
  }
  function InputStyle$delegate$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    var tmp_0 = backgroundColor(fontSize(height(color(styleModifier(tmp, InputStyle$delegate$lambda$lambda$lambda), get_ColorVar().x29()), InputVars_getInstance().m3a().x29()), InputVars_getInstance().l3a().x29()), Colors_instance.u2n());
    var tmp_1 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = outline(tmp_0, tmp_1, 'solid', Colors_instance.u2n());
    var tmp_3 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition_0(border_0(tmp_2, tmp_3, 'solid', Colors_instance.u2n()), Companion_instance_2.w2a(listOf(['border-color', 'box-shadow', 'background-color']), InputVars_getInstance().w39().x29()));
  }
  function InputStyle$delegate$lambda$lambda$lambda($this$styleModifier) {
    _init_properties_Input_kt__b04mg8();
    $this$styleModifier.e1y('appearance', 'none');
    return Unit_instance;
  }
  function InputStyle$delegate$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return color(opacity(Companion_instance, InputVars_getInstance().b3d().x29()), InputVars_getInstance().c3d().x29());
  }
  function OutlinedInputVariant$delegate$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.o2r(OutlinedInputVariant$delegate$lambda$lambda);
    var tmp = get_ariaInvalid($this$addVariant);
    tmp.f2t(OutlinedInputVariant$delegate$lambda$lambda_0);
    var tmp_0 = get_hover($this$addVariant).u2t(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_0.f2t(OutlinedInputVariant$delegate$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).u2t(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.f2t(OutlinedInputVariant$delegate$lambda$lambda_2);
    return Unit_instance;
  }
  function invoke$bordered(_this__u8e3s4, color) {
    var tmp = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow(border_0(_this__u8e3s4, tmp, 'solid', color), VOID, VOID, VOID, get_px(1), color);
  }
  function OutlinedInputVariant$delegate$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = borderRadius(inputPadding(Companion_instance), InputVars_getInstance().r3b().x29());
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border_0(tmp, tmp_0, 'solid', InputVars_getInstance().q39().x29());
  }
  function OutlinedInputVariant$delegate$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered(Companion_instance, InputVars_getInstance().w3c().x29());
  }
  function OutlinedInputVariant$delegate$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    return border(tmp, OutlinedInputVariant$delegate$lambda$lambda$lambda);
  }
  function OutlinedInputVariant$delegate$lambda$lambda$lambda($this$border) {
    _init_properties_Input_kt__b04mg8();
    $this$border.m2o(InputVars_getInstance().v3c().x29());
    return Unit_instance;
  }
  function OutlinedInputVariant$delegate$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered(Companion_instance, InputVars_getInstance().u3c().x29());
  }
  function FilledInputVariant$delegate$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.o2r(FilledInputVariant$delegate$lambda$lambda);
    var tmp = get_hover($this$addVariant).u2t(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp.f2t(FilledInputVariant$delegate$lambda$lambda_0);
    var tmp_0 = get_ariaInvalid($this$addVariant);
    tmp_0.f2t(FilledInputVariant$delegate$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).u2t(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.f2t(FilledInputVariant$delegate$lambda$lambda_2);
    return Unit_instance;
  }
  function invoke$bordered_0(_this__u8e3s4, color) {
    return boxShadow(border(_this__u8e3s4, FilledInputVariant$delegate$lambda$bordered$lambda(color)), VOID, VOID, VOID, get_px(1), color);
  }
  function FilledInputVariant$delegate$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = borderRadius(backgroundColor(inputPadding(Companion_instance), InputVars_getInstance().x3c().x29()), InputVars_getInstance().r3b().x29());
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border_0(tmp, tmp_0, 'solid', Colors_instance.u2n());
  }
  function FilledInputVariant$delegate$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return backgroundColor(Companion_instance, InputVars_getInstance().y3c().x29());
  }
  function FilledInputVariant$delegate$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_0(Companion_instance, InputVars_getInstance().w3c().x29());
  }
  function FilledInputVariant$delegate$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_0(backgroundColor(Companion_instance, InputVars_getInstance().z3c().x29()), InputVars_getInstance().u3c().x29());
  }
  function FilledInputVariant$delegate$lambda$bordered$lambda($color) {
    return function ($this$border) {
      $this$border.m2o($color);
      return Unit_instance;
    };
  }
  function FlushedInputVariant$delegate$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.o2r(FlushedInputVariant$delegate$lambda$lambda);
    var tmp = get_ariaInvalid($this$addVariant);
    tmp.f2t(FlushedInputVariant$delegate$lambda$lambda_0);
    var tmp_0 = get_hover($this$addVariant).u2t(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_0.f2t(FlushedInputVariant$delegate$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).u2t(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.f2t(FlushedInputVariant$delegate$lambda$lambda_2);
    return Unit_instance;
  }
  function invoke$bordered_1(_this__u8e3s4, color) {
    return boxShadow(border(_this__u8e3s4, FlushedInputVariant$delegate$lambda$bordered$lambda(color)), VOID, get_px(1), VOID, VOID, color);
  }
  function FlushedInputVariant$delegate$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp, tmp_0, 'solid', InputVars_getInstance().q39().x29());
  }
  function FlushedInputVariant$delegate$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_1(Companion_instance, InputVars_getInstance().w3c().x29());
  }
  function FlushedInputVariant$delegate$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    return border(tmp, FlushedInputVariant$delegate$lambda$lambda$lambda);
  }
  function FlushedInputVariant$delegate$lambda$lambda$lambda($this$border) {
    _init_properties_Input_kt__b04mg8();
    $this$border.m2o(InputVars_getInstance().v3c().x29());
    return Unit_instance;
  }
  function FlushedInputVariant$delegate$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_1(Companion_instance, InputVars_getInstance().u3c().x29());
  }
  function FlushedInputVariant$delegate$lambda$bordered$lambda($color) {
    return function ($this$border) {
      $this$border.m2o($color);
      return Unit_instance;
    };
  }
  function UnstyledInputVariant$delegate$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    return Unit_instance;
  }
  function InputGroupStyle$factory() {
    return getPropertyCallableRef('InputGroupStyle', 0, KProperty0, function () {
      return get_InputGroupStyle();
    }, null);
  }
  function InputStyle$factory() {
    return getPropertyCallableRef('InputStyle', 0, KProperty0, function () {
      return get_InputStyle();
    }, null);
  }
  function OutlinedInputVariant$factory() {
    return getPropertyCallableRef('OutlinedInputVariant', 0, KProperty0, function () {
      return get_OutlinedInputVariant();
    }, null);
  }
  function FilledInputVariant$factory() {
    return getPropertyCallableRef('FilledInputVariant', 0, KProperty0, function () {
      return get_FilledInputVariant();
    }, null);
  }
  function FlushedInputVariant$factory() {
    return getPropertyCallableRef('FlushedInputVariant', 0, KProperty0, function () {
      return get_FlushedInputVariant();
    }, null);
  }
  function UnstyledInputVariant$factory() {
    return getPropertyCallableRef('UnstyledInputVariant', 0, KProperty0, function () {
      return get_UnstyledInputVariant();
    }, null);
  }
  function BorderColor$factory_1() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.q39();
    }, null);
  }
  function BorderRadius$factory_0() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.r3b();
    }, null);
  }
  function BorderFocusColor$factory() {
    return getPropertyCallableRef('BorderFocusColor', 1, KProperty1, function (receiver) {
      return receiver.u3c();
    }, null);
  }
  function BorderHoverColor$factory() {
    return getPropertyCallableRef('BorderHoverColor', 1, KProperty1, function (receiver) {
      return receiver.v3c();
    }, null);
  }
  function BorderInvalidColor$factory() {
    return getPropertyCallableRef('BorderInvalidColor', 1, KProperty1, function (receiver) {
      return receiver.w3c();
    }, null);
  }
  function ColorTransitionDuration$factory_1() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.w39();
    }, null);
  }
  function FilledColor$factory() {
    return getPropertyCallableRef('FilledColor', 1, KProperty1, function (receiver) {
      return receiver.x3c();
    }, null);
  }
  function FilledHoverColor$factory() {
    return getPropertyCallableRef('FilledHoverColor', 1, KProperty1, function (receiver) {
      return receiver.y3c();
    }, null);
  }
  function FilledFocusColor$factory() {
    return getPropertyCallableRef('FilledFocusColor', 1, KProperty1, function (receiver) {
      return receiver.z3c();
    }, null);
  }
  function FontSize$factory_1() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.l3a();
    }, null);
  }
  function Height$factory_0() {
    return getPropertyCallableRef('Height', 1, KProperty1, function (receiver) {
      return receiver.m3a();
    }, null);
  }
  function Padding$factory() {
    return getPropertyCallableRef('Padding', 1, KProperty1, function (receiver) {
      return receiver.a3d();
    }, null);
  }
  function PlaceholderOpacity$factory() {
    return getPropertyCallableRef('PlaceholderOpacity', 1, KProperty1, function (receiver) {
      return receiver.b3d();
    }, null);
  }
  function PlaceholderColor$factory() {
    return getPropertyCallableRef('PlaceholderColor', 1, KProperty1, function (receiver) {
      return receiver.c3d();
    }, null);
  }
  var properties_initialized_Input_kt_tklayu;
  function _init_properties_Input_kt__b04mg8() {
    if (!properties_initialized_Input_kt_tklayu) {
      properties_initialized_Input_kt_tklayu = true;
      var tmp = whiteSpace(overflow_0(clip(padding(margin_0(size(border_0(Companion_instance, get_px(0)), get_px(1)), get_px(-1)), get_px(0)), RectF_init_$Create$(50.0)), Companion_instance_4.b29()), Companion_instance_8.m2a());
      // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = 'absolute';
      HiddenInputModifier = position(tmp, tmp$ret$3);
      var tmp_0 = Companion_instance_5;
      InputGroupStyle$delegate = base(tmp_0, VOID, 'silk', InputGroupStyle$delegate$lambda);
      InputStyle$delegate = ComponentStyle(VOID, 'silk', InputStyle$delegate$lambda);
      var tmp_1 = get_InputStyle();
      OutlinedInputVariant$delegate = addVariant(tmp_1, VOID, OutlinedInputVariant$delegate$lambda);
      var tmp_2 = get_InputStyle();
      FilledInputVariant$delegate = addVariant(tmp_2, VOID, FilledInputVariant$delegate$lambda);
      var tmp_3 = get_InputStyle();
      FlushedInputVariant$delegate = addVariant(tmp_3, VOID, FlushedInputVariant$delegate$lambda);
      var tmp_4 = get_InputStyle();
      UnstyledInputVariant$delegate = addVariant(tmp_4, VOID, UnstyledInputVariant$delegate$lambda);
    }
  }
  function get_SwitchStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchStyle$delegate.g2a(null, SwitchStyle$factory());
  }
  var SwitchStyle$delegate;
  function get_SwitchTrackStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchTrackStyle$delegate.g2a(null, SwitchTrackStyle$factory());
  }
  var SwitchTrackStyle$delegate;
  function get_SwitchInputVariant() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchInputVariant$delegate.g2a(null, SwitchInputVariant$factory());
  }
  var SwitchInputVariant$delegate;
  function get_SwitchThumbStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchThumbStyle$delegate.g2a(null, SwitchThumbStyle$factory());
  }
  var SwitchThumbStyle$delegate;
  function SwitchVars() {
    SwitchVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_px(9999);
    tmp.d3d_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.e3d_1 = StyleVariable('silk');
    this.f3d_1 = StyleVariable('silk');
    this.g3d_1 = StyleVariable('silk');
    this.h3d_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_FocusOutlineColorVar().x29();
    tmp_0.i3d_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    this.j3d_1 = StyleVariable('silk');
    this.k3d_1 = StyleVariable('silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().n3d().x29();
    tmp_1.l3d_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    this.m3d_1 = 0;
  }
  protoOf(SwitchVars).r3b = function () {
    return this.d3d_1.g2a(this, BorderRadius$factory_1());
  };
  protoOf(SwitchVars).o3d = function () {
    return this.e3d_1.g2a(this, TrackWidth$factory());
  };
  protoOf(SwitchVars).p3d = function () {
    return this.f3d_1.g2a(this, TrackHeight$factory());
  };
  protoOf(SwitchVars).q3d = function () {
    return this.g3d_1.g2a(this, TrackPadding$factory());
  };
  protoOf(SwitchVars).r3d = function () {
    return this.h3d_1.g2a(this, TrackBackgroundColor$factory());
  };
  protoOf(SwitchVars).s3d = function () {
    return this.i3d_1.g2a(this, FocusColor$factory());
  };
  protoOf(SwitchVars).t3d = function () {
    return this.j3d_1.g2a(this, ThumbOffset$factory());
  };
  protoOf(SwitchVars).u3d = function () {
    return this.k3d_1.g2a(this, ThumbColor$factory());
  };
  protoOf(SwitchVars).c3c = function () {
    return this.l3d_1.g2a(this, TransitionDuration$factory_0());
  };
  var SwitchVars_instance;
  function SwitchVars_getInstance() {
    if (SwitchVars_instance == null)
      new SwitchVars();
    return SwitchVars_instance;
  }
  function SwitchStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Switch_kt__dwcqr0();
    return Unit_instance;
  }
  function SwitchTrackStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Switch_kt__dwcqr0();
    $this$ComponentStyle.o2r(SwitchTrackStyle$delegate$lambda$lambda);
    var tmp = get_hover($this$ComponentStyle).u2t(not($this$ComponentStyle, [get_ariaDisabled($this$ComponentStyle)]));
    tmp.f2t(SwitchTrackStyle$delegate$lambda$lambda_0);
    return Unit_instance;
  }
  function SwitchTrackStyle$delegate$lambda$lambda() {
    _init_properties_Switch_kt__dwcqr0();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return boxSizing(transition(backgroundColor(borderRadius(padding(minHeight(height(minWidth(width(position(tmp, tmp$ret$3), SwitchVars_getInstance().o3d().x29()), SwitchVars_getInstance().o3d().x29()), SwitchVars_getInstance().p3d().x29()), SwitchVars_getInstance().p3d().x29()), SwitchVars_getInstance().q3d().x29()), SwitchVars_getInstance().r3b().x29()), SwitchVars_getInstance().r3d().x29()), [CSSTransition_init_$Create$('background-color', SwitchVars_getInstance().c3c().x29())]), Companion_instance_11.u24());
  }
  function SwitchTrackStyle$delegate$lambda$lambda_0() {
    _init_properties_Switch_kt__dwcqr0();
    return cursor(Companion_instance, Companion_instance_1.a25());
  }
  function SwitchInputVariant$delegate$lambda($this$addVariant) {
    _init_properties_Switch_kt__dwcqr0();
    $this$addVariant.o2r(SwitchInputVariant$delegate$lambda$lambda);
    $this$addVariant.q2r(':focus-visible + *', SwitchInputVariant$delegate$lambda$lambda_0);
    return Unit_instance;
  }
  function SwitchInputVariant$delegate$lambda$lambda() {
    _init_properties_Switch_kt__dwcqr0();
    return get_HiddenInputModifier();
  }
  function SwitchInputVariant$delegate$lambda$lambda_0() {
    _init_properties_Switch_kt__dwcqr0();
    return boxShadow(Companion_instance, VOID, VOID, VOID, get_cssRem(0.1875), SwitchVars_getInstance().s3d().x29());
  }
  function SwitchThumbStyle$delegate$lambda($this$base) {
    _init_properties_Switch_kt__dwcqr0();
    return transition(translateX(backgroundColor(borderRadius(size(Companion_instance, SwitchVars_getInstance().p3d().x29()), SwitchVars_getInstance().r3b().x29()), SwitchVars_getInstance().u3d().x29()), SwitchVars_getInstance().t3d().x29()), [CSSTransition_init_$Create$('translate', SwitchVars_getInstance().c3c().x29())]);
  }
  function SwitchStyle$factory() {
    return getPropertyCallableRef('SwitchStyle', 0, KProperty0, function () {
      return get_SwitchStyle();
    }, null);
  }
  function SwitchTrackStyle$factory() {
    return getPropertyCallableRef('SwitchTrackStyle', 0, KProperty0, function () {
      return get_SwitchTrackStyle();
    }, null);
  }
  function SwitchInputVariant$factory() {
    return getPropertyCallableRef('SwitchInputVariant', 0, KProperty0, function () {
      return get_SwitchInputVariant();
    }, null);
  }
  function SwitchThumbStyle$factory() {
    return getPropertyCallableRef('SwitchThumbStyle', 0, KProperty0, function () {
      return get_SwitchThumbStyle();
    }, null);
  }
  function BorderRadius$factory_1() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.r3b();
    }, null);
  }
  function TrackWidth$factory() {
    return getPropertyCallableRef('TrackWidth', 1, KProperty1, function (receiver) {
      return receiver.o3d();
    }, null);
  }
  function TrackHeight$factory() {
    return getPropertyCallableRef('TrackHeight', 1, KProperty1, function (receiver) {
      return receiver.p3d();
    }, null);
  }
  function TrackPadding$factory() {
    return getPropertyCallableRef('TrackPadding', 1, KProperty1, function (receiver) {
      return receiver.q3d();
    }, null);
  }
  function TrackBackgroundColor$factory() {
    return getPropertyCallableRef('TrackBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.r3d();
    }, null);
  }
  function FocusColor$factory() {
    return getPropertyCallableRef('FocusColor', 1, KProperty1, function (receiver) {
      return receiver.s3d();
    }, null);
  }
  function ThumbOffset$factory() {
    return getPropertyCallableRef('ThumbOffset', 1, KProperty1, function (receiver) {
      return receiver.t3d();
    }, null);
  }
  function ThumbColor$factory() {
    return getPropertyCallableRef('ThumbColor', 1, KProperty1, function (receiver) {
      return receiver.u3d();
    }, null);
  }
  function TransitionDuration$factory_0() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.c3c();
    }, null);
  }
  var properties_initialized_Switch_kt_7kkg8m;
  function _init_properties_Switch_kt__dwcqr0() {
    if (!properties_initialized_Switch_kt_7kkg8m) {
      properties_initialized_Switch_kt_7kkg8m = true;
      SwitchStyle$delegate = ComponentStyle(VOID, 'silk', SwitchStyle$delegate$lambda);
      var tmp0_extraModifiers = ariaHidden(tabIndex(Companion_instance, -1));
      SwitchTrackStyle$delegate = ComponentStyle(tmp0_extraModifiers, 'silk', SwitchTrackStyle$delegate$lambda);
      var tmp = get_InputStyle();
      SwitchInputVariant$delegate = addVariant(tmp, VOID, SwitchInputVariant$delegate$lambda);
      var tmp_0 = Companion_instance_5;
      SwitchThumbStyle$delegate = base(tmp_0, VOID, 'silk', SwitchThumbStyle$delegate$lambda);
    }
  }
  function get_CanvasStyle() {
    _init_properties_Canvas_kt__g1lz20();
    return CanvasStyle$delegate.g2a(null, CanvasStyle$factory());
  }
  var CanvasStyle$delegate;
  function CanvasStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Canvas_kt__g1lz20();
    return Unit_instance;
  }
  function CanvasStyle$factory() {
    return getPropertyCallableRef('CanvasStyle', 0, KProperty0, function () {
      return get_CanvasStyle();
    }, null);
  }
  var properties_initialized_Canvas_kt_i28dei;
  function _init_properties_Canvas_kt__g1lz20() {
    if (!properties_initialized_Canvas_kt_i28dei) {
      properties_initialized_Canvas_kt_i28dei = true;
      CanvasStyle$delegate = ComponentStyle(VOID, 'silk', CanvasStyle$delegate$lambda);
    }
  }
  function HamburgerIcon$composable(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(353994811);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.ju()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(353994811, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.HamburgerIcon$composable (Icons.kt:325)');
      }
      createIcon$composable(null, null, new Stroke(3), toAttrs(modifier_0._v), ComposableSingletons$IconsKt_getInstance().i3e_1, $composer_0, 24576, 3);
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
      tmp0_safe_receiver.s19(HamburgerIcon$composable$lambda(modifier_0, $changed, $default));
    }
  }
  function CloseIcon$composable(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(-1976767446);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.ju()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1976767446, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.CloseIcon$composable (Icons.kt:280)');
      }
      createIcon$composable(null, null, new Stroke(3), toAttrs(modifier_0._v), ComposableSingletons$IconsKt_getInstance().g3e_1, $composer_0, 24576, 3);
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
      tmp0_safe_receiver.s19(CloseIcon$composable$lambda(modifier_0, $changed, $default));
    }
  }
  function MoonIcon$composable(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(-135031349);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.ju()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(-135031349, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.MoonIcon$composable (Icons.kt:387)');
      }
      var tmp = Companion_instance_12.n2e(200);
      createIcon$composable(tmp, null, new Stroke(20), toAttrs(modifier_0._v), ComposableSingletons$IconsKt_getInstance().m3e_1, $composer_0, 24576, 2);
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
      tmp0_safe_receiver.s19(MoonIcon$composable$lambda(modifier_0, $changed, $default));
    }
  }
  function SunIcon$composable(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(-236426882);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.ju()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(-236426882, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.SunIcon$composable (Icons.kt:402)');
      }
      createIcon$composable(null, null, new Stroke(2), toAttrs(modifier_0._v), ComposableSingletons$IconsKt_getInstance().o3e_1, $composer_0, 24576, 3);
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
      tmp0_safe_receiver.s19(SunIcon$composable$lambda(modifier_0, $changed, $default));
    }
  }
  function createIcon$composable(viewBox, width, renderStyle, attrs, content, $composer, $changed, $default) {
    var viewBox_0 = {_v: viewBox};
    var width_0 = {_v: width};
    var renderStyle_0 = {_v: renderStyle};
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(819880367);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ((($default & 1) === 0 ? $composer_0.fv(viewBox_0._v) : false) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ((($default & 2) === 0 ? $composer_0.fv(width_0._v) : false) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ((($default & 4) === 0 ? $composer_0.fv(renderStyle_0._v) : false) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.iv(attrs_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.iv(content) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.ju()) {
      $composer_0.qu();
      if (($changed & 1) === 0 ? true : $composer_0.ku()) {
        if (!(($default & 1) === 0)) {
          viewBox_0._v = Companion_instance_12.n2e(24);
          $dirty = $dirty & -15;
        }
        if (!(($default & 2) === 0)) {
          width_0._v = get_em(1);
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          renderStyle_0._v = new Stroke();
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          attrs_0._v = null;
        }
      } else {
        $composer_0.xu();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.ru();
      if (isTraceInProgress()) {
        traceEventStart(819880367, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.createIcon$composable (Icons.kt:56)');
      }
      Svg$composable(createIcon$composable$lambda(width_0, viewBox_0, renderStyle_0, attrs_0), content, $composer_0, 112 & $dirty >> 9, 0);
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
      tmp0_safe_receiver.s19(createIcon$composable$lambda_0(viewBox_0, width_0, renderStyle_0, attrs_0, content, $changed, $default));
    }
  }
  function Fill() {
  }
  function Stroke(strokeWidth) {
    strokeWidth = strokeWidth === VOID ? null : strokeWidth;
    this.p3e_1 = strokeWidth;
    this.q3e_1 = 0;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.t1t(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_1$lambda_21hevk($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv($this$createIcon) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
      if (isTraceInProgress()) {
        traceEventStart(187923078, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-1.<anonymous> (Icons.kt:82)');
      }
      $composer_0.mu(-950911934);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.dv();
      var tmp;
      if (false ? true : it === Companion_getInstance().gu_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-1.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$IconsKt$lambda_1$lambda$lambda_6jt1tn;
        $composer_0.ev(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.nu();
      Path$composable($this$createIcon, tmpCache, $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_1$lambda$lambda_6jt1tn($this$Path) {
    $this$Path.y2e(ComposableSingletons$IconsKt$lambda_1$lambda$lambda$lambda_jixjw0);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_1$lambda$lambda$lambda_jixjw0($this$d) {
    $this$d.b2f(20, 11);
    $this$d.h2f(7.83);
    $this$d.c2f(5.59, -5.59, true);
    $this$d.d2f(12, 4);
    $this$d.c2f(-8, 8, true);
    $this$d.c2f(8, 8, true);
    $this$d.c2f(1.41, -1.41, true);
    $this$d.d2f(7.83, 13);
    $this$d.h2f(20);
    $this$d.e2f(-2, true);
    $this$d.k2f();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.t1t(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_2$lambda_qs526n($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv($this$createIcon) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
      if (isTraceInProgress()) {
        traceEventStart(465018625, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-2.<anonymous> (Icons.kt:103)');
      }
      $composer_0.mu(-950911265);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.dv();
      var tmp;
      if (false ? true : it === Companion_getInstance().gu_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-2.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$IconsKt$lambda_2$lambda$lambda_vhd48s;
        $composer_0.ev(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.nu();
      Path$composable($this$createIcon, tmpCache, $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_2$lambda$lambda_vhd48s($this$Path) {
    $this$Path.y2e(ComposableSingletons$IconsKt$lambda_2$lambda$lambda$lambda_hsrvsf);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_2$lambda$lambda$lambda_hsrvsf($this$d) {
    $this$d.b2f(20, 12);
    $this$d.c2f(-1.41, -1.41, true);
    $this$d.d2f(13, 16.17);
    $this$d.f2f(4);
    $this$d.g2f(-2, true);
    $this$d.e2f(12.17, true);
    $this$d.c2f(-5.58, -5.59, true);
    $this$d.d2f(4, 12);
    $this$d.c2f(8, 8, true);
    $this$d.c2f(8, -8, true);
    $this$d.k2f();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.t1t(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_3$lambda_ffciqa($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv($this$createIcon) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
      if (isTraceInProgress()) {
        traceEventStart(1093309942, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-3.<anonymous> (Icons.kt:124)');
      }
      $composer_0.mu(-950910573);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.dv();
      var tmp;
      if (false ? true : it === Companion_getInstance().gu_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-3.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$IconsKt$lambda_3$lambda$lambda_em6vb7;
        $composer_0.ev(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.nu();
      Path$composable($this$createIcon, tmpCache, $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_3$lambda$lambda_em6vb7($this$Path) {
    $this$Path.y2e(ComposableSingletons$IconsKt$lambda_3$lambda$lambda$lambda_fwmqia);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_3$lambda$lambda$lambda_fwmqia($this$d) {
    $this$d.b2f(12, 4);
    $this$d.c2f(-1.14, 1.41, true);
    $this$d.d2f(16.17, 11);
    $this$d.h2f(4);
    $this$d.e2f(2, true);
    $this$d.g2f(12.17, true);
    $this$d.c2f(-5.58, 5.59, true);
    $this$d.d2f(12, 20);
    $this$d.c2f(8, -8, true);
    $this$d.k2f();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.t1t(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_4$lambda_de9ybx($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv($this$createIcon) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
      if (isTraceInProgress()) {
        traceEventStart(353353466, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-4.<anonymous> (Icons.kt:144)');
      }
      $composer_0.mu(-950909935);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.dv();
      var tmp;
      if (false ? true : it === Companion_getInstance().gu_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-4.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$IconsKt$lambda_4$lambda$lambda_abd73y;
        $composer_0.ev(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.nu();
      Path$composable($this$createIcon, tmpCache, $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_4$lambda$lambda_abd73y($this$Path) {
    $this$Path.y2e(ComposableSingletons$IconsKt$lambda_4$lambda$lambda$lambda_lf2p65);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_4$lambda$lambda$lambda_lf2p65($this$d) {
    $this$d.b2f(4, 12);
    $this$d.c2f(1.41, 1.41, true);
    $this$d.d2f(11, 7.83);
    $this$d.f2f(20);
    $this$d.g2f(2, true);
    $this$d.f2f(7.83);
    $this$d.c2f(5.58, 5.59, true);
    $this$d.d2f(20, 12);
    $this$d.c2f(-8, -8, true);
    $this$d.c2f(-8, 8, true);
    $this$d.k2f();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.t1t(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_5$lambda_st7ml0($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv($this$createIcon) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
      if (isTraceInProgress()) {
        traceEventStart(14879965, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-5.<anonymous> (Icons.kt:165)');
      }
      $composer_0.mu(-950909268);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.dv();
      var tmp;
      if (false ? true : it === Companion_getInstance().gu_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-5.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$IconsKt$lambda_5$lambda$lambda_z8x9j3;
        $composer_0.ev(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.nu();
      Path$composable($this$createIcon, tmpCache, $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_5$lambda$lambda_z8x9j3($this$Path) {
    $this$Path.y2e(ComposableSingletons$IconsKt$lambda_5$lambda$lambda$lambda_cabx4k);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_5$lambda$lambda$lambda_cabx4k($this$d) {
    $this$d.b2f(21.843, 3.455);
    $this$d.i2f(6.961, 6.961, 0, 0, 0, -9.846, 0, true);
    $this$d.d2f(1.619, 13.832);
    $this$d.i2f(5.128, 5.128, 0, 0, 0, 7.252, 7.252, true);
    $this$d.d2f(17.3, 12.653);
    $this$d.j2f(3.293, 3.293, 0, 1, 0, 12.646, 8);
    $this$d.d2f(7.457, 13.184);
    $this$d.j2f(1, 1, 0, 1, 0, 8.871, 14.6);
    $this$d.d2f(14.06, 9.409);
    $this$d.i2f(1.294, 1.294, 0, 0, 1, 1.829, 1.83, true);
    $this$d.d2f(7.457, 19.67);
    $this$d.i2f(3.128, 3.128, 0, 0, 1, -4.424, -4.424, true);
    $this$d.d2f(13.411, 4.869);
    $this$d.i2f(4.962, 4.962, 0, 1, 1, 7.018, 7.018, true);
    $this$d.d2f(12.646, 19.67);
    $this$d.i2f(1, 1, 0, 1, 0, 1.414, 1.414, true);
    $this$d.d2f(21.843, 13.3);
    $this$d.i2f(6.96, 6.96, 0, 0, 0, 0, -9.846, true);
    $this$d.k2f();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.t1t(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_6$lambda_euh7($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv($this$createIcon) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
      if (isTraceInProgress()) {
        traceEventStart(343641086, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-6.<anonymous> (Icons.kt:194)');
      }
      $composer_0.mu(-950907957);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.dv();
      var tmp;
      if (false ? true : it === Companion_getInstance().gu_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-6.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$IconsKt$lambda_6$lambda$lambda_aumq0w;
        $composer_0.ev(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.nu();
      Polyline$composable($this$createIcon, tmpCache, $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_6$lambda$lambda_aumq0w($this$Polyline) {
    $this$Polyline.q2f([to(3, 12), to(9, 18), to(21, 2)]);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.t1t(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_7$lambda_su1bje($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv($this$createIcon) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
      if (isTraceInProgress()) {
        traceEventStart(-1021140685, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-7.<anonymous> (Icons.kt:203)');
      }
      $composer_0.mu(-950907726);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.dv();
      var tmp;
      if (false ? true : it === Companion_getInstance().gu_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-7.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$IconsKt$lambda_7$lambda$lambda_e2xce9;
        $composer_0.ev(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.nu();
      Path$composable($this$createIcon, tmpCache, $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_7$lambda$lambda_e2xce9($this$Path) {
    $this$Path.y2e(ComposableSingletons$IconsKt$lambda_7$lambda$lambda$lambda_8o13qu);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_7$lambda$lambda$lambda_8o13qu($this$d) {
    $this$d.b2f(16.59, 8.59);
    $this$d.d2f(12, 13.17);
    $this$d.d2f(7.41, 8.59);
    $this$d.d2f(6, 10);
    $this$d.c2f(6, 6, true);
    $this$d.c2f(6, -6, true);
    $this$d.k2f();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.t1t(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_8$lambda_ddg9dj($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv($this$createIcon) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
      if (isTraceInProgress()) {
        traceEventStart(-507764776, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-8.<anonymous> (Icons.kt:220)');
      }
      $composer_0.mu(-950907277);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.dv();
      var tmp;
      if (false ? true : it === Companion_getInstance().gu_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-8.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$IconsKt$lambda_8$lambda$lambda_w0mn5q;
        $composer_0.ev(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.nu();
      Path$composable($this$createIcon, tmpCache, $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_8$lambda$lambda_w0mn5q($this$Path) {
    $this$Path.y2e(ComposableSingletons$IconsKt$lambda_8$lambda$lambda$lambda_snobxl);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_8$lambda$lambda$lambda_snobxl($this$d) {
    $this$d.b2f(15.41, 7.41);
    $this$d.d2f(14, 6);
    $this$d.c2f(-6, 6, true);
    $this$d.c2f(6, 6, true);
    $this$d.c2f(1.41, -1.41, true);
    $this$d.d2f(10.83, 12);
    $this$d.k2f();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.t1t(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_9$lambda_fg67oo($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv($this$createIcon) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
      if (isTraceInProgress()) {
        traceEventStart(-79892645, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-9.<anonymous> (Icons.kt:237)');
      }
      $composer_0.mu(-950906820);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.dv();
      var tmp;
      if (false ? true : it === Companion_getInstance().gu_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-9.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$IconsKt$lambda_9$lambda$lambda_732kql;
        $composer_0.ev(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.nu();
      Path$composable($this$createIcon, tmpCache, $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_9$lambda$lambda_732kql($this$Path) {
    $this$Path.y2e(ComposableSingletons$IconsKt$lambda_9$lambda$lambda$lambda_51qad4);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_9$lambda$lambda$lambda_51qad4($this$d) {
    $this$d.b2f(10, 6);
    $this$d.d2f(8.59, 7.41);
    $this$d.d2f(13.17, 12);
    $this$d.c2f(-4.58, 4.59, true);
    $this$d.d2f(10, 18);
    $this$d.c2f(6, -6, true);
    $this$d.k2f();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.t1t(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_10$lambda_c69byu($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv($this$createIcon) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
      if (isTraceInProgress()) {
        traceEventStart(660186540, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-10.<anonymous> (Icons.kt:254)');
      }
      $composer_0.mu(-950906371);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.dv();
      var tmp;
      if (false ? true : it === Companion_getInstance().gu_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-10.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$IconsKt$lambda_10$lambda$lambda_rzmap7;
        $composer_0.ev(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.nu();
      Path$composable($this$createIcon, tmpCache, $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_10$lambda$lambda_rzmap7($this$Path) {
    $this$Path.y2e(ComposableSingletons$IconsKt$lambda_10$lambda$lambda$lambda_2vrjey);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_10$lambda$lambda$lambda_2vrjey($this$d) {
    $this$d.b2f(12, 8);
    $this$d.c2f(-6, 6, true);
    $this$d.c2f(1.41, 1.41, true);
    $this$d.d2f(12, 10.83);
    $this$d.c2f(4.59, 4.58, true);
    $this$d.d2f(18, 14);
    $this$d.k2f();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.t1t(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_11$lambda_u188y3($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv($this$createIcon) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
      if (isTraceInProgress()) {
        traceEventStart(2025461450, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-11.<anonymous> (Icons.kt:271)');
      }
      $composer_0.mu(-950905921);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.dv();
      var tmp;
      if (false ? true : it === Companion_getInstance().gu_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-11.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$IconsKt$lambda_11$lambda$lambda_3228a2;
        $composer_0.ev(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.nu();
      Circle$composable($this$createIcon, tmpCache, $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_11$lambda$lambda_3228a2($this$Circle) {
    $this$Circle.x2f(12);
    $this$Circle.y2f(12);
    $this$Circle.w2f(8);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.t1t(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_12$lambda_17lrvw($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv($this$createIcon) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
      if (isTraceInProgress()) {
        traceEventStart(1212129518, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-12.<anonymous> (Icons.kt:282)');
      }
      $composer_0.mu(-950905687);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.dv();
      var tmp;
      if (false ? true : it === Companion_getInstance().gu_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-12.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$IconsKt$lambda_12$lambda$lambda_lvhu53;
        $composer_0.ev(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.nu();
      Line$composable($this$createIcon, tmpCache, $composer_0, 14 & $dirty);
      $composer_0.mu(-950905588);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.dv();
      var tmp_1;
      if (false ? true : it_0 === Companion_getInstance().gu_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-12.<anonymous>.<anonymous>' call
        var value_0 = ComposableSingletons$IconsKt$lambda_12$lambda$lambda_lvhu53_0;
        $composer_0.ev(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmpCache_0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.nu();
      Line$composable($this$createIcon, tmpCache_0, $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_12$lambda$lambda_lvhu53($this$Line) {
    $this$Line.e2g(1);
    $this$Line.f2g(23);
    $this$Line.g2g(1);
    $this$Line.h2g(23);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_12$lambda$lambda_lvhu53_0($this$Line) {
    $this$Line.e2g(23);
    $this$Line.f2g(1);
    $this$Line.g2g(1);
    $this$Line.h2g(23);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.t1t(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_13$lambda_rm0p6b($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv($this$createIcon) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
      if (isTraceInProgress()) {
        traceEventStart(-769560574, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-13.<anonymous> (Icons.kt:300)');
      }
      $composer_0.mu(-950905302);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.dv();
      var tmp;
      if (false ? true : it === Companion_getInstance().gu_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-13.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$IconsKt$lambda_13$lambda$lambda_o825ew;
        $composer_0.ev(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.nu();
      Path$composable($this$createIcon, tmpCache, $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_13$lambda$lambda_o825ew($this$Path) {
    $this$Path.y2e(ComposableSingletons$IconsKt$lambda_13$lambda$lambda$lambda_wyvcbx);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_13$lambda$lambda$lambda_wyvcbx($this$d) {
    $this$d.b2f(11.2857, 6.05714);
    $this$d.d2f(10.08571, 4.85714);
    $this$d.d2f(7.85714, 7.14786);
    $this$d.d2f(7.85714, 1);
    $this$d.d2f(6.14286, 1);
    $this$d.d2f(6.14286, 7.14786);
    $this$d.d2f(3.91429, 4.85714);
    $this$d.d2f(2.71429, 6.05714);
    $this$d.d2f(7, 10.42857);
    $this$d.d2f(11.2857, 6.05714);
    $this$d.k2f();
    $this$d.b2f(1, 11.2857);
    $this$d.d2f(1, 13);
    $this$d.d2f(13, 13);
    $this$d.d2f(13, 11.2857);
    $this$d.d2f(1, 11.2857);
    $this$d.k2f();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.t1t(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_14$lambda_elgvqm($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv($this$createIcon) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
      if (isTraceInProgress()) {
        traceEventStart(-725431745, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-14.<anonymous> (Icons.kt:327)');
      }
      var tmp0_iterator = listOf([3, 12, 21]).l();
      while (tmp0_iterator.x()) {
        var y = tmp0_iterator.z();
        $composer_0.mu(-950904429);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.hv(y);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.dv();
        var tmp;
        if (invalid ? true : it === Companion_getInstance().gu_1) {
          // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-14.<anonymous>.<anonymous>' call
          var value = ComposableSingletons$IconsKt$lambda_14$lambda$lambda_phx09(y);
          $composer_0.ev(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        $composer_0.nu();
        Line$composable($this$createIcon, tmpCache, $composer_0, 14 & $dirty);
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_14$lambda$lambda_phx09($y) {
    return function ($this$Line) {
      $this$Line.e2g(0);
      $this$Line.f2g(23);
      $this$Line.g2g($y);
      $this$Line.h2g($y);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.t1t(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_15$lambda_e85lbl($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv($this$createIcon) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
      if (isTraceInProgress()) {
        traceEventStart(-2035566234, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-15.<anonymous> (Icons.kt:346)');
      }
      $composer_0.mu(-950904053);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.dv();
      var tmp;
      if (false ? true : it === Companion_getInstance().gu_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-15.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$IconsKt$lambda_15$lambda$lambda_pn1zfe;
        $composer_0.ev(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.nu();
      Line$composable($this$createIcon, tmpCache, $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_15$lambda$lambda_pn1zfe($this$Line) {
    $this$Line.e2g(3);
    $this$Line.f2g(21);
    $this$Line.g2g(12);
    $this$Line.h2g(12);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.t1t(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_16$lambda_rzbzlc($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv($this$createIcon) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
      if (isTraceInProgress()) {
        traceEventStart(-1115382124, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-16.<anonymous> (Icons.kt:358)');
      }
      $composer_0.mu(-950903800);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.dv();
      var tmp;
      if (false ? true : it === Companion_getInstance().gu_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-16.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$IconsKt$lambda_16$lambda$lambda_kgi04l;
        $composer_0.ev(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.nu();
      Line$composable($this$createIcon, tmpCache, $composer_0, 14 & $dirty);
      $composer_0.mu(-950903700);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.dv();
      var tmp_1;
      if (false ? true : it_0 === Companion_getInstance().gu_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-16.<anonymous>.<anonymous>' call
        var value_0 = ComposableSingletons$IconsKt$lambda_16$lambda$lambda_kgi04l_0;
        $composer_0.ev(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmpCache_0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.nu();
      Line$composable($this$createIcon, tmpCache_0, $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_16$lambda$lambda_kgi04l($this$Line) {
    $this$Line.e2g(3);
    $this$Line.f2g(21);
    $this$Line.g2g(12);
    $this$Line.h2g(12);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_16$lambda$lambda_kgi04l_0($this$Line) {
    $this$Line.e2g(12);
    $this$Line.f2g(12);
    $this$Line.g2g(3);
    $this$Line.h2g(21);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.t1t(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_17$lambda_uahgv($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv($this$createIcon) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
      if (isTraceInProgress()) {
        traceEventStart(862240855, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-17.<anonymous> (Icons.kt:376)');
      }
      $composer_0.mu(-950903448);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.dv();
      var tmp;
      if (false ? true : it === Companion_getInstance().gu_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-17.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$IconsKt$lambda_17$lambda$lambda_4h22ak;
        $composer_0.ev(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.nu();
      Rect$composable($this$createIcon, tmpCache, $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_17$lambda$lambda_4h22ak($this$Rect) {
    $this$Rect.f2e(4);
    $this$Rect.g2e(4);
    $this$Rect.i2e(16);
    $this$Rect.h2e(16);
    $this$Rect.n2g(2);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.t1t(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_18$lambda_tnwyj2($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv($this$createIcon) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
      if (isTraceInProgress()) {
        traceEventStart(2069599163, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-18.<anonymous> (Icons.kt:389)');
      }
      $composer_0.mu(-950903152);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.dv();
      var tmp;
      if (false ? true : it === Companion_getInstance().gu_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-18.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$IconsKt$lambda_18$lambda$lambda_tem4pp;
        $composer_0.ev(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.nu();
      Path$composable($this$createIcon, tmpCache, $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_18$lambda$lambda_tem4pp($this$Path) {
    $this$Path.y2e(ComposableSingletons$IconsKt$lambda_18$lambda$lambda$lambda_blfq3y);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_18$lambda$lambda$lambda_blfq3y($this$d) {
    $this$d.b2f(175, 106.583);
    $this$d.j2f(75, 75, 0, 1, 1, 93.417, 25);
    $this$d.j2f(58.333, 58.333, 0, 0, 0, 175, 106.583);
    $this$d.k2f();
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.t1t(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda_cjkmdv($this$Group, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv($this$Group) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
      if (isTraceInProgress()) {
        traceEventStart(747380469, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous> (Icons.kt:408)');
      }
      $composer_0.mu(-950902606);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.dv();
      var tmp;
      if (false ? true : it === Companion_getInstance().gu_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua;
        $composer_0.ev(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.nu();
      Circle$composable($this$Group, tmpCache, $composer_0, 14 & $dirty);
      $composer_0.mu(-950902506);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.dv();
      var tmp_1;
      if (false ? true : it_0 === Companion_getInstance().gu_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous>.<anonymous>' call
        var value_0 = ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_0;
        $composer_0.ev(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmpCache_0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.nu();
      Path$composable($this$Group, tmpCache_0, $composer_0, 14 & $dirty);
      $composer_0.mu(-950902357);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.dv();
      var tmp_3;
      if (false ? true : it_1 === Companion_getInstance().gu_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous>.<anonymous>' call
        var value_1 = ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_1;
        $composer_0.ev(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmpCache_1 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.nu();
      Path$composable($this$Group, tmpCache_1, $composer_0, 14 & $dirty);
      $composer_0.mu(-950902207);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_0.dv();
      var tmp_5;
      if (false ? true : it_2 === Companion_getInstance().gu_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous>.<anonymous>' call
        var value_2 = ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_2;
        $composer_0.ev(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmpCache_2 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_0.nu();
      Path$composable($this$Group, tmpCache_2, $composer_0, 14 & $dirty);
      $composer_0.mu(-950902052);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_0.dv();
      var tmp_7;
      if (false ? true : it_3 === Companion_getInstance().gu_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous>.<anonymous>' call
        var value_3 = ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_3;
        $composer_0.ev(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = it_3;
      }
      var tmp_8 = tmp_7;
      var tmpCache_3 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_0.nu();
      Path$composable($this$Group, tmpCache_3, $composer_0, 14 & $dirty);
      $composer_0.mu(-950901895);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_4 = $composer_0.dv();
      var tmp_9;
      if (false ? true : it_4 === Companion_getInstance().gu_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous>.<anonymous>' call
        var value_4 = ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_4;
        $composer_0.ev(value_4);
        tmp_9 = value_4;
      } else {
        tmp_9 = it_4;
      }
      var tmp_10 = tmp_9;
      var tmpCache_4 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      $composer_0.nu();
      Path$composable($this$Group, tmpCache_4, $composer_0, 14 & $dirty);
      $composer_0.mu(-950901744);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_5 = $composer_0.dv();
      var tmp_11;
      if (false ? true : it_5 === Companion_getInstance().gu_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous>.<anonymous>' call
        var value_5 = ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_5;
        $composer_0.ev(value_5);
        tmp_11 = value_5;
      } else {
        tmp_11 = it_5;
      }
      var tmp_12 = tmp_11;
      var tmpCache_5 = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
      $composer_0.nu();
      Path$composable($this$Group, tmpCache_5, $composer_0, 14 & $dirty);
      $composer_0.mu(-950901592);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_6 = $composer_0.dv();
      var tmp_13;
      if (false ? true : it_6 === Companion_getInstance().gu_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous>.<anonymous>' call
        var value_6 = ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_6;
        $composer_0.ev(value_6);
        tmp_13 = value_6;
      } else {
        tmp_13 = it_6;
      }
      var tmp_14 = tmp_13;
      var tmpCache_6 = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
      $composer_0.nu();
      Path$composable($this$Group, tmpCache_6, $composer_0, 14 & $dirty);
      $composer_0.mu(-950901435);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_7 = $composer_0.dv();
      var tmp_15;
      if (false ? true : it_7 === Companion_getInstance().gu_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-19.<anonymous>.<anonymous>' call
        var value_7 = ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_7;
        $composer_0.ev(value_7);
        tmp_15 = value_7;
      } else {
        tmp_15 = it_7;
      }
      var tmp_16 = tmp_15;
      var tmpCache_7 = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
      $composer_0.nu();
      Path$composable($this$Group, tmpCache_7, $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua($this$Circle) {
    $this$Circle.x2f(12);
    $this$Circle.y2f(12);
    $this$Circle.w2f(5);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_0($this$Path) {
    $this$Path.y2e(ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r($this$d) {
    $this$d.b2f(12, 1);
    $this$d.e2f(2, true);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_1($this$Path) {
    $this$Path.y2e(ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_0);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_0($this$d) {
    $this$d.b2f(12, 21);
    $this$d.e2f(2, true);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_2($this$Path) {
    $this$Path.y2e(ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_1);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_1($this$d) {
    $this$d.b2f(4.22, 4.22);
    $this$d.c2f(1.42, 1.42, true);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_3($this$Path) {
    $this$Path.y2e(ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_2);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_2($this$d) {
    $this$d.b2f(18.36, 18.36);
    $this$d.c2f(1.42, 1.42, true);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_4($this$Path) {
    $this$Path.y2e(ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_3);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_3($this$d) {
    $this$d.b2f(1, 12);
    $this$d.g2f(2, true);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_5($this$Path) {
    $this$Path.y2e(ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_4);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_4($this$d) {
    $this$d.b2f(21, 12);
    $this$d.g2f(2, true);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_6($this$Path) {
    $this$Path.y2e(ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_5);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_5($this$d) {
    $this$d.b2f(4.22, 19.78);
    $this$d.c2f(1.42, -1.42, true);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda_goxuua_7($this$Path) {
    $this$Path.y2e(ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_6);
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_19$lambda$lambda$lambda_m3yw6r_6($this$d) {
    $this$d.b2f(18.36, 5.64);
    $this$d.c2f(1.42, -1.42, true);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.t1t(p0, p1, p2);
    };
  }
  function ComposableSingletons$IconsKt$lambda_20$lambda_hpuotl($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv($this$createIcon) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
      if (isTraceInProgress()) {
        traceEventStart(-1299612222, $dirty, -1, 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-20.<anonymous> (Icons.kt:404)');
      }
      $composer_0.mu(-950902742);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.dv();
      var tmp;
      if (false ? true : it === Companion_getInstance().gu_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$IconsKt.lambda-20.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$IconsKt$lambda_20$lambda$lambda_ylj8l0;
        $composer_0.ev(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.nu();
      Group$composable($this$createIcon, tmpCache, ComposableSingletons$IconsKt_getInstance().n3e_1, $composer_0, 384 | 14 & $dirty, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt$lambda_20$lambda$lambda_ylj8l0($this$Group) {
    $this$Group.e2e(SVGStrokeLineJoin_Round_getInstance());
    $this$Group.d2e(SVGStrokeLineCap_Round_getInstance());
    return Unit_instance;
  }
  function ComposableSingletons$IconsKt() {
    ComposableSingletons$IconsKt_instance = this;
    var tmp = this;
    tmp.v3d_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(187923078, false, ComposableSingletons$IconsKt$lambda_1$lambda_21hevk));
    var tmp_0 = this;
    tmp_0.w3d_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(465018625, false, ComposableSingletons$IconsKt$lambda_2$lambda_qs526n));
    var tmp_1 = this;
    tmp_1.x3d_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(1093309942, false, ComposableSingletons$IconsKt$lambda_3$lambda_ffciqa));
    var tmp_2 = this;
    tmp_2.y3d_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(353353466, false, ComposableSingletons$IconsKt$lambda_4$lambda_de9ybx));
    var tmp_3 = this;
    tmp_3.z3d_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(14879965, false, ComposableSingletons$IconsKt$lambda_5$lambda_st7ml0));
    var tmp_4 = this;
    tmp_4.a3e_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(343641086, false, ComposableSingletons$IconsKt$lambda_6$lambda_euh7));
    var tmp_5 = this;
    tmp_5.b3e_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(-1021140685, false, ComposableSingletons$IconsKt$lambda_7$lambda_su1bje));
    var tmp_6 = this;
    tmp_6.c3e_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(-507764776, false, ComposableSingletons$IconsKt$lambda_8$lambda_ddg9dj));
    var tmp_7 = this;
    tmp_7.d3e_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(-79892645, false, ComposableSingletons$IconsKt$lambda_9$lambda_fg67oo));
    var tmp_8 = this;
    tmp_8.e3e_1 = ComposableLambda$invoke$ref_9(composableLambdaInstance(660186540, false, ComposableSingletons$IconsKt$lambda_10$lambda_c69byu));
    var tmp_9 = this;
    tmp_9.f3e_1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(2025461450, false, ComposableSingletons$IconsKt$lambda_11$lambda_u188y3));
    var tmp_10 = this;
    tmp_10.g3e_1 = ComposableLambda$invoke$ref_11(composableLambdaInstance(1212129518, false, ComposableSingletons$IconsKt$lambda_12$lambda_17lrvw));
    var tmp_11 = this;
    tmp_11.h3e_1 = ComposableLambda$invoke$ref_12(composableLambdaInstance(-769560574, false, ComposableSingletons$IconsKt$lambda_13$lambda_rm0p6b));
    var tmp_12 = this;
    tmp_12.i3e_1 = ComposableLambda$invoke$ref_13(composableLambdaInstance(-725431745, false, ComposableSingletons$IconsKt$lambda_14$lambda_elgvqm));
    var tmp_13 = this;
    tmp_13.j3e_1 = ComposableLambda$invoke$ref_14(composableLambdaInstance(-2035566234, false, ComposableSingletons$IconsKt$lambda_15$lambda_e85lbl));
    var tmp_14 = this;
    tmp_14.k3e_1 = ComposableLambda$invoke$ref_15(composableLambdaInstance(-1115382124, false, ComposableSingletons$IconsKt$lambda_16$lambda_rzbzlc));
    var tmp_15 = this;
    tmp_15.l3e_1 = ComposableLambda$invoke$ref_16(composableLambdaInstance(862240855, false, ComposableSingletons$IconsKt$lambda_17$lambda_uahgv));
    var tmp_16 = this;
    tmp_16.m3e_1 = ComposableLambda$invoke$ref_17(composableLambdaInstance(2069599163, false, ComposableSingletons$IconsKt$lambda_18$lambda_tnwyj2));
    var tmp_17 = this;
    tmp_17.n3e_1 = ComposableLambda$invoke$ref_18(composableLambdaInstance(747380469, false, ComposableSingletons$IconsKt$lambda_19$lambda_cjkmdv));
    var tmp_18 = this;
    tmp_18.o3e_1 = ComposableLambda$invoke$ref_19(composableLambdaInstance(-1299612222, false, ComposableSingletons$IconsKt$lambda_20$lambda_hpuotl));
  }
  var ComposableSingletons$IconsKt_instance;
  function ComposableSingletons$IconsKt_getInstance() {
    if (ComposableSingletons$IconsKt_instance == null)
      new ComposableSingletons$IconsKt();
    return ComposableSingletons$IconsKt_instance;
  }
  function HamburgerIcon$composable$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      HamburgerIcon$composable($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function CloseIcon$composable$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      CloseIcon$composable($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function MoonIcon$composable$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      MoonIcon$composable($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SunIcon$composable$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      SunIcon$composable($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function createIcon$composable$lambda($width, $viewBox, $renderStyle, $attrs) {
    return function ($this$Svg) {
      var tmp0_safe_receiver = $width._v;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        $this$Svg.x2d(tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $viewBox._v;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        $this$Svg.y2d(tmp1_safe_receiver.o2e_1, tmp1_safe_receiver.p2e_1, tmp1_safe_receiver.q2e_1, tmp1_safe_receiver.r2e_1);
      }
      var tmp2_safe_receiver = $renderStyle._v;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.silk.components.icons.createIcon$composable.<anonymous>.<anonymous>' call
        var tmp;
        if (tmp2_safe_receiver instanceof Fill) {
          $this$Svg.w2d(SVGFillType_CurrentColor_getInstance());
          tmp = $this$Svg.u2d(SVGStrokeType_None_getInstance());
        } else {
          if (tmp2_safe_receiver instanceof Stroke) {
            $this$Svg.u2d(SVGStrokeType_CurrentColor_getInstance());
            $this$Svg.w2d(SVGFillType_None_getInstance());
            var tmp1_safe_receiver_0 = tmp2_safe_receiver.p3e_1;
            var tmp_0;
            if (tmp1_safe_receiver_0 == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.let' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'com.varabyte.kobweb.silk.components.icons.createIcon$composable.<anonymous>.<anonymous>.<anonymous>' call
              tmp_0 = $this$Svg.v2d(tmp1_safe_receiver_0);
            }
            tmp = tmp_0;
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      var tmp3_safe_receiver = $attrs._v;
      if (tmp3_safe_receiver == null)
        null;
      else
        tmp3_safe_receiver($this$Svg);
      return Unit_instance;
    };
  }
  function createIcon$composable$lambda_0($viewBox, $width, $renderStyle, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      createIcon$composable($viewBox._v, $width._v, $renderStyle._v, $attrs._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function get_HorizontalDividerStyle() {
    _init_properties_Divider_kt__8b5dnr();
    return HorizontalDividerStyle$delegate.g2a(null, HorizontalDividerStyle$factory());
  }
  var HorizontalDividerStyle$delegate;
  var DividerStyle;
  function get_VerticalDividerStyle() {
    _init_properties_Divider_kt__8b5dnr();
    return VerticalDividerStyle$delegate.g2a(null, VerticalDividerStyle$factory());
  }
  var VerticalDividerStyle$delegate;
  function DividerVars() {
    DividerVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().x29();
    tmp.r3e_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_percent(90);
    tmp_0.s3e_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    this.t3e_1 = 0;
  }
  protoOf(DividerVars).p39 = function () {
    return this.r3e_1.g2a(this, Color$factory_1());
  };
  protoOf(DividerVars).u3e = function () {
    return this.s3e_1.g2a(this, Length$factory());
  };
  var DividerVars_instance;
  function DividerVars_getInstance() {
    if (DividerVars_instance == null)
      new DividerVars();
    return DividerVars_instance;
  }
  function HorizontalDivider$composable(modifier, variant, $composer, $changed, $default) {
    _init_properties_Divider_kt__8b5dnr();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(1553766782);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.fv(variant_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 2) === 0)) {
        variant_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1553766782, $dirty, -1, 'com.varabyte.kobweb.silk.components.layout.HorizontalDivider$composable (Divider.kt:51)');
      }
      Hr$composable(toAttrs(toModifier$composable(get_HorizontalDividerStyle(), [variant_0._v], $composer_0, 0).s2m(modifier_0._v)), $composer_0, 0, 0);
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
      tmp0_safe_receiver.s19(HorizontalDivider$composable$lambda(modifier_0, variant_0, $changed, $default));
    }
  }
  function HorizontalDividerStyle$delegate$lambda($this$base) {
    _init_properties_Divider_kt__8b5dnr();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return width(borderTop(tmp, tmp_0, 'solid', DividerVars_getInstance().p39().x29()), DividerVars_getInstance().u3e().x29());
  }
  function VerticalDividerStyle$delegate$lambda($this$base) {
    _init_properties_Divider_kt__8b5dnr();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return height(borderLeft(tmp, tmp_0, 'solid', DividerVars_getInstance().p39().x29()), DividerVars_getInstance().u3e().x29());
  }
  function HorizontalDivider$composable$lambda($modifier, $variant, $$changed, $$default) {
    return function ($composer, $force) {
      HorizontalDivider$composable($modifier._v, $variant._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function HorizontalDividerStyle$factory() {
    return getPropertyCallableRef('HorizontalDividerStyle', 0, KProperty0, function () {
      return get_HorizontalDividerStyle();
    }, null);
  }
  function VerticalDividerStyle$factory() {
    return getPropertyCallableRef('VerticalDividerStyle', 0, KProperty0, function () {
      return get_VerticalDividerStyle();
    }, null);
  }
  function Color$factory_1() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.p39();
    }, null);
  }
  function Length$factory() {
    return getPropertyCallableRef('Length', 1, KProperty1, function (receiver) {
      return receiver.u3e();
    }, null);
  }
  var properties_initialized_Divider_kt_k1kxcn;
  function _init_properties_Divider_kt__8b5dnr() {
    if (!properties_initialized_Divider_kt_k1kxcn) {
      properties_initialized_Divider_kt_k1kxcn = true;
      var tmp = Companion_instance_5;
      HorizontalDividerStyle$delegate = base(tmp, VOID, 'silk', HorizontalDividerStyle$delegate$lambda);
      DividerStyle = get_HorizontalDividerStyle();
      var tmp_0 = Companion_instance_5;
      VerticalDividerStyle$delegate = base(tmp_0, VOID, 'silk', VerticalDividerStyle$delegate$lambda);
    }
  }
  function get_columnVariables() {
    _init_properties_SimpleGrid_kt__tvipdk();
    return columnVariables;
  }
  var columnVariables;
  function get_SimpleGridStyle() {
    _init_properties_SimpleGrid_kt__tvipdk();
    return SimpleGridStyle$delegate.g2a(null, SimpleGridStyle$factory());
  }
  var SimpleGridStyle$delegate;
  function SimpleGrid$composable(numColumns, modifier, variant, ref, content, $composer, $changed, $default) {
    _init_properties_SimpleGrid_kt__tvipdk();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(199594132);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv(numColumns) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.fv(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.fv(variant_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.fv(ref_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.iv(content) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.ju()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 4) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        ref_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(199594132, $dirty, -1, 'com.varabyte.kobweb.silk.components.layout.SimpleGrid$composable (SimpleGrid.kt:72)');
      }
      var tmp = toAttrs(setVariable_0(setVariable_0(setVariable_0(setVariable_0(setVariable_0(toModifier$composable(get_SimpleGridStyle(), [variant_0._v], $composer_0, 0), getValue(get_columnVariables(), Breakpoint_ZERO_getInstance()), numColumns.u2u_1), getValue(get_columnVariables(), Breakpoint_SM_getInstance()), numColumns.v2u_1), getValue(get_columnVariables(), Breakpoint_MD_getInstance()), numColumns.w2u_1), getValue(get_columnVariables(), Breakpoint_LG_getInstance()), numColumns.x2u_1), getValue(get_columnVariables(), Breakpoint_XL_getInstance()), numColumns.y2u_1).s2m(modifier_0._v));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.layout.SimpleGrid$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, -2129314893, true, SimpleGrid$composable$lambda(ref_0, content));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.mu(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.fv(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.dv();
      var tmp_1;
      if (invalid ? true : it === Companion_getInstance().gu_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.layout.SimpleGrid$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_20(dispatchReceiver);
        $composer_1.ev(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.nu();
      Div$composable(tmp, tmp0, $composer_0, 48, 0);
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
      tmp0_safe_receiver.s19(SimpleGrid$composable$lambda_0(numColumns, modifier_0, variant_0, ref_0, content, $changed, $default));
    }
  }
  function numColumns(base, sm, md, lg, xl) {
    sm = sm === VOID ? base : sm;
    md = md === VOID ? sm : md;
    lg = lg === VOID ? md : lg;
    xl = xl === VOID ? lg : xl;
    _init_properties_SimpleGrid_kt__tvipdk();
    return new ResponsiveValues(base, sm, md, lg, xl);
  }
  function SimpleGridStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_SimpleGrid_kt__tvipdk();
    $this$ComponentStyle.o2r(SimpleGridStyle$delegate$lambda$lambda);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = get_columnVariables().i2().l();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.components.layout.SimpleGridStyle$delegate.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var breakpoint = element.l2();
      // Inline function 'kotlin.collections.component2' call
      var variable = element.m2();
      $this$ComponentStyle.y2p(breakpoint, SimpleGridStyle$delegate$lambda$lambda_0(variable));
    }
    return Unit_instance;
  }
  function SimpleGridStyle$delegate$lambda$lambda() {
    _init_properties_SimpleGrid_kt__tvipdk();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'grid');
  }
  function SimpleGridStyle$delegate$lambda$lambda$lambda$lambda($this$repeat) {
    _init_properties_SimpleGrid_kt__tvipdk();
    $this$repeat.d26(get_fr(1));
    return Unit_instance;
  }
  function SimpleGridStyle$delegate$lambda$lambda$lambda($variable) {
    return function ($this$gridTemplateColumns) {
      var tmp = $variable.x29();
      $this$gridTemplateColumns.x25(tmp, SimpleGridStyle$delegate$lambda$lambda$lambda$lambda);
      return Unit_instance;
    };
  }
  function SimpleGridStyle$delegate$lambda$lambda_0($variable) {
    return function () {
      var tmp = Companion_instance;
      return gridTemplateColumns(tmp, SimpleGridStyle$delegate$lambda$lambda$lambda($variable));
    };
  }
  function SimpleGrid$composable$lambda($ref, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.fv($this$Div) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
        if (isTraceInProgress()) {
          traceEventStart(-2129314893, $dirty, -1, 'com.varabyte.kobweb.silk.components.layout.SimpleGrid$composable.<anonymous> (SimpleGrid.kt:83)');
        }
        registerRefScope$composable($this$Div, $ref._v, $composer_0, 14 & $dirty);
        $content($composer_0, 0);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_instance;
        }
        tmp_0 = tmp_1;
      } else {
        $composer_0.xu();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.t1t(p0, p1, p2);
    };
  }
  function SimpleGrid$composable$lambda_0($numColumns, $modifier, $variant, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      SimpleGrid$composable($numColumns, $modifier._v, $variant._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SimpleGridStyle$factory() {
    return getPropertyCallableRef('SimpleGridStyle', 0, KProperty0, function () {
      return get_SimpleGridStyle();
    }, null);
  }
  var properties_initialized_SimpleGrid_kt_fum19i;
  function _init_properties_SimpleGrid_kt__tvipdk() {
    if (!properties_initialized_SimpleGrid_kt_fum19i) {
      properties_initialized_SimpleGrid_kt_fum19i = true;
      // Inline function 'kotlin.collections.associateWith' call
      var this_0 = get_entries();
      var result = LinkedHashMap_init_$Create$(coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16));
      // Inline function 'kotlin.collections.associateWithTo' call
      var tmp0_iterator = this_0.l();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'com.varabyte.kobweb.silk.components.layout.columnVariables.<anonymous>' call
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = element.r9_1.toLowerCase();
        var tmp$ret$2 = new NumberValue('simple-grid-col-count-' + tmp$ret$1, VOID, 'silk');
        result.j2(element, tmp$ret$2);
      }
      columnVariables = result;
      SimpleGridStyle$delegate = ComponentStyle(VOID, 'silk', SimpleGridStyle$delegate$lambda);
    }
  }
  function get_SurfaceStyle() {
    _init_properties_Surface_kt__8o7unv();
    return SurfaceStyle$delegate.g2a(null, SurfaceStyle$factory());
  }
  var SurfaceStyle$delegate;
  function SurfaceVars() {
    SurfaceVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BackgroundColorVar().x29();
    tmp.v3e_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ColorVar().x29();
    tmp_0.w3e_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    this.x3e_1 = 0;
  }
  protoOf(SurfaceVars).r39 = function () {
    return this.v3e_1.g2a(this, BackgroundColor$factory_0());
  };
  protoOf(SurfaceVars).p39 = function () {
    return this.w3e_1.g2a(this, Color$factory_2());
  };
  var SurfaceVars_instance;
  function SurfaceVars_getInstance() {
    if (SurfaceVars_instance == null)
      new SurfaceVars();
    return SurfaceVars_instance;
  }
  function Surface$composable(modifier, variant, colorModeOverride, contentAlignment, ref, content, $composer, $changed, $default) {
    _init_properties_Surface_kt__8o7unv();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var colorModeOverride_0 = {_v: colorModeOverride};
    var contentAlignment_0 = {_v: contentAlignment};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(1597616078);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.fv(variant_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.fv(colorModeOverride_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.fv(contentAlignment_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.fv(ref_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.iv(content) ? 131072 : 65536);
    if (!(($dirty & 374491) === 74898) ? true : !$composer_0.ju()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 2) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        colorModeOverride_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        contentAlignment_0._v = TopStart_instance;
      }
      if (!(($default & 16) === 0)) {
        ref_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1597616078, $dirty, -1, 'com.varabyte.kobweb.silk.components.layout.Surface$composable (Surface.kt:55)');
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
        // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface$composable.<anonymous>' call
        var value = mutableStateOf(null);
        $composer_1.ev(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.nu();
      var surfaceElement$delegate = tmp0;
      var tmp_1 = toModifier$composable(get_SurfaceStyle(), [variant_0._v], $composer_0, 0).s2m(modifier_0._v);
      var tmp_2 = contentAlignment_0._v;
      $composer_0.mu(345490384);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = !!($composer_0.fv(ref_0._v) | $composer_0.fv(surfaceElement$delegate));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_0.dv();
      var tmp_3;
      if (invalid ? true : it_0 === Companion_getInstance().gu_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface$composable.<anonymous>' call
        var value_0 = Surface$composable$lambda_1(ref_0, surfaceElement$delegate);
        this_0.ev(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmpCache = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.nu();
      var tmp_5 = refScope(tmpCache);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface$composable.<anonymous>' call
      var tmp_6 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_6, 1158565978, true, Surface$composable$lambda_2(colorModeOverride_0, content, surfaceElement$delegate));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.mu(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.fv(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_2.dv();
      var tmp_7;
      if (invalid_0 ? true : it_1 === Companion_getInstance().gu_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface$composable.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_22(dispatchReceiver);
        $composer_2.ev(value_1);
        tmp_7 = value_1;
      } else {
        tmp_7 = it_1;
      }
      var tmp_8 = tmp_7;
      var tmp0_0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_2.nu();
      Box$composable(tmp_1, tmp_2, tmp_5, tmp0_0, $composer_0, 3072 | 112 & $dirty >> 6, 0);
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
      tmp0_safe_receiver.s19(Surface$composable$lambda_3(modifier_0, variant_0, colorModeOverride_0, contentAlignment_0, ref_0, content, $changed, $default));
    }
  }
  function Surface$composable$lambda($surfaceElement$delegate) {
    _init_properties_Surface_kt__8o7unv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('surfaceElement', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $surfaceElement$delegate.m2();
  }
  function Surface$composable$lambda_0($surfaceElement$delegate, value) {
    _init_properties_Surface_kt__8o7unv();
    getLocalDelegateReference('surfaceElement', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $surfaceElement$delegate.up(value);
    return Unit_instance;
  }
  function SurfaceStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Surface_kt__8o7unv();
    $this$ComponentStyle.o2r(SurfaceStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function SurfaceStyle$delegate$lambda$lambda() {
    _init_properties_Surface_kt__8o7unv();
    return color(backgroundColor(Companion_instance, SurfaceVars_getInstance().r39().x29()), SurfaceVars_getInstance().p39().x29());
  }
  function Surface$composable$lambda$lambda($surfaceElement$delegate) {
    return function (it) {
      Surface$composable$lambda_0($surfaceElement$delegate, it);
      return Unit_instance;
    };
  }
  function Surface$composable$lambda_1($ref, $surfaceElement$delegate) {
    return function ($this$refScope) {
      $this$refScope.y2c($ref._v);
      $this$refScope.x2c([], Surface$composable$lambda$lambda($surfaceElement$delegate));
      return Unit_instance;
    };
  }
  function Surface$composable$lambda$lambda$slambda($surfaceElement, $currColorMode, resultContinuation) {
    this.g3f_1 = $surfaceElement;
    this.h3f_1 = $currColorMode;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Surface$composable$lambda$lambda$slambda).k1b = function ($this$LaunchedEffect, $completion) {
    var tmp = this.l1b($this$LaunchedEffect, $completion);
    tmp.sb_1 = Unit_instance;
    tmp.tb_1 = null;
    return tmp.cc();
  };
  protoOf(Surface$composable$lambda$lambda$slambda).oc = function (p1, $completion) {
    return this.k1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Surface$composable$lambda$lambda$slambda).cc = function () {
    var suspendResult = this.sb_1;
    $sm: do
      try {
        var tmp = this.qb_1;
        if (tmp === 0) {
          this.rb_1 = 1;
          setSilkWidgetVariables(this.g3f_1, this.h3f_1);
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.tb_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(Surface$composable$lambda$lambda$slambda).l1b = function ($this$LaunchedEffect, completion) {
    var i = new Surface$composable$lambda$lambda$slambda(this.g3f_1, this.h3f_1, completion);
    i.i3f_1 = $this$LaunchedEffect;
    return i;
  };
  function Surface$composable$lambda$lambda$slambda_0($surfaceElement, $currColorMode, resultContinuation) {
    var i = new Surface$composable$lambda$lambda$slambda($surfaceElement, $currColorMode, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.k1b($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Surface$composable$lambda$lambda_0($surfaceElement, $content, $this_Box) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.ju()) {
        if (isTraceInProgress()) {
          traceEventStart(-314059711, $changed, -1, 'com.varabyte.kobweb.silk.components.layout.Surface$composable.<anonymous>.<anonymous>.<anonymous> (Surface.kt:68)');
        }
        var currColorMode = Companion_instance_6.t2p($composer_0, 6);
        $composer_0.mu(345490796);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!($composer_0.fv($surfaceElement) | $composer_0.fv(currColorMode));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.dv();
        var tmp_0;
        if (invalid ? true : it === Companion_getInstance().gu_1) {
          // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = Surface$composable$lambda$lambda$slambda_0($surfaceElement, currColorMode, null);
          $composer_0.ev(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.nu();
        LaunchedEffect$composable(currColorMode, tmpCache, $composer_0, 0);
        $content($this_Box, $composer_0, 0);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp = tmp_2;
      } else {
        $composer_0.xu();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1) {
      return $boundThis.s14(p0, p1);
    };
  }
  function Surface$composable$lambda_2($colorModeOverride, $content, $surfaceElement$delegate) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.fv($this$Box) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
        if (isTraceInProgress()) {
          traceEventStart(1158565978, $dirty, -1, 'com.varabyte.kobweb.silk.components.layout.Surface$composable.<anonymous> (Surface.kt:65)');
        }
        if (!($colorModeOverride._v == null)) {
          $composer_0.mu(-663072217);
          var tmp0_safe_receiver = Surface$composable$lambda($surfaceElement$delegate);
          var tmp_1;
          if (tmp0_safe_receiver == null) {
            tmp_1 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp_2 = [$colorModeOverride._v.a2x()];
            // Inline function 'kotlin.run' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var tmp_3 = $composer_0;
            var dispatchReceiver = composableLambda(tmp_3, -314059711, true, Surface$composable$lambda$lambda_0(tmp0_safe_receiver, $content, $this$Box));
            // Inline function 'androidx.compose.runtime.remember$composable' call
            var $composer_1 = $composer_0;
            $composer_1.mu(-838505973);
            sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
            // Inline function 'androidx.compose.runtime.cache' call
            var invalid = $composer_1.fv(dispatchReceiver);
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var it = $composer_1.dv();
            var tmp_4;
            if (invalid ? true : it === Companion_getInstance().gu_1) {
              // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              var value = ComposableLambda$invoke$ref_21(dispatchReceiver);
              $composer_1.ev(value);
              tmp_4 = value;
            } else {
              tmp_4 = it;
            }
            var tmp_5 = tmp_4;
            var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
            $composer_1.nu();
            CompositionLocalProvider$composable(tmp_2, tmp0, $composer_0, 48);
            tmp_1 = Unit_instance;
          }
          $composer_0.nu();
        } else {
          $composer_0.mu(-663071792);
          $content($this$Box, $composer_0, 14 & $dirty);
          $composer_0.nu();
        }
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_instance;
        }
        tmp_0 = tmp_6;
      } else {
        $composer_0.xu();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_22($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.t1t(p0, p1, p2);
    };
  }
  function Surface$composable$lambda_3($modifier, $variant, $colorModeOverride, $contentAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Surface$composable($modifier._v, $variant._v, $colorModeOverride._v, $contentAlignment._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SurfaceStyle$factory() {
    return getPropertyCallableRef('SurfaceStyle', 0, KProperty0, function () {
      return get_SurfaceStyle();
    }, null);
  }
  function BackgroundColor$factory_0() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.r39();
    }, null);
  }
  function Color$factory_2() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.p39();
    }, null);
  }
  var properties_initialized_Surface_kt_k203pf;
  function _init_properties_Surface_kt__8o7unv() {
    if (!properties_initialized_Surface_kt_k203pf) {
      properties_initialized_Surface_kt_k203pf = true;
      SurfaceStyle$delegate = ComponentStyle(VOID, 'silk', SurfaceStyle$delegate$lambda);
    }
  }
  function get_OverlayStyle() {
    _init_properties_Overlay_kt__p5agwu();
    return OverlayStyle$delegate.g2a(null, OverlayStyle$factory());
  }
  var OverlayStyle$delegate;
  function OverlayVars() {
    OverlayVars_instance = this;
    this.j3f_1 = StyleVariable('silk');
    this.k3f_1 = 0;
  }
  protoOf(OverlayVars).r39 = function () {
    return this.j3f_1.g2a(this, BackgroundColor$factory_1());
  };
  var OverlayVars_instance;
  function OverlayVars_getInstance() {
    if (OverlayVars_instance == null)
      new OverlayVars();
    return OverlayVars_instance;
  }
  function Overlay$composable(modifier, variant, contentAlignment, ref, content, $composer, $changed, $default) {
    _init_properties_Overlay_kt__p5agwu();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var contentAlignment_0 = {_v: contentAlignment};
    var ref_0 = {_v: ref};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(309810595);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.fv(variant_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.fv(contentAlignment_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.fv(ref_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.iv(content_0._v) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.ju()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 2) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        contentAlignment_0._v = TopCenter_instance;
      }
      if (!(($default & 8) === 0)) {
        ref_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        content_0._v = ComposableSingletons$OverlayKt_getInstance().l3f_1;
      }
      if (isTraceInProgress()) {
        traceEventStart(309810595, $dirty, -1, 'com.varabyte.kobweb.silk.components.overlay.Overlay$composable (Overlay.kt:57)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.Overlay$composable.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 228061525, true, Overlay$composable$lambda(variant_0, modifier_0, contentAlignment_0, ref_0, content_0));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.mu(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.fv(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.dv();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance().gu_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.Overlay$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_24(dispatchReceiver);
        $composer_1.ev(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.nu();
      deferRender$composable(tmp0, $composer_0, 6);
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
      tmp0_safe_receiver.s19(Overlay$composable$lambda_0(modifier_0, variant_0, contentAlignment_0, ref_0, content_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.t1t(p0, p1, p2);
    };
  }
  function ComposableSingletons$OverlayKt$lambda_1$lambda_mpnfty($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.ju()) {
      if (isTraceInProgress()) {
        traceEventStart(1721412430, $changed, -1, 'com.varabyte.kobweb.silk.components.overlay.ComposableSingletons$OverlayKt.lambda-1.<anonymous> (Overlay.kt:56)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    return Unit_instance;
  }
  function ComposableSingletons$OverlayKt() {
    ComposableSingletons$OverlayKt_instance = this;
    var tmp = this;
    tmp.l3f_1 = ComposableLambda$invoke$ref_23(composableLambdaInstance(1721412430, false, ComposableSingletons$OverlayKt$lambda_1$lambda_mpnfty));
  }
  var ComposableSingletons$OverlayKt_instance;
  function ComposableSingletons$OverlayKt_getInstance() {
    if (ComposableSingletons$OverlayKt_instance == null)
      new ComposableSingletons$OverlayKt();
    return ComposableSingletons$OverlayKt_instance;
  }
  function OverlayStyle$delegate$lambda($this$base) {
    _init_properties_Overlay_kt__p5agwu();
    return backgroundColor(Companion_instance, OverlayVars_getInstance().r39().x29());
  }
  function Overlay$composable$lambda($variant, $modifier, $contentAlignment, $ref, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.ju()) {
        if (isTraceInProgress()) {
          traceEventStart(228061525, $changed, -1, 'com.varabyte.kobweb.silk.components.overlay.Overlay$composable.<anonymous> (Overlay.kt:59)');
        }
        var tmp_0 = toModifier$composable(get_OverlayStyle(), [$variant._v], $composer_0, 0);
        // Inline function 'org.jetbrains.compose.web.css.Companion.Fixed' call
        // Inline function 'org.jetbrains.compose.web.css.Position' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        Box$composable(right(left(bottom(top(position(tmp_0, 'fixed'), get_px(0)), get_px(0)), get_px(0)), get_px(0)).s2m($modifier._v), $contentAlignment._v, $ref._v, $content._v, $composer_0, 0, 0);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_instance;
        }
        tmp = tmp_1;
      } else {
        $composer_0.xu();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1) {
      return $boundThis.s14(p0, p1);
    };
  }
  function Overlay$composable$lambda_0($modifier, $variant, $contentAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Overlay$composable($modifier._v, $variant._v, $contentAlignment._v, $ref._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function OverlayStyle$factory() {
    return getPropertyCallableRef('OverlayStyle', 0, KProperty0, function () {
      return get_OverlayStyle();
    }, null);
  }
  function BackgroundColor$factory_1() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.r39();
    }, null);
  }
  var properties_initialized_Overlay_kt_mvmds0;
  function _init_properties_Overlay_kt__p5agwu() {
    if (!properties_initialized_Overlay_kt_mvmds0) {
      properties_initialized_Overlay_kt_mvmds0 = true;
      var tmp = Companion_instance_5;
      OverlayStyle$delegate = base(tmp, VOID, 'silk', OverlayStyle$delegate$lambda);
    }
  }
  function get_PopupStyle() {
    _init_properties_Popup_kt__lluomy();
    return PopupStyle$delegate.g2a(null, PopupStyle$factory());
  }
  var PopupStyle$delegate;
  function PopupVars() {
    PopupVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = TransitionDurationVars_getInstance().n3d().x29();
    tmp.m3f_1 = StyleVariable_1(tmp0_defaultFallback, 'silk');
    this.n3f_1 = 0;
  }
  protoOf(PopupVars).c3c = function () {
    return this.m3f_1.g2a(this, TransitionDuration$factory_1());
  };
  var PopupVars_instance;
  function PopupVars_getInstance() {
    if (PopupVars_instance == null)
      new PopupVars();
    return PopupVars_instance;
  }
  function PopupStyle$delegate$lambda($this$base) {
    _init_properties_Popup_kt__lluomy();
    return transition(Companion_instance, [CSSTransition_init_$Create$('opacity', PopupVars_getInstance().c3c().x29())]);
  }
  function PopupStyle$factory() {
    return getPropertyCallableRef('PopupStyle', 0, KProperty0, function () {
      return get_PopupStyle();
    }, null);
  }
  function TransitionDuration$factory_1() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.c3c();
    }, null);
  }
  var properties_initialized_Popup_kt_wwy6qs;
  function _init_properties_Popup_kt__lluomy() {
    if (!properties_initialized_Popup_kt_wwy6qs) {
      properties_initialized_Popup_kt_wwy6qs = true;
      var tmp = Companion_instance_5;
      PopupStyle$delegate = base(tmp, VOID, 'silk', PopupStyle$delegate$lambda);
    }
  }
  function get_TRIANGLE_WIDTH() {
    _init_properties_Tooltip_kt__palx2n();
    return TRIANGLE_WIDTH;
  }
  var TRIANGLE_WIDTH;
  function get_TRIANGLE_WIDTH_2X() {
    _init_properties_Tooltip_kt__palx2n();
    return TRIANGLE_WIDTH_2X;
  }
  var TRIANGLE_WIDTH_2X;
  function get_TooltipStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipStyle$delegate.g2a(null, TooltipStyle$factory());
  }
  var TooltipStyle$delegate;
  function get_TooltipArrowStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipArrowStyle$delegate.g2a(null, TooltipArrowStyle$factory());
  }
  var TooltipArrowStyle$delegate;
  function get_TopLeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopLeftTooltipArrowVariant$delegate.g2a(null, TopLeftTooltipArrowVariant$factory());
  }
  var TopLeftTooltipArrowVariant$delegate;
  function get_TopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopTooltipArrowVariant$delegate.g2a(null, TopTooltipArrowVariant$factory());
  }
  var TopTooltipArrowVariant$delegate;
  function get_TopRightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopRightTooltipArrowVariant$delegate.g2a(null, TopRightTooltipArrowVariant$factory());
  }
  var TopRightTooltipArrowVariant$delegate;
  function get_LeftTopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftTopTooltipArrowVariant$delegate.g2a(null, LeftTopTooltipArrowVariant$factory());
  }
  var LeftTopTooltipArrowVariant$delegate;
  function get_LeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftTooltipArrowVariant$delegate.g2a(null, LeftTooltipArrowVariant$factory());
  }
  var LeftTooltipArrowVariant$delegate;
  function get_LeftBottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftBottomTooltipArrowVariant$delegate.g2a(null, LeftBottomTooltipArrowVariant$factory());
  }
  var LeftBottomTooltipArrowVariant$delegate;
  function get_RightTopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightTopTooltipArrowVariant$delegate.g2a(null, RightTopTooltipArrowVariant$factory());
  }
  var RightTopTooltipArrowVariant$delegate;
  function get_RightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightTooltipArrowVariant$delegate.g2a(null, RightTooltipArrowVariant$factory());
  }
  var RightTooltipArrowVariant$delegate;
  function get_RightBottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightBottomTooltipArrowVariant$delegate.g2a(null, RightBottomTooltipArrowVariant$factory());
  }
  var RightBottomTooltipArrowVariant$delegate;
  function get_BottomLeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomLeftTooltipArrowVariant$delegate.g2a(null, BottomLeftTooltipArrowVariant$factory());
  }
  var BottomLeftTooltipArrowVariant$delegate;
  function get_BottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomTooltipArrowVariant$delegate.g2a(null, BottomTooltipArrowVariant$factory());
  }
  var BottomTooltipArrowVariant$delegate;
  function get_BottomRightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomRightTooltipArrowVariant$delegate.g2a(null, BottomRightTooltipArrowVariant$factory());
  }
  var BottomRightTooltipArrowVariant$delegate;
  function get_TooltipTextContainerStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipTextContainerStyle;
  }
  var TooltipTextContainerStyle;
  function TooltipVars() {
    TooltipVars_instance = this;
    this.o3f_1 = StyleVariable('silk');
    this.p3f_1 = StyleVariable('silk');
    this.q3f_1 = 0;
  }
  protoOf(TooltipVars).r39 = function () {
    return this.o3f_1.g2a(this, BackgroundColor$factory_2());
  };
  protoOf(TooltipVars).p39 = function () {
    return this.p3f_1.g2a(this, Color$factory_3());
  };
  var TooltipVars_instance;
  function TooltipVars_getInstance() {
    if (TooltipVars_instance == null)
      new TooltipVars();
    return TooltipVars_instance;
  }
  function triangleDown(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleDown$lambda(color));
  }
  function triangleLeft(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleLeft$lambda(color));
  }
  function triangleRight(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleRight$lambda(color));
  }
  function triangleUp(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleUp$lambda(color));
  }
  function TooltipStyle$delegate$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return borderRadius(color(backgroundColor(position(tmp, tmp$ret$3), TooltipVars_getInstance().r39().x29()), TooltipVars_getInstance().p39().x29()), get_px(6));
  }
  function TooltipArrowStyle$delegate$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'absolute';
    var tmp_0 = position(tmp, tmp$ret$3);
    return border(tmp_0, TooltipArrowStyle$delegate$lambda$lambda);
  }
  function TooltipArrowStyle$delegate$lambda$lambda($this$border) {
    _init_properties_Tooltip_kt__palx2n();
    $this$border.o2o(get_TRIANGLE_WIDTH());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    $this$border.n2o('solid');
    return Unit_instance;
  }
  function TopLeftTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = get_TRIANGLE_WIDTH_2X();
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(margin_1(Companion_instance, tmp2_top, VOID, VOID, tmp1_left), get_px(0)), TooltipVars_getInstance().r39().x29());
  }
  function TopTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(left(margin_1(Companion_instance, tmp2_top, VOID, VOID, tmp1_left), get_percent(50)), get_px(0)), TooltipVars_getInstance().r39().x29());
  }
  function TopRightTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_right = get_TRIANGLE_WIDTH_2X();
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(right(margin_1(Companion_instance, tmp2_top, tmp1_right), get_px(0)), get_px(0)), TooltipVars_getInstance().r39().x29());
  }
  function LeftTopTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin_1(Companion_instance, get_TRIANGLE_WIDTH_2X(), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().r39().x29());
  }
  function LeftTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin_1(Companion_instance, unaryMinus(get_TRIANGLE_WIDTH()), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), TooltipVars_getInstance().r39().x29());
  }
  function LeftBottomTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(bottom(left(margin_1(Companion_instance, VOID, VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().r39().x29());
  }
  function RightTopTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin_1(Companion_instance, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().r39().x29());
  }
  function RightTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin_1(Companion_instance, unaryMinus(get_TRIANGLE_WIDTH()), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), TooltipVars_getInstance().r39().x29());
  }
  function RightBottomTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_bottom = get_TRIANGLE_WIDTH_2X();
    var tmp2_right = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleRight(bottom(right(margin_1(Companion_instance, VOID, tmp2_right, tmp1_bottom), get_px(0)), get_px(0)), TooltipVars_getInstance().r39().x29());
  }
  function BottomLeftTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = get_TRIANGLE_WIDTH_2X();
    var tmp2_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin_1(Companion_instance, VOID, VOID, tmp2_bottom, tmp1_left), get_px(0)), get_px(0)), TooltipVars_getInstance().r39().x29());
  }
  function BottomTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp2_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin_1(Companion_instance, VOID, VOID, tmp2_bottom, tmp1_left), get_percent(50)), get_px(0)), TooltipVars_getInstance().r39().x29());
  }
  function BottomRightTooltipArrowVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleUp(bottom(right(margin_1(Companion_instance, VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().r39().x29());
  }
  function TooltipTextContainerStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    return padding(Companion_instance, get_px(5));
  }
  function triangleDown$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.e1y('border-color', 'transparent transparent ' + $color + ' transparent');
      return Unit_instance;
    };
  }
  function triangleLeft$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.e1y('border-color', 'transparent ' + $color + ' transparent transparent');
      return Unit_instance;
    };
  }
  function triangleRight$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.e1y('border-color', 'transparent transparent transparent ' + $color);
      return Unit_instance;
    };
  }
  function triangleUp$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.e1y('border-color', '' + $color + ' transparent transparent transparent');
      return Unit_instance;
    };
  }
  function TooltipStyle$factory() {
    return getPropertyCallableRef('TooltipStyle', 0, KProperty0, function () {
      return get_TooltipStyle();
    }, null);
  }
  function TooltipArrowStyle$factory() {
    return getPropertyCallableRef('TooltipArrowStyle', 0, KProperty0, function () {
      return get_TooltipArrowStyle();
    }, null);
  }
  function TopLeftTooltipArrowVariant$factory() {
    return getPropertyCallableRef('TopLeftTooltipArrowVariant', 0, KProperty0, function () {
      return get_TopLeftTooltipArrowVariant();
    }, null);
  }
  function TopTooltipArrowVariant$factory() {
    return getPropertyCallableRef('TopTooltipArrowVariant', 0, KProperty0, function () {
      return get_TopTooltipArrowVariant();
    }, null);
  }
  function TopRightTooltipArrowVariant$factory() {
    return getPropertyCallableRef('TopRightTooltipArrowVariant', 0, KProperty0, function () {
      return get_TopRightTooltipArrowVariant();
    }, null);
  }
  function LeftTopTooltipArrowVariant$factory() {
    return getPropertyCallableRef('LeftTopTooltipArrowVariant', 0, KProperty0, function () {
      return get_LeftTopTooltipArrowVariant();
    }, null);
  }
  function LeftTooltipArrowVariant$factory() {
    return getPropertyCallableRef('LeftTooltipArrowVariant', 0, KProperty0, function () {
      return get_LeftTooltipArrowVariant();
    }, null);
  }
  function LeftBottomTooltipArrowVariant$factory() {
    return getPropertyCallableRef('LeftBottomTooltipArrowVariant', 0, KProperty0, function () {
      return get_LeftBottomTooltipArrowVariant();
    }, null);
  }
  function RightTopTooltipArrowVariant$factory() {
    return getPropertyCallableRef('RightTopTooltipArrowVariant', 0, KProperty0, function () {
      return get_RightTopTooltipArrowVariant();
    }, null);
  }
  function RightTooltipArrowVariant$factory() {
    return getPropertyCallableRef('RightTooltipArrowVariant', 0, KProperty0, function () {
      return get_RightTooltipArrowVariant();
    }, null);
  }
  function RightBottomTooltipArrowVariant$factory() {
    return getPropertyCallableRef('RightBottomTooltipArrowVariant', 0, KProperty0, function () {
      return get_RightBottomTooltipArrowVariant();
    }, null);
  }
  function BottomLeftTooltipArrowVariant$factory() {
    return getPropertyCallableRef('BottomLeftTooltipArrowVariant', 0, KProperty0, function () {
      return get_BottomLeftTooltipArrowVariant();
    }, null);
  }
  function BottomTooltipArrowVariant$factory() {
    return getPropertyCallableRef('BottomTooltipArrowVariant', 0, KProperty0, function () {
      return get_BottomTooltipArrowVariant();
    }, null);
  }
  function BottomRightTooltipArrowVariant$factory() {
    return getPropertyCallableRef('BottomRightTooltipArrowVariant', 0, KProperty0, function () {
      return get_BottomRightTooltipArrowVariant();
    }, null);
  }
  function BackgroundColor$factory_2() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.r39();
    }, null);
  }
  function Color$factory_3() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.p39();
    }, null);
  }
  var properties_initialized_Tooltip_kt_68t07n;
  function _init_properties_Tooltip_kt__palx2n() {
    if (!properties_initialized_Tooltip_kt_68t07n) {
      properties_initialized_Tooltip_kt_68t07n = true;
      TRIANGLE_WIDTH = get_px(5);
      TRIANGLE_WIDTH_2X = get_px(9);
      var tmp = Companion_instance_5;
      TooltipStyle$delegate = base(tmp, VOID, 'silk', TooltipStyle$delegate$lambda);
      var tmp_0 = Companion_instance_5;
      TooltipArrowStyle$delegate = base(tmp_0, VOID, 'silk', TooltipArrowStyle$delegate$lambda);
      var tmp_1 = get_TooltipArrowStyle();
      TopLeftTooltipArrowVariant$delegate = addVariantBase(tmp_1, VOID, TopLeftTooltipArrowVariant$delegate$lambda);
      var tmp_2 = get_TooltipArrowStyle();
      TopTooltipArrowVariant$delegate = addVariantBase(tmp_2, VOID, TopTooltipArrowVariant$delegate$lambda);
      var tmp_3 = get_TooltipArrowStyle();
      TopRightTooltipArrowVariant$delegate = addVariantBase(tmp_3, VOID, TopRightTooltipArrowVariant$delegate$lambda);
      var tmp_4 = get_TooltipArrowStyle();
      LeftTopTooltipArrowVariant$delegate = addVariantBase(tmp_4, VOID, LeftTopTooltipArrowVariant$delegate$lambda);
      var tmp_5 = get_TooltipArrowStyle();
      LeftTooltipArrowVariant$delegate = addVariantBase(tmp_5, VOID, LeftTooltipArrowVariant$delegate$lambda);
      var tmp_6 = get_TooltipArrowStyle();
      LeftBottomTooltipArrowVariant$delegate = addVariantBase(tmp_6, VOID, LeftBottomTooltipArrowVariant$delegate$lambda);
      var tmp_7 = get_TooltipArrowStyle();
      RightTopTooltipArrowVariant$delegate = addVariantBase(tmp_7, VOID, RightTopTooltipArrowVariant$delegate$lambda);
      var tmp_8 = get_TooltipArrowStyle();
      RightTooltipArrowVariant$delegate = addVariantBase(tmp_8, VOID, RightTooltipArrowVariant$delegate$lambda);
      var tmp_9 = get_TooltipArrowStyle();
      RightBottomTooltipArrowVariant$delegate = addVariantBase(tmp_9, VOID, RightBottomTooltipArrowVariant$delegate$lambda);
      var tmp_10 = get_TooltipArrowStyle();
      BottomLeftTooltipArrowVariant$delegate = addVariantBase(tmp_10, VOID, BottomLeftTooltipArrowVariant$delegate$lambda);
      var tmp_11 = get_TooltipArrowStyle();
      BottomTooltipArrowVariant$delegate = addVariantBase(tmp_11, VOID, BottomTooltipArrowVariant$delegate$lambda);
      var tmp_12 = get_TooltipArrowStyle();
      BottomRightTooltipArrowVariant$delegate = addVariantBase(tmp_12, VOID, BottomRightTooltipArrowVariant$delegate$lambda);
      var tmp_13 = Companion_instance_5;
      TooltipTextContainerStyle = base_0(tmp_13, 'tooltip-text', VOID, TooltipTextContainerStyle$lambda);
    }
  }
  function get_DisabledStyle() {
    _init_properties_CommonStyles_kt__a7wisz();
    return DisabledStyle$delegate.g2a(null, DisabledStyle$factory());
  }
  var DisabledStyle$delegate;
  function get_SmoothColorTransitionDurationVar() {
    _init_properties_CommonStyles_kt__a7wisz();
    return SmoothColorTransitionDurationVar$delegate.g2a(null, SmoothColorTransitionDurationVar$factory());
  }
  var SmoothColorTransitionDurationVar$delegate;
  function get_SmoothColorStyle() {
    _init_properties_CommonStyles_kt__a7wisz();
    return SmoothColorStyle$delegate.g2a(null, SmoothColorStyle$factory());
  }
  var SmoothColorStyle$delegate;
  function DisabledStyle$delegate$lambda($composer, $changed) {
    _init_properties_CommonStyles_kt__a7wisz();
    var $composer_0 = $composer;
    $composer_0.mu(1529746738);
    if (isTraceInProgress()) {
      traceEventStart(1529746738, $changed, -1, 'com.varabyte.kobweb.silk.components.style.common.DisabledStyle$delegate.<anonymous> (CommonStyles.kt:17)');
    }
    var tmp0 = tabIndex(ariaDisabled(Companion_instance), -1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.nu();
    return tmp0;
  }
  function DisabledStyle$delegate$lambda_0($this$base) {
    _init_properties_CommonStyles_kt__a7wisz();
    return cursor(opacity(Companion_instance, 0.5), Companion_instance_1.b25());
  }
  function SmoothColorStyle$delegate$lambda($this$base) {
    _init_properties_CommonStyles_kt__a7wisz();
    return transition(Companion_instance, [CSSTransition_init_$Create$('background-color', get_SmoothColorTransitionDurationVar().x29())]);
  }
  function DisabledStyle$factory() {
    return getPropertyCallableRef('DisabledStyle', 0, KProperty0, function () {
      return get_DisabledStyle();
    }, null);
  }
  function SmoothColorTransitionDurationVar$factory() {
    return getPropertyCallableRef('SmoothColorTransitionDurationVar', 0, KProperty0, function () {
      return get_SmoothColorTransitionDurationVar();
    }, null);
  }
  function SmoothColorStyle$factory() {
    return getPropertyCallableRef('SmoothColorStyle', 0, KProperty0, function () {
      return get_SmoothColorStyle();
    }, null);
  }
  var properties_initialized_CommonStyles_kt_zd2b1t;
  function _init_properties_CommonStyles_kt__a7wisz() {
    if (!properties_initialized_CommonStyles_kt_zd2b1t) {
      properties_initialized_CommonStyles_kt_zd2b1t = true;
      var tmp = Companion_instance_5;
      var tmp_0 = DisabledStyle$delegate$lambda;
      DisabledStyle$delegate = base$composable(tmp, tmp_0, 'silk', DisabledStyle$delegate$lambda_0);
      var tmp0_defaultFallback = TransitionDurationVars_getInstance().j24().x29();
      SmoothColorTransitionDurationVar$delegate = StyleVariable_1(tmp0_defaultFallback, 'silk');
      var tmp_1 = Companion_instance_5;
      SmoothColorStyle$delegate = base(tmp_1, VOID, 'silk', SmoothColorStyle$delegate$lambda);
    }
  }
  function TransitionDurationVars() {
    TransitionDurationVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_ms(0);
    tmp.g39_1 = StyleVariable_1(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ms(50);
    tmp_0.h39_1 = StyleVariable_1(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_ms(100);
    tmp_1.i39_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_ms(150);
    tmp_2.j39_1 = StyleVariable_1(tmp0_defaultFallback_2, 'silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_ms(200);
    tmp_3.k39_1 = StyleVariable_1(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_ms(300);
    tmp_4.l39_1 = StyleVariable_1(tmp0_defaultFallback_4, 'silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = get_ms(400);
    tmp_5.m39_1 = StyleVariable_1(tmp0_defaultFallback_5, 'silk');
    var tmp_6 = this;
    var tmp0_defaultFallback_6 = get_ms(500);
    tmp_6.n39_1 = StyleVariable_1(tmp0_defaultFallback_6, 'silk');
    this.o39_1 = 0;
  }
  protoOf(TransitionDurationVars).q3b = function () {
    return this.i39_1.g2a(this, VeryFast$factory());
  };
  protoOf(TransitionDurationVars).n3d = function () {
    return this.j39_1.g2a(this, Fast$factory());
  };
  protoOf(TransitionDurationVars).j24 = function () {
    return this.k39_1.g2a(this, Normal$factory());
  };
  var TransitionDurationVars_instance;
  function TransitionDurationVars_getInstance() {
    if (TransitionDurationVars_instance == null)
      new TransitionDurationVars();
    return TransitionDurationVars_instance;
  }
  function VeryFast$factory() {
    return getPropertyCallableRef('VeryFast', 1, KProperty1, function (receiver) {
      return receiver.q3b();
    }, null);
  }
  function Fast$factory() {
    return getPropertyCallableRef('Fast', 1, KProperty1, function (receiver) {
      return receiver.n3d();
    }, null);
  }
  function Normal$factory() {
    return getPropertyCallableRef('Normal', 1, KProperty1, function (receiver) {
      return receiver.j24();
    }, null);
  }
  function get_BackgroundColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return BackgroundColorVar$delegate.g2a(null, BackgroundColorVar$factory());
  }
  var BackgroundColorVar$delegate;
  function get_ColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return ColorVar$delegate.g2a(null, ColorVar$factory());
  }
  var ColorVar$delegate;
  function get_BorderColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return BorderColorVar$delegate.g2a(null, BorderColorVar$factory());
  }
  var BorderColorVar$delegate;
  function get_FocusOutlineColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return FocusOutlineColorVar$delegate.g2a(null, FocusOutlineColorVar$factory());
  }
  var FocusOutlineColorVar$delegate;
  function get_PlaceholderOpacityVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return PlaceholderOpacityVar$delegate.g2a(null, PlaceholderOpacityVar$factory());
  }
  var PlaceholderOpacityVar$delegate;
  function get_PlaceholderColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return PlaceholderColorVar$delegate.g2a(null, PlaceholderColorVar$factory());
  }
  var PlaceholderColorVar$delegate;
  function BackgroundColorVar$factory() {
    return getPropertyCallableRef('BackgroundColorVar', 0, KProperty0, function () {
      return get_BackgroundColorVar();
    }, null);
  }
  function ColorVar$factory() {
    return getPropertyCallableRef('ColorVar', 0, KProperty0, function () {
      return get_ColorVar();
    }, null);
  }
  function BorderColorVar$factory() {
    return getPropertyCallableRef('BorderColorVar', 0, KProperty0, function () {
      return get_BorderColorVar();
    }, null);
  }
  function FocusOutlineColorVar$factory() {
    return getPropertyCallableRef('FocusOutlineColorVar', 0, KProperty0, function () {
      return get_FocusOutlineColorVar();
    }, null);
  }
  function PlaceholderOpacityVar$factory() {
    return getPropertyCallableRef('PlaceholderOpacityVar', 0, KProperty0, function () {
      return get_PlaceholderOpacityVar();
    }, null);
  }
  function PlaceholderColorVar$factory() {
    return getPropertyCallableRef('PlaceholderColorVar', 0, KProperty0, function () {
      return get_PlaceholderColorVar();
    }, null);
  }
  var properties_initialized_ColorVars_kt_3y5hvl;
  function _init_properties_ColorVars_kt__w8x7ib() {
    if (!properties_initialized_ColorVars_kt_3y5hvl) {
      properties_initialized_ColorVars_kt_3y5hvl = true;
      BackgroundColorVar$delegate = StyleVariable('silk');
      ColorVar$delegate = StyleVariable('silk');
      BorderColorVar$delegate = StyleVariable('silk');
      FocusOutlineColorVar$delegate = StyleVariable('silk');
      PlaceholderOpacityVar$delegate = StyleVariable_2(1.0, 'silk');
      PlaceholderColorVar$delegate = StyleVariable('silk');
    }
  }
  function FontSizeVars() {
    FontSizeVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_cssRem(0.75);
    tmp.s3a_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.875);
    tmp_0.t3a_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(1);
    tmp_1.u3a_1 = StyleVariable_0(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(1.125);
    tmp_2.v3a_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
    this.w3a_1 = 0;
  }
  protoOf(FontSizeVars).x3a = function () {
    return this.u3a_1.g2a(this, MD$factory());
  };
  var FontSizeVars_instance;
  function FontSizeVars_getInstance() {
    if (FontSizeVars_instance == null)
      new FontSizeVars();
    return FontSizeVars_instance;
  }
  function MD$factory() {
    return getPropertyCallableRef('MD', 1, KProperty1, function (receiver) {
      return receiver.x3a();
    }, null);
  }
  function get_DivTextStyle() {
    _init_properties_DivText_kt__50pfx0();
    return DivTextStyle$delegate.g2a(null, DivTextStyle$factory());
  }
  var DivTextStyle$delegate;
  function DivTextStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_DivText_kt__50pfx0();
    return Unit_instance;
  }
  function DivTextStyle$factory() {
    return getPropertyCallableRef('DivTextStyle', 0, KProperty0, function () {
      return get_DivTextStyle();
    }, null);
  }
  var properties_initialized_DivText_kt_3artse;
  function _init_properties_DivText_kt__50pfx0() {
    if (!properties_initialized_DivText_kt_3artse) {
      properties_initialized_DivText_kt_3artse = true;
      DivTextStyle$delegate = ComponentStyle(VOID, 'silk', DivTextStyle$delegate$lambda);
    }
  }
  function get_SilkColorsStyle() {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    return SilkColorsStyle$delegate.g2a(null, SilkColorsStyle$factory());
  }
  var SilkColorsStyle$delegate;
  function initSilkWidgets(ctx) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var mutableTheme = ctx.n2v_1;
    // Inline function 'kotlin.apply' call
    var this_0 = ctx.n2v_1.v2v_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgets.<anonymous>' call
    var focusOutline = ColorSchemes_getInstance().g35_1.o2x().q2n().p2n(VOID, VOID, VOID, 0.5);
    var placeholder = ColorSchemes_getInstance().s35_1.o2x();
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var color = Colors_instance.v2n();
    set_background(this_0.v35_1, Colors_instance.i2o());
    set_color(this_0.v35_1, color);
    set_border(this_0.v35_1, color.p2n(VOID, VOID, VOID, 0.2));
    set_focusOutline(this_0.v35_1, focusOutline);
    set_overlay(this_0.v35_1, color.p2n(VOID, VOID, VOID, 0.5));
    set_placeholder(this_0.v35_1, placeholder);
    var buttonBase = Colors_instance.i2o().m2n(0.2);
    (new MutableButton(this_0.v35_1)).z3f(buttonBase, buttonBase.m2n(0.2), Colors_instance.x2n(), buttonBase.m2n(0.4));
    (new MutableCheckbox(this_0.v35_1)).h3g(ColorSchemes_getInstance().g35_1.o2x(), ColorSchemes_getInstance().g35_1.p2x(), Colors_instance.i2o());
    var inputFilled = ColorSchemes_getInstance().s35_1.l2x();
    var tmp0_$this = new MutableInput(this_0.v35_1);
    var tmp1_filledFocus = Colors_instance.u2n();
    var tmp2_hoveredBorder = ColorSchemes_getInstance().s35_1.o2x();
    var tmp3_invalidBorder = ColorSchemes_getInstance().b35_1.r2x();
    var tmp4_filledHover = inputFilled.m2n(0.1);
    tmp0_$this.r3g(tmp2_hoveredBorder, tmp3_invalidBorder, inputFilled, tmp4_filledHover, tmp1_filledFocus);
    var tmp5_$this = new MutableSwitch(this_0.v35_1);
    var tmp6_thumb = Colors_instance.i2o();
    var tmp7_backgroundOn = Colors_instance.c2o();
    var tmp8_backgroundOff = Colors_instance.e2o();
    tmp5_$this.h3g(tmp7_backgroundOn, tmp8_backgroundOff, tmp6_thumb);
    (new MutableTab(this_0.v35_1)).l3h(Colors_instance.v2n(), Colors_instance.i2o(), Colors_instance.x2n(), VOID, VOID, Colors_instance.e2o(), Colors_instance.j2o(), Colors_instance.i2o());
    (new MutableTooltip(this_0.v35_1)).s3h(get_color_0(this_0.v35_1), get_background_0(this_0.v35_1));
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var color_0 = Colors_instance.i2o();
    set_background(this_0.w35_1, Colors_instance.v2n());
    set_color(this_0.w35_1, color_0);
    set_border(this_0.w35_1, color_0.p2n(VOID, VOID, VOID, 0.2));
    set_focusOutline(this_0.w35_1, focusOutline);
    set_overlay(this_0.w35_1, color_0.p2n(VOID, VOID, VOID, 0.5));
    set_placeholder(this_0.w35_1, placeholder);
    var buttonBase_0 = lightened(Colors_instance.v2n(), 0.2);
    (new MutableButton(this_0.w35_1)).z3f(buttonBase_0, lightened(buttonBase_0, 0.2), Colors_instance.f2o(), lightened(buttonBase_0, 0.4));
    (new MutableCheckbox(this_0.w35_1)).h3g(ColorSchemes_getInstance().g35_1.l2x(), ColorSchemes_getInstance().g35_1.m2x(), Colors_instance.v2n());
    var inputFilled_0 = ColorSchemes_getInstance().s35_1.r2x();
    var tmp0_$this_0 = new MutableInput(this_0.w35_1);
    var tmp1_filledFocus_0 = Colors_instance.u2n();
    var tmp2_hoveredBorder_0 = ColorSchemes_getInstance().s35_1.p2x();
    var tmp3_invalidBorder_0 = ColorSchemes_getInstance().b35_1.m2x();
    var tmp4_filledHover_0 = lightened(inputFilled_0, 0.1);
    tmp0_$this_0.r3g(tmp2_hoveredBorder_0, tmp3_invalidBorder_0, inputFilled_0, tmp4_filledHover_0, tmp1_filledFocus_0);
    var tmp5_$this_0 = new MutableSwitch(this_0.w35_1);
    var tmp6_thumb_0 = Colors_instance.i2o();
    var tmp7_backgroundOn_0 = Colors_instance.f2o();
    var tmp8_backgroundOff_0 = Colors_instance.z2n();
    tmp5_$this_0.h3g(tmp7_backgroundOn_0, tmp8_backgroundOff_0, tmp6_thumb_0);
    (new MutableTab(this_0.w35_1)).l3h(Colors_instance.i2o(), Colors_instance.v2n(), Colors_instance.f2o(), VOID, VOID, Colors_instance.a2o(), Colors_instance.z2n(), Colors_instance.v2n());
    (new MutableTooltip(this_0.w35_1)).s3h(get_color_0(this_0.w35_1), get_background_0(this_0.w35_1));
    mutableTheme.z2v(get_SilkColorsStyle());
    mutableTheme.z2v(get_DisabledStyle());
    mutableTheme.z2v(get_SmoothColorStyle());
    mutableTheme.z2v(get_ButtonStyle());
    mutableTheme.z2v(get_CanvasStyle());
    mutableTheme.z2v(get_CheckboxStyle());
    mutableTheme.j2w([get_CheckboxInputVariant()]);
    mutableTheme.z2v(get_CheckboxIconContainerStyle());
    mutableTheme.z2v(get_CheckboxIconStyle());
    mutableTheme.j2w([get_CheckedCheckboxIconContainerVariant(), get_UncheckedCheckboxIconContainerVariant()]);
    mutableTheme.z2v(get_DivTextStyle());
    mutableTheme.z2v(get_OverlayStyle());
    mutableTheme.z2v(get_PopupStyle());
    mutableTheme.z2v(get_SimpleGridStyle());
    mutableTheme.z2v(get_SurfaceStyle());
    mutableTheme.z2v(get_HorizontalDividerStyle());
    mutableTheme.z2v(get_VerticalDividerStyle());
    mutableTheme.z2v(get_SwitchStyle());
    mutableTheme.z2v(get_SwitchTrackStyle());
    mutableTheme.z2v(get_SwitchThumbStyle());
    mutableTheme.j2w([get_SwitchInputVariant()]);
    mutableTheme.z2v(get_TabsStyle());
    mutableTheme.z2v(get_TabsTabRowStyle());
    mutableTheme.z2v(get_TabsTabStyle());
    mutableTheme.z2v(get_TabsPanelStyle());
    mutableTheme.z2v(get_InputStyle());
    mutableTheme.j2w([get_OutlinedInputVariant(), get_FilledInputVariant(), get_FlushedInputVariant(), get_UnstyledInputVariant()]);
    mutableTheme.z2v(get_InputGroupStyle());
    mutableTheme.z2v(get_TooltipArrowStyle());
    mutableTheme.j2w([get_TopLeftTooltipArrowVariant(), get_TopTooltipArrowVariant(), get_TopRightTooltipArrowVariant(), get_LeftTopTooltipArrowVariant(), get_LeftTooltipArrowVariant(), get_LeftBottomTooltipArrowVariant(), get_RightTopTooltipArrowVariant(), get_RightTooltipArrowVariant(), get_RightBottomTooltipArrowVariant(), get_BottomLeftTooltipArrowVariant(), get_BottomTooltipArrowVariant(), get_BottomRightTooltipArrowVariant()]);
    mutableTheme.z2v(get_TooltipStyle());
    mutableTheme.z2v(get_TooltipTextContainerStyle());
    registerKeyframes(ctx.m2v_1, get_CheckboxEnabledAnim());
  }
  function setSilkWidgetVariables(_this__u8e3s4, colorMode) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    removeClass(_this__u8e3s4, [suffixedWith(get_SilkColorsStyle().u2q_1, colorMode.x2r())]);
    addClass(_this__u8e3s4, [suffixedWith(get_SilkColorsStyle().u2q_1, colorMode)]);
  }
  function setSilkWidgetVariables$composable(_this__u8e3s4, $composer, $changed) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(899333070);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv(_this__u8e3s4) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.ju()) {
      if (isTraceInProgress()) {
        traceEventStart(899333070, $dirty, -1, 'com.varabyte.kobweb.silk.init.setSilkWidgetVariables$composable (InitSilkWidgets.kt:311)');
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
        // Inline function 'com.varabyte.kobweb.silk.init.setSilkWidgetVariables$composable.<anonymous>' call
        var tmp_0 = _this__u8e3s4.getElementById('root');
        var value = tmp_0 instanceof HTMLElement ? tmp_0 : THROW_CCE();
        $composer_1.ev(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_1 = tmp;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.nu();
      var root = tmp0;
      setSilkWidgetVariables$composable_0(root, $composer_0, 0);
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
      tmp0_safe_receiver.s19(setSilkWidgetVariables$composable$lambda(_this__u8e3s4, $changed));
    }
  }
  function setSilkWidgetVariables$composable_0(_this__u8e3s4, $composer, $changed) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(417149198);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv(_this__u8e3s4) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.ju()) {
      if (isTraceInProgress()) {
        traceEventStart(417149198, $dirty, -1, 'com.varabyte.kobweb.silk.init.setSilkWidgetVariables$composable (InitSilkWidgets.kt:317)');
      }
      setSilkWidgetVariables(_this__u8e3s4, Companion_instance_6.t2p($composer_0, 6));
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
      tmp0_safe_receiver.s19(setSilkWidgetVariables$composable$lambda_0(_this__u8e3s4, $changed));
    }
  }
  function SilkColorsStyle$delegate$lambda($this$base) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var palette = toPalette($this$base.g2s_1);
    return setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(Companion_instance, get_BackgroundColorVar(), get_background(palette)), get_ColorVar(), get_color(palette)), get_BorderColorVar(), get_border(palette)), get_FocusOutlineColorVar(), get_focusOutline(palette)), get_PlaceholderColorVar(), get_placeholder_0(palette)), ButtonVars_getInstance().h3a(), get_button(palette).t3h()), ButtonVars_getInstance().j3a(), get_button(palette).l1z()), ButtonVars_getInstance().k3a(), get_button(palette).u3h()), CheckboxVars_getInstance().a3c(), get_checkbox(palette).v3h()), CheckboxVars_getInstance().b3c(), get_checkbox(palette).l1z()), CheckboxVars_getInstance().z3b(), get_checkbox(palette).w3h()), InputVars_getInstance().v3c(), get_input(palette).x3h()), InputVars_getInstance().w3c(), get_input(palette).y3h()), InputVars_getInstance().x3c(), get_input(palette).z3h()), InputVars_getInstance().y3c(), get_input(palette).a3i()), InputVars_getInstance().z3c(), get_input(palette).b3i()), OverlayVars_getInstance().r39(), get_overlay(palette)), SwitchVars_getInstance().u3d(), get_switch(palette).c3i()), TabVars_getInstance().p39(), get_tab(palette).w3h()), TabVars_getInstance().r39(), get_tab(palette).v3h()), TabVars_getInstance().s39(), get_tab(palette).d3i()), TabVars_getInstance().t39(), get_tab(palette).l1z()), TabVars_getInstance().u39(), get_tab(palette).u3h()), TooltipVars_getInstance().r39(), get_tooltip(palette).v3h()), TooltipVars_getInstance().p39(), get_tooltip(palette).w3h());
  }
  function setSilkWidgetVariables$composable$lambda($this_setSilkWidgetVariables$composable, $$changed) {
    return function ($composer, $force) {
      setSilkWidgetVariables$composable($this_setSilkWidgetVariables$composable, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function setSilkWidgetVariables$composable$lambda_0($this_setSilkWidgetVariables$composable, $$changed) {
    return function ($composer, $force) {
      setSilkWidgetVariables$composable_0($this_setSilkWidgetVariables$composable, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function SilkColorsStyle$factory() {
    return getPropertyCallableRef('SilkColorsStyle', 0, KProperty0, function () {
      return get_SilkColorsStyle();
    }, null);
  }
  var properties_initialized_InitSilkWidgets_kt_dse0va;
  function _init_properties_InitSilkWidgets_kt__62z9ag() {
    if (!properties_initialized_InitSilkWidgets_kt_dse0va) {
      properties_initialized_InitSilkWidgets_kt_dse0va = true;
      var tmp = Companion_instance_5;
      SilkColorsStyle$delegate = base(tmp, VOID, VOID, SilkColorsStyle$delegate$lambda);
    }
  }
  function MutableButton(palette) {
    ColorGroup.call(this, palette, 'button');
    this.u3f_1 = this.h38();
    this.v3f_1 = this.h38();
    this.w3f_1 = this.h38();
    this.x3f_1 = this.h38();
    this.y3f_1 = 0;
  }
  protoOf(MutableButton).e3i = function (_set____db54di) {
    return this.u3f_1.d38(this, default$factory(), _set____db54di);
  };
  protoOf(MutableButton).t3h = function () {
    return this.u3f_1.g2a(this, default$factory_0());
  };
  protoOf(MutableButton).f3i = function (_set____db54di) {
    return this.v3f_1.d38(this, hover$factory(), _set____db54di);
  };
  protoOf(MutableButton).l1z = function () {
    return this.v3f_1.g2a(this, hover$factory_0());
  };
  protoOf(MutableButton).g3i = function (_set____db54di) {
    return this.w3f_1.d38(this, focus$factory(), _set____db54di);
  };
  protoOf(MutableButton).h3i = function () {
    return this.w3f_1.g2a(this, focus$factory_0());
  };
  protoOf(MutableButton).i3i = function (_set____db54di) {
    return this.x3f_1.d38(this, pressed$factory(), _set____db54di);
  };
  protoOf(MutableButton).u3h = function () {
    return this.x3f_1.g2a(this, pressed$factory_0());
  };
  protoOf(MutableButton).z3f = function (default_0, hover, focus, pressed) {
    this.e3i(default_0);
    this.f3i(hover);
    this.g3i(focus);
    this.i3i(pressed);
  };
  function MutableCheckbox(palette) {
    ColorGroup.call(this, palette, 'checkbox');
    this.d3g_1 = this.h38();
    this.e3g_1 = this.h38();
    this.f3g_1 = this.h38();
    this.g3g_1 = 0;
  }
  protoOf(MutableCheckbox).j3i = function (_set____db54di) {
    return this.d3g_1.d38(this, background$factory(), _set____db54di);
  };
  protoOf(MutableCheckbox).v3h = function () {
    return this.d3g_1.g2a(this, background$factory_0());
  };
  protoOf(MutableCheckbox).f3i = function (_set____db54di) {
    return this.e3g_1.d38(this, hover$factory_1(), _set____db54di);
  };
  protoOf(MutableCheckbox).l1z = function () {
    return this.e3g_1.g2a(this, hover$factory_2());
  };
  protoOf(MutableCheckbox).k3i = function (_set____db54di) {
    return this.f3g_1.d38(this, color$factory(), _set____db54di);
  };
  protoOf(MutableCheckbox).w3h = function () {
    return this.f3g_1.g2a(this, color$factory_0());
  };
  protoOf(MutableCheckbox).h3g = function (background, hover, color) {
    this.j3i(background);
    this.f3i(hover);
    this.k3i(color);
  };
  function MutableInput(palette) {
    ColorGroup.call(this, palette, 'input');
    this.l3g_1 = this.h38();
    this.m3g_1 = this.h38();
    this.n3g_1 = this.h38();
    this.o3g_1 = this.h38();
    this.p3g_1 = this.h38();
    this.q3g_1 = 0;
  }
  protoOf(MutableInput).l3i = function (_set____db54di) {
    return this.l3g_1.d38(this, hoveredBorder$factory(), _set____db54di);
  };
  protoOf(MutableInput).x3h = function () {
    return this.l3g_1.g2a(this, hoveredBorder$factory_0());
  };
  protoOf(MutableInput).m3i = function (_set____db54di) {
    return this.m3g_1.d38(this, invalidBorder$factory(), _set____db54di);
  };
  protoOf(MutableInput).y3h = function () {
    return this.m3g_1.g2a(this, invalidBorder$factory_0());
  };
  protoOf(MutableInput).n3i = function (_set____db54di) {
    return this.n3g_1.d38(this, filled$factory(), _set____db54di);
  };
  protoOf(MutableInput).z3h = function () {
    return this.n3g_1.g2a(this, filled$factory_0());
  };
  protoOf(MutableInput).o3i = function (_set____db54di) {
    return this.o3g_1.d38(this, filledHover$factory(), _set____db54di);
  };
  protoOf(MutableInput).a3i = function () {
    return this.o3g_1.g2a(this, filledHover$factory_0());
  };
  protoOf(MutableInput).p3i = function (_set____db54di) {
    return this.p3g_1.d38(this, filledFocus$factory(), _set____db54di);
  };
  protoOf(MutableInput).b3i = function () {
    return this.p3g_1.g2a(this, filledFocus$factory_0());
  };
  protoOf(MutableInput).r3g = function (hoveredBorder, invalidBorder, filled, filledHover, filledFocus) {
    this.l3i(hoveredBorder);
    this.m3i(invalidBorder);
    this.n3i(filled);
    this.o3i(filledHover);
    this.p3i(filledFocus);
  };
  function MutableSwitch(palette) {
    ColorGroup.call(this, palette, 'switch');
    this.v3g_1 = this.h38();
    this.w3g_1 = this.h38();
    this.x3g_1 = this.h38();
    this.y3g_1 = 0;
  }
  protoOf(MutableSwitch).q3i = function (_set____db54di) {
    return this.v3g_1.d38(this, backgroundOn$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).r3i = function () {
    return this.v3g_1.g2a(this, backgroundOn$factory_0());
  };
  protoOf(MutableSwitch).s3i = function (_set____db54di) {
    return this.w3g_1.d38(this, backgroundOff$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).t3i = function () {
    return this.w3g_1.g2a(this, backgroundOff$factory_0());
  };
  protoOf(MutableSwitch).u3i = function (_set____db54di) {
    return this.x3g_1.d38(this, thumb$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).c3i = function () {
    return this.x3g_1.g2a(this, thumb$factory_0());
  };
  protoOf(MutableSwitch).h3g = function (backgroundOn, backgroundOff, thumb) {
    this.q3i(backgroundOn);
    this.s3i(backgroundOff);
    this.u3i(thumb);
  };
  function MutableTab(palette) {
    ColorGroup.call(this, palette, 'tab');
    this.c3h_1 = this.h38();
    this.d3h_1 = this.h38();
    this.e3h_1 = this.h38();
    this.f3h_1 = this.h38();
    this.g3h_1 = this.h38();
    this.h3h_1 = this.h38();
    this.i3h_1 = this.h38();
    this.j3h_1 = this.h38();
    this.k3h_1 = 0;
  }
  protoOf(MutableTab).k3i = function (_set____db54di) {
    return this.c3h_1.d38(this, color$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).w3h = function () {
    return this.c3h_1.g2a(this, color$factory_2());
  };
  protoOf(MutableTab).j3i = function (_set____db54di) {
    return this.d3h_1.d38(this, background$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).v3h = function () {
    return this.d3h_1.g2a(this, background$factory_2());
  };
  protoOf(MutableTab).v3i = function (_set____db54di) {
    return this.e3h_1.d38(this, selectedColor$factory(), _set____db54di);
  };
  protoOf(MutableTab).w3i = function () {
    return this.e3h_1.g2a(this, selectedColor$factory_0());
  };
  protoOf(MutableTab).x3i = function (_set____db54di) {
    return this.f3h_1.d38(this, selectedBackground$factory(), _set____db54di);
  };
  protoOf(MutableTab).y3i = function () {
    return this.f3h_1.g2a(this, selectedBackground$factory_0());
  };
  protoOf(MutableTab).z3i = function (_set____db54di) {
    return this.g3h_1.d38(this, selectedBorder$factory(), _set____db54di);
  };
  protoOf(MutableTab).a3j = function () {
    return this.g3h_1.g2a(this, selectedBorder$factory_0());
  };
  protoOf(MutableTab).f3i = function (_set____db54di) {
    return this.h3h_1.d38(this, hover$factory_3(), _set____db54di);
  };
  protoOf(MutableTab).l1z = function () {
    return this.h3h_1.g2a(this, hover$factory_4());
  };
  protoOf(MutableTab).i3i = function (_set____db54di) {
    return this.i3h_1.d38(this, pressed$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).u3h = function () {
    return this.i3h_1.g2a(this, pressed$factory_2());
  };
  protoOf(MutableTab).b3j = function (_set____db54di) {
    return this.j3h_1.d38(this, disabled$factory(), _set____db54di);
  };
  protoOf(MutableTab).d3i = function () {
    return this.j3h_1.g2a(this, disabled$factory_0());
  };
  protoOf(MutableTab).c3j = function (color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled) {
    this.k3i(color);
    this.j3i(background);
    this.v3i(selectedColor);
    this.x3i(selectedBackground);
    this.z3i(selectedBorder);
    this.f3i(hover);
    this.i3i(pressed);
    this.b3j(disabled);
  };
  protoOf(MutableTab).l3h = function (color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled, $super) {
    selectedBackground = selectedBackground === VOID ? background : selectedBackground;
    selectedBorder = selectedBorder === VOID ? selectedColor : selectedBorder;
    var tmp;
    if ($super === VOID) {
      this.c3j(color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled);
      tmp = Unit_instance;
    } else {
      tmp = $super.c3j.call(this, color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled);
    }
    return tmp;
  };
  function MutableTooltip(palette) {
    ColorGroup.call(this, palette, 'tooltip');
    this.p3h_1 = this.h38();
    this.q3h_1 = this.h38();
    this.r3h_1 = 0;
  }
  protoOf(MutableTooltip).j3i = function (_set____db54di) {
    return this.p3h_1.d38(this, background$factory_3(), _set____db54di);
  };
  protoOf(MutableTooltip).v3h = function () {
    return this.p3h_1.g2a(this, background$factory_4());
  };
  protoOf(MutableTooltip).k3i = function (_set____db54di) {
    return this.q3h_1.d38(this, color$factory_3(), _set____db54di);
  };
  protoOf(MutableTooltip).w3h = function () {
    return this.q3h_1.g2a(this, color$factory_4());
  };
  protoOf(MutableTooltip).s3h = function (background, color) {
    this.j3i(background);
    this.k3i(color);
  };
  function get_tooltip(_this__u8e3s4) {
    return get_tooltip_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_tab(_this__u8e3s4) {
    return get_tab_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_switch(_this__u8e3s4) {
    return get_switch_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_overlay(_this__u8e3s4) {
    return _this__u8e3s4.x37('overlay');
  }
  function get_input(_this__u8e3s4) {
    return get_input_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_checkbox(_this__u8e3s4) {
    return get_checkbox_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_button(_this__u8e3s4) {
    return get_button_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_placeholder_0(_this__u8e3s4) {
    return _this__u8e3s4.x37('placeholder');
  }
  function get_focusOutline(_this__u8e3s4) {
    return _this__u8e3s4.x37('focusOutline');
  }
  function get_border(_this__u8e3s4) {
    return _this__u8e3s4.x37('border');
  }
  function get_color(_this__u8e3s4) {
    return _this__u8e3s4.x37('color');
  }
  function get_background(_this__u8e3s4) {
    return _this__u8e3s4.x37('background');
  }
  function get_tooltip_0(_this__u8e3s4) {
    return new MutableTooltip(_this__u8e3s4);
  }
  function get_tab_0(_this__u8e3s4) {
    return new MutableTab(_this__u8e3s4);
  }
  function get_switch_0(_this__u8e3s4) {
    return new MutableSwitch(_this__u8e3s4);
  }
  function get_input_0(_this__u8e3s4) {
    return new MutableInput(_this__u8e3s4);
  }
  function get_checkbox_0(_this__u8e3s4) {
    return new MutableCheckbox(_this__u8e3s4);
  }
  function get_button_0(_this__u8e3s4) {
    return new MutableButton(_this__u8e3s4);
  }
  function set_background(_this__u8e3s4, value) {
    _this__u8e3s4.i38('background', value);
  }
  function get_background_0(_this__u8e3s4) {
    return _this__u8e3s4.x37('background');
  }
  function set_color(_this__u8e3s4, value) {
    _this__u8e3s4.i38('color', value);
  }
  function get_color_0(_this__u8e3s4) {
    return _this__u8e3s4.x37('color');
  }
  function set_border(_this__u8e3s4, value) {
    _this__u8e3s4.i38('border', value);
  }
  function set_focusOutline(_this__u8e3s4, value) {
    _this__u8e3s4.i38('focusOutline', value);
  }
  function set_overlay(_this__u8e3s4, value) {
    _this__u8e3s4.i38('overlay', value);
  }
  function set_placeholder(_this__u8e3s4, value) {
    _this__u8e3s4.i38('placeholder', value);
  }
  function default$factory() {
    return getPropertyCallableRef('default', 1, KMutableProperty1, function (receiver) {
      return receiver.t3h();
    }, function (receiver, value) {
      return receiver.e3i(value);
    });
  }
  function default$factory_0() {
    return getPropertyCallableRef('default', 1, KMutableProperty1, function (receiver) {
      return receiver.t3h();
    }, function (receiver, value) {
      return receiver.e3i(value);
    });
  }
  function hover$factory() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.l1z();
    }, function (receiver, value) {
      return receiver.f3i(value);
    });
  }
  function hover$factory_0() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.l1z();
    }, function (receiver, value) {
      return receiver.f3i(value);
    });
  }
  function focus$factory() {
    return getPropertyCallableRef('focus', 1, KMutableProperty1, function (receiver) {
      return receiver.h3i();
    }, function (receiver, value) {
      return receiver.g3i(value);
    });
  }
  function focus$factory_0() {
    return getPropertyCallableRef('focus', 1, KMutableProperty1, function (receiver) {
      return receiver.h3i();
    }, function (receiver, value) {
      return receiver.g3i(value);
    });
  }
  function pressed$factory() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.u3h();
    }, function (receiver, value) {
      return receiver.i3i(value);
    });
  }
  function pressed$factory_0() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.u3h();
    }, function (receiver, value) {
      return receiver.i3i(value);
    });
  }
  function background$factory() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.v3h();
    }, function (receiver, value) {
      return receiver.j3i(value);
    });
  }
  function background$factory_0() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.v3h();
    }, function (receiver, value) {
      return receiver.j3i(value);
    });
  }
  function hover$factory_1() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.l1z();
    }, function (receiver, value) {
      return receiver.f3i(value);
    });
  }
  function hover$factory_2() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.l1z();
    }, function (receiver, value) {
      return receiver.f3i(value);
    });
  }
  function color$factory() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.w3h();
    }, function (receiver, value) {
      return receiver.k3i(value);
    });
  }
  function color$factory_0() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.w3h();
    }, function (receiver, value) {
      return receiver.k3i(value);
    });
  }
  function hoveredBorder$factory() {
    return getPropertyCallableRef('hoveredBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.x3h();
    }, function (receiver, value) {
      return receiver.l3i(value);
    });
  }
  function hoveredBorder$factory_0() {
    return getPropertyCallableRef('hoveredBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.x3h();
    }, function (receiver, value) {
      return receiver.l3i(value);
    });
  }
  function invalidBorder$factory() {
    return getPropertyCallableRef('invalidBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.y3h();
    }, function (receiver, value) {
      return receiver.m3i(value);
    });
  }
  function invalidBorder$factory_0() {
    return getPropertyCallableRef('invalidBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.y3h();
    }, function (receiver, value) {
      return receiver.m3i(value);
    });
  }
  function filled$factory() {
    return getPropertyCallableRef('filled', 1, KMutableProperty1, function (receiver) {
      return receiver.z3h();
    }, function (receiver, value) {
      return receiver.n3i(value);
    });
  }
  function filled$factory_0() {
    return getPropertyCallableRef('filled', 1, KMutableProperty1, function (receiver) {
      return receiver.z3h();
    }, function (receiver, value) {
      return receiver.n3i(value);
    });
  }
  function filledHover$factory() {
    return getPropertyCallableRef('filledHover', 1, KMutableProperty1, function (receiver) {
      return receiver.a3i();
    }, function (receiver, value) {
      return receiver.o3i(value);
    });
  }
  function filledHover$factory_0() {
    return getPropertyCallableRef('filledHover', 1, KMutableProperty1, function (receiver) {
      return receiver.a3i();
    }, function (receiver, value) {
      return receiver.o3i(value);
    });
  }
  function filledFocus$factory() {
    return getPropertyCallableRef('filledFocus', 1, KMutableProperty1, function (receiver) {
      return receiver.b3i();
    }, function (receiver, value) {
      return receiver.p3i(value);
    });
  }
  function filledFocus$factory_0() {
    return getPropertyCallableRef('filledFocus', 1, KMutableProperty1, function (receiver) {
      return receiver.b3i();
    }, function (receiver, value) {
      return receiver.p3i(value);
    });
  }
  function backgroundOn$factory() {
    return getPropertyCallableRef('backgroundOn', 1, KMutableProperty1, function (receiver) {
      return receiver.r3i();
    }, function (receiver, value) {
      return receiver.q3i(value);
    });
  }
  function backgroundOn$factory_0() {
    return getPropertyCallableRef('backgroundOn', 1, KMutableProperty1, function (receiver) {
      return receiver.r3i();
    }, function (receiver, value) {
      return receiver.q3i(value);
    });
  }
  function backgroundOff$factory() {
    return getPropertyCallableRef('backgroundOff', 1, KMutableProperty1, function (receiver) {
      return receiver.t3i();
    }, function (receiver, value) {
      return receiver.s3i(value);
    });
  }
  function backgroundOff$factory_0() {
    return getPropertyCallableRef('backgroundOff', 1, KMutableProperty1, function (receiver) {
      return receiver.t3i();
    }, function (receiver, value) {
      return receiver.s3i(value);
    });
  }
  function thumb$factory() {
    return getPropertyCallableRef('thumb', 1, KMutableProperty1, function (receiver) {
      return receiver.c3i();
    }, function (receiver, value) {
      return receiver.u3i(value);
    });
  }
  function thumb$factory_0() {
    return getPropertyCallableRef('thumb', 1, KMutableProperty1, function (receiver) {
      return receiver.c3i();
    }, function (receiver, value) {
      return receiver.u3i(value);
    });
  }
  function color$factory_1() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.w3h();
    }, function (receiver, value) {
      return receiver.k3i(value);
    });
  }
  function color$factory_2() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.w3h();
    }, function (receiver, value) {
      return receiver.k3i(value);
    });
  }
  function background$factory_1() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.v3h();
    }, function (receiver, value) {
      return receiver.j3i(value);
    });
  }
  function background$factory_2() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.v3h();
    }, function (receiver, value) {
      return receiver.j3i(value);
    });
  }
  function selectedColor$factory() {
    return getPropertyCallableRef('selectedColor', 1, KMutableProperty1, function (receiver) {
      return receiver.w3i();
    }, function (receiver, value) {
      return receiver.v3i(value);
    });
  }
  function selectedColor$factory_0() {
    return getPropertyCallableRef('selectedColor', 1, KMutableProperty1, function (receiver) {
      return receiver.w3i();
    }, function (receiver, value) {
      return receiver.v3i(value);
    });
  }
  function selectedBackground$factory() {
    return getPropertyCallableRef('selectedBackground', 1, KMutableProperty1, function (receiver) {
      return receiver.y3i();
    }, function (receiver, value) {
      return receiver.x3i(value);
    });
  }
  function selectedBackground$factory_0() {
    return getPropertyCallableRef('selectedBackground', 1, KMutableProperty1, function (receiver) {
      return receiver.y3i();
    }, function (receiver, value) {
      return receiver.x3i(value);
    });
  }
  function selectedBorder$factory() {
    return getPropertyCallableRef('selectedBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.a3j();
    }, function (receiver, value) {
      return receiver.z3i(value);
    });
  }
  function selectedBorder$factory_0() {
    return getPropertyCallableRef('selectedBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.a3j();
    }, function (receiver, value) {
      return receiver.z3i(value);
    });
  }
  function hover$factory_3() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.l1z();
    }, function (receiver, value) {
      return receiver.f3i(value);
    });
  }
  function hover$factory_4() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.l1z();
    }, function (receiver, value) {
      return receiver.f3i(value);
    });
  }
  function pressed$factory_1() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.u3h();
    }, function (receiver, value) {
      return receiver.i3i(value);
    });
  }
  function pressed$factory_2() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.u3h();
    }, function (receiver, value) {
      return receiver.i3i(value);
    });
  }
  function disabled$factory() {
    return getPropertyCallableRef('disabled', 1, KMutableProperty1, function (receiver) {
      return receiver.d3i();
    }, function (receiver, value) {
      return receiver.b3j(value);
    });
  }
  function disabled$factory_0() {
    return getPropertyCallableRef('disabled', 1, KMutableProperty1, function (receiver) {
      return receiver.d3i();
    }, function (receiver, value) {
      return receiver.b3j(value);
    });
  }
  function background$factory_3() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.v3h();
    }, function (receiver, value) {
      return receiver.j3i(value);
    });
  }
  function background$factory_4() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.v3h();
    }, function (receiver, value) {
      return receiver.j3i(value);
    });
  }
  function color$factory_3() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.w3h();
    }, function (receiver, value) {
      return receiver.k3i(value);
    });
  }
  function color$factory_4() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.w3h();
    }, function (receiver, value) {
      return receiver.k3i(value);
    });
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Button$composable_0;
  _.$_$.b = get_ButtonStyle;
  _.$_$.c = CloseIcon$composable;
  _.$_$.d = HamburgerIcon$composable;
  _.$_$.e = MoonIcon$composable;
  _.$_$.f = SunIcon$composable;
  _.$_$.g = HorizontalDivider$composable;
  _.$_$.h = get_HorizontalDividerStyle;
  _.$_$.i = SimpleGrid$composable;
  _.$_$.j = Surface$composable;
  _.$_$.k = numColumns;
  _.$_$.l = Overlay$composable;
  _.$_$.m = get_SmoothColorStyle;
  _.$_$.n = get_BorderColorVar;
  _.$_$.o = get_ColorVar;
  _.$_$.p = get_SilkColorsStyle;
  _.$_$.q = initSilkWidgets;
  _.$_$.r = setSilkWidgetVariables$composable;
  _.$_$.s = set_background;
  _.$_$.t = get_color;
  _.$_$.u = set_color;
  _.$_$.v = MD_getInstance;
  _.$_$.w = ButtonVars_getInstance;
  _.$_$.x = OverlayVars_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-widgets.js.map
