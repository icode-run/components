"use strict";
(self["webpackChunkicode_run"] = self["webpackChunkicode_run"] || []).push([["packages_container_src_index_jsx"],{

/***/ 77219:
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
;// CONCATENATED MODULE: ./packages/component-layout/utils/common.js
var getNextState=function getNextState(propsArray){var nextProps=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var prevState=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var myModel=nextProps.myModel,request=nextProps.request,setState=nextProps.setState,history=nextProps.history,modalName=nextProps.modalName;var nextState={};if(!(propsArray&&propsArray.length)){return nextState;}propsArray.map(function(item){if(item.type==='children'&&item.childrenNodeId&&item.childrenNodeId!==prevState.childrenNodeId){nextState.childrenNodeId=item.childrenNodeId;}else if((item.type==='state'||item.type==='param')&&JSON.stringify(myModel[nextProps[item.name]])!==JSON.stringify(prevState[nextProps[item.name+'Value']])){nextState[nextProps[item.name+'Value']]=myModel[nextProps[item.name]];}else if(typeof nextProps[item.name]==='string'&&nextProps[item.name]!==prevState[item.name]){nextState[item.name]=nextProps[item.name];}});return nextState;};var getHtmlProps=function getHtmlProps(res){var newRes={},key;var notHtmlAttributes=['parentItem','levelIndex','dispatchEditModel','onResize'];for(key in res){if(notHtmlAttributes.indexOf(key)<0){newRes[key]=res[key];}}return newRes;};var getCurrentColors=function getCurrentColors(_ref){var lightColors=_ref.lightColors,darkColors=_ref.darkColors,layoutColorsKeys=_ref.layoutColorsKeys,themeMode=_ref.themeMode;var layoutColors=window.layoutColors;var defualtColors=themeMode==='dark'?darkColors:lightColors;// if(layoutColors && layoutColorsKeys && layoutColorsKeys.length) {
//   const colors = {};
//   let key;
//   for(key in layoutColorsKeys) {
//     if(layoutColorsKeys[key] && layoutColors[layoutColorsKeys[key]]) {
//       colors[key] = layoutColors[layoutColorsKeys[key]];
//     }
//   }
//   return Object.assign({}, defualtColors, colors);
// }
return defualtColors;};
;// CONCATENATED MODULE: ./packages/container/src/index.module.less
// extracted by mini-css-extract-plugin
/* harmony default export */ const index_module = ({"row":"packages-container-src-index-module__row","column":"packages-container-src-index-module__column","columnAuto":"packages-container-src-index-module__columnAuto"});
;// CONCATENATED MODULE: ./packages/container/src/index.jsx
function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}/**
 * Container
 * @author tianyanrong
 */var Container=/*#__PURE__*/function(_Component){_inherits(Container,_Component);var _super=_createSuper(Container);function Container(){_classCallCheck(this,Container);return _super.apply(this,arguments);}_createClass(Container,[{key:"render",value:function render(){var _this$props=this.props,children=_this$props.children,style=_this$props.style,direction=_this$props.direction,className=_this$props.className,myModel=_this$props.myModel,model=_this$props.model,nodeName=_this$props.nodeName,nodeId=_this$props.nodeId,setModelState=_this$props.setModelState,request=_this$props.request,res=_objectWithoutProperties(_this$props,["children","style","direction","className","myModel","model","nodeName","nodeId","setModelState","request"]);var newRes=getHtmlProps(res);return/*#__PURE__*/index_js_default().createElement("div",_extends({className:"".concat(index_module[direction]," ").concat(className||''),style:style},newRes,{nodetype:direction}),children,direction==='column'?/*#__PURE__*/index_js_default().createElement("div",{className:index_module.columnAuto}):null);}}]);return Container;}(index_js_.Component);/* harmony default export */ const src = (Container);

/***/ })

}]);