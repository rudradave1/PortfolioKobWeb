(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-runtime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-runtime'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-runtime'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'compose-multiplatform-core-runtime'.");
    }
    root['compose-multiplatform-core-runtime'] = factory(typeof this['compose-multiplatform-core-runtime'] === 'undefined' ? {} : this['compose-multiplatform-core-runtime'], this['kotlin-kotlin-stdlib'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.i6;
  var interfaceMeta = kotlin_kotlin.$_$.y5;
  var setMetadataFor = kotlin_kotlin.$_$.j6;
  var Unit_instance = kotlin_kotlin.$_$.y1;
  var toString = kotlin_kotlin.$_$.k6;
  var classMeta = kotlin_kotlin.$_$.n5;
  var VOID = kotlin_kotlin.$_$.c;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.g;
  var THROW_CCE = kotlin_kotlin.$_$.i8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var Companion_instance = kotlin_kotlin.$_$.x1;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.p1;
  var createFailure = kotlin_kotlin.$_$.o8;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.x8;
  var intercepted = kotlin_kotlin.$_$.r4;
  var get_MODE_CANCELLABLE = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var get = kotlin_kotlin.$_$.z4;
  var fold = kotlin_kotlin.$_$.y4;
  var minusKey = kotlin_kotlin.$_$.a5;
  var plus = kotlin_kotlin.$_$.c5;
  var isInterface = kotlin_kotlin.$_$.b6;
  var objectMeta = kotlin_kotlin.$_$.h6;
  var Enum = kotlin_kotlin.$_$.b8;
  var IllegalStateException = kotlin_kotlin.$_$.e8;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.a1;
  var captureStack = kotlin_kotlin.$_$.j5;
  var defineProp = kotlin_kotlin.$_$.p5;
  var equals = kotlin_kotlin.$_$.q5;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.n;
  var fill = kotlin_kotlin.$_$.c3;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.i;
  var rotateLeft = kotlin_kotlin.$_$.t8;
  var hashCode = kotlin_kotlin.$_$.w5;
  var emptyList = kotlin_kotlin.$_$.b3;
  var toMutableList = kotlin_kotlin.$_$.j4;
  var rotateRight = kotlin_kotlin.$_$.u8;
  var sortWith = kotlin_kotlin.$_$.f4;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.f;
  var to = kotlin_kotlin.$_$.z8;
  var plus_0 = kotlin_kotlin.$_$.b4;
  var compareValues = kotlin_kotlin.$_$.n4;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.z;
  var lazy = kotlin_kotlin.$_$.q8;
  var firstOrNull = kotlin_kotlin.$_$.e3;
  var compareTo = kotlin_kotlin.$_$.o5;
  var KProperty1 = kotlin_kotlin.$_$.t6;
  var getPropertyCallableRef = kotlin_kotlin.$_$.u5;
  var isArray = kotlin_kotlin.$_$.z5;
  var Set = kotlin_kotlin.$_$.o2;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.k;
  var ensureNotNull = kotlin_kotlin.$_$.p8;
  var plus_1 = kotlin_kotlin.$_$.x3;
  var Exception = kotlin_kotlin.$_$.d8;
  var Map = kotlin_kotlin.$_$.l2;
  var fillArrayVal = kotlin_kotlin.$_$.r5;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var toString_0 = kotlin_kotlin.$_$.y8;
  var Element = kotlin_kotlin.$_$.b5;
  var getStringHashCode = kotlin_kotlin.$_$.v5;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var CoroutineImpl = kotlin_kotlin.$_$.d5;
  var returnIfSuspended = kotlin_kotlin.$_$.e;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.p4;
  var throwKotlinNothingValueException = kotlin_kotlin.$_$.w8;
  var Collection = kotlin_kotlin.$_$.i2;
  var addAll = kotlin_kotlin.$_$.q2;
  var withContext = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.h;
  var toList = kotlin_kotlin.$_$.h4;
  var flatten = kotlin_kotlin.$_$.g3;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.r;
  var CancellationException = kotlin_kotlin.$_$.o4;
  var addSuppressed = kotlin_kotlin.$_$.m8;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var Long = kotlin_kotlin.$_$.f8;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.m;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var removeFirst = kotlin_kotlin.$_$.c4;
  var arrayCopy = kotlin_kotlin.$_$.r2;
  var fill_0 = kotlin_kotlin.$_$.d3;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.u1;
  var first = kotlin_kotlin.$_$.f3;
  var last = kotlin_kotlin.$_$.q3;
  var ConcurrentModificationException_init_$Create$ = kotlin_kotlin.$_$.v;
  var copyOf = kotlin_kotlin.$_$.y2;
  var joinToString = kotlin_kotlin.$_$.k3;
  var copyOf_0 = kotlin_kotlin.$_$.x2;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var AbstractList = kotlin_kotlin.$_$.a2;
  var List = kotlin_kotlin.$_$.j2;
  var coerceAtMost = kotlin_kotlin.$_$.m6;
  var arrayIterator = kotlin_kotlin.$_$.i5;
  var AbstractMutableList = kotlin_kotlin.$_$.d2;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.b1;
  var indexOf = kotlin_kotlin.$_$.j3;
  var lastIndexOf = kotlin_kotlin.$_$.o3;
  var AbstractMap = kotlin_kotlin.$_$.b2;
  var AbstractMutableMap = kotlin_kotlin.$_$.e2;
  var MutableMap = kotlin_kotlin.$_$.n2;
  var MutableEntry = kotlin_kotlin.$_$.m2;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var AbstractMutableSet = kotlin_kotlin.$_$.f2;
  var AbstractMutableCollection = kotlin_kotlin.$_$.c2;
  var Entry = kotlin_kotlin.$_$.k2;
  var AbstractSet = kotlin_kotlin.$_$.g2;
  var AbstractCollection = kotlin_kotlin.$_$.z1;
  var objectCreate = kotlin_kotlin.$_$.g6;
  var until = kotlin_kotlin.$_$.p6;
  var step = kotlin_kotlin.$_$.o6;
  var countOneBits = kotlin_kotlin.$_$.n8;
  var takeLowestOneBit = kotlin_kotlin.$_$.v8;
  var ConcurrentModificationException_init_$Create$_0 = kotlin_kotlin.$_$.w;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.e1;
  var longArray = kotlin_kotlin.$_$.d6;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.u;
  var Char = kotlin_kotlin.$_$.a8;
  var isCharSequence = kotlin_kotlin.$_$.a6;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var singleOrNull = kotlin_kotlin.$_$.e4;
  var contains = kotlin_kotlin.$_$.w2;
  var plus_2 = kotlin_kotlin.$_$.a4;
  var primitiveArrayConcat = kotlin_kotlin.$_$.b;
  var SequenceScope = kotlin_kotlin.$_$.u6;
  var intArrayIterator = kotlin_kotlin.$_$.x5;
  var Companion_getInstance = kotlin_kotlin.$_$.w1;
  var toIntArray = kotlin_kotlin.$_$.g4;
  var sequence = kotlin_kotlin.$_$.v6;
  var anyToString = kotlin_kotlin.$_$.h5;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.v2;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.d;
  var toDuration = kotlin_kotlin.$_$.y7;
  var _Duration___get_inWholeNanoseconds__impl__r5x4mr = kotlin_kotlin.$_$.m1;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.s;
  var println = kotlin_kotlin.$_$.g5;
  var printStackTrace = kotlin_kotlin.$_$.s8;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.o;
  //endregion
  //region block: pre-declaration
  function onBeginChanges() {
  }
  function onEndChanges() {
  }
  setMetadataFor(Applier, 'Applier', interfaceMeta);
  setMetadataFor(OffsetApplier, 'OffsetApplier', classMeta, VOID, [Applier]);
  setMetadataFor(AbstractApplier, 'AbstractApplier', classMeta, VOID, [Applier]);
  setMetadataFor(FrameAwaiter, 'FrameAwaiter', classMeta);
  function get_key() {
    return Key_instance_0;
  }
  setMetadataFor(MonotonicFrameClock, 'MonotonicFrameClock', interfaceMeta, VOID, [Element], VOID, VOID, VOID, [1]);
  setMetadataFor(BroadcastFrameClock, 'BroadcastFrameClock', classMeta, VOID, [MonotonicFrameClock], BroadcastFrameClock, VOID, VOID, [1]);
  setMetadataFor(ComposeNodeLifecycleCallback, 'ComposeNodeLifecycleCallback', interfaceMeta);
  setMetadataFor(Composer$Companion$Empty$1, VOID, classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  function changed(value) {
    return this.gv(value);
  }
  function changed_0(value) {
    return this.hv(value);
  }
  function changedInstance(value) {
    return this.fv(value);
  }
  setMetadataFor(Composer, 'Composer', interfaceMeta);
  setMetadataFor(InvalidationResult, 'InvalidationResult', classMeta, Enum);
  setMetadataFor(ProvidedValue, 'ProvidedValue', classMeta);
  setMetadataFor(MovableContent, 'MovableContent', classMeta);
  setMetadataFor(MovableContentStateReference, 'MovableContentStateReference', classMeta);
  setMetadataFor(ComposeRuntimeError, 'ComposeRuntimeError', classMeta, IllegalStateException);
  setMetadataFor(RememberObserver, 'RememberObserver', interfaceMeta);
  setMetadataFor(CompositionContextHolder, 'CompositionContextHolder', classMeta, VOID, [RememberObserver]);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta);
  setMetadataFor(ComposerImpl$derivedStateObserver$1, VOID, classMeta);
  setMetadataFor(RecomposeScopeOwner, 'RecomposeScopeOwner', interfaceMeta);
  setMetadataFor(ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1, VOID, classMeta, VOID, [RecomposeScopeOwner]);
  setMetadataFor(ComposerImpl, 'ComposerImpl', classMeta, VOID, [Composer]);
  setMetadataFor(MovableContentState, 'MovableContentState', classMeta);
  setMetadataFor(Pending, 'Pending', classMeta);
  setMetadataFor(Invalidation, 'Invalidation', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(GroupInfo, 'GroupInfo', classMeta);
  setMetadataFor(RememberEventDispatcher, 'RememberEventDispatcher', classMeta);
  setMetadataFor(CompositionImpl, 'CompositionImpl', classMeta, VOID, [RecomposeScopeOwner]);
  setMetadataFor(ComposableSingletons$CompositionKt, 'ComposableSingletons$CompositionKt', objectMeta);
  setMetadataFor(CompositionContext, 'CompositionContext', classMeta);
  setMetadataFor(CompositionLocal, 'CompositionLocal', classMeta);
  setMetadataFor(ProvidableCompositionLocal, 'ProvidableCompositionLocal', classMeta, CompositionLocal);
  setMetadataFor(StaticProvidableCompositionLocal, 'StaticProvidableCompositionLocal', classMeta, ProvidableCompositionLocal);
  setMetadataFor(DynamicProvidableCompositionLocal, 'DynamicProvidableCompositionLocal', classMeta, ProvidableCompositionLocal);
  setMetadataFor(PersistentCompositionLocalMap, 'PersistentCompositionLocalMap', interfaceMeta, VOID, [Map]);
  setMetadataFor(DerivedState, 'DerivedState', interfaceMeta);
  setMetadataFor(DisposableEffectScope, 'DisposableEffectScope', classMeta, VOID, VOID, DisposableEffectScope);
  setMetadataFor(LaunchedEffectImpl, 'LaunchedEffectImpl', classMeta, VOID, [RememberObserver]);
  setMetadataFor(PlatformOptimizedCancellationException, 'PlatformOptimizedCancellationException', classMeta, CancellationException);
  setMetadataFor(LeftCompositionCancellationException, 'LeftCompositionCancellationException', classMeta, PlatformOptimizedCancellationException, VOID, LeftCompositionCancellationException);
  setMetadataFor(DisposableEffectImpl, 'DisposableEffectImpl', classMeta, VOID, [RememberObserver]);
  setMetadataFor(JoinedKey, 'JoinedKey', classMeta);
  setMetadataFor(Key, 'Key', objectMeta);
  setMetadataFor(OpaqueKey, 'OpaqueKey', classMeta);
  setMetadataFor(ProduceStateScope, 'ProduceStateScope', interfaceMeta, VOID, [CoroutineScope_0], VOID, VOID, VOID, [1]);
  setMetadataFor($awaitDisposeCOROUTINE$0, '$awaitDisposeCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(ProduceStateScopeImpl, 'ProduceStateScopeImpl', classMeta, VOID, [ProduceStateScope], VOID, VOID, VOID, [1]);
  setMetadataFor(produceState$composable$slambda, 'produceState$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(RecomposeScopeImpl, 'RecomposeScopeImpl', classMeta);
  setMetadataFor(Recomposer$recompositionRunner$slambda$slambda, 'Recomposer$recompositionRunner$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(State, 'State', classMeta, Enum);
  setMetadataFor(RecomposerInfoImpl, 'RecomposerInfoImpl', classMeta);
  setMetadataFor(RecomposerErrorState, 'RecomposerErrorState', classMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Recomposer$runRecomposeAndApplyChanges$slambda, 'Recomposer$runRecomposeAndApplyChanges$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(Recomposer$recompositionRunner$slambda, 'Recomposer$recompositionRunner$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($awaitWorkAvailableCOROUTINE$2, '$awaitWorkAvailableCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(Recomposer, 'Recomposer', classMeta, CompositionContext, VOID, VOID, VOID, VOID, [0, 1, 2]);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(SlotWriter$groupSlots$1, VOID, classMeta);
  setMetadataFor(SlotWriter, 'SlotWriter', classMeta);
  setMetadataFor(Anchor, 'Anchor', classMeta);
  setMetadataFor(SlotTable, 'SlotTable', classMeta, VOID, VOID, SlotTable);
  setMetadataFor(PrioritySet, 'PrioritySet', classMeta, VOID, VOID, PrioritySet);
  setMetadataFor(SlotReader, 'SlotReader', classMeta);
  setMetadataFor(GroupIterator, 'GroupIterator', classMeta);
  setMetadataFor(SlotTableGroup, 'SlotTableGroup', classMeta);
  setMetadataFor(KeyInfo, 'KeyInfo', classMeta);
  function merge(previous, current, applied) {
    return null;
  }
  setMetadataFor(SnapshotMutationPolicy, 'SnapshotMutationPolicy', interfaceMeta);
  setMetadataFor(StructuralEqualityPolicy, 'StructuralEqualityPolicy', objectMeta, VOID, [SnapshotMutationPolicy]);
  setMetadataFor(StateRecord, 'StateRecord', classMeta);
  setMetadataFor(StateStateRecord, 'StateStateRecord', classMeta, StateRecord);
  function mergeRecords(previous, current, applied) {
    return null;
  }
  setMetadataFor(StateObject, 'StateObject', interfaceMeta);
  setMetadataFor(SnapshotMutableStateImpl, 'SnapshotMutableStateImpl', classMeta, VOID, [StateObject]);
  setMetadataFor(SnapshotThreadLocal, 'SnapshotThreadLocal', classMeta, VOID, VOID, SnapshotThreadLocal);
  setMetadataFor(IntStack, 'IntStack', classMeta, VOID, VOID, IntStack);
  setMetadataFor(Stack, 'Stack', classMeta, VOID, VOID, Stack);
  setMetadataFor(SynchronizedObject, 'SynchronizedObject', classMeta, VOID, VOID, SynchronizedObject);
  setMetadataFor(LazyValueHolder, 'LazyValueHolder', classMeta);
  setMetadataFor(StaticValueHolder, 'StaticValueHolder', classMeta);
  setMetadataFor(IdentityArrayIntMap, 'IdentityArrayIntMap', classMeta, VOID, VOID, IdentityArrayIntMap);
  setMetadataFor(IdentityArrayMap, 'IdentityArrayMap', classMeta, VOID, VOID, IdentityArrayMap);
  setMetadataFor(IdentityArraySet$iterator$1, VOID, classMeta);
  setMetadataFor(IdentityArraySet, 'IdentityArraySet', classMeta, VOID, [Set], IdentityArraySet);
  setMetadataFor(IdentityScopeMap, 'IdentityScopeMap', classMeta, VOID, VOID, IdentityScopeMap);
  setMetadataFor(MutableVector, 'MutableVector', classMeta);
  setMetadataFor(AbstractListIterator, 'AbstractListIterator', classMeta);
  setMetadataFor(AbstractPersistentList, 'AbstractPersistentList', classMeta, AbstractList, [List, Collection, AbstractList]);
  setMetadataFor(BufferIterator, 'BufferIterator', classMeta, AbstractListIterator);
  setMetadataFor(PersistentVector, 'PersistentVector', classMeta, AbstractPersistentList, [List, Collection, AbstractPersistentList]);
  setMetadataFor(PersistentVectorBuilder, 'PersistentVectorBuilder', classMeta, AbstractMutableList, [AbstractMutableList, List, Collection]);
  setMetadataFor(PersistentVectorIterator, 'PersistentVectorIterator', classMeta, AbstractListIterator);
  setMetadataFor(PersistentVectorMutableIterator, 'PersistentVectorMutableIterator', classMeta, AbstractListIterator);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(SmallPersistentVector, 'SmallPersistentVector', classMeta, AbstractPersistentList, [List, Collection, AbstractPersistentList]);
  setMetadataFor(TrieIterator, 'TrieIterator', classMeta, AbstractListIterator);
  setMetadataFor(ObjectRef, 'ObjectRef', classMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(PersistentHashMap, 'PersistentHashMap', classMeta, AbstractMap, [AbstractMap, Map]);
  setMetadataFor(PersistentHashMapBuilder, 'PersistentHashMapBuilder', classMeta, AbstractMutableMap, [MutableMap, AbstractMutableMap]);
  setMetadataFor(PersistentHashMapBuilderEntriesIterator, 'PersistentHashMapBuilderEntriesIterator', classMeta);
  setMetadataFor(PersistentHashMapBaseIterator, 'PersistentHashMapBaseIterator', classMeta);
  setMetadataFor(PersistentHashMapBuilderBaseIterator, 'PersistentHashMapBuilderBaseIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(PersistentHashMapBuilderKeysIterator, 'PersistentHashMapBuilderKeysIterator', classMeta, PersistentHashMapBuilderBaseIterator);
  setMetadataFor(PersistentHashMapBuilderValuesIterator, 'PersistentHashMapBuilderValuesIterator', classMeta, PersistentHashMapBuilderBaseIterator);
  setMetadataFor(TrieNodeBaseIterator, 'TrieNodeBaseIterator', classMeta);
  setMetadataFor(TrieNodeMutableEntriesIterator, 'TrieNodeMutableEntriesIterator', classMeta, TrieNodeBaseIterator);
  setMetadataFor(MapEntry, 'MapEntry', classMeta, VOID, [Entry]);
  setMetadataFor(MutableMapEntry, 'MutableMapEntry', classMeta, MapEntry, [MapEntry, MutableEntry]);
  setMetadataFor(AbstractMapBuilderEntries, 'AbstractMapBuilderEntries', classMeta, AbstractMutableSet);
  setMetadataFor(PersistentHashMapBuilderEntries, 'PersistentHashMapBuilderEntries', classMeta, AbstractMapBuilderEntries);
  setMetadataFor(PersistentHashMapBuilderKeys, 'PersistentHashMapBuilderKeys', classMeta, AbstractMutableSet, [Set, Collection, AbstractMutableSet]);
  setMetadataFor(PersistentHashMapBuilderValues, 'PersistentHashMapBuilderValues', classMeta, AbstractMutableCollection, [Collection, AbstractMutableCollection]);
  setMetadataFor(PersistentHashMapKeysIterator, 'PersistentHashMapKeysIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(PersistentHashMapValuesIterator, 'PersistentHashMapValuesIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(PersistentHashMapEntriesIterator, 'PersistentHashMapEntriesIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(TrieNodeKeysIterator, 'TrieNodeKeysIterator', classMeta, TrieNodeBaseIterator, VOID, TrieNodeKeysIterator);
  setMetadataFor(TrieNodeValuesIterator, 'TrieNodeValuesIterator', classMeta, TrieNodeBaseIterator, VOID, TrieNodeValuesIterator);
  setMetadataFor(TrieNodeEntriesIterator, 'TrieNodeEntriesIterator', classMeta, TrieNodeBaseIterator, VOID, TrieNodeEntriesIterator);
  setMetadataFor(PersistentHashMapKeys, 'PersistentHashMapKeys', classMeta, AbstractSet, [Set, Collection, AbstractSet]);
  setMetadataFor(PersistentHashMapValues, 'PersistentHashMapValues', classMeta, AbstractCollection, [Collection, AbstractCollection]);
  setMetadataFor(PersistentHashMapEntries, 'PersistentHashMapEntries', classMeta, AbstractSet, [Set, Collection, AbstractSet]);
  setMetadataFor(ModificationResult, 'ModificationResult', classMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(TrieNode, 'TrieNode', classMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(PersistentOrderedSet, 'PersistentOrderedSet', classMeta, AbstractSet, [AbstractSet, Set, Collection]);
  setMetadataFor(Links, 'Links', classMeta, VOID, VOID, Links_init_$Create$);
  setMetadataFor(PersistentOrderedSetIterator, 'PersistentOrderedSetIterator', classMeta);
  setMetadataFor(EndOfChain, 'EndOfChain', objectMeta);
  setMetadataFor(ListImplementation, 'ListImplementation', objectMeta);
  setMetadataFor(MutabilityOwnership, 'MutabilityOwnership', classMeta, VOID, VOID, MutabilityOwnership);
  setMetadataFor(DeltaCounter, 'DeltaCounter', classMeta, VOID, VOID, DeltaCounter);
  setMetadataFor(Builder, 'Builder', classMeta, PersistentHashMapBuilder, [PersistentHashMapBuilder, MutableMap]);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(PersistentCompositionLocalHashMap, 'PersistentCompositionLocalHashMap', classMeta, PersistentHashMap, [PersistentHashMap, PersistentCompositionLocalMap]);
  setMetadataFor(ThreadMap, 'ThreadMap', classMeta);
  setMetadataFor(sam$androidx_compose_runtime_snapshots_ObserverHandle$0, 'sam$androidx_compose_runtime_snapshots_ObserverHandle$0', classMeta);
  setMetadataFor(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0, 'sam$androidx_compose_runtime_snapshots_ObserverHandle$0', classMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(Snapshot, 'Snapshot', classMeta);
  setMetadataFor(MutableSnapshot, 'MutableSnapshot', classMeta, Snapshot);
  setMetadataFor(GlobalSnapshot, 'GlobalSnapshot', classMeta, MutableSnapshot);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(SnapshotApplyResult, 'SnapshotApplyResult', classMeta);
  setMetadataFor(Success, 'Success', objectMeta, SnapshotApplyResult);
  setMetadataFor(Failure, 'Failure', classMeta, SnapshotApplyResult);
  setMetadataFor(NestedMutableSnapshot, 'NestedMutableSnapshot', classMeta, MutableSnapshot);
  setMetadataFor(SnapshotDoubleIndexHeap, 'SnapshotDoubleIndexHeap', classMeta, VOID, VOID, SnapshotDoubleIndexHeap);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(SnapshotIdSet$iterator$slambda, 'SnapshotIdSet$iterator$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(SnapshotIdSet, 'SnapshotIdSet', classMeta);
  setMetadataFor(StateListStateRecord, 'StateListStateRecord', classMeta, StateRecord);
  setMetadataFor(SnapshotStateList, 'SnapshotStateList', classMeta, VOID, [List, Collection, StateObject], SnapshotStateList);
  setMetadataFor(StateListIterator, 'StateListIterator', classMeta);
  setMetadataFor(SnapshotWeakSet, 'SnapshotWeakSet', classMeta, VOID, VOID, SnapshotWeakSet);
  setMetadataFor(AtomicReference, 'AtomicReference', classMeta);
  setMetadataFor(AtomicInt, 'AtomicInt', classMeta);
  setMetadataFor($withFrameNanosCOROUTINE$5, '$withFrameNanosCOROUTINE$5', classMeta, CoroutineImpl);
  setMetadataFor(MonotonicClockImpl, 'MonotonicClockImpl', classMeta, VOID, [MonotonicFrameClock], MonotonicClockImpl, VOID, VOID, [1]);
  setMetadataFor(Trace, 'Trace', objectMeta);
  setMetadataFor(ComposableLambdaImpl, 'ComposableLambdaImpl', classMeta);
  setMetadataFor(IntMap, 'IntMap', classMeta, VOID, VOID, IntMap);
  setMetadataFor(WeakReference, 'WeakReference', classMeta);
  //endregion
  function Applier() {
  }
  function OffsetApplier(applier, offset) {
    this.cs_1 = applier;
    this.ds_1 = offset;
    this.es_1 = 0;
  }
  protoOf(OffsetApplier).tr = function () {
    return this.cs_1.tr();
  };
  protoOf(OffsetApplier).wr = function (node) {
    this.es_1 = this.es_1 + 1 | 0;
    this.cs_1.wr(node);
  };
  protoOf(OffsetApplier).xr = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.es_1 > 0)) {
      // Inline function 'androidx.compose.runtime.OffsetApplier.up.<anonymous>' call
      var message = 'OffsetApplier up called with no corresponding down';
      composeRuntimeError(toString(message));
    }
    this.es_1 = this.es_1 - 1 | 0;
    this.cs_1.xr();
  };
  protoOf(OffsetApplier).yr = function (index, instance) {
    this.cs_1.yr(index + (this.es_1 === 0 ? this.ds_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).zr = function (index, instance) {
    this.cs_1.zr(index + (this.es_1 === 0 ? this.ds_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).as = function (index, count) {
    this.cs_1.as(index + (this.es_1 === 0 ? this.ds_1 : 0) | 0, count);
  };
  protoOf(OffsetApplier).bs = function (from, to, count) {
    var effectiveOffset = this.es_1 === 0 ? this.ds_1 : 0;
    this.cs_1.bs(from + effectiveOffset | 0, to + effectiveOffset | 0, count);
  };
  function AbstractApplier(root) {
    this.fs_1 = root;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.gs_1 = ArrayList_init_$Create$();
    this.hs_1 = this.fs_1;
    this.is_1 = 8;
  }
  protoOf(AbstractApplier).js = function (_set____db54di) {
    this.hs_1 = _set____db54di;
  };
  protoOf(AbstractApplier).tr = function () {
    return this.hs_1;
  };
  protoOf(AbstractApplier).ks = function (node) {
    this.gs_1.u(this.tr());
    this.js(node);
  };
  protoOf(AbstractApplier).wr = function (node) {
    return this.ks((node == null ? true : !(node == null)) ? node : THROW_CCE());
  };
  protoOf(AbstractApplier).xr = function () {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.gs_1.q()) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.js(this.gs_1.g1(this.gs_1.j() - 1 | 0));
  };
  function FrameAwaiter(onFrame, continuation) {
    this.ls_1 = onFrame;
    this.ms_1 = continuation;
  }
  protoOf(FrameAwaiter).ns = function (timeNanos) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      // Inline function 'androidx.compose.runtime.FrameAwaiter.resume.<anonymous>' call
      var value = this.ls_1(timeNanos);
      tmp = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var tmp$ret$3 = tmp;
    this.ms_1.p6(tmp$ret$3);
  };
  function fail($this, cause) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.ps_1;
    if (!($this.qs_1 == null))
      return Unit_instance;
    $this.qs_1 = cause;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var this_0 = $this.rs_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.k(index);
        // Inline function 'androidx.compose.runtime.BroadcastFrameClock.fail.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var this_1 = item.ms_1;
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        this_1.p6(tmp$ret$0);
      }
       while (inductionVariable <= last);
    $this.rs_1.b1();
  }
  function BroadcastFrameClock$withFrameNanos$lambda(this$0, $awaiter) {
    return function (it) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.ps_1;
      var tmp = this$0.rs_1;
      var tmp_0;
      if ($awaiter._v == null) {
        throwUninitializedPropertyAccessException('awaiter');
      } else {
        tmp_0 = $awaiter._v;
      }
      tmp.v(tmp_0);
      return Unit_instance;
    };
  }
  function BroadcastFrameClock(onNewAwaiters) {
    onNewAwaiters = onNewAwaiters === VOID ? null : onNewAwaiters;
    this.os_1 = onNewAwaiters;
    this.ps_1 = createSynchronizedObject();
    this.qs_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.rs_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.ss_1 = ArrayList_init_$Create$();
    this.ts_1 = 8;
  }
  protoOf(BroadcastFrameClock).us = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.ps_1;
    // Inline function 'androidx.compose.runtime.BroadcastFrameClock.<get-hasAwaiters>.<anonymous>' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.rs_1.q();
  };
  protoOf(BroadcastFrameClock).vs = function (timeNanos) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.ps_1;
    var toResume = this.rs_1;
    this.rs_1 = this.ss_1;
    this.ss_1 = toResume;
    var inductionVariable = 0;
    var last = toResume.j();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        toResume.k(i).ns(timeNanos);
      }
       while (inductionVariable < last);
    toResume.b1();
  };
  protoOf(BroadcastFrameClock).ws = function (onFrame, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.mj();
    $l$block: {
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>' call
      var awaiter = {_v: null};
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this.ps_1;
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>.<anonymous>' call
      var cause = this.qs_1;
      if (!(cause == null)) {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        cancellable.p6(tmp$ret$0);
        break $l$block;
      }
      awaiter._v = new FrameAwaiter(onFrame, cancellable);
      // Inline function 'kotlin.collections.isNotEmpty' call
      var hadAwaiters = !this.rs_1.q();
      var tmp = this.rs_1;
      var tmp_0;
      if (awaiter._v == null) {
        throwUninitializedPropertyAccessException('awaiter');
      } else {
        tmp_0 = awaiter._v;
      }
      tmp.u(tmp_0);
      var hasNewAwaiters = !hadAwaiters;
      cancellable.oi(BroadcastFrameClock$withFrameNanos$lambda(this, awaiter));
      if (hasNewAwaiters ? !(this.os_1 == null) : false) {
        try {
          this.os_1();
        } catch ($p) {
          if ($p instanceof Error) {
            var t = $p;
            fail(this, t);
          } else {
            throw $p;
          }
        }
      }
    }
    return cancellable.ai();
  };
  function invalidApplier() {
    var message = 'Invalid applier';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function ComposeNodeLifecycleCallback() {
  }
  function get_compositionTracer() {
    _init_properties_Composer_kt__bmp4g0();
    return compositionTracer;
  }
  var compositionTracer;
  function get_removeCurrentGroupInstance() {
    _init_properties_Composer_kt__bmp4g0();
    return removeCurrentGroupInstance;
  }
  var removeCurrentGroupInstance;
  function get_skipToGroupEndInstance() {
    _init_properties_Composer_kt__bmp4g0();
    return skipToGroupEndInstance;
  }
  var skipToGroupEndInstance;
  function get_endGroupInstance() {
    _init_properties_Composer_kt__bmp4g0();
    return endGroupInstance;
  }
  var endGroupInstance;
  function get_startRootGroup() {
    _init_properties_Composer_kt__bmp4g0();
    return startRootGroup;
  }
  var startRootGroup;
  function get_resetSlotsInstance() {
    _init_properties_Composer_kt__bmp4g0();
    return resetSlotsInstance;
  }
  var resetSlotsInstance;
  function get_invocation() {
    _init_properties_Composer_kt__bmp4g0();
    return invocation;
  }
  var invocation;
  function get_provider() {
    _init_properties_Composer_kt__bmp4g0();
    return provider;
  }
  var provider;
  function get_compositionLocalMap() {
    _init_properties_Composer_kt__bmp4g0();
    return compositionLocalMap;
  }
  var compositionLocalMap;
  function get_providerValues() {
    _init_properties_Composer_kt__bmp4g0();
    return providerValues;
  }
  var providerValues;
  function get_providerMaps() {
    _init_properties_Composer_kt__bmp4g0();
    return providerMaps;
  }
  var providerMaps;
  function get_reference() {
    _init_properties_Composer_kt__bmp4g0();
    return reference;
  }
  var reference;
  function removeCurrentGroup(_this__u8e3s4, rememberManager) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = _this__u8e3s4.vt();
    while (tmp0_iterator.x()) {
      var slot = tmp0_iterator.z();
      if (!(slot == null) ? isInterface(slot, ComposeNodeLifecycleCallback) : false) {
        rememberManager.wt(slot);
      }
      if (!(slot == null) ? isInterface(slot, RememberObserver) : false) {
        rememberManager.xt(slot);
      }
      if (slot instanceof RecomposeScopeImpl) {
        slot.ok();
      }
    }
    _this__u8e3s4.fu();
  }
  function Composer$Companion$Empty$1() {
  }
  protoOf(Composer$Companion$Empty$1).toString = function () {
    return 'Empty';
  };
  function Companion() {
    Companion_instance_0 = this;
    var tmp = this;
    tmp.gu_1 = new Composer$Companion$Empty$1();
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function Composer() {
  }
  var InvalidationResult_IGNORED_instance;
  var InvalidationResult_SCHEDULED_instance;
  var InvalidationResult_DEFERRED_instance;
  var InvalidationResult_IMMINENT_instance;
  var InvalidationResult_entriesInitialized;
  function InvalidationResult_initEntries() {
    if (InvalidationResult_entriesInitialized)
      return Unit_instance;
    InvalidationResult_entriesInitialized = true;
    InvalidationResult_IGNORED_instance = new InvalidationResult('IGNORED', 0);
    InvalidationResult_SCHEDULED_instance = new InvalidationResult('SCHEDULED', 1);
    InvalidationResult_DEFERRED_instance = new InvalidationResult('DEFERRED', 2);
    InvalidationResult_IMMINENT_instance = new InvalidationResult('IMMINENT', 3);
  }
  function InvalidationResult(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function runtimeCheck(value) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp;
    if (!value) {
      // Inline function 'androidx.compose.runtime.runtimeCheck.<anonymous>' call
      var message = 'Check failed';
      composeRuntimeError(toString(message));
    }
    return tmp;
  }
  function sourceInformationMarkerStart(composer, key, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.vu(key, sourceInformation);
  }
  function sourceInformationMarkerEnd(composer) {
    _init_properties_Composer_kt__bmp4g0();
    composer.wu();
  }
  function ProvidedValue(compositionLocal, value, canOverride) {
    this.ov_1 = compositionLocal;
    this.pv_1 = value;
    this.qv_1 = canOverride;
    this.rv_1 = 0;
  }
  function sourceInformation(composer, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.uu(sourceInformation);
  }
  function isTraceInProgress() {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.isTraceInProgress.<anonymous>' call
    var it = get_compositionTracer();
    return !(it == null) ? it.sv() : false;
  }
  function traceEventStart(key, dirty1, dirty2, info) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.tv(key, dirty1, dirty2, info);
    }
  }
  function traceEventEnd() {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.uv();
    }
  }
  function MovableContent() {
  }
  function MovableContentStateReference(content, parameter, composition, slotTable, anchor, invalidations, locals) {
    this.vv_1 = content;
    this.wv_1 = parameter;
    this.xv_1 = composition;
    this.yv_1 = slotTable;
    this.zv_1 = anchor;
    this.aw_1 = invalidations;
    this.bw_1 = locals;
    this.cw_1 = 8;
  }
  function composeRuntimeError(message) {
    _init_properties_Composer_kt__bmp4g0();
    throw new ComposeRuntimeError('Compose Runtime internal error. Unexpected or incorrect use of the Compose ' + ('internal runtime API (' + message + '). Please report to Google or use ') + 'https://goo.gle/compose-feedback');
  }
  function ComposeRuntimeError(message) {
    IllegalStateException_init_$Init$(this);
    captureStack(this, ComposeRuntimeError);
    this.dw_1 = message;
  }
  protoOf(ComposeRuntimeError).s6 = function () {
    return this.dw_1;
  };
  function startRoot($this) {
    $this.lx_1 = $this.gw_1.oy();
    startGroup($this, 100);
    $this.fw_1.qy();
    $this.yw_1 = $this.fw_1.ry();
    $this.bx_1.uy(asInt($this.ax_1));
    $this.ax_1 = $this.fv($this.yw_1);
    $this.px_1 = null;
    if (!$this.tw_1) {
      $this.tw_1 = $this.fw_1.vy();
    }
    var tmp0_safe_receiver = read($this.yw_1, get_LocalInspectionTables());
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.u($this.gw_1);
      $this.fw_1.wy(tmp0_safe_receiver);
    }
    startGroup($this, $this.fw_1.xy());
  }
  function endRoot($this) {
    endGroup($this);
    $this.fw_1.yy();
    endGroup($this);
    recordEndRoot($this);
    finalizeCompose($this);
    $this.lx_1.lz();
    $this.uw_1 = false;
  }
  function abortRoot($this) {
    cleanUpCompose($this);
    $this.lw_1.b1();
    $this.ow_1.b1();
    $this.qw_1.b1();
    $this.xw_1.b1();
    $this.bx_1.b1();
    $this.zw_1.b1();
    if (!$this.lx_1.ez_1) {
      $this.lx_1.lz();
    }
    if (!$this.nx_1.tt_1) {
      $this.nx_1.lz();
    }
    $this.sx_1.b1();
    createFreshInsertTable($this);
    $this.ux_1 = 0;
    $this.ex_1 = 0;
    $this.vw_1 = false;
    $this.tx_1 = false;
    $this.cx_1 = false;
    $this.jx_1 = false;
    $this.uw_1 = false;
    $this.dx_1 = -1;
  }
  function startGroup($this, key) {
    return start($this, key, null, Companion_getInstance_1().oz_1, null);
  }
  function startGroup_0($this, key, dataKey) {
    return start($this, key, dataKey, Companion_getInstance_1().oz_1, null);
  }
  function endGroup($this) {
    return end($this, false);
  }
  function skipGroup($this) {
    $this.pw_1 = $this.pw_1 + $this.lx_1.rz() | 0;
  }
  function currentCompositionLocalScope($this) {
    var tmp0_safe_receiver = $this.px_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    return currentCompositionLocalScope_0($this, $this.lx_1.hz_1);
  }
  function currentCompositionLocalScope_0($this, group) {
    if ($this.tx_1 ? $this.ox_1 : false) {
      var current = $this.nx_1.st_1;
      while (current > 0) {
        if ($this.nx_1.uz(current) === 202 ? equals($this.nx_1.tz(current), get_compositionLocalMap()) : false) {
          var tmp = $this.nx_1.sz(current);
          var providers = (!(tmp == null) ? isInterface(tmp, PersistentCompositionLocalMap) : false) ? tmp : THROW_CCE();
          $this.px_1 = providers;
          return providers;
        }
        current = $this.nx_1.vz(current);
      }
    }
    if ($this.lx_1.j() > 0) {
      var current_0 = group;
      while (current_0 > 0) {
        if ($this.lx_1.uz(current_0) === 202 ? equals($this.lx_1.tz(current_0), get_compositionLocalMap()) : false) {
          var tmp0_elvis_lhs = $this.zw_1.k(current_0);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            var tmp_1 = $this.lx_1.sz(current_0);
            tmp_0 = (!(tmp_1 == null) ? isInterface(tmp_1, PersistentCompositionLocalMap) : false) ? tmp_1 : THROW_CCE();
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var providers_0 = tmp_0;
          $this.px_1 = providers_0;
          return providers_0;
        }
        current_0 = $this.lx_1.vz(current_0);
      }
    }
    $this.px_1 = $this.yw_1;
    return $this.yw_1;
  }
  function updateProviderMapGroup($this, parentScope, currentProviders) {
    // Inline function 'androidx.compose.runtime.mutate' call
    // Inline function 'kotlin.apply' call
    var this_0 = parentScope.wz();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.updateProviderMapGroup.<anonymous>' call
    this_0.k2(currentProviders);
    var providerScope = this_0.a3();
    startGroup_0($this, 204, get_providerMaps());
    $this.fv(providerScope);
    $this.fv(currentProviders);
    endGroup($this);
    return providerScope;
  }
  function ensureWriter($this) {
    if ($this.nx_1.tt_1) {
      $this.nx_1 = $this.mx_1.xz();
      $this.nx_1.xu();
      $this.ox_1 = false;
      $this.px_1 = null;
    }
  }
  function createFreshInsertTable($this) {
    runtimeCheck($this.nx_1.tt_1);
    $this.mx_1 = new SlotTable();
    var tmp = $this;
    // Inline function 'kotlin.also' call
    var this_0 = $this.mx_1.xz();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.createFreshInsertTable.<anonymous>' call
    this_0.lz();
    tmp.nx_1 = this_0;
  }
  function startReaderGroup($this, isNode, data) {
    if (isNode) {
      $this.lx_1.yu();
    } else {
      if (!(data == null) ? !($this.lx_1.yz() === data) : false) {
        recordSlotTableOperation$default($this, VOID, ComposerImpl$startReaderGroup$lambda(data));
      }
      $this.lx_1.zz();
    }
  }
  function start($this, key, objectKey, kind, data) {
    validateNodeNotExpected($this);
    updateCompoundKeyWhenWeEnterGroup($this, key, objectKey, data);
    // Inline function 'androidx.compose.runtime.GroupKind.isNode' call
    var isNode = !(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_1().oz_1));
    if ($this.tx_1) {
      $this.lx_1.a10();
      var startIndex = $this.nx_1.rt_1;
      if (isNode) {
        $this.nx_1.d10(key, Companion_getInstance_0().gu_1);
      } else if (!(data == null)) {
        var tmp = $this.nx_1;
        tmp.c10(key, objectKey == null ? Companion_getInstance_0().gu_1 : objectKey, data);
      } else {
        var tmp_0 = $this.nx_1;
        tmp_0.b10(key, objectKey == null ? Companion_getInstance_0().gu_1 : objectKey);
      }
      var tmp2_safe_receiver = $this.mw_1;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.start.<anonymous>' call
        var insertKeyInfo = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex), -1, 0);
        tmp2_safe_receiver.k10(insertKeyInfo, $this.nw_1 - tmp2_safe_receiver.f10_1 | 0);
        tmp2_safe_receiver.l10(insertKeyInfo);
      }
      enterGroup($this, isNode, null);
      return Unit_instance;
    }
    var tmp_1;
    // Inline function 'androidx.compose.runtime.GroupKind.isReusable' call
    if (!!(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_1().pz_1))) {
      tmp_1 = $this.cx_1;
    } else {
      tmp_1 = false;
    }
    var forceReplace = tmp_1;
    if ($this.mw_1 == null) {
      var slotKey = $this.lx_1.m10();
      if ((!forceReplace ? slotKey === key : false) ? equals(objectKey, $this.lx_1.o10()) : false) {
        startReaderGroup($this, isNode, data);
      } else {
        $this.mw_1 = new Pending($this.lx_1.n10(), $this.nw_1);
      }
    }
    var pending = $this.mw_1;
    var newPending = null;
    if (!(pending == null)) {
      var keyInfo = pending.p10(key, objectKey);
      if (!forceReplace ? !(keyInfo == null) : false) {
        pending.l10(keyInfo);
        var location = keyInfo.u10_1;
        $this.nw_1 = pending.x10(keyInfo) + pending.f10_1 | 0;
        var relativePosition = pending.y10(keyInfo);
        var currentRelativePosition = relativePosition - pending.g10_1 | 0;
        pending.z10(relativePosition, pending.g10_1);
        recordReaderMoving($this, location);
        $this.lx_1.a11(location);
        if (currentRelativePosition > 0) {
          recordSlotEditingOperation($this, ComposerImpl$start$lambda(currentRelativePosition));
        }
        startReaderGroup($this, isNode, data);
      } else {
        $this.lx_1.a10();
        $this.tx_1 = true;
        $this.px_1 = null;
        ensureWriter($this);
        $this.nx_1.q10();
        var startIndex_0 = $this.nx_1.rt_1;
        if (isNode) {
          $this.nx_1.d10(key, Companion_getInstance_0().gu_1);
        } else if (!(data == null)) {
          var tmp_2 = $this.nx_1;
          tmp_2.c10(key, objectKey == null ? Companion_getInstance_0().gu_1 : objectKey, data);
        } else {
          var tmp_3 = $this.nx_1;
          tmp_3.b10(key, objectKey == null ? Companion_getInstance_0().gu_1 : objectKey);
        }
        $this.rx_1 = $this.nx_1.r10(startIndex_0);
        var insertKeyInfo_0 = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex_0), -1, 0);
        pending.k10(insertKeyInfo_0, $this.nw_1 - pending.f10_1 | 0);
        pending.l10(insertKeyInfo_0);
        // Inline function 'kotlin.collections.mutableListOf' call
        var tmp$ret$4 = ArrayList_init_$Create$();
        newPending = new Pending(tmp$ret$4, isNode ? 0 : $this.nw_1);
      }
    }
    enterGroup($this, isNode, newPending);
  }
  function enterGroup($this, isNode, newPending) {
    $this.lw_1.b11($this.mw_1);
    $this.mw_1 = newPending;
    $this.ow_1.uy($this.nw_1);
    if (isNode)
      $this.nw_1 = 0;
    $this.qw_1.uy($this.pw_1);
    $this.pw_1 = 0;
  }
  function exitGroup($this, expectedNodeCount, inserting) {
    var previousPending = $this.lw_1.c11();
    if (!(previousPending == null) ? !inserting : false) {
      previousPending.g10_1 = previousPending.g10_1 + 1 | 0;
    }
    $this.mw_1 = previousPending;
    $this.nw_1 = $this.ow_1.c11() + expectedNodeCount | 0;
    $this.pw_1 = $this.qw_1.c11() + expectedNodeCount | 0;
  }
  function end($this, isNode) {
    if ($this.tx_1) {
      var parent = $this.nx_1.st_1;
      updateCompoundKeyWhenWeExitGroup($this, $this.nx_1.uz(parent), $this.nx_1.tz(parent), $this.nx_1.sz(parent));
    } else {
      var parent_0 = $this.lx_1.hz_1;
      updateCompoundKeyWhenWeExitGroup($this, $this.lx_1.uz(parent_0), $this.lx_1.tz(parent_0), $this.lx_1.sz(parent_0));
    }
    var expectedNodeCount = $this.pw_1;
    var pending = $this.mw_1;
    if (!(pending == null) ? pending.e10_1.j() > 0 : false) {
      var previous = pending.e10_1;
      var current = pending.d11();
      var usedKeys = fastToSet(current);
      // Inline function 'kotlin.collections.mutableSetOf' call
      var placedKeys = LinkedHashSet_init_$Create$();
      var currentIndex = 0;
      var currentEnd = current.j();
      var previousIndex = 0;
      var previousEnd = previous.j();
      var nodeOffset = 0;
      $l$loop_0: while (previousIndex < previousEnd) {
        var previousInfo = previous.k(previousIndex);
        if (!usedKeys.o(previousInfo)) {
          var deleteOffset = pending.x10(previousInfo);
          recordRemoveNode($this, deleteOffset + pending.f10_1 | 0, previousInfo.v10_1);
          pending.e11(previousInfo.u10_1, 0);
          recordReaderMoving($this, previousInfo.u10_1);
          $this.lx_1.a11(previousInfo.u10_1);
          recordDelete($this);
          $this.lx_1.rz();
          removeRange($this.ww_1, previousInfo.u10_1, previousInfo.u10_1 + $this.lx_1.f11(previousInfo.u10_1) | 0);
          previousIndex = previousIndex + 1 | 0;
          continue $l$loop_0;
        }
        if (placedKeys.o(previousInfo)) {
          previousIndex = previousIndex + 1 | 0;
          continue $l$loop_0;
        }
        if (currentIndex < currentEnd) {
          var currentInfo = current.k(currentIndex);
          if (!(currentInfo === previousInfo)) {
            var nodePosition = pending.x10(currentInfo);
            placedKeys.u(currentInfo);
            if (!(nodePosition === nodeOffset)) {
              var updatedCount = pending.g11(currentInfo);
              recordMoveNode($this, nodePosition + pending.f10_1 | 0, nodeOffset + pending.f10_1 | 0, updatedCount);
              pending.h11(nodePosition, nodeOffset, updatedCount);
            }
          } else {
            previousIndex = previousIndex + 1 | 0;
          }
          currentIndex = currentIndex + 1 | 0;
          nodeOffset = nodeOffset + pending.g11(currentInfo) | 0;
        }
      }
      realizeMovement($this);
      if (previous.j() > 0) {
        recordReaderMoving($this, $this.lx_1.i11());
        $this.lx_1.xu();
      }
    }
    var removeIndex = $this.nw_1;
    while (!$this.lx_1.j11()) {
      var startSlot = $this.lx_1.fz_1;
      recordDelete($this);
      var nodesToRemove = $this.lx_1.rz();
      recordRemoveNode($this, removeIndex, nodesToRemove);
      removeRange($this.ww_1, startSlot, $this.lx_1.fz_1);
    }
    var inserting = $this.tx_1;
    if (inserting) {
      if (isNode) {
        registerInsertUpFixup($this);
        expectedNodeCount = 1;
      }
      $this.lx_1.l11();
      var parentGroup = $this.nx_1.st_1;
      $this.nx_1.m11();
      if (!$this.lx_1.o11()) {
        var virtualIndex = insertedGroupVirtualIndex($this, parentGroup);
        $this.nx_1.n11();
        $this.nx_1.lz();
        recordInsert($this, $this.rx_1);
        $this.tx_1 = false;
        if (!$this.gw_1.dl()) {
          updateNodeCount($this, virtualIndex, 0);
          updateNodeCountOverrides($this, virtualIndex, expectedNodeCount);
        }
      }
    } else {
      if (isNode) {
        recordUp($this);
      }
      recordEndGroup($this);
      var parentGroup_0 = $this.lx_1.hz_1;
      var parentNodeCount = updatedNodeCount($this, parentGroup_0);
      if (!(expectedNodeCount === parentNodeCount)) {
        updateNodeCountOverrides($this, parentGroup_0, expectedNodeCount);
      }
      if (isNode) {
        expectedNodeCount = 1;
      }
      $this.lx_1.k11();
      realizeMovement($this);
    }
    exitGroup($this, expectedNodeCount, inserting);
  }
  function recomposeToGroupEnd($this) {
    var wasComposing = $this.jx_1;
    $this.jx_1 = true;
    var recomposed = false;
    var parent = $this.lx_1.hz_1;
    var end = parent + $this.lx_1.f11(parent) | 0;
    var recomposeIndex = $this.nw_1;
    var recomposeCompoundKey = $this.ux_1;
    var oldGroupNodeCount = $this.pw_1;
    var oldGroup = parent;
    var firstInRange_0 = firstInRange($this.ww_1, $this.lx_1.fz_1, end);
    while (!(firstInRange_0 == null)) {
      var location = firstInRange_0.q11_1;
      removeLocation($this.ww_1, location);
      if (firstInRange_0.v11()) {
        recomposed = true;
        $this.lx_1.a11(location);
        var newGroup = $this.lx_1.fz_1;
        recordUpsAndDowns($this, oldGroup, newGroup, parent);
        oldGroup = newGroup;
        $this.nw_1 = nodeIndexOf($this, location, newGroup, parent, recomposeIndex);
        $this.ux_1 = compoundKeyOf($this, $this.lx_1.vz(newGroup), parent, recomposeCompoundKey);
        $this.px_1 = null;
        firstInRange_0.p11_1.t11($this);
        $this.px_1 = null;
        $this.lx_1.u11(parent);
      } else {
        $this.ix_1.b11(firstInRange_0.p11_1);
        firstInRange_0.p11_1.s11();
        $this.ix_1.c11();
      }
      firstInRange_0 = firstInRange($this.ww_1, $this.lx_1.fz_1, end);
    }
    if (recomposed) {
      recordUpsAndDowns($this, oldGroup, parent, parent);
      $this.lx_1.xu();
      var parentGroupNodes = updatedNodeCount($this, parent);
      $this.nw_1 = recomposeIndex + parentGroupNodes | 0;
      $this.pw_1 = oldGroupNodeCount + parentGroupNodes | 0;
    } else {
      skipReaderToGroupEnd($this);
    }
    $this.ux_1 = recomposeCompoundKey;
    $this.jx_1 = wasComposing;
  }
  function insertedGroupVirtualIndex($this, index) {
    return -2 - index | 0;
  }
  function updateNodeCountOverrides($this, group, newCount) {
    var currentCount = updatedNodeCount($this, group);
    if (!(currentCount === newCount)) {
      var delta = newCount - currentCount | 0;
      var current = group;
      var minPending = $this.lw_1.j() - 1 | 0;
      $l$loop_0: while (!(current === -1)) {
        var newCurrentNodes = updatedNodeCount($this, current) + delta | 0;
        updateNodeCount($this, current, newCurrentNodes);
        var inductionVariable = minPending;
        if (0 <= inductionVariable)
          $l$loop: do {
            var pendingIndex = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            var pending = $this.lw_1.w11(pendingIndex);
            if (!(pending == null) ? pending.e11(current, newCurrentNodes) : false) {
              minPending = pendingIndex - 1 | 0;
              break $l$loop;
            }
          }
           while (0 <= inductionVariable);
        if (current < 0) {
          current = $this.lx_1.hz_1;
        } else {
          if ($this.lx_1.x11(current))
            break $l$loop_0;
          current = $this.lx_1.vz(current);
        }
      }
    }
  }
  function nodeIndexOf($this, groupLocation, group, recomposeGroup, recomposeIndex) {
    var anchorGroup = $this.lx_1.vz(group);
    $l$loop: while (!(anchorGroup === recomposeGroup) && !$this.lx_1.x11(anchorGroup)) {
      anchorGroup = $this.lx_1.vz(anchorGroup);
    }
    var index = $this.lx_1.x11(anchorGroup) ? 0 : recomposeIndex;
    if (anchorGroup === group)
      return index;
    var current = anchorGroup;
    var nodeIndexLimit = index + (updatedNodeCount($this, anchorGroup) - $this.lx_1.y11(group) | 0) | 0;
    loop: while (index < nodeIndexLimit && current !== groupLocation) {
      current = current + 1 | 0;
      while (current < groupLocation) {
        var end = current + $this.lx_1.f11(current) | 0;
        if (groupLocation < end)
          continue loop;
        index = index + updatedNodeCount($this, current) | 0;
        current = end;
      }
      break loop;
    }
    return index;
  }
  function updatedNodeCount($this, group) {
    if (group < 0) {
      var tmp0_safe_receiver = $this.sw_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.updatedNodeCount.<anonymous>' call
        tmp = tmp0_safe_receiver.t2(group);
      }
      var tmp1_elvis_lhs = tmp;
      return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    var nodeCounts = $this.rw_1;
    if (!(nodeCounts == null)) {
      var override = nodeCounts[group];
      if (override >= 0)
        return override;
    }
    return $this.lx_1.y11(group);
  }
  function updateNodeCount($this, group, count) {
    if (!(updatedNodeCount($this, group) === count)) {
      if (group < 0) {
        var tmp0_elvis_lhs = $this.sw_1;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts = HashMap_init_$Create$();
          $this.sw_1 = newCounts;
          tmp = newCounts;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var virtualCounts = tmp;
        // Inline function 'kotlin.collections.set' call
        virtualCounts.j2(group, count);
      } else {
        var tmp1_elvis_lhs = $this.rw_1;
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts_0 = new Int32Array($this.lx_1.j());
          fill(newCounts_0, -1);
          $this.rw_1 = newCounts_0;
          tmp_0 = newCounts_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        var nodeCounts = tmp_0;
        nodeCounts[group] = count;
      }
    }
  }
  function clearUpdatedNodeCounts($this) {
    $this.rw_1 = null;
    $this.sw_1 = null;
  }
  function recordUpsAndDowns($this, oldGroup, newGroup, commonRoot) {
    var reader = $this.lx_1;
    var nearestCommonRoot = nearestCommonRootOf(reader, oldGroup, newGroup, commonRoot);
    var current = oldGroup;
    while (current > 0 ? !(current === nearestCommonRoot) : false) {
      if (reader.x11(current)) {
        recordUp($this);
      }
      current = reader.vz(current);
    }
    doRecordDownsFor($this, newGroup, nearestCommonRoot);
  }
  function doRecordDownsFor($this, group, nearestCommonRoot) {
    if (group > 0 ? !(group === nearestCommonRoot) : false) {
      doRecordDownsFor($this, $this.lx_1.vz(group), nearestCommonRoot);
      if ($this.lx_1.x11(group)) {
        recordDown($this, nodeAt($this.lx_1, $this, group));
      }
    }
  }
  function compoundKeyOf($this, group, recomposeGroup, recomposeKey) {
    var tmp;
    if (group === recomposeGroup) {
      tmp = recomposeKey;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.compoundKeyOf.<anonymous>' call
      var groupKey = groupCompoundKeyPart($this.lx_1, $this, group);
      var tmp_0;
      if (groupKey === get_movableContentKey()) {
        tmp_0 = groupKey;
      } else {
        // Inline function 'androidx.compose.runtime.rol' call
        var this_0 = compoundKeyOf($this, $this.lx_1.vz(group), recomposeGroup, recomposeKey);
        tmp_0 = rotateLeft(this_0, 3) ^ groupKey;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function groupCompoundKeyPart(_this__u8e3s4, $this, group) {
    var tmp;
    if (_this__u8e3s4.z11(group)) {
      var tmp0_safe_receiver = _this__u8e3s4.tz(group);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
        var tmp_1;
        if (tmp0_safe_receiver instanceof Enum) {
          tmp_1 = tmp0_safe_receiver.s9_1;
        } else {
          if (tmp0_safe_receiver instanceof MovableContent) {
            tmp_1 = get_movableContentKey();
          } else {
            tmp_1 = hashCode(tmp0_safe_receiver);
          }
        }
        tmp_0 = tmp_1;
      }
      var tmp1_elvis_lhs = tmp_0;
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
      var it = _this__u8e3s4.uz(group);
      var tmp_2;
      if (it === 207) {
        var tmp0_safe_receiver_0 = _this__u8e3s4.sz(group);
        var tmp_3;
        if (tmp0_safe_receiver_0 == null) {
          tmp_3 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>.<anonymous>' call
          tmp_3 = equals(tmp0_safe_receiver_0, Companion_getInstance_0().gu_1) ? it : hashCode(tmp0_safe_receiver_0);
        }
        var tmp1_elvis_lhs_0 = tmp_3;
        tmp_2 = tmp1_elvis_lhs_0 == null ? it : tmp1_elvis_lhs_0;
      } else {
        tmp_2 = it;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function skipReaderToGroupEnd($this) {
    $this.pw_1 = $this.lx_1.a12();
    $this.lx_1.xu();
  }
  function addRecomposeScope($this) {
    if ($this.tx_1) {
      var tmp = $this.kw_1;
      var scope = new RecomposeScopeImpl(tmp instanceof CompositionImpl ? tmp : THROW_CCE());
      $this.ix_1.b11(scope);
      $this.b12(scope);
      scope.d12($this.fx_1);
    } else {
      var invalidation = removeLocation($this.ww_1, $this.lx_1.hz_1);
      var slot = $this.lx_1.z();
      var tmp_0;
      if (equals(slot, Companion_getInstance_0().gu_1)) {
        var tmp_1 = $this.kw_1;
        var newScope = new RecomposeScopeImpl(tmp_1 instanceof CompositionImpl ? tmp_1 : THROW_CCE());
        $this.b12(newScope);
        tmp_0 = newScope;
      } else {
        tmp_0 = slot instanceof RecomposeScopeImpl ? slot : THROW_CCE();
      }
      var scope_0 = tmp_0;
      scope_0.c12(!(invalidation == null));
      $this.ix_1.b11(scope_0);
      scope_0.d12($this.fx_1);
    }
  }
  function invokeMovableContentLambda($this, content, locals, parameter, force) {
    $this.ou(get_movableContentKey(), content);
    $this.fv(parameter);
    var savedCompoundKeyHash = $this.ux_1;
    try {
      $this.ux_1 = get_movableContentKey();
      if ($this.tx_1) {
        $this.nx_1.e12();
      }
      var providersChanged = $this.tx_1 ? false : !equals($this.lx_1.yz(), locals);
      if (providersChanged) {
        $this.zw_1.f12($this.lx_1.fz_1, locals);
      }
      start($this, 202, get_compositionLocalMap(), Companion_getInstance_1().oz_1, locals);
      if ($this.tx_1 ? !force : false) {
        $this.ox_1 = true;
        $this.px_1 = null;
        var anchor = $this.nx_1.r10($this.nx_1.vz($this.nx_1.st_1));
        var reference = new MovableContentStateReference(content, parameter, $this.kw_1, $this.mx_1, anchor, emptyList(), currentCompositionLocalScope($this));
        $this.fw_1.g12(reference);
      } else {
        var savedProvidersInvalid = $this.ax_1;
        $this.ax_1 = providersChanged;
        invokeComposable$composable($this, ComposableLambda$invoke$ref(composableLambdaInstance(316014703, true, ComposerImpl$invokeMovableContentLambda$lambda(content, parameter))));
        $this.ax_1 = savedProvidersInvalid;
      }
    }finally {
      endGroup($this);
      $this.ux_1 = savedCompoundKeyHash;
      $this.pu();
    }
  }
  function insertMovableContentGuarded($this, references) {
    $l$block_1: {
      // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
      var newChanges = $this.jw_1;
      var savedChanges = $this.iw_1;
      try {
        $this.iw_1 = newChanges;
        record($this, get_resetSlotsInstance());
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = references.j() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = references.k(index);
            // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>' call
            var to = item.kd();
            var from = item.ld();
            var anchor = to.zv_1;
            var location = to.yv_1.h12(anchor);
            var effectiveNodeIndex = {_v: 0};
            realizeUps($this);
            record($this, ComposerImpl$insertMovableContentGuarded$lambda(effectiveNodeIndex, anchor));
            if (from == null) {
              var toSlotTable = to.yv_1;
              if (equals(toSlotTable, $this.mx_1)) {
                createFreshInsertTable($this);
              }
              // Inline function 'androidx.compose.runtime.SlotTable.read' call
              // Inline function 'kotlin.let' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
              var reader = to.yv_1.oy();
              var tmp;
              try {
                reader.a11(location);
                $this.xx_1 = location;
                // Inline function 'kotlin.collections.mutableListOf' call
                var offsetChanges = ArrayList_init_$Create$();
                recomposeMovableContent$default($this, VOID, VOID, VOID, VOID, ComposerImpl$insertMovableContentGuarded$lambda_0($this, offsetChanges, reader, to));
                var tmp_0;
                // Inline function 'kotlin.collections.isNotEmpty' call
                if (!offsetChanges.q()) {
                  record($this, ComposerImpl$insertMovableContentGuarded$lambda_1(effectiveNodeIndex, offsetChanges));
                  tmp_0 = Unit_instance;
                }
                tmp = tmp_0;
              }finally {
                reader.lz();
              }
            } else {
              var resolvedState = $this.fw_1.i12(from);
              var tmp1_elvis_lhs = resolvedState == null ? null : resolvedState.j12_1;
              var fromTable = tmp1_elvis_lhs == null ? from.yv_1 : tmp1_elvis_lhs;
              var tmp3_safe_receiver = resolvedState == null ? null : resolvedState.j12_1;
              var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.r10(0);
              var fromAnchor = tmp4_elvis_lhs == null ? from.zv_1 : tmp4_elvis_lhs;
              var nodesToInsert = collectNodesFrom(fromTable, fromAnchor);
              // Inline function 'kotlin.collections.isNotEmpty' call
              if (!nodesToInsert.q()) {
                record($this, ComposerImpl$insertMovableContentGuarded$lambda_2(effectiveNodeIndex, nodesToInsert));
                if (equals(to.yv_1, $this.gw_1)) {
                  var group = $this.gw_1.h12(anchor);
                  updateNodeCount($this, group, updatedNodeCount($this, group) + nodesToInsert.j() | 0);
                }
              }
              record($this, ComposerImpl$insertMovableContentGuarded$lambda_3(resolvedState, $this, from, to));
              // Inline function 'androidx.compose.runtime.SlotTable.read' call
              // Inline function 'kotlin.let' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
              var reader_0 = fromTable.oy();
              var tmp_1;
              try {
                var tmp$ret$9;
                $l$block_0: {
                  // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
                  var savedReader = $this.lx_1;
                  var savedCountOverrides = $this.rw_1;
                  $this.rw_1 = null;
                  try {
                    $this.lx_1 = reader_0;
                    var newLocation = fromTable.h12(fromAnchor);
                    reader_0.a11(newLocation);
                    $this.xx_1 = newLocation;
                    // Inline function 'kotlin.collections.mutableListOf' call
                    var offsetChanges_0 = ArrayList_init_$Create$();
                    $l$block: {
                      // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
                      var savedChanges_0 = $this.iw_1;
                      try {
                        $this.iw_1 = offsetChanges_0;
                        var tmp_2 = reader_0.fz_1;
                        var tmp_3 = from.aw_1;
                        recomposeMovableContent($this, from.xv_1, to.xv_1, tmp_2, tmp_3, ComposerImpl$insertMovableContentGuarded$lambda_4($this, to));
                        break $l$block;
                      }finally {
                        $this.iw_1 = savedChanges_0;
                      }
                    }
                    var tmp_4;
                    // Inline function 'kotlin.collections.isNotEmpty' call
                    if (!offsetChanges_0.q()) {
                      record($this, ComposerImpl$insertMovableContentGuarded$lambda_5(effectiveNodeIndex, offsetChanges_0));
                      tmp_4 = Unit_instance;
                    }
                    tmp$ret$9 = tmp_4;
                    break $l$block_0;
                  }finally {
                    $this.lx_1 = savedReader;
                    $this.rw_1 = savedCountOverrides;
                  }
                }
                tmp_1 = tmp$ret$9;
              }finally {
                reader_0.lz();
              }
            }
            record($this, get_skipToGroupEndInstance());
          }
           while (inductionVariable <= last);
        record($this, ComposerImpl$insertMovableContentGuarded$lambda_6);
        $this.xx_1 = 0;
        break $l$block_1;
      }finally {
        $this.iw_1 = savedChanges;
      }
    }
  }
  function recomposeMovableContent($this, from, to, index, invalidations, block) {
    var savedImplicitRootStart = $this.zx_1;
    var savedIsComposing = $this.jx_1;
    var savedNodeIndex = $this.nw_1;
    try {
      $this.zx_1 = false;
      $this.jx_1 = true;
      $this.nw_1 = 0;
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = invalidations.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = invalidations.k(index_0);
          // Inline function 'androidx.compose.runtime.ComposerImpl.recomposeMovableContent.<anonymous>' call
          var scope = item.kd();
          var instances = item.ld();
          if (!(instances == null)) {
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
            // Inline function 'kotlin.contracts.contract' call
            var values = instances.n12_1;
            var inductionVariable_0 = 0;
            var last_0 = instances.m12_1;
            if (inductionVariable_0 < last_0)
              do {
                var i = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.compose.runtime.ComposerImpl.recomposeMovableContent.<anonymous>.<anonymous>' call
                var tmp = values[i];
                var instance = !(tmp == null) ? tmp : THROW_CCE();
                $this.l12(scope, instance);
              }
               while (inductionVariable_0 < last_0);
          } else {
            $this.l12(scope, null);
          }
        }
         while (inductionVariable <= last);
      var tmp_0;
      if (from == null) {
        tmp_0 = null;
      } else {
        tmp_0 = from.o12(to, index == null ? -1 : index, block);
      }
      var tmp2_elvis_lhs = tmp_0;
      return tmp2_elvis_lhs == null ? block() : tmp2_elvis_lhs;
    }finally {
      $this.zx_1 = savedImplicitRootStart;
      $this.jx_1 = savedIsComposing;
      $this.nw_1 = savedNodeIndex;
    }
  }
  function recomposeMovableContent$default($this, from, to, index, invalidations, block, $super) {
    from = from === VOID ? null : from;
    to = to === VOID ? null : to;
    index = index === VOID ? null : index;
    invalidations = invalidations === VOID ? emptyList() : invalidations;
    return recomposeMovableContent($this, from, to, index, invalidations, block);
  }
  function _get_node__db0vwp(_this__u8e3s4, $this) {
    return _this__u8e3s4.p12(_this__u8e3s4.hz_1);
  }
  function nodeAt(_this__u8e3s4, $this, index) {
    return _this__u8e3s4.p12(index);
  }
  function validateNodeExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!$this.vw_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeExpected.<anonymous>' call
      var message = 'A call to createNode(), emitNode() or useNode() expected was not expected';
      composeRuntimeError(toString(message));
    }
    $this.vw_1 = false;
  }
  function validateNodeNotExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!$this.vw_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeNotExpected.<anonymous>' call
      var message = 'A call to createNode(), emitNode() or useNode() expected';
      composeRuntimeError(toString(message));
    }
  }
  function record($this, change) {
    $this.iw_1.u(change);
  }
  function recordApplierOperation($this, change) {
    realizeUps($this);
    realizeDowns_0($this);
    record($this, change);
  }
  function recordSlotEditingOperation($this, change) {
    realizeOperationLocation$default($this);
    recordSlotEditing($this);
    record($this, change);
  }
  function recordSlotTableOperation($this, forParent, change) {
    realizeOperationLocation($this, forParent);
    record($this, change);
  }
  function recordSlotTableOperation$default($this, forParent, change, $super) {
    forParent = forParent === VOID ? false : forParent;
    return recordSlotTableOperation($this, forParent, change);
  }
  function realizeUps($this) {
    var count = $this.vx_1;
    if (count > 0) {
      $this.vx_1 = 0;
      record($this, ComposerImpl$realizeUps$lambda(count));
    }
  }
  function realizeDowns($this, nodes) {
    record($this, ComposerImpl$realizeDowns$lambda(nodes));
  }
  function realizeDowns_0($this) {
    if ($this.wx_1.q12()) {
      realizeDowns($this, $this.wx_1.c3());
      $this.wx_1.b1();
    }
  }
  function recordDown($this, node) {
    $this.wx_1.b11(node);
  }
  function recordUp($this) {
    if ($this.wx_1.q12()) {
      $this.wx_1.c11();
    } else {
      $this.vx_1 = $this.vx_1 + 1 | 0;
    }
  }
  function realizeOperationLocation($this, forParent) {
    var location = forParent ? $this.lx_1.hz_1 : $this.lx_1.fz_1;
    var distance = location - $this.xx_1 | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(distance >= 0)) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.realizeOperationLocation.<anonymous>' call
      var message = 'Tried to seek backward';
      composeRuntimeError(toString(message));
    }
    if (distance > 0) {
      record($this, ComposerImpl$realizeOperationLocation$lambda(distance));
      $this.xx_1 = location;
    }
  }
  function realizeOperationLocation$default($this, forParent, $super) {
    forParent = forParent === VOID ? false : forParent;
    return realizeOperationLocation($this, forParent);
  }
  function recordInsert($this, anchor) {
    if ($this.sx_1.q()) {
      var insertTable = $this.mx_1;
      recordSlotEditingOperation($this, ComposerImpl$recordInsert$lambda(insertTable, anchor));
    } else {
      var fixups = toMutableList($this.sx_1);
      $this.sx_1.b1();
      realizeUps($this);
      realizeDowns_0($this);
      var insertTable_0 = $this.mx_1;
      recordSlotEditingOperation($this, ComposerImpl$recordInsert$lambda_0(insertTable_0, fixups, anchor));
    }
  }
  function recordFixup($this, change) {
    $this.sx_1.u(change);
  }
  function recordInsertUpFixup($this, change) {
    $this.by_1.b11(change);
  }
  function registerInsertUpFixup($this) {
    $this.sx_1.u($this.by_1.c11());
  }
  function recordDelete($this) {
    reportFreeMovableContent($this, $this.lx_1.fz_1);
    recordSlotEditingOperation($this, get_removeCurrentGroupInstance());
    $this.xx_1 = $this.xx_1 + $this.lx_1.r12() | 0;
  }
  function reportFreeMovableContent($this, groupBeingRemoved) {
    reportFreeMovableContent$reportGroup($this, groupBeingRemoved, false, 0);
    realizeMovement($this);
  }
  function releaseMovableGroupAtCurrent($this, reference, slots) {
    var slotTable = new SlotTable();
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = slotTable.xz();
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.ComposerImpl.releaseMovableGroupAtCurrent.<anonymous>' call
      writer.q10();
      writer.b10(get_movableContentKey(), reference.vv_1);
      writer.e12();
      writer.s12(reference.wv_1);
      var anchors = slots.t12(reference.zv_1, 1, writer);
      writer.rz();
      writer.m11();
      writer.n11();
      tmp = anchors;
    }finally {
      writer.lz();
    }
    var anchors_0 = tmp;
    var state = new MovableContentState(slotTable);
    if (Companion_instance_2.v12(slotTable, anchors_0)) {
      var composition = $this.kw_1;
      var movableContentRecomposeScopeOwner = new ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1(composition, reference);
      // Inline function 'androidx.compose.runtime.SlotTable.write' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
      var writer_0 = slotTable.xz();
      var tmp_0;
      try {
        Companion_instance_2.u12(writer_0, anchors_0, movableContentRecomposeScopeOwner);
        tmp_0 = Unit_instance;
      }finally {
        writer_0.lz();
      }
    }
    $this.fw_1.w12(reference, state);
  }
  function reportAllMovableContent($this) {
    if ($this.gw_1.x12()) {
      // Inline function 'kotlin.collections.mutableListOf' call
      var changes = ArrayList_init_$Create$();
      $this.qx_1 = changes;
      // Inline function 'androidx.compose.runtime.SlotTable.read' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
      var reader = $this.gw_1.oy();
      var tmp;
      try {
        $this.lx_1 = reader;
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
          var savedChanges = $this.iw_1;
          try {
            $this.iw_1 = changes;
            reportFreeMovableContent($this, 0);
            realizeUps($this);
            var tmp_0;
            if ($this.yx_1) {
              record($this, get_skipToGroupEndInstance());
              recordEndRoot($this);
              tmp_0 = Unit_instance;
            }
            tmp$ret$1 = tmp_0;
            break $l$block;
          }finally {
            $this.iw_1 = savedChanges;
          }
        }
        tmp = tmp$ret$1;
      }finally {
        reader.lz();
      }
    }
  }
  function recordReaderMoving($this, location) {
    var distance = $this.lx_1.fz_1 - $this.xx_1 | 0;
    $this.xx_1 = location - distance | 0;
  }
  function recordSlotEditing($this) {
    if ($this.lx_1.j() > 0) {
      var reader = $this.lx_1;
      var location = reader.hz_1;
      if (!($this.ay_1.y12(-2) === location)) {
        if (!$this.yx_1 ? $this.zx_1 : false) {
          recordSlotTableOperation$default($this, VOID, get_startRootGroup());
          $this.yx_1 = true;
        }
        if (location > 0) {
          var anchor = reader.r10(location);
          $this.ay_1.uy(location);
          recordSlotTableOperation$default($this, VOID, ComposerImpl$recordSlotEditing$lambda(anchor));
        }
      }
    }
  }
  function recordEndGroup($this) {
    var location = $this.lx_1.hz_1;
    var currentStartedGroup = $this.ay_1.y12(-1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(currentStartedGroup <= location)) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.recordEndGroup.<anonymous>' call
      var message = 'Missed recording an endGroup';
      composeRuntimeError(toString(message));
    }
    if ($this.ay_1.y12(-1) === location) {
      $this.ay_1.c11();
      recordSlotTableOperation$default($this, VOID, get_endGroupInstance());
    }
  }
  function recordEndRoot($this) {
    if ($this.yx_1) {
      recordSlotTableOperation$default($this, VOID, get_endGroupInstance());
      $this.yx_1 = false;
    }
  }
  function finalizeCompose($this) {
    realizeUps($this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!$this.lw_1.q()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.finalizeCompose.<anonymous>' call
      var message = 'Start/end imbalance';
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!$this.ay_1.q()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.finalizeCompose.<anonymous>' call
      var message_0 = 'Missed recording an endGroup()';
      composeRuntimeError(toString(message_0));
    }
    cleanUpCompose($this);
  }
  function cleanUpCompose($this) {
    $this.mw_1 = null;
    $this.nw_1 = 0;
    $this.pw_1 = 0;
    $this.xx_1 = 0;
    $this.ux_1 = 0;
    $this.vw_1 = false;
    $this.yx_1 = false;
    $this.ay_1.b1();
    $this.ix_1.b1();
    clearUpdatedNodeCounts($this);
  }
  function recordRemoveNode($this, nodeIndex, count) {
    if (count > 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(nodeIndex >= 0)) {
        // Inline function 'androidx.compose.runtime.ComposerImpl.recordRemoveNode.<anonymous>' call
        var message = 'Invalid remove index ' + nodeIndex;
        composeRuntimeError(toString(message));
      }
      if ($this.cy_1 === nodeIndex) {
        $this.fy_1 = $this.fy_1 + count | 0;
      } else {
        realizeMovement($this);
        $this.cy_1 = nodeIndex;
        $this.fy_1 = count;
      }
    }
  }
  function recordMoveNode($this, from, to, count) {
    if (count > 0) {
      if (($this.fy_1 > 0 ? $this.dy_1 === (from - $this.fy_1 | 0) : false) ? $this.ey_1 === (to - $this.fy_1 | 0) : false) {
        $this.fy_1 = $this.fy_1 + count | 0;
      } else {
        realizeMovement($this);
        $this.dy_1 = from;
        $this.ey_1 = to;
        $this.fy_1 = count;
      }
    }
  }
  function realizeMovement($this) {
    var count = $this.fy_1;
    $this.fy_1 = 0;
    if (count > 0) {
      if ($this.cy_1 >= 0) {
        var removeIndex = $this.cy_1;
        $this.cy_1 = -1;
        recordApplierOperation($this, ComposerImpl$realizeMovement$lambda(removeIndex, count));
      } else {
        var from = $this.dy_1;
        $this.dy_1 = -1;
        var to = $this.ey_1;
        $this.ey_1 = -1;
        recordApplierOperation($this, ComposerImpl$realizeMovement$lambda_0(from, to, count));
      }
    }
  }
  function CompositionContextHolder() {
  }
  function updateCompoundKeyWhenWeEnterGroup($this, groupKey, dataKey, data) {
    if (dataKey == null)
      if ((!(data == null) ? groupKey === 207 : false) ? !equals(data, Companion_getInstance_0().gu_1) : false) {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, hashCode(data));
      } else {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, groupKey);
      }
     else {
      if (dataKey instanceof Enum) {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, dataKey.s9_1);
      } else {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, hashCode(dataKey));
      }
    }
  }
  function updateCompoundKeyWhenWeEnterGroupKeyHash($this, keyHash) {
    var tmp = $this;
    // Inline function 'androidx.compose.runtime.rol' call
    var this_0 = $this.ux_1;
    tmp.ux_1 = rotateLeft(this_0, 3) ^ keyHash;
  }
  function updateCompoundKeyWhenWeExitGroup($this, groupKey, dataKey, data) {
    if (dataKey == null)
      if ((!(data == null) ? groupKey === 207 : false) ? !equals(data, Companion_getInstance_0().gu_1) : false) {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, hashCode(data));
      } else {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, groupKey);
      }
     else {
      if (dataKey instanceof Enum) {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, dataKey.s9_1);
      } else {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, hashCode(dataKey));
      }
    }
  }
  function updateCompoundKeyWhenWeExitGroupKeyHash($this, groupKey) {
    var tmp = $this;
    // Inline function 'androidx.compose.runtime.ror' call
    var this_0 = $this.ux_1 ^ groupKey;
    tmp.ux_1 = rotateRight(this_0, 3);
  }
  function doCompose$composable($this, invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!$this.jx_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>' call
      var message = 'Reentrant composition is not supported';
      composeRuntimeError(toString(message));
    }
    $l$block: {
      // Inline function 'androidx.compose.runtime.trace' call
      var sectionName = 'Compose:recompose';
      var token = Trace_instance.z12(sectionName);
      try {
        $this.fx_1 = currentSnapshot().f13();
        $this.zw_1.b1();
        // Inline function 'androidx.compose.runtime.collection.IdentityArrayMap.forEach' call
        var inductionVariable = 0;
        var last = invalidationsRequested.i13_1;
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
            var tmp = invalidationsRequested.g13_1[index];
            var scope = !(tmp == null) ? tmp : THROW_CCE();
            var tmp_0 = invalidationsRequested.h13_1[index];
            var set = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
            var tmp0_safe_receiver = scope.au_1;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j13_1;
            var tmp_1;
            if (tmp1_elvis_lhs == null) {
              return Unit_instance;
            } else {
              tmp_1 = tmp1_elvis_lhs;
            }
            var location = tmp_1;
            $this.ww_1.u(new Invalidation(scope, location, set));
          }
           while (inductionVariable < last);
        // Inline function 'kotlin.collections.sortBy' call
        var this_0 = $this.ww_1;
        if (this_0.j() > 1) {
          // Inline function 'kotlin.comparisons.compareBy' call
          var tmp_2 = ComposerImpl$doCompose$composable$lambda;
          var tmp$ret$1 = new sam$kotlin_Comparator$0(tmp_2);
          sortWith(this_0, tmp$ret$1);
        }
        $this.nw_1 = 0;
        var complete = false;
        $this.jx_1 = true;
        var tmp_3;
        try {
          startRoot($this);
          var savedContent = $this.k13();
          if (!(savedContent === content) ? !(content == null) : false) {
            $this.b12((content == null ? true : !(content == null)) ? content : THROW_CCE());
          }
          // Inline function 'androidx.compose.runtime.observeDerivedStateRecalculations' call
          var observer = $this.hx_1;
          var observers = derivedStateObservers_0();
          try {
            observers.p13(observer);
            // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
            if (!(content == null)) {
              startGroup_0($this, 200, get_invocation());
              invokeComposable$composable($this, content);
              endGroup($this);
            } else if ((($this.uw_1 ? true : $this.ax_1) ? !(savedContent == null) : false) ? !equals(savedContent, Companion_getInstance_0().gu_1) : false) {
              startGroup_0($this, 200, get_invocation());
              invokeComposable$composable($this, (!(savedContent == null) ? typeof savedContent === 'function' : false) ? savedContent : THROW_CCE());
              endGroup($this);
            } else {
              $this.q13();
            }
          }finally {
            // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
            var tmp$ret$2 = observers.n13_1 - 1 | 0;
            observers.g1(tmp$ret$2);
          }
          endRoot($this);
          complete = true;
          tmp_3 = Unit_instance;
        }finally {
          $this.jx_1 = false;
          $this.ww_1.b1();
          if (!complete) {
            abortRoot($this);
          }
        }
        break $l$block;
      }finally {
        Trace_instance.r13(token);
      }
    }
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.s13_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).t13 = function (a, b) {
    return this.s13_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.t13(a, b);
  };
  function insertMovableContentGuarded$positionToParentOf(slots, applier, index) {
    while (!slots.u13(index)) {
      slots.xu();
      if (slots.x11(slots.st_1)) {
        applier.xr();
      }
      slots.m11();
    }
  }
  function insertMovableContentGuarded$currentNodeIndex(slots) {
    var original = slots.rt_1;
    var current = slots.st_1;
    while (current >= 0 ? !slots.x11(current) : false) {
      current = slots.vz(current);
    }
    var index = 0;
    current = current + 1 | 0;
    while (current < original) {
      if (slots.v13(original, current)) {
        if (slots.x11(current))
          index = 0;
        current = current + 1 | 0;
      } else {
        index = index + (slots.x11(current) ? 1 : slots.y11(current)) | 0;
        current = current + slots.f11(current) | 0;
      }
    }
    return index;
  }
  function insertMovableContentGuarded$positionToInsert(slots, anchor, applier) {
    var destination = slots.h12(anchor);
    runtimeCheck(slots.rt_1 < destination);
    insertMovableContentGuarded$positionToParentOf(slots, applier, destination);
    var nodeIndex = insertMovableContentGuarded$currentNodeIndex(slots);
    while (slots.rt_1 < destination) {
      if (slots.x13(destination)) {
        if (slots.w13()) {
          applier.wr(slots.p12(slots.rt_1));
          nodeIndex = 0;
        }
        slots.zz();
      } else
        nodeIndex = nodeIndex + slots.rz() | 0;
    }
    runtimeCheck(slots.rt_1 === destination);
    return nodeIndex;
  }
  function reportFreeMovableContent$reportGroup(this$0, group, needsNodeDelete, nodeIndex) {
    var tmp;
    if (this$0.lx_1.k14(group)) {
      var key = this$0.lx_1.uz(group);
      var objectKey = this$0.lx_1.tz(group);
      var tmp_0;
      var tmp_1;
      if (key === get_movableContentKey()) {
        tmp_1 = objectKey instanceof MovableContent;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var movableContent = objectKey instanceof MovableContent ? objectKey : THROW_CCE();
        var parameter = this$0.lx_1.z13(group, 0);
        var anchor = this$0.lx_1.r10(group);
        var end = group + this$0.lx_1.f11(group) | 0;
        // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
        var this_0 = filterToRange(this$0.ww_1, group, end);
        // Inline function 'kotlin.contracts.contract' call
        var target = ArrayList_init_$Create$_0(this_0.j());
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = this_0.j() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = this_0.k(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
            // Inline function 'kotlin.collections.plusAssign' call
            // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
            var element = to(item.p11_1, item.r11_1);
            target.u(element);
          }
           while (inductionVariable <= last);
        var invalidations = target;
        var reference = new MovableContentStateReference(movableContent, parameter, this$0.kw_1, this$0.gw_1, anchor, invalidations, currentCompositionLocalScope_0(this$0, group));
        this$0.fw_1.j14(reference);
        recordSlotEditing(this$0);
        record(this$0, ComposerImpl$reportFreeMovableContent$reportGroup$lambda(this$0, reference));
        var tmp_2;
        if (needsNodeDelete) {
          realizeMovement(this$0);
          realizeUps(this$0);
          realizeDowns_0(this$0);
          var nodeCount = this$0.lx_1.x11(group) ? 1 : this$0.lx_1.y11(group);
          if (nodeCount > 0) {
            recordRemoveNode(this$0, nodeIndex, nodeCount);
          }
          tmp_2 = 0;
        } else {
          tmp_2 = this$0.lx_1.y11(group);
        }
        tmp_0 = tmp_2;
      } else {
        if (key === 206 ? equals(objectKey, get_reference()) : false) {
          var tmp_3 = this$0.lx_1.z13(group, 0);
          var contextHolder = tmp_3 instanceof CompositionContextHolder ? tmp_3 : null;
          if (!(contextHolder == null)) {
            var compositionContext = contextHolder.a14_1;
            // Inline function 'kotlin.collections.forEach' call
            var tmp0_iterator = compositionContext.f14_1.l();
            while (tmp0_iterator.x()) {
              var element_0 = tmp0_iterator.z();
              // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
              reportAllMovableContent(element_0);
              this$0.fw_1.i14(element_0.kw_1);
            }
          }
          tmp_0 = this$0.lx_1.y11(group);
        } else {
          tmp_0 = this$0.lx_1.y11(group);
        }
      }
      tmp = tmp_0;
    } else if (this$0.lx_1.y13(group)) {
      var size = this$0.lx_1.f11(group);
      var end_0 = group + size | 0;
      var current = group + 1 | 0;
      var runningNodeCount = 0;
      while (current < end_0) {
        var isNode = this$0.lx_1.x11(current);
        if (isNode) {
          realizeMovement(this$0);
          recordDown(this$0, this$0.lx_1.p12(current));
        }
        runningNodeCount = runningNodeCount + reportFreeMovableContent$reportGroup(this$0, current, isNode ? true : needsNodeDelete, isNode ? 0 : nodeIndex + runningNodeCount | 0) | 0;
        if (isNode) {
          realizeMovement(this$0);
          recordUp(this$0);
        }
        current = current + this$0.lx_1.f11(current) | 0;
      }
      tmp = runningNodeCount;
    } else {
      tmp = this$0.lx_1.y11(group);
    }
    return tmp;
  }
  function ComposerImpl$derivedStateObserver$1(this$0) {
    this.l14_1 = this$0;
  }
  function ComposerImpl$createNode$lambda($factory, $groupAnchor, $insertIndex) {
    return function (applier, slots, _anonymous_parameter_2__qggqfi) {
      var node = $factory();
      slots.m14($groupAnchor, node);
      var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
      nodeApplier.yr($insertIndex, node);
      applier.wr(node);
      return Unit_instance;
    };
  }
  function ComposerImpl$createNode$lambda_0($groupAnchor, $insertIndex) {
    return function (applier, slots, _anonymous_parameter_2__qggqfi) {
      var nodeToInsert = slots.n14($groupAnchor);
      applier.xr();
      var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
      nodeApplier.zr($insertIndex, nodeToInsert);
      return Unit_instance;
    };
  }
  function ComposerImpl$useNode$lambda(applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
    var tmp = applier.tr();
    ((!(tmp == null) ? isInterface(tmp, ComposeNodeLifecycleCallback) : false) ? tmp : THROW_CCE()).xs();
    return Unit_instance;
  }
  function ComposerImpl$apply$lambda($block, $value) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      var tmp = applier.tr();
      $block((tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE(), $value);
      return Unit_instance;
    };
  }
  function ComposerImpl$updateValue$lambda($value) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, rememberManager) {
      rememberManager.o14($value);
      return Unit_instance;
    };
  }
  function ComposerImpl$updateValue$lambda_0($value, $groupSlotIndex) {
    return function (_anonymous_parameter_0__qggqh8, slots, rememberManager) {
      var tmp;
      if (!($value == null) ? isInterface($value, RememberObserver) : false) {
        rememberManager.o14($value);
        tmp = Unit_instance;
      }
      var previous = slots.p14($groupSlotIndex, $value);
      var tmp_0;
      if (!(previous == null) ? isInterface(previous, RememberObserver) : false) {
        rememberManager.xt(previous);
        tmp_0 = Unit_instance;
      } else {
        if (previous instanceof RecomposeScopeImpl) {
          previous.ok();
          tmp_0 = Unit_instance;
        }
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$startProviders$lambda($values, $parentScope) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.mu(-948105361);
      sourceInformation($composer_0, 'C1996@73844L42:Composer.kt#9igjgp');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-948105361, $changed, -1, 'androidx.compose.runtime.ComposerImpl.startProviders.<anonymous> (Composer.kt:1995)');
        tmp = Unit_instance;
      }
      var tmp0 = compositionLocalMapOf$composable($values, $parentScope, $composer_0, 0);
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.nu();
      return tmp0;
    };
  }
  function ComposerImpl$startReaderGroup$lambda($data) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.q14($data);
      return Unit_instance;
    };
  }
  function ComposerImpl$start$lambda($currentRelativePosition) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.r14($currentRelativePosition);
      return Unit_instance;
    };
  }
  function ComposerImpl$endRestartGroup$lambda($this, this$0) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      $this(this$0.kw_1);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.s14(p0, p1);
    };
  }
  function ComposerImpl$invokeMovableContentLambda$lambda($content, $parameter) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C2947@112623L18:Composer.kt#9igjgp');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.ju()) {
        if (isTraceInProgress()) {
          traceEventStart(316014703, $changed, -1, 'androidx.compose.runtime.ComposerImpl.invokeMovableContentLambda.<anonymous> (Composer.kt:2947)');
        }
        $content.t14_1($parameter, $composer_0, 0);
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
  function ComposerImpl$insertMovableContentGuarded$lambda($effectiveNodeIndex, $anchor) {
    return function (applier, slots, _anonymous_parameter_2__qggqfi) {
      if (!isInterface(applier, Applier))
        THROW_CCE();
      $effectiveNodeIndex._v = insertMovableContentGuarded$positionToInsert(slots, $anchor, applier);
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_0(this$0, $offsetChanges, $reader, $to) {
    return function () {
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
        var this_0 = this$0;
        var newChanges = $offsetChanges;
        var savedChanges = this_0.iw_1;
        try {
          this_0.iw_1 = newChanges;
          $l$block: {
            // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
            var this_1 = this$0;
            var reader = $reader;
            var savedReader = this_1.lx_1;
            var savedCountOverrides = this_1.rw_1;
            this_1.rw_1 = null;
            try {
              this_1.lx_1 = reader;
              invokeMovableContentLambda(this$0, $to.vv_1, $to.bw_1, $to.wv_1, true);
              break $l$block;
            }finally {
              this_1.lx_1 = savedReader;
              this_1.rw_1 = savedCountOverrides;
            }
          }
          break $l$block_0;
        }finally {
          this_0.iw_1 = savedChanges;
        }
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_1($effectiveNodeIndex, $offsetChanges) {
    return function (applier, slots, rememberManager) {
      var offsetApplier = $effectiveNodeIndex._v > 0 ? new OffsetApplier(applier, $effectiveNodeIndex._v) : applier;
      var this_0 = $offsetChanges;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.j() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.k(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(offsetApplier, slots, rememberManager);
        }
         while (inductionVariable <= last);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_2($effectiveNodeIndex, $nodesToInsert) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      var base = $effectiveNodeIndex._v;
      var this_0 = $nodesToInsert;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.j() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.k(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!isInterface(applier, Applier))
            THROW_CCE();
          applier.zr(base + index | 0, item);
          applier.yr(base + index | 0, item);
        }
         while (inductionVariable <= last);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_3($resolvedState, this$0, $from, $to) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      var tmp0_elvis_lhs = $resolvedState;
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? this$0.fw_1.i12($from) : tmp0_elvis_lhs;
      var tmp;
      if (tmp1_elvis_lhs == null) {
        composeRuntimeError('Could not resolve state for movable content');
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var state = tmp;
      var anchors = slots.u14(1, state.j12_1, 2);
      var tmp_0 = Companion_instance_2;
      var tmp_1 = $to.xv_1;
      tmp_0.u12(slots, anchors, isInterface(tmp_1, RecomposeScopeOwner) ? tmp_1 : THROW_CCE());
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_4(this$0, $to) {
    return function () {
      invokeMovableContentLambda(this$0, $to.vv_1, $to.bw_1, $to.wv_1, true);
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_5($effectiveNodeIndex, $offsetChanges) {
    return function (applier, slots, rememberManager) {
      var offsetApplier = $effectiveNodeIndex._v > 0 ? new OffsetApplier(applier, $effectiveNodeIndex._v) : applier;
      var this_0 = $offsetChanges;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.j() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.k(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(offsetApplier, slots, rememberManager);
        }
         while (inductionVariable <= last);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_6(applier, slots, _anonymous_parameter_2__qggqfi) {
    if (!isInterface(applier, Applier))
      THROW_CCE();
    insertMovableContentGuarded$positionToParentOf(slots, applier, 0);
    slots.m11();
    return Unit_instance;
  }
  function ComposerImpl$realizeUps$lambda($count) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      var times = $count;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var tmp;
      if (inductionVariable < times) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.ComposerImpl.realizeUps.<anonymous>.<anonymous>' call
          applier.xr();
        }
         while (inductionVariable < times);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$realizeDowns$lambda($nodes) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      var inductionVariable = 0;
      var last = $nodes.length - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
          nodeApplier.wr($nodes[index]);
        }
         while (inductionVariable <= last);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$realizeOperationLocation$lambda($distance) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.v14($distance);
      return Unit_instance;
    };
  }
  function ComposerImpl$recordInsert$lambda($insertTable, $anchor) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.q10();
      slots.x14($insertTable, $anchor.w14($insertTable), false);
      slots.n11();
      return Unit_instance;
    };
  }
  function ComposerImpl$recordInsert$lambda_0($insertTable, $fixups, $anchor) {
    return function (applier, slots, rememberManager) {
      // Inline function 'androidx.compose.runtime.SlotTable.write' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
      var writer = $insertTable.xz();
      var tmp;
      try {
        var this_0 = $fixups;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = this_0.j() - 1 | 0;
        var tmp_0;
        if (inductionVariable <= last) {
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = this_0.k(index);
            // Inline function 'androidx.compose.runtime.ComposerImpl.recordInsert.<anonymous>.<anonymous>.<anonymous>' call
            item(applier, writer, rememberManager);
          }
           while (inductionVariable <= last);
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      }finally {
        writer.lz();
      }
      slots.q10();
      slots.x14($insertTable, $anchor.w14($insertTable), false);
      slots.n11();
      return Unit_instance;
    };
  }
  function ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1($composition, $reference) {
    this.y14_1 = $composition;
    this.z14_1 = $reference;
  }
  protoOf(ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).a15 = function (scope, instance) {
    var tmp = this.y14_1;
    var tmp0_safe_receiver = isInterface(tmp, RecomposeScopeOwner) ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a15(scope, instance);
    var result = tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
    if (result.equals(InvalidationResult_IGNORED_getInstance())) {
      var tmp2_this = this.z14_1;
      var tmp_0 = tmp2_this;
      var tmp_1 = tmp2_this.aw_1;
      var tmp_2;
      if (instance == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.<no name provided>.invalidate.<anonymous>' call
        // Inline function 'kotlin.also' call
        var this_0 = new IdentityArraySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.<no name provided>.invalidate.<anonymous>.<anonymous>' call
        this_0.b15(this_0);
        tmp_2 = this_0;
      }
      tmp_0.aw_1 = plus_0(tmp_1, to(scope, tmp_2));
      return InvalidationResult_SCHEDULED_getInstance();
    }
    return result;
  };
  protoOf(ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).c15 = function (scope) {
  };
  protoOf(ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).d15 = function (value) {
  };
  function ComposerImpl$recordSlotEditing$lambda($anchor) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.e15($anchor);
      return Unit_instance;
    };
  }
  function ComposerImpl$realizeMovement$lambda($removeIndex, $count) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      applier.as($removeIndex, $count);
      return Unit_instance;
    };
  }
  function ComposerImpl$realizeMovement$lambda_0($from, $to, $count) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      applier.bs($from, $to, $count);
      return Unit_instance;
    };
  }
  function ComposerImpl$doCompose$composable$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
    var tmp = a.q11_1;
    // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
    var tmp$ret$1 = b.q11_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function ComposerImpl$reportFreeMovableContent$reportGroup$lambda(this$0, $reference) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      releaseMovableGroupAtCurrent(this$0, $reference, slots);
      return Unit_instance;
    };
  }
  function ComposerImpl(applier, parentContext, slotTable, abandonSet, changes, lateChanges, composition) {
    this.ew_1 = applier;
    this.fw_1 = parentContext;
    this.gw_1 = slotTable;
    this.hw_1 = abandonSet;
    this.iw_1 = changes;
    this.jw_1 = lateChanges;
    this.kw_1 = composition;
    this.lw_1 = new Stack();
    this.mw_1 = null;
    this.nw_1 = 0;
    this.ow_1 = new IntStack();
    this.pw_1 = 0;
    this.qw_1 = new IntStack();
    this.rw_1 = null;
    this.sw_1 = null;
    this.tw_1 = false;
    this.uw_1 = false;
    this.vw_1 = false;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.ww_1 = ArrayList_init_$Create$();
    this.xw_1 = new IntStack();
    this.yw_1 = persistentCompositionLocalHashMapOf();
    this.zw_1 = new IntMap();
    this.ax_1 = false;
    this.bx_1 = new IntStack();
    this.cx_1 = false;
    this.dx_1 = -1;
    this.ex_1 = 0;
    this.fx_1 = 0;
    this.gx_1 = true;
    var tmp_0 = this;
    tmp_0.hx_1 = new ComposerImpl$derivedStateObserver$1(this);
    this.ix_1 = new Stack();
    this.jx_1 = false;
    this.kx_1 = false;
    var tmp_1 = this;
    // Inline function 'kotlin.also' call
    var this_0 = this.gw_1.oy();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.reader.<anonymous>' call
    this_0.lz();
    tmp_1.lx_1 = this_0;
    this.mx_1 = new SlotTable();
    var tmp_2 = this;
    // Inline function 'kotlin.also' call
    var this_1 = this.mx_1.xz();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.writer.<anonymous>' call
    this_1.lz();
    tmp_2.nx_1 = this_1;
    this.ox_1 = false;
    this.px_1 = null;
    this.qx_1 = null;
    var tmp_3 = this;
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var reader = this.mx_1.oy();
    var tmp_4;
    try {
      // Inline function 'androidx.compose.runtime.ComposerImpl.insertAnchor.<anonymous>' call
      tmp_4 = reader.r10(0);
    }finally {
      reader.lz();
    }
    tmp_3.rx_1 = tmp_4;
    var tmp_5 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_5.sx_1 = ArrayList_init_$Create$();
    this.tx_1 = false;
    this.ux_1 = 0;
    this.vx_1 = 0;
    this.wx_1 = new Stack();
    this.xx_1 = 0;
    this.yx_1 = false;
    this.zx_1 = true;
    this.ay_1 = new IntStack();
    this.by_1 = new Stack();
    this.cy_1 = -1;
    this.dy_1 = -1;
    this.ey_1 = -1;
    this.fy_1 = 0;
  }
  protoOf(ComposerImpl).hu = function () {
    return this.ew_1;
  };
  protoOf(ComposerImpl).f15 = function () {
    return this.ex_1 > 0;
  };
  protoOf(ComposerImpl).nv = function () {
    return this.fw_1.g15();
  };
  protoOf(ComposerImpl).mu = function (key) {
    return start(this, key, null, Companion_getInstance_1().oz_1, null);
  };
  protoOf(ComposerImpl).nu = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).qu = function () {
    return start(this, -127, null, Companion_getInstance_1().oz_1, null);
  };
  protoOf(ComposerImpl).ru = function () {
    endGroup(this);
    var scope = this.h15();
    if (!(scope == null) ? scope.d11() : false) {
      scope.i15(true);
    }
  };
  protoOf(ComposerImpl).ku = function () {
    var tmp;
    if (this.ax_1) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = this.h15();
      tmp = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ku()) === true;
    }
    return tmp;
  };
  protoOf(ComposerImpl).ou = function (key, dataKey) {
    return start(this, key, dataKey, Companion_getInstance_1().oz_1, null);
  };
  protoOf(ComposerImpl).pu = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).j15 = function () {
    createFreshInsertTable(this);
    this.zw_1.b1();
  };
  protoOf(ComposerImpl).iu = function () {
    return this.tx_1;
  };
  protoOf(ComposerImpl).ju = function () {
    var tmp;
    var tmp_0;
    if ((!this.tx_1 ? !this.cx_1 : false) ? !this.ax_1 : false) {
      var tmp0_safe_receiver = this.h15();
      tmp_0 = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k15()) === false;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !this.uw_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).yu = function () {
    start(this, 125, null, Companion_getInstance_1().pz_1, null);
    this.vw_1 = true;
  };
  protoOf(ComposerImpl).zu = function (factory) {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.tx_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.createNode.<anonymous>' call
      var message = 'createNode() can only be called when inserting';
      composeRuntimeError(toString(message));
    }
    var insertIndex = this.ow_1.l15();
    var groupAnchor = this.nx_1.r10(this.nx_1.st_1);
    this.pw_1 = this.pw_1 + 1 | 0;
    recordFixup(this, ComposerImpl$createNode$lambda(factory, groupAnchor, insertIndex));
    recordInsertUpFixup(this, ComposerImpl$createNode$lambda_0(groupAnchor, insertIndex));
  };
  protoOf(ComposerImpl).av = function () {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.tx_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.useNode.<anonymous>' call
      var message = 'useNode() called while inserting';
      composeRuntimeError(toString(message));
    }
    var node = _get_node__db0vwp(this.lx_1, this);
    recordDown(this, node);
    var tmp;
    if (this.cx_1) {
      tmp = !(node == null) ? isInterface(node, ComposeNodeLifecycleCallback) : false;
    } else {
      tmp = false;
    }
    if (tmp) {
      recordApplierOperation(this, ComposerImpl$useNode$lambda);
    }
  };
  protoOf(ComposerImpl).bv = function () {
    return end(this, true);
  };
  protoOf(ComposerImpl).cv = function (value, block) {
    var operation = ComposerImpl$apply$lambda(block, value);
    if (this.tx_1) {
      recordFixup(this, operation);
    } else {
      recordApplierOperation(this, operation);
    }
  };
  protoOf(ComposerImpl).k13 = function () {
    var tmp;
    if (this.tx_1) {
      validateNodeNotExpected(this);
      tmp = Companion_getInstance_0().gu_1;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.nextSlot.<anonymous>' call
      var it = this.lx_1.z();
      tmp = this.cx_1 ? Companion_getInstance_0().gu_1 : it;
    }
    return tmp;
  };
  protoOf(ComposerImpl).fv = function (value) {
    var tmp;
    if (!equals(this.k13(), value)) {
      this.b12(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).iv = function (value) {
    var tmp;
    if (!(this.k13() === value)) {
      this.b12(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).gv = function (value) {
    var next = this.k13();
    if (!(next == null) ? typeof next === 'boolean' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.b12(value);
    return true;
  };
  protoOf(ComposerImpl).hv = function (value) {
    var next = this.k13();
    if (!(next == null) ? typeof next === 'number' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.b12(value);
    return true;
  };
  protoOf(ComposerImpl).b12 = function (value) {
    if (this.tx_1) {
      this.nx_1.s12(value);
      if (!(value == null) ? isInterface(value, RememberObserver) : false) {
        record(this, ComposerImpl$updateValue$lambda(value));
        this.hw_1.u(value);
      }
    } else {
      var groupSlotIndex = this.lx_1.m15() - 1 | 0;
      if (!(value == null) ? isInterface(value, RememberObserver) : false) {
        this.hw_1.u(value);
      }
      recordSlotTableOperation(this, true, ComposerImpl$updateValue$lambda_0(value, groupSlotIndex));
    }
  };
  protoOf(ComposerImpl).lv = function (values) {
    var parentScope = currentCompositionLocalScope(this);
    startGroup_0(this, 201, get_provider());
    startGroup_0(this, 203, get_providerValues());
    var currentProviders = invokeComposableForResult$composable(this, ComposerImpl$startProviders$lambda(values, parentScope));
    endGroup(this);
    var providers;
    var invalid;
    if (this.tx_1) {
      providers = updateProviderMapGroup(this, parentScope, currentProviders);
      invalid = false;
      this.ox_1 = true;
    } else {
      var tmp = this.lx_1.n15(0);
      var oldScope = (!(tmp == null) ? isInterface(tmp, PersistentCompositionLocalMap) : false) ? tmp : THROW_CCE();
      var tmp_0 = this.lx_1.n15(1);
      var oldValues = (!(tmp_0 == null) ? isInterface(tmp_0, PersistentCompositionLocalMap) : false) ? tmp_0 : THROW_CCE();
      if (!this.ju() ? true : !equals(oldValues, currentProviders)) {
        providers = updateProviderMapGroup(this, parentScope, currentProviders);
        invalid = !equals(providers, oldScope);
      } else {
        skipGroup(this);
        providers = oldScope;
        invalid = false;
      }
    }
    if (invalid ? !this.tx_1 : false) {
      this.zw_1.f12(this.lx_1.fz_1, providers);
    }
    this.bx_1.uy(asInt(this.ax_1));
    this.ax_1 = invalid;
    this.px_1 = providers;
    start(this, 202, get_compositionLocalMap(), Companion_getInstance_1().oz_1, providers);
  };
  protoOf(ComposerImpl).mv = function () {
    endGroup(this);
    endGroup(this);
    this.ax_1 = asBool(this.bx_1.c11());
    this.px_1 = null;
  };
  protoOf(ComposerImpl).kv = function (key) {
    return read(currentCompositionLocalScope(this), key);
  };
  protoOf(ComposerImpl).h15 = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.<get-currentRecomposeScope>.<anonymous>' call
    var it = this.ix_1;
    return (this.ex_1 === 0 ? it.q12() : false) ? it.l15() : null;
  };
  protoOf(ComposerImpl).l12 = function (scope, instance) {
    var tmp0_elvis_lhs = scope.au_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var anchor = tmp;
    var slotTable = this.lx_1.zy_1;
    var location = anchor.w14(slotTable);
    if (this.jx_1 ? location >= this.lx_1.fz_1 : false) {
      insertIfMissing(this.ww_1, location, scope, instance);
      return true;
    }
    return false;
  };
  protoOf(ComposerImpl).q13 = function () {
    if (this.ww_1.q()) {
      skipGroup(this);
    } else {
      var reader = this.lx_1;
      var key = reader.m10();
      var dataKey = reader.o10();
      var aux = reader.yz();
      updateCompoundKeyWhenWeEnterGroup(this, key, dataKey, aux);
      startReaderGroup(this, reader.w13(), null);
      recomposeToGroupEnd(this);
      reader.k11();
      updateCompoundKeyWhenWeExitGroup(this, key, dataKey, aux);
    }
  };
  protoOf(ComposerImpl).xu = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.pw_1 === 0)) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.skipToGroupEnd.<anonymous>' call
      var message = 'No nodes can be emitted before calling skipAndEndGroup';
      composeRuntimeError(toString(message));
    }
    var tmp0_safe_receiver = this.h15();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.o15();
    }
    if (this.ww_1.q()) {
      skipReaderToGroupEnd(this);
    } else {
      recomposeToGroupEnd(this);
    }
  };
  protoOf(ComposerImpl).su = function (key) {
    start(this, key, null, Companion_getInstance_1().oz_1, null);
    addRecomposeScope(this);
    return this;
  };
  protoOf(ComposerImpl).tu = function () {
    var scope = this.ix_1.q12() ? this.ix_1.c11() : null;
    if (scope != null) {
      scope.c12(false);
    }
    var tmp2_safe_receiver = scope == null ? null : scope.p15(this.fx_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      record(this, ComposerImpl$endRestartGroup$lambda(tmp2_safe_receiver, this));
    }
    var tmp;
    if ((!(scope == null) ? !scope.r15() : false) ? scope.d11() ? true : this.tw_1 : false) {
      if (scope.au_1 == null) {
        var tmp_0 = scope;
        var tmp_1;
        if (this.tx_1) {
          tmp_1 = this.nx_1.r10(this.nx_1.st_1);
        } else {
          tmp_1 = this.lx_1.r10(this.lx_1.hz_1);
        }
        tmp_0.au_1 = tmp_1;
      }
      scope.q15(false);
      tmp = scope;
    } else {
      tmp = null;
    }
    var result = tmp;
    end(this, false);
    return result;
  };
  protoOf(ComposerImpl).s15 = function (references) {
    var completed = false;
    try {
      insertMovableContentGuarded(this, references);
      completed = true;
    }finally {
      if (completed) {
        cleanUpCompose(this);
      } else {
        abortRoot(this);
      }
    }
  };
  protoOf(ComposerImpl).uu = function (sourceInformation) {
    if (this.tx_1 ? this.gx_1 : false) {
      this.nx_1.t15(sourceInformation);
    }
  };
  protoOf(ComposerImpl).vu = function (key, sourceInformation) {
    if (this.gx_1) {
      start(this, key, null, Companion_getInstance_1().oz_1, sourceInformation);
    }
  };
  protoOf(ComposerImpl).wu = function () {
    if (this.gx_1) {
      end(this, false);
    }
  };
  protoOf(ComposerImpl).u15 = function (block) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.jx_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.prepareCompose.<anonymous>' call
      var message = 'Preparing a composition while composing is not supported';
      composeRuntimeError(toString(message));
    }
    this.jx_1 = true;
    try {
      block();
    }finally {
      this.jx_1 = false;
    }
  };
  protoOf(ComposerImpl).v15 = function (invalidationsRequested) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.iw_1.q()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.recompose.<anonymous>' call
      var message = 'Expected applyChanges() to have been called';
      composeRuntimeError(toString(message));
    }
    var tmp;
    var tmp_0;
    if (invalidationsRequested.q12()) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_0 = !this.ww_1.q();
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = this.uw_1;
    }
    if (tmp) {
      doCompose$composable(this, invalidationsRequested, null);
      // Inline function 'kotlin.collections.isNotEmpty' call
      return !this.iw_1.q();
    }
    return false;
  };
  protoOf(ComposerImpl).lu = function () {
    return this.h15();
  };
  protoOf(ComposerImpl).dv = function () {
    return this.k13();
  };
  protoOf(ComposerImpl).ev = function (value) {
    return this.b12(value);
  };
  protoOf(ComposerImpl).jv = function (scope) {
    var tmp0_safe_receiver = scope instanceof RecomposeScopeImpl ? scope : null;
    if (tmp0_safe_receiver != null) {
      tmp0_safe_receiver.w15(true);
    }
  };
  protoOf(ComposerImpl).x15 = function (invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.iw_1.q()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.composeContent$composable.<anonymous>' call
      var message = 'Expected applyChanges() to have been called';
      composeRuntimeError(toString(message));
    }
    doCompose$composable(this, invalidationsRequested, content);
  };
  function MovableContentState(slotTable) {
    this.j12_1 = slotTable;
    this.k12_1 = 8;
  }
  function Pending$keyMap$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.also' call
      var this_0 = multiMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Pending.keyMap$delegate.<anonymous>.<anonymous>' call
      var inductionVariable = 0;
      var last = this$0.e10_1.j();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var keyInfo = this$0.e10_1.k(index);
          put(this_0, get_joinedKey(keyInfo), keyInfo);
        }
         while (inductionVariable < last);
      return this_0;
    };
  }
  function Pending(keyInfos, startIndex) {
    this.e10_1 = keyInfos;
    this.f10_1 = startIndex;
    this.g10_1 = 0;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.f10_1 >= 0)) {
      // Inline function 'androidx.compose.runtime.Pending.<anonymous>' call
      var message = 'Invalid start index';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.h10_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Pending.groupInfos.<anonymous>' call
    var runningNodeIndex = 0;
    // Inline function 'kotlin.collections.hashMapOf' call
    var result = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = this.e10_1.j();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var keyInfo = this.e10_1.k(index);
        // Inline function 'kotlin.collections.set' call
        var key = keyInfo.u10_1;
        var value = new GroupInfo(index, runningNodeIndex, keyInfo.v10_1);
        result.j2(key, value);
        runningNodeIndex = runningNodeIndex + keyInfo.v10_1 | 0;
      }
       while (inductionVariable < last);
    tmp_0.i10_1 = result;
    var tmp_1 = this;
    tmp_1.j10_1 = lazy(Pending$keyMap$delegate$lambda(this));
  }
  protoOf(Pending).y15 = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.j10_1;
    keyMap$factory();
    return this_0.m2();
  };
  protoOf(Pending).p10 = function (key, dataKey) {
    var joinedKey = !(dataKey == null) ? new JoinedKey(key, dataKey) : key;
    return pop(this.y15(), joinedKey);
  };
  protoOf(Pending).l10 = function (keyInfo) {
    return this.h10_1.u(keyInfo);
  };
  protoOf(Pending).d11 = function () {
    return this.h10_1;
  };
  protoOf(Pending).z10 = function (from, to) {
    if (from > to) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = this.i10_1.h2().l();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
        var position = element.z15_1;
        if (position === from)
          element.z15_1 = to;
        else if (to <= position ? position < from : false)
          element.z15_1 = position + 1 | 0;
      }
    } else if (to > from) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = this.i10_1.h2().l();
      while (tmp0_iterator_0.x()) {
        var element_0 = tmp0_iterator_0.z();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
        var position_0 = element_0.z15_1;
        if (position_0 === from)
          element_0.z15_1 = to;
        else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
          element_0.z15_1 = position_0 - 1 | 0;
      }
    }
  };
  protoOf(Pending).h11 = function (from, to, count) {
    if (from > to) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = this.i10_1.h2().l();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
        var position = element.a16_1;
        if (from <= position ? position < (from + count | 0) : false)
          element.a16_1 = to + (position - from | 0) | 0;
        else if (to <= position ? position < from : false)
          element.a16_1 = position + count | 0;
      }
    } else if (to > from) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = this.i10_1.h2().l();
      while (tmp0_iterator_0.x()) {
        var element_0 = tmp0_iterator_0.z();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
        var position_0 = element_0.a16_1;
        if (from <= position_0 ? position_0 < (from + count | 0) : false)
          element_0.a16_1 = to + (position_0 - from | 0) | 0;
        else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
          element_0.a16_1 = position_0 - count | 0;
      }
    }
  };
  protoOf(Pending).k10 = function (keyInfo, insertIndex) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.i10_1;
    var key = keyInfo.u10_1;
    var value = new GroupInfo(-1, insertIndex, 0);
    this_0.j2(key, value);
  };
  protoOf(Pending).e11 = function (group, newCount) {
    var groupInfo = this.i10_1.t2(group);
    if (!(groupInfo == null)) {
      var index = groupInfo.a16_1;
      var difference = newCount - groupInfo.b16_1 | 0;
      groupInfo.b16_1 = newCount;
      if (!(difference === 0)) {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = this.i10_1.h2().l();
        while (tmp0_iterator.x()) {
          var element = tmp0_iterator.z();
          // Inline function 'androidx.compose.runtime.Pending.updateNodeCount.<anonymous>' call
          if (element.a16_1 >= index ? !equals(element, groupInfo) : false) {
            var newIndex = element.a16_1 + difference | 0;
            if (newIndex >= 0)
              element.a16_1 = newIndex;
          }
        }
      }
      return true;
    }
    return false;
  };
  protoOf(Pending).y10 = function (keyInfo) {
    var tmp0_safe_receiver = this.i10_1.t2(keyInfo.u10_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z15_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).x10 = function (keyInfo) {
    var tmp0_safe_receiver = this.i10_1.t2(keyInfo.u10_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a16_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).g11 = function (keyInfo) {
    var tmp0_safe_receiver = this.i10_1.t2(keyInfo.u10_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b16_1;
    return tmp1_elvis_lhs == null ? keyInfo.v10_1 : tmp1_elvis_lhs;
  };
  function Invalidation(scope, location, instances) {
    this.p11_1 = scope;
    this.q11_1 = location;
    this.r11_1 = instances;
  }
  protoOf(Invalidation).v11 = function () {
    return this.p11_1.c16(this.r11_1);
  };
  function _GroupKind___init__impl__iwqg06(value) {
    return value;
  }
  function _GroupKind___get_value__impl__cf5pqe($this) {
    return $this;
  }
  function Companion_0() {
    Companion_instance_1 = this;
    this.oz_1 = _GroupKind___init__impl__iwqg06(0);
    this.pz_1 = _GroupKind___init__impl__iwqg06(1);
    this.qz_1 = _GroupKind___init__impl__iwqg06(2);
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function asInt(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return _this__u8e3s4 ? 1 : 0;
  }
  function asBool(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4 === 0);
  }
  function removeRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.j()) {
      var validation = _this__u8e3s4.k(index);
      if (validation.q11_1 < end) {
        _this__u8e3s4.g1(index);
      } else
        break $l$loop;
    }
  }
  function firstInRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    if (index < _this__u8e3s4.j()) {
      var firstInvalidation = _this__u8e3s4.k(index);
      if (firstInvalidation.q11_1 < end)
        return firstInvalidation;
    }
    return null;
  }
  function removeLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findLocation(_this__u8e3s4, location);
    return index >= 0 ? _this__u8e3s4.g1(index) : null;
  }
  function nearestCommonRootOf(_this__u8e3s4, a, b, common) {
    _init_properties_Composer_kt__bmp4g0();
    if (a === b)
      return a;
    if (a === common ? true : b === common)
      return common;
    if (_this__u8e3s4.vz(a) === b)
      return b;
    if (_this__u8e3s4.vz(b) === a)
      return a;
    if (_this__u8e3s4.vz(a) === _this__u8e3s4.vz(b))
      return _this__u8e3s4.vz(a);
    var currentA = a;
    var currentB = b;
    var aDistance = distanceFrom(_this__u8e3s4, a, common);
    var bDistance = distanceFrom(_this__u8e3s4, b, common);
    // Inline function 'kotlin.repeat' call
    var times = aDistance - bDistance | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.nearestCommonRootOf.<anonymous>' call
        currentA = _this__u8e3s4.vz(currentA);
      }
       while (inductionVariable < times);
    // Inline function 'kotlin.repeat' call
    var times_0 = bDistance - aDistance | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < times_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.runtime.nearestCommonRootOf.<anonymous>' call
        currentB = _this__u8e3s4.vz(currentB);
      }
       while (inductionVariable_0 < times_0);
    while (!(currentA === currentB)) {
      currentA = _this__u8e3s4.vz(currentA);
      currentB = _this__u8e3s4.vz(currentB);
    }
    return currentA;
  }
  function insertIfMissing(_this__u8e3s4, location, scope, instance) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findLocation(_this__u8e3s4, location);
    if (index < 0) {
      var tmp = -(index + 1 | 0) | 0;
      var tmp_0;
      if (instance == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.insertIfMissing.<anonymous>' call
        // Inline function 'kotlin.also' call
        var this_0 = new IdentityArraySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.insertIfMissing.<anonymous>.<anonymous>' call
        this_0.b15(instance);
        tmp_0 = this_0;
      }
      _this__u8e3s4.t1(tmp, new Invalidation(scope, location, tmp_0));
    } else {
      if (instance == null) {
        _this__u8e3s4.k(index).r11_1 = null;
      } else {
        var tmp1_safe_receiver = _this__u8e3s4.k(index).r11_1;
        if (tmp1_safe_receiver == null)
          null;
        else
          tmp1_safe_receiver.b15(instance);
      }
    }
  }
  function collectNodesFrom(_this__u8e3s4, anchor) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var reader = _this__u8e3s4.oy();
    var tmp;
    try {
      var index = _this__u8e3s4.h12(anchor);
      collectNodesFrom$_anonymous_$collectFromGroup_lmwduz(reader, result, index);
      tmp = Unit_instance;
    }finally {
      reader.lz();
    }
    return result;
  }
  function filterToRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.j()) {
      var invalidation = _this__u8e3s4.k(index);
      if (invalidation.q11_1 < end) {
        result.u(invalidation);
      } else
        break $l$loop;
      index = index + 1 | 0;
    }
    return result;
  }
  function GroupInfo(slotIndex, nodeIndex, nodeCount) {
    this.z15_1 = slotIndex;
    this.a16_1 = nodeIndex;
    this.b16_1 = nodeCount;
  }
  function put(_this__u8e3s4, key, value) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.getOrPut' call
    var value_0 = _this__u8e3s4.t2(key);
    var tmp;
    if (value_0 == null) {
      // Inline function 'androidx.compose.runtime.put.<anonymous>' call
      var answer = LinkedHashSet_init_$Create$();
      _this__u8e3s4.j2(key, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    return tmp.u(value);
  }
  function get_joinedKey(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4.t10_1 == null) ? new JoinedKey(_this__u8e3s4.s10_1, _this__u8e3s4.t10_1) : _this__u8e3s4.s10_1;
  }
  function multiMap() {
    _init_properties_Composer_kt__bmp4g0();
    return HashMap_init_$Create$();
  }
  function pop(_this__u8e3s4, key) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = _this__u8e3s4.t2(key);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.pop.<anonymous>' call
      remove(_this__u8e3s4, key, tmp1_safe_receiver);
      tmp = tmp1_safe_receiver;
    }
    return tmp;
  }
  function findInsertLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.findInsertLocation.<anonymous>' call
    var it = findLocation(_this__u8e3s4, location);
    return it < 0 ? -(it + 1 | 0) | 0 : it;
  }
  function findLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var low = 0;
    var high = _this__u8e3s4.j() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4.k(mid);
      var cmp = compareTo(midVal.q11_1, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function distanceFrom(_this__u8e3s4, index, root) {
    _init_properties_Composer_kt__bmp4g0();
    var count = 0;
    var current = index;
    while (current > 0 ? !(current === root) : false) {
      current = _this__u8e3s4.vz(current);
      count = count + 1 | 0;
    }
    return count;
  }
  function remove(_this__u8e3s4, key, value) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = _this__u8e3s4.t2(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.v(value);
      var tmp_0;
      if (tmp0_safe_receiver.q()) {
        _this__u8e3s4.n2(key);
        tmp_0 = Unit_instance;
      }
      tmp = Unit_instance;
    }
    return tmp;
  }
  function _Updater___init__impl__rbfxm8(composer) {
    return composer;
  }
  function _Updater___get_composer__impl__9ty7av($this) {
    return $this;
  }
  function Updater__set_impl_v7kwss($this, value, block) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = _Updater___get_composer__impl__9ty7av($this);
    var tmp;
    if ($this$with.iu() ? true : !equals($this$with.dv(), value)) {
      $this$with.ev(value);
      _Updater___get_composer__impl__9ty7av($this).cv(value, block);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function _SkippableUpdater___init__impl__4ft0t9(composer) {
    return composer;
  }
  function _SkippableUpdater___get_composer__impl__6t7yne($this) {
    return $this;
  }
  function collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, group) {
    if ($reader.x11(group)) {
      result.u($reader.p12(group));
    } else {
      var current = group + 1 | 0;
      var end = group + $reader.f11(group) | 0;
      while (current < end) {
        collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, current);
        current = current + $reader.f11(current) | 0;
      }
    }
  }
  function removeCurrentGroupInstance$lambda(_anonymous_parameter_0__qggqh8, slots, rememberManager) {
    _init_properties_Composer_kt__bmp4g0();
    removeCurrentGroup(slots, rememberManager);
    return Unit_instance;
  }
  function skipToGroupEndInstance$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    _init_properties_Composer_kt__bmp4g0();
    slots.xu();
    return Unit_instance;
  }
  function endGroupInstance$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    _init_properties_Composer_kt__bmp4g0();
    slots.m11();
    return Unit_instance;
  }
  function startRootGroup$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    _init_properties_Composer_kt__bmp4g0();
    slots.d16(0);
    return Unit_instance;
  }
  function resetSlotsInstance$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    _init_properties_Composer_kt__bmp4g0();
    slots.e16();
    return Unit_instance;
  }
  function InvalidationResult_IGNORED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IGNORED_instance;
  }
  function InvalidationResult_SCHEDULED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_SCHEDULED_instance;
  }
  function InvalidationResult_DEFERRED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_DEFERRED_instance;
  }
  function InvalidationResult_IMMINENT_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IMMINENT_instance;
  }
  function keyMap$factory() {
    return getPropertyCallableRef('keyMap', 1, KProperty1, function (receiver) {
      return receiver.y15();
    }, null);
  }
  var properties_initialized_Composer_kt_89qzc2;
  function _init_properties_Composer_kt__bmp4g0() {
    if (!properties_initialized_Composer_kt_89qzc2) {
      properties_initialized_Composer_kt_89qzc2 = true;
      compositionTracer = null;
      removeCurrentGroupInstance = removeCurrentGroupInstance$lambda;
      skipToGroupEndInstance = skipToGroupEndInstance$lambda;
      endGroupInstance = endGroupInstance$lambda;
      startRootGroup = startRootGroup$lambda;
      resetSlotsInstance = resetSlotsInstance$lambda;
      invocation = new OpaqueKey('provider');
      provider = new OpaqueKey('provider');
      compositionLocalMap = new OpaqueKey('compositionLocalMap');
      providerValues = new OpaqueKey('providerValues');
      providerMaps = new OpaqueKey('providers');
      reference = new OpaqueKey('reference');
    }
  }
  function get_PendingApplyNoModifications() {
    _init_properties_Composition_kt__t5pjw8();
    return PendingApplyNoModifications;
  }
  var PendingApplyNoModifications;
  function _get_areChildrenComposing__c1uwup($this) {
    return $this.v16_1.f15();
  }
  function drainPendingModificationsForCompositionLocked($this) {
    var toRecord = $this.h16_1.c17(get_PendingApplyNoModifications());
    if (toRecord != null) {
      if (equals(toRecord, get_PendingApplyNoModifications())) {
        composeRuntimeError('pending composition has not been applied');
      } else {
        if (!(toRecord == null) ? isInterface(toRecord, Set) : false) {
          addPendingInvalidationsLocked_0($this, (!(toRecord == null) ? isInterface(toRecord, Set) : false) ? toRecord : THROW_CCE(), true);
        } else {
          if (!(toRecord == null) ? isArray(toRecord) : false) {
            var indexedObject = (!(toRecord == null) ? isArray(toRecord) : false) ? toRecord : THROW_CCE();
            var inductionVariable = 0;
            var last = indexedObject.length;
            while (inductionVariable < last) {
              var changed = indexedObject[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              addPendingInvalidationsLocked_0($this, changed, true);
            }
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + $this.h16_1);
          }
        }
      }
    }
  }
  function drainPendingModificationsLocked($this) {
    var toRecord = $this.h16_1.c17(null);
    if (!equals(toRecord, get_PendingApplyNoModifications())) {
      if (!(toRecord == null) ? isInterface(toRecord, Set) : false) {
        addPendingInvalidationsLocked_0($this, (!(toRecord == null) ? isInterface(toRecord, Set) : false) ? toRecord : THROW_CCE(), false);
      } else {
        if (!(toRecord == null) ? isArray(toRecord) : false) {
          var indexedObject = (!(toRecord == null) ? isArray(toRecord) : false) ? toRecord : THROW_CCE();
          var inductionVariable = 0;
          var last = indexedObject.length;
          while (inductionVariable < last) {
            var changed = indexedObject[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            addPendingInvalidationsLocked_0($this, changed, false);
          }
        } else {
          if (toRecord == null) {
            composeRuntimeError('calling recordModificationsOf and applyChanges concurrently is not supported');
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + $this.h16_1);
          }
        }
      }
    }
  }
  function addPendingInvalidationsLocked(_this__u8e3s4, $this, value, forgetConditionalScopes) {
    var set = _this__u8e3s4;
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
    var this_0 = $this.l16_1;
    var index = find_2(this_0, value);
    if (index >= 0) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      var this_1 = scopeSetAt(this_0, index);
      // Inline function 'kotlin.contracts.contract' call
      var values = this_1.n12_1;
      var inductionVariable = 0;
      var last = this_1.m12_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
          var tmp = values[i];
          var scope = !(tmp == null) ? tmp : THROW_CCE();
          if (!$this.q16_1.j17(value, scope) ? !scope.e17(value).equals(InvalidationResult_IGNORED_getInstance()) : false) {
            if (scope.d17() ? !forgetConditionalScopes : false) {
              $this.m16_1.u(scope);
            } else {
              if (set == null)
                set = HashSet_init_$Create$();
              var tmp0_safe_receiver = set;
              if (tmp0_safe_receiver == null)
                null;
              else
                tmp0_safe_receiver.u(scope);
            }
          }
        }
         while (inductionVariable < last);
    }
    return set;
  }
  function addPendingInvalidationsLocked_0($this, values, forgetConditionalScopes) {
    var invalidated = null;
    // Inline function 'androidx.compose.runtime.collection.fastForEach' call
    if (values instanceof IdentityArraySet) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values_0 = values.n12_1;
      var inductionVariable = 0;
      var last = values.m12_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
          var tmp = values_0[i];
          var value = !(tmp == null) ? tmp : THROW_CCE();
          if (value instanceof RecomposeScopeImpl) {
            value.e17(null);
          } else {
            invalidated = addPendingInvalidationsLocked(invalidated, $this, value, forgetConditionalScopes);
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
            var this_0 = $this.n16_1;
            var index = find_2(this_0, value);
            if (index >= 0) {
              // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
              var this_1 = scopeSetAt(this_0, index);
              // Inline function 'kotlin.contracts.contract' call
              var values_1 = this_1.n12_1;
              var inductionVariable_0 = 0;
              var last_0 = this_1.m12_1;
              if (inductionVariable_0 < last_0)
                do {
                  var i_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                  var tmp_0 = values_1[i_0];
                  var it = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
                  invalidated = addPendingInvalidationsLocked(invalidated, $this, it, forgetConditionalScopes);
                }
                 while (inductionVariable_0 < last_0);
            }
          }
        }
         while (inductionVariable < last);
    } else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = values.l();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
        if (element instanceof RecomposeScopeImpl) {
          element.e17(null);
        } else {
          invalidated = addPendingInvalidationsLocked(invalidated, $this, element, forgetConditionalScopes);
          // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
          var this_2 = $this.n16_1;
          var index_0 = find_2(this_2, element);
          if (index_0 >= 0) {
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
            var this_3 = scopeSetAt(this_2, index_0);
            // Inline function 'kotlin.contracts.contract' call
            var values_2 = this_3.n12_1;
            var inductionVariable_1 = 0;
            var last_1 = this_3.m12_1;
            if (inductionVariable_1 < last_1)
              do {
                var i_1 = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                var tmp_1 = values_2[i_1];
                var it_0 = !(tmp_1 == null) ? tmp_1 : THROW_CCE();
                invalidated = addPendingInvalidationsLocked(invalidated, $this, it_0, forgetConditionalScopes);
              }
               while (inductionVariable_1 < last_1);
          }
        }
      }
    }
    var tmp_2;
    if (forgetConditionalScopes) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_2 = !$this.m16_1.q();
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
      // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
      var this_4 = $this.l16_1;
      var valueOrder = this_4.f17_1;
      var scopeSets = this_4.h17_1;
      var values_3 = this_4.g17_1;
      var destinationIndex = 0;
      var inductionVariable_2 = 0;
      var last_2 = this_4.i17_1;
      if (inductionVariable_2 < last_2)
        do {
          var i_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var valueIndex = valueOrder[i_2];
          var set = ensureNotNull(scopeSets[valueIndex]);
          // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
          // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
          var values_4 = set.n12_1;
          var size = set.m12_1;
          var destinationIndex_0 = 0;
          var inductionVariable_3 = 0;
          if (inductionVariable_3 < size)
            do {
              var i_3 = inductionVariable_3;
              inductionVariable_3 = inductionVariable_3 + 1 | 0;
              var tmp_3 = values_4[i_3];
              var item = !(tmp_3 == null) ? tmp_3 : THROW_CCE();
              // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
              var tmp_4;
              if ($this.m16_1.o(item)) {
                tmp_4 = true;
              } else {
                var tmp0_safe_receiver = invalidated;
                var tmp_5;
                if (tmp0_safe_receiver == null) {
                  tmp_5 = null;
                } else {
                  // Inline function 'kotlin.let' call
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                  tmp_5 = tmp0_safe_receiver.o(item);
                }
                tmp_4 = tmp_5 === true;
              }
              if (!tmp_4) {
                if (!(destinationIndex_0 === i_3)) {
                  values_4[destinationIndex_0] = item;
                }
                destinationIndex_0 = destinationIndex_0 + 1 | 0;
              }
            }
             while (inductionVariable_3 < size);
          var inductionVariable_4 = destinationIndex_0;
          if (inductionVariable_4 < size)
            do {
              var i_4 = inductionVariable_4;
              inductionVariable_4 = inductionVariable_4 + 1 | 0;
              values_4[i_4] = null;
            }
             while (inductionVariable_4 < size);
          set.m12_1 = destinationIndex_0;
          if (set.m12_1 > 0) {
            if (!(destinationIndex === i_2)) {
              var destinationKeyOrder = valueOrder[destinationIndex];
              valueOrder[destinationIndex] = valueIndex;
              valueOrder[i_2] = destinationKeyOrder;
            }
            destinationIndex = destinationIndex + 1 | 0;
          }
        }
         while (inductionVariable_2 < last_2);
      var inductionVariable_5 = destinationIndex;
      var last_3 = this_4.i17_1;
      if (inductionVariable_5 < last_3)
        do {
          var i_5 = inductionVariable_5;
          inductionVariable_5 = inductionVariable_5 + 1 | 0;
          values_3[valueOrder[i_5]] = null;
        }
         while (inductionVariable_5 < last_3);
      this_4.i17_1 = destinationIndex;
      $this.m16_1.b1();
      cleanUpDerivedStateObservations($this);
    } else {
      var tmp0_safe_receiver_0 = invalidated;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
        var this_5 = $this.l16_1;
        var valueOrder_0 = this_5.f17_1;
        var scopeSets_0 = this_5.h17_1;
        var values_5 = this_5.g17_1;
        var destinationIndex_1 = 0;
        var inductionVariable_6 = 0;
        var last_4 = this_5.i17_1;
        if (inductionVariable_6 < last_4)
          do {
            var i_6 = inductionVariable_6;
            inductionVariable_6 = inductionVariable_6 + 1 | 0;
            var valueIndex_0 = valueOrder_0[i_6];
            var set_0 = ensureNotNull(scopeSets_0[valueIndex_0]);
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
            var values_6 = set_0.n12_1;
            var size_0 = set_0.m12_1;
            var destinationIndex_2 = 0;
            var inductionVariable_7 = 0;
            if (inductionVariable_7 < size_0)
              do {
                var i_7 = inductionVariable_7;
                inductionVariable_7 = inductionVariable_7 + 1 | 0;
                var tmp_6 = values_6[i_7];
                var item_0 = !(tmp_6 == null) ? tmp_6 : THROW_CCE();
                // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                if (!tmp0_safe_receiver_0.o(item_0)) {
                  if (!(destinationIndex_2 === i_7)) {
                    values_6[destinationIndex_2] = item_0;
                  }
                  destinationIndex_2 = destinationIndex_2 + 1 | 0;
                }
              }
               while (inductionVariable_7 < size_0);
            var inductionVariable_8 = destinationIndex_2;
            if (inductionVariable_8 < size_0)
              do {
                var i_8 = inductionVariable_8;
                inductionVariable_8 = inductionVariable_8 + 1 | 0;
                values_6[i_8] = null;
              }
               while (inductionVariable_8 < size_0);
            set_0.m12_1 = destinationIndex_2;
            if (set_0.m12_1 > 0) {
              if (!(destinationIndex_1 === i_6)) {
                var destinationKeyOrder_0 = valueOrder_0[destinationIndex_1];
                valueOrder_0[destinationIndex_1] = valueIndex_0;
                valueOrder_0[i_6] = destinationKeyOrder_0;
              }
              destinationIndex_1 = destinationIndex_1 + 1 | 0;
            }
          }
           while (inductionVariable_6 < last_4);
        var inductionVariable_9 = destinationIndex_1;
        var last_5 = this_5.i17_1;
        if (inductionVariable_9 < last_5)
          do {
            var i_9 = inductionVariable_9;
            inductionVariable_9 = inductionVariable_9 + 1 | 0;
            values_5[valueOrder_0[i_9]] = null;
          }
           while (inductionVariable_9 < last_5);
        this_5.i17_1 = destinationIndex_1;
        cleanUpDerivedStateObservations($this);
      }
    }
  }
  function cleanUpDerivedStateObservations($this) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
    var this_0 = $this.n16_1;
    var valueOrder = this_0.f17_1;
    var scopeSets = this_0.h17_1;
    var values = this_0.g17_1;
    var destinationIndex = 0;
    var inductionVariable = 0;
    var last = this_0.i17_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var valueIndex = valueOrder[i];
        var set = ensureNotNull(scopeSets[valueIndex]);
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
        // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
        var values_0 = set.n12_1;
        var size = set.m12_1;
        var destinationIndex_0 = 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < size)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp = values_0[i_0];
            var item = !(tmp == null) ? tmp : THROW_CCE();
            // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
            if (!!$this.l16_1.k17(item)) {
              if (!(destinationIndex_0 === i_0)) {
                values_0[destinationIndex_0] = item;
              }
              destinationIndex_0 = destinationIndex_0 + 1 | 0;
            }
          }
           while (inductionVariable_0 < size);
        var inductionVariable_1 = destinationIndex_0;
        if (inductionVariable_1 < size)
          do {
            var i_1 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            values_0[i_1] = null;
          }
           while (inductionVariable_1 < size);
        set.m12_1 = destinationIndex_0;
        if (set.m12_1 > 0) {
          if (!(destinationIndex === i)) {
            var destinationKeyOrder = valueOrder[destinationIndex];
            valueOrder[destinationIndex] = valueIndex;
            valueOrder[i] = destinationKeyOrder;
          }
          destinationIndex = destinationIndex + 1 | 0;
        }
      }
       while (inductionVariable < last);
    var inductionVariable_2 = destinationIndex;
    var last_0 = this_0.i17_1;
    if (inductionVariable_2 < last_0)
      do {
        var i_2 = inductionVariable_2;
        inductionVariable_2 = inductionVariable_2 + 1 | 0;
        values[valueOrder[i_2]] = null;
      }
       while (inductionVariable_2 < last_0);
    this_0.i17_1 = destinationIndex;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.m16_1.q()) {
      // Inline function 'androidx.compose.runtime.removeValueIf' call
      var iter = $this.m16_1.l();
      while (iter.x()) {
        // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
        if (!iter.z().d17()) {
          iter.y();
        }
      }
    }
  }
  function invalidateScopeOfLocked($this, value) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
    var this_0 = $this.l16_1;
    var index = find_2(this_0, value);
    if (index >= 0) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      var this_1 = scopeSetAt(this_0, index);
      // Inline function 'kotlin.contracts.contract' call
      var values = this_1.n12_1;
      var inductionVariable = 0;
      var last = this_1.m12_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateScopeOfLocked.<anonymous>' call
          var tmp = values[i];
          var scope = !(tmp == null) ? tmp : THROW_CCE();
          if (scope.e17(value).equals(InvalidationResult_IMMINENT_getInstance())) {
            $this.q16_1.l17(value, scope);
          }
        }
         while (inductionVariable < last);
    }
  }
  function applyChangesInLocked($this, changes) {
    var manager = new RememberEventDispatcher($this.j16_1);
    try {
      if (changes.q())
        return Unit_instance;
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:applyChanges';
        var token = Trace_instance.z12(sectionName);
        try {
          $this.g16_1.ur();
          // Inline function 'androidx.compose.runtime.SlotTable.write' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
          var writer = $this.k16_1.xz();
          var tmp;
          try {
            var applier = $this.g16_1;
            // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
            // Inline function 'kotlin.contracts.contract' call
            var inductionVariable = 0;
            var last = changes.j() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = changes.k(index);
                // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>.<anonymous>' call
                item(applier, writer, manager);
              }
               while (inductionVariable <= last);
            changes.b1();
            tmp = Unit_instance;
          }finally {
            writer.lz();
          }
          $this.g16_1.vr();
          break $l$block;
        }finally {
          Trace_instance.r13(token);
        }
      }
      manager.s17();
      manager.t17();
      if ($this.s16_1) {
        $l$block_0: {
          // Inline function 'androidx.compose.runtime.trace' call
          var sectionName_0 = 'Compose:unobserve';
          var token_0 = Trace_instance.z12(sectionName_0);
          try {
            $this.s16_1 = false;
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
            var this_0 = $this.l16_1;
            var valueOrder = this_0.f17_1;
            var scopeSets = this_0.h17_1;
            var values = this_0.g17_1;
            var destinationIndex = 0;
            var inductionVariable_0 = 0;
            var last_0 = this_0.i17_1;
            if (inductionVariable_0 < last_0)
              do {
                var i = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                var valueIndex = valueOrder[i];
                var set = ensureNotNull(scopeSets[valueIndex]);
                // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
                // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
                var values_0 = set.n12_1;
                var size = set.m12_1;
                var destinationIndex_0 = 0;
                var inductionVariable_1 = 0;
                if (inductionVariable_1 < size)
                  do {
                    var i_0 = inductionVariable_1;
                    inductionVariable_1 = inductionVariable_1 + 1 | 0;
                    var tmp_0 = values_0[i_0];
                    var item_0 = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
                    // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>' call
                    if (!!item_0.u17()) {
                      if (!(destinationIndex_0 === i_0)) {
                        values_0[destinationIndex_0] = item_0;
                      }
                      destinationIndex_0 = destinationIndex_0 + 1 | 0;
                    }
                  }
                   while (inductionVariable_1 < size);
                var inductionVariable_2 = destinationIndex_0;
                if (inductionVariable_2 < size)
                  do {
                    var i_1 = inductionVariable_2;
                    inductionVariable_2 = inductionVariable_2 + 1 | 0;
                    values_0[i_1] = null;
                  }
                   while (inductionVariable_2 < size);
                set.m12_1 = destinationIndex_0;
                if (set.m12_1 > 0) {
                  if (!(destinationIndex === i)) {
                    var destinationKeyOrder = valueOrder[destinationIndex];
                    valueOrder[destinationIndex] = valueIndex;
                    valueOrder[i] = destinationKeyOrder;
                  }
                  destinationIndex = destinationIndex + 1 | 0;
                }
              }
               while (inductionVariable_0 < last_0);
            var inductionVariable_3 = destinationIndex;
            var last_1 = this_0.i17_1;
            if (inductionVariable_3 < last_1)
              do {
                var i_2 = inductionVariable_3;
                inductionVariable_3 = inductionVariable_3 + 1 | 0;
                values[valueOrder[i_2]] = null;
              }
               while (inductionVariable_3 < last_1);
            this_0.i17_1 = destinationIndex;
            cleanUpDerivedStateObservations($this);
            break $l$block_0;
          }finally {
            Trace_instance.r13(token_0);
          }
        }
      }
    }finally {
      if ($this.p16_1.q()) {
        manager.v17();
      }
    }
  }
  function abandonChanges($this) {
    $this.h16_1.w17(null);
    $this.o16_1.b1();
    $this.p16_1.b1();
    $this.j16_1.b1();
  }
  function tryImminentInvalidation($this, scope, instance) {
    return $this.x17() ? $this.v16_1.l12(scope, instance) : false;
  }
  function invalidateChecked($this, scope, anchor, instance) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.i16_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>' call
    var tmp0_safe_receiver = $this.t16_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>.<anonymous>' call
      var tmp_0;
      if ($this.k16_1.y17($this.u16_1, anchor)) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var delegate = tmp;
    if (delegate == null) {
      if (tryImminentInvalidation($this, scope, instance)) {
        return InvalidationResult_IMMINENT_getInstance();
      }
      if (instance == null) {
        $this.r16_1.z17(scope, null);
      } else {
        addValue($this.r16_1, scope, instance);
      }
    }
    var delegate_0 = delegate;
    if (!(delegate_0 == null)) {
      return invalidateChecked(delegate_0, scope, anchor, instance);
    }
    $this.f16_1.a18($this);
    return $this.x17() ? InvalidationResult_DEFERRED_getInstance() : InvalidationResult_SCHEDULED_getInstance();
  }
  function takeInvalidations($this) {
    var invalidations = $this.r16_1;
    $this.r16_1 = new IdentityArrayMap();
    return invalidations;
  }
  function RememberEventDispatcher(abandoning) {
    this.m17_1 = abandoning;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.n17_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.o17_1 = ArrayList_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.p17_1 = ArrayList_init_$Create$();
    this.q17_1 = null;
    this.r17_1 = null;
  }
  protoOf(RememberEventDispatcher).o14 = function (instance) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.RememberEventDispatcher.remembering.<anonymous>' call
    var index = this.o17_1.v1(instance);
    var tmp;
    if (index >= 0) {
      this.o17_1.g1(index);
      tmp = this.m17_1.v(instance);
    } else {
      tmp = this.n17_1.u(instance);
    }
  };
  protoOf(RememberEventDispatcher).xt = function (instance) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.RememberEventDispatcher.forgetting.<anonymous>' call
    var index = this.n17_1.v1(instance);
    var tmp;
    if (index >= 0) {
      this.n17_1.g1(index);
      tmp = this.m17_1.v(instance);
    } else {
      tmp = this.o17_1.u(instance);
    }
  };
  protoOf(RememberEventDispatcher).wt = function (instance) {
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_elvis_lhs = this.r17_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var this_0 = ArrayList_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RememberEventDispatcher.releasing.<anonymous>' call
      this.r17_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.u(instance);
  };
  protoOf(RememberEventDispatcher).s17 = function () {
    var deactivating = this.q17_1;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(deactivating == null ? true : deactivating.q())) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:deactivations';
        var token = Trace_instance.z12(sectionName);
        try {
          var inductionVariable = deactivating.j() - 1 | 0;
          var tmp;
          if (0 <= inductionVariable) {
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              var instance = deactivating.k(i);
              instance.ys();
            }
             while (0 <= inductionVariable);
            tmp = Unit_instance;
          }
          break $l$block;
        }finally {
          Trace_instance.r13(token);
        }
      }
      deactivating.b1();
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.o17_1.q()) {
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName_0 = 'Compose:onForgotten';
        var token_0 = Trace_instance.z12(sectionName_0);
        try {
          var inductionVariable_0 = this.o17_1.j() - 1 | 0;
          var tmp_0;
          if (0 <= inductionVariable_0) {
            do {
              var i_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              var instance_0 = this.o17_1.k(i_0);
              if (!this.m17_1.o(instance_0)) {
                instance_0.b18();
              }
            }
             while (0 <= inductionVariable_0);
            tmp_0 = Unit_instance;
          }
          break $l$block_0;
        }finally {
          Trace_instance.r13(token_0);
        }
      }
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.n17_1.q()) {
      $l$block_1: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName_1 = 'Compose:onRemembered';
        var token_1 = Trace_instance.z12(sectionName_1);
        try {
          var this_0 = this.n17_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable_1 = 0;
          var last = this_0.j() - 1 | 0;
          var tmp_1;
          if (inductionVariable_1 <= last) {
            do {
              var index = inductionVariable_1;
              inductionVariable_1 = inductionVariable_1 + 1 | 0;
              var item = this_0.k(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchRememberObservers.<anonymous>.<anonymous>' call
              this.m17_1.v(item);
              item.c18();
            }
             while (inductionVariable_1 <= last);
            tmp_1 = Unit_instance;
          }
          break $l$block_1;
        }finally {
          Trace_instance.r13(token_1);
        }
      }
    }
    var releasing = this.r17_1;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(releasing == null ? true : releasing.q())) {
      $l$block_2: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName_2 = 'Compose:releases';
        var token_2 = Trace_instance.z12(sectionName_2);
        try {
          var inductionVariable_2 = releasing.j() - 1 | 0;
          var tmp_2;
          if (0 <= inductionVariable_2) {
            do {
              var i_1 = inductionVariable_2;
              inductionVariable_2 = inductionVariable_2 + -1 | 0;
              var instance_1 = releasing.k(i_1);
              instance_1.zs();
            }
             while (0 <= inductionVariable_2);
            tmp_2 = Unit_instance;
          }
          break $l$block_2;
        }finally {
          Trace_instance.r13(token_2);
        }
      }
      releasing.b1();
    }
  };
  protoOf(RememberEventDispatcher).t17 = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.p17_1.q()) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:sideeffects';
        var token = Trace_instance.z12(sectionName);
        try {
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var this_0 = this.p17_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = this_0.j() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = this_0.k(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchSideEffects.<anonymous>.<anonymous>' call
              item();
            }
             while (inductionVariable <= last);
          this.p17_1.b1();
          break $l$block;
        }finally {
          Trace_instance.r13(token);
        }
      }
    }
  };
  protoOf(RememberEventDispatcher).v17 = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.m17_1.q()) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:abandons';
        var token = Trace_instance.z12(sectionName);
        try {
          var iterator = this.m17_1.l();
          while (iterator.x()) {
            var instance = iterator.z();
            iterator.y();
            instance.d18();
          }
          break $l$block;
        }finally {
          Trace_instance.r13(token);
        }
      }
    }
  };
  function CompositionImpl(parent, applier, recomposeContext) {
    recomposeContext = recomposeContext === VOID ? null : recomposeContext;
    this.f16_1 = parent;
    this.g16_1 = applier;
    this.h16_1 = new AtomicReference(null);
    this.i16_1 = createSynchronizedObject();
    this.j16_1 = HashSet_init_$Create$();
    this.k16_1 = new SlotTable();
    this.l16_1 = new IdentityScopeMap();
    this.m16_1 = HashSet_init_$Create$();
    this.n16_1 = new IdentityScopeMap();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.o16_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.p16_1 = ArrayList_init_$Create$();
    this.q16_1 = new IdentityScopeMap();
    this.r16_1 = new IdentityArrayMap();
    this.s16_1 = false;
    this.t16_1 = null;
    this.u16_1 = 0;
    var tmp_1 = this;
    // Inline function 'kotlin.also' call
    var this_0 = new ComposerImpl(this.g16_1, this.f16_1, this.k16_1, this.j16_1, this.o16_1, this.p16_1, this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.composer.<anonymous>' call
    this.f16_1.e18(this_0);
    tmp_1.v16_1 = this_0;
    this.w16_1 = recomposeContext;
    var tmp_2 = this;
    var tmp_3 = this.f16_1;
    tmp_2.x16_1 = tmp_3 instanceof Recomposer;
    this.y16_1 = false;
    this.z16_1 = ComposableSingletons$CompositionKt_getInstance().f18_1;
  }
  protoOf(CompositionImpl).x17 = function () {
    return this.v16_1.jx_1;
  };
  protoOf(CompositionImpl).h18 = function () {
    return this.y16_1;
  };
  protoOf(CompositionImpl).i18 = function (values) {
    $l$loop: while (true) {
      var old = this.h16_1.kl();
      var tmp;
      if (old == null ? true : equals(old, get_PendingApplyNoModifications())) {
        tmp = values;
      } else {
        if (!(old == null) ? isInterface(old, Set) : false) {
          // Inline function 'kotlin.arrayOf' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp = [old, values];
        } else {
          if (!(old == null) ? isArray(old) : false) {
            tmp = plus_1((!(old == null) ? isArray(old) : false) ? old : THROW_CCE(), values);
          } else {
            var message = 'corrupt pendingModifications: ' + this.h16_1;
            throw IllegalStateException_init_$Create$(toString(message));
          }
        }
      }
      var new_0 = tmp;
      if (this.h16_1.j18(old, new_0)) {
        if (old == null) {
          // Inline function 'androidx.compose.runtime.synchronized' call
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          this.i16_1;
          drainPendingModificationsLocked(this);
        }
        break $l$loop;
      }
    }
  };
  protoOf(CompositionImpl).k18 = function (values) {
    var tmp0_iterator = values.l();
    while (tmp0_iterator.x()) {
      var value = tmp0_iterator.z();
      if (this.l16_1.k17(value) ? true : this.n16_1.k17(value))
        return true;
    }
    return false;
  };
  protoOf(CompositionImpl).u15 = function (block) {
    return this.v16_1.u15(block);
  };
  protoOf(CompositionImpl).d15 = function (value) {
    if (!_get_areChildrenComposing__c1uwup(this)) {
      var tmp0_safe_receiver = this.v16_1.h15();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.w15(true);
        var alreadyRead = tmp0_safe_receiver.l18(value);
        var tmp;
        if (!alreadyRead) {
          this.l16_1.l17(value, tmp0_safe_receiver);
          var tmp_0;
          if (isInterface(value, DerivedState)) {
            this.n16_1.m18(value);
            var indexedObject = value.n18().o18();
            var inductionVariable = 0;
            var last = indexedObject.length;
            $l$loop: while (inductionVariable < last) {
              var dependency = indexedObject[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              if (dependency == null)
                break $l$loop;
              this.n16_1.l17(dependency, value);
            }
            tmp_0 = Unit_instance;
          }
          tmp = tmp_0;
        }
      }
    }
  };
  protoOf(CompositionImpl).p18 = function (value) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.i16_1;
    invalidateScopeOfLocked(this, value);
    var this_0 = this.n16_1;
    var index = find_2(this_0, value);
    var tmp;
    if (index >= 0) {
      var this_1 = scopeSetAt(this_0, index);
      // Inline function 'kotlin.contracts.contract' call
      var values = this_1.n12_1;
      var inductionVariable = 0;
      var last = this_1.m12_1;
      var tmp_0;
      if (inductionVariable < last) {
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.recordWriteOf.<anonymous>.<anonymous>' call
          var tmp_1 = values[i];
          var it = !(tmp_1 == null) ? tmp_1 : THROW_CCE();
          invalidateScopeOfLocked(this, it);
        }
         while (inductionVariable < last);
        tmp_0 = Unit_instance;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(CompositionImpl).q18 = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.i16_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>' call
    drainPendingModificationsForCompositionLocked(this);
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.also' call
          var this_0 = this.v16_1.v15(invalidations);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!this_0) {
            drainPendingModificationsLocked(this);
          }
          tmp_1 = this_0;
        } catch ($p) {
          var tmp_2;
          if ($p instanceof Exception) {
            var e = $p;
            this.r16_1 = invalidations;
            throw e;
          } else {
            throw $p;
          }
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = tmp_1;
      }finally {
        var tmp_3;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_3 = !this.j16_1.q();
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          (new RememberEventDispatcher(this.j16_1)).v17();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_4;
      if ($p instanceof Exception) {
        var e_0 = $p;
        abandonChanges(this);
        throw e_0;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(CompositionImpl).r18 = function (references) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAll' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.k(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAll.<anonymous>' call
          // Inline function 'androidx.compose.runtime.CompositionImpl.insertMovableContent.<anonymous>' call
          if (!equals(item.id_1.xv_1, this)) {
            tmp$ret$1 = false;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = true;
    }
    runtimeCheck(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        this.v16_1.s15(references);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.j16_1.q();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.j16_1)).v17();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).s18 = function (state) {
    var manager = new RememberEventDispatcher(this.j16_1);
    var slotTable = state.j12_1;
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = slotTable.xz();
    var tmp;
    try {
      removeCurrentGroup(writer, manager);
      tmp = Unit_instance;
    }finally {
      writer.lz();
    }
    manager.s17();
  };
  protoOf(CompositionImpl).t18 = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.i16_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        applyChangesInLocked(this, this.o16_1);
        drainPendingModificationsLocked(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.j16_1.q();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.j16_1)).v17();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).u18 = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.i16_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.applyLateChanges.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!this.p16_1.q()) {
          applyChangesInLocked(this, this.p16_1);
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.j16_1.q();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.j16_1)).v17();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).j15 = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.i16_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.changesApplied.<anonymous>.<anonymous>' call
        this.v16_1.j15();
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!this.j16_1.q()) {
          (new RememberEventDispatcher(this.j16_1)).v17();
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.j16_1.q();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.j16_1)).v17();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).v18 = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.i16_1;
    var indexedObject = this.k16_1.iy_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateAll.<anonymous>.<anonymous>' call
      var tmp0_safe_receiver = element instanceof RecomposeScopeImpl ? element : null;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.w18();
      }
    }
  };
  protoOf(CompositionImpl).o12 = function (to, groupIndex, block) {
    var tmp;
    if ((!(to == null) ? !equals(to, this) : false) ? groupIndex >= 0 : false) {
      var tmp_0 = this;
      tmp_0.t16_1 = to instanceof CompositionImpl ? to : THROW_CCE();
      this.u16_1 = groupIndex;
      var tmp_1;
      try {
        tmp_1 = block();
      }finally {
        this.t16_1 = null;
        this.u16_1 = 0;
      }
      tmp = tmp_1;
    } else {
      tmp = block();
    }
    return tmp;
  };
  protoOf(CompositionImpl).a15 = function (scope, instance) {
    if (scope.x18()) {
      scope.q15(true);
    }
    var anchor = scope.au_1;
    if (anchor == null ? true : !anchor.u17())
      return InvalidationResult_IGNORED_getInstance();
    if (!this.k16_1.y18(anchor)) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this.i16_1;
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidate.<anonymous>' call
      var delegate = this.t16_1;
      if ((delegate == null ? null : tryImminentInvalidation(delegate, scope, instance)) === true)
        return InvalidationResult_IMMINENT_getInstance();
      return InvalidationResult_IGNORED_getInstance();
    }
    if (!scope.z18())
      return InvalidationResult_IGNORED_getInstance();
    return invalidateChecked(this, scope, anchor, instance);
  };
  protoOf(CompositionImpl).c15 = function (scope) {
    this.s16_1 = true;
  };
  protoOf(CompositionImpl).a19 = function (instance, scope) {
    this.l16_1.j17(instance, scope);
  };
  protoOf(CompositionImpl).b19 = function (state) {
    if (!this.l16_1.k17(state)) {
      this.n16_1.m18(state);
    }
  };
  protoOf(CompositionImpl).c19 = function (set__$_ezb9bk) {
    this.z16_1 = set__$_ezb9bk;
  };
  protoOf(CompositionImpl).d19 = function (content) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.y16_1) {
      // Inline function 'androidx.compose.runtime.CompositionImpl.setContent$composable.<anonymous>' call
      var message = 'The composition is disposed';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.c19(content);
    this.f16_1.e19(this, this.z16_1);
  };
  protoOf(CompositionImpl).f19 = function (content) {
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.composeContent$composable.<anonymous>' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        this.i16_1;
        drainPendingModificationsForCompositionLocked(this);
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          this.v16_1.x15(invalidations, content);
          tmp_1 = Unit_instance;
        } catch ($p) {
          var tmp_2;
          if ($p instanceof Exception) {
            var e = $p;
            this.r16_1 = invalidations;
            throw e;
          } else {
            throw $p;
          }
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_3;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_3 = !this.j16_1.q();
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          (new RememberEventDispatcher(this.j16_1)).v17();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_4;
      if ($p instanceof Exception) {
        var e_0 = $p;
        abandonChanges(this);
        throw e_0;
      } else {
        throw $p;
      }
    }
  };
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.s14(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 11) === 2) ? true : !$composer_0.ju()) {
      if (isTraceInProgress()) {
        traceEventStart(954879418, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-1.<anonymous> (Composition.kt:506)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.s14(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 11) === 2) ? true : !$composer_0.ju()) {
      if (isTraceInProgress()) {
        traceEventStart(1918065384, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-2.<anonymous> (Composition.kt:597)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.xu();
    }
    return Unit_instance;
  }
  function ComposableSingletons$CompositionKt() {
    ComposableSingletons$CompositionKt_instance = this;
    var tmp = this;
    tmp.f18_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(954879418, false, ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s));
    var tmp_0 = this;
    tmp_0.g18_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(1918065384, false, ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5));
  }
  var ComposableSingletons$CompositionKt_instance;
  function ComposableSingletons$CompositionKt_getInstance() {
    if (ComposableSingletons$CompositionKt_instance == null)
      new ComposableSingletons$CompositionKt();
    return ComposableSingletons$CompositionKt_instance;
  }
  function addValue(_this__u8e3s4, key, value) {
    _init_properties_Composition_kt__t5pjw8();
    if (_this__u8e3s4.h19(key)) {
      var tmp0_safe_receiver = _this__u8e3s4.g19(key);
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.b15(value);
    } else {
      // Inline function 'kotlin.also' call
      var this_0 = new IdentityArraySet();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.addValue.<anonymous>' call
      this_0.b15(value);
      _this__u8e3s4.z17(key, this_0);
    }
  }
  function ControlledComposition(applier, parent) {
    _init_properties_Composition_kt__t5pjw8();
    return new CompositionImpl(parent, applier);
  }
  var properties_initialized_Composition_kt_u7hvq2;
  function _init_properties_Composition_kt__t5pjw8() {
    if (!properties_initialized_Composition_kt_u7hvq2) {
      properties_initialized_Composition_kt_u7hvq2 = true;
      PendingApplyNoModifications = new Object();
    }
  }
  function get_EmptyPersistentCompositionLocalMap() {
    _init_properties_CompositionContext_kt__4g1p1h();
    return EmptyPersistentCompositionLocalMap;
  }
  var EmptyPersistentCompositionLocalMap;
  function CompositionContext() {
    this.py_1 = 0;
  }
  protoOf(CompositionContext).wy = function (table) {
  };
  protoOf(CompositionContext).e18 = function (composer) {
  };
  protoOf(CompositionContext).ry = function () {
    return get_EmptyPersistentCompositionLocalMap();
  };
  protoOf(CompositionContext).qy = function () {
  };
  protoOf(CompositionContext).yy = function () {
  };
  protoOf(CompositionContext).i12 = function (reference) {
    return null;
  };
  var properties_initialized_CompositionContext_kt_mk393b;
  function _init_properties_CompositionContext_kt__4g1p1h() {
    if (!properties_initialized_CompositionContext_kt_mk393b) {
      properties_initialized_CompositionContext_kt_mk393b = true;
      EmptyPersistentCompositionLocalMap = persistentCompositionLocalHashMapOf();
    }
  }
  function CompositionLocal(defaultFactory) {
    this.i19_1 = new LazyValueHolder(defaultFactory);
    this.j19_1 = 0;
  }
  function ProvidableCompositionLocal(defaultFactory) {
    CompositionLocal.call(this, defaultFactory);
    this.n19_1 = 0;
  }
  protoOf(ProvidableCompositionLocal).o19 = function (value) {
    return new ProvidedValue(this, value, true);
  };
  function staticCompositionLocalOf(defaultFactory) {
    return new StaticProvidableCompositionLocal(defaultFactory);
  }
  function StaticProvidableCompositionLocal(defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
  }
  protoOf(StaticProvidableCompositionLocal).k19 = function (value, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.mu(571516549);
    sourceInformation($composer_0, 'C(provided$composable):CompositionLocal.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(571516549, $changed, -1, 'androidx.compose.runtime.StaticProvidableCompositionLocal.provided$composable (CompositionLocal.kt:139)');
    }
    var tmp0 = new StaticValueHolder(value);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.nu();
    return tmp0;
  };
  function compositionLocalOf(policy, defaultFactory) {
    policy = policy === VOID ? structuralEqualityPolicy() : policy;
    return new DynamicProvidableCompositionLocal(policy, defaultFactory);
  }
  function CompositionLocalProvider$composable(values, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.su(-266554972);
    sourceInformation($composer_0, 'C(CompositionLocalProvider$composable)P(1)227@10002L9:CompositionLocal.kt#9igjgp');
    var $dirty = $changed;
    if (isTraceInProgress()) {
      traceEventStart(-266554972, $dirty, -1, 'androidx.compose.runtime.CompositionLocalProvider$composable (CompositionLocal.kt:225)');
    }
    $composer_0.lv(values);
    content($composer_0, 14 & $dirty >> 3);
    $composer_0.mv();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.tu();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.s19(CompositionLocalProvider$composable$lambda(values, content, $changed));
    }
  }
  function DynamicProvidableCompositionLocal(policy, defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
    this.w19_1 = policy;
  }
  protoOf(DynamicProvidableCompositionLocal).k19 = function (value, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.mu(-1327537144);
    sourceInformation($composer_0, 'C(provided$composable)*125@5325L42:CompositionLocal.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1327537144, $changed, -1, 'androidx.compose.runtime.DynamicProvidableCompositionLocal.provided$composable (CompositionLocal.kt:125)');
    }
    // Inline function 'kotlin.apply' call
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
    if (false ? true : it === Companion_getInstance_0().gu_1) {
      // Inline function 'androidx.compose.runtime.DynamicProvidableCompositionLocal.provided$composable.<anonymous>' call
      var value_0 = mutableStateOf(value, this.w19_1);
      $composer_1.ev(value_0);
      tmp = value_0;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_1.nu();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.DynamicProvidableCompositionLocal.provided$composable.<anonymous>' call
    tmp0.up(value);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.nu();
    return tmp0;
  };
  function CompositionLocalProvider$composable$lambda($values, $content, $$changed) {
    return function ($composer, $force) {
      CompositionLocalProvider$composable($values.slice(), $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function PersistentCompositionLocalMap() {
  }
  function read(_this__u8e3s4, key) {
    var tmp;
    if (contains_0(_this__u8e3s4, key)) {
      tmp = getValueOf(_this__u8e3s4, key);
    } else {
      tmp = key.i19_1.m2();
    }
    return tmp;
  }
  function contains_0(_this__u8e3s4, key) {
    return _this__u8e3s4.q2(key instanceof CompositionLocal ? key : THROW_CCE());
  }
  function getValueOf(_this__u8e3s4, key) {
    var tmp0_safe_receiver = _this__u8e3s4.t2(key instanceof CompositionLocal ? key : THROW_CCE());
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m2();
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  function compositionLocalMapOf$composable(values, parentScope, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.mu(-2040419351);
    sourceInformation($composer_0, 'C(compositionLocalMapOf$composable)P(1):CompositionLocalMap.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-2040419351, $changed, -1, 'androidx.compose.runtime.compositionLocalMapOf$composable (CompositionLocalMap.kt:91)');
    }
    var result = persistentCompositionLocalHashMapOf();
    // Inline function 'androidx.compose.runtime.mutate' call
    // Inline function 'kotlin.apply' call
    var this_0 = result.wz();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.compositionLocalMapOf$composable.<anonymous>' call
    var inductionVariable = 0;
    var last = values.length;
    while (inductionVariable < last) {
      var provided = values[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      $composer_0.mu(1391435594);
      sourceInformation($composer_0, '*101@4372L24');
      if (provided.qv_1 ? true : !contains_0(parentScope, provided.ov_1)) {
        // Inline function 'kotlin.collections.set' call
        var tmp = provided.ov_1;
        var key = tmp instanceof CompositionLocal ? tmp : THROW_CCE();
        var value = provided.ov_1.k19(provided.pv_1, $composer_0, 0);
        this_0.j2(key, value);
      }
      $composer_0.nu();
    }
    var tmp0 = this_0.a3();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.nu();
    return tmp0;
  }
  var calculationBlockNestedLevel;
  function get_derivedStateObservers() {
    _init_properties_DerivedState_kt__eqt0x8();
    return derivedStateObservers;
  }
  var derivedStateObservers;
  function DerivedState() {
  }
  function derivedStateObservers_0() {
    _init_properties_DerivedState_kt__eqt0x8();
    var tmp0_elvis_lhs = get_derivedStateObservers().kl();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.collection.MutableVector' call
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp$ret$0 = fillArrayVal(Array(0), null);
      var this_0 = new MutableVector(tmp$ret$0, 0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.derivedStateObservers.<anonymous>' call
      get_derivedStateObservers().b1a(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  var properties_initialized_DerivedState_kt_scch8q;
  function _init_properties_DerivedState_kt__eqt0x8() {
    if (!properties_initialized_DerivedState_kt_scch8q) {
      properties_initialized_DerivedState_kt_scch8q = true;
      calculationBlockNestedLevel = new SnapshotThreadLocal();
      derivedStateObservers = new SnapshotThreadLocal();
    }
  }
  function get_InternalDisposableEffectScope() {
    _init_properties_Effects_kt__be5lps();
    return InternalDisposableEffectScope;
  }
  var InternalDisposableEffectScope;
  function DisposableEffectScope() {
    this.c1a_1 = 0;
  }
  function LaunchedEffect$composable(key1, block, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.mu(1556009691);
    sourceInformation($composer_0, 'C(LaunchedEffect$composable)P(1)337@14241L58:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(1556009691, $changed, -1, 'androidx.compose.runtime.LaunchedEffect$composable (Effects.kt:332)');
    }
    var applyContext = $composer_0.nv();
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.mu(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_1.fv(key1);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.dv();
    var tmp;
    if (invalid ? true : it === Companion_getInstance_0().gu_1) {
      // Inline function 'androidx.compose.runtime.LaunchedEffect$composable.<anonymous>' call
      var value = new LaunchedEffectImpl(applyContext, block);
      $composer_1.ev(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    $composer_1.nu();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.nu();
  }
  function LaunchedEffectImpl(parentCoroutineContext, task) {
    this.d1a_1 = task;
    this.e1a_1 = CoroutineScope(parentCoroutineContext);
    this.f1a_1 = null;
  }
  protoOf(LaunchedEffectImpl).c18 = function () {
    var tmp0_safe_receiver = this.f1a_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      cancel(tmp0_safe_receiver, 'Old job was still running!');
    }
    this.f1a_1 = launch(this.e1a_1, VOID, VOID, this.d1a_1);
  };
  protoOf(LaunchedEffectImpl).b18 = function () {
    var tmp0_safe_receiver = this.f1a_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.ih(new LeftCompositionCancellationException());
    }
    this.f1a_1 = null;
  };
  protoOf(LaunchedEffectImpl).d18 = function () {
    var tmp0_safe_receiver = this.f1a_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.ih(new LeftCompositionCancellationException());
    }
    this.f1a_1 = null;
  };
  function LeftCompositionCancellationException() {
    PlatformOptimizedCancellationException.call(this, 'The coroutine scope left the composition');
    captureStack(this, LeftCompositionCancellationException);
  }
  function DisposableEffect$composable(key1, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.mu(927399050);
    sourceInformation($composer_0, 'C(DisposableEffect$composable)P(1)154@6171L47:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(927399050, $changed, -1, 'androidx.compose.runtime.DisposableEffect$composable (Effects.kt:150)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.mu(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_1.fv(key1);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.dv();
    var tmp;
    if (invalid ? true : it === Companion_getInstance_0().gu_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect$composable.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_1.ev(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    $composer_1.nu();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.nu();
  }
  function DisposableEffectImpl(effect) {
    this.g1a_1 = effect;
    this.h1a_1 = null;
  }
  protoOf(DisposableEffectImpl).c18 = function () {
    this.h1a_1 = this.g1a_1(get_InternalDisposableEffectScope());
  };
  protoOf(DisposableEffectImpl).b18 = function () {
    var tmp0_safe_receiver = this.h1a_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.nj();
    }
    this.h1a_1 = null;
  };
  protoOf(DisposableEffectImpl).d18 = function () {
  };
  function DisposableEffect$composable_0(keys, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.mu(-1541565433);
    sourceInformation($composer_0, 'C(DisposableEffect$composable)P(1)275@11877L48:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1541565433, $changed, -1, 'androidx.compose.runtime.DisposableEffect$composable (Effects.kt:271)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var keys_0 = keys.slice();
    var $composer_1 = $composer_0;
    $composer_1.mu(-1603429786);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    var invalid = false;
    var inductionVariable = 0;
    var last = keys_0.length;
    while (inductionVariable < last) {
      var key = keys_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      invalid = !!(invalid | $composer_1.fv(key));
    }
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = invalid;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.dv();
    var tmp;
    if (invalid_0 ? true : it === Companion_getInstance_0().gu_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect$composable.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_1.ev(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    $composer_1.nu();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.nu();
  }
  function DisposableEffect$composable_1(key1, key2, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.mu(235732070);
    sourceInformation($composer_0, 'C(DisposableEffect$composable)P(1,2)194@8057L53:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(235732070, $changed, -1, 'androidx.compose.runtime.DisposableEffect$composable (Effects.kt:189)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.mu(-1124426577);
    sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_1.fv(key1) | $composer_1.fv(key2));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.dv();
    var tmp;
    if (invalid ? true : it === Companion_getInstance_0().gu_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect$composable.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_1.ev(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    $composer_1.nu();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.nu();
  }
  var properties_initialized_Effects_kt_cj8kem;
  function _init_properties_Effects_kt__be5lps() {
    if (!properties_initialized_Effects_kt_cj8kem) {
      properties_initialized_Effects_kt_cj8kem = true;
      InternalDisposableEffectScope = new DisposableEffectScope();
    }
  }
  function hashCodeOf($this, value) {
    var tmp;
    if (value instanceof Enum) {
      tmp = value.s9_1;
    } else {
      var tmp1_elvis_lhs = value == null ? null : hashCode(value);
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    return tmp;
  }
  function JoinedKey(left, right) {
    this.i1a_1 = left;
    this.j1a_1 = right;
  }
  protoOf(JoinedKey).hashCode = function () {
    return imul(hashCodeOf(this, this.i1a_1), 31) + hashCodeOf(this, this.j1a_1) | 0;
  };
  protoOf(JoinedKey).toString = function () {
    return 'JoinedKey(left=' + toString_0(this.i1a_1) + ', right=' + toString_0(this.j1a_1) + ')';
  };
  protoOf(JoinedKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JoinedKey))
      return false;
    var tmp0_other_with_cast = other instanceof JoinedKey ? other : THROW_CCE();
    if (!equals(this.i1a_1, tmp0_other_with_cast.i1a_1))
      return false;
    if (!equals(this.j1a_1, tmp0_other_with_cast.j1a_1))
      return false;
    return true;
  };
  function Key() {
  }
  var Key_instance_0;
  function Key_getInstance() {
    return Key_instance_0;
  }
  function MonotonicFrameClock() {
  }
  function get_monotonicFrameClock(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.xb(Key_instance_0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'A MonotonicFrameClock is not available in this CoroutineContext. Callers should supply an appropriate MonotonicFrameClock using withContext.';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function get_movableContentKey() {
    return movableContentKey;
  }
  var movableContentKey;
  function OpaqueKey(key) {
    this.k1a_1 = key;
  }
  protoOf(OpaqueKey).toString = function () {
    return 'OpaqueKey(key=' + this.k1a_1 + ')';
  };
  protoOf(OpaqueKey).hashCode = function () {
    return getStringHashCode(this.k1a_1);
  };
  protoOf(OpaqueKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OpaqueKey))
      return false;
    var tmp0_other_with_cast = other instanceof OpaqueKey ? other : THROW_CCE();
    if (!(this.k1a_1 === tmp0_other_with_cast.k1a_1))
      return false;
    return true;
  };
  function produceState$composable(initialValue, producer, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.mu(1150638565);
    sourceInformation($composer_0, 'C(produceState$composable)80@2911L41,81@2957L95:ProduceState.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(1150638565, $changed, -1, 'androidx.compose.runtime.produceState$composable (ProduceState.kt:76)');
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
    if (false ? true : it === Companion_getInstance_0().gu_1) {
      // Inline function 'androidx.compose.runtime.produceState$composable.<anonymous>' call
      var value = mutableStateOf(initialValue);
      $composer_1.ev(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_1.nu();
    var result = tmp0;
    LaunchedEffect$composable(Unit_instance, produceState$composable$slambda_0(producer, result, null), $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.nu();
    return result;
  }
  function ProduceStateScope() {
  }
  function $awaitDisposeCOROUTINE$0(_this__u8e3s4, onDispose, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u1a_1 = _this__u8e3s4;
    this.v1a_1 = onDispose;
  }
  protoOf($awaitDisposeCOROUTINE$0).cc = function () {
    var suspendResult = this.sb_1;
    $sm: do
      try {
        var tmp = this.qb_1;
        switch (tmp) {
          case 0:
            this.rb_1 = 5;
            this.qb_1 = 1;
            continue $sm;
          case 1:
            this.rb_1 = 4;
            this.qb_1 = 2;
            var cancellable = new CancellableContinuationImpl(intercepted(this), get_MODE_CANCELLABLE());
            cancellable.mj();
            suspendResult = returnIfSuspended(cancellable.ai(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.w1a_1 = throwKotlinNothingValueException();
            this.rb_1 = 5;
            this.qb_1 = 3;
            continue $sm;
          case 3:
            this.rb_1 = 5;
            this.v1a_1();
            return Unit_instance;
          case 4:
            this.rb_1 = 5;
            var t = this.tb_1;
            this.v1a_1();
            throw t;
          case 5:
            throw this.tb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.rb_1 === 5) {
          throw e;
        } else {
          this.qb_1 = this.rb_1;
          this.tb_1 = e;
        }
      }
     while (true);
  };
  function ProduceStateScopeImpl(state, coroutineContext) {
    this.x1a_1 = coroutineContext;
    this.y1a_1 = state;
  }
  protoOf(ProduceStateScopeImpl).cg = function () {
    return this.x1a_1;
  };
  protoOf(ProduceStateScopeImpl).up = function (_set____db54di) {
    this.y1a_1.up(_set____db54di);
  };
  protoOf(ProduceStateScopeImpl).m2 = function () {
    return this.y1a_1.m2();
  };
  protoOf(ProduceStateScopeImpl).l1a = function (onDispose, $completion) {
    var tmp = new $awaitDisposeCOROUTINE$0(this, onDispose, $completion);
    tmp.sb_1 = Unit_instance;
    tmp.tb_1 = null;
    return tmp.cc();
  };
  function produceState$composable$slambda($producer, $result, resultContinuation) {
    this.h1b_1 = $producer;
    this.i1b_1 = $result;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(produceState$composable$slambda).k1b = function ($this$LaunchedEffect, $completion) {
    var tmp = this.l1b($this$LaunchedEffect, $completion);
    tmp.sb_1 = Unit_instance;
    tmp.tb_1 = null;
    return tmp.cc();
  };
  protoOf(produceState$composable$slambda).oc = function (p1, $completion) {
    return this.k1b((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(produceState$composable$slambda).cc = function () {
    var suspendResult = this.sb_1;
    $sm: do
      try {
        var tmp = this.qb_1;
        switch (tmp) {
          case 0:
            this.rb_1 = 2;
            this.qb_1 = 1;
            suspendResult = this.h1b_1(new ProduceStateScopeImpl(this.i1b_1, this.j1b_1.cg()), this);
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
  protoOf(produceState$composable$slambda).l1b = function ($this$LaunchedEffect, completion) {
    var i = new produceState$composable$slambda(this.h1b_1, this.i1b_1, completion);
    i.j1b_1 = $this$LaunchedEffect;
    return i;
  };
  function produceState$composable$slambda_0($producer, $result, resultContinuation) {
    var i = new produceState$composable$slambda($producer, $result, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.k1b($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _set_rereading__pnqtpo($this, value) {
    if (value) {
      $this.yt_1 = $this.yt_1 | 32;
    } else {
      $this.yt_1 = $this.yt_1 & -33;
    }
  }
  function _get_rereading__g2iruw($this) {
    return !(($this.yt_1 & 32) === 0);
  }
  function _set_skipped__p8q2c5($this, value) {
    if (value) {
      $this.yt_1 = $this.yt_1 | 16;
    } else {
      $this.yt_1 = $this.yt_1 & -17;
    }
  }
  function Companion_1() {
  }
  protoOf(Companion_1).u12 = function (slots, anchors, newOwner) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors.q()) {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = anchors.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = anchors.k(index);
          // Inline function 'androidx.compose.runtime.Companion.adoptAnchoredScopes.<anonymous>' call
          var tmp = slots.m1b(item, 0);
          var recomposeScope = tmp instanceof RecomposeScopeImpl ? tmp : null;
          if (recomposeScope == null)
            null;
          else {
            recomposeScope.n1b(newOwner);
          }
        }
         while (inductionVariable <= last);
    }
  };
  protoOf(Companion_1).v12 = function (slots, anchors) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors.q()) {
      var tmp$ret$2;
      $l$block: {
        // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = anchors.j() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = anchors.k(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
            // Inline function 'androidx.compose.runtime.Companion.hasAnchoredRecomposeScopes.<anonymous>' call
            var tmp_0;
            if (slots.y18(item)) {
              var tmp_1 = slots.o1b(slots.h12(item), 0);
              tmp_0 = tmp_1 instanceof RecomposeScopeImpl;
            } else {
              tmp_0 = false;
            }
            if (tmp_0) {
              tmp$ret$2 = true;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$2 = false;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = false;
    }
    return tmp;
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function RecomposeScopeImpl$end$lambda(this$0, $token, $instances) {
    return function (composition) {
      var tmp;
      var tmp_0;
      if (this$0.cu_1 === $token ? equals($instances, this$0.du_1) : false) {
        tmp_0 = composition instanceof CompositionImpl;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        // Inline function 'androidx.compose.runtime.collection.IdentityArrayIntMap.removeValueIf' call
        var this_0 = $instances;
        var keys = this_0.q1b_1;
        var values = this_0.r1b_1;
        var size = this_0.p1b_1;
        var destinationIndex = 0;
        var inductionVariable = 0;
        if (inductionVariable < size)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp_1 = keys[i];
            var key = !(tmp_1 == null) ? tmp_1 : THROW_CCE();
            var value = values[i];
            // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>' call
            // Inline function 'kotlin.also' call
            var this_1 = !(value === $token);
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            if (this_1) {
              composition.a19(key, this$0);
              var tmp0_safe_receiver = isInterface(key, DerivedState) ? key : null;
              if (tmp0_safe_receiver == null)
                null;
              else {
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                composition.b19(tmp0_safe_receiver);
                var tmp0_safe_receiver_0 = this$0.eu_1;
                var tmp_2;
                if (tmp0_safe_receiver_0 == null) {
                  tmp_2 = null;
                } else {
                  // Inline function 'kotlin.let' call
                  // Inline function 'kotlin.contracts.contract' call
                  tmp0_safe_receiver_0.s1b(tmp0_safe_receiver);
                  var tmp_3;
                  if (tmp0_safe_receiver_0.i13_1 === 0) {
                    this$0.eu_1 = null;
                    tmp_3 = Unit_instance;
                  }
                  tmp_2 = Unit_instance;
                }
              }
            }
            if (!this_1) {
              if (!(destinationIndex === i)) {
                keys[destinationIndex] = key;
                values[destinationIndex] = value;
              }
              destinationIndex = destinationIndex + 1 | 0;
            }
          }
           while (inductionVariable < size);
        var inductionVariable_0 = destinationIndex;
        if (inductionVariable_0 < size)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            keys[i_0] = null;
          }
           while (inductionVariable_0 < size);
        this_0.p1b_1 = destinationIndex;
        var tmp_4;
        if ($instances.p1b_1 === 0) {
          this$0.du_1 = null;
          tmp_4 = Unit_instance;
        }
        tmp = tmp_4;
      }
      return Unit_instance;
    };
  }
  function RecomposeScopeImpl(owner) {
    this.yt_1 = 0;
    this.zt_1 = owner;
    this.au_1 = null;
    this.bu_1 = null;
    this.cu_1 = 0;
    this.du_1 = null;
    this.eu_1 = null;
  }
  protoOf(RecomposeScopeImpl).u17 = function () {
    var tmp;
    if (!(this.zt_1 == null)) {
      var tmp0_safe_receiver = this.au_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u17();
      tmp = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RecomposeScopeImpl).z18 = function () {
    return !(this.bu_1 == null);
  };
  protoOf(RecomposeScopeImpl).w15 = function (value) {
    if (value) {
      this.yt_1 = this.yt_1 | 1;
    } else {
      this.yt_1 = this.yt_1 & -2;
    }
  };
  protoOf(RecomposeScopeImpl).d11 = function () {
    return !((this.yt_1 & 1) === 0);
  };
  protoOf(RecomposeScopeImpl).i15 = function (value) {
    if (value) {
      this.yt_1 = this.yt_1 | 2;
    } else {
      this.yt_1 = this.yt_1 & -3;
    }
  };
  protoOf(RecomposeScopeImpl).x18 = function () {
    return !((this.yt_1 & 2) === 0);
  };
  protoOf(RecomposeScopeImpl).q15 = function (value) {
    if (value) {
      this.yt_1 = this.yt_1 | 4;
    } else {
      this.yt_1 = this.yt_1 & -5;
    }
  };
  protoOf(RecomposeScopeImpl).ku = function () {
    return !((this.yt_1 & 4) === 0);
  };
  protoOf(RecomposeScopeImpl).c12 = function (value) {
    if (value) {
      this.yt_1 = this.yt_1 | 8;
    } else {
      this.yt_1 = this.yt_1 & -9;
    }
  };
  protoOf(RecomposeScopeImpl).k15 = function () {
    return !((this.yt_1 & 8) === 0);
  };
  protoOf(RecomposeScopeImpl).t11 = function (composer) {
    var tmp0_safe_receiver = this.bu_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver(composer, 1)) == null) {
      // Inline function 'kotlin.error' call
      var message = 'Invalid restart scope';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(RecomposeScopeImpl).e17 = function (value) {
    var tmp0_safe_receiver = this.zt_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a15(this, value);
    return tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
  };
  protoOf(RecomposeScopeImpl).ok = function () {
    var tmp0_safe_receiver = this.zt_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.c15(this);
    }
    this.zt_1 = null;
    this.du_1 = null;
    this.eu_1 = null;
  };
  protoOf(RecomposeScopeImpl).n1b = function (owner) {
    this.zt_1 = owner;
  };
  protoOf(RecomposeScopeImpl).w18 = function () {
    var tmp0_safe_receiver = this.zt_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.a15(this, null);
  };
  protoOf(RecomposeScopeImpl).s19 = function (block) {
    this.bu_1 = block;
  };
  protoOf(RecomposeScopeImpl).r15 = function () {
    return !((this.yt_1 & 16) === 0);
  };
  protoOf(RecomposeScopeImpl).d12 = function (token) {
    this.cu_1 = token;
    _set_skipped__p8q2c5(this, false);
  };
  protoOf(RecomposeScopeImpl).o15 = function () {
    _set_skipped__p8q2c5(this, true);
  };
  protoOf(RecomposeScopeImpl).l18 = function (instance) {
    if (_get_rereading__g2iruw(this))
      return false;
    var tmp0_elvis_lhs = this.du_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new IdentityArrayIntMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordRead.<anonymous>' call
      this.du_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var token = tmp.t1b(instance, this.cu_1);
    if (token === this.cu_1) {
      return true;
    }
    if (isInterface(instance, DerivedState)) {
      var tmp1_elvis_lhs = this.eu_1;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_1 = new IdentityArrayMap();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordRead.<anonymous>' call
        this.eu_1 = this_1;
        tmp_0 = this_1;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      var tracked = tmp_0;
      tracked.z17(instance, instance.n18().u1b());
    }
    return false;
  };
  protoOf(RecomposeScopeImpl).d17 = function () {
    return !(this.eu_1 == null);
  };
  protoOf(RecomposeScopeImpl).c16 = function (instances) {
    if (instances == null)
      return true;
    var tmp0_elvis_lhs = this.eu_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return true;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var trackedDependencies = tmp;
    var tmp_0;
    if (instances.q12()) {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.all' call
        var tmp_1;
        if (isInterface(instances, Collection)) {
          tmp_1 = instances.q();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var tmp0_iterator = instances.l();
        while (tmp0_iterator.x()) {
          var element = tmp0_iterator.z();
          // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.isInvalidFor.<anonymous>' call
          var tmp_2;
          if (isInterface(element, DerivedState)) {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.isInvalidFor.<anonymous>.<anonymous>' call
            if (!isInterface(element, DerivedState))
              THROW_CCE();
            var tmp0_elvis_lhs_0 = element.y19();
            var policy = tmp0_elvis_lhs_0 == null ? structuralEqualityPolicy() : tmp0_elvis_lhs_0;
            tmp_2 = policy.v1b(element.n18().u1b(), trackedDependencies.g19(element));
          } else {
            tmp_2 = false;
          }
          if (!tmp_2) {
            tmp$ret$0 = false;
            break $l$block_0;
          }
        }
        tmp$ret$0 = true;
      }
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0)
      return false;
    return true;
  };
  protoOf(RecomposeScopeImpl).s11 = function () {
    var tmp0_safe_receiver = this.zt_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>' call
      var tmp0_safe_receiver_0 = this.du_1;
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        _set_rereading__pnqtpo(this, true);
        var tmp_0;
        try {
          var keys = tmp0_safe_receiver_0.q1b_1;
          var values = tmp0_safe_receiver_0.r1b_1;
          var size = tmp0_safe_receiver_0.p1b_1;
          var inductionVariable = 0;
          var tmp_1;
          if (inductionVariable < size) {
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>.<anonymous>.<anonymous>' call
              var tmp_2 = keys[i];
              var value = !(tmp_2 == null) ? tmp_2 : THROW_CCE();
              values[i];
              tmp0_safe_receiver.d15(value);
            }
             while (inductionVariable < size);
            tmp_1 = Unit_instance;
          }
          tmp_0 = tmp_1;
        }finally {
          _set_rereading__pnqtpo(this, false);
        }
        tmp = Unit_instance;
      }
    }
  };
  protoOf(RecomposeScopeImpl).p15 = function (token) {
    var tmp0_safe_receiver = this.du_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>' call
      var tmp_0;
      var tmp_1;
      if (!this.r15()) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.collection.IdentityArrayIntMap.any' call
          var keys = tmp0_safe_receiver.q1b_1;
          var values = tmp0_safe_receiver.r1b_1;
          var size = tmp0_safe_receiver.p1b_1;
          var inductionVariable = 0;
          if (inductionVariable < size)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>' call
              var tmp_2 = keys[i];
              !(tmp_2 == null) || THROW_CCE();
              if (!(values[i] === token)) {
                tmp$ret$1 = true;
                break $l$block;
              }
            }
             while (inductionVariable < size);
          tmp$ret$1 = false;
        }
        tmp_1 = tmp$ret$1;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = RecomposeScopeImpl$end$lambda(this, token, tmp0_safe_receiver);
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  function RecomposeScopeOwner() {
  }
  function updateChangedFlags(flags) {
    var lowBits = flags & 306783378;
    var highBits = flags & 613566756;
    return flags & -920350135 | (lowBits | highBits >> 1) | lowBits << 1 & highBits;
  }
  var ProduceAnotherFrame;
  var FramePending;
  var State_ShutDown_instance;
  var State_ShuttingDown_instance;
  var State_Inactive_instance;
  var State_InactivePendingWork_instance;
  var State_Idle_instance;
  var State_PendingWork_instance;
  var State_entriesInitialized;
  function State_initEntries() {
    if (State_entriesInitialized)
      return Unit_instance;
    State_entriesInitialized = true;
    State_ShutDown_instance = new State('ShutDown', 0);
    State_ShuttingDown_instance = new State('ShuttingDown', 1);
    State_Inactive_instance = new State('Inactive', 2);
    State_InactivePendingWork_instance = new State('InactivePendingWork', 3);
    State_Idle_instance = new State('Idle', 4);
    State_PendingWork_instance = new State('PendingWork', 5);
  }
  function addRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.w1b_1.m2();
      var new_0 = old.u(info);
      if (old === new_0 ? true : $this.w1b_1.vp(old, new_0))
        break $l$loop;
    }
  }
  function removeRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.w1b_1.m2();
      var new_0 = old.v(info);
      if (old === new_0 ? true : $this.w1b_1.vp(old, new_0))
        break $l$loop;
    }
  }
  function invoke$clearRecompositionState(toRecompose, toInsert, toApply, toLateApply, toComplete) {
    toRecompose.b1();
    toInsert.b1();
    toApply.b1();
    toLateApply.b1();
    toComplete.b1();
  }
  function invoke$fillToInsert(toInsert, this$0) {
    toInsert.b1();
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this$0.b1c_1;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var this_0 = this$0.i1c_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.k(index);
        // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.fillToInsert.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        toInsert.u(item);
      }
       while (inductionVariable <= last);
    this$0.i1c_1.b1();
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete) {
    return function (frameTime) {
      var tmp;
      if (_get_hasBroadcastFrameClockAwaiters__y6inql(this$0)) {
        $l$block: {
          // Inline function 'androidx.compose.runtime.trace' call
          var sectionName = 'Recomposer:animation';
          var token = Trace_instance.z12(sectionName);
          try {
            this$0.a1c_1.vs(frameTime);
            Companion_instance_10.x1c();
            break $l$block;
          }finally {
            Trace_instance.r13(token);
          }
        }
        tmp = Unit_instance;
      }
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName_0 = 'Recomposer:recompose';
        var token_0 = Trace_instance.z12(sectionName_0);
        try {
          recordComposerModifications(this$0);
          // Inline function 'androidx.compose.runtime.synchronized' call
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          this$0.b1c_1;
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var this_0 = this$0.g1c_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = this_0.j() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = this_0.k(index);
              // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              // Inline function 'kotlin.collections.plusAssign' call
              $toRecompose.u(item);
            }
             while (inductionVariable <= last);
          this$0.g1c_1.b1();
          var modifiedValues = new IdentityArraySet();
          var alreadyComposed = new IdentityArraySet();
          $l$loop: while (true) {
            var tmp_0;
            // Inline function 'kotlin.collections.isNotEmpty' call
            if (!$toRecompose.q()) {
              tmp_0 = true;
            } else {
              // Inline function 'kotlin.collections.isNotEmpty' call
              tmp_0 = !$toInsert.q();
            }
            if (!tmp_0) {
              break $l$loop;
            }
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_1 = $toRecompose;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = this_1.j() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = this_1.k(index_0);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  alreadyComposed.b15(item_0);
                  var tmp0_safe_receiver = performRecompose(this$0, item_0, modifiedValues);
                  if (tmp0_safe_receiver == null)
                    null;
                  else {
                    // Inline function 'kotlin.let' call
                    // Inline function 'kotlin.contracts.contract' call
                    $toApply.u(tmp0_safe_receiver);
                  }
                }
                 while (inductionVariable_0 <= last_0);
            } catch ($p) {
              if ($p instanceof Exception) {
                var e = $p;
                processCompositionError$default(this$0, e, VOID, true);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toRecompose.b1();
            }
            if (modifiedValues.q12()) {
              // Inline function 'androidx.compose.runtime.synchronized' call
              // Inline function 'kotlinx.atomicfu.locks.synchronized' call
              this$0.b1c_1;
              var this_2 = this$0.e1c_1;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_1 = 0;
              var last_1 = this_2.j() - 1 | 0;
              var tmp_1;
              if (inductionVariable_1 <= last_1) {
                do {
                  var index_1 = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  var item_1 = this_2.k(index_1);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  if (!alreadyComposed.y1c(item_1) ? item_1.k18(modifiedValues) : false) {
                    // Inline function 'kotlin.collections.plusAssign' call
                    $toRecompose.u(item_1);
                  }
                }
                 while (inductionVariable_1 <= last_1);
                tmp_1 = Unit_instance;
              }
            }
            if ($toRecompose.q()) {
              try {
                invoke$fillToInsert($toInsert, this$0);
                $l$loop_0: while (true) {
                  // Inline function 'kotlin.collections.isNotEmpty' call
                  if (!!$toInsert.q()) {
                    break $l$loop_0;
                  }
                  // Inline function 'kotlin.collections.plusAssign' call
                  var this_3 = $toLateApply;
                  var elements = performInsertValues(this$0, $toInsert, modifiedValues);
                  addAll(this_3, elements);
                  invoke$fillToInsert($toInsert, this$0);
                }
              } catch ($p) {
                if ($p instanceof Exception) {
                  var e_0 = $p;
                  processCompositionError$default(this$0, e_0, VOID, true);
                  invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                  return Unit_instance;
                } else {
                  throw $p;
                }
              }
            }
          }
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!$toApply.q()) {
            var tmp0_this = this$0;
            tmp0_this.z1b_1 = tmp0_this.z1b_1.bb();
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_4 = $toApply;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_2 = 0;
              var last_2 = this_4.j() - 1 | 0;
              if (inductionVariable_2 <= last_2)
                do {
                  var index_2 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  var item_2 = this_4.k(index_2);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  $toComplete.u(item_2);
                }
                 while (inductionVariable_2 <= last_2);
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_5 = $toApply;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_3 = 0;
              var last_3 = this_5.j() - 1 | 0;
              if (inductionVariable_3 <= last_3)
                do {
                  var index_3 = inductionVariable_3;
                  inductionVariable_3 = inductionVariable_3 + 1 | 0;
                  var item_3 = this_5.k(index_3);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  item_3.t18();
                }
                 while (inductionVariable_3 <= last_3);
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_1 = $p;
                processCompositionError$default(this$0, e_1);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toApply.b1();
            }
          }
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!$toLateApply.q()) {
            try {
              // Inline function 'kotlin.collections.plusAssign' call
              var this_6 = $toComplete;
              var elements_0 = $toLateApply;
              addAll(this_6, elements_0);
              // Inline function 'kotlin.collections.forEach' call
              var tmp0_iterator = $toLateApply.l();
              while (tmp0_iterator.x()) {
                var element = tmp0_iterator.z();
                // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                element.u18();
              }
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_2 = $p;
                processCompositionError$default(this$0, e_2);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toLateApply.b1();
            }
          }
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!$toComplete.q()) {
            try {
              // Inline function 'kotlin.collections.forEach' call
              var tmp0_iterator_0 = $toComplete.l();
              while (tmp0_iterator_0.x()) {
                var element_0 = tmp0_iterator_0.z();
                // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                element_0.j15();
              }
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_3 = $p;
                processCompositionError$default(this$0, e_3);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toComplete.b1();
            }
          }
          // Inline function 'androidx.compose.runtime.synchronized' call
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          this$0.b1c_1;
          // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          deriveStateLocked(this$0);
          Companion_instance_10.z1c();
          this$0.m1c_1 = null;
          break $l$block_0;
        }finally {
          Trace_instance.r13(token_0);
        }
      }
      return Unit_instance;
    };
  }
  function Recomposer$recompositionRunner$slambda$lambda(this$0) {
    return function (changed, _anonymous_parameter_1__qggqgd) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.b1c_1;
      // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>' call
      var tmp;
      if (this$0.s1c_1.m2().t9(State_Idle_getInstance()) >= 0) {
        this$0.f1c_1.a1d(changed);
        tmp = deriveStateLocked(this$0);
      } else {
        tmp = null;
      }
      var tmp0_safe_receiver = tmp;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
        tmp0_safe_receiver.p6(tmp$ret$3);
      }
      return Unit_instance;
    };
  }
  function Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation) {
    this.j1d_1 = $block;
    this.k1d_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda$slambda).k1b = function ($this$coroutineScope, $completion) {
    var tmp = this.l1b($this$coroutineScope, $completion);
    tmp.sb_1 = Unit_instance;
    tmp.tb_1 = null;
    return tmp.cc();
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).oc = function (p1, $completion) {
    return this.k1b((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).cc = function () {
    var suspendResult = this.sb_1;
    $sm: do
      try {
        var tmp = this.qb_1;
        switch (tmp) {
          case 0:
            this.rb_1 = 2;
            this.qb_1 = 1;
            suspendResult = this.j1d_1(this.l1d_1, this.k1d_1, this);
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
  protoOf(Recomposer$recompositionRunner$slambda$slambda).l1b = function ($this$coroutineScope, completion) {
    var i = new Recomposer$recompositionRunner$slambda$slambda(this.j1d_1, this.k1d_1, completion);
    i.l1d_1 = $this$coroutineScope;
    return i;
  };
  function Recomposer$recompositionRunner$slambda$slambda_0($block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.k1b($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function State(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this) {
    return !$this.r1c_1 ? $this.a1c_1.us() : false;
  }
  function _get_hasBroadcastFrameClockAwaiters__y6inql($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.b1c_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-hasBroadcastFrameClockAwaiters>.<anonymous>' call
    return _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
  }
  function deriveStateLocked($this) {
    if ($this.s1c_1.m2().t9(State_ShuttingDown_getInstance()) <= 0) {
      $this.e1c_1.b1();
      $this.f1c_1 = new IdentityArraySet();
      $this.g1c_1.b1();
      $this.h1c_1.b1();
      $this.i1c_1.b1();
      $this.l1c_1 = null;
      var tmp0_safe_receiver = $this.n1c_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.ni();
      $this.n1c_1 = null;
      $this.q1c_1 = null;
      return null;
    }
    var tmp;
    if (!($this.q1c_1 == null)) {
      tmp = State_Inactive_getInstance();
    } else {
      if ($this.c1c_1 == null) {
        $this.f1c_1 = new IdentityArraySet();
        $this.g1c_1.b1();
        tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this) ? State_InactivePendingWork_getInstance() : State_Inactive_getInstance();
      } else {
        var tmp_0;
        var tmp_1;
        var tmp_2;
        var tmp_3;
        var tmp_4;
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!$this.g1c_1.q()) {
          tmp_4 = true;
        } else {
          tmp_4 = $this.f1c_1.q12();
        }
        if (tmp_4) {
          tmp_3 = true;
        } else {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_3 = !$this.h1c_1.q();
        }
        if (tmp_3) {
          tmp_2 = true;
        } else {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_2 = !$this.i1c_1.q();
        }
        if (tmp_2) {
          tmp_1 = true;
        } else {
          tmp_1 = $this.o1c_1 > 0;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
        }
        if (tmp_0) {
          tmp = State_PendingWork_getInstance();
        } else {
          tmp = State_Idle_getInstance();
        }
      }
    }
    var newState = tmp;
    $this.s1c_1.up(newState);
    var tmp_5;
    if (newState.equals(State_PendingWork_getInstance())) {
      // Inline function 'kotlin.also' call
      var this_0 = $this.n1c_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.deriveStateLocked.<anonymous>' call
      $this.n1c_1 = null;
      tmp_5 = this_0;
    } else {
      tmp_5 = null;
    }
    return tmp_5;
  }
  function _get_shouldKeepRecomposing__5j79sd($this) {
    var tmp;
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.b1c_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
    if (!$this.p1c_1) {
      tmp = true;
    } else {
      var tmp$ret$4;
      $l$block: {
        // Inline function 'kotlin.sequences.any' call
        var tmp0_iterator = $this.t1c_1.ml().l();
        while (tmp0_iterator.x()) {
          var element = tmp0_iterator.z();
          // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
          if (element.dg()) {
            tmp$ret$4 = true;
            break $l$block;
          }
        }
        tmp$ret$4 = false;
      }
      tmp = tmp$ret$4;
    }
    return tmp;
  }
  function RecomposerInfoImpl($outer) {
    this.m1d_1 = $outer;
  }
  function RecomposerErrorState(recoverable, cause) {
    this.n1d_1 = recoverable;
    this.o1d_1 = cause;
  }
  function recordComposerModifications($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.b1c_1;
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    if ($this.f1c_1.q())
      return _get_hasFrameWorkLocked__1gtyf7($this);
    // Inline function 'kotlin.also' call
    var this_0 = $this.f1c_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>.<anonymous>' call
    $this.f1c_1 = new IdentityArraySet();
    var changes = this_0;
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.b1c_1;
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    var compositions = toMutableList($this.e1c_1);
    var complete = false;
    try {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      $l$block: {
        // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = compositions.j() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = compositions.k(index);
            // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>.<anonymous>' call
            item.i18(changes);
            if ($this.s1c_1.m2().t9(State_ShuttingDown_getInstance()) <= 0) {
              break $l$block;
            }
          }
           while (inductionVariable <= last);
      }
      $this.f1c_1 = new IdentityArraySet();
      complete = true;
    }finally {
      if (!complete) {
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        $this.b1c_1;
        $this.f1c_1.a1d(changes);
      }
    }
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.b1c_1;
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    if (!(deriveStateLocked($this) == null)) {
      // Inline function 'kotlin.error' call
      var message = 'called outside of runRecomposeAndApplyChanges';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return _get_hasFrameWorkLocked__1gtyf7($this);
  }
  function registerRunnerJob($this, callingJob) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.b1c_1;
    // Inline function 'androidx.compose.runtime.Recomposer.registerRunnerJob.<anonymous>' call
    var tmp0_safe_receiver = $this.d1c_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
    if ($this.s1c_1.m2().t9(State_ShuttingDown_getInstance()) <= 0) {
      // Inline function 'kotlin.error' call
      var message = 'Recomposer shut down';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (!($this.c1c_1 == null)) {
      // Inline function 'kotlin.error' call
      var message_0 = 'Recomposer already running';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    $this.c1c_1 = callingJob;
    deriveStateLocked($this);
  }
  function processCompositionError($this, e, failedInitialComposition, recoverable) {
    var tmp;
    if (Companion_getInstance_3().x1b_1.kl()) {
      tmp = !(e instanceof ComposeRuntimeError);
    } else {
      tmp = false;
    }
    if (tmp) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      $this.b1c_1;
      // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>' call
      logError('Error was captured in composition while live edit was enabled.', e);
      $this.h1c_1.b1();
      $this.g1c_1.b1();
      $this.f1c_1 = new IdentityArraySet();
      $this.i1c_1.b1();
      $this.j1c_1.b1();
      $this.k1c_1.b1();
      $this.q1c_1 = new RecomposerErrorState(recoverable, e);
      if (!(failedInitialComposition == null)) {
        var tmp0_elvis_lhs = $this.l1c_1;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          // Inline function 'kotlin.also' call
          // Inline function 'kotlin.collections.mutableListOf' call
          var this_0 = ArrayList_init_$Create$();
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>.<anonymous>' call
          $this.l1c_1 = this_0;
          tmp_0 = this_0;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var failedCompositions = tmp_0;
        if (!failedCompositions.o(failedInitialComposition)) {
          // Inline function 'kotlin.collections.plusAssign' call
          failedCompositions.u(failedInitialComposition);
        }
        // Inline function 'kotlin.collections.minusAssign' call
        $this.e1c_1.v(failedInitialComposition);
      }
      deriveStateLocked($this);
    } else {
      throw e;
    }
  }
  function processCompositionError$default($this, e, failedInitialComposition, recoverable, $super) {
    failedInitialComposition = failedInitialComposition === VOID ? null : failedInitialComposition;
    recoverable = recoverable === VOID ? false : recoverable;
    return processCompositionError($this, e, failedInitialComposition, recoverable);
  }
  function _get_hasSchedulingWork__b617oy($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.b1c_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-hasSchedulingWork>.<anonymous>' call
    var tmp;
    var tmp_0;
    if ($this.f1c_1.q12()) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_0 = !$this.g1c_1.q();
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
    }
    return tmp;
  }
  function awaitWorkAvailable($this, $completion) {
    var tmp = new $awaitWorkAvailableCOROUTINE$2($this, $completion);
    tmp.sb_1 = Unit_instance;
    tmp.tb_1 = null;
    return tmp.cc();
  }
  function recompositionRunner($this, block, $completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.o6();
    var parentFrameClock = get_monotonicFrameClock(tmp$ret$0);
    return withContext($this.a1c_1, Recomposer$recompositionRunner$slambda_0($this, block, parentFrameClock, null), $completion);
  }
  function performInitialMovableContentInserts($this, composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.b1c_1;
    var tmp;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var this_0 = $this.i1c_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.k(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
          // Inline function 'androidx.compose.runtime.Recomposer.performInitialMovableContentInserts.<anonymous>.<anonymous>' call
          if (equals(item.xv_1, composition)) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    if (!tmp$ret$1) {
      return Unit_instance;
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var toInsert = ArrayList_init_$Create$();
    performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    $l$loop: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!toInsert.q()) {
        break $l$loop;
      }
      performInsertValues($this, toInsert, null);
      performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    }
  }
  function performRecompose($this, composition, modifiedValues) {
    var tmp;
    if (composition.x17() ? true : composition.h18()) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = $this.m1c_1;
      tmp = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o(composition)) === true;
    }
    if (tmp)
      return null;
    var tmp_0;
    $l$block_0: {
      // Inline function 'androidx.compose.runtime.Recomposer.composing' call
      var snapshot = Companion_instance_10.y1d(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
      try {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
          var previous = snapshot.z1d();
          try {
            // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>' call
            if ((modifiedValues == null ? null : modifiedValues.q12()) === true) {
              composition.u15(Recomposer$performRecompose$lambda(modifiedValues, composition));
            }
            tmp$ret$1 = composition.q18();
            break $l$block;
          }finally {
            snapshot.a1e(previous);
          }
        }
        break $l$block_0;
      }finally {
        applyAndCheck($this, snapshot);
      }
    }
    if (tmp$ret$1) {
      tmp_0 = composition;
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  }
  function performInsertValues($this, references, modifiedValues) {
    // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy' call
    // Inline function 'kotlin.contracts.contract' call
    var destination = HashMap_init_$Create$_0(references.j());
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = references.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = references.k(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>' call
        // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>' call
        var key = item.xv_1;
        // Inline function 'kotlin.collections.getOrPut' call
        var value = destination.t2(key);
        var tmp;
        if (value == null) {
          // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>.<anonymous>' call
          var answer = ArrayList_init_$Create$();
          destination.j2(key, answer);
          tmp = answer;
        } else {
          tmp = value;
        }
        var list = tmp;
        list.u(item);
      }
       while (inductionVariable <= last);
    var tasks = destination;
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = tasks.i2().l();
    while (tmp0_iterator.x()) {
      var tmp1_loop_parameter = tmp0_iterator.z();
      // Inline function 'kotlin.collections.component1' call
      var composition = tmp1_loop_parameter.l2();
      // Inline function 'kotlin.collections.component2' call
      var refs = tmp1_loop_parameter.m2();
      runtimeCheck(!composition.x17());
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_instance_10.y1d(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
        try {
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.z1d();
            try {
              // Inline function 'androidx.compose.runtime.synchronized' call
              // Inline function 'kotlinx.atomicfu.locks.synchronized' call
              $this.b1c_1;
              // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
              // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
              // Inline function 'kotlin.contracts.contract' call
              var target = ArrayList_init_$Create$_0(refs.j());
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = refs.j() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = refs.k(index_0);
                  // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
                  // Inline function 'kotlin.collections.plusAssign' call
                  // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>.<anonymous>' call
                  var element = to(item_0, removeLastMultiValue($this.j1c_1, item_0.vv_1));
                  target.u(element);
                }
                 while (inductionVariable_0 <= last_0);
              var pairs = target;
              composition.r18(pairs);
              break $l$block;
            }finally {
              snapshot.a1e(previous);
            }
          }
          break $l$block_0;
        }finally {
          applyAndCheck($this, snapshot);
        }
      }
    }
    return toList(tasks.g2());
  }
  function discardUnusedValues($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.b1c_1;
    // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.j1c_1.q()) {
      var references = flatten($this.j1c_1.h2());
      $this.j1c_1.b1();
      // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
      // Inline function 'kotlin.contracts.contract' call
      var target = ArrayList_init_$Create$_0(references.j());
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.k(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
          // Inline function 'kotlin.collections.plusAssign' call
          // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>.<anonymous>' call
          var element = to(item, $this.k1c_1.t2(item));
          target.u(element);
        }
         while (inductionVariable <= last);
      var unusedValues = target;
      $this.k1c_1.b1();
      tmp = unusedValues;
    } else {
      tmp = emptyList();
    }
    var unusedValues_0 = tmp;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = unusedValues_0.j() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = unusedValues_0.k(index_0);
        // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
        var reference = item_0.kd();
        var state = item_0.ld();
        if (!(state == null)) {
          reference.xv_1.s18(state);
        }
      }
       while (inductionVariable_0 <= last_0);
  }
  function readObserverOf($this, composition) {
    return Recomposer$readObserverOf$lambda(composition);
  }
  function writeObserverOf($this, composition, modifiedValues) {
    return Recomposer$writeObserverOf$lambda(composition, modifiedValues);
  }
  function applyAndCheck($this, snapshot) {
    try {
      var applyResult = snapshot.q1e();
      if (applyResult instanceof Failure) {
        // Inline function 'kotlin.error' call
        var message = 'Unsupported concurrent change during composition. A state object was modified by composition as well as being modified outside composition.';
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }finally {
      snapshot.nj();
    }
  }
  function _get_hasFrameWorkLocked__1gtyf7($this) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.g1c_1.q()) {
      tmp = true;
    } else {
      tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
    }
    return tmp;
  }
  function Companion_2() {
    Companion_instance_3 = this;
    this.w1b_1 = MutableStateFlow(persistentSetOf());
    this.x1b_1 = new AtomicReference(false);
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function performInitialMovableContentInserts$fillToInsert(toInsert, this$0, $composition) {
    toInsert.b1();
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this$0.b1c_1;
    var iterator = this$0.i1c_1.l();
    while (iterator.x()) {
      var value = iterator.z();
      if (equals(value.xv_1, $composition)) {
        toInsert.u(value);
        iterator.y();
      }
    }
  }
  function Recomposer$broadcastFrameClock$lambda(this$0) {
    return function () {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.b1c_1;
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.also' call
      var this_0 = deriveStateLocked(this$0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>.<anonymous>' call
      if (this$0.s1c_1.m2().t9(State_ShuttingDown_getInstance()) <= 0)
        throw CancellationException_init_$Create$('Recomposer shutdown; frame clock awaiter will never resume', this$0.d1c_1);
      if (this_0 == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$4 = _Result___init__impl__xyqfz8(Unit_instance);
        this_0.p6(tmp$ret$4);
      }
      return Unit_instance;
    };
  }
  function Recomposer$effectJob$lambda$lambda(this$0, $throwable) {
    return function (runnerJobCause) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.b1c_1;
      var tmp = this$0;
      var tmp0_safe_receiver = $throwable;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1;
        if (runnerJobCause == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.takeIf' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp_2;
          // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!(runnerJobCause instanceof CancellationException)) {
            tmp_2 = runnerJobCause;
          } else {
            tmp_2 = null;
          }
          tmp_1 = tmp_2;
        }
        var tmp1_safe_receiver = tmp_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          addSuppressed(tmp0_safe_receiver, tmp1_safe_receiver);
        }
        tmp_0 = tmp0_safe_receiver;
      }
      tmp.d1c_1 = tmp_0;
      this$0.s1c_1.up(State_ShutDown_getInstance());
      return Unit_instance;
    };
  }
  function Recomposer$effectJob$lambda(this$0) {
    return function (throwable) {
      var cancellation = CancellationException_init_$Create$('Recomposer effect job completed', throwable);
      var continuationToResume = null;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.b1c_1;
      // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>' call
      var runnerJob = this$0.c1c_1;
      var tmp;
      if (!(runnerJob == null)) {
        this$0.s1c_1.up(State_ShuttingDown_getInstance());
        if (!this$0.p1c_1) {
          runnerJob.ih(cancellation);
        } else if (!(this$0.n1c_1 == null)) {
          continuationToResume = this$0.n1c_1;
        }
        this$0.n1c_1 = null;
        tmp = runnerJob.dh(Recomposer$effectJob$lambda$lambda(this$0, throwable));
      } else {
        this$0.d1c_1 = cancellation;
        this$0.s1c_1.up(State_ShutDown_getInstance());
        tmp = Unit_instance;
      }
      var tmp0_safe_receiver = continuationToResume;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
        tmp0_safe_receiver.p6(tmp$ret$3);
      }
      return Unit_instance;
    };
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation) {
    this.z1e_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).h1f = function ($this$recompositionRunner, parentFrameClock, $completion) {
    var tmp = this.i1f($this$recompositionRunner, parentFrameClock, $completion);
    tmp.sb_1 = Unit_instance;
    tmp.tb_1 = null;
    return tmp.cc();
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).j1f = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE();
    return this.h1f(tmp, (!(p2 == null) ? isInterface(p2, MonotonicFrameClock) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).cc = function () {
    var suspendResult = this.sb_1;
    $sm: do
      try {
        var tmp = this.qb_1;
        switch (tmp) {
          case 0:
            this.rb_1 = 6;
            var tmp_0 = this;
            tmp_0.c1f_1 = ArrayList_init_$Create$();
            var tmp_1 = this;
            tmp_1.d1f_1 = ArrayList_init_$Create$();
            var tmp_2 = this;
            tmp_2.e1f_1 = ArrayList_init_$Create$();
            var tmp_3 = this;
            tmp_3.f1f_1 = LinkedHashSet_init_$Create$();
            var tmp_4 = this;
            tmp_4.g1f_1 = LinkedHashSet_init_$Create$();
            this.qb_1 = 1;
            continue $sm;
          case 1:
            if (!_get_shouldKeepRecomposing__5j79sd(this.z1e_1)) {
              this.qb_1 = 5;
              continue $sm;
            }

            this.qb_1 = 2;
            suspendResult = awaitWorkAvailable(this.z1e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!recordComposerModifications(this.z1e_1)) {
              this.qb_1 = 1;
              continue $sm;
            } else {
              this.qb_1 = 3;
              continue $sm;
            }

          case 3:
            this.qb_1 = 4;
            suspendResult = this.b1f_1.ws(Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this.z1e_1, this.c1f_1, this.d1f_1, this.e1f_1, this.f1f_1, this.g1f_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            discardUnusedValues(this.z1e_1);
            this.qb_1 = 1;
            continue $sm;
          case 5:
            return Unit_instance;
          case 6:
            throw this.tb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.rb_1 === 6) {
          throw e;
        } else {
          this.qb_1 = this.rb_1;
          this.tb_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).i1f = function ($this$recompositionRunner, parentFrameClock, completion) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this.z1e_1, completion);
    i.a1f_1 = $this$recompositionRunner;
    i.b1f_1 = parentFrameClock;
    return i;
  };
  function Recomposer$runRecomposeAndApplyChanges$slambda_0(this$0, resultContinuation) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation);
    var l = function ($this$recompositionRunner, parentFrameClock, $completion) {
      return i.h1f($this$recompositionRunner, parentFrameClock, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation) {
    this.s1f_1 = this$0;
    this.t1f_1 = $block;
    this.u1f_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda).k1b = function ($this$withContext, $completion) {
    var tmp = this.l1b($this$withContext, $completion);
    tmp.sb_1 = Unit_instance;
    tmp.tb_1 = null;
    return tmp.cc();
  };
  protoOf(Recomposer$recompositionRunner$slambda).oc = function (p1, $completion) {
    return this.k1b((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda).cc = function () {
    var suspendResult = this.sb_1;
    $sm: do
      try {
        var tmp = this.qb_1;
        switch (tmp) {
          case 0:
            this.rb_1 = 5;
            this.w1f_1 = get_job(this.v1f_1.cg());
            registerRunnerJob(this.s1f_1, this.w1f_1);
            var tmp_0 = this;
            var tmp_1 = Companion_instance_10;
            tmp_0.x1f_1 = tmp_1.z1f(Recomposer$recompositionRunner$slambda$lambda(this.s1f_1));
            addRunning(Companion_getInstance_3(), this.s1f_1.v1c_1);
            this.qb_1 = 1;
            continue $sm;
          case 1:
            this.rb_1 = 4;
            this.s1f_1.b1c_1;
            var this_0 = toMutableList(this.s1f_1.e1c_1);
            var inductionVariable = 0;
            var last = this_0.j() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = this_0.k(index);
                item.v18();
              }
               while (inductionVariable <= last);
            this.qb_1 = 2;
            suspendResult = coroutineScope(Recomposer$recompositionRunner$slambda$slambda_0(this.t1f_1, this.u1f_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.y1f_1 = suspendResult;
            this.rb_1 = 5;
            this.qb_1 = 3;
            continue $sm;
          case 3:
            this.rb_1 = 5;
            this.x1f_1.nj();
            this.s1f_1.b1c_1;
            if (this.s1f_1.c1c_1 === this.w1f_1) {
              this.s1f_1.c1c_1 = null;
            }

            deriveStateLocked(this.s1f_1);
            removeRunning(Companion_getInstance_3(), this.s1f_1.v1c_1);
            return Unit_instance;
          case 4:
            this.rb_1 = 5;
            var t = this.tb_1;
            this.x1f_1.nj();
            this.s1f_1.b1c_1;
            if (this.s1f_1.c1c_1 === this.w1f_1) {
              this.s1f_1.c1c_1 = null;
            }

            deriveStateLocked(this.s1f_1);
            removeRunning(Companion_getInstance_3(), this.s1f_1.v1c_1);
            throw t;
          case 5:
            throw this.tb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.rb_1 === 5) {
          throw e;
        } else {
          this.qb_1 = this.rb_1;
          this.tb_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$recompositionRunner$slambda).l1b = function ($this$withContext, completion) {
    var i = new Recomposer$recompositionRunner$slambda(this.s1f_1, this.t1f_1, this.u1f_1, completion);
    i.v1f_1 = $this$withContext;
    return i;
  };
  function Recomposer$recompositionRunner$slambda_0(this$0, $block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.k1b($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Recomposer$performRecompose$lambda($modifiedValues, $composition) {
    return function () {
      var this_0 = $modifiedValues;
      // Inline function 'kotlin.contracts.contract' call
      var values = this_0.n12_1;
      var inductionVariable = 0;
      var last = this_0.m12_1;
      var tmp;
      if (inductionVariable < last) {
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_0 = values[i];
          var it = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
          $composition.p18(it);
        }
         while (inductionVariable < last);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function Recomposer$readObserverOf$lambda($composition) {
    return function (value) {
      $composition.d15(value);
      return Unit_instance;
    };
  }
  function Recomposer$writeObserverOf$lambda($composition, $modifiedValues) {
    return function (value) {
      $composition.p18(value);
      var tmp0_safe_receiver = $modifiedValues;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.b15(value);
      return Unit_instance;
    };
  }
  function State_ShutDown_getInstance() {
    State_initEntries();
    return State_ShutDown_instance;
  }
  function State_ShuttingDown_getInstance() {
    State_initEntries();
    return State_ShuttingDown_instance;
  }
  function State_Inactive_getInstance() {
    State_initEntries();
    return State_Inactive_instance;
  }
  function State_InactivePendingWork_getInstance() {
    State_initEntries();
    return State_InactivePendingWork_instance;
  }
  function State_Idle_getInstance() {
    State_initEntries();
    return State_Idle_instance;
  }
  function State_PendingWork_getInstance() {
    State_initEntries();
    return State_PendingWork_instance;
  }
  function $awaitWorkAvailableCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x1d_1 = _this__u8e3s4;
  }
  protoOf($awaitWorkAvailableCOROUTINE$2).cc = function () {
    var suspendResult = this.sb_1;
    $sm: do
      try {
        var tmp = this.qb_1;
        switch (tmp) {
          case 0:
            this.rb_1 = 3;
            if (!_get_hasSchedulingWork__b617oy(this.x1d_1)) {
              this.qb_1 = 1;
              var cancellable = new CancellableContinuationImpl(intercepted(this), get_MODE_CANCELLABLE());
              cancellable.mj();
              this.x1d_1.b1c_1;
              var tmp_0;
              if (_get_hasSchedulingWork__b617oy(this.x1d_1)) {
                tmp_0 = cancellable;
              } else {
                this.x1d_1.n1c_1 = cancellable;
                tmp_0 = null;
              }
              var tmp0_safe_receiver = tmp_0;
              if (tmp0_safe_receiver == null)
                null;
              else {
                tmp0_safe_receiver.p6(_Result___init__impl__xyqfz8(Unit_instance));
              }
              suspendResult = returnIfSuspended(cancellable.ai(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.qb_1 = 2;
              continue $sm;
            }

          case 1:
            this.qb_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.tb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.rb_1 === 3) {
          throw e;
        } else {
          this.qb_1 = this.rb_1;
          this.tb_1 = e;
        }
      }
     while (true);
  };
  function Recomposer(effectCoroutineContext) {
    Companion_getInstance_3();
    CompositionContext.call(this);
    this.z1b_1 = new Long(0, 0);
    var tmp = this;
    tmp.a1c_1 = new BroadcastFrameClock(Recomposer$broadcastFrameClock$lambda(this));
    this.b1c_1 = createSynchronizedObject();
    this.c1c_1 = null;
    this.d1c_1 = null;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.e1c_1 = ArrayList_init_$Create$();
    this.f1c_1 = new IdentityArraySet();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.g1c_1 = ArrayList_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.h1c_1 = ArrayList_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_3.i1c_1 = ArrayList_init_$Create$();
    var tmp_4 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_4.j1c_1 = LinkedHashMap_init_$Create$();
    var tmp_5 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_5.k1c_1 = LinkedHashMap_init_$Create$();
    this.l1c_1 = null;
    this.m1c_1 = null;
    this.n1c_1 = null;
    this.o1c_1 = 0;
    this.p1c_1 = false;
    this.q1c_1 = null;
    this.r1c_1 = false;
    this.s1c_1 = MutableStateFlow(State_Inactive_getInstance());
    var tmp_6 = this;
    // Inline function 'kotlin.apply' call
    var this_0 = Job(effectCoroutineContext.xb(Key_instance));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>' call
    this_0.dh(Recomposer$effectJob$lambda(this));
    tmp_6.t1c_1 = this_0;
    this.u1c_1 = effectCoroutineContext.ne(this.a1c_1).ne(this.t1c_1);
    this.v1c_1 = new RecomposerInfoImpl(this);
    this.w1c_1 = 8;
  }
  protoOf(Recomposer).g15 = function () {
    return this.u1c_1;
  };
  protoOf(Recomposer).a1g = function ($completion) {
    return recompositionRunner(this, Recomposer$runRecomposeAndApplyChanges$slambda_0(this, null), $completion);
  };
  protoOf(Recomposer).xy = function () {
    return 1000;
  };
  protoOf(Recomposer).vy = function () {
    return false;
  };
  protoOf(Recomposer).wy = function (table) {
  };
  protoOf(Recomposer).a18 = function (composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.b1c_1;
    // Inline function 'androidx.compose.runtime.Recomposer.invalidate.<anonymous>' call
    var tmp;
    if (!this.g1c_1.o(composition)) {
      // Inline function 'kotlin.collections.plusAssign' call
      this.g1c_1.u(composition);
      tmp = deriveStateLocked(this);
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
      tmp0_safe_receiver.p6(tmp$ret$3);
    }
  };
  protoOf(Recomposer).g12 = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.b1c_1;
    // Inline function 'androidx.compose.runtime.Recomposer.insertMovableContent.<anonymous>' call
    // Inline function 'kotlin.collections.plusAssign' call
    this.i1c_1.u(reference);
    var tmp0_safe_receiver = deriveStateLocked(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
      tmp0_safe_receiver.p6(tmp$ret$3);
    }
  };
  protoOf(Recomposer).j14 = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.b1c_1;
    // Inline function 'androidx.compose.runtime.Recomposer.deletedMovableContent.<anonymous>' call
    addMultiValue(this.j1c_1, reference.vv_1, reference);
  };
  protoOf(Recomposer).w12 = function (reference, data) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.b1c_1;
    this.k1c_1.j2(reference, data);
  };
  protoOf(Recomposer).i14 = function (composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.b1c_1;
    // Inline function 'androidx.compose.runtime.Recomposer.reportRemovedComposition.<anonymous>' call
    var tmp0_elvis_lhs = this.m1c_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.collections.mutableSetOf' call
      var this_0 = LinkedHashSet_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.reportRemovedComposition.<anonymous>.<anonymous>' call
      this.m1c_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var compositionsRemoved = tmp;
    compositionsRemoved.u(composition);
  };
  protoOf(Recomposer).i12 = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.b1c_1;
    // Inline function 'androidx.compose.runtime.Recomposer.movableContentStateResolve.<anonymous>' call
    return this.k1c_1.n2(reference);
  };
  protoOf(Recomposer).e19 = function (composition, content) {
    var composerWasComposing = composition.x17();
    try {
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_instance_10.y1d(readObserverOf(this, composition), writeObserverOf(this, composition, null));
        try {
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.z1d();
            try {
              composition.f19(content);
              break $l$block;
            }finally {
              snapshot.a1e(previous);
            }
          }
          break $l$block_0;
        }finally {
          applyAndCheck(this, snapshot);
        }
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        processCompositionError(this, e, composition, true);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_instance_10.z1c();
    }
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.b1c_1;
    var tmp;
    if (this.s1c_1.m2().t9(State_ShuttingDown_getInstance()) > 0) {
      var tmp_0;
      if (!this.e1c_1.o(composition)) {
        this.e1c_1.u(composition);
        tmp_0 = Unit_instance;
      }
      tmp = tmp_0;
    }
    try {
      performInitialMovableContentInserts(this, composition);
    } catch ($p) {
      if ($p instanceof Exception) {
        var e_0 = $p;
        processCompositionError(this, e_0, composition, true);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    try {
      composition.t18();
      composition.u18();
    } catch ($p) {
      if ($p instanceof Exception) {
        var e_1 = $p;
        processCompositionError$default(this, e_1);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_instance_10.z1c();
    }
  };
  function removeLastMultiValue(_this__u8e3s4, key) {
    _init_properties_Recomposer_kt__nj7w3x();
    var tmp0_safe_receiver = _this__u8e3s4.t2(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.removeLastMultiValue.<anonymous>' call
      // Inline function 'kotlin.also' call
      var this_0 = removeFirst(tmp0_safe_receiver);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.removeLastMultiValue.<anonymous>.<anonymous>' call
      if (tmp0_safe_receiver.q()) {
        _this__u8e3s4.n2(key);
      }
      tmp = this_0;
    }
    return tmp;
  }
  function addMultiValue(_this__u8e3s4, key, value) {
    _init_properties_Recomposer_kt__nj7w3x();
    // Inline function 'kotlin.collections.getOrPut' call
    var value_0 = _this__u8e3s4.t2(key);
    var tmp;
    if (value_0 == null) {
      // Inline function 'androidx.compose.runtime.addMultiValue.<anonymous>' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var answer = ArrayList_init_$Create$();
      _this__u8e3s4.j2(key, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    return tmp.u(value);
  }
  var properties_initialized_Recomposer_kt_k8q2ph;
  function _init_properties_Recomposer_kt__nj7w3x() {
    if (!properties_initialized_Recomposer_kt_k8q2ph) {
      properties_initialized_Recomposer_kt_k8q2ph = true;
      ProduceAnotherFrame = new Object();
      FramePending = new Object();
    }
  }
  function RememberObserver() {
  }
  function moveGroup($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup) {
    var groupsToMove = fromWriter.f11(fromIndex);
    var sourceGroupsEnd = fromIndex + groupsToMove | 0;
    var sourceSlotsStart = dataIndex(fromWriter, fromIndex);
    var sourceSlotsEnd = dataIndex(fromWriter, sourceGroupsEnd);
    var slotsToMove = sourceSlotsEnd - sourceSlotsStart | 0;
    var hasMarks = containsAnyGroupMarks(fromWriter, fromIndex);
    insertGroups(toWriter, groupsToMove);
    insertSlots(toWriter, slotsToMove, toWriter.rt_1);
    if (fromWriter.et_1 < sourceGroupsEnd) {
      moveGroupGapTo(fromWriter, sourceGroupsEnd);
    }
    if (fromWriter.jt_1 < sourceSlotsEnd) {
      moveSlotGapTo(fromWriter, sourceSlotsEnd, sourceGroupsEnd);
    }
    var groups = toWriter.bt_1;
    var currentGroup = toWriter.rt_1;
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = fromWriter.bt_1;
    var destinationOffset = imul(currentGroup, 5);
    var startIndex = imul(fromIndex, 5);
    var endIndex = imul(sourceGroupsEnd, 5);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, groups, destinationOffset, startIndex, endIndex);
    var slots = toWriter.ct_1;
    var currentSlot = toWriter.ht_1;
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = fromWriter.ct_1;
    arrayCopy(this_1, slots, currentSlot, sourceSlotsStart, sourceSlotsEnd);
    var parent = toWriter.st_1;
    updateParentAnchor(groups, currentGroup, parent);
    var parentDelta = currentGroup - fromIndex | 0;
    var moveEnd = currentGroup + groupsToMove | 0;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
    var dataIndexDelta = currentSlot - dataIndex_0(groups, toWriter, currentGroup) | 0;
    var slotsGapOwner = toWriter.lt_1;
    var slotsGapLen = toWriter.kt_1;
    var slotsCapacity = slots.length;
    var inductionVariable = currentGroup;
    if (inductionVariable < moveEnd)
      do {
        var groupAddress = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(groupAddress === currentGroup)) {
          var previousParent = parentAnchor(groups, groupAddress);
          updateParentAnchor(groups, groupAddress, previousParent + parentDelta | 0);
        }
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
        var newDataIndex = dataIndex_0(groups, toWriter, groupAddress) + dataIndexDelta | 0;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
        var newDataAnchor = dataIndexToDataAnchor(toWriter, newDataIndex, slotsGapOwner < groupAddress ? 0 : toWriter.jt_1, slotsGapLen, slotsCapacity);
        updateDataAnchor(groups, groupAddress, newDataAnchor);
        if (groupAddress === slotsGapOwner) {
          slotsGapOwner = slotsGapOwner + 1 | 0;
        }
      }
       while (inductionVariable < moveEnd);
    toWriter.lt_1 = slotsGapOwner;
    var startAnchors = locationOf(fromWriter.dt_1, fromIndex, fromWriter.j());
    var endAnchors = locationOf(fromWriter.dt_1, sourceGroupsEnd, fromWriter.j());
    var tmp_0;
    if (startAnchors < endAnchors) {
      var sourceAnchors = fromWriter.dt_1;
      var anchors = ArrayList_init_$Create$_0(endAnchors - startAnchors | 0);
      var anchorDelta = currentGroup - fromIndex | 0;
      var inductionVariable_0 = startAnchors;
      if (inductionVariable_0 < endAnchors)
        do {
          var anchorIndex = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var sourceAnchor = sourceAnchors.k(anchorIndex);
          sourceAnchor.j13_1 = sourceAnchor.j13_1 + anchorDelta | 0;
          anchors.u(sourceAnchor);
        }
         while (inductionVariable_0 < endAnchors);
      var insertLocation = locationOf(toWriter.dt_1, toWriter.rt_1, toWriter.j());
      toWriter.dt_1.b3(insertLocation, anchors);
      sourceAnchors.x1(startAnchors, endAnchors).b1();
      tmp_0 = anchors;
    } else {
      tmp_0 = emptyList();
    }
    var anchors_0 = tmp_0;
    var parentGroup = fromWriter.vz(fromIndex);
    var tmp_1;
    if (!removeSourceGroup) {
      tmp_1 = false;
    } else if (updateFromCursor) {
      var needsStartGroups = parentGroup >= 0;
      if (needsStartGroups) {
        fromWriter.zz();
        fromWriter.v14(parentGroup - fromWriter.rt_1 | 0);
        fromWriter.zz();
      }
      fromWriter.v14(fromIndex - fromWriter.rt_1 | 0);
      var anchorsRemoved = fromWriter.fu();
      if (needsStartGroups) {
        fromWriter.xu();
        fromWriter.m11();
        fromWriter.xu();
        fromWriter.m11();
      }
      tmp_1 = anchorsRemoved;
    } else {
      var anchorsRemoved_0 = removeGroups(fromWriter, fromIndex, groupsToMove);
      removeSlots(fromWriter, sourceSlotsStart, slotsToMove, fromIndex - 1 | 0);
      tmp_1 = anchorsRemoved_0;
    }
    var anchorsRemoved_1 = tmp_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!anchorsRemoved_1) {
      // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
      var message = 'Unexpectedly removed anchors';
      composeRuntimeError(toString(message));
    }
    toWriter.nt_1 = toWriter.nt_1 + (isNode(groups, currentGroup) ? 1 : nodeCount(groups, currentGroup)) | 0;
    if (updateToCursor) {
      toWriter.rt_1 = currentGroup + groupsToMove | 0;
      toWriter.ht_1 = currentSlot + slotsToMove | 0;
    }
    if (hasMarks) {
      updateContainsMark(toWriter, parent);
    }
    return anchors_0;
  }
  function moveGroup$default($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup, $super) {
    removeSourceGroup = removeSourceGroup === VOID ? true : removeSourceGroup;
    return moveGroup($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup);
  }
  function startGroup_1($this, key, objectKey, isNode, aux) {
    var inserting = $this.mt_1 > 0;
    $this.qt_1.uy($this.nt_1);
    var tmp = $this;
    var tmp_0;
    if (inserting) {
      insertGroups($this, 1);
      var current = $this.rt_1;
      var currentAddress = groupIndexToAddress($this, current);
      var hasObjectKey = !(objectKey === Companion_getInstance_0().gu_1);
      var hasAux = !isNode ? !(aux === Companion_getInstance_0().gu_1) : false;
      initGroup($this.bt_1, currentAddress, key, isNode, hasObjectKey, hasAux, $this.st_1, $this.ht_1);
      $this.it_1 = $this.ht_1;
      var dataSlotsNeeded = ((isNode ? 1 : 0) + (hasObjectKey ? 1 : 0) | 0) + (hasAux ? 1 : 0) | 0;
      if (dataSlotsNeeded > 0) {
        insertSlots($this, dataSlotsNeeded, current);
        var slots = $this.ct_1;
        var currentSlot = $this.ht_1;
        if (isNode) {
          var tmp0 = currentSlot;
          currentSlot = tmp0 + 1 | 0;
          slots[tmp0] = aux;
        }
        if (hasObjectKey) {
          var tmp1 = currentSlot;
          currentSlot = tmp1 + 1 | 0;
          slots[tmp1] = objectKey;
        }
        if (hasAux) {
          var tmp2 = currentSlot;
          currentSlot = tmp2 + 1 | 0;
          slots[tmp2] = aux;
        }
        $this.ht_1 = currentSlot;
      }
      $this.nt_1 = 0;
      var newCurrent = current + 1 | 0;
      $this.st_1 = current;
      $this.rt_1 = newCurrent;
      tmp_0 = newCurrent;
    } else {
      var previousParent = $this.st_1;
      $this.ot_1.uy(previousParent);
      saveCurrentGroupEnd($this);
      var currentGroup = $this.rt_1;
      var currentGroupAddress = groupIndexToAddress($this, currentGroup);
      if (!equals(aux, Companion_getInstance_0().gu_1)) {
        if (isNode) {
          $this.b1g(aux);
        } else {
          $this.q14(aux);
        }
      }
      $this.ht_1 = slotIndex($this.bt_1, $this, currentGroupAddress);
      $this.it_1 = dataIndex_0($this.bt_1, $this, groupIndexToAddress($this, $this.rt_1 + 1 | 0));
      $this.nt_1 = nodeCount($this.bt_1, currentGroupAddress);
      $this.st_1 = currentGroup;
      $this.rt_1 = currentGroup + 1 | 0;
      tmp_0 = currentGroup + groupSize($this.bt_1, currentGroupAddress) | 0;
    }
    tmp.gt_1 = tmp_0;
  }
  function Companion_3() {
  }
  var Companion_instance_4;
  function Companion_getInstance_4() {
    return Companion_instance_4;
  }
  function containsGroupMark($this, group) {
    return group >= 0 ? containsMark($this.bt_1, groupIndexToAddress($this, group)) : false;
  }
  function containsAnyGroupMarks($this, group) {
    return group >= 0 ? containsAnyMark($this.bt_1, groupIndexToAddress($this, group)) : false;
  }
  function recalculateMarks($this) {
    var tmp0_safe_receiver = $this.ut_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      while (tmp0_safe_receiver.q12()) {
        updateContainsMarkNow($this, tmp0_safe_receiver.d1g(), tmp0_safe_receiver);
      }
    }
  }
  function updateContainsMark($this, group) {
    if (group >= 0) {
      var tmp0_elvis_lhs = $this.ut_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_0 = new PrioritySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotWriter.updateContainsMark.<anonymous>' call
        $this.ut_1 = this_0;
        tmp = this_0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      tmp.e1g(group);
    }
  }
  function updateContainsMarkNow($this, group, set) {
    var groupAddress = groupIndexToAddress($this, group);
    var containsAnyMarks = childContainsAnyMarks($this, group);
    var markChanges = !(containsMark($this.bt_1, groupAddress) === containsAnyMarks);
    if (markChanges) {
      updateContainsMark_0($this.bt_1, groupAddress, containsAnyMarks);
      var parent = $this.vz(group);
      if (parent >= 0) {
        set.e1g(parent);
      }
    }
  }
  function childContainsAnyMarks($this, group) {
    var child = group + 1 | 0;
    var end = group + $this.f11(group) | 0;
    while (child < end) {
      if (containsAnyMark($this.bt_1, groupIndexToAddress($this, child)))
        return true;
      child = child + $this.f11(child) | 0;
    }
    return false;
  }
  function saveCurrentGroupEnd($this) {
    $this.pt_1.uy((_get_capacity__a9k9f3($this) - $this.ft_1 | 0) - $this.gt_1 | 0);
  }
  function restoreCurrentGroupEnd($this) {
    var newGroupEnd = (_get_capacity__a9k9f3($this) - $this.ft_1 | 0) - $this.pt_1.c11() | 0;
    $this.gt_1 = newGroupEnd;
    return newGroupEnd;
  }
  function fixParentAnchorsFor($this, parent, endGroup, firstChild) {
    var parentAnchor = parentIndexToAnchor($this, parent, $this.et_1);
    var child = firstChild;
    while (child < endGroup) {
      updateParentAnchor($this.bt_1, groupIndexToAddress($this, child), parentAnchor);
      var childEnd = child + groupSize($this.bt_1, groupIndexToAddress($this, child)) | 0;
      fixParentAnchorsFor($this, child, childEnd, child + 1 | 0);
      child = childEnd;
    }
  }
  function moveGroupGapTo($this, index) {
    var gapLen = $this.ft_1;
    var gapStart = $this.et_1;
    if (!(gapStart === index)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!$this.dt_1.q()) {
        updateAnchors($this, gapStart, index);
      }
      if (gapLen > 0) {
        var groups = $this.bt_1;
        var groupPhysicalAddress = imul(index, 5);
        var groupPhysicalGapLen = imul(gapLen, 5);
        var groupPhysicalGapStart = imul(gapStart, 5);
        if (index < gapStart) {
          // Inline function 'kotlin.collections.copyInto' call
          var destinationOffset = groupPhysicalAddress + groupPhysicalGapLen | 0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp = groups;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp, groups, destinationOffset, groupPhysicalAddress, groupPhysicalGapStart);
        } else {
          // Inline function 'kotlin.collections.copyInto' call
          var startIndex = groupPhysicalGapStart + groupPhysicalGapLen | 0;
          var endIndex = groupPhysicalAddress + groupPhysicalGapLen | 0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_0 = groups;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp_0, groups, groupPhysicalGapStart, startIndex, endIndex);
        }
      }
      var groupAddress = index < gapStart ? index + gapLen | 0 : gapStart;
      var capacity = _get_capacity__a9k9f3($this);
      runtimeCheck(groupAddress < capacity);
      while (groupAddress < capacity) {
        var oldAnchor = parentAnchor($this.bt_1, groupAddress);
        var oldIndex = parentAnchorToIndex($this, oldAnchor);
        var newAnchor = parentIndexToAnchor($this, oldIndex, index);
        if (!(newAnchor === oldAnchor)) {
          updateParentAnchor($this.bt_1, groupAddress, newAnchor);
        }
        groupAddress = groupAddress + 1 | 0;
        if (groupAddress === index)
          groupAddress = groupAddress + gapLen | 0;
      }
    }
    $this.et_1 = index;
  }
  function moveSlotGapTo($this, index, group) {
    var gapLen = $this.kt_1;
    var gapStart = $this.jt_1;
    var slotsGapOwner = $this.lt_1;
    if (!(gapStart === index)) {
      var slots = $this.ct_1;
      if (index < gapStart) {
        // Inline function 'kotlin.collections.copyInto' call
        var destinationOffset = index + gapLen | 0;
        arrayCopy(slots, slots, destinationOffset, index, gapStart);
      } else {
        // Inline function 'kotlin.collections.copyInto' call
        var startIndex = gapStart + gapLen | 0;
        var endIndex = index + gapLen | 0;
        arrayCopy(slots, slots, gapStart, startIndex, endIndex);
      }
    }
    // Inline function 'kotlin.math.min' call
    var a = group + 1 | 0;
    var b = $this.j();
    var newSlotsGapOwner = Math.min(a, b);
    if (!(slotsGapOwner === newSlotsGapOwner)) {
      var slotsSize = $this.ct_1.length - gapLen | 0;
      if (newSlotsGapOwner < slotsGapOwner) {
        var updateAddress = groupIndexToAddress($this, newSlotsGapOwner);
        var stopUpdateAddress = groupIndexToAddress($this, slotsGapOwner);
        var groupGapStart = $this.et_1;
        while (updateAddress < stopUpdateAddress) {
          var anchor = dataAnchor($this.bt_1, updateAddress);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          if (!(anchor >= 0)) {
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            var message = 'Unexpected anchor value, expected a positive anchor';
            composeRuntimeError(toString(message));
          }
          updateDataAnchor($this.bt_1, updateAddress, -((slotsSize - anchor | 0) + 1 | 0) | 0);
          updateAddress = updateAddress + 1 | 0;
          if (updateAddress === groupGapStart)
            updateAddress = updateAddress + $this.ft_1 | 0;
        }
      } else {
        var updateAddress_0 = groupIndexToAddress($this, slotsGapOwner);
        var stopUpdateAddress_0 = groupIndexToAddress($this, newSlotsGapOwner);
        while (updateAddress_0 < stopUpdateAddress_0) {
          var anchor_0 = dataAnchor($this.bt_1, updateAddress_0);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          if (!(anchor_0 < 0)) {
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            var message_0 = 'Unexpected anchor value, expected a negative anchor';
            composeRuntimeError(toString(message_0));
          }
          updateDataAnchor($this.bt_1, updateAddress_0, (slotsSize + anchor_0 | 0) + 1 | 0);
          updateAddress_0 = updateAddress_0 + 1 | 0;
          if (updateAddress_0 === $this.et_1)
            updateAddress_0 = updateAddress_0 + $this.ft_1 | 0;
        }
      }
      $this.lt_1 = newSlotsGapOwner;
    }
    $this.jt_1 = index;
  }
  function clearSlotGap($this) {
    var slotsGapStart = $this.jt_1;
    var slotsGapEnd = slotsGapStart + $this.kt_1 | 0;
    fill_0($this.ct_1, null, slotsGapStart, slotsGapEnd);
  }
  function insertGroups($this, size) {
    if (size > 0) {
      var currentGroup = $this.rt_1;
      moveGroupGapTo($this, currentGroup);
      var gapStart = $this.et_1;
      var gapLen = $this.ft_1;
      var oldCapacity = $this.bt_1.length / 5 | 0;
      var oldSize = oldCapacity - gapLen | 0;
      if (gapLen < size) {
        var groups = $this.bt_1;
        // Inline function 'kotlin.math.max' call
        // Inline function 'kotlin.math.max' call
        var a = imul(oldCapacity, 2);
        var b = oldSize + size | 0;
        var a_0 = Math.max(a, b);
        var newCapacity = Math.max(a_0, 32);
        var newGroups = new Int32Array(imul(newCapacity, 5));
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex = imul(gapStart, 5);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = groups;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp, newGroups, 0, 0, endIndex);
        // Inline function 'kotlin.collections.copyInto' call
        var destinationOffset = imul(newGapEndAddress, 5);
        var startIndex = imul(oldGapEndAddress, 5);
        var endIndex_0 = imul(oldCapacity, 5);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = groups;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_0, newGroups, destinationOffset, startIndex, endIndex_0);
        $this.bt_1 = newGroups;
        gapLen = newGapLen;
      }
      var currentEnd = $this.gt_1;
      if (currentEnd >= gapStart)
        $this.gt_1 = currentEnd + size | 0;
      $this.et_1 = gapStart + size | 0;
      $this.ft_1 = gapLen - size | 0;
      var index = oldSize > 0 ? dataIndex($this, currentGroup + size | 0) : 0;
      var anchor = dataIndexToDataAnchor($this, index, $this.lt_1 < gapStart ? 0 : $this.jt_1, $this.kt_1, $this.ct_1.length);
      var inductionVariable = gapStart;
      var last = gapStart + size | 0;
      if (inductionVariable < last)
        do {
          var groupAddress = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          updateDataAnchor($this.bt_1, groupAddress, anchor);
        }
         while (inductionVariable < last);
      var slotsGapOwner = $this.lt_1;
      if (slotsGapOwner >= gapStart) {
        $this.lt_1 = slotsGapOwner + size | 0;
      }
    }
  }
  function insertSlots($this, size, group) {
    if (size > 0) {
      moveSlotGapTo($this, $this.ht_1, group);
      var gapStart = $this.jt_1;
      var gapLen = $this.kt_1;
      if (gapLen < size) {
        var slots = $this.ct_1;
        var oldCapacity = slots.length;
        var oldSize = oldCapacity - gapLen | 0;
        // Inline function 'kotlin.math.max' call
        // Inline function 'kotlin.math.max' call
        var a = imul(oldCapacity, 2);
        var b = oldSize + size | 0;
        var a_0 = Math.max(a, b);
        var newCapacity = Math.max(a_0, 32);
        var tmp = 0;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp_0 = fillArrayVal(Array(newCapacity), null);
        while (tmp < newCapacity) {
          tmp_0[tmp] = null;
          tmp = tmp + 1 | 0;
        }
        var newData = tmp_0;
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, 0, 0, gapStart);
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, newGapEndAddress, oldGapEndAddress, oldCapacity);
        $this.ct_1 = newData;
        gapLen = newGapLen;
      }
      var currentDataEnd = $this.it_1;
      if (currentDataEnd >= gapStart)
        $this.it_1 = currentDataEnd + size | 0;
      $this.jt_1 = gapStart + size | 0;
      $this.kt_1 = gapLen - size | 0;
    }
  }
  function removeGroups($this, start, len) {
    var tmp;
    if (len > 0) {
      var anchorsRemoved = false;
      var anchors = $this.dt_1;
      moveGroupGapTo($this, start);
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!anchors.q())
        anchorsRemoved = removeAnchors($this, start, len);
      $this.et_1 = start;
      var previousGapLen = $this.ft_1;
      var newGapLen = previousGapLen + len | 0;
      $this.ft_1 = newGapLen;
      var slotsGapOwner = $this.lt_1;
      if (slotsGapOwner > start) {
        var tmp_0 = $this;
        // Inline function 'kotlin.math.max' call
        var b = slotsGapOwner - len | 0;
        tmp_0.lt_1 = Math.max(start, b);
      }
      if ($this.gt_1 >= $this.et_1) {
        $this.gt_1 = $this.gt_1 - len | 0;
      }
      if (containsGroupMark($this, $this.st_1)) {
        updateContainsMark($this, $this.st_1);
      }
      tmp = anchorsRemoved;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function removeSlots($this, start, len, group) {
    if (len > 0) {
      var gapLen = $this.kt_1;
      var removeEnd = start + len | 0;
      moveSlotGapTo($this, removeEnd, group);
      $this.jt_1 = start;
      $this.kt_1 = gapLen + len | 0;
      fill_0($this.ct_1, null, start, start + len | 0);
      var currentDataEnd = $this.it_1;
      if (currentDataEnd >= start)
        $this.it_1 = currentDataEnd - len | 0;
    }
  }
  function updateNodeOfGroup($this, index, value) {
    var address = groupIndexToAddress($this, index);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(address < $this.bt_1.length ? isNode($this.bt_1, address) : false)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.updateNodeOfGroup.<anonymous>' call
      var message = 'Updating the node of a group at ' + index + ' that was not created with as a node group';
      composeRuntimeError(toString(message));
    }
    $this.ct_1[dataIndexToDataAddress($this, nodeIndex($this.bt_1, $this, address))] = value;
  }
  function updateAnchors($this, previousGapStart, newGapStart) {
    var gapLen = $this.ft_1;
    var size = _get_capacity__a9k9f3($this) - gapLen | 0;
    if (previousGapStart < newGapStart) {
      var index = locationOf($this.dt_1, previousGapStart, size);
      $l$loop_0: while (index < $this.dt_1.j()) {
        var anchor = $this.dt_1.k(index);
        var location = anchor.j13_1;
        if (location < 0) {
          var newLocation = size + location | 0;
          if (newLocation < newGapStart) {
            anchor.j13_1 = size + location | 0;
            index = index + 1 | 0;
          } else
            break $l$loop_0;
        } else
          break $l$loop_0;
      }
    } else {
      var index_0 = locationOf($this.dt_1, newGapStart, size);
      $l$loop_1: while (index_0 < $this.dt_1.j()) {
        var anchor_0 = $this.dt_1.k(index_0);
        var location_0 = anchor_0.j13_1;
        if (location_0 >= 0) {
          anchor_0.j13_1 = -(size - location_0 | 0) | 0;
          index_0 = index_0 + 1 | 0;
        } else
          break $l$loop_1;
      }
    }
  }
  function removeAnchors($this, gapStart, size) {
    var gapLen = $this.ft_1;
    var removeEnd = gapStart + size | 0;
    var groupsSize = _get_capacity__a9k9f3($this) - gapLen | 0;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    var it = locationOf($this.dt_1, gapStart + size | 0, groupsSize);
    var index = it >= $this.dt_1.j() ? it - 1 | 0 : it;
    var removeAnchorEnd = 0;
    var removeAnchorStart = index + 1 | 0;
    $l$loop: while (index >= 0) {
      var anchor = $this.dt_1.k(index);
      var location = $this.h12(anchor);
      if (location >= gapStart) {
        if (location < removeEnd) {
          anchor.j13_1 = IntCompanionObject_instance.MIN_VALUE;
          removeAnchorStart = index;
          if (removeAnchorEnd === 0)
            removeAnchorEnd = index + 1 | 0;
        }
        index = index - 1 | 0;
      } else
        break $l$loop;
    }
    // Inline function 'kotlin.also' call
    var this_0 = removeAnchorStart < removeAnchorEnd;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    if (this_0) {
      $this.dt_1.x1(removeAnchorStart, removeAnchorEnd).b1();
    }
    return this_0;
  }
  function moveAnchors($this, originalLocation, newLocation, size) {
    var end = originalLocation + size | 0;
    var groupsSize = $this.j();
    var index = locationOf($this.dt_1, originalLocation, groupsSize);
    // Inline function 'kotlin.collections.mutableListOf' call
    var removedAnchors = ArrayList_init_$Create$();
    if (index >= 0) {
      $l$loop: while (index < $this.dt_1.j()) {
        var anchor = $this.dt_1.k(index);
        var location = $this.h12(anchor);
        if (location >= originalLocation ? location < end : false) {
          removedAnchors.u(anchor);
          $this.dt_1.g1(index);
        } else
          break $l$loop;
      }
    }
    var moveDelta = newLocation - originalLocation | 0;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = removedAnchors.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = removedAnchors.k(index_0);
        // Inline function 'androidx.compose.runtime.SlotWriter.moveAnchors.<anonymous>' call
        var anchorIndex = $this.h12(item);
        var newAnchorIndex = anchorIndex + moveDelta | 0;
        if (newAnchorIndex >= $this.et_1) {
          item.j13_1 = -(groupsSize - newAnchorIndex | 0) | 0;
        } else {
          item.j13_1 = newAnchorIndex;
        }
        var insertIndex = locationOf($this.dt_1, newAnchorIndex, groupsSize);
        $this.dt_1.t1(insertIndex, item);
      }
       while (inductionVariable <= last);
  }
  function _get_capacity__a9k9f3($this) {
    return $this.bt_1.length / 5 | 0;
  }
  function groupIndexToAddress($this, index) {
    return index < $this.et_1 ? index : index + $this.ft_1 | 0;
  }
  function dataIndexToDataAddress($this, dataIndex) {
    return dataIndex < $this.jt_1 ? dataIndex : dataIndex + $this.kt_1 | 0;
  }
  function parent(_this__u8e3s4, $this, index) {
    return parentAnchorToIndex($this, parentAnchor(_this__u8e3s4, groupIndexToAddress($this, index)));
  }
  function dataIndex($this, index) {
    return dataIndex_0($this.bt_1, $this, groupIndexToAddress($this, index));
  }
  function dataIndex_0(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.ct_1.length - $this.kt_1 | 0 : dataAnchorToDataIndex($this, dataAnchor(_this__u8e3s4, address), $this.kt_1, $this.ct_1.length);
  }
  function slotIndex(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.ct_1.length - $this.kt_1 | 0 : dataAnchorToDataIndex($this, slotAnchor(_this__u8e3s4, address), $this.kt_1, $this.ct_1.length);
  }
  function updateDataIndex(_this__u8e3s4, $this, address, dataIndex) {
    updateDataAnchor(_this__u8e3s4, address, dataIndexToDataAnchor($this, dataIndex, $this.jt_1, $this.kt_1, $this.ct_1.length));
  }
  function nodeIndex(_this__u8e3s4, $this, address) {
    return dataIndex_0(_this__u8e3s4, $this, address);
  }
  function auxIndex(_this__u8e3s4, $this, address) {
    return dataIndex_0(_this__u8e3s4, $this, address) + countOneBits_0(groupInfo(_this__u8e3s4, address) >> 29) | 0;
  }
  function dataIndexToDataAnchor($this, index, gapStart, gapLen, capacity) {
    return index > gapStart ? -(((capacity - gapLen | 0) - index | 0) + 1 | 0) | 0 : index;
  }
  function dataAnchorToDataIndex($this, anchor, gapLen, capacity) {
    return anchor < 0 ? ((capacity - gapLen | 0) + anchor | 0) + 1 | 0 : anchor;
  }
  function parentIndexToAnchor($this, index, gapStart) {
    return index < gapStart ? index : -(($this.j() - index | 0) - -2 | 0) | 0;
  }
  function parentAnchorToIndex($this, index) {
    return index > -2 ? index : ($this.j() + index | 0) - -2 | 0;
  }
  function SlotWriter$groupSlots$1($start, $end, this$0) {
    this.g1g_1 = $end;
    this.h1g_1 = this$0;
    this.f1g_1 = $start;
  }
  protoOf(SlotWriter$groupSlots$1).x = function () {
    return this.f1g_1 < this.g1g_1;
  };
  protoOf(SlotWriter$groupSlots$1).z = function () {
    var tmp;
    if (this.x()) {
      var tmp_0 = this.h1g_1.ct_1;
      var tmp1 = this.f1g_1;
      this.f1g_1 = tmp1 + 1 | 0;
      tmp = tmp_0[dataIndexToDataAddress(this.h1g_1, tmp1)];
    } else {
      tmp = null;
    }
    return tmp;
  };
  function SlotWriter(table) {
    this.at_1 = table;
    this.bt_1 = this.at_1.gy_1;
    this.ct_1 = this.at_1.iy_1;
    this.dt_1 = this.at_1.ny_1;
    this.et_1 = this.at_1.hy_1;
    this.ft_1 = (this.bt_1.length / 5 | 0) - this.at_1.hy_1 | 0;
    this.gt_1 = this.at_1.hy_1;
    this.ht_1 = 0;
    this.it_1 = 0;
    this.jt_1 = this.at_1.jy_1;
    this.kt_1 = this.ct_1.length - this.at_1.jy_1 | 0;
    this.lt_1 = this.at_1.hy_1;
    this.mt_1 = 0;
    this.nt_1 = 0;
    this.ot_1 = new IntStack();
    this.pt_1 = new IntStack();
    this.qt_1 = new IntStack();
    this.rt_1 = 0;
    this.st_1 = -1;
    this.tt_1 = false;
    this.ut_1 = null;
  }
  protoOf(SlotWriter).w13 = function () {
    return this.rt_1 < this.gt_1 ? isNode(this.bt_1, groupIndexToAddress(this, this.rt_1)) : false;
  };
  protoOf(SlotWriter).x11 = function (index) {
    return isNode(this.bt_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).y11 = function (index) {
    return nodeCount(this.bt_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).uz = function (index) {
    return key(this.bt_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).tz = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasObjectKey(this.bt_1, address) ? this.ct_1[objectKeyIndex(this.bt_1, address)] : null;
  };
  protoOf(SlotWriter).f11 = function (index) {
    return groupSize(this.bt_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).sz = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasAux(this.bt_1, address) ? this.ct_1[auxIndex(this.bt_1, this, address)] : Companion_getInstance_0().gu_1;
  };
  protoOf(SlotWriter).u13 = function (index) {
    return (index > this.st_1 ? index < this.gt_1 : false) ? true : this.st_1 === 0 ? index === 0 : false;
  };
  protoOf(SlotWriter).x13 = function (index) {
    return this.v13(index, this.rt_1);
  };
  protoOf(SlotWriter).v13 = function (index, group) {
    var tmp;
    if (group === this.st_1) {
      tmp = this.gt_1;
    } else if (group > this.ot_1.y12(0)) {
      tmp = group + this.f11(group) | 0;
    } else {
      var openIndex = this.ot_1.i1g(group);
      tmp = openIndex < 0 ? group + this.f11(group) | 0 : (_get_capacity__a9k9f3(this) - this.ft_1 | 0) - this.pt_1.w11(openIndex) | 0;
    }
    var end = tmp;
    return index > group ? index < end : false;
  };
  protoOf(SlotWriter).p12 = function (index) {
    var address = groupIndexToAddress(this, index);
    return isNode(this.bt_1, address) ? this.ct_1[dataIndexToDataAddress(this, nodeIndex(this.bt_1, this, address))] : null;
  };
  protoOf(SlotWriter).n14 = function (anchor) {
    return this.p12(anchor.j1g(this));
  };
  protoOf(SlotWriter).vz = function (index) {
    return parent(this.bt_1, this, index);
  };
  protoOf(SlotWriter).lz = function () {
    this.tt_1 = true;
    if (this.ot_1.q()) {
      moveGroupGapTo(this, this.j());
      moveSlotGapTo(this, this.ct_1.length - this.kt_1 | 0, this.et_1);
      clearSlotGap(this);
      recalculateMarks(this);
    }
    this.at_1.k1g(this, this.bt_1, this.et_1, this.ct_1, this.jt_1, this.dt_1);
  };
  protoOf(SlotWriter).e16 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.mt_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.reset.<anonymous>' call
      var message = 'Cannot reset when inserting';
      composeRuntimeError(toString(message));
    }
    recalculateMarks(this);
    this.rt_1 = 0;
    this.gt_1 = _get_capacity__a9k9f3(this) - this.ft_1 | 0;
    this.ht_1 = 0;
    this.it_1 = 0;
    this.nt_1 = 0;
  };
  protoOf(SlotWriter).s12 = function (value) {
    var result = this.l1g();
    this.m1g(value);
    return result;
  };
  protoOf(SlotWriter).q14 = function (value) {
    var address = groupIndexToAddress(this, this.rt_1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!hasAux(this.bt_1, address)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.updateAux.<anonymous>' call
      var message = 'Updating the data of a group that was not created with a data slot';
      composeRuntimeError(toString(message));
    }
    this.ct_1[dataIndexToDataAddress(this, auxIndex(this.bt_1, this, address))] = value;
  };
  protoOf(SlotWriter).t15 = function (value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.mt_1 >= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.insertAux.<anonymous>' call
      var message = 'Cannot insert auxiliary data when not inserting';
      composeRuntimeError(toString(message));
    }
    var parent = this.st_1;
    var parentGroupAddress = groupIndexToAddress(this, parent);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!hasAux(this.bt_1, parentGroupAddress)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.insertAux.<anonymous>' call
      var message_0 = 'Group already has auxiliary data';
      composeRuntimeError(toString(message_0));
    }
    insertSlots(this, 1, parent);
    var auxIndex_0 = auxIndex(this.bt_1, this, parentGroupAddress);
    var auxAddress = dataIndexToDataAddress(this, auxIndex_0);
    if (this.ht_1 > auxIndex_0) {
      var slotsToMove = this.ht_1 - auxIndex_0 | 0;
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(slotsToMove < 3)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.insertAux.<anonymous>' call
        var message_1 = 'Moving more than two slot not supported';
        throw IllegalStateException_init_$Create$(toString(message_1));
      }
      if (slotsToMove > 1) {
        this.ct_1[auxAddress + 2 | 0] = this.ct_1[auxAddress + 1 | 0];
      }
      this.ct_1[auxAddress + 1 | 0] = this.ct_1[auxAddress];
    }
    addAux(this.bt_1, parentGroupAddress);
    this.ct_1[auxAddress] = value;
    this.ht_1 = this.ht_1 + 1 | 0;
  };
  protoOf(SlotWriter).b1g = function (value) {
    return updateNodeOfGroup(this, this.rt_1, value);
  };
  protoOf(SlotWriter).m14 = function (anchor, value) {
    return updateNodeOfGroup(this, anchor.j1g(this), value);
  };
  protoOf(SlotWriter).m1g = function (value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.ht_1 <= this.it_1)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.set.<anonymous>' call
      var message = 'Writing to an invalid slot';
      composeRuntimeError(toString(message));
    }
    this.ct_1[dataIndexToDataAddress(this, this.ht_1 - 1 | 0)] = value;
  };
  protoOf(SlotWriter).p14 = function (index, value) {
    var address = groupIndexToAddress(this, this.rt_1);
    var slotsStart = slotIndex(this.bt_1, this, address);
    var slotsEnd = dataIndex_0(this.bt_1, this, groupIndexToAddress(this, this.rt_1 + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(slotsIndex >= slotsStart ? slotsIndex < slotsEnd : false)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.set.<anonymous>' call
      var message = 'Write to an invalid slot index ' + index + ' for group ' + this.rt_1;
      composeRuntimeError(toString(message));
    }
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    var result = this.ct_1[slotAddress];
    this.ct_1[slotAddress] = value;
    return result;
  };
  protoOf(SlotWriter).l1g = function () {
    if (this.mt_1 > 0) {
      insertSlots(this, 1, this.st_1);
    }
    var tmp = this.ct_1;
    var tmp1 = this.ht_1;
    this.ht_1 = tmp1 + 1 | 0;
    return tmp[dataIndexToDataAddress(this, tmp1)];
  };
  protoOf(SlotWriter).m1b = function (anchor, index) {
    return this.o1b(this.h12(anchor), index);
  };
  protoOf(SlotWriter).o1b = function (groupIndex, index) {
    var address = groupIndexToAddress(this, groupIndex);
    var slotsStart = slotIndex(this.bt_1, this, address);
    var slotsEnd = dataIndex_0(this.bt_1, this, groupIndexToAddress(this, groupIndex + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    if (!(slotsStart <= slotsIndex ? slotsIndex < slotsEnd : false)) {
      return Companion_getInstance_0().gu_1;
    }
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    return this.ct_1[slotAddress];
  };
  protoOf(SlotWriter).v14 = function (amount) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(amount >= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var message = 'Cannot seek backwards';
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.mt_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var message_0 = 'Cannot call seek() while inserting';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (amount === 0)
      return Unit_instance;
    var index = this.rt_1 + amount | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(index >= this.st_1 ? index <= this.gt_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var message_1 = 'Cannot seek outside the current group (' + this.st_1 + '-' + this.gt_1 + ')';
      composeRuntimeError(toString(message_1));
    }
    this.rt_1 = index;
    var newSlot = dataIndex_0(this.bt_1, this, groupIndexToAddress(this, index));
    this.ht_1 = newSlot;
    this.it_1 = newSlot;
  };
  protoOf(SlotWriter).xu = function () {
    var newGroup = this.gt_1;
    this.rt_1 = newGroup;
    this.ht_1 = dataIndex_0(this.bt_1, this, groupIndexToAddress(this, newGroup));
  };
  protoOf(SlotWriter).q10 = function () {
    var tmp1 = this.mt_1;
    this.mt_1 = tmp1 + 1 | 0;
    if (tmp1 === 0) {
      saveCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).n11 = function () {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.mt_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
      var message = 'Unbalanced begin/end insert';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.mt_1 = this.mt_1 - 1 | 0;
    if (this.mt_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(this.qt_1.j() === this.ot_1.j())) {
        // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
        var message_0 = 'startGroup/endGroup mismatch while inserting';
        composeRuntimeError(toString(message_0));
      }
      restoreCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).zz = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.mt_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.startGroup.<anonymous>' call
      var message = 'Key must be supplied when inserting';
      composeRuntimeError(toString(message));
    }
    startGroup_1(this, 0, Companion_getInstance_0().gu_1, false, Companion_getInstance_0().gu_1);
  };
  protoOf(SlotWriter).b10 = function (key, dataKey) {
    return startGroup_1(this, key, dataKey, false, Companion_getInstance_0().gu_1);
  };
  protoOf(SlotWriter).d10 = function (key, objectKey) {
    return startGroup_1(this, key, objectKey, true, Companion_getInstance_0().gu_1);
  };
  protoOf(SlotWriter).c10 = function (key, objectKey, aux) {
    return startGroup_1(this, key, objectKey, false, aux);
  };
  protoOf(SlotWriter).m11 = function () {
    var inserting = this.mt_1 > 0;
    var currentGroup = this.rt_1;
    var currentGroupEnd = this.gt_1;
    var groupIndex = this.st_1;
    var groupAddress = groupIndexToAddress(this, groupIndex);
    var newNodes = this.nt_1;
    var newGroupSize = currentGroup - groupIndex | 0;
    var isNode_0 = isNode(this.bt_1, groupAddress);
    if (inserting) {
      updateGroupSize(this.bt_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.bt_1, groupAddress, newNodes);
      this.nt_1 = this.qt_1.c11() + (isNode_0 ? 1 : newNodes) | 0;
      this.st_1 = parent(this.bt_1, this, groupIndex);
    } else {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(currentGroup === currentGroupEnd)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.endGroup.<anonymous>' call
        var message = 'Expected to be at the end of a group';
        composeRuntimeError(toString(message));
      }
      var oldGroupSize = groupSize(this.bt_1, groupAddress);
      var oldNodes = nodeCount(this.bt_1, groupAddress);
      updateGroupSize(this.bt_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.bt_1, groupAddress, newNodes);
      var newParent = this.ot_1.c11();
      restoreCurrentGroupEnd(this);
      this.st_1 = newParent;
      var groupParent = parent(this.bt_1, this, groupIndex);
      this.nt_1 = this.qt_1.c11();
      if (groupParent === newParent) {
        this.nt_1 = this.nt_1 + (isNode_0 ? 0 : newNodes - oldNodes | 0) | 0;
      } else {
        var groupSizeDelta = newGroupSize - oldGroupSize | 0;
        var nodesDelta = isNode_0 ? 0 : newNodes - oldNodes | 0;
        if (!(groupSizeDelta === 0) ? true : !(nodesDelta === 0)) {
          var current = groupParent;
          while ((!(current === 0) ? !(current === newParent) : false) ? !(nodesDelta === 0) ? true : !(groupSizeDelta === 0) : false) {
            var currentAddress = groupIndexToAddress(this, current);
            if (!(groupSizeDelta === 0)) {
              var newSize = groupSize(this.bt_1, currentAddress) + groupSizeDelta | 0;
              updateGroupSize(this.bt_1, currentAddress, newSize);
            }
            if (!(nodesDelta === 0)) {
              updateNodeCount_0(this.bt_1, currentAddress, nodeCount(this.bt_1, currentAddress) + nodesDelta | 0);
            }
            if (isNode(this.bt_1, currentAddress))
              nodesDelta = 0;
            current = parent(this.bt_1, this, current);
          }
        }
        this.nt_1 = this.nt_1 + nodesDelta | 0;
      }
    }
    return newNodes;
  };
  protoOf(SlotWriter).d16 = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.mt_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
      var message = 'Cannot call ensureStarted() while inserting';
      composeRuntimeError(toString(message));
    }
    var parent = this.st_1;
    if (!(parent === index)) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(index >= parent ? index < this.gt_1 : false)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
        var message_0 = 'Started group at ' + index + ' must be a subgroup of the group at ' + parent;
        composeRuntimeError(toString(message_0));
      }
      var oldCurrent = this.rt_1;
      var oldCurrentSlot = this.ht_1;
      var oldCurrentSlotEnd = this.it_1;
      this.rt_1 = index;
      this.zz();
      this.rt_1 = oldCurrent;
      this.ht_1 = oldCurrentSlot;
      this.it_1 = oldCurrentSlotEnd;
    }
  };
  protoOf(SlotWriter).e15 = function (anchor) {
    return this.d16(anchor.j1g(this));
  };
  protoOf(SlotWriter).rz = function () {
    var groupAddress = groupIndexToAddress(this, this.rt_1);
    var newGroup = this.rt_1 + groupSize(this.bt_1, groupAddress) | 0;
    this.rt_1 = newGroup;
    this.ht_1 = dataIndex_0(this.bt_1, this, groupIndexToAddress(this, newGroup));
    return isNode(this.bt_1, groupAddress) ? 1 : nodeCount(this.bt_1, groupAddress);
  };
  protoOf(SlotWriter).fu = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.mt_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>' call
      var message = 'Cannot remove group while inserting';
      composeRuntimeError(toString(message));
    }
    var oldGroup = this.rt_1;
    var oldSlot = this.ht_1;
    var count = this.rz();
    var tmp0_safe_receiver = this.ut_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      while (tmp0_safe_receiver.q12() ? tmp0_safe_receiver.l15() >= oldGroup : false) {
        tmp0_safe_receiver.d1g();
      }
    }
    var anchorsRemoved = removeGroups(this, oldGroup, this.rt_1 - oldGroup | 0);
    removeSlots(this, oldSlot, this.ht_1 - oldSlot | 0, oldGroup - 1 | 0);
    this.rt_1 = oldGroup;
    this.ht_1 = oldSlot;
    this.nt_1 = this.nt_1 - count | 0;
    return anchorsRemoved;
  };
  protoOf(SlotWriter).vt = function () {
    var start = dataIndex_0(this.bt_1, this, groupIndexToAddress(this, this.rt_1));
    var end = dataIndex_0(this.bt_1, this, groupIndexToAddress(this, this.rt_1 + this.f11(this.rt_1) | 0));
    return new SlotWriter$groupSlots$1(start, end, this);
  };
  protoOf(SlotWriter).r14 = function (offset) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.mt_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var message = 'Cannot move a group while inserting';
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(offset >= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var message_0 = 'Parameter offset is out of bounds';
      composeRuntimeError(toString(message_0));
    }
    if (offset === 0)
      return Unit_instance;
    var current = this.rt_1;
    var parent = this.st_1;
    var parentEnd = this.gt_1;
    var count = offset;
    var groupToMove = current;
    while (count > 0) {
      groupToMove = groupToMove + groupSize(this.bt_1, groupIndexToAddress(this, groupToMove)) | 0;
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(groupToMove <= parentEnd)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
        var message_1 = 'Parameter offset is out of bounds';
        composeRuntimeError(toString(message_1));
      }
      count = count - 1 | 0;
    }
    var moveLen = groupSize(this.bt_1, groupIndexToAddress(this, groupToMove));
    var currentSlot = this.ht_1;
    var dataStart = dataIndex_0(this.bt_1, this, groupIndexToAddress(this, groupToMove));
    var dataEnd = dataIndex_0(this.bt_1, this, groupIndexToAddress(this, groupToMove + moveLen | 0));
    var moveDataLen = dataEnd - dataStart | 0;
    // Inline function 'kotlin.math.max' call
    var a = this.rt_1 - 1 | 0;
    var tmp$ret$3 = Math.max(a, 0);
    insertSlots(this, moveDataLen, tmp$ret$3);
    insertGroups(this, moveLen);
    var groups = this.bt_1;
    var moveLocationAddress = groupIndexToAddress(this, groupToMove + moveLen | 0);
    var moveLocationOffset = imul(moveLocationAddress, 5);
    var currentAddress = groupIndexToAddress(this, current);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = imul(currentAddress, 5);
    var endIndex = moveLocationOffset + imul(moveLen, 5) | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = groups;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, groups, destinationOffset, moveLocationOffset, endIndex);
    if (moveDataLen > 0) {
      var slots = this.ct_1;
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = dataIndexToDataAddress(this, dataStart + moveDataLen | 0);
      var endIndex_0 = dataIndexToDataAddress(this, dataEnd + moveDataLen | 0);
      arrayCopy(slots, slots, currentSlot, startIndex, endIndex_0);
    }
    var dataMoveDistance = (dataStart + moveDataLen | 0) - currentSlot | 0;
    var slotsGapStart = this.jt_1;
    var slotsGapLen = this.kt_1;
    var slotsCapacity = this.ct_1.length;
    var slotsGapOwner = this.lt_1;
    var inductionVariable = current;
    var last = current + moveLen | 0;
    if (inductionVariable < last)
      do {
        var group = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var groupAddress = groupIndexToAddress(this, group);
        var oldIndex = dataIndex_0(groups, this, groupAddress);
        var newIndex = oldIndex - dataMoveDistance | 0;
        var newAnchor = dataIndexToDataAnchor(this, newIndex, slotsGapOwner < groupAddress ? 0 : slotsGapStart, slotsGapLen, slotsCapacity);
        updateDataIndex(groups, this, groupAddress, newAnchor);
      }
       while (inductionVariable < last);
    moveAnchors(this, groupToMove + moveLen | 0, current, moveLen);
    var anchorsRemoved = removeGroups(this, groupToMove + moveLen | 0, moveLen);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!anchorsRemoved) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var message_2 = 'Unexpectedly removed anchors';
      composeRuntimeError(toString(message_2));
    }
    fixParentAnchorsFor(this, parent, this.gt_1, current);
    if (moveDataLen > 0) {
      removeSlots(this, dataStart + moveDataLen | 0, moveDataLen, (groupToMove + moveLen | 0) - 1 | 0);
    }
  };
  protoOf(SlotWriter).t12 = function (anchor, offset, writer) {
    runtimeCheck(writer.mt_1 > 0);
    runtimeCheck(this.mt_1 === 0);
    runtimeCheck(anchor.u17());
    var location = this.h12(anchor) + offset | 0;
    var currentGroup = this.rt_1;
    runtimeCheck(currentGroup <= location ? location < this.gt_1 : false);
    var parent = this.vz(location);
    var size = this.f11(location);
    var nodes = this.x11(location) ? 1 : this.y11(location);
    var result = moveGroup$default(Companion_instance_4, this, location, writer, false, false);
    updateContainsMark(this, parent);
    var current = parent;
    var updatingNodes = nodes > 0;
    while (current >= currentGroup) {
      var currentAddress = groupIndexToAddress(this, current);
      updateGroupSize(this.bt_1, currentAddress, groupSize(this.bt_1, currentAddress) - size | 0);
      if (updatingNodes) {
        if (isNode(this.bt_1, currentAddress))
          updatingNodes = false;
        else {
          updateNodeCount_0(this.bt_1, currentAddress, nodeCount(this.bt_1, currentAddress) - nodes | 0);
        }
      }
      current = this.vz(current);
    }
    if (updatingNodes) {
      runtimeCheck(this.nt_1 >= nodes);
      this.nt_1 = this.nt_1 - nodes | 0;
    }
    return result;
  };
  protoOf(SlotWriter).x14 = function (table, index, removeSourceGroup) {
    runtimeCheck(this.mt_1 > 0);
    if (((index === 0 ? this.rt_1 === 0 : false) ? this.at_1.hy_1 === 0 : false) ? groupSize(table.gy_1, index) === table.hy_1 : false) {
      var myGroups = this.bt_1;
      var mySlots = this.ct_1;
      var myAnchors = this.dt_1;
      var groups = table.gy_1;
      var groupsSize = table.hy_1;
      var slots = table.iy_1;
      var slotsSize = table.jy_1;
      this.bt_1 = groups;
      this.ct_1 = slots;
      this.dt_1 = table.ny_1;
      this.et_1 = groupsSize;
      this.ft_1 = (groups.length / 5 | 0) - groupsSize | 0;
      this.jt_1 = slotsSize;
      this.kt_1 = slots.length - slotsSize | 0;
      this.lt_1 = groupsSize;
      table.n1g(myGroups, 0, mySlots, 0, myAnchors);
      return this.dt_1;
    }
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = table.xz();
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveFrom.<anonymous>' call
      tmp = moveGroup(Companion_instance_4, writer, index, this, true, true, removeSourceGroup);
    }finally {
      writer.lz();
    }
    return tmp;
  };
  protoOf(SlotWriter).u14 = function (offset, table, index) {
    runtimeCheck(this.mt_1 <= 0 ? this.f11(this.rt_1 + offset | 0) === 1 : false);
    var previousCurrentGroup = this.rt_1;
    var previousCurrentSlot = this.ht_1;
    var previousCurrentSlotEnd = this.it_1;
    this.v14(offset);
    this.zz();
    this.q10();
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = table.xz();
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveIntoGroupFrom.<anonymous>' call
      tmp = moveGroup$default(Companion_instance_4, writer, index, this, false, true);
    }finally {
      writer.lz();
    }
    var anchors = tmp;
    this.n11();
    this.m11();
    this.rt_1 = previousCurrentGroup;
    this.ht_1 = previousCurrentSlot;
    this.it_1 = previousCurrentSlotEnd;
    return anchors;
  };
  protoOf(SlotWriter).r10 = function (index) {
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var this_0 = this.dt_1;
    var effectiveSize = this.j();
    var location = search$accessor$mbvawc(this_0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotWriter.anchor.<anonymous>' call
      var anchor = new Anchor(index <= this.et_1 ? index : -(this.j() - index | 0) | 0);
      this_0.t1(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = this_0.k(location);
    }
    return tmp;
  };
  protoOf(SlotWriter).o1g = function (group) {
    var groupAddress = groupIndexToAddress(this, group);
    if (!hasMark(this.bt_1, groupAddress)) {
      updateMark(this.bt_1, groupAddress, true);
      if (!containsMark(this.bt_1, groupAddress)) {
        updateContainsMark(this, this.vz(group));
      }
    }
  };
  protoOf(SlotWriter).e12 = function (group, $super) {
    group = group === VOID ? this.st_1 : group;
    var tmp;
    if ($super === VOID) {
      this.o1g(group);
      tmp = Unit_instance;
    } else {
      tmp = $super.o1g.call(this, group);
    }
    return tmp;
  };
  protoOf(SlotWriter).h12 = function (anchor) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.anchorIndex.<anonymous>' call
    var it = anchor.j13_1;
    return it < 0 ? this.j() + it | 0 : it;
  };
  protoOf(SlotWriter).toString = function () {
    return 'SlotWriter(current = ' + this.rt_1 + ' end=' + this.gt_1 + ' size = ' + this.j() + ' ' + ('gap=' + this.et_1 + '-' + (this.et_1 + this.ft_1 | 0) + ')');
  };
  protoOf(SlotWriter).j = function () {
    return _get_capacity__a9k9f3(this) - this.ft_1 | 0;
  };
  function Anchor(loc) {
    this.j13_1 = loc;
  }
  protoOf(Anchor).u17 = function () {
    return !(this.j13_1 === IntCompanionObject_instance.MIN_VALUE);
  };
  protoOf(Anchor).w14 = function (slots) {
    return slots.h12(this);
  };
  protoOf(Anchor).j1g = function (writer) {
    return writer.h12(this);
  };
  function SlotTable() {
    this.gy_1 = new Int32Array(0);
    this.hy_1 = 0;
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(0), null);
    while (tmp_0 < 0) {
      tmp_1[tmp_0] = null;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.iy_1 = tmp_1;
    this.jy_1 = 0;
    this.ky_1 = 0;
    this.ly_1 = false;
    this.my_1 = 0;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp_2.ny_1 = ArrayList_init_$Create$();
  }
  protoOf(SlotTable).dl = function () {
    return this.hy_1 === 0;
  };
  protoOf(SlotTable).oy = function () {
    if (this.ly_1) {
      // Inline function 'kotlin.error' call
      var message = 'Cannot read while a writer is pending';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.ky_1 = this.ky_1 + 1 | 0;
    return new SlotReader(this);
  };
  protoOf(SlotTable).xz = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.ly_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      var message = 'Cannot start a writer when another writer is pending';
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.ky_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      var message_0 = 'Cannot start a writer when a reader is pending';
      composeRuntimeError(toString(message_0));
    }
    this.ly_1 = true;
    this.my_1 = this.my_1 + 1 | 0;
    return new SlotWriter(this);
  };
  protoOf(SlotTable).r10 = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.ly_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var message = 'use active SlotWriter to create an anchor location instead ';
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= index ? index < this.hy_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var message_0 = 'Parameter index is out of range';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var this_0 = this.ny_1;
    var effectiveSize = this.hy_1;
    var location = search$accessor$mbvawc(this_0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var anchor = new Anchor(index);
      this_0.t1(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = this_0.k(location);
    }
    return tmp;
  };
  protoOf(SlotTable).h12 = function (anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.ly_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      var message = 'Use active SlotWriter to determine anchor location instead';
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!anchor.u17()) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      var message_0 = 'Anchor refers to a group that was removed';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    return anchor.j13_1;
  };
  protoOf(SlotTable).y18 = function (anchor) {
    var tmp;
    if (anchor.u17()) {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.ownsAnchor.<anonymous>' call
      var it = search$accessor$mbvawc(this.ny_1, anchor.j13_1, this.hy_1);
      tmp = it >= 0 ? equals(this.ny_1.k(it), anchor) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).y17 = function (groupIndex, anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.ly_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      var message = 'Writer is active';
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(0 <= groupIndex ? groupIndex < this.hy_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      var message_0 = 'Invalid group index';
      composeRuntimeError(toString(message_0));
    }
    var tmp;
    if (this.y18(anchor)) {
      var containsUpper = groupIndex + groupSize(this.gy_1, groupIndex) | 0;
      var containsArg = anchor.j13_1;
      tmp = groupIndex <= containsArg ? containsArg < containsUpper : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).p1g = function (reader) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(reader.zy_1 === this ? this.ky_1 > 0 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      var message = 'Unexpected reader close()';
      composeRuntimeError(toString(message));
    }
    this.ky_1 = this.ky_1 - 1 | 0;
  };
  protoOf(SlotTable).k1g = function (writer, groups, groupsSize, slots, slotsSize, anchors) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(writer.at_1 === this ? this.ly_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      var message = 'Unexpected writer close()';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.ly_1 = false;
    this.n1g(groups, groupsSize, slots, slotsSize, anchors);
  };
  protoOf(SlotTable).n1g = function (groups, groupsSize, slots, slotsSize, anchors) {
    this.gy_1 = groups;
    this.hy_1 = groupsSize;
    this.iy_1 = slots;
    this.jy_1 = slotsSize;
    this.ny_1 = anchors;
  };
  protoOf(SlotTable).x12 = function () {
    return this.hy_1 > 0 ? containsMark(this.gy_1, 0) : false;
  };
  protoOf(SlotTable).o1b = function (group, slotIndex) {
    var start = slotAnchor(this.gy_1, group);
    var end = (group + 1 | 0) < this.hy_1 ? dataAnchor(this.gy_1, group + 1 | 0) : this.iy_1.length;
    var len = end - start | 0;
    var tmp;
    if (0 <= slotIndex ? slotIndex < len : false) {
      return this.iy_1[start + slotIndex | 0];
    } else {
      tmp = Companion_getInstance_0().gu_1;
    }
    return tmp;
  };
  protoOf(SlotTable).l = function () {
    return new GroupIterator(this, 0, this.hy_1);
  };
  function isNode(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 1073741824) === 0);
  }
  function nodeCount(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 1 | 0] & 67108863;
  }
  function key(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5)];
  }
  function hasObjectKey(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 536870912) === 0);
  }
  function objectKeyIndex(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.objectKeyIndex.<anonymous>' call
    var slot = imul(address, 5);
    return _this__u8e3s4[slot + 4 | 0] + countOneBits_0(_this__u8e3s4[slot + 1 | 0] >> 30) | 0;
  }
  function groupSize(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 3 | 0];
  }
  function hasAux(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 268435456) === 0);
  }
  function addAux(_this__u8e3s4, address) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 268435456;
  }
  function initGroup(_this__u8e3s4, address, key, isNode, hasDataKey, hasData, parentAnchor, dataAnchor) {
    var nodeBit = isNode ? 1073741824 : 0;
    var dataKeyBit = hasDataKey ? 536870912 : 0;
    var dataBit = hasData ? 268435456 : 0;
    var arrayIndex = imul(address, 5);
    _this__u8e3s4[arrayIndex + 0 | 0] = key;
    _this__u8e3s4[arrayIndex + 1 | 0] = nodeBit | dataKeyBit | dataBit;
    _this__u8e3s4[arrayIndex + 2 | 0] = parentAnchor;
    _this__u8e3s4[arrayIndex + 3 | 0] = 0;
    _this__u8e3s4[arrayIndex + 4 | 0] = dataAnchor;
  }
  function updateGroupSize(_this__u8e3s4, address, value) {
    runtimeCheck(value >= 0);
    _this__u8e3s4[imul(address, 5) + 3 | 0] = value;
  }
  function updateNodeCount_0(_this__u8e3s4, address, value) {
    runtimeCheck(value >= 0 ? value < 67108863 : false);
    _this__u8e3s4[imul(address, 5) + 1 | 0] = _this__u8e3s4[imul(address, 5) + 1 | 0] & -67108864 | value;
  }
  function PrioritySet(list) {
    var tmp;
    if (list === VOID) {
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp = ArrayList_init_$Create$();
    } else {
      tmp = list;
    }
    list = tmp;
    this.c1g_1 = list;
  }
  protoOf(PrioritySet).e1g = function (value) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.c1g_1.q()) {
      tmp = this.c1g_1.k(0) === value ? true : this.c1g_1.k(this.c1g_1.j() - 1 | 0) === value;
    } else {
      tmp = false;
    }
    if (tmp)
      return Unit_instance;
    var index = this.c1g_1.j();
    this.c1g_1.u(value);
    $l$loop: while (index > 0) {
      var parent = ((index + 1 | 0) >>> 1 | 0) - 1 | 0;
      var parentValue = this.c1g_1.k(parent);
      if (value > parentValue) {
        this.c1g_1.t(index, parentValue);
      } else
        break $l$loop;
      index = parent;
    }
    this.c1g_1.t(index, value);
  };
  protoOf(PrioritySet).q12 = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.c1g_1.q();
  };
  protoOf(PrioritySet).l15 = function () {
    return first(this.c1g_1);
  };
  protoOf(PrioritySet).d1g = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.c1g_1.j() > 0)) {
      // Inline function 'androidx.compose.runtime.PrioritySet.takeMax.<anonymous>' call
      var message = 'Set is empty';
      composeRuntimeError(toString(message));
    }
    var value = this.c1g_1.k(0);
    $l$loop: while (true) {
      var tmp;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!this.c1g_1.q()) {
        tmp = this.c1g_1.k(0) === value;
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      this.c1g_1.t(0, last(this.c1g_1));
      this.c1g_1.g1(this.c1g_1.j() - 1 | 0);
      var index = 0;
      var size = this.c1g_1.j();
      var max = this.c1g_1.j() >>> 1 | 0;
      $l$loop_2: while (index < max) {
        var indexValue = this.c1g_1.k(index);
        var left = imul(index + 1 | 0, 2) - 1 | 0;
        var leftValue = this.c1g_1.k(left);
        var right = imul(index + 1 | 0, 2);
        if (right < size) {
          var rightValue = this.c1g_1.k(right);
          if (rightValue > leftValue) {
            if (rightValue > indexValue) {
              this.c1g_1.t(index, rightValue);
              this.c1g_1.t(right, indexValue);
              index = right;
              continue $l$loop_2;
            } else
              break $l$loop_2;
          }
        }
        if (leftValue > indexValue) {
          this.c1g_1.t(index, leftValue);
          this.c1g_1.t(left, indexValue);
          index = left;
        } else
          break $l$loop_2;
      }
    }
    return value;
  };
  function updateParentAnchor(_this__u8e3s4, address, value) {
    _this__u8e3s4[imul(address, 5) + 2 | 0] = value;
  }
  function parentAnchor(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 2 | 0];
  }
  function updateDataAnchor(_this__u8e3s4, address, anchor) {
    _this__u8e3s4[imul(address, 5) + 4 | 0] = anchor;
  }
  function locationOf(_this__u8e3s4, index, effectiveSize) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.locationOf.<anonymous>' call
    var it = search$accessor$mbvawc(_this__u8e3s4, index, effectiveSize);
    return it >= 0 ? it : -(it + 1 | 0) | 0;
  }
  function dataAnchor(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 4 | 0];
  }
  function hasMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 134217728) === 0);
  }
  function updateMark(_this__u8e3s4, address, value) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    if (value) {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 134217728;
    } else {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] & -134217729;
    }
  }
  function containsMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 67108864) === 0);
  }
  function containsAnyMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 201326592) === 0);
  }
  function updateContainsMark_0(_this__u8e3s4, address, value) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    if (value) {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 67108864;
    } else {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] & -67108865;
    }
  }
  function slotAnchor(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.slotAnchor.<anonymous>' call
    var slot = imul(address, 5);
    return _this__u8e3s4[slot + 4 | 0] + countOneBits_0(_this__u8e3s4[slot + 1 | 0] >> 28) | 0;
  }
  function countOneBits_0(value) {
    switch (value) {
      case 0:
        return 0;
      case 1:
        return 1;
      case 2:
        return 1;
      case 3:
        return 2;
      case 4:
        return 1;
      case 5:
        return 2;
      case 6:
        return 2;
      default:
        return 3;
    }
  }
  function groupInfo(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 1 | 0];
  }
  function node(_this__u8e3s4, $this, index) {
    var tmp;
    if (isNode(_this__u8e3s4, index)) {
      tmp = $this.cz_1[nodeIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance_0().gu_1;
    }
    return tmp;
  }
  function aux(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasAux(_this__u8e3s4, index)) {
      tmp = $this.cz_1[auxIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance_0().gu_1;
    }
    return tmp;
  }
  function objectKey(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasObjectKey(_this__u8e3s4, index)) {
      tmp = $this.cz_1[objectKeyIndex(_this__u8e3s4, index)];
    } else {
      tmp = null;
    }
    return tmp;
  }
  function SlotReader(table) {
    this.zy_1 = table;
    this.az_1 = this.zy_1.gy_1;
    this.bz_1 = this.zy_1.hy_1;
    this.cz_1 = this.zy_1.iy_1;
    this.dz_1 = this.zy_1.jy_1;
    this.ez_1 = false;
    this.fz_1 = 0;
    this.gz_1 = this.bz_1;
    this.hz_1 = -1;
    this.iz_1 = 0;
    this.jz_1 = 0;
    this.kz_1 = 0;
  }
  protoOf(SlotReader).j = function () {
    return this.bz_1;
  };
  protoOf(SlotReader).vz = function (index) {
    return parentAnchor(this.az_1, index);
  };
  protoOf(SlotReader).w13 = function () {
    return isNode(this.az_1, this.fz_1);
  };
  protoOf(SlotReader).x11 = function (index) {
    return isNode(this.az_1, index);
  };
  protoOf(SlotReader).y11 = function (index) {
    return nodeCount(this.az_1, index);
  };
  protoOf(SlotReader).p12 = function (index) {
    return isNode(this.az_1, index) ? node(this.az_1, this, index) : null;
  };
  protoOf(SlotReader).j11 = function () {
    return this.o11() ? true : this.fz_1 === this.gz_1;
  };
  protoOf(SlotReader).o11 = function () {
    return this.iz_1 > 0;
  };
  protoOf(SlotReader).r12 = function () {
    return groupSize(this.az_1, this.fz_1);
  };
  protoOf(SlotReader).f11 = function (index) {
    return groupSize(this.az_1, index);
  };
  protoOf(SlotReader).i11 = function () {
    return this.gz_1;
  };
  protoOf(SlotReader).m10 = function () {
    var tmp;
    if (this.fz_1 < this.gz_1) {
      tmp = key(this.az_1, this.fz_1);
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(SlotReader).uz = function (index) {
    return key(this.az_1, index);
  };
  protoOf(SlotReader).m15 = function () {
    return this.jz_1 - slotAnchor(this.az_1, this.hz_1) | 0;
  };
  protoOf(SlotReader).z11 = function (index) {
    return hasObjectKey(this.az_1, index);
  };
  protoOf(SlotReader).o10 = function () {
    return this.fz_1 < this.gz_1 ? objectKey(this.az_1, this, this.fz_1) : null;
  };
  protoOf(SlotReader).tz = function (index) {
    return objectKey(this.az_1, this, index);
  };
  protoOf(SlotReader).yz = function () {
    return this.fz_1 < this.gz_1 ? aux(this.az_1, this, this.fz_1) : 0;
  };
  protoOf(SlotReader).sz = function (index) {
    return aux(this.az_1, this, index);
  };
  protoOf(SlotReader).k14 = function (index) {
    return hasMark(this.az_1, index);
  };
  protoOf(SlotReader).y13 = function (index) {
    return containsMark(this.az_1, index);
  };
  protoOf(SlotReader).a12 = function () {
    return this.hz_1 >= 0 ? nodeCount(this.az_1, this.hz_1) : 0;
  };
  protoOf(SlotReader).n15 = function (index) {
    return this.z13(this.fz_1, index);
  };
  protoOf(SlotReader).z13 = function (group, index) {
    var start = slotAnchor(this.az_1, group);
    var next = group + 1 | 0;
    var end = next < this.bz_1 ? dataAnchor(this.az_1, next) : this.dz_1;
    var address = start + index | 0;
    return address < end ? this.cz_1[address] : Companion_getInstance_0().gu_1;
  };
  protoOf(SlotReader).z = function () {
    if (this.iz_1 > 0 ? true : this.jz_1 >= this.kz_1)
      return Companion_getInstance_0().gu_1;
    var tmp1 = this.jz_1;
    this.jz_1 = tmp1 + 1 | 0;
    return this.cz_1[tmp1];
  };
  protoOf(SlotReader).a10 = function () {
    this.iz_1 = this.iz_1 + 1 | 0;
  };
  protoOf(SlotReader).l11 = function () {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.iz_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.endEmpty.<anonymous>' call
      var message = 'Unbalanced begin/end empty';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.iz_1 = this.iz_1 - 1 | 0;
  };
  protoOf(SlotReader).lz = function () {
    this.ez_1 = true;
    this.zy_1.p1g(this);
  };
  protoOf(SlotReader).zz = function () {
    if (this.iz_1 <= 0) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(parentAnchor(this.az_1, this.fz_1) === this.hz_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.startGroup.<anonymous>' call
        var message = 'Invalid slot table detected';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      this.hz_1 = this.fz_1;
      this.gz_1 = this.fz_1 + groupSize(this.az_1, this.fz_1) | 0;
      var tmp1 = this.fz_1;
      this.fz_1 = tmp1 + 1 | 0;
      var current = tmp1;
      this.jz_1 = slotAnchor(this.az_1, current);
      this.kz_1 = current >= (this.bz_1 - 1 | 0) ? this.dz_1 : dataAnchor(this.az_1, current + 1 | 0);
    }
  };
  protoOf(SlotReader).yu = function () {
    if (this.iz_1 <= 0) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!isNode(this.az_1, this.fz_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.startNode.<anonymous>' call
        var message = 'Expected a node group';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      this.zz();
    }
  };
  protoOf(SlotReader).rz = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.iz_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.skipGroup.<anonymous>' call
      var message = 'Cannot skip while in an empty region';
      composeRuntimeError(toString(message));
    }
    var count = isNode(this.az_1, this.fz_1) ? 1 : nodeCount(this.az_1, this.fz_1);
    this.fz_1 = this.fz_1 + groupSize(this.az_1, this.fz_1) | 0;
    return count;
  };
  protoOf(SlotReader).xu = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.iz_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.skipToGroupEnd.<anonymous>' call
      var message = 'Cannot skip the enclosing group while in an empty region';
      composeRuntimeError(toString(message));
    }
    this.fz_1 = this.gz_1;
  };
  protoOf(SlotReader).a11 = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.iz_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.reposition.<anonymous>' call
      var message = 'Cannot reposition while in an empty region';
      composeRuntimeError(toString(message));
    }
    this.fz_1 = index;
    var parent = index < this.bz_1 ? parentAnchor(this.az_1, index) : -1;
    this.hz_1 = parent;
    if (parent < 0)
      this.gz_1 = this.bz_1;
    else
      this.gz_1 = parent + groupSize(this.az_1, parent) | 0;
    this.jz_1 = 0;
    this.kz_1 = 0;
  };
  protoOf(SlotReader).u11 = function (index) {
    var newCurrentEnd = index + groupSize(this.az_1, index) | 0;
    var current = this.fz_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(current >= index ? current <= newCurrentEnd : false)) {
      // Inline function 'androidx.compose.runtime.SlotReader.restoreParent.<anonymous>' call
      var message = 'Index ' + index + ' is not a parent of ' + current;
      composeRuntimeError(toString(message));
    }
    this.hz_1 = index;
    this.gz_1 = newCurrentEnd;
    this.jz_1 = 0;
    this.kz_1 = 0;
  };
  protoOf(SlotReader).k11 = function () {
    if (this.iz_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(this.fz_1 === this.gz_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.endGroup.<anonymous>' call
        var message = 'endGroup() not called at the end of a group';
        composeRuntimeError(toString(message));
      }
      var parent = parentAnchor(this.az_1, this.hz_1);
      this.hz_1 = parent;
      this.gz_1 = parent < 0 ? this.bz_1 : parent + groupSize(this.az_1, parent) | 0;
    }
  };
  protoOf(SlotReader).n10 = function () {
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    if (this.iz_1 > 0)
      return result;
    var index = 0;
    var childIndex = this.fz_1;
    while (childIndex < this.gz_1) {
      var tmp = key(this.az_1, childIndex);
      var tmp_0 = objectKey(this.az_1, this, childIndex);
      var tmp_1 = childIndex;
      var tmp_2 = isNode(this.az_1, childIndex) ? 1 : nodeCount(this.az_1, childIndex);
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      result.u(new KeyInfo(tmp, tmp_0, tmp_1, tmp_2, tmp0));
      childIndex = childIndex + groupSize(this.az_1, childIndex) | 0;
    }
    return result;
  };
  protoOf(SlotReader).toString = function () {
    return 'SlotReader(current=' + this.fz_1 + ', key=' + this.m10() + ', ' + ('parent=' + this.hz_1 + ', end=' + this.gz_1 + ')');
  };
  protoOf(SlotReader).r10 = function (index) {
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var this_0 = this.zy_1.ny_1;
    var effectiveSize = this.bz_1;
    var location = search$accessor$mbvawc(this_0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotReader.anchor.<anonymous>' call
      var anchor = new Anchor(index);
      this_0.t1(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = this_0.k(location);
    }
    return tmp;
  };
  function search(_this__u8e3s4, location, effectiveSize) {
    var low = 0;
    var high = _this__u8e3s4.j() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.search.<anonymous>' call
      var it = _this__u8e3s4.k(mid).j13_1;
      var midVal = it < 0 ? effectiveSize + it | 0 : it;
      var cmp = compareTo(midVal, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function nodeIndex_0(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 4 | 0];
  }
  function auxIndex_0(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.auxIndex.<anonymous>' call
    var slot = imul(address, 5);
    return slot >= _this__u8e3s4.length ? _this__u8e3s4.length : _this__u8e3s4[slot + 4 | 0] + countOneBits_0(_this__u8e3s4[slot + 1 | 0] >> 29) | 0;
  }
  function validateRead($this) {
    if (!($this.q1g_1.my_1 === $this.t1g_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function GroupIterator(table, start, end) {
    this.q1g_1 = table;
    this.r1g_1 = end;
    this.s1g_1 = start;
    this.t1g_1 = this.q1g_1.my_1;
    if (this.q1g_1.ly_1)
      throw ConcurrentModificationException_init_$Create$();
  }
  protoOf(GroupIterator).x = function () {
    return this.s1g_1 < this.r1g_1;
  };
  protoOf(GroupIterator).z = function () {
    validateRead(this);
    var group = this.s1g_1;
    this.s1g_1 = this.s1g_1 + groupSize(this.q1g_1.gy_1, group) | 0;
    return new SlotTableGroup(this.q1g_1, group, this.t1g_1);
  };
  function validateRead_0($this) {
    if (!($this.u1g_1.my_1 === $this.w1g_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function SlotTableGroup(table, group, version) {
    version = version === VOID ? table.my_1 : version;
    this.u1g_1 = table;
    this.v1g_1 = group;
    this.w1g_1 = version;
  }
  protoOf(SlotTableGroup).l = function () {
    validateRead_0(this);
    return new GroupIterator(this.u1g_1, this.v1g_1 + 1 | 0, this.v1g_1 + groupSize(this.u1g_1.gy_1, this.v1g_1) | 0);
  };
  function KeyInfo(key, objectKey, location, nodes, index) {
    this.s10_1 = key;
    this.t10_1 = objectKey;
    this.u10_1 = location;
    this.v10_1 = nodes;
    this.w10_1 = index;
  }
  function search$accessor$mbvawc(_this__u8e3s4, location, effectiveSize) {
    return search(_this__u8e3s4, location, effectiveSize);
  }
  function SnapshotMutationPolicy() {
  }
  function structuralEqualityPolicy() {
    var tmp = StructuralEqualityPolicy_instance;
    return isInterface(tmp, SnapshotMutationPolicy) ? tmp : THROW_CCE();
  }
  function StructuralEqualityPolicy() {
  }
  protoOf(StructuralEqualityPolicy).y1g = function (a, b) {
    return equals(a, b);
  };
  protoOf(StructuralEqualityPolicy).v1b = function (a, b) {
    var tmp = (a == null ? true : !(a == null)) ? a : THROW_CCE();
    return this.y1g(tmp, (b == null ? true : !(b == null)) ? b : THROW_CCE());
  };
  protoOf(StructuralEqualityPolicy).toString = function () {
    return 'StructuralEqualityPolicy';
  };
  var StructuralEqualityPolicy_instance;
  function StructuralEqualityPolicy_getInstance() {
    return StructuralEqualityPolicy_instance;
  }
  function mutableStateOf(value, policy) {
    policy = policy === VOID ? structuralEqualityPolicy() : policy;
    return createSnapshotMutableState(value, policy);
  }
  function StateStateRecord(myValue) {
    StateRecord.call(this);
    this.c1h_1 = myValue;
  }
  protoOf(StateStateRecord).d1h = function (value) {
    var tmp = this;
    tmp.c1h_1 = (value instanceof StateStateRecord ? value : THROW_CCE()).c1h_1;
  };
  protoOf(StateStateRecord).e1h = function () {
    return new StateStateRecord(this.c1h_1);
  };
  function SnapshotMutableStateImpl(value, policy) {
    this.f1h_1 = policy;
    this.g1h_1 = new StateStateRecord(value);
  }
  protoOf(SnapshotMutableStateImpl).y19 = function () {
    return this.f1h_1;
  };
  protoOf(SnapshotMutableStateImpl).up = function (value) {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = this.g1h_1;
    var it = current(this_0);
    var tmp;
    if (!this.y19().v1b(it.c1h_1, value)) {
      // Inline function 'androidx.compose.runtime.snapshots.overwritable' call
      var this_1 = this.g1h_1;
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      snapshot = Companion_instance_10.tr();
      overwritableRecord(this_1, this, snapshot, it).c1h_1 = value;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(SnapshotMutableStateImpl).m2 = function () {
    return readable_0(this.g1h_1, this).c1h_1;
  };
  protoOf(SnapshotMutableStateImpl).h1h = function () {
    return this.g1h_1;
  };
  protoOf(SnapshotMutableStateImpl).i1h = function (value) {
    var tmp = this;
    tmp.g1h_1 = value instanceof StateStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotMutableStateImpl).j1h = function (previous, current, applied) {
    var previousRecord = previous instanceof StateStateRecord ? previous : THROW_CCE();
    var currentRecord = current instanceof StateStateRecord ? current : THROW_CCE();
    var appliedRecord = applied instanceof StateStateRecord ? applied : THROW_CCE();
    var tmp;
    if (this.y19().v1b(currentRecord.c1h_1, appliedRecord.c1h_1)) {
      tmp = current;
    } else {
      var merged = this.y19().x1g(previousRecord.c1h_1, currentRecord.c1h_1, appliedRecord.c1h_1);
      var tmp_0;
      if (!(merged == null)) {
        // Inline function 'kotlin.also' call
        var this_0 = appliedRecord.e1h();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.mergeRecords.<anonymous>' call
        (this_0 instanceof StateStateRecord ? this_0 : THROW_CCE()).c1h_1 = merged;
        tmp_0 = this_0;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SnapshotMutableStateImpl).toString = function () {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = this.g1h_1;
    // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.toString.<anonymous>' call
    return 'MutableState(value=' + current(this_0).c1h_1 + ')@' + hashCode(this);
  };
  function mutableStateListOf() {
    return new SnapshotStateList();
  }
  function SnapshotThreadLocal() {
    this.z19_1 = new AtomicReference(get_emptyThreadMap());
    this.a1a_1 = new SynchronizedObject();
  }
  protoOf(SnapshotThreadLocal).kl = function () {
    var tmp = this.z19_1.kl().n1h(getCurrentThreadId());
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SnapshotThreadLocal).b1a = function (value) {
    var key = getCurrentThreadId();
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.a1a_1;
    var current = this.z19_1.kl();
    if (current.o1h(key, value))
      return Unit_instance;
    this.z19_1.w17(current.p1h(key, value));
  };
  function IntStack() {
    this.sy_1 = new Int32Array(10);
    this.ty_1 = 0;
  }
  protoOf(IntStack).j = function () {
    return this.ty_1;
  };
  protoOf(IntStack).uy = function (value) {
    if (this.ty_1 >= this.sy_1.length) {
      this.sy_1 = copyOf(this.sy_1, imul(this.sy_1.length, 2));
    }
    var tmp = this.sy_1;
    var tmp1 = this.ty_1;
    this.ty_1 = tmp1 + 1 | 0;
    tmp[tmp1] = value;
  };
  protoOf(IntStack).c11 = function () {
    var tmp = this.sy_1;
    this.ty_1 = this.ty_1 - 1 | 0;
    return tmp[this.ty_1];
  };
  protoOf(IntStack).y12 = function (default_0) {
    return this.ty_1 > 0 ? this.l15() : default_0;
  };
  protoOf(IntStack).l15 = function () {
    return this.sy_1[this.ty_1 - 1 | 0];
  };
  protoOf(IntStack).w11 = function (index) {
    return this.sy_1[index];
  };
  protoOf(IntStack).q = function () {
    return this.ty_1 === 0;
  };
  protoOf(IntStack).b1 = function () {
    this.ty_1 = 0;
  };
  protoOf(IntStack).i1g = function (value) {
    var inductionVariable = 0;
    var last = this.ty_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.sy_1[i] === value)
          return i;
      }
       while (inductionVariable < last);
    return -1;
  };
  function Stack() {
    this.mz_1 = ArrayList_init_$Create$();
  }
  protoOf(Stack).j = function () {
    return this.mz_1.j();
  };
  protoOf(Stack).b11 = function (value) {
    return this.mz_1.u(value);
  };
  protoOf(Stack).c11 = function () {
    return this.mz_1.g1(this.j() - 1 | 0);
  };
  protoOf(Stack).l15 = function () {
    return this.mz_1.k(this.j() - 1 | 0);
  };
  protoOf(Stack).w11 = function (index) {
    return this.mz_1.k(index);
  };
  protoOf(Stack).q = function () {
    return this.mz_1.q();
  };
  protoOf(Stack).q12 = function () {
    return !this.q();
  };
  protoOf(Stack).b1 = function () {
    return this.mz_1.b1();
  };
  protoOf(Stack).c3 = function () {
    var tmp = 0;
    var tmp_0 = this.mz_1.j();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = this.mz_1.k(tmp_2);
      tmp = tmp + 1 | 0;
    }
    var tmp_3 = tmp_1;
    return isArray(tmp_3) ? tmp_3 : THROW_CCE();
  };
  function SynchronizedObject() {
  }
  function createSynchronizedObject() {
    return new SynchronizedObject();
  }
  function _get_current__qcrdxk($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.x19_1;
    current$factory();
    return this_0.m2();
  }
  function LazyValueHolder(valueProducer) {
    this.x19_1 = lazy(valueProducer);
  }
  protoOf(LazyValueHolder).m2 = function () {
    return _get_current__qcrdxk(this);
  };
  function StaticValueHolder(value) {
    this.q1h_1 = value;
  }
  protoOf(StaticValueHolder).m2 = function () {
    return this.q1h_1;
  };
  protoOf(StaticValueHolder).toString = function () {
    return 'StaticValueHolder(value=' + this.q1h_1 + ')';
  };
  protoOf(StaticValueHolder).hashCode = function () {
    return this.q1h_1 == null ? 0 : hashCode(this.q1h_1);
  };
  protoOf(StaticValueHolder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StaticValueHolder))
      return false;
    var tmp0_other_with_cast = other instanceof StaticValueHolder ? other : THROW_CCE();
    if (!equals(this.q1h_1, tmp0_other_with_cast.q1h_1))
      return false;
    return true;
  };
  function current$factory() {
    return getPropertyCallableRef('current', 1, KProperty1, function (receiver) {
      return _get_current__qcrdxk(receiver);
    }, null);
  }
  function find($this, key) {
    var low = 0;
    var high = $this.p1b_1 - 1 | 0;
    var valueIdentity = identityHashCode(key);
    var keys = $this.q1b_1;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = keys[mid];
      var midIdentity = identityHashCode(midVal);
      if (midIdentity < valueIdentity)
        low = mid + 1 | 0;
      else if (midIdentity > valueIdentity)
        high = mid - 1 | 0;
      else if (midVal === key)
        return mid;
      else
        return findExactIndex($this, mid, key, valueIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex($this, midIndex, value, valueHash) {
    var keys = $this.q1b_1;
    var size = $this.p1b_1;
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var v = keys[i];
        if (v === value) {
          return i;
        }
        if (!(identityHashCode(v) === valueHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var v_0 = keys[i_0];
        if (v_0 === value) {
          return i_0;
        }
        if (!(identityHashCode(v_0) === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < size);
    return -(size + 1 | 0) | 0;
  }
  function IdentityArrayIntMap() {
    this.p1b_1 = 0;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.q1b_1 = fillArrayVal(Array(4), null);
    this.r1b_1 = new Int32Array(4);
  }
  protoOf(IdentityArrayIntMap).t1b = function (key, value) {
    var values = this.r1b_1;
    var index;
    if (this.p1b_1 > 0) {
      index = find(this, key);
      if (index >= 0) {
        var previousValue = values[index];
        values[index] = value;
        return previousValue;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    var keys = this.q1b_1;
    var size = this.p1b_1;
    if (size === keys.length) {
      // Inline function 'kotlin.arrayOfNulls' call
      var size_0 = imul(keys.length, 2);
      var newKeys = fillArrayVal(Array(size_0), null);
      var newValues = new Int32Array(imul(keys.length, 2));
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = insertIndex + 1 | 0;
      arrayCopy(keys, newKeys, destinationOffset, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_0 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = values;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, newValues, destinationOffset_0, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      arrayCopy(keys, newKeys, 0, 0, insertIndex);
      // Inline function 'kotlin.collections.copyInto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = values;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, newValues, 0, 0, insertIndex);
      this.q1b_1 = newKeys;
      this.r1b_1 = newValues;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_1 = insertIndex + 1 | 0;
      arrayCopy(keys, keys, destinationOffset_1, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_2 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = values;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_1, values, destinationOffset_2, insertIndex, size);
    }
    this.q1b_1[insertIndex] = key;
    this.r1b_1[insertIndex] = value;
    this.p1b_1 = this.p1b_1 + 1 | 0;
    return -1;
  };
  function find_0($this, key) {
    var keyIdentity = identityHashCode(key);
    var low = 0;
    var high = $this.i13_1 - 1 | 0;
    var keys = $this.g13_1;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midKey = keys[mid];
      var midKeyHash = identityHashCode(midKey);
      if (midKeyHash < keyIdentity)
        low = mid + 1 | 0;
      else if (midKeyHash > keyIdentity)
        high = mid - 1 | 0;
      else if (key === midKey)
        return mid;
      else
        return findExactIndex_0($this, mid, key, keyIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_0($this, midIndex, key, keyHash) {
    var keys = $this.g13_1;
    var size = $this.i13_1;
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var k = keys[i];
        if (k === key) {
          return i;
        }
        if (!(identityHashCode(k) === keyHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var k_0 = keys[i_0];
        if (k_0 === key) {
          return i_0;
        }
        if (!(identityHashCode(k_0) === keyHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < size);
    return -(size + 1 | 0) | 0;
  }
  function IdentityArrayMap(capacity) {
    capacity = capacity === VOID ? 16 : capacity;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.g13_1 = fillArrayVal(Array(capacity), null);
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.h13_1 = fillArrayVal(Array(capacity), null);
    this.i13_1 = 0;
  }
  protoOf(IdentityArrayMap).q12 = function () {
    return this.i13_1 > 0;
  };
  protoOf(IdentityArrayMap).h19 = function (key) {
    return find_0(this, key) >= 0;
  };
  protoOf(IdentityArrayMap).g19 = function (key) {
    var index = find_0(this, key);
    var tmp;
    if (index >= 0) {
      var tmp_0 = this.h13_1[index];
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(IdentityArrayMap).z17 = function (key, value) {
    var keys = this.g13_1;
    var values = this.h13_1;
    var size = this.i13_1;
    var index = find_0(this, key);
    if (index >= 0) {
      values[index] = value;
    } else {
      var insertIndex = -(index + 1 | 0) | 0;
      var resize = size === keys.length;
      var tmp;
      if (resize) {
        // Inline function 'kotlin.arrayOfNulls' call
        var size_0 = imul(size, 2);
        tmp = fillArrayVal(Array(size_0), null);
      } else {
        tmp = keys;
      }
      var destKeys = tmp;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = insertIndex + 1 | 0;
      arrayCopy(keys, destKeys, destinationOffset, insertIndex, size);
      if (resize) {
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(keys, destKeys, 0, 0, insertIndex);
      }
      destKeys[insertIndex] = key;
      this.g13_1 = destKeys;
      var tmp_0;
      if (resize) {
        // Inline function 'kotlin.arrayOfNulls' call
        var size_1 = imul(size, 2);
        tmp_0 = fillArrayVal(Array(size_1), null);
      } else {
        tmp_0 = values;
      }
      var destValues = tmp_0;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_0 = insertIndex + 1 | 0;
      arrayCopy(values, destValues, destinationOffset_0, insertIndex, size);
      if (resize) {
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(values, destValues, 0, 0, insertIndex);
      }
      destValues[insertIndex] = value;
      this.h13_1 = destValues;
      this.i13_1 = this.i13_1 + 1 | 0;
    }
  };
  protoOf(IdentityArrayMap).s1b = function (key) {
    var index = find_0(this, key);
    if (index >= 0) {
      var value = this.h13_1[index];
      var size = this.i13_1;
      var keys = this.g13_1;
      var values = this.h13_1;
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = index + 1 | 0;
      arrayCopy(keys, keys, index, startIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex_0 = index + 1 | 0;
      arrayCopy(values, values, index, startIndex_0, size);
      var newSize = size - 1 | 0;
      keys[newSize] = null;
      values[newSize] = null;
      this.i13_1 = newSize;
      return (value == null ? true : !(value == null)) ? value : THROW_CCE();
    }
    return null;
  };
  function find_1($this, value) {
    var low = 0;
    var high = $this.m12_1 - 1 | 0;
    var valueIdentity = identityHashCode(value);
    var values = $this.n12_1;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = values[mid];
      var midIdentity = identityHashCode(midVal);
      if (midIdentity < valueIdentity)
        low = mid + 1 | 0;
      else if (midIdentity > valueIdentity)
        high = mid - 1 | 0;
      else if (midVal === value)
        return mid;
      else
        return findExactIndex_1($this, mid, value, valueIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_1($this, midIndex, value, valueHash) {
    var values = $this.n12_1;
    var size = $this.m12_1;
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var v = values[i];
        if (v === value) {
          return i;
        }
        if (!(identityHashCode(v) === valueHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var v_0 = values[i_0];
        if (v_0 === value) {
          return i_0;
        }
        if (!(identityHashCode(v_0) === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < size);
    return -(size + 1 | 0) | 0;
  }
  function IdentityArraySet$iterator$1(this$0) {
    this.s1h_1 = this$0;
    this.r1h_1 = 0;
  }
  protoOf(IdentityArraySet$iterator$1).x = function () {
    return this.r1h_1 < this.s1h_1.m12_1;
  };
  protoOf(IdentityArraySet$iterator$1).z = function () {
    var tmp = this.s1h_1.n12_1;
    var tmp1 = this.r1h_1;
    this.r1h_1 = tmp1 + 1 | 0;
    var tmp_0 = tmp[tmp1];
    return !(tmp_0 == null) ? tmp_0 : THROW_CCE();
  };
  function IdentityArraySet$toString$lambda(it) {
    return toString(it);
  }
  function IdentityArraySet() {
    this.m12_1 = 0;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.n12_1 = fillArrayVal(Array(16), null);
  }
  protoOf(IdentityArraySet).j = function () {
    return this.m12_1;
  };
  protoOf(IdentityArraySet).y1c = function (element) {
    return find_1(this, element) >= 0;
  };
  protoOf(IdentityArraySet).o = function (element) {
    if (!!(element == null))
      return false;
    return this.y1c(!(element == null) ? element : THROW_CCE());
  };
  protoOf(IdentityArraySet).b15 = function (value) {
    var index;
    var size = this.m12_1;
    var values = this.n12_1;
    if (size > 0) {
      index = find_1(this, value);
      if (index >= 0) {
        return false;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    if (size === values.length) {
      // Inline function 'kotlin.arrayOfNulls' call
      var size_0 = imul(values.length, 2);
      var newSorted = fillArrayVal(Array(size_0), null);
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = insertIndex + 1 | 0;
      arrayCopy(values, newSorted, destinationOffset, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      arrayCopy(values, newSorted, 0, 0, insertIndex);
      this.n12_1 = newSorted;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_0 = insertIndex + 1 | 0;
      arrayCopy(values, values, destinationOffset_0, insertIndex, size);
    }
    this.n12_1[insertIndex] = value;
    this.m12_1 = this.m12_1 + 1 | 0;
    return true;
  };
  protoOf(IdentityArraySet).a1d = function (collection) {
    if (collection.q())
      return Unit_instance;
    if (!(collection instanceof IdentityArraySet)) {
      var tmp0_iterator = collection.l();
      while (tmp0_iterator.x()) {
        var value = tmp0_iterator.z();
        this.b15(value);
      }
    } else {
      var thisValues = this.n12_1;
      var otherValues = collection.n12_1;
      var thisSize = this.m12_1;
      var otherSize = collection.m12_1;
      var combinedSize = thisSize + otherSize | 0;
      var needsResize = this.n12_1.length < combinedSize;
      var elementsInOrder = thisSize === 0 ? true : identityHashCode(thisValues[thisSize - 1 | 0]) < identityHashCode(otherValues[0]);
      if (!needsResize ? elementsInOrder : false) {
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(otherValues, thisValues, thisSize, 0, otherSize);
        this.m12_1 = this.m12_1 + otherSize | 0;
      } else {
        var tmp;
        if (needsResize) {
          // Inline function 'kotlin.arrayOfNulls' call
          var size = thisSize > otherSize ? imul(thisSize, 2) : imul(otherSize, 2);
          tmp = fillArrayVal(Array(size), null);
        } else {
          tmp = thisValues;
        }
        var newArray = tmp;
        var thisIndex = thisSize - 1 | 0;
        var otherIndex = otherSize - 1 | 0;
        var nextInsertIndex = combinedSize - 1 | 0;
        $l$loop_1: while (thisIndex >= 0 ? true : otherIndex >= 0) {
          var tmp_0;
          if (thisIndex < 0) {
            var tmp2 = otherIndex;
            otherIndex = tmp2 - 1 | 0;
            tmp_0 = otherValues[tmp2];
          } else if (otherIndex < 0) {
            var tmp3 = thisIndex;
            thisIndex = tmp3 - 1 | 0;
            tmp_0 = thisValues[tmp3];
          } else {
            var thisValue = thisValues[thisIndex];
            var otherValue = otherValues[otherIndex];
            var thisHash = identityHashCode(thisValue);
            var otherHash = identityHashCode(otherValue);
            var tmp_1;
            if (thisHash > otherHash) {
              thisIndex = thisIndex - 1 | 0;
              tmp_1 = thisValue;
            } else if (thisHash < otherHash) {
              otherIndex = otherIndex - 1 | 0;
              tmp_1 = otherValue;
            } else if (thisValue === otherValue) {
              thisIndex = thisIndex - 1 | 0;
              otherIndex = otherIndex - 1 | 0;
              tmp_1 = thisValue;
            } else {
              var i = thisIndex - 1 | 0;
              var foundDuplicate = false;
              $l$loop_0: while (i >= 0) {
                var tmp8 = i;
                i = tmp8 - 1 | 0;
                var value_0 = thisValues[tmp8];
                if (!(identityHashCode(value_0) === otherHash))
                  break $l$loop_0;
                if (otherValue === value_0) {
                  foundDuplicate = true;
                  break $l$loop_0;
                }
              }
              var tmp_2;
              if (foundDuplicate) {
                otherIndex = otherIndex - 1 | 0;
                continue $l$loop_1;
              } else {
                otherIndex = otherIndex - 1 | 0;
                tmp_2 = otherValue;
              }
              tmp_1 = tmp_2;
            }
            tmp_0 = tmp_1;
          }
          var nextValue = tmp_0;
          var tmp11 = nextInsertIndex;
          nextInsertIndex = tmp11 - 1 | 0;
          newArray[tmp11] = nextValue;
        }
        if (nextInsertIndex >= 0) {
          // Inline function 'kotlin.collections.copyInto' call
          var startIndex = nextInsertIndex + 1 | 0;
          arrayCopy(newArray, newArray, 0, startIndex, combinedSize);
        }
        var newSize = combinedSize - (nextInsertIndex + 1 | 0) | 0;
        fill_0(newArray, null, newSize, combinedSize);
        this.n12_1 = newArray;
        this.m12_1 = newSize;
      }
    }
  };
  protoOf(IdentityArraySet).q = function () {
    return this.m12_1 === 0;
  };
  protoOf(IdentityArraySet).q12 = function () {
    return this.m12_1 > 0;
  };
  protoOf(IdentityArraySet).t1h = function (value) {
    var index = find_1(this, value);
    var values = this.n12_1;
    var size = this.m12_1;
    if (index >= 0) {
      if (index < (size - 1 | 0)) {
        // Inline function 'kotlin.collections.copyInto' call
        var startIndex = index + 1 | 0;
        arrayCopy(values, values, index, startIndex, size);
      }
      values[size - 1 | 0] = null;
      this.m12_1 = this.m12_1 - 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(IdentityArraySet).gd = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.q();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.l();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.containsAll.<anonymous>' call
        if (!this.y1c(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(IdentityArraySet).p = function (elements) {
    return this.gd(elements);
  };
  protoOf(IdentityArraySet).l = function () {
    return new IdentityArraySet$iterator$1(this);
  };
  protoOf(IdentityArraySet).toString = function () {
    return joinToString(this, VOID, '[', ']', VOID, VOID, IdentityArraySet$toString$lambda);
  };
  function scopeSetAt($this, index) {
    return ensureNotNull($this.h17_1[$this.f17_1[index]]);
  }
  function getOrCreateIdentitySet($this, value) {
    var size = $this.i17_1;
    var valueOrder = $this.f17_1;
    var values = $this.g17_1;
    var scopeSets = $this.h17_1;
    var index;
    if (size > 0) {
      index = find_2($this, value);
      if (index >= 0) {
        return scopeSetAt($this, index);
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    if (size < valueOrder.length) {
      var valueIndex = valueOrder[size];
      values[valueIndex] = value;
      var tmp0_elvis_lhs = scopeSets[valueIndex];
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_0 = new IdentityArraySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.getOrCreateIdentitySet.<anonymous>' call
        scopeSets[valueIndex] = this_0;
        tmp = this_0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var scopeSet = tmp;
      if (insertIndex < size) {
        // Inline function 'kotlin.collections.copyInto' call
        var destinationOffset = insertIndex + 1 | 0;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = valueOrder;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_0, valueOrder, destinationOffset, insertIndex, size);
      }
      valueOrder[insertIndex] = valueIndex;
      $this.i17_1 = $this.i17_1 + 1 | 0;
      return scopeSet;
    }
    var newSize = imul(valueOrder.length, 2);
    var valueIndex_0 = size;
    var newScopeSets = copyOf_0(scopeSets, newSize);
    var scopeSet_0 = new IdentityArraySet();
    newScopeSets[valueIndex_0] = scopeSet_0;
    var newValues = copyOf_0(values, newSize);
    newValues[valueIndex_0] = value;
    var newKeyOrder = new Int32Array(newSize);
    var inductionVariable = size + 1 | 0;
    if (inductionVariable < newSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        newKeyOrder[i] = i;
      }
       while (inductionVariable < newSize);
    if (insertIndex < size) {
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_0 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = valueOrder;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_1, newKeyOrder, destinationOffset_0, insertIndex, size);
    }
    newKeyOrder[insertIndex] = valueIndex_0;
    if (insertIndex > 0) {
      // Inline function 'kotlin.collections.copyInto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_2 = valueOrder;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_2, newKeyOrder, 0, 0, insertIndex);
    }
    $this.h17_1 = newScopeSets;
    $this.g17_1 = newValues;
    $this.f17_1 = newKeyOrder;
    $this.i17_1 = $this.i17_1 + 1 | 0;
    return scopeSet_0;
  }
  function find_2($this, value) {
    var valueIdentity = identityHashCode(value);
    var low = 0;
    var high = $this.i17_1 - 1 | 0;
    var values = $this.g17_1;
    var valueOrder = $this.f17_1;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midValue = values[valueOrder[mid]];
      var midValHash = identityHashCode(midValue);
      if (midValHash < valueIdentity)
        low = mid + 1 | 0;
      else if (midValHash > valueIdentity)
        high = mid - 1 | 0;
      else if (value === midValue)
        return mid;
      else
        return findExactIndex_2($this, mid, value, valueIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_2($this, midIndex, value, valueHash) {
    var values = $this.g17_1;
    var valueOrder = $this.f17_1;
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var v = values[valueOrder[i]];
        if (v === value) {
          return i;
        }
        if (!(identityHashCode(v) === valueHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.i17_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var v_0 = values[valueOrder[i_0]];
        if (v_0 === value) {
          return i_0;
        }
        if (!(identityHashCode(v_0) === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.i17_1 + 1 | 0) | 0;
  }
  function IdentityScopeMap() {
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = new Int32Array(50);
    while (tmp_0 < 50) {
      var tmp_2 = tmp_0;
      tmp_1[tmp_2] = tmp_2;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.f17_1 = tmp_1;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_3.g17_1 = fillArrayVal(Array(50), null);
    var tmp_4 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_4.h17_1 = fillArrayVal(Array(50), null);
    this.i17_1 = 0;
  }
  protoOf(IdentityScopeMap).l17 = function (value, scope) {
    var valueSet = getOrCreateIdentitySet(this, value);
    return valueSet.b15(scope);
  };
  protoOf(IdentityScopeMap).k17 = function (element) {
    return find_2(this, element) >= 0;
  };
  protoOf(IdentityScopeMap).j17 = function (value, scope) {
    var index = find_2(this, value);
    var valueOrder = this.f17_1;
    var scopeSets = this.h17_1;
    var values = this.g17_1;
    var size = this.i17_1;
    if (index >= 0) {
      var valueOrderIndex = valueOrder[index];
      var tmp0_elvis_lhs = scopeSets[valueOrderIndex];
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var set = tmp;
      var removed = set.t1h(scope);
      if (set.m12_1 === 0) {
        var startIndex = index + 1 | 0;
        var endIndex = size;
        if (startIndex < endIndex) {
          // Inline function 'kotlin.collections.copyInto' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_0 = valueOrder;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp_0, valueOrder, index, startIndex, endIndex);
        }
        var newSize = size - 1 | 0;
        valueOrder[newSize] = valueOrderIndex;
        values[valueOrderIndex] = null;
        this.i17_1 = newSize;
      }
      return removed;
    }
    return false;
  };
  protoOf(IdentityScopeMap).m18 = function (scope) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
    var valueOrder = this.f17_1;
    var scopeSets = this.h17_1;
    var values = this.g17_1;
    var destinationIndex = 0;
    var inductionVariable = 0;
    var last = this.i17_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var valueIndex = valueOrder[i];
        var set = ensureNotNull(scopeSets[valueIndex]);
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeScope.<anonymous>' call
        set.t1h(scope);
        if (set.m12_1 > 0) {
          if (!(destinationIndex === i)) {
            var destinationKeyOrder = valueOrder[destinationIndex];
            valueOrder[destinationIndex] = valueIndex;
            valueOrder[i] = destinationKeyOrder;
          }
          destinationIndex = destinationIndex + 1 | 0;
        }
      }
       while (inductionVariable < last);
    var inductionVariable_0 = destinationIndex;
    var last_0 = this.i17_1;
    if (inductionVariable_0 < last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        values[valueOrder[i_0]] = null;
      }
       while (inductionVariable_0 < last_0);
    this.i17_1 = destinationIndex;
  };
  function MutableVector(content, size) {
    this.l13_1 = content;
    this.m13_1 = null;
    this.n13_1 = size;
    this.o13_1 = 8;
  }
  protoOf(MutableVector).p13 = function (element) {
    this.u1h(this.n13_1 + 1 | 0);
    this.l13_1[this.n13_1] = element;
    this.n13_1 = this.n13_1 + 1 | 0;
    return true;
  };
  protoOf(MutableVector).u1h = function (capacity) {
    var oldContent = this.l13_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.math.max' call
      var b = imul(oldContent.length, 2);
      var newSize = Math.max(capacity, b);
      this.l13_1 = copyOf_0(oldContent, newSize);
    }
  };
  protoOf(MutableVector).g1 = function (index) {
    var content = this.l13_1;
    var tmp = content[index];
    var item = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    if (!(index === (this.n13_1 - 1 | 0))) {
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = index + 1 | 0;
      var endIndex = this.n13_1;
      arrayCopy(content, content, index, startIndex, endIndex);
    }
    this.n13_1 = this.n13_1 - 1 | 0;
    content[this.n13_1] = null;
    return item;
  };
  function persistentSetOf() {
    return Companion_getInstance_8().w1h();
  }
  function persistentListOf() {
    return persistentVectorOf();
  }
  function AbstractListIterator(index, size) {
    this.x1h_1 = index;
    this.y1h_1 = size;
  }
  protoOf(AbstractListIterator).x = function () {
    return this.x1h_1 < this.y1h_1;
  };
  protoOf(AbstractListIterator).m1 = function () {
    return this.x1h_1 > 0;
  };
  protoOf(AbstractListIterator).n1 = function () {
    return this.x1h_1;
  };
  protoOf(AbstractListIterator).z1h = function () {
    if (!this.x())
      throw NoSuchElementException_init_$Create$();
  };
  protoOf(AbstractListIterator).a1i = function () {
    if (!this.m1())
      throw NoSuchElementException_init_$Create$();
  };
  function AbstractPersistentList() {
    AbstractList.call(this);
  }
  protoOf(AbstractPersistentList).a1 = function (elements) {
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.mutate' call
    // Inline function 'kotlin.apply' call
    var this_0 = this.wz();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.AbstractPersistentList.addAll.<anonymous>' call
    this_0.a1(elements);
    return this_0.a3();
  };
  protoOf(AbstractPersistentList).v = function (element) {
    var index = this.m(element);
    if (!(index === -1)) {
      return this.g1(index);
    }
    return this;
  };
  protoOf(AbstractPersistentList).o = function (element) {
    return !(this.m(element) === -1);
  };
  protoOf(AbstractPersistentList).p = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.q();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.l();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.AbstractPersistentList.containsAll.<anonymous>' call
        if (!this.o(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(AbstractPersistentList).l = function () {
    return this.pa();
  };
  protoOf(AbstractPersistentList).pa = function () {
    return this.n(0);
  };
  function BufferIterator(buffer, index, size) {
    AbstractListIterator.call(this, index, size);
    this.e1i_1 = buffer;
  }
  protoOf(BufferIterator).z = function () {
    if (!this.x()) {
      throw NoSuchElementException_init_$Create$();
    }
    var tmp1 = this.x1h_1;
    this.x1h_1 = tmp1 + 1 | 0;
    return this.e1i_1[tmp1];
  };
  protoOf(BufferIterator).o1 = function () {
    if (!this.m1()) {
      throw NoSuchElementException_init_$Create$();
    }
    this.x1h_1 = this.x1h_1 - 1 | 0;
    return this.e1i_1[this.x1h_1];
  };
  function rootSize($this) {
    return rootSize_1($this.h1i_1);
  }
  function pushFilledTail($this, root, filledTail, newTail) {
    if ($this.h1i_1 >> get_LOG_MAX_BUFFER_SIZE() > 1 << $this.i1i_1) {
      var newRoot = presizedBufferWith(root);
      var newRootShift = $this.i1i_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      newRoot = pushTail($this, newRoot, newRootShift, filledTail);
      return new PersistentVector(newRoot, newTail, $this.h1i_1 + 1 | 0, newRootShift);
    }
    var newRoot_0 = pushTail($this, root, $this.i1i_1, filledTail);
    return new PersistentVector(newRoot_0, newTail, $this.h1i_1 + 1 | 0, $this.i1i_1);
  }
  function pushTail($this, root, shift, tail) {
    var bufferIndex = indexSegment($this.h1i_1 - 1 | 0, shift);
    var tmp1_elvis_lhs = root == null ? null : copyOf_0(root, get_MAX_BUFFER_SIZE());
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.arrayOfNulls' call
      var size = get_MAX_BUFFER_SIZE();
      tmp = fillArrayVal(Array(size), null);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var newRootNode = tmp;
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      newRootNode[bufferIndex] = tail;
    } else {
      var tmp_0 = newRootNode[bufferIndex];
      newRootNode[bufferIndex] = pushTail($this, (tmp_0 == null ? true : isArray(tmp_0)) ? tmp_0 : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, tail);
    }
    return newRootNode;
  }
  function insertIntoTail($this, root, tailIndex, element) {
    var tailSize = $this.h1i_1 - rootSize($this) | 0;
    var newTail = copyOf_0($this.g1i_1, get_MAX_BUFFER_SIZE());
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.g1i_1;
      var destinationOffset = tailIndex + 1 | 0;
      arrayCopy(this_0, newTail, destinationOffset, tailIndex, tailSize);
      newTail[tailIndex] = element;
      return new PersistentVector(root, newTail, $this.h1i_1 + 1 | 0, $this.i1i_1);
    }
    var lastElement = $this.g1i_1[get_MAX_BUFFER_SIZE_MINUS_ONE()];
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = $this.g1i_1;
    var destinationOffset_0 = tailIndex + 1 | 0;
    var endIndex = tailSize - 1 | 0;
    arrayCopy(this_1, newTail, destinationOffset_0, tailIndex, endIndex);
    newTail[tailIndex] = element;
    return pushFilledTail($this, root, newTail, presizedBufferWith(lastElement));
  }
  function insertIntoRoot($this, root, shift, index, element, elementCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var tmp;
      if (bufferIndex === 0) {
        // Inline function 'kotlin.arrayOfNulls' call
        var size = get_MAX_BUFFER_SIZE();
        tmp = fillArrayVal(Array(size), null);
      } else {
        tmp = copyOf_0(root, get_MAX_BUFFER_SIZE());
      }
      var newRoot = tmp;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = bufferIndex + 1 | 0;
      var endIndex = get_MAX_BUFFER_SIZE_MINUS_ONE();
      arrayCopy(root, newRoot, destinationOffset, bufferIndex, endIndex);
      elementCarry.j1i_1 = root[get_MAX_BUFFER_SIZE_MINUS_ONE()];
      newRoot[bufferIndex] = element;
      return newRoot;
    }
    var newRoot_0 = copyOf_0(root, get_MAX_BUFFER_SIZE());
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var tmp_0 = root[bufferIndex];
    newRoot_0[bufferIndex] = insertIntoRoot($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, index, element, elementCarry);
    var inductionVariable = bufferIndex + 1 | 0;
    var last = get_MAX_BUFFER_SIZE();
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (newRoot_0[i] == null)
          break $l$loop;
        var tmp_1 = root[i];
        newRoot_0[i] = insertIntoRoot($this, (!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE(), lowerLevelShift, 0, elementCarry.j1i_1, elementCarry);
      }
       while (inductionVariable < last);
    return newRoot_0;
  }
  function removeFromTailAt($this, root, rootSize, shift, index) {
    var tailSize = $this.h1i_1 - rootSize | 0;
    assert(index < tailSize);
    if (tailSize === 1) {
      return pullLastBufferFromRoot($this, root, rootSize, shift);
    }
    var newTail = copyOf_0($this.g1i_1, get_MAX_BUFFER_SIZE());
    if (index < (tailSize - 1 | 0)) {
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.g1i_1;
      var startIndex = index + 1 | 0;
      arrayCopy(this_0, newTail, index, startIndex, tailSize);
    }
    newTail[tailSize - 1 | 0] = null;
    return new PersistentVector(root, newTail, (rootSize + tailSize | 0) - 1 | 0, shift);
  }
  function pullLastBufferFromRoot($this, root, rootSize, shift) {
    if (shift === 0) {
      var buffer = root.length === get_MUTABLE_BUFFER_SIZE() ? copyOf_0(root, get_MAX_BUFFER_SIZE()) : root;
      return new SmallPersistentVector(buffer);
    }
    var tailCarry = new ObjectRef(null);
    var newRoot = ensureNotNull(pullLastBuffer($this, root, shift, rootSize - 1 | 0, tailCarry));
    var tmp = tailCarry.j1i_1;
    var newTail = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    if (newRoot[1] == null) {
      var tmp_0 = newRoot[0];
      var lowerLevelRoot = (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE();
      return new PersistentVector(lowerLevelRoot, newTail, rootSize, shift - get_LOG_MAX_BUFFER_SIZE() | 0);
    }
    return new PersistentVector(newRoot, newTail, rootSize, shift);
  }
  function pullLastBuffer($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    var tmp;
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      tailCarry.j1i_1 = root[bufferIndex];
      tmp = null;
    } else {
      var tmp_0 = root[bufferIndex];
      tmp = pullLastBuffer($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, index, tailCarry);
    }
    var newBufferAtIndex = tmp;
    if (newBufferAtIndex == null ? bufferIndex === 0 : false) {
      return null;
    }
    var newRoot = copyOf_0(root, get_MAX_BUFFER_SIZE());
    newRoot[bufferIndex] = newBufferAtIndex;
    return newRoot;
  }
  function removeFromRootAt($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var tmp;
      if (bufferIndex === 0) {
        // Inline function 'kotlin.arrayOfNulls' call
        var size = get_MAX_BUFFER_SIZE();
        tmp = fillArrayVal(Array(size), null);
      } else {
        tmp = copyOf_0(root, get_MAX_BUFFER_SIZE());
      }
      var newRoot = tmp;
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = bufferIndex + 1 | 0;
      var endIndex = get_MAX_BUFFER_SIZE();
      arrayCopy(root, newRoot, bufferIndex, startIndex, endIndex);
      newRoot[get_MAX_BUFFER_SIZE() - 1 | 0] = tailCarry.j1i_1;
      tailCarry.j1i_1 = root[bufferIndex];
      return newRoot;
    }
    var bufferLastIndex = get_MAX_BUFFER_SIZE_MINUS_ONE();
    if (root[bufferLastIndex] == null) {
      bufferLastIndex = indexSegment(rootSize($this) - 1 | 0, shift);
    }
    var newRoot_0 = copyOf_0(root, get_MAX_BUFFER_SIZE());
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var inductionVariable = bufferLastIndex;
    var last = bufferIndex + 1 | 0;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp_0 = newRoot_0[i];
        newRoot_0[i] = removeFromRootAt($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, 0, tailCarry);
      }
       while (!(i === last));
    var tmp_1 = newRoot_0[bufferIndex];
    newRoot_0[bufferIndex] = removeFromRootAt($this, (!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE(), lowerLevelShift, index, tailCarry);
    return newRoot_0;
  }
  function bufferFor($this, index) {
    if (rootSize($this) <= index) {
      return $this.g1i_1;
    }
    var buffer = $this.f1i_1;
    var shift = $this.i1i_1;
    while (shift > 0) {
      var tmp = buffer[indexSegment(index, shift)];
      buffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    return buffer;
  }
  function setInRoot($this, root, shift, index, e) {
    var bufferIndex = indexSegment(index, shift);
    var newRoot = copyOf_0(root, get_MAX_BUFFER_SIZE());
    if (shift === 0) {
      newRoot[bufferIndex] = e;
    } else {
      var tmp = newRoot[bufferIndex];
      newRoot[bufferIndex] = setInRoot($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, index, e);
    }
    return newRoot;
  }
  function PersistentVector(root, tail, size, rootShift) {
    AbstractPersistentList.call(this);
    this.f1i_1 = root;
    this.g1i_1 = tail;
    this.h1i_1 = size;
    this.i1i_1 = rootShift;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.h1i_1 > get_MAX_BUFFER_SIZE())) {
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVector.<anonymous>' call
      var message = 'Trie-based persistent vector should have at least ' + (get_MAX_BUFFER_SIZE() + 1 | 0) + ' elements, got ' + this.h1i_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    assert((this.h1i_1 - rootSize_1(this.h1i_1) | 0) <= coerceAtMost(this.g1i_1.length, get_MAX_BUFFER_SIZE()));
  }
  protoOf(PersistentVector).j = function () {
    return this.h1i_1;
  };
  protoOf(PersistentVector).u = function (element) {
    var tailSize = this.h1i_1 - rootSize(this) | 0;
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      var newTail = copyOf_0(this.g1i_1, get_MAX_BUFFER_SIZE());
      newTail[tailSize] = element;
      return new PersistentVector(this.f1i_1, newTail, this.h1i_1 + 1 | 0, this.i1i_1);
    }
    var newTail_0 = presizedBufferWith(element);
    return pushFilledTail(this, this.f1i_1, this.g1i_1, newTail_0);
  };
  protoOf(PersistentVector).b1i = function (index, element) {
    ListImplementation_instance.l1(index, this.h1i_1);
    if (index === this.h1i_1) {
      return this.u(element);
    }
    var rootSize_0 = rootSize(this);
    if (index >= rootSize_0) {
      return insertIntoTail(this, this.f1i_1, index - rootSize_0 | 0, element);
    }
    var elementCarry = new ObjectRef(null);
    var newRoot = insertIntoRoot(this, this.f1i_1, this.i1i_1, index, element, elementCarry);
    return insertIntoTail(this, newRoot, 0, elementCarry.j1i_1);
  };
  protoOf(PersistentVector).g1 = function (index) {
    ListImplementation_instance.u1(index, this.h1i_1);
    var rootSize_0 = rootSize(this);
    if (index >= rootSize_0) {
      return removeFromTailAt(this, this.f1i_1, rootSize_0, this.i1i_1, index - rootSize_0 | 0);
    }
    var newRoot = removeFromRootAt(this, this.f1i_1, this.i1i_1, index, new ObjectRef(this.g1i_1[0]));
    return removeFromTailAt(this, newRoot, rootSize_0, this.i1i_1, 0);
  };
  protoOf(PersistentVector).wz = function () {
    return new PersistentVectorBuilder(this, this.f1i_1, this.g1i_1, this.i1i_1);
  };
  protoOf(PersistentVector).n = function (index) {
    ListImplementation_instance.l1(index, this.h1i_1);
    var tmp = this.g1i_1;
    return new PersistentVectorIterator(this.f1i_1, isArray(tmp) ? tmp : THROW_CCE(), index, this.h1i_1, (this.i1i_1 / get_LOG_MAX_BUFFER_SIZE() | 0) + 1 | 0);
  };
  protoOf(PersistentVector).k = function (index) {
    ListImplementation_instance.u1(index, this.h1i_1);
    var buffer = bufferFor(this, index);
    var tmp = buffer[index & get_MAX_BUFFER_SIZE_MINUS_ONE()];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVector).t = function (index, element) {
    ListImplementation_instance.u1(index, this.h1i_1);
    if (rootSize(this) <= index) {
      var newTail = copyOf_0(this.g1i_1, get_MAX_BUFFER_SIZE());
      newTail[index & get_MAX_BUFFER_SIZE_MINUS_ONE()] = element;
      return new PersistentVector(this.f1i_1, newTail, this.h1i_1, this.i1i_1);
    }
    var newRoot = setInRoot(this, this.f1i_1, this.i1i_1, index, element);
    return new PersistentVector(newRoot, this.g1i_1, this.h1i_1, this.i1i_1);
  };
  function rootSize_0($this) {
    if ($this.s1i_1 <= get_MAX_BUFFER_SIZE()) {
      return 0;
    }
    return rootSize_1($this.s1i_1);
  }
  function tailSize($this, size) {
    if (size <= get_MAX_BUFFER_SIZE()) {
      return size;
    }
    return size - rootSize_1(size) | 0;
  }
  function tailSize_0($this) {
    return tailSize($this, $this.s1i_1);
  }
  function isMutable($this, buffer) {
    return buffer.length === get_MUTABLE_BUFFER_SIZE() ? buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] === $this.p1i_1 : false;
  }
  function makeMutable($this, buffer) {
    if (buffer == null) {
      return mutableBuffer($this);
    }
    if (isMutable($this, buffer)) {
      return buffer;
    }
    // Inline function 'kotlin.collections.copyInto' call
    var destination = mutableBuffer($this);
    var endIndex = coerceAtMost(buffer.length, get_MAX_BUFFER_SIZE());
    arrayCopy(buffer, destination, 0, 0, endIndex);
    return destination;
  }
  function mutableBufferWith($this, element) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_MUTABLE_BUFFER_SIZE();
    var buffer = fillArrayVal(Array(size), null);
    buffer[0] = element;
    buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] = $this.p1i_1;
    return buffer;
  }
  function mutableBuffer($this) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_MUTABLE_BUFFER_SIZE();
    var buffer = fillArrayVal(Array(size), null);
    buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] = $this.p1i_1;
    return buffer;
  }
  function pushFilledTail_0($this, root, filledTail, newTail) {
    var tmp;
    if ($this.s1i_1 >> get_LOG_MAX_BUFFER_SIZE() > 1 << $this.o1i_1) {
      $this.q1i_1 = pushTail_0($this, mutableBufferWith($this, root), filledTail, $this.o1i_1 + get_LOG_MAX_BUFFER_SIZE() | 0);
      $this.r1i_1 = newTail;
      $this.o1i_1 = $this.o1i_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      $this.s1i_1 = $this.s1i_1 + 1 | 0;
      tmp = Unit_instance;
    } else if (root == null) {
      $this.q1i_1 = filledTail;
      $this.r1i_1 = newTail;
      $this.s1i_1 = $this.s1i_1 + 1 | 0;
      tmp = Unit_instance;
    } else {
      $this.q1i_1 = pushTail_0($this, root, filledTail, $this.o1i_1);
      $this.r1i_1 = newTail;
      $this.s1i_1 = $this.s1i_1 + 1 | 0;
      tmp = Unit_instance;
    }
    return tmp;
  }
  function pushTail_0($this, root, tail, shift) {
    var index = indexSegment($this.s1i_1 - 1 | 0, shift);
    var mutableRoot = makeMutable($this, root);
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      mutableRoot[index] = tail;
    } else {
      var tmp = mutableRoot[index];
      mutableRoot[index] = pushTail_0($this, (tmp == null ? true : isArray(tmp)) ? tmp : THROW_CCE(), tail, shift - get_LOG_MAX_BUFFER_SIZE() | 0);
    }
    return mutableRoot;
  }
  function copyToBuffer($this, buffer, bufferIndex, sourceIterator) {
    var index = bufferIndex;
    while (index < get_MAX_BUFFER_SIZE() ? sourceIterator.x() : false) {
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      buffer[tmp0] = sourceIterator.z();
    }
    return buffer;
  }
  function pushBuffersIncreasingHeightIfNeeded($this, root, rootSize, buffers) {
    var buffersIterator = arrayIterator(buffers);
    var mutableRoot = rootSize >> get_LOG_MAX_BUFFER_SIZE() < 1 << $this.o1i_1 ? pushBuffers($this, root, rootSize, $this.o1i_1, buffersIterator) : makeMutable($this, root);
    while (buffersIterator.x()) {
      $this.o1i_1 = $this.o1i_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      mutableRoot = mutableBufferWith($this, mutableRoot);
      pushBuffers($this, mutableRoot, 1 << $this.o1i_1, $this.o1i_1, buffersIterator);
    }
    return mutableRoot;
  }
  function pushBuffers($this, root, rootSize, shift, buffersIterator) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!buffersIterator.x()) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(shift >= 0)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message_0 = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (shift === 0) {
      return buffersIterator.z();
    }
    var mutableRoot = makeMutable($this, root);
    var index = indexSegment(rootSize, shift);
    var tmp = index;
    var tmp_0 = mutableRoot[index];
    mutableRoot[tmp] = pushBuffers($this, (tmp_0 == null ? true : isArray(tmp_0)) ? tmp_0 : THROW_CCE(), rootSize, shift - get_LOG_MAX_BUFFER_SIZE() | 0, buffersIterator);
    $l$loop: while (true) {
      var tmp_1;
      index = index + 1 | 0;
      if (index < get_MAX_BUFFER_SIZE()) {
        tmp_1 = buffersIterator.x();
      } else {
        tmp_1 = false;
      }
      if (!tmp_1) {
        break $l$loop;
      }
      var tmp_2 = index;
      var tmp_3 = mutableRoot[index];
      mutableRoot[tmp_2] = pushBuffers($this, (tmp_3 == null ? true : isArray(tmp_3)) ? tmp_3 : THROW_CCE(), 0, shift - get_LOG_MAX_BUFFER_SIZE() | 0, buffersIterator);
    }
    return mutableRoot;
  }
  function insertIntoTail_0($this, root, index, element) {
    var tailSize = tailSize_0($this);
    var mutableTail = makeMutable($this, $this.r1i_1);
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.r1i_1;
      var destinationOffset = index + 1 | 0;
      arrayCopy(this_0, mutableTail, destinationOffset, index, tailSize);
      mutableTail[index] = element;
      $this.q1i_1 = root;
      $this.r1i_1 = mutableTail;
      $this.s1i_1 = $this.s1i_1 + 1 | 0;
    } else {
      var lastElement = $this.r1i_1[get_MAX_BUFFER_SIZE_MINUS_ONE()];
      // Inline function 'kotlin.collections.copyInto' call
      var this_1 = $this.r1i_1;
      var destinationOffset_0 = index + 1 | 0;
      var endIndex = get_MAX_BUFFER_SIZE_MINUS_ONE();
      arrayCopy(this_1, mutableTail, destinationOffset_0, index, endIndex);
      mutableTail[index] = element;
      pushFilledTail_0($this, root, mutableTail, mutableBufferWith($this, lastElement));
    }
  }
  function insertIntoRoot_0($this, root, shift, index, element, elementCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      elementCarry.j1i_1 = root[get_MAX_BUFFER_SIZE_MINUS_ONE()];
      // Inline function 'kotlin.collections.copyInto' call
      var destination = makeMutable($this, root);
      var destinationOffset = bufferIndex + 1 | 0;
      var endIndex = get_MAX_BUFFER_SIZE_MINUS_ONE();
      arrayCopy(root, destination, destinationOffset, bufferIndex, endIndex);
      var mutableRoot = destination;
      mutableRoot[bufferIndex] = element;
      return mutableRoot;
    }
    var mutableRoot_0 = makeMutable($this, root);
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var tmp = mutableRoot_0[bufferIndex];
    mutableRoot_0[bufferIndex] = insertIntoRoot_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), lowerLevelShift, index, element, elementCarry);
    var inductionVariable = bufferIndex + 1 | 0;
    var last = get_MAX_BUFFER_SIZE();
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (mutableRoot_0[i] == null)
          break $l$loop;
        var tmp_0 = mutableRoot_0[i];
        mutableRoot_0[i] = insertIntoRoot_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, 0, elementCarry.j1i_1, elementCarry);
      }
       while (inductionVariable < last);
    return mutableRoot_0;
  }
  function bufferFor_0($this, index) {
    if (rootSize_0($this) <= index) {
      return $this.r1i_1;
    }
    var buffer = ensureNotNull($this.q1i_1);
    var shift = $this.o1i_1;
    while (shift > 0) {
      var tmp = buffer[indexSegment(index, shift)];
      buffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    return buffer;
  }
  function removeFromTailAt_0($this, root, rootSize, shift, index) {
    var tailSize = $this.s1i_1 - rootSize | 0;
    assert(index < tailSize);
    var removedElement;
    if (tailSize === 1) {
      removedElement = $this.r1i_1[0];
      pullLastBufferFromRoot_0($this, root, rootSize, shift);
    } else {
      removedElement = $this.r1i_1[index];
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.r1i_1;
      var destination = makeMutable($this, $this.r1i_1);
      var startIndex = index + 1 | 0;
      arrayCopy(this_0, destination, index, startIndex, tailSize);
      var mutableTail = destination;
      mutableTail[tailSize - 1 | 0] = null;
      $this.q1i_1 = root;
      $this.r1i_1 = mutableTail;
      $this.s1i_1 = (rootSize + tailSize | 0) - 1 | 0;
      $this.o1i_1 = shift;
    }
    return removedElement;
  }
  function removeFromRootAt_0($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var removedElement = root[bufferIndex];
      // Inline function 'kotlin.collections.copyInto' call
      var destination = makeMutable($this, root);
      var startIndex = bufferIndex + 1 | 0;
      var endIndex = get_MAX_BUFFER_SIZE();
      arrayCopy(root, destination, bufferIndex, startIndex, endIndex);
      var mutableRoot = destination;
      mutableRoot[get_MAX_BUFFER_SIZE() - 1 | 0] = tailCarry.j1i_1;
      tailCarry.j1i_1 = removedElement;
      return mutableRoot;
    }
    var bufferLastIndex = get_MAX_BUFFER_SIZE_MINUS_ONE();
    if (root[bufferLastIndex] == null) {
      bufferLastIndex = indexSegment(rootSize_0($this) - 1 | 0, shift);
    }
    var mutableRoot_0 = makeMutable($this, root);
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var inductionVariable = bufferLastIndex;
    var last = bufferIndex + 1 | 0;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp = mutableRoot_0[i];
        mutableRoot_0[i] = removeFromRootAt_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), lowerLevelShift, 0, tailCarry);
      }
       while (!(i === last));
    var tmp_0 = mutableRoot_0[bufferIndex];
    mutableRoot_0[bufferIndex] = removeFromRootAt_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, index, tailCarry);
    return mutableRoot_0;
  }
  function pullLastBufferFromRoot_0($this, root, rootSize, shift) {
    if (shift === 0) {
      $this.q1i_1 = null;
      var tmp = $this;
      var tmp_0;
      if (root == null) {
        // Inline function 'kotlin.emptyArray' call
        tmp_0 = [];
      } else {
        tmp_0 = root;
      }
      tmp.r1i_1 = tmp_0;
      $this.s1i_1 = rootSize;
      $this.o1i_1 = shift;
      return Unit_instance;
    }
    var tailCarry = new ObjectRef(null);
    var newRoot = ensureNotNull(pullLastBuffer_0($this, ensureNotNull(root), shift, rootSize, tailCarry));
    var tmp_1 = $this;
    var tmp_2 = tailCarry.j1i_1;
    tmp_1.r1i_1 = (!(tmp_2 == null) ? isArray(tmp_2) : false) ? tmp_2 : THROW_CCE();
    $this.s1i_1 = rootSize;
    if (newRoot[1] == null) {
      var tmp_3 = $this;
      var tmp_4 = newRoot[0];
      tmp_3.q1i_1 = (tmp_4 == null ? true : isArray(tmp_4)) ? tmp_4 : THROW_CCE();
      $this.o1i_1 = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    } else {
      $this.q1i_1 = newRoot;
      $this.o1i_1 = shift;
    }
  }
  function pullLastBuffer_0($this, root, shift, rootSize, tailCarry) {
    var bufferIndex = indexSegment(rootSize - 1 | 0, shift);
    var tmp;
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      tailCarry.j1i_1 = root[bufferIndex];
      tmp = null;
    } else {
      var tmp_0 = root[bufferIndex];
      tmp = pullLastBuffer_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, rootSize, tailCarry);
    }
    var newBufferAtIndex = tmp;
    if (newBufferAtIndex == null ? bufferIndex === 0 : false) {
      return null;
    }
    var mutableRoot = makeMutable($this, root);
    mutableRoot[bufferIndex] = newBufferAtIndex;
    return mutableRoot;
  }
  function setInRoot_0($this, root, shift, index, e, oldElementCarry) {
    var bufferIndex = indexSegment(index, shift);
    var mutableRoot = makeMutable($this, root);
    if (shift === 0) {
      if (!(mutableRoot === root)) {
        $this.f1_1 = $this.f1_1 + 1 | 0;
      }
      oldElementCarry.j1i_1 = mutableRoot[bufferIndex];
      mutableRoot[bufferIndex] = e;
      return mutableRoot;
    }
    var tmp = mutableRoot[bufferIndex];
    mutableRoot[bufferIndex] = setInRoot_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, index, e, oldElementCarry);
    return mutableRoot;
  }
  function PersistentVectorBuilder(vector, vectorRoot, vectorTail, rootShift) {
    AbstractMutableList.call(this);
    this.l1i_1 = vector;
    this.m1i_1 = vectorRoot;
    this.n1i_1 = vectorTail;
    this.o1i_1 = rootShift;
    this.p1i_1 = new MutabilityOwnership();
    this.q1i_1 = this.m1i_1;
    this.r1i_1 = this.n1i_1;
    this.s1i_1 = this.l1i_1.j();
  }
  protoOf(PersistentVectorBuilder).j = function () {
    return this.s1i_1;
  };
  protoOf(PersistentVectorBuilder).t1i = function () {
    return this.f1_1;
  };
  protoOf(PersistentVectorBuilder).a3 = function () {
    var tmp = this;
    var tmp_0;
    if (this.q1i_1 === this.m1i_1 ? this.r1i_1 === this.n1i_1 : false) {
      tmp_0 = this.l1i_1;
    } else {
      this.p1i_1 = new MutabilityOwnership();
      this.m1i_1 = this.q1i_1;
      this.n1i_1 = this.r1i_1;
      var tmp_1;
      if (this.q1i_1 == null) {
        var tmp_2;
        // Inline function 'kotlin.collections.isEmpty' call
        if (this.r1i_1.length === 0) {
          tmp_2 = persistentVectorOf();
        } else {
          tmp_2 = new SmallPersistentVector(copyOf_0(this.r1i_1, this.s1i_1));
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = new PersistentVector(ensureNotNull(this.q1i_1), this.r1i_1, this.s1i_1, this.o1i_1);
      }
      tmp_0 = tmp_1;
    }
    tmp.l1i_1 = tmp_0;
    return this.l1i_1;
  };
  protoOf(PersistentVectorBuilder).u = function (element) {
    this.f1_1 = this.f1_1 + 1 | 0;
    var tailSize = tailSize_0(this);
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      var mutableTail = makeMutable(this, this.r1i_1);
      mutableTail[tailSize] = element;
      this.r1i_1 = mutableTail;
      this.s1i_1 = this.s1i_1 + 1 | 0;
    } else {
      var newTail = mutableBufferWith(this, element);
      pushFilledTail_0(this, this.q1i_1, this.r1i_1, newTail);
    }
    return true;
  };
  protoOf(PersistentVectorBuilder).a1 = function (elements) {
    if (elements.q()) {
      return false;
    }
    this.f1_1 = this.f1_1 + 1 | 0;
    var tailSize = tailSize_0(this);
    var elementsIterator = elements.l();
    if ((get_MAX_BUFFER_SIZE() - tailSize | 0) >= elements.j()) {
      this.r1i_1 = copyToBuffer(this, makeMutable(this, this.r1i_1), tailSize, elementsIterator);
      this.s1i_1 = this.s1i_1 + elements.j() | 0;
    } else {
      var buffersSize = ((elements.j() + tailSize | 0) - 1 | 0) / get_MAX_BUFFER_SIZE() | 0;
      // Inline function 'kotlin.arrayOfNulls' call
      var buffers = fillArrayVal(Array(buffersSize), null);
      buffers[0] = copyToBuffer(this, makeMutable(this, this.r1i_1), tailSize, elementsIterator);
      var inductionVariable = 1;
      if (inductionVariable < buffersSize)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          buffers[index] = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
        }
         while (inductionVariable < buffersSize);
      var tmp = this;
      var tmp_0 = this.q1i_1;
      var tmp_1 = rootSize_0(this);
      tmp.q1i_1 = pushBuffersIncreasingHeightIfNeeded(this, tmp_0, tmp_1, isArray(buffers) ? buffers : THROW_CCE());
      this.r1i_1 = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
      this.s1i_1 = this.s1i_1 + elements.j() | 0;
    }
    return true;
  };
  protoOf(PersistentVectorBuilder).t1 = function (index, element) {
    ListImplementation_instance.l1(index, this.s1i_1);
    if (index === this.s1i_1) {
      this.u(element);
      return Unit_instance;
    }
    this.f1_1 = this.f1_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      insertIntoTail_0(this, this.q1i_1, index - rootSize | 0, element);
      return Unit_instance;
    }
    var elementCarry = new ObjectRef(null);
    var newRest = insertIntoRoot_0(this, ensureNotNull(this.q1i_1), this.o1i_1, index, element, elementCarry);
    var tmp = elementCarry.j1i_1;
    insertIntoTail_0(this, newRest, 0, (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE());
  };
  protoOf(PersistentVectorBuilder).k = function (index) {
    ListImplementation_instance.u1(index, this.s1i_1);
    var buffer = bufferFor_0(this, index);
    var tmp = buffer[index & get_MAX_BUFFER_SIZE_MINUS_ONE()];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).g1 = function (index) {
    ListImplementation_instance.u1(index, this.s1i_1);
    this.f1_1 = this.f1_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      var tmp = removeFromTailAt_0(this, this.q1i_1, rootSize, this.o1i_1, index - rootSize | 0);
      return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    }
    var elementCarry = new ObjectRef(this.r1i_1[0]);
    var newRoot = removeFromRootAt_0(this, ensureNotNull(this.q1i_1), this.o1i_1, index, elementCarry);
    removeFromTailAt_0(this, newRoot, rootSize, this.o1i_1, 0);
    var tmp_0 = elementCarry.j1i_1;
    return (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).t = function (index, element) {
    ListImplementation_instance.u1(index, this.s1i_1);
    if (rootSize_0(this) <= index) {
      var mutableTail = makeMutable(this, this.r1i_1);
      if (!(mutableTail === this.r1i_1)) {
        this.f1_1 = this.f1_1 + 1 | 0;
      }
      var tailIndex = index & get_MAX_BUFFER_SIZE_MINUS_ONE();
      var oldElement = mutableTail[tailIndex];
      mutableTail[tailIndex] = element;
      this.r1i_1 = mutableTail;
      return (oldElement == null ? true : !(oldElement == null)) ? oldElement : THROW_CCE();
    }
    var oldElementCarry = new ObjectRef(null);
    this.q1i_1 = setInRoot_0(this, ensureNotNull(this.q1i_1), this.o1i_1, index, element, oldElementCarry);
    var tmp = oldElementCarry.j1i_1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).l = function () {
    return this.pa();
  };
  protoOf(PersistentVectorBuilder).pa = function () {
    return this.n(0);
  };
  protoOf(PersistentVectorBuilder).n = function (index) {
    ListImplementation_instance.l1(index, this.s1i_1);
    return new PersistentVectorMutableIterator(this, index);
  };
  function PersistentVectorIterator(root, tail, index, size, trieHeight) {
    AbstractListIterator.call(this, index, size);
    this.w1i_1 = tail;
    var trieSize = rootSize_1(size);
    var trieIndex = coerceAtMost(index, trieSize);
    this.x1i_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
  }
  protoOf(PersistentVectorIterator).z = function () {
    this.z1h();
    if (this.x1i_1.x()) {
      this.x1h_1 = this.x1h_1 + 1 | 0;
      return this.x1i_1.z();
    }
    var tmp3 = this.x1h_1;
    this.x1h_1 = tmp3 + 1 | 0;
    return this.w1i_1[tmp3 - this.x1i_1.y1h_1 | 0];
  };
  protoOf(PersistentVectorIterator).o1 = function () {
    this.a1i();
    if (this.x1h_1 > this.x1i_1.y1h_1) {
      this.x1h_1 = this.x1h_1 - 1 | 0;
      return this.w1i_1[this.x1h_1 - this.x1i_1.y1h_1 | 0];
    }
    this.x1h_1 = this.x1h_1 - 1 | 0;
    return this.x1i_1.o1();
  };
  function reset($this) {
    $this.y1h_1 = $this.f1j_1.s1i_1;
    $this.g1j_1 = $this.f1j_1.t1i();
    $this.i1j_1 = -1;
    setupTrieIterator($this);
  }
  function setupTrieIterator($this) {
    var root = $this.f1j_1.q1i_1;
    if (root == null) {
      $this.h1j_1 = null;
      return Unit_instance;
    }
    var trieSize = rootSize_1($this.f1j_1.s1i_1);
    var trieIndex = coerceAtMost($this.x1h_1, trieSize);
    var trieHeight = ($this.f1j_1.o1i_1 / get_LOG_MAX_BUFFER_SIZE() | 0) + 1 | 0;
    if ($this.h1j_1 == null) {
      $this.h1j_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
    } else {
      ensureNotNull($this.h1j_1).j1j(root, trieIndex, trieSize, trieHeight);
    }
  }
  function checkForComodification($this) {
    if (!($this.g1j_1 === $this.f1j_1.t1i()))
      throw ConcurrentModificationException_init_$Create$();
  }
  function checkHasIterated($this) {
    if ($this.i1j_1 === -1)
      throw IllegalStateException_init_$Create$_0();
  }
  function PersistentVectorMutableIterator(builder, index) {
    AbstractListIterator.call(this, index, builder.s1i_1);
    this.f1j_1 = builder;
    this.g1j_1 = this.f1j_1.t1i();
    this.h1j_1 = null;
    this.i1j_1 = -1;
    setupTrieIterator(this);
  }
  protoOf(PersistentVectorMutableIterator).o1 = function () {
    checkForComodification(this);
    this.a1i();
    this.i1j_1 = this.x1h_1 - 1 | 0;
    var tmp1_elvis_lhs = this.h1j_1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp_0 = this.f1j_1.r1i_1;
      this.x1h_1 = this.x1h_1 - 1 | 0;
      var tmp_1 = tmp_0[this.x1h_1];
      return (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var trieIterator = tmp;
    if (this.x1h_1 > trieIterator.y1h_1) {
      var tmp_2 = this.f1j_1.r1i_1;
      this.x1h_1 = this.x1h_1 - 1 | 0;
      var tmp_3 = tmp_2[this.x1h_1 - trieIterator.y1h_1 | 0];
      return (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
    }
    this.x1h_1 = this.x1h_1 - 1 | 0;
    return trieIterator.o1();
  };
  protoOf(PersistentVectorMutableIterator).z = function () {
    checkForComodification(this);
    this.z1h();
    this.i1j_1 = this.x1h_1;
    var tmp2_elvis_lhs = this.h1j_1;
    var tmp;
    if (tmp2_elvis_lhs == null) {
      var tmp_0 = this.f1j_1.r1i_1;
      var tmp1 = this.x1h_1;
      this.x1h_1 = tmp1 + 1 | 0;
      var tmp_1 = tmp_0[tmp1];
      return (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = tmp2_elvis_lhs;
    }
    var trieIterator = tmp;
    if (trieIterator.x()) {
      this.x1h_1 = this.x1h_1 + 1 | 0;
      return trieIterator.z();
    }
    var tmp_2 = this.f1j_1.r1i_1;
    var tmp6 = this.x1h_1;
    this.x1h_1 = tmp6 + 1 | 0;
    var tmp_3 = tmp_2[tmp6 - trieIterator.y1h_1 | 0];
    return (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
  };
  protoOf(PersistentVectorMutableIterator).y = function () {
    checkForComodification(this);
    checkHasIterated(this);
    this.f1j_1.g1(this.i1j_1);
    if (this.i1j_1 < this.x1h_1)
      this.x1h_1 = this.i1j_1;
    reset(this);
  };
  function bufferOfSize($this, size) {
    // Inline function 'kotlin.arrayOfNulls' call
    return fillArrayVal(Array(size), null);
  }
  function Companion_4() {
    Companion_instance_5 = this;
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    tmp.k1j_1 = new SmallPersistentVector(tmp$ret$0);
  }
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_4();
    return Companion_instance_5;
  }
  function SmallPersistentVector(buffer) {
    Companion_getInstance_5();
    AbstractPersistentList.call(this);
    this.l1j_1 = buffer;
    assert(this.l1j_1.length <= get_MAX_BUFFER_SIZE());
  }
  protoOf(SmallPersistentVector).j = function () {
    return this.l1j_1.length;
  };
  protoOf(SmallPersistentVector).u = function (element) {
    if (this.j() < get_MAX_BUFFER_SIZE()) {
      var newBuffer = copyOf_0(this.l1j_1, this.j() + 1 | 0);
      newBuffer[this.j()] = element;
      return new SmallPersistentVector(newBuffer);
    }
    var tail = presizedBufferWith(element);
    return new PersistentVector(this.l1j_1, tail, this.j() + 1 | 0, 0);
  };
  protoOf(SmallPersistentVector).a1 = function (elements) {
    if ((this.j() + elements.j() | 0) <= get_MAX_BUFFER_SIZE()) {
      var newBuffer = copyOf_0(this.l1j_1, this.j() + elements.j() | 0);
      var index = this.j();
      var tmp0_iterator = elements.l();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        newBuffer[tmp1] = element;
      }
      return new SmallPersistentVector(newBuffer);
    }
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.mutate' call
    // Inline function 'kotlin.apply' call
    var this_0 = this.wz();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.SmallPersistentVector.addAll.<anonymous>' call
    this_0.a1(elements);
    return this_0.a3();
  };
  protoOf(SmallPersistentVector).b1i = function (index, element) {
    ListImplementation_instance.l1(index, this.j());
    if (index === this.j()) {
      return this.u(element);
    }
    if (this.j() < get_MAX_BUFFER_SIZE()) {
      var newBuffer = bufferOfSize(this, this.j() + 1 | 0);
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = this.l1j_1;
      arrayCopy(this_0, newBuffer, 0, 0, index);
      // Inline function 'kotlin.collections.copyInto' call
      var this_1 = this.l1j_1;
      var destinationOffset = index + 1 | 0;
      var endIndex = this.j();
      arrayCopy(this_1, newBuffer, destinationOffset, index, endIndex);
      newBuffer[index] = element;
      return new SmallPersistentVector(newBuffer);
    }
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var root = this.l1j_1.slice();
    // Inline function 'kotlin.collections.copyInto' call
    var this_2 = this.l1j_1;
    var destinationOffset_0 = index + 1 | 0;
    var endIndex_0 = this.j() - 1 | 0;
    arrayCopy(this_2, root, destinationOffset_0, index, endIndex_0);
    root[index] = element;
    var tail = presizedBufferWith(this.l1j_1[get_MAX_BUFFER_SIZE_MINUS_ONE()]);
    return new PersistentVector(root, tail, this.j() + 1 | 0, 0);
  };
  protoOf(SmallPersistentVector).g1 = function (index) {
    ListImplementation_instance.u1(index, this.j());
    if (this.j() === 1) {
      return Companion_getInstance_5().k1j_1;
    }
    var newBuffer = copyOf_0(this.l1j_1, this.j() - 1 | 0);
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = this.l1j_1;
    var startIndex = index + 1 | 0;
    var endIndex = this.j();
    arrayCopy(this_0, newBuffer, index, startIndex, endIndex);
    return new SmallPersistentVector(newBuffer);
  };
  protoOf(SmallPersistentVector).wz = function () {
    return new PersistentVectorBuilder(this, null, this.l1j_1, 0);
  };
  protoOf(SmallPersistentVector).m = function (element) {
    return indexOf(this.l1j_1, element);
  };
  protoOf(SmallPersistentVector).v1 = function (element) {
    return lastIndexOf(this.l1j_1, element);
  };
  protoOf(SmallPersistentVector).n = function (index) {
    ListImplementation_instance.l1(index, this.j());
    var tmp = this.l1j_1;
    return new BufferIterator(isArray(tmp) ? tmp : THROW_CCE(), index, this.j());
  };
  protoOf(SmallPersistentVector).k = function (index) {
    ListImplementation_instance.u1(index, this.j());
    var tmp = this.l1j_1[index];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SmallPersistentVector).t = function (index, element) {
    ListImplementation_instance.u1(index, this.j());
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = this.l1j_1.slice();
    newBuffer[index] = element;
    return new SmallPersistentVector(newBuffer);
  };
  function fillPath($this, index, startLevel) {
    var shift = imul($this.a1j_1 - startLevel | 0, get_LOG_MAX_BUFFER_SIZE());
    var i = startLevel;
    while (i < $this.a1j_1) {
      var tmp = $this.b1j_1;
      var tmp_0 = i;
      var tmp_1 = $this.b1j_1[i - 1 | 0];
      tmp[tmp_0] = ((!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE())[indexSegment(index, shift)];
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
      i = i + 1 | 0;
    }
  }
  function fillPathIfNeeded($this, indexPredicate) {
    var shift = 0;
    while (indexSegment($this.x1h_1, shift) === indexPredicate) {
      shift = shift + get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    if (shift > 0) {
      var level = ($this.a1j_1 - 1 | 0) - (shift / get_LOG_MAX_BUFFER_SIZE() | 0) | 0;
      fillPath($this, $this.x1h_1, level + 1 | 0);
    }
  }
  function elementAtCurrentIndex($this) {
    var leafBufferIndex = $this.x1h_1 & get_MAX_BUFFER_SIZE_MINUS_ONE();
    var tmp = $this.b1j_1[$this.a1j_1 - 1 | 0];
    return ((!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE())[leafBufferIndex];
  }
  function TrieIterator(root, index, size, height) {
    AbstractListIterator.call(this, index, size);
    this.a1j_1 = height;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size_0 = this.a1j_1;
    tmp.b1j_1 = fillArrayVal(Array(size_0), null);
    this.c1j_1 = index === size;
    this.b1j_1[0] = root;
    fillPath(this, index - (this.c1j_1 ? 1 : 0) | 0, 1);
  }
  protoOf(TrieIterator).j1j = function (root, index, size, height) {
    this.x1h_1 = index;
    this.y1h_1 = size;
    this.a1j_1 = height;
    if (this.b1j_1.length < height) {
      var tmp = this;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp.b1j_1 = fillArrayVal(Array(height), null);
    }
    this.b1j_1[0] = root;
    this.c1j_1 = index === size;
    fillPath(this, index - (this.c1j_1 ? 1 : 0) | 0, 1);
  };
  protoOf(TrieIterator).z = function () {
    if (!this.x()) {
      throw NoSuchElementException_init_$Create$();
    }
    var result = elementAtCurrentIndex(this);
    this.x1h_1 = this.x1h_1 + 1 | 0;
    if (this.x1h_1 === this.y1h_1) {
      this.c1j_1 = true;
      return result;
    }
    fillPathIfNeeded(this, 0);
    return result;
  };
  protoOf(TrieIterator).o1 = function () {
    if (!this.m1()) {
      throw NoSuchElementException_init_$Create$();
    }
    this.x1h_1 = this.x1h_1 - 1 | 0;
    if (this.c1j_1) {
      this.c1j_1 = false;
      return elementAtCurrentIndex(this);
    }
    fillPathIfNeeded(this, get_MAX_BUFFER_SIZE_MINUS_ONE());
    return elementAtCurrentIndex(this);
  };
  function persistentVectorOf() {
    return Companion_getInstance_5().k1j_1;
  }
  function get_MAX_BUFFER_SIZE() {
    return MAX_BUFFER_SIZE;
  }
  var MAX_BUFFER_SIZE;
  function presizedBufferWith(element) {
    // Inline function 'kotlin.arrayOfNulls' call
    var buffer = fillArrayVal(Array(32), null);
    buffer[0] = element;
    return buffer;
  }
  function get_MAX_BUFFER_SIZE_MINUS_ONE() {
    return MAX_BUFFER_SIZE_MINUS_ONE;
  }
  var MAX_BUFFER_SIZE_MINUS_ONE;
  function rootSize_1(vectorSize) {
    return (vectorSize - 1 | 0) & -32;
  }
  function get_LOG_MAX_BUFFER_SIZE() {
    return LOG_MAX_BUFFER_SIZE;
  }
  var LOG_MAX_BUFFER_SIZE;
  function indexSegment(index, shift) {
    return index >> shift & 31;
  }
  function ObjectRef(value) {
    this.j1i_1 = value;
  }
  function get_MUTABLE_BUFFER_SIZE() {
    return MUTABLE_BUFFER_SIZE;
  }
  var MUTABLE_BUFFER_SIZE;
  function createEntries($this) {
    return new PersistentHashMapEntries($this);
  }
  function Companion_5() {
    Companion_instance_6 = this;
    this.m1j_1 = new PersistentHashMap(Companion_getInstance_7().n1j_1, 0);
  }
  protoOf(Companion_5).o1j = function () {
    var tmp = this.m1j_1;
    return tmp instanceof PersistentHashMap ? tmp : THROW_CCE();
  };
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_5();
    return Companion_instance_6;
  }
  function PersistentHashMap(node, size) {
    Companion_getInstance_6();
    AbstractMap.call(this);
    this.r1j_1 = node;
    this.s1j_1 = size;
  }
  protoOf(PersistentHashMap).j = function () {
    return this.s1j_1;
  };
  protoOf(PersistentHashMap).g2 = function () {
    return new PersistentHashMapKeys(this);
  };
  protoOf(PersistentHashMap).h2 = function () {
    return new PersistentHashMapValues(this);
  };
  protoOf(PersistentHashMap).i2 = function () {
    return createEntries(this);
  };
  protoOf(PersistentHashMap).q2 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.r1j_1.x1j(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).t2 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.r1j_1.y1j(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).j2 = function (key, value) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = this.r1j_1.z1j(tmp$ret$0, key, value, 0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var newNodeResult = tmp;
    return new PersistentHashMap(newNodeResult.a1k_1, this.j() + newNodeResult.b1k_1 | 0);
  };
  protoOf(PersistentHashMap).n2 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var newNode = this.r1j_1.c1k(tmp$ret$0, key, 0);
    if (this.r1j_1 === newNode) {
      return this;
    }
    if (newNode == null) {
      return Companion_getInstance_6().o1j();
    }
    return new PersistentHashMap(newNode, this.j() - 1 | 0);
  };
  function PersistentHashMapBuilder(map) {
    AbstractMutableMap.call(this);
    this.h1k_1 = map;
    this.i1k_1 = new MutabilityOwnership();
    this.j1k_1 = this.h1k_1.r1j_1;
    this.k1k_1 = null;
    this.l1k_1 = 0;
    this.m1k_1 = this.h1k_1.j();
  }
  protoOf(PersistentHashMapBuilder).n1k = function (value) {
    this.m1k_1 = value;
    this.l1k_1 = this.l1k_1 + 1 | 0;
  };
  protoOf(PersistentHashMapBuilder).j = function () {
    return this.m1k_1;
  };
  protoOf(PersistentHashMapBuilder).a3 = function () {
    var tmp = this;
    var tmp_0;
    if (this.j1k_1 === this.h1k_1.r1j_1) {
      tmp_0 = this.h1k_1;
    } else {
      this.i1k_1 = new MutabilityOwnership();
      tmp_0 = new PersistentHashMap(this.j1k_1, this.j());
    }
    tmp.h1k_1 = tmp_0;
    return this.h1k_1;
  };
  protoOf(PersistentHashMapBuilder).i2 = function () {
    return new PersistentHashMapBuilderEntries(this);
  };
  protoOf(PersistentHashMapBuilder).g2 = function () {
    return new PersistentHashMapBuilderKeys(this);
  };
  protoOf(PersistentHashMapBuilder).h2 = function () {
    return new PersistentHashMapBuilderValues(this);
  };
  protoOf(PersistentHashMapBuilder).q2 = function (key) {
    var tmp = this.j1k_1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return tmp.x1j(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMapBuilder).t2 = function (key) {
    var tmp = this.j1k_1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return tmp.y1j(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMapBuilder).j2 = function (key, value) {
    this.k1k_1 = null;
    var tmp = this;
    var tmp_0 = this.j1k_1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    tmp.j1k_1 = tmp_0.o1k(tmp$ret$0, key, value, 0, this);
    return this.k1k_1;
  };
  protoOf(PersistentHashMapBuilder).k2 = function (from) {
    var tmp1_elvis_lhs = from instanceof PersistentHashMap ? from : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = from instanceof PersistentHashMapBuilder ? from : null;
      tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a3();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var map = tmp;
    if (!(map == null)) {
      var intersectionCounter = new DeltaCounter();
      var oldSize = this.j();
      var tmp_0 = this;
      var tmp_1 = this.j1k_1;
      var tmp_2 = map.r1j_1;
      tmp_0.j1k_1 = tmp_1.p1k(tmp_2 instanceof TrieNode ? tmp_2 : THROW_CCE(), 0, intersectionCounter, this);
      var newSize = (oldSize + map.j() | 0) - intersectionCounter.q1k_1 | 0;
      if (!(oldSize === newSize)) {
        this.n1k(newSize);
      }
    } else {
      protoOf(AbstractMutableMap).k2.call(this, from);
    }
  };
  protoOf(PersistentHashMapBuilder).n2 = function (key) {
    this.k1k_1 = null;
    var tmp = this;
    var tmp_0 = this.j1k_1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = tmp_0.r1k(tmp$ret$0, key, 0, this);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      var tmp_2 = Companion_getInstance_7().n1j_1;
      tmp_1 = tmp_2 instanceof TrieNode ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp.j1k_1 = tmp_1;
    return this.k1k_1;
  };
  protoOf(PersistentHashMapBuilder).s1k = function (key, value) {
    var oldSize = this.j();
    var tmp = this;
    var tmp_0 = this.j1k_1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = tmp_0.t1k(tmp$ret$0, key, value, 0, this);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      var tmp_2 = Companion_getInstance_7().n1j_1;
      tmp_1 = tmp_2 instanceof TrieNode ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp.j1k_1 = tmp_1;
    return !(oldSize === this.j());
  };
  protoOf(PersistentHashMapBuilder).b1 = function () {
    var tmp = this;
    var tmp_0 = Companion_getInstance_7().n1j_1;
    tmp.j1k_1 = tmp_0 instanceof TrieNode ? tmp_0 : THROW_CCE();
    this.n1k(0);
  };
  function PersistentHashMapBuilderEntriesIterator(builder) {
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = get_TRIE_MAX_HEIGHT() + 1 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = new TrieNodeMutableEntriesIterator(this);
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.u1k_1 = new PersistentHashMapBuilderBaseIterator(builder, tmp_2);
  }
  protoOf(PersistentHashMapBuilderEntriesIterator).x = function () {
    return this.u1k_1.x();
  };
  protoOf(PersistentHashMapBuilderEntriesIterator).z = function () {
    return this.u1k_1.z();
  };
  protoOf(PersistentHashMapBuilderEntriesIterator).y = function () {
    return this.u1k_1.y();
  };
  function PersistentHashMapBuilderKeysIterator(builder) {
    var tmp = 0;
    var tmp_0 = get_TRIE_MAX_HEIGHT() + 1 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      tmp_1[tmp] = new TrieNodeKeysIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBuilderBaseIterator.call(this, builder, tmp_1);
  }
  function PersistentHashMapBuilderValuesIterator(builder) {
    var tmp = 0;
    var tmp_0 = get_TRIE_MAX_HEIGHT() + 1 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      tmp_1[tmp] = new TrieNodeValuesIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBuilderBaseIterator.call(this, builder, tmp_1);
  }
  function resetPath($this, keyHash, node, key, pathIndex) {
    var shift = imul(pathIndex, get_LOG_MAX_BRANCHING_FACTOR());
    if (shift > get_MAX_SHIFT()) {
      $this.v1k_1[pathIndex].j1l(node.w1j_1, node.w1j_1.length, 0);
      while (!equals($this.v1k_1[pathIndex].f1l(), key)) {
        $this.v1k_1[pathIndex].k1l();
      }
      $this.w1k_1 = pathIndex;
      return Unit_instance;
    }
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (node.n1l(keyPositionMask)) {
      var keyIndex = node.l1l(keyPositionMask);
      $this.v1k_1[pathIndex].j1l(node.w1j_1, imul(get_ENTRY_SIZE(), node.m1l()), keyIndex);
      $this.w1k_1 = pathIndex;
      return Unit_instance;
    }
    var nodeIndex = node.o1l(keyPositionMask);
    var targetNode = node.p1l(nodeIndex);
    $this.v1k_1[pathIndex].j1l(node.w1j_1, imul(get_ENTRY_SIZE(), node.m1l()), nodeIndex);
    resetPath($this, keyHash, targetNode, key, pathIndex + 1 | 0);
  }
  function checkNextWasInvoked($this) {
    if (!$this.d1l_1)
      throw IllegalStateException_init_$Create$_0();
  }
  function checkForComodification_0($this) {
    if (!($this.b1l_1.l1k_1 === $this.e1l_1))
      throw ConcurrentModificationException_init_$Create$();
  }
  function PersistentHashMapBuilderBaseIterator(builder, path) {
    PersistentHashMapBaseIterator.call(this, builder.j1k_1, path);
    this.b1l_1 = builder;
    this.c1l_1 = null;
    this.d1l_1 = false;
    this.e1l_1 = this.b1l_1.l1k_1;
  }
  protoOf(PersistentHashMapBuilderBaseIterator).z = function () {
    checkForComodification_0(this);
    this.c1l_1 = this.f1l();
    this.d1l_1 = true;
    return protoOf(PersistentHashMapBaseIterator).z.call(this);
  };
  protoOf(PersistentHashMapBuilderBaseIterator).y = function () {
    checkNextWasInvoked(this);
    if (this.x()) {
      var currentKey = this.f1l();
      // Inline function 'kotlin.collections.remove' call
      var this_0 = this.b1l_1;
      var key = this.c1l_1;
      (isInterface(this_0, MutableMap) ? this_0 : THROW_CCE()).n2(key);
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = currentKey == null ? null : hashCode(currentKey);
      var tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      resetPath(this, tmp$ret$1, this.b1l_1.j1k_1, currentKey, 0);
    } else {
      // Inline function 'kotlin.collections.remove' call
      var this_1 = this.b1l_1;
      var key_0 = this.c1l_1;
      (isInterface(this_1, MutableMap) ? this_1 : THROW_CCE()).n2(key_0);
    }
    this.c1l_1 = null;
    this.d1l_1 = false;
    this.e1l_1 = this.b1l_1.l1k_1;
  };
  function TrieNodeMutableEntriesIterator(parentIterator) {
    TrieNodeBaseIterator.call(this);
    this.t1l_1 = parentIterator;
  }
  protoOf(TrieNodeMutableEntriesIterator).z = function () {
    assert(this.u1l());
    this.i1l_1 = this.i1l_1 + 2 | 0;
    var tmp = this.g1l_1[this.i1l_1 - 2 | 0];
    var tmp_0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var tmp_1 = this.g1l_1[this.i1l_1 - 1 | 0];
    return new MutableMapEntry(this.t1l_1, tmp_0, (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
  };
  function MutableMapEntry(parentIterator, key, value) {
    MapEntry.call(this, key, value);
    this.b1m_1 = parentIterator;
    this.c1m_1 = value;
  }
  protoOf(MutableMapEntry).m2 = function () {
    return this.c1m_1;
  };
  function PersistentHashMapBuilderEntries(builder) {
    AbstractMapBuilderEntries.call(this);
    this.f1m_1 = builder;
  }
  protoOf(PersistentHashMapBuilderEntries).g1m = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(PersistentHashMapBuilderEntries).u = function (element) {
    return this.g1m((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderEntries).b1 = function () {
    this.f1m_1.b1();
  };
  protoOf(PersistentHashMapBuilderEntries).l = function () {
    return new PersistentHashMapBuilderEntriesIterator(this.f1m_1);
  };
  protoOf(PersistentHashMapBuilderEntries).a4 = function (element) {
    return this.f1m_1.s1k(element.l2(), element.m2());
  };
  protoOf(PersistentHashMapBuilderEntries).j = function () {
    return this.f1m_1.j();
  };
  protoOf(PersistentHashMapBuilderEntries).z3 = function (element) {
    var tmp0_safe_receiver = this.f1m_1.t2(element.l2());
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilderEntries.containsEntry.<anonymous>' call
      tmp = equals(tmp0_safe_receiver, element.m2());
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? element.m2() == null ? this.f1m_1.q2(element.l2()) : false : tmp1_elvis_lhs;
  };
  function PersistentHashMapBuilderKeys(builder) {
    AbstractMutableSet.call(this);
    this.h1m_1 = builder;
  }
  protoOf(PersistentHashMapBuilderKeys).e4 = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(PersistentHashMapBuilderKeys).u = function (element) {
    return this.e4((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderKeys).b1 = function () {
    this.h1m_1.b1();
  };
  protoOf(PersistentHashMapBuilderKeys).l = function () {
    return new PersistentHashMapBuilderKeysIterator(this.h1m_1);
  };
  protoOf(PersistentHashMapBuilderKeys).n2 = function (element) {
    if (this.h1m_1.q2(element)) {
      this.h1m_1.n2(element);
      return true;
    }
    return false;
  };
  protoOf(PersistentHashMapBuilderKeys).v = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.n2((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderKeys).j = function () {
    return this.h1m_1.j();
  };
  protoOf(PersistentHashMapBuilderKeys).j3 = function (element) {
    return this.h1m_1.q2(element);
  };
  protoOf(PersistentHashMapBuilderKeys).o = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.j3((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function PersistentHashMapBuilderValues(builder) {
    AbstractMutableCollection.call(this);
    this.i1m_1 = builder;
  }
  protoOf(PersistentHashMapBuilderValues).j = function () {
    return this.i1m_1.j();
  };
  protoOf(PersistentHashMapBuilderValues).n3 = function (element) {
    return this.i1m_1.r2(element);
  };
  protoOf(PersistentHashMapBuilderValues).o = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.n3((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderValues).o3 = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(PersistentHashMapBuilderValues).u = function (element) {
    return this.o3((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderValues).l = function () {
    return new PersistentHashMapBuilderValuesIterator(this.i1m_1);
  };
  function AbstractMapBuilderEntries() {
    AbstractMutableSet.call(this);
  }
  protoOf(AbstractMapBuilderEntries).w3 = function (element) {
    var tmp = !(element == null) ? element : null;
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    return this.z3(element);
  };
  protoOf(AbstractMapBuilderEntries).o = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.w3((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  protoOf(AbstractMapBuilderEntries).y3 = function (element) {
    var tmp = !(element == null) ? element : null;
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    return this.a4(element);
  };
  protoOf(AbstractMapBuilderEntries).v = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.y3((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  function PersistentHashMapKeysIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeKeysIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function PersistentHashMapValuesIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeValuesIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function PersistentHashMapEntriesIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeEntriesIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function moveToNextNodeWithData($this, pathIndex) {
    if ($this.v1k_1[pathIndex].u1l()) {
      return pathIndex;
    }
    if ($this.v1k_1[pathIndex].w1l()) {
      var node = $this.v1k_1[pathIndex].x1l();
      if (pathIndex === 6) {
        $this.v1k_1[pathIndex + 1 | 0].v1l(node.w1j_1, node.w1j_1.length);
      } else {
        $this.v1k_1[pathIndex + 1 | 0].v1l(node.w1j_1, imul(get_ENTRY_SIZE(), node.m1l()));
      }
      return moveToNextNodeWithData($this, pathIndex + 1 | 0);
    }
    return -1;
  }
  function ensureNextEntryIsReady($this) {
    if ($this.v1k_1[$this.w1k_1].u1l()) {
      return Unit_instance;
    }
    var inductionVariable = $this.w1k_1;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var result = moveToNextNodeWithData($this, i);
        if (result === -1 ? $this.v1k_1[i].w1l() : false) {
          $this.v1k_1[i].y1l();
          result = moveToNextNodeWithData($this, i);
        }
        if (!(result === -1)) {
          $this.w1k_1 = result;
          return Unit_instance;
        }
        if (i > 0) {
          $this.v1k_1[i - 1 | 0].y1l();
        }
        $this.v1k_1[i].v1l(Companion_getInstance_7().n1j_1.w1j_1, 0);
      }
       while (0 <= inductionVariable);
    $this.x1k_1 = false;
  }
  function checkHasNext($this) {
    if (!$this.x())
      throw NoSuchElementException_init_$Create$();
  }
  function PersistentHashMapBaseIterator(node, path) {
    this.v1k_1 = path;
    this.w1k_1 = 0;
    this.x1k_1 = true;
    this.v1k_1[0].v1l(node.w1j_1, imul(get_ENTRY_SIZE(), node.m1l()));
    this.w1k_1 = 0;
    ensureNextEntryIsReady(this);
  }
  protoOf(PersistentHashMapBaseIterator).f1l = function () {
    checkHasNext(this);
    return this.v1k_1[this.w1k_1].f1l();
  };
  protoOf(PersistentHashMapBaseIterator).x = function () {
    return this.x1k_1;
  };
  protoOf(PersistentHashMapBaseIterator).z = function () {
    checkHasNext(this);
    var result = this.v1k_1[this.w1k_1].z();
    ensureNextEntryIsReady(this);
    return result;
  };
  function TrieNodeBaseIterator() {
    this.g1l_1 = Companion_getInstance_7().n1j_1.w1j_1;
    this.h1l_1 = 0;
    this.i1l_1 = 0;
  }
  protoOf(TrieNodeBaseIterator).j1l = function (buffer, dataSize, index) {
    this.g1l_1 = buffer;
    this.h1l_1 = dataSize;
    this.i1l_1 = index;
  };
  protoOf(TrieNodeBaseIterator).v1l = function (buffer, dataSize) {
    this.j1l(buffer, dataSize, 0);
  };
  protoOf(TrieNodeBaseIterator).u1l = function () {
    return this.i1l_1 < this.h1l_1;
  };
  protoOf(TrieNodeBaseIterator).f1l = function () {
    assert(this.u1l());
    var tmp = this.g1l_1[this.i1l_1];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(TrieNodeBaseIterator).k1l = function () {
    assert(this.u1l());
    this.i1l_1 = this.i1l_1 + 2 | 0;
  };
  protoOf(TrieNodeBaseIterator).w1l = function () {
    assert(this.i1l_1 >= this.h1l_1);
    return this.i1l_1 < this.g1l_1.length;
  };
  protoOf(TrieNodeBaseIterator).x1l = function () {
    assert(this.w1l());
    var tmp = this.g1l_1[this.i1l_1];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNodeBaseIterator).y1l = function () {
    assert(this.w1l());
    this.i1l_1 = this.i1l_1 + 1 | 0;
  };
  protoOf(TrieNodeBaseIterator).x = function () {
    return this.u1l();
  };
  function get_TRIE_MAX_HEIGHT() {
    return TRIE_MAX_HEIGHT;
  }
  var TRIE_MAX_HEIGHT;
  function TrieNodeKeysIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeKeysIterator).z = function () {
    assert(this.u1l());
    this.i1l_1 = this.i1l_1 + 2 | 0;
    var tmp = this.g1l_1[this.i1l_1 - 2 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function TrieNodeValuesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeValuesIterator).z = function () {
    assert(this.u1l());
    this.i1l_1 = this.i1l_1 + 2 | 0;
    var tmp = this.g1l_1[this.i1l_1 - 1 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function TrieNodeEntriesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeEntriesIterator).z = function () {
    assert(this.u1l());
    this.i1l_1 = this.i1l_1 + 2 | 0;
    var tmp = this.g1l_1[this.i1l_1 - 2 | 0];
    var tmp_0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var tmp_1 = this.g1l_1[this.i1l_1 - 1 | 0];
    return new MapEntry(tmp_0, (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
  };
  function MapEntry(key, value) {
    this.d1m_1 = key;
    this.e1m_1 = value;
  }
  protoOf(MapEntry).l2 = function () {
    return this.d1m_1;
  };
  protoOf(MapEntry).m2 = function () {
    return this.e1m_1;
  };
  protoOf(MapEntry).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.l2();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.m2();
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    return tmp ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0);
  };
  protoOf(MapEntry).equals = function (other) {
    var tmp0_safe_receiver = (!(other == null) ? isInterface(other, Entry) : false) ? other : null;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.MapEntry.equals.<anonymous>' call
      tmp = equals(tmp0_safe_receiver.l2(), this.l2()) ? equals(tmp0_safe_receiver.m2(), this.m2()) : false;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(MapEntry).toString = function () {
    return toString_0(this.l2()) + '=' + toString_0(this.m2());
  };
  function PersistentHashMapKeys(map) {
    AbstractSet.call(this);
    this.s1m_1 = map;
  }
  protoOf(PersistentHashMapKeys).j = function () {
    return this.s1m_1.j();
  };
  protoOf(PersistentHashMapKeys).j3 = function (element) {
    return this.s1m_1.q2(element);
  };
  protoOf(PersistentHashMapKeys).o = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.j3((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapKeys).l = function () {
    return new PersistentHashMapKeysIterator(this.s1m_1.r1j_1);
  };
  function PersistentHashMapValues(map) {
    AbstractCollection.call(this);
    this.t1m_1 = map;
  }
  protoOf(PersistentHashMapValues).j = function () {
    return this.t1m_1.j();
  };
  protoOf(PersistentHashMapValues).n3 = function (element) {
    return this.t1m_1.r2(element);
  };
  protoOf(PersistentHashMapValues).o = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.n3((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapValues).l = function () {
    return new PersistentHashMapValuesIterator(this.t1m_1.r1j_1);
  };
  function PersistentHashMapEntries(map) {
    AbstractSet.call(this);
    this.u1m_1 = map;
  }
  protoOf(PersistentHashMapEntries).j = function () {
    return this.u1m_1.j();
  };
  protoOf(PersistentHashMapEntries).v1m = function (element) {
    var tmp = !(element == null) ? element : THROW_CCE();
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    var tmp0_safe_receiver = this.u1m_1.t2(element.l2());
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapEntries.contains.<anonymous>' call
      tmp_0 = equals(tmp0_safe_receiver, element.m2());
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? element.m2() == null ? this.u1m_1.q2(element.l2()) : false : tmp1_elvis_lhs;
  };
  protoOf(PersistentHashMapEntries).o = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.v1m((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapEntries).l = function () {
    return new PersistentHashMapEntriesIterator(this.u1m_1.r1j_1);
  };
  function TrieNode_init_$Init$(dataMap, nodeMap, buffer, $this) {
    TrieNode.call($this, dataMap, nodeMap, buffer, null);
    return $this;
  }
  function TrieNode_init_$Create$(dataMap, nodeMap, buffer) {
    return TrieNode_init_$Init$(dataMap, nodeMap, buffer, objectCreate(protoOf(TrieNode)));
  }
  function ModificationResult(node, sizeDelta) {
    this.a1k_1 = node;
    this.b1k_1 = sizeDelta;
  }
  function asInsertResult($this) {
    return new ModificationResult($this, 1);
  }
  function asUpdateResult($this) {
    return new ModificationResult($this, 0);
  }
  function hasNodeAt($this, positionMask) {
    return !(($this.u1j_1 & positionMask) === 0);
  }
  function keyAtIndex($this, keyIndex) {
    var tmp = $this.w1j_1[keyIndex];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  function valueAtKeyIndex($this, keyIndex) {
    var tmp = $this.w1j_1[keyIndex + 1 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  function insertEntryAt($this, positionMask, key, value) {
    var keyIndex = $this.l1l(positionMask);
    var newBuffer = insertEntryAtIndex($this.w1j_1, keyIndex, key, value);
    return TrieNode_init_$Create$($this.t1j_1 | positionMask, $this.u1j_1, newBuffer);
  }
  function mutableInsertEntryAt($this, positionMask, key, value, owner) {
    var keyIndex = $this.l1l(positionMask);
    if ($this.v1j_1 === owner) {
      $this.w1j_1 = insertEntryAtIndex($this.w1j_1, keyIndex, key, value);
      $this.t1j_1 = $this.t1j_1 | positionMask;
      return $this;
    }
    var newBuffer = insertEntryAtIndex($this.w1j_1, keyIndex, key, value);
    return new TrieNode($this.t1j_1 | positionMask, $this.u1j_1, newBuffer, owner);
  }
  function updateValueAtIndex($this, keyIndex, value) {
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = $this.w1j_1.slice();
    newBuffer[keyIndex + 1 | 0] = value;
    return TrieNode_init_$Create$($this.t1j_1, $this.u1j_1, newBuffer);
  }
  function mutableUpdateValueAtIndex($this, keyIndex, value, mutator) {
    if ($this.v1j_1 === mutator.i1k_1) {
      $this.w1j_1[keyIndex + 1 | 0] = value;
      return $this;
    }
    mutator.l1k_1 = mutator.l1k_1 + 1 | 0;
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = $this.w1j_1.slice();
    newBuffer[keyIndex + 1 | 0] = value;
    return new TrieNode($this.t1j_1, $this.u1j_1, newBuffer, mutator.i1k_1);
  }
  function updateNodeAtIndex($this, nodeIndex, positionMask, newNode) {
    var newNodeBuffer = newNode.w1j_1;
    if (newNodeBuffer.length === 2 ? newNode.u1j_1 === 0 : false) {
      if ($this.w1j_1.length === 1) {
        newNode.t1j_1 = $this.u1j_1;
        return newNode;
      }
      var keyIndex = $this.l1l(positionMask);
      var newBuffer = replaceNodeWithEntry($this.w1j_1, nodeIndex, keyIndex, newNodeBuffer[0], newNodeBuffer[1]);
      return TrieNode_init_$Create$($this.t1j_1 ^ positionMask, $this.u1j_1 ^ positionMask, newBuffer);
    }
    var newBuffer_0 = copyOf_0($this.w1j_1, $this.w1j_1.length);
    newBuffer_0[nodeIndex] = newNode;
    return TrieNode_init_$Create$($this.t1j_1, $this.u1j_1, newBuffer_0);
  }
  function mutableUpdateNodeAtIndex($this, nodeIndex, newNode, owner) {
    if (($this.w1j_1.length === 1 ? newNode.w1j_1.length === 2 : false) ? newNode.u1j_1 === 0 : false) {
      newNode.t1j_1 = $this.u1j_1;
      return newNode;
    }
    if ($this.v1j_1 === owner) {
      $this.w1j_1[nodeIndex] = newNode;
      return $this;
    }
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = $this.w1j_1.slice();
    newBuffer[nodeIndex] = newNode;
    return new TrieNode($this.t1j_1, $this.u1j_1, newBuffer, owner);
  }
  function removeNodeAtIndex($this, nodeIndex, positionMask) {
    if ($this.w1j_1.length === 1)
      return null;
    var newBuffer = removeNodeAtIndex_0($this.w1j_1, nodeIndex);
    return TrieNode_init_$Create$($this.t1j_1, $this.u1j_1 ^ positionMask, newBuffer);
  }
  function mutableRemoveNodeAtIndex($this, nodeIndex, positionMask, owner) {
    if ($this.w1j_1.length === 1)
      return null;
    if ($this.v1j_1 === owner) {
      $this.w1j_1 = removeNodeAtIndex_0($this.w1j_1, nodeIndex);
      $this.u1j_1 = $this.u1j_1 ^ positionMask;
      return $this;
    }
    var newBuffer = removeNodeAtIndex_0($this.w1j_1, nodeIndex);
    return new TrieNode($this.t1j_1, $this.u1j_1 ^ positionMask, newBuffer, owner);
  }
  function bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    var storedKey = keyAtIndex($this, keyIndex);
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = storedKey == null ? null : hashCode(storedKey);
    var storedKeyHash = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var storedValue = valueAtKeyIndex($this, keyIndex);
    var newNode = makeNode($this, storedKeyHash, storedKey, storedValue, newKeyHash, newKey, newValue, shift + 5 | 0, owner);
    var nodeIndex = $this.o1l(positionMask) + 1 | 0;
    return replaceEntryWithNode($this.w1j_1, keyIndex, nodeIndex, newNode);
  }
  function moveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift) {
    var newBuffer = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, null);
    return TrieNode_init_$Create$($this.t1j_1 ^ positionMask, $this.u1j_1 | positionMask, newBuffer);
  }
  function mutableMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    if ($this.v1j_1 === owner) {
      $this.w1j_1 = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner);
      $this.t1j_1 = $this.t1j_1 ^ positionMask;
      $this.u1j_1 = $this.u1j_1 | positionMask;
      return $this;
    }
    var newBuffer = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner);
    return new TrieNode($this.t1j_1 ^ positionMask, $this.u1j_1 | positionMask, newBuffer, owner);
  }
  function makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift, owner) {
    if (shift > 30) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = [key1, value1, key2, value2];
      return new TrieNode(0, 0, tmp$ret$2, owner);
    }
    var setBit1 = indexSegment_0(keyHash1, shift);
    var setBit2 = indexSegment_0(keyHash2, shift);
    if (!(setBit1 === setBit2)) {
      var tmp;
      if (setBit1 < setBit2) {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = [key1, value1, key2, value2];
      } else {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = [key2, value2, key1, value1];
      }
      var nodeBuffer = tmp;
      return new TrieNode(1 << setBit1 | 1 << setBit2, 0, nodeBuffer, owner);
    }
    var node = makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift + 5 | 0, owner);
    var tmp_0 = 1 << setBit1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$11 = [node];
    return new TrieNode(0, tmp_0, tmp$ret$11, owner);
  }
  function removeEntryAtIndex($this, keyIndex, positionMask) {
    if ($this.w1j_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.w1j_1, keyIndex);
    return TrieNode_init_$Create$($this.t1j_1 ^ positionMask, $this.u1j_1, newBuffer);
  }
  function mutableRemoveEntryAtIndex($this, keyIndex, positionMask, mutator) {
    var tmp1 = mutator.j();
    mutator.n1k(tmp1 - 1 | 0);
    mutator.k1k_1 = valueAtKeyIndex($this, keyIndex);
    if ($this.w1j_1.length === 2)
      return null;
    if ($this.v1j_1 === mutator.i1k_1) {
      $this.w1j_1 = removeEntryAtIndex_0($this.w1j_1, keyIndex);
      $this.t1j_1 = $this.t1j_1 ^ positionMask;
      return $this;
    }
    var newBuffer = removeEntryAtIndex_0($this.w1j_1, keyIndex);
    return new TrieNode($this.t1j_1 ^ positionMask, $this.u1j_1, newBuffer, mutator.i1k_1);
  }
  function collisionRemoveEntryAtIndex($this, i) {
    if ($this.w1j_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.w1j_1, i);
    return TrieNode_init_$Create$(0, 0, newBuffer);
  }
  function mutableCollisionRemoveEntryAtIndex($this, i, mutator) {
    var tmp1 = mutator.j();
    mutator.n1k(tmp1 - 1 | 0);
    mutator.k1k_1 = valueAtKeyIndex($this, i);
    if ($this.w1j_1.length === 2)
      return null;
    if ($this.v1j_1 === mutator.i1k_1) {
      $this.w1j_1 = removeEntryAtIndex_0($this.w1j_1, i);
      return $this;
    }
    var newBuffer = removeEntryAtIndex_0($this.w1j_1, i);
    return new TrieNode(0, 0, newBuffer, mutator.i1k_1);
  }
  function collisionContainsKey($this, key) {
    var progression = step(until(0, $this.w1j_1.length), 2);
    var inductionVariable = progression.z9_1;
    var last = progression.aa_1;
    var step_0 = progression.ba_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, $this.w1j_1[i]))
          return true;
      }
       while (!(i === last));
    return false;
  }
  function collisionGet($this, key) {
    var progression = step(until(0, $this.w1j_1.length), 2);
    var inductionVariable = progression.z9_1;
    var last = progression.aa_1;
    var step_0 = progression.ba_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return valueAtKeyIndex($this, i);
        }
      }
       while (!(i === last));
    return null;
  }
  function collisionPut($this, key, value) {
    var progression = step(until(0, $this.w1j_1.length), 2);
    var inductionVariable = progression.z9_1;
    var last = progression.aa_1;
    var step_0 = progression.ba_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          if (value === valueAtKeyIndex($this, i)) {
            return null;
          }
          // Inline function 'kotlin.collections.copyOf' call
          // Inline function 'kotlin.js.asDynamic' call
          var newBuffer = $this.w1j_1.slice();
          newBuffer[i + 1 | 0] = value;
          return asUpdateResult(TrieNode_init_$Create$(0, 0, newBuffer));
        }
      }
       while (!(i === last));
    var newBuffer_0 = insertEntryAtIndex($this.w1j_1, 0, key, value);
    return asInsertResult(TrieNode_init_$Create$(0, 0, newBuffer_0));
  }
  function mutableCollisionPut($this, key, value, mutator) {
    var progression = step(until(0, $this.w1j_1.length), 2);
    var inductionVariable = progression.z9_1;
    var last = progression.aa_1;
    var step_0 = progression.ba_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          mutator.k1k_1 = valueAtKeyIndex($this, i);
          if ($this.v1j_1 === mutator.i1k_1) {
            $this.w1j_1[i + 1 | 0] = value;
            return $this;
          }
          mutator.l1k_1 = mutator.l1k_1 + 1 | 0;
          // Inline function 'kotlin.collections.copyOf' call
          // Inline function 'kotlin.js.asDynamic' call
          var newBuffer = $this.w1j_1.slice();
          newBuffer[i + 1 | 0] = value;
          return new TrieNode(0, 0, newBuffer, mutator.i1k_1);
        }
      }
       while (!(i === last));
    var tmp4 = mutator.j();
    mutator.n1k(tmp4 + 1 | 0);
    var newBuffer_0 = insertEntryAtIndex($this.w1j_1, 0, key, value);
    return new TrieNode(0, 0, newBuffer_0, mutator.i1k_1);
  }
  function collisionRemove($this, key) {
    var progression = step(until(0, $this.w1j_1.length), 2);
    var inductionVariable = progression.z9_1;
    var last = progression.aa_1;
    var step_0 = progression.ba_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return collisionRemoveEntryAtIndex($this, i);
        }
      }
       while (!(i === last));
    return $this;
  }
  function mutableCollisionRemove($this, key, mutator) {
    var progression = step(until(0, $this.w1j_1.length), 2);
    var inductionVariable = progression.z9_1;
    var last = progression.aa_1;
    var step_0 = progression.ba_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return mutableCollisionRemoveEntryAtIndex($this, i, mutator);
        }
      }
       while (!(i === last));
    return $this;
  }
  function mutableCollisionRemove_0($this, key, value, mutator) {
    var progression = step(until(0, $this.w1j_1.length), 2);
    var inductionVariable = progression.z9_1;
    var last = progression.aa_1;
    var step_0 = progression.ba_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i)) ? equals(value, valueAtKeyIndex($this, i)) : false) {
          return mutableCollisionRemoveEntryAtIndex($this, i, mutator);
        }
      }
       while (!(i === last));
    return $this;
  }
  function mutableCollisionPutAll($this, otherNode, intersectionCounter, owner) {
    assert($this.u1j_1 === 0);
    assert($this.t1j_1 === 0);
    assert(otherNode.u1j_1 === 0);
    assert(otherNode.t1j_1 === 0);
    var tempBuffer = copyOf_0($this.w1j_1, $this.w1j_1.length + otherNode.w1j_1.length | 0);
    var i = $this.w1j_1.length;
    var progression = step(until(0, otherNode.w1j_1.length), 2);
    var inductionVariable = progression.z9_1;
    var last = progression.aa_1;
    var step_0 = progression.ba_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var j = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        var tmp = otherNode.w1j_1[j];
        if (!collisionContainsKey($this, (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE())) {
          tempBuffer[i] = otherNode.w1j_1[j];
          tempBuffer[i + 1 | 0] = otherNode.w1j_1[j + 1 | 0];
          i = i + 2 | 0;
        } else {
          intersectionCounter.q1k_1 = intersectionCounter.q1k_1 + 1 | 0;
        }
      }
       while (!(j === last));
    var newSize = i;
    return newSize === $this.w1j_1.length ? $this : newSize === otherNode.w1j_1.length ? otherNode : newSize === tempBuffer.length ? new TrieNode(0, 0, tempBuffer, owner) : new TrieNode(0, 0, copyOf_0(tempBuffer, newSize), owner);
  }
  function mutablePutAllFromOtherNodeCell($this, otherNode, positionMask, shift, intersectionCounter, mutator) {
    var tmp;
    if (hasNodeAt($this, positionMask)) {
      var targetNode = $this.p1l($this.o1l(positionMask));
      var tmp_0;
      if (hasNodeAt(otherNode, positionMask)) {
        var otherTargetNode = otherNode.p1l(otherNode.o1l(positionMask));
        tmp_0 = targetNode.p1k(otherTargetNode, shift + 5 | 0, intersectionCounter, mutator);
      } else if (otherNode.n1l(positionMask)) {
        var keyIndex = otherNode.l1l(positionMask);
        var key = keyAtIndex(otherNode, keyIndex);
        var value = valueAtKeyIndex(otherNode, keyIndex);
        var oldSize = mutator.j();
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.hashCode' call
        var tmp1_elvis_lhs = key == null ? null : hashCode(key);
        var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
        var this_0 = targetNode.o1k(tmp$ret$0, key, value, shift + 5 | 0, mutator);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAllFromOtherNodeCell.<anonymous>' call
        if (mutator.j() === oldSize) {
          intersectionCounter.q1k_1 = intersectionCounter.q1k_1 + 1 | 0;
        }
        tmp_0 = this_0;
      } else {
        tmp_0 = targetNode;
      }
      tmp = tmp_0;
    } else if (hasNodeAt(otherNode, positionMask)) {
      var otherTargetNode_0 = otherNode.p1l(otherNode.o1l(positionMask));
      var tmp_1;
      if ($this.n1l(positionMask)) {
        var keyIndex_0 = $this.l1l(positionMask);
        var key_0 = keyAtIndex($this, keyIndex_0);
        var tmp_2;
        // Inline function 'kotlin.hashCode' call
        var tmp1_elvis_lhs_0 = key_0 == null ? null : hashCode(key_0);
        var tmp$ret$2 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
        if (otherTargetNode_0.x1j(tmp$ret$2, key_0, shift + 5 | 0)) {
          intersectionCounter.q1k_1 = intersectionCounter.q1k_1 + 1 | 0;
          tmp_2 = otherTargetNode_0;
        } else {
          var value_0 = valueAtKeyIndex($this, keyIndex_0);
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs_1 = key_0 == null ? null : hashCode(key_0);
          var tmp$ret$3 = tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1;
          tmp_2 = otherTargetNode_0.o1k(tmp$ret$3, key_0, value_0, shift + 5 | 0, mutator);
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = otherTargetNode_0;
      }
      tmp = tmp_1;
    } else {
      var thisKeyIndex = $this.l1l(positionMask);
      var thisKey = keyAtIndex($this, thisKeyIndex);
      var thisValue = valueAtKeyIndex($this, thisKeyIndex);
      var otherKeyIndex = otherNode.l1l(positionMask);
      var otherKey = keyAtIndex(otherNode, otherKeyIndex);
      var otherValue = valueAtKeyIndex(otherNode, otherKeyIndex);
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs_2 = thisKey == null ? null : hashCode(thisKey);
      var tmp_3 = tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2;
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs_3 = otherKey == null ? null : hashCode(otherKey);
      var tmp$ret$5 = tmp1_elvis_lhs_3 == null ? 0 : tmp1_elvis_lhs_3;
      tmp = makeNode($this, tmp_3, thisKey, thisValue, tmp$ret$5, otherKey, otherValue, shift + 5 | 0, mutator.i1k_1);
    }
    return tmp;
  }
  function calculateSize($this) {
    if ($this.u1j_1 === 0)
      return $this.w1j_1.length / 2 | 0;
    var numValues = countOneBits($this.t1j_1);
    var result = numValues;
    var inductionVariable = imul(numValues, 2);
    var last = $this.w1j_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = result + calculateSize($this.p1l(i)) | 0;
      }
       while (inductionVariable < last);
    return result;
  }
  function elementsIdentityEquals($this, otherNode) {
    if ($this === otherNode)
      return true;
    if (!($this.u1j_1 === otherNode.u1j_1))
      return false;
    if (!($this.t1j_1 === otherNode.t1j_1))
      return false;
    var inductionVariable = 0;
    var last = $this.w1j_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!($this.w1j_1[i] === otherNode.w1j_1[i]))
          return false;
      }
       while (inductionVariable < last);
    return true;
  }
  function replaceNode($this, targetNode, newNode, nodeIndex, positionMask) {
    return newNode == null ? removeNodeAtIndex($this, nodeIndex, positionMask) : !(targetNode === newNode) ? updateNodeAtIndex($this, nodeIndex, positionMask, newNode) : $this;
  }
  function mutableReplaceNode($this, targetNode, newNode, nodeIndex, positionMask, owner) {
    return newNode == null ? mutableRemoveNodeAtIndex($this, nodeIndex, positionMask, owner) : ($this.v1j_1 === owner ? true : !(targetNode === newNode)) ? mutableUpdateNodeAtIndex($this, nodeIndex, newNode, owner) : $this;
  }
  function Companion_6() {
    Companion_instance_7 = this;
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    tmp.n1j_1 = TrieNode_init_$Create$(0, 0, tmp$ret$0);
  }
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_6();
    return Companion_instance_7;
  }
  function TrieNode(dataMap, nodeMap, buffer, ownedBy) {
    Companion_getInstance_7();
    this.t1j_1 = dataMap;
    this.u1j_1 = nodeMap;
    this.v1j_1 = ownedBy;
    this.w1j_1 = buffer;
  }
  protoOf(TrieNode).m1l = function () {
    return countOneBits(this.t1j_1);
  };
  protoOf(TrieNode).n1l = function (positionMask) {
    return !((this.t1j_1 & positionMask) === 0);
  };
  protoOf(TrieNode).l1l = function (positionMask) {
    return imul(2, countOneBits(this.t1j_1 & (positionMask - 1 | 0)));
  };
  protoOf(TrieNode).o1l = function (positionMask) {
    return (this.w1j_1.length - 1 | 0) - countOneBits(this.u1j_1 & (positionMask - 1 | 0)) | 0;
  };
  protoOf(TrieNode).p1l = function (nodeIndex) {
    var tmp = this.w1j_1[nodeIndex];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNode).x1j = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.n1l(keyPositionMask)) {
      return equals(key, keyAtIndex(this, this.l1l(keyPositionMask)));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.p1l(this.o1l(keyPositionMask));
      if (shift === 30) {
        return collisionContainsKey(targetNode, key);
      }
      return targetNode.x1j(keyHash, key, shift + 5 | 0);
    }
    return false;
  };
  protoOf(TrieNode).y1j = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.n1l(keyPositionMask)) {
      var keyIndex = this.l1l(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return valueAtKeyIndex(this, keyIndex);
      }
      return null;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.p1l(this.o1l(keyPositionMask));
      if (shift === 30) {
        return collisionGet(targetNode, key);
      }
      return targetNode.y1j(keyHash, key, shift + 5 | 0);
    }
    return null;
  };
  protoOf(TrieNode).p1k = function (otherNode, shift, intersectionCounter, mutator) {
    if (this === otherNode) {
      intersectionCounter.w1m(calculateSize(this));
      return this;
    }
    if (shift > 30) {
      return mutableCollisionPutAll(this, otherNode, intersectionCounter, mutator.i1k_1);
    }
    var newNodeMap = this.u1j_1 | otherNode.u1j_1;
    var newDataMap = (this.t1j_1 ^ otherNode.t1j_1) & ~newNodeMap;
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.internal.forEachOneBit' call
    var mask = this.t1j_1 & otherNode.t1j_1;
    var index = 0;
    while (!(mask === 0)) {
      var bit = takeLowestOneBit(mask);
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAll.<anonymous>' call
      var leftKey = keyAtIndex(this, this.l1l(bit));
      var rightKey = keyAtIndex(otherNode, otherNode.l1l(bit));
      if (equals(leftKey, rightKey))
        newDataMap = newDataMap | bit;
      else
        newNodeMap = newNodeMap | bit;
      index = index + 1 | 0;
      mask = mask ^ bit;
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((newNodeMap & newDataMap) === 0)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp;
    if ((equals(this.v1j_1, mutator.i1k_1) ? this.t1j_1 === newDataMap : false) ? this.u1j_1 === newNodeMap : false) {
      tmp = this;
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      var size = imul(countOneBits(newDataMap), 2) + countOneBits(newNodeMap) | 0;
      var newBuffer = fillArrayVal(Array(size), null);
      tmp = TrieNode_init_$Create$(newDataMap, newNodeMap, newBuffer);
    }
    var mutableNode = tmp;
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.internal.forEachOneBit' call
    var mask_0 = newNodeMap;
    var index_0 = 0;
    while (!(mask_0 === 0)) {
      var bit_0 = takeLowestOneBit(mask_0);
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAll.<anonymous>' call
      var index_1 = index_0;
      var newNodeIndex = (mutableNode.w1j_1.length - 1 | 0) - index_1 | 0;
      mutableNode.w1j_1[newNodeIndex] = mutablePutAllFromOtherNodeCell(this, otherNode, bit_0, shift, intersectionCounter, mutator);
      index_0 = index_0 + 1 | 0;
      mask_0 = mask_0 ^ bit_0;
    }
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.internal.forEachOneBit' call
    var mask_1 = newDataMap;
    var index_2 = 0;
    while (!(mask_1 === 0)) {
      var bit_1 = takeLowestOneBit(mask_1);
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAll.<anonymous>' call
      var index_3 = index_2;
      var newKeyIndex = imul(index_3, 2);
      if (!otherNode.n1l(bit_1)) {
        var oldKeyIndex = this.l1l(bit_1);
        mutableNode.w1j_1[newKeyIndex] = keyAtIndex(this, oldKeyIndex);
        mutableNode.w1j_1[newKeyIndex + 1 | 0] = valueAtKeyIndex(this, oldKeyIndex);
      } else {
        var oldKeyIndex_0 = otherNode.l1l(bit_1);
        mutableNode.w1j_1[newKeyIndex] = keyAtIndex(otherNode, oldKeyIndex_0);
        mutableNode.w1j_1[newKeyIndex + 1 | 0] = valueAtKeyIndex(otherNode, oldKeyIndex_0);
        if (this.n1l(bit_1)) {
          intersectionCounter.q1k_1 = intersectionCounter.q1k_1 + 1 | 0;
        }
      }
      index_2 = index_2 + 1 | 0;
      mask_1 = mask_1 ^ bit_1;
    }
    return elementsIdentityEquals(this, mutableNode) ? this : elementsIdentityEquals(otherNode, mutableNode) ? otherNode : mutableNode;
  };
  protoOf(TrieNode).z1j = function (keyHash, key, value, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.n1l(keyPositionMask)) {
      var keyIndex = this.l1l(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        if (valueAtKeyIndex(this, keyIndex) === value)
          return null;
        return asUpdateResult(updateValueAtIndex(this, keyIndex, value));
      }
      return asInsertResult(moveEntryToNode(this, keyIndex, keyPositionMask, keyHash, key, value, shift));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.o1l(keyPositionMask);
      var targetNode = this.p1l(nodeIndex);
      var tmp;
      if (shift === 30) {
        var tmp0_elvis_lhs = collisionPut(targetNode, key, value);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp = tmp_0;
      } else {
        var tmp1_elvis_lhs = targetNode.z1j(keyHash, key, value, shift + 5 | 0);
        var tmp_1;
        if (tmp1_elvis_lhs == null) {
          return null;
        } else {
          tmp_1 = tmp1_elvis_lhs;
        }
        tmp = tmp_1;
      }
      var putResult = tmp;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode' call
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode.<anonymous>' call
      var tmp_2 = putResult;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.put.<anonymous>' call
      var node = putResult.a1k_1;
      tmp_2.a1k_1 = updateNodeAtIndex(this, nodeIndex, keyPositionMask, node);
      return putResult;
    }
    return asInsertResult(insertEntryAt(this, keyPositionMask, key, value));
  };
  protoOf(TrieNode).o1k = function (keyHash, key, value, shift, mutator) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.n1l(keyPositionMask)) {
      var keyIndex = this.l1l(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        mutator.k1k_1 = valueAtKeyIndex(this, keyIndex);
        if (valueAtKeyIndex(this, keyIndex) === value) {
          return this;
        }
        return mutableUpdateValueAtIndex(this, keyIndex, value, mutator);
      }
      var tmp1 = mutator.j();
      mutator.n1k(tmp1 + 1 | 0);
      return mutableMoveEntryToNode(this, keyIndex, keyPositionMask, keyHash, key, value, shift, mutator.i1k_1);
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.o1l(keyPositionMask);
      var targetNode = this.p1l(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionPut(targetNode, key, value, mutator);
      } else {
        tmp = targetNode.o1k(keyHash, key, value, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      if (targetNode === newNode) {
        return this;
      }
      return mutableUpdateNodeAtIndex(this, nodeIndex, newNode, mutator.i1k_1);
    }
    var tmp3 = mutator.j();
    mutator.n1k(tmp3 + 1 | 0);
    return mutableInsertEntryAt(this, keyPositionMask, key, value, mutator.i1k_1);
  };
  protoOf(TrieNode).c1k = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.n1l(keyPositionMask)) {
      var keyIndex = this.l1l(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return removeEntryAtIndex(this, keyIndex, keyPositionMask);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.o1l(keyPositionMask);
      var targetNode = this.p1l(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = collisionRemove(targetNode, key);
      } else {
        tmp = targetNode.c1k(keyHash, key, shift + 5 | 0);
      }
      var newNode = tmp;
      return replaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask);
    }
    return this;
  };
  protoOf(TrieNode).r1k = function (keyHash, key, shift, mutator) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.n1l(keyPositionMask)) {
      var keyIndex = this.l1l(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return mutableRemoveEntryAtIndex(this, keyIndex, keyPositionMask, mutator);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.o1l(keyPositionMask);
      var targetNode = this.p1l(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionRemove(targetNode, key, mutator);
      } else {
        tmp = targetNode.r1k(keyHash, key, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      return mutableReplaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask, mutator.i1k_1);
    }
    return this;
  };
  protoOf(TrieNode).t1k = function (keyHash, key, value, shift, mutator) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.n1l(keyPositionMask)) {
      var keyIndex = this.l1l(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex)) ? equals(value, valueAtKeyIndex(this, keyIndex)) : false) {
        return mutableRemoveEntryAtIndex(this, keyIndex, keyPositionMask, mutator);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.o1l(keyPositionMask);
      var targetNode = this.p1l(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionRemove_0(targetNode, key, value, mutator);
      } else {
        tmp = targetNode.t1k(keyHash, key, value, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      return mutableReplaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask, mutator.i1k_1);
    }
    return this;
  };
  function get_ENTRY_SIZE() {
    return ENTRY_SIZE;
  }
  var ENTRY_SIZE;
  function insertEntryAtIndex(_this__u8e3s4, keyIndex, key, value) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length + 2 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = keyIndex + 2 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, destinationOffset, keyIndex, endIndex);
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function replaceNodeWithEntry(_this__u8e3s4, nodeIndex, keyIndex, key, value) {
    var newBuffer = copyOf_0(_this__u8e3s4, _this__u8e3s4.length + 1 | 0);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = nodeIndex + 2 | 0;
    var startIndex = nodeIndex + 1 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(newBuffer, newBuffer, destinationOffset, startIndex, endIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset_0 = keyIndex + 2 | 0;
    arrayCopy(newBuffer, newBuffer, destinationOffset_0, keyIndex, nodeIndex);
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function removeNodeAtIndex_0(_this__u8e3s4, nodeIndex) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length - 1 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, nodeIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var startIndex = nodeIndex + 1 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, nodeIndex, startIndex, endIndex);
    return newBuffer;
  }
  function get_LOG_MAX_BRANCHING_FACTOR() {
    return LOG_MAX_BRANCHING_FACTOR;
  }
  var LOG_MAX_BRANCHING_FACTOR;
  function replaceEntryWithNode(_this__u8e3s4, keyIndex, nodeIndex, newNode) {
    var newNodeIndex = nodeIndex - 2 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = (_this__u8e3s4.length - 2 | 0) + 1 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var startIndex = keyIndex + 2 | 0;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, startIndex, nodeIndex);
    newBuffer[newNodeIndex] = newNode;
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = newNodeIndex + 1 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, destinationOffset, nodeIndex, endIndex);
    return newBuffer;
  }
  function get_MAX_SHIFT() {
    return MAX_SHIFT;
  }
  var MAX_SHIFT;
  function indexSegment_0(index, shift) {
    return index >> shift & 31;
  }
  function removeEntryAtIndex_0(_this__u8e3s4, keyIndex) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length - 2 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var startIndex = keyIndex + 2 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, startIndex, endIndex);
    return newBuffer;
  }
  function Companion_7() {
    Companion_instance_8 = this;
    this.v1h_1 = new PersistentOrderedSet(EndOfChain_instance, EndOfChain_instance, Companion_getInstance_6().o1j());
  }
  protoOf(Companion_7).w1h = function () {
    return this.v1h_1;
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_7();
    return Companion_instance_8;
  }
  function PersistentOrderedSet(firstElement, lastElement, hashMap) {
    Companion_getInstance_8();
    AbstractSet.call(this);
    this.x1m_1 = firstElement;
    this.y1m_1 = lastElement;
    this.z1m_1 = hashMap;
  }
  protoOf(PersistentOrderedSet).j = function () {
    return this.z1m_1.j();
  };
  protoOf(PersistentOrderedSet).o = function (element) {
    return this.z1m_1.q2(element);
  };
  protoOf(PersistentOrderedSet).u = function (element) {
    if (this.z1m_1.q2(element)) {
      return this;
    }
    if (this.q()) {
      var newMap = this.z1m_1.j2(element, Links_init_$Create$());
      return new PersistentOrderedSet(element, element, newMap);
    }
    var tmp = this.y1m_1;
    var lastElement = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var lastLinks = ensureNotNull(this.z1m_1.t2(lastElement));
    var newMap_0 = this.z1m_1.j2(lastElement, lastLinks.c1n(element)).j2(element, Links_init_$Create$_0(lastElement));
    return new PersistentOrderedSet(this.x1m_1, element, newMap_0);
  };
  protoOf(PersistentOrderedSet).v = function (element) {
    var tmp0_elvis_lhs = this.z1m_1.t2(element);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var links = tmp;
    var newMap = this.z1m_1.n2(element);
    if (links.d1n()) {
      // Inline function 'kotlin.collections.get' call
      var this_0 = newMap;
      var key = links.a1n_1;
      var tmp$ret$0 = (isInterface(this_0, Map) ? this_0 : THROW_CCE()).t2(key);
      var previousLinks = ensureNotNull(tmp$ret$0);
      var tmp_0 = newMap;
      var tmp_1 = links.a1n_1;
      newMap = tmp_0.j2((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE(), previousLinks.c1n(links.b1n_1));
    }
    if (links.f1n()) {
      // Inline function 'kotlin.collections.get' call
      var this_1 = newMap;
      var key_0 = links.b1n_1;
      var tmp$ret$1 = (isInterface(this_1, Map) ? this_1 : THROW_CCE()).t2(key_0);
      var nextLinks = ensureNotNull(tmp$ret$1);
      var tmp_2 = newMap;
      var tmp_3 = links.b1n_1;
      newMap = tmp_2.j2((tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE(), nextLinks.e1n(links.a1n_1));
    }
    var newFirstElement = !links.d1n() ? links.b1n_1 : this.x1m_1;
    var newLastElement = !links.f1n() ? links.a1n_1 : this.y1m_1;
    return new PersistentOrderedSet(newFirstElement, newLastElement, newMap);
  };
  protoOf(PersistentOrderedSet).l = function () {
    return new PersistentOrderedSetIterator(this.x1m_1, this.z1m_1);
  };
  function Links_init_$Init$($this) {
    Links.call($this, EndOfChain_instance, EndOfChain_instance);
    return $this;
  }
  function Links_init_$Create$() {
    return Links_init_$Init$(objectCreate(protoOf(Links)));
  }
  function Links_init_$Init$_0(previous, $this) {
    Links.call($this, previous, EndOfChain_instance);
    return $this;
  }
  function Links_init_$Create$_0(previous) {
    return Links_init_$Init$_0(previous, objectCreate(protoOf(Links)));
  }
  function Links(previous, next) {
    this.a1n_1 = previous;
    this.b1n_1 = next;
  }
  protoOf(Links).c1n = function (newNext) {
    return new Links(this.a1n_1, newNext);
  };
  protoOf(Links).e1n = function (newPrevious) {
    return new Links(newPrevious, this.b1n_1);
  };
  protoOf(Links).f1n = function () {
    return !(this.b1n_1 === EndOfChain_instance);
  };
  protoOf(Links).d1n = function () {
    return !(this.a1n_1 === EndOfChain_instance);
  };
  function checkHasNext_0($this) {
    if (!$this.x())
      throw NoSuchElementException_init_$Create$();
  }
  function PersistentOrderedSetIterator(nextElement, map) {
    this.g1n_1 = nextElement;
    this.h1n_1 = map;
    this.i1n_1 = 0;
  }
  protoOf(PersistentOrderedSetIterator).x = function () {
    return this.i1n_1 < this.h1n_1.j();
  };
  protoOf(PersistentOrderedSetIterator).z = function () {
    checkHasNext_0(this);
    var tmp = this.g1n_1;
    var result = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    this.i1n_1 = this.i1n_1 + 1 | 0;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp0_elvis_lhs = this.h1n_1.t2(result);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      throw ConcurrentModificationException_init_$Create$_0('Hash code of an element (' + result + ') has changed after it was added to the persistent set.');
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp_0.g1n_1 = tmp_1.b1n_1;
    return result;
  };
  function EndOfChain() {
  }
  var EndOfChain_instance;
  function EndOfChain_getInstance() {
    return EndOfChain_instance;
  }
  function ListImplementation() {
  }
  protoOf(ListImplementation).u1 = function (index, size) {
    if (index < 0 ? true : index >= size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  protoOf(ListImplementation).l1 = function (index, size) {
    if (index < 0 ? true : index > size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  var ListImplementation_instance;
  function ListImplementation_getInstance() {
    return ListImplementation_instance;
  }
  function MutabilityOwnership() {
  }
  function DeltaCounter(count) {
    count = count === VOID ? 0 : count;
    this.q1k_1 = count;
  }
  protoOf(DeltaCounter).w1m = function (that) {
    this.q1k_1 = this.q1k_1 + that | 0;
  };
  protoOf(DeltaCounter).toString = function () {
    return 'DeltaCounter(count=' + this.q1k_1 + ')';
  };
  protoOf(DeltaCounter).hashCode = function () {
    return this.q1k_1;
  };
  protoOf(DeltaCounter).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeltaCounter))
      return false;
    var tmp0_other_with_cast = other instanceof DeltaCounter ? other : THROW_CCE();
    if (!(this.q1k_1 === tmp0_other_with_cast.q1k_1))
      return false;
    return true;
  };
  function assert(condition) {
  }
  function composableLambdaInstance(key, tracked, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new ComposableLambdaImpl(key, tracked);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.internal.composableLambdaInstance.<anonymous>' call
    this_0.o1n(block);
    return this_0;
  }
  function replacableWith(_this__u8e3s4, other) {
    var tmp;
    if (_this__u8e3s4 == null) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      if (_this__u8e3s4 instanceof RecomposeScopeImpl) {
        tmp_1 = other instanceof RecomposeScopeImpl;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = (!_this__u8e3s4.u17() ? true : equals(_this__u8e3s4, other)) ? true : equals(_this__u8e3s4.au_1, other.au_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function differentBits(slot) {
    return bitsForSlot(2, slot);
  }
  function sameBits(slot) {
    return bitsForSlot(1, slot);
  }
  function bitsForSlot(bits, slot) {
    var realSlot = slot % 10 | 0;
    return bits << (imul(realSlot, 3) + 1 | 0);
  }
  function composableLambda(composer, key, tracked, block) {
    composer.mu(key);
    var slot = composer.dv();
    var tmp;
    if (slot === Companion_getInstance_0().gu_1) {
      var value = new ComposableLambdaImpl(key, tracked);
      composer.ev(value);
      tmp = value;
    } else {
      tmp = slot instanceof ComposableLambdaImpl ? slot : THROW_CCE();
    }
    var result = tmp;
    result.o1n(block);
    composer.nu();
    return result;
  }
  function illegalDecoyCallException(fName) {
    throw IllegalStateException_init_$Create$('Function ' + fName + ' should have been replaced by compiler.');
  }
  function Builder(map) {
    PersistentHashMapBuilder.call(this, map);
    this.z1n_1 = map;
    this.a1o_1 = 8;
  }
  protoOf(Builder).a3 = function () {
    var tmp = this;
    var tmp_0;
    if (this.j1k_1 === this.z1n_1.r1j_1) {
      tmp_0 = this.z1n_1;
    } else {
      this.i1k_1 = new MutabilityOwnership();
      tmp_0 = new PersistentCompositionLocalHashMap(this.j1k_1, this.j());
    }
    tmp.z1n_1 = tmp_0;
    return this.z1n_1;
  };
  function Companion_8() {
    Companion_instance_9 = this;
    var tmp = this;
    var tmp_0 = Companion_getInstance_7().n1j_1;
    tmp.b1o_1 = new PersistentCompositionLocalHashMap(tmp_0 instanceof TrieNode ? tmp_0 : THROW_CCE(), 0);
  }
  var Companion_instance_9;
  function Companion_getInstance_9() {
    if (Companion_instance_9 == null)
      new Companion_8();
    return Companion_instance_9;
  }
  function PersistentCompositionLocalHashMap(node, size) {
    Companion_getInstance_9();
    PersistentHashMap.call(this, node, size);
  }
  protoOf(PersistentCompositionLocalHashMap).i2 = function () {
    return protoOf(PersistentHashMap).i2.call(this);
  };
  protoOf(PersistentCompositionLocalHashMap).wz = function () {
    return new Builder(this);
  };
  function persistentCompositionLocalHashMapOf() {
    return Companion_getInstance_9().b1o_1;
  }
  function get_emptyThreadMap() {
    _init_properties_ThreadMap_kt__klyo00();
    return emptyThreadMap;
  }
  var emptyThreadMap;
  function find_3($this, key) {
    var high = $this.k1h_1 - 1 | 0;
    var tmp0_subject = high;
    if (tmp0_subject === -1)
      return -1;
    else if (tmp0_subject === 0)
      return $this.l1h_1[0].equals(key) ? 0 : $this.l1h_1[0].w9(key) > 0 ? -2 : -1;
    var low = 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = $this.l1h_1[mid];
      var comparison = midVal.ab(key);
      if (comparison.w9(new Long(0, 0)) < 0)
        low = mid + 1 | 0;
      else if (comparison.w9(new Long(0, 0)) > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function ThreadMap(size, keys, values) {
    this.k1h_1 = size;
    this.l1h_1 = keys;
    this.m1h_1 = values;
  }
  protoOf(ThreadMap).n1h = function (key) {
    var index = find_3(this, key);
    return index >= 0 ? this.m1h_1[index] : null;
  };
  protoOf(ThreadMap).o1h = function (key, value) {
    var index = find_3(this, key);
    if (index < 0)
      return false;
    this.m1h_1[index] = value;
    return true;
  };
  protoOf(ThreadMap).p1h = function (key, value) {
    var size = this.k1h_1;
    // Inline function 'kotlin.collections.count' call
    var count = 0;
    var indexedObject = this.m1h_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.runtime.internal.ThreadMap.newWith.<anonymous>' call
      if (!(element == null)) {
        count = count + 1 | 0;
      }
    }
    var newSize = count + 1 | 0;
    var newKeys = longArray(newSize);
    // Inline function 'kotlin.arrayOfNulls' call
    var newValues = fillArrayVal(Array(newSize), null);
    if (newSize > 1) {
      var dest = 0;
      var source = 0;
      $l$loop: while (dest < newSize ? source < size : false) {
        var oldKey = this.l1h_1[source];
        var oldValue = this.m1h_1[source];
        if (oldKey.w9(key) > 0) {
          newKeys[dest] = key;
          newValues[dest] = value;
          dest = dest + 1 | 0;
          break $l$loop;
        }
        if (!(oldValue == null)) {
          newKeys[dest] = oldKey;
          newValues[dest] = oldValue;
          dest = dest + 1 | 0;
        }
        source = source + 1 | 0;
      }
      if (source === size) {
        newKeys[newSize - 1 | 0] = key;
        newValues[newSize - 1 | 0] = value;
      } else {
        while (dest < newSize) {
          var oldKey_0 = this.l1h_1[source];
          var oldValue_0 = this.m1h_1[source];
          if (!(oldValue_0 == null)) {
            newKeys[dest] = oldKey_0;
            newValues[dest] = oldValue_0;
            dest = dest + 1 | 0;
          }
          source = source + 1 | 0;
        }
      }
    } else {
      newKeys[0] = key;
      newValues[0] = value;
    }
    return new ThreadMap(newSize, newKeys, newValues);
  };
  var properties_initialized_ThreadMap_kt_kd2vq6;
  function _init_properties_ThreadMap_kt__klyo00() {
    if (!properties_initialized_ThreadMap_kt_kd2vq6) {
      properties_initialized_ThreadMap_kt_kd2vq6 = true;
      var tmp = longArray(0);
      // Inline function 'kotlin.emptyArray' call
      var tmp$ret$0 = [];
      emptyThreadMap = new ThreadMap(0, tmp, tmp$ret$0);
    }
  }
  function fastJoinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return fastJoinTo(_this__u8e3s4, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function fastJoinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.b8(prefix);
    var count = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.j() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = _this__u8e3s4.k(index);
        count = count + 1 | 0;
        if (count > 1) {
          buffer.b8(separator);
        }
        if (limit < 0 ? true : count <= limit) {
          appendElement(buffer, element, transform);
        } else
          break $l$loop;
      }
       while (inductionVariable <= last);
    if (limit >= 0 ? count > limit : false) {
      buffer.b8(truncated);
    }
    buffer.b8(postfix);
    return buffer;
  }
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null)) {
      _this__u8e3s4.b8(transform(element));
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this__u8e3s4.b8(element);
      } else {
        if (element instanceof Char) {
          _this__u8e3s4.u5(element.ze_1);
        } else {
          _this__u8e3s4.b8(toString_0(element));
        }
      }
    }
  }
  function fastToSet(_this__u8e3s4) {
    // Inline function 'kotlin.also' call
    var this_0 = HashSet_init_$Create$_0(_this__u8e3s4.j());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.k(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>.<anonymous>' call
        this_0.u(item);
      }
       while (inductionVariable <= last);
    return this_0;
  }
  function get_emptyLambda() {
    _init_properties_Snapshot_kt__l6n1ng();
    return emptyLambda;
  }
  var emptyLambda;
  function get_threadSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    return threadSnapshot;
  }
  var threadSnapshot;
  function get_lock() {
    _init_properties_Snapshot_kt__l6n1ng();
    return lock;
  }
  var lock;
  function set_openSnapshots(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    openSnapshots = _set____db54di;
  }
  function get_openSnapshots() {
    _init_properties_Snapshot_kt__l6n1ng();
    return openSnapshots;
  }
  var openSnapshots;
  function set_nextSnapshotId(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    nextSnapshotId = _set____db54di;
  }
  function get_nextSnapshotId() {
    _init_properties_Snapshot_kt__l6n1ng();
    return nextSnapshotId;
  }
  var nextSnapshotId;
  function get_pinningTable() {
    _init_properties_Snapshot_kt__l6n1ng();
    return pinningTable;
  }
  var pinningTable;
  function get_extraStateObjects() {
    _init_properties_Snapshot_kt__l6n1ng();
    return extraStateObjects;
  }
  var extraStateObjects;
  function get_applyObservers() {
    _init_properties_Snapshot_kt__l6n1ng();
    return applyObservers;
  }
  var applyObservers;
  function get_globalWriteObservers() {
    _init_properties_Snapshot_kt__l6n1ng();
    return globalWriteObservers;
  }
  var globalWriteObservers;
  function get_currentGlobalSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    return currentGlobalSnapshot;
  }
  var currentGlobalSnapshot;
  function get_snapshotInitializer() {
    _init_properties_Snapshot_kt__l6n1ng();
    return snapshotInitializer;
  }
  var snapshotInitializer;
  function get_pendingApplyObserverCount() {
    _init_properties_Snapshot_kt__l6n1ng();
    return pendingApplyObserverCount;
  }
  var pendingApplyObserverCount;
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0(function_0) {
    this.g1o_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).nj = function () {
    return this.g1o_1();
  };
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(function_0) {
    this.h1o_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).nj = function () {
    return this.h1o_1();
  };
  function Snapshot$Companion$registerApplyObserver$lambda($observer) {
    return function () {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      get_applyObservers().v($observer);
      return Unit_instance;
    };
  }
  function Snapshot$Companion$registerGlobalWriteObserver$lambda($observer) {
    return function () {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.Companion.registerGlobalWriteObserver.<anonymous>.<anonymous>' call
      get_globalWriteObservers().v($observer);
      advanceGlobalSnapshot_0();
      return Unit_instance;
    };
  }
  function Companion_9() {
  }
  protoOf(Companion_9).tr = function () {
    return currentSnapshot();
  };
  protoOf(Companion_9).y1d = function (readObserver, writeObserver) {
    var tmp = currentSnapshot();
    var tmp0_safe_receiver = tmp instanceof MutableSnapshot ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i1o(readObserver, writeObserver);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var message = 'Cannot create a mutable snapshot of an read-only snapshot';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  };
  protoOf(Companion_9).z1f = function (observer) {
    advanceGlobalSnapshot(get_emptyLambda());
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.Companion.registerApplyObserver.<anonymous>' call
    get_applyObservers().u(observer);
    var tmp = Snapshot$Companion$registerApplyObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0(tmp);
  };
  protoOf(Companion_9).j1o = function (observer) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.Companion.registerGlobalWriteObserver.<anonymous>' call
    get_globalWriteObservers().u(observer);
    advanceGlobalSnapshot_0();
    var tmp = Snapshot$Companion$registerGlobalWriteObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(tmp);
  };
  protoOf(Companion_9).z1c = function () {
    return currentSnapshot().z1c();
  };
  protoOf(Companion_9).x1c = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.Companion.sendApplyNotifications.<anonymous>' call
    var tmp0_safe_receiver = get_currentGlobalSnapshot().kl().k1o();
    var changes = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q12()) === true;
    if (changes) {
      advanceGlobalSnapshot_0();
    }
  };
  var Companion_instance_10;
  function Companion_getInstance_10() {
    return Companion_instance_10;
  }
  function Snapshot(id, invalid) {
    this.a13_1 = invalid;
    this.b13_1 = id;
    this.c13_1 = false;
    this.d13_1 = !(id === 0) ? trackPinning(id, this.l1o()) : -1;
    this.e13_1 = 8;
  }
  protoOf(Snapshot).m1o = function (_set____db54di) {
    this.a13_1 = _set____db54di;
  };
  protoOf(Snapshot).l1o = function () {
    return this.a13_1;
  };
  protoOf(Snapshot).n1o = function (_set____db54di) {
    this.b13_1 = _set____db54di;
  };
  protoOf(Snapshot).f13 = function () {
    return this.b13_1;
  };
  protoOf(Snapshot).o1o = function (value) {
    // Inline function 'kotlin.error' call
    var message = 'Updating write count is not supported for this snapshot';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(Snapshot).p1o = function () {
    return 0;
  };
  protoOf(Snapshot).nj = function () {
    this.c13_1 = true;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.r1o();
  };
  protoOf(Snapshot).z1d = function () {
    var previous = get_threadSnapshot().kl();
    get_threadSnapshot().b1a(this);
    return previous;
  };
  protoOf(Snapshot).a1e = function (snapshot) {
    get_threadSnapshot().b1a(snapshot);
  };
  protoOf(Snapshot).v1o = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.w1o();
    this.x1o();
  };
  protoOf(Snapshot).w1o = function () {
    set_openSnapshots(get_openSnapshots().c1p(this.f13()));
  };
  protoOf(Snapshot).x1o = function () {
    this.r1o();
  };
  protoOf(Snapshot).d1p = function () {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.c13_1) {
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.validateNotDisposed.<anonymous>' call
      var message = 'Cannot use a disposed snapshot';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  };
  protoOf(Snapshot).r1o = function () {
    if (this.d13_1 >= 0) {
      releasePinningLocked(this.d13_1);
      this.d13_1 = -1;
    }
  };
  protoOf(Snapshot).e1p = function () {
    // Inline function 'kotlin.also' call
    var this_0 = this.d13_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.Snapshot.takeoverPinnedSnapshot.<anonymous>' call
    this.d13_1 = -1;
    return this_0;
  };
  function StateObject() {
  }
  function GlobalSnapshot$_init_$lambda_36kgl8($it) {
    return function (state) {
      var this_0 = $it;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.j() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.k(index);
          // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(state);
        }
         while (inductionVariable <= last);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function GlobalSnapshot$takeNestedMutableSnapshot$lambda($readObserver, $writeObserver) {
    return function (invalid) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.takeNestedMutableSnapshot.<anonymous>.<anonymous>' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      return new MutableSnapshot(tmp0, invalid, $readObserver, $writeObserver);
    };
  }
  function GlobalSnapshot(id, invalid) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>' call
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!get_globalWriteObservers().q()) {
      tmp = toMutableList(get_globalWriteObservers());
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
      // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>.<anonymous>' call
      var tmp0_elvis_lhs = singleOrNull(tmp0_safe_receiver);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        tmp_1 = GlobalSnapshot$_init_$lambda_36kgl8(tmp0_safe_receiver);
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp_0 = tmp_1;
    }
    var tmp$ret$6 = tmp_0;
    MutableSnapshot.call(this, id, invalid, null, tmp$ret$6);
  }
  protoOf(GlobalSnapshot).i1o = function (readObserver, writeObserver) {
    return takeNewSnapshot(GlobalSnapshot$takeNestedMutableSnapshot$lambda(readObserver, writeObserver));
  };
  protoOf(GlobalSnapshot).z1c = function () {
    advanceGlobalSnapshot_0();
  };
  protoOf(GlobalSnapshot).u1p = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).v1p = function (snapshot) {
    return this.u1p(snapshot);
  };
  protoOf(GlobalSnapshot).w1p = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).x1p = function (snapshot) {
    return this.w1p(snapshot);
  };
  protoOf(GlobalSnapshot).q1e = function () {
    var message = 'Cannot apply the global snapshot directly. Call Snapshot.advanceGlobalSnapshot';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(GlobalSnapshot).nj = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.r1o();
  };
  function trackPinning(id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var pinned = invalid.f1q(id);
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.trackPinning.<anonymous>' call
    return get_pinningTable().l1q(pinned);
  }
  function releasePinningLocked(handle) {
    _init_properties_Snapshot_kt__l6n1ng();
    get_pinningTable().m1q(handle);
  }
  function currentSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp0_elvis_lhs = get_threadSnapshot().kl();
    return tmp0_elvis_lhs == null ? get_currentGlobalSnapshot().kl() : tmp0_elvis_lhs;
  }
  function validateNotApplied($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.o1e_1) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotApplied.<anonymous>' call
      var message = 'Unsupported operation on a snapshot that has been applied';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function validateNotAppliedOrPinned($this) {
    // Inline function 'kotlin.check' call
    var tmp;
    if (!$this.o1e_1) {
      tmp = true;
    } else {
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.isPinned' call
      tmp = $this.d13_1 >= 0;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotAppliedOrPinned.<anonymous>' call
      var message = 'Unsupported operation on a disposed or applied snapshot';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function abandon($this) {
    var modified = $this.k1o();
    if (!(modified == null)) {
      validateNotApplied($this);
      $this.e1q(null);
      var id = $this.f13();
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values = modified.n12_1;
      var inductionVariable = 0;
      var last = modified.m12_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.abandon.<anonymous>' call
          var tmp = values[i];
          var current = (!(tmp == null) ? tmp : THROW_CCE()).h1h();
          while (!(current == null)) {
            if (current.n1q_1 === id ? true : contains($this.l1e_1, current.n1q_1)) {
              current.n1q_1 = 0;
            }
            current = current.o1q_1;
          }
        }
         while (inductionVariable < last);
    }
    $this.v1o();
  }
  function releasePreviouslyPinnedSnapshotsLocked($this) {
    var inductionVariable = 0;
    var last = $this.m1e_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        releasePinningLocked($this.m1e_1[index]);
      }
       while (inductionVariable <= last);
  }
  function Companion_10() {
    Companion_instance_11 = this;
    this.q1q_1 = new Int32Array(0);
  }
  var Companion_instance_11;
  function Companion_getInstance_11() {
    if (Companion_instance_11 == null)
      new Companion_10();
    return Companion_instance_11;
  }
  function MutableSnapshot(id, invalid, readObserver, writeObserver) {
    Companion_getInstance_11();
    Snapshot.call(this, id, invalid);
    this.g1e_1 = readObserver;
    this.h1e_1 = writeObserver;
    this.i1e_1 = 0;
    this.j1e_1 = null;
    this.k1e_1 = null;
    this.l1e_1 = Companion_getInstance_12().r1q_1;
    this.m1e_1 = Companion_getInstance_11().q1q_1;
    this.n1e_1 = 1;
    this.o1e_1 = false;
    this.p1e_1 = 8;
  }
  protoOf(MutableSnapshot).s1o = function () {
    return this.g1e_1;
  };
  protoOf(MutableSnapshot).t1o = function () {
    return this.h1e_1;
  };
  protoOf(MutableSnapshot).i1o = function (readObserver, writeObserver) {
    this.d1p();
    validateNotAppliedOrPinned(this);
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.a1q(this.f13());
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedMutableSnapshot.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedMutableSnapshot.<anonymous>.<anonymous>' call
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var newId = tmp0;
    set_openSnapshots(get_openSnapshots().s1q(newId));
    var currentInvalid = this.l1o();
    this.m1o(currentInvalid.s1q(newId));
    var this_0 = new NestedMutableSnapshot(newId, addRange(currentInvalid, this.f13() + 1 | 0, newId), mergedReadObserver(readObserver, this.s1o()), mergedWriteObserver(writeObserver, this.t1o()), this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.o1e_1 ? !this.c13_1 : false) {
      var previousId = this.f13();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      var tmp0_0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0_0 + 1 | 0);
      this.n1o(tmp0_0);
      set_openSnapshots(get_openSnapshots().s1q(this.f13()));
      this.m1o(addRange(this.l1o(), previousId + 1 | 0, this.f13()));
    }
    return this_0;
  };
  protoOf(MutableSnapshot).q1e = function () {
    var modified = this.k1o();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(get_currentGlobalSnapshot().kl(), this, get_openSnapshots().c1p(get_currentGlobalSnapshot().kl().f13())) : null;
    var observers = emptyList();
    var globalModified = null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    validateOpen(this);
    var tmp;
    if (modified == null ? true : modified.m12_1 === 0) {
      this.w1o();
      var previousGlobalSnapshot = get_currentGlobalSnapshot().kl();
      takeNewGlobalSnapshot(previousGlobalSnapshot, get_emptyLambda());
      var previousModified = previousGlobalSnapshot.k1o();
      var tmp_0;
      // Inline function 'kotlin.collections.isNullOrEmpty' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(previousModified == null ? true : previousModified.q())) {
        observers = toMutableList(get_applyObservers());
        globalModified = previousModified;
        tmp_0 = Unit_instance;
      }
      tmp = tmp_0;
    } else {
      var previousGlobalSnapshot_0 = get_currentGlobalSnapshot().kl();
      var result = this.y1p(get_nextSnapshotId(), optimisticMerges_0, get_openSnapshots().c1p(previousGlobalSnapshot_0.f13()));
      if (!equals(result, Success_getInstance()))
        return result;
      this.w1o();
      takeNewGlobalSnapshot(previousGlobalSnapshot_0, get_emptyLambda());
      var previousModified_0 = previousGlobalSnapshot_0.k1o();
      this.e1q(null);
      previousGlobalSnapshot_0.e1q(null);
      observers = toMutableList(get_applyObservers());
      globalModified = previousModified_0;
      tmp = Unit_instance;
    }
    this.o1e_1 = true;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    var this_0 = globalModified;
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0 == null ? true : this_0.q())) {
      var nonNullGlobalModified = ensureNotNull(globalModified);
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var this_1 = observers;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_1.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_1.k(index);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
          item(nonNullGlobalModified, this);
        }
         while (inductionVariable <= last);
    }
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(modified == null ? true : modified.q())) {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var this_2 = observers;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = this_2.j() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = this_2.k(index_0);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
          item_0(modified, this);
        }
         while (inductionVariable_0 <= last_0);
    }
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.x1o();
    checkAndOverwriteUnusedRecordsLocked();
    var tmp0_safe_receiver = globalModified;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values = tmp0_safe_receiver.n12_1;
      var inductionVariable_1 = 0;
      var last_1 = tmp0_safe_receiver.m12_1;
      if (inductionVariable_1 < last_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
          var tmp_1 = values[i];
          var it = !(tmp_1 == null) ? tmp_1 : THROW_CCE();
          processForUnusedRecordsLocked(it);
        }
         while (inductionVariable_1 < last_1);
    }
    if (modified == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values_0 = modified.n12_1;
      var inductionVariable_2 = 0;
      var last_2 = modified.m12_1;
      if (inductionVariable_2 < last_2)
        do {
          var i_0 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
          var tmp_2 = values_0[i_0];
          var it_0 = !(tmp_2 == null) ? tmp_2 : THROW_CCE();
          processForUnusedRecordsLocked(it_0);
        }
         while (inductionVariable_2 < last_2);
    }
    var tmp2_safe_receiver = this.k1e_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_3 = 0;
      var last_3 = tmp2_safe_receiver.j() - 1 | 0;
      if (inductionVariable_3 <= last_3)
        do {
          var index_1 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          var item_1 = tmp2_safe_receiver.k(index_1);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
          processForUnusedRecordsLocked(item_1);
        }
         while (inductionVariable_3 <= last_3);
    }
    this.k1e_1 = null;
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).q1o = function () {
    return false;
  };
  protoOf(MutableSnapshot).nj = function () {
    if (!this.c13_1) {
      protoOf(Snapshot).nj.call(this);
      this.v1p(this);
    }
  };
  protoOf(MutableSnapshot).x1p = function (snapshot) {
    this.n1e_1 = this.n1e_1 + 1 | 0;
  };
  protoOf(MutableSnapshot).v1p = function (snapshot) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.n1e_1 > 0)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.n1e_1 = this.n1e_1 - 1 | 0;
    if (this.n1e_1 === 0) {
      if (!this.o1e_1) {
        abandon(this);
      }
    }
  };
  protoOf(MutableSnapshot).z1c = function () {
    if (this.o1e_1 ? true : this.c13_1)
      return Unit_instance;
    this.z1p();
  };
  protoOf(MutableSnapshot).w1o = function () {
    set_openSnapshots(get_openSnapshots().c1p(this.f13()).t1q(this.l1e_1));
  };
  protoOf(MutableSnapshot).x1o = function () {
    releasePreviouslyPinnedSnapshotsLocked(this);
    protoOf(Snapshot).x1o.call(this);
  };
  protoOf(MutableSnapshot).y1p = function (snapshotId, optimisticMerges, invalidSnapshots) {
    var mergedRecords = null;
    var start = this.l1o().s1q(this.f13()).u1q(this.l1e_1);
    var modified = ensureNotNull(this.k1o());
    var statesToRemove = null;
    // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var values = modified.n12_1;
    var inductionVariable = 0;
    var last = modified.m12_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        $l$block_0: {
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
          var tmp = values[i];
          var state = !(tmp == null) ? tmp : THROW_CCE();
          var first = state.h1h();
          var tmp0_elvis_lhs = readable(first, snapshotId, invalidSnapshots);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var current = tmp_0;
          var tmp1_elvis_lhs = readable(first, this.f13(), start);
          var tmp_1;
          if (tmp1_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_1 = tmp1_elvis_lhs;
          }
          var previous = tmp_1;
          if (!equals(current, previous)) {
            var tmp2_elvis_lhs = readable(first, this.f13(), this.l1o());
            var tmp_2;
            if (tmp2_elvis_lhs == null) {
              readError();
            } else {
              tmp_2 = tmp2_elvis_lhs;
            }
            var applied = tmp_2;
            var tmp4_elvis_lhs = optimisticMerges == null ? null : optimisticMerges.t2(current);
            var tmp_3;
            if (tmp4_elvis_lhs == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
              tmp_3 = state.j1h(previous, current, applied);
            } else {
              tmp_3 = tmp4_elvis_lhs;
            }
            var merged = tmp_3;
            if (merged == null)
              return new Failure(this);
            else if (!equals(merged, applied))
              if (equals(merged, current)) {
                var tmp6_elvis_lhs = mergedRecords;
                var tmp_4;
                if (tmp6_elvis_lhs == null) {
                  // Inline function 'kotlin.also' call
                  // Inline function 'kotlin.collections.mutableListOf' call
                  var this_0 = ArrayList_init_$Create$();
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                  mergedRecords = this_0;
                  tmp_4 = this_0;
                } else {
                  tmp_4 = tmp6_elvis_lhs;
                }
                tmp_4.u(to(state, current.e1h()));
                var tmp7_elvis_lhs = statesToRemove;
                var tmp_5;
                if (tmp7_elvis_lhs == null) {
                  // Inline function 'kotlin.also' call
                  // Inline function 'kotlin.collections.mutableListOf' call
                  var this_1 = ArrayList_init_$Create$();
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                  statesToRemove = this_1;
                  tmp_5 = this_1;
                } else {
                  tmp_5 = tmp7_elvis_lhs;
                }
                tmp_5.u(state);
              } else {
                var tmp8_elvis_lhs = mergedRecords;
                var tmp_6;
                if (tmp8_elvis_lhs == null) {
                  // Inline function 'kotlin.also' call
                  // Inline function 'kotlin.collections.mutableListOf' call
                  var this_2 = ArrayList_init_$Create$();
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                  mergedRecords = this_2;
                  tmp_6 = this_2;
                } else {
                  tmp_6 = tmp8_elvis_lhs;
                }
                tmp_6.u(!equals(merged, previous) ? to(state, merged) : to(state, previous.e1h()));
              }
          }
        }
      }
       while (inductionVariable < last);
    var tmp0_safe_receiver = mergedRecords;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.z1p();
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = tmp0_safe_receiver.j() - 1 | 0;
      var tmp_7;
      if (inductionVariable_0 <= last_0) {
        do {
          var index = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item = tmp0_safe_receiver.k(index);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
          var state_0 = item.kd();
          var stateRecord = item.ld();
          stateRecord.n1q_1 = this.f13();
          // Inline function 'androidx.compose.runtime.snapshots.sync' call
          // Inline function 'androidx.compose.runtime.synchronized' call
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          get_lock();
          stateRecord.o1q_1 = state_0.h1h();
          state_0.i1h(stateRecord);
        }
         while (inductionVariable_0 <= last_0);
        tmp_7 = Unit_instance;
      }
    }
    var tmp1_safe_receiver = statesToRemove;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_1 = 0;
      var last_1 = tmp1_safe_receiver.j() - 1 | 0;
      if (inductionVariable_1 <= last_1)
        do {
          var index_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var item_0 = tmp1_safe_receiver.k(index_0);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
          modified.t1h(item_0);
        }
         while (inductionVariable_1 <= last_1);
      var mergedList = this.k1e_1;
      this.k1e_1 = mergedList == null ? tmp1_safe_receiver : plus_2(mergedList, tmp1_safe_receiver);
    }
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).z1p = function () {
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.a1q(this.f13());
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.o1e_1 ? !this.c13_1 : false) {
      var previousId = this.f13();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      this.n1o(tmp0);
      set_openSnapshots(get_openSnapshots().s1q(this.f13()));
      this.m1o(addRange(this.l1o(), previousId + 1 | 0, this.f13()));
    }
    return Unit_instance;
  };
  protoOf(MutableSnapshot).a1q = function (id) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.l1e_1 = this.l1e_1.s1q(id);
  };
  protoOf(MutableSnapshot).b1q = function (id) {
    if (id >= 0) {
      var tmp = this;
      // Inline function 'kotlin.collections.plus' call
      // Inline function 'kotlin.collections.plus' call
      var this_0 = this.m1e_1;
      // Inline function 'kotlin.intArrayOf' call
      var elements = new Int32Array([id]);
      tmp.m1e_1 = primitiveArrayConcat([this_0, elements]);
    }
  };
  protoOf(MutableSnapshot).c1q = function (handles) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (handles.length === 0)
      return Unit_instance;
    var pinned = this.m1e_1;
    var tmp = this;
    var tmp_0;
    // Inline function 'kotlin.collections.isEmpty' call
    if (pinned.length === 0) {
      tmp_0 = handles;
    } else {
      // Inline function 'kotlin.collections.plus' call
      tmp_0 = primitiveArrayConcat([pinned, handles]);
    }
    tmp.m1e_1 = tmp_0;
  };
  protoOf(MutableSnapshot).d1q = function (snapshots) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.l1e_1 = this.l1e_1.u1q(snapshots);
  };
  protoOf(MutableSnapshot).u1o = function (state) {
    var tmp0_elvis_lhs = this.k1o();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new IdentityArraySet();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.recordModified.<anonymous>' call
      this.e1q(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.b15(state);
  };
  protoOf(MutableSnapshot).o1o = function (_set____db54di) {
    this.i1e_1 = _set____db54di;
  };
  protoOf(MutableSnapshot).p1o = function () {
    return this.i1e_1;
  };
  protoOf(MutableSnapshot).e1q = function (_set____db54di) {
    this.j1e_1 = _set____db54di;
  };
  protoOf(MutableSnapshot).k1o = function () {
    return this.j1e_1;
  };
  function Success() {
    Success_instance = this;
    SnapshotApplyResult.call(this);
    this.w1q_1 = 0;
  }
  var Success_instance;
  function Success_getInstance() {
    if (Success_instance == null)
      new Success();
    return Success_instance;
  }
  function Failure(snapshot) {
    SnapshotApplyResult.call(this);
    this.y1q_1 = snapshot;
    this.z1q_1 = 8;
  }
  function SnapshotApplyResult() {
    this.a1r_1 = 0;
  }
  function advanceGlobalSnapshot(block) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp = get_snapshotInitializer();
    var previousGlobalSnapshot = tmp instanceof GlobalSnapshot ? tmp : THROW_CCE();
    var modified = null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
    previousGlobalSnapshot = get_currentGlobalSnapshot().kl();
    modified = previousGlobalSnapshot.k1o();
    if (!(modified == null)) {
      get_pendingApplyObserverCount().l1q(1);
    }
    var result = takeNewGlobalSnapshot(previousGlobalSnapshot, block);
    var tmp0_safe_receiver = modified;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      try {
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        get_lock();
        // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>.<anonymous>' call
        var observers = toMutableList(get_applyObservers());
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = observers.j() - 1 | 0;
        var tmp_1;
        if (inductionVariable <= last) {
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = observers.k(index);
            // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>.<anonymous>' call
            item(tmp0_safe_receiver, previousGlobalSnapshot);
          }
           while (inductionVariable <= last);
          tmp_1 = Unit_instance;
        }
        tmp_0 = tmp_1;
      }finally {
        get_pendingApplyObserverCount().l1q(-1);
      }
    }
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
    checkAndOverwriteUnusedRecordsLocked();
    var tmp0_safe_receiver_0 = modified;
    var tmp_2;
    if (tmp0_safe_receiver_0 == null) {
      tmp_2 = null;
    } else {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values = tmp0_safe_receiver_0.n12_1;
      var inductionVariable_0 = 0;
      var last_0 = tmp0_safe_receiver_0.m12_1;
      if (inductionVariable_0 < last_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>.<anonymous>' call
          var tmp_3 = values[i];
          var it = !(tmp_3 == null) ? tmp_3 : THROW_CCE();
          processForUnusedRecordsLocked(it);
        }
         while (inductionVariable_0 < last_0);
      tmp_2 = Unit_instance;
    }
    return result;
  }
  function advanceGlobalSnapshot_0() {
    _init_properties_Snapshot_kt__l6n1ng();
    return advanceGlobalSnapshot(advanceGlobalSnapshot$lambda);
  }
  function StateRecord() {
    this.n1q_1 = currentSnapshot().f13();
    this.o1q_1 = null;
    this.p1q_1 = 8;
  }
  function takeNewSnapshot(block) {
    _init_properties_Snapshot_kt__l6n1ng();
    return advanceGlobalSnapshot(takeNewSnapshot$lambda(block));
  }
  function deactivate($this) {
    if (!$this.s1r_1) {
      $this.s1r_1 = true;
      $this.r1r_1.v1p($this);
    }
  }
  function NestedMutableSnapshot(id, invalid, readObserver, writeObserver, parent) {
    MutableSnapshot.call(this, id, invalid, readObserver, writeObserver);
    this.r1r_1 = parent;
    this.s1r_1 = false;
    this.r1r_1.x1p(this);
  }
  protoOf(NestedMutableSnapshot).nj = function () {
    if (!this.c13_1) {
      protoOf(MutableSnapshot).nj.call(this);
      deactivate(this);
    }
  };
  protoOf(NestedMutableSnapshot).q1e = function () {
    if (this.r1r_1.o1e_1 ? true : this.r1r_1.c13_1)
      return new Failure(this);
    var modified = this.k1o();
    var id = this.f13();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(this.r1r_1, this, this.r1r_1.l1o()) : null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    validateOpen(this);
    if (modified == null ? true : modified.m12_1 === 0) {
      this.v1o();
    } else {
      var result = this.y1p(this.r1r_1.f13(), optimisticMerges_0, this.r1r_1.l1o());
      if (!equals(result, Success_getInstance()))
        return result;
      var tmp0_safe_receiver = this.r1r_1.k1o();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedMutableSnapshot.apply.<anonymous>.<anonymous>' call
        tmp0_safe_receiver.a1d(modified);
        tmp = tmp0_safe_receiver;
      }
      if (tmp == null) {
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedMutableSnapshot.apply.<anonymous>.<anonymous>' call
        this.r1r_1.e1q(modified);
        this.e1q(null);
      }
    }
    if (this.r1r_1.f13() < id) {
      this.r1r_1.z1p();
    }
    this.r1r_1.m1o(this.r1r_1.l1o().c1p(id).t1q(this.l1e_1));
    this.r1r_1.a1q(id);
    this.r1r_1.b1q(this.e1p());
    this.r1r_1.d1q(this.l1e_1);
    this.r1r_1.c1q(this.m1e_1);
    this.o1e_1 = true;
    deactivate(this);
    return Success_getInstance();
  };
  function addRange(_this__u8e3s4, from, until) {
    _init_properties_Snapshot_kt__l6n1ng();
    var result = _this__u8e3s4;
    var inductionVariable = from;
    if (inductionVariable < until)
      do {
        var invalidId = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = result.s1q(invalidId);
      }
       while (inductionVariable < until);
    return result;
  }
  function mergedReadObserver(readObserver, parentObserver, mergeReadObserver) {
    mergeReadObserver = mergeReadObserver === VOID ? true : mergeReadObserver;
    _init_properties_Snapshot_kt__l6n1ng();
    var parentObserver_0 = mergeReadObserver ? parentObserver : null;
    var tmp;
    if ((!(readObserver == null) ? !(parentObserver_0 == null) : false) ? !equals(readObserver, parentObserver_0) : false) {
      tmp = mergedReadObserver$lambda(readObserver, parentObserver_0);
    } else {
      tmp = readObserver == null ? parentObserver_0 : readObserver;
    }
    return tmp;
  }
  function mergedWriteObserver(writeObserver, parentObserver) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp;
    if ((!(writeObserver == null) ? !(parentObserver == null) : false) ? !equals(writeObserver, parentObserver) : false) {
      tmp = mergedWriteObserver$lambda(writeObserver, parentObserver);
    } else {
      tmp = writeObserver == null ? parentObserver : writeObserver;
    }
    return tmp;
  }
  function optimisticMerges(currentSnapshot, applyingSnapshot, invalidSnapshots) {
    _init_properties_Snapshot_kt__l6n1ng();
    var modified = applyingSnapshot.k1o();
    var id = currentSnapshot.f13();
    if (modified == null)
      return null;
    var start = applyingSnapshot.l1o().s1q(applyingSnapshot.f13()).u1q(applyingSnapshot.l1e_1);
    var result = null;
    // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var values = modified.n12_1;
    var inductionVariable = 0;
    var last = modified.m12_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        $l$block_0: {
          // Inline function 'androidx.compose.runtime.snapshots.optimisticMerges.<anonymous>' call
          var tmp = values[i];
          var state = !(tmp == null) ? tmp : THROW_CCE();
          var first = state.h1h();
          var tmp0_elvis_lhs = readable(first, id, invalidSnapshots);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var current = tmp_0;
          var tmp1_elvis_lhs = readable(first, id, start);
          var tmp_1;
          if (tmp1_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_1 = tmp1_elvis_lhs;
          }
          var previous = tmp_1;
          if (!equals(current, previous)) {
            var tmp2_elvis_lhs = readable(first, applyingSnapshot.f13(), applyingSnapshot.l1o());
            var tmp_2;
            if (tmp2_elvis_lhs == null) {
              readError();
            } else {
              tmp_2 = tmp2_elvis_lhs;
            }
            var applied = tmp_2;
            var merged = state.j1h(previous, current, applied);
            if (!(merged == null)) {
              // Inline function 'kotlin.collections.set' call
              var tmp3_elvis_lhs = result;
              var tmp_3;
              if (tmp3_elvis_lhs == null) {
                // Inline function 'kotlin.also' call
                // Inline function 'kotlin.collections.hashMapOf' call
                var this_0 = HashMap_init_$Create$();
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'androidx.compose.runtime.snapshots.optimisticMerges.<anonymous>.<anonymous>' call
                result = this_0;
                tmp_3 = this_0;
              } else {
                tmp_3 = tmp3_elvis_lhs;
              }
              tmp_3.j2(current, merged);
            } else {
              return null;
            }
          }
        }
      }
       while (inductionVariable < last);
    return result;
  }
  function validateOpen(snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (!get_openSnapshots().k(snapshot.f13())) {
      // Inline function 'kotlin.error' call
      var message = 'Snapshot is not open';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function takeNewGlobalSnapshot(previousGlobalSnapshot, block) {
    _init_properties_Snapshot_kt__l6n1ng();
    var result = block(get_openSnapshots().c1p(previousGlobalSnapshot.f13()));
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var globalId = tmp0;
    set_openSnapshots(get_openSnapshots().c1p(previousGlobalSnapshot.f13()));
    get_currentGlobalSnapshot().w17(new GlobalSnapshot(globalId, get_openSnapshots()));
    previousGlobalSnapshot.nj();
    set_openSnapshots(get_openSnapshots().s1q(globalId));
    return result;
  }
  function checkAndOverwriteUnusedRecordsLocked() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotWeakSet.removeIf' call
    var this_0 = get_extraStateObjects();
    var size = this_0.t1r_1;
    var currentUsed = 0;
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var entry = this_0.v1r_1[i];
        var value = entry == null ? null : entry.kl();
        var tmp;
        if (!(value == null)) {
          // Inline function 'androidx.compose.runtime.snapshots.checkAndOverwriteUnusedRecordsLocked.<anonymous>' call
          tmp = !!overwriteUnusedRecordsLocked(value);
        } else {
          tmp = false;
        }
        if (tmp) {
          if (!(currentUsed === i)) {
            this_0.v1r_1[currentUsed] = entry;
            this_0.u1r_1[currentUsed] = this_0.u1r_1[i];
          }
          currentUsed = currentUsed + 1 | 0;
        }
      }
       while (inductionVariable < size);
    var inductionVariable_0 = currentUsed;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this_0.v1r_1[i_0] = null;
        this_0.u1r_1[i_0] = 0;
      }
       while (inductionVariable_0 < size);
    if (!(currentUsed === size)) {
      this_0.t1r_1 = currentUsed;
    }
  }
  function processForUnusedRecordsLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (overwriteUnusedRecordsLocked(state)) {
      get_extraStateObjects().b15(state);
    }
  }
  function readable(r, id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = r;
    var candidate = null;
    while (!(current == null)) {
      if (valid(current, id, invalid)) {
        candidate = candidate == null ? current : candidate.n1q_1 < current.n1q_1 ? current : candidate;
      }
      current = current.o1q_1;
    }
    if (!(candidate == null)) {
      return candidate instanceof StateRecord ? candidate : THROW_CCE();
    }
    return null;
  }
  function readError() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'kotlin.error' call
    var message = 'Reading a state that was created after the snapshot was taken or in a snapshot that has not yet been applied';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function overwriteUnusedRecordsLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.h1h();
    var overwriteRecord = null;
    var validRecord = null;
    var reuseLimit = get_pinningTable().x1r(get_nextSnapshotId());
    var retainedRecords = 0;
    while (!(current == null)) {
      var currentId = current.n1q_1;
      if (!(currentId === 0)) {
        if (currentId < reuseLimit) {
          if (validRecord == null) {
            validRecord = current;
            retainedRecords = retainedRecords + 1 | 0;
          } else {
            var tmp;
            if (current.n1q_1 < validRecord.n1q_1) {
              tmp = current;
            } else {
              var result = validRecord;
              validRecord = current;
              tmp = result;
            }
            var recordToOverwrite = tmp;
            if (overwriteRecord == null) {
              var tmp$ret$1;
              $l$block: {
                // Inline function 'androidx.compose.runtime.snapshots.findYoungestOr' call
                var this_0 = state.h1h();
                var current_0 = this_0;
                var youngest = this_0;
                while (!(current_0 == null)) {
                  // Inline function 'androidx.compose.runtime.snapshots.overwriteUnusedRecordsLocked.<anonymous>' call
                  if (current_0.n1q_1 >= reuseLimit) {
                    tmp$ret$1 = current_0;
                    break $l$block;
                  }
                  if (youngest.n1q_1 < current_0.n1q_1)
                    youngest = current_0;
                  current_0 = current_0.o1q_1;
                }
                tmp$ret$1 = youngest;
              }
              overwriteRecord = tmp$ret$1;
            }
            recordToOverwrite.n1q_1 = 0;
            recordToOverwrite.d1h(overwriteRecord);
          }
        } else {
          retainedRecords = retainedRecords + 1 | 0;
        }
      }
      current = current.o1q_1;
    }
    return retainedRecords > 1;
  }
  function valid(data, snapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return valid_0(snapshot, data.n1q_1, invalid);
  }
  function valid_0(currentSnapshot, candidateSnapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return (!(candidateSnapshot === 0) ? candidateSnapshot <= currentSnapshot : false) ? !invalid.k(candidateSnapshot) : false;
  }
  function readable_0(_this__u8e3s4, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var snapshot = Companion_instance_10.tr();
    var tmp0_safe_receiver = snapshot.s1o();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(state);
    var tmp1_elvis_lhs = readable(_this__u8e3s4, snapshot.f13(), snapshot.l1o());
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.readable.<anonymous>' call
      var syncSnapshot = Companion_instance_10.tr();
      var tmp_0 = state.h1h();
      var tmp0_elvis_lhs = readable(tmp_0 instanceof StateRecord ? tmp_0 : THROW_CCE(), syncSnapshot.f13(), syncSnapshot.l1o());
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        readError();
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp = tmp_1;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function current(r) {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>' call
    var snapshot = Companion_instance_10.tr();
    var tmp0_elvis_lhs = readable(r, snapshot.f13(), snapshot.l1o());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>.<anonymous>.<anonymous>' call
      var syncSnapshot = Companion_instance_10.tr();
      tmp = readable(r, syncSnapshot.f13(), syncSnapshot.l1o());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      readError();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function notifyWrite(snapshot, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    snapshot.o1o(snapshot.p1o() + 1 | 0);
    var tmp1_safe_receiver = snapshot.t1o();
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver(state);
  }
  function overwritableRecord(_this__u8e3s4, state, snapshot, candidate) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (snapshot.q1o()) {
      snapshot.u1o(state);
    }
    var id = snapshot.f13();
    if (candidate.n1q_1 === id)
      return candidate;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.overwritableRecord.<anonymous>' call
    var newData = newOverwritableRecordLocked(_this__u8e3s4, state);
    newData.n1q_1 = id;
    snapshot.u1o(state);
    return newData;
  }
  function newOverwritableRecordLocked(_this__u8e3s4, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp = usedLocked(state);
    var tmp0_safe_receiver = (tmp == null ? true : tmp instanceof StateRecord) ? tmp : THROW_CCE();
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecordLocked.<anonymous>' call
      tmp0_safe_receiver.n1q_1 = IntCompanionObject_instance.MAX_VALUE;
      tmp_0 = tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var this_0 = _this__u8e3s4.e1h();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecordLocked.<anonymous>' call
      this_0.n1q_1 = IntCompanionObject_instance.MAX_VALUE;
      this_0.o1q_1 = state.h1h();
      state.i1h(this_0 instanceof StateRecord ? this_0 : THROW_CCE());
      var tmp_2 = this_0;
      tmp_1 = tmp_2 instanceof StateRecord ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function usedLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.h1h();
    var validRecord = null;
    var reuseLimit = get_pinningTable().x1r(get_nextSnapshotId()) - 1 | 0;
    var invalid = Companion_getInstance_12().r1q_1;
    while (!(current == null)) {
      var currentId = current.n1q_1;
      if (currentId === 0) {
        return current;
      }
      if (valid(current, reuseLimit, invalid)) {
        if (validRecord == null) {
          validRecord = current;
        } else {
          return current.n1q_1 < validRecord.n1q_1 ? current : validRecord;
        }
      }
      current = current.o1q_1;
    }
    return null;
  }
  function writableRecord(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (snapshot.q1o()) {
      snapshot.u1o(state);
    }
    var id = snapshot.f13();
    var tmp0_elvis_lhs = readable(_this__u8e3s4, id, snapshot.l1o());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      readError();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var readData = tmp;
    if (readData.n1q_1 === snapshot.f13())
      return readData;
    var newData = newWritableRecord(readData, state, snapshot);
    snapshot.u1o(state);
    return newData;
  }
  function newWritableRecord(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.newWritableRecord.<anonymous>' call
    return newWritableRecordLocked(_this__u8e3s4, state, snapshot);
  }
  function newWritableRecordLocked(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    var newData = newOverwritableRecordLocked(_this__u8e3s4, state);
    newData.d1h(_this__u8e3s4);
    newData.n1q_1 = snapshot.f13();
    return newData;
  }
  function emptyLambda$lambda(it) {
    _init_properties_Snapshot_kt__l6n1ng();
    return Unit_instance;
  }
  function advanceGlobalSnapshot$lambda(it) {
    _init_properties_Snapshot_kt__l6n1ng();
    return Unit_instance;
  }
  function takeNewSnapshot$lambda($block) {
    return function (invalid) {
      var result = $block(invalid);
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      set_openSnapshots(get_openSnapshots().s1q(result.f13()));
      return result;
    };
  }
  function mergedReadObserver$lambda($readObserver, $parentObserver) {
    return function (state) {
      $readObserver(state);
      $parentObserver(state);
      return Unit_instance;
    };
  }
  function mergedWriteObserver$lambda($writeObserver, $parentObserver) {
    return function (state) {
      $writeObserver(state);
      $parentObserver(state);
      return Unit_instance;
    };
  }
  var properties_initialized_Snapshot_kt_2vlcoq;
  function _init_properties_Snapshot_kt__l6n1ng() {
    if (!properties_initialized_Snapshot_kt_2vlcoq) {
      properties_initialized_Snapshot_kt_2vlcoq = true;
      emptyLambda = emptyLambda$lambda;
      threadSnapshot = new SnapshotThreadLocal();
      lock = createSynchronizedObject();
      openSnapshots = Companion_getInstance_12().r1q_1;
      nextSnapshotId = 1;
      pinningTable = new SnapshotDoubleIndexHeap();
      extraStateObjects = new SnapshotWeakSet();
      // Inline function 'kotlin.collections.mutableListOf' call
      applyObservers = ArrayList_init_$Create$();
      // Inline function 'kotlin.collections.mutableListOf' call
      globalWriteObservers = ArrayList_init_$Create$();
      // Inline function 'kotlin.also' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      var this_0 = new GlobalSnapshot(tmp0, Companion_getInstance_12().r1q_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.currentGlobalSnapshot.<anonymous>' call
      set_openSnapshots(get_openSnapshots().s1q(this_0.f13()));
      currentGlobalSnapshot = new AtomicReference(this_0);
      snapshotInitializer = get_currentGlobalSnapshot().kl();
      pendingApplyObserverCount = new AtomicInt(0);
    }
  }
  function shiftUp($this, index) {
    var values = $this.h1q_1;
    var value = values[index];
    var current = index;
    $l$loop: while (current > 0) {
      var parent = ((current + 1 | 0) >> 1) - 1 | 0;
      if (values[parent] > value) {
        swap($this, parent, current);
        current = parent;
        continue $l$loop;
      }
      break $l$loop;
    }
  }
  function shiftDown($this, index) {
    var values = $this.h1q_1;
    var half = $this.g1q_1 >> 1;
    var current = index;
    while (current < half) {
      var right = (current + 1 | 0) << 1;
      var left = right - 1 | 0;
      if (right < $this.g1q_1 ? values[right] < values[left] : false) {
        if (values[right] < values[current]) {
          swap($this, right, current);
          current = right;
        } else
          return Unit_instance;
      } else if (values[left] < values[current]) {
        swap($this, left, current);
        current = left;
      } else
        return Unit_instance;
    }
  }
  function swap($this, a, b) {
    var values = $this.h1q_1;
    var index = $this.i1q_1;
    var handles = $this.j1q_1;
    var t = values[a];
    values[a] = values[b];
    values[b] = t;
    t = index[a];
    index[a] = index[b];
    index[b] = t;
    handles[index[a]] = a;
    handles[index[b]] = b;
  }
  function ensure($this, atLeast) {
    var capacity = $this.h1q_1.length;
    if (atLeast <= capacity)
      return Unit_instance;
    var newCapacity = imul(capacity, 2);
    var newValues = new Int32Array(newCapacity);
    var newIndex = new Int32Array(newCapacity);
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = $this.h1q_1;
    var endIndex = this_0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, newValues, 0, 0, endIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = $this.i1q_1;
    var endIndex_0 = this_1.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = this_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, newIndex, 0, 0, endIndex_0);
    $this.h1q_1 = newValues;
    $this.i1q_1 = newIndex;
  }
  function allocateHandle($this) {
    var capacity = $this.j1q_1.length;
    if ($this.k1q_1 >= capacity) {
      var tmp = 0;
      var tmp_0 = imul(capacity, 2);
      var tmp_1 = new Int32Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = tmp_2 + 1 | 0;
        tmp = tmp + 1 | 0;
      }
      var newHandles = tmp_1;
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.j1q_1;
      var endIndex = this_0.length;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_3 = this_0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_3, newHandles, 0, 0, endIndex);
      $this.j1q_1 = newHandles;
    }
    var handle = $this.k1q_1;
    $this.k1q_1 = $this.j1q_1[$this.k1q_1];
    return handle;
  }
  function freeHandle($this, handle) {
    $this.j1q_1[handle] = $this.k1q_1;
    $this.k1q_1 = handle;
  }
  function SnapshotDoubleIndexHeap() {
    this.g1q_1 = 0;
    this.h1q_1 = new Int32Array(16);
    this.i1q_1 = new Int32Array(16);
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = new Int32Array(16);
    while (tmp_0 < 16) {
      var tmp_2 = tmp_0;
      tmp_1[tmp_2] = tmp_2 + 1 | 0;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.j1q_1 = tmp_1;
    this.k1q_1 = 0;
  }
  protoOf(SnapshotDoubleIndexHeap).x1r = function (default_0) {
    return this.g1q_1 > 0 ? this.h1q_1[0] : default_0;
  };
  protoOf(SnapshotDoubleIndexHeap).l1q = function (value) {
    ensure(this, this.g1q_1 + 1 | 0);
    var tmp1 = this.g1q_1;
    this.g1q_1 = tmp1 + 1 | 0;
    var i = tmp1;
    var handle = allocateHandle(this);
    this.h1q_1[i] = value;
    this.i1q_1[i] = handle;
    this.j1q_1[handle] = i;
    shiftUp(this, i);
    return handle;
  };
  protoOf(SnapshotDoubleIndexHeap).m1q = function (handle) {
    var i = this.j1q_1[handle];
    swap(this, i, this.g1q_1 - 1 | 0);
    this.g1q_1 = this.g1q_1 - 1 | 0;
    shiftUp(this, i);
    shiftDown(this, i);
    freeHandle(this, handle);
  };
  function Companion_11() {
    Companion_instance_12 = this;
    this.r1q_1 = new SnapshotIdSet(new Long(0, 0), new Long(0, 0), 0, null);
  }
  var Companion_instance_12;
  function Companion_getInstance_12() {
    if (Companion_instance_12 == null)
      new Companion_11();
    return Companion_instance_12;
  }
  function SnapshotIdSet$iterator$slambda(this$0, resultContinuation) {
    this.g1s_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SnapshotIdSet$iterator$slambda).p1s = function ($this$sequence, $completion) {
    var tmp = this.q1s($this$sequence, $completion);
    tmp.sb_1 = Unit_instance;
    tmp.tb_1 = null;
    return tmp.cc();
  };
  protoOf(SnapshotIdSet$iterator$slambda).oc = function (p1, $completion) {
    return this.p1s(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SnapshotIdSet$iterator$slambda).cc = function () {
    var suspendResult = this.sb_1;
    $sm: do
      try {
        var tmp = this.qb_1;
        switch (tmp) {
          case 0:
            this.rb_1 = 15;
            this.i1s_1 = this.g1s_1.b1p_1;
            if (!(this.i1s_1 == null)) {
              this.j1s_1 = intArrayIterator(this.i1s_1);
              this.qb_1 = 1;
              continue $sm;
            } else {
              this.qb_1 = 4;
              continue $sm;
            }

          case 1:
            if (!this.j1s_1.x()) {
              this.qb_1 = 3;
              continue $sm;
            }

            this.k1s_1 = this.j1s_1.z();
            this.qb_1 = 2;
            suspendResult = this.h1s_1.md(this.k1s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.qb_1 = 1;
            continue $sm;
          case 3:
            this.qb_1 = 4;
            continue $sm;
          case 4:
            if (!this.g1s_1.z1o_1.equals(new Long(0, 0))) {
              var tmp_0 = this;
              Companion_getInstance();
              tmp_0.l1s_1 = until(0, 64).l();
              this.qb_1 = 5;
              continue $sm;
            } else {
              this.qb_1 = 9;
              continue $sm;
            }

          case 5:
            if (!this.l1s_1.x()) {
              this.qb_1 = 8;
              continue $sm;
            }

            this.m1s_1 = this.l1s_1.z();
            if (!this.g1s_1.z1o_1.gb((new Long(1, 0)).eb(this.m1s_1)).equals(new Long(0, 0))) {
              this.qb_1 = 6;
              suspendResult = this.h1s_1.md(this.m1s_1 + this.g1s_1.a1p_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.qb_1 = 7;
              continue $sm;
            }

          case 6:
            this.qb_1 = 7;
            continue $sm;
          case 7:
            this.qb_1 = 5;
            continue $sm;
          case 8:
            this.qb_1 = 9;
            continue $sm;
          case 9:
            if (!this.g1s_1.y1o_1.equals(new Long(0, 0))) {
              var tmp_1 = this;
              Companion_getInstance();
              tmp_1.n1s_1 = until(0, 64).l();
              this.qb_1 = 10;
              continue $sm;
            } else {
              this.qb_1 = 14;
              continue $sm;
            }

          case 10:
            if (!this.n1s_1.x()) {
              this.qb_1 = 13;
              continue $sm;
            }

            this.o1s_1 = this.n1s_1.z();
            if (!this.g1s_1.y1o_1.gb((new Long(1, 0)).eb(this.o1s_1)).equals(new Long(0, 0))) {
              this.qb_1 = 11;
              Companion_getInstance();
              suspendResult = this.h1s_1.md((this.o1s_1 + 64 | 0) + this.g1s_1.a1p_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.qb_1 = 12;
              continue $sm;
            }

          case 11:
            this.qb_1 = 12;
            continue $sm;
          case 12:
            this.qb_1 = 10;
            continue $sm;
          case 13:
            this.qb_1 = 14;
            continue $sm;
          case 14:
            return Unit_instance;
          case 15:
            throw this.tb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.rb_1 === 15) {
          throw e;
        } else {
          this.qb_1 = this.rb_1;
          this.tb_1 = e;
        }
      }
     while (true);
  };
  protoOf(SnapshotIdSet$iterator$slambda).q1s = function ($this$sequence, completion) {
    var i = new SnapshotIdSet$iterator$slambda(this.g1s_1, completion);
    i.h1s_1 = $this$sequence;
    return i;
  };
  function SnapshotIdSet$iterator$slambda_0(this$0, resultContinuation) {
    var i = new SnapshotIdSet$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.p1s($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SnapshotIdSet(upperSet, lowerSet, lowerBound, belowBound) {
    Companion_getInstance_12();
    this.y1o_1 = upperSet;
    this.z1o_1 = lowerSet;
    this.a1p_1 = lowerBound;
    this.b1p_1 = belowBound;
  }
  protoOf(SnapshotIdSet).k = function (bit) {
    var offset = bit - this.a1p_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      return !(new Long(1, 0)).eb(offset).gb(this.z1o_1).equals(new Long(0, 0));
    } else {
      var tmp_0;
      Companion_getInstance();
      if (offset >= 64) {
        Companion_getInstance();
        tmp_0 = offset < imul(64, 2);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_1 = new Long(1, 0);
        Companion_getInstance();
        return !tmp_1.eb(offset - 64 | 0).gb(this.y1o_1).equals(new Long(0, 0));
      } else {
        if (offset > 0) {
          return false;
        } else {
          var tmp0_safe_receiver = this.b1p_1;
          var tmp_2;
          if (tmp0_safe_receiver == null) {
            tmp_2 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.get.<anonymous>' call
            tmp_2 = binarySearch(tmp0_safe_receiver, bit) >= 0;
          }
          var tmp1_elvis_lhs = tmp_2;
          return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
        }
      }
    }
  };
  protoOf(SnapshotIdSet).s1q = function (bit) {
    var offset = bit - this.a1p_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      var mask = (new Long(1, 0)).eb(offset);
      if (this.z1o_1.gb(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.y1o_1, this.z1o_1.hb(mask), this.a1p_1, this.b1p_1);
      }
    } else {
      var tmp_0;
      Companion_getInstance();
      if (offset >= 64) {
        Companion_getInstance();
        tmp_0 = offset < imul(64, 2);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_1 = new Long(1, 0);
        Companion_getInstance();
        var mask_0 = tmp_1.eb(offset - 64 | 0);
        if (this.y1o_1.gb(mask_0).equals(new Long(0, 0))) {
          return new SnapshotIdSet(this.y1o_1.hb(mask_0), this.z1o_1, this.a1p_1, this.b1p_1);
        }
      } else {
        Companion_getInstance();
        if (offset >= imul(64, 2)) {
          if (!this.k(bit)) {
            var newUpperSet = this.y1o_1;
            var newLowerSet = this.z1o_1;
            var newLowerBound = this.a1p_1;
            var newBelowBound = null;
            var tmp_2 = bit + 1 | 0;
            Companion_getInstance();
            var tmp_3 = tmp_2 / 64 | 0;
            Companion_getInstance();
            var targetLowerBound = imul(tmp_3, 64);
            $l$loop: while (newLowerBound < targetLowerBound) {
              if (!newLowerSet.equals(new Long(0, 0))) {
                if (newBelowBound == null) {
                  // Inline function 'kotlin.apply' call
                  // Inline function 'kotlin.collections.mutableListOf' call
                  var this_0 = ArrayList_init_$Create$();
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>' call
                  var tmp0_safe_receiver = this.b1p_1;
                  if (tmp0_safe_receiver == null)
                    null;
                  else {
                    // Inline function 'kotlin.let' call
                    // Inline function 'kotlin.contracts.contract' call
                    var inductionVariable = 0;
                    var last = tmp0_safe_receiver.length;
                    while (inductionVariable < last) {
                      var element = tmp0_safe_receiver[inductionVariable];
                      inductionVariable = inductionVariable + 1 | 0;
                      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>.<anonymous>.<anonymous>' call
                      this_0.u(element);
                    }
                  }
                  newBelowBound = this_0;
                }
                // Inline function 'kotlin.repeat' call
                Companion_getInstance();
                // Inline function 'kotlin.contracts.contract' call
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < 64)
                  do {
                    var index = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>' call
                    if (!newLowerSet.gb((new Long(1, 0)).eb(index)).equals(new Long(0, 0))) {
                      newBelowBound.u(index + newLowerBound | 0);
                    }
                  }
                   while (inductionVariable_0 < 64);
              }
              if (newUpperSet.equals(new Long(0, 0))) {
                newLowerBound = targetLowerBound;
                newLowerSet = new Long(0, 0);
                break $l$loop;
              }
              newLowerSet = newUpperSet;
              newUpperSet = new Long(0, 0);
              var tmp_4 = newLowerBound;
              Companion_getInstance();
              newLowerBound = tmp_4 + 64 | 0;
            }
            var tmp_5 = newUpperSet;
            var tmp_6 = newLowerSet;
            var tmp_7 = newLowerBound;
            var tmp0_safe_receiver_0 = newBelowBound;
            var tmp1_elvis_lhs = tmp0_safe_receiver_0 == null ? null : toIntArray(tmp0_safe_receiver_0);
            return (new SnapshotIdSet(tmp_5, tmp_6, tmp_7, tmp1_elvis_lhs == null ? this.b1p_1 : tmp1_elvis_lhs)).s1q(bit);
          }
        } else {
          var tmp2_elvis_lhs = this.b1p_1;
          var tmp_8;
          if (tmp2_elvis_lhs == null) {
            // Inline function 'kotlin.intArrayOf' call
            var tmp$ret$3 = new Int32Array([bit]);
            return new SnapshotIdSet(this.y1o_1, this.z1o_1, this.a1p_1, tmp$ret$3);
          } else {
            tmp_8 = tmp2_elvis_lhs;
          }
          var array = tmp_8;
          var location = binarySearch(array, bit);
          if (location < 0) {
            var insertLocation = -(location + 1 | 0) | 0;
            var newSize = array.length + 1 | 0;
            var newBelowBound_0 = new Int32Array(newSize);
            // Inline function 'kotlin.collections.copyInto' call
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_9 = array;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            arrayCopy(tmp_9, newBelowBound_0, 0, 0, insertLocation);
            // Inline function 'kotlin.collections.copyInto' call
            var destinationOffset = insertLocation + 1 | 0;
            var endIndex = newSize - 1 | 0;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_10 = array;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            arrayCopy(tmp_10, newBelowBound_0, destinationOffset, insertLocation, endIndex);
            newBelowBound_0[insertLocation] = bit;
            return new SnapshotIdSet(this.y1o_1, this.z1o_1, this.a1p_1, newBelowBound_0);
          }
        }
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).c1p = function (bit) {
    var offset = bit - this.a1p_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      var mask = (new Long(1, 0)).eb(offset);
      if (!this.z1o_1.gb(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.y1o_1, this.z1o_1.gb(mask.db()), this.a1p_1, this.b1p_1);
      }
    } else {
      var tmp_0;
      Companion_getInstance();
      if (offset >= 64) {
        Companion_getInstance();
        tmp_0 = offset < imul(64, 2);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_1 = new Long(1, 0);
        Companion_getInstance();
        var mask_0 = tmp_1.eb(offset - 64 | 0);
        if (!this.y1o_1.gb(mask_0).equals(new Long(0, 0))) {
          return new SnapshotIdSet(this.y1o_1.gb(mask_0.db()), this.z1o_1, this.a1p_1, this.b1p_1);
        }
      } else {
        if (offset < 0) {
          var array = this.b1p_1;
          if (!(array == null)) {
            var location = binarySearch(array, bit);
            if (location >= 0) {
              var newSize = array.length - 1 | 0;
              if (newSize === 0) {
                return new SnapshotIdSet(this.y1o_1, this.z1o_1, this.a1p_1, null);
              }
              var newBelowBound = new Int32Array(newSize);
              if (location > 0) {
                // Inline function 'kotlin.collections.copyInto' call
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                var tmp_2 = array;
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                arrayCopy(tmp_2, newBelowBound, 0, 0, location);
              }
              if (location < newSize) {
                // Inline function 'kotlin.collections.copyInto' call
                var startIndex = location + 1 | 0;
                var endIndex = newSize + 1 | 0;
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                var tmp_3 = array;
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                arrayCopy(tmp_3, newBelowBound, location, startIndex, endIndex);
              }
              return new SnapshotIdSet(this.y1o_1, this.z1o_1, this.a1p_1, newBelowBound);
            }
          }
        }
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).t1q = function (bits) {
    if (bits === Companion_getInstance_12().r1q_1)
      return this;
    if (this === Companion_getInstance_12().r1q_1)
      return Companion_getInstance_12().r1q_1;
    var tmp;
    if (bits.a1p_1 === this.a1p_1 ? bits.b1p_1 === this.b1p_1 : false) {
      tmp = new SnapshotIdSet(this.y1o_1.gb(bits.y1o_1.db()), this.z1o_1.gb(bits.z1o_1.db()), this.a1p_1, this.b1p_1);
    } else {
      // Inline function 'kotlin.collections.fold' call
      var accumulator = this;
      var tmp0_iterator = bits.l();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.andNot.<anonymous>' call
        accumulator = accumulator.c1p(element);
      }
      tmp = accumulator;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).u1q = function (bits) {
    if (bits === Companion_getInstance_12().r1q_1)
      return this;
    if (this === Companion_getInstance_12().r1q_1)
      return bits;
    var tmp;
    if (bits.a1p_1 === this.a1p_1 ? bits.b1p_1 === this.b1p_1 : false) {
      tmp = new SnapshotIdSet(this.y1o_1.hb(bits.y1o_1), this.z1o_1.hb(bits.z1o_1), this.a1p_1, this.b1p_1);
    } else {
      var tmp_0;
      if (this.b1p_1 == null) {
        // Inline function 'kotlin.collections.fold' call
        var accumulator = bits;
        var tmp0_iterator = this.l();
        while (tmp0_iterator.x()) {
          var element = tmp0_iterator.z();
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
          accumulator = accumulator.s1q(element);
        }
        tmp_0 = accumulator;
      } else {
        // Inline function 'kotlin.collections.fold' call
        var accumulator_0 = this;
        var tmp0_iterator_0 = bits.l();
        while (tmp0_iterator_0.x()) {
          var element_0 = tmp0_iterator_0.z();
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
          accumulator_0 = accumulator_0.s1q(element_0);
        }
        tmp_0 = accumulator_0;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).l = function () {
    return sequence(SnapshotIdSet$iterator$slambda_0(this, null)).l();
  };
  protoOf(SnapshotIdSet).f1q = function (default_0) {
    var belowBound = this.b1p_1;
    if (!(belowBound == null))
      return belowBound[0];
    if (!this.z1o_1.equals(new Long(0, 0)))
      return this.a1p_1 + lowestBitOf(this.z1o_1) | 0;
    if (!this.y1o_1.equals(new Long(0, 0))) {
      Companion_getInstance();
      return (this.a1p_1 + 64 | 0) + lowestBitOf(this.y1o_1) | 0;
    }
    return default_0;
  };
  protoOf(SnapshotIdSet).toString = function () {
    var tmp = anyToString(this);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this, 10));
    var tmp0_iterator = this.l();
    while (tmp0_iterator.x()) {
      var item = tmp0_iterator.z();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.toString.<anonymous>' call
      var tmp$ret$0 = item.toString();
      destination.u(tmp$ret$0);
    }
    return tmp + ' [' + fastJoinToString(destination) + ']';
  };
  function binarySearch(_this__u8e3s4, value) {
    var low = 0;
    var high = _this__u8e3s4.length - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4[mid];
      if (value > midVal)
        low = mid + 1 | 0;
      else if (value < midVal)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function lowestBitOf(bits) {
    var b = bits;
    var base = 0;
    if (b.gb(new Long(-1, 0)).equals(new Long(0, 0))) {
      base = base + 32 | 0;
      b = b.fb(32);
    }
    if (b.gb(new Long(65535, 0)).equals(new Long(0, 0))) {
      base = base + 16 | 0;
      b = b.fb(16);
    }
    if (b.gb(new Long(255, 0)).equals(new Long(0, 0))) {
      base = base + 8 | 0;
      b = b.fb(8);
    }
    if (b.gb(new Long(15, 0)).equals(new Long(0, 0))) {
      base = base + 4 | 0;
      b = b.fb(4);
    }
    if (!b.gb(new Long(1, 0)).equals(new Long(0, 0)))
      return base;
    if (!b.gb(new Long(2, 0)).equals(new Long(0, 0)))
      return base + 1 | 0;
    if (!b.gb(new Long(4, 0)).equals(new Long(0, 0)))
      return base + 2 | 0;
    if (!b.gb(new Long(8, 0)).equals(new Long(0, 0)))
      return base + 3 | 0;
    return -1;
  }
  function get_sync() {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    return sync;
  }
  var sync;
  function StateListStateRecord(list) {
    StateRecord.call(this);
    this.u1s_1 = list;
    this.v1s_1 = 0;
  }
  protoOf(StateListStateRecord).d1h = function (value) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    _get_sync_$accessor$mgqpbl_8m20to();
    var tmp = this;
    tmp.u1s_1 = (value instanceof StateListStateRecord ? value : THROW_CCE()).u1s_1;
    this.v1s_1 = value.v1s_1;
  };
  protoOf(StateListStateRecord).e1h = function () {
    return new StateListStateRecord(this.u1s_1);
  };
  function SnapshotStateList() {
    this.w1s_1 = new StateListStateRecord(persistentListOf());
    this.x1s_1 = 0;
  }
  protoOf(SnapshotStateList).h1h = function () {
    return this.w1s_1;
  };
  protoOf(SnapshotStateList).i1h = function (value) {
    value.o1q_1 = this.w1s_1;
    var tmp = this;
    tmp.w1s_1 = value instanceof StateListStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotStateList).y1s = function () {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp = this.w1s_1;
    var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.<get-modification>.<anonymous>' call
    return current(this_0).v1s_1;
  };
  protoOf(SnapshotStateList).z1s = function () {
    var tmp = this.w1s_1;
    return readable_0(tmp instanceof StateListStateRecord ? tmp : THROW_CCE(), this);
  };
  protoOf(SnapshotStateList).j = function () {
    return this.z1s().u1s_1.j();
  };
  protoOf(SnapshotStateList).fd = function (element) {
    return this.z1s().u1s_1.o(element);
  };
  protoOf(SnapshotStateList).o = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.fd((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).gd = function (elements) {
    return this.z1s().u1s_1.p(elements);
  };
  protoOf(SnapshotStateList).p = function (elements) {
    return this.gd(elements);
  };
  protoOf(SnapshotStateList).k = function (index) {
    return this.z1s().u1s_1.k(index);
  };
  protoOf(SnapshotStateList).a1t = function (element) {
    return this.z1s().u1s_1.m(element);
  };
  protoOf(SnapshotStateList).m = function (element) {
    if (!(element == null ? true : !(element == null)))
      return -1;
    return this.a1t((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).q = function () {
    return this.z1s().u1s_1.q();
  };
  protoOf(SnapshotStateList).l = function () {
    return this.pa();
  };
  protoOf(SnapshotStateList).b1t = function (element) {
    return this.z1s().u1s_1.v1(element);
  };
  protoOf(SnapshotStateList).v1 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return -1;
    return this.b1t((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).pa = function () {
    return new StateListIterator(this, 0);
  };
  protoOf(SnapshotStateList).n = function (index) {
    return new StateListIterator(this, index);
  };
  protoOf(SnapshotStateList).p13 = function (element) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.w1s_1;
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.v1s_1;
      oldList = current_0.u1s_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.add.<anonymous>' call
      var newList = ensureNotNull(oldList).u(element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.w1s_1;
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_10.tr();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.v1s_1 === currentModification) {
        $this$writable.u1s_1 = newList;
        $this$writable.v1s_1 = $this$writable.v1s_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_2 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).u = function (element) {
    return this.p13((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).c1t = function (index, element) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.w1s_1;
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.v1s_1;
      oldList = current_0.u1s_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.add.<anonymous>' call
      var newList = ensureNotNull(oldList).b1i(index, element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.w1s_1;
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_10.tr();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.v1s_1 === currentModification) {
        $this$writable.u1s_1 = newList;
        $this$writable.v1s_1 = $this$writable.v1s_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_2 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return Unit_instance;
  };
  protoOf(SnapshotStateList).t1 = function (index, element) {
    return this.c1t(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).d1t = function (elements) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.w1s_1;
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.v1s_1;
      oldList = current_0.u1s_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.addAll.<anonymous>' call
      var newList = ensureNotNull(oldList).a1(elements);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.w1s_1;
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_10.tr();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.v1s_1 === currentModification) {
        $this$writable.u1s_1 = newList;
        $this$writable.v1s_1 = $this$writable.v1s_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_2 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).a1 = function (elements) {
    return this.d1t(elements);
  };
  protoOf(SnapshotStateList).b1 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
    // Inline function 'androidx.compose.runtime.snapshots.writable' call
    var tmp = this.w1s_1;
    var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    var snapshot = get_snapshotInitializer();
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
    snapshot = Companion_instance_10.tr();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.clear.<anonymous>' call
    var $this$writable = writableRecord(this_0, this, snapshot);
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    _get_sync_$accessor$mgqpbl_8m20to();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.clear.<anonymous>.<anonymous>' call
    $this$writable.u1s_1 = persistentListOf();
    $this$writable.v1s_1 = $this$writable.v1s_1 + 1 | 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
    notifyWrite(snapshot, this);
  };
  protoOf(SnapshotStateList).e1t = function (element) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.w1s_1;
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.v1s_1;
      oldList = current_0.u1s_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.remove.<anonymous>' call
      var newList = ensureNotNull(oldList).v(element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.w1s_1;
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_10.tr();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.v1s_1 === currentModification) {
        $this$writable.u1s_1 = newList;
        $this$writable.v1s_1 = $this$writable.v1s_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_2 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).v = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.e1t((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).g1 = function (index) {
    // Inline function 'kotlin.also' call
    var this_0 = this.k(index);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.removeAt.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.update' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.w1s_1;
      var this_1 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_1);
      currentModification = current_0.v1s_1;
      oldList = current_0.u1s_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.removeAt.<anonymous>.<anonymous>' call
      var newList = ensureNotNull(oldList).g1(index);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.w1s_1;
      var this_2 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_10.tr();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_2, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.v1s_1 === currentModification) {
        $this$writable.u1s_1 = newList;
        $this$writable.v1s_1 = $this$writable.v1s_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_3 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_3) {
        result = true;
        break $l$loop_0;
      }
    }
    return this_0;
  };
  protoOf(SnapshotStateList).f1t = function (index, element) {
    // Inline function 'kotlin.also' call
    var this_0 = this.k(index);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.set.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.update' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.w1s_1;
      var this_1 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_1);
      currentModification = current_0.v1s_1;
      oldList = current_0.u1s_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.set.<anonymous>.<anonymous>' call
      var newList = ensureNotNull(oldList).t(index, element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.w1s_1;
      var this_2 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_10.tr();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_2, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.v1s_1 === currentModification) {
        $this$writable.u1s_1 = newList;
        $this$writable.v1s_1 = $this$writable.v1s_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_3 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_3) {
        result = true;
        break $l$loop_0;
      }
    }
    return this_0;
  };
  protoOf(SnapshotStateList).t = function (index, element) {
    return this.f1t(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function validateModification($this) {
    if (!($this.g1t_1.y1s() === $this.i1t_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function StateListIterator(list, offset) {
    this.g1t_1 = list;
    this.h1t_1 = offset - 1 | 0;
    this.i1t_1 = this.g1t_1.y1s();
  }
  protoOf(StateListIterator).m1 = function () {
    return this.h1t_1 >= 0;
  };
  protoOf(StateListIterator).n1 = function () {
    return this.h1t_1 + 1 | 0;
  };
  protoOf(StateListIterator).o1 = function () {
    validateModification(this);
    validateRange(this.h1t_1, this.g1t_1.j());
    // Inline function 'kotlin.also' call
    var this_0 = this.g1t_1.k(this.h1t_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.StateListIterator.previous.<anonymous>' call
    this.h1t_1 = this.h1t_1 - 1 | 0;
    return this_0;
  };
  protoOf(StateListIterator).x = function () {
    return this.h1t_1 < (this.g1t_1.j() - 1 | 0);
  };
  protoOf(StateListIterator).z = function () {
    validateModification(this);
    var newIndex = this.h1t_1 + 1 | 0;
    validateRange(newIndex, this.g1t_1.j());
    // Inline function 'kotlin.also' call
    var this_0 = this.g1t_1.k(newIndex);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.StateListIterator.next.<anonymous>' call
    this.h1t_1 = newIndex;
    return this_0;
  };
  protoOf(StateListIterator).y = function () {
    validateModification(this);
    this.g1t_1.g1(this.h1t_1);
    this.h1t_1 = this.h1t_1 - 1 | 0;
    this.i1t_1 = this.g1t_1.y1s();
  };
  function validateRange(index, size) {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    if (!(0 <= index ? index < size : false)) {
      throw IndexOutOfBoundsException_init_$Create$('index (' + index + ') is out of bound of [0, ' + size + ')');
    }
  }
  function _get_sync_$accessor$mgqpbl_8m20to() {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    return get_sync();
  }
  var properties_initialized_SnapshotStateList_kt_lcuarf;
  function _init_properties_SnapshotStateList_kt__mu1ud5() {
    if (!properties_initialized_SnapshotStateList_kt_lcuarf) {
      properties_initialized_SnapshotStateList_kt_lcuarf = true;
      sync = createSynchronizedObject();
    }
  }
  var sync_0;
  function unsupported() {
    _init_properties_SnapshotStateMap_kt__p43o8h();
    throw UnsupportedOperationException_init_$Create$();
  }
  var properties_initialized_SnapshotStateMap_kt_9i73ip;
  function _init_properties_SnapshotStateMap_kt__p43o8h() {
    if (!properties_initialized_SnapshotStateMap_kt_9i73ip) {
      properties_initialized_SnapshotStateMap_kt_9i73ip = true;
      sync_0 = createSynchronizedObject();
    }
  }
  function find_4($this, value, hash) {
    var low = 0;
    var high = $this.t1r_1 - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midHash = $this.u1r_1[mid];
      if (midHash < hash)
        low = mid + 1 | 0;
      else if (midHash > hash)
        high = mid - 1 | 0;
      else {
        var tmp0_safe_receiver = $this.v1r_1[mid];
        var midVal = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kl();
        if (value === midVal)
          return mid;
        return findExactIndex_3($this, mid, value, hash);
      }
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_3($this, midIndex, value, valueHash) {
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        if (!($this.u1r_1[i] === valueHash)) {
          break $l$loop;
        }
        var tmp1_safe_receiver = $this.v1r_1[i];
        var v = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.kl();
        if (v === value) {
          return i;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.t1r_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (!($this.u1r_1[i_0] === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
        var tmp3_safe_receiver = $this.v1r_1[i_0];
        var v_0 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.kl();
        if (v_0 === value) {
          return i_0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.t1r_1 + 1 | 0) | 0;
  }
  function SnapshotWeakSet() {
    this.t1r_1 = 0;
    this.u1r_1 = new Int32Array(16);
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.v1r_1 = fillArrayVal(Array(16), null);
  }
  protoOf(SnapshotWeakSet).b15 = function (value) {
    var index;
    var size = this.t1r_1;
    var hash = identityHashCode(value);
    if (size > 0) {
      index = find_4(this, value, hash);
      if (index >= 0) {
        return false;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    var capacity = this.v1r_1.length;
    if (size === capacity) {
      var newCapacity = imul(capacity, 2);
      // Inline function 'kotlin.arrayOfNulls' call
      var newValues = fillArrayVal(Array(newCapacity), null);
      var newHashes = new Int32Array(newCapacity);
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = this.v1r_1;
      var destinationOffset = insertIndex + 1 | 0;
      arrayCopy(this_0, newValues, destinationOffset, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var this_1 = this.v1r_1;
      arrayCopy(this_1, newValues, 0, 0, insertIndex);
      // Inline function 'kotlin.collections.copyInto' call
      var this_2 = this.u1r_1;
      var destinationOffset_0 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = this_2;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, newHashes, destinationOffset_0, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = this.u1r_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, newHashes, 0, 0, insertIndex);
      this.v1r_1 = newValues;
      this.u1r_1 = newHashes;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      var this_3 = this.v1r_1;
      var destination = this.v1r_1;
      var destinationOffset_1 = insertIndex + 1 | 0;
      arrayCopy(this_3, destination, destinationOffset_1, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var this_4 = this.u1r_1;
      var destination_0 = this.u1r_1;
      var destinationOffset_2 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = this_4;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_1, destination_0, destinationOffset_2, insertIndex, size);
    }
    this.v1r_1[insertIndex] = new WeakReference(value);
    this.u1r_1[insertIndex] = hash;
    this.t1r_1 = this.t1r_1 + 1 | 0;
    return true;
  };
  function get_LocalInspectionTables() {
    _init_properties_InspectionTables_kt__ovfk2v();
    return LocalInspectionTables;
  }
  var LocalInspectionTables;
  function LocalInspectionTables$lambda() {
    _init_properties_InspectionTables_kt__ovfk2v();
    return null;
  }
  var properties_initialized_InspectionTables_kt_tgdbmt;
  function _init_properties_InspectionTables_kt__ovfk2v() {
    if (!properties_initialized_InspectionTables_kt_tgdbmt) {
      properties_initialized_InspectionTables_kt_tgdbmt = true;
      LocalInspectionTables = staticCompositionLocalOf(LocalInspectionTables$lambda);
    }
  }
  function set_nextHash(_set____db54di) {
    _init_properties_ActualJs_js_kt__rh77u6();
    nextHash = _set____db54di;
  }
  function get_nextHash() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return nextHash;
  }
  var nextHash;
  function get_DefaultMonotonicFrameClock() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return DefaultMonotonicFrameClock;
  }
  var DefaultMonotonicFrameClock;
  function AtomicReference(value) {
    this.a17_1 = value;
    this.b17_1 = 8;
  }
  protoOf(AtomicReference).kl = function () {
    return this.a17_1;
  };
  protoOf(AtomicReference).w17 = function (value) {
    this.a17_1 = value;
  };
  protoOf(AtomicReference).c17 = function (value) {
    var oldValue = this.a17_1;
    this.a17_1 = value;
    return oldValue;
  };
  protoOf(AtomicReference).j18 = function (expect, newValue) {
    var tmp;
    if (equals(expect, this.a17_1)) {
      this.a17_1 = newValue;
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  function getCurrentThreadId() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return new Long(0, 0);
  }
  function identityHashCode(instance) {
    _init_properties_ActualJs_js_kt__rh77u6();
    if (instance == null) {
      return 0;
    }
    // Inline function 'kotlin.js.asDynamic' call
    var hashCode = instance['kotlinIdentityHashcodeValue$'];
    if (hashCode != null) {
      return hashCode;
    }
    var tmp;
    switch (typeof instance) {
      case 'object':
      case 'function':
        tmp = memoizeIdentityHashCode(instance);
        break;
      default:
        throw IllegalArgumentException_init_$Create$('identity hash code for ' + typeof instance + ' is not supported');
    }
    return tmp;
  }
  function AtomicInt(value) {
    this.b1r_1 = value;
  }
  protoOf(AtomicInt).l1q = function (amount) {
    this.b1r_1 = this.b1r_1 + amount | 0;
    return this.b1r_1;
  };
  function MonotonicClockImpl$withFrameNanos$lambda($onFrame, $continuation) {
    return function (it) {
      var duration = toDuration(it, DurationUnit_MILLISECONDS_getInstance());
      var result = $onFrame(_Duration___get_inWholeNanoseconds__impl__r5x4mr(duration));
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(result);
      this_0.p6(tmp$ret$0);
      return Unit_instance;
    };
  }
  function $withFrameNanosCOROUTINE$5(_this__u8e3s4, onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r1t_1 = _this__u8e3s4;
    this.s1t_1 = onFrame;
  }
  protoOf($withFrameNanosCOROUTINE$5).cc = function () {
    var suspendResult = this.sb_1;
    $sm: do
      try {
        var tmp = this.qb_1;
        switch (tmp) {
          case 0:
            this.rb_1 = 2;
            this.qb_1 = 1;
            var safe = SafeContinuation_init_$Create$(intercepted(this));
            var tmp_0 = window;
            tmp_0.requestAnimationFrame(MonotonicClockImpl$withFrameNanos$lambda(this.s1t_1, safe));
            suspendResult = returnIfSuspended(safe.q6(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  function MonotonicClockImpl() {
  }
  protoOf(MonotonicClockImpl).ws = function (onFrame, $completion) {
    var tmp = new $withFrameNanosCOROUTINE$5(this, onFrame, $completion);
    tmp.sb_1 = Unit_instance;
    tmp.tb_1 = null;
    return tmp.cc();
  };
  function memoizeIdentityHashCode(instance) {
    _init_properties_ActualJs_js_kt__rh77u6();
    var tmp0 = get_nextHash();
    set_nextHash(tmp0 + 1 | 0);
    var value = tmp0;
    var descriptor = new Object();
    descriptor.value = value;
    descriptor.writable = false;
    descriptor.configurable = false;
    descriptor.enumerable = false;
    Object.defineProperty(instance, 'kotlinIdentityHashcodeValue$', descriptor);
    return value;
  }
  function logError(message, e) {
    _init_properties_ActualJs_js_kt__rh77u6();
    println(message);
    printStackTrace(e);
  }
  var properties_initialized_ActualJs_js_kt_azbr3k;
  function _init_properties_ActualJs_js_kt__rh77u6() {
    if (!properties_initialized_ActualJs_js_kt_azbr3k) {
      properties_initialized_ActualJs_js_kt_azbr3k = true;
      nextHash = 1;
      DefaultMonotonicFrameClock = new MonotonicClockImpl();
    }
  }
  function Trace() {
  }
  protoOf(Trace).z12 = function (name) {
    return null;
  };
  protoOf(Trace).r13 = function (token) {
  };
  var Trace_instance;
  function Trace_getInstance() {
    return Trace_instance;
  }
  function invokeComposableForResult$composable(composer, composable) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    return composable(composer, 1);
  }
  function invokeComposable$composable(composer, composable) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    composable(composer, 1);
  }
  function trackWrite($this) {
    if ($this.k1n_1) {
      var scope = $this.m1n_1;
      if (!(scope == null)) {
        scope.w18();
        $this.m1n_1 = null;
      }
      var scopes = $this.n1n_1;
      if (!(scopes == null)) {
        var inductionVariable = 0;
        var last = scopes.j();
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = scopes.k(index);
            item.w18();
          }
           while (inductionVariable < last);
        scopes.b1();
      }
    }
  }
  function trackRead($this, composer) {
    if ($this.k1n_1) {
      var scope = composer.lu();
      if (!(scope == null)) {
        composer.jv(scope);
        var lastScope = $this.m1n_1;
        if (replacableWith(lastScope, scope)) {
          $this.m1n_1 = scope;
        } else {
          var lastScopes = $this.n1n_1;
          if (lastScopes == null) {
            // Inline function 'kotlin.collections.mutableListOf' call
            var newScopes = ArrayList_init_$Create$();
            $this.n1n_1 = newScopes;
            newScopes.u(scope);
          } else {
            var inductionVariable = 0;
            var last = lastScopes.j();
            if (inductionVariable < last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var scopeAtIndex = lastScopes.k(index);
                if (replacableWith(scopeAtIndex, scope)) {
                  lastScopes.t(index, scope);
                  return Unit_instance;
                }
              }
               while (inductionVariable < last);
            lastScopes.u(scope);
          }
        }
      }
    }
  }
  function invoke$invoke(receiver, p0, p1) {
    receiver.s14(p0, p1);
  }
  function ComposableLambdaImpl$invoke$invoke$ref($boundThis) {
    return function (p0, p1) {
      invoke$invoke($boundThis, p0, p1);
      return Unit_instance;
    };
  }
  function ComposableLambdaImpl$invoke$lambda(this$0, $p1, $changed) {
    return function (nc, _anonymous_parameter_1__qggqgd) {
      this$0.t1t($p1, nc, $changed | 1);
      return Unit_instance;
    };
  }
  function ComposableLambdaImpl(key, tracked) {
    this.j1n_1 = key;
    this.k1n_1 = tracked;
    this.l1n_1 = null;
    this.m1n_1 = null;
    this.n1n_1 = null;
  }
  protoOf(ComposableLambdaImpl).o1n = function (block) {
    if (!equals(this.l1n_1, block)) {
      var oldBlockNull = this.l1n_1 == null;
      this.l1n_1 = block;
      if (!oldBlockNull) {
        trackWrite(this);
      }
    }
  };
  protoOf(ComposableLambdaImpl).s14 = function (c, changed) {
    var c_0 = c.su(this.j1n_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.fv(this) ? differentBits(0) : sameBits(0));
    var tmp = this.l1n_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(c_0, dirty);
    var tmp0_safe_receiver = c_0.tu();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.s19(ComposableLambdaImpl$invoke$invoke$ref(this));
    }
    return result;
  };
  protoOf(ComposableLambdaImpl).t1t = function (p1, c, changed) {
    var c_0 = c.su(this.j1n_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.fv(this) ? differentBits(1) : sameBits(1));
    var tmp = this.l1n_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(p1, c_0, dirty);
    var tmp0_safe_receiver = c_0.tu();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.s19(ComposableLambdaImpl$invoke$lambda(this, p1, changed));
    }
    return result;
  };
  function createSnapshotMutableState(value, policy) {
    return new SnapshotMutableStateImpl(value, policy);
  }
  function PlatformOptimizedCancellationException(message) {
    message = message === VOID ? null : message;
    CancellationException_init_$Init$(message, this);
    captureStack(this, PlatformOptimizedCancellationException);
  }
  function IntMap() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.nz_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(IntMap).k = function (key) {
    return this.nz_1.t2(key);
  };
  protoOf(IntMap).f12 = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.nz_1.j2(key, value);
  };
  protoOf(IntMap).b1 = function () {
    this.nz_1.b1();
  };
  function WeakReference(reference) {
    this.w1r_1 = reference;
  }
  protoOf(WeakReference).kl = function () {
    return this.w1r_1;
  };
  //region block: post-declaration
  protoOf(OffsetApplier).ur = onBeginChanges;
  protoOf(OffsetApplier).vr = onEndChanges;
  protoOf(AbstractApplier).ur = onBeginChanges;
  protoOf(AbstractApplier).vr = onEndChanges;
  protoOf(BroadcastFrameClock).l2 = get_key;
  protoOf(BroadcastFrameClock).xb = get;
  protoOf(BroadcastFrameClock).me = fold;
  protoOf(BroadcastFrameClock).le = minusKey;
  protoOf(BroadcastFrameClock).ne = plus;
  defineProp(protoOf(ComposeRuntimeError), 'message', function () {
    return this.s6();
  });
  protoOf(StructuralEqualityPolicy).x1g = merge;
  protoOf(SnapshotStateList).j1h = mergeRecords;
  protoOf(MonotonicClockImpl).l2 = get_key;
  protoOf(MonotonicClockImpl).xb = get;
  protoOf(MonotonicClockImpl).me = fold;
  protoOf(MonotonicClockImpl).le = minusKey;
  protoOf(MonotonicClockImpl).ne = plus;
  //endregion
  //region block: init
  Key_instance_0 = new Key();
  movableContentKey = 126665345;
  Companion_instance_2 = new Companion_1();
  Companion_instance_4 = new Companion_3();
  StructuralEqualityPolicy_instance = new StructuralEqualityPolicy();
  MAX_BUFFER_SIZE = 32;
  MAX_BUFFER_SIZE_MINUS_ONE = 31;
  LOG_MAX_BUFFER_SIZE = 5;
  MUTABLE_BUFFER_SIZE = 33;
  TRIE_MAX_HEIGHT = 7;
  ENTRY_SIZE = 2;
  LOG_MAX_BRANCHING_FACTOR = 5;
  MAX_SHIFT = 30;
  EndOfChain_instance = new EndOfChain();
  ListImplementation_instance = new ListImplementation();
  Companion_instance_10 = new Companion_9();
  Trace_instance = new Trace();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = composableLambdaInstance;
  _.$_$.b = composableLambda;
  _.$_$.c = illegalDecoyCallException;
  _.$_$.d = AbstractApplier;
  _.$_$.e = CompositionLocalProvider$composable;
  _.$_$.f = ControlledComposition;
  _.$_$.g = get_DefaultMonotonicFrameClock;
  _.$_$.h = DisposableEffect$composable_1;
  _.$_$.i = DisposableEffect$composable_0;
  _.$_$.j = DisposableEffect$composable;
  _.$_$.k = LaunchedEffect$composable;
  _.$_$.l = ProduceStateScope;
  _.$_$.m = Recomposer;
  _.$_$.n = compositionLocalOf;
  _.$_$.o = invalidApplier;
  _.$_$.p = isTraceInProgress;
  _.$_$.q = mutableStateListOf;
  _.$_$.r = mutableStateOf;
  _.$_$.s = produceState$composable;
  _.$_$.t = sourceInformationMarkerEnd;
  _.$_$.u = sourceInformationMarkerStart;
  _.$_$.v = sourceInformation;
  _.$_$.w = staticCompositionLocalOf;
  _.$_$.x = traceEventEnd;
  _.$_$.y = traceEventStart;
  _.$_$.z = updateChangedFlags;
  _.$_$.a1 = _SkippableUpdater___init__impl__4ft0t9;
  _.$_$.b1 = _SkippableUpdater___get_composer__impl__6t7yne;
  _.$_$.c1 = _Updater___init__impl__rbfxm8;
  _.$_$.d1 = Updater__set_impl_v7kwss;
  _.$_$.e1 = Companion_instance_10;
  _.$_$.f1 = Companion_getInstance_0;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-runtime.js.map
