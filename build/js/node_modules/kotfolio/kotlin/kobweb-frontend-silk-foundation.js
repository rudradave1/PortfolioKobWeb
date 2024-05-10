(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-runtime.js', './kobweb-frontend-kobweb-compose.js', './html-html-core.js', './kobweb-frontend-compose-html-ext.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-runtime.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./html-html-core.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    root['kobweb-frontend-silk-foundation'] = factory(typeof this['kobweb-frontend-silk-foundation'] === 'undefined' ? {} : this['kobweb-frontend-silk-foundation'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-runtime'], this['kobweb-frontend-kobweb-compose'], this['html-html-core'], this['kobweb-frontend-compose-html-ext'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.y1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var THROW_CCE = kotlin_kotlin.$_$.i8;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var KobwebComposeStyleSheet_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t3;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var Style$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.x3;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.f1;
  var protoOf = kotlin_kotlin.$_$.i6;
  var objectMeta = kotlin_kotlin.$_$.h6;
  var setMetadataFor = kotlin_kotlin.$_$.j6;
  var mapCapacity = kotlin_kotlin.$_$.u3;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  var ComparableStyleScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g;
  var toStyles = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o3;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var From_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.g;
  var to = kotlin_kotlin.$_$.z8;
  var To_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.h;
  var Percentage = kotlin_org_jetbrains_compose_html_html_core.$_$.v;
  var equals = kotlin_kotlin.$_$.q5;
  var hashCode = kotlin_kotlin.$_$.w5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var StyleScopeBuilder = kotlin_org_jetbrains_compose_html_html_core.$_$.d1;
  var CSSKeyframeRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.w;
  var CSSKeyframesRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.x;
  var classMeta = kotlin_kotlin.$_$.n5;
  var listOf = kotlin_kotlin.$_$.t3;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.v2;
  var distinct = kotlin_kotlin.$_$.a3;
  var VOID = kotlin_kotlin.$_$.c;
  var lazy = kotlin_kotlin.$_$.q8;
  var removeSuffix = kotlin_kotlin.$_$.k7;
  var titleCamelCaseToKebabCase = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u2;
  var toString = kotlin_kotlin.$_$.k6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var CSSAnimation = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e;
  var KProperty1 = kotlin_kotlin.$_$.t6;
  var getPropertyCallableRef = kotlin_kotlin.$_$.u5;
  var Raw = kotlin_org_jetbrains_compose_html_html_core.$_$.z;
  var classNames = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j4;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b1;
  var KProperty0 = kotlin_kotlin.$_$.s6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.g;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var ComparableAttrsScope_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c3;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n3;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.u;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.n1;
  var charSequenceLength = kotlin_kotlin.$_$.m5;
  var charSequenceGet = kotlin_kotlin.$_$.l5;
  var substringAfter = kotlin_kotlin.$_$.t7;
  var substringBefore = kotlin_kotlin.$_$.u7;
  var substringAfterLast = kotlin_kotlin.$_$.r7;
  var removePrefix = kotlin_kotlin.$_$.j7;
  var kebabCaseToTitleCamelCase = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t2;
  var joinToString = kotlin_kotlin.$_$.k3;
  var isNotEmpty = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f1;
  var media = kotlin_org_jetbrains_compose_html_html_core.$_$.o2;
  var mutableListOf = kotlin_kotlin.$_$.w3;
  var plus = kotlin_kotlin.$_$.z3;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.z;
  var substringAfterLast_0 = kotlin_kotlin.$_$.q7;
  var toSet = kotlin_kotlin.$_$.l4;
  var endsWith = kotlin_kotlin.$_$.c7;
  var copyToArray = kotlin_kotlin.$_$.z2;
  var getValue = kotlin_kotlin.$_$.i3;
  var toList = kotlin_kotlin.$_$.i4;
  var listOf_0 = kotlin_kotlin.$_$.s3;
  var emptyList = kotlin_kotlin.$_$.b3;
  var getStringHashCode = kotlin_kotlin.$_$.v5;
  var enumEntries = kotlin_kotlin.$_$.f5;
  var Enum = kotlin_kotlin.$_$.b8;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.r1;
  var numberToDouble = kotlin_kotlin.$_$.e6;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.w2;
  var toIntOrNull = kotlin_kotlin.$_$.v7;
  var endsWith_0 = kotlin_kotlin.$_$.b7;
  var startsWith = kotlin_kotlin.$_$.p7;
  var Companion_instance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y3;
  var whiteSpace = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i3;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var Span$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.w3;
  var registerRefScope$composable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q2;
  var Text$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.z3;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var invokeLater = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s2;
  var asList = kotlin_kotlin.$_$.a9;
  var Map = kotlin_kotlin.$_$.l2;
  var isInterface = kotlin_kotlin.$_$.b6;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.n;
  var trimIndent = kotlin_kotlin.$_$.w7;
  var MediaFeature = kotlin_org_jetbrains_compose_html_html_core.$_$.y;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.r8;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var produceState$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var CoroutineImpl = kotlin_kotlin.$_$.d5;
  var ProduceStateScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var EventListener = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.c;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.p4;
  var throwKotlinNothingValueException = kotlin_kotlin.$_$.w8;
  var THROW_IAE = kotlin_kotlin.$_$.j8;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var Companion_instance_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u3;
  var interfaceMeta = kotlin_kotlin.$_$.y5;
  var ensureNotNull = kotlin_kotlin.$_$.p8;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l3;
  var objectCreate = kotlin_kotlin.$_$.g6;
  //endregion
  //region block: pre-declaration
  setMetadataFor(SilkStyleSheet, 'SilkStyleSheet', objectMeta, StyleSheet);
  setMetadataFor(KeyframesBuilder, 'KeyframesBuilder', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Keyframes, 'Keyframes', classMeta);
  setMetadataFor(CacheByPropertyNameDelegate, 'CacheByPropertyNameDelegate', classMeta);
  setMetadataFor(KeyframesProvider, 'KeyframesProvider', classMeta, CacheByPropertyNameDelegate);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(ComponentStyle, 'ComponentStyle', classMeta);
  setMetadataFor(ComponentStyleProvider, 'ComponentStyleProvider', classMeta, CacheByPropertyNameDelegate);
  setMetadataFor(StyleModifiers, 'StyleModifiers', classMeta);
  setMetadataFor(ComponentModifiers, 'ComponentModifiers', classMeta, StyleModifiers);
  setMetadataFor(Light, 'Light', classMeta);
  setMetadataFor(Dark, 'Dark', classMeta);
  setMetadataFor(ColorAgnostic, 'ColorAgnostic', classMeta);
  setMetadataFor(ColorAware, 'ColorAware', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(ImmutableComponentStyle, 'ImmutableComponentStyle', classMeta);
  setMetadataFor(ComponentBaseModifier, 'ComponentBaseModifier', classMeta);
  setMetadataFor(ComponentVariant, 'ComponentVariant', classMeta);
  setMetadataFor(SimpleComponentVariant, 'SimpleComponentVariant', classMeta, ComponentVariant);
  setMetadataFor(CompositeComponentVariant, 'CompositeComponentVariant', classMeta, ComponentVariant);
  setMetadataFor(ComponentVariantProvider, 'ComponentVariantProvider', classMeta, CacheByPropertyNameDelegate);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(CssRule, 'CssRule', classMeta);
  setMetadataFor(NonMediaCssRule, 'NonMediaCssRule', classMeta, CssRule);
  setMetadataFor(OfAttributeSelector, 'OfAttributeSelector', classMeta, NonMediaCssRule);
  setMetadataFor(OfPseudoClass, 'OfPseudoClass', classMeta, NonMediaCssRule);
  setMetadataFor(OfPseudoElement, 'OfPseudoElement', classMeta, NonMediaCssRule);
  setMetadataFor(CompositeOpen, 'CompositeOpen', classMeta, NonMediaCssRule);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(Key, 'Key', classMeta);
  setMetadataFor(CssModifier, 'CssModifier', classMeta);
  setMetadataFor(Breakpoint, 'Breakpoint', classMeta, Enum);
  setMetadataFor(BreakpointValues, 'BreakpointValues', classMeta);
  setMetadataFor(BreakpointUnitValue, 'BreakpointUnitValue', classMeta);
  setMetadataFor(Rem, 'Rem', classMeta, BreakpointUnitValue);
  setMetadataFor(ResponsiveValues, 'ResponsiveValues', classMeta);
  setMetadataFor(Entry, 'Entry', classMeta);
  setMetadataFor(DeferredComposablesState, 'DeferredComposablesState', classMeta, VOID, VOID, DeferredComposablesState);
  setMetadataFor(ComposableSingletons$DeferredKt, 'ComposableSingletons$DeferredKt', objectMeta);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(InitSilkContext, 'InitSilkContext', classMeta);
  setMetadataFor(MutableSilkConfig, 'MutableSilkConfig', classMeta, VOID, VOID, MutableSilkConfig);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(SilkStylesheetInstance, 'SilkStylesheetInstance', objectMeta);
  setMetadataFor(MutableSilkTheme, 'MutableSilkTheme', classMeta, VOID, VOID, MutableSilkTheme);
  setMetadataFor(ImmutableSilkTheme, 'ImmutableSilkTheme', classMeta);
  setMetadataFor(rememberBreakpoint$composable$slambda, 'rememberBreakpoint$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(ColorMode, 'ColorMode', classMeta, Enum);
  setMetadataFor(ColorSchemes$Monochrome$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Red$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Pink$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Purple$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$DeepPurple$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Indigo$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Blue$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$LightBlue$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Cyan$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Teal$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Green$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$LightGreen$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Lime$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Yellow$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Amber$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Orange$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$DeepOrange$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Brown$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$Gray$1, VOID, classMeta);
  setMetadataFor(ColorSchemes$BlueGray$1, VOID, classMeta);
  setMetadataFor(ColorSchemes, 'ColorSchemes', objectMeta);
  setMetadataFor(SilkPalettes, 'SilkPalettes', interfaceMeta);
  setMetadataFor(LegacyMutableSilkPalettes, 'LegacyMutableSilkPalettes', classMeta, VOID, [SilkPalettes]);
  setMetadataFor(PaletteEntry, 'PaletteEntry', classMeta);
  setMetadataFor(Button, 'Button', classMeta);
  setMetadataFor(Checkbox, 'Checkbox', classMeta);
  setMetadataFor(Input, 'Input', classMeta);
  setMetadataFor(Link, 'Link', classMeta);
  setMetadataFor(Switch, 'Switch', classMeta);
  setMetadataFor(Tab, 'Tab', classMeta);
  setMetadataFor(Tooltip, 'Tooltip', classMeta);
  setMetadataFor(LegacyMutableSilkPalette, 'LegacyMutableSilkPalette', classMeta);
  function get(colorMode) {
    var tmp;
    switch (colorMode.s9_1) {
      case 0:
        tmp = this.t37();
        break;
      case 1:
        tmp = this.u37();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  setMetadataFor(Palettes, 'Palettes', interfaceMeta);
  setMetadataFor(MutablePalettes, 'MutablePalettes', classMeta, VOID, [Palettes], MutablePalettes);
  function getValue_0(key) {
    return ensureNotNull(this.w37(key));
  }
  setMetadataFor(Palette, 'Palette', interfaceMeta);
  setMetadataFor(EntryDelegate, 'EntryDelegate', classMeta);
  setMetadataFor(ColorGroup, 'ColorGroup', classMeta);
  setMetadataFor(MutablePalette, 'MutablePalette', classMeta, VOID, [Palette], MutablePalette);
  setMetadataFor(RectF, 'RectF', classMeta, VOID, VOID, RectF_init_$Create$);
  setMetadataFor(Path, 'Path', classMeta);
  setMetadataFor(InsetPath, 'InsetPath', classMeta, Path);
  //endregion
  function prepareSilkFoundation$composable(initSilk_0, content, $composer, $changed, $default) {
    var initSilk_1 = {_v: initSilk_0};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(1934335721);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ((($default & 1) === 0 ? $composer_0.iv(initSilk_1._v) : false) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.iv(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
      $composer_0.qu();
      if (($changed & 1) === 0 ? true : $composer_0.ku()) {
        if (!(($default & 1) === 0)) {
          $composer_0.mu(-1220564424);
          // Inline function 'androidx.compose.runtime.cache' call
          var this_0 = $composer_0;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = this_0.dv();
          var tmp;
          if (false ? true : it === Companion_getInstance().gu_1) {
            // Inline function 'com.varabyte.kobweb.silk.prepareSilkFoundation$composable.<anonymous>' call
            var value = prepareSilkFoundation$composable$lambda;
            this_0.ev(value);
            tmp = value;
          } else {
            tmp = it;
          }
          var tmp_0 = tmp;
          var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
          $composer_0.nu();
          initSilk_1._v = tmpCache;
          $dirty = $dirty & -15;
        }
      } else {
        $composer_0.xu();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
      }
      $composer_0.ru();
      if (isTraceInProgress()) {
        traceEventStart(1934335721, $dirty, -1, 'com.varabyte.kobweb.silk.prepareSilkFoundation$composable (PrepareSilkFoundation.kt:10)');
      }
      $composer_0.ou(-1594222658, Unit_instance);
      $composer_0.mu(-1220564277);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      var invalid = $composer_0.iv(initSilk_1._v);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.dv();
      var tmp_1;
      if (invalid ? true : it_0 === Companion_getInstance().gu_1) {
        // Inline function 'com.varabyte.kobweb.silk.prepareSilkFoundation$composable.<anonymous>' call
        var value_0 = prepareSilkFoundation$composable$lambda_0(initSilk_1);
        this_1.ev(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmpCache_0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.nu();
      initSilk(tmpCache_0);
      $composer_0.pu();
      // Inline function 'org.jetbrains.compose.web.css.Style$composable' call
      var styleSheet = KobwebComposeStyleSheet_getInstance();
      var $composer_1 = $composer_0;
      $composer_1.mu(-168645675);
      sourceInformation($composer_1, 'CC(Style$composable)');
      Style$composable(null, styleSheet.e1z(), $composer_1, 0, 1);
      $composer_1.nu();
      // Inline function 'org.jetbrains.compose.web.css.Style$composable' call
      var styleSheet_0 = SilkStyleSheet_getInstance();
      var $composer_2 = $composer_0;
      $composer_2.mu(-168645675);
      sourceInformation($composer_2, 'CC(Style$composable)');
      Style$composable(null, styleSheet_0.e1z(), $composer_2, 0, 1);
      $composer_2.nu();
      content($composer_0, 14 & $dirty >> 3);
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
      tmp0_safe_receiver.s19(prepareSilkFoundation$composable$lambda_1(initSilk_1, content, $changed, $default));
    }
  }
  function prepareSilkFoundation$composable$lambda(it) {
    return Unit_instance;
  }
  function prepareSilkFoundation$composable$lambda_0($initSilk) {
    return function (ctx) {
      $initSilk._v(ctx);
      return Unit_instance;
    };
  }
  function prepareSilkFoundation$composable$lambda_1($initSilk, $content, $$changed, $$default) {
    return function ($composer, $force) {
      prepareSilkFoundation$composable($initSilk._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SilkStyleSheet() {
    SilkStyleSheet_instance = this;
    StyleSheet.call(this);
    this.x2o_1 = 0;
  }
  protoOf(SilkStyleSheet).i1z = function (selector, cssRule) {
    return this.h1z(selector, cssRule);
  };
  var SilkStyleSheet_instance;
  function SilkStyleSheet_getInstance() {
    if (SilkStyleSheet_instance == null)
      new SilkStyleSheet();
    return SilkStyleSheet_instance;
  }
  function _get_comparableKeyframeStyles__erog4h($this) {
    // Inline function 'kotlin.collections.mapValues' call
    var this_0 = $this.z2o_1;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$(mapCapacity(this_0.j()));
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator = this_0.i2().l();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp = element.l2();
      // Inline function 'com.varabyte.kobweb.silk.components.animation.KeyframesBuilder.<get-comparableKeyframeStyles>.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var modifier = element.m2();
      // Inline function 'kotlin.apply' call
      var this_1 = new ComparableStyleScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.animation.KeyframesBuilder.<get-comparableKeyframeStyles>.<anonymous>.<anonymous>' call
      toStyles(modifier)(this_1);
      destination.j2(tmp, this_1);
    }
    return destination;
  }
  function KeyframesBuilder(colorMode) {
    this.y2o_1 = colorMode;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.z2o_1 = LinkedHashMap_init_$Create$_0();
    this.a2p_1 = 8;
  }
  protoOf(KeyframesBuilder).b2p = function (createStyle) {
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.z2o_1;
    var pair = to(From_getInstance(), createStyle());
    this_0.j2(pair.id_1, pair.jd_1);
  };
  protoOf(KeyframesBuilder).c2p = function (createStyle) {
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.z2o_1;
    var pair = to(To_getInstance(), createStyle());
    this_0.j2(pair.id_1, pair.jd_1);
  };
  protoOf(KeyframesBuilder).d2p = function (_this__u8e3s4, createStyle) {
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.z2o_1;
    var pair = to(new Percentage(_this__u8e3s4), createStyle());
    this_0.j2(pair.id_1, pair.jd_1);
  };
  protoOf(KeyframesBuilder).equals = function (other) {
    if (!(other instanceof KeyframesBuilder))
      return false;
    return this === other ? true : equals(_get_comparableKeyframeStyles__erog4h(this), _get_comparableKeyframeStyles__erog4h(other));
  };
  protoOf(KeyframesBuilder).hashCode = function () {
    return hashCode(_get_comparableKeyframeStyles__erog4h(this));
  };
  protoOf(KeyframesBuilder).e2p = function (stylesheet, keyframesName) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.z2o_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(this_0.j());
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this_0.i2().l();
    while (tmp0_iterator.x()) {
      var item = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.components.animation.KeyframesBuilder.addKeyframesIntoStylesheet.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var keyframe = item.l2();
      // Inline function 'kotlin.collections.component2' call
      var modifier = item.m2();
      var styles = toStyles(modifier);
      var cssRuleBuilder = new StyleScopeBuilder();
      styles(cssRuleBuilder);
      var tmp$ret$3 = new CSSKeyframeRuleDeclaration(keyframe, cssRuleBuilder);
      destination.u(tmp$ret$3);
    }
    var keyframeRules = destination;
    stylesheet.q1x(new CSSKeyframesRuleDeclaration(keyframesName, keyframeRules));
  };
  function Companion() {
  }
  protoOf(Companion).f2p = function (build) {
    // Inline function 'kotlin.collections.count' call
    // Inline function 'kotlin.collections.map' call
    var this_0 = listOf([ColorMode_LIGHT_getInstance(), ColorMode_DARK_getInstance()]);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.l();
    while (tmp0_iterator.x()) {
      var item = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.components.animation.Companion.isColorModeAgnostic.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var this_1 = new KeyframesBuilder(item);
      // Inline function 'kotlin.contracts.contract' call
      build(this_1);
      destination.u(this_1);
    }
    return distinct(destination).j() === 1;
  };
  var Companion_instance_3;
  function Companion_getInstance_0() {
    return Companion_instance_3;
  }
  function Keyframes$usesColorMode$delegate$lambda(this$0) {
    return function () {
      return !Companion_instance_3.f2p(this$0.g2p_1);
    };
  }
  function Keyframes(name, prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    this.g2p_1 = init;
    var tmp = this;
    var tmp_0;
    if (prefix == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.animation.Keyframes.name.<anonymous>' call
      tmp_0 = prefix + '-' + name;
    }
    var tmp1_elvis_lhs = tmp_0;
    tmp.h2p_1 = tmp1_elvis_lhs == null ? name : tmp1_elvis_lhs;
    var tmp_1 = this;
    tmp_1.i2p_1 = lazy(Keyframes$usesColorMode$delegate$lambda(this));
    this.j2p_1 = 8;
  }
  protoOf(Keyframes).k2p = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.i2p_1;
    usesColorMode$factory();
    return this_0.m2();
  };
  function KeyframesProvider(prefix, init) {
    CacheByPropertyNameDelegate.call(this);
    this.n2p_1 = prefix;
    this.o2p_1 = init;
    this.p2p_1 = 0;
  }
  protoOf(KeyframesProvider).e2d = function (propertyName) {
    var name = titleCamelCaseToKebabCase(removeSuffix(removeSuffix(removeSuffix(propertyName, 'Anim'), 'Animation'), 'Keyframes'));
    return new Keyframes(name, this.n2p_1, this.o2p_1);
  };
  function Keyframes_0(prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    return new KeyframesProvider(prefix, init);
  }
  function registerKeyframes(_this__u8e3s4, keyframes) {
    return _this__u8e3s4.s2p(keyframes.h2p_1, keyframes.g2p_1);
  }
  function toAnimation$composable(_this__u8e3s4, duration, timingFunction, delay, iterationCount, direction, fillMode, playState, $composer, $changed, $default) {
    var duration_0 = duration;
    var timingFunction_0 = timingFunction;
    var delay_0 = delay;
    var iterationCount_0 = iterationCount;
    var direction_0 = direction;
    var fillMode_0 = fillMode;
    var playState_0 = playState;
    var $composer_0 = $composer;
    $composer_0.mu(-1221404743);
    if (!(($default & 1) === 0))
      duration_0 = null;
    if (!(($default & 2) === 0))
      timingFunction_0 = null;
    if (!(($default & 4) === 0))
      delay_0 = null;
    if (!(($default & 8) === 0))
      iterationCount_0 = null;
    if (!(($default & 16) === 0))
      direction_0 = null;
    if (!(($default & 32) === 0))
      fillMode_0 = null;
    if (!(($default & 64) === 0))
      playState_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-1221404743, $changed, -1, 'com.varabyte.kobweb.silk.components.animation.toAnimation$composable (Keyframes.kt:208)');
    }
    var colorMode = _this__u8e3s4.k2p() ? Companion_instance_9.t2p($composer_0, 6) : null;
    var tmp0 = toAnimation(_this__u8e3s4, colorMode, duration_0, timingFunction_0, delay_0, iterationCount_0, direction_0, fillMode_0, playState_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.nu();
    return tmp0;
  }
  function toAnimation(_this__u8e3s4, colorMode, duration, timingFunction, delay, iterationCount, direction, fillMode, playState) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    iterationCount = iterationCount === VOID ? null : iterationCount;
    direction = direction === VOID ? null : direction;
    fillMode = fillMode === VOID ? null : fillMode;
    playState = playState === VOID ? null : playState;
    var tmp;
    if (_this__u8e3s4.k2p()) {
      var tmp_0;
      if (colorMode == null) {
        var message = 'Animation ' + _this__u8e3s4.h2p_1 + " depends on the site's color mode but no color mode was specified.";
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_0 = colorMode;
      }
      tmp = tmp_0;
    } else {
      tmp = null;
    }
    var colorMode_0 = tmp;
    var tmp_1;
    if (!(colorMode_0 == null)) {
      tmp_1 = suffixedWith(_this__u8e3s4.h2p_1, colorMode_0);
    } else {
      tmp_1 = _this__u8e3s4.h2p_1;
    }
    var finalName = tmp_1;
    return new CSSAnimation(finalName, duration, timingFunction, delay, iterationCount, direction, fillMode, playState);
  }
  function usesColorMode$factory() {
    return getPropertyCallableRef('usesColorMode', 1, KProperty1, function (receiver) {
      return receiver.k2p();
    }, null);
  }
  function get_DisplayIfAtLeastZeroStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastZeroStyle$delegate.g2a(null, DisplayIfAtLeastZeroStyle$factory());
  }
  var DisplayIfAtLeastZeroStyle$delegate;
  function get_DisplayIfAtLeastSmStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastSmStyle$delegate.g2a(null, DisplayIfAtLeastSmStyle$factory());
  }
  var DisplayIfAtLeastSmStyle$delegate;
  function get_DisplayIfAtLeastMdStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastMdStyle$delegate.g2a(null, DisplayIfAtLeastMdStyle$factory());
  }
  var DisplayIfAtLeastMdStyle$delegate;
  function get_DisplayIfAtLeastLgStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastLgStyle$delegate.g2a(null, DisplayIfAtLeastLgStyle$factory());
  }
  var DisplayIfAtLeastLgStyle$delegate;
  function get_DisplayIfAtLeastXlStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastXlStyle$delegate.g2a(null, DisplayIfAtLeastXlStyle$factory());
  }
  var DisplayIfAtLeastXlStyle$delegate;
  function get_DisplayUntilZeroStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilZeroStyle$delegate.g2a(null, DisplayUntilZeroStyle$factory());
  }
  var DisplayUntilZeroStyle$delegate;
  function get_DisplayUntilSmStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilSmStyle$delegate.g2a(null, DisplayUntilSmStyle$factory());
  }
  var DisplayUntilSmStyle$delegate;
  function get_DisplayUntilMdStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilMdStyle$delegate.g2a(null, DisplayUntilMdStyle$factory());
  }
  var DisplayUntilMdStyle$delegate;
  function get_DisplayUntilLgStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilLgStyle$delegate.g2a(null, DisplayUntilLgStyle$factory());
  }
  var DisplayUntilLgStyle$delegate;
  function get_DisplayUntilXlStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilXlStyle$delegate.g2a(null, DisplayUntilXlStyle$factory());
  }
  var DisplayUntilXlStyle$delegate;
  function invert(_this__u8e3s4) {
    _init_properties_BreakpointConditions_kt__53om95();
    return new Raw('not all and ' + _this__u8e3s4);
  }
  function displayUntil(_this__u8e3s4, breakpoint) {
    _init_properties_BreakpointConditions_kt__53om95();
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = breakpoint.r9_1.toLowerCase();
    return classNames(_this__u8e3s4, ['silk-display-until-' + tmp$ret$1]);
  }
  function displayIfAtLeast(_this__u8e3s4, breakpoint) {
    _init_properties_BreakpointConditions_kt__53om95();
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = breakpoint.r9_1.toLowerCase();
    return classNames(_this__u8e3s4, ['silk-display-if-at-least-' + tmp$ret$1]);
  }
  function DisplayIfAtLeastZeroStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_ZERO_getInstance()));
    $this$ComponentStyle.x2p(tmp, DisplayIfAtLeastZeroStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function DisplayIfAtLeastZeroStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastSmStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_SM_getInstance()));
    $this$ComponentStyle.x2p(tmp, DisplayIfAtLeastSmStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function DisplayIfAtLeastSmStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastMdStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_MD_getInstance()));
    $this$ComponentStyle.x2p(tmp, DisplayIfAtLeastMdStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function DisplayIfAtLeastMdStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastLgStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_LG_getInstance()));
    $this$ComponentStyle.x2p(tmp, DisplayIfAtLeastLgStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function DisplayIfAtLeastLgStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastXlStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_XL_getInstance()));
    $this$ComponentStyle.x2p(tmp, DisplayIfAtLeastXlStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function DisplayIfAtLeastXlStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilZeroStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_ZERO_getInstance();
    $this$ComponentStyle.y2p(tmp, DisplayUntilZeroStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function DisplayUntilZeroStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilSmStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_SM_getInstance();
    $this$ComponentStyle.y2p(tmp, DisplayUntilSmStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function DisplayUntilSmStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilMdStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_MD_getInstance();
    $this$ComponentStyle.y2p(tmp, DisplayUntilMdStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function DisplayUntilMdStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilLgStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_LG_getInstance();
    $this$ComponentStyle.y2p(tmp, DisplayUntilLgStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function DisplayUntilLgStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilXlStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_XL_getInstance();
    $this$ComponentStyle.y2p(tmp, DisplayUntilXlStyle$delegate$lambda$lambda);
    return Unit_instance;
  }
  function DisplayUntilXlStyle$delegate$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastZeroStyle$factory() {
    return getPropertyCallableRef('DisplayIfAtLeastZeroStyle', 0, KProperty0, function () {
      return get_DisplayIfAtLeastZeroStyle();
    }, null);
  }
  function DisplayIfAtLeastSmStyle$factory() {
    return getPropertyCallableRef('DisplayIfAtLeastSmStyle', 0, KProperty0, function () {
      return get_DisplayIfAtLeastSmStyle();
    }, null);
  }
  function DisplayIfAtLeastMdStyle$factory() {
    return getPropertyCallableRef('DisplayIfAtLeastMdStyle', 0, KProperty0, function () {
      return get_DisplayIfAtLeastMdStyle();
    }, null);
  }
  function DisplayIfAtLeastLgStyle$factory() {
    return getPropertyCallableRef('DisplayIfAtLeastLgStyle', 0, KProperty0, function () {
      return get_DisplayIfAtLeastLgStyle();
    }, null);
  }
  function DisplayIfAtLeastXlStyle$factory() {
    return getPropertyCallableRef('DisplayIfAtLeastXlStyle', 0, KProperty0, function () {
      return get_DisplayIfAtLeastXlStyle();
    }, null);
  }
  function DisplayUntilZeroStyle$factory() {
    return getPropertyCallableRef('DisplayUntilZeroStyle', 0, KProperty0, function () {
      return get_DisplayUntilZeroStyle();
    }, null);
  }
  function DisplayUntilSmStyle$factory() {
    return getPropertyCallableRef('DisplayUntilSmStyle', 0, KProperty0, function () {
      return get_DisplayUntilSmStyle();
    }, null);
  }
  function DisplayUntilMdStyle$factory() {
    return getPropertyCallableRef('DisplayUntilMdStyle', 0, KProperty0, function () {
      return get_DisplayUntilMdStyle();
    }, null);
  }
  function DisplayUntilLgStyle$factory() {
    return getPropertyCallableRef('DisplayUntilLgStyle', 0, KProperty0, function () {
      return get_DisplayUntilLgStyle();
    }, null);
  }
  function DisplayUntilXlStyle$factory() {
    return getPropertyCallableRef('DisplayUntilXlStyle', 0, KProperty0, function () {
      return get_DisplayUntilXlStyle();
    }, null);
  }
  var properties_initialized_BreakpointConditions_kt_kx7tgr;
  function _init_properties_BreakpointConditions_kt__53om95() {
    if (!properties_initialized_BreakpointConditions_kt_kx7tgr) {
      properties_initialized_BreakpointConditions_kt_kx7tgr = true;
      DisplayIfAtLeastZeroStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayIfAtLeastZeroStyle$delegate$lambda);
      DisplayIfAtLeastSmStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayIfAtLeastSmStyle$delegate$lambda);
      DisplayIfAtLeastMdStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayIfAtLeastMdStyle$delegate$lambda);
      DisplayIfAtLeastLgStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayIfAtLeastLgStyle$delegate$lambda);
      DisplayIfAtLeastXlStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayIfAtLeastXlStyle$delegate$lambda);
      DisplayUntilZeroStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayUntilZeroStyle$delegate$lambda);
      DisplayUntilSmStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayUntilSmStyle$delegate$lambda);
      DisplayUntilMdStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayUntilMdStyle$delegate$lambda);
      DisplayUntilLgStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayUntilLgStyle$delegate$lambda);
      DisplayUntilXlStyle$delegate = ComponentStyle_0(VOID, 'silk', DisplayUntilXlStyle$delegate$lambda);
    }
  }
  function Companion_0() {
  }
  var Companion_instance_4;
  function Companion_getInstance_1() {
    return Companion_instance_4;
  }
  function addStyles(_this__u8e3s4, $this, cssRule, styles) {
    _this__u8e3s4.j1z(cssRule, ComponentStyle$addStyles$lambda(styles));
  }
  function withFinalSelectorName($this, selectorBaseName, group, handler) {
    if (group instanceof Light)
      handler(suffixedWith(selectorBaseName, ColorMode_LIGHT_getInstance()), group.g2q_1);
    else {
      if (group instanceof Dark)
        handler(suffixedWith(selectorBaseName, ColorMode_DARK_getInstance()), group.e2q_1);
      else {
        if (group instanceof ColorAgnostic)
          handler(selectorBaseName, group.c2q_1);
        else {
          if (group instanceof ColorAware) {
            handler(suffixedWith(selectorBaseName, ColorMode_LIGHT_getInstance()), group.z2p_1);
            handler(suffixedWith(selectorBaseName, ColorMode_DARK_getInstance()), group.a2q_1);
          }
        }
      }
    }
  }
  function mergeCssModifiers(_this__u8e3s4, $this, init) {
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.groupBy' call
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    init(_this__u8e3s4);
    // Inline function 'kotlin.collections.groupByTo' call
    var this_0 = _this__u8e3s4.v2p_1;
    var destination = LinkedHashMap_init_$Create$_0();
    var tmp0_iterator = this_0.l();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.mergeCssModifiers.<anonymous>' call
      var key = element.l2();
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination.t2(key);
      var tmp;
      if (value == null) {
        // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
        var answer = ArrayList_init_$Create$_0();
        destination.j2(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      var list = tmp;
      list.u(element);
    }
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_0 = LinkedHashMap_init_$Create$(mapCapacity(destination.j()));
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator_0 = destination.i2().l();
    while (tmp0_iterator_0.x()) {
      var element_0 = tmp0_iterator_0.z();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp_0 = element_0.l2();
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.mergeCssModifiers.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var group = element_0.m2();
      // Inline function 'kotlin.collections.reduce' call
      var iterator = group.l();
      if (!iterator.x())
        throw UnsupportedOperationException_init_$Create$("Empty collection can't be reduced.");
      var accumulator = iterator.z();
      while (iterator.x()) {
        // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.mergeCssModifiers.<anonymous>.<anonymous>' call
        var acc = accumulator;
        var curr = iterator.z();
        accumulator = acc.m2q(curr);
      }
      var tmp$ret$10 = accumulator;
      destination_0.j2(tmp_0, tmp$ret$10);
    }
    return destination_0;
  }
  function assertNoAttributeModifiers(_this__u8e3s4, $this, selectorName) {
    // Inline function 'kotlin.collections.onEach' call
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.onEach.<anonymous>' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = _this__u8e3s4.i2().l();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      $l$block: {
        // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.assertNoAttributeModifiers.<anonymous>' call
        // Inline function 'kotlin.collections.component2' call
        var cssModifier = element.m2();
        var attrsScope = ComparableAttrsScope_init_$Create$();
        toAttrs(cssModifier.i2q_1)(attrsScope);
        if (attrsScope.h23_1.q()) {
          break $l$block;
        }
        // Inline function 'kotlin.error' call
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.assertNoAttributeModifiers.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.text.appendLine' call
        var value = "ComponentStyle declarations cannot contain Modifiers that specify attributes. Please move Modifiers associated with attributes to the ComponentStyle's `extraModifiers` parameter.";
        // Inline function 'kotlin.text.appendLine' call
        this_0.t5(value).u5(_Char___init__impl__6a9atx(10));
        // Inline function 'kotlin.text.appendLine' call
        this_0.u5(_Char___init__impl__6a9atx(10));
        // Inline function 'kotlin.text.appendLine' call
        var value_0 = 'Details:';
        // Inline function 'kotlin.text.appendLine' call
        this_0.t5(value_0).u5(_Char___init__impl__6a9atx(10));
        this_0.t5('\tCSS rule: ');
        this_0.t5('"' + selectorName);
        if (!(cssModifier.j2q_1 == null)) {
          this_0.s5(cssModifier.j2q_1);
        }
        if (!(cssModifier.k2q_1 == null)) {
          this_0.t5(cssModifier.k2q_1);
        }
        this_0.t5('"');
        this_0.t5(' (do you declare a property called ');
        // Inline function 'kotlin.text.count' call
        var count = 0;
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(selectorName)) {
          var element_0 = charSequenceGet(selectorName, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.assertNoAttributeModifiers.<anonymous>.<anonymous>.<anonymous>' call
          if (element_0 === _Char___init__impl__6a9atx(46)) {
            count = count + 1 | 0;
          }
        }
        var isStyle = count === 1;
        var styleName = substringBefore(substringAfter(selectorName, '.'), '.');
        if (isStyle) {
          this_0.t5('`' + kebabCaseToTitleCamelCase(styleName) + 'Style`');
        } else {
          var variantPart = removePrefix(substringAfterLast(selectorName, '.'), styleName + '-');
          this_0.t5('`' + kebabCaseToTitleCamelCase(styleName + '-' + variantPart) + 'Variant`');
          this_0.t5(' or ');
          this_0.t5('`' + kebabCaseToTitleCamelCase(variantPart + '-' + styleName) + 'Variant`');
        }
        // Inline function 'kotlin.text.appendLine' call
        // Inline function 'kotlin.text.appendLine' call
        this_0.t5('?)').u5(_Char___init__impl__6a9atx(10));
        // Inline function 'kotlin.text.appendLine' call
        var tmp = attrsScope.h23_1.g2();
        var value_1 = '\tAttribute(s): ' + joinToString(tmp, ', ', VOID, VOID, VOID, VOID, ComponentStyle$assertNoAttributeModifiers$lambda);
        // Inline function 'kotlin.text.appendLine' call
        this_0.t5(value_1).u5(_Char___init__impl__6a9atx(10));
        // Inline function 'kotlin.text.appendLine' call
        this_0.u5(_Char___init__impl__6a9atx(10));
        // Inline function 'kotlin.text.appendLine' call
        var value_2 = 'An example of how to fix this:';
        // Inline function 'kotlin.text.appendLine' call
        this_0.t5(value_2).u5(_Char___init__impl__6a9atx(10));
        // Inline function 'kotlin.text.appendLine' call
        var value_3 = '   // Before\n   val ExampleStyle by ComponentStyle {\n       base {\n          Modifier\n              .backgroundColor(Colors.Magenta))\n              .tabIndex(0) // <-- The offending attribute modifier\n       }\n   }\n   \n   // After\n   val ExampleStyle by ComponentStyle(extraModifiers = Modifier.tabIndex(0)) {\n       base {\n           Modifier.backgroundColor(Colors.Magenta)\n       }\n   }';
        // Inline function 'kotlin.text.appendLine' call
        this_0.t5(value_3).u5(_Char___init__impl__6a9atx(10));
        var message = this_0.toString();
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    return _this__u8e3s4;
  }
  function ComponentStyle$addStyles$lambda($styles) {
    return function ($this$null) {
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator = $styles.x24_1.i2().l();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStyles.<anonymous>.<anonymous>' call
        $this$null.e1y(element.l2(), element.m2());
      }
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator_0 = $styles.y24_1.i2().l();
      while (tmp0_iterator_0.x()) {
        var element_0 = tmp0_iterator_0.z();
        // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStyles.<anonymous>.<anonymous>' call
        $this$null.k1y(element_0.l2(), element_0.m2());
      }
      return Unit_instance;
    };
  }
  function ComponentStyle$assertNoAttributeModifiers$lambda(it) {
    return '"' + it + '"';
  }
  function ComponentStyle$addStylesInto$lambda($classNames, this$0, $styleSheet) {
    return function (name, styles) {
      var tmp;
      if (isNotEmpty(styles)) {
        $classNames.u(name);
        addStyles($styleSheet, this$0, name, styles);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComponentStyle$addStylesInto$lambda$lambda(this$0, $cssRule, $styles) {
    return function ($this$media) {
      addStyles($this$media, this$0, $cssRule, $styles);
      return Unit_instance;
    };
  }
  function ComponentStyle$addStylesInto$lambda_0($classNames, $cssRuleKey, $styleSheet, this$0) {
    return function (name, styles) {
      var tmp;
      if (isNotEmpty(styles)) {
        $classNames.u(name);
        // Inline function 'kotlin.text.orEmpty' call
        var tmp0_elvis_lhs = $cssRuleKey.o2q_1;
        var cssRule = name + (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
        var tmp_0;
        if (!($cssRuleKey.n2q_1 == null)) {
          // Inline function 'kotlin.apply' call
          var this_0 = $styleSheet;
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStylesInto.<anonymous>.<anonymous>' call
          media(this_0, $cssRuleKey.n2q_1, ComponentStyle$addStylesInto$lambda$lambda(this$0, cssRule, styles));
          tmp_0 = Unit_instance;
        } else {
          addStyles($styleSheet, this$0, cssRule, styles);
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      }
      return Unit_instance;
    };
  }
  protoOf(ComponentStyle).w2q = function (styleSheet, selectorName) {
    var classNames = mutableListOf([selectorName]);
    var lightModifiers = assertNoAttributeModifiers(mergeCssModifiers(new ComponentModifiers(ColorMode_LIGHT_getInstance()), this, this.s2q_1), this, selectorName);
    var darkModifiers = assertNoAttributeModifiers(mergeCssModifiers(new ComponentModifiers(ColorMode_DARK_getInstance()), this, this.s2q_1), this, selectorName);
    var tmp = Companion_instance_5;
    var tmp0_safe_receiver = lightModifiers.t2(Companion_getInstance_4().x2q_1);
    var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i2q_1;
    var tmp1_safe_receiver = darkModifiers.t2(Companion_getInstance_4().x2q_1);
    var tmp2_safe_receiver = tmp.y2q(tmp_0, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.i2q_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      withFinalSelectorName(this, selectorName, tmp2_safe_receiver, ComponentStyle$addStylesInto$lambda(classNames, this, styleSheet));
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_0 = plus(lightModifiers.g2(), darkModifiers.g2());
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.l();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.addStylesInto.<anonymous>' call
      if (!element.equals(Companion_getInstance_4().x2q_1)) {
        destination.u(element);
      }
    }
    var allCssRuleKeys = destination;
    var tmp3_iterator = allCssRuleKeys.l();
    $l$loop: while (tmp3_iterator.x()) {
      var cssRuleKey = tmp3_iterator.z();
      var tmp_1 = Companion_instance_5;
      var tmp4_safe_receiver = lightModifiers.t2(cssRuleKey);
      var tmp_2 = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.i2q_1;
      var tmp5_safe_receiver = darkModifiers.t2(cssRuleKey);
      var tmp6_elvis_lhs = tmp_1.y2q(tmp_2, tmp5_safe_receiver == null ? null : tmp5_safe_receiver.i2q_1);
      var tmp_3;
      if (tmp6_elvis_lhs == null) {
        continue $l$loop;
      } else {
        tmp_3 = tmp6_elvis_lhs;
      }
      var group = tmp_3;
      withFinalSelectorName(this, selectorName, group, ComponentStyle$addStylesInto$lambda_0(classNames, cssRuleKey, styleSheet, this));
    }
    return _ClassSelectors___init__impl__tbnzdx(classNames);
  };
  protoOf(ComponentStyle).z2q = function (styleSheet) {
    return this.w2q(styleSheet, '.' + this.u2q_1);
  };
  protoOf(ComponentStyle).a2r = function (classSelectors) {
    return new ImmutableComponentStyle(classSelectors, this.q2q_1);
  };
  function ComponentStyle(name, extraModifiers, prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    this.q2q_1 = extraModifiers;
    this.r2q_1 = prefix;
    this.s2q_1 = init;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(charSequenceLength(name) > 0)) {
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.<anonymous>' call
      var message = 'ComponentStyle name must not be empty';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.t2q_1 = name;
    var tmp = this;
    var tmp0_safe_receiver = this.r2q_1;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentStyle.name.<anonymous>' call
      tmp_0 = tmp0_safe_receiver + '-' + name;
    }
    var tmp1_elvis_lhs = tmp_0;
    tmp.u2q_1 = tmp1_elvis_lhs == null ? name : tmp1_elvis_lhs;
    this.v2q_1 = 0;
  }
  protoOf(ComponentStyle).b2r = function (name, extraModifiers, init) {
    return new SimpleComponentVariant(new ComponentStyle(this.u2q_1 + '-' + name, extraModifiers, null, init), this);
  };
  protoOf(ComponentStyleProvider).e2d = function (propertyName) {
    var name = titleCamelCaseToKebabCase(removeSuffix(propertyName, 'Style'));
    return new ComponentStyle(name, this.e2r_1, this.f2r_1, this.g2r_1);
  };
  function ComponentStyleProvider(extraModifiers, prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    CacheByPropertyNameDelegate.call(this);
    this.e2r_1 = extraModifiers;
    this.f2r_1 = prefix;
    this.g2r_1 = init;
    this.h2r_1 = 0;
  }
  function ComponentStyle_0(extraModifiers, prefix, init) {
    extraModifiers = extraModifiers === VOID ? Companion_instance : extraModifiers;
    prefix = prefix === VOID ? null : prefix;
    return ComponentStyle$composable(ComponentStyle$lambda(extraModifiers), prefix, init);
  }
  function ComponentModifiers(colorMode) {
    StyleModifiers.call(this);
    this.l2r_1 = colorMode;
    this.m2r_1 = 0;
  }
  protoOf(ComponentModifiers).n2r = function () {
    return this.l2r_1;
  };
  function Light(styles) {
    this.g2q_1 = styles;
    this.h2q_1 = 0;
  }
  function Dark(styles) {
    this.e2q_1 = styles;
    this.f2q_1 = 0;
  }
  function ColorAgnostic(styles) {
    this.c2q_1 = styles;
    this.d2q_1 = 0;
  }
  function ColorAware(lightStyles, darkStyles) {
    this.z2p_1 = lightStyles;
    this.a2q_1 = darkStyles;
    this.b2q_1 = 0;
  }
  function Companion_1() {
  }
  protoOf(Companion_1).y2q = function (lightModifiers, darkModifiers) {
    var tmp;
    if (lightModifiers == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.Companion.from.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var this_0 = new ComparableStyleScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.Companion.from.<anonymous>.<anonymous>' call
      toStyles(lightModifiers)(this_0);
      tmp = this_0;
    }
    var lightStyles = tmp;
    var tmp_0;
    if (darkModifiers == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.Companion.from.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var this_1 = new ComparableStyleScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.Companion.from.<anonymous>.<anonymous>' call
      toStyles(darkModifiers)(this_1);
      tmp_0 = this_1;
    }
    var darkStyles = tmp_0;
    if (lightStyles == null ? darkStyles == null : false)
      return null;
    if (!(lightStyles == null) ? darkStyles == null : false)
      return new Light(lightStyles);
    if (lightStyles == null ? !(darkStyles == null) : false)
      return new Dark(darkStyles);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(!(lightStyles == null) ? !(darkStyles == null) : false)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp_1;
    if (equals(lightStyles, darkStyles)) {
      tmp_1 = new ColorAgnostic(lightStyles);
    } else {
      tmp_1 = new ColorAware(lightStyles, darkStyles);
    }
    return tmp_1;
  };
  var Companion_instance_5;
  function Companion_getInstance_2() {
    return Companion_instance_5;
  }
  function _ClassSelectors___init__impl__tbnzdx(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _ClassSelectors___get_classNames__impl__eyto04($this) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = _get_value__a43j40($this);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.l();
    while (tmp0_iterator.x()) {
      var item = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.components.style.ClassSelectors.<get-classNames>.<anonymous>' call
      var tmp$ret$0 = substringAfterLast_0(item, _Char___init__impl__6a9atx(46));
      destination.u(tmp$ret$0);
    }
    return destination;
  }
  function ImmutableComponentStyle(classSelectors, extraModifiers) {
    this.r2r_1 = extraModifiers;
    this.s2r_1 = toSet(_ClassSelectors___get_classNames__impl__eyto04(classSelectors));
    this.t2r_1 = 8;
  }
  protoOf(ImmutableComponentStyle).u2r = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.mu(512683125);
    if (isTraceInProgress()) {
      traceEventStart(512683125, $changed, -1, 'com.varabyte.kobweb.silk.components.style.ImmutableComponentStyle.toModifier$composable (ComponentStyle.kt:287)');
    }
    $composer_0.mu(1050772732);
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.filterNotTo' call
    var this_0 = this.s2r_1;
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.l();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.components.style.ImmutableComponentStyle.toModifier$composable.<anonymous>' call
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = Companion_instance_9.t2p($composer_0, 6).x2r().r9_1.toLowerCase();
      if (!endsWith(element, tmp$ret$1)) {
        destination.u(element);
      }
    }
    $composer_0.nu();
    var currentClassNames = destination;
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!currentClassNames.q()) {
      var tmp_0 = Companion_instance;
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp$ret$6 = copyToArray(currentClassNames);
      tmp = classNames(tmp_0, tmp$ret$6.slice());
    } else {
      tmp = Companion_instance;
    }
    var tmp0 = tmp.s2m(this.r2r_1($composer_0, 0));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.nu();
    return tmp0;
  };
  function ComponentStyle$composable(extraModifiers, prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    return new ComponentStyleProvider(extraModifiers, prefix, init);
  }
  function toModifier$composable(_this__u8e3s4, variants, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.mu(-1254167608);
    if (isTraceInProgress()) {
      traceEventStart(-1254167608, $changed, -1, 'com.varabyte.kobweb.silk.components.style.toModifier$composable (ComponentStyle.kt:456)');
    }
    var tmp = getValue(get_SilkTheme().d2s_1, _this__u8e3s4.u2q_1).u2r($composer_0, 0);
    var tmp0_safe_receiver = combine$composable(toList(variants), $composer_0, 0);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u2r($composer_0, 0);
    var tmp0 = tmp.s2m(tmp1_elvis_lhs == null ? Companion_instance : tmp1_elvis_lhs);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.nu();
    return tmp0;
  }
  function base(_this__u8e3s4, extraModifiers, prefix, init) {
    extraModifiers = extraModifiers === VOID ? Companion_instance : extraModifiers;
    prefix = prefix === VOID ? null : prefix;
    return base$composable(_this__u8e3s4, base$lambda(extraModifiers), prefix, init);
  }
  function ComponentBaseModifier(colorMode) {
    this.g2s_1 = colorMode;
    this.h2s_1 = 0;
  }
  protoOf(ComponentBaseModifier).n2r = function () {
    return this.g2s_1;
  };
  function base_0(_this__u8e3s4, className, extraModifiers, init) {
    extraModifiers = extraModifiers === VOID ? Companion_instance : extraModifiers;
    return base$composable_0(_this__u8e3s4, className, base$lambda_0(extraModifiers), init);
  }
  function base$composable(_this__u8e3s4, extraModifiers, prefix, init) {
    prefix = prefix === VOID ? null : prefix;
    return new ComponentStyleProvider(extraModifiers, prefix, base$composable$lambda(init));
  }
  function toAttrs$composable(_this__u8e3s4, variant, finalHandler, $composer, $changed, $default) {
    var variant_0 = variant;
    var finalHandler_0 = finalHandler;
    var $composer_0 = $composer;
    $composer_0.mu(2120490469);
    if (!(($default & 1) === 0))
      variant_0 = null;
    if (!(($default & 2) === 0))
      finalHandler_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(2120490469, $changed, -1, 'com.varabyte.kobweb.silk.components.style.toAttrs$composable (ComponentStyle.kt:470)');
    }
    var tmp0 = toAttrs(toModifier$composable(_this__u8e3s4, [variant_0], $composer_0, 14 & $changed), finalHandler_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.nu();
    return tmp0;
  }
  function base$composable_0(_this__u8e3s4, className, extraModifiers, init) {
    return new ComponentStyle(className, extraModifiers, VOID, base$composable$lambda_0(init));
  }
  function ComponentStyle$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.mu(1744510051);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(1744510051, $changed, -1, 'com.varabyte.kobweb.silk.components.style.ComponentStyle.<anonymous> (ComponentStyle.kt:427)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.nu();
      return tmp0;
    };
  }
  function base$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.mu(-1565522235);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1565522235, $changed, -1, 'com.varabyte.kobweb.silk.components.style.base.<anonymous> (ComponentStyle.kt:439)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.nu();
      return tmp0;
    };
  }
  function base$lambda_0($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.mu(1154855457);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(1154855457, $changed, -1, 'com.varabyte.kobweb.silk.components.style.base.<anonymous> (ComponentStyle.kt:396)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.nu();
      return tmp0;
    };
  }
  function base$composable$lambda$lambda($this_$receiver, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new ComponentBaseModifier($this_$receiver.l2r_1);
      // Inline function 'kotlin.contracts.contract' call
      return $init(this_0);
    };
  }
  function base$composable$lambda($init) {
    return function ($this$$receiver) {
      $this$$receiver.o2r(base$composable$lambda$lambda($this$$receiver, $init));
      return Unit_instance;
    };
  }
  function base$composable$lambda$lambda_0($this_$receiver, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new ComponentBaseModifier($this_$receiver.l2r_1);
      // Inline function 'kotlin.contracts.contract' call
      return $init(this_0);
    };
  }
  function base$composable$lambda_0($init) {
    return function ($this$$receiver) {
      $this$$receiver.o2r(base$composable$lambda$lambda_0($this$$receiver, $init));
      return Unit_instance;
    };
  }
  function ComponentVariant() {
    this.f2s_1 = 0;
  }
  protoOf(ComponentVariant).i2s = function (next) {
    return new CompositeComponentVariant(this, next);
  };
  function SimpleComponentVariant(style, baseStyle) {
    ComponentVariant.call(this);
    this.k2s_1 = style;
    this.l2s_1 = baseStyle;
    this.m2s_1 = 0;
  }
  protoOf(SimpleComponentVariant).z2q = function (styleSheet) {
    return this.k2s_1.w2q(styleSheet, '.' + this.l2s_1.u2q_1 + '.' + this.k2s_1.u2q_1);
  };
  protoOf(SimpleComponentVariant).a2r = function (classSelectors) {
    return this.k2s_1.a2r(classSelectors);
  };
  protoOf(SimpleComponentVariant).u2r = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.mu(-1695500569);
    if (isTraceInProgress()) {
      traceEventStart(-1695500569, $changed, -1, 'com.varabyte.kobweb.silk.components.style.SimpleComponentVariant.toModifier$composable (ComponentVariant.kt:49)');
    }
    var tmp0 = toModifier$composable(this.k2s_1, [], $composer_0, 64);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.nu();
    return tmp0;
  };
  function CompositeComponentVariant(head, tail) {
    ComponentVariant.call(this);
    this.o2s_1 = head;
    this.p2s_1 = tail;
  }
  protoOf(CompositeComponentVariant).u2r = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.mu(-690240964);
    if (isTraceInProgress()) {
      traceEventStart(-690240964, $changed, -1, 'com.varabyte.kobweb.silk.components.style.CompositeComponentVariant.toModifier$composable (ComponentVariant.kt:60)');
    }
    var tmp0 = this.o2s_1.u2r($composer_0, 0).s2m(this.p2s_1.u2r($composer_0, 0));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.nu();
    return tmp0;
  };
  function combine$composable(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.mu(1446826835);
    if (isTraceInProgress()) {
      traceEventStart(1446826835, $changed, -1, 'com.varabyte.kobweb.silk.components.style.combine$composable (ComponentVariant.kt:85)');
    }
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.reduceOrNull' call
      var iterator = _this__u8e3s4.l();
      if (!iterator.x()) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var accumulator = iterator.z();
      while (iterator.x()) {
        // Inline function 'com.varabyte.kobweb.silk.components.style.combine$composable.<anonymous>' call
        var acc = accumulator;
        var variant = iterator.z();
        var tmp;
        if (!(acc == null) ? !(variant == null) : false) {
          tmp = acc.i2s(variant);
        } else {
          tmp = acc == null ? variant : acc;
        }
        accumulator = tmp;
      }
      tmp$ret$0 = accumulator;
    }
    var tmp0 = tmp$ret$0;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.nu();
    return tmp0;
  }
  protoOf(ComponentVariantProvider).e2d = function (propertyName) {
    var withoutSuffix = titleCamelCaseToKebabCase(removeSuffix(propertyName, 'Variant'));
    // Inline function 'kotlin.takeIf' call
    var this_0 = removeSuffix(removePrefix(withoutSuffix, this.s2s_1.t2q_1 + '-'), '-' + this.s2s_1.t2q_1);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'com.varabyte.kobweb.silk.components.style.ComponentVariantProvider.create.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_0) > 0) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    var name = tmp0_elvis_lhs == null ? withoutSuffix : tmp0_elvis_lhs;
    return this.s2s_1.b2r(name, this.t2s_1, this.u2s_1);
  };
  function ComponentVariantProvider(style, extraModifiers, init) {
    CacheByPropertyNameDelegate.call(this);
    this.s2s_1 = style;
    this.t2s_1 = extraModifiers;
    this.u2s_1 = init;
    this.v2s_1 = 0;
  }
  function addVariantBase(_this__u8e3s4, extraModifiers, init) {
    extraModifiers = extraModifiers === VOID ? Companion_instance : extraModifiers;
    return addVariantBase$composable(_this__u8e3s4, addVariantBase$lambda(extraModifiers), init);
  }
  function addVariant(_this__u8e3s4, extraModifiers, init) {
    extraModifiers = extraModifiers === VOID ? Companion_instance : extraModifiers;
    return addVariant$composable(_this__u8e3s4, addVariant$lambda(extraModifiers), init);
  }
  function addVariantBase$composable(_this__u8e3s4, extraModifiers, init) {
    return new ComponentVariantProvider(_this__u8e3s4, extraModifiers, addVariantBase$composable$lambda(init));
  }
  function addVariant$composable(_this__u8e3s4, extraModifiers, init) {
    return new ComponentVariantProvider(_this__u8e3s4, extraModifiers, init);
  }
  function addVariantBase$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.mu(-723673224);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-723673224, $changed, -1, 'com.varabyte.kobweb.silk.components.style.addVariantBase.<anonymous> (ComponentVariant.kt:125)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.nu();
      return tmp0;
    };
  }
  function addVariant$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.mu(532712666);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(532712666, $changed, -1, 'com.varabyte.kobweb.silk.components.style.addVariant.<anonymous> (ComponentVariant.kt:119)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.nu();
      return tmp0;
    };
  }
  function addVariantBase$composable$lambda$lambda($this_$receiver, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new ComponentBaseModifier($this_$receiver.l2r_1);
      // Inline function 'kotlin.contracts.contract' call
      return $init(this_0);
    };
  }
  function addVariantBase$composable$lambda($init) {
    return function ($this$$receiver) {
      $this$$receiver.o2r(addVariantBase$composable$lambda$lambda($this$$receiver, $init));
      return Unit_instance;
    };
  }
  function Companion_2() {
  }
  protoOf(Companion_2).w2s = function (target, pseudoClass, params) {
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.forEach' call
    var inductionVariable = 0;
    var last = params.length;
    while (inductionVariable < last) {
      var element = params[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.Companion.OfFunctionalPseudoClass.<anonymous>' call
      var tmp0_safe_receiver = element.a2t();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        destination.u(tmp0_safe_receiver);
      }
    }
    return new OfPseudoClass(target, pseudoClass + '(' + joinToString(destination) + ')');
  };
  var Companion_instance_6;
  function Companion_getInstance_3() {
    return Companion_instance_6;
  }
  function NonMediaCssRule(target) {
    CssRule.call(this, target);
    this.e2t_1 = 0;
  }
  function OfAttributeSelector(target, attributeSelector) {
    NonMediaCssRule.call(this, target);
    this.m2t_1 = attributeSelector;
    this.n2t_1 = 0;
  }
  protoOf(OfAttributeSelector).a2t = function () {
    return this.h2t(listOf_0(this), emptyList(), null);
  };
  function OfPseudoClass(target, pseudoClass) {
    NonMediaCssRule.call(this, target);
    this.s2t_1 = pseudoClass;
    this.t2t_1 = 0;
  }
  protoOf(OfPseudoClass).a2t = function () {
    return this.h2t(emptyList(), listOf_0(this), null);
  };
  protoOf(OfPseudoClass).u2t = function (other) {
    return new CompositeOpen(this.x2s_1, null, emptyList(), listOf([this, other]));
  };
  function OfPseudoElement(target, pseudoElement) {
    NonMediaCssRule.call(this, target);
    this.z2t_1 = pseudoElement;
    this.a2u_1 = 0;
  }
  protoOf(OfPseudoElement).a2t = function () {
    return this.h2t(emptyList(), emptyList(), this);
  };
  function CompositeOpen(target, mediaQuery, attributeSelectors, pseudoClasses) {
    NonMediaCssRule.call(this, target);
    this.f2u_1 = mediaQuery;
    this.g2u_1 = attributeSelectors;
    this.h2u_1 = pseudoClasses;
    this.i2u_1 = 0;
  }
  protoOf(CompositeOpen).g2t = function () {
    return this.f2u_1;
  };
  protoOf(CompositeOpen).a2t = function () {
    return this.h2t(this.g2u_1, this.h2u_1, null);
  };
  function CssRule(target) {
    this.x2s_1 = target;
    this.y2s_1 = null;
    this.z2s_1 = 0;
  }
  protoOf(CssRule).f2t = function (createModifier) {
    this.x2s_1.p2r(this.g2t(), this.a2t(), createModifier);
  };
  protoOf(CssRule).g2t = function () {
    return this.y2s_1;
  };
  protoOf(CssRule).a2t = function () {
    return null;
  };
  protoOf(CssRule).h2t = function (attributeSelectors, pseudoClasses, pseudoElement) {
    // Inline function 'kotlin.takeIf' call
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.components.style.CssRule.buildSelectorText.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = attributeSelectors.l();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.components.style.CssRule.buildSelectorText.<anonymous>.<anonymous>' call
      this_0.t5('[' + element.m2t_1 + ']');
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = pseudoClasses.l();
    while (tmp0_iterator_0.x()) {
      var element_0 = tmp0_iterator_0.z();
      // Inline function 'com.varabyte.kobweb.silk.components.style.CssRule.buildSelectorText.<anonymous>.<anonymous>' call
      this_0.t5(':' + element_0.s2t_1);
    }
    if (!(pseudoElement == null)) {
      this_0.t5('::' + pseudoElement.z2t_1);
    }
    var this_1 = this_0.toString();
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'com.varabyte.kobweb.silk.components.style.CssRule.buildSelectorText.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_1) > 0) {
      tmp = this_1;
    } else {
      tmp = null;
    }
    return tmp;
  };
  function get_ariaDisabled(_this__u8e3s4) {
    return new OfAttributeSelector(_this__u8e3s4, 'aria-disabled="true"');
  }
  function not(_this__u8e3s4, params) {
    return Companion_instance_6.w2s(_this__u8e3s4, 'not', params.slice());
  }
  function get_hover(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'hover');
  }
  function get_active(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'active');
  }
  function get_focusVisible(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'focus-visible');
  }
  function get_placeholder(_this__u8e3s4) {
    return new OfPseudoElement(_this__u8e3s4, 'placeholder');
  }
  function get_ariaInvalid(_this__u8e3s4) {
    return new OfAttributeSelector(_this__u8e3s4, 'aria-invalid="true"');
  }
  function get_disabled(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'disabled');
  }
  function get_link(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'link');
  }
  function get_visited(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'visited');
  }
  function Companion_3() {
    Companion_instance_7 = this;
    this.x2q_1 = new Key(null, null);
  }
  var Companion_instance_7;
  function Companion_getInstance_4() {
    if (Companion_instance_7 == null)
      new Companion_3();
    return Companion_instance_7;
  }
  function Key(mediaQuery, suffix) {
    this.n2q_1 = mediaQuery;
    this.o2q_1 = suffix;
    this.p2q_1 = 0;
  }
  protoOf(Key).toString = function () {
    return 'Key(mediaQuery=' + this.n2q_1 + ', suffix=' + this.o2q_1 + ')';
  };
  protoOf(Key).hashCode = function () {
    var result = this.n2q_1 == null ? 0 : getStringHashCode(this.n2q_1);
    result = imul(result, 31) + (this.o2q_1 == null ? 0 : getStringHashCode(this.o2q_1)) | 0;
    return result;
  };
  protoOf(Key).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Key))
      return false;
    var tmp0_other_with_cast = other instanceof Key ? other : THROW_CCE();
    if (!(this.n2q_1 == tmp0_other_with_cast.n2q_1))
      return false;
    if (!(this.o2q_1 == tmp0_other_with_cast.o2q_1))
      return false;
    return true;
  };
  function CssModifier(modifier, mediaQuery, suffix) {
    Companion_getInstance_4();
    mediaQuery = mediaQuery === VOID ? null : mediaQuery;
    suffix = suffix === VOID ? null : suffix;
    this.i2q_1 = modifier;
    this.j2q_1 = mediaQuery;
    this.k2q_1 = suffix;
    this.l2q_1 = 0;
  }
  protoOf(CssModifier).m2q = function (other) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((!(this === other) ? equals(this.j2q_1, other.j2q_1) : false) ? this.k2q_1 == other.k2q_1 : false)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return new CssModifier(this.i2q_1.s2m(other.i2q_1), this.j2q_1, this.k2q_1);
  };
  protoOf(CssModifier).l2 = function () {
    var tmp0_safe_receiver = this.j2q_1;
    return new Key(tmp0_safe_receiver == null ? null : toString(tmp0_safe_receiver), this.k2q_1);
  };
  function StyleModifiers() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.u2p_1 = ArrayList_init_$Create$_0();
    this.v2p_1 = this.u2p_1;
    this.w2p_1 = 0;
  }
  protoOf(StyleModifiers).o2r = function (createModifier) {
    this.u2p_1.u(new CssModifier(createModifier()));
  };
  protoOf(StyleModifiers).p2r = function (mediaQuery, suffix, createModifier) {
    this.u2p_1.u(new CssModifier(createModifier(), mediaQuery, suffix));
  };
  protoOf(StyleModifiers).q2r = function (suffix, createModifier) {
    this.u2p_1.u(new CssModifier(createModifier(), null, suffix));
  };
  protoOf(StyleModifiers).x2p = function (mediaQuery, createModifier) {
    this.u2p_1.u(new CssModifier(createModifier(), mediaQuery));
  };
  protoOf(StyleModifiers).y2p = function (_this__u8e3s4, createModifier) {
    this.x2p(toMinWidthQuery(_this__u8e3s4), createModifier);
  };
  var Breakpoint_ZERO_instance;
  var Breakpoint_SM_instance;
  var Breakpoint_MD_instance;
  var Breakpoint_LG_instance;
  var Breakpoint_XL_instance;
  function values() {
    return [Breakpoint_ZERO_getInstance(), Breakpoint_SM_getInstance(), Breakpoint_MD_getInstance(), Breakpoint_LG_getInstance(), Breakpoint_XL_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Breakpoint_entriesInitialized;
  function Breakpoint_initEntries() {
    if (Breakpoint_entriesInitialized)
      return Unit_instance;
    Breakpoint_entriesInitialized = true;
    Breakpoint_ZERO_instance = new Breakpoint('ZERO', 0);
    Breakpoint_SM_instance = new Breakpoint('SM', 1);
    Breakpoint_MD_instance = new Breakpoint('MD', 2);
    Breakpoint_LG_instance = new Breakpoint('LG', 3);
    Breakpoint_XL_instance = new Breakpoint('XL', 4);
  }
  var $ENTRIES;
  function Breakpoint(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Breakpoint_ZERO_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_ZERO_instance;
  }
  function Breakpoint_SM_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_SM_instance;
  }
  function Breakpoint_MD_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_MD_instance;
  }
  function Breakpoint_LG_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_LG_instance;
  }
  function Breakpoint_XL_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_XL_instance;
  }
  function BreakpointValues(sm, md, lg, xl) {
    this.j2u_1 = sm;
    this.k2u_1 = md;
    this.l2u_1 = lg;
    this.m2u_1 = xl;
    this.n2u_1 = 0;
  }
  protoOf(BreakpointValues).toString = function () {
    return 'BreakpointValues(sm=' + this.j2u_1 + ', md=' + this.k2u_1 + ', lg=' + this.l2u_1 + ', xl=' + this.m2u_1 + ')';
  };
  protoOf(BreakpointValues).hashCode = function () {
    var result = hashCode(this.j2u_1);
    result = imul(result, 31) + hashCode(this.k2u_1) | 0;
    result = imul(result, 31) + hashCode(this.l2u_1) | 0;
    result = imul(result, 31) + hashCode(this.m2u_1) | 0;
    return result;
  };
  protoOf(BreakpointValues).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BreakpointValues))
      return false;
    var tmp0_other_with_cast = other instanceof BreakpointValues ? other : THROW_CCE();
    if (!equals(this.j2u_1, tmp0_other_with_cast.j2u_1))
      return false;
    if (!equals(this.k2u_1, tmp0_other_with_cast.k2u_1))
      return false;
    if (!equals(this.l2u_1, tmp0_other_with_cast.l2u_1))
      return false;
    if (!equals(this.m2u_1, tmp0_other_with_cast.m2u_1))
      return false;
    return true;
  };
  function BreakpointSizes(sm, md, lg, xl) {
    sm = sm === VOID ? get_cssRem(0) : sm;
    md = md === VOID ? sm : md;
    lg = lg === VOID ? md : lg;
    xl = xl === VOID ? lg : xl;
    return new BreakpointValues(new Rem(sm), new Rem(md), new Rem(lg), new Rem(xl));
  }
  function Rem(value) {
    BreakpointUnitValue.call(this, value);
    this.q2u_1 = 0;
  }
  protoOf(Rem).r2u = function () {
    return get_px(this.s2u_1.value * numberToDouble(get_bodyFontSize(window)));
  };
  function BreakpointUnitValue(width) {
    this.s2u_1 = width;
    this.t2u_1 = 0;
  }
  function get_bodyFontSize(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.document.body;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.style.breakpoint.<get-bodyFontSize>.<anonymous>' call
      tmp = toIntOrNull(removeSuffix(_this__u8e3s4.getComputedStyle(tmp0_safe_receiver).getPropertyValue('font-size'), 'px'));
    }
    var bodySize = tmp;
    return bodySize == null ? 16 : bodySize;
  }
  function ResponsiveValues(base, sm, md, lg, xl) {
    this.u2u_1 = base;
    this.v2u_1 = sm;
    this.w2u_1 = md;
    this.x2u_1 = lg;
    this.y2u_1 = xl;
    this.z2u_1 = 0;
  }
  function get_SpanTextStyle() {
    _init_properties_SpanText_kt__upt1hl();
    return SpanTextStyle$delegate.g2a(null, SpanTextStyle$factory());
  }
  var SpanTextStyle$delegate;
  function SpanText$composable(text, modifier, variant, ref, $composer, $changed, $default) {
    _init_properties_SpanText_kt__upt1hl();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(1205558567);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv(text) ? 4 : 2);
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
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.ju()) {
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
        traceEventStart(1205558567, $dirty, -1, 'com.varabyte.kobweb.silk.components.text.SpanText$composable (SpanText.kt:49)');
      }
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var this_0 = toModifier$composable(get_SpanTextStyle(), [variant_0._v], $composer_0, 0).s2m(modifier_0._v);
      var tmp;
      if (startsWith(text, _Char___init__impl__6a9atx(32)) ? true : endsWith_0(text, _Char___init__impl__6a9atx(32))) {
        // Inline function 'com.varabyte.kobweb.silk.components.text.SpanText$composable.<anonymous>' call
        tmp = whiteSpace(Companion_instance, Companion_instance_1.n2a());
      } else {
        tmp = Companion_instance;
      }
      var finalModifier = this_0.s2m(tmp);
      var tmp_0 = toAttrs(finalModifier);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.text.SpanText$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -539273278, true, SpanText$composable$lambda(ref_0, text));
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
        // Inline function 'com.varabyte.kobweb.silk.components.text.SpanText$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.ev(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.nu();
      Span$composable(tmp_0, tmp0, $composer_0, 48, 0);
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
      tmp0_safe_receiver.s19(SpanText$composable$lambda_0(text, modifier_0, variant_0, ref_0, $changed, $default));
    }
  }
  function SpanTextStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_SpanText_kt__upt1hl();
    return Unit_instance;
  }
  function SpanText$composable$lambda($ref, $text) {
    return function ($this$Span, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.fv($this$Span) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
        if (isTraceInProgress()) {
          traceEventStart(-539273278, $dirty, -1, 'com.varabyte.kobweb.silk.components.text.SpanText$composable.<anonymous> (SpanText.kt:58)');
        }
        registerRefScope$composable($this$Span, $ref._v, $composer_0, 14 & $dirty);
        Text$composable($text, $composer_0, 0);
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
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.t1t(p0, p1, p2);
    };
  }
  function SpanText$composable$lambda_0($text, $modifier, $variant, $ref, $$changed, $$default) {
    return function ($composer, $force) {
      SpanText$composable($text, $modifier._v, $variant._v, $ref._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SpanTextStyle$factory() {
    return getPropertyCallableRef('SpanTextStyle', 0, KProperty0, function () {
      return get_SpanTextStyle();
    }, null);
  }
  var properties_initialized_SpanText_kt_kccny1;
  function _init_properties_SpanText_kt__upt1hl() {
    if (!properties_initialized_SpanText_kt_kccny1) {
      properties_initialized_SpanText_kt_kccny1 = true;
      SpanTextStyle$delegate = ComponentStyle_0(VOID, 'silk', SpanTextStyle$delegate$lambda);
    }
  }
  function CacheByPropertyNameDelegate() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.q2p_1 = LinkedHashMap_init_$Create$_0();
    this.r2p_1 = 8;
  }
  protoOf(CacheByPropertyNameDelegate).g2a = function (thisRef, property) {
    var name = property.callableName;
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.q2p_1;
    var value = this_0.t2(name);
    var tmp;
    if (value == null) {
      // Inline function 'com.varabyte.kobweb.silk.components.util.internal.CacheByPropertyNameDelegate.getValue.<anonymous>' call
      var answer = this.e2d(name);
      this_0.j2(name, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp;
  };
  function get_LocalDeferred() {
    _init_properties_Deferred_kt__im2yn();
    return LocalDeferred;
  }
  var LocalDeferred;
  function DeferredComposablesState$Entry$dismiss$lambda(this$0, this$1) {
    return function () {
      this$0.c2v_1.e1t(this$1);
      return Unit_instance;
    };
  }
  function invokeLater_0($this, block) {
    $this.b2v_1.u(block);
    if ($this.a2v_1 === -1) {
      var tmp = $this;
      var tmp_0 = window;
      tmp.a2v_1 = tmp_0.setTimeout(DeferredComposablesState$invokeLater$lambda($this));
    }
  }
  function Entry($outer) {
    this.e2v_1 = $outer;
    this.d2v_1 = null;
  }
  protoOf(Entry).f2v = function () {
    invokeLater_0(this.e2v_1, DeferredComposablesState$Entry$dismiss$lambda(this.e2v_1, this));
  };
  protoOf(Entry).g2v = function (set__$_ezb9bk) {
    this.d2v_1 = set__$_ezb9bk;
  };
  function DeferredComposablesState$invokeLater$lambda(this$0) {
    return function () {
      var tmp0_iterator = this$0.b2v_1.l();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'com.varabyte.kobweb.silk.defer.DeferredComposablesState.invokeLater.<anonymous>.<anonymous>' call
        element();
      }
      this$0.b2v_1.b1();
      this$0.a2v_1 = -1;
      return Unit_instance;
    };
  }
  function DeferredComposablesState$append$lambda(this$0, $it) {
    return function () {
      this$0.c2v_1.p13($it);
      return Unit_instance;
    };
  }
  function DeferredComposablesState$forEach$composable$lambda($tmp0_rcvr, $render, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.h2v($render, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function DeferredComposablesState() {
    this.a2v_1 = -1;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.b2v_1 = ArrayList_init_$Create$_0();
    this.c2v_1 = mutableStateListOf();
  }
  protoOf(DeferredComposablesState).i2v = function () {
    // Inline function 'kotlin.also' call
    var this_0 = new Entry(this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.defer.DeferredComposablesState.append.<anonymous>' call
    invokeLater_0(this, DeferredComposablesState$append$lambda(this, this_0));
    return this_0;
  };
  protoOf(DeferredComposablesState).h2v = function (render, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(2016651302);
    var $dirty = $changed;
    if (isTraceInProgress()) {
      traceEventStart(2016651302, $dirty, -1, 'com.varabyte.kobweb.silk.defer.DeferredComposablesState.forEach$composable (Deferred.kt:31)');
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.c2v_1.l();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.defer.DeferredComposablesState.forEach$composable.<anonymous>' call
      render(element, $composer_0, 8 | 112 & $dirty << 3);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.tu();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.s19(DeferredComposablesState$forEach$composable$lambda(this, render, $changed));
    }
  };
  function renderWithDeferred$composable(content, $composer, $changed) {
    _init_properties_Deferred_kt__im2yn();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(2081108668);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.iv(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.ju()) {
      if (isTraceInProgress()) {
        traceEventStart(2081108668, $dirty, -1, 'com.varabyte.kobweb.silk.defer.renderWithDeferred$composable (Deferred.kt:75)');
      }
      var state = new DeferredComposablesState();
      var tmp = [get_LocalDeferred().o19(state)];
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.defer.renderWithDeferred$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 564114664, true, renderWithDeferred$composable$lambda(content, state));
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
        // Inline function 'com.varabyte.kobweb.silk.defer.renderWithDeferred$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.ev(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.nu();
      CompositionLocalProvider$composable(tmp, tmp0, $composer_0, 48);
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
      tmp0_safe_receiver.s19(renderWithDeferred$composable$lambda_0(content, $changed));
    }
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.t1t(p0, p1, p2);
    };
  }
  function ComposableSingletons$DeferredKt$lambda_1$lambda_ynev9p(entry, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-300134205, $changed, -1, 'com.varabyte.kobweb.silk.defer.ComposableSingletons$DeferredKt.lambda-1.<anonymous> (Deferred.kt:83)');
    }
    var tmp0_safe_receiver = entry.d2v_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      renderWithDeferred$composable(tmp0_safe_receiver, $composer_0, 0);
      tmp = Unit_instance;
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$DeferredKt() {
    ComposableSingletons$DeferredKt_instance = this;
    var tmp = this;
    tmp.j2v_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-300134205, false, ComposableSingletons$DeferredKt$lambda_1$lambda_ynev9p));
  }
  var ComposableSingletons$DeferredKt_instance;
  function ComposableSingletons$DeferredKt_getInstance() {
    if (ComposableSingletons$DeferredKt_instance == null)
      new ComposableSingletons$DeferredKt();
    return ComposableSingletons$DeferredKt_instance;
  }
  function deferRender$composable(content, $composer, $changed) {
    _init_properties_Deferred_kt__im2yn();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(360010929);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.iv(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.ju()) {
      if (isTraceInProgress()) {
        traceEventStart(360010929, $dirty, -1, 'com.varabyte.kobweb.silk.defer.deferRender$composable (Deferred.kt:59)');
      }
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var this_0 = get_LocalDeferred();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.kv(this_0);
      sourceInformationMarkerEnd($composer_1);
      var state = tmp0;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.mu(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_2.fv(state);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_2.dv();
      var tmp;
      if (invalid ? true : it === Companion_getInstance().gu_1) {
        // Inline function 'com.varabyte.kobweb.silk.defer.deferRender$composable.<anonymous>' call
        var value = state.i2v();
        $composer_2.ev(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_2.nu();
      var deferredEntry = tmp0_0;
      deferredEntry.g2v(content);
      DisposableEffect$composable(deferredEntry, deferRender$composable$lambda(deferredEntry), $composer_0, 8);
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
      tmp0_safe_receiver.s19(deferRender$composable$lambda_0(content, $changed));
    }
  }
  function LocalDeferred$lambda() {
    _init_properties_Deferred_kt__im2yn();
    var message = 'Attempting to defer rendering without calling `renderWithDeferred`, a required pre-requisite.';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function renderWithDeferred$composable$lambda($content, $state) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.ju()) {
        if (isTraceInProgress()) {
          traceEventStart(564114664, $changed, -1, 'com.varabyte.kobweb.silk.defer.renderWithDeferred$composable.<anonymous> (Deferred.kt:78)');
        }
        $content($composer_0, 0);
        $state.h2v(ComposableSingletons$DeferredKt_getInstance().j2v_1, $composer_0, 70);
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
    return function (p0, p1) {
      return $boundThis.s14(p0, p1);
    };
  }
  function renderWithDeferred$composable$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      renderWithDeferred$composable($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function _no_name_provided__qut3iv($deferredEntry) {
    this.k2v_1 = $deferredEntry;
  }
  protoOf(_no_name_provided__qut3iv).nj = function () {
    // Inline function 'com.varabyte.kobweb.silk.defer.deferRender$composable.<anonymous>.<anonymous>' call
    this.k2v_1.f2v();
  };
  function deferRender$composable$lambda($deferredEntry) {
    return function ($this$DisposableEffect) {
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv($deferredEntry);
    };
  }
  function deferRender$composable$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      deferRender$composable($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_Deferred_kt_1ab2bj;
  function _init_properties_Deferred_kt__im2yn() {
    if (!properties_initialized_Deferred_kt_1ab2bj) {
      properties_initialized_Deferred_kt_1ab2bj = true;
      LocalDeferred = staticCompositionLocalOf(LocalDeferred$lambda);
    }
  }
  function set_additionalSilkInitialization(_set____db54di) {
    _init_properties_InitSilk_kt__vukue3();
    additionalSilkInitialization = _set____db54di;
  }
  function get_additionalSilkInitialization() {
    _init_properties_InitSilk_kt__vukue3();
    return additionalSilkInitialization;
  }
  var additionalSilkInitialization;
  function InitSilkContext(config, stylesheet, theme) {
    this.l2v_1 = config;
    this.m2v_1 = stylesheet;
    this.n2v_1 = theme;
    this.o2v_1 = 8;
  }
  function initSilk(additionalInit) {
    var tmp;
    if (additionalInit === VOID) {
      tmp = initSilk$lambda;
    } else {
      tmp = additionalInit;
    }
    additionalInit = tmp;
    _init_properties_InitSilk_kt__vukue3();
    var mutableTheme = new MutableSilkTheme();
    var config = new MutableSilkConfig();
    mutableTheme.z2v(get_SpanTextStyle());
    var ctx = new InitSilkContext(config, SilkStylesheetInstance_getInstance(), mutableTheme);
    additionalInit(ctx);
    get_additionalSilkInitialization()(ctx);
    var displayStyles = listOf([get_DisplayIfAtLeastZeroStyle(), get_DisplayIfAtLeastSmStyle(), get_DisplayIfAtLeastMdStyle(), get_DisplayIfAtLeastLgStyle(), get_DisplayIfAtLeastXlStyle(), get_DisplayUntilZeroStyle(), get_DisplayUntilSmStyle(), get_DisplayUntilMdStyle(), get_DisplayUntilLgStyle(), get_DisplayUntilXlStyle()]);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = displayStyles.l();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>' call
      mutableTheme.z2v(element);
    }
    var tmp_0 = window;
    invokeLater(tmp_0, initSilk$lambda_0(displayStyles));
    set_MutableSilkConfigInstance(config);
    set__SilkTheme(new ImmutableSilkTheme(mutableTheme));
    SilkStylesheetInstance_getInstance().d2w(SilkStyleSheet_getInstance());
    get_SilkTheme().e2w(SilkStyleSheet_getInstance());
  }
  function additionalSilkInitialization$lambda(it) {
    _init_properties_InitSilk_kt__vukue3();
    return Unit_instance;
  }
  function initSilk$lambda(it) {
    _init_properties_InitSilk_kt__vukue3();
    return Unit_instance;
  }
  function initSilk$lambda_0($displayStyles) {
    return function () {
      // Inline function 'kotlin.collections.map' call
      var this_0 = $displayStyles;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.l();
      while (tmp0_iterator.x()) {
        var item = tmp0_iterator.z();
        // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>' call
        var tmp$ret$0 = '.' + item.u2q_1;
        destination.u(tmp$ret$0);
      }
      var displayStyleSelectorNames = toSet(destination);
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterIsInstance' call
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var this_1 = asList(document.styleSheets);
      var destination_0 = ArrayList_init_$Create$_0();
      var tmp0_iterator_0 = this_1.l();
      while (tmp0_iterator_0.x()) {
        var element = tmp0_iterator_0.z();
        if (element instanceof CSSStyleSheet) {
          destination_0.u(element);
        }
      }
      // Inline function 'kotlin.collections.filterTo' call
      var destination_1 = ArrayList_init_$Create$_0();
      var tmp0_iterator_1 = destination_0.l();
      while (tmp0_iterator_1.x()) {
        var element_0 = tmp0_iterator_1.z();
        // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>' call
        if (element_0.href == null) {
          destination_1.u(element_0);
        }
      }
      var tmp0_iterator_2 = destination_1.l();
      while (tmp0_iterator_2.x()) {
        var element_1 = tmp0_iterator_2.z();
        // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.forEach' call
        // Inline function 'kotlin.collections.filter' call
        // Inline function 'kotlin.collections.filterIsInstance' call
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var this_2 = asList(element_1.cssRules);
        var destination_2 = ArrayList_init_$Create$_0();
        var tmp0_iterator_3 = this_2.l();
        while (tmp0_iterator_3.x()) {
          var element_2 = tmp0_iterator_3.z();
          if (element_2 instanceof CSSGroupingRule) {
            destination_2.u(element_2);
          }
        }
        // Inline function 'kotlin.collections.filterTo' call
        var destination_3 = ArrayList_init_$Create$_0();
        var tmp0_iterator_4 = destination_2.l();
        while (tmp0_iterator_4.x()) {
          var element_3 = tmp0_iterator_4.z();
          // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>' call
          if (element_3.type === CSSRule.MEDIA_RULE) {
            destination_3.u(element_3);
          }
        }
        var tmp0_iterator_5 = destination_3.l();
        while (tmp0_iterator_5.x()) {
          var element_4 = tmp0_iterator_5.z();
          // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.collections.forEach' call
          // Inline function 'kotlin.collections.filterIsInstance' call
          // Inline function 'kotlin.collections.filterIsInstanceTo' call
          var this_3 = asList(element_4.cssRules);
          var destination_4 = ArrayList_init_$Create$_0();
          var tmp0_iterator_6 = this_3.l();
          while (tmp0_iterator_6.x()) {
            var element_5 = tmp0_iterator_6.z();
            if (element_5 instanceof CSSStyleRule) {
              destination_4.u(element_5);
            }
          }
          var tmp0_iterator_7 = destination_4.l();
          while (tmp0_iterator_7.x()) {
            var element_6 = tmp0_iterator_7.z();
            // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var selectorText = element_6.selectorText;
            var innerStyle = element_6.style;
            if (displayStyleSelectorNames.o(selectorText)) {
              var displayValue = innerStyle.getPropertyValue('display');
              innerStyle.setProperty('display', displayValue, 'important');
            }
          }
        }
      }
      return Unit_instance;
    };
  }
  var properties_initialized_InitSilk_kt_8x89gn;
  function _init_properties_InitSilk_kt__vukue3() {
    if (!properties_initialized_InitSilk_kt_8x89gn) {
      properties_initialized_InitSilk_kt_8x89gn = true;
      additionalSilkInitialization = additionalSilkInitialization$lambda;
    }
  }
  function set_MutableSilkConfigInstance(_set____db54di) {
    _init_properties_SilkConfig_kt__z9kok7();
    MutableSilkConfigInstance = _set____db54di;
  }
  function get_MutableSilkConfigInstance() {
    _init_properties_SilkConfig_kt__z9kok7();
    return MutableSilkConfigInstance;
  }
  var MutableSilkConfigInstance;
  function MutableSilkConfig() {
    this.f2w_1 = ColorMode_LIGHT_getInstance();
    this.g2w_1 = 8;
  }
  protoOf(MutableSilkConfig).h2w = function () {
    return this.f2w_1;
  };
  function Companion_4() {
  }
  protoOf(Companion_4).h2i = function () {
    return get_MutableSilkConfigInstance();
  };
  var Companion_instance_8;
  function Companion_getInstance_5() {
    return Companion_instance_8;
  }
  var properties_initialized_SilkConfig_kt_bfwaef;
  function _init_properties_SilkConfig_kt__z9kok7() {
    if (!properties_initialized_SilkConfig_kt_bfwaef) {
      properties_initialized_SilkConfig_kt_bfwaef = true;
      MutableSilkConfigInstance = new MutableSilkConfig();
    }
  }
  function registerStyleBase(_this__u8e3s4, cssSelector, extraModifiers, init) {
    extraModifiers = extraModifiers === VOID ? Companion_instance : extraModifiers;
    registerStyleBase$composable(_this__u8e3s4, cssSelector, registerStyleBase$lambda(extraModifiers), init);
  }
  function registerStyleBase$composable(_this__u8e3s4, cssSelector, extraModifiers, init) {
    _this__u8e3s4.i2w(cssSelector, extraModifiers, registerStyleBase$composable$lambda(init));
  }
  function SilkStylesheetInstance() {
    SilkStylesheetInstance_instance = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.a2w_1 = ArrayList_init_$Create$_0();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.b2w_1 = LinkedHashMap_init_$Create$_0();
    this.c2w_1 = 0;
  }
  protoOf(SilkStylesheetInstance).s2p = function (name, build) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.b2w_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!!(isInterface(this_0, Map) ? this_0 : THROW_CCE()).q2(name)) {
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerKeyframes.<anonymous>' call
      var message = 'User is registering duplicate keyframe name: ' + name;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    this.b2w_1.j2(name, build);
  };
  protoOf(SilkStylesheetInstance).d2w = function (siteStyleSheet) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.a2w_1.l();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerStylesAndKeyframesInto.<anonymous>' call
      element.w2q(siteStyleSheet, element.u2q_1);
    }
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.b2w_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(this_0.j());
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_0 = this_0.i2().l();
    while (tmp0_iterator_0.x()) {
      var item = tmp0_iterator_0.z();
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerStylesAndKeyframesInto.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var name = item.l2();
      // Inline function 'kotlin.collections.component2' call
      var build = item.m2();
      // Inline function 'kotlin.apply' call
      var this_1 = new KeyframesBuilder(ColorMode_LIGHT_getInstance());
      // Inline function 'kotlin.contracts.contract' call
      build(this_1);
      var lightBuilder = this_1;
      // Inline function 'kotlin.apply' call
      var this_2 = new KeyframesBuilder(ColorMode_DARK_getInstance());
      // Inline function 'kotlin.contracts.contract' call
      build(this_2);
      var darkBuilder = this_2;
      if (lightBuilder.equals(darkBuilder)) {
        lightBuilder.e2p(siteStyleSheet, name);
      } else {
        lightBuilder.e2p(siteStyleSheet, suffixedWith(name, ColorMode_LIGHT_getInstance()));
        darkBuilder.e2p(siteStyleSheet, suffixedWith(name, ColorMode_DARK_getInstance()));
      }
      destination.u(Unit_instance);
    }
  };
  protoOf(SilkStylesheetInstance).i2w = function (cssSelector, extraModifiers, init) {
    this.a2w_1.u(new ComponentStyle(cssSelector, extraModifiers, null, init));
  };
  var SilkStylesheetInstance_instance;
  function SilkStylesheetInstance_getInstance() {
    if (SilkStylesheetInstance_instance == null)
      new SilkStylesheetInstance();
    return SilkStylesheetInstance_instance;
  }
  function registerStyleBase$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.mu(1076693533);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(1076693533, $changed, -1, 'com.varabyte.kobweb.silk.init.registerStyleBase.<anonymous> (SilkStylesheet.kt:130)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.nu();
      return tmp0;
    };
  }
  function registerStyleBase$composable$lambda$lambda($init) {
    return function () {
      return $init();
    };
  }
  function registerStyleBase$composable$lambda($init) {
    return function ($this$registerStyle) {
      $this$registerStyle.o2r(registerStyleBase$composable$lambda$lambda($init));
      return Unit_instance;
    };
  }
  function set__SilkTheme(_set____db54di) {
    _SilkTheme = _set____db54di;
  }
  var _SilkTheme;
  function MutableSilkTheme() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.p2v_1 = LinkedHashMap_init_$Create$_0();
    this.q2v_1 = this.p2v_1;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.r2v_1 = LinkedHashSet_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.s2v_1 = LinkedHashMap_init_$Create$_0();
    this.t2v_1 = this.s2v_1;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_2.u2v_1 = LinkedHashSet_init_$Create$();
    this.v2v_1 = new MutablePalettes();
    this.w2v_1 = new LegacyMutableSilkPalettes(this.v2v_1);
    this.x2v_1 = BreakpointSizes(get_cssRem(30), get_cssRem(48), get_cssRem(62), get_cssRem(80));
    this.y2v_1 = 8;
  }
  protoOf(MutableSilkTheme).z2v = function (style) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentStyle.<anonymous>' call
    var it = this.q2v_1.t2(style.u2q_1);
    // Inline function 'kotlin.contracts.contract' call
    if (!(it == null ? true : it === style)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentStyle.<anonymous>' call
      var message = trimIndent('\n                Attempting to register a second style with a name that\'s already used: "' + style.u2q_1 + '"\n\n                If this was an intentional override, you should use `replaceComponentStyle` instead.\n            ');
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.p2v_1;
    var key = style.u2q_1;
    this_0.j2(key, style);
  };
  protoOf(MutableSilkTheme).j2w = function (variants) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var destination = ArrayList_init_$Create$_0();
    var inductionVariable = 0;
    var last = variants.length;
    while (inductionVariable < last) {
      var element = variants[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (element instanceof SimpleComponentVariant) {
        destination.u(element);
      }
    }
    var tmp0_iterator = destination.l();
    while (tmp0_iterator.x()) {
      var element_0 = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentVariants.<anonymous>' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentVariants.<anonymous>.<anonymous>' call
      var it = this.t2v_1.t2(element_0.k2s_1.u2q_1);
      // Inline function 'kotlin.contracts.contract' call
      if (!(it == null ? true : it === element_0)) {
        // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerComponentVariants.<anonymous>.<anonymous>' call
        var message = trimIndent('\n                Attempting to register a second variant with a name that\'s already used: "' + element_0.k2s_1.u2q_1 + "\"\n\n                This isn't allowed. Please choose a different name. If there's a usecase for this I'm unaware of,\n                consider filing an issue at https://github.com/varabyte/kobweb/issues\n            ");
        throw IllegalStateException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.collections.set' call
      var this_0 = this.s2v_1;
      var key = element_0.k2s_1.u2q_1;
      this_0.j2(key, element_0);
    }
  };
  protoOf(MutableSilkTheme).k2w = function (style, extraModifiers, init) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.contains' call
    var this_0 = this.q2v_1;
    // Inline function 'kotlin.collections.containsKey' call
    var key = style.u2q_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(isInterface(this_0, Map) ? this_0 : THROW_CCE()).q2(key)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.replaceComponentStyle$composable.<anonymous>' call
      var message = 'Attempting to replace a style that was never registered: "' + style.u2q_1 + '"';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.r2v_1.u(style.u2q_1)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.replaceComponentStyle$composable.<anonymous>' call
      var message_0 = 'Attempting to override style "' + style.u2q_1 + '" twice';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.collections.set' call
    var this_1 = this.p2v_1;
    var key_0 = style.u2q_1;
    var value = new ComponentStyle(style.t2q_1, extraModifiers, style.r2q_1, init);
    this_1.j2(key_0, value);
  };
  function ImmutableSilkTheme(mutableSilkTheme) {
    this.y2r_1 = mutableSilkTheme;
    var tmp = this;
    var tmp_0 = this.y2r_1.w2v_1;
    tmp.z2r_1 = isInterface(tmp_0, SilkPalettes) ? tmp_0 : THROW_CCE();
    var tmp_1 = this;
    var tmp_2 = this.y2r_1.v2v_1;
    tmp_1.a2s_1 = isInterface(tmp_2, Palettes) ? tmp_2 : THROW_CCE();
    this.b2s_1 = this.y2r_1.x2v_1;
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_3.c2s_1 = LinkedHashMap_init_$Create$_0();
    this.d2s_1 = this.c2s_1;
    this.e2s_1 = 8;
  }
  protoOf(ImmutableSilkTheme).e2w = function (componentStyleSheet) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(_SilkTheme == null)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.y2r_1.q2v_1.h2().l();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStyles.<anonymous>' call
      var classNames = element.z2q(componentStyleSheet);
      // Inline function 'kotlin.collections.set' call
      var this_0 = this.c2s_1;
      var key = element.u2q_1;
      var value = element.a2r(classNames);
      this_0.j2(key, value);
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var this_1 = this.y2r_1.t2v_1.h2();
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator_0 = this_1.l();
    while (tmp0_iterator_0.x()) {
      var element_0 = tmp0_iterator_0.z();
      if (element_0 instanceof SimpleComponentVariant) {
        destination.u(element_0);
      }
    }
    var tmp0_iterator_1 = destination.l();
    while (tmp0_iterator_1.x()) {
      var element_1 = tmp0_iterator_1.z();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStyles.<anonymous>' call
      var classNames_0 = element_1.z2q(componentStyleSheet);
      // Inline function 'kotlin.collections.set' call
      var this_2 = this.c2s_1;
      var key_0 = element_1.k2s_1.u2q_1;
      var value_0 = element_1.a2r(classNames_0);
      this_2.j2(key_0, value_0);
    }
  };
  function get_SilkTheme() {
    var tmp0_elvis_lhs = _SilkTheme;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = "You can't access SilkTheme before first calling SilkApp";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function modifyComponentStyleBase(_this__u8e3s4, style, extraModifiers, init) {
    extraModifiers = extraModifiers === VOID ? Companion_instance : extraModifiers;
    modifyComponentStyleBase$composable(_this__u8e3s4, style, modifyComponentStyleBase$lambda(extraModifiers), init);
  }
  function modifyComponentStyleBase$composable(_this__u8e3s4, style, extraModifiers, init) {
    modifyComponentStyle$composable(_this__u8e3s4, style, extraModifiers, modifyComponentStyleBase$composable$lambda(init));
  }
  function modifyComponentStyle$composable(_this__u8e3s4, style, extraModifiers, init) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.contains' call
    var this_0 = _this__u8e3s4.q2v_1;
    // Inline function 'kotlin.collections.containsKey' call
    var key = style.u2q_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(isInterface(this_0, Map) ? this_0 : THROW_CCE()).q2(key)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.modifyComponentStyle$composable.<anonymous>' call
      var message = 'Attempting to modify a style that was never registered: "' + style.u2q_1 + '"';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var existingExtraModifiers = style.q2q_1;
    var existingInit = style.s2q_1;
    var tmp = modifyComponentStyle$composable$lambda(existingExtraModifiers, extraModifiers);
    _this__u8e3s4.k2w(style, tmp, modifyComponentStyle$composable$lambda_0(existingInit, init));
  }
  function modifyComponentStyleBase$lambda($extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.mu(-1714796074);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1714796074, $changed, -1, 'com.varabyte.kobweb.silk.theme.modifyComponentStyleBase.<anonymous> (SilkTheme.kt:266)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifiers;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.nu();
      return tmp0;
    };
  }
  function modifyComponentStyleBase$composable$lambda$lambda($this_modifyComponentStyle, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new ComponentBaseModifier($this_modifyComponentStyle.l2r_1);
      // Inline function 'kotlin.contracts.contract' call
      return $init(this_0);
    };
  }
  function modifyComponentStyleBase$composable$lambda($init) {
    return function ($this$modifyComponentStyle) {
      $this$modifyComponentStyle.o2r(modifyComponentStyleBase$composable$lambda$lambda($this$modifyComponentStyle, $init));
      return Unit_instance;
    };
  }
  function modifyComponentStyle$composable$lambda($existingExtraModifiers, $extraModifiers) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.mu(-1936736259);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1936736259, $changed, -1, 'com.varabyte.kobweb.silk.theme.modifyComponentStyle$composable.<anonymous> (SilkTheme.kt:254)');
        tmp = Unit_instance;
      }
      var tmp0 = $existingExtraModifiers($composer_0, 0).s2m($extraModifiers($composer_0, 0));
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.nu();
      return tmp0;
    };
  }
  function modifyComponentStyle$composable$lambda_0($existingInit, $init) {
    return function ($this$replaceComponentStyle) {
      $existingInit($this$replaceComponentStyle);
      $init($this$replaceComponentStyle);
      return Unit_instance;
    };
  }
  function toMinWidthQuery(_this__u8e3s4) {
    return new MediaFeature('min-width', toWidth(_this__u8e3s4));
  }
  function toWidth(_this__u8e3s4) {
    var tmp0_safe_receiver = toValue(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s2u_1;
    return tmp1_elvis_lhs == null ? get_px(0) : tmp1_elvis_lhs;
  }
  function toValue(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.s9_1) {
      case 0:
        tmp = null;
        break;
      case 1:
        tmp = get_SilkTheme().b2s_1.j2u_1;
        break;
      case 2:
        tmp = get_SilkTheme().b2s_1.k2u_1;
        break;
      case 3:
        tmp = get_SilkTheme().b2s_1.l2u_1;
        break;
      case 4:
        tmp = get_SilkTheme().b2s_1.m2u_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function get_breakpointFloor(_this__u8e3s4) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.last' call
      var this_0 = get_entries();
      var iterator = this_0.n(this_0.j());
      while (iterator.m1()) {
        var element = iterator.o1();
        // Inline function 'com.varabyte.kobweb.silk.theme.breakpoint.<get-breakpointFloor>.<anonymous>' call
        if (toPx(element).value <= _this__u8e3s4.innerWidth) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      throw NoSuchElementException_init_$Create$('List contains no element matching the predicate.');
    }
    return tmp$ret$1;
  }
  function toPx(_this__u8e3s4) {
    var tmp0_safe_receiver = toValue(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r2u();
    return tmp1_elvis_lhs == null ? get_px(0) : tmp1_elvis_lhs;
  }
  function rememberBreakpoint$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.mu(420068367);
    if (isTraceInProgress()) {
      traceEventStart(420068367, $changed, -1, 'com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint$composable (BreakpointUtils.kt:38)');
    }
    var tmp = get_breakpointFloor(window);
    $composer_0.mu(-1891166357);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.dv();
    var tmp_0;
    if (false ? true : it === Companion_getInstance().gu_1) {
      // Inline function 'com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint$composable.<anonymous>' call
      var value = rememberBreakpoint$composable$slambda_0(null);
      $composer_0.ev(value);
      tmp_0 = value;
    } else {
      tmp_0 = it;
    }
    var tmp_1 = tmp_0;
    var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    $composer_0.nu();
    var tmp0 = produceState$composable(tmp, tmpCache, $composer_0, 0).m2();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.nu();
    return tmp0;
  }
  function rememberBreakpoint$composable$slambda$lambda($this_produceState) {
    return function (it) {
      $this_produceState.up(get_breakpointFloor(window));
      return Unit_instance;
    };
  }
  function rememberBreakpoint$composable$slambda$lambda_0($resizeListener) {
    return function () {
      window.removeEventListener('resize', $resizeListener);
      return Unit_instance;
    };
  }
  function rememberBreakpoint$composable$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(rememberBreakpoint$composable$slambda).v2w = function ($this$produceState, $completion) {
    var tmp = this.w2w($this$produceState, $completion);
    tmp.sb_1 = Unit_instance;
    tmp.tb_1 = null;
    return tmp.cc();
  };
  protoOf(rememberBreakpoint$composable$slambda).oc = function (p1, $completion) {
    return this.v2w((!(p1 == null) ? isInterface(p1, ProduceStateScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(rememberBreakpoint$composable$slambda).cc = function () {
    var suspendResult = this.sb_1;
    $sm: do
      try {
        var tmp = this.qb_1;
        switch (tmp) {
          case 0:
            this.rb_1 = 2;
            var tmp_0 = this;
            tmp_0.u2w_1 = EventListener(rememberBreakpoint$composable$slambda$lambda(this.t2w_1));
            window.addEventListener('resize', this.u2w_1);
            this.qb_1 = 1;
            suspendResult = this.t2w_1.l1a(rememberBreakpoint$composable$slambda$lambda_0(this.u2w_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            throwKotlinNothingValueException();
            break;
          case 2:
            throw this.tb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.rb_1 === 2) {
          throw e;
        } else {
          this.qb_1 = this.rb_1;
          this.tb_1 = e;
        }
      }
     while (true);
  };
  protoOf(rememberBreakpoint$composable$slambda).w2w = function ($this$produceState, completion) {
    var i = new rememberBreakpoint$composable$slambda(completion);
    i.t2w_1 = $this$produceState;
    return i;
  };
  function rememberBreakpoint$composable$slambda_0(resultContinuation) {
    var i = new rememberBreakpoint$composable$slambda(resultContinuation);
    var l = function ($this$produceState, $completion) {
      return i.v2w($this$produceState, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function get_rootColorModeState() {
    _init_properties_ColorMode_kt__lz79sc();
    // Inline function 'kotlin.getValue' call
    var this_0 = rootColorModeState$delegate;
    rootColorModeState$factory();
    return this_0.m2();
  }
  var rootColorModeState$delegate;
  function get_LocalColorMode() {
    _init_properties_ColorMode_kt__lz79sc();
    return LocalColorMode;
  }
  var LocalColorMode;
  function suffixedWith(_this__u8e3s4, colorMode) {
    _init_properties_ColorMode_kt__lz79sc();
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4 + '_' + colorMode.r9_1.toLowerCase();
  }
  var ColorMode_LIGHT_instance;
  var ColorMode_DARK_instance;
  function Companion_5() {
  }
  protoOf(Companion_5).x2w = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.mu(-1871082592);
    if (isTraceInProgress()) {
      traceEventStart(-1871082592, $changed, -1, 'com.varabyte.kobweb.silk.theme.colors.ColorMode.Companion.$get-currentState$$composable (ColorMode.kt:23)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var this_0 = get_LocalColorMode();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.kv(this_0);
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.nu();
    return tmp0;
  };
  protoOf(Companion_5).t2p = function ($composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1058079129, $changed, -1, 'com.varabyte.kobweb.silk.theme.colors.ColorMode.Companion.$get-current$$composable (ColorMode.kt:33)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var this_0 = get_LocalColorMode();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.kv(this_0);
    sourceInformationMarkerEnd($composer_1);
    var tmp0_0 = tmp0.m2();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return tmp0_0;
  };
  var Companion_instance_9;
  function Companion_getInstance_6() {
    return Companion_instance_9;
  }
  function valueOf(value) {
    switch (value) {
      case 'LIGHT':
        return ColorMode_LIGHT_getInstance();
      case 'DARK':
        return ColorMode_DARK_getInstance();
      default:
        ColorMode_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var ColorMode_entriesInitialized;
  function ColorMode_initEntries() {
    if (ColorMode_entriesInitialized)
      return Unit_instance;
    ColorMode_entriesInitialized = true;
    ColorMode_LIGHT_instance = new ColorMode('LIGHT', 0);
    ColorMode_DARK_instance = new ColorMode('DARK', 1);
  }
  function ColorMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(ColorMode).y2w = function () {
    return this.equals(ColorMode_LIGHT_getInstance());
  };
  protoOf(ColorMode).z2w = function () {
    return this.equals(ColorMode_DARK_getInstance());
  };
  protoOf(ColorMode).x2r = function () {
    var tmp;
    switch (this.s9_1) {
      case 0:
        tmp = ColorMode_DARK_getInstance();
        break;
      case 1:
        tmp = ColorMode_LIGHT_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(ColorMode).isLight_Deprecated = function () {
    return this.equals(ColorMode_LIGHT_getInstance());
  };
  protoOf(ColorMode).isDark_Deprecated = function () {
    return this.equals(ColorMode_DARK_getInstance());
  };
  protoOf(ColorMode).opposite_Deprecated = function () {
    var tmp;
    switch (this.s9_1) {
      case 0:
        tmp = ColorMode_DARK_getInstance();
        break;
      case 1:
        tmp = ColorMode_LIGHT_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(ColorMode).a2x = function () {
    return get_LocalColorMode().o19(mutableStateOf(this));
  };
  function rootColorModeState$delegate$lambda() {
    _init_properties_ColorMode_kt__lz79sc();
    return mutableStateOf(Companion_instance_8.h2i().h2w());
  }
  function LocalColorMode$lambda() {
    _init_properties_ColorMode_kt__lz79sc();
    return get_rootColorModeState();
  }
  function ColorMode_LIGHT_getInstance() {
    ColorMode_initEntries();
    return ColorMode_LIGHT_instance;
  }
  function ColorMode_DARK_getInstance() {
    ColorMode_initEntries();
    return ColorMode_DARK_instance;
  }
  function rootColorModeState$factory() {
    return getPropertyCallableRef('rootColorModeState', 0, KProperty0, function () {
      return get_rootColorModeState();
    }, null);
  }
  var properties_initialized_ColorMode_kt_kbhp7u;
  function _init_properties_ColorMode_kt__lz79sc() {
    if (!properties_initialized_ColorMode_kt_kbhp7u) {
      properties_initialized_ColorMode_kt_kbhp7u = true;
      rootColorModeState$delegate = lazy(rootColorModeState$delegate$lambda);
      LocalColorMode = compositionLocalOf(VOID, LocalColorMode$lambda);
    }
  }
  function ColorSchemes$Monochrome$1() {
    this.b2x_1 = Companion_instance_2.r2n(15921906);
    this.c2x_1 = Companion_instance_2.r2n(15132390);
    this.d2x_1 = Companion_instance_2.r2n(13421772);
    this.e2x_1 = Companion_instance_2.r2n(11776947);
    this.f2x_1 = Companion_instance_2.r2n(10066329);
    this.g2x_1 = Companion_instance_2.r2n(8421504);
    this.h2x_1 = Companion_instance_2.r2n(6710886);
    this.i2x_1 = Companion_instance_2.r2n(5066061);
    this.j2x_1 = Companion_instance_2.r2n(3355443);
    this.k2x_1 = Companion_instance_2.r2n(1710618);
  }
  protoOf(ColorSchemes$Monochrome$1).l2x = function () {
    return this.d2x_1;
  };
  protoOf(ColorSchemes$Monochrome$1).m2x = function () {
    return this.e2x_1;
  };
  protoOf(ColorSchemes$Monochrome$1).n2x = function () {
    return this.f2x_1;
  };
  protoOf(ColorSchemes$Monochrome$1).o2x = function () {
    return this.g2x_1;
  };
  protoOf(ColorSchemes$Monochrome$1).p2x = function () {
    return this.h2x_1;
  };
  protoOf(ColorSchemes$Monochrome$1).q2x = function () {
    return this.i2x_1;
  };
  protoOf(ColorSchemes$Monochrome$1).r2x = function () {
    return this.k2x_1;
  };
  function ColorSchemes$Red$1() {
    this.s2x_1 = Companion_instance_2.r2n(16772078);
    this.t2x_1 = Companion_instance_2.r2n(16764370);
    this.u2x_1 = Companion_instance_2.r2n(15702682);
    this.v2x_1 = Companion_instance_2.r2n(15037299);
    this.w2x_1 = Companion_instance_2.r2n(15684432);
    this.x2x_1 = Companion_instance_2.r2n(16007990);
    this.y2x_1 = Companion_instance_2.r2n(15022389);
    this.z2x_1 = Companion_instance_2.r2n(13840175);
    this.a2y_1 = Companion_instance_2.r2n(12986408);
    this.b2y_1 = Companion_instance_2.r2n(12000284);
  }
  protoOf(ColorSchemes$Red$1).l2x = function () {
    return this.u2x_1;
  };
  protoOf(ColorSchemes$Red$1).m2x = function () {
    return this.v2x_1;
  };
  protoOf(ColorSchemes$Red$1).n2x = function () {
    return this.w2x_1;
  };
  protoOf(ColorSchemes$Red$1).o2x = function () {
    return this.x2x_1;
  };
  protoOf(ColorSchemes$Red$1).p2x = function () {
    return this.y2x_1;
  };
  protoOf(ColorSchemes$Red$1).q2x = function () {
    return this.z2x_1;
  };
  protoOf(ColorSchemes$Red$1).r2x = function () {
    return this.b2y_1;
  };
  function ColorSchemes$Pink$1() {
    this.c2y_1 = Companion_instance_2.r2n(16573676);
    this.d2y_1 = Companion_instance_2.r2n(16301008);
    this.e2y_1 = Companion_instance_2.r2n(16027569);
    this.f2y_1 = Companion_instance_2.r2n(15753874);
    this.g2y_1 = Companion_instance_2.r2n(15483002);
    this.h2y_1 = Companion_instance_2.r2n(15277667);
    this.i2y_1 = Companion_instance_2.r2n(14162784);
    this.j2y_1 = Companion_instance_2.r2n(12720219);
    this.k2y_1 = Companion_instance_2.r2n(11342935);
    this.l2y_1 = Companion_instance_2.r2n(8916559);
  }
  protoOf(ColorSchemes$Pink$1).l2x = function () {
    return this.e2y_1;
  };
  protoOf(ColorSchemes$Pink$1).m2x = function () {
    return this.f2y_1;
  };
  protoOf(ColorSchemes$Pink$1).n2x = function () {
    return this.g2y_1;
  };
  protoOf(ColorSchemes$Pink$1).o2x = function () {
    return this.h2y_1;
  };
  protoOf(ColorSchemes$Pink$1).p2x = function () {
    return this.i2y_1;
  };
  protoOf(ColorSchemes$Pink$1).q2x = function () {
    return this.j2y_1;
  };
  protoOf(ColorSchemes$Pink$1).r2x = function () {
    return this.l2y_1;
  };
  function ColorSchemes$Purple$1() {
    this.m2y_1 = Companion_instance_2.r2n(15984117);
    this.n2y_1 = Companion_instance_2.r2n(14794471);
    this.o2y_1 = Companion_instance_2.r2n(13538264);
    this.p2y_1 = Companion_instance_2.r2n(12216520);
    this.q2y_1 = Companion_instance_2.r2n(11225020);
    this.r2y_1 = Companion_instance_2.r2n(10233776);
    this.s2y_1 = Companion_instance_2.r2n(9315498);
    this.t2y_1 = Companion_instance_2.r2n(8069026);
    this.u2y_1 = Companion_instance_2.r2n(6953882);
    this.v2y_1 = Companion_instance_2.r2n(4854924);
  }
  protoOf(ColorSchemes$Purple$1).l2x = function () {
    return this.o2y_1;
  };
  protoOf(ColorSchemes$Purple$1).m2x = function () {
    return this.p2y_1;
  };
  protoOf(ColorSchemes$Purple$1).n2x = function () {
    return this.q2y_1;
  };
  protoOf(ColorSchemes$Purple$1).o2x = function () {
    return this.r2y_1;
  };
  protoOf(ColorSchemes$Purple$1).p2x = function () {
    return this.s2y_1;
  };
  protoOf(ColorSchemes$Purple$1).q2x = function () {
    return this.t2y_1;
  };
  protoOf(ColorSchemes$Purple$1).r2x = function () {
    return this.v2y_1;
  };
  function ColorSchemes$DeepPurple$1() {
    this.w2y_1 = Companion_instance_2.r2n(15591414);
    this.x2y_1 = Companion_instance_2.r2n(13747433);
    this.y2y_1 = Companion_instance_2.r2n(11771355);
    this.z2y_1 = Companion_instance_2.r2n(9795021);
    this.a2z_1 = Companion_instance_2.r2n(8280002);
    this.b2z_1 = Companion_instance_2.r2n(6765239);
    this.c2z_1 = Companion_instance_2.r2n(6174129);
    this.d2z_1 = Companion_instance_2.r2n(5320104);
    this.e2z_1 = Companion_instance_2.r2n(4532128);
    this.f2z_1 = Companion_instance_2.r2n(3218322);
  }
  protoOf(ColorSchemes$DeepPurple$1).l2x = function () {
    return this.y2y_1;
  };
  protoOf(ColorSchemes$DeepPurple$1).m2x = function () {
    return this.z2y_1;
  };
  protoOf(ColorSchemes$DeepPurple$1).n2x = function () {
    return this.a2z_1;
  };
  protoOf(ColorSchemes$DeepPurple$1).o2x = function () {
    return this.b2z_1;
  };
  protoOf(ColorSchemes$DeepPurple$1).p2x = function () {
    return this.c2z_1;
  };
  protoOf(ColorSchemes$DeepPurple$1).q2x = function () {
    return this.d2z_1;
  };
  protoOf(ColorSchemes$DeepPurple$1).r2x = function () {
    return this.f2z_1;
  };
  function ColorSchemes$Indigo$1() {
    this.g2z_1 = Companion_instance_2.r2n(15264502);
    this.h2z_1 = Companion_instance_2.r2n(12962537);
    this.i2z_1 = Companion_instance_2.r2n(10463450);
    this.j2z_1 = Companion_instance_2.r2n(7964363);
    this.k2z_1 = Companion_instance_2.r2n(6056896);
    this.l2z_1 = Companion_instance_2.r2n(4149685);
    this.m2z_1 = Companion_instance_2.r2n(3754411);
    this.n2z_1 = Companion_instance_2.r2n(3162015);
    this.o2z_1 = Companion_instance_2.r2n(2635155);
    this.p2z_1 = Companion_instance_2.r2n(1713022);
  }
  protoOf(ColorSchemes$Indigo$1).l2x = function () {
    return this.i2z_1;
  };
  protoOf(ColorSchemes$Indigo$1).m2x = function () {
    return this.j2z_1;
  };
  protoOf(ColorSchemes$Indigo$1).n2x = function () {
    return this.k2z_1;
  };
  protoOf(ColorSchemes$Indigo$1).o2x = function () {
    return this.l2z_1;
  };
  protoOf(ColorSchemes$Indigo$1).p2x = function () {
    return this.m2z_1;
  };
  protoOf(ColorSchemes$Indigo$1).q2x = function () {
    return this.n2z_1;
  };
  protoOf(ColorSchemes$Indigo$1).r2x = function () {
    return this.p2z_1;
  };
  function ColorSchemes$Blue$1() {
    this.q2z_1 = Companion_instance_2.r2n(14938877);
    this.r2z_1 = Companion_instance_2.r2n(12312315);
    this.s2z_1 = Companion_instance_2.r2n(9489145);
    this.t2z_1 = Companion_instance_2.r2n(6600182);
    this.u2z_1 = Companion_instance_2.r2n(4367861);
    this.v2z_1 = Companion_instance_2.r2n(2201331);
    this.w2z_1 = Companion_instance_2.r2n(2001125);
    this.x2z_1 = Companion_instance_2.r2n(1668818);
    this.y2z_1 = Companion_instance_2.r2n(1402304);
    this.z2z_1 = Companion_instance_2.r2n(870305);
  }
  protoOf(ColorSchemes$Blue$1).l2x = function () {
    return this.s2z_1;
  };
  protoOf(ColorSchemes$Blue$1).m2x = function () {
    return this.t2z_1;
  };
  protoOf(ColorSchemes$Blue$1).n2x = function () {
    return this.u2z_1;
  };
  protoOf(ColorSchemes$Blue$1).o2x = function () {
    return this.v2z_1;
  };
  protoOf(ColorSchemes$Blue$1).p2x = function () {
    return this.w2z_1;
  };
  protoOf(ColorSchemes$Blue$1).q2x = function () {
    return this.x2z_1;
  };
  protoOf(ColorSchemes$Blue$1).r2x = function () {
    return this.z2z_1;
  };
  function ColorSchemes$LightBlue$1() {
    this.a30_1 = Companion_instance_2.r2n(14808574);
    this.b30_1 = Companion_instance_2.r2n(11789820);
    this.c30_1 = Companion_instance_2.r2n(8508666);
    this.d30_1 = Companion_instance_2.r2n(5227511);
    this.e30_1 = Companion_instance_2.r2n(2733814);
    this.f30_1 = Companion_instance_2.r2n(240116);
    this.g30_1 = Companion_instance_2.r2n(236517);
    this.h30_1 = Companion_instance_2.r2n(166097);
    this.i30_1 = Companion_instance_2.r2n(161725);
    this.j30_1 = Companion_instance_2.r2n(87963);
  }
  protoOf(ColorSchemes$LightBlue$1).l2x = function () {
    return this.c30_1;
  };
  protoOf(ColorSchemes$LightBlue$1).m2x = function () {
    return this.d30_1;
  };
  protoOf(ColorSchemes$LightBlue$1).n2x = function () {
    return this.e30_1;
  };
  protoOf(ColorSchemes$LightBlue$1).o2x = function () {
    return this.f30_1;
  };
  protoOf(ColorSchemes$LightBlue$1).p2x = function () {
    return this.g30_1;
  };
  protoOf(ColorSchemes$LightBlue$1).q2x = function () {
    return this.h30_1;
  };
  protoOf(ColorSchemes$LightBlue$1).r2x = function () {
    return this.j30_1;
  };
  function ColorSchemes$Cyan$1() {
    this.k30_1 = Companion_instance_2.r2n(14743546);
    this.l30_1 = Companion_instance_2.r2n(11725810);
    this.m30_1 = Companion_instance_2.r2n(8445674);
    this.n30_1 = Companion_instance_2.r2n(5099745);
    this.o30_1 = Companion_instance_2.r2n(2541274);
    this.p30_1 = Companion_instance_2.r2n(48340);
    this.q30_1 = Companion_instance_2.r2n(44225);
    this.r30_1 = Companion_instance_2.r2n(38823);
    this.s30_1 = Companion_instance_2.r2n(33679);
    this.t30_1 = Companion_instance_2.r2n(24676);
  }
  protoOf(ColorSchemes$Cyan$1).l2x = function () {
    return this.m30_1;
  };
  protoOf(ColorSchemes$Cyan$1).m2x = function () {
    return this.n30_1;
  };
  protoOf(ColorSchemes$Cyan$1).n2x = function () {
    return this.o30_1;
  };
  protoOf(ColorSchemes$Cyan$1).o2x = function () {
    return this.p30_1;
  };
  protoOf(ColorSchemes$Cyan$1).p2x = function () {
    return this.q30_1;
  };
  protoOf(ColorSchemes$Cyan$1).q2x = function () {
    return this.r30_1;
  };
  protoOf(ColorSchemes$Cyan$1).r2x = function () {
    return this.t30_1;
  };
  function ColorSchemes$Teal$1() {
    this.u30_1 = Companion_instance_2.r2n(14742257);
    this.v30_1 = Companion_instance_2.r2n(11722715);
    this.w30_1 = Companion_instance_2.r2n(8440772);
    this.x30_1 = Companion_instance_2.r2n(5093036);
    this.y30_1 = Companion_instance_2.r2n(2533018);
    this.z30_1 = Companion_instance_2.r2n(38536);
    this.a31_1 = Companion_instance_2.r2n(35195);
    this.b31_1 = Companion_instance_2.r2n(31083);
    this.c31_1 = Companion_instance_2.r2n(26972);
    this.d31_1 = Companion_instance_2.r2n(19776);
  }
  protoOf(ColorSchemes$Teal$1).l2x = function () {
    return this.w30_1;
  };
  protoOf(ColorSchemes$Teal$1).m2x = function () {
    return this.x30_1;
  };
  protoOf(ColorSchemes$Teal$1).n2x = function () {
    return this.y30_1;
  };
  protoOf(ColorSchemes$Teal$1).o2x = function () {
    return this.z30_1;
  };
  protoOf(ColorSchemes$Teal$1).p2x = function () {
    return this.a31_1;
  };
  protoOf(ColorSchemes$Teal$1).q2x = function () {
    return this.b31_1;
  };
  protoOf(ColorSchemes$Teal$1).r2x = function () {
    return this.d31_1;
  };
  function ColorSchemes$Green$1() {
    this.e31_1 = Companion_instance_2.r2n(15267305);
    this.f31_1 = Companion_instance_2.r2n(13166281);
    this.g31_1 = Companion_instance_2.r2n(10868391);
    this.h31_1 = Companion_instance_2.r2n(8505220);
    this.i31_1 = Companion_instance_2.r2n(6732650);
    this.j31_1 = Companion_instance_2.r2n(5025616);
    this.k31_1 = Companion_instance_2.r2n(4431943);
    this.l31_1 = Companion_instance_2.r2n(3706428);
    this.m31_1 = Companion_instance_2.r2n(3046706);
    this.n31_1 = Companion_instance_2.r2n(1793568);
  }
  protoOf(ColorSchemes$Green$1).l2x = function () {
    return this.g31_1;
  };
  protoOf(ColorSchemes$Green$1).m2x = function () {
    return this.h31_1;
  };
  protoOf(ColorSchemes$Green$1).n2x = function () {
    return this.i31_1;
  };
  protoOf(ColorSchemes$Green$1).o2x = function () {
    return this.j31_1;
  };
  protoOf(ColorSchemes$Green$1).p2x = function () {
    return this.k31_1;
  };
  protoOf(ColorSchemes$Green$1).q2x = function () {
    return this.l31_1;
  };
  protoOf(ColorSchemes$Green$1).r2x = function () {
    return this.n31_1;
  };
  function ColorSchemes$LightGreen$1() {
    this.o31_1 = Companion_instance_2.r2n(15857897);
    this.p31_1 = Companion_instance_2.r2n(14478792);
    this.q31_1 = Companion_instance_2.r2n(12968357);
    this.r31_1 = Companion_instance_2.r2n(11457921);
    this.s31_1 = Companion_instance_2.r2n(10275941);
    this.t31_1 = Companion_instance_2.r2n(9159498);
    this.u31_1 = Companion_instance_2.r2n(8172354);
    this.v31_1 = Companion_instance_2.r2n(6856504);
    this.w31_1 = Companion_instance_2.r2n(5606191);
    this.x31_1 = Companion_instance_2.r2n(3369246);
  }
  protoOf(ColorSchemes$LightGreen$1).l2x = function () {
    return this.q31_1;
  };
  protoOf(ColorSchemes$LightGreen$1).m2x = function () {
    return this.r31_1;
  };
  protoOf(ColorSchemes$LightGreen$1).n2x = function () {
    return this.s31_1;
  };
  protoOf(ColorSchemes$LightGreen$1).o2x = function () {
    return this.t31_1;
  };
  protoOf(ColorSchemes$LightGreen$1).p2x = function () {
    return this.u31_1;
  };
  protoOf(ColorSchemes$LightGreen$1).q2x = function () {
    return this.v31_1;
  };
  protoOf(ColorSchemes$LightGreen$1).r2x = function () {
    return this.x31_1;
  };
  function ColorSchemes$Lime$1() {
    this.y31_1 = Companion_instance_2.r2n(16382951);
    this.z31_1 = Companion_instance_2.r2n(15791299);
    this.a32_1 = Companion_instance_2.r2n(15134364);
    this.b32_1 = Companion_instance_2.r2n(14477173);
    this.c32_1 = Companion_instance_2.r2n(13951319);
    this.d32_1 = Companion_instance_2.r2n(13491257);
    this.e32_1 = Companion_instance_2.r2n(12634675);
    this.f32_1 = Companion_instance_2.r2n(11514923);
    this.g32_1 = Companion_instance_2.r2n(10394916);
    this.h32_1 = Companion_instance_2.r2n(8550167);
  }
  protoOf(ColorSchemes$Lime$1).l2x = function () {
    return this.a32_1;
  };
  protoOf(ColorSchemes$Lime$1).m2x = function () {
    return this.b32_1;
  };
  protoOf(ColorSchemes$Lime$1).n2x = function () {
    return this.c32_1;
  };
  protoOf(ColorSchemes$Lime$1).o2x = function () {
    return this.d32_1;
  };
  protoOf(ColorSchemes$Lime$1).p2x = function () {
    return this.e32_1;
  };
  protoOf(ColorSchemes$Lime$1).q2x = function () {
    return this.f32_1;
  };
  protoOf(ColorSchemes$Lime$1).r2x = function () {
    return this.h32_1;
  };
  function ColorSchemes$Yellow$1() {
    this.i32_1 = Companion_instance_2.r2n(16776679);
    this.j32_1 = Companion_instance_2.r2n(16775620);
    this.k32_1 = Companion_instance_2.r2n(16774557);
    this.l32_1 = Companion_instance_2.r2n(16773494);
    this.m32_1 = Companion_instance_2.r2n(16772696);
    this.n32_1 = Companion_instance_2.r2n(16771899);
    this.o32_1 = Companion_instance_2.r2n(16635957);
    this.p32_1 = Companion_instance_2.r2n(16498733);
    this.q32_1 = Companion_instance_2.r2n(16361509);
    this.r32_1 = Companion_instance_2.r2n(16088855);
  }
  protoOf(ColorSchemes$Yellow$1).l2x = function () {
    return this.k32_1;
  };
  protoOf(ColorSchemes$Yellow$1).m2x = function () {
    return this.l32_1;
  };
  protoOf(ColorSchemes$Yellow$1).n2x = function () {
    return this.m32_1;
  };
  protoOf(ColorSchemes$Yellow$1).o2x = function () {
    return this.n32_1;
  };
  protoOf(ColorSchemes$Yellow$1).p2x = function () {
    return this.o32_1;
  };
  protoOf(ColorSchemes$Yellow$1).q2x = function () {
    return this.p32_1;
  };
  protoOf(ColorSchemes$Yellow$1).r2x = function () {
    return this.r32_1;
  };
  function ColorSchemes$Amber$1() {
    this.s32_1 = Companion_instance_2.r2n(16775393);
    this.t32_1 = Companion_instance_2.r2n(16772275);
    this.u32_1 = Companion_instance_2.r2n(16769154);
    this.v32_1 = Companion_instance_2.r2n(16766287);
    this.w32_1 = Companion_instance_2.r2n(16763432);
    this.x32_1 = Companion_instance_2.r2n(16761095);
    this.y32_1 = Companion_instance_2.r2n(16757504);
    this.z32_1 = Companion_instance_2.r2n(16752640);
    this.a33_1 = Companion_instance_2.r2n(16748288);
    this.b33_1 = Companion_instance_2.r2n(16740096);
  }
  protoOf(ColorSchemes$Amber$1).l2x = function () {
    return this.u32_1;
  };
  protoOf(ColorSchemes$Amber$1).m2x = function () {
    return this.v32_1;
  };
  protoOf(ColorSchemes$Amber$1).n2x = function () {
    return this.w32_1;
  };
  protoOf(ColorSchemes$Amber$1).o2x = function () {
    return this.x32_1;
  };
  protoOf(ColorSchemes$Amber$1).p2x = function () {
    return this.y32_1;
  };
  protoOf(ColorSchemes$Amber$1).q2x = function () {
    return this.z32_1;
  };
  protoOf(ColorSchemes$Amber$1).r2x = function () {
    return this.b33_1;
  };
  function ColorSchemes$Orange$1() {
    this.c33_1 = Companion_instance_2.r2n(16774112);
    this.d33_1 = Companion_instance_2.r2n(16769202);
    this.e33_1 = Companion_instance_2.r2n(16764032);
    this.f33_1 = Companion_instance_2.r2n(16758605);
    this.g33_1 = Companion_instance_2.r2n(16754470);
    this.h33_1 = Companion_instance_2.r2n(16750592);
    this.i33_1 = Companion_instance_2.r2n(16485376);
    this.j33_1 = Companion_instance_2.r2n(16088064);
    this.k33_1 = Companion_instance_2.r2n(15690752);
    this.l33_1 = Companion_instance_2.r2n(15094016);
  }
  protoOf(ColorSchemes$Orange$1).l2x = function () {
    return this.e33_1;
  };
  protoOf(ColorSchemes$Orange$1).m2x = function () {
    return this.f33_1;
  };
  protoOf(ColorSchemes$Orange$1).n2x = function () {
    return this.g33_1;
  };
  protoOf(ColorSchemes$Orange$1).o2x = function () {
    return this.h33_1;
  };
  protoOf(ColorSchemes$Orange$1).p2x = function () {
    return this.i33_1;
  };
  protoOf(ColorSchemes$Orange$1).q2x = function () {
    return this.j33_1;
  };
  protoOf(ColorSchemes$Orange$1).r2x = function () {
    return this.l33_1;
  };
  function ColorSchemes$DeepOrange$1() {
    this.m33_1 = Companion_instance_2.r2n(16509415);
    this.n33_1 = Companion_instance_2.r2n(16764092);
    this.o33_1 = Companion_instance_2.r2n(16755601);
    this.p33_1 = Companion_instance_2.r2n(16747109);
    this.q33_1 = Companion_instance_2.r2n(16740419);
    this.r33_1 = Companion_instance_2.r2n(16733986);
    this.s33_1 = Companion_instance_2.r2n(16011550);
    this.t33_1 = Companion_instance_2.r2n(15092249);
    this.u33_1 = Companion_instance_2.r2n(14172949);
    this.v33_1 = Companion_instance_2.r2n(12531212);
  }
  protoOf(ColorSchemes$DeepOrange$1).l2x = function () {
    return this.o33_1;
  };
  protoOf(ColorSchemes$DeepOrange$1).m2x = function () {
    return this.p33_1;
  };
  protoOf(ColorSchemes$DeepOrange$1).n2x = function () {
    return this.q33_1;
  };
  protoOf(ColorSchemes$DeepOrange$1).o2x = function () {
    return this.r33_1;
  };
  protoOf(ColorSchemes$DeepOrange$1).p2x = function () {
    return this.s33_1;
  };
  protoOf(ColorSchemes$DeepOrange$1).q2x = function () {
    return this.t33_1;
  };
  protoOf(ColorSchemes$DeepOrange$1).r2x = function () {
    return this.v33_1;
  };
  function ColorSchemes$Brown$1() {
    this.w33_1 = Companion_instance_2.r2n(15723497);
    this.x33_1 = Companion_instance_2.r2n(14142664);
    this.y33_1 = Companion_instance_2.r2n(12364452);
    this.z33_1 = Companion_instance_2.r2n(10586239);
    this.a34_1 = Companion_instance_2.r2n(9268835);
    this.b34_1 = Companion_instance_2.r2n(7951688);
    this.c34_1 = Companion_instance_2.r2n(7162945);
    this.d34_1 = Companion_instance_2.r2n(6111287);
    this.e34_1 = Companion_instance_2.r2n(5125166);
    this.f34_1 = Companion_instance_2.r2n(4073251);
  }
  protoOf(ColorSchemes$Brown$1).l2x = function () {
    return this.y33_1;
  };
  protoOf(ColorSchemes$Brown$1).m2x = function () {
    return this.z33_1;
  };
  protoOf(ColorSchemes$Brown$1).n2x = function () {
    return this.a34_1;
  };
  protoOf(ColorSchemes$Brown$1).o2x = function () {
    return this.b34_1;
  };
  protoOf(ColorSchemes$Brown$1).p2x = function () {
    return this.c34_1;
  };
  protoOf(ColorSchemes$Brown$1).q2x = function () {
    return this.d34_1;
  };
  protoOf(ColorSchemes$Brown$1).r2x = function () {
    return this.f34_1;
  };
  function ColorSchemes$Gray$1() {
    this.g34_1 = Companion_instance_2.r2n(16448250);
    this.h34_1 = Companion_instance_2.r2n(16119285);
    this.i34_1 = Companion_instance_2.r2n(15658734);
    this.j34_1 = Companion_instance_2.r2n(14737632);
    this.k34_1 = Companion_instance_2.r2n(12434877);
    this.l34_1 = Companion_instance_2.r2n(10395294);
    this.m34_1 = Companion_instance_2.r2n(7697781);
    this.n34_1 = Companion_instance_2.r2n(6381921);
    this.o34_1 = Companion_instance_2.r2n(4342338);
    this.p34_1 = Companion_instance_2.r2n(2171169);
  }
  protoOf(ColorSchemes$Gray$1).l2x = function () {
    return this.i34_1;
  };
  protoOf(ColorSchemes$Gray$1).m2x = function () {
    return this.j34_1;
  };
  protoOf(ColorSchemes$Gray$1).n2x = function () {
    return this.k34_1;
  };
  protoOf(ColorSchemes$Gray$1).o2x = function () {
    return this.l34_1;
  };
  protoOf(ColorSchemes$Gray$1).p2x = function () {
    return this.m34_1;
  };
  protoOf(ColorSchemes$Gray$1).q2x = function () {
    return this.n34_1;
  };
  protoOf(ColorSchemes$Gray$1).r2x = function () {
    return this.p34_1;
  };
  function ColorSchemes$BlueGray$1() {
    this.q34_1 = Companion_instance_2.r2n(15527921);
    this.r34_1 = Companion_instance_2.r2n(13621468);
    this.s34_1 = Companion_instance_2.r2n(11583173);
    this.t34_1 = Companion_instance_2.r2n(9479342);
    this.u34_1 = Companion_instance_2.r2n(7901340);
    this.v34_1 = Companion_instance_2.r2n(6323595);
    this.w34_1 = Companion_instance_2.r2n(5533306);
    this.x34_1 = Companion_instance_2.r2n(4545124);
    this.y34_1 = Companion_instance_2.r2n(3622735);
    this.z34_1 = Companion_instance_2.r2n(2503224);
  }
  protoOf(ColorSchemes$BlueGray$1).l2x = function () {
    return this.s34_1;
  };
  protoOf(ColorSchemes$BlueGray$1).m2x = function () {
    return this.t34_1;
  };
  protoOf(ColorSchemes$BlueGray$1).n2x = function () {
    return this.u34_1;
  };
  protoOf(ColorSchemes$BlueGray$1).o2x = function () {
    return this.v34_1;
  };
  protoOf(ColorSchemes$BlueGray$1).p2x = function () {
    return this.w34_1;
  };
  protoOf(ColorSchemes$BlueGray$1).q2x = function () {
    return this.x34_1;
  };
  protoOf(ColorSchemes$BlueGray$1).r2x = function () {
    return this.z34_1;
  };
  function ColorSchemes() {
    ColorSchemes_instance = this;
    var tmp = this;
    tmp.a35_1 = new ColorSchemes$Monochrome$1();
    var tmp_0 = this;
    tmp_0.b35_1 = new ColorSchemes$Red$1();
    var tmp_1 = this;
    tmp_1.c35_1 = new ColorSchemes$Pink$1();
    var tmp_2 = this;
    tmp_2.d35_1 = new ColorSchemes$Purple$1();
    var tmp_3 = this;
    tmp_3.e35_1 = new ColorSchemes$DeepPurple$1();
    var tmp_4 = this;
    tmp_4.f35_1 = new ColorSchemes$Indigo$1();
    var tmp_5 = this;
    tmp_5.g35_1 = new ColorSchemes$Blue$1();
    var tmp_6 = this;
    tmp_6.h35_1 = new ColorSchemes$LightBlue$1();
    var tmp_7 = this;
    tmp_7.i35_1 = new ColorSchemes$Cyan$1();
    var tmp_8 = this;
    tmp_8.j35_1 = new ColorSchemes$Teal$1();
    var tmp_9 = this;
    tmp_9.k35_1 = new ColorSchemes$Green$1();
    var tmp_10 = this;
    tmp_10.l35_1 = new ColorSchemes$LightGreen$1();
    var tmp_11 = this;
    tmp_11.m35_1 = new ColorSchemes$Lime$1();
    var tmp_12 = this;
    tmp_12.n35_1 = new ColorSchemes$Yellow$1();
    var tmp_13 = this;
    tmp_13.o35_1 = new ColorSchemes$Amber$1();
    var tmp_14 = this;
    tmp_14.p35_1 = new ColorSchemes$Orange$1();
    var tmp_15 = this;
    tmp_15.q35_1 = new ColorSchemes$DeepOrange$1();
    var tmp_16 = this;
    tmp_16.r35_1 = new ColorSchemes$Brown$1();
    var tmp_17 = this;
    tmp_17.s35_1 = new ColorSchemes$Gray$1();
    var tmp_18 = this;
    tmp_18.t35_1 = new ColorSchemes$BlueGray$1();
    this.u35_1 = 0;
  }
  var ColorSchemes_instance;
  function ColorSchemes_getInstance() {
    if (ColorSchemes_instance == null)
      new ColorSchemes();
    return ColorSchemes_instance;
  }
  function LegacyMutableSilkPalettes(palettes, light, dark) {
    light = light === VOID ? new LegacyMutableSilkPalette(palettes.v35_1) : light;
    dark = dark === VOID ? new LegacyMutableSilkPalette(palettes.w35_1) : dark;
    this.y35_1 = light;
    this.z35_1 = dark;
    this.a36_1 = 0;
  }
  function SilkPalettes() {
  }
  function PaletteEntry($outer) {
    this.b36_1 = $outer;
  }
  function Button($outer) {
    this.g36_1 = $outer;
    this.c36_1 = new PaletteEntry(this.g36_1);
    this.d36_1 = new PaletteEntry(this.g36_1);
    this.e36_1 = new PaletteEntry(this.g36_1);
    this.f36_1 = new PaletteEntry(this.g36_1);
  }
  function Checkbox($outer) {
    this.k36_1 = $outer;
    this.h36_1 = new PaletteEntry(this.k36_1);
    this.i36_1 = new PaletteEntry(this.k36_1);
    this.j36_1 = new PaletteEntry(this.k36_1);
  }
  function Input($outer) {
    this.q36_1 = $outer;
    this.l36_1 = new PaletteEntry(this.q36_1);
    this.m36_1 = new PaletteEntry(this.q36_1);
    this.n36_1 = new PaletteEntry(this.q36_1);
    this.o36_1 = new PaletteEntry(this.q36_1);
    this.p36_1 = new PaletteEntry(this.q36_1);
  }
  function Link($outer) {
    this.t36_1 = $outer;
    this.r36_1 = new PaletteEntry(this.t36_1);
    this.s36_1 = new PaletteEntry(this.t36_1);
  }
  function Switch($outer) {
    this.x36_1 = $outer;
    this.u36_1 = new PaletteEntry(this.x36_1);
    this.v36_1 = new PaletteEntry(this.x36_1);
    this.w36_1 = new PaletteEntry(this.x36_1);
  }
  function Tab($outer) {
    this.g37_1 = $outer;
    this.y36_1 = new PaletteEntry(this.g37_1);
    this.z36_1 = new PaletteEntry(this.g37_1);
    this.a37_1 = new PaletteEntry(this.g37_1);
    this.b37_1 = new PaletteEntry(this.g37_1);
    this.c37_1 = new PaletteEntry(this.g37_1);
    this.d37_1 = new PaletteEntry(this.g37_1);
    this.e37_1 = new PaletteEntry(this.g37_1);
    this.f37_1 = new PaletteEntry(this.g37_1);
  }
  function Tooltip($outer) {
    this.j37_1 = $outer;
    this.h37_1 = new PaletteEntry(this.j37_1);
    this.i37_1 = new PaletteEntry(this.j37_1);
  }
  function LegacyMutableSilkPalette(delegatePalette) {
    this.k37_1 = delegatePalette;
    this.l37_1 = new Button(this);
    this.m37_1 = new Checkbox(this);
    this.n37_1 = new Input(this);
    this.o37_1 = new Link(this);
    this.p37_1 = new Switch(this);
    this.q37_1 = new Tab(this);
    this.r37_1 = new Tooltip(this);
    this.s37_1 = 8;
  }
  function MutablePalettes() {
    this.v35_1 = new MutablePalette();
    this.w35_1 = new MutablePalette();
    this.x35_1 = 0;
  }
  protoOf(MutablePalettes).t37 = function () {
    return this.v35_1;
  };
  protoOf(MutablePalettes).u37 = function () {
    return this.w35_1;
  };
  function Palettes() {
  }
  function Palette() {
  }
  function EntryDelegate(palette, prefix) {
    prefix = prefix === VOID ? null : prefix;
    this.y37_1 = palette;
    this.z37_1 = prefix;
    this.a38_1 = 8;
  }
  protoOf(EntryDelegate).g2a = function (thisRef, property) {
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.z37_1;
    var tmp$ret$0 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    return getValue(this.y37_1.b38_1, tmp$ret$0 + property.callableName);
  };
  protoOf(EntryDelegate).d38 = function (thisRef, property, value) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.y37_1.b38_1;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.z37_1;
    var key = (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs) + property.callableName;
    this_0.j2(key, value);
  };
  function ColorGroup(palette, groupName) {
    this.e38_1 = palette;
    this.f38_1 = groupName;
    this.g38_1 = 8;
  }
  protoOf(ColorGroup).h38 = function () {
    return new EntryDelegate(this.e38_1, this.f38_1 + '.');
  };
  function MutablePalette() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.b38_1 = LinkedHashMap_init_$Create$_0();
    this.c38_1 = 8;
  }
  protoOf(MutablePalette).w37 = function (key) {
    return this.b38_1.t2(key);
  };
  protoOf(MutablePalette).i38 = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.b38_1.j2(key, value);
  };
  function toPalette(_this__u8e3s4) {
    return get_SilkTheme().a2s_1.v37(_this__u8e3s4);
  }
  function clip(_this__u8e3s4, shape) {
    var tmp0_safe_receiver = shape.j38();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.theme.shapes.clip.<anonymous>' call
      tmp = styleModifier(_this__u8e3s4, clip$lambda(tmp0_safe_receiver));
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function RectF_init_$Init$($this) {
    RectF_init_$Init$_0(get_px(0), $this);
    return $this;
  }
  function RectF_init_$Create$() {
    return RectF_init_$Init$(objectCreate(protoOf(RectF)));
  }
  function RectF_init_$Init$_0(cornerRadius, $this) {
    RectF.call($this, to(0.0, 0.0), to(100.0, 100.0), cornerRadius);
    return $this;
  }
  function RectF_init_$Init$_1(side, cornerRadius, $this) {
    cornerRadius = cornerRadius === VOID ? get_px(0) : cornerRadius;
    RectF.call($this, to(side, side), from100(to(side, side)), cornerRadius);
    return $this;
  }
  function RectF_init_$Create$_0(side, cornerRadius) {
    return RectF_init_$Init$_1(side, cornerRadius, objectCreate(protoOf(RectF)));
  }
  function RectF(topLeft, botRight, cornerRadius) {
    cornerRadius = cornerRadius === VOID ? get_px(0) : cornerRadius;
    this.k38_1 = topLeft;
    this.l38_1 = botRight;
    this.m38_1 = cornerRadius;
    this.n38_1 = 0;
  }
  protoOf(RectF).j38 = function () {
    var tmp;
    if ((((!(this.k38_1.id_1 === 0.0) ? true : !(this.k38_1.jd_1 === 0.0)) ? true : !(this.l38_1.id_1 === 100.0)) ? true : !(this.l38_1.jd_1 === 100.0)) ? true : !equals(this.m38_1, get_px(0))) {
      tmp = new InsetPath(this.k38_1, this.l38_1, this.m38_1);
    } else {
      tmp = null;
    }
    return tmp;
  };
  function Path() {
    this.o38_1 = 0;
  }
  protoOf(Path).q38 = function (_this__u8e3s4) {
    return toString(_this__u8e3s4) + '%';
  };
  protoOf(Path).r38 = function (_this__u8e3s4) {
    return toString(_this__u8e3s4.id_1) + '% ' + toString(_this__u8e3s4.jd_1) + '%';
  };
  function from100(_this__u8e3s4) {
    return to(100.0 - _this__u8e3s4.id_1, 100.0 - _this__u8e3s4.jd_1);
  }
  function InsetPath(topLeft, botRight, roundness) {
    roundness = roundness === VOID ? get_px(0) : roundness;
    Path.call(this);
    this.t38_1 = topLeft;
    this.u38_1 = roundness;
    this.v38_1 = from100(botRight);
    this.w38_1 = 0;
  }
  protoOf(InsetPath).p38 = function () {
    // Inline function 'kotlin.takeIf' call
    var this_0 = this.u38_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'com.varabyte.kobweb.silk.theme.shapes.InsetPath.toPathStr.<anonymous>' call
    if (!equals(this_0, get_px(0))) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.theme.shapes.InsetPath.toPathStr.<anonymous>' call
      tmp_0 = 'round ' + tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = tmp_0;
    var roundnessPart = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    var left = this.t38_1.id_1;
    var top = this.t38_1.jd_1;
    var right = this.v38_1.id_1;
    var bottom = this.v38_1.jd_1;
    var insetPart = ((left === top ? right === bottom : false) ? left === right : false) ? this.q38(left) : (left === right ? top === bottom : false) ? this.r38(to(top, left)) : this.q38(top) + ' ' + this.q38(right) + ' ' + this.q38(bottom) + ' ' + this.q38(left);
    return 'inset(' + insetPart + roundnessPart + ')';
  };
  function clip$lambda($path) {
    return function ($this$styleModifier) {
      $this$styleModifier.e1y('clip-path', $path.p38());
      return Unit_instance;
    };
  }
  //region block: post-declaration
  protoOf(MutablePalettes).v37 = get;
  protoOf(MutablePalette).x37 = getValue_0;
  //endregion
  //region block: init
  Companion_instance_3 = new Companion();
  Companion_instance_4 = new Companion_0();
  Companion_instance_5 = new Companion_1();
  Companion_instance_6 = new Companion_2();
  Companion_instance_8 = new Companion_4();
  _SilkTheme = null;
  Companion_instance_9 = new Companion_5();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Keyframes_0;
  _.$_$.b = registerKeyframes;
  _.$_$.c = toAnimation$composable;
  _.$_$.d = toAnimation;
  _.$_$.e = displayIfAtLeast;
  _.$_$.f = displayUntil;
  _.$_$.g = get_entries;
  _.$_$.h = ResponsiveValues;
  _.$_$.i = ComponentStyle$composable;
  _.$_$.j = ComponentStyle_0;
  _.$_$.k = get_active;
  _.$_$.l = addVariantBase;
  _.$_$.m = addVariant;
  _.$_$.n = get_ariaDisabled;
  _.$_$.o = get_ariaInvalid;
  _.$_$.p = base$composable;
  _.$_$.q = base;
  _.$_$.r = base_0;
  _.$_$.s = get_disabled;
  _.$_$.t = get_focusVisible;
  _.$_$.u = get_hover;
  _.$_$.v = get_link;
  _.$_$.w = not;
  _.$_$.x = get_placeholder;
  _.$_$.y = toAttrs$composable;
  _.$_$.z = toModifier$composable;
  _.$_$.a1 = get_visited;
  _.$_$.b1 = SpanText$composable;
  _.$_$.c1 = deferRender$composable;
  _.$_$.d1 = renderWithDeferred$composable;
  _.$_$.e1 = set_additionalSilkInitialization;
  _.$_$.f1 = registerStyleBase;
  _.$_$.g1 = rememberBreakpoint$composable;
  _.$_$.h1 = ColorGroup;
  _.$_$.i1 = MutablePalette;
  _.$_$.j1 = toPalette;
  _.$_$.k1 = valueOf;
  _.$_$.l1 = suffixedWith;
  _.$_$.m1 = clip;
  _.$_$.n1 = modifyComponentStyleBase;
  _.$_$.o1 = prepareSilkFoundation$composable;
  _.$_$.p1 = Breakpoint_LG_getInstance;
  _.$_$.q1 = Breakpoint_MD_getInstance;
  _.$_$.r1 = Breakpoint_SM_getInstance;
  _.$_$.s1 = Breakpoint_XL_getInstance;
  _.$_$.t1 = Breakpoint_ZERO_getInstance;
  _.$_$.u1 = ColorMode_DARK_getInstance;
  _.$_$.v1 = ColorMode_LIGHT_getInstance;
  _.$_$.w1 = RectF_init_$Create$_0;
  _.$_$.x1 = Companion_instance_4;
  _.$_$.y1 = Companion_instance_9;
  _.$_$.z1 = ColorSchemes_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-foundation.js.map
