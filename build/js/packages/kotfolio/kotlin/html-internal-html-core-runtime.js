(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-runtime.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-runtime.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'html-internal-html-core-runtime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'html-internal-html-core-runtime'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-internal-html-core-runtime'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'html-internal-html-core-runtime'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'html-internal-html-core-runtime'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'html-internal-html-core-runtime'.");
    }
    root['html-internal-html-core-runtime'] = factory(typeof this['html-internal-html-core-runtime'] === 'undefined' ? {} : this['html-internal-html-core-runtime'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-runtime'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.i6;
  var Unit_instance = kotlin_kotlin.$_$.y1;
  var ensureNotNull = kotlin_kotlin.$_$.p8;
  var classMeta = kotlin_kotlin.$_$.n5;
  var setMetadataFor = kotlin_kotlin.$_$.j6;
  var AbstractApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var THROW_CCE = kotlin_kotlin.$_$.i8;
  var VOID = kotlin_kotlin.$_$.c;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var Companion_instance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var CoroutineImpl = kotlin_kotlin.$_$.d5;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var isInterface = kotlin_kotlin.$_$.b6;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.g;
  var objectMeta = kotlin_kotlin.$_$.h6;
  var CoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var get_DefaultMonotonicFrameClock = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var Recomposer = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var ControlledComposition = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.p4;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  //endregion
  //region block: pre-declaration
  setMetadataFor(DomNodeWrapper, 'DomNodeWrapper', classMeta);
  setMetadataFor(DomApplier, 'DomApplier', classMeta, AbstractApplier);
  setMetadataFor(GlobalSnapshotManager$schedule$slambda, 'GlobalSnapshotManager$schedule$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(GlobalSnapshotManager, 'GlobalSnapshotManager', objectMeta);
  setMetadataFor(JsMicrotasksDispatcher, 'JsMicrotasksDispatcher', classMeta, CoroutineDispatcher, VOID, JsMicrotasksDispatcher);
  setMetadataFor(renderComposable$composable$slambda, 'renderComposable$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(renderComposable$composable$scope$1, VOID, classMeta);
  //endregion
  function DomNodeWrapper(node) {
    this.u1t_1 = node;
    this.v1t_1 = 0;
  }
  protoOf(DomNodeWrapper).w1t = function () {
    return this.u1t_1;
  };
  protoOf(DomNodeWrapper).x1t = function (index, nodeWrapper) {
    var length = this.w1t().childNodes.length;
    if (index < length) {
      var tmp = this.w1t();
      var tmp_0 = nodeWrapper.w1t();
      // Inline function 'org.w3c.dom.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = this.w1t().childNodes[index];
      tmp.insertBefore(tmp_0, ensureNotNull(tmp$ret$1));
    } else {
      this.w1t().appendChild(nodeWrapper.w1t());
    }
  };
  protoOf(DomNodeWrapper).as = function (index, count) {
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.jetbrains.compose.web.internal.runtime.DomNodeWrapper.remove.<anonymous>' call
        var tmp = this.w1t();
        // Inline function 'org.w3c.dom.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = this.w1t().childNodes[index];
        tmp.removeChild(ensureNotNull(tmp$ret$1));
      }
       while (inductionVariable < count);
  };
  protoOf(DomNodeWrapper).bs = function (from, to, count) {
    if (from === to) {
      return Unit_instance;
    }
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var fromIndex = from > to ? from + i | 0 : from;
        var toIndex = from > to ? to + i | 0 : (to + count | 0) - 2 | 0;
        var tmp = this.w1t();
        // Inline function 'org.w3c.dom.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = this.w1t().childNodes[fromIndex];
        var child = tmp.removeChild(ensureNotNull(tmp$ret$1));
        var tmp_0 = this.w1t();
        // Inline function 'org.w3c.dom.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$3 = this.w1t().childNodes[toIndex];
        tmp_0.insertBefore(child, ensureNotNull(tmp$ret$3));
      }
       while (inductionVariable < count);
  };
  function DomApplier(root) {
    AbstractApplier.call(this, root);
    this.c1u_1 = 0;
  }
  protoOf(DomApplier).d1u = function (index, instance) {
  };
  protoOf(DomApplier).yr = function (index, instance) {
    return this.d1u(index, instance instanceof DomNodeWrapper ? instance : THROW_CCE());
  };
  protoOf(DomApplier).e1u = function (index, instance) {
    this.tr().x1t(index, instance);
  };
  protoOf(DomApplier).zr = function (index, instance) {
    return this.e1u(index, instance instanceof DomNodeWrapper ? instance : THROW_CCE());
  };
  protoOf(DomApplier).as = function (index, count) {
    this.tr().as(index, count);
  };
  protoOf(DomApplier).bs = function (from, to, count) {
    this.tr().bs(from, to, count);
  };
  function synchronize($this) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = $this.k1u_1.l();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'org.jetbrains.compose.web.internal.runtime.GlobalSnapshotManager.synchronize.<anonymous>' call
      element();
    }
    $this.k1u_1.b1();
    $this.l1u_1 = false;
  }
  function schedule($this, block) {
    $this.k1u_1.u(block);
    if (!$this.l1u_1) {
      $this.l1u_1 = true;
      launch($this.i1u_1, VOID, VOID, GlobalSnapshotManager$schedule$slambda_0(null));
    }
  }
  function GlobalSnapshotManager$globalWriteObserver$lambda(it) {
    if (!GlobalSnapshotManager_getInstance().g1u_1) {
      GlobalSnapshotManager_getInstance().g1u_1 = true;
      var tmp = GlobalSnapshotManager_getInstance();
      schedule(tmp, GlobalSnapshotManager$globalWriteObserver$lambda$lambda);
    }
    return Unit_instance;
  }
  function GlobalSnapshotManager$globalWriteObserver$lambda$lambda() {
    GlobalSnapshotManager_getInstance().g1u_1 = false;
    Companion_instance.x1c();
    return Unit_instance;
  }
  function GlobalSnapshotManager$schedule$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GlobalSnapshotManager$schedule$slambda).k1b = function ($this$launch, $completion) {
    var tmp = this.l1b($this$launch, $completion);
    tmp.sb_1 = Unit_instance;
    tmp.tb_1 = null;
    return tmp.cc();
  };
  protoOf(GlobalSnapshotManager$schedule$slambda).oc = function (p1, $completion) {
    return this.k1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GlobalSnapshotManager$schedule$slambda).cc = function () {
    var suspendResult = this.sb_1;
    $sm: do
      try {
        var tmp = this.qb_1;
        if (tmp === 0) {
          this.rb_1 = 1;
          synchronize(GlobalSnapshotManager_getInstance());
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
  protoOf(GlobalSnapshotManager$schedule$slambda).l1b = function ($this$launch, completion) {
    var i = new GlobalSnapshotManager$schedule$slambda(completion);
    i.v1u_1 = $this$launch;
    return i;
  };
  function GlobalSnapshotManager$schedule$slambda_0(resultContinuation) {
    var i = new GlobalSnapshotManager$schedule$slambda(resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.k1b($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function GlobalSnapshotManager() {
    GlobalSnapshotManager_instance = this;
    this.f1u_1 = false;
    this.g1u_1 = false;
    this.h1u_1 = null;
    this.i1u_1 = CoroutineScope_0((new JsMicrotasksDispatcher()).ne(SupervisorJob()));
    var tmp = this;
    tmp.j1u_1 = GlobalSnapshotManager$globalWriteObserver$lambda;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.k1u_1 = ArrayList_init_$Create$();
    this.l1u_1 = false;
    this.m1u_1 = 8;
  }
  protoOf(GlobalSnapshotManager).w1u = function () {
    if (!this.f1u_1) {
      this.f1u_1 = true;
      this.h1u_1 = Companion_instance.j1o(this.j1u_1);
    }
  };
  var GlobalSnapshotManager_instance;
  function GlobalSnapshotManager_getInstance() {
    if (GlobalSnapshotManager_instance == null)
      new GlobalSnapshotManager();
    return GlobalSnapshotManager_instance;
  }
  function JsMicrotasksDispatcher$dispatch$lambda($block) {
    return function (it) {
      $block.ek();
      return Unit_instance;
    };
  }
  function JsMicrotasksDispatcher() {
    CoroutineDispatcher.call(this);
    this.y1u_1 = 0;
  }
  protoOf(JsMicrotasksDispatcher).nk = function (context, block) {
    var tmp = Promise.resolve(Unit_instance);
    tmp.then(JsMicrotasksDispatcher$dispatch$lambda(block));
  };
  function renderComposable$composable(rootElementId, content) {
    return renderComposable$composable_0(ensureNotNull(document.getElementById(rootElementId)), VOID, content);
  }
  function renderComposable$composable_0(root, monotonicFrameClock, content) {
    monotonicFrameClock = monotonicFrameClock === VOID ? get_DefaultMonotonicFrameClock() : monotonicFrameClock;
    GlobalSnapshotManager_getInstance().w1u();
    var context = monotonicFrameClock.ne(new JsMicrotasksDispatcher());
    var recomposer = new Recomposer(context);
    var tmp = CoroutineScope_0(context);
    var tmp_0 = CoroutineStart_UNDISPATCHED_getInstance();
    launch(tmp, VOID, tmp_0, renderComposable$composable$slambda_0(recomposer, null));
    var composition = ControlledComposition(new DomApplier(new DomNodeWrapper(root)), recomposer);
    var scope = new renderComposable$composable$scope$1(root);
    composition.d19(ComposableLambda$invoke$ref(composableLambdaInstance(-1520853124, true, renderComposable$composable$lambda(content, scope))));
    return composition;
  }
  function renderComposable$composable$slambda($recomposer, resultContinuation) {
    this.h1v_1 = $recomposer;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(renderComposable$composable$slambda).k1b = function ($this$launch, $completion) {
    var tmp = this.l1b($this$launch, $completion);
    tmp.sb_1 = Unit_instance;
    tmp.tb_1 = null;
    return tmp.cc();
  };
  protoOf(renderComposable$composable$slambda).oc = function (p1, $completion) {
    return this.k1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(renderComposable$composable$slambda).cc = function () {
    var suspendResult = this.sb_1;
    $sm: do
      try {
        var tmp = this.qb_1;
        switch (tmp) {
          case 0:
            this.rb_1 = 2;
            this.qb_1 = 1;
            suspendResult = this.h1v_1.a1g(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(renderComposable$composable$slambda).l1b = function ($this$launch, completion) {
    var i = new renderComposable$composable$slambda(this.h1v_1, completion);
    i.i1v_1 = $this$launch;
    return i;
  };
  function renderComposable$composable$slambda_0($recomposer, resultContinuation) {
    var i = new renderComposable$composable$slambda($recomposer, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.k1b($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function renderComposable$composable$scope$1($root) {
    this.j1v_1 = $root;
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.s14(p0, p1);
    };
  }
  function renderComposable$composable$lambda($content, $scope) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.ju()) {
        if (isTraceInProgress()) {
          traceEventStart(-1520853124, $changed, -1, 'org.jetbrains.compose.web.renderComposable$composable.<anonymous> (renderComposable.kt:59)');
        }
        $content($scope, $composer_0, 0);
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
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DomApplier;
  _.$_$.b = DomNodeWrapper;
  _.$_$.c = renderComposable$composable;
  //endregion
  return _;
}));

//# sourceMappingURL=html-internal-html-core-runtime.js.map
