(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-runtime.js', './kobweb-frontend-kobweb-core.js', './kobweb-frontend-silk-widgets.js', './kobweb-frontend-silk-foundation.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-runtime.js'), require('./kobweb-frontend-kobweb-core.js'), require('./kobweb-frontend-silk-widgets.js'), require('./kobweb-frontend-silk-foundation.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-silk'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-kobweb-silk'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-silk'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'kobweb-frontend-kobweb-silk'.");
    }
    if (typeof this['kobweb-frontend-kobweb-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-silk'. Its dependency 'kobweb-frontend-kobweb-core' was not found. Please, check whether 'kobweb-frontend-kobweb-core' is loaded prior to 'kobweb-frontend-kobweb-silk'.");
    }
    if (typeof this['kobweb-frontend-silk-widgets'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-silk'. Its dependency 'kobweb-frontend-silk-widgets' was not found. Please, check whether 'kobweb-frontend-silk-widgets' is loaded prior to 'kobweb-frontend-kobweb-silk'.");
    }
    if (typeof this['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-silk'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'kobweb-frontend-kobweb-silk'.");
    }
    root['kobweb-frontend-kobweb-silk'] = factory(typeof this['kobweb-frontend-kobweb-silk'] === 'undefined' ? {} : this['kobweb-frontend-kobweb-silk'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-runtime'], this['kobweb-frontend-kobweb-core'], this['kobweb-frontend-silk-widgets'], this['kobweb-frontend-silk-foundation']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_com_varabyte_kobweb_kobweb_core, kotlin_com_varabyte_kobweb_silk_widgets, kotlin_com_varabyte_kobweb_silk_foundation) {
  'use strict';
  //region block: imports
  var Unit_instance = kotlin_kotlin.$_$.y1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var THROW_CCE = kotlin_kotlin.$_$.i8;
  var KobwebApp$composable = kotlin_com_varabyte_kobweb_kobweb_core.$_$.b;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var setSilkWidgetVariables$composable = kotlin_com_varabyte_kobweb_silk_widgets.$_$.r;
  var prepareSilkFoundation$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o1;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  //endregion
  //region block: pre-declaration
  //endregion
  function SilkApp$composable(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(766681329);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.iv(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.ju()) {
      if (isTraceInProgress()) {
        traceEventStart(766681329, $dirty, -1, 'com.varabyte.kobweb.silk.SilkApp$composable (SilkApp.kt:8)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.SilkApp$composable.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 1100068428, true, SilkApp$composable$lambda(content));
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
        // Inline function 'com.varabyte.kobweb.silk.SilkApp$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_0(dispatchReceiver);
        $composer_1.ev(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.nu();
      KobwebApp$composable(tmp0, $composer_0, 6);
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
      tmp0_safe_receiver.s19(SilkApp$composable$lambda_0(content, $changed));
    }
  }
  function SilkApp$composable$lambda$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.ju()) {
        if (isTraceInProgress()) {
          traceEventStart(456211017, $changed, -1, 'com.varabyte.kobweb.silk.SilkApp$composable.<anonymous>.<anonymous> (SilkApp.kt:11)');
        }
        setSilkWidgetVariables$composable(document, $composer_0, 0);
        $content($composer_0, 0);
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
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.s14(p0, p1);
    };
  }
  function SilkApp$composable$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.ju()) {
        if (isTraceInProgress()) {
          traceEventStart(1100068428, $changed, -1, 'com.varabyte.kobweb.silk.SilkApp$composable.<anonymous> (SilkApp.kt:10)');
        }
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.silk.SilkApp$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_0, 456211017, true, SilkApp$composable$lambda$lambda($content));
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
          // Inline function 'com.varabyte.kobweb.silk.SilkApp$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref(dispatchReceiver);
          $composer_1.ev(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_1.nu();
        prepareSilkFoundation$composable(null, tmp0, $composer_0, 48, 1);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_instance;
        }
        tmp = tmp_3;
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
  function SilkApp$composable$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      SilkApp$composable($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SilkApp$composable;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-kobweb-silk.js.map
