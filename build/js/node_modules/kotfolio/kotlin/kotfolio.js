(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-core.js', './kobweb-frontend-silk-foundation.js', './compose-multiplatform-core-runtime.js', './html-internal-html-core-runtime.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js', './kobweb-frontend-silk-widgets.js', './kobweb-frontend-silk-widgets-kobweb.js', './html-html-core.js', './kobweb-frontend-compose-html-ext.js', './kobweb-frontend-kobweb-silk.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './kobweb-frontend-kobweb-compose.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-core.js'), require('./kobweb-frontend-silk-foundation.js'), require('./compose-multiplatform-core-runtime.js'), require('./html-internal-html-core-runtime.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'), require('./kobweb-frontend-silk-widgets.js'), require('./kobweb-frontend-silk-widgets-kobweb.js'), require('./html-html-core.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kobweb-frontend-kobweb-silk.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./kobweb-frontend-kobweb-compose.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'com.rudra.kotfolio:site'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'com.rudra.kotfolio:site'.");
    }
    if (typeof this['kobweb-frontend-kobweb-core'] === 'undefined') {
      throw new Error("Error loading module 'com.rudra.kotfolio:site'. Its dependency 'kobweb-frontend-kobweb-core' was not found. Please, check whether 'kobweb-frontend-kobweb-core' is loaded prior to 'com.rudra.kotfolio:site'.");
    }
    if (typeof this['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'com.rudra.kotfolio:site'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'com.rudra.kotfolio:site'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'com.rudra.kotfolio:site'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'com.rudra.kotfolio:site'.");
    }
    if (typeof this['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'com.rudra.kotfolio:site'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'com.rudra.kotfolio:site'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'com.rudra.kotfolio:site'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'com.rudra.kotfolio:site'.");
    }
    if (typeof this['kobweb-frontend-silk-widgets'] === 'undefined') {
      throw new Error("Error loading module 'com.rudra.kotfolio:site'. Its dependency 'kobweb-frontend-silk-widgets' was not found. Please, check whether 'kobweb-frontend-silk-widgets' is loaded prior to 'com.rudra.kotfolio:site'.");
    }
    if (typeof this['kobweb-frontend-silk-widgets-kobweb'] === 'undefined') {
      throw new Error("Error loading module 'com.rudra.kotfolio:site'. Its dependency 'kobweb-frontend-silk-widgets-kobweb' was not found. Please, check whether 'kobweb-frontend-silk-widgets-kobweb' is loaded prior to 'com.rudra.kotfolio:site'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'com.rudra.kotfolio:site'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'com.rudra.kotfolio:site'.");
    }
    if (typeof this['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'com.rudra.kotfolio:site'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'com.rudra.kotfolio:site'.");
    }
    if (typeof this['kobweb-frontend-kobweb-silk'] === 'undefined') {
      throw new Error("Error loading module 'com.rudra.kotfolio:site'. Its dependency 'kobweb-frontend-kobweb-silk' was not found. Please, check whether 'kobweb-frontend-kobweb-silk' is loaded prior to 'com.rudra.kotfolio:site'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'com.rudra.kotfolio:site'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'com.rudra.kotfolio:site'.");
    }
    if (typeof this['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'com.rudra.kotfolio:site'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'com.rudra.kotfolio:site'.");
    }
    root['com.rudra.kotfolio:site'] = factory(typeof this['com.rudra.kotfolio:site'] === 'undefined' ? {} : this['com.rudra.kotfolio:site'], this['kotlin-kotlin-stdlib'], this['kobweb-frontend-kobweb-core'], this['kobweb-frontend-silk-foundation'], this['compose-multiplatform-core-runtime'], this['html-internal-html-core-runtime'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, this['kobweb-frontend-silk-widgets'], this['kobweb-frontend-silk-widgets-kobweb'], this['html-html-core'], this['kobweb-frontend-compose-html-ext'], this['kobweb-frontend-kobweb-silk'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kobweb-frontend-kobweb-compose']);
  }
}(this, function (_, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_core, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, kotlin_com_varabyte_kobweb_silk_widgets, kotlin_com_varabyte_kobweb_silk_widgets_kobweb, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_com_varabyte_kobweb_kobweb_silk, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_com_varabyte_kobweb_kobweb_compose) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var ensureNotNull = kotlin_kotlin.$_$.qe;
  var get_api = kotlin_com_varabyte_kobweb_kobweb_core.$_$.a;
  var Companion_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.j;
  var Router = kotlin_com_varabyte_kobweb_kobweb_core.$_$.f;
  var initKobweb = kotlin_com_varabyte_kobweb_kobweb_core.$_$.b;
  var set_additionalSilkInitialization = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e1;
  var removePrefix = kotlin_kotlin.$_$.lc;
  var UpdateHistoryMode_REPLACE_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.h;
  var AppGlobals_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.i;
  var to = kotlin_kotlin.$_$.bf;
  var mapOf = kotlin_kotlin.$_$.h7;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var renderComposable$composable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.e;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var Unit_getInstance = kotlin_kotlin.$_$.j4;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var THROW_CCE = kotlin_kotlin.$_$.yd;
  var renderWithDeferred$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d1;
  var protoOf = kotlin_kotlin.$_$.bb;
  var objectMeta = kotlin_kotlin.$_$.ab;
  var setMetadataFor = kotlin_kotlin.$_$.cb;
  var removeClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.d;
  var hasClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.c;
  var toString = kotlin_kotlin.$_$.af;
  var toInt = kotlin_kotlin.$_$.bd;
  var charSequenceLength = kotlin_kotlin.$_$.r9;
  var toBoolean = kotlin_kotlin.$_$.zc;
  var isBlank = kotlin_kotlin.$_$.fc;
  var VOID = kotlin_kotlin.$_$.e;
  var removeSuffix = kotlin_kotlin.$_$.mc;
  var initSilkWidgets = kotlin_com_varabyte_kobweb_silk_widgets.$_$.q;
  var initSilkWidgetsKobweb = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.f;
  var registerKeyframes = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b;
  var illegalDecoyCallException = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var Text$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.a6;
  var Code$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.k5;
  var GenericTag$composable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s2;
  var Li$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.u5;
  var Em$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.n5;
  var Link$composable = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.c;
  var H1$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.o5;
  var P$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.v5;
  var HorizontalDivider$composable = kotlin_com_varabyte_kobweb_silk_widgets.$_$.g;
  var H2$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.p5;
  var H3$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.q5;
  var H4$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.r5;
  var Ul$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.b6;
  var Pre$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.w5;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var valueOf = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k1;
  var ColorMode_DARK_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.v1;
  var SilkApp$composable = kotlin_com_varabyte_kobweb_kobweb_silk.$_$.a;
  var CoroutineImpl = kotlin_kotlin.$_$.d9;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var isInterface = kotlin_kotlin.$_$.na;
  var classMeta = kotlin_kotlin.$_$.s9;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z1;
  var LaunchedEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var get_SmoothColorStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.m;
  var toModifier$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z;
  var get_vh = kotlin_org_jetbrains_compose_html_html_core.$_$.e5;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z1;
  var Companion_getInstance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x3;
  var scrollBehavior = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t2;
  var Surface$composable = kotlin_com_varabyte_kobweb_silk_widgets.$_$.j;
  var SuspendFunction1 = kotlin_kotlin.$_$.e9;
  var registerStyleBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f1;
  var get_HorizontalDividerStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.h;
  var modifyComponentStyleBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o1;
  var Companion_getInstance_3 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j4;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.s3;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i1;
  var Companion_getInstance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y3;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y2;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s1;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j1;
  var get_color = kotlin_com_varabyte_kobweb_silk_widgets.$_$.t;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.x4;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l2;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.v4;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var ButtonVars_getInstance = kotlin_com_varabyte_kobweb_silk_widgets.$_$.w;
  var Colors_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v3;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v2;
  var fontFamily = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g1;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e1;
  var KProperty0 = kotlin_kotlin.$_$.rb;
  var getPropertyCallableRef = kotlin_kotlin.$_$.aa;
  var Companion_getInstance_5 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.y1;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q;
  var get_ButtonStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.b;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l;
  var Companion_getInstance_6 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u3;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.te;
  var set_background = kotlin_com_varabyte_kobweb_silk_widgets.$_$.s;
  var set_color = kotlin_com_varabyte_kobweb_silk_widgets.$_$.u;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k1;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x1;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w1;
  var Companion_getInstance_7 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o3;
  var fontWeight_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j1;
  var Companion_getInstance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v3;
  var overflowWrap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g2;
  var Companion_getInstance_9 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u3;
  var Companion_getInstance_10 = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b1;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var Companion_getInstance_11 = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t;
  var overflow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h2;
  var fillMaxSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d1;
  var Start_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e4;
  var Column$composable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b;
  var ComponentStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j;
  var maxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y1;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n3;
  var Svg$composable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r2;
  var rememberBreakpoint$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g1;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l3;
  var gridTemplateRows = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o1;
  var Center_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c4;
  var Box$composable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var Breakpoint_MD_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r1;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m2;
  var Stop$composable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q2;
  var RadialGradient$composable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o2;
  var _SvgId___init__impl__pmt7ru = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j3;
  var Defs$composable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j2;
  var get_fr = kotlin_org_jetbrains_compose_html_html_core.$_$.b4;
  var CenterHorizontally_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z3;
  var TopEnd_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g4;
  var Companion_getInstance_12 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w3;
  var pointerEvents = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o2;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j3;
  var get_vw = kotlin_org_jetbrains_compose_html_html_core.$_$.f5;
  var minWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a2;
  var gridRow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m1;
  var Companion_getInstance_13 = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var position = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p2;
  var top = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a3;
  var getStringHashCode = kotlin_kotlin.$_$.ba;
  var SpanText$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b1;
  var id = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q1;
  var Center_getInstance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q3;
  var Span$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.x5;
  var numColumns = kotlin_com_varabyte_kobweb_silk_widgets.$_$.k;
  var SimpleGrid$composable = kotlin_com_varabyte_kobweb_silk_widgets.$_$.i;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var MD_getInstance = kotlin_com_varabyte_kobweb_silk_widgets.$_$.v;
  var margin_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u1;
  var Button$composable = kotlin_com_varabyte_kobweb_silk_widgets.$_$.a;
  var CenterVertically_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b4;
  var Row$composable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var KMutableProperty0 = kotlin_kotlin.$_$.pb;
  var THROW_ISE = kotlin_kotlin.$_$.ae;
  var getLocalDelegateReference = kotlin_kotlin.$_$.y9;
  var padding_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var Spacer$composable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d;
  var Companion_getInstance_14 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n3;
  var fontSize_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h1;
  var rememberPageContext$composable = kotlin_com_varabyte_kobweb_kobweb_core.$_$.d;
  var Start_getInstance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s3;
  var Div$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.l5;
  var toAttrs$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.y;
  var get_s = kotlin_org_jetbrains_compose_html_html_core.$_$.a5;
  var Companion_getInstance_15 = kotlin_org_jetbrains_compose_html_html_core.$_$.f;
  var toAnimation$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c;
  var animation = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h;
  var CenterStart_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a4;
  var THROW_IAE = kotlin_kotlin.$_$.zd;
  var enumEntries = kotlin_kotlin.$_$.i9;
  var Enum = kotlin_kotlin.$_$.nd;
  var HamburgerIcon$composable = kotlin_com_varabyte_kobweb_silk_widgets.$_$.d;
  var CloseIcon$composable = kotlin_com_varabyte_kobweb_silk_widgets.$_$.c;
  var gap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var displayUntil = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f;
  var displayIfAtLeast = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e;
  var SpaceBetween_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r3;
  var get_UndecoratedLinkVariant = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.e;
  var get_UncoloredLinkVariant = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.d;
  var OverlayVars_getInstance = kotlin_com_varabyte_kobweb_silk_widgets.$_$.x;
  var onClick = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d2;
  var Overlay$composable = kotlin_com_varabyte_kobweb_silk_widgets.$_$.l;
  var rgba = kotlin_org_jetbrains_compose_html_html_core.$_$.y4;
  var background = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n;
  var blur = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a;
  var backdropFilter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k;
  var translateX = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d3;
  var SunIcon$composable = kotlin_com_varabyte_kobweb_silk_widgets.$_$.f;
  var MoonIcon$composable = kotlin_com_varabyte_kobweb_silk_widgets.$_$.e;
  var padding_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k2;
  var End_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d4;
  var fillMaxHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c1;
  var clamp = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c;
  var CenterEnd_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y3;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.s4;
  var Companion_getInstance_16 = kotlin_org_jetbrains_compose_html_html_core.$_$.d;
  var Companion_getInstance_17 = kotlin_org_jetbrains_compose_html_html_core.$_$.e;
  var borderRadius_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q;
  var onAnimationEnd = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c2;
  var Keyframes = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a;
  var size = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w2;
  var Image$composable = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.b;
  var Companion_getInstance_18 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s3;
  var mixBlendMode = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j1;
  var margin_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v1;
  var Breakpoint_ZERO_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u1;
  var Breakpoint_SM_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s1;
  var Breakpoint_LG_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q1;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p1;
  var scale = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r2;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u;
  var Companion_getInstance_19 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a4;
  var CSSTransition = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f;
  var transition = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b3;
  var opacity = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e2;
  var Image$composable_0 = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.a;
  var filter = kotlin_org_jetbrains_compose_html_html_core.$_$.v3;
  var zIndex = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k3;
  var Bottom_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p3;
  var Companion_getInstance_20 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m3;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a1;
  var CSSTransition_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i3;
  var translateY = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e3;
  var Companion_getInstance_21 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d4;
  var visibility = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h3;
  var toAnimation = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d;
  var Direction_ToBottomRight_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a3;
  var linearGradient = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d;
  var backgroundImage = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m;
  var get_em = kotlin_org_jetbrains_compose_html_html_core.$_$.u3;
  var scale_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s2;
  var BottomEnd_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w3;
  var Bottom_getInstance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x3;
  var Top_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i4;
  var TopStart_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h4;
  var ColorScheme = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l1;
  var Pair = kotlin_kotlin.$_$.vd;
  var listOf = kotlin_kotlin.$_$.f7;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt', objectMeta);
  setMetadataFor(ComposableSingletons$AboutKt, 'ComposableSingletons$AboutKt', objectMeta);
  setMetadataFor(AppEntry$composable$lambda$slambda, 'AppEntry$composable$lambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(Brand, 'Brand', classMeta, VOID, VOID, Brand);
  setMetadataFor(SitePalette, 'SitePalette', classMeta);
  setMetadataFor(SitePalettes, 'SitePalettes', objectMeta);
  setMetadataFor(PageLayout$composable$slambda, 'PageLayout$composable$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(WorkExperience, 'WorkExperience', classMeta);
  setMetadataFor(ComposableSingletons$AboutKt_0, 'ComposableSingletons$AboutKt', objectMeta);
  setMetadataFor(ComposableSingletons$ExperienceKt, 'ComposableSingletons$ExperienceKt', objectMeta);
  setMetadataFor(ComposableSingletons$FooterKt, 'ComposableSingletons$FooterKt', objectMeta);
  setMetadataFor(ComposableSingletons$HomeKt, 'ComposableSingletons$HomeKt', objectMeta);
  setMetadataFor(SideMenuState, 'SideMenuState', classMeta, Enum);
  setMetadataFor(ComposableSingletons$NavHeaderKt, 'ComposableSingletons$NavHeaderKt', objectMeta);
  setMetadataFor(ComposableSingletons$ProjectsKt, 'ComposableSingletons$ProjectsKt', objectMeta);
  setMetadataFor(ComposableSingletons$SkillsAndToolsKt, 'ComposableSingletons$SkillsAndToolsKt', objectMeta);
  setMetadataFor(BackToTopButton$composable$slambda, 'BackToTopButton$composable$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(ComposableSingletons$RoundedImageKt, 'ComposableSingletons$RoundedImageKt', objectMeta);
  setMetadataFor(ComposableSingletons$IndexKt, 'ComposableSingletons$IndexKt', objectMeta);
  setMetadataFor(Constants, 'Constants', objectMeta);
  setMetadataFor(CustomColorSchemes$BlackAndWhite$1, VOID, classMeta, VOID, [ColorScheme]);
  setMetadataFor(CustomColorSchemes, 'CustomColorSchemes', objectMeta);
  setMetadataFor(Images, 'Images', objectMeta);
  setMetadataFor(Fonts, 'Fonts', objectMeta);
  setMetadataFor(Colors, 'Colors', objectMeta);
  setMetadataFor(Res, 'Res', objectMeta);
  //endregion
  function forceReloadNow() {
    window.stop();
    window.location.reload();
  }
  function handleServerStatusEvents() {
    var status = ensureNotNull(document.getElementById('status'));
    var lastVersion = {_v: null};
    var shouldReload = {_v: false};
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = status.children[0];
    var warningIcon = ensureNotNull(tmp$ret$1);
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = status.children[1];
    var spinnerIcon = ensureNotNull(tmp$ret$3);
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = status.children[2];
    var statusText = ensureNotNull(tmp$ret$5);
    status.addEventListener('transitionend', handleServerStatusEvents$lambda(status, shouldReload));
    // Inline function 'org.w3c.dom.EventSourceInit' call
    var o = {};
    o['withCredentials'] = true;
    var eventSource = new EventSource('/api/kobweb-status', o);
    eventSource.addEventListener('version', handleServerStatusEvents$lambda_0(lastVersion, status, shouldReload));
    eventSource.addEventListener('status', handleServerStatusEvents$lambda_1(warningIcon, spinnerIcon, statusText, status));
    eventSource.onerror = handleServerStatusEvents$lambda_2(eventSource);
  }
  function main() {
    handleServerStatusEvents();
    get_api(window).set_logOnError_wi584t_k$(true);
    Companion_getInstance().set_wjk6wo_k$('');
    var router = new Router();
    initKobweb(router, main$lambda);
    router.addRouteInterceptor_kgq7h7_k$(main$lambda_0);
    set_additionalSilkInitialization(main$lambda_1);
    router.navigateTo$default_onbd51_k$(removePrefix(window.location.href, window.location.origin), UpdateHistoryMode_REPLACE_getInstance());
    var root = ensureNotNull(document.getElementById('root'));
    while (!(root.firstChild == null)) {
      root.removeChild(ensureNotNull(root.firstChild));
    }
    AppGlobals_getInstance().initialize_8ufbf0_k$(mapOf(to('title', 'Kotfolio')));
    renderComposable$composable('root', ComposableLambda$invoke$ref_3(composableLambdaInstance(1108811911, true, main$lambda_2(router))));
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-994802423, $changed, -1, 'ComposableSingletons$MainKt.lambda-1.<anonymous> (main.kt:86)');
      }
      HomePage$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_2$lambda_dts8wk($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1296252800, $changed, -1, 'ComposableSingletons$MainKt.lambda-2.<anonymous> (main.kt:87)');
      }
      AboutPage$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_3$lambda_ezu85n(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(it) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1940211355, $dirty, -1, 'ComposableSingletons$MainKt.lambda-3.<anonymous> (main.kt:142)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ComposableSingletons$MainKt.lambda-3.<anonymous>.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 2103839155, true, ComposableSingletons$MainKt$lambda_3$lambda$lambda_g9fe80(it));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'ComposableSingletons$MainKt.lambda-3.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_2(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it_0;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      renderWithDeferred$composable(tmp0, $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt$lambda_3$lambda$lambda_g9fe80($it) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(2103839155, $changed, -1, 'ComposableSingletons$MainKt.lambda-3.<anonymous>.<anonymous> (main.kt:142)');
        }
        $it($composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-994802423, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-1296252800, false, ComposableSingletons$MainKt$lambda_2$lambda_dts8wk));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(1940211355, false, ComposableSingletons$MainKt$lambda_3$lambda_ezu85n));
  }
  protoOf(ComposableSingletons$MainKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_3_bzdzzq_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function handleServerStatusEvents$lambda($status, $shouldReload) {
    return function (it) {
      var tmp;
      if (hasClass($status, 'fade-out')) {
        removeClass($status, ['fade-out']);
        var tmp_0;
        if ($shouldReload._v) {
          forceReloadNow();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      }
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda_0($lastVersion, $status, $shouldReload) {
    return function (evt) {
      var version = toInt(toString((evt instanceof MessageEvent ? evt : THROW_CCE()).data));
      var tmp;
      if ($lastVersion._v == null) {
        $lastVersion._v = version;
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!($lastVersion._v === version)) {
        $lastVersion._v = version;
        var tmp_1;
        // Inline function 'kotlin.text.isNotEmpty' call
        var this_0 = $status.className;
        if (charSequenceLength(this_0) > 0) {
          $shouldReload._v = true;
          tmp_1 = Unit_getInstance();
        } else {
          forceReloadNow();
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      }
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda_1($warningIcon, $spinnerIcon, $statusText, $status) {
    return function (evt) {
      var tmp = JSON;
      var values = tmp.parse(toString((evt instanceof MessageEvent ? evt : THROW_CCE()).data));
      var tmp_0 = values.text;
      var text = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : THROW_CCE();
      var tmp_1 = values.isError;
      var isError = toBoolean((!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE());
      var tmp_2;
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(text)) {
        $warningIcon.className = isError ? 'visible' : 'hidden';
        $spinnerIcon.className = isError ? 'hidden' : 'visible';
        $statusText.innerHTML = '<i>' + text + '<\/i>';
        $status.className = 'fade-in';
        tmp_2 = Unit_getInstance();
      } else {
        var tmp_3;
        if ($status.className === 'fade-in') {
          $status.className = 'fade-out';
          tmp_3 = Unit_getInstance();
        }
        tmp_2 = tmp_3;
      }
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda_2($eventSource) {
    return function (it) {
      $eventSource.close();
      return Unit_getInstance();
    };
  }
  function main$lambda(ctx) {
    ctx.get_router_j3zccy_k$().register$composable$default_1eoqzg_k$('/', VOID, ComposableSingletons$MainKt_getInstance().lambda_1_r8sbbp_1);
    ctx.get_router_j3zccy_k$().register$composable$default_1eoqzg_k$('/about', VOID, ComposableSingletons$MainKt_getInstance().lambda_2_r8sbbo_1);
    return Unit_getInstance();
  }
  function main$lambda_0($this$addRouteInterceptor) {
    $this$addRouteInterceptor.set_path_tgrnnc_k$(removeSuffix(removeSuffix($this$addRouteInterceptor.get_path_wos8ry_k$(), '.html'), '.htm'));
    return Unit_getInstance();
  }
  function main$lambda_1(ctx) {
    initSilkWidgets(ctx);
    initSilkWidgetsKobweb(ctx);
    ctx.get_theme_iz24rk_k$().registerComponentStyle_covb7k_k$(get_HeadlineTextStyle());
    ctx.get_theme_iz24rk_k$().registerComponentStyle_covb7k_k$(get_SubheadlineTextStyle());
    ctx.get_theme_iz24rk_k$().registerComponentStyle_covb7k_k$(get_MarkdownStyle());
    ctx.get_theme_iz24rk_k$().registerComponentStyle_covb7k_k$(get_PageContentStyle());
    ctx.get_theme_iz24rk_k$().registerComponentStyle_covb7k_k$(get_FooterStyle());
    ctx.get_theme_iz24rk_k$().registerComponentStyle_covb7k_k$(get_NavHeaderStyle());
    ctx.get_theme_iz24rk_k$().registerComponentStyle_covb7k_k$(get_AboutStyle());
    ctx.get_theme_iz24rk_k$().registerComponentStyle_covb7k_k$(get_BackgroundImageStyle());
    ctx.get_theme_iz24rk_k$().registerComponentStyle_covb7k_k$(get_ButtonStyle_0());
    ctx.get_theme_iz24rk_k$().registerComponentStyle_covb7k_k$(get_HeroSectionStyle());
    ctx.get_theme_iz24rk_k$().registerComponentStyle_covb7k_k$(get_HelloImStyle());
    ctx.get_theme_iz24rk_k$().registerComponentStyle_covb7k_k$(get_UserNameStyle());
    ctx.get_theme_iz24rk_k$().registerComponentStyle_covb7k_k$(get_UsersMessageStyle());
    ctx.get_theme_iz24rk_k$().registerComponentStyle_covb7k_k$(get_ProjectStyle());
    ctx.get_theme_iz24rk_k$().registerComponentStyle_covb7k_k$(get_SectionTitleStyle());
    ctx.get_theme_iz24rk_k$().registerComponentStyle_covb7k_k$(get_SectionDescriptionStyle());
    ctx.get_theme_iz24rk_k$().registerComponentStyle_covb7k_k$(get_WorkExperienceItemRoleAndDurationStyle());
    ctx.get_theme_iz24rk_k$().registerComponentStyle_covb7k_k$(get_WorkExperienceItemOrgStyle());
    ctx.get_theme_iz24rk_k$().registerComponentStyle_covb7k_k$(get_ExperienceStyle());
    ctx.get_theme_iz24rk_k$().registerComponentStyle_covb7k_k$(get_ArrowUpStyle());
    ctx.get_theme_iz24rk_k$().registerComponentStyle_covb7k_k$(get_BackToTopButtonStyle());
    ctx.get_theme_iz24rk_k$().registerComponentStyle_covb7k_k$(get_FooterIconsStyle());
    ctx.get_theme_iz24rk_k$().registerComponentVariants_gvd8pt_k$([get_CircleButtonVariant()]);
    ctx.get_theme_iz24rk_k$().registerComponentVariants_gvd8pt_k$([get_UncoloredButtonVariant()]);
    registerKeyframes(ctx.get_stylesheet_hk204p_k$(), get_SideMenuSlideInAnim());
    registerKeyframes(ctx.get_stylesheet_hk204p_k$(), get_HeroContainerKeyFrames());
    registerKeyframes(ctx.get_stylesheet_hk204p_k$(), get_FadeInKeyFrames());
    initColorMode(ctx);
    initSiteStyles(ctx);
    initTheme(ctx);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function main$lambda$lambda($router) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1190994075, $changed, -1, 'main.<anonymous>.<anonymous> (main.kt:142)');
        }
        $router.renderActivePage$composable_z512mx_k$(ComposableSingletons$MainKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 6, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function main$lambda_2($router) {
    return function ($this$renderComposable, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1108811911, $changed, -1, 'main.<anonymous> (main.kt:141)');
        }
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'main.<anonymous>.<anonymous>' call
        var tmp_0 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_0, -1190994075, true, main$lambda$lambda($router));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'main.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_4(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        AppEntry$composable(tmp0, $composer_0, 6);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function AboutPage() {
    illegalDecoyCallException('AboutPage');
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_1$lambda_irurs3($this$H1, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1227741761, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-1.<anonymous> (About.kt:11)');
      }
      Text$composable('About this template', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_2$lambda_nfmt4u($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-578375394, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-2.<anonymous> (About.kt:14)');
      }
      Text$composable('This template is intended to both demonstrate some fundamentals of the Kobweb framework and act a starting point you can build your own site from.', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_3$lambda_5dznxd($this$H2, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-992063586, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-3.<anonymous> (About.kt:18)');
      }
      Text$composable('Learn', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_4$lambda_y7m4zk($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-817305529, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-4.<anonymous> (About.kt:21)');
      }
      Text$composable("If this is your first time using Kobweb, please open this site's project in an IDE and take a few minutes to look around the code.", $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_5$lambda_7zvfxd($this$H3, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-756385411, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-5.<anonymous> (About.kt:24)');
      }
      Text$composable('Files', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_6$lambda_ktr14u($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-520707236, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-6.<anonymous> (About.kt:27)');
      }
      Text$composable('AppEntry.kt', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_7$lambda_ldqjs3($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-916221755, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-7.<anonymous> (About.kt:32)');
      }
      Text$composable('@App', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_8$lambda_7fvxa4($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-581627354, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-8.<anonymous> (About.kt:30)');
      }
      Text$composable('This file declares a method that is an entry point for all pages on your site. You can rename the file and the method if you like. Kobweb searches for a single method at compile time annotated with ', $composer_0, 6);
      Code$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_7_r8sbbj_1, $composer_0, 48, 1);
      Text$composable('.', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_9$lambda_yrlnmt($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1232780539, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-9.<anonymous> (About.kt:37)');
      }
      Text$composable('AppStyles.kt', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_10$lambda_i5qkjn($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-345949179, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-10.<anonymous> (About.kt:40)');
      }
      Text$composable('An example of declaring generally useful styles that can be used anywhere across the whole site. Otherwise, you normally declare styles close to the widget that uses them.', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_11$lambda_o1r0da($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-997102364, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-11.<anonymous> (About.kt:43)');
      }
      Text$composable('SiteTheme.kt', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_12$lambda_4rvgox($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-110271004, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-12.<anonymous> (About.kt:46)');
      }
      Text$composable('An example of how to define some site-specific colors, effectively extending the palette provided by Silk.', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_13$lambda_xlhxr4($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-761424189, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-13.<anonymous> (About.kt:49)');
      }
      Text$composable('components/', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_14$lambda_8lzn5t($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(125407171, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-14.<anonymous> (About.kt:52)');
      }
      Text$composable('By convention, Kobweb codebases organize reusable site components under this folder. Within it, you have:', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_15$lambda_k7mtwe($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1761982625, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-15.<anonymous> (About.kt:57)');
      }
      Text$composable('layout/', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_16$lambda_lzur0j($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1598778366, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-16.<anonymous> (About.kt:56)');
      }
      Code$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_15_7sywoa_1, $composer_0, 48, 1);
      GenericTag$composable('br', null, null, $composer_0, 54, 4);
      Text$composable(' Represents top-level organization for pages', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_17$lambda_6trq1o($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-920350696, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-17.<anonymous> (About.kt:64)');
      }
      Text$composable('sections/', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_22($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_18$lambda_zdpuv9($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-796256455, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-18.<anonymous> (About.kt:63)');
      }
      Code$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_17_7sywoc_1, $composer_0, 48, 1);
      GenericTag$composable('br', null, null, $composer_0, 54, 4);
      Text$composable(' Areas of content that appear across multiple pages (such as nav bars and footers)', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_19$lambda_6k3dt2($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-218416103, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-19.<anonymous> (About.kt:71)');
      }
      Text$composable('widgets/', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_20$lambda_bqdg8s($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-94321862, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-20.<anonymous> (About.kt:70)');
      }
      Code$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_19_7sywoe_1, $composer_0, 48, 1);
      GenericTag$composable('br', null, null, $composer_0, 54, 4);
      Text$composable(' Home for low-level UI pieces that you can use around your site', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_25($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_21$lambda_h390tf($this$Ul, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(281392689, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-21.<anonymous> (About.kt:55)');
      }
      Li$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_16_7sywob_1, $composer_0, 48, 1);
      Li$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_18_7sywod_1, $composer_0, 48, 1);
      Li$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_20_7sywp0__1, $composer_0, 48, 1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_26($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_22$lambda_p48k3i($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-525746014, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-22.<anonymous> (About.kt:78)');
      }
      Text$composable('pages/', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_27($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_23$lambda_3pdwyp($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(26490945, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-23.<anonymous> (About.kt:83)');
      }
      Text$composable('@Composable', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_28($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_24$lambda_wj0e0w($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-896546838, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-24.<anonymous> (About.kt:87)');
      }
      Text$composable('@Page', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_29($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_25$lambda_9oh6w1($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-611410935, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-25.<anonymous> (About.kt:91)');
      }
      Text$composable('resources/markdown', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_30($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_26$lambda_j55a66($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(361085346, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-26.<anonymous> (About.kt:81)');
      }
      Text$composable('Any ', $composer_0, 6);
      Code$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_23_7sywp3__1, $composer_0, 48, 1);
      Text$composable(' under this folder additionally tagged with ', $composer_0, 6);
      Code$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_24_7sywp4__1, $composer_0, 48, 1);
      Text$composable(' will have a route generated for it automatically. Defining a page outside of this folder will be flagged as an error by the Kobweb Gradle plugin at compile time. Note that additional pages (like this one!) might live under the ', $composer_0, 6);
      Code$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_25_7sywp5__1, $composer_0, 48, 1);
      Text$composable(' folder.', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_31($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_27$lambda_n2caqr($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-290067839, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-27.<anonymous> (About.kt:96)');
      }
      Text$composable('resources/', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_32($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_28$lambda_5ra6bg($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1998854922, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-28.<anonymous> (About.kt:101)');
      }
      Text$composable('public', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_33($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_29$lambda_ykwndn($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(2122949163, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-29.<anonymous> (About.kt:100)');
      }
      Code$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_28_7sywp8__1, $composer_0, 48, 1);
      GenericTag$composable('br', null, null, $composer_0, 54, 4);
      Text$composable(' If you want to host any media on your site (such as an icon, an image, text configuration files, movies, fonts, etc.), you should put it under this folder.', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_34($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_30$lambda_temkxx($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1256911041, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-30.<anonymous> (About.kt:108)');
      }
      Text$composable('markdown', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_35($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_31$lambda_csuzz0($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(252392354, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-31.<anonymous> (About.kt:107)');
      }
      Code$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_30_7sywpv_1, $composer_0, 48, 1);
      GenericTag$composable('br', null, null, $composer_0, 54, 4);
      Text$composable(' Any markdown discovered in here by Kobweb at compile time will be converted into pages on your site.', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_36($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_32$lambda_g0rh37($this$Ul, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(786101402, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-32.<anonymous> (About.kt:99)');
      }
      Li$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_29_7sywp9__1, $composer_0, 48, 1);
      Li$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_31_7sywpw_1, $composer_0, 48, 1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_37($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_33$lambda_q6q3tq($this$H3, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-86240026, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-33.<anonymous> (About.kt:115)');
      }
      Text$composable('Classes', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_38($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_34$lambda_2mwd8h($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(596763521, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-34.<anonymous> (About.kt:118)');
      }
      Text$composable('The Kobweb and Silk APIs introduce a lot of powerful concepts. Here are some of the most important ones to know about which you can find used throughout this template.', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_39($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_35$lambda_vgiuao($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-54389664, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-35.<anonymous> (About.kt:121)');
      }
      Text$composable('Modifier', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_40($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_36$lambda_aqyqm9($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(497847295, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-36.<anonymous> (About.kt:126)');
      }
      Text$composable('Modifier', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_41($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_37$lambda_i2nqfy($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(832441696, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-37.<anonymous> (About.kt:124)');
      }
      Text$composable('Kobweb introduces the ', $composer_0, 6);
      Code$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_36_7sywq1__1, $composer_0, 48, 1);
      Text$composable(' keyword that Android developers will recognize from the Jetpack Compose API. In a webdev context, this is used for setting CSS styles and html attributes on elements in the page.', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_42($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_38$lambda_o4tugz($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(181288511, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-38.<anonymous> (About.kt:131)');
      }
      Text$composable('ComponentStyle', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_43($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_39$lambda_4osml8($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(733525470, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-39.<anonymous> (About.kt:136)');
      }
      Text$composable('ComponentStyle', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_44($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_40$lambda_hhfui($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1068119871, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-40.<anonymous> (About.kt:134)');
      }
      Text$composable('Traditional HTML pages use CSS to style their UI. In Kobweb, these styles can be declared using the ', $composer_0, 6);
      Code$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_39_7sywq4__1, $composer_0, 48, 1);
      Text$composable(' class in a Kotlin-idiomatic way. You can find examples of component styles used throughout the template.', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_45($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_41$lambda_sc517p($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(416966686, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-41.<anonymous> (About.kt:141)');
      }
      Text$composable('ComponentVariant', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_46($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_42$lambda_dvcjp8($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1961674273, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-42.<anonymous> (About.kt:144)');
      }
      Text$composable('You can generate variants from component styles, which are ways to take base component styles and tweak them further.', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_47($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_43$lambda_ey9xcz($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(652644861, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-43.<anonymous> (About.kt:147)');
      }
      Text$composable('Keyframes', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_48($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_44$lambda_r97njy($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1725996098, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-44.<anonymous> (About.kt:150)');
      }
      Text$composable('You can create animations by declaring keyframes for them.', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_49($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_45$lambda_1keti9($this$H2, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1060300487, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-45.<anonymous> (About.kt:153)');
      }
      Text$composable('Starting Point', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_50($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_46$lambda_ue1akg($this$Em, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1710162023, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-46.<anonymous> (About.kt:158)');
      }
      Text$composable('About', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_51($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_47$lambda_btgach($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1490317923, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-47.<anonymous> (About.kt:156)');
      }
      Text$composable('This template aims to create some generally useful pieces that most sites will want to use. Making your own site could be as easy as deleting this ', $composer_0, 6);
      Em$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_46_7sywqw_1, $composer_0, 48, 1);
      Text$composable(" page and working from there. However, you are welcome to modify or delete anything you find in the template that you don't plan to use in your final site.", $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_52($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_48$lambda_h066pq($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1254639748, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-48.<anonymous> (About.kt:163)');
      }
      Text$composable("If instead you'd like to start from scratch, you can run", $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_53($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_49$lambda_p7be77($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-666118038, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-49.<anonymous> (About.kt:165)');
      }
      Text$composable('$ kobweb create app/empty\n', $composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_54($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_50$lambda_udlgmx($this$Pre, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-331523637, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-50.<anonymous> (About.kt:165)');
      }
      Code$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_49_7sywqz_1, $composer_0, 48, 1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_55($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_51$lambda_1jyzkq($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1018961573, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-51.<anonymous> (About.kt:168)');
      }
      Text$composable('which will create a new project with nothing inside of it except for a minimal, skeletal structure.', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_56($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_52$lambda_r9nhhh($this$H2, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1295978662, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-52.<anonymous> (About.kt:171)');
      }
      Text$composable('Export and Deploy', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_57($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_53$lambda_exu3fg($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-783283398, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-53.<anonymous> (About.kt:174)');
      }
      Text$composable("When you are ready to share your site with the world, you'll want to export it first. This will create a production snapshot of your site.", $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_58($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_54$lambda_dvsdmr($this$Em, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-767449323, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-54.<anonymous> (About.kt:179)');
      }
      Text$composable('static layout', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_59($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_55$lambda_sbp7a6($this$Em, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1881393612, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-55.<anonymous> (About.kt:183)');
      }
      Text$composable('full stack', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_60($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_56$lambda_hx9s1($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-547605223, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-56.<anonymous> (About.kt:177)');
      }
      Text$composable('There are two flavors of Kobweb sites: ', $composer_0, 6);
      Em$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_54_7sywrp_1, $composer_0, 48, 1);
      Text$composable(' and ', $composer_0, 6);
      Em$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_55_7sywrq_1, $composer_0, 48, 1);
      Text$composable('. You can ', $composer_0, 6);
      Link$composable('https://github.com/varabyte/kobweb#static-layout-vs-full-stack-sites', 'read more about these choices here', null, null, null, null, false, null, $composer_0, 54, 252);
      Text$composable('.', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_61($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_57$lambda_tbjqu8($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-311927048, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-57.<anonymous> (About.kt:190)');
      }
      Text$composable('For most sites, a static layout site is what you want, so to do that, return to the command line and run:', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_62($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_58$lambda_cvxu2p($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(761359507, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-58.<anonymous> (About.kt:192)');
      }
      Text$composable('$ kobweb export --layout static\n', $composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_63($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_59$lambda_fxomzi($this$Pre, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(184031668, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-59.<anonymous> (About.kt:192)');
      }
      Code$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_58_7sywrt_1, $composer_0, 48, 1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_64($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_60$lambda_arekjs($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1858740712, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-60.<anonymous> (About.kt:197)');
      }
      Text$composable('.kobweb/site', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_65($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_61$lambda_vg30d5($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-76248873, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-61.<anonymous> (About.kt:195)');
      }
      Text$composable('After that runs for a little while, your production site should be generated! You can find the files under the ', $composer_0, 6);
      Code$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_60_7sywsg_1, $composer_0, 48, 1);
      Text$composable(' folder.', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_66($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_62$lambda_2mgjay($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(159429302, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-62.<anonymous> (About.kt:202)');
      }
      Text$composable('Test it locally by running:', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_67($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_63$lambda_q75xr9($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(997037682, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-63.<anonymous> (About.kt:204)');
      }
      Text$composable('$ kobweb run --layout static --env prod\n', $composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_68($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_64$lambda_g0bn5o($this$Pre, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(419709843, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-64.<anonymous> (About.kt:204)');
      }
      Code$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_63_7sywsj_1, $composer_0, 48, 1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_69($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_65$lambda_ctatwj($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1049381856, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-65.<anonymous> (About.kt:207)');
      }
      Text$composable("If you're satisfied, you can upload your site files to the static website host provider of your choice. Each provider has its own instructions for how it discovers your files, so please refer to their documentation.", $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_70($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_66$lambda_te6r0e($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1285060031, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-66.<anonymous> (About.kt:210)');
      }
      Text$composable('You can ', $composer_0, 6);
      Link$composable('https://bitspittle.dev/blog/2022/staticdeploy', 'read this blog post', null, null, null, null, false, null, $composer_0, 54, 252);
      Text$composable(' for some concrete examples of exporting a Kobweb site to two popular static website hosting providers.', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_71($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda_67$lambda_kk9y7($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1632241540, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-67.<anonymous> (About.kt:10)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(-1089229591);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-67.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$AboutKt$lambda_67$lambda$lambda_qwce6u;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      H1$composable(tmpCache, ComposableSingletons$AboutKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 48, 0);
      P$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 48, 1);
      HorizontalDivider$composable(null, null, $composer_0, 0, 3);
      $composer_0.startReplaceableGroup_ip860b_k$(-1089229109);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-67.<anonymous>.<anonymous>' call
        var value_0 = ComposableSingletons$AboutKt$lambda_67$lambda$lambda_qwce6u_0;
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmpCache_0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      H2$composable(tmpCache_0, ComposableSingletons$AboutKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 48, 0);
      P$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_4_r8sbbm_1, $composer_0, 48, 1);
      $composer_0.startReplaceableGroup_ip860b_k$(-1089228742);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false ? true : it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-67.<anonymous>.<anonymous>' call
        var value_1 = ComposableSingletons$AboutKt$lambda_67$lambda$lambda_qwce6u_1;
        $composer_0.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmpCache_1 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      H3$composable(tmpCache_1, ComposableSingletons$AboutKt_getInstance().lambda_5_r8sbbl_1, $composer_0, 48, 0);
      $composer_0.startReplaceableGroup_ip860b_k$(-1089228608);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (false ? true : it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-67.<anonymous>.<anonymous>' call
        var value_2 = ComposableSingletons$AboutKt$lambda_67$lambda$lambda_qwce6u_2;
        $composer_0.updateRememberedValue_l1wh71_k$(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmpCache_2 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      H4$composable(tmpCache_2, ComposableSingletons$AboutKt_getInstance().lambda_6_r8sbbk_1, $composer_0, 48, 0);
      P$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_8_r8sbbi_1, $composer_0, 48, 1);
      $composer_0.startReplaceableGroup_ip860b_k$(-1089227987);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_7;
      if (false ? true : it_3 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-67.<anonymous>.<anonymous>' call
        var value_3 = ComposableSingletons$AboutKt$lambda_67$lambda$lambda_qwce6u_3;
        $composer_0.updateRememberedValue_l1wh71_k$(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = it_3;
      }
      var tmp_8 = tmp_7;
      var tmpCache_3 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      H4$composable(tmpCache_3, ComposableSingletons$AboutKt_getInstance().lambda_9_r8sbbh_1, $composer_0, 48, 0);
      P$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_10_7sywo5__1, $composer_0, 48, 1);
      $composer_0.startReplaceableGroup_ip860b_k$(-1089227565);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_4 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_9;
      if (false ? true : it_4 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-67.<anonymous>.<anonymous>' call
        var value_4 = ComposableSingletons$AboutKt$lambda_67$lambda$lambda_qwce6u_4;
        $composer_0.updateRememberedValue_l1wh71_k$(value_4);
        tmp_9 = value_4;
      } else {
        tmp_9 = it_4;
      }
      var tmp_10 = tmp_9;
      var tmpCache_4 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      H4$composable(tmpCache_4, ComposableSingletons$AboutKt_getInstance().lambda_11_7sywo6__1, $composer_0, 48, 0);
      P$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_12_7sywo7__1, $composer_0, 48, 1);
      $composer_0.startReplaceableGroup_ip860b_k$(-1089227208);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_5 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_11;
      if (false ? true : it_5 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-67.<anonymous>.<anonymous>' call
        var value_5 = ComposableSingletons$AboutKt$lambda_67$lambda$lambda_qwce6u_5;
        $composer_0.updateRememberedValue_l1wh71_k$(value_5);
        tmp_11 = value_5;
      } else {
        tmp_11 = it_5;
      }
      var tmp_12 = tmp_11;
      var tmpCache_5 = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      H4$composable(tmpCache_5, ComposableSingletons$AboutKt_getInstance().lambda_13_7sywo8__1, $composer_0, 48, 0);
      P$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_14_7sywo9__1, $composer_0, 48, 1);
      Ul$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_21_7sywp1__1, $composer_0, 48, 1);
      $composer_0.startReplaceableGroup_ip860b_k$(-1089225638);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_6 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_13;
      if (false ? true : it_6 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-67.<anonymous>.<anonymous>' call
        var value_6 = ComposableSingletons$AboutKt$lambda_67$lambda$lambda_qwce6u_6;
        $composer_0.updateRememberedValue_l1wh71_k$(value_6);
        tmp_13 = value_6;
      } else {
        tmp_13 = it_6;
      }
      var tmp_14 = tmp_13;
      var tmpCache_6 = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      H4$composable(tmpCache_6, ComposableSingletons$AboutKt_getInstance().lambda_22_7sywp2__1, $composer_0, 48, 0);
      P$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_26_7sywp6__1, $composer_0, 48, 1);
      $composer_0.startReplaceableGroup_ip860b_k$(-1089224575);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_7 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_15;
      if (false ? true : it_7 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-67.<anonymous>.<anonymous>' call
        var value_7 = ComposableSingletons$AboutKt$lambda_67$lambda$lambda_qwce6u_7;
        $composer_0.updateRememberedValue_l1wh71_k$(value_7);
        tmp_15 = value_7;
      } else {
        tmp_15 = it_7;
      }
      var tmp_16 = tmp_15;
      var tmpCache_7 = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      H4$composable(tmpCache_7, ComposableSingletons$AboutKt_getInstance().lambda_27_7sywp7__1, $composer_0, 48, 0);
      Ul$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_32_7sywpx_1, $composer_0, 48, 1);
      $composer_0.startReplaceableGroup_ip860b_k$(-1089223474);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_8 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_17;
      if (false ? true : it_8 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-67.<anonymous>.<anonymous>' call
        var value_8 = ComposableSingletons$AboutKt$lambda_67$lambda$lambda_qwce6u_8;
        $composer_0.updateRememberedValue_l1wh71_k$(value_8);
        tmp_17 = value_8;
      } else {
        tmp_17 = it_8;
      }
      var tmp_18 = tmp_17;
      var tmpCache_8 = (tmp_18 == null ? true : !(tmp_18 == null)) ? tmp_18 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      H3$composable(tmpCache_8, ComposableSingletons$AboutKt_getInstance().lambda_33_7sywpy_1, $composer_0, 48, 0);
      P$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_34_7sywpz_1, $composer_0, 48, 1);
      $composer_0.startReplaceableGroup_ip860b_k$(-1089223066);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_9 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_19;
      if (false ? true : it_9 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-67.<anonymous>.<anonymous>' call
        var value_9 = ComposableSingletons$AboutKt$lambda_67$lambda$lambda_qwce6u_9;
        $composer_0.updateRememberedValue_l1wh71_k$(value_9);
        tmp_19 = value_9;
      } else {
        tmp_19 = it_9;
      }
      var tmp_20 = tmp_19;
      var tmpCache_9 = (tmp_20 == null ? true : !(tmp_20 == null)) ? tmp_20 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      H4$composable(tmpCache_9, ComposableSingletons$AboutKt_getInstance().lambda_35_7sywq0__1, $composer_0, 48, 0);
      P$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_37_7sywq2__1, $composer_0, 48, 1);
      $composer_0.startReplaceableGroup_ip860b_k$(-1089222445);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_10 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_21;
      if (false ? true : it_10 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-67.<anonymous>.<anonymous>' call
        var value_10 = ComposableSingletons$AboutKt$lambda_67$lambda$lambda_qwce6u_10;
        $composer_0.updateRememberedValue_l1wh71_k$(value_10);
        tmp_21 = value_10;
      } else {
        tmp_21 = it_10;
      }
      var tmp_22 = tmp_21;
      var tmpCache_10 = (tmp_22 == null ? true : !(tmp_22 == null)) ? tmp_22 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      H4$composable(tmpCache_10, ComposableSingletons$AboutKt_getInstance().lambda_38_7sywq3__1, $composer_0, 48, 0);
      P$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_40_7sywqq_1, $composer_0, 48, 1);
      $composer_0.startReplaceableGroup_ip860b_k$(-1089221802);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_11 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_23;
      if (false ? true : it_11 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-67.<anonymous>.<anonymous>' call
        var value_11 = ComposableSingletons$AboutKt$lambda_67$lambda$lambda_qwce6u_11;
        $composer_0.updateRememberedValue_l1wh71_k$(value_11);
        tmp_23 = value_11;
      } else {
        tmp_23 = it_11;
      }
      var tmp_24 = tmp_23;
      var tmpCache_11 = (tmp_24 == null ? true : !(tmp_24 == null)) ? tmp_24 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      H4$composable(tmpCache_11, ComposableSingletons$AboutKt_getInstance().lambda_41_7sywqr_1, $composer_0, 48, 0);
      P$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_42_7sywqs_1, $composer_0, 48, 1);
      $composer_0.startReplaceableGroup_ip860b_k$(-1089221426);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_12 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_25;
      if (false ? true : it_12 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-67.<anonymous>.<anonymous>' call
        var value_12 = ComposableSingletons$AboutKt$lambda_67$lambda$lambda_qwce6u_12;
        $composer_0.updateRememberedValue_l1wh71_k$(value_12);
        tmp_25 = value_12;
      } else {
        tmp_25 = it_12;
      }
      var tmp_26 = tmp_25;
      var tmpCache_12 = (tmp_26 == null ? true : !(tmp_26 == null)) ? tmp_26 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      H4$composable(tmpCache_12, ComposableSingletons$AboutKt_getInstance().lambda_43_7sywqt_1, $composer_0, 48, 0);
      P$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_44_7sywqu_1, $composer_0, 48, 1);
      $composer_0.startReplaceableGroup_ip860b_k$(-1089221123);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_13 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_27;
      if (false ? true : it_13 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-67.<anonymous>.<anonymous>' call
        var value_13 = ComposableSingletons$AboutKt$lambda_67$lambda$lambda_qwce6u_13;
        $composer_0.updateRememberedValue_l1wh71_k$(value_13);
        tmp_27 = value_13;
      } else {
        tmp_27 = it_13;
      }
      var tmp_28 = tmp_27;
      var tmpCache_13 = (tmp_28 == null ? true : !(tmp_28 == null)) ? tmp_28 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      H2$composable(tmpCache_13, ComposableSingletons$AboutKt_getInstance().lambda_45_7sywqv_1, $composer_0, 48, 0);
      P$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_47_7sywqx_1, $composer_0, 48, 1);
      P$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_48_7sywqy_1, $composer_0, 48, 1);
      Pre$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_50_7sywrl_1, $composer_0, 48, 1);
      P$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_51_7sywrm_1, $composer_0, 48, 1);
      $composer_0.startReplaceableGroup_ip860b_k$(-1089219874);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_14 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_29;
      if (false ? true : it_14 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.pages.ComposableSingletons$AboutKt.lambda-67.<anonymous>.<anonymous>' call
        var value_14 = ComposableSingletons$AboutKt$lambda_67$lambda$lambda_qwce6u_14;
        $composer_0.updateRememberedValue_l1wh71_k$(value_14);
        tmp_29 = value_14;
      } else {
        tmp_29 = it_14;
      }
      var tmp_30 = tmp_29;
      var tmpCache_14 = (tmp_30 == null ? true : !(tmp_30 == null)) ? tmp_30 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      H2$composable(tmpCache_14, ComposableSingletons$AboutKt_getInstance().lambda_52_7sywrn_1, $composer_0, 48, 0);
      P$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_53_7sywro_1, $composer_0, 48, 1);
      P$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_56_7sywrr_1, $composer_0, 48, 1);
      P$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_57_7sywrs_1, $composer_0, 48, 1);
      Pre$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_59_7sywru_1, $composer_0, 48, 1);
      P$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_61_7sywsh_1, $composer_0, 48, 1);
      P$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_62_7sywsi_1, $composer_0, 48, 1);
      Pre$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_64_7sywsk_1, $composer_0, 48, 1);
      P$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_65_7sywsl_1, $composer_0, 48, 1);
      P$composable(null, ComposableSingletons$AboutKt_getInstance().lambda_66_7sywsm_1, $composer_0, 48, 1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$AboutKt$lambda_67$lambda$lambda_qwce6u($this$H1) {
    $this$H1.id_e4l56n_k$('about-this-template');
    return Unit_getInstance();
  }
  function ComposableSingletons$AboutKt$lambda_67$lambda$lambda_qwce6u_0($this$H2) {
    $this$H2.id_e4l56n_k$('learn');
    return Unit_getInstance();
  }
  function ComposableSingletons$AboutKt$lambda_67$lambda$lambda_qwce6u_1($this$H3) {
    $this$H3.id_e4l56n_k$('files');
    return Unit_getInstance();
  }
  function ComposableSingletons$AboutKt$lambda_67$lambda$lambda_qwce6u_2($this$H4) {
    $this$H4.id_e4l56n_k$('appentry-kt');
    return Unit_getInstance();
  }
  function ComposableSingletons$AboutKt$lambda_67$lambda$lambda_qwce6u_3($this$H4) {
    $this$H4.id_e4l56n_k$('appstyles-kt');
    return Unit_getInstance();
  }
  function ComposableSingletons$AboutKt$lambda_67$lambda$lambda_qwce6u_4($this$H4) {
    $this$H4.id_e4l56n_k$('sitetheme-kt');
    return Unit_getInstance();
  }
  function ComposableSingletons$AboutKt$lambda_67$lambda$lambda_qwce6u_5($this$H4) {
    $this$H4.id_e4l56n_k$('components');
    return Unit_getInstance();
  }
  function ComposableSingletons$AboutKt$lambda_67$lambda$lambda_qwce6u_6($this$H4) {
    $this$H4.id_e4l56n_k$('pages');
    return Unit_getInstance();
  }
  function ComposableSingletons$AboutKt$lambda_67$lambda$lambda_qwce6u_7($this$H4) {
    $this$H4.id_e4l56n_k$('resources');
    return Unit_getInstance();
  }
  function ComposableSingletons$AboutKt$lambda_67$lambda$lambda_qwce6u_8($this$H3) {
    $this$H3.id_e4l56n_k$('classes');
    return Unit_getInstance();
  }
  function ComposableSingletons$AboutKt$lambda_67$lambda$lambda_qwce6u_9($this$H4) {
    $this$H4.id_e4l56n_k$('modifier');
    return Unit_getInstance();
  }
  function ComposableSingletons$AboutKt$lambda_67$lambda$lambda_qwce6u_10($this$H4) {
    $this$H4.id_e4l56n_k$('componentstyle');
    return Unit_getInstance();
  }
  function ComposableSingletons$AboutKt$lambda_67$lambda$lambda_qwce6u_11($this$H4) {
    $this$H4.id_e4l56n_k$('componentvariant');
    return Unit_getInstance();
  }
  function ComposableSingletons$AboutKt$lambda_67$lambda$lambda_qwce6u_12($this$H4) {
    $this$H4.id_e4l56n_k$('keyframes');
    return Unit_getInstance();
  }
  function ComposableSingletons$AboutKt$lambda_67$lambda$lambda_qwce6u_13($this$H2) {
    $this$H2.id_e4l56n_k$('starting-point');
    return Unit_getInstance();
  }
  function ComposableSingletons$AboutKt$lambda_67$lambda$lambda_qwce6u_14($this$H2) {
    $this$H2.id_e4l56n_k$('export-and-deploy');
    return Unit_getInstance();
  }
  function ComposableSingletons$AboutKt() {
    ComposableSingletons$AboutKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(-1227741761, false, ComposableSingletons$AboutKt$lambda_1$lambda_irurs3));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(-578375394, false, ComposableSingletons$AboutKt$lambda_2$lambda_nfmt4u));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(-992063586, false, ComposableSingletons$AboutKt$lambda_3$lambda_5dznxd));
    var tmp_2 = this;
    tmp_2.lambda_4_r8sbbm_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(-817305529, false, ComposableSingletons$AboutKt$lambda_4$lambda_y7m4zk));
    var tmp_3 = this;
    tmp_3.lambda_5_r8sbbl_1 = ComposableLambda$invoke$ref_9(composableLambdaInstance(-756385411, false, ComposableSingletons$AboutKt$lambda_5$lambda_7zvfxd));
    var tmp_4 = this;
    tmp_4.lambda_6_r8sbbk_1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(-520707236, false, ComposableSingletons$AboutKt$lambda_6$lambda_ktr14u));
    var tmp_5 = this;
    tmp_5.lambda_7_r8sbbj_1 = ComposableLambda$invoke$ref_11(composableLambdaInstance(-916221755, false, ComposableSingletons$AboutKt$lambda_7$lambda_ldqjs3));
    var tmp_6 = this;
    tmp_6.lambda_8_r8sbbi_1 = ComposableLambda$invoke$ref_12(composableLambdaInstance(-581627354, false, ComposableSingletons$AboutKt$lambda_8$lambda_7fvxa4));
    var tmp_7 = this;
    tmp_7.lambda_9_r8sbbh_1 = ComposableLambda$invoke$ref_13(composableLambdaInstance(-1232780539, false, ComposableSingletons$AboutKt$lambda_9$lambda_yrlnmt));
    var tmp_8 = this;
    tmp_8.lambda_10_7sywo5__1 = ComposableLambda$invoke$ref_14(composableLambdaInstance(-345949179, false, ComposableSingletons$AboutKt$lambda_10$lambda_i5qkjn));
    var tmp_9 = this;
    tmp_9.lambda_11_7sywo6__1 = ComposableLambda$invoke$ref_15(composableLambdaInstance(-997102364, false, ComposableSingletons$AboutKt$lambda_11$lambda_o1r0da));
    var tmp_10 = this;
    tmp_10.lambda_12_7sywo7__1 = ComposableLambda$invoke$ref_16(composableLambdaInstance(-110271004, false, ComposableSingletons$AboutKt$lambda_12$lambda_4rvgox));
    var tmp_11 = this;
    tmp_11.lambda_13_7sywo8__1 = ComposableLambda$invoke$ref_17(composableLambdaInstance(-761424189, false, ComposableSingletons$AboutKt$lambda_13$lambda_xlhxr4));
    var tmp_12 = this;
    tmp_12.lambda_14_7sywo9__1 = ComposableLambda$invoke$ref_18(composableLambdaInstance(125407171, false, ComposableSingletons$AboutKt$lambda_14$lambda_8lzn5t));
    var tmp_13 = this;
    tmp_13.lambda_15_7sywoa_1 = ComposableLambda$invoke$ref_19(composableLambdaInstance(1761982625, false, ComposableSingletons$AboutKt$lambda_15$lambda_k7mtwe));
    var tmp_14 = this;
    tmp_14.lambda_16_7sywob_1 = ComposableLambda$invoke$ref_20(composableLambdaInstance(-1598778366, false, ComposableSingletons$AboutKt$lambda_16$lambda_lzur0j));
    var tmp_15 = this;
    tmp_15.lambda_17_7sywoc_1 = ComposableLambda$invoke$ref_21(composableLambdaInstance(-920350696, false, ComposableSingletons$AboutKt$lambda_17$lambda_6trq1o));
    var tmp_16 = this;
    tmp_16.lambda_18_7sywod_1 = ComposableLambda$invoke$ref_22(composableLambdaInstance(-796256455, false, ComposableSingletons$AboutKt$lambda_18$lambda_zdpuv9));
    var tmp_17 = this;
    tmp_17.lambda_19_7sywoe_1 = ComposableLambda$invoke$ref_23(composableLambdaInstance(-218416103, false, ComposableSingletons$AboutKt$lambda_19$lambda_6k3dt2));
    var tmp_18 = this;
    tmp_18.lambda_20_7sywp0__1 = ComposableLambda$invoke$ref_24(composableLambdaInstance(-94321862, false, ComposableSingletons$AboutKt$lambda_20$lambda_bqdg8s));
    var tmp_19 = this;
    tmp_19.lambda_21_7sywp1__1 = ComposableLambda$invoke$ref_25(composableLambdaInstance(281392689, false, ComposableSingletons$AboutKt$lambda_21$lambda_h390tf));
    var tmp_20 = this;
    tmp_20.lambda_22_7sywp2__1 = ComposableLambda$invoke$ref_26(composableLambdaInstance(-525746014, false, ComposableSingletons$AboutKt$lambda_22$lambda_p48k3i));
    var tmp_21 = this;
    tmp_21.lambda_23_7sywp3__1 = ComposableLambda$invoke$ref_27(composableLambdaInstance(26490945, false, ComposableSingletons$AboutKt$lambda_23$lambda_3pdwyp));
    var tmp_22 = this;
    tmp_22.lambda_24_7sywp4__1 = ComposableLambda$invoke$ref_28(composableLambdaInstance(-896546838, false, ComposableSingletons$AboutKt$lambda_24$lambda_wj0e0w));
    var tmp_23 = this;
    tmp_23.lambda_25_7sywp5__1 = ComposableLambda$invoke$ref_29(composableLambdaInstance(-611410935, false, ComposableSingletons$AboutKt$lambda_25$lambda_9oh6w1));
    var tmp_24 = this;
    tmp_24.lambda_26_7sywp6__1 = ComposableLambda$invoke$ref_30(composableLambdaInstance(361085346, false, ComposableSingletons$AboutKt$lambda_26$lambda_j55a66));
    var tmp_25 = this;
    tmp_25.lambda_27_7sywp7__1 = ComposableLambda$invoke$ref_31(composableLambdaInstance(-290067839, false, ComposableSingletons$AboutKt$lambda_27$lambda_n2caqr));
    var tmp_26 = this;
    tmp_26.lambda_28_7sywp8__1 = ComposableLambda$invoke$ref_32(composableLambdaInstance(1998854922, false, ComposableSingletons$AboutKt$lambda_28$lambda_5ra6bg));
    var tmp_27 = this;
    tmp_27.lambda_29_7sywp9__1 = ComposableLambda$invoke$ref_33(composableLambdaInstance(2122949163, false, ComposableSingletons$AboutKt$lambda_29$lambda_ykwndn));
    var tmp_28 = this;
    tmp_28.lambda_30_7sywpv_1 = ComposableLambda$invoke$ref_34(composableLambdaInstance(1256911041, false, ComposableSingletons$AboutKt$lambda_30$lambda_temkxx));
    var tmp_29 = this;
    tmp_29.lambda_31_7sywpw_1 = ComposableLambda$invoke$ref_35(composableLambdaInstance(252392354, false, ComposableSingletons$AboutKt$lambda_31$lambda_csuzz0));
    var tmp_30 = this;
    tmp_30.lambda_32_7sywpx_1 = ComposableLambda$invoke$ref_36(composableLambdaInstance(786101402, false, ComposableSingletons$AboutKt$lambda_32$lambda_g0rh37));
    var tmp_31 = this;
    tmp_31.lambda_33_7sywpy_1 = ComposableLambda$invoke$ref_37(composableLambdaInstance(-86240026, false, ComposableSingletons$AboutKt$lambda_33$lambda_q6q3tq));
    var tmp_32 = this;
    tmp_32.lambda_34_7sywpz_1 = ComposableLambda$invoke$ref_38(composableLambdaInstance(596763521, false, ComposableSingletons$AboutKt$lambda_34$lambda_2mwd8h));
    var tmp_33 = this;
    tmp_33.lambda_35_7sywq0__1 = ComposableLambda$invoke$ref_39(composableLambdaInstance(-54389664, false, ComposableSingletons$AboutKt$lambda_35$lambda_vgiuao));
    var tmp_34 = this;
    tmp_34.lambda_36_7sywq1__1 = ComposableLambda$invoke$ref_40(composableLambdaInstance(497847295, false, ComposableSingletons$AboutKt$lambda_36$lambda_aqyqm9));
    var tmp_35 = this;
    tmp_35.lambda_37_7sywq2__1 = ComposableLambda$invoke$ref_41(composableLambdaInstance(832441696, false, ComposableSingletons$AboutKt$lambda_37$lambda_i2nqfy));
    var tmp_36 = this;
    tmp_36.lambda_38_7sywq3__1 = ComposableLambda$invoke$ref_42(composableLambdaInstance(181288511, false, ComposableSingletons$AboutKt$lambda_38$lambda_o4tugz));
    var tmp_37 = this;
    tmp_37.lambda_39_7sywq4__1 = ComposableLambda$invoke$ref_43(composableLambdaInstance(733525470, false, ComposableSingletons$AboutKt$lambda_39$lambda_4osml8));
    var tmp_38 = this;
    tmp_38.lambda_40_7sywqq_1 = ComposableLambda$invoke$ref_44(composableLambdaInstance(1068119871, false, ComposableSingletons$AboutKt$lambda_40$lambda_hhfui));
    var tmp_39 = this;
    tmp_39.lambda_41_7sywqr_1 = ComposableLambda$invoke$ref_45(composableLambdaInstance(416966686, false, ComposableSingletons$AboutKt$lambda_41$lambda_sc517p));
    var tmp_40 = this;
    tmp_40.lambda_42_7sywqs_1 = ComposableLambda$invoke$ref_46(composableLambdaInstance(-1961674273, false, ComposableSingletons$AboutKt$lambda_42$lambda_dvcjp8));
    var tmp_41 = this;
    tmp_41.lambda_43_7sywqt_1 = ComposableLambda$invoke$ref_47(composableLambdaInstance(652644861, false, ComposableSingletons$AboutKt$lambda_43$lambda_ey9xcz));
    var tmp_42 = this;
    tmp_42.lambda_44_7sywqu_1 = ComposableLambda$invoke$ref_48(composableLambdaInstance(-1725996098, false, ComposableSingletons$AboutKt$lambda_44$lambda_r97njy));
    var tmp_43 = this;
    tmp_43.lambda_45_7sywqv_1 = ComposableLambda$invoke$ref_49(composableLambdaInstance(1060300487, false, ComposableSingletons$AboutKt$lambda_45$lambda_1keti9));
    var tmp_44 = this;
    tmp_44.lambda_46_7sywqw_1 = ComposableLambda$invoke$ref_50(composableLambdaInstance(-1710162023, false, ComposableSingletons$AboutKt$lambda_46$lambda_ue1akg));
    var tmp_45 = this;
    tmp_45.lambda_47_7sywqx_1 = ComposableLambda$invoke$ref_51(composableLambdaInstance(-1490317923, false, ComposableSingletons$AboutKt$lambda_47$lambda_btgach));
    var tmp_46 = this;
    tmp_46.lambda_48_7sywqy_1 = ComposableLambda$invoke$ref_52(composableLambdaInstance(-1254639748, false, ComposableSingletons$AboutKt$lambda_48$lambda_h066pq));
    var tmp_47 = this;
    tmp_47.lambda_49_7sywqz_1 = ComposableLambda$invoke$ref_53(composableLambdaInstance(-666118038, false, ComposableSingletons$AboutKt$lambda_49$lambda_p7be77));
    var tmp_48 = this;
    tmp_48.lambda_50_7sywrl_1 = ComposableLambda$invoke$ref_54(composableLambdaInstance(-331523637, false, ComposableSingletons$AboutKt$lambda_50$lambda_udlgmx));
    var tmp_49 = this;
    tmp_49.lambda_51_7sywrm_1 = ComposableLambda$invoke$ref_55(composableLambdaInstance(-1018961573, false, ComposableSingletons$AboutKt$lambda_51$lambda_1jyzkq));
    var tmp_50 = this;
    tmp_50.lambda_52_7sywrn_1 = ComposableLambda$invoke$ref_56(composableLambdaInstance(1295978662, false, ComposableSingletons$AboutKt$lambda_52$lambda_r9nhhh));
    var tmp_51 = this;
    tmp_51.lambda_53_7sywro_1 = ComposableLambda$invoke$ref_57(composableLambdaInstance(-783283398, false, ComposableSingletons$AboutKt$lambda_53$lambda_exu3fg));
    var tmp_52 = this;
    tmp_52.lambda_54_7sywrp_1 = ComposableLambda$invoke$ref_58(composableLambdaInstance(-767449323, false, ComposableSingletons$AboutKt$lambda_54$lambda_dvsdmr));
    var tmp_53 = this;
    tmp_53.lambda_55_7sywrq_1 = ComposableLambda$invoke$ref_59(composableLambdaInstance(1881393612, false, ComposableSingletons$AboutKt$lambda_55$lambda_sbp7a6));
    var tmp_54 = this;
    tmp_54.lambda_56_7sywrr_1 = ComposableLambda$invoke$ref_60(composableLambdaInstance(-547605223, false, ComposableSingletons$AboutKt$lambda_56$lambda_hx9s1));
    var tmp_55 = this;
    tmp_55.lambda_57_7sywrs_1 = ComposableLambda$invoke$ref_61(composableLambdaInstance(-311927048, false, ComposableSingletons$AboutKt$lambda_57$lambda_tbjqu8));
    var tmp_56 = this;
    tmp_56.lambda_58_7sywrt_1 = ComposableLambda$invoke$ref_62(composableLambdaInstance(761359507, false, ComposableSingletons$AboutKt$lambda_58$lambda_cvxu2p));
    var tmp_57 = this;
    tmp_57.lambda_59_7sywru_1 = ComposableLambda$invoke$ref_63(composableLambdaInstance(184031668, false, ComposableSingletons$AboutKt$lambda_59$lambda_fxomzi));
    var tmp_58 = this;
    tmp_58.lambda_60_7sywsg_1 = ComposableLambda$invoke$ref_64(composableLambdaInstance(-1858740712, false, ComposableSingletons$AboutKt$lambda_60$lambda_arekjs));
    var tmp_59 = this;
    tmp_59.lambda_61_7sywsh_1 = ComposableLambda$invoke$ref_65(composableLambdaInstance(-76248873, false, ComposableSingletons$AboutKt$lambda_61$lambda_vg30d5));
    var tmp_60 = this;
    tmp_60.lambda_62_7sywsi_1 = ComposableLambda$invoke$ref_66(composableLambdaInstance(159429302, false, ComposableSingletons$AboutKt$lambda_62$lambda_2mgjay));
    var tmp_61 = this;
    tmp_61.lambda_63_7sywsj_1 = ComposableLambda$invoke$ref_67(composableLambdaInstance(997037682, false, ComposableSingletons$AboutKt$lambda_63$lambda_q75xr9));
    var tmp_62 = this;
    tmp_62.lambda_64_7sywsk_1 = ComposableLambda$invoke$ref_68(composableLambdaInstance(419709843, false, ComposableSingletons$AboutKt$lambda_64$lambda_g0bn5o));
    var tmp_63 = this;
    tmp_63.lambda_65_7sywsl_1 = ComposableLambda$invoke$ref_69(composableLambdaInstance(1049381856, false, ComposableSingletons$AboutKt$lambda_65$lambda_ctatwj));
    var tmp_64 = this;
    tmp_64.lambda_66_7sywsm_1 = ComposableLambda$invoke$ref_70(composableLambdaInstance(1285060031, false, ComposableSingletons$AboutKt$lambda_66$lambda_te6r0e));
    var tmp_65 = this;
    tmp_65.lambda_67_7sywsn_1 = ComposableLambda$invoke$ref_71(composableLambdaInstance(-1632241540, false, ComposableSingletons$AboutKt$lambda_67$lambda_kk9y7));
  }
  protoOf(ComposableSingletons$AboutKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_3_bzdzzq_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_4_bzdzzr_k$ = function () {
    return this.lambda_4_r8sbbm_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_5_bzdzzs_k$ = function () {
    return this.lambda_5_r8sbbl_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_6_bzdzzt_k$ = function () {
    return this.lambda_6_r8sbbk_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_7_bzdzzu_k$ = function () {
    return this.lambda_7_r8sbbj_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_8_bzdzzv_k$ = function () {
    return this.lambda_8_r8sbbi_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_9_bzdzzw_k$ = function () {
    return this.lambda_9_r8sbbh_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_10_gbhpvg_k$ = function () {
    return this.lambda_10_7sywo5__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_11_gbhpvh_k$ = function () {
    return this.lambda_11_7sywo6__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_12_gbhpvi_k$ = function () {
    return this.lambda_12_7sywo7__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_13_gbhpvj_k$ = function () {
    return this.lambda_13_7sywo8__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_14_gbhpvk_k$ = function () {
    return this.lambda_14_7sywo9__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_15_gbhpvl_k$ = function () {
    return this.lambda_15_7sywoa_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_16_gbhpvm_k$ = function () {
    return this.lambda_16_7sywob_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_17_gbhpvn_k$ = function () {
    return this.lambda_17_7sywoc_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_18_gbhpvo_k$ = function () {
    return this.lambda_18_7sywod_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_19_gbhpvp_k$ = function () {
    return this.lambda_19_7sywoe_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_20_gbhpwb_k$ = function () {
    return this.lambda_20_7sywp0__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_21_gbhpwc_k$ = function () {
    return this.lambda_21_7sywp1__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_22_gbhpwd_k$ = function () {
    return this.lambda_22_7sywp2__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_23_gbhpwe_k$ = function () {
    return this.lambda_23_7sywp3__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_24_gbhpwf_k$ = function () {
    return this.lambda_24_7sywp4__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_25_gbhpwg_k$ = function () {
    return this.lambda_25_7sywp5__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_26_gbhpwh_k$ = function () {
    return this.lambda_26_7sywp6__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_27_gbhpwi_k$ = function () {
    return this.lambda_27_7sywp7__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_28_gbhpwj_k$ = function () {
    return this.lambda_28_7sywp8__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_29_gbhpwk_k$ = function () {
    return this.lambda_29_7sywp9__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_30_gbhpx6_k$ = function () {
    return this.lambda_30_7sywpv_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_31_gbhpx7_k$ = function () {
    return this.lambda_31_7sywpw_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_32_gbhpx8_k$ = function () {
    return this.lambda_32_7sywpx_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_33_gbhpx9_k$ = function () {
    return this.lambda_33_7sywpy_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_34_gbhpxa_k$ = function () {
    return this.lambda_34_7sywpz_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_35_gbhpxb_k$ = function () {
    return this.lambda_35_7sywq0__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_36_gbhpxc_k$ = function () {
    return this.lambda_36_7sywq1__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_37_gbhpxd_k$ = function () {
    return this.lambda_37_7sywq2__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_38_gbhpxe_k$ = function () {
    return this.lambda_38_7sywq3__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_39_gbhpxf_k$ = function () {
    return this.lambda_39_7sywq4__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_40_gbhpy1_k$ = function () {
    return this.lambda_40_7sywqq_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_41_gbhpy2_k$ = function () {
    return this.lambda_41_7sywqr_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_42_gbhpy3_k$ = function () {
    return this.lambda_42_7sywqs_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_43_gbhpy4_k$ = function () {
    return this.lambda_43_7sywqt_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_44_gbhpy5_k$ = function () {
    return this.lambda_44_7sywqu_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_45_gbhpy6_k$ = function () {
    return this.lambda_45_7sywqv_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_46_gbhpy7_k$ = function () {
    return this.lambda_46_7sywqw_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_47_gbhpy8_k$ = function () {
    return this.lambda_47_7sywqx_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_48_gbhpy9_k$ = function () {
    return this.lambda_48_7sywqy_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_49_gbhpya_k$ = function () {
    return this.lambda_49_7sywqz_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_50_gbhpyw_k$ = function () {
    return this.lambda_50_7sywrl_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_51_gbhpyx_k$ = function () {
    return this.lambda_51_7sywrm_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_52_gbhpyy_k$ = function () {
    return this.lambda_52_7sywrn_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_53_gbhpyz_k$ = function () {
    return this.lambda_53_7sywro_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_54_gbhpz0_k$ = function () {
    return this.lambda_54_7sywrp_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_55_gbhpz1_k$ = function () {
    return this.lambda_55_7sywrq_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_56_gbhpz2_k$ = function () {
    return this.lambda_56_7sywrr_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_57_gbhpz3_k$ = function () {
    return this.lambda_57_7sywrs_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_58_gbhpz4_k$ = function () {
    return this.lambda_58_7sywrt_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_59_gbhpz5_k$ = function () {
    return this.lambda_59_7sywru_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_60_gbhpzr_k$ = function () {
    return this.lambda_60_7sywsg_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_61_gbhpzs_k$ = function () {
    return this.lambda_61_7sywsh_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_62_gbhpzt_k$ = function () {
    return this.lambda_62_7sywsi_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_63_gbhpzu_k$ = function () {
    return this.lambda_63_7sywsj_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_64_gbhpzv_k$ = function () {
    return this.lambda_64_7sywsk_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_65_gbhpzw_k$ = function () {
    return this.lambda_65_7sywsl_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_66_gbhpzx_k$ = function () {
    return this.lambda_66_7sywsm_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda_67_gbhpzy_k$ = function () {
    return this.lambda_67_7sywsn_1;
  };
  var ComposableSingletons$AboutKt_instance;
  function ComposableSingletons$AboutKt_getInstance() {
    if (ComposableSingletons$AboutKt_instance == null)
      new ComposableSingletons$AboutKt();
    return ComposableSingletons$AboutKt_instance;
  }
  function AboutPage$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-479232632);
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-479232632, $changed, -1, 'com.rudra.kotfolio.pages.AboutPage$composable (About.kt:8)');
      }
      MarkdownLayout$composable('About', ComposableSingletons$AboutKt_getInstance().lambda_67_7sywsn_1, $composer_0, 54);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(AboutPage$composable$lambda($changed));
    }
  }
  function AboutPage$composable$lambda($$changed) {
    return function ($composer, $force) {
      AboutPage$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function get_COLOR_MODE_KEY() {
    return COLOR_MODE_KEY;
  }
  var COLOR_MODE_KEY;
  function initColorMode(ctx) {
    var tmp = ctx.get_config_c0698r_k$();
    var tmp0_safe_receiver = localStorage.getItem('kotfolio:colorMode');
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.rudra.kotfolio.initColorMode.<anonymous>' call
      tmp_0 = valueOf(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    tmp.set_initialColorMode_lmyh2d_k$(tmp1_elvis_lhs == null ? ColorMode_DARK_getInstance() : tmp1_elvis_lhs);
  }
  function AppEntry(content) {
    illegalDecoyCallException('AppEntry');
  }
  function AppEntry$composable(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1685414592);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1685414592, $dirty, -1, 'com.rudra.kotfolio.AppEntry$composable (AppEntry.kt:27)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.rudra.kotfolio.AppEntry$composable.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, -265230545, true, AppEntry$composable$lambda(content));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.AppEntry$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_73(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      SilkApp$composable(tmp0, $composer_0, 6);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(AppEntry$composable$lambda_0(content, $changed));
    }
  }
  function AppEntry$composable$lambda$slambda($colorMode, resultContinuation) {
    this.$colorMode_1 = $colorMode;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AppEntry$composable$lambda$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AppEntry$composable$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AppEntry$composable$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          localStorage.setItem('kotfolio:colorMode', this.$colorMode_1.get_name_woqyms_k$());
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(AppEntry$composable$lambda$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new AppEntry$composable$lambda$slambda(this.$colorMode_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(AppEntry$composable$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function AppEntry$composable$lambda$slambda_0($colorMode, resultContinuation) {
    var i = new AppEntry$composable$lambda$slambda($colorMode, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AppEntry$composable$lambda$lambda($content) {
    return function ($this$Surface, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1549166775, $changed, -1, 'com.rudra.kotfolio.AppEntry$composable.<anonymous>.<anonymous> (AppEntry.kt:39)');
        }
        $content($composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_72($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function AppEntry$composable$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-265230545, $changed, -1, 'com.rudra.kotfolio.AppEntry$composable.<anonymous> (AppEntry.kt:29)');
        }
        var colorMode = Companion_getInstance_1().$get_current$$composable_nxoy3y_k$($composer_0, 6);
        $composer_0.startReplaceableGroup_ip860b_k$(1838954549);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.changed_ga7h3f_k$(colorMode);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.rudra.kotfolio.AppEntry$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = AppEntry$composable$lambda$slambda_0(colorMode, null);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        LaunchedEffect$composable(colorMode, tmpCache, $composer_0, 0);
        var tmp_2 = scrollBehavior(minHeight(toModifier$composable(get_SmoothColorStyle(), [], $composer_0, 64), get_vh(100)), Companion_getInstance_2().get_Smooth_4edjo7_k$());
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.rudra.kotfolio.AppEntry$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_3 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_3, -1549166775, true, AppEntry$composable$lambda$lambda($content));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_4;
        if (invalid_0 ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.rudra.kotfolio.AppEntry$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_72(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_4 = value_0;
        } else {
          tmp_4 = it_0;
        }
        var tmp_5 = tmp_4;
        var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Surface$composable(tmp_2, null, null, null, null, tmp0, $composer_0, 196608, 30);
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_getInstance();
        }
        tmp = tmp_6;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_73($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function AppEntry$composable$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      AppEntry$composable($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function get_HeadlineTextStyle() {
    _init_properties_AppStyles_kt__9fg0zz();
    return HeadlineTextStyle$delegate.getValue_fbnwi2_k$(null, HeadlineTextStyle$factory());
  }
  var HeadlineTextStyle$delegate;
  function get_SubheadlineTextStyle() {
    _init_properties_AppStyles_kt__9fg0zz();
    return SubheadlineTextStyle$delegate.getValue_fbnwi2_k$(null, SubheadlineTextStyle$factory());
  }
  var SubheadlineTextStyle$delegate;
  function get_CircleButtonVariant() {
    _init_properties_AppStyles_kt__9fg0zz();
    return CircleButtonVariant$delegate.getValue_fbnwi2_k$(null, CircleButtonVariant$factory());
  }
  var CircleButtonVariant$delegate;
  function get_UncoloredButtonVariant() {
    _init_properties_AppStyles_kt__9fg0zz();
    return UncoloredButtonVariant$delegate.getValue_fbnwi2_k$(null, UncoloredButtonVariant$factory());
  }
  var UncoloredButtonVariant$delegate;
  function initSiteStyles(ctx) {
    _init_properties_AppStyles_kt__9fg0zz();
    var tmp = ctx.get_stylesheet_hk204p_k$();
    registerStyleBase(tmp, 'body', VOID, initSiteStyles$lambda);
    var tmp_0 = ctx.get_theme_iz24rk_k$();
    var tmp_1 = get_HorizontalDividerStyle();
    modifyComponentStyleBase(tmp_0, tmp_1, VOID, initSiteStyles$lambda_0);
  }
  function HeadlineTextStyle$delegate$lambda($this$base) {
    _init_properties_AppStyles_kt__9fg0zz();
    return lineHeight(textAlign(fontSize(Companion_getInstance_3(), get_cssRem(3)), Companion_getInstance_4().get_Start_ih4i6x_k$()), 1.2);
  }
  function SubheadlineTextStyle$delegate$lambda($this$base) {
    _init_properties_AppStyles_kt__9fg0zz();
    return color(textAlign(fontSize(Companion_getInstance_3(), get_cssRem(1)), Companion_getInstance_4().get_Start_ih4i6x_k$()), get_color(toPalette($this$base.get_colorMode_trbg8z_k$())).toRgb_1tsrpu_k$());
  }
  function CircleButtonVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_AppStyles_kt__9fg0zz();
    return borderRadius(padding(Companion_getInstance_3(), get_px(0)), get_percent(50));
  }
  function UncoloredButtonVariant$delegate$lambda($this$addVariantBase) {
    _init_properties_AppStyles_kt__9fg0zz();
    return setVariable(Companion_getInstance_3(), ButtonVars_getInstance().get_BackgroundDefaultColor_so3bvr_k$(), Colors_getInstance().get_Transparent_cxh4g9_k$());
  }
  function initSiteStyles$lambda() {
    _init_properties_AppStyles_kt__9fg0zz();
    return lineHeight(fontSize(fontFamily(Companion_getInstance_3(), ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif']), get_px(18)), 1.5);
  }
  function initSiteStyles$lambda_0($this$modifyComponentStyleBase) {
    _init_properties_AppStyles_kt__9fg0zz();
    return fillMaxWidth(Companion_getInstance_3());
  }
  function HeadlineTextStyle$factory() {
    return getPropertyCallableRef('HeadlineTextStyle', 0, KProperty0, function () {
      return get_HeadlineTextStyle();
    }, null);
  }
  function SubheadlineTextStyle$factory() {
    return getPropertyCallableRef('SubheadlineTextStyle', 0, KProperty0, function () {
      return get_SubheadlineTextStyle();
    }, null);
  }
  function CircleButtonVariant$factory() {
    return getPropertyCallableRef('CircleButtonVariant', 0, KProperty0, function () {
      return get_CircleButtonVariant();
    }, null);
  }
  function UncoloredButtonVariant$factory() {
    return getPropertyCallableRef('UncoloredButtonVariant', 0, KProperty0, function () {
      return get_UncoloredButtonVariant();
    }, null);
  }
  var properties_initialized_AppStyles_kt_kq2bkd;
  function _init_properties_AppStyles_kt__9fg0zz() {
    if (!properties_initialized_AppStyles_kt_kq2bkd) {
      properties_initialized_AppStyles_kt_kq2bkd = true;
      var tmp = Companion_getInstance_5();
      HeadlineTextStyle$delegate = base(tmp, VOID, VOID, HeadlineTextStyle$delegate$lambda);
      var tmp_0 = Companion_getInstance_5();
      SubheadlineTextStyle$delegate = base(tmp_0, VOID, VOID, SubheadlineTextStyle$delegate$lambda);
      var tmp_1 = get_ButtonStyle();
      CircleButtonVariant$delegate = addVariantBase(tmp_1, VOID, CircleButtonVariant$delegate$lambda);
      var tmp_2 = get_ButtonStyle();
      UncoloredButtonVariant$delegate = addVariantBase(tmp_2, VOID, UncoloredButtonVariant$delegate$lambda);
    }
  }
  function get_$stableprop() {
    return 0;
  }
  function Brand(primary, accent) {
    primary = primary === VOID ? Companion_getInstance_6().rgb_6orfmz_k$(3965935) : primary;
    accent = accent === VOID ? Companion_getInstance_6().rgb_6orfmz_k$(15981403) : accent;
    this.primary_1 = primary;
    this.accent_1 = accent;
    this.$stable_1 = 0;
  }
  protoOf(Brand).get_primary_3xuktj_k$ = function () {
    return this.primary_1;
  };
  protoOf(Brand).get_accent_avafv7_k$ = function () {
    return this.accent_1;
  };
  function get_$stableprop_0() {
    return 0;
  }
  function SitePalette(nearBackground, cobweb, brand) {
    this.nearBackground_1 = nearBackground;
    this.cobweb_1 = cobweb;
    this.brand_1 = brand;
    this.$stable_1 = 0;
  }
  protoOf(SitePalette).get_nearBackground_c1s3l_k$ = function () {
    return this.nearBackground_1;
  };
  protoOf(SitePalette).get_cobweb_bzyxwn_k$ = function () {
    return this.cobweb_1;
  };
  protoOf(SitePalette).get_brand_ipc50e_k$ = function () {
    return this.brand_1;
  };
  function get_$stableprop_1() {
    return 0;
  }
  function SitePalettes() {
    SitePalettes_instance = this;
    this.light_1 = new SitePalette(Companion_getInstance_6().rgb_6orfmz_k$(16054010), Colors_getInstance().get_LightGray_i1h2r4_k$(), new Brand(Companion_getInstance_6().rgb_6orfmz_k$(3965935), Companion_getInstance_6().rgb_6orfmz_k$(16562691)));
    this.dark_1 = new SitePalette(Companion_getInstance_6().rgb_6orfmz_k$(1251103), Colors_getInstance().get_LightGray_i1h2r4_k$().inverted_adp911_k$(), new Brand(Companion_getInstance_6().rgb_6orfmz_k$(3965935), Companion_getInstance_6().rgb_6orfmz_k$(15981403)));
    this.$stable_1 = 0;
  }
  protoOf(SitePalettes).get_light_iuogdp_k$ = function () {
    return this.light_1;
  };
  protoOf(SitePalettes).get_dark_wokkvz_k$ = function () {
    return this.dark_1;
  };
  var SitePalettes_instance;
  function SitePalettes_getInstance() {
    if (SitePalettes_instance == null)
      new SitePalettes();
    return SitePalettes_instance;
  }
  function toSitePalette(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = SitePalettes_getInstance().light_1;
        break;
      case 1:
        tmp = SitePalettes_getInstance().dark_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function initTheme(ctx) {
    set_background(ctx.get_theme_iz24rk_k$().get_palettes_f7ft27_k$().get_light_iuogdp_k$(), Companion_getInstance_6().rgb_6orfmz_k$(16448250));
    set_color(ctx.get_theme_iz24rk_k$().get_palettes_f7ft27_k$().get_light_iuogdp_k$(), Colors_getInstance().get_Black_i7mvue_k$());
    set_background(ctx.get_theme_iz24rk_k$().get_palettes_f7ft27_k$().get_dark_wokkvz_k$(), Companion_getInstance_6().rgb_6orfmz_k$(395275));
    set_color(ctx.get_theme_iz24rk_k$().get_palettes_f7ft27_k$().get_dark_wokkvz_k$(), Colors_getInstance().get_White_ij46ow_k$());
  }
  function get_MarkdownStyle() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return MarkdownStyle$delegate.getValue_fbnwi2_k$(null, MarkdownStyle$factory());
  }
  var MarkdownStyle$delegate;
  function MarkdownLayout(title, content) {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    illegalDecoyCallException('MarkdownLayout');
  }
  function MarkdownLayout$composable(title, content, $composer, $changed) {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(934069883);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(title) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(934069883, $dirty, -1, 'com.rudra.kotfolio.components.layouts.MarkdownLayout$composable (MarkdownLayout.kt:91)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.rudra.kotfolio.components.layouts.MarkdownLayout$composable.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, -96230375, true, MarkdownLayout$composable$lambda(content));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.components.layouts.MarkdownLayout$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_75(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      PageLayout$composable(title, tmp0, $composer_0, 48 | 14 & $dirty);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(MarkdownLayout$composable$lambda_0(title, content, $changed));
    }
  }
  function MarkdownStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    $this$ComponentStyle.cssRule_fe6cwq_k$(' h1', MarkdownStyle$delegate$lambda$lambda);
    $this$ComponentStyle.cssRule_fe6cwq_k$(' h2', MarkdownStyle$delegate$lambda$lambda_0);
    $this$ComponentStyle.cssRule_fe6cwq_k$(' h3', MarkdownStyle$delegate$lambda$lambda_1);
    $this$ComponentStyle.cssRule_fe6cwq_k$(' h4', MarkdownStyle$delegate$lambda$lambda_2);
    $this$ComponentStyle.cssRule_fe6cwq_k$(' p', MarkdownStyle$delegate$lambda$lambda_3);
    $this$ComponentStyle.cssRule_fe6cwq_k$(' ul', MarkdownStyle$delegate$lambda$lambda_4);
    $this$ComponentStyle.cssRule_fe6cwq_k$(' li,ol,ul', MarkdownStyle$delegate$lambda$lambda_5);
    $this$ComponentStyle.cssRule_fe6cwq_k$(' code', MarkdownStyle$delegate$lambda$lambda_6($this$ComponentStyle));
    $this$ComponentStyle.cssRule_fe6cwq_k$(' pre', MarkdownStyle$delegate$lambda$lambda_7);
    $this$ComponentStyle.cssRule_fe6cwq_k$(' pre > code', MarkdownStyle$delegate$lambda$lambda_8($this$ComponentStyle));
    return Unit_getInstance();
  }
  function MarkdownStyle$delegate$lambda$lambda() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return lineHeight(margin(fontWeight(fontSize(Companion_getInstance_3(), get_cssRem(3)), 400), VOID, VOID, get_cssRem(2.5)), 1.2);
  }
  function MarkdownStyle$delegate$lambda$lambda_0() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return margin_0(fontWeight(fontSize(Companion_getInstance_3(), get_cssRem(3)), 300), get_cssRem(2));
  }
  function MarkdownStyle$delegate$lambda$lambda_1() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return margin_0(fontWeight(fontSize(Companion_getInstance_3(), get_cssRem(2.4)), 300), get_cssRem(1.5));
  }
  function MarkdownStyle$delegate$lambda$lambda_2() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return margin(fontWeight_0(fontSize(Companion_getInstance_3(), get_cssRem(1.2)), Companion_getInstance_7().get_Bolder_3mclb9_k$()), get_cssRem(1), VOID, get_cssRem(0.5));
  }
  function MarkdownStyle$delegate$lambda$lambda_3() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return margin(Companion_getInstance_3(), VOID, VOID, get_cssRem(0.8));
  }
  function MarkdownStyle$delegate$lambda$lambda_4() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return overflowWrap(fillMaxWidth(Companion_getInstance_3()), Companion_getInstance_8().get_BreakWord_a9p49s_k$());
  }
  function MarkdownStyle$delegate$lambda$lambda_5() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return margin(Companion_getInstance_3(), VOID, VOID, get_cssRem(0.25));
  }
  function MarkdownStyle$delegate$lambda$lambda_6($this_ComponentStyle) {
    return function () {
      return fontWeight_0(color(Companion_getInstance_3(), get_color(toPalette($this_ComponentStyle.get_colorMode_trbg8z_k$())).toRgb_1tsrpu_k$().copyf$default_6pu18v_k$(VOID, VOID, VOID, 0.8)), Companion_getInstance_7().get_Bolder_3mclb9_k$());
    };
  }
  function MarkdownStyle$delegate$lambda$lambda_7() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return fillMaxWidth(margin(Companion_getInstance_3(), get_cssRem(0.5), VOID, get_cssRem(2)));
  }
  function MarkdownStyle$delegate$lambda$lambda$lambda($this$overflow) {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    $this$overflow.x_7tere2_k$(Companion_getInstance_9().get_Auto_wnyn88_k$());
    return Unit_getInstance();
  }
  function MarkdownStyle$delegate$lambda$lambda_8($this_ComponentStyle) {
    return function () {
      var tmp = Companion_getInstance_3();
      // Inline function 'org.jetbrains.compose.web.css.Companion.Block' call
      Companion_getInstance_10();
      // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = backgroundColor(fillMaxWidth(display(tmp, 'block')), toSitePalette($this_ComponentStyle.get_colorMode_trbg8z_k$()).get_nearBackground_c1s3l_k$());
      var tmp_1 = get_px(1);
      // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
      Companion_getInstance_11();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_2 = fontSize(padding(borderRadius(border(tmp_0, tmp_1, 'solid', get_color(toPalette($this_ComponentStyle.get_colorMode_trbg8z_k$()))), get_cssRem(0.25)), get_cssRem(0.5)), get_cssRem(1));
      return overflow(tmp_2, MarkdownStyle$delegate$lambda$lambda$lambda);
    };
  }
  function MarkdownLayout$composable$lambda$lambda($content) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(987872720, $changed, -1, 'com.rudra.kotfolio.components.layouts.MarkdownLayout$composable.<anonymous>.<anonymous> (MarkdownLayout.kt:94)');
        }
        $content($composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_74($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function MarkdownLayout$composable$lambda($content) {
    return function ($this$PageLayout, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-96230375, $changed, -1, 'com.rudra.kotfolio.components.layouts.MarkdownLayout$composable.<anonymous> (MarkdownLayout.kt:93)');
        }
        var tmp_0 = fillMaxSize(toModifier$composable(get_MarkdownStyle(), [], $composer_0, 64));
        var tmp_1 = Start_getInstance();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.rudra.kotfolio.components.layouts.MarkdownLayout$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, 987872720, true, MarkdownLayout$composable$lambda$lambda($content));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.rudra.kotfolio.components.layouts.MarkdownLayout$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_74(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Column$composable(tmp_0, null, tmp_1, null, tmp0, $composer_0, 24960, 10);
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_getInstance();
        }
        tmp = tmp_5;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_75($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function MarkdownLayout$composable$lambda_0($title, $content, $$changed) {
    return function ($composer, $force) {
      MarkdownLayout$composable($title, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function MarkdownStyle$factory() {
    return getPropertyCallableRef('MarkdownStyle', 0, KProperty0, function () {
      return get_MarkdownStyle();
    }, null);
  }
  var properties_initialized_MarkdownLayout_kt_c0ljiz;
  function _init_properties_MarkdownLayout_kt__1k3pk7() {
    if (!properties_initialized_MarkdownLayout_kt_c0ljiz) {
      properties_initialized_MarkdownLayout_kt_c0ljiz = true;
      MarkdownStyle$delegate = ComponentStyle(VOID, VOID, MarkdownStyle$delegate$lambda);
    }
  }
  function get_PageContentStyle() {
    _init_properties_PageLayout_kt__pf69s7();
    return PageContentStyle$delegate.getValue_fbnwi2_k$(null, PageContentStyle$factory());
  }
  var PageContentStyle$delegate;
  function SvgCobweb(modifier) {
    _init_properties_PageLayout_kt__pf69s7();
    illegalDecoyCallException('SvgCobweb');
  }
  function SVGBackroundCircle(modifier) {
    _init_properties_PageLayout_kt__pf69s7();
    illegalDecoyCallException('SVGBackroundCircle');
  }
  function PageLayout(title, content) {
    _init_properties_PageLayout_kt__pf69s7();
    illegalDecoyCallException('PageLayout');
  }
  function SvgCobweb$composable(modifier, $composer, $changed) {
    _init_properties_PageLayout_kt__pf69s7();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(912429807);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(912429807, $dirty, -1, 'com.rudra.kotfolio.components.layouts.SvgCobweb$composable (PageLayout.kt:42)');
      }
      var color = toSitePalette(Companion_getInstance_1().$get_current$$composable_nxoy3y_k$($composer_0, 6)).get_cobweb_bzyxwn_k$();
      var tmp = maxWidth(modifier, get_percent(100));
      $composer_0.startReplaceableGroup_ip860b_k$(-1900392079);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.components.layouts.SvgCobweb$composable.<anonymous>' call
        var value = SvgCobweb$composable$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var tmp_2 = toAttrs(tmp, tmpCache);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.rudra.kotfolio.components.layouts.SvgCobweb$composable.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, 1803888317, true, SvgCobweb$composable$lambda_0(color));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.components.layouts.SvgCobweb$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_78(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it_0;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Svg$composable(tmp_2, tmp0, $composer_0, 48, 0);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(SvgCobweb$composable$lambda_1(modifier, $changed));
    }
  }
  function SVGBackroundCircle$composable(modifier, $composer, $changed) {
    _init_properties_PageLayout_kt__pf69s7();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-243656136);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-243656136, $dirty, -1, 'com.rudra.kotfolio.components.layouts.SVGBackroundCircle$composable (PageLayout.kt:75)');
      }
      var tmp = Images_getInstance().get_BACKGROUND_CIRCLES_wnx88r_k$();
      AppearanceAwareImage$composable_0(tmp, modifier, null, null, null, null, false, null, $composer_0, 6 | 112 & $dirty << 3, 252);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(SVGBackroundCircle$composable$lambda(modifier, $changed));
    }
  }
  function PageLayout$composable(title, content, $composer, $changed) {
    _init_properties_PageLayout_kt__pf69s7();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(873875066);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(title) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(873875066, $dirty, -1, 'com.rudra.kotfolio.components.layouts.PageLayout$composable (PageLayout.kt:83)');
      }
      var breakpoint = rememberBreakpoint$composable($composer_0, 0);
      var tmp;
      if (Companion_getInstance_1().$get_current$$composable_nxoy3y_k$($composer_0, 6).get_isDark_evw91l_k$()) {
        tmp = Images_getInstance().get_CUSTOM_CURSOR_DARK_o6hksm_k$();
      } else {
        tmp = Images_getInstance().get_CUSTOM_CURSOR_LIGHT_vvmxki_k$();
      }
      var cursor = tmp;
      $composer_0.startReplaceableGroup_ip860b_k$(-1900385271);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = $composer_0.changed_ga7h3f_k$(title);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.components.layouts.PageLayout$composable.<anonymous>' call
        var value = PageLayout$composable$slambda_0(title, null);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      LaunchedEffect$composable(title, tmpCache, $composer_0, 14 & $dirty);
      var tmp_2 = minHeight(fillMaxWidth(Companion_getInstance_3()), get_percent(100));
      $composer_0.startReplaceableGroup_ip860b_k$(-1900385098);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      var invalid_0 = $composer_0.changed_ga7h3f_k$(cursor);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid_0 ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.components.layouts.PageLayout$composable.<anonymous>' call
        var value_0 = PageLayout$composable$lambda(cursor);
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmpCache_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var tmp_5 = styleModifier(tmp_2, tmpCache_0);
      $composer_0.startReplaceableGroup_ip860b_k$(-1900384395);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.rememberedValue_4dg93v_k$();
      var tmp_6;
      if (false ? true : it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.components.layouts.PageLayout$composable.<anonymous>' call
        var value_1 = PageLayout$composable$lambda_0;
        this_2.updateRememberedValue_l1wh71_k$(value_1);
        tmp_6 = value_1;
      } else {
        tmp_6 = it_1;
      }
      var tmp_7 = tmp_6;
      var tmpCache_1 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var tmp_8 = gridTemplateRows(tmp_5, tmpCache_1);
      var tmp_9 = Center_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.rudra.kotfolio.components.layouts.PageLayout$composable.<anonymous>' call
      var tmp_10 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_10, 988948137, true, PageLayout$composable$lambda_1(breakpoint, content));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_11;
      if (invalid_1 ? true : it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.components.layouts.PageLayout$composable.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_81(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_2);
        tmp_11 = value_2;
      } else {
        tmp_11 = it_2;
      }
      var tmp_12 = tmp_11;
      var tmp0 = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Box$composable(tmp_8, tmp_9, null, tmp0, $composer_0, 3120, 4);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(PageLayout$composable$lambda_2(title, content, $changed));
    }
  }
  function PageContentStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_PageLayout_kt__pf69s7();
    $this$ComponentStyle.base_y8uu8g_k$(PageContentStyle$delegate$lambda$lambda);
    var tmp = Breakpoint_MD_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp, PageContentStyle$delegate$lambda$lambda_0);
    return Unit_getInstance();
  }
  function PageContentStyle$delegate$lambda$lambda() {
    _init_properties_PageLayout_kt__pf69s7();
    var tmp0_$receiver = fillMaxSize(Companion_getInstance_3());
    var tmp1_leftRight = get_cssRem(2);
    var tmp2_top = get_cssRem(4);
    return padding_0(tmp0_$receiver, tmp2_top, tmp1_leftRight);
  }
  function PageContentStyle$delegate$lambda$lambda_0() {
    _init_properties_PageLayout_kt__pf69s7();
    return maxWidth(Companion_getInstance_3(), get_cssRem(60));
  }
  function SvgCobweb$composable$lambda($this$toAttrs) {
    _init_properties_PageLayout_kt__pf69s7();
    $this$toAttrs.width_3dri8b_k$(get_cssRem(25));
    $this$toAttrs.height_vnwjw4_k$(get_cssRem(20));
    return Unit_getInstance();
  }
  function SvgCobweb$composable$lambda$lambda$lambda($this$RadialGradient) {
    _init_properties_PageLayout_kt__pf69s7();
    $this$RadialGradient.cx_7c4b4q_k$(0);
    $this$RadialGradient.cy_5a8zln_k$(0);
    $this$RadialGradient.r_uxqzt5_k$(get_percent(120));
    return Unit_getInstance();
  }
  function SvgCobweb$composable$lambda$lambda$lambda_0($color) {
    return function ($this$RadialGradient, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$RadialGradient) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-586027617, $dirty, -1, 'com.rudra.kotfolio.components.layouts.SvgCobweb$composable.<anonymous>.<anonymous>.<anonymous> (PageLayout.kt:58)');
        }
        var tmp_1 = get_percent(50);
        Stop$composable($this$RadialGradient, tmp_1, $color, null, $composer_0, 14 & $dirty, 4);
        Stop$composable($this$RadialGradient, get_percent(100), $color, 0.0, $composer_0, 3072 | 14 & $dirty, 0);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp_0 = tmp_2;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_76($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SvgCobweb$composable$lambda$lambda($cobwebFadeOutId, $color) {
    return function ($this$Defs, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$Defs) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1917576997, $dirty, -1, 'com.rudra.kotfolio.components.layouts.SvgCobweb$composable.<anonymous>.<anonymous> (PageLayout.kt:53)');
        }
        $composer_0.startReplaceableGroup_ip860b_k$(-1900391818);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.rudra.kotfolio.components.layouts.SvgCobweb$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = SvgCobweb$composable$lambda$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmpCache = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.rudra.kotfolio.components.layouts.SvgCobweb$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_3 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_3, -586027617, true, SvgCobweb$composable$lambda$lambda$lambda_0($color));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_4;
        if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.rudra.kotfolio.components.layouts.SvgCobweb$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_76(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_4 = value_0;
        } else {
          tmp_4 = it_0;
        }
        var tmp_5 = tmp_4;
        var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        RadialGradient$composable($this$Defs, $cobwebFadeOutId, tmpCache, tmp0, $composer_0, 3120 | 14 & $dirty, 0);
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_getInstance();
        }
        tmp_0 = tmp_6;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_77($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SvgCobweb$composable$lambda_0($color) {
    return function ($this$Svg, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$Svg) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1803888317, $dirty, -1, 'com.rudra.kotfolio.components.layouts.SvgCobweb$composable.<anonymous> (PageLayout.kt:50)');
        }
        var cobwebFadeOutId = _SvgId___init__impl__pmt7ru('cobweb-fade-out');
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.rudra.kotfolio.components.layouts.SvgCobweb$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -1917576997, true, SvgCobweb$composable$lambda$lambda(cobwebFadeOutId, $color));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.rudra.kotfolio.components.layouts.SvgCobweb$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_77(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Defs$composable($this$Svg, null, tmp0, $composer_0, 384 | 14 & $dirty, 1);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp_0 = tmp_4;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_78($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SvgCobweb$composable$lambda_1($modifier, $$changed) {
    return function ($composer, $force) {
      SvgCobweb$composable($modifier, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function SVGBackroundCircle$composable$lambda($modifier, $$changed) {
    return function ($composer, $force) {
      SVGBackroundCircle$composable($modifier, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function PageLayout$composable$slambda($title, resultContinuation) {
    this.$title_1 = $title;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(PageLayout$composable$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(PageLayout$composable$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(PageLayout$composable$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          document.title = 'Rudra Dave - ' + this.$title_1;
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(PageLayout$composable$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new PageLayout$composable$slambda(this.$title_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(PageLayout$composable$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function PageLayout$composable$slambda_0($title, resultContinuation) {
    var i = new PageLayout$composable$slambda($title, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function PageLayout$composable$lambda($cursor) {
    return function ($this$styleModifier) {
      $this$styleModifier.property_wcrait_k$('cursor', "url('" + $cursor + "'), auto");
      return Unit_getInstance();
    };
  }
  function PageLayout$composable$lambda_0($this$gridTemplateRows) {
    _init_properties_PageLayout_kt__pf69s7();
    $this$gridTemplateRows.size_q03g6h_k$(get_fr(1));
    $this$gridTemplateRows.size_azcpvi_k$($this$gridTemplateRows.get_minContent_f65gog_k$());
    return Unit_getInstance();
  }
  function PageLayout$composable$lambda$lambda($this$styleModifier) {
    _init_properties_PageLayout_kt__pf69s7();
    $this$styleModifier.property_wcrait_k$('height', 'auto');
    return Unit_getInstance();
  }
  function PageLayout$composable$lambda$lambda$lambda($content) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$Column) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1873673239, $dirty, -1, 'com.rudra.kotfolio.components.layouts.PageLayout$composable.<anonymous>.<anonymous>.<anonymous> (PageLayout.kt:128)');
        }
        $content($this$Column, $composer_0, 14 & $dirty);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_79($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function PageLayout$composable$lambda$lambda_0($content) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(652546080, $changed, -1, 'com.rudra.kotfolio.components.layouts.PageLayout$composable.<anonymous>.<anonymous> (PageLayout.kt:124)');
        }
        var tmp_0 = toModifier$composable(get_PageContentStyle(), [], $composer_0, 64);
        var tmp_1 = CenterHorizontally_getInstance();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.rudra.kotfolio.components.layouts.PageLayout$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, 1873673239, true, PageLayout$composable$lambda$lambda$lambda($content));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.rudra.kotfolio.components.layouts.PageLayout$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_79(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Column$composable(tmp_0, null, tmp_1, null, tmp0, $composer_0, 24960, 10);
        BackToTopButton$composable($composer_0, 0);
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_getInstance();
        }
        tmp = tmp_5;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_80($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function PageLayout$composable$lambda_1($breakpoint, $content) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$Box) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(988948137, $dirty, -1, 'com.rudra.kotfolio.components.layouts.PageLayout$composable.<anonymous> (PageLayout.kt:113)');
        }
        var tmp_1 = minWidth(width(pointerEvents($this$Box.align_s6rwef_k$(Companion_getInstance_3(), TopEnd_getInstance()), Companion_getInstance_12().get_None_wo6tgh_k$()), get_percent(40)), get_vw(50));
        $composer_0.startReplaceableGroup_ip860b_k$(-1900384167);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.rudra.kotfolio.components.layouts.PageLayout$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = PageLayout$composable$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmpCache = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        SVGBackroundCircle$composable(styleModifier(tmp_1, tmpCache), $composer_0, 0);
        var tmp_4 = gridRow(fillMaxSize(Companion_getInstance_3()), 1);
        var tmp_5 = CenterHorizontally_getInstance();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.rudra.kotfolio.components.layouts.PageLayout$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_6 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_6, 652546080, true, PageLayout$composable$lambda$lambda_0($content));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_7;
        if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.rudra.kotfolio.components.layouts.PageLayout$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_80(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_7 = value_0;
        } else {
          tmp_7 = it_0;
        }
        var tmp_8 = tmp_7;
        var tmp0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Column$composable(tmp_4, null, tmp_5, null, tmp0, $composer_0, 24960, 10);
        var tmp_9 = Companion_getInstance_3();
        // Inline function 'org.jetbrains.compose.web.css.Companion.Fixed' call
        Companion_getInstance_13();
        // Inline function 'org.jetbrains.compose.web.css.Position' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        NavHeader$composable(top(position(tmp_9, 'fixed'), get_px(0)), $composer_0, 0, 0);
        Footer$composable($breakpoint, gridRow(fillMaxWidth(Companion_getInstance_3()), 2), $composer_0, 0, 0);
        var tmp_10;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_10 = Unit_getInstance();
        }
        tmp_0 = tmp_10;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_81($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function PageLayout$composable$lambda_2($title, $content, $$changed) {
    return function ($composer, $force) {
      PageLayout$composable($title, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function PageContentStyle$factory() {
    return getPropertyCallableRef('PageContentStyle', 0, KProperty0, function () {
      return get_PageContentStyle();
    }, null);
  }
  var properties_initialized_PageLayout_kt_piu0g5;
  function _init_properties_PageLayout_kt__pf69s7() {
    if (!properties_initialized_PageLayout_kt_piu0g5) {
      properties_initialized_PageLayout_kt_piu0g5 = true;
      PageContentStyle$delegate = ComponentStyle(VOID, VOID, PageContentStyle$delegate$lambda);
    }
  }
  function get_$stableprop_2() {
    return 0;
  }
  function WorkExperience(sequenceNumber, role, organization, duration) {
    this.sequenceNumber_1 = sequenceNumber;
    this.role_1 = role;
    this.organization_1 = organization;
    this.duration_1 = duration;
    this.$stable_1 = 0;
  }
  protoOf(WorkExperience).get_sequenceNumber_ayu2k3_k$ = function () {
    return this.sequenceNumber_1;
  };
  protoOf(WorkExperience).get_role_wotsxr_k$ = function () {
    return this.role_1;
  };
  protoOf(WorkExperience).get_organization_o1gozg_k$ = function () {
    return this.organization_1;
  };
  protoOf(WorkExperience).get_duration_6a6kpp_k$ = function () {
    return this.duration_1;
  };
  protoOf(WorkExperience).component1_7eebsc_k$ = function () {
    return this.sequenceNumber_1;
  };
  protoOf(WorkExperience).component2_7eebsb_k$ = function () {
    return this.role_1;
  };
  protoOf(WorkExperience).component3_7eebsa_k$ = function () {
    return this.organization_1;
  };
  protoOf(WorkExperience).component4_7eebs9_k$ = function () {
    return this.duration_1;
  };
  protoOf(WorkExperience).copy_hmmiyd_k$ = function (sequenceNumber, role, organization, duration) {
    return new WorkExperience(sequenceNumber, role, organization, duration);
  };
  protoOf(WorkExperience).copy$default_40d67i_k$ = function (sequenceNumber, role, organization, duration, $super) {
    sequenceNumber = sequenceNumber === VOID ? this.sequenceNumber_1 : sequenceNumber;
    role = role === VOID ? this.role_1 : role;
    organization = organization === VOID ? this.organization_1 : organization;
    duration = duration === VOID ? this.duration_1 : duration;
    return $super === VOID ? this.copy_hmmiyd_k$(sequenceNumber, role, organization, duration) : $super.copy_hmmiyd_k$.call(this, sequenceNumber, role, organization, duration);
  };
  protoOf(WorkExperience).toString = function () {
    return 'WorkExperience(sequenceNumber=' + this.sequenceNumber_1 + ', role=' + this.role_1 + ', organization=' + this.organization_1 + ', duration=' + this.duration_1 + ')';
  };
  protoOf(WorkExperience).hashCode = function () {
    var result = getStringHashCode(this.sequenceNumber_1);
    result = imul(result, 31) + getStringHashCode(this.role_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.organization_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.duration_1) | 0;
    return result;
  };
  protoOf(WorkExperience).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WorkExperience))
      return false;
    var tmp0_other_with_cast = other instanceof WorkExperience ? other : THROW_CCE();
    if (!(this.sequenceNumber_1 === tmp0_other_with_cast.sequenceNumber_1))
      return false;
    if (!(this.role_1 === tmp0_other_with_cast.role_1))
      return false;
    if (!(this.organization_1 === tmp0_other_with_cast.organization_1))
      return false;
    if (!(this.duration_1 === tmp0_other_with_cast.duration_1))
      return false;
    return true;
  };
  function About() {
    illegalDecoyCallException('About');
  }
  function ComposableLambda$invoke$ref_82($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_1$lambda_irurs3_0($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-244235427, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$AboutKt.lambda-1.<anonymous> (About.kt:30)');
      }
      SectionTitle$composable(Constants_getInstance().get_ABOUT_ME_TITLE_w8yj58_k$(), $composer_0, 6);
      var tmp = Constants_getInstance().get_ABOUT_ME_TEXT_chvvqx_k$();
      var tmp_0 = textAlign(toModifier$composable(get_SectionDescriptionStyle(), [], $composer_0, 64), Companion_getInstance_4().get_Center_3arb0i_k$());
      var tmp_1;
      switch (Companion_getInstance_1().$get_current$$composable_nxoy3y_k$($composer_0, 6).get_ordinal_ip24qg_k$()) {
        case 0:
          tmp_1 = Colors_getInstance().get_Gray_wo2eh8_k$();
          break;
        case 1:
          tmp_1 = Colors_getInstance().get_DimGray_ep5xby_k$();
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp_2 = fontFamily(color(tmp_0, tmp_1), [Fonts_getInstance().get_DM_SANS_s5xtnk_k$()]);
      SpanText$composable(tmp, tmp_2, null, null, $composer_0, 6, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$AboutKt_0() {
    ComposableSingletons$AboutKt_instance_0 = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_82(composableLambdaInstance(-244235427, false, ComposableSingletons$AboutKt$lambda_1$lambda_irurs3_0));
  }
  protoOf(ComposableSingletons$AboutKt_0).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$AboutKt_instance_0;
  function ComposableSingletons$AboutKt_getInstance_0() {
    if (ComposableSingletons$AboutKt_instance_0 == null)
      new ComposableSingletons$AboutKt_0();
    return ComposableSingletons$AboutKt_instance_0;
  }
  function About$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-711338277);
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-711338277, $changed, -1, 'com.rudra.kotfolio.components.sections.About$composable (About.kt:23)');
      }
      var tmp = id(toModifier$composable(get_AboutStyle(), [], $composer_0, 64), 'about');
      var tmp_0 = Center_getInstance_0();
      var tmp_1 = CenterHorizontally_getInstance();
      Column$composable(tmp, tmp_0, tmp_1, null, ComposableSingletons$AboutKt_getInstance_0().lambda_1_r8sbbp_1, $composer_0, 25008, 8);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(About$composable$lambda($changed));
    }
  }
  function About$composable$lambda($$changed) {
    return function ($composer, $force) {
      About$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Experience() {
    illegalDecoyCallException('Experience');
  }
  function ComposableLambda$invoke$ref_83($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$ExperienceKt$lambda_1$lambda_qeh7we($this$Span, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-935979993, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$ExperienceKt.lambda-1.<anonymous> (Experience.kt:52)');
      }
      var tmp = Constants_getInstance().get_EXPERIENCE_SECTION_TEXT_cwto0d_k$();
      SpanText$composable(tmp, null, null, null, $composer_0, 6, 14);
      var tmp_0 = Constants_getInstance().get_EXPERIENCE_dkduz1_k$();
      var tmp_1 = Companion_getInstance_3();
      var tmp_2;
      switch (Companion_getInstance_1().$get_current$$composable_nxoy3y_k$($composer_0, 6).get_ordinal_ip24qg_k$()) {
        case 0:
          tmp_2 = Colors_getInstance().get_Black_i7mvue_k$();
          break;
        case 1:
          tmp_2 = Colors_getInstance().get_White_ij46ow_k$();
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp_3 = color(tmp_1, tmp_2);
      SpanText$composable(tmp_0, tmp_3, null, null, $composer_0, 6, 12);
      var tmp_4 = Constants_getInstance().get_OF_EXPERIENCE_2l08fd_k$();
      SpanText$composable(tmp_4, null, null, null, $composer_0, 6, 14);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_84($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$ExperienceKt$lambda_2$lambda_ft0d0j($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(191661052, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$ExperienceKt.lambda-2.<anonymous> (Experience.kt:74)');
      }
      var workExperiences = getAllWorkExperience();
      // Inline function 'kotlin.repeat' call
      var times = workExperiences.get_size_woubt6_k$();
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'com.rudra.kotfolio.components.sections.ComposableSingletons$ExperienceKt.lambda-2.<anonymous>.<anonymous>' call
          WorkExperienceBlock$composable(null, workExperiences.get_c1px32_k$(index), $composer_0, 0, 1);
        }
         while (inductionVariable < times);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_85($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$ExperienceKt$lambda_3$lambda_d0m41o($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(637753541, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$ExperienceKt.lambda-3.<anonymous> (Experience.kt:38)');
      }
      SectionTitle$composable(Constants_getInstance().get_EXPERIENCE_TITLE_4l8dg4_k$(), $composer_0, 6);
      var tmp = fontFamily(textAlign(toModifier$composable(get_SectionDescriptionStyle(), [], $composer_0, 64), Companion_getInstance_4().get_Center_3arb0i_k$()), [Fonts_getInstance().get_DM_SANS_s5xtnk_k$()]);
      var tmp_0;
      switch (Companion_getInstance_1().$get_current$$composable_nxoy3y_k$($composer_0, 6).get_ordinal_ip24qg_k$()) {
        case 0:
          tmp_0 = Colors_getInstance().get_Gray_wo2eh8_k$();
          break;
        case 1:
          tmp_0 = Colors_getInstance().get_DimGray_ep5xby_k$();
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      Span$composable(toAttrs(color(tmp, tmp_0)), ComposableSingletons$ExperienceKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 48, 0);
      var tmp_1 = numColumns(1, VOID, 3);
      var tmp_2 = margin_0(Companion_getInstance_3(), get_cssRem(2));
      SimpleGrid$composable(tmp_1, tmp_2, null, null, ComposableSingletons$ExperienceKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 24576, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$ExperienceKt() {
    ComposableSingletons$ExperienceKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_83(composableLambdaInstance(-935979993, false, ComposableSingletons$ExperienceKt$lambda_1$lambda_qeh7we));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_84(composableLambdaInstance(191661052, false, ComposableSingletons$ExperienceKt$lambda_2$lambda_ft0d0j));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_85(composableLambdaInstance(637753541, false, ComposableSingletons$ExperienceKt$lambda_3$lambda_d0m41o));
  }
  protoOf(ComposableSingletons$ExperienceKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$ExperienceKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$ExperienceKt).get_lambda_3_bzdzzq_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  var ComposableSingletons$ExperienceKt_instance;
  function ComposableSingletons$ExperienceKt_getInstance() {
    if (ComposableSingletons$ExperienceKt_instance == null)
      new ComposableSingletons$ExperienceKt();
    return ComposableSingletons$ExperienceKt_instance;
  }
  function Experience$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(150638428);
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(150638428, $changed, -1, 'com.rudra.kotfolio.components.sections.Experience$composable (Experience.kt:31)');
      }
      var tmp0_modifier = id(toModifier$composable(get_ExperienceStyle(), [], $composer_0, 64), 'experience');
      var tmp1_horizontalAlignment = CenterHorizontally_getInstance();
      var tmp2_verticalArrangement = Center_getInstance_0();
      Column$composable(tmp0_modifier, tmp2_verticalArrangement, tmp1_horizontalAlignment, null, ComposableSingletons$ExperienceKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 25008, 8);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(Experience$composable$lambda($changed));
    }
  }
  function Experience$composable$lambda($$changed) {
    return function ($composer, $force) {
      Experience$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function get_FooterStyle() {
    _init_properties_Footer_kt__fc6p2z();
    return FooterStyle$delegate.getValue_fbnwi2_k$(null, FooterStyle$factory());
  }
  var FooterStyle$delegate;
  function Footer(breakpoint, modifier) {
    _init_properties_Footer_kt__fc6p2z();
    illegalDecoyCallException('Footer');
  }
  function EmailButton(ctx) {
    _init_properties_Footer_kt__fc6p2z();
    illegalDecoyCallException('EmailButton');
  }
  function ResumeButton() {
    _init_properties_Footer_kt__fc6p2z();
    illegalDecoyCallException('ResumeButton');
  }
  function EmailAndResume(ctx) {
    _init_properties_Footer_kt__fc6p2z();
    illegalDecoyCallException('EmailAndResume');
  }
  function FooterContent(breakpoint, footerTextAlignment, footerColumnAlignment, footerColor, modifier) {
    _init_properties_Footer_kt__fc6p2z();
    illegalDecoyCallException('FooterContent');
  }
  function NetworkingIconButtons(ctx, modifier) {
    _init_properties_Footer_kt__fc6p2z();
    illegalDecoyCallException('NetworkingIconButtons');
  }
  function ComposableLambda$invoke$ref_86($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$FooterKt$lambda_1$lambda_a73781($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1718388845, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$FooterKt.lambda-1.<anonymous> (Footer.kt:75)');
      }
      var tmp = fontFamily(Companion_getInstance_3(), [Fonts_getInstance().get_DM_SANS_s5xtnk_k$()]);
      SpanText$composable('Email', tmp, null, null, $composer_0, 6, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_87($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$FooterKt$lambda_2$lambda_imj9u6($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(601681027, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$FooterKt.lambda-2.<anonymous> (Footer.kt:183)');
      }
      var tmp = Images_getInstance().get_LINKEDIN_wb2yv_k$();
      AppearanceAwareImage$composable_0(tmp, null, null, null, null, null, false, null, $composer_0, 6, 254);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_88($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$FooterKt$lambda_3$lambda_nkyb2r($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1122612166, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$FooterKt.lambda-3.<anonymous> (Footer.kt:188)');
      }
      var tmp = Images_getInstance().get_GITHUB_1ugkr8_k$();
      AppearanceAwareImage$composable_0(tmp, null, null, null, null, null, false, null, $composer_0, 6, 254);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_89($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$FooterKt$lambda_4$lambda_58o5zg($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-2007347973, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$FooterKt.lambda-4.<anonymous> (Footer.kt:193)');
      }
      var tmp = Images_getInstance().get_TWITTER_X_ir55x9_k$();
      AppearanceAwareImage$composable_0(tmp, null, null, null, null, null, false, null, $composer_0, 6, 254);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_90($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$FooterKt$lambda_5$lambda_y2an1n($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1402883516, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$FooterKt.lambda-5.<anonymous> (Footer.kt:198)');
      }
      var tmp = Images_getInstance().get_MEDIUM_xbs72_k$();
      AppearanceAwareImage$composable_0(tmp, null, null, null, null, null, false, null, $composer_0, 6, 254);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$FooterKt() {
    ComposableSingletons$FooterKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_86(composableLambdaInstance(-1718388845, false, ComposableSingletons$FooterKt$lambda_1$lambda_a73781));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_87(composableLambdaInstance(601681027, false, ComposableSingletons$FooterKt$lambda_2$lambda_imj9u6));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_88(composableLambdaInstance(-1122612166, false, ComposableSingletons$FooterKt$lambda_3$lambda_nkyb2r));
    var tmp_2 = this;
    tmp_2.lambda_4_r8sbbm_1 = ComposableLambda$invoke$ref_89(composableLambdaInstance(-2007347973, false, ComposableSingletons$FooterKt$lambda_4$lambda_58o5zg));
    var tmp_3 = this;
    tmp_3.lambda_5_r8sbbl_1 = ComposableLambda$invoke$ref_90(composableLambdaInstance(1402883516, false, ComposableSingletons$FooterKt$lambda_5$lambda_y2an1n));
  }
  protoOf(ComposableSingletons$FooterKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$FooterKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$FooterKt).get_lambda_3_bzdzzq_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  protoOf(ComposableSingletons$FooterKt).get_lambda_4_bzdzzr_k$ = function () {
    return this.lambda_4_r8sbbm_1;
  };
  protoOf(ComposableSingletons$FooterKt).get_lambda_5_bzdzzs_k$ = function () {
    return this.lambda_5_r8sbbl_1;
  };
  var ComposableSingletons$FooterKt_instance;
  function ComposableSingletons$FooterKt_getInstance() {
    if (ComposableSingletons$FooterKt_instance == null)
      new ComposableSingletons$FooterKt();
    return ComposableSingletons$FooterKt_instance;
  }
  function Footer$composable(breakpoint, modifier, $composer, $changed, $default) {
    _init_properties_Footer_kt__fc6p2z();
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1924713479);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(breakpoint) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance_3();
      }
      if (isTraceInProgress()) {
        traceEventStart(-1924713479, $dirty, -1, 'com.rudra.kotfolio.components.sections.Footer$composable (Footer.kt:47)');
      }
      var tmp;
      switch (Companion_getInstance_1().$get_current$$composable_nxoy3y_k$($composer_0, 6).get_ordinal_ip24qg_k$()) {
        case 0:
          tmp = Colors_getInstance_0().get_FOOTER_COLOR_LIGHT_in8bmn_k$();
          break;
        case 1:
          tmp = Colors_getInstance_0().get_FOOTER_COLOR_DARK_xrt0ur_k$();
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var footerColor = tmp;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(547886695);
      sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.components.sections.Footer$composable.<anonymous>' call
        var value = mutableStateOf(true);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      var isHorizontal$delegate = tmp0;
      Footer$composable$lambda_0(isHorizontal$delegate, breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) >= 0);
      var footerTextAlignment = Footer$composable$lambda(isHorizontal$delegate) ? Companion_getInstance_4().get_Start_ih4i6x_k$() : Companion_getInstance_4().get_Center_3arb0i_k$();
      var footerColumnAlignment = Footer$composable$lambda(isHorizontal$delegate) ? Start_getInstance() : CenterHorizontally_getInstance();
      FooterContent$composable(breakpoint, footerTextAlignment, footerColumnAlignment, footerColor, modifier_0._v, $composer_0, 14 & $dirty | 57344 & $dirty << 9);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(Footer$composable$lambda_1(breakpoint, modifier_0, $changed, $default));
    }
  }
  function EmailButton$composable(ctx, $composer, $changed) {
    _init_properties_Footer_kt__fc6p2z();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-262612511);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(ctx) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-262612511, $dirty, -1, 'com.rudra.kotfolio.components.sections.EmailButton$composable (Footer.kt:66)');
      }
      var tmp0_colorScheme = CustomColorSchemes_getInstance().get_BlackAndWhite_qa7re0_k$();
      var tmp1_size = MD_getInstance();
      var tmp2_modifier = margin_1(toModifier$composable(get_ButtonStyle_0(), [], $composer_0, 64), VOID, get_px(20));
      $composer_0.startReplaceableGroup_ip860b_k$(-1725732053);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = $composer_0.changed_ga7h3f_k$(ctx);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.components.sections.EmailButton$composable.<anonymous>' call
        var value = EmailButton$composable$lambda(ctx);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      Button$composable(tmpCache, tmp2_modifier, null, null, false, tmp1_size, tmp0_colorScheme, null, null, ComposableSingletons$FooterKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 805502976, 412);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(EmailButton$composable$lambda_0(ctx, $changed));
    }
  }
  function ResumeButton$composable($composer, $changed) {
    _init_properties_Footer_kt__fc6p2z();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1966444529);
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1966444529, $changed, -1, 'com.rudra.kotfolio.components.sections.ResumeButton$composable (Footer.kt:83)');
      }
      var tmp = Constants_getInstance().get_RESUME_URL_lcc8ca_k$();
      var tmp_0 = fontFamily(Companion_getInstance_3(), [Fonts_getInstance().get_DM_SANS_s5xtnk_k$()]);
      var tmp_1;
      switch (Companion_getInstance_1().$get_current$$composable_nxoy3y_k$($composer_0, 6).get_ordinal_ip24qg_k$()) {
        case 0:
          tmp_1 = Colors_getInstance().get_Black_i7mvue_k$();
          break;
        case 1:
          tmp_1 = Colors_getInstance().get_White_ij46ow_k$();
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp_2 = color(tmp_0, tmp_1);
      Link$composable(tmp, 'Resume.', tmp_2, null, null, null, false, null, $composer_0, 54, 248);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(ResumeButton$composable$lambda($changed));
    }
  }
  function EmailAndResume$composable(ctx, $composer, $changed) {
    _init_properties_Footer_kt__fc6p2z();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-388230913);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(ctx) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-388230913, $dirty, -1, 'com.rudra.kotfolio.components.sections.EmailAndResume$composable (Footer.kt:99)');
      }
      var tmp = CenterVertically_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.rudra.kotfolio.components.sections.EmailAndResume$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 1543009968, true, EmailAndResume$composable$lambda(ctx));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.components.sections.EmailAndResume$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_91(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Row$composable(null, null, tmp, null, tmp0, $composer_0, 24960, 11);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(EmailAndResume$composable$lambda_0(ctx, $changed));
    }
  }
  function FooterContent$composable(breakpoint, footerTextAlignment, footerColumnAlignment, footerColor, modifier, $composer, $changed) {
    _init_properties_Footer_kt__fc6p2z();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-2051976110);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(breakpoint) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(footerTextAlignment) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(footerColumnAlignment) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(footerColor) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-2051976110, $dirty, -1, 'com.rudra.kotfolio.components.sections.FooterContent$composable (Footer.kt:113)');
      }
      var tmp = fontFamily(backgroundColor(toModifier$composable(get_FooterStyle(), [], $composer_0, 64), footerColor), [Fonts_getInstance().get_DM_SANS_s5xtnk_k$()]).then_mmfvo6_k$(modifier);
      var tmp_0 = Center_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.rudra.kotfolio.components.sections.FooterContent$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -1720463206, true, FooterContent$composable$lambda(footerColumnAlignment, footerTextAlignment, breakpoint));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.components.sections.FooterContent$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_95(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Box$composable(tmp, tmp_0, null, tmp0, $composer_0, 3120, 4);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(FooterContent$composable$lambda_0(breakpoint, footerTextAlignment, footerColumnAlignment, footerColor, modifier, $changed));
    }
  }
  function NetworkingIconButtons$composable(ctx, modifier, $composer, $changed, $default) {
    _init_properties_Footer_kt__fc6p2z();
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(544126316);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(ctx) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance_3();
      }
      if (isTraceInProgress()) {
        traceEventStart(544126316, $dirty, -1, 'com.rudra.kotfolio.components.sections.NetworkingIconButtons$composable (Footer.kt:174)');
      }
      var tmp0_numColumns = numColumns(5);
      var tmp = modifier_0._v;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.rudra.kotfolio.components.sections.NetworkingIconButtons$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, -1784176033, true, NetworkingIconButtons$composable$lambda(ctx));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.components.sections.NetworkingIconButtons$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_96(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      SimpleGrid$composable(tmp0_numColumns, tmp, null, null, tmp0, $composer_0, 24576 | 112 & $dirty, 12);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(NetworkingIconButtons$composable$lambda_0(ctx, modifier_0, $changed, $default));
    }
  }
  function Footer$composable$lambda($isHorizontal$delegate) {
    _init_properties_Footer_kt__fc6p2z();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('isHorizontal', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $isHorizontal$delegate.get_value_j01efc_k$();
  }
  function Footer$composable$lambda_0($isHorizontal$delegate, value) {
    _init_properties_Footer_kt__fc6p2z();
    getLocalDelegateReference('isHorizontal', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $isHorizontal$delegate.set_value_v1vabv_k$(value);
    return Unit_getInstance();
  }
  function FooterStyle$delegate$lambda($this$base) {
    _init_properties_Footer_kt__fc6p2z();
    return padding_1(Companion_getInstance_3(), get_cssRem(1.5), get_percent(10));
  }
  function Footer$composable$lambda_1($breakpoint, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      Footer$composable($breakpoint, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function EmailButton$composable$lambda($ctx) {
    return function (it) {
      $ctx.get_router_j3zccy_k$().navigateTo$default_onbd51_k$(Constants_getInstance().get_MAIL_TO_qvrw2i_k$());
      return Unit_getInstance();
    };
  }
  function EmailButton$composable$lambda_0($ctx, $$changed) {
    return function ($composer, $force) {
      EmailButton$composable($ctx, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ResumeButton$composable$lambda($$changed) {
    return function ($composer, $force) {
      ResumeButton$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function EmailAndResume$composable$lambda($ctx) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1543009968, $changed, -1, 'com.rudra.kotfolio.components.sections.EmailAndResume$composable.<anonymous> (Footer.kt:101)');
        }
        EmailButton$composable($ctx, $composer_0, 0);
        ResumeButton$composable($composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_91($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function EmailAndResume$composable$lambda_0($ctx, $$changed) {
    return function ($composer, $force) {
      EmailAndResume$composable($ctx, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function FooterContent$composable$lambda$lambda$lambda($ctx) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(235064047, $changed, -1, 'com.rudra.kotfolio.components.sections.FooterContent$composable.<anonymous>.<anonymous>.<anonymous> (Footer.kt:150)');
        }
        EmailAndResume$composable($ctx, $composer_0, 0);
        Spacer$composable($composer_0, 0);
        NetworkingIconButtons$composable($ctx, null, $composer_0, 0, 2);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_92($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function FooterContent$composable$lambda$lambda$lambda_0($ctx) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-882526804, $changed, -1, 'com.rudra.kotfolio.components.sections.FooterContent$composable.<anonymous>.<anonymous>.<anonymous> (Footer.kt:162)');
        }
        EmailAndResume$composable($ctx, $composer_0, 0);
        Spacer$composable($composer_0, 0);
        NetworkingIconButtons$composable($ctx, margin(Companion_getInstance_3(), get_cssRem(2)), $composer_0, 0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_93($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function FooterContent$composable$lambda$lambda($footerTextAlignment, $breakpoint) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-243109487, $changed, -1, 'com.rudra.kotfolio.components.sections.FooterContent$composable.<anonymous>.<anonymous> (Footer.kt:126)');
        }
        var tmp_0 = fillMaxWidth(Companion_getInstance_3());
        var tmp_1;
        switch (Companion_getInstance_1().$get_current$$composable_nxoy3y_k$($composer_0, 6).get_ordinal_ip24qg_k$()) {
          case 0:
            tmp_1 = Colors_getInstance().get_Gray_wo2eh8_k$();
            break;
          case 1:
            tmp_1 = Colors_getInstance().get_DimGray_ep5xby_k$();
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        var tmp_2 = fontSize_0(textAlign(color(tmp_0, tmp_1), $footerTextAlignment), Companion_getInstance_14().get_Small_ih014u_k$());
        SpanText$composable('Feel free to reach out to me via mail or any of the listed mediums', tmp_2, null, null, $composer_0, 6, 12);
        var ctx = rememberPageContext$composable($composer_0, 0);
        if ($breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) >= 0) {
          $composer_0.startReplaceableGroup_ip860b_k$(-261787238);
          var tmp_3 = padding_1(fillMaxWidth(Companion_getInstance_3()), get_cssRem(2));
          var tmp_4 = Start_getInstance_0();
          var tmp_5 = CenterVertically_getInstance();
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.rudra.kotfolio.components.sections.FooterContent$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_6 = $composer_0;
          var dispatchReceiver = composableLambda(tmp_6, 235064047, true, FooterContent$composable$lambda$lambda$lambda(ctx));
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var $composer_1 = $composer_0;
          $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
          sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_1.rememberedValue_4dg93v_k$();
          var tmp_7;
          if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
            // Inline function 'com.rudra.kotfolio.components.sections.FooterContent$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value = ComposableLambda$invoke$ref_92(dispatchReceiver);
            $composer_1.updateRememberedValue_l1wh71_k$(value);
            tmp_7 = value;
          } else {
            tmp_7 = it;
          }
          var tmp_8 = tmp_7;
          var tmp0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
          $composer_1.endReplaceableGroup_ern0ak_k$();
          Row$composable(tmp_3, tmp_4, tmp_5, null, tmp0, $composer_0, 25008, 8);
          $composer_0.endReplaceableGroup_ern0ak_k$();
        } else {
          $composer_0.startReplaceableGroup_ip860b_k$(-261786822);
          var tmp1_modifier = padding_1(fillMaxWidth(Companion_getInstance_3()), get_cssRem(2));
          var tmp2_horizontalAlignment = CenterHorizontally_getInstance();
          var tmp3_verticalArrangement = Center_getInstance_0();
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.rudra.kotfolio.components.sections.FooterContent$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_9 = $composer_0;
          var dispatchReceiver_0 = composableLambda(tmp_9, -882526804, true, FooterContent$composable$lambda$lambda$lambda_0(ctx));
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var $composer_2 = $composer_0;
          $composer_2.startReplaceableGroup_ip860b_k$(-838505973);
          sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_0 = $composer_2.rememberedValue_4dg93v_k$();
          var tmp_10;
          if (invalid_0 ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
            // Inline function 'com.rudra.kotfolio.components.sections.FooterContent$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value_0 = ComposableLambda$invoke$ref_93(dispatchReceiver_0);
            $composer_2.updateRememberedValue_l1wh71_k$(value_0);
            tmp_10 = value_0;
          } else {
            tmp_10 = it_0;
          }
          var tmp_11 = tmp_10;
          var tmp0_0 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
          $composer_2.endReplaceableGroup_ern0ak_k$();
          Column$composable(tmp1_modifier, tmp3_verticalArrangement, tmp2_horizontalAlignment, null, tmp0_0, $composer_0, 25008, 8);
          $composer_0.endReplaceableGroup_ern0ak_k$();
        }
        var tmp_12;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_12 = Unit_getInstance();
        }
        tmp = tmp_12;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_94($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function FooterContent$composable$lambda($footerColumnAlignment, $footerTextAlignment, $breakpoint) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1720463206, $changed, -1, 'com.rudra.kotfolio.components.sections.FooterContent$composable.<anonymous> (Footer.kt:121)');
        }
        var tmp_0 = margin(fillMaxWidth(Companion_getInstance_3()), get_cssRem(2));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.rudra.kotfolio.components.sections.FooterContent$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -243109487, true, FooterContent$composable$lambda$lambda($footerTextAlignment, $breakpoint));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.rudra.kotfolio.components.sections.FooterContent$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_94(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Column$composable(tmp_0, null, $footerColumnAlignment, null, tmp0, $composer_0, 24576, 10);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_95($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function FooterContent$composable$lambda_0($breakpoint, $footerTextAlignment, $footerColumnAlignment, $footerColor, $modifier, $$changed) {
    return function ($composer, $force) {
      FooterContent$composable($breakpoint, $footerTextAlignment, $footerColumnAlignment, $footerColor, $modifier, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function NetworkingIconButtons$composable$lambda$lambda($ctx) {
    return function () {
      $ctx.get_router_j3zccy_k$().navigateTo$default_onbd51_k$(Constants_getInstance().get_LINKEDIN_URL_g9prkn_k$());
      return Unit_getInstance();
    };
  }
  function NetworkingIconButtons$composable$lambda$lambda_0($ctx) {
    return function () {
      $ctx.get_router_j3zccy_k$().navigateTo$default_onbd51_k$(Constants_getInstance().get_GITHUB_URL_kptwn0_k$());
      return Unit_getInstance();
    };
  }
  function NetworkingIconButtons$composable$lambda$lambda_1($ctx) {
    return function () {
      $ctx.get_router_j3zccy_k$().navigateTo$default_onbd51_k$(Constants_getInstance().get_TWITTER_URL_j9qsxm_k$());
      return Unit_getInstance();
    };
  }
  function NetworkingIconButtons$composable$lambda$lambda_2($ctx) {
    return function () {
      $ctx.get_router_j3zccy_k$().navigateTo$default_onbd51_k$(Constants_getInstance().get_MEDIUM_URL_tmawpa_k$());
      return Unit_getInstance();
    };
  }
  function NetworkingIconButtons$composable$lambda($ctx) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1784176033, $changed, -1, 'com.rudra.kotfolio.components.sections.NetworkingIconButtons$composable.<anonymous> (Footer.kt:180)');
        }
        $composer_0.startReplaceableGroup_ip860b_k$(-1725728857);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.changed_ga7h3f_k$($ctx);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.rudra.kotfolio.components.sections.NetworkingIconButtons$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = NetworkingIconButtons$composable$lambda$lambda($ctx);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        IconButtonNoHover$composable(tmpCache, ComposableSingletons$FooterKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 48);
        $composer_0.startReplaceableGroup_ip860b_k$(-1725728676);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_0.changed_ga7h3f_k$($ctx);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid_0 ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.rudra.kotfolio.components.sections.NetworkingIconButtons$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = NetworkingIconButtons$composable$lambda$lambda_0($ctx);
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_0;
        }
        var tmp_3 = tmp_2;
        var tmpCache_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        IconButtonNoHover$composable(tmpCache_0, ComposableSingletons$FooterKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 48);
        $composer_0.startReplaceableGroup_ip860b_k$(-1725728499);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_0.changed_ga7h3f_k$($ctx);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_4;
        if (invalid_1 ? true : it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.rudra.kotfolio.components.sections.NetworkingIconButtons$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = NetworkingIconButtons$composable$lambda$lambda_1($ctx);
          $composer_0.updateRememberedValue_l1wh71_k$(value_1);
          tmp_4 = value_1;
        } else {
          tmp_4 = it_1;
        }
        var tmp_5 = tmp_4;
        var tmpCache_1 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        IconButtonNoHover$composable(tmpCache_1, ComposableSingletons$FooterKt_getInstance().lambda_4_r8sbbm_1, $composer_0, 48);
        $composer_0.startReplaceableGroup_ip860b_k$(-1725728318);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_2 = $composer_0.changed_ga7h3f_k$($ctx);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_6;
        if (invalid_2 ? true : it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.rudra.kotfolio.components.sections.NetworkingIconButtons$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value_2 = NetworkingIconButtons$composable$lambda$lambda_2($ctx);
          $composer_0.updateRememberedValue_l1wh71_k$(value_2);
          tmp_6 = value_2;
        } else {
          tmp_6 = it_2;
        }
        var tmp_7 = tmp_6;
        var tmpCache_2 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        IconButtonNoHover$composable(tmpCache_2, ComposableSingletons$FooterKt_getInstance().lambda_5_r8sbbl_1, $composer_0, 48);
        var tmp_8;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_8 = Unit_getInstance();
        }
        tmp = tmp_8;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_96($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function NetworkingIconButtons$composable$lambda_0($ctx, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      NetworkingIconButtons$composable($ctx, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function FooterStyle$factory() {
    return getPropertyCallableRef('FooterStyle', 0, KProperty0, function () {
      return get_FooterStyle();
    }, null);
  }
  var properties_initialized_Footer_kt_pg7k03;
  function _init_properties_Footer_kt__fc6p2z() {
    if (!properties_initialized_Footer_kt_pg7k03) {
      properties_initialized_Footer_kt_pg7k03 = true;
      var tmp = Companion_getInstance_5();
      FooterStyle$delegate = base(tmp, VOID, VOID, FooterStyle$delegate$lambda);
    }
  }
  function Home() {
    illegalDecoyCallException('Home');
  }
  function ComposableLambda$invoke$ref_97($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$HomeKt$lambda_1$lambda_anshu5($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(2101633152, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$HomeKt.lambda-1.<anonymous> (Home.kt:80)');
      }
      var tmp = Constants_getInstance().get_AND_NICE_TO_MEET_YOU_gcoa86_k$();
      var tmp_0 = toModifier$composable(get_UsersMessageStyle(), [], $composer_0, 64);
      var tmp_1;
      switch (Companion_getInstance_1().$get_current$$composable_nxoy3y_k$($composer_0, 6).get_ordinal_ip24qg_k$()) {
        case 0:
          tmp_1 = Colors_getInstance().get_Gray_wo2eh8_k$();
          break;
        case 1:
          tmp_1 = Colors_getInstance().get_DimGray_ep5xby_k$();
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp_2 = fontFamily(color(tmp_0, tmp_1), [Fonts_getInstance().get_DM_SANS_s5xtnk_k$()]);
      SpanText$composable(tmp, tmp_2, null, null, $composer_0, 6, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_98($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$HomeKt$lambda_2$lambda_i5tz82($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1930772295, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$HomeKt.lambda-2.<anonymous> (Home.kt:104)');
      }
      var tmp = Constants_getInstance().get_RESUME_3atpo6_k$();
      var tmp_0 = fontFamily(Companion_getInstance_3(), [Fonts_getInstance().get_Tauri_ihckuu_k$()]);
      SpanText$composable(tmp, tmp_0, null, null, $composer_0, 6, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_99($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$HomeKt$lambda_3$lambda_o1nlov($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1444512225, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$HomeKt.lambda-3.<anonymous> (Home.kt:54)');
      }
      var tmp = Constants_getInstance().get_HELLO_IM_vywciu_k$();
      var tmp_0 = toModifier$composable(get_HelloImStyle(), [], $composer_0, 64);
      var tmp_1;
      switch (Companion_getInstance_1().$get_current$$composable_nxoy3y_k$($composer_0, 6).get_ordinal_ip24qg_k$()) {
        case 0:
          tmp_1 = Colors_getInstance().get_Gray_wo2eh8_k$();
          break;
        case 1:
          tmp_1 = Colors_getInstance().get_DimGray_ep5xby_k$();
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp_2 = fontWeight_0(color(tmp_0, tmp_1), Companion_getInstance_7().get_Bold_wnz5ke_k$());
      SpanText$composable(tmp, tmp_2, null, null, $composer_0, 6, 12);
      var tmp_3 = Constants_getInstance().get_RUDRA_DAVE_d55res_k$();
      var tmp_4 = toModifier$composable(get_UserNameStyle(), [], $composer_0, 64);
      var tmp_5;
      switch (Companion_getInstance_1().$get_current$$composable_nxoy3y_k$($composer_0, 6).get_ordinal_ip24qg_k$()) {
        case 0:
          tmp_5 = Colors_getInstance().get_Black_i7mvue_k$();
          break;
        case 1:
          tmp_5 = Colors_getInstance().get_White_ij46ow_k$();
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp_6 = fontWeight_0(color(tmp_4, tmp_5), Companion_getInstance_7().get_Bold_wnz5ke_k$());
      SpanText$composable(tmp_3, tmp_6, null, null, $composer_0, 6, 12);
      Div$composable(toAttrs(margin(toModifier$composable(get_SubheadlineTextStyle(), [], $composer_0, 64), get_px(20))), ComposableSingletons$HomeKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 48, 0);
      var ctx = rememberPageContext$composable($composer_0, 0);
      var tmp_7 = get_HeadlineTextStyle();
      var tmp_8 = toAttrs$composable(tmp_7, null, null, $composer_0, 0, 3);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.rudra.kotfolio.components.sections.ComposableSingletons$HomeKt.lambda-3.<anonymous>.<anonymous>' call
      var tmp_9 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_9, -585331031, true, ComposableSingletons$HomeKt$lambda_3$lambda$lambda_tzua8q(ctx));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_10;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.components.sections.ComposableSingletons$HomeKt.lambda-3.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_100(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_10 = value;
      } else {
        tmp_10 = it;
      }
      var tmp_11 = tmp_10;
      var tmp0 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Div$composable(tmp_8, tmp0, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$HomeKt$lambda_3$lambda$lambda$lambda_4kaab3($ctx) {
    return function (it) {
      $ctx.get_router_j3zccy_k$().navigateTo$default_onbd51_k$(Constants_getInstance().get_RESUME_URL_lcc8ca_k$());
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$HomeKt$lambda_3$lambda$lambda_tzua8q($ctx) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-585331031, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$HomeKt.lambda-3.<anonymous>.<anonymous> (Home.kt:96)');
        }
        var tmp0_colorScheme = CustomColorSchemes_getInstance().get_BlackAndWhite_qa7re0_k$();
        var tmp1_size = MD_getInstance();
        var tmp2_modifier = margin(width(toModifier$composable(get_ButtonStyle_0(), [], $composer_0, 64), get_percent(150)), get_px(70));
        $composer_0.startReplaceableGroup_ip860b_k$(-722260985);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.changed_ga7h3f_k$($ctx);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.rudra.kotfolio.components.sections.ComposableSingletons$HomeKt.lambda-3.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableSingletons$HomeKt$lambda_3$lambda$lambda$lambda_4kaab3($ctx);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        Button$composable(tmpCache, tmp2_modifier, null, null, false, tmp1_size, tmp0_colorScheme, null, null, ComposableSingletons$HomeKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 805502976, 412);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp = tmp_2;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_100($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableLambda$invoke$ref_101($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$HomeKt$lambda_4$lambda_4ryvdc($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1804153142, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$HomeKt.lambda-4.<anonymous> (Home.kt:50)');
      }
      var tmp = Start_getInstance();
      Column$composable(null, null, tmp, null, ComposableSingletons$HomeKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 24960, 11);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$HomeKt() {
    ComposableSingletons$HomeKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_97(composableLambdaInstance(2101633152, false, ComposableSingletons$HomeKt$lambda_1$lambda_anshu5));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_98(composableLambdaInstance(-1930772295, false, ComposableSingletons$HomeKt$lambda_2$lambda_i5tz82));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_99(composableLambdaInstance(-1444512225, false, ComposableSingletons$HomeKt$lambda_3$lambda_o1nlov));
    var tmp_2 = this;
    tmp_2.lambda_4_r8sbbm_1 = ComposableLambda$invoke$ref_101(composableLambdaInstance(1804153142, false, ComposableSingletons$HomeKt$lambda_4$lambda_4ryvdc));
  }
  protoOf(ComposableSingletons$HomeKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$HomeKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$HomeKt).get_lambda_3_bzdzzq_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  protoOf(ComposableSingletons$HomeKt).get_lambda_4_bzdzzr_k$ = function () {
    return this.lambda_4_r8sbbm_1;
  };
  var ComposableSingletons$HomeKt_instance;
  function ComposableSingletons$HomeKt_getInstance() {
    if (ComposableSingletons$HomeKt_instance == null)
      new ComposableSingletons$HomeKt();
    return ComposableSingletons$HomeKt_instance;
  }
  function Home$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-370202351);
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-370202351, $changed, -1, 'com.rudra.kotfolio.components.sections.Home$composable (Home.kt:42)');
      }
      var tmp = toModifier$composable(get_HeroSectionStyle(), [], $composer_0, 64);
      var tmp_0 = get_HeroContainerKeyFrames();
      var tmp_1 = get_s(1);
      // Inline function 'org.jetbrains.compose.web.css.Companion.EaseInOut' call
      Companion_getInstance_15();
      // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_2 = 'ease-in-out';
      var tmp_3 = animation(tmp, [toAnimation$composable(tmp_0, tmp_1, tmp_2, null, null, null, null, null, $composer_0, 0, 124)]);
      var tmp_4 = CenterStart_getInstance();
      Box$composable(tmp_3, tmp_4, null, ComposableSingletons$HomeKt_getInstance().lambda_4_r8sbbm_1, $composer_0, 3120, 4);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(Home$composable$lambda($changed));
    }
  }
  function Home$composable$lambda($$changed) {
    return function ($composer, $force) {
      Home$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function get_NavHeaderStyle() {
    _init_properties_NavHeader_kt__vdotjy();
    return NavHeaderStyle$delegate.getValue_fbnwi2_k$(null, NavHeaderStyle$factory());
  }
  var NavHeaderStyle$delegate;
  function get_SideMenuSlideInAnim() {
    _init_properties_NavHeader_kt__vdotjy();
    return SideMenuSlideInAnim$delegate.getValue_fbnwi2_k$(null, SideMenuSlideInAnim$factory());
  }
  var SideMenuSlideInAnim$delegate;
  function NavLink(path, text) {
    _init_properties_NavHeader_kt__vdotjy();
    illegalDecoyCallException('NavLink');
  }
  function MenuItems() {
    _init_properties_NavHeader_kt__vdotjy();
    illegalDecoyCallException('MenuItems');
  }
  function ColorModeButton() {
    _init_properties_NavHeader_kt__vdotjy();
    illegalDecoyCallException('ColorModeButton');
  }
  function HamburgerButton(onClick) {
    _init_properties_NavHeader_kt__vdotjy();
    illegalDecoyCallException('HamburgerButton');
  }
  function CloseButton(onClick) {
    _init_properties_NavHeader_kt__vdotjy();
    illegalDecoyCallException('CloseButton');
  }
  var SideMenuState_CLOSED_instance;
  var SideMenuState_OPEN_instance;
  var SideMenuState_CLOSING_instance;
  function values() {
    return [SideMenuState_CLOSED_getInstance(), SideMenuState_OPEN_getInstance(), SideMenuState_CLOSING_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'CLOSED':
        return SideMenuState_CLOSED_getInstance();
      case 'OPEN':
        return SideMenuState_OPEN_getInstance();
      case 'CLOSING':
        return SideMenuState_CLOSING_getInstance();
      default:
        SideMenuState_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var SideMenuState_entriesInitialized;
  function SideMenuState_initEntries() {
    if (SideMenuState_entriesInitialized)
      return Unit_getInstance();
    SideMenuState_entriesInitialized = true;
    SideMenuState_CLOSED_instance = new SideMenuState('CLOSED', 0);
    SideMenuState_OPEN_instance = new SideMenuState('OPEN', 1);
    SideMenuState_CLOSING_instance = new SideMenuState('CLOSING', 2);
  }
  var $ENTRIES;
  function SideMenuState(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SideMenuState).close_1keygo_k$ = function () {
    var tmp;
    switch (this.get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = SideMenuState_CLOSED_getInstance();
        break;
      case 1:
        tmp = SideMenuState_CLOSING_getInstance();
        break;
      case 2:
        tmp = SideMenuState_CLOSING_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  function NavHeader(modifier) {
    _init_properties_NavHeader_kt__vdotjy();
    illegalDecoyCallException('NavHeader');
  }
  function SideMenu(menuState, close, onAnimationEnd) {
    _init_properties_NavHeader_kt__vdotjy();
    illegalDecoyCallException('SideMenu');
  }
  function ComposableLambda$invoke$ref_102($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_1$lambda_vv16hm($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-592781506, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$NavHeaderKt.lambda-1.<anonymous> (NavHeader.kt:71)');
      }
      HamburgerIcon$composable(null, $composer_0, 0, 1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_103($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_2$lambda_31epff($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(827012333, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$NavHeaderKt.lambda-2.<anonymous> (NavHeader.kt:78)');
      }
      CloseIcon$composable(null, $composer_0, 0, 1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_104($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_3$lambda_ps7rms($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-985945761, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$NavHeaderKt.lambda-3.<anonymous> (NavHeader.kt:123)');
      }
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(547886695);
      sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.components.sections.ComposableSingletons$NavHeaderKt.lambda-3.<anonymous>.<anonymous>' call
        var value = mutableStateOf(SideMenuState_CLOSED_getInstance());
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      var menuState$delegate = tmp0;
      ColorModeButton$composable($composer_0, 0);
      $composer_0.startReplaceableGroup_ip860b_k$(1042316507);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changed_ga7h3f_k$(menuState$delegate);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.components.sections.ComposableSingletons$NavHeaderKt.lambda-3.<anonymous>.<anonymous>' call
        var value_0 = ComposableSingletons$NavHeaderKt$lambda_3$lambda$lambda_kbp4qh(menuState$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmpCache = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      HamburgerButton$composable(tmpCache, $composer_0, 0);
      if (!invoke$lambda(menuState$delegate).equals(SideMenuState_CLOSED_getInstance())) {
        var tmp_3 = invoke$lambda(menuState$delegate);
        $composer_0.startReplaceableGroup_ip860b_k$(1042316682);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_0.changed_ga7h3f_k$(menuState$delegate);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_4;
        if (invalid_0 ? true : it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.rudra.kotfolio.components.sections.ComposableSingletons$NavHeaderKt.lambda-3.<anonymous>.<anonymous>' call
          var value_1 = ComposableSingletons$NavHeaderKt$lambda_3$lambda$lambda_kbp4qh_0(menuState$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value_1);
          tmp_4 = value_1;
        } else {
          tmp_4 = it_1;
        }
        var tmp_5 = tmp_4;
        var tmpCache_0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        $composer_0.startReplaceableGroup_ip860b_k$(1042316754);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_0.changed_ga7h3f_k$(menuState$delegate);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_6;
        if (invalid_1 ? true : it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.rudra.kotfolio.components.sections.ComposableSingletons$NavHeaderKt.lambda-3.<anonymous>.<anonymous>' call
          var value_2 = ComposableSingletons$NavHeaderKt$lambda_3$lambda$lambda_kbp4qh_1(menuState$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value_2);
          tmp_6 = value_2;
        } else {
          tmp_6 = it_2;
        }
        var tmp_7 = tmp_6;
        var tmpCache_1 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        SideMenu$composable(tmp_3, tmpCache_0, tmpCache_1, $composer_0, 0);
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function invoke$lambda($menuState$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('menuState', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $menuState$delegate.get_value_j01efc_k$();
  }
  function invoke$lambda_0($menuState$delegate, value) {
    getLocalDelegateReference('menuState', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $menuState$delegate.set_value_v1vabv_k$(value);
    return Unit_getInstance();
  }
  function ComposableSingletons$NavHeaderKt$lambda_3$lambda$lambda_kbp4qh($menuState$delegate) {
    return function () {
      invoke$lambda_0($menuState$delegate, SideMenuState_OPEN_getInstance());
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_3$lambda$lambda_kbp4qh_0($menuState$delegate) {
    return function () {
      invoke$lambda_0($menuState$delegate, invoke$lambda($menuState$delegate).close_1keygo_k$());
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_3$lambda$lambda_kbp4qh_1($menuState$delegate) {
    return function () {
      var tmp;
      if (invoke$lambda($menuState$delegate).equals(SideMenuState_CLOSING_getInstance())) {
        invoke$lambda_0($menuState$delegate, SideMenuState_CLOSED_getInstance());
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_105($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_4$lambda_gf9ta5($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(2121384648, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$NavHeaderKt.lambda-4.<anonymous> (NavHeader.kt:138)');
      }
      MenuItems$composable($composer_0, 0);
      ColorModeButton$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_106($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_5$lambda_cecns2($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1297313470, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$NavHeaderKt.lambda-5.<anonymous> (NavHeader.kt:114)');
      }
      Spacer$composable($composer_0, 0);
      var tmp = displayUntil(gap(fontSize(Companion_getInstance_3(), get_cssRem(1.5)), get_cssRem(1)), Breakpoint_MD_getInstance());
      var tmp_0 = CenterVertically_getInstance();
      Row$composable(tmp, null, tmp_0, null, ComposableSingletons$NavHeaderKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 24960, 10);
      var tmp0_modifier = displayIfAtLeast(gap(Companion_getInstance_3(), get_cssRem(1.5)), Breakpoint_MD_getInstance());
      var tmp1_verticalAlignment = CenterVertically_getInstance();
      var tmp2_horizontalArrangement = SpaceBetween_getInstance();
      Row$composable(tmp0_modifier, tmp2_horizontalArrangement, tmp1_verticalAlignment, null, ComposableSingletons$NavHeaderKt_getInstance().lambda_4_r8sbbm_1, $composer_0, 25008, 8);
      Spacer$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_107($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_6$lambda_tt4x4v($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1888452104, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$NavHeaderKt.lambda-6.<anonymous> (NavHeader.kt:179)');
      }
      MenuItems$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$NavHeaderKt() {
    ComposableSingletons$NavHeaderKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_102(composableLambdaInstance(-592781506, false, ComposableSingletons$NavHeaderKt$lambda_1$lambda_vv16hm));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_103(composableLambdaInstance(827012333, false, ComposableSingletons$NavHeaderKt$lambda_2$lambda_31epff));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_104(composableLambdaInstance(-985945761, false, ComposableSingletons$NavHeaderKt$lambda_3$lambda_ps7rms));
    var tmp_2 = this;
    tmp_2.lambda_4_r8sbbm_1 = ComposableLambda$invoke$ref_105(composableLambdaInstance(2121384648, false, ComposableSingletons$NavHeaderKt$lambda_4$lambda_gf9ta5));
    var tmp_3 = this;
    tmp_3.lambda_5_r8sbbl_1 = ComposableLambda$invoke$ref_106(composableLambdaInstance(-1297313470, false, ComposableSingletons$NavHeaderKt$lambda_5$lambda_cecns2));
    var tmp_4 = this;
    tmp_4.lambda_6_r8sbbk_1 = ComposableLambda$invoke$ref_107(composableLambdaInstance(1888452104, false, ComposableSingletons$NavHeaderKt$lambda_6$lambda_tt4x4v));
  }
  protoOf(ComposableSingletons$NavHeaderKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$NavHeaderKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$NavHeaderKt).get_lambda_3_bzdzzq_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  protoOf(ComposableSingletons$NavHeaderKt).get_lambda_4_bzdzzr_k$ = function () {
    return this.lambda_4_r8sbbm_1;
  };
  protoOf(ComposableSingletons$NavHeaderKt).get_lambda_5_bzdzzs_k$ = function () {
    return this.lambda_5_r8sbbl_1;
  };
  protoOf(ComposableSingletons$NavHeaderKt).get_lambda_6_bzdzzt_k$ = function () {
    return this.lambda_6_r8sbbk_1;
  };
  var ComposableSingletons$NavHeaderKt_instance;
  function ComposableSingletons$NavHeaderKt_getInstance() {
    if (ComposableSingletons$NavHeaderKt_instance == null)
      new ComposableSingletons$NavHeaderKt();
    return ComposableSingletons$NavHeaderKt_instance;
  }
  function NavLink$composable(path, text, $composer, $changed) {
    _init_properties_NavHeader_kt__vdotjy();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(355960607);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(path) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(text) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(355960607, $dirty, -1, 'com.rudra.kotfolio.components.sections.NavLink$composable (NavHeader.kt:47)');
      }
      var tmp = get_UndecoratedLinkVariant().then_x4ddsu_k$(get_UncoloredLinkVariant());
      Link$composable(path, text, null, tmp, null, null, false, null, $composer_0, 14 & $dirty | 112 & $dirty, 244);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(NavLink$composable$lambda(path, text, $changed));
    }
  }
  function MenuItems$composable($composer, $changed) {
    _init_properties_NavHeader_kt__vdotjy();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-541719313);
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-541719313, $changed, -1, 'com.rudra.kotfolio.components.sections.MenuItems$composable (NavHeader.kt:52)');
      }
      NavLink$composable('#home', 'Home', $composer_0, 54);
      NavLink$composable('#about', 'About', $composer_0, 54);
      NavLink$composable('#experience', 'Experience', $composer_0, 54);
      NavLink$composable('#projects', 'Projects', $composer_0, 54);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(MenuItems$composable$lambda($changed));
    }
  }
  function ColorModeButton$composable($composer, $changed) {
    _init_properties_NavHeader_kt__vdotjy();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-353565818);
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-353565818, $changed, -1, 'com.rudra.kotfolio.components.sections.ColorModeButton$composable (NavHeader.kt:60)');
      }
      var colorMode$delegate = Companion_getInstance_1().$get_currentState$$composable_9iiwnt_k$($composer_0, 6);
      $composer_0.startReplaceableGroup_ip860b_k$(1042314678);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = $composer_0.changed_ga7h3f_k$(colorMode$delegate);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.components.sections.ColorModeButton$composable.<anonymous>' call
        var value = ColorModeButton$composable$lambda_1(colorMode$delegate);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.rudra.kotfolio.components.sections.ColorModeButton$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -1168979187, true, ColorModeButton$composable$lambda_2(colorMode$delegate));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid_0 ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.components.sections.ColorModeButton$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_108(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      IconButton$composable(tmpCache, tmp0, $composer_0, 48);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(ColorModeButton$composable$lambda_3($changed));
    }
  }
  function HamburgerButton$composable(onClick, $composer, $changed) {
    _init_properties_NavHeader_kt__vdotjy();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-395941680);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onClick) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-395941680, $dirty, -1, 'com.rudra.kotfolio.components.sections.HamburgerButton$composable (NavHeader.kt:69)');
      }
      IconButton$composable(onClick, ComposableSingletons$NavHeaderKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 48 | 14 & $dirty);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(HamburgerButton$composable$lambda(onClick, $changed));
    }
  }
  function CloseButton$composable(onClick, $composer, $changed) {
    _init_properties_NavHeader_kt__vdotjy();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1014794049);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onClick) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1014794049, $dirty, -1, 'com.rudra.kotfolio.components.sections.CloseButton$composable (NavHeader.kt:76)');
      }
      IconButton$composable(onClick, ComposableSingletons$NavHeaderKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 48 | 14 & $dirty);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(CloseButton$composable$lambda(onClick, $changed));
    }
  }
  function NavHeader$composable(modifier, $composer, $changed, $default) {
    _init_properties_NavHeader_kt__vdotjy();
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1989121501);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_3();
      }
      if (isTraceInProgress()) {
        traceEventStart(-1989121501, $dirty, -1, 'com.rudra.kotfolio.components.sections.NavHeader$composable (NavHeader.kt:107)');
      }
      var tmp = fillMaxWidth(toModifier$composable(get_NavHeaderStyle(), [], $composer_0, 64)).then_mmfvo6_k$(modifier_0._v);
      var tmp_0 = CenterVertically_getInstance();
      Row$composable(tmp, null, tmp_0, null, ComposableSingletons$NavHeaderKt_getInstance().lambda_5_r8sbbl_1, $composer_0, 24960, 10);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(NavHeader$composable$lambda(modifier_0, $changed, $default));
    }
  }
  function SideMenu$composable(menuState, close, onAnimationEnd, $composer, $changed) {
    _init_properties_NavHeader_kt__vdotjy();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(106009019);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(menuState) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(close) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onAnimationEnd) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(106009019, $dirty, -1, 'com.rudra.kotfolio.components.sections.SideMenu$composable (NavHeader.kt:147)');
      }
      var tmp = setVariable(Companion_getInstance_3(), OverlayVars_getInstance().get_BackgroundColor_qhx06s_k$(), Colors_getInstance().get_Transparent_cxh4g9_k$());
      $composer_0.startReplaceableGroup_ip860b_k$(1042317368);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = $composer_0.changedInstance_s1wkiy_k$(close);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.components.sections.SideMenu$composable.<anonymous>' call
        var value = SideMenu$composable$lambda(close);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var tmp_2 = onClick(tmp, tmpCache);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.rudra.kotfolio.components.sections.SideMenu$composable.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, -692584979, true, SideMenu$composable$lambda_0(menuState, onAnimationEnd, close));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid_0 ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.components.sections.SideMenu$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_110(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it_0;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Overlay$composable(tmp_2, null, null, null, tmp0, $composer_0, 24576, 14);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(SideMenu$composable$lambda_1(menuState, close, onAnimationEnd, $changed));
    }
  }
  function ColorModeButton$composable$lambda($colorMode$delegate) {
    _init_properties_NavHeader_kt__vdotjy();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('colorMode', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $colorMode$delegate.get_value_j01efc_k$();
  }
  function ColorModeButton$composable$lambda_0($colorMode$delegate, value) {
    _init_properties_NavHeader_kt__vdotjy();
    getLocalDelegateReference('colorMode', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $colorMode$delegate.set_value_v1vabv_k$(value);
    return Unit_getInstance();
  }
  function NavHeaderStyle$delegate$lambda($this$base) {
    _init_properties_NavHeader_kt__vdotjy();
    var tmp = backdropFilter(padding(fillMaxWidth(background(Companion_getInstance_3(), rgba(255, 255, 255, 0.0), [])), get_cssRem(1)), [blur(get_px(4))]);
    return styleModifier(tmp, NavHeaderStyle$delegate$lambda$lambda);
  }
  function NavHeaderStyle$delegate$lambda$lambda($this$styleModifier) {
    _init_properties_NavHeader_kt__vdotjy();
    $this$styleModifier.property_wcrait_k$('-webkit-backdrop-filter', 'blur( 4px )');
    return Unit_getInstance();
  }
  function SideMenuSlideInAnim$delegate$lambda($this$Keyframes) {
    _init_properties_NavHeader_kt__vdotjy();
    $this$Keyframes.from_1urvt_k$(SideMenuSlideInAnim$delegate$lambda$lambda);
    $this$Keyframes.to_txs6jq_k$(SideMenuSlideInAnim$delegate$lambda$lambda_0);
    return Unit_getInstance();
  }
  function SideMenuSlideInAnim$delegate$lambda$lambda() {
    _init_properties_NavHeader_kt__vdotjy();
    return translateX(Companion_getInstance_3(), get_percent(100));
  }
  function SideMenuSlideInAnim$delegate$lambda$lambda_0() {
    _init_properties_NavHeader_kt__vdotjy();
    return Companion_getInstance_3();
  }
  function NavLink$composable$lambda($path, $text, $$changed) {
    return function ($composer, $force) {
      NavLink$composable($path, $text, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function MenuItems$composable$lambda($$changed) {
    return function ($composer, $force) {
      MenuItems$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ColorModeButton$composable$lambda_1($colorMode$delegate) {
    return function () {
      ColorModeButton$composable$lambda_0($colorMode$delegate, ColorModeButton$composable$lambda($colorMode$delegate).get_opposite_ywslzk_k$());
      return Unit_getInstance();
    };
  }
  function ColorModeButton$composable$lambda_2($colorMode$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1168979187, $changed, -1, 'com.rudra.kotfolio.components.sections.ColorModeButton$composable.<anonymous> (NavHeader.kt:63)');
        }
        if (ColorModeButton$composable$lambda($colorMode$delegate).get_isLight_zemp0j_k$()) {
          $composer_0.startReplaceableGroup_ip860b_k$(584118082);
          MoonIcon$composable(null, $composer_0, 0, 1);
          $composer_0.endReplaceableGroup_ern0ak_k$();
        } else {
          $composer_0.startReplaceableGroup_ip860b_k$(584118098);
          SunIcon$composable(null, $composer_0, 0, 1);
          $composer_0.endReplaceableGroup_ern0ak_k$();
        }
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_108($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ColorModeButton$composable$lambda_3($$changed) {
    return function ($composer, $force) {
      ColorModeButton$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function HamburgerButton$composable$lambda($onClick, $$changed) {
    return function ($composer, $force) {
      HamburgerButton$composable($onClick, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function CloseButton$composable$lambda($onClick, $$changed) {
    return function ($composer, $force) {
      CloseButton$composable($onClick, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function NavHeader$composable$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      NavHeader$composable($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function SideMenu$composable$lambda($close) {
    return function (it) {
      $close();
      return Unit_getInstance();
    };
  }
  function SideMenu$composable$lambda$lambda(it) {
    _init_properties_NavHeader_kt__vdotjy();
    it.stopPropagation_5qf8uy_k$();
    return Unit_getInstance();
  }
  function SideMenu$composable$lambda$lambda_0($onAnimationEnd) {
    return function (it) {
      $onAnimationEnd();
      return Unit_getInstance();
    };
  }
  function SideMenu$composable$lambda$lambda$lambda($close) {
    return function () {
      $close();
      return Unit_getInstance();
    };
  }
  function SideMenu$composable$lambda$lambda_1($close) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-105979119, $changed, -1, 'com.rudra.kotfolio.components.sections.SideMenu$composable.<anonymous>.<anonymous>.<anonymous> (NavHeader.kt:177)');
        }
        $composer_0.startReplaceableGroup_ip860b_k$(1042318857);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.changedInstance_s1wkiy_k$($close);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.rudra.kotfolio.components.sections.SideMenu$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = SideMenu$composable$lambda$lambda$lambda($close);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        CloseButton$composable(tmpCache, $composer_0, 0);
        var tmp_2 = fontSize(gap(padding_2(Companion_getInstance_3(), VOID, get_cssRem(0.75)), get_cssRem(1.5)), get_cssRem(1.4));
        var tmp_3 = End_getInstance();
        Column$composable(tmp_2, null, tmp_3, null, ComposableSingletons$NavHeaderKt_getInstance().lambda_6_r8sbbk_1, $composer_0, 24960, 10);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_109($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SideMenu$composable$lambda_0($menuState, $onAnimationEnd, $close) {
    return function ($this$Overlay, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$Overlay) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-692584979, $dirty, -1, 'com.rudra.kotfolio.components.sections.SideMenu$composable.<anonymous> (NavHeader.kt:153)');
        }
        $composer_0.startMovableGroup_clfloq_k$(2132916060, $menuState);
        var tmp_1 = backgroundColor(gap(padding_0($this$Overlay.align_s6rwef_k$(width(fillMaxHeight(Companion_getInstance_3()), clamp(get_cssRem(8), get_percent(33), get_cssRem(10))), CenterEnd_getInstance()), get_cssRem(1), get_cssRem(1)), get_cssRem(1.5)), toSitePalette(Companion_getInstance_1().$get_current$$composable_nxoy3y_k$($composer_0, 6)).get_nearBackground_c1s3l_k$());
        var tmp_2 = get_SideMenuSlideInAnim();
        var tmp_3 = get_ms(200);
        var tmp_4;
        if ($menuState.equals(SideMenuState_OPEN_getInstance())) {
          // Inline function 'org.jetbrains.compose.web.css.Companion.EaseOut' call
          Companion_getInstance_15();
          // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_4 = 'ease-out';
        } else {
          // Inline function 'org.jetbrains.compose.web.css.Companion.EaseIn' call
          Companion_getInstance_15();
          // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_4 = 'ease-in';
        }
        var tmp_5 = tmp_4;
        var tmp_6;
        if ($menuState.equals(SideMenuState_OPEN_getInstance())) {
          // Inline function 'org.jetbrains.compose.web.css.Companion.Normal' call
          Companion_getInstance_16();
          // Inline function 'org.jetbrains.compose.web.css.AnimationDirection' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_6 = 'normal';
        } else {
          // Inline function 'org.jetbrains.compose.web.css.Companion.Reverse' call
          Companion_getInstance_16();
          // Inline function 'org.jetbrains.compose.web.css.AnimationDirection' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_6 = 'reverse';
        }
        var tmp_7 = tmp_6;
        // Inline function 'org.jetbrains.compose.web.css.Companion.Forwards' call
        Companion_getInstance_17();
        // Inline function 'org.jetbrains.compose.web.css.AnimationFillMode' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_8 = 'forwards';
        var tmp_9 = borderRadius_0(animation(tmp_1, [toAnimation$composable(tmp_2, tmp_3, tmp_5, null, null, tmp_7, tmp_8, null, $composer_0, 0, 76)]), get_cssRem(2));
        $composer_0.startReplaceableGroup_ip860b_k$(1042318668);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_10;
        if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.rudra.kotfolio.components.sections.SideMenu$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = SideMenu$composable$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_10 = value;
        } else {
          tmp_10 = it;
        }
        var tmp_11 = tmp_10;
        var tmpCache = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        var tmp_12 = onClick(tmp_9, tmpCache);
        $composer_0.startReplaceableGroup_ip860b_k$(1042318729);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.changedInstance_s1wkiy_k$($onAnimationEnd);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_13;
        if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.rudra.kotfolio.components.sections.SideMenu$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = SideMenu$composable$lambda$lambda_0($onAnimationEnd);
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_13 = value_0;
        } else {
          tmp_13 = it_0;
        }
        var tmp_14 = tmp_13;
        var tmpCache_0 = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        var tmp_15 = onAnimationEnd(tmp_12, tmpCache_0);
        var tmp_16 = End_getInstance();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.rudra.kotfolio.components.sections.SideMenu$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_17 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_17, -105979119, true, SideMenu$composable$lambda$lambda_1($close));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_18;
        if (invalid_0 ? true : it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.rudra.kotfolio.components.sections.SideMenu$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref_109(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_1);
          tmp_18 = value_1;
        } else {
          tmp_18 = it_1;
        }
        var tmp_19 = tmp_18;
        var tmp0 = (tmp_19 == null ? true : !(tmp_19 == null)) ? tmp_19 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Column$composable(tmp_15, null, tmp_16, null, tmp0, $composer_0, 24960, 10);
        $composer_0.endMovableGroup_kd2hcs_k$();
        var tmp_20;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_20 = Unit_getInstance();
        }
        tmp_0 = tmp_20;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_110($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SideMenu$composable$lambda_1($menuState, $close, $onAnimationEnd, $$changed) {
    return function ($composer, $force) {
      SideMenu$composable($menuState, $close, $onAnimationEnd, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function SideMenuState_CLOSED_getInstance() {
    SideMenuState_initEntries();
    return SideMenuState_CLOSED_instance;
  }
  function SideMenuState_OPEN_getInstance() {
    SideMenuState_initEntries();
    return SideMenuState_OPEN_instance;
  }
  function SideMenuState_CLOSING_getInstance() {
    SideMenuState_initEntries();
    return SideMenuState_CLOSING_instance;
  }
  function NavHeaderStyle$factory() {
    return getPropertyCallableRef('NavHeaderStyle', 0, KProperty0, function () {
      return get_NavHeaderStyle();
    }, null);
  }
  function SideMenuSlideInAnim$factory() {
    return getPropertyCallableRef('SideMenuSlideInAnim', 0, KProperty0, function () {
      return get_SideMenuSlideInAnim();
    }, null);
  }
  var properties_initialized_NavHeader_kt_f5zrgg;
  function _init_properties_NavHeader_kt__vdotjy() {
    if (!properties_initialized_NavHeader_kt_f5zrgg) {
      properties_initialized_NavHeader_kt_f5zrgg = true;
      var tmp = Companion_getInstance_5();
      NavHeaderStyle$delegate = base(tmp, VOID, VOID, NavHeaderStyle$delegate$lambda);
      SideMenuSlideInAnim$delegate = Keyframes(VOID, SideMenuSlideInAnim$delegate$lambda);
    }
  }
  function Projects() {
    illegalDecoyCallException('Projects');
  }
  function ComposableLambda$invoke$ref_111($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$ProjectsKt$lambda_1$lambda_n64bg2($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-434640813, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$ProjectsKt.lambda-1.<anonymous> (Projects.kt:81)');
      }
      var tmp = Constants_getInstance().get_PROJECT_REPOSITORIES_URL_8f6wxz_k$();
      var tmp_0 = Constants_getInstance().get_MORE_ON_GITHUB_fcq2am_k$();
      var tmp_1 = fontFamily(Companion_getInstance_3(), [Fonts_getInstance().get_DM_SANS_s5xtnk_k$()]);
      var tmp_2;
      switch (Companion_getInstance_1().$get_current$$composable_nxoy3y_k$($composer_0, 6).get_ordinal_ip24qg_k$()) {
        case 0:
          tmp_2 = Colors_getInstance().get_Black_i7mvue_k$();
          break;
        case 1:
          tmp_2 = Colors_getInstance().get_White_ij46ow_k$();
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp_3 = margin_1(color(tmp_1, tmp_2), VOID, get_px(4));
      Link$composable(tmp, tmp_0, tmp_3, null, null, null, false, null, $composer_0, 54, 248);
      var tmp_4 = Images_getInstance().get_NAVIGATION_ARROW_1yodh5_k$();
      AppearanceAwareImage$composable_0(tmp_4, null, null, null, null, null, false, null, $composer_0, 6, 254);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_112($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$ProjectsKt$lambda_2$lambda_5ni5m5($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-2116166666, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$ProjectsKt.lambda-2.<anonymous> (Projects.kt:78)');
      }
      var tmp = CenterVertically_getInstance();
      Row$composable(null, null, tmp, null, ComposableSingletons$ProjectsKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 24960, 11);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_113($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$ProjectsKt$lambda_3$lambda_yh4moc($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1043114300, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$ProjectsKt.lambda-3.<anonymous> (Projects.kt:64)');
      }
      var allProjects = getAllProjects();
      $composer_0.startReplaceableGroup_ip860b_k$(-637519223);
      // Inline function 'kotlin.repeat' call
      var times = allProjects.get_size_woubt6_k$();
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'com.rudra.kotfolio.components.sections.ComposableSingletons$ProjectsKt.lambda-3.<anonymous>.<anonymous>' call
          var project = allProjects.get_c1px32_k$(index);
          RoundedImage$composable(null, project.get_first_irdx8n_k$(), project.get_second_jf7fjx_k$(), $composer_0, 0, 1);
        }
         while (inductionVariable < times);
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var tmp = padding_1(fillMaxSize(Companion_getInstance_3()), get_px(50));
      var tmp_0 = Center_getInstance();
      Box$composable(tmp, tmp_0, null, ComposableSingletons$ProjectsKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 3120, 4);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_114($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$ProjectsKt$lambda_4$lambda_7qcy8l($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-319337851, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$ProjectsKt.lambda-4.<anonymous> (Projects.kt:45)');
      }
      SectionTitle$composable(Constants_getInstance().get_PROJECT_TITLE_l2i6k7_k$(), $composer_0, 6);
      var tmp = Constants_getInstance().get_PROJECT_SECTION_TEXT_c3od2u_k$();
      var tmp_0 = textAlign(toModifier$composable(get_SectionDescriptionStyle(), [], $composer_0, 64), Companion_getInstance_4().get_Center_3arb0i_k$());
      var tmp_1;
      switch (Companion_getInstance_1().$get_current$$composable_nxoy3y_k$($composer_0, 6).get_ordinal_ip24qg_k$()) {
        case 0:
          tmp_1 = Colors_getInstance().get_Gray_wo2eh8_k$();
          break;
        case 1:
          tmp_1 = Colors_getInstance().get_DimGray_ep5xby_k$();
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp_2 = fontFamily(color(tmp_0, tmp_1), [Fonts_getInstance().get_DM_SANS_s5xtnk_k$()]);
      SpanText$composable(tmp, tmp_2, null, null, $composer_0, 6, 12);
      var tmp_3 = numColumns(1, 2, 3);
      var tmp_4 = margin(fillMaxWidth(Companion_getInstance_3()), get_cssRem(3), VOID, get_cssRem(6));
      SimpleGrid$composable(tmp_3, tmp_4, null, null, ComposableSingletons$ProjectsKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 24576, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$ProjectsKt() {
    ComposableSingletons$ProjectsKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_111(composableLambdaInstance(-434640813, false, ComposableSingletons$ProjectsKt$lambda_1$lambda_n64bg2));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_112(composableLambdaInstance(-2116166666, false, ComposableSingletons$ProjectsKt$lambda_2$lambda_5ni5m5));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_113(composableLambdaInstance(1043114300, false, ComposableSingletons$ProjectsKt$lambda_3$lambda_yh4moc));
    var tmp_2 = this;
    tmp_2.lambda_4_r8sbbm_1 = ComposableLambda$invoke$ref_114(composableLambdaInstance(-319337851, false, ComposableSingletons$ProjectsKt$lambda_4$lambda_7qcy8l));
  }
  protoOf(ComposableSingletons$ProjectsKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$ProjectsKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$ProjectsKt).get_lambda_3_bzdzzq_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  protoOf(ComposableSingletons$ProjectsKt).get_lambda_4_bzdzzr_k$ = function () {
    return this.lambda_4_r8sbbm_1;
  };
  var ComposableSingletons$ProjectsKt_instance;
  function ComposableSingletons$ProjectsKt_getInstance() {
    if (ComposableSingletons$ProjectsKt_instance == null)
      new ComposableSingletons$ProjectsKt();
    return ComposableSingletons$ProjectsKt_instance;
  }
  function Projects$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(932075244);
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(932075244, $changed, -1, 'com.rudra.kotfolio.components.sections.Projects$composable (Projects.kt:38)');
      }
      var tmp = id(toModifier$composable(get_ProjectStyle(), [], $composer_0, 64), 'projects');
      var tmp_0 = Center_getInstance_0();
      var tmp_1 = CenterHorizontally_getInstance();
      Column$composable(tmp, tmp_0, tmp_1, null, ComposableSingletons$ProjectsKt_getInstance().lambda_4_r8sbbm_1, $composer_0, 25008, 8);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(Projects$composable$lambda($changed));
    }
  }
  function Projects$composable$lambda($$changed) {
    return function ($composer, $force) {
      Projects$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function SkillsAndTools() {
    illegalDecoyCallException('SkillsAndTools');
  }
  function ComposableLambda$invoke$ref_115($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$SkillsAndToolsKt$lambda_1$lambda_1irkze($this$GlassBox, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-2004572059, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$SkillsAndToolsKt.lambda-1.<anonymous> (SkillsAndTools.kt:52)');
      }
      var tmp = Images_getInstance().get_KOTLIN_LOGO_miri68_k$();
      var tmp_0 = size(Companion_getInstance_3(), get_px(42));
      $composer_0.startReplaceableGroup_ip860b_k$(616838248);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.components.sections.ComposableSingletons$SkillsAndToolsKt.lambda-1.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$SkillsAndToolsKt$lambda_1$lambda$lambda_gw9581;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmpCache = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var tmp_3 = styleModifier(tmp_0, tmpCache);
      Image$composable(tmp, tmp_3, null, null, null, null, false, null, $composer_0, 6, 252);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$SkillsAndToolsKt$lambda_1$lambda$lambda_gw9581($this$styleModifier) {
    mixBlendMode($this$styleModifier, Companion_getInstance_18().get_Normal_22avww_k$());
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_116($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$SkillsAndToolsKt$lambda_2$lambda_uce21l($this$GlassBox, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1443125788, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$SkillsAndToolsKt.lambda-2.<anonymous> (SkillsAndTools.kt:65)');
      }
      var tmp = Images_getInstance().get_JAVA_LOGO_tw29dt_k$();
      var tmp_0 = size(Companion_getInstance_3(), get_px(42));
      Image$composable(tmp, tmp_0, null, null, null, null, false, null, $composer_0, 6, 252);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_117($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$SkillsAndToolsKt$lambda_3$lambda_bv3ivc($this$GlassBox, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1808053539, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$SkillsAndToolsKt.lambda-3.<anonymous> (SkillsAndTools.kt:75)');
      }
      var tmp = Images_getInstance().get_HTML_LOGO_og9qty_k$();
      var tmp_0 = size(Companion_getInstance_3(), get_px(42));
      Image$composable(tmp, tmp_0, null, null, null, null, false, null, $composer_0, 6, 252);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_118($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$SkillsAndToolsKt$lambda_4$lambda_gyiy6v($this$GlassBox, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-764265570, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$SkillsAndToolsKt.lambda-4.<anonymous> (SkillsAndTools.kt:85)');
      }
      var tmp = Images_getInstance().get_CSS_LOGO_x08ggg_k$();
      var tmp_0 = size(Companion_getInstance_3(), get_px(42));
      Image$composable(tmp, tmp_0, null, null, null, null, false, null, $composer_0, 6, 252);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_119($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$SkillsAndToolsKt$lambda_5$lambda_p8ymq2($this$GlassBox, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(279522399, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$SkillsAndToolsKt.lambda-5.<anonymous> (SkillsAndTools.kt:96)');
      }
      var tmp = Images_getInstance().get_JAVASCRIPT_LOGO_s33sk4_k$();
      var tmp_0 = size(Companion_getInstance_3(), get_px(42));
      Image$composable(tmp, tmp_0, null, null, null, null, false, null, $composer_0, 6, 252);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_120($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$SkillsAndToolsKt$lambda_6$lambda_3knuc5($this$GlassBox, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1323310368, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$SkillsAndToolsKt.lambda-6.<anonymous> (SkillsAndTools.kt:106)');
      }
      var tmp = Images_getInstance().get_DOCKER_LOGO_dsml8h_k$();
      var tmp_0 = size(Companion_getInstance_3(), get_px(42));
      Image$composable(tmp, tmp_0, null, null, null, null, false, null, $composer_0, 6, 252);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_121($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$SkillsAndToolsKt$lambda_7$lambda_weabec($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(974010825, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$SkillsAndToolsKt.lambda-7.<anonymous> (SkillsAndTools.kt:48)');
      }
      var tmp = margin_2(size(Companion_getInstance_3(), get_px(65)), get_cssRem(0.6));
      GlassBox$composable(tmp, null, null, null, null, null, null, null, null, ComposableSingletons$SkillsAndToolsKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 805306368, 510);
      var tmp_0 = margin_2(size(Companion_getInstance_3(), get_px(65)), get_cssRem(0.6));
      GlassBox$composable(tmp_0, null, null, null, null, null, null, null, null, ComposableSingletons$SkillsAndToolsKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 805306368, 510);
      var tmp_1 = margin_2(size(Companion_getInstance_3(), get_px(65)), get_cssRem(0.6));
      GlassBox$composable(tmp_1, null, null, null, null, null, null, null, null, ComposableSingletons$SkillsAndToolsKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 805306368, 510);
      var tmp_2 = margin_2(size(Companion_getInstance_3(), get_px(65)), get_cssRem(0.6));
      GlassBox$composable(tmp_2, null, null, null, null, null, null, null, null, ComposableSingletons$SkillsAndToolsKt_getInstance().lambda_4_r8sbbm_1, $composer_0, 805306368, 510);
      var tmp_3 = margin_2(size(Companion_getInstance_3(), get_px(65)), get_cssRem(0.6));
      GlassBox$composable(tmp_3, null, null, null, null, null, null, null, null, ComposableSingletons$SkillsAndToolsKt_getInstance().lambda_5_r8sbbl_1, $composer_0, 805306368, 510);
      var tmp_4 = margin_2(size(Companion_getInstance_3(), get_px(65)), get_cssRem(0.6));
      GlassBox$composable(tmp_4, null, null, null, null, null, null, null, null, ComposableSingletons$SkillsAndToolsKt_getInstance().lambda_6_r8sbbk_1, $composer_0, 805306368, 510);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_122($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$SkillsAndToolsKt$lambda_8$lambda_9t79il($this$GlassBox, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-452014880, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$SkillsAndToolsKt.lambda-8.<anonymous> (SkillsAndTools.kt:44)');
      }
      var tmp0_modifier = padding(Companion_getInstance_3(), get_cssRem(1));
      var tmp1_numColumns = numColumns(2, 2, 3, 4);
      SimpleGrid$composable(tmp1_numColumns, tmp0_modifier, null, null, ComposableSingletons$SkillsAndToolsKt_getInstance().lambda_7_r8sbbj_1, $composer_0, 24576, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_123($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$SkillsAndToolsKt$lambda_9$lambda_j0f7jm($this$GlassBox, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-207156146, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$SkillsAndToolsKt.lambda-9.<anonymous> (SkillsAndTools.kt:127)');
      }
      var tmp = Images_getInstance().get_ANDROID_LOGO_qy9g4k_k$();
      var tmp_0 = size(Companion_getInstance_3(), get_px(42));
      Image$composable(tmp, tmp_0, null, null, null, null, false, null, $composer_0, 6, 252);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_124($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$SkillsAndToolsKt$lambda_10$lambda_jg7wc4($this$GlassBox, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1610689605, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$SkillsAndToolsKt.lambda-10.<anonymous> (SkillsAndTools.kt:137)');
      }
      var tmp = Images_getInstance().get_INTELLIJ_LOGO_z2nkju_k$();
      var tmp_0 = size(Companion_getInstance_3(), get_px(42));
      Image$composable(tmp, tmp_0, null, null, null, null, false, null, $composer_0, 6, 252);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_125($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$SkillsAndToolsKt$lambda_11$lambda_9dekq3($this$GlassBox, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-331419450, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$SkillsAndToolsKt.lambda-11.<anonymous> (SkillsAndTools.kt:147)');
      }
      var tmp = Images_getInstance().get_FIGMA_LOGO_295bhh_k$();
      var tmp_0 = size(Companion_getInstance_3(), get_px(42));
      Image$composable(tmp, tmp_0, null, null, null, null, false, null, $composer_0, 6, 252);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_126($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$SkillsAndToolsKt$lambda_12$lambda_wu306u($this$GlassBox, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(2021438791, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$SkillsAndToolsKt.lambda-12.<anonymous> (SkillsAndTools.kt:157)');
      }
      var tmp = Images_getInstance().get_FIREBASE_LOGO_bktfi2_k$();
      var tmp_0 = size(Companion_getInstance_3(), get_px(42));
      Image$composable(tmp, tmp_0, null, null, null, null, false, null, $composer_0, 6, 252);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_127($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$SkillsAndToolsKt$lambda_13$lambda_40gj4n($this$GlassBox, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(79329736, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$SkillsAndToolsKt.lambda-13.<anonymous> (SkillsAndTools.kt:167)');
      }
      var tmp = Images_getInstance().get_MONGODB_LOGO_vqgkw1_k$();
      var tmp_0 = size(Companion_getInstance_3(), get_px(42));
      Image$composable(tmp, tmp_0, null, null, null, null, false, null, $composer_0, 6, 252);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_128($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$SkillsAndToolsKt$lambda_14$lambda_ot5xxk($this$GlassBox, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1862779319, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$SkillsAndToolsKt.lambda-14.<anonymous> (SkillsAndTools.kt:177)');
      }
      var tmp = Images_getInstance().get_VSCODE_LOGO_dhmoy1_k$();
      var tmp_0 = size(Companion_getInstance_3(), get_px(42));
      Image$composable(tmp, tmp_0, null, null, null, null, false, null, $composer_0, 6, 252);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_129($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$SkillsAndToolsKt$lambda_15$lambda_hebmzd($this$GlassBox, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(490078922, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$SkillsAndToolsKt.lambda-15.<anonymous> (SkillsAndTools.kt:187)');
      }
      var tmp = Images_getInstance().get_GIT_LOGO_1zt4v5_k$();
      var tmp_0 = size(Companion_getInstance_3(), get_px(42));
      Image$composable(tmp, tmp_0, null, null, null, null, false, null, $composer_0, 6, 252);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_130($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$SkillsAndToolsKt$lambda_16$lambda_bfau2u($this$GlassBox, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1452030133, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$SkillsAndToolsKt.lambda-16.<anonymous> (SkillsAndTools.kt:197)');
      }
      var tmp = Images_getInstance().get_POSTMAN_LOGO_yigl15_k$();
      var tmp_0 = size(Companion_getInstance_3(), get_px(42));
      Image$composable(tmp, tmp_0, null, null, null, null, false, null, $composer_0, 6, 252);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_131($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$SkillsAndToolsKt$lambda_17$lambda_us6qu3($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1762776242, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$SkillsAndToolsKt.lambda-17.<anonymous> (SkillsAndTools.kt:122)');
      }
      var tmp = margin_2(size(Companion_getInstance_3(), get_px(65)), get_cssRem(0.6));
      GlassBox$composable(tmp, null, null, null, null, null, null, null, null, ComposableSingletons$SkillsAndToolsKt_getInstance().lambda_9_r8sbbh_1, $composer_0, 805306368, 510);
      var tmp_0 = margin_2(size(Companion_getInstance_3(), get_px(65)), get_cssRem(0.6));
      GlassBox$composable(tmp_0, null, null, null, null, null, null, null, null, ComposableSingletons$SkillsAndToolsKt_getInstance().lambda_10_7sywo5__1, $composer_0, 805306368, 510);
      var tmp_1 = margin_2(size(Companion_getInstance_3(), get_px(65)), get_cssRem(0.6));
      GlassBox$composable(tmp_1, null, null, null, null, null, null, null, null, ComposableSingletons$SkillsAndToolsKt_getInstance().lambda_11_7sywo6__1, $composer_0, 805306368, 510);
      var tmp_2 = margin_2(size(Companion_getInstance_3(), get_px(65)), get_cssRem(0.6));
      GlassBox$composable(tmp_2, null, null, null, null, null, null, null, null, ComposableSingletons$SkillsAndToolsKt_getInstance().lambda_12_7sywo7__1, $composer_0, 805306368, 510);
      var tmp_3 = margin_2(size(Companion_getInstance_3(), get_px(65)), get_cssRem(0.6));
      GlassBox$composable(tmp_3, null, null, null, null, null, null, null, null, ComposableSingletons$SkillsAndToolsKt_getInstance().lambda_13_7sywo8__1, $composer_0, 805306368, 510);
      var tmp_4 = margin_2(size(Companion_getInstance_3(), get_px(65)), get_cssRem(0.6));
      GlassBox$composable(tmp_4, null, null, null, null, null, null, null, null, ComposableSingletons$SkillsAndToolsKt_getInstance().lambda_14_7sywo9__1, $composer_0, 805306368, 510);
      var tmp_5 = margin_2(size(Companion_getInstance_3(), get_px(65)), get_cssRem(0.6));
      GlassBox$composable(tmp_5, null, null, null, null, null, null, null, null, ComposableSingletons$SkillsAndToolsKt_getInstance().lambda_15_7sywoa_1, $composer_0, 805306368, 510);
      var tmp_6 = margin_2(size(Companion_getInstance_3(), get_px(65)), get_cssRem(0.6));
      GlassBox$composable(tmp_6, null, null, null, null, null, null, null, null, ComposableSingletons$SkillsAndToolsKt_getInstance().lambda_16_7sywob_1, $composer_0, 805306368, 510);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_132($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$SkillsAndToolsKt$lambda_18$lambda_1yk9rw($this$GlassBox, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1446641161, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$SkillsAndToolsKt.lambda-18.<anonymous> (SkillsAndTools.kt:118)');
      }
      var tmp0_modifier = padding(Companion_getInstance_3(), get_cssRem(1));
      var tmp1_numColumns = numColumns(2, 2, 3, 4);
      SimpleGrid$composable(tmp1_numColumns, tmp0_modifier, null, null, ComposableSingletons$SkillsAndToolsKt_getInstance().lambda_17_7sywoc_1, $composer_0, 24576, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_133($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$SkillsAndToolsKt$lambda_19$lambda_qv27ab($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(401717244, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$SkillsAndToolsKt.lambda-19.<anonymous> (SkillsAndTools.kt:41)');
      }
      var tmp = margin_2(Companion_getInstance_3(), get_cssRem(2));
      GlassBox$composable(tmp, null, null, null, null, null, null, null, null, ComposableSingletons$SkillsAndToolsKt_getInstance().lambda_8_r8sbbi_1, $composer_0, 805306368, 510);
      var tmp_0 = margin_2(Companion_getInstance_3(), get_cssRem(2));
      GlassBox$composable(tmp_0, null, null, null, null, null, null, null, null, ComposableSingletons$SkillsAndToolsKt_getInstance().lambda_18_7sywod_1, $composer_0, 805306368, 510);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_134($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$SkillsAndToolsKt$lambda_20$lambda_los4ul($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1378857925, $changed, -1, 'com.rudra.kotfolio.components.sections.ComposableSingletons$SkillsAndToolsKt.lambda-20.<anonymous> (SkillsAndTools.kt:35)');
      }
      SectionTitle$composable(Constants_getInstance().get_SKILLS_AND_TOOLS_TITLE_j303wo_k$(), $composer_0, 6);
      var tmp0_modifier = margin(fillMaxWidth(Companion_getInstance_3()), get_cssRem(2));
      var tmp1_numColumns = numColumns(1, 2);
      SimpleGrid$composable(tmp1_numColumns, tmp0_modifier, null, null, ComposableSingletons$SkillsAndToolsKt_getInstance().lambda_19_7sywoe_1, $composer_0, 24576, 12);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$SkillsAndToolsKt() {
    ComposableSingletons$SkillsAndToolsKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_115(composableLambdaInstance(-2004572059, false, ComposableSingletons$SkillsAndToolsKt$lambda_1$lambda_1irkze));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_116(composableLambdaInstance(1443125788, false, ComposableSingletons$SkillsAndToolsKt$lambda_2$lambda_uce21l));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_117(composableLambdaInstance(-1808053539, false, ComposableSingletons$SkillsAndToolsKt$lambda_3$lambda_bv3ivc));
    var tmp_2 = this;
    tmp_2.lambda_4_r8sbbm_1 = ComposableLambda$invoke$ref_118(composableLambdaInstance(-764265570, false, ComposableSingletons$SkillsAndToolsKt$lambda_4$lambda_gyiy6v));
    var tmp_3 = this;
    tmp_3.lambda_5_r8sbbl_1 = ComposableLambda$invoke$ref_119(composableLambdaInstance(279522399, false, ComposableSingletons$SkillsAndToolsKt$lambda_5$lambda_p8ymq2));
    var tmp_4 = this;
    tmp_4.lambda_6_r8sbbk_1 = ComposableLambda$invoke$ref_120(composableLambdaInstance(1323310368, false, ComposableSingletons$SkillsAndToolsKt$lambda_6$lambda_3knuc5));
    var tmp_5 = this;
    tmp_5.lambda_7_r8sbbj_1 = ComposableLambda$invoke$ref_121(composableLambdaInstance(974010825, false, ComposableSingletons$SkillsAndToolsKt$lambda_7$lambda_weabec));
    var tmp_6 = this;
    tmp_6.lambda_8_r8sbbi_1 = ComposableLambda$invoke$ref_122(composableLambdaInstance(-452014880, false, ComposableSingletons$SkillsAndToolsKt$lambda_8$lambda_9t79il));
    var tmp_7 = this;
    tmp_7.lambda_9_r8sbbh_1 = ComposableLambda$invoke$ref_123(composableLambdaInstance(-207156146, false, ComposableSingletons$SkillsAndToolsKt$lambda_9$lambda_j0f7jm));
    var tmp_8 = this;
    tmp_8.lambda_10_7sywo5__1 = ComposableLambda$invoke$ref_124(composableLambdaInstance(1610689605, false, ComposableSingletons$SkillsAndToolsKt$lambda_10$lambda_jg7wc4));
    var tmp_9 = this;
    tmp_9.lambda_11_7sywo6__1 = ComposableLambda$invoke$ref_125(composableLambdaInstance(-331419450, false, ComposableSingletons$SkillsAndToolsKt$lambda_11$lambda_9dekq3));
    var tmp_10 = this;
    tmp_10.lambda_12_7sywo7__1 = ComposableLambda$invoke$ref_126(composableLambdaInstance(2021438791, false, ComposableSingletons$SkillsAndToolsKt$lambda_12$lambda_wu306u));
    var tmp_11 = this;
    tmp_11.lambda_13_7sywo8__1 = ComposableLambda$invoke$ref_127(composableLambdaInstance(79329736, false, ComposableSingletons$SkillsAndToolsKt$lambda_13$lambda_40gj4n));
    var tmp_12 = this;
    tmp_12.lambda_14_7sywo9__1 = ComposableLambda$invoke$ref_128(composableLambdaInstance(-1862779319, false, ComposableSingletons$SkillsAndToolsKt$lambda_14$lambda_ot5xxk));
    var tmp_13 = this;
    tmp_13.lambda_15_7sywoa_1 = ComposableLambda$invoke$ref_129(composableLambdaInstance(490078922, false, ComposableSingletons$SkillsAndToolsKt$lambda_15$lambda_hebmzd));
    var tmp_14 = this;
    tmp_14.lambda_16_7sywob_1 = ComposableLambda$invoke$ref_130(composableLambdaInstance(-1452030133, false, ComposableSingletons$SkillsAndToolsKt$lambda_16$lambda_bfau2u));
    var tmp_15 = this;
    tmp_15.lambda_17_7sywoc_1 = ComposableLambda$invoke$ref_131(composableLambdaInstance(1762776242, false, ComposableSingletons$SkillsAndToolsKt$lambda_17$lambda_us6qu3));
    var tmp_16 = this;
    tmp_16.lambda_18_7sywod_1 = ComposableLambda$invoke$ref_132(composableLambdaInstance(1446641161, false, ComposableSingletons$SkillsAndToolsKt$lambda_18$lambda_1yk9rw));
    var tmp_17 = this;
    tmp_17.lambda_19_7sywoe_1 = ComposableLambda$invoke$ref_133(composableLambdaInstance(401717244, false, ComposableSingletons$SkillsAndToolsKt$lambda_19$lambda_qv27ab));
    var tmp_18 = this;
    tmp_18.lambda_20_7sywp0__1 = ComposableLambda$invoke$ref_134(composableLambdaInstance(1378857925, false, ComposableSingletons$SkillsAndToolsKt$lambda_20$lambda_los4ul));
  }
  protoOf(ComposableSingletons$SkillsAndToolsKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$SkillsAndToolsKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$SkillsAndToolsKt).get_lambda_3_bzdzzq_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  protoOf(ComposableSingletons$SkillsAndToolsKt).get_lambda_4_bzdzzr_k$ = function () {
    return this.lambda_4_r8sbbm_1;
  };
  protoOf(ComposableSingletons$SkillsAndToolsKt).get_lambda_5_bzdzzs_k$ = function () {
    return this.lambda_5_r8sbbl_1;
  };
  protoOf(ComposableSingletons$SkillsAndToolsKt).get_lambda_6_bzdzzt_k$ = function () {
    return this.lambda_6_r8sbbk_1;
  };
  protoOf(ComposableSingletons$SkillsAndToolsKt).get_lambda_7_bzdzzu_k$ = function () {
    return this.lambda_7_r8sbbj_1;
  };
  protoOf(ComposableSingletons$SkillsAndToolsKt).get_lambda_8_bzdzzv_k$ = function () {
    return this.lambda_8_r8sbbi_1;
  };
  protoOf(ComposableSingletons$SkillsAndToolsKt).get_lambda_9_bzdzzw_k$ = function () {
    return this.lambda_9_r8sbbh_1;
  };
  protoOf(ComposableSingletons$SkillsAndToolsKt).get_lambda_10_gbhpvg_k$ = function () {
    return this.lambda_10_7sywo5__1;
  };
  protoOf(ComposableSingletons$SkillsAndToolsKt).get_lambda_11_gbhpvh_k$ = function () {
    return this.lambda_11_7sywo6__1;
  };
  protoOf(ComposableSingletons$SkillsAndToolsKt).get_lambda_12_gbhpvi_k$ = function () {
    return this.lambda_12_7sywo7__1;
  };
  protoOf(ComposableSingletons$SkillsAndToolsKt).get_lambda_13_gbhpvj_k$ = function () {
    return this.lambda_13_7sywo8__1;
  };
  protoOf(ComposableSingletons$SkillsAndToolsKt).get_lambda_14_gbhpvk_k$ = function () {
    return this.lambda_14_7sywo9__1;
  };
  protoOf(ComposableSingletons$SkillsAndToolsKt).get_lambda_15_gbhpvl_k$ = function () {
    return this.lambda_15_7sywoa_1;
  };
  protoOf(ComposableSingletons$SkillsAndToolsKt).get_lambda_16_gbhpvm_k$ = function () {
    return this.lambda_16_7sywob_1;
  };
  protoOf(ComposableSingletons$SkillsAndToolsKt).get_lambda_17_gbhpvn_k$ = function () {
    return this.lambda_17_7sywoc_1;
  };
  protoOf(ComposableSingletons$SkillsAndToolsKt).get_lambda_18_gbhpvo_k$ = function () {
    return this.lambda_18_7sywod_1;
  };
  protoOf(ComposableSingletons$SkillsAndToolsKt).get_lambda_19_gbhpvp_k$ = function () {
    return this.lambda_19_7sywoe_1;
  };
  protoOf(ComposableSingletons$SkillsAndToolsKt).get_lambda_20_gbhpwb_k$ = function () {
    return this.lambda_20_7sywp0__1;
  };
  var ComposableSingletons$SkillsAndToolsKt_instance;
  function ComposableSingletons$SkillsAndToolsKt_getInstance() {
    if (ComposableSingletons$SkillsAndToolsKt_instance == null)
      new ComposableSingletons$SkillsAndToolsKt();
    return ComposableSingletons$SkillsAndToolsKt_instance;
  }
  function SkillsAndTools$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1858181480);
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1858181480, $changed, -1, 'com.rudra.kotfolio.components.sections.SkillsAndTools$composable (SkillsAndTools.kt:28)');
      }
      var tmp = id(toModifier$composable(get_ExperienceStyle(), [], $composer_0, 64), 'skills_and_tools');
      var tmp_0 = Center_getInstance_0();
      var tmp_1 = CenterHorizontally_getInstance();
      Column$composable(tmp, tmp_0, tmp_1, null, ComposableSingletons$SkillsAndToolsKt_getInstance().lambda_20_7sywp0__1, $composer_0, 25008, 8);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(SkillsAndTools$composable$lambda($changed));
    }
  }
  function SkillsAndTools$composable$lambda($$changed) {
    return function ($composer, $force) {
      SkillsAndTools$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function get_AboutStyle() {
    _init_properties_AboutStyle_kt__5kx1x8();
    return AboutStyle$delegate.getValue_fbnwi2_k$(null, AboutStyle$factory());
  }
  var AboutStyle$delegate;
  function AboutStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_AboutStyle_kt__5kx1x8();
    $this$ComponentStyle.base_y8uu8g_k$(AboutStyle$delegate$lambda$lambda);
    var tmp = Breakpoint_ZERO_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp, AboutStyle$delegate$lambda$lambda_0);
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp_0, AboutStyle$delegate$lambda$lambda_1);
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp_1, AboutStyle$delegate$lambda$lambda_2);
    var tmp_2 = Breakpoint_LG_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp_2, AboutStyle$delegate$lambda$lambda_3);
    return Unit_getInstance();
  }
  function AboutStyle$delegate$lambda$lambda() {
    _init_properties_AboutStyle_kt__5kx1x8();
    return height(fontSize(width(Companion_getInstance_3(), get_percent(100)), get_cssRem(3)), get_vh(100));
  }
  function AboutStyle$delegate$lambda$lambda_0() {
    _init_properties_AboutStyle_kt__5kx1x8();
    return height(fontSize(width(Companion_getInstance_3(), get_percent(100)), get_cssRem(2.5)), get_vh(50));
  }
  function AboutStyle$delegate$lambda$lambda_1() {
    _init_properties_AboutStyle_kt__5kx1x8();
    return height(fontSize(width(Companion_getInstance_3(), get_percent(100)), get_cssRem(2.5)), get_vh(50));
  }
  function AboutStyle$delegate$lambda$lambda_2() {
    _init_properties_AboutStyle_kt__5kx1x8();
    return height(fontSize(width(Companion_getInstance_3(), get_percent(100)), get_cssRem(2.75)), get_vh(85));
  }
  function AboutStyle$delegate$lambda$lambda_3() {
    _init_properties_AboutStyle_kt__5kx1x8();
    return height(fontSize(width(Companion_getInstance_3(), get_percent(100)), get_cssRem(3)), get_vh(100));
  }
  function AboutStyle$factory() {
    return getPropertyCallableRef('AboutStyle', 0, KProperty0, function () {
      return get_AboutStyle();
    }, null);
  }
  var properties_initialized_AboutStyle_kt_ahxbxi;
  function _init_properties_AboutStyle_kt__5kx1x8() {
    if (!properties_initialized_AboutStyle_kt_ahxbxi) {
      properties_initialized_AboutStyle_kt_ahxbxi = true;
      AboutStyle$delegate = ComponentStyle(VOID, VOID, AboutStyle$delegate$lambda);
    }
  }
  function get_BackgroundImageStyle() {
    _init_properties_BackgroundImageStyle_kt__7lykxw();
    return BackgroundImageStyle$delegate.getValue_fbnwi2_k$(null, BackgroundImageStyle$factory());
  }
  var BackgroundImageStyle$delegate;
  function BackgroundImageStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BackgroundImageStyle_kt__7lykxw();
    $this$ComponentStyle.base_y8uu8g_k$(BackgroundImageStyle$delegate$lambda$lambda);
    var tmp = Breakpoint_SM_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp, BackgroundImageStyle$delegate$lambda$lambda_0);
    var tmp_0 = Breakpoint_MD_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp_0, BackgroundImageStyle$delegate$lambda$lambda_1);
    var tmp_1 = Breakpoint_LG_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp_1, BackgroundImageStyle$delegate$lambda$lambda_2);
    return Unit_getInstance();
  }
  function BackgroundImageStyle$delegate$lambda$lambda() {
    _init_properties_BackgroundImageStyle_kt__7lykxw();
    return scale(Companion_getInstance_3(), get_percent(25));
  }
  function BackgroundImageStyle$delegate$lambda$lambda_0() {
    _init_properties_BackgroundImageStyle_kt__7lykxw();
    return scale(Companion_getInstance_3(), get_percent(50));
  }
  function BackgroundImageStyle$delegate$lambda$lambda_1() {
    _init_properties_BackgroundImageStyle_kt__7lykxw();
    return scale(Companion_getInstance_3(), get_percent(75));
  }
  function BackgroundImageStyle$delegate$lambda$lambda_2() {
    _init_properties_BackgroundImageStyle_kt__7lykxw();
    return scale(Companion_getInstance_3(), get_percent(100));
  }
  function BackgroundImageStyle$factory() {
    return getPropertyCallableRef('BackgroundImageStyle', 0, KProperty0, function () {
      return get_BackgroundImageStyle();
    }, null);
  }
  var properties_initialized_BackgroundImageStyle_kt_2iekva;
  function _init_properties_BackgroundImageStyle_kt__7lykxw() {
    if (!properties_initialized_BackgroundImageStyle_kt_2iekva) {
      properties_initialized_BackgroundImageStyle_kt_2iekva = true;
      BackgroundImageStyle$delegate = ComponentStyle(VOID, VOID, BackgroundImageStyle$delegate$lambda);
    }
  }
  function get_ButtonStyle_0() {
    _init_properties_ButtonStyle_kt__gkuc2b();
    return ButtonStyle$delegate.getValue_fbnwi2_k$(null, ButtonStyle$factory());
  }
  var ButtonStyle$delegate;
  function ButtonStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_ButtonStyle_kt__gkuc2b();
    $this$ComponentStyle.base_y8uu8g_k$(ButtonStyle$delegate$lambda$lambda);
    var tmp = get_hover($this$ComponentStyle);
    tmp.invoke_ts7809_k$(ButtonStyle$delegate$lambda$lambda_0);
    return Unit_getInstance();
  }
  function ButtonStyle$delegate$lambda$lambda() {
    _init_properties_ButtonStyle_kt__gkuc2b();
    return transition(padding_1(Companion_getInstance_3(), VOID, get_px(20)), [new CSSTransition(Companion_getInstance_19().get_All_18jx7s_k$(), get_ms(300))]);
  }
  function ButtonStyle$delegate$lambda$lambda_0() {
    _init_properties_ButtonStyle_kt__gkuc2b();
    return padding_1(Companion_getInstance_3(), VOID, get_px(30));
  }
  function ButtonStyle$factory() {
    return getPropertyCallableRef('ButtonStyle', 0, KProperty0, function () {
      return get_ButtonStyle_0();
    }, null);
  }
  var properties_initialized_ButtonStyle_kt_79ocgh;
  function _init_properties_ButtonStyle_kt__gkuc2b() {
    if (!properties_initialized_ButtonStyle_kt_79ocgh) {
      properties_initialized_ButtonStyle_kt_79ocgh = true;
      ButtonStyle$delegate = ComponentStyle(VOID, VOID, ButtonStyle$delegate$lambda);
    }
  }
  function get_HeroSectionStyle() {
    _init_properties_HomeStyles_kt__gp8flr();
    return HeroSectionStyle$delegate.getValue_fbnwi2_k$(null, HeroSectionStyle$factory());
  }
  var HeroSectionStyle$delegate;
  function get_HelloImStyle() {
    _init_properties_HomeStyles_kt__gp8flr();
    return HelloImStyle$delegate.getValue_fbnwi2_k$(null, HelloImStyle$factory());
  }
  var HelloImStyle$delegate;
  function get_UserNameStyle() {
    _init_properties_HomeStyles_kt__gp8flr();
    return UserNameStyle$delegate.getValue_fbnwi2_k$(null, UserNameStyle$factory());
  }
  var UserNameStyle$delegate;
  function get_UsersMessageStyle() {
    _init_properties_HomeStyles_kt__gp8flr();
    return UsersMessageStyle$delegate.getValue_fbnwi2_k$(null, UsersMessageStyle$factory());
  }
  var UsersMessageStyle$delegate;
  function get_HeroContainerKeyFrames() {
    _init_properties_HomeStyles_kt__gp8flr();
    return HeroContainerKeyFrames$delegate.getValue_fbnwi2_k$(null, HeroContainerKeyFrames$factory());
  }
  var HeroContainerKeyFrames$delegate;
  function HeroSectionStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_HomeStyles_kt__gp8flr();
    $this$ComponentStyle.base_y8uu8g_k$(HeroSectionStyle$delegate$lambda$lambda);
    var tmp = Breakpoint_ZERO_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp, HeroSectionStyle$delegate$lambda$lambda_0);
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp_0, HeroSectionStyle$delegate$lambda$lambda_1);
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp_1, HeroSectionStyle$delegate$lambda$lambda_2);
    var tmp_2 = Breakpoint_LG_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp_2, HeroSectionStyle$delegate$lambda$lambda_3);
    return Unit_getInstance();
  }
  function HeroSectionStyle$delegate$lambda$lambda() {
    _init_properties_HomeStyles_kt__gp8flr();
    return height(fontSize(width(Companion_getInstance_3(), get_percent(100)), get_cssRem(3)), get_vh(100));
  }
  function HeroSectionStyle$delegate$lambda$lambda_0() {
    _init_properties_HomeStyles_kt__gp8flr();
    return height(fontSize(width(Companion_getInstance_3(), get_percent(100)), get_cssRem(2.5)), get_vh(50));
  }
  function HeroSectionStyle$delegate$lambda$lambda_1() {
    _init_properties_HomeStyles_kt__gp8flr();
    return height(fontSize(width(Companion_getInstance_3(), get_percent(100)), get_cssRem(2.5)), get_vh(50));
  }
  function HeroSectionStyle$delegate$lambda$lambda_2() {
    _init_properties_HomeStyles_kt__gp8flr();
    return height(fontSize(width(Companion_getInstance_3(), get_percent(100)), get_cssRem(2.75)), get_vh(85));
  }
  function HeroSectionStyle$delegate$lambda$lambda_3() {
    _init_properties_HomeStyles_kt__gp8flr();
    return height(fontSize(width(Companion_getInstance_3(), get_percent(100)), get_cssRem(3)), get_vh(100));
  }
  function HelloImStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_HomeStyles_kt__gp8flr();
    $this$ComponentStyle.base_y8uu8g_k$(HelloImStyle$delegate$lambda$lambda);
    var tmp = Breakpoint_SM_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp, HelloImStyle$delegate$lambda$lambda_0);
    var tmp_0 = Breakpoint_MD_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp_0, HelloImStyle$delegate$lambda$lambda_1);
    var tmp_1 = Breakpoint_LG_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp_1, HelloImStyle$delegate$lambda$lambda_2);
    return Unit_getInstance();
  }
  function HelloImStyle$delegate$lambda$lambda() {
    _init_properties_HomeStyles_kt__gp8flr();
    return margin(fontSize_0(Companion_getInstance_3(), Companion_getInstance_14().get_Medium_1fiba6_k$()), get_cssRem(2));
  }
  function HelloImStyle$delegate$lambda$lambda_0() {
    _init_properties_HomeStyles_kt__gp8flr();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_14().get_Large_icy5ma_k$());
  }
  function HelloImStyle$delegate$lambda$lambda_1() {
    _init_properties_HomeStyles_kt__gp8flr();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_14().get_XLarge_697k5o_k$());
  }
  function HelloImStyle$delegate$lambda$lambda_2() {
    _init_properties_HomeStyles_kt__gp8flr();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_14().get_XXLarge_dt4n9q_k$());
  }
  function UserNameStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_HomeStyles_kt__gp8flr();
    $this$ComponentStyle.base_y8uu8g_k$(UserNameStyle$delegate$lambda$lambda);
    var tmp = Breakpoint_SM_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp, UserNameStyle$delegate$lambda$lambda_0);
    var tmp_0 = Breakpoint_MD_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp_0, UserNameStyle$delegate$lambda$lambda_1);
    var tmp_1 = Breakpoint_LG_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp_1, UserNameStyle$delegate$lambda$lambda_2);
    return Unit_getInstance();
  }
  function UserNameStyle$delegate$lambda$lambda() {
    _init_properties_HomeStyles_kt__gp8flr();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_14().get_XLarge_697k5o_k$());
  }
  function UserNameStyle$delegate$lambda$lambda_0() {
    _init_properties_HomeStyles_kt__gp8flr();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_14().get_XXLarge_dt4n9q_k$());
  }
  function UserNameStyle$delegate$lambda$lambda_1() {
    _init_properties_HomeStyles_kt__gp8flr();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_14().get_Larger_wiegw_k$());
  }
  function UserNameStyle$delegate$lambda$lambda_2() {
    _init_properties_HomeStyles_kt__gp8flr();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_14().get_Larger_wiegw_k$());
  }
  function UsersMessageStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_HomeStyles_kt__gp8flr();
    $this$ComponentStyle.base_y8uu8g_k$(UsersMessageStyle$delegate$lambda$lambda);
    var tmp = Breakpoint_SM_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp, UsersMessageStyle$delegate$lambda$lambda_0);
    var tmp_0 = Breakpoint_MD_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp_0, UsersMessageStyle$delegate$lambda$lambda_1);
    var tmp_1 = Breakpoint_LG_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp_1, UsersMessageStyle$delegate$lambda$lambda_2);
    return Unit_getInstance();
  }
  function UsersMessageStyle$delegate$lambda$lambda() {
    _init_properties_HomeStyles_kt__gp8flr();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_14().get_Medium_1fiba6_k$());
  }
  function UsersMessageStyle$delegate$lambda$lambda_0() {
    _init_properties_HomeStyles_kt__gp8flr();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_14().get_Large_icy5ma_k$());
  }
  function UsersMessageStyle$delegate$lambda$lambda_1() {
    _init_properties_HomeStyles_kt__gp8flr();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_14().get_Large_icy5ma_k$());
  }
  function UsersMessageStyle$delegate$lambda$lambda_2() {
    _init_properties_HomeStyles_kt__gp8flr();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_14().get_XLarge_697k5o_k$());
  }
  function HeroContainerKeyFrames$delegate$lambda($this$Keyframes) {
    _init_properties_HomeStyles_kt__gp8flr();
    var tmp = get_percent(0);
    $this$Keyframes.invoke_u48aa2_k$(tmp, HeroContainerKeyFrames$delegate$lambda$lambda);
    var tmp_0 = get_percent(100);
    $this$Keyframes.invoke_u48aa2_k$(tmp_0, HeroContainerKeyFrames$delegate$lambda$lambda_0);
    return Unit_getInstance();
  }
  function HeroContainerKeyFrames$delegate$lambda$lambda() {
    _init_properties_HomeStyles_kt__gp8flr();
    return opacity(margin(Companion_getInstance_3(), get_px(50)), 0);
  }
  function HeroContainerKeyFrames$delegate$lambda$lambda_0() {
    _init_properties_HomeStyles_kt__gp8flr();
    return opacity(margin(Companion_getInstance_3(), get_px(0)), 1);
  }
  function HeroSectionStyle$factory() {
    return getPropertyCallableRef('HeroSectionStyle', 0, KProperty0, function () {
      return get_HeroSectionStyle();
    }, null);
  }
  function HelloImStyle$factory() {
    return getPropertyCallableRef('HelloImStyle', 0, KProperty0, function () {
      return get_HelloImStyle();
    }, null);
  }
  function UserNameStyle$factory() {
    return getPropertyCallableRef('UserNameStyle', 0, KProperty0, function () {
      return get_UserNameStyle();
    }, null);
  }
  function UsersMessageStyle$factory() {
    return getPropertyCallableRef('UsersMessageStyle', 0, KProperty0, function () {
      return get_UsersMessageStyle();
    }, null);
  }
  function HeroContainerKeyFrames$factory() {
    return getPropertyCallableRef('HeroContainerKeyFrames', 0, KProperty0, function () {
      return get_HeroContainerKeyFrames();
    }, null);
  }
  var properties_initialized_HomeStyles_kt_vh85z7;
  function _init_properties_HomeStyles_kt__gp8flr() {
    if (!properties_initialized_HomeStyles_kt_vh85z7) {
      properties_initialized_HomeStyles_kt_vh85z7 = true;
      HeroSectionStyle$delegate = ComponentStyle(VOID, VOID, HeroSectionStyle$delegate$lambda);
      HelloImStyle$delegate = ComponentStyle(VOID, VOID, HelloImStyle$delegate$lambda);
      UserNameStyle$delegate = ComponentStyle(VOID, VOID, UserNameStyle$delegate$lambda);
      UsersMessageStyle$delegate = ComponentStyle(VOID, VOID, UsersMessageStyle$delegate$lambda);
      HeroContainerKeyFrames$delegate = Keyframes(VOID, HeroContainerKeyFrames$delegate$lambda);
    }
  }
  function get_ProjectStyle() {
    _init_properties_ProjectStyle_kt__kc9e88();
    return ProjectStyle$delegate.getValue_fbnwi2_k$(null, ProjectStyle$factory());
  }
  var ProjectStyle$delegate;
  function ProjectStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_ProjectStyle_kt__kc9e88();
    $this$ComponentStyle.base_y8uu8g_k$(ProjectStyle$delegate$lambda$lambda);
    var tmp = Breakpoint_ZERO_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp, ProjectStyle$delegate$lambda$lambda_0);
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp_0, ProjectStyle$delegate$lambda$lambda_1);
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp_1, ProjectStyle$delegate$lambda$lambda_2);
    var tmp_2 = Breakpoint_LG_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp_2, ProjectStyle$delegate$lambda$lambda_3);
    return Unit_getInstance();
  }
  function ProjectStyle$delegate$lambda$lambda() {
    _init_properties_ProjectStyle_kt__kc9e88();
    return minHeight(width(Companion_getInstance_3(), get_percent(100)), get_vh(100));
  }
  function ProjectStyle$delegate$lambda$lambda_0() {
    _init_properties_ProjectStyle_kt__kc9e88();
    return margin(minHeight(width(Companion_getInstance_3(), get_percent(100)), get_vh(100)), get_px(100));
  }
  function ProjectStyle$delegate$lambda$lambda_1() {
    _init_properties_ProjectStyle_kt__kc9e88();
    return margin(minHeight(width(Companion_getInstance_3(), get_percent(100)), get_vh(100)), get_px(50));
  }
  function ProjectStyle$delegate$lambda$lambda_2() {
    _init_properties_ProjectStyle_kt__kc9e88();
    return margin(minHeight(width(Companion_getInstance_3(), get_percent(100)), get_vh(100)), get_px(0));
  }
  function ProjectStyle$delegate$lambda$lambda_3() {
    _init_properties_ProjectStyle_kt__kc9e88();
    return minHeight(width(Companion_getInstance_3(), get_percent(100)), get_vh(100));
  }
  function ProjectStyle$factory() {
    return getPropertyCallableRef('ProjectStyle', 0, KProperty0, function () {
      return get_ProjectStyle();
    }, null);
  }
  var properties_initialized_ProjectStyle_kt_3wz656;
  function _init_properties_ProjectStyle_kt__kc9e88() {
    if (!properties_initialized_ProjectStyle_kt_3wz656) {
      properties_initialized_ProjectStyle_kt_3wz656 = true;
      ProjectStyle$delegate = ComponentStyle(VOID, VOID, ProjectStyle$delegate$lambda);
    }
  }
  function get_SectionTitleStyle() {
    _init_properties_SectionStyles_kt__bmld57();
    return SectionTitleStyle$delegate.getValue_fbnwi2_k$(null, SectionTitleStyle$factory());
  }
  var SectionTitleStyle$delegate;
  function get_SectionDescriptionStyle() {
    _init_properties_SectionStyles_kt__bmld57();
    return SectionDescriptionStyle$delegate.getValue_fbnwi2_k$(null, SectionDescriptionStyle$factory());
  }
  var SectionDescriptionStyle$delegate;
  function SectionTitleStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_SectionStyles_kt__bmld57();
    $this$ComponentStyle.base_y8uu8g_k$(SectionTitleStyle$delegate$lambda$lambda);
    var tmp = Breakpoint_SM_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp, SectionTitleStyle$delegate$lambda$lambda_0);
    var tmp_0 = Breakpoint_MD_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp_0, SectionTitleStyle$delegate$lambda$lambda_1);
    var tmp_1 = Breakpoint_LG_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp_1, SectionTitleStyle$delegate$lambda$lambda_2);
    return Unit_getInstance();
  }
  function SectionTitleStyle$delegate$lambda$lambda() {
    _init_properties_SectionStyles_kt__bmld57();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_14().get_Large_icy5ma_k$());
  }
  function SectionTitleStyle$delegate$lambda$lambda_0() {
    _init_properties_SectionStyles_kt__bmld57();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_14().get_Large_icy5ma_k$());
  }
  function SectionTitleStyle$delegate$lambda$lambda_1() {
    _init_properties_SectionStyles_kt__bmld57();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_14().get_XLarge_697k5o_k$());
  }
  function SectionTitleStyle$delegate$lambda$lambda_2() {
    _init_properties_SectionStyles_kt__bmld57();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_14().get_XXLarge_dt4n9q_k$());
  }
  function SectionDescriptionStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_SectionStyles_kt__bmld57();
    $this$ComponentStyle.base_y8uu8g_k$(SectionDescriptionStyle$delegate$lambda$lambda);
    var tmp = Breakpoint_SM_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp, SectionDescriptionStyle$delegate$lambda$lambda_0);
    var tmp_0 = Breakpoint_MD_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp_0, SectionDescriptionStyle$delegate$lambda$lambda_1);
    var tmp_1 = Breakpoint_LG_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp_1, SectionDescriptionStyle$delegate$lambda$lambda_2);
    return Unit_getInstance();
  }
  function SectionDescriptionStyle$delegate$lambda$lambda() {
    _init_properties_SectionStyles_kt__bmld57();
    return margin_0(fontSize_0(Companion_getInstance_3(), Companion_getInstance_14().get_XSmall_6d9fo8_k$()), get_cssRem(0.75));
  }
  function SectionDescriptionStyle$delegate$lambda$lambda_0() {
    _init_properties_SectionStyles_kt__bmld57();
    return margin_0(fontSize_0(Companion_getInstance_3(), Companion_getInstance_14().get_Small_ih014u_k$()), get_cssRem(0.75));
  }
  function SectionDescriptionStyle$delegate$lambda$lambda_1() {
    _init_properties_SectionStyles_kt__bmld57();
    return margin_0(fontSize_0(Companion_getInstance_3(), Companion_getInstance_14().get_Medium_1fiba6_k$()), get_cssRem(1));
  }
  function SectionDescriptionStyle$delegate$lambda$lambda_2() {
    _init_properties_SectionStyles_kt__bmld57();
    return margin_0(fontSize_0(Companion_getInstance_3(), Companion_getInstance_14().get_Large_icy5ma_k$()), get_cssRem(2));
  }
  function SectionTitleStyle$factory() {
    return getPropertyCallableRef('SectionTitleStyle', 0, KProperty0, function () {
      return get_SectionTitleStyle();
    }, null);
  }
  function SectionDescriptionStyle$factory() {
    return getPropertyCallableRef('SectionDescriptionStyle', 0, KProperty0, function () {
      return get_SectionDescriptionStyle();
    }, null);
  }
  var properties_initialized_SectionStyles_kt_xr8gg9;
  function _init_properties_SectionStyles_kt__bmld57() {
    if (!properties_initialized_SectionStyles_kt_xr8gg9) {
      properties_initialized_SectionStyles_kt_xr8gg9 = true;
      SectionTitleStyle$delegate = ComponentStyle(VOID, VOID, SectionTitleStyle$delegate$lambda);
      SectionDescriptionStyle$delegate = ComponentStyle(VOID, VOID, SectionDescriptionStyle$delegate$lambda);
    }
  }
  function get_WorkExperienceItemRoleAndDurationStyle() {
    _init_properties_WorkExperienceItemStyles_kt__zglb9s();
    return WorkExperienceItemRoleAndDurationStyle$delegate.getValue_fbnwi2_k$(null, WorkExperienceItemRoleAndDurationStyle$factory());
  }
  var WorkExperienceItemRoleAndDurationStyle$delegate;
  function get_WorkExperienceItemOrgStyle() {
    _init_properties_WorkExperienceItemStyles_kt__zglb9s();
    return WorkExperienceItemOrgStyle$delegate.getValue_fbnwi2_k$(null, WorkExperienceItemOrgStyle$factory());
  }
  var WorkExperienceItemOrgStyle$delegate;
  function get_ExperienceStyle() {
    _init_properties_WorkExperienceItemStyles_kt__zglb9s();
    return ExperienceStyle$delegate.getValue_fbnwi2_k$(null, ExperienceStyle$factory());
  }
  var ExperienceStyle$delegate;
  function WorkExperienceItemRoleAndDurationStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_WorkExperienceItemStyles_kt__zglb9s();
    $this$ComponentStyle.base_y8uu8g_k$(WorkExperienceItemRoleAndDurationStyle$delegate$lambda$lambda);
    var tmp = Breakpoint_SM_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp, WorkExperienceItemRoleAndDurationStyle$delegate$lambda$lambda_0);
    var tmp_0 = Breakpoint_MD_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp_0, WorkExperienceItemRoleAndDurationStyle$delegate$lambda$lambda_1);
    var tmp_1 = Breakpoint_LG_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp_1, WorkExperienceItemRoleAndDurationStyle$delegate$lambda$lambda_2);
    return Unit_getInstance();
  }
  function WorkExperienceItemRoleAndDurationStyle$delegate$lambda$lambda() {
    _init_properties_WorkExperienceItemStyles_kt__zglb9s();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_14().get_XXSmall_dp2rr6_k$());
  }
  function WorkExperienceItemRoleAndDurationStyle$delegate$lambda$lambda_0() {
    _init_properties_WorkExperienceItemStyles_kt__zglb9s();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_14().get_XSmall_6d9fo8_k$());
  }
  function WorkExperienceItemRoleAndDurationStyle$delegate$lambda$lambda_1() {
    _init_properties_WorkExperienceItemStyles_kt__zglb9s();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_14().get_Small_ih014u_k$());
  }
  function WorkExperienceItemRoleAndDurationStyle$delegate$lambda$lambda_2() {
    _init_properties_WorkExperienceItemStyles_kt__zglb9s();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_14().get_Small_ih014u_k$());
  }
  function WorkExperienceItemOrgStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_WorkExperienceItemStyles_kt__zglb9s();
    $this$ComponentStyle.base_y8uu8g_k$(WorkExperienceItemOrgStyle$delegate$lambda$lambda);
    var tmp = Breakpoint_SM_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp, WorkExperienceItemOrgStyle$delegate$lambda$lambda_0);
    var tmp_0 = Breakpoint_MD_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp_0, WorkExperienceItemOrgStyle$delegate$lambda$lambda_1);
    var tmp_1 = Breakpoint_LG_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp_1, WorkExperienceItemOrgStyle$delegate$lambda$lambda_2);
    return Unit_getInstance();
  }
  function WorkExperienceItemOrgStyle$delegate$lambda$lambda() {
    _init_properties_WorkExperienceItemStyles_kt__zglb9s();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_14().get_Small_ih014u_k$());
  }
  function WorkExperienceItemOrgStyle$delegate$lambda$lambda_0() {
    _init_properties_WorkExperienceItemStyles_kt__zglb9s();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_14().get_Medium_1fiba6_k$());
  }
  function WorkExperienceItemOrgStyle$delegate$lambda$lambda_1() {
    _init_properties_WorkExperienceItemStyles_kt__zglb9s();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_14().get_XLarge_697k5o_k$());
  }
  function WorkExperienceItemOrgStyle$delegate$lambda$lambda_2() {
    _init_properties_WorkExperienceItemStyles_kt__zglb9s();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_14().get_XXLarge_dt4n9q_k$());
  }
  function ExperienceStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_WorkExperienceItemStyles_kt__zglb9s();
    $this$ComponentStyle.base_y8uu8g_k$(ExperienceStyle$delegate$lambda$lambda);
    var tmp = Breakpoint_ZERO_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp, ExperienceStyle$delegate$lambda$lambda_0);
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp_0, ExperienceStyle$delegate$lambda$lambda_1);
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp_1, ExperienceStyle$delegate$lambda$lambda_2);
    var tmp_2 = Breakpoint_LG_getInstance();
    $this$ComponentStyle.invoke_hmyoxj_k$(tmp_2, ExperienceStyle$delegate$lambda$lambda_3);
    return Unit_getInstance();
  }
  function ExperienceStyle$delegate$lambda$lambda() {
    _init_properties_WorkExperienceItemStyles_kt__zglb9s();
    return minHeight(fontSize(width(Companion_getInstance_3(), get_percent(100)), get_cssRem(3)), get_vh(100));
  }
  function ExperienceStyle$delegate$lambda$lambda_0() {
    _init_properties_WorkExperienceItemStyles_kt__zglb9s();
    return fontSize(width(Companion_getInstance_3(), get_percent(100)), get_cssRem(2.5));
  }
  function ExperienceStyle$delegate$lambda$lambda_1() {
    _init_properties_WorkExperienceItemStyles_kt__zglb9s();
    return fontSize(width(Companion_getInstance_3(), get_percent(100)), get_cssRem(2.5));
  }
  function ExperienceStyle$delegate$lambda$lambda_2() {
    _init_properties_WorkExperienceItemStyles_kt__zglb9s();
    return fontSize(width(Companion_getInstance_3(), get_percent(100)), get_cssRem(2.75));
  }
  function ExperienceStyle$delegate$lambda$lambda_3() {
    _init_properties_WorkExperienceItemStyles_kt__zglb9s();
    return fontSize(width(Companion_getInstance_3(), get_percent(100)), get_cssRem(3));
  }
  function WorkExperienceItemRoleAndDurationStyle$factory() {
    return getPropertyCallableRef('WorkExperienceItemRoleAndDurationStyle', 0, KProperty0, function () {
      return get_WorkExperienceItemRoleAndDurationStyle();
    }, null);
  }
  function WorkExperienceItemOrgStyle$factory() {
    return getPropertyCallableRef('WorkExperienceItemOrgStyle', 0, KProperty0, function () {
      return get_WorkExperienceItemOrgStyle();
    }, null);
  }
  function ExperienceStyle$factory() {
    return getPropertyCallableRef('ExperienceStyle', 0, KProperty0, function () {
      return get_ExperienceStyle();
    }, null);
  }
  var properties_initialized_WorkExperienceItemStyles_kt_yuv67i;
  function _init_properties_WorkExperienceItemStyles_kt__zglb9s() {
    if (!properties_initialized_WorkExperienceItemStyles_kt_yuv67i) {
      properties_initialized_WorkExperienceItemStyles_kt_yuv67i = true;
      WorkExperienceItemRoleAndDurationStyle$delegate = ComponentStyle(VOID, VOID, WorkExperienceItemRoleAndDurationStyle$delegate$lambda);
      WorkExperienceItemOrgStyle$delegate = ComponentStyle(VOID, VOID, WorkExperienceItemOrgStyle$delegate$lambda);
      ExperienceStyle$delegate = ComponentStyle(VOID, VOID, ExperienceStyle$delegate$lambda);
    }
  }
  function AppearanceAwareImage(src, description, modifier, variant, width, height, autoPrefix, ref) {
    illegalDecoyCallException('AppearanceAwareImage');
  }
  function AppearanceAwareImage_0(src, modifier, variant, width, height, alt, autoPrefix, ref) {
    illegalDecoyCallException('AppearanceAwareImage');
  }
  function AppearanceAwareImage$composable(src, description, modifier, variant, width, height, autoPrefix, ref, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var width_0 = {_v: width};
    var height_0 = {_v: height};
    var autoPrefix_0 = {_v: autoPrefix};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(905011139);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(src) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(description) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(variant_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(width_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(height_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(autoPrefix_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(ref_0._v) ? 8388608 : 4194304);
    if (!(($dirty & 23967451) === 4793490) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 4) === 0)) {
        modifier_0._v = Companion_getInstance_3();
      }
      if (!(($default & 8) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        width_0._v = null;
      }
      if (!(($default & 32) === 0)) {
        height_0._v = null;
      }
      if (!(($default & 64) === 0)) {
        autoPrefix_0._v = true;
      }
      if (!(($default & 128) === 0)) {
        ref_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(905011139, $dirty, -1, 'com.rudra.kotfolio.components.widgets.AppearanceAwareImage$composable (AppearanceAwareImage.kt:24)');
      }
      var tmp;
      switch (Companion_getInstance_1().$get_current$$composable_nxoy3y_k$($composer_0, 6).get_ordinal_ip24qg_k$()) {
        case 0:
          tmp = true;
          break;
        case 1:
          tmp = false;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var isLight = tmp;
      var tmp_0 = Companion_getInstance_3();
      $composer_0.startReplaceableGroup_ip860b_k$(-1912598195);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = $composer_0.changed_jpyyrz_k$(isLight);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.components.widgets.AppearanceAwareImage$composable.<anonymous>' call
        var value = AppearanceAwareImage$composable$lambda(isLight);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmpCache = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      Image$composable_0(src, description, styleModifier(tmp_0, tmpCache).then_mmfvo6_k$(modifier_0._v), variant_0._v, width_0._v, height_0._v, autoPrefix_0._v, ref_0._v, $composer_0, 14 & $dirty | 112 & $dirty | 7168 & $dirty | 57344 & $dirty | 458752 & $dirty | 3670016 & $dirty | 29360128 & $dirty, 0);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(AppearanceAwareImage$composable$lambda_0(src, description, modifier_0, variant_0, width_0, height_0, autoPrefix_0, ref_0, $changed, $default));
    }
  }
  function AppearanceAwareImage$composable_0(src, modifier, variant, width, height, alt, autoPrefix, ref, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var width_0 = {_v: width};
    var height_0 = {_v: height};
    var alt_0 = {_v: alt};
    var autoPrefix_0 = {_v: autoPrefix};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(2011555055);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(src) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(variant_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(width_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(height_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(alt_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(autoPrefix_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(ref_0._v) ? 8388608 : 4194304);
    if (!(($dirty & 23967451) === 4793490) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance_3();
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
        traceEventStart(2011555055, $dirty, -1, 'com.rudra.kotfolio.components.widgets.AppearanceAwareImage$composable (AppearanceAwareImage.kt:55)');
      }
      var tmp;
      switch (Companion_getInstance_1().$get_current$$composable_nxoy3y_k$($composer_0, 6).get_ordinal_ip24qg_k$()) {
        case 0:
          tmp = true;
          break;
        case 1:
          tmp = false;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var isLight = tmp;
      var tmp_0 = Companion_getInstance_3();
      $composer_0.startReplaceableGroup_ip860b_k$(-1912597448);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = $composer_0.changed_jpyyrz_k$(isLight);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.components.widgets.AppearanceAwareImage$composable.<anonymous>' call
        var value = AppearanceAwareImage$composable$lambda_1(isLight);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmpCache = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      Image$composable(src, styleModifier(tmp_0, tmpCache).then_mmfvo6_k$(modifier_0._v), variant_0._v, width_0._v, height_0._v, alt_0._v, autoPrefix_0._v, ref_0._v, $composer_0, 14 & $dirty | 896 & $dirty | 7168 & $dirty | 57344 & $dirty | 458752 & $dirty | 3670016 & $dirty | 29360128 & $dirty, 0);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(AppearanceAwareImage$composable$lambda_2(src, modifier_0, variant_0, width_0, height_0, alt_0, autoPrefix_0, ref_0, $changed, $default));
    }
  }
  function AppearanceAwareImage$composable$lambda$lambda($isLight) {
    return function ($this$filter) {
      var tmp;
      if ($isLight) {
        $this$filter.invert_j1rfj9_k$(1);
        tmp = Unit_getInstance();
      } else {
        $this$filter.invert_j1rfj9_k$(0);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function AppearanceAwareImage$composable$lambda($isLight) {
    return function ($this$styleModifier) {
      filter($this$styleModifier, AppearanceAwareImage$composable$lambda$lambda($isLight));
      return Unit_getInstance();
    };
  }
  function AppearanceAwareImage$composable$lambda_0($src, $description, $modifier, $variant, $width, $height, $autoPrefix, $ref, $$changed, $$default) {
    return function ($composer, $force) {
      AppearanceAwareImage$composable($src, $description, $modifier._v, $variant._v, $width._v, $height._v, $autoPrefix._v, $ref._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function AppearanceAwareImage$composable$lambda$lambda_0($isLight) {
    return function ($this$filter) {
      var tmp;
      if ($isLight) {
        $this$filter.invert_j1rfj9_k$(1);
        tmp = Unit_getInstance();
      } else {
        $this$filter.invert_j1rfj9_k$(0);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function AppearanceAwareImage$composable$lambda_1($isLight) {
    return function ($this$styleModifier) {
      filter($this$styleModifier, AppearanceAwareImage$composable$lambda$lambda_0($isLight));
      return Unit_getInstance();
    };
  }
  function AppearanceAwareImage$composable$lambda_2($src, $modifier, $variant, $width, $height, $alt, $autoPrefix, $ref, $$changed, $$default) {
    return function ($composer, $force) {
      AppearanceAwareImage$composable_0($src, $modifier._v, $variant._v, $width._v, $height._v, $alt._v, $autoPrefix._v, $ref._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function get_ArrowUpStyle() {
    _init_properties_BackToTopButton_kt__sne1zn();
    return ArrowUpStyle$delegate.getValue_fbnwi2_k$(null, ArrowUpStyle$factory());
  }
  var ArrowUpStyle$delegate;
  function get_BackToTopButtonStyle() {
    _init_properties_BackToTopButton_kt__sne1zn();
    return BackToTopButtonStyle$delegate.getValue_fbnwi2_k$(null, BackToTopButtonStyle$factory());
  }
  var BackToTopButtonStyle$delegate;
  function get_FadeInKeyFrames() {
    _init_properties_BackToTopButton_kt__sne1zn();
    return FadeInKeyFrames$delegate.getValue_fbnwi2_k$(null, FadeInKeyFrames$factory());
  }
  var FadeInKeyFrames$delegate;
  function BackToTopButton() {
    _init_properties_BackToTopButton_kt__sne1zn();
    illegalDecoyCallException('BackToTopButton');
  }
  function BackToTopButton$composable($composer, $changed) {
    _init_properties_BackToTopButton_kt__sne1zn();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(157764088);
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(157764088, $changed, -1, 'com.rudra.kotfolio.components.widgets.BackToTopButton$composable (BackToTopButton.kt:109)');
      }
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(547886695);
      sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.components.widgets.BackToTopButton$composable.<anonymous>' call
        var value = mutableStateOf(null);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      var scroll$delegate = tmp0;
      $composer_0.startReplaceableGroup_ip860b_k$(-1901189062);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = $composer_0.changed_ga7h3f_k$(scroll$delegate);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.components.widgets.BackToTopButton$composable.<anonymous>' call
        var value_0 = BackToTopButton$composable$slambda_0(scroll$delegate, null);
        this_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmpCache = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      LaunchedEffect$composable(Unit_getInstance(), tmpCache, $composer_0, 6);
      var tmp_3 = fillMaxSize(Companion_getInstance_3());
      // Inline function 'org.jetbrains.compose.web.css.Companion.Fixed' call
      Companion_getInstance_13();
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_4 = pointerEvents(zIndex(position(tmp_3, 'fixed'), 1), Companion_getInstance_12().get_None_wo6tgh_k$());
      var tmp_5 = Bottom_getInstance();
      var tmp_6 = End_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.rudra.kotfolio.components.widgets.BackToTopButton$composable.<anonymous>' call
      var tmp_7 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_7, 972684408, true, BackToTopButton$composable$lambda_1(scroll$delegate));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_8;
      if (invalid_0 ? true : it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.components.widgets.BackToTopButton$composable.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_136(dispatchReceiver);
        $composer_2.updateRememberedValue_l1wh71_k$(value_1);
        tmp_8 = value_1;
      } else {
        tmp_8 = it_1;
      }
      var tmp_9 = tmp_8;
      var tmp0_0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
      $composer_2.endReplaceableGroup_ern0ak_k$();
      Column$composable(tmp_4, tmp_5, tmp_6, null, tmp0_0, $composer_0, 25008, 8);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(BackToTopButton$composable$lambda_2($changed));
    }
  }
  function BackToTopButton$composable$lambda($scroll$delegate) {
    _init_properties_BackToTopButton_kt__sne1zn();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('scroll', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $scroll$delegate.get_value_j01efc_k$();
  }
  function BackToTopButton$composable$lambda_0($scroll$delegate, value) {
    _init_properties_BackToTopButton_kt__sne1zn();
    getLocalDelegateReference('scroll', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $scroll$delegate.set_value_v1vabv_k$(value);
    return Unit_getInstance();
  }
  function ArrowUpStyle$delegate$lambda($this$base) {
    _init_properties_BackToTopButton_kt__sne1zn();
    return fontSize(fontWeight_0(fontFamily(Companion_getInstance_3(), [Fonts_getInstance().get_Space_Grotesk_4r9ux7_k$()]), Companion_getInstance_7().get_Light_id31e5_k$()), get_cssRem(1.4));
  }
  function BackToTopButtonStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_BackToTopButton_kt__sne1zn();
    $this$ComponentStyle.base_y8uu8g_k$(BackToTopButtonStyle$delegate$lambda$lambda);
    var tmp = get_hover($this$ComponentStyle);
    tmp.invoke_ts7809_k$(BackToTopButtonStyle$delegate$lambda$lambda_0);
    return Unit_getInstance();
  }
  function BackToTopButtonStyle$delegate$lambda$lambda() {
    _init_properties_BackToTopButton_kt__sne1zn();
    var tmp = cursor(margin_1(borderRadius(size(Companion_getInstance_3(), get_px(50)), get_percent(100)), VOID, get_px(40), get_px(40)), Companion_getInstance_20().get_Pointer_m64vg4_k$());
    var tmp_0 = styleModifier(tmp, BackToTopButtonStyle$delegate$lambda$lambda$lambda);
    var tmp_1 = get_ms(200);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Ease' call
    Companion_getInstance_15();
    // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition(tmp_0, [CSSTransition_init_$Create$('translate', tmp_1, 'ease')]);
  }
  function BackToTopButtonStyle$delegate$lambda$lambda$lambda($this$styleModifier) {
    _init_properties_BackToTopButton_kt__sne1zn();
    $this$styleModifier.property_wcrait_k$('pointer-events', 'auto');
    return Unit_getInstance();
  }
  function BackToTopButtonStyle$delegate$lambda$lambda_0() {
    _init_properties_BackToTopButton_kt__sne1zn();
    return translateY(Companion_getInstance_3(), get_px(-10));
  }
  function FadeInKeyFrames$delegate$lambda($this$Keyframes) {
    _init_properties_BackToTopButton_kt__sne1zn();
    var tmp = get_percent(0);
    $this$Keyframes.invoke_u48aa2_k$(tmp, FadeInKeyFrames$delegate$lambda$lambda);
    var tmp_0 = get_percent(100);
    $this$Keyframes.invoke_u48aa2_k$(tmp_0, FadeInKeyFrames$delegate$lambda$lambda_0);
    return Unit_getInstance();
  }
  function FadeInKeyFrames$delegate$lambda$lambda() {
    _init_properties_BackToTopButton_kt__sne1zn();
    return opacity(Companion_getInstance_3(), 0);
  }
  function FadeInKeyFrames$delegate$lambda$lambda_0() {
    _init_properties_BackToTopButton_kt__sne1zn();
    return opacity(Companion_getInstance_3(), 1);
  }
  function BackToTopButton$composable$slambda$lambda($scroll$delegate) {
    return function (it) {
      var tmp0_safe_receiver = document.documentElement;
      BackToTopButton$composable$lambda_0($scroll$delegate, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.scrollTop);
      return Unit_getInstance();
    };
  }
  function BackToTopButton$composable$slambda($scroll$delegate, resultContinuation) {
    this.$scroll$delegate_1 = $scroll$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BackToTopButton$composable$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BackToTopButton$composable$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BackToTopButton$composable$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var tmp_0 = window;
          tmp_0.addEventListener('scroll', BackToTopButton$composable$slambda$lambda(this.$scroll$delegate_1));
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(BackToTopButton$composable$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new BackToTopButton$composable$slambda(this.$scroll$delegate_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(BackToTopButton$composable$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function BackToTopButton$composable$slambda_0($scroll$delegate, resultContinuation) {
    var i = new BackToTopButton$composable$slambda($scroll$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BackToTopButton$composable$lambda$lambda(it) {
    _init_properties_BackToTopButton_kt__sne1zn();
    var tmp0_safe_receiver = document.documentElement;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'org.w3c.dom.ScrollToOptions' call
      // Inline function 'org.w3c.dom.SMOOTH' call
      null;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var left = undefined;
      var o = {};
      o['left'] = left;
      o['top'] = 0.0;
      o['behavior'] = 'smooth';
      tmp0_safe_receiver.scroll(o);
    }
    return Unit_getInstance();
  }
  function BackToTopButton$composable$lambda$lambda_0($arrowColor) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-9258754, $changed, -1, 'com.rudra.kotfolio.components.widgets.BackToTopButton$composable.<anonymous>.<anonymous> (BackToTopButton.kt:161)');
        }
        var tmp_0 = color(toModifier$composable(get_ArrowUpStyle(), [], $composer_0, 64), $arrowColor);
        SpanText$composable('\u2191', tmp_0, null, null, $composer_0, 6, 12);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_getInstance();
        }
        tmp = tmp_1;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_135($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function BackToTopButton$composable$lambda_1($scroll$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(972684408, $changed, -1, 'com.rudra.kotfolio.components.widgets.BackToTopButton$composable.<anonymous> (BackToTopButton.kt:127)');
        }
        var show = !(BackToTopButton$composable$lambda($scroll$delegate) == null) ? ensureNotNull(BackToTopButton$composable$lambda($scroll$delegate)) > 400.0 : false;
        var tmp_0;
        switch (Companion_getInstance_1().$get_current$$composable_nxoy3y_k$($composer_0, 6).get_ordinal_ip24qg_k$()) {
          case 0:
            tmp_0 = Colors_getInstance().get_Black_i7mvue_k$();
            break;
          case 1:
            tmp_0 = Colors_getInstance().get_White_ij46ow_k$();
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        var buttonColor = tmp_0;
        var tmp_1;
        switch (Companion_getInstance_1().$get_current$$composable_nxoy3y_k$($composer_0, 6).get_ordinal_ip24qg_k$()) {
          case 0:
            tmp_1 = Colors_getInstance().get_White_ij46ow_k$();
            break;
          case 1:
            tmp_1 = Colors_getInstance().get_Black_i7mvue_k$();
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        var arrowColor = tmp_1;
        var tmp_2 = visibility(backgroundColor(toModifier$composable(get_BackToTopButtonStyle(), [], $composer_0, 64), buttonColor), show ? Companion_getInstance_21().get_Visible_yikvpz_k$() : Companion_getInstance_21().get_Hidden_viqel_k$());
        $composer_0.startReplaceableGroup_ip860b_k$(-1901188051);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.rudra.kotfolio.components.widgets.BackToTopButton$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = BackToTopButton$composable$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmpCache = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        var tmp_5 = onClick(tmp_2, tmpCache);
        var tmp_6;
        if (show) {
          var tmp_7 = Companion_getInstance_3();
          var tmp_8 = get_FadeInKeyFrames();
          var tmp_9 = get_s(1.5);
          // Inline function 'org.jetbrains.compose.web.css.Companion.EaseInOut' call
          Companion_getInstance_15();
          // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp$ret$7 = 'ease-in-out';
          tmp_6 = animation(tmp_7, [toAnimation(tmp_8, null, tmp_9, tmp$ret$7)]);
        } else {
          tmp_6 = Companion_getInstance_3();
        }
        var tmp_10 = tmp_5.then_mmfvo6_k$(tmp_6);
        var tmp_11 = Center_getInstance();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.rudra.kotfolio.components.widgets.BackToTopButton$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_12 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_12, -9258754, true, BackToTopButton$composable$lambda$lambda_0(arrowColor));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_13;
        if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.rudra.kotfolio.components.widgets.BackToTopButton$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_135(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_13 = value_0;
        } else {
          tmp_13 = it_0;
        }
        var tmp_14 = tmp_13;
        var tmp0 = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Box$composable(tmp_10, tmp_11, null, tmp0, $composer_0, 3120, 4);
        var tmp_15;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_15 = Unit_getInstance();
        }
        tmp = tmp_15;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_136($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function BackToTopButton$composable$lambda_2($$changed) {
    return function ($composer, $force) {
      BackToTopButton$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ArrowUpStyle$factory() {
    return getPropertyCallableRef('ArrowUpStyle', 0, KProperty0, function () {
      return get_ArrowUpStyle();
    }, null);
  }
  function BackToTopButtonStyle$factory() {
    return getPropertyCallableRef('BackToTopButtonStyle', 0, KProperty0, function () {
      return get_BackToTopButtonStyle();
    }, null);
  }
  function FadeInKeyFrames$factory() {
    return getPropertyCallableRef('FadeInKeyFrames', 0, KProperty0, function () {
      return get_FadeInKeyFrames();
    }, null);
  }
  var properties_initialized_BackToTopButton_kt_ls6pt7;
  function _init_properties_BackToTopButton_kt__sne1zn() {
    if (!properties_initialized_BackToTopButton_kt_ls6pt7) {
      properties_initialized_BackToTopButton_kt_ls6pt7 = true;
      var tmp = Companion_getInstance_5();
      ArrowUpStyle$delegate = base(tmp, VOID, VOID, ArrowUpStyle$delegate$lambda);
      BackToTopButtonStyle$delegate = ComponentStyle(VOID, VOID, BackToTopButtonStyle$delegate$lambda);
      FadeInKeyFrames$delegate = Keyframes(VOID, FadeInKeyFrames$delegate$lambda);
    }
  }
  function GlassBox(modifier, roundedCorners, borderWidth, borderStyle, borderColor, gradientDirection, startColor, endColor, blendMode, content) {
    illegalDecoyCallException('GlassBox');
  }
  function GlassBox$composable(modifier, roundedCorners, borderWidth, borderStyle, borderColor, gradientDirection, startColor, endColor, blendMode, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var roundedCorners_0 = {_v: roundedCorners};
    var borderWidth_0 = {_v: borderWidth};
    var borderStyle_0 = {_v: borderStyle};
    var borderColor_0 = {_v: borderColor};
    var gradientDirection_0 = {_v: gradientDirection};
    var startColor_0 = {_v: startColor};
    var endColor_0 = {_v: endColor};
    var blendMode_0 = {_v: blendMode};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1296305323);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ((($default & 2) === 0 ? $composer_0.changed_ga7h3f_k$(roundedCorners_0._v) : false) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ((($default & 4) === 0 ? $composer_0.changed_ga7h3f_k$(borderWidth_0._v) : false) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ((($default & 8) === 0 ? $composer_0.changed_ga7h3f_k$(borderStyle_0._v) : false) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ((($default & 16) === 0 ? $composer_0.changed_ga7h3f_k$(borderColor_0._v) : false) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(gradientDirection_0._v) ? 131072 : 65536);
    if (($changed & 3670016) === 0)
      $dirty = $dirty | ((($default & 64) === 0 ? $composer_0.changed_ga7h3f_k$(startColor_0._v) : false) ? 1048576 : 524288);
    if (($changed & 29360128) === 0)
      $dirty = $dirty | ((($default & 128) === 0 ? $composer_0.changed_ga7h3f_k$(endColor_0._v) : false) ? 8388608 : 4194304);
    if (($changed & 234881024) === 0)
      $dirty = $dirty | ((($default & 256) === 0 ? $composer_0.changed_ga7h3f_k$(blendMode_0._v) : false) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 1879048192) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 536870912 : 268435456);
    if (!(($dirty & 1533916891) === 306783378) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 ? true : $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_getInstance_3();
        }
        if (!(($default & 2) === 0)) {
          roundedCorners_0._v = get_px(10);
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          borderWidth_0._v = get_px(1);
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
          Companion_getInstance_11();
          // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          borderStyle_0._v = 'solid';
          $dirty = $dirty & -7169;
        }
        if (!(($default & 16) === 0)) {
          var tmp;
          switch (Companion_getInstance_1().$get_current$$composable_nxoy3y_k$($composer_0, 6).get_ordinal_ip24qg_k$()) {
            case 0:
              tmp = Colors_getInstance_0().get_GLASS_BOX_BORDER_COLOR_LIGHT_t1jwnb_k$();
              break;
            case 1:
              tmp = Colors_getInstance_0().get_GLASS_BOX_BORDER_COLOR_DARK_upx2rp_k$();
              break;
            default:
              noWhenBranchMatchedException();
              break;
          }
          borderColor_0._v = tmp;
          $dirty = $dirty & -57345;
        }
        if (!(($default & 32) === 0)) {
          gradientDirection_0._v = Direction_ToBottomRight_getInstance();
        }
        if (!(($default & 64) === 0)) {
          startColor_0._v = rgba(255, 255, 255, 0);
          $dirty = $dirty & -3670017;
        }
        if (!(($default & 128) === 0)) {
          endColor_0._v = rgba(255, 255, 255, 0.06);
          $dirty = $dirty & -29360129;
        }
        if (!(($default & 256) === 0)) {
          blendMode_0._v = Companion_getInstance_18().get_Normal_22avww_k$();
          $dirty = $dirty & -234881025;
        }
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
        if (!(($default & 64) === 0))
          $dirty = $dirty & -3670017;
        if (!(($default & 128) === 0))
          $dirty = $dirty & -29360129;
        if (!(($default & 256) === 0))
          $dirty = $dirty & -234881025;
      }
      $composer_0.endDefaults_b0s0ot_k$();
      if (isTraceInProgress()) {
        traceEventStart(-1296305323, $dirty, -1, 'com.rudra.kotfolio.components.widgets.GlassBox$composable (GlassBox.kt:35)');
      }
      var tmp_0 = margin_0(Companion_getInstance_3(), VOID, get_cssRem(1)).then_mmfvo6_k$(modifier_0._v);
      var tmp_1 = Center_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.rudra.kotfolio.components.widgets.GlassBox$composable.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, -1494703320, true, GlassBox$composable$lambda(roundedCorners_0, borderWidth_0, borderStyle_0, borderColor_0, blendMode_0, gradientDirection_0, startColor_0, endColor_0, content));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.components.widgets.GlassBox$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_137(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_3 = value;
      } else {
        tmp_3 = it;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Box$composable(tmp_0, tmp_1, null, tmp0, $composer_0, 3120, 4);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(GlassBox$composable$lambda_0(modifier_0, roundedCorners_0, borderWidth_0, borderStyle_0, borderColor_0, gradientDirection_0, startColor_0, endColor_0, blendMode_0, content, $changed, $default));
    }
  }
  function GlassBox$composable$lambda$lambda($blendMode) {
    return function ($this$styleModifier) {
      mixBlendMode($this$styleModifier, $blendMode._v);
      return Unit_getInstance();
    };
  }
  function GlassBox$composable$lambda($roundedCorners, $borderWidth, $borderStyle, $borderColor, $blendMode, $gradientDirection, $startColor, $endColor, $content) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$Box) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1494703320, $dirty, -1, 'com.rudra.kotfolio.components.widgets.GlassBox$composable.<anonymous> (GlassBox.kt:41)');
        }
        var tmp_1 = border(borderRadius(margin_0(fillMaxSize(Companion_getInstance_3()), VOID, get_cssRem(1)), $roundedCorners._v), $borderWidth._v, $borderStyle._v, $borderColor._v);
        $composer_0.startReplaceableGroup_ip860b_k$(339928416);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.changed_ga7h3f_k$($blendMode._v);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.rudra.kotfolio.components.widgets.GlassBox$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = GlassBox$composable$lambda$lambda($blendMode);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmpCache = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        var tmp_4 = backgroundImage(styleModifier(tmp_1, tmpCache), linearGradient($gradientDirection._v, $startColor._v, $endColor._v));
        Box$composable(tmp_4, null, null, null, $composer_0, 0, 14);
        $content($this$Box, $composer_0, 14 & $dirty);
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_getInstance();
        }
        tmp_0 = tmp_5;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_137($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function GlassBox$composable$lambda_0($modifier, $roundedCorners, $borderWidth, $borderStyle, $borderColor, $gradientDirection, $startColor, $endColor, $blendMode, $content, $$changed, $$default) {
    return function ($composer, $force) {
      GlassBox$composable($modifier._v, $roundedCorners._v, $borderWidth._v, $borderStyle._v, $borderColor._v, $gradientDirection._v, $startColor._v, $endColor._v, $blendMode._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function get_FooterIconsStyle() {
    _init_properties_IconButton_kt__dm2lqt();
    return FooterIconsStyle$delegate.getValue_fbnwi2_k$(null, FooterIconsStyle$factory());
  }
  var FooterIconsStyle$delegate;
  function IconButton(onClick, content) {
    _init_properties_IconButton_kt__dm2lqt();
    illegalDecoyCallException('IconButton');
  }
  function IconButtonNoHover(onClick, content) {
    _init_properties_IconButton_kt__dm2lqt();
    illegalDecoyCallException('IconButtonNoHover');
  }
  function IconButton$composable(onClick, content, $composer, $changed) {
    _init_properties_IconButton_kt__dm2lqt();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-566268348);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onClick) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-566268348, $dirty, -1, 'com.rudra.kotfolio.components.widgets.IconButton$composable (IconButton.kt:21)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(153800679);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = $composer_0.changedInstance_s1wkiy_k$(onClick);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.components.widgets.IconButton$composable.<anonymous>' call
        var value = IconButton$composable$lambda(onClick);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var tmp_1 = setVariable(Companion_getInstance_3(), ButtonVars_getInstance().get_FontSize_oos3dz_k$(), get_em(1));
      var tmp_2 = get_CircleButtonVariant().then_x4ddsu_k$(get_UncoloredButtonVariant());
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.rudra.kotfolio.components.widgets.IconButton$composable.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, 754594865, true, IconButton$composable$lambda_0(content));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid_0 ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.components.widgets.IconButton$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_138(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it_0;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Button$composable(tmpCache, tmp_1, tmp_2, null, false, null, null, null, null, tmp0, $composer_0, 805306368, 504);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(IconButton$composable$lambda_1(onClick, content, $changed));
    }
  }
  function IconButtonNoHover$composable(onClick, content, $composer, $changed) {
    _init_properties_IconButton_kt__dm2lqt();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1651205841);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onClick) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1651205841, $dirty, -1, 'com.rudra.kotfolio.components.widgets.IconButtonNoHover$composable (IconButton.kt:41)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(153801174);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = $composer_0.changedInstance_s1wkiy_k$(onClick);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.components.widgets.IconButtonNoHover$composable.<anonymous>' call
        var value = IconButtonNoHover$composable$lambda(onClick);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var tmp_1 = backgroundColor(setVariable(toModifier$composable(get_FooterIconsStyle(), [], $composer_0, 64), ButtonVars_getInstance().get_FontSize_oos3dz_k$(), get_em(1)), Colors_getInstance().get_Transparent_cxh4g9_k$());
      var tmp_2 = get_CircleButtonVariant().then_x4ddsu_k$(get_UncoloredButtonVariant());
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.rudra.kotfolio.components.widgets.IconButtonNoHover$composable.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, 417975962, true, IconButtonNoHover$composable$lambda_0(content));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid_0 ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.components.widgets.IconButtonNoHover$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_139(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it_0;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Button$composable(tmpCache, tmp_1, tmp_2, null, false, null, null, null, null, tmp0, $composer_0, 805306368, 504);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(IconButtonNoHover$composable$lambda_1(onClick, content, $changed));
    }
  }
  function FooterIconsStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_IconButton_kt__dm2lqt();
    var tmp = get_hover($this$ComponentStyle);
    tmp.invoke_ts7809_k$(FooterIconsStyle$delegate$lambda$lambda);
    return Unit_getInstance();
  }
  function FooterIconsStyle$delegate$lambda$lambda() {
    _init_properties_IconButton_kt__dm2lqt();
    return scale_0(Companion_getInstance_3(), 1.1);
  }
  function IconButton$composable$lambda($onClick) {
    return function (it) {
      $onClick();
      return Unit_getInstance();
    };
  }
  function IconButton$composable$lambda_0($content) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(754594865, $changed, -1, 'com.rudra.kotfolio.components.widgets.IconButton$composable.<anonymous> (IconButton.kt:27)');
        }
        $content($composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_138($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function IconButton$composable$lambda_1($onClick, $content, $$changed) {
    return function ($composer, $force) {
      IconButton$composable($onClick, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function IconButtonNoHover$composable$lambda($onClick) {
    return function (it) {
      $onClick();
      return Unit_getInstance();
    };
  }
  function IconButtonNoHover$composable$lambda_0($content) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(417975962, $changed, -1, 'com.rudra.kotfolio.components.widgets.IconButtonNoHover$composable.<anonymous> (IconButton.kt:48)');
        }
        $content($composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_139($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function IconButtonNoHover$composable$lambda_1($onClick, $content, $$changed) {
    return function ($composer, $force) {
      IconButtonNoHover$composable($onClick, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function FooterIconsStyle$factory() {
    return getPropertyCallableRef('FooterIconsStyle', 0, KProperty0, function () {
      return get_FooterIconsStyle();
    }, null);
  }
  var properties_initialized_IconButton_kt_ws0bv7;
  function _init_properties_IconButton_kt__dm2lqt() {
    if (!properties_initialized_IconButton_kt_ws0bv7) {
      properties_initialized_IconButton_kt_ws0bv7 = true;
      FooterIconsStyle$delegate = ComponentStyle(VOID, VOID, FooterIconsStyle$delegate$lambda);
    }
  }
  function PhotographImage(modifier, src) {
    illegalDecoyCallException('PhotographImage');
  }
  function PhotographImage$composable(modifier, src, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(294875405);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(src) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_3();
      }
      if (isTraceInProgress()) {
        traceEventStart(294875405, $dirty, -1, 'com.rudra.kotfolio.components.widgets.PhotographImage$composable (PhotographImage.kt:19)');
      }
      var tmp = padding(fillMaxWidth(Companion_getInstance_3()).then_mmfvo6_k$(modifier_0._v), get_px(6));
      var tmp_0 = Center_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.rudra.kotfolio.components.widgets.PhotographImage$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -672265469, true, PhotographImage$composable$lambda(src));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.components.widgets.PhotographImage$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_140(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Box$composable(tmp, tmp_0, null, tmp0, $composer_0, 3120, 4);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(PhotographImage$composable$lambda_0(modifier_0, src, $changed, $default));
    }
  }
  function PhotographImage$composable$lambda($src) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-672265469, $changed, -1, 'com.rudra.kotfolio.components.widgets.PhotographImage$composable.<anonymous> (PhotographImage.kt:26)');
        }
        var tmp_0 = borderRadius(fillMaxWidth(Companion_getInstance_3()), get_px(10));
        // Inline function 'org.jetbrains.compose.web.css.Companion.Block' call
        Companion_getInstance_10();
        // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_1 = fillMaxHeight(display(tmp_0, 'block'));
        Image$composable($src, tmp_1, null, null, null, null, false, null, $composer_0, 0, 252);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp = tmp_2;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_140($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function PhotographImage$composable$lambda_0($modifier, $src, $$changed, $$default) {
    return function ($composer, $force) {
      PhotographImage$composable($modifier._v, $src, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function RoundedImage(modifier, src, navigateTo) {
    illegalDecoyCallException('RoundedImage');
  }
  function ComposableLambda$invoke$ref_141($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$RoundedImageKt$lambda_1$lambda_n00on6($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$Box) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-476748808, $dirty, -1, 'com.rudra.kotfolio.components.widgets.ComposableSingletons$RoundedImageKt.lambda-1.<anonymous> (RoundedImage.kt:45)');
      }
      var tmp = Images_getInstance().get_GITHUB_FILLED_vayhh_k$();
      var tmp0_$receiver = $this$Box.align_s6rwef_k$(size(Companion_getInstance_3(), get_px(22)), BottomEnd_getInstance());
      var tmp1_bottom = get_px(10);
      var tmp2_right = get_px(10);
      var tmp_0 = margin_1(tmp0_$receiver, VOID, tmp2_right, tmp1_bottom);
      Image$composable(tmp, tmp_0, null, null, null, null, false, null, $composer_0, 6, 252);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$RoundedImageKt() {
    ComposableSingletons$RoundedImageKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_141(composableLambdaInstance(-476748808, false, ComposableSingletons$RoundedImageKt$lambda_1$lambda_n00on6));
  }
  protoOf(ComposableSingletons$RoundedImageKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$RoundedImageKt_instance;
  function ComposableSingletons$RoundedImageKt_getInstance() {
    if (ComposableSingletons$RoundedImageKt_instance == null)
      new ComposableSingletons$RoundedImageKt();
    return ComposableSingletons$RoundedImageKt_instance;
  }
  function RoundedImage$composable(modifier, src, navigateTo, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var navigateTo_0 = {_v: navigateTo};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-2016242164);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(src) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(navigateTo_0._v) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_3();
      }
      if (!(($default & 4) === 0)) {
        navigateTo_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-2016242164, $dirty, -1, 'com.rudra.kotfolio.components.widgets.RoundedImage$composable (RoundedImage.kt:19)');
      }
      var ctx = rememberPageContext$composable($composer_0, 0);
      var tmp = cursor(borderRadius(padding(fillMaxSize(Companion_getInstance_3()), get_px(5)), get_px(10)).then_mmfvo6_k$(modifier_0._v), Companion_getInstance_20().get_Pointer_m64vg4_k$());
      $composer_0.startReplaceableGroup_ip860b_k$(2137665178);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = !!($composer_0.changed_ga7h3f_k$(navigateTo_0._v) | $composer_0.changed_ga7h3f_k$(ctx));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.components.widgets.RoundedImage$composable.<anonymous>' call
        var value = RoundedImage$composable$lambda(navigateTo_0, ctx);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var tmp_2 = onClick(tmp, tmpCache);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.rudra.kotfolio.components.widgets.RoundedImage$composable.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, -1323165966, true, RoundedImage$composable$lambda_0(src));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid_0 ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.components.widgets.RoundedImage$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_142(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it_0;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Box$composable(tmp_2, null, null, tmp0, $composer_0, 3072, 6);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(RoundedImage$composable$lambda_1(modifier_0, src, navigateTo_0, $changed, $default));
    }
  }
  function RoundedImage$composable$lambda($navigateTo, $ctx) {
    return function (it) {
      var tmp0_safe_receiver = $navigateTo._v;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        $ctx.get_router_j3zccy_k$().navigateTo$default_onbd51_k$(tmp0_safe_receiver);
      }
      return Unit_getInstance();
    };
  }
  function RoundedImage$composable$lambda$lambda($this$styleModifier) {
    $this$styleModifier.property_wcrait_k$('background', 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50.52%, rgba(0, 0, 0, 0.71) 100%)');
    return Unit_getInstance();
  }
  function RoundedImage$composable$lambda_0($src) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1323165966, $changed, -1, 'com.rudra.kotfolio.components.widgets.RoundedImage$composable.<anonymous> (RoundedImage.kt:30)');
        }
        var tmp0_modifier = borderRadius(fillMaxSize(Companion_getInstance_3()), get_px(10));
        Image$composable($src, tmp0_modifier, null, null, null, null, false, null, $composer_0, 0, 252);
        var tmp_0 = borderRadius(fillMaxSize(Companion_getInstance_3()), get_px(10));
        $composer_0.startReplaceableGroup_ip860b_k$(2137665558);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.rudra.kotfolio.components.widgets.RoundedImage$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = RoundedImage$composable$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmpCache = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        var tmp_3 = styleModifier(tmp_0, tmpCache);
        Box$composable(tmp_3, null, null, ComposableSingletons$RoundedImageKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 3072, 6);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_142($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function RoundedImage$composable$lambda_1($modifier, $src, $navigateTo, $$changed, $$default) {
    return function ($composer, $force) {
      RoundedImage$composable($modifier._v, $src, $navigateTo._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function SectionTitle(sectionTitleText) {
    illegalDecoyCallException('SectionTitle');
  }
  function SectionTitle$composable(sectionTitleText, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-87326550);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(sectionTitleText) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-87326550, $dirty, -1, 'com.rudra.kotfolio.components.widgets.SectionTitle$composable (SectionTitle.kt:27)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.rudra.kotfolio.components.widgets.SectionTitle$composable.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, -746869825, true, SectionTitle$composable$lambda(sectionTitleText));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.components.widgets.SectionTitle$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_144(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Row$composable(null, null, null, null, tmp0, $composer_0, 24576, 15);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(SectionTitle$composable$lambda_0(sectionTitleText, $changed));
    }
  }
  function SectionTitle$composable$lambda$lambda($sectionTitleText, $this_Row) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1917267586, $changed, -1, 'com.rudra.kotfolio.components.widgets.SectionTitle$composable.<anonymous>.<anonymous> (SectionTitle.kt:30)');
        }
        var tmp_0 = $this_Row.align_kdfg3t_k$(toModifier$composable(get_SectionTitleStyle(), [], $composer_0, 64), Bottom_getInstance_0());
        var tmp_1;
        switch (Companion_getInstance_1().$get_current$$composable_nxoy3y_k$($composer_0, 6).get_ordinal_ip24qg_k$()) {
          case 0:
            tmp_1 = Colors_getInstance().get_Black_i7mvue_k$();
            break;
          case 1:
            tmp_1 = Colors_getInstance().get_White_ij46ow_k$();
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        var tmp_2 = fontWeight_0(color(tmp_0, tmp_1), Companion_getInstance_7().get_Bold_wnz5ke_k$());
        SpanText$composable($sectionTitleText, tmp_2, null, null, $composer_0, 0, 12);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_143($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SectionTitle$composable$lambda($sectionTitleText) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$Row) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-746869825, $dirty, -1, 'com.rudra.kotfolio.components.widgets.SectionTitle$composable.<anonymous> (SectionTitle.kt:29)');
        }
        var tmp_1 = get_SubheadlineTextStyle();
        var tmp_2 = toAttrs$composable(tmp_1, null, null, $composer_0, 0, 3);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.rudra.kotfolio.components.widgets.SectionTitle$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_3 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_3, -1917267586, true, SectionTitle$composable$lambda$lambda($sectionTitleText, $this$Row));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_4;
        if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.rudra.kotfolio.components.widgets.SectionTitle$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_143(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_4 = value;
        } else {
          tmp_4 = it;
        }
        var tmp_5 = tmp_4;
        var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Div$composable(tmp_2, tmp0, $composer_0, 48, 0);
        var tmp_6 = Images_getInstance().get_PORTAL_STAR_p3k6jo_k$();
        var tmp_7 = size($this$Row.align_kdfg3t_k$(Companion_getInstance_3(), Top_getInstance()), get_px(22));
        Image$composable(tmp_6, tmp_7, null, null, null, null, false, null, $composer_0, 6, 252);
        var tmp_8;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_8 = Unit_getInstance();
        }
        tmp_0 = tmp_8;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_144($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SectionTitle$composable$lambda_0($sectionTitleText, $$changed) {
    return function ($composer, $force) {
      SectionTitle$composable($sectionTitleText, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function WorkExperienceBlock(modifier, workExperience) {
    illegalDecoyCallException('WorkExperienceBlock');
  }
  function WorkExperienceBlock$composable(modifier, workExperience, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1398223084);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(workExperience) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_3();
      }
      if (isTraceInProgress()) {
        traceEventStart(1398223084, $dirty, -1, 'com.rudra.kotfolio.components.widgets.WorkExperienceBlock$composable (WorkExperienceBlock.kt:27)');
      }
      var tmp0_contentAlignment = Center_getInstance();
      var tmp1_modifier = margin_0(fontFamily(padding_1(fillMaxWidth(Companion_getInstance_3()), VOID, get_cssRem(0.5)), [Fonts_getInstance().get_DM_SANS_s5xtnk_k$()]), VOID, get_cssRem(0.5)).then_mmfvo6_k$(modifier_0._v);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.rudra.kotfolio.components.widgets.WorkExperienceBlock$composable.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 83388179, true, WorkExperienceBlock$composable$lambda(workExperience));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.rudra.kotfolio.components.widgets.WorkExperienceBlock$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_146(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Box$composable(tmp1_modifier, tmp0_contentAlignment, null, tmp0, $composer_0, 3120, 4);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(WorkExperienceBlock$composable$lambda_0(modifier_0, workExperience, $changed, $default));
    }
  }
  function WorkExperienceBlock$composable$lambda$lambda($workExperience) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1242349188, $changed, -1, 'com.rudra.kotfolio.components.widgets.WorkExperienceBlock$composable.<anonymous>.<anonymous> (WorkExperienceBlock.kt:49)');
        }
        var tmp_0 = $workExperience.get_role_wotsxr_k$();
        var tmp_1 = fillMaxWidth(toModifier$composable(get_WorkExperienceItemRoleAndDurationStyle(), [], $composer_0, 64));
        var tmp_2;
        switch (Companion_getInstance_1().$get_current$$composable_nxoy3y_k$($composer_0, 6).get_ordinal_ip24qg_k$()) {
          case 0:
            tmp_2 = Colors_getInstance().get_Gray_wo2eh8_k$();
            break;
          case 1:
            tmp_2 = Colors_getInstance().get_DimGray_ep5xby_k$();
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        var tmp_3 = fontWeight_0(color(tmp_1, tmp_2), Companion_getInstance_7().get_Bold_wnz5ke_k$());
        SpanText$composable(tmp_0, tmp_3, null, null, $composer_0, 0, 12);
        var tmp_4 = $workExperience.get_organization_o1gozg_k$();
        var tmp_5 = fillMaxWidth(toModifier$composable(get_WorkExperienceItemOrgStyle(), [], $composer_0, 64));
        var tmp_6;
        switch (Companion_getInstance_1().$get_current$$composable_nxoy3y_k$($composer_0, 6).get_ordinal_ip24qg_k$()) {
          case 0:
            tmp_6 = Colors_getInstance().get_Black_i7mvue_k$();
            break;
          case 1:
            tmp_6 = Colors_getInstance().get_White_ij46ow_k$();
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        var tmp_7 = fontWeight_0(fontFamily(color(tmp_5, tmp_6), [Fonts_getInstance().get_Space_Grotesk_4r9ux7_k$()]), Companion_getInstance_7().get_Bold_wnz5ke_k$());
        SpanText$composable(tmp_4, tmp_7, null, null, $composer_0, 0, 12);
        var tmp_8 = $workExperience.get_duration_6a6kpp_k$();
        var tmp_9 = fillMaxWidth(toModifier$composable(get_WorkExperienceItemRoleAndDurationStyle(), [], $composer_0, 64));
        var tmp_10;
        switch (Companion_getInstance_1().$get_current$$composable_nxoy3y_k$($composer_0, 6).get_ordinal_ip24qg_k$()) {
          case 0:
            tmp_10 = Colors_getInstance().get_Gray_wo2eh8_k$();
            break;
          case 1:
            tmp_10 = Colors_getInstance().get_DimGray_ep5xby_k$();
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        var tmp_11 = fontWeight_0(color(tmp_9, tmp_10), Companion_getInstance_7().get_Bold_wnz5ke_k$());
        SpanText$composable(tmp_8, tmp_11, null, null, $composer_0, 0, 12);
        var tmp_12;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_12 = Unit_getInstance();
        }
        tmp = tmp_12;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_145($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function WorkExperienceBlock$composable$lambda($workExperience) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$Box) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(83388179, $dirty, -1, 'com.rudra.kotfolio.components.widgets.WorkExperienceBlock$composable.<anonymous> (WorkExperienceBlock.kt:33)');
        }
        var tmp_1 = padding_1(fillMaxWidth(Companion_getInstance_3()), VOID, get_cssRem(0.5));
        var tmp_2 = get_px(1);
        // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
        Companion_getInstance_11();
        // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_3 = 'solid';
        var tmp_4;
        switch (Companion_getInstance_1().$get_current$$composable_nxoy3y_k$($composer_0, 6).get_ordinal_ip24qg_k$()) {
          case 0:
            tmp_4 = Colors_getInstance().get_Gray_wo2eh8_k$();
            break;
          case 1:
            tmp_4 = Colors_getInstance().get_DimGray_ep5xby_k$();
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        var tmp1_$receiver = margin(borderRadius(border(tmp_1, tmp_2, tmp_3, tmp_4), get_px(10)), get_cssRem(2));
        var tmp2_top = get_px(30);
        var tmp3_bottom = get_px(24);
        var tmp4_leftRight = get_px(24);
        var tmp_5 = padding_0(tmp1_$receiver, tmp2_top, tmp4_leftRight, tmp3_bottom);
        var tmp_6 = Center_getInstance_0();
        var tmp_7 = Start_getInstance();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.rudra.kotfolio.components.widgets.WorkExperienceBlock$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_8 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_8, -1242349188, true, WorkExperienceBlock$composable$lambda$lambda($workExperience));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_9;
        if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.rudra.kotfolio.components.widgets.WorkExperienceBlock$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_145(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_9 = value;
        } else {
          tmp_9 = it;
        }
        var tmp_10 = tmp_9;
        var tmp0 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Column$composable(tmp_5, tmp_6, tmp_7, null, tmp0, $composer_0, 25008, 8);
        var tmp_11 = $workExperience.get_sequenceNumber_ayu2k3_k$();
        var tmp_12 = fontSize(Companion_getInstance_3(), get_cssRem(3));
        var tmp_13;
        switch (Companion_getInstance_1().$get_current$$composable_nxoy3y_k$($composer_0, 6).get_ordinal_ip24qg_k$()) {
          case 0:
            tmp_13 = Colors_getInstance().get_Black_i7mvue_k$();
            break;
          case 1:
            tmp_13 = Colors_getInstance().get_White_ij46ow_k$();
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        var tmp_14 = fontFamily(fontWeight_0($this$Box.align_s6rwef_k$(margin_1(color(tmp_12, tmp_13), VOID, VOID, VOID, get_cssRem(2)), TopStart_getInstance()), Companion_getInstance_7().get_Bold_wnz5ke_k$()), [Fonts_getInstance().get_Space_Grotesk_4r9ux7_k$()]);
        SpanText$composable(tmp_11, tmp_14, null, null, $composer_0, 0, 12);
        var tmp_15;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_15 = Unit_getInstance();
        }
        tmp_0 = tmp_15;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_146($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function WorkExperienceBlock$composable$lambda_0($modifier, $workExperience, $$changed, $$default) {
    return function ($composer, $force) {
      WorkExperienceBlock$composable($modifier._v, $workExperience, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function HomePage() {
    illegalDecoyCallException('HomePage');
  }
  function ComposableLambda$invoke$ref_147($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_1$lambda_5yb608($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(377972423, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$IndexKt.lambda-1.<anonymous> (Index.kt:26)');
      }
      Home$composable($composer_0, 0);
      About$composable($composer_0, 0);
      Experience$composable($composer_0, 0);
      SkillsAndTools$composable($composer_0, 0);
      Projects$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_148($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_2$lambda_yrxn2f($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1367197936, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$IndexKt.lambda-2.<anonymous> (Index.kt:24)');
      }
      Column$composable(null, null, null, null, ComposableSingletons$IndexKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 24576, 15);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_149($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_3$lambda_7fjxui($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1756297610, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$IndexKt.lambda-3.<anonymous> (Index.kt:22)');
      }
      Box$composable(null, null, null, ComposableSingletons$IndexKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 3072, 7);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_150($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_4$lambda_le2j7p($this$PageLayout, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-2090261689, $changed, -1, 'com.rudra.kotfolio.pages.ComposableSingletons$IndexKt.lambda-4.<anonymous> (Index.kt:19)');
      }
      var tmp = id(fontFamily(fillMaxWidth(Companion_getInstance_3()), [Fonts_getInstance().get_Space_Grotesk_4r9ux7_k$()]), 'home');
      Row$composable(tmp, null, null, null, ComposableSingletons$IndexKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 24576, 14);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$IndexKt() {
    ComposableSingletons$IndexKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_147(composableLambdaInstance(377972423, false, ComposableSingletons$IndexKt$lambda_1$lambda_5yb608));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_148(composableLambdaInstance(-1367197936, false, ComposableSingletons$IndexKt$lambda_2$lambda_yrxn2f));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_149(composableLambdaInstance(1756297610, false, ComposableSingletons$IndexKt$lambda_3$lambda_7fjxui));
    var tmp_2 = this;
    tmp_2.lambda_4_r8sbbm_1 = ComposableLambda$invoke$ref_150(composableLambdaInstance(-2090261689, false, ComposableSingletons$IndexKt$lambda_4$lambda_le2j7p));
  }
  protoOf(ComposableSingletons$IndexKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$IndexKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$IndexKt).get_lambda_3_bzdzzq_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  protoOf(ComposableSingletons$IndexKt).get_lambda_4_bzdzzr_k$ = function () {
    return this.lambda_4_r8sbbm_1;
  };
  var ComposableSingletons$IndexKt_instance;
  function ComposableSingletons$IndexKt_getInstance() {
    if (ComposableSingletons$IndexKt_instance == null)
      new ComposableSingletons$IndexKt();
    return ComposableSingletons$IndexKt_instance;
  }
  function HomePage$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(965691010);
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(965691010, $changed, -1, 'com.rudra.kotfolio.pages.HomePage$composable (Index.kt:17)');
      }
      PageLayout$composable('Home', ComposableSingletons$IndexKt_getInstance().lambda_4_r8sbbm_1, $composer_0, 54);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(HomePage$composable$lambda($changed));
    }
  }
  function HomePage$composable$lambda($$changed) {
    return function ($composer, $force) {
      HomePage$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function get_$stableprop_3() {
    return 0;
  }
  function Constants() {
    Constants_instance = this;
    this.RESUME_URL_1 = 'https://drive.google.com/file/d/1NVW38k52Gf5i4tpO4v2BnHfBNcAuJSs_/view?usp=sharing';
    this.LINKEDIN_URL_1 = 'https://www.linkedin.com/in/rudradave/';
    this.GITHUB_URL_1 = 'https://github.com/rudradave1';
    this.TWITTER_URL_1 = 'https://twitter.com/RudraKDave';
    this.MEDIUM_URL_1 = 'https://medium.com/@rudradave';
    this.MAIL_TO_1 = 'mailto:rudramordan@gmail.com';
    this.PROJECT_READBUD_URL_1 = 'https://github.com/rudradave1/TriviaApp';
    this.PROJECT_JUSTAP_URL_1 = 'https://github.com/rudradave1/Fhotos';
    this.PROJECT_MEDIFY_URL_1 = 'https://github.com/rudradave1/DefineEasy';
    this.PROJECT_PASSGENIE_URL_1 = 'https://github.com/rudradave1/TriviaApp';
    this.PROJECT_PRESIN_URL_1 = 'https://github.com/rudradave1/OpenWeatherApp';
    this.HELLO_IM_1 = "Hello I'm";
    this.RUDRA_DAVE_1 = 'Rudra Dave';
    this.AND_NICE_TO_MEET_YOU_1 = 'and Nice to meet you!';
    this.RESUME_1 = 'Resume';
    this.ABOUT_ME_TEXT_1 = "With four years of experience, Rudra is a proficient Android developer, adept in Java/Kotlin and the Android ecosystem. Committed to continual improvement, he stays updated with the latest developments to enhance user experiences. Rudra's attention to detail ensures his apps stand out with seamless functionality and user satisfaction.";
    this.ABOUT_ME_TITLE_1 = 'About me.';
    this.EXPERIENCE_TITLE_1 = 'Work Experience.';
    this.EXPERIENCE_SECTION_TEXT_1 = 'I\u2019m a Software Developer Engineer, specializing in Android app Development with ';
    this.EXPERIENCE_1 = '4 years';
    this.OF_EXPERIENCE_1 = ' of Experience.';
    this.SKILLS_AND_TOOLS_TITLE_1 = 'Skills & Tools.';
    this.PROJECT_TITLE_1 = 'My Side Projects.';
    this.PROJECT_SECTION_TEXT_1 = 'I really have a bad habit of creating projects over projects XD';
    this.PROJECT_REPOSITORIES_URL_1 = 'https://github.com/rudradave1?tab=repositories';
    this.MORE_ON_GITHUB_1 = 'More on GitHub.';
    this.$stable_1 = 0;
  }
  protoOf(Constants).get_RESUME_URL_lcc8ca_k$ = function () {
    return this.RESUME_URL_1;
  };
  protoOf(Constants).get_LINKEDIN_URL_g9prkn_k$ = function () {
    return this.LINKEDIN_URL_1;
  };
  protoOf(Constants).get_GITHUB_URL_kptwn0_k$ = function () {
    return this.GITHUB_URL_1;
  };
  protoOf(Constants).get_TWITTER_URL_j9qsxm_k$ = function () {
    return this.TWITTER_URL_1;
  };
  protoOf(Constants).get_MEDIUM_URL_tmawpa_k$ = function () {
    return this.MEDIUM_URL_1;
  };
  protoOf(Constants).get_MAIL_TO_qvrw2i_k$ = function () {
    return this.MAIL_TO_1;
  };
  protoOf(Constants).get_PROJECT_READBUD_URL_pvxizg_k$ = function () {
    return this.PROJECT_READBUD_URL_1;
  };
  protoOf(Constants).get_PROJECT_JUSTAP_URL_pz6jba_k$ = function () {
    return this.PROJECT_JUSTAP_URL_1;
  };
  protoOf(Constants).get_PROJECT_MEDIFY_URL_6opy5t_k$ = function () {
    return this.PROJECT_MEDIFY_URL_1;
  };
  protoOf(Constants).get_PROJECT_PASSGENIE_URL_p0ngfw_k$ = function () {
    return this.PROJECT_PASSGENIE_URL_1;
  };
  protoOf(Constants).get_PROJECT_PRESIN_URL_f35ix8_k$ = function () {
    return this.PROJECT_PRESIN_URL_1;
  };
  protoOf(Constants).get_HELLO_IM_vywciu_k$ = function () {
    return this.HELLO_IM_1;
  };
  protoOf(Constants).get_RUDRA_DAVE_d55res_k$ = function () {
    return this.RUDRA_DAVE_1;
  };
  protoOf(Constants).get_AND_NICE_TO_MEET_YOU_gcoa86_k$ = function () {
    return this.AND_NICE_TO_MEET_YOU_1;
  };
  protoOf(Constants).get_RESUME_3atpo6_k$ = function () {
    return this.RESUME_1;
  };
  protoOf(Constants).get_ABOUT_ME_TEXT_chvvqx_k$ = function () {
    return this.ABOUT_ME_TEXT_1;
  };
  protoOf(Constants).get_ABOUT_ME_TITLE_w8yj58_k$ = function () {
    return this.ABOUT_ME_TITLE_1;
  };
  protoOf(Constants).get_EXPERIENCE_TITLE_4l8dg4_k$ = function () {
    return this.EXPERIENCE_TITLE_1;
  };
  protoOf(Constants).get_EXPERIENCE_SECTION_TEXT_cwto0d_k$ = function () {
    return this.EXPERIENCE_SECTION_TEXT_1;
  };
  protoOf(Constants).get_EXPERIENCE_dkduz1_k$ = function () {
    return this.EXPERIENCE_1;
  };
  protoOf(Constants).get_OF_EXPERIENCE_2l08fd_k$ = function () {
    return this.OF_EXPERIENCE_1;
  };
  protoOf(Constants).get_SKILLS_AND_TOOLS_TITLE_j303wo_k$ = function () {
    return this.SKILLS_AND_TOOLS_TITLE_1;
  };
  protoOf(Constants).get_PROJECT_TITLE_l2i6k7_k$ = function () {
    return this.PROJECT_TITLE_1;
  };
  protoOf(Constants).get_PROJECT_SECTION_TEXT_c3od2u_k$ = function () {
    return this.PROJECT_SECTION_TEXT_1;
  };
  protoOf(Constants).get_PROJECT_REPOSITORIES_URL_8f6wxz_k$ = function () {
    return this.PROJECT_REPOSITORIES_URL_1;
  };
  protoOf(Constants).get_MORE_ON_GITHUB_fcq2am_k$ = function () {
    return this.MORE_ON_GITHUB_1;
  };
  var Constants_instance;
  function Constants_getInstance() {
    if (Constants_instance == null)
      new Constants();
    return Constants_instance;
  }
  function get_$stableprop_4() {
    return 8;
  }
  function CustomColorSchemes$BlackAndWhite$1() {
    this._50__1 = Companion_getInstance_6().rgb_6orfmz_k$(16777215);
    this._100__1 = Companion_getInstance_6().rgb_6orfmz_k$(16777215);
    this._200__1 = Companion_getInstance_6().rgb_6orfmz_k$(16777215);
    this._300__1 = Companion_getInstance_6().rgb_6orfmz_k$(16777215);
    this._400__1 = Companion_getInstance_6().rgb_6orfmz_k$(16777215);
    this._500__1 = Companion_getInstance_6().rgb_6orfmz_k$(0);
    this._600__1 = Companion_getInstance_6().rgb_6orfmz_k$(0);
    this._700__1 = Companion_getInstance_6().rgb_6orfmz_k$(0);
    this._800__1 = Companion_getInstance_6().rgb_6orfmz_k$(0);
    this._900__1 = Companion_getInstance_6().rgb_6orfmz_k$(0);
  }
  protoOf(CustomColorSchemes$BlackAndWhite$1).get__50_18jcbz_k$ = function () {
    return this._50__1;
  };
  protoOf(CustomColorSchemes$BlackAndWhite$1).get__100_wogcqj_k$ = function () {
    return this._100__1;
  };
  protoOf(CustomColorSchemes$BlackAndWhite$1).get__200_wogdh8_k$ = function () {
    return this._200__1;
  };
  protoOf(CustomColorSchemes$BlackAndWhite$1).get__300_woge7x_k$ = function () {
    return this._300__1;
  };
  protoOf(CustomColorSchemes$BlackAndWhite$1).get__400_wogeym_k$ = function () {
    return this._400__1;
  };
  protoOf(CustomColorSchemes$BlackAndWhite$1).get__500_wogfpb_k$ = function () {
    return this._500__1;
  };
  protoOf(CustomColorSchemes$BlackAndWhite$1).get__600_woggg0_k$ = function () {
    return this._600__1;
  };
  protoOf(CustomColorSchemes$BlackAndWhite$1).get__700_wogh6p_k$ = function () {
    return this._700__1;
  };
  protoOf(CustomColorSchemes$BlackAndWhite$1).get__800_woghxe_k$ = function () {
    return this._800__1;
  };
  protoOf(CustomColorSchemes$BlackAndWhite$1).get__900_wogio3_k$ = function () {
    return this._900__1;
  };
  function CustomColorSchemes() {
    CustomColorSchemes_instance = this;
    var tmp = this;
    tmp.BlackAndWhite_1 = new CustomColorSchemes$BlackAndWhite$1();
    this.$stable_1 = 8;
  }
  protoOf(CustomColorSchemes).get_BlackAndWhite_qa7re0_k$ = function () {
    return this.BlackAndWhite_1;
  };
  var CustomColorSchemes_instance;
  function CustomColorSchemes_getInstance() {
    if (CustomColorSchemes_instance == null)
      new CustomColorSchemes();
    return CustomColorSchemes_instance;
  }
  function getAllProjects() {
    return listOf([new Pair(Images_getInstance().get_PROJECT_READBUD_zfaaj0_k$(), Constants_getInstance().get_PROJECT_READBUD_URL_pvxizg_k$()), new Pair(Images_getInstance().get_PROJECT_JUSTAP_ifibiu_k$(), Constants_getInstance().get_PROJECT_JUSTAP_URL_pz6jba_k$()), new Pair(Images_getInstance().get_PROJECT_PASSGENIE_m0h6r0_k$(), Constants_getInstance().get_PROJECT_PASSGENIE_URL_p0ngfw_k$()), new Pair(Images_getInstance().get_PROJECT_MEDIFY_h9fyo1_k$(), Constants_getInstance().get_PROJECT_MEDIFY_URL_6opy5t_k$()), new Pair(Images_getInstance().get_PROJECT_PRESIN_fn4xb0_k$(), Constants_getInstance().get_PROJECT_PRESIN_URL_f35ix8_k$())]);
  }
  function getAllWorkExperience() {
    return listOf([new WorkExperience('01', 'Software Developer - Android', 'Encender Technologies', 'Mar 2020 - Aug 2021'), new WorkExperience('02', 'Software Engineer', 'Capgemini', 'Sep 2021 - Apr 2022'), new WorkExperience('03', 'Android Developer', 'Yore', 'Apr 2022 - Present')]);
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
  function Images() {
    Images_instance = this;
    this.BACKGROUND_CIRCLES_1 = 'images/background_circles.svg';
    this.PORTAL_STAR_1 = 'images/portal_star.svg';
    this.NAVIGATION_ARROW_1 = 'images/Navigation_Arrow.svg';
    this.CUSTOM_CURSOR_DARK_1 = 'images/Custom_Cursor_Dark.svg';
    this.CUSTOM_CURSOR_LIGHT_1 = 'images/Custom_Cursor_Light.svg';
    this.ANDROID_LOGO_1 = 'images/Tools/Android.svg';
    this.FIGMA_LOGO_1 = 'images/Tools/Figma.svg';
    this.FIREBASE_LOGO_1 = 'images/Tools/Firebase.svg';
    this.GIT_LOGO_1 = 'images/Tools/Git.svg';
    this.INTELLIJ_LOGO_1 = 'images/Tools/IntelliJ.svg';
    this.MONGODB_LOGO_1 = 'images/Tools/MongoDB.svg';
    this.POSTMAN_LOGO_1 = 'images/Tools/Postman.svg';
    this.VSCODE_LOGO_1 = 'images/Tools/VSCode.svg';
    this.DOCKER_LOGO_1 = 'images/Tools/dockerlogo.png';
    this.CSS_LOGO_1 = 'images/Skills/CSS.svg';
    this.HTML_LOGO_1 = 'images/Skills/HTML.svg';
    this.JAVA_LOGO_1 = 'images/Skills/Java.svg';
    this.JAVASCRIPT_LOGO_1 = 'images/Skills/Javascript.svg';
    this.KOTLIN_LOGO_1 = 'images/Skills/Kotlin.svg';
    this.GITHUB_1 = 'images/Socials/github.svg';
    this.GITHUB_FILLED_1 = 'images/Socials/github-filled.svg';
    this.LINKEDIN_1 = 'images/Socials/linkedin.svg';
    this.MEDIUM_1 = 'images/Socials/medium.svg';
    this.TWITTER_X_1 = 'images/Socials/twitter-x.svg';
    this.PROJECT_JUSTAP_1 = 'images/Projects/defineEasy.png';
    this.PROJECT_MEDIFY_1 = 'images/Projects/defineEasy.png';
    this.PROJECT_PASSGENIE_1 = 'images/Projects/defineEasy.png';
    this.PROJECT_PRESIN_1 = 'images/Projects/defineEasy.png';
    this.PROJECT_READBUD_1 = 'images/Projects/defineEasy.png';
    this.$stable_1 = 0;
  }
  protoOf(Images).get_BACKGROUND_CIRCLES_wnx88r_k$ = function () {
    return this.BACKGROUND_CIRCLES_1;
  };
  protoOf(Images).get_PORTAL_STAR_p3k6jo_k$ = function () {
    return this.PORTAL_STAR_1;
  };
  protoOf(Images).get_NAVIGATION_ARROW_1yodh5_k$ = function () {
    return this.NAVIGATION_ARROW_1;
  };
  protoOf(Images).get_CUSTOM_CURSOR_DARK_o6hksm_k$ = function () {
    return this.CUSTOM_CURSOR_DARK_1;
  };
  protoOf(Images).get_CUSTOM_CURSOR_LIGHT_vvmxki_k$ = function () {
    return this.CUSTOM_CURSOR_LIGHT_1;
  };
  protoOf(Images).get_ANDROID_LOGO_qy9g4k_k$ = function () {
    return this.ANDROID_LOGO_1;
  };
  protoOf(Images).get_FIGMA_LOGO_295bhh_k$ = function () {
    return this.FIGMA_LOGO_1;
  };
  protoOf(Images).get_FIREBASE_LOGO_bktfi2_k$ = function () {
    return this.FIREBASE_LOGO_1;
  };
  protoOf(Images).get_GIT_LOGO_1zt4v5_k$ = function () {
    return this.GIT_LOGO_1;
  };
  protoOf(Images).get_INTELLIJ_LOGO_z2nkju_k$ = function () {
    return this.INTELLIJ_LOGO_1;
  };
  protoOf(Images).get_MONGODB_LOGO_vqgkw1_k$ = function () {
    return this.MONGODB_LOGO_1;
  };
  protoOf(Images).get_POSTMAN_LOGO_yigl15_k$ = function () {
    return this.POSTMAN_LOGO_1;
  };
  protoOf(Images).get_VSCODE_LOGO_dhmoy1_k$ = function () {
    return this.VSCODE_LOGO_1;
  };
  protoOf(Images).get_DOCKER_LOGO_dsml8h_k$ = function () {
    return this.DOCKER_LOGO_1;
  };
  protoOf(Images).get_CSS_LOGO_x08ggg_k$ = function () {
    return this.CSS_LOGO_1;
  };
  protoOf(Images).get_HTML_LOGO_og9qty_k$ = function () {
    return this.HTML_LOGO_1;
  };
  protoOf(Images).get_JAVA_LOGO_tw29dt_k$ = function () {
    return this.JAVA_LOGO_1;
  };
  protoOf(Images).get_JAVASCRIPT_LOGO_s33sk4_k$ = function () {
    return this.JAVASCRIPT_LOGO_1;
  };
  protoOf(Images).get_KOTLIN_LOGO_miri68_k$ = function () {
    return this.KOTLIN_LOGO_1;
  };
  protoOf(Images).get_GITHUB_1ugkr8_k$ = function () {
    return this.GITHUB_1;
  };
  protoOf(Images).get_GITHUB_FILLED_vayhh_k$ = function () {
    return this.GITHUB_FILLED_1;
  };
  protoOf(Images).get_LINKEDIN_wb2yv_k$ = function () {
    return this.LINKEDIN_1;
  };
  protoOf(Images).get_MEDIUM_xbs72_k$ = function () {
    return this.MEDIUM_1;
  };
  protoOf(Images).get_TWITTER_X_ir55x9_k$ = function () {
    return this.TWITTER_X_1;
  };
  protoOf(Images).get_PROJECT_JUSTAP_ifibiu_k$ = function () {
    return this.PROJECT_JUSTAP_1;
  };
  protoOf(Images).get_PROJECT_MEDIFY_h9fyo1_k$ = function () {
    return this.PROJECT_MEDIFY_1;
  };
  protoOf(Images).get_PROJECT_PASSGENIE_m0h6r0_k$ = function () {
    return this.PROJECT_PASSGENIE_1;
  };
  protoOf(Images).get_PROJECT_PRESIN_fn4xb0_k$ = function () {
    return this.PROJECT_PRESIN_1;
  };
  protoOf(Images).get_PROJECT_READBUD_zfaaj0_k$ = function () {
    return this.PROJECT_READBUD_1;
  };
  var Images_instance;
  function Images_getInstance() {
    if (Images_instance == null)
      new Images();
    return Images_instance;
  }
  function Fonts() {
    Fonts_instance = this;
    this.Space_Grotesk_1 = 'Space Grotesk';
    this.Tauri_1 = 'Tauri';
    this.DM_SANS_1 = 'DM Sans';
    this.$stable_1 = 0;
  }
  protoOf(Fonts).get_Space_Grotesk_4r9ux7_k$ = function () {
    return this.Space_Grotesk_1;
  };
  protoOf(Fonts).get_Tauri_ihckuu_k$ = function () {
    return this.Tauri_1;
  };
  protoOf(Fonts).get_DM_SANS_s5xtnk_k$ = function () {
    return this.DM_SANS_1;
  };
  var Fonts_instance;
  function Fonts_getInstance() {
    if (Fonts_instance == null)
      new Fonts();
    return Fonts_instance;
  }
  function Colors() {
    Colors_instance = this;
    this.FOOTER_COLOR_LIGHT_1 = Companion_getInstance_6().rgb_6orfmz_k$(15856113);
    this.FOOTER_COLOR_DARK_1 = Companion_getInstance_6().rgb_6orfmz_k$(855309);
    this.GLASS_BOX_BORDER_COLOR_LIGHT_1 = Companion_getInstance_6().rgb_6orfmz_k$(15329769);
    this.GLASS_BOX_BORDER_COLOR_DARK_1 = Companion_getInstance_6().rgb_6orfmz_k$(5131854);
    this.DARK_GRAY_TEXT_COLOR_1 = Companion_getInstance_6().rgb_6orfmz_k$(8092539);
    this.$stable_1 = 0;
  }
  protoOf(Colors).get_FOOTER_COLOR_LIGHT_in8bmn_k$ = function () {
    return this.FOOTER_COLOR_LIGHT_1;
  };
  protoOf(Colors).get_FOOTER_COLOR_DARK_xrt0ur_k$ = function () {
    return this.FOOTER_COLOR_DARK_1;
  };
  protoOf(Colors).get_GLASS_BOX_BORDER_COLOR_LIGHT_t1jwnb_k$ = function () {
    return this.GLASS_BOX_BORDER_COLOR_LIGHT_1;
  };
  protoOf(Colors).get_GLASS_BOX_BORDER_COLOR_DARK_upx2rp_k$ = function () {
    return this.GLASS_BOX_BORDER_COLOR_DARK_1;
  };
  protoOf(Colors).get_DARK_GRAY_TEXT_COLOR_4ja7oz_k$ = function () {
    return this.DARK_GRAY_TEXT_COLOR_1;
  };
  var Colors_instance;
  function Colors_getInstance_0() {
    if (Colors_instance == null)
      new Colors();
    return Colors_instance;
  }
  function get_$stableprop_8() {
    return 0;
  }
  function Res() {
    Res_instance = this;
    this.$stable_1 = 0;
  }
  var Res_instance;
  function Res_getInstance() {
    if (Res_instance == null)
      new Res();
    return Res_instance;
  }
  //region block: init
  COLOR_MODE_KEY = 'kotfolio:colorMode';
  //endregion
  main();
  return _;
}));

//# sourceMappingURL=kotfolio.js.map
