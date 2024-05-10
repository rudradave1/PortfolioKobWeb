(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kobweb-frontend-silk-widgets.js', './kobweb-frontend-compose-html-ext.js', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-compose.js', './html-html-core.js', './kobweb-frontend-silk-foundation.js', './compose-multiplatform-core-runtime.js', './kobweb-frontend-kobweb-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kobweb-frontend-silk-widgets.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./html-html-core.js'), require('./kobweb-frontend-silk-foundation.js'), require('./compose-multiplatform-core-runtime.js'), require('./kobweb-frontend-kobweb-core.js'));
  else {
    if (typeof this['kobweb-frontend-silk-widgets'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-silk-widgets' was not found. Please, check whether 'kobweb-frontend-silk-widgets' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['kobweb-frontend-kobweb-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-kobweb-core' was not found. Please, check whether 'kobweb-frontend-kobweb-core' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    root['kobweb-frontend-silk-widgets-kobweb'] = factory(typeof this['kobweb-frontend-silk-widgets-kobweb'] === 'undefined' ? {} : this['kobweb-frontend-silk-widgets-kobweb'], this['kobweb-frontend-silk-widgets'], this['kobweb-frontend-compose-html-ext'], this['kotlin-kotlin-stdlib'], this['kobweb-frontend-kobweb-compose'], this['html-html-core'], this['kobweb-frontend-silk-foundation'], this['compose-multiplatform-core-runtime'], this['kobweb-frontend-kobweb-core']);
  }
}(this, function (_, kotlin_com_varabyte_kobweb_silk_widgets, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_com_varabyte_kobweb_kobweb_core) {
  'use strict';
  //region block: imports
  var get_BorderColorVar = kotlin_com_varabyte_kobweb_silk_widgets.$_$.n;
  var StyleVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l;
  var protoOf = kotlin_kotlin.$_$.i6;
  var objectMeta = kotlin_kotlin.$_$.h6;
  var setMetadataFor = kotlin_kotlin.$_$.j6;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j4;
  var Companion_instance_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l3;
  var listStyle = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t1;
  var Companion_instance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s3;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y2;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.r1;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l2;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.w2;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var Companion_instance_2 = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t;
  var KProperty0 = kotlin_kotlin.$_$.s6;
  var getPropertyCallableRef = kotlin_kotlin.$_$.u5;
  var KProperty1 = kotlin_kotlin.$_$.t6;
  var Companion_instance_3 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x1;
  var VOID = kotlin_kotlin.$_$.c;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l;
  var Unit_instance = kotlin_kotlin.$_$.y1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var Companion_instance_4 = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b1;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n3;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var THROW_CCE = kotlin_kotlin.$_$.i8;
  var Div$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.k3;
  var Companion_instance_5 = kotlin_com_varabyte_kobweb_kobweb_core.$_$.i;
  var prependIf = kotlin_com_varabyte_kobweb_kobweb_core.$_$.f;
  var toModifier$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z;
  var Img$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.s3;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.u2;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j3;
  var Companion_instance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n3;
  var objectFit = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b2;
  var registerRefScope$composable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r2;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var ComponentStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j;
  var StyleVariable_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k;
  var Anchor$composable = kotlin_com_varabyte_kobweb_kobweb_core.$_$.d;
  var get_link = kotlin_com_varabyte_kobweb_silk_foundation.$_$.v;
  var get_visited = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a1;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u;
  var Companion_instance_7 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t3;
  var textDecorationLine = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z2;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var get_ColorVar = kotlin_com_varabyte_kobweb_silk_widgets.$_$.o;
  var Text$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.z3;
  var registerRefScope$composable_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q2;
  var addVariant = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m;
  var Colors_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v3;
  var get_SilkColorsStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.p;
  var modifyComponentStyleBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n1;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j1;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v2;
  var ColorGroup = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h1;
  var classMeta = kotlin_kotlin.$_$.n5;
  var MutablePalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i1;
  var KMutableProperty1 = kotlin_kotlin.$_$.r6;
  //endregion
  //region block: pre-declaration
  setMetadataFor(TocVars, 'TocVars', objectMeta);
  setMetadataFor(LinkVars, 'LinkVars', objectMeta);
  setMetadataFor(MutableLink, 'MutableLink', classMeta, ColorGroup);
  //endregion
  function get_TocStyle() {
    _init_properties_Toc_kt__9n5312();
    return TocStyle$delegate.g2a(null, TocStyle$factory());
  }
  var TocStyle$delegate;
  function get_TocBorderedVariant() {
    _init_properties_Toc_kt__9n5312();
    return TocBorderedVariant$delegate.g2a(null, TocBorderedVariant$factory());
  }
  var TocBorderedVariant$delegate;
  function TocVars() {
    TocVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().x29();
    tmp.d3j_1 = StyleVariable(tmp0_defaultFallback, 'silk');
    this.e3j_1 = 0;
  }
  protoOf(TocVars).q39 = function () {
    return this.d3j_1.g2a(this, BorderColor$factory());
  };
  var TocVars_instance;
  function TocVars_getInstance() {
    if (TocVars_instance == null)
      new TocVars();
    return TocVars_instance;
  }
  function TocStyle$delegate$lambda($this$base) {
    _init_properties_Toc_kt__9n5312();
    return padding(textAlign(listStyle(Companion_instance, Companion_instance_0.p28()), Companion_instance_1.q23()), get_cssRem(0));
  }
  function TocBorderedVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Toc_kt__9n5312();
    var tmp = borderRadius(Companion_instance, get_px(5));
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return padding(border(tmp, tmp_0, 'solid', TocVars_getInstance().q39().x29()), get_cssRem(1));
  }
  function TocStyle$factory() {
    return getPropertyCallableRef('TocStyle', 0, KProperty0, function () {
      return get_TocStyle();
    }, null);
  }
  function TocBorderedVariant$factory() {
    return getPropertyCallableRef('TocBorderedVariant', 0, KProperty0, function () {
      return get_TocBorderedVariant();
    }, null);
  }
  function BorderColor$factory() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.q39();
    }, null);
  }
  var properties_initialized_Toc_kt_t9o4p4;
  function _init_properties_Toc_kt__9n5312() {
    if (!properties_initialized_Toc_kt_t9o4p4) {
      properties_initialized_Toc_kt_t9o4p4 = true;
      var tmp = Companion_instance_3;
      TocStyle$delegate = base(tmp, VOID, 'silk', TocStyle$delegate$lambda);
      var tmp_0 = get_TocStyle();
      TocBorderedVariant$delegate = addVariantBase(tmp_0, VOID, TocBorderedVariant$delegate$lambda);
    }
  }
  function get_ImageStyle() {
    _init_properties_Image_kt__h9v8mh();
    return ImageStyle$delegate.g2a(null, ImageStyle$factory());
  }
  var ImageStyle$delegate;
  function get_FitWidthImageVariant() {
    _init_properties_Image_kt__h9v8mh();
    return FitWidthImageVariant$delegate.g2a(null, FitWidthImageVariant$factory());
  }
  var FitWidthImageVariant$delegate;
  function Image$composable(src, modifier, variant, width, height, alt, autoPrefix, ref, $composer, $changed, $default) {
    _init_properties_Image_kt__h9v8mh();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var width_0 = {_v: width};
    var height_0 = {_v: height};
    var alt_0 = {_v: alt};
    var autoPrefix_0 = {_v: autoPrefix};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(-1647263695);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv(src) ? 4 : 2);
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
      $dirty = $dirty | ($composer_0.fv(width_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.fv(height_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.fv(alt_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.gv(autoPrefix_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.fv(ref_0._v) ? 8388608 : 4194304);
    if (!(($dirty & 23967451) === 4793490) ? true : !$composer_0.ju()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 4) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        width_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        height_0._v = null;
      }
      if (!(($default & 32) === 0)) {
        alt_0._v = '';
      }
      if (!(($default & 64) === 0)) {
        autoPrefix_0._v = true;
      }
      if (!(($default & 128) === 0)) {
        ref_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1647263695, $dirty, -1, 'com.varabyte.kobweb.silk.components.graphics.Image$composable (Image.kt:54)');
      }
      $composer_0.mu(-765117159);
      if (!(ref_0._v == null)) {
        var tmp = Companion_instance;
        // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
        // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = toAttrs(display(tmp, 'none'));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.silk.components.graphics.Image$composable.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 78757125, true, Image$composable$lambda(ref_0));
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
          // Inline function 'com.varabyte.kobweb.silk.components.graphics.Image$composable.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref(dispatchReceiver);
          $composer_1.ev(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.nu();
        Div$composable(tmp_0, tmp0, $composer_0, 48, 0);
      }
      $composer_0.nu();
      var tmp_4 = prependIf(Companion_instance_5, autoPrefix_0._v, src);
      var tmp_5 = alt_0._v;
      var tmp_6 = toModifier$composable(get_ImageStyle(), [variant_0._v], $composer_0, 0).s2m(modifier_0._v);
      $composer_0.mu(775738055);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid_0 = !!($composer_0.fv(width_0._v) | $composer_0.fv(height_0._v));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_0.dv();
      var tmp_7;
      if (invalid_0 ? true : it_0 === Companion_getInstance().gu_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.graphics.Image$composable.<anonymous>' call
        var value_0 = Image$composable$lambda_0(width_0, height_0);
        this_0.ev(value_0);
        tmp_7 = value_0;
      } else {
        tmp_7 = it_0;
      }
      var tmp_8 = tmp_7;
      var tmpCache = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_0.nu();
      Img$composable(tmp_4, tmp_5, toAttrs(tmp_6, tmpCache), $composer_0, 112 & $dirty >> 12, 0);
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
      tmp0_safe_receiver.s19(Image$composable$lambda_1(src, modifier_0, variant_0, width_0, height_0, alt_0, autoPrefix_0, ref_0, $changed, $default));
    }
  }
  function ImageStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Image_kt__h9v8mh();
    return Unit_instance;
  }
  function FitWidthImageVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_Image_kt__h9v8mh();
    return objectFit(width(Companion_instance, get_percent(100)), Companion_instance_6.s28());
  }
  function Image$composable$lambda$lambda(it) {
    _init_properties_Image_kt__h9v8mh();
    var tmp = it.nextSibling;
    return tmp instanceof HTMLImageElement ? tmp : THROW_CCE();
  }
  function Image$composable$lambda($ref) {
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
          traceEventStart(78757125, $dirty, -1, 'com.varabyte.kobweb.silk.components.graphics.Image$composable.<anonymous> (Image.kt:57)');
        }
        var tmp_1 = $ref._v;
        $composer_0.mu(775737885);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.dv();
        var tmp_2;
        if (false ? true : it === Companion_getInstance().gu_1) {
          // Inline function 'com.varabyte.kobweb.silk.components.graphics.Image$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = Image$composable$lambda$lambda;
          $composer_0.ev(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmpCache = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_0.nu();
        registerRefScope$composable($this$Div, tmp_1, tmpCache, $composer_0, 14 & $dirty);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_instance;
        }
        tmp_0 = tmp_4;
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
  function Image$composable$lambda_0($width, $height) {
    return function ($this$toAttrs) {
      var tmp;
      if (!($width._v == null)) {
        $this$toAttrs.n1v('width', $width._v.toString());
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!($height._v == null)) {
        $this$toAttrs.n1v('height', $height._v.toString());
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function Image$composable$lambda_1($src, $modifier, $variant, $width, $height, $alt, $autoPrefix, $ref, $$changed, $$default) {
    return function ($composer, $force) {
      Image$composable($src, $modifier._v, $variant._v, $width._v, $height._v, $alt._v, $autoPrefix._v, $ref._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function ImageStyle$factory() {
    return getPropertyCallableRef('ImageStyle', 0, KProperty0, function () {
      return get_ImageStyle();
    }, null);
  }
  function FitWidthImageVariant$factory() {
    return getPropertyCallableRef('FitWidthImageVariant', 0, KProperty0, function () {
      return get_FitWidthImageVariant();
    }, null);
  }
  var properties_initialized_Image_kt_7kjzpx;
  function _init_properties_Image_kt__h9v8mh() {
    if (!properties_initialized_Image_kt_7kjzpx) {
      properties_initialized_Image_kt_7kjzpx = true;
      ImageStyle$delegate = ComponentStyle(VOID, 'silk', ImageStyle$delegate$lambda);
      var tmp = get_ImageStyle();
      FitWidthImageVariant$delegate = addVariantBase(tmp, VOID, FitWidthImageVariant$delegate$lambda);
    }
  }
  function get_LinkStyle() {
    _init_properties_Link_kt__dm1ox2();
    return LinkStyle$delegate.g2a(null, LinkStyle$factory());
  }
  var LinkStyle$delegate;
  function get_UndecoratedLinkVariant() {
    _init_properties_Link_kt__dm1ox2();
    return UndecoratedLinkVariant$delegate.g2a(null, UndecoratedLinkVariant$factory());
  }
  var UndecoratedLinkVariant$delegate;
  function get_UncoloredLinkVariant() {
    _init_properties_Link_kt__dm1ox2();
    return UncoloredLinkVariant$delegate.g2a(null, UncoloredLinkVariant$factory());
  }
  var UncoloredLinkVariant$delegate;
  function get_AlwaysUnderlinedLinkVariant() {
    _init_properties_Link_kt__dm1ox2();
    return AlwaysUnderlinedLinkVariant$delegate.g2a(null, AlwaysUnderlinedLinkVariant$factory());
  }
  var AlwaysUnderlinedLinkVariant$delegate;
  function LinkVars() {
    LinkVars_instance = this;
    this.f3j_1 = StyleVariable_0('silk');
    this.g3j_1 = StyleVariable_0('silk');
    this.h3j_1 = 0;
  }
  protoOf(LinkVars).i3j = function () {
    return this.f3j_1.g2a(this, DefaultColor$factory());
  };
  protoOf(LinkVars).j3j = function () {
    return this.g3j_1.g2a(this, VisitedColor$factory());
  };
  var LinkVars_instance;
  function LinkVars_getInstance() {
    if (LinkVars_instance == null)
      new LinkVars();
    return LinkVars_instance;
  }
  function Link$composable(path, text, modifier, variant, openInternalLinksStrategy, openExternalLinksStrategy, autoPrefix, ref, $composer, $changed, $default) {
    _init_properties_Link_kt__dm1ox2();
    var text_0 = {_v: text};
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var openInternalLinksStrategy_0 = {_v: openInternalLinksStrategy};
    var openExternalLinksStrategy_0 = {_v: openExternalLinksStrategy};
    var autoPrefix_0 = {_v: autoPrefix};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(1950033137);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv(path) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.fv(text_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.fv(modifier_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.fv(variant_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.fv(openInternalLinksStrategy_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.fv(openExternalLinksStrategy_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.gv(autoPrefix_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.fv(ref_0._v) ? 8388608 : 4194304);
    if (!(($dirty & 23967451) === 4793490) ? true : !$composer_0.ju()) {
      if (!(($default & 2) === 0)) {
        text_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 8) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        openInternalLinksStrategy_0._v = null;
      }
      if (!(($default & 32) === 0)) {
        openExternalLinksStrategy_0._v = null;
      }
      if (!(($default & 64) === 0)) {
        autoPrefix_0._v = true;
      }
      if (!(($default & 128) === 0)) {
        ref_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1950033137, $dirty, -1, 'com.varabyte.kobweb.silk.components.navigation.Link$composable (Link.kt:95)');
      }
      var tmp = modifier_0._v;
      var tmp_0 = variant_0._v;
      var tmp_1 = openInternalLinksStrategy_0._v;
      var tmp_2 = openExternalLinksStrategy_0._v;
      var tmp_3 = autoPrefix_0._v;
      var tmp_4 = ref_0._v;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.navigation.Link$composable.<anonymous>' call
      var tmp_5 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_5, 1642222480, true, Link$composable$lambda(text_0, path));
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
      var tmp_6;
      if (invalid ? true : it === Companion_getInstance().gu_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.navigation.Link$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_0(dispatchReceiver);
        $composer_1.ev(value);
        tmp_6 = value;
      } else {
        tmp_6 = it;
      }
      var tmp_7 = tmp_6;
      var tmp0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      $composer_1.nu();
      Link$composable_0(path, tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp0, $composer_0, 12582912 | 14 & $dirty | 112 & $dirty >> 3 | 896 & $dirty >> 3 | 7168 & $dirty >> 3 | 57344 & $dirty >> 3 | 458752 & $dirty >> 3 | 3670016 & $dirty >> 3, 0);
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
      tmp0_safe_receiver.s19(Link$composable$lambda_0(path, text_0, modifier_0, variant_0, openInternalLinksStrategy_0, openExternalLinksStrategy_0, autoPrefix_0, ref_0, $changed, $default));
    }
  }
  function Link$composable_0(path, modifier, variant, openInternalLinksStrategy, openExternalLinksStrategy, autoPrefix, ref, content, $composer, $changed, $default) {
    _init_properties_Link_kt__dm1ox2();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var openInternalLinksStrategy_0 = {_v: openInternalLinksStrategy};
    var openExternalLinksStrategy_0 = {_v: openExternalLinksStrategy};
    var autoPrefix_0 = {_v: autoPrefix};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(231966754);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.fv(path) ? 4 : 2);
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
      $dirty = $dirty | ($composer_0.fv(openInternalLinksStrategy_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.fv(openExternalLinksStrategy_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.gv(autoPrefix_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.fv(ref_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.iv(content) ? 8388608 : 4194304);
    if (!(($dirty & 23967451) === 4793490) ? true : !$composer_0.ju()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 4) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        openInternalLinksStrategy_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        openExternalLinksStrategy_0._v = null;
      }
      if (!(($default & 32) === 0)) {
        autoPrefix_0._v = true;
      }
      if (!(($default & 64) === 0)) {
        ref_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(231966754, $dirty, -1, 'com.varabyte.kobweb.silk.components.navigation.Link$composable (Link.kt:116)');
      }
      var tmp = toAttrs(toModifier$composable(get_LinkStyle(), [variant_0._v], $composer_0, 0).s2m(modifier_0._v));
      var tmp_0 = openInternalLinksStrategy_0._v;
      var tmp_1 = openExternalLinksStrategy_0._v;
      var tmp_2 = autoPrefix_0._v;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.navigation.Link$composable.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, 2134514244, true, Link$composable$lambda_1(ref_0, content));
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
        // Inline function 'com.varabyte.kobweb.silk.components.navigation.Link$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.ev(value);
        tmp_4 = value;
      } else {
        tmp_4 = it;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_1.nu();
      Anchor$composable(path, tmp, tmp_0, tmp_1, tmp_2, tmp0, $composer_0, 196608 | 14 & $dirty | 896 & $dirty >> 3 | 7168 & $dirty >> 3 | 57344 & $dirty >> 3, 0);
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
      tmp0_safe_receiver.s19(Link$composable$lambda_2(path, modifier_0, variant_0, openInternalLinksStrategy_0, openExternalLinksStrategy_0, autoPrefix_0, ref_0, content, $changed, $default));
    }
  }
  function LinkStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_Link_kt__dm1ox2();
    $this$ComponentStyle.o2r(LinkStyle$delegate$lambda$lambda);
    var tmp = get_link($this$ComponentStyle);
    tmp.f2t(LinkStyle$delegate$lambda$lambda_0);
    var tmp_0 = get_visited($this$ComponentStyle);
    tmp_0.f2t(LinkStyle$delegate$lambda$lambda_1);
    var tmp_1 = get_hover($this$ComponentStyle);
    tmp_1.f2t(LinkStyle$delegate$lambda$lambda_2);
    return Unit_instance;
  }
  function LinkStyle$delegate$lambda$lambda() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_instance, Companion_instance_7.p28());
  }
  function LinkStyle$delegate$lambda$lambda_0() {
    _init_properties_Link_kt__dm1ox2();
    return color(Companion_instance, LinkVars_getInstance().i3j().x29());
  }
  function LinkStyle$delegate$lambda$lambda_1() {
    _init_properties_Link_kt__dm1ox2();
    return color(Companion_instance, LinkVars_getInstance().j3j().x29());
  }
  function LinkStyle$delegate$lambda$lambda_2() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_instance, Companion_instance_7.s2a());
  }
  function UndecoratedLinkVariant$delegate$lambda($this$addVariant) {
    _init_properties_Link_kt__dm1ox2();
    var tmp = get_hover($this$addVariant);
    tmp.f2t(UndecoratedLinkVariant$delegate$lambda$lambda);
    return Unit_instance;
  }
  function UndecoratedLinkVariant$delegate$lambda$lambda() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_instance, Companion_instance_7.p28());
  }
  function UncoloredLinkVariant$delegate$lambda($this$addVariant) {
    _init_properties_Link_kt__dm1ox2();
    var colorModifier = color(Companion_instance, get_ColorVar().x29());
    var tmp = get_link($this$addVariant);
    tmp.f2t(UncoloredLinkVariant$delegate$lambda$lambda(colorModifier));
    var tmp_0 = get_visited($this$addVariant);
    tmp_0.f2t(UncoloredLinkVariant$delegate$lambda$lambda_0(colorModifier));
    return Unit_instance;
  }
  function UncoloredLinkVariant$delegate$lambda$lambda($colorModifier) {
    return function () {
      return $colorModifier;
    };
  }
  function UncoloredLinkVariant$delegate$lambda$lambda_0($colorModifier) {
    return function () {
      return $colorModifier;
    };
  }
  function AlwaysUnderlinedLinkVariant$delegate$lambda($this$addVariant) {
    _init_properties_Link_kt__dm1ox2();
    $this$addVariant.o2r(AlwaysUnderlinedLinkVariant$delegate$lambda$lambda);
    return Unit_instance;
  }
  function AlwaysUnderlinedLinkVariant$delegate$lambda$lambda() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_instance, Companion_instance_7.s2a());
  }
  function Link$composable$lambda($text, $path) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.ju()) {
        if (isTraceInProgress()) {
          traceEventStart(1642222480, $changed, -1, 'com.varabyte.kobweb.silk.components.navigation.Link$composable.<anonymous> (Link.kt:97)');
        }
        var tmp0_elvis_lhs = $text._v;
        Text$composable(tmp0_elvis_lhs == null ? $path : tmp0_elvis_lhs, $composer_0, 0);
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
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.s14(p0, p1);
    };
  }
  function Link$composable$lambda_0($path, $text, $modifier, $variant, $openInternalLinksStrategy, $openExternalLinksStrategy, $autoPrefix, $ref, $$changed, $$default) {
    return function ($composer, $force) {
      Link$composable($path, $text._v, $modifier._v, $variant._v, $openInternalLinksStrategy._v, $openExternalLinksStrategy._v, $autoPrefix._v, $ref._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Link$composable$lambda_1($ref, $content) {
    return function ($this$Anchor, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.fv($this$Anchor) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.ju()) {
        if (isTraceInProgress()) {
          traceEventStart(2134514244, $dirty, -1, 'com.varabyte.kobweb.silk.components.navigation.Link$composable.<anonymous> (Link.kt:124)');
        }
        registerRefScope$composable_0($this$Anchor, $ref._v, $composer_0, 14 & $dirty);
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
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.t1t(p0, p1, p2);
    };
  }
  function Link$composable$lambda_2($path, $modifier, $variant, $openInternalLinksStrategy, $openExternalLinksStrategy, $autoPrefix, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Link$composable_0($path, $modifier._v, $variant._v, $openInternalLinksStrategy._v, $openExternalLinksStrategy._v, $autoPrefix._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function LinkStyle$factory() {
    return getPropertyCallableRef('LinkStyle', 0, KProperty0, function () {
      return get_LinkStyle();
    }, null);
  }
  function UndecoratedLinkVariant$factory() {
    return getPropertyCallableRef('UndecoratedLinkVariant', 0, KProperty0, function () {
      return get_UndecoratedLinkVariant();
    }, null);
  }
  function UncoloredLinkVariant$factory() {
    return getPropertyCallableRef('UncoloredLinkVariant', 0, KProperty0, function () {
      return get_UncoloredLinkVariant();
    }, null);
  }
  function AlwaysUnderlinedLinkVariant$factory() {
    return getPropertyCallableRef('AlwaysUnderlinedLinkVariant', 0, KProperty0, function () {
      return get_AlwaysUnderlinedLinkVariant();
    }, null);
  }
  function DefaultColor$factory() {
    return getPropertyCallableRef('DefaultColor', 1, KProperty1, function (receiver) {
      return receiver.i3j();
    }, null);
  }
  function VisitedColor$factory() {
    return getPropertyCallableRef('VisitedColor', 1, KProperty1, function (receiver) {
      return receiver.j3j();
    }, null);
  }
  var properties_initialized_Link_kt_5x6v44;
  function _init_properties_Link_kt__dm1ox2() {
    if (!properties_initialized_Link_kt_5x6v44) {
      properties_initialized_Link_kt_5x6v44 = true;
      LinkStyle$delegate = ComponentStyle(VOID, 'silk', LinkStyle$delegate$lambda);
      var tmp = get_LinkStyle();
      UndecoratedLinkVariant$delegate = addVariant(tmp, VOID, UndecoratedLinkVariant$delegate$lambda);
      var tmp_0 = get_LinkStyle();
      UncoloredLinkVariant$delegate = addVariant(tmp_0, VOID, UncoloredLinkVariant$delegate$lambda);
      var tmp_1 = get_LinkStyle();
      AlwaysUnderlinedLinkVariant$delegate = addVariant(tmp_1, VOID, AlwaysUnderlinedLinkVariant$delegate$lambda);
    }
  }
  function initSilkWidgetsKobweb(ctx) {
    var mutableTheme = ctx.n2v_1;
    // Inline function 'kotlin.apply' call
    var this_0 = ctx.n2v_1.v2v_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgetsKobweb.<anonymous>' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    (new MutableLink(this_0.v35_1)).s3h(Colors_instance.w2n(), Colors_instance.g2o());
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    (new MutableLink(this_0.w35_1)).s3h(Colors_instance.y2n(), Colors_instance.h2o());
    var tmp = get_SilkColorsStyle();
    modifyComponentStyleBase(mutableTheme, tmp, VOID, initSilkWidgetsKobweb$lambda);
    mutableTheme.z2v(get_ImageStyle());
    mutableTheme.j2w([get_FitWidthImageVariant()]);
    mutableTheme.z2v(get_LinkStyle());
    mutableTheme.j2w([get_UncoloredLinkVariant(), get_UndecoratedLinkVariant(), get_AlwaysUnderlinedLinkVariant()]);
    mutableTheme.z2v(get_TocStyle());
    mutableTheme.j2w([get_TocBorderedVariant()]);
  }
  function initSilkWidgetsKobweb$lambda($this$modifyComponentStyleBase) {
    var palette = toPalette($this$modifyComponentStyleBase.n2r());
    return setVariable(setVariable(Companion_instance, LinkVars_getInstance().i3j(), get_link_0(palette).t3h()), LinkVars_getInstance().j3j(), get_link_0(palette).q3j());
  }
  function MutableLink(palette) {
    ColorGroup.call(this, palette, 'link');
    this.n3j_1 = this.h38();
    this.o3j_1 = this.h38();
    this.p3j_1 = 0;
  }
  protoOf(MutableLink).e3i = function (_set____db54di) {
    return this.n3j_1.d38(this, default$factory(), _set____db54di);
  };
  protoOf(MutableLink).t3h = function () {
    return this.n3j_1.g2a(this, default$factory_0());
  };
  protoOf(MutableLink).r3j = function (_set____db54di) {
    return this.o3j_1.d38(this, visited$factory(), _set____db54di);
  };
  protoOf(MutableLink).q3j = function () {
    return this.o3j_1.g2a(this, visited$factory_0());
  };
  protoOf(MutableLink).s3h = function (default_0, visited) {
    this.e3i(default_0);
    this.r3j(visited);
  };
  function get_link_0(_this__u8e3s4) {
    return get_link_1(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_link_1(_this__u8e3s4) {
    return new MutableLink(_this__u8e3s4);
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
  function visited$factory() {
    return getPropertyCallableRef('visited', 1, KMutableProperty1, function (receiver) {
      return receiver.q3j();
    }, function (receiver, value) {
      return receiver.r3j(value);
    });
  }
  function visited$factory_0() {
    return getPropertyCallableRef('visited', 1, KMutableProperty1, function (receiver) {
      return receiver.q3j();
    }, function (receiver, value) {
      return receiver.r3j(value);
    });
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Image$composable;
  _.$_$.b = Link$composable;
  _.$_$.c = get_UncoloredLinkVariant;
  _.$_$.d = get_UndecoratedLinkVariant;
  _.$_$.e = initSilkWidgetsKobweb;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-widgets-kobweb.js.map
