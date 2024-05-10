(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-runtime.js', './html-html-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-runtime.js'), require('./html-html-core.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    root['kobweb-frontend-kobweb-core'] = factory(typeof this['kobweb-frontend-kobweb-core'] === 'undefined' ? {} : this['kobweb-frontend-kobweb-core'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-runtime'], this['html-html-core']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_html_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.y1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var Style$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.x3;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.w2;
  var padding = kotlin_org_jetbrains_compose_html_html_core.$_$.t2;
  var margin = kotlin_org_jetbrains_compose_html_html_core.$_$.m2;
  var boxSizing = kotlin_org_jetbrains_compose_html_html_core.$_$.o1;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.f1;
  var protoOf = kotlin_kotlin.$_$.i6;
  var objectMeta = kotlin_kotlin.$_$.h6;
  var setMetadataFor = kotlin_kotlin.$_$.j6;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var toString = kotlin_kotlin.$_$.k6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.n1;
  var substringAfterLast = kotlin_kotlin.$_$.q7;
  var plus = kotlin_kotlin.$_$.y3;
  var equals = kotlin_kotlin.$_$.q5;
  var getStringHashCode = kotlin_kotlin.$_$.v5;
  var hashCode = kotlin_kotlin.$_$.w5;
  var VOID = kotlin_kotlin.$_$.c;
  var classMeta = kotlin_kotlin.$_$.n5;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.x8;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var A$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.h3;
  var Enum = kotlin_kotlin.$_$.b8;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.u;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var charSequenceLength = kotlin_kotlin.$_$.m5;
  var joinToString = kotlin_kotlin.$_$.k3;
  var objectCreate = kotlin_kotlin.$_$.g6;
  var removePrefix = kotlin_kotlin.$_$.j7;
  var startsWith = kotlin_kotlin.$_$.o7;
  var drop = kotlin_kotlin.$_$.a7;
  var first = kotlin_kotlin.$_$.d7;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.m;
  var charArrayOf = kotlin_kotlin.$_$.k5;
  var split = kotlin_kotlin.$_$.m7;
  var getOrNull = kotlin_kotlin.$_$.h3;
  var Exception = kotlin_kotlin.$_$.d8;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.y;
  var captureStack = kotlin_kotlin.$_$.j5;
  var ensureNotNull = kotlin_kotlin.$_$.p8;
  var isBlank = kotlin_kotlin.$_$.e7;
  var startsWith_0 = kotlin_kotlin.$_$.p7;
  var endsWith = kotlin_kotlin.$_$.b7;
  var dropLast = kotlin_kotlin.$_$.z6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.g;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.z;
  var lastOrNull = kotlin_kotlin.$_$.p3;
  var last = kotlin_kotlin.$_$.q3;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var get_lastIndex = kotlin_kotlin.$_$.n3;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var THROW_CCE = kotlin_kotlin.$_$.i8;
  var Div$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.k3;
  var Text$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.z3;
  var illegalDecoyCallException = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var charSequenceGet = kotlin_kotlin.$_$.l5;
  var removeSuffix = kotlin_kotlin.$_$.k7;
  var substringAfter = kotlin_kotlin.$_$.s7;
  var contains = kotlin_kotlin.$_$.y6;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e;
  var toMutableMap = kotlin_kotlin.$_$.k4;
  var KMutableProperty1 = kotlin_kotlin.$_$.r6;
  var getPropertyCallableRef = kotlin_kotlin.$_$.u5;
  //endregion
  //region block: pre-declaration
  setMetadataFor(DefaultStyleSheet, 'DefaultStyleSheet', objectMeta, StyleSheet);
  setMetadataFor(AppGlobals, 'AppGlobals', objectMeta);
  setMetadataFor(RouteInfo, 'RouteInfo', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(PageContext, 'PageContext', classMeta);
  setMetadataFor(InitKobwebContext, 'InitKobwebContext', classMeta);
  setMetadataFor(MutableKobwebConfig, 'MutableKobwebConfig', classMeta, VOID, VOID, MutableKobwebConfig);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(MutableOpenLinkStrategies, 'MutableOpenLinkStrategies', classMeta, VOID, VOID, MutableOpenLinkStrategies);
  setMetadataFor(OpenLinkStrategy, 'OpenLinkStrategy', classMeta, Enum);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Route, 'Route', classMeta);
  setMetadataFor(RouteException, 'RouteException', classMeta, Exception);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(RoutePrefixImpl, 'RoutePrefixImpl', classMeta);
  setMetadataFor(Node, 'Node', classMeta);
  setMetadataFor(RootNode, 'RootNode', classMeta, Node, VOID, RootNode);
  setMetadataFor(StaticNode, 'StaticNode', classMeta, Node);
  setMetadataFor(DynamicNode, 'DynamicNode', classMeta, Node);
  setMetadataFor(ResolvedEntry, 'ResolvedEntry', classMeta);
  setMetadataFor(RouteTree, 'RouteTree', classMeta, VOID, VOID, RouteTree);
  setMetadataFor(PageData, 'PageData', classMeta);
  setMetadataFor(ComposableSingletons$RouteTreeKt, 'ComposableSingletons$RouteTreeKt', objectMeta);
  setMetadataFor(Router, 'Router', classMeta, VOID, VOID, Router);
  setMetadataFor(RouteInterceptorScope, 'RouteInterceptorScope', classMeta);
  setMetadataFor(UpdateHistoryMode, 'UpdateHistoryMode', classMeta, Enum);
  setMetadataFor(ComposableSingletons$RouterKt, 'ComposableSingletons$RouterKt', objectMeta);
  //endregion
  function KobwebApp$composable(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(1244630298);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.iv(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.ju()) {
      if (isTraceInProgress()) {
        traceEventStart(1244630298, $dirty, -1, 'com.varabyte.kobweb.core.KobwebApp$composable (App.kt:39)');
      }
      // Inline function 'org.jetbrains.compose.web.css.Style$composable' call
      var styleSheet = DefaultStyleSheet_getInstance();
      var $composer_1 = $composer_0;
      $composer_1.mu(-168645675);
      sourceInformation($composer_1, 'CC(Style$composable)');
      Style$composable(null, styleSheet.e1z(), $composer_1, 0, 1);
      $composer_1.nu();
      content($composer_0, 14 & $dirty);
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
      tmp0_safe_receiver.s19(KobwebApp$composable$lambda(content, $changed));
    }
  }
  function DefaultStyleSheet$lambda($this$null) {
    padding($this$null, [get_px(0)]);
    margin($this$null, [get_px(0)]);
    return Unit_instance;
  }
  function DefaultStyleSheet$lambda_0($this$null) {
    boxSizing($this$null, 'border-box');
    return Unit_instance;
  }
  function DefaultStyleSheet() {
    DefaultStyleSheet_instance = this;
    StyleSheet.call(this);
    this.j1z('html, body', DefaultStyleSheet$lambda);
    this.j1z('*', DefaultStyleSheet$lambda_0);
    this.b2h_1 = 0;
  }
  protoOf(DefaultStyleSheet).i1z = function (selector, cssRule) {
    return this.h1z(selector, cssRule);
  };
  var DefaultStyleSheet_instance;
  function DefaultStyleSheet_getInstance() {
    if (DefaultStyleSheet_instance == null)
      new DefaultStyleSheet();
    return DefaultStyleSheet_instance;
  }
  function KobwebApp$composable$lambda($content, $$changed) {
    return function ($composer, $force) {
      KobwebApp$composable($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function AppGlobals() {
    this.d2h_1 = 8;
  }
  protoOf(AppGlobals).e2h = function (values) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!!(this.c2h_1 == null)) {
      // Inline function 'com.varabyte.kobweb.core.AppGlobals.initialize.<anonymous>' call
      var message = 'Cannot initialize AppGlobals more than once';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.c2h_1 = values;
  };
  var AppGlobals_instance;
  function AppGlobals_getInstance() {
    return AppGlobals_instance;
  }
  function get_PageContextLocal() {
    _init_properties_PageContext_kt__u2hiem();
    return PageContextLocal;
  }
  var PageContextLocal;
  function RouteInfo(route, dynamicParams) {
    this.f2h_1 = route;
    this.g2h_1 = dynamicParams;
    this.h2h_1 = substringAfterLast(this.f2h_1.o2h_1, _Char___init__impl__6a9atx(47));
    this.i2h_1 = this.f2h_1.o2h_1;
    this.j2h_1 = plus(this.f2h_1.p2h_1, this.g2h_1);
    this.k2h_1 = this.f2h_1.p2h_1;
    this.l2h_1 = this.f2h_1.q2h_1;
    this.m2h_1 = 0;
  }
  protoOf(RouteInfo).toString = function () {
    return this.f2h_1.toString();
  };
  protoOf(RouteInfo).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof RouteInfo) {
      tmp_1 = other.i2h_1 === this.i2h_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(other.j2h_1, this.j2h_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.l2h_1 == this.l2h_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RouteInfo).hashCode = function () {
    var result = getStringHashCode(this.i2h_1);
    result = imul(31, result) + hashCode(this.j2h_1) | 0;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.l2h_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(RouteInfo).s2h = function (path, queryParams, fragment, dynamicParams) {
    return new RouteInfo(Route_init_$Create$(path, queryParams, fragment), dynamicParams);
  };
  protoOf(RouteInfo).t2h = function (path, queryParams, fragment, dynamicParams, $super) {
    path = path === VOID ? this.f2h_1.o2h_1 : path;
    queryParams = queryParams === VOID ? this.f2h_1.p2h_1 : queryParams;
    fragment = fragment === VOID ? this.f2h_1.q2h_1 : fragment;
    dynamicParams = dynamicParams === VOID ? this.g2h_1 : dynamicParams;
    return $super === VOID ? this.s2h(path, queryParams, fragment, dynamicParams) : $super.s2h.call(this, path, queryParams, fragment, dynamicParams);
  };
  function Companion() {
  }
  protoOf(Companion).v2h = function () {
    var tmp = this.u2h_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('instance');
    }
  };
  protoOf(Companion).w2h = function (router) {
    this.u2h_1 = new PageContext(router);
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    return Companion_instance;
  }
  function PageContext(router) {
    this.x2h_1 = router;
    this.y2h_1 = mutableStateOf(null);
    this.z2h_1 = 8;
  }
  protoOf(PageContext).a2i = function (value) {
    this.y2h_1.up(value);
  };
  function rememberPageContext$composable($composer, $changed) {
    _init_properties_PageContext_kt__u2hiem();
    var $composer_0 = $composer;
    $composer_0.mu(1885592798);
    if (isTraceInProgress()) {
      traceEventStart(1885592798, $changed, -1, 'com.varabyte.kobweb.core.rememberPageContext$composable (PageContext.kt:163)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var this_0 = get_PageContextLocal();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.kv(this_0);
    sourceInformationMarkerEnd($composer_1);
    var tmp;
    if (tmp0 == null) {
      var message = 'PageContext is only valid within a @Page composable';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0;
    }
    var tmp0_0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.nu();
    return tmp0_0;
  }
  function PageContextLocal$lambda() {
    _init_properties_PageContext_kt__u2hiem();
    return null;
  }
  var properties_initialized_PageContext_kt_8ruj8w;
  function _init_properties_PageContext_kt__u2hiem() {
    if (!properties_initialized_PageContext_kt_8ruj8w) {
      properties_initialized_PageContext_kt_8ruj8w = true;
      PageContextLocal = staticCompositionLocalOf(PageContextLocal$lambda);
    }
  }
  function initKobweb(router, init) {
    var config = new MutableKobwebConfig();
    init(new InitKobwebContext(config, router));
    set_MutableKobwebConfigInstance(config);
  }
  function InitKobwebContext(config, router) {
    this.b2i_1 = config;
    this.c2i_1 = router;
    this.d2i_1 = 8;
  }
  function set_MutableKobwebConfigInstance(_set____db54di) {
    _init_properties_KobwebConfig_kt__rz30d4();
    MutableKobwebConfigInstance = _set____db54di;
  }
  function get_MutableKobwebConfigInstance() {
    _init_properties_KobwebConfig_kt__rz30d4();
    return MutableKobwebConfigInstance;
  }
  var MutableKobwebConfigInstance;
  function MutableKobwebConfig() {
    this.e2i_1 = new MutableOpenLinkStrategies();
    this.f2i_1 = 8;
  }
  protoOf(MutableKobwebConfig).g2i = function () {
    return this.e2i_1;
  };
  function Companion_0() {
  }
  protoOf(Companion_0).h2i = function () {
    return get_MutableKobwebConfigInstance();
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    return Companion_instance_0;
  }
  function MutableOpenLinkStrategies(internal, external) {
    internal = internal === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : internal;
    external = external === VOID ? OpenLinkStrategy_IN_NEW_TAB_getInstance() : external;
    this.i2i_1 = internal;
    this.j2i_1 = external;
    this.k2i_1 = 8;
  }
  protoOf(MutableOpenLinkStrategies).l2i = function () {
    return this.i2i_1;
  };
  protoOf(MutableOpenLinkStrategies).m2i = function () {
    return this.j2i_1;
  };
  var properties_initialized_KobwebConfig_kt_yaxikm;
  function _init_properties_KobwebConfig_kt__rz30d4() {
    if (!properties_initialized_KobwebConfig_kt_yaxikm) {
      properties_initialized_KobwebConfig_kt_yaxikm = true;
      MutableKobwebConfigInstance = new MutableKobwebConfig();
    }
  }
  function Anchor$composable(href, attrs, openInternalLinksStrategy, openExternalLinksStrategy, autoPrefix, content, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var openInternalLinksStrategy_0 = {_v: openInternalLinksStrategy};
    var openExternalLinksStrategy_0 = {_v: openExternalLinksStrategy};
    var autoPrefix_0 = {_v: autoPrefix};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(1487018297);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv(href) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.iv(attrs_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.fv(openInternalLinksStrategy_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.fv(openExternalLinksStrategy_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.gv(autoPrefix_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.iv(content_0._v) ? 131072 : 65536);
    if (!(($dirty & 374491) === 74898) ? true : !$composer_0.ju()) {
      if (!(($default & 2) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        openInternalLinksStrategy_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        openExternalLinksStrategy_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        autoPrefix_0._v = true;
      }
      if (!(($default & 32) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1487018297, $dirty, -1, 'com.varabyte.kobweb.navigation.Anchor$composable (Anchor.kt:39)');
      }
      var href_0 = prependIf(Companion_instance_2, autoPrefix_0._v, href);
      var ctx = rememberPageContext$composable($composer_0, 0);
      A$composable(href_0, Anchor$composable$lambda(attrs_0, openInternalLinksStrategy_0, openExternalLinksStrategy_0, ctx, href_0), content_0._v, $composer_0, 896 & $dirty >> 9, 0);
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
      tmp0_safe_receiver.s19(Anchor$composable$lambda_0(href, attrs_0, openInternalLinksStrategy_0, openExternalLinksStrategy_0, autoPrefix_0, content_0, $changed, $default));
    }
  }
  function Anchor$composable$lambda$lambda($openInternalLinksStrategy, $openExternalLinksStrategy, $ctx, $href) {
    return function (evt) {
      var tmp0_elvis_lhs = $openInternalLinksStrategy._v;
      var openInternalLinksStrategy = tmp0_elvis_lhs == null ? toOpenLinkStrategy(evt, Companion_instance_0.h2i().g2i().l2i()) : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = $openExternalLinksStrategy._v;
      var openExternalLinksStrategy = tmp1_elvis_lhs == null ? toOpenLinkStrategy(evt, Companion_instance_0.h2i().g2i().m2i()) : tmp1_elvis_lhs;
      $ctx.x2h_1.r2i($href, VOID, openInternalLinksStrategy, openExternalLinksStrategy);
      evt.w21();
      evt.x21();
      return Unit_instance;
    };
  }
  function Anchor$composable$lambda($attrs, $openInternalLinksStrategy, $openExternalLinksStrategy, $ctx, $href) {
    return function ($this$A) {
      var tmp;
      if (!($attrs._v == null)) {
        tmp = $attrs._v($this$A);
      }
      $this$A.u1v(Anchor$composable$lambda$lambda($openInternalLinksStrategy, $openExternalLinksStrategy, $ctx, $href));
      return Unit_instance;
    };
  }
  function Anchor$composable$lambda_0($href, $attrs, $openInternalLinksStrategy, $openExternalLinksStrategy, $autoPrefix, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Anchor$composable($href, $attrs._v, $openInternalLinksStrategy._v, $openExternalLinksStrategy._v, $autoPrefix._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var OpenLinkStrategy_IN_PLACE_instance;
  var OpenLinkStrategy_IN_NEW_TAB_instance;
  var OpenLinkStrategy_entriesInitialized;
  function OpenLinkStrategy_initEntries() {
    if (OpenLinkStrategy_entriesInitialized)
      return Unit_instance;
    OpenLinkStrategy_entriesInitialized = true;
    OpenLinkStrategy_IN_PLACE_instance = new OpenLinkStrategy('IN_PLACE', 0);
    OpenLinkStrategy_IN_NEW_TAB_instance = new OpenLinkStrategy('IN_NEW_TAB', 1);
  }
  function OpenLinkStrategy(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function open(_this__u8e3s4, href, strategy) {
    var tmp0 = strategy.s9_1;
    if (tmp0 === 0) {
      _this__u8e3s4.open(href, '_self');
    } else if (tmp0 === 1) {
      _this__u8e3s4.open(href, '_blank');
    }
  }
  function toOpenLinkStrategy(_this__u8e3s4, default_0) {
    default_0 = default_0 === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : default_0;
    return (_this__u8e3s4.q22_1 ? true : _this__u8e3s4.c23_1) ? OpenLinkStrategy_IN_NEW_TAB_getInstance() : default_0;
  }
  function OpenLinkStrategy_IN_PLACE_getInstance() {
    OpenLinkStrategy_initEntries();
    return OpenLinkStrategy_IN_PLACE_instance;
  }
  function OpenLinkStrategy_IN_NEW_TAB_getInstance() {
    OpenLinkStrategy_initEntries();
    return OpenLinkStrategy_IN_NEW_TAB_instance;
  }
  function Route_init_$Init$(path, queryParams, fragment, $this) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.navigation.Route.<init>.<anonymous>' call
    this_0.t5(path);
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!queryParams.q()) {
      this_0.u5(_Char___init__impl__6a9atx(63));
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(queryParams.j());
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator = queryParams.i2().l();
      while (tmp0_iterator.x()) {
        var item = tmp0_iterator.z();
        // Inline function 'com.varabyte.kobweb.navigation.Route.<init>.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var key = item.l2();
        // Inline function 'kotlin.collections.component2' call
        var value = item.m2();
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.navigation.Route.<init>.<anonymous>.<anonymous>.<anonymous>' call
        this_1.t5(key);
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(value) > 0) {
          this_1.u5(_Char___init__impl__6a9atx(61));
          this_1.t5(value);
        }
        var tmp$ret$7 = this_1.toString();
        destination.u(tmp$ret$7);
      }
      this_0.t5(joinToString(destination, '&'));
    }
    if (!(fragment == null)) {
      this_0.u5(_Char___init__impl__6a9atx(35));
      this_0.t5(fragment);
    }
    var tmp$ret$11 = this_0.toString();
    Route.call($this, tmp$ret$11);
    return $this;
  }
  function Route_init_$Create$(path, queryParams, fragment) {
    return Route_init_$Init$(path, queryParams, fragment, objectCreate(protoOf(Route)));
  }
  function Companion_1() {
  }
  protoOf(Companion_1).s2i = function (path) {
    return !(this.t2i(path) == null);
  };
  protoOf(Companion_1).t2i = function (path) {
    var tmp;
    try {
      tmp = new Route(path);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof RouteException) {
        var ex = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Companion_1).u2i = function (url) {
    var tmp0_elvis_lhs = this.t2i(removePrefix(url.href, url.origin));
    return tmp0_elvis_lhs == null ? new Route('') : tmp0_elvis_lhs;
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    return Companion_instance_1;
  }
  function Route(pathQueryAndFragment) {
    var tmp;
    try {
      new URL(pathQueryAndFragment);
      tmp = false;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var ex = $p;
        tmp_0 = true;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var isValidRoute = tmp;
    if (!isValidRoute) {
      throw new RouteException(pathQueryAndFragment);
    }
    this.n2h_1 = new URL(pathQueryAndFragment, 'http://unused.com');
    var isAbsolute = startsWith(pathQueryAndFragment, '/');
    var tmp_1 = this;
    var tmp_2;
    if (isAbsolute) {
      tmp_2 = this.n2h_1.pathname;
    } else {
      // Inline function 'kotlin.also' call
      var this_0 = drop(this.n2h_1.pathname, 1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.navigation.Route.<anonymous>' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(first(this.n2h_1.pathname) === _Char___init__impl__6a9atx(47))) {
        // Inline function 'kotlin.check.<anonymous>' call
        var message = 'Check failed.';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      tmp_2 = this_0;
    }
    tmp_1.o2h_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.collections.mutableMapOf' call
    var this_1 = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    $l$block: {
      // Inline function 'com.varabyte.kobweb.navigation.Route.<anonymous>' call
      // Inline function 'kotlin.text.isEmpty' call
      var this_2 = this.n2h_1.search;
      if (charSequenceLength(this_2) === 0) {
        break $l$block;
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = split(removePrefix(this.n2h_1.search, '?'), charArrayOf([_Char___init__impl__6a9atx(38)])).l();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'com.varabyte.kobweb.navigation.Route.<anonymous>.<anonymous>' call
        var keyValue = split(element, charArrayOf([_Char___init__impl__6a9atx(61)]), VOID, 2);
        var key = keyValue.k(0);
        // Inline function 'kotlin.collections.set' call
        // Inline function 'kotlin.collections.elementAtOrNull' call
        var tmp0_elvis_lhs = getOrNull(keyValue, 1);
        var value = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        this_1.j2(key, value);
      }
    }
    tmp_3.p2h_1 = this_1;
    var tmp_4 = this;
    // Inline function 'kotlin.takeIf' call
    var this_3 = this.n2h_1.hash;
    // Inline function 'kotlin.contracts.contract' call
    var tmp_5;
    // Inline function 'com.varabyte.kobweb.navigation.Route.<anonymous>' call
    if (startsWith(this_3, '#')) {
      tmp_5 = this_3;
    } else {
      tmp_5 = null;
    }
    var tmp0_safe_receiver = tmp_5;
    tmp_4.q2h_1 = tmp0_safe_receiver == null ? null : removePrefix(tmp0_safe_receiver, '#');
    this.r2h_1 = 8;
  }
  protoOf(Route).toString = function () {
    return this.o2h_1 + this.n2h_1.search + this.n2h_1.hash;
  };
  function RouteException(value) {
    Exception_init_$Init$('Failed to create a route. Routes should be valid URLs without a leading domain. Got: ' + value, this);
    captureStack(this, RouteException);
    this.v2i_1 = 0;
  }
  function prependIf(_this__u8e3s4, condition, path) {
    return condition ? Companion_instance_2.w2i(path) : path;
  }
  function Companion_2() {
  }
  protoOf(Companion_2).x2i = function (value) {
    Companion_instance_3.z2i(new RoutePrefixImpl(value));
  };
  protoOf(Companion_2).m2 = function () {
    return Companion_instance_3.v2h().a2j_1;
  };
  protoOf(Companion_2).w2i = function (path) {
    return Companion_instance_3.v2h().w2i(path);
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    return Companion_instance_2;
  }
  function Companion_3() {
    this.y2i_1 = null;
  }
  protoOf(Companion_3).z2i = function (value) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.y2i_1 == null)) {
      // Inline function 'com.varabyte.kobweb.navigation.Companion.<set-_instance>.<anonymous>' call
      var message = 'Cannot overwrite route prefix once set';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.y2i_1 = value;
  };
  protoOf(Companion_3).c2j = function () {
    if (this.y2i_1 == null) {
      this.y2i_1 = new RoutePrefixImpl('');
    }
    return this.y2i_1;
  };
  protoOf(Companion_3).v2h = function () {
    return ensureNotNull(this.c2j());
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    return Companion_instance_3;
  }
  function RoutePrefixImpl(value) {
    var tmp = this;
    // Inline function 'kotlin.takeIf' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    // Inline function 'com.varabyte.kobweb.navigation.RoutePrefixImpl.value.<anonymous>' call
    // Inline function 'kotlin.text.isNotBlank' call
    if (!isBlank(value)) {
      tmp_0 = value;
    } else {
      tmp_0 = null;
    }
    var tmp0_safe_receiver = tmp_0;
    var tmp_1;
    if (tmp0_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.navigation.RoutePrefixImpl.value.<anonymous>' call
      tmp_1 = startsWith_0(tmp0_safe_receiver, _Char___init__impl__6a9atx(47)) ? tmp0_safe_receiver : '/' + tmp0_safe_receiver;
    }
    var tmp1_safe_receiver = tmp_1;
    var tmp_2;
    if (tmp1_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.navigation.RoutePrefixImpl.value.<anonymous>' call
      tmp_2 = endsWith(tmp1_safe_receiver, _Char___init__impl__6a9atx(47)) ? tmp1_safe_receiver : tmp1_safe_receiver + '/';
    }
    var tmp2_elvis_lhs = tmp_2;
    tmp.a2j_1 = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
    this.b2j_1 = 0;
  }
  protoOf(RoutePrefixImpl).w2i = function (path) {
    if (isBlank(this.a2j_1))
      return path;
    if (!startsWith(path, '/'))
      return path;
    return dropLast(this.a2j_1, 1) + path;
  };
  protoOf(RoutePrefixImpl).toString = function () {
    return this.a2j_1;
  };
  function remove(_this__u8e3s4, path) {
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = _this__u8e3s4.m2();
    if (charSequenceLength(this_0) > 0) {
      tmp = removePrefix(path, dropLast(_this__u8e3s4.m2(), 1));
    } else {
      tmp = path;
    }
    return tmp;
  }
  protoOf(Node).h2j = function (name) {
    return this.d2j_1 === name;
  };
  protoOf(Node).i2j = function (routePart) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this.f2j_1.l();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'com.varabyte.kobweb.navigation.Node.findChild.<anonymous>' call
        if (element.h2j(routePart)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  };
  function Node(name, method) {
    this.d2j_1 = name;
    this.e2j_1 = method;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.f2j_1 = ArrayList_init_$Create$_0();
    this.g2j_1 = 8;
  }
  protoOf(Node).j2j = function (routePart, method) {
    var tmp;
    if (startsWith_0(routePart, _Char___init__impl__6a9atx(123)) ? endsWith(routePart, _Char___init__impl__6a9atx(125)) : false) {
      // Inline function 'kotlin.text.substring' call
      var endIndex = routePart.length - 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = routePart.substring(1, endIndex);
      tmp = new DynamicNode(tmp$ret$1, method);
    } else {
      tmp = new StaticNode(routePart, method);
    }
    var node = tmp;
    this.f2j_1.u(node);
    return node;
  };
  function RootNode() {
    Node.call(this, '', null);
    this.o2j_1 = 0;
  }
  function StaticNode(name, method) {
    Node.call(this, name, method);
    this.t2j_1 = 0;
  }
  protoOf(DynamicNode).h2j = function (name) {
    return true;
  };
  function DynamicNode(name, method) {
    Node.call(this, name, method);
    this.y2j_1 = 0;
  }
  function ResolvedEntry(node, routePart) {
    this.z2j_1 = node;
    this.a2k_1 = routePart;
  }
  function resolve($this, route) {
    var routeParts = split(route, charArrayOf([_Char___init__impl__6a9atx(47)]));
    // Inline function 'kotlin.collections.mutableListOf' call
    var resolved = ArrayList_init_$Create$_0();
    var currNode = $this.b2k_1;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(routeParts.k(0) === $this.b2k_1.d2j_1)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 1;
    var last = routeParts.j();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var routePart = routeParts.k(i);
        var tmp1_elvis_lhs = currNode.i2j(routePart);
        var tmp;
        if (tmp1_elvis_lhs == null) {
          return null;
        } else {
          tmp = tmp1_elvis_lhs;
        }
        currNode = tmp;
        resolved.u(new ResolvedEntry(currNode, routePart));
      }
       while (inductionVariable < last);
    return resolved;
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.s14(p0, p1);
    };
  }
  function RouteTree$createPageData$lambda(this$0) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.ju()) {
        if (isTraceInProgress()) {
          traceEventStart(-729357476, $changed, -1, 'com.varabyte.kobweb.navigation.RouteTree.createPageData.<anonymous> (RouteTree.kt:136)');
        }
        this$0.c2k_1(404, $composer_0, 6);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.xu();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function RouteTree() {
    this.b2k_1 = new RootNode();
    this.c2k_1 = ComposableSingletons$RouteTreeKt_getInstance().e2k_1;
    this.d2k_1 = 8;
  }
  protoOf(RouteTree).f2k = function (route) {
    var tmp0_safe_receiver = resolve(this, route);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : lastOrNull(tmp0_safe_receiver);
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.z2j_1;
    return !((tmp2_safe_receiver == null ? null : tmp2_safe_receiver.e2j_1) == null);
  };
  protoOf(RouteTree).g2k = function (route) {
    var resolvedEntries = resolve(this, route.o2h_1);
    var tmp1_safe_receiver = resolvedEntries == null ? null : last(resolvedEntries);
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.z2j_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.e2j_1;
    var tmp;
    if (tmp3_elvis_lhs == null) {
      tmp = ComposableLambda$invoke$ref(composableLambdaInstance(-729357476, true, RouteTree$createPageData$lambda(this)));
    } else {
      tmp = tmp3_elvis_lhs;
    }
    var pageMethod = tmp;
    // Inline function 'kotlin.collections.mutableMapOf' call
    var dynamicParams = LinkedHashMap_init_$Create$();
    if (resolvedEntries == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = resolvedEntries.l();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'com.varabyte.kobweb.navigation.RouteTree.createPageData.<anonymous>' call
        var tmp_0 = element.z2j_1;
        if (tmp_0 instanceof DynamicNode) {
          // Inline function 'kotlin.collections.set' call
          var key = element.z2j_1.d2j_1;
          var value = element.a2k_1;
          dynamicParams.j2(key, value);
        }
      }
    }
    return new PageData(pageMethod, new RouteInfo(route, dynamicParams));
  };
  protoOf(RouteTree).h2k = function (route, method) {
    if (!(resolve(this, route) == null))
      return false;
    var routeParts = split(route, charArrayOf([_Char___init__impl__6a9atx(47)]));
    var currNode = this.b2k_1;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(routeParts.k(0) === this.b2k_1.d2j_1)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 1;
    var last = routeParts.j();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var routePart = routeParts.k(i);
        var tmp1_elvis_lhs = currNode.i2j(routePart);
        var tmp;
        if (tmp1_elvis_lhs == null) {
          var tmp_0 = currNode;
          // Inline function 'kotlin.takeIf' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp_1;
          // Inline function 'com.varabyte.kobweb.navigation.RouteTree.register$composable.<anonymous>' call
          if (i === get_lastIndex(routeParts)) {
            tmp_1 = method;
          } else {
            tmp_1 = null;
          }
          var tmp$ret$2 = tmp_1;
          tmp = tmp_0.j2j(routePart, tmp$ret$2);
        } else {
          tmp = tmp1_elvis_lhs;
        }
        currNode = tmp;
      }
       while (inductionVariable < last);
    return true;
  };
  function PageData(pageMethod, routeInfo) {
    this.i2k_1 = pageMethod;
    this.j2k_1 = routeInfo;
    this.k2k_1 = 0;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.t1t(p0, p1, p2);
    };
  }
  function ComposableSingletons$RouteTreeKt$lambda_1$lambda_h43un7(errorCode, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.hv(errorCode) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
      if (isTraceInProgress()) {
        traceEventStart(-557678680, $dirty, -1, 'com.varabyte.kobweb.navigation.ComposableSingletons$RouteTreeKt.lambda-1.<anonymous> (RouteTree.kt:87)');
      }
      ErrorPage$composable(errorCode, $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    return Unit_instance;
  }
  function ComposableSingletons$RouteTreeKt() {
    ComposableSingletons$RouteTreeKt_instance = this;
    var tmp = this;
    tmp.e2k_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-557678680, false, ComposableSingletons$RouteTreeKt$lambda_1$lambda_h43un7));
  }
  var ComposableSingletons$RouteTreeKt_instance;
  function ComposableSingletons$RouteTreeKt_getInstance() {
    if (ComposableSingletons$RouteTreeKt_instance == null)
      new ComposableSingletons$RouteTreeKt();
    return ComposableSingletons$RouteTreeKt_instance;
  }
  function ErrorPage$composable(errorCode, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(24844165);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.hv(errorCode) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.ju()) {
      if (isTraceInProgress()) {
        traceEventStart(24844165, $dirty, -1, 'com.varabyte.kobweb.navigation.ErrorPage$composable (RouteTree.kt:21)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.navigation.ErrorPage$composable.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 542436721, true, ErrorPage$composable$lambda(errorCode));
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
        // Inline function 'com.varabyte.kobweb.navigation.ErrorPage$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.ev(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.nu();
      Div$composable(null, tmp0, $composer_0, 48, 1);
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
      tmp0_safe_receiver.s19(ErrorPage$composable$lambda_0(errorCode, $changed));
    }
  }
  function ErrorPage$composable$lambda($errorCode) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.ju()) {
        if (isTraceInProgress()) {
          traceEventStart(542436721, $changed, -1, 'com.varabyte.kobweb.navigation.ErrorPage$composable.<anonymous> (RouteTree.kt:23)');
        }
        Text$composable('Error code: ' + $errorCode, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.xu();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.t1t(p0, p1, p2);
    };
  }
  function ErrorPage$composable$lambda_0($errorCode, $$changed) {
    return function ($composer, $force) {
      ErrorPage$composable($errorCode, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function _set_activePageMethod__f6z3vj($this, _set____db54di) {
    illegalDecoyCallException('<set-activePageMethod>');
  }
  function _get_activePageMethod__dw5579($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.n2i_1;
    activePageMethod$factory();
    return this_0.m2();
  }
  function updatePageContext(_this__u8e3s4, $this, pathQueryAndFragment) {
    if (startsWith(pathQueryAndFragment, '#')) {
      var tmp0_safe_receiver = _this__u8e3s4.y2h_1.m2();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        _this__u8e3s4.y2h_1.up(tmp0_safe_receiver.t2h(VOID, VOID, removePrefix(pathQueryAndFragment, '#')));
        return true;
      }
      if (tmp == null) {
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        return false;
      }
    }
    var route = Companion_instance_1.t2i(pathQueryAndFragment);
    var tmp_0;
    if (!(route == null)) {
      var data = $this.o2i_1.g2k(route);
      $set_activePageMethod$$composable_u4dzqq($this, data.i2k_1);
      _this__u8e3s4.a2i(data.j2k_1);
      tmp_0 = true;
    } else {
      tmp_0 = false;
    }
    return tmp_0;
  }
  function normalize(_this__u8e3s4, $this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!Companion_instance_1.s2i(_this__u8e3s4)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var hrefResolved = Companion_instance_1.u2i(new URL(_this__u8e3s4, window.location.href)).toString();
    // Inline function 'kotlin.takeIf' call
    var this_0 = remove(Companion_instance_2, hrefResolved);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'com.varabyte.kobweb.navigation.Router.normalize.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_0) > 0) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    var withoutPrefix = tmp0_elvis_lhs == null ? '/' : tmp0_elvis_lhs;
    var hadPrefix = !(withoutPrefix === hrefResolved);
    var tmp_0 = Companion_instance_2;
    // Inline function 'kotlin.collections.fold' call
    var this_1 = $this.p2i_1;
    var accumulator = (new Route(withoutPrefix)).toString();
    var tmp0_iterator = this_1.l();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.navigation.Router.normalize.<anonymous>' call
      var acc = accumulator;
      var interceptor = new RouteInterceptorScope(acc);
      element(interceptor);
      accumulator = interceptor.q2k();
    }
    var tmp$ret$5 = accumulator;
    return prependIf(tmp_0, hadPrefix, tmp$ret$5);
  }
  function $set_activePageMethod$$composable_u4dzqq($this, set__$_ezb9bk) {
    var this_0 = $this.n2i_1;
    activePageMethod$factory_0();
    this_0.up(set__$_ezb9bk);
    return Unit_instance;
  }
  function Router$lambda(this$0) {
    return function (it) {
      var tmp = Companion_instance.v2h();
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.navigation.Router.<anonymous>.<anonymous>' call
      var it_0 = ensureNotNull(document.location);
      var tmp$ret$1 = removePrefix(it_0.href, it_0.origin);
      return updatePageContext(tmp, this$0, tmp$ret$1);
    };
  }
  function Router$renderActivePage$composable$lambda$lambda($pageMethod) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.ju()) {
        if (isTraceInProgress()) {
          traceEventStart(613218228, $changed, -1, 'com.varabyte.kobweb.navigation.Router.renderActivePage$composable.<anonymous>.<anonymous> (Router.kt:137)');
        }
        $pageMethod($composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.xu();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.s14(p0, p1);
    };
  }
  function Router$renderActivePage$composable$lambda($pageWrapper, $pageMethod) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.ju()) {
        if (isTraceInProgress()) {
          traceEventStart(-628364167, $changed, -1, 'com.varabyte.kobweb.navigation.Router.renderActivePage$composable.<anonymous> (Router.kt:136)');
        }
        var tmp_0 = $pageWrapper._v;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.navigation.Router.renderActivePage$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 613218228, true, Router$renderActivePage$composable$lambda$lambda($pageMethod));
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
        var tmp_2;
        if (invalid ? true : it === Companion_getInstance().gu_1) {
          // Inline function 'com.varabyte.kobweb.navigation.Router.renderActivePage$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_2(dispatchReceiver);
          $composer_1.ev(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.nu();
        tmp_0(tmp0, $composer_0, 6);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_instance;
        }
        tmp = tmp_4;
      } else {
        $composer_0.xu();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.s14(p0, p1);
    };
  }
  function Router$renderActivePage$composable$lambda_0($tmp0_rcvr, $pageWrapper, $$changed, $$default) {
    return function ($composer, $force) {
      $tmp0_rcvr.r2k($pageWrapper._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Router() {
    this.n2i_1 = mutableStateOf(null);
    this.o2i_1 = new RouteTree();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.p2i_1 = ArrayList_init_$Create$_0();
    Companion_instance.w2h(this);
    var tmp_0 = window;
    tmp_0.onpopstate = Router$lambda(this);
    this.q2i_1 = 8;
  }
  protoOf(Router).s2k = function (interceptor) {
    this.p2i_1.u(interceptor);
  };
  protoOf(Router).t2k = function (pathQueryAndFragment, updateHistoryMode, openLinkStrategy) {
    var extension = substringAfterLast(pathQueryAndFragment, _Char___init__impl__6a9atx(46), '');
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(extension) > 0) {
      tmp = !(extension === 'html');
    } else {
      tmp = false;
    }
    if (tmp) {
      return false;
    }
    var pathQueryAndFragment_0 = pathQueryAndFragment;
    if (Companion_instance_1.s2i(pathQueryAndFragment_0)) {
      pathQueryAndFragment_0 = normalize(pathQueryAndFragment_0, this);
      var tmp$ret$2;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var indexedObject = pathQueryAndFragment_0;
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(indexedObject)) {
          var element = charSequenceGet(indexedObject, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'com.varabyte.kobweb.navigation.Router.tryRoutingTo.<anonymous>' call
          if (!(!(element === _Char___init__impl__6a9atx(35)) ? !(element === _Char___init__impl__6a9atx(63)) : false)) {
            tmp$ret$2 = false;
            break $l$block;
          }
        }
        tmp$ret$2 = true;
      }
      if (tmp$ret$2) {
        var route = pathQueryAndFragment_0;
        if (!this.o2i_1.f2k(route)) {
          if (endsWith(route, _Char___init__impl__6a9atx(47))) {
            var withoutSlash = removeSuffix(route, '/');
            if (this.o2i_1.f2k(withoutSlash))
              pathQueryAndFragment_0 = withoutSlash;
          } else {
            var withSlash = route + '/';
            if (this.o2i_1.f2k(withSlash))
              pathQueryAndFragment_0 = withSlash;
          }
        }
      }
    }
    if (!openLinkStrategy.equals(OpenLinkStrategy_IN_PLACE_getInstance())) {
      open(window, pathQueryAndFragment_0, openLinkStrategy);
      return true;
    }
    var tmp_0;
    if (updatePageContext(Companion_instance.v2h(), this, pathQueryAndFragment_0)) {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var url = window.location.origin + pathQueryAndFragment_0;
      if (!(window.location.href === url)) {
        var newPathname = !(window.location.pathname === Companion_instance_1.u2i(new URL(url)).o2h_1);
        var tmp0 = updateHistoryMode.s9_1;
        if (tmp0 === 0) {
          window.history.pushState(window.history.state, '', url);
        } else if (tmp0 === 1) {
          window.history.replaceState(window.history.state, '', url);
        }
        if (newPathname) {
          var tmp1_safe_receiver = document.documentElement;
          if (tmp1_safe_receiver != null) {
            tmp1_safe_receiver.scrollTop = 0.0;
          }
        }
      }
      var tmp_1;
      if (contains(url, _Char___init__impl__6a9atx(35))) {
        var tmp2_safe_receiver = document.getElementById(substringAfter(url, _Char___init__impl__6a9atx(35)));
        if (tmp2_safe_receiver == null)
          null;
        else {
          tmp2_safe_receiver.scrollIntoView({behavior: 'smooth'});
        }
        tmp_1 = Unit_instance;
      }
      tmp_0 = true;
    } else {
      tmp_0 = false;
    }
    return tmp_0;
  };
  protoOf(Router).u2k = function (pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy) {
    if (!this.t2k(pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy)) {
      open(window, pathQueryAndFragment, openExternalLinksStrategy);
    }
  };
  protoOf(Router).r2i = function (pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy, $super) {
    updateHistoryMode = updateHistoryMode === VOID ? UpdateHistoryMode_PUSH_getInstance() : updateHistoryMode;
    openInternalLinksStrategy = openInternalLinksStrategy === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : openInternalLinksStrategy;
    openExternalLinksStrategy = openExternalLinksStrategy === VOID ? OpenLinkStrategy_IN_NEW_TAB_getInstance() : openExternalLinksStrategy;
    var tmp;
    if ($super === VOID) {
      this.u2k(pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy);
      tmp = Unit_instance;
    } else {
      tmp = $super.u2k.call(this, pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy);
    }
    return tmp;
  };
  protoOf(Router).r2k = function (pageWrapper, $composer, $changed, $default) {
    var pageWrapper_0 = {_v: pageWrapper};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(1838195952);
    if (!(($default & 1) === 0)) {
      pageWrapper_0._v = ComposableSingletons$RouterKt_getInstance().v2k_1;
    }
    if (isTraceInProgress()) {
      traceEventStart(1838195952, $changed, -1, 'com.varabyte.kobweb.navigation.Router.renderActivePage$composable (Router.kt:129)');
    }
    var tmp0_elvis_lhs = _get_activePageMethod__dw5579(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = "Call 'navigateTo' at least once before calling 'renderActivePage'";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var pageMethod = tmp;
    var tmp_0 = [get_PageContextLocal().o19(Companion_instance.v2h())];
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.navigation.Router.renderActivePage$composable.<anonymous>' call
    var tmp_1 = $composer_0;
    var dispatchReceiver = composableLambda(tmp_1, -628364167, true, Router$renderActivePage$composable$lambda(pageWrapper_0, pageMethod));
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
    var tmp_2;
    if (invalid ? true : it === Companion_getInstance().gu_1) {
      // Inline function 'com.varabyte.kobweb.navigation.Router.renderActivePage$composable.<anonymous>.<anonymous>' call
      var value = ComposableLambda$invoke$ref_3(dispatchReceiver);
      $composer_1.ev(value);
      tmp_2 = value;
    } else {
      tmp_2 = it;
    }
    var tmp_3 = tmp_2;
    var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
    $composer_1.nu();
    CompositionLocalProvider$composable(tmp_0, tmp0, $composer_0, 48);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.tu();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.s19(Router$renderActivePage$composable$lambda_0(this, pageWrapper_0, $changed, $default));
    }
  };
  protoOf(Router).w2k = function (route, autoPrefix, pageMethod) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(Companion_instance_1.s2i(route) ? startsWith_0(route, _Char___init__impl__6a9atx(47)) : false)) {
      // Inline function 'com.varabyte.kobweb.navigation.Router.register$composable.<anonymous>' call
      var message = 'Registration only allowed for internal, rooted routes, e.g. /example/path. Got: ' + route;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.o2i_1.h2k(prependIf(Companion_instance_2, autoPrefix, route), pageMethod)) {
      // Inline function 'com.varabyte.kobweb.navigation.Router.register$composable.<anonymous>' call
      var message_0 = 'Registration failure. Path is already registered: ' + route;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  };
  protoOf(Router).x2k = function (route, autoPrefix, pageMethod, $super) {
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    var tmp;
    if ($super === VOID) {
      this.w2k(route, autoPrefix, pageMethod);
      tmp = Unit_instance;
    } else {
      tmp = $super.w2k.call(this, route, autoPrefix, pageMethod);
    }
    return tmp;
  };
  function RouteInterceptorScope(pathQueryAndFragment) {
    this.l2k_1 = new Route(pathQueryAndFragment);
    this.m2k_1 = this.l2k_1.o2h_1;
    this.n2k_1 = toMutableMap(this.l2k_1.p2h_1);
    this.o2k_1 = this.l2k_1.q2h_1;
    this.p2k_1 = 8;
  }
  protoOf(RouteInterceptorScope).y2k = function (value) {
    this.m2k_1 = startsWith_0(value, _Char___init__impl__6a9atx(47)) ? value : '/' + value;
  };
  protoOf(RouteInterceptorScope).q2k = function () {
    return Route_init_$Create$(this.m2k_1, this.n2k_1, this.o2k_1).toString();
  };
  var UpdateHistoryMode_PUSH_instance;
  var UpdateHistoryMode_REPLACE_instance;
  var UpdateHistoryMode_entriesInitialized;
  function UpdateHistoryMode_initEntries() {
    if (UpdateHistoryMode_entriesInitialized)
      return Unit_instance;
    UpdateHistoryMode_entriesInitialized = true;
    UpdateHistoryMode_PUSH_instance = new UpdateHistoryMode('PUSH', 0);
    UpdateHistoryMode_REPLACE_instance = new UpdateHistoryMode('REPLACE', 1);
  }
  function UpdateHistoryMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.t1t(p0, p1, p2);
    };
  }
  function ComposableSingletons$RouterKt$lambda_1$lambda_cmwzz7(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.iv(it) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
      if (isTraceInProgress()) {
        traceEventStart(-12986461, $dirty, -1, 'com.varabyte.kobweb.navigation.ComposableSingletons$RouterKt.lambda-1.<anonymous> (Router.kt:129)');
      }
      it($composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    return Unit_instance;
  }
  function ComposableSingletons$RouterKt() {
    ComposableSingletons$RouterKt_instance = this;
    var tmp = this;
    tmp.v2k_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(-12986461, false, ComposableSingletons$RouterKt$lambda_1$lambda_cmwzz7));
  }
  var ComposableSingletons$RouterKt_instance;
  function ComposableSingletons$RouterKt_getInstance() {
    if (ComposableSingletons$RouterKt_instance == null)
      new ComposableSingletons$RouterKt();
    return ComposableSingletons$RouterKt_instance;
  }
  function UpdateHistoryMode_PUSH_getInstance() {
    UpdateHistoryMode_initEntries();
    return UpdateHistoryMode_PUSH_instance;
  }
  function UpdateHistoryMode_REPLACE_getInstance() {
    UpdateHistoryMode_initEntries();
    return UpdateHistoryMode_REPLACE_instance;
  }
  function activePageMethod$factory() {
    return getPropertyCallableRef('activePageMethod', 1, KMutableProperty1, function (receiver) {
      return _get_activePageMethod__dw5579(receiver);
    }, function (receiver, value) {
      return _set_activePageMethod__f6z3vj(receiver, value);
    });
  }
  function activePageMethod$factory_0() {
    return getPropertyCallableRef('activePageMethod', 1, KMutableProperty1, function (receiver) {
      return _get_activePageMethod__dw5579(receiver);
    }, function (receiver, value) {
      return _set_activePageMethod__f6z3vj(receiver, value);
    });
  }
  //region block: init
  AppGlobals_instance = new AppGlobals();
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Companion_instance_3 = new Companion_3();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = initKobweb;
  _.$_$.b = KobwebApp$composable;
  _.$_$.c = rememberPageContext$composable;
  _.$_$.d = Anchor$composable;
  _.$_$.e = Router;
  _.$_$.f = prependIf;
  _.$_$.g = UpdateHistoryMode_REPLACE_getInstance;
  _.$_$.h = AppGlobals_instance;
  _.$_$.i = Companion_instance_2;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-kobweb-core.js.map
