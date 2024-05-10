(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-runtime.js', './html-html-core.js', './kobweb-frontend-compose-html-ext.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-runtime.js'), require('./html-html-core.js'), require('./kobweb-frontend-compose-html-ext.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-compose'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-kobweb-compose'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-compose'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'kobweb-frontend-kobweb-compose'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-compose'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-kobweb-compose'.");
    }
    if (typeof this['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-compose'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-kobweb-compose'.");
    }
    root['kobweb-frontend-kobweb-compose'] = factory(typeof this['kobweb-frontend-kobweb-compose'] === 'undefined' ? {} : this['kobweb-frontend-kobweb-compose'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-runtime'], this['html-html-core'], this['kobweb-frontend-compose-html-ext']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_compose_html_ext) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.i6;
  var interfaceMeta = kotlin_kotlin.$_$.y5;
  var setMetadataFor = kotlin_kotlin.$_$.j6;
  var objectMeta = kotlin_kotlin.$_$.h6;
  var VOID = kotlin_kotlin.$_$.c;
  var Unit_instance = kotlin_kotlin.$_$.y1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var THROW_CCE = kotlin_kotlin.$_$.i8;
  var Div$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.k3;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var registerRefScope$composable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q2;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.r8;
  var equals = kotlin_kotlin.$_$.q5;
  var isInterface = kotlin_kotlin.$_$.b6;
  var grid = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e1;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.w2;
  var get_fr = kotlin_org_jetbrains_compose_html_html_core.$_$.a2;
  var gridArea = kotlin_org_jetbrains_compose_html_html_core.$_$.c2;
  var Companion_instance = kotlin_org_jetbrains_compose_html_html_core.$_$.b;
  var alignItems = kotlin_org_jetbrains_compose_html_html_core.$_$.g1;
  var Companion_instance_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j3;
  var justifyItems = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g1;
  var Companion_instance_1 = kotlin_org_jetbrains_compose_html_html_core.$_$.c;
  var alignSelf = kotlin_org_jetbrains_compose_html_html_core.$_$.h1;
  var Companion_instance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k3;
  var justifySelf = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h1;
  var Companion_instance_3 = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var display = kotlin_org_jetbrains_compose_html_html_core.$_$.s1;
  var Companion_instance_4 = kotlin_org_jetbrains_compose_html_html_core.$_$.j;
  var flexDirection = kotlin_org_jetbrains_compose_html_html_core.$_$.v1;
  var Companion_instance_5 = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var justifyContent = kotlin_org_jetbrains_compose_html_html_core.$_$.j2;
  var flexGrow = kotlin_org_jetbrains_compose_html_html_core.$_$.w1;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.f1;
  var hashCode = kotlin_kotlin.$_$.w5;
  var classMeta = kotlin_kotlin.$_$.n5;
  var ComparableAttrsScope_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c3;
  var ComparableStyleScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g;
  var toString = kotlin_kotlin.$_$.k6;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.z;
  var coerceIn = kotlin_kotlin.$_$.n6;
  var numberToInt = kotlin_kotlin.$_$.f6;
  var ariaHidden = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o;
  var ariaDisabled = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n;
  var animation = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m;
  var backgroundColor = kotlin_org_jetbrains_compose_html_html_core.$_$.i1;
  var background = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q;
  var backgroundImage = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p;
  var borderColor = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s;
  var borderStyle = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u;
  var borderWidth = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w;
  var borderBottom = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r;
  var borderRadius = kotlin_org_jetbrains_compose_html_html_core.$_$.l1;
  var border = kotlin_org_jetbrains_compose_html_html_core.$_$.m1;
  var borderTop = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v;
  var borderLeft = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t;
  var borderRadius_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.k1;
  var boxShadow = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x;
  var boxSizing = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y;
  var color = kotlin_org_jetbrains_compose_html_html_core.$_$.q1;
  var opacity = kotlin_org_jetbrains_compose_html_html_core.$_$.s2;
  var visibility = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e2;
  var joinToString = kotlin_kotlin.$_$.l3;
  var gap = kotlin_org_jetbrains_compose_html_html_core.$_$.b2;
  var fontWeight = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b1;
  var fontSize = kotlin_org_jetbrains_compose_html_html_core.$_$.y1;
  var fontFamily = kotlin_org_jetbrains_compose_html_html_core.$_$.x1;
  var fontWeight_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.z1;
  var fontSize_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a1;
  var gridTemplateColumns = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c1;
  var gridTemplateRows = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d1;
  var gridRow = kotlin_org_jetbrains_compose_html_html_core.$_$.f2;
  var userSelect = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c2;
  var cursor = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z;
  var pointerEvents = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r1;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.u2;
  var overflowX = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n1;
  var overflowY = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o1;
  var width = kotlin_org_jetbrains_compose_html_html_core.$_$.f3;
  var margin = kotlin_org_jetbrains_compose_html_html_core.$_$.m2;
  var padding = kotlin_org_jetbrains_compose_html_html_core.$_$.t2;
  var verticalAlign = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d2;
  var minWidth = kotlin_org_jetbrains_compose_html_html_core.$_$.q2;
  var height = kotlin_org_jetbrains_compose_html_html_core.$_$.i2;
  var lineHeight = kotlin_org_jetbrains_compose_html_html_core.$_$.l2;
  var overflow = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p1;
  var paddingInline = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q1;
  var minHeight = kotlin_org_jetbrains_compose_html_html_core.$_$.p2;
  var overflowWrap = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m1;
  var maxWidth = kotlin_org_jetbrains_compose_html_html_core.$_$.n2;
  var zIndex = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g2;
  var listStyle = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i1;
  var objectFit = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k1;
  var outline = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l1;
  var position = kotlin_org_jetbrains_compose_html_html_core.$_$.v2;
  var top = kotlin_org_jetbrains_compose_html_html_core.$_$.b3;
  var left = kotlin_org_jetbrains_compose_html_html_core.$_$.k2;
  var right = kotlin_org_jetbrains_compose_html_html_core.$_$.y2;
  var bottom = kotlin_org_jetbrains_compose_html_html_core.$_$.n1;
  var scrollBehavior = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u1;
  var whiteSpace = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f2;
  var textAlign = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x1;
  var textDecorationLine = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y1;
  var translateX = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a2;
  var scale = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t1;
  var translateY = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b2;
  var scale_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s1;
  var transition = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z1;
  var setVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v1;
  var setVariable_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(HorizontalOrVertical, 'HorizontalOrVertical', interfaceMeta);
  setMetadataFor(End, 'End', objectMeta);
  setMetadataFor(Start, 'Start', objectMeta);
  setMetadataFor(Top, 'Top', objectMeta);
  setMetadataFor(Bottom, 'Bottom', objectMeta);
  setMetadataFor(Center, 'Center', objectMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(SpaceEvenly, 'SpaceEvenly', objectMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(SpaceBetween, 'SpaceBetween', objectMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(SpaceAround, 'SpaceAround', objectMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(FromStyle, 'FromStyle', objectMeta, VOID, [HorizontalOrVertical]);
  function align(_this__u8e3s4, alignment) {
    return attrsModifier(_this__u8e3s4, BoxScope$align$lambda(alignment));
  }
  setMetadataFor(BoxScope, 'BoxScope', interfaceMeta);
  setMetadataFor(ComposableSingletons$BoxKt, 'ComposableSingletons$BoxKt', objectMeta);
  setMetadataFor(BoxScopeInstance, 'BoxScopeInstance', objectMeta, VOID, [BoxScope]);
  setMetadataFor(BoxDefaults, 'BoxDefaults', objectMeta);
  setMetadataFor(ColumnDefaults, 'ColumnDefaults', objectMeta);
  setMetadataFor(ColumnScopeInstance, 'ColumnScopeInstance', objectMeta);
  function align_0(_this__u8e3s4, alignment) {
    return attrsModifier(_this__u8e3s4, RowScope$align$lambda(alignment));
  }
  setMetadataFor(RowScope, 'RowScope', interfaceMeta);
  setMetadataFor(RowDefaults, 'RowDefaults', objectMeta);
  setMetadataFor(RowScopeInstance, 'RowScopeInstance', objectMeta, VOID, [RowScope]);
  setMetadataFor(KobwebComposeStyleSheet, 'KobwebComposeStyleSheet', objectMeta, StyleSheet);
  setMetadataFor(TopStart, 'TopStart', objectMeta);
  setMetadataFor(TopCenter, 'TopCenter', objectMeta);
  setMetadataFor(TopEnd, 'TopEnd', objectMeta);
  setMetadataFor(CenterStart, 'CenterStart', objectMeta);
  setMetadataFor(Center_0, 'Center', objectMeta);
  setMetadataFor(CenterEnd, 'CenterEnd', objectMeta);
  setMetadataFor(BottomStart, 'BottomStart', objectMeta);
  setMetadataFor(BottomCenter, 'BottomCenter', objectMeta);
  setMetadataFor(BottomEnd, 'BottomEnd', objectMeta);
  setMetadataFor(Top_0, 'Top', objectMeta);
  setMetadataFor(CenterVertically, 'CenterVertically', objectMeta);
  setMetadataFor(Bottom_0, 'Bottom', objectMeta);
  setMetadataFor(Start_0, 'Start', objectMeta);
  setMetadataFor(CenterHorizontally, 'CenterHorizontally', objectMeta);
  setMetadataFor(End_0, 'End', objectMeta);
  setMetadataFor(FromStyle_0, 'FromStyle', objectMeta);
  function then(other) {
    return other === Companion_instance_6 ? this : new ChainedModifier(this, other);
  }
  setMetadataFor(Modifier, 'Modifier', interfaceMeta);
  function fold(initial, operation) {
    return operation(initial, this);
  }
  setMetadataFor(Element, 'Element', interfaceMeta, VOID, [Modifier]);
  setMetadataFor(Companion, 'Companion', objectMeta, VOID, [Modifier]);
  setMetadataFor(ChainedModifier, 'ChainedModifier', classMeta, VOID, [Modifier]);
  setMetadataFor(AttrsModifier, 'AttrsModifier', classMeta, VOID, [Element]);
  setMetadataFor(StyleModifier, 'StyleModifier', classMeta, VOID, [Element]);
  setMetadataFor(Rgb, 'Rgb', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Colors, 'Colors', objectMeta);
  setMetadataFor(BorderScope, 'BorderScope', classMeta);
  setMetadataFor(OverflowScope, 'OverflowScope', classMeta);
  //endregion
  function HorizontalOrVertical() {
  }
  function End() {
    this.z2k_1 = 0;
  }
  var End_instance;
  function End_getInstance() {
    return End_instance;
  }
  function Start() {
    this.a2l_1 = 0;
  }
  var Start_instance;
  function Start_getInstance() {
    return Start_instance;
  }
  function Top() {
    this.b2l_1 = 0;
  }
  var Top_instance;
  function Top_getInstance() {
    return Top_instance;
  }
  function Bottom() {
    this.c2l_1 = 0;
  }
  var Bottom_instance;
  function Bottom_getInstance() {
    return Bottom_instance;
  }
  function Center() {
    this.d2l_1 = 0;
  }
  var Center_instance;
  function Center_getInstance() {
    return Center_instance;
  }
  function SpaceEvenly() {
    this.e2l_1 = 0;
  }
  var SpaceEvenly_instance;
  function SpaceEvenly_getInstance() {
    return SpaceEvenly_instance;
  }
  function SpaceBetween() {
    this.f2l_1 = 0;
  }
  var SpaceBetween_instance;
  function SpaceBetween_getInstance() {
    return SpaceBetween_instance;
  }
  function SpaceAround() {
    this.g2l_1 = 0;
  }
  var SpaceAround_instance;
  function SpaceAround_getInstance() {
    return SpaceAround_instance;
  }
  function FromStyle() {
    this.h2l_1 = 0;
  }
  var FromStyle_instance;
  function FromStyle_getInstance() {
    return FromStyle_instance;
  }
  function BoxScope$align$lambda($alignment) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.q1v([toClassName_0($alignment) + '-self']);
      return Unit_instance;
    };
  }
  function BoxScope() {
  }
  function Box$composable(modifier, contentAlignment, ref, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var contentAlignment_0 = {_v: contentAlignment};
    var ref_0 = {_v: ref};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(921036704);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.fv(contentAlignment_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.fv(ref_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.iv(content_0._v) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.ju()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance_6;
      }
      if (!(($default & 2) === 0)) {
        contentAlignment_0._v = TopStart_instance;
      }
      if (!(($default & 4) === 0)) {
        ref_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        content_0._v = ComposableSingletons$BoxKt_getInstance().j2l_1;
      }
      if (isTraceInProgress()) {
        traceEventStart(921036704, $dirty, -1, 'com.varabyte.kobweb.compose.foundation.layout.Box$composable (Box.kt:44)');
      }
      var tmp = toAttrs(boxClasses(modifier_0._v, contentAlignment_0._v));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Box$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 721727587, true, Box$composable$lambda(ref_0, content_0));
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
        // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Box$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_0(dispatchReceiver);
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
      tmp0_safe_receiver.s19(Box$composable$lambda_0(modifier_0, contentAlignment_0, ref_0, content_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.t1t(p0, p1, p2);
    };
  }
  function ComposableSingletons$BoxKt$lambda_1$lambda_ab4h0h($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.ju()) {
      if (isTraceInProgress()) {
        traceEventStart(-1088174424, $changed, -1, 'com.varabyte.kobweb.compose.foundation.layout.ComposableSingletons$BoxKt.lambda-1.<anonymous> (Box.kt:43)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    return Unit_instance;
  }
  function ComposableSingletons$BoxKt() {
    ComposableSingletons$BoxKt_instance = this;
    var tmp = this;
    tmp.j2l_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-1088174424, false, ComposableSingletons$BoxKt$lambda_1$lambda_ab4h0h));
  }
  var ComposableSingletons$BoxKt_instance;
  function ComposableSingletons$BoxKt_getInstance() {
    if (ComposableSingletons$BoxKt_instance == null)
      new ComposableSingletons$BoxKt();
    return ComposableSingletons$BoxKt_instance;
  }
  function boxClasses(_this__u8e3s4, contentAlignment) {
    contentAlignment = contentAlignment === VOID ? BoxDefaults_getInstance().k2l_1 : contentAlignment;
    return classNames(_this__u8e3s4, ['kobweb-box', toClassName_0(contentAlignment)]);
  }
  function BoxScopeInstance() {
    this.m2l_1 = 0;
  }
  var BoxScopeInstance_instance;
  function BoxScopeInstance_getInstance() {
    return BoxScopeInstance_instance;
  }
  function BoxDefaults() {
    BoxDefaults_instance = this;
    this.k2l_1 = TopStart_instance;
    this.l2l_1 = 8;
  }
  var BoxDefaults_instance;
  function BoxDefaults_getInstance() {
    if (BoxDefaults_instance == null)
      new BoxDefaults();
    return BoxDefaults_instance;
  }
  function Box$composable$lambda($ref, $content) {
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
          traceEventStart(721727587, $dirty, -1, 'com.varabyte.kobweb.compose.foundation.layout.Box$composable.<anonymous> (Box.kt:46)');
        }
        registerRefScope$composable($this$Div, $ref._v, $composer_0, 14 & $dirty);
        $content._v(BoxScopeInstance_instance, $composer_0, 6);
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
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.t1t(p0, p1, p2);
    };
  }
  function Box$composable$lambda_0($modifier, $contentAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Box$composable($modifier._v, $contentAlignment._v, $ref._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Column$composable(modifier, verticalArrangement, horizontalAlignment, ref, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var verticalArrangement_0 = {_v: verticalArrangement};
    var horizontalAlignment_0 = {_v: horizontalAlignment};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(-1435219930);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv(modifier_0._v) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ((($default & 2) === 0 ? $composer_0.fv(verticalArrangement_0._v) : false) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ((($default & 4) === 0 ? $composer_0.fv(horizontalAlignment_0._v) : false) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.fv(ref_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.iv(content) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.ju()) {
      $composer_0.qu();
      if (($changed & 1) === 0 ? true : $composer_0.ku()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_instance_6;
        }
        if (!(($default & 2) === 0)) {
          verticalArrangement_0._v = ColumnDefaults_getInstance().n2l_1;
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          horizontalAlignment_0._v = ColumnDefaults_getInstance().o2l_1;
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          ref_0._v = null;
        }
      } else {
        $composer_0.xu();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.ru();
      if (isTraceInProgress()) {
        traceEventStart(-1435219930, $dirty, -1, 'com.varabyte.kobweb.compose.foundation.layout.Column$composable (Column.kt:48)');
      }
      var tmp = toAttrs(columnClasses(modifier_0._v, verticalArrangement_0._v, horizontalAlignment_0._v));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Column$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 1861113368, true, Column$composable$lambda(ref_0, content));
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
        // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Column$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
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
      tmp0_safe_receiver.s19(Column$composable$lambda_0(modifier_0, verticalArrangement_0, horizontalAlignment_0, ref_0, content, $changed, $default));
    }
  }
  function ColumnDefaults() {
    ColumnDefaults_instance = this;
    this.n2l_1 = Top_instance;
    this.o2l_1 = Start_instance_0;
    this.p2l_1 = 0;
  }
  var ColumnDefaults_instance;
  function ColumnDefaults_getInstance() {
    if (ColumnDefaults_instance == null)
      new ColumnDefaults();
    return ColumnDefaults_instance;
  }
  function columnClasses(_this__u8e3s4, verticalArrangement, horizontalAlignment) {
    verticalArrangement = verticalArrangement === VOID ? ColumnDefaults_getInstance().n2l_1 : verticalArrangement;
    horizontalAlignment = horizontalAlignment === VOID ? ColumnDefaults_getInstance().o2l_1 : horizontalAlignment;
    return classNames(_this__u8e3s4, ['kobweb-col', toClassName_3(verticalArrangement), toClassName_1(horizontalAlignment)]);
  }
  function ColumnScopeInstance() {
    this.q2l_1 = 0;
  }
  var ColumnScopeInstance_instance;
  function ColumnScopeInstance_getInstance() {
    return ColumnScopeInstance_instance;
  }
  function Column$composable$lambda($ref, $content) {
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
          traceEventStart(1861113368, $dirty, -1, 'com.varabyte.kobweb.compose.foundation.layout.Column$composable.<anonymous> (Column.kt:50)');
        }
        registerRefScope$composable($this$Div, $ref._v, $composer_0, 14 & $dirty);
        $content(ColumnScopeInstance_instance, $composer_0, 6);
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
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.t1t(p0, p1, p2);
    };
  }
  function Column$composable$lambda_0($modifier, $verticalArrangement, $horizontalAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Column$composable($modifier._v, $verticalArrangement._v, $horizontalAlignment._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function rowClasses(_this__u8e3s4, horizontalArrangement, verticalAlignment) {
    horizontalArrangement = horizontalArrangement === VOID ? RowDefaults_getInstance().r2l_1 : horizontalArrangement;
    verticalAlignment = verticalAlignment === VOID ? RowDefaults_getInstance().s2l_1 : verticalAlignment;
    return classNames(_this__u8e3s4, ['kobweb-row', toClassName_2(horizontalArrangement), toClassName(verticalAlignment)]);
  }
  function RowScope$align$lambda($alignment) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.q1v([toClassName($alignment) + '-self']);
      return Unit_instance;
    };
  }
  function RowScope() {
  }
  function Row$composable(modifier, horizontalArrangement, verticalAlignment, ref, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var horizontalArrangement_0 = {_v: horizontalArrangement};
    var verticalAlignment_0 = {_v: verticalAlignment};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(2022945866);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv(modifier_0._v) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ((($default & 2) === 0 ? $composer_0.fv(horizontalArrangement_0._v) : false) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ((($default & 4) === 0 ? $composer_0.fv(verticalAlignment_0._v) : false) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.fv(ref_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.iv(content) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.ju()) {
      $composer_0.qu();
      if (($changed & 1) === 0 ? true : $composer_0.ku()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_instance_6;
        }
        if (!(($default & 2) === 0)) {
          horizontalArrangement_0._v = RowDefaults_getInstance().r2l_1;
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          verticalAlignment_0._v = RowDefaults_getInstance().s2l_1;
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          ref_0._v = null;
        }
      } else {
        $composer_0.xu();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.ru();
      if (isTraceInProgress()) {
        traceEventStart(2022945866, $dirty, -1, 'com.varabyte.kobweb.compose.foundation.layout.Row$composable (Row.kt:49)');
      }
      var tmp = toAttrs(rowClasses(modifier_0._v, horizontalArrangement_0._v, verticalAlignment_0._v));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Row$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 1725920680, true, Row$composable$lambda(ref_0, content));
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
        // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Row$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_2(dispatchReceiver);
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
      tmp0_safe_receiver.s19(Row$composable$lambda_0(modifier_0, horizontalArrangement_0, verticalAlignment_0, ref_0, content, $changed, $default));
    }
  }
  function RowDefaults() {
    RowDefaults_instance = this;
    this.r2l_1 = Start_instance;
    this.s2l_1 = Top_instance_0;
    this.t2l_1 = 0;
  }
  var RowDefaults_instance;
  function RowDefaults_getInstance() {
    if (RowDefaults_instance == null)
      new RowDefaults();
    return RowDefaults_instance;
  }
  function RowScopeInstance() {
    this.v2l_1 = 0;
  }
  var RowScopeInstance_instance;
  function RowScopeInstance_getInstance() {
    return RowScopeInstance_instance;
  }
  function Row$composable$lambda($ref, $content) {
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
          traceEventStart(1725920680, $dirty, -1, 'com.varabyte.kobweb.compose.foundation.layout.Row$composable.<anonymous> (Row.kt:51)');
        }
        registerRefScope$composable($this$Div, $ref._v, $composer_0, 14 & $dirty);
        $content(RowScopeInstance_instance, $composer_0, 6);
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
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.t1t(p0, p1, p2);
    };
  }
  function Row$composable$lambda_0($modifier, $horizontalArrangement, $verticalAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Row$composable($modifier._v, $horizontalArrangement._v, $verticalAlignment._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Spacer$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(-1458211606);
    if (!($changed === 0) ? true : !$composer_0.ju()) {
      if (isTraceInProgress()) {
        traceEventStart(-1458211606, $changed, -1, 'com.varabyte.kobweb.compose.foundation.layout.Spacer$composable (Spacer.kt:9)');
      }
      $composer_0.mu(-2052795679);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.dv();
      var tmp;
      if (false ? true : it === Companion_getInstance().gu_1) {
        // Inline function 'com.varabyte.kobweb.compose.foundation.layout.Spacer$composable.<anonymous>' call
        var value = Spacer$composable$lambda;
        this_0.ev(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.nu();
      Div$composable(tmpCache, null, $composer_0, 0, 2);
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
      tmp0_safe_receiver.s19(Spacer$composable$lambda_0($changed));
    }
  }
  function Spacer$composable$lambda($this$Div) {
    $this$Div.q1v(['kobweb-spacer']);
    return Unit_instance;
  }
  function Spacer$composable$lambda_0($$changed) {
    return function ($composer, $force) {
      Spacer$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function toClassName(_this__u8e3s4) {
    var tmp;
    if (equals(_this__u8e3s4, Top_instance_0)) {
      tmp = 'kobweb-align-top';
    } else if (equals(_this__u8e3s4, CenterVertically_instance)) {
      tmp = 'kobweb-align-center-vert';
    } else if (equals(_this__u8e3s4, Bottom_instance_0)) {
      tmp = 'kobweb-align-bottom';
    } else if (equals(_this__u8e3s4, FromStyle_instance_0)) {
      tmp = 'kobweb-align-from-style-vert';
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function toClassName_0(_this__u8e3s4) {
    var tmp;
    if (equals(_this__u8e3s4, TopStart_instance)) {
      tmp = 'kobweb-align-top-start';
    } else if (equals(_this__u8e3s4, TopCenter_instance)) {
      tmp = 'kobweb-align-top-center';
    } else if (equals(_this__u8e3s4, TopEnd_instance)) {
      tmp = 'kobweb-align-top-end';
    } else if (equals(_this__u8e3s4, CenterStart_instance)) {
      tmp = 'kobweb-align-center-start';
    } else if (equals(_this__u8e3s4, Center_instance_0)) {
      tmp = 'kobweb-align-center';
    } else if (equals(_this__u8e3s4, CenterEnd_instance)) {
      tmp = 'kobweb-align-center-end';
    } else if (equals(_this__u8e3s4, BottomStart_instance)) {
      tmp = 'kobweb-align-bottom-start';
    } else if (equals(_this__u8e3s4, BottomCenter_instance)) {
      tmp = 'kobweb-align-bottom-center';
    } else if (equals(_this__u8e3s4, BottomEnd_instance)) {
      tmp = 'kobweb-align-bottom-end';
    } else if (equals(_this__u8e3s4, FromStyle_instance_0)) {
      tmp = 'kobweb-align-from-style';
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function toClassName_1(_this__u8e3s4) {
    var tmp;
    if (equals(_this__u8e3s4, Start_instance_0)) {
      tmp = 'kobweb-align-start';
    } else if (equals(_this__u8e3s4, CenterHorizontally_instance)) {
      tmp = 'kobweb-align-center-horiz';
    } else if (equals(_this__u8e3s4, End_instance_0)) {
      tmp = 'kobweb-align-end';
    } else if (equals(_this__u8e3s4, FromStyle_instance_0)) {
      tmp = 'kobweb-align-from-style-horiz';
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function toClassName_2(_this__u8e3s4) {
    var tmp;
    if (equals(_this__u8e3s4, End_instance)) {
      tmp = 'kobweb-arrange-end';
    } else {
      if (equals(_this__u8e3s4, Start_instance)) {
        tmp = 'kobweb-arrange-start';
      } else {
        if (isInterface(_this__u8e3s4, HorizontalOrVertical)) {
          tmp = toClassName_4(_this__u8e3s4);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function toClassName_3(_this__u8e3s4) {
    var tmp;
    if (equals(_this__u8e3s4, Top_instance)) {
      tmp = 'kobweb-arrange-top';
    } else {
      if (equals(_this__u8e3s4, Bottom_instance)) {
        tmp = 'kobweb-arrange-bottom';
      } else {
        if (isInterface(_this__u8e3s4, HorizontalOrVertical)) {
          tmp = toClassName_4(_this__u8e3s4);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function toClassName_4(_this__u8e3s4) {
    var tmp;
    if (equals(_this__u8e3s4, Center_instance)) {
      tmp = 'kobweb-arrange-center';
    } else if (equals(_this__u8e3s4, SpaceAround_instance)) {
      tmp = 'kobweb-arrange-space-around';
    } else if (equals(_this__u8e3s4, SpaceBetween_instance)) {
      tmp = 'kobweb-arrange-space-between';
    } else if (equals(_this__u8e3s4, SpaceEvenly_instance)) {
      tmp = 'kobweb-arrange-space-evenly';
    } else if (equals(_this__u8e3s4, FromStyle_instance)) {
      tmp = 'kobweb-arrange-from-style';
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function initBox($this) {
    $this.k1z('.kobweb-box', KobwebComposeStyleSheet$initBox$lambda);
    $this.k1z('.kobweb-box > *', KobwebComposeStyleSheet$initBox$lambda_0);
    $this.k1z('.kobweb-box.kobweb-align-top-start', KobwebComposeStyleSheet$initBox$lambda_1);
    $this.k1z('.kobweb-box.kobweb-align-top-center', KobwebComposeStyleSheet$initBox$lambda_2);
    $this.k1z('.kobweb-box.kobweb-align-top-end', KobwebComposeStyleSheet$initBox$lambda_3);
    $this.k1z('.kobweb-box.kobweb-align-center-start', KobwebComposeStyleSheet$initBox$lambda_4);
    $this.k1z('.kobweb-box.kobweb-align-center', KobwebComposeStyleSheet$initBox$lambda_5);
    $this.k1z('.kobweb-box.kobweb-align-center-end', KobwebComposeStyleSheet$initBox$lambda_6);
    $this.k1z('.kobweb-box.kobweb-align-bottom-start', KobwebComposeStyleSheet$initBox$lambda_7);
    $this.k1z('.kobweb-box.kobweb-align-bottom-center', KobwebComposeStyleSheet$initBox$lambda_8);
    $this.k1z('.kobweb-box.kobweb-align-bottom-end', KobwebComposeStyleSheet$initBox$lambda_9);
    $this.k1z('.kobweb-box > .kobweb-align-top-start-self', KobwebComposeStyleSheet$initBox$lambda_10);
    $this.k1z('.kobweb-box > .kobweb-align-top-center-self', KobwebComposeStyleSheet$initBox$lambda_11);
    $this.k1z('.kobweb-box > .kobweb-align-top-end-self', KobwebComposeStyleSheet$initBox$lambda_12);
    $this.k1z('.kobweb-box > .kobweb-align-center-start-self', KobwebComposeStyleSheet$initBox$lambda_13);
    $this.k1z('.kobweb-box > .kobweb-align-center-self', KobwebComposeStyleSheet$initBox$lambda_14);
    $this.k1z('.kobweb-box > .kobweb-align-center-end-self', KobwebComposeStyleSheet$initBox$lambda_15);
    $this.k1z('.kobweb-box > .kobweb-align-bottom-start-self', KobwebComposeStyleSheet$initBox$lambda_16);
    $this.k1z('.kobweb-box > .kobweb-align-bottom-center-self', KobwebComposeStyleSheet$initBox$lambda_17);
    $this.k1z('.kobweb-box > .kobweb-align-bottom-end-self', KobwebComposeStyleSheet$initBox$lambda_18);
  }
  function initRow($this) {
    $this.k1z('.kobweb-row', KobwebComposeStyleSheet$initRow$lambda);
    $this.k1z('.kobweb-row.kobweb-arrange-start', KobwebComposeStyleSheet$initRow$lambda_0);
    $this.k1z('.kobweb-row.kobweb-arrange-center', KobwebComposeStyleSheet$initRow$lambda_1);
    $this.k1z('.kobweb-row.kobweb-arrange-end', KobwebComposeStyleSheet$initRow$lambda_2);
    $this.k1z('.kobweb-row.kobweb-arrange-space-evenly', KobwebComposeStyleSheet$initRow$lambda_3);
    $this.k1z('.kobweb-row.kobweb-arrange-space-between', KobwebComposeStyleSheet$initRow$lambda_4);
    $this.k1z('.kobweb-row.kobweb-arrange-space-around', KobwebComposeStyleSheet$initRow$lambda_5);
    $this.k1z('.kobweb-row.kobweb-align-top', KobwebComposeStyleSheet$initRow$lambda_6);
    $this.k1z('.kobweb-row.kobweb-align-center-vert', KobwebComposeStyleSheet$initRow$lambda_7);
    $this.k1z('.kobweb-row.kobweb-align-bottom', KobwebComposeStyleSheet$initRow$lambda_8);
    $this.k1z('.kobweb-row > .kobweb-align-top-self', KobwebComposeStyleSheet$initRow$lambda_9);
    $this.k1z('.kobweb-row > .kobweb-align-center-vert-self', KobwebComposeStyleSheet$initRow$lambda_10);
    $this.k1z('.kobweb-row > .kobweb-align-bottom-self', KobwebComposeStyleSheet$initRow$lambda_11);
  }
  function initCol($this) {
    $this.k1z('.kobweb-col', KobwebComposeStyleSheet$initCol$lambda);
    $this.k1z('.kobweb-col.kobweb-arrange-top', KobwebComposeStyleSheet$initCol$lambda_0);
    $this.k1z('.kobweb-col.kobweb-arrange-center', KobwebComposeStyleSheet$initCol$lambda_1);
    $this.k1z('.kobweb-col.kobweb-arrange-bottom', KobwebComposeStyleSheet$initCol$lambda_2);
    $this.k1z('.kobweb-col.kobweb-arrange-space-evenly', KobwebComposeStyleSheet$initCol$lambda_3);
    $this.k1z('.kobweb-col.kobweb-arrange-space-between', KobwebComposeStyleSheet$initCol$lambda_4);
    $this.k1z('.kobweb-col.kobweb-arrange-space-around', KobwebComposeStyleSheet$initCol$lambda_5);
    $this.k1z('.kobweb-col.kobweb-align-start', KobwebComposeStyleSheet$initCol$lambda_6);
    $this.k1z('.kobweb-col.kobweb-align-center-horiz', KobwebComposeStyleSheet$initCol$lambda_7);
    $this.k1z('.kobweb-col.kobweb-align-end', KobwebComposeStyleSheet$initCol$lambda_8);
    $this.k1z('.kobweb-col > .kobweb-align-start-self', KobwebComposeStyleSheet$initCol$lambda_9);
    $this.k1z('.kobweb-col > .kobweb-align-center-horiz-self', KobwebComposeStyleSheet$initCol$lambda_10);
    $this.k1z('.kobweb-col > .kobweb-align-end-self', KobwebComposeStyleSheet$initCol$lambda_11);
  }
  function initSpacer($this) {
    $this.k1z('.kobweb-spacer', KobwebComposeStyleSheet$initSpacer$lambda);
  }
  function KobwebComposeStyleSheet$initBox$lambda($this$invoke) {
    grid($this$invoke, KobwebComposeStyleSheet$initBox$lambda$lambda);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda$lambda($this$grid) {
    $this$grid.k28(KobwebComposeStyleSheet$initBox$lambda$lambda$lambda);
    $this$grid.l28(KobwebComposeStyleSheet$initBox$lambda$lambda$lambda_0);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda$lambda$lambda($this$columns) {
    $this$columns.f26(get_px(0), get_fr(1));
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda$lambda$lambda_0($this$rows) {
    $this$rows.f26(get_px(0), get_fr(1));
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_0($this$invoke) {
    gridArea($this$invoke, '1', '1');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_1($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'start');
    justifyItems($this$invoke, Companion_instance_0.q23());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_2($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'start');
    justifyItems($this$invoke, Companion_instance_0.p23());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_3($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'start');
    justifyItems($this$invoke, Companion_instance_0.r23());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_4($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'center');
    justifyItems($this$invoke, Companion_instance_0.q23());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_5($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'center');
    justifyItems($this$invoke, Companion_instance_0.p23());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_6($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'center');
    justifyItems($this$invoke, Companion_instance_0.r23());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_7($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'end');
    justifyItems($this$invoke, Companion_instance_0.q23());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_8($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'end');
    justifyItems($this$invoke, Companion_instance_0.p23());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_9($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'end');
    justifyItems($this$invoke, Companion_instance_0.r23());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_10($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'start');
    justifySelf($this$invoke, Companion_instance_2.q23());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_11($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'start');
    justifySelf($this$invoke, Companion_instance_2.p23());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_12($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Start' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'start');
    justifySelf($this$invoke, Companion_instance_2.r23());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_13($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'center');
    justifySelf($this$invoke, Companion_instance_2.q23());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_14($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'center');
    justifySelf($this$invoke, Companion_instance_2.p23());
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_15($this$invoke) {
    justifySelf($this$invoke, Companion_instance_2.r23());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'center');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_16($this$invoke) {
    justifySelf($this$invoke, Companion_instance_2.q23());
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'end');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_17($this$invoke) {
    justifySelf($this$invoke, Companion_instance_2.p23());
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'end');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initBox$lambda_18($this$invoke) {
    justifySelf($this$invoke, Companion_instance_2.r23());
    // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'end');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$invoke, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Row' call
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$invoke, 'row');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_0($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_1($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    justifyContent($this$invoke, 'center');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_2($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_3($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceEvenly' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-evenly';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_4($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceBetween' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-between';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_5($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceAround' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-around';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_6($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    alignItems($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_7($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'center');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_8($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    alignItems($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_9($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_10($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'center');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initRow$lambda_11($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$invoke, 'flex');
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    flexDirection($this$invoke, 'column');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_0($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_1($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    justifyContent($this$invoke, 'center');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_2($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_3($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceEvenly' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-evenly';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_4($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceBetween' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-between';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_5($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceAround' call
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'space-around';
    justifyContent($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_6($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    alignItems($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_7($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignItems($this$invoke, 'center');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_8($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    alignItems($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_9($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexStart' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-start';
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_10($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    alignSelf($this$invoke, 'center');
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initCol$lambda_11($this$invoke) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.FlexEnd' call
    // Inline function 'org.jetbrains.compose.web.css.AlignSelf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'flex-end';
    alignSelf($this$invoke, tmp$ret$3);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet$initSpacer$lambda($this$invoke) {
    flexGrow($this$invoke, 1);
    return Unit_instance;
  }
  function KobwebComposeStyleSheet() {
    KobwebComposeStyleSheet_instance = this;
    StyleSheet.call(this);
    initBox(this);
    initCol(this);
    initRow(this);
    initSpacer(this);
    this.a2m_1 = 0;
  }
  protoOf(KobwebComposeStyleSheet).i1z = function (selector, cssRule) {
    return this.h1z(selector, cssRule);
  };
  var KobwebComposeStyleSheet_instance;
  function KobwebComposeStyleSheet_getInstance() {
    if (KobwebComposeStyleSheet_instance == null)
      new KobwebComposeStyleSheet();
    return KobwebComposeStyleSheet_instance;
  }
  function TopStart() {
    this.b2m_1 = 0;
  }
  var TopStart_instance;
  function TopStart_getInstance() {
    return TopStart_instance;
  }
  function TopCenter() {
    this.c2m_1 = 0;
  }
  var TopCenter_instance;
  function TopCenter_getInstance() {
    return TopCenter_instance;
  }
  function TopEnd() {
    this.d2m_1 = 0;
  }
  var TopEnd_instance;
  function TopEnd_getInstance() {
    return TopEnd_instance;
  }
  function CenterStart() {
    this.e2m_1 = 0;
  }
  var CenterStart_instance;
  function CenterStart_getInstance() {
    return CenterStart_instance;
  }
  function Center_0() {
    this.f2m_1 = 0;
  }
  var Center_instance_0;
  function Center_getInstance_0() {
    return Center_instance_0;
  }
  function CenterEnd() {
    this.g2m_1 = 0;
  }
  var CenterEnd_instance;
  function CenterEnd_getInstance() {
    return CenterEnd_instance;
  }
  function BottomStart() {
    this.h2m_1 = 0;
  }
  var BottomStart_instance;
  function BottomStart_getInstance() {
    return BottomStart_instance;
  }
  function BottomCenter() {
    this.i2m_1 = 0;
  }
  var BottomCenter_instance;
  function BottomCenter_getInstance() {
    return BottomCenter_instance;
  }
  function BottomEnd() {
    this.j2m_1 = 0;
  }
  var BottomEnd_instance;
  function BottomEnd_getInstance() {
    return BottomEnd_instance;
  }
  function Top_0() {
    this.k2m_1 = 0;
  }
  var Top_instance_0;
  function Top_getInstance_0() {
    return Top_instance_0;
  }
  function CenterVertically() {
    this.l2m_1 = 0;
  }
  var CenterVertically_instance;
  function CenterVertically_getInstance() {
    return CenterVertically_instance;
  }
  function Bottom_0() {
    this.m2m_1 = 0;
  }
  var Bottom_instance_0;
  function Bottom_getInstance_0() {
    return Bottom_instance_0;
  }
  function Start_0() {
    this.n2m_1 = 0;
  }
  var Start_instance_0;
  function Start_getInstance_0() {
    return Start_instance_0;
  }
  function CenterHorizontally() {
    this.o2m_1 = 0;
  }
  var CenterHorizontally_instance;
  function CenterHorizontally_getInstance() {
    return CenterHorizontally_instance;
  }
  function End_0() {
    this.p2m_1 = 0;
  }
  var End_instance_0;
  function End_getInstance_0() {
    return End_instance_0;
  }
  function FromStyle_0() {
    this.q2m_1 = 0;
  }
  var FromStyle_instance_0;
  function FromStyle_getInstance_0() {
    return FromStyle_instance_0;
  }
  function Element() {
  }
  function Companion() {
  }
  protoOf(Companion).r2m = function (initial, operation) {
    return initial;
  };
  protoOf(Companion).s2m = function (other) {
    return other;
  };
  var Companion_instance_6;
  function Companion_getInstance_0() {
    return Companion_instance_6;
  }
  function Modifier() {
  }
  function ChainedModifier(current, next) {
    this.t2m_1 = current;
    this.u2m_1 = next;
  }
  protoOf(ChainedModifier).r2m = function (initial, operation) {
    return this.u2m_1.r2m(this.t2m_1.r2m(initial, operation), operation);
  };
  protoOf(ChainedModifier).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof ChainedModifier) {
      tmp_0 = equals(this.t2m_1, other.t2m_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.u2m_1, other.u2m_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ChainedModifier).hashCode = function () {
    return hashCode(this.t2m_1) + imul(31, hashCode(this.u2m_1)) | 0;
  };
  function thenIf(_this__u8e3s4, condition, other) {
    // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
    var tmp;
    if (condition) {
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf.<anonymous>' call
      tmp = other;
    } else {
      tmp = Companion_instance_6;
    }
    return _this__u8e3s4.s2m(tmp);
  }
  function toAttrs(_this__u8e3s4, finalHandler) {
    finalHandler = finalHandler === VOID ? null : finalHandler;
    var firstModifier = _this__u8e3s4;
    return toAttrs$lambda(firstModifier, finalHandler);
  }
  function toStyles(_this__u8e3s4, finalHandler) {
    finalHandler = finalHandler === VOID ? null : finalHandler;
    var firstModifier = _this__u8e3s4;
    return toStyles$lambda(firstModifier, finalHandler);
  }
  function styleModifier(_this__u8e3s4, styles) {
    return _this__u8e3s4.s2m(new StyleModifier(styles));
  }
  function AttrsModifier(attrs) {
    this.v2m_1 = attrs;
    this.w2m_1 = 0;
  }
  protoOf(AttrsModifier).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AttrsModifier))
      return false;
    var attrsResolved = ComparableAttrsScope_init_$Create$();
    this.v2m_1(attrsResolved);
    var otherAttrsResolved = ComparableAttrsScope_init_$Create$();
    other.v2m_1(otherAttrsResolved);
    return attrsResolved.equals(otherAttrsResolved);
  };
  protoOf(AttrsModifier).hashCode = function () {
    var attrsResolved = ComparableAttrsScope_init_$Create$();
    this.v2m_1(attrsResolved);
    return attrsResolved.hashCode();
  };
  function StyleModifier(styles) {
    this.x2m_1 = styles;
    this.y2m_1 = 0;
  }
  protoOf(StyleModifier).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleModifier))
      return false;
    var stylesResolved = new ComparableStyleScope();
    this.x2m_1(stylesResolved);
    var otherStylesResolved = new ComparableStyleScope();
    other.x2m_1(otherStylesResolved);
    return stylesResolved.equals(otherStylesResolved);
  };
  protoOf(StyleModifier).hashCode = function () {
    var stylesResolved = new ComparableStyleScope();
    this.x2m_1(stylesResolved);
    return stylesResolved.hashCode();
  };
  function attrsModifier(_this__u8e3s4, attrs) {
    return _this__u8e3s4.s2m(new AttrsModifier(attrs));
  }
  function toAttrs$lambda$lambda$lambda($element) {
    return function ($this$style) {
      $element.x2m_1($this$style);
      return Unit_instance;
    };
  }
  function toAttrs$lambda$lambda($this_null) {
    return function (_anonymous_parameter_0__qggqh8, element) {
      var tmp;
      if (element instanceof AttrsModifier) {
        tmp = element.v2m_1($this_null);
      } else {
        if (element instanceof StyleModifier) {
          $this_null.o1v(toAttrs$lambda$lambda$lambda(element));
          tmp = Unit_instance;
        }
      }
      return Unit_instance;
    };
  }
  function toAttrs$lambda($firstModifier, $finalHandler) {
    return function ($this$null) {
      $firstModifier.r2m(Unit_instance, toAttrs$lambda$lambda($this$null));
      var tmp0_safe_receiver = $finalHandler;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver($this$null);
      return Unit_instance;
    };
  }
  function toStyles$lambda$lambda($this_null) {
    return function (_anonymous_parameter_0__qggqh8, element) {
      var tmp;
      if (element instanceof StyleModifier) {
        tmp = element.x2m_1($this_null);
      }
      return Unit_instance;
    };
  }
  function toStyles$lambda($firstModifier, $finalHandler) {
    return function ($this$null) {
      $firstModifier.r2m(Unit_instance, toStyles$lambda$lambda($this$null));
      var tmp0_safe_receiver = $finalHandler;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver($this$null);
      return Unit_instance;
    };
  }
  function Rgb(value) {
    this.z2m_1 = value;
    this.a2n_1 = 0;
  }
  protoOf(Rgb).b2n = function () {
    return this.z2m_1 >> 16 & 255;
  };
  protoOf(Rgb).c2n = function () {
    return this.z2m_1 >> 8 & 255;
  };
  protoOf(Rgb).d2n = function () {
    return this.z2m_1 >> 0 & 255;
  };
  protoOf(Rgb).e2n = function () {
    return this.z2m_1 >> 24 & 255;
  };
  protoOf(Rgb).f2n = function () {
    return toColorFloat(this.b2n());
  };
  protoOf(Rgb).g2n = function () {
    return toColorFloat(this.c2n());
  };
  protoOf(Rgb).h2n = function () {
    return toColorFloat(this.d2n());
  };
  protoOf(Rgb).i2n = function () {
    return toColorFloat(this.e2n());
  };
  protoOf(Rgb).j2n = function () {
    return Companion_instance_7.l2n(255 - this.b2n() | 0, 255 - this.c2n() | 0, 255 - this.d2n() | 0, this.e2n());
  };
  protoOf(Rgb).m2n = function (byPercent) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0.0 <= byPercent ? byPercent <= 1.0 : false)) {
      // Inline function 'com.varabyte.kobweb.compose.ui.graphics.Rgb.darkened.<anonymous>' call
      var message = 'Invalid color shifting percent. Expected between 0 and 1, got ' + byPercent;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (byPercent === 0.0)
      return this;
    var darkeningMultiplier = 1.0 - byPercent;
    return Companion_instance_7.n2n(this.f2n() * darkeningMultiplier, this.g2n() * darkeningMultiplier, this.h2n() * darkeningMultiplier, this.i2n());
  };
  protoOf(Rgb).o2n = function (red, green, blue, alpha) {
    return Companion_instance_7.n2n(red, green, blue, alpha);
  };
  protoOf(Rgb).p2n = function (red, green, blue, alpha, $super) {
    red = red === VOID ? this.f2n() : red;
    green = green === VOID ? this.g2n() : green;
    blue = blue === VOID ? this.h2n() : blue;
    alpha = alpha === VOID ? this.i2n() : alpha;
    return $super === VOID ? this.o2n(red, green, blue, alpha) : $super.o2n.call(this, red, green, blue, alpha);
  };
  protoOf(Rgb).q2n = function () {
    return this;
  };
  protoOf(Rgb).toString = function () {
    return this.e2n() === 255 ? 'rgb(' + this.b2n() + ', ' + this.c2n() + ', ' + this.d2n() + ')' : 'rgba(' + this.b2n() + ', ' + this.c2n() + ', ' + this.d2n() + ', ' + this.i2n() + ')';
  };
  protoOf(Rgb).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof Rgb) {
      tmp_2 = this.b2n() === other.b2n();
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.c2n() === other.c2n();
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.d2n() === other.d2n();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.e2n() === other.e2n();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Rgb).hashCode = function () {
    var result = this.b2n();
    result = imul(31, result) + this.c2n() | 0;
    result = imul(31, result) + this.d2n() | 0;
    result = imul(31, result) + this.e2n() | 0;
    return result;
  };
  function Companion_0() {
    this.k2n_1 = 0.3;
  }
  protoOf(Companion_0).r2n = function (value) {
    return new Rgb(-16777216 | value);
  };
  protoOf(Companion_0).s2n = function (r, g, b) {
    return this.l2n(r, g, b, 255);
  };
  protoOf(Companion_0).l2n = function (r, g, b, a) {
    return new Rgb((r & 255) << 16 | (g & 255) << 8 | (b & 255) << 0 | (a & 255) << 24);
  };
  protoOf(Companion_0).n2n = function (r, g, b, a) {
    return this.l2n(toColorInt(r), toColorInt(g), toColorInt(b), toColorInt(a));
  };
  var Companion_instance_7;
  function Companion_getInstance_1() {
    return Companion_instance_7;
  }
  function Colors() {
    this.t2n_1 = 0;
  }
  protoOf(Colors).u2n = function () {
    return Companion_instance_7.l2n(0, 0, 0, 0);
  };
  protoOf(Colors).v2n = function () {
    return Companion_instance_7.s2n(0, 0, 0);
  };
  protoOf(Colors).w2n = function () {
    return Companion_instance_7.s2n(0, 0, 255);
  };
  protoOf(Colors).x2n = function () {
    return Companion_instance_7.s2n(100, 149, 237);
  };
  protoOf(Colors).y2n = function () {
    return Companion_instance_7.s2n(0, 255, 255);
  };
  protoOf(Colors).z2n = function () {
    return Companion_instance_7.s2n(169, 169, 169);
  };
  protoOf(Colors).a2o = function () {
    return Companion_instance_7.s2n(47, 79, 79);
  };
  protoOf(Colors).b2o = function () {
    return Companion_instance_7.s2n(105, 105, 105);
  };
  protoOf(Colors).c2o = function () {
    return Companion_instance_7.s2n(30, 144, 255);
  };
  protoOf(Colors).d2o = function () {
    return Companion_instance_7.s2n(128, 128, 128);
  };
  protoOf(Colors).e2o = function () {
    return Companion_instance_7.s2n(211, 211, 211);
  };
  protoOf(Colors).f2o = function () {
    return Companion_instance_7.s2n(135, 206, 250);
  };
  protoOf(Colors).g2o = function () {
    return Companion_instance_7.s2n(128, 0, 128);
  };
  protoOf(Colors).h2o = function () {
    return Companion_instance_7.s2n(238, 130, 238);
  };
  protoOf(Colors).i2o = function () {
    return Companion_instance_7.s2n(255, 255, 255);
  };
  protoOf(Colors).j2o = function () {
    return Companion_instance_7.s2n(245, 245, 245);
  };
  var Colors_instance;
  function Colors_getInstance() {
    return Colors_instance;
  }
  function toColorFloat(_this__u8e3s4) {
    return (_this__u8e3s4 & 255) / 255.0;
  }
  function toColorInt(_this__u8e3s4) {
    return numberToInt(coerceIn(_this__u8e3s4, 0.0, 1.0) * 255.0);
  }
  function lightened(_this__u8e3s4, byPercent) {
    byPercent = byPercent === VOID ? 0.3 : byPercent;
    return _this__u8e3s4.j2n().m2n(byPercent).j2n();
  }
  function get_isBright(_this__u8e3s4) {
    return get_luminance(_this__u8e3s4) > 0.5;
  }
  function get_luminance(_this__u8e3s4) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.compose.ui.graphics.<get-luminance>.<anonymous>' call
    var rgb = _this__u8e3s4.q2n();
    return rgb.f2n() * 0.299 + rgb.g2n() * 0.587 + rgb.h2n() * 0.114;
  }
  function ariaHidden_0(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    return attrsModifier(_this__u8e3s4, ariaHidden$lambda(value));
  }
  function ariaDisabled_0(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    return attrsModifier(_this__u8e3s4, ariaDisabled$lambda(value));
  }
  function ariaHidden$lambda($value) {
    return function ($this$attrsModifier) {
      ariaHidden($this$attrsModifier, $value);
      return Unit_instance;
    };
  }
  function ariaDisabled$lambda($value) {
    return function ($this$attrsModifier) {
      ariaDisabled($this$attrsModifier, $value);
      return Unit_instance;
    };
  }
  function animation_0(_this__u8e3s4, animations) {
    return styleModifier(_this__u8e3s4, animation$lambda(animations));
  }
  function onAnimationEnd(_this__u8e3s4, listener) {
    return attrsModifier(_this__u8e3s4, onAnimationEnd$lambda(listener));
  }
  function animation$lambda($animations) {
    return function ($this$styleModifier) {
      animation($this$styleModifier, $animations.slice());
      return Unit_instance;
    };
  }
  function onAnimationEnd$lambda($listener) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.v1v($listener);
      return Unit_instance;
    };
  }
  function backgroundColor_0(_this__u8e3s4, color) {
    return styleModifier(_this__u8e3s4, backgroundColor$lambda(color));
  }
  function background_0(_this__u8e3s4, color, backgrounds) {
    return styleModifier(_this__u8e3s4, background$lambda(color, backgrounds));
  }
  function backgroundImage_0(_this__u8e3s4, gradient) {
    return styleModifier(_this__u8e3s4, backgroundImage$lambda(gradient));
  }
  function backgroundColor$lambda($color) {
    return function ($this$styleModifier) {
      backgroundColor($this$styleModifier, $color);
      return Unit_instance;
    };
  }
  function background$lambda($color, $backgrounds) {
    return function ($this$styleModifier) {
      background($this$styleModifier, $color, $backgrounds.slice());
      return Unit_instance;
    };
  }
  function backgroundImage$lambda($gradient) {
    return function ($this$styleModifier) {
      backgroundImage($this$styleModifier, $gradient);
      return Unit_instance;
    };
  }
  function borderBottom_0(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    return styleModifier(_this__u8e3s4, borderBottom$lambda(width, style, color));
  }
  function border_0(_this__u8e3s4, scope) {
    return styleModifier(_this__u8e3s4, border$lambda(scope));
  }
  function BorderScope(styleScope) {
    this.k2o_1 = styleScope;
    this.l2o_1 = 8;
  }
  protoOf(BorderScope).m2o = function (color) {
    return borderColor(this.k2o_1, color);
  };
  protoOf(BorderScope).n2o = function (lineStyle) {
    return borderStyle(this.k2o_1, lineStyle);
  };
  protoOf(BorderScope).o2o = function (width) {
    return borderWidth(this.k2o_1, width);
  };
  function borderRadius_1(_this__u8e3s4, r) {
    return styleModifier(_this__u8e3s4, borderRadius$lambda(r));
  }
  function border_1(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    return styleModifier(_this__u8e3s4, border$lambda_0(width, style, color));
  }
  function borderTop_0(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    return styleModifier(_this__u8e3s4, borderTop$lambda(width, style, color));
  }
  function borderLeft_0(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    return styleModifier(_this__u8e3s4, borderLeft$lambda(width, style, color));
  }
  function borderRadius_2(_this__u8e3s4, topLeft, topRightAndBottomLeft, bottomRight) {
    topLeft = topLeft === VOID ? get_px(0) : topLeft;
    topRightAndBottomLeft = topRightAndBottomLeft === VOID ? get_px(0) : topRightAndBottomLeft;
    bottomRight = bottomRight === VOID ? get_px(0) : bottomRight;
    return styleModifier(_this__u8e3s4, borderRadius$lambda_0(topLeft, topRightAndBottomLeft, bottomRight));
  }
  function borderBottom$lambda($width, $style, $color) {
    return function ($this$styleModifier) {
      borderBottom($this$styleModifier, $width, $style, $color);
      return Unit_instance;
    };
  }
  function border$lambda($scope) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.apply' call
      var this_0 = new BorderScope($this$styleModifier);
      // Inline function 'kotlin.contracts.contract' call
      $scope(this_0);
      return Unit_instance;
    };
  }
  function borderRadius$lambda($r) {
    return function ($this$styleModifier) {
      borderRadius($this$styleModifier, $r);
      return Unit_instance;
    };
  }
  function border$lambda_0($width, $style, $color) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = $width;
      border($this$styleModifier, tmp$ret$1, $style, $color);
      return Unit_instance;
    };
  }
  function borderTop$lambda($width, $style, $color) {
    return function ($this$styleModifier) {
      borderTop($this$styleModifier, $width, $style, $color);
      return Unit_instance;
    };
  }
  function borderLeft$lambda($width, $style, $color) {
    return function ($this$styleModifier) {
      borderLeft($this$styleModifier, $width, $style, $color);
      return Unit_instance;
    };
  }
  function borderRadius$lambda_0($topLeft, $topRightAndBottomLeft, $bottomRight) {
    return function ($this$styleModifier) {
      borderRadius_0($this$styleModifier, $topLeft, $topRightAndBottomLeft, $bottomRight);
      return Unit_instance;
    };
  }
  function boxShadow_0(_this__u8e3s4, offsetX, offsetY, blurRadius, spreadRadius, color, inset) {
    offsetX = offsetX === VOID ? get_px(0) : offsetX;
    offsetY = offsetY === VOID ? get_px(0) : offsetY;
    blurRadius = blurRadius === VOID ? null : blurRadius;
    spreadRadius = spreadRadius === VOID ? null : spreadRadius;
    color = color === VOID ? null : color;
    inset = inset === VOID ? false : inset;
    return styleModifier(_this__u8e3s4, boxShadow$lambda(offsetX, offsetY, blurRadius, spreadRadius, color, inset));
  }
  function boxSizing_0(_this__u8e3s4, boxSizing) {
    return styleModifier(_this__u8e3s4, boxSizing$lambda(boxSizing));
  }
  function boxShadow$lambda($offsetX, $offsetY, $blurRadius, $spreadRadius, $color, $inset) {
    return function ($this$styleModifier) {
      boxShadow($this$styleModifier, $offsetX, $offsetY, $blurRadius, $spreadRadius, $color, $inset);
      return Unit_instance;
    };
  }
  function boxSizing$lambda($boxSizing) {
    return function ($this$styleModifier) {
      boxSizing($this$styleModifier, $boxSizing);
      return Unit_instance;
    };
  }
  function color_0(_this__u8e3s4, color) {
    return styleModifier(_this__u8e3s4, color$lambda(color));
  }
  function opacity_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, opacity$lambda(value));
  }
  function color$lambda($color) {
    return function ($this$styleModifier) {
      color($this$styleModifier, $color);
      return Unit_instance;
    };
  }
  function opacity$lambda($value) {
    return function ($this$styleModifier) {
      opacity($this$styleModifier, $value);
      return Unit_instance;
    };
  }
  function display_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, display$lambda(value));
  }
  function visibility_0(_this__u8e3s4, visibility) {
    return styleModifier(_this__u8e3s4, visibility$lambda(visibility));
  }
  function display$lambda($value) {
    return function ($this$styleModifier) {
      display($this$styleModifier, $value);
      return Unit_instance;
    };
  }
  function visibility$lambda($visibility) {
    return function ($this$styleModifier) {
      visibility($this$styleModifier, $visibility);
      return Unit_instance;
    };
  }
  function backdropFilter(_this__u8e3s4, filters) {
    return styleModifier(_this__u8e3s4, backdropFilter$lambda(filters));
  }
  function backdropFilter$lambda($filters) {
    return function ($this$styleModifier) {
      var tmp;
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      if (!($filters.length === 0)) {
        $this$styleModifier.e1y('backdrop-filter', joinToString($filters, ' '));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function classNames(_this__u8e3s4, classes) {
    return attrsModifier(_this__u8e3s4, classNames$lambda(classes));
  }
  function id(_this__u8e3s4, value) {
    return attrsModifier(_this__u8e3s4, id$lambda(value));
  }
  function classNames$lambda($classes) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.q1v($classes.slice());
      return Unit_instance;
    };
  }
  function id$lambda($value) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.r1v($value);
      return Unit_instance;
    };
  }
  function flexGrow_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, flexGrow$lambda(value));
  }
  function gap_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, gap$lambda(value));
  }
  function flexGrow$lambda($value) {
    return function ($this$styleModifier) {
      flexGrow($this$styleModifier, $value);
      return Unit_instance;
    };
  }
  function gap$lambda($value) {
    return function ($this$styleModifier) {
      gap($this$styleModifier, $value);
      return Unit_instance;
    };
  }
  function fontWeight_1(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, fontWeight$lambda(value));
  }
  function fontSize_1(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, fontSize$lambda(value));
  }
  function fontFamily_0(_this__u8e3s4, values) {
    return styleModifier(_this__u8e3s4, fontFamily$lambda(values));
  }
  function fontWeight_2(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, fontWeight$lambda_0(value));
  }
  function fontSize_2(_this__u8e3s4, fontSize) {
    return styleModifier(_this__u8e3s4, fontSize$lambda_0(fontSize));
  }
  function fontWeight$lambda($value) {
    return function ($this$styleModifier) {
      fontWeight($this$styleModifier, $value);
      return Unit_instance;
    };
  }
  function fontSize$lambda($value) {
    return function ($this$styleModifier) {
      fontSize($this$styleModifier, $value);
      return Unit_instance;
    };
  }
  function fontFamily$lambda($values) {
    return function ($this$styleModifier) {
      fontFamily($this$styleModifier, $values.slice());
      return Unit_instance;
    };
  }
  function fontWeight$lambda_0($value) {
    return function ($this$styleModifier) {
      fontWeight_0($this$styleModifier, $value);
      return Unit_instance;
    };
  }
  function fontSize$lambda_0($fontSize) {
    return function ($this$styleModifier) {
      fontSize_0($this$styleModifier, $fontSize);
      return Unit_instance;
    };
  }
  function gridTemplateColumns_0(_this__u8e3s4, block) {
    return styleModifier(_this__u8e3s4, gridTemplateColumns$lambda(block));
  }
  function gridTemplateRows_0(_this__u8e3s4, block) {
    return styleModifier(_this__u8e3s4, gridTemplateRows$lambda(block));
  }
  function gridRow_0(_this__u8e3s4, start, end) {
    end = end === VOID ? start + 1 | 0 : end;
    return styleModifier(_this__u8e3s4, gridRow$lambda(start, end));
  }
  function gridTemplateColumns$lambda($block) {
    return function ($this$styleModifier) {
      gridTemplateColumns($this$styleModifier, $block);
      return Unit_instance;
    };
  }
  function gridTemplateRows$lambda($block) {
    return function ($this$styleModifier) {
      gridTemplateRows($this$styleModifier, $block);
      return Unit_instance;
    };
  }
  function gridRow$lambda($start, $end) {
    return function ($this$styleModifier) {
      gridRow($this$styleModifier, $start, $end);
      return Unit_instance;
    };
  }
  function tabIndex(_this__u8e3s4, value) {
    return attrsModifier(_this__u8e3s4, tabIndex$lambda(value));
  }
  function userSelect_0(_this__u8e3s4, userSelect) {
    return styleModifier(_this__u8e3s4, userSelect$lambda(userSelect));
  }
  function cursor_0(_this__u8e3s4, cursor) {
    return styleModifier(_this__u8e3s4, cursor$lambda(cursor));
  }
  function pointerEvents_0(_this__u8e3s4, pointerEvents) {
    return styleModifier(_this__u8e3s4, pointerEvents$lambda(pointerEvents));
  }
  function onClick(_this__u8e3s4, listener) {
    return attrsModifier(_this__u8e3s4, onClick$lambda(listener));
  }
  function tabIndex$lambda($value) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.s1v($value);
      return Unit_instance;
    };
  }
  function userSelect$lambda($userSelect) {
    return function ($this$styleModifier) {
      userSelect($this$styleModifier, $userSelect);
      return Unit_instance;
    };
  }
  function cursor$lambda($cursor) {
    return function ($this$styleModifier) {
      cursor($this$styleModifier, $cursor);
      return Unit_instance;
    };
  }
  function pointerEvents$lambda($pointerEvents) {
    return function ($this$styleModifier) {
      pointerEvents($this$styleModifier, $pointerEvents);
      return Unit_instance;
    };
  }
  function onClick$lambda($listener) {
    return function ($this$attrsModifier) {
      $this$attrsModifier.u1v($listener);
      return Unit_instance;
    };
  }
  function fillMaxWidth(_this__u8e3s4, percent) {
    percent = percent === VOID ? get_percent(100) : percent;
    return styleModifier(_this__u8e3s4, fillMaxWidth$lambda(percent));
  }
  function margin_0(_this__u8e3s4, top, leftRight, bottom) {
    top = top === VOID ? get_px(0) : top;
    leftRight = leftRight === VOID ? get_px(0) : leftRight;
    bottom = bottom === VOID ? get_px(0) : bottom;
    return styleModifier(_this__u8e3s4, margin$lambda(top, leftRight, bottom));
  }
  function padding_0(_this__u8e3s4, all) {
    return styleModifier(_this__u8e3s4, padding$lambda(all));
  }
  function overflow_0(_this__u8e3s4, scope) {
    return styleModifier(_this__u8e3s4, overflow$lambda(scope));
  }
  function OverflowScope(styleScope) {
    this.p2o_1 = styleScope;
    this.q2o_1 = 8;
  }
  protoOf(OverflowScope).r2o = function (overflowX_0) {
    return overflowX(this.p2o_1, overflowX_0);
  };
  protoOf(OverflowScope).s2o = function (overflowY_0) {
    return overflowY(this.p2o_1, overflowY_0);
  };
  function verticalAlign_0(_this__u8e3s4, verticalAlign) {
    return styleModifier(_this__u8e3s4, verticalAlign$lambda(verticalAlign));
  }
  function padding_1(_this__u8e3s4, topBottom, leftRight) {
    topBottom = topBottom === VOID ? get_px(0) : topBottom;
    leftRight = leftRight === VOID ? get_px(0) : leftRight;
    return styleModifier(_this__u8e3s4, padding$lambda_0(topBottom, leftRight));
  }
  function minWidth_0(_this__u8e3s4, size) {
    return styleModifier(_this__u8e3s4, minWidth$lambda(size));
  }
  function height_0(_this__u8e3s4, size) {
    return styleModifier(_this__u8e3s4, height$lambda(size));
  }
  function lineHeight_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, lineHeight$lambda(value));
  }
  function size(_this__u8e3s4, size) {
    return size_0(_this__u8e3s4, size, size);
  }
  function overflow_1(_this__u8e3s4, overflow) {
    return styleModifier(_this__u8e3s4, overflow$lambda_0(overflow));
  }
  function margin_1(_this__u8e3s4, all) {
    return styleModifier(_this__u8e3s4, margin$lambda_0(all));
  }
  function paddingInline_0(_this__u8e3s4, start, end) {
    start = start === VOID ? get_px(0) : start;
    end = end === VOID ? get_px(0) : end;
    return styleModifier(_this__u8e3s4, paddingInline$lambda(start, end));
  }
  function minHeight_0(_this__u8e3s4, size) {
    return styleModifier(_this__u8e3s4, minHeight$lambda(size));
  }
  function width_0(_this__u8e3s4, size) {
    return styleModifier(_this__u8e3s4, width$lambda(size));
  }
  function margin_2(_this__u8e3s4, top, right, bottom, left) {
    top = top === VOID ? get_px(0) : top;
    right = right === VOID ? get_px(0) : right;
    bottom = bottom === VOID ? get_px(0) : bottom;
    left = left === VOID ? get_px(0) : left;
    return styleModifier(_this__u8e3s4, margin$lambda_1(top, right, bottom, left));
  }
  function margin_3(_this__u8e3s4, topBottom, leftRight) {
    topBottom = topBottom === VOID ? get_px(0) : topBottom;
    leftRight = leftRight === VOID ? get_px(0) : leftRight;
    return styleModifier(_this__u8e3s4, margin$lambda_2(topBottom, leftRight));
  }
  function overflowWrap_0(_this__u8e3s4, overflowWrap) {
    return styleModifier(_this__u8e3s4, overflowWrap$lambda(overflowWrap));
  }
  function fillMaxSize(_this__u8e3s4, percent) {
    percent = percent === VOID ? get_percent(100) : percent;
    return styleModifier(_this__u8e3s4, fillMaxSize$lambda(percent));
  }
  function padding_2(_this__u8e3s4, top, leftRight, bottom) {
    top = top === VOID ? get_px(0) : top;
    leftRight = leftRight === VOID ? get_px(0) : leftRight;
    bottom = bottom === VOID ? get_px(0) : bottom;
    return styleModifier(_this__u8e3s4, padding$lambda_1(top, leftRight, bottom));
  }
  function maxWidth_0(_this__u8e3s4, size) {
    return styleModifier(_this__u8e3s4, maxWidth$lambda(size));
  }
  function fillMaxHeight(_this__u8e3s4, percent) {
    percent = percent === VOID ? get_percent(100) : percent;
    return styleModifier(_this__u8e3s4, fillMaxHeight$lambda(percent));
  }
  function padding_3(_this__u8e3s4, top, right, bottom, left) {
    top = top === VOID ? get_px(0) : top;
    right = right === VOID ? get_px(0) : right;
    bottom = bottom === VOID ? get_px(0) : bottom;
    left = left === VOID ? get_px(0) : left;
    return styleModifier(_this__u8e3s4, padding$lambda_2(top, right, bottom, left));
  }
  function zIndex_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, zIndex$lambda(value));
  }
  function size_0(_this__u8e3s4, width, height) {
    return styleModifier(_this__u8e3s4, size$lambda(width, height));
  }
  function fillMaxWidth$lambda($percent) {
    return function ($this$styleModifier) {
      width($this$styleModifier, $percent);
      return Unit_instance;
    };
  }
  function margin$lambda($top, $leftRight, $bottom) {
    return function ($this$styleModifier) {
      margin($this$styleModifier, [$top, $leftRight, $bottom]);
      return Unit_instance;
    };
  }
  function padding$lambda($all) {
    return function ($this$styleModifier) {
      padding($this$styleModifier, [$all]);
      return Unit_instance;
    };
  }
  function overflow$lambda($scope) {
    return function ($this$styleModifier) {
      $scope(new OverflowScope($this$styleModifier));
      return Unit_instance;
    };
  }
  function verticalAlign$lambda($verticalAlign) {
    return function ($this$styleModifier) {
      verticalAlign($this$styleModifier, $verticalAlign);
      return Unit_instance;
    };
  }
  function padding$lambda_0($topBottom, $leftRight) {
    return function ($this$styleModifier) {
      padding($this$styleModifier, [$topBottom, $leftRight]);
      return Unit_instance;
    };
  }
  function minWidth$lambda($size) {
    return function ($this$styleModifier) {
      minWidth($this$styleModifier, $size);
      return Unit_instance;
    };
  }
  function height$lambda($size) {
    return function ($this$styleModifier) {
      height($this$styleModifier, $size);
      return Unit_instance;
    };
  }
  function lineHeight$lambda($value) {
    return function ($this$styleModifier) {
      lineHeight($this$styleModifier, toString($value));
      return Unit_instance;
    };
  }
  function overflow$lambda_0($overflow) {
    return function ($this$styleModifier) {
      overflow($this$styleModifier, $overflow);
      return Unit_instance;
    };
  }
  function margin$lambda_0($all) {
    return function ($this$styleModifier) {
      margin($this$styleModifier, [$all]);
      return Unit_instance;
    };
  }
  function paddingInline$lambda($start, $end) {
    return function ($this$styleModifier) {
      paddingInline($this$styleModifier, [$start, $end]);
      return Unit_instance;
    };
  }
  function minHeight$lambda($size) {
    return function ($this$styleModifier) {
      minHeight($this$styleModifier, $size);
      return Unit_instance;
    };
  }
  function width$lambda($size) {
    return function ($this$styleModifier) {
      width($this$styleModifier, $size);
      return Unit_instance;
    };
  }
  function margin$lambda_1($top, $right, $bottom, $left) {
    return function ($this$styleModifier) {
      margin($this$styleModifier, [$top, $right, $bottom, $left]);
      return Unit_instance;
    };
  }
  function margin$lambda_2($topBottom, $leftRight) {
    return function ($this$styleModifier) {
      margin($this$styleModifier, [$topBottom, $leftRight]);
      return Unit_instance;
    };
  }
  function overflowWrap$lambda($overflowWrap) {
    return function ($this$styleModifier) {
      overflowWrap($this$styleModifier, $overflowWrap);
      return Unit_instance;
    };
  }
  function fillMaxSize$lambda($percent) {
    return function ($this$styleModifier) {
      width($this$styleModifier, $percent);
      height($this$styleModifier, $percent);
      return Unit_instance;
    };
  }
  function padding$lambda_1($top, $leftRight, $bottom) {
    return function ($this$styleModifier) {
      padding($this$styleModifier, [$top, $leftRight, $bottom]);
      return Unit_instance;
    };
  }
  function maxWidth$lambda($size) {
    return function ($this$styleModifier) {
      maxWidth($this$styleModifier, $size);
      return Unit_instance;
    };
  }
  function fillMaxHeight$lambda($percent) {
    return function ($this$styleModifier) {
      height($this$styleModifier, $percent);
      return Unit_instance;
    };
  }
  function padding$lambda_2($top, $right, $bottom, $left) {
    return function ($this$styleModifier) {
      padding($this$styleModifier, [$top, $right, $bottom, $left]);
      return Unit_instance;
    };
  }
  function zIndex$lambda($value) {
    return function ($this$styleModifier) {
      zIndex($this$styleModifier, $value);
      return Unit_instance;
    };
  }
  function size$lambda($width, $height) {
    return function ($this$styleModifier) {
      width($this$styleModifier, $width);
      height($this$styleModifier, $height);
      return Unit_instance;
    };
  }
  function listStyle_0(_this__u8e3s4, type, position, image) {
    type = type === VOID ? null : type;
    position = position === VOID ? null : position;
    image = image === VOID ? null : image;
    return styleModifier(_this__u8e3s4, listStyle$lambda(type, position, image));
  }
  function listStyle$lambda($type, $position, $image) {
    return function ($this$styleModifier) {
      listStyle($this$styleModifier, $type, $position, $image);
      return Unit_instance;
    };
  }
  function objectFit_0(_this__u8e3s4, objectFit) {
    return styleModifier(_this__u8e3s4, objectFit$lambda(objectFit));
  }
  function objectFit$lambda($objectFit) {
    return function ($this$styleModifier) {
      objectFit($this$styleModifier, $objectFit);
      return Unit_instance;
    };
  }
  function outline_0(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    return styleModifier(_this__u8e3s4, outline$lambda(width, style, color));
  }
  function outline$lambda($width, $style, $color) {
    return function ($this$styleModifier) {
      outline($this$styleModifier, $width, $style, $color);
      return Unit_instance;
    };
  }
  function position_0(_this__u8e3s4, position) {
    return styleModifier(_this__u8e3s4, position$lambda(position));
  }
  function top_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, top$lambda(value));
  }
  function left_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, left$lambda(value));
  }
  function right_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, right$lambda(value));
  }
  function bottom_0(_this__u8e3s4, value) {
    return styleModifier(_this__u8e3s4, bottom$lambda(value));
  }
  function position$lambda($position) {
    return function ($this$styleModifier) {
      position($this$styleModifier, $position);
      return Unit_instance;
    };
  }
  function top$lambda($value) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = $value;
      top($this$styleModifier, tmp$ret$1);
      return Unit_instance;
    };
  }
  function left$lambda($value) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = $value;
      left($this$styleModifier, tmp$ret$1);
      return Unit_instance;
    };
  }
  function right$lambda($value) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = $value;
      right($this$styleModifier, tmp$ret$1);
      return Unit_instance;
    };
  }
  function bottom$lambda($value) {
    return function ($this$styleModifier) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = $value;
      bottom($this$styleModifier, tmp$ret$1);
      return Unit_instance;
    };
  }
  function scrollBehavior_0(_this__u8e3s4, scrollBehavior) {
    return styleModifier(_this__u8e3s4, scrollBehavior$lambda(scrollBehavior));
  }
  function scrollBehavior$lambda($scrollBehavior) {
    return function ($this$styleModifier) {
      scrollBehavior($this$styleModifier, $scrollBehavior);
      return Unit_instance;
    };
  }
  function whiteSpace_0(_this__u8e3s4, whiteSpace) {
    return styleModifier(_this__u8e3s4, whiteSpace$lambda(whiteSpace));
  }
  function textAlign_0(_this__u8e3s4, textAlign) {
    return styleModifier(_this__u8e3s4, textAlign$lambda(textAlign));
  }
  function textDecorationLine_0(_this__u8e3s4, textDecorationLine) {
    return styleModifier(_this__u8e3s4, textDecorationLine$lambda(textDecorationLine));
  }
  function whiteSpace$lambda($whiteSpace) {
    return function ($this$styleModifier) {
      whiteSpace($this$styleModifier, $whiteSpace);
      return Unit_instance;
    };
  }
  function textAlign$lambda($textAlign) {
    return function ($this$styleModifier) {
      textAlign($this$styleModifier, $textAlign);
      return Unit_instance;
    };
  }
  function textDecorationLine$lambda($textDecorationLine) {
    return function ($this$styleModifier) {
      textDecorationLine($this$styleModifier, [$textDecorationLine]);
      return Unit_instance;
    };
  }
  function translateX_0(_this__u8e3s4, tx) {
    return styleModifier(_this__u8e3s4, translateX$lambda(tx));
  }
  function scale_1(_this__u8e3s4, s) {
    return styleModifier(_this__u8e3s4, scale$lambda(s));
  }
  function translateY_0(_this__u8e3s4, ty) {
    return styleModifier(_this__u8e3s4, translateY$lambda(ty));
  }
  function scale_2(_this__u8e3s4, s) {
    return styleModifier(_this__u8e3s4, scale$lambda_0(s));
  }
  function translateX$lambda($tx) {
    return function ($this$styleModifier) {
      translateX($this$styleModifier, $tx);
      return Unit_instance;
    };
  }
  function scale$lambda($s) {
    return function ($this$styleModifier) {
      scale($this$styleModifier, $s);
      return Unit_instance;
    };
  }
  function translateY$lambda($ty) {
    return function ($this$styleModifier) {
      translateY($this$styleModifier, $ty);
      return Unit_instance;
    };
  }
  function scale$lambda_0($s) {
    return function ($this$styleModifier) {
      scale_0($this$styleModifier, $s);
      return Unit_instance;
    };
  }
  function transition_0(_this__u8e3s4, transitions) {
    return styleModifier(_this__u8e3s4, transition$lambda(transitions));
  }
  function transition_1(_this__u8e3s4, transitions) {
    return styleModifier(_this__u8e3s4, transition$lambda_0(transitions));
  }
  function transition$lambda($transitions) {
    return function ($this$styleModifier) {
      transition($this$styleModifier, $transitions.slice());
      return Unit_instance;
    };
  }
  function transition$lambda_0($transitions) {
    return function ($this$styleModifier) {
      transition($this$styleModifier, $transitions.slice());
      return Unit_instance;
    };
  }
  function setVariable_1(_this__u8e3s4, variable, value) {
    var tmp;
    if (!(value == null)) {
      tmp = styleModifier(_this__u8e3s4, setVariable$lambda(variable, value));
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function setVariable_2(_this__u8e3s4, variable, value) {
    var tmp;
    if (!(value == null)) {
      tmp = styleModifier(_this__u8e3s4, setVariable$lambda_0(variable, value));
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function setVariable$lambda($variable, $value) {
    return function ($this$styleModifier) {
      setVariable($this$styleModifier, $variable, $value);
      return Unit_instance;
    };
  }
  function setVariable$lambda_0($variable, $value) {
    return function ($this$styleModifier) {
      setVariable_0($this$styleModifier, $variable, $value);
      return Unit_instance;
    };
  }
  //region block: post-declaration
  protoOf(BoxScopeInstance).i2l = align;
  protoOf(RowScopeInstance).u2l = align_0;
  protoOf(ChainedModifier).s2m = then;
  protoOf(AttrsModifier).r2m = fold;
  protoOf(AttrsModifier).s2m = then;
  protoOf(StyleModifier).r2m = fold;
  protoOf(StyleModifier).s2m = then;
  //endregion
  //region block: init
  End_instance = new End();
  Start_instance = new Start();
  Top_instance = new Top();
  Bottom_instance = new Bottom();
  Center_instance = new Center();
  SpaceEvenly_instance = new SpaceEvenly();
  SpaceBetween_instance = new SpaceBetween();
  SpaceAround_instance = new SpaceAround();
  FromStyle_instance = new FromStyle();
  BoxScopeInstance_instance = new BoxScopeInstance();
  ColumnScopeInstance_instance = new ColumnScopeInstance();
  RowScopeInstance_instance = new RowScopeInstance();
  TopStart_instance = new TopStart();
  TopCenter_instance = new TopCenter();
  TopEnd_instance = new TopEnd();
  CenterStart_instance = new CenterStart();
  Center_instance_0 = new Center_0();
  CenterEnd_instance = new CenterEnd();
  BottomStart_instance = new BottomStart();
  BottomCenter_instance = new BottomCenter();
  BottomEnd_instance = new BottomEnd();
  Top_instance_0 = new Top_0();
  CenterVertically_instance = new CenterVertically();
  Bottom_instance_0 = new Bottom_0();
  Start_instance_0 = new Start_0();
  CenterHorizontally_instance = new CenterHorizontally();
  End_instance_0 = new End_0();
  FromStyle_instance_0 = new FromStyle_0();
  Companion_instance_6 = new Companion();
  Companion_instance_7 = new Companion_0();
  Colors_instance = new Colors();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Box$composable;
  _.$_$.b = Column$composable;
  _.$_$.c = Row$composable;
  _.$_$.d = Spacer$composable;
  _.$_$.e = rowClasses;
  _.$_$.f = get_isBright;
  _.$_$.g = lightened;
  _.$_$.h = animation_0;
  _.$_$.i = ariaDisabled_0;
  _.$_$.j = ariaHidden_0;
  _.$_$.k = backdropFilter;
  _.$_$.l = backgroundColor_0;
  _.$_$.m = backgroundImage_0;
  _.$_$.n = background_0;
  _.$_$.o = borderBottom_0;
  _.$_$.p = borderLeft_0;
  _.$_$.q = borderRadius_2;
  _.$_$.r = borderRadius_1;
  _.$_$.s = borderTop_0;
  _.$_$.t = border_1;
  _.$_$.u = border_0;
  _.$_$.v = bottom_0;
  _.$_$.w = boxShadow_0;
  _.$_$.x = boxSizing_0;
  _.$_$.y = classNames;
  _.$_$.z = color_0;
  _.$_$.a1 = cursor_0;
  _.$_$.b1 = display_0;
  _.$_$.c1 = fillMaxHeight;
  _.$_$.d1 = fillMaxSize;
  _.$_$.e1 = fillMaxWidth;
  _.$_$.f1 = flexGrow_0;
  _.$_$.g1 = fontFamily_0;
  _.$_$.h1 = fontSize_2;
  _.$_$.i1 = fontSize_1;
  _.$_$.j1 = fontWeight_1;
  _.$_$.k1 = fontWeight_2;
  _.$_$.l1 = gap_0;
  _.$_$.m1 = gridRow_0;
  _.$_$.n1 = gridTemplateColumns_0;
  _.$_$.o1 = gridTemplateRows_0;
  _.$_$.p1 = height_0;
  _.$_$.q1 = id;
  _.$_$.r1 = left_0;
  _.$_$.s1 = lineHeight_0;
  _.$_$.t1 = listStyle_0;
  _.$_$.u1 = margin_2;
  _.$_$.v1 = margin_1;
  _.$_$.w1 = margin_3;
  _.$_$.x1 = margin_0;
  _.$_$.y1 = maxWidth_0;
  _.$_$.z1 = minHeight_0;
  _.$_$.a2 = minWidth_0;
  _.$_$.b2 = objectFit_0;
  _.$_$.c2 = onAnimationEnd;
  _.$_$.d2 = onClick;
  _.$_$.e2 = opacity_0;
  _.$_$.f2 = outline_0;
  _.$_$.g2 = overflowWrap_0;
  _.$_$.h2 = overflow_0;
  _.$_$.i2 = overflow_1;
  _.$_$.j2 = paddingInline_0;
  _.$_$.k2 = padding_3;
  _.$_$.l2 = padding_0;
  _.$_$.m2 = padding_2;
  _.$_$.n2 = padding_1;
  _.$_$.o2 = pointerEvents_0;
  _.$_$.p2 = position_0;
  _.$_$.q2 = right_0;
  _.$_$.r2 = scale_1;
  _.$_$.s2 = scale_2;
  _.$_$.t2 = scrollBehavior_0;
  _.$_$.u2 = setVariable_2;
  _.$_$.v2 = setVariable_1;
  _.$_$.w2 = size;
  _.$_$.x2 = tabIndex;
  _.$_$.y2 = textAlign_0;
  _.$_$.z2 = textDecorationLine_0;
  _.$_$.a3 = top_0;
  _.$_$.b3 = transition_0;
  _.$_$.c3 = transition_1;
  _.$_$.d3 = translateX_0;
  _.$_$.e3 = translateY_0;
  _.$_$.f3 = userSelect_0;
  _.$_$.g3 = verticalAlign_0;
  _.$_$.h3 = visibility_0;
  _.$_$.i3 = whiteSpace_0;
  _.$_$.j3 = width_0;
  _.$_$.k3 = zIndex_0;
  _.$_$.l3 = styleModifier;
  _.$_$.m3 = thenIf;
  _.$_$.n3 = toAttrs;
  _.$_$.o3 = toStyles;
  _.$_$.p3 = Bottom_instance;
  _.$_$.q3 = Center_instance;
  _.$_$.r3 = SpaceBetween_instance;
  _.$_$.s3 = Start_instance;
  _.$_$.t3 = KobwebComposeStyleSheet_getInstance;
  _.$_$.u3 = Companion_instance_7;
  _.$_$.v3 = Colors_instance;
  _.$_$.w3 = BottomEnd_instance;
  _.$_$.x3 = Bottom_instance_0;
  _.$_$.y3 = CenterEnd_instance;
  _.$_$.z3 = CenterHorizontally_instance;
  _.$_$.a4 = CenterStart_instance;
  _.$_$.b4 = CenterVertically_instance;
  _.$_$.c4 = Center_instance_0;
  _.$_$.d4 = End_instance_0;
  _.$_$.e4 = Start_instance_0;
  _.$_$.f4 = TopCenter_instance;
  _.$_$.g4 = TopEnd_instance;
  _.$_$.h4 = TopStart_instance;
  _.$_$.i4 = Top_instance_0;
  _.$_$.j4 = Companion_instance_6;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-kobweb-compose.js.map