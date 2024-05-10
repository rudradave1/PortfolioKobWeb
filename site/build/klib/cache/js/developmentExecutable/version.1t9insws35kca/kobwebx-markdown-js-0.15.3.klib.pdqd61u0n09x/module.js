(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-runtime.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobwebx-markdown'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-kobwebx-markdown'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobwebx-markdown'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'kobweb-frontend-kobwebx-markdown'.");
    }
    root['kobweb-frontend-kobwebx-markdown'] = factory(typeof this['kobweb-frontend-kobwebx-markdown'] === 'undefined' ? {} : this['kobweb-frontend-kobwebx-markdown'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-runtime']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.bb;
  var classMeta = kotlin_kotlin.$_$.s9;
  var setMetadataFor = kotlin_kotlin.$_$.cb;
  var VOID = kotlin_kotlin.$_$.e;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  //endregion
  //region block: pre-declaration
  setMetadataFor(MarkdownContext, 'MarkdownContext', classMeta);
  //endregion
  function get_LocalMarkdownContext() {
    _init_properties_MarkdownContext_kt__bijofm();
    return LocalMarkdownContext;
  }
  var LocalMarkdownContext;
  function get_$stableprop() {
    return 8;
  }
  function MarkdownContext(path, frontMatter) {
    this.path_1 = path;
    this.frontMatter_1 = frontMatter;
    this.$stable_1 = 8;
  }
  protoOf(MarkdownContext).get_path_wos8ry_k$ = function () {
    return this.path_1;
  };
  protoOf(MarkdownContext).get_frontMatter_iz7ndr_k$ = function () {
    return this.frontMatter_1;
  };
  function LocalMarkdownContext$lambda() {
    _init_properties_MarkdownContext_kt__bijofm();
    return null;
  }
  var properties_initialized_MarkdownContext_kt_igqsds;
  function _init_properties_MarkdownContext_kt__bijofm() {
    if (!properties_initialized_MarkdownContext_kt_igqsds) {
      properties_initialized_MarkdownContext_kt_igqsds = true;
      LocalMarkdownContext = compositionLocalOf(VOID, LocalMarkdownContext$lambda);
    }
  }
  return _;
}));
