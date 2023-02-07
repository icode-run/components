"use strict";
(self["webpackChunkicode_run"] = self["webpackChunkicode_run"] || []).push([["chunk-echarts~7c83dad8"],{

/***/ 25000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ updateCenterAndZoom)
/* harmony export */ });
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/function getCenterCoord(view,point){// Use projected coord as center because it's linear.
return view.pointToProjected?view.pointToProjected(point):view.pointToData(point);}function updateCenterAndZoom(view,payload,zoomLimit,api){var previousZoom=view.getZoom();var center=view.getCenter();var zoom=payload.zoom;var point=view.projectedToPoint?view.projectedToPoint(center):view.dataToPoint(center);if(payload.dx!=null&&payload.dy!=null){point[0]-=payload.dx;point[1]-=payload.dy;view.setCenter(getCenterCoord(view,point),api);}if(zoom!=null){if(zoomLimit){var zoomMin=zoomLimit.min||0;var zoomMax=zoomLimit.max||Infinity;zoom=Math.max(Math.min(previousZoom*zoom,zoomMax),zoomMin)/previousZoom;}// Zoom on given point(originX, originY)
view.scaleX*=zoom;view.scaleY*=zoom;var fixX=(payload.originX-view.x)*(zoom-1);var fixY=(payload.originY-view.y)*(zoom-1);view.x-=fixX;view.y-=fixY;view.updateTransform();// Get the new center
view.setCenter(getCenterCoord(view,point),api);view.setZoom(zoom*previousZoom);}return{center:view.getCenter(),zoom:view.getZoom()};}

/***/ }),

/***/ 21438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ updateProps),
/* harmony export */   "KZ": () => (/* binding */ initProps),
/* harmony export */   "XD": () => (/* binding */ removeElementWithFadeOut),
/* harmony export */   "Zi": () => (/* binding */ saveOldStyle),
/* harmony export */   "bX": () => (/* binding */ removeElement),
/* harmony export */   "eq": () => (/* binding */ isElementRemoved)
/* harmony export */ });
/* unused harmony exports transitionStore, getAnimationConfig, getOldStyle */
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57697);
/* harmony import */ var _util_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23958);
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/// Stored properties for further transition.
var transitionStore=(0,_util_model_js__WEBPACK_IMPORTED_MODULE_0__/* .makeInner */ .Yf)();/**
 * Return null if animation is disabled.
 */function getAnimationConfig(animationType,animatableModel,dataIndex,// Extra opts can override the option in animatable model.
extraOpts,// TODO It's only for pictorial bar now.
extraDelayParams){var animationPayload;// Check if there is global animation configuration from dataZoom/resize can override the config in option.
// If animation is enabled. Will use this animation config in payload.
// If animation is disabled. Just ignore it.
if(animatableModel&&animatableModel.ecModel){var updatePayload=animatableModel.ecModel.getUpdatePayload();animationPayload=updatePayload&&updatePayload.animation;}var animationEnabled=animatableModel&&animatableModel.isAnimationEnabled();var isUpdate=animationType==='update';if(animationEnabled){var duration=void 0;var easing=void 0;var delay=void 0;if(extraOpts){duration=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .retrieve2 */ .pD)(extraOpts.duration,200);easing=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .retrieve2 */ .pD)(extraOpts.easing,'cubicOut');delay=0;}else{duration=animatableModel.getShallow(isUpdate?'animationDurationUpdate':'animationDuration');easing=animatableModel.getShallow(isUpdate?'animationEasingUpdate':'animationEasing');delay=animatableModel.getShallow(isUpdate?'animationDelayUpdate':'animationDelay');}// animation from payload has highest priority.
if(animationPayload){animationPayload.duration!=null&&(duration=animationPayload.duration);animationPayload.easing!=null&&(easing=animationPayload.easing);animationPayload.delay!=null&&(delay=animationPayload.delay);}if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isFunction */ .mf)(delay)){delay=delay(dataIndex,extraDelayParams);}if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isFunction */ .mf)(duration)){duration=duration(dataIndex);}var config={duration:duration||0,delay:delay,easing:easing};return config;}else{return null;}}function animateOrSetProps(animationType,el,props,animatableModel,dataIndex,cb,during){var isFrom=false;var removeOpt;if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isFunction */ .mf)(dataIndex)){during=cb;cb=dataIndex;dataIndex=null;}else if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isObject */ .Kn)(dataIndex)){cb=dataIndex.cb;during=dataIndex.during;isFrom=dataIndex.isFrom;removeOpt=dataIndex.removeOpt;dataIndex=dataIndex.dataIndex;}var isRemove=animationType==='leave';if(!isRemove){// Must stop the remove animation.
el.stopAnimation('leave');}var animationConfig=getAnimationConfig(animationType,animatableModel,dataIndex,isRemove?removeOpt||{}:null,animatableModel&&animatableModel.getAnimationDelayParams?animatableModel.getAnimationDelayParams(el,dataIndex):null);if(animationConfig&&animationConfig.duration>0){var duration=animationConfig.duration;var animationDelay=animationConfig.delay;var animationEasing=animationConfig.easing;var animateConfig={duration:duration,delay:animationDelay||0,easing:animationEasing,done:cb,force:!!cb||!!during,// Set to final state in update/init animation.
// So the post processing based on the path shape can be done correctly.
setToFinal:!isRemove,scope:animationType,during:during};isFrom?el.animateFrom(props,animateConfig):el.animateTo(props,animateConfig);}else{el.stopAnimation();// If `isFrom`, the props is the "from" props.
!isFrom&&el.attr(props);// Call during at least once.
during&&during(1);cb&&cb();}}/**
 * Update graphic element properties with or without animation according to the
 * configuration in series.
 *
 * Caution: this method will stop previous animation.
 * So do not use this method to one element twice before
 * animation starts, unless you know what you are doing.
 * @example
 *     graphic.updateProps(el, {
 *         position: [100, 100]
 *     }, seriesModel, dataIndex, function () { console.log('Animation done!'); });
 *     // Or
 *     graphic.updateProps(el, {
 *         position: [100, 100]
 *     }, seriesModel, function () { console.log('Animation done!'); });
 */function updateProps(el,props,// TODO: TYPE AnimatableModel
animatableModel,dataIndex,cb,during){animateOrSetProps('update',el,props,animatableModel,dataIndex,cb,during);}/**
 * Init graphic element properties with or without animation according to the
 * configuration in series.
 *
 * Caution: this method will stop previous animation.
 * So do not use this method to one element twice before
 * animation starts, unless you know what you are doing.
 */function initProps(el,props,animatableModel,dataIndex,cb,during){animateOrSetProps('enter',el,props,animatableModel,dataIndex,cb,during);}/**
 * If element is removed.
 * It can determine if element is having remove animation.
 */function isElementRemoved(el){if(!el.__zr){return true;}for(var i=0;i<el.animators.length;i++){var animator=el.animators[i];if(animator.scope==='leave'){return true;}}return false;}/**
 * Remove graphic element
 */function removeElement(el,props,animatableModel,dataIndex,cb,during){// Don't do remove animation twice.
if(isElementRemoved(el)){return;}animateOrSetProps('leave',el,props,animatableModel,dataIndex,cb,during);}function fadeOutDisplayable(el,animatableModel,dataIndex,done){el.removeTextContent();el.removeTextGuideLine();removeElement(el,{style:{opacity:0}},animatableModel,dataIndex,done);}function removeElementWithFadeOut(el,animatableModel,dataIndex){function doRemove(){el.parent&&el.parent.remove(el);}// Hide label and labelLine first
// TODO Also use fade out animation?
if(!el.isGroup){fadeOutDisplayable(el,animatableModel,dataIndex,doRemove);}else{el.traverse(function(disp){if(!disp.isGroup){// Can invoke doRemove multiple times.
fadeOutDisplayable(disp,animatableModel,dataIndex,doRemove);}});}}/**
 * Save old style for style transition in universalTransition module.
 * It's used when element will be reused in each render.
 * For chart like map, heatmap, which will always create new element.
 * We don't need to save this because universalTransition can get old style from the old element
 */function saveOldStyle(el){transitionStore(el).oldStyle=el.style;}function getOldStyle(el){return transitionStore(el).oldStyle;}

/***/ }),

/***/ 82636:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/extension.js
var extension = __webpack_require__(37107);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(57697);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/layout/barGrid.js
var barGrid = __webpack_require__(78356);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/processor/dataSample.js
var dataSample = __webpack_require__(61203);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(88161);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/model/Series.js
var Series = __webpack_require__(49261);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/chart/helper/createSeriesData.js
var createSeriesData = __webpack_require__(38839);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/bar/BaseBarSeries.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/var BaseBarSeriesModel=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(BaseBarSeriesModel,_super);function BaseBarSeriesModel(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=BaseBarSeriesModel.type;return _this;}BaseBarSeriesModel.prototype.getInitialData=function(option,ecModel){return (0,createSeriesData/* default */.Z)(null,this,{useEncodeDefaulter:true});};BaseBarSeriesModel.prototype.getMarkerPosition=function(value){var coordSys=this.coordinateSystem;if(coordSys&&coordSys.clampData){// PENDING if clamp ?
var pt=coordSys.dataToPoint(coordSys.clampData(value));var data=this.getData();var offset=data.getLayout('offset');var size=data.getLayout('size');var offsetIndex=coordSys.getBaseAxis().isHorizontal()?0:1;pt[offsetIndex]+=offset+size/2;return pt;}return[NaN,NaN];};BaseBarSeriesModel.type='series.__base_bar__';BaseBarSeriesModel.defaultOption={// zlevel: 0,
z:2,coordinateSystem:'cartesian2d',legendHoverLink:true,// stack: null
// Cartesian coordinate system
// xAxisIndex: 0,
// yAxisIndex: 0,
barMinHeight:0,barMinAngle:0,// cursor: null,
large:false,largeThreshold:400,progressive:3e3,progressiveChunkMode:'mod'};return BaseBarSeriesModel;}(Series/* default */.Z);Series/* default.registerClass */.Z.registerClass(BaseBarSeriesModel);/* harmony default export */ const BaseBarSeries = (BaseBarSeriesModel);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/component.js
var component = __webpack_require__(36189);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/bar/BarSeries.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/var BarSeriesModel=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(BarSeriesModel,_super);function BarSeriesModel(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=BarSeriesModel.type;return _this;}BarSeriesModel.prototype.getInitialData=function(){return (0,createSeriesData/* default */.Z)(null,this,{useEncodeDefaulter:true,createInvertedIndices:!!this.get('realtimeSort',true)||null});};/**
   * @override
   */BarSeriesModel.prototype.getProgressive=function(){// Do not support progressive in normal mode.
return this.get('large')?this.get('progressive'):false;};/**
   * @override
   */BarSeriesModel.prototype.getProgressiveThreshold=function(){// Do not support progressive in normal mode.
var progressiveThreshold=this.get('progressiveThreshold');var largeThreshold=this.get('largeThreshold');if(largeThreshold>progressiveThreshold){progressiveThreshold=largeThreshold;}return progressiveThreshold;};BarSeriesModel.prototype.brushSelector=function(dataIndex,data,selectors){return selectors.rect(data.getItemLayout(dataIndex));};BarSeriesModel.type='series.bar';BarSeriesModel.dependencies=['grid','polar'];BarSeriesModel.defaultOption=(0,component/* inheritDefaultOption */.ZL)(BaseBarSeries.defaultOption,{// If clipped
// Only available on cartesian2d
clip:true,roundCap:false,showBackground:false,backgroundStyle:{color:'rgba(180, 180, 180, 0.2)',borderColor:null,borderWidth:0,borderType:'solid',borderRadius:0,shadowBlur:0,shadowColor:null,shadowOffsetX:0,shadowOffsetY:0,opacity:1},select:{itemStyle:{borderColor:'#212121'}},realtimeSort:false});return BarSeriesModel;}(BaseBarSeries);/* harmony default export */ const BarSeries = (BarSeriesModel);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/Path.js + 3 modules
var Path = __webpack_require__(73727);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/Group.js
var Group = __webpack_require__(22060);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/graphic.js
var graphic = __webpack_require__(45482);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/animation/basicTrasition.js
var basicTrasition = __webpack_require__(21438);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/shape/Rect.js + 1 modules
var Rect = __webpack_require__(19568);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/shape/Sector.js + 1 modules
var Sector = __webpack_require__(38502);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(5661);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(36073);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/label/labelStyle.js
var labelStyle = __webpack_require__(9610);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/throttle.js
var throttle = __webpack_require__(57024);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/chart/helper/createClipPathFromCoordSys.js
var createClipPathFromCoordSys = __webpack_require__(9949);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/shape/sausage.js
var sausage = __webpack_require__(34053);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/view/Chart.js
var Chart = __webpack_require__(99949);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/coord/CoordinateSystem.js
var CoordinateSystem = __webpack_require__(32266);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/chart/helper/labelHelper.js
var labelHelper = __webpack_require__(56783);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/label/sectorLabel.js
var sectorLabel = __webpack_require__(78970);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/bar/BarView.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/var mathMax=Math.max;var mathMin=Math.min;function getClipArea(coord,data){var coordSysClipArea=coord.getArea&&coord.getArea();if((0,CoordinateSystem/* isCoordinateSystemType */.H)(coord,'cartesian2d')){var baseAxis=coord.getBaseAxis();// When boundaryGap is false or using time axis. bar may exceed the grid.
// We should not clip this part.
// See test/bar2.html
if(baseAxis.type!=='category'||!baseAxis.onBand){var expandWidth=data.getLayout('bandWidth');if(baseAxis.isHorizontal()){coordSysClipArea.x-=expandWidth;coordSysClipArea.width+=expandWidth*2;}else{coordSysClipArea.y-=expandWidth;coordSysClipArea.height+=expandWidth*2;}}}return coordSysClipArea;}var BarView=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(BarView,_super);function BarView(){var _this=_super.call(this)||this;_this.type=BarView.type;_this._isFirstFrame=true;return _this;}BarView.prototype.render=function(seriesModel,ecModel,api,payload){this._model=seriesModel;this._removeOnRenderedListener(api);this._updateDrawMode(seriesModel);var coordinateSystemType=seriesModel.get('coordinateSystem');if(coordinateSystemType==='cartesian2d'||coordinateSystemType==='polar'){// Clear previously rendered progressive elements.
this._progressiveEls=null;this._isLargeDraw?this._renderLarge(seriesModel,ecModel,api):this._renderNormal(seriesModel,ecModel,api,payload);}else if(false){}};BarView.prototype.incrementalPrepareRender=function(seriesModel){this._clear();this._updateDrawMode(seriesModel);// incremental also need to clip, otherwise might be overlow.
// But must not set clip in each frame, otherwise all of the children will be marked redraw.
this._updateLargeClip(seriesModel);};BarView.prototype.incrementalRender=function(params,seriesModel){// Reset
this._progressiveEls=[];// Do not support progressive in normal mode.
this._incrementalRenderLarge(params,seriesModel);};BarView.prototype.eachRendered=function(cb){(0,graphic.traverseElements)(this._progressiveEls||this.group,cb);};BarView.prototype._updateDrawMode=function(seriesModel){var isLargeDraw=seriesModel.pipelineContext.large;if(this._isLargeDraw==null||isLargeDraw!==this._isLargeDraw){this._isLargeDraw=isLargeDraw;this._clear();}};BarView.prototype._renderNormal=function(seriesModel,ecModel,api,payload){var group=this.group;var data=seriesModel.getData();var oldData=this._data;var coord=seriesModel.coordinateSystem;var baseAxis=coord.getBaseAxis();var isHorizontalOrRadial;if(coord.type==='cartesian2d'){isHorizontalOrRadial=baseAxis.isHorizontal();}else if(coord.type==='polar'){isHorizontalOrRadial=baseAxis.dim==='angle';}var animationModel=seriesModel.isAnimationEnabled()?seriesModel:null;var realtimeSortCfg=shouldRealtimeSort(seriesModel,coord);if(realtimeSortCfg){this._enableRealtimeSort(realtimeSortCfg,data,api);}var needsClip=seriesModel.get('clip',true)||realtimeSortCfg;var coordSysClipArea=getClipArea(coord,data);// If there is clipPath created in large mode. Remove it.
group.removeClipPath();// We don't use clipPath in normal mode because we needs a perfect animation
// And don't want the label are clipped.
var roundCap=seriesModel.get('roundCap',true);var drawBackground=seriesModel.get('showBackground',true);var backgroundModel=seriesModel.getModel('backgroundStyle');var barBorderRadius=backgroundModel.get('borderRadius')||0;var bgEls=[];var oldBgEls=this._backgroundEls;var isInitSort=payload&&payload.isInitSort;var isChangeOrder=payload&&payload.type==='changeAxisOrder';function createBackground(dataIndex){var bgLayout=getLayout[coord.type](data,dataIndex);var bgEl=createBackgroundEl(coord,isHorizontalOrRadial,bgLayout);bgEl.useStyle(backgroundModel.getItemStyle());// Only cartesian2d support borderRadius.
if(coord.type==='cartesian2d'){bgEl.setShape('r',barBorderRadius);}bgEls[dataIndex]=bgEl;return bgEl;};data.diff(oldData).add(function(dataIndex){var itemModel=data.getItemModel(dataIndex);var layout=getLayout[coord.type](data,dataIndex,itemModel);if(drawBackground){createBackground(dataIndex);}// If dataZoom in filteMode: 'empty', the baseValue can be set as NaN in "axisProxy".
if(!data.hasValue(dataIndex)||!isValidLayout[coord.type](layout)){return;}var isClipped=false;if(needsClip){// Clip will modify the layout params.
// And return a boolean to determine if the shape are fully clipped.
isClipped=clip[coord.type](coordSysClipArea,layout);}var el=elementCreator[coord.type](seriesModel,data,dataIndex,layout,isHorizontalOrRadial,animationModel,baseAxis.model,false,roundCap);if(realtimeSortCfg){/**
         * Force label animation because even if the element is
         * ignored because it's clipped, it may not be clipped after
         * changing order. Then, if not using forceLabelAnimation,
         * the label animation was never started, in which case,
         * the label will be the final value and doesn't have label
         * animation.
         */el.forceLabelAnimation=true;}updateStyle(el,data,dataIndex,itemModel,layout,seriesModel,isHorizontalOrRadial,coord.type==='polar');if(isInitSort){el.attr({shape:layout});}else if(realtimeSortCfg){updateRealtimeAnimation(realtimeSortCfg,animationModel,el,layout,dataIndex,isHorizontalOrRadial,false,false);}else{(0,basicTrasition/* initProps */.KZ)(el,{shape:layout},seriesModel,dataIndex);}data.setItemGraphicEl(dataIndex,el);group.add(el);el.ignore=isClipped;}).update(function(newIndex,oldIndex){var itemModel=data.getItemModel(newIndex);var layout=getLayout[coord.type](data,newIndex,itemModel);if(drawBackground){var bgEl=void 0;if(oldBgEls.length===0){bgEl=createBackground(oldIndex);}else{bgEl=oldBgEls[oldIndex];bgEl.useStyle(backgroundModel.getItemStyle());// Only cartesian2d support borderRadius.
if(coord.type==='cartesian2d'){bgEl.setShape('r',barBorderRadius);}bgEls[newIndex]=bgEl;}var bgLayout=getLayout[coord.type](data,newIndex);var shape=createBackgroundShape(isHorizontalOrRadial,bgLayout,coord);(0,basicTrasition/* updateProps */.D)(bgEl,{shape:shape},animationModel,newIndex);}var el=oldData.getItemGraphicEl(oldIndex);if(!data.hasValue(newIndex)||!isValidLayout[coord.type](layout)){group.remove(el);return;}var isClipped=false;if(needsClip){isClipped=clip[coord.type](coordSysClipArea,layout);if(isClipped){group.remove(el);}}if(!el){el=elementCreator[coord.type](seriesModel,data,newIndex,layout,isHorizontalOrRadial,animationModel,baseAxis.model,!!el,roundCap);}else{(0,basicTrasition/* saveOldStyle */.Zi)(el);}if(realtimeSortCfg){el.forceLabelAnimation=true;}if(isChangeOrder){var textEl=el.getTextContent();if(textEl){var labelInnerStore=(0,labelStyle/* labelInner */.qA)(textEl);if(labelInnerStore.prevValue!=null){/**
             * Set preValue to be value so that no new label
             * should be started, otherwise, it will take a full
             * `animationDurationUpdate` time to finish the
             * animation, which is not expected.
             */labelInnerStore.prevValue=labelInnerStore.value;}}}// Not change anything if only order changed.
// Especially not change label.
else{updateStyle(el,data,newIndex,itemModel,layout,seriesModel,isHorizontalOrRadial,coord.type==='polar');}if(isInitSort){el.attr({shape:layout});}else if(realtimeSortCfg){updateRealtimeAnimation(realtimeSortCfg,animationModel,el,layout,newIndex,isHorizontalOrRadial,true,isChangeOrder);}else{(0,basicTrasition/* updateProps */.D)(el,{shape:layout},seriesModel,newIndex,null);}data.setItemGraphicEl(newIndex,el);el.ignore=isClipped;group.add(el);}).remove(function(dataIndex){var el=oldData.getItemGraphicEl(dataIndex);el&&(0,basicTrasition/* removeElementWithFadeOut */.XD)(el,seriesModel,dataIndex);}).execute();var bgGroup=this._backgroundGroup||(this._backgroundGroup=new Group/* default */.Z());bgGroup.removeAll();for(var i=0;i<bgEls.length;++i){bgGroup.add(bgEls[i]);}group.add(bgGroup);this._backgroundEls=bgEls;this._data=data;};BarView.prototype._renderLarge=function(seriesModel,ecModel,api){this._clear();createLarge(seriesModel,this.group);this._updateLargeClip(seriesModel);};BarView.prototype._incrementalRenderLarge=function(params,seriesModel){this._removeBackground();createLarge(seriesModel,this.group,this._progressiveEls,true);};BarView.prototype._updateLargeClip=function(seriesModel){// Use clipPath in large mode.
var clipPath=seriesModel.get('clip',true)&&(0,createClipPathFromCoordSys/* createClipPath */.lQ)(seriesModel.coordinateSystem,false,seriesModel);var group=this.group;if(clipPath){group.setClipPath(clipPath);}else{group.removeClipPath();}};BarView.prototype._enableRealtimeSort=function(realtimeSortCfg,data,api){var _this=this;// If no data in the first frame, wait for data to initSort
if(!data.count()){return;}var baseAxis=realtimeSortCfg.baseAxis;if(this._isFirstFrame){this._dispatchInitSort(data,realtimeSortCfg,api);this._isFirstFrame=false;}else{var orderMapping_1=function orderMapping_1(idx){var el=data.getItemGraphicEl(idx);var shape=el&&el.shape;return shape&&// The result should be consistent with the initial sort by data value.
// Do not support the case that both positive and negative exist.
Math.abs(baseAxis.isHorizontal()?shape.height:shape.width)// If data is NaN, shape.xxx may be NaN, so use || 0 here in case
||0;};this._onRendered=function(){_this._updateSortWithinSameData(data,orderMapping_1,baseAxis,api);};api.getZr().on('rendered',this._onRendered);}};BarView.prototype._dataSort=function(data,baseAxis,orderMapping){var info=[];data.each(data.mapDimension(baseAxis.dim),function(ordinalNumber,dataIdx){var mappedValue=orderMapping(dataIdx);mappedValue=mappedValue==null?NaN:mappedValue;info.push({dataIndex:dataIdx,mappedValue:mappedValue,ordinalNumber:ordinalNumber});});info.sort(function(a,b){// If NaN, it will be treated as min val.
return b.mappedValue-a.mappedValue;});return{ordinalNumbers:(0,util/* map */.UI)(info,function(item){return item.ordinalNumber;})};};BarView.prototype._isOrderChangedWithinSameData=function(data,orderMapping,baseAxis){var scale=baseAxis.scale;var ordinalDataDim=data.mapDimension(baseAxis.dim);var lastValue=Number.MAX_VALUE;for(var tickNum=0,len=scale.getOrdinalMeta().categories.length;tickNum<len;++tickNum){var rawIdx=data.rawIndexOf(ordinalDataDim,scale.getRawOrdinalNumber(tickNum));var value=rawIdx<0// If some tick have no bar, the tick will be treated as min.
?Number.MIN_VALUE// PENDING: if dataZoom on baseAxis exits, is it a performance issue?
:orderMapping(data.indexOfRawIndex(rawIdx));if(value>lastValue){return true;}lastValue=value;}return false;};/*
   * Consider the case when A and B changed order, whose representing
   * bars are both out of sight, we don't wish to trigger reorder action
   * as long as the order in the view doesn't change.
   */BarView.prototype._isOrderDifferentInView=function(orderInfo,baseAxis){var scale=baseAxis.scale;var extent=scale.getExtent();var tickNum=Math.max(0,extent[0]);var tickMax=Math.min(extent[1],scale.getOrdinalMeta().categories.length-1);for(;tickNum<=tickMax;++tickNum){if(orderInfo.ordinalNumbers[tickNum]!==scale.getRawOrdinalNumber(tickNum)){return true;}}};BarView.prototype._updateSortWithinSameData=function(data,orderMapping,baseAxis,api){if(!this._isOrderChangedWithinSameData(data,orderMapping,baseAxis)){return;}var sortInfo=this._dataSort(data,baseAxis,orderMapping);if(this._isOrderDifferentInView(sortInfo,baseAxis)){this._removeOnRenderedListener(api);api.dispatchAction({type:'changeAxisOrder',componentType:baseAxis.dim+'Axis',axisId:baseAxis.index,sortInfo:sortInfo});}};BarView.prototype._dispatchInitSort=function(data,realtimeSortCfg,api){var baseAxis=realtimeSortCfg.baseAxis;var sortResult=this._dataSort(data,baseAxis,function(dataIdx){return data.get(data.mapDimension(realtimeSortCfg.otherAxis.dim),dataIdx);});api.dispatchAction({type:'changeAxisOrder',componentType:baseAxis.dim+'Axis',isInitSort:true,axisId:baseAxis.index,sortInfo:sortResult});};BarView.prototype.remove=function(ecModel,api){this._clear(this._model);this._removeOnRenderedListener(api);};BarView.prototype.dispose=function(ecModel,api){this._removeOnRenderedListener(api);};BarView.prototype._removeOnRenderedListener=function(api){if(this._onRendered){api.getZr().off('rendered',this._onRendered);this._onRendered=null;}};BarView.prototype._clear=function(model){var group=this.group;var data=this._data;if(model&&model.isAnimationEnabled()&&data&&!this._isLargeDraw){this._removeBackground();this._backgroundEls=[];data.eachItemGraphicEl(function(el){(0,basicTrasition/* removeElementWithFadeOut */.XD)(el,model,(0,innerStore/* getECData */.A)(el).dataIndex);});}else{group.removeAll();}this._data=null;this._isFirstFrame=true;};BarView.prototype._removeBackground=function(){this.group.remove(this._backgroundGroup);this._backgroundGroup=null;};BarView.type='bar';return BarView;}(Chart/* default */.Z);var clip={cartesian2d:function cartesian2d(coordSysBoundingRect,layout){var signWidth=layout.width<0?-1:1;var signHeight=layout.height<0?-1:1;// Needs positive width and height
if(signWidth<0){layout.x+=layout.width;layout.width=-layout.width;}if(signHeight<0){layout.y+=layout.height;layout.height=-layout.height;}var coordSysX2=coordSysBoundingRect.x+coordSysBoundingRect.width;var coordSysY2=coordSysBoundingRect.y+coordSysBoundingRect.height;var x=mathMax(layout.x,coordSysBoundingRect.x);var x2=mathMin(layout.x+layout.width,coordSysX2);var y=mathMax(layout.y,coordSysBoundingRect.y);var y2=mathMin(layout.y+layout.height,coordSysY2);var xClipped=x2<x;var yClipped=y2<y;// When xClipped or yClipped, the element will be marked as `ignore`.
// But we should also place the element at the edge of the coord sys bounding rect.
// Beause if data changed and the bar show again, its transition animaiton
// will begin at this place.
layout.x=xClipped&&x>coordSysX2?x2:x;layout.y=yClipped&&y>coordSysY2?y2:y;layout.width=xClipped?0:x2-x;layout.height=yClipped?0:y2-y;// Reverse back
if(signWidth<0){layout.x+=layout.width;layout.width=-layout.width;}if(signHeight<0){layout.y+=layout.height;layout.height=-layout.height;}return xClipped||yClipped;},polar:function polar(coordSysClipArea,layout){var signR=layout.r0<=layout.r?1:-1;// Make sure r is larger than r0
if(signR<0){var tmp=layout.r;layout.r=layout.r0;layout.r0=tmp;}var r=mathMin(layout.r,coordSysClipArea.r);var r0=mathMax(layout.r0,coordSysClipArea.r0);layout.r=r;layout.r0=r0;var clipped=r-r0<0;// Reverse back
if(signR<0){var tmp=layout.r;layout.r=layout.r0;layout.r0=tmp;}return clipped;}};var elementCreator={cartesian2d:function cartesian2d(seriesModel,data,newIndex,layout,isHorizontal,animationModel,axisModel,isUpdate,roundCap){var rect=new Rect/* default */.Z({shape:(0,util/* extend */.l7)({},layout),z2:1});rect.__dataIndex=newIndex;rect.name='item';if(animationModel){var rectShape=rect.shape;var animateProperty=isHorizontal?'height':'width';rectShape[animateProperty]=0;}return rect;},polar:function polar(seriesModel,data,newIndex,layout,isRadial,animationModel,axisModel,isUpdate,roundCap){var ShapeClass=!isRadial&&roundCap?sausage/* default */.Z:Sector/* default */.C;var sector=new ShapeClass({shape:layout,z2:1});sector.name='item';var positionMap=createPolarPositionMapping(isRadial);sector.calculateTextPosition=(0,sectorLabel/* createSectorCalculateTextPosition */.R)(positionMap,{isRoundCap:ShapeClass===sausage/* default */.Z});// Animation
if(animationModel){var sectorShape=sector.shape;var animateProperty=isRadial?'r':'endAngle';var animateTarget={};sectorShape[animateProperty]=isRadial?0:layout.startAngle;animateTarget[animateProperty]=layout[animateProperty];(isUpdate?basicTrasition/* updateProps */.D:basicTrasition/* initProps */.KZ)(sector,{shape:animateTarget// __value: typeof dataValue === 'string' ? parseInt(dataValue, 10) : dataValue
},animationModel);}return sector;}};function shouldRealtimeSort(seriesModel,coordSys){var realtimeSortOption=seriesModel.get('realtimeSort',true);var baseAxis=coordSys.getBaseAxis();if(false){}if(realtimeSortOption&&baseAxis.type==='category'&&coordSys.type==='cartesian2d'){return{baseAxis:baseAxis,otherAxis:coordSys.getOtherAxis(baseAxis)};}}function updateRealtimeAnimation(realtimeSortCfg,seriesAnimationModel,el,layout,newIndex,isHorizontal,isUpdate,isChangeOrder){var seriesTarget;var axisTarget;if(isHorizontal){axisTarget={x:layout.x,width:layout.width};seriesTarget={y:layout.y,height:layout.height};}else{axisTarget={y:layout.y,height:layout.height};seriesTarget={x:layout.x,width:layout.width};}if(!isChangeOrder){// Keep the original growth animation if only axis order changed.
// Not start a new animation.
(isUpdate?basicTrasition/* updateProps */.D:basicTrasition/* initProps */.KZ)(el,{shape:seriesTarget},seriesAnimationModel,newIndex,null);}var axisAnimationModel=seriesAnimationModel?realtimeSortCfg.baseAxis.model:null;(isUpdate?basicTrasition/* updateProps */.D:basicTrasition/* initProps */.KZ)(el,{shape:axisTarget},axisAnimationModel,newIndex);}function checkPropertiesNotValid(obj,props){for(var i=0;i<props.length;i++){if(!isFinite(obj[props[i]])){return true;}}return false;}var rectPropties=['x','y','width','height'];var polarPropties=['cx','cy','r','startAngle','endAngle'];var isValidLayout={cartesian2d:function cartesian2d(layout){return!checkPropertiesNotValid(layout,rectPropties);},polar:function polar(layout){return!checkPropertiesNotValid(layout,polarPropties);}};var getLayout={// itemModel is only used to get borderWidth, which is not needed
// when calculating bar background layout.
cartesian2d:function cartesian2d(data,dataIndex,itemModel){var layout=data.getItemLayout(dataIndex);var fixedLineWidth=itemModel?getLineWidth(itemModel,layout):0;// fix layout with lineWidth
var signX=layout.width>0?1:-1;var signY=layout.height>0?1:-1;return{x:layout.x+signX*fixedLineWidth/2,y:layout.y+signY*fixedLineWidth/2,width:layout.width-signX*fixedLineWidth,height:layout.height-signY*fixedLineWidth};},polar:function polar(data,dataIndex,itemModel){var layout=data.getItemLayout(dataIndex);return{cx:layout.cx,cy:layout.cy,r0:layout.r0,r:layout.r,startAngle:layout.startAngle,endAngle:layout.endAngle,clockwise:layout.clockwise};}};function isZeroOnPolar(layout){return layout.startAngle!=null&&layout.endAngle!=null&&layout.startAngle===layout.endAngle;}function createPolarPositionMapping(isRadial){return function(isRadial){var arcOrAngle=isRadial?'Arc':'Angle';return function(position){switch(position){case'start':case'insideStart':case'end':case'insideEnd':return position+arcOrAngle;default:return position;}};}(isRadial);}function updateStyle(el,data,dataIndex,itemModel,layout,seriesModel,isHorizontalOrRadial,isPolar){var style=data.getItemVisual(dataIndex,'style');if(!isPolar){el.setShape('r',itemModel.get(['itemStyle','borderRadius'])||0);}el.useStyle(style);var cursorStyle=itemModel.getShallow('cursor');cursorStyle&&el.attr('cursor',cursorStyle);var labelPositionOutside=isPolar?isHorizontalOrRadial?layout.r>=layout.r0?'endArc':'startArc':layout.endAngle>=layout.startAngle?'endAngle':'startAngle':isHorizontalOrRadial?layout.height>=0?'bottom':'top':layout.width>=0?'right':'left';var labelStatesModels=(0,labelStyle/* getLabelStatesModels */.k3)(itemModel);(0,labelStyle/* setLabelStyle */.ni)(el,labelStatesModels,{labelFetcher:seriesModel,labelDataIndex:dataIndex,defaultText:(0,labelHelper/* getDefaultLabel */.H)(seriesModel.getData(),dataIndex),inheritColor:style.fill,defaultOpacity:style.opacity,defaultOutsidePosition:labelPositionOutside});var label=el.getTextContent();if(isPolar&&label){var position=itemModel.get(['label','position']);el.textConfig.inside=position==='middle'?true:null;(0,sectorLabel/* setSectorTextRotation */.W)(el,position==='outside'?labelPositionOutside:position,createPolarPositionMapping(isHorizontalOrRadial),itemModel.get(['label','rotate']));}(0,labelStyle/* setLabelValueAnimation */.pe)(label,labelStatesModels,seriesModel.getRawValue(dataIndex),function(value){return (0,labelHelper/* getDefaultInterpolatedLabel */.O)(data,value);});var emphasisModel=itemModel.getModel(['emphasis']);(0,states/* toggleHoverEmphasis */.k5)(el,emphasisModel.get('focus'),emphasisModel.get('blurScope'),emphasisModel.get('disabled'));(0,states/* setStatesStylesFromModel */.WO)(el,itemModel);if(isZeroOnPolar(layout)){el.style.fill='none';el.style.stroke='none';(0,util/* each */.S6)(el.states,function(state){if(state.style){state.style.fill=state.style.stroke='none';}});}}// In case width or height are too small.
function getLineWidth(itemModel,rawLayout){// Has no border.
var borderColor=itemModel.get(['itemStyle','borderColor']);if(!borderColor||borderColor==='none'){return 0;}var lineWidth=itemModel.get(['itemStyle','borderWidth'])||0;// width or height may be NaN for empty data
var width=isNaN(rawLayout.width)?Number.MAX_VALUE:Math.abs(rawLayout.width);var height=isNaN(rawLayout.height)?Number.MAX_VALUE:Math.abs(rawLayout.height);return Math.min(lineWidth,width,height);}var LagePathShape=/** @class */function(){function LagePathShape(){}return LagePathShape;}();var LargePath=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(LargePath,_super);function LargePath(opts){var _this=_super.call(this,opts)||this;_this.type='largeBar';return _this;}LargePath.prototype.getDefaultShape=function(){return new LagePathShape();};LargePath.prototype.buildPath=function(ctx,shape){// Drawing lines is more efficient than drawing
// a whole line or drawing rects.
var points=shape.points;var baseDimIdx=this.baseDimIdx;var valueDimIdx=1-this.baseDimIdx;var startPoint=[];var size=[];var barWidth=this.barWidth;for(var i=0;i<points.length;i+=3){size[baseDimIdx]=barWidth;size[valueDimIdx]=points[i+2];startPoint[baseDimIdx]=points[i+baseDimIdx];startPoint[valueDimIdx]=points[i+valueDimIdx];ctx.rect(startPoint[0],startPoint[1],size[0],size[1]);}};return LargePath;}(Path/* default */.ZP);function createLarge(seriesModel,group,progressiveEls,incremental){// TODO support polar
var data=seriesModel.getData();var baseDimIdx=data.getLayout('valueAxisHorizontal')?1:0;var largeDataIndices=data.getLayout('largeDataIndices');var barWidth=data.getLayout('size');var backgroundModel=seriesModel.getModel('backgroundStyle');var bgPoints=data.getLayout('largeBackgroundPoints');if(bgPoints){var bgEl=new LargePath({shape:{points:bgPoints},incremental:!!incremental,silent:true,z2:0});bgEl.baseDimIdx=baseDimIdx;bgEl.largeDataIndices=largeDataIndices;bgEl.barWidth=barWidth;bgEl.useStyle(backgroundModel.getItemStyle());group.add(bgEl);progressiveEls&&progressiveEls.push(bgEl);}var el=new LargePath({shape:{points:data.getLayout('largePoints')},incremental:!!incremental,z2:1});el.baseDimIdx=baseDimIdx;el.largeDataIndices=largeDataIndices;el.barWidth=barWidth;group.add(el);el.useStyle(data.getVisual('style'));// Enable tooltip and user mouse/touch event handlers.
(0,innerStore/* getECData */.A)(el).seriesIndex=seriesModel.seriesIndex;if(!seriesModel.get('silent')){el.on('mousedown',largePathUpdateDataIndex);el.on('mousemove',largePathUpdateDataIndex);}progressiveEls&&progressiveEls.push(el);}// Use throttle to avoid frequently traverse to find dataIndex.
var largePathUpdateDataIndex=(0,throttle/* throttle */.P2)(function(event){var largePath=this;var dataIndex=largePathFindDataIndex(largePath,event.offsetX,event.offsetY);(0,innerStore/* getECData */.A)(largePath).dataIndex=dataIndex>=0?dataIndex:null;},30,false);function largePathFindDataIndex(largePath,x,y){var baseDimIdx=largePath.baseDimIdx;var valueDimIdx=1-baseDimIdx;var points=largePath.shape.points;var largeDataIndices=largePath.largeDataIndices;var startPoint=[];var size=[];var barWidth=largePath.barWidth;for(var i=0,len=points.length/3;i<len;i++){var ii=i*3;size[baseDimIdx]=barWidth;size[valueDimIdx]=points[ii+2];startPoint[baseDimIdx]=points[ii+baseDimIdx];startPoint[valueDimIdx]=points[ii+valueDimIdx];if(size[valueDimIdx]<0){startPoint[valueDimIdx]+=size[valueDimIdx];size[valueDimIdx]=-size[valueDimIdx];}if(x>=startPoint[0]&&x<=startPoint[0]+size[0]&&y>=startPoint[1]&&y<=startPoint[1]+size[1]){return largeDataIndices[i];}}return-1;}function createBackgroundShape(isHorizontalOrRadial,layout,coord){if((0,CoordinateSystem/* isCoordinateSystemType */.H)(coord,'cartesian2d')){var rectShape=layout;var coordLayout=coord.getArea();return{x:isHorizontalOrRadial?rectShape.x:coordLayout.x,y:isHorizontalOrRadial?coordLayout.y:rectShape.y,width:isHorizontalOrRadial?rectShape.width:coordLayout.width,height:isHorizontalOrRadial?coordLayout.height:rectShape.height};}else{var coordLayout=coord.getArea();var sectorShape=layout;return{cx:coordLayout.cx,cy:coordLayout.cy,r0:isHorizontalOrRadial?coordLayout.r0:sectorShape.r0,r:isHorizontalOrRadial?coordLayout.r:sectorShape.r,startAngle:isHorizontalOrRadial?sectorShape.startAngle:0,endAngle:isHorizontalOrRadial?sectorShape.endAngle:Math.PI*2};}}function createBackgroundEl(coord,isHorizontalOrRadial,layout){var ElementClz=coord.type==='polar'?Sector/* default */.C:Rect/* default */.Z;return new ElementClz({shape:createBackgroundShape(isHorizontalOrRadial,layout,coord),silent:true,z2:0});}/* harmony default export */ const bar_BarView = (BarView);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/bar/install.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/function install(registers){registers.registerChartView(bar_BarView);registers.registerSeriesModel(BarSeries);registers.registerLayout(registers.PRIORITY.VISUAL.LAYOUT,util/* curry */.WA(barGrid/* layout */.bK,'bar'));// Do layout after other overall layout, which can preapre some informations.
registers.registerLayout(registers.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT,(0,barGrid/* createProgressiveLayout */.Bk)('bar'));// Down sample after filter
registers.registerProcessor(registers.PRIORITY.PROCESSOR.STATISTIC,(0,dataSample/* default */.Z)('bar'));/**
   * @payload
   * @property {string} [componentType=series]
   * @property {number} [dx]
   * @property {number} [dy]
   * @property {number} [zoom]
   * @property {number} [originX]
   * @property {number} [originY]
   */registers.registerAction({type:'changeAxisOrder',event:'changeAxisOrder',update:'update'},function(payload,ecModel){var componentType=payload.componentType||'series';ecModel.eachComponent({mainType:componentType,query:payload},function(componentModel){if(payload.sortInfo){componentModel.axis.setCategorySortInfo(payload.sortInfo);}});});}
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/bar.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/(0,extension/* use */.D)(install);

/***/ }),

/***/ 12983:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/extension.js
var extension = __webpack_require__(37107);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(88161);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/chart/helper/SymbolDraw.js
var SymbolDraw = __webpack_require__(88087);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/symbol.js
var symbol = __webpack_require__(33518);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/Group.js
var Group = __webpack_require__(22060);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(36073);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/chart/helper/Symbol.js
var Symbol = __webpack_require__(17644);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/helper/EffectSymbol.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/function updateRipplePath(rippleGroup,effectCfg){var color=effectCfg.rippleEffectColor||effectCfg.color;rippleGroup.eachChild(function(ripplePath){ripplePath.attr({z:effectCfg.z,zlevel:effectCfg.zlevel,style:{stroke:effectCfg.brushType==='stroke'?color:null,fill:effectCfg.brushType==='fill'?color:null}});});}var EffectSymbol=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(EffectSymbol,_super);function EffectSymbol(data,idx){var _this=_super.call(this)||this;var symbol=new Symbol/* default */.Z(data,idx);var rippleGroup=new Group/* default */.Z();_this.add(symbol);_this.add(rippleGroup);_this.updateData(data,idx);return _this;}EffectSymbol.prototype.stopEffectAnimation=function(){this.childAt(1).removeAll();};EffectSymbol.prototype.startEffectAnimation=function(effectCfg){var symbolType=effectCfg.symbolType;var color=effectCfg.color;var rippleNumber=effectCfg.rippleNumber;var rippleGroup=this.childAt(1);for(var i=0;i<rippleNumber;i++){// If width/height are set too small (e.g., set to 1) on ios10
// and macOS Sierra, a circle stroke become a rect, no matter what
// the scale is set. So we set width/height as 2. See #4136.
var ripplePath=(0,symbol/* createSymbol */.th)(symbolType,-1,-1,2,2,color);ripplePath.attr({style:{strokeNoScale:true},z2:99,silent:true,scaleX:0.5,scaleY:0.5});var delay=-i/rippleNumber*effectCfg.period+effectCfg.effectOffset;ripplePath.animate('',true).when(effectCfg.period,{scaleX:effectCfg.rippleScale/2,scaleY:effectCfg.rippleScale/2}).delay(delay).start();ripplePath.animateStyle(true).when(effectCfg.period,{opacity:0}).delay(delay).start();rippleGroup.add(ripplePath);}updateRipplePath(rippleGroup,effectCfg);};/**
   * Update effect symbol
   */EffectSymbol.prototype.updateEffectAnimation=function(effectCfg){var oldEffectCfg=this._effectCfg;var rippleGroup=this.childAt(1);// Must reinitialize effect if following configuration changed
var DIFFICULT_PROPS=['symbolType','period','rippleScale','rippleNumber'];for(var i=0;i<DIFFICULT_PROPS.length;i++){var propName=DIFFICULT_PROPS[i];if(oldEffectCfg[propName]!==effectCfg[propName]){this.stopEffectAnimation();this.startEffectAnimation(effectCfg);return;}}updateRipplePath(rippleGroup,effectCfg);};/**
   * Highlight symbol
   */EffectSymbol.prototype.highlight=function(){(0,states/* enterEmphasis */.fD)(this);};/**
   * Downplay symbol
   */EffectSymbol.prototype.downplay=function(){(0,states/* leaveEmphasis */.Mh)(this);};EffectSymbol.prototype.getSymbolType=function(){var symbol=this.childAt(0);return symbol&&symbol.getSymbolType();};/**
   * Update symbol properties
   */EffectSymbol.prototype.updateData=function(data,idx){var _this=this;var seriesModel=data.hostModel;this.childAt(0).updateData(data,idx);var rippleGroup=this.childAt(1);var itemModel=data.getItemModel(idx);var symbolType=data.getItemVisual(idx,'symbol');var symbolSize=(0,symbol/* normalizeSymbolSize */.zp)(data.getItemVisual(idx,'symbolSize'));var symbolStyle=data.getItemVisual(idx,'style');var color=symbolStyle&&symbolStyle.fill;var emphasisModel=itemModel.getModel('emphasis');rippleGroup.setScale(symbolSize);rippleGroup.traverse(function(ripplePath){ripplePath.setStyle('fill',color);});var symbolOffset=(0,symbol/* normalizeSymbolOffset */.Cq)(data.getItemVisual(idx,'symbolOffset'),symbolSize);if(symbolOffset){rippleGroup.x=symbolOffset[0];rippleGroup.y=symbolOffset[1];}var symbolRotate=data.getItemVisual(idx,'symbolRotate');rippleGroup.rotation=(symbolRotate||0)*Math.PI/180||0;var effectCfg={};effectCfg.showEffectOn=seriesModel.get('showEffectOn');effectCfg.rippleScale=itemModel.get(['rippleEffect','scale']);effectCfg.brushType=itemModel.get(['rippleEffect','brushType']);effectCfg.period=itemModel.get(['rippleEffect','period'])*1000;effectCfg.effectOffset=idx/data.count();effectCfg.z=seriesModel.getShallow('z')||0;effectCfg.zlevel=seriesModel.getShallow('zlevel')||0;effectCfg.symbolType=symbolType;effectCfg.color=color;effectCfg.rippleEffectColor=itemModel.get(['rippleEffect','color']);effectCfg.rippleNumber=itemModel.get(['rippleEffect','number']);if(effectCfg.showEffectOn==='render'){this._effectCfg?this.updateEffectAnimation(effectCfg):this.startEffectAnimation(effectCfg);this._effectCfg=effectCfg;}else{// Not keep old effect config
this._effectCfg=null;this.stopEffectAnimation();this.onHoverStateChange=function(toState){if(toState==='emphasis'){if(effectCfg.showEffectOn!=='render'){_this.startEffectAnimation(effectCfg);}}else if(toState==='normal'){if(effectCfg.showEffectOn!=='render'){_this.stopEffectAnimation();}}};}this._effectCfg=effectCfg;(0,states/* toggleHoverEmphasis */.k5)(this,emphasisModel.get('focus'),emphasisModel.get('blurScope'),emphasisModel.get('disabled'));};;EffectSymbol.prototype.fadeOut=function(cb){cb&&cb();};;return EffectSymbol;}(Group/* default */.Z);/* harmony default export */ const helper_EffectSymbol = (EffectSymbol);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/matrix.js
var matrix = __webpack_require__(13518);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/layout/points.js
var points = __webpack_require__(13329);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/view/Chart.js
var Chart = __webpack_require__(99949);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/effectScatter/EffectScatterView.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/var EffectScatterView=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(EffectScatterView,_super);function EffectScatterView(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=EffectScatterView.type;return _this;}EffectScatterView.prototype.init=function(){this._symbolDraw=new SymbolDraw/* default */.Z(helper_EffectSymbol);};EffectScatterView.prototype.render=function(seriesModel,ecModel,api){var data=seriesModel.getData();var effectSymbolDraw=this._symbolDraw;effectSymbolDraw.updateData(data,{clipShape:this._getClipShape(seriesModel)});this.group.add(effectSymbolDraw.group);};EffectScatterView.prototype._getClipShape=function(seriesModel){var coordSys=seriesModel.coordinateSystem;var clipArea=coordSys&&coordSys.getArea&&coordSys.getArea();return seriesModel.get('clip',true)?clipArea:null;};EffectScatterView.prototype.updateTransform=function(seriesModel,ecModel,api){var data=seriesModel.getData();this.group.dirty();var res=(0,points/* default */.Z)('').reset(seriesModel,ecModel,api);if(res.progress){res.progress({start:0,end:data.count(),count:data.count()},data);}this._symbolDraw.updateLayout();};EffectScatterView.prototype._updateGroupTransform=function(seriesModel){var coordSys=seriesModel.coordinateSystem;if(coordSys&&coordSys.getRoamTransform){this.group.transform=matrix/* clone */.d9(coordSys.getRoamTransform());this.group.decomposeTransform();}};EffectScatterView.prototype.remove=function(ecModel,api){this._symbolDraw&&this._symbolDraw.remove(true);};EffectScatterView.type='effectScatter';return EffectScatterView;}(Chart/* default */.Z);/* harmony default export */ const effectScatter_EffectScatterView = (EffectScatterView);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/chart/helper/createSeriesData.js
var createSeriesData = __webpack_require__(38839);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/model/Series.js
var Series = __webpack_require__(49261);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/effectScatter/EffectScatterSeries.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/var EffectScatterSeriesModel=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(EffectScatterSeriesModel,_super);function EffectScatterSeriesModel(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=EffectScatterSeriesModel.type;_this.hasSymbolVisual=true;return _this;}EffectScatterSeriesModel.prototype.getInitialData=function(option,ecModel){return (0,createSeriesData/* default */.Z)(null,this,{useEncodeDefaulter:true});};EffectScatterSeriesModel.prototype.brushSelector=function(dataIndex,data,selectors){return selectors.point(data.getItemLayout(dataIndex));};EffectScatterSeriesModel.type='series.effectScatter';EffectScatterSeriesModel.dependencies=['grid','polar'];EffectScatterSeriesModel.defaultOption={coordinateSystem:'cartesian2d',// zlevel: 0,
z:2,legendHoverLink:true,effectType:'ripple',progressive:0,// When to show the effect, option: 'render'|'emphasis'
showEffectOn:'render',clip:true,// Ripple effect config
rippleEffect:{period:4,// Scale of ripple
scale:2.5,// Brush type can be fill or stroke
brushType:'fill',// Ripple number
number:3},universalTransition:{divideShape:'clone'},// Cartesian coordinate system
// xAxisIndex: 0,
// yAxisIndex: 0,
// Polar coordinate system
// polarIndex: 0,
// Geo coordinate system
// geoIndex: 0,
// symbol: null,        // 图形类型
symbolSize:10// 图形大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
// symbolRotate: null,  // 图形旋转控制
// itemStyle: {
//     opacity: 1
// }
};return EffectScatterSeriesModel;}(Series/* default */.Z);/* harmony default export */ const EffectScatterSeries = (EffectScatterSeriesModel);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/effectScatter/install.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/function install(registers){registers.registerChartView(effectScatter_EffectScatterView);registers.registerSeriesModel(EffectScatterSeries);registers.registerLayout((0,points/* default */.Z)('effectScatter'));}
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/effectScatter.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/(0,extension/* use */.D)(install);

/***/ }),

/***/ 75346:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/extension.js
var extension = __webpack_require__(37107);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(88161);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/Path.js + 3 modules
var Path = __webpack_require__(73727);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/gauge/PointerPath.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/var PointerShape=/** @class */function(){function PointerShape(){this.angle=0;this.width=10;this.r=10;this.x=0;this.y=0;}return PointerShape;}();var PointerPath=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(PointerPath,_super);function PointerPath(opts){var _this=_super.call(this,opts)||this;_this.type='pointer';return _this;}PointerPath.prototype.getDefaultShape=function(){return new PointerShape();};PointerPath.prototype.buildPath=function(ctx,shape){var mathCos=Math.cos;var mathSin=Math.sin;var r=shape.r;var width=shape.width;var angle=shape.angle;var x=shape.x-mathCos(angle)*width*(width>=r/3?1:2);var y=shape.y-mathSin(angle)*width*(width>=r/3?1:2);angle=shape.angle-Math.PI/2;ctx.moveTo(x,y);ctx.lineTo(shape.x+mathCos(angle)*width,shape.y+mathSin(angle)*width);ctx.lineTo(shape.x+mathCos(shape.angle)*r,shape.y+mathSin(shape.angle)*r);ctx.lineTo(shape.x-mathCos(angle)*width,shape.y-mathSin(angle)*width);ctx.lineTo(x,y);};return PointerPath;}(Path/* default */.ZP);/* harmony default export */ const gauge_PointerPath = (PointerPath);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/shape/Sector.js + 1 modules
var Sector = __webpack_require__(38502);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/shape/Line.js
var Line = __webpack_require__(29526);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/Text.js + 1 modules
var Text = __webpack_require__(95067);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/animation/basicTrasition.js
var basicTrasition = __webpack_require__(21438);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/Group.js
var Group = __webpack_require__(22060);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(36073);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/label/labelStyle.js
var labelStyle = __webpack_require__(9610);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/view/Chart.js
var Chart = __webpack_require__(99949);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(84646);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/shape/sausage.js
var sausage = __webpack_require__(34053);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/symbol.js
var symbol = __webpack_require__(33518);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/Image.js
var Image = __webpack_require__(30122);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(57697);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(5661);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/PathProxy.js + 1 modules
var PathProxy = __webpack_require__(28937);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/gauge/GaugeView.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/function parsePosition(seriesModel,api){var center=seriesModel.get('center');var width=api.getWidth();var height=api.getHeight();var size=Math.min(width,height);var cx=(0,number/* parsePercent */.GM)(center[0],api.getWidth());var cy=(0,number/* parsePercent */.GM)(center[1],api.getHeight());var r=(0,number/* parsePercent */.GM)(seriesModel.get('radius'),size/2);return{cx:cx,cy:cy,r:r};}function formatLabel(value,labelFormatter){var label=value==null?'':value+'';if(labelFormatter){if((0,util/* isString */.HD)(labelFormatter)){label=labelFormatter.replace('{value}',label);}else if((0,util/* isFunction */.mf)(labelFormatter)){label=labelFormatter(value);}}return label;}var GaugeView=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(GaugeView,_super);function GaugeView(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=GaugeView.type;return _this;}GaugeView.prototype.render=function(seriesModel,ecModel,api){this.group.removeAll();var colorList=seriesModel.get(['axisLine','lineStyle','color']);var posInfo=parsePosition(seriesModel,api);this._renderMain(seriesModel,ecModel,api,colorList,posInfo);this._data=seriesModel.getData();};GaugeView.prototype.dispose=function(){};GaugeView.prototype._renderMain=function(seriesModel,ecModel,api,colorList,posInfo){var group=this.group;var clockwise=seriesModel.get('clockwise');var startAngle=-seriesModel.get('startAngle')/180*Math.PI;var endAngle=-seriesModel.get('endAngle')/180*Math.PI;var axisLineModel=seriesModel.getModel('axisLine');var roundCap=axisLineModel.get('roundCap');var MainPath=roundCap?sausage/* default */.Z:Sector/* default */.C;var showAxis=axisLineModel.get('show');var lineStyleModel=axisLineModel.getModel('lineStyle');var axisLineWidth=lineStyleModel.get('width');var angles=[startAngle,endAngle];(0,PathProxy/* normalizeArcAngles */.L)(angles,!clockwise);startAngle=angles[0];endAngle=angles[1];var angleRangeSpan=endAngle-startAngle;var prevEndAngle=startAngle;for(var i=0;showAxis&&i<colorList.length;i++){// Clamp
var percent=Math.min(Math.max(colorList[i][0],0),1);endAngle=startAngle+angleRangeSpan*percent;var sector=new MainPath({shape:{startAngle:prevEndAngle,endAngle:endAngle,cx:posInfo.cx,cy:posInfo.cy,clockwise:clockwise,r0:posInfo.r-axisLineWidth,r:posInfo.r},silent:true});sector.setStyle({fill:colorList[i][1]});sector.setStyle(lineStyleModel.getLineStyle(// Because we use sector to simulate arc
// so the properties for stroking are useless
['color','width']));group.add(sector);prevEndAngle=endAngle;}var getColor=function getColor(percent){// Less than 0
if(percent<=0){return colorList[0][1];}var i;for(i=0;i<colorList.length;i++){if(colorList[i][0]>=percent&&(i===0?0:colorList[i-1][0])<percent){return colorList[i][1];}}// More than 1
return colorList[i-1][1];};this._renderTicks(seriesModel,ecModel,api,getColor,posInfo,startAngle,endAngle,clockwise,axisLineWidth);this._renderTitleAndDetail(seriesModel,ecModel,api,getColor,posInfo);this._renderAnchor(seriesModel,posInfo);this._renderPointer(seriesModel,ecModel,api,getColor,posInfo,startAngle,endAngle,clockwise,axisLineWidth);};GaugeView.prototype._renderTicks=function(seriesModel,ecModel,api,getColor,posInfo,startAngle,endAngle,clockwise,axisLineWidth){var group=this.group;var cx=posInfo.cx;var cy=posInfo.cy;var r=posInfo.r;var minVal=+seriesModel.get('min');var maxVal=+seriesModel.get('max');var splitLineModel=seriesModel.getModel('splitLine');var tickModel=seriesModel.getModel('axisTick');var labelModel=seriesModel.getModel('axisLabel');var splitNumber=seriesModel.get('splitNumber');var subSplitNumber=tickModel.get('splitNumber');var splitLineLen=(0,number/* parsePercent */.GM)(splitLineModel.get('length'),r);var tickLen=(0,number/* parsePercent */.GM)(tickModel.get('length'),r);var angle=startAngle;var step=(endAngle-startAngle)/splitNumber;var subStep=step/subSplitNumber;var splitLineStyle=splitLineModel.getModel('lineStyle').getLineStyle();var tickLineStyle=tickModel.getModel('lineStyle').getLineStyle();var splitLineDistance=splitLineModel.get('distance');var unitX;var unitY;for(var i=0;i<=splitNumber;i++){unitX=Math.cos(angle);unitY=Math.sin(angle);// Split line
if(splitLineModel.get('show')){var distance=splitLineDistance?splitLineDistance+axisLineWidth:axisLineWidth;var splitLine=new Line/* default */.Z({shape:{x1:unitX*(r-distance)+cx,y1:unitY*(r-distance)+cy,x2:unitX*(r-splitLineLen-distance)+cx,y2:unitY*(r-splitLineLen-distance)+cy},style:splitLineStyle,silent:true});if(splitLineStyle.stroke==='auto'){splitLine.setStyle({stroke:getColor(i/splitNumber)});}group.add(splitLine);}// Label
if(labelModel.get('show')){var distance=labelModel.get('distance')+splitLineDistance;var label=formatLabel((0,number/* round */.NM)(i/splitNumber*(maxVal-minVal)+minVal),labelModel.get('formatter'));var autoColor=getColor(i/splitNumber);group.add(new Text/* default */.ZP({style:(0,labelStyle/* createTextStyle */.Lr)(labelModel,{text:label,x:unitX*(r-splitLineLen-distance)+cx,y:unitY*(r-splitLineLen-distance)+cy,verticalAlign:unitY<-0.8?'top':unitY>0.8?'bottom':'middle',align:unitX<-0.4?'left':unitX>0.4?'right':'center'},{inheritColor:autoColor}),silent:true}));}// Axis tick
if(tickModel.get('show')&&i!==splitNumber){var distance=tickModel.get('distance');distance=distance?distance+axisLineWidth:axisLineWidth;for(var j=0;j<=subSplitNumber;j++){unitX=Math.cos(angle);unitY=Math.sin(angle);var tickLine=new Line/* default */.Z({shape:{x1:unitX*(r-distance)+cx,y1:unitY*(r-distance)+cy,x2:unitX*(r-tickLen-distance)+cx,y2:unitY*(r-tickLen-distance)+cy},silent:true,style:tickLineStyle});if(tickLineStyle.stroke==='auto'){tickLine.setStyle({stroke:getColor((i+j/subSplitNumber)/splitNumber)});}group.add(tickLine);angle+=subStep;}angle-=subStep;}else{angle+=step;}}};GaugeView.prototype._renderPointer=function(seriesModel,ecModel,api,getColor,posInfo,startAngle,endAngle,clockwise,axisLineWidth){var group=this.group;var oldData=this._data;var oldProgressData=this._progressEls;var progressList=[];var showPointer=seriesModel.get(['pointer','show']);var progressModel=seriesModel.getModel('progress');var showProgress=progressModel.get('show');var data=seriesModel.getData();var valueDim=data.mapDimension('value');var minVal=+seriesModel.get('min');var maxVal=+seriesModel.get('max');var valueExtent=[minVal,maxVal];var angleExtent=[startAngle,endAngle];function createPointer(idx,angle){var itemModel=data.getItemModel(idx);var pointerModel=itemModel.getModel('pointer');var pointerWidth=(0,number/* parsePercent */.GM)(pointerModel.get('width'),posInfo.r);var pointerLength=(0,number/* parsePercent */.GM)(pointerModel.get('length'),posInfo.r);var pointerStr=seriesModel.get(['pointer','icon']);var pointerOffset=pointerModel.get('offsetCenter');var pointerOffsetX=(0,number/* parsePercent */.GM)(pointerOffset[0],posInfo.r);var pointerOffsetY=(0,number/* parsePercent */.GM)(pointerOffset[1],posInfo.r);var pointerKeepAspect=pointerModel.get('keepAspect');var pointer;// not exist icon type will be set 'rect'
if(pointerStr){pointer=(0,symbol/* createSymbol */.th)(pointerStr,pointerOffsetX-pointerWidth/2,pointerOffsetY-pointerLength,pointerWidth,pointerLength,null,pointerKeepAspect);}else{pointer=new gauge_PointerPath({shape:{angle:-Math.PI/2,width:pointerWidth,r:pointerLength,x:pointerOffsetX,y:pointerOffsetY}});}pointer.rotation=-(angle+Math.PI/2);pointer.x=posInfo.cx;pointer.y=posInfo.cy;return pointer;}function createProgress(idx,endAngle){var roundCap=progressModel.get('roundCap');var ProgressPath=roundCap?sausage/* default */.Z:Sector/* default */.C;var isOverlap=progressModel.get('overlap');var progressWidth=isOverlap?progressModel.get('width'):axisLineWidth/data.count();var r0=isOverlap?posInfo.r-progressWidth:posInfo.r-(idx+1)*progressWidth;var r=isOverlap?posInfo.r:posInfo.r-idx*progressWidth;var progress=new ProgressPath({shape:{startAngle:startAngle,endAngle:endAngle,cx:posInfo.cx,cy:posInfo.cy,clockwise:clockwise,r0:r0,r:r}});isOverlap&&(progress.z2=maxVal-data.get(valueDim,idx)%maxVal);return progress;}if(showProgress||showPointer){data.diff(oldData).add(function(idx){var val=data.get(valueDim,idx);if(showPointer){var pointer=createPointer(idx,startAngle);// TODO hide pointer on NaN value?
basicTrasition/* initProps */.KZ(pointer,{rotation:-((isNaN(+val)?angleExtent[0]:(0,number/* linearMap */.NU)(val,valueExtent,angleExtent,true))+Math.PI/2)},seriesModel);group.add(pointer);data.setItemGraphicEl(idx,pointer);}if(showProgress){var progress=createProgress(idx,startAngle);var isClip=progressModel.get('clip');basicTrasition/* initProps */.KZ(progress,{shape:{endAngle:(0,number/* linearMap */.NU)(val,valueExtent,angleExtent,isClip)}},seriesModel);group.add(progress);// Add data index and series index for indexing the data by element
// Useful in tooltip
(0,innerStore/* setCommonECData */.Q)(seriesModel.seriesIndex,data.dataType,idx,progress);progressList[idx]=progress;}}).update(function(newIdx,oldIdx){var val=data.get(valueDim,newIdx);if(showPointer){var previousPointer=oldData.getItemGraphicEl(oldIdx);var previousRotate=previousPointer?previousPointer.rotation:startAngle;var pointer=createPointer(newIdx,previousRotate);pointer.rotation=previousRotate;basicTrasition/* updateProps */.D(pointer,{rotation:-((isNaN(+val)?angleExtent[0]:(0,number/* linearMap */.NU)(val,valueExtent,angleExtent,true))+Math.PI/2)},seriesModel);group.add(pointer);data.setItemGraphicEl(newIdx,pointer);}if(showProgress){var previousProgress=oldProgressData[oldIdx];var previousEndAngle=previousProgress?previousProgress.shape.endAngle:startAngle;var progress=createProgress(newIdx,previousEndAngle);var isClip=progressModel.get('clip');basicTrasition/* updateProps */.D(progress,{shape:{endAngle:(0,number/* linearMap */.NU)(val,valueExtent,angleExtent,isClip)}},seriesModel);group.add(progress);// Add data index and series index for indexing the data by element
// Useful in tooltip
(0,innerStore/* setCommonECData */.Q)(seriesModel.seriesIndex,data.dataType,newIdx,progress);progressList[newIdx]=progress;}}).execute();data.each(function(idx){var itemModel=data.getItemModel(idx);var emphasisModel=itemModel.getModel('emphasis');var focus=emphasisModel.get('focus');var blurScope=emphasisModel.get('blurScope');var emphasisDisabled=emphasisModel.get('disabled');if(showPointer){var pointer=data.getItemGraphicEl(idx);var symbolStyle=data.getItemVisual(idx,'style');var visualColor=symbolStyle.fill;if(pointer instanceof Image/* default */.ZP){var pathStyle=pointer.style;pointer.useStyle((0,util/* extend */.l7)({image:pathStyle.image,x:pathStyle.x,y:pathStyle.y,width:pathStyle.width,height:pathStyle.height},symbolStyle));}else{pointer.useStyle(symbolStyle);pointer.type!=='pointer'&&pointer.setColor(visualColor);}pointer.setStyle(itemModel.getModel(['pointer','itemStyle']).getItemStyle());if(pointer.style.fill==='auto'){pointer.setStyle('fill',getColor((0,number/* linearMap */.NU)(data.get(valueDim,idx),valueExtent,[0,1],true)));}pointer.z2EmphasisLift=0;(0,states/* setStatesStylesFromModel */.WO)(pointer,itemModel);(0,states/* toggleHoverEmphasis */.k5)(pointer,focus,blurScope,emphasisDisabled);}if(showProgress){var progress=progressList[idx];progress.useStyle(data.getItemVisual(idx,'style'));progress.setStyle(itemModel.getModel(['progress','itemStyle']).getItemStyle());progress.z2EmphasisLift=0;(0,states/* setStatesStylesFromModel */.WO)(progress,itemModel);(0,states/* toggleHoverEmphasis */.k5)(progress,focus,blurScope,emphasisDisabled);}});this._progressEls=progressList;}};GaugeView.prototype._renderAnchor=function(seriesModel,posInfo){var anchorModel=seriesModel.getModel('anchor');var showAnchor=anchorModel.get('show');if(showAnchor){var anchorSize=anchorModel.get('size');var anchorType=anchorModel.get('icon');var offsetCenter=anchorModel.get('offsetCenter');var anchorKeepAspect=anchorModel.get('keepAspect');var anchor=(0,symbol/* createSymbol */.th)(anchorType,posInfo.cx-anchorSize/2+(0,number/* parsePercent */.GM)(offsetCenter[0],posInfo.r),posInfo.cy-anchorSize/2+(0,number/* parsePercent */.GM)(offsetCenter[1],posInfo.r),anchorSize,anchorSize,null,anchorKeepAspect);anchor.z2=anchorModel.get('showAbove')?1:0;anchor.setStyle(anchorModel.getModel('itemStyle').getItemStyle());this.group.add(anchor);}};GaugeView.prototype._renderTitleAndDetail=function(seriesModel,ecModel,api,getColor,posInfo){var _this=this;var data=seriesModel.getData();var valueDim=data.mapDimension('value');var minVal=+seriesModel.get('min');var maxVal=+seriesModel.get('max');var contentGroup=new Group/* default */.Z();var newTitleEls=[];var newDetailEls=[];var hasAnimation=seriesModel.isAnimationEnabled();var showPointerAbove=seriesModel.get(['pointer','showAbove']);data.diff(this._data).add(function(idx){newTitleEls[idx]=new Text/* default */.ZP({silent:true});newDetailEls[idx]=new Text/* default */.ZP({silent:true});}).update(function(idx,oldIdx){newTitleEls[idx]=_this._titleEls[oldIdx];newDetailEls[idx]=_this._detailEls[oldIdx];}).execute();data.each(function(idx){var itemModel=data.getItemModel(idx);var value=data.get(valueDim,idx);var itemGroup=new Group/* default */.Z();var autoColor=getColor((0,number/* linearMap */.NU)(value,[minVal,maxVal],[0,1],true));var itemTitleModel=itemModel.getModel('title');if(itemTitleModel.get('show')){var titleOffsetCenter=itemTitleModel.get('offsetCenter');var titleX=posInfo.cx+(0,number/* parsePercent */.GM)(titleOffsetCenter[0],posInfo.r);var titleY=posInfo.cy+(0,number/* parsePercent */.GM)(titleOffsetCenter[1],posInfo.r);var labelEl=newTitleEls[idx];labelEl.attr({z2:showPointerAbove?0:2,style:(0,labelStyle/* createTextStyle */.Lr)(itemTitleModel,{x:titleX,y:titleY,text:data.getName(idx),align:'center',verticalAlign:'middle'},{inheritColor:autoColor})});itemGroup.add(labelEl);}var itemDetailModel=itemModel.getModel('detail');if(itemDetailModel.get('show')){var detailOffsetCenter=itemDetailModel.get('offsetCenter');var detailX=posInfo.cx+(0,number/* parsePercent */.GM)(detailOffsetCenter[0],posInfo.r);var detailY=posInfo.cy+(0,number/* parsePercent */.GM)(detailOffsetCenter[1],posInfo.r);var width=(0,number/* parsePercent */.GM)(itemDetailModel.get('width'),posInfo.r);var height=(0,number/* parsePercent */.GM)(itemDetailModel.get('height'),posInfo.r);var detailColor=seriesModel.get(['progress','show'])?data.getItemVisual(idx,'style').fill:autoColor;var labelEl=newDetailEls[idx];var formatter_1=itemDetailModel.get('formatter');labelEl.attr({z2:showPointerAbove?0:2,style:(0,labelStyle/* createTextStyle */.Lr)(itemDetailModel,{x:detailX,y:detailY,text:formatLabel(value,formatter_1),width:isNaN(width)?null:width,height:isNaN(height)?null:height,align:'center',verticalAlign:'middle'},{inheritColor:detailColor})});(0,labelStyle/* setLabelValueAnimation */.pe)(labelEl,{normal:itemDetailModel},value,function(value){return formatLabel(value,formatter_1);});hasAnimation&&(0,labelStyle/* animateLabelValue */.tD)(labelEl,idx,data,seriesModel,{getFormattedLabel:function getFormattedLabel(labelDataIndex,status,dataType,labelDimIndex,fmt,extendParams){return formatLabel(extendParams?extendParams.interpolatedValue:value,formatter_1);}});itemGroup.add(labelEl);}contentGroup.add(itemGroup);});this.group.add(contentGroup);this._titleEls=newTitleEls;this._detailEls=newDetailEls;};GaugeView.type='gauge';return GaugeView;}(Chart/* default */.Z);/* harmony default export */ const gauge_GaugeView = (GaugeView);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/chart/helper/createSeriesDataSimply.js
var createSeriesDataSimply = __webpack_require__(97451);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/model/Series.js
var Series = __webpack_require__(49261);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/gauge/GaugeSeries.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/var GaugeSeriesModel=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(GaugeSeriesModel,_super);function GaugeSeriesModel(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=GaugeSeriesModel.type;_this.visualStyleAccessPath='itemStyle';return _this;}GaugeSeriesModel.prototype.getInitialData=function(option,ecModel){return (0,createSeriesDataSimply/* default */.Z)(this,['value']);};GaugeSeriesModel.type='series.gauge';GaugeSeriesModel.defaultOption={// zlevel: 0,
z:2,colorBy:'data',// 默认全局居中
center:['50%','50%'],legendHoverLink:true,radius:'75%',startAngle:225,endAngle:-45,clockwise:true,// 最小值
min:0,// 最大值
max:100,// 分割段数，默认为10
splitNumber:10,// 坐标轴线
axisLine:{// 默认显示，属性show控制显示与否
show:true,roundCap:false,lineStyle:{color:[[1,'#E6EBF8']],width:10}},// 坐标轴线
progress:{// 默认显示，属性show控制显示与否
show:false,overlap:true,width:10,roundCap:false,clip:true},// 分隔线
splitLine:{// 默认显示，属性show控制显示与否
show:true,// 属性length控制线长
length:10,distance:10,// 属性lineStyle（详见lineStyle）控制线条样式
lineStyle:{color:'#63677A',width:3,type:'solid'}},// 坐标轴小标记
axisTick:{// 属性show控制显示与否，默认不显示
show:true,// 每份split细分多少段
splitNumber:5,// 属性length控制线长
length:6,distance:10,// 属性lineStyle控制线条样式
lineStyle:{color:'#63677A',width:1,type:'solid'}},axisLabel:{show:true,distance:15,// formatter: null,
color:'#464646',fontSize:12},pointer:{icon:null,offsetCenter:[0,0],show:true,showAbove:true,length:'60%',width:6,keepAspect:false},anchor:{show:false,showAbove:false,size:6,icon:'circle',offsetCenter:[0,0],keepAspect:false,itemStyle:{color:'#fff',borderWidth:0,borderColor:'#5470c6'}},title:{show:true,// x, y，单位px
offsetCenter:[0,'20%'],// 其余属性默认使用全局文本样式，详见TEXTSTYLE
color:'#464646',fontSize:16,valueAnimation:false},detail:{show:true,backgroundColor:'rgba(0,0,0,0)',borderWidth:0,borderColor:'#ccc',width:100,height:null,padding:[5,10],// x, y，单位px
offsetCenter:[0,'40%'],// formatter: null,
// 其余属性默认使用全局文本样式，详见TEXTSTYLE
color:'#464646',fontSize:30,fontWeight:'bold',lineHeight:30,valueAnimation:false}};return GaugeSeriesModel;}(Series/* default */.Z);/* harmony default export */ const GaugeSeries = (GaugeSeriesModel);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/gauge/install.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/function install(registers){registers.registerChartView(gauge_GaugeView);registers.registerSeriesModel(GaugeSeries);}
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/gauge.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/(0,extension/* use */.D)(install);

/***/ }),

/***/ 327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ helper_Line)
});

// EXTERNAL MODULE: ../my-cli/node_modules/echarts/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(88161);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(57697);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/vector.js
var vector = __webpack_require__(79070);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/symbol.js
var symbol = __webpack_require__(33518);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/shape/Line.js
var Line = __webpack_require__(29526);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/shape/BezierCurve.js
var BezierCurve = __webpack_require__(61670);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/Path.js + 3 modules
var Path = __webpack_require__(73727);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/helper/LinePath.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*//**
 * Line path for bezier and straight line draw
 */var straightLineProto=Line/* default.prototype */.Z.prototype;var bezierCurveProto=BezierCurve/* default.prototype */.Z.prototype;var StraightLineShape=/** @class */function(){function StraightLineShape(){// Start point
this.x1=0;this.y1=0;// End point
this.x2=0;this.y2=0;this.percent=1;}return StraightLineShape;}();var CurveShape=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(CurveShape,_super);function CurveShape(){return _super!==null&&_super.apply(this,arguments)||this;}return CurveShape;}(StraightLineShape);function isStraightLine(shape){return isNaN(+shape.cpx1)||isNaN(+shape.cpy1);}var ECLinePath=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(ECLinePath,_super);function ECLinePath(opts){var _this=_super.call(this,opts)||this;_this.type='ec-line';return _this;}ECLinePath.prototype.getDefaultStyle=function(){return{stroke:'#000',fill:null};};ECLinePath.prototype.getDefaultShape=function(){return new StraightLineShape();};ECLinePath.prototype.buildPath=function(ctx,shape){if(isStraightLine(shape)){straightLineProto.buildPath.call(this,ctx,shape);}else{bezierCurveProto.buildPath.call(this,ctx,shape);}};ECLinePath.prototype.pointAt=function(t){if(isStraightLine(this.shape)){return straightLineProto.pointAt.call(this,t);}else{return bezierCurveProto.pointAt.call(this,t);}};ECLinePath.prototype.tangentAt=function(t){var shape=this.shape;var p=isStraightLine(shape)?[shape.x2-shape.x1,shape.y2-shape.y1]:bezierCurveProto.tangentAt.call(this,t);return vector/* normalize */.Fv(p,p);};return ECLinePath;}(Path/* default */.ZP);/* harmony default export */ const LinePath = (ECLinePath);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/animation/basicTrasition.js
var basicTrasition = __webpack_require__(21438);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/Group.js
var Group = __webpack_require__(22060);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(36073);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/label/labelStyle.js
var labelStyle = __webpack_require__(9610);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(84646);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/helper/Line.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/var SYMBOL_CATEGORIES=['fromSymbol','toSymbol'];function makeSymbolTypeKey(symbolCategory){return'_'+symbolCategory+'Type';}/**
 * @inner
 */function createSymbol(name,lineData,idx){var symbolType=lineData.getItemVisual(idx,name);if(!symbolType||symbolType==='none'){return;}var symbolSize=lineData.getItemVisual(idx,name+'Size');var symbolRotate=lineData.getItemVisual(idx,name+'Rotate');var symbolOffset=lineData.getItemVisual(idx,name+'Offset');var symbolKeepAspect=lineData.getItemVisual(idx,name+'KeepAspect');var symbolSizeArr=symbol/* normalizeSymbolSize */.zp(symbolSize);var symbolOffsetArr=symbol/* normalizeSymbolOffset */.Cq(symbolOffset||0,symbolSizeArr);var symbolPath=symbol/* createSymbol */.th(symbolType,-symbolSizeArr[0]/2+symbolOffsetArr[0],-symbolSizeArr[1]/2+symbolOffsetArr[1],symbolSizeArr[0],symbolSizeArr[1],null,symbolKeepAspect);symbolPath.__specifiedRotation=symbolRotate==null||isNaN(symbolRotate)?void 0:+symbolRotate*Math.PI/180||0;symbolPath.name=name;return symbolPath;}function createLine(points){var line=new LinePath({name:'line',subPixelOptimize:true});setLinePoints(line.shape,points);return line;}function setLinePoints(targetShape,points){targetShape.x1=points[0][0];targetShape.y1=points[0][1];targetShape.x2=points[1][0];targetShape.y2=points[1][1];targetShape.percent=1;var cp1=points[2];if(cp1){targetShape.cpx1=cp1[0];targetShape.cpy1=cp1[1];}else{targetShape.cpx1=NaN;targetShape.cpy1=NaN;}}var Line_Line=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(Line,_super);function Line(lineData,idx,seriesScope){var _this=_super.call(this)||this;_this._createLine(lineData,idx,seriesScope);return _this;}Line.prototype._createLine=function(lineData,idx,seriesScope){var seriesModel=lineData.hostModel;var linePoints=lineData.getItemLayout(idx);var line=createLine(linePoints);line.shape.percent=0;basicTrasition/* initProps */.KZ(line,{shape:{percent:1}},seriesModel,idx);this.add(line);(0,util/* each */.S6)(SYMBOL_CATEGORIES,function(symbolCategory){var symbol=createSymbol(symbolCategory,lineData,idx);// symbols must added after line to make sure
// it will be updated after line#update.
// Or symbol position and rotation update in line#beforeUpdate will be one frame slow
this.add(symbol);this[makeSymbolTypeKey(symbolCategory)]=lineData.getItemVisual(idx,symbolCategory);},this);this._updateCommonStl(lineData,idx,seriesScope);};// TODO More strict on the List type in parameters?
Line.prototype.updateData=function(lineData,idx,seriesScope){var seriesModel=lineData.hostModel;var line=this.childOfName('line');var linePoints=lineData.getItemLayout(idx);var target={shape:{}};setLinePoints(target.shape,linePoints);basicTrasition/* updateProps */.D(line,target,seriesModel,idx);(0,util/* each */.S6)(SYMBOL_CATEGORIES,function(symbolCategory){var symbolType=lineData.getItemVisual(idx,symbolCategory);var key=makeSymbolTypeKey(symbolCategory);// Symbol changed
if(this[key]!==symbolType){this.remove(this.childOfName(symbolCategory));var symbol=createSymbol(symbolCategory,lineData,idx);this.add(symbol);}this[key]=symbolType;},this);this._updateCommonStl(lineData,idx,seriesScope);};;Line.prototype.getLinePath=function(){return this.childAt(0);};Line.prototype._updateCommonStl=function(lineData,idx,seriesScope){var seriesModel=lineData.hostModel;var line=this.childOfName('line');var emphasisLineStyle=seriesScope&&seriesScope.emphasisLineStyle;var blurLineStyle=seriesScope&&seriesScope.blurLineStyle;var selectLineStyle=seriesScope&&seriesScope.selectLineStyle;var labelStatesModels=seriesScope&&seriesScope.labelStatesModels;var emphasisDisabled=seriesScope&&seriesScope.emphasisDisabled;var focus=seriesScope&&seriesScope.focus;var blurScope=seriesScope&&seriesScope.blurScope;// Optimization for large dataset
if(!seriesScope||lineData.hasItemOption){var itemModel=lineData.getItemModel(idx);var emphasisModel=itemModel.getModel('emphasis');emphasisLineStyle=emphasisModel.getModel('lineStyle').getLineStyle();blurLineStyle=itemModel.getModel(['blur','lineStyle']).getLineStyle();selectLineStyle=itemModel.getModel(['select','lineStyle']).getLineStyle();emphasisDisabled=emphasisModel.get('disabled');focus=emphasisModel.get('focus');blurScope=emphasisModel.get('blurScope');labelStatesModels=(0,labelStyle/* getLabelStatesModels */.k3)(itemModel);}var lineStyle=lineData.getItemVisual(idx,'style');var visualColor=lineStyle.stroke;line.useStyle(lineStyle);line.style.fill=null;line.style.strokeNoScale=true;line.ensureState('emphasis').style=emphasisLineStyle;line.ensureState('blur').style=blurLineStyle;line.ensureState('select').style=selectLineStyle;// Update symbol
(0,util/* each */.S6)(SYMBOL_CATEGORIES,function(symbolCategory){var symbol=this.childOfName(symbolCategory);if(symbol){// Share opacity and color with line.
symbol.setColor(visualColor);symbol.style.opacity=lineStyle.opacity;for(var i=0;i<states/* SPECIAL_STATES.length */.L1.length;i++){var stateName=states/* SPECIAL_STATES */.L1[i];var lineState=line.getState(stateName);if(lineState){var lineStateStyle=lineState.style||{};var state=symbol.ensureState(stateName);var stateStyle=state.style||(state.style={});if(lineStateStyle.stroke!=null){stateStyle[symbol.__isEmptyBrush?'stroke':'fill']=lineStateStyle.stroke;}if(lineStateStyle.opacity!=null){stateStyle.opacity=lineStateStyle.opacity;}}}symbol.markRedraw();}},this);var rawVal=seriesModel.getRawValue(idx);(0,labelStyle/* setLabelStyle */.ni)(this,labelStatesModels,{labelDataIndex:idx,labelFetcher:{getFormattedLabel:function getFormattedLabel(dataIndex,stateName){return seriesModel.getFormattedLabel(dataIndex,stateName,lineData.dataType);}},inheritColor:visualColor||'#000',defaultOpacity:lineStyle.opacity,defaultText:(rawVal==null?lineData.getName(idx):isFinite(rawVal)?(0,number/* round */.NM)(rawVal):rawVal)+''});var label=this.getTextContent();// Always set `textStyle` even if `normalStyle.text` is null, because default
// values have to be set on `normalStyle`.
if(label){var labelNormalModel=labelStatesModels.normal;label.__align=label.style.align;label.__verticalAlign=label.style.verticalAlign;// 'start', 'middle', 'end'
label.__position=labelNormalModel.get('position')||'middle';var distance=labelNormalModel.get('distance');if(!(0,util/* isArray */.kJ)(distance)){distance=[distance,distance];}label.__labelDistance=distance;}this.setTextConfig({position:null,local:true,inside:false// Can't be inside for stroke element.
});(0,states/* toggleHoverEmphasis */.k5)(this,focus,blurScope,emphasisDisabled);};Line.prototype.highlight=function(){(0,states/* enterEmphasis */.fD)(this);};Line.prototype.downplay=function(){(0,states/* leaveEmphasis */.Mh)(this);};Line.prototype.updateLayout=function(lineData,idx){this.setLinePoints(lineData.getItemLayout(idx));};Line.prototype.setLinePoints=function(points){var linePath=this.childOfName('line');setLinePoints(linePath.shape,points);linePath.dirty();};Line.prototype.beforeUpdate=function(){var lineGroup=this;var symbolFrom=lineGroup.childOfName('fromSymbol');var symbolTo=lineGroup.childOfName('toSymbol');var label=lineGroup.getTextContent();// Quick reject
if(!symbolFrom&&!symbolTo&&(!label||label.ignore)){return;}var invScale=1;var parentNode=this.parent;while(parentNode){if(parentNode.scaleX){invScale/=parentNode.scaleX;}parentNode=parentNode.parent;}var line=lineGroup.childOfName('line');// If line not changed
// FIXME Parent scale changed
if(!this.__dirty&&!line.__dirty){return;}var percent=line.shape.percent;var fromPos=line.pointAt(0);var toPos=line.pointAt(percent);var d=vector/* sub */.lu([],toPos,fromPos);vector/* normalize */.Fv(d,d);function setSymbolRotation(symbol,percent){// Fix #12388
// when symbol is set to be 'arrow' in markLine,
// symbolRotate value will be ignored, and compulsively use tangent angle.
// rotate by default if symbol rotation is not specified
var specifiedRotation=symbol.__specifiedRotation;if(specifiedRotation==null){var tangent=line.tangentAt(percent);symbol.attr('rotation',(percent===1?-1:1)*Math.PI/2-Math.atan2(tangent[1],tangent[0]));}else{symbol.attr('rotation',specifiedRotation);}}if(symbolFrom){symbolFrom.setPosition(fromPos);setSymbolRotation(symbolFrom,0);symbolFrom.scaleX=symbolFrom.scaleY=invScale*percent;symbolFrom.markRedraw();}if(symbolTo){symbolTo.setPosition(toPos);setSymbolRotation(symbolTo,1);symbolTo.scaleX=symbolTo.scaleY=invScale*percent;symbolTo.markRedraw();}if(label&&!label.ignore){label.x=label.y=0;label.originX=label.originY=0;var textAlign=void 0;var textVerticalAlign=void 0;var distance=label.__labelDistance;var distanceX=distance[0]*invScale;var distanceY=distance[1]*invScale;var halfPercent=percent/2;var tangent=line.tangentAt(halfPercent);var n=[tangent[1],-tangent[0]];var cp=line.pointAt(halfPercent);if(n[1]>0){n[0]=-n[0];n[1]=-n[1];}var dir=tangent[0]<0?-1:1;if(label.__position!=='start'&&label.__position!=='end'){var rotation=-Math.atan2(tangent[1],tangent[0]);if(toPos[0]<fromPos[0]){rotation=Math.PI+rotation;}label.rotation=rotation;}var dy=void 0;switch(label.__position){case'insideStartTop':case'insideMiddleTop':case'insideEndTop':case'middle':dy=-distanceY;textVerticalAlign='bottom';break;case'insideStartBottom':case'insideMiddleBottom':case'insideEndBottom':dy=distanceY;textVerticalAlign='top';break;default:dy=0;textVerticalAlign='middle';}switch(label.__position){case'end':label.x=d[0]*distanceX+toPos[0];label.y=d[1]*distanceY+toPos[1];textAlign=d[0]>0.8?'left':d[0]<-0.8?'right':'center';textVerticalAlign=d[1]>0.8?'top':d[1]<-0.8?'bottom':'middle';break;case'start':label.x=-d[0]*distanceX+fromPos[0];label.y=-d[1]*distanceY+fromPos[1];textAlign=d[0]>0.8?'right':d[0]<-0.8?'left':'center';textVerticalAlign=d[1]>0.8?'bottom':d[1]<-0.8?'top':'middle';break;case'insideStartTop':case'insideStart':case'insideStartBottom':label.x=distanceX*dir+fromPos[0];label.y=fromPos[1]+dy;textAlign=tangent[0]<0?'right':'left';label.originX=-distanceX*dir;label.originY=-dy;break;case'insideMiddleTop':case'insideMiddle':case'insideMiddleBottom':case'middle':label.x=cp[0];label.y=cp[1]+dy;textAlign='center';label.originY=-dy;break;case'insideEndTop':case'insideEnd':case'insideEndBottom':label.x=-distanceX*dir+toPos[0];label.y=toPos[1]+dy;textAlign=tangent[0]>=0?'right':'left';label.originX=distanceX*dir;label.originY=-dy;break;}label.scaleX=label.scaleY=invScale;label.setStyle({// Use the user specified text align and baseline first
verticalAlign:label.__verticalAlign||textVerticalAlign,align:label.__align||textAlign});}};return Line;}(Group/* default */.Z);/* harmony default export */ const helper_Line = (Line_Line);

/***/ }),

/***/ 12301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22060);
/* harmony import */ var _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45482);
/* harmony import */ var _Line_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(327);
/* harmony import */ var _label_labelStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9610);
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/var LineDraw=/** @class */function(){function LineDraw(LineCtor){this.group=new _util_graphic_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z();this._LineCtor=LineCtor||_Line_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z;}LineDraw.prototype.updateData=function(lineData){var _this=this;// Remove progressive els.
this._progressiveEls=null;var lineDraw=this;var group=lineDraw.group;var oldLineData=lineDraw._lineData;lineDraw._lineData=lineData;// There is no oldLineData only when first rendering or switching from
// stream mode to normal mode, where previous elements should be removed.
if(!oldLineData){group.removeAll();}var seriesScope=makeSeriesScope(lineData);lineData.diff(oldLineData).add(function(idx){_this._doAdd(lineData,idx,seriesScope);}).update(function(newIdx,oldIdx){_this._doUpdate(oldLineData,lineData,oldIdx,newIdx,seriesScope);}).remove(function(idx){group.remove(oldLineData.getItemGraphicEl(idx));}).execute();};;LineDraw.prototype.updateLayout=function(){var lineData=this._lineData;// Do not support update layout in incremental mode.
if(!lineData){return;}lineData.eachItemGraphicEl(function(el,idx){el.updateLayout(lineData,idx);},this);};;LineDraw.prototype.incrementalPrepareUpdate=function(lineData){this._seriesScope=makeSeriesScope(lineData);this._lineData=null;this.group.removeAll();};;LineDraw.prototype.incrementalUpdate=function(taskParams,lineData){this._progressiveEls=[];function updateIncrementalAndHover(el){if(!el.isGroup&&!isEffectObject(el)){el.incremental=true;el.ensureState('emphasis').hoverLayer=true;}}for(var idx=taskParams.start;idx<taskParams.end;idx++){var itemLayout=lineData.getItemLayout(idx);if(lineNeedsDraw(itemLayout)){var el=new this._LineCtor(lineData,idx,this._seriesScope);el.traverse(updateIncrementalAndHover);this.group.add(el);lineData.setItemGraphicEl(idx,el);this._progressiveEls.push(el);}}};;LineDraw.prototype.remove=function(){this.group.removeAll();};;LineDraw.prototype.eachRendered=function(cb){_util_graphic_js__WEBPACK_IMPORTED_MODULE_2__.traverseElements(this._progressiveEls||this.group,cb);};LineDraw.prototype._doAdd=function(lineData,idx,seriesScope){var itemLayout=lineData.getItemLayout(idx);if(!lineNeedsDraw(itemLayout)){return;}var el=new this._LineCtor(lineData,idx,seriesScope);lineData.setItemGraphicEl(idx,el);this.group.add(el);};LineDraw.prototype._doUpdate=function(oldLineData,newLineData,oldIdx,newIdx,seriesScope){var itemEl=oldLineData.getItemGraphicEl(oldIdx);if(!lineNeedsDraw(newLineData.getItemLayout(newIdx))){this.group.remove(itemEl);return;}if(!itemEl){itemEl=new this._LineCtor(newLineData,newIdx,seriesScope);}else{itemEl.updateData(newLineData,newIdx,seriesScope);}newLineData.setItemGraphicEl(newIdx,itemEl);this.group.add(itemEl);};return LineDraw;}();function isEffectObject(el){return el.animators&&el.animators.length>0;}function makeSeriesScope(lineData){var hostModel=lineData.hostModel;var emphasisModel=hostModel.getModel('emphasis');return{lineStyle:hostModel.getModel('lineStyle').getLineStyle(),emphasisLineStyle:emphasisModel.getModel(['lineStyle']).getLineStyle(),blurLineStyle:hostModel.getModel(['blur','lineStyle']).getLineStyle(),selectLineStyle:hostModel.getModel(['select','lineStyle']).getLineStyle(),emphasisDisabled:emphasisModel.get('disabled'),blurScope:emphasisModel.get('blurScope'),focus:emphasisModel.get('focus'),labelStatesModels:(0,_label_labelStyle_js__WEBPACK_IMPORTED_MODULE_3__/* .getLabelStatesModels */ .k3)(hostModel)};}function isPointNaN(pt){return isNaN(pt[0])||isNaN(pt[1]);}function lineNeedsDraw(pts){return pts&&!isPointNaN(pts[0])&&!isPointNaN(pts[1]);}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LineDraw);

/***/ }),

/***/ 17644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88161);
/* harmony import */ var _util_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33518);
/* harmony import */ var _util_graphic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21438);
/* harmony import */ var _util_graphic_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22060);
/* harmony import */ var _util_innerStore_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5661);
/* harmony import */ var _util_states_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36073);
/* harmony import */ var _labelHelper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56783);
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57697);
/* harmony import */ var _label_labelStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9610);
/* harmony import */ var zrender_lib_graphic_Image_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30122);
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/var _Symbol=/** @class */function(_super){(0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__extends */ .ZT)(_Symbol2,_super);function _Symbol2(data,idx,seriesScope,opts){var _this=_super.call(this)||this;_this.updateData(data,idx,seriesScope,opts);return _this;}_Symbol2.prototype._createSymbol=function(symbolType,data,idx,symbolSize,keepAspect){// Remove paths created before
this.removeAll();// let symbolPath = createSymbol(
//     symbolType, -0.5, -0.5, 1, 1, color
// );
// If width/height are set too small (e.g., set to 1) on ios10
// and macOS Sierra, a circle stroke become a rect, no matter what
// the scale is set. So we set width/height as 2. See #4150.
var symbolPath=(0,_util_symbol_js__WEBPACK_IMPORTED_MODULE_1__/* .createSymbol */ .th)(symbolType,-1,-1,2,2,null,keepAspect);symbolPath.attr({z2:100,culling:true,scaleX:symbolSize[0]/2,scaleY:symbolSize[1]/2});// Rewrite drift method
symbolPath.drift=driftSymbol;this._symbolType=symbolType;this.add(symbolPath);};/**
   * Stop animation
   * @param {boolean} toLastFrame
   */_Symbol2.prototype.stopSymbolAnimation=function(toLastFrame){this.childAt(0).stopAnimation(null,toLastFrame);};_Symbol2.prototype.getSymbolType=function(){return this._symbolType;};/**
   * FIXME:
   * Caution: This method breaks the encapsulation of this module,
   * but it indeed brings convenience. So do not use the method
   * unless you detailedly know all the implements of `Symbol`,
   * especially animation.
   *
   * Get symbol path element.
   */_Symbol2.prototype.getSymbolPath=function(){return this.childAt(0);};/**
   * Highlight symbol
   */_Symbol2.prototype.highlight=function(){(0,_util_states_js__WEBPACK_IMPORTED_MODULE_2__/* .enterEmphasis */ .fD)(this.childAt(0));};/**
   * Downplay symbol
   */_Symbol2.prototype.downplay=function(){(0,_util_states_js__WEBPACK_IMPORTED_MODULE_2__/* .leaveEmphasis */ .Mh)(this.childAt(0));};/**
   * @param {number} zlevel
   * @param {number} z
   */_Symbol2.prototype.setZ=function(zlevel,z){var symbolPath=this.childAt(0);symbolPath.zlevel=zlevel;symbolPath.z=z;};_Symbol2.prototype.setDraggable=function(draggable,hasCursorOption){var symbolPath=this.childAt(0);symbolPath.draggable=draggable;symbolPath.cursor=!hasCursorOption&&draggable?'move':symbolPath.cursor;};/**
   * Update symbol properties
   */_Symbol2.prototype.updateData=function(data,idx,seriesScope,opts){this.silent=false;var symbolType=data.getItemVisual(idx,'symbol')||'circle';var seriesModel=data.hostModel;var symbolSize=_Symbol2.getSymbolSize(data,idx);var isInit=symbolType!==this._symbolType;var disableAnimation=opts&&opts.disableAnimation;if(isInit){var keepAspect=data.getItemVisual(idx,'symbolKeepAspect');this._createSymbol(symbolType,data,idx,symbolSize,keepAspect);}else{var symbolPath=this.childAt(0);symbolPath.silent=false;var target={scaleX:symbolSize[0]/2,scaleY:symbolSize[1]/2};disableAnimation?symbolPath.attr(target):_util_graphic_js__WEBPACK_IMPORTED_MODULE_3__/* .updateProps */ .D(symbolPath,target,seriesModel,idx);(0,_util_graphic_js__WEBPACK_IMPORTED_MODULE_3__/* .saveOldStyle */ .Zi)(symbolPath);}this._updateCommon(data,idx,symbolSize,seriesScope,opts);if(isInit){var symbolPath=this.childAt(0);if(!disableAnimation){var target={scaleX:this._sizeX,scaleY:this._sizeY,style:{// Always fadeIn. Because it has fadeOut animation when symbol is removed..
opacity:symbolPath.style.opacity}};symbolPath.scaleX=symbolPath.scaleY=0;symbolPath.style.opacity=0;_util_graphic_js__WEBPACK_IMPORTED_MODULE_3__/* .initProps */ .KZ(symbolPath,target,seriesModel,idx);}}if(disableAnimation){// Must stop leave transition manually if don't call initProps or updateProps.
this.childAt(0).stopAnimation('leave');}};_Symbol2.prototype._updateCommon=function(data,idx,symbolSize,seriesScope,opts){var symbolPath=this.childAt(0);var seriesModel=data.hostModel;var emphasisItemStyle;var blurItemStyle;var selectItemStyle;var focus;var blurScope;var emphasisDisabled;var labelStatesModels;var hoverScale;var cursorStyle;if(seriesScope){emphasisItemStyle=seriesScope.emphasisItemStyle;blurItemStyle=seriesScope.blurItemStyle;selectItemStyle=seriesScope.selectItemStyle;focus=seriesScope.focus;blurScope=seriesScope.blurScope;labelStatesModels=seriesScope.labelStatesModels;hoverScale=seriesScope.hoverScale;cursorStyle=seriesScope.cursorStyle;emphasisDisabled=seriesScope.emphasisDisabled;}if(!seriesScope||data.hasItemOption){var itemModel=seriesScope&&seriesScope.itemModel?seriesScope.itemModel:data.getItemModel(idx);var emphasisModel=itemModel.getModel('emphasis');emphasisItemStyle=emphasisModel.getModel('itemStyle').getItemStyle();selectItemStyle=itemModel.getModel(['select','itemStyle']).getItemStyle();blurItemStyle=itemModel.getModel(['blur','itemStyle']).getItemStyle();focus=emphasisModel.get('focus');blurScope=emphasisModel.get('blurScope');emphasisDisabled=emphasisModel.get('disabled');labelStatesModels=(0,_label_labelStyle_js__WEBPACK_IMPORTED_MODULE_4__/* .getLabelStatesModels */ .k3)(itemModel);hoverScale=emphasisModel.getShallow('scale');cursorStyle=itemModel.getShallow('cursor');}var symbolRotate=data.getItemVisual(idx,'symbolRotate');symbolPath.attr('rotation',(symbolRotate||0)*Math.PI/180||0);var symbolOffset=(0,_util_symbol_js__WEBPACK_IMPORTED_MODULE_1__/* .normalizeSymbolOffset */ .Cq)(data.getItemVisual(idx,'symbolOffset'),symbolSize);if(symbolOffset){symbolPath.x=symbolOffset[0];symbolPath.y=symbolOffset[1];}cursorStyle&&symbolPath.attr('cursor',cursorStyle);var symbolStyle=data.getItemVisual(idx,'style');var visualColor=symbolStyle.fill;if(symbolPath instanceof zrender_lib_graphic_Image_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP){var pathStyle=symbolPath.style;symbolPath.useStyle((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_6__/* .extend */ .l7)({// TODO other properties like x, y ?
image:pathStyle.image,x:pathStyle.x,y:pathStyle.y,width:pathStyle.width,height:pathStyle.height},symbolStyle));}else{if(symbolPath.__isEmptyBrush){// fill and stroke will be swapped if it's empty.
// So we cloned a new style to avoid it affecting the original style in visual storage.
// TODO Better implementation. No empty logic!
symbolPath.useStyle((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_6__/* .extend */ .l7)({},symbolStyle));}else{symbolPath.useStyle(symbolStyle);}// Disable decal because symbol scale will been applied on the decal.
symbolPath.style.decal=null;symbolPath.setColor(visualColor,opts&&opts.symbolInnerColor);symbolPath.style.strokeNoScale=true;}var liftZ=data.getItemVisual(idx,'liftZ');var z2Origin=this._z2;if(liftZ!=null){if(z2Origin==null){this._z2=symbolPath.z2;symbolPath.z2+=liftZ;}}else if(z2Origin!=null){symbolPath.z2=z2Origin;this._z2=null;}var useNameLabel=opts&&opts.useNameLabel;(0,_label_labelStyle_js__WEBPACK_IMPORTED_MODULE_4__/* .setLabelStyle */ .ni)(symbolPath,labelStatesModels,{labelFetcher:seriesModel,labelDataIndex:idx,defaultText:getLabelDefaultText,inheritColor:visualColor,defaultOpacity:symbolStyle.opacity});// Do not execute util needed.
function getLabelDefaultText(idx){return useNameLabel?data.getName(idx):(0,_labelHelper_js__WEBPACK_IMPORTED_MODULE_7__/* .getDefaultLabel */ .H)(data,idx);}this._sizeX=symbolSize[0]/2;this._sizeY=symbolSize[1]/2;var emphasisState=symbolPath.ensureState('emphasis');emphasisState.style=emphasisItemStyle;symbolPath.ensureState('select').style=selectItemStyle;symbolPath.ensureState('blur').style=blurItemStyle;if(hoverScale){var scaleRatio=Math.max((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_6__/* .isNumber */ .hj)(hoverScale)?hoverScale:1.1,3/this._sizeY);emphasisState.scaleX=this._sizeX*scaleRatio;emphasisState.scaleY=this._sizeY*scaleRatio;}this.setSymbolScale(1);(0,_util_states_js__WEBPACK_IMPORTED_MODULE_2__/* .toggleHoverEmphasis */ .k5)(this,focus,blurScope,emphasisDisabled);};_Symbol2.prototype.setSymbolScale=function(scale){this.scaleX=this.scaleY=scale;};_Symbol2.prototype.fadeOut=function(cb,seriesModel,opt){var symbolPath=this.childAt(0);var dataIndex=(0,_util_innerStore_js__WEBPACK_IMPORTED_MODULE_8__/* .getECData */ .A)(this).dataIndex;var animationOpt=opt&&opt.animation;// Avoid mistaken hover when fading out
this.silent=symbolPath.silent=true;// Not show text when animating
if(opt&&opt.fadeLabel){var textContent=symbolPath.getTextContent();if(textContent){_util_graphic_js__WEBPACK_IMPORTED_MODULE_3__/* .removeElement */ .bX(textContent,{style:{opacity:0}},seriesModel,{dataIndex:dataIndex,removeOpt:animationOpt,cb:function cb(){symbolPath.removeTextContent();}});}}else{symbolPath.removeTextContent();}_util_graphic_js__WEBPACK_IMPORTED_MODULE_3__/* .removeElement */ .bX(symbolPath,{style:{opacity:0},scaleX:0,scaleY:0},seriesModel,{dataIndex:dataIndex,cb:cb,removeOpt:animationOpt});};_Symbol2.getSymbolSize=function(data,idx){return (0,_util_symbol_js__WEBPACK_IMPORTED_MODULE_1__/* .normalizeSymbolSize */ .zp)(data.getItemVisual(idx,'symbolSize'));};return _Symbol2;}(_util_graphic_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z);function driftSymbol(dx,dy){this.parent.drift(dx,dy);}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Symbol);

/***/ }),

/***/ 88087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22060);
/* harmony import */ var _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21438);
/* harmony import */ var _util_graphic_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45482);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17644);
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57697);
/* harmony import */ var _label_labelStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9610);
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/function symbolNeedsDraw(data,point,idx,opt){return point&&!isNaN(point[0])&&!isNaN(point[1])&&!(opt.isIgnore&&opt.isIgnore(idx))// We do not set clipShape on group, because it will cut part of
// the symbol element shape. We use the same clip shape here as
// the line clip.
&&!(opt.clipShape&&!opt.clipShape.contain(point[0],point[1]))&&data.getItemVisual(idx,'symbol')!=='none';}function normalizeUpdateOpt(opt){if(opt!=null&&!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(opt)){opt={isIgnore:opt};}return opt||{};}function makeSeriesScope(data){var seriesModel=data.hostModel;var emphasisModel=seriesModel.getModel('emphasis');return{emphasisItemStyle:emphasisModel.getModel('itemStyle').getItemStyle(),blurItemStyle:seriesModel.getModel(['blur','itemStyle']).getItemStyle(),selectItemStyle:seriesModel.getModel(['select','itemStyle']).getItemStyle(),focus:emphasisModel.get('focus'),blurScope:emphasisModel.get('blurScope'),emphasisDisabled:emphasisModel.get('disabled'),hoverScale:emphasisModel.get('scale'),labelStatesModels:(0,_label_labelStyle_js__WEBPACK_IMPORTED_MODULE_1__/* .getLabelStatesModels */ .k3)(seriesModel),cursorStyle:seriesModel.get('cursor')};}var SymbolDraw=/** @class */function(){function SymbolDraw(SymbolCtor){this.group=new _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z();this._SymbolCtor=SymbolCtor||_Symbol_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z;}/**
   * Update symbols draw by new data
   */SymbolDraw.prototype.updateData=function(data,opt){// Remove progressive els.
this._progressiveEls=null;opt=normalizeUpdateOpt(opt);var group=this.group;var seriesModel=data.hostModel;var oldData=this._data;var SymbolCtor=this._SymbolCtor;var disableAnimation=opt.disableAnimation;var seriesScope=makeSeriesScope(data);var symbolUpdateOpt={disableAnimation:disableAnimation};var getSymbolPoint=opt.getSymbolPoint||function(idx){return data.getItemLayout(idx);};// There is no oldLineData only when first rendering or switching from
// stream mode to normal mode, where previous elements should be removed.
if(!oldData){group.removeAll();}data.diff(oldData).add(function(newIdx){var point=getSymbolPoint(newIdx);if(symbolNeedsDraw(data,point,newIdx,opt)){var symbolEl=new SymbolCtor(data,newIdx,seriesScope,symbolUpdateOpt);symbolEl.setPosition(point);data.setItemGraphicEl(newIdx,symbolEl);group.add(symbolEl);}}).update(function(newIdx,oldIdx){var symbolEl=oldData.getItemGraphicEl(oldIdx);var point=getSymbolPoint(newIdx);if(!symbolNeedsDraw(data,point,newIdx,opt)){group.remove(symbolEl);return;}var newSymbolType=data.getItemVisual(newIdx,'symbol')||'circle';var oldSymbolType=symbolEl&&symbolEl.getSymbolType&&symbolEl.getSymbolType();if(!symbolEl// Create a new if symbol type changed.
||oldSymbolType&&oldSymbolType!==newSymbolType){group.remove(symbolEl);symbolEl=new SymbolCtor(data,newIdx,seriesScope,symbolUpdateOpt);symbolEl.setPosition(point);}else{symbolEl.updateData(data,newIdx,seriesScope,symbolUpdateOpt);var target={x:point[0],y:point[1]};disableAnimation?symbolEl.attr(target):_util_graphic_js__WEBPACK_IMPORTED_MODULE_4__/* .updateProps */ .D(symbolEl,target,seriesModel);}// Add back
group.add(symbolEl);data.setItemGraphicEl(newIdx,symbolEl);}).remove(function(oldIdx){var el=oldData.getItemGraphicEl(oldIdx);el&&el.fadeOut(function(){group.remove(el);},seriesModel);}).execute();this._getSymbolPoint=getSymbolPoint;this._data=data;};;SymbolDraw.prototype.updateLayout=function(){var _this=this;var data=this._data;if(data){// Not use animation
data.eachItemGraphicEl(function(el,idx){var point=_this._getSymbolPoint(idx);el.setPosition(point);el.markRedraw();});}};;SymbolDraw.prototype.incrementalPrepareUpdate=function(data){this._seriesScope=makeSeriesScope(data);this._data=null;this.group.removeAll();};;/**
   * Update symbols draw by new data
   */SymbolDraw.prototype.incrementalUpdate=function(taskParams,data,opt){// Clear
this._progressiveEls=[];opt=normalizeUpdateOpt(opt);function updateIncrementalAndHover(el){if(!el.isGroup){el.incremental=true;el.ensureState('emphasis').hoverLayer=true;}}for(var idx=taskParams.start;idx<taskParams.end;idx++){var point=data.getItemLayout(idx);if(symbolNeedsDraw(data,point,idx,opt)){var el=new this._SymbolCtor(data,idx,this._seriesScope);el.traverse(updateIncrementalAndHover);el.setPosition(point);this.group.add(el);data.setItemGraphicEl(idx,el);this._progressiveEls.push(el);}}};;SymbolDraw.prototype.eachRendered=function(cb){_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.traverseElements(this._progressiveEls||this.group,cb);};SymbolDraw.prototype.remove=function(enableAnimation){var group=this.group;var data=this._data;// Incremental model do not have this._data.
if(data&&enableAnimation){data.eachItemGraphicEl(function(el){el.fadeOut(function(){group.remove(el);},data.hostModel);});}else{group.removeAll();}};;return SymbolDraw;}();/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SymbolDraw);

/***/ }),

/***/ 9949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ID": () => (/* binding */ createGridClipPath),
/* harmony export */   "X0": () => (/* binding */ createPolarClipPath),
/* harmony export */   "lQ": () => (/* binding */ createClipPath)
/* harmony export */ });
/* harmony import */ var _util_graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19568);
/* harmony import */ var _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21438);
/* harmony import */ var _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38502);
/* harmony import */ var _util_number_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84646);
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57697);
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/function createGridClipPath(cartesian,hasAnimation,seriesModel,done,during){var rect=cartesian.getArea();var x=rect.x;var y=rect.y;var width=rect.width;var height=rect.height;var lineWidth=seriesModel.get(['lineStyle','width'])||2;// Expand the clip path a bit to avoid the border is clipped and looks thinner
x-=lineWidth/2;y-=lineWidth/2;width+=lineWidth;height+=lineWidth;// fix: https://github.com/apache/incubator-echarts/issues/11369
x=Math.floor(x);width=Math.round(width);var clipPath=new _util_graphic_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z({shape:{x:x,y:y,width:width,height:height}});if(hasAnimation){var baseAxis=cartesian.getBaseAxis();var isHorizontal=baseAxis.isHorizontal();var isAxisInversed=baseAxis.inverse;if(isHorizontal){if(isAxisInversed){clipPath.shape.x+=width;}clipPath.shape.width=0;}else{if(!isAxisInversed){clipPath.shape.y+=height;}clipPath.shape.height=0;}var duringCb=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isFunction */ .mf)(during)?function(percent){during(percent,clipPath);}:null;_util_graphic_js__WEBPACK_IMPORTED_MODULE_2__/* .initProps */ .KZ(clipPath,{shape:{width:width,height:height,x:x,y:y}},seriesModel,null,done,duringCb);}return clipPath;}function createPolarClipPath(polar,hasAnimation,seriesModel){var sectorArea=polar.getArea();// Avoid float number rounding error for symbol on the edge of axis extent.
var r0=(0,_util_number_js__WEBPACK_IMPORTED_MODULE_3__/* .round */ .NM)(sectorArea.r0,1);var r=(0,_util_number_js__WEBPACK_IMPORTED_MODULE_3__/* .round */ .NM)(sectorArea.r,1);var clipPath=new _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .C({shape:{cx:(0,_util_number_js__WEBPACK_IMPORTED_MODULE_3__/* .round */ .NM)(polar.cx,1),cy:(0,_util_number_js__WEBPACK_IMPORTED_MODULE_3__/* .round */ .NM)(polar.cy,1),r0:r0,r:r,startAngle:sectorArea.startAngle,endAngle:sectorArea.endAngle,clockwise:sectorArea.clockwise}});if(hasAnimation){var isRadial=polar.getBaseAxis().dim==='angle';if(isRadial){clipPath.shape.endAngle=sectorArea.startAngle;}else{clipPath.shape.r=r0;}_util_graphic_js__WEBPACK_IMPORTED_MODULE_2__/* .initProps */ .KZ(clipPath,{shape:{endAngle:sectorArea.endAngle,r:r}},seriesModel);}return clipPath;}function createClipPath(coordSys,hasAnimation,seriesModel,done,during){if(!coordSys){return null;}else if(coordSys.type==='polar'){return createPolarClipPath(coordSys,hasAnimation,seriesModel);}else if(coordSys.type==='cartesian2d'){return createGridClipPath(coordSys,hasAnimation,seriesModel,done,during);}return null;}

/***/ }),

/***/ 75187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ createRenderPlanner)
/* harmony export */ });
/* harmony import */ var _util_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23958);
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*//**
 * @return {string} If large mode changed, return string 'reset';
 */function createRenderPlanner(){var inner=(0,_util_model_js__WEBPACK_IMPORTED_MODULE_0__/* .makeInner */ .Yf)();return function(seriesModel){var fields=inner(seriesModel);var pipelineContext=seriesModel.pipelineContext;var originalLarge=!!fields.large;var originalProgressive=!!fields.progressiveRender;// FIXME: if the planner works on a filtered series, `pipelineContext` does not
// exists. See #11611 . Probably we need to modify this structure, see the comment
// on `performRawSeries` in `Schedular.js`.
var large=fields.large=!!(pipelineContext&&pipelineContext.large);var progressive=fields.progressiveRender=!!(pipelineContext&&pipelineContext.progressiveRender);return!!(originalLarge!==large||originalProgressive!==progressive)&&'reset';};}

/***/ }),

/***/ 38839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57697);
/* harmony import */ var _data_SeriesData_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(66278);
/* harmony import */ var _data_helper_createDimensions_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32650);
/* harmony import */ var _data_helper_dimensionHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1979);
/* harmony import */ var _util_model_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(23958);
/* harmony import */ var _core_CoordinateSystem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44967);
/* harmony import */ var _model_referHelper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8847);
/* harmony import */ var _data_Source_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40653);
/* harmony import */ var _data_helper_dataStackHelper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29209);
/* harmony import */ var _data_helper_sourceHelper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47386);
/* harmony import */ var _util_types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74298);
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/function getCoordSysDimDefs(seriesModel,coordSysInfo){var coordSysName=seriesModel.get('coordinateSystem');var registeredCoordSys=_core_CoordinateSystem_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(coordSysName);var coordSysDimDefs;if(coordSysInfo&&coordSysInfo.coordSysDims){coordSysDimDefs=zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .map */ .UI(coordSysInfo.coordSysDims,function(dim){var dimInfo={name:dim};var axisModel=coordSysInfo.axisMap.get(dim);if(axisModel){var axisType=axisModel.get('type');dimInfo.type=(0,_data_helper_dimensionHelper_js__WEBPACK_IMPORTED_MODULE_2__/* .getDimensionTypeByAxis */ .T)(axisType);}return dimInfo;});}if(!coordSysDimDefs){// Get dimensions from registered coordinate system
coordSysDimDefs=registeredCoordSys&&(registeredCoordSys.getDimensionsInfo?registeredCoordSys.getDimensionsInfo():registeredCoordSys.dimensions.slice())||['x','y'];}return coordSysDimDefs;}function injectOrdinalMeta(dimInfoList,createInvertedIndices,coordSysInfo){var firstCategoryDimIndex;var hasNameEncode;coordSysInfo&&zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .each */ .S6(dimInfoList,function(dimInfo,dimIndex){var coordDim=dimInfo.coordDim;var categoryAxisModel=coordSysInfo.categoryAxisMap.get(coordDim);if(categoryAxisModel){if(firstCategoryDimIndex==null){firstCategoryDimIndex=dimIndex;}dimInfo.ordinalMeta=categoryAxisModel.getOrdinalMeta();if(createInvertedIndices){dimInfo.createInvertedIndices=true;}}if(dimInfo.otherDims.itemName!=null){hasNameEncode=true;}});if(!hasNameEncode&&firstCategoryDimIndex!=null){dimInfoList[firstCategoryDimIndex].otherDims.itemName=0;}return firstCategoryDimIndex;}/**
 * Caution: there are side effects to `sourceManager` in this method.
 * Should better only be called in `Series['getInitialData']`.
 */function createSeriesData(sourceRaw,seriesModel,opt){opt=opt||{};var sourceManager=seriesModel.getSourceManager();var source;var isOriginalSource=false;if(sourceRaw){isOriginalSource=true;source=(0,_data_Source_js__WEBPACK_IMPORTED_MODULE_3__/* .createSourceFromSeriesDataOption */ .nx)(sourceRaw);}else{source=sourceManager.getSource();// Is series.data. not dataset.
isOriginalSource=source.sourceFormat===_util_types_js__WEBPACK_IMPORTED_MODULE_4__/* .SOURCE_FORMAT_ORIGINAL */ .cy;}var coordSysInfo=(0,_model_referHelper_js__WEBPACK_IMPORTED_MODULE_5__/* .getCoordSysInfoBySeries */ .b)(seriesModel);var coordSysDimDefs=getCoordSysDimDefs(seriesModel,coordSysInfo);var useEncodeDefaulter=opt.useEncodeDefaulter;var encodeDefaulter=zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isFunction */ .mf(useEncodeDefaulter)?useEncodeDefaulter:useEncodeDefaulter?zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .curry */ .WA(_data_helper_sourceHelper_js__WEBPACK_IMPORTED_MODULE_6__/* .makeSeriesEncodeForAxisCoordSys */ .pY,coordSysDimDefs,seriesModel):null;var createDimensionOptions={coordDimensions:coordSysDimDefs,generateCoord:opt.generateCoord,encodeDefine:seriesModel.getEncode(),encodeDefaulter:encodeDefaulter,canOmitUnusedDimensions:!isOriginalSource};var schema=(0,_data_helper_createDimensions_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(source,createDimensionOptions);var firstCategoryDimIndex=injectOrdinalMeta(schema.dimensions,opt.createInvertedIndices,coordSysInfo);var store=!isOriginalSource?sourceManager.getSharedDataStore(schema):null;var stackCalculationInfo=(0,_data_helper_dataStackHelper_js__WEBPACK_IMPORTED_MODULE_8__/* .enableDataStack */ .BM)(seriesModel,{schema:schema,store:store});var data=new _data_SeriesData_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z(schema,seriesModel);data.setCalculationInfo(stackCalculationInfo);var dimValueGetter=firstCategoryDimIndex!=null&&isNeedCompleteOrdinalData(source)?function(itemOpt,dimName,dataIndex,dimIndex){// Use dataIndex as ordinal value in categoryAxis
return dimIndex===firstCategoryDimIndex?dataIndex:this.defaultDimValueGetter(itemOpt,dimName,dataIndex,dimIndex);}:null;data.hasItemOption=false;data.initData(// Try to reuse the data store in sourceManager if using dataset.
isOriginalSource?source:store,null,dimValueGetter);return data;}function isNeedCompleteOrdinalData(source){if(source.sourceFormat===_util_types_js__WEBPACK_IMPORTED_MODULE_4__/* .SOURCE_FORMAT_ORIGINAL */ .cy){var sampleItem=firstDataNotNull(source.data||[]);return!zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isArray */ .kJ((0,_util_model_js__WEBPACK_IMPORTED_MODULE_10__/* .getDataItemValue */ .C4)(sampleItem));}}function firstDataNotNull(arr){var i=0;while(i<arr.length&&arr[i]==null){i++;}return arr[i];}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSeriesData);

/***/ }),

/***/ 97451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ createSeriesDataSimply)
/* harmony export */ });
/* harmony import */ var _data_helper_createDimensions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32650);
/* harmony import */ var _data_SeriesData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66278);
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57697);
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*//**
 * [Usage]:
 * (1)
 * createListSimply(seriesModel, ['value']);
 * (2)
 * createListSimply(seriesModel, {
 *     coordDimensions: ['value'],
 *     dimensionsCount: 5
 * });
 */function createSeriesDataSimply(seriesModel,opt,nameList){opt=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(opt)&&{coordDimensions:opt}||(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .extend */ .l7)({encodeDefine:seriesModel.getEncode()},opt);var source=seriesModel.getSource();var dimensions=(0,_data_helper_createDimensions_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(source,opt).dimensions;var list=new _data_SeriesData_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z(dimensions,seriesModel);list.initData(source,nameList);return list;}

/***/ }),

/***/ 56783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ getDefaultLabel),
/* harmony export */   "O": () => (/* binding */ getDefaultInterpolatedLabel)
/* harmony export */ });
/* harmony import */ var _data_helper_dataProvider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32946);
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57697);
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*//**
 * @return label string. Not null/undefined
 */function getDefaultLabel(data,dataIndex){var labelDims=data.mapDimensionsAll('defaultedLabel');var len=labelDims.length;// Simple optimization (in lots of cases, label dims length is 1)
if(len===1){var rawVal=(0,_data_helper_dataProvider_js__WEBPACK_IMPORTED_MODULE_0__/* .retrieveRawValue */ .hk)(data,dataIndex,labelDims[0]);return rawVal!=null?rawVal+'':null;}else if(len){var vals=[];for(var i=0;i<labelDims.length;i++){vals.push((0,_data_helper_dataProvider_js__WEBPACK_IMPORTED_MODULE_0__/* .retrieveRawValue */ .hk)(data,dataIndex,labelDims[i]));}return vals.join(' ');}}function getDefaultInterpolatedLabel(data,interpolatedValue){var labelDims=data.mapDimensionsAll('defaultedLabel');if(!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isArray */ .kJ)(interpolatedValue)){return interpolatedValue+'';}var vals=[];for(var i=0;i<labelDims.length;i++){var dimIndex=data.getDimensionIndex(labelDims[i]);if(dimIndex>=0){vals.push(interpolatedValue[dimIndex]);}}return vals.join(' ');}

/***/ }),

/***/ 3706:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/extension.js
var extension = __webpack_require__(37107);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(88161);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/chart/helper/createSeriesData.js
var createSeriesData = __webpack_require__(38839);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/model/Series.js
var Series = __webpack_require__(49261);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/symbol.js
var util_symbol = __webpack_require__(33518);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/Group.js
var Group = __webpack_require__(22060);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/line/LineSeries.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/var LineSeriesModel=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(LineSeriesModel,_super);function LineSeriesModel(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=LineSeriesModel.type;_this.hasSymbolVisual=true;return _this;}LineSeriesModel.prototype.getInitialData=function(option){if(false){ var coordSys; }return (0,createSeriesData/* default */.Z)(null,this,{useEncodeDefaulter:true});};LineSeriesModel.prototype.getLegendIcon=function(opt){var group=new Group/* default */.Z();var line=(0,util_symbol/* createSymbol */.th)('line',0,opt.itemHeight/2,opt.itemWidth,0,opt.lineStyle.stroke,false);group.add(line);line.setStyle(opt.lineStyle);var visualType=this.getData().getVisual('symbol');var visualRotate=this.getData().getVisual('symbolRotate');var symbolType=visualType==='none'?'circle':visualType;// Symbol size is 80% when there is a line
var size=opt.itemHeight*0.8;var symbol=(0,util_symbol/* createSymbol */.th)(symbolType,(opt.itemWidth-size)/2,(opt.itemHeight-size)/2,size,size,opt.itemStyle.fill);group.add(symbol);symbol.setStyle(opt.itemStyle);var symbolRotate=opt.iconRotate==='inherit'?visualRotate:opt.iconRotate||0;symbol.rotation=symbolRotate*Math.PI/180;symbol.setOrigin([opt.itemWidth/2,opt.itemHeight/2]);if(symbolType.indexOf('empty')>-1){symbol.style.stroke=symbol.style.fill;symbol.style.fill='#fff';symbol.style.lineWidth=2;}return group;};LineSeriesModel.type='series.line';LineSeriesModel.dependencies=['grid','polar'];LineSeriesModel.defaultOption={// zlevel: 0,
z:3,coordinateSystem:'cartesian2d',legendHoverLink:true,clip:true,label:{position:'top'},// itemStyle: {
// },
endLabel:{show:false,valueAnimation:true,distance:8},lineStyle:{width:2,type:'solid'},emphasis:{scale:true},// areaStyle: {
// origin of areaStyle. Valid values:
// `'auto'/null/undefined`: from axisLine to data
// `'start'`: from min to data
// `'end'`: from data to max
// origin: 'auto'
// },
// false, 'start', 'end', 'middle'
step:false,// Disabled if step is true
smooth:false,smoothMonotone:null,symbol:'emptyCircle',symbolSize:4,symbolRotate:null,showSymbol:true,// `false`: follow the label interval strategy.
// `true`: show all symbols.
// `'auto'`: If possible, show all symbols, otherwise
//           follow the label interval strategy.
showAllSymbol:'auto',// Whether to connect break point.
connectNulls:false,// Sampling for large data. Can be: 'average', 'max', 'min', 'sum', 'lttb'.
sampling:'none',animationEasing:'linear',// Disable progressive
progressive:0,hoverLayerThreshold:Infinity,universalTransition:{divideShape:'clone'},triggerLineEvent:false};return LineSeriesModel;}(Series/* default */.Z);/* harmony default export */ const LineSeries = (LineSeriesModel);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(57697);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/chart/helper/SymbolDraw.js
var SymbolDraw = __webpack_require__(88087);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/chart/helper/Symbol.js
var Symbol = __webpack_require__(17644);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/data/helper/dataStackHelper.js
var dataStackHelper = __webpack_require__(29209);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/line/helper.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/function prepareDataCoordInfo(coordSys,data,valueOrigin){var baseAxis=coordSys.getBaseAxis();var valueAxis=coordSys.getOtherAxis(baseAxis);var valueStart=getValueStart(valueAxis,valueOrigin);var baseAxisDim=baseAxis.dim;var valueAxisDim=valueAxis.dim;var valueDim=data.mapDimension(valueAxisDim);var baseDim=data.mapDimension(baseAxisDim);var baseDataOffset=valueAxisDim==='x'||valueAxisDim==='radius'?1:0;var dims=(0,util/* map */.UI)(coordSys.dimensions,function(coordDim){return data.mapDimension(coordDim);});var stacked=false;var stackResultDim=data.getCalculationInfo('stackResultDimension');if((0,dataStackHelper/* isDimensionStacked */.M)(data,dims[0]/*, dims[1]*/)){// jshint ignore:line
stacked=true;dims[0]=stackResultDim;}if((0,dataStackHelper/* isDimensionStacked */.M)(data,dims[1]/*, dims[0]*/)){// jshint ignore:line
stacked=true;dims[1]=stackResultDim;}return{dataDimsForPoint:dims,valueStart:valueStart,valueAxisDim:valueAxisDim,baseAxisDim:baseAxisDim,stacked:!!stacked,valueDim:valueDim,baseDim:baseDim,baseDataOffset:baseDataOffset,stackedOverDimension:data.getCalculationInfo('stackedOverDimension')};}function getValueStart(valueAxis,valueOrigin){var valueStart=0;var extent=valueAxis.scale.getExtent();if(valueOrigin==='start'){valueStart=extent[0];}else if(valueOrigin==='end'){valueStart=extent[1];}// If origin is specified as a number, use it as
// valueStart directly
else if((0,util/* isNumber */.hj)(valueOrigin)&&!isNaN(valueOrigin)){valueStart=valueOrigin;}// auto
else{// Both positive
if(extent[0]>0){valueStart=extent[0];}// Both negative
else if(extent[1]<0){valueStart=extent[1];}// If is one positive, and one negative, onZero shall be true
}return valueStart;}function getStackedOnPoint(dataCoordInfo,coordSys,data,idx){var value=NaN;if(dataCoordInfo.stacked){value=data.get(data.getCalculationInfo('stackedOverDimension'),idx);}if(isNaN(value)){value=dataCoordInfo.valueStart;}var baseDataOffset=dataCoordInfo.baseDataOffset;var stackedData=[];stackedData[baseDataOffset]=data.get(dataCoordInfo.baseDim,idx);stackedData[1-baseDataOffset]=value;return coordSys.dataToPoint(stackedData);}
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/vendor.js
var vendor = __webpack_require__(17044);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/line/lineAnimationDiff.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/function diffData(oldData,newData){var diffResult=[];newData.diff(oldData).add(function(idx){diffResult.push({cmd:'+',idx:idx});}).update(function(newIdx,oldIdx){diffResult.push({cmd:'=',idx:oldIdx,idx1:newIdx});}).remove(function(idx){diffResult.push({cmd:'-',idx:idx});}).execute();return diffResult;}function lineAnimationDiff(oldData,newData,oldStackedOnPoints,newStackedOnPoints,oldCoordSys,newCoordSys,oldValueOrigin,newValueOrigin){var diff=diffData(oldData,newData);// let newIdList = newData.mapArray(newData.getId);
// let oldIdList = oldData.mapArray(oldData.getId);
// convertToIntId(newIdList, oldIdList);
// // FIXME One data ?
// diff = arrayDiff(oldIdList, newIdList);
var currPoints=[];var nextPoints=[];// Points for stacking base line
var currStackedPoints=[];var nextStackedPoints=[];var status=[];var sortedIndices=[];var rawIndices=[];var newDataOldCoordInfo=prepareDataCoordInfo(oldCoordSys,newData,oldValueOrigin);// const oldDataNewCoordInfo = prepareDataCoordInfo(newCoordSys, oldData, newValueOrigin);
var oldPoints=oldData.getLayout('points')||[];var newPoints=newData.getLayout('points')||[];for(var i=0;i<diff.length;i++){var diffItem=diff[i];var pointAdded=true;var oldIdx2=void 0;var newIdx2=void 0;// FIXME, animation is not so perfect when dataZoom window moves fast
// Which is in case remvoing or add more than one data in the tail or head
switch(diffItem.cmd){case'=':oldIdx2=diffItem.idx*2;newIdx2=diffItem.idx1*2;var currentX=oldPoints[oldIdx2];var currentY=oldPoints[oldIdx2+1];var nextX=newPoints[newIdx2];var nextY=newPoints[newIdx2+1];// If previous data is NaN, use next point directly
if(isNaN(currentX)||isNaN(currentY)){currentX=nextX;currentY=nextY;}currPoints.push(currentX,currentY);nextPoints.push(nextX,nextY);currStackedPoints.push(oldStackedOnPoints[oldIdx2],oldStackedOnPoints[oldIdx2+1]);nextStackedPoints.push(newStackedOnPoints[newIdx2],newStackedOnPoints[newIdx2+1]);rawIndices.push(newData.getRawIndex(diffItem.idx1));break;case'+':var newIdx=diffItem.idx;var newDataDimsForPoint=newDataOldCoordInfo.dataDimsForPoint;var oldPt=oldCoordSys.dataToPoint([newData.get(newDataDimsForPoint[0],newIdx),newData.get(newDataDimsForPoint[1],newIdx)]);newIdx2=newIdx*2;currPoints.push(oldPt[0],oldPt[1]);nextPoints.push(newPoints[newIdx2],newPoints[newIdx2+1]);var stackedOnPoint=getStackedOnPoint(newDataOldCoordInfo,oldCoordSys,newData,newIdx);currStackedPoints.push(stackedOnPoint[0],stackedOnPoint[1]);nextStackedPoints.push(newStackedOnPoints[newIdx2],newStackedOnPoints[newIdx2+1]);rawIndices.push(newData.getRawIndex(newIdx));break;case'-':pointAdded=false;}// Original indices
if(pointAdded){status.push(diffItem);sortedIndices.push(sortedIndices.length);}}// Diff result may be crossed if all items are changed
// Sort by data index
sortedIndices.sort(function(a,b){return rawIndices[a]-rawIndices[b];});var len=currPoints.length;var sortedCurrPoints=(0,vendor/* createFloat32Array */.o)(len);var sortedNextPoints=(0,vendor/* createFloat32Array */.o)(len);var sortedCurrStackedPoints=(0,vendor/* createFloat32Array */.o)(len);var sortedNextStackedPoints=(0,vendor/* createFloat32Array */.o)(len);var sortedStatus=[];for(var i=0;i<sortedIndices.length;i++){var idx=sortedIndices[i];var i2=i*2;var idx2=idx*2;sortedCurrPoints[i2]=currPoints[idx2];sortedCurrPoints[i2+1]=currPoints[idx2+1];sortedNextPoints[i2]=nextPoints[idx2];sortedNextPoints[i2+1]=nextPoints[idx2+1];sortedCurrStackedPoints[i2]=currStackedPoints[idx2];sortedCurrStackedPoints[i2+1]=currStackedPoints[idx2+1];sortedNextStackedPoints[i2]=nextStackedPoints[idx2];sortedNextStackedPoints[i2+1]=nextStackedPoints[idx2+1];sortedStatus[i]=status[idx];}return{current:sortedCurrPoints,next:sortedNextPoints,stackedOnCurrent:sortedCurrStackedPoints,stackedOnNext:sortedNextStackedPoints,status:sortedStatus};}
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/LinearGradient.js
var LinearGradient = __webpack_require__(45074);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/animation/basicTrasition.js
var basicTrasition = __webpack_require__(21438);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/Text.js + 1 modules
var Text = __webpack_require__(95067);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(23958);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/Path.js + 3 modules
var Path = __webpack_require__(73727);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/PathProxy.js + 1 modules
var PathProxy = __webpack_require__(28937);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/curve.js
var curve = __webpack_require__(86250);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/line/poly.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/// Poly path support NaN point
var mathMin=Math.min;var mathMax=Math.max;function isPointNull(x,y){return isNaN(x)||isNaN(y);}/**
 * Draw smoothed line in non-monotone, in may cause undesired curve in extreme
 * situations. This should be used when points are non-monotone neither in x or
 * y dimension.
 */function drawSegment(ctx,points,start,segLen,allLen,dir,smooth,smoothMonotone,connectNulls){var prevX;var prevY;var cpx0;var cpy0;var cpx1;var cpy1;var idx=start;var k=0;for(;k<segLen;k++){var x=points[idx*2];var y=points[idx*2+1];if(idx>=allLen||idx<0){break;}if(isPointNull(x,y)){if(connectNulls){idx+=dir;continue;}break;}if(idx===start){ctx[dir>0?'moveTo':'lineTo'](x,y);cpx0=x;cpy0=y;}else{var dx=x-prevX;var dy=y-prevY;// Ignore tiny segment.
if(dx*dx+dy*dy<0.5){idx+=dir;continue;}if(smooth>0){var nextIdx=idx+dir;var nextX=points[nextIdx*2];var nextY=points[nextIdx*2+1];// Ignore duplicate point
while(nextX===x&&nextY===y&&k<segLen){k++;nextIdx+=dir;idx+=dir;nextX=points[nextIdx*2];nextY=points[nextIdx*2+1];x=points[idx*2];y=points[idx*2+1];dx=x-prevX;dy=y-prevY;}var tmpK=k+1;if(connectNulls){// Find next point not null
while(isPointNull(nextX,nextY)&&tmpK<segLen){tmpK++;nextIdx+=dir;nextX=points[nextIdx*2];nextY=points[nextIdx*2+1];}}var ratioNextSeg=0.5;var vx=0;var vy=0;var nextCpx0=void 0;var nextCpy0=void 0;// Is last point
if(tmpK>=segLen||isPointNull(nextX,nextY)){cpx1=x;cpy1=y;}else{vx=nextX-prevX;vy=nextY-prevY;var dx0=x-prevX;var dx1=nextX-x;var dy0=y-prevY;var dy1=nextY-y;var lenPrevSeg=void 0;var lenNextSeg=void 0;if(smoothMonotone==='x'){lenPrevSeg=Math.abs(dx0);lenNextSeg=Math.abs(dx1);var dir_1=vx>0?1:-1;cpx1=x-dir_1*lenPrevSeg*smooth;cpy1=y;nextCpx0=x+dir_1*lenNextSeg*smooth;nextCpy0=y;}else if(smoothMonotone==='y'){lenPrevSeg=Math.abs(dy0);lenNextSeg=Math.abs(dy1);var dir_2=vy>0?1:-1;cpx1=x;cpy1=y-dir_2*lenPrevSeg*smooth;nextCpx0=x;nextCpy0=y+dir_2*lenNextSeg*smooth;}else{lenPrevSeg=Math.sqrt(dx0*dx0+dy0*dy0);lenNextSeg=Math.sqrt(dx1*dx1+dy1*dy1);// Use ratio of seg length
ratioNextSeg=lenNextSeg/(lenNextSeg+lenPrevSeg);cpx1=x-vx*smooth*(1-ratioNextSeg);cpy1=y-vy*smooth*(1-ratioNextSeg);// cp0 of next segment
nextCpx0=x+vx*smooth*ratioNextSeg;nextCpy0=y+vy*smooth*ratioNextSeg;// Smooth constraint between point and next point.
// Avoid exceeding extreme after smoothing.
nextCpx0=mathMin(nextCpx0,mathMax(nextX,x));nextCpy0=mathMin(nextCpy0,mathMax(nextY,y));nextCpx0=mathMax(nextCpx0,mathMin(nextX,x));nextCpy0=mathMax(nextCpy0,mathMin(nextY,y));// Reclaculate cp1 based on the adjusted cp0 of next seg.
vx=nextCpx0-x;vy=nextCpy0-y;cpx1=x-vx*lenPrevSeg/lenNextSeg;cpy1=y-vy*lenPrevSeg/lenNextSeg;// Smooth constraint between point and prev point.
// Avoid exceeding extreme after smoothing.
cpx1=mathMin(cpx1,mathMax(prevX,x));cpy1=mathMin(cpy1,mathMax(prevY,y));cpx1=mathMax(cpx1,mathMin(prevX,x));cpy1=mathMax(cpy1,mathMin(prevY,y));// Adjust next cp0 again.
vx=x-cpx1;vy=y-cpy1;nextCpx0=x+vx*lenNextSeg/lenPrevSeg;nextCpy0=y+vy*lenNextSeg/lenPrevSeg;}}ctx.bezierCurveTo(cpx0,cpy0,cpx1,cpy1,x,y);cpx0=nextCpx0;cpy0=nextCpy0;}else{ctx.lineTo(x,y);}}prevX=x;prevY=y;idx+=dir;}return k;}var ECPolylineShape=/** @class */function(){function ECPolylineShape(){this.smooth=0;this.smoothConstraint=true;}return ECPolylineShape;}();var ECPolyline=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(ECPolyline,_super);function ECPolyline(opts){var _this=_super.call(this,opts)||this;_this.type='ec-polyline';return _this;}ECPolyline.prototype.getDefaultStyle=function(){return{stroke:'#000',fill:null};};ECPolyline.prototype.getDefaultShape=function(){return new ECPolylineShape();};ECPolyline.prototype.buildPath=function(ctx,shape){var points=shape.points;var i=0;var len=points.length/2;// const result = getBoundingBox(points, shape.smoothConstraint);
if(shape.connectNulls){// Must remove first and last null values avoid draw error in polygon
for(;len>0;len--){if(!isPointNull(points[len*2-2],points[len*2-1])){break;}}for(;i<len;i++){if(!isPointNull(points[i*2],points[i*2+1])){break;}}}while(i<len){i+=drawSegment(ctx,points,i,len,len,1,shape.smooth,shape.smoothMonotone,shape.connectNulls)+1;}};ECPolyline.prototype.getPointOn=function(xOrY,dim){if(!this.path){this.createPathProxy();this.buildPath(this.path,this.shape);}var path=this.path;var data=path.data;var CMD=PathProxy/* default.CMD */.Z.CMD;var x0;var y0;var isDimX=dim==='x';var roots=[];for(var i=0;i<data.length;){var cmd=data[i++];var x=void 0;var y=void 0;var x2=void 0;var y2=void 0;var x3=void 0;var y3=void 0;var t=void 0;switch(cmd){case CMD.M:x0=data[i++];y0=data[i++];break;case CMD.L:x=data[i++];y=data[i++];t=isDimX?(xOrY-x0)/(x-x0):(xOrY-y0)/(y-y0);if(t<=1&&t>=0){var val=isDimX?(y-y0)*t+y0:(x-x0)*t+x0;return isDimX?[xOrY,val]:[val,xOrY];}x0=x;y0=y;break;case CMD.C:x=data[i++];y=data[i++];x2=data[i++];y2=data[i++];x3=data[i++];y3=data[i++];var nRoot=isDimX?(0,curve/* cubicRootAt */.kD)(x0,x,x2,x3,xOrY,roots):(0,curve/* cubicRootAt */.kD)(y0,y,y2,y3,xOrY,roots);if(nRoot>0){for(var i_1=0;i_1<nRoot;i_1++){var t_1=roots[i_1];if(t_1<=1&&t_1>=0){var val=isDimX?(0,curve/* cubicAt */.af)(y0,y,y2,y3,t_1):(0,curve/* cubicAt */.af)(x0,x,x2,x3,t_1);return isDimX?[xOrY,val]:[val,xOrY];}}}x0=x3;y0=y3;break;}}};return ECPolyline;}(Path/* default */.ZP);var ECPolygonShape=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(ECPolygonShape,_super);function ECPolygonShape(){return _super!==null&&_super.apply(this,arguments)||this;}return ECPolygonShape;}(ECPolylineShape);var ECPolygon=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(ECPolygon,_super);function ECPolygon(opts){var _this=_super.call(this,opts)||this;_this.type='ec-polygon';return _this;}ECPolygon.prototype.getDefaultShape=function(){return new ECPolygonShape();};ECPolygon.prototype.buildPath=function(ctx,shape){var points=shape.points;var stackedOnPoints=shape.stackedOnPoints;var i=0;var len=points.length/2;var smoothMonotone=shape.smoothMonotone;if(shape.connectNulls){// Must remove first and last null values avoid draw error in polygon
for(;len>0;len--){if(!isPointNull(points[len*2-2],points[len*2-1])){break;}}for(;i<len;i++){if(!isPointNull(points[i*2],points[i*2+1])){break;}}}while(i<len){var k=drawSegment(ctx,points,i,len,len,1,shape.smooth,smoothMonotone,shape.connectNulls);drawSegment(ctx,stackedOnPoints,i+k-1,k,len,-1,shape.stackedOnSmooth,smoothMonotone,shape.connectNulls);i+=k+1;ctx.closePath();}};return ECPolygon;}(Path/* default */.ZP);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/view/Chart.js
var Chart = __webpack_require__(99949);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/chart/helper/createClipPathFromCoordSys.js
var createClipPathFromCoordSys = __webpack_require__(9949);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/coord/CoordinateSystem.js
var CoordinateSystem = __webpack_require__(32266);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(36073);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/label/labelStyle.js
var labelStyle = __webpack_require__(9610);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/chart/helper/labelHelper.js
var labelHelper = __webpack_require__(56783);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(5661);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/format.js
var format = __webpack_require__(87662);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/tool/color.js
var tool_color = __webpack_require__(16304);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/line/LineView.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/// FIXME step not support polar
function isPointsSame(points1,points2){if(points1.length!==points2.length){return;}for(var i=0;i<points1.length;i++){if(points1[i]!==points2[i]){return;}}return true;}function bboxFromPoints(points){var minX=Infinity;var minY=Infinity;var maxX=-Infinity;var maxY=-Infinity;for(var i=0;i<points.length;){var x=points[i++];var y=points[i++];if(!isNaN(x)){minX=Math.min(x,minX);maxX=Math.max(x,maxX);}if(!isNaN(y)){minY=Math.min(y,minY);maxY=Math.max(y,maxY);}}return[[minX,minY],[maxX,maxY]];}function getBoundingDiff(points1,points2){var _a=bboxFromPoints(points1),min1=_a[0],max1=_a[1];var _b=bboxFromPoints(points2),min2=_b[0],max2=_b[1];// Get a max value from each corner of two boundings.
return Math.max(Math.abs(min1[0]-min2[0]),Math.abs(min1[1]-min2[1]),Math.abs(max1[0]-max2[0]),Math.abs(max1[1]-max2[1]));}function getSmooth(smooth){return util/* isNumber */.hj(smooth)?smooth:smooth?0.5:0;}function getStackedOnPoints(coordSys,data,dataCoordInfo){if(!dataCoordInfo.valueDim){return[];}var len=data.count();var points=(0,vendor/* createFloat32Array */.o)(len*2);for(var idx=0;idx<len;idx++){var pt=getStackedOnPoint(dataCoordInfo,coordSys,data,idx);points[idx*2]=pt[0];points[idx*2+1]=pt[1];}return points;}function turnPointsIntoStep(points,coordSys,stepTurnAt,connectNulls){var baseAxis=coordSys.getBaseAxis();var baseIndex=baseAxis.dim==='x'||baseAxis.dim==='radius'?0:1;var stepPoints=[];var i=0;var stepPt=[];var pt=[];var nextPt=[];var filteredPoints=[];if(connectNulls){for(i=0;i<points.length;i+=2){if(!isNaN(points[i])&&!isNaN(points[i+1])){filteredPoints.push(points[i],points[i+1]);}}points=filteredPoints;}for(i=0;i<points.length-2;i+=2){nextPt[0]=points[i+2];nextPt[1]=points[i+3];pt[0]=points[i];pt[1]=points[i+1];stepPoints.push(pt[0],pt[1]);switch(stepTurnAt){case'end':stepPt[baseIndex]=nextPt[baseIndex];stepPt[1-baseIndex]=pt[1-baseIndex];stepPoints.push(stepPt[0],stepPt[1]);break;case'middle':var middle=(pt[baseIndex]+nextPt[baseIndex])/2;var stepPt2=[];stepPt[baseIndex]=stepPt2[baseIndex]=middle;stepPt[1-baseIndex]=pt[1-baseIndex];stepPt2[1-baseIndex]=nextPt[1-baseIndex];stepPoints.push(stepPt[0],stepPt[1]);stepPoints.push(stepPt2[0],stepPt2[1]);break;default:// default is start
stepPt[baseIndex]=pt[baseIndex];stepPt[1-baseIndex]=nextPt[1-baseIndex];stepPoints.push(stepPt[0],stepPt[1]);}}// Last points
stepPoints.push(points[i++],points[i++]);return stepPoints;}/**
 * Clip color stops to edge. Avoid creating too large gradients.
 * Which may lead to blurry when GPU acceleration is enabled. See #15680
 *
 * The stops has been sorted from small to large.
 */function clipColorStops(colorStops,maxSize){var newColorStops=[];var len=colorStops.length;// coord will always < 0 in prevOutOfRangeColorStop.
var prevOutOfRangeColorStop;var prevInRangeColorStop;function lerpStop(stop0,stop1,clippedCoord){var coord0=stop0.coord;var p=(clippedCoord-coord0)/(stop1.coord-coord0);var color=(0,tool_color/* lerp */.t7)(p,[stop0.color,stop1.color]);return{coord:clippedCoord,color:color};}for(var i=0;i<len;i++){var stop_1=colorStops[i];var coord=stop_1.coord;if(coord<0){prevOutOfRangeColorStop=stop_1;}else if(coord>maxSize){if(prevInRangeColorStop){newColorStops.push(lerpStop(prevInRangeColorStop,stop_1,maxSize));}else if(prevOutOfRangeColorStop){// If there are two stops and coord range is between these two stops
newColorStops.push(lerpStop(prevOutOfRangeColorStop,stop_1,0),lerpStop(prevOutOfRangeColorStop,stop_1,maxSize));}// All following stop will be out of range. So just ignore them.
break;}else{if(prevOutOfRangeColorStop){newColorStops.push(lerpStop(prevOutOfRangeColorStop,stop_1,0));// Reset
prevOutOfRangeColorStop=null;}newColorStops.push(stop_1);prevInRangeColorStop=stop_1;}}return newColorStops;}function getVisualGradient(data,coordSys,api){var visualMetaList=data.getVisual('visualMeta');if(!visualMetaList||!visualMetaList.length||!data.count()){// When data.count() is 0, gradient range can not be calculated.
return;}if(coordSys.type!=='cartesian2d'){if(false){}return;}var coordDim;var visualMeta;for(var i=visualMetaList.length-1;i>=0;i--){var dimInfo=data.getDimensionInfo(visualMetaList[i].dimension);coordDim=dimInfo&&dimInfo.coordDim;// Can only be x or y
if(coordDim==='x'||coordDim==='y'){visualMeta=visualMetaList[i];break;}}if(!visualMeta){if(false){}return;}// If the area to be rendered is bigger than area defined by LinearGradient,
// the canvas spec prescribes that the color of the first stop and the last
// stop should be used. But if two stops are added at offset 0, in effect
// browsers use the color of the second stop to render area outside
// LinearGradient. So we can only infinitesimally extend area defined in
// LinearGradient to render `outerColors`.
var axis=coordSys.getAxis(coordDim);// dataToCoord mapping may not be linear, but must be monotonic.
var colorStops=util/* map */.UI(visualMeta.stops,function(stop){// offset will be calculated later.
return{coord:axis.toGlobalCoord(axis.dataToCoord(stop.value)),color:stop.color};});var stopLen=colorStops.length;var outerColors=visualMeta.outerColors.slice();if(stopLen&&colorStops[0].coord>colorStops[stopLen-1].coord){colorStops.reverse();outerColors.reverse();}var colorStopsInRange=clipColorStops(colorStops,coordDim==='x'?api.getWidth():api.getHeight());var inRangeStopLen=colorStopsInRange.length;if(!inRangeStopLen&&stopLen){// All stops are out of range. All will be the same color.
return colorStops[0].coord<0?outerColors[1]?outerColors[1]:colorStops[stopLen-1].color:outerColors[0]?outerColors[0]:colorStops[0].color;}var tinyExtent=10;// Arbitrary value: 10px
var minCoord=colorStopsInRange[0].coord-tinyExtent;var maxCoord=colorStopsInRange[inRangeStopLen-1].coord+tinyExtent;var coordSpan=maxCoord-minCoord;if(coordSpan<1e-3){return'transparent';}util/* each */.S6(colorStopsInRange,function(stop){stop.offset=(stop.coord-minCoord)/coordSpan;});colorStopsInRange.push({// NOTE: inRangeStopLen may still be 0 if stoplen is zero.
offset:inRangeStopLen?colorStopsInRange[inRangeStopLen-1].offset:0.5,color:outerColors[1]||'transparent'});colorStopsInRange.unshift({offset:inRangeStopLen?colorStopsInRange[0].offset:0.5,color:outerColors[0]||'transparent'});var gradient=new LinearGradient/* default */.Z(0,0,0,0,colorStopsInRange,true);gradient[coordDim]=minCoord;gradient[coordDim+'2']=maxCoord;return gradient;}function getIsIgnoreFunc(seriesModel,data,coordSys){var showAllSymbol=seriesModel.get('showAllSymbol');var isAuto=showAllSymbol==='auto';if(showAllSymbol&&!isAuto){return;}var categoryAxis=coordSys.getAxesByScale('ordinal')[0];if(!categoryAxis){return;}// Note that category label interval strategy might bring some weird effect
// in some scenario: users may wonder why some of the symbols are not
// displayed. So we show all symbols as possible as we can.
if(isAuto// Simplify the logic, do not determine label overlap here.
&&canShowAllSymbolForCategory(categoryAxis,data)){return;}// Otherwise follow the label interval strategy on category axis.
var categoryDataDim=data.mapDimension(categoryAxis.dim);var labelMap={};util/* each */.S6(categoryAxis.getViewLabels(),function(labelItem){var ordinalNumber=categoryAxis.scale.getRawOrdinalNumber(labelItem.tickValue);labelMap[ordinalNumber]=1;});return function(dataIndex){return!labelMap.hasOwnProperty(data.get(categoryDataDim,dataIndex));};}function canShowAllSymbolForCategory(categoryAxis,data){// In mose cases, line is monotonous on category axis, and the label size
// is close with each other. So we check the symbol size and some of the
// label size alone with the category axis to estimate whether all symbol
// can be shown without overlap.
var axisExtent=categoryAxis.getExtent();var availSize=Math.abs(axisExtent[1]-axisExtent[0])/categoryAxis.scale.count();isNaN(availSize)&&(availSize=0);// 0/0 is NaN.
// Sampling some points, max 5.
var dataLen=data.count();var step=Math.max(1,Math.round(dataLen/5));for(var dataIndex=0;dataIndex<dataLen;dataIndex+=step){if(Symbol/* default.getSymbolSize */.Z.getSymbolSize(data,dataIndex// Only for cartesian, where `isHorizontal` exists.
)[categoryAxis.isHorizontal()?1:0]// Empirical number
*1.5>availSize){return false;}}return true;}function LineView_isPointNull(x,y){return isNaN(x)||isNaN(y);}function getLastIndexNotNull(points){var len=points.length/2;for(;len>0;len--){if(!LineView_isPointNull(points[len*2-2],points[len*2-1])){break;}}return len-1;}function getPointAtIndex(points,idx){return[points[idx*2],points[idx*2+1]];}function getIndexRange(points,xOrY,dim){var len=points.length/2;var dimIdx=dim==='x'?0:1;var a;var b;var prevIndex=0;var nextIndex=-1;for(var i=0;i<len;i++){b=points[i*2+dimIdx];if(isNaN(b)||isNaN(points[i*2+1-dimIdx])){continue;}if(i===0){a=b;continue;}if(a<=xOrY&&b>=xOrY||a>=xOrY&&b<=xOrY){nextIndex=i;break;}prevIndex=i;a=b;}return{range:[prevIndex,nextIndex],t:(xOrY-a)/(b-a)};}function anyStateShowEndLabel(seriesModel){if(seriesModel.get(['endLabel','show'])){return true;}for(var i=0;i<states/* SPECIAL_STATES.length */.L1.length;i++){if(seriesModel.get([states/* SPECIAL_STATES */.L1[i],'endLabel','show'])){return true;}}return false;}function createLineClipPath(lineView,coordSys,hasAnimation,seriesModel){if((0,CoordinateSystem/* isCoordinateSystemType */.H)(coordSys,'cartesian2d')){var endLabelModel_1=seriesModel.getModel('endLabel');var valueAnimation_1=endLabelModel_1.get('valueAnimation');var data_1=seriesModel.getData();var labelAnimationRecord_1={lastFrameIndex:0};var during=anyStateShowEndLabel(seriesModel)?function(percent,clipRect){lineView._endLabelOnDuring(percent,clipRect,data_1,labelAnimationRecord_1,valueAnimation_1,endLabelModel_1,coordSys);}:null;var isHorizontal=coordSys.getBaseAxis().isHorizontal();var clipPath=(0,createClipPathFromCoordSys/* createGridClipPath */.ID)(coordSys,hasAnimation,seriesModel,function(){var endLabel=lineView._endLabel;if(endLabel&&hasAnimation){if(labelAnimationRecord_1.originalX!=null){endLabel.attr({x:labelAnimationRecord_1.originalX,y:labelAnimationRecord_1.originalY});}}},during);// Expand clip shape to avoid clipping when line value exceeds axis
if(!seriesModel.get('clip',true)){var rectShape=clipPath.shape;var expandSize=Math.max(rectShape.width,rectShape.height);if(isHorizontal){rectShape.y-=expandSize;rectShape.height+=expandSize*2;}else{rectShape.x-=expandSize;rectShape.width+=expandSize*2;}}// Set to the final frame. To make sure label layout is right.
if(during){during(1,clipPath);}return clipPath;}else{if(false){}return (0,createClipPathFromCoordSys/* createPolarClipPath */.X0)(coordSys,hasAnimation,seriesModel);}}function getEndLabelStateSpecified(endLabelModel,coordSys){var baseAxis=coordSys.getBaseAxis();var isHorizontal=baseAxis.isHorizontal();var isBaseInversed=baseAxis.inverse;var align=isHorizontal?isBaseInversed?'right':'left':'center';var verticalAlign=isHorizontal?'middle':isBaseInversed?'top':'bottom';return{normal:{align:endLabelModel.get('align')||align,verticalAlign:endLabelModel.get('verticalAlign')||verticalAlign}};}var LineView=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(LineView,_super);function LineView(){return _super!==null&&_super.apply(this,arguments)||this;}LineView.prototype.init=function(){var lineGroup=new Group/* default */.Z();var symbolDraw=new SymbolDraw/* default */.Z();this.group.add(symbolDraw.group);this._symbolDraw=symbolDraw;this._lineGroup=lineGroup;};LineView.prototype.render=function(seriesModel,ecModel,api){var _this=this;var coordSys=seriesModel.coordinateSystem;var group=this.group;var data=seriesModel.getData();var lineStyleModel=seriesModel.getModel('lineStyle');var areaStyleModel=seriesModel.getModel('areaStyle');var points=data.getLayout('points')||[];var isCoordSysPolar=coordSys.type==='polar';var prevCoordSys=this._coordSys;var symbolDraw=this._symbolDraw;var polyline=this._polyline;var polygon=this._polygon;var lineGroup=this._lineGroup;var hasAnimation=seriesModel.get('animation');var isAreaChart=!areaStyleModel.isEmpty();var valueOrigin=areaStyleModel.get('origin');var dataCoordInfo=prepareDataCoordInfo(coordSys,data,valueOrigin);var stackedOnPoints=isAreaChart&&getStackedOnPoints(coordSys,data,dataCoordInfo);var showSymbol=seriesModel.get('showSymbol');var connectNulls=seriesModel.get('connectNulls');var isIgnoreFunc=showSymbol&&!isCoordSysPolar&&getIsIgnoreFunc(seriesModel,data,coordSys);// Remove temporary symbols
var oldData=this._data;oldData&&oldData.eachItemGraphicEl(function(el,idx){if(el.__temp){group.remove(el);oldData.setItemGraphicEl(idx,null);}});// Remove previous created symbols if showSymbol changed to false
if(!showSymbol){symbolDraw.remove();}group.add(lineGroup);// FIXME step not support polar
var step=!isCoordSysPolar?seriesModel.get('step'):false;var clipShapeForSymbol;if(coordSys&&coordSys.getArea&&seriesModel.get('clip',true)){clipShapeForSymbol=coordSys.getArea();// Avoid float number rounding error for symbol on the edge of axis extent.
// See #7913 and `test/dataZoom-clip.html`.
if(clipShapeForSymbol.width!=null){clipShapeForSymbol.x-=0.1;clipShapeForSymbol.y-=0.1;clipShapeForSymbol.width+=0.2;clipShapeForSymbol.height+=0.2;}else if(clipShapeForSymbol.r0){clipShapeForSymbol.r0-=0.5;clipShapeForSymbol.r+=0.5;}}this._clipShapeForSymbol=clipShapeForSymbol;var visualColor=getVisualGradient(data,coordSys,api)||data.getVisual('style')[data.getVisual('drawType')];// Initialization animation or coordinate system changed
if(!(polyline&&prevCoordSys.type===coordSys.type&&step===this._step)){showSymbol&&symbolDraw.updateData(data,{isIgnore:isIgnoreFunc,clipShape:clipShapeForSymbol,disableAnimation:true,getSymbolPoint:function getSymbolPoint(idx){return[points[idx*2],points[idx*2+1]];}});hasAnimation&&this._initSymbolLabelAnimation(data,coordSys,clipShapeForSymbol);if(step){// TODO If stacked series is not step
points=turnPointsIntoStep(points,coordSys,step,connectNulls);if(stackedOnPoints){stackedOnPoints=turnPointsIntoStep(stackedOnPoints,coordSys,step,connectNulls);}}polyline=this._newPolyline(points);if(isAreaChart){polygon=this._newPolygon(points,stackedOnPoints);}// If areaStyle is removed
else if(polygon){lineGroup.remove(polygon);polygon=this._polygon=null;}// NOTE: Must update _endLabel before setClipPath.
if(!isCoordSysPolar){this._initOrUpdateEndLabel(seriesModel,coordSys,(0,format/* convertToColorString */.Lz)(visualColor));}lineGroup.setClipPath(createLineClipPath(this,coordSys,true,seriesModel));}else{if(isAreaChart&&!polygon){// If areaStyle is added
polygon=this._newPolygon(points,stackedOnPoints);}else if(polygon&&!isAreaChart){// If areaStyle is removed
lineGroup.remove(polygon);polygon=this._polygon=null;}// NOTE: Must update _endLabel before setClipPath.
if(!isCoordSysPolar){this._initOrUpdateEndLabel(seriesModel,coordSys,(0,format/* convertToColorString */.Lz)(visualColor));}// Update clipPath
var oldClipPath=lineGroup.getClipPath();if(oldClipPath){var newClipPath=createLineClipPath(this,coordSys,false,seriesModel);basicTrasition/* initProps */.KZ(oldClipPath,{shape:newClipPath.shape},seriesModel);}else{lineGroup.setClipPath(createLineClipPath(this,coordSys,true,seriesModel));}// Always update, or it is wrong in the case turning on legend
// because points are not changed
showSymbol&&symbolDraw.updateData(data,{isIgnore:isIgnoreFunc,clipShape:clipShapeForSymbol,disableAnimation:true,getSymbolPoint:function getSymbolPoint(idx){return[points[idx*2],points[idx*2+1]];}});// In the case data zoom triggerred refreshing frequently
// Data may not change if line has a category axis. So it should animate nothing
if(!isPointsSame(this._stackedOnPoints,stackedOnPoints)||!isPointsSame(this._points,points)){if(hasAnimation){this._doUpdateAnimation(data,stackedOnPoints,coordSys,api,step,valueOrigin,connectNulls);}else{// Not do it in update with animation
if(step){// TODO If stacked series is not step
points=turnPointsIntoStep(points,coordSys,step,connectNulls);if(stackedOnPoints){stackedOnPoints=turnPointsIntoStep(stackedOnPoints,coordSys,step,connectNulls);}}polyline.setShape({points:points});polygon&&polygon.setShape({points:points,stackedOnPoints:stackedOnPoints});}}}var emphasisModel=seriesModel.getModel('emphasis');var focus=emphasisModel.get('focus');var blurScope=emphasisModel.get('blurScope');var emphasisDisabled=emphasisModel.get('disabled');polyline.useStyle(util/* defaults */.ce(// Use color in lineStyle first
lineStyleModel.getLineStyle(),{fill:'none',stroke:visualColor,lineJoin:'bevel'}));(0,states/* setStatesStylesFromModel */.WO)(polyline,seriesModel,'lineStyle');if(polyline.style.lineWidth>0&&seriesModel.get(['emphasis','lineStyle','width'])==='bolder'){var emphasisLineStyle=polyline.getState('emphasis').style;emphasisLineStyle.lineWidth=+polyline.style.lineWidth+1;}// Needs seriesIndex for focus
(0,innerStore/* getECData */.A)(polyline).seriesIndex=seriesModel.seriesIndex;(0,states/* toggleHoverEmphasis */.k5)(polyline,focus,blurScope,emphasisDisabled);var smooth=getSmooth(seriesModel.get('smooth'));var smoothMonotone=seriesModel.get('smoothMonotone');polyline.setShape({smooth:smooth,smoothMonotone:smoothMonotone,connectNulls:connectNulls});if(polygon){var stackedOnSeries=data.getCalculationInfo('stackedOnSeries');var stackedOnSmooth=0;polygon.useStyle(util/* defaults */.ce(areaStyleModel.getAreaStyle(),{fill:visualColor,opacity:0.7,lineJoin:'bevel',decal:data.getVisual('style').decal}));if(stackedOnSeries){stackedOnSmooth=getSmooth(stackedOnSeries.get('smooth'));}polygon.setShape({smooth:smooth,stackedOnSmooth:stackedOnSmooth,smoothMonotone:smoothMonotone,connectNulls:connectNulls});(0,states/* setStatesStylesFromModel */.WO)(polygon,seriesModel,'areaStyle');// Needs seriesIndex for focus
(0,innerStore/* getECData */.A)(polygon).seriesIndex=seriesModel.seriesIndex;(0,states/* toggleHoverEmphasis */.k5)(polygon,focus,blurScope,emphasisDisabled);}var changePolyState=function changePolyState(toState){_this._changePolyState(toState);};data.eachItemGraphicEl(function(el){// Switch polyline / polygon state if element changed its state.
el&&(el.onHoverStateChange=changePolyState);});this._polyline.onHoverStateChange=changePolyState;this._data=data;// Save the coordinate system for transition animation when data changed
this._coordSys=coordSys;this._stackedOnPoints=stackedOnPoints;this._points=points;this._step=step;this._valueOrigin=valueOrigin;if(seriesModel.get('triggerLineEvent')){this.packEventData(seriesModel,polyline);polygon&&this.packEventData(seriesModel,polygon);}};LineView.prototype.packEventData=function(seriesModel,el){(0,innerStore/* getECData */.A)(el).eventData={componentType:'series',componentSubType:'line',componentIndex:seriesModel.componentIndex,seriesIndex:seriesModel.seriesIndex,seriesName:seriesModel.name,seriesType:'line'};};LineView.prototype.highlight=function(seriesModel,ecModel,api,payload){var data=seriesModel.getData();var dataIndex=model/* queryDataIndex */.gO(data,payload);this._changePolyState('emphasis');if(!(dataIndex instanceof Array)&&dataIndex!=null&&dataIndex>=0){var points=data.getLayout('points');var symbol=data.getItemGraphicEl(dataIndex);if(!symbol){// Create a temporary symbol if it is not exists
var x=points[dataIndex*2];var y=points[dataIndex*2+1];if(isNaN(x)||isNaN(y)){// Null data
return;}// fix #11360: should't draw symbol outside clipShapeForSymbol
if(this._clipShapeForSymbol&&!this._clipShapeForSymbol.contain(x,y)){return;}var zlevel=seriesModel.get('zlevel');var z=seriesModel.get('z');symbol=new Symbol/* default */.Z(data,dataIndex);symbol.x=x;symbol.y=y;symbol.setZ(zlevel,z);// ensure label text of the temporary symbol is in front of line and area polygon
var symbolLabel=symbol.getSymbolPath().getTextContent();if(symbolLabel){symbolLabel.zlevel=zlevel;symbolLabel.z=z;symbolLabel.z2=this._polyline.z2+1;}symbol.__temp=true;data.setItemGraphicEl(dataIndex,symbol);// Stop scale animation
symbol.stopSymbolAnimation(true);this.group.add(symbol);}symbol.highlight();}else{// Highlight whole series
Chart/* default.prototype.highlight.call */.Z.prototype.highlight.call(this,seriesModel,ecModel,api,payload);}};LineView.prototype.downplay=function(seriesModel,ecModel,api,payload){var data=seriesModel.getData();var dataIndex=model/* queryDataIndex */.gO(data,payload);this._changePolyState('normal');if(dataIndex!=null&&dataIndex>=0){var symbol=data.getItemGraphicEl(dataIndex);if(symbol){if(symbol.__temp){data.setItemGraphicEl(dataIndex,null);this.group.remove(symbol);}else{symbol.downplay();}}}else{// FIXME
// can not downplay completely.
// Downplay whole series
Chart/* default.prototype.downplay.call */.Z.prototype.downplay.call(this,seriesModel,ecModel,api,payload);}};LineView.prototype._changePolyState=function(toState){var polygon=this._polygon;(0,states/* setStatesFlag */.Gl)(this._polyline,toState);polygon&&(0,states/* setStatesFlag */.Gl)(polygon,toState);};LineView.prototype._newPolyline=function(points){var polyline=this._polyline;// Remove previous created polyline
if(polyline){this._lineGroup.remove(polyline);}polyline=new ECPolyline({shape:{points:points},segmentIgnoreThreshold:2,z2:10});this._lineGroup.add(polyline);this._polyline=polyline;return polyline;};LineView.prototype._newPolygon=function(points,stackedOnPoints){var polygon=this._polygon;// Remove previous created polygon
if(polygon){this._lineGroup.remove(polygon);}polygon=new ECPolygon({shape:{points:points,stackedOnPoints:stackedOnPoints},segmentIgnoreThreshold:2});this._lineGroup.add(polygon);this._polygon=polygon;return polygon;};LineView.prototype._initSymbolLabelAnimation=function(data,coordSys,clipShape){var isHorizontalOrRadial;var isCoordSysPolar;var baseAxis=coordSys.getBaseAxis();var isAxisInverse=baseAxis.inverse;if(coordSys.type==='cartesian2d'){isHorizontalOrRadial=baseAxis.isHorizontal();isCoordSysPolar=false;}else if(coordSys.type==='polar'){isHorizontalOrRadial=baseAxis.dim==='angle';isCoordSysPolar=true;}var seriesModel=data.hostModel;var seriesDuration=seriesModel.get('animationDuration');if(util/* isFunction */.mf(seriesDuration)){seriesDuration=seriesDuration(null);}var seriesDalay=seriesModel.get('animationDelay')||0;var seriesDalayValue=util/* isFunction */.mf(seriesDalay)?seriesDalay(null):seriesDalay;data.eachItemGraphicEl(function(symbol,idx){var el=symbol;if(el){var point=[symbol.x,symbol.y];var start=void 0;var end=void 0;var current=void 0;if(clipShape){if(isCoordSysPolar){var polarClip=clipShape;var coord=coordSys.pointToCoord(point);if(isHorizontalOrRadial){start=polarClip.startAngle;end=polarClip.endAngle;current=-coord[1]/180*Math.PI;}else{start=polarClip.r0;end=polarClip.r;current=coord[0];}}else{var gridClip=clipShape;if(isHorizontalOrRadial){start=gridClip.x;end=gridClip.x+gridClip.width;current=symbol.x;}else{start=gridClip.y+gridClip.height;end=gridClip.y;current=symbol.y;}}}var ratio=end===start?0:(current-start)/(end-start);if(isAxisInverse){ratio=1-ratio;}var delay=util/* isFunction */.mf(seriesDalay)?seriesDalay(idx):seriesDuration*ratio+seriesDalayValue;var symbolPath=el.getSymbolPath();var text=symbolPath.getTextContent();el.attr({scaleX:0,scaleY:0});el.animateTo({scaleX:1,scaleY:1},{duration:200,setToFinal:true,delay:delay});if(text){text.animateFrom({style:{opacity:0}},{duration:300,delay:delay});}symbolPath.disableLabelAnimation=true;}});};LineView.prototype._initOrUpdateEndLabel=function(seriesModel,coordSys,inheritColor){var endLabelModel=seriesModel.getModel('endLabel');if(anyStateShowEndLabel(seriesModel)){var data_2=seriesModel.getData();var polyline=this._polyline;// series may be filtered.
var points=data_2.getLayout('points');if(!points){polyline.removeTextContent();this._endLabel=null;return;}var endLabel=this._endLabel;if(!endLabel){endLabel=this._endLabel=new Text/* default */.ZP({z2:200// should be higher than item symbol
});endLabel.ignoreClip=true;polyline.setTextContent(this._endLabel);polyline.disableLabelAnimation=true;}// Find last non-NaN data to display data
var dataIndex=getLastIndexNotNull(points);if(dataIndex>=0){(0,labelStyle/* setLabelStyle */.ni)(polyline,(0,labelStyle/* getLabelStatesModels */.k3)(seriesModel,'endLabel'),{inheritColor:inheritColor,labelFetcher:seriesModel,labelDataIndex:dataIndex,defaultText:function defaultText(dataIndex,opt,interpolatedValue){return interpolatedValue!=null?(0,labelHelper/* getDefaultInterpolatedLabel */.O)(data_2,interpolatedValue):(0,labelHelper/* getDefaultLabel */.H)(data_2,dataIndex);},enableTextSetter:true},getEndLabelStateSpecified(endLabelModel,coordSys));polyline.textConfig.position=null;}}else if(this._endLabel){this._polyline.removeTextContent();this._endLabel=null;}};LineView.prototype._endLabelOnDuring=function(percent,clipRect,data,animationRecord,valueAnimation,endLabelModel,coordSys){var endLabel=this._endLabel;var polyline=this._polyline;if(endLabel){// NOTE: Don't remove percent < 1. percent === 1 means the first frame during render.
// The label is not prepared at this time.
if(percent<1&&animationRecord.originalX==null){animationRecord.originalX=endLabel.x;animationRecord.originalY=endLabel.y;}var points=data.getLayout('points');var seriesModel=data.hostModel;var connectNulls=seriesModel.get('connectNulls');var precision=endLabelModel.get('precision');var distance=endLabelModel.get('distance')||0;var baseAxis=coordSys.getBaseAxis();var isHorizontal=baseAxis.isHorizontal();var isBaseInversed=baseAxis.inverse;var clipShape=clipRect.shape;var xOrY=isBaseInversed?isHorizontal?clipShape.x:clipShape.y+clipShape.height:isHorizontal?clipShape.x+clipShape.width:clipShape.y;var distanceX=(isHorizontal?distance:0)*(isBaseInversed?-1:1);var distanceY=(isHorizontal?0:-distance)*(isBaseInversed?-1:1);var dim=isHorizontal?'x':'y';var dataIndexRange=getIndexRange(points,xOrY,dim);var indices=dataIndexRange.range;var diff=indices[1]-indices[0];var value=void 0;if(diff>=1){// diff > 1 && connectNulls, which is on the null data.
if(diff>1&&!connectNulls){var pt=getPointAtIndex(points,indices[0]);endLabel.attr({x:pt[0]+distanceX,y:pt[1]+distanceY});valueAnimation&&(value=seriesModel.getRawValue(indices[0]));}else{var pt=polyline.getPointOn(xOrY,dim);pt&&endLabel.attr({x:pt[0]+distanceX,y:pt[1]+distanceY});var startValue=seriesModel.getRawValue(indices[0]);var endValue=seriesModel.getRawValue(indices[1]);valueAnimation&&(value=model/* interpolateRawValues */.pk(data,precision,startValue,endValue,dataIndexRange.t));}animationRecord.lastFrameIndex=indices[0];}else{// If diff <= 0, which is the range is not found(Include NaN)
// Choose the first point or last point.
var idx=percent===1||animationRecord.lastFrameIndex>0?indices[0]:0;var pt=getPointAtIndex(points,idx);valueAnimation&&(value=seriesModel.getRawValue(idx));endLabel.attr({x:pt[0]+distanceX,y:pt[1]+distanceY});}if(valueAnimation){(0,labelStyle/* labelInner */.qA)(endLabel).setLabelText(value);}}};/**
   * @private
   */ // FIXME Two value axis
LineView.prototype._doUpdateAnimation=function(data,stackedOnPoints,coordSys,api,step,valueOrigin,connectNulls){var polyline=this._polyline;var polygon=this._polygon;var seriesModel=data.hostModel;var diff=lineAnimationDiff(this._data,data,this._stackedOnPoints,stackedOnPoints,this._coordSys,coordSys,this._valueOrigin,valueOrigin);var current=diff.current;var stackedOnCurrent=diff.stackedOnCurrent;var next=diff.next;var stackedOnNext=diff.stackedOnNext;if(step){// TODO If stacked series is not step
current=turnPointsIntoStep(diff.current,coordSys,step,connectNulls);stackedOnCurrent=turnPointsIntoStep(diff.stackedOnCurrent,coordSys,step,connectNulls);next=turnPointsIntoStep(diff.next,coordSys,step,connectNulls);stackedOnNext=turnPointsIntoStep(diff.stackedOnNext,coordSys,step,connectNulls);}// Don't apply animation if diff is large.
// For better result and avoid memory explosion problems like
// https://github.com/apache/incubator-echarts/issues/12229
if(getBoundingDiff(current,next)>3000||polygon&&getBoundingDiff(stackedOnCurrent,stackedOnNext)>3000){polyline.stopAnimation();polyline.setShape({points:next});if(polygon){polygon.stopAnimation();polygon.setShape({points:next,stackedOnPoints:stackedOnNext});}return;}polyline.shape.__points=diff.current;polyline.shape.points=current;var target={shape:{points:next}};// Also animate the original points.
// If points reference is changed when turning into step line.
if(diff.current!==current){target.shape.__points=diff.next;}// Stop previous animation.
polyline.stopAnimation();basicTrasition/* updateProps */.D(polyline,target,seriesModel);if(polygon){polygon.setShape({// Reuse the points with polyline.
points:current,stackedOnPoints:stackedOnCurrent});polygon.stopAnimation();basicTrasition/* updateProps */.D(polygon,{shape:{stackedOnPoints:stackedOnNext}},seriesModel);// If use attr directly in updateProps.
if(polyline.shape.points!==polygon.shape.points){polygon.shape.points=polyline.shape.points;}}var updatedDataInfo=[];var diffStatus=diff.status;for(var i=0;i<diffStatus.length;i++){var cmd=diffStatus[i].cmd;if(cmd==='='){var el=data.getItemGraphicEl(diffStatus[i].idx1);if(el){updatedDataInfo.push({el:el,ptIdx:i// Index of points
});}}}if(polyline.animators&&polyline.animators.length){polyline.animators[0].during(function(){polygon&&polygon.dirtyShape();var points=polyline.shape.__points;for(var i=0;i<updatedDataInfo.length;i++){var el=updatedDataInfo[i].el;var offset=updatedDataInfo[i].ptIdx*2;el.x=points[offset];el.y=points[offset+1];el.markRedraw();}});}};LineView.prototype.remove=function(ecModel){var group=this.group;var oldData=this._data;this._lineGroup.removeAll();this._symbolDraw.remove(true);// Remove temporary created elements when highlighting
oldData&&oldData.eachItemGraphicEl(function(el,idx){if(el.__temp){group.remove(el);oldData.setItemGraphicEl(idx,null);}});this._polyline=this._polygon=this._coordSys=this._points=this._stackedOnPoints=this._endLabel=this._data=null;};LineView.type='line';return LineView;}(Chart/* default */.Z);/* harmony default export */ const line_LineView = (LineView);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/layout/points.js
var points = __webpack_require__(13329);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/processor/dataSample.js
var dataSample = __webpack_require__(61203);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/line/install.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/// In case developer forget to include grid component
function install(registers){registers.registerChartView(line_LineView);registers.registerSeriesModel(LineSeries);registers.registerLayout((0,points/* default */.Z)('line',true));registers.registerVisual({seriesType:'line',reset:function reset(seriesModel){var data=seriesModel.getData();// Visual coding for legend
var lineStyle=seriesModel.getModel('lineStyle').getLineStyle();if(lineStyle&&!lineStyle.stroke){// Fill in visual should be palette color if
// has color callback
lineStyle.stroke=data.getVisual('style').fill;}data.setVisual('legendLineStyle',lineStyle);}});// Down sample after filter
registers.registerProcessor(registers.PRIORITY.PROCESSOR.STATISTIC,(0,dataSample/* default */.Z)('line'));}
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/line.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/(0,extension/* use */.D)(install);

/***/ }),

/***/ 93873:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/extension.js
var extension = __webpack_require__(37107);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(88161);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/chart/helper/LineDraw.js
var LineDraw = __webpack_require__(12301);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/Group.js
var Group = __webpack_require__(22060);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/chart/helper/Line.js + 1 modules
var Line = __webpack_require__(327);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(57697);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/symbol.js
var util_symbol = __webpack_require__(33518);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/vector.js
var vector = __webpack_require__(79070);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/curve.js
var curve = __webpack_require__(86250);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/helper/EffectLine.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*//**
 * Provide effect for line
 */var EffectLine=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(EffectLine,_super);function EffectLine(lineData,idx,seriesScope){var _this=_super.call(this)||this;_this.add(_this.createLine(lineData,idx,seriesScope));_this._updateEffectSymbol(lineData,idx);return _this;}EffectLine.prototype.createLine=function(lineData,idx,seriesScope){return new Line/* default */.Z(lineData,idx,seriesScope);};EffectLine.prototype._updateEffectSymbol=function(lineData,idx){var itemModel=lineData.getItemModel(idx);var effectModel=itemModel.getModel('effect');var size=effectModel.get('symbolSize');var symbolType=effectModel.get('symbol');if(!util/* isArray */.kJ(size)){size=[size,size];}var lineStyle=lineData.getItemVisual(idx,'style');var color=effectModel.get('color')||lineStyle&&lineStyle.stroke;var symbol=this.childAt(1);if(this._symbolType!==symbolType){// Remove previous
this.remove(symbol);symbol=(0,util_symbol/* createSymbol */.th)(symbolType,-0.5,-0.5,1,1,color);symbol.z2=100;symbol.culling=true;this.add(symbol);}// Symbol may be removed if loop is false
if(!symbol){return;}// Shadow color is same with color in default
symbol.setStyle('shadowColor',color);symbol.setStyle(effectModel.getItemStyle(['color']));symbol.scaleX=size[0];symbol.scaleY=size[1];symbol.setColor(color);this._symbolType=symbolType;this._symbolScale=size;this._updateEffectAnimation(lineData,effectModel,idx);};EffectLine.prototype._updateEffectAnimation=function(lineData,effectModel,idx){var symbol=this.childAt(1);if(!symbol){return;}var points=lineData.getItemLayout(idx);var period=effectModel.get('period')*1000;var loop=effectModel.get('loop');var constantSpeed=effectModel.get('constantSpeed');var delayExpr=util/* retrieve */.Jv(effectModel.get('delay'),function(idx){return idx/lineData.count()*period/3;});// Ignore when updating
symbol.ignore=true;this._updateAnimationPoints(symbol,points);if(constantSpeed>0){period=this._getLineLength(symbol)/constantSpeed*1000;}if(period!==this._period||loop!==this._loop){symbol.stopAnimation();var delayNum=void 0;if(util/* isFunction */.mf(delayExpr)){delayNum=delayExpr(idx);}else{delayNum=delayExpr;}if(symbol.__t>0){delayNum=-period*symbol.__t;}this._animateSymbol(symbol,period,delayNum,loop);}this._period=period;this._loop=loop;};EffectLine.prototype._animateSymbol=function(symbol,period,delayNum,loop){if(period>0){symbol.__t=0;var self_1=this;var animator=symbol.animate('',loop).when(period,{__t:1}).delay(delayNum).during(function(){self_1._updateSymbolPosition(symbol);});if(!loop){animator.done(function(){self_1.remove(symbol);});}animator.start();}};EffectLine.prototype._getLineLength=function(symbol){// Not so accurate
return vector/* dist */.TK(symbol.__p1,symbol.__cp1)+vector/* dist */.TK(symbol.__cp1,symbol.__p2);};EffectLine.prototype._updateAnimationPoints=function(symbol,points){symbol.__p1=points[0];symbol.__p2=points[1];symbol.__cp1=points[2]||[(points[0][0]+points[1][0])/2,(points[0][1]+points[1][1])/2];};EffectLine.prototype.updateData=function(lineData,idx,seriesScope){this.childAt(0).updateData(lineData,idx,seriesScope);this._updateEffectSymbol(lineData,idx);};EffectLine.prototype._updateSymbolPosition=function(symbol){var p1=symbol.__p1;var p2=symbol.__p2;var cp1=symbol.__cp1;var t=symbol.__t;var pos=[symbol.x,symbol.y];var lastPos=pos.slice();var quadraticAt=curve/* quadraticAt */.Zm;var quadraticDerivativeAt=curve/* quadraticDerivativeAt */.AZ;pos[0]=quadraticAt(p1[0],cp1[0],p2[0],t);pos[1]=quadraticAt(p1[1],cp1[1],p2[1],t);// Tangent
var tx=quadraticDerivativeAt(p1[0],cp1[0],p2[0],t);var ty=quadraticDerivativeAt(p1[1],cp1[1],p2[1],t);symbol.rotation=-Math.atan2(ty,tx)-Math.PI/2;// enable continuity trail for 'line', 'rect', 'roundRect' symbolType
if(this._symbolType==='line'||this._symbolType==='rect'||this._symbolType==='roundRect'){if(symbol.__lastT!==undefined&&symbol.__lastT<symbol.__t){symbol.scaleY=vector/* dist */.TK(lastPos,pos)*1.05;// make sure the last segment render within endPoint
if(t===1){pos[0]=lastPos[0]+(pos[0]-lastPos[0])/2;pos[1]=lastPos[1]+(pos[1]-lastPos[1])/2;}}else if(symbol.__lastT===1){// After first loop, symbol.__t does NOT start with 0, so connect p1 to pos directly.
symbol.scaleY=2*vector/* dist */.TK(p1,pos);}else{symbol.scaleY=this._symbolScale[1];}}symbol.__lastT=symbol.__t;symbol.ignore=false;symbol.x=pos[0];symbol.y=pos[1];};EffectLine.prototype.updateLayout=function(lineData,idx){this.childAt(0).updateLayout(lineData,idx);var effectModel=lineData.getItemModel(idx).getModel('effect');this._updateEffectAnimation(lineData,effectModel,idx);};return EffectLine;}(Group/* default */.Z);/* harmony default export */ const helper_EffectLine = (EffectLine);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/shape/Polyline.js
var shape_Polyline = __webpack_require__(72160);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/animation/basicTrasition.js
var basicTrasition = __webpack_require__(21438);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(36073);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/helper/Polyline.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/var Polyline=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(Polyline,_super);function Polyline(lineData,idx,seriesScope){var _this=_super.call(this)||this;_this._createPolyline(lineData,idx,seriesScope);return _this;}Polyline.prototype._createPolyline=function(lineData,idx,seriesScope){// let seriesModel = lineData.hostModel;
var points=lineData.getItemLayout(idx);var line=new shape_Polyline/* default */.Z({shape:{points:points}});this.add(line);this._updateCommonStl(lineData,idx,seriesScope);};;Polyline.prototype.updateData=function(lineData,idx,seriesScope){var seriesModel=lineData.hostModel;var line=this.childAt(0);var target={shape:{points:lineData.getItemLayout(idx)}};basicTrasition/* updateProps */.D(line,target,seriesModel,idx);this._updateCommonStl(lineData,idx,seriesScope);};;Polyline.prototype._updateCommonStl=function(lineData,idx,seriesScope){var line=this.childAt(0);var itemModel=lineData.getItemModel(idx);var emphasisLineStyle=seriesScope&&seriesScope.emphasisLineStyle;var focus=seriesScope&&seriesScope.focus;var blurScope=seriesScope&&seriesScope.blurScope;var emphasisDisabled=seriesScope&&seriesScope.emphasisDisabled;if(!seriesScope||lineData.hasItemOption){var emphasisModel=itemModel.getModel('emphasis');emphasisLineStyle=emphasisModel.getModel('lineStyle').getLineStyle();emphasisDisabled=emphasisModel.get('disabled');focus=emphasisModel.get('focus');blurScope=emphasisModel.get('blurScope');}line.useStyle(lineData.getItemVisual(idx,'style'));line.style.fill=null;line.style.strokeNoScale=true;var lineEmphasisState=line.ensureState('emphasis');lineEmphasisState.style=emphasisLineStyle;(0,states/* toggleHoverEmphasis */.k5)(this,focus,blurScope,emphasisDisabled);};;Polyline.prototype.updateLayout=function(lineData,idx){var polyline=this.childAt(0);polyline.setShape('points',lineData.getItemLayout(idx));};;return Polyline;}(Group/* default */.Z);/* harmony default export */ const helper_Polyline = (Polyline);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/helper/EffectPolyline.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/var EffectPolyline=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(EffectPolyline,_super);function EffectPolyline(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this._lastFrame=0;_this._lastFramePercent=0;return _this;}// Override
EffectPolyline.prototype.createLine=function(lineData,idx,seriesScope){return new helper_Polyline(lineData,idx,seriesScope);};;// Override
EffectPolyline.prototype._updateAnimationPoints=function(symbol,points){this._points=points;var accLenArr=[0];var len=0;for(var i=1;i<points.length;i++){var p1=points[i-1];var p2=points[i];len+=vector/* dist */.TK(p1,p2);accLenArr.push(len);}if(len===0){this._length=0;return;}for(var i=0;i<accLenArr.length;i++){accLenArr[i]/=len;}this._offsets=accLenArr;this._length=len;};;// Override
EffectPolyline.prototype._getLineLength=function(){return this._length;};;// Override
EffectPolyline.prototype._updateSymbolPosition=function(symbol){var t=symbol.__t;var points=this._points;var offsets=this._offsets;var len=points.length;if(!offsets){// Has length 0
return;}var lastFrame=this._lastFrame;var frame;if(t<this._lastFramePercent){// Start from the next frame
// PENDING start from lastFrame ?
var start=Math.min(lastFrame+1,len-1);for(frame=start;frame>=0;frame--){if(offsets[frame]<=t){break;}}// PENDING really need to do this ?
frame=Math.min(frame,len-2);}else{for(frame=lastFrame;frame<len;frame++){if(offsets[frame]>t){break;}}frame=Math.min(frame-1,len-2);}var p=(t-offsets[frame])/(offsets[frame+1]-offsets[frame]);var p0=points[frame];var p1=points[frame+1];symbol.x=p0[0]*(1-p)+p*p1[0];symbol.y=p0[1]*(1-p)+p*p1[1];var tx=p1[0]-p0[0];var ty=p1[1]-p0[1];symbol.rotation=-Math.atan2(ty,tx)-Math.PI/2;this._lastFrame=frame;this._lastFramePercent=t;symbol.ignore=false;};;return EffectPolyline;}(helper_EffectLine);/* harmony default export */ const helper_EffectPolyline = (EffectPolyline);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/BoundingRect.js
var BoundingRect = __webpack_require__(54865);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/Path.js + 3 modules
var Path = __webpack_require__(73727);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/contain/line.js
var line = __webpack_require__(96699);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/contain/quadratic.js
var quadratic = __webpack_require__(86502);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(5661);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/helper/LargeLineDraw.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/// TODO Batch by color
var LargeLinesPathShape=/** @class */function(){function LargeLinesPathShape(){this.polyline=false;this.curveness=0;this.segs=[];}return LargeLinesPathShape;}();var LargeLinesPath=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(LargeLinesPath,_super);function LargeLinesPath(opts){var _this=_super.call(this,opts)||this;_this._off=0;_this.hoverDataIdx=-1;return _this;}LargeLinesPath.prototype.reset=function(){this.notClear=false;this._off=0;};LargeLinesPath.prototype.getDefaultStyle=function(){return{stroke:'#000',fill:null};};LargeLinesPath.prototype.getDefaultShape=function(){return new LargeLinesPathShape();};LargeLinesPath.prototype.buildPath=function(ctx,shape){var segs=shape.segs;var curveness=shape.curveness;var i;if(shape.polyline){for(i=this._off;i<segs.length;){var count=segs[i++];if(count>0){ctx.moveTo(segs[i++],segs[i++]);for(var k=1;k<count;k++){ctx.lineTo(segs[i++],segs[i++]);}}}}else{for(i=this._off;i<segs.length;){var x0=segs[i++];var y0=segs[i++];var x1=segs[i++];var y1=segs[i++];ctx.moveTo(x0,y0);if(curveness>0){var x2=(x0+x1)/2-(y0-y1)*curveness;var y2=(y0+y1)/2-(x1-x0)*curveness;ctx.quadraticCurveTo(x2,y2,x1,y1);}else{ctx.lineTo(x1,y1);}}}if(this.incremental){this._off=i;this.notClear=true;}};LargeLinesPath.prototype.findDataIndex=function(x,y){var shape=this.shape;var segs=shape.segs;var curveness=shape.curveness;var lineWidth=this.style.lineWidth;if(shape.polyline){var dataIndex=0;for(var i=0;i<segs.length;){var count=segs[i++];if(count>0){var x0=segs[i++];var y0=segs[i++];for(var k=1;k<count;k++){var x1=segs[i++];var y1=segs[i++];if(line/* containStroke */.m(x0,y0,x1,y1,lineWidth,x,y)){return dataIndex;}}}dataIndex++;}}else{var dataIndex=0;for(var i=0;i<segs.length;){var x0=segs[i++];var y0=segs[i++];var x1=segs[i++];var y1=segs[i++];if(curveness>0){var x2=(x0+x1)/2-(y0-y1)*curveness;var y2=(y0+y1)/2-(x1-x0)*curveness;if(quadratic/* containStroke */.m(x0,y0,x2,y2,x1,y1,lineWidth,x,y)){return dataIndex;}}else{if(line/* containStroke */.m(x0,y0,x1,y1,lineWidth,x,y)){return dataIndex;}}dataIndex++;}}return-1;};LargeLinesPath.prototype.contain=function(x,y){var localPos=this.transformCoordToLocal(x,y);var rect=this.getBoundingRect();x=localPos[0];y=localPos[1];if(rect.contain(x,y)){// Cache found data index.
var dataIdx=this.hoverDataIdx=this.findDataIndex(x,y);return dataIdx>=0;}this.hoverDataIdx=-1;return false;};LargeLinesPath.prototype.getBoundingRect=function(){// Ignore stroke for large symbol draw.
var rect=this._rect;if(!rect){var shape=this.shape;var points=shape.segs;var minX=Infinity;var minY=Infinity;var maxX=-Infinity;var maxY=-Infinity;for(var i=0;i<points.length;){var x=points[i++];var y=points[i++];minX=Math.min(x,minX);maxX=Math.max(x,maxX);minY=Math.min(y,minY);maxY=Math.max(y,maxY);}rect=this._rect=new BoundingRect/* default */.Z(minX,minY,maxX,maxY);}return rect;};return LargeLinesPath;}(Path/* default */.ZP);var LargeLineDraw=/** @class */function(){function LargeLineDraw(){this.group=new Group/* default */.Z();}/**
   * Update symbols draw by new data
   */LargeLineDraw.prototype.updateData=function(data){this._clear();var lineEl=this._create();lineEl.setShape({segs:data.getLayout('linesPoints')});this._setCommon(lineEl,data);};;/**
   * @override
   */LargeLineDraw.prototype.incrementalPrepareUpdate=function(data){this.group.removeAll();this._clear();};;/**
   * @override
   */LargeLineDraw.prototype.incrementalUpdate=function(taskParams,data){var lastAdded=this._newAdded[0];var linePoints=data.getLayout('linesPoints');var oldSegs=lastAdded&&lastAdded.shape.segs;// Merging the exists. Each element has 1e4 points.
// Consider the performance balance between too much elements and too much points in one shape(may affect hover optimization)
if(oldSegs&&oldSegs.length<2e4){var oldLen=oldSegs.length;var newSegs=new Float32Array(oldLen+linePoints.length);// Concat two array
newSegs.set(oldSegs);newSegs.set(linePoints,oldLen);lastAdded.setShape({segs:newSegs});}else{// Clear
this._newAdded=[];var lineEl=this._create();lineEl.incremental=true;lineEl.setShape({segs:linePoints});this._setCommon(lineEl,data);lineEl.__startIndex=taskParams.start;}};/**
   * @override
   */LargeLineDraw.prototype.remove=function(){this._clear();};LargeLineDraw.prototype.eachRendered=function(cb){this._newAdded[0]&&cb(this._newAdded[0]);};LargeLineDraw.prototype._create=function(){var lineEl=new LargeLinesPath({cursor:'default'});this._newAdded.push(lineEl);this.group.add(lineEl);return lineEl;};LargeLineDraw.prototype._setCommon=function(lineEl,data,isIncremental){var hostModel=data.hostModel;lineEl.setShape({polyline:hostModel.get('polyline'),curveness:hostModel.get(['lineStyle','curveness'])});lineEl.useStyle(hostModel.getModel('lineStyle').getLineStyle());lineEl.style.strokeNoScale=true;var style=data.getVisual('style');if(style&&style.stroke){lineEl.setStyle('stroke',style.stroke);}lineEl.setStyle('fill',null);var ecData=(0,innerStore/* getECData */.A)(lineEl);// Enable tooltip
// PENDING May have performance issue when path is extremely large
ecData.seriesIndex=hostModel.seriesIndex;lineEl.on('mousemove',function(e){ecData.dataIndex=null;var dataIndex=lineEl.hoverDataIdx;if(dataIndex>0){// Provide dataIndex for tooltip
ecData.dataIndex=dataIndex+lineEl.__startIndex;}});};;LargeLineDraw.prototype._clear=function(){this._newAdded=[];this.group.removeAll();};;return LargeLineDraw;}();/* harmony default export */ const helper_LargeLineDraw = (LargeLineDraw);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/chart/helper/createRenderPlanner.js
var createRenderPlanner = __webpack_require__(75187);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/lines/linesLayout.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /* global Float32Array */var linesLayout={seriesType:'lines',plan:(0,createRenderPlanner/* default */.Z)(),reset:function reset(seriesModel){var coordSys=seriesModel.coordinateSystem;if(!coordSys){if(false){}return;}var isPolyline=seriesModel.get('polyline');var isLarge=seriesModel.pipelineContext.large;return{progress:function progress(params,lineData){var lineCoords=[];if(isLarge){var points=void 0;var segCount=params.end-params.start;if(isPolyline){var totalCoordsCount=0;for(var i=params.start;i<params.end;i++){totalCoordsCount+=seriesModel.getLineCoordsCount(i);}points=new Float32Array(segCount+totalCoordsCount*2);}else{points=new Float32Array(segCount*4);}var offset=0;var pt=[];for(var i=params.start;i<params.end;i++){var len=seriesModel.getLineCoords(i,lineCoords);if(isPolyline){points[offset++]=len;}for(var k=0;k<len;k++){pt=coordSys.dataToPoint(lineCoords[k],false,pt);points[offset++]=pt[0];points[offset++]=pt[1];}}lineData.setLayout('linesPoints',points);}else{for(var i=params.start;i<params.end;i++){var itemModel=lineData.getItemModel(i);var len=seriesModel.getLineCoords(i,lineCoords);var pts=[];if(isPolyline){for(var j=0;j<len;j++){pts.push(coordSys.dataToPoint(lineCoords[j]));}}else{pts[0]=coordSys.dataToPoint(lineCoords[0]);pts[1]=coordSys.dataToPoint(lineCoords[1]);var curveness=itemModel.get(['lineStyle','curveness']);if(+curveness){pts[2]=[(pts[0][0]+pts[1][0])/2-(pts[0][1]-pts[1][1])*curveness,(pts[0][1]+pts[1][1])/2-(pts[1][0]-pts[0][0])*curveness];}}lineData.setItemLayout(i,pts);}}}};}};/* harmony default export */ const lines_linesLayout = (linesLayout);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/chart/helper/createClipPathFromCoordSys.js
var createClipPathFromCoordSys = __webpack_require__(9949);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/view/Chart.js
var Chart = __webpack_require__(99949);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/lines/LinesView.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/var LinesView=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(LinesView,_super);function LinesView(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=LinesView.type;return _this;}LinesView.prototype.render=function(seriesModel,ecModel,api){var data=seriesModel.getData();var lineDraw=this._updateLineDraw(data,seriesModel);var zlevel=seriesModel.get('zlevel');var trailLength=seriesModel.get(['effect','trailLength']);var zr=api.getZr();// Avoid the drag cause ghost shadow
// FIXME Better way ?
// SVG doesn't support
var isSvg=zr.painter.getType()==='svg';if(!isSvg){zr.painter.getLayer(zlevel).clear(true);}// Config layer with motion blur
if(this._lastZlevel!=null&&!isSvg){zr.configLayer(this._lastZlevel,{motionBlur:false});}if(this._showEffect(seriesModel)&&trailLength>0){if(!isSvg){zr.configLayer(zlevel,{motionBlur:true,lastFrameAlpha:Math.max(Math.min(trailLength/10+0.9,1),0)});}else if(false){}}lineDraw.updateData(data);var clipPath=seriesModel.get('clip',true)&&(0,createClipPathFromCoordSys/* createClipPath */.lQ)(seriesModel.coordinateSystem,false,seriesModel);if(clipPath){this.group.setClipPath(clipPath);}else{this.group.removeClipPath();}this._lastZlevel=zlevel;this._finished=true;};LinesView.prototype.incrementalPrepareRender=function(seriesModel,ecModel,api){var data=seriesModel.getData();var lineDraw=this._updateLineDraw(data,seriesModel);lineDraw.incrementalPrepareUpdate(data);this._clearLayer(api);this._finished=false;};LinesView.prototype.incrementalRender=function(taskParams,seriesModel,ecModel){this._lineDraw.incrementalUpdate(taskParams,seriesModel.getData());this._finished=taskParams.end===seriesModel.getData().count();};LinesView.prototype.eachRendered=function(cb){this._lineDraw&&this._lineDraw.eachRendered(cb);};LinesView.prototype.updateTransform=function(seriesModel,ecModel,api){var data=seriesModel.getData();var pipelineContext=seriesModel.pipelineContext;if(!this._finished||pipelineContext.large||pipelineContext.progressiveRender){// TODO Don't have to do update in large mode. Only do it when there are millions of data.
return{update:true};}else{// TODO Use same logic with ScatterView.
// Manually update layout
var res=lines_linesLayout.reset(seriesModel,ecModel,api);if(res.progress){res.progress({start:0,end:data.count(),count:data.count()},data);}// Not in large mode
this._lineDraw.updateLayout();this._clearLayer(api);}};LinesView.prototype._updateLineDraw=function(data,seriesModel){var lineDraw=this._lineDraw;var hasEffect=this._showEffect(seriesModel);var isPolyline=!!seriesModel.get('polyline');var pipelineContext=seriesModel.pipelineContext;var isLargeDraw=pipelineContext.large;if(false){}if(!lineDraw||hasEffect!==this._hasEffet||isPolyline!==this._isPolyline||isLargeDraw!==this._isLargeDraw){if(lineDraw){lineDraw.remove();}lineDraw=this._lineDraw=isLargeDraw?new helper_LargeLineDraw():new LineDraw/* default */.Z(isPolyline?hasEffect?helper_EffectPolyline:helper_Polyline:hasEffect?helper_EffectLine:Line/* default */.Z);this._hasEffet=hasEffect;this._isPolyline=isPolyline;this._isLargeDraw=isLargeDraw;}this.group.add(lineDraw.group);return lineDraw;};LinesView.prototype._showEffect=function(seriesModel){return!!seriesModel.get(['effect','show']);};LinesView.prototype._clearLayer=function(api){// Not use motion when dragging or zooming
var zr=api.getZr();var isSvg=zr.painter.getType()==='svg';if(!isSvg&&this._lastZlevel!=null){zr.painter.getLayer(this._lastZlevel).clear(true);}};LinesView.prototype.remove=function(ecModel,api){this._lineDraw&&this._lineDraw.remove();this._lineDraw=null;// Clear motion when lineDraw is removed
this._clearLayer(api);};LinesView.prototype.dispose=function(ecModel,api){this.remove(ecModel,api);};LinesView.type='lines';return LinesView;}(Chart/* default */.Z);/* harmony default export */ const lines_LinesView = (LinesView);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/model/Series.js
var Series = __webpack_require__(49261);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/data/SeriesData.js + 1 modules
var SeriesData = __webpack_require__(66278);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/component/tooltip/tooltipMarkup.js
var tooltipMarkup = __webpack_require__(99547);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/lines/LinesSeries.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*//* global Uint32Array, Float64Array, Float32Array */var Uint32Arr=typeof Uint32Array==='undefined'?Array:Uint32Array;var Float64Arr=typeof Float64Array==='undefined'?Array:Float64Array;function compatEc2(seriesOpt){var data=seriesOpt.data;if(data&&data[0]&&data[0][0]&&data[0][0].coord){if(false){}seriesOpt.data=(0,util/* map */.UI)(data,function(itemOpt){var coords=[itemOpt[0].coord,itemOpt[1].coord];var target={coords:coords};if(itemOpt[0].name){target.fromName=itemOpt[0].name;}if(itemOpt[1].name){target.toName=itemOpt[1].name;}return (0,util/* mergeAll */.Jn)([target,itemOpt[0],itemOpt[1]]);});}}var LinesSeriesModel=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(LinesSeriesModel,_super);function LinesSeriesModel(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=LinesSeriesModel.type;_this.visualStyleAccessPath='lineStyle';_this.visualDrawType='stroke';return _this;}LinesSeriesModel.prototype.init=function(option){// The input data may be null/undefined.
option.data=option.data||[];// Not using preprocessor because mergeOption may not have series.type
compatEc2(option);var result=this._processFlatCoordsArray(option.data);this._flatCoords=result.flatCoords;this._flatCoordsOffset=result.flatCoordsOffset;if(result.flatCoords){option.data=new Float32Array(result.count);}_super.prototype.init.apply(this,arguments);};LinesSeriesModel.prototype.mergeOption=function(option){compatEc2(option);if(option.data){// Only update when have option data to merge.
var result=this._processFlatCoordsArray(option.data);this._flatCoords=result.flatCoords;this._flatCoordsOffset=result.flatCoordsOffset;if(result.flatCoords){option.data=new Float32Array(result.count);}}_super.prototype.mergeOption.apply(this,arguments);};LinesSeriesModel.prototype.appendData=function(params){var result=this._processFlatCoordsArray(params.data);if(result.flatCoords){if(!this._flatCoords){this._flatCoords=result.flatCoords;this._flatCoordsOffset=result.flatCoordsOffset;}else{this._flatCoords=(0,util/* concatArray */.WW)(this._flatCoords,result.flatCoords);this._flatCoordsOffset=(0,util/* concatArray */.WW)(this._flatCoordsOffset,result.flatCoordsOffset);}params.data=new Float32Array(result.count);}this.getRawData().appendData(params.data);};LinesSeriesModel.prototype._getCoordsFromItemModel=function(idx){var itemModel=this.getData().getItemModel(idx);var coords=itemModel.option instanceof Array?itemModel.option:itemModel.getShallow('coords');if(false){}return coords;};LinesSeriesModel.prototype.getLineCoordsCount=function(idx){if(this._flatCoordsOffset){return this._flatCoordsOffset[idx*2+1];}else{return this._getCoordsFromItemModel(idx).length;}};LinesSeriesModel.prototype.getLineCoords=function(idx,out){if(this._flatCoordsOffset){var offset=this._flatCoordsOffset[idx*2];var len=this._flatCoordsOffset[idx*2+1];for(var i=0;i<len;i++){out[i]=out[i]||[];out[i][0]=this._flatCoords[offset+i*2];out[i][1]=this._flatCoords[offset+i*2+1];}return len;}else{var coords=this._getCoordsFromItemModel(idx);for(var i=0;i<coords.length;i++){out[i]=out[i]||[];out[i][0]=coords[i][0];out[i][1]=coords[i][1];}return coords.length;}};LinesSeriesModel.prototype._processFlatCoordsArray=function(data){var startOffset=0;if(this._flatCoords){startOffset=this._flatCoords.length;}// Stored as a typed array. In format
// Points Count(2) | x | y | x | y | Points Count(3) | x |  y | x | y | x | y |
if((0,util/* isNumber */.hj)(data[0])){var len=data.length;// Store offset and len of each segment
var coordsOffsetAndLenStorage=new Uint32Arr(len);var coordsStorage=new Float64Arr(len);var coordsCursor=0;var offsetCursor=0;var dataCount=0;for(var i=0;i<len;){dataCount++;var count=data[i++];// Offset
coordsOffsetAndLenStorage[offsetCursor++]=coordsCursor+startOffset;// Len
coordsOffsetAndLenStorage[offsetCursor++]=count;for(var k=0;k<count;k++){var x=data[i++];var y=data[i++];coordsStorage[coordsCursor++]=x;coordsStorage[coordsCursor++]=y;if(i>len){if(false){}}}}return{flatCoordsOffset:new Uint32Array(coordsOffsetAndLenStorage.buffer,0,offsetCursor),flatCoords:coordsStorage,count:dataCount};}return{flatCoordsOffset:null,flatCoords:null,count:data.length};};LinesSeriesModel.prototype.getInitialData=function(option,ecModel){if(false){ var CoordSys; }var lineData=new SeriesData/* default */.Z(['value'],this);lineData.hasItemOption=false;lineData.initData(option.data,[],function(dataItem,dimName,dataIndex,dimIndex){// dataItem is simply coords
if(dataItem instanceof Array){return NaN;}else{lineData.hasItemOption=true;var value=dataItem.value;if(value!=null){return value instanceof Array?value[dimIndex]:value;}}});return lineData;};LinesSeriesModel.prototype.formatTooltip=function(dataIndex,multipleSeries,dataType){var data=this.getData();var itemModel=data.getItemModel(dataIndex);var name=itemModel.get('name');if(name){return name;}var fromName=itemModel.get('fromName');var toName=itemModel.get('toName');var nameArr=[];fromName!=null&&nameArr.push(fromName);toName!=null&&nameArr.push(toName);return (0,tooltipMarkup/* createTooltipMarkup */.TX)('nameValue',{name:nameArr.join(' > ')});};LinesSeriesModel.prototype.preventIncremental=function(){return!!this.get(['effect','show']);};LinesSeriesModel.prototype.getProgressive=function(){var progressive=this.option.progressive;if(progressive==null){return this.option.large?1e4:this.get('progressive');}return progressive;};LinesSeriesModel.prototype.getProgressiveThreshold=function(){var progressiveThreshold=this.option.progressiveThreshold;if(progressiveThreshold==null){return this.option.large?2e4:this.get('progressiveThreshold');}return progressiveThreshold;};LinesSeriesModel.prototype.getZLevelKey=function(){var effectModel=this.getModel('effect');var trailLength=effectModel.get('trailLength');return this.getData().count()>this.getProgressiveThreshold()// Each progressive series has individual key.
?this.id:effectModel.get('show')&&trailLength>0?trailLength+'':'';};LinesSeriesModel.type='series.lines';LinesSeriesModel.dependencies=['grid','polar','geo','calendar'];LinesSeriesModel.defaultOption={coordinateSystem:'geo',// zlevel: 0,
z:2,legendHoverLink:true,// Cartesian coordinate system
xAxisIndex:0,yAxisIndex:0,symbol:['none','none'],symbolSize:[10,10],// Geo coordinate system
geoIndex:0,effect:{show:false,period:4,constantSpeed:0,symbol:'circle',symbolSize:3,loop:true,trailLength:0.2},large:false,// Available when large is true
largeThreshold:2000,polyline:false,clip:true,label:{show:false,position:'end'// distance: 5,
// formatter: 标签文本格式器，同Tooltip.formatter，不支持异步回调
},lineStyle:{opacity:0.5}};return LinesSeriesModel;}(Series/* default */.Z);/* harmony default export */ const LinesSeries = (LinesSeriesModel);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/lines/linesVisual.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/function normalize(a){if(!(a instanceof Array)){a=[a,a];}return a;}var linesVisual={seriesType:'lines',reset:function reset(seriesModel){var symbolType=normalize(seriesModel.get('symbol'));var symbolSize=normalize(seriesModel.get('symbolSize'));var data=seriesModel.getData();data.setVisual('fromSymbol',symbolType&&symbolType[0]);data.setVisual('toSymbol',symbolType&&symbolType[1]);data.setVisual('fromSymbolSize',symbolSize&&symbolSize[0]);data.setVisual('toSymbolSize',symbolSize&&symbolSize[1]);function dataEach(data,idx){var itemModel=data.getItemModel(idx);var symbolType=normalize(itemModel.getShallow('symbol',true));var symbolSize=normalize(itemModel.getShallow('symbolSize',true));symbolType[0]&&data.setItemVisual(idx,'fromSymbol',symbolType[0]);symbolType[1]&&data.setItemVisual(idx,'toSymbol',symbolType[1]);symbolSize[0]&&data.setItemVisual(idx,'fromSymbolSize',symbolSize[0]);symbolSize[1]&&data.setItemVisual(idx,'toSymbolSize',symbolSize[1]);}return{dataEach:data.hasItemOption?dataEach:null};}};/* harmony default export */ const lines_linesVisual = (linesVisual);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/lines/install.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/function install(registers){registers.registerChartView(lines_LinesView);registers.registerSeriesModel(LinesSeries);registers.registerLayout(lines_linesLayout);registers.registerVisual(lines_linesVisual);}
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/lines.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/(0,extension/* use */.D)(install);

/***/ }),

/***/ 31316:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/extension.js
var extension = __webpack_require__(37107);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(88161);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/shape/Circle.js
var Circle = __webpack_require__(35739);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/component/helper/MapDraw.js + 4 modules
var MapDraw = __webpack_require__(15707);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/view/Chart.js
var Chart = __webpack_require__(99949);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/label/labelStyle.js
var labelStyle = __webpack_require__(9610);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(36073);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/map/MapView.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/var MapView=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(MapView,_super);function MapView(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=MapView.type;return _this;}MapView.prototype.render=function(mapModel,ecModel,api,payload){// Not render if it is an toggleSelect action from self
if(payload&&payload.type==='mapToggleSelect'&&payload.from===this.uid){return;}var group=this.group;group.removeAll();if(mapModel.getHostGeoModel()){return;}if(this._mapDraw&&payload&&payload.type==='geoRoam'){this._mapDraw.resetForLabelLayout();}// Not update map if it is an roam action from self
if(!(payload&&payload.type==='geoRoam'&&payload.componentType==='series'&&payload.seriesId===mapModel.id)){if(mapModel.needsDrawMap){var mapDraw=this._mapDraw||new MapDraw/* default */.Z(api);group.add(mapDraw.group);mapDraw.draw(mapModel,ecModel,api,this,payload);this._mapDraw=mapDraw;}else{// Remove drawed map
this._mapDraw&&this._mapDraw.remove();this._mapDraw=null;}}else{var mapDraw=this._mapDraw;mapDraw&&group.add(mapDraw.group);}mapModel.get('showLegendSymbol')&&ecModel.getComponent('legend')&&this._renderSymbols(mapModel,ecModel,api);};MapView.prototype.remove=function(){this._mapDraw&&this._mapDraw.remove();this._mapDraw=null;this.group.removeAll();};MapView.prototype.dispose=function(){this._mapDraw&&this._mapDraw.remove();this._mapDraw=null;};MapView.prototype._renderSymbols=function(mapModel,ecModel,api){var originalData=mapModel.originalData;var group=this.group;originalData.each(originalData.mapDimension('value'),function(value,originalDataIndex){if(isNaN(value)){return;}var layout=originalData.getItemLayout(originalDataIndex);if(!layout||!layout.point){// Not exists in map
return;}var point=layout.point;var offset=layout.offset;var circle=new Circle/* default */.Z({style:{// Because the special of map draw.
// Which needs statistic of multiple series and draw on one map.
// And each series also need a symbol with legend color
//
// Layout and visual are put one the different data
// TODO
fill:mapModel.getData().getVisual('style').fill},shape:{cx:point[0]+offset*9,cy:point[1],r:3},silent:true,// Do not overlap the first series, on which labels are displayed.
z2:8+(!offset?states/* Z2_EMPHASIS_LIFT */.zr+1:0)});// Only the series that has the first value on the same region is in charge of rendering the label.
// But consider the case:
// series: [
//     {id: 'X', type: 'map', map: 'm', {data: [{name: 'A', value: 11}, {name: 'B', {value: 22}]},
//     {id: 'Y', type: 'map', map: 'm', {data: [{name: 'A', value: 21}, {name: 'C', {value: 33}]}
// ]
// The offset `0` of item `A` is at series `X`, but of item `C` is at series `Y`.
// For backward compatibility, we follow the rule that render label `A` by the
// settings on series `X` but render label `C` by the settings on series `Y`.
if(!offset){var fullData=mapModel.mainSeries.getData();var name_1=originalData.getName(originalDataIndex);var fullIndex_1=fullData.indexOfName(name_1);var itemModel=originalData.getItemModel(originalDataIndex);var labelModel=itemModel.getModel('label');var regionGroup=fullData.getItemGraphicEl(fullIndex_1);// `getFormattedLabel` needs to use `getData` inside. Here
// `mapModel.getData()` is shallow cloned from `mainSeries.getData()`.
// FIXME
// If this is not the `mainSeries`, the item model (like label formatter)
// set on original data item will never get. But it has been working
// like that from the begining, and this scenario is rarely encountered.
// So it won't be fixed until have to.
(0,labelStyle/* setLabelStyle */.ni)(circle,(0,labelStyle/* getLabelStatesModels */.k3)(itemModel),{labelFetcher:{getFormattedLabel:function getFormattedLabel(idx,state){return mapModel.getFormattedLabel(fullIndex_1,state);}},defaultText:name_1});circle.disableLabelAnimation=true;if(!labelModel.get('position')){circle.setTextConfig({position:'bottom'});}regionGroup.onHoverStateChange=function(toState){(0,states/* setStatesFlag */.Gl)(circle,toState);};}group.add(circle);});};MapView.type='map';return MapView;}(Chart/* default */.Z);/* harmony default export */ const map_MapView = (MapView);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(57697);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/chart/helper/createSeriesDataSimply.js
var createSeriesDataSimply = __webpack_require__(97451);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/model/Series.js
var Series = __webpack_require__(49261);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/coord/geo/geoSourceManager.js + 7 modules
var geoSourceManager = __webpack_require__(43564);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/data/helper/sourceHelper.js
var sourceHelper = __webpack_require__(47386);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/component/tooltip/tooltipMarkup.js
var tooltipMarkup = __webpack_require__(99547);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/symbol.js
var symbol = __webpack_require__(33518);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/map/MapSeries.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/var MapSeries=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(MapSeries,_super);function MapSeries(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=MapSeries.type;// Only first map series of same mapType will drawMap.
_this.needsDrawMap=false;// Group of all map series with same mapType
_this.seriesGroup=[];_this.getTooltipPosition=function(dataIndex){if(dataIndex!=null){var name_1=this.getData().getName(dataIndex);var geo=this.coordinateSystem;var region=geo.getRegion(name_1);return region&&geo.dataToPoint(region.getCenter());}};return _this;}MapSeries.prototype.getInitialData=function(option){var data=(0,createSeriesDataSimply/* default */.Z)(this,{coordDimensions:['value'],encodeDefaulter:util/* curry */.WA(sourceHelper/* makeSeriesEncodeForNameBased */.Ss,this)});var dataNameMap=util/* createHashMap */.kW();var toAppendNames=[];for(var i=0,len=data.count();i<len;i++){var name_2=data.getName(i);dataNameMap.set(name_2,true);}var geoSource=geoSourceManager/* default.load */.Z.load(this.getMapType(),this.option.nameMap,this.option.nameProperty);util/* each */.S6(geoSource.regions,function(region){var name=region.name;if(!dataNameMap.get(name)){toAppendNames.push(name);}});// Complete data with missing regions. The consequent processes (like visual
// map and render) can not be performed without a "full data". For example,
// find `dataIndex` by name.
data.appendValues([],toAppendNames);return data;};/**
   * If no host geo model, return null, which means using a
   * inner exclusive geo model.
   */MapSeries.prototype.getHostGeoModel=function(){var geoIndex=this.option.geoIndex;return geoIndex!=null?this.ecModel.getComponent('geo',geoIndex):null;};MapSeries.prototype.getMapType=function(){return(this.getHostGeoModel()||this).option.map;};// _fillOption(option, mapName) {
// Shallow clone
// option = zrUtil.extend({}, option);
// option.data = geoCreator.getFilledRegions(option.data, mapName, option.nameMap);
// return option;
// }
MapSeries.prototype.getRawValue=function(dataIndex){// Use value stored in data instead because it is calculated from multiple series
// FIXME Provide all value of multiple series ?
var data=this.getData();return data.get(data.mapDimension('value'),dataIndex);};/**
   * Get model of region
   */MapSeries.prototype.getRegionModel=function(regionName){var data=this.getData();return data.getItemModel(data.indexOfName(regionName));};/**
   * Map tooltip formatter
   */MapSeries.prototype.formatTooltip=function(dataIndex,multipleSeries,dataType){// FIXME orignalData and data is a bit confusing
var data=this.getData();var value=this.getRawValue(dataIndex);var name=data.getName(dataIndex);var seriesGroup=this.seriesGroup;var seriesNames=[];for(var i=0;i<seriesGroup.length;i++){var otherIndex=seriesGroup[i].originalData.indexOfName(name);var valueDim=data.mapDimension('value');if(!isNaN(seriesGroup[i].originalData.get(valueDim,otherIndex))){seriesNames.push(seriesGroup[i].name);}}return (0,tooltipMarkup/* createTooltipMarkup */.TX)('section',{header:seriesNames.join(', '),noHeader:!seriesNames.length,blocks:[(0,tooltipMarkup/* createTooltipMarkup */.TX)('nameValue',{name:name,value:value})]});};MapSeries.prototype.setZoom=function(zoom){this.option.zoom=zoom;};MapSeries.prototype.setCenter=function(center){this.option.center=center;};MapSeries.prototype.getLegendIcon=function(opt){var iconType=opt.icon||'roundRect';var icon=(0,symbol/* createSymbol */.th)(iconType,0,0,opt.itemWidth,opt.itemHeight,opt.itemStyle.fill);icon.setStyle(opt.itemStyle);// Map do not use itemStyle.borderWidth as border width
icon.style.stroke='none';// No rotation because no series visual symbol for map
if(iconType.indexOf('empty')>-1){icon.style.stroke=icon.style.fill;icon.style.fill='#fff';icon.style.lineWidth=2;}return icon;};MapSeries.type='series.map';MapSeries.dependencies=['geo'];MapSeries.layoutMode='box';MapSeries.defaultOption={// 一级层叠
// zlevel: 0,
// 二级层叠
z:2,coordinateSystem:'geo',// map should be explicitly specified since ec3.
map:'',// If `geoIndex` is not specified, a exclusive geo will be
// created. Otherwise use the specified geo component, and
// `map` and `mapType` are ignored.
// geoIndex: 0,
// 'center' | 'left' | 'right' | 'x%' | {number}
left:'center',// 'center' | 'top' | 'bottom' | 'x%' | {number}
top:'center',// right
// bottom
// width:
// height
// Aspect is width / height. Inited to be geoJson bbox aspect
// This parameter is used for scale this aspect
// Default value:
// for geoSVG source: 1,
// for geoJSON source: 0.75.
aspectScale:null,///// Layout with center and size
// If you wan't to put map in a fixed size box with right aspect ratio
// This two properties may more conveninet
// layoutCenter: [50%, 50%]
// layoutSize: 100
showLegendSymbol:true,// Define left-top, right-bottom coords to control view
// For example, [ [180, 90], [-180, -90] ],
// higher priority than center and zoom
boundingCoords:null,// Default on center of map
center:null,zoom:1,scaleLimit:null,selectedMode:true,label:{show:false,color:'#000'},// scaleLimit: null,
itemStyle:{borderWidth:0.5,borderColor:'#444',areaColor:'#eee'},emphasis:{label:{show:true,color:'rgb(100,0,0)'},itemStyle:{areaColor:'rgba(255,215,0,0.8)'}},select:{label:{show:true,color:'rgb(100,0,0)'},itemStyle:{color:'rgba(255,215,0,0.8)'}},nameProperty:'name'};return MapSeries;}(Series/* default */.Z);/* harmony default export */ const map_MapSeries = (MapSeries);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/map/mapDataStatistic.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/// FIXME 公用？
function dataStatistics(datas,statisticType){var dataNameMap={};util/* each */.S6(datas,function(data){data.each(data.mapDimension('value'),function(value,idx){// Add prefix to avoid conflict with Object.prototype.
var mapKey='ec-'+data.getName(idx);dataNameMap[mapKey]=dataNameMap[mapKey]||[];if(!isNaN(value)){dataNameMap[mapKey].push(value);}});});return datas[0].map(datas[0].mapDimension('value'),function(value,idx){var mapKey='ec-'+datas[0].getName(idx);var sum=0;var min=Infinity;var max=-Infinity;var len=dataNameMap[mapKey].length;for(var i=0;i<len;i++){min=Math.min(min,dataNameMap[mapKey][i]);max=Math.max(max,dataNameMap[mapKey][i]);sum+=dataNameMap[mapKey][i];}var result;if(statisticType==='min'){result=min;}else if(statisticType==='max'){result=max;}else if(statisticType==='average'){result=sum/len;}else{result=sum;}return len===0?NaN:result;});}function mapDataStatistic(ecModel){var seriesGroups={};ecModel.eachSeriesByType('map',function(seriesModel){var hostGeoModel=seriesModel.getHostGeoModel();var key=hostGeoModel?'o'+hostGeoModel.id:'i'+seriesModel.getMapType();(seriesGroups[key]=seriesGroups[key]||[]).push(seriesModel);});util/* each */.S6(seriesGroups,function(seriesList,key){var data=dataStatistics(util/* map */.UI(seriesList,function(seriesModel){return seriesModel.getData();}),seriesList[0].get('mapValueCalculation'));for(var i=0;i<seriesList.length;i++){seriesList[i].originalData=seriesList[i].getData();}// FIXME Put where?
for(var i=0;i<seriesList.length;i++){seriesList[i].seriesGroup=seriesList;seriesList[i].needsDrawMap=i===0&&!seriesList[i].getHostGeoModel();seriesList[i].setData(data.cloneShallow());seriesList[i].mainSeries=seriesList[0];}});}
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/map/mapSymbolLayout.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/function mapSymbolLayout(ecModel){var processedMapType={};ecModel.eachSeriesByType('map',function(mapSeries){var mapType=mapSeries.getMapType();if(mapSeries.getHostGeoModel()||processedMapType[mapType]){return;}var mapSymbolOffsets={};util/* each */.S6(mapSeries.seriesGroup,function(subMapSeries){var geo=subMapSeries.coordinateSystem;var data=subMapSeries.originalData;if(subMapSeries.get('showLegendSymbol')&&ecModel.getComponent('legend')){data.each(data.mapDimension('value'),function(value,idx){var name=data.getName(idx);var region=geo.getRegion(name);// If input series.data is [11, 22, '-'/null/undefined, 44],
// it will be filled with NaN: [11, 22, NaN, 44] and NaN will
// not be drawn. So here must validate if value is NaN.
if(!region||isNaN(value)){return;}var offset=mapSymbolOffsets[name]||0;var point=geo.dataToPoint(region.getCenter());mapSymbolOffsets[name]=offset+1;data.setItemLayout(idx,{point:point,offset:offset});});}});// Show label of those region not has legendIcon (which is offset 0)
var data=mapSeries.getData();data.each(function(idx){var name=data.getName(idx);var layout=data.getItemLayout(idx)||{};layout.showLabel=!mapSymbolOffsets[name];data.setItemLayout(idx,layout);});processedMapType[mapType]=true;});}
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/legacy/dataSelectAction.js
var dataSelectAction = __webpack_require__(20021);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/component/geo/install.js + 5 modules
var install = __webpack_require__(82404);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/map/install.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/function install_install(registers){(0,extension/* use */.D)(install/* install */.N);registers.registerChartView(map_MapView);registers.registerSeriesModel(map_MapSeries);registers.registerLayout(mapSymbolLayout);registers.registerProcessor(registers.PRIORITY.PROCESSOR.STATISTIC,mapDataStatistic);(0,dataSelectAction/* createLegacyDataSelectAction */.y)('map',registers.registerAction);}
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/map.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/(0,extension/* use */.D)(install_install);

/***/ }),

/***/ 25733:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/extension.js
var extension = __webpack_require__(37107);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/legacy/dataSelectAction.js
var dataSelectAction = __webpack_require__(20021);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(84646);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/layout.js
var layout = __webpack_require__(8636);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(57697);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/pie/pieLayout.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/var PI2=Math.PI*2;var RADIAN=Math.PI/180;function getViewRect(seriesModel,api){return layout/* getLayoutRect */.ME(seriesModel.getBoxLayoutParams(),{width:api.getWidth(),height:api.getHeight()});}function getBasicPieLayout(seriesModel,api){var viewRect=getViewRect(seriesModel,api);var center=seriesModel.get('center');var radius=seriesModel.get('radius');if(!util/* isArray */.kJ(radius)){radius=[0,radius];}if(!util/* isArray */.kJ(center)){center=[center,center];}var width=(0,number/* parsePercent */.GM)(viewRect.width,api.getWidth());var height=(0,number/* parsePercent */.GM)(viewRect.height,api.getHeight());var size=Math.min(width,height);var cx=(0,number/* parsePercent */.GM)(center[0],width)+viewRect.x;var cy=(0,number/* parsePercent */.GM)(center[1],height)+viewRect.y;var r0=(0,number/* parsePercent */.GM)(radius[0],size/2);var r=(0,number/* parsePercent */.GM)(radius[1],size/2);return{cx:cx,cy:cy,r0:r0,r:r};}function pieLayout(seriesType,ecModel,api){ecModel.eachSeriesByType(seriesType,function(seriesModel){var data=seriesModel.getData();var valueDim=data.mapDimension('value');var viewRect=getViewRect(seriesModel,api);var _a=getBasicPieLayout(seriesModel,api),cx=_a.cx,cy=_a.cy,r=_a.r,r0=_a.r0;var startAngle=-seriesModel.get('startAngle')*RADIAN;var minAngle=seriesModel.get('minAngle')*RADIAN;var validDataCount=0;data.each(valueDim,function(value){!isNaN(value)&&validDataCount++;});var sum=data.getSum(valueDim);// Sum may be 0
var unitRadian=Math.PI/(sum||validDataCount)*2;var clockwise=seriesModel.get('clockwise');var roseType=seriesModel.get('roseType');var stillShowZeroSum=seriesModel.get('stillShowZeroSum');// [0...max]
var extent=data.getDataExtent(valueDim);extent[0]=0;// In the case some sector angle is smaller than minAngle
var restAngle=PI2;var valueSumLargerThanMinAngle=0;var currentAngle=startAngle;var dir=clockwise?1:-1;data.setLayout({viewRect:viewRect,r:r});data.each(valueDim,function(value,idx){var angle;if(isNaN(value)){data.setItemLayout(idx,{angle:NaN,startAngle:NaN,endAngle:NaN,clockwise:clockwise,cx:cx,cy:cy,r0:r0,r:roseType?NaN:r});return;}// FIXME 兼容 2.0 但是 roseType 是 area 的时候才是这样？
if(roseType!=='area'){angle=sum===0&&stillShowZeroSum?unitRadian:value*unitRadian;}else{angle=PI2/validDataCount;}if(angle<minAngle){angle=minAngle;restAngle-=minAngle;}else{valueSumLargerThanMinAngle+=value;}var endAngle=currentAngle+dir*angle;data.setItemLayout(idx,{angle:angle,startAngle:currentAngle,endAngle:endAngle,clockwise:clockwise,cx:cx,cy:cy,r0:r0,r:roseType?(0,number/* linearMap */.NU)(value,extent,[r0,r]):r});currentAngle=endAngle;});// Some sector is constrained by minAngle
// Rest sectors needs recalculate angle
if(restAngle<PI2&&validDataCount){// Average the angle if rest angle is not enough after all angles is
// Constrained by minAngle
if(restAngle<=1e-3){var angle_1=PI2/validDataCount;data.each(valueDim,function(value,idx){if(!isNaN(value)){var layout_1=data.getItemLayout(idx);layout_1.angle=angle_1;layout_1.startAngle=startAngle+dir*idx*angle_1;layout_1.endAngle=startAngle+dir*(idx+1)*angle_1;}});}else{unitRadian=restAngle/valueSumLargerThanMinAngle;currentAngle=startAngle;data.each(valueDim,function(value,idx){if(!isNaN(value)){var layout_2=data.getItemLayout(idx);var angle=layout_2.angle===minAngle?minAngle:value*unitRadian;layout_2.startAngle=currentAngle;layout_2.endAngle=currentAngle+dir*angle;currentAngle+=dir*angle;}});}}});}
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/processor/dataFilter.js
var dataFilter = __webpack_require__(10565);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(88161);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/Text.js + 1 modules
var Text = __webpack_require__(95067);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/animation/basicTrasition.js
var basicTrasition = __webpack_require__(21438);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/shape/Polyline.js
var Polyline = __webpack_require__(72160);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/shape/Sector.js + 1 modules
var Sector = __webpack_require__(38502);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(36073);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/view/Chart.js
var Chart = __webpack_require__(99949);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/Point.js
var Point = __webpack_require__(40532);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/label/labelGuideHelper.js
var labelGuideHelper = __webpack_require__(80998);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/label/labelLayoutHelper.js
var labelLayoutHelper = __webpack_require__(94424);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/pie/labelLayout.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ // FIXME emphasis label position is not same with normal label position
var labelLayout_RADIAN=Math.PI/180;function adjustSingleSide(list,cx,cy,r,dir,viewWidth,viewHeight,viewLeft,viewTop,farthestX){if(list.length<2){return;};function recalculateXOnSemiToAlignOnEllipseCurve(semi){var rB=semi.rB;var rB2=rB*rB;for(var i=0;i<semi.list.length;i++){var item=semi.list[i];var dy=Math.abs(item.label.y-cy);// horizontal r is always same with original r because x is not changed.
var rA=r+item.len;var rA2=rA*rA;// Use ellipse implicit function to calculate x
var dx=Math.sqrt((1-Math.abs(dy*dy/rB2))*rA2);var newX=cx+(dx+item.len2)*dir;var deltaX=newX-item.label.x;var newTargetWidth=item.targetTextWidth-deltaX*dir;// text x is changed, so need to recalculate width.
constrainTextWidth(item,newTargetWidth,true);item.label.x=newX;}}// Adjust X based on the shifted y. Make tight labels aligned on an ellipse curve.
function recalculateX(items){// Extremes of
var topSemi={list:[],maxY:0};var bottomSemi={list:[],maxY:0};for(var i=0;i<items.length;i++){if(items[i].labelAlignTo!=='none'){continue;}var item=items[i];var semi=item.label.y>cy?bottomSemi:topSemi;var dy=Math.abs(item.label.y-cy);if(dy>=semi.maxY){var dx=item.label.x-cx-item.len2*dir;// horizontal r is always same with original r because x is not changed.
var rA=r+item.len;// Canculate rB based on the topest / bottemest label.
var rB=Math.abs(dx)<rA?Math.sqrt(dy*dy/(1-dx*dx/rA/rA)):rA;semi.rB=rB;semi.maxY=dy;}semi.list.push(item);}recalculateXOnSemiToAlignOnEllipseCurve(topSemi);recalculateXOnSemiToAlignOnEllipseCurve(bottomSemi);}var len=list.length;for(var i=0;i<len;i++){if(list[i].position==='outer'&&list[i].labelAlignTo==='labelLine'){var dx=list[i].label.x-farthestX;list[i].linePoints[1][0]+=dx;list[i].label.x=farthestX;}}if((0,labelLayoutHelper/* shiftLayoutOnY */.GI)(list,viewTop,viewTop+viewHeight)){recalculateX(list);}}function avoidOverlap(labelLayoutList,cx,cy,r,viewWidth,viewHeight,viewLeft,viewTop){var leftList=[];var rightList=[];var leftmostX=Number.MAX_VALUE;var rightmostX=-Number.MAX_VALUE;for(var i=0;i<labelLayoutList.length;i++){var label=labelLayoutList[i].label;if(isPositionCenter(labelLayoutList[i])){continue;}if(label.x<cx){leftmostX=Math.min(leftmostX,label.x);leftList.push(labelLayoutList[i]);}else{rightmostX=Math.max(rightmostX,label.x);rightList.push(labelLayoutList[i]);}}for(var i=0;i<labelLayoutList.length;i++){var layout=labelLayoutList[i];if(!isPositionCenter(layout)&&layout.linePoints){if(layout.labelStyleWidth!=null){continue;}var label=layout.label;var linePoints=layout.linePoints;var targetTextWidth=void 0;if(layout.labelAlignTo==='edge'){if(label.x<cx){targetTextWidth=linePoints[2][0]-layout.labelDistance-viewLeft-layout.edgeDistance;}else{targetTextWidth=viewLeft+viewWidth-layout.edgeDistance-linePoints[2][0]-layout.labelDistance;}}else if(layout.labelAlignTo==='labelLine'){if(label.x<cx){targetTextWidth=leftmostX-viewLeft-layout.bleedMargin;}else{targetTextWidth=viewLeft+viewWidth-rightmostX-layout.bleedMargin;}}else{if(label.x<cx){targetTextWidth=label.x-viewLeft-layout.bleedMargin;}else{targetTextWidth=viewLeft+viewWidth-label.x-layout.bleedMargin;}}layout.targetTextWidth=targetTextWidth;constrainTextWidth(layout,targetTextWidth);}}adjustSingleSide(rightList,cx,cy,r,1,viewWidth,viewHeight,viewLeft,viewTop,rightmostX);adjustSingleSide(leftList,cx,cy,r,-1,viewWidth,viewHeight,viewLeft,viewTop,leftmostX);for(var i=0;i<labelLayoutList.length;i++){var layout=labelLayoutList[i];if(!isPositionCenter(layout)&&layout.linePoints){var label=layout.label;var linePoints=layout.linePoints;var isAlignToEdge=layout.labelAlignTo==='edge';var padding=label.style.padding;var paddingH=padding?padding[1]+padding[3]:0;// textRect.width already contains paddingH if bgColor is set
var extraPaddingH=label.style.backgroundColor?0:paddingH;var realTextWidth=layout.rect.width+extraPaddingH;var dist=linePoints[1][0]-linePoints[2][0];if(isAlignToEdge){if(label.x<cx){linePoints[2][0]=viewLeft+layout.edgeDistance+realTextWidth+layout.labelDistance;}else{linePoints[2][0]=viewLeft+viewWidth-layout.edgeDistance-realTextWidth-layout.labelDistance;}}else{if(label.x<cx){linePoints[2][0]=label.x+layout.labelDistance;}else{linePoints[2][0]=label.x-layout.labelDistance;}linePoints[1][0]=linePoints[2][0]+dist;}linePoints[1][1]=linePoints[2][1]=label.y;}}}/**
 * Set max width of each label, and then wrap each label to the max width.
 *
 * @param layout label layout
 * @param availableWidth max width for the label to display
 * @param forceRecalculate recaculate the text layout even if the current width
 * is smaller than `availableWidth`. This is useful when the text was previously
 * wrapped by calling `constrainTextWidth` but now `availableWidth` changed, in
 * which case, previous wrapping should be redo.
 */function constrainTextWidth(layout,availableWidth,forceRecalculate){if(forceRecalculate===void 0){forceRecalculate=false;}if(layout.labelStyleWidth!=null){// User-defined style.width has the highest priority.
return;}var label=layout.label;var style=label.style;var textRect=layout.rect;var bgColor=style.backgroundColor;var padding=style.padding;var paddingH=padding?padding[1]+padding[3]:0;var overflow=style.overflow;// textRect.width already contains paddingH if bgColor is set
var oldOuterWidth=textRect.width+(bgColor?0:paddingH);if(availableWidth<oldOuterWidth||forceRecalculate){var oldHeight=textRect.height;if(overflow&&overflow.match('break')){// Temporarily set background to be null to calculate
// the bounding box without backgroud.
label.setStyle('backgroundColor',null);// Set constraining width
label.setStyle('width',availableWidth-paddingH);// This is the real bounding box of the text without padding
var innerRect=label.getBoundingRect();label.setStyle('width',Math.ceil(innerRect.width));label.setStyle('backgroundColor',bgColor);}else{var availableInnerWidth=availableWidth-paddingH;var newWidth=availableWidth<oldOuterWidth// Current text is too wide, use `availableWidth` as max width.
?availableInnerWidth:// Current available width is enough, but the text may have
// already been wrapped with a smaller available width.
forceRecalculate?availableInnerWidth>layout.unconstrainedWidth// Current available is larger than text width,
// so don't constrain width (otherwise it may have
// empty space in the background).
?null// Current available is smaller than text width, so
// use the current available width as constraining
// width.
:availableInnerWidth:// Current available width is enough, so no need to
// constrain.
null;label.setStyle('width',newWidth);}var newRect=label.getBoundingRect();textRect.width=newRect.width;var margin=(label.style.margin||0)+2.1;textRect.height=newRect.height+margin;textRect.y-=(textRect.height-oldHeight)/2;}}function isPositionCenter(sectorShape){// Not change x for center label
return sectorShape.position==='center';}function pieLabelLayout(seriesModel){var data=seriesModel.getData();var labelLayoutList=[];var cx;var cy;var hasLabelRotate=false;var minShowLabelRadian=(seriesModel.get('minShowLabelAngle')||0)*labelLayout_RADIAN;var viewRect=data.getLayout('viewRect');var r=data.getLayout('r');var viewWidth=viewRect.width;var viewLeft=viewRect.x;var viewTop=viewRect.y;var viewHeight=viewRect.height;function setNotShow(el){el.ignore=true;}function isLabelShown(label){if(!label.ignore){return true;}for(var key in label.states){if(label.states[key].ignore===false){return true;}}return false;}data.each(function(idx){var sector=data.getItemGraphicEl(idx);var sectorShape=sector.shape;var label=sector.getTextContent();var labelLine=sector.getTextGuideLine();var itemModel=data.getItemModel(idx);var labelModel=itemModel.getModel('label');// Use position in normal or emphasis
var labelPosition=labelModel.get('position')||itemModel.get(['emphasis','label','position']);var labelDistance=labelModel.get('distanceToLabelLine');var labelAlignTo=labelModel.get('alignTo');var edgeDistance=(0,number/* parsePercent */.GM)(labelModel.get('edgeDistance'),viewWidth);var bleedMargin=labelModel.get('bleedMargin');var labelLineModel=itemModel.getModel('labelLine');var labelLineLen=labelLineModel.get('length');labelLineLen=(0,number/* parsePercent */.GM)(labelLineLen,viewWidth);var labelLineLen2=labelLineModel.get('length2');labelLineLen2=(0,number/* parsePercent */.GM)(labelLineLen2,viewWidth);if(Math.abs(sectorShape.endAngle-sectorShape.startAngle)<minShowLabelRadian){(0,util/* each */.S6)(label.states,setNotShow);label.ignore=true;return;}if(!isLabelShown(label)){return;}var midAngle=(sectorShape.startAngle+sectorShape.endAngle)/2;var nx=Math.cos(midAngle);var ny=Math.sin(midAngle);var textX;var textY;var linePoints;var textAlign;cx=sectorShape.cx;cy=sectorShape.cy;var isLabelInside=labelPosition==='inside'||labelPosition==='inner';if(labelPosition==='center'){textX=sectorShape.cx;textY=sectorShape.cy;textAlign='center';}else{var x1=(isLabelInside?(sectorShape.r+sectorShape.r0)/2*nx:sectorShape.r*nx)+cx;var y1=(isLabelInside?(sectorShape.r+sectorShape.r0)/2*ny:sectorShape.r*ny)+cy;textX=x1+nx*3;textY=y1+ny*3;if(!isLabelInside){// For roseType
var x2=x1+nx*(labelLineLen+r-sectorShape.r);var y2=y1+ny*(labelLineLen+r-sectorShape.r);var x3=x2+(nx<0?-1:1)*labelLineLen2;var y3=y2;if(labelAlignTo==='edge'){// Adjust textX because text align of edge is opposite
textX=nx<0?viewLeft+edgeDistance:viewLeft+viewWidth-edgeDistance;}else{textX=x3+(nx<0?-labelDistance:labelDistance);}textY=y3;linePoints=[[x1,y1],[x2,y2],[x3,y3]];}textAlign=isLabelInside?'center':labelAlignTo==='edge'?nx>0?'right':'left':nx>0?'left':'right';}var PI=Math.PI;var labelRotate=0;var rotate=labelModel.get('rotate');if((0,util/* isNumber */.hj)(rotate)){labelRotate=rotate*(PI/180);}else if(labelPosition==='center'){labelRotate=0;}else if(rotate==='radial'||rotate===true){var radialAngle=nx<0?-midAngle+PI:-midAngle;labelRotate=radialAngle;}else if(rotate==='tangential'&&labelPosition!=='outside'&&labelPosition!=='outer'){var rad=Math.atan2(nx,ny);if(rad<0){rad=PI*2+rad;}var isDown=ny>0;if(isDown){rad=PI+rad;}labelRotate=rad-PI;}hasLabelRotate=!!labelRotate;label.x=textX;label.y=textY;label.rotation=labelRotate;label.setStyle({verticalAlign:'middle'});// Not sectorShape the inside label
if(!isLabelInside){var textRect=label.getBoundingRect().clone();textRect.applyTransform(label.getComputedTransform());// Text has a default 1px stroke. Exclude this.
var margin=(label.style.margin||0)+2.1;textRect.y-=margin/2;textRect.height+=margin;labelLayoutList.push({label:label,labelLine:labelLine,position:labelPosition,len:labelLineLen,len2:labelLineLen2,minTurnAngle:labelLineModel.get('minTurnAngle'),maxSurfaceAngle:labelLineModel.get('maxSurfaceAngle'),surfaceNormal:new Point/* default */.Z(nx,ny),linePoints:linePoints,textAlign:textAlign,labelDistance:labelDistance,labelAlignTo:labelAlignTo,edgeDistance:edgeDistance,bleedMargin:bleedMargin,rect:textRect,unconstrainedWidth:textRect.width,labelStyleWidth:label.style.width});}else{label.setStyle({align:textAlign});var selectState=label.states.select;if(selectState){selectState.x+=label.x;selectState.y+=label.y;}}sector.setTextConfig({inside:isLabelInside});});if(!hasLabelRotate&&seriesModel.get('avoidLabelOverlap')){avoidOverlap(labelLayoutList,cx,cy,r,viewWidth,viewHeight,viewLeft,viewTop);}for(var i=0;i<labelLayoutList.length;i++){var layout=labelLayoutList[i];var label=layout.label;var labelLine=layout.labelLine;var notShowLabel=isNaN(label.x)||isNaN(label.y);if(label){label.setStyle({align:layout.textAlign});if(notShowLabel){(0,util/* each */.S6)(label.states,setNotShow);label.ignore=true;}var selectState=label.states.select;if(selectState){selectState.x+=label.x;selectState.y+=label.y;}}if(labelLine){var linePoints=layout.linePoints;if(notShowLabel||!linePoints){(0,util/* each */.S6)(labelLine.states,setNotShow);labelLine.ignore=true;}else{(0,labelGuideHelper/* limitTurnAngle */.qK)(linePoints,layout.minTurnAngle);(0,labelGuideHelper/* limitSurfaceAngle */._A)(linePoints,layout.surfaceNormal,layout.maxSurfaceAngle);labelLine.setShape({points:linePoints});// Set the anchor to the midpoint of sector
label.__hostTarget.textGuideLineConfig={anchor:new Point/* default */.Z(linePoints[0][0],linePoints[0][1])};}}}}
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/label/labelStyle.js
var labelStyle = __webpack_require__(9610);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/contain/text.js
var contain_text = __webpack_require__(20194);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/helper/pieHelper.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/function getSectorCornerRadius(model,shape,zeroIfNull){var cornerRadius=model.get('borderRadius');if(cornerRadius==null){return zeroIfNull?{cornerRadius:0}:null;}if(!(0,util/* isArray */.kJ)(cornerRadius)){cornerRadius=[cornerRadius,cornerRadius,cornerRadius,cornerRadius];}var dr=Math.abs(shape.r||0-shape.r0||0);return{cornerRadius:(0,util/* map */.UI)(cornerRadius,function(cr){return (0,contain_text/* parsePercent */.GM)(cr,dr);})};}
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/pie/PieView.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*//**
 * Piece of pie including Sector, Label, LabelLine
 */var PiePiece=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(PiePiece,_super);function PiePiece(data,idx,startAngle){var _this=_super.call(this)||this;_this.z2=2;var text=new Text/* default */.ZP();_this.setTextContent(text);_this.updateData(data,idx,startAngle,true);return _this;}PiePiece.prototype.updateData=function(data,idx,startAngle,firstCreate){var sector=this;var seriesModel=data.hostModel;var itemModel=data.getItemModel(idx);var emphasisModel=itemModel.getModel('emphasis');var layout=data.getItemLayout(idx);// cornerRadius & innerCornerRadius doesn't exist in the item layout. Use `0` if null value is specified.
// see `setItemLayout` in `pieLayout.ts`.
var sectorShape=(0,util/* extend */.l7)(getSectorCornerRadius(itemModel.getModel('itemStyle'),layout,true),layout);// Ignore NaN data.
if(isNaN(sectorShape.startAngle)){// Use NaN shape to avoid drawing shape.
sector.setShape(sectorShape);return;}if(firstCreate){sector.setShape(sectorShape);var animationType=seriesModel.getShallow('animationType');if(seriesModel.ecModel.ssr){// Use scale animation in SSR mode(opacity?)
// Because CSS SVG animation doesn't support very customized shape animation.
basicTrasition/* initProps */.KZ(sector,{scaleX:0,scaleY:0},seriesModel,{dataIndex:idx,isFrom:true});sector.originX=sectorShape.cx;sector.originY=sectorShape.cy;}else if(animationType==='scale'){sector.shape.r=layout.r0;basicTrasition/* initProps */.KZ(sector,{shape:{r:layout.r}},seriesModel,idx);}// Expansion
else{if(startAngle!=null){sector.setShape({startAngle:startAngle,endAngle:startAngle});basicTrasition/* initProps */.KZ(sector,{shape:{startAngle:layout.startAngle,endAngle:layout.endAngle}},seriesModel,idx);}else{sector.shape.endAngle=layout.startAngle;basicTrasition/* updateProps */.D(sector,{shape:{endAngle:layout.endAngle}},seriesModel,idx);}}}else{(0,basicTrasition/* saveOldStyle */.Zi)(sector);// Transition animation from the old shape
basicTrasition/* updateProps */.D(sector,{shape:sectorShape},seriesModel,idx);}sector.useStyle(data.getItemVisual(idx,'style'));(0,states/* setStatesStylesFromModel */.WO)(sector,itemModel);var midAngle=(layout.startAngle+layout.endAngle)/2;var offset=seriesModel.get('selectedOffset');var dx=Math.cos(midAngle)*offset;var dy=Math.sin(midAngle)*offset;var cursorStyle=itemModel.getShallow('cursor');cursorStyle&&sector.attr('cursor',cursorStyle);this._updateLabel(seriesModel,data,idx);sector.ensureState('emphasis').shape=(0,util/* extend */.l7)({r:layout.r+(emphasisModel.get('scale')?emphasisModel.get('scaleSize')||0:0)},getSectorCornerRadius(emphasisModel.getModel('itemStyle'),layout));(0,util/* extend */.l7)(sector.ensureState('select'),{x:dx,y:dy,shape:getSectorCornerRadius(itemModel.getModel(['select','itemStyle']),layout)});(0,util/* extend */.l7)(sector.ensureState('blur'),{shape:getSectorCornerRadius(itemModel.getModel(['blur','itemStyle']),layout)});var labelLine=sector.getTextGuideLine();var labelText=sector.getTextContent();labelLine&&(0,util/* extend */.l7)(labelLine.ensureState('select'),{x:dx,y:dy});// TODO: needs dx, dy in zrender?
(0,util/* extend */.l7)(labelText.ensureState('select'),{x:dx,y:dy});(0,states/* toggleHoverEmphasis */.k5)(this,emphasisModel.get('focus'),emphasisModel.get('blurScope'),emphasisModel.get('disabled'));};PiePiece.prototype._updateLabel=function(seriesModel,data,idx){var sector=this;var itemModel=data.getItemModel(idx);var labelLineModel=itemModel.getModel('labelLine');var style=data.getItemVisual(idx,'style');var visualColor=style&&style.fill;var visualOpacity=style&&style.opacity;(0,labelStyle/* setLabelStyle */.ni)(sector,(0,labelStyle/* getLabelStatesModels */.k3)(itemModel),{labelFetcher:data.hostModel,labelDataIndex:idx,inheritColor:visualColor,defaultOpacity:visualOpacity,defaultText:seriesModel.getFormattedLabel(idx,'normal')||data.getName(idx)});var labelText=sector.getTextContent();// Set textConfig on sector.
sector.setTextConfig({// reset position, rotation
position:null,rotation:null});// Make sure update style on labelText after setLabelStyle.
// Because setLabelStyle will replace a new style on it.
labelText.attr({z2:10});var labelPosition=seriesModel.get(['label','position']);if(labelPosition!=='outside'&&labelPosition!=='outer'){sector.removeTextGuideLine();}else{var polyline=this.getTextGuideLine();if(!polyline){polyline=new Polyline/* default */.Z();this.setTextGuideLine(polyline);}// Default use item visual color
(0,labelGuideHelper/* setLabelLineStyle */.Iu)(this,(0,labelGuideHelper/* getLabelLineStatesModels */.$x)(itemModel),{stroke:visualColor,opacity:(0,util/* retrieve3 */.R1)(labelLineModel.get(['lineStyle','opacity']),visualOpacity,1)});}};return PiePiece;}(Sector/* default */.C);// Pie view
var PieView=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(PieView,_super);function PieView(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.ignoreLabelLineUpdate=true;return _this;}PieView.prototype.render=function(seriesModel,ecModel,api,payload){var data=seriesModel.getData();var oldData=this._data;var group=this.group;var startAngle;// First render
if(!oldData&&data.count()>0){var shape=data.getItemLayout(0);for(var s=1;isNaN(shape&&shape.startAngle)&&s<data.count();++s){shape=data.getItemLayout(s);}if(shape){startAngle=shape.startAngle;}}// remove empty-circle if it exists
if(this._emptyCircleSector){group.remove(this._emptyCircleSector);}// when all data are filtered, show lightgray empty circle
if(data.count()===0&&seriesModel.get('showEmptyCircle')){var sector=new Sector/* default */.C({shape:getBasicPieLayout(seriesModel,api)});sector.useStyle(seriesModel.getModel('emptyCircleStyle').getItemStyle());this._emptyCircleSector=sector;group.add(sector);}data.diff(oldData).add(function(idx){var piePiece=new PiePiece(data,idx,startAngle);data.setItemGraphicEl(idx,piePiece);group.add(piePiece);}).update(function(newIdx,oldIdx){var piePiece=oldData.getItemGraphicEl(oldIdx);piePiece.updateData(data,newIdx,startAngle);piePiece.off('click');group.add(piePiece);data.setItemGraphicEl(newIdx,piePiece);}).remove(function(idx){var piePiece=oldData.getItemGraphicEl(idx);basicTrasition/* removeElementWithFadeOut */.XD(piePiece,seriesModel,idx);}).execute();pieLabelLayout(seriesModel);// Always use initial animation.
if(seriesModel.get('animationTypeUpdate')!=='expansion'){this._data=data;}};PieView.prototype.dispose=function(){};PieView.prototype.containPoint=function(point,seriesModel){var data=seriesModel.getData();var itemLayout=data.getItemLayout(0);if(itemLayout){var dx=point[0]-itemLayout.cx;var dy=point[1]-itemLayout.cy;var radius=Math.sqrt(dx*dx+dy*dy);return radius<=itemLayout.r&&radius>=itemLayout.r0;}};PieView.type='pie';return PieView;}(Chart/* default */.Z);/* harmony default export */ const pie_PieView = (PieView);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/chart/helper/createSeriesDataSimply.js
var createSeriesDataSimply = __webpack_require__(97451);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(23958);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/data/helper/sourceHelper.js
var sourceHelper = __webpack_require__(47386);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/visual/LegendVisualProvider.js
var LegendVisualProvider = __webpack_require__(25739);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/model/Series.js
var Series = __webpack_require__(49261);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/pie/PieSeries.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/var PieSeriesModel=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(PieSeriesModel,_super);function PieSeriesModel(){return _super!==null&&_super.apply(this,arguments)||this;}/**
   * @overwrite
   */PieSeriesModel.prototype.init=function(option){_super.prototype.init.apply(this,arguments);// Enable legend selection for each data item
// Use a function instead of direct access because data reference may changed
this.legendVisualProvider=new LegendVisualProvider/* default */.Z(util/* bind */.ak(this.getData,this),util/* bind */.ak(this.getRawData,this));this._defaultLabelLine(option);};/**
   * @overwrite
   */PieSeriesModel.prototype.mergeOption=function(){_super.prototype.mergeOption.apply(this,arguments);};/**
   * @overwrite
   */PieSeriesModel.prototype.getInitialData=function(){return (0,createSeriesDataSimply/* default */.Z)(this,{coordDimensions:['value'],encodeDefaulter:util/* curry */.WA(sourceHelper/* makeSeriesEncodeForNameBased */.Ss,this)});};/**
   * @overwrite
   */PieSeriesModel.prototype.getDataParams=function(dataIndex){var data=this.getData();var params=_super.prototype.getDataParams.call(this,dataIndex);// FIXME toFixed?
var valueList=[];data.each(data.mapDimension('value'),function(value){valueList.push(value);});params.percent=(0,number/* getPercentWithPrecision */.eJ)(valueList,dataIndex,data.hostModel.get('percentPrecision'));params.$vars.push('percent');return params;};PieSeriesModel.prototype._defaultLabelLine=function(option){// Extend labelLine emphasis
model/* defaultEmphasis */.Cc(option,'labelLine',['show']);var labelLineNormalOpt=option.labelLine;var labelLineEmphasisOpt=option.emphasis.labelLine;// Not show label line if `label.normal.show = false`
labelLineNormalOpt.show=labelLineNormalOpt.show&&option.label.show;labelLineEmphasisOpt.show=labelLineEmphasisOpt.show&&option.emphasis.label.show;};PieSeriesModel.type='series.pie';PieSeriesModel.defaultOption={// zlevel: 0,
z:2,legendHoverLink:true,colorBy:'data',// 默认全局居中
center:['50%','50%'],radius:[0,'75%'],// 默认顺时针
clockwise:true,startAngle:90,// 最小角度改为0
minAngle:0,// If the angle of a sector less than `minShowLabelAngle`,
// the label will not be displayed.
minShowLabelAngle:0,// 选中时扇区偏移量
selectedOffset:10,// 选择模式，默认关闭，可选single，multiple
// selectedMode: false,
// 南丁格尔玫瑰图模式，'radius'（半径） | 'area'（面积）
// roseType: null,
percentPrecision:2,// If still show when all data zero.
stillShowZeroSum:true,// cursor: null,
left:0,top:0,right:0,bottom:0,width:null,height:null,label:{// color: 'inherit',
// If rotate around circle
rotate:0,show:true,overflow:'truncate',// 'outer', 'inside', 'center'
position:'outer',// 'none', 'labelLine', 'edge'. Works only when position is 'outer'
alignTo:'none',// Closest distance between label and chart edge.
// Works only position is 'outer' and alignTo is 'edge'.
edgeDistance:'25%',// Works only position is 'outer' and alignTo is not 'edge'.
bleedMargin:10,// Distance between text and label line.
distanceToLabelLine:5// formatter: 标签文本格式器，同Tooltip.formatter，不支持异步回调
// 默认使用全局文本样式，详见TEXTSTYLE
// distance: 当position为inner时有效，为label位置到圆心的距离与圆半径(环状图为内外半径和)的比例系数
},// Enabled when label.normal.position is 'outer'
labelLine:{show:true,// 引导线两段中的第一段长度
length:15,// 引导线两段中的第二段长度
length2:15,smooth:false,minTurnAngle:90,maxSurfaceAngle:90,lineStyle:{// color: 各异,
width:1,type:'solid'}},itemStyle:{borderWidth:1,borderJoin:'round'},showEmptyCircle:true,emptyCircleStyle:{color:'lightgray',opacity:1},labelLayout:{// Hide the overlapped label.
hideOverlap:true},emphasis:{scale:true,scaleSize:5},// If use strategy to avoid label overlapping
avoidLabelOverlap:true,// Animation type. Valid values: expansion, scale
animationType:'expansion',animationDuration:1000,// Animation type when update. Valid values: transition, expansion
animationTypeUpdate:'transition',animationEasingUpdate:'cubicInOut',animationDurationUpdate:500,animationEasing:'cubicInOut'};return PieSeriesModel;}(Series/* default */.Z);/* harmony default export */ const PieSeries = (PieSeriesModel);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/processor/negativeDataFilter.js
var negativeDataFilter = __webpack_require__(76365);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/pie/install.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/function install(registers){registers.registerChartView(pie_PieView);registers.registerSeriesModel(PieSeries);(0,dataSelectAction/* createLegacyDataSelectAction */.y)('pie',registers.registerAction);registers.registerLayout((0,util/* curry */.WA)(pieLayout,'pie'));registers.registerProcessor((0,dataFilter/* default */.Z)('pie'));registers.registerProcessor((0,negativeDataFilter/* default */.Z)('pie'));}
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/pie.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/(0,extension/* use */.D)(install);

/***/ }),

/***/ 56713:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/extension.js
var extension = __webpack_require__(37107);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(88161);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/chart/helper/createSeriesData.js
var createSeriesData = __webpack_require__(38839);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/model/Series.js
var Series = __webpack_require__(49261);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/scatter/ScatterSeries.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/var ScatterSeriesModel=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(ScatterSeriesModel,_super);function ScatterSeriesModel(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=ScatterSeriesModel.type;_this.hasSymbolVisual=true;return _this;}ScatterSeriesModel.prototype.getInitialData=function(option,ecModel){return (0,createSeriesData/* default */.Z)(null,this,{useEncodeDefaulter:true});};ScatterSeriesModel.prototype.getProgressive=function(){var progressive=this.option.progressive;if(progressive==null){// PENDING
return this.option.large?5e3:this.get('progressive');}return progressive;};ScatterSeriesModel.prototype.getProgressiveThreshold=function(){var progressiveThreshold=this.option.progressiveThreshold;if(progressiveThreshold==null){// PENDING
return this.option.large?1e4:this.get('progressiveThreshold');}return progressiveThreshold;};ScatterSeriesModel.prototype.brushSelector=function(dataIndex,data,selectors){return selectors.point(data.getItemLayout(dataIndex));};ScatterSeriesModel.prototype.getZLevelKey=function(){// Each progressive series has individual key.
return this.getData().count()>this.getProgressiveThreshold()?this.id:'';};ScatterSeriesModel.type='series.scatter';ScatterSeriesModel.dependencies=['grid','polar','geo','singleAxis','calendar'];ScatterSeriesModel.defaultOption={coordinateSystem:'cartesian2d',// zlevel: 0,
z:2,legendHoverLink:true,symbolSize:10,// symbolRotate: null,  // 图形旋转控制
large:false,// Available when large is true
largeThreshold:2000,// cursor: null,
itemStyle:{opacity:0.8// color: 各异
},emphasis:{scale:true},// If clip the overflow graphics
// Works on cartesian / polar series
clip:true,select:{itemStyle:{borderColor:'#212121'}},universalTransition:{divideShape:'clone'}// progressive: null
};return ScatterSeriesModel;}(Series/* default */.Z);/* harmony default export */ const ScatterSeries = (ScatterSeriesModel);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/chart/helper/SymbolDraw.js
var SymbolDraw = __webpack_require__(88087);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/BoundingRect.js
var BoundingRect = __webpack_require__(54865);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/Path.js + 3 modules
var Path = __webpack_require__(73727);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/Group.js
var Group = __webpack_require__(22060);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/symbol.js
var symbol = __webpack_require__(33518);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(5661);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/helper/LargeSymbolDraw.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*//* global Float32Array */ // TODO Batch by color
var BOOST_SIZE_THRESHOLD=4;var LargeSymbolPathShape=/** @class */function(){function LargeSymbolPathShape(){}return LargeSymbolPathShape;}();var LargeSymbolPath=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(LargeSymbolPath,_super);function LargeSymbolPath(opts){var _this=_super.call(this,opts)||this;_this._off=0;_this.hoverDataIdx=-1;return _this;}LargeSymbolPath.prototype.getDefaultShape=function(){return new LargeSymbolPathShape();};LargeSymbolPath.prototype.reset=function(){this.notClear=false;this._off=0;};LargeSymbolPath.prototype.buildPath=function(path,shape){var points=shape.points;var size=shape.size;var symbolProxy=this.symbolProxy;var symbolProxyShape=symbolProxy.shape;var ctx=path.getContext?path.getContext():path;var canBoost=ctx&&size[0]<BOOST_SIZE_THRESHOLD;var softClipShape=this.softClipShape;var i;// Do draw in afterBrush.
if(canBoost){this._ctx=ctx;return;}this._ctx=null;for(i=this._off;i<points.length;){var x=points[i++];var y=points[i++];if(isNaN(x)||isNaN(y)){continue;}if(softClipShape&&!softClipShape.contain(x,y)){continue;}symbolProxyShape.x=x-size[0]/2;symbolProxyShape.y=y-size[1]/2;symbolProxyShape.width=size[0];symbolProxyShape.height=size[1];symbolProxy.buildPath(path,symbolProxyShape,true);}if(this.incremental){this._off=i;this.notClear=true;}};LargeSymbolPath.prototype.afterBrush=function(){var shape=this.shape;var points=shape.points;var size=shape.size;var ctx=this._ctx;var softClipShape=this.softClipShape;var i;if(!ctx){return;}// PENDING If style or other canvas status changed?
for(i=this._off;i<points.length;){var x=points[i++];var y=points[i++];if(isNaN(x)||isNaN(y)){continue;}if(softClipShape&&!softClipShape.contain(x,y)){continue;}// fillRect is faster than building a rect path and draw.
// And it support light globalCompositeOperation.
ctx.fillRect(x-size[0]/2,y-size[1]/2,size[0],size[1]);}if(this.incremental){this._off=i;this.notClear=true;}};LargeSymbolPath.prototype.findDataIndex=function(x,y){// TODO ???
// Consider transform
var shape=this.shape;var points=shape.points;var size=shape.size;var w=Math.max(size[0],4);var h=Math.max(size[1],4);// Not consider transform
// Treat each element as a rect
// top down traverse
for(var idx=points.length/2-1;idx>=0;idx--){var i=idx*2;var x0=points[i]-w/2;var y0=points[i+1]-h/2;if(x>=x0&&y>=y0&&x<=x0+w&&y<=y0+h){return idx;}}return-1;};LargeSymbolPath.prototype.contain=function(x,y){var localPos=this.transformCoordToLocal(x,y);var rect=this.getBoundingRect();x=localPos[0];y=localPos[1];if(rect.contain(x,y)){// Cache found data index.
var dataIdx=this.hoverDataIdx=this.findDataIndex(x,y);return dataIdx>=0;}this.hoverDataIdx=-1;return false;};LargeSymbolPath.prototype.getBoundingRect=function(){// Ignore stroke for large symbol draw.
var rect=this._rect;if(!rect){var shape=this.shape;var points=shape.points;var size=shape.size;var w=size[0];var h=size[1];var minX=Infinity;var minY=Infinity;var maxX=-Infinity;var maxY=-Infinity;for(var i=0;i<points.length;){var x=points[i++];var y=points[i++];minX=Math.min(x,minX);maxX=Math.max(x,maxX);minY=Math.min(y,minY);maxY=Math.max(y,maxY);}rect=this._rect=new BoundingRect/* default */.Z(minX-w/2,minY-h/2,maxX-minX+w,maxY-minY+h);}return rect;};return LargeSymbolPath;}(Path/* default */.ZP);var LargeSymbolDraw=/** @class */function(){function LargeSymbolDraw(){this.group=new Group/* default */.Z();}/**
   * Update symbols draw by new data
   */LargeSymbolDraw.prototype.updateData=function(data,opt){this._clear();var symbolEl=this._create();symbolEl.setShape({points:data.getLayout('points')});this._setCommon(symbolEl,data,opt);};LargeSymbolDraw.prototype.updateLayout=function(data){var points=data.getLayout('points');this.group.eachChild(function(child){if(child.startIndex!=null){var len=(child.endIndex-child.startIndex)*2;var byteOffset=child.startIndex*4*2;points=new Float32Array(points.buffer,byteOffset,len);}child.setShape('points',points);// Reset draw cursor.
child.reset();});};LargeSymbolDraw.prototype.incrementalPrepareUpdate=function(data){this._clear();};LargeSymbolDraw.prototype.incrementalUpdate=function(taskParams,data,opt){var lastAdded=this._newAdded[0];var points=data.getLayout('points');var oldPoints=lastAdded&&lastAdded.shape.points;// Merging the exists. Each element has 1e4 points.
// Consider the performance balance between too much elements and too much points in one shape(may affect hover optimization)
if(oldPoints&&oldPoints.length<2e4){var oldLen=oldPoints.length;var newPoints=new Float32Array(oldLen+points.length);// Concat two array
newPoints.set(oldPoints);newPoints.set(points,oldLen);// Update endIndex
lastAdded.endIndex=taskParams.end;lastAdded.setShape({points:newPoints});}else{// Clear
this._newAdded=[];var symbolEl=this._create();symbolEl.startIndex=taskParams.start;symbolEl.endIndex=taskParams.end;symbolEl.incremental=true;symbolEl.setShape({points:points});this._setCommon(symbolEl,data,opt);}};LargeSymbolDraw.prototype.eachRendered=function(cb){this._newAdded[0]&&cb(this._newAdded[0]);};LargeSymbolDraw.prototype._create=function(){var symbolEl=new LargeSymbolPath({cursor:'default'});this.group.add(symbolEl);this._newAdded.push(symbolEl);return symbolEl;};LargeSymbolDraw.prototype._setCommon=function(symbolEl,data,opt){var hostModel=data.hostModel;opt=opt||{};var size=data.getVisual('symbolSize');symbolEl.setShape('size',size instanceof Array?size:[size,size]);symbolEl.softClipShape=opt.clipShape||null;// Create symbolProxy to build path for each data
symbolEl.symbolProxy=(0,symbol/* createSymbol */.th)(data.getVisual('symbol'),0,0,0,0);// Use symbolProxy setColor method
symbolEl.setColor=symbolEl.symbolProxy.setColor;var extrudeShadow=symbolEl.shape.size[0]<BOOST_SIZE_THRESHOLD;symbolEl.useStyle(// Draw shadow when doing fillRect is extremely slow.
hostModel.getModel('itemStyle').getItemStyle(extrudeShadow?['color','shadowBlur','shadowColor']:['color']));var globalStyle=data.getVisual('style');var visualColor=globalStyle&&globalStyle.fill;if(visualColor){symbolEl.setColor(visualColor);}var ecData=(0,innerStore/* getECData */.A)(symbolEl);// Enable tooltip
// PENDING May have performance issue when path is extremely large
ecData.seriesIndex=hostModel.seriesIndex;symbolEl.on('mousemove',function(e){ecData.dataIndex=null;var dataIndex=symbolEl.hoverDataIdx;if(dataIndex>=0){// Provide dataIndex for tooltip
ecData.dataIndex=dataIndex+(symbolEl.startIndex||0);}});};LargeSymbolDraw.prototype.remove=function(){this._clear();};LargeSymbolDraw.prototype._clear=function(){this._newAdded=[];this.group.removeAll();};return LargeSymbolDraw;}();/* harmony default export */ const helper_LargeSymbolDraw = (LargeSymbolDraw);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/layout/points.js
var points = __webpack_require__(13329);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/view/Chart.js
var Chart = __webpack_require__(99949);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/scatter/ScatterView.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/var ScatterView=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(ScatterView,_super);function ScatterView(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=ScatterView.type;return _this;}ScatterView.prototype.render=function(seriesModel,ecModel,api){var data=seriesModel.getData();var symbolDraw=this._updateSymbolDraw(data,seriesModel);symbolDraw.updateData(data,{// TODO
// If this parameter should be a shape or a bounding volume
// shape will be more general.
// But bounding volume like bounding rect will be much faster in the contain calculation
clipShape:this._getClipShape(seriesModel)});this._finished=true;};ScatterView.prototype.incrementalPrepareRender=function(seriesModel,ecModel,api){var data=seriesModel.getData();var symbolDraw=this._updateSymbolDraw(data,seriesModel);symbolDraw.incrementalPrepareUpdate(data);this._finished=false;};ScatterView.prototype.incrementalRender=function(taskParams,seriesModel,ecModel){this._symbolDraw.incrementalUpdate(taskParams,seriesModel.getData(),{clipShape:this._getClipShape(seriesModel)});this._finished=taskParams.end===seriesModel.getData().count();};ScatterView.prototype.updateTransform=function(seriesModel,ecModel,api){var data=seriesModel.getData();// Must mark group dirty and make sure the incremental layer will be cleared
// PENDING
this.group.dirty();if(!this._finished||data.count()>1e4){return{update:true};}else{var res=(0,points/* default */.Z)('').reset(seriesModel,ecModel,api);if(res.progress){res.progress({start:0,end:data.count(),count:data.count()},data);}this._symbolDraw.updateLayout(data);}};ScatterView.prototype.eachRendered=function(cb){this._symbolDraw&&this._symbolDraw.eachRendered(cb);};ScatterView.prototype._getClipShape=function(seriesModel){var coordSys=seriesModel.coordinateSystem;var clipArea=coordSys&&coordSys.getArea&&coordSys.getArea();return seriesModel.get('clip',true)?clipArea:null;};ScatterView.prototype._updateSymbolDraw=function(data,seriesModel){var symbolDraw=this._symbolDraw;var pipelineContext=seriesModel.pipelineContext;var isLargeDraw=pipelineContext.large;if(!symbolDraw||isLargeDraw!==this._isLargeDraw){symbolDraw&&symbolDraw.remove();symbolDraw=this._symbolDraw=isLargeDraw?new helper_LargeSymbolDraw():new SymbolDraw/* default */.Z();this._isLargeDraw=isLargeDraw;this.group.removeAll();}this.group.add(symbolDraw.group);return symbolDraw;};ScatterView.prototype.remove=function(ecModel,api){this._symbolDraw&&this._symbolDraw.remove(true);this._symbolDraw=null;};ScatterView.prototype.dispose=function(){};ScatterView.type='scatter';return ScatterView;}(Chart/* default */.Z);/* harmony default export */ const scatter_ScatterView = (ScatterView);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/component/grid/installSimple.js + 15 modules
var installSimple = __webpack_require__(66114);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/scatter/install.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/function install(registers){// In case developer forget to include grid component
(0,extension/* use */.D)(installSimple/* install */.N);registers.registerSeriesModel(ScatterSeries);registers.registerChartView(scatter_ScatterView);registers.registerLayout((0,points/* default */.Z)('scatter'));}
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/chart/scatter.js
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/(0,extension/* use */.D)(install);

/***/ })

}]);