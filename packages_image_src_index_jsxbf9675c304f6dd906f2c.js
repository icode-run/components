"use strict";
(self["webpackChunkicode_run"] = self["webpackChunkicode_run"] || []).push([["packages_image_src_index_jsx"],{

/***/ 4007:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src)
});

// EXTERNAL MODULE: consume shared module (default) react@^16.14.0 (singleton) (fallback: ../my-cli/node_modules/react/index.js)
var index_js_ = __webpack_require__(93121);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
;// CONCATENATED MODULE: ./packages/image/src/index.module.less
// extracted by mini-css-extract-plugin
/* harmony default export */ const index_module = ({"box":"packages-image-src-index-module__box"});
;// CONCATENATED MODULE: ./packages/image/src/index.jsx
function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}/**
 * Image
 * @author tianyanrong
 */var Image=/*#__PURE__*/function(_Component){_inherits(Image,_Component);var _super=_createSuper(Image);function Image(){var _this;_classCallCheck(this,Image);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));_this.state={};_this.getData=function(){var _this$props=_this.props,dataKeys=_this$props.dataKeys,_this$props$data=_this$props.data,data=_this$props$data===void 0?[]:_this$props$data;var keyName=dataKeys&&dataKeys[0]&&dataKeys[0].keyName;var value=data&&data[0]&&data[0][keyName];return value||'';};return _this;}_createClass(Image,[{key:"render",value:function render(){var _this$props2=this.props,icon=_this$props2.icon,className=_this$props2.className,style=_this$props2.style;var htmlProps={};var dataValue=this.getData();return/*#__PURE__*/index_js_default().createElement("span",_extends({className:"".concat(index_module.box," ").concat(className),style:style},htmlProps),dataValue?/*#__PURE__*/index_js_default().createElement("img",{src:dataValue}):/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,icon?/*#__PURE__*/(0,index_js_.cloneElement)(icon,{autoWidth:true}):/*#__PURE__*/index_js_default().createElement("svg",{width:"100%",fill:"none",viewBox:"0 0 48 48"},/*#__PURE__*/index_js_default().createElement("path",{"stroke-linejoin":"round","stroke-linecap":"round","stroke-width":"4",stroke:"#333",d:"M5 10a2 2 0 0 1 2-2h34a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V10Z","clip-rule":"evenodd","data-follow-stroke":"#333"}),/*#__PURE__*/index_js_default().createElement("path",{"stroke-linejoin":"round","stroke-linecap":"round","stroke-width":"4",stroke:"#333",d:"M14.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z","clip-rule":"evenodd","data-follow-stroke":"#333"}),/*#__PURE__*/index_js_default().createElement("path",{"stroke-linejoin":"round","stroke-width":"4",stroke:"#333",d:"m15 24 5 4 6-7 17 13v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-4l10-10Z","data-follow-stroke":"#333"}))));}// render() {
//   const {
//     icon,
//     className,
//     style,
//   } = this.props;
//   const htmlProps = {};
//   const dataValue = this.getData();
//   if(!icon && !dataValue) {
//     htmlProps.dangerouslySetInnerHTML = {__html: this.svg}
//   }
//   return <span
//     className={`${styles.box} ${className}`}
//     style={style}
//     {...htmlProps}
//   >{icon && !dataValue ? cloneElement(icon, {
//     autoWidth: true
//   }) : null}
//   {dataValue ? <img src={dataValue} /> : null}
//   </span>;
// }
}]);return Image;}(index_js_.Component);/* harmony default export */ const src = (Image);

/***/ })

}]);