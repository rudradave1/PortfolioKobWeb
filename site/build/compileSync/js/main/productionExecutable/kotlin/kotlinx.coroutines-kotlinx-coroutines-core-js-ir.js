(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './88b0986a7186d029-atomicfu-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    root['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] = factory(typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined' ? {} : this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-kotlin-stdlib'], this['88b0986a7186d029-atomicfu-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.y1;
  var protoOf = kotlin_kotlin.$_$.i6;
  var THROW_CCE = kotlin_kotlin.$_$.i8;
  var Continuation = kotlin_kotlin.$_$.x4;
  var classMeta = kotlin_kotlin.$_$.n5;
  var setMetadataFor = kotlin_kotlin.$_$.j6;
  var VOID = kotlin_kotlin.$_$.c;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.t1;
  var Key_instance = kotlin_kotlin.$_$.s1;
  var equals = kotlin_kotlin.$_$.q5;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.q4;
  var toString = kotlin_kotlin.$_$.k6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var intercepted = kotlin_kotlin.$_$.r4;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.p4;
  var interfaceMeta = kotlin_kotlin.$_$.y5;
  var isInterface = kotlin_kotlin.$_$.b6;
  var toString_0 = kotlin_kotlin.$_$.y8;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var objectMeta = kotlin_kotlin.$_$.h6;
  var hashCode = kotlin_kotlin.$_$.w5;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.p;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.q1;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.r1;
  var Companion_instance = kotlin_kotlin.$_$.x1;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.p1;
  var createFailure = kotlin_kotlin.$_$.o8;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.t4;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.s4;
  var get = kotlin_kotlin.$_$.u4;
  var minusKey = kotlin_kotlin.$_$.v4;
  var ContinuationInterceptor = kotlin_kotlin.$_$.w4;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var Enum = kotlin_kotlin.$_$.b8;
  var startCoroutine = kotlin_kotlin.$_$.e5;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.r8;
  var Long = kotlin_kotlin.$_$.f8;
  var RuntimeException = kotlin_kotlin.$_$.h8;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.h1;
  var captureStack = kotlin_kotlin.$_$.j5;
  var Error_0 = kotlin_kotlin.$_$.c8;
  var Error_init_$Init$ = kotlin_kotlin.$_$.x;
  var Element = kotlin_kotlin.$_$.b5;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.u;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.x8;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var CancellationException = kotlin_kotlin.$_$.o4;
  var ArrayList = kotlin_kotlin.$_$.h2;
  var CoroutineImpl = kotlin_kotlin.$_$.d5;
  var SequenceScope = kotlin_kotlin.$_$.u6;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.d1;
  var sequence = kotlin_kotlin.$_$.v6;
  var plus = kotlin_kotlin.$_$.c5;
  var get_0 = kotlin_kotlin.$_$.z4;
  var fold = kotlin_kotlin.$_$.y4;
  var minusKey_0 = kotlin_kotlin.$_$.a5;
  var anyToString = kotlin_kotlin.$_$.h5;
  var UnsupportedOperationException = kotlin_kotlin.$_$.l8;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var fillArrayVal = kotlin_kotlin.$_$.r5;
  var arrayCopy = kotlin_kotlin.$_$.r2;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.z;
  var ensureNotNull = kotlin_kotlin.$_$.p8;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.q;
  var getStringHashCode = kotlin_kotlin.$_$.v5;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.j;
  //endregion
  //region block: pre-declaration
  function invokeOnCompletion$default(onCancelling, invokeImmediately, handler, $super) {
    onCancelling = onCancelling === VOID ? false : onCancelling;
    invokeImmediately = invokeImmediately === VOID ? true : invokeImmediately;
    return $super === VOID ? this.eh(onCancelling, invokeImmediately, handler) : $super.eh.call(this, onCancelling, invokeImmediately, handler);
  }
  setMetadataFor(Job, 'Job', interfaceMeta, VOID, [Element], VOID, VOID, VOID, [0]);
  setMetadataFor(ParentJob, 'ParentJob', interfaceMeta, VOID, [Job], VOID, VOID, VOID, [0]);
  setMetadataFor(JobSupport, 'JobSupport', classMeta, VOID, [Job, ParentJob], VOID, VOID, VOID, [0]);
  setMetadataFor(CoroutineScope, 'CoroutineScope', interfaceMeta);
  setMetadataFor(AbstractCoroutine, 'AbstractCoroutine', classMeta, JobSupport, [JobSupport, Job, Continuation, CoroutineScope], VOID, VOID, VOID, [0]);
  setMetadataFor(StandaloneCoroutine, 'StandaloneCoroutine', classMeta, AbstractCoroutine, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(LazyStandaloneCoroutine, 'LazyStandaloneCoroutine', classMeta, StandaloneCoroutine, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(ScopeCoroutine, 'ScopeCoroutine', classMeta, AbstractCoroutine, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(DispatchedCoroutine, 'DispatchedCoroutine', classMeta, ScopeCoroutine, VOID, VOID, VOID, VOID, [0]);
  function cancel$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.mi(cause) : $super.mi.call(this, cause);
  }
  setMetadataFor(CancellableContinuation, 'CancellableContinuation', interfaceMeta, VOID, [Continuation]);
  setMetadataFor(SchedulerTask, 'SchedulerTask', classMeta);
  setMetadataFor(DispatchedTask, 'DispatchedTask', classMeta, SchedulerTask);
  setMetadataFor(CancellableContinuationImpl, 'CancellableContinuationImpl', classMeta, DispatchedTask, [DispatchedTask, CancellableContinuation]);
  setMetadataFor(CancelHandlerBase, 'CancelHandlerBase', classMeta);
  setMetadataFor(NotCompleted, 'NotCompleted', interfaceMeta);
  setMetadataFor(CancelHandler, 'CancelHandler', classMeta, CancelHandlerBase, [CancelHandlerBase, NotCompleted]);
  setMetadataFor(Active, 'Active', objectMeta, VOID, [NotCompleted]);
  setMetadataFor(CompletedContinuation, 'CompletedContinuation', classMeta);
  setMetadataFor(BeforeResumeCancelHandler, 'BeforeResumeCancelHandler', classMeta, CancelHandler);
  setMetadataFor(InvokeOnCancel, 'InvokeOnCancel', classMeta, CancelHandler);
  setMetadataFor(CompletedExceptionally, 'CompletedExceptionally', classMeta);
  setMetadataFor(CancelledContinuation, 'CancelledContinuation', classMeta, CompletedExceptionally);
  setMetadataFor(CompletedWithCancellation, 'CompletedWithCancellation', classMeta);
  setMetadataFor(Key, 'Key', objectMeta, AbstractCoroutineContextKey);
  setMetadataFor(CoroutineDispatcher, 'CoroutineDispatcher', classMeta, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, ContinuationInterceptor]);
  setMetadataFor(Key_0, 'Key', objectMeta);
  setMetadataFor(CoroutineStart, 'CoroutineStart', classMeta, Enum);
  setMetadataFor(EventLoop, 'EventLoop', classMeta, CoroutineDispatcher);
  setMetadataFor(ThreadLocalEventLoop, 'ThreadLocalEventLoop', objectMeta);
  setMetadataFor(CompletionHandlerException, 'CompletionHandlerException', classMeta, RuntimeException);
  setMetadataFor(CoroutinesInternalError, 'CoroutinesInternalError', classMeta, Error_0);
  setMetadataFor(Key_1, 'Key', objectMeta);
  setMetadataFor(ChildHandle, 'ChildHandle', interfaceMeta);
  setMetadataFor(NonDisposableHandle, 'NonDisposableHandle', objectMeta, VOID, [ChildHandle]);
  setMetadataFor(Incomplete, 'Incomplete', interfaceMeta);
  setMetadataFor(Empty, 'Empty', classMeta, VOID, [Incomplete]);
  setMetadataFor(LinkedListNode, 'LinkedListNode', classMeta, VOID, VOID, LinkedListNode);
  setMetadataFor(LinkedListHead, 'LinkedListHead', classMeta, LinkedListNode, VOID, LinkedListHead);
  setMetadataFor(NodeList, 'NodeList', classMeta, LinkedListHead, [LinkedListHead, Incomplete], NodeList);
  setMetadataFor(CompletionHandlerBase, 'CompletionHandlerBase', classMeta, LinkedListNode);
  setMetadataFor(JobNode, 'JobNode', classMeta, CompletionHandlerBase, [CompletionHandlerBase, Incomplete]);
  setMetadataFor(Finishing, 'Finishing', classMeta, VOID, [Incomplete]);
  setMetadataFor(ChildCompletion, 'ChildCompletion', classMeta, JobNode);
  setMetadataFor(JobSupport$_get_children_$slambda_k839f8, 'JobSupport$<get-children>$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(JobCancellingNode, 'JobCancellingNode', classMeta, JobNode);
  setMetadataFor(InactiveNodeList, 'InactiveNodeList', classMeta, VOID, [Incomplete]);
  setMetadataFor(ChildHandleNode, 'ChildHandleNode', classMeta, JobCancellingNode, [JobCancellingNode, ChildHandle]);
  setMetadataFor(InvokeOnCancelling, 'InvokeOnCancelling', classMeta, JobCancellingNode);
  setMetadataFor(InvokeOnCompletion, 'InvokeOnCompletion', classMeta, JobNode);
  setMetadataFor(IncompleteStateBox, 'IncompleteStateBox', classMeta);
  setMetadataFor(ChildContinuation, 'ChildContinuation', classMeta, JobCancellingNode);
  setMetadataFor(JobImpl, 'JobImpl', classMeta, JobSupport, [JobSupport, Job], VOID, VOID, VOID, [0]);
  setMetadataFor(MainCoroutineDispatcher, 'MainCoroutineDispatcher', classMeta, CoroutineDispatcher);
  setMetadataFor(SupervisorJobImpl, 'SupervisorJobImpl', classMeta, JobImpl, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(TimeoutCancellationException, 'TimeoutCancellationException', classMeta, CancellationException);
  setMetadataFor(Unconfined, 'Unconfined', objectMeta, CoroutineDispatcher);
  setMetadataFor(Key_2, 'Key', objectMeta);
  setMetadataFor(AbstractSharedFlow, 'AbstractSharedFlow', classMeta);
  setMetadataFor(StateFlowImpl, 'StateFlowImpl', classMeta, AbstractSharedFlow, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(ArrayQueue, 'ArrayQueue', classMeta, VOID, VOID, ArrayQueue);
  setMetadataFor(OpDescriptor, 'OpDescriptor', classMeta);
  setMetadataFor(DispatchedContinuation, 'DispatchedContinuation', classMeta, DispatchedTask, [DispatchedTask, Continuation]);
  setMetadataFor(ContextScope, 'ContextScope', classMeta, VOID, [CoroutineScope]);
  setMetadataFor(Symbol, 'Symbol', classMeta);
  setMetadataFor(UndispatchedCoroutine, 'UndispatchedCoroutine', classMeta, ScopeCoroutine, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(Dispatchers, 'Dispatchers', objectMeta);
  setMetadataFor(JsMainDispatcher, 'JsMainDispatcher', classMeta, MainCoroutineDispatcher);
  setMetadataFor(UnconfinedEventLoop, 'UnconfinedEventLoop', classMeta, EventLoop, VOID, UnconfinedEventLoop);
  setMetadataFor(JobCancellationException, 'JobCancellationException', classMeta, CancellationException);
  setMetadataFor(SetTimeoutBasedDispatcher, 'SetTimeoutBasedDispatcher', classMeta, CoroutineDispatcher, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(NodeDispatcher, 'NodeDispatcher', objectMeta, SetTimeoutBasedDispatcher, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(SetTimeoutDispatcher, 'SetTimeoutDispatcher', objectMeta, SetTimeoutBasedDispatcher, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(MessageQueue, 'MessageQueue', classMeta, ArrayQueue);
  setMetadataFor(ScheduledMessageQueue, 'ScheduledMessageQueue', classMeta, MessageQueue);
  setMetadataFor(WindowDispatcher, 'WindowDispatcher', classMeta, CoroutineDispatcher, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(WindowMessageQueue, 'WindowMessageQueue', classMeta, MessageQueue);
  setMetadataFor(CommonThreadLocal, 'CommonThreadLocal', classMeta, VOID, VOID, CommonThreadLocal);
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob) {
      this.yf(parentContext.xb(Key_instance_2));
    }
    this.bg_1 = parentContext.ne(this);
  }
  protoOf(AbstractCoroutine).o6 = function () {
    return this.bg_1;
  };
  protoOf(AbstractCoroutine).cg = function () {
    return this.bg_1;
  };
  protoOf(AbstractCoroutine).dg = function () {
    return protoOf(JobSupport).dg.call(this);
  };
  protoOf(AbstractCoroutine).eg = function (value) {
  };
  protoOf(AbstractCoroutine).fg = function (cause, handled) {
  };
  protoOf(AbstractCoroutine).gg = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  protoOf(AbstractCoroutine).hg = function (state) {
    if (state instanceof CompletedExceptionally) {
      this.fg(state.ig_1, state.kg());
    } else {
      this.eg((state == null ? true : !(state == null)) ? state : THROW_CCE());
    }
  };
  protoOf(AbstractCoroutine).p6 = function (result) {
    var state = this.lg(toState_0(result));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_instance;
    this.mg(state);
  };
  protoOf(AbstractCoroutine).mg = function (state) {
    return this.ng(state);
  };
  protoOf(AbstractCoroutine).og = function (exception) {
    handleCoroutineException(this.bg_1, exception);
  };
  protoOf(AbstractCoroutine).pg = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.bg_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return protoOf(JobSupport).pg.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + protoOf(JobSupport).pg.call(this);
  };
  protoOf(AbstractCoroutine).qg = function (start, receiver, block) {
    start.tg(block, receiver, this);
  };
  function launch(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.uh() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.qg(start, coroutine, block);
    return coroutine;
  }
  function withContext(context, block, $completion) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.withContext.<anonymous>' call
      var oldContext = $completion.o6();
      var newContext = newCoroutineContext_0(oldContext, context);
      ensureActive(newContext);
      if (newContext === oldContext) {
        var coroutine = new ScopeCoroutine(newContext, $completion);
        tmp$ret$0 = startUndispatchedOrReturn(coroutine, coroutine, block);
        break $l$block_0;
      }
      if (equals(newContext.xb(Key_instance), oldContext.xb(Key_instance))) {
        var coroutine_0 = new UndispatchedCoroutine(newContext, $completion);
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        tmp$ret$0 = startUndispatchedOrReturn(coroutine_0, coroutine_0, block);
        break $l$block_0;
      }
      var coroutine_1 = new DispatchedCoroutine(newContext, $completion);
      startCoroutineCancellable(block, coroutine_1, coroutine_1);
      tmp$ret$0 = coroutine_1.ai();
    }
    return tmp$ret$0;
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(StandaloneCoroutine).sh = function (exception) {
    handleCoroutineException(this.bg_1, exception);
    return true;
  };
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.hi_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyStandaloneCoroutine).zg = function () {
    startCoroutineCancellable_0(this.hi_1, this);
  };
  function trySuspend($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.zh_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.DispatchedCoroutine.trySuspend.<anonymous>' call
      switch (this_0.kotlinx$atomicfu$value) {
        case 0:
          if ($this.zh_1.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already suspended';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function tryResume($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.zh_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.DispatchedCoroutine.tryResume.<anonymous>' call
      switch (this_0.kotlinx$atomicfu$value) {
        case 0:
          if ($this.zh_1.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already resumed';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function DispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
    this.zh_1 = atomic$int$1(0);
  }
  protoOf(DispatchedCoroutine).ng = function (state) {
    this.mg(state);
  };
  protoOf(DispatchedCoroutine).mg = function (state) {
    if (tryResume(this))
      return Unit_instance;
    resumeCancellableWith(intercepted(this.li_1), recoverResult(state, this.li_1));
  };
  protoOf(DispatchedCoroutine).ai = function () {
    if (trySuspend(this))
      return get_COROUTINE_SUSPENDED();
    var state = unboxState(this.wg());
    if (state instanceof CompletedExceptionally)
      throw state.ig_1;
    return (state == null ? true : !(state == null)) ? state : THROW_CCE();
  };
  function CancellableContinuation() {
  }
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp0_subject = $this.wg();
    var tmp;
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp0_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        tmp = 'Completed';
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (get_isReusableMode($this.cj_1)) {
      var tmp_0 = $this.qi_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).bj();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.qi_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.dj(cause);
  }
  function callCancelHandler($this, handler, cause) {
    var tmp;
    try {
      invokeIt(handler, cause);
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException($this.o6(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this, ex));
        tmp_0 = Unit_instance;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function trySuspend_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.si_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.trySuspend.<anonymous>' call
      switch (this_0.kotlinx$atomicfu$value) {
        case 0:
          if ($this.si_1.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already suspended';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function tryResume_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.si_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResume.<anonymous>' call
      switch (this_0.kotlinx$atomicfu$value) {
        case 0:
          if ($this.si_1.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already resumed';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this.o6().xb(Key_instance_2);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new ChildContinuation($this);
    var handle = parent.fh(true, VOID, tmp$ret$1);
    $this.ui_1 = handle;
    return handle;
  }
  function releaseClaimedReusableContinuation($this) {
    var tmp = $this.qi_1;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ej($this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    $this.fj();
    $this.mi(cancellationCause);
  }
  function multipleHandlersError($this, handler, state) {
    // Inline function 'kotlin.error' call
    var message = "It's prohibited to register multiple handlers, tried to register " + handler + ', already has ' + toString_0(state);
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function makeCancelHandler($this, handler) {
    var tmp;
    if (handler instanceof CancelHandler) {
      tmp = handler;
    } else {
      tmp = new InvokeOnCancel(handler);
    }
    return tmp;
  }
  function dispatchResume($this, mode) {
    if (tryResume_0($this))
      return Unit_instance;
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlinx.coroutines.assert' call
      tmp = proposedUpdate;
    } else {
      if (!get_isCancellableMode(resumeMode) ? idempotent == null : false) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          var tmp_2;
          if (state instanceof CancelHandler) {
            tmp_2 = !(state instanceof BeforeResumeCancelHandler);
          } else {
            tmp_2 = false;
          }
          tmp_1 = tmp_2;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = !(idempotent == null);
        }
        if (tmp_0) {
          tmp = new CompletedContinuation(proposedUpdate, state instanceof CancelHandler ? state : null, onCancellation, idempotent);
        } else {
          tmp = proposedUpdate;
        }
      }
    }
    return tmp;
  }
  function resumeImpl($this, proposedUpdate, resumeMode, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.ti_1;
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.resumeImpl.<anonymous>' call
        var state = this_0.kotlinx$atomicfu$value;
        if (!(state == null) ? isInterface(state, NotCompleted) : false) {
          var update = resumedState($this, state, proposedUpdate, resumeMode, onCancellation, null);
          if (!$this.ti_1.atomicfu$compareAndSet(state, update)) {
            break $l$block;
          }
          detachChildIfNonResuable($this);
          dispatchResume($this, resumeMode);
          return Unit_instance;
        } else {
          if (state instanceof CancelledContinuation) {
            if (state.kj()) {
              if (onCancellation == null)
                null;
              else {
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                $this.gj(onCancellation, state.ig_1);
              }
              return Unit_instance;
            }
          }
        }
        alreadyResumedError($this, proposedUpdate);
      }
    }
  }
  function resumeImpl$default($this, proposedUpdate, resumeMode, onCancellation, $super) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    return resumeImpl($this, proposedUpdate, resumeMode, onCancellation);
  }
  function alreadyResumedError($this, proposedUpdate) {
    // Inline function 'kotlin.error' call
    var message = 'Already resumed, but proposed with update ' + toString_0(proposedUpdate);
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this)) {
      $this.fj();
    }
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.qi_1 = delegate;
    // Inline function 'kotlinx.coroutines.assert' call
    this.ri_1 = this.qi_1.o6();
    this.si_1 = atomic$int$1(0);
    this.ti_1 = atomic$ref$1(Active_instance);
    this.ui_1 = null;
  }
  protoOf(CancellableContinuationImpl).lj = function () {
    return this.qi_1;
  };
  protoOf(CancellableContinuationImpl).o6 = function () {
    return this.ri_1;
  };
  protoOf(CancellableContinuationImpl).wg = function () {
    return this.ti_1.kotlinx$atomicfu$value;
  };
  protoOf(CancellableContinuationImpl).xg = function () {
    var tmp = this.wg();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  protoOf(CancellableContinuationImpl).mj = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.xg()) {
      handle.nj();
      this.ui_1 = NonDisposableHandle_instance;
    }
  };
  protoOf(CancellableContinuationImpl).oj = function () {
    return this.wg();
  };
  protoOf(CancellableContinuationImpl).pj = function (takenState, cause) {
    var this_0 = this.ti_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (!(state == null) ? isInterface(state, NotCompleted) : false) {
        // Inline function 'kotlin.error' call
        var message = 'Not completed';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        if (state instanceof CompletedExceptionally)
          return Unit_instance;
        else {
          if (state instanceof CompletedContinuation) {
            // Inline function 'kotlin.check' call
            // Inline function 'kotlin.contracts.contract' call
            if (!!state.vj()) {
              // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>.<anonymous>' call
              var message_0 = 'Must be called at most once';
              throw IllegalStateException_init_$Create$(toString(message_0));
            }
            var update = state.wj(VOID, VOID, VOID, VOID, cause);
            if (this.ti_1.atomicfu$compareAndSet(state, update)) {
              state.xj(this, cause);
              return Unit_instance;
            }
          } else {
            if (this.ti_1.atomicfu$compareAndSet(state, new CompletedContinuation(state, VOID, VOID, VOID, cause))) {
              return Unit_instance;
            }
          }
        }
      }
    }
    return Unit_instance;
  };
  protoOf(CancellableContinuationImpl).mi = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.ti_1;
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancel.<anonymous>' call
        var state = this_0.kotlinx$atomicfu$value;
        if (!(!(state == null) ? isInterface(state, NotCompleted) : false))
          return false;
        var update = new CancelledContinuation(this, cause, state instanceof CancelHandler);
        if (!this.ti_1.atomicfu$compareAndSet(state, update)) {
          break $l$block;
        }
        var tmp0_safe_receiver = state instanceof CancelHandler ? state : null;
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          this.yj(tmp0_safe_receiver, cause);
        }
        detachChildIfNonResuable(this);
        dispatchResume(this, this.cj_1);
        return true;
      }
    }
  };
  protoOf(CancellableContinuationImpl).zj = function (cause) {
    if (cancelLater(this, cause))
      return Unit_instance;
    this.mi(cause);
    detachChildIfNonResuable(this);
  };
  protoOf(CancellableContinuationImpl).yj = function (handler, cause) {
    var tmp;
    try {
      handler.invoke(cause);
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.o6(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this, ex));
        tmp_0 = Unit_instance;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).gj = function (onCancellation, cause) {
    try {
      onCancellation(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.o6(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this, ex));
      } else {
        throw $p;
      }
    }
  };
  protoOf(CancellableContinuationImpl).ak = function (parent) {
    return parent.ah();
  };
  protoOf(CancellableContinuationImpl).ai = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend_0(this)) {
      if (this.ui_1 == null) {
        installParentHandle(this);
      }
      if (isReusable_0) {
        releaseClaimedReusableContinuation(this);
      }
      return get_COROUTINE_SUSPENDED();
    }
    if (isReusable_0) {
      releaseClaimedReusableContinuation(this);
    }
    var state = this.wg();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.ig_1, this);
    if (get_isCancellableMode(this.cj_1)) {
      var job = this.o6().xb(Key_instance_2);
      if (!(job == null) ? !job.dg() : false) {
        var cause = job.ah();
        this.pj(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.bk(state);
  };
  protoOf(CancellableContinuationImpl).p6 = function (result) {
    return resumeImpl$default(this, toState(result, this), this.cj_1);
  };
  protoOf(CancellableContinuationImpl).oi = function (handler) {
    var cancelHandler = makeCancelHandler(this, handler);
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.ti_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.invokeOnCancellation.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (state instanceof Active) {
        if (this.ti_1.atomicfu$compareAndSet(state, cancelHandler))
          return Unit_instance;
      } else {
        if (state instanceof CancelHandler) {
          multipleHandlersError(this, handler, state);
        } else {
          if (state instanceof CompletedExceptionally) {
            if (!state.ck()) {
              multipleHandlersError(this, handler, state);
            }
            if (state instanceof CancelledContinuation) {
              var tmp1_safe_receiver = state instanceof CompletedExceptionally ? state : null;
              callCancelHandler(this, handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ig_1);
            }
            return Unit_instance;
          } else {
            if (state instanceof CompletedContinuation) {
              if (!(state.rj_1 == null)) {
                multipleHandlersError(this, handler, state);
              }
              if (cancelHandler instanceof BeforeResumeCancelHandler)
                return Unit_instance;
              if (state.vj()) {
                callCancelHandler(this, handler, state.uj_1);
                return Unit_instance;
              }
              var update = state.wj(VOID, cancelHandler);
              if (this.ti_1.atomicfu$compareAndSet(state, update))
                return Unit_instance;
            } else {
              if (cancelHandler instanceof BeforeResumeCancelHandler)
                return Unit_instance;
              var update_0 = new CompletedContinuation(state, cancelHandler);
              if (this.ti_1.atomicfu$compareAndSet(state, update_0))
                return Unit_instance;
            }
          }
        }
      }
    }
  };
  protoOf(CancellableContinuationImpl).fj = function () {
    var tmp0_elvis_lhs = this.ui_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.nj();
    this.ui_1 = NonDisposableHandle_instance;
  };
  protoOf(CancellableContinuationImpl).bk = function (state) {
    var tmp;
    if (state instanceof CompletedContinuation) {
      var tmp_0 = state.qj_1;
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = (state == null ? true : !(state == null)) ? state : THROW_CCE();
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).dk = function (state) {
    var tmp0_safe_receiver = protoOf(DispatchedTask).dk.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.getExceptionalResult.<anonymous>' call
      tmp = recoverStackTrace(tmp0_safe_receiver, this.qi_1);
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).toString = function () {
    return this.pg() + '(' + toDebugString(this.qi_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  protoOf(CancellableContinuationImpl).pg = function () {
    return 'CancellableContinuation';
  };
  function CancelHandler() {
    CancelHandlerBase.call(this);
  }
  function Active() {
  }
  protoOf(Active).toString = function () {
    return 'Active';
  };
  var Active_instance;
  function Active_getInstance() {
    return Active_instance;
  }
  function NotCompleted() {
  }
  function CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    cancelHandler = cancelHandler === VOID ? null : cancelHandler;
    onCancellation = onCancellation === VOID ? null : onCancellation;
    idempotentResume = idempotentResume === VOID ? null : idempotentResume;
    cancelCause = cancelCause === VOID ? null : cancelCause;
    this.qj_1 = result;
    this.rj_1 = cancelHandler;
    this.sj_1 = onCancellation;
    this.tj_1 = idempotentResume;
    this.uj_1 = cancelCause;
  }
  protoOf(CompletedContinuation).vj = function () {
    return !(this.uj_1 == null);
  };
  protoOf(CompletedContinuation).xj = function (cont, cause) {
    var tmp0_safe_receiver = this.rj_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.yj(tmp0_safe_receiver, cause);
    }
    var tmp1_safe_receiver = this.sj_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.gj(tmp1_safe_receiver, cause);
    }
  };
  protoOf(CompletedContinuation).gk = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).wj = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $super) {
    result = result === VOID ? this.qj_1 : result;
    cancelHandler = cancelHandler === VOID ? this.rj_1 : cancelHandler;
    onCancellation = onCancellation === VOID ? this.sj_1 : onCancellation;
    idempotentResume = idempotentResume === VOID ? this.tj_1 : idempotentResume;
    cancelCause = cancelCause === VOID ? this.uj_1 : cancelCause;
    return $super === VOID ? this.gk(result, cancelHandler, onCancellation, idempotentResume, cancelCause) : $super.gk.call(this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).toString = function () {
    return 'CompletedContinuation(result=' + toString_0(this.qj_1) + ', cancelHandler=' + this.rj_1 + ', onCancellation=' + this.sj_1 + ', idempotentResume=' + toString_0(this.tj_1) + ', cancelCause=' + this.uj_1 + ')';
  };
  protoOf(CompletedContinuation).hashCode = function () {
    var result = this.qj_1 == null ? 0 : hashCode(this.qj_1);
    result = imul(result, 31) + (this.rj_1 == null ? 0 : hashCode(this.rj_1)) | 0;
    result = imul(result, 31) + (this.sj_1 == null ? 0 : hashCode(this.sj_1)) | 0;
    result = imul(result, 31) + (this.tj_1 == null ? 0 : hashCode(this.tj_1)) | 0;
    result = imul(result, 31) + (this.uj_1 == null ? 0 : hashCode(this.uj_1)) | 0;
    return result;
  };
  protoOf(CompletedContinuation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.qj_1, tmp0_other_with_cast.qj_1))
      return false;
    if (!equals(this.rj_1, tmp0_other_with_cast.rj_1))
      return false;
    if (!equals(this.sj_1, tmp0_other_with_cast.sj_1))
      return false;
    if (!equals(this.tj_1, tmp0_other_with_cast.tj_1))
      return false;
    if (!equals(this.uj_1, tmp0_other_with_cast.uj_1))
      return false;
    return true;
  };
  function BeforeResumeCancelHandler() {
  }
  function InvokeOnCancel(handler) {
    CancelHandler.call(this);
    this.hk_1 = handler;
  }
  protoOf(InvokeOnCancel).ik = function (cause) {
    this.hk_1(cause);
  };
  protoOf(InvokeOnCancel).invoke = function (cause) {
    return this.ik(cause);
  };
  protoOf(InvokeOnCancel).toString = function () {
    return 'InvokeOnCancel[' + get_classSimpleName(this.hk_1) + '@' + get_hexAddress(this) + ']';
  };
  function CompletedExceptionally(cause, handled) {
    handled = handled === VOID ? false : handled;
    this.ig_1 = cause;
    this.jg_1 = atomic$boolean$1(handled);
  }
  protoOf(CompletedExceptionally).kg = function () {
    return this.jg_1.kotlinx$atomicfu$value;
  };
  protoOf(CompletedExceptionally).ck = function () {
    return this.jg_1.atomicfu$compareAndSet(false, true);
  };
  protoOf(CompletedExceptionally).toString = function () {
    return get_classSimpleName(this) + '[' + this.ig_1 + ']';
  };
  function CancelledContinuation(continuation, cause, handled) {
    CompletedExceptionally.call(this, cause == null ? CancellationException_init_$Create$('Continuation ' + continuation + ' was cancelled normally') : cause, handled);
    this.jj_1 = atomic$boolean$1(false);
  }
  protoOf(CancelledContinuation).kj = function () {
    return this.jj_1.atomicfu$compareAndSet(false, true);
  };
  function toState(_this__u8e3s4, caller) {
    // Inline function 'kotlin.fold' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp = new CompletedExceptionally(recoverStackTrace(exception, caller));
    }
    return tmp;
  }
  function toState_0(_this__u8e3s4, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    // Inline function 'kotlin.fold' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      var it = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      tmp = !(onCancellation == null) ? new CompletedWithCancellation(it, onCancellation) : it;
    } else {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp = new CompletedExceptionally(exception);
    }
    return tmp;
  }
  function CompletedWithCancellation(result, onCancellation) {
    this.jk_1 = result;
    this.kk_1 = onCancellation;
  }
  protoOf(CompletedWithCancellation).toString = function () {
    return 'CompletedWithCancellation(result=' + toString_0(this.jk_1) + ', onCancellation=' + this.kk_1 + ')';
  };
  protoOf(CompletedWithCancellation).hashCode = function () {
    var result = this.jk_1 == null ? 0 : hashCode(this.jk_1);
    result = imul(result, 31) + hashCode(this.kk_1) | 0;
    return result;
  };
  protoOf(CompletedWithCancellation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedWithCancellation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedWithCancellation ? other : THROW_CCE();
    if (!equals(this.jk_1, tmp0_other_with_cast.jk_1))
      return false;
    if (!equals(this.kk_1, tmp0_other_with_cast.kk_1))
      return false;
    return true;
  };
  function recoverResult(state, uCont) {
    var tmp;
    if (state instanceof CompletedExceptionally) {
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(state.ig_1, uCont);
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      var value = (state == null ? true : !(state == null)) ? state : THROW_CCE();
      tmp = _Result___init__impl__xyqfz8(value);
    }
    return tmp;
  }
  function CoroutineDispatcher$Key$_init_$lambda_akl8b5(it) {
    return it instanceof CoroutineDispatcher ? it : null;
  }
  function Key() {
    Key_instance_0 = this;
    var tmp = Key_instance;
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5);
  }
  var Key_instance_0;
  function Key_getInstance() {
    if (Key_instance_0 == null)
      new Key();
    return Key_instance_0;
  }
  function CoroutineDispatcher() {
    Key_getInstance();
    AbstractCoroutineContextElement.call(this, Key_instance);
  }
  protoOf(CoroutineDispatcher).mk = function (context) {
    return true;
  };
  protoOf(CoroutineDispatcher).ac = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  protoOf(CoroutineDispatcher).yb = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.ok();
  };
  protoOf(CoroutineDispatcher).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  function handleCoroutineException(context, exception) {
    try {
      var tmp0_safe_receiver = context.xb(Key_instance_1);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.pk(context, exception);
        return Unit_instance;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var t = $p;
        handleCoroutineExceptionImpl(context, handlerException(exception, t));
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    handleCoroutineExceptionImpl(context, exception);
  }
  function Key_0() {
  }
  var Key_instance_1;
  function Key_getInstance_0() {
    return Key_instance_1;
  }
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.handlerException.<anonymous>' call
    // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
    return RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
  }
  function CoroutineScope() {
  }
  function CoroutineScope_0(context) {
    return new ContextScope(!(context.xb(Key_instance_2) == null) ? context : context.ne(Job_0()));
  }
  function coroutineScope(block, $completion) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.coroutineScope.<anonymous>' call
    var coroutine = new ScopeCoroutine($completion.o6(), $completion);
    return startUndispatchedOrReturn(coroutine, coroutine, block);
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_instance;
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(CoroutineStart).tg = function (block, receiver, completion) {
    var tmp;
    switch (this.s9_1) {
      case 0:
        startCoroutineCancellable(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 2:
        startCoroutine(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 3:
        startCoroutineUndispatched(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 1:
        tmp = Unit_instance;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(CoroutineStart).uh = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function CoroutineStart_UNDISPATCHED_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_UNDISPATCHED_instance;
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.rk_1 = new Long(0, 0);
    this.sk_1 = false;
    this.tk_1 = null;
  }
  protoOf(EventLoop).uk = function () {
    var tmp0_elvis_lhs = this.tk_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.yk();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.ek();
    return true;
  };
  protoOf(EventLoop).zk = function (task) {
    var tmp0_elvis_lhs = this.tk_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new ArrayQueue();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.EventLoop.dispatchUnconfined.<anonymous>' call
      this.tk_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.al(task);
  };
  protoOf(EventLoop).bl = function () {
    return this.rk_1.w9(delta(this, true)) >= 0;
  };
  protoOf(EventLoop).cl = function () {
    var tmp0_safe_receiver = this.tk_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.dl();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  protoOf(EventLoop).el = function (unconfined) {
    this.rk_1 = this.rk_1.za(delta(this, unconfined));
    if (!unconfined)
      this.sk_1 = true;
  };
  protoOf(EventLoop).fl = function (unconfined) {
    this.rk_1 = this.rk_1.ab(delta(this, unconfined));
    if (this.rk_1.w9(new Long(0, 0)) > 0)
      return Unit_instance;
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.sk_1) {
      this.gl();
    }
  };
  protoOf(EventLoop).gl = function () {
  };
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.hl_1 = new CommonThreadLocal();
  }
  protoOf(ThreadLocalEventLoop).il = function () {
    var tmp0_elvis_lhs = this.hl_1.kl();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = createEventLoop();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.ThreadLocalEventLoop.<get-eventLoop>.<anonymous>' call
      ThreadLocalEventLoop_getInstance().hl_1.ll(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  function Key_1() {
  }
  var Key_instance_2;
  function Key_getInstance_1() {
    return Key_instance_2;
  }
  function Job() {
  }
  function ParentJob() {
  }
  function ChildHandle() {
  }
  function NonDisposableHandle() {
  }
  protoOf(NonDisposableHandle).nj = function () {
  };
  protoOf(NonDisposableHandle).lh = function (cause) {
    return false;
  };
  protoOf(NonDisposableHandle).toString = function () {
    return 'NonDisposableHandle';
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    return NonDisposableHandle_instance;
  }
  function ensureActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.xb(Key_instance_2);
    if (tmp0_safe_receiver == null)
      null;
    else {
      ensureActive_0(tmp0_safe_receiver);
    }
  }
  function ensureActive_0(_this__u8e3s4) {
    if (!_this__u8e3s4.dg())
      throw _this__u8e3s4.ah();
  }
  function Job_0(parent) {
    parent = parent === VOID ? null : parent;
    return new JobImpl(parent);
  }
  function get_job(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.xb(Key_instance_2);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = "Current context doesn't contain Job in it: " + _this__u8e3s4;
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function cancel(_this__u8e3s4, message, cause) {
    cause = cause === VOID ? null : cause;
    return _this__u8e3s4.ih(CancellationException_init_$Create$_0(message, cause));
  }
  function get_COMPLETING_ALREADY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_ALREADY;
  }
  var COMPLETING_ALREADY;
  function get_COMPLETING_WAITING_CHILDREN() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_WAITING_CHILDREN;
  }
  var COMPLETING_WAITING_CHILDREN;
  function get_COMPLETING_RETRY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_RETRY;
  }
  var COMPLETING_RETRY;
  function get_TOO_LATE_TO_CANCEL() {
    _init_properties_JobSupport_kt__68f172();
    return TOO_LATE_TO_CANCEL;
  }
  var TOO_LATE_TO_CANCEL;
  function get_SEALED() {
    _init_properties_JobSupport_kt__68f172();
    return SEALED;
  }
  var SEALED;
  function get_EMPTY_NEW() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_NEW;
  }
  var EMPTY_NEW;
  function get_EMPTY_ACTIVE() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_ACTIVE;
  }
  var EMPTY_ACTIVE;
  function Empty(isActive) {
    this.nl_1 = isActive;
  }
  protoOf(Empty).dg = function () {
    return this.nl_1;
  };
  protoOf(Empty).ol = function () {
    return null;
  };
  protoOf(Empty).toString = function () {
    return 'Empty{' + (this.nl_1 ? 'Active' : 'New') + '}';
  };
  function Incomplete() {
  }
  function NodeList() {
    LinkedListHead.call(this);
  }
  protoOf(NodeList).dg = function () {
    return true;
  };
  protoOf(NodeList).ol = function () {
    return this;
  };
  protoOf(NodeList).sl = function (state) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>' call
    this_0.t5('List{');
    this_0.t5(state);
    this_0.t5('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = this.tl_1;
    while (!equals(cur, this)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>.<anonymous>' call
        var node = cur;
        if (first)
          first = false;
        else {
          this_0.t5(', ');
        }
        this_0.s5(node);
      }
      cur = cur.tl_1;
    }
    this_0.t5(']');
    return this_0.toString();
  };
  protoOf(NodeList).toString = function () {
    return get_DEBUG() ? this.sl('Active') : protoOf(LinkedListHead).toString.call(this);
  };
  function JobNode() {
    CompletionHandlerBase.call(this);
  }
  protoOf(JobNode).cm = function () {
    var tmp = this.bm_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  protoOf(JobNode).dg = function () {
    return true;
  };
  protoOf(JobNode).ol = function () {
    return null;
  };
  protoOf(JobNode).nj = function () {
    return this.cm().gh(this);
  };
  protoOf(JobNode).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.cm()) + ']';
  };
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this.im_1.kotlinx$atomicfu$value = value;
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this.im_1.kotlinx$atomicfu$value;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ig_1;
    var wasCancelling = false;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.JobSupport.finalizeFinishingState.<anonymous>' call
    wasCancelling = state.jm();
    var exceptions = state.km(proposedException);
    var finalCause = getFinalRootCause($this, state, exceptions);
    if (!(finalCause == null)) {
      addSuppressedExceptions($this, finalCause, exceptions);
    }
    var finalException = finalCause;
    var finalState = finalException == null ? proposedUpdate : finalException === proposedException ? proposedUpdate : new CompletedExceptionally(finalException);
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) ? true : $this.sh(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).ck();
      }
    }
    if (!wasCancelling) {
      $this.ph(finalException);
    }
    $this.hg(finalState);
    var casSuccess = $this.wf_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    // Inline function 'kotlinx.coroutines.assert' call
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.q()) {
      if (state.jm()) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        return new JobCancellationException(null == null ? $this.gg() : null, null, $this);
      }
      return null;
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = exceptions.l();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
        if (!(element instanceof CancellationException)) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var firstNonCancellation = tmp$ret$2;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.k(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator_0 = exceptions.l();
        while (tmp0_iterator_0.x()) {
          var element_0 = tmp0_iterator_0.z();
          // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
          var tmp;
          if (!(element_0 === first)) {
            tmp = element_0 instanceof TimeoutCancellationException;
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$4 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$4 = null;
      }
      var detailedTimeoutException = tmp$ret$4;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions.j() <= 1)
      return Unit_instance;
    var seenExceptions = identitySet(exceptions.j());
    var unwrappedCause = unwrap(rootCause);
    var tmp0_iterator = exceptions.l();
    while (tmp0_iterator.x()) {
      var exception = tmp0_iterator.z();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) ? !(unwrapped === unwrappedCause) : false) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.u(unwrapped);
      } else {
        tmp = false;
      }
      if (tmp) {
        // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    if (!$this.wf_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.ph(null);
    $this.hg(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this.vg();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.nj();
      $this.ug(NonDisposableHandle_instance);
    }
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ig_1;
    if (state instanceof JobNode) {
      try {
        state.invoke(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          var ex = $p;
          $this.og(new CompletionHandlerException('Exception in completion handler ' + state + ' for ' + $this, ex));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp2_safe_receiver = state.ol();
      if (tmp2_safe_receiver == null)
        null;
      else {
        notifyCompletion(tmp2_safe_receiver, $this, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.ph(cause);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = list.tl_1;
    while (!equals(cur, list)) {
      if (cur instanceof JobCancellingNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var node = cur;
        try {
          node.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
              tmp = tmp0_safe_receiver;
            }
            if (tmp == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node + ' for ' + $this, ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.tl_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.og(tmp0_safe_receiver_0);
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.qh())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.vg();
    if (parent === null ? true : parent === NonDisposableHandle_instance) {
      return isCancellation;
    }
    return parent.lh(cause) ? true : isCancellation;
  }
  function notifyCompletion(_this__u8e3s4, $this, cause) {
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = _this__u8e3s4.tl_1;
    while (!equals(cur, _this__u8e3s4)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var node = cur;
        try {
          node.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
              tmp = tmp0_safe_receiver;
            }
            if (tmp == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node + ' for ' + $this, ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.tl_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.og(tmp0_safe_receiver_0);
    }
    return Unit_instance;
  }
  function startInternal($this, state) {
    if (state instanceof Empty) {
      if (state.nl_1)
        return 0;
      if (!$this.wf_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.zg();
      return 1;
    } else {
      if (state instanceof InactiveNodeList) {
        if (!$this.wf_1.atomicfu$compareAndSet(state, state.lm_1))
          return -1;
        $this.zg();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function makeNode($this, handler, onCancelling) {
    var tmp;
    if (onCancelling) {
      var tmp0_elvis_lhs = handler instanceof JobCancellingNode ? handler : null;
      tmp = tmp0_elvis_lhs == null ? new InvokeOnCancelling(handler) : tmp0_elvis_lhs;
    } else {
      var tmp1_safe_receiver = handler instanceof JobNode ? handler : null;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.JobSupport.makeNode.<anonymous>' call
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_0 = tmp1_safe_receiver;
      }
      var tmp2_elvis_lhs = tmp_0;
      tmp = tmp2_elvis_lhs == null ? new InvokeOnCompletion(handler) : tmp2_elvis_lhs;
    }
    var node = tmp;
    node.bm_1 = $this;
    return node;
  }
  function addLastAtomic($this, expect, list, node) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIf' call
      // Inline function 'kotlinx.coroutines.JobSupport.addLastAtomic.<anonymous>' call
      if (!($this.wg() === expect)) {
        tmp$ret$1 = false;
        break $l$block;
      }
      list.wl(node);
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.nl_1 ? list : new InactiveNodeList(list);
    $this.wf_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.em(new NodeList());
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var list = state.tl_1;
    $this.wf_1.atomicfu$compareAndSet(state, list);
  }
  function cancelMakeCompleting($this, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.cancelMakeCompleting.<anonymous>' call
      var state = $this.wg();
      var tmp;
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        tmp = true;
      } else {
        var tmp_0;
        if (state instanceof Finishing) {
          tmp_0 = state.mm();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        return get_COMPLETING_ALREADY();
      }
      var proposedUpdate = new CompletedExceptionally(createCauseException($this, cause));
      var finalState = tryMakeCompleting($this, state, proposedUpdate);
      if (!(finalState === get_COMPLETING_RETRY()))
        return finalState;
    }
  }
  function createCauseException($this, cause) {
    var tmp;
    if (cause == null ? true : cause instanceof Error) {
      var tmp_0;
      if (cause == null) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        tmp_0 = new JobCancellationException(null == null ? $this.gg() : null, null, $this);
      } else {
        tmp_0 = cause;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).nh();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>' call
        var state = $this.wg();
        if (state instanceof Finishing) {
          // Inline function 'kotlinx.coroutines.internal.synchronized' call
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
          if (state.nm())
            return get_TOO_LATE_TO_CANCEL();
          var wasCancelling = state.jm();
          if (!(cause == null) ? true : !wasCancelling) {
            var tmp0_elvis_lhs = causeExceptionCache;
            var tmp;
            if (tmp0_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var this_0 = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
              causeExceptionCache = this_0;
              tmp = this_0;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            var causeException = tmp;
            state.om(causeException);
          }
          // Inline function 'kotlin.takeIf' call
          var this_1 = state.pm();
          // Inline function 'kotlin.contracts.contract' call
          var tmp_0;
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
          if (!wasCancelling) {
            tmp_0 = this_1;
          } else {
            tmp_0 = null;
          }
          var notifyRootCause = tmp_0;
          if (notifyRootCause == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            notifyCancelling($this, state.fm_1, notifyRootCause);
          }
          return get_COMPLETING_ALREADY();
        } else {
          if (!(state == null) ? isInterface(state, Incomplete) : false) {
            var tmp2_elvis_lhs = causeExceptionCache;
            var tmp_1;
            if (tmp2_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var this_2 = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
              causeExceptionCache = this_2;
              tmp_1 = this_2;
            } else {
              tmp_1 = tmp2_elvis_lhs;
            }
            var causeException_0 = tmp_1;
            if (state.dg()) {
              if (tryMakeCancelling($this, state, causeException_0))
                return get_COMPLETING_ALREADY();
            } else {
              var finalState = tryMakeCompleting($this, state, new CompletedExceptionally(causeException_0));
              if (finalState === get_COMPLETING_ALREADY()) {
                // Inline function 'kotlin.error' call
                var message = 'Cannot happen in ' + toString_0(state);
                throw IllegalStateException_init_$Create$(toString(message));
              } else if (finalState === get_COMPLETING_RETRY()) {
                break $l$block;
              } else
                return finalState;
            }
          } else {
            return get_TOO_LATE_TO_CANCEL();
          }
        }
      }
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp1_elvis_lhs = state.ol();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp_0;
      if (state instanceof Empty) {
        tmp_0 = new NodeList();
      } else {
        if (state instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          var message = 'State should have list: ' + state;
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this.wf_1.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return get_COMPLETING_ALREADY();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      tmp_1 = state instanceof JobNode;
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }
      return get_COMPLETING_RETRY();
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return get_COMPLETING_RETRY();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause = null;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    if (finishing.mm())
      return get_COMPLETING_ALREADY();
    finishing.qm(true);
    if (!(finishing === state)) {
      if (!$this.wf_1.atomicfu$compareAndSet(state, finishing))
        return get_COMPLETING_RETRY();
    }
    // Inline function 'kotlinx.coroutines.assert' call
    var wasCancelling = finishing.jm();
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      finishing.om(tmp0_safe_receiver.ig_1);
    }
    // Inline function 'kotlin.takeIf' call
    var this_0 = finishing.pm();
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    // Inline function 'kotlinx.coroutines.JobSupport.tryMakeCompletingSlowPath.<anonymous>.<anonymous>' call
    if (!wasCancelling) {
      tmp_0 = this_0;
    } else {
      tmp_0 = null;
    }
    notifyRootCause = tmp_0;
    var tmp2_safe_receiver = notifyRootCause;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      notifyCancelling($this, list, tmp2_safe_receiver);
    }
    var child = firstChild($this, state);
    if (!(child == null) ? tryWaitForChild($this, finishing, child, proposedUpdate) : false)
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js(_this__u8e3s4, $this) {
    var tmp0_safe_receiver = _this__u8e3s4 instanceof CompletedExceptionally ? _this__u8e3s4 : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ig_1;
  }
  function firstChild($this, state) {
    var tmp1_elvis_lhs = state instanceof ChildHandleNode ? state : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = state.ol();
      tmp = tmp0_safe_receiver == null ? null : nextChild(tmp0_safe_receiver, $this);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    $l$1: do {
      $l$0: do {
        var tmp = child_0.vm_1;
        // Inline function 'kotlinx.coroutines.asHandler' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0);
        var handle = tmp.fh(VOID, false, tmp$ret$1);
        if (!(handle === NonDisposableHandle_instance))
          return true;
        var tmp0_elvis_lhs = nextChild(child_0, $this_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return false;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var nextChild_0 = tmp_0;
        $this_0 = $this_0;
        state_0 = state_0;
        child_0 = nextChild_0;
        proposedUpdate_0 = proposedUpdate_0;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    var waitChild = nextChild(lastChild, $this);
    if (!(waitChild == null) ? tryWaitForChild($this, state, waitChild, proposedUpdate) : false)
      return Unit_instance;
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.ng(finalState);
  }
  function nextChild(_this__u8e3s4, $this) {
    var cur = _this__u8e3s4;
    $l$loop: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      if (!cur.vl_1) {
        break $l$loop;
      }
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      cur = cur.ul_1;
    }
    $l$loop_0: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
      cur = cur.tl_1;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      if (cur.vl_1)
        continue $l$loop_0;
      if (cur instanceof ChildHandleNode)
        return cur;
      if (cur instanceof NodeList)
        return null;
    }
  }
  function stateString($this, state) {
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.jm() ? 'Cancelling' : state.mm() ? 'Completing' : 'Active';
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        tmp = state.dg() ? 'Active' : 'New';
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    this.fm_1 = list;
    this.gm_1 = atomic$boolean$1(isCompleting);
    this.hm_1 = atomic$ref$1(rootCause);
    this.im_1 = atomic$ref$1(null);
  }
  protoOf(Finishing).ol = function () {
    return this.fm_1;
  };
  protoOf(Finishing).qm = function (value) {
    this.gm_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).mm = function () {
    return this.gm_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).wm = function (value) {
    this.hm_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).pm = function () {
    return this.hm_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).nm = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  protoOf(Finishing).jm = function () {
    return !(this.pm() == null);
  };
  protoOf(Finishing).dg = function () {
    return this.pm() == null;
  };
  protoOf(Finishing).km = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        // Inline function 'kotlin.also' call
        var this_0 = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.sealLocked.<anonymous>' call
        this_0.u(eh);
        tmp = this_0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          var message = 'State is ' + toString_0(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    var list = tmp;
    var rootCause = this.pm();
    if (rootCause == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      list.t1(0, rootCause);
    }
    if (!(proposedException == null) ? !equals(proposedException, rootCause) : false) {
      list.u(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  protoOf(Finishing).om = function (exception) {
    var rootCause = this.pm();
    if (rootCause == null) {
      this.wm(exception);
      return Unit_instance;
    }
    if (exception === rootCause)
      return Unit_instance;
    var eh = _get_exceptionsHolder__nhszp(this);
    if (eh == null) {
      _set_exceptionsHolder__tqm22h(this, exception);
    } else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_instance;
        // Inline function 'kotlin.apply' call
        var this_0 = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.addExceptionLocked.<anonymous>' call
        this_0.u(eh);
        this_0.u(exception);
        _set_exceptionsHolder__tqm22h(this, this_0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).u(exception);
        } else {
          var message = 'State is ' + toString_0(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
  };
  protoOf(Finishing).toString = function () {
    return 'Finishing[cancelling=' + this.jm() + ', completing=' + this.mm() + ', rootCause=' + this.pm() + ', exceptions=' + toString_0(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.fm_1 + ']';
  };
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.bn_1 = parent;
    this.cn_1 = state;
    this.dn_1 = child;
    this.en_1 = proposedUpdate;
  }
  protoOf(ChildCompletion).ik = function (cause) {
    continueCompleting(this.bn_1, this.cn_1, this.dn_1, this.en_1);
  };
  protoOf(ChildCompletion).invoke = function (cause) {
    return this.ik(cause);
  };
  function JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation) {
    this.nn_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JobSupport$_get_children_$slambda_k839f8).xn = function ($this$sequence, $completion) {
    var tmp = this.yn($this$sequence, $completion);
    tmp.sb_1 = Unit_instance;
    tmp.tb_1 = null;
    return tmp.cc();
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).oc = function (p1, $completion) {
    return this.xn(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).cc = function () {
    var suspendResult = this.sb_1;
    $sm: do
      try {
        var tmp = this.qb_1;
        switch (tmp) {
          case 0:
            this.rb_1 = 8;
            this.pn_1 = this.nn_1.wg();
            var tmp_0 = this.pn_1;
            if (tmp_0 instanceof ChildHandleNode) {
              this.qb_1 = 6;
              suspendResult = this.on_1.md(this.pn_1.vm_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.pn_1;
              if (!(tmp_1 == null) ? isInterface(tmp_1, Incomplete) : false) {
                this.qn_1 = this.pn_1.ol();
                if (this.qn_1 == null) {
                  this.rn_1 = null;
                  this.qb_1 = 5;
                  continue $sm;
                } else {
                  var tmp_2 = this;
                  tmp_2.sn_1 = this.qn_1;
                  var tmp_3 = this;
                  tmp_3.tn_1 = this.sn_1;
                  var tmp_4 = this;
                  tmp_4.un_1 = this.tn_1;
                  this.vn_1 = this.un_1.tl_1;
                  this.qb_1 = 1;
                  continue $sm;
                }
              } else {
                this.qb_1 = 7;
                continue $sm;
              }
            }

          case 1:
            if (!!equals(this.vn_1, this.un_1)) {
              this.qb_1 = 4;
              continue $sm;
            }

            var tmp_5 = this.vn_1;
            if (tmp_5 instanceof ChildHandleNode) {
              var tmp_6 = this;
              tmp_6.wn_1 = this.vn_1;
              this.qb_1 = 2;
              suspendResult = this.on_1.md(this.wn_1.vm_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.qb_1 = 3;
              continue $sm;
            }

          case 2:
            this.qb_1 = 3;
            continue $sm;
          case 3:
            this.vn_1 = this.vn_1.tl_1;
            this.qb_1 = 1;
            continue $sm;
          case 4:
            this.rn_1 = Unit_instance;
            this.qb_1 = 5;
            continue $sm;
          case 5:
            this.qb_1 = 7;
            continue $sm;
          case 6:
            this.qb_1 = 7;
            continue $sm;
          case 7:
            return Unit_instance;
          case 8:
            throw this.tb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.rb_1 === 8) {
          throw e;
        } else {
          this.qb_1 = this.rb_1;
          this.tb_1 = e;
        }
      }
     while (true);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).yn = function ($this$sequence, completion) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this.nn_1, completion);
    i.on_1 = $this$sequence;
    return i;
  };
  function JobSupport$_get_children_$slambda_k839f8_0(this$0, resultContinuation) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.xn($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function JobSupport(active) {
    this.wf_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this.xf_1 = atomic$ref$1(null);
  }
  protoOf(JobSupport).l2 = function () {
    return Key_instance_2;
  };
  protoOf(JobSupport).ug = function (value) {
    this.xf_1.kotlinx$atomicfu$value = value;
  };
  protoOf(JobSupport).vg = function () {
    return this.xf_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).yf = function (parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.ug(NonDisposableHandle_instance);
      return Unit_instance;
    }
    parent.yg();
    var handle = parent.oh(this);
    this.ug(handle);
    if (this.xg()) {
      handle.nj();
      this.ug(NonDisposableHandle_instance);
    }
  };
  protoOf(JobSupport).wg = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.wf_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.<get-state>.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (!(state instanceof OpDescriptor))
        return state;
      state.zn(this);
    }
  };
  protoOf(JobSupport).dg = function () {
    var state = this.wg();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.dg();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(JobSupport).xg = function () {
    var tmp = this.wg();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  protoOf(JobSupport).yg = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.start.<anonymous>' call
      var state = this.wg();
      var tmp0_subject = startInternal(this, state);
      if (tmp0_subject === 0)
        return false;
      else if (tmp0_subject === 1)
        return true;
    }
  };
  protoOf(JobSupport).zg = function () {
  };
  protoOf(JobSupport).ah = function () {
    var state = this.wg();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.pm();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.bh(tmp0_safe_receiver, get_classSimpleName(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var message = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var message_0 = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString(message_0));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.ch(state.ig_1);
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  protoOf(JobSupport).bh = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(message == null ? this.gg() : message, _this__u8e3s4, this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(JobSupport).ch = function (_this__u8e3s4, message, $super) {
    message = message === VOID ? null : message;
    return $super === VOID ? this.bh(_this__u8e3s4, message) : $super.bh.call(this, _this__u8e3s4, message);
  };
  protoOf(JobSupport).dh = function (handler) {
    return this.eh(false, true, handler);
  };
  protoOf(JobSupport).eh = function (onCancelling, invokeImmediately, handler) {
    var node = makeNode(this, handler, onCancelling);
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.invokeOnCompletion.<anonymous>' call
        var state = this.wg();
        if (state instanceof Empty) {
          if (state.nl_1) {
            if (this.wf_1.atomicfu$compareAndSet(state, node))
              return node;
          } else {
            promoteEmptyToNodeList(this, state);
          }
        } else {
          if (!(state == null) ? isInterface(state, Incomplete) : false) {
            var list = state.ol();
            if (list == null) {
              promoteSingleToNodeList(this, state instanceof JobNode ? state : THROW_CCE());
            } else {
              var rootCause = null;
              var handle = NonDisposableHandle_instance;
              var tmp;
              if (onCancelling) {
                tmp = state instanceof Finishing;
              } else {
                tmp = false;
              }
              if (tmp) {
                // Inline function 'kotlinx.coroutines.internal.synchronized' call
                rootCause = state.pm();
                var tmp_0;
                var tmp_1;
                if (rootCause == null) {
                  tmp_1 = true;
                } else {
                  var tmp_2;
                  // Inline function 'kotlinx.coroutines.isHandlerOf' call
                  if (handler instanceof ChildHandleNode) {
                    tmp_2 = !state.mm();
                  } else {
                    tmp_2 = false;
                  }
                  tmp_1 = tmp_2;
                }
                if (tmp_1) {
                  if (!addLastAtomic(this, state, list, node)) {
                    break $l$block;
                  }
                  if (rootCause == null)
                    return node;
                  handle = node;
                  tmp_0 = Unit_instance;
                }
              }
              if (!(rootCause == null)) {
                if (invokeImmediately) {
                  invokeIt(handler, rootCause);
                }
                return handle;
              } else {
                if (addLastAtomic(this, state, list, node))
                  return node;
              }
            }
          } else {
            if (invokeImmediately) {
              var tmp1_safe_receiver = state instanceof CompletedExceptionally ? state : null;
              invokeIt(handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ig_1);
            }
            return NonDisposableHandle_instance;
          }
        }
      }
    }
  };
  protoOf(JobSupport).gh = function (node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.removeNode.<anonymous>' call
      var state = this.wg();
      if (state instanceof JobNode) {
        if (!(state === node))
          return Unit_instance;
        if (this.wf_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
          return Unit_instance;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          if (!(state.ol() == null)) {
            node.dm();
          }
          return Unit_instance;
        } else {
          return Unit_instance;
        }
      }
    }
  };
  protoOf(JobSupport).hh = function () {
    return false;
  };
  protoOf(JobSupport).ih = function (cause) {
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.gg() : null, null, this);
    } else {
      tmp = cause;
    }
    this.jh(tmp);
  };
  protoOf(JobSupport).gg = function () {
    return 'Job was cancelled';
  };
  protoOf(JobSupport).jh = function (cause) {
    this.mh(cause);
  };
  protoOf(JobSupport).kh = function (parentJob) {
    this.mh(parentJob);
  };
  protoOf(JobSupport).lh = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.mh(cause) ? this.rh() : false;
  };
  protoOf(JobSupport).mh = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.hh()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === get_COMPLETING_WAITING_CHILDREN())
        return true;
    }
    if (finalState === get_COMPLETING_ALREADY()) {
      finalState = makeCancelling(this, cause);
    }
    var tmp;
    if (finalState === get_COMPLETING_ALREADY()) {
      tmp = true;
    } else if (finalState === get_COMPLETING_WAITING_CHILDREN()) {
      tmp = true;
    } else if (finalState === get_TOO_LATE_TO_CANCEL()) {
      tmp = false;
    } else {
      this.ng(finalState);
      tmp = true;
    }
    return tmp;
  };
  protoOf(JobSupport).nh = function () {
    var state = this.wg();
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.pm();
    } else {
      if (state instanceof CompletedExceptionally) {
        tmp = state.ig_1;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          var message = 'Cannot be cancelling child in this state: ' + toString_0(state);
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          tmp = null;
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  protoOf(JobSupport).lg = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompletingOnce.<anonymous>' call
        var state = this.wg();
        var finalState = tryMakeCompleting(this, state, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          throw IllegalStateException_init_$Create$_0('Job ' + this + ' is already complete or completing, ' + ('but is being completed with ' + toString_0(proposedUpdate)), _get_exceptionOrNull__b3j7js(proposedUpdate, this));
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else
          return finalState;
      }
    }
  };
  protoOf(JobSupport).ml = function () {
    return sequence(JobSupport$_get_children_$slambda_k839f8_0(this, null));
  };
  protoOf(JobSupport).oh = function (child) {
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new ChildHandleNode(child);
    var tmp = this.fh(true, VOID, tmp$ret$1);
    return isInterface(tmp, ChildHandle) ? tmp : THROW_CCE();
  };
  protoOf(JobSupport).og = function (exception) {
    throw exception;
  };
  protoOf(JobSupport).ph = function (cause) {
  };
  protoOf(JobSupport).qh = function () {
    return false;
  };
  protoOf(JobSupport).rh = function () {
    return true;
  };
  protoOf(JobSupport).sh = function (exception) {
    return false;
  };
  protoOf(JobSupport).hg = function (state) {
  };
  protoOf(JobSupport).ng = function (state) {
  };
  protoOf(JobSupport).toString = function () {
    return this.th() + '@' + get_hexAddress(this);
  };
  protoOf(JobSupport).th = function () {
    return this.pg() + '{' + stateString(this, this.wg()) + '}';
  };
  protoOf(JobSupport).pg = function () {
    return get_classSimpleName(this);
  };
  function boxIncomplete(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp;
    if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function JobCancellingNode() {
    JobNode.call(this);
  }
  function InactiveNodeList(list) {
    this.lm_1 = list;
  }
  protoOf(InactiveNodeList).ol = function () {
    return this.lm_1;
  };
  protoOf(InactiveNodeList).dg = function () {
    return false;
  };
  protoOf(InactiveNodeList).toString = function () {
    return get_DEBUG() ? this.lm_1.sl('New') : anyToString(this);
  };
  function ChildHandleNode(childJob) {
    JobCancellingNode.call(this);
    this.vm_1 = childJob;
  }
  protoOf(ChildHandleNode).ik = function (cause) {
    return this.vm_1.kh(this.cm());
  };
  protoOf(ChildHandleNode).invoke = function (cause) {
    return this.ik(cause);
  };
  protoOf(ChildHandleNode).lh = function (cause) {
    return this.cm().lh(cause);
  };
  function InvokeOnCancelling(handler) {
    JobCancellingNode.call(this);
    this.eo_1 = handler;
    this.fo_1 = atomic$int$1(0);
  }
  protoOf(InvokeOnCancelling).ik = function (cause) {
    if (this.fo_1.atomicfu$compareAndSet(0, 1))
      this.eo_1(cause);
  };
  protoOf(InvokeOnCancelling).invoke = function (cause) {
    return this.ik(cause);
  };
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.ko_1 = handler;
  }
  protoOf(InvokeOnCompletion).ik = function (cause) {
    return this.ko_1(cause);
  };
  protoOf(InvokeOnCompletion).invoke = function (cause) {
    return this.ik(cause);
  };
  function unboxState(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.lo_1;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function IncompleteStateBox(state) {
    this.lo_1 = state;
  }
  function ChildContinuation(child) {
    JobCancellingNode.call(this);
    this.qo_1 = child;
  }
  protoOf(ChildContinuation).ik = function (cause) {
    this.qo_1.zj(this.qo_1.ak(this.cm()));
  };
  protoOf(ChildContinuation).invoke = function (cause) {
    return this.ik(cause);
  };
  function handlesException($this) {
    var tmp = $this.vg();
    var tmp0_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.cm();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob.rh())
        return true;
      var tmp_1 = parentJob.vg();
      var tmp2_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.cm();
      var tmp_2;
      if (tmp3_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp3_elvis_lhs;
      }
      parentJob = tmp_2;
    }
  }
  function JobImpl(parent) {
    JobSupport.call(this, true);
    this.yf(parent);
    this.to_1 = handlesException(this);
  }
  protoOf(JobImpl).hh = function () {
    return true;
  };
  protoOf(JobImpl).rh = function () {
    return this.to_1;
  };
  var properties_initialized_JobSupport_kt_5iq8a4;
  function _init_properties_JobSupport_kt__68f172() {
    if (!properties_initialized_JobSupport_kt_5iq8a4) {
      properties_initialized_JobSupport_kt_5iq8a4 = true;
      COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
      COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
      COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
      TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
      SEALED = new Symbol('SEALED');
      EMPTY_NEW = new Empty(false);
      EMPTY_ACTIVE = new Empty(true);
    }
  }
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  protoOf(MainCoroutineDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.wo();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  protoOf(MainCoroutineDispatcher).wo = function () {
    var main = Dispatchers_getInstance().bp();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.vo();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  function SupervisorJob(parent) {
    parent = parent === VOID ? null : parent;
    return new SupervisorJobImpl(parent);
  }
  function SupervisorJobImpl(parent) {
    JobImpl.call(this, parent);
  }
  protoOf(SupervisorJobImpl).lh = function (cause) {
    return false;
  };
  function TimeoutCancellationException() {
  }
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  protoOf(Unconfined).mk = function (context) {
    return false;
  };
  protoOf(Unconfined).nk = function (context, block) {
    var yieldContext = context.xb(Key_instance_3);
    if (!(yieldContext == null)) {
      yieldContext.hp_1 = true;
      return Unit_instance;
    }
    throw UnsupportedOperationException_init_$Create$('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  protoOf(Unconfined).toString = function () {
    return 'Dispatchers.Unconfined';
  };
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_2() {
  }
  var Key_instance_3;
  function Key_getInstance_2() {
    return Key_instance_3;
  }
  function get_NONE() {
    _init_properties_StateFlow_kt__eu9yi5();
    return NONE;
  }
  var NONE;
  function get_PENDING() {
    _init_properties_StateFlow_kt__eu9yi5();
    return PENDING;
  }
  var PENDING;
  function MutableStateFlow(value) {
    _init_properties_StateFlow_kt__eu9yi5();
    return new StateFlowImpl(value == null ? get_NULL() : value);
  }
  function updateState($this, expectedState, newState) {
    var curSequence = 0;
    var curSlots = $this.ip_1;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var oldState = $this.qp_1.kotlinx$atomicfu$value;
    if (!(expectedState == null) ? !equals(oldState, expectedState) : false)
      return false;
    if (equals(oldState, newState))
      return true;
    $this.qp_1.kotlinx$atomicfu$value = newState;
    curSequence = $this.rp_1;
    if ((curSequence & 1) === 0) {
      curSequence = curSequence + 1 | 0;
      $this.rp_1 = curSequence;
    } else {
      $this.rp_1 = curSequence + 2 | 0;
      return true;
    }
    curSlots = $this.ip_1;
    while (true) {
      var tmp0_safe_receiver = curSlots;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp0_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.flow.StateFlowImpl.updateState.<anonymous>' call
          if (element == null)
            null;
          else {
            element.tp();
          }
        }
      }
      // Inline function 'kotlinx.coroutines.internal.synchronized' call
      if ($this.rp_1 === curSequence) {
        $this.rp_1 = curSequence + 1 | 0;
        return true;
      }
      curSequence = $this.rp_1;
      curSlots = $this.ip_1;
    }
  }
  function StateFlowImpl(initialState) {
    AbstractSharedFlow.call(this);
    this.qp_1 = atomic$ref$1(initialState);
    this.rp_1 = 0;
  }
  protoOf(StateFlowImpl).up = function (value) {
    updateState(this, null, value == null ? get_NULL() : value);
  };
  protoOf(StateFlowImpl).m2 = function () {
    // Inline function 'kotlinx.coroutines.internal.Symbol.unbox' call
    var this_0 = get_NULL();
    var value = this.qp_1.kotlinx$atomicfu$value;
    var tmp;
    if (value === this_0) {
      tmp = (null == null ? true : !(null == null)) ? null : THROW_CCE();
    } else {
      tmp = (value == null ? true : !(value == null)) ? value : THROW_CCE();
    }
    return tmp;
  };
  protoOf(StateFlowImpl).vp = function (expect, update) {
    var tmp = expect == null ? get_NULL() : expect;
    return updateState(this, tmp, update == null ? get_NULL() : update);
  };
  var properties_initialized_StateFlow_kt_nsqikx;
  function _init_properties_StateFlow_kt__eu9yi5() {
    if (!properties_initialized_StateFlow_kt_nsqikx) {
      properties_initialized_StateFlow_kt_nsqikx = true;
      NONE = new Symbol('NONE');
      PENDING = new Symbol('PENDING');
    }
  }
  function AbstractSharedFlow() {
    this.ip_1 = null;
    this.jp_1 = 0;
    this.kp_1 = 0;
    this.lp_1 = null;
  }
  function get_NULL() {
    _init_properties_NullSurrogate_kt__n2yti9();
    return NULL;
  }
  var NULL;
  var UNINITIALIZED;
  var DONE;
  var properties_initialized_NullSurrogate_kt_39v8bl;
  function _init_properties_NullSurrogate_kt__n2yti9() {
    if (!properties_initialized_NullSurrogate_kt_39v8bl) {
      properties_initialized_NullSurrogate_kt_39v8bl = true;
      NULL = new Symbol('NULL');
      UNINITIALIZED = new Symbol('UNINITIALIZED');
      DONE = new Symbol('DONE');
    }
  }
  function ensureCapacity($this) {
    var currentSize = $this.vk_1.length;
    var newCapacity = currentSize << 1;
    // Inline function 'kotlin.arrayOfNulls' call
    var newElements = fillArrayVal(Array(newCapacity), null);
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = $this.vk_1;
    var startIndex = $this.wk_1;
    var endIndex = this_0.length;
    arrayCopy(this_0, newElements, 0, startIndex, endIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = $this.vk_1;
    var destinationOffset = $this.vk_1.length - $this.wk_1 | 0;
    var endIndex_0 = $this.wk_1;
    arrayCopy(this_1, newElements, destinationOffset, 0, endIndex_0);
    $this.vk_1 = newElements;
    $this.wk_1 = 0;
    $this.xk_1 = currentSize;
  }
  function ArrayQueue() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.vk_1 = fillArrayVal(Array(16), null);
    this.wk_1 = 0;
    this.xk_1 = 0;
  }
  protoOf(ArrayQueue).dl = function () {
    return this.wk_1 === this.xk_1;
  };
  protoOf(ArrayQueue).al = function (element) {
    this.vk_1[this.xk_1] = element;
    this.xk_1 = (this.xk_1 + 1 | 0) & (this.vk_1.length - 1 | 0);
    if (this.xk_1 === this.wk_1) {
      ensureCapacity(this);
    }
  };
  protoOf(ArrayQueue).yk = function () {
    if (this.wk_1 === this.xk_1)
      return null;
    var element = this.vk_1[this.wk_1];
    this.vk_1[this.wk_1] = null;
    this.wk_1 = (this.wk_1 + 1 | 0) & (this.vk_1.length - 1 | 0);
    return !(element == null) ? element : THROW_CCE();
  };
  function OpDescriptor() {
  }
  function get_UNDEFINED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return UNDEFINED;
  }
  var UNDEFINED;
  function get_REUSABLE_CLAIMED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return REUSABLE_CLAIMED;
  }
  var REUSABLE_CLAIMED;
  function resumeCancellableWith(_this__u8e3s4, result, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp;
    if (_this__u8e3s4 instanceof DispatchedContinuation) {
      var state = toState_0(result, onCancellation);
      var tmp_0;
      if (_this__u8e3s4.wi_1.mk(_this__u8e3s4.o6())) {
        _this__u8e3s4.yi_1 = state;
        _this__u8e3s4.cj_1 = get_MODE_CANCELLABLE();
        _this__u8e3s4.wi_1.nk(_this__u8e3s4.o6(), _this__u8e3s4);
        tmp_0 = Unit_instance;
      } else {
        $l$block: {
          // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
          var mode = get_MODE_CANCELLABLE();
          // Inline function 'kotlinx.coroutines.assert' call
          var eventLoop = ThreadLocalEventLoop_getInstance().il();
          if (false ? eventLoop.cl() : false) {
            break $l$block;
          }
          var tmp_1;
          if (eventLoop.bl()) {
            _this__u8e3s4.yi_1 = state;
            _this__u8e3s4.cj_1 = mode;
            eventLoop.zk(_this__u8e3s4);
            tmp_1 = true;
          } else {
            // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
            eventLoop.el(true);
            try {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith.<anonymous>' call
              var tmp$ret$3;
              $l$block_0: {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
                var job = _this__u8e3s4.o6().xb(Key_instance_2);
                if (!(job == null) ? !job.dg() : false) {
                  var cause = job.ah();
                  _this__u8e3s4.pj(state, cause);
                  // Inline function 'kotlin.coroutines.resumeWithException' call
                  // Inline function 'kotlin.Companion.failure' call
                  var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
                  _this__u8e3s4.p6(tmp$ret$1);
                  tmp$ret$3 = true;
                  break $l$block_0;
                }
                tmp$ret$3 = false;
              }
              if (!tmp$ret$3) {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
                // Inline function 'kotlinx.coroutines.withContinuationContext' call
                _this__u8e3s4.xi_1;
                _this__u8e3s4.zi_1;
                _this__u8e3s4.xi_1.p6(result);
              }
              $l$loop: while (eventLoop.uk()) {
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var e = $p;
                _this__u8e3s4.fk(e, null);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.fl(true);
            }
            tmp_1 = false;
          }
        }
        tmp_0 = Unit_instance;
      }
      tmp = tmp_0;
    } else {
      _this__u8e3s4.p6(result);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this.aj_1.kotlinx$atomicfu$value;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, get_MODE_UNINITIALIZED());
    this.wi_1 = dispatcher;
    this.xi_1 = continuation;
    this.yi_1 = get_UNDEFINED();
    this.zi_1 = threadContextElements(this.o6());
    this.aj_1 = atomic$ref$1(null);
  }
  protoOf(DispatchedContinuation).o6 = function () {
    return this.xi_1.o6();
  };
  protoOf(DispatchedContinuation).bj = function () {
    return !(this.aj_1.kotlinx$atomicfu$value == null);
  };
  protoOf(DispatchedContinuation).wp = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.aj_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.awaitReusability.<anonymous>' call
      if (!(this_0.kotlinx$atomicfu$value === get_REUSABLE_CLAIMED()))
        return Unit_instance;
    }
  };
  protoOf(DispatchedContinuation).ok = function () {
    this.wp();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.fj();
    }
  };
  protoOf(DispatchedContinuation).ej = function (continuation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.aj_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.tryReleaseClaimedContinuation.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (state === get_REUSABLE_CLAIMED()) {
        if (this.aj_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
          return null;
      } else {
        if (state instanceof Error) {
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          if (!this.aj_1.atomicfu$compareAndSet(state, null)) {
            // Inline function 'kotlin.require.<anonymous>' call
            var message = 'Failed requirement.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          }
          return state;
        } else {
          var message_0 = 'Inconsistent state ' + toString_0(state);
          throw IllegalStateException_init_$Create$(toString(message_0));
        }
      }
    }
  };
  protoOf(DispatchedContinuation).dj = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.aj_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.postponeCancellation.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (equals(state, get_REUSABLE_CLAIMED())) {
        if (this.aj_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
          return true;
      } else {
        if (state instanceof Error)
          return true;
        else {
          if (this.aj_1.atomicfu$compareAndSet(state, null))
            return false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).oj = function () {
    var state = this.yi_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this.yi_1 = get_UNDEFINED();
    return state;
  };
  protoOf(DispatchedContinuation).lj = function () {
    return this;
  };
  protoOf(DispatchedContinuation).p6 = function (result) {
    var context = this.xi_1.o6();
    var state = toState_0(result);
    if (this.wi_1.mk(context)) {
      this.yi_1 = state;
      this.cj_1 = get_MODE_ATOMIC();
      this.wi_1.nk(context, this);
    } else {
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        var mode = get_MODE_ATOMIC();
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().il();
        if (false ? eventLoop.cl() : false) {
          break $l$block;
        }
        var tmp;
        if (eventLoop.bl()) {
          this.yi_1 = state;
          this.cj_1 = mode;
          eventLoop.zk(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.el(true);
          try {
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeWith.<anonymous>' call
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            this.o6();
            this.zi_1;
            this.xi_1.p6(result);
            $l$loop: while (eventLoop.uk()) {
            }
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              this.fk(e, null);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.fl(true);
          }
          tmp = false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).pj = function (takenState, cause) {
    if (takenState instanceof CompletedWithCancellation) {
      takenState.kk_1(cause);
    }
  };
  protoOf(DispatchedContinuation).toString = function () {
    return 'DispatchedContinuation[' + this.wi_1 + ', ' + toDebugString(this.xi_1) + ']';
  };
  var properties_initialized_DispatchedContinuation_kt_2siadq;
  function _init_properties_DispatchedContinuation_kt__tnmqc0() {
    if (!properties_initialized_DispatchedContinuation_kt_2siadq) {
      properties_initialized_DispatchedContinuation_kt_2siadq = true;
      UNDEFINED = new Symbol('UNDEFINED');
      REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
    }
  }
  function get_MODE_CANCELLABLE() {
    return MODE_CANCELLABLE;
  }
  var MODE_CANCELLABLE;
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.cj_1 = resumeMode;
  }
  protoOf(DispatchedTask).pj = function (takenState, cause) {
  };
  protoOf(DispatchedTask).bk = function (state) {
    return (state == null ? true : !(state == null)) ? state : THROW_CCE();
  };
  protoOf(DispatchedTask).dk = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ig_1;
  };
  protoOf(DispatchedTask).ek = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    get_taskContext(this);
    var taskContext = Unit_instance;
    var fatalException = null;
    try {
      var tmp = this.lj();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.xi_1;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      delegate.zi_1;
      var context = continuation.o6();
      var state = this.oj();
      var exception = this.dk(state);
      var job = (exception == null ? get_isCancellableMode(this.cj_1) : false) ? context.xb(Key_instance_2) : null;
      var tmp_0;
      if (!(job == null) ? !job.dg() : false) {
        var cause = job.ah();
        this.pj(state, cause);
        // Inline function 'kotlin.Companion.failure' call
        var exception_0 = recoverStackTrace(cause, continuation);
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception_0));
        continuation.p6(tmp$ret$0);
        tmp_0 = Unit_instance;
      } else {
        var tmp_1;
        if (!(exception == null)) {
          // Inline function 'kotlin.coroutines.resumeWithException' call
          // Inline function 'kotlin.Companion.failure' call
          var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
          continuation.p6(tmp$ret$1);
          tmp_1 = Unit_instance;
        } else {
          // Inline function 'kotlin.coroutines.resume' call
          // Inline function 'kotlin.Companion.success' call
          var value = this.bk(state);
          var tmp$ret$3 = _Result___init__impl__xyqfz8(value);
          continuation.p6(tmp$ret$3);
          tmp_1 = Unit_instance;
        }
        tmp_0 = tmp_1;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        fatalException = e;
      } else {
        throw $p;
      }
    }
    finally {
      // Inline function 'kotlin.runCatching' call
      var tmp_2;
      try {
        // Inline function 'kotlin.Companion.success' call
        // Inline function 'kotlinx.coroutines.DispatchedTask.run.<anonymous>' call
        // Inline function 'kotlinx.coroutines.afterTask' call
        tmp_2 = _Result___init__impl__xyqfz8(Unit_instance);
      } catch ($p) {
        var tmp_3;
        if ($p instanceof Error) {
          var e_0 = $p;
          // Inline function 'kotlin.Companion.failure' call
          tmp_3 = _Result___init__impl__xyqfz8(createFailure(e_0));
        } else {
          throw $p;
        }
        tmp_2 = tmp_3;
      }
      var result = tmp_2;
      this.fk(fatalException, Result__exceptionOrNull_impl_p6xea9(result));
    }
  };
  protoOf(DispatchedTask).fk = function (exception, finallyException) {
    if (exception === null ? finallyException === null : false)
      return Unit_instance;
    if (!(exception === null) ? !(finallyException === null) : false) {
      // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
    }
    var cause = exception == null ? finallyException : exception;
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + this + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this.lj().o6(), reason);
  };
  function get_MODE_UNINITIALIZED() {
    return MODE_UNINITIALIZED;
  }
  var MODE_UNINITIALIZED;
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 ? true : _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    // Inline function 'kotlinx.coroutines.assert' call
    var delegate = _this__u8e3s4.lj();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.cj_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.wi_1;
      var context = delegate.o6();
      if (dispatcher.mk(context)) {
        dispatcher.nk(context, _this__u8e3s4);
      } else {
        resumeUnconfined(_this__u8e3s4);
      }
    } else {
      resume(_this__u8e3s4, delegate, undispatched);
    }
  }
  function get_MODE_ATOMIC() {
    return MODE_ATOMIC;
  }
  var MODE_ATOMIC;
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().il();
    if (eventLoop.bl()) {
      eventLoop.zk(_this__u8e3s4);
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.el(true);
      try {
        // Inline function 'kotlinx.coroutines.resumeUnconfined.<anonymous>' call
        resume(_this__u8e3s4, _this__u8e3s4.lj(), true);
        $l$loop: while (eventLoop.uk()) {
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          _this__u8e3s4.fk(e, null);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.fl(true);
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.oj();
    var exception = _this__u8e3s4.dk(state);
    var tmp;
    if (!(exception == null)) {
      // Inline function 'kotlin.Companion.failure' call
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      var value = _this__u8e3s4.bk(state);
      tmp = _Result___init__impl__xyqfz8(value);
    }
    var result = tmp;
    if (undispatched) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
      var this_0 = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      this_0.xi_1;
      this_0.zi_1;
      this_0.xi_1.p6(result);
    } else {
      delegate.p6(result);
    }
  }
  function ContextScope(context) {
    this.xp_1 = context;
  }
  protoOf(ContextScope).cg = function () {
    return this.xp_1;
  };
  protoOf(ContextScope).toString = function () {
    return 'CoroutineScope(coroutineContext=' + this.xp_1 + ')';
  };
  function ScopeCoroutine(context, uCont) {
    AbstractCoroutine.call(this, context, true, true);
    this.li_1 = uCont;
  }
  protoOf(ScopeCoroutine).qh = function () {
    return true;
  };
  protoOf(ScopeCoroutine).ng = function (state) {
    resumeCancellableWith(intercepted(this.li_1), recoverResult(state, this.li_1));
  };
  protoOf(ScopeCoroutine).mg = function (state) {
    this.li_1.p6(recoverResult(state, this.li_1));
  };
  function Symbol(symbol) {
    this.yp_1 = symbol;
  }
  protoOf(Symbol).toString = function () {
    return '<' + this.yp_1 + '>';
  };
  function startCoroutineCancellable(_this__u8e3s4, receiver, completion, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWith(tmp_0, tmp$ret$0, onCancellation);
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure$accessor$paksz7(completion, e);
        tmp_1 = Unit_instance;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function dispatcherFailure(completion, e) {
    // Inline function 'kotlin.Companion.failure' call
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(e));
    completion.p6(tmp$ret$0);
    throw e;
  }
  function startCoroutineCancellable_0(_this__u8e3s4, fatalCompletion) {
    var tmp;
    try {
      var tmp_0 = intercepted(_this__u8e3s4);
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWith(tmp_0, tmp$ret$0);
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure$accessor$paksz7(fatalCompletion, e);
        tmp_1 = Unit_instance;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function dispatcherFailure$accessor$paksz7(completion, e) {
    return dispatcherFailure(completion, e);
  }
  function startUndispatchedOrReturn(_this__u8e3s4, receiver, block) {
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.intrinsics.undispatchedResult' call
      var tmp;
      try {
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturn.<anonymous>' call
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        // Inline function 'kotlin.js.asDynamic' call
        var a = block;
        tmp = typeof a === 'function' ? a(receiver, _this__u8e3s4) : block.oc(receiver, _this__u8e3s4);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          tmp_0 = new CompletedExceptionally(e);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var result = tmp;
      if (result === get_COROUTINE_SUSPENDED()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var state = _this__u8e3s4.lg(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturn.<anonymous>' call
        state.ig_1;
        if (true) {
          throw recoverStackTrace(state.ig_1, _this__u8e3s4.li_1);
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.ig_1, _this__u8e3s4.li_1);
          } else {
            tmp_2 = result;
          }
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = unboxState(state);
      }
      tmp$ret$3 = tmp_1;
    }
    return tmp$ret$3;
  }
  function startCoroutineUndispatched(_this__u8e3s4, receiver, completion) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.intrinsics.startDirect' call
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
      var actualCompletion = completion;
      var tmp;
      try {
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>' call
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        completion.o6();
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        // Inline function 'kotlin.js.asDynamic' call
        var a = _this__u8e3s4;
        tmp = typeof a === 'function' ? a(receiver, actualCompletion) : _this__u8e3s4.oc(receiver, actualCompletion);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          // Inline function 'kotlin.Companion.failure' call
          var tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure(e));
          actualCompletion.p6(tmp$ret$6);
          break $l$block;
        } else {
          throw $p;
        }
      }
      var value = tmp;
      if (!(value === get_COROUTINE_SUSPENDED())) {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var value_0 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
        var tmp$ret$9 = _Result___init__impl__xyqfz8(value_0);
        actualCompletion.p6(tmp$ret$9);
      }
    }
  }
  function CompletionHandlerBase() {
    LinkedListNode.call(this);
  }
  function invokeIt(_this__u8e3s4, cause) {
    if (typeof _this__u8e3s4 === 'function')
      _this__u8e3s4(cause);
    else {
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.invoke(cause);
    }
  }
  function CancelHandlerBase() {
  }
  function toDebugString(_this__u8e3s4) {
    return toString(_this__u8e3s4);
  }
  function createDefaultDispatcher() {
    var tmp;
    if (isJsdom()) {
      tmp = NodeDispatcher_getInstance();
    } else {
      var tmp_0;
      var tmp_1;
      if (!(typeof window === 'undefined')) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_1 = window != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = !(typeof window.addEventListener === 'undefined');
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = asCoroutineDispatcher(window);
      } else {
        if (typeof process === 'undefined' ? true : typeof process.nextTick === 'undefined') {
          tmp = SetTimeoutDispatcher_getInstance();
        } else {
          tmp = NodeDispatcher_getInstance();
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return ((((!(typeof navigator === 'undefined') ? navigator != null : false) ? navigator.userAgent != null : false) ? !(typeof navigator.userAgent === 'undefined') : false) ? !(typeof navigator.userAgent.match === 'undefined') : false) ? navigator.userAgent.match('\\bjsdom\\b') : false;
  }
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.cg().ne(context);
    return (!(combined === Dispatchers_getInstance().xo_1) ? combined.xb(Key_instance) == null : false) ? combined.ne(Dispatchers_getInstance().xo_1) : combined;
  }
  function newCoroutineContext_0(_this__u8e3s4, addedContext) {
    return _this__u8e3s4.ne(addedContext);
  }
  function UndispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
  }
  protoOf(UndispatchedCoroutine).mg = function (state) {
    return this.li_1.p6(recoverResult(state, this.li_1));
  };
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  function handleCoroutineExceptionImpl(context, exception) {
    console.error(exception);
  }
  var counter;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_classSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).x6();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function get_hexAddress(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var result = _this__u8e3s4.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.__debug_counter = result;
    }
    return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.xo_1 = createDefaultDispatcher();
    this.yo_1 = Unconfined_getInstance();
    this.zo_1 = new JsMainDispatcher(this.xo_1, false);
    this.ap_1 = null;
  }
  protoOf(Dispatchers).bp = function () {
    var tmp0_elvis_lhs = this.ap_1;
    return tmp0_elvis_lhs == null ? this.zo_1 : tmp0_elvis_lhs;
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.eq_1 = delegate;
    this.fq_1 = invokeImmediately;
    this.gq_1 = this.fq_1 ? this : new JsMainDispatcher(this.eq_1, true);
  }
  protoOf(JsMainDispatcher).vo = function () {
    return this.gq_1;
  };
  protoOf(JsMainDispatcher).mk = function (context) {
    return !this.fq_1;
  };
  protoOf(JsMainDispatcher).nk = function (context, block) {
    return this.eq_1.nk(context, block);
  };
  protoOf(JsMainDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.wo();
    return tmp0_elvis_lhs == null ? this.eq_1.toString() : tmp0_elvis_lhs;
  };
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  protoOf(UnconfinedEventLoop).nk = function (context, block) {
    unsupported();
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$(message, cause, this);
    captureStack(this, JobCancellationException);
    this.lq_1 = job;
  }
  protoOf(JobCancellationException).toString = function () {
    return protoOf(CancellationException).toString.call(this) + '; job=' + this.lq_1;
  };
  protoOf(JobCancellationException).equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = equals(other.lq_1, this.lq_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobCancellationException).hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.lq_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(NodeDispatcher).oq = function () {
    process.nextTick(this.xq_1.uq_1);
  };
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(SetTimeoutDispatcher).oq = function () {
    setTimeout(this.xq_1.uq_1, 0);
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.fr();
      return Unit_instance;
    };
  }
  function ScheduledMessageQueue($outer) {
    this.vq_1 = $outer;
    MessageQueue.call(this);
    var tmp = this;
    tmp.uq_1 = SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this);
  }
  protoOf(ScheduledMessageQueue).gr = function () {
    this.vq_1.oq();
  };
  protoOf(ScheduledMessageQueue).hr = function () {
    setTimeout(this.uq_1, 0);
  };
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.xq_1 = new ScheduledMessageQueue(this);
  }
  protoOf(SetTimeoutBasedDispatcher).nk = function (context, block) {
    this.xq_1.ir(block);
  };
  function MessageQueue() {
    ArrayQueue.call(this);
    this.dr_1 = 16;
    this.er_1 = false;
  }
  protoOf(MessageQueue).ir = function (element) {
    this.al(element);
    if (!this.er_1) {
      this.er_1 = true;
      this.gr();
    }
  };
  protoOf(MessageQueue).fr = function () {
    try {
      // Inline function 'kotlin.repeat' call
      var times = this.dr_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.MessageQueue.process.<anonymous>' call
          var tmp0_elvis_lhs = this.yk();
          var tmp;
          if (tmp0_elvis_lhs == null) {
            return Unit_instance;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var element = tmp;
          element.ek();
        }
         while (inductionVariable < times);
    }finally {
      if (this.dl()) {
        this.er_1 = false;
      } else {
        this.hr();
      }
    }
  };
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.kr_1 = window_0;
    this.lr_1 = new WindowMessageQueue(this.kr_1);
  }
  protoOf(WindowDispatcher).nk = function (context, block) {
    return this.lr_1.ir(block);
  };
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.rr_1 ? event.data == this$0.sr_1 : false) {
        event.stopPropagation();
        this$0.fr();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.fr();
      return Unit_instance;
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.rr_1 = window_0;
    this.sr_1 = 'dispatchCoroutine';
    this.rr_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  protoOf(WindowMessageQueue).gr = function () {
    var tmp = Promise.resolve(Unit_instance);
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  protoOf(WindowMessageQueue).hr = function () {
    this.rr_1.postMessage(this.sr_1, '*');
  };
  function SchedulerTask() {
  }
  function get_taskContext(_this__u8e3s4) {
    return Unit_instance;
  }
  function asCoroutineDispatcher(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_elvis_lhs = _this__u8e3s4.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new WindowDispatcher(_this__u8e3s4);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.asCoroutineDispatcher.<anonymous>' call
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.coroutineDispatcher = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  function LinkedListNode() {
    this.tl_1 = this;
    this.ul_1 = this;
    this.vl_1 = false;
  }
  protoOf(LinkedListNode).wl = function (node) {
    var prev = this.ul_1;
    node.tl_1 = this;
    node.ul_1 = prev;
    prev.tl_1 = node;
    this.ul_1 = node;
  };
  protoOf(LinkedListNode).dm = function () {
    return this.xl();
  };
  protoOf(LinkedListNode).xl = function () {
    if (this.vl_1)
      return false;
    var prev = this.ul_1;
    var next = this.tl_1;
    prev.tl_1 = next;
    next.ul_1 = prev;
    this.vl_1 = true;
    return true;
  };
  protoOf(LinkedListNode).em = function (node) {
    if (!(this.tl_1 === this))
      return false;
    this.wl(node);
    return true;
  };
  function unwrap(exception) {
    return exception;
  }
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this.jl_1 = null;
  }
  protoOf(CommonThreadLocal).kl = function () {
    var tmp = this.jl_1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(CommonThreadLocal).ll = function (value) {
    this.jl_1 = value;
  };
  //region block: post-declaration
  protoOf(JobSupport).fh = invokeOnCompletion$default;
  protoOf(JobSupport).ne = plus;
  protoOf(JobSupport).xb = get_0;
  protoOf(JobSupport).me = fold;
  protoOf(JobSupport).le = minusKey_0;
  protoOf(CancellableContinuationImpl).ni = cancel$default;
  protoOf(CoroutineDispatcher).xb = get;
  protoOf(CoroutineDispatcher).le = minusKey;
  //endregion
  //region block: init
  Active_instance = new Active();
  Key_instance_1 = new Key_0();
  Key_instance_2 = new Key_1();
  NonDisposableHandle_instance = new NonDisposableHandle();
  Key_instance_3 = new Key_2();
  MODE_CANCELLABLE = 1;
  MODE_UNINITIALIZED = -1;
  MODE_ATOMIC = 0;
  counter = 0;
  DEBUG = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CoroutineStart_UNDISPATCHED_getInstance;
  _.$_$.b = coroutineScope;
  _.$_$.c = withContext;
  _.$_$.d = Key_instance_2;
  _.$_$.e = MutableStateFlow;
  _.$_$.f = CancellableContinuationImpl;
  _.$_$.g = CoroutineDispatcher;
  _.$_$.h = CoroutineScope_0;
  _.$_$.i = CoroutineScope;
  _.$_$.j = Job_0;
  _.$_$.k = get_MODE_CANCELLABLE;
  _.$_$.l = SupervisorJob;
  _.$_$.m = cancel;
  _.$_$.n = get_job;
  _.$_$.o = launch;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js.map
