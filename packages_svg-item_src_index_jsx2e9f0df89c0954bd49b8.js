"use strict";
(self["webpackChunkicode_run"] = self["webpackChunkicode_run"] || []).push([["packages_svg-item_src_index_jsx"],{

/***/ 23187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ getColorPalettes),
/* harmony export */   "u": () => (/* binding */ getColorAlpha)
/* harmony export */ });
/* harmony import */ var _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36560);
/* harmony import */ var _ant_design_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97413);
var getColorPalettes=function getColorPalettes(baseColor,isDark){var newBaseColor=new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_1__/* .TinyColor */ .C(baseColor);return (0,_ant_design_colors__WEBPACK_IMPORTED_MODULE_0__/* .generate */ .R_)(newBaseColor.toRgbString(),{theme:isDark?'dark':'',backgroundColor:isDark?'#000':'#fff'});};var getColorAlpha=function getColorAlpha(baseColor,alpha){var newBaseColor=new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_1__/* .TinyColor */ .C(baseColor);newBaseColor.setAlpha(alpha);return newBaseColor.toRgbString();};

/***/ }),

/***/ 76817:
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
;// CONCATENATED MODULE: ./packages/svg-item/src/index.module.less
// extracted by mini-css-extract-plugin
/* harmony default export */ const index_module = ({"box":"packages-svg-item-src-index-module__box","svg":"packages-svg-item-src-index-module__svg","content":"packages-svg-item-src-index-module__content","contentHad":"packages-svg-item-src-index-module__contentHad"});
// EXTERNAL MODULE: ./packages/component-layout/utils/colorParse.js
var colorParse = __webpack_require__(23187);
;// CONCATENATED MODULE: ./packages/svg-item/src/index.jsx
function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}/**
  * @author tianyanrong
  */var Text=/*#__PURE__*/function(_Component){_inherits(Text,_Component);var _super=_createSuper(Text);function Text(){var _this;_classCallCheck(this,Text);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));_this.state={};_this.getData=function(){var _this$props=_this.props,dataKeys=_this$props.dataKeys,_this$props$data=_this$props.data,data=_this$props$data===void 0?[]:_this$props$data;var dataObj=data[0]||{};return dataKeys.map(function(item,index){return{id:"".concat(_this.idName,"_").concat(index),label:item.title,value:dataObj[item.keyName]};});};_this.countUp=function(el,value,end,speed,type){var newValue=value+speed;if(type==='less'){newValue=value-speed;}if(el){el.innerHTML=newValue>=end?end:newValue;}if(type==='more'&&newValue<end||type==='less'&&newValue>end){_this.countUpTime=setTimeout(function(){_this.countUp(el,newValue,end,speed,type);},20);}};_this.setValue=function(data){data.forEach(function(item,index){var el=document.getElementsByName(item.id);el=el&&el[0];if(el&&item.value!==el.innerHTML){var end=parseInt(item.value,10);var start=parseInt(el.innerHTML,10)||0;var speed=parseInt((end-start)/50,10)||1;_this.countUp(el,start,end,speed,start<end?'more':'less');}});};_this.idName='svgItem_'+ +new Date();return _this;}_createClass(Text,[{key:"componentDidMount",value:function componentDidMount(){var data=this.getData()||[];this.setValue(data);}},{key:"componentDidUpdate",value:function componentDidUpdate(){var data=this.getData()||[];this.setValue(data);}},{key:"render",value:function render(){var _this$props2=this.props,_this$props2$classNam=_this$props2.className,className=_this$props2$classNam===void 0?'':_this$props2$classNam,_this$props2$children=_this$props2.children,children=_this$props2$children===void 0?null:_this$props2$children,_this$props2$style=_this$props2.style,style=_this$props2$style===void 0?{}:_this$props2$style,global=_this$props2.global,parseOptions=_this$props2.parseOptions;var data=this.getData()||[];var svg='<div></div>';try{svg=parseOptions(data,this.props,_objectSpread(_objectSpread({},global),{},{getColorPalettes:colorParse/* getColorPalettes */.K,getColorAlpha:colorParse/* getColorAlpha */.u}));}catch(e){console.log('------get SVG配置 error',e);}return/*#__PURE__*/index_js_default().createElement("div",{className:"".concat(index_module.box," ").concat(className||''),style:style},/*#__PURE__*/index_js_default().createElement("div",{className:"".concat(index_module.svg," svg"),dangerouslySetInnerHTML:{__html:svg}}),/*#__PURE__*/index_js_default().createElement("div",{className:"".concat(index_module.content," content ").concat(children?index_module.contentHad:'')},children));}}]);return Text;}(index_js_.Component);/* harmony default export */ const src = (Text);

/***/ }),

/***/ 97413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R_": () => (/* binding */ generate),
/* harmony export */   "ez": () => (/* binding */ presetPrimaryColors)
/* harmony export */ });
/* unused harmony exports blue, cyan, geekblue, gold, green, grey, lime, magenta, orange, presetDarkPalettes, presetPalettes, purple, red, volcano, yellow */
/* harmony import */ var _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77454);
/* harmony import */ var _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12837);
var hueStep=2;// 色相阶梯
var saturationStep=0.16;// 饱和度阶梯，浅色部分
var saturationStep2=0.05;// 饱和度阶梯，深色部分
var brightnessStep1=0.05;// 亮度阶梯，浅色部分
var brightnessStep2=0.15;// 亮度阶梯，深色部分
var lightColorCount=5;// 浅色数量，主色上
var darkColorCount=4;// 深色数量，主色下
// 暗色主题颜色映射关系表
var darkColorMap=[{index:7,opacity:0.15},{index:6,opacity:0.25},{index:5,opacity:0.3},{index:5,opacity:0.45},{index:5,opacity:0.65},{index:5,opacity:0.85},{index:4,opacity:0.9},{index:3,opacity:0.95},{index:2,opacity:0.97},{index:1,opacity:0.98}];// Wrapper function ported from TinyColor.prototype.toHsv
// Keep it here because of `hsv.h * 360`
function toHsv(_ref){var r=_ref.r,g=_ref.g,b=_ref.b;var hsv=(0,_ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_0__/* .rgbToHsv */ .py)(r,g,b);return{h:hsv.h*360,s:hsv.s,v:hsv.v};}// Wrapper function ported from TinyColor.prototype.toHexString
// Keep it here because of the prefix `#`
function toHex(_ref2){var r=_ref2.r,g=_ref2.g,b=_ref2.b;return"#".concat((0,_ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_0__/* .rgbToHex */ .vq)(r,g,b,false));}// Wrapper function ported from TinyColor.prototype.mix, not treeshakable.
// Amount in range [0, 1]
// Assume color1 & color2 has no alpha, since the following src code did so.
function mix(rgb1,rgb2,amount){var p=amount/100;var rgb={r:(rgb2.r-rgb1.r)*p+rgb1.r,g:(rgb2.g-rgb1.g)*p+rgb1.g,b:(rgb2.b-rgb1.b)*p+rgb1.b};return rgb;}function getHue(hsv,i,light){var hue;// 根据色相不同，色相转向不同
if(Math.round(hsv.h)>=60&&Math.round(hsv.h)<=240){hue=light?Math.round(hsv.h)-hueStep*i:Math.round(hsv.h)+hueStep*i;}else{hue=light?Math.round(hsv.h)+hueStep*i:Math.round(hsv.h)-hueStep*i;}if(hue<0){hue+=360;}else if(hue>=360){hue-=360;}return hue;}function getSaturation(hsv,i,light){// grey color don't change saturation
if(hsv.h===0&&hsv.s===0){return hsv.s;}var saturation;if(light){saturation=hsv.s-saturationStep*i;}else if(i===darkColorCount){saturation=hsv.s+saturationStep;}else{saturation=hsv.s+saturationStep2*i;}// 边界值修正
if(saturation>1){saturation=1;}// 第一格的 s 限制在 0.06-0.1 之间
if(light&&i===lightColorCount&&saturation>0.1){saturation=0.1;}if(saturation<0.06){saturation=0.06;}return Number(saturation.toFixed(2));}function getValue(hsv,i,light){var value;if(light){value=hsv.v+brightnessStep1*i;}else{value=hsv.v-brightnessStep2*i;}if(value>1){value=1;}return Number(value.toFixed(2));}function generate(color){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var patterns=[];var pColor=(0,_ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_1__/* .inputToRGB */ .uA)(color);for(var i=lightColorCount;i>0;i-=1){var hsv=toHsv(pColor);var colorString=toHex((0,_ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_1__/* .inputToRGB */ .uA)({h:getHue(hsv,i,true),s:getSaturation(hsv,i,true),v:getValue(hsv,i,true)}));patterns.push(colorString);}patterns.push(toHex(pColor));for(var _i=1;_i<=darkColorCount;_i+=1){var _hsv=toHsv(pColor);var _colorString=toHex((0,_ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_1__/* .inputToRGB */ .uA)({h:getHue(_hsv,_i),s:getSaturation(_hsv,_i),v:getValue(_hsv,_i)}));patterns.push(_colorString);}// dark theme patterns
if(opts.theme==='dark'){return darkColorMap.map(function(_ref3){var index=_ref3.index,opacity=_ref3.opacity;var darkColorString=toHex(mix((0,_ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_1__/* .inputToRGB */ .uA)(opts.backgroundColor||'#141414'),(0,_ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_1__/* .inputToRGB */ .uA)(patterns[index]),opacity*100));return darkColorString;});}return patterns;}var presetPrimaryColors={red:'#F5222D',volcano:'#FA541C',orange:'#FA8C16',gold:'#FAAD14',yellow:'#FADB14',lime:'#A0D911',green:'#52C41A',cyan:'#13C2C2',blue:'#1890FF',geekblue:'#2F54EB',purple:'#722ED1',magenta:'#EB2F96',grey:'#666666'};var presetPalettes={};var presetDarkPalettes={};Object.keys(presetPrimaryColors).forEach(function(key){presetPalettes[key]=generate(presetPrimaryColors[key]);presetPalettes[key].primary=presetPalettes[key][5];// dark presetPalettes
presetDarkPalettes[key]=generate(presetPrimaryColors[key],{theme:'dark',backgroundColor:'#141414'});presetDarkPalettes[key].primary=presetDarkPalettes[key][5];});var red=presetPalettes.red;var volcano=presetPalettes.volcano;var gold=presetPalettes.gold;var orange=presetPalettes.orange;var yellow=presetPalettes.yellow;var lime=presetPalettes.lime;var green=presetPalettes.green;var cyan=presetPalettes.cyan;var blue=presetPalettes.blue;var geekblue=presetPalettes.geekblue;var purple=presetPalettes.purple;var magenta=presetPalettes.magenta;var grey=presetPalettes.grey;

/***/ }),

/***/ 77454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T6": () => (/* binding */ convertHexToDecimal),
/* harmony export */   "VD": () => (/* binding */ parseIntFromHex),
/* harmony export */   "WE": () => (/* binding */ hsvToRgb),
/* harmony export */   "Yt": () => (/* binding */ numberInputToObject),
/* harmony export */   "lC": () => (/* binding */ rgbToHsl),
/* harmony export */   "py": () => (/* binding */ rgbToHsv),
/* harmony export */   "rW": () => (/* binding */ rgbToRgb),
/* harmony export */   "s": () => (/* binding */ rgbaToHex),
/* harmony export */   "ve": () => (/* binding */ hslToRgb),
/* harmony export */   "vq": () => (/* binding */ rgbToHex)
/* harmony export */ });
/* unused harmony exports rgbaToArgbHex, convertDecimalToHex */
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41680);
// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
/**
 * Handle bounds / percentage checking to conform to CSS color spec
 * <http://www.w3.org/TR/css3-color/>
 * *Assumes:* r, g, b in [0, 255] or [0, 1]
 * *Returns:* { r, g, b } in [0, 255]
 */function rgbToRgb(r,g,b){return{r:(0,_util__WEBPACK_IMPORTED_MODULE_0__/* .bound01 */ .sh)(r,255)*255,g:(0,_util__WEBPACK_IMPORTED_MODULE_0__/* .bound01 */ .sh)(g,255)*255,b:(0,_util__WEBPACK_IMPORTED_MODULE_0__/* .bound01 */ .sh)(b,255)*255};}/**
 * Converts an RGB color value to HSL.
 * *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
 * *Returns:* { h, s, l } in [0,1]
 */function rgbToHsl(r,g,b){r=(0,_util__WEBPACK_IMPORTED_MODULE_0__/* .bound01 */ .sh)(r,255);g=(0,_util__WEBPACK_IMPORTED_MODULE_0__/* .bound01 */ .sh)(g,255);b=(0,_util__WEBPACK_IMPORTED_MODULE_0__/* .bound01 */ .sh)(b,255);var max=Math.max(r,g,b);var min=Math.min(r,g,b);var h=0;var s=0;var l=(max+min)/2;if(max===min){s=0;h=0;// achromatic
}else{var d=max-min;s=l>0.5?d/(2-max-min):d/(max+min);switch(max){case r:h=(g-b)/d+(g<b?6:0);break;case g:h=(b-r)/d+2;break;case b:h=(r-g)/d+4;break;default:break;}h/=6;}return{h:h,s:s,l:l};}function hue2rgb(p,q,t){if(t<0){t+=1;}if(t>1){t-=1;}if(t<1/6){return p+(q-p)*(6*t);}if(t<1/2){return q;}if(t<2/3){return p+(q-p)*(2/3-t)*6;}return p;}/**
 * Converts an HSL color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */function hslToRgb(h,s,l){var r;var g;var b;h=(0,_util__WEBPACK_IMPORTED_MODULE_0__/* .bound01 */ .sh)(h,360);s=(0,_util__WEBPACK_IMPORTED_MODULE_0__/* .bound01 */ .sh)(s,100);l=(0,_util__WEBPACK_IMPORTED_MODULE_0__/* .bound01 */ .sh)(l,100);if(s===0){// achromatic
g=l;b=l;r=l;}else{var q=l<0.5?l*(1+s):l+s-l*s;var p=2*l-q;r=hue2rgb(p,q,h+1/3);g=hue2rgb(p,q,h);b=hue2rgb(p,q,h-1/3);}return{r:r*255,g:g*255,b:b*255};}/**
 * Converts an RGB color value to HSV
 *
 * *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
 * *Returns:* { h, s, v } in [0,1]
 */function rgbToHsv(r,g,b){r=(0,_util__WEBPACK_IMPORTED_MODULE_0__/* .bound01 */ .sh)(r,255);g=(0,_util__WEBPACK_IMPORTED_MODULE_0__/* .bound01 */ .sh)(g,255);b=(0,_util__WEBPACK_IMPORTED_MODULE_0__/* .bound01 */ .sh)(b,255);var max=Math.max(r,g,b);var min=Math.min(r,g,b);var h=0;var v=max;var d=max-min;var s=max===0?0:d/max;if(max===min){h=0;// achromatic
}else{switch(max){case r:h=(g-b)/d+(g<b?6:0);break;case g:h=(b-r)/d+2;break;case b:h=(r-g)/d+4;break;default:break;}h/=6;}return{h:h,s:s,v:v};}/**
 * Converts an HSV color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */function hsvToRgb(h,s,v){h=(0,_util__WEBPACK_IMPORTED_MODULE_0__/* .bound01 */ .sh)(h,360)*6;s=(0,_util__WEBPACK_IMPORTED_MODULE_0__/* .bound01 */ .sh)(s,100);v=(0,_util__WEBPACK_IMPORTED_MODULE_0__/* .bound01 */ .sh)(v,100);var i=Math.floor(h);var f=h-i;var p=v*(1-s);var q=v*(1-f*s);var t=v*(1-(1-f)*s);var mod=i%6;var r=[v,q,p,p,t,v][mod];var g=[t,v,v,q,p,p][mod];var b=[p,p,t,v,v,q][mod];return{r:r*255,g:g*255,b:b*255};}/**
 * Converts an RGB color to hex
 *
 * Assumes r, g, and b are contained in the set [0, 255]
 * Returns a 3 or 6 character hex
 */function rgbToHex(r,g,b,allow3Char){var hex=[(0,_util__WEBPACK_IMPORTED_MODULE_0__/* .pad2 */ .FZ)(Math.round(r).toString(16)),(0,_util__WEBPACK_IMPORTED_MODULE_0__/* .pad2 */ .FZ)(Math.round(g).toString(16)),(0,_util__WEBPACK_IMPORTED_MODULE_0__/* .pad2 */ .FZ)(Math.round(b).toString(16))];// Return a 3 character hex if possible
if(allow3Char&&hex[0].startsWith(hex[0].charAt(1))&&hex[1].startsWith(hex[1].charAt(1))&&hex[2].startsWith(hex[2].charAt(1))){return hex[0].charAt(0)+hex[1].charAt(0)+hex[2].charAt(0);}return hex.join('');}/**
 * Converts an RGBA color plus alpha transparency to hex
 *
 * Assumes r, g, b are contained in the set [0, 255] and
 * a in [0, 1]. Returns a 4 or 8 character rgba hex
 */ // eslint-disable-next-line max-params
function rgbaToHex(r,g,b,a,allow4Char){var hex=[(0,_util__WEBPACK_IMPORTED_MODULE_0__/* .pad2 */ .FZ)(Math.round(r).toString(16)),(0,_util__WEBPACK_IMPORTED_MODULE_0__/* .pad2 */ .FZ)(Math.round(g).toString(16)),(0,_util__WEBPACK_IMPORTED_MODULE_0__/* .pad2 */ .FZ)(Math.round(b).toString(16)),(0,_util__WEBPACK_IMPORTED_MODULE_0__/* .pad2 */ .FZ)(convertDecimalToHex(a))];// Return a 4 character hex if possible
if(allow4Char&&hex[0].startsWith(hex[0].charAt(1))&&hex[1].startsWith(hex[1].charAt(1))&&hex[2].startsWith(hex[2].charAt(1))&&hex[3].startsWith(hex[3].charAt(1))){return hex[0].charAt(0)+hex[1].charAt(0)+hex[2].charAt(0)+hex[3].charAt(0);}return hex.join('');}/**
 * Converts an RGBA color to an ARGB Hex8 string
 * Rarely used, but required for "toFilter()"
 */function rgbaToArgbHex(r,g,b,a){var hex=[pad2(convertDecimalToHex(a)),pad2(Math.round(r).toString(16)),pad2(Math.round(g).toString(16)),pad2(Math.round(b).toString(16))];return hex.join('');}/** Converts a decimal to a hex value */function convertDecimalToHex(d){return Math.round(parseFloat(d)*255).toString(16);}/** Converts a hex value to a decimal */function convertHexToDecimal(h){return parseIntFromHex(h)/255;}/** Parse a base-16 hex value into a base-10 integer */function parseIntFromHex(val){return parseInt(val,16);}function numberInputToObject(color){return{r:color>>16,g:(color&0xff00)>>8,b:color&0xff};}

/***/ }),

/***/ 36946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ names)
/* harmony export */ });
// https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json
/**
 * @hidden
 */var names={aliceblue:'#f0f8ff',antiquewhite:'#faebd7',aqua:'#00ffff',aquamarine:'#7fffd4',azure:'#f0ffff',beige:'#f5f5dc',bisque:'#ffe4c4',black:'#000000',blanchedalmond:'#ffebcd',blue:'#0000ff',blueviolet:'#8a2be2',brown:'#a52a2a',burlywood:'#deb887',cadetblue:'#5f9ea0',chartreuse:'#7fff00',chocolate:'#d2691e',coral:'#ff7f50',cornflowerblue:'#6495ed',cornsilk:'#fff8dc',crimson:'#dc143c',cyan:'#00ffff',darkblue:'#00008b',darkcyan:'#008b8b',darkgoldenrod:'#b8860b',darkgray:'#a9a9a9',darkgreen:'#006400',darkgrey:'#a9a9a9',darkkhaki:'#bdb76b',darkmagenta:'#8b008b',darkolivegreen:'#556b2f',darkorange:'#ff8c00',darkorchid:'#9932cc',darkred:'#8b0000',darksalmon:'#e9967a',darkseagreen:'#8fbc8f',darkslateblue:'#483d8b',darkslategray:'#2f4f4f',darkslategrey:'#2f4f4f',darkturquoise:'#00ced1',darkviolet:'#9400d3',deeppink:'#ff1493',deepskyblue:'#00bfff',dimgray:'#696969',dimgrey:'#696969',dodgerblue:'#1e90ff',firebrick:'#b22222',floralwhite:'#fffaf0',forestgreen:'#228b22',fuchsia:'#ff00ff',gainsboro:'#dcdcdc',ghostwhite:'#f8f8ff',goldenrod:'#daa520',gold:'#ffd700',gray:'#808080',green:'#008000',greenyellow:'#adff2f',grey:'#808080',honeydew:'#f0fff0',hotpink:'#ff69b4',indianred:'#cd5c5c',indigo:'#4b0082',ivory:'#fffff0',khaki:'#f0e68c',lavenderblush:'#fff0f5',lavender:'#e6e6fa',lawngreen:'#7cfc00',lemonchiffon:'#fffacd',lightblue:'#add8e6',lightcoral:'#f08080',lightcyan:'#e0ffff',lightgoldenrodyellow:'#fafad2',lightgray:'#d3d3d3',lightgreen:'#90ee90',lightgrey:'#d3d3d3',lightpink:'#ffb6c1',lightsalmon:'#ffa07a',lightseagreen:'#20b2aa',lightskyblue:'#87cefa',lightslategray:'#778899',lightslategrey:'#778899',lightsteelblue:'#b0c4de',lightyellow:'#ffffe0',lime:'#00ff00',limegreen:'#32cd32',linen:'#faf0e6',magenta:'#ff00ff',maroon:'#800000',mediumaquamarine:'#66cdaa',mediumblue:'#0000cd',mediumorchid:'#ba55d3',mediumpurple:'#9370db',mediumseagreen:'#3cb371',mediumslateblue:'#7b68ee',mediumspringgreen:'#00fa9a',mediumturquoise:'#48d1cc',mediumvioletred:'#c71585',midnightblue:'#191970',mintcream:'#f5fffa',mistyrose:'#ffe4e1',moccasin:'#ffe4b5',navajowhite:'#ffdead',navy:'#000080',oldlace:'#fdf5e6',olive:'#808000',olivedrab:'#6b8e23',orange:'#ffa500',orangered:'#ff4500',orchid:'#da70d6',palegoldenrod:'#eee8aa',palegreen:'#98fb98',paleturquoise:'#afeeee',palevioletred:'#db7093',papayawhip:'#ffefd5',peachpuff:'#ffdab9',peru:'#cd853f',pink:'#ffc0cb',plum:'#dda0dd',powderblue:'#b0e0e6',purple:'#800080',rebeccapurple:'#663399',red:'#ff0000',rosybrown:'#bc8f8f',royalblue:'#4169e1',saddlebrown:'#8b4513',salmon:'#fa8072',sandybrown:'#f4a460',seagreen:'#2e8b57',seashell:'#fff5ee',sienna:'#a0522d',silver:'#c0c0c0',skyblue:'#87ceeb',slateblue:'#6a5acd',slategray:'#708090',slategrey:'#708090',snow:'#fffafa',springgreen:'#00ff7f',steelblue:'#4682b4',tan:'#d2b48c',teal:'#008080',thistle:'#d8bfd8',tomato:'#ff6347',turquoise:'#40e0d0',violet:'#ee82ee',wheat:'#f5deb3',white:'#ffffff',whitesmoke:'#f5f5f5',yellow:'#ffff00',yellowgreen:'#9acd32'};

/***/ }),

/***/ 12837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uA": () => (/* binding */ inputToRGB)
/* harmony export */ });
/* unused harmony exports stringInputToObject, isValidCSSUnit */
/* harmony import */ var _conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77454);
/* harmony import */ var _css_color_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36946);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41680);
function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}/**
 * Given a string or object, convert that input to RGB
 *
 * Possible string inputs:
 * ```
 * "red"
 * "#f00" or "f00"
 * "#ff0000" or "ff0000"
 * "#ff000000" or "ff000000"
 * "rgb 255 0 0" or "rgb (255, 0, 0)"
 * "rgb 1.0 0 0" or "rgb (1, 0, 0)"
 * "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
 * "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
 * "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
 * "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
 * "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
 * ```
 */function inputToRGB(color){var rgb={r:0,g:0,b:0};var a=1;var s=null;var v=null;var l=null;var ok=false;var format=false;if(typeof color==='string'){color=stringInputToObject(color);}if(_typeof(color)==='object'){if(isValidCSSUnit(color.r)&&isValidCSSUnit(color.g)&&isValidCSSUnit(color.b)){rgb=(0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .rgbToRgb */ .rW)(color.r,color.g,color.b);ok=true;format=String(color.r).substr(-1)==='%'?'prgb':'rgb';}else if(isValidCSSUnit(color.h)&&isValidCSSUnit(color.s)&&isValidCSSUnit(color.v)){s=(0,_util__WEBPACK_IMPORTED_MODULE_1__/* .convertToPercentage */ .JX)(color.s);v=(0,_util__WEBPACK_IMPORTED_MODULE_1__/* .convertToPercentage */ .JX)(color.v);rgb=(0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .hsvToRgb */ .WE)(color.h,s,v);ok=true;format='hsv';}else if(isValidCSSUnit(color.h)&&isValidCSSUnit(color.s)&&isValidCSSUnit(color.l)){s=(0,_util__WEBPACK_IMPORTED_MODULE_1__/* .convertToPercentage */ .JX)(color.s);l=(0,_util__WEBPACK_IMPORTED_MODULE_1__/* .convertToPercentage */ .JX)(color.l);rgb=(0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .hslToRgb */ .ve)(color.h,s,l);ok=true;format='hsl';}if(Object.prototype.hasOwnProperty.call(color,'a')){a=color.a;}}a=(0,_util__WEBPACK_IMPORTED_MODULE_1__/* .boundAlpha */ .Yq)(a);return{ok:ok,format:color.format||format,r:Math.min(255,Math.max(rgb.r,0)),g:Math.min(255,Math.max(rgb.g,0)),b:Math.min(255,Math.max(rgb.b,0)),a:a};}// <http://www.w3.org/TR/css3-values/#integers>
var CSS_INTEGER='[-\\+]?\\d+%?';// <http://www.w3.org/TR/css3-values/#number-value>
var CSS_NUMBER='[-\\+]?\\d*\\.\\d+%?';// Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
var CSS_UNIT="(?:"+CSS_NUMBER+")|(?:"+CSS_INTEGER+")";// Actual matching.
// Parentheses and commas are optional, but not required.
// Whitespace can take the place of commas or opening paren
var PERMISSIVE_MATCH3="[\\s|\\(]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")\\s*\\)?";var PERMISSIVE_MATCH4="[\\s|\\(]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")\\s*\\)?";var matchers={CSS_UNIT:new RegExp(CSS_UNIT),rgb:new RegExp('rgb'+PERMISSIVE_MATCH3),rgba:new RegExp('rgba'+PERMISSIVE_MATCH4),hsl:new RegExp('hsl'+PERMISSIVE_MATCH3),hsla:new RegExp('hsla'+PERMISSIVE_MATCH4),hsv:new RegExp('hsv'+PERMISSIVE_MATCH3),hsva:new RegExp('hsva'+PERMISSIVE_MATCH4),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};/**
 * Permissive string parsing.  Take in a number of formats, and output an object
 * based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
 */function stringInputToObject(color){color=color.trim().toLowerCase();if(color.length===0){return false;}var named=false;if(_css_color_names__WEBPACK_IMPORTED_MODULE_2__/* .names */ .R[color]){color=_css_color_names__WEBPACK_IMPORTED_MODULE_2__/* .names */ .R[color];named=true;}else if(color==='transparent'){return{r:0,g:0,b:0,a:0,format:'name'};}// Try to match string input using regular expressions.
// Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
// Just return an object and let the conversion functions handle that.
// This way the result will be the same whether the tinycolor is initialized with string or object.
var match=matchers.rgb.exec(color);if(match){return{r:match[1],g:match[2],b:match[3]};}match=matchers.rgba.exec(color);if(match){return{r:match[1],g:match[2],b:match[3],a:match[4]};}match=matchers.hsl.exec(color);if(match){return{h:match[1],s:match[2],l:match[3]};}match=matchers.hsla.exec(color);if(match){return{h:match[1],s:match[2],l:match[3],a:match[4]};}match=matchers.hsv.exec(color);if(match){return{h:match[1],s:match[2],v:match[3]};}match=matchers.hsva.exec(color);if(match){return{h:match[1],s:match[2],v:match[3],a:match[4]};}match=matchers.hex8.exec(color);if(match){return{r:(0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .parseIntFromHex */ .VD)(match[1]),g:(0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .parseIntFromHex */ .VD)(match[2]),b:(0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .parseIntFromHex */ .VD)(match[3]),a:(0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .convertHexToDecimal */ .T6)(match[4]),format:named?'name':'hex8'};}match=matchers.hex6.exec(color);if(match){return{r:(0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .parseIntFromHex */ .VD)(match[1]),g:(0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .parseIntFromHex */ .VD)(match[2]),b:(0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .parseIntFromHex */ .VD)(match[3]),format:named?'name':'hex'};}match=matchers.hex4.exec(color);if(match){return{r:(0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .parseIntFromHex */ .VD)(match[1]+match[1]),g:(0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .parseIntFromHex */ .VD)(match[2]+match[2]),b:(0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .parseIntFromHex */ .VD)(match[3]+match[3]),a:(0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .convertHexToDecimal */ .T6)(match[4]+match[4]),format:named?'name':'hex8'};}match=matchers.hex3.exec(color);if(match){return{r:(0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .parseIntFromHex */ .VD)(match[1]+match[1]),g:(0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .parseIntFromHex */ .VD)(match[2]+match[2]),b:(0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .parseIntFromHex */ .VD)(match[3]+match[3]),format:named?'name':'hex'};}return false;}/**
 * Check to see if it looks like a CSS unit
 * (see `matchers` above for definition).
 */function isValidCSSUnit(color){return Boolean(matchers.CSS_UNIT.exec(String(color)));}

/***/ }),

/***/ 36560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ TinyColor)
/* harmony export */ });
/* unused harmony export tinycolor */
/* harmony import */ var _conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77454);
/* harmony import */ var _css_color_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36946);
/* harmony import */ var _format_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12837);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41680);
var TinyColor=/** @class */function(){function TinyColor(color,opts){if(color===void 0){color='';}if(opts===void 0){opts={};}var _a;// If input is already a tinycolor, return itself
if(color instanceof TinyColor){// eslint-disable-next-line no-constructor-return
return color;}if(typeof color==='number'){color=(0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .numberInputToObject */ .Yt)(color);}this.originalInput=color;var rgb=(0,_format_input__WEBPACK_IMPORTED_MODULE_1__/* .inputToRGB */ .uA)(color);this.originalInput=color;this.r=rgb.r;this.g=rgb.g;this.b=rgb.b;this.a=rgb.a;this.roundA=Math.round(100*this.a)/100;this.format=(_a=opts.format)!==null&&_a!==void 0?_a:rgb.format;this.gradientType=opts.gradientType;// Don't let the range of [0,255] come back in [0,1].
// Potentially lose a little bit of precision here, but will fix issues where
// .5 gets interpreted as half of the total, instead of half of 1
// If it was supposed to be 128, this was already taken care of by `inputToRgb`
if(this.r<1){this.r=Math.round(this.r);}if(this.g<1){this.g=Math.round(this.g);}if(this.b<1){this.b=Math.round(this.b);}this.isValid=rgb.ok;}TinyColor.prototype.isDark=function(){return this.getBrightness()<128;};TinyColor.prototype.isLight=function(){return!this.isDark();};/**
     * Returns the perceived brightness of the color, from 0-255.
     */TinyColor.prototype.getBrightness=function(){// http://www.w3.org/TR/AERT#color-contrast
var rgb=this.toRgb();return(rgb.r*299+rgb.g*587+rgb.b*114)/1000;};/**
     * Returns the perceived luminance of a color, from 0-1.
     */TinyColor.prototype.getLuminance=function(){// http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
var rgb=this.toRgb();var R;var G;var B;var RsRGB=rgb.r/255;var GsRGB=rgb.g/255;var BsRGB=rgb.b/255;if(RsRGB<=0.03928){R=RsRGB/12.92;}else{// eslint-disable-next-line prefer-exponentiation-operator
R=Math.pow((RsRGB+0.055)/1.055,2.4);}if(GsRGB<=0.03928){G=GsRGB/12.92;}else{// eslint-disable-next-line prefer-exponentiation-operator
G=Math.pow((GsRGB+0.055)/1.055,2.4);}if(BsRGB<=0.03928){B=BsRGB/12.92;}else{// eslint-disable-next-line prefer-exponentiation-operator
B=Math.pow((BsRGB+0.055)/1.055,2.4);}return 0.2126*R+0.7152*G+0.0722*B;};/**
     * Returns the alpha value of a color, from 0-1.
     */TinyColor.prototype.getAlpha=function(){return this.a;};/**
     * Sets the alpha value on the current color.
     *
     * @param alpha - The new alpha value. The accepted range is 0-1.
     */TinyColor.prototype.setAlpha=function(alpha){this.a=(0,_util__WEBPACK_IMPORTED_MODULE_2__/* .boundAlpha */ .Yq)(alpha);this.roundA=Math.round(100*this.a)/100;return this;};/**
     * Returns the object as a HSVA object.
     */TinyColor.prototype.toHsv=function(){var hsv=(0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .rgbToHsv */ .py)(this.r,this.g,this.b);return{h:hsv.h*360,s:hsv.s,v:hsv.v,a:this.a};};/**
     * Returns the hsva values interpolated into a string with the following format:
     * "hsva(xxx, xxx, xxx, xx)".
     */TinyColor.prototype.toHsvString=function(){var hsv=(0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .rgbToHsv */ .py)(this.r,this.g,this.b);var h=Math.round(hsv.h*360);var s=Math.round(hsv.s*100);var v=Math.round(hsv.v*100);return this.a===1?"hsv("+h+", "+s+"%, "+v+"%)":"hsva("+h+", "+s+"%, "+v+"%, "+this.roundA+")";};/**
     * Returns the object as a HSLA object.
     */TinyColor.prototype.toHsl=function(){var hsl=(0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .rgbToHsl */ .lC)(this.r,this.g,this.b);return{h:hsl.h*360,s:hsl.s,l:hsl.l,a:this.a};};/**
     * Returns the hsla values interpolated into a string with the following format:
     * "hsla(xxx, xxx, xxx, xx)".
     */TinyColor.prototype.toHslString=function(){var hsl=(0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .rgbToHsl */ .lC)(this.r,this.g,this.b);var h=Math.round(hsl.h*360);var s=Math.round(hsl.s*100);var l=Math.round(hsl.l*100);return this.a===1?"hsl("+h+", "+s+"%, "+l+"%)":"hsla("+h+", "+s+"%, "+l+"%, "+this.roundA+")";};/**
     * Returns the hex value of the color.
     * @param allow3Char will shorten hex value to 3 char if possible
     */TinyColor.prototype.toHex=function(allow3Char){if(allow3Char===void 0){allow3Char=false;}return (0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .rgbToHex */ .vq)(this.r,this.g,this.b,allow3Char);};/**
     * Returns the hex value of the color -with a # appened.
     * @param allow3Char will shorten hex value to 3 char if possible
     */TinyColor.prototype.toHexString=function(allow3Char){if(allow3Char===void 0){allow3Char=false;}return'#'+this.toHex(allow3Char);};/**
     * Returns the hex 8 value of the color.
     * @param allow4Char will shorten hex value to 4 char if possible
     */TinyColor.prototype.toHex8=function(allow4Char){if(allow4Char===void 0){allow4Char=false;}return (0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .rgbaToHex */ .s)(this.r,this.g,this.b,this.a,allow4Char);};/**
     * Returns the hex 8 value of the color -with a # appened.
     * @param allow4Char will shorten hex value to 4 char if possible
     */TinyColor.prototype.toHex8String=function(allow4Char){if(allow4Char===void 0){allow4Char=false;}return'#'+this.toHex8(allow4Char);};/**
     * Returns the object as a RGBA object.
     */TinyColor.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a};};/**
     * Returns the RGBA values interpolated into a string with the following format:
     * "RGBA(xxx, xxx, xxx, xx)".
     */TinyColor.prototype.toRgbString=function(){var r=Math.round(this.r);var g=Math.round(this.g);var b=Math.round(this.b);return this.a===1?"rgb("+r+", "+g+", "+b+")":"rgba("+r+", "+g+", "+b+", "+this.roundA+")";};/**
     * Returns the object as a RGBA object.
     */TinyColor.prototype.toPercentageRgb=function(){var fmt=function fmt(x){return Math.round((0,_util__WEBPACK_IMPORTED_MODULE_2__/* .bound01 */ .sh)(x,255)*100)+"%";};return{r:fmt(this.r),g:fmt(this.g),b:fmt(this.b),a:this.a};};/**
     * Returns the RGBA relative values interpolated into a string
     */TinyColor.prototype.toPercentageRgbString=function(){var rnd=function rnd(x){return Math.round((0,_util__WEBPACK_IMPORTED_MODULE_2__/* .bound01 */ .sh)(x,255)*100);};return this.a===1?"rgb("+rnd(this.r)+"%, "+rnd(this.g)+"%, "+rnd(this.b)+"%)":"rgba("+rnd(this.r)+"%, "+rnd(this.g)+"%, "+rnd(this.b)+"%, "+this.roundA+")";};/**
     * The 'real' name of the color -if there is one.
     */TinyColor.prototype.toName=function(){if(this.a===0){return'transparent';}if(this.a<1){return false;}var hex='#'+(0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .rgbToHex */ .vq)(this.r,this.g,this.b,false);for(var _i=0,_a=Object.entries(_css_color_names__WEBPACK_IMPORTED_MODULE_3__/* .names */ .R);_i<_a.length;_i++){var _b=_a[_i],key=_b[0],value=_b[1];if(hex===value){return key;}}return false;};TinyColor.prototype.toString=function(format){var formatSet=Boolean(format);format=format!==null&&format!==void 0?format:this.format;var formattedString=false;var hasAlpha=this.a<1&&this.a>=0;var needsAlphaFormat=!formatSet&&hasAlpha&&(format.startsWith('hex')||format==='name');if(needsAlphaFormat){// Special case for "transparent", all other non-alpha formats
// will return rgba when there is transparency.
if(format==='name'&&this.a===0){return this.toName();}return this.toRgbString();}if(format==='rgb'){formattedString=this.toRgbString();}if(format==='prgb'){formattedString=this.toPercentageRgbString();}if(format==='hex'||format==='hex6'){formattedString=this.toHexString();}if(format==='hex3'){formattedString=this.toHexString(true);}if(format==='hex4'){formattedString=this.toHex8String(true);}if(format==='hex8'){formattedString=this.toHex8String();}if(format==='name'){formattedString=this.toName();}if(format==='hsl'){formattedString=this.toHslString();}if(format==='hsv'){formattedString=this.toHsvString();}return formattedString||this.toHexString();};TinyColor.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b);};TinyColor.prototype.clone=function(){return new TinyColor(this.toString());};/**
     * Lighten the color a given amount. Providing 100 will always return white.
     * @param amount - valid between 1-100
     */TinyColor.prototype.lighten=function(amount){if(amount===void 0){amount=10;}var hsl=this.toHsl();hsl.l+=amount/100;hsl.l=(0,_util__WEBPACK_IMPORTED_MODULE_2__/* .clamp01 */ .V2)(hsl.l);return new TinyColor(hsl);};/**
     * Brighten the color a given amount, from 0 to 100.
     * @param amount - valid between 1-100
     */TinyColor.prototype.brighten=function(amount){if(amount===void 0){amount=10;}var rgb=this.toRgb();rgb.r=Math.max(0,Math.min(255,rgb.r-Math.round(255*-(amount/100))));rgb.g=Math.max(0,Math.min(255,rgb.g-Math.round(255*-(amount/100))));rgb.b=Math.max(0,Math.min(255,rgb.b-Math.round(255*-(amount/100))));return new TinyColor(rgb);};/**
     * Darken the color a given amount, from 0 to 100.
     * Providing 100 will always return black.
     * @param amount - valid between 1-100
     */TinyColor.prototype.darken=function(amount){if(amount===void 0){amount=10;}var hsl=this.toHsl();hsl.l-=amount/100;hsl.l=(0,_util__WEBPACK_IMPORTED_MODULE_2__/* .clamp01 */ .V2)(hsl.l);return new TinyColor(hsl);};/**
     * Mix the color with pure white, from 0 to 100.
     * Providing 0 will do nothing, providing 100 will always return white.
     * @param amount - valid between 1-100
     */TinyColor.prototype.tint=function(amount){if(amount===void 0){amount=10;}return this.mix('white',amount);};/**
     * Mix the color with pure black, from 0 to 100.
     * Providing 0 will do nothing, providing 100 will always return black.
     * @param amount - valid between 1-100
     */TinyColor.prototype.shade=function(amount){if(amount===void 0){amount=10;}return this.mix('black',amount);};/**
     * Desaturate the color a given amount, from 0 to 100.
     * Providing 100 will is the same as calling greyscale
     * @param amount - valid between 1-100
     */TinyColor.prototype.desaturate=function(amount){if(amount===void 0){amount=10;}var hsl=this.toHsl();hsl.s-=amount/100;hsl.s=(0,_util__WEBPACK_IMPORTED_MODULE_2__/* .clamp01 */ .V2)(hsl.s);return new TinyColor(hsl);};/**
     * Saturate the color a given amount, from 0 to 100.
     * @param amount - valid between 1-100
     */TinyColor.prototype.saturate=function(amount){if(amount===void 0){amount=10;}var hsl=this.toHsl();hsl.s+=amount/100;hsl.s=(0,_util__WEBPACK_IMPORTED_MODULE_2__/* .clamp01 */ .V2)(hsl.s);return new TinyColor(hsl);};/**
     * Completely desaturates a color into greyscale.
     * Same as calling `desaturate(100)`
     */TinyColor.prototype.greyscale=function(){return this.desaturate(100);};/**
     * Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
     * Values outside of this range will be wrapped into this range.
     */TinyColor.prototype.spin=function(amount){var hsl=this.toHsl();var hue=(hsl.h+amount)%360;hsl.h=hue<0?360+hue:hue;return new TinyColor(hsl);};/**
     * Mix the current color a given amount with another color, from 0 to 100.
     * 0 means no mixing (return current color).
     */TinyColor.prototype.mix=function(color,amount){if(amount===void 0){amount=50;}var rgb1=this.toRgb();var rgb2=new TinyColor(color).toRgb();var p=amount/100;var rgba={r:(rgb2.r-rgb1.r)*p+rgb1.r,g:(rgb2.g-rgb1.g)*p+rgb1.g,b:(rgb2.b-rgb1.b)*p+rgb1.b,a:(rgb2.a-rgb1.a)*p+rgb1.a};return new TinyColor(rgba);};TinyColor.prototype.analogous=function(results,slices){if(results===void 0){results=6;}if(slices===void 0){slices=30;}var hsl=this.toHsl();var part=360/slices;var ret=[this];for(hsl.h=(hsl.h-(part*results>>1)+720)%360;--results;){hsl.h=(hsl.h+part)%360;ret.push(new TinyColor(hsl));}return ret;};/**
     * taken from https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js
     */TinyColor.prototype.complement=function(){var hsl=this.toHsl();hsl.h=(hsl.h+180)%360;return new TinyColor(hsl);};TinyColor.prototype.monochromatic=function(results){if(results===void 0){results=6;}var hsv=this.toHsv();var h=hsv.h;var s=hsv.s;var v=hsv.v;var res=[];var modification=1/results;while(results--){res.push(new TinyColor({h:h,s:s,v:v}));v=(v+modification)%1;}return res;};TinyColor.prototype.splitcomplement=function(){var hsl=this.toHsl();var h=hsl.h;return[this,new TinyColor({h:(h+72)%360,s:hsl.s,l:hsl.l}),new TinyColor({h:(h+216)%360,s:hsl.s,l:hsl.l})];};/**
     * Compute how the color would appear on a background
     */TinyColor.prototype.onBackground=function(background){var fg=this.toRgb();var bg=new TinyColor(background).toRgb();return new TinyColor({r:bg.r+(fg.r-bg.r)*fg.a,g:bg.g+(fg.g-bg.g)*fg.a,b:bg.b+(fg.b-bg.b)*fg.a});};/**
     * Alias for `polyad(3)`
     */TinyColor.prototype.triad=function(){return this.polyad(3);};/**
     * Alias for `polyad(4)`
     */TinyColor.prototype.tetrad=function(){return this.polyad(4);};/**
     * Get polyad colors, like (for 1, 2, 3, 4, 5, 6, 7, 8, etc...)
     * monad, dyad, triad, tetrad, pentad, hexad, heptad, octad, etc...
     */TinyColor.prototype.polyad=function(n){var hsl=this.toHsl();var h=hsl.h;var result=[this];var increment=360/n;for(var i=1;i<n;i++){result.push(new TinyColor({h:(h+i*increment)%360,s:hsl.s,l:hsl.l}));}return result;};/**
     * compare color vs current color
     */TinyColor.prototype.equals=function(color){return this.toRgbString()===new TinyColor(color).toRgbString();};return TinyColor;}();// kept for backwards compatability with v1
function tinycolor(color,opts){if(color===void 0){color='';}if(opts===void 0){opts={};}return new TinyColor(color,opts);}

/***/ }),

/***/ 41680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FZ": () => (/* binding */ pad2),
/* harmony export */   "JX": () => (/* binding */ convertToPercentage),
/* harmony export */   "V2": () => (/* binding */ clamp01),
/* harmony export */   "Yq": () => (/* binding */ boundAlpha),
/* harmony export */   "sh": () => (/* binding */ bound01)
/* harmony export */ });
/* unused harmony exports isOnePointZero, isPercentage */
/**
 * Take input from [0, n] and return it as [0, 1]
 * @hidden
 */function bound01(n,max){if(isOnePointZero(n)){n='100%';}var isPercent=isPercentage(n);n=max===360?n:Math.min(max,Math.max(0,parseFloat(n)));// Automatically convert percentage into number
if(isPercent){n=parseInt(String(n*max),10)/100;}// Handle floating point rounding errors
if(Math.abs(n-max)<0.000001){return 1;}// Convert into [0, 1] range if it isn't already
if(max===360){// If n is a hue given in degrees,
// wrap around out-of-range values into [0, 360] range
// then convert into [0, 1].
n=(n<0?n%max+max:n%max)/parseFloat(String(max));}else{// If n not a hue given in degrees
// Convert into [0, 1] range if it isn't already.
n=n%max/parseFloat(String(max));}return n;}/**
 * Force a number between 0 and 1
 * @hidden
 */function clamp01(val){return Math.min(1,Math.max(0,val));}/**
 * Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
 * <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
 * @hidden
 */function isOnePointZero(n){return typeof n==='string'&&n.indexOf('.')!==-1&&parseFloat(n)===1;}/**
 * Check to see if string passed in is a percentage
 * @hidden
 */function isPercentage(n){return typeof n==='string'&&n.indexOf('%')!==-1;}/**
 * Return a valid alpha value [0,1] with all invalid values being set to 1
 * @hidden
 */function boundAlpha(a){a=parseFloat(a);if(isNaN(a)||a<0||a>1){a=1;}return a;}/**
 * Replace a decimal with it's percentage value
 * @hidden
 */function convertToPercentage(n){if(n<=1){return Number(n)*100+"%";}return n;}/**
 * Force a hex value to have 2 characters
 * @hidden
 */function pad2(c){return c.length===1?'0'+c:String(c);}

/***/ })

}]);