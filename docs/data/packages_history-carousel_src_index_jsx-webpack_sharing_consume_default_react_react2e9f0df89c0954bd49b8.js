"use strict";
(self["webpackChunkicode_run"] = self["webpackChunkicode_run"] || []).push([["packages_history-carousel_src_index_jsx-webpack_sharing_consume_default_react_react"],{

/***/ 43427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DO": () => (/* binding */ getBaseTextSize),
/* harmony export */   "NA": () => (/* binding */ getValue),
/* harmony export */   "Yu": () => (/* binding */ getData)
/* harmony export */ });
var getValue=function getValue(){var data=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];var keyNames=arguments.length>1?arguments[1]:undefined;if(keyNames&&keyNames.length){var newData=data&&data[0]?data[0]:{},values=[];keyNames.forEach(function(item){values.push(newData[item.keyName]||'');});return values;}return[];};var getData=function getData(){var data=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];var keyNames=arguments.length>1?arguments[1]:undefined;if(keyNames&&keyNames.length){var newData=[];data.forEach(function(item){var values=[];keyNames.forEach(function(keyItem){values.push(item[keyItem.keyName]||'');});newData.push(values);});return newData;}return[];};var getBaseTextSize=function getBaseTextSize(){var fontSize=14;var text=document.createElement('div');text.innerHTML='D';text.style.fontSize='1rem';text.style.lineHeight=1;document.body.append(text);fontSize=text.offsetHeight;document.body.removeChild(text);return fontSize;};

/***/ }),

/***/ 85798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ History)
});

// EXTERNAL MODULE: consume shared module (default) react@^16.14.0 (singleton) (fallback: ../my-cli/node_modules/react/index.js)
var index_js_ = __webpack_require__(93121);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./packages/history-carousel/node_modules/react-motion/lib/react-motion.js
var react_motion = __webpack_require__(82420);
// EXTERNAL MODULE: ./packages/component-layout/utils/tools.js
var tools = __webpack_require__(43427);
;// CONCATENATED MODULE: ./packages/history-carousel/src/index.module.less
// extracted by mini-css-extract-plugin
/* harmony default export */ const index_module = ({"componentHistory":"packages-history-carousel-src-index-module__componentHistory"});
;// CONCATENATED MODULE: ./packages/history-carousel/src/index.jsx
function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}/**
 * 历史组件
 */var History=/*#__PURE__*/function(_Component){_inherits(History,_Component);var _super=_createSuper(History);function History(){var _this;_classCallCheck(this,History);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));_this.state={current:0,offset:0};_this.nodes=[];_this.reorderData=function(){setTimeout(function(){_this.updateOffset();},2000);};return _this;}_createClass(History,[{key:"componentDidMount",value:function componentDidMount(){this.nodeOffsets=this.nodes.map(function(d){return d.getBoundingClientRect().height;});this.updateOffset();}},{key:"componentWillReceiveProps",value:function componentWillReceiveProps(nextProps){if(this.props.pending&&!nextProps.pending){this.nodeOffsets=this.nodes.map(function(d){return d.getBoundingClientRect().height;});}}},{key:"updateOffset",value:function updateOffset(){var current=this.state.current;var newCurrent=current>=this.nodes.length?0:current+1;this.setState({current:newCurrent,offset:newCurrent===0?0:this.nodeOffsets.reduce(function(lastValue,v,index){if(current>=index){return lastValue+v;}return lastValue;},0)});}},{key:"render",value:function render(){var _this2=this;var _this$props=this.props,_this$props$className=_this$props.className,className=_this$props$className===void 0?'':_this$props$className,data=_this$props.data,dataKeys=_this$props.dataKeys;var values=(0,tools/* getData */.Yu)(data,dataKeys);var props={className:"".concat(index_module.componentHistory," ").concat(className)};var offset=this.state.offset;return/*#__PURE__*/index_js_default().createElement("div",props,/*#__PURE__*/index_js_default().createElement(react_motion/* Motion */.y_,{style:{y:offset===0?0:(0,react_motion/* spring */.ST)(offset)},onRest:this.reorderData},function(interpolatingStyle){return/*#__PURE__*/index_js_default().createElement("ul",{className:"history-content",style:{transform:"translateY(-".concat(interpolatingStyle.y,"px)")}},values.map(function(d,i){return/*#__PURE__*/index_js_default().createElement("li",{className:!d[0]?'no-date':'',key:d[0]||i,ref:function ref(node){return _this2.nodes[i]=node;}},/*#__PURE__*/index_js_default().createElement("em",{className:"date"},d[0]),/*#__PURE__*/index_js_default().createElement("p",{className:"description"},d[1]));}),values.map(function(d,i){return/*#__PURE__*/index_js_default().createElement("li",{className:!d[0]?'no-date':'',key:d[0]||i},/*#__PURE__*/index_js_default().createElement("em",{className:"date"},d[0]),/*#__PURE__*/index_js_default().createElement("p",{className:"description"},d[1]));}));}));}}]);return History;}(index_js_.Component);History.defaultProps={data:[],pending:false};

/***/ })

}]);